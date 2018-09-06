pragma solidity ^0.4.23;
import "./Campaign.sol";

contract CampaignFactory {
    address[] public campaigns;
    function createCampaign() public returns(address) {
        address campaign = new Campaign(msg.sender);
        campaigns.push(campaign);
        return campaign;
    }
    
    function getAllCampaigns() public view returns(address[]) {
        return campaigns;
    }
}