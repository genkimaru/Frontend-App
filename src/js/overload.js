function createOverloadFunction() {
  let map = new Map();
  function overload(...args) {
    const parms = args.map((p) => typeof p).join(", ");
    if (map.has(parms)) {
      map.get(parms).apply(null, args);
    } else {
      throw new Error(`No overload for ${parms} found`);
    }
  }

  overload.addImpl = function (...args) {
    const fn = args.pop();
    if (typeof fn !== "function") {
      throw new TypeError("addImpl must be called with a function");
    }

    map.set(args.join(", "), fn);
  };

  return overload;
}

export default createOverloadFunction;

