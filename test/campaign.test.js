const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({
        data : compiledFactory.bytecode 
    })
    .send({ from : accounts[0] , gas : '1000000' });

    await factory.methods.createCampaigns('100').send({
        from : accounts[0],
        gas : '1000000'
    });

    //take the first element and get assign its value to the campaignAddress variable
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );

});

describe('Campaigns', () => {
    
    it('deploys a factory and campaign' , () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('checks for caller as manger' , async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0],manager);
    });

    it('allows people to contribute money to the orphanage' , async () => {
        await campaign.methods.contribute().send({
            value : '200',
            from : accounts[1]
        });

        const isContributer = await campaign.methods.approvers(accounts[1]).call();

        assert(isContributer);
    });

    it('requires a minimum contribution' , async () => {
        try {
            await campaign.methods.contribute().send({
                value : '5',
                from : accounts[2]
            });
            assert(false);
        }
        catch(err) {
            assert(err);
        }
    });

    it('allows the manager to make a payment request', async () => {
        await campaign.methods.createRequest(
            'Buy Batteries',
            accounts[1],
            '200'
        )
        .send({
            from : accounts[0],
            gas : '1000000'
        });

        const request = await campaign.methods.requests(0).call();

        assert.equal('Buy Batteries', request.description);
    });

    it('processes requests', async () => {
        
        await campaign.methods.contribute().send({
            value : web3.utils.toWei('10','ether'),
            from : accounts[1]
        });

        await campaign.methods.createRequest(
            'Buy Food',
            accounts[1],
            web3.utils.toWei('5','ether')
        )
        .send({
            from : accounts[0],
            gas : '1000000'
        });

        await campaign.methods.approveRequest(0).send({
            from : accounts[1],
            gas: '1000000'
        });

        await campaign.methods.finalizeRequest(0).send({
            from : accounts[0],
            gas : '1000000'
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance , 'ether');
        console.log(balance);
        assert(parseFloat(balance) > 50);
    })
})