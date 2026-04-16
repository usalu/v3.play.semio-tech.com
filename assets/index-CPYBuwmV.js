import { a as u } from "./index-gBZ811w6.js";
var a = { exports: {} }, o = {};
var l;
function v() {
  if (l) return o;
  l = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(m, n, r) {
    var s = null;
    if (r !== void 0 && (s = "" + r), n.key !== void 0 && (s = "" + n.key), "key" in n) {
      r = {};
      for (var i in n) i !== "key" && (r[i] = n[i]);
    } else r = n;
    return n = r.ref, { $$typeof: t, type: m, key: s, ref: n !== void 0 ? n : null, props: r };
  }
  return o.Fragment = e, o.jsx = c, o.jsxs = c, o;
}
var f;
function d() {
  return f || (f = 1, a.exports = v()), a.exports;
}
var p = d();
const x = {}, R = u.createContext(x);
function C(t) {
  const e = u.useContext(R);
  return u.useMemo(function() {
    return typeof t == "function" ? t(e) : { ...e, ...t };
  }, [e, t]);
}
function M(t) {
  let e;
  return t.disableParentContext ? e = typeof t.components == "function" ? t.components(x) : t.components || x : e = C(t.components), u.createElement(R.Provider, { value: e }, t.children);
}
export {
  M,
  p as j,
  C as u
};
