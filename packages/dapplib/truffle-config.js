require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food plastic riot pizza protect hotel light army gaze'; 
let testAccounts = [
"0xf9af17aeac12cab89fd92983ab1b7e1d2973fd8d079c9f58a530f285b68d4f14",
"0x274bacf0288d5db916156a853652658009fbd590764acd8d8a271bf21d845c1b",
"0x5a824ece04a07a1983fd83b4665bd84a2573a0037959e3b46d5ce02c57c15953",
"0x8e020d262ee30f59ac836bdc97aede048bd7846ecdbaef9959bb6ebe37204b7e",
"0xe4e46aab8820437c0c41512c97fc1bfb11ed06fd299be7b03164e222c1f34d2a",
"0x8b15a85e3ed28c4c9542c07d4f7ac6c078bdb0ceb5c945e3cb8fdbaafcfc5779",
"0x85c1a795e5a2a30aa8d7eadac7a1e9cbcaa1c617dacda1daa99f9536b03a301e",
"0x70bd6019c227093e22961f7e0c6f2d69828b14df305e75a1b2417ee6ebe47f97",
"0xfc7285c465b80f082d48440ba7f3403467f6030f844e83fc475142ca657209aa",
"0x7164e4aea6e8189ef77bd6233849f7ce73bc1f974c756aa0d61cdbb2d2dac817"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


