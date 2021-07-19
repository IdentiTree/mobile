# Identitree (mobile)

## TODOs
- [ ] Copy `wasm` file to `/public` folder automatically (with `copy-webpack-plugin` or `rollup-plugin-copy`)

Manual solution:
```
cp node_modules/@iota/identity-wasm/web/identity_wasm_bg.wasm public
```

## Known issues

When running into the following error:

``` 
Module parse failed: Unexpected token (3392:61)
if (typeof input === 'undefined') {
>    input = new URL('identity_wasm_bg.wasm', import.meta.url);
}
```

(Temporary) solution: comment out line containing the string `"import.meta.url"` in file `node_modules/@iota/identity-wasm/web/identity_wasm.js`
