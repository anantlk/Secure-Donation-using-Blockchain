import web3 from "./web3";
import OrganizationFactory from "./build/OrganizationFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(OrganizationFactory.interface),
  '0x83d405DFC499eE4A13Fa2B38BA111eaEFE711dDb'
);

export default instance;
