const js = import("./node_modules/@wafuwafu13/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
