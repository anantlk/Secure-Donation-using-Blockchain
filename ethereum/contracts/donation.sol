pragma solidity ^0.4.17;


contract OrganizationFactory {
    address[] public deployedOrganizations;

    function createOrganizations(uint minimum, string name, string description) public {
        address newOrganization = new Organization(minimum, name, description, msg.sender);
        deployedOrganizations.push(newOrganization);
    }

    function getDeployedOrganizations() public view returns (address[]) {
        return deployedOrganizations;
    }
}

contract Organization {
    struct Request {
        uint id;
        string description;
        address recipent;
        uint value;
        uint numOfAllowedApprovers;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    mapping (uint => address[]) public reqApprovers;
    address public manager;
    uint public start;
    uint public num;
    uint public approversCount;
    string public organizationName;
    string public description;
    uint public minContribution;
    address[] public approvers;
    Request[] public requests;
    
    function Organization(uint minimum, string name, string desc, address addr) public {
        description = desc;
        organizationName = name;
        manager = addr;
        minContribution = minimum;
        approversCount = 0;
        start = 0;
        num = 3;
    }
    
    //Various Constrained Services
    
    modifier restricted () {
        require(msg.sender == manager);
        _;
    }
    
    function isAprrover(address addr, uint id,uint numOfAllowedApprovers) private returns(bool){
        for(uint i=0;i<numOfAllowedApprovers;i++)
        {
            if(addr == reqApprovers[id][i])
                return true;
        }
        return false;
    }
    
    
    //Functions to retrieve data from blockchain
    
    function getOrganizationDetails() public view returns (string,string) {
        return (
            organizationName,
            description
            );
    }
    
    function getApprovers(uint id,uint numOfAllowedApprovers) private {
        
        uint index;    
        for(uint i=0;i<numOfAllowedApprovers;i++)
        {
            if(start < approversCount)
            {
                reqApprovers[id].push(approvers[start]);
                start = start + 1;
            }
            else {
                start = 0;
                reqApprovers[id].push(approvers[start]);
                start = start + 1;
            }
            
        }
    
    }
    
    function getSummary() public view returns(uint ,uint ,uint ,uint ) {
        return (
            minContribution,
            this.balance,
            requests.length,
            approversCount
        );
    }

    function getRequestsCount() public view returns(uint) {
        return requests.length;
    }
    
    //Functions for the users to take action
    
    function contribute() public payable {
        require(msg.value >= minContribution);
        approvers.push(msg.sender);
        approversCount ++;
    }

    function createRequest(string desc, address vendor, uint value) public restricted {
        require(approversCount >= 3);
        if(approversCount > 10)
            num = uint(approversCount/10);
            
        Request memory newRequest = Request({
            id:requests.length,
            description : desc,
            recipent : vendor,
            value : value,
            numOfAllowedApprovers: num,
            approvalCount : 0,
            complete : false
        });
        requests.push(newRequest);
        getApprovers(newRequest.id,newRequest.numOfAllowedApprovers);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(isAprrover(msg.sender, request.id,request.numOfAllowedApprovers));
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount ++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(!request.complete);
        require(request.approvalCount > reqApprovers[index].length/2);
        
        request.recipent.transfer(request.value);
        request.complete = true;
    }

}