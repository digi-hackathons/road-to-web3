import Web3 from 'web3'
import {STORAGE_CONTRACT_ADDRESS, STORAGE_CONTRACT_ABI} from './smart_contracts'

export default function contract() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:3000');
    return new web3.eth.Contract(STORAGE_CONTRACT_ABI, STORAGE_CONTRACT_ADDRESS);
}
