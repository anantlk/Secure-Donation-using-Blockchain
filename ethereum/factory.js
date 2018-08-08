import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb0281Fb1fD10C4F11176f4e77CF9dD152cac9980'
);

export default instance;
