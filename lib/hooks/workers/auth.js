"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import fetch from 'node-fetch'
const eosjs_1 = require("eosjs");
const randombytes_1 = __importDefault(require("randombytes"));
const wif_1 = __importDefault(require("wif"));
const bip32_1 = require("bip32");
const bip38_1 = require("bip38");
const bip39_1 = require("bip39");
// const NET_URL = "http://0.0.0.0:8888"
const NET_URL = "https://jungle3.cryptolions.io:443";
// const NET_URL =  "http://api.eosn.io"
const CARMEL_SYSTEM = "carmelsystem";
const CARMEL_TOKENS = "carmeltokens";
const EOS_TOKENS = "eosio.token";
const ws = (url) => {
    var _ws = null;
    if (typeof WebSocket !== 'undefined') {
        _ws = WebSocket;
    }
    else if (typeof MozWebSocket !== 'undefined') {
        _ws = MozWebSocket;
    }
    else if (typeof global !== 'undefined') {
        _ws = global.WebSocket || global.MozWebSocket;
    }
    else if (typeof window !== 'undefined') {
        _ws = window.WebSocket || window.MozWebSocket;
    }
    else if (typeof self !== 'undefined') {
        _ws = self.WebSocket || self.MozWebSocket;
    }
    return new _ws(url);
};
const connect = async (url, user, login) => {
    const _ws = ws(`ws://${url}`);
    const send = (msg) => _ws.send(JSON.stringify(msg));
    const { mnemonic } = user;
    delete user.mnemonic;
    _ws.onopen = () => {
        postMessage({ skip: true, type: login ? "login" : "register", msg: "open sock.", user });
        send({ type: "register", user });
    };
    _ws.onclose = () => {
        postMessage({ skip: true, type: login ? "login" : "register", msg: "close sock.", user });
    };
    _ws.onmessage = (msg) => {
        postMessage({ skip: false, type: login ? "login" : "register", result: Object.assign(Object.assign({}, JSON.parse(msg.data)), { mnemonic }) });
        _ws.close();
    };
    return ({ _ws, send });
};
const login = async (data) => {
    const { username, password, profile } = data;
    const mnemonic = "mnemonic"; //entropyToMnemonic(Buffer.from(randomBytes(16)))
    // const node = fromSeed(mnemonicToSeedSync(mnemonic))
    // const nodePath = node.derivePath("m/44'/0'/0'").derivePath('0/0')
    // const { privateKey, compressed } = wif.decode(nodePath.toWIF(), 128)
    const signature = "signature"; //encrypt(privateKey, compressed, data.password)
    const user = { mnemonic, signature, username, profile };
    const socket = await connect("localhost:9080", user, true);
    return false;
};
const createKey = async (data) => {
    const { username, password } = data;
    const mnemonic = bip39_1.entropyToMnemonic(Buffer.from(randombytes_1.default(16)));
    const node = bip32_1.fromSeed(bip39_1.mnemonicToSeedSync(mnemonic));
    const account = node.derivePath("m/44'/0'/0'");
    const publicKey = account.neutered().toBase58();
    const key = account.derivePath('0/0');
    const { privateKey, compressed } = wif_1.default.decode(nodePath.toWIF(), 128);
    const signature = bip38_1.encrypt(privateKey, compressed, data.password);
    const machineId = "thismachine";
    postMessage({ skip: false, type: "createKey", result: { publicKey, mnemonic, signature, username, machineId } });
    return false;
};
const register = async (data) => {
    const socket = await connect("localhost:9080", data.user, false);
    return false;
};
// export const balances = async (data: any) => {
//     const rpc = new JsonRpc(NET_URL, { fetch })
//     const carmel = await rpc.get_currency_balance(CARMEL_TOKENS, data.account)
//     const eos = await rpc.get_currency_balance(EOS_TOKENS, data.account)
//     return {
//         eos: eos[0] ? parseFloat(eos[0].split()[0]) : 0,
//         carmel: carmel[0] ? parseFloat(carmel[0].split()[0]) : 0
//     }
// }
// export const checkKey = async (data: any) => {
//     const signatureProvider = new JsSignatureProvider([data.privateKey])
//     const getAvailableKeys = await signatureProvider.getAvailableKeys()
//     const publicKey = getAvailableKeys[0]
//     const rpc = new JsonRpc(NET_URL, { fetch })
//     let result = await rpc.history_get_key_accounts(publicKey)
//     if (!result || !result.account_names) {
//         throw new Error('Invalid private key')
//     }
//     const { account_names } = result
//     try {
//         const le2 = await rpc.get_currency_balance(EOS_TOKENS, "chunkymonkey")
//         const le = await rpc.get_currency_balance(CARMEL_TOKENS, "chunkymonkey")
//     } catch (e) {
//         console.log(e)
//     }
//     const balances: any = await Promise.all(account_names.map((a: string) => (
//         rpc.get_currency_balance(CARMEL_TOKENS, a)
//     )))
//     const accounts = account_names.map((id: string, i: number) => {
//         const balance = balances[i][0] ? parseFloat(balances[i][0].split()[0]) : 0
//         return { id, balance }
//     })
//     return {
//         publicKey,
//         accounts
//     }
// }
// export const credentials = (environment?: any) => {
//     let env = environment 
//     if (!env) {
//         sys.reload()
//         env = sys.env() 
//     }
//     if (env.lock.exists) {
//         throw new Error('The vault is locked')
//     }
//     try {
//         const file = path.resolve(env.home.path, 'secrets', '.data', 'index.json')
//         const secrets: any = JSON.parse(fs.readFileSync(file, 'utf8'))
//         return secrets
//     } catch {
//         throw new Error('The credentials could not be loaded')
//     }
// }
const _read = async (contract, scope, table, index) => {
    const rpc = new eosjs_1.JsonRpc(NET_URL);
    const result = await rpc.get_table_rows(Object.assign({}, {
        json: true,
        code: contract,
        scope,
        table,
        limit: 100,
        reverse: false,
        show_payer: false
    }, index && {
        key_type: index[0],
        index_position: index[1],
        upper_bound: index[2],
        lower_bound: index.length > 3 ? index[3] : index[2]
    }));
    return result;
};
const findUser = async (data) => {
    const result = await _read(CARMEL_SYSTEM, CARMEL_SYSTEM, "users", ["name", "secondary", data.username]);
    if (!result || !result.rows || result.rows.length === 0) {
        return ({ available: true });
    }
    return ({ user: result.rows[0], available: false });
};
// export const action = (contract: string, name: string, data: any) => {
//     const { account } = data
//     return {
//         account: contract,
//         name,
//         authorization: [{
//           actor: account,
//           permission: 'active',
//         }],
//         data
//     }
// }
// export const transaction = async (contract: string, name: string, data: any, privateKey?: string) => {   
//     let key = privateKey
//     if (!key) {
//         const { _auth } = credentials()
//         if (!_auth) {
//             throw new Error('User credentials missing')
//         }
//         key = _auth.privateKey
//     }
//     const actions = [action(contract, name, data)]
//     const rpc = new JsonRpc(NET_URL, { fetch })
//     const signatureProvider = new JsSignatureProvider([key])
//     const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() })
//     try {
//         const result = await api.transact({ actions }, {
//             blocksBehind: 3,
//             expireSeconds: 30,
//         })
//         if (!result.transaction_id || !result.processed || 
//             !result.processed.receipt || !result.processed.receipt.status || 
//             result.processed.receipt.status !== 'executed') {
//                 throw new Error('Call did not succeed')
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }
// export const system = ({
//     call: async (name: string, data: any, privateKey?: string) => transaction(CARMEL_SYSTEM, name, data, privateKey)
// })
// export const tokens = ({
//     call: async (name: string, data: any, privateKey?: string) => transaction(CARMEL_TOKENS, name, data, privateKey)
// })
const events = {
    findUser, register, login, createKey
};
addEventListener('message', event => {
    const { data } = event;
    const { type, id } = data;
    events[type](data).then((result) => {
        postMessage(Object.assign(Object.assign({}, data), { result }));
    });
});
//# sourceMappingURL=auth.js.map