"use strict";
// import nacl from 'tweetnacl'
// import util from 'tweetnacl-util'
const base64 = require('js-base64');
const wif = require('wif');
const { fromSeed } = require('bip32');
const { encrypt, decrypt } = require('bip38');
const { entropyToMnemonic, mnemonicToSeedSync } = require('bip39');
const generateNewKey = async (password) => {
    // const keypair = nacl.box.keyPair()
    // const publicKey = util.encodeBase64(keypair.publicKey)
    // const privateKeyRaw = util.encodeBase64(keypair.secretKey)
    const randomBytes = window.crypto.getRandomValues(new Uint32Array(16));
    const mnemonic = entropyToMnemonic(Buffer.from(randomBytes));
    const node = fromSeed(mnemonicToSeedSync(mnemonic));
    const nodePath = node.derivePath("m/44'/0'/0'").derivePath('0/0');
    const { privateKey, compressed } = wif.decode(nodePath.toWIF(), 128);
    const signature = encrypt(privateKey, compressed, password);
    console.log("Signature:", signature);
    console.log("password:", password);
    return {
        mnemonic, signature
    };
};
onmessage = (message) => {
    console.log('Worker: Message received from main script', message);
    // const result = e.data[0] * e.data[1];
    // if (isNaN(result)) {
    //   postMessage('Please write two numbers');
    // } else {
    //   const workerResult = 'Result: ' + result;
    //   console.log('Worker: Posting message back to main script');
    //   postMessage(workerResult);
    // }
};
//# sourceMappingURL=security.js.map