import Web3 from 'web3';

let web3;
//will handle when code is executed inside browser
//and metamsk is available
if(typeof window!=='undefined' && typeof window.web3!=='undefined'){ //typeof to see if variable is undefined
   //We are in the browser ans metamask is running
   web3 =new Web3(window.web3.currentProvider);
}
else{
  //We are on the server OR the user is not running metamask
  //We are gonna setup our own provider that connects
  //to rinkeby through infura
  const provider =new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/b210254a7712482db5cdf01380579699'

  );
  web3=new Web3(provider);
}
export default web3;
