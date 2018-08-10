import web3 from "./web3";
import OrganizationFactory from "./build/OrganizationFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(OrganizationFactory.interface),
  '0xfCa902B46e5F67dCf873e3067eCd54D117fE7aC5'
);

export default instance;
