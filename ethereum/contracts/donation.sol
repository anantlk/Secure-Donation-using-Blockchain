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
        string description;
        address recipent;
        uint value;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    address public manager;
    uint public approversCount;
    string public organizationName;
    string public description;
    uint public minContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    
    function Organization(uint minimum, string name, string desc, address addr) public {
        description = desc;
        organizationName = name;
        manager = addr;
        minContribution = minimum;
        approversCount = 0;
    }
    
    modifier restricted () {
        require(msg.sender == manager);
        _;
    }
    
    function getOrganizationDetails() public view returns (string,string) {
        return (
            organizationName,
            description
            );
    }
    function contribute() public payable {
        require(msg.value >= minContribution);
        approvers[msg.sender] = true;
        approversCount ++;
    }
    
    function createRequest(string desc, address vendor, uint value) public restricted {
        Request memory newRequest = Request({
            description : desc,
            recipent : vendor,
            value : value,
            approvalCount : 0,
            complete : false
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount ++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(!request.complete);
        require(request.approvalCount > approversCount/2);
        
        request.recipent.transfer(request.value);
        request.complete = true;
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

}