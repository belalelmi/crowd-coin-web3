import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE2D7E4bcc7a1DD39672386E6863bD4513B490103'
);

export default instance;