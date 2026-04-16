var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as ol } from "./preload-helper-PPVm8Dsz.js";
let Kd, Yd, Ud, Gd, Fg, vy, Lg, $y, fm, Et, Jd, jn, fy;
let __tla = (async () => {
  var Ms = {
    reset: [
      0,
      0
    ],
    bold: [
      1,
      22,
      "\x1B[22m\x1B[1m"
    ],
    dim: [
      2,
      22,
      "\x1B[22m\x1B[2m"
    ],
    italic: [
      3,
      23
    ],
    underline: [
      4,
      24
    ],
    inverse: [
      7,
      27
    ],
    hidden: [
      8,
      28
    ],
    strikethrough: [
      9,
      29
    ],
    black: [
      30,
      39
    ],
    red: [
      31,
      39
    ],
    green: [
      32,
      39
    ],
    yellow: [
      33,
      39
    ],
    blue: [
      34,
      39
    ],
    magenta: [
      35,
      39
    ],
    cyan: [
      36,
      39
    ],
    white: [
      37,
      39
    ],
    gray: [
      90,
      39
    ],
    bgBlack: [
      40,
      49
    ],
    bgRed: [
      41,
      49
    ],
    bgGreen: [
      42,
      49
    ],
    bgYellow: [
      43,
      49
    ],
    bgBlue: [
      44,
      49
    ],
    bgMagenta: [
      45,
      49
    ],
    bgCyan: [
      46,
      49
    ],
    bgWhite: [
      47,
      49
    ],
    blackBright: [
      90,
      39
    ],
    redBright: [
      91,
      39
    ],
    greenBright: [
      92,
      39
    ],
    yellowBright: [
      93,
      39
    ],
    blueBright: [
      94,
      39
    ],
    magentaBright: [
      95,
      39
    ],
    cyanBright: [
      96,
      39
    ],
    whiteBright: [
      97,
      39
    ],
    bgBlackBright: [
      100,
      49
    ],
    bgRedBright: [
      101,
      49
    ],
    bgGreenBright: [
      102,
      49
    ],
    bgYellowBright: [
      103,
      49
    ],
    bgBlueBright: [
      104,
      49
    ],
    bgMagentaBright: [
      105,
      49
    ],
    bgCyanBright: [
      106,
      49
    ],
    bgWhiteBright: [
      107,
      49
    ]
  };
  function wo(e) {
    return String(e);
  }
  wo.open = "";
  wo.close = "";
  function sl() {
    let e = typeof process < "u" ? process : void 0, t = (e == null ? void 0 : e.env) || {}, n = t.FORCE_TTY !== "false", r = (e == null ? void 0 : e.argv) || [];
    return !("NO_COLOR" in t || r.includes("--no-color")) && ("FORCE_COLOR" in t || r.includes("--color") || (e == null ? void 0 : e.platform) === "win32" || n && t.TERM !== "dumb" || "CI" in t) || typeof window < "u" && !!window.chrome;
  }
  function il() {
    let e = sl(), t = (s, i, c, u) => {
      let a = "", l = 0;
      do
        a += s.substring(l, u) + c, l = u + i.length, u = s.indexOf(i, l);
      while (~u);
      return a + s.substring(l);
    }, n = (s, i, c = s) => {
      let u = (a) => {
        let l = String(a), f = l.indexOf(i, s.length);
        return ~f ? s + t(l, i, c, f) + i : s + l + i;
      };
      return u.open = s, u.close = i, u;
    }, r = {
      isColorSupported: e
    }, o = (s) => `\x1B[${s}m`;
    for (let s in Ms) {
      let i = Ms[s];
      r[s] = e ? n(o(i[0]), o(i[1]), i[2]) : wo;
    }
    return r;
  }
  var ie = il();
  function Lc(e, t) {
    return t.forEach(function(n) {
      n && typeof n != "string" && !Array.isArray(n) && Object.keys(n).forEach(function(r) {
        if (r !== "default" && !(r in e)) {
          var o = Object.getOwnPropertyDescriptor(n, r);
          Object.defineProperty(e, r, o.get ? o : {
            enumerable: true,
            get: function() {
              return n[r];
            }
          });
        }
      });
    }), Object.freeze(e);
  }
  function cl(e, t) {
    const n = Object.keys(e), r = t === null ? n : n.sort(t);
    if (Object.getOwnPropertySymbols) for (const o of Object.getOwnPropertySymbols(e)) Object.getOwnPropertyDescriptor(e, o).enumerable && r.push(o);
    return r;
  }
  function Zt(e, t, n, r, o, s, i = ": ") {
    let c = "", u = 0, a = e.next();
    if (!a.done) {
      c += t.spacingOuter;
      const l = n + t.indent;
      for (; !a.done; ) {
        if (c += l, u++ === t.maxWidth) {
          c += "\u2026";
          break;
        }
        const f = s(a.value[0], t, l, r, o), h = s(a.value[1], t, l, r, o);
        c += f + i + h, a = e.next(), a.done ? t.min || (c += ",") : c += `,${t.spacingInner}`;
      }
      c += t.spacingOuter + n;
    }
    return c;
  }
  function To(e, t, n, r, o, s) {
    let i = "", c = 0, u = e.next();
    if (!u.done) {
      i += t.spacingOuter;
      const a = n + t.indent;
      for (; !u.done; ) {
        if (i += a, c++ === t.maxWidth) {
          i += "\u2026";
          break;
        }
        i += s(u.value, t, a, r, o), u = e.next(), u.done ? t.min || (i += ",") : i += `,${t.spacingInner}`;
      }
      i += t.spacingOuter + n;
    }
    return i;
  }
  function vn(e, t, n, r, o, s) {
    let i = "";
    e = e instanceof ArrayBuffer ? new DataView(e) : e;
    const c = (a) => a instanceof DataView, u = c(e) ? e.byteLength : e.length;
    if (u > 0) {
      i += t.spacingOuter;
      const a = n + t.indent;
      for (let l = 0; l < u; l++) {
        if (i += a, l === t.maxWidth) {
          i += "\u2026";
          break;
        }
        (c(e) || l in e) && (i += s(c(e) ? e.getInt8(l) : e[l], t, a, r, o)), l < u - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
      }
      i += t.spacingOuter + n;
    }
    return i;
  }
  function Eo(e, t, n, r, o, s) {
    let i = "";
    const c = cl(e, t.compareKeys);
    if (c.length > 0) {
      i += t.spacingOuter;
      const u = n + t.indent;
      for (let a = 0; a < c.length; a++) {
        const l = c[a], f = s(l, t, u, r, o), h = s(e[l], t, u, r, o);
        i += `${u + f}: ${h}`, a < c.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
      }
      i += t.spacingOuter + n;
    }
    return i;
  }
  const al = typeof Symbol == "function" && Symbol.for ? /* @__PURE__ */ Symbol.for("jest.asymmetricMatcher") : 1267621, cn = " ", ul = (e, t, n, r, o, s) => {
    const i = e.toString();
    if (i === "ArrayContaining" || i === "ArrayNotContaining") return ++r > t.maxDepth ? `[${i}]` : `${i + cn}[${vn(e.sample, t, n, r, o, s)}]`;
    if (i === "ObjectContaining" || i === "ObjectNotContaining") return ++r > t.maxDepth ? `[${i}]` : `${i + cn}{${Eo(e.sample, t, n, r, o, s)}}`;
    if (i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining") return i + cn + s(e.sample, t, n, r, o);
    if (typeof e.toAsymmetricMatcher != "function") throw new TypeError(`Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`);
    return e.toAsymmetricMatcher();
  }, ll = (e) => e && e.$$typeof === al, fl = {
    serialize: ul,
    test: ll
  }, hl = " ", qc = /* @__PURE__ */ new Set([
    "DOMStringMap",
    "NamedNodeMap"
  ]), pl = /^(?:HTML\w*Collection|NodeList)$/;
  function dl(e) {
    return qc.has(e) || pl.test(e);
  }
  const ml = (e) => e && e.constructor && !!e.constructor.name && dl(e.constructor.name);
  function gl(e) {
    return e.constructor.name === "NamedNodeMap";
  }
  const yl = (e, t, n, r, o, s) => {
    const i = e.constructor.name;
    return ++r > t.maxDepth ? `[${i}]` : (t.min ? "" : i + hl) + (qc.has(i) ? `{${Eo(gl(e) ? [
      ...e
    ].reduce((c, u) => (c[u.name] = u.value, c), {}) : {
      ...e
    }, t, n, r, o, s)}}` : `[${vn([
      ...e
    ], t, n, r, o, s)}]`);
  }, bl = {
    serialize: yl,
    test: ml
  };
  function Bc(e) {
    return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  }
  function So(e, t, n, r, o, s, i) {
    const c = r + n.indent, u = n.colors;
    return e.map((a) => {
      const l = t[a];
      let f = i(l, n, c, o, s);
      return typeof l != "string" && (f.includes(`
`) && (f = n.spacingOuter + c + f + n.spacingOuter + r), f = `{${f}}`), `${n.spacingInner + r + u.prop.open + a + u.prop.close}=${u.value.open}${f}${u.value.close}`;
    }).join("");
  }
  function Rn(e, t, n, r, o, s) {
    return e.map((i) => t.spacingOuter + n + (typeof i == "string" ? zc(i, t) : s(i, t, n, r, o))).join("");
  }
  function wl(e, t, n, r, o, s) {
    return t.printShadowRoot === false ? "" : [
      `${t.spacingOuter + n}#shadow-root`,
      Rn(e, t, n + t.indent, r, o, s)
    ].join("");
  }
  function zc(e, t) {
    const n = t.colors.content;
    return n.open + Bc(e) + n.close;
  }
  function Tl(e, t) {
    const n = t.colors.comment;
    return `${n.open}<!--${Bc(e)}-->${n.close}`;
  }
  function vo(e, t, n, r, o) {
    const s = r.colors.tag;
    return `${s.open}<${e}${t && s.close + t + r.spacingOuter + o + s.open}${n ? `>${s.close}${n}${r.spacingOuter}${o}${s.open}</${e}` : `${t && !r.min ? "" : " "}/`}>${s.close}`;
  }
  function $o(e, t) {
    const n = t.colors.tag;
    return `${n.open}<${e}${n.close} \u2026${n.open} />${n.close}`;
  }
  const El = 1, Vc = 3, Wc = 8, Uc = 11, Sl = /^(?:(?:HTML|SVG)\w*)?Element$/;
  function vl(e) {
    try {
      return typeof e.hasAttribute == "function" && e.hasAttribute("is");
    } catch {
      return false;
    }
  }
  function $l(e) {
    const t = e.constructor.name, { nodeType: n, tagName: r } = e, o = typeof r == "string" && r.includes("-") || vl(e);
    return n === El && (Sl.test(t) || o) || n === Vc && t === "Text" || n === Wc && t === "Comment" || n === Uc && t === "DocumentFragment";
  }
  const _l = (e) => {
    var _a2;
    return ((_a2 = e == null ? void 0 : e.constructor) == null ? void 0 : _a2.name) && $l(e);
  };
  function Ol(e) {
    return e.nodeType === Vc;
  }
  function xl(e) {
    return e.nodeType === Wc;
  }
  function an(e) {
    return e.nodeType === Uc;
  }
  const Ml = (e, t, n, r, o, s) => {
    if (Ol(e)) return zc(e.data, t);
    if (xl(e)) return Tl(e.data, t);
    const i = an(e) ? "DocumentFragment" : e.tagName.toLowerCase();
    return ++r > t.maxDepth ? $o(i, t) : vo(i, So(an(e) ? [] : Array.from(e.attributes, (c) => c.name).sort(), an(e) ? {} : [
      ...e.attributes
    ].reduce((c, u) => (c[u.name] = u.value, c), {}), t, n + t.indent, r, o, s), (an(e) || !e.shadowRoot ? "" : wl(Array.prototype.slice.call(e.shadowRoot.children), t, n + t.indent, r, o, s)) + Rn(Array.prototype.slice.call(e.childNodes || e.children), t, n + t.indent, r, o, s), t, n);
  }, Al = {
    serialize: Ml,
    test: _l
  }, Cl = "@@__IMMUTABLE_ITERABLE__@@", Nl = "@@__IMMUTABLE_LIST__@@", Il = "@@__IMMUTABLE_KEYED__@@", Pl = "@@__IMMUTABLE_MAP__@@", As = "@@__IMMUTABLE_ORDERED__@@", kl = "@@__IMMUTABLE_RECORD__@@", jl = "@@__IMMUTABLE_SEQ__@@", Rl = "@@__IMMUTABLE_SET__@@", Dl = "@@__IMMUTABLE_STACK__@@", Ot = (e) => `Immutable.${e}`, Dn = (e) => `[${e}]`, Yt = " ", Cs = "\u2026";
  function Fl(e, t, n, r, o, s, i) {
    return ++r > t.maxDepth ? Dn(Ot(i)) : `${Ot(i) + Yt}{${Zt(e.entries(), t, n, r, o, s)}}`;
  }
  function Ll(e) {
    let t = 0;
    return {
      next() {
        if (t < e._keys.length) {
          const n = e._keys[t++];
          return {
            done: false,
            value: [
              n,
              e.get(n)
            ]
          };
        }
        return {
          done: true,
          value: void 0
        };
      }
    };
  }
  function ql(e, t, n, r, o, s) {
    const i = Ot(e._name || "Record");
    return ++r > t.maxDepth ? Dn(i) : `${i + Yt}{${Zt(Ll(e), t, n, r, o, s)}}`;
  }
  function Bl(e, t, n, r, o, s) {
    const i = Ot("Seq");
    return ++r > t.maxDepth ? Dn(i) : e[Il] ? `${i + Yt}{${e._iter || e._object ? Zt(e.entries(), t, n, r, o, s) : Cs}}` : `${i + Yt}[${e._iter || e._array || e._collection || e._iterable ? To(e.values(), t, n, r, o, s) : Cs}]`;
  }
  function or(e, t, n, r, o, s, i) {
    return ++r > t.maxDepth ? Dn(Ot(i)) : `${Ot(i) + Yt}[${To(e.values(), t, n, r, o, s)}]`;
  }
  const zl = (e, t, n, r, o, s) => e[Pl] ? Fl(e, t, n, r, o, s, e[As] ? "OrderedMap" : "Map") : e[Nl] ? or(e, t, n, r, o, s, "List") : e[Rl] ? or(e, t, n, r, o, s, e[As] ? "OrderedSet" : "Set") : e[Dl] ? or(e, t, n, r, o, s, "Stack") : e[jl] ? Bl(e, t, n, r, o, s) : ql(e, t, n, r, o, s), Vl = (e) => e && (e[Cl] === true || e[kl] === true), Wl = {
    serialize: zl,
    test: Vl
  };
  function Kc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var sr = {
    exports: {}
  }, Z = {};
  var Ns;
  function Ul() {
    if (Ns) return Z;
    Ns = 1;
    var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), i = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), u = /* @__PURE__ */ Symbol.for("react.suspense"), a = /* @__PURE__ */ Symbol.for("react.suspense_list"), l = /* @__PURE__ */ Symbol.for("react.memo"), f = /* @__PURE__ */ Symbol.for("react.lazy"), h = /* @__PURE__ */ Symbol.for("react.view_transition"), p = /* @__PURE__ */ Symbol.for("react.client.reference");
    function d(g) {
      if (typeof g == "object" && g !== null) {
        var w = g.$$typeof;
        switch (w) {
          case e:
            switch (g = g.type, g) {
              case n:
              case o:
              case r:
              case u:
              case a:
              case h:
                return g;
              default:
                switch (g = g && g.$$typeof, g) {
                  case i:
                  case c:
                  case f:
                  case l:
                    return g;
                  case s:
                    return g;
                  default:
                    return w;
                }
            }
          case t:
            return w;
        }
      }
    }
    return Z.ContextConsumer = s, Z.ContextProvider = i, Z.Element = e, Z.ForwardRef = c, Z.Fragment = n, Z.Lazy = f, Z.Memo = l, Z.Portal = t, Z.Profiler = o, Z.StrictMode = r, Z.Suspense = u, Z.SuspenseList = a, Z.isContextConsumer = function(g) {
      return d(g) === s;
    }, Z.isContextProvider = function(g) {
      return d(g) === i;
    }, Z.isElement = function(g) {
      return typeof g == "object" && g !== null && g.$$typeof === e;
    }, Z.isForwardRef = function(g) {
      return d(g) === c;
    }, Z.isFragment = function(g) {
      return d(g) === n;
    }, Z.isLazy = function(g) {
      return d(g) === f;
    }, Z.isMemo = function(g) {
      return d(g) === l;
    }, Z.isPortal = function(g) {
      return d(g) === t;
    }, Z.isProfiler = function(g) {
      return d(g) === o;
    }, Z.isStrictMode = function(g) {
      return d(g) === r;
    }, Z.isSuspense = function(g) {
      return d(g) === u;
    }, Z.isSuspenseList = function(g) {
      return d(g) === a;
    }, Z.isValidElementType = function(g) {
      return typeof g == "string" || typeof g == "function" || g === n || g === o || g === r || g === u || g === a || typeof g == "object" && g !== null && (g.$$typeof === f || g.$$typeof === l || g.$$typeof === i || g.$$typeof === s || g.$$typeof === c || g.$$typeof === p || g.getModuleId !== void 0);
    }, Z.typeOf = d, Z;
  }
  var Is;
  function Kl() {
    return Is || (Is = 1, sr.exports = Ul()), sr.exports;
  }
  var Gc = Kl(), Gl = Kc(Gc), Yl = Lc({
    __proto__: null,
    default: Gl
  }, [
    Gc
  ]), ir = {
    exports: {}
  }, J = {};
  var Ps;
  function Jl() {
    if (Ps) return J;
    Ps = 1;
    var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.provider"), i = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.server_context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), a = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), h = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), d;
    d = /* @__PURE__ */ Symbol.for("react.module.reference");
    function g(w) {
      if (typeof w == "object" && w !== null) {
        var T = w.$$typeof;
        switch (T) {
          case e:
            switch (w = w.type, w) {
              case n:
              case o:
              case r:
              case a:
              case l:
                return w;
              default:
                switch (w = w && w.$$typeof, w) {
                  case c:
                  case i:
                  case u:
                  case h:
                  case f:
                  case s:
                    return w;
                  default:
                    return T;
                }
            }
          case t:
            return T;
        }
      }
    }
    return J.ContextConsumer = i, J.ContextProvider = s, J.Element = e, J.ForwardRef = u, J.Fragment = n, J.Lazy = h, J.Memo = f, J.Portal = t, J.Profiler = o, J.StrictMode = r, J.Suspense = a, J.SuspenseList = l, J.isAsyncMode = function() {
      return false;
    }, J.isConcurrentMode = function() {
      return false;
    }, J.isContextConsumer = function(w) {
      return g(w) === i;
    }, J.isContextProvider = function(w) {
      return g(w) === s;
    }, J.isElement = function(w) {
      return typeof w == "object" && w !== null && w.$$typeof === e;
    }, J.isForwardRef = function(w) {
      return g(w) === u;
    }, J.isFragment = function(w) {
      return g(w) === n;
    }, J.isLazy = function(w) {
      return g(w) === h;
    }, J.isMemo = function(w) {
      return g(w) === f;
    }, J.isPortal = function(w) {
      return g(w) === t;
    }, J.isProfiler = function(w) {
      return g(w) === o;
    }, J.isStrictMode = function(w) {
      return g(w) === r;
    }, J.isSuspense = function(w) {
      return g(w) === a;
    }, J.isSuspenseList = function(w) {
      return g(w) === l;
    }, J.isValidElementType = function(w) {
      return typeof w == "string" || typeof w == "function" || w === n || w === o || w === r || w === a || w === l || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === f || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === d || w.getModuleId !== void 0);
    }, J.typeOf = g, J;
  }
  var ks;
  function Xl() {
    return ks || (ks = 1, ir.exports = Jl()), ir.exports;
  }
  var Yc = Xl(), Hl = Kc(Yc), Zl = Lc({
    __proto__: null,
    default: Hl
  }, [
    Yc
  ]);
  const Ql = [
    "isAsyncMode",
    "isConcurrentMode",
    "isContextConsumer",
    "isContextProvider",
    "isElement",
    "isForwardRef",
    "isFragment",
    "isLazy",
    "isMemo",
    "isPortal",
    "isProfiler",
    "isStrictMode",
    "isSuspense",
    "isSuspenseList",
    "isValidElementType"
  ], ut = Object.fromEntries(Ql.map((e) => [
    e,
    (t) => Zl[e](t) || Yl[e](t)
  ]));
  function Jc(e, t = []) {
    if (Array.isArray(e)) for (const n of e) Jc(n, t);
    else e != null && e !== false && e !== "" && t.push(e);
    return t;
  }
  function js(e) {
    const t = e.type;
    if (typeof t == "string") return t;
    if (typeof t == "function") return t.displayName || t.name || "Unknown";
    if (ut.isFragment(e)) return "React.Fragment";
    if (ut.isSuspense(e)) return "React.Suspense";
    if (typeof t == "object" && t !== null) {
      if (ut.isContextProvider(e)) return "Context.Provider";
      if (ut.isContextConsumer(e)) return "Context.Consumer";
      if (ut.isForwardRef(e)) {
        if (t.displayName) return t.displayName;
        const n = t.render.displayName || t.render.name || "";
        return n === "" ? "ForwardRef" : `ForwardRef(${n})`;
      }
      if (ut.isMemo(e)) {
        const n = t.displayName || t.type.displayName || t.type.name || "";
        return n === "" ? "Memo" : `Memo(${n})`;
      }
    }
    return "UNDEFINED";
  }
  function ef(e) {
    const { props: t } = e;
    return Object.keys(t).filter((n) => n !== "children" && t[n] !== void 0).sort();
  }
  const tf = (e, t, n, r, o, s) => ++r > t.maxDepth ? $o(js(e), t) : vo(js(e), So(ef(e), e.props, t, n + t.indent, r, o, s), Rn(Jc(e.props.children), t, n + t.indent, r, o, s), t, n), nf = (e) => e != null && ut.isElement(e), rf = {
    serialize: tf,
    test: nf
  }, of = typeof Symbol == "function" && Symbol.for ? /* @__PURE__ */ Symbol.for("react.test.json") : 245830487;
  function sf(e) {
    const { props: t } = e;
    return t ? Object.keys(t).filter((n) => t[n] !== void 0).sort() : [];
  }
  const cf = (e, t, n, r, o, s) => ++r > t.maxDepth ? $o(e.type, t) : vo(e.type, e.props ? So(sf(e), e.props, t, n + t.indent, r, o, s) : "", e.children ? Rn(e.children, t, n + t.indent, r, o, s) : "", t, n), af = (e) => e && e.$$typeof === of, uf = {
    serialize: cf,
    test: af
  }, Xc = Object.prototype.toString, lf = Date.prototype.toISOString, ff = Error.prototype.toString, Rs = RegExp.prototype.toString;
  function gn(e) {
    return typeof e.constructor == "function" && e.constructor.name || "Object";
  }
  function hf(e) {
    return typeof window < "u" && e === window;
  }
  const pf = /^Symbol\((.*)\)(.*)$/, df = /\n/g;
  class Hc extends Error {
    constructor(t, n) {
      super(t), this.stack = n, this.name = this.constructor.name;
    }
  }
  function mf(e) {
    return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
  }
  function gf(e) {
    return Object.is(e, -0) ? "-0" : String(e);
  }
  function yf(e) {
    return `${e}n`;
  }
  function Ds(e, t) {
    return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
  }
  function Fs(e) {
    return String(e).replace(pf, "Symbol($1)");
  }
  function Ls(e) {
    return `[${ff.call(e)}]`;
  }
  function Zc(e, t, n, r) {
    if (e === true || e === false) return `${e}`;
    if (e === void 0) return "undefined";
    if (e === null) return "null";
    const o = typeof e;
    if (o === "number") return gf(e);
    if (o === "bigint") return yf(e);
    if (o === "string") return r ? `"${e.replaceAll(/"|\\/g, "\\$&")}"` : `"${e}"`;
    if (o === "function") return Ds(e, t);
    if (o === "symbol") return Fs(e);
    const s = Xc.call(e);
    return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? Ds(e, t) : s === "[object Symbol]" ? Fs(e) : s === "[object Date]" ? Number.isNaN(+e) ? "Date { NaN }" : lf.call(e) : s === "[object Error]" ? Ls(e) : s === "[object RegExp]" ? n ? Rs.call(e).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&") : Rs.call(e) : e instanceof Error ? Ls(e) : null;
  }
  function Qc(e, t, n, r, o, s) {
    if (o.includes(e)) return "[Circular]";
    o = [
      ...o
    ], o.push(e);
    const i = ++r > t.maxDepth, c = t.min;
    if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !s) return tt(e.toJSON(), t, n, r, o, true);
    const u = Xc.call(e);
    return u === "[object Arguments]" ? i ? "[Arguments]" : `${c ? "" : "Arguments "}[${vn(e, t, n, r, o, tt)}]` : mf(u) ? i ? `[${e.constructor.name}]` : `${c || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${vn(e, t, n, r, o, tt)}]` : u === "[object Map]" ? i ? "[Map]" : `Map {${Zt(e.entries(), t, n, r, o, tt, " => ")}}` : u === "[object Set]" ? i ? "[Set]" : `Set {${To(e.values(), t, n, r, o, tt)}}` : i || hf(e) ? `[${gn(e)}]` : `${c || !t.printBasicPrototype && gn(e) === "Object" ? "" : `${gn(e)} `}{${Eo(e, t, n, r, o, tt)}}`;
  }
  const bf = {
    test: (e) => e && e instanceof Error,
    serialize(e, t, n, r, o, s) {
      if (o.includes(e)) return "[Circular]";
      o = [
        ...o,
        e
      ];
      const i = ++r > t.maxDepth, { message: c, cause: u, ...a } = e, l = {
        message: c,
        ...typeof u < "u" ? {
          cause: u
        } : {},
        ...e instanceof AggregateError ? {
          errors: e.errors
        } : {},
        ...a
      }, f = e.name !== "Error" ? e.name : gn(e);
      return i ? `[${f}]` : `${f} {${Zt(Object.entries(l).values(), t, n, r, o, s)}}`;
    }
  };
  function wf(e) {
    return e.serialize != null;
  }
  function ea(e, t, n, r, o, s) {
    let i;
    try {
      i = wf(e) ? e.serialize(t, n, r, o, s, tt) : e.print(t, (c) => tt(c, n, r, o, s), (c) => {
        const u = r + n.indent;
        return u + c.replaceAll(df, `
${u}`);
      }, {
        edgeSpacing: n.spacingOuter,
        min: n.min,
        spacing: n.spacingInner
      }, n.colors);
    } catch (c) {
      throw new Hc(c.message, c.stack);
    }
    if (typeof i != "string") throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`);
    return i;
  }
  function ta(e, t) {
    for (const n of e) try {
      if (n.test(t)) return n;
    } catch (r) {
      throw new Hc(r.message, r.stack);
    }
    return null;
  }
  function tt(e, t, n, r, o, s) {
    const i = ta(t.plugins, e);
    if (i !== null) return ea(i, e, t, n, r, o);
    const c = Zc(e, t.printFunctionName, t.escapeRegex, t.escapeString);
    return c !== null ? c : Qc(e, t, n, r, o, s);
  }
  const _o = {
    comment: "gray",
    content: "reset",
    prop: "yellow",
    tag: "cyan",
    value: "green"
  }, na = Object.keys(_o), De = {
    callToJSON: true,
    compareKeys: void 0,
    escapeRegex: false,
    escapeString: true,
    highlight: false,
    indent: 2,
    maxDepth: Number.POSITIVE_INFINITY,
    maxWidth: Number.POSITIVE_INFINITY,
    min: false,
    plugins: [],
    printBasicPrototype: true,
    printFunctionName: true,
    printShadowRoot: true,
    theme: _o
  };
  function Tf(e) {
    for (const t of Object.keys(e)) if (!Object.hasOwn(De, t)) throw new Error(`pretty-format: Unknown option "${t}".`);
    if (e.min && e.indent !== void 0 && e.indent !== 0) throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
  }
  function Ef() {
    return na.reduce((e, t) => {
      const n = _o[t], r = n && ie[n];
      if (r && typeof r.close == "string" && typeof r.open == "string") e[t] = r;
      else throw new Error(`pretty-format: Option "theme" has a key "${t}" whose value "${n}" is undefined in ansi-styles.`);
      return e;
    }, /* @__PURE__ */ Object.create(null));
  }
  function Sf() {
    return na.reduce((e, t) => (e[t] = {
      close: "",
      open: ""
    }, e), /* @__PURE__ */ Object.create(null));
  }
  function ra(e) {
    return (e == null ? void 0 : e.printFunctionName) ?? De.printFunctionName;
  }
  function oa(e) {
    return (e == null ? void 0 : e.escapeRegex) ?? De.escapeRegex;
  }
  function sa(e) {
    return (e == null ? void 0 : e.escapeString) ?? De.escapeString;
  }
  function qs(e) {
    return {
      callToJSON: (e == null ? void 0 : e.callToJSON) ?? De.callToJSON,
      colors: (e == null ? void 0 : e.highlight) ? Ef() : Sf(),
      compareKeys: typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null ? e.compareKeys : De.compareKeys,
      escapeRegex: oa(e),
      escapeString: sa(e),
      indent: (e == null ? void 0 : e.min) ? "" : vf((e == null ? void 0 : e.indent) ?? De.indent),
      maxDepth: (e == null ? void 0 : e.maxDepth) ?? De.maxDepth,
      maxWidth: (e == null ? void 0 : e.maxWidth) ?? De.maxWidth,
      min: (e == null ? void 0 : e.min) ?? De.min,
      plugins: (e == null ? void 0 : e.plugins) ?? De.plugins,
      printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? true,
      printFunctionName: ra(e),
      printShadowRoot: (e == null ? void 0 : e.printShadowRoot) ?? true,
      spacingInner: (e == null ? void 0 : e.min) ? " " : `
`,
      spacingOuter: (e == null ? void 0 : e.min) ? "" : `
`
    };
  }
  function vf(e) {
    return Array.from({
      length: e + 1
    }).join(" ");
  }
  function Le(e, t) {
    if (t && (Tf(t), t.plugins)) {
      const r = ta(t.plugins, e);
      if (r !== null) return ea(r, e, qs(t), "", 0, []);
    }
    const n = Zc(e, ra(t), oa(t), sa(t));
    return n !== null ? n : Qc(e, qs(t), "", 0, []);
  }
  const Fn = {
    AsymmetricMatcher: fl,
    DOMCollection: bl,
    DOMElement: Al,
    Immutable: Wl,
    ReactElement: rf,
    ReactTestComponent: uf,
    Error: bf
  }, Bs = {
    bold: [
      "1",
      "22"
    ],
    dim: [
      "2",
      "22"
    ],
    italic: [
      "3",
      "23"
    ],
    underline: [
      "4",
      "24"
    ],
    inverse: [
      "7",
      "27"
    ],
    hidden: [
      "8",
      "28"
    ],
    strike: [
      "9",
      "29"
    ],
    black: [
      "30",
      "39"
    ],
    red: [
      "31",
      "39"
    ],
    green: [
      "32",
      "39"
    ],
    yellow: [
      "33",
      "39"
    ],
    blue: [
      "34",
      "39"
    ],
    magenta: [
      "35",
      "39"
    ],
    cyan: [
      "36",
      "39"
    ],
    white: [
      "37",
      "39"
    ],
    brightblack: [
      "30;1",
      "39"
    ],
    brightred: [
      "31;1",
      "39"
    ],
    brightgreen: [
      "32;1",
      "39"
    ],
    brightyellow: [
      "33;1",
      "39"
    ],
    brightblue: [
      "34;1",
      "39"
    ],
    brightmagenta: [
      "35;1",
      "39"
    ],
    brightcyan: [
      "36;1",
      "39"
    ],
    brightwhite: [
      "37;1",
      "39"
    ],
    grey: [
      "90",
      "39"
    ]
  }, $f = {
    special: "cyan",
    number: "yellow",
    bigint: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    symbol: "green",
    date: "magenta",
    regexp: "red"
  }, xt = "\u2026";
  function _f(e, t) {
    const n = Bs[$f[t]] || Bs[t] || "";
    return n ? `\x1B[${n[0]}m${String(e)}\x1B[${n[1]}m` : String(e);
  }
  function Of({ showHidden: e = false, depth: t = 2, colors: n = false, customInspect: r = true, showProxy: o = false, maxArrayLength: s = 1 / 0, breakLength: i = 1 / 0, seen: c = [], truncate: u = 1 / 0, stylize: a = String } = {}, l) {
    const f = {
      showHidden: !!e,
      depth: Number(t),
      colors: !!n,
      customInspect: !!r,
      showProxy: !!o,
      maxArrayLength: Number(s),
      breakLength: Number(i),
      truncate: Number(u),
      seen: c,
      inspect: l,
      stylize: a
    };
    return f.colors && (f.stylize = _f), f;
  }
  function xf(e) {
    return e >= "\uD800" && e <= "\uDBFF";
  }
  function it(e, t, n = xt) {
    e = String(e);
    const r = n.length, o = e.length;
    if (r > t && o > r) return n;
    if (o > t && o > r) {
      let s = t - r;
      return s > 0 && xf(e[s - 1]) && (s = s - 1), `${e.slice(0, s)}${n}`;
    }
    return e;
  }
  function Be(e, t, n, r = ", ") {
    n = n || t.inspect;
    const o = e.length;
    if (o === 0) return "";
    const s = t.truncate;
    let i = "", c = "", u = "";
    for (let a = 0; a < o; a += 1) {
      const l = a + 1 === e.length, f = a + 2 === e.length;
      u = `${xt}(${e.length - a})`;
      const h = e[a];
      t.truncate = s - i.length - (l ? 0 : r.length);
      const p = c || n(h, t) + (l ? "" : r), d = i.length + p.length, g = d + u.length;
      if (l && d > s && i.length + u.length <= s || !l && !f && g > s || (c = l ? "" : n(e[a + 1], t) + (f ? "" : r), !l && f && g > s && d + c.length > s)) break;
      if (i += p, !l && !f && d + c.length >= s) {
        u = `${xt}(${e.length - a - 1})`;
        break;
      }
      u = "";
    }
    return `${i}${u}`;
  }
  function Mf(e) {
    return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
  }
  function Jt([e, t], n) {
    return n.truncate -= 2, typeof e == "string" ? e = Mf(e) : typeof e != "number" && (e = `[${n.inspect(e, n)}]`), n.truncate -= e.length, t = n.inspect(t, n), `${e}: ${t}`;
  }
  function Af(e, t) {
    const n = Object.keys(e).slice(e.length);
    if (!e.length && !n.length) return "[]";
    t.truncate -= 4;
    const r = Be(e, t);
    t.truncate -= r.length;
    let o = "";
    return n.length && (o = Be(n.map((s) => [
      s,
      e[s]
    ]), t, Jt)), `[ ${r}${o ? `, ${o}` : ""} ]`;
  }
  const Cf = (e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name;
  function He(e, t) {
    const n = Cf(e);
    t.truncate -= n.length + 4;
    const r = Object.keys(e).slice(e.length);
    if (!e.length && !r.length) return `${n}[]`;
    let o = "";
    for (let i = 0; i < e.length; i++) {
      const c = `${t.stylize(it(e[i], t.truncate), "number")}${i === e.length - 1 ? "" : ", "}`;
      if (t.truncate -= c.length, e[i] !== e.length && t.truncate <= 3) {
        o += `${xt}(${e.length - e[i] + 1})`;
        break;
      }
      o += c;
    }
    let s = "";
    return r.length && (s = Be(r.map((i) => [
      i,
      e[i]
    ]), t, Jt)), `${n}[ ${o}${s ? `, ${s}` : ""} ]`;
  }
  function Nf(e, t) {
    const n = e.toJSON();
    if (n === null) return "Invalid Date";
    const r = n.split("T"), o = r[0];
    return t.stylize(`${o}T${it(r[1], t.truncate - o.length - 1)}`, "date");
  }
  function zs(e, t) {
    const n = e[Symbol.toStringTag] || "Function", r = e.name;
    return r ? t.stylize(`[${n} ${it(r, t.truncate - 11)}]`, "special") : t.stylize(`[${n}]`, "special");
  }
  function If([e, t], n) {
    return n.truncate -= 4, e = n.inspect(e, n), n.truncate -= e.length, t = n.inspect(t, n), `${e} => ${t}`;
  }
  function Pf(e) {
    const t = [];
    return e.forEach((n, r) => {
      t.push([
        r,
        n
      ]);
    }), t;
  }
  function kf(e, t) {
    return e.size === 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${Be(Pf(e), t, If)} }`);
  }
  const jf = Number.isNaN || ((e) => e !== e);
  function Vs(e, t) {
    return jf(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(it(String(e), t.truncate), "number");
  }
  function Ws(e, t) {
    let n = it(e.toString(), t.truncate - 1);
    return n !== xt && (n += "n"), t.stylize(n, "bigint");
  }
  function Rf(e, t) {
    const n = e.toString().split("/")[2], r = t.truncate - (2 + n.length), o = e.source;
    return t.stylize(`/${it(o, r)}/${n}`, "regexp");
  }
  function Df(e) {
    const t = [];
    return e.forEach((n) => {
      t.push(n);
    }), t;
  }
  function Ff(e, t) {
    return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${Be(Df(e), t)} }`);
  }
  const Us = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), Lf = {
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    "'": "\\'",
    "\\": "\\\\"
  }, qf = 16;
  function Bf(e) {
    return Lf[e] || `\\u${`0000${e.charCodeAt(0).toString(qf)}`.slice(-4)}`;
  }
  function Ks(e, t) {
    return Us.test(e) && (e = e.replace(Us, Bf)), t.stylize(`'${it(e, t.truncate - 2)}'`, "string");
  }
  function Gs(e) {
    return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
  }
  const zf = () => "Promise{\u2026}";
  function yn(e, t) {
    const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
    if (n.length === 0 && r.length === 0) return "{}";
    if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e)) return "[Circular]";
    t.seen.push(e);
    const o = Be(n.map((c) => [
      c,
      e[c]
    ]), t, Jt), s = Be(r.map((c) => [
      c,
      e[c]
    ]), t, Jt);
    t.seen.pop();
    let i = "";
    return o && s && (i = ", "), `{ ${o}${i}${s} }`;
  }
  const cr = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : false;
  function Vf(e, t) {
    let n = "";
    return cr && cr in e && (n = e[cr]), n = n || e.constructor.name, (!n || n === "_class") && (n = "<Anonymous Class>"), t.truncate -= n.length, `${n}${yn(e, t)}`;
  }
  function Wf(e, t) {
    return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${Be(e, t)} ]`);
  }
  const Uf = [
    "stack",
    "line",
    "column",
    "name",
    "message",
    "fileName",
    "lineNumber",
    "columnNumber",
    "number",
    "description",
    "cause"
  ];
  function Kf(e, t) {
    const n = Object.getOwnPropertyNames(e).filter((i) => Uf.indexOf(i) === -1), r = e.name;
    t.truncate -= r.length;
    let o = "";
    if (typeof e.message == "string" ? o = it(e.message, t.truncate) : n.unshift("message"), o = o ? `: ${o}` : "", t.truncate -= o.length + 5, t.seen = t.seen || [], t.seen.includes(e)) return "[Circular]";
    t.seen.push(e);
    const s = Be(n.map((i) => [
      i,
      e[i]
    ]), t, Jt);
    return `${r}${o}${s ? ` { ${s} }` : ""}`;
  }
  function Gf([e, t], n) {
    return n.truncate -= 3, t ? `${n.stylize(String(e), "yellow")}=${n.stylize(`"${t}"`, "string")}` : `${n.stylize(String(e), "yellow")}`;
  }
  function Kr(e, t) {
    return Be(e, t, Yf, `
`);
  }
  function Yf(e, t) {
    switch (e.nodeType) {
      case 1:
        return ia(e, t);
      case 3:
        return t.inspect(e.data, t);
      default:
        return t.inspect(e, t);
    }
  }
  function ia(e, t) {
    const n = e.getAttributeNames(), r = e.tagName.toLowerCase(), o = t.stylize(`<${r}`, "special"), s = t.stylize(">", "special"), i = t.stylize(`</${r}>`, "special");
    t.truncate -= r.length * 2 + 5;
    let c = "";
    n.length > 0 && (c += " ", c += Be(n.map((l) => [
      l,
      e.getAttribute(l)
    ]), t, Gf, " ")), t.truncate -= c.length;
    const u = t.truncate;
    let a = Kr(e.children, t);
    return a && a.length > u && (a = `${xt}(${e.children.length})`), `${o}${c}${s}${a}${i}`;
  }
  const Jf = typeof Symbol == "function" && typeof Symbol.for == "function", ar = Jf ? /* @__PURE__ */ Symbol.for("chai/inspect") : "@@chai/inspect", ur = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom"), Ys = /* @__PURE__ */ new WeakMap(), Js = {}, Xs = {
    undefined: (e, t) => t.stylize("undefined", "undefined"),
    null: (e, t) => t.stylize("null", "null"),
    boolean: (e, t) => t.stylize(String(e), "boolean"),
    Boolean: (e, t) => t.stylize(String(e), "boolean"),
    number: Vs,
    Number: Vs,
    bigint: Ws,
    BigInt: Ws,
    string: Ks,
    String: Ks,
    function: zs,
    Function: zs,
    symbol: Gs,
    Symbol: Gs,
    Array: Af,
    Date: Nf,
    Map: kf,
    Set: Ff,
    RegExp: Rf,
    Promise: zf,
    WeakSet: (e, t) => t.stylize("WeakSet{\u2026}", "special"),
    WeakMap: (e, t) => t.stylize("WeakMap{\u2026}", "special"),
    Arguments: Wf,
    Int8Array: He,
    Uint8Array: He,
    Uint8ClampedArray: He,
    Int16Array: He,
    Uint16Array: He,
    Int32Array: He,
    Uint32Array: He,
    Float32Array: He,
    Float64Array: He,
    Generator: () => "",
    DataView: () => "",
    ArrayBuffer: () => "",
    Error: Kf,
    HTMLCollection: Kr,
    NodeList: Kr
  }, Xf = (e, t, n, r) => ar in e && typeof e[ar] == "function" ? e[ar](t) : ur in e && typeof e[ur] == "function" ? e[ur](t.depth, t, r) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && Ys.has(e.constructor) ? Ys.get(e.constructor)(e, t) : Js[n] ? Js[n](e, t) : "", Hf = Object.prototype.toString;
  function bn(e, t = {}) {
    const n = Of(t, bn), { customInspect: r } = n;
    let o = e === null ? "null" : typeof e;
    if (o === "object" && (o = Hf.call(e).slice(8, -1)), o in Xs) return Xs[o](e, n);
    if (r && e) {
      const i = Xf(e, n, o, bn);
      if (i) return typeof i == "string" ? i : bn(i, n);
    }
    const s = e ? Object.getPrototypeOf(e) : false;
    return s === Object.prototype || s === null ? yn(e, n) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? ia(e, n) : "constructor" in e ? e.constructor !== Object ? Vf(e, n) : yn(e, n) : e === Object(e) ? yn(e, n) : n.stylize(String(e), o);
  }
  const { AsymmetricMatcher: Zf, DOMCollection: Qf, DOMElement: eh, Immutable: th, ReactElement: nh, ReactTestComponent: rh } = Fn, Hs = [
    rh,
    nh,
    eh,
    Qf,
    th,
    Zf
  ];
  function ve(e, t = 10, { maxLength: n, ...r } = {}) {
    const o = n ?? 1e4;
    let s;
    try {
      s = Le(e, {
        maxDepth: t,
        escapeString: false,
        plugins: Hs,
        ...r
      });
    } catch {
      s = Le(e, {
        callToJSON: false,
        maxDepth: t,
        escapeString: false,
        plugins: Hs,
        ...r
      });
    }
    return s.length >= o && t > 1 ? ve(e, Math.floor(Math.min(t, Number.MAX_SAFE_INTEGER) / 2), {
      maxLength: n,
      ...r
    }) : s;
  }
  const ca = /%[sdjifoOc%]/g;
  function oh(e, t = {}) {
    const n = (c, u) => t.prettifyObject ? ve(c, void 0, {
      printBasicPrototype: false,
      escapeString: false
    }) : aa(c, u);
    if (typeof e[0] != "string") {
      const c = [];
      for (let u = 0; u < e.length; u++) c.push(n(e[u], {
        depth: 0,
        colors: false
      }));
      return c.join(" ");
    }
    const r = e.length;
    let o = 1;
    const s = e[0];
    let i = String(s).replace(ca, (c) => {
      if (c === "%%") return "%";
      if (o >= r) return c;
      switch (c) {
        case "%s": {
          const u = e[o++];
          return typeof u == "bigint" ? `${u.toString()}n` : typeof u == "number" && u === 0 && 1 / u < 0 ? "-0" : typeof u == "object" && u !== null ? typeof u.toString == "function" && u.toString !== Object.prototype.toString ? u.toString() : n(u, {
            depth: 0,
            colors: false
          }) : String(u);
        }
        case "%d": {
          const u = e[o++];
          return typeof u == "bigint" ? `${u.toString()}n` : Number(u).toString();
        }
        case "%i": {
          const u = e[o++];
          return typeof u == "bigint" ? `${u.toString()}n` : Number.parseInt(String(u)).toString();
        }
        case "%f":
          return Number.parseFloat(String(e[o++])).toString();
        case "%o":
          return n(e[o++], {
            showHidden: true,
            showProxy: true
          });
        case "%O":
          return n(e[o++]);
        case "%c":
          return o++, "";
        case "%j":
          try {
            return JSON.stringify(e[o++]);
          } catch (u) {
            const a = u.message;
            if (a.includes("circular structure") || a.includes("cyclic structures") || a.includes("cyclic object")) return "[Circular]";
            throw u;
          }
        default:
          return c;
      }
    });
    for (let c = e[o]; o < r; c = e[++o]) c === null || typeof c != "object" ? i += ` ${c}` : i += ` ${n(c)}`;
    return i;
  }
  function sh(...e) {
    return oh(e);
  }
  function aa(e, t = {}) {
    return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), bn(e, t);
  }
  function ih(e, t = {}) {
    typeof t.truncate > "u" && (t.truncate = 40);
    const n = aa(e, t), r = Object.prototype.toString.call(e);
    if (t.truncate && n.length >= t.truncate) if (r === "[object Function]") {
      const o = e;
      return o.name ? `[Function: ${o.name}]` : "[Function]";
    } else {
      if (r === "[object Array]") return `[ Array(${e.length}) ]`;
      if (r === "[object Object]") {
        const o = Object.keys(e);
        return `{ Object (${o.length > 2 ? `${o.splice(0, 2).join(", ")}, ...` : o.join(", ")}) }`;
      } else return n;
    }
    return n;
  }
  function ch(e) {
    const { message: t = "$$stack trace error", stackTraceLimit: n = 1 } = e || {}, r = Error.stackTraceLimit, o = Error.prepareStackTrace;
    Error.stackTraceLimit = n, Error.prepareStackTrace = (c) => c.stack;
    const i = new Error(t).stack || "";
    return Error.prepareStackTrace = o, Error.stackTraceLimit = r, i;
  }
  function Se(e, t, n) {
    const r = typeof e;
    if (!n.includes(r)) throw new TypeError(`${t} value must be ${n.join(" or ")}, received "${r}"`);
  }
  function ua(e) {
    return e == null && (e = []), Array.isArray(e) ? e : [
      e
    ];
  }
  function vt(e) {
    return e != null && typeof e == "object" && !Array.isArray(e);
  }
  function ah(e) {
    return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
  }
  function Xt(e) {
    return Object.prototype.toString.apply(e).slice(8, -1);
  }
  function uh(e, t) {
    const n = typeof t == "function" ? t : (r) => t.add(r);
    Object.getOwnPropertyNames(e).forEach(n), Object.getOwnPropertySymbols(e).forEach(n);
  }
  function la(e) {
    const t = /* @__PURE__ */ new Set();
    return ah(e) ? [] : (uh(e, t), Array.from(t));
  }
  const fa = {
    forceWritable: false
  };
  function Zs(e, t = fa) {
    return Gr(e, /* @__PURE__ */ new WeakMap(), t);
  }
  function Gr(e, t, n = fa) {
    let r, o;
    if (t.has(e)) return t.get(e);
    if (Array.isArray(e)) {
      for (o = Array.from({
        length: r = e.length
      }), t.set(e, o); r--; ) o[r] = Gr(e[r], t, n);
      return o;
    }
    if (Object.prototype.toString.call(e) === "[object Object]") {
      o = Object.create(Object.getPrototypeOf(e)), t.set(e, o);
      const s = la(e);
      for (const i of s) {
        const c = Object.getOwnPropertyDescriptor(e, i);
        if (!c) continue;
        const u = Gr(e[i], t, n);
        n.forceWritable ? Object.defineProperty(o, i, {
          enumerable: c.enumerable,
          configurable: true,
          writable: true,
          value: u
        }) : "get" in c ? Object.defineProperty(o, i, {
          ...c,
          get() {
            return u;
          }
        }) : Object.defineProperty(o, i, {
          ...c,
          value: u
        });
      }
      return o;
    }
    return e;
  }
  function lh() {
  }
  function Qs(e, t, n = void 0) {
    const r = t.replace(/\[(\d+)\]/g, ".$1").split(".");
    let o = e;
    for (const s of r) if (o = new Object(o)[s], o === void 0) return n;
    return o;
  }
  function ei() {
    let e = null, t = null;
    const n = new Promise((r, o) => {
      e = r, t = o;
    });
    return n.resolve = e, n.reject = t, n;
  }
  function fh(e) {
    if (!Number.isNaN(e)) return false;
    const t = new Float64Array(1);
    return t[0] = e, new Uint32Array(t.buffer)[1] >>> 31 === 1;
  }
  function hh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  const ge = -1, pe = 1, se = 0;
  class oe {
    constructor(t, n) {
      __publicField(this, 0);
      __publicField(this, 1);
      this[0] = t, this[1] = n;
    }
  }
  function ph(e, t) {
    if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
    let n = 0, r = Math.min(e.length, t.length), o = r, s = 0;
    for (; n < o; ) e.substring(s, o) === t.substring(s, o) ? (n = o, s = n) : r = o, o = Math.floor((r - n) / 2 + n);
    return o;
  }
  function ha(e, t) {
    if (!e || !t || e.charAt(e.length - 1) !== t.charAt(t.length - 1)) return 0;
    let n = 0, r = Math.min(e.length, t.length), o = r, s = 0;
    for (; n < o; ) e.substring(e.length - o, e.length - s) === t.substring(t.length - o, t.length - s) ? (n = o, s = n) : r = o, o = Math.floor((r - n) / 2 + n);
    return o;
  }
  function ti(e, t) {
    const n = e.length, r = t.length;
    if (n === 0 || r === 0) return 0;
    n > r ? e = e.substring(n - r) : n < r && (t = t.substring(0, n));
    const o = Math.min(n, r);
    if (e === t) return o;
    let s = 0, i = 1;
    for (; ; ) {
      const c = e.substring(o - i), u = t.indexOf(c);
      if (u === -1) return s;
      i += u, (u === 0 || e.substring(o - i) === t.substring(0, i)) && (s = i, i++);
    }
  }
  function dh(e) {
    let t = false;
    const n = [];
    let r = 0, o = null, s = 0, i = 0, c = 0, u = 0, a = 0;
    for (; s < e.length; ) e[s][0] === se ? (n[r++] = s, i = u, c = a, u = 0, a = 0, o = e[s][1]) : (e[s][0] === pe ? u += e[s][1].length : a += e[s][1].length, o && o.length <= Math.max(i, c) && o.length <= Math.max(u, a) && (e.splice(n[r - 1], 0, new oe(ge, o)), e[n[r - 1] + 1][0] = pe, r--, r--, s = r > 0 ? n[r - 1] : -1, i = 0, c = 0, u = 0, a = 0, o = null, t = true)), s++;
    for (t && pa(e), yh(e), s = 1; s < e.length; ) {
      if (e[s - 1][0] === ge && e[s][0] === pe) {
        const l = e[s - 1][1], f = e[s][1], h = ti(l, f), p = ti(f, l);
        h >= p ? (h >= l.length / 2 || h >= f.length / 2) && (e.splice(s, 0, new oe(se, f.substring(0, h))), e[s - 1][1] = l.substring(0, l.length - h), e[s + 1][1] = f.substring(h), s++) : (p >= l.length / 2 || p >= f.length / 2) && (e.splice(s, 0, new oe(se, l.substring(0, p))), e[s - 1][0] = pe, e[s - 1][1] = f.substring(0, f.length - p), e[s + 1][0] = ge, e[s + 1][1] = l.substring(p), s++), s++;
      }
      s++;
    }
  }
  const ni = /[^a-z0-9]/i, ri = /\s/, oi = /[\r\n]/, mh = /\n\r?\n$/, gh = /^\r?\n\r?\n/;
  function yh(e) {
    let t = 1;
    for (; t < e.length - 1; ) {
      if (e[t - 1][0] === se && e[t + 1][0] === se) {
        let n = e[t - 1][1], r = e[t][1], o = e[t + 1][1];
        const s = ha(n, r);
        if (s) {
          const l = r.substring(r.length - s);
          n = n.substring(0, n.length - s), r = l + r.substring(0, r.length - s), o = l + o;
        }
        let i = n, c = r, u = o, a = un(n, r) + un(r, o);
        for (; r.charAt(0) === o.charAt(0); ) {
          n += r.charAt(0), r = r.substring(1) + o.charAt(0), o = o.substring(1);
          const l = un(n, r) + un(r, o);
          l >= a && (a = l, i = n, c = r, u = o);
        }
        e[t - 1][1] !== i && (i ? e[t - 1][1] = i : (e.splice(t - 1, 1), t--), e[t][1] = c, u ? e[t + 1][1] = u : (e.splice(t + 1, 1), t--));
      }
      t++;
    }
  }
  function pa(e) {
    var t;
    e.push(new oe(se, ""));
    let n = 0, r = 0, o = 0, s = "", i = "", c;
    for (; n < e.length; ) switch (e[n][0]) {
      case pe:
        o++, i += e[n][1], n++;
        break;
      case ge:
        r++, s += e[n][1], n++;
        break;
      case se:
        r + o > 1 ? (r !== 0 && o !== 0 && (c = ph(i, s), c !== 0 && (n - r - o > 0 && e[n - r - o - 1][0] === se ? e[n - r - o - 1][1] += i.substring(0, c) : (e.splice(0, 0, new oe(se, i.substring(0, c))), n++), i = i.substring(c), s = s.substring(c)), c = ha(i, s), c !== 0 && (e[n][1] = i.substring(i.length - c) + e[n][1], i = i.substring(0, i.length - c), s = s.substring(0, s.length - c))), n -= r + o, e.splice(n, r + o), s.length && (e.splice(n, 0, new oe(ge, s)), n++), i.length && (e.splice(n, 0, new oe(pe, i)), n++), n++) : n !== 0 && e[n - 1][0] === se ? (e[n - 1][1] += e[n][1], e.splice(n, 1)) : n++, o = 0, r = 0, s = "", i = "";
        break;
    }
    ((t = e.at(-1)) === null || t === void 0 ? void 0 : t[1]) === "" && e.pop();
    let u = false;
    for (n = 1; n < e.length - 1; ) e[n - 1][0] === se && e[n + 1][0] === se && (e[n][1].substring(e[n][1].length - e[n - 1][1].length) === e[n - 1][1] ? (e[n][1] = e[n - 1][1] + e[n][1].substring(0, e[n][1].length - e[n - 1][1].length), e[n + 1][1] = e[n - 1][1] + e[n + 1][1], e.splice(n - 1, 1), u = true) : e[n][1].substring(0, e[n + 1][1].length) === e[n + 1][1] && (e[n - 1][1] += e[n + 1][1], e[n][1] = e[n][1].substring(e[n + 1][1].length) + e[n + 1][1], e.splice(n + 1, 1), u = true)), n++;
    u && pa(e);
  }
  function un(e, t) {
    if (!e || !t) return 6;
    const n = e.charAt(e.length - 1), r = t.charAt(0), o = n.match(ni), s = r.match(ni), i = o && n.match(ri), c = s && r.match(ri), u = i && n.match(oi), a = c && r.match(oi), l = u && e.match(mh), f = a && t.match(gh);
    return l || f ? 5 : u || a ? 4 : o && !i && c ? 3 : i || c ? 2 : o || s ? 1 : 0;
  }
  const da = "Compared values have no visual difference.", bh = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
  var ln = {}, si;
  function wh() {
    if (si) return ln;
    si = 1, Object.defineProperty(ln, "__esModule", {
      value: true
    }), ln.default = h;
    const e = "diff-sequences", t = 0, n = (p, d, g, w, T) => {
      let $ = 0;
      for (; p < d && g < w && T(p, g); ) p += 1, g += 1, $ += 1;
      return $;
    }, r = (p, d, g, w, T) => {
      let $ = 0;
      for (; p <= d && g <= w && T(d, w); ) d -= 1, w -= 1, $ += 1;
      return $;
    }, o = (p, d, g, w, T, $, A) => {
      let O = 0, C = -p, N = $[O], x = N;
      $[O] += n(N + 1, d, w + N - C + 1, g, T);
      const L = p < A ? p : A;
      for (O += 1, C += 2; O <= L; O += 1, C += 2) {
        if (O !== p && x < $[O]) N = $[O];
        else if (N = x + 1, d <= N) return O - 1;
        x = $[O], $[O] = N + n(N + 1, d, w + N - C + 1, g, T);
      }
      return A;
    }, s = (p, d, g, w, T, $, A) => {
      let O = 0, C = p, N = $[O], x = N;
      $[O] -= r(d, N - 1, g, w + N - C - 1, T);
      const L = p < A ? p : A;
      for (O += 1, C -= 2; O <= L; O += 1, C -= 2) {
        if (O !== p && $[O] < x) N = $[O];
        else if (N = x - 1, N < d) return O - 1;
        x = $[O], $[O] = N - r(d, N - 1, g, w + N - C - 1, T);
      }
      return A;
    }, i = (p, d, g, w, T, $, A, O, C, N, x) => {
      const L = w - d, H = g - d, G = T - w - H, te = -G - (p - 1), ce = -G + (p - 1);
      let ae = t;
      const ne = p < O ? p : O;
      for (let Y = 0, ee = -p; Y <= ne; Y += 1, ee += 2) {
        const $e = Y === 0 || Y !== p && ae < A[Y], ue = $e ? A[Y] : ae, de = $e ? ue : ue + 1, Pe = L + de - ee, ye = n(de + 1, g, Pe + 1, T, $), we = de + ye;
        if (ae = A[Y], A[Y] = we, te <= ee && ee <= ce) {
          const Ye = (p - 1 - (ee + G)) / 2;
          if (Ye <= N && C[Ye] - 1 <= we) {
            const Ae = L + ue - ($e ? ee + 1 : ee - 1), Te = r(d, ue, w, Ae, $), Ee = ue - Te, bt = Ae - Te, Ve = Ee + 1, jt = bt + 1;
            x.nChangePreceding = p - 1, p - 1 === Ve + jt - d - w ? (x.aEndPreceding = d, x.bEndPreceding = w) : (x.aEndPreceding = Ve, x.bEndPreceding = jt), x.nCommonPreceding = Te, Te !== 0 && (x.aCommonPreceding = Ve, x.bCommonPreceding = jt), x.nCommonFollowing = ye, ye !== 0 && (x.aCommonFollowing = de + 1, x.bCommonFollowing = Pe + 1);
            const me = we + 1, Je = Pe + ye + 1;
            return x.nChangeFollowing = p - 1, p - 1 === g + T - me - Je ? (x.aStartFollowing = g, x.bStartFollowing = T) : (x.aStartFollowing = me, x.bStartFollowing = Je), true;
          }
        }
      }
      return false;
    }, c = (p, d, g, w, T, $, A, O, C, N, x) => {
      const L = T - g, H = g - d, G = T - w - H, te = G - p, ce = G + p;
      let ae = t;
      const ne = p < N ? p : N;
      for (let Y = 0, ee = p; Y <= ne; Y += 1, ee -= 2) {
        const $e = Y === 0 || Y !== p && C[Y] < ae, ue = $e ? C[Y] : ae, de = $e ? ue : ue - 1, Pe = L + de - ee, ye = r(d, de - 1, w, Pe - 1, $), we = de - ye;
        if (ae = C[Y], C[Y] = we, te <= ee && ee <= ce) {
          const Ye = (p + (ee - G)) / 2;
          if (Ye <= O && we - 1 <= A[Ye]) {
            const Ae = Pe - ye;
            if (x.nChangePreceding = p, p === we + Ae - d - w ? (x.aEndPreceding = d, x.bEndPreceding = w) : (x.aEndPreceding = we, x.bEndPreceding = Ae), x.nCommonPreceding = ye, ye !== 0 && (x.aCommonPreceding = we, x.bCommonPreceding = Ae), x.nChangeFollowing = p - 1, p === 1) x.nCommonFollowing = 0, x.aStartFollowing = g, x.bStartFollowing = T;
            else {
              const Te = L + ue - ($e ? ee - 1 : ee + 1), Ee = n(ue, g, Te, T, $);
              x.nCommonFollowing = Ee, Ee !== 0 && (x.aCommonFollowing = ue, x.bCommonFollowing = Te);
              const bt = ue + Ee, Ve = Te + Ee;
              p - 1 === g + T - bt - Ve ? (x.aStartFollowing = g, x.bStartFollowing = T) : (x.aStartFollowing = bt, x.bStartFollowing = Ve);
            }
            return true;
          }
        }
      }
      return false;
    }, u = (p, d, g, w, T, $, A, O, C) => {
      const N = w - d, x = T - g, L = g - d, H = T - w, D = H - L;
      let G = L, te = L;
      if (A[0] = d - 1, O[0] = g, D % 2 === 0) {
        const ce = (p || D) / 2, ae = (L + H) / 2;
        for (let ne = 1; ne <= ae; ne += 1) if (G = o(ne, g, T, N, $, A, G), ne < ce) te = s(ne, d, w, x, $, O, te);
        else if (c(ne, d, g, w, T, $, A, G, O, te, C)) return;
      } else {
        const ce = ((p || D) + 1) / 2, ae = (L + H + 1) / 2;
        let ne = 1;
        for (G = o(ne, g, T, N, $, A, G), ne += 1; ne <= ae; ne += 1) if (te = s(ne - 1, d, w, x, $, O, te), ne < ce) G = o(ne, g, T, N, $, A, G);
        else if (i(ne, d, g, w, T, $, A, G, O, te, C)) return;
      }
      throw new Error(`${e}: no overlap aStart=${d} aEnd=${g} bStart=${w} bEnd=${T}`);
    }, a = (p, d, g, w, T, $, A, O, C, N) => {
      if (T - w < g - d) {
        if ($ = !$, $ && A.length === 1) {
          const { foundSubsequence: we, isCommon: Ye } = A[0];
          A[1] = {
            foundSubsequence: (Ae, Te, Ee) => {
              we(Ae, Ee, Te);
            },
            isCommon: (Ae, Te) => Ye(Te, Ae)
          };
        }
        const Pe = d, ye = g;
        d = w, g = T, w = Pe, T = ye;
      }
      const { foundSubsequence: x, isCommon: L } = A[$ ? 1 : 0];
      u(p, d, g, w, T, L, O, C, N);
      const { nChangePreceding: H, aEndPreceding: D, bEndPreceding: G, nCommonPreceding: te, aCommonPreceding: ce, bCommonPreceding: ae, nCommonFollowing: ne, aCommonFollowing: Y, bCommonFollowing: ee, nChangeFollowing: $e, aStartFollowing: ue, bStartFollowing: de } = N;
      d < D && w < G && a(H, d, D, w, G, $, A, O, C, N), te !== 0 && x(te, ce, ae), ne !== 0 && x(ne, Y, ee), ue < g && de < T && a($e, ue, g, de, T, $, A, O, C, N);
    }, l = (p, d) => {
      if (typeof d != "number") throw new TypeError(`${e}: ${p} typeof ${typeof d} is not a number`);
      if (!Number.isSafeInteger(d)) throw new RangeError(`${e}: ${p} value ${d} is not a safe integer`);
      if (d < 0) throw new RangeError(`${e}: ${p} value ${d} is a negative integer`);
    }, f = (p, d) => {
      const g = typeof d;
      if (g !== "function") throw new TypeError(`${e}: ${p} typeof ${g} is not a function`);
    };
    function h(p, d, g, w) {
      l("aLength", p), l("bLength", d), f("isCommon", g), f("foundSubsequence", w);
      const T = n(0, p, 0, d, g);
      if (T !== 0 && w(T, 0, 0), p !== T || d !== T) {
        const $ = T, A = T, O = r($, p - 1, A, d - 1, g), C = p - O, N = d - O, x = T + O;
        p !== x && d !== x && a(0, $, C, A, N, false, [
          {
            foundSubsequence: w,
            isCommon: g
          }
        ], [
          t
        ], [
          t
        ], {
          aCommonFollowing: t,
          aCommonPreceding: t,
          aEndPreceding: t,
          aStartFollowing: t,
          bCommonFollowing: t,
          bCommonPreceding: t,
          bEndPreceding: t,
          bStartFollowing: t,
          nChangeFollowing: t,
          nChangePreceding: t,
          nCommonFollowing: t,
          nCommonPreceding: t
        }), O !== 0 && w(O, C, N);
      }
    }
    return ln;
  }
  var Th = wh(), ma = hh(Th);
  function Eh(e, t) {
    return e.replace(/\s+$/, (n) => t(n));
  }
  function Oo(e, t, n, r, o, s) {
    return e.length !== 0 ? n(`${r} ${Eh(e, o)}`) : r !== " " ? n(r) : t && s.length !== 0 ? n(`${r} ${s}`) : "";
  }
  function ga(e, t, { aColor: n, aIndicator: r, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: s }) {
    return Oo(e, t, n, r, o, s);
  }
  function ya(e, t, { bColor: n, bIndicator: r, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: s }) {
    return Oo(e, t, n, r, o, s);
  }
  function ba(e, t, { commonColor: n, commonIndicator: r, commonLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: s }) {
    return Oo(e, t, n, r, o, s);
  }
  function ii(e, t, n, r, { patchColor: o }) {
    return o(`@@ -${e + 1},${t - e} +${n + 1},${r - n} @@`);
  }
  function Sh(e, t) {
    const n = e.length, r = t.contextLines, o = r + r;
    let s = n, i = false, c = 0, u = 0;
    for (; u !== n; ) {
      const O = u;
      for (; u !== n && e[u][0] === se; ) u += 1;
      if (O !== u) if (O === 0) u > r && (s -= u - r, i = true);
      else if (u === n) {
        const C = u - O;
        C > r && (s -= C - r, i = true);
      } else {
        const C = u - O;
        C > o && (s -= C - o, c += 1);
      }
      for (; u !== n && e[u][0] !== se; ) u += 1;
    }
    const a = c !== 0 || i;
    c !== 0 ? s += c + 1 : i && (s += 1);
    const l = s - 1, f = [];
    let h = 0;
    a && f.push("");
    let p = 0, d = 0, g = 0, w = 0;
    const T = (O) => {
      const C = f.length;
      f.push(ba(O, C === 0 || C === l, t)), g += 1, w += 1;
    }, $ = (O) => {
      const C = f.length;
      f.push(ga(O, C === 0 || C === l, t)), g += 1;
    }, A = (O) => {
      const C = f.length;
      f.push(ya(O, C === 0 || C === l, t)), w += 1;
    };
    for (u = 0; u !== n; ) {
      let O = u;
      for (; u !== n && e[u][0] === se; ) u += 1;
      if (O !== u) if (O === 0) {
        u > r && (O = u - r, p = O, d = O, g = p, w = d);
        for (let C = O; C !== u; C += 1) T(e[C][1]);
      } else if (u === n) {
        const C = u - O > r ? O + r : u;
        for (let N = O; N !== C; N += 1) T(e[N][1]);
      } else {
        const C = u - O;
        if (C > o) {
          const N = O + r;
          for (let L = O; L !== N; L += 1) T(e[L][1]);
          f[h] = ii(p, g, d, w, t), h = f.length, f.push("");
          const x = C - o;
          p = g + x, d = w + x, g = p, w = d;
          for (let L = u - r; L !== u; L += 1) T(e[L][1]);
        } else for (let N = O; N !== u; N += 1) T(e[N][1]);
      }
      for (; u !== n && e[u][0] === ge; ) $(e[u][1]), u += 1;
      for (; u !== n && e[u][0] === pe; ) A(e[u][1]), u += 1;
    }
    return a && (f[h] = ii(p, g, d, w, t)), f.join(`
`);
  }
  function vh(e, t) {
    return e.map((n, r, o) => {
      const s = n[1], i = r === 0 || r === o.length - 1;
      switch (n[0]) {
        case ge:
          return ga(s, i, t);
        case pe:
          return ya(s, i, t);
        default:
          return ba(s, i, t);
      }
    }).join(`
`);
  }
  const lr = (e) => e, wa = 5, $h = 0;
  function _h() {
    return {
      aAnnotation: "Expected",
      aColor: ie.green,
      aIndicator: "-",
      bAnnotation: "Received",
      bColor: ie.red,
      bIndicator: "+",
      changeColor: ie.inverse,
      changeLineTrailingSpaceColor: lr,
      commonColor: ie.dim,
      commonIndicator: " ",
      commonLineTrailingSpaceColor: lr,
      compareKeys: void 0,
      contextLines: wa,
      emptyFirstOrLastLinePlaceholder: "",
      expand: false,
      includeChangeCounts: false,
      omitAnnotationLines: false,
      patchColor: ie.yellow,
      printBasicPrototype: false,
      truncateThreshold: $h,
      truncateAnnotation: "... Diff result is truncated",
      truncateAnnotationColor: lr
    };
  }
  function Oh(e) {
    return e && typeof e == "function" ? e : void 0;
  }
  function xh(e) {
    return typeof e == "number" && Number.isSafeInteger(e) && e >= 0 ? e : wa;
  }
  function gt(e = {}) {
    return {
      ..._h(),
      ...e,
      compareKeys: Oh(e.compareKeys),
      contextLines: xh(e.contextLines)
    };
  }
  function St(e) {
    return e.length === 1 && e[0].length === 0;
  }
  function Mh(e) {
    let t = 0, n = 0;
    return e.forEach((r) => {
      switch (r[0]) {
        case ge:
          t += 1;
          break;
        case pe:
          n += 1;
          break;
      }
    }), {
      a: t,
      b: n
    };
  }
  function Ah({ aAnnotation: e, aColor: t, aIndicator: n, bAnnotation: r, bColor: o, bIndicator: s, includeChangeCounts: i, omitAnnotationLines: c }, u) {
    if (c) return "";
    let a = "", l = "";
    if (i) {
      const p = String(u.a), d = String(u.b), g = r.length - e.length, w = " ".repeat(Math.max(0, g)), T = " ".repeat(Math.max(0, -g)), $ = d.length - p.length, A = " ".repeat(Math.max(0, $)), O = " ".repeat(Math.max(0, -$));
      a = `${w}  ${n} ${A}${p}`, l = `${T}  ${s} ${O}${d}`;
    }
    const f = `${n} ${e}${a}`, h = `${s} ${r}${l}`;
    return `${t(f)}
${o(h)}

`;
  }
  function xo(e, t, n) {
    return Ah(n, Mh(e)) + (n.expand ? vh(e, n) : Sh(e, n)) + (t ? n.truncateAnnotationColor(`
${n.truncateAnnotation}`) : "");
  }
  function Ln(e, t, n) {
    const r = gt(n), [o, s] = Ta(St(e) ? [] : e, St(t) ? [] : t, r);
    return xo(o, s, r);
  }
  function Ch(e, t, n, r, o) {
    if (St(e) && St(n) && (e = [], n = []), St(t) && St(r) && (t = [], r = []), e.length !== n.length || t.length !== r.length) return Ln(e, t, o);
    const [s, i] = Ta(n, r, o);
    let c = 0, u = 0;
    return s.forEach((a) => {
      switch (a[0]) {
        case ge:
          a[1] = e[c], c += 1;
          break;
        case pe:
          a[1] = t[u], u += 1;
          break;
        default:
          a[1] = t[u], c += 1, u += 1;
      }
    }), xo(s, i, gt(o));
  }
  function Ta(e, t, n) {
    const r = (n == null ? void 0 : n.truncateThreshold) ?? false, o = Math.max(Math.floor((n == null ? void 0 : n.truncateThreshold) ?? 0), 0), s = r ? Math.min(e.length, o) : e.length, i = r ? Math.min(t.length, o) : t.length, c = s !== e.length || i !== t.length, u = (p, d) => e[p] === t[d], a = [];
    let l = 0, f = 0;
    for (ma(s, i, u, (p, d, g) => {
      for (; l !== d; l += 1) a.push(new oe(ge, e[l]));
      for (; f !== g; f += 1) a.push(new oe(pe, t[f]));
      for (; p !== 0; p -= 1, l += 1, f += 1) a.push(new oe(se, t[f]));
    }); l !== s; l += 1) a.push(new oe(ge, e[l]));
    for (; f !== i; f += 1) a.push(new oe(pe, t[f]));
    return [
      a,
      c
    ];
  }
  function ci(e) {
    if (e === void 0) return "undefined";
    if (e === null) return "null";
    if (Array.isArray(e)) return "array";
    if (typeof e == "boolean") return "boolean";
    if (typeof e == "function") return "function";
    if (typeof e == "number") return "number";
    if (typeof e == "string") return "string";
    if (typeof e == "bigint") return "bigint";
    if (typeof e == "object") {
      if (e != null) {
        if (e.constructor === RegExp) return "regexp";
        if (e.constructor === Map) return "map";
        if (e.constructor === Set) return "set";
        if (e.constructor === Date) return "date";
      }
      return "object";
    } else if (typeof e == "symbol") return "symbol";
    throw new Error(`value of unknown type: ${e}`);
  }
  function ai(e) {
    return e.includes(`\r
`) ? `\r
` : `
`;
  }
  function Nh(e, t, n) {
    const r = (n == null ? void 0 : n.truncateThreshold) ?? false, o = Math.max(Math.floor((n == null ? void 0 : n.truncateThreshold) ?? 0), 0);
    let s = e.length, i = t.length;
    if (r) {
      const p = e.includes(`
`), d = t.includes(`
`), g = ai(e), w = ai(t), T = p ? `${e.split(g, o).join(g)}
` : e, $ = d ? `${t.split(w, o).join(w)}
` : t;
      s = T.length, i = $.length;
    }
    const c = s !== e.length || i !== t.length, u = (p, d) => e[p] === t[d];
    let a = 0, l = 0;
    const f = [];
    return ma(s, i, u, (p, d, g) => {
      a !== d && f.push(new oe(ge, e.slice(a, d))), l !== g && f.push(new oe(pe, t.slice(l, g))), a = d + p, l = g + p, f.push(new oe(se, t.slice(g, l)));
    }), a !== s && f.push(new oe(ge, e.slice(a))), l !== i && f.push(new oe(pe, t.slice(l))), [
      f,
      c
    ];
  }
  function Ih(e, t, n) {
    return t.reduce((r, o) => r + (o[0] === se ? o[1] : o[0] === e && o[1].length !== 0 ? n(o[1]) : ""), "");
  }
  class ui {
    constructor(t, n) {
      __publicField(this, "op");
      __publicField(this, "line");
      __publicField(this, "lines");
      __publicField(this, "changeColor");
      this.op = t, this.line = [], this.lines = [], this.changeColor = n;
    }
    pushSubstring(t) {
      this.pushDiff(new oe(this.op, t));
    }
    pushLine() {
      this.lines.push(this.line.length !== 1 ? new oe(this.op, Ih(this.op, this.line, this.changeColor)) : this.line[0][0] === this.op ? this.line[0] : new oe(this.op, this.line[0][1])), this.line.length = 0;
    }
    isLineEmpty() {
      return this.line.length === 0;
    }
    pushDiff(t) {
      this.line.push(t);
    }
    align(t) {
      const n = t[1];
      if (n.includes(`
`)) {
        const r = n.split(`
`), o = r.length - 1;
        r.forEach((s, i) => {
          i < o ? (this.pushSubstring(s), this.pushLine()) : s.length !== 0 && this.pushSubstring(s);
        });
      } else this.pushDiff(t);
    }
    moveLinesTo(t) {
      this.isLineEmpty() || this.pushLine(), t.push(...this.lines), this.lines.length = 0;
    }
  }
  class Ph {
    constructor(t, n) {
      __publicField(this, "deleteBuffer");
      __publicField(this, "insertBuffer");
      __publicField(this, "lines");
      this.deleteBuffer = t, this.insertBuffer = n, this.lines = [];
    }
    pushDiffCommonLine(t) {
      this.lines.push(t);
    }
    pushDiffChangeLines(t) {
      const n = t[1].length === 0;
      (!n || this.deleteBuffer.isLineEmpty()) && this.deleteBuffer.pushDiff(t), (!n || this.insertBuffer.isLineEmpty()) && this.insertBuffer.pushDiff(t);
    }
    flushChangeLines() {
      this.deleteBuffer.moveLinesTo(this.lines), this.insertBuffer.moveLinesTo(this.lines);
    }
    align(t) {
      const n = t[0], r = t[1];
      if (r.includes(`
`)) {
        const o = r.split(`
`), s = o.length - 1;
        o.forEach((i, c) => {
          if (c === 0) {
            const u = new oe(n, i);
            this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty() ? (this.flushChangeLines(), this.pushDiffCommonLine(u)) : (this.pushDiffChangeLines(u), this.flushChangeLines());
          } else c < s ? this.pushDiffCommonLine(new oe(n, i)) : i.length !== 0 && this.pushDiffChangeLines(new oe(n, i));
        });
      } else this.pushDiffChangeLines(t);
    }
    getLines() {
      return this.flushChangeLines(), this.lines;
    }
  }
  function kh(e, t) {
    const n = new ui(ge, t), r = new ui(pe, t), o = new Ph(n, r);
    return e.forEach((s) => {
      switch (s[0]) {
        case ge:
          n.align(s);
          break;
        case pe:
          r.align(s);
          break;
        default:
          o.align(s);
      }
    }), o.getLines();
  }
  function jh(e, t) {
    if (t) {
      const n = e.length - 1;
      return e.some((r, o) => r[0] === se && (o !== n || r[1] !== `
`));
    }
    return e.some((n) => n[0] === se);
  }
  function Rh(e, t, n) {
    if (e !== t && e.length !== 0 && t.length !== 0) {
      const r = e.includes(`
`) || t.includes(`
`), [o, s] = Ea(r ? `${e}
` : e, r ? `${t}
` : t, true, n);
      if (jh(o, r)) {
        const i = gt(n), c = kh(o, i.changeColor);
        return xo(c, s, i);
      }
    }
    return Ln(e.split(`
`), t.split(`
`), n);
  }
  function Ea(e, t, n, r) {
    const [o, s] = Nh(e, t, r);
    return dh(o), [
      o,
      s
    ];
  }
  function Yr(e, t) {
    const { commonColor: n } = gt(t);
    return n(e);
  }
  const { AsymmetricMatcher: Dh, DOMCollection: Fh, DOMElement: Lh, Immutable: qh, ReactElement: Bh, ReactTestComponent: zh } = Fn, Sa = [
    zh,
    Bh,
    Lh,
    Fh,
    qh,
    Dh,
    Fn.Error
  ], Jr = {
    maxDepth: 20,
    plugins: Sa
  }, va = {
    callToJSON: false,
    maxDepth: 8,
    plugins: Sa
  };
  function Ct(e, t, n) {
    if (Object.is(e, t)) return "";
    const r = ci(e);
    let o = r, s = false;
    if (r === "object" && typeof e.asymmetricMatch == "function") {
      if (e.$$typeof !== /* @__PURE__ */ Symbol.for("jest.asymmetricMatcher") || typeof e.getExpectedType != "function") return;
      o = e.getExpectedType(), s = o === "string";
    }
    if (o !== ci(t)) {
      let w = function(A) {
        return A.length <= g ? A : `${A.slice(0, g)}...`;
      };
      const { aAnnotation: i, aColor: c, aIndicator: u, bAnnotation: a, bColor: l, bIndicator: f } = gt(n), h = Xr(va, n);
      let p = Le(e, h), d = Le(t, h);
      const g = 1e5;
      p = w(p), d = w(d);
      const T = `${c(`${u} ${i}:`)} 
${p}`, $ = `${l(`${f} ${a}:`)} 
${d}`;
      return `${T}

${$}`;
    }
    if (!s) switch (r) {
      case "string":
        return Ln(e.split(`
`), t.split(`
`), n);
      case "boolean":
      case "number":
        return Vh(e, t, n);
      case "map":
        return fr(li(e), li(t), n);
      case "set":
        return fr(fi(e), fi(t), n);
      default:
        return fr(e, t, n);
    }
  }
  function Vh(e, t, n) {
    const r = Le(e, Jr), o = Le(t, Jr);
    return r === o ? "" : Ln(r.split(`
`), o.split(`
`), n);
  }
  function li(e) {
    return new Map(Array.from(e.entries()).sort());
  }
  function fi(e) {
    return new Set(Array.from(e.values()).sort());
  }
  function fr(e, t, n) {
    let r, o = false;
    try {
      const i = Xr(Jr, n);
      r = hi(e, t, i, n);
    } catch {
      o = true;
    }
    const s = Yr(da, n);
    if (r === void 0 || r === s) {
      const i = Xr(va, n);
      r = hi(e, t, i, n), r !== s && !o && (r = `${Yr(bh, n)}

${r}`);
    }
    return r;
  }
  function Xr(e, t) {
    const { compareKeys: n, printBasicPrototype: r, maxDepth: o } = gt(t);
    return {
      ...e,
      compareKeys: n,
      printBasicPrototype: r,
      maxDepth: o ?? e.maxDepth
    };
  }
  function hi(e, t, n, r) {
    const o = {
      ...n,
      indent: 0
    }, s = Le(e, o), i = Le(t, o);
    if (s === i) return Yr(da, r);
    {
      const c = Le(e, n), u = Le(t, n);
      return Ch(c.split(`
`), u.split(`
`), s.split(`
`), i.split(`
`), r);
    }
  }
  const pi = 2e4;
  function di(e) {
    return Xt(e) === "Object" && typeof e.asymmetricMatch == "function";
  }
  function fn(e, t) {
    const n = Xt(e), r = Xt(t);
    return n === r && (n === "Object" || n === "Array");
  }
  function $a(e, t, n) {
    const { aAnnotation: r, bAnnotation: o } = gt(n);
    if (typeof t == "string" && typeof e == "string" && t.length > 0 && e.length > 0 && t.length <= pi && e.length <= pi && t !== e) {
      if (t.includes(`
`) || e.includes(`
`)) return Rh(t, e, n);
      const [l] = Ea(t, e), f = l.some((g) => g[0] === se), h = Wh(r, o), p = h(r) + Gh(mi(l, ge, f)), d = h(o) + Kh(mi(l, pe, f));
      return `${p}
${d}`;
    }
    const s = Zs(t, {
      forceWritable: true
    }), i = Zs(e, {
      forceWritable: true
    }), { replacedExpected: c, replacedActual: u } = wn(i, s);
    return Ct(c, u, n);
  }
  function wn(e, t, n = /* @__PURE__ */ new WeakSet(), r = /* @__PURE__ */ new WeakSet()) {
    return e instanceof Error && t instanceof Error && typeof e.cause < "u" && typeof t.cause > "u" ? (delete e.cause, {
      replacedActual: e,
      replacedExpected: t
    }) : fn(e, t) ? n.has(e) || r.has(t) ? {
      replacedActual: e,
      replacedExpected: t
    } : (n.add(e), r.add(t), la(t).forEach((o) => {
      const s = t[o], i = e[o];
      if (di(s)) {
        if (s.asymmetricMatch(i)) t[o] = i;
        else if ("sample" in s && s.sample !== void 0 && fn(i, s.sample)) {
          const c = wn(i, s.sample, n, r);
          e[o] = c.replacedActual, t[o] = c.replacedExpected;
        }
      } else if (di(i)) {
        if (i.asymmetricMatch(s)) e[o] = s;
        else if ("sample" in i && i.sample !== void 0 && fn(i.sample, s)) {
          const c = wn(i.sample, s, n, r);
          e[o] = c.replacedActual, t[o] = c.replacedExpected;
        }
      } else if (fn(i, s)) {
        const c = wn(i, s, n, r);
        e[o] = c.replacedActual, t[o] = c.replacedExpected;
      }
    }), {
      replacedActual: e,
      replacedExpected: t
    }) : {
      replacedActual: e,
      replacedExpected: t
    };
  }
  function Wh(...e) {
    const t = e.reduce((n, r) => r.length > n ? r.length : n, 0);
    return (n) => `${n}: ${" ".repeat(t - n.length)}`;
  }
  const Uh = "\xB7";
  function _a(e) {
    return e.replace(/\s+$/gm, (t) => Uh.repeat(t.length));
  }
  function Kh(e) {
    return ie.red(_a(ve(e)));
  }
  function Gh(e) {
    return ie.green(_a(ve(e)));
  }
  function mi(e, t, n) {
    return e.reduce((r, o) => r + (o[0] === se ? o[1] : o[0] === t ? n ? ie.inverse(o[1]) : o[1] : ""), "");
  }
  function lt(e) {
    return typeof e == "function" && "_isMockFunction" in e && e._isMockFunction === true;
  }
  const Hr = /* @__PURE__ */ new Set(), Mo = /* @__PURE__ */ new Set(), Oa = /* @__PURE__ */ new WeakMap();
  function Ao(e = {}) {
    var t;
    const { originalImplementation: n, restore: r, mockImplementation: o, resetToMockImplementation: s, resetToMockName: i } = e;
    r && Hr.add(r);
    const c = cp(n), u = ap(), a = Hh({
      config: c,
      state: u,
      ...e
    }), l = ((t = o || n) === null || t === void 0 ? void 0 : t.length) ?? 0;
    return Object.defineProperty(a, "length", {
      writable: true,
      enumerable: false,
      value: l,
      configurable: true
    }), i && (c.mockName = a.name || "vi.fn()"), Oa.set(a, c), Mo.add(a), a._isMockFunction = true, a.getMockImplementation = () => c.onceMockImplementations[0] || c.mockImplementation, Object.defineProperty(a, "mock", {
      configurable: false,
      enumerable: true,
      writable: false,
      value: u
    }), a.mockImplementation = function(h) {
      return c.mockImplementation = h, a;
    }, a.mockImplementationOnce = function(h) {
      return c.onceMockImplementations.push(h), a;
    }, a.withImplementation = function(h, p) {
      const d = c.mockImplementation, g = c.onceMockImplementations, w = () => {
        c.mockImplementation = d, c.onceMockImplementations = g;
      };
      c.mockImplementation = h, c.onceMockImplementations = [];
      const T = p();
      return typeof T == "object" && typeof (T == null ? void 0 : T.then) == "function" ? T.then(() => (w(), a)) : (w(), a);
    }, a.mockReturnThis = function() {
      return a.mockImplementation(function() {
        return this;
      });
    }, a.mockReturnValue = function(h) {
      return a.mockImplementation(() => h);
    }, a.mockReturnValueOnce = function(h) {
      return a.mockImplementationOnce(() => h);
    }, a.mockResolvedValue = function(h) {
      return a.mockImplementation(() => Promise.resolve(h));
    }, a.mockResolvedValueOnce = function(h) {
      return a.mockImplementationOnce(() => Promise.resolve(h));
    }, a.mockRejectedValue = function(h) {
      return a.mockImplementation(() => Promise.reject(h));
    }, a.mockRejectedValueOnce = function(h) {
      return a.mockImplementationOnce(() => Promise.reject(h));
    }, a.mockClear = function() {
      return u.calls = [], u.contexts = [], u.instances = [], u.invocationCallOrder = [], u.results = [], u.settledResults = [], a;
    }, a.mockReset = function() {
      return a.mockClear(), c.mockImplementation = s ? o : void 0, c.mockName = i && a.name || "vi.fn()", c.onceMockImplementations = [], a;
    }, a.mockRestore = function() {
      return a.mockReset(), r == null ? void 0 : r();
    }, a.mockName = function(h) {
      return typeof h == "string" && (c.mockName = h), a;
    }, a.getMockName = function() {
      return c.mockName || "vi.fn()";
    }, Symbol.dispose && (a[Symbol.dispose] = () => a.mockRestore()), o && a.mockImplementation(o), a;
  }
  function Yh(e) {
    return e != null && lt(e) ? e : Ao({
      mockImplementation: e,
      resetToMockImplementation: true
    });
  }
  function Jh(e, t, n) {
    hn(e != null, "The vi.spyOn() function could not find an object to spy upon. The first argument must be defined."), hn(typeof e == "object" || typeof e == "function", "Vitest cannot spy on a primitive value.");
    const [r, o] = xa(e, t) || [];
    hn(o || t in e, `The property "${String(t)}" is not defined on the ${typeof e}.`);
    let s = n || "value", i = false;
    s === "value" && o && o.value == null && o.get && (s = "get", i = true);
    let c;
    o ? c = o[s] : s !== "value" ? c = () => e[t] : c = e[t];
    const u = i && c ? c() : c, a = typeof u;
    if (hn(a === "function" || s !== "value" && c == null, `vi.spyOn() can only spy on a function. Received ${a}.`), lt(u)) return u;
    const l = (p) => {
      const { value: d, ...g } = o || {
        configurable: true,
        writable: true
      };
      s !== "value" && delete g.writable, g[s] = p, Object.defineProperty(e, t, g);
    }, h = Ao({
      restore: () => {
        r !== e ? Reflect.deleteProperty(e, t) : o && !c ? Object.defineProperty(e, t, o) : l(c);
      },
      originalImplementation: u,
      resetToMockName: true
    });
    try {
      l(i ? () => h : h);
    } catch (p) {
      throw p instanceof TypeError && Symbol.toStringTag && e[Symbol.toStringTag] === "Module" && (p.message.includes("Cannot redefine property") || p.message.includes("Cannot replace module namespace") || p.message.includes("can't redefine non-configurable property")) ? new TypeError(`Cannot spy on export "${String(t)}". Module namespace is not configurable in ESM. See: https://vitest.dev/guide/browser/#limitations`, {
        cause: p
      }) : p;
    }
    return h;
  }
  function xa(e, t) {
    const n = Object.getOwnPropertyDescriptor(e, t);
    if (n) return [
      e,
      n
    ];
    let r = Object.getPrototypeOf(e);
    for (; r !== null; ) {
      const o = Object.getOwnPropertyDescriptor(r, t);
      if (o) return [
        r,
        o
      ];
      r = Object.getPrototypeOf(r);
    }
  }
  function hn(e, t) {
    if (!e) throw new Error(t);
  }
  let Xh = 1;
  function Hh({ state: e, config: t, name: n, prototypeState: r, prototypeConfig: o, keepMembersImplementation: s, mockImplementation: i, prototypeMembers: c = [] }) {
    const u = t.mockOriginal, a = i, l = n || (u == null ? void 0 : u.name) || "Mock", f = {
      [l]: (function(...d) {
        Zh(d, e, r), Qh(Xh++, e, r);
        const g = {
          type: "incomplete",
          value: void 0
        }, w = {
          type: "incomplete",
          value: void 0
        };
        ep(g, e, r), tp(w, e, r);
        const T = new.target ? void 0 : this, [$, A] = np(T, e, r), [O, C] = rp(T, e, r), N = t.onceMockImplementations.shift() || t.mockImplementation || (o == null ? void 0 : o.onceMockImplementations.shift()) || (o == null ? void 0 : o.mockImplementation) || u || function() {
        };
        let x, L, H = false;
        try {
          if (new.target) {
            x = Reflect.construct(N, d, new.target);
            for (const D of c) {
              const G = x[D];
              if (G !== h.prototype[D]) continue;
              const te = lt(G), ce = te ? G.mock : void 0, ae = te ? Oa.get(G) : void 0;
              x[D] = Ao({
                originalImplementation: s ? ae == null ? void 0 : ae.mockOriginal : void 0,
                prototypeState: ce,
                prototypeConfig: ae,
                keepMembersImplementation: s
              });
            }
          } else x = N.apply(this, d);
        } catch (D) {
          throw L = D, H = true, D instanceof TypeError && D.message.includes("is not a constructor") && console.warn(`[vitest] The ${f[l].getMockName()} mock did not use 'function' or 'class' in its implementation, see https://vitest.dev/api/vi#vi-spyon for examples.`), D;
        } finally {
          H ? (g.type = "throw", g.value = L, w.type = "rejected", w.value = L) : (g.type = "return", g.value = x, new.target && (e.contexts[O - 1] = x, e.instances[$ - 1] = x, C != null && r && (r.contexts[C - 1] = x), A != null && r && (r.instances[A - 1] = x)), x instanceof Promise ? x.then((D) => {
            w.type = "fulfilled", w.value = D;
          }, (D) => {
            w.type = "rejected", w.value = D;
          }) : (w.type = "fulfilled", w.value = x));
        }
        return x;
      })
    }, h = f[l], p = u || a;
    return p && op(h, p), h;
  }
  function Zh(e, t, n) {
    t.calls.push(e), n == null ? void 0 : n.calls.push(e);
  }
  function Qh(e, t, n) {
    t.invocationCallOrder.push(e), n == null ? void 0 : n.invocationCallOrder.push(e);
  }
  function ep(e, t, n) {
    t.results.push(e), n == null ? void 0 : n.results.push(e);
  }
  function tp(e, t, n) {
    t.settledResults.push(e), n == null ? void 0 : n.settledResults.push(e);
  }
  function np(e, t, n) {
    const r = t.instances.push(e), o = n == null ? void 0 : n.instances.push(e);
    return [
      r,
      o
    ];
  }
  function rp(e, t, n) {
    const r = t.contexts.push(e), o = n == null ? void 0 : n.contexts.push(e);
    return [
      r,
      o
    ];
  }
  function op(e, t) {
    const { properties: n, descriptors: r } = ip(t);
    for (const o of n) {
      const s = r[o];
      xa(e, o) || Object.defineProperty(e, o, s);
    }
  }
  const sp = /* @__PURE__ */ new Set([
    "length",
    "name",
    "prototype",
    /* @__PURE__ */ Symbol.for("nodejs.util.promisify.custom")
  ]);
  function ip(e) {
    const t = /* @__PURE__ */ new Set(), n = {};
    for (; e && e !== Object.prototype && e !== Function.prototype; ) {
      const r = [
        ...Object.getOwnPropertyNames(e),
        ...Object.getOwnPropertySymbols(e)
      ];
      for (const o of r) n[o] || sp.has(o) || (t.add(o), n[o] = Object.getOwnPropertyDescriptor(e, o));
      e = Object.getPrototypeOf(e);
    }
    return {
      properties: t,
      descriptors: n
    };
  }
  function cp(e) {
    return {
      mockImplementation: void 0,
      mockOriginal: e,
      mockName: "vi.fn()",
      onceMockImplementations: []
    };
  }
  function ap() {
    const e = {
      calls: [],
      contexts: [],
      instances: [],
      invocationCallOrder: [],
      settledResults: [],
      results: [],
      get lastCall() {
        return e.calls.at(-1);
      }
    };
    return e;
  }
  function up() {
    for (const e of Hr) e();
    Hr.clear();
  }
  function lp() {
    Mo.forEach((e) => e.mockClear());
  }
  function fp() {
    Mo.forEach((e) => e.mockReset());
  }
  const hp = "@@__IMMUTABLE_RECORD__@@", pp = "@@__IMMUTABLE_ITERABLE__@@";
  function dp(e) {
    return e && (e[pp] || e[hp]);
  }
  const mp = Object.getPrototypeOf({});
  function gi(e) {
    return e instanceof Error ? `<unserializable>: ${e.message}` : typeof e == "string" ? `<unserializable>: ${e}` : "<unserializable>";
  }
  function nt(e, t = /* @__PURE__ */ new WeakMap()) {
    if (!e || typeof e == "string") return e;
    if (e instanceof Error && "toJSON" in e && typeof e.toJSON == "function") {
      const n = e.toJSON();
      return n && n !== e && typeof n == "object" && (typeof e.message == "string" && Dt(() => n.message ?? (n.message = yi(e.message))), typeof e.stack == "string" && Dt(() => n.stack ?? (n.stack = e.stack)), typeof e.name == "string" && Dt(() => n.name ?? (n.name = e.name)), e.cause != null && Dt(() => n.cause ?? (n.cause = nt(e.cause, t)))), nt(n, t);
    }
    if (typeof e == "function") return `Function<${e.name || "anonymous"}>`;
    if (typeof e == "symbol") return e.toString();
    if (typeof e != "object") return e;
    if (typeof Buffer < "u" && e instanceof Buffer) return `<Buffer(${e.length}) ...>`;
    if (typeof Uint8Array < "u" && e instanceof Uint8Array) return `<Uint8Array(${e.length}) ...>`;
    if (dp(e)) return nt(e.toJSON(), t);
    if (e instanceof Promise || e.constructor && e.constructor.prototype === "AsyncFunction") return "Promise";
    if (typeof Element < "u" && e instanceof Element) return e.tagName;
    if (typeof e.toJSON == "function") return nt(e.toJSON(), t);
    if (t.has(e)) return t.get(e);
    if (Array.isArray(e)) {
      const n = new Array(e.length);
      return t.set(e, n), e.forEach((r, o) => {
        try {
          n[o] = nt(r, t);
        } catch (s) {
          n[o] = gi(s);
        }
      }), n;
    } else {
      const n = /* @__PURE__ */ Object.create(null);
      t.set(e, n);
      let r = e;
      for (; r && r !== mp; ) Object.getOwnPropertyNames(r).forEach((o) => {
        if (!(o in n)) try {
          n[o] = nt(e[o], t);
        } catch (s) {
          delete n[o], n[o] = gi(s);
        }
      }), r = Object.getPrototypeOf(r);
      return e instanceof Error && Dt(() => e.message = yi(e.message)), n;
    }
  }
  function Dt(e) {
    try {
      return e();
    } catch {
    }
  }
  function yi(e) {
    return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
  }
  function Ma(e, t, n = /* @__PURE__ */ new WeakSet()) {
    if (!e || typeof e != "object") return {
      message: String(e)
    };
    const r = e;
    (r.showDiff || r.showDiff === void 0 && r.expected !== void 0 && r.actual !== void 0) && (r.diff = $a(r.actual, r.expected, {
      ...t,
      ...r.diffOptions
    })), "expected" in r && typeof r.expected != "string" && (r.expected = ve(r.expected, 10)), "actual" in r && typeof r.actual != "string" && (r.actual = ve(r.actual, 10));
    try {
      !n.has(r) && typeof r.cause == "object" && (n.add(r), r.cause = Ma(r.cause, t, n));
    } catch {
    }
    try {
      return nt(r);
    } catch (o) {
      return nt(new Error(`Failed to fully serialize error: ${o == null ? void 0 : o.message}
Inner error message: ${r == null ? void 0 : r.message}`));
    }
  }
  var Co = Object.defineProperty, gp = (e, t, n) => t in e ? Co(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, v = (e, t) => Co(e, "name", {
    value: t,
    configurable: true
  }), No = (e, t) => {
    for (var n in t) Co(e, n, {
      get: t[n],
      enumerable: true
    });
  }, Aa = (e, t, n) => gp(e, typeof t != "symbol" ? t + "" : t, n), le = {};
  No(le, {
    addChainableMethod: () => Wo,
    addLengthGuard: () => tn,
    addMethod: () => Bo,
    addProperty: () => qo,
    checkError: () => Oe,
    compareByInspect: () => On,
    eql: () => ou,
    events: () => Vn,
    expectTypes: () => Fa,
    flag: () => q,
    getActual: () => Bn,
    getMessage: () => ko,
    getName: () => Wn,
    getOperator: () => Yo,
    getOwnEnumerableProperties: () => Go,
    getOwnEnumerablePropertySymbols: () => Ko,
    getPathInfo: () => Fo,
    hasProperty: () => zn,
    inspect: () => V,
    isNaN: () => xn,
    isNumeric: () => he,
    isProxyEnabled: () => en,
    isRegExp: () => Mn,
    objDisplay: () => ft,
    overwriteChainableMethod: () => Uo,
    overwriteMethod: () => Vo,
    overwriteProperty: () => zo,
    proxify: () => Nt,
    test: () => Io,
    transferFlags: () => ze,
    type: () => Q
  });
  var Oe = {};
  No(Oe, {
    compatibleConstructor: () => Ia,
    compatibleInstance: () => Na,
    compatibleMessage: () => Pa,
    getConstructorName: () => ka,
    getMessage: () => ja
  });
  function qn(e) {
    return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
  }
  v(qn, "isErrorInstance");
  function Ca(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  }
  v(Ca, "isRegExp");
  function Na(e, t) {
    return qn(t) && e === t;
  }
  v(Na, "compatibleInstance");
  function Ia(e, t) {
    return qn(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : false;
  }
  v(Ia, "compatibleConstructor");
  function Pa(e, t) {
    const n = typeof e == "string" ? e : e.message;
    return Ca(t) ? t.test(n) : typeof t == "string" ? n.indexOf(t) !== -1 : false;
  }
  v(Pa, "compatibleMessage");
  function ka(e) {
    let t = e;
    return qn(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
  }
  v(ka, "getConstructorName");
  function ja(e) {
    let t = "";
    return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
  }
  v(ja, "getMessage");
  function q(e, t, n) {
    let r = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
    if (arguments.length === 3) r[t] = n;
    else return r[t];
  }
  v(q, "flag");
  function Io(e, t) {
    let n = q(e, "negate"), r = t[0];
    return n ? !r : r;
  }
  v(Io, "test");
  function Q(e) {
    if (typeof e > "u") return "undefined";
    if (e === null) return "null";
    const t = e[Symbol.toStringTag];
    return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
  }
  v(Q, "type");
  var yp = "captureStackTrace" in Error, Ra = class Da extends Error {
    constructor(t = "Unspecified AssertionError", n, r) {
      super(t), Aa(this, "message"), this.message = t, yp && Error.captureStackTrace(this, r || Da);
      for (const o in n) o in this || (this[o] = n[o]);
    }
    get name() {
      return "AssertionError";
    }
    get ok() {
      return false;
    }
    toJSON(t) {
      return {
        ...this,
        name: this.name,
        message: this.message,
        ok: false,
        stack: t !== false ? this.stack : void 0
      };
    }
  };
  v(Ra, "AssertionError");
  var K = Ra;
  function Fa(e, t) {
    let n = q(e, "message"), r = q(e, "ssfi");
    n = n ? n + ": " : "", e = q(e, "object"), t = t.map(function(i) {
      return i.toLowerCase();
    }), t.sort();
    let o = t.map(function(i, c) {
      let u = ~[
        "a",
        "e",
        "i",
        "o",
        "u"
      ].indexOf(i.charAt(0)) ? "an" : "a";
      return (t.length > 1 && c === t.length - 1 ? "or " : "") + u + " " + i;
    }).join(", "), s = Q(e).toLowerCase();
    if (!t.some(function(i) {
      return s === i;
    })) throw new K(n + "object tested must be " + o + ", but " + s + " given", void 0, r);
  }
  v(Fa, "expectTypes");
  function Bn(e, t) {
    return t.length > 4 ? t[4] : e._obj;
  }
  v(Bn, "getActual");
  var bi = {
    bold: [
      "1",
      "22"
    ],
    dim: [
      "2",
      "22"
    ],
    italic: [
      "3",
      "23"
    ],
    underline: [
      "4",
      "24"
    ],
    inverse: [
      "7",
      "27"
    ],
    hidden: [
      "8",
      "28"
    ],
    strike: [
      "9",
      "29"
    ],
    black: [
      "30",
      "39"
    ],
    red: [
      "31",
      "39"
    ],
    green: [
      "32",
      "39"
    ],
    yellow: [
      "33",
      "39"
    ],
    blue: [
      "34",
      "39"
    ],
    magenta: [
      "35",
      "39"
    ],
    cyan: [
      "36",
      "39"
    ],
    white: [
      "37",
      "39"
    ],
    brightblack: [
      "30;1",
      "39"
    ],
    brightred: [
      "31;1",
      "39"
    ],
    brightgreen: [
      "32;1",
      "39"
    ],
    brightyellow: [
      "33;1",
      "39"
    ],
    brightblue: [
      "34;1",
      "39"
    ],
    brightmagenta: [
      "35;1",
      "39"
    ],
    brightcyan: [
      "36;1",
      "39"
    ],
    brightwhite: [
      "37;1",
      "39"
    ],
    grey: [
      "90",
      "39"
    ]
  }, bp = {
    special: "cyan",
    number: "yellow",
    bigint: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    symbol: "green",
    date: "magenta",
    regexp: "red"
  }, Mt = "\u2026";
  function La(e, t) {
    const n = bi[bp[t]] || bi[t] || "";
    return n ? `\x1B[${n[0]}m${String(e)}\x1B[${n[1]}m` : String(e);
  }
  v(La, "colorise");
  function qa({ showHidden: e = false, depth: t = 2, colors: n = false, customInspect: r = true, showProxy: o = false, maxArrayLength: s = 1 / 0, breakLength: i = 1 / 0, seen: c = [], truncate: u = 1 / 0, stylize: a = String } = {}, l) {
    const f = {
      showHidden: !!e,
      depth: Number(t),
      colors: !!n,
      customInspect: !!r,
      showProxy: !!o,
      maxArrayLength: Number(s),
      breakLength: Number(i),
      truncate: Number(u),
      seen: c,
      inspect: l,
      stylize: a
    };
    return f.colors && (f.stylize = La), f;
  }
  v(qa, "normaliseOptions");
  function Ba(e) {
    return e >= "\uD800" && e <= "\uDBFF";
  }
  v(Ba, "isHighSurrogate");
  function Ze(e, t, n = Mt) {
    e = String(e);
    const r = n.length, o = e.length;
    if (r > t && o > r) return n;
    if (o > t && o > r) {
      let s = t - r;
      return s > 0 && Ba(e[s - 1]) && (s = s - 1), `${e.slice(0, s)}${n}`;
    }
    return e;
  }
  v(Ze, "truncate");
  function Ie(e, t, n, r = ", ") {
    n = n || t.inspect;
    const o = e.length;
    if (o === 0) return "";
    const s = t.truncate;
    let i = "", c = "", u = "";
    for (let a = 0; a < o; a += 1) {
      const l = a + 1 === e.length, f = a + 2 === e.length;
      u = `${Mt}(${e.length - a})`;
      const h = e[a];
      t.truncate = s - i.length - (l ? 0 : r.length);
      const p = c || n(h, t) + (l ? "" : r), d = i.length + p.length, g = d + u.length;
      if (l && d > s && i.length + u.length <= s || !l && !f && g > s || (c = l ? "" : n(e[a + 1], t) + (f ? "" : r), !l && f && g > s && d + c.length > s)) break;
      if (i += p, !l && !f && d + c.length >= s) {
        u = `${Mt}(${e.length - a - 1})`;
        break;
      }
      u = "";
    }
    return `${i}${u}`;
  }
  v(Ie, "inspectList");
  function za(e) {
    return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
  }
  v(za, "quoteComplexKey");
  function At([e, t], n) {
    return n.truncate -= 2, typeof e == "string" ? e = za(e) : typeof e != "number" && (e = `[${n.inspect(e, n)}]`), n.truncate -= e.length, t = n.inspect(t, n), `${e}: ${t}`;
  }
  v(At, "inspectProperty");
  function Va(e, t) {
    const n = Object.keys(e).slice(e.length);
    if (!e.length && !n.length) return "[]";
    t.truncate -= 4;
    const r = Ie(e, t);
    t.truncate -= r.length;
    let o = "";
    return n.length && (o = Ie(n.map((s) => [
      s,
      e[s]
    ]), t, At)), `[ ${r}${o ? `, ${o}` : ""} ]`;
  }
  v(Va, "inspectArray");
  var wp = v((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
  function We(e, t) {
    const n = wp(e);
    t.truncate -= n.length + 4;
    const r = Object.keys(e).slice(e.length);
    if (!e.length && !r.length) return `${n}[]`;
    let o = "";
    for (let i = 0; i < e.length; i++) {
      const c = `${t.stylize(Ze(e[i], t.truncate), "number")}${i === e.length - 1 ? "" : ", "}`;
      if (t.truncate -= c.length, e[i] !== e.length && t.truncate <= 3) {
        o += `${Mt}(${e.length - e[i] + 1})`;
        break;
      }
      o += c;
    }
    let s = "";
    return r.length && (s = Ie(r.map((i) => [
      i,
      e[i]
    ]), t, At)), `${n}[ ${o}${s ? `, ${s}` : ""} ]`;
  }
  v(We, "inspectTypedArray");
  function Wa(e, t) {
    const n = e.toJSON();
    if (n === null) return "Invalid Date";
    const r = n.split("T"), o = r[0];
    return t.stylize(`${o}T${Ze(r[1], t.truncate - o.length - 1)}`, "date");
  }
  v(Wa, "inspectDate");
  function Zr(e, t) {
    const n = e[Symbol.toStringTag] || "Function", r = e.name;
    return r ? t.stylize(`[${n} ${Ze(r, t.truncate - 11)}]`, "special") : t.stylize(`[${n}]`, "special");
  }
  v(Zr, "inspectFunction");
  function Ua([e, t], n) {
    return n.truncate -= 4, e = n.inspect(e, n), n.truncate -= e.length, t = n.inspect(t, n), `${e} => ${t}`;
  }
  v(Ua, "inspectMapEntry");
  function Ka(e) {
    const t = [];
    return e.forEach((n, r) => {
      t.push([
        r,
        n
      ]);
    }), t;
  }
  v(Ka, "mapToEntries");
  function Ga(e, t) {
    return e.size === 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${Ie(Ka(e), t, Ua)} }`);
  }
  v(Ga, "inspectMap");
  var Tp = Number.isNaN || ((e) => e !== e);
  function Qr(e, t) {
    return Tp(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(Ze(String(e), t.truncate), "number");
  }
  v(Qr, "inspectNumber");
  function eo(e, t) {
    let n = Ze(e.toString(), t.truncate - 1);
    return n !== Mt && (n += "n"), t.stylize(n, "bigint");
  }
  v(eo, "inspectBigInt");
  function Ya(e, t) {
    const n = e.toString().split("/")[2], r = t.truncate - (2 + n.length), o = e.source;
    return t.stylize(`/${Ze(o, r)}/${n}`, "regexp");
  }
  v(Ya, "inspectRegExp");
  function Ja(e) {
    const t = [];
    return e.forEach((n) => {
      t.push(n);
    }), t;
  }
  v(Ja, "arrayFromSet");
  function Xa(e, t) {
    return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${Ie(Ja(e), t)} }`);
  }
  v(Xa, "inspectSet");
  var wi = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), Ep = {
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    "'": "\\'",
    "\\": "\\\\"
  }, Sp = 16;
  function Ha(e) {
    return Ep[e] || `\\u${`0000${e.charCodeAt(0).toString(Sp)}`.slice(-4)}`;
  }
  v(Ha, "escape");
  function to(e, t) {
    return wi.test(e) && (e = e.replace(wi, Ha)), t.stylize(`'${Ze(e, t.truncate - 2)}'`, "string");
  }
  v(to, "inspectString");
  function no(e) {
    return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
  }
  v(no, "inspectSymbol");
  var vp = v(() => "Promise{\u2026}", "getPromiseValue"), $p = vp;
  function Vt(e, t) {
    const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
    if (n.length === 0 && r.length === 0) return "{}";
    if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e)) return "[Circular]";
    t.seen.push(e);
    const o = Ie(n.map((c) => [
      c,
      e[c]
    ]), t, At), s = Ie(r.map((c) => [
      c,
      e[c]
    ]), t, At);
    t.seen.pop();
    let i = "";
    return o && s && (i = ", "), `{ ${o}${i}${s} }`;
  }
  v(Vt, "inspectObject");
  var hr = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : false;
  function Za(e, t) {
    let n = "";
    return hr && hr in e && (n = e[hr]), n = n || e.constructor.name, (!n || n === "_class") && (n = "<Anonymous Class>"), t.truncate -= n.length, `${n}${Vt(e, t)}`;
  }
  v(Za, "inspectClass");
  function Qa(e, t) {
    return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${Ie(e, t)} ]`);
  }
  v(Qa, "inspectArguments");
  var _p = [
    "stack",
    "line",
    "column",
    "name",
    "message",
    "fileName",
    "lineNumber",
    "columnNumber",
    "number",
    "description",
    "cause"
  ];
  function eu(e, t) {
    const n = Object.getOwnPropertyNames(e).filter((i) => _p.indexOf(i) === -1), r = e.name;
    t.truncate -= r.length;
    let o = "";
    if (typeof e.message == "string" ? o = Ze(e.message, t.truncate) : n.unshift("message"), o = o ? `: ${o}` : "", t.truncate -= o.length + 5, t.seen = t.seen || [], t.seen.includes(e)) return "[Circular]";
    t.seen.push(e);
    const s = Ie(n.map((i) => [
      i,
      e[i]
    ]), t, At);
    return `${r}${o}${s ? ` { ${s} }` : ""}`;
  }
  v(eu, "inspectObject");
  function tu([e, t], n) {
    return n.truncate -= 3, t ? `${n.stylize(String(e), "yellow")}=${n.stylize(`"${t}"`, "string")}` : `${n.stylize(String(e), "yellow")}`;
  }
  v(tu, "inspectAttribute");
  function $n(e, t) {
    return Ie(e, t, nu, `
`);
  }
  v($n, "inspectNodeCollection");
  function nu(e, t) {
    switch (e.nodeType) {
      case 1:
        return Po(e, t);
      case 3:
        return t.inspect(e.data, t);
      default:
        return t.inspect(e, t);
    }
  }
  v(nu, "inspectNode");
  function Po(e, t) {
    const n = e.getAttributeNames(), r = e.tagName.toLowerCase(), o = t.stylize(`<${r}`, "special"), s = t.stylize(">", "special"), i = t.stylize(`</${r}>`, "special");
    t.truncate -= r.length * 2 + 5;
    let c = "";
    n.length > 0 && (c += " ", c += Ie(n.map((l) => [
      l,
      e.getAttribute(l)
    ]), t, tu, " ")), t.truncate -= c.length;
    const u = t.truncate;
    let a = $n(e.children, t);
    return a && a.length > u && (a = `${Mt}(${e.children.length})`), `${o}${c}${s}${a}${i}`;
  }
  v(Po, "inspectHTML");
  var Op = typeof Symbol == "function" && typeof Symbol.for == "function", pr = Op ? /* @__PURE__ */ Symbol.for("chai/inspect") : "@@chai/inspect", dr = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom"), Ti = /* @__PURE__ */ new WeakMap(), Ei = {}, Si = {
    undefined: v((e, t) => t.stylize("undefined", "undefined"), "undefined"),
    null: v((e, t) => t.stylize("null", "null"), "null"),
    boolean: v((e, t) => t.stylize(String(e), "boolean"), "boolean"),
    Boolean: v((e, t) => t.stylize(String(e), "boolean"), "Boolean"),
    number: Qr,
    Number: Qr,
    bigint: eo,
    BigInt: eo,
    string: to,
    String: to,
    function: Zr,
    Function: Zr,
    symbol: no,
    Symbol: no,
    Array: Va,
    Date: Wa,
    Map: Ga,
    Set: Xa,
    RegExp: Ya,
    Promise: $p,
    WeakSet: v((e, t) => t.stylize("WeakSet{\u2026}", "special"), "WeakSet"),
    WeakMap: v((e, t) => t.stylize("WeakMap{\u2026}", "special"), "WeakMap"),
    Arguments: Qa,
    Int8Array: We,
    Uint8Array: We,
    Uint8ClampedArray: We,
    Int16Array: We,
    Uint16Array: We,
    Int32Array: We,
    Uint32Array: We,
    Float32Array: We,
    Float64Array: We,
    Generator: v(() => "", "Generator"),
    DataView: v(() => "", "DataView"),
    ArrayBuffer: v(() => "", "ArrayBuffer"),
    Error: eu,
    HTMLCollection: $n,
    NodeList: $n
  }, xp = v((e, t, n, r) => pr in e && typeof e[pr] == "function" ? e[pr](t) : dr in e && typeof e[dr] == "function" ? e[dr](t.depth, t, r) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && Ti.has(e.constructor) ? Ti.get(e.constructor)(e, t) : Ei[n] ? Ei[n](e, t) : "", "inspectCustom"), Mp = Object.prototype.toString;
  function Wt(e, t = {}) {
    const n = qa(t, Wt), { customInspect: r } = n;
    let o = e === null ? "null" : typeof e;
    if (o === "object" && (o = Mp.call(e).slice(8, -1)), o in Si) return Si[o](e, n);
    if (r && e) {
      const i = xp(e, n, o, Wt);
      if (i) return typeof i == "string" ? i : Wt(i, n);
    }
    const s = e ? Object.getPrototypeOf(e) : false;
    return s === Object.prototype || s === null ? Vt(e, n) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? Po(e, n) : "constructor" in e ? e.constructor !== Object ? Za(e, n) : Vt(e, n) : e === Object(e) ? Vt(e, n) : n.stylize(String(e), o);
  }
  v(Wt, "inspect");
  var be = {
    includeStack: false,
    showDiff: true,
    truncateThreshold: 40,
    useProxy: true,
    proxyExcludedKeys: [
      "then",
      "catch",
      "inspect",
      "toJSON"
    ],
    deepEqual: null
  };
  function V(e, t, n, r) {
    let o = {
      colors: r,
      depth: typeof n > "u" ? 2 : n,
      showHidden: t,
      truncate: be.truncateThreshold ? be.truncateThreshold : 1 / 0
    };
    return Wt(e, o);
  }
  v(V, "inspect");
  function ft(e) {
    let t = V(e), n = Object.prototype.toString.call(e);
    if (be.truncateThreshold && t.length >= be.truncateThreshold) {
      if (n === "[object Function]") return !e.name || e.name === "" ? "[Function]" : "[Function: " + e.name + "]";
      if (n === "[object Array]") return "[ Array(" + e.length + ") ]";
      if (n === "[object Object]") {
        let r = Object.keys(e);
        return "{ Object (" + (r.length > 2 ? r.splice(0, 2).join(", ") + ", ..." : r.join(", ")) + ") }";
      } else return t;
    } else return t;
  }
  v(ft, "objDisplay");
  function ko(e, t) {
    let n = q(e, "negate"), r = q(e, "object"), o = t[3], s = Bn(e, t), i = n ? t[2] : t[1], c = q(e, "message");
    return typeof i == "function" && (i = i()), i = i || "", i = i.replace(/#\{this\}/g, function() {
      return ft(r);
    }).replace(/#\{act\}/g, function() {
      return ft(s);
    }).replace(/#\{exp\}/g, function() {
      return ft(o);
    }), c ? c + ": " + i : i;
  }
  v(ko, "getMessage");
  function ze(e, t, n) {
    let r = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
    t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), n = arguments.length === 3 ? n : true;
    for (let o in r) (n || o !== "object" && o !== "ssfi" && o !== "lockSsfi" && o != "message") && (t.__flags[o] = r[o]);
  }
  v(ze, "transferFlags");
  function ro(e) {
    if (typeof e > "u") return "undefined";
    if (e === null) return "null";
    const t = e[Symbol.toStringTag];
    return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
  }
  v(ro, "type");
  function jo() {
    this._key = "chai/deep-eql__" + Math.random() + Date.now();
  }
  v(jo, "FakeMap");
  jo.prototype = {
    get: v(function(t) {
      return t[this._key];
    }, "get"),
    set: v(function(t, n) {
      Object.isExtensible(t) && Object.defineProperty(t, this._key, {
        value: n,
        configurable: true
      });
    }, "set")
  };
  var ru = typeof WeakMap == "function" ? WeakMap : jo;
  function oo(e, t, n) {
    if (!n || pt(e) || pt(t)) return null;
    var r = n.get(e);
    if (r) {
      var o = r.get(t);
      if (typeof o == "boolean") return o;
    }
    return null;
  }
  v(oo, "memoizeCompare");
  function zt(e, t, n, r) {
    if (!(!n || pt(e) || pt(t))) {
      var o = n.get(e);
      o ? o.set(t, r) : (o = new ru(), o.set(t, r), n.set(e, o));
    }
  }
  v(zt, "memoizeSet");
  var ou = Qt;
  function Qt(e, t, n) {
    if (n && n.comparator) return so(e, t, n);
    var r = Ro(e, t);
    return r !== null ? r : so(e, t, n);
  }
  v(Qt, "deepEqual");
  function Ro(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t ? true : pt(e) || pt(t) ? false : null;
  }
  v(Ro, "simpleEqual");
  function so(e, t, n) {
    n = n || {}, n.memoize = n.memoize === false ? false : n.memoize || new ru();
    var r = n && n.comparator, o = oo(e, t, n.memoize);
    if (o !== null) return o;
    var s = oo(t, e, n.memoize);
    if (s !== null) return s;
    if (r) {
      var i = r(e, t);
      if (i === false || i === true) return zt(e, t, n.memoize, i), i;
      var c = Ro(e, t);
      if (c !== null) return c;
    }
    var u = ro(e);
    if (u !== ro(t)) return zt(e, t, n.memoize, false), false;
    zt(e, t, n.memoize, true);
    var a = su(e, t, u, n);
    return zt(e, t, n.memoize, a), a;
  }
  v(so, "extensiveDeepEqual");
  function su(e, t, n, r) {
    switch (n) {
      case "String":
      case "Number":
      case "Boolean":
      case "Date":
        return Qt(e.valueOf(), t.valueOf());
      case "Promise":
      case "Symbol":
      case "function":
      case "WeakMap":
      case "WeakSet":
        return e === t;
      case "Error":
        return Do(e, t, [
          "name",
          "message",
          "code"
        ], r);
      case "Arguments":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "Array":
        return rt(e, t, r);
      case "RegExp":
        return iu(e, t);
      case "Generator":
        return cu(e, t, r);
      case "DataView":
        return rt(new Uint8Array(e.buffer), new Uint8Array(t.buffer), r);
      case "ArrayBuffer":
        return rt(new Uint8Array(e), new Uint8Array(t), r);
      case "Set":
        return io(e, t, r);
      case "Map":
        return io(e, t, r);
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.Instant":
      case "Temporal.ZonedDateTime":
      case "Temporal.PlainYearMonth":
      case "Temporal.PlainMonthDay":
        return e.equals(t);
      case "Temporal.Duration":
        return e.total("nanoseconds") === t.total("nanoseconds");
      case "Temporal.TimeZone":
      case "Temporal.Calendar":
        return e.toString() === t.toString();
      default:
        return uu(e, t, r);
    }
  }
  v(su, "extensiveDeepEqualByType");
  function iu(e, t) {
    return e.toString() === t.toString();
  }
  v(iu, "regexpEqual");
  function io(e, t, n) {
    try {
      if (e.size !== t.size) return false;
      if (e.size === 0) return true;
    } catch {
      return false;
    }
    var r = [], o = [];
    return e.forEach(v(function(i, c) {
      r.push([
        i,
        c
      ]);
    }, "gatherEntries")), t.forEach(v(function(i, c) {
      o.push([
        i,
        c
      ]);
    }, "gatherEntries")), rt(r.sort(), o.sort(), n);
  }
  v(io, "entriesEqual");
  function rt(e, t, n) {
    var r = e.length;
    if (r !== t.length) return false;
    if (r === 0) return true;
    for (var o = -1; ++o < r; ) if (Qt(e[o], t[o], n) === false) return false;
    return true;
  }
  v(rt, "iterableEqual");
  function cu(e, t, n) {
    return rt(_n(e), _n(t), n);
  }
  v(cu, "generatorEqual");
  function au(e) {
    return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
  }
  v(au, "hasIteratorFunction");
  function co(e) {
    if (au(e)) try {
      return _n(e[Symbol.iterator]());
    } catch {
      return [];
    }
    return [];
  }
  v(co, "getIteratorEntries");
  function _n(e) {
    for (var t = e.next(), n = [
      t.value
    ]; t.done === false; ) t = e.next(), n.push(t.value);
    return n;
  }
  v(_n, "getGeneratorEntries");
  function ao(e) {
    var t = [];
    for (var n in e) t.push(n);
    return t;
  }
  v(ao, "getEnumerableKeys");
  function uo(e) {
    for (var t = [], n = Object.getOwnPropertySymbols(e), r = 0; r < n.length; r += 1) {
      var o = n[r];
      Object.getOwnPropertyDescriptor(e, o).enumerable && t.push(o);
    }
    return t;
  }
  v(uo, "getEnumerableSymbols");
  function Do(e, t, n, r) {
    var o = n.length;
    if (o === 0) return true;
    for (var s = 0; s < o; s += 1) if (Qt(e[n[s]], t[n[s]], r) === false) return false;
    return true;
  }
  v(Do, "keysEqual");
  function uu(e, t, n) {
    var r = ao(e), o = ao(t), s = uo(e), i = uo(t);
    if (r = r.concat(s), o = o.concat(i), r.length && r.length === o.length) return rt(lo(r).sort(), lo(o).sort()) === false ? false : Do(e, t, r, n);
    var c = co(e), u = co(t);
    return c.length && c.length === u.length ? (c.sort(), u.sort(), rt(c, u, n)) : r.length === 0 && c.length === 0 && o.length === 0 && u.length === 0;
  }
  v(uu, "objectEqual");
  function pt(e) {
    return e === null || typeof e != "object";
  }
  v(pt, "isPrimitive");
  function lo(e) {
    return e.map(v(function(n) {
      return typeof n == "symbol" ? n.toString() : n;
    }, "mapSymbol"));
  }
  v(lo, "mapSymbols");
  function zn(e, t) {
    return typeof e > "u" || e === null ? false : t in Object(e);
  }
  v(zn, "hasProperty");
  function lu(e) {
    return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((r) => {
      if (r === "constructor" || r === "__proto__" || r === "prototype") return {};
      const s = /^\[(\d+)\]$/.exec(r);
      let i = null;
      return s ? i = {
        i: parseFloat(s[1])
      } : i = {
        p: r.replace(/\\([.[\]])/g, "$1")
      }, i;
    });
  }
  v(lu, "parsePath");
  function fo(e, t, n) {
    let r = e, o = null;
    n = typeof n > "u" ? t.length : n;
    for (let s = 0; s < n; s++) {
      const i = t[s];
      r && (typeof i.p > "u" ? r = r[i.i] : r = r[i.p], s === n - 1 && (o = r));
    }
    return o;
  }
  v(fo, "internalGetPathValue");
  function Fo(e, t) {
    const n = lu(t), r = n[n.length - 1], o = {
      parent: n.length > 1 ? fo(e, n, n.length - 1) : e,
      name: r.p || r.i,
      value: fo(e, n)
    };
    return o.exists = zn(o.parent, o.name), o;
  }
  v(Fo, "getPathInfo");
  var fu = class hu {
    constructor(t, n, r, o) {
      return Aa(this, "__flags", {}), q(this, "ssfi", r || hu), q(this, "lockSsfi", o), q(this, "object", t), q(this, "message", n), q(this, "eql", be.deepEqual || ou), Nt(this);
    }
    static get includeStack() {
      return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), be.includeStack;
    }
    static set includeStack(t) {
      console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), be.includeStack = t;
    }
    static get showDiff() {
      return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), be.showDiff;
    }
    static set showDiff(t) {
      console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), be.showDiff = t;
    }
    static addProperty(t, n) {
      qo(this.prototype, t, n);
    }
    static addMethod(t, n) {
      Bo(this.prototype, t, n);
    }
    static addChainableMethod(t, n, r) {
      Wo(this.prototype, t, n, r);
    }
    static overwriteProperty(t, n) {
      zo(this.prototype, t, n);
    }
    static overwriteMethod(t, n) {
      Vo(this.prototype, t, n);
    }
    static overwriteChainableMethod(t, n, r) {
      Uo(this.prototype, t, n, r);
    }
    assert(t, n, r, o, s, i) {
      const c = Io(this, arguments);
      if (i !== false && (i = true), o === void 0 && s === void 0 && (i = false), be.showDiff !== true && (i = false), !c) {
        n = ko(this, arguments);
        const a = {
          actual: Bn(this, arguments),
          expected: o,
          showDiff: i
        }, l = Yo(this, arguments);
        throw l && (a.operator = l), new K(n, a, be.includeStack ? this.assert : q(this, "ssfi"));
      }
    }
    get _obj() {
      return q(this, "object");
    }
    set _obj(t) {
      q(this, "object", t);
    }
  };
  v(fu, "Assertion");
  var y = fu, Vn = new EventTarget(), pu = class extends Event {
    constructor(t, n, r) {
      super(t), this.name = String(n), this.fn = r;
    }
  };
  v(pu, "PluginEvent");
  var Lo = pu;
  function en() {
    return be.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
  }
  v(en, "isProxyEnabled");
  function qo(e, t, n) {
    n = n === void 0 ? function() {
    } : n, Object.defineProperty(e, t, {
      get: v(function r() {
        !en() && !q(this, "lockSsfi") && q(this, "ssfi", r);
        let o = n.call(this);
        if (o !== void 0) return o;
        let s = new y();
        return ze(this, s), s;
      }, "propertyGetter"),
      configurable: true
    }), Vn.dispatchEvent(new Lo("addProperty", t, n));
  }
  v(qo, "addProperty");
  var Ap = Object.getOwnPropertyDescriptor(function() {
  }, "length");
  function tn(e, t, n) {
    return Ap.configurable && Object.defineProperty(e, "length", {
      get: v(function() {
        throw Error(n ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".');
      }, "get")
    }), e;
  }
  v(tn, "addLengthGuard");
  function du(e) {
    let t = Object.getOwnPropertyNames(e);
    function n(o) {
      t.indexOf(o) === -1 && t.push(o);
    }
    v(n, "addProperty");
    let r = Object.getPrototypeOf(e);
    for (; r !== null; ) Object.getOwnPropertyNames(r).forEach(n), r = Object.getPrototypeOf(r);
    return t;
  }
  v(du, "getProperties");
  var vi = [
    "__flags",
    "__methods",
    "_obj",
    "assert"
  ];
  function Nt(e, t) {
    return en() ? new Proxy(e, {
      get: v(function n(r, o) {
        if (typeof o == "string" && be.proxyExcludedKeys.indexOf(o) === -1 && !Reflect.has(r, o)) {
          if (t) throw Error("Invalid Chai property: " + t + "." + o + '. See docs for proper usage of "' + t + '".');
          let s = null, i = 4;
          throw du(r).forEach(function(c) {
            if (!Object.prototype.hasOwnProperty(c) && vi.indexOf(c) === -1) {
              let u = mu(o, c, i);
              u < i && (s = c, i = u);
            }
          }), Error(s !== null ? "Invalid Chai property: " + o + '. Did you mean "' + s + '"?' : "Invalid Chai property: " + o);
        }
        return vi.indexOf(o) === -1 && !q(r, "lockSsfi") && q(r, "ssfi", n), Reflect.get(r, o);
      }, "proxyGetter")
    }) : e;
  }
  v(Nt, "proxify");
  function mu(e, t, n) {
    if (Math.abs(e.length - t.length) >= n) return n;
    let r = [];
    for (let o = 0; o <= e.length; o++) r[o] = Array(t.length + 1).fill(0), r[o][0] = o;
    for (let o = 0; o < t.length; o++) r[0][o] = o;
    for (let o = 1; o <= e.length; o++) {
      let s = e.charCodeAt(o - 1);
      for (let i = 1; i <= t.length; i++) {
        if (Math.abs(o - i) >= n) {
          r[o][i] = n;
          continue;
        }
        r[o][i] = Math.min(r[o - 1][i] + 1, r[o][i - 1] + 1, r[o - 1][i - 1] + (s === t.charCodeAt(i - 1) ? 0 : 1));
      }
    }
    return r[e.length][t.length];
  }
  v(mu, "stringDistanceCapped");
  function Bo(e, t, n) {
    let r = v(function() {
      q(this, "lockSsfi") || q(this, "ssfi", r);
      let o = n.apply(this, arguments);
      if (o !== void 0) return o;
      let s = new y();
      return ze(this, s), s;
    }, "methodWrapper");
    tn(r, t, false), e[t] = Nt(r, t), Vn.dispatchEvent(new Lo("addMethod", t, n));
  }
  v(Bo, "addMethod");
  function zo(e, t, n) {
    let r = Object.getOwnPropertyDescriptor(e, t), o = v(function() {
    }, "_super");
    r && typeof r.get == "function" && (o = r.get), Object.defineProperty(e, t, {
      get: v(function s() {
        !en() && !q(this, "lockSsfi") && q(this, "ssfi", s);
        let i = q(this, "lockSsfi");
        q(this, "lockSsfi", true);
        let c = n(o).call(this);
        if (q(this, "lockSsfi", i), c !== void 0) return c;
        let u = new y();
        return ze(this, u), u;
      }, "overwritingPropertyGetter"),
      configurable: true
    });
  }
  v(zo, "overwriteProperty");
  function Vo(e, t, n) {
    let r = e[t], o = v(function() {
      throw new Error(t + " is not a function");
    }, "_super");
    r && typeof r == "function" && (o = r);
    let s = v(function() {
      q(this, "lockSsfi") || q(this, "ssfi", s);
      let i = q(this, "lockSsfi");
      q(this, "lockSsfi", true);
      let c = n(o).apply(this, arguments);
      if (q(this, "lockSsfi", i), c !== void 0) return c;
      let u = new y();
      return ze(this, u), u;
    }, "overwritingMethodWrapper");
    tn(s, t, false), e[t] = Nt(s, t);
  }
  v(Vo, "overwriteMethod");
  var Cp = typeof Object.setPrototypeOf == "function", $i = v(function() {
  }, "testFn"), Np = Object.getOwnPropertyNames($i).filter(function(e) {
    let t = Object.getOwnPropertyDescriptor($i, e);
    return typeof t != "object" ? true : !t.configurable;
  }), Ip = Function.prototype.call, Pp = Function.prototype.apply, gu = class extends Lo {
    constructor(t, n, r, o) {
      super(t, n, r), this.chainingBehavior = o;
    }
  };
  v(gu, "PluginAddChainableMethodEvent");
  var kp = gu;
  function Wo(e, t, n, r) {
    typeof r != "function" && (r = v(function() {
    }, "chainingBehavior"));
    let o = {
      method: n,
      chainingBehavior: r
    };
    e.__methods || (e.__methods = {}), e.__methods[t] = o, Object.defineProperty(e, t, {
      get: v(function() {
        o.chainingBehavior.call(this);
        let i = v(function() {
          q(this, "lockSsfi") || q(this, "ssfi", i);
          let c = o.method.apply(this, arguments);
          if (c !== void 0) return c;
          let u = new y();
          return ze(this, u), u;
        }, "chainableMethodWrapper");
        if (tn(i, t, true), Cp) {
          let c = Object.create(this);
          c.call = Ip, c.apply = Pp, Object.setPrototypeOf(i, c);
        } else Object.getOwnPropertyNames(e).forEach(function(u) {
          if (Np.indexOf(u) !== -1) return;
          let a = Object.getOwnPropertyDescriptor(e, u);
          Object.defineProperty(i, u, a);
        });
        return ze(this, i), Nt(i);
      }, "chainableMethodGetter"),
      configurable: true
    }), Vn.dispatchEvent(new kp("addChainableMethod", t, n, r));
  }
  v(Wo, "addChainableMethod");
  function Uo(e, t, n, r) {
    let o = e.__methods[t], s = o.chainingBehavior;
    o.chainingBehavior = v(function() {
      let u = r(s).call(this);
      if (u !== void 0) return u;
      let a = new y();
      return ze(this, a), a;
    }, "overwritingChainableMethodGetter");
    let i = o.method;
    o.method = v(function() {
      let u = n(i).apply(this, arguments);
      if (u !== void 0) return u;
      let a = new y();
      return ze(this, a), a;
    }, "overwritingChainableMethodWrapper");
  }
  v(Uo, "overwriteChainableMethod");
  function On(e, t) {
    return V(e) < V(t) ? -1 : 1;
  }
  v(On, "compareByInspect");
  function Ko(e) {
    return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    });
  }
  v(Ko, "getOwnEnumerablePropertySymbols");
  function Go(e) {
    return Object.keys(e).concat(Ko(e));
  }
  v(Go, "getOwnEnumerableProperties");
  var xn = Number.isNaN;
  function yu(e) {
    let t = Q(e);
    return [
      "Array",
      "Object",
      "Function"
    ].indexOf(t) !== -1;
  }
  v(yu, "isObjectType");
  function Yo(e, t) {
    let n = q(e, "operator"), r = q(e, "negate"), o = t[3], s = r ? t[2] : t[1];
    if (n) return n;
    if (typeof s == "function" && (s = s()), s = s || "", !s || /\shave\s/.test(s)) return;
    let i = yu(o);
    return /\snot\s/.test(s) ? i ? "notDeepStrictEqual" : "notStrictEqual" : i ? "deepStrictEqual" : "strictEqual";
  }
  v(Yo, "getOperator");
  function Wn(e) {
    return e.name;
  }
  v(Wn, "getName");
  function Mn(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  }
  v(Mn, "isRegExp");
  function he(e) {
    return [
      "Number",
      "BigInt"
    ].includes(Q(e));
  }
  v(he, "isNumeric");
  var { flag: E } = le;
  [
    "to",
    "be",
    "been",
    "is",
    "and",
    "has",
    "have",
    "with",
    "that",
    "which",
    "at",
    "of",
    "same",
    "but",
    "does",
    "still",
    "also"
  ].forEach(function(e) {
    y.addProperty(e);
  });
  y.addProperty("not", function() {
    E(this, "negate", true);
  });
  y.addProperty("deep", function() {
    E(this, "deep", true);
  });
  y.addProperty("nested", function() {
    E(this, "nested", true);
  });
  y.addProperty("own", function() {
    E(this, "own", true);
  });
  y.addProperty("ordered", function() {
    E(this, "ordered", true);
  });
  y.addProperty("any", function() {
    E(this, "any", true), E(this, "all", false);
  });
  y.addProperty("all", function() {
    E(this, "all", true), E(this, "any", false);
  });
  var _i = {
    function: [
      "function",
      "asyncfunction",
      "generatorfunction",
      "asyncgeneratorfunction"
    ],
    asyncfunction: [
      "asyncfunction",
      "asyncgeneratorfunction"
    ],
    generatorfunction: [
      "generatorfunction",
      "asyncgeneratorfunction"
    ],
    asyncgeneratorfunction: [
      "asyncgeneratorfunction"
    ]
  };
  function Jo(e, t) {
    t && E(this, "message", t), e = e.toLowerCase();
    let n = E(this, "object"), r = ~[
      "a",
      "e",
      "i",
      "o",
      "u"
    ].indexOf(e.charAt(0)) ? "an " : "a ";
    const o = Q(n).toLowerCase();
    _i.function.includes(e) ? this.assert(_i[e].includes(o), "expected #{this} to be " + r + e, "expected #{this} not to be " + r + e) : this.assert(e === o, "expected #{this} to be " + r + e, "expected #{this} not to be " + r + e);
  }
  v(Jo, "an");
  y.addChainableMethod("an", Jo);
  y.addChainableMethod("a", Jo);
  function bu(e, t) {
    return xn(e) && xn(t) || e === t;
  }
  v(bu, "SameValueZero");
  function nn() {
    E(this, "contains", true);
  }
  v(nn, "includeChainingBehavior");
  function rn(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = Q(n).toLowerCase(), o = E(this, "message"), s = E(this, "negate"), i = E(this, "ssfi"), c = E(this, "deep"), u = c ? "deep " : "", a = c ? E(this, "eql") : bu;
    o = o ? o + ": " : "";
    let l = false;
    switch (r) {
      case "string":
        l = n.indexOf(e) !== -1;
        break;
      case "weakset":
        if (c) throw new K(o + "unable to use .deep.include with WeakSet", void 0, i);
        l = n.has(e);
        break;
      case "map":
        n.forEach(function(f) {
          l = l || a(f, e);
        });
        break;
      case "set":
        c ? n.forEach(function(f) {
          l = l || a(f, e);
        }) : l = n.has(e);
        break;
      case "array":
        c ? l = n.some(function(f) {
          return a(f, e);
        }) : l = n.indexOf(e) !== -1;
        break;
      default: {
        if (e !== Object(e)) throw new K(o + "the given combination of arguments (" + r + " and " + Q(e).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + Q(e).toLowerCase(), void 0, i);
        let f = Object.keys(e), h = null, p = 0;
        if (f.forEach(function(d) {
          let g = new y(n);
          if (ze(this, g, true), E(g, "lockSsfi", true), !s || f.length === 1) {
            g.property(d, e[d]);
            return;
          }
          try {
            g.property(d, e[d]);
          } catch (w) {
            if (!Oe.compatibleConstructor(w, K)) throw w;
            h === null && (h = w), p++;
          }
        }, this), s && f.length > 1 && p === f.length) throw h;
        return;
      }
    }
    this.assert(l, "expected #{this} to " + u + "include " + V(e), "expected #{this} to not " + u + "include " + V(e));
  }
  v(rn, "include");
  y.addChainableMethod("include", rn, nn);
  y.addChainableMethod("contain", rn, nn);
  y.addChainableMethod("contains", rn, nn);
  y.addChainableMethod("includes", rn, nn);
  y.addProperty("ok", function() {
    this.assert(E(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy");
  });
  y.addProperty("true", function() {
    this.assert(E(this, "object") === true, "expected #{this} to be true", "expected #{this} to be false", !E(this, "negate"));
  });
  y.addProperty("numeric", function() {
    const e = E(this, "object");
    this.assert([
      "Number",
      "BigInt"
    ].includes(Q(e)), "expected #{this} to be numeric", "expected #{this} to not be numeric", !E(this, "negate"));
  });
  y.addProperty("callable", function() {
    const e = E(this, "object"), t = E(this, "ssfi"), n = E(this, "message"), r = n ? `${n}: ` : "", o = E(this, "negate"), s = o ? `${r}expected ${V(e)} not to be a callable function` : `${r}expected ${V(e)} to be a callable function`, i = [
      "Function",
      "AsyncFunction",
      "GeneratorFunction",
      "AsyncGeneratorFunction"
    ].includes(Q(e));
    if (i && o || !i && !o) throw new K(s, void 0, t);
  });
  y.addProperty("false", function() {
    this.assert(E(this, "object") === false, "expected #{this} to be false", "expected #{this} to be true", !!E(this, "negate"));
  });
  y.addProperty("null", function() {
    this.assert(E(this, "object") === null, "expected #{this} to be null", "expected #{this} not to be null");
  });
  y.addProperty("undefined", function() {
    this.assert(E(this, "object") === void 0, "expected #{this} to be undefined", "expected #{this} not to be undefined");
  });
  y.addProperty("NaN", function() {
    this.assert(xn(E(this, "object")), "expected #{this} to be NaN", "expected #{this} not to be NaN");
  });
  function Xo() {
    let e = E(this, "object");
    this.assert(e != null, "expected #{this} to exist", "expected #{this} to not exist");
  }
  v(Xo, "assertExist");
  y.addProperty("exist", Xo);
  y.addProperty("exists", Xo);
  y.addProperty("empty", function() {
    let e = E(this, "object"), t = E(this, "ssfi"), n = E(this, "message"), r;
    switch (n = n ? n + ": " : "", Q(e).toLowerCase()) {
      case "array":
      case "string":
        r = e.length;
        break;
      case "map":
      case "set":
        r = e.size;
        break;
      case "weakmap":
      case "weakset":
        throw new K(n + ".empty was passed a weak collection", void 0, t);
      case "function": {
        const o = n + ".empty was passed a function " + Wn(e);
        throw new K(o.trim(), void 0, t);
      }
      default:
        if (e !== Object(e)) throw new K(n + ".empty was passed non-string primitive " + V(e), void 0, t);
        r = Object.keys(e).length;
    }
    this.assert(r === 0, "expected #{this} to be empty", "expected #{this} not to be empty");
  });
  function Ho() {
    let e = E(this, "object"), t = Q(e);
    this.assert(t === "Arguments", "expected #{this} to be arguments but got " + t, "expected #{this} to not be arguments");
  }
  v(Ho, "checkArguments");
  y.addProperty("arguments", Ho);
  y.addProperty("Arguments", Ho);
  function Un(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object");
    if (E(this, "deep")) {
      let r = E(this, "lockSsfi");
      E(this, "lockSsfi", true), this.eql(e), E(this, "lockSsfi", r);
    } else this.assert(e === n, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", e, this._obj, true);
  }
  v(Un, "assertEqual");
  y.addMethod("equal", Un);
  y.addMethod("equals", Un);
  y.addMethod("eq", Un);
  function Zo(e, t) {
    t && E(this, "message", t);
    let n = E(this, "eql");
    this.assert(n(e, E(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", e, this._obj, true);
  }
  v(Zo, "assertEql");
  y.addMethod("eql", Zo);
  y.addMethod("eqls", Zo);
  function Kn(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = E(this, "doLength"), o = E(this, "message"), s = o ? o + ": " : "", i = E(this, "ssfi"), c = Q(n).toLowerCase(), u = Q(e).toLowerCase();
    if (r && c !== "map" && c !== "set" && new y(n, o, i, true).to.have.property("length"), !r && c === "date" && u !== "date") throw new K(s + "the argument to above must be a date", void 0, i);
    if (!he(e) && (r || he(n))) throw new K(s + "the argument to above must be a number", void 0, i);
    if (!r && c !== "date" && !he(n)) {
      let a = c === "string" ? "'" + n + "'" : n;
      throw new K(s + "expected " + a + " to be a number or a date", void 0, i);
    }
    if (r) {
      let a = "length", l;
      c === "map" || c === "set" ? (a = "size", l = n.size) : l = n.length, this.assert(l > e, "expected #{this} to have a " + a + " above #{exp} but got #{act}", "expected #{this} to not have a " + a + " above #{exp}", e, l);
    } else this.assert(n > e, "expected #{this} to be above #{exp}", "expected #{this} to be at most #{exp}", e);
  }
  v(Kn, "assertAbove");
  y.addMethod("above", Kn);
  y.addMethod("gt", Kn);
  y.addMethod("greaterThan", Kn);
  function Gn(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = E(this, "doLength"), o = E(this, "message"), s = o ? o + ": " : "", i = E(this, "ssfi"), c = Q(n).toLowerCase(), u = Q(e).toLowerCase(), a, l = true;
    if (r && c !== "map" && c !== "set" && new y(n, o, i, true).to.have.property("length"), !r && c === "date" && u !== "date") a = s + "the argument to least must be a date";
    else if (!he(e) && (r || he(n))) a = s + "the argument to least must be a number";
    else if (!r && c !== "date" && !he(n)) {
      let f = c === "string" ? "'" + n + "'" : n;
      a = s + "expected " + f + " to be a number or a date";
    } else l = false;
    if (l) throw new K(a, void 0, i);
    if (r) {
      let f = "length", h;
      c === "map" || c === "set" ? (f = "size", h = n.size) : h = n.length, this.assert(h >= e, "expected #{this} to have a " + f + " at least #{exp} but got #{act}", "expected #{this} to have a " + f + " below #{exp}", e, h);
    } else this.assert(n >= e, "expected #{this} to be at least #{exp}", "expected #{this} to be below #{exp}", e);
  }
  v(Gn, "assertLeast");
  y.addMethod("least", Gn);
  y.addMethod("gte", Gn);
  y.addMethod("greaterThanOrEqual", Gn);
  function Yn(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = E(this, "doLength"), o = E(this, "message"), s = o ? o + ": " : "", i = E(this, "ssfi"), c = Q(n).toLowerCase(), u = Q(e).toLowerCase(), a, l = true;
    if (r && c !== "map" && c !== "set" && new y(n, o, i, true).to.have.property("length"), !r && c === "date" && u !== "date") a = s + "the argument to below must be a date";
    else if (!he(e) && (r || he(n))) a = s + "the argument to below must be a number";
    else if (!r && c !== "date" && !he(n)) {
      let f = c === "string" ? "'" + n + "'" : n;
      a = s + "expected " + f + " to be a number or a date";
    } else l = false;
    if (l) throw new K(a, void 0, i);
    if (r) {
      let f = "length", h;
      c === "map" || c === "set" ? (f = "size", h = n.size) : h = n.length, this.assert(h < e, "expected #{this} to have a " + f + " below #{exp} but got #{act}", "expected #{this} to not have a " + f + " below #{exp}", e, h);
    } else this.assert(n < e, "expected #{this} to be below #{exp}", "expected #{this} to be at least #{exp}", e);
  }
  v(Yn, "assertBelow");
  y.addMethod("below", Yn);
  y.addMethod("lt", Yn);
  y.addMethod("lessThan", Yn);
  function Jn(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = E(this, "doLength"), o = E(this, "message"), s = o ? o + ": " : "", i = E(this, "ssfi"), c = Q(n).toLowerCase(), u = Q(e).toLowerCase(), a, l = true;
    if (r && c !== "map" && c !== "set" && new y(n, o, i, true).to.have.property("length"), !r && c === "date" && u !== "date") a = s + "the argument to most must be a date";
    else if (!he(e) && (r || he(n))) a = s + "the argument to most must be a number";
    else if (!r && c !== "date" && !he(n)) {
      let f = c === "string" ? "'" + n + "'" : n;
      a = s + "expected " + f + " to be a number or a date";
    } else l = false;
    if (l) throw new K(a, void 0, i);
    if (r) {
      let f = "length", h;
      c === "map" || c === "set" ? (f = "size", h = n.size) : h = n.length, this.assert(h <= e, "expected #{this} to have a " + f + " at most #{exp} but got #{act}", "expected #{this} to have a " + f + " above #{exp}", e, h);
    } else this.assert(n <= e, "expected #{this} to be at most #{exp}", "expected #{this} to be above #{exp}", e);
  }
  v(Jn, "assertMost");
  y.addMethod("most", Jn);
  y.addMethod("lte", Jn);
  y.addMethod("lessThanOrEqual", Jn);
  y.addMethod("within", function(e, t, n) {
    n && E(this, "message", n);
    let r = E(this, "object"), o = E(this, "doLength"), s = E(this, "message"), i = s ? s + ": " : "", c = E(this, "ssfi"), u = Q(r).toLowerCase(), a = Q(e).toLowerCase(), l = Q(t).toLowerCase(), f, h = true, p = a === "date" && l === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
    if (o && u !== "map" && u !== "set" && new y(r, s, c, true).to.have.property("length"), !o && u === "date" && (a !== "date" || l !== "date")) f = i + "the arguments to within must be dates";
    else if ((!he(e) || !he(t)) && (o || he(r))) f = i + "the arguments to within must be numbers";
    else if (!o && u !== "date" && !he(r)) {
      let d = u === "string" ? "'" + r + "'" : r;
      f = i + "expected " + d + " to be a number or a date";
    } else h = false;
    if (h) throw new K(f, void 0, c);
    if (o) {
      let d = "length", g;
      u === "map" || u === "set" ? (d = "size", g = r.size) : g = r.length, this.assert(g >= e && g <= t, "expected #{this} to have a " + d + " within " + p, "expected #{this} to not have a " + d + " within " + p);
    } else this.assert(r >= e && r <= t, "expected #{this} to be within " + p, "expected #{this} to not be within " + p);
  });
  function Qo(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = E(this, "ssfi"), o = E(this, "message"), s;
    try {
      s = n instanceof e;
    } catch (c) {
      throw c instanceof TypeError ? (o = o ? o + ": " : "", new K(o + "The instanceof assertion needs a constructor but " + Q(e) + " was given.", void 0, r)) : c;
    }
    let i = Wn(e);
    i == null && (i = "an unnamed constructor"), this.assert(s, "expected #{this} to be an instance of " + i, "expected #{this} to not be an instance of " + i);
  }
  v(Qo, "assertInstanceOf");
  y.addMethod("instanceof", Qo);
  y.addMethod("instanceOf", Qo);
  function es(e, t, n) {
    n && E(this, "message", n);
    let r = E(this, "nested"), o = E(this, "own"), s = E(this, "message"), i = E(this, "object"), c = E(this, "ssfi"), u = typeof e;
    if (s = s ? s + ": " : "", r) {
      if (u !== "string") throw new K(s + "the argument to property must be a string when using nested syntax", void 0, c);
    } else if (u !== "string" && u !== "number" && u !== "symbol") throw new K(s + "the argument to property must be a string, number, or symbol", void 0, c);
    if (r && o) throw new K(s + 'The "nested" and "own" flags cannot be combined.', void 0, c);
    if (i == null) throw new K(s + "Target cannot be null or undefined.", void 0, c);
    let a = E(this, "deep"), l = E(this, "negate"), f = r ? Fo(i, e) : null, h = r ? f.value : i[e], p = a ? E(this, "eql") : (w, T) => w === T, d = "";
    a && (d += "deep "), o && (d += "own "), r && (d += "nested "), d += "property ";
    let g;
    o ? g = Object.prototype.hasOwnProperty.call(i, e) : r ? g = f.exists : g = zn(i, e), (!l || arguments.length === 1) && this.assert(g, "expected #{this} to have " + d + V(e), "expected #{this} to not have " + d + V(e)), arguments.length > 1 && this.assert(g && p(t, h), "expected #{this} to have " + d + V(e) + " of #{exp}, but got #{act}", "expected #{this} to not have " + d + V(e) + " of #{act}", t, h), E(this, "object", h);
  }
  v(es, "assertProperty");
  y.addMethod("property", es);
  function ts(e, t, n) {
    E(this, "own", true), es.apply(this, arguments);
  }
  v(ts, "assertOwnProperty");
  y.addMethod("ownProperty", ts);
  y.addMethod("haveOwnProperty", ts);
  function ns(e, t, n) {
    typeof t == "string" && (n = t, t = null), n && E(this, "message", n);
    let r = E(this, "object"), o = Object.getOwnPropertyDescriptor(Object(r), e), s = E(this, "eql");
    o && t ? this.assert(s(t, o), "expected the own property descriptor for " + V(e) + " on #{this} to match " + V(t) + ", got " + V(o), "expected the own property descriptor for " + V(e) + " on #{this} to not match " + V(t), t, o, true) : this.assert(o, "expected #{this} to have an own property descriptor for " + V(e), "expected #{this} to not have an own property descriptor for " + V(e)), E(this, "object", o);
  }
  v(ns, "assertOwnPropertyDescriptor");
  y.addMethod("ownPropertyDescriptor", ns);
  y.addMethod("haveOwnPropertyDescriptor", ns);
  function rs() {
    E(this, "doLength", true);
  }
  v(rs, "assertLengthChain");
  function os(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = Q(n).toLowerCase(), o = E(this, "message"), s = E(this, "ssfi"), i = "length", c;
    switch (r) {
      case "map":
      case "set":
        i = "size", c = n.size;
        break;
      default:
        new y(n, o, s, true).to.have.property("length"), c = n.length;
    }
    this.assert(c == e, "expected #{this} to have a " + i + " of #{exp} but got #{act}", "expected #{this} to not have a " + i + " of #{act}", e, c);
  }
  v(os, "assertLength");
  y.addChainableMethod("length", os, rs);
  y.addChainableMethod("lengthOf", os, rs);
  function ss(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object");
    this.assert(e.exec(n), "expected #{this} to match " + e, "expected #{this} not to match " + e);
  }
  v(ss, "assertMatch");
  y.addMethod("match", ss);
  y.addMethod("matches", ss);
  y.addMethod("string", function(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = E(this, "message"), o = E(this, "ssfi");
    new y(n, r, o, true).is.a("string"), this.assert(~n.indexOf(e), "expected #{this} to contain " + V(e), "expected #{this} to not contain " + V(e));
  });
  function is(e) {
    let t = E(this, "object"), n = Q(t), r = Q(e), o = E(this, "ssfi"), s = E(this, "deep"), i, c = "", u, a = true, l = E(this, "message");
    l = l ? l + ": " : "";
    let f = l + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
    if (n === "Map" || n === "Set") c = s ? "deeply " : "", u = [], t.forEach(function(T, $) {
      u.push($);
    }), r !== "Array" && (e = Array.prototype.slice.call(arguments));
    else {
      switch (u = Go(t), r) {
        case "Array":
          if (arguments.length > 1) throw new K(f, void 0, o);
          break;
        case "Object":
          if (arguments.length > 1) throw new K(f, void 0, o);
          e = Object.keys(e);
          break;
        default:
          e = Array.prototype.slice.call(arguments);
      }
      e = e.map(function(T) {
        return typeof T == "symbol" ? T : String(T);
      });
    }
    if (!e.length) throw new K(l + "keys required", void 0, o);
    let h = e.length, p = E(this, "any"), d = E(this, "all"), g = e, w = s ? E(this, "eql") : (T, $) => T === $;
    if (!p && !d && (d = true), p && (a = g.some(function(T) {
      return u.some(function($) {
        return w(T, $);
      });
    })), d && (a = g.every(function(T) {
      return u.some(function($) {
        return w(T, $);
      });
    }), E(this, "contains") || (a = a && e.length == u.length)), h > 1) {
      e = e.map(function($) {
        return V($);
      });
      let T = e.pop();
      d && (i = e.join(", ") + ", and " + T), p && (i = e.join(", ") + ", or " + T);
    } else i = V(e[0]);
    i = (h > 1 ? "keys " : "key ") + i, i = (E(this, "contains") ? "contain " : "have ") + i, this.assert(a, "expected #{this} to " + c + i, "expected #{this} to not " + c + i, g.slice(0).sort(On), u.sort(On), true);
  }
  v(is, "assertKeys");
  y.addMethod("keys", is);
  y.addMethod("key", is);
  function Xn(e, t, n) {
    n && E(this, "message", n);
    let r = E(this, "object"), o = E(this, "ssfi"), s = E(this, "message"), i = E(this, "negate") || false;
    new y(r, s, o, true).is.a("function"), (Mn(e) || typeof e == "string") && (t = e, e = null);
    let c, u = false;
    try {
      r();
    } catch (p) {
      u = true, c = p;
    }
    let a = e === void 0 && t === void 0, l = !!(e && t), f = false, h = false;
    if (a || !a && !i) {
      let p = "an error";
      e instanceof Error ? p = "#{exp}" : e && (p = Oe.getConstructorName(e));
      let d = c;
      if (c instanceof Error) d = c.toString();
      else if (typeof c == "string") d = c;
      else if (c && (typeof c == "object" || typeof c == "function")) try {
        d = Oe.getConstructorName(c);
      } catch {
      }
      this.assert(u, "expected #{this} to throw " + p, "expected #{this} to not throw an error but #{act} was thrown", e && e.toString(), d);
    }
    if (e && c && (e instanceof Error && Oe.compatibleInstance(c, e) === i && (l && i ? f = true : this.assert(i, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}" + (c && !i ? " but #{act} was thrown" : ""), e.toString(), c.toString())), Oe.compatibleConstructor(c, e) === i && (l && i ? f = true : this.assert(i, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}" + (c ? " but #{act} was thrown" : ""), e instanceof Error ? e.toString() : e && Oe.getConstructorName(e), c instanceof Error ? c.toString() : c && Oe.getConstructorName(c)))), c && t !== void 0 && t !== null) {
      let p = "including";
      Mn(t) && (p = "matching"), Oe.compatibleMessage(c, t) === i && (l && i ? h = true : this.assert(i, "expected #{this} to throw error " + p + " #{exp} but got #{act}", "expected #{this} to throw error not " + p + " #{exp}", t, Oe.getMessage(c)));
    }
    f && h && this.assert(i, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}" + (c ? " but #{act} was thrown" : ""), e instanceof Error ? e.toString() : e && Oe.getConstructorName(e), c instanceof Error ? c.toString() : c && Oe.getConstructorName(c)), E(this, "object", c);
  }
  v(Xn, "assertThrows");
  y.addMethod("throw", Xn);
  y.addMethod("throws", Xn);
  y.addMethod("Throw", Xn);
  function cs(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = E(this, "itself"), o = typeof n == "function" && !r ? n.prototype[e] : n[e];
    this.assert(typeof o == "function", "expected #{this} to respond to " + V(e), "expected #{this} to not respond to " + V(e));
  }
  v(cs, "respondTo");
  y.addMethod("respondTo", cs);
  y.addMethod("respondsTo", cs);
  y.addProperty("itself", function() {
    E(this, "itself", true);
  });
  function as(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = e(n);
    this.assert(r, "expected #{this} to satisfy " + ft(e), "expected #{this} to not satisfy" + ft(e), !E(this, "negate"), r);
  }
  v(as, "satisfy");
  y.addMethod("satisfy", as);
  y.addMethod("satisfies", as);
  function us(e, t, n) {
    n && E(this, "message", n);
    let r = E(this, "object"), o = E(this, "message"), s = E(this, "ssfi");
    new y(r, o, s, true).is.numeric;
    let i = "A `delta` value is required for `closeTo`";
    if (t == null) throw new K(o ? `${o}: ${i}` : i, void 0, s);
    if (new y(t, o, s, true).is.numeric, i = "A `expected` value is required for `closeTo`", e == null) throw new K(o ? `${o}: ${i}` : i, void 0, s);
    new y(e, o, s, true).is.numeric;
    const c = v((a) => a < 0 ? -a : a, "abs"), u = v((a) => parseFloat(parseFloat(a).toPrecision(12)), "strip");
    this.assert(u(c(r - e)) <= t, "expected #{this} to be close to " + e + " +/- " + t, "expected #{this} not to be close to " + e + " +/- " + t);
  }
  v(us, "closeTo");
  y.addMethod("closeTo", us);
  y.addMethod("approximately", us);
  function wu(e, t, n, r, o) {
    let s = Array.from(t), i = Array.from(e);
    if (!r) {
      if (i.length !== s.length) return false;
      s = s.slice();
    }
    return i.every(function(c, u) {
      if (o) return n ? n(c, s[u]) : c === s[u];
      if (!n) {
        let a = s.indexOf(c);
        return a === -1 ? false : (r || s.splice(a, 1), true);
      }
      return s.some(function(a, l) {
        return n(c, a) ? (r || s.splice(l, 1), true) : false;
      });
    });
  }
  v(wu, "isSubsetOf");
  y.addMethod("members", function(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = E(this, "message"), o = E(this, "ssfi");
    new y(n, r, o, true).to.be.iterable, new y(e, r, o, true).to.be.iterable;
    let s = E(this, "contains"), i = E(this, "ordered"), c, u, a;
    s ? (c = i ? "an ordered superset" : "a superset", u = "expected #{this} to be " + c + " of #{exp}", a = "expected #{this} to not be " + c + " of #{exp}") : (c = i ? "ordered members" : "members", u = "expected #{this} to have the same " + c + " as #{exp}", a = "expected #{this} to not have the same " + c + " as #{exp}");
    let l = E(this, "deep") ? E(this, "eql") : void 0;
    this.assert(wu(e, n, l, s, i), u, a, e, n, true);
  });
  y.addProperty("iterable", function(e) {
    e && E(this, "message", e);
    let t = E(this, "object");
    this.assert(t != null && t[Symbol.iterator], "expected #{this} to be an iterable", "expected #{this} to not be an iterable", t);
  });
  function Tu(e, t) {
    t && E(this, "message", t);
    let n = E(this, "object"), r = E(this, "message"), o = E(this, "ssfi"), s = E(this, "contains"), i = E(this, "deep"), c = E(this, "eql");
    new y(e, r, o, true).to.be.an("array"), s ? this.assert(e.some(function(u) {
      return n.indexOf(u) > -1;
    }), "expected #{this} to contain one of #{exp}", "expected #{this} to not contain one of #{exp}", e, n) : i ? this.assert(e.some(function(u) {
      return c(n, u);
    }), "expected #{this} to deeply equal one of #{exp}", "expected #{this} to deeply equal one of #{exp}", e, n) : this.assert(e.indexOf(n) > -1, "expected #{this} to be one of #{exp}", "expected #{this} to not be one of #{exp}", e, n);
  }
  v(Tu, "oneOf");
  y.addMethod("oneOf", Tu);
  function ls(e, t, n) {
    n && E(this, "message", n);
    let r = E(this, "object"), o = E(this, "message"), s = E(this, "ssfi");
    new y(r, o, s, true).is.a("function");
    let i;
    t ? (new y(e, o, s, true).to.have.property(t), i = e[t]) : (new y(e, o, s, true).is.a("function"), i = e()), r();
    let c = t == null ? e() : e[t], u = t == null ? i : "." + t;
    E(this, "deltaMsgObj", u), E(this, "initialDeltaValue", i), E(this, "finalDeltaValue", c), E(this, "deltaBehavior", "change"), E(this, "realDelta", c !== i), this.assert(i !== c, "expected " + u + " to change", "expected " + u + " to not change");
  }
  v(ls, "assertChanges");
  y.addMethod("change", ls);
  y.addMethod("changes", ls);
  function fs(e, t, n) {
    n && E(this, "message", n);
    let r = E(this, "object"), o = E(this, "message"), s = E(this, "ssfi");
    new y(r, o, s, true).is.a("function");
    let i;
    t ? (new y(e, o, s, true).to.have.property(t), i = e[t]) : (new y(e, o, s, true).is.a("function"), i = e()), new y(i, o, s, true).is.a("number"), r();
    let c = t == null ? e() : e[t], u = t == null ? i : "." + t;
    E(this, "deltaMsgObj", u), E(this, "initialDeltaValue", i), E(this, "finalDeltaValue", c), E(this, "deltaBehavior", "increase"), E(this, "realDelta", c - i), this.assert(c - i > 0, "expected " + u + " to increase", "expected " + u + " to not increase");
  }
  v(fs, "assertIncreases");
  y.addMethod("increase", fs);
  y.addMethod("increases", fs);
  function hs(e, t, n) {
    n && E(this, "message", n);
    let r = E(this, "object"), o = E(this, "message"), s = E(this, "ssfi");
    new y(r, o, s, true).is.a("function");
    let i;
    t ? (new y(e, o, s, true).to.have.property(t), i = e[t]) : (new y(e, o, s, true).is.a("function"), i = e()), new y(i, o, s, true).is.a("number"), r();
    let c = t == null ? e() : e[t], u = t == null ? i : "." + t;
    E(this, "deltaMsgObj", u), E(this, "initialDeltaValue", i), E(this, "finalDeltaValue", c), E(this, "deltaBehavior", "decrease"), E(this, "realDelta", i - c), this.assert(c - i < 0, "expected " + u + " to decrease", "expected " + u + " to not decrease");
  }
  v(hs, "assertDecreases");
  y.addMethod("decrease", hs);
  y.addMethod("decreases", hs);
  function Eu(e, t) {
    t && E(this, "message", t);
    let n = E(this, "deltaMsgObj"), r = E(this, "initialDeltaValue"), o = E(this, "finalDeltaValue"), s = E(this, "deltaBehavior"), i = E(this, "realDelta"), c;
    s === "change" ? c = Math.abs(o - r) === Math.abs(e) : c = i === Math.abs(e), this.assert(c, "expected " + n + " to " + s + " by " + e, "expected " + n + " to not " + s + " by " + e);
  }
  v(Eu, "assertDelta");
  y.addMethod("by", Eu);
  y.addProperty("extensible", function() {
    let e = E(this, "object"), t = e === Object(e) && Object.isExtensible(e);
    this.assert(t, "expected #{this} to be extensible", "expected #{this} to not be extensible");
  });
  y.addProperty("sealed", function() {
    let e = E(this, "object"), t = e === Object(e) ? Object.isSealed(e) : true;
    this.assert(t, "expected #{this} to be sealed", "expected #{this} to not be sealed");
  });
  y.addProperty("frozen", function() {
    let e = E(this, "object"), t = e === Object(e) ? Object.isFrozen(e) : true;
    this.assert(t, "expected #{this} to be frozen", "expected #{this} to not be frozen");
  });
  y.addProperty("finite", function(e) {
    let t = E(this, "object");
    this.assert(typeof t == "number" && isFinite(t), "expected #{this} to be a finite number", "expected #{this} to not be a finite number");
  });
  function An(e, t) {
    return e === t ? true : typeof t != typeof e ? false : typeof e != "object" || e === null ? e === t : t ? Array.isArray(e) ? Array.isArray(t) ? e.every(function(n) {
      return t.some(function(r) {
        return An(n, r);
      });
    }) : false : e instanceof Date ? t instanceof Date ? e.getTime() === t.getTime() : false : Object.keys(e).every(function(n) {
      let r = e[n], o = t[n];
      return typeof r == "object" && r !== null && o !== null ? An(r, o) : typeof r == "function" ? r(o) : o === r;
    }) : false;
  }
  v(An, "compareSubset");
  y.addMethod("containSubset", function(e) {
    const t = q(this, "object"), n = be.showDiff;
    this.assert(An(e, t), "expected #{act} to contain subset #{exp}", "expected #{act} to not contain subset #{exp}", e, t, n);
  });
  function ht(e, t) {
    return new y(e, t);
  }
  v(ht, "expect");
  ht.fail = function(e, t, n, r) {
    throw arguments.length < 2 && (n = e, e = void 0), n = n || "expect.fail()", new K(n, {
      actual: e,
      expected: t,
      operator: r
    }, ht.fail);
  };
  var Su = {};
  No(Su, {
    Should: () => Rp,
    should: () => jp
  });
  function ps() {
    function e() {
      return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new y(this.valueOf(), null, e) : new y(this, null, e);
    }
    v(e, "shouldGetter");
    function t(r) {
      Object.defineProperty(this, "should", {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
    v(t, "shouldSetter"), Object.defineProperty(Object.prototype, "should", {
      set: t,
      get: e,
      configurable: true
    });
    let n = {};
    return n.fail = function(r, o, s, i) {
      throw arguments.length < 2 && (s = r, r = void 0), s = s || "should.fail()", new K(s, {
        actual: r,
        expected: o,
        operator: i
      }, n.fail);
    }, n.equal = function(r, o, s) {
      new y(r, s).to.equal(o);
    }, n.Throw = function(r, o, s, i) {
      new y(r, i).to.Throw(o, s);
    }, n.exist = function(r, o) {
      new y(r, o).to.exist;
    }, n.not = {}, n.not.equal = function(r, o, s) {
      new y(r, s).to.not.equal(o);
    }, n.not.Throw = function(r, o, s, i) {
      new y(r, i).to.not.Throw(o, s);
    }, n.not.exist = function(r, o) {
      new y(r, o).to.not.exist;
    }, n.throw = n.Throw, n.not.throw = n.not.Throw, n;
  }
  v(ps, "loadShould");
  var jp = ps, Rp = ps;
  function m(e, t) {
    new y(null, null, m, true).assert(e, t, "[ negation message unavailable ]");
  }
  v(m, "assert");
  m.fail = function(e, t, n, r) {
    throw arguments.length < 2 && (n = e, e = void 0), n = n || "assert.fail()", new K(n, {
      actual: e,
      expected: t,
      operator: r
    }, m.fail);
  };
  m.isOk = function(e, t) {
    new y(e, t, m.isOk, true).is.ok;
  };
  m.isNotOk = function(e, t) {
    new y(e, t, m.isNotOk, true).is.not.ok;
  };
  m.equal = function(e, t, n) {
    let r = new y(e, n, m.equal, true);
    r.assert(t == q(r, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", t, e, true);
  };
  m.notEqual = function(e, t, n) {
    let r = new y(e, n, m.notEqual, true);
    r.assert(t != q(r, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", t, e, true);
  };
  m.strictEqual = function(e, t, n) {
    new y(e, n, m.strictEqual, true).to.equal(t);
  };
  m.notStrictEqual = function(e, t, n) {
    new y(e, n, m.notStrictEqual, true).to.not.equal(t);
  };
  m.deepEqual = m.deepStrictEqual = function(e, t, n) {
    new y(e, n, m.deepEqual, true).to.eql(t);
  };
  m.notDeepEqual = function(e, t, n) {
    new y(e, n, m.notDeepEqual, true).to.not.eql(t);
  };
  m.isAbove = function(e, t, n) {
    new y(e, n, m.isAbove, true).to.be.above(t);
  };
  m.isAtLeast = function(e, t, n) {
    new y(e, n, m.isAtLeast, true).to.be.least(t);
  };
  m.isBelow = function(e, t, n) {
    new y(e, n, m.isBelow, true).to.be.below(t);
  };
  m.isAtMost = function(e, t, n) {
    new y(e, n, m.isAtMost, true).to.be.most(t);
  };
  m.isTrue = function(e, t) {
    new y(e, t, m.isTrue, true).is.true;
  };
  m.isNotTrue = function(e, t) {
    new y(e, t, m.isNotTrue, true).to.not.equal(true);
  };
  m.isFalse = function(e, t) {
    new y(e, t, m.isFalse, true).is.false;
  };
  m.isNotFalse = function(e, t) {
    new y(e, t, m.isNotFalse, true).to.not.equal(false);
  };
  m.isNull = function(e, t) {
    new y(e, t, m.isNull, true).to.equal(null);
  };
  m.isNotNull = function(e, t) {
    new y(e, t, m.isNotNull, true).to.not.equal(null);
  };
  m.isNaN = function(e, t) {
    new y(e, t, m.isNaN, true).to.be.NaN;
  };
  m.isNotNaN = function(e, t) {
    new y(e, t, m.isNotNaN, true).not.to.be.NaN;
  };
  m.exists = function(e, t) {
    new y(e, t, m.exists, true).to.exist;
  };
  m.notExists = function(e, t) {
    new y(e, t, m.notExists, true).to.not.exist;
  };
  m.isUndefined = function(e, t) {
    new y(e, t, m.isUndefined, true).to.equal(void 0);
  };
  m.isDefined = function(e, t) {
    new y(e, t, m.isDefined, true).to.not.equal(void 0);
  };
  m.isCallable = function(e, t) {
    new y(e, t, m.isCallable, true).is.callable;
  };
  m.isNotCallable = function(e, t) {
    new y(e, t, m.isNotCallable, true).is.not.callable;
  };
  m.isObject = function(e, t) {
    new y(e, t, m.isObject, true).to.be.a("object");
  };
  m.isNotObject = function(e, t) {
    new y(e, t, m.isNotObject, true).to.not.be.a("object");
  };
  m.isArray = function(e, t) {
    new y(e, t, m.isArray, true).to.be.an("array");
  };
  m.isNotArray = function(e, t) {
    new y(e, t, m.isNotArray, true).to.not.be.an("array");
  };
  m.isString = function(e, t) {
    new y(e, t, m.isString, true).to.be.a("string");
  };
  m.isNotString = function(e, t) {
    new y(e, t, m.isNotString, true).to.not.be.a("string");
  };
  m.isNumber = function(e, t) {
    new y(e, t, m.isNumber, true).to.be.a("number");
  };
  m.isNotNumber = function(e, t) {
    new y(e, t, m.isNotNumber, true).to.not.be.a("number");
  };
  m.isNumeric = function(e, t) {
    new y(e, t, m.isNumeric, true).is.numeric;
  };
  m.isNotNumeric = function(e, t) {
    new y(e, t, m.isNotNumeric, true).is.not.numeric;
  };
  m.isFinite = function(e, t) {
    new y(e, t, m.isFinite, true).to.be.finite;
  };
  m.isBoolean = function(e, t) {
    new y(e, t, m.isBoolean, true).to.be.a("boolean");
  };
  m.isNotBoolean = function(e, t) {
    new y(e, t, m.isNotBoolean, true).to.not.be.a("boolean");
  };
  m.typeOf = function(e, t, n) {
    new y(e, n, m.typeOf, true).to.be.a(t);
  };
  m.notTypeOf = function(e, t, n) {
    new y(e, n, m.notTypeOf, true).to.not.be.a(t);
  };
  m.instanceOf = function(e, t, n) {
    new y(e, n, m.instanceOf, true).to.be.instanceOf(t);
  };
  m.notInstanceOf = function(e, t, n) {
    new y(e, n, m.notInstanceOf, true).to.not.be.instanceOf(t);
  };
  m.include = function(e, t, n) {
    new y(e, n, m.include, true).include(t);
  };
  m.notInclude = function(e, t, n) {
    new y(e, n, m.notInclude, true).not.include(t);
  };
  m.deepInclude = function(e, t, n) {
    new y(e, n, m.deepInclude, true).deep.include(t);
  };
  m.notDeepInclude = function(e, t, n) {
    new y(e, n, m.notDeepInclude, true).not.deep.include(t);
  };
  m.nestedInclude = function(e, t, n) {
    new y(e, n, m.nestedInclude, true).nested.include(t);
  };
  m.notNestedInclude = function(e, t, n) {
    new y(e, n, m.notNestedInclude, true).not.nested.include(t);
  };
  m.deepNestedInclude = function(e, t, n) {
    new y(e, n, m.deepNestedInclude, true).deep.nested.include(t);
  };
  m.notDeepNestedInclude = function(e, t, n) {
    new y(e, n, m.notDeepNestedInclude, true).not.deep.nested.include(t);
  };
  m.ownInclude = function(e, t, n) {
    new y(e, n, m.ownInclude, true).own.include(t);
  };
  m.notOwnInclude = function(e, t, n) {
    new y(e, n, m.notOwnInclude, true).not.own.include(t);
  };
  m.deepOwnInclude = function(e, t, n) {
    new y(e, n, m.deepOwnInclude, true).deep.own.include(t);
  };
  m.notDeepOwnInclude = function(e, t, n) {
    new y(e, n, m.notDeepOwnInclude, true).not.deep.own.include(t);
  };
  m.match = function(e, t, n) {
    new y(e, n, m.match, true).to.match(t);
  };
  m.notMatch = function(e, t, n) {
    new y(e, n, m.notMatch, true).to.not.match(t);
  };
  m.property = function(e, t, n) {
    new y(e, n, m.property, true).to.have.property(t);
  };
  m.notProperty = function(e, t, n) {
    new y(e, n, m.notProperty, true).to.not.have.property(t);
  };
  m.propertyVal = function(e, t, n, r) {
    new y(e, r, m.propertyVal, true).to.have.property(t, n);
  };
  m.notPropertyVal = function(e, t, n, r) {
    new y(e, r, m.notPropertyVal, true).to.not.have.property(t, n);
  };
  m.deepPropertyVal = function(e, t, n, r) {
    new y(e, r, m.deepPropertyVal, true).to.have.deep.property(t, n);
  };
  m.notDeepPropertyVal = function(e, t, n, r) {
    new y(e, r, m.notDeepPropertyVal, true).to.not.have.deep.property(t, n);
  };
  m.ownProperty = function(e, t, n) {
    new y(e, n, m.ownProperty, true).to.have.own.property(t);
  };
  m.notOwnProperty = function(e, t, n) {
    new y(e, n, m.notOwnProperty, true).to.not.have.own.property(t);
  };
  m.ownPropertyVal = function(e, t, n, r) {
    new y(e, r, m.ownPropertyVal, true).to.have.own.property(t, n);
  };
  m.notOwnPropertyVal = function(e, t, n, r) {
    new y(e, r, m.notOwnPropertyVal, true).to.not.have.own.property(t, n);
  };
  m.deepOwnPropertyVal = function(e, t, n, r) {
    new y(e, r, m.deepOwnPropertyVal, true).to.have.deep.own.property(t, n);
  };
  m.notDeepOwnPropertyVal = function(e, t, n, r) {
    new y(e, r, m.notDeepOwnPropertyVal, true).to.not.have.deep.own.property(t, n);
  };
  m.nestedProperty = function(e, t, n) {
    new y(e, n, m.nestedProperty, true).to.have.nested.property(t);
  };
  m.notNestedProperty = function(e, t, n) {
    new y(e, n, m.notNestedProperty, true).to.not.have.nested.property(t);
  };
  m.nestedPropertyVal = function(e, t, n, r) {
    new y(e, r, m.nestedPropertyVal, true).to.have.nested.property(t, n);
  };
  m.notNestedPropertyVal = function(e, t, n, r) {
    new y(e, r, m.notNestedPropertyVal, true).to.not.have.nested.property(t, n);
  };
  m.deepNestedPropertyVal = function(e, t, n, r) {
    new y(e, r, m.deepNestedPropertyVal, true).to.have.deep.nested.property(t, n);
  };
  m.notDeepNestedPropertyVal = function(e, t, n, r) {
    new y(e, r, m.notDeepNestedPropertyVal, true).to.not.have.deep.nested.property(t, n);
  };
  m.lengthOf = function(e, t, n) {
    new y(e, n, m.lengthOf, true).to.have.lengthOf(t);
  };
  m.hasAnyKeys = function(e, t, n) {
    new y(e, n, m.hasAnyKeys, true).to.have.any.keys(t);
  };
  m.hasAllKeys = function(e, t, n) {
    new y(e, n, m.hasAllKeys, true).to.have.all.keys(t);
  };
  m.containsAllKeys = function(e, t, n) {
    new y(e, n, m.containsAllKeys, true).to.contain.all.keys(t);
  };
  m.doesNotHaveAnyKeys = function(e, t, n) {
    new y(e, n, m.doesNotHaveAnyKeys, true).to.not.have.any.keys(t);
  };
  m.doesNotHaveAllKeys = function(e, t, n) {
    new y(e, n, m.doesNotHaveAllKeys, true).to.not.have.all.keys(t);
  };
  m.hasAnyDeepKeys = function(e, t, n) {
    new y(e, n, m.hasAnyDeepKeys, true).to.have.any.deep.keys(t);
  };
  m.hasAllDeepKeys = function(e, t, n) {
    new y(e, n, m.hasAllDeepKeys, true).to.have.all.deep.keys(t);
  };
  m.containsAllDeepKeys = function(e, t, n) {
    new y(e, n, m.containsAllDeepKeys, true).to.contain.all.deep.keys(t);
  };
  m.doesNotHaveAnyDeepKeys = function(e, t, n) {
    new y(e, n, m.doesNotHaveAnyDeepKeys, true).to.not.have.any.deep.keys(t);
  };
  m.doesNotHaveAllDeepKeys = function(e, t, n) {
    new y(e, n, m.doesNotHaveAllDeepKeys, true).to.not.have.all.deep.keys(t);
  };
  m.throws = function(e, t, n, r) {
    (typeof t == "string" || t instanceof RegExp) && (n = t, t = null);
    let o = new y(e, r, m.throws, true).to.throw(t, n);
    return q(o, "object");
  };
  m.doesNotThrow = function(e, t, n, r) {
    (typeof t == "string" || t instanceof RegExp) && (n = t, t = null), new y(e, r, m.doesNotThrow, true).to.not.throw(t, n);
  };
  m.operator = function(e, t, n, r) {
    let o;
    switch (t) {
      case "==":
        o = e == n;
        break;
      case "===":
        o = e === n;
        break;
      case ">":
        o = e > n;
        break;
      case ">=":
        o = e >= n;
        break;
      case "<":
        o = e < n;
        break;
      case "<=":
        o = e <= n;
        break;
      case "!=":
        o = e != n;
        break;
      case "!==":
        o = e !== n;
        break;
      default:
        throw r = r && r + ": ", new K(r + 'Invalid operator "' + t + '"', void 0, m.operator);
    }
    let s = new y(o, r, m.operator, true);
    s.assert(q(s, "object") === true, "expected " + V(e) + " to be " + t + " " + V(n), "expected " + V(e) + " to not be " + t + " " + V(n));
  };
  m.closeTo = function(e, t, n, r) {
    new y(e, r, m.closeTo, true).to.be.closeTo(t, n);
  };
  m.approximately = function(e, t, n, r) {
    new y(e, r, m.approximately, true).to.be.approximately(t, n);
  };
  m.sameMembers = function(e, t, n) {
    new y(e, n, m.sameMembers, true).to.have.same.members(t);
  };
  m.notSameMembers = function(e, t, n) {
    new y(e, n, m.notSameMembers, true).to.not.have.same.members(t);
  };
  m.sameDeepMembers = function(e, t, n) {
    new y(e, n, m.sameDeepMembers, true).to.have.same.deep.members(t);
  };
  m.notSameDeepMembers = function(e, t, n) {
    new y(e, n, m.notSameDeepMembers, true).to.not.have.same.deep.members(t);
  };
  m.sameOrderedMembers = function(e, t, n) {
    new y(e, n, m.sameOrderedMembers, true).to.have.same.ordered.members(t);
  };
  m.notSameOrderedMembers = function(e, t, n) {
    new y(e, n, m.notSameOrderedMembers, true).to.not.have.same.ordered.members(t);
  };
  m.sameDeepOrderedMembers = function(e, t, n) {
    new y(e, n, m.sameDeepOrderedMembers, true).to.have.same.deep.ordered.members(t);
  };
  m.notSameDeepOrderedMembers = function(e, t, n) {
    new y(e, n, m.notSameDeepOrderedMembers, true).to.not.have.same.deep.ordered.members(t);
  };
  m.includeMembers = function(e, t, n) {
    new y(e, n, m.includeMembers, true).to.include.members(t);
  };
  m.notIncludeMembers = function(e, t, n) {
    new y(e, n, m.notIncludeMembers, true).to.not.include.members(t);
  };
  m.includeDeepMembers = function(e, t, n) {
    new y(e, n, m.includeDeepMembers, true).to.include.deep.members(t);
  };
  m.notIncludeDeepMembers = function(e, t, n) {
    new y(e, n, m.notIncludeDeepMembers, true).to.not.include.deep.members(t);
  };
  m.includeOrderedMembers = function(e, t, n) {
    new y(e, n, m.includeOrderedMembers, true).to.include.ordered.members(t);
  };
  m.notIncludeOrderedMembers = function(e, t, n) {
    new y(e, n, m.notIncludeOrderedMembers, true).to.not.include.ordered.members(t);
  };
  m.includeDeepOrderedMembers = function(e, t, n) {
    new y(e, n, m.includeDeepOrderedMembers, true).to.include.deep.ordered.members(t);
  };
  m.notIncludeDeepOrderedMembers = function(e, t, n) {
    new y(e, n, m.notIncludeDeepOrderedMembers, true).to.not.include.deep.ordered.members(t);
  };
  m.oneOf = function(e, t, n) {
    new y(e, n, m.oneOf, true).to.be.oneOf(t);
  };
  m.isIterable = function(e, t) {
    if (e == null || !e[Symbol.iterator]) throw t = t ? `${t} expected ${V(e)} to be an iterable` : `expected ${V(e)} to be an iterable`, new K(t, void 0, m.isIterable);
  };
  m.changes = function(e, t, n, r) {
    arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, m.changes, true).to.change(t, n);
  };
  m.changesBy = function(e, t, n, r, o) {
    if (arguments.length === 4 && typeof t == "function") {
      let s = r;
      r = n, o = s;
    } else arguments.length === 3 && (r = n, n = null);
    new y(e, o, m.changesBy, true).to.change(t, n).by(r);
  };
  m.doesNotChange = function(e, t, n, r) {
    return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, m.doesNotChange, true).to.not.change(t, n);
  };
  m.changesButNotBy = function(e, t, n, r, o) {
    if (arguments.length === 4 && typeof t == "function") {
      let s = r;
      r = n, o = s;
    } else arguments.length === 3 && (r = n, n = null);
    new y(e, o, m.changesButNotBy, true).to.change(t, n).but.not.by(r);
  };
  m.increases = function(e, t, n, r) {
    return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, m.increases, true).to.increase(t, n);
  };
  m.increasesBy = function(e, t, n, r, o) {
    if (arguments.length === 4 && typeof t == "function") {
      let s = r;
      r = n, o = s;
    } else arguments.length === 3 && (r = n, n = null);
    new y(e, o, m.increasesBy, true).to.increase(t, n).by(r);
  };
  m.doesNotIncrease = function(e, t, n, r) {
    return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, m.doesNotIncrease, true).to.not.increase(t, n);
  };
  m.increasesButNotBy = function(e, t, n, r, o) {
    if (arguments.length === 4 && typeof t == "function") {
      let s = r;
      r = n, o = s;
    } else arguments.length === 3 && (r = n, n = null);
    new y(e, o, m.increasesButNotBy, true).to.increase(t, n).but.not.by(r);
  };
  m.decreases = function(e, t, n, r) {
    return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, m.decreases, true).to.decrease(t, n);
  };
  m.decreasesBy = function(e, t, n, r, o) {
    if (arguments.length === 4 && typeof t == "function") {
      let s = r;
      r = n, o = s;
    } else arguments.length === 3 && (r = n, n = null);
    new y(e, o, m.decreasesBy, true).to.decrease(t, n).by(r);
  };
  m.doesNotDecrease = function(e, t, n, r) {
    return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, m.doesNotDecrease, true).to.not.decrease(t, n);
  };
  m.doesNotDecreaseBy = function(e, t, n, r, o) {
    if (arguments.length === 4 && typeof t == "function") {
      let s = r;
      r = n, o = s;
    } else arguments.length === 3 && (r = n, n = null);
    return new y(e, o, m.doesNotDecreaseBy, true).to.not.decrease(t, n).by(r);
  };
  m.decreasesButNotBy = function(e, t, n, r, o) {
    if (arguments.length === 4 && typeof t == "function") {
      let s = r;
      r = n, o = s;
    } else arguments.length === 3 && (r = n, n = null);
    new y(e, o, m.decreasesButNotBy, true).to.decrease(t, n).but.not.by(r);
  };
  m.ifError = function(e) {
    if (e) throw e;
  };
  m.isExtensible = function(e, t) {
    new y(e, t, m.isExtensible, true).to.be.extensible;
  };
  m.isNotExtensible = function(e, t) {
    new y(e, t, m.isNotExtensible, true).to.not.be.extensible;
  };
  m.isSealed = function(e, t) {
    new y(e, t, m.isSealed, true).to.be.sealed;
  };
  m.isNotSealed = function(e, t) {
    new y(e, t, m.isNotSealed, true).to.not.be.sealed;
  };
  m.isFrozen = function(e, t) {
    new y(e, t, m.isFrozen, true).to.be.frozen;
  };
  m.isNotFrozen = function(e, t) {
    new y(e, t, m.isNotFrozen, true).to.not.be.frozen;
  };
  m.isEmpty = function(e, t) {
    new y(e, t, m.isEmpty, true).to.be.empty;
  };
  m.isNotEmpty = function(e, t) {
    new y(e, t, m.isNotEmpty, true).to.not.be.empty;
  };
  m.containsSubset = function(e, t, n) {
    new y(e, n).to.containSubset(t);
  };
  m.doesNotContainSubset = function(e, t, n) {
    new y(e, n).to.not.containSubset(t);
  };
  var Dp = [
    [
      "isOk",
      "ok"
    ],
    [
      "isNotOk",
      "notOk"
    ],
    [
      "throws",
      "throw"
    ],
    [
      "throws",
      "Throw"
    ],
    [
      "isExtensible",
      "extensible"
    ],
    [
      "isNotExtensible",
      "notExtensible"
    ],
    [
      "isSealed",
      "sealed"
    ],
    [
      "isNotSealed",
      "notSealed"
    ],
    [
      "isFrozen",
      "frozen"
    ],
    [
      "isNotFrozen",
      "notFrozen"
    ],
    [
      "isEmpty",
      "empty"
    ],
    [
      "isNotEmpty",
      "notEmpty"
    ],
    [
      "isCallable",
      "isFunction"
    ],
    [
      "isNotCallable",
      "isNotFunction"
    ],
    [
      "containsSubset",
      "containSubset"
    ]
  ];
  for (const [e, t] of Dp) m[t] = m[e];
  var Oi = [];
  function yt(e) {
    const t = {
      use: yt,
      AssertionError: K,
      util: le,
      config: be,
      expect: ht,
      assert: m,
      Assertion: y,
      ...Su
    };
    return ~Oi.indexOf(e) || (e(t, le), Oi.push(e)), t;
  }
  v(yt, "use");
  const Cn = /* @__PURE__ */ Symbol.for("matchers-object"), on = /* @__PURE__ */ Symbol.for("$$jest-matchers-object"), Hn = /* @__PURE__ */ Symbol.for("expect-global"), ds = /* @__PURE__ */ Symbol.for("asymmetric-matchers-object"), Fp = {
    toSatisfy(e, t, n) {
      const { printReceived: r, printExpected: o, matcherHint: s } = this.utils, i = t(e);
      return {
        pass: i,
        message: () => i ? `${s(".not.toSatisfy", "received", "")}

Expected value to not satisfy:
${n || o(t)}
Received:
${r(e)}` : `${s(".toSatisfy", "received", "")}

Expected value to satisfy:
${n || o(t)}

Received:
${r(e)}`
      };
    },
    toBeOneOf(e, t) {
      const { equals: n, customTesters: r } = this, { printReceived: o, printExpected: s, matcherHint: i } = this.utils;
      let c;
      if (Array.isArray(t)) c = t.length === 0 || t.some((u) => n(u, e, r));
      else if (t instanceof Set) c = t.size === 0 || t.has(e) || [
        ...t
      ].some((u) => n(u, e, r));
      else throw new TypeError(`You must provide an array or set to ${i(".toBeOneOf")}, not '${typeof t}'.`);
      return {
        pass: c,
        message: () => c ? `${i(".not.toBeOneOf", "received", "")}

Expected value to not be one of:
${s(t)}
Received:
${o(e)}` : `${i(".toBeOneOf", "received", "")}

Expected value to be one of:
${s(t)}

Received:
${o(e)}`
      };
    }
  }, Nn = ie.green, ms = ie.red, Lp = ie.inverse, qp = ie.bold, et = ie.dim;
  function Bp(e, t = "received", n = "expected", r = {}) {
    const { comment: o = "", isDirectExpectCall: s = false, isNot: i = false, promise: c = "", secondArgument: u = "", expectedColor: a = Nn, receivedColor: l = ms, secondArgumentColor: f = Nn } = r;
    let h = "", p = "expect";
    return !s && t !== "" && (h += et(`${p}(`) + l(t), p = ")"), c !== "" && (h += et(`${p}.`) + c, p = ""), i && (h += `${et(`${p}.`)}not`, p = ""), e.includes(".") ? p += e : (h += et(`${p}.`) + e, p = ""), n === "" ? p += "()" : (h += et(`${p}(`) + a(n), u && (h += et(", ") + f(u)), p = ")"), o !== "" && (p += ` // ${o}`), p !== "" && (h += et(p)), h;
  }
  const zp = "\xB7";
  function vu(e) {
    return e.replace(/\s+$/gm, (t) => zp.repeat(t.length));
  }
  function Vp(e) {
    return ms(vu(ve(e)));
  }
  function Wp(e) {
    return Nn(vu(ve(e)));
  }
  function $u() {
    return {
      EXPECTED_COLOR: Nn,
      RECEIVED_COLOR: ms,
      INVERTED_COLOR: Lp,
      BOLD_WEIGHT: qp,
      DIM_COLOR: et,
      diff: Ct,
      matcherHint: Bp,
      printReceived: Vp,
      printExpected: Wp,
      printDiffOrStringify: $a,
      printWithType: Up
    };
  }
  function Up(e, t, n) {
    const r = Xt(t), o = r !== "null" && r !== "undefined" ? `${e} has type:  ${r}
` : "", s = `${e} has value: ${n(t)}`;
    return o + s;
  }
  function Kp(e) {
    if (!Array.isArray(e)) throw new TypeError(`expect.customEqualityTesters: Must be set to an array of Testers. Was given "${Xt(e)}"`);
    globalThis[on].customEqualityTesters.push(...e);
  }
  function gs() {
    return globalThis[on].customEqualityTesters;
  }
  function U(e, t, n, r) {
    return n = n || [], Ut(e, t, [], [], n, r ? _u : Jp);
  }
  function xi(e) {
    return !!e && typeof e == "object" && "asymmetricMatch" in e && qe("Function", e.asymmetricMatch);
  }
  function Gp(e, t, n) {
    const r = xi(e), o = xi(t);
    if (!(r && o)) {
      if (r) return e.asymmetricMatch(t, n);
      if (o) return t.asymmetricMatch(e, n);
    }
  }
  function Ut(e, t, n, r, o, s) {
    let i = true;
    const c = Gp(e, t, o);
    if (c !== void 0) return c;
    const u = {
      equals: U
    };
    for (let d = 0; d < o.length; d++) {
      const g = o[d].call(u, e, t, o);
      if (g !== void 0) return g;
    }
    if (typeof URL == "function" && e instanceof URL && t instanceof URL) return e.href === t.href;
    if (Object.is(e, t)) return true;
    if (e === null || t === null) return e === t;
    const a = Object.prototype.toString.call(e);
    if (a !== Object.prototype.toString.call(t)) return false;
    switch (a) {
      case "[object Boolean]":
      case "[object String]":
      case "[object Number]":
        return typeof e != typeof t ? false : typeof e != "object" && typeof t != "object" ? Object.is(e, t) : Object.is(e.valueOf(), t.valueOf());
      case "[object Date]": {
        const d = +e, g = +t;
        return d === g || Number.isNaN(d) && Number.isNaN(g);
      }
      case "[object RegExp]":
        return e.source === t.source && e.flags === t.flags;
      case "[object Temporal.Instant]":
      case "[object Temporal.ZonedDateTime]":
      case "[object Temporal.PlainDateTime]":
      case "[object Temporal.PlainDate]":
      case "[object Temporal.PlainTime]":
      case "[object Temporal.PlainYearMonth]":
      case "[object Temporal.PlainMonthDay]":
        return e.equals(t);
      case "[object Temporal.Duration]":
        return e.toString() === t.toString();
    }
    if (typeof e != "object" || typeof t != "object") return false;
    if (Ai(e) && Ai(t)) return e.isEqualNode(t);
    let l = n.length;
    for (; l--; ) {
      if (n[l] === e) return r[l] === t;
      if (r[l] === t) return false;
    }
    if (n.push(e), r.push(t), a === "[object Array]" && e.length !== t.length) return false;
    if (e instanceof Error && t instanceof Error) try {
      return Yp(e, t, n, r, o, s);
    } finally {
      n.pop(), r.pop();
    }
    const f = Mi(e, s);
    let h, p = f.length;
    if (Mi(t, s).length !== p) return false;
    for (; p--; ) if (h = f[p], i = s(t, h) && Ut(e[h], t[h], n, r, o, s), !i) return false;
    return n.pop(), r.pop(), i;
  }
  function Yp(e, t, n, r, o, s) {
    let i = Object.getPrototypeOf(e) === Object.getPrototypeOf(t) && e.name === t.name && e.message === t.message;
    return typeof t.cause < "u" && i && (i = Ut(e.cause, t.cause, n, r, o, s)), e instanceof AggregateError && t instanceof AggregateError && i && (i = Ut(e.errors, t.errors, n, r, o, s)), i && (i = Ut({
      ...e
    }, {
      ...t
    }, n, r, o, s)), i;
  }
  function Mi(e, t) {
    const n = [];
    for (const r in e) t(e, r) && n.push(r);
    return n.concat(Object.getOwnPropertySymbols(e).filter((r) => Object.getOwnPropertyDescriptor(e, r).enumerable));
  }
  function Jp(e, t) {
    return _u(e, t) && e[t] !== void 0;
  }
  function _u(e, t) {
    return Object.hasOwn(e, t);
  }
  function qe(e, t) {
    return Object.prototype.toString.apply(t) === `[object ${e}]`;
  }
  function Ai(e) {
    return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number" && "nodeName" in e && typeof e.nodeName == "string" && "isEqualNode" in e && typeof e.isEqualNode == "function";
  }
  const Ou = "@@__IMMUTABLE_KEYED__@@", xu = "@@__IMMUTABLE_SET__@@", Xp = "@@__IMMUTABLE_LIST__@@", Zn = "@@__IMMUTABLE_ORDERED__@@", Hp = "@@__IMMUTABLE_RECORD__@@";
  function Zp(e) {
    return !!(e && e[Ou] && !e[Zn]);
  }
  function Qp(e) {
    return !!(e && e[xu] && !e[Zn]);
  }
  function Qn(e) {
    return e != null && typeof e == "object" && !Array.isArray(e);
  }
  function ed(e) {
    return !!(e && Qn(e) && e[Xp]);
  }
  function td(e) {
    return !!(e && Qn(e) && e[Ou] && e[Zn]);
  }
  function nd(e) {
    return !!(e && Qn(e) && e[xu] && e[Zn]);
  }
  function rd(e) {
    return !!(e && Qn(e) && e[Hp]);
  }
  const Mu = Symbol.iterator;
  function Ci(e) {
    return !!(e != null && e[Mu]);
  }
  function Me(e, t, n = [], r = [], o = []) {
    if (typeof e != "object" || typeof t != "object" || Array.isArray(e) || Array.isArray(t) || !Ci(e) || !Ci(t)) return;
    if (e.constructor !== t.constructor) return false;
    let s = r.length;
    for (; s--; ) if (r[s] === e) return o[s] === t;
    r.push(e), o.push(t);
    const i = [
      ...n.filter((a) => a !== Me),
      c
    ];
    function c(a, l) {
      return Me(a, l, [
        ...n
      ], [
        ...r
      ], [
        ...o
      ]);
    }
    if (e.size !== void 0) {
      if (e.size !== t.size) return false;
      if (qe("Set", e) || Qp(e)) {
        let a = true;
        for (const l of e) if (!t.has(l)) {
          let f = false;
          for (const h of t) U(l, h, i) === true && (f = true);
          if (f === false) {
            a = false;
            break;
          }
        }
        return r.pop(), o.pop(), a;
      } else if (qe("Map", e) || Zp(e)) {
        let a = true;
        for (const l of e) if (!t.has(l[0]) || !U(l[1], t.get(l[0]), i)) {
          let f = false;
          for (const h of t) {
            const p = U(l[0], h[0], i);
            let d = false;
            p === true && (d = U(l[1], h[1], i)), d === true && (f = true);
          }
          if (f === false) {
            a = false;
            break;
          }
        }
        return r.pop(), o.pop(), a;
      }
    }
    const u = t[Mu]();
    for (const a of e) {
      const l = u.next();
      if (l.done || !U(a, l.value, i)) return false;
    }
    if (!u.next().done) return false;
    if (!ed(e) && !td(e) && !nd(e) && !rd(e)) {
      const a = Object.entries(e), l = Object.entries(t);
      if (!U(a, l, i)) return false;
    }
    return r.pop(), o.pop(), true;
  }
  function ys(e, t) {
    return !e || typeof e != "object" || e === Object.prototype ? false : Object.hasOwn(e, t) || ys(Object.getPrototypeOf(e), t);
  }
  function od(e) {
    return vt(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date);
  }
  function It(e, t, n = []) {
    const r = n.filter((s) => s !== It), o = (s = /* @__PURE__ */ new WeakMap()) => (i, c) => {
      if (od(c)) return Object.keys(c).every((u) => {
        if (c[u] != null && typeof c[u] == "object") {
          if (s.has(c[u])) return U(i[u], c[u], r);
          s.set(c[u], true);
        }
        const a = i != null && ys(i, u) && U(i[u], c[u], [
          ...r,
          o(s)
        ]);
        return s.delete(c[u]), a;
      });
    };
    return o()(e, t);
  }
  function Ni(e, t) {
    if (!(e == null || t == null || e.constructor === t.constructor)) return false;
  }
  function Ii(e, t) {
    let n = e, r = t;
    if (!(e instanceof DataView && t instanceof DataView)) {
      if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer)) return;
      try {
        n = new DataView(e), r = new DataView(t);
      } catch {
        return;
      }
    }
    if (n.byteLength !== r.byteLength) return false;
    for (let o = 0; o < n.byteLength; o++) if (n.getUint8(o) !== r.getUint8(o)) return false;
    return true;
  }
  function ho(e, t, n = []) {
    if (!Array.isArray(e) || !Array.isArray(t)) return;
    const r = Object.keys(e), o = Object.keys(t), s = n.filter((i) => i !== ho);
    return U(e, t, s, true) && U(r, o);
  }
  function sd(e, t = "#{this}", n = "#{exp}") {
    const r = `expected ${t} to be ${n} // Object.is equality`;
    return [
      "toStrictEqual",
      "toEqual"
    ].includes(e) ? `${r}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
` : r;
  }
  function id(e, t) {
    return `${t} ${e}${t === 1 ? "" : "s"}`;
  }
  function mr(e) {
    return [
      ...Object.keys(e),
      ...Object.getOwnPropertySymbols(e).filter((t) => {
        var n;
        return (n = Object.getOwnPropertyDescriptor(e, t)) === null || n === void 0 ? void 0 : n.enumerable;
      })
    ];
  }
  function cd(e, t, n) {
    let r = 0;
    const o = (s = /* @__PURE__ */ new WeakMap()) => (i, c) => {
      if (Array.isArray(i)) {
        if (Array.isArray(c) && c.length === i.length) return c.map((u, a) => o(s)(i[a], u));
      } else {
        if (i instanceof Date) return i;
        if (vt(i) && vt(c)) {
          if (U(i, c, [
            ...n,
            Me,
            It
          ])) return c;
          const u = {};
          s.set(i, u), typeof i.constructor == "function" && typeof i.constructor.name == "string" && Object.defineProperty(u, "constructor", {
            enumerable: false,
            value: i.constructor
          });
          for (const a of mr(i)) ys(c, a) ? u[a] = s.has(i[a]) ? s.get(i[a]) : o(s)(i[a], c[a]) : s.has(i[a]) || (r += 1, vt(i[a]) && (r += mr(i[a]).length), o(s)(i[a], c[a]));
          if (mr(u).length > 0) return u;
        }
      }
      return i;
    };
    return {
      subset: o()(e, t),
      stripped: r
    };
  }
  function ad(e) {
    return !!e && (typeof e == "object" || typeof e == "function") && e["~standard"] && typeof e["~standard"].validate == "function";
  }
  if (!Object.hasOwn(globalThis, Cn)) {
    const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ Object.create(null), n = [], r = /* @__PURE__ */ Object.create(null);
    Object.defineProperty(globalThis, Cn, {
      get: () => e
    }), Object.defineProperty(globalThis, on, {
      configurable: true,
      get: () => ({
        state: e.get(globalThis[Hn]),
        matchers: t,
        customEqualityTesters: n
      })
    }), Object.defineProperty(globalThis, ds, {
      get: () => r
    });
  }
  function Kt(e) {
    return globalThis[Cn].get(e);
  }
  function gr(e, t) {
    const n = globalThis[Cn], r = n.get(t) || {}, o = Object.defineProperties(r, {
      ...Object.getOwnPropertyDescriptors(r),
      ...Object.getOwnPropertyDescriptors(e)
    });
    n.set(t, o);
  }
  let Ge = class {
    constructor(t, n = false) {
      __publicField(this, "$$typeof", /* @__PURE__ */ Symbol.for("jest.asymmetricMatcher"));
      this.sample = t, this.inverse = n;
    }
    getMatcherContext(t) {
      return {
        ...Kt(t || globalThis[Hn]),
        equals: U,
        isNot: this.inverse,
        customTesters: gs(),
        utils: {
          ...$u(),
          diff: Ct,
          stringify: ve,
          iterableEquality: Me,
          subsetEquality: It
        }
      };
    }
  };
  Ge.prototype[/* @__PURE__ */ Symbol.for("chai/inspect")] = function(e) {
    const t = ve(this, e.depth, {
      min: true
    });
    return t.length <= e.truncate ? t : `${this.toString()}{\u2026}`;
  };
  class Pi extends Ge {
    constructor(t, n = false) {
      if (!qe("String", t)) throw new Error("Expected is not a string");
      super(t, n);
    }
    asymmetricMatch(t) {
      const n = qe("String", t) && t.includes(this.sample);
      return this.inverse ? !n : n;
    }
    toString() {
      return `String${this.inverse ? "Not" : ""}Containing`;
    }
    getExpectedType() {
      return "string";
    }
  }
  class ud extends Ge {
    asymmetricMatch(t) {
      return t != null;
    }
    toString() {
      return "Anything";
    }
    toAsymmetricMatcher() {
      return "Anything";
    }
  }
  class ki extends Ge {
    constructor(t, n = false) {
      super(t, n);
    }
    getPrototype(t) {
      return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.constructor.prototype === t ? null : t.constructor.prototype;
    }
    hasProperty(t, n) {
      return t ? Object.hasOwn(t, n) ? true : this.hasProperty(this.getPrototype(t), n) : false;
    }
    getProperties(t) {
      return [
        ...Object.keys(t),
        ...Object.getOwnPropertySymbols(t).filter((n) => {
          var r;
          return (r = Object.getOwnPropertyDescriptor(t, n)) === null || r === void 0 ? void 0 : r.enumerable;
        })
      ];
    }
    asymmetricMatch(t, n) {
      if (typeof this.sample != "object") throw new TypeError(`You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`);
      let r = true;
      const o = this.getProperties(this.sample);
      for (const c of o) {
        var s, i;
        if (!this.hasProperty(t, c)) {
          r = false;
          break;
        }
        const u = ((s = Object.getOwnPropertyDescriptor(this.sample, c)) === null || s === void 0 ? void 0 : s.value) ?? this.sample[c], a = ((i = Object.getOwnPropertyDescriptor(t, c)) === null || i === void 0 ? void 0 : i.value) ?? t[c];
        if (!U(u, a, n)) {
          r = false;
          break;
        }
      }
      return this.inverse ? !r : r;
    }
    toString() {
      return `Object${this.inverse ? "Not" : ""}Containing`;
    }
    getExpectedType() {
      return "object";
    }
  }
  class ji extends Ge {
    constructor(t, n = false) {
      super(t, n);
    }
    asymmetricMatch(t, n) {
      if (!Array.isArray(this.sample)) throw new TypeError(`You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`);
      const r = this.sample.length === 0 || Array.isArray(t) && this.sample.every((o) => t.some((s) => U(o, s, n)));
      return this.inverse ? !r : r;
    }
    toString() {
      return `Array${this.inverse ? "Not" : ""}Containing`;
    }
    getExpectedType() {
      return "array";
    }
  }
  class ld extends Ge {
    constructor(t) {
      if (typeof t > "u") throw new TypeError("any() expects to be passed a constructor function. Please pass one or use anything() to match any object.");
      super(t);
    }
    fnNameFor(t) {
      if (t.name) return t.name;
      const r = Function.prototype.toString.call(t).match(/^(?:async)?\s*function\s*(?:\*\s*)?([\w$]+)\s*\(/);
      return r ? r[1] : "<anonymous>";
    }
    asymmetricMatch(t) {
      return this.sample === String ? typeof t == "string" || t instanceof String : this.sample === Number ? typeof t == "number" || t instanceof Number : this.sample === Function ? typeof t == "function" || typeof t == "function" : this.sample === Boolean ? typeof t == "boolean" || t instanceof Boolean : this.sample === BigInt ? typeof t == "bigint" || t instanceof BigInt : this.sample === Symbol ? typeof t == "symbol" || t instanceof Symbol : this.sample === Object ? typeof t == "object" : t instanceof this.sample;
    }
    toString() {
      return "Any";
    }
    getExpectedType() {
      return this.sample === String ? "string" : this.sample === Number ? "number" : this.sample === Function ? "function" : this.sample === Object ? "object" : this.sample === Boolean ? "boolean" : this.fnNameFor(this.sample);
    }
    toAsymmetricMatcher() {
      return `Any<${this.fnNameFor(this.sample)}>`;
    }
  }
  class Ri extends Ge {
    constructor(t, n = false) {
      if (!qe("String", t) && !qe("RegExp", t)) throw new Error("Expected is not a String or a RegExp");
      super(new RegExp(t), n);
    }
    asymmetricMatch(t) {
      const n = qe("String", t) && this.sample.test(t);
      return this.inverse ? !n : n;
    }
    toString() {
      return `String${this.inverse ? "Not" : ""}Matching`;
    }
    getExpectedType() {
      return "string";
    }
  }
  class Di extends Ge {
    constructor(t, n = 2, r = false) {
      if (!qe("Number", t)) throw new Error("Expected is not a Number");
      if (!qe("Number", n)) throw new Error("Precision is not a Number");
      super(t);
      __publicField(this, "precision");
      this.inverse = r, this.precision = n;
    }
    asymmetricMatch(t) {
      if (!qe("Number", t)) return false;
      let n = false;
      return t === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY ? n = true : n = Math.abs(this.sample - t) < 10 ** -this.precision / 2, this.inverse ? !n : n;
    }
    toString() {
      return `Number${this.inverse ? "Not" : ""}CloseTo`;
    }
    getExpectedType() {
      return "number";
    }
    toAsymmetricMatcher() {
      return [
        this.toString(),
        this.sample,
        `(${id("digit", this.precision)})`
      ].join(" ");
    }
  }
  class Fi extends Ge {
    constructor(t, n = false) {
      if (!ad(t)) throw new TypeError("SchemaMatching expected to receive a Standard Schema.");
      super(t, n);
      __publicField(this, "result");
    }
    asymmetricMatch(t) {
      const n = this.sample["~standard"].validate(t);
      if (n instanceof Promise) throw new TypeError("Async schema validation is not supported in asymmetric matchers.");
      this.result = n;
      const r = !this.result.issues || this.result.issues.length === 0;
      return this.inverse ? !r : r;
    }
    toString() {
      return `Schema${this.inverse ? "Not" : ""}Matching`;
    }
    getExpectedType() {
      return "object";
    }
    toAsymmetricMatcher() {
      var t;
      const { utils: n } = this.getMatcherContext();
      return (((t = this.result) === null || t === void 0 ? void 0 : t.issues) || []).length > 0 ? `${this.toString()} ${n.stringify(this.result, void 0, {
        printBasicPrototype: false
      })}` : this.toString();
    }
  }
  const fd = (e, t) => {
    t.addMethod(e.expect, "anything", () => new ud()), t.addMethod(e.expect, "any", (n) => new ld(n)), t.addMethod(e.expect, "stringContaining", (n) => new Pi(n)), t.addMethod(e.expect, "objectContaining", (n) => new ki(n)), t.addMethod(e.expect, "arrayContaining", (n) => new ji(n)), t.addMethod(e.expect, "stringMatching", (n) => new Ri(n)), t.addMethod(e.expect, "closeTo", (n, r) => new Di(n, r)), t.addMethod(e.expect, "schemaMatching", (n) => new Fi(n)), e.expect.not = {
      stringContaining: (n) => new Pi(n, true),
      objectContaining: (n) => new ki(n, true),
      arrayContaining: (n) => new ji(n, true),
      stringMatching: (n) => new Ri(n, true),
      closeTo: (n, r) => new Di(n, r, true),
      schemaMatching: (n) => new Fi(n, true)
    };
  };
  function Li(e, t, n) {
    const r = e.flag(t, "negate") ? "not." : "", o = `${e.flag(t, "_name")}(${n ? "expected" : ""})`, s = e.flag(t, "promise");
    return `expect(actual)${s ? `.${s}` : ""}.${r}${o}`;
  }
  function qi(e, t, n, r) {
    const o = e;
    if (o && t instanceof Promise) {
      t = t.finally(() => {
        if (!o.promises) return;
        const i = o.promises.indexOf(t);
        i !== -1 && o.promises.splice(i, 1);
      }), o.promises || (o.promises = []), o.promises.push(t);
      let s = false;
      return o.onFinished ?? (o.onFinished = []), o.onFinished.push(() => {
        if (!s) {
          var i;
          const u = (((i = globalThis.__vitest_worker__) === null || i === void 0 ? void 0 : i.onFilterStackTrace) || ((a) => a || ""))(r.stack);
          console.warn([
            `Promise returned by \`${n}\` was not awaited. `,
            "Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
            `Please remember to await the assertion.
`,
            u
          ].join(""));
        }
      }), {
        then(i, c) {
          return s = true, t.then(i, c);
        },
        catch(i) {
          return t.catch(i);
        },
        finally(i) {
          return t.finally(i);
        },
        [Symbol.toStringTag]: "Promise"
      };
    }
    return t;
  }
  function Bi(e, t) {
    var n;
    e.result || (e.result = {
      state: "fail"
    }), e.result.state = "fail", (n = e.result).errors || (n.errors = []), e.result.errors.push(Ma(t));
  }
  function Au(e, t, n) {
    return function(...r) {
      if (t !== "withTest" && e.flag(this, "_name", t), !e.flag(this, "soft")) return n.apply(this, r);
      const o = e.flag(this, "vitest-test");
      if (!o) throw new Error("expect.soft() can only be used inside a test");
      try {
        const s = n.apply(this, r);
        return s && typeof s == "object" && typeof s.then == "function" ? s.then(lh, (i) => {
          Bi(o, i);
        }) : s;
      } catch (s) {
        Bi(o, s);
      }
    };
  }
  const hd = (e, t) => {
    const { AssertionError: n } = e, r = gs();
    function o(a, l) {
      const f = (h) => {
        const p = Au(t, h, l);
        t.addMethod(e.Assertion.prototype, h, p), t.addMethod(globalThis[on].matchers, h, p);
      };
      Array.isArray(a) ? a.forEach((h) => f(h)) : f(a);
    }
    [
      "throw",
      "throws",
      "Throw"
    ].forEach((a) => {
      t.overwriteMethod(e.Assertion.prototype, a, (l) => function(...f) {
        const h = t.flag(this, "promise"), p = t.flag(this, "object"), d = t.flag(this, "negate");
        if (h === "rejects") t.flag(this, "object", () => {
          throw p;
        });
        else if (h === "resolves" && typeof p != "function") {
          if (d) return;
          {
            const g = t.flag(this, "message") || "expected promise to throw an error, but it didn't", w = {
              showDiff: false
            };
            throw new n(g, w, t.flag(this, "ssfi"));
          }
        }
        l.apply(this, f);
      });
    }), o("withTest", function(a) {
      return t.flag(this, "vitest-test", a), this;
    }), o("toEqual", function(a) {
      const l = t.flag(this, "object"), f = U(l, a, [
        ...r,
        Me
      ]);
      return this.assert(f, "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", a, l);
    }), o("toStrictEqual", function(a) {
      const l = t.flag(this, "object"), f = U(l, a, [
        ...r,
        Me,
        Ni,
        ho,
        Ii
      ], true);
      return this.assert(f, "expected #{this} to strictly equal #{exp}", "expected #{this} to not strictly equal #{exp}", a, l);
    }), o("toBe", function(a) {
      const l = this._obj, f = Object.is(l, a);
      let h = "";
      return f || (U(l, a, [
        ...r,
        Me,
        Ni,
        ho,
        Ii
      ], true) ? h = "toStrictEqual" : U(l, a, [
        ...r,
        Me
      ]) && (h = "toEqual")), this.assert(f, sd(h), "expected #{this} not to be #{exp} // Object.is equality", a, l);
    }), o("toMatchObject", function(a) {
      const l = this._obj, f = U(l, a, [
        ...r,
        Me,
        It
      ]), h = t.flag(this, "negate"), { subset: p, stripped: d } = cd(l, a, r);
      if (f && h || !f && !h) {
        const g = t.getMessage(this, [
          f,
          "expected #{this} to match object #{exp}",
          "expected #{this} to not match object #{exp}",
          a,
          p,
          false
        ]), w = d === 0 ? g : `${g}
(${d} matching ${d === 1 ? "property" : "properties"} omitted from actual)`;
        throw new n(w, {
          showDiff: true,
          expected: a,
          actual: p
        });
      }
    }), o("toMatch", function(a) {
      const l = this._obj;
      if (typeof l != "string") throw new TypeError(`.toMatch() expects to receive a string, but got ${typeof l}`);
      return this.assert(typeof a == "string" ? l.includes(a) : l.match(a), "expected #{this} to match #{exp}", "expected #{this} not to match #{exp}", a, l);
    }), o("toContain", function(a) {
      const l = this._obj;
      if (typeof Node < "u" && l instanceof Node) {
        if (!(a instanceof Node)) throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof a}`);
        return this.assert(l.contains(a), "expected #{this} to contain element #{exp}", "expected #{this} not to contain element #{exp}", a, l);
      }
      if (typeof DOMTokenList < "u" && l instanceof DOMTokenList) {
        Se(a, "class name", [
          "string"
        ]);
        const h = t.flag(this, "negate") ? l.value.replace(a, "").trim() : `${l.value} ${a}`;
        return this.assert(l.contains(a), `expected "${l.value}" to contain "${a}"`, `expected "${l.value}" not to contain "${a}"`, h, l.value);
      }
      return typeof l == "string" && typeof a == "string" ? this.assert(l.includes(a), "expected #{this} to contain #{exp}", "expected #{this} not to contain #{exp}", a, l) : (l != null && typeof l != "string" && t.flag(this, "object", Array.from(l)), this.contain(a));
    }), o("toContainEqual", function(a) {
      const l = t.flag(this, "object"), f = Array.from(l).findIndex((h) => U(h, a, r));
      this.assert(f !== -1, "expected #{this} to deep equally contain #{exp}", "expected #{this} to not deep equally contain #{exp}", a);
    }), o("toBeTruthy", function() {
      const a = t.flag(this, "object");
      this.assert(!!a, "expected #{this} to be truthy", "expected #{this} to not be truthy", true, a);
    }), o("toBeFalsy", function() {
      const a = t.flag(this, "object");
      this.assert(!a, "expected #{this} to be falsy", "expected #{this} to not be falsy", false, a);
    }), o("toBeGreaterThan", function(a) {
      const l = this._obj;
      return Se(l, "actual", [
        "number",
        "bigint"
      ]), Se(a, "expected", [
        "number",
        "bigint"
      ]), this.assert(l > a, `expected ${l} to be greater than ${a}`, `expected ${l} to be not greater than ${a}`, a, l, false);
    }), o("toBeGreaterThanOrEqual", function(a) {
      const l = this._obj;
      return Se(l, "actual", [
        "number",
        "bigint"
      ]), Se(a, "expected", [
        "number",
        "bigint"
      ]), this.assert(l >= a, `expected ${l} to be greater than or equal to ${a}`, `expected ${l} to be not greater than or equal to ${a}`, a, l, false);
    }), o("toBeLessThan", function(a) {
      const l = this._obj;
      return Se(l, "actual", [
        "number",
        "bigint"
      ]), Se(a, "expected", [
        "number",
        "bigint"
      ]), this.assert(l < a, `expected ${l} to be less than ${a}`, `expected ${l} to be not less than ${a}`, a, l, false);
    }), o("toBeLessThanOrEqual", function(a) {
      const l = this._obj;
      return Se(l, "actual", [
        "number",
        "bigint"
      ]), Se(a, "expected", [
        "number",
        "bigint"
      ]), this.assert(l <= a, `expected ${l} to be less than or equal to ${a}`, `expected ${l} to be not less than or equal to ${a}`, a, l, false);
    }), o("toBeNaN", function() {
      const a = t.flag(this, "object");
      this.assert(Number.isNaN(a), "expected #{this} to be NaN", "expected #{this} not to be NaN", Number.NaN, a);
    }), o("toBeUndefined", function() {
      const a = t.flag(this, "object");
      this.assert(a === void 0, "expected #{this} to be undefined", "expected #{this} not to be undefined", void 0, a);
    }), o("toBeNull", function() {
      const a = t.flag(this, "object");
      this.assert(a === null, "expected #{this} to be null", "expected #{this} not to be null", null, a);
    }), o("toBeNullable", function() {
      const a = t.flag(this, "object");
      this.assert(a == null, "expected #{this} to be nullish", "expected #{this} not to be nullish", null, a);
    }), o("toBeDefined", function() {
      const a = t.flag(this, "object");
      this.assert(typeof a < "u", "expected #{this} to be defined", "expected #{this} to be undefined", a);
    }), o("toBeTypeOf", function(a) {
      const l = typeof this._obj, f = a === l;
      return this.assert(f, "expected #{this} to be type of #{exp}", "expected #{this} not to be type of #{exp}", a, l);
    }), o("toBeInstanceOf", function(a) {
      return this.instanceOf(a);
    }), o("toHaveLength", function(a) {
      return this.have.length(a);
    }), o("toHaveProperty", function(...a) {
      Array.isArray(a[0]) && (a[0] = a[0].map(($) => String($).replace(/([.[\]])/g, "\\$1")).join("."));
      const l = this._obj, [f, h] = a, p = () => Object.hasOwn(l, f) ? {
        value: l[f],
        exists: true
      } : t.getPathInfo(l, f), { value: d, exists: g } = p(), w = g && (a.length === 1 || U(h, d, r)), T = a.length === 1 ? "" : ` with value ${t.objDisplay(h)}`;
      return this.assert(w, `expected #{this} to have property "${f}"${T}`, `expected #{this} to not have property "${f}"${T}`, h, g ? d : void 0);
    }), o("toBeCloseTo", function(a, l = 2) {
      const f = this._obj;
      let h = false, p = 0, d = 0;
      return a === Number.POSITIVE_INFINITY && f === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY && f === Number.NEGATIVE_INFINITY ? h = true : (p = 10 ** -l / 2, d = Math.abs(f - a), h = d < p), this.assert(h, `expected #{this} to be close to #{exp}, received difference is ${d}, but expected ${p}`, `expected #{this} to not be close to #{exp}, received difference is ${d}, but expected ${p}`, a, f, false);
    });
    function s(a) {
      if (!lt(a._obj)) throw new TypeError(`${t.inspect(a._obj)} is not a spy or a call to a spy!`);
    }
    function i(a) {
      return s(a), a._obj;
    }
    o([
      "toHaveBeenCalledTimes",
      "toBeCalledTimes"
    ], function(a) {
      const l = i(this), f = l.getMockName(), h = l.mock.calls.length;
      return this.assert(h === a, `expected "${f}" to be called #{exp} times, but got ${h} times`, `expected "${f}" to not be called #{exp} times`, a, h, false);
    }), o("toHaveBeenCalledOnce", function() {
      const a = i(this), l = a.getMockName(), f = a.mock.calls.length;
      return this.assert(f === 1, `expected "${l}" to be called once, but got ${f} times`, `expected "${l}" to not be called once`, 1, f, false);
    }), o([
      "toHaveBeenCalled",
      "toBeCalled"
    ], function() {
      const a = i(this), l = a.getMockName(), f = a.mock.calls.length, h = f > 0, p = t.flag(this, "negate");
      let d = t.getMessage(this, [
        h,
        `expected "${l}" to be called at least once`,
        `expected "${l}" to not be called at all, but actually been called ${f} times`,
        true,
        h
      ]);
      if (h && p && (d = yr(a, d)), h && p || !h && !p) throw new n(d);
    });
    function c(a, l) {
      return a.length === l.length && a.every((f, h) => U(f, l[h], [
        ...r,
        Me
      ]));
    }
    o([
      "toHaveBeenCalledWith",
      "toBeCalledWith"
    ], function(...a) {
      const l = i(this), f = l.getMockName(), h = l.mock.calls.some((g) => c(g, a)), p = t.flag(this, "negate"), d = t.getMessage(this, [
        h,
        `expected "${f}" to be called with arguments: #{exp}`,
        `expected "${f}" to not be called with arguments: #{exp}`,
        a
      ]);
      if (h && p || !h && !p) throw new n(yr(l, d, a));
    }), o("toHaveBeenCalledExactlyOnceWith", function(...a) {
      const l = i(this), f = l.getMockName(), h = l.mock.calls.length, d = l.mock.calls.some((T) => c(T, a)) && h === 1, g = t.flag(this, "negate"), w = t.getMessage(this, [
        d,
        `expected "${f}" to be called once with arguments: #{exp}`,
        `expected "${f}" to not be called once with arguments: #{exp}`,
        a
      ]);
      if (d && g || !d && !g) throw new n(yr(l, w, a));
    }), o([
      "toHaveBeenNthCalledWith",
      "nthCalledWith"
    ], function(a, ...l) {
      const f = i(this), h = f.getMockName(), p = f.mock.calls[a - 1], d = f.mock.calls.length, g = a <= d;
      this.assert(p && c(p, l), `expected ${Gt(a)} "${h}" call to have been called with #{exp}${g ? "" : `, but called only ${d} times`}`, `expected ${Gt(a)} "${h}" call to not have been called with #{exp}`, l, p, g);
    }), o([
      "toHaveBeenLastCalledWith",
      "lastCalledWith"
    ], function(...a) {
      const l = i(this), f = l.getMockName(), h = l.mock.calls.at(-1);
      this.assert(h && c(h, a), `expected last "${f}" call to have been called with #{exp}`, `expected last "${f}" call to not have been called with #{exp}`, a, h);
    });
    function u(a, l, f) {
      const h = a.mock.invocationCallOrder, p = l.mock.invocationCallOrder;
      return h.length === 0 ? !f : p.length === 0 ? false : h[0] < p[0];
    }
    o([
      "toHaveBeenCalledBefore"
    ], function(a, l = true) {
      const f = i(this);
      if (!lt(a)) throw new TypeError(`${t.inspect(a)} is not a spy or a call to a spy`);
      this.assert(u(f, a, l), `expected "${f.getMockName()}" to have been called before "${a.getMockName()}"`, `expected "${f.getMockName()}" to not have been called before "${a.getMockName()}"`, a, f);
    }), o([
      "toHaveBeenCalledAfter"
    ], function(a, l = true) {
      const f = i(this);
      if (!lt(a)) throw new TypeError(`${t.inspect(a)} is not a spy or a call to a spy`);
      this.assert(u(a, f, l), `expected "${f.getMockName()}" to have been called after "${a.getMockName()}"`, `expected "${f.getMockName()}" to not have been called after "${a.getMockName()}"`, a, f);
    }), o([
      "toThrow",
      "toThrowError"
    ], function(a) {
      if (typeof a == "string" || typeof a > "u" || a instanceof RegExp) return this.throws(a === "" ? /^$/ : a);
      const l = this._obj, f = t.flag(this, "promise"), h = t.flag(this, "negate");
      let p = null;
      if (f === "rejects") p = l;
      else if (f === "resolves" && typeof l != "function") {
        if (h) return;
        {
          const d = t.flag(this, "message") || "expected promise to throw an error, but it didn't", g = {
            showDiff: false
          };
          throw new n(d, g, t.flag(this, "ssfi"));
        }
      } else {
        let d = false;
        try {
          l();
        } catch (g) {
          d = true, p = g;
        }
        if (!d && !h) {
          const g = t.flag(this, "message") || "expected function to throw an error, but it didn't", w = {
            showDiff: false
          };
          throw new n(g, w, t.flag(this, "ssfi"));
        }
      }
      if (typeof a == "function") {
        const d = a.name || a.prototype.constructor.name;
        return this.assert(p && p instanceof a, `expected error to be instance of ${d}`, `expected error not to be instance of ${d}`, a, p);
      }
      if (a instanceof Error) {
        const d = U(p, a, [
          ...r,
          Me
        ]);
        return this.assert(d, "expected a thrown error to be #{exp}", "expected a thrown error not to be #{exp}", a, p);
      }
      if (typeof a == "object" && "asymmetricMatch" in a && typeof a.asymmetricMatch == "function") {
        const d = a;
        return this.assert(p && d.asymmetricMatch(p), "expected error to match asymmetric matcher", "expected error not to match asymmetric matcher", d, p);
      }
      throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof a}"`);
    }), [
      {
        name: "toHaveResolved",
        condition: (a) => a.mock.settledResults.length > 0 && a.mock.settledResults.some(({ type: l }) => l === "fulfilled"),
        action: "resolved"
      },
      {
        name: [
          "toHaveReturned",
          "toReturn"
        ],
        condition: (a) => a.mock.calls.length > 0 && a.mock.results.some(({ type: l }) => l !== "throw"),
        action: "called"
      }
    ].forEach(({ name: a, condition: l, action: f }) => {
      o(a, function() {
        const h = i(this), p = h.getMockName(), d = l(h);
        this.assert(d, `expected "${p}" to be successfully ${f} at least once`, `expected "${p}" to not be successfully ${f}`, d, !d, false);
      });
    }), [
      {
        name: "toHaveResolvedTimes",
        condition: (a, l) => a.mock.settledResults.reduce((f, { type: h }) => h === "fulfilled" ? ++f : f, 0) === l,
        action: "resolved"
      },
      {
        name: [
          "toHaveReturnedTimes",
          "toReturnTimes"
        ],
        condition: (a, l) => a.mock.results.reduce((f, { type: h }) => h === "throw" ? f : ++f, 0) === l,
        action: "called"
      }
    ].forEach(({ name: a, condition: l, action: f }) => {
      o(a, function(h) {
        const p = i(this), d = p.getMockName(), g = l(p, h);
        this.assert(g, `expected "${d}" to be successfully ${f} ${h} times`, `expected "${d}" to not be successfully ${f} ${h} times`, `expected resolved times: ${h}`, `received resolved times: ${g}`, false);
      });
    }), [
      {
        name: "toHaveResolvedWith",
        condition: (a, l) => a.mock.settledResults.some(({ type: f, value: h }) => f === "fulfilled" && U(l, h)),
        action: "resolve"
      },
      {
        name: [
          "toHaveReturnedWith",
          "toReturnWith"
        ],
        condition: (a, l) => a.mock.results.some(({ type: f, value: h }) => f === "return" && U(l, h)),
        action: "return"
      }
    ].forEach(({ name: a, condition: l, action: f }) => {
      o(a, function(h) {
        const p = i(this), d = l(p, h), g = t.flag(this, "negate");
        if (d && g || !d && !g) {
          const w = p.getMockName(), T = t.getMessage(this, [
            d,
            `expected "${w}" to ${f} with: #{exp} at least once`,
            `expected "${w}" to not ${f} with: #{exp}`,
            h
          ]), $ = f === "return" ? p.mock.results : p.mock.settledResults;
          throw new n(pd(p, $, T, h));
        }
      });
    }), [
      {
        name: "toHaveLastResolvedWith",
        condition: (a, l) => {
          const f = a.mock.settledResults.at(-1);
          return !!(f && f.type === "fulfilled" && U(f.value, l));
        },
        action: "resolve"
      },
      {
        name: [
          "toHaveLastReturnedWith",
          "lastReturnedWith"
        ],
        condition: (a, l) => {
          const f = a.mock.results.at(-1);
          return !!(f && f.type === "return" && U(f.value, l));
        },
        action: "return"
      }
    ].forEach(({ name: a, condition: l, action: f }) => {
      o(a, function(h) {
        const p = i(this), g = (f === "return" ? p.mock.results : p.mock.settledResults).at(-1), w = p.getMockName();
        this.assert(l(p, h), `expected last "${w}" call to ${f} #{exp}`, `expected last "${w}" call to not ${f} #{exp}`, h, g == null ? void 0 : g.value);
      });
    }), [
      {
        name: "toHaveNthResolvedWith",
        condition: (a, l, f) => {
          const h = a.mock.settledResults[l - 1];
          return h && h.type === "fulfilled" && U(h.value, f);
        },
        action: "resolve"
      },
      {
        name: [
          "toHaveNthReturnedWith",
          "nthReturnedWith"
        ],
        condition: (a, l, f) => {
          const h = a.mock.results[l - 1];
          return h && h.type === "return" && U(h.value, f);
        },
        action: "return"
      }
    ].forEach(({ name: a, condition: l, action: f }) => {
      o(a, function(h, p) {
        const d = i(this), g = d.getMockName(), T = (f === "return" ? d.mock.results : d.mock.settledResults)[h - 1], $ = `${Gt(h)} call`;
        this.assert(l(d, h, p), `expected ${$} "${g}" call to ${f} #{exp}`, `expected ${$} "${g}" call to not ${f} #{exp}`, p, T == null ? void 0 : T.value);
      });
    }), o("withContext", function(a) {
      for (const l in a) t.flag(this, l, a[l]);
      return this;
    }), t.addProperty(e.Assertion.prototype, "resolves", function() {
      const l = new Error("resolves");
      t.flag(this, "promise", "resolves"), t.flag(this, "error", l);
      const f = t.flag(this, "vitest-test"), h = t.flag(this, "object");
      if (t.flag(this, "poll")) throw new SyntaxError("expect.poll() is not supported in combination with .resolves");
      if (typeof (h == null ? void 0 : h.then) != "function") throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof h}'.`);
      const p = new Proxy(this, {
        get: (d, g, w) => {
          const T = Reflect.get(d, g, w);
          return typeof T != "function" ? T instanceof e.Assertion ? p : T : (...$) => {
            t.flag(this, "_name", g);
            const A = h.then((O) => (t.flag(this, "object", O), T.call(this, ...$)), (O) => {
              const C = new n(`promise rejected "${t.inspect(O)}" instead of resolving`, {
                showDiff: false
              });
              throw C.cause = O, C.stack = l.stack.replace(l.message, C.message), C;
            });
            return qi(f, A, Li(t, this, !!$.length), l);
          };
        }
      });
      return p;
    }), t.addProperty(e.Assertion.prototype, "rejects", function() {
      const l = new Error("rejects");
      t.flag(this, "promise", "rejects"), t.flag(this, "error", l);
      const f = t.flag(this, "vitest-test"), h = t.flag(this, "object"), p = typeof h == "function" ? h() : h;
      if (t.flag(this, "poll")) throw new SyntaxError("expect.poll() is not supported in combination with .rejects");
      if (typeof (p == null ? void 0 : p.then) != "function") throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof p}'.`);
      const d = new Proxy(this, {
        get: (g, w, T) => {
          const $ = Reflect.get(g, w, T);
          return typeof $ != "function" ? $ instanceof e.Assertion ? d : $ : (...A) => {
            t.flag(this, "_name", w);
            const O = p.then((C) => {
              const N = new n(`promise resolved "${t.inspect(C)}" instead of rejecting`, {
                showDiff: true,
                expected: new Error("rejected promise"),
                actual: C
              });
              throw N.stack = l.stack.replace(l.message, N.message), N;
            }, (C) => (t.flag(this, "object", C), $.call(this, ...A)));
            return qi(f, O, Li(t, this, !!A.length), l);
          };
        }
      });
      return d;
    });
  };
  function Gt(e) {
    const t = e % 10, n = e % 100;
    return t === 1 && n !== 11 ? `${e}st` : t === 2 && n !== 12 ? `${e}nd` : t === 3 && n !== 13 ? `${e}rd` : `${e}th`;
  }
  function yr(e, t, n) {
    return e.mock.calls.length && (t += ie.gray(`

Received: 

${e.mock.calls.map((r, o) => {
      let s = ie.bold(`  ${Gt(o + 1)} ${e.getMockName()} call:

`);
      return n ? s += Ct(n, r, {
        omitAnnotationLines: true
      }) : s += ve(r).split(`
`).map((i) => `    ${i}`).join(`
`), s += `
`, s;
    }).join(`
`)}`)), t += ie.gray(`

Number of calls: ${ie.bold(e.mock.calls.length)}
`), t;
  }
  function pd(e, t, n, r) {
    return t.length && (n += ie.gray(`

Received: 

${t.map((o, s) => {
      let i = ie.bold(`  ${Gt(s + 1)} ${e.getMockName()} call return:

`);
      return r ? i += Ct(r, o.value, {
        omitAnnotationLines: true
      }) : i += ve(o).split(`
`).map((c) => `    ${c}`).join(`
`), i += `
`, i;
    }).join(`
`)}`)), n += ie.gray(`

Number of calls: ${ie.bold(e.mock.calls.length)}
`), n;
  }
  function dd(e, t) {
    const n = e._obj, r = le.flag(e, "negate"), o = le.flag(e, "promise") || "", s = le.flag(e, "message"), i = {
      ...$u(),
      diff: Ct,
      stringify: ve,
      iterableEquality: Me,
      subsetEquality: It
    };
    let c = le.flag(e, "vitest-test");
    const u = (c == null ? void 0 : c.fullTestName) ?? "";
    return (c == null ? void 0 : c.type) !== "test" && (c = void 0), {
      state: {
        ...Kt(t),
        task: c,
        currentTestName: u,
        customTesters: gs(),
        isNot: r,
        utils: i,
        promise: o,
        equals: U,
        suppressedErrors: [],
        soft: le.flag(e, "soft"),
        poll: le.flag(e, "poll")
      },
      isNot: r,
      obj: n,
      customMessage: s
    };
  }
  class zi extends Error {
    constructor(t, n, r) {
      super(t), this.actual = n, this.expected = r;
    }
  }
  function md(e, t, n) {
    return (r, o) => {
      Object.entries(n).forEach(([s, i]) => {
        function c(...f) {
          const { state: h, isNot: p, obj: d, customMessage: g } = dd(this, t), w = i.call(h, d, ...f);
          if (w && typeof w == "object" && typeof w.then == "function") return w.then(({ pass: N, message: x, actual: L, expected: H }) => {
            if (N && p || !N && !p) {
              const D = g ?? x();
              throw new zi(D, L, H);
            }
          });
          const { pass: T, message: $, actual: A, expected: O } = w;
          if (T && p || !T && !p) {
            const C = g ?? $();
            throw new zi(C, A, O);
          }
        }
        const u = Au(o, s, c);
        o.addMethod(globalThis[on].matchers, s, u), o.addMethod(e.Assertion.prototype, s, u);
        class a extends Ge {
          constructor(h = false, ...p) {
            super(p, h);
          }
          asymmetricMatch(h) {
            const { pass: p } = i.call(this.getMatcherContext(t), h, ...this.sample);
            return this.inverse ? !p : p;
          }
          toString() {
            return `${this.inverse ? "not." : ""}${s}`;
          }
          getExpectedType() {
            return "any";
          }
          toAsymmetricMatcher() {
            return `${this.toString()}<${this.sample.map((h) => ve(h)).join(", ")}>`;
          }
        }
        const l = (...f) => new a(false, ...f);
        Object.defineProperty(t, s, {
          configurable: true,
          enumerable: true,
          value: l,
          writable: true
        }), Object.defineProperty(t.not, s, {
          configurable: true,
          enumerable: true,
          value: (...f) => new a(true, ...f),
          writable: true
        }), Object.defineProperty(globalThis[ds], s, {
          configurable: true,
          enumerable: true,
          value: l,
          writable: true
        });
      });
    };
  }
  const gd = (e, t) => {
    t.addMethod(e.expect, "extend", (n, r) => {
      yt(md(e, n, r));
    });
  }, Vi = /* @__PURE__ */ Symbol("vitest:SAFE_TIMERS");
  function Pt() {
    const { setTimeout: e, setInterval: t, clearInterval: n, clearTimeout: r, setImmediate: o, clearImmediate: s, queueMicrotask: i } = globalThis[Vi] || globalThis, { nextTick: c } = globalThis[Vi] || globalThis.process || {};
    return {
      nextTick: c,
      setTimeout: e,
      setInterval: t,
      clearInterval: n,
      clearTimeout: r,
      setImmediate: o,
      clearImmediate: s,
      queueMicrotask: i
    };
  }
  function yd(e, t = setTimeout) {
    return new Promise((n) => t(n, e));
  }
  const bd = /^[A-Za-z]:\//;
  function wd(e = "") {
    return e && e.replace(/\\/g, "/").replace(bd, (t) => t.toUpperCase());
  }
  const Td = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
  function Ed() {
    return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/";
  }
  const Sd = function(...e) {
    e = e.map((r) => wd(r));
    let t = "", n = false;
    for (let r = e.length - 1; r >= -1 && !n; r--) {
      const o = r >= 0 ? e[r] : Ed();
      !o || o.length === 0 || (t = `${o}/${t}`, n = Wi(o));
    }
    return t = vd(t, !n), n && !Wi(t) ? `/${t}` : t.length > 0 ? t : ".";
  };
  function vd(e, t) {
    let n = "", r = 0, o = -1, s = 0, i = null;
    for (let c = 0; c <= e.length; ++c) {
      if (c < e.length) i = e[c];
      else {
        if (i === "/") break;
        i = "/";
      }
      if (i === "/") {
        if (!(o === c - 1 || s === 1)) if (s === 2) {
          if (n.length < 2 || r !== 2 || n[n.length - 1] !== "." || n[n.length - 2] !== ".") {
            if (n.length > 2) {
              const u = n.lastIndexOf("/");
              u === -1 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), o = c, s = 0;
              continue;
            } else if (n.length > 0) {
              n = "", r = 0, o = c, s = 0;
              continue;
            }
          }
          t && (n += n.length > 0 ? "/.." : "..", r = 2);
        } else n.length > 0 ? n += `/${e.slice(o + 1, c)}` : n = e.slice(o + 1, c), r = c - o - 1;
        o = c, s = 0;
      } else i === "." && s !== -1 ? ++s : s = -1;
    }
    return n;
  }
  const Wi = function(e) {
    return Td.test(e);
  };
  var Ui = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $d = new Uint8Array(64), _d = new Uint8Array(128);
  for (let e = 0; e < Ui.length; e++) {
    const t = Ui.charCodeAt(e);
    $d[e] = t, _d[t] = e;
  }
  const Cu = /^\s*at .*(?:\S:\d+|\(native\))/m, Od = /^(?:eval@)?(?:\[native code\])?$/;
  function Nu(e) {
    if (!e.includes(":")) return [
      e
    ];
    const n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
    if (!n) return [
      e
    ];
    let r = n[1];
    if (r.startsWith("async ") && (r = r.slice(6)), r.startsWith("http:") || r.startsWith("https:")) {
      const o = new URL(r);
      o.searchParams.delete("import"), o.searchParams.delete("browserv"), r = o.pathname + o.hash + o.search;
    }
    if (r.startsWith("/@fs/")) {
      const o = /^\/@fs\/[a-zA-Z]:\//.test(r);
      r = r.slice(o ? 5 : 4);
    }
    return [
      r,
      n[2] || void 0,
      n[3] || void 0
    ];
  }
  function xd(e) {
    let t = e.trim();
    if (Od.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@"))) return null;
    let n = -1, r = "", o;
    for (let u = 0; u < t.length; u++) if (t[u] === "@") {
      const a = t.slice(u + 1);
      if (a.includes(":") && a.length >= 3) {
        n = u, r = a, o = u > 0 ? t.slice(0, u) : void 0;
        break;
      }
    }
    if (n === -1 || !r.includes(":") || r.length < 3) return null;
    const [s, i, c] = Nu(r);
    return !s || !i || !c ? null : {
      file: s,
      method: o || "",
      line: Number.parseInt(i),
      column: Number.parseInt(c)
    };
  }
  function Iu(e) {
    const t = e.trim();
    return Cu.test(t) ? Md(t) : xd(t);
  }
  function Md(e) {
    let t = e.trim();
    if (!Cu.test(t)) return null;
    t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
    let n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
    const r = n.match(/ (\(.+\)$)/);
    n = r ? n.replace(r[0], "") : n;
    const [o, s, i] = Nu(r ? r[1] : n);
    let c = r && n || "", u = o && [
      "eval",
      "<anonymous>"
    ].includes(o) ? void 0 : o;
    return !u || !s || !i ? null : (c.startsWith("async ") && (c = c.slice(6)), u.startsWith("file://") && (u = u.slice(7)), u = u.startsWith("node:") || u.startsWith("internal:") ? u : Sd(u), c && (c = c.replace(/__vite_ssr_import_\d+__\./g, "").replace(/(Object\.)?__vite_ssr_export_default__\s?/g, "")), {
      method: c,
      file: u,
      line: Number.parseInt(s),
      column: Number.parseInt(i)
    });
  }
  const Ad = /^[A-Za-z]:\//;
  function Cd(e = "") {
    return e && e.replace(/\\/g, "/").replace(Ad, (t) => t.toUpperCase());
  }
  const Nd = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
  function Id() {
    return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/";
  }
  const Pu = function(...e) {
    e = e.map((r) => Cd(r));
    let t = "", n = false;
    for (let r = e.length - 1; r >= -1 && !n; r--) {
      const o = r >= 0 ? e[r] : Id();
      !o || o.length === 0 || (t = `${o}/${t}`, n = Ki(o));
    }
    return t = Pd(t, !n), n && !Ki(t) ? `/${t}` : t.length > 0 ? t : ".";
  };
  function Pd(e, t) {
    let n = "", r = 0, o = -1, s = 0, i = null;
    for (let c = 0; c <= e.length; ++c) {
      if (c < e.length) i = e[c];
      else {
        if (i === "/") break;
        i = "/";
      }
      if (i === "/") {
        if (!(o === c - 1 || s === 1)) if (s === 2) {
          if (n.length < 2 || r !== 2 || n[n.length - 1] !== "." || n[n.length - 2] !== ".") {
            if (n.length > 2) {
              const u = n.lastIndexOf("/");
              u === -1 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), o = c, s = 0;
              continue;
            } else if (n.length > 0) {
              n = "", r = 0, o = c, s = 0;
              continue;
            }
          }
          t && (n += n.length > 0 ? "/.." : "..", r = 2);
        } else n.length > 0 ? n += `/${e.slice(o + 1, c)}` : n = e.slice(o + 1, c), r = c - o - 1;
        o = c, s = 0;
      } else i === "." && s !== -1 ? ++s : s = -1;
    }
    return n;
  }
  const Ki = function(e) {
    return Nd.test(e);
  };
  function ku(e, t) {
    function n(o) {
      const s = function(...i) {
        return t.apply(o, i);
      };
      Object.assign(s, t), s.withContext = () => s.bind(o), s.setContext = (i, c) => {
        o[i] = c;
      }, s.mergeContext = (i) => {
        Object.assign(o, i);
      };
      for (const i of e) Object.defineProperty(s, i, {
        get() {
          return n({
            ...o,
            [i]: true
          });
        }
      });
      return s;
    }
    const r = n({});
    return r.fn = t, r;
  }
  function ju(e, t) {
    const n = t.split(`
`).slice(1);
    for (const r of n) {
      const o = Iu(r);
      if (o && o.file === e) return o;
    }
  }
  function kd(e) {
    const t = [
      e.name
    ];
    let n = e;
    for (; n == null ? void 0 : n.suite; ) n = n.suite, (n == null ? void 0 : n.name) && t.unshift(n.name);
    return n !== e.file && t.unshift(e.file.name), t;
  }
  function pn(e, t = " > ") {
    return e.filter((n) => n !== void 0).join(t);
  }
  class jd extends Error {
    constructor(t, n, r) {
      super(t);
      __publicField(this, "code", "VITEST_PENDING");
      __publicField(this, "taskId");
      this.message = t, this.note = r, this.taskId = n.id;
    }
  }
  const Rd = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), Du = /* @__PURE__ */ new WeakMap();
  function Dd(e, t) {
    Rd.set(e, t);
  }
  function Fd(e, t) {
    Ru.set(e, t);
  }
  function Ld(e) {
    return Ru.get(e);
  }
  function qd(e, t) {
    Du.set(e, t);
  }
  function Bd(e) {
    return Du.get(e);
  }
  function zd(e, t) {
    const n = t.reduce((s, i) => (s[i.prop] = i, s), {}), r = {};
    e.forEach((s) => {
      const i = n[s.prop] || {
        ...s
      };
      r[i.prop] = i;
    });
    for (const s in r) {
      var o;
      const i = r[s];
      i.deps = (o = i.deps) === null || o === void 0 ? void 0 : o.map((c) => r[c.prop]);
    }
    return Object.values(r);
  }
  function Fu(e, t, n) {
    const r = [
      "auto",
      "injected",
      "scope"
    ], o = Object.entries(e).map(([s, i]) => {
      const c = {
        value: i
      };
      if (Array.isArray(i) && i.length >= 2 && vt(i[1]) && Object.keys(i[1]).some((a) => r.includes(a))) {
        var u;
        Object.assign(c, i[1]);
        const a = i[0];
        c.value = c.injected ? ((u = n.injectValue) === null || u === void 0 ? void 0 : u.call(n, s)) ?? a : a;
      }
      return c.scope = c.scope || "test", c.scope === "worker" && !n.getWorkerContext && (c.scope = "file"), c.prop = s, c.isFn = typeof c.value == "function", c;
    });
    return Array.isArray(t.fixtures) ? t.fixtures = t.fixtures.concat(o) : t.fixtures = o, o.forEach((s) => {
      if (s.isFn) {
        const c = qu(s.value);
        if (c.length && (s.deps = t.fixtures.filter(({ prop: u }) => u !== s.prop && c.includes(u))), s.scope !== "test") {
          var i;
          (i = s.deps) === null || i === void 0 || i.forEach((u) => {
            if (u.isFn && !(s.scope === "worker" && u.scope === "worker") && !(s.scope === "file" && u.scope !== "test")) throw new SyntaxError(`cannot use the ${u.scope} fixture "${u.prop}" inside the ${s.scope} fixture "${s.prop}"`);
          });
        }
      }
    }), t;
  }
  const br = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map();
  function bs(e, t, n) {
    return (r) => {
      const o = r || n;
      if (!o) return t({});
      const s = Ld(o);
      if (!(s == null ? void 0 : s.length)) return t(o);
      const i = qu(t), c = s.some(({ auto: p }) => p);
      if (!i.length && !c) return t(o);
      br.get(o) || br.set(o, /* @__PURE__ */ new Map());
      const u = br.get(o);
      $t.has(o) || $t.set(o, []);
      const a = $t.get(o), l = s.filter(({ prop: p, auto: d }) => d || i.includes(p)), f = Lu(l);
      if (!f.length) return t(o);
      async function h() {
        for (const p of f) {
          if (u.has(p)) continue;
          const d = await Vd(e, p, o, a);
          o[p.prop] = d, u.set(p, d), p.scope === "test" && a.unshift(() => {
            u.delete(p);
          });
        }
      }
      return h().then(() => t(o));
    };
  }
  const dn = /* @__PURE__ */ new WeakMap();
  function Vd(e, t, n, r) {
    var o;
    const s = um(n.task.file), i = (o = e.getWorkerContext) === null || o === void 0 ? void 0 : o.call(e);
    if (!t.isFn) {
      var c;
      if (s[c = t.prop] ?? (s[c] = t.value), i) {
        var u;
        i[u = t.prop] ?? (i[u] = t.value);
      }
      return t.value;
    }
    if (t.scope === "test") return Gi(t.value, n, r);
    if (dn.has(t)) return dn.get(t);
    let a;
    if (t.scope === "worker") {
      if (!i) throw new TypeError("[@vitest/runner] The worker context is not available in the current test runner. Please, provide the `getWorkerContext` method when initiating the runner.");
      a = i;
    } else a = s;
    if (t.prop in a) return a[t.prop];
    $t.has(a) || $t.set(a, []);
    const l = $t.get(a), f = Gi(t.value, a, l).then((h) => (a[t.prop] = h, dn.delete(t), h));
    return dn.set(t, f), f;
  }
  async function Gi(e, t, n) {
    const r = ei();
    let o = false;
    const s = e(t, async (i) => {
      o = true, r.resolve(i);
      const c = ei();
      n.push(async () => {
        c.resolve(), await s;
      }), await c;
    }).catch((i) => {
      if (!o) {
        r.reject(i);
        return;
      }
      throw i;
    });
    return r;
  }
  function Lu(e, t = /* @__PURE__ */ new Set(), n = []) {
    return e.forEach((r) => {
      if (!n.includes(r)) {
        if (!r.isFn || !r.deps) {
          n.push(r);
          return;
        }
        if (t.has(r)) throw new Error(`Circular fixture dependency detected: ${r.prop} <- ${[
          ...t
        ].reverse().map((o) => o.prop).join(" <- ")}`);
        t.add(r), Lu(r.deps, t, n), n.push(r), t.clear();
      }
    }), n;
  }
  function qu(e) {
    let t = Wd(e.toString());
    /__async\((?:this|null), (?:null|arguments|\[[_0-9, ]*\]), function\*/.test(t) && (t = t.split(/__async\((?:this|null),/)[1]);
    const n = t.match(/[^(]*\(([^)]*)/);
    if (!n) return [];
    const r = Yi(n[1]);
    if (!r.length) return [];
    let o = r[0];
    if ("__VITEST_FIXTURE_INDEX__" in e && (o = r[e.__VITEST_FIXTURE_INDEX__], !o)) return [];
    if (!(o[0] === "{" && o.endsWith("}"))) throw new Error(`The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "${o}".`);
    const s = o.slice(1, -1).replace(/\s/g, ""), i = Yi(s).map((u) => u.replace(/:.*|=.*/g, "")), c = i.at(-1);
    if (c && c.startsWith("...")) throw new Error(`Rest parameters are not supported in fixtures, received "${c}".`);
    return i;
  }
  function Wd(e) {
    const t = [];
    let n = "none";
    for (let r = 0; r < e.length; ++r) n === "singleline" ? e[r] === `
` && (n = "none") : n === "multiline" ? e[r - 1] === "*" && e[r] === "/" && (n = "none") : n === "none" && (e[r] === "/" && e[r + 1] === "/" ? n = "singleline" : e[r] === "/" && e[r + 1] === "*" ? (n = "multiline", r += 2) : t.push(e[r]));
    return t.join("");
  }
  function Yi(e) {
    const t = [], n = [];
    let r = 0;
    for (let s = 0; s < e.length; s++) if (e[s] === "{" || e[s] === "[") n.push(e[s] === "{" ? "}" : "]");
    else if (e[s] === n.at(-1)) n.pop();
    else if (!n.length && e[s] === ",") {
      const i = e.substring(r, s).trim();
      i && t.push(i), r = s + 1;
    }
    const o = e.substring(r).trim();
    return o && t.push(o), t;
  }
  function Ht() {
    return sn().config.hookTimeout;
  }
  const Bu = /* @__PURE__ */ Symbol.for("VITEST_CLEANUP_TIMEOUT"), zu = /* @__PURE__ */ Symbol.for("VITEST_CLEANUP_STACK_TRACE");
  Ud = function(e, t = Ht()) {
    Se(e, '"beforeAll" callback', [
      "function"
    ]);
    const n = new Error("STACK_TRACE_ERROR");
    return dt().on("beforeAll", Object.assign(mt(e, t, true, n), {
      [Bu]: t,
      [zu]: n
    }));
  };
  Kd = function(e, t) {
    return Se(e, '"afterAll" callback', [
      "function"
    ]), dt().on("afterAll", mt(e, t ?? Ht(), true, new Error("STACK_TRACE_ERROR")));
  };
  Gd = function(e, t = Ht()) {
    Se(e, '"beforeEach" callback', [
      "function"
    ]);
    const n = new Error("STACK_TRACE_ERROR"), r = sn();
    return dt().on("beforeEach", Object.assign(mt(bs(r, e), t ?? Ht(), true, n, Ts), {
      [Bu]: t,
      [zu]: n
    }));
  };
  Yd = function(e, t) {
    Se(e, '"afterEach" callback', [
      "function"
    ]);
    const n = sn();
    return dt().on("afterEach", mt(bs(n, e), t ?? Ht(), true, new Error("STACK_TRACE_ERROR"), Ts));
  };
  Et = em();
  Jd = ws(function(e, t, n) {
    dt().test.fn.call(this, ot(e), t, n);
  });
  vy = Et;
  $y = Jd;
  let Ue, Vu, Xd;
  function Wu(e, t) {
    if (!e) throw new Error(`Vitest failed to find ${t}. One of the following is possible:
- "vitest" is imported directly without running "vitest" command
- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)
- "vitest" is imported inside Vite / Vitest config file
- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues
`);
  }
  function sn() {
    return Wu(Ue, "the runner"), Ue;
  }
  function dt() {
    const e = Ne.currentSuite || Vu;
    return Wu(e, "the current suite"), e;
  }
  function Hd() {
    return {
      beforeAll: [],
      afterAll: [],
      beforeEach: [],
      afterEach: []
    };
  }
  function _t(e, t) {
    if (t != null && typeof t == "object") throw new TypeError('Signature "test(name, fn, { ... })" was deprecated in Vitest 3 and removed in Vitest 4. Please, provide options as a second argument instead.');
    let n = {}, r;
    if (typeof t == "number" ? n = {
      timeout: t
    } : typeof e == "object" && (n = e), typeof e == "function") {
      if (typeof t == "function") throw new TypeError("Cannot use two functions as arguments. Please use the second argument for options.");
      r = e;
    } else typeof t == "function" && (r = t);
    return {
      options: n,
      handler: r
    };
  }
  function Zd(e, t = () => {
  }, n, r, o, s) {
    const i = [];
    let c;
    p();
    const u = function(w = "", T = {}) {
      var $, A, O;
      const C = (T == null ? void 0 : T.timeout) ?? Ue.config.testTimeout, N = ($ = Ne.currentSuite) === null || $ === void 0 ? void 0 : $.suite, x = {
        id: "",
        name: w,
        fullName: pn([
          (N == null ? void 0 : N.fullName) ?? ((A = Ne.currentSuite) === null || A === void 0 || (A = A.file) === null || A === void 0 ? void 0 : A.fullName),
          w
        ]),
        fullTestName: pn([
          N == null ? void 0 : N.fullTestName,
          w
        ]),
        suite: N,
        each: T.each,
        fails: T.fails,
        context: void 0,
        type: "test",
        file: (N == null ? void 0 : N.file) ?? ((O = Ne.currentSuite) === null || O === void 0 ? void 0 : O.file),
        timeout: C,
        retry: T.retry ?? Ue.config.retry,
        repeats: T.repeats,
        mode: T.only ? "only" : T.skip ? "skip" : T.todo ? "todo" : "run",
        meta: T.meta ?? /* @__PURE__ */ Object.create(null),
        annotations: [],
        artifacts: []
      }, L = T.handler;
      x.mode === "run" && !L && (x.mode = "todo"), (T.concurrent || !T.sequential && Ue.config.sequence.concurrent) && (x.concurrent = true), x.shuffle = o == null ? void 0 : o.shuffle;
      const H = im(x, Ue);
      Object.defineProperty(x, "context", {
        value: H,
        enumerable: false
      }), Fd(H, T.fixtures);
      const D = Error.stackTraceLimit;
      Error.stackTraceLimit = 15;
      const G = new Error("STACK_TRACE_ERROR");
      if (Error.stackTraceLimit = D, L && Dd(x, mt(Qd(bs(Ue, L, H), x), C, false, G, (te, ce) => Ts([
        H
      ], ce))), Ue.config.includeTaskLocation) {
        const te = G.stack, ce = ju(Xd, te);
        ce && (x.location = {
          line: ce.line,
          column: ce.column
        });
      }
      return i.push(x), x;
    }, a = ws(function(w, T, $) {
      let { options: A, handler: O } = _t(T, $);
      typeof o == "object" && (A = Object.assign({}, o, A)), A.concurrent = this.concurrent || !this.sequential && (A == null ? void 0 : A.concurrent), A.sequential = this.sequential || !this.concurrent && (A == null ? void 0 : A.sequential);
      const C = u(ot(w), {
        ...this,
        ...A,
        handler: O
      });
      C.type = "test";
    });
    let l = s;
    const f = {
      type: "collector",
      name: e,
      mode: n,
      suite: c,
      options: o,
      test: a,
      tasks: i,
      collect: g,
      task: u,
      clear: d,
      on: h,
      fixtures() {
        return l;
      },
      scoped(w) {
        const T = Fu(w, {
          fixtures: l
        }, Ue);
        T.fixtures && (l = T.fixtures);
      }
    };
    function h(w, ...T) {
      Bd(c)[w].push(...T);
    }
    function p(w) {
      var T, $, A;
      typeof o == "number" && (o = {
        timeout: o
      });
      const O = (T = Ne.currentSuite) === null || T === void 0 ? void 0 : T.suite;
      c = {
        id: "",
        type: "suite",
        name: e,
        fullName: pn([
          (O == null ? void 0 : O.fullName) ?? (($ = Ne.currentSuite) === null || $ === void 0 || ($ = $.file) === null || $ === void 0 ? void 0 : $.fullName),
          e
        ]),
        fullTestName: pn([
          O == null ? void 0 : O.fullTestName,
          e
        ]),
        suite: O,
        mode: n,
        each: r,
        file: (O == null ? void 0 : O.file) ?? ((A = Ne.currentSuite) === null || A === void 0 ? void 0 : A.file),
        shuffle: o == null ? void 0 : o.shuffle,
        tasks: [],
        meta: /* @__PURE__ */ Object.create(null),
        concurrent: o == null ? void 0 : o.concurrent
      }, qd(c, Hd());
    }
    function d() {
      i.length = 0, p();
    }
    async function g(w) {
      if (!w) throw new TypeError("File is required to collect tasks.");
      t && await om(f, () => t(a));
      const T = [];
      for (const $ of i) T.push($.type === "collector" ? await $.collect(w) : $);
      return c.tasks = T, c;
    }
    return rm(f), f;
  }
  function Qd(e, t) {
    return (async (...n) => {
      const r = await e(...n);
      if (t.promises) {
        const s = (await Promise.allSettled(t.promises)).map((i) => i.status === "rejected" ? i.reason : void 0).filter(Boolean);
        if (s.length) throw s;
      }
      return r;
    });
  }
  function em() {
    function e(t, n, r) {
      var o;
      let s = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
      const i = Ne.currentSuite || Vu;
      let { options: c, handler: u } = _t(n, r);
      s === "run" && !u && (s = "todo");
      const a = c.concurrent || this.concurrent || c.sequential === false, l = c.sequential || this.sequential || c.concurrent === false;
      c = {
        ...i == null ? void 0 : i.options,
        ...c,
        shuffle: this.shuffle ?? c.shuffle ?? (i == null || (o = i.options) === null || o === void 0 ? void 0 : o.shuffle) ?? void 0
      };
      const f = a || c.concurrent && !l, h = l || c.sequential && !a;
      return c.concurrent = f && !h, c.sequential = h && !f, Zd(ot(t), u, s, this.each, c, i == null ? void 0 : i.fixtures());
    }
    return e.each = function(t, ...n) {
      const r = this.withContext();
      return this.setContext("each", true), Array.isArray(t) && n.length && (t = In(t, n)), (o, s, i) => {
        const c = ot(o), u = t.every(Array.isArray), { options: a, handler: l } = _t(s, i), f = typeof s == "function";
        t.forEach((h, p) => {
          const d = Array.isArray(h) ? h : [
            h
          ];
          f ? u ? r(Ke(c, d, p), l ? () => l(...d) : void 0, a.timeout) : r(Ke(c, d, p), l ? () => l(h) : void 0, a.timeout) : u ? r(Ke(c, d, p), a, l ? () => l(...d) : void 0) : r(Ke(c, d, p), a, l ? () => l(h) : void 0);
        }), this.setContext("each", void 0);
      };
    }, e.for = function(t, ...n) {
      return Array.isArray(t) && n.length && (t = In(t, n)), (r, o, s) => {
        const i = ot(r), { options: c, handler: u } = _t(o, s);
        t.forEach((a, l) => {
          Et(Ke(i, ua(a), l), c, u ? () => u(a) : void 0);
        });
      };
    }, e.skipIf = (t) => t ? Et.skip : Et, e.runIf = (t) => t ? Et : Et.skip, ku([
      "concurrent",
      "sequential",
      "shuffle",
      "skip",
      "only",
      "todo"
    ], e);
  }
  function tm(e, t) {
    const n = e;
    n.each = function(o, ...s) {
      const i = this.withContext();
      return this.setContext("each", true), Array.isArray(o) && s.length && (o = In(o, s)), (c, u, a) => {
        const l = ot(c), f = o.every(Array.isArray), { options: h, handler: p } = _t(u, a), d = typeof u == "function";
        o.forEach((g, w) => {
          const T = Array.isArray(g) ? g : [
            g
          ];
          d ? f ? i(Ke(l, T, w), p ? () => p(...T) : void 0, h.timeout) : i(Ke(l, T, w), p ? () => p(g) : void 0, h.timeout) : f ? i(Ke(l, T, w), h, p ? () => p(...T) : void 0) : i(Ke(l, T, w), h, p ? () => p(g) : void 0);
        }), this.setContext("each", void 0);
      };
    }, n.for = function(o, ...s) {
      const i = this.withContext();
      return Array.isArray(o) && s.length && (o = In(o, s)), (c, u, a) => {
        const l = ot(c), { options: f, handler: h } = _t(u, a);
        o.forEach((p, d) => {
          const g = h ? (w) => h(p, w) : void 0;
          g && (g.__VITEST_FIXTURE_INDEX__ = 1, g.toString = () => h.toString()), i(Ke(l, ua(p), d), f, g);
        });
      };
    }, n.skipIf = function(o) {
      return o ? this.skip : this;
    }, n.runIf = function(o) {
      return o ? this : this.skip;
    }, n.scoped = function(o) {
      dt().scoped(o);
    }, n.extend = function(o) {
      const s = Fu(o, t || {}, Ue), i = e;
      return ws(function(c, u, a) {
        const f = dt().fixtures(), h = {
          ...this
        };
        f && (h.fixtures = zd(h.fixtures || [], f)), i.call(h, ot(c), u, a);
      }, s);
    }, n.beforeEach = Gd, n.afterEach = Yd, n.beforeAll = Ud, n.afterAll = Kd;
    const r = ku([
      "concurrent",
      "sequential",
      "skip",
      "only",
      "todo",
      "fails"
    ], n);
    return t && r.mergeContext(t), r;
  }
  function ws(e, t) {
    return tm(e, t);
  }
  function ot(e) {
    return typeof e == "string" ? e : typeof e == "function" ? e.name || "<anonymous>" : String(e);
  }
  function Ke(e, t, n) {
    (e.includes("%#") || e.includes("%$")) && (e = e.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${n}`).replace(/%\$/g, `${n + 1}`).replace(/__vitest_escaped_%__/g, "%%"));
    const r = e.split("%").length - 1;
    e.includes("%f") && (e.match(/%f/g) || []).forEach((a, l) => {
      if (fh(t[l]) || Object.is(t[l], -0)) {
        let f = 0;
        e = e.replace(/%f/g, (h) => (f++, f === l + 1 ? "-%f" : h));
      }
    });
    const o = vt(t[0]);
    function s(u) {
      return u.replace(/\$([$\w.]+)/g, (a, l) => {
        const f = /^\d+$/.test(l);
        if (!o && !f) return `$${l}`;
        const h = f ? Qs(t, l) : void 0, p = o ? Qs(t[0], l, h) : h;
        return ih(p, {
          truncate: void 0
        });
      });
    }
    let i = "", c = 0;
    return nm(e, ca, (u) => {
      c < r ? i += sh(u[0], t[c++]) : i += u[0];
    }, (u) => {
      i += s(u);
    }), i;
  }
  function nm(e, t, n, r) {
    let o = 0;
    for (const s of e.matchAll(t)) o < s.index && r(e.slice(o, s.index)), n(s), o = s.index + s[0].length;
    o < e.length && r(e.slice(o));
  }
  function In(e, t) {
    const n = e.join("").trim().replace(/ /g, "").split(`
`).map((o) => o.split("|"))[0], r = [];
    for (let o = 0; o < Math.floor(t.length / n.length); o++) {
      const s = {};
      for (let i = 0; i < n.length; i++) s[n[i]] = t[o * n.length + i];
      r.push(s);
    }
    return r;
  }
  const Ji = Date.now, Ne = {
    currentSuite: null
  };
  function rm(e) {
    var t;
    (t = Ne.currentSuite) === null || t === void 0 || t.tasks.push(e);
  }
  async function om(e, t) {
    const n = Ne.currentSuite;
    Ne.currentSuite = e, await t(), Ne.currentSuite = n;
  }
  function mt(e, t, n = false, r, o) {
    if (t <= 0 || t === Number.POSITIVE_INFINITY) return e;
    const { setTimeout: s, clearTimeout: i } = Pt();
    return (function(...u) {
      const a = Ji(), l = sn();
      return l._currentTaskStartTime = a, l._currentTaskTimeout = t, new Promise((f, h) => {
        var p;
        const d = s(() => {
          i(d), g();
        }, t);
        (p = d.unref) === null || p === void 0 || p.call(d);
        function g() {
          const $ = cm(n, t, r);
          o == null ? void 0 : o(u, $), h($);
        }
        function w($) {
          if (l._currentTaskStartTime = void 0, l._currentTaskTimeout = void 0, i(d), Ji() - a >= t) {
            g();
            return;
          }
          f($);
        }
        function T($) {
          l._currentTaskStartTime = void 0, l._currentTaskTimeout = void 0, i(d), h($);
        }
        try {
          const $ = e(...u);
          typeof $ == "object" && $ != null && typeof $.then == "function" ? $.then(w, T) : w($);
        } catch ($) {
          T($);
        }
      });
    });
  }
  const po = /* @__PURE__ */ new WeakMap();
  function Ts([e], t) {
    e && sm(e, t);
  }
  function sm(e, t) {
    const n = po.get(e);
    n == null ? void 0 : n.abort(t);
  }
  function im(e, t) {
    var n;
    const r = function() {
      throw new Error("done() callback is deprecated, use promise instead");
    };
    let o = po.get(r);
    return o || (o = new AbortController(), po.set(r, o)), r.signal = o.signal, r.task = e, r.skip = (s, i) => {
      if (s !== false) throw e.result ?? (e.result = {
        state: "skip"
      }), e.result.pending = true, new jd("test is skipped; abort execution", e, typeof s == "string" ? s : i);
    }, r.annotate = ((s, i, c) => {
      if (e.result && e.result.state !== "run") throw new Error(`Cannot annotate tests outside of the test run. The test "${e.name}" finished running with the "${e.result.state}" state already.`);
      const u = {
        message: s,
        type: typeof i == "object" || i === void 0 ? "notice" : i
      }, a = typeof i == "object" ? i : c;
      return a && (u.attachment = a, Ku(u.attachment)), pm(e, fm(e, {
        type: "internal:annotation",
        annotation: u
      }).then(async ({ annotation: l }) => {
        if (!t.onTestAnnotate) throw new Error("Test runner doesn't support test annotations.");
        await Uu(t);
        const f = await t.onTestAnnotate(e, l);
        return e.annotations.push(f), f;
      }));
    }), r.onTestFailed = (s, i) => {
      e.onFailed || (e.onFailed = []), e.onFailed.push(mt(s, i ?? t.config.hookTimeout, true, new Error("STACK_TRACE_ERROR"), (c, u) => o.abort(u)));
    }, r.onTestFinished = (s, i) => {
      e.onFinished || (e.onFinished = []), e.onFinished.push(mt(s, i ?? t.config.hookTimeout, true, new Error("STACK_TRACE_ERROR"), (c, u) => o.abort(u)));
    }, ((n = t.extendTaskContext) === null || n === void 0 ? void 0 : n.call(t, r)) || r;
  }
  function cm(e, t, n) {
    const r = `${e ? "Hook" : "Test"} timed out in ${t}ms.
If this is a long-running ${e ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${e ? "hookTimeout" : "testTimeout"}".`, o = new Error(r);
    return (n == null ? void 0 : n.stack) && (o.stack = n.stack.replace(o.message, n.message)), o;
  }
  const am = /* @__PURE__ */ new WeakMap();
  function um(e) {
    const t = am.get(e);
    if (!t) throw new Error(`Cannot find file context for ${e.name}`);
    return t;
  }
  globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
  globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
  Pt();
  const wr = /* @__PURE__ */ new Map(), Xi = [], Tn = [];
  function lm(e) {
    if (wr.size) {
      var t;
      const n = Array.from(wr).map(([o, s]) => [
        o,
        s[0],
        s[1]
      ]), r = (t = e.onTaskUpdate) === null || t === void 0 ? void 0 : t.call(e, n, Xi);
      r && (Tn.push(r), r.then(() => Tn.splice(Tn.indexOf(r), 1), () => {
      })), Xi.length = 0, wr.clear();
    }
  }
  async function Uu(e) {
    lm(e), await Promise.all(Tn);
  }
  fm = async function(e, t) {
    const n = sn();
    if (e.result && e.result.state !== "run") throw new Error(`Cannot record a test artifact outside of the test run. The test "${e.name}" finished running with the "${e.result.state}" state already.`);
    const r = ju(e.file.filepath, new Error("STACK_TRACE").stack);
    if (r && (t.location = {
      file: r.file,
      line: r.line,
      column: r.column
    }, t.type === "internal:annotation" && (t.annotation.location = t.location)), Array.isArray(t.attachments)) for (const s of t.attachments) Ku(s);
    if (t.type === "internal:annotation") return t;
    if (!n.onTestArtifactRecord) throw new Error("Test runner doesn't support test artifacts.");
    await Uu(n);
    const o = await n.onTestArtifactRecord(e, t);
    return e.artifacts.push(o), o;
  };
  const xe = [];
  for (let e = 65; e < 91; e++) xe.push(String.fromCharCode(e));
  for (let e = 97; e < 123; e++) xe.push(String.fromCharCode(e));
  for (let e = 0; e < 10; e++) xe.push(e.toString(10));
  xe.push("+", "/");
  function hm(e) {
    let t = "";
    const n = e.byteLength;
    for (let r = 0; r < n; r += 3) if (n === r + 1) {
      const o = (e[r] & 252) >> 2, s = (e[r] & 3) << 4;
      t += xe[o], t += xe[s], t += "==";
    } else if (n === r + 2) {
      const o = (e[r] & 252) >> 2, s = (e[r] & 3) << 4 | (e[r + 1] & 240) >> 4, i = (e[r + 1] & 15) << 2;
      t += xe[o], t += xe[s], t += xe[i], t += "=";
    } else {
      const o = (e[r] & 252) >> 2, s = (e[r] & 3) << 4 | (e[r + 1] & 240) >> 4, i = (e[r + 1] & 15) << 2 | (e[r + 2] & 192) >> 6, c = e[r + 2] & 63;
      t += xe[o], t += xe[s], t += xe[i], t += xe[c];
    }
    return t;
  }
  function pm(e, t) {
    return t = t.finally(() => {
      if (!e.promises) return;
      const n = e.promises.indexOf(t);
      n !== -1 && e.promises.splice(n, 1);
    }), e.promises || (e.promises = []), e.promises.push(t), t;
  }
  function Ku(e) {
    if (e.body == null && !e.path) throw new TypeError('Test attachment requires "body" or "path" to be set. Both are missing.');
    if (e.body && e.path) throw new TypeError('Test attachment requires only one of "body" or "path" to be set. Both are specified.');
    e.body instanceof Uint8Array && (e.body = hm(e.body));
  }
  const dm = "__vitest_worker__";
  function er() {
    const e = globalThis[dm];
    if (!e) throw new Error(`Vitest failed to access its internal state.

One of the following is possible:
- "vitest" is imported directly without running "vitest" command
- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)
- "vitest" is imported inside Vite / Vitest config file
- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues
`);
    return e;
  }
  function Gu() {
    return typeof process < "u" && !!process.send;
  }
  function mm(e, t = false) {
    const n = [
      /\/vitest\/dist\//,
      /vitest-virtual-\w+\/dist/,
      /@vitest\/dist/,
      ...t ? [] : [
        /^mock:/
      ]
    ];
    e.idToModuleMap.forEach((r, o) => {
      n.some((s) => s.test(o)) || (r.promise = void 0, r.exports = void 0, r.evaluated = false, r.importers.clear());
    });
  }
  function gm() {
    const { setTimeout: e } = Pt();
    return new Promise((t) => e(t, 0));
  }
  async function Yu() {
    await gm();
    const e = er(), t = [], n = e.resolvingModules.size;
    for (const [r, o] of e.evaluatedModules.idToModuleMap) o.promise && !o.evaluated && t.push(o.promise);
    !t.length && !n || (await Promise.allSettled(t), await Yu());
  }
  var ym = 44, Hi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bm = new Uint8Array(64), Ju = new Uint8Array(128);
  for (let e = 0; e < Hi.length; e++) {
    const t = Hi.charCodeAt(e);
    bm[e] = t, Ju[t] = e;
  }
  function Ft(e, t) {
    let n = 0, r = 0, o = 0;
    do {
      const i = e.next();
      o = Ju[i], n |= (o & 31) << r, r += 5;
    } while (o & 32);
    const s = n & 1;
    return n >>>= 1, s && (n = -2147483648 | -n), t + n;
  }
  function Zi(e, t) {
    return e.pos >= t ? false : e.peek() !== ym;
  }
  var wm = class {
    constructor(e) {
      this.pos = 0, this.buffer = e;
    }
    next() {
      return this.buffer.charCodeAt(this.pos++);
    }
    peek() {
      return this.buffer.charCodeAt(this.pos);
    }
    indexOf(e) {
      const { buffer: t, pos: n } = this, r = t.indexOf(e, n);
      return r === -1 ? t.length : r;
    }
  };
  function Tm(e) {
    const { length: t } = e, n = new wm(e), r = [];
    let o = 0, s = 0, i = 0, c = 0, u = 0;
    do {
      const a = n.indexOf(";"), l = [];
      let f = true, h = 0;
      for (o = 0; n.pos < a; ) {
        let p;
        o = Ft(n, o), o < h && (f = false), h = o, Zi(n, a) ? (s = Ft(n, s), i = Ft(n, i), c = Ft(n, c), Zi(n, a) ? (u = Ft(n, u), p = [
          o,
          s,
          i,
          c,
          u
        ]) : p = [
          o,
          s,
          i,
          c
        ]) : p = [
          o
        ], l.push(p), n.pos++;
      }
      f || Em(l), r.push(l), n.pos = a + 1;
    } while (n.pos <= t);
    return r;
  }
  function Em(e) {
    e.sort(Sm);
  }
  function Sm(e, t) {
    return e[0] - t[0];
  }
  var tr = 0, vm = 1, $m = 2, _m = 3, Om = 4, Pn = false;
  function xm(e, t, n, r) {
    for (; n <= r; ) {
      const o = n + (r - n >> 1), s = e[o][tr] - t;
      if (s === 0) return Pn = true, o;
      s < 0 ? n = o + 1 : r = o - 1;
    }
    return Pn = false, n - 1;
  }
  function Mm(e, t, n) {
    for (let r = n + 1; r < e.length && e[r][tr] === t; n = r++) ;
    return n;
  }
  function Am(e, t, n) {
    for (let r = n - 1; r >= 0 && e[r][tr] === t; n = r--) ;
    return n;
  }
  function Cm(e, t, n, r) {
    const { lastKey: o, lastNeedle: s, lastIndex: i } = n;
    let c = 0, u = e.length - 1;
    if (r === o) {
      if (t === s) return Pn = i !== -1 && e[i][tr] === t, i;
      t >= s ? c = i === -1 ? 0 : i : u = i;
    }
    return n.lastKey = r, n.lastNeedle = t, n.lastIndex = xm(e, t, c, u);
  }
  var Nm = "`line` must be greater than 0 (lines start at line 1)", Im = "`column` must be greater than or equal to 0 (columns start at column 0)", Qi = -1, Pm = 1;
  function km(e) {
    var t;
    return (t = e)._decoded || (t._decoded = Tm(e._encoded));
  }
  function jm(e, t) {
    let { line: n, column: r, bias: o } = t;
    if (n--, n < 0) throw new Error(Nm);
    if (r < 0) throw new Error(Im);
    const s = km(e);
    if (n >= s.length) return mn(null, null, null, null);
    const i = s[n], c = Rm(i, e._decodedMemo, n, r, o || Pm);
    if (c === -1) return mn(null, null, null, null);
    const u = i[c];
    if (u.length === 1) return mn(null, null, null, null);
    const { names: a, resolvedSources: l } = e;
    return mn(l[u[vm]], u[$m] + 1, u[_m], u.length === 5 ? a[u[Om]] : null);
  }
  function mn(e, t, n, r) {
    return {
      source: e,
      line: t,
      column: n,
      name: r
    };
  }
  function Rm(e, t, n, r, o) {
    let s = Cm(e, r, t, n);
    return Pn ? s = (o === Qi ? Mm : Am)(e, r, s) : o === Qi && s++, s === -1 || s === e.length ? -1 : s;
  }
  function Xu(e) {
    return e != null;
  }
  function Dm(e) {
    return e === null || typeof e != "function" && typeof e != "object";
  }
  function En(e) {
    return e != null && typeof e == "object" && !Array.isArray(e);
  }
  function Fm(e) {
    let t = -1, n = null, r = 0, o = 0, s = null;
    for (; t <= e.length; ) {
      s = e[t], t++;
      const i = e[t];
      if ((i === '"' || i === "'" || i === "`") && s !== "\\" && (n === i ? n = null : n || (n = i)), n || (i === "(" && r++, i === ")" && o++), r && o && r === o) return t;
    }
    return null;
  }
  const Hu = /^\s*at .*(?:\S:\d+|\(native\))/m, Lm = /^(?:eval@)?(?:\[native code\])?$/, qm = [
    "node:internal",
    /\/packages\/\w+\/dist\//,
    /\/@vitest\/\w+\/dist\//,
    "/vitest/dist/",
    "/vitest/src/",
    "/node_modules/chai/",
    "/node_modules/tinyspy/",
    "/vite/dist/node/module-runner",
    "/rolldown-vite/dist/node/module-runner",
    "/deps/chunk-",
    "/deps/@vitest",
    "/deps/loupe",
    "/deps/chai",
    "/browser-playwright/dist/locators.js",
    "/browser-webdriverio/dist/locators.js",
    "/browser-preview/dist/locators.js",
    /node:\w+/,
    /__vitest_test__/,
    /__vitest_browser__/,
    /\/deps\/vitest_/
  ];
  function Zu(e) {
    if (!e.includes(":")) return [
      e
    ];
    const n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
    if (!n) return [
      e
    ];
    let r = n[1];
    if (r.startsWith("async ") && (r = r.slice(6)), r.startsWith("http:") || r.startsWith("https:")) {
      const o = new URL(r);
      o.searchParams.delete("import"), o.searchParams.delete("browserv"), r = o.pathname + o.hash + o.search;
    }
    if (r.startsWith("/@fs/")) {
      const o = /^\/@fs\/[a-zA-Z]:\//.test(r);
      r = r.slice(o ? 5 : 4);
    }
    return [
      r,
      n[2] || void 0,
      n[3] || void 0
    ];
  }
  function Bm(e) {
    let t = e.trim();
    if (Lm.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@"))) return null;
    let n = -1, r = "", o;
    for (let u = 0; u < t.length; u++) if (t[u] === "@") {
      const a = t.slice(u + 1);
      if (a.includes(":") && a.length >= 3) {
        n = u, r = a, o = u > 0 ? t.slice(0, u) : void 0;
        break;
      }
    }
    if (n === -1 || !r.includes(":") || r.length < 3) return null;
    const [s, i, c] = Zu(r);
    return !s || !i || !c ? null : {
      file: s,
      method: o || "",
      line: Number.parseInt(i),
      column: Number.parseInt(c)
    };
  }
  function zm(e) {
    let t = e.trim();
    if (!Hu.test(t)) return null;
    t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
    let n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
    const r = n.match(/ (\(.+\)$)/);
    n = r ? n.replace(r[0], "") : n;
    const [o, s, i] = Zu(r ? r[1] : n);
    let c = r && n || "", u = o && [
      "eval",
      "<anonymous>"
    ].includes(o) ? void 0 : o;
    return !u || !s || !i ? null : (c.startsWith("async ") && (c = c.slice(6)), u.startsWith("file://") && (u = u.slice(7)), u = u.startsWith("node:") || u.startsWith("internal:") ? u : Pu(u), c && (c = c.replace(/__vite_ssr_import_\d+__\./g, "").replace(/(Object\.)?__vite_ssr_export_default__\s?/g, "")), {
      method: c,
      file: u,
      line: Number.parseInt(s),
      column: Number.parseInt(i)
    });
  }
  function Tr(e, t = {}) {
    const { ignoreStackEntries: n = qm } = t;
    return (Hu.test(e) ? Wm(e) : Vm(e)).map((o) => {
      var s;
      t.getUrlId && (o.file = t.getUrlId(o.file));
      const i = (s = t.getSourceMap) === null || s === void 0 ? void 0 : s.call(t, o.file);
      if (!i || typeof i != "object" || !i.version) return ec(n, o.file) ? null : o;
      const c = new Km(i, o.file), u = Ym(c, o);
      if (!u) return o;
      const { line: a, column: l, source: f, name: h } = u;
      let p = f || o.file;
      return p.match(/\/\w:\//) && (p = p.slice(1)), ec(n, p) ? null : a != null && l != null ? {
        line: a,
        column: l,
        file: p,
        method: h || o.method
      } : o;
    }).filter((o) => o != null);
  }
  function ec(e, t) {
    return e.some((n) => t.match(n));
  }
  function Vm(e) {
    return e.split(`
`).map((t) => Bm(t)).filter(Xu);
  }
  function Wm(e) {
    return e.split(`
`).map((t) => zm(t)).filter(Xu);
  }
  function Um(e, t = {}) {
    if (!e || Dm(e)) return [];
    if ("stacks" in e && e.stacks) return e.stacks;
    const n = e.stack || "";
    let r = typeof n == "string" ? Tr(n, t) : [];
    if (!r.length) {
      const o = e;
      o.fileName != null && o.lineNumber != null && o.columnNumber != null && (r = Tr(`${o.fileName}:${o.lineNumber}:${o.columnNumber}`, t)), o.sourceURL != null && o.line != null && o._column != null && (r = Tr(`${o.sourceURL}:${o.line}:${o.column}`, t));
    }
    return t.frameFilter && (r = r.filter((o) => t.frameFilter(e, o) !== false)), e.stacks = r, r;
  }
  class Km {
    constructor(t, n) {
      __publicField(this, "_encoded");
      __publicField(this, "_decoded");
      __publicField(this, "_decodedMemo");
      __publicField(this, "url");
      __publicField(this, "version");
      __publicField(this, "names", []);
      __publicField(this, "resolvedSources");
      this.map = t;
      const { mappings: r, names: o, sources: s } = t;
      this.version = t.version, this.names = o || [], this._encoded = r || "", this._decodedMemo = Gm(), this.url = n, this.resolvedSources = (s || []).map((i) => Pu(i || "", n));
    }
  }
  function Gm() {
    return {
      lastKey: -1,
      lastNeedle: -1,
      lastIndex: -1
    };
  }
  function Ym(e, t) {
    const n = jm(e, t);
    return n.column == null ? null : n;
  }
  const Es = /\r?\n/;
  function Jm(e, t, n) {
    const r = e.split(Es), o = /\r\n/.test(e) ? 2 : 1;
    let s = 0;
    if (t > r.length) return e.length;
    for (let i = 0; i < t - 1; i++) s += r[i].length + o;
    return s + n;
  }
  function Xm(e, t) {
    if (t > e.length) throw new Error(`offset is longer than source length! offset ${t} > length ${e.length}`);
    const n = e.split(Es), r = /\r\n/.test(e) ? 2 : 1;
    let o = 0, s = 0;
    for (; s < n.length; s++) {
      const i = n[s].length + r;
      if (o + i >= t) break;
      o += i;
    }
    return s + 1;
  }
  async function Hm(e, t) {
    const n = (await ol(async () => {
      const { default: o } = await import("./magic-string.es-DjU5CGuV.js");
      return {
        default: o
      };
    }, [], import.meta.url)).default, r = new Set(t.map((o) => o.file));
    await Promise.all(Array.from(r).map(async (o) => {
      const s = t.filter((a) => a.file === o), i = await e.readSnapshotFile(o), c = new n(i);
      for (const a of s) {
        const l = Jm(i, a.line, a.column);
        rg(i, c, l, a.snapshot);
      }
      const u = c.toString();
      u !== i && await e.saveSnapshotFile(o, u);
    }));
  }
  const Zm = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*\{/;
  function Qm(e, t, n, r) {
    let o = e.slice(n);
    const s = Zm.exec(o);
    if (!s) return false;
    o = o.slice(s.index);
    let i = Fm(o);
    if (i === null) return false;
    i += n + s.index;
    const c = n + s.index + s[0].length, u = eg(e, c), a = `, ${Qu(r, e, n)}`;
    return u === i ? t.appendLeft(i, a) : t.overwrite(u, i, a), true;
  }
  function eg(e, t) {
    let n = 1, r = 0;
    for (; n !== r && t < e.length; ) {
      const o = e[t++];
      o === "{" ? n++ : o === "}" && r++;
    }
    return t;
  }
  function Qu(e, t, n) {
    const r = Xm(t, n), s = t.split(Es)[r - 1].match(/^\s*/)[0] || "", i = s.includes("	") ? `${s}	` : `${s}  `, c = e.trim().replace(/\\/g, "\\\\").split(/\n/g), u = c.length <= 1, a = "`";
    return u ? `${a}${c.join(`
`).replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}${a}` : `${a}
${c.map((l) => l ? i + l : "").join(`
`).replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}
${s}${a}`;
  }
  const tc = "toMatchInlineSnapshot", nc = "toThrowErrorMatchingInlineSnapshot";
  function tg(e, t) {
    const n = t - tc.length;
    if (e.slice(n, t) === tc) return {
      code: e.slice(n),
      index: n
    };
    const r = t - nc.length;
    return e.slice(t - r, t) === nc ? {
      code: e.slice(t - r),
      index: t - r
    } : {
      code: e.slice(t),
      index: t
    };
  }
  const ng = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*[\w$]*(['"`)])/;
  function rg(e, t, n, r) {
    const { code: o, index: s } = tg(e, n), i = ng.exec(o), c = /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/.exec(o);
    if (!i || i.index !== (c == null ? void 0 : c.index)) return Qm(e, t, s, r);
    const u = i[1], a = s + i.index + i[0].length, l = Qu(r, e, s);
    if (u === ")") return t.appendRight(a - 1, l), true;
    const h = new RegExp(`(?:^|[^\\\\])${u}`).exec(e.slice(a));
    if (!h) return false;
    const p = a + h.index + h[0].length;
    return t.overwrite(a - 1, p, l), true;
  }
  const og = /^([^\S\n]*)\S/m;
  function rc(e) {
    var t;
    const n = e.match(og);
    if (!n || !n[1]) return e;
    const r = n[1], o = e.split(/\n/g);
    if (o.length <= 2 || o[0].trim() !== "" || ((t = o.at(-1)) === null || t === void 0 ? void 0 : t.trim()) !== "") return e;
    for (let s = 1; s < o.length - 1; s++) if (o[s] !== "") {
      if (o[s].indexOf(r) !== 0) return e;
      o[s] = o[s].substring(r.length);
    }
    return o[o.length - 1] = "", e = o.join(`
`), e;
  }
  async function sg(e, t) {
    await Promise.all(t.map(async (n) => {
      n.readonly || await e.saveSnapshotFile(n.file, n.snapshot);
    }));
  }
  function ig(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Er = {
    exports: {}
  }, oc;
  function cg() {
    if (oc) return Er.exports;
    oc = 1;
    var e = function(t, n) {
      var r, o, s = 1, i = 0, c = 0, u = String.alphabet;
      function a(l, f, h) {
        if (h) {
          for (r = f; h = a(l, r), h < 76 && h > 65; ) ++r;
          return +l.slice(f - 1, r);
        }
        return h = u && u.indexOf(l.charAt(f)), h > -1 ? h + 76 : (h = l.charCodeAt(f) || 0, h < 45 || h > 127 ? h : h < 46 ? 65 : h < 48 ? h - 1 : h < 58 ? h + 18 : h < 65 ? h - 11 : h < 91 ? h + 11 : h < 97 ? h - 37 : h < 123 ? h + 5 : h - 63);
      }
      if ((t += "") != (n += "")) {
        for (; s; ) if (o = a(t, i++), s = a(n, c++), o < 76 && s < 76 && o > 66 && s > 66 && (o = a(t, i, i), s = a(n, c, i = r), c = r), o != s) return o < s ? -1 : 1;
      }
      return 0;
    };
    try {
      Er.exports = e;
    } catch {
      String.naturalCompare = e;
    }
    return Er.exports;
  }
  var ag = cg(), ug = ig(ag);
  const lg = (e, t, n, r, o, s) => {
    const i = e.getMockName(), c = i === "vi.fn()" ? "" : ` ${i}`;
    let u = "";
    if (e.mock.calls.length !== 0) {
      const a = n + t.indent;
      u = ` {${t.spacingOuter}${a}"calls": ${s(e.mock.calls, t, a, r, o)}${t.min ? ", " : ","}${t.spacingOuter}${a}"results": ${s(e.mock.results, t, a, r, o)}${t.min ? "" : ","}${t.spacingOuter}${n}}`;
    }
    return `[MockFunction${c}]${u}`;
  }, fg = (e) => e && !!e._isMockFunction, hg = {
    serialize: lg,
    test: fg
  }, { DOMCollection: pg, DOMElement: dg, Immutable: mg, ReactElement: gg, ReactTestComponent: yg, AsymmetricMatcher: bg } = Fn;
  let mo = [
    yg,
    gg,
    dg,
    pg,
    mg,
    bg,
    hg
  ];
  function wg(e) {
    mo = [
      e
    ].concat(mo);
  }
  function Tg() {
    return mo;
  }
  function Eg(e, t) {
    return `${e} ${t}`;
  }
  function Sg(e) {
    if (!/ \d+$/.test(e)) throw new Error("Snapshot keys must end with a number.");
    return e.replace(/ \d+$/, "");
  }
  function vg(e, t) {
    const n = t.updateSnapshot, r = /* @__PURE__ */ Object.create(null);
    let o = "", s = false;
    if (e != null) try {
      o = e, new Function("exports", o)(r);
    } catch {
    }
    return (n === "all" || n === "new") && o && (s = true), {
      data: r,
      dirty: s
    };
  }
  function $g(e) {
    return e.includes(`
`) ? `
${e}
` : e;
  }
  function sc(e) {
    return e.length > 2 && e[0] === `
` && e.endsWith(`
`) ? e.slice(1, -1) : e;
  }
  const _g = true, Og = false;
  function xg(e, t = 2, n = {}) {
    return Ss(Le(e, {
      escapeRegex: _g,
      indent: t,
      plugins: Tg(),
      printFunctionName: Og,
      ...n
    }));
  }
  function Mg(e) {
    return e.replace(/`|\\|\$\{/g, "\\$&");
  }
  function ic(e) {
    return `\`${Mg(e)}\``;
  }
  function Ss(e) {
    return e.replace(/\r\n|\r/g, `
`);
  }
  async function Ag(e, t, n) {
    const r = Object.keys(t).sort(ug).map((c) => `exports[${ic(c)}] = ${ic(Ss(t[c]))};`), o = `${e.getHeader()}

${r.join(`

`)}
`, s = await e.readSnapshotFile(n);
    s != null && s === o || await e.saveSnapshotFile(n, o);
  }
  function go(e = [], t = []) {
    const n = Array.from(e);
    return t.forEach((r, o) => {
      const s = n[o];
      Array.isArray(e[o]) ? n[o] = go(e[o], r) : En(s) ? n[o] = vs(e[o], r) : n[o] = r;
    }), n;
  }
  function vs(e, t) {
    if (En(e) && En(t)) {
      const n = {
        ...e
      };
      return Object.keys(t).forEach((r) => {
        En(t[r]) && !t[r].$$typeof ? r in e ? n[r] = vs(e[r], t[r]) : Object.assign(n, {
          [r]: t[r]
        }) : Array.isArray(t[r]) ? n[r] = go(e[r], t[r]) : Object.assign(n, {
          [r]: t[r]
        });
      }), n;
    } else if (Array.isArray(e) && Array.isArray(t)) return go(e, t);
    return e;
  }
  class el extends Map {
    constructor(t, n) {
      super(n), this.defaultFn = t;
    }
    get(t) {
      return this.has(t) || this.set(t, this.defaultFn(t)), super.get(t);
    }
  }
  class Lt extends el {
    constructor() {
      super(() => 0);
      __publicField(this, "_total");
    }
    valueOf() {
      return this._total = this.total();
    }
    increment(t) {
      typeof this._total < "u" && this._total++, this.set(t, this.get(t) + 1);
    }
    total() {
      if (typeof this._total < "u") return this._total;
      let t = 0;
      for (const n of this.values()) t += n;
      return t;
    }
  }
  function cc(e, t) {
    return e.file === t.file && e.column === t.column && e.line === t.line;
  }
  class $s {
    constructor(t, n, r, o) {
      __publicField(this, "_counters", new Lt());
      __publicField(this, "_dirty");
      __publicField(this, "_updateSnapshot");
      __publicField(this, "_snapshotData");
      __publicField(this, "_initialData");
      __publicField(this, "_inlineSnapshots");
      __publicField(this, "_inlineSnapshotStacks");
      __publicField(this, "_testIdToKeys", new el(() => []));
      __publicField(this, "_rawSnapshots");
      __publicField(this, "_uncheckedKeys");
      __publicField(this, "_snapshotFormat");
      __publicField(this, "_environment");
      __publicField(this, "_fileExists");
      __publicField(this, "expand");
      __publicField(this, "_added", new Lt());
      __publicField(this, "_matched", new Lt());
      __publicField(this, "_unmatched", new Lt());
      __publicField(this, "_updated", new Lt());
      this.testFilePath = t, this.snapshotPath = n;
      const { data: s, dirty: i } = vg(r, o);
      this._fileExists = r != null, this._initialData = {
        ...s
      }, this._snapshotData = {
        ...s
      }, this._dirty = i, this._inlineSnapshots = [], this._inlineSnapshotStacks = [], this._rawSnapshots = [], this._uncheckedKeys = new Set(Object.keys(this._snapshotData)), this.expand = o.expand || false, this._updateSnapshot = o.updateSnapshot, this._snapshotFormat = {
        printBasicPrototype: false,
        escapeString: false,
        ...o.snapshotFormat
      }, this._environment = o.snapshotEnvironment;
    }
    get added() {
      return this._added;
    }
    set added(t) {
      this._added._total = t;
    }
    get matched() {
      return this._matched;
    }
    set matched(t) {
      this._matched._total = t;
    }
    get unmatched() {
      return this._unmatched;
    }
    set unmatched(t) {
      this._unmatched._total = t;
    }
    get updated() {
      return this._updated;
    }
    set updated(t) {
      this._updated._total = t;
    }
    static async create(t, n) {
      const r = await n.snapshotEnvironment.resolvePath(t), o = await n.snapshotEnvironment.readSnapshotFile(r);
      return new $s(t, r, o, n);
    }
    get environment() {
      return this._environment;
    }
    markSnapshotsAsCheckedForTest(t) {
      this._uncheckedKeys.forEach((n) => {
        / \d+$| > /.test(n.slice(t.length)) && this._uncheckedKeys.delete(n);
      });
    }
    clearTest(t) {
      this._inlineSnapshots = this._inlineSnapshots.filter((n) => n.testId !== t), this._inlineSnapshotStacks = this._inlineSnapshotStacks.filter((n) => n.testId !== t);
      for (const n of this._testIdToKeys.get(t)) {
        const r = Sg(n), o = this._counters.get(r);
        o > 0 && ((n in this._snapshotData || n in this._initialData) && (this._snapshotData[n] = this._initialData[n]), this._counters.set(r, o - 1));
      }
      this._testIdToKeys.delete(t), this.added.delete(t), this.updated.delete(t), this.matched.delete(t), this.unmatched.delete(t);
    }
    _inferInlineSnapshotStack(t) {
      const n = t.findIndex((o) => o.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
      if (n !== -1) return t[n + 3];
      const r = t.findIndex((o) => o.method.includes("__INLINE_SNAPSHOT__"));
      return r !== -1 ? t[r + 2] : null;
    }
    _addSnapshot(t, n, r) {
      this._dirty = true, r.stack ? this._inlineSnapshots.push({
        snapshot: n,
        testId: r.testId,
        ...r.stack
      }) : r.rawSnapshot ? this._rawSnapshots.push({
        ...r.rawSnapshot,
        snapshot: n
      }) : this._snapshotData[t] = n;
    }
    async save() {
      const t = Object.keys(this._snapshotData).length, n = this._inlineSnapshots.length, r = this._rawSnapshots.length, o = !t && !n && !r, s = {
        deleted: false,
        saved: false
      };
      return (this._dirty || this._uncheckedKeys.size) && !o ? (t && (await Ag(this._environment, this._snapshotData, this.snapshotPath), this._fileExists = true), n && await Hm(this._environment, this._inlineSnapshots), r && await sg(this._environment, this._rawSnapshots), s.saved = true) : !t && this._fileExists && (this._updateSnapshot === "all" && (await this._environment.removeSnapshotFile(this.snapshotPath), this._fileExists = false), s.deleted = true), s;
    }
    getUncheckedCount() {
      return this._uncheckedKeys.size || 0;
    }
    getUncheckedKeys() {
      return Array.from(this._uncheckedKeys);
    }
    removeUncheckedKeys() {
      this._updateSnapshot === "all" && this._uncheckedKeys.size && (this._dirty = true, this._uncheckedKeys.forEach((t) => delete this._snapshotData[t]), this._uncheckedKeys.clear());
    }
    match({ testId: t, testName: n, received: r, key: o, inlineSnapshot: s, isInline: i, error: c, rawSnapshot: u }) {
      this._counters.increment(n);
      const a = this._counters.get(n);
      o || (o = Eg(n, a)), this._testIdToKeys.get(t).push(o), i && this._snapshotData[o] !== void 0 || this._uncheckedKeys.delete(o);
      let l = u && typeof r == "string" ? r : xg(r, void 0, this._snapshotFormat);
      u || (l = $g(l)), u && u.content && u.content.match(/\r\n/) && !l.match(/\r\n/) && (u.content = Ss(u.content));
      const f = i ? s : u ? u.content : this._snapshotData[o], h = u ? f : f == null ? void 0 : f.trim(), p = h === (u ? l : l.trim()), d = f !== void 0, g = i || this._fileExists || u && u.content != null;
      p && !i && !u && (this._snapshotData[o] = l);
      let w;
      if (i) {
        var T, $;
        const A = Um(c || new Error("snapshot"), {
          ignoreStackEntries: []
        }), O = this._inferInlineSnapshotStack(A);
        if (!O) throw new Error(`@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(A)}`);
        w = ((T = ($ = this.environment).processStackTrace) === null || T === void 0 ? void 0 : T.call($, O)) || O, w.column--;
        const C = this._inlineSnapshotStacks.filter((N) => cc(N, w));
        if (C.length > 0) {
          this._inlineSnapshots = this._inlineSnapshots.filter((x) => !cc(x, w));
          const N = C.find((x) => x.snapshot !== l);
          if (N) throw Object.assign(new Error("toMatchInlineSnapshot with different snapshots cannot be called at the same location"), {
            actual: l,
            expected: N.snapshot
          });
        }
        this._inlineSnapshotStacks.push({
          ...w,
          testId: t,
          snapshot: l
        });
      }
      return d && this._updateSnapshot === "all" || (!d || !g) && (this._updateSnapshot === "new" || this._updateSnapshot === "all") ? (this._updateSnapshot === "all" ? p ? this.matched.increment(t) : (d ? this.updated.increment(t) : this.added.increment(t), this._addSnapshot(o, l, {
        stack: w,
        testId: t,
        rawSnapshot: u
      })) : (this._addSnapshot(o, l, {
        stack: w,
        testId: t,
        rawSnapshot: u
      }), this.added.increment(t)), {
        actual: "",
        count: a,
        expected: "",
        key: o,
        pass: true
      }) : p ? (this.matched.increment(t), {
        actual: "",
        count: a,
        expected: "",
        key: o,
        pass: true
      }) : (this.unmatched.increment(t), {
        actual: u ? l : sc(l),
        count: a,
        expected: h !== void 0 ? u ? h : sc(h) : void 0,
        key: o,
        pass: false
      });
    }
    async pack() {
      const t = {
        filepath: this.testFilePath,
        added: 0,
        fileDeleted: false,
        matched: 0,
        unchecked: 0,
        uncheckedKeys: [],
        unmatched: 0,
        updated: 0
      }, n = this.getUncheckedCount(), r = this.getUncheckedKeys();
      n && this.removeUncheckedKeys();
      const o = await this.save();
      return t.fileDeleted = o.deleted, t.added = this.added.total(), t.matched = this.matched.total(), t.unmatched = this.unmatched.total(), t.updated = this.updated.total(), t.unchecked = o.deleted ? 0 : n, t.uncheckedKeys = Array.from(r), t;
    }
  }
  function ac(e, t, n, r) {
    const o = new Error(e);
    return Object.defineProperty(o, "actual", {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }), Object.defineProperty(o, "expected", {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }), Object.defineProperty(o, "diffOptions", {
      value: {
        expand: t
      }
    }), o;
  }
  class Cg {
    constructor(t = {}) {
      __publicField(this, "snapshotStateMap", /* @__PURE__ */ new Map());
      this.options = t;
    }
    async setup(t, n) {
      this.snapshotStateMap.has(t) || this.snapshotStateMap.set(t, await $s.create(t, n));
    }
    async finish(t) {
      const r = await this.getSnapshotState(t).pack();
      return this.snapshotStateMap.delete(t), r;
    }
    skipTest(t, n) {
      this.getSnapshotState(t).markSnapshotsAsCheckedForTest(n);
    }
    clearTest(t, n) {
      this.getSnapshotState(t).clearTest(n);
    }
    getSnapshotState(t) {
      const n = this.snapshotStateMap.get(t);
      if (!n) throw new Error(`The snapshot state for '${t}' is not found. Did you call 'SnapshotClient.setup()'?`);
      return n;
    }
    assert(t) {
      const { filepath: n, name: r, testId: o = r, message: s, isInline: i = false, properties: c, inlineSnapshot: u, error: a, errorMessage: l, rawSnapshot: f } = t;
      let { received: h } = t;
      if (!n) throw new Error("Snapshot cannot be used outside of test");
      const p = this.getSnapshotState(n);
      if (typeof c == "object") {
        if (typeof h != "object" || !h) throw new Error("Received value must be an object when the matcher has properties");
        try {
          var d, g;
          if (((d = (g = this.options).isEqual) === null || d === void 0 ? void 0 : d.call(g, h, c)) ?? false) h = vs(h, c);
          else throw ac("Snapshot properties mismatched", p.expand, h, c);
        } catch (C) {
          throw C.message = l || "Snapshot mismatched", C;
        }
      }
      const w = [
        r,
        ...s ? [
          s
        ] : []
      ].join(" > "), { actual: T, expected: $, key: A, pass: O } = p.match({
        testId: o,
        testName: w,
        received: h,
        isInline: i,
        error: a,
        inlineSnapshot: u,
        rawSnapshot: f
      });
      if (!O) throw ac(`Snapshot \`${A || "unknown"}\` mismatched`, p.expand, f ? T : T == null ? void 0 : T.trim(), f ? $ : $ == null ? void 0 : $.trim());
    }
    async assertRaw(t) {
      if (!t.rawSnapshot) throw new Error("Raw snapshot is required");
      const { filepath: n, rawSnapshot: r } = t;
      if (r.content == null) {
        if (!n) throw new Error("Snapshot cannot be used outside of test");
        const o = this.getSnapshotState(n);
        t.filepath || (t.filepath = n), r.file = await o.environment.resolveRawPath(n, r.file), r.content = await o.environment.readSnapshotFile(r.file) ?? void 0;
      }
      return this.assert(t);
    }
    clear() {
      this.snapshotStateMap.clear();
    }
  }
  var yo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  const Fe = Date;
  let bo = null;
  class st extends Fe {
    constructor(t, n, r, o, s, i, c) {
      super();
      let u;
      switch (arguments.length) {
        case 0:
          bo !== null ? u = new Fe(bo.valueOf()) : u = new Fe();
          break;
        case 1:
          u = new Fe(t);
          break;
        default:
          r = typeof r > "u" ? 1 : r, o = o || 0, s = s || 0, i = i || 0, c = c || 0, u = new Fe(t, n, r, o, s, i, c);
          break;
      }
      return Object.setPrototypeOf(u, st.prototype), u;
    }
  }
  st.UTC = Fe.UTC;
  st.now = function() {
    return new st().valueOf();
  };
  st.parse = function(e) {
    return Fe.parse(e);
  };
  st.toString = function() {
    return Fe.toString();
  };
  function Ng(e) {
    const t = new Fe(e.valueOf());
    if (Number.isNaN(t.getTime())) throw new TypeError(`mockdate: The time set is an invalid date: ${e}`);
    globalThis.Date = st, bo = t.valueOf();
  }
  function uc() {
    globalThis.Date = Fe;
  }
  const Ig = [
    "matchSnapshot",
    "toMatchSnapshot",
    "toMatchInlineSnapshot",
    "toThrowErrorMatchingSnapshot",
    "toThrowErrorMatchingInlineSnapshot",
    "throws",
    "Throw",
    "throw",
    "toThrow",
    "toThrowError"
  ];
  function Pg(e, t) {
    throw e.cause == null && (e.cause = new Error("Matcher did not succeed in time.")), tl(e, t);
  }
  function kg(e) {
    return function(n, r = {}) {
      var _a2;
      const o = ((_a2 = er().config.expect) == null ? void 0 : _a2.poll) ?? {}, { interval: s = o.interval ?? 50, timeout: i = o.timeout ?? 1e3, message: c } = r, u = e(null, c).withContext({
        poll: true
      });
      n = n.bind(u);
      const a = le.flag(u, "vitest-test");
      if (!a) throw new Error("expect.poll() must be called inside a test");
      const l = new Proxy(u, {
        get(f, h, p) {
          const d = Reflect.get(f, h, p);
          if (typeof d != "function") return d instanceof y ? l : d;
          if (h === "assert") return d;
          if (typeof h == "string" && Ig.includes(h)) throw new SyntaxError(`expect.poll() is not supported in combination with .${h}(). Use vi.waitFor() if your assertion condition is unstable.`);
          return function(...g) {
            const w = new Error("STACK_TRACE_ERROR"), T = async () => {
              const { setTimeout: O, clearTimeout: C } = Pt();
              let N = "fn", x = false;
              const L = O(() => {
                x = true;
              }, i);
              le.flag(u, "_name", h);
              try {
                for (; ; ) {
                  const H = x;
                  H && le.flag(u, "_isLastPollAttempt", true);
                  try {
                    N = "fn";
                    const D = await n();
                    return le.flag(u, "object", D), N = "assertion", await d.call(u, ...g);
                  } catch (D) {
                    (H || N === "assertion" && le.flag(u, "_poll.assert_once")) && Pg(D, w), await yd(s, O);
                  }
                }
              } finally {
                C(L);
              }
            };
            let $ = false;
            a.onFinished ?? (a.onFinished = []), a.onFinished.push(() => {
              if (!$) {
                const O = le.flag(u, "negate") ? "not." : "", C = `expect.${le.flag(u, "_poll.element") ? "element(locator)" : "poll(assertion)"}.${O}${String(h)}()`;
                throw tl(new Error(`${C} was not awaited. This assertion is asynchronous and must be awaited; otherwise, it is not executed to avoid unhandled rejections:

await ${C}
`), w);
              }
            });
            let A;
            return {
              then(O, C) {
                return $ = true, (A || (A = T())).then(O, C);
              },
              catch(O) {
                return (A || (A = T())).catch(O);
              },
              finally(O) {
                return (A || (A = T())).finally(O);
              },
              [Symbol.toStringTag]: "Promise"
            };
          };
        }
      });
      return l;
    };
  }
  function tl(e, t) {
    return t.stack !== void 0 && (e.stack = t.stack.replace(t.message, e.message)), e;
  }
  function jg(e, t, n) {
    const r = e.flag(t, "negate") ? "not." : "", o = `${e.flag(t, "_name")}(expected)`, s = e.flag(t, "promise");
    return `expect(actual)${s ? `.${s}` : ""}.${r}${o}`;
  }
  function Rg(e, t, n, r) {
    const o = e;
    if (o && t instanceof Promise) {
      t = t.finally(() => {
        if (!o.promises) return;
        const i = o.promises.indexOf(t);
        i !== -1 && o.promises.splice(i, 1);
      }), o.promises || (o.promises = []), o.promises.push(t);
      let s = false;
      return o.onFinished ?? (o.onFinished = []), o.onFinished.push(() => {
        var _a2;
        if (!s) {
          const i = (((_a2 = globalThis.__vitest_worker__) == null ? void 0 : _a2.onFilterStackTrace) || ((c) => c || ""))(r.stack);
          console.warn([
            `Promise returned by \`${n}\` was not awaited. `,
            "Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
            `Please remember to await the assertion.
`,
            i
          ].join(""));
        }
      }), {
        then(i, c) {
          return s = true, t.then(i, c);
        },
        catch(i) {
          return t.catch(i);
        },
        finally(i) {
          return t.finally(i);
        },
        [Symbol.toStringTag]: "Promise"
      };
    }
    return t;
  }
  let Sr;
  function qt() {
    return Sr || (Sr = new Cg({
      isEqual: (e, t) => U(e, t, [
        Me,
        It
      ])
    })), Sr;
  }
  function lc(e, t) {
    if (typeof e != "function") {
      if (!t) throw new Error(`expected must be a function, received ${typeof e}`);
      return e;
    }
    try {
      e();
    } catch (n) {
      return n;
    }
    throw new Error("snapshot function didn't throw");
  }
  function Bt(e) {
    return {
      filepath: e.file.filepath,
      name: kd(e).slice(1).join(" > "),
      testId: e.id
    };
  }
  const Dg = (e, t) => {
    function n(r, o) {
      const s = t.flag(o, "vitest-test");
      if (!s) throw new Error(`'${r}' cannot be used without test context`);
      return s;
    }
    for (const r of [
      "matchSnapshot",
      "toMatchSnapshot"
    ]) t.addMethod(e.Assertion.prototype, r, function(o, s) {
      if (t.flag(this, "_name", r), t.flag(this, "negate")) throw new Error(`${r} cannot be used with "not"`);
      const i = t.flag(this, "object"), c = n(r, this);
      typeof o == "string" && typeof s > "u" && (s = o, o = void 0);
      const u = t.flag(this, "message");
      qt().assert({
        received: i,
        message: s,
        isInline: false,
        properties: o,
        errorMessage: u,
        ...Bt(c)
      });
    });
    t.addMethod(e.Assertion.prototype, "toMatchFileSnapshot", function(r, o) {
      if (t.flag(this, "_name", "toMatchFileSnapshot"), t.flag(this, "negate")) throw new Error('toMatchFileSnapshot cannot be used with "not"');
      const s = new Error("resolves"), i = t.flag(this, "object"), c = n("toMatchFileSnapshot", this), u = t.flag(this, "message");
      return Rg(c, qt().assertRaw({
        received: i,
        message: o,
        isInline: false,
        rawSnapshot: {
          file: r
        },
        errorMessage: u,
        ...Bt(c)
      }), jg(t, this), s);
    }), t.addMethod(e.Assertion.prototype, "toMatchInlineSnapshot", function(o, s, i) {
      var _a2;
      if (t.flag(this, "_name", "toMatchInlineSnapshot"), t.flag(this, "negate")) throw new Error('toMatchInlineSnapshot cannot be used with "not"');
      const c = n("toMatchInlineSnapshot", this);
      if (c.each || ((_a2 = c.suite) == null ? void 0 : _a2.each)) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const u = t.flag(this, "object"), a = t.flag(this, "error");
      typeof o == "string" && (i = s, s = o, o = void 0), s && (s = rc(s));
      const l = t.flag(this, "message");
      qt().assert({
        received: u,
        message: i,
        isInline: true,
        properties: o,
        inlineSnapshot: s,
        error: a,
        errorMessage: l,
        ...Bt(c)
      });
    }), t.addMethod(e.Assertion.prototype, "toThrowErrorMatchingSnapshot", function(r) {
      if (t.flag(this, "_name", "toThrowErrorMatchingSnapshot"), t.flag(this, "negate")) throw new Error('toThrowErrorMatchingSnapshot cannot be used with "not"');
      const o = t.flag(this, "object"), s = n("toThrowErrorMatchingSnapshot", this), i = t.flag(this, "promise"), c = t.flag(this, "message");
      qt().assert({
        received: lc(o, i),
        message: r,
        errorMessage: c,
        ...Bt(s)
      });
    }), t.addMethod(e.Assertion.prototype, "toThrowErrorMatchingInlineSnapshot", function(o, s) {
      var _a2;
      if (t.flag(this, "negate")) throw new Error('toThrowErrorMatchingInlineSnapshot cannot be used with "not"');
      const i = n("toThrowErrorMatchingInlineSnapshot", this);
      if (i.each || ((_a2 = i.suite) == null ? void 0 : _a2.each)) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const c = t.flag(this, "object"), u = t.flag(this, "error"), a = t.flag(this, "promise"), l = t.flag(this, "message");
      o && (o = rc(o)), qt().assert({
        received: lc(c, a),
        message: s,
        inlineSnapshot: o,
        isInline: true,
        error: u,
        errorMessage: l,
        ...Bt(i)
      });
    }), t.addMethod(e.expect, "addSnapshotSerializer", wg);
  };
  yt(gd);
  yt(hd);
  yt(Dg);
  yt(fd);
  Fg = function(e) {
    const t = ((s, i) => {
      const { assertionCalls: c } = Kt(t);
      return gr({
        assertionCalls: c + 1
      }, t), ht(s, i);
    });
    Object.assign(t, ht), Object.assign(t, globalThis[ds]), t.getState = () => Kt(t), t.setState = (s) => gr(s, t);
    const n = Kt(globalThis[Hn]) || {};
    gr({
      ...n,
      assertionCalls: 0,
      isExpectingAssertions: false,
      isExpectingAssertionsError: null,
      expectedAssertionsNumber: null,
      expectedAssertionsNumberErrorGen: null,
      get testPath() {
        return er().filepath;
      },
      currentTestName: n.currentTestName
    }, t), t.assert = m, t.extend = (s) => ht.extend(t, s), t.addEqualityTesters = (s) => Kp(s), t.soft = (...s) => t(...s).withContext({
      soft: true
    }), t.poll = kg(t), t.unreachable = (s) => {
      m.fail(`expected${s ? ` "${s}" ` : " "}not to be reached`);
    };
    function r(s) {
      const i = () => new Error(`expected number of assertions to be ${s}, but got ${t.getState().assertionCalls}`);
      Error.captureStackTrace && Error.captureStackTrace(i(), r), t.setState({
        expectedAssertionsNumber: s,
        expectedAssertionsNumberErrorGen: i
      });
    }
    function o() {
      const s = new Error("expected any number of assertion, but got none");
      Error.captureStackTrace && Error.captureStackTrace(s, o), t.setState({
        isExpectingAssertions: true,
        isExpectingAssertionsError: s
      });
    }
    return le.addMethod(t, "assertions", r), le.addMethod(t, "hasAssertions", o), t.extend(Fp), t;
  };
  Lg = Fg();
  Object.defineProperty(globalThis, Hn, {
    value: Lg,
    writable: true,
    configurable: true
  });
  var wt = {}, vr, fc;
  function qg() {
    if (fc) return vr;
    fc = 1;
    var e;
    return typeof yo < "u" ? e = yo : typeof window < "u" ? e = window : e = self, vr = e, vr;
  }
  var $r, hc;
  function Bg() {
    if (hc) return $r;
    hc = 1;
    let e;
    try {
      ({}).__proto__, e = false;
    } catch {
      e = true;
    }
    return $r = e, $r;
  }
  var _r, pc;
  function kt() {
    if (pc) return _r;
    pc = 1;
    var e = Function.call, t = Bg(), n = [
      "size",
      "caller",
      "callee",
      "arguments"
    ];
    return t && n.push("__proto__"), _r = function(o) {
      return Object.getOwnPropertyNames(o).reduce(function(s, i) {
        return n.includes(i) || typeof o[i] != "function" || (s[i] = e.bind(o[i])), s;
      }, /* @__PURE__ */ Object.create(null));
    }, _r;
  }
  var Or, dc;
  function kn() {
    if (dc) return Or;
    dc = 1;
    var e = kt();
    return Or = e(Array.prototype), Or;
  }
  var xr, mc;
  function zg() {
    if (mc) return xr;
    mc = 1;
    var e = kn().every;
    function t(o, s) {
      return o[s.id] === void 0 && (o[s.id] = 0), o[s.id] < s.callCount;
    }
    function n(o, s, i, c) {
      var u = true;
      return i !== c.length - 1 && (u = s.calledBefore(c[i + 1])), t(o, s) && u ? (o[s.id] += 1, true) : false;
    }
    function r(o) {
      var s = {}, i = arguments.length > 1 ? arguments : o;
      return e(i, n.bind(null, s));
    }
    return xr = r, xr;
  }
  var Mr, gc;
  function Vg() {
    if (gc) return Mr;
    gc = 1;
    function e(t) {
      return t.constructor && t.constructor.name || null;
    }
    return Mr = e, Mr;
  }
  var Ar = {}, yc;
  function Wg() {
    return yc || (yc = 1, (function(e) {
      e.wrap = function(t, n) {
        var r = function() {
          return e.printWarning(n), t.apply(this, arguments);
        };
        return t.prototype && (r.prototype = t.prototype), r;
      }, e.defaultMsg = function(t, n) {
        return `${t}.${n} is deprecated and will be removed from the public API in a future version of ${t}.`;
      }, e.printWarning = function(t) {
        typeof process == "object" && process.emitWarning ? process.emitWarning(t) : console.info ? console.info(t) : console.log(t);
      };
    })(Ar)), Ar;
  }
  var Cr, bc;
  function Ug() {
    return bc || (bc = 1, Cr = function(t, n) {
      var r = true;
      try {
        t.forEach(function() {
          if (!n.apply(this, arguments)) throw new Error();
        });
      } catch {
        r = false;
      }
      return r;
    }), Cr;
  }
  var Nr, wc;
  function Kg() {
    return wc || (wc = 1, Nr = function(t) {
      if (!t) return "";
      try {
        return t.displayName || t.name || (String(t).match(/function ([^\s(]+)/) || [])[1];
      } catch {
        return "";
      }
    }), Nr;
  }
  var Ir, Tc;
  function Gg() {
    if (Tc) return Ir;
    Tc = 1;
    var e = kn().sort, t = kn().slice;
    function n(o, s) {
      var i = o.getCall(0), c = s.getCall(0), u = i && i.callId || -1, a = c && c.callId || -1;
      return u < a ? -1 : 1;
    }
    function r(o) {
      return e(t(o), n);
    }
    return Ir = r, Ir;
  }
  var Pr, Ec;
  function Yg() {
    if (Ec) return Pr;
    Ec = 1;
    var e = kt();
    return Pr = e(Function.prototype), Pr;
  }
  var kr, Sc;
  function Jg() {
    if (Sc) return kr;
    Sc = 1;
    var e = kt();
    return kr = e(Map.prototype), kr;
  }
  var jr, vc;
  function Xg() {
    if (vc) return jr;
    vc = 1;
    var e = kt();
    return jr = e(Object.prototype), jr;
  }
  var Rr, $c;
  function Hg() {
    if ($c) return Rr;
    $c = 1;
    var e = kt();
    return Rr = e(Set.prototype), Rr;
  }
  var Dr, _c;
  function Zg() {
    if (_c) return Dr;
    _c = 1;
    var e = kt();
    return Dr = e(String.prototype), Dr;
  }
  var Fr, Oc;
  function Qg() {
    return Oc || (Oc = 1, Fr = {
      array: kn(),
      function: Yg(),
      map: Jg(),
      object: Xg(),
      set: Hg(),
      string: Zg()
    }), Fr;
  }
  var Sn = {
    exports: {}
  }, ey = Sn.exports, xc;
  function ty() {
    return xc || (xc = 1, (function(e, t) {
      (function(n, r) {
        e.exports = r();
      })(ey, (function() {
        var n = typeof Promise == "function", r = typeof self == "object" ? self : yo, o = typeof Symbol < "u", s = typeof Map < "u", i = typeof Set < "u", c = typeof WeakMap < "u", u = typeof WeakSet < "u", a = typeof DataView < "u", l = o && typeof Symbol.iterator < "u", f = o && typeof Symbol.toStringTag < "u", h = i && typeof Set.prototype.entries == "function", p = s && typeof Map.prototype.entries == "function", d = h && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), g = p && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), w = l && typeof Array.prototype[Symbol.iterator] == "function", T = w && Object.getPrototypeOf([][Symbol.iterator]()), $ = l && typeof String.prototype[Symbol.iterator] == "function", A = $ && Object.getPrototypeOf(""[Symbol.iterator]()), O = 8, C = -1;
        function N(x) {
          var L = typeof x;
          if (L !== "object") return L;
          if (x === null) return "null";
          if (x === r) return "global";
          if (Array.isArray(x) && (f === false || !(Symbol.toStringTag in x))) return "Array";
          if (typeof window == "object" && window !== null) {
            if (typeof window.location == "object" && x === window.location) return "Location";
            if (typeof window.document == "object" && x === window.document) return "Document";
            if (typeof window.navigator == "object") {
              if (typeof window.navigator.mimeTypes == "object" && x === window.navigator.mimeTypes) return "MimeTypeArray";
              if (typeof window.navigator.plugins == "object" && x === window.navigator.plugins) return "PluginArray";
            }
            if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && x instanceof window.HTMLElement) {
              if (x.tagName === "BLOCKQUOTE") return "HTMLQuoteElement";
              if (x.tagName === "TD") return "HTMLTableDataCellElement";
              if (x.tagName === "TH") return "HTMLTableHeaderCellElement";
            }
          }
          var H = f && x[Symbol.toStringTag];
          if (typeof H == "string") return H;
          var D = Object.getPrototypeOf(x);
          return D === RegExp.prototype ? "RegExp" : D === Date.prototype ? "Date" : n && D === Promise.prototype ? "Promise" : i && D === Set.prototype ? "Set" : s && D === Map.prototype ? "Map" : u && D === WeakSet.prototype ? "WeakSet" : c && D === WeakMap.prototype ? "WeakMap" : a && D === DataView.prototype ? "DataView" : s && D === g ? "Map Iterator" : i && D === d ? "Set Iterator" : w && D === T ? "Array Iterator" : $ && D === A ? "String Iterator" : D === null ? "Object" : Object.prototype.toString.call(x).slice(O, C);
        }
        return N;
      }));
    })(Sn)), Sn.exports;
  }
  var Lr, Mc;
  function ny() {
    if (Mc) return Lr;
    Mc = 1;
    var e = ty();
    return Lr = function(n) {
      return e(n).toLowerCase();
    }, Lr;
  }
  var qr, Ac;
  function ry() {
    if (Ac) return qr;
    Ac = 1;
    function e(t) {
      return t && t.toString ? t.toString() : String(t);
    }
    return qr = e, qr;
  }
  var Br, Cc;
  function oy() {
    return Cc || (Cc = 1, Br = {
      global: qg(),
      calledInOrder: zg(),
      className: Vg(),
      deprecated: Wg(),
      every: Ug(),
      functionName: Kg(),
      orderByFirstCall: Gg(),
      prototypes: Qg(),
      typeOf: ny(),
      valueToString: ry()
    }), Br;
  }
  var Nc;
  function sy() {
    if (Nc) return wt;
    Nc = 1;
    const e = oy().global;
    let t, n;
    if (typeof __vitest_required__ < "u") {
      try {
        t = __vitest_required__.timers;
      } catch {
      }
      try {
        n = __vitest_required__.timersPromises;
      } catch {
      }
    }
    function r(s) {
      const i = Math.pow(2, 31) - 1, c = 1e12, u = function() {
      }, a = function() {
        return [];
      }, l = {};
      let f, h = false;
      s.setTimeout && (l.setTimeout = true, f = s.setTimeout(u, 0), h = typeof f == "object"), l.clearTimeout = !!s.clearTimeout, l.setInterval = !!s.setInterval, l.clearInterval = !!s.clearInterval, l.hrtime = s.process && typeof s.process.hrtime == "function", l.hrtimeBigint = l.hrtime && typeof s.process.hrtime.bigint == "function", l.nextTick = s.process && typeof s.process.nextTick == "function";
      const p = s.process && s.__vitest_required__ && s.__vitest_required__.util.promisify;
      l.performance = s.performance && typeof s.performance.now == "function";
      const d = s.Performance && (typeof s.Performance).match(/^(function|object)$/), g = s.performance && s.performance.constructor && s.performance.constructor.prototype;
      l.queueMicrotask = s.hasOwnProperty("queueMicrotask"), l.requestAnimationFrame = s.requestAnimationFrame && typeof s.requestAnimationFrame == "function", l.cancelAnimationFrame = s.cancelAnimationFrame && typeof s.cancelAnimationFrame == "function", l.requestIdleCallback = s.requestIdleCallback && typeof s.requestIdleCallback == "function", l.cancelIdleCallbackPresent = s.cancelIdleCallback && typeof s.cancelIdleCallback == "function", l.setImmediate = s.setImmediate && typeof s.setImmediate == "function", l.clearImmediate = s.clearImmediate && typeof s.clearImmediate == "function", l.Intl = s.Intl && typeof s.Intl == "object", s.clearTimeout && s.clearTimeout(f);
      const w = s.Date, T = l.Intl ? Object.defineProperties(/* @__PURE__ */ Object.create(null), Object.getOwnPropertyDescriptors(s.Intl)) : void 0;
      let $ = c;
      if (w === void 0) throw new Error("The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)");
      l.Date = true;
      class A {
        constructor(_, M, P, b) {
          this.name = _, this.entryType = M, this.startTime = P, this.duration = b;
        }
        toJSON() {
          return JSON.stringify({
            ...this
          });
        }
      }
      function O(S) {
        return Number.isFinite ? Number.isFinite(S) : isFinite(S);
      }
      let C = false;
      function N(S, _) {
        S.loopLimit && _ === S.loopLimit - 1 && (C = true);
      }
      function x() {
        C = false;
      }
      function L(S) {
        if (!S) return 0;
        const _ = S.split(":"), M = _.length;
        let P = M, b = 0, R;
        if (M > 3 || !/^(\d\d:){0,2}\d\d?$/.test(S)) throw new Error("tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits");
        for (; P--; ) {
          if (R = parseInt(_[P], 10), R >= 60) throw new Error(`Invalid time ${S}`);
          b += R * Math.pow(60, M - P - 1);
        }
        return b * 1e3;
      }
      function H(S) {
        const M = S * 1e6 % 1e6, P = M < 0 ? M + 1e6 : M;
        return Math.floor(P);
      }
      function D(S) {
        if (!S) return 0;
        if (typeof S.getTime == "function") return S.getTime();
        if (typeof S == "number") return S;
        throw new TypeError("now should be milliseconds since UNIX epoch");
      }
      function G(S, _, M) {
        return M && M.callAt >= S && M.callAt <= _;
      }
      function te(S, _) {
        const M = new Error(`Aborting after running ${S.loopLimit} timers, assuming an infinite loop!`);
        if (!_.error) return M;
        const P = /target\.*[<|(|[].*?[>|\]|)]\s*/;
        let b = new RegExp(String(Object.keys(S).join("|")));
        h && (b = new RegExp(`\\s+at (Object\\.)?(?:${Object.keys(S).join("|")})\\s+`));
        let R = -1;
        _.error.stack.split(`
`).some(function(B, z) {
          return B.match(P) ? (R = z, true) : B.match(b) ? (R = z, false) : R >= 0;
        });
        const W = `${M}
${_.type || "Microtask"} - ${_.func.name || "anonymous"}
${_.error.stack.split(`
`).slice(R + 1).join(`
`)}`;
        try {
          Object.defineProperty(M, "stack", {
            value: W
          });
        } catch {
        }
        return M;
      }
      function ce() {
        class S extends w {
          constructor(P, b, R, W, B, z, j) {
            arguments.length === 0 ? super(S.clock.now) : super(...arguments), Object.defineProperty(this, "constructor", {
              value: w,
              enumerable: false
            });
          }
          static [Symbol.hasInstance](P) {
            return P instanceof w;
          }
        }
        return S.isFake = true, w.now && (S.now = function() {
          return S.clock.now;
        }), w.toSource && (S.toSource = function() {
          return w.toSource();
        }), S.toString = function() {
          return w.toString();
        }, new Proxy(S, {
          apply() {
            if (this instanceof S) throw new TypeError("A Proxy should only capture `new` calls with the `construct` handler. This is not supposed to be possible, so check the logic.");
            return new w(S.clock.now).toString();
          }
        });
      }
      function ae() {
        const S = {};
        return Object.getOwnPropertyNames(T).forEach((_) => S[_] = T[_]), S.DateTimeFormat = function(..._) {
          const M = new T.DateTimeFormat(..._), P = {};
          return [
            "formatRange",
            "formatRangeToParts",
            "resolvedOptions"
          ].forEach((b) => {
            P[b] = M[b].bind(M);
          }), [
            "format",
            "formatToParts"
          ].forEach((b) => {
            P[b] = function(R) {
              return M[b](R || S.clock.now);
            };
          }), P;
        }, S.DateTimeFormat.prototype = Object.create(T.DateTimeFormat.prototype), S.DateTimeFormat.supportedLocalesOf = T.DateTimeFormat.supportedLocalesOf, S;
      }
      function ne(S, _) {
        S.jobs || (S.jobs = []), S.jobs.push(_);
      }
      function Y(S) {
        if (S.jobs) {
          for (let _ = 0; _ < S.jobs.length; _++) {
            const M = S.jobs[_];
            if (M.func.apply(null, M.args), N(S, _), S.loopLimit && _ > S.loopLimit) throw te(S, M);
          }
          x(), S.jobs = [];
        }
      }
      function ee(S, _) {
        if (_.func === void 0) throw new Error("Callback must be provided to timer calls");
        if (h && typeof _.func != "function") throw new TypeError(`[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${_.func} of type ${typeof _.func}`);
        if (C && (_.error = new Error()), _.type = _.immediate ? "Immediate" : "Timeout", _.hasOwnProperty("delay") && (typeof _.delay != "number" && (_.delay = parseInt(_.delay, 10)), O(_.delay) || (_.delay = 0), _.delay = _.delay > i ? 1 : _.delay, _.delay = Math.max(0, _.delay)), _.hasOwnProperty("interval") && (_.type = "Interval", _.interval = _.interval > i ? 1 : _.interval), _.hasOwnProperty("animation") && (_.type = "AnimationFrame", _.animation = true), _.hasOwnProperty("idleCallback") && (_.type = "IdleCallback", _.idleCallback = true), S.timers || (S.timers = {}), _.id = $++, _.createdAt = S.now, _.callAt = S.now + (parseInt(_.delay) || (S.duringTick ? 1 : 0)), S.timers[_.id] = _, h) {
          const M = {
            refed: true,
            ref: function() {
              return this.refed = true, M;
            },
            unref: function() {
              return this.refed = false, M;
            },
            hasRef: function() {
              return this.refed;
            },
            refresh: function() {
              return _.callAt = S.now + (parseInt(_.delay) || (S.duringTick ? 1 : 0)), S.timers[_.id] = _, M;
            },
            [Symbol.toPrimitive]: function() {
              return _.id;
            }
          };
          return M;
        }
        return _.id;
      }
      function $e(S, _) {
        if (S.callAt < _.callAt) return -1;
        if (S.callAt > _.callAt) return 1;
        if (S.immediate && !_.immediate) return -1;
        if (!S.immediate && _.immediate) return 1;
        if (S.createdAt < _.createdAt) return -1;
        if (S.createdAt > _.createdAt) return 1;
        if (S.id < _.id) return -1;
        if (S.id > _.id) return 1;
      }
      function ue(S, _, M) {
        const P = S.timers;
        let b = null, R, W;
        for (R in P) P.hasOwnProperty(R) && (W = G(_, M, P[R]), W && (!b || $e(b, P[R]) === 1) && (b = P[R]));
        return b;
      }
      function de(S) {
        const _ = S.timers;
        let M = null, P;
        for (P in _) _.hasOwnProperty(P) && (!M || $e(M, _[P]) === 1) && (M = _[P]);
        return M;
      }
      function Pe(S) {
        const _ = S.timers;
        let M = null, P;
        for (P in _) _.hasOwnProperty(P) && (!M || $e(M, _[P]) === -1) && (M = _[P]);
        return M;
      }
      function ye(S, _) {
        if (typeof _.interval == "number" ? S.timers[_.id].callAt += _.interval : delete S.timers[_.id], typeof _.func == "function") _.func.apply(null, _.args);
        else {
          const M = eval;
          (function() {
            M(_.func);
          })();
        }
      }
      function we(S) {
        return S === "IdleCallback" || S === "AnimationFrame" ? `cancel${S}` : `clear${S}`;
      }
      function Ye(S) {
        return S === "IdleCallback" || S === "AnimationFrame" ? `request${S}` : `set${S}`;
      }
      function Ae() {
        let S = 0;
        return function(_) {
          !S++ && console.warn(_);
        };
      }
      const Te = Ae();
      function Ee(S, _, M) {
        if (!_) return;
        S.timers || (S.timers = {});
        const P = Number(_);
        if (Number.isNaN(P) || P < c) {
          const b = we(M);
          if (S.shouldClearNativeTimers === true) {
            const R = S[`_${b}`];
            return typeof R == "function" ? R(_) : void 0;
          }
          Te(`FakeTimers: ${b} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`);
        }
        if (S.timers.hasOwnProperty(P)) {
          const b = S.timers[P];
          if (b.type === M || b.type === "Timeout" && M === "Interval" || b.type === "Interval" && M === "Timeout") delete S.timers[P];
          else {
            const R = we(M), W = Ye(b.type);
            throw new Error(`Cannot clear timer: timer created with ${W}() but cleared with ${R}()`);
          }
        }
      }
      function bt(S, _) {
        let M, P, b;
        const R = "_hrtime", W = "_nextTick";
        for (P = 0, b = S.methods.length; P < b; P++) {
          if (M = S.methods[P], M === "hrtime" && s.process) s.process.hrtime = S[R];
          else if (M === "nextTick" && s.process) s.process.nextTick = S[W];
          else if (M === "performance") {
            const B = Object.getOwnPropertyDescriptor(S, `_${M}`);
            B && B.get && !B.set ? Object.defineProperty(s, M, B) : B.configurable && (s[M] = S[`_${M}`]);
          } else if (s[M] && s[M].hadOwnProperty) s[M] = S[`_${M}`];
          else try {
            delete s[M];
          } catch {
          }
          if (S.timersModuleMethods !== void 0) for (let B = 0; B < S.timersModuleMethods.length; B++) {
            const z = S.timersModuleMethods[B];
            t[z.methodName] = z.original;
          }
          if (S.timersPromisesModuleMethods !== void 0) for (let B = 0; B < S.timersPromisesModuleMethods.length; B++) {
            const z = S.timersPromisesModuleMethods[B];
            n[z.methodName] = z.original;
          }
        }
        _.shouldAdvanceTime === true && s.clearInterval(S.attachedInterval), S.methods = [];
        for (const [B, z] of S.abortListenerMap.entries()) z.removeEventListener("abort", B), S.abortListenerMap.delete(B);
        return S.timers ? Object.keys(S.timers).map(function(z) {
          return S.timers[z];
        }) : [];
      }
      function Ve(S, _, M) {
        if (M[_].hadOwnProperty = Object.prototype.hasOwnProperty.call(S, _), M[`_${_}`] = S[_], _ === "Date") S[_] = M[_];
        else if (_ === "Intl") S[_] = M[_];
        else if (_ === "performance") {
          const P = Object.getOwnPropertyDescriptor(S, _);
          if (P && P.get && !P.set) {
            Object.defineProperty(M, `_${_}`, P);
            const b = Object.getOwnPropertyDescriptor(M, _);
            Object.defineProperty(S, _, b);
          } else S[_] = M[_];
        } else S[_] = function() {
          return M[_].apply(M, arguments);
        }, Object.defineProperties(S[_], Object.getOwnPropertyDescriptors(M[_]));
        S[_].clock = M;
      }
      function jt(S, _) {
        S.tick(_);
      }
      const me = {
        setTimeout: s.setTimeout,
        clearTimeout: s.clearTimeout,
        setInterval: s.setInterval,
        clearInterval: s.clearInterval,
        Date: s.Date
      };
      l.setImmediate && (me.setImmediate = s.setImmediate), l.clearImmediate && (me.clearImmediate = s.clearImmediate), l.hrtime && (me.hrtime = s.process.hrtime), l.nextTick && (me.nextTick = s.process.nextTick), l.performance && (me.performance = s.performance), l.requestAnimationFrame && (me.requestAnimationFrame = s.requestAnimationFrame), l.queueMicrotask && (me.queueMicrotask = s.queueMicrotask), l.cancelAnimationFrame && (me.cancelAnimationFrame = s.cancelAnimationFrame), l.requestIdleCallback && (me.requestIdleCallback = s.requestIdleCallback), l.cancelIdleCallback && (me.cancelIdleCallback = s.cancelIdleCallback), l.Intl && (me.Intl = T);
      const Je = s.setImmediate || s.setTimeout;
      function _s(S, _) {
        S = Math.floor(D(S)), _ = _ || 1e3;
        let M = 0;
        const P = [
          0,
          0
        ], b = {
          now: S,
          Date: ce(),
          loopLimit: _
        };
        b.Date.clock = b;
        function R() {
          return 16 - (b.now - S) % 16;
        }
        function W(j) {
          const I = b.now - P[0] - S, k = Math.floor(I / 1e3), F = (I - k * 1e3) * 1e6 + M - P[1];
          if (Array.isArray(j)) {
            if (j[1] > 1e9) throw new TypeError("Number of nanoseconds can't exceed a billion");
            const X = j[0];
            let re = F - j[1], Xe = k - X;
            return re < 0 && (re += 1e9, Xe -= 1), [
              Xe,
              re
            ];
          }
          return [
            k,
            F
          ];
        }
        function B() {
          const j = W();
          return j[0] * 1e3 + j[1] / 1e6;
        }
        l.hrtimeBigint && (W.bigint = function() {
          const j = W();
          return BigInt(j[0]) * BigInt(1e9) + BigInt(j[1]);
        }), l.Intl && (b.Intl = ae(), b.Intl.clock = b), b.requestIdleCallback = function(I, k) {
          let F = 0;
          b.countTimers() > 0 && (F = 50);
          const X = ee(b, {
            func: I,
            args: Array.prototype.slice.call(arguments, 2),
            delay: typeof k > "u" ? F : Math.min(k, F),
            idleCallback: true
          });
          return Number(X);
        }, b.cancelIdleCallback = function(I) {
          return Ee(b, I, "IdleCallback");
        }, b.setTimeout = function(I, k) {
          return ee(b, {
            func: I,
            args: Array.prototype.slice.call(arguments, 2),
            delay: k
          });
        }, typeof s.Promise < "u" && p && (b.setTimeout[p.custom] = function(I, k) {
          return new s.Promise(function(X) {
            ee(b, {
              func: X,
              args: [
                k
              ],
              delay: I
            });
          });
        }), b.clearTimeout = function(I) {
          return Ee(b, I, "Timeout");
        }, b.nextTick = function(I) {
          return ne(b, {
            func: I,
            args: Array.prototype.slice.call(arguments, 1),
            error: C ? new Error() : null
          });
        }, b.queueMicrotask = function(I) {
          return b.nextTick(I);
        }, b.setInterval = function(I, k) {
          return k = parseInt(k, 10), ee(b, {
            func: I,
            args: Array.prototype.slice.call(arguments, 2),
            delay: k,
            interval: k
          });
        }, b.clearInterval = function(I) {
          return Ee(b, I, "Interval");
        }, l.setImmediate && (b.setImmediate = function(I) {
          return ee(b, {
            func: I,
            args: Array.prototype.slice.call(arguments, 1),
            immediate: true
          });
        }, typeof s.Promise < "u" && p && (b.setImmediate[p.custom] = function(I) {
          return new s.Promise(function(F) {
            ee(b, {
              func: F,
              args: [
                I
              ],
              immediate: true
            });
          });
        }), b.clearImmediate = function(I) {
          return Ee(b, I, "Immediate");
        }), b.countTimers = function() {
          return Object.keys(b.timers || {}).length + (b.jobs || []).length;
        }, b.requestAnimationFrame = function(I) {
          const k = ee(b, {
            func: I,
            delay: R(),
            get args() {
              return [
                B()
              ];
            },
            animation: true
          });
          return Number(k);
        }, b.cancelAnimationFrame = function(I) {
          return Ee(b, I, "AnimationFrame");
        }, b.runMicrotasks = function() {
          Y(b);
        };
        function z(j, I, k, F) {
          const X = typeof j == "number" ? j : L(j), re = Math.floor(X), Xe = H(X);
          let ke = M + Xe, fe = b.now + re;
          if (X < 0) throw new TypeError("Negative ticks are not supported");
          ke >= 1e6 && (fe += 1, ke -= 1e6), M = ke;
          let je = b.now, ct = b.now, Re, Qe, _e, Os, nr, rr;
          b.duringTick = true, _e = b.now, Y(b), _e !== b.now && (je += b.now - _e, fe += b.now - _e);
          function xs() {
            for (Re = ue(b, je, fe); Re && je <= fe; ) {
              if (b.timers[Re.id]) {
                je = Re.callAt, b.now = Re.callAt, _e = b.now;
                try {
                  Y(b), ye(b, Re);
                } catch (Rt) {
                  Qe = Qe || Rt;
                }
                if (I) {
                  Je(Os);
                  return;
                }
                nr();
              }
              rr();
            }
            if (_e = b.now, Y(b), _e !== b.now && (je += b.now - _e, fe += b.now - _e), b.duringTick = false, Re = ue(b, je, fe), Re) try {
              b.tick(fe - b.now);
            } catch (Rt) {
              Qe = Qe || Rt;
            }
            else b.now = fe, M = ke;
            if (Qe) throw Qe;
            if (I) k(b.now);
            else return b.now;
          }
          return Os = I && function() {
            try {
              nr(), rr(), xs();
            } catch (Rt) {
              F(Rt);
            }
          }, nr = function() {
            _e !== b.now && (je += b.now - _e, fe += b.now - _e, ct += b.now - _e);
          }, rr = function() {
            Re = ue(b, ct, fe), ct = je;
          }, xs();
        }
        return b.tick = function(I) {
          return z(I, false);
        }, typeof s.Promise < "u" && (b.tickAsync = function(I) {
          return new s.Promise(function(k, F) {
            Je(function() {
              try {
                z(I, true, k, F);
              } catch (X) {
                F(X);
              }
            });
          });
        }), b.next = function() {
          Y(b);
          const I = de(b);
          if (!I) return b.now;
          b.duringTick = true;
          try {
            return b.now = I.callAt, ye(b, I), Y(b), b.now;
          } finally {
            b.duringTick = false;
          }
        }, typeof s.Promise < "u" && (b.nextAsync = function() {
          return new s.Promise(function(I, k) {
            Je(function() {
              try {
                const F = de(b);
                if (!F) {
                  I(b.now);
                  return;
                }
                let X;
                b.duringTick = true, b.now = F.callAt;
                try {
                  ye(b, F);
                } catch (re) {
                  X = re;
                }
                b.duringTick = false, Je(function() {
                  X ? k(X) : I(b.now);
                });
              } catch (F) {
                k(F);
              }
            });
          });
        }), b.runAll = function() {
          let I, k;
          for (Y(b), k = 0; k < b.loopLimit; k++) {
            if (!b.timers || (I = Object.keys(b.timers).length, I === 0)) return x(), b.now;
            b.next(), N(b, k);
          }
          const F = de(b);
          throw te(b, F);
        }, b.runToFrame = function() {
          return b.tick(R());
        }, typeof s.Promise < "u" && (b.runAllAsync = function() {
          return new s.Promise(function(I, k) {
            let F = 0;
            function X() {
              Je(function() {
                try {
                  Y(b);
                  let re;
                  if (F < b.loopLimit) {
                    if (!b.timers) {
                      x(), I(b.now);
                      return;
                    }
                    if (re = Object.keys(b.timers).length, re === 0) {
                      x(), I(b.now);
                      return;
                    }
                    b.next(), F++, X(), N(b, F);
                    return;
                  }
                  const Xe = de(b);
                  k(te(b, Xe));
                } catch (re) {
                  k(re);
                }
              });
            }
            X();
          });
        }), b.runToLast = function() {
          const I = Pe(b);
          return I ? b.tick(I.callAt - b.now) : (Y(b), b.now);
        }, typeof s.Promise < "u" && (b.runToLastAsync = function() {
          return new s.Promise(function(I, k) {
            Je(function() {
              try {
                const F = Pe(b);
                F || (Y(b), I(b.now)), I(b.tickAsync(F.callAt - b.now));
              } catch (F) {
                k(F);
              }
            });
          });
        }), b.reset = function() {
          M = 0, b.timers = {}, b.jobs = [], b.now = S;
        }, b.setSystemTime = function(I) {
          const k = D(I), F = k - b.now;
          let X, re;
          P[0] = P[0] + F, P[1] = P[1] + M, b.now = k, M = 0;
          for (X in b.timers) b.timers.hasOwnProperty(X) && (re = b.timers[X], re.createdAt += F, re.callAt += F);
        }, b.jump = function(I) {
          const k = typeof I == "number" ? I : L(I), F = Math.floor(k);
          for (const X of Object.values(b.timers)) b.now + F > X.callAt && (X.callAt = b.now + F);
          b.tick(F);
        }, l.performance && (b.performance = /* @__PURE__ */ Object.create(null), b.performance.now = B), l.hrtime && (b.hrtime = W), b;
      }
      function rl(S) {
        if (arguments.length > 1 || S instanceof Date || Array.isArray(S) || typeof S == "number") throw new TypeError(`FakeTimers.install called with ${String(S)} install requires an object parameter`);
        if (s.Date.isFake === true) throw new TypeError("Can't install fake timers twice on the same global object.");
        if (S = typeof S < "u" ? S : {}, S.shouldAdvanceTime = S.shouldAdvanceTime || false, S.advanceTimeDelta = S.advanceTimeDelta || 20, S.shouldClearNativeTimers = S.shouldClearNativeTimers || false, S.target) throw new TypeError("config.target is no longer supported. Use `withGlobal(target)` instead.");
        function _(R) {
          if (!S.ignoreMissingTimers) throw new ReferenceError(`non-existent timers and/or objects cannot be faked: '${R}'`);
        }
        let M, P;
        const b = _s(S.now, S.loopLimit);
        if (b.shouldClearNativeTimers = S.shouldClearNativeTimers, b.uninstall = function() {
          return bt(b, S);
        }, b.abortListenerMap = /* @__PURE__ */ new Map(), b.methods = S.toFake || [], b.methods.length === 0 && (b.methods = Object.keys(me)), S.shouldAdvanceTime === true) {
          const R = jt.bind(null, b, S.advanceTimeDelta), W = s.setInterval(R, S.advanceTimeDelta);
          b.attachedInterval = W;
        }
        if (b.methods.includes("performance")) {
          const R = (() => {
            if (g) return s.performance.constructor.prototype;
            if (d) return s.Performance.prototype;
          })();
          if (R) Object.getOwnPropertyNames(R).forEach(function(W) {
            W !== "now" && (b.performance[W] = W.indexOf("getEntries") === 0 ? a : u);
          }), b.performance.mark = (W) => new A(W, "mark", 0, 0), b.performance.measure = (W) => new A(W, "measure", 0, 100), b.performance.timeOrigin = D(S.now);
          else if ((S.toFake || []).includes("performance")) return _("performance");
        }
        for (s === e && t && (b.timersModuleMethods = []), s === e && n && (b.timersPromisesModuleMethods = []), M = 0, P = b.methods.length; M < P; M++) {
          const R = b.methods[M];
          if (!l[R]) {
            _(R);
            continue;
          }
          if (R === "hrtime" ? s.process && typeof s.process.hrtime == "function" && Ve(s.process, R, b) : R === "nextTick" ? s.process && typeof s.process.nextTick == "function" && Ve(s.process, R, b) : Ve(s, R, b), b.timersModuleMethods !== void 0 && t[R]) {
            const W = t[R];
            b.timersModuleMethods.push({
              methodName: R,
              original: W
            }), t[R] = s[R];
          }
          b.timersPromisesModuleMethods !== void 0 && (R === "setTimeout" ? (b.timersPromisesModuleMethods.push({
            methodName: "setTimeout",
            original: n.setTimeout
          }), n.setTimeout = (W, B, z = {}) => new Promise((j, I) => {
            const k = () => {
              z.signal.removeEventListener("abort", k), b.abortListenerMap.delete(k), b.clearTimeout(F), I(z.signal.reason);
            }, F = b.setTimeout(() => {
              z.signal && (z.signal.removeEventListener("abort", k), b.abortListenerMap.delete(k)), j(B);
            }, W);
            z.signal && (z.signal.aborted ? k() : (z.signal.addEventListener("abort", k), b.abortListenerMap.set(k, z.signal)));
          })) : R === "setImmediate" ? (b.timersPromisesModuleMethods.push({
            methodName: "setImmediate",
            original: n.setImmediate
          }), n.setImmediate = (W, B = {}) => new Promise((z, j) => {
            const I = () => {
              B.signal.removeEventListener("abort", I), b.abortListenerMap.delete(I), b.clearImmediate(k), j(B.signal.reason);
            }, k = b.setImmediate(() => {
              B.signal && (B.signal.removeEventListener("abort", I), b.abortListenerMap.delete(I)), z(W);
            });
            B.signal && (B.signal.aborted ? I() : (B.signal.addEventListener("abort", I), b.abortListenerMap.set(I, B.signal)));
          })) : R === "setInterval" && (b.timersPromisesModuleMethods.push({
            methodName: "setInterval",
            original: n.setInterval
          }), n.setInterval = (W, B, z = {}) => ({
            [Symbol.asyncIterator]: () => {
              const j = () => {
                let fe, je;
                const ct = new Promise((Re, Qe) => {
                  fe = Re, je = Qe;
                });
                return ct.resolve = fe, ct.reject = je, ct;
              };
              let I = false, k = false, F, X = 0;
              const re = [], Xe = b.setInterval(() => {
                re.length > 0 ? re.shift().resolve() : X++;
              }, W), ke = () => {
                z.signal.removeEventListener("abort", ke), b.abortListenerMap.delete(ke), b.clearInterval(Xe), I = true;
                for (const fe of re) fe.resolve();
              };
              return z.signal && (z.signal.aborted ? I = true : (z.signal.addEventListener("abort", ke), b.abortListenerMap.set(ke, z.signal))), {
                next: async () => {
                  var _a2, _b;
                  if (((_a2 = z.signal) == null ? void 0 : _a2.aborted) && !k) throw k = true, z.signal.reason;
                  if (I) return {
                    done: true,
                    value: void 0
                  };
                  if (X > 0) return X--, {
                    done: false,
                    value: B
                  };
                  const fe = j();
                  if (re.push(fe), await fe, F && re.length === 0 && F.resolve(), ((_b = z.signal) == null ? void 0 : _b.aborted) && !k) throw k = true, z.signal.reason;
                  return I ? {
                    done: true,
                    value: void 0
                  } : {
                    done: false,
                    value: B
                  };
                },
                return: async () => I ? {
                  done: true,
                  value: void 0
                } : (re.length > 0 && (F = j(), await F), b.clearInterval(Xe), I = true, z.signal && (z.signal.removeEventListener("abort", ke), b.abortListenerMap.delete(ke)), {
                  done: true,
                  value: void 0
                })
              };
            }
          })));
        }
        return b;
      }
      return {
        timers: me,
        createClock: _s,
        install: rl,
        withGlobal: r
      };
    }
    const o = r(e);
    return wt.timers = o.timers, wt.createClock = o.createClock, wt.install = o.install, wt.withGlobal = r, wt;
  }
  var iy = sy();
  class cy {
    constructor({ global: t, config: n }) {
      __publicField(this, "_global");
      __publicField(this, "_clock");
      __publicField(this, "_fakingTime");
      __publicField(this, "_fakingDate");
      __publicField(this, "_fakeTimers");
      __publicField(this, "_userConfig");
      __publicField(this, "_now", Fe.now);
      this._userConfig = n, this._fakingDate = null, this._fakingTime = false, this._fakeTimers = iy.withGlobal(t), this._global = t;
    }
    clearAllTimers() {
      this._fakingTime && this._clock.reset();
    }
    dispose() {
      this.useRealTimers();
    }
    runAllTimers() {
      this._checkFakeTimers() && this._clock.runAll();
    }
    async runAllTimersAsync() {
      this._checkFakeTimers() && await this._clock.runAllAsync();
    }
    runOnlyPendingTimers() {
      this._checkFakeTimers() && this._clock.runToLast();
    }
    async runOnlyPendingTimersAsync() {
      this._checkFakeTimers() && await this._clock.runToLastAsync();
    }
    advanceTimersToNextTimer(t = 1) {
      if (this._checkFakeTimers()) for (let n = t; n > 0 && (this._clock.next(), this._clock.tick(0), this._clock.countTimers() !== 0); n--) ;
    }
    async advanceTimersToNextTimerAsync(t = 1) {
      if (this._checkFakeTimers()) for (let n = t; n > 0 && (await this._clock.nextAsync(), this._clock.tick(0), this._clock.countTimers() !== 0); n--) ;
    }
    advanceTimersByTime(t) {
      this._checkFakeTimers() && this._clock.tick(t);
    }
    async advanceTimersByTimeAsync(t) {
      this._checkFakeTimers() && await this._clock.tickAsync(t);
    }
    advanceTimersToNextFrame() {
      this._checkFakeTimers() && this._clock.runToFrame();
    }
    runAllTicks() {
      this._checkFakeTimers() && this._clock.runMicrotasks();
    }
    useRealTimers() {
      this._fakingDate && (uc(), this._fakingDate = null), this._fakingTime && (this._clock.uninstall(), this._fakingTime = false);
    }
    useFakeTimers() {
      var _a2, _b, _c2;
      const t = this._fakingDate || Date.now();
      this._fakingDate && (uc(), this._fakingDate = null), this._fakingTime && this._clock.uninstall();
      const n = Object.keys(this._fakeTimers.timers).filter((r) => r !== "nextTick" && r !== "queueMicrotask");
      if (((_b = (_a2 = this._userConfig) == null ? void 0 : _a2.toFake) == null ? void 0 : _b.includes("nextTick")) && Gu()) throw new Error("process.nextTick cannot be mocked inside child_process");
      this._clock = this._fakeTimers.install({
        now: t,
        ...this._userConfig,
        toFake: ((_c2 = this._userConfig) == null ? void 0 : _c2.toFake) || n,
        ignoreMissingTimers: true
      }), this._fakingTime = true;
    }
    reset() {
      if (this._checkFakeTimers()) {
        const { now: t } = this._clock;
        this._clock.reset(), this._clock.setSystemTime(t);
      }
    }
    setSystemTime(t) {
      const n = typeof t > "u" || t instanceof Date ? t : new Date(t);
      this._fakingTime ? this._clock.setSystemTime(n) : (this._fakingDate = n ?? new Date(this.getRealSystemTime()), Ng(this._fakingDate));
    }
    getMockedSystemTime() {
      return this._fakingTime ? new Date(this._clock.now) : this._fakingDate;
    }
    getRealSystemTime() {
      return this._now();
    }
    getTimerCount() {
      return this._checkFakeTimers() ? this._clock.countTimers() : 0;
    }
    configure(t) {
      this._userConfig = t;
    }
    isFakeTimers() {
      return this._fakingTime;
    }
    _checkFakeTimers() {
      if (!this._fakingTime) throw new Error("A function to advance timers was called but the timers APIs are not mocked. Call `vi.useFakeTimers()` in the test file first.");
      return this._fakingTime;
    }
  }
  function nl(e, t) {
    return t.stack !== void 0 && (e.stack = t.stack.replace(t.message, e.message)), e;
  }
  function ay(e, t = {}) {
    const { setTimeout: n, setInterval: r, clearTimeout: o, clearInterval: s } = Pt(), { interval: i = 50, timeout: c = 1e3 } = typeof t == "number" ? {
      timeout: t
    } : t, u = new Error("STACK_TRACE_ERROR");
    return new Promise((a, l) => {
      let f, h = "idle", p, d;
      const g = ($) => {
        p && o(p), d && s(d), a($);
      }, w = () => {
        d && s(d);
        let $ = f;
        $ || ($ = nl(new Error("Timed out in waitFor!"), u)), l($);
      }, T = () => {
        if (jn.isFakeTimers() && jn.advanceTimersByTime(i), h !== "pending") try {
          const $ = e();
          if ($ !== null && typeof $ == "object" && typeof $.then == "function") {
            const A = $;
            h = "pending", A.then((O) => {
              h = "resolved", g(O);
            }, (O) => {
              h = "rejected", f = O;
            });
          } else return g($), true;
        } catch ($) {
          f = $;
        }
      };
      T() !== true && (p = n(w, c), d = r(T, i));
    });
  }
  function uy(e, t = {}) {
    const { setTimeout: n, setInterval: r, clearTimeout: o, clearInterval: s } = Pt(), { interval: i = 50, timeout: c = 1e3 } = typeof t == "number" ? {
      timeout: t
    } : t, u = new Error("STACK_TRACE_ERROR");
    return new Promise((a, l) => {
      let f = "idle", h, p;
      const d = (T) => {
        p && s(p), T || (T = nl(new Error("Timed out in waitUntil!"), u)), l(T);
      }, g = (T) => {
        if (T) return h && o(h), p && s(p), a(T), true;
      }, w = () => {
        if (jn.isFakeTimers() && jn.advanceTimersByTime(i), f !== "pending") try {
          const T = e();
          if (T !== null && typeof T == "object" && typeof T.then == "function") {
            const $ = T;
            f = "pending", $.then((A) => {
              f = "resolved", g(A);
            }, (A) => {
              f = "rejected", d(A);
            });
          } else return g(T);
        } catch (T) {
          d(T);
        }
      };
      w() !== true && (h = n(d, c), p = r(w, i));
    });
  }
  function ly() {
    let e = null;
    const t = () => er();
    let n;
    const r = () => n || (n = new cy({
      global: globalThis,
      config: t().config.fakeTimers
    })), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [
      "PROD",
      "DEV",
      "SSR"
    ], c = {
      useFakeTimers(u) {
        var _a2, _b, _c2, _d2;
        if (Gu() && (((_a2 = u == null ? void 0 : u.toFake) == null ? void 0 : _a2.includes("nextTick")) || ((_d2 = (_c2 = (_b = t().config) == null ? void 0 : _b.fakeTimers) == null ? void 0 : _c2.toFake) == null ? void 0 : _d2.includes("nextTick")))) throw new Error('vi.useFakeTimers({ toFake: ["nextTick"] }) is not supported in node:child_process. Use --pool=threads if mocking nextTick is required.');
        return u ? r().configure({
          ...t().config.fakeTimers,
          ...u
        }) : r().configure(t().config.fakeTimers), r().useFakeTimers(), c;
      },
      isFakeTimers() {
        return r().isFakeTimers();
      },
      useRealTimers() {
        return r().useRealTimers(), c;
      },
      runOnlyPendingTimers() {
        return r().runOnlyPendingTimers(), c;
      },
      async runOnlyPendingTimersAsync() {
        return await r().runOnlyPendingTimersAsync(), c;
      },
      runAllTimers() {
        return r().runAllTimers(), c;
      },
      async runAllTimersAsync() {
        return await r().runAllTimersAsync(), c;
      },
      runAllTicks() {
        return r().runAllTicks(), c;
      },
      advanceTimersByTime(u) {
        return r().advanceTimersByTime(u), c;
      },
      async advanceTimersByTimeAsync(u) {
        return await r().advanceTimersByTimeAsync(u), c;
      },
      advanceTimersToNextTimer() {
        return r().advanceTimersToNextTimer(), c;
      },
      async advanceTimersToNextTimerAsync() {
        return await r().advanceTimersToNextTimerAsync(), c;
      },
      advanceTimersToNextFrame() {
        return r().advanceTimersToNextFrame(), c;
      },
      getTimerCount() {
        return r().getTimerCount();
      },
      setSystemTime(u) {
        return r().setSystemTime(u), c;
      },
      getMockedSystemTime() {
        return r().getMockedSystemTime();
      },
      getRealSystemTime() {
        return r().getRealSystemTime();
      },
      clearAllTimers() {
        return r().clearAllTimers(), c;
      },
      spyOn: Jh,
      fn: Yh,
      waitFor: ay,
      waitUntil: uy,
      hoisted(u) {
        return Se(u, '"vi.hoisted" factory', [
          "function"
        ]), u();
      },
      mock(u, a) {
        if (typeof u != "string") throw new TypeError(`vi.mock() expects a string path, but received a ${typeof u}`);
        const l = Tt("mock");
        Ce().queueMock(u, l, typeof a == "function" ? () => a(() => Ce().importActual(u, l, Ce().getMockContext().callstack)) : a);
      },
      unmock(u) {
        if (typeof u != "string") throw new TypeError(`vi.unmock() expects a string path, but received a ${typeof u}`);
        Ce().queueUnmock(u, Tt("unmock"));
      },
      doMock(u, a) {
        if (typeof u != "string") throw new TypeError(`vi.doMock() expects a string path, but received a ${typeof u}`);
        const l = Tt("doMock");
        Ce().queueMock(u, l, typeof a == "function" ? () => a(() => Ce().importActual(u, l, Ce().getMockContext().callstack)) : a);
      },
      doUnmock(u) {
        if (typeof u != "string") throw new TypeError(`vi.doUnmock() expects a string path, but received a ${typeof u}`);
        const a = Tt("doUnmock");
        Ce().queueUnmock(u, a);
      },
      async importActual(u) {
        const a = Tt("importActual");
        return Ce().importActual(u, a, Ce().getMockContext().callstack);
      },
      async importMock(u) {
        const a = Tt("importMock");
        return Ce().importMock(u, a);
      },
      mockObject(u, a) {
        return Ce().mockObject({
          value: u
        }, void 0, (a == null ? void 0 : a.spy) ? "autospy" : "automock").value;
      },
      mocked(u, a = {}) {
        return u;
      },
      isMockFunction(u) {
        return lt(u);
      },
      clearAllMocks() {
        return lp(), c;
      },
      resetAllMocks() {
        return fp(), c;
      },
      restoreAllMocks() {
        return up(), c;
      },
      stubGlobal(u, a) {
        return o.has(u) || o.set(u, Object.getOwnPropertyDescriptor(globalThis, u)), Object.defineProperty(globalThis, u, {
          value: a,
          writable: true,
          configurable: true,
          enumerable: true
        }), c;
      },
      stubEnv(u, a) {
        const l = t().metaEnv;
        return s.has(u) || s.set(u, l[u]), i.includes(u) ? l[u] = a ? "1" : "" : a === void 0 ? delete l[u] : l[u] = String(a), c;
      },
      unstubAllGlobals() {
        return o.forEach((u, a) => {
          u ? Object.defineProperty(globalThis, a, u) : Reflect.deleteProperty(globalThis, a);
        }), o.clear(), c;
      },
      unstubAllEnvs() {
        const u = t().metaEnv;
        return s.forEach((a, l) => {
          a === void 0 ? delete u[l] : u[l] = a;
        }), s.clear(), c;
      },
      resetModules() {
        return mm(t().evaluatedModules), c;
      },
      async dynamicImportSettled() {
        return Yu();
      },
      setConfig(u) {
        e || (e = {
          ...t().config
        }), Object.assign(t().config, u);
      },
      resetConfig() {
        e && Object.assign(t().config, e);
      }
    };
    return c;
  }
  fy = ly();
  jn = fy;
  function Ce() {
    return typeof __vitest_mocker__ < "u" ? __vitest_mocker__ : new Proxy({}, {
      get(e, t) {
        throw new Error(`Vitest mocker was not initialized in this environment. vi.${String(t)}() is forbidden.`);
      }
    });
  }
  function Tt(e) {
    var _a2;
    const t = ch({
      stackTraceLimit: 5
    }).split(`
`);
    return ((_a2 = Iu(t[t.findLastIndex((n) => n.includes(` at Object.${e}`) || n.includes(`${e}@`) || n.includes(` at ${e} (`)) + 1])) == null ? void 0 : _a2.file) || "";
  }
  typeof process < "u" && process.platform;
  var Ic = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hy = new Uint8Array(64), py = new Uint8Array(128);
  for (let e = 0; e < Ic.length; e++) {
    let t = Ic.charCodeAt(e);
    hy[e] = t, py[t] = e;
  }
  const Pc = "vite-module-runner:import-meta-resolve/v1/";
  `${JSON.stringify(Pc)}${JSON.stringify(Pc)}`;
  new Proxy({}, {
    get(e, t) {
      throw Error(`[module runner] Dynamic access of "import.meta.env" is not supported. Please, use "import.meta.env.${String(t)}" instead.`);
    }
  });
  var at = {}, zr = {}, kc;
  function dy() {
    return kc || (kc = 1, Object.defineProperty(zr, "__esModule", {
      value: true
    })), zr;
  }
  var Vr = {}, jc;
  function my() {
    return jc || (jc = 1, Object.defineProperty(Vr, "__esModule", {
      value: true
    })), Vr;
  }
  var Wr = {}, Rc;
  function gy() {
    return Rc || (Rc = 1, Object.defineProperty(Wr, "__esModule", {
      value: true
    })), Wr;
  }
  var Ur = {}, Dc;
  function yy() {
    return Dc || (Dc = 1, Object.defineProperty(Ur, "__esModule", {
      value: true
    })), Ur;
  }
  var Fc;
  function by() {
    return Fc || (Fc = 1, (function(e) {
      var t = at && at.__createBinding || (Object.create ? (function(s, i, c, u) {
        u === void 0 && (u = c);
        var a = Object.getOwnPropertyDescriptor(i, c);
        (!a || ("get" in a ? !i.__esModule : a.writable || a.configurable)) && (a = {
          enumerable: true,
          get: function() {
            return i[c];
          }
        }), Object.defineProperty(s, u, a);
      }) : (function(s, i, c, u) {
        u === void 0 && (u = c), s[u] = i[c];
      })), n = at && at.__exportStar || function(s, i) {
        for (var c in s) c !== "default" && !Object.prototype.hasOwnProperty.call(i, c) && t(i, s, c);
      };
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.expectTypeOf = void 0, n(dy(), e), n(my(), e), n(gy(), e), n(yy(), e);
      const r = () => true, o = (s) => {
        const i = [
          "parameters",
          "returns",
          "resolves",
          "not",
          "items",
          "constructorParameters",
          "thisParameter",
          "instance",
          "guards",
          "asserts",
          "branded"
        ], c = {
          toBeAny: r,
          toBeUnknown: r,
          toBeNever: r,
          toBeFunction: r,
          toBeObject: r,
          toBeArray: r,
          toBeString: r,
          toBeNumber: r,
          toBeBoolean: r,
          toBeVoid: r,
          toBeSymbol: r,
          toBeNull: r,
          toBeUndefined: r,
          toBeNullable: r,
          toBeBigInt: r,
          toMatchTypeOf: r,
          toEqualTypeOf: r,
          toBeConstructibleWith: r,
          toMatchObjectType: r,
          toExtend: r,
          map: e.expectTypeOf,
          toBeCallableWith: e.expectTypeOf,
          extract: e.expectTypeOf,
          exclude: e.expectTypeOf,
          pick: e.expectTypeOf,
          omit: e.expectTypeOf,
          toHaveProperty: e.expectTypeOf,
          parameter: e.expectTypeOf
        };
        return i.forEach((a) => Object.defineProperty(c, a, {
          get: () => (0, e.expectTypeOf)({})
        })), c;
      };
      e.expectTypeOf = o;
    })(at)), at;
  }
  by();
})();
export {
  __tla,
  Kd as afterAll,
  Yd as afterEach,
  Ud as beforeAll,
  Gd as beforeEach,
  Fg as createExpect,
  vy as describe,
  Lg as expect,
  $y as it,
  fm as recordArtifact,
  Et as suite,
  Jd as test,
  jn as vi,
  fy as vitest
};
