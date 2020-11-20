const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3=require('web3');
const compiledFactory=require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(
  'attend bind skate seat electric shuffle glide current clay sugar coach rude',
  'https://rinkeby.infura.io/v3/b210254a7712482db5cdf01380579699'
);
const web3 = new Web3(provider);
const deploy = async()=>{
  const accounts =await web3.eth.getAccounts();
  console.log('Attempting to deploy from account',accounts[0]);
  const result= await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data:'0x'+compiledFactory.bytecode})
    .send({gas:'1000000',from:accounts[0]});

    //console.log(interface);
    console.log('Contract deployed to',result.options.address);
};
deploy();
