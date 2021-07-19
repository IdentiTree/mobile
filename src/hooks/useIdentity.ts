import { KeyPair, Document, KeyType, init } from "@iota/identity-wasm/web";
import { useState } from "react";

/**
 * When running into the following error:
 * 
 * Module parse failed: Unexpected token (3392:61)
 * if (typeof input === 'undefined') {
 * >    input = new URL('identity_wasm_bg.wasm', import.meta.url);
 * }
 * 
 * (Temporary) solution: comment out line 2715 in file node_modules/@iota/identity-wasm/web/identity_wasm.js
 */

export function useIdentity() {

    const [keyPair, setKeyPair] = useState<KeyPair>();
    const [didDocument, setDidDocument] = useState<Document>();

    const generateDid = async () => {
        console.log("Generating DID ...")
        await init("identity_wasm_bg.wasm");
        const key = new KeyPair(KeyType.Ed25519);
        setKeyPair(key);
        const doc = Document.fromKeyPair(key);
        setDidDocument(doc);
        console.log("Key Pair", key.toJSON());
        console.log("DID Document: ", doc.toJSON());
        return key;
    }

    return {keyPair, didDocument, generateDid};
}