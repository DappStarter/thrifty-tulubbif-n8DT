require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note spike pulse install basic olympic slot'; 
let testAccounts = [
"0xb338d2df80ab80241c93e648737ea520f861afd2f79a3b80a9c3befd2f125a31",
"0xe46cc3c575182a00000571c0874c08e0b2057a4ad85652487fd13dfa95ac23d2",
"0xa8f11c544c6c436feab7dcbc019a811105ec3209539d2fa6a01b6a7b6d7a6bb9",
"0x60877f410cd3750571c2f5fa3227f0755a5808066cb653c4edcbcdbf0bd6c955",
"0x84a744afe50c9c652908550f8dd385aee70ef673d58cc73f0aa8ac775aa35f72",
"0x44c84eddc8922739b9d852f1a962c52616726e67d37c983b34e04213a9e1435f",
"0xa7162bdb8175ef3ae9a8ccf4c3a1b64fc2c8045938c45013c188b568ad543e4d",
"0xdb08d5fc8931ac0c0b94b1585931b49596b07a55802a02d3389a97ee03735b42",
"0x3f480b952ee00ee2cb56863af977993f12450d12aea6f6a304d95aa85b926cc0",
"0xc63a97cbadbba76314fb1615b135795a34fb7c2e09738eefaeb2e25a23cfc0f4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

