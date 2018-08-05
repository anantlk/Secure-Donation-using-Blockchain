import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8d2e712e8a71a4c373c2bcfbb7b3c1003ea400ab'
);

export default instance;
