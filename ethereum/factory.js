import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
'0xaEBc2F3443E3Bd89330f69236742ED440D9a4e68'
);
export default instance;
