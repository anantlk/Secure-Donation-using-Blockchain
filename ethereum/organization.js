import web3 from "./web3";
import Organization from "./build/Organization.json";

export default address => {
  return new web3.eth.Contract(JSON.parse(Organization.interface), address);
};
