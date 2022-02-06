import Web3 from 'web3'
import {TIP_CONTRACT_ABI, TIP_CONTRACT_ADDRESS} from './smart_contracts'

export default function contract() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:3000');
    return new web3.eth.Contract(TIP_CONTRACT_ADDRESS, TIP_CONTRACT_ABI);
}
