import web3 from "./web3";
import OrganizationFactory from "./build/OrganizationFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(OrganizationFactory.interface),
  '0x4f91Df2fb98f819C45Ea3F38f08E422f4140859B'
);

export default instance;
