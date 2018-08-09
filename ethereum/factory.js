import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xf498F3d0deBe8CbfaE19c26187B6E8b6351B4919'
);

export default instance;
