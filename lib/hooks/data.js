"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useData = void 0;
const react_1 = require("react");
exports.useData = () => {
    const [node, setNode] = react_1.useState();
    const [user, setUser] = react_1.useState();
    const [id, setId] = react_1.useState();
    const [adapter, setAdapter] = react_1.useState();
    const [db, setDb] = react_1.useState();
    const [socket, setSocket] = react_1.useState({});
    const [status, setStatus] = react_1.useState("new");
    const [isLoggedIn, setLoggedIn] = react_1.useState(false);
    const [ready, setReady] = react_1.useState(false);
    const [working, setWorking] = react_1.useState(true);
    const [authWorker, setAuthWorker] = react_1.useState(new Worker('./workers/auth.js', { type: 'module' }));
    const [results, setResults] = react_1.useState({});
    const getDoc = async (hash) => {
        var e_1, _a;
        const chunks = [];
        try {
            for (var _b = __asyncValues(node.cat(hash)), _c; _c = await _b.next(), !_c.done;) {
                const data = _c.value;
                chunks.push(data);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Buffer.concat(chunks).toString();
    };
    const getJSONDoc = async (hash) => {
        const doc = await getDoc(hash);
        return JSON.parse(doc);
    };
    const addDoc = async (data) => {
        const { cid } = await node.add(data);
        return cid.toString();
    };
    const addJSONDoc = async (data) => {
        return addDoc(JSON.stringify(data));
    };
    authWorker.onmessage = async (event) => {
        const { data } = event;
        const { type, skip, result } = data;
        if (skip || !result) {
            setResults(Object.assign(Object.assign({}, results), { [type]: Object.assign(Object.assign(Object.assign({}, results[type]), data), { working: true }) }));
            return;
        }
        switch (type) {
            case "createKey":
                const { mnemonic, username, signature } = data.result;
                const signatureHash = await addJSONDoc({ type: "carmel/signature", data: { signature } });
                const profileHash = await addJSONDoc({ type: "carmel/profile", data: { username } });
                authWorker.postMessage({ type: "register", user: { username, signatureHash, profileHash } });
                return;
            case "register":
                console.log("?????? reg", data);
                // const user =  { ...data.result.data.user, _hash: data.result.hash }
                // put("user", user)
                // setUser(user)
                // setResults({ ...results, [type]: { ...results[type], result: { user }, working: false }})
                // setWorking(false)
                return;
            case "login":
                const user2 = Object.assign(Object.assign({}, data.result.data.user), { _hash: data.result.hash });
                put("user", user2);
                setUser(user2);
                setResults(Object.assign(Object.assign({}, results), { [type]: Object.assign(Object.assign({}, results[type]), { result: { user: user2 }, working: false }) }));
                setWorking(false);
                return;
        }
        setResults(Object.assign(Object.assign({}, results), { [type]: Object.assign(Object.assign(Object.assign({}, results[type]), data), { working: false }) }));
        setWorking(false);
    };
    const logout = async () => {
        await db.del("user");
        setUser(null);
    };
    const login = async (username, password) => {
        setWorking(true);
        const id = "1"; //nanoid()
        const profile = Object.assign(Object.assign({}, results.findUser.result.user), { details: JSON.parse(results.findUser.result.user.details) });
        profile.data = await getJSONDoc(profile._hash);
        setResults(Object.assign(Object.assign({}, results), { id: { working: true } }));
        authWorker.postMessage({ type: "login", username, password, id, profile });
    };
    const register = async (username, password) => {
        setWorking(true);
        const id = "2"; //nanoid()
        setResults(Object.assign(Object.assign({}, results), { id: { working: true } }));
        authWorker.postMessage({ type: "createKey", username, password, id });
    };
    const put = async (id, data) => {
        if (!db)
            return;
        await db.put(id, JSON.stringify(data));
    };
    const get = async (id) => {
        if (!db)
            return null;
        const val = await db.get(id);
        return JSON.parse(val);
    };
    // const save = async (data: any) => {
    //   setWorking(true)
    //   const id = nanoid()
    //   setResults({ ...results, id: { working: true }})
    //   // authWorker.postMessage({ type: "save", data, id })
    // }
    const findUser = async (username, login) => {
        setWorking(true);
        const id = "3"; //nanoid()
        setResults(Object.assign(Object.assign({}, results), { findUser: { id, working: true, username, login } }));
        authWorker.postMessage({ type: "findUser", username, id });
    };
    // const disconnect = async () => {
    //   if (!socket || !socket.connected) return
    //   setStatus("disconnecting")
    //   socket.close()
    // }
    // const initIdentity = async () => {
    //   // const Identities = require('orbit-db-identity-provider')
    //   // const options = { id: 'local-id' }
    //   // const identity = await Identities.createIdentity(options)
    //   // console.log(identity)
    //   const Identities = require('orbit-db-identity-provider')
    //   const migrate = require('localstorage-level-migration')
    //   const options = { id: 'new-id', migrate: migrate('/path/to/keys') }
    //   const identity = await Identities.createIdentity(options)
    //   console.log(identity)
    // }
    const addSignedObject = async (payload) => {
        // // sign the payload as dag-jose
        // const { jws, linkedBlock } = await did.createDagJWS(payload)
        // // put the JWS into the ipfs dag
        // const jwsCid = await ipfs.dag.put(jws, { format: 'dag-jose', hashAlg: 'sha2-256' })
        // // put the payload into the ipfs dag
        // await ipfs.block.put(linkedBlock, { cid: jws.link })
        // return jwsCid
    };
    const startNode = async () => {
        const repo = `ipfs-carmel`;
        const IPFS = require('ipfs');
        // const level = require('level')
        // const _db = level('carmeldb_d')
        // multiformats.multicodec.add(dagJose)
        // const dagJoseFormat = legacy(multiformats, dagJose.name)
        try {
            console.log("starting ipfs ...");
            // let ipfsConfig = {
            //   start: true,
            //   repo: 'repo-main-ipfs',
            //   config: {
            //     EXPERIMENTAL: {
            //       pubsub: true
            //     }
            //   }
            // }
            // const _node = await IPFS.create(ipfsConfig)
            // const id = _node.libp2p.peerId.toB58String()
            // console.log("ipfs node started", id)
            // const session = {
            //   id: nanoid(),
            //   timestamp: Date.now(),
            //   name: "test"
            // }
            // console.log('done.', session)
            // 4r7TKfVm6HdXjF5FhUsWTFgYWo9sNSRhxgAhELppZuAg
            // const entropy = randomBytes(32)
            //decrease direct final sorry midnight best opera sentence tag treat about spoil gun derive pyramid music illegal stove civil despair ensure faculty flame cage
            // const mnemonic = "decrease direct final sorry midnight best opera sentence tag treat about spoil gun derive pyramid music illegal stove civil despair ensure faculty flame cage"
            // const mnemonic = entropyToMnemonic(entropy)
            // 5LY3NNk6CvugpKkuNLkhgFsCjWCWtmBvqCu7YcvPjaKH
            // 5LY3NNk6CvugpKkuNLkhgFsCjWCWtmBvqCu7YcvPjaKH
            // const seed = bs58.decode("5LY3NNk6CvugpKkuNLkhgFsCjWCWtmBvqCu7YcvPjaKH")//mnemonicToSeedSync(mnemonic).slice(0, 32)
            // const seed = mnemonicToSeedSync(mnemonic).slice(0, 32)
            // console.log("entropy:", bs58.encode(entropy))
            // console.log("mnemonic:", mnemonic)
            // console.log("seed:", bs58.encode(seed))
            // create did instance
            // const provider = new Ed25519Provider(seed)
            // const did = new DID({ provider, resolver: KeyResolver.getResolver() })
            // await did.authenticate()
            // // did:key:z6Mkjo26Gta5vGsYs2YzhzTsuecaMvCdDB5RhsdH4RJMoZHA
            // console.log('DID:', did.id)
            // const { jws, linkedBlock } = await did.createDagJWS({ type: "carmel", timestamp: Date.now(), myBookTitle: "4 life things" })
            // const jwsCid = await _node.dag.put(jws, { format: 'dag-jose', hashAlg: 'sha2-256' })
            // const res = await _node.block.put(linkedBlock, { cid: jws.link })
            // console.log('added:', jwsCid.toString(), res.cid.toString())    
            // const da = await _node.dag.get(jwsCid.toString(), { path: '/link'})
            // console.log('got:', da.value)
            // const jws1 = await _node.dag.get(jwsCid.toString())
            // const signingDID1 = await did.verifyJWS(jws1.value)
            // console.log('signingDID1:', signingDID1)
            // const jwe = await did.createDagJWE("hey there!", [did.id])
            // const jweCid = await _node.dag.put(jwe, { format: 'dag-jose', hashAlg: 'sha2-256' })
            // console.log("jweCid:", jweCid.toString())
            // const jweRes = (await _node.dag.get(jweCid.toString())).value
            // const cleartext = await did.decryptDagJWE(jweRes)
            // console.log("??",cleartext)
            // const didJWT = require('did-jwt')
            // const signer = didJWT.SimpleSigner('278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f')
            // let jwt = await didJWT.createJWT({aud: 'did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74', exp: 1957463421, name: 'uPort Developer'},
            //                  {alg: 'ES256K', issuer: 'did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74', signer})
            // console.log(jwt)
            // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE2MTE1MjY5MjQsImV4cCI6MTk1NzQ2MzQyMSwiYXVkIjoiZGlkOmV0aHI6MHhmM2JlYWMzMGM0OThkOWUyNjg2NWYzNGZjYWE1N2RiYjkzNWIwZDc0IiwibmFtZSI6InVQb3J0IERldmVsb3BlciIsImlzcyI6ImRpZDpldGhyOjB4ZjNiZWFjMzBjNDk4ZDllMjY4NjVmMzRmY2FhNTdkYmI5MzViMGQ3NCJ9.rIDxakw2AoBto7RaqFc4jigE67ihnSOZtzUjVxRlC2VHTkV06ZH-4Aihgb73mixSOiB1tvJxjM9w6QdLSpkTRg"
            // let decoded = didJWT.decodeJWT(jwt)
            // console.log(decoded)
            // const identity = createIdentity()
            // the identity can be serialized using toJSON()
            // console.log(identity.toJSON())
            // localStorage.setItem('naclId', JSON.stringify(identity.toJSON()))
            // this can be similarly loaded using loadIdentity
            // const identity2 = loadIdentity(JSON.parse(localStorage.getItem('naclId')))
            // DID: did:key:z6Mkjo26Gta5vGsYs2YzhzTsuecaMvCdDB5RhsdH4RJMoZHA
            // DID: did:key:z6Mkjo26Gta5vGsYs2YzhzTsuecaMvCdDB5RhsdH4RJMoZHA
            // DID: did:key:z6Mkjo26Gta5vGsYs2YzhzTsuecaMvCdDB5RhsdH4RJMoZHA
            // DID: did:key:z6Mkjo26Gta5vGsYs2YzhzTsuecaMvCdDB5RhsdH4RJMoZHA
            // console.log('done.', _ws)
            // _ws.send(JSON.stringify({ session }))
            // const { cid } = await node.add(JSON.stringify(session))
            // console.info("session", cid.toString())
            // const data = await node.cat("QmTKYMbmq3bNT7TQmdRfMqKwKGEYEPxeiiig3tVvx46Uu4")
            // console.info("data:", data)
            // const chunks = []
            // for await (const data of node.cat("QmTKYMbmq3bNT7TQmdRfMqKwKGEYEPxeiiig3tVvx46Uu4")) {
            //   chunks.push(data)
            // }
            // console.log(Buffer.concat(chunks).toString())
            // setNode(_ipfs)
            // setAdapter(_orbit)
            // setId(_id)
            // setDb(_db)
            // try {
            //   const userRaw = await _db.get('user')
            //   const user = JSON.parse(userRaw)
            //   setLoggedIn(true)
            //   setUser(user)
            // } catch {
            // }
            // setNode(_node)
            // setDb(_db)
            setReady(true);
            setWorking(false);
        }
        catch (error) {
            console.log(error);
        }
    };
    react_1.useEffect(() => {
        (async () => {
            console.log("INIT NODE!");
            // await initIdentity()
            await startNode();
        })();
        // return function cleanup () {
        //   if (ipfs && ipfs.stop) {
        //     console.log('Stopping IPFS')
        //     ipfs.stop().catch(err => console.error(err))
        //     ipfs = null
        //     setIpfsReady(false)
        //   }
        // }
    }, []);
    // {id: "021a8c267d29fdddd7fa3b7eed1d6666525b81ba9bb53da00e6f59fe08b7623c86", publicKey: "04b61521e15bb487000695717c56ef460dc8bf4a6724db7a10…338aeb6735be528457bbd0000fc5282f5c13a702b0799e4c1", signatures: {…}, type: "orbitdb"}id: "021a8c267d29fdddd7fa3b7eed1d6666525b81ba9bb53da00e6f59fe08b7623c86"publicKey: "04b61521e15bb487000695717c56ef460dc8bf4a6724db7a104965c9760df0095ac8ba5264d799c5c338aeb6735be528457bbd0000fc5282f5c13a702b0799e4c1"signatures: {id: "304402200bb0814b8e00b1a2b6493c48a65fe0ac55f20b3736…ee5441a367a39d7418d1b90abb6a3f9f0aebf505387cc8e46", publicKey: "3045022100ee1e9dc23b2505e1aa2991e5aa9e0945bbdb985b…a160c408cde55533f11a69ea19e4d84d15b701766dbdaea15"}type: "orbitdb"__proto__: Object
    react_1.useEffect(() => {
        if (!ready)
            return;
        console.log("Data ready.");
        // console.log(db.events.identity.toJSON())
        // console.log("IPFS:", db.queue.id)
        // console.log(adapter.identity.id)
    }, [ready]);
    return {
        working,
        user,
        findUser,
        results,
        register,
        socket,
        status,
        put,
        get,
        isLoggedIn,
        login,
        ready,
        getJSONDoc,
        getDoc,
        logout
    };
};
//# sourceMappingURL=data.js.map