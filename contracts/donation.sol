pragma solidity ^0.4.17;

contract Donation {
    
    struct Request {
        string description;
        address recipent;
        uint value;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    address public manager;
    uint approversCount;
    uint public minContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    
    function Donation(uint minimum) public {
        manager = msg.sender;
        minContribution = minimum;
        approversCount = 0;
    }
    
    modifier restricted () {
        require(msg.sender == manager);
        _;
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
}