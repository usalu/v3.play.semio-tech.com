import { g as n } from "./_commonjsHelpers-CE1G-McA.js";
import { r as f } from "./index-Dyrx3GQH.js";
function i(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e) if (r !== "default" && !(r in t)) {
        const a = Object.getOwnPropertyDescriptor(e, r);
        a && Object.defineProperty(t, r, a.get ? a : { enumerable: true, get: () => e[r] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var c = f();
const p = n(c), l = i({ __proto__: null, default: p }, [c]);
export {
  l as R,
  p as a,
  c as r
};
