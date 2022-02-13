import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb114aB18FCeFf95709C571DA58D34D7Ce023D351'
);

export default instance;