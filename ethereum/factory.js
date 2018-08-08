import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1311bb2a399862Bfc31C3Dd80C705706F545cc30'
);

export default instance;
