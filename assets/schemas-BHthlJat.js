var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as dl } from "./preload-helper-PPVm8Dsz.js";
let Ae, KC, XC, ya, vd, iS, HC, jC, ZC, qC, LC, nC, XS, UC, NC, OC, DC, MC, BC, IC, _C, PC, kC, AC, RC, $C, GC, CC, SC, TC, VC, Gn, JS, FC, WC, YC, Au, tC;
let __tla = (async () => {
  var _a2, _b2, _c2;
  TC = "" + new URL("sql-asm-debug-BP45AH1v.js", import.meta.url).href;
  SC = "" + new URL("sql-asm-memory-growth-BF-zJaRO.js", import.meta.url).href;
  CC = "" + new URL("sql-asm-cY7yALOm.js", import.meta.url).href;
  RC = "" + new URL("sql-wasm-debug-DVCIS61t.js", import.meta.url).href;
  AC = "" + new URL("sql-wasm-debug-DSSLkM8Y.wasm", import.meta.url).href;
  kC = "" + new URL("sql-wasm-CZHpDDNI.js", import.meta.url).href;
  PC = "" + new URL("sql-wasm-C1U8OeUW.wasm", import.meta.url).href;
  _C = "" + new URL("sqljs-all-DgDWs73J.zip", import.meta.url).href;
  IC = "" + new URL("sqljs-wasm-DtBWIBhJ.zip", import.meta.url).href;
  BC = "" + new URL("sqljs-worker-wasm-CGJ_gvZ5.zip", import.meta.url).href;
  MC = "" + new URL("worker.sql-asm-debug-BhEHli9x.js", import.meta.url).href;
  DC = "" + new URL("worker.sql-asm-DturgLB7.js", import.meta.url).href;
  OC = "" + new URL("worker.sql-wasm-debug-Cetnktkb.js", import.meta.url).href;
  NC = "" + new URL("worker.sql-wasm-MxwxNaeZ.js", import.meta.url).href;
  var gd = class {
    constructor() {
      __publicField(this, "_listeners", {});
    }
    addEventListener(t, e) {
      const r = this._listeners;
      return r[t] === void 0 && (r[t] = []), r[t].indexOf(e) === -1 && r[t].push(e), this;
    }
    removeEventListener(t, e) {
      const r = this._listeners[t];
      if (r !== void 0) {
        const n = r.indexOf(e);
        n !== -1 && r.splice(n, 1);
      }
      return this;
    }
    dispatchEvent(t) {
      const e = this._listeners[t.type];
      if (e !== void 0) {
        const r = e.slice(0);
        for (let n = 0, a = r.length; n < a; n++) r[n].call(this, t);
      }
      return this;
    }
    dispose() {
      for (const t in this._listeners) delete this._listeners[t];
    }
  }, In = class {
    constructor(t, e, r, n = {}) {
      __publicField(this, "_disposed", false);
      __publicField(this, "_name");
      __publicField(this, "_parent");
      __publicField(this, "_child");
      __publicField(this, "_attributes");
      if (this._name = t, this._parent = e, this._child = r, this._attributes = n, !e.isOnGraph(r)) throw new Error("Cannot connect disconnected graphs.");
    }
    getName() {
      return this._name;
    }
    getParent() {
      return this._parent;
    }
    getChild() {
      return this._child;
    }
    setChild(t) {
      return this._child = t, this;
    }
    getAttributes() {
      return this._attributes;
    }
    dispose() {
      this._disposed || (this._parent._destroyRef(this), this._disposed = true);
    }
    isDisposed() {
      return this._disposed;
    }
  }, cg = class extends gd {
    constructor() {
      super(...arguments);
      __publicField(this, "_emptySet", /* @__PURE__ */ new Set());
      __publicField(this, "_edges", /* @__PURE__ */ new Set());
      __publicField(this, "_parentEdges", /* @__PURE__ */ new Map());
      __publicField(this, "_childEdges", /* @__PURE__ */ new Map());
    }
    listEdges() {
      return Array.from(this._edges);
    }
    listParentEdges(t) {
      return Array.from(this._childEdges.get(t) || this._emptySet);
    }
    listParents(t) {
      const e = /* @__PURE__ */ new Set();
      for (const r of this.listParentEdges(t)) e.add(r.getParent());
      return Array.from(e);
    }
    listChildEdges(t) {
      return Array.from(this._parentEdges.get(t) || this._emptySet);
    }
    listChildren(t) {
      const e = /* @__PURE__ */ new Set();
      for (const r of this.listChildEdges(t)) e.add(r.getChild());
      return Array.from(e);
    }
    disconnectParents(t, e) {
      for (const r of this.listParentEdges(t)) (!e || e(r.getParent())) && r.dispose();
      return this;
    }
    _createEdge(t, e, r, n) {
      const a = new In(t, e, r, n);
      this._edges.add(a);
      const i = a.getParent();
      this._parentEdges.has(i) || this._parentEdges.set(i, /* @__PURE__ */ new Set()), this._parentEdges.get(i).add(a);
      const s = a.getChild();
      return this._childEdges.has(s) || this._childEdges.set(s, /* @__PURE__ */ new Set()), this._childEdges.get(s).add(a), a;
    }
    _destroyEdge(t) {
      return this._edges.delete(t), this._parentEdges.get(t.getParent()).delete(t), this._childEdges.get(t.getChild()).delete(t), this;
    }
  }, Pr = class {
    constructor(t) {
      __publicField(this, "list", []);
      if (t) for (const e of t) this.list.push(e);
    }
    add(t) {
      this.list.push(t);
    }
    remove(t) {
      const e = this.list.indexOf(t);
      e >= 0 && this.list.splice(e, 1);
    }
    removeChild(t) {
      const e = [];
      for (const r of this.list) r.getChild() === t && e.push(r);
      for (const r of e) this.remove(r);
      return e;
    }
    listRefsByChild(t) {
      const e = [];
      for (const r of this.list) r.getChild() === t && e.push(r);
      return e;
    }
    values() {
      return this.list;
    }
  }, et = class {
    constructor(t) {
      __publicField(this, "set", /* @__PURE__ */ new Set());
      __publicField(this, "map", /* @__PURE__ */ new Map());
      if (t) for (const e of t) this.add(e);
    }
    add(t) {
      const e = t.getChild();
      this.removeChild(e), this.set.add(t), this.map.set(e, t);
    }
    remove(t) {
      this.set.delete(t), this.map.delete(t.getChild());
    }
    removeChild(t) {
      const e = this.map.get(t) || null;
      return e && this.remove(e), e;
    }
    getRefByChild(t) {
      return this.map.get(t) || null;
    }
    values() {
      return Array.from(this.set);
    }
  }, cr = class {
    constructor(t) {
      __publicField(this, "map", {});
      t && Object.assign(this.map, t);
    }
    set(t, e) {
      this.map[t] = e;
    }
    delete(t) {
      delete this.map[t];
    }
    get(t) {
      return this.map[t] || null;
    }
    keys() {
      return Object.keys(this.map);
    }
    values() {
      return Object.values(this.map);
    }
  };
  const Ve = /* @__PURE__ */ Symbol("attributes"), rn = /* @__PURE__ */ Symbol("immutableKeys");
  var fg = class pd extends (_c2 = gd, _b2 = Ve, _a2 = rn, _c2) {
    constructor(e) {
      super();
      __publicField(this, "_disposed", false);
      __publicField(this, "graph");
      __publicField(this, _b2);
      __publicField(this, _a2);
      this.graph = e, this[rn] = /* @__PURE__ */ new Set(), this[Ve] = this._createAttributes();
    }
    getDefaults() {
      return {};
    }
    _createAttributes() {
      const e = this.getDefaults(), r = {};
      for (const n in e) {
        const a = e[n];
        if (a instanceof pd) {
          const i = this.graph._createEdge(n, this, a);
          this[rn].add(n), r[n] = i;
        } else r[n] = a;
      }
      return r;
    }
    isOnGraph(e) {
      return this.graph === e.graph;
    }
    isDisposed() {
      return this._disposed;
    }
    dispose() {
      this._disposed || (this.graph.listChildEdges(this).forEach((e) => e.dispose()), this.graph.disconnectParents(this), this._disposed = true, this.dispatchEvent({
        type: "dispose"
      }));
    }
    detach() {
      return this.graph.disconnectParents(this), this;
    }
    swap(e, r) {
      for (const n in this[Ve]) {
        const a = this[Ve][n];
        if (a instanceof In) {
          const i = a;
          i.getChild() === e && this.setRef(n, r, i.getAttributes());
        } else if (a instanceof Pr) for (const i of a.listRefsByChild(e)) {
          const s = i.getAttributes();
          this.removeRef(n, e), this.addRef(n, r, s);
        }
        else if (a instanceof et) {
          const i = a.getRefByChild(e);
          if (i) {
            const s = i.getAttributes();
            this.removeRef(n, e), this.addRef(n, r, s);
          }
        } else if (a instanceof cr) for (const i of a.keys()) {
          const s = a.get(i);
          s.getChild() === e && this.setRefMap(n, i, r, s.getAttributes());
        }
      }
      return this;
    }
    get(e) {
      return this[Ve][e];
    }
    set(e, r) {
      return this[Ve][e] = r, this.dispatchEvent({
        type: "change",
        attribute: e
      });
    }
    getRef(e) {
      const r = this[Ve][e];
      return r ? r.getChild() : null;
    }
    setRef(e, r, n) {
      if (this[rn].has(e)) throw new Error(`Cannot overwrite immutable attribute, "${e}".`);
      const a = this[Ve][e];
      if (a && a.dispose(), !r) return this;
      const i = this.graph._createEdge(e, this, r, n);
      return this[Ve][e] = i, this.dispatchEvent({
        type: "change",
        attribute: e
      });
    }
    listRefs(e) {
      return this.assertRefList(e).values().map((r) => r.getChild());
    }
    addRef(e, r, n) {
      const a = this.graph._createEdge(e, this, r, n);
      return this.assertRefList(e).add(a), this.dispatchEvent({
        type: "change",
        attribute: e
      });
    }
    removeRef(e, r) {
      const n = this.assertRefList(e);
      if (n instanceof Pr) for (const a of n.listRefsByChild(r)) a.dispose();
      else {
        const a = n.getRefByChild(r);
        a && a.dispose();
      }
      return this;
    }
    assertRefList(e) {
      const r = this[Ve][e];
      if (r instanceof Pr || r instanceof et) return r;
      throw new Error(`Expected RefList or RefSet for attribute "${e}"`);
    }
    listRefMapKeys(e) {
      return this.assertRefMap(e).keys();
    }
    listRefMapValues(e) {
      return this.assertRefMap(e).values().map((r) => r.getChild());
    }
    getRefMap(e, r) {
      const n = this.assertRefMap(e).get(r);
      return n ? n.getChild() : null;
    }
    setRefMap(e, r, n, a) {
      const i = this.assertRefMap(e), s = i.get(r);
      if (s && s.dispose(), !n) return this;
      a = Object.assign(a || {}, {
        key: r
      });
      const o = this.graph._createEdge(e, this, n, {
        ...a,
        key: r
      });
      return i.set(r, o), this.dispatchEvent({
        type: "change",
        attribute: e,
        key: r
      });
    }
    assertRefMap(e) {
      const r = this[Ve][e];
      if (r instanceof cr) return r;
      throw new Error(`Expected RefMap for attribute "${e}"`);
    }
    dispatchEvent(e) {
      return super.dispatchEvent({
        ...e,
        target: this
      }), this.graph.dispatchEvent({
        ...e,
        target: this,
        type: `node:${e.type}`
      }), this;
    }
    _destroyRef(e) {
      const r = e.getName();
      if (this[Ve][r] === e) this[Ve][r] = null, this[rn].has(r) && e.getChild().dispose();
      else if (this[Ve][r] instanceof Pr) this[Ve][r].remove(e);
      else if (this[Ve][r] instanceof et) this[Ve][r].remove(e);
      else if (this[Ve][r] instanceof cr) {
        const n = this[Ve][r];
        for (const a of n.keys()) n.get(a) === e && n.delete(a);
      } else return;
      this.graph._destroyEdge(e), this.dispatchEvent({
        type: "change",
        attribute: r
      });
    }
  };
  const md = "v4.3.0", Ci = "@glb.bin";
  var be;
  (function(t) {
    t.ACCESSOR = "Accessor", t.ANIMATION = "Animation", t.ANIMATION_CHANNEL = "AnimationChannel", t.ANIMATION_SAMPLER = "AnimationSampler", t.BUFFER = "Buffer", t.CAMERA = "Camera", t.MATERIAL = "Material", t.MESH = "Mesh", t.PRIMITIVE = "Primitive", t.PRIMITIVE_TARGET = "PrimitiveTarget", t.NODE = "Node", t.ROOT = "Root", t.SCENE = "Scene", t.SKIN = "Skin", t.TEXTURE = "Texture", t.TEXTURE_INFO = "TextureInfo";
  })(be || (be = {}));
  var Ri;
  (function(t) {
    t.INTERLEAVED = "interleaved", t.SEPARATE = "separate";
  })(Ri || (Ri = {}));
  var Ht;
  (function(t) {
    t.ARRAY_BUFFER = "ARRAY_BUFFER", t.ELEMENT_ARRAY_BUFFER = "ELEMENT_ARRAY_BUFFER", t.INVERSE_BIND_MATRICES = "INVERSE_BIND_MATRICES", t.OTHER = "OTHER", t.SPARSE = "SPARSE";
  })(Ht || (Ht = {}));
  var tu;
  (function(t) {
    t[t.R = 4096] = "R", t[t.G = 256] = "G", t[t.B = 16] = "B", t[t.A = 1] = "A";
  })(tu || (tu = {}));
  var wr;
  (function(t) {
    t.GLTF = "GLTF", t.GLB = "GLB";
  })(wr || (wr = {}));
  const Wi = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  };
  class Le {
    static createBufferFromDataURI(e) {
      if (typeof Buffer > "u") {
        const r = atob(e.split(",")[1]), n = new Uint8Array(r.length);
        for (let a = 0; a < r.length; a++) n[a] = r.charCodeAt(a);
        return n;
      } else {
        const r = e.split(",")[1], n = e.indexOf("base64") >= 0;
        return Buffer.from(r, n ? "base64" : "utf8");
      }
    }
    static encodeText(e) {
      return new TextEncoder().encode(e);
    }
    static decodeText(e) {
      return new TextDecoder().decode(e);
    }
    static concat(e) {
      let r = 0;
      for (const i of e) r += i.byteLength;
      const n = new Uint8Array(r);
      let a = 0;
      for (const i of e) n.set(i, a), a += i.byteLength;
      return n;
    }
    static pad(e, r = 0) {
      const n = this.padNumber(e.byteLength);
      if (n === e.byteLength) return e;
      const a = new Uint8Array(n);
      if (a.set(e), r !== 0) for (let i = e.byteLength; i < n; i++) a[i] = r;
      return a;
    }
    static padNumber(e) {
      return Math.ceil(e / 4) * 4;
    }
    static equals(e, r) {
      if (e === r) return true;
      if (e.byteLength !== r.byteLength) return false;
      let n = e.byteLength;
      for (; n--; ) if (e[n] !== r[n]) return false;
      return true;
    }
    static toView(e, r = 0, n = 1 / 0) {
      return new Uint8Array(e.buffer, e.byteOffset + r, Math.min(e.byteLength, n));
    }
    static assertView(e) {
      if (e && !ArrayBuffer.isView(e)) throw new Error(`Method requires Uint8Array parameter; received "${typeof e}".`);
      return e;
    }
  }
  class dg {
    match(e) {
      return e.length >= 3 && e[0] === 255 && e[1] === 216 && e[2] === 255;
    }
    getSize(e) {
      let r = new DataView(e.buffer, e.byteOffset + 4), n, a;
      for (; r.byteLength; ) {
        if (n = r.getUint16(0, false), vg(r, n), a = r.getUint8(n + 1), a === 192 || a === 193 || a === 194) return [
          r.getUint16(n + 7, false),
          r.getUint16(n + 5, false)
        ];
        r = new DataView(e.buffer, r.byteOffset + n + 2);
      }
      throw new TypeError("Invalid JPG, no size found");
    }
    getChannels(e) {
      return 3;
    }
  }
  class Hi {
    match(e) {
      return e.length >= 8 && e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71 && e[4] === 13 && e[5] === 10 && e[6] === 26 && e[7] === 10;
    }
    getSize(e) {
      const r = new DataView(e.buffer, e.byteOffset);
      return Le.decodeText(e.slice(12, 16)) === Hi.PNG_FRIED_CHUNK_NAME ? [
        r.getUint32(32, false),
        r.getUint32(36, false)
      ] : [
        r.getUint32(16, false),
        r.getUint32(20, false)
      ];
    }
    getChannels(e) {
      return 4;
    }
  }
  Hi.PNG_FRIED_CHUNK_NAME = "CgBI";
  class un {
    static registerFormat(e, r) {
      this.impls[e] = r;
    }
    static getMimeType(e) {
      for (const r in this.impls) if (this.impls[r].match(e)) return r;
      return null;
    }
    static getSize(e, r) {
      return this.impls[r] ? this.impls[r].getSize(e) : null;
    }
    static getChannels(e, r) {
      return this.impls[r] ? this.impls[r].getChannels(e) : null;
    }
    static getVRAMByteLength(e, r) {
      if (!this.impls[r]) return null;
      if (this.impls[r].getVRAMByteLength) return this.impls[r].getVRAMByteLength(e);
      let n = 0;
      const a = 4, i = this.getSize(e, r);
      if (!i) return null;
      for (; i[0] > 1 || i[1] > 1; ) n += i[0] * i[1] * a, i[0] = Math.max(Math.floor(i[0] / 2), 1), i[1] = Math.max(Math.floor(i[1] / 2), 1);
      return n += 1 * a, n;
    }
    static mimeTypeToExtension(e) {
      return e === "image/jpeg" ? "jpg" : e.split("/").pop();
    }
    static extensionToMimeType(e) {
      return e === "jpg" ? "image/jpeg" : e ? `image/${e}` : "";
    }
  }
  un.impls = {
    "image/jpeg": new dg(),
    "image/png": new Hi()
  };
  function vg(t, e) {
    if (e > t.byteLength) throw new TypeError("Corrupt JPG, exceeded buffer limits");
    if (t.getUint8(e) !== 255) throw new TypeError("Invalid JPG, marker table corrupted");
    return t;
  }
  class cn {
    static basename(e) {
      const r = e.split(/[\\/]/).pop();
      return r.substring(0, r.lastIndexOf("."));
    }
    static extension(e) {
      if (e.startsWith("data:image/")) {
        const r = e.match(/data:(image\/\w+)/)[1];
        return un.mimeTypeToExtension(r);
      } else {
        if (e.startsWith("data:model/gltf+json")) return "gltf";
        if (e.startsWith("data:model/gltf-binary")) return "glb";
        if (e.startsWith("data:application/")) return "bin";
      }
      return e.split(/[\\/]/).pop().split(/[.]/).pop();
    }
  }
  var ru = typeof Float32Array < "u" ? Float32Array : Array;
  function hg() {
    var t = new ru(3);
    return ru != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t;
  }
  function bs(t) {
    var e = t[0], r = t[1], n = t[2];
    return Math.sqrt(e * e + r * r + n * n);
  }
  (function() {
    var t = hg();
    return function(e, r, n, a, i, s) {
      var o, u;
      for (r || (r = 3), n || (n = 0), a ? u = Math.min(a * r + n, e.length) : u = e.length, o = n; o < u; o += r) t[0] = e[o], t[1] = e[o + 1], t[2] = e[o + 2], i(t, t, s), e[o] = t[0], e[o + 1] = t[1], e[o + 2] = t[2];
      return e;
    };
  })();
  const vl = "https://null.example";
  class rr {
    static dirname(e) {
      const r = e.lastIndexOf("/");
      return r === -1 ? "./" : e.substring(0, r + 1);
    }
    static basename(e) {
      return cn.basename(new URL(e, vl).pathname);
    }
    static extension(e) {
      return cn.extension(new URL(e, vl).pathname);
    }
    static resolve(e, r) {
      if (!this.isRelativePath(r)) return r;
      const n = e.split("/"), a = r.split("/");
      n.pop();
      for (let i = 0; i < a.length; i++) a[i] !== "." && (a[i] === ".." ? n.pop() : n.push(a[i]));
      return n.join("/");
    }
    static isAbsoluteURL(e) {
      return this.PROTOCOL_REGEXP.test(e);
    }
    static isRelativePath(e) {
      return !/^(?:[a-zA-Z]+:)?\//.test(e);
    }
  }
  rr.DEFAULT_INIT = {};
  rr.PROTOCOL_REGEXP = /^[a-zA-Z]+:\/\//;
  function hl(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function sn(t) {
    if (hl(t) === false) return false;
    const e = t.constructor;
    if (e === void 0) return true;
    const r = e.prototype;
    return !(hl(r) === false || Object.hasOwn(r, "isPrototypeOf") === false);
  }
  var nu, au;
  (function(t) {
    t[t.SILENT = 4] = "SILENT", t[t.ERROR = 3] = "ERROR", t[t.WARN = 2] = "WARN", t[t.INFO = 1] = "INFO", t[t.DEBUG = 0] = "DEBUG";
  })(au || (au = {}));
  class Xt {
    constructor(e) {
      this.verbosity = void 0, this.verbosity = e;
    }
    debug(e) {
      this.verbosity <= Xt.Verbosity.DEBUG && console.debug(e);
    }
    info(e) {
      this.verbosity <= Xt.Verbosity.INFO && console.info(e);
    }
    warn(e) {
      this.verbosity <= Xt.Verbosity.WARN && console.warn(e);
    }
    error(e) {
      this.verbosity <= Xt.Verbosity.ERROR && console.error(e);
    }
  }
  nu = Xt;
  Xt.Verbosity = au;
  Xt.DEFAULT_INSTANCE = new nu(nu.Verbosity.INFO);
  function gg(t) {
    var e = t[0], r = t[1], n = t[2], a = t[3], i = t[4], s = t[5], o = t[6], u = t[7], l = t[8], c = t[9], f = t[10], d = t[11], v = t[12], h = t[13], y = t[14], p = t[15], g = e * s - r * i, b = e * o - n * i, m = r * o - n * s, x = l * h - c * v, E = l * y - f * v, S = c * y - f * h, w = e * S - r * E + n * x, T = i * S - s * E + o * x, C = l * m - c * b + f * g, R = v * m - h * b + y * g;
    return u * w - a * T + p * C - d * R;
  }
  function pg(t, e, r) {
    var n = e[0], a = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], f = e[8], d = e[9], v = e[10], h = e[11], y = e[12], p = e[13], g = e[14], b = e[15], m = r[0], x = r[1], E = r[2], S = r[3];
    return t[0] = m * n + x * o + E * f + S * y, t[1] = m * a + x * u + E * d + S * p, t[2] = m * i + x * l + E * v + S * g, t[3] = m * s + x * c + E * h + S * b, m = r[4], x = r[5], E = r[6], S = r[7], t[4] = m * n + x * o + E * f + S * y, t[5] = m * a + x * u + E * d + S * p, t[6] = m * i + x * l + E * v + S * g, t[7] = m * s + x * c + E * h + S * b, m = r[8], x = r[9], E = r[10], S = r[11], t[8] = m * n + x * o + E * f + S * y, t[9] = m * a + x * u + E * d + S * p, t[10] = m * i + x * l + E * v + S * g, t[11] = m * s + x * c + E * h + S * b, m = r[12], x = r[13], E = r[14], S = r[15], t[12] = m * n + x * o + E * f + S * y, t[13] = m * a + x * u + E * d + S * p, t[14] = m * i + x * l + E * v + S * g, t[15] = m * s + x * c + E * h + S * b, t;
  }
  function mg(t, e) {
    var r = e[0], n = e[1], a = e[2], i = e[4], s = e[5], o = e[6], u = e[8], l = e[9], c = e[10];
    return t[0] = Math.sqrt(r * r + n * n + a * a), t[1] = Math.sqrt(i * i + s * s + o * o), t[2] = Math.sqrt(u * u + l * l + c * c), t;
  }
  function yg(t, e) {
    var r = new ru(3);
    mg(r, e);
    var n = 1 / r[0], a = 1 / r[1], i = 1 / r[2], s = e[0] * n, o = e[1] * a, u = e[2] * i, l = e[4] * n, c = e[5] * a, f = e[6] * i, d = e[8] * n, v = e[9] * a, h = e[10] * i, y = s + c + h, p = 0;
    return y > 0 ? (p = Math.sqrt(y + 1) * 2, t[3] = 0.25 * p, t[0] = (f - v) / p, t[1] = (d - u) / p, t[2] = (o - l) / p) : s > c && s > h ? (p = Math.sqrt(1 + s - c - h) * 2, t[3] = (f - v) / p, t[0] = 0.25 * p, t[1] = (o + l) / p, t[2] = (d + u) / p) : c > h ? (p = Math.sqrt(1 + c - s - h) * 2, t[3] = (d - u) / p, t[0] = (o + l) / p, t[1] = 0.25 * p, t[2] = (f + v) / p) : (p = Math.sqrt(1 + h - s - c) * 2, t[3] = (o - l) / p, t[0] = (d + u) / p, t[1] = (f + v) / p, t[2] = 0.25 * p), t;
  }
  class nt {
    static identity(e) {
      return e;
    }
    static eq(e, r, n = 1e-5) {
      if (e.length !== r.length) return false;
      for (let a = 0; a < e.length; a++) if (Math.abs(e[a] - r[a]) > n) return false;
      return true;
    }
    static clamp(e, r, n) {
      return e < r ? r : e > n ? n : e;
    }
    static decodeNormalizedInt(e, r) {
      switch (r) {
        case 5126:
          return e;
        case 5123:
          return e / 65535;
        case 5121:
          return e / 255;
        case 5122:
          return Math.max(e / 32767, -1);
        case 5120:
          return Math.max(e / 127, -1);
        default:
          throw new Error("Invalid component type.");
      }
    }
    static encodeNormalizedInt(e, r) {
      switch (r) {
        case 5126:
          return e;
        case 5123:
          return Math.round(nt.clamp(e, 0, 1) * 65535);
        case 5121:
          return Math.round(nt.clamp(e, 0, 1) * 255);
        case 5122:
          return Math.round(nt.clamp(e, -1, 1) * 32767);
        case 5120:
          return Math.round(nt.clamp(e, -1, 1) * 127);
        default:
          throw new Error("Invalid component type.");
      }
    }
    static decompose(e, r, n, a) {
      let i = bs([
        e[0],
        e[1],
        e[2]
      ]);
      const s = bs([
        e[4],
        e[5],
        e[6]
      ]), o = bs([
        e[8],
        e[9],
        e[10]
      ]);
      gg(e) < 0 && (i = -i), r[0] = e[12], r[1] = e[13], r[2] = e[14];
      const l = e.slice(), c = 1 / i, f = 1 / s, d = 1 / o;
      l[0] *= c, l[1] *= c, l[2] *= c, l[4] *= f, l[5] *= f, l[6] *= f, l[8] *= d, l[9] *= d, l[10] *= d, yg(n, l), a[0] = i, a[1] = s, a[2] = o;
    }
    static compose(e, r, n, a) {
      const i = a, s = r[0], o = r[1], u = r[2], l = r[3], c = s + s, f = o + o, d = u + u, v = s * c, h = s * f, y = s * d, p = o * f, g = o * d, b = u * d, m = l * c, x = l * f, E = l * d, S = n[0], w = n[1], T = n[2];
      return i[0] = (1 - (p + b)) * S, i[1] = (h + E) * S, i[2] = (y - x) * S, i[3] = 0, i[4] = (h - E) * w, i[5] = (1 - (v + b)) * w, i[6] = (g + m) * w, i[7] = 0, i[8] = (y + x) * T, i[9] = (g - m) * T, i[10] = (1 - (v + p)) * T, i[11] = 0, i[12] = e[0], i[13] = e[1], i[14] = e[2], i[15] = 1, i;
    }
  }
  function bg(t, e) {
    if (!!t != !!e) return false;
    const r = t.getChild(), n = e.getChild();
    return r === n || r.equals(n);
  }
  function wg(t, e) {
    if (!!t != !!e) return false;
    const r = t.values(), n = e.values();
    if (r.length !== n.length) return false;
    for (let a = 0; a < r.length; a++) {
      const i = r[a], s = n[a];
      if (i.getChild() !== s.getChild() && !i.getChild().equals(s.getChild())) return false;
    }
    return true;
  }
  function xg(t, e) {
    if (!!t != !!e) return false;
    const r = t.keys(), n = e.keys();
    if (r.length !== n.length) return false;
    for (const a of r) {
      const i = t.get(a), s = e.get(a);
      if (!!i != !!s) return false;
      const o = i.getChild(), u = s.getChild();
      if (o !== u && !o.equals(u)) return false;
    }
    return true;
  }
  function yd(t, e) {
    if (t === e) return true;
    if (!!t != !!e || !t || !e || t.length !== e.length) return false;
    for (let r = 0; r < t.length; r++) if (t[r] !== e[r]) return false;
    return true;
  }
  function bd(t, e) {
    if (t === e) return true;
    if (!!t != !!e) return false;
    if (!sn(t) || !sn(e)) return t === e;
    const r = t, n = e;
    let a = 0, i = 0, s;
    for (s in r) a++;
    for (s in n) i++;
    if (a !== i) return false;
    for (s in r) {
      const o = r[s], u = n[s];
      if (Ai(o) && Ai(u)) {
        if (!yd(o, u)) return false;
      } else if (sn(o) && sn(u)) {
        if (!bd(o, u)) return false;
      } else if (o !== u) return false;
    }
    return true;
  }
  function Ai(t) {
    return Array.isArray(t) || ArrayBuffer.isView(t);
  }
  const gl = "23456789abdegjkmnpqrvwxyzABDEGJKMNPQRVWXYZ", Eg = 999, Tg = 6, pl = /* @__PURE__ */ new Set(), Sg = function() {
    let e = "";
    for (let r = 0; r < Tg; r++) e += gl.charAt(Math.floor(Math.random() * gl.length));
    return e;
  }, Cg = function() {
    for (let e = 0; e < Eg; e++) {
      const r = Sg();
      if (!pl.has(r)) return pl.add(r), r;
    }
    return "";
  }, Or = (t) => t, Rg = /* @__PURE__ */ new Set();
  class _u extends fg {
    constructor(e, r = "") {
      super(e), this[Ve].name = r, this.init(), this.dispatchEvent({
        type: "create"
      });
    }
    getGraph() {
      return this.graph;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        name: "",
        extras: {}
      });
    }
    set(e, r) {
      return Array.isArray(r) && (r = r.slice()), super.set(e, r);
    }
    getName() {
      return this.get("name");
    }
    setName(e) {
      return this.set("name", e);
    }
    getExtras() {
      return this.get("extras");
    }
    setExtras(e) {
      return this.set("extras", e);
    }
    clone() {
      const e = this.constructor;
      return new e(this.graph).copy(this, Or);
    }
    copy(e, r = Or) {
      for (const n in this[Ve]) {
        const a = this[Ve][n];
        if (a instanceof In) this[rn].has(n) || a.dispose();
        else if (a instanceof Pr || a instanceof et) for (const i of a.values()) i.dispose();
        else if (a instanceof cr) for (const i of a.values()) i.dispose();
      }
      for (const n in e[Ve]) {
        const a = this[Ve][n], i = e[Ve][n];
        if (i instanceof In) this[rn].has(n) ? a.getChild().copy(r(i.getChild()), r) : this.setRef(n, r(i.getChild()), i.getAttributes());
        else if (i instanceof et || i instanceof Pr) for (const s of i.values()) this.addRef(n, r(s.getChild()), s.getAttributes());
        else if (i instanceof cr) for (const s of i.keys()) {
          const o = i.get(s);
          this.setRefMap(n, s, r(o.getChild()), o.getAttributes());
        }
        else sn(i) ? this[Ve][n] = JSON.parse(JSON.stringify(i)) : Array.isArray(i) || i instanceof ArrayBuffer || ArrayBuffer.isView(i) ? this[Ve][n] = i.slice() : this[Ve][n] = i;
      }
      return this;
    }
    equals(e, r = Rg) {
      if (this === e) return true;
      if (this.propertyType !== e.propertyType) return false;
      for (const n in this[Ve]) {
        if (r.has(n)) continue;
        const a = this[Ve][n], i = e[Ve][n];
        if (a instanceof In || i instanceof In) {
          if (!bg(a, i)) return false;
        } else if (a instanceof et || i instanceof et || a instanceof Pr || i instanceof Pr) {
          if (!wg(a, i)) return false;
        } else if (a instanceof cr || i instanceof cr) {
          if (!xg(a, i)) return false;
        } else if (sn(a) || sn(i)) {
          if (!bd(a, i)) return false;
        } else if (Ai(a) || Ai(i)) {
          if (!yd(a, i)) return false;
        } else if (a !== i) return false;
      }
      return true;
    }
    detach() {
      return this.graph.disconnectParents(this, (e) => e.propertyType !== "Root"), this;
    }
    listParents() {
      return this.graph.listParents(this);
    }
  }
  class Lt extends _u {
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        extensions: new cr()
      });
    }
    getExtension(e) {
      return this.getRefMap("extensions", e);
    }
    setExtension(e, r) {
      return r && r._validateParent(this), this.setRefMap("extensions", e, r);
    }
    listExtensions() {
      return this.listRefMapValues("extensions");
    }
  }
  Ae = class extends Lt {
    init() {
      this.propertyType = be.ACCESSOR;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        array: null,
        type: Ae.Type.SCALAR,
        componentType: Ae.ComponentType.FLOAT,
        normalized: false,
        sparse: false,
        buffer: null
      });
    }
    static getElementSize(e) {
      switch (e) {
        case Ae.Type.SCALAR:
          return 1;
        case Ae.Type.VEC2:
          return 2;
        case Ae.Type.VEC3:
          return 3;
        case Ae.Type.VEC4:
          return 4;
        case Ae.Type.MAT2:
          return 4;
        case Ae.Type.MAT3:
          return 9;
        case Ae.Type.MAT4:
          return 16;
        default:
          throw new Error("Unexpected type: " + e);
      }
    }
    static getComponentSize(e) {
      switch (e) {
        case Ae.ComponentType.BYTE:
          return 1;
        case Ae.ComponentType.UNSIGNED_BYTE:
          return 1;
        case Ae.ComponentType.SHORT:
          return 2;
        case Ae.ComponentType.UNSIGNED_SHORT:
          return 2;
        case Ae.ComponentType.UNSIGNED_INT:
          return 4;
        case Ae.ComponentType.FLOAT:
          return 4;
        default:
          throw new Error("Unexpected component type: " + e);
      }
    }
    getMinNormalized(e) {
      const r = this.getNormalized(), n = this.getElementSize(), a = this.getComponentType();
      if (this.getMin(e), r) for (let i = 0; i < n; i++) e[i] = nt.decodeNormalizedInt(e[i], a);
      return e;
    }
    getMin(e) {
      const r = this.getArray(), n = this.getCount(), a = this.getElementSize();
      for (let i = 0; i < a; i++) e[i] = 1 / 0;
      for (let i = 0; i < n * a; i += a) for (let s = 0; s < a; s++) {
        const o = r[i + s];
        Number.isFinite(o) && (e[s] = Math.min(e[s], o));
      }
      return e;
    }
    getMaxNormalized(e) {
      const r = this.getNormalized(), n = this.getElementSize(), a = this.getComponentType();
      if (this.getMax(e), r) for (let i = 0; i < n; i++) e[i] = nt.decodeNormalizedInt(e[i], a);
      return e;
    }
    getMax(e) {
      const r = this.get("array"), n = this.getCount(), a = this.getElementSize();
      for (let i = 0; i < a; i++) e[i] = -1 / 0;
      for (let i = 0; i < n * a; i += a) for (let s = 0; s < a; s++) {
        const o = r[i + s];
        Number.isFinite(o) && (e[s] = Math.max(e[s], o));
      }
      return e;
    }
    getCount() {
      const e = this.get("array");
      return e ? e.length / this.getElementSize() : 0;
    }
    getType() {
      return this.get("type");
    }
    setType(e) {
      return this.set("type", e);
    }
    getElementSize() {
      return Ae.getElementSize(this.get("type"));
    }
    getComponentSize() {
      return this.get("array").BYTES_PER_ELEMENT;
    }
    getComponentType() {
      return this.get("componentType");
    }
    getNormalized() {
      return this.get("normalized");
    }
    setNormalized(e) {
      return this.set("normalized", e);
    }
    getScalar(e) {
      const r = this.getElementSize(), n = this.getComponentType(), a = this.getArray();
      return this.getNormalized() ? nt.decodeNormalizedInt(a[e * r], n) : a[e * r];
    }
    setScalar(e, r) {
      const n = this.getElementSize(), a = this.getComponentType(), i = this.getArray();
      return this.getNormalized() ? i[e * n] = nt.encodeNormalizedInt(r, a) : i[e * n] = r, this;
    }
    getElement(e, r) {
      const n = this.getNormalized(), a = this.getElementSize(), i = this.getComponentType(), s = this.getArray();
      for (let o = 0; o < a; o++) n ? r[o] = nt.decodeNormalizedInt(s[e * a + o], i) : r[o] = s[e * a + o];
      return r;
    }
    setElement(e, r) {
      const n = this.getNormalized(), a = this.getElementSize(), i = this.getComponentType(), s = this.getArray();
      for (let o = 0; o < a; o++) n ? s[e * a + o] = nt.encodeNormalizedInt(r[o], i) : s[e * a + o] = r[o];
      return this;
    }
    getSparse() {
      return this.get("sparse");
    }
    setSparse(e) {
      return this.set("sparse", e);
    }
    getBuffer() {
      return this.getRef("buffer");
    }
    setBuffer(e) {
      return this.setRef("buffer", e);
    }
    getArray() {
      return this.get("array");
    }
    setArray(e) {
      return this.set("componentType", e ? Ag(e) : Ae.ComponentType.FLOAT), this.set("array", e), this;
    }
    getByteLength() {
      const e = this.get("array");
      return e ? e.byteLength : 0;
    }
  };
  Ae.Type = {
    SCALAR: "SCALAR",
    VEC2: "VEC2",
    VEC3: "VEC3",
    VEC4: "VEC4",
    MAT2: "MAT2",
    MAT3: "MAT3",
    MAT4: "MAT4"
  };
  Ae.ComponentType = {
    BYTE: 5120,
    UNSIGNED_BYTE: 5121,
    SHORT: 5122,
    UNSIGNED_SHORT: 5123,
    UNSIGNED_INT: 5125,
    FLOAT: 5126
  };
  function Ag(t) {
    switch (t.constructor) {
      case Float32Array:
        return Ae.ComponentType.FLOAT;
      case Uint32Array:
        return Ae.ComponentType.UNSIGNED_INT;
      case Uint16Array:
        return Ae.ComponentType.UNSIGNED_SHORT;
      case Uint8Array:
        return Ae.ComponentType.UNSIGNED_BYTE;
      case Int16Array:
        return Ae.ComponentType.SHORT;
      case Int8Array:
        return Ae.ComponentType.BYTE;
      default:
        throw new Error("Unknown accessor componentType.");
    }
  }
  let wd = class extends Lt {
    init() {
      this.propertyType = be.ANIMATION;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        channels: new et(),
        samplers: new et()
      });
    }
    addChannel(e) {
      return this.addRef("channels", e);
    }
    removeChannel(e) {
      return this.removeRef("channels", e);
    }
    listChannels() {
      return this.listRefs("channels");
    }
    addSampler(e) {
      return this.addRef("samplers", e);
    }
    removeSampler(e) {
      return this.removeRef("samplers", e);
    }
    listSamplers() {
      return this.listRefs("samplers");
    }
  };
  class xd extends Lt {
    init() {
      this.propertyType = be.ANIMATION_CHANNEL;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        targetPath: null,
        targetNode: null,
        sampler: null
      });
    }
    getTargetPath() {
      return this.get("targetPath");
    }
    setTargetPath(e) {
      return this.set("targetPath", e);
    }
    getTargetNode() {
      return this.getRef("targetNode");
    }
    setTargetNode(e) {
      return this.setRef("targetNode", e);
    }
    getSampler() {
      return this.getRef("sampler");
    }
    setSampler(e) {
      return this.setRef("sampler", e);
    }
  }
  xd.TargetPath = {
    TRANSLATION: "translation",
    ROTATION: "rotation",
    SCALE: "scale",
    WEIGHTS: "weights"
  };
  class Ba extends Lt {
    init() {
      this.propertyType = be.ANIMATION_SAMPLER;
    }
    getDefaultAttributes() {
      return Object.assign(super.getDefaults(), {
        interpolation: Ba.Interpolation.LINEAR,
        input: null,
        output: null
      });
    }
    getInterpolation() {
      return this.get("interpolation");
    }
    setInterpolation(e) {
      return this.set("interpolation", e);
    }
    getInput() {
      return this.getRef("input");
    }
    setInput(e) {
      return this.setRef("input", e, {
        usage: Ht.OTHER
      });
    }
    getOutput() {
      return this.getRef("output");
    }
    setOutput(e) {
      return this.setRef("output", e, {
        usage: Ht.OTHER
      });
    }
  }
  Ba.Interpolation = {
    LINEAR: "LINEAR",
    STEP: "STEP",
    CUBICSPLINE: "CUBICSPLINE"
  };
  class Ed extends Lt {
    init() {
      this.propertyType = be.BUFFER;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        uri: ""
      });
    }
    getURI() {
      return this.get("uri");
    }
    setURI(e) {
      return this.set("uri", e);
    }
  }
  class mn extends Lt {
    init() {
      this.propertyType = be.CAMERA;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        type: mn.Type.PERSPECTIVE,
        znear: 0.1,
        zfar: 100,
        aspectRatio: null,
        yfov: Math.PI * 2 * 50 / 360,
        xmag: 1,
        ymag: 1
      });
    }
    getType() {
      return this.get("type");
    }
    setType(e) {
      return this.set("type", e);
    }
    getZNear() {
      return this.get("znear");
    }
    setZNear(e) {
      return this.set("znear", e);
    }
    getZFar() {
      return this.get("zfar");
    }
    setZFar(e) {
      return this.set("zfar", e);
    }
    getAspectRatio() {
      return this.get("aspectRatio");
    }
    setAspectRatio(e) {
      return this.set("aspectRatio", e);
    }
    getYFov() {
      return this.get("yfov");
    }
    setYFov(e) {
      return this.set("yfov", e);
    }
    getXMag() {
      return this.get("xmag");
    }
    setXMag(e) {
      return this.set("xmag", e);
    }
    getYMag() {
      return this.get("ymag");
    }
    setYMag(e) {
      return this.set("ymag", e);
    }
  }
  mn.Type = {
    PERSPECTIVE: "perspective",
    ORTHOGRAPHIC: "orthographic"
  };
  class kg extends _u {
    _validateParent(e) {
      if (!this.parentTypes.includes(e.propertyType)) throw new Error(`Parent "${e.propertyType}" invalid for child "${this.propertyType}".`);
    }
  }
  kg.EXTENSION_NAME = void 0;
  class ar extends Lt {
    init() {
      this.propertyType = be.TEXTURE_INFO;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        texCoord: 0,
        magFilter: null,
        minFilter: null,
        wrapS: ar.WrapMode.REPEAT,
        wrapT: ar.WrapMode.REPEAT
      });
    }
    getTexCoord() {
      return this.get("texCoord");
    }
    setTexCoord(e) {
      return this.set("texCoord", e);
    }
    getMagFilter() {
      return this.get("magFilter");
    }
    setMagFilter(e) {
      return this.set("magFilter", e);
    }
    getMinFilter() {
      return this.get("minFilter");
    }
    setMinFilter(e) {
      return this.set("minFilter", e);
    }
    getWrapS() {
      return this.get("wrapS");
    }
    setWrapS(e) {
      return this.set("wrapS", e);
    }
    getWrapT() {
      return this.get("wrapT");
    }
    setWrapT(e) {
      return this.set("wrapT", e);
    }
  }
  ar.WrapMode = {
    CLAMP_TO_EDGE: 33071,
    MIRRORED_REPEAT: 33648,
    REPEAT: 10497
  };
  ar.MagFilter = {
    NEAREST: 9728,
    LINEAR: 9729
  };
  ar.MinFilter = {
    NEAREST: 9728,
    LINEAR: 9729,
    NEAREST_MIPMAP_NEAREST: 9984,
    LINEAR_MIPMAP_NEAREST: 9985,
    NEAREST_MIPMAP_LINEAR: 9986,
    LINEAR_MIPMAP_LINEAR: 9987
  };
  const { R: Ha, G: Ka, B: Ya, A: Pg } = tu;
  class fn extends Lt {
    init() {
      this.propertyType = be.MATERIAL;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        alphaMode: fn.AlphaMode.OPAQUE,
        alphaCutoff: 0.5,
        doubleSided: false,
        baseColorFactor: [
          1,
          1,
          1,
          1
        ],
        baseColorTexture: null,
        baseColorTextureInfo: new ar(this.graph, "baseColorTextureInfo"),
        emissiveFactor: [
          0,
          0,
          0
        ],
        emissiveTexture: null,
        emissiveTextureInfo: new ar(this.graph, "emissiveTextureInfo"),
        normalScale: 1,
        normalTexture: null,
        normalTextureInfo: new ar(this.graph, "normalTextureInfo"),
        occlusionStrength: 1,
        occlusionTexture: null,
        occlusionTextureInfo: new ar(this.graph, "occlusionTextureInfo"),
        roughnessFactor: 1,
        metallicFactor: 1,
        metallicRoughnessTexture: null,
        metallicRoughnessTextureInfo: new ar(this.graph, "metallicRoughnessTextureInfo")
      });
    }
    getDoubleSided() {
      return this.get("doubleSided");
    }
    setDoubleSided(e) {
      return this.set("doubleSided", e);
    }
    getAlpha() {
      return this.get("baseColorFactor")[3];
    }
    setAlpha(e) {
      const r = this.get("baseColorFactor").slice();
      return r[3] = e, this.set("baseColorFactor", r);
    }
    getAlphaMode() {
      return this.get("alphaMode");
    }
    setAlphaMode(e) {
      return this.set("alphaMode", e);
    }
    getAlphaCutoff() {
      return this.get("alphaCutoff");
    }
    setAlphaCutoff(e) {
      return this.set("alphaCutoff", e);
    }
    getBaseColorFactor() {
      return this.get("baseColorFactor");
    }
    setBaseColorFactor(e) {
      return this.set("baseColorFactor", e);
    }
    getBaseColorTexture() {
      return this.getRef("baseColorTexture");
    }
    getBaseColorTextureInfo() {
      return this.getRef("baseColorTexture") ? this.getRef("baseColorTextureInfo") : null;
    }
    setBaseColorTexture(e) {
      return this.setRef("baseColorTexture", e, {
        channels: Ha | Ka | Ya | Pg,
        isColor: true
      });
    }
    getEmissiveFactor() {
      return this.get("emissiveFactor");
    }
    setEmissiveFactor(e) {
      return this.set("emissiveFactor", e);
    }
    getEmissiveTexture() {
      return this.getRef("emissiveTexture");
    }
    getEmissiveTextureInfo() {
      return this.getRef("emissiveTexture") ? this.getRef("emissiveTextureInfo") : null;
    }
    setEmissiveTexture(e) {
      return this.setRef("emissiveTexture", e, {
        channels: Ha | Ka | Ya,
        isColor: true
      });
    }
    getNormalScale() {
      return this.get("normalScale");
    }
    setNormalScale(e) {
      return this.set("normalScale", e);
    }
    getNormalTexture() {
      return this.getRef("normalTexture");
    }
    getNormalTextureInfo() {
      return this.getRef("normalTexture") ? this.getRef("normalTextureInfo") : null;
    }
    setNormalTexture(e) {
      return this.setRef("normalTexture", e, {
        channels: Ha | Ka | Ya
      });
    }
    getOcclusionStrength() {
      return this.get("occlusionStrength");
    }
    setOcclusionStrength(e) {
      return this.set("occlusionStrength", e);
    }
    getOcclusionTexture() {
      return this.getRef("occlusionTexture");
    }
    getOcclusionTextureInfo() {
      return this.getRef("occlusionTexture") ? this.getRef("occlusionTextureInfo") : null;
    }
    setOcclusionTexture(e) {
      return this.setRef("occlusionTexture", e, {
        channels: Ha
      });
    }
    getRoughnessFactor() {
      return this.get("roughnessFactor");
    }
    setRoughnessFactor(e) {
      return this.set("roughnessFactor", e);
    }
    getMetallicFactor() {
      return this.get("metallicFactor");
    }
    setMetallicFactor(e) {
      return this.set("metallicFactor", e);
    }
    getMetallicRoughnessTexture() {
      return this.getRef("metallicRoughnessTexture");
    }
    getMetallicRoughnessTextureInfo() {
      return this.getRef("metallicRoughnessTexture") ? this.getRef("metallicRoughnessTextureInfo") : null;
    }
    setMetallicRoughnessTexture(e) {
      return this.setRef("metallicRoughnessTexture", e, {
        channels: Ka | Ya
      });
    }
  }
  fn.AlphaMode = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  class Td extends Lt {
    init() {
      this.propertyType = be.MESH;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        weights: [],
        primitives: new et()
      });
    }
    addPrimitive(e) {
      return this.addRef("primitives", e);
    }
    removePrimitive(e) {
      return this.removeRef("primitives", e);
    }
    listPrimitives() {
      return this.listRefs("primitives");
    }
    getWeights() {
      return this.get("weights");
    }
    setWeights(e) {
      return this.set("weights", e);
    }
  }
  class Sd extends Lt {
    init() {
      this.propertyType = be.NODE;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        translation: [
          0,
          0,
          0
        ],
        rotation: [
          0,
          0,
          0,
          1
        ],
        scale: [
          1,
          1,
          1
        ],
        weights: [],
        camera: null,
        mesh: null,
        skin: null,
        children: new et()
      });
    }
    copy(e, r = Or) {
      if (r === Or) throw new Error("Node cannot be copied.");
      return super.copy(e, r);
    }
    getTranslation() {
      return this.get("translation");
    }
    getRotation() {
      return this.get("rotation");
    }
    getScale() {
      return this.get("scale");
    }
    setTranslation(e) {
      return this.set("translation", e);
    }
    setRotation(e) {
      return this.set("rotation", e);
    }
    setScale(e) {
      return this.set("scale", e);
    }
    getMatrix() {
      return nt.compose(this.get("translation"), this.get("rotation"), this.get("scale"), []);
    }
    setMatrix(e) {
      const r = this.get("translation").slice(), n = this.get("rotation").slice(), a = this.get("scale").slice();
      return nt.decompose(e, r, n, a), this.set("translation", r).set("rotation", n).set("scale", a);
    }
    getWorldTranslation() {
      const e = [
        0,
        0,
        0
      ];
      return nt.decompose(this.getWorldMatrix(), e, [
        0,
        0,
        0,
        1
      ], [
        1,
        1,
        1
      ]), e;
    }
    getWorldRotation() {
      const e = [
        0,
        0,
        0,
        1
      ];
      return nt.decompose(this.getWorldMatrix(), [
        0,
        0,
        0
      ], e, [
        1,
        1,
        1
      ]), e;
    }
    getWorldScale() {
      const e = [
        1,
        1,
        1
      ];
      return nt.decompose(this.getWorldMatrix(), [
        0,
        0,
        0
      ], [
        0,
        0,
        0,
        1
      ], e), e;
    }
    getWorldMatrix() {
      const e = [];
      for (let a = this; a != null; a = a.getParentNode()) e.push(a);
      let r;
      const n = e.pop().getMatrix();
      for (; r = e.pop(); ) pg(n, n, r.getMatrix());
      return n;
    }
    addChild(e) {
      const r = e.getParentNode();
      r && r.removeChild(e);
      for (const n of e.listParents()) n.propertyType === be.SCENE && n.removeChild(e);
      return this.addRef("children", e);
    }
    removeChild(e) {
      return this.removeRef("children", e);
    }
    listChildren() {
      return this.listRefs("children");
    }
    getParentNode() {
      for (const e of this.listParents()) if (e.propertyType === be.NODE) return e;
      return null;
    }
    getMesh() {
      return this.getRef("mesh");
    }
    setMesh(e) {
      return this.setRef("mesh", e);
    }
    getCamera() {
      return this.getRef("camera");
    }
    setCamera(e) {
      return this.setRef("camera", e);
    }
    getSkin() {
      return this.getRef("skin");
    }
    setSkin(e) {
      return this.setRef("skin", e);
    }
    getWeights() {
      return this.get("weights");
    }
    setWeights(e) {
      return this.set("weights", e);
    }
    traverse(e) {
      e(this);
      for (const r of this.listChildren()) r.traverse(e);
      return this;
    }
  }
  class Ki extends Lt {
    init() {
      this.propertyType = be.PRIMITIVE;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        mode: Ki.Mode.TRIANGLES,
        material: null,
        indices: null,
        attributes: new cr(),
        targets: new et()
      });
    }
    getIndices() {
      return this.getRef("indices");
    }
    setIndices(e) {
      return this.setRef("indices", e, {
        usage: Ht.ELEMENT_ARRAY_BUFFER
      });
    }
    getAttribute(e) {
      return this.getRefMap("attributes", e);
    }
    setAttribute(e, r) {
      return this.setRefMap("attributes", e, r, {
        usage: Ht.ARRAY_BUFFER
      });
    }
    listAttributes() {
      return this.listRefMapValues("attributes");
    }
    listSemantics() {
      return this.listRefMapKeys("attributes");
    }
    getMaterial() {
      return this.getRef("material");
    }
    setMaterial(e) {
      return this.setRef("material", e);
    }
    getMode() {
      return this.get("mode");
    }
    setMode(e) {
      return this.set("mode", e);
    }
    listTargets() {
      return this.listRefs("targets");
    }
    addTarget(e) {
      return this.addRef("targets", e);
    }
    removeTarget(e) {
      return this.removeRef("targets", e);
    }
  }
  Ki.Mode = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  };
  class _g extends _u {
    init() {
      this.propertyType = be.PRIMITIVE_TARGET;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        attributes: new cr()
      });
    }
    getAttribute(e) {
      return this.getRefMap("attributes", e);
    }
    setAttribute(e, r) {
      return this.setRefMap("attributes", e, r, {
        usage: Ht.ARRAY_BUFFER
      });
    }
    listAttributes() {
      return this.listRefMapValues("attributes");
    }
    listSemantics() {
      return this.listRefMapKeys("attributes");
    }
  }
  function Nt() {
    return Nt = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }
      return t;
    }, Nt.apply(null, arguments);
  }
  class Cd extends Lt {
    init() {
      this.propertyType = be.SCENE;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        children: new et()
      });
    }
    copy(e, r = Or) {
      if (r === Or) throw new Error("Scene cannot be copied.");
      return super.copy(e, r);
    }
    addChild(e) {
      const r = e.getParentNode();
      return r && r.removeChild(e), this.addRef("children", e);
    }
    removeChild(e) {
      return this.removeRef("children", e);
    }
    listChildren() {
      return this.listRefs("children");
    }
    traverse(e) {
      for (const r of this.listChildren()) r.traverse(e);
      return this;
    }
  }
  class Rd extends Lt {
    init() {
      this.propertyType = be.SKIN;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        skeleton: null,
        inverseBindMatrices: null,
        joints: new et()
      });
    }
    getSkeleton() {
      return this.getRef("skeleton");
    }
    setSkeleton(e) {
      return this.setRef("skeleton", e);
    }
    getInverseBindMatrices() {
      return this.getRef("inverseBindMatrices");
    }
    setInverseBindMatrices(e) {
      return this.setRef("inverseBindMatrices", e, {
        usage: Ht.INVERSE_BIND_MATRICES
      });
    }
    addJoint(e) {
      return this.addRef("joints", e);
    }
    removeJoint(e) {
      return this.removeRef("joints", e);
    }
    listJoints() {
      return this.listRefs("joints");
    }
  }
  class Ad extends Lt {
    init() {
      this.propertyType = be.TEXTURE;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        image: null,
        mimeType: "",
        uri: ""
      });
    }
    getMimeType() {
      return this.get("mimeType") || un.extensionToMimeType(cn.extension(this.get("uri")));
    }
    setMimeType(e) {
      return this.set("mimeType", e);
    }
    getURI() {
      return this.get("uri");
    }
    setURI(e) {
      this.set("uri", e);
      const r = un.extensionToMimeType(cn.extension(e));
      return r && this.set("mimeType", r), this;
    }
    getImage() {
      return this.get("image");
    }
    setImage(e) {
      return this.set("image", Le.assertView(e));
    }
    getSize() {
      const e = this.get("image");
      return e ? un.getSize(e, this.getMimeType()) : null;
    }
  }
  class Ig extends Lt {
    init() {
      this.propertyType = be.ROOT;
    }
    getDefaults() {
      return Object.assign(super.getDefaults(), {
        asset: {
          generator: `glTF-Transform ${md}`,
          version: "2.0"
        },
        defaultScene: null,
        accessors: new et(),
        animations: new et(),
        buffers: new et(),
        cameras: new et(),
        materials: new et(),
        meshes: new et(),
        nodes: new et(),
        scenes: new et(),
        skins: new et(),
        textures: new et()
      });
    }
    constructor(e) {
      super(e), this._extensions = /* @__PURE__ */ new Set(), e.addEventListener("node:create", (r) => {
        this._addChildOfRoot(r.target);
      });
    }
    clone() {
      throw new Error("Root cannot be cloned.");
    }
    copy(e, r = Or) {
      if (r === Or) throw new Error("Root cannot be copied.");
      this.set("asset", Nt({}, e.get("asset"))), this.setName(e.getName()), this.setExtras(Nt({}, e.getExtras())), this.setDefaultScene(e.getDefaultScene() ? r(e.getDefaultScene()) : null);
      for (const n of e.listRefMapKeys("extensions")) {
        const a = e.getExtension(n);
        this.setExtension(n, r(a));
      }
      return this;
    }
    _addChildOfRoot(e) {
      return e instanceof Cd ? this.addRef("scenes", e) : e instanceof Sd ? this.addRef("nodes", e) : e instanceof mn ? this.addRef("cameras", e) : e instanceof Rd ? this.addRef("skins", e) : e instanceof Td ? this.addRef("meshes", e) : e instanceof fn ? this.addRef("materials", e) : e instanceof Ad ? this.addRef("textures", e) : e instanceof wd ? this.addRef("animations", e) : e instanceof Ae ? this.addRef("accessors", e) : e instanceof Ed && this.addRef("buffers", e), this;
    }
    getAsset() {
      return this.get("asset");
    }
    listExtensionsUsed() {
      return Array.from(this._extensions);
    }
    listExtensionsRequired() {
      return this.listExtensionsUsed().filter((e) => e.isRequired());
    }
    _enableExtension(e) {
      return this._extensions.add(e), this;
    }
    _disableExtension(e) {
      return this._extensions.delete(e), this;
    }
    listScenes() {
      return this.listRefs("scenes");
    }
    setDefaultScene(e) {
      return this.setRef("defaultScene", e);
    }
    getDefaultScene() {
      return this.getRef("defaultScene");
    }
    listNodes() {
      return this.listRefs("nodes");
    }
    listCameras() {
      return this.listRefs("cameras");
    }
    listSkins() {
      return this.listRefs("skins");
    }
    listMeshes() {
      return this.listRefs("meshes");
    }
    listMaterials() {
      return this.listRefs("materials");
    }
    listTextures() {
      return this.listRefs("textures");
    }
    listAnimations() {
      return this.listRefs("animations");
    }
    listAccessors() {
      return this.listRefs("accessors");
    }
    listBuffers() {
      return this.listRefs("buffers");
    }
  }
  ya = class {
    static fromGraph(e) {
      return ya._GRAPH_DOCUMENTS.get(e) || null;
    }
    constructor() {
      this._graph = new cg(), this._root = new Ig(this._graph), this._logger = Xt.DEFAULT_INSTANCE, ya._GRAPH_DOCUMENTS.set(this._graph, this);
    }
    getRoot() {
      return this._root;
    }
    getGraph() {
      return this._graph;
    }
    getLogger() {
      return this._logger;
    }
    setLogger(e) {
      return this._logger = e, this;
    }
    clone() {
      throw new Error("Use 'cloneDocument(source)' from '@gltf-transform/functions'.");
    }
    merge(e) {
      throw new Error("Use 'mergeDocuments(target, source)' from '@gltf-transform/functions'.");
    }
    async transform(...e) {
      const r = e.map((n) => n.name);
      for (const n of e) await n(this, {
        stack: r
      });
      return this;
    }
    createExtension(e) {
      const r = e.EXTENSION_NAME;
      return this.getRoot().listExtensionsUsed().find((a) => a.extensionName === r) || new e(this);
    }
    disposeExtension(e) {
      const r = this.getRoot().listExtensionsUsed().find((n) => n.extensionName === e);
      r && r.dispose();
    }
    createScene(e = "") {
      return new Cd(this._graph, e);
    }
    createNode(e = "") {
      return new Sd(this._graph, e);
    }
    createCamera(e = "") {
      return new mn(this._graph, e);
    }
    createSkin(e = "") {
      return new Rd(this._graph, e);
    }
    createMesh(e = "") {
      return new Td(this._graph, e);
    }
    createPrimitive() {
      return new Ki(this._graph);
    }
    createPrimitiveTarget(e = "") {
      return new _g(this._graph, e);
    }
    createMaterial(e = "") {
      return new fn(this._graph, e);
    }
    createTexture(e = "") {
      return new Ad(this._graph, e);
    }
    createAnimation(e = "") {
      return new wd(this._graph, e);
    }
    createAnimationChannel(e = "") {
      return new xd(this._graph, e);
    }
    createAnimationSampler(e = "") {
      return new Ba(this._graph, e);
    }
    createAccessor(e = "", r = null) {
      return r || (r = this.getRoot().listBuffers()[0]), new Ae(this._graph, e).setBuffer(r);
    }
    createBuffer(e = "") {
      return new Ed(this._graph, e);
    }
  };
  ya._GRAPH_DOCUMENTS = /* @__PURE__ */ new WeakMap();
  class Bg {
    constructor(e) {
      this.jsonDoc = void 0, this.buffers = [], this.bufferViews = [], this.bufferViewBuffers = [], this.accessors = [], this.textures = [], this.textureInfos = /* @__PURE__ */ new Map(), this.materials = [], this.meshes = [], this.cameras = [], this.nodes = [], this.skins = [], this.animations = [], this.scenes = [], this.jsonDoc = e;
    }
    setTextureInfo(e, r) {
      this.textureInfos.set(e, r), r.texCoord !== void 0 && e.setTexCoord(r.texCoord), r.extras !== void 0 && e.setExtras(r.extras);
      const n = this.jsonDoc.json.textures[r.index];
      if (n.sampler === void 0) return;
      const a = this.jsonDoc.json.samplers[n.sampler];
      a.magFilter !== void 0 && e.setMagFilter(a.magFilter), a.minFilter !== void 0 && e.setMinFilter(a.minFilter), a.wrapS !== void 0 && e.setWrapS(a.wrapS), a.wrapT !== void 0 && e.setWrapT(a.wrapT);
    }
  }
  const ml = {
    logger: Xt.DEFAULT_INSTANCE,
    extensions: [],
    dependencies: {}
  }, Mg = /* @__PURE__ */ new Set([
    be.BUFFER,
    be.TEXTURE,
    be.MATERIAL,
    be.MESH,
    be.PRIMITIVE,
    be.NODE,
    be.SCENE
  ]);
  class Dg {
    static read(e, r = ml) {
      const n = Nt({}, ml, r), { json: a } = e, i = new ya().setLogger(n.logger);
      this.validate(e, n);
      const s = new Bg(e), o = a.asset, u = i.getRoot().getAsset();
      o.copyright && (u.copyright = o.copyright), o.extras && (u.extras = o.extras), a.extras !== void 0 && i.getRoot().setExtras(Nt({}, a.extras));
      const l = a.extensionsUsed || [], c = a.extensionsRequired || [];
      n.extensions.sort((w, T) => w.EXTENSION_NAME > T.EXTENSION_NAME ? 1 : -1);
      for (const w of n.extensions) if (l.includes(w.EXTENSION_NAME)) {
        const T = i.createExtension(w).setRequired(c.includes(w.EXTENSION_NAME)), C = T.prereadTypes.filter((R) => !Mg.has(R));
        C.length && n.logger.warn(`Preread hooks for some types (${C.join()}), requested by extension ${T.extensionName}, are unsupported. Please file an issue or a PR.`);
        for (const R of T.readDependencies) T.install(R, n.dependencies[R]);
      }
      const f = a.buffers || [];
      i.getRoot().listExtensionsUsed().filter((w) => w.prereadTypes.includes(be.BUFFER)).forEach((w) => w.preread(s, be.BUFFER)), s.buffers = f.map((w) => {
        const T = i.createBuffer(w.name);
        return w.extras && T.setExtras(w.extras), w.uri && w.uri.indexOf("__") !== 0 && T.setURI(w.uri), T;
      });
      const d = a.bufferViews || [];
      s.bufferViewBuffers = d.map((w, T) => {
        if (!s.bufferViews[T]) {
          const C = e.json.buffers[w.buffer], R = C.uri ? e.resources[C.uri] : e.resources[Ci], A = w.byteOffset || 0;
          s.bufferViews[T] = Le.toView(R, A, w.byteLength);
        }
        return s.buffers[w.buffer];
      });
      const v = a.accessors || [];
      s.accessors = v.map((w) => {
        const T = s.bufferViewBuffers[w.bufferView], C = i.createAccessor(w.name, T).setType(w.type);
        return w.extras && C.setExtras(w.extras), w.normalized !== void 0 && C.setNormalized(w.normalized), w.bufferView === void 0 || C.setArray(vi(w, s)), C;
      });
      const h = a.images || [], y = a.textures || [];
      i.getRoot().listExtensionsUsed().filter((w) => w.prereadTypes.includes(be.TEXTURE)).forEach((w) => w.preread(s, be.TEXTURE)), s.textures = h.map((w) => {
        const T = i.createTexture(w.name);
        if (w.extras && T.setExtras(w.extras), w.bufferView !== void 0) {
          const C = a.bufferViews[w.bufferView], R = e.json.buffers[C.buffer], A = R.uri ? e.resources[R.uri] : e.resources[Ci], P = C.byteOffset || 0, k = C.byteLength, I = A.slice(P, P + k);
          T.setImage(I);
        } else w.uri !== void 0 && (T.setImage(e.resources[w.uri]), w.uri.indexOf("__") !== 0 && T.setURI(w.uri));
        if (w.mimeType !== void 0) T.setMimeType(w.mimeType);
        else if (w.uri) {
          const C = cn.extension(w.uri);
          T.setMimeType(un.extensionToMimeType(C));
        }
        return T;
      }), i.getRoot().listExtensionsUsed().filter((w) => w.prereadTypes.includes(be.MATERIAL)).forEach((w) => w.preread(s, be.MATERIAL));
      const p = a.materials || [];
      s.materials = p.map((w) => {
        const T = i.createMaterial(w.name);
        w.extras && T.setExtras(w.extras), w.alphaMode !== void 0 && T.setAlphaMode(w.alphaMode), w.alphaCutoff !== void 0 && T.setAlphaCutoff(w.alphaCutoff), w.doubleSided !== void 0 && T.setDoubleSided(w.doubleSided);
        const C = w.pbrMetallicRoughness || {};
        if (C.baseColorFactor !== void 0 && T.setBaseColorFactor(C.baseColorFactor), w.emissiveFactor !== void 0 && T.setEmissiveFactor(w.emissiveFactor), C.metallicFactor !== void 0 && T.setMetallicFactor(C.metallicFactor), C.roughnessFactor !== void 0 && T.setRoughnessFactor(C.roughnessFactor), C.baseColorTexture !== void 0) {
          const R = C.baseColorTexture, A = s.textures[y[R.index].source];
          T.setBaseColorTexture(A), s.setTextureInfo(T.getBaseColorTextureInfo(), R);
        }
        if (w.emissiveTexture !== void 0) {
          const R = w.emissiveTexture, A = s.textures[y[R.index].source];
          T.setEmissiveTexture(A), s.setTextureInfo(T.getEmissiveTextureInfo(), R);
        }
        if (w.normalTexture !== void 0) {
          const R = w.normalTexture, A = s.textures[y[R.index].source];
          T.setNormalTexture(A), s.setTextureInfo(T.getNormalTextureInfo(), R), w.normalTexture.scale !== void 0 && T.setNormalScale(w.normalTexture.scale);
        }
        if (w.occlusionTexture !== void 0) {
          const R = w.occlusionTexture, A = s.textures[y[R.index].source];
          T.setOcclusionTexture(A), s.setTextureInfo(T.getOcclusionTextureInfo(), R), w.occlusionTexture.strength !== void 0 && T.setOcclusionStrength(w.occlusionTexture.strength);
        }
        if (C.metallicRoughnessTexture !== void 0) {
          const R = C.metallicRoughnessTexture, A = s.textures[y[R.index].source];
          T.setMetallicRoughnessTexture(A), s.setTextureInfo(T.getMetallicRoughnessTextureInfo(), R);
        }
        return T;
      }), i.getRoot().listExtensionsUsed().filter((w) => w.prereadTypes.includes(be.MESH)).forEach((w) => w.preread(s, be.MESH));
      const g = a.meshes || [];
      i.getRoot().listExtensionsUsed().filter((w) => w.prereadTypes.includes(be.PRIMITIVE)).forEach((w) => w.preread(s, be.PRIMITIVE)), s.meshes = g.map((w) => {
        const T = i.createMesh(w.name);
        return w.extras && T.setExtras(w.extras), w.weights !== void 0 && T.setWeights(w.weights), (w.primitives || []).forEach((R) => {
          const A = i.createPrimitive();
          R.extras && A.setExtras(R.extras), R.material !== void 0 && A.setMaterial(s.materials[R.material]), R.mode !== void 0 && A.setMode(R.mode);
          for (const [I, M] of Object.entries(R.attributes || {})) A.setAttribute(I, s.accessors[M]);
          R.indices !== void 0 && A.setIndices(s.accessors[R.indices]);
          const P = w.extras && w.extras.targetNames || [];
          (R.targets || []).forEach((I, M) => {
            const D = P[M] || M.toString(), B = i.createPrimitiveTarget(D);
            for (const [O, z] of Object.entries(I)) B.setAttribute(O, s.accessors[z]);
            A.addTarget(B);
          }), T.addPrimitive(A);
        }), T;
      });
      const b = a.cameras || [];
      s.cameras = b.map((w) => {
        const T = i.createCamera(w.name).setType(w.type);
        if (w.extras && T.setExtras(w.extras), w.type === mn.Type.PERSPECTIVE) {
          const C = w.perspective;
          T.setYFov(C.yfov), T.setZNear(C.znear), C.zfar !== void 0 && T.setZFar(C.zfar), C.aspectRatio !== void 0 && T.setAspectRatio(C.aspectRatio);
        } else {
          const C = w.orthographic;
          T.setZNear(C.znear).setZFar(C.zfar).setXMag(C.xmag).setYMag(C.ymag);
        }
        return T;
      });
      const m = a.nodes || [];
      i.getRoot().listExtensionsUsed().filter((w) => w.prereadTypes.includes(be.NODE)).forEach((w) => w.preread(s, be.NODE)), s.nodes = m.map((w) => {
        const T = i.createNode(w.name);
        if (w.extras && T.setExtras(w.extras), w.translation !== void 0 && T.setTranslation(w.translation), w.rotation !== void 0 && T.setRotation(w.rotation), w.scale !== void 0 && T.setScale(w.scale), w.matrix !== void 0) {
          const C = [
            0,
            0,
            0
          ], R = [
            0,
            0,
            0,
            1
          ], A = [
            1,
            1,
            1
          ];
          nt.decompose(w.matrix, C, R, A), T.setTranslation(C), T.setRotation(R), T.setScale(A);
        }
        return w.weights !== void 0 && T.setWeights(w.weights), T;
      });
      const x = a.skins || [];
      s.skins = x.map((w) => {
        const T = i.createSkin(w.name);
        w.extras && T.setExtras(w.extras), w.inverseBindMatrices !== void 0 && T.setInverseBindMatrices(s.accessors[w.inverseBindMatrices]), w.skeleton !== void 0 && T.setSkeleton(s.nodes[w.skeleton]);
        for (const C of w.joints) T.addJoint(s.nodes[C]);
        return T;
      }), m.map((w, T) => {
        const C = s.nodes[T];
        (w.children || []).forEach((A) => C.addChild(s.nodes[A])), w.mesh !== void 0 && C.setMesh(s.meshes[w.mesh]), w.camera !== void 0 && C.setCamera(s.cameras[w.camera]), w.skin !== void 0 && C.setSkin(s.skins[w.skin]);
      });
      const E = a.animations || [];
      s.animations = E.map((w) => {
        const T = i.createAnimation(w.name);
        w.extras && T.setExtras(w.extras);
        const R = (w.samplers || []).map((P) => {
          const k = i.createAnimationSampler().setInput(s.accessors[P.input]).setOutput(s.accessors[P.output]).setInterpolation(P.interpolation || Ba.Interpolation.LINEAR);
          return P.extras && k.setExtras(P.extras), T.addSampler(k), k;
        });
        return (w.channels || []).forEach((P) => {
          const k = i.createAnimationChannel().setSampler(R[P.sampler]).setTargetPath(P.target.path);
          P.target.node !== void 0 && k.setTargetNode(s.nodes[P.target.node]), P.extras && k.setExtras(P.extras), T.addChannel(k);
        }), T;
      });
      const S = a.scenes || [];
      return i.getRoot().listExtensionsUsed().filter((w) => w.prereadTypes.includes(be.SCENE)).forEach((w) => w.preread(s, be.SCENE)), s.scenes = S.map((w) => {
        const T = i.createScene(w.name);
        return w.extras && T.setExtras(w.extras), (w.nodes || []).map((R) => s.nodes[R]).forEach((R) => T.addChild(R)), T;
      }), a.scene !== void 0 && i.getRoot().setDefaultScene(s.scenes[a.scene]), i.getRoot().listExtensionsUsed().forEach((w) => w.read(s)), v.forEach((w, T) => {
        const C = s.accessors[T], R = !!w.sparse, A = !w.bufferView && !C.getArray();
        (R || A) && C.setSparse(true).setArray(Ng(w, s));
      }), i;
    }
    static validate(e, r) {
      const n = e.json;
      if (n.asset.version !== "2.0") throw new Error(`Unsupported glTF version, "${n.asset.version}".`);
      if (n.extensionsRequired) {
        for (const a of n.extensionsRequired) if (!r.extensions.find((i) => i.EXTENSION_NAME === a)) throw new Error(`Missing required extension, "${a}".`);
      }
      if (n.extensionsUsed) for (const a of n.extensionsUsed) r.extensions.find((i) => i.EXTENSION_NAME === a) || r.logger.warn(`Missing optional extension, "${a}".`);
    }
  }
  function Og(t, e) {
    const r = e.jsonDoc, n = e.bufferViews[t.bufferView], a = r.json.bufferViews[t.bufferView], i = Wi[t.componentType], s = Ae.getElementSize(t.type), o = i.BYTES_PER_ELEMENT, u = t.byteOffset || 0, l = new i(t.count * s), c = new DataView(n.buffer, n.byteOffset, n.byteLength), f = a.byteStride;
    for (let d = 0; d < t.count; d++) for (let v = 0; v < s; v++) {
      const h = u + d * f + v * o;
      let y;
      switch (t.componentType) {
        case Ae.ComponentType.FLOAT:
          y = c.getFloat32(h, true);
          break;
        case Ae.ComponentType.UNSIGNED_INT:
          y = c.getUint32(h, true);
          break;
        case Ae.ComponentType.UNSIGNED_SHORT:
          y = c.getUint16(h, true);
          break;
        case Ae.ComponentType.UNSIGNED_BYTE:
          y = c.getUint8(h);
          break;
        case Ae.ComponentType.SHORT:
          y = c.getInt16(h, true);
          break;
        case Ae.ComponentType.BYTE:
          y = c.getInt8(h);
          break;
        default:
          throw new Error(`Unexpected componentType "${t.componentType}".`);
      }
      l[d * s + v] = y;
    }
    return l;
  }
  function vi(t, e) {
    const r = e.jsonDoc, n = e.bufferViews[t.bufferView], a = r.json.bufferViews[t.bufferView], i = Wi[t.componentType], s = Ae.getElementSize(t.type), o = i.BYTES_PER_ELEMENT, u = s * o;
    if (a.byteStride !== void 0 && a.byteStride !== u) return Og(t, e);
    const l = n.byteOffset + (t.byteOffset || 0), c = t.count * s * o;
    return new i(n.buffer.slice(l, l + c));
  }
  function Ng(t, e) {
    const r = Wi[t.componentType], n = Ae.getElementSize(t.type);
    let a;
    t.bufferView !== void 0 ? a = vi(t, e) : a = new r(t.count * n);
    const i = t.sparse;
    if (!i) return a;
    const s = i.count, o = Nt({}, t, i.indices, {
      count: s,
      type: "SCALAR"
    }), u = Nt({}, t, i.values, {
      count: s
    }), l = vi(o, e), c = vi(u, e);
    for (let f = 0; f < o.count; f++) for (let d = 0; d < n; d++) a[l[f] * n + d] = c[f * n + d];
    return a;
  }
  var ba;
  (function(t) {
    t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
  })(ba || (ba = {}));
  class ln {
    constructor(e, r, n) {
      this._doc = void 0, this.jsonDoc = void 0, this.options = void 0, this.accessorIndexMap = /* @__PURE__ */ new Map(), this.animationIndexMap = /* @__PURE__ */ new Map(), this.bufferIndexMap = /* @__PURE__ */ new Map(), this.cameraIndexMap = /* @__PURE__ */ new Map(), this.skinIndexMap = /* @__PURE__ */ new Map(), this.materialIndexMap = /* @__PURE__ */ new Map(), this.meshIndexMap = /* @__PURE__ */ new Map(), this.nodeIndexMap = /* @__PURE__ */ new Map(), this.imageIndexMap = /* @__PURE__ */ new Map(), this.textureDefIndexMap = /* @__PURE__ */ new Map(), this.textureInfoDefMap = /* @__PURE__ */ new Map(), this.samplerDefIndexMap = /* @__PURE__ */ new Map(), this.sceneIndexMap = /* @__PURE__ */ new Map(), this.imageBufferViews = [], this.otherBufferViews = /* @__PURE__ */ new Map(), this.otherBufferViewsIndexMap = /* @__PURE__ */ new Map(), this.extensionData = {}, this.bufferURIGenerator = void 0, this.imageURIGenerator = void 0, this.logger = void 0, this._accessorUsageMap = /* @__PURE__ */ new Map(), this.accessorUsageGroupedByParent = /* @__PURE__ */ new Set([
        "ARRAY_BUFFER"
      ]), this.accessorParents = /* @__PURE__ */ new Map(), this._doc = e, this.jsonDoc = r, this.options = n;
      const a = e.getRoot(), i = a.listBuffers().length, s = a.listTextures().length;
      this.bufferURIGenerator = new yl(i > 1, () => n.basename || "buffer"), this.imageURIGenerator = new yl(s > 1, (o) => zg(e, o) || n.basename || "texture"), this.logger = e.getLogger();
    }
    createTextureInfoDef(e, r) {
      const n = {
        magFilter: r.getMagFilter() || void 0,
        minFilter: r.getMinFilter() || void 0,
        wrapS: r.getWrapS(),
        wrapT: r.getWrapT()
      }, a = JSON.stringify(n);
      this.samplerDefIndexMap.has(a) || (this.samplerDefIndexMap.set(a, this.jsonDoc.json.samplers.length), this.jsonDoc.json.samplers.push(n));
      const i = {
        source: this.imageIndexMap.get(e),
        sampler: this.samplerDefIndexMap.get(a)
      }, s = JSON.stringify(i);
      this.textureDefIndexMap.has(s) || (this.textureDefIndexMap.set(s, this.jsonDoc.json.textures.length), this.jsonDoc.json.textures.push(i));
      const o = {
        index: this.textureDefIndexMap.get(s)
      };
      return r.getTexCoord() !== 0 && (o.texCoord = r.getTexCoord()), Object.keys(r.getExtras()).length > 0 && (o.extras = r.getExtras()), this.textureInfoDefMap.set(r, o), o;
    }
    createPropertyDef(e) {
      const r = {};
      return e.getName() && (r.name = e.getName()), Object.keys(e.getExtras()).length > 0 && (r.extras = e.getExtras()), r;
    }
    createAccessorDef(e) {
      const r = this.createPropertyDef(e);
      return r.type = e.getType(), r.componentType = e.getComponentType(), r.count = e.getCount(), this._doc.getGraph().listParentEdges(e).some((a) => a.getName() === "attributes" && a.getAttributes().key === "POSITION" || a.getName() === "input") && (r.max = e.getMax([]).map(Math.fround), r.min = e.getMin([]).map(Math.fround)), e.getNormalized() && (r.normalized = e.getNormalized()), r;
    }
    createImageData(e, r, n) {
      if (this.options.format === wr.GLB) this.imageBufferViews.push(r), e.bufferView = this.jsonDoc.json.bufferViews.length, this.jsonDoc.json.bufferViews.push({
        buffer: 0,
        byteOffset: -1,
        byteLength: r.byteLength
      });
      else {
        const a = un.mimeTypeToExtension(n.getMimeType());
        e.uri = this.imageURIGenerator.createURI(n, a), this.assignResourceURI(e.uri, r, false);
      }
    }
    assignResourceURI(e, r, n) {
      const a = this.jsonDoc.resources;
      if (!(e in a)) {
        a[e] = r;
        return;
      }
      if (r === a[e]) {
        this.logger.warn(`Duplicate resource URI, "${e}".`);
        return;
      }
      const i = `Resource URI "${e}" already assigned to different data.`;
      if (!n) {
        this.logger.warn(i);
        return;
      }
      throw new Error(i);
    }
    getAccessorUsage(e) {
      const r = this._accessorUsageMap.get(e);
      if (r) return r;
      if (e.getSparse()) return Ht.SPARSE;
      for (const n of this._doc.getGraph().listParentEdges(e)) {
        const { usage: a } = n.getAttributes();
        if (a) return a;
        n.getParent().propertyType !== be.ROOT && this.logger.warn(`Missing attribute ".usage" on edge, "${n.getName()}".`);
      }
      return Ht.OTHER;
    }
    addAccessorToUsageGroup(e, r) {
      const n = this._accessorUsageMap.get(e);
      if (n && n !== r) throw new Error(`Accessor with usage "${n}" cannot be reused as "${r}".`);
      return this._accessorUsageMap.set(e, r), this;
    }
  }
  ln.BufferViewTarget = ba;
  ln.BufferViewUsage = Ht;
  ln.USAGE_TO_TARGET = {
    [Ht.ARRAY_BUFFER]: ba.ARRAY_BUFFER,
    [Ht.ELEMENT_ARRAY_BUFFER]: ba.ELEMENT_ARRAY_BUFFER
  };
  class yl {
    constructor(e, r) {
      this.multiple = void 0, this.basename = void 0, this.counter = {}, this.multiple = e, this.basename = r;
    }
    createURI(e, r) {
      if (e.getURI()) return e.getURI();
      if (this.multiple) {
        const n = this.basename(e);
        return this.counter[n] = this.counter[n] || 1, `${n}_${this.counter[n]++}.${r}`;
      } else return `${this.basename(e)}.${r}`;
    }
  }
  function zg(t, e) {
    const r = t.getGraph().listParentEdges(e).find((n) => n.getParent() !== t.getRoot());
    return r ? r.getName().replace(/texture$/i, "") : "";
  }
  const { BufferViewUsage: ja } = ln, { UNSIGNED_INT: Lg, UNSIGNED_SHORT: Fg, UNSIGNED_BYTE: Vg } = Ae.ComponentType, $g = /* @__PURE__ */ new Set([
    be.ACCESSOR,
    be.BUFFER,
    be.MATERIAL,
    be.MESH
  ]);
  class Ug {
    static write(e, r) {
      const n = e.getGraph(), a = e.getRoot(), i = {
        asset: Nt({
          generator: `glTF-Transform ${md}`
        }, a.getAsset()),
        extras: Nt({}, a.getExtras())
      }, s = {
        json: i,
        resources: {}
      }, o = new ln(e, s, r), u = r.logger || Xt.DEFAULT_INSTANCE, l = new Set(r.extensions.map((g) => g.EXTENSION_NAME)), c = e.getRoot().listExtensionsUsed().filter((g) => l.has(g.extensionName)).sort((g, b) => g.extensionName > b.extensionName ? 1 : -1), f = e.getRoot().listExtensionsRequired().filter((g) => l.has(g.extensionName)).sort((g, b) => g.extensionName > b.extensionName ? 1 : -1);
      c.length < e.getRoot().listExtensionsUsed().length && u.warn("Some extensions were not registered for I/O, and will not be written.");
      for (const g of c) {
        const b = g.prewriteTypes.filter((m) => !$g.has(m));
        b.length && u.warn(`Prewrite hooks for some types (${b.join()}), requested by extension ${g.extensionName}, are unsupported. Please file an issue or a PR.`);
        for (const m of g.writeDependencies) g.install(m, r.dependencies[m]);
      }
      function d(g, b, m, x) {
        const E = [];
        let S = 0;
        for (const C of g) {
          const R = o.createAccessorDef(C);
          R.bufferView = i.bufferViews.length;
          const A = C.getArray(), P = Le.pad(Le.toView(A));
          R.byteOffset = S, S += P.byteLength, E.push(P), o.accessorIndexMap.set(C, i.accessors.length), i.accessors.push(R);
        }
        const w = Le.concat(E), T = {
          buffer: b,
          byteOffset: m,
          byteLength: w.byteLength
        };
        return x && (T.target = x), i.bufferViews.push(T), {
          buffers: E,
          byteLength: S
        };
      }
      function v(g, b, m) {
        const x = g[0].getCount();
        let E = 0;
        for (const R of g) {
          const A = o.createAccessorDef(R);
          A.bufferView = i.bufferViews.length, A.byteOffset = E;
          const P = R.getElementSize(), k = R.getComponentSize();
          E += Le.padNumber(P * k), o.accessorIndexMap.set(R, i.accessors.length), i.accessors.push(A);
        }
        const S = x * E, w = new ArrayBuffer(S), T = new DataView(w);
        for (let R = 0; R < x; R++) {
          let A = 0;
          for (const P of g) {
            const k = P.getElementSize(), I = P.getComponentSize(), M = P.getComponentType(), D = P.getArray();
            for (let B = 0; B < k; B++) {
              const O = R * E + A + B * I, z = D[R * k + B];
              switch (M) {
                case Ae.ComponentType.FLOAT:
                  T.setFloat32(O, z, true);
                  break;
                case Ae.ComponentType.BYTE:
                  T.setInt8(O, z);
                  break;
                case Ae.ComponentType.SHORT:
                  T.setInt16(O, z, true);
                  break;
                case Ae.ComponentType.UNSIGNED_BYTE:
                  T.setUint8(O, z);
                  break;
                case Ae.ComponentType.UNSIGNED_SHORT:
                  T.setUint16(O, z, true);
                  break;
                case Ae.ComponentType.UNSIGNED_INT:
                  T.setUint32(O, z, true);
                  break;
                default:
                  throw new Error("Unexpected component type: " + M);
              }
            }
            A += Le.padNumber(k * I);
          }
        }
        const C = {
          buffer: b,
          byteOffset: m,
          byteLength: S,
          byteStride: E,
          target: ln.BufferViewTarget.ARRAY_BUFFER
        };
        return i.bufferViews.push(C), {
          byteLength: S,
          buffers: [
            new Uint8Array(w)
          ]
        };
      }
      function h(g, b, m) {
        const x = [];
        let E = 0;
        const S = /* @__PURE__ */ new Map();
        let w = -1 / 0, T = false;
        for (const M of g) {
          const D = o.createAccessorDef(M);
          i.accessors.push(D), o.accessorIndexMap.set(M, i.accessors.length - 1);
          const B = [], O = [], z = [], U = new Array(M.getElementSize()).fill(0);
          for (let Y = 0, K = M.getCount(); Y < K; Y++) if (M.getElement(Y, z), !nt.eq(z, U, 0)) {
            w = Math.max(Y, w), B.push(Y);
            for (let Q = 0; Q < z.length; Q++) O.push(z[Q]);
          }
          const N = B.length, L = {
            accessorDef: D,
            count: N
          };
          if (S.set(M, L), N === 0) continue;
          N > M.getCount() / 2 && (T = true);
          const H = Wi[M.getComponentType()];
          L.indices = B, L.values = new H(O);
        }
        if (!Number.isFinite(w)) return {
          buffers: x,
          byteLength: E
        };
        T && u.warn("Some sparse accessors have >50% non-zero elements, which may increase file size.");
        const C = w < 255 ? Uint8Array : w < 65535 ? Uint16Array : Uint32Array, R = w < 255 ? Vg : w < 65535 ? Fg : Lg, A = {
          buffer: b,
          byteOffset: m + E,
          byteLength: 0
        };
        for (const M of g) {
          const D = S.get(M);
          if (D.count === 0) continue;
          D.indicesByteOffset = A.byteLength;
          const B = Le.pad(Le.toView(new C(D.indices)));
          x.push(B), E += B.byteLength, A.byteLength += B.byteLength;
        }
        i.bufferViews.push(A);
        const P = i.bufferViews.length - 1, k = {
          buffer: b,
          byteOffset: m + E,
          byteLength: 0
        };
        for (const M of g) {
          const D = S.get(M);
          if (D.count === 0) continue;
          D.valuesByteOffset = k.byteLength;
          const B = Le.pad(Le.toView(D.values));
          x.push(B), E += B.byteLength, k.byteLength += B.byteLength;
        }
        i.bufferViews.push(k);
        const I = i.bufferViews.length - 1;
        for (const M of g) {
          const D = S.get(M);
          D.count !== 0 && (D.accessorDef.sparse = {
            count: D.count,
            indices: {
              bufferView: P,
              byteOffset: D.indicesByteOffset,
              componentType: R
            },
            values: {
              bufferView: I,
              byteOffset: D.valuesByteOffset
            }
          });
        }
        return {
          buffers: x,
          byteLength: E
        };
      }
      if (i.accessors = [], i.bufferViews = [], i.samplers = [], i.textures = [], i.images = a.listTextures().map((g, b) => {
        const m = o.createPropertyDef(g);
        g.getMimeType() && (m.mimeType = g.getMimeType());
        const x = g.getImage();
        return x && o.createImageData(m, x, g), o.imageIndexMap.set(g, b), m;
      }), c.filter((g) => g.prewriteTypes.includes(be.ACCESSOR)).forEach((g) => g.prewrite(o, be.ACCESSOR)), a.listAccessors().forEach((g) => {
        const b = o.accessorUsageGroupedByParent, m = o.accessorParents;
        if (o.accessorIndexMap.has(g)) return;
        const x = o.getAccessorUsage(g);
        if (o.addAccessorToUsageGroup(g, x), b.has(x)) {
          const E = n.listParents(g).find((S) => S.propertyType !== be.ROOT);
          m.set(g, E);
        }
      }), c.filter((g) => g.prewriteTypes.includes(be.BUFFER)).forEach((g) => g.prewrite(o, be.BUFFER)), (a.listAccessors().length > 0 || o.otherBufferViews.size > 0 || a.listTextures().length > 0 && r.format === wr.GLB) && a.listBuffers().length === 0) throw new Error("Buffer required for Document resources, but none was found.");
      i.buffers = [], a.listBuffers().forEach((g, b) => {
        const m = o.createPropertyDef(g), x = o.accessorUsageGroupedByParent, E = g.listParents().filter((k) => k instanceof Ae), S = new Set(E.map((k) => o.accessorParents.get(k))), w = new Map(Array.from(S).map((k, I) => [
          k,
          I
        ])), T = {};
        for (const k of E) {
          var C;
          if (o.accessorIndexMap.has(k)) continue;
          const I = o.getAccessorUsage(k);
          let M = I;
          if (x.has(I)) {
            const D = o.accessorParents.get(k);
            M += `:${w.get(D)}`;
          }
          T[C = M] || (T[C] = {
            usage: I,
            accessors: []
          }), T[M].accessors.push(k);
        }
        const R = [], A = i.buffers.length;
        let P = 0;
        for (const { usage: k, accessors: I } of Object.values(T)) if (k === ja.ARRAY_BUFFER && r.vertexLayout === Ri.INTERLEAVED) {
          const M = v(I, A, P);
          P += M.byteLength;
          for (const D of M.buffers) R.push(D);
        } else if (k === ja.ARRAY_BUFFER) for (const M of I) {
          const D = v([
            M
          ], A, P);
          P += D.byteLength;
          for (const B of D.buffers) R.push(B);
        }
        else if (k === ja.SPARSE) {
          const M = h(I, A, P);
          P += M.byteLength;
          for (const D of M.buffers) R.push(D);
        } else if (k === ja.ELEMENT_ARRAY_BUFFER) {
          const M = ln.BufferViewTarget.ELEMENT_ARRAY_BUFFER, D = d(I, A, P, M);
          P += D.byteLength;
          for (const B of D.buffers) R.push(B);
        } else {
          const M = d(I, A, P);
          P += M.byteLength;
          for (const D of M.buffers) R.push(D);
        }
        if (o.imageBufferViews.length && b === 0) {
          for (let k = 0; k < o.imageBufferViews.length; k++) if (i.bufferViews[i.images[k].bufferView].byteOffset = P, P += o.imageBufferViews[k].byteLength, R.push(o.imageBufferViews[k]), P % 8) {
            const I = 8 - P % 8;
            P += I, R.push(new Uint8Array(I));
          }
        }
        if (o.otherBufferViews.has(g)) for (const k of o.otherBufferViews.get(g)) i.bufferViews.push({
          buffer: A,
          byteOffset: P,
          byteLength: k.byteLength
        }), o.otherBufferViewsIndexMap.set(k, i.bufferViews.length - 1), P += k.byteLength, R.push(k);
        if (P) {
          let k;
          r.format === wr.GLB ? k = Ci : (k = o.bufferURIGenerator.createURI(g, "bin"), m.uri = k), m.byteLength = P, o.assignResourceURI(k, Le.concat(R), true);
        }
        i.buffers.push(m), o.bufferIndexMap.set(g, b);
      }), a.listAccessors().find((g) => !g.getBuffer()) && u.warn("Skipped writing one or more Accessors: no Buffer assigned."), c.filter((g) => g.prewriteTypes.includes(be.MATERIAL)).forEach((g) => g.prewrite(o, be.MATERIAL)), i.materials = a.listMaterials().map((g, b) => {
        const m = o.createPropertyDef(g);
        if (g.getAlphaMode() !== fn.AlphaMode.OPAQUE && (m.alphaMode = g.getAlphaMode()), g.getAlphaMode() === fn.AlphaMode.MASK && (m.alphaCutoff = g.getAlphaCutoff()), g.getDoubleSided() && (m.doubleSided = true), m.pbrMetallicRoughness = {}, nt.eq(g.getBaseColorFactor(), [
          1,
          1,
          1,
          1
        ]) || (m.pbrMetallicRoughness.baseColorFactor = g.getBaseColorFactor()), nt.eq(g.getEmissiveFactor(), [
          0,
          0,
          0
        ]) || (m.emissiveFactor = g.getEmissiveFactor()), g.getRoughnessFactor() !== 1 && (m.pbrMetallicRoughness.roughnessFactor = g.getRoughnessFactor()), g.getMetallicFactor() !== 1 && (m.pbrMetallicRoughness.metallicFactor = g.getMetallicFactor()), g.getBaseColorTexture()) {
          const x = g.getBaseColorTexture(), E = g.getBaseColorTextureInfo();
          m.pbrMetallicRoughness.baseColorTexture = o.createTextureInfoDef(x, E);
        }
        if (g.getEmissiveTexture()) {
          const x = g.getEmissiveTexture(), E = g.getEmissiveTextureInfo();
          m.emissiveTexture = o.createTextureInfoDef(x, E);
        }
        if (g.getNormalTexture()) {
          const x = g.getNormalTexture(), E = g.getNormalTextureInfo(), S = o.createTextureInfoDef(x, E);
          g.getNormalScale() !== 1 && (S.scale = g.getNormalScale()), m.normalTexture = S;
        }
        if (g.getOcclusionTexture()) {
          const x = g.getOcclusionTexture(), E = g.getOcclusionTextureInfo(), S = o.createTextureInfoDef(x, E);
          g.getOcclusionStrength() !== 1 && (S.strength = g.getOcclusionStrength()), m.occlusionTexture = S;
        }
        if (g.getMetallicRoughnessTexture()) {
          const x = g.getMetallicRoughnessTexture(), E = g.getMetallicRoughnessTextureInfo();
          m.pbrMetallicRoughness.metallicRoughnessTexture = o.createTextureInfoDef(x, E);
        }
        return o.materialIndexMap.set(g, b), m;
      }), c.filter((g) => g.prewriteTypes.includes(be.MESH)).forEach((g) => g.prewrite(o, be.MESH)), i.meshes = a.listMeshes().map((g, b) => {
        const m = o.createPropertyDef(g);
        let x = null;
        return m.primitives = g.listPrimitives().map((E) => {
          const S = {
            attributes: {}
          };
          S.mode = E.getMode();
          const w = E.getMaterial();
          w && (S.material = o.materialIndexMap.get(w)), Object.keys(E.getExtras()).length && (S.extras = E.getExtras());
          const T = E.getIndices();
          T && (S.indices = o.accessorIndexMap.get(T));
          for (const C of E.listSemantics()) S.attributes[C] = o.accessorIndexMap.get(E.getAttribute(C));
          for (const C of E.listTargets()) {
            const R = {};
            for (const A of C.listSemantics()) R[A] = o.accessorIndexMap.get(C.getAttribute(A));
            S.targets = S.targets || [], S.targets.push(R);
          }
          return E.listTargets().length && !x && (x = E.listTargets().map((C) => C.getName())), S;
        }), g.getWeights().length && (m.weights = g.getWeights()), x && (m.extras = m.extras || {}, m.extras.targetNames = x), o.meshIndexMap.set(g, b), m;
      }), i.cameras = a.listCameras().map((g, b) => {
        const m = o.createPropertyDef(g);
        if (m.type = g.getType(), m.type === mn.Type.PERSPECTIVE) {
          m.perspective = {
            znear: g.getZNear(),
            zfar: g.getZFar(),
            yfov: g.getYFov()
          };
          const x = g.getAspectRatio();
          x !== null && (m.perspective.aspectRatio = x);
        } else m.orthographic = {
          znear: g.getZNear(),
          zfar: g.getZFar(),
          xmag: g.getXMag(),
          ymag: g.getYMag()
        };
        return o.cameraIndexMap.set(g, b), m;
      }), i.nodes = a.listNodes().map((g, b) => {
        const m = o.createPropertyDef(g);
        return nt.eq(g.getTranslation(), [
          0,
          0,
          0
        ]) || (m.translation = g.getTranslation()), nt.eq(g.getRotation(), [
          0,
          0,
          0,
          1
        ]) || (m.rotation = g.getRotation()), nt.eq(g.getScale(), [
          1,
          1,
          1
        ]) || (m.scale = g.getScale()), g.getWeights().length && (m.weights = g.getWeights()), o.nodeIndexMap.set(g, b), m;
      }), i.skins = a.listSkins().map((g, b) => {
        const m = o.createPropertyDef(g), x = g.getInverseBindMatrices();
        x && (m.inverseBindMatrices = o.accessorIndexMap.get(x));
        const E = g.getSkeleton();
        return E && (m.skeleton = o.nodeIndexMap.get(E)), m.joints = g.listJoints().map((S) => o.nodeIndexMap.get(S)), o.skinIndexMap.set(g, b), m;
      }), a.listNodes().forEach((g, b) => {
        const m = i.nodes[b], x = g.getMesh();
        x && (m.mesh = o.meshIndexMap.get(x));
        const E = g.getCamera();
        E && (m.camera = o.cameraIndexMap.get(E));
        const S = g.getSkin();
        S && (m.skin = o.skinIndexMap.get(S)), g.listChildren().length > 0 && (m.children = g.listChildren().map((w) => o.nodeIndexMap.get(w)));
      }), i.animations = a.listAnimations().map((g, b) => {
        const m = o.createPropertyDef(g), x = /* @__PURE__ */ new Map();
        return m.samplers = g.listSamplers().map((E, S) => {
          const w = o.createPropertyDef(E);
          return w.input = o.accessorIndexMap.get(E.getInput()), w.output = o.accessorIndexMap.get(E.getOutput()), w.interpolation = E.getInterpolation(), x.set(E, S), w;
        }), m.channels = g.listChannels().map((E) => {
          const S = o.createPropertyDef(E);
          return S.sampler = x.get(E.getSampler()), S.target = {
            node: o.nodeIndexMap.get(E.getTargetNode()),
            path: E.getTargetPath()
          }, S;
        }), o.animationIndexMap.set(g, b), m;
      }), i.scenes = a.listScenes().map((g, b) => {
        const m = o.createPropertyDef(g);
        return m.nodes = g.listChildren().map((x) => o.nodeIndexMap.get(x)), o.sceneIndexMap.set(g, b), m;
      });
      const p = a.getDefaultScene();
      return p && (i.scene = a.listScenes().indexOf(p)), i.extensionsUsed = c.map((g) => g.extensionName), i.extensionsRequired = f.map((g) => g.extensionName), c.forEach((g) => g.write(o)), qg(i), s;
    }
  }
  function qg(t) {
    const e = [];
    for (const r in t) {
      const n = t[r];
      (Array.isArray(n) && n.length === 0 || n === null || n === "" || n && typeof n == "object" && Object.keys(n).length === 0) && e.push(r);
    }
    for (const r of e) delete t[r];
  }
  var ki;
  (function(t) {
    t[t.JSON = 1313821514] = "JSON", t[t.BIN = 5130562] = "BIN";
  })(ki || (ki = {}));
  class Zg {
    constructor() {
      this._logger = Xt.DEFAULT_INSTANCE, this._extensions = /* @__PURE__ */ new Set(), this._dependencies = {}, this._vertexLayout = Ri.INTERLEAVED, this._strictResources = true, this.lastReadBytes = 0, this.lastWriteBytes = 0;
    }
    setLogger(e) {
      return this._logger = e, this;
    }
    registerExtensions(e) {
      for (const r of e) this._extensions.add(r), r.register();
      return this;
    }
    registerDependencies(e) {
      return Object.assign(this._dependencies, e), this;
    }
    setVertexLayout(e) {
      return this._vertexLayout = e, this;
    }
    setStrictResources(e) {
      return this._strictResources = e, this;
    }
    async read(e) {
      return await this.readJSON(await this.readAsJSON(e));
    }
    async readAsJSON(e) {
      const r = await this.readURI(e, "view");
      this.lastReadBytes = r.byteLength;
      const n = bl(r) ? this._binaryToJSON(r) : {
        json: JSON.parse(Le.decodeText(r)),
        resources: {}
      };
      return await this._readResourcesExternal(n, this.dirname(e)), this._readResourcesInternal(n), n;
    }
    async readJSON(e) {
      return e = this._copyJSON(e), this._readResourcesInternal(e), Dg.read(e, {
        extensions: Array.from(this._extensions),
        dependencies: this._dependencies,
        logger: this._logger
      });
    }
    async binaryToJSON(e) {
      const r = this._binaryToJSON(Le.assertView(e));
      this._readResourcesInternal(r);
      const n = r.json;
      if (n.buffers && n.buffers.some((a) => Gg(r, a))) throw new Error("Cannot resolve external buffers with binaryToJSON().");
      if (n.images && n.images.some((a) => Wg(r, a))) throw new Error("Cannot resolve external images with binaryToJSON().");
      return r;
    }
    async readBinary(e) {
      return this.readJSON(await this.binaryToJSON(Le.assertView(e)));
    }
    async writeJSON(e, r = {}) {
      if (r.format === wr.GLB && e.getRoot().listBuffers().length > 1) throw new Error("GLB must have 0\u20131 buffers.");
      return Ug.write(e, {
        format: r.format || wr.GLTF,
        basename: r.basename || "",
        logger: this._logger,
        vertexLayout: this._vertexLayout,
        dependencies: Nt({}, this._dependencies),
        extensions: Array.from(this._extensions)
      });
    }
    async writeBinary(e) {
      const { json: r, resources: n } = await this.writeJSON(e, {
        format: wr.GLB
      }), a = new Uint32Array([
        1179937895,
        2,
        12
      ]), i = JSON.stringify(r), s = Le.pad(Le.encodeText(i), 32), o = Le.toView(new Uint32Array([
        s.byteLength,
        1313821514
      ])), u = Le.concat([
        o,
        s
      ]);
      a[a.length - 1] += u.byteLength;
      const l = Object.values(n)[0];
      if (!l || !l.byteLength) return Le.concat([
        Le.toView(a),
        u
      ]);
      const c = Le.pad(l, 0), f = Le.toView(new Uint32Array([
        c.byteLength,
        5130562
      ])), d = Le.concat([
        f,
        c
      ]);
      return a[a.length - 1] += d.byteLength, Le.concat([
        Le.toView(a),
        u,
        d
      ]);
    }
    async _readResourcesExternal(e, r) {
      var n = this;
      const a = e.json.images || [], i = e.json.buffers || [], s = [
        ...a,
        ...i
      ].map(async function(o) {
        const u = o.uri;
        if (!u || u.match(/data:/)) return Promise.resolve();
        try {
          e.resources[u] = await n.readURI(n.resolve(r, u), "view"), n.lastReadBytes += e.resources[u].byteLength;
        } catch (l) {
          if (!n._strictResources && a.includes(o)) n._logger.warn(`Failed to load image URI, "${u}". ${l}`), e.resources[u] = null;
          else throw l;
        }
      });
      await Promise.all(s);
    }
    _readResourcesInternal(e) {
      function r(i) {
        if (i.uri) {
          if (i.uri in e.resources) {
            Le.assertView(e.resources[i.uri]);
            return;
          }
          if (i.uri.match(/data:/)) {
            const s = `__${Cg()}.${cn.extension(i.uri)}`;
            e.resources[s] = Le.createBufferFromDataURI(i.uri), i.uri = s;
          }
        }
      }
      (e.json.images || []).forEach((i) => {
        if (i.bufferView === void 0 && i.uri === void 0) throw new Error("Missing resource URI or buffer view.");
        r(i);
      }), (e.json.buffers || []).forEach(r);
    }
    _copyJSON(e) {
      const { images: r, buffers: n } = e.json;
      return e = {
        json: Nt({}, e.json),
        resources: Nt({}, e.resources)
      }, r && (e.json.images = r.map((a) => Nt({}, a))), n && (e.json.buffers = n.map((a) => Nt({}, a))), e;
    }
    _binaryToJSON(e) {
      if (!bl(e)) throw new Error("Invalid glTF 2.0 binary.");
      const r = new Uint32Array(e.buffer, e.byteOffset + 12, 2);
      if (r[1] !== ki.JSON) throw new Error("Missing required GLB JSON chunk.");
      const n = 20, a = r[0], i = Le.decodeText(Le.toView(e, n, a)), s = JSON.parse(i), o = n + a;
      if (e.byteLength <= o) return {
        json: s,
        resources: {}
      };
      const u = new Uint32Array(e.buffer, e.byteOffset + o, 2);
      if (u[1] !== ki.BIN) return {
        json: s,
        resources: {}
      };
      const l = u[0], c = Le.toView(e, o + 8, l);
      return {
        json: s,
        resources: {
          [Ci]: c
        }
      };
    }
  }
  function Gg(t, e) {
    return e.uri !== void 0 && !(e.uri in t.resources);
  }
  function Wg(t, e) {
    return e.uri !== void 0 && !(e.uri in t.resources) && e.bufferView === void 0;
  }
  function bl(t) {
    if (t.byteLength < 3 * Uint32Array.BYTES_PER_ELEMENT) return false;
    const e = new Uint32Array(t.buffer, t.byteOffset, 3);
    return e[0] === 1179937895 && e[1] === 2;
  }
  LC = class extends Zg {
    constructor(e = null, r = rr.DEFAULT_INIT) {
      super(), this._fetch = void 0, this._fetchConfig = void 0, this._init = void 0, this._fetchEnabled = false, this._fetch = e, this._fetchConfig = r, this._init = this.init();
    }
    async init() {
      return this._init ? this._init : Promise.all([
        dl(() => import("./__vite-browser-external-D7Ct-6yo.js").then((e) => e._), [], import.meta.url),
        dl(() => import("./__vite-browser-external-D7Ct-6yo.js").then((e) => e._), [], import.meta.url)
      ]).then(([e, r]) => {
        this._fs = e.promises, this._path = r;
      });
    }
    setAllowNetwork(e) {
      if (e && !this._fetch) throw new Error("NodeIO requires a Fetch API implementation for HTTP requests.");
      return this._fetchEnabled = e, this;
    }
    async readURI(e, r) {
      if (await this.init(), rr.isAbsoluteURL(e)) {
        if (!this._fetchEnabled || !this._fetch) throw new Error("Network request blocked. Allow HTTP requests explicitly, if needed.");
        const n = await this._fetch(e, this._fetchConfig);
        switch (r) {
          case "view":
            return new Uint8Array(await n.arrayBuffer());
          case "text":
            return n.text();
        }
      } else switch (r) {
        case "view":
          return this._fs.readFile(e);
        case "text":
          return this._fs.readFile(e, "utf8");
      }
    }
    resolve(e, r) {
      return rr.isAbsoluteURL(e) || rr.isAbsoluteURL(r) ? rr.resolve(e, r) : this._path.resolve(e, decodeURIComponent(r));
    }
    dirname(e) {
      return rr.isAbsoluteURL(e) ? rr.dirname(e) : this._path.dirname(e);
    }
    async write(e, r) {
      await this.init(), await (!!e.match(/\.glb$/) ? this._writeGLB(e, r) : this._writeGLTF(e, r));
    }
    async _writeGLTF(e, r) {
      var n = this;
      this.lastWriteBytes = 0;
      const { json: a, resources: i } = await this.writeJSON(r, {
        format: wr.GLTF,
        basename: cn.basename(e)
      }), { _fs: s, _path: o } = this, u = o.dirname(e), l = JSON.stringify(a, null, 2);
      await s.writeFile(e, l), this.lastWriteBytes += l.length;
      for (const c of Hg(Object.keys(i), 10)) await Promise.all(c.map(async function(f) {
        if (rr.isAbsoluteURL(f)) {
          if (rr.extension(f) === "bin") throw new Error(`Cannot write buffer to path "${f}".`);
          return;
        }
        const d = o.join(u, decodeURIComponent(f));
        await s.mkdir(o.dirname(d), {
          recursive: true
        }), await s.writeFile(d, i[f]), n.lastWriteBytes += i[f].byteLength;
      }));
    }
    async _writeGLB(e, r) {
      const n = await this.writeBinary(r);
      await this._fs.writeFile(e, n), this.lastWriteBytes = n.byteLength;
    }
  };
  function Hg(t, e) {
    const r = [];
    for (let n = 0, a = t.length; n < a; n += e) {
      const i = [];
      for (let s = 0; s < e && n + s < a; s++) i.push(t[n + s]);
      r.push(i);
    }
    return r;
  }
  function iu(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  function Kg(t) {
    if (Array.isArray(t)) return t;
  }
  function Yg(t) {
    if (Array.isArray(t)) return iu(t);
  }
  function Zr(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function jg(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, Pd(n.key), n);
    }
  }
  function Gr(t, e, r) {
    return e && jg(t.prototype, e), Object.defineProperty(t, "prototype", {
      writable: false
    }), t;
  }
  function Zt(t, e) {
    var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (!r) {
      if (Array.isArray(t) || (r = Iu(t)) || e) {
        r && (t = r);
        var n = 0, a = function() {
        };
        return {
          s: a,
          n: function() {
            return n >= t.length ? {
              done: true
            } : {
              done: false,
              value: t[n++]
            };
          },
          e: function(u) {
            throw u;
          },
          f: a
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var i, s = true, o = false;
    return {
      s: function() {
        r = r.call(t);
      },
      n: function() {
        var u = r.next();
        return s = u.done, u;
      },
      e: function(u) {
        o = true, i = u;
      },
      f: function() {
        try {
          s || r.return == null || r.return();
        } finally {
          if (o) throw i;
        }
      }
    };
  }
  function kd(t, e, r) {
    return (e = Pd(e)) in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : t[e] = r, t;
  }
  function Xg(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
  }
  function Jg(t, e) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
      var n, a, i, s, o = [], u = true, l = false;
      try {
        if (i = (r = r.call(t)).next, e === 0) {
          if (Object(r) !== r) return;
          u = false;
        } else for (; !(u = (n = i.call(r)).done) && (o.push(n.value), o.length !== e); u = true) ;
      } catch (c) {
        l = true, a = c;
      } finally {
        try {
          if (!u && r.return != null && (s = r.return(), Object(s) !== s)) return;
        } finally {
          if (l) throw a;
        }
      }
      return o;
    }
  }
  function Qg() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ep() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ft(t, e) {
    return Kg(t) || Jg(t, e) || Iu(t, e) || Qg();
  }
  function Pi(t) {
    return Yg(t) || Xg(t) || Iu(t) || ep();
  }
  function tp(t, e) {
    if (typeof t != "object" || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(t, e);
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }
  function Pd(t) {
    var e = tp(t, "string");
    return typeof e == "symbol" ? e : e + "";
  }
  function mt(t) {
    "@babel/helpers - typeof";
    return mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, mt(t);
  }
  function Iu(t, e) {
    if (t) {
      if (typeof t == "string") return iu(t, e);
      var r = {}.toString.call(t).slice(8, -1);
      return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? iu(t, e) : void 0;
    }
  }
  var gt = typeof window > "u" ? null : window, wl = gt ? gt.navigator : null;
  gt && gt.document;
  var rp = mt(""), _d = mt({}), np = mt(function() {
  }), ap = typeof HTMLElement > "u" ? "undefined" : mt(HTMLElement), Ma = function(e) {
    return e && e.instanceString && at(e.instanceString) ? e.instanceString() : null;
  }, me = function(e) {
    return e != null && mt(e) == rp;
  }, at = function(e) {
    return e != null && mt(e) === np;
  }, Ke = function(e) {
    return !Wt(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
  }, ze = function(e) {
    return e != null && mt(e) === _d && !Ke(e) && e.constructor === Object;
  }, ip = function(e) {
    return e != null && mt(e) === _d;
  }, ae = function(e) {
    return e != null && mt(e) === mt(1) && !isNaN(e);
  }, sp = function(e) {
    return ae(e) && Math.floor(e) === e;
  }, _i = function(e) {
    if (ap !== "undefined") return e != null && e instanceof HTMLElement;
  }, Wt = function(e) {
    return Da(e) || Id(e);
  }, Da = function(e) {
    return Ma(e) === "collection" && e._private.single;
  }, Id = function(e) {
    return Ma(e) === "collection" && !e._private.single;
  }, Bu = function(e) {
    return Ma(e) === "core";
  }, Bd = function(e) {
    return Ma(e) === "stylesheet";
  }, op = function(e) {
    return Ma(e) === "event";
  }, Nr = function(e) {
    return e == null ? true : !!(e === "" || e.match(/^\s+$/));
  }, up = function(e) {
    return typeof HTMLElement > "u" ? false : e instanceof HTMLElement;
  }, lp = function(e) {
    return ze(e) && ae(e.x1) && ae(e.x2) && ae(e.y1) && ae(e.y2);
  }, cp = function(e) {
    return ip(e) && at(e.then);
  }, fp = function() {
    return wl && wl.userAgent.match(/msie|trident|edge/i);
  }, Un = function(e, r) {
    r || (r = function() {
      if (arguments.length === 1) return arguments[0];
      if (arguments.length === 0) return "undefined";
      for (var i = [], s = 0; s < arguments.length; s++) i.push(arguments[s]);
      return i.join("$");
    });
    var n = function() {
      var i = this, s = arguments, o, u = r.apply(i, s), l = n.cache;
      return (o = l[u]) || (o = l[u] = e.apply(i, s)), o;
    };
    return n.cache = {}, n;
  }, Mu = Un(function(t) {
    return t.replace(/([A-Z])/g, function(e) {
      return "-" + e.toLowerCase();
    });
  }), Yi = Un(function(t) {
    return t.replace(/(-\w)/g, function(e) {
      return e[1].toUpperCase();
    });
  }), Md = Un(function(t, e) {
    return t + e[0].toUpperCase() + e.substring(1);
  }, function(t, e) {
    return t + "$" + e;
  }), xl = function(e) {
    return Nr(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
  }, _r = function(e, r) {
    return e.slice(-1 * r.length) === r;
  }, pt = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", dp = "rgb[a]?\\((" + pt + "[%]?)\\s*,\\s*(" + pt + "[%]?)\\s*,\\s*(" + pt + "[%]?)(?:\\s*,\\s*(" + pt + "))?\\)", vp = "rgb[a]?\\((?:" + pt + "[%]?)\\s*,\\s*(?:" + pt + "[%]?)\\s*,\\s*(?:" + pt + "[%]?)(?:\\s*,\\s*(?:" + pt + "))?\\)", hp = "hsl[a]?\\((" + pt + ")\\s*,\\s*(" + pt + "[%])\\s*,\\s*(" + pt + "[%])(?:\\s*,\\s*(" + pt + "))?\\)", gp = "hsl[a]?\\((?:" + pt + ")\\s*,\\s*(?:" + pt + "[%])\\s*,\\s*(?:" + pt + "[%])(?:\\s*,\\s*(?:" + pt + "))?\\)", pp = "\\#[0-9a-fA-F]{3}", mp = "\\#[0-9a-fA-F]{6}", Dd = function(e, r) {
    return e < r ? -1 : e > r ? 1 : 0;
  }, yp = function(e, r) {
    return -1 * Dd(e, r);
  }, Ee = Object.assign != null ? Object.assign.bind(Object) : function(t) {
    for (var e = arguments, r = 1; r < e.length; r++) {
      var n = e[r];
      if (n != null) for (var a = Object.keys(n), i = 0; i < a.length; i++) {
        var s = a[i];
        t[s] = n[s];
      }
    }
    return t;
  }, bp = function(e) {
    if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
      var r = e.length === 4, n, a, i, s = 16;
      return r ? (n = parseInt(e[1] + e[1], s), a = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (n = parseInt(e[1] + e[2], s), a = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [
        n,
        a,
        i
      ];
    }
  }, wp = function(e) {
    var r, n, a, i, s, o, u, l;
    function c(h, y, p) {
      return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? h + (y - h) * 6 * p : p < 1 / 2 ? y : p < 2 / 3 ? h + (y - h) * (2 / 3 - p) * 6 : h;
    }
    var f = new RegExp("^" + hp + "$").exec(e);
    if (f) {
      if (n = parseInt(f[1]), n < 0 ? n = (360 - -1 * n % 360) % 360 : n > 360 && (n = n % 360), n /= 360, a = parseFloat(f[2]), a < 0 || a > 100 || (a = a / 100, i = parseFloat(f[3]), i < 0 || i > 100) || (i = i / 100, s = f[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1))) return;
      if (a === 0) o = u = l = Math.round(i * 255);
      else {
        var d = i < 0.5 ? i * (1 + a) : i + a - i * a, v = 2 * i - d;
        o = Math.round(255 * c(v, d, n + 1 / 3)), u = Math.round(255 * c(v, d, n)), l = Math.round(255 * c(v, d, n - 1 / 3));
      }
      r = [
        o,
        u,
        l,
        s
      ];
    }
    return r;
  }, xp = function(e) {
    var r, n = new RegExp("^" + dp + "$").exec(e);
    if (n) {
      r = [];
      for (var a = [], i = 1; i <= 3; i++) {
        var s = n[i];
        if (s[s.length - 1] === "%" && (a[i] = true), s = parseFloat(s), a[i] && (s = s / 100 * 255), s < 0 || s > 255) return;
        r.push(Math.floor(s));
      }
      var o = a[1] || a[2] || a[3], u = a[1] && a[2] && a[3];
      if (o && !u) return;
      var l = n[4];
      if (l !== void 0) {
        if (l = parseFloat(l), l < 0 || l > 1) return;
        r.push(l);
      }
    }
    return r;
  }, Ep = function(e) {
    return Tp[e.toLowerCase()];
  }, Od = function(e) {
    return (Ke(e) ? e : null) || Ep(e) || bp(e) || xp(e) || wp(e);
  }, Tp = {
    transparent: [
      0,
      0,
      0,
      0
    ],
    aliceblue: [
      240,
      248,
      255
    ],
    antiquewhite: [
      250,
      235,
      215
    ],
    aqua: [
      0,
      255,
      255
    ],
    aquamarine: [
      127,
      255,
      212
    ],
    azure: [
      240,
      255,
      255
    ],
    beige: [
      245,
      245,
      220
    ],
    bisque: [
      255,
      228,
      196
    ],
    black: [
      0,
      0,
      0
    ],
    blanchedalmond: [
      255,
      235,
      205
    ],
    blue: [
      0,
      0,
      255
    ],
    blueviolet: [
      138,
      43,
      226
    ],
    brown: [
      165,
      42,
      42
    ],
    burlywood: [
      222,
      184,
      135
    ],
    cadetblue: [
      95,
      158,
      160
    ],
    chartreuse: [
      127,
      255,
      0
    ],
    chocolate: [
      210,
      105,
      30
    ],
    coral: [
      255,
      127,
      80
    ],
    cornflowerblue: [
      100,
      149,
      237
    ],
    cornsilk: [
      255,
      248,
      220
    ],
    crimson: [
      220,
      20,
      60
    ],
    cyan: [
      0,
      255,
      255
    ],
    darkblue: [
      0,
      0,
      139
    ],
    darkcyan: [
      0,
      139,
      139
    ],
    darkgoldenrod: [
      184,
      134,
      11
    ],
    darkgray: [
      169,
      169,
      169
    ],
    darkgreen: [
      0,
      100,
      0
    ],
    darkgrey: [
      169,
      169,
      169
    ],
    darkkhaki: [
      189,
      183,
      107
    ],
    darkmagenta: [
      139,
      0,
      139
    ],
    darkolivegreen: [
      85,
      107,
      47
    ],
    darkorange: [
      255,
      140,
      0
    ],
    darkorchid: [
      153,
      50,
      204
    ],
    darkred: [
      139,
      0,
      0
    ],
    darksalmon: [
      233,
      150,
      122
    ],
    darkseagreen: [
      143,
      188,
      143
    ],
    darkslateblue: [
      72,
      61,
      139
    ],
    darkslategray: [
      47,
      79,
      79
    ],
    darkslategrey: [
      47,
      79,
      79
    ],
    darkturquoise: [
      0,
      206,
      209
    ],
    darkviolet: [
      148,
      0,
      211
    ],
    deeppink: [
      255,
      20,
      147
    ],
    deepskyblue: [
      0,
      191,
      255
    ],
    dimgray: [
      105,
      105,
      105
    ],
    dimgrey: [
      105,
      105,
      105
    ],
    dodgerblue: [
      30,
      144,
      255
    ],
    firebrick: [
      178,
      34,
      34
    ],
    floralwhite: [
      255,
      250,
      240
    ],
    forestgreen: [
      34,
      139,
      34
    ],
    fuchsia: [
      255,
      0,
      255
    ],
    gainsboro: [
      220,
      220,
      220
    ],
    ghostwhite: [
      248,
      248,
      255
    ],
    gold: [
      255,
      215,
      0
    ],
    goldenrod: [
      218,
      165,
      32
    ],
    gray: [
      128,
      128,
      128
    ],
    grey: [
      128,
      128,
      128
    ],
    green: [
      0,
      128,
      0
    ],
    greenyellow: [
      173,
      255,
      47
    ],
    honeydew: [
      240,
      255,
      240
    ],
    hotpink: [
      255,
      105,
      180
    ],
    indianred: [
      205,
      92,
      92
    ],
    indigo: [
      75,
      0,
      130
    ],
    ivory: [
      255,
      255,
      240
    ],
    khaki: [
      240,
      230,
      140
    ],
    lavender: [
      230,
      230,
      250
    ],
    lavenderblush: [
      255,
      240,
      245
    ],
    lawngreen: [
      124,
      252,
      0
    ],
    lemonchiffon: [
      255,
      250,
      205
    ],
    lightblue: [
      173,
      216,
      230
    ],
    lightcoral: [
      240,
      128,
      128
    ],
    lightcyan: [
      224,
      255,
      255
    ],
    lightgoldenrodyellow: [
      250,
      250,
      210
    ],
    lightgray: [
      211,
      211,
      211
    ],
    lightgreen: [
      144,
      238,
      144
    ],
    lightgrey: [
      211,
      211,
      211
    ],
    lightpink: [
      255,
      182,
      193
    ],
    lightsalmon: [
      255,
      160,
      122
    ],
    lightseagreen: [
      32,
      178,
      170
    ],
    lightskyblue: [
      135,
      206,
      250
    ],
    lightslategray: [
      119,
      136,
      153
    ],
    lightslategrey: [
      119,
      136,
      153
    ],
    lightsteelblue: [
      176,
      196,
      222
    ],
    lightyellow: [
      255,
      255,
      224
    ],
    lime: [
      0,
      255,
      0
    ],
    limegreen: [
      50,
      205,
      50
    ],
    linen: [
      250,
      240,
      230
    ],
    magenta: [
      255,
      0,
      255
    ],
    maroon: [
      128,
      0,
      0
    ],
    mediumaquamarine: [
      102,
      205,
      170
    ],
    mediumblue: [
      0,
      0,
      205
    ],
    mediumorchid: [
      186,
      85,
      211
    ],
    mediumpurple: [
      147,
      112,
      219
    ],
    mediumseagreen: [
      60,
      179,
      113
    ],
    mediumslateblue: [
      123,
      104,
      238
    ],
    mediumspringgreen: [
      0,
      250,
      154
    ],
    mediumturquoise: [
      72,
      209,
      204
    ],
    mediumvioletred: [
      199,
      21,
      133
    ],
    midnightblue: [
      25,
      25,
      112
    ],
    mintcream: [
      245,
      255,
      250
    ],
    mistyrose: [
      255,
      228,
      225
    ],
    moccasin: [
      255,
      228,
      181
    ],
    navajowhite: [
      255,
      222,
      173
    ],
    navy: [
      0,
      0,
      128
    ],
    oldlace: [
      253,
      245,
      230
    ],
    olive: [
      128,
      128,
      0
    ],
    olivedrab: [
      107,
      142,
      35
    ],
    orange: [
      255,
      165,
      0
    ],
    orangered: [
      255,
      69,
      0
    ],
    orchid: [
      218,
      112,
      214
    ],
    palegoldenrod: [
      238,
      232,
      170
    ],
    palegreen: [
      152,
      251,
      152
    ],
    paleturquoise: [
      175,
      238,
      238
    ],
    palevioletred: [
      219,
      112,
      147
    ],
    papayawhip: [
      255,
      239,
      213
    ],
    peachpuff: [
      255,
      218,
      185
    ],
    peru: [
      205,
      133,
      63
    ],
    pink: [
      255,
      192,
      203
    ],
    plum: [
      221,
      160,
      221
    ],
    powderblue: [
      176,
      224,
      230
    ],
    purple: [
      128,
      0,
      128
    ],
    red: [
      255,
      0,
      0
    ],
    rosybrown: [
      188,
      143,
      143
    ],
    royalblue: [
      65,
      105,
      225
    ],
    saddlebrown: [
      139,
      69,
      19
    ],
    salmon: [
      250,
      128,
      114
    ],
    sandybrown: [
      244,
      164,
      96
    ],
    seagreen: [
      46,
      139,
      87
    ],
    seashell: [
      255,
      245,
      238
    ],
    sienna: [
      160,
      82,
      45
    ],
    silver: [
      192,
      192,
      192
    ],
    skyblue: [
      135,
      206,
      235
    ],
    slateblue: [
      106,
      90,
      205
    ],
    slategray: [
      112,
      128,
      144
    ],
    slategrey: [
      112,
      128,
      144
    ],
    snow: [
      255,
      250,
      250
    ],
    springgreen: [
      0,
      255,
      127
    ],
    steelblue: [
      70,
      130,
      180
    ],
    tan: [
      210,
      180,
      140
    ],
    teal: [
      0,
      128,
      128
    ],
    thistle: [
      216,
      191,
      216
    ],
    tomato: [
      255,
      99,
      71
    ],
    turquoise: [
      64,
      224,
      208
    ],
    violet: [
      238,
      130,
      238
    ],
    wheat: [
      245,
      222,
      179
    ],
    white: [
      255,
      255,
      255
    ],
    whitesmoke: [
      245,
      245,
      245
    ],
    yellow: [
      255,
      255,
      0
    ],
    yellowgreen: [
      154,
      205,
      50
    ]
  }, Nd = function(e) {
    for (var r = e.map, n = e.keys, a = n.length, i = 0; i < a; i++) {
      var s = n[i];
      if (ze(s)) throw Error("Tried to set map with object key");
      i < n.length - 1 ? (r[s] == null && (r[s] = {}), r = r[s]) : r[s] = e.value;
    }
  }, zd = function(e) {
    for (var r = e.map, n = e.keys, a = n.length, i = 0; i < a; i++) {
      var s = n[i];
      if (ze(s)) throw Error("Tried to get map with object key");
      if (r = r[s], r == null) return r;
    }
    return r;
  }, Xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Oa(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var ws, El;
  function Na() {
    if (El) return ws;
    El = 1;
    function t(e) {
      var r = typeof e;
      return e != null && (r == "object" || r == "function");
    }
    return ws = t, ws;
  }
  var xs, Tl;
  function Sp() {
    if (Tl) return xs;
    Tl = 1;
    var t = typeof Xa == "object" && Xa && Xa.Object === Object && Xa;
    return xs = t, xs;
  }
  var Es, Sl;
  function ji() {
    if (Sl) return Es;
    Sl = 1;
    var t = Sp(), e = typeof self == "object" && self && self.Object === Object && self, r = t || e || Function("return this")();
    return Es = r, Es;
  }
  var Ts, Cl;
  function Cp() {
    if (Cl) return Ts;
    Cl = 1;
    var t = ji(), e = function() {
      return t.Date.now();
    };
    return Ts = e, Ts;
  }
  var Ss, Rl;
  function Rp() {
    if (Rl) return Ss;
    Rl = 1;
    var t = /\s/;
    function e(r) {
      for (var n = r.length; n-- && t.test(r.charAt(n)); ) ;
      return n;
    }
    return Ss = e, Ss;
  }
  var Cs, Al;
  function Ap() {
    if (Al) return Cs;
    Al = 1;
    var t = Rp(), e = /^\s+/;
    function r(n) {
      return n && n.slice(0, t(n) + 1).replace(e, "");
    }
    return Cs = r, Cs;
  }
  var Rs, kl;
  function Du() {
    if (kl) return Rs;
    kl = 1;
    var t = ji(), e = t.Symbol;
    return Rs = e, Rs;
  }
  var As, Pl;
  function kp() {
    if (Pl) return As;
    Pl = 1;
    var t = Du(), e = Object.prototype, r = e.hasOwnProperty, n = e.toString, a = t ? t.toStringTag : void 0;
    function i(s) {
      var o = r.call(s, a), u = s[a];
      try {
        s[a] = void 0;
        var l = true;
      } catch {
      }
      var c = n.call(s);
      return l && (o ? s[a] = u : delete s[a]), c;
    }
    return As = i, As;
  }
  var ks, _l;
  function Pp() {
    if (_l) return ks;
    _l = 1;
    var t = Object.prototype, e = t.toString;
    function r(n) {
      return e.call(n);
    }
    return ks = r, ks;
  }
  var Ps, Il;
  function Ld() {
    if (Il) return Ps;
    Il = 1;
    var t = Du(), e = kp(), r = Pp(), n = "[object Null]", a = "[object Undefined]", i = t ? t.toStringTag : void 0;
    function s(o) {
      return o == null ? o === void 0 ? a : n : i && i in Object(o) ? e(o) : r(o);
    }
    return Ps = s, Ps;
  }
  var _s, Bl;
  function _p() {
    if (Bl) return _s;
    Bl = 1;
    function t(e) {
      return e != null && typeof e == "object";
    }
    return _s = t, _s;
  }
  var Is, Ml;
  function za() {
    if (Ml) return Is;
    Ml = 1;
    var t = Ld(), e = _p(), r = "[object Symbol]";
    function n(a) {
      return typeof a == "symbol" || e(a) && t(a) == r;
    }
    return Is = n, Is;
  }
  var Bs, Dl;
  function Ip() {
    if (Dl) return Bs;
    Dl = 1;
    var t = Ap(), e = Na(), r = za(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, o = parseInt;
    function u(l) {
      if (typeof l == "number") return l;
      if (r(l)) return n;
      if (e(l)) {
        var c = typeof l.valueOf == "function" ? l.valueOf() : l;
        l = e(c) ? c + "" : c;
      }
      if (typeof l != "string") return l === 0 ? l : +l;
      l = t(l);
      var f = i.test(l);
      return f || s.test(l) ? o(l.slice(2), f ? 2 : 8) : a.test(l) ? n : +l;
    }
    return Bs = u, Bs;
  }
  var Ms, Ol;
  function Bp() {
    if (Ol) return Ms;
    Ol = 1;
    var t = Na(), e = Cp(), r = Ip(), n = "Expected a function", a = Math.max, i = Math.min;
    function s(o, u, l) {
      var c, f, d, v, h, y, p = 0, g = false, b = false, m = true;
      if (typeof o != "function") throw new TypeError(n);
      u = r(u) || 0, t(l) && (g = !!l.leading, b = "maxWait" in l, d = b ? a(r(l.maxWait) || 0, u) : d, m = "trailing" in l ? !!l.trailing : m);
      function x(k) {
        var I = c, M = f;
        return c = f = void 0, p = k, v = o.apply(M, I), v;
      }
      function E(k) {
        return p = k, h = setTimeout(T, u), g ? x(k) : v;
      }
      function S(k) {
        var I = k - y, M = k - p, D = u - I;
        return b ? i(D, d - M) : D;
      }
      function w(k) {
        var I = k - y, M = k - p;
        return y === void 0 || I >= u || I < 0 || b && M >= d;
      }
      function T() {
        var k = e();
        if (w(k)) return C(k);
        h = setTimeout(T, S(k));
      }
      function C(k) {
        return h = void 0, m && c ? x(k) : (c = f = void 0, v);
      }
      function R() {
        h !== void 0 && clearTimeout(h), p = 0, c = y = f = h = void 0;
      }
      function A() {
        return h === void 0 ? v : C(e());
      }
      function P() {
        var k = e(), I = w(k);
        if (c = arguments, f = this, y = k, I) {
          if (h === void 0) return E(y);
          if (b) return clearTimeout(h), h = setTimeout(T, u), x(y);
        }
        return h === void 0 && (h = setTimeout(T, u)), v;
      }
      return P.cancel = R, P.flush = A, P;
    }
    return Ms = s, Ms;
  }
  var Mp = Bp(), La = Oa(Mp), Ds = gt ? gt.performance : null, Fd = Ds && Ds.now ? function() {
    return Ds.now();
  } : function() {
    return Date.now();
  }, Dp = (function() {
    if (gt) {
      if (gt.requestAnimationFrame) return function(t) {
        gt.requestAnimationFrame(t);
      };
      if (gt.mozRequestAnimationFrame) return function(t) {
        gt.mozRequestAnimationFrame(t);
      };
      if (gt.webkitRequestAnimationFrame) return function(t) {
        gt.webkitRequestAnimationFrame(t);
      };
      if (gt.msRequestAnimationFrame) return function(t) {
        gt.msRequestAnimationFrame(t);
      };
    }
    return function(t) {
      t && setTimeout(function() {
        t(Fd());
      }, 1e3 / 60);
    };
  })(), Ii = function(e) {
    return Dp(e);
  }, xr = Fd, nn = 9261, Vd = 65599, _n = 5381, $d = function(e) {
    for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn, n = r, a; a = e.next(), !a.done; ) n = n * Vd + a.value | 0;
    return n;
  }, wa = function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn;
    return r * Vd + e | 0;
  }, xa = function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _n;
    return (r << 5) + r + e | 0;
  }, Op = function(e, r) {
    return e * 2097152 + r;
  }, Rr = function(e) {
    return e[0] * 2097152 + e[1];
  }, Ja = function(e, r) {
    return [
      wa(e[0], r[0]),
      xa(e[1], r[1])
    ];
  }, Nl = function(e, r) {
    var n = {
      value: 0,
      done: false
    }, a = 0, i = e.length, s = {
      next: function() {
        return a < i ? n.value = e[a++] : n.done = true, n;
      }
    };
    return $d(s, r);
  }, dn = function(e, r) {
    var n = {
      value: 0,
      done: false
    }, a = 0, i = e.length, s = {
      next: function() {
        return a < i ? n.value = e.charCodeAt(a++) : n.done = true, n;
      }
    };
    return $d(s, r);
  }, Ud = function() {
    return Np(arguments);
  }, Np = function(e) {
    for (var r, n = 0; n < e.length; n++) {
      var a = e[n];
      n === 0 ? r = dn(a) : r = dn(a, r);
    }
    return r;
  };
  function zp(t, e, r, n, a) {
    var i = a * Math.PI / 180, s = Math.cos(i) * (t - r) - Math.sin(i) * (e - n) + r, o = Math.sin(i) * (t - r) + Math.cos(i) * (e - n) + n;
    return {
      x: s,
      y: o
    };
  }
  var Lp = function(e, r, n, a, i, s) {
    return {
      x: (e - n) * i + n,
      y: (r - a) * s + a
    };
  };
  function Fp(t, e, r) {
    if (r === 0) return t;
    var n = (e.x1 + e.x2) / 2, a = (e.y1 + e.y2) / 2, i = e.w / e.h, s = 1 / i, o = zp(t.x, t.y, n, a, r), u = Lp(o.x, o.y, n, a, i, s);
    return {
      x: u.x,
      y: u.y
    };
  }
  var zl = true, Vp = console.warn != null, $p = console.trace != null, Ou = Number.MAX_SAFE_INTEGER || 9007199254740991, qd = function() {
    return true;
  }, Bi = function() {
    return false;
  }, Ll = function() {
    return 0;
  }, Nu = function() {
  }, tt = function(e) {
    throw new Error(e);
  }, Zd = function(e) {
    if (e !== void 0) zl = !!e;
    else return zl;
  }, Ge = function(e) {
    Zd() && (Vp ? console.warn(e) : (console.log(e), $p && console.trace()));
  }, Up = function(e) {
    return Ee({}, e);
  }, fr = function(e) {
    return e == null ? e : Ke(e) ? e.slice() : ze(e) ? Up(e) : e;
  }, qp = function(e) {
    return e.slice();
  }, Gd = function(e, r) {
    for (r = e = ""; e++ < 36; r += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-") ;
    return r;
  }, Zp = {}, Wd = function() {
    return Zp;
  }, At = function(e) {
    var r = Object.keys(e);
    return function(n) {
      for (var a = {}, i = 0; i < r.length; i++) {
        var s = r[i], o = n == null ? void 0 : n[s];
        a[s] = o === void 0 ? e[s] : o;
      }
      return a;
    };
  }, zr = function(e, r, n) {
    for (var a = e.length - 1; a >= 0; a--) e[a] === r && e.splice(a, 1);
  }, zu = function(e) {
    e.splice(0, e.length);
  }, Gp = function(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      e.push(a);
    }
  }, Ut = function(e, r, n) {
    return n && (r = Md(n, r)), e[r];
  }, yr = function(e, r, n, a) {
    n && (r = Md(n, r)), e[r] = a;
  }, Wp = (function() {
    function t() {
      Zr(this, t), this._obj = {};
    }
    return Gr(t, [
      {
        key: "set",
        value: function(r, n) {
          return this._obj[r] = n, this;
        }
      },
      {
        key: "delete",
        value: function(r) {
          return this._obj[r] = void 0, this;
        }
      },
      {
        key: "clear",
        value: function() {
          this._obj = {};
        }
      },
      {
        key: "has",
        value: function(r) {
          return this._obj[r] !== void 0;
        }
      },
      {
        key: "get",
        value: function(r) {
          return this._obj[r];
        }
      }
    ]);
  })(), br = typeof Map < "u" ? Map : Wp, Hp = "undefined", Kp = (function() {
    function t(e) {
      if (Zr(this, t), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
        var r;
        e.instanceString != null && e.instanceString() === this.instanceString() ? r = e.toArray() : r = e;
        for (var n = 0; n < r.length; n++) this.add(r[n]);
      }
    }
    return Gr(t, [
      {
        key: "instanceString",
        value: function() {
          return "set";
        }
      },
      {
        key: "add",
        value: function(r) {
          var n = this._obj;
          n[r] !== 1 && (n[r] = 1, this.size++);
        }
      },
      {
        key: "delete",
        value: function(r) {
          var n = this._obj;
          n[r] === 1 && (n[r] = 0, this.size--);
        }
      },
      {
        key: "clear",
        value: function() {
          this._obj = /* @__PURE__ */ Object.create(null);
        }
      },
      {
        key: "has",
        value: function(r) {
          return this._obj[r] === 1;
        }
      },
      {
        key: "toArray",
        value: function() {
          var r = this;
          return Object.keys(this._obj).filter(function(n) {
            return r.has(n);
          });
        }
      },
      {
        key: "forEach",
        value: function(r, n) {
          return this.toArray().forEach(r, n);
        }
      }
    ]);
  })(), Kn = (typeof Set > "u" ? "undefined" : mt(Set)) !== Hp ? Set : Kp, Xi = function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    if (e === void 0 || r === void 0 || !Bu(e)) {
      tt("An element must have a core reference and parameters set");
      return;
    }
    var a = r.group;
    if (a == null && (r.data && r.data.source != null && r.data.target != null ? a = "edges" : a = "nodes"), a !== "nodes" && a !== "edges") {
      tt("An element must be of type `nodes` or `edges`; you specified `" + a + "`");
      return;
    }
    this.length = 1, this[0] = this;
    var i = this._private = {
      cy: e,
      single: true,
      data: r.data || {},
      position: r.position || {
        x: 0,
        y: 0
      },
      autoWidth: void 0,
      autoHeight: void 0,
      autoPadding: void 0,
      compoundBoundsClean: false,
      listeners: [],
      group: a,
      style: {},
      rstyle: {},
      styleCxts: [],
      styleKeys: {},
      removed: true,
      selected: !!r.selected,
      selectable: r.selectable === void 0 ? true : !!r.selectable,
      locked: !!r.locked,
      grabbed: false,
      grabbable: r.grabbable === void 0 ? true : !!r.grabbable,
      pannable: r.pannable === void 0 ? a === "edges" : !!r.pannable,
      active: false,
      classes: new Kn(),
      animation: {
        current: [],
        queue: []
      },
      rscratch: {},
      scratch: r.scratch || {},
      edges: [],
      children: [],
      parent: r.parent && r.parent.isNode() ? r.parent : null,
      traversalCache: {},
      backgrounding: false,
      bbCache: null,
      bbCacheShift: {
        x: 0,
        y: 0
      },
      bodyBounds: null,
      overlayBounds: null,
      labelBounds: {
        all: null,
        source: null,
        target: null,
        main: null
      },
      arrowBounds: {
        source: null,
        target: null,
        "mid-source": null,
        "mid-target": null
      }
    };
    if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), r.renderedPosition) {
      var s = r.renderedPosition, o = e.pan(), u = e.zoom();
      i.position = {
        x: (s.x - o.x) / u,
        y: (s.y - o.y) / u
      };
    }
    var l = [];
    Ke(r.classes) ? l = r.classes : me(r.classes) && (l = r.classes.split(/\s+/));
    for (var c = 0, f = l.length; c < f; c++) {
      var d = l[c];
      !d || d === "" || i.classes.add(d);
    }
    this.createEmitter(), (n === void 0 || n) && this.restore();
    var v = r.style || r.css;
    v && (Ge("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(v));
  }, Fl = function(e) {
    return e = {
      bfs: e.bfs || !e.dfs,
      dfs: e.dfs || !e.bfs
    }, function(n, a, i) {
      var s;
      ze(n) && !Wt(n) && (s = n, n = s.roots || s.root, a = s.visit, i = s.directed), i = arguments.length === 2 && !at(a) ? a : i, a = at(a) ? a : function() {
      };
      for (var o = this._private.cy, u = n = me(n) ? this.filter(n) : n, l = [], c = [], f = {}, d = {}, v = {}, h = 0, y, p = this.byGroup(), g = p.nodes, b = p.edges, m = 0; m < u.length; m++) {
        var x = u[m], E = x.id();
        x.isNode() && (l.unshift(x), e.bfs && (v[E] = true, c.push(x)), d[E] = 0);
      }
      for (var S = function() {
        var k = e.bfs ? l.shift() : l.pop(), I = k.id();
        if (e.dfs) {
          if (v[I]) return 0;
          v[I] = true, c.push(k);
        }
        var M = d[I], D = f[I], B = D != null ? D.source() : null, O = D != null ? D.target() : null, z = D == null ? void 0 : k.same(B) ? O[0] : B[0], U;
        if (U = a(k, D, z, h++, M), U === true) return y = k, 1;
        if (U === false) return 1;
        for (var N = k.connectedEdges().filter(function(Q) {
          return (!i || Q.source().same(k)) && b.has(Q);
        }), L = 0; L < N.length; L++) {
          var H = N[L], Y = H.connectedNodes().filter(function(Q) {
            return !Q.same(k) && g.has(Q);
          }), K = Y.id();
          Y.length !== 0 && !v[K] && (Y = Y[0], l.push(Y), e.bfs && (v[K] = true, c.push(Y)), f[K] = H, d[K] = d[I] + 1);
        }
      }, w; l.length !== 0 && (w = S(), !(w !== 0 && w === 1)); ) ;
      for (var T = o.collection(), C = 0; C < c.length; C++) {
        var R = c[C], A = f[R.id()];
        A != null && T.push(A), T.push(R);
      }
      return {
        path: o.collection(T),
        found: o.collection(y)
      };
    };
  }, Ea = {
    breadthFirstSearch: Fl({
      bfs: true
    }),
    depthFirstSearch: Fl({
      dfs: true
    })
  };
  Ea.bfs = Ea.breadthFirstSearch;
  Ea.dfs = Ea.depthFirstSearch;
  var hi = {
    exports: {}
  }, Yp = hi.exports, Vl;
  function jp() {
    return Vl || (Vl = 1, (function(t, e) {
      (function() {
        var r, n, a, i, s, o, u, l, c, f, d, v, h, y, p;
        a = Math.floor, f = Math.min, n = function(g, b) {
          return g < b ? -1 : g > b ? 1 : 0;
        }, c = function(g, b, m, x, E) {
          var S;
          if (m == null && (m = 0), E == null && (E = n), m < 0) throw new Error("lo must be non-negative");
          for (x == null && (x = g.length); m < x; ) S = a((m + x) / 2), E(b, g[S]) < 0 ? x = S : m = S + 1;
          return [].splice.apply(g, [
            m,
            m - m
          ].concat(b)), b;
        }, o = function(g, b, m) {
          return m == null && (m = n), g.push(b), y(g, 0, g.length - 1, m);
        }, s = function(g, b) {
          var m, x;
          return b == null && (b = n), m = g.pop(), g.length ? (x = g[0], g[0] = m, p(g, 0, b)) : x = m, x;
        }, l = function(g, b, m) {
          var x;
          return m == null && (m = n), x = g[0], g[0] = b, p(g, 0, m), x;
        }, u = function(g, b, m) {
          var x;
          return m == null && (m = n), g.length && m(g[0], b) < 0 && (x = [
            g[0],
            b
          ], b = x[0], g[0] = x[1], p(g, 0, m)), b;
        }, i = function(g, b) {
          var m, x, E, S, w, T;
          for (b == null && (b = n), S = (function() {
            T = [];
            for (var C = 0, R = a(g.length / 2); 0 <= R ? C < R : C > R; 0 <= R ? C++ : C--) T.push(C);
            return T;
          }).apply(this).reverse(), w = [], x = 0, E = S.length; x < E; x++) m = S[x], w.push(p(g, m, b));
          return w;
        }, h = function(g, b, m) {
          var x;
          if (m == null && (m = n), x = g.indexOf(b), x !== -1) return y(g, 0, x, m), p(g, x, m);
        }, d = function(g, b, m) {
          var x, E, S, w, T;
          if (m == null && (m = n), E = g.slice(0, b), !E.length) return E;
          for (i(E, m), T = g.slice(b), S = 0, w = T.length; S < w; S++) x = T[S], u(E, x, m);
          return E.sort(m).reverse();
        }, v = function(g, b, m) {
          var x, E, S, w, T, C, R, A, P;
          if (m == null && (m = n), b * 10 <= g.length) {
            if (S = g.slice(0, b).sort(m), !S.length) return S;
            for (E = S[S.length - 1], R = g.slice(b), w = 0, C = R.length; w < C; w++) x = R[w], m(x, E) < 0 && (c(S, x, 0, null, m), S.pop(), E = S[S.length - 1]);
            return S;
          }
          for (i(g, m), P = [], T = 0, A = f(b, g.length); 0 <= A ? T < A : T > A; 0 <= A ? ++T : --T) P.push(s(g, m));
          return P;
        }, y = function(g, b, m, x) {
          var E, S, w;
          for (x == null && (x = n), E = g[m]; m > b; ) {
            if (w = m - 1 >> 1, S = g[w], x(E, S) < 0) {
              g[m] = S, m = w;
              continue;
            }
            break;
          }
          return g[m] = E;
        }, p = function(g, b, m) {
          var x, E, S, w, T;
          for (m == null && (m = n), E = g.length, T = b, S = g[b], x = 2 * b + 1; x < E; ) w = x + 1, w < E && !(m(g[x], g[w]) < 0) && (x = w), g[b] = g[x], b = x, x = 2 * b + 1;
          return g[b] = S, y(g, T, b, m);
        }, r = (function() {
          g.push = o, g.pop = s, g.replace = l, g.pushpop = u, g.heapify = i, g.updateItem = h, g.nlargest = d, g.nsmallest = v;
          function g(b) {
            this.cmp = b ?? n, this.nodes = [];
          }
          return g.prototype.push = function(b) {
            return o(this.nodes, b, this.cmp);
          }, g.prototype.pop = function() {
            return s(this.nodes, this.cmp);
          }, g.prototype.peek = function() {
            return this.nodes[0];
          }, g.prototype.contains = function(b) {
            return this.nodes.indexOf(b) !== -1;
          }, g.prototype.replace = function(b) {
            return l(this.nodes, b, this.cmp);
          }, g.prototype.pushpop = function(b) {
            return u(this.nodes, b, this.cmp);
          }, g.prototype.heapify = function() {
            return i(this.nodes, this.cmp);
          }, g.prototype.updateItem = function(b) {
            return h(this.nodes, b, this.cmp);
          }, g.prototype.clear = function() {
            return this.nodes = [];
          }, g.prototype.empty = function() {
            return this.nodes.length === 0;
          }, g.prototype.size = function() {
            return this.nodes.length;
          }, g.prototype.clone = function() {
            var b;
            return b = new g(), b.nodes = this.nodes.slice(0), b;
          }, g.prototype.toArray = function() {
            return this.nodes.slice(0);
          }, g.prototype.insert = g.prototype.push, g.prototype.top = g.prototype.peek, g.prototype.front = g.prototype.peek, g.prototype.has = g.prototype.contains, g.prototype.copy = g.prototype.clone, g;
        })(), (function(g, b) {
          return t.exports = b();
        })(this, function() {
          return r;
        });
      }).call(Yp);
    })(hi)), hi.exports;
  }
  var Os, $l;
  function Xp() {
    return $l || ($l = 1, Os = jp()), Os;
  }
  var Jp = Xp(), Fa = Oa(Jp), Qp = At({
    root: null,
    weight: function(e) {
      return 1;
    },
    directed: false
  }), em = {
    dijkstra: function(e) {
      if (!ze(e)) {
        var r = arguments;
        e = {
          root: r[0],
          weight: r[1],
          directed: r[2]
        };
      }
      var n = Qp(e), a = n.root, i = n.weight, s = n.directed, o = this, u = i, l = me(a) ? this.filter(a)[0] : a[0], c = {}, f = {}, d = {}, v = this.byGroup(), h = v.nodes, y = v.edges;
      y.unmergeBy(function(M) {
        return M.isLoop();
      });
      for (var p = function(D) {
        return c[D.id()];
      }, g = function(D, B) {
        c[D.id()] = B, b.updateItem(D);
      }, b = new Fa(function(M, D) {
        return p(M) - p(D);
      }), m = 0; m < h.length; m++) {
        var x = h[m];
        c[x.id()] = x.same(l) ? 0 : 1 / 0, b.push(x);
      }
      for (var E = function(D, B) {
        for (var O = (s ? D.edgesTo(B) : D.edgesWith(B)).intersect(y), z = 1 / 0, U, N = 0; N < O.length; N++) {
          var L = O[N], H = u(L);
          (H < z || !U) && (z = H, U = L);
        }
        return {
          edge: U,
          dist: z
        };
      }; b.size() > 0; ) {
        var S = b.pop(), w = p(S), T = S.id();
        if (d[T] = w, w !== 1 / 0) for (var C = S.neighborhood().intersect(h), R = 0; R < C.length; R++) {
          var A = C[R], P = A.id(), k = E(S, A), I = w + k.dist;
          I < p(A) && (g(A, I), f[P] = {
            node: S,
            edge: k.edge
          });
        }
      }
      return {
        distanceTo: function(D) {
          var B = me(D) ? h.filter(D)[0] : D[0];
          return d[B.id()];
        },
        pathTo: function(D) {
          var B = me(D) ? h.filter(D)[0] : D[0], O = [], z = B, U = z.id();
          if (B.length > 0) for (O.unshift(B); f[U]; ) {
            var N = f[U];
            O.unshift(N.edge), O.unshift(N.node), z = N.node, U = z.id();
          }
          return o.spawn(O);
        }
      };
    }
  }, tm = {
    kruskal: function(e) {
      e = e || function(m) {
        return 1;
      };
      for (var r = this.byGroup(), n = r.nodes, a = r.edges, i = n.length, s = new Array(i), o = n, u = function(x) {
        for (var E = 0; E < s.length; E++) {
          var S = s[E];
          if (S.has(x)) return E;
        }
      }, l = 0; l < i; l++) s[l] = this.spawn(n[l]);
      for (var c = a.sort(function(m, x) {
        return e(m) - e(x);
      }), f = 0; f < c.length; f++) {
        var d = c[f], v = d.source()[0], h = d.target()[0], y = u(v), p = u(h), g = s[y], b = s[p];
        y !== p && (o.merge(d), g.merge(b), s.splice(p, 1));
      }
      return o;
    }
  }, rm = At({
    root: null,
    goal: null,
    weight: function(e) {
      return 1;
    },
    heuristic: function(e) {
      return 0;
    },
    directed: false
  }), nm = {
    aStar: function(e) {
      var r = this.cy(), n = rm(e), a = n.root, i = n.goal, s = n.heuristic, o = n.directed, u = n.weight;
      a = r.collection(a)[0], i = r.collection(i)[0];
      var l = a.id(), c = i.id(), f = {}, d = {}, v = {}, h = new Fa(function(U, N) {
        return d[U.id()] - d[N.id()];
      }), y = new Kn(), p = {}, g = {}, b = function(N, L) {
        h.push(N), y.add(L);
      }, m, x, E = function() {
        m = h.pop(), x = m.id(), y.delete(x);
      }, S = function(N) {
        return y.has(N);
      };
      b(a, l), f[l] = 0, d[l] = s(a);
      for (var w = 0; h.size() > 0; ) {
        if (E(), w++, x === c) {
          for (var T = [], C = i, R = c, A = g[R]; T.unshift(C), A != null && T.unshift(A), C = p[R], C != null; ) R = C.id(), A = g[R];
          return {
            found: true,
            distance: f[x],
            path: this.spawn(T),
            steps: w
          };
        }
        v[x] = true;
        for (var P = m._private.edges, k = 0; k < P.length; k++) {
          var I = P[k];
          if (this.hasElementWithId(I.id()) && !(o && I.data("source") !== x)) {
            var M = I.source(), D = I.target(), B = M.id() !== x ? M : D, O = B.id();
            if (this.hasElementWithId(O) && !v[O]) {
              var z = f[x] + u(I);
              if (!S(O)) {
                f[O] = z, d[O] = z + s(B), b(B, O), p[O] = m, g[O] = I;
                continue;
              }
              z < f[O] && (f[O] = z, d[O] = z + s(B), p[O] = m, g[O] = I);
            }
          }
        }
      }
      return {
        found: false,
        distance: void 0,
        path: void 0,
        steps: w
      };
    }
  }, am = At({
    weight: function(e) {
      return 1;
    },
    directed: false
  }), im = {
    floydWarshall: function(e) {
      for (var r = this.cy(), n = am(e), a = n.weight, i = n.directed, s = a, o = this.byGroup(), u = o.nodes, l = o.edges, c = u.length, f = c * c, d = function(H) {
        return u.indexOf(H);
      }, v = function(H) {
        return u[H];
      }, h = new Array(f), y = 0; y < f; y++) {
        var p = y % c, g = (y - p) / c;
        g === p ? h[y] = 0 : h[y] = 1 / 0;
      }
      for (var b = new Array(f), m = new Array(f), x = 0; x < l.length; x++) {
        var E = l[x], S = E.source()[0], w = E.target()[0];
        if (S !== w) {
          var T = d(S), C = d(w), R = T * c + C, A = s(E);
          if (h[R] > A && (h[R] = A, b[R] = C, m[R] = E), !i) {
            var P = C * c + T;
            !i && h[P] > A && (h[P] = A, b[P] = T, m[P] = E);
          }
        }
      }
      for (var k = 0; k < c; k++) for (var I = 0; I < c; I++) for (var M = I * c + k, D = 0; D < c; D++) {
        var B = I * c + D, O = k * c + D;
        h[M] + h[O] < h[B] && (h[B] = h[M] + h[O], b[B] = b[M]);
      }
      var z = function(H) {
        return (me(H) ? r.filter(H) : H)[0];
      }, U = function(H) {
        return d(z(H));
      }, N = {
        distance: function(H, Y) {
          var K = U(H), Q = U(Y);
          return h[K * c + Q];
        },
        path: function(H, Y) {
          var K = U(H), Q = U(Y), re = v(K);
          if (K === Q) return re.collection();
          if (b[K * c + Q] == null) return r.collection();
          var ie = r.collection(), ee = K, F;
          for (ie.merge(re); K !== Q; ) ee = K, K = b[K * c + Q], F = m[ee * c + K], ie.merge(F), ie.merge(v(K));
          return ie;
        }
      };
      return N;
    }
  }, sm = At({
    weight: function(e) {
      return 1;
    },
    directed: false,
    root: null
  }), om = {
    bellmanFord: function(e) {
      var r = this, n = sm(e), a = n.weight, i = n.directed, s = n.root, o = a, u = this, l = this.cy(), c = this.byGroup(), f = c.edges, d = c.nodes, v = d.length, h = new br(), y = false, p = [];
      s = l.collection(s)[0], f.unmergeBy(function(Re) {
        return Re.isLoop();
      });
      for (var g = f.length, b = function(Te) {
        var we = h.get(Te.id());
        return we || (we = {}, h.set(Te.id(), we)), we;
      }, m = function(Te) {
        return (me(Te) ? l.$(Te) : Te)[0];
      }, x = function(Te) {
        return b(m(Te)).dist;
      }, E = function(Te) {
        for (var we = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, se = m(Te), ge = [], pe = se; ; ) {
          if (pe == null) return r.spawn();
          var Ce = b(pe), ye = Ce.edge, Pe = Ce.pred;
          if (ge.unshift(pe[0]), pe.same(we) && ge.length > 0) break;
          ye != null && ge.unshift(ye), pe = Pe;
        }
        return u.spawn(ge);
      }, S = 0; S < v; S++) {
        var w = d[S], T = b(w);
        w.same(s) ? T.dist = 0 : T.dist = 1 / 0, T.pred = null, T.edge = null;
      }
      for (var C = false, R = function(Te, we, se, ge, pe, Ce) {
        var ye = ge.dist + Ce;
        ye < pe.dist && !se.same(ge.edge) && (pe.dist = ye, pe.pred = Te, pe.edge = se, C = true);
      }, A = 1; A < v; A++) {
        C = false;
        for (var P = 0; P < g; P++) {
          var k = f[P], I = k.source(), M = k.target(), D = o(k), B = b(I), O = b(M);
          R(I, M, k, B, O, D), i || R(M, I, k, O, B, D);
        }
        if (!C) break;
      }
      if (C) for (var z = [], U = 0; U < g; U++) {
        var N = f[U], L = N.source(), H = N.target(), Y = o(N), K = b(L).dist, Q = b(H).dist;
        if (K + Y < Q || !i && Q + Y < K) if (y || (Ge("Graph contains a negative weight cycle for Bellman-Ford"), y = true), e.findNegativeWeightCycles !== false) {
          var re = [];
          K + Y < Q && re.push(L), !i && Q + Y < K && re.push(H);
          for (var ie = re.length, ee = 0; ee < ie; ee++) {
            var F = re[ee], V = [
              F
            ];
            V.push(b(F).edge);
            for (var q = b(F).pred; V.indexOf(q) === -1; ) V.push(q), V.push(b(q).edge), q = b(q).pred;
            V = V.slice(V.indexOf(q));
            for (var X = V[0].id(), ne = 0, he = 2; he < V.length; he += 2) V[he].id() < X && (X = V[he].id(), ne = he);
            V = V.slice(ne).concat(V.slice(0, ne)), V.push(V[0]);
            var De = V.map(function(Re) {
              return Re.id();
            }).join(",");
            z.indexOf(De) === -1 && (p.push(u.spawn(V)), z.push(De));
          }
        } else break;
      }
      return {
        distanceTo: x,
        pathTo: E,
        hasNegativeWeightCycle: y,
        negativeWeightCycles: p
      };
    }
  }, um = Math.sqrt(2), lm = function(e, r, n) {
    n.length === 0 && tt("Karger-Stein must be run on a connected (sub)graph");
    for (var a = n[e], i = a[1], s = a[2], o = r[i], u = r[s], l = n, c = l.length - 1; c >= 0; c--) {
      var f = l[c], d = f[1], v = f[2];
      (r[d] === o && r[v] === u || r[d] === u && r[v] === o) && l.splice(c, 1);
    }
    for (var h = 0; h < l.length; h++) {
      var y = l[h];
      y[1] === u ? (l[h] = y.slice(), l[h][1] = o) : y[2] === u && (l[h] = y.slice(), l[h][2] = o);
    }
    for (var p = 0; p < r.length; p++) r[p] === u && (r[p] = o);
    return l;
  }, Ns = function(e, r, n, a) {
    for (; n > a; ) {
      var i = Math.floor(Math.random() * r.length);
      r = lm(i, e, r), n--;
    }
    return r;
  }, cm = {
    kargerStein: function() {
      var e = this, r = this.byGroup(), n = r.nodes, a = r.edges;
      a.unmergeBy(function(O) {
        return O.isLoop();
      });
      var i = n.length, s = a.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), u = Math.floor(i / um);
      if (i < 2) {
        tt("At least 2 nodes are required for Karger-Stein algorithm");
        return;
      }
      for (var l = [], c = 0; c < s; c++) {
        var f = a[c];
        l.push([
          c,
          n.indexOf(f.source()),
          n.indexOf(f.target())
        ]);
      }
      for (var d = 1 / 0, v = [], h = new Array(i), y = new Array(i), p = new Array(i), g = function(z, U) {
        for (var N = 0; N < i; N++) U[N] = z[N];
      }, b = 0; b <= o; b++) {
        for (var m = 0; m < i; m++) y[m] = m;
        var x = Ns(y, l.slice(), i, u), E = x.slice();
        g(y, p);
        var S = Ns(y, x, u, 2), w = Ns(p, E, u, 2);
        S.length <= w.length && S.length < d ? (d = S.length, v = S, g(y, h)) : w.length <= S.length && w.length < d && (d = w.length, v = w, g(p, h));
      }
      for (var T = this.spawn(v.map(function(O) {
        return a[O[0]];
      })), C = this.spawn(), R = this.spawn(), A = h[0], P = 0; P < h.length; P++) {
        var k = h[P], I = n[P];
        k === A ? C.merge(I) : R.merge(I);
      }
      var M = function(z) {
        var U = e.spawn();
        return z.forEach(function(N) {
          U.merge(N), N.connectedEdges().forEach(function(L) {
            e.contains(L) && !T.contains(L) && U.merge(L);
          });
        }), U;
      }, D = [
        M(C),
        M(R)
      ], B = {
        cut: T,
        components: D,
        partition1: C,
        partition2: R
      };
      return B;
    }
  }, zs, fm = function(e) {
    return {
      x: e.x,
      y: e.y
    };
  }, Ji = function(e, r, n) {
    return {
      x: e.x * r + n.x,
      y: e.y * r + n.y
    };
  }, Hd = function(e, r, n) {
    return {
      x: (e.x - n.x) / r,
      y: (e.y - n.y) / r
    };
  }, Bn = function(e) {
    return {
      x: e[0],
      y: e[1]
    };
  }, dm = function(e) {
    for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, a = 1 / 0, i = r; i < n; i++) {
      var s = e[i];
      isFinite(s) && (a = Math.min(s, a));
    }
    return a;
  }, vm = function(e) {
    for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, a = -1 / 0, i = r; i < n; i++) {
      var s = e[i];
      isFinite(s) && (a = Math.max(s, a));
    }
    return a;
  }, hm = function(e) {
    for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, a = 0, i = 0, s = r; s < n; s++) {
      var o = e[s];
      isFinite(o) && (a += o, i++);
    }
    return a / i;
  }, gm = function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
    a ? e = e.slice(r, n) : (n < e.length && e.splice(n, e.length - n), r > 0 && e.splice(0, r));
    for (var o = 0, u = e.length - 1; u >= 0; u--) {
      var l = e[u];
      s ? isFinite(l) || (e[u] = -1 / 0, o++) : e.splice(u, 1);
    }
    i && e.sort(function(d, v) {
      return d - v;
    });
    var c = e.length, f = Math.floor(c / 2);
    return c % 2 !== 0 ? e[f + 1 + o] : (e[f - 1 + o] + e[f + o]) / 2;
  }, pm = function(e) {
    return Math.PI * e / 180;
  }, Qa = function(e, r) {
    return Math.atan2(r, e) - Math.PI / 2;
  }, Lu = Math.log2 || function(t) {
    return Math.log(t) / Math.log(2);
  }, Fu = function(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0;
  }, vn = function(e, r) {
    return Math.sqrt(en(e, r));
  }, en = function(e, r) {
    var n = r.x - e.x, a = r.y - e.y;
    return n * n + a * a;
  }, mm = function(e) {
    for (var r = e.length, n = 0, a = 0; a < r; a++) n += e[a];
    for (var i = 0; i < r; i++) e[i] = e[i] / n;
    return e;
  }, wt = function(e, r, n, a) {
    return (1 - a) * (1 - a) * e + 2 * (1 - a) * a * r + a * a * n;
  }, zn = function(e, r, n, a) {
    return {
      x: wt(e.x, r.x, n.x, a),
      y: wt(e.y, r.y, n.y, a)
    };
  }, ym = function(e, r, n, a) {
    var i = {
      x: r.x - e.x,
      y: r.y - e.y
    }, s = vn(e, r), o = {
      x: i.x / s,
      y: i.y / s
    };
    return n = n ?? 0, a = a ?? n * s, {
      x: e.x + o.x * a,
      y: e.y + o.y * a
    };
  }, Ta = function(e, r, n) {
    return Math.max(e, Math.min(n, r));
  }, zt = function(e) {
    if (e == null) return {
      x1: 1 / 0,
      y1: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0,
      w: 0,
      h: 0
    };
    if (e.x1 != null && e.y1 != null) {
      if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1) return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2,
        w: e.x2 - e.x1,
        h: e.y2 - e.y1
      };
      if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0) return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + e.w,
        y2: e.y1 + e.h,
        w: e.w,
        h: e.h
      };
    }
  }, bm = function(e) {
    return {
      x1: e.x1,
      x2: e.x2,
      w: e.w,
      y1: e.y1,
      y2: e.y2,
      h: e.h
    };
  }, wm = function(e) {
    e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
  }, xm = function(e, r) {
    e.x1 = Math.min(e.x1, r.x1), e.x2 = Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, r.y1), e.y2 = Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
  }, Kd = function(e, r, n) {
    e.x1 = Math.min(e.x1, r), e.x2 = Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, n), e.y2 = Math.max(e.y2, n), e.h = e.y2 - e.y1;
  }, gi = function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
  }, pi = function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [
      0
    ], n, a, i, s;
    if (r.length === 1) n = a = i = s = r[0];
    else if (r.length === 2) n = i = r[0], s = a = r[1];
    else if (r.length === 4) {
      var o = ft(r, 4);
      n = o[0], a = o[1], i = o[2], s = o[3];
    }
    return e.x1 -= s, e.x2 += a, e.y1 -= n, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
  }, Ul = function(e, r) {
    e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
  }, Vu = function(e, r) {
    return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
  }, Ir = function(e, r, n) {
    return e.x1 <= r && r <= e.x2 && e.y1 <= n && n <= e.y2;
  }, ql = function(e, r) {
    return Ir(e, r.x, r.y);
  }, Yd = function(e, r) {
    return Ir(e, r.x1, r.y1) && Ir(e, r.x2, r.y2);
  }, Em = (zs = Math.hypot) !== null && zs !== void 0 ? zs : function(t, e) {
    return Math.sqrt(t * t + e * e);
  };
  function Tm(t, e) {
    if (t.length < 3) throw new Error("Need at least 3 vertices");
    var r = function(T, C) {
      return {
        x: T.x + C.x,
        y: T.y + C.y
      };
    }, n = function(T, C) {
      return {
        x: T.x - C.x,
        y: T.y - C.y
      };
    }, a = function(T, C) {
      return {
        x: T.x * C,
        y: T.y * C
      };
    }, i = function(T, C) {
      return T.x * C.y - T.y * C.x;
    }, s = function(T) {
      var C = Em(T.x, T.y);
      return C === 0 ? {
        x: 0,
        y: 0
      } : {
        x: T.x / C,
        y: T.y / C
      };
    }, o = function(T) {
      for (var C = 0, R = 0; R < T.length; R++) {
        var A = T[R], P = T[(R + 1) % T.length];
        C += A.x * P.y - P.x * A.y;
      }
      return C / 2;
    }, u = function(T, C, R, A) {
      var P = n(C, T), k = n(A, R), I = i(P, k);
      if (Math.abs(I) < 1e-9) return r(T, a(P, 0.5));
      var M = i(n(R, T), k) / I;
      return r(T, a(P, M));
    }, l = t.map(function(w) {
      return {
        x: w.x,
        y: w.y
      };
    });
    o(l) < 0 && l.reverse();
    for (var c = l.length, f = [], d = 0; d < c; d++) {
      var v = l[d], h = l[(d + 1) % c], y = n(h, v), p = s({
        x: y.y,
        y: -y.x
      });
      f.push(p);
    }
    for (var g = f.map(function(w, T) {
      var C = r(l[T], a(w, e)), R = r(l[(T + 1) % c], a(w, e));
      return {
        p1: C,
        p2: R
      };
    }), b = [], m = 0; m < c; m++) {
      var x = g[(m - 1 + c) % c], E = g[m], S = u(x.p1, x.p2, E.p1, E.p2);
      b.push(S);
    }
    return b;
  }
  function Sm(t, e, r, n, a, i) {
    var s = Mm(t, e, r, n, a), o = Tm(s, i), u = zt();
    return o.forEach(function(l) {
      return Kd(u, l.x, l.y);
    }), u;
  }
  var jd = function(e, r, n, a, i, s, o) {
    var u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", l = u === "auto" ? Lr(i, s) : u, c = i / 2, f = s / 2;
    l = Math.min(l, c, f);
    var d = l !== c, v = l !== f, h;
    if (d) {
      var y = n - c + l - o, p = a - f - o, g = n + c - l + o, b = p;
      if (h = Br(e, r, n, a, y, p, g, b, false), h.length > 0) return h;
    }
    if (v) {
      var m = n + c + o, x = a - f + l - o, E = m, S = a + f - l + o;
      if (h = Br(e, r, n, a, m, x, E, S, false), h.length > 0) return h;
    }
    if (d) {
      var w = n - c + l - o, T = a + f + o, C = n + c - l + o, R = T;
      if (h = Br(e, r, n, a, w, T, C, R, false), h.length > 0) return h;
    }
    if (v) {
      var A = n - c - o, P = a - f + l - o, k = A, I = a + f - l + o;
      if (h = Br(e, r, n, a, A, P, k, I, false), h.length > 0) return h;
    }
    var M;
    {
      var D = n - c + l, B = a - f + l;
      if (M = fa(e, r, n, a, D, B, l + o), M.length > 0 && M[0] <= D && M[1] <= B) return [
        M[0],
        M[1]
      ];
    }
    {
      var O = n + c - l, z = a - f + l;
      if (M = fa(e, r, n, a, O, z, l + o), M.length > 0 && M[0] >= O && M[1] <= z) return [
        M[0],
        M[1]
      ];
    }
    {
      var U = n + c - l, N = a + f - l;
      if (M = fa(e, r, n, a, U, N, l + o), M.length > 0 && M[0] >= U && M[1] >= N) return [
        M[0],
        M[1]
      ];
    }
    {
      var L = n - c + l, H = a + f - l;
      if (M = fa(e, r, n, a, L, H, l + o), M.length > 0 && M[0] <= L && M[1] >= H) return [
        M[0],
        M[1]
      ];
    }
    return [];
  }, Cm = function(e, r, n, a, i, s, o) {
    var u = o, l = Math.min(n, i), c = Math.max(n, i), f = Math.min(a, s), d = Math.max(a, s);
    return l - u <= e && e <= c + u && f - u <= r && r <= d + u;
  }, Rm = function(e, r, n, a, i, s, o, u, l) {
    var c = {
      x1: Math.min(n, o, i) - l,
      x2: Math.max(n, o, i) + l,
      y1: Math.min(a, u, s) - l,
      y2: Math.max(a, u, s) + l
    };
    return !(e < c.x1 || e > c.x2 || r < c.y1 || r > c.y2);
  }, Am = function(e, r, n, a) {
    n -= a;
    var i = r * r - 4 * e * n;
    if (i < 0) return [];
    var s = Math.sqrt(i), o = 2 * e, u = (-r + s) / o, l = (-r - s) / o;
    return [
      u,
      l
    ];
  }, km = function(e, r, n, a, i) {
    var s = 1e-5;
    e === 0 && (e = s), r /= e, n /= e, a /= e;
    var o, u, l, c, f, d, v, h;
    if (u = (3 * n - r * r) / 9, l = -(27 * a) + r * (9 * n - 2 * (r * r)), l /= 54, o = u * u * u + l * l, i[1] = 0, v = r / 3, o > 0) {
      f = l + Math.sqrt(o), f = f < 0 ? -Math.pow(-f, 1 / 3) : Math.pow(f, 1 / 3), d = l - Math.sqrt(o), d = d < 0 ? -Math.pow(-d, 1 / 3) : Math.pow(d, 1 / 3), i[0] = -v + f + d, v += (f + d) / 2, i[4] = i[2] = -v, v = Math.sqrt(3) * (-d + f) / 2, i[3] = v, i[5] = -v;
      return;
    }
    if (i[5] = i[3] = 0, o === 0) {
      h = l < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), i[0] = -v + 2 * h, i[4] = i[2] = -(h + v);
      return;
    }
    u = -u, c = u * u * u, c = Math.acos(l / Math.sqrt(c)), h = 2 * Math.sqrt(u), i[0] = -v + h * Math.cos(c / 3), i[2] = -v + h * Math.cos((c + 2 * Math.PI) / 3), i[4] = -v + h * Math.cos((c + 4 * Math.PI) / 3);
  }, Pm = function(e, r, n, a, i, s, o, u) {
    var l = 1 * n * n - 4 * n * i + 2 * n * o + 4 * i * i - 4 * i * o + o * o + a * a - 4 * a * s + 2 * a * u + 4 * s * s - 4 * s * u + u * u, c = 9 * n * i - 3 * n * n - 3 * n * o - 6 * i * i + 3 * i * o + 9 * a * s - 3 * a * a - 3 * a * u - 6 * s * s + 3 * s * u, f = 3 * n * n - 6 * n * i + n * o - n * e + 2 * i * i + 2 * i * e - o * e + 3 * a * a - 6 * a * s + a * u - a * r + 2 * s * s + 2 * s * r - u * r, d = 1 * n * i - n * n + n * e - i * e + a * s - a * a + a * r - s * r, v = [];
    km(l, c, f, d, v);
    for (var h = 1e-7, y = [], p = 0; p < 6; p += 2) Math.abs(v[p + 1]) < h && v[p] >= 0 && v[p] <= 1 && y.push(v[p]);
    y.push(1), y.push(0);
    for (var g = -1, b, m, x, E = 0; E < y.length; E++) b = Math.pow(1 - y[E], 2) * n + 2 * (1 - y[E]) * y[E] * i + y[E] * y[E] * o, m = Math.pow(1 - y[E], 2) * a + 2 * (1 - y[E]) * y[E] * s + y[E] * y[E] * u, x = Math.pow(b - e, 2) + Math.pow(m - r, 2), g >= 0 ? x < g && (g = x) : g = x;
    return g;
  }, _m = function(e, r, n, a, i, s) {
    var o = [
      e - n,
      r - a
    ], u = [
      i - n,
      s - a
    ], l = u[0] * u[0] + u[1] * u[1], c = o[0] * o[0] + o[1] * o[1], f = o[0] * u[0] + o[1] * u[1], d = f * f / l;
    return f < 0 ? c : d > l ? (e - i) * (e - i) + (r - s) * (r - s) : c - d;
  }, qt = function(e, r, n) {
    for (var a, i, s, o, u, l = 0, c = 0; c < n.length / 2; c++) if (a = n[c * 2], i = n[c * 2 + 1], c + 1 < n.length / 2 ? (s = n[(c + 1) * 2], o = n[(c + 1) * 2 + 1]) : (s = n[(c + 1 - n.length / 2) * 2], o = n[(c + 1 - n.length / 2) * 2 + 1]), !(a == e && s == e)) if (a >= e && e >= s || a <= e && e <= s) u = (e - a) / (s - a) * (o - i) + i, u > r && l++;
    else continue;
    return l % 2 !== 0;
  }, Er = function(e, r, n, a, i, s, o, u, l) {
    var c = new Array(n.length), f;
    u[0] != null ? (f = Math.atan(u[1] / u[0]), u[0] < 0 ? f = f + Math.PI / 2 : f = -f - Math.PI / 2) : f = u;
    for (var d = Math.cos(-f), v = Math.sin(-f), h = 0; h < c.length / 2; h++) c[h * 2] = s / 2 * (n[h * 2] * d - n[h * 2 + 1] * v), c[h * 2 + 1] = o / 2 * (n[h * 2 + 1] * d + n[h * 2] * v), c[h * 2] += a, c[h * 2 + 1] += i;
    var y;
    if (l > 0) {
      var p = Di(c, -l);
      y = Mi(p);
    } else y = c;
    return qt(e, r, y);
  }, Im = function(e, r, n, a, i, s, o, u) {
    for (var l = new Array(n.length * 2), c = 0; c < u.length; c++) {
      var f = u[c];
      l[c * 4 + 0] = f.startX, l[c * 4 + 1] = f.startY, l[c * 4 + 2] = f.stopX, l[c * 4 + 3] = f.stopY;
      var d = Math.pow(f.cx - e, 2) + Math.pow(f.cy - r, 2);
      if (d <= Math.pow(f.radius, 2)) return true;
    }
    return qt(e, r, l);
  }, Mi = function(e) {
    for (var r = new Array(e.length / 2), n, a, i, s, o, u, l, c, f = 0; f < e.length / 4; f++) {
      n = e[f * 4], a = e[f * 4 + 1], i = e[f * 4 + 2], s = e[f * 4 + 3], f < e.length / 4 - 1 ? (o = e[(f + 1) * 4], u = e[(f + 1) * 4 + 1], l = e[(f + 1) * 4 + 2], c = e[(f + 1) * 4 + 3]) : (o = e[0], u = e[1], l = e[2], c = e[3]);
      var d = Br(n, a, i, s, o, u, l, c, true);
      r[f * 2] = d[0], r[f * 2 + 1] = d[1];
    }
    return r;
  }, Di = function(e, r) {
    for (var n = new Array(e.length * 2), a, i, s, o, u = 0; u < e.length / 2; u++) {
      a = e[u * 2], i = e[u * 2 + 1], u < e.length / 2 - 1 ? (s = e[(u + 1) * 2], o = e[(u + 1) * 2 + 1]) : (s = e[0], o = e[1]);
      var l = o - i, c = -(s - a), f = Math.sqrt(l * l + c * c), d = l / f, v = c / f;
      n[u * 4] = a + d * r, n[u * 4 + 1] = i + v * r, n[u * 4 + 2] = s + d * r, n[u * 4 + 3] = o + v * r;
    }
    return n;
  }, Bm = function(e, r, n, a, i, s) {
    var o = n - e, u = a - r;
    o /= i, u /= s;
    var l = Math.sqrt(o * o + u * u), c = l - 1;
    if (c < 0) return [];
    var f = c / l;
    return [
      (n - e) * f + e,
      (a - r) * f + r
    ];
  }, on = function(e, r, n, a, i, s, o) {
    return e -= i, r -= s, e /= n / 2 + o, r /= a / 2 + o, e * e + r * r <= 1;
  }, fa = function(e, r, n, a, i, s, o) {
    var u = [
      n - e,
      a - r
    ], l = [
      e - i,
      r - s
    ], c = u[0] * u[0] + u[1] * u[1], f = 2 * (l[0] * u[0] + l[1] * u[1]), d = l[0] * l[0] + l[1] * l[1] - o * o, v = f * f - 4 * c * d;
    if (v < 0) return [];
    var h = (-f + Math.sqrt(v)) / (2 * c), y = (-f - Math.sqrt(v)) / (2 * c), p = Math.min(h, y), g = Math.max(h, y), b = [];
    if (p >= 0 && p <= 1 && b.push(p), g >= 0 && g <= 1 && b.push(g), b.length === 0) return [];
    var m = b[0] * u[0] + e, x = b[0] * u[1] + r;
    if (b.length > 1) {
      if (b[0] == b[1]) return [
        m,
        x
      ];
      var E = b[1] * u[0] + e, S = b[1] * u[1] + r;
      return [
        m,
        x,
        E,
        S
      ];
    } else return [
      m,
      x
    ];
  }, Ls = function(e, r, n) {
    return r <= e && e <= n || n <= e && e <= r ? e : e <= r && r <= n || n <= r && r <= e ? r : n;
  }, Br = function(e, r, n, a, i, s, o, u, l) {
    var c = e - i, f = n - e, d = o - i, v = r - s, h = a - r, y = u - s, p = d * v - y * c, g = f * v - h * c, b = y * f - d * h;
    if (b !== 0) {
      var m = p / b, x = g / b, E = 1e-3, S = 0 - E, w = 1 + E;
      return S <= m && m <= w && S <= x && x <= w ? [
        e + m * f,
        r + m * h
      ] : l ? [
        e + m * f,
        r + m * h
      ] : [];
    } else return p === 0 || g === 0 ? Ls(e, n, o) === o ? [
      o,
      u
    ] : Ls(e, n, i) === i ? [
      i,
      s
    ] : Ls(i, o, n) === n ? [
      n,
      a
    ] : [] : [];
  }, Mm = function(e, r, n, a, i) {
    var s = [], o = a / 2, u = i / 2, l = r, c = n;
    s.push({
      x: l + o * e[0],
      y: c + u * e[1]
    });
    for (var f = 1; f < e.length / 2; f++) s.push({
      x: l + o * e[f * 2],
      y: c + u * e[f * 2 + 1]
    });
    return s;
  }, Sa = function(e, r, n, a, i, s, o, u) {
    var l = [], c, f = new Array(n.length), d = true;
    s == null && (d = false);
    var v;
    if (d) {
      for (var h = 0; h < f.length / 2; h++) f[h * 2] = n[h * 2] * s + a, f[h * 2 + 1] = n[h * 2 + 1] * o + i;
      if (u > 0) {
        var y = Di(f, -u);
        v = Mi(y);
      } else v = f;
    } else v = n;
    for (var p, g, b, m, x = 0; x < v.length / 2; x++) p = v[x * 2], g = v[x * 2 + 1], x < v.length / 2 - 1 ? (b = v[(x + 1) * 2], m = v[(x + 1) * 2 + 1]) : (b = v[0], m = v[1]), c = Br(e, r, a, i, p, g, b, m), c.length !== 0 && l.push(c[0], c[1]);
    return l;
  }, Dm = function(e, r, n, a, i, s, o, u, l) {
    var c = [], f, d = new Array(n.length * 2);
    l.forEach(function(b, m) {
      m === 0 ? (d[d.length - 2] = b.startX, d[d.length - 1] = b.startY) : (d[m * 4 - 2] = b.startX, d[m * 4 - 1] = b.startY), d[m * 4] = b.stopX, d[m * 4 + 1] = b.stopY, f = fa(e, r, a, i, b.cx, b.cy, b.radius), f.length !== 0 && c.push(f[0], f[1]);
    });
    for (var v = 0; v < d.length / 4; v++) f = Br(e, r, a, i, d[v * 4], d[v * 4 + 1], d[v * 4 + 2], d[v * 4 + 3], false), f.length !== 0 && c.push(f[0], f[1]);
    if (c.length > 2) {
      for (var h = [
        c[0],
        c[1]
      ], y = Math.pow(h[0] - e, 2) + Math.pow(h[1] - r, 2), p = 1; p < c.length / 2; p++) {
        var g = Math.pow(c[p * 2] - e, 2) + Math.pow(c[p * 2 + 1] - r, 2);
        g <= y && (h[0] = c[p * 2], h[1] = c[p * 2 + 1], y = g);
      }
      return h;
    }
    return c;
  }, ei = function(e, r, n) {
    var a = [
      e[0] - r[0],
      e[1] - r[1]
    ], i = Math.sqrt(a[0] * a[0] + a[1] * a[1]), s = (i - n) / i;
    return s < 0 && (s = 1e-5), [
      r[0] + s * a[0],
      r[1] + s * a[1]
    ];
  }, Ot = function(e, r) {
    var n = su(e, r);
    return n = Xd(n), n;
  }, Xd = function(e) {
    for (var r, n, a = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, u = -1 / 0, l = 0; l < a; l++) r = e[2 * l], n = e[2 * l + 1], i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, n), u = Math.max(u, n);
    for (var c = 2 / (o - i), f = 2 / (u - s), d = 0; d < a; d++) r = e[2 * d] = e[2 * d] * c, n = e[2 * d + 1] = e[2 * d + 1] * f, i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, n), u = Math.max(u, n);
    if (s < -1) for (var v = 0; v < a; v++) n = e[2 * v + 1] = e[2 * v + 1] + (-1 - s);
    return e;
  }, su = function(e, r) {
    var n = 1 / e * 2 * Math.PI, a = e % 2 === 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
    a += r;
    for (var i = new Array(e * 2), s, o = 0; o < e; o++) s = o * n + a, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
    return i;
  }, Lr = function(e, r) {
    return Math.min(e / 4, r / 4, 8);
  }, Jd = function(e, r) {
    return Math.min(e / 10, r / 10, 8);
  }, $u = function() {
    return 8;
  }, Om = function(e, r, n) {
    return [
      e - 2 * r + n,
      2 * (r - e),
      e
    ];
  }, ou = function(e, r) {
    return {
      heightOffset: Math.min(15, 0.05 * r),
      widthOffset: Math.min(100, 0.25 * e),
      ctrlPtOffsetPct: 0.05
    };
  };
  function Fs(t, e) {
    function r(f) {
      for (var d = [], v = 0; v < f.length; v++) {
        var h = f[v], y = f[(v + 1) % f.length], p = {
          x: y.x - h.x,
          y: y.y - h.y
        }, g = {
          x: -p.y,
          y: p.x
        }, b = Math.sqrt(g.x * g.x + g.y * g.y);
        d.push({
          x: g.x / b,
          y: g.y / b
        });
      }
      return d;
    }
    function n(f, d) {
      var v = 1 / 0, h = -1 / 0, y = Zt(f), p;
      try {
        for (y.s(); !(p = y.n()).done; ) {
          var g = p.value, b = g.x * d.x + g.y * d.y;
          v = Math.min(v, b), h = Math.max(h, b);
        }
      } catch (m) {
        y.e(m);
      } finally {
        y.f();
      }
      return {
        min: v,
        max: h
      };
    }
    function a(f, d) {
      return !(f.max < d.min || d.max < f.min);
    }
    var i = [].concat(Pi(r(t)), Pi(r(e))), s = Zt(i), o;
    try {
      for (s.s(); !(o = s.n()).done; ) {
        var u = o.value, l = n(t, u), c = n(e, u);
        if (!a(l, c)) return false;
      }
    } catch (f) {
      s.e(f);
    } finally {
      s.f();
    }
    return true;
  }
  var Nm = At({
    dampingFactor: 0.8,
    precision: 1e-6,
    iterations: 200,
    weight: function(e) {
      return 1;
    }
  }), zm = {
    pageRank: function(e) {
      for (var r = Nm(e), n = r.dampingFactor, a = r.precision, i = r.iterations, s = r.weight, o = this._private.cy, u = this.byGroup(), l = u.nodes, c = u.edges, f = l.length, d = f * f, v = c.length, h = new Array(d), y = new Array(f), p = (1 - n) / f, g = 0; g < f; g++) {
        for (var b = 0; b < f; b++) {
          var m = g * f + b;
          h[m] = 0;
        }
        y[g] = 0;
      }
      for (var x = 0; x < v; x++) {
        var E = c[x], S = E.data("source"), w = E.data("target");
        if (S !== w) {
          var T = l.indexOfId(S), C = l.indexOfId(w), R = s(E), A = C * f + T;
          h[A] += R, y[T] += R;
        }
      }
      for (var P = 1 / f + p, k = 0; k < f; k++) if (y[k] === 0) for (var I = 0; I < f; I++) {
        var M = I * f + k;
        h[M] = P;
      }
      else for (var D = 0; D < f; D++) {
        var B = D * f + k;
        h[B] = h[B] / y[k] + p;
      }
      for (var O = new Array(f), z = new Array(f), U, N = 0; N < f; N++) O[N] = 1;
      for (var L = 0; L < i; L++) {
        for (var H = 0; H < f; H++) z[H] = 0;
        for (var Y = 0; Y < f; Y++) for (var K = 0; K < f; K++) {
          var Q = Y * f + K;
          z[Y] += h[Q] * O[K];
        }
        mm(z), U = O, O = z, z = U;
        for (var re = 0, ie = 0; ie < f; ie++) {
          var ee = U[ie] - O[ie];
          re += ee * ee;
        }
        if (re < a) break;
      }
      var F = {
        rank: function(q) {
          return q = o.collection(q)[0], O[l.indexOf(q)];
        }
      };
      return F;
    }
  }, Zl = At({
    root: null,
    weight: function(e) {
      return 1;
    },
    directed: false,
    alpha: 0
  }), Ln = {
    degreeCentralityNormalized: function(e) {
      e = Zl(e);
      var r = this.cy(), n = this.nodes(), a = n.length;
      if (e.directed) {
        for (var c = {}, f = {}, d = 0, v = 0, h = 0; h < a; h++) {
          var y = n[h], p = y.id();
          e.root = y;
          var g = this.degreeCentrality(e);
          d < g.indegree && (d = g.indegree), v < g.outdegree && (v = g.outdegree), c[p] = g.indegree, f[p] = g.outdegree;
        }
        return {
          indegree: function(m) {
            return d == 0 ? 0 : (me(m) && (m = r.filter(m)), c[m.id()] / d);
          },
          outdegree: function(m) {
            return v === 0 ? 0 : (me(m) && (m = r.filter(m)), f[m.id()] / v);
          }
        };
      } else {
        for (var i = {}, s = 0, o = 0; o < a; o++) {
          var u = n[o];
          e.root = u;
          var l = this.degreeCentrality(e);
          s < l.degree && (s = l.degree), i[u.id()] = l.degree;
        }
        return {
          degree: function(m) {
            return s === 0 ? 0 : (me(m) && (m = r.filter(m)), i[m.id()] / s);
          }
        };
      }
    },
    degreeCentrality: function(e) {
      e = Zl(e);
      var r = this.cy(), n = this, a = e, i = a.root, s = a.weight, o = a.directed, u = a.alpha;
      if (i = r.collection(i)[0], o) {
        for (var v = i.connectedEdges(), h = v.filter(function(S) {
          return S.target().same(i) && n.has(S);
        }), y = v.filter(function(S) {
          return S.source().same(i) && n.has(S);
        }), p = h.length, g = y.length, b = 0, m = 0, x = 0; x < h.length; x++) b += s(h[x]);
        for (var E = 0; E < y.length; E++) m += s(y[E]);
        return {
          indegree: Math.pow(p, 1 - u) * Math.pow(b, u),
          outdegree: Math.pow(g, 1 - u) * Math.pow(m, u)
        };
      } else {
        for (var l = i.connectedEdges().intersection(n), c = l.length, f = 0, d = 0; d < l.length; d++) f += s(l[d]);
        return {
          degree: Math.pow(c, 1 - u) * Math.pow(f, u)
        };
      }
    }
  };
  Ln.dc = Ln.degreeCentrality;
  Ln.dcn = Ln.degreeCentralityNormalised = Ln.degreeCentralityNormalized;
  var Gl = At({
    harmonic: true,
    weight: function() {
      return 1;
    },
    directed: false,
    root: null
  }), Fn = {
    closenessCentralityNormalized: function(e) {
      for (var r = Gl(e), n = r.harmonic, a = r.weight, i = r.directed, s = this.cy(), o = {}, u = 0, l = this.nodes(), c = this.floydWarshall({
        weight: a,
        directed: i
      }), f = 0; f < l.length; f++) {
        for (var d = 0, v = l[f], h = 0; h < l.length; h++) if (f !== h) {
          var y = c.distance(v, l[h]);
          n ? d += 1 / y : d += y;
        }
        n || (d = 1 / d), u < d && (u = d), o[v.id()] = d;
      }
      return {
        closeness: function(g) {
          return u == 0 ? 0 : (me(g) ? g = s.filter(g)[0].id() : g = g.id(), o[g] / u);
        }
      };
    },
    closenessCentrality: function(e) {
      var r = Gl(e), n = r.root, a = r.weight, i = r.directed, s = r.harmonic;
      n = this.filter(n)[0];
      for (var o = this.dijkstra({
        root: n,
        weight: a,
        directed: i
      }), u = 0, l = this.nodes(), c = 0; c < l.length; c++) {
        var f = l[c];
        if (!f.same(n)) {
          var d = o.distanceTo(f);
          s ? u += 1 / d : u += d;
        }
      }
      return s ? u : 1 / u;
    }
  };
  Fn.cc = Fn.closenessCentrality;
  Fn.ccn = Fn.closenessCentralityNormalised = Fn.closenessCentralityNormalized;
  var Lm = At({
    weight: null,
    directed: false
  }), uu = {
    betweennessCentrality: function(e) {
      for (var r = Lm(e), n = r.directed, a = r.weight, i = a != null, s = this.cy(), o = this.nodes(), u = {}, l = {}, c = 0, f = {
        set: function(m, x) {
          l[m] = x, x > c && (c = x);
        },
        get: function(m) {
          return l[m];
        }
      }, d = 0; d < o.length; d++) {
        var v = o[d], h = v.id();
        n ? u[h] = v.outgoers().nodes() : u[h] = v.openNeighborhood().nodes(), f.set(h, 0);
      }
      for (var y = function() {
        for (var m = o[p].id(), x = [], E = {}, S = {}, w = {}, T = new Fa(function(Y, K) {
          return w[Y] - w[K];
        }), C = 0; C < o.length; C++) {
          var R = o[C].id();
          E[R] = [], S[R] = 0, w[R] = 1 / 0;
        }
        for (S[m] = 1, w[m] = 0, T.push(m); !T.empty(); ) {
          var A = T.pop();
          if (x.push(A), i) for (var P = 0; P < u[A].length; P++) {
            var k = u[A][P], I = s.getElementById(A), M = void 0;
            I.edgesTo(k).length > 0 ? M = I.edgesTo(k)[0] : M = k.edgesTo(I)[0];
            var D = a(M);
            k = k.id(), w[k] > w[A] + D && (w[k] = w[A] + D, T.nodes.indexOf(k) < 0 ? T.push(k) : T.updateItem(k), S[k] = 0, E[k] = []), w[k] == w[A] + D && (S[k] = S[k] + S[A], E[k].push(A));
          }
          else for (var B = 0; B < u[A].length; B++) {
            var O = u[A][B].id();
            w[O] == 1 / 0 && (T.push(O), w[O] = w[A] + 1), w[O] == w[A] + 1 && (S[O] = S[O] + S[A], E[O].push(A));
          }
        }
        for (var z = {}, U = 0; U < o.length; U++) z[o[U].id()] = 0;
        for (; x.length > 0; ) {
          for (var N = x.pop(), L = 0; L < E[N].length; L++) {
            var H = E[N][L];
            z[H] = z[H] + S[H] / S[N] * (1 + z[N]);
          }
          N != o[p].id() && f.set(N, f.get(N) + z[N]);
        }
      }, p = 0; p < o.length; p++) y();
      var g = {
        betweenness: function(m) {
          var x = s.collection(m).id();
          return f.get(x);
        },
        betweennessNormalized: function(m) {
          if (c == 0) return 0;
          var x = s.collection(m).id();
          return f.get(x) / c;
        }
      };
      return g.betweennessNormalised = g.betweennessNormalized, g;
    }
  };
  uu.bc = uu.betweennessCentrality;
  var Fm = At({
    expandFactor: 2,
    inflateFactor: 2,
    multFactor: 1,
    maxIterations: 20,
    attributes: [
      function(t) {
        return 1;
      }
    ]
  }), Vm = function(e) {
    return Fm(e);
  }, $m = function(e, r) {
    for (var n = 0, a = 0; a < r.length; a++) n += r[a](e);
    return n;
  }, Um = function(e, r, n) {
    for (var a = 0; a < r; a++) e[a * r + a] = n;
  }, Qd = function(e, r) {
    for (var n, a = 0; a < r; a++) {
      n = 0;
      for (var i = 0; i < r; i++) n += e[i * r + a];
      for (var s = 0; s < r; s++) e[s * r + a] = e[s * r + a] / n;
    }
  }, qm = function(e, r, n) {
    for (var a = new Array(n * n), i = 0; i < n; i++) {
      for (var s = 0; s < n; s++) a[i * n + s] = 0;
      for (var o = 0; o < n; o++) for (var u = 0; u < n; u++) a[i * n + u] += e[i * n + o] * r[o * n + u];
    }
    return a;
  }, Zm = function(e, r, n) {
    for (var a = e.slice(0), i = 1; i < n; i++) e = qm(e, a, r);
    return e;
  }, Gm = function(e, r, n) {
    for (var a = new Array(r * r), i = 0; i < r * r; i++) a[i] = Math.pow(e[i], n);
    return Qd(a, r), a;
  }, Wm = function(e, r, n, a) {
    for (var i = 0; i < n; i++) {
      var s = Math.round(e[i] * Math.pow(10, a)) / Math.pow(10, a), o = Math.round(r[i] * Math.pow(10, a)) / Math.pow(10, a);
      if (s !== o) return false;
    }
    return true;
  }, Hm = function(e, r, n, a) {
    for (var i = [], s = 0; s < r; s++) {
      for (var o = [], u = 0; u < r; u++) Math.round(e[s * r + u] * 1e3) / 1e3 > 0 && o.push(n[u]);
      o.length !== 0 && i.push(a.collection(o));
    }
    return i;
  }, Km = function(e, r) {
    for (var n = 0; n < e.length; n++) if (!r[n] || e[n].id() !== r[n].id()) return false;
    return true;
  }, Ym = function(e) {
    for (var r = 0; r < e.length; r++) for (var n = 0; n < e.length; n++) r != n && Km(e[r], e[n]) && e.splice(n, 1);
    return e;
  }, Wl = function(e) {
    for (var r = this.nodes(), n = this.edges(), a = this.cy(), i = Vm(e), s = {}, o = 0; o < r.length; o++) s[r[o].id()] = o;
    for (var u = r.length, l = u * u, c = new Array(l), f, d = 0; d < l; d++) c[d] = 0;
    for (var v = 0; v < n.length; v++) {
      var h = n[v], y = s[h.source().id()], p = s[h.target().id()], g = $m(h, i.attributes);
      c[y * u + p] += g, c[p * u + y] += g;
    }
    Um(c, u, i.multFactor), Qd(c, u);
    for (var b = true, m = 0; b && m < i.maxIterations; ) b = false, f = Zm(c, u, i.expandFactor), c = Gm(f, u, i.inflateFactor), Wm(c, f, l, 4) || (b = true), m++;
    var x = Hm(c, u, r, a);
    return x = Ym(x), x;
  }, jm = {
    markovClustering: Wl,
    mcl: Wl
  }, Xm = function(e) {
    return e;
  }, ev = function(e, r) {
    return Math.abs(r - e);
  }, Hl = function(e, r, n) {
    return e + ev(r, n);
  }, Kl = function(e, r, n) {
    return e + Math.pow(n - r, 2);
  }, Jm = function(e) {
    return Math.sqrt(e);
  }, Qm = function(e, r, n) {
    return Math.max(e, ev(r, n));
  }, aa = function(e, r, n, a, i) {
    for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Xm, o = a, u, l, c = 0; c < e; c++) u = r(c), l = n(c), o = i(o, u, l);
    return s(o);
  }, qn = {
    euclidean: function(e, r, n) {
      return e >= 2 ? aa(e, r, n, 0, Kl, Jm) : aa(e, r, n, 0, Hl);
    },
    squaredEuclidean: function(e, r, n) {
      return aa(e, r, n, 0, Kl);
    },
    manhattan: function(e, r, n) {
      return aa(e, r, n, 0, Hl);
    },
    max: function(e, r, n) {
      return aa(e, r, n, -1 / 0, Qm);
    }
  };
  qn["squared-euclidean"] = qn.squaredEuclidean;
  qn.squaredeuclidean = qn.squaredEuclidean;
  function Qi(t, e, r, n, a, i) {
    var s;
    return at(t) ? s = t : s = qn[t] || qn.euclidean, e === 0 && at(t) ? s(a, i) : s(e, r, n, a, i);
  }
  var ey = At({
    k: 2,
    m: 2,
    sensitivityThreshold: 1e-4,
    distance: "euclidean",
    maxIterations: 10,
    attributes: [],
    testMode: false,
    testCentroids: null
  }), Uu = function(e) {
    return ey(e);
  }, Oi = function(e, r, n, a, i) {
    var s = i !== "kMedoids", o = s ? function(f) {
      return n[f];
    } : function(f) {
      return a[f](n);
    }, u = function(d) {
      return a[d](r);
    }, l = n, c = r;
    return Qi(e, a.length, o, u, l, c);
  }, Vs = function(e, r, n) {
    for (var a = n.length, i = new Array(a), s = new Array(a), o = new Array(r), u = null, l = 0; l < a; l++) i[l] = e.min(n[l]).value, s[l] = e.max(n[l]).value;
    for (var c = 0; c < r; c++) {
      u = [];
      for (var f = 0; f < a; f++) u[f] = Math.random() * (s[f] - i[f]) + i[f];
      o[c] = u;
    }
    return o;
  }, tv = function(e, r, n, a, i) {
    for (var s = 1 / 0, o = 0, u = 0; u < r.length; u++) {
      var l = Oi(n, e, r[u], a, i);
      l < s && (s = l, o = u);
    }
    return o;
  }, rv = function(e, r, n) {
    for (var a = [], i = null, s = 0; s < r.length; s++) i = r[s], n[i.id()] === e && a.push(i);
    return a;
  }, ty = function(e, r, n) {
    return Math.abs(r - e) <= n;
  }, ry = function(e, r, n) {
    for (var a = 0; a < e.length; a++) for (var i = 0; i < e[a].length; i++) {
      var s = Math.abs(e[a][i] - r[a][i]);
      if (s > n) return false;
    }
    return true;
  }, ny = function(e, r, n) {
    for (var a = 0; a < n; a++) if (e === r[a]) return true;
    return false;
  }, Yl = function(e, r) {
    var n = new Array(r);
    if (e.length < 50) for (var a = 0; a < r; a++) {
      for (var i = e[Math.floor(Math.random() * e.length)]; ny(i, n, a); ) i = e[Math.floor(Math.random() * e.length)];
      n[a] = i;
    }
    else for (var s = 0; s < r; s++) n[s] = e[Math.floor(Math.random() * e.length)];
    return n;
  }, jl = function(e, r, n) {
    for (var a = 0, i = 0; i < r.length; i++) a += Oi("manhattan", r[i], e, n, "kMedoids");
    return a;
  }, ay = function(e) {
    var r = this.cy(), n = this.nodes(), a = null, i = Uu(e), s = new Array(i.k), o = {}, u;
    i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, u = Vs(n, i.k, i.attributes)) : mt(i.testCentroids) === "object" ? u = i.testCentroids : u = Vs(n, i.k, i.attributes) : u = Vs(n, i.k, i.attributes);
    for (var l = true, c = 0; l && c < i.maxIterations; ) {
      for (var f = 0; f < n.length; f++) a = n[f], o[a.id()] = tv(a, u, i.distance, i.attributes, "kMeans");
      l = false;
      for (var d = 0; d < i.k; d++) {
        var v = rv(d, n, o);
        if (v.length !== 0) {
          for (var h = i.attributes.length, y = u[d], p = new Array(h), g = new Array(h), b = 0; b < h; b++) {
            g[b] = 0;
            for (var m = 0; m < v.length; m++) a = v[m], g[b] += i.attributes[b](a);
            p[b] = g[b] / v.length, ty(p[b], y[b], i.sensitivityThreshold) || (l = true);
          }
          u[d] = p, s[d] = r.collection(v);
        }
      }
      c++;
    }
    return s;
  }, iy = function(e) {
    var r = this.cy(), n = this.nodes(), a = null, i = Uu(e), s = new Array(i.k), o, u = {}, l, c = new Array(i.k);
    i.testMode ? typeof i.testCentroids == "number" || (mt(i.testCentroids) === "object" ? o = i.testCentroids : o = Yl(n, i.k)) : o = Yl(n, i.k);
    for (var f = true, d = 0; f && d < i.maxIterations; ) {
      for (var v = 0; v < n.length; v++) a = n[v], u[a.id()] = tv(a, o, i.distance, i.attributes, "kMedoids");
      f = false;
      for (var h = 0; h < o.length; h++) {
        var y = rv(h, n, u);
        if (y.length !== 0) {
          c[h] = jl(o[h], y, i.attributes);
          for (var p = 0; p < y.length; p++) l = jl(y[p], y, i.attributes), l < c[h] && (c[h] = l, o[h] = y[p], f = true);
          s[h] = r.collection(y);
        }
      }
      d++;
    }
    return s;
  }, sy = function(e, r, n, a, i) {
    for (var s, o, u = 0; u < r.length; u++) for (var l = 0; l < e.length; l++) a[u][l] = Math.pow(n[u][l], i.m);
    for (var c = 0; c < e.length; c++) for (var f = 0; f < i.attributes.length; f++) {
      s = 0, o = 0;
      for (var d = 0; d < r.length; d++) s += a[d][c] * i.attributes[f](r[d]), o += a[d][c];
      e[c][f] = s / o;
    }
  }, oy = function(e, r, n, a, i) {
    for (var s = 0; s < e.length; s++) r[s] = e[s].slice();
    for (var o, u, l, c = 2 / (i.m - 1), f = 0; f < n.length; f++) for (var d = 0; d < a.length; d++) {
      o = 0;
      for (var v = 0; v < n.length; v++) u = Oi(i.distance, a[d], n[f], i.attributes, "cmeans"), l = Oi(i.distance, a[d], n[v], i.attributes, "cmeans"), o += Math.pow(u / l, c);
      e[d][f] = 1 / o;
    }
  }, uy = function(e, r, n, a) {
    for (var i = new Array(n.k), s = 0; s < i.length; s++) i[s] = [];
    for (var o, u, l = 0; l < r.length; l++) {
      o = -1 / 0, u = -1;
      for (var c = 0; c < r[0].length; c++) r[l][c] > o && (o = r[l][c], u = c);
      i[u].push(e[l]);
    }
    for (var f = 0; f < i.length; f++) i[f] = a.collection(i[f]);
    return i;
  }, Xl = function(e) {
    var r = this.cy(), n = this.nodes(), a = Uu(e), i, s, o, u, l;
    u = new Array(n.length);
    for (var c = 0; c < n.length; c++) u[c] = new Array(a.k);
    o = new Array(n.length);
    for (var f = 0; f < n.length; f++) o[f] = new Array(a.k);
    for (var d = 0; d < n.length; d++) {
      for (var v = 0, h = 0; h < a.k; h++) o[d][h] = Math.random(), v += o[d][h];
      for (var y = 0; y < a.k; y++) o[d][y] = o[d][y] / v;
    }
    s = new Array(a.k);
    for (var p = 0; p < a.k; p++) s[p] = new Array(a.attributes.length);
    l = new Array(n.length);
    for (var g = 0; g < n.length; g++) l[g] = new Array(a.k);
    for (var b = true, m = 0; b && m < a.maxIterations; ) b = false, sy(s, n, o, l, a), oy(o, u, s, n, a), ry(o, u, a.sensitivityThreshold) || (b = true), m++;
    return i = uy(n, o, a, r), {
      clusters: i,
      degreeOfMembership: o
    };
  }, ly = {
    kMeans: ay,
    kMedoids: iy,
    fuzzyCMeans: Xl,
    fcm: Xl
  }, cy = At({
    distance: "euclidean",
    linkage: "min",
    mode: "threshold",
    threshold: 1 / 0,
    addDendrogram: false,
    dendrogramDepth: 0,
    attributes: []
  }), fy = {
    single: "min",
    complete: "max"
  }, dy = function(e) {
    var r = cy(e), n = fy[r.linkage];
    return n != null && (r.linkage = n), r;
  }, Jl = function(e, r, n, a, i) {
    for (var s = 0, o = 1 / 0, u, l = i.attributes, c = function(C, R) {
      return Qi(i.distance, l.length, function(A) {
        return l[A](C);
      }, function(A) {
        return l[A](R);
      }, C, R);
    }, f = 0; f < e.length; f++) {
      var d = e[f].key, v = n[d][a[d]];
      v < o && (s = d, o = v);
    }
    if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1) return false;
    var h = r[s], y = r[a[s]], p;
    i.mode === "dendrogram" ? p = {
      left: h,
      right: y,
      key: h.key
    } : p = {
      value: h.value.concat(y.value),
      key: h.key
    }, e[h.index] = p, e.splice(y.index, 1), r[h.key] = p;
    for (var g = 0; g < e.length; g++) {
      var b = e[g];
      h.key === b.key ? u = 1 / 0 : i.linkage === "min" ? (u = n[h.key][b.key], n[h.key][b.key] > n[y.key][b.key] && (u = n[y.key][b.key])) : i.linkage === "max" ? (u = n[h.key][b.key], n[h.key][b.key] < n[y.key][b.key] && (u = n[y.key][b.key])) : i.linkage === "mean" ? u = (n[h.key][b.key] * h.size + n[y.key][b.key] * y.size) / (h.size + y.size) : i.mode === "dendrogram" ? u = c(b.value, h.value) : u = c(b.value[0], h.value[0]), n[h.key][b.key] = n[b.key][h.key] = u;
    }
    for (var m = 0; m < e.length; m++) {
      var x = e[m].key;
      if (a[x] === h.key || a[x] === y.key) {
        for (var E = x, S = 0; S < e.length; S++) {
          var w = e[S].key;
          n[x][w] < n[x][E] && (E = w);
        }
        a[x] = E;
      }
      e[m].index = m;
    }
    return h.key = y.key = h.index = y.index = null, true;
  }, Mn = function(e, r, n) {
    e && (e.value ? r.push(e.value) : (e.left && Mn(e.left, r), e.right && Mn(e.right, r)));
  }, lu = function(e, r) {
    if (!e) return "";
    if (e.left && e.right) {
      var n = lu(e.left, r), a = lu(e.right, r), i = r.add({
        group: "nodes",
        data: {
          id: n + "," + a
        }
      });
      return r.add({
        group: "edges",
        data: {
          source: n,
          target: i.id()
        }
      }), r.add({
        group: "edges",
        data: {
          source: a,
          target: i.id()
        }
      }), i.id();
    } else if (e.value) return e.value.id();
  }, cu = function(e, r, n) {
    if (!e) return [];
    var a = [], i = [], s = [];
    return r === 0 ? (e.left && Mn(e.left, a), e.right && Mn(e.right, i), s = a.concat(i), [
      n.collection(s)
    ]) : r === 1 ? e.value ? [
      n.collection(e.value)
    ] : (e.left && Mn(e.left, a), e.right && Mn(e.right, i), [
      n.collection(a),
      n.collection(i)
    ]) : e.value ? [
      n.collection(e.value)
    ] : (e.left && (a = cu(e.left, r - 1, n)), e.right && (i = cu(e.right, r - 1, n)), a.concat(i));
  }, Ql = function(e) {
    for (var r = this.cy(), n = this.nodes(), a = dy(e), i = a.attributes, s = function(m, x) {
      return Qi(a.distance, i.length, function(E) {
        return i[E](m);
      }, function(E) {
        return i[E](x);
      }, m, x);
    }, o = [], u = [], l = [], c = [], f = 0; f < n.length; f++) {
      var d = {
        value: a.mode === "dendrogram" ? n[f] : [
          n[f]
        ],
        key: f,
        index: f
      };
      o[f] = d, c[f] = d, u[f] = [], l[f] = 0;
    }
    for (var v = 0; v < o.length; v++) for (var h = 0; h <= v; h++) {
      var y = void 0;
      a.mode === "dendrogram" ? y = v === h ? 1 / 0 : s(o[v].value, o[h].value) : y = v === h ? 1 / 0 : s(o[v].value[0], o[h].value[0]), u[v][h] = y, u[h][v] = y, y < u[v][l[v]] && (l[v] = h);
    }
    for (var p = Jl(o, c, u, l, a); p; ) p = Jl(o, c, u, l, a);
    var g;
    return a.mode === "dendrogram" ? (g = cu(o[0], a.dendrogramDepth, r), a.addDendrogram && lu(o[0], r)) : (g = new Array(o.length), o.forEach(function(b, m) {
      b.key = b.index = null, g[m] = r.collection(b.value);
    })), g;
  }, vy = {
    hierarchicalClustering: Ql,
    hca: Ql
  }, hy = At({
    distance: "euclidean",
    preference: "median",
    damping: 0.8,
    maxIterations: 1e3,
    minIterations: 100,
    attributes: []
  }), gy = function(e) {
    var r = e.damping, n = e.preference;
    0.5 <= r && r < 1 || tt("Damping must range on [0.5, 1).  Got: ".concat(r));
    var a = [
      "median",
      "mean",
      "min",
      "max"
    ];
    return a.some(function(i) {
      return i === n;
    }) || ae(n) || tt("Preference must be one of [".concat(a.map(function(i) {
      return "'".concat(i, "'");
    }).join(", "), "] or a number.  Got: ").concat(n)), hy(e);
  }, py = function(e, r, n, a) {
    var i = function(o, u) {
      return a[u](o);
    };
    return -Qi(e, a.length, function(s) {
      return i(r, s);
    }, function(s) {
      return i(n, s);
    }, r, n);
  }, my = function(e, r) {
    var n = null;
    return r === "median" ? n = gm(e) : r === "mean" ? n = hm(e) : r === "min" ? n = dm(e) : r === "max" ? n = vm(e) : n = r, n;
  }, yy = function(e, r, n) {
    for (var a = [], i = 0; i < e; i++) r[i * e + i] + n[i * e + i] > 0 && a.push(i);
    return a;
  }, ec = function(e, r, n) {
    for (var a = [], i = 0; i < e; i++) {
      for (var s = -1, o = -1 / 0, u = 0; u < n.length; u++) {
        var l = n[u];
        r[i * e + l] > o && (s = l, o = r[i * e + l]);
      }
      s > 0 && a.push(s);
    }
    for (var c = 0; c < n.length; c++) a[n[c]] = n[c];
    return a;
  }, by = function(e, r, n) {
    for (var a = ec(e, r, n), i = 0; i < n.length; i++) {
      for (var s = [], o = 0; o < a.length; o++) a[o] === n[i] && s.push(o);
      for (var u = -1, l = -1 / 0, c = 0; c < s.length; c++) {
        for (var f = 0, d = 0; d < s.length; d++) f += r[s[d] * e + s[c]];
        f > l && (u = c, l = f);
      }
      n[i] = s[u];
    }
    return a = ec(e, r, n), a;
  }, tc = function(e) {
    for (var r = this.cy(), n = this.nodes(), a = gy(e), i = {}, s = 0; s < n.length; s++) i[n[s].id()] = s;
    var o, u, l, c, f, d;
    o = n.length, u = o * o, l = new Array(u);
    for (var v = 0; v < u; v++) l[v] = -1 / 0;
    for (var h = 0; h < o; h++) for (var y = 0; y < o; y++) h !== y && (l[h * o + y] = py(a.distance, n[h], n[y], a.attributes));
    c = my(l, a.preference);
    for (var p = 0; p < o; p++) l[p * o + p] = c;
    f = new Array(u);
    for (var g = 0; g < u; g++) f[g] = 0;
    d = new Array(u);
    for (var b = 0; b < u; b++) d[b] = 0;
    for (var m = new Array(o), x = new Array(o), E = new Array(o), S = 0; S < o; S++) m[S] = 0, x[S] = 0, E[S] = 0;
    for (var w = new Array(o * a.minIterations), T = 0; T < w.length; T++) w[T] = 0;
    var C;
    for (C = 0; C < a.maxIterations; C++) {
      for (var R = 0; R < o; R++) {
        for (var A = -1 / 0, P = -1 / 0, k = -1, I = 0, M = 0; M < o; M++) m[M] = f[R * o + M], I = d[R * o + M] + l[R * o + M], I >= A ? (P = A, A = I, k = M) : I > P && (P = I);
        for (var D = 0; D < o; D++) f[R * o + D] = (1 - a.damping) * (l[R * o + D] - A) + a.damping * m[D];
        f[R * o + k] = (1 - a.damping) * (l[R * o + k] - P) + a.damping * m[k];
      }
      for (var B = 0; B < o; B++) {
        for (var O = 0, z = 0; z < o; z++) m[z] = d[z * o + B], x[z] = Math.max(0, f[z * o + B]), O += x[z];
        O -= x[B], x[B] = f[B * o + B], O += x[B];
        for (var U = 0; U < o; U++) d[U * o + B] = (1 - a.damping) * Math.min(0, O - x[U]) + a.damping * m[U];
        d[B * o + B] = (1 - a.damping) * (O - x[B]) + a.damping * m[B];
      }
      for (var N = 0, L = 0; L < o; L++) {
        var H = d[L * o + L] + f[L * o + L] > 0 ? 1 : 0;
        w[C % a.minIterations * o + L] = H, N += H;
      }
      if (N > 0 && (C >= a.minIterations - 1 || C == a.maxIterations - 1)) {
        for (var Y = 0, K = 0; K < o; K++) {
          E[K] = 0;
          for (var Q = 0; Q < a.minIterations; Q++) E[K] += w[Q * o + K];
          (E[K] === 0 || E[K] === a.minIterations) && Y++;
        }
        if (Y === o) break;
      }
    }
    for (var re = yy(o, f, d), ie = by(o, l, re), ee = {}, F = 0; F < re.length; F++) ee[re[F]] = [];
    for (var V = 0; V < n.length; V++) {
      var q = i[n[V].id()], X = ie[q];
      X != null && ee[X].push(n[V]);
    }
    for (var ne = new Array(re.length), he = 0; he < re.length; he++) ne[he] = r.collection(ee[re[he]]);
    return ne;
  }, wy = {
    affinityPropagation: tc,
    ap: tc
  }, xy = At({
    root: void 0,
    directed: false
  }), Ey = {
    hierholzer: function(e) {
      if (!ze(e)) {
        var r = arguments;
        e = {
          root: r[0],
          directed: r[1]
        };
      }
      var n = xy(e), a = n.root, i = n.directed, s = this, o = false, u, l, c;
      a && (c = me(a) ? this.filter(a)[0].id() : a[0].id());
      var f = {}, d = {};
      i ? s.forEach(function(b) {
        var m = b.id();
        if (b.isNode()) {
          var x = b.indegree(true), E = b.outdegree(true), S = x - E, w = E - x;
          S == 1 ? u ? o = true : u = m : w == 1 ? l ? o = true : l = m : (w > 1 || S > 1) && (o = true), f[m] = [], b.outgoers().forEach(function(T) {
            T.isEdge() && f[m].push(T.id());
          });
        } else d[m] = [
          void 0,
          b.target().id()
        ];
      }) : s.forEach(function(b) {
        var m = b.id();
        if (b.isNode()) {
          var x = b.degree(true);
          x % 2 && (u ? l ? o = true : l = m : u = m), f[m] = [], b.connectedEdges().forEach(function(E) {
            return f[m].push(E.id());
          });
        } else d[m] = [
          b.source().id(),
          b.target().id()
        ];
      });
      var v = {
        found: false,
        trail: void 0
      };
      if (o) return v;
      if (l && u) if (i) {
        if (c && l != c) return v;
        c = l;
      } else {
        if (c && l != c && u != c) return v;
        c || (c = l);
      }
      else c || (c = s[0].id());
      var h = function(m) {
        for (var x = m, E = [
          m
        ], S, w, T; f[x].length; ) S = f[x].shift(), w = d[S][0], T = d[S][1], x != T ? (f[T] = f[T].filter(function(C) {
          return C != S;
        }), x = T) : !i && x != w && (f[w] = f[w].filter(function(C) {
          return C != S;
        }), x = w), E.unshift(S), E.unshift(x);
        return E;
      }, y = [], p = [];
      for (p = h(c); p.length != 1; ) f[p[0]].length == 0 ? (y.unshift(s.getElementById(p.shift())), y.unshift(s.getElementById(p.shift()))) : p = h(p.shift()).concat(p);
      y.unshift(s.getElementById(p.shift()));
      for (var g in f) if (f[g].length) return v;
      return v.found = true, v.trail = this.spawn(y, true), v;
    }
  }, ti = function() {
    var e = this, r = {}, n = 0, a = 0, i = [], s = [], o = {}, u = function(d, v) {
      for (var h = s.length - 1, y = [], p = e.spawn(); s[h].x != d || s[h].y != v; ) y.push(s.pop().edge), h--;
      y.push(s.pop().edge), y.forEach(function(g) {
        var b = g.connectedNodes().intersection(e);
        p.merge(g), b.forEach(function(m) {
          var x = m.id(), E = m.connectedEdges().intersection(e);
          p.merge(m), r[x].cutVertex ? p.merge(E.filter(function(S) {
            return S.isLoop();
          })) : p.merge(E);
        });
      }), i.push(p);
    }, l = function(d, v, h) {
      d === h && (a += 1), r[v] = {
        id: n,
        low: n++,
        cutVertex: false
      };
      var y = e.getElementById(v).connectedEdges().intersection(e);
      if (y.size() === 0) i.push(e.spawn(e.getElementById(v)));
      else {
        var p, g, b, m;
        y.forEach(function(x) {
          p = x.source().id(), g = x.target().id(), b = p === v ? g : p, b !== h && (m = x.id(), o[m] || (o[m] = true, s.push({
            x: v,
            y: b,
            edge: x
          })), b in r ? r[v].low = Math.min(r[v].low, r[b].id) : (l(d, b, v), r[v].low = Math.min(r[v].low, r[b].low), r[v].id <= r[b].low && (r[v].cutVertex = true, u(v, b))));
        });
      }
    };
    e.forEach(function(f) {
      if (f.isNode()) {
        var d = f.id();
        d in r || (a = 0, l(d, d), r[d].cutVertex = a > 1);
      }
    });
    var c = Object.keys(r).filter(function(f) {
      return r[f].cutVertex;
    }).map(function(f) {
      return e.getElementById(f);
    });
    return {
      cut: e.spawn(c),
      components: i
    };
  }, Ty = {
    hopcroftTarjanBiconnected: ti,
    htbc: ti,
    htb: ti,
    hopcroftTarjanBiconnectedComponents: ti
  }, ri = function() {
    var e = this, r = {}, n = 0, a = [], i = [], s = e.spawn(e), o = function(l) {
      i.push(l), r[l] = {
        index: n,
        low: n++,
        explored: false
      };
      var c = e.getElementById(l).connectedEdges().intersection(e);
      if (c.forEach(function(y) {
        var p = y.target().id();
        p !== l && (p in r || o(p), r[p].explored || (r[l].low = Math.min(r[l].low, r[p].low)));
      }), r[l].index === r[l].low) {
        for (var f = e.spawn(); ; ) {
          var d = i.pop();
          if (f.merge(e.getElementById(d)), r[d].low = r[l].index, r[d].explored = true, d === l) break;
        }
        var v = f.edgesWith(f), h = f.merge(v);
        a.push(h), s = s.difference(h);
      }
    };
    return e.forEach(function(u) {
      if (u.isNode()) {
        var l = u.id();
        l in r || o(l);
      }
    }), {
      cut: s,
      components: a
    };
  }, Sy = {
    tarjanStronglyConnected: ri,
    tsc: ri,
    tscc: ri,
    tarjanStronglyConnectedComponents: ri
  }, nv = {};
  [
    Ea,
    em,
    tm,
    nm,
    im,
    om,
    cm,
    zm,
    Ln,
    Fn,
    uu,
    jm,
    ly,
    vy,
    wy,
    Ey,
    Ty,
    Sy
  ].forEach(function(t) {
    Ee(nv, t);
  });
  var av = 0, iv = 1, sv = 2, sr = function(e) {
    if (!(this instanceof sr)) return new sr(e);
    this.id = "Thenable/1.0.7", this.state = av, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
      then: this.then.bind(this)
    }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
  };
  sr.prototype = {
    fulfill: function(e) {
      return rc(this, iv, "fulfillValue", e);
    },
    reject: function(e) {
      return rc(this, sv, "rejectReason", e);
    },
    then: function(e, r) {
      var n = this, a = new sr();
      return n.onFulfilled.push(ac(e, a, "fulfill")), n.onRejected.push(ac(r, a, "reject")), ov(n), a.proxy;
    }
  };
  var rc = function(e, r, n, a) {
    return e.state === av && (e.state = r, e[n] = a, ov(e)), e;
  }, ov = function(e) {
    e.state === iv ? nc(e, "onFulfilled", e.fulfillValue) : e.state === sv && nc(e, "onRejected", e.rejectReason);
  }, nc = function(e, r, n) {
    if (e[r].length !== 0) {
      var a = e[r];
      e[r] = [];
      var i = function() {
        for (var o = 0; o < a.length; o++) a[o](n);
      };
      typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
    }
  }, ac = function(e, r, n) {
    return function(a) {
      if (typeof e != "function") r[n].call(r, a);
      else {
        var i;
        try {
          i = e(a);
        } catch (s) {
          r.reject(s);
          return;
        }
        uv(r, i);
      }
    };
  }, uv = function(e, r) {
    if (e === r || e.proxy === r) {
      e.reject(new TypeError("cannot resolve promise with itself"));
      return;
    }
    var n;
    if (mt(r) === "object" && r !== null || typeof r == "function") try {
      n = r.then;
    } catch (i) {
      e.reject(i);
      return;
    }
    if (typeof n == "function") {
      var a = false;
      try {
        n.call(r, function(i) {
          a || (a = true, i === r ? e.reject(new TypeError("circular thenable chain")) : uv(e, i));
        }, function(i) {
          a || (a = true, e.reject(i));
        });
      } catch (i) {
        a || e.reject(i);
      }
      return;
    }
    e.fulfill(r);
  };
  sr.all = function(t) {
    return new sr(function(e, r) {
      for (var n = new Array(t.length), a = 0, i = function(u, l) {
        n[u] = l, a++, a === t.length && e(n);
      }, s = 0; s < t.length; s++) (function(o) {
        var u = t[o], l = u != null && u.then != null;
        if (l) u.then(function(f) {
          i(o, f);
        }, function(f) {
          r(f);
        });
        else {
          var c = u;
          i(o, c);
        }
      })(s);
    });
  };
  sr.resolve = function(t) {
    return new sr(function(e, r) {
      e(t);
    });
  };
  sr.reject = function(t) {
    return new sr(function(e, r) {
      r(t);
    });
  };
  var Yn = typeof Promise < "u" ? Promise : sr, fu = function(e, r, n) {
    var a = Bu(e), i = !a, s = this._private = Ee({
      duration: 1e3
    }, r, n);
    if (s.target = e, s.style = s.style || s.css, s.started = false, s.playing = false, s.hooked = false, s.applying = false, s.progress = 0, s.completes = [], s.frames = [], s.complete && at(s.complete) && s.completes.push(s.complete), i) {
      var o = e.position();
      s.startPosition = s.startPosition || {
        x: o.x,
        y: o.y
      }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
    }
    if (a) {
      var u = e.pan();
      s.startPan = {
        x: u.x,
        y: u.y
      }, s.startZoom = e.zoom();
    }
    this.length = 1, this[0] = this;
  }, hn = fu.prototype;
  Ee(hn, {
    instanceString: function() {
      return "animation";
    },
    hook: function() {
      var e = this._private;
      if (!e.hooked) {
        var r, n = e.target._private.animation;
        e.queue ? r = n.queue : r = n.current, r.push(this), Wt(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = true;
      }
      return this;
    },
    play: function() {
      var e = this._private;
      return e.progress === 1 && (e.progress = 0), e.playing = true, e.started = false, e.stopped = false, this.hook(), this;
    },
    playing: function() {
      return this._private.playing;
    },
    apply: function() {
      var e = this._private;
      return e.applying = true, e.started = false, e.stopped = false, this.hook(), this;
    },
    applying: function() {
      return this._private.applying;
    },
    pause: function() {
      var e = this._private;
      return e.playing = false, e.started = false, this;
    },
    stop: function() {
      var e = this._private;
      return e.playing = false, e.started = false, e.stopped = true, this;
    },
    rewind: function() {
      return this.progress(0);
    },
    fastforward: function() {
      return this.progress(1);
    },
    time: function(e) {
      var r = this._private;
      return e === void 0 ? r.progress * r.duration : this.progress(e / r.duration);
    },
    progress: function(e) {
      var r = this._private, n = r.playing;
      return e === void 0 ? r.progress : (n && this.pause(), r.progress = e, r.started = false, n && this.play(), this);
    },
    completed: function() {
      return this._private.progress === 1;
    },
    reverse: function() {
      var e = this._private, r = e.playing;
      r && this.pause(), e.progress = 1 - e.progress, e.started = false;
      var n = function(l, c) {
        var f = e[l];
        f != null && (e[l] = e[c], e[c] = f);
      };
      if (n("zoom", "startZoom"), n("pan", "startPan"), n("position", "startPosition"), e.style) for (var a = 0; a < e.style.length; a++) {
        var i = e.style[a], s = i.name, o = e.startStyle[s];
        e.startStyle[s] = i, e.style[a] = o;
      }
      return r && this.play(), this;
    },
    promise: function(e) {
      var r = this._private, n;
      switch (e) {
        case "frame":
          n = r.frames;
          break;
        default:
        case "complete":
        case "completed":
          n = r.completes;
      }
      return new Yn(function(a, i) {
        n.push(function() {
          a();
        });
      });
    }
  });
  hn.complete = hn.completed;
  hn.run = hn.play;
  hn.running = hn.playing;
  var Cy = {
    animated: function() {
      return function() {
        var r = this, n = r.length !== void 0, a = n ? r : [
          r
        ], i = this._private.cy || this;
        if (!i.styleEnabled()) return false;
        var s = a[0];
        if (s) return s._private.animation.current.length > 0;
      };
    },
    clearQueue: function() {
      return function() {
        var r = this, n = r.length !== void 0, a = n ? r : [
          r
        ], i = this._private.cy || this;
        if (!i.styleEnabled()) return this;
        for (var s = 0; s < a.length; s++) {
          var o = a[s];
          o._private.animation.queue = [];
        }
        return this;
      };
    },
    delay: function() {
      return function(r, n) {
        var a = this._private.cy || this;
        return a.styleEnabled() ? this.animate({
          delay: r,
          duration: r,
          complete: n
        }) : this;
      };
    },
    delayAnimation: function() {
      return function(r, n) {
        var a = this._private.cy || this;
        return a.styleEnabled() ? this.animation({
          delay: r,
          duration: r,
          complete: n
        }) : this;
      };
    },
    animation: function() {
      return function(r, n) {
        var a = this, i = a.length !== void 0, s = i ? a : [
          a
        ], o = this._private.cy || this, u = !i, l = !u;
        if (!o.styleEnabled()) return this;
        var c = o.style();
        r = Ee({}, r, n);
        var f = Object.keys(r).length === 0;
        if (f) return new fu(s[0], r);
        switch (r.duration === void 0 && (r.duration = 400), r.duration) {
          case "slow":
            r.duration = 600;
            break;
          case "fast":
            r.duration = 200;
            break;
        }
        if (l && (r.style = c.getPropsList(r.style || r.css), r.css = void 0), l && r.renderedPosition != null) {
          var d = r.renderedPosition, v = o.pan(), h = o.zoom();
          r.position = Hd(d, h, v);
        }
        if (u && r.panBy != null) {
          var y = r.panBy, p = o.pan();
          r.pan = {
            x: p.x + y.x,
            y: p.y + y.y
          };
        }
        var g = r.center || r.centre;
        if (u && g != null) {
          var b = o.getCenterPan(g.eles, r.zoom);
          b != null && (r.pan = b);
        }
        if (u && r.fit != null) {
          var m = r.fit, x = o.getFitViewport(m.eles || m.boundingBox, m.padding);
          x != null && (r.pan = x.pan, r.zoom = x.zoom);
        }
        if (u && ze(r.zoom)) {
          var E = o.getZoomedViewport(r.zoom);
          E != null ? (E.zoomed && (r.zoom = E.zoom), E.panned && (r.pan = E.pan)) : r.zoom = null;
        }
        return new fu(s[0], r);
      };
    },
    animate: function() {
      return function(r, n) {
        var a = this, i = a.length !== void 0, s = i ? a : [
          a
        ], o = this._private.cy || this;
        if (!o.styleEnabled()) return this;
        n && (r = Ee({}, r, n));
        for (var u = 0; u < s.length; u++) {
          var l = s[u], c = l.animated() && (r.queue === void 0 || r.queue), f = l.animation(r, c ? {
            queue: true
          } : void 0);
          f.play();
        }
        return this;
      };
    },
    stop: function() {
      return function(r, n) {
        var a = this, i = a.length !== void 0, s = i ? a : [
          a
        ], o = this._private.cy || this;
        if (!o.styleEnabled()) return this;
        for (var u = 0; u < s.length; u++) {
          for (var l = s[u], c = l._private, f = c.animation.current, d = 0; d < f.length; d++) {
            var v = f[d], h = v._private;
            n && (h.duration = 0);
          }
          r && (c.animation.queue = []), n || (c.animation.current = []);
        }
        return o.notify("draw"), this;
      };
    }
  }, $s, ic;
  function es() {
    if (ic) return $s;
    ic = 1;
    var t = Array.isArray;
    return $s = t, $s;
  }
  var Us, sc;
  function Ry() {
    if (sc) return Us;
    sc = 1;
    var t = es(), e = za(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function a(i, s) {
      if (t(i)) return false;
      var o = typeof i;
      return o == "number" || o == "symbol" || o == "boolean" || i == null || e(i) ? true : n.test(i) || !r.test(i) || s != null && i in Object(s);
    }
    return Us = a, Us;
  }
  var qs, oc;
  function Ay() {
    if (oc) return qs;
    oc = 1;
    var t = Ld(), e = Na(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
    function s(o) {
      if (!e(o)) return false;
      var u = t(o);
      return u == n || u == a || u == r || u == i;
    }
    return qs = s, qs;
  }
  var Zs, uc;
  function ky() {
    if (uc) return Zs;
    uc = 1;
    var t = ji(), e = t["__core-js_shared__"];
    return Zs = e, Zs;
  }
  var Gs, lc;
  function Py() {
    if (lc) return Gs;
    lc = 1;
    var t = ky(), e = (function() {
      var n = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
      return n ? "Symbol(src)_1." + n : "";
    })();
    function r(n) {
      return !!e && e in n;
    }
    return Gs = r, Gs;
  }
  var Ws, cc;
  function _y() {
    if (cc) return Ws;
    cc = 1;
    var t = Function.prototype, e = t.toString;
    function r(n) {
      if (n != null) {
        try {
          return e.call(n);
        } catch {
        }
        try {
          return n + "";
        } catch {
        }
      }
      return "";
    }
    return Ws = r, Ws;
  }
  var Hs, fc;
  function Iy() {
    if (fc) return Hs;
    fc = 1;
    var t = Ay(), e = Py(), r = Na(), n = _y(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, l = o.hasOwnProperty, c = RegExp("^" + u.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function f(d) {
      if (!r(d) || e(d)) return false;
      var v = t(d) ? c : i;
      return v.test(n(d));
    }
    return Hs = f, Hs;
  }
  var Ks, dc;
  function By() {
    if (dc) return Ks;
    dc = 1;
    function t(e, r) {
      return e == null ? void 0 : e[r];
    }
    return Ks = t, Ks;
  }
  var Ys, vc;
  function qu() {
    if (vc) return Ys;
    vc = 1;
    var t = Iy(), e = By();
    function r(n, a) {
      var i = e(n, a);
      return t(i) ? i : void 0;
    }
    return Ys = r, Ys;
  }
  var js, hc;
  function ts() {
    if (hc) return js;
    hc = 1;
    var t = qu(), e = t(Object, "create");
    return js = e, js;
  }
  var Xs, gc;
  function My() {
    if (gc) return Xs;
    gc = 1;
    var t = ts();
    function e() {
      this.__data__ = t ? t(null) : {}, this.size = 0;
    }
    return Xs = e, Xs;
  }
  var Js, pc;
  function Dy() {
    if (pc) return Js;
    pc = 1;
    function t(e) {
      var r = this.has(e) && delete this.__data__[e];
      return this.size -= r ? 1 : 0, r;
    }
    return Js = t, Js;
  }
  var Qs, mc;
  function Oy() {
    if (mc) return Qs;
    mc = 1;
    var t = ts(), e = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
    function a(i) {
      var s = this.__data__;
      if (t) {
        var o = s[i];
        return o === e ? void 0 : o;
      }
      return n.call(s, i) ? s[i] : void 0;
    }
    return Qs = a, Qs;
  }
  var eo, yc;
  function Ny() {
    if (yc) return eo;
    yc = 1;
    var t = ts(), e = Object.prototype, r = e.hasOwnProperty;
    function n(a) {
      var i = this.__data__;
      return t ? i[a] !== void 0 : r.call(i, a);
    }
    return eo = n, eo;
  }
  var to, bc;
  function zy() {
    if (bc) return to;
    bc = 1;
    var t = ts(), e = "__lodash_hash_undefined__";
    function r(n, a) {
      var i = this.__data__;
      return this.size += this.has(n) ? 0 : 1, i[n] = t && a === void 0 ? e : a, this;
    }
    return to = r, to;
  }
  var ro, wc;
  function Ly() {
    if (wc) return ro;
    wc = 1;
    var t = My(), e = Dy(), r = Oy(), n = Ny(), a = zy();
    function i(s) {
      var o = -1, u = s == null ? 0 : s.length;
      for (this.clear(); ++o < u; ) {
        var l = s[o];
        this.set(l[0], l[1]);
      }
    }
    return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, ro = i, ro;
  }
  var no, xc;
  function Fy() {
    if (xc) return no;
    xc = 1;
    function t() {
      this.__data__ = [], this.size = 0;
    }
    return no = t, no;
  }
  var ao, Ec;
  function lv() {
    if (Ec) return ao;
    Ec = 1;
    function t(e, r) {
      return e === r || e !== e && r !== r;
    }
    return ao = t, ao;
  }
  var io, Tc;
  function rs() {
    if (Tc) return io;
    Tc = 1;
    var t = lv();
    function e(r, n) {
      for (var a = r.length; a--; ) if (t(r[a][0], n)) return a;
      return -1;
    }
    return io = e, io;
  }
  var so, Sc;
  function Vy() {
    if (Sc) return so;
    Sc = 1;
    var t = rs(), e = Array.prototype, r = e.splice;
    function n(a) {
      var i = this.__data__, s = t(i, a);
      if (s < 0) return false;
      var o = i.length - 1;
      return s == o ? i.pop() : r.call(i, s, 1), --this.size, true;
    }
    return so = n, so;
  }
  var oo, Cc;
  function $y() {
    if (Cc) return oo;
    Cc = 1;
    var t = rs();
    function e(r) {
      var n = this.__data__, a = t(n, r);
      return a < 0 ? void 0 : n[a][1];
    }
    return oo = e, oo;
  }
  var uo, Rc;
  function Uy() {
    if (Rc) return uo;
    Rc = 1;
    var t = rs();
    function e(r) {
      return t(this.__data__, r) > -1;
    }
    return uo = e, uo;
  }
  var lo, Ac;
  function qy() {
    if (Ac) return lo;
    Ac = 1;
    var t = rs();
    function e(r, n) {
      var a = this.__data__, i = t(a, r);
      return i < 0 ? (++this.size, a.push([
        r,
        n
      ])) : a[i][1] = n, this;
    }
    return lo = e, lo;
  }
  var co, kc;
  function Zy() {
    if (kc) return co;
    kc = 1;
    var t = Fy(), e = Vy(), r = $y(), n = Uy(), a = qy();
    function i(s) {
      var o = -1, u = s == null ? 0 : s.length;
      for (this.clear(); ++o < u; ) {
        var l = s[o];
        this.set(l[0], l[1]);
      }
    }
    return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, co = i, co;
  }
  var fo, Pc;
  function Gy() {
    if (Pc) return fo;
    Pc = 1;
    var t = qu(), e = ji(), r = t(e, "Map");
    return fo = r, fo;
  }
  var vo, _c;
  function Wy() {
    if (_c) return vo;
    _c = 1;
    var t = Ly(), e = Zy(), r = Gy();
    function n() {
      this.size = 0, this.__data__ = {
        hash: new t(),
        map: new (r || e)(),
        string: new t()
      };
    }
    return vo = n, vo;
  }
  var ho, Ic;
  function Hy() {
    if (Ic) return ho;
    Ic = 1;
    function t(e) {
      var r = typeof e;
      return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
    }
    return ho = t, ho;
  }
  var go, Bc;
  function ns() {
    if (Bc) return go;
    Bc = 1;
    var t = Hy();
    function e(r, n) {
      var a = r.__data__;
      return t(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
    }
    return go = e, go;
  }
  var po, Mc;
  function Ky() {
    if (Mc) return po;
    Mc = 1;
    var t = ns();
    function e(r) {
      var n = t(this, r).delete(r);
      return this.size -= n ? 1 : 0, n;
    }
    return po = e, po;
  }
  var mo, Dc;
  function Yy() {
    if (Dc) return mo;
    Dc = 1;
    var t = ns();
    function e(r) {
      return t(this, r).get(r);
    }
    return mo = e, mo;
  }
  var yo, Oc;
  function jy() {
    if (Oc) return yo;
    Oc = 1;
    var t = ns();
    function e(r) {
      return t(this, r).has(r);
    }
    return yo = e, yo;
  }
  var bo, Nc;
  function Xy() {
    if (Nc) return bo;
    Nc = 1;
    var t = ns();
    function e(r, n) {
      var a = t(this, r), i = a.size;
      return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
    }
    return bo = e, bo;
  }
  var wo, zc;
  function Jy() {
    if (zc) return wo;
    zc = 1;
    var t = Wy(), e = Ky(), r = Yy(), n = jy(), a = Xy();
    function i(s) {
      var o = -1, u = s == null ? 0 : s.length;
      for (this.clear(); ++o < u; ) {
        var l = s[o];
        this.set(l[0], l[1]);
      }
    }
    return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, wo = i, wo;
  }
  var xo, Lc;
  function Qy() {
    if (Lc) return xo;
    Lc = 1;
    var t = Jy(), e = "Expected a function";
    function r(n, a) {
      if (typeof n != "function" || a != null && typeof a != "function") throw new TypeError(e);
      var i = function() {
        var s = arguments, o = a ? a.apply(this, s) : s[0], u = i.cache;
        if (u.has(o)) return u.get(o);
        var l = n.apply(this, s);
        return i.cache = u.set(o, l) || u, l;
      };
      return i.cache = new (r.Cache || t)(), i;
    }
    return r.Cache = t, xo = r, xo;
  }
  var Eo, Fc;
  function e0() {
    if (Fc) return Eo;
    Fc = 1;
    var t = Qy(), e = 500;
    function r(n) {
      var a = t(n, function(s) {
        return i.size === e && i.clear(), s;
      }), i = a.cache;
      return a;
    }
    return Eo = r, Eo;
  }
  var To, Vc;
  function cv() {
    if (Vc) return To;
    Vc = 1;
    var t = e0(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = t(function(a) {
      var i = [];
      return a.charCodeAt(0) === 46 && i.push(""), a.replace(e, function(s, o, u, l) {
        i.push(u ? l.replace(r, "$1") : o || s);
      }), i;
    });
    return To = n, To;
  }
  var So, $c;
  function fv() {
    if ($c) return So;
    $c = 1;
    function t(e, r) {
      for (var n = -1, a = e == null ? 0 : e.length, i = Array(a); ++n < a; ) i[n] = r(e[n], n, e);
      return i;
    }
    return So = t, So;
  }
  var Co, Uc;
  function t0() {
    if (Uc) return Co;
    Uc = 1;
    var t = Du(), e = fv(), r = es(), n = za(), a = t ? t.prototype : void 0, i = a ? a.toString : void 0;
    function s(o) {
      if (typeof o == "string") return o;
      if (r(o)) return e(o, s) + "";
      if (n(o)) return i ? i.call(o) : "";
      var u = o + "";
      return u == "0" && 1 / o == -1 / 0 ? "-0" : u;
    }
    return Co = s, Co;
  }
  var Ro, qc;
  function dv() {
    if (qc) return Ro;
    qc = 1;
    var t = t0();
    function e(r) {
      return r == null ? "" : t(r);
    }
    return Ro = e, Ro;
  }
  var Ao, Zc;
  function vv() {
    if (Zc) return Ao;
    Zc = 1;
    var t = es(), e = Ry(), r = cv(), n = dv();
    function a(i, s) {
      return t(i) ? i : e(i, s) ? [
        i
      ] : r(n(i));
    }
    return Ao = a, Ao;
  }
  var ko, Gc;
  function Zu() {
    if (Gc) return ko;
    Gc = 1;
    var t = za();
    function e(r) {
      if (typeof r == "string" || t(r)) return r;
      var n = r + "";
      return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
    }
    return ko = e, ko;
  }
  var Po, Wc;
  function r0() {
    if (Wc) return Po;
    Wc = 1;
    var t = vv(), e = Zu();
    function r(n, a) {
      a = t(a, n);
      for (var i = 0, s = a.length; n != null && i < s; ) n = n[e(a[i++])];
      return i && i == s ? n : void 0;
    }
    return Po = r, Po;
  }
  var _o, Hc;
  function n0() {
    if (Hc) return _o;
    Hc = 1;
    var t = r0();
    function e(r, n, a) {
      var i = r == null ? void 0 : t(r, n);
      return i === void 0 ? a : i;
    }
    return _o = e, _o;
  }
  var a0 = n0(), i0 = Oa(a0), Io, Kc;
  function s0() {
    if (Kc) return Io;
    Kc = 1;
    var t = qu(), e = (function() {
      try {
        var r = t(Object, "defineProperty");
        return r({}, "", {}), r;
      } catch {
      }
    })();
    return Io = e, Io;
  }
  var Bo, Yc;
  function o0() {
    if (Yc) return Bo;
    Yc = 1;
    var t = s0();
    function e(r, n, a) {
      n == "__proto__" && t ? t(r, n, {
        configurable: true,
        enumerable: true,
        value: a,
        writable: true
      }) : r[n] = a;
    }
    return Bo = e, Bo;
  }
  var Mo, jc;
  function u0() {
    if (jc) return Mo;
    jc = 1;
    var t = o0(), e = lv(), r = Object.prototype, n = r.hasOwnProperty;
    function a(i, s, o) {
      var u = i[s];
      (!(n.call(i, s) && e(u, o)) || o === void 0 && !(s in i)) && t(i, s, o);
    }
    return Mo = a, Mo;
  }
  var Do, Xc;
  function l0() {
    if (Xc) return Do;
    Xc = 1;
    var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
    function r(n, a) {
      var i = typeof n;
      return a = a ?? t, !!a && (i == "number" || i != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < a;
    }
    return Do = r, Do;
  }
  var Oo, Jc;
  function c0() {
    if (Jc) return Oo;
    Jc = 1;
    var t = u0(), e = vv(), r = l0(), n = Na(), a = Zu();
    function i(s, o, u, l) {
      if (!n(s)) return s;
      o = e(o, s);
      for (var c = -1, f = o.length, d = f - 1, v = s; v != null && ++c < f; ) {
        var h = a(o[c]), y = u;
        if (h === "__proto__" || h === "constructor" || h === "prototype") return s;
        if (c != d) {
          var p = v[h];
          y = l ? l(p, h, v) : void 0, y === void 0 && (y = n(p) ? p : r(o[c + 1]) ? [] : {});
        }
        t(v, h, y), v = v[h];
      }
      return s;
    }
    return Oo = i, Oo;
  }
  var No, Qc;
  function f0() {
    if (Qc) return No;
    Qc = 1;
    var t = c0();
    function e(r, n, a) {
      return r == null ? r : t(r, n, a);
    }
    return No = e, No;
  }
  var d0 = f0(), v0 = Oa(d0), zo, ef;
  function h0() {
    if (ef) return zo;
    ef = 1;
    function t(e, r) {
      var n = -1, a = e.length;
      for (r || (r = Array(a)); ++n < a; ) r[n] = e[n];
      return r;
    }
    return zo = t, zo;
  }
  var Lo, tf;
  function g0() {
    if (tf) return Lo;
    tf = 1;
    var t = fv(), e = h0(), r = es(), n = za(), a = cv(), i = Zu(), s = dv();
    function o(u) {
      return r(u) ? t(u, i) : n(u) ? [
        u
      ] : e(a(s(u)));
    }
    return Lo = o, Lo;
  }
  var p0 = g0(), m0 = Oa(p0), y0 = {
    data: function(e) {
      var r = {
        field: "data",
        bindingEvent: "data",
        allowBinding: false,
        allowSetting: false,
        allowGetting: false,
        settingEvent: "data",
        settingTriggersEvent: false,
        triggerFnName: "trigger",
        immutableKeys: {},
        updateStyle: false,
        beforeGet: function(a) {
        },
        beforeSet: function(a, i) {
        },
        onSet: function(a) {
        },
        canSet: function(a) {
          return true;
        }
      };
      return e = Ee({}, r, e), function(a, i) {
        var s = e, o = this, u = o.length !== void 0, l = u ? o : [
          o
        ], c = u ? o[0] : o;
        if (me(a)) {
          var f = a.indexOf(".") !== -1, d = f && m0(a);
          if (s.allowGetting && i === void 0) {
            var v;
            return c && (s.beforeGet(c), d && c._private[s.field][a] === void 0 ? v = i0(c._private[s.field], d) : v = c._private[s.field][a]), v;
          } else if (s.allowSetting && i !== void 0) {
            var h = !s.immutableKeys[a];
            if (h) {
              var y = kd({}, a, i);
              s.beforeSet(o, y);
              for (var p = 0, g = l.length; p < g; p++) {
                var b = l[p];
                s.canSet(b) && (d && c._private[s.field][a] === void 0 ? v0(b._private[s.field], d, i) : b._private[s.field][a] = i);
              }
              s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
            }
          }
        } else if (s.allowSetting && ze(a)) {
          var m = a, x, E, S = Object.keys(m);
          s.beforeSet(o, m);
          for (var w = 0; w < S.length; w++) {
            x = S[w], E = m[x];
            var T = !s.immutableKeys[x];
            if (T) for (var C = 0; C < l.length; C++) {
              var R = l[C];
              s.canSet(R) && (R._private[s.field][x] = E);
            }
          }
          s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
        } else if (s.allowBinding && at(a)) {
          var A = a;
          o.on(s.bindingEvent, A);
        } else if (s.allowGetting && a === void 0) {
          var P;
          return c && (s.beforeGet(c), P = c._private[s.field]), P;
        }
        return o;
      };
    },
    removeData: function(e) {
      var r = {
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: false,
        immutableKeys: {}
      };
      return e = Ee({}, r, e), function(a) {
        var i = e, s = this, o = s.length !== void 0, u = o ? s : [
          s
        ];
        if (me(a)) {
          for (var l = a.split(/\s+/), c = l.length, f = 0; f < c; f++) {
            var d = l[f];
            if (!Nr(d)) {
              var v = !i.immutableKeys[d];
              if (v) for (var h = 0, y = u.length; h < y; h++) u[h]._private[i.field][d] = void 0;
            }
          }
          i.triggerEvent && s[i.triggerFnName](i.event);
        } else if (a === void 0) {
          for (var p = 0, g = u.length; p < g; p++) for (var b = u[p]._private[i.field], m = Object.keys(b), x = 0; x < m.length; x++) {
            var E = m[x], S = !i.immutableKeys[E];
            S && (b[E] = void 0);
          }
          i.triggerEvent && s[i.triggerFnName](i.event);
        }
        return s;
      };
    }
  }, b0 = {
    eventAliasesOn: function(e) {
      var r = e;
      r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(n, a) {
        var i = this, s = Array.prototype.slice.call(arguments, 0);
        return new Yn(function(o, u) {
          var l = function(v) {
            i.off.apply(i, f), o(v);
          }, c = s.concat([
            l
          ]), f = c.concat([]);
          i.on.apply(i, c);
        });
      };
    }
  }, Ze = {};
  [
    Cy,
    y0,
    b0
  ].forEach(function(t) {
    Ee(Ze, t);
  });
  var w0 = {
    animate: Ze.animate(),
    animation: Ze.animation(),
    animated: Ze.animated(),
    clearQueue: Ze.clearQueue(),
    delay: Ze.delay(),
    delayAnimation: Ze.delayAnimation(),
    stop: Ze.stop()
  }, mi = {
    classes: function(e) {
      var r = this;
      if (e === void 0) {
        var n = [];
        return r[0]._private.classes.forEach(function(h) {
          return n.push(h);
        }), n;
      } else Ke(e) || (e = (e || "").match(/\S+/g) || []);
      for (var a = [], i = new Kn(e), s = 0; s < r.length; s++) {
        for (var o = r[s], u = o._private, l = u.classes, c = false, f = 0; f < e.length; f++) {
          var d = e[f], v = l.has(d);
          if (!v) {
            c = true;
            break;
          }
        }
        c || (c = l.size !== e.length), c && (u.classes = i, a.push(o));
      }
      return a.length > 0 && this.spawn(a).updateStyle().emit("class"), r;
    },
    addClass: function(e) {
      return this.toggleClass(e, true);
    },
    hasClass: function(e) {
      var r = this[0];
      return r != null && r._private.classes.has(e);
    },
    toggleClass: function(e, r) {
      Ke(e) || (e = e.match(/\S+/g) || []);
      for (var n = this, a = r === void 0, i = [], s = 0, o = n.length; s < o; s++) for (var u = n[s], l = u._private.classes, c = false, f = 0; f < e.length; f++) {
        var d = e[f], v = l.has(d), h = false;
        r || a && !v ? (l.add(d), h = true) : (!r || a && v) && (l.delete(d), h = true), !c && h && (i.push(u), c = true);
      }
      return i.length > 0 && this.spawn(i).updateStyle().emit("class"), n;
    },
    removeClass: function(e) {
      return this.toggleClass(e, false);
    },
    flashClass: function(e, r) {
      var n = this;
      if (r == null) r = 250;
      else if (r === 0) return n;
      return n.addClass(e), setTimeout(function() {
        n.removeClass(e);
      }, r), n;
    }
  };
  mi.className = mi.classNames = mi.classes;
  var Ne = {
    metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
    comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
    boolOp: "\\?|\\!|\\^",
    string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
    number: pt,
    meta: "degree|indegree|outdegree",
    separator: "\\s*,\\s*",
    descendant: "\\s+",
    child: "\\s+>\\s+",
    subject: "\\$",
    group: "node|edge|\\*",
    directedEdge: "\\s+->\\s+",
    undirectedEdge: "\\s+<->\\s+"
  };
  Ne.variable = "(?:[\\w-.]|(?:\\\\" + Ne.metaChar + "))+";
  Ne.className = "(?:[\\w-]|(?:\\\\" + Ne.metaChar + "))+";
  Ne.value = Ne.string + "|" + Ne.number;
  Ne.id = Ne.variable;
  (function() {
    var t, e, r;
    for (t = Ne.comparatorOp.split("|"), r = 0; r < t.length; r++) e = t[r], Ne.comparatorOp += "|@" + e;
    for (t = Ne.comparatorOp.split("|"), r = 0; r < t.length; r++) e = t[r], !(e.indexOf("!") >= 0) && e !== "=" && (Ne.comparatorOp += "|\\!" + e);
  })();
  var He = function() {
    return {
      checks: []
    };
  }, oe = {
    GROUP: 0,
    COLLECTION: 1,
    FILTER: 2,
    DATA_COMPARE: 3,
    DATA_EXIST: 4,
    DATA_BOOL: 5,
    META_COMPARE: 6,
    STATE: 7,
    ID: 8,
    CLASS: 9,
    UNDIRECTED_EDGE: 10,
    DIRECTED_EDGE: 11,
    NODE_SOURCE: 12,
    NODE_TARGET: 13,
    NODE_NEIGHBOR: 14,
    CHILD: 15,
    DESCENDANT: 16,
    PARENT: 17,
    ANCESTOR: 18,
    COMPOUND_SPLIT: 19,
    TRUE: 20
  }, du = [
    {
      selector: ":selected",
      matches: function(e) {
        return e.selected();
      }
    },
    {
      selector: ":unselected",
      matches: function(e) {
        return !e.selected();
      }
    },
    {
      selector: ":selectable",
      matches: function(e) {
        return e.selectable();
      }
    },
    {
      selector: ":unselectable",
      matches: function(e) {
        return !e.selectable();
      }
    },
    {
      selector: ":locked",
      matches: function(e) {
        return e.locked();
      }
    },
    {
      selector: ":unlocked",
      matches: function(e) {
        return !e.locked();
      }
    },
    {
      selector: ":visible",
      matches: function(e) {
        return e.visible();
      }
    },
    {
      selector: ":hidden",
      matches: function(e) {
        return !e.visible();
      }
    },
    {
      selector: ":transparent",
      matches: function(e) {
        return e.transparent();
      }
    },
    {
      selector: ":grabbed",
      matches: function(e) {
        return e.grabbed();
      }
    },
    {
      selector: ":free",
      matches: function(e) {
        return !e.grabbed();
      }
    },
    {
      selector: ":removed",
      matches: function(e) {
        return e.removed();
      }
    },
    {
      selector: ":inside",
      matches: function(e) {
        return !e.removed();
      }
    },
    {
      selector: ":grabbable",
      matches: function(e) {
        return e.grabbable();
      }
    },
    {
      selector: ":ungrabbable",
      matches: function(e) {
        return !e.grabbable();
      }
    },
    {
      selector: ":animated",
      matches: function(e) {
        return e.animated();
      }
    },
    {
      selector: ":unanimated",
      matches: function(e) {
        return !e.animated();
      }
    },
    {
      selector: ":parent",
      matches: function(e) {
        return e.isParent();
      }
    },
    {
      selector: ":childless",
      matches: function(e) {
        return e.isChildless();
      }
    },
    {
      selector: ":child",
      matches: function(e) {
        return e.isChild();
      }
    },
    {
      selector: ":orphan",
      matches: function(e) {
        return e.isOrphan();
      }
    },
    {
      selector: ":nonorphan",
      matches: function(e) {
        return e.isChild();
      }
    },
    {
      selector: ":compound",
      matches: function(e) {
        return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
      }
    },
    {
      selector: ":loop",
      matches: function(e) {
        return e.isLoop();
      }
    },
    {
      selector: ":simple",
      matches: function(e) {
        return e.isSimple();
      }
    },
    {
      selector: ":active",
      matches: function(e) {
        return e.active();
      }
    },
    {
      selector: ":inactive",
      matches: function(e) {
        return !e.active();
      }
    },
    {
      selector: ":backgrounding",
      matches: function(e) {
        return e.backgrounding();
      }
    },
    {
      selector: ":nonbackgrounding",
      matches: function(e) {
        return !e.backgrounding();
      }
    }
  ].sort(function(t, e) {
    return yp(t.selector, e.selector);
  }), x0 = (function() {
    for (var t = {}, e, r = 0; r < du.length; r++) e = du[r], t[e.selector] = e.matches;
    return t;
  })(), E0 = function(e, r) {
    return x0[e](r);
  }, T0 = "(" + du.map(function(t) {
    return t.selector;
  }).join("|") + ")", En = function(e) {
    return e.replace(new RegExp("\\\\(" + Ne.metaChar + ")", "g"), function(r, n) {
      return n;
    });
  }, Ar = function(e, r, n) {
    e[e.length - 1] = n;
  }, vu = [
    {
      name: "group",
      query: true,
      regex: "(" + Ne.group + ")",
      populate: function(e, r, n) {
        var a = ft(n, 1), i = a[0];
        r.checks.push({
          type: oe.GROUP,
          value: i === "*" ? i : i + "s"
        });
      }
    },
    {
      name: "state",
      query: true,
      regex: T0,
      populate: function(e, r, n) {
        var a = ft(n, 1), i = a[0];
        r.checks.push({
          type: oe.STATE,
          value: i
        });
      }
    },
    {
      name: "id",
      query: true,
      regex: "\\#(" + Ne.id + ")",
      populate: function(e, r, n) {
        var a = ft(n, 1), i = a[0];
        r.checks.push({
          type: oe.ID,
          value: En(i)
        });
      }
    },
    {
      name: "className",
      query: true,
      regex: "\\.(" + Ne.className + ")",
      populate: function(e, r, n) {
        var a = ft(n, 1), i = a[0];
        r.checks.push({
          type: oe.CLASS,
          value: En(i)
        });
      }
    },
    {
      name: "dataExists",
      query: true,
      regex: "\\[\\s*(" + Ne.variable + ")\\s*\\]",
      populate: function(e, r, n) {
        var a = ft(n, 1), i = a[0];
        r.checks.push({
          type: oe.DATA_EXIST,
          field: En(i)
        });
      }
    },
    {
      name: "dataCompare",
      query: true,
      regex: "\\[\\s*(" + Ne.variable + ")\\s*(" + Ne.comparatorOp + ")\\s*(" + Ne.value + ")\\s*\\]",
      populate: function(e, r, n) {
        var a = ft(n, 3), i = a[0], s = a[1], o = a[2], u = new RegExp("^" + Ne.string + "$").exec(o) != null;
        u ? o = o.substring(1, o.length - 1) : o = parseFloat(o), r.checks.push({
          type: oe.DATA_COMPARE,
          field: En(i),
          operator: s,
          value: o
        });
      }
    },
    {
      name: "dataBool",
      query: true,
      regex: "\\[\\s*(" + Ne.boolOp + ")\\s*(" + Ne.variable + ")\\s*\\]",
      populate: function(e, r, n) {
        var a = ft(n, 2), i = a[0], s = a[1];
        r.checks.push({
          type: oe.DATA_BOOL,
          field: En(s),
          operator: i
        });
      }
    },
    {
      name: "metaCompare",
      query: true,
      regex: "\\[\\[\\s*(" + Ne.meta + ")\\s*(" + Ne.comparatorOp + ")\\s*(" + Ne.number + ")\\s*\\]\\]",
      populate: function(e, r, n) {
        var a = ft(n, 3), i = a[0], s = a[1], o = a[2];
        r.checks.push({
          type: oe.META_COMPARE,
          field: En(i),
          operator: s,
          value: parseFloat(o)
        });
      }
    },
    {
      name: "nextQuery",
      separator: true,
      regex: Ne.separator,
      populate: function(e, r) {
        var n = e.currentSubject, a = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
        n != null && (s.subject = n, e.currentSubject = null), s.edgeCount = a, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
        var o = e[e.length++] = He();
        return o;
      }
    },
    {
      name: "directedEdge",
      separator: true,
      regex: Ne.directedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var n = He(), a = r, i = He();
          return n.checks.push({
            type: oe.DIRECTED_EDGE,
            source: a,
            target: i
          }), Ar(e, r, n), e.edgeCount++, i;
        } else {
          var s = He(), o = r, u = He();
          return s.checks.push({
            type: oe.NODE_SOURCE,
            source: o,
            target: u
          }), Ar(e, r, s), e.edgeCount++, u;
        }
      }
    },
    {
      name: "undirectedEdge",
      separator: true,
      regex: Ne.undirectedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var n = He(), a = r, i = He();
          return n.checks.push({
            type: oe.UNDIRECTED_EDGE,
            nodes: [
              a,
              i
            ]
          }), Ar(e, r, n), e.edgeCount++, i;
        } else {
          var s = He(), o = r, u = He();
          return s.checks.push({
            type: oe.NODE_NEIGHBOR,
            node: o,
            neighbor: u
          }), Ar(e, r, s), u;
        }
      }
    },
    {
      name: "child",
      separator: true,
      regex: Ne.child,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var n = He(), a = He(), i = e[e.length - 1];
          return n.checks.push({
            type: oe.CHILD,
            parent: i,
            child: a
          }), Ar(e, r, n), e.compoundCount++, a;
        } else if (e.currentSubject === r) {
          var s = He(), o = e[e.length - 1], u = He(), l = He(), c = He(), f = He();
          return s.checks.push({
            type: oe.COMPOUND_SPLIT,
            left: o,
            right: u,
            subject: l
          }), l.checks = r.checks, r.checks = [
            {
              type: oe.TRUE
            }
          ], f.checks.push({
            type: oe.TRUE
          }), u.checks.push({
            type: oe.PARENT,
            parent: f,
            child: c
          }), Ar(e, o, s), e.currentSubject = l, e.compoundCount++, c;
        } else {
          var d = He(), v = He(), h = [
            {
              type: oe.PARENT,
              parent: d,
              child: v
            }
          ];
          return d.checks = r.checks, r.checks = h, e.compoundCount++, v;
        }
      }
    },
    {
      name: "descendant",
      separator: true,
      regex: Ne.descendant,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var n = He(), a = He(), i = e[e.length - 1];
          return n.checks.push({
            type: oe.DESCENDANT,
            ancestor: i,
            descendant: a
          }), Ar(e, r, n), e.compoundCount++, a;
        } else if (e.currentSubject === r) {
          var s = He(), o = e[e.length - 1], u = He(), l = He(), c = He(), f = He();
          return s.checks.push({
            type: oe.COMPOUND_SPLIT,
            left: o,
            right: u,
            subject: l
          }), l.checks = r.checks, r.checks = [
            {
              type: oe.TRUE
            }
          ], f.checks.push({
            type: oe.TRUE
          }), u.checks.push({
            type: oe.ANCESTOR,
            ancestor: f,
            descendant: c
          }), Ar(e, o, s), e.currentSubject = l, e.compoundCount++, c;
        } else {
          var d = He(), v = He(), h = [
            {
              type: oe.ANCESTOR,
              ancestor: d,
              descendant: v
            }
          ];
          return d.checks = r.checks, r.checks = h, e.compoundCount++, v;
        }
      }
    },
    {
      name: "subject",
      modifier: true,
      regex: Ne.subject,
      populate: function(e, r) {
        if (e.currentSubject != null && e.currentSubject !== r) return Ge("Redefinition of subject in selector `" + e.toString() + "`"), false;
        e.currentSubject = r;
        var n = e[e.length - 1], a = n.checks[0], i = a == null ? null : a.type;
        i === oe.DIRECTED_EDGE ? a.type = oe.NODE_TARGET : i === oe.UNDIRECTED_EDGE && (a.type = oe.NODE_NEIGHBOR, a.node = a.nodes[1], a.neighbor = a.nodes[0], a.nodes = null);
      }
    }
  ];
  vu.forEach(function(t) {
    return t.regexObj = new RegExp("^" + t.regex);
  });
  var S0 = function(e) {
    for (var r, n, a, i = 0; i < vu.length; i++) {
      var s = vu[i], o = s.name, u = e.match(s.regexObj);
      if (u != null) {
        n = u, r = s, a = o;
        var l = u[0];
        e = e.substring(l.length);
        break;
      }
    }
    return {
      expr: r,
      match: n,
      name: a,
      remaining: e
    };
  }, C0 = function(e) {
    var r = e.match(/^\s+/);
    if (r) {
      var n = r[0];
      e = e.substring(n.length);
    }
    return e;
  }, R0 = function(e) {
    var r = this, n = r.inputText = e, a = r[0] = He();
    for (r.length = 1, n = C0(n); ; ) {
      var i = S0(n);
      if (i.expr == null) return Ge("The selector `" + e + "`is invalid"), false;
      var s = i.match.slice(1), o = i.expr.populate(r, a, s);
      if (o === false) return false;
      if (o != null && (a = o), n = i.remaining, n.match(/^\s*$/)) break;
    }
    var u = r[r.length - 1];
    r.currentSubject != null && (u.subject = r.currentSubject), u.edgeCount = r.edgeCount, u.compoundCount = r.compoundCount;
    for (var l = 0; l < r.length; l++) {
      var c = r[l];
      if (c.compoundCount > 0 && c.edgeCount > 0) return Ge("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), false;
      if (c.edgeCount > 1) return Ge("The selector `" + e + "` is invalid because it uses multiple edge selectors"), false;
      c.edgeCount === 1 && Ge("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
    }
    return true;
  }, A0 = function() {
    if (this.toStringCache != null) return this.toStringCache;
    for (var e = function(c) {
      return c ?? "";
    }, r = function(c) {
      return me(c) ? '"' + c + '"' : e(c);
    }, n = function(c) {
      return " " + c + " ";
    }, a = function(c, f) {
      var d = c.type, v = c.value;
      switch (d) {
        case oe.GROUP: {
          var h = e(v);
          return h.substring(0, h.length - 1);
        }
        case oe.DATA_COMPARE: {
          var y = c.field, p = c.operator;
          return "[" + y + n(e(p)) + r(v) + "]";
        }
        case oe.DATA_BOOL: {
          var g = c.operator, b = c.field;
          return "[" + e(g) + b + "]";
        }
        case oe.DATA_EXIST: {
          var m = c.field;
          return "[" + m + "]";
        }
        case oe.META_COMPARE: {
          var x = c.operator, E = c.field;
          return "[[" + E + n(e(x)) + r(v) + "]]";
        }
        case oe.STATE:
          return v;
        case oe.ID:
          return "#" + v;
        case oe.CLASS:
          return "." + v;
        case oe.PARENT:
        case oe.CHILD:
          return i(c.parent, f) + n(">") + i(c.child, f);
        case oe.ANCESTOR:
        case oe.DESCENDANT:
          return i(c.ancestor, f) + " " + i(c.descendant, f);
        case oe.COMPOUND_SPLIT: {
          var S = i(c.left, f), w = i(c.subject, f), T = i(c.right, f);
          return S + (S.length > 0 ? " " : "") + w + T;
        }
        case oe.TRUE:
          return "";
      }
    }, i = function(c, f) {
      return c.checks.reduce(function(d, v, h) {
        return d + (f === c && h === 0 ? "$" : "") + a(v, f);
      }, "");
    }, s = "", o = 0; o < this.length; o++) {
      var u = this[o];
      s += i(u, u.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
    }
    return this.toStringCache = s, s;
  }, k0 = {
    parse: R0,
    toString: A0
  }, hv = function(e, r, n) {
    var a, i = me(e), s = ae(e), o = me(n), u, l, c = false, f = false, d = false;
    switch (r.indexOf("!") >= 0 && (r = r.replace("!", ""), f = true), r.indexOf("@") >= 0 && (r = r.replace("@", ""), c = true), (i || o || c) && (u = !i && !s ? "" : "" + e, l = "" + n), c && (e = u = u.toLowerCase(), n = l = l.toLowerCase()), r) {
      case "*=":
        a = u.indexOf(l) >= 0;
        break;
      case "$=":
        a = u.indexOf(l, u.length - l.length) >= 0;
        break;
      case "^=":
        a = u.indexOf(l) === 0;
        break;
      case "=":
        a = e === n;
        break;
      case ">":
        d = true, a = e > n;
        break;
      case ">=":
        d = true, a = e >= n;
        break;
      case "<":
        d = true, a = e < n;
        break;
      case "<=":
        d = true, a = e <= n;
        break;
      default:
        a = false;
        break;
    }
    return f && (e != null || !d) && (a = !a), a;
  }, P0 = function(e, r) {
    switch (r) {
      case "?":
        return !!e;
      case "!":
        return !e;
      case "^":
        return e === void 0;
    }
  }, _0 = function(e) {
    return e !== void 0;
  }, Gu = function(e, r) {
    return e.data(r);
  }, I0 = function(e, r) {
    return e[r]();
  }, ot = [], Xe = function(e, r) {
    return e.checks.every(function(n) {
      return ot[n.type](n, r);
    });
  };
  ot[oe.GROUP] = function(t, e) {
    var r = t.value;
    return r === "*" || r === e.group();
  };
  ot[oe.STATE] = function(t, e) {
    var r = t.value;
    return E0(r, e);
  };
  ot[oe.ID] = function(t, e) {
    var r = t.value;
    return e.id() === r;
  };
  ot[oe.CLASS] = function(t, e) {
    var r = t.value;
    return e.hasClass(r);
  };
  ot[oe.META_COMPARE] = function(t, e) {
    var r = t.field, n = t.operator, a = t.value;
    return hv(I0(e, r), n, a);
  };
  ot[oe.DATA_COMPARE] = function(t, e) {
    var r = t.field, n = t.operator, a = t.value;
    return hv(Gu(e, r), n, a);
  };
  ot[oe.DATA_BOOL] = function(t, e) {
    var r = t.field, n = t.operator;
    return P0(Gu(e, r), n);
  };
  ot[oe.DATA_EXIST] = function(t, e) {
    var r = t.field;
    return t.operator, _0(Gu(e, r));
  };
  ot[oe.UNDIRECTED_EDGE] = function(t, e) {
    var r = t.nodes[0], n = t.nodes[1], a = e.source(), i = e.target();
    return Xe(r, a) && Xe(n, i) || Xe(n, a) && Xe(r, i);
  };
  ot[oe.NODE_NEIGHBOR] = function(t, e) {
    return Xe(t.node, e) && e.neighborhood().some(function(r) {
      return r.isNode() && Xe(t.neighbor, r);
    });
  };
  ot[oe.DIRECTED_EDGE] = function(t, e) {
    return Xe(t.source, e.source()) && Xe(t.target, e.target());
  };
  ot[oe.NODE_SOURCE] = function(t, e) {
    return Xe(t.source, e) && e.outgoers().some(function(r) {
      return r.isNode() && Xe(t.target, r);
    });
  };
  ot[oe.NODE_TARGET] = function(t, e) {
    return Xe(t.target, e) && e.incomers().some(function(r) {
      return r.isNode() && Xe(t.source, r);
    });
  };
  ot[oe.CHILD] = function(t, e) {
    return Xe(t.child, e) && Xe(t.parent, e.parent());
  };
  ot[oe.PARENT] = function(t, e) {
    return Xe(t.parent, e) && e.children().some(function(r) {
      return Xe(t.child, r);
    });
  };
  ot[oe.DESCENDANT] = function(t, e) {
    return Xe(t.descendant, e) && e.ancestors().some(function(r) {
      return Xe(t.ancestor, r);
    });
  };
  ot[oe.ANCESTOR] = function(t, e) {
    return Xe(t.ancestor, e) && e.descendants().some(function(r) {
      return Xe(t.descendant, r);
    });
  };
  ot[oe.COMPOUND_SPLIT] = function(t, e) {
    return Xe(t.subject, e) && Xe(t.left, e) && Xe(t.right, e);
  };
  ot[oe.TRUE] = function() {
    return true;
  };
  ot[oe.COLLECTION] = function(t, e) {
    var r = t.value;
    return r.has(e);
  };
  ot[oe.FILTER] = function(t, e) {
    var r = t.value;
    return r(e);
  };
  var B0 = function(e) {
    var r = this;
    if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === oe.ID) return e.getElementById(r[0].checks[0].value).collection();
    var n = function(i) {
      for (var s = 0; s < r.length; s++) {
        var o = r[s];
        if (Xe(o, i)) return true;
      }
      return false;
    };
    return r.text() == null && (n = function() {
      return true;
    }), e.filter(n);
  }, M0 = function(e) {
    for (var r = this, n = 0; n < r.length; n++) {
      var a = r[n];
      if (Xe(a, e)) return true;
    }
    return false;
  }, D0 = {
    matches: M0,
    filter: B0
  }, Fr = function(e) {
    this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || me(e) && e.match(/^\s*$/) || (Wt(e) ? this.addQuery({
      checks: [
        {
          type: oe.COLLECTION,
          value: e.collection()
        }
      ]
    }) : at(e) ? this.addQuery({
      checks: [
        {
          type: oe.FILTER,
          value: e
        }
      ]
    }) : me(e) ? this.parse(e) || (this.invalid = true) : tt("A selector must be created from a string; found "));
  }, Vr = Fr.prototype;
  [
    k0,
    D0
  ].forEach(function(t) {
    return Ee(Vr, t);
  });
  Vr.text = function() {
    return this.inputText;
  };
  Vr.size = function() {
    return this.length;
  };
  Vr.eq = function(t) {
    return this[t];
  };
  Vr.sameText = function(t) {
    return !this.invalid && !t.invalid && this.text() === t.text();
  };
  Vr.addQuery = function(t) {
    this[this.length++] = t;
  };
  Vr.selector = Vr.toString;
  var Mr = {
    allAre: function(e) {
      var r = new Fr(e);
      return this.every(function(n) {
        return r.matches(n);
      });
    },
    is: function(e) {
      var r = new Fr(e);
      return this.some(function(n) {
        return r.matches(n);
      });
    },
    some: function(e, r) {
      for (var n = 0; n < this.length; n++) {
        var a = r ? e.apply(r, [
          this[n],
          n,
          this
        ]) : e(this[n], n, this);
        if (a) return true;
      }
      return false;
    },
    every: function(e, r) {
      for (var n = 0; n < this.length; n++) {
        var a = r ? e.apply(r, [
          this[n],
          n,
          this
        ]) : e(this[n], n, this);
        if (!a) return false;
      }
      return true;
    },
    same: function(e) {
      if (this === e) return true;
      e = this.cy().collection(e);
      var r = this.length, n = e.length;
      return r !== n ? false : r === 1 ? this[0] === e[0] : this.every(function(a) {
        return e.hasElementWithId(a.id());
      });
    },
    anySame: function(e) {
      return e = this.cy().collection(e), this.some(function(r) {
        return e.hasElementWithId(r.id());
      });
    },
    allAreNeighbors: function(e) {
      e = this.cy().collection(e);
      var r = this.neighborhood();
      return e.every(function(n) {
        return r.hasElementWithId(n.id());
      });
    },
    contains: function(e) {
      e = this.cy().collection(e);
      var r = this;
      return e.every(function(n) {
        return r.hasElementWithId(n.id());
      });
    }
  };
  Mr.allAreNeighbours = Mr.allAreNeighbors;
  Mr.has = Mr.contains;
  Mr.equal = Mr.equals = Mr.same;
  var Jt = function(e, r) {
    return function(a, i, s, o) {
      var u = a, l = this, c;
      if (u == null ? c = "" : Wt(u) && u.length === 1 && (c = u.id()), l.length === 1 && c) {
        var f = l[0]._private, d = f.traversalCache = f.traversalCache || {}, v = d[r] = d[r] || [], h = dn(c), y = v[h];
        return y || (v[h] = e.call(l, a, i, s, o));
      } else return e.call(l, a, i, s, o);
    };
  }, Zn = {
    parent: function(e) {
      var r = [];
      if (this.length === 1) {
        var n = this[0]._private.parent;
        if (n) return n;
      }
      for (var a = 0; a < this.length; a++) {
        var i = this[a], s = i._private.parent;
        s && r.push(s);
      }
      return this.spawn(r, true).filter(e);
    },
    parents: function(e) {
      for (var r = [], n = this.parent(); n.nonempty(); ) {
        for (var a = 0; a < n.length; a++) {
          var i = n[a];
          r.push(i);
        }
        n = n.parent();
      }
      return this.spawn(r, true).filter(e);
    },
    commonAncestors: function(e) {
      for (var r, n = 0; n < this.length; n++) {
        var a = this[n], i = a.parents();
        r = r || i, r = r.intersect(i);
      }
      return r.filter(e);
    },
    orphans: function(e) {
      return this.stdFilter(function(r) {
        return r.isOrphan();
      }).filter(e);
    },
    nonorphans: function(e) {
      return this.stdFilter(function(r) {
        return r.isChild();
      }).filter(e);
    },
    children: Jt(function(t) {
      for (var e = [], r = 0; r < this.length; r++) for (var n = this[r], a = n._private.children, i = 0; i < a.length; i++) e.push(a[i]);
      return this.spawn(e, true).filter(t);
    }, "children"),
    siblings: function(e) {
      return this.parent().children().not(this).filter(e);
    },
    isParent: function() {
      var e = this[0];
      if (e) return e.isNode() && e._private.children.length !== 0;
    },
    isChildless: function() {
      var e = this[0];
      if (e) return e.isNode() && e._private.children.length === 0;
    },
    isChild: function() {
      var e = this[0];
      if (e) return e.isNode() && e._private.parent != null;
    },
    isOrphan: function() {
      var e = this[0];
      if (e) return e.isNode() && e._private.parent == null;
    },
    descendants: function(e) {
      var r = [];
      function n(a) {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          r.push(s), s.children().nonempty() && n(s.children());
        }
      }
      return n(this.children()), this.spawn(r, true).filter(e);
    }
  };
  function Wu(t, e, r, n) {
    for (var a = [], i = new Kn(), s = t.cy(), o = s.hasCompoundNodes(), u = 0; u < t.length; u++) {
      var l = t[u];
      r ? a.push(l) : o && n(a, i, l);
    }
    for (; a.length > 0; ) {
      var c = a.shift();
      e(c), i.add(c.id()), o && n(a, i, c);
    }
    return t;
  }
  function gv(t, e, r) {
    if (r.isParent()) for (var n = r._private.children, a = 0; a < n.length; a++) {
      var i = n[a];
      e.has(i.id()) || t.push(i);
    }
  }
  Zn.forEachDown = function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return Wu(this, t, e, gv);
  };
  function pv(t, e, r) {
    if (r.isChild()) {
      var n = r._private.parent;
      e.has(n.id()) || t.push(n);
    }
  }
  Zn.forEachUp = function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return Wu(this, t, e, pv);
  };
  function O0(t, e, r) {
    pv(t, e, r), gv(t, e, r);
  }
  Zn.forEachUpAndDown = function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return Wu(this, t, e, O0);
  };
  Zn.ancestors = Zn.parents;
  var Ca, mv;
  Ca = mv = {
    data: Ze.data({
      field: "data",
      bindingEvent: "data",
      allowBinding: true,
      allowSetting: true,
      settingEvent: "data",
      settingTriggersEvent: true,
      triggerFnName: "trigger",
      allowGetting: true,
      immutableKeys: {
        id: true,
        source: true,
        target: true,
        parent: true
      },
      updateStyle: true
    }),
    removeData: Ze.removeData({
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: true,
      immutableKeys: {
        id: true,
        source: true,
        target: true,
        parent: true
      },
      updateStyle: true
    }),
    scratch: Ze.data({
      field: "scratch",
      bindingEvent: "scratch",
      allowBinding: true,
      allowSetting: true,
      settingEvent: "scratch",
      settingTriggersEvent: true,
      triggerFnName: "trigger",
      allowGetting: true,
      updateStyle: true
    }),
    removeScratch: Ze.removeData({
      field: "scratch",
      event: "scratch",
      triggerFnName: "trigger",
      triggerEvent: true,
      updateStyle: true
    }),
    rscratch: Ze.data({
      field: "rscratch",
      allowBinding: false,
      allowSetting: true,
      settingTriggersEvent: false,
      allowGetting: true
    }),
    removeRscratch: Ze.removeData({
      field: "rscratch",
      triggerEvent: false
    }),
    id: function() {
      var e = this[0];
      if (e) return e._private.data.id;
    }
  };
  Ca.attr = Ca.data;
  Ca.removeAttr = Ca.removeData;
  var N0 = mv, as = {};
  function Fo(t) {
    return function(e) {
      var r = this;
      if (e === void 0 && (e = true), r.length !== 0) if (r.isNode() && !r.removed()) {
        for (var n = 0, a = r[0], i = a._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          !e && o.isLoop() || (n += t(a, o));
        }
        return n;
      } else return;
    };
  }
  Ee(as, {
    degree: Fo(function(t, e) {
      return e.source().same(e.target()) ? 2 : 1;
    }),
    indegree: Fo(function(t, e) {
      return e.target().same(t) ? 1 : 0;
    }),
    outdegree: Fo(function(t, e) {
      return e.source().same(t) ? 1 : 0;
    })
  });
  function Tn(t, e) {
    return function(r) {
      for (var n, a = this.nodes(), i = 0; i < a.length; i++) {
        var s = a[i], o = s[t](r);
        o !== void 0 && (n === void 0 || e(o, n)) && (n = o);
      }
      return n;
    };
  }
  Ee(as, {
    minDegree: Tn("degree", function(t, e) {
      return t < e;
    }),
    maxDegree: Tn("degree", function(t, e) {
      return t > e;
    }),
    minIndegree: Tn("indegree", function(t, e) {
      return t < e;
    }),
    maxIndegree: Tn("indegree", function(t, e) {
      return t > e;
    }),
    minOutdegree: Tn("outdegree", function(t, e) {
      return t < e;
    }),
    maxOutdegree: Tn("outdegree", function(t, e) {
      return t > e;
    })
  });
  Ee(as, {
    totalDegree: function(e) {
      for (var r = 0, n = this.nodes(), a = 0; a < n.length; a++) r += n[a].degree(e);
      return r;
    }
  });
  var ir, yv, bv = function(e, r, n) {
    for (var a = 0; a < e.length; a++) {
      var i = e[a];
      if (!i.locked()) {
        var s = i._private.position, o = {
          x: r.x != null ? r.x - s.x : 0,
          y: r.y != null ? r.y - s.y : 0
        };
        i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, n), i.dirtyBoundingBoxCache();
      }
    }
  }, rf = {
    field: "position",
    bindingEvent: "position",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "position",
    settingTriggersEvent: true,
    triggerFnName: "emitAndNotify",
    allowGetting: true,
    validKeys: [
      "x",
      "y"
    ],
    beforeGet: function(e) {
      e.updateCompoundBounds();
    },
    beforeSet: function(e, r) {
      bv(e, r, false);
    },
    onSet: function(e) {
      e.dirtyCompoundBoundsCache();
    },
    canSet: function(e) {
      return !e.locked();
    }
  };
  ir = yv = {
    position: Ze.data(rf),
    silentPosition: Ze.data(Ee({}, rf, {
      allowBinding: false,
      allowSetting: true,
      settingTriggersEvent: false,
      allowGetting: false,
      beforeSet: function(e, r) {
        bv(e, r, true);
      },
      onSet: function(e) {
        e.dirtyCompoundBoundsCache();
      }
    })),
    positions: function(e, r) {
      if (ze(e)) r ? this.silentPosition(e) : this.position(e);
      else if (at(e)) {
        var n = e, a = this.cy();
        a.startBatch();
        for (var i = 0; i < this.length; i++) {
          var s = this[i], o = void 0;
          (o = n(s, i)) && (r ? s.silentPosition(o) : s.position(o));
        }
        a.endBatch();
      }
      return this;
    },
    silentPositions: function(e) {
      return this.positions(e, true);
    },
    shift: function(e, r, n) {
      var a;
      if (ze(e) ? (a = {
        x: ae(e.x) ? e.x : 0,
        y: ae(e.y) ? e.y : 0
      }, n = r) : me(e) && ae(r) && (a = {
        x: 0,
        y: 0
      }, a[e] = r), a != null) {
        var i = this.cy();
        i.startBatch();
        for (var s = 0; s < this.length; s++) {
          var o = this[s];
          if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
            var u = o.position(), l = {
              x: u.x + a.x,
              y: u.y + a.y
            };
            n ? o.silentPosition(l) : o.position(l);
          }
        }
        i.endBatch();
      }
      return this;
    },
    silentShift: function(e, r) {
      return ze(e) ? this.shift(e, true) : me(e) && ae(r) && this.shift(e, r, true), this;
    },
    renderedPosition: function(e, r) {
      var n = this[0], a = this.cy(), i = a.zoom(), s = a.pan(), o = ze(e) ? e : void 0, u = o !== void 0 || r !== void 0 && me(e);
      if (n && n.isNode()) if (u) for (var l = 0; l < this.length; l++) {
        var c = this[l];
        r !== void 0 ? c.position(e, (r - s[e]) / i) : o !== void 0 && c.position(Hd(o, i, s));
      }
      else {
        var f = n.position();
        return o = Ji(f, i, s), e === void 0 ? o : o[e];
      }
      else if (!u) return;
      return this;
    },
    relativePosition: function(e, r) {
      var n = this[0], a = this.cy(), i = ze(e) ? e : void 0, s = i !== void 0 || r !== void 0 && me(e), o = a.hasCompoundNodes();
      if (n && n.isNode()) if (s) for (var u = 0; u < this.length; u++) {
        var l = this[u], c = o ? l.parent() : null, f = c && c.length > 0, d = f;
        f && (c = c[0]);
        var v = d ? c.position() : {
          x: 0,
          y: 0
        };
        r !== void 0 ? l.position(e, r + v[e]) : i !== void 0 && l.position({
          x: i.x + v.x,
          y: i.y + v.y
        });
      }
      else {
        var h = n.position(), y = o ? n.parent() : null, p = y && y.length > 0, g = p;
        p && (y = y[0]);
        var b = g ? y.position() : {
          x: 0,
          y: 0
        };
        return i = {
          x: h.x - b.x,
          y: h.y - b.y
        }, e === void 0 ? i : i[e];
      }
      else if (!s) return;
      return this;
    }
  };
  ir.modelPosition = ir.point = ir.position;
  ir.modelPositions = ir.points = ir.positions;
  ir.renderedPoint = ir.renderedPosition;
  ir.relativePoint = ir.relativePosition;
  var z0 = yv, Vn, Wr;
  Vn = Wr = {};
  Wr.renderedBoundingBox = function(t) {
    var e = this.boundingBox(t), r = this.cy(), n = r.zoom(), a = r.pan(), i = e.x1 * n + a.x, s = e.x2 * n + a.x, o = e.y1 * n + a.y, u = e.y2 * n + a.y;
    return {
      x1: i,
      x2: s,
      y1: o,
      y2: u,
      w: s - i,
      h: u - o
    };
  };
  Wr.dirtyCompoundBoundsCache = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = this.cy();
    return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
      if (r.isParent()) {
        var n = r._private;
        n.compoundBoundsClean = false, n.bbCache = null, t || r.emitAndNotify("bounds");
      }
    }), this);
  };
  Wr.updateCompoundBounds = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = this.cy();
    if (!e.styleEnabled() || !e.hasCompoundNodes()) return this;
    if (!t && e.batching()) return this;
    function r(s) {
      if (!s.isParent()) return;
      var o = s._private, u = s.children(), l = s.pstyle("compound-sizing-wrt-labels").value === "include", c = {
        width: {
          val: s.pstyle("min-width").pfValue,
          left: s.pstyle("min-width-bias-left"),
          right: s.pstyle("min-width-bias-right")
        },
        height: {
          val: s.pstyle("min-height").pfValue,
          top: s.pstyle("min-height-bias-top"),
          bottom: s.pstyle("min-height-bias-bottom")
        }
      }, f = u.boundingBox({
        includeLabels: l,
        includeOverlays: false,
        useCache: false
      }), d = o.position;
      (f.w === 0 || f.h === 0) && (f = {
        w: s.pstyle("width").pfValue,
        h: s.pstyle("height").pfValue
      }, f.x1 = d.x - f.w / 2, f.x2 = d.x + f.w / 2, f.y1 = d.y - f.h / 2, f.y2 = d.y + f.h / 2);
      function v(C, R, A) {
        var P = 0, k = 0, I = R + A;
        return C > 0 && I > 0 && (P = R / I * C, k = A / I * C), {
          biasDiff: P,
          biasComplementDiff: k
        };
      }
      function h(C, R, A, P) {
        if (A.units === "%") switch (P) {
          case "width":
            return C > 0 ? A.pfValue * C : 0;
          case "height":
            return R > 0 ? A.pfValue * R : 0;
          case "average":
            return C > 0 && R > 0 ? A.pfValue * (C + R) / 2 : 0;
          case "min":
            return C > 0 && R > 0 ? C > R ? A.pfValue * R : A.pfValue * C : 0;
          case "max":
            return C > 0 && R > 0 ? C > R ? A.pfValue * C : A.pfValue * R : 0;
          default:
            return 0;
        }
        else return A.units === "px" ? A.pfValue : 0;
      }
      var y = c.width.left.value;
      c.width.left.units === "px" && c.width.val > 0 && (y = y * 100 / c.width.val);
      var p = c.width.right.value;
      c.width.right.units === "px" && c.width.val > 0 && (p = p * 100 / c.width.val);
      var g = c.height.top.value;
      c.height.top.units === "px" && c.height.val > 0 && (g = g * 100 / c.height.val);
      var b = c.height.bottom.value;
      c.height.bottom.units === "px" && c.height.val > 0 && (b = b * 100 / c.height.val);
      var m = v(c.width.val - f.w, y, p), x = m.biasDiff, E = m.biasComplementDiff, S = v(c.height.val - f.h, g, b), w = S.biasDiff, T = S.biasComplementDiff;
      o.autoPadding = h(f.w, f.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(f.w, c.width.val), d.x = (-x + f.x1 + f.x2 + E) / 2, o.autoHeight = Math.max(f.h, c.height.val), d.y = (-w + f.y1 + f.y2 + T) / 2;
    }
    for (var n = 0; n < this.length; n++) {
      var a = this[n], i = a._private;
      (!i.compoundBoundsClean || t) && (r(a), e.batching() || (i.compoundBoundsClean = true));
    }
    return this;
  };
  var jt = function(e) {
    return e === 1 / 0 || e === -1 / 0 ? 0 : e;
  }, nr = function(e, r, n, a, i) {
    a - r === 0 || i - n === 0 || r == null || n == null || a == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = a > e.x2 ? a : e.x2, e.y1 = n < e.y1 ? n : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
  }, kr = function(e, r) {
    return r == null ? e : nr(e, r.x1, r.y1, r.x2, r.y2);
  }, ia = function(e, r, n) {
    return Ut(e, r, n);
  }, ni = function(e, r, n) {
    if (!r.cy().headless()) {
      var a = r._private, i = a.rstyle, s = i.arrowWidth / 2, o = r.pstyle(n + "-arrow-shape").value, u, l;
      if (o !== "none") {
        n === "source" ? (u = i.srcX, l = i.srcY) : n === "target" ? (u = i.tgtX, l = i.tgtY) : (u = i.midX, l = i.midY);
        var c = a.arrowBounds = a.arrowBounds || {}, f = c[n] = c[n] || {};
        f.x1 = u - s, f.y1 = l - s, f.x2 = u + s, f.y2 = l + s, f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, gi(f, 1), nr(e, f.x1, f.y1, f.x2, f.y2);
      }
    }
  }, Vo = function(e, r, n) {
    if (!r.cy().headless()) {
      var a;
      n ? a = n + "-" : a = "";
      var i = r._private, s = i.rstyle, o = r.pstyle(a + "label").strValue;
      if (o) {
        var u = r.pstyle("text-halign"), l = r.pstyle("text-valign"), c = ia(s, "labelWidth", n), f = ia(s, "labelHeight", n), d = ia(s, "labelX", n), v = ia(s, "labelY", n), h = r.pstyle(a + "text-margin-x").pfValue, y = r.pstyle(a + "text-margin-y").pfValue, p = r.isEdge(), g = r.pstyle(a + "text-rotation"), b = r.pstyle("text-outline-width").pfValue, m = r.pstyle("text-border-width").pfValue, x = m / 2, E = r.pstyle("text-background-padding").pfValue, S = 2, w = f, T = c, C = T / 2, R = w / 2, A, P, k, I;
        if (p) A = d - C, P = d + C, k = v - R, I = v + R;
        else {
          switch (u.value) {
            case "left":
              A = d - T, P = d;
              break;
            case "center":
              A = d - C, P = d + C;
              break;
            case "right":
              A = d, P = d + T;
              break;
          }
          switch (l.value) {
            case "top":
              k = v - w, I = v;
              break;
            case "center":
              k = v - R, I = v + R;
              break;
            case "bottom":
              k = v, I = v + w;
              break;
          }
        }
        var M = h - Math.max(b, x) - E - S, D = h + Math.max(b, x) + E + S, B = y - Math.max(b, x) - E - S, O = y + Math.max(b, x) + E + S;
        A += M, P += D, k += B, I += O;
        var z = n || "main", U = i.labelBounds, N = U[z] = U[z] || {};
        N.x1 = A, N.y1 = k, N.x2 = P, N.y2 = I, N.w = P - A, N.h = I - k, N.leftPad = M, N.rightPad = D, N.topPad = B, N.botPad = O;
        var L = p && g.strValue === "autorotate", H = g.pfValue != null && g.pfValue !== 0;
        if (L || H) {
          var Y = L ? ia(i.rstyle, "labelAngle", n) : g.pfValue, K = Math.cos(Y), Q = Math.sin(Y), re = (A + P) / 2, ie = (k + I) / 2;
          if (!p) {
            switch (u.value) {
              case "left":
                re = P;
                break;
              case "right":
                re = A;
                break;
            }
            switch (l.value) {
              case "top":
                ie = I;
                break;
              case "bottom":
                ie = k;
                break;
            }
          }
          var ee = function(Re, Te) {
            return Re = Re - re, Te = Te - ie, {
              x: Re * K - Te * Q + re,
              y: Re * Q + Te * K + ie
            };
          }, F = ee(A, k), V = ee(A, I), q = ee(P, k), X = ee(P, I);
          A = Math.min(F.x, V.x, q.x, X.x), P = Math.max(F.x, V.x, q.x, X.x), k = Math.min(F.y, V.y, q.y, X.y), I = Math.max(F.y, V.y, q.y, X.y);
        }
        var ne = z + "Rot", he = U[ne] = U[ne] || {};
        he.x1 = A, he.y1 = k, he.x2 = P, he.y2 = I, he.w = P - A, he.h = I - k, nr(e, A, k, P, I), nr(i.labelBounds.all, A, k, P, I);
      }
      return e;
    }
  }, nf = function(e, r) {
    if (!r.cy().headless()) {
      var n = r.pstyle("outline-opacity").value, a = r.pstyle("outline-width").value, i = r.pstyle("outline-offset").value, s = a + i;
      wv(e, r, n, s, "outside", s / 2);
    }
  }, wv = function(e, r, n, a, i, s) {
    if (!(n === 0 || a <= 0 || i === "inside")) {
      var o = r.cy(), u = r.pstyle("shape").value, l = o.renderer().nodeShapes[u], c = r.position(), f = c.x, d = c.y, v = r.width(), h = r.height();
      if (l.hasMiterBounds) {
        i === "center" && (a /= 2);
        var y = l.miterBounds(f, d, v, h, a);
        kr(e, y);
      } else s != null && s > 0 && pi(e, [
        s,
        s,
        s,
        s
      ]);
    }
  }, L0 = function(e, r) {
    if (!r.cy().headless()) {
      var n = r.pstyle("border-opacity").value, a = r.pstyle("border-width").pfValue, i = r.pstyle("border-position").value;
      wv(e, r, n, a, i);
    }
  }, F0 = function(e, r) {
    var n = e._private.cy, a = n.styleEnabled(), i = n.headless(), s = zt(), o = e._private, u = e.isNode(), l = e.isEdge(), c, f, d, v, h, y, p = o.rstyle, g = u && a ? e.pstyle("bounds-expansion").pfValue : [
      0
    ], b = function(De) {
      return De.pstyle("display").value !== "none";
    }, m = !a || b(e) && (!l || b(e.source()) && b(e.target()));
    if (m) {
      var x = 0, E = 0;
      a && r.includeOverlays && (x = e.pstyle("overlay-opacity").value, x !== 0 && (E = e.pstyle("overlay-padding").value));
      var S = 0, w = 0;
      a && r.includeUnderlays && (S = e.pstyle("underlay-opacity").value, S !== 0 && (w = e.pstyle("underlay-padding").value));
      var T = Math.max(E, w), C = 0, R = 0;
      if (a && (C = e.pstyle("width").pfValue, R = C / 2), u && r.includeNodes) {
        var A = e.position();
        h = A.x, y = A.y;
        var P = e.outerWidth(), k = P / 2, I = e.outerHeight(), M = I / 2;
        c = h - k, f = h + k, d = y - M, v = y + M, nr(s, c, d, f, v), a && nf(s, e), a && r.includeOutlines && !i && nf(s, e), a && L0(s, e);
      } else if (l && r.includeEdges) if (a && !i) {
        var D = e.pstyle("curve-style").strValue;
        if (c = Math.min(p.srcX, p.midX, p.tgtX), f = Math.max(p.srcX, p.midX, p.tgtX), d = Math.min(p.srcY, p.midY, p.tgtY), v = Math.max(p.srcY, p.midY, p.tgtY), c -= R, f += R, d -= R, v += R, nr(s, c, d, f, v), D === "haystack") {
          var B = p.haystackPts;
          if (B && B.length === 2) {
            if (c = B[0].x, d = B[0].y, f = B[1].x, v = B[1].y, c > f) {
              var O = c;
              c = f, f = O;
            }
            if (d > v) {
              var z = d;
              d = v, v = z;
            }
            nr(s, c - R, d - R, f + R, v + R);
          }
        } else if (D === "bezier" || D === "unbundled-bezier" || _r(D, "segments") || _r(D, "taxi")) {
          var U;
          switch (D) {
            case "bezier":
            case "unbundled-bezier":
              U = p.bezierPts;
              break;
            case "segments":
            case "taxi":
            case "round-segments":
            case "round-taxi":
              U = p.linePts;
              break;
          }
          if (U != null) for (var N = 0; N < U.length; N++) {
            var L = U[N];
            c = L.x - R, f = L.x + R, d = L.y - R, v = L.y + R, nr(s, c, d, f, v);
          }
        }
      } else {
        var H = e.source(), Y = H.position(), K = e.target(), Q = K.position();
        if (c = Y.x, f = Q.x, d = Y.y, v = Q.y, c > f) {
          var re = c;
          c = f, f = re;
        }
        if (d > v) {
          var ie = d;
          d = v, v = ie;
        }
        c -= R, f += R, d -= R, v += R, nr(s, c, d, f, v);
      }
      if (a && r.includeEdges && l && (ni(s, e, "mid-source"), ni(s, e, "mid-target"), ni(s, e, "source"), ni(s, e, "target")), a) {
        var ee = e.pstyle("ghost").value === "yes";
        if (ee) {
          var F = e.pstyle("ghost-offset-x").pfValue, V = e.pstyle("ghost-offset-y").pfValue;
          nr(s, s.x1 + F, s.y1 + V, s.x2 + F, s.y2 + V);
        }
      }
      var q = o.bodyBounds = o.bodyBounds || {};
      Ul(q, s), pi(q, g), gi(q, 1), a && (c = s.x1, f = s.x2, d = s.y1, v = s.y2, nr(s, c - T, d - T, f + T, v + T));
      var X = o.overlayBounds = o.overlayBounds || {};
      Ul(X, s), pi(X, g), gi(X, 1);
      var ne = o.labelBounds = o.labelBounds || {};
      ne.all != null ? wm(ne.all) : ne.all = zt(), a && r.includeLabels && (r.includeMainLabels && Vo(s, e, null), l && (r.includeSourceLabels && Vo(s, e, "source"), r.includeTargetLabels && Vo(s, e, "target")));
    }
    return s.x1 = jt(s.x1), s.y1 = jt(s.y1), s.x2 = jt(s.x2), s.y2 = jt(s.y2), s.w = jt(s.x2 - s.x1), s.h = jt(s.y2 - s.y1), s.w > 0 && s.h > 0 && m && (pi(s, g), gi(s, 1)), s;
  }, xv = function(e) {
    var r = 0, n = function(s) {
      return (s ? 1 : 0) << r++;
    }, a = 0;
    return a += n(e.incudeNodes), a += n(e.includeEdges), a += n(e.includeLabels), a += n(e.includeMainLabels), a += n(e.includeSourceLabels), a += n(e.includeTargetLabels), a += n(e.includeOverlays), a += n(e.includeOutlines), a;
  }, Ev = function(e) {
    var r = function(o) {
      return Math.round(o);
    };
    if (e.isEdge()) {
      var n = e.source().position(), a = e.target().position();
      return Nl([
        r(n.x),
        r(n.y),
        r(a.x),
        r(a.y)
      ]);
    } else {
      var i = e.position();
      return Nl([
        r(i.x),
        r(i.y)
      ]);
    }
  }, af = function(e, r) {
    var n = e._private, a, i = e.isEdge(), s = r == null ? sf : xv(r), o = s === sf;
    if (n.bbCache == null ? (a = F0(e, Ra), n.bbCache = a, n.bbCachePosKey = Ev(e)) : a = n.bbCache, !o) {
      var u = e.isNode();
      a = zt(), (r.includeNodes && u || r.includeEdges && !u) && (r.includeOverlays ? kr(a, n.overlayBounds) : kr(a, n.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? kr(a, n.labelBounds.all) : (r.includeMainLabels && kr(a, n.labelBounds.mainRot), r.includeSourceLabels && kr(a, n.labelBounds.sourceRot), r.includeTargetLabels && kr(a, n.labelBounds.targetRot))), a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
    }
    return a;
  }, Ra = {
    includeNodes: true,
    includeEdges: true,
    includeLabels: true,
    includeMainLabels: true,
    includeSourceLabels: true,
    includeTargetLabels: true,
    includeOverlays: true,
    includeUnderlays: true,
    includeOutlines: true,
    useCache: true
  }, sf = xv(Ra), of = At(Ra);
  Wr.boundingBox = function(t) {
    var e, r = t === void 0 || t.useCache === void 0 || t.useCache === true, n = Un(function(c) {
      var f = c._private;
      return f.bbCache == null || f.styleDirty || f.bbCachePosKey !== Ev(c);
    }, function(c) {
      return c.id();
    });
    if (r && this.length === 1 && !n(this[0])) t === void 0 ? t = Ra : t = of(t), e = af(this[0], t);
    else {
      e = zt(), t = t || Ra;
      var a = of(t), i = this, s = i.cy(), o = s.styleEnabled();
      this.edges().forEach(n), this.nodes().forEach(n), o && this.recalculateRenderedStyle(r), this.updateCompoundBounds(!r);
      for (var u = 0; u < i.length; u++) {
        var l = i[u];
        n(l) && l.dirtyBoundingBoxCache(), kr(e, af(l, a));
      }
    }
    return e.x1 = jt(e.x1), e.y1 = jt(e.y1), e.x2 = jt(e.x2), e.y2 = jt(e.y2), e.w = jt(e.x2 - e.x1), e.h = jt(e.y2 - e.y1), e;
  };
  Wr.dirtyBoundingBoxCache = function() {
    for (var t = 0; t < this.length; t++) {
      var e = this[t]._private;
      e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
    }
    return this.emitAndNotify("bounds"), this;
  };
  Wr.boundingBoxAt = function(t) {
    var e = this.nodes(), r = this.cy(), n = r.hasCompoundNodes(), a = r.collection();
    if (n && (a = e.filter(function(l) {
      return l.isParent();
    }), e = e.not(a)), ze(t)) {
      var i = t;
      t = function() {
        return i;
      };
    }
    var s = function(c, f) {
      return c._private.bbAtOldPos = t(c, f);
    }, o = function(c) {
      return c._private.bbAtOldPos;
    };
    r.startBatch(), e.forEach(s).silentPositions(t), n && (a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), a.updateCompoundBounds(true));
    var u = bm(this.boundingBox({
      useCache: false
    }));
    return e.silentPositions(o), n && (a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), a.updateCompoundBounds(true)), r.endBatch(), u;
  };
  Vn.boundingbox = Vn.bb = Vn.boundingBox;
  Vn.renderedBoundingbox = Vn.renderedBoundingBox;
  var V0 = Wr, da, Va;
  da = Va = {};
  var Tv = function(e) {
    e.uppercaseName = xl(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = xl(e.outerName), da[e.name] = function() {
      var n = this[0], a = n._private, i = a.cy, s = i._private.styleEnabled;
      if (n) if (s) {
        if (n.isParent()) return n.updateCompoundBounds(), a[e.autoName] || 0;
        var o = n.pstyle(e.name);
        return o.strValue === "label" ? (n.recalculateRenderedStyle(), a.rstyle[e.labelName] || 0) : o.pfValue;
      } else return 1;
    }, da["outer" + e.uppercaseName] = function() {
      var n = this[0], a = n._private, i = a.cy, s = i._private.styleEnabled;
      if (n) if (s) {
        var o = n[e.name](), u = n.pstyle("border-position").value, l;
        u === "center" ? l = n.pstyle("border-width").pfValue : u === "outside" ? l = 2 * n.pstyle("border-width").pfValue : l = 0;
        var c = 2 * n.padding();
        return o + l + c;
      } else return 1;
    }, da["rendered" + e.uppercaseName] = function() {
      var n = this[0];
      if (n) {
        var a = n[e.name]();
        return a * this.cy().zoom();
      }
    }, da["rendered" + e.uppercaseOuterName] = function() {
      var n = this[0];
      if (n) {
        var a = n[e.outerName]();
        return a * this.cy().zoom();
      }
    };
  };
  Tv({
    name: "width"
  });
  Tv({
    name: "height"
  });
  Va.padding = function() {
    var t = this[0], e = t._private;
    return t.isParent() ? (t.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : t.pstyle("padding").pfValue) : t.pstyle("padding").pfValue;
  };
  Va.paddedHeight = function() {
    var t = this[0];
    return t.height() + 2 * t.padding();
  };
  Va.paddedWidth = function() {
    var t = this[0];
    return t.width() + 2 * t.padding();
  };
  var $0 = Va, U0 = function(e, r) {
    if (e.isEdge() && e.takesUpSpace()) return r(e);
  }, q0 = function(e, r) {
    if (e.isEdge() && e.takesUpSpace()) {
      var n = e.cy();
      return Ji(r(e), n.zoom(), n.pan());
    }
  }, Z0 = function(e, r) {
    if (e.isEdge() && e.takesUpSpace()) {
      var n = e.cy(), a = n.pan(), i = n.zoom();
      return r(e).map(function(s) {
        return Ji(s, i, a);
      });
    }
  }, G0 = function(e) {
    return e.renderer().getControlPoints(e);
  }, W0 = function(e) {
    return e.renderer().getSegmentPoints(e);
  }, H0 = function(e) {
    return e.renderer().getSourceEndpoint(e);
  }, K0 = function(e) {
    return e.renderer().getTargetEndpoint(e);
  }, Y0 = function(e) {
    return e.renderer().getEdgeMidpoint(e);
  }, uf = {
    controlPoints: {
      get: G0,
      mult: true
    },
    segmentPoints: {
      get: W0,
      mult: true
    },
    sourceEndpoint: {
      get: H0
    },
    targetEndpoint: {
      get: K0
    },
    midpoint: {
      get: Y0
    }
  }, j0 = function(e) {
    return "rendered" + e[0].toUpperCase() + e.substr(1);
  }, X0 = Object.keys(uf).reduce(function(t, e) {
    var r = uf[e], n = j0(e);
    return t[e] = function() {
      return U0(this, r.get);
    }, r.mult ? t[n] = function() {
      return Z0(this, r.get);
    } : t[n] = function() {
      return q0(this, r.get);
    }, t;
  }, {}), J0 = Ee({}, z0, V0, $0, X0);
  var Sv = function(e, r) {
    this.recycle(e, r);
  };
  function sa() {
    return false;
  }
  function ai() {
    return true;
  }
  Sv.prototype = {
    instanceString: function() {
      return "event";
    },
    recycle: function(e, r) {
      if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = sa, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? ai : sa) : e != null && e.type ? r = e : this.type = e, r != null && (this.originalEvent = r.originalEvent, this.type = r.type != null ? r.type : this.type, this.cy = r.cy, this.target = r.target, this.position = r.position, this.renderedPosition = r.renderedPosition, this.namespace = r.namespace, this.layout = r.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
        var n = this.position, a = this.cy.zoom(), i = this.cy.pan();
        this.renderedPosition = {
          x: n.x * a + i.x,
          y: n.y * a + i.y
        };
      }
      this.timeStamp = e && e.timeStamp || Date.now();
    },
    preventDefault: function() {
      this.isDefaultPrevented = ai;
      var e = this.originalEvent;
      e && e.preventDefault && e.preventDefault();
    },
    stopPropagation: function() {
      this.isPropagationStopped = ai;
      var e = this.originalEvent;
      e && e.stopPropagation && e.stopPropagation();
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = ai, this.stopPropagation();
    },
    isDefaultPrevented: sa,
    isPropagationStopped: sa,
    isImmediatePropagationStopped: sa
  };
  var Cv = /^([^.]+)(\.(?:[^.]+))?$/, Q0 = ".*", Rv = {
    qualifierCompare: function(e, r) {
      return e === r;
    },
    eventMatches: function() {
      return true;
    },
    addEventFields: function() {
    },
    callbackContext: function(e) {
      return e;
    },
    beforeEmit: function() {
    },
    afterEmit: function() {
    },
    bubble: function() {
      return false;
    },
    parent: function() {
      return null;
    },
    context: null
  }, lf = Object.keys(Rv), eb = {};
  function is() {
    for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : eb, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < lf.length; r++) {
      var n = lf[r];
      this[n] = t[n] || Rv[n];
    }
    this.context = e || this.context, this.listeners = [], this.emitting = 0;
  }
  var $r = is.prototype, Av = function(e, r, n, a, i, s, o) {
    at(a) && (i = a, a = null), o && (s == null ? s = o : s = Ee({}, s, o));
    for (var u = Ke(n) ? n : n.split(/\s+/), l = 0; l < u.length; l++) {
      var c = u[l];
      if (!Nr(c)) {
        var f = c.match(Cv);
        if (f) {
          var d = f[1], v = f[2] ? f[2] : null, h = r(e, c, d, v, a, i, s);
          if (h === false) break;
        }
      }
    }
  }, cf = function(e, r) {
    return e.addEventFields(e.context, r), new Sv(r.type, r);
  }, tb = function(e, r, n) {
    if (op(n)) {
      r(e, n);
      return;
    } else if (ze(n)) {
      r(e, cf(e, n));
      return;
    }
    for (var a = Ke(n) ? n : n.split(/\s+/), i = 0; i < a.length; i++) {
      var s = a[i];
      if (!Nr(s)) {
        var o = s.match(Cv);
        if (o) {
          var u = o[1], l = o[2] ? o[2] : null, c = cf(e, {
            type: u,
            namespace: l,
            target: e.context
          });
          r(e, c);
        }
      }
    }
  };
  $r.on = $r.addListener = function(t, e, r, n, a) {
    return Av(this, function(i, s, o, u, l, c, f) {
      at(c) && i.listeners.push({
        event: s,
        callback: c,
        type: o,
        namespace: u,
        qualifier: l,
        conf: f
      });
    }, t, e, r, n, a), this;
  };
  $r.one = function(t, e, r, n) {
    return this.on(t, e, r, n, {
      one: true
    });
  };
  $r.removeListener = $r.off = function(t, e, r, n) {
    var a = this;
    this.emitting !== 0 && (this.listeners = qp(this.listeners));
    for (var i = this.listeners, s = function(l) {
      var c = i[l];
      Av(a, function(f, d, v, h, y, p) {
        if ((c.type === v || t === "*") && (!h && c.namespace !== ".*" || c.namespace === h) && (!y || f.qualifierCompare(c.qualifier, y)) && (!p || c.callback === p)) return i.splice(l, 1), false;
      }, t, e, r, n);
    }, o = i.length - 1; o >= 0; o--) s(o);
    return this;
  };
  $r.removeAllListeners = function() {
    return this.removeListener("*");
  };
  $r.emit = $r.trigger = function(t, e, r) {
    var n = this.listeners, a = n.length;
    return this.emitting++, Ke(e) || (e = [
      e
    ]), tb(this, function(i, s) {
      r != null && (n = [
        {
          event: s.event,
          type: s.type,
          namespace: s.namespace,
          callback: r
        }
      ], a = n.length);
      for (var o = function() {
        var c = n[u];
        if (c.type === s.type && (!c.namespace || c.namespace === s.namespace || c.namespace === Q0) && i.eventMatches(i.context, c, s)) {
          var f = [
            s
          ];
          e != null && Gp(f, e), i.beforeEmit(i.context, c, s), c.conf && c.conf.one && (i.listeners = i.listeners.filter(function(h) {
            return h !== c;
          }));
          var d = i.callbackContext(i.context, c, s), v = c.callback.apply(d, f);
          i.afterEmit(i.context, c, s), v === false && (s.stopPropagation(), s.preventDefault());
        }
      }, u = 0; u < a; u++) o();
      i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
    }, t), this.emitting--, this;
  };
  var rb = {
    qualifierCompare: function(e, r) {
      return e == null || r == null ? e == null && r == null : e.sameText(r);
    },
    eventMatches: function(e, r, n) {
      var a = r.qualifier;
      return a != null ? e !== n.target && Da(n.target) && a.matches(n.target) : true;
    },
    addEventFields: function(e, r) {
      r.cy = e.cy(), r.target = e;
    },
    callbackContext: function(e, r, n) {
      return r.qualifier != null ? n.target : e;
    },
    beforeEmit: function(e, r) {
      r.conf && r.conf.once && r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
    },
    bubble: function() {
      return true;
    },
    parent: function(e) {
      return e.isChild() ? e.parent() : e.cy();
    }
  }, ii = function(e) {
    return me(e) ? new Fr(e) : e;
  }, kv = {
    createEmitter: function() {
      for (var e = 0; e < this.length; e++) {
        var r = this[e], n = r._private;
        n.emitter || (n.emitter = new is(rb, r));
      }
      return this;
    },
    emitter: function() {
      return this._private.emitter;
    },
    on: function(e, r, n) {
      for (var a = ii(r), i = 0; i < this.length; i++) {
        var s = this[i];
        s.emitter().on(e, a, n);
      }
      return this;
    },
    removeListener: function(e, r, n) {
      for (var a = ii(r), i = 0; i < this.length; i++) {
        var s = this[i];
        s.emitter().removeListener(e, a, n);
      }
      return this;
    },
    removeAllListeners: function() {
      for (var e = 0; e < this.length; e++) {
        var r = this[e];
        r.emitter().removeAllListeners();
      }
      return this;
    },
    one: function(e, r, n) {
      for (var a = ii(r), i = 0; i < this.length; i++) {
        var s = this[i];
        s.emitter().one(e, a, n);
      }
      return this;
    },
    once: function(e, r, n) {
      for (var a = ii(r), i = 0; i < this.length; i++) {
        var s = this[i];
        s.emitter().on(e, a, n, {
          once: true,
          onceCollection: this
        });
      }
    },
    emit: function(e, r) {
      for (var n = 0; n < this.length; n++) {
        var a = this[n];
        a.emitter().emit(e, r);
      }
      return this;
    },
    emitAndNotify: function(e, r) {
      if (this.length !== 0) return this.cy().notify(e, this), this.emit(e, r), this;
    }
  };
  Ze.eventAliasesOn(kv);
  var Pv = {
    nodes: function(e) {
      return this.filter(function(r) {
        return r.isNode();
      }).filter(e);
    },
    edges: function(e) {
      return this.filter(function(r) {
        return r.isEdge();
      }).filter(e);
    },
    byGroup: function() {
      for (var e = this.spawn(), r = this.spawn(), n = 0; n < this.length; n++) {
        var a = this[n];
        a.isNode() ? e.push(a) : r.push(a);
      }
      return {
        nodes: e,
        edges: r
      };
    },
    filter: function(e, r) {
      if (e === void 0) return this;
      if (me(e) || Wt(e)) return new Fr(e).filter(this);
      if (at(e)) {
        for (var n = this.spawn(), a = this, i = 0; i < a.length; i++) {
          var s = a[i], o = r ? e.apply(r, [
            s,
            i,
            a
          ]) : e(s, i, a);
          o && n.push(s);
        }
        return n;
      }
      return this.spawn();
    },
    not: function(e) {
      if (e) {
        me(e) && (e = this.filter(e));
        for (var r = this.spawn(), n = 0; n < this.length; n++) {
          var a = this[n], i = e.has(a);
          i || r.push(a);
        }
        return r;
      } else return this;
    },
    absoluteComplement: function() {
      var e = this.cy();
      return e.mutableElements().not(this);
    },
    intersect: function(e) {
      if (me(e)) {
        var r = e;
        return this.filter(r);
      }
      for (var n = this.spawn(), a = this, i = e, s = this.length < e.length, o = s ? a : i, u = s ? i : a, l = 0; l < o.length; l++) {
        var c = o[l];
        u.has(c) && n.push(c);
      }
      return n;
    },
    xor: function(e) {
      var r = this._private.cy;
      me(e) && (e = r.$(e));
      var n = this.spawn(), a = this, i = e, s = function(u, l) {
        for (var c = 0; c < u.length; c++) {
          var f = u[c], d = f._private.data.id, v = l.hasElementWithId(d);
          v || n.push(f);
        }
      };
      return s(a, i), s(i, a), n;
    },
    diff: function(e) {
      var r = this._private.cy;
      me(e) && (e = r.$(e));
      var n = this.spawn(), a = this.spawn(), i = this.spawn(), s = this, o = e, u = function(c, f, d) {
        for (var v = 0; v < c.length; v++) {
          var h = c[v], y = h._private.data.id, p = f.hasElementWithId(y);
          p ? i.merge(h) : d.push(h);
        }
      };
      return u(s, o, n), u(o, s, a), {
        left: n,
        right: a,
        both: i
      };
    },
    add: function(e) {
      var r = this._private.cy;
      if (!e) return this;
      if (me(e)) {
        var n = e;
        e = r.mutableElements().filter(n);
      }
      for (var a = this.spawnSelf(), i = 0; i < e.length; i++) {
        var s = e[i], o = !this.has(s);
        o && a.push(s);
      }
      return a;
    },
    merge: function(e) {
      var r = this._private, n = r.cy;
      if (!e) return this;
      if (e && me(e)) {
        var a = e;
        e = n.mutableElements().filter(a);
      }
      for (var i = r.map, s = 0; s < e.length; s++) {
        var o = e[s], u = o._private.data.id, l = !i.has(u);
        if (l) {
          var c = this.length++;
          this[c] = o, i.set(u, {
            ele: o,
            index: c
          });
        }
      }
      return this;
    },
    unmergeAt: function(e) {
      var r = this[e], n = r.id(), a = this._private, i = a.map;
      this[e] = void 0, i.delete(n);
      var s = e === this.length - 1;
      if (this.length > 1 && !s) {
        var o = this.length - 1, u = this[o], l = u._private.data.id;
        this[o] = void 0, this[e] = u, i.set(l, {
          ele: u,
          index: e
        });
      }
      return this.length--, this;
    },
    unmergeOne: function(e) {
      e = e[0];
      var r = this._private, n = e._private.data.id, a = r.map, i = a.get(n);
      if (!i) return this;
      var s = i.index;
      return this.unmergeAt(s), this;
    },
    unmerge: function(e) {
      var r = this._private.cy;
      if (!e) return this;
      if (e && me(e)) {
        var n = e;
        e = r.mutableElements().filter(n);
      }
      for (var a = 0; a < e.length; a++) this.unmergeOne(e[a]);
      return this;
    },
    unmergeBy: function(e) {
      for (var r = this.length - 1; r >= 0; r--) {
        var n = this[r];
        e(n) && this.unmergeAt(r);
      }
      return this;
    },
    map: function(e, r) {
      for (var n = [], a = this, i = 0; i < a.length; i++) {
        var s = a[i], o = r ? e.apply(r, [
          s,
          i,
          a
        ]) : e(s, i, a);
        n.push(o);
      }
      return n;
    },
    reduce: function(e, r) {
      for (var n = r, a = this, i = 0; i < a.length; i++) n = e(n, a[i], i, a);
      return n;
    },
    max: function(e, r) {
      for (var n = -1 / 0, a, i = this, s = 0; s < i.length; s++) {
        var o = i[s], u = r ? e.apply(r, [
          o,
          s,
          i
        ]) : e(o, s, i);
        u > n && (n = u, a = o);
      }
      return {
        value: n,
        ele: a
      };
    },
    min: function(e, r) {
      for (var n = 1 / 0, a, i = this, s = 0; s < i.length; s++) {
        var o = i[s], u = r ? e.apply(r, [
          o,
          s,
          i
        ]) : e(o, s, i);
        u < n && (n = u, a = o);
      }
      return {
        value: n,
        ele: a
      };
    }
  }, Fe = Pv;
  Fe.u = Fe["|"] = Fe["+"] = Fe.union = Fe.or = Fe.add;
  Fe["\\"] = Fe["!"] = Fe["-"] = Fe.difference = Fe.relativeComplement = Fe.subtract = Fe.not;
  Fe.n = Fe["&"] = Fe["."] = Fe.and = Fe.intersection = Fe.intersect;
  Fe["^"] = Fe["(+)"] = Fe["(-)"] = Fe.symmetricDifference = Fe.symdiff = Fe.xor;
  Fe.fnFilter = Fe.filterFn = Fe.stdFilter = Fe.filter;
  Fe.complement = Fe.abscomp = Fe.absoluteComplement;
  var nb = {
    isNode: function() {
      return this.group() === "nodes";
    },
    isEdge: function() {
      return this.group() === "edges";
    },
    isLoop: function() {
      return this.isEdge() && this.source()[0] === this.target()[0];
    },
    isSimple: function() {
      return this.isEdge() && this.source()[0] !== this.target()[0];
    },
    group: function() {
      var e = this[0];
      if (e) return e._private.group;
    }
  }, _v = function(e, r) {
    var n = e.cy(), a = n.hasCompoundNodes();
    function i(c) {
      var f = c.pstyle("z-compound-depth");
      return f.value === "auto" ? a ? c.zDepth() : 0 : f.value === "bottom" ? -1 : f.value === "top" ? Ou : 0;
    }
    var s = i(e) - i(r);
    if (s !== 0) return s;
    function o(c) {
      var f = c.pstyle("z-index-compare");
      return f.value === "auto" && c.isNode() ? 1 : 0;
    }
    var u = o(e) - o(r);
    if (u !== 0) return u;
    var l = e.pstyle("z-index").value - r.pstyle("z-index").value;
    return l !== 0 ? l : e.poolIndex() - r.poolIndex();
  }, Ni = {
    forEach: function(e, r) {
      if (at(e)) for (var n = this.length, a = 0; a < n; a++) {
        var i = this[a], s = r ? e.apply(r, [
          i,
          a,
          this
        ]) : e(i, a, this);
        if (s === false) break;
      }
      return this;
    },
    toArray: function() {
      for (var e = [], r = 0; r < this.length; r++) e.push(this[r]);
      return e;
    },
    slice: function(e, r) {
      var n = [], a = this.length;
      r == null && (r = a), e == null && (e = 0), e < 0 && (e = a + e), r < 0 && (r = a + r);
      for (var i = e; i >= 0 && i < r && i < a; i++) n.push(this[i]);
      return this.spawn(n);
    },
    size: function() {
      return this.length;
    },
    eq: function(e) {
      return this[e] || this.spawn();
    },
    first: function() {
      return this[0] || this.spawn();
    },
    last: function() {
      return this[this.length - 1] || this.spawn();
    },
    empty: function() {
      return this.length === 0;
    },
    nonempty: function() {
      return !this.empty();
    },
    sort: function(e) {
      if (!at(e)) return this;
      var r = this.toArray().sort(e);
      return this.spawn(r);
    },
    sortByZIndex: function() {
      return this.sort(_v);
    },
    zDepth: function() {
      var e = this[0];
      if (e) {
        var r = e._private, n = r.group;
        if (n === "nodes") {
          var a = r.data.parent ? e.parents().size() : 0;
          return e.isParent() ? a : Ou - 1;
        } else {
          var i = r.source, s = r.target, o = i.zDepth(), u = s.zDepth();
          return Math.max(o, u, 0);
        }
      }
    }
  };
  Ni.each = Ni.forEach;
  var ab = function() {
    var e = "undefined", r = (typeof Symbol > "u" ? "undefined" : mt(Symbol)) != e && mt(Symbol.iterator) != e;
    r && (Ni[Symbol.iterator] = function() {
      var n = this, a = {
        value: void 0,
        done: false
      }, i = 0, s = this.length;
      return kd({
        next: function() {
          return i < s ? a.value = n[i++] : (a.value = void 0, a.done = true), a;
        }
      }, Symbol.iterator, function() {
        return this;
      });
    });
  };
  ab();
  var ib = At({
    nodeDimensionsIncludeLabels: false
  }), yi = {
    layoutDimensions: function(e) {
      e = ib(e);
      var r;
      if (!this.takesUpSpace()) r = {
        w: 0,
        h: 0
      };
      else if (e.nodeDimensionsIncludeLabels) {
        var n = this.boundingBox();
        r = {
          w: n.w,
          h: n.h
        };
      } else r = {
        w: this.outerWidth(),
        h: this.outerHeight()
      };
      return (r.w === 0 || r.h === 0) && (r.w = r.h = 1), r;
    },
    layoutPositions: function(e, r, n) {
      var a = this.nodes().filter(function(E) {
        return !E.isParent();
      }), i = this.cy(), s = r.eles, o = function(S) {
        return S.id();
      }, u = Un(n, o);
      e.emit({
        type: "layoutstart",
        layout: e
      }), e.animations = [];
      var l = function(S, w, T) {
        var C = {
          x: w.x1 + w.w / 2,
          y: w.y1 + w.h / 2
        }, R = {
          x: (T.x - C.x) * S,
          y: (T.y - C.y) * S
        };
        return {
          x: C.x + R.x,
          y: C.y + R.y
        };
      }, c = r.spacingFactor && r.spacingFactor !== 1, f = function() {
        if (!c) return null;
        for (var S = zt(), w = 0; w < a.length; w++) {
          var T = a[w], C = u(T, w);
          Kd(S, C.x, C.y);
        }
        return S;
      }, d = f(), v = Un(function(E, S) {
        var w = u(E, S);
        if (c) {
          var T = Math.abs(r.spacingFactor);
          w = l(T, d, w);
        }
        return r.transform != null && (w = r.transform(E, w)), w;
      }, o);
      if (r.animate) {
        for (var h = 0; h < a.length; h++) {
          var y = a[h], p = v(y, h), g = r.animateFilter == null || r.animateFilter(y, h);
          if (g) {
            var b = y.animation({
              position: p,
              duration: r.animationDuration,
              easing: r.animationEasing
            });
            e.animations.push(b);
          } else y.position(p);
        }
        if (r.fit) {
          var m = i.animation({
            fit: {
              boundingBox: s.boundingBoxAt(v),
              padding: r.padding
            },
            duration: r.animationDuration,
            easing: r.animationEasing
          });
          e.animations.push(m);
        } else if (r.zoom !== void 0 && r.pan !== void 0) {
          var x = i.animation({
            zoom: r.zoom,
            pan: r.pan,
            duration: r.animationDuration,
            easing: r.animationEasing
          });
          e.animations.push(x);
        }
        e.animations.forEach(function(E) {
          return E.play();
        }), e.one("layoutready", r.ready), e.emit({
          type: "layoutready",
          layout: e
        }), Yn.all(e.animations.map(function(E) {
          return E.promise();
        })).then(function() {
          e.one("layoutstop", r.stop), e.emit({
            type: "layoutstop",
            layout: e
          });
        });
      } else a.positions(v), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
        type: "layoutready",
        layout: e
      }), e.one("layoutstop", r.stop), e.emit({
        type: "layoutstop",
        layout: e
      });
      return this;
    },
    layout: function(e) {
      var r = this.cy();
      return r.makeLayout(Ee({}, e, {
        eles: this
      }));
    }
  };
  yi.createLayout = yi.makeLayout = yi.layout;
  function Iv(t, e, r) {
    var n = r._private, a = n.styleCache = n.styleCache || [], i;
    return (i = a[t]) != null || (i = a[t] = e(r)), i;
  }
  function ss(t, e) {
    return t = dn(t), function(n) {
      return Iv(t, e, n);
    };
  }
  function os(t, e) {
    t = dn(t);
    var r = function(a) {
      return e.call(a);
    };
    return function() {
      var a = this[0];
      if (a) return Iv(t, r, a);
    };
  }
  var Ct = {
    recalculateRenderedStyle: function(e) {
      var r = this.cy(), n = r.renderer(), a = r.styleEnabled();
      return n && a && n.recalculateRenderedStyle(this, e), this;
    },
    dirtyStyleCache: function() {
      var e = this.cy(), r = function(i) {
        return i._private.styleCache = null;
      };
      if (e.hasCompoundNodes()) {
        var n;
        n = this.spawnSelf().merge(this.descendants()).merge(this.parents()), n.merge(n.connectedEdges()), n.forEach(r);
      } else this.forEach(function(a) {
        r(a), a.connectedEdges().forEach(r);
      });
      return this;
    },
    updateStyle: function(e) {
      var r = this._private.cy;
      if (!r.styleEnabled()) return this;
      if (r.batching()) {
        var n = r._private.batchStyleEles;
        return n.merge(this), this;
      }
      var a = r.hasCompoundNodes(), i = this;
      e = !!(e || e === void 0), a && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
      var s = i;
      return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
        return o._private.styleDirty = true;
      }), this;
    },
    cleanStyle: function() {
      var e = this.cy();
      if (e.styleEnabled()) for (var r = 0; r < this.length; r++) {
        var n = this[r];
        n._private.styleDirty && (n._private.styleDirty = false, e.style().apply(n));
      }
    },
    parsedStyle: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, n = this[0], a = n.cy();
      if (a.styleEnabled() && n) {
        n._private.styleDirty && (n._private.styleDirty = false, a.style().apply(n));
        var i = n._private.style[e];
        return i ?? (r ? a.style().getDefaultProperty(e) : null);
      }
    },
    numericStyle: function(e) {
      var r = this[0];
      if (r.cy().styleEnabled() && r) {
        var n = r.pstyle(e);
        return n.pfValue !== void 0 ? n.pfValue : n.value;
      }
    },
    numericStyleUnits: function(e) {
      var r = this[0];
      if (r.cy().styleEnabled() && r) return r.pstyle(e).units;
    },
    renderedStyle: function(e) {
      var r = this.cy();
      if (!r.styleEnabled()) return this;
      var n = this[0];
      if (n) return r.style().getRenderedStyle(n, e);
    },
    style: function(e, r) {
      var n = this.cy();
      if (!n.styleEnabled()) return this;
      var a = false, i = n.style();
      if (ze(e)) {
        var s = e;
        i.applyBypass(this, s, a), this.emitAndNotify("style");
      } else if (me(e)) if (r === void 0) {
        var o = this[0];
        return o ? i.getStylePropertyValue(o, e) : void 0;
      } else i.applyBypass(this, e, r, a), this.emitAndNotify("style");
      else if (e === void 0) {
        var u = this[0];
        return u ? i.getRawStyle(u) : void 0;
      }
      return this;
    },
    removeStyle: function(e) {
      var r = this.cy();
      if (!r.styleEnabled()) return this;
      var n = false, a = r.style(), i = this;
      if (e === void 0) for (var s = 0; s < i.length; s++) {
        var o = i[s];
        a.removeAllBypasses(o, n);
      }
      else {
        e = e.split(/\s+/);
        for (var u = 0; u < i.length; u++) {
          var l = i[u];
          a.removeBypasses(l, e, n);
        }
      }
      return this.emitAndNotify("style"), this;
    },
    show: function() {
      return this.css("display", "element"), this;
    },
    hide: function() {
      return this.css("display", "none"), this;
    },
    effectiveOpacity: function() {
      var e = this.cy();
      if (!e.styleEnabled()) return 1;
      var r = e.hasCompoundNodes(), n = this[0];
      if (n) {
        var a = n._private, i = n.pstyle("opacity").value;
        if (!r) return i;
        var s = a.data.parent ? n.parents() : null;
        if (s) for (var o = 0; o < s.length; o++) {
          var u = s[o], l = u.pstyle("opacity").value;
          i = l * i;
        }
        return i;
      }
    },
    transparent: function() {
      var e = this.cy();
      if (!e.styleEnabled()) return false;
      var r = this[0], n = r.cy().hasCompoundNodes();
      if (r) return n ? r.effectiveOpacity() === 0 : r.pstyle("opacity").value === 0;
    },
    backgrounding: function() {
      var e = this.cy();
      if (!e.styleEnabled()) return false;
      var r = this[0];
      return !!r._private.backgrounding;
    }
  };
  function $o(t, e) {
    var r = t._private, n = r.data.parent ? t.parents() : null;
    if (n) for (var a = 0; a < n.length; a++) {
      var i = n[a];
      if (!e(i)) return false;
    }
    return true;
  }
  function Hu(t) {
    var e = t.ok, r = t.edgeOkViaNode || t.ok, n = t.parentOk || t.ok;
    return function() {
      var a = this.cy();
      if (!a.styleEnabled()) return true;
      var i = this[0], s = a.hasCompoundNodes();
      if (i) {
        var o = i._private;
        if (!e(i)) return false;
        if (i.isNode()) return !s || $o(i, n);
        var u = o.source, l = o.target;
        return r(u) && (!s || $o(u, r)) && (u === l || r(l) && (!s || $o(l, r)));
      }
    };
  }
  var jn = ss("eleTakesUpSpace", function(t) {
    return t.pstyle("display").value === "element" && t.width() !== 0 && (t.isNode() ? t.height() !== 0 : true);
  });
  Ct.takesUpSpace = os("takesUpSpace", Hu({
    ok: jn
  }));
  var sb = ss("eleInteractive", function(t) {
    return t.pstyle("events").value === "yes" && t.pstyle("visibility").value === "visible" && jn(t);
  }), ob = ss("parentInteractive", function(t) {
    return t.pstyle("visibility").value === "visible" && jn(t);
  });
  Ct.interactive = os("interactive", Hu({
    ok: sb,
    parentOk: ob,
    edgeOkViaNode: jn
  }));
  Ct.noninteractive = function() {
    var t = this[0];
    if (t) return !t.interactive();
  };
  var ub = ss("eleVisible", function(t) {
    return t.pstyle("visibility").value === "visible" && t.pstyle("opacity").pfValue !== 0 && jn(t);
  }), lb = jn;
  Ct.visible = os("visible", Hu({
    ok: ub,
    edgeOkViaNode: lb
  }));
  Ct.hidden = function() {
    var t = this[0];
    if (t) return !t.visible();
  };
  Ct.isBundledBezier = os("isBundledBezier", function() {
    return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : false;
  });
  Ct.bypass = Ct.css = Ct.style;
  Ct.renderedCss = Ct.renderedStyle;
  Ct.removeBypass = Ct.removeCss = Ct.removeStyle;
  Ct.pstyle = Ct.parsedStyle;
  var Dr = {};
  function ff(t) {
    return function() {
      var e = arguments, r = [];
      if (e.length === 2) {
        var n = e[0], a = e[1];
        this.on(t.event, n, a);
      } else if (e.length === 1 && at(e[0])) {
        var i = e[0];
        this.on(t.event, i);
      } else if (e.length === 0 || e.length === 1 && Ke(e[0])) {
        for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
          var u = this[o], l = !t.ableField || u._private[t.ableField], c = u._private[t.field] != t.value;
          if (t.overrideAble) {
            var f = t.overrideAble(u);
            if (f !== void 0 && (l = f, !f)) return this;
          }
          l && (u._private[t.field] = t.value, c && r.push(u));
        }
        var d = this.spawn(r);
        d.updateStyle(), d.emit(t.event), s && d.emit(s);
      }
      return this;
    };
  }
  function Xn(t) {
    Dr[t.field] = function() {
      var e = this[0];
      if (e) {
        if (t.overrideField) {
          var r = t.overrideField(e);
          if (r !== void 0) return r;
        }
        return e._private[t.field];
      }
    }, Dr[t.on] = ff({
      event: t.on,
      field: t.field,
      ableField: t.ableField,
      overrideAble: t.overrideAble,
      value: true
    }), Dr[t.off] = ff({
      event: t.off,
      field: t.field,
      ableField: t.ableField,
      overrideAble: t.overrideAble,
      value: false
    });
  }
  Xn({
    field: "locked",
    overrideField: function(e) {
      return e.cy().autolock() ? true : void 0;
    },
    on: "lock",
    off: "unlock"
  });
  Xn({
    field: "grabbable",
    overrideField: function(e) {
      return e.cy().autoungrabify() || e.pannable() ? false : void 0;
    },
    on: "grabify",
    off: "ungrabify"
  });
  Xn({
    field: "selected",
    ableField: "selectable",
    overrideAble: function(e) {
      return e.cy().autounselectify() ? false : void 0;
    },
    on: "select",
    off: "unselect"
  });
  Xn({
    field: "selectable",
    overrideField: function(e) {
      return e.cy().autounselectify() ? false : void 0;
    },
    on: "selectify",
    off: "unselectify"
  });
  Dr.deselect = Dr.unselect;
  Dr.grabbed = function() {
    var t = this[0];
    if (t) return t._private.grabbed;
  };
  Xn({
    field: "active",
    on: "activate",
    off: "unactivate"
  });
  Xn({
    field: "pannable",
    on: "panify",
    off: "unpanify"
  });
  Dr.inactive = function() {
    var t = this[0];
    if (t) return !t._private.active;
  };
  var _t = {}, df = function(e) {
    return function(n) {
      for (var a = this, i = [], s = 0; s < a.length; s++) {
        var o = a[s];
        if (o.isNode()) {
          for (var u = false, l = o.connectedEdges(), c = 0; c < l.length; c++) {
            var f = l[c], d = f.source(), v = f.target();
            if (e.noIncomingEdges && v === o && d !== o || e.noOutgoingEdges && d === o && v !== o) {
              u = true;
              break;
            }
          }
          u || i.push(o);
        }
      }
      return this.spawn(i, true).filter(n);
    };
  }, vf = function(e) {
    return function(r) {
      for (var n = this, a = [], i = 0; i < n.length; i++) {
        var s = n[i];
        if (s.isNode()) for (var o = s.connectedEdges(), u = 0; u < o.length; u++) {
          var l = o[u], c = l.source(), f = l.target();
          e.outgoing && c === s ? (a.push(l), a.push(f)) : e.incoming && f === s && (a.push(l), a.push(c));
        }
      }
      return this.spawn(a, true).filter(r);
    };
  }, hf = function(e) {
    return function(r) {
      for (var n = this, a = [], i = {}; ; ) {
        var s = e.outgoing ? n.outgoers() : n.incomers();
        if (s.length === 0) break;
        for (var o = false, u = 0; u < s.length; u++) {
          var l = s[u], c = l.id();
          i[c] || (i[c] = true, a.push(l), o = true);
        }
        if (!o) break;
        n = s;
      }
      return this.spawn(a, true).filter(r);
    };
  };
  _t.clearTraversalCache = function() {
    for (var t = 0; t < this.length; t++) this[t]._private.traversalCache = null;
  };
  Ee(_t, {
    roots: df({
      noIncomingEdges: true
    }),
    leaves: df({
      noOutgoingEdges: true
    }),
    outgoers: Jt(vf({
      outgoing: true
    }), "outgoers"),
    successors: hf({
      outgoing: true
    }),
    incomers: Jt(vf({
      incoming: true
    }), "incomers"),
    predecessors: hf({})
  });
  Ee(_t, {
    neighborhood: Jt(function(t) {
      for (var e = [], r = this.nodes(), n = 0; n < r.length; n++) for (var a = r[n], i = a.connectedEdges(), s = 0; s < i.length; s++) {
        var o = i[s], u = o.source(), l = o.target(), c = a === u ? l : u;
        c.length > 0 && e.push(c[0]), e.push(o[0]);
      }
      return this.spawn(e, true).filter(t);
    }, "neighborhood"),
    closedNeighborhood: function(e) {
      return this.neighborhood().add(this).filter(e);
    },
    openNeighborhood: function(e) {
      return this.neighborhood(e);
    }
  });
  _t.neighbourhood = _t.neighborhood;
  _t.closedNeighbourhood = _t.closedNeighborhood;
  _t.openNeighbourhood = _t.openNeighborhood;
  Ee(_t, {
    source: Jt(function(e) {
      var r = this[0], n;
      return r && (n = r._private.source || r.cy().collection()), n && e ? n.filter(e) : n;
    }, "source"),
    target: Jt(function(e) {
      var r = this[0], n;
      return r && (n = r._private.target || r.cy().collection()), n && e ? n.filter(e) : n;
    }, "target"),
    sources: gf({
      attr: "source"
    }),
    targets: gf({
      attr: "target"
    })
  });
  function gf(t) {
    return function(r) {
      for (var n = [], a = 0; a < this.length; a++) {
        var i = this[a], s = i._private[t.attr];
        s && n.push(s);
      }
      return this.spawn(n, true).filter(r);
    };
  }
  Ee(_t, {
    edgesWith: Jt(pf(), "edgesWith"),
    edgesTo: Jt(pf({
      thisIsSrc: true
    }), "edgesTo")
  });
  function pf(t) {
    return function(r) {
      var n = [], a = this._private.cy, i = t || {};
      me(r) && (r = a.$(r));
      for (var s = 0; s < r.length; s++) for (var o = r[s]._private.edges, u = 0; u < o.length; u++) {
        var l = o[u], c = l._private.data, f = this.hasElementWithId(c.source) && r.hasElementWithId(c.target), d = r.hasElementWithId(c.source) && this.hasElementWithId(c.target), v = f || d;
        v && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !f || i.thisIsTgt && !d) || n.push(l));
      }
      return this.spawn(n, true);
    };
  }
  Ee(_t, {
    connectedEdges: Jt(function(t) {
      for (var e = [], r = this, n = 0; n < r.length; n++) {
        var a = r[n];
        if (a.isNode()) for (var i = a._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          e.push(o);
        }
      }
      return this.spawn(e, true).filter(t);
    }, "connectedEdges"),
    connectedNodes: Jt(function(t) {
      for (var e = [], r = this, n = 0; n < r.length; n++) {
        var a = r[n];
        a.isEdge() && (e.push(a.source()[0]), e.push(a.target()[0]));
      }
      return this.spawn(e, true).filter(t);
    }, "connectedNodes"),
    parallelEdges: Jt(mf(), "parallelEdges"),
    codirectedEdges: Jt(mf({
      codirected: true
    }), "codirectedEdges")
  });
  function mf(t) {
    var e = {
      codirected: false
    };
    return t = Ee({}, e, t), function(n) {
      for (var a = [], i = this.edges(), s = t, o = 0; o < i.length; o++) for (var u = i[o], l = u._private, c = l.source, f = c._private.data.id, d = l.data.target, v = c._private.edges, h = 0; h < v.length; h++) {
        var y = v[h], p = y._private.data, g = p.target, b = p.source, m = g === d && b === f, x = f === g && d === b;
        (s.codirected && m || !s.codirected && (m || x)) && a.push(y);
      }
      return this.spawn(a, true).filter(n);
    };
  }
  Ee(_t, {
    components: function(e) {
      var r = this, n = r.cy(), a = n.collection(), i = e == null ? r.nodes() : e.nodes(), s = [];
      e != null && i.empty() && (i = e.sources());
      var o = function(c, f) {
        a.merge(c), i.unmerge(c), f.merge(c);
      };
      if (i.empty()) return r.spawn();
      var u = function() {
        var c = n.collection();
        s.push(c);
        var f = i[0];
        o(f, c), r.bfs({
          directed: false,
          roots: f,
          visit: function(v) {
            return o(v, c);
          }
        }), c.forEach(function(d) {
          d.connectedEdges().forEach(function(v) {
            r.has(v) && c.has(v.source()) && c.has(v.target()) && c.merge(v);
          });
        });
      };
      do
        u();
      while (i.length > 0);
      return s;
    },
    component: function() {
      var e = this[0];
      return e.cy().mutableElements().components(e)[0];
    }
  });
  _t.componentsOf = _t.components;
  var Rt = function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (e === void 0) {
      tt("A collection must have a reference to the core");
      return;
    }
    var i = new br(), s = false;
    if (!r) r = [];
    else if (r.length > 0 && ze(r[0]) && !Da(r[0])) {
      s = true;
      for (var o = [], u = new Kn(), l = 0, c = r.length; l < c; l++) {
        var f = r[l];
        f.data == null && (f.data = {});
        var d = f.data;
        if (d.id == null) d.id = Gd();
        else if (e.hasElementWithId(d.id) || u.has(d.id)) continue;
        var v = new Xi(e, f, false);
        o.push(v), u.add(d.id);
      }
      r = o;
    }
    this.length = 0;
    for (var h = 0, y = r.length; h < y; h++) {
      var p = r[h][0];
      if (p != null) {
        var g = p._private.data.id;
        (!n || !i.has(g)) && (n && i.set(g, {
          index: this.length,
          ele: p
        }), this[this.length] = p, this.length++);
      }
    }
    this._private = {
      eles: this,
      cy: e,
      get map() {
        return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
      },
      set map(b) {
        this.lazyMap = b;
      },
      rebuildMap: function() {
        for (var m = this.lazyMap = new br(), x = this.eles, E = 0; E < x.length; E++) {
          var S = x[E];
          m.set(S.id(), {
            index: E,
            ele: S
          });
        }
      }
    }, n && (this._private.map = i), s && !a && this.restore();
  }, je = Xi.prototype = Rt.prototype = Object.create(Array.prototype);
  je.instanceString = function() {
    return "collection";
  };
  je.spawn = function(t, e) {
    return new Rt(this.cy(), t, e);
  };
  je.spawnSelf = function() {
    return this.spawn(this);
  };
  je.cy = function() {
    return this._private.cy;
  };
  je.renderer = function() {
    return this._private.cy.renderer();
  };
  je.element = function() {
    return this[0];
  };
  je.collection = function() {
    return Id(this) ? this : new Rt(this._private.cy, [
      this
    ]);
  };
  je.unique = function() {
    return new Rt(this._private.cy, this, true);
  };
  je.hasElementWithId = function(t) {
    return t = "" + t, this._private.map.has(t);
  };
  je.getElementById = function(t) {
    t = "" + t;
    var e = this._private.cy, r = this._private.map.get(t);
    return r ? r.ele : new Rt(e);
  };
  je.$id = je.getElementById;
  je.poolIndex = function() {
    var t = this._private.cy, e = t._private.elements, r = this[0]._private.data.id;
    return e._private.map.get(r).index;
  };
  je.indexOf = function(t) {
    var e = t[0]._private.data.id;
    return this._private.map.get(e).index;
  };
  je.indexOfId = function(t) {
    return t = "" + t, this._private.map.get(t).index;
  };
  je.json = function(t) {
    var e = this.element(), r = this.cy();
    if (e == null && t) return this;
    if (e != null) {
      var n = e._private;
      if (ze(t)) {
        if (r.startBatch(), t.data) {
          e.data(t.data);
          var a = n.data;
          if (e.isEdge()) {
            var i = false, s = {}, o = t.data.source, u = t.data.target;
            o != null && o != a.source && (s.source = "" + o, i = true), u != null && u != a.target && (s.target = "" + u, i = true), i && (e = e.move(s));
          } else {
            var l = "parent" in t.data, c = t.data.parent;
            l && (c != null || a.parent != null) && c != a.parent && (c === void 0 && (c = null), c != null && (c = "" + c), e = e.move({
              parent: c
            }));
          }
        }
        t.position && e.position(t.position);
        var f = function(y, p, g) {
          var b = t[y];
          b != null && b !== n[y] && (b ? e[p]() : e[g]());
        };
        return f("removed", "remove", "restore"), f("selected", "select", "unselect"), f("selectable", "selectify", "unselectify"), f("locked", "lock", "unlock"), f("grabbable", "grabify", "ungrabify"), f("pannable", "panify", "unpanify"), t.classes != null && e.classes(t.classes), r.endBatch(), this;
      } else if (t === void 0) {
        var d = {
          data: fr(n.data),
          position: fr(n.position),
          group: n.group,
          removed: n.removed,
          selected: n.selected,
          selectable: n.selectable,
          locked: n.locked,
          grabbable: n.grabbable,
          pannable: n.pannable,
          classes: null
        };
        d.classes = "";
        var v = 0;
        return n.classes.forEach(function(h) {
          return d.classes += v++ === 0 ? h : " " + h;
        }), d;
      }
    }
  };
  je.jsons = function() {
    for (var t = [], e = 0; e < this.length; e++) {
      var r = this[e], n = r.json();
      t.push(n);
    }
    return t;
  };
  je.clone = function() {
    for (var t = this.cy(), e = [], r = 0; r < this.length; r++) {
      var n = this[r], a = n.json(), i = new Xi(t, a, false);
      e.push(i);
    }
    return new Rt(t, e);
  };
  je.copy = je.clone;
  je.restore = function() {
    for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, r = this, n = r.cy(), a = n._private, i = [], s = [], o, u = 0, l = r.length; u < l; u++) {
      var c = r[u];
      e && !c.removed() || (c.isNode() ? i.push(c) : s.push(c));
    }
    o = i.concat(s);
    var f, d = function() {
      o.splice(f, 1), f--;
    };
    for (f = 0; f < o.length; f++) {
      var v = o[f], h = v._private, y = h.data;
      if (v.clearTraversalCache(), !(!e && !h.removed)) {
        if (y.id === void 0) y.id = Gd();
        else if (ae(y.id)) y.id = "" + y.id;
        else if (Nr(y.id) || !me(y.id)) {
          tt("Can not create element with invalid string ID `" + y.id + "`"), d();
          continue;
        } else if (n.hasElementWithId(y.id)) {
          tt("Can not create second element with ID `" + y.id + "`"), d();
          continue;
        }
      }
      var p = y.id;
      if (v.isNode()) {
        var g = h.position;
        g.x == null && (g.x = 0), g.y == null && (g.y = 0);
      }
      if (v.isEdge()) {
        for (var b = v, m = [
          "source",
          "target"
        ], x = m.length, E = false, S = 0; S < x; S++) {
          var w = m[S], T = y[w];
          ae(T) && (T = y[w] = "" + y[w]), T == null || T === "" ? (tt("Can not create edge `" + p + "` with unspecified " + w), E = true) : n.hasElementWithId(T) || (tt("Can not create edge `" + p + "` with nonexistant " + w + " `" + T + "`"), E = true);
        }
        if (E) {
          d();
          continue;
        }
        var C = n.getElementById(y.source), R = n.getElementById(y.target);
        C.same(R) ? C._private.edges.push(b) : (C._private.edges.push(b), R._private.edges.push(b)), b._private.source = C, b._private.target = R;
      }
      h.map = new br(), h.map.set(p, {
        ele: v,
        index: 0
      }), h.removed = false, e && n.addToPool(v);
    }
    for (var A = 0; A < i.length; A++) {
      var P = i[A], k = P._private.data;
      ae(k.parent) && (k.parent = "" + k.parent);
      var I = k.parent, M = I != null;
      if (M || P._private.parent) {
        var D = P._private.parent ? n.collection().merge(P._private.parent) : n.getElementById(I);
        if (D.empty()) k.parent = void 0;
        else if (D[0].removed()) Ge("Node added with missing parent, reference to parent removed"), k.parent = void 0, P._private.parent = null;
        else {
          for (var B = false, O = D; !O.empty(); ) {
            if (P.same(O)) {
              B = true, k.parent = void 0;
              break;
            }
            O = O.parent();
          }
          B || (D[0]._private.children.push(P), P._private.parent = D[0], a.hasCompoundNodes = true);
        }
      }
    }
    if (o.length > 0) {
      for (var z = o.length === r.length ? r : new Rt(n, o), U = 0; U < z.length; U++) {
        var N = z[U];
        N.isNode() || (N.parallelEdges().clearTraversalCache(), N.source().clearTraversalCache(), N.target().clearTraversalCache());
      }
      var L;
      a.hasCompoundNodes ? L = n.collection().merge(z).merge(z.connectedNodes()).merge(z.parent()) : L = z, L.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(t), t ? z.emitAndNotify("add") : e && z.emit("add");
    }
    return r;
  };
  je.removed = function() {
    var t = this[0];
    return t && t._private.removed;
  };
  je.inside = function() {
    var t = this[0];
    return t && !t._private.removed;
  };
  je.remove = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, r = this, n = [], a = {}, i = r._private.cy;
    function s(I) {
      for (var M = I._private.edges, D = 0; D < M.length; D++) u(M[D]);
    }
    function o(I) {
      for (var M = I._private.children, D = 0; D < M.length; D++) u(M[D]);
    }
    function u(I) {
      var M = a[I.id()];
      e && I.removed() || M || (a[I.id()] = true, I.isNode() ? (n.push(I), s(I), o(I)) : n.unshift(I));
    }
    for (var l = 0, c = r.length; l < c; l++) {
      var f = r[l];
      u(f);
    }
    function d(I, M) {
      var D = I._private.edges;
      zr(D, M), I.clearTraversalCache();
    }
    function v(I) {
      I.clearTraversalCache();
    }
    var h = [];
    h.ids = {};
    function y(I, M) {
      M = M[0], I = I[0];
      var D = I._private.children, B = I.id();
      zr(D, M), M._private.parent = null, h.ids[B] || (h.ids[B] = true, h.push(I));
    }
    r.dirtyCompoundBoundsCache(), e && i.removeFromPool(n);
    for (var p = 0; p < n.length; p++) {
      var g = n[p];
      if (g.isEdge()) {
        var b = g.source()[0], m = g.target()[0];
        d(b, g), d(m, g);
        for (var x = g.parallelEdges(), E = 0; E < x.length; E++) {
          var S = x[E];
          v(S), S.isBundledBezier() && S.dirtyBoundingBoxCache();
        }
      } else {
        var w = g.parent();
        w.length !== 0 && y(w, g);
      }
      e && (g._private.removed = true);
    }
    var T = i._private.elements;
    i._private.hasCompoundNodes = false;
    for (var C = 0; C < T.length; C++) {
      var R = T[C];
      if (R.isParent()) {
        i._private.hasCompoundNodes = true;
        break;
      }
    }
    var A = new Rt(this.cy(), n);
    A.size() > 0 && (t ? A.emitAndNotify("remove") : e && A.emit("remove"));
    for (var P = 0; P < h.length; P++) {
      var k = h[P];
      (!e || !k.removed()) && k.updateStyle();
    }
    return A;
  };
  je.move = function(t) {
    var e = this._private.cy, r = this, n = false, a = false, i = function(h) {
      return h == null ? h : "" + h;
    };
    if (t.source !== void 0 || t.target !== void 0) {
      var s = i(t.source), o = i(t.target), u = s != null && e.hasElementWithId(s), l = o != null && e.hasElementWithId(o);
      (u || l) && (e.batch(function() {
        r.remove(n, a), r.emitAndNotify("moveout");
        for (var v = 0; v < r.length; v++) {
          var h = r[v], y = h._private.data;
          h.isEdge() && (u && (y.source = s), l && (y.target = o));
        }
        r.restore(n, a);
      }), r.emitAndNotify("move"));
    } else if (t.parent !== void 0) {
      var c = i(t.parent), f = c === null || e.hasElementWithId(c);
      if (f) {
        var d = c === null ? void 0 : c;
        e.batch(function() {
          var v = r.remove(n, a);
          v.emitAndNotify("moveout");
          for (var h = 0; h < r.length; h++) {
            var y = r[h], p = y._private.data;
            y.isNode() && (p.parent = d);
          }
          v.restore(n, a);
        }), r.emitAndNotify("move");
      }
    }
    return this;
  };
  [
    nv,
    w0,
    mi,
    Mr,
    Zn,
    N0,
    as,
    J0,
    kv,
    Pv,
    nb,
    Ni,
    yi,
    Ct,
    Dr,
    _t
  ].forEach(function(t) {
    Ee(je, t);
  });
  var cb = {
    add: function(e) {
      var r, n = this;
      if (Wt(e)) {
        var a = e;
        if (a._private.cy === n) r = a.restore();
        else {
          for (var i = [], s = 0; s < a.length; s++) {
            var o = a[s];
            i.push(o.json());
          }
          r = new Rt(n, i);
        }
      } else if (Ke(e)) {
        var u = e;
        r = new Rt(n, u);
      } else if (ze(e) && (Ke(e.nodes) || Ke(e.edges))) {
        for (var l = e, c = [], f = [
          "nodes",
          "edges"
        ], d = 0, v = f.length; d < v; d++) {
          var h = f[d], y = l[h];
          if (Ke(y)) for (var p = 0, g = y.length; p < g; p++) {
            var b = Ee({
              group: h
            }, y[p]);
            c.push(b);
          }
        }
        r = new Rt(n, c);
      } else {
        var m = e;
        r = new Xi(n, m).collection();
      }
      return r;
    },
    remove: function(e) {
      if (!Wt(e)) {
        if (me(e)) {
          var r = e;
          e = this.$(r);
        }
      }
      return e.remove();
    }
  };
  function fb(t, e, r, n) {
    var a = 4, i = 1e-3, s = 1e-7, o = 10, u = 11, l = 1 / (u - 1), c = typeof Float32Array < "u";
    if (arguments.length !== 4) return false;
    for (var f = 0; f < 4; ++f) if (typeof arguments[f] != "number" || isNaN(arguments[f]) || !isFinite(arguments[f])) return false;
    t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
    var d = c ? new Float32Array(u) : new Array(u);
    function v(R, A) {
      return 1 - 3 * A + 3 * R;
    }
    function h(R, A) {
      return 3 * A - 6 * R;
    }
    function y(R) {
      return 3 * R;
    }
    function p(R, A, P) {
      return ((v(A, P) * R + h(A, P)) * R + y(A)) * R;
    }
    function g(R, A, P) {
      return 3 * v(A, P) * R * R + 2 * h(A, P) * R + y(A);
    }
    function b(R, A) {
      for (var P = 0; P < a; ++P) {
        var k = g(A, t, r);
        if (k === 0) return A;
        var I = p(A, t, r) - R;
        A -= I / k;
      }
      return A;
    }
    function m() {
      for (var R = 0; R < u; ++R) d[R] = p(R * l, t, r);
    }
    function x(R, A, P) {
      var k, I, M = 0;
      do
        I = A + (P - A) / 2, k = p(I, t, r) - R, k > 0 ? P = I : A = I;
      while (Math.abs(k) > s && ++M < o);
      return I;
    }
    function E(R) {
      for (var A = 0, P = 1, k = u - 1; P !== k && d[P] <= R; ++P) A += l;
      --P;
      var I = (R - d[P]) / (d[P + 1] - d[P]), M = A + I * l, D = g(M, t, r);
      return D >= i ? b(R, M) : D === 0 ? M : x(R, A, A + l);
    }
    var S = false;
    function w() {
      S = true, (t !== e || r !== n) && m();
    }
    var T = function(A) {
      return S || w(), t === e && r === n ? A : A === 0 ? 0 : A === 1 ? 1 : p(E(A), e, n);
    };
    T.getControlPoints = function() {
      return [
        {
          x: t,
          y: e
        },
        {
          x: r,
          y: n
        }
      ];
    };
    var C = "generateBezier(" + [
      t,
      e,
      r,
      n
    ] + ")";
    return T.toString = function() {
      return C;
    }, T;
  }
  var db = /* @__PURE__ */ (function() {
    function t(n) {
      return -n.tension * n.x - n.friction * n.v;
    }
    function e(n, a, i) {
      var s = {
        x: n.x + i.dx * a,
        v: n.v + i.dv * a,
        tension: n.tension,
        friction: n.friction
      };
      return {
        dx: s.v,
        dv: t(s)
      };
    }
    function r(n, a) {
      var i = {
        dx: n.v,
        dv: t(n)
      }, s = e(n, a * 0.5, i), o = e(n, a * 0.5, s), u = e(n, a, o), l = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + u.dx), c = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + u.dv);
      return n.x = n.x + l * a, n.v = n.v + c * a, n;
    }
    return function n(a, i, s) {
      var o = {
        x: -1,
        v: 0,
        tension: null,
        friction: null
      }, u = [
        0
      ], l = 0, c = 1 / 1e4, f = 16 / 1e3, d, v, h;
      for (a = parseFloat(a) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = a, o.friction = i, d = s !== null, d ? (l = n(a, i), v = l / s * f) : v = f; h = r(h || o, v), u.push(1 + h.x), l += 16, Math.abs(h.x) > c && Math.abs(h.v) > c; ) ;
      return d ? function(y) {
        return u[y * (u.length - 1) | 0];
      } : l;
    };
  })(), Ye = function(e, r, n, a) {
    var i = fb(e, r, n, a);
    return function(s, o, u) {
      return s + (o - s) * i(u);
    };
  }, bi = {
    linear: function(e, r, n) {
      return e + (r - e) * n;
    },
    ease: Ye(0.25, 0.1, 0.25, 1),
    "ease-in": Ye(0.42, 0, 1, 1),
    "ease-out": Ye(0, 0, 0.58, 1),
    "ease-in-out": Ye(0.42, 0, 0.58, 1),
    "ease-in-sine": Ye(0.47, 0, 0.745, 0.715),
    "ease-out-sine": Ye(0.39, 0.575, 0.565, 1),
    "ease-in-out-sine": Ye(0.445, 0.05, 0.55, 0.95),
    "ease-in-quad": Ye(0.55, 0.085, 0.68, 0.53),
    "ease-out-quad": Ye(0.25, 0.46, 0.45, 0.94),
    "ease-in-out-quad": Ye(0.455, 0.03, 0.515, 0.955),
    "ease-in-cubic": Ye(0.55, 0.055, 0.675, 0.19),
    "ease-out-cubic": Ye(0.215, 0.61, 0.355, 1),
    "ease-in-out-cubic": Ye(0.645, 0.045, 0.355, 1),
    "ease-in-quart": Ye(0.895, 0.03, 0.685, 0.22),
    "ease-out-quart": Ye(0.165, 0.84, 0.44, 1),
    "ease-in-out-quart": Ye(0.77, 0, 0.175, 1),
    "ease-in-quint": Ye(0.755, 0.05, 0.855, 0.06),
    "ease-out-quint": Ye(0.23, 1, 0.32, 1),
    "ease-in-out-quint": Ye(0.86, 0, 0.07, 1),
    "ease-in-expo": Ye(0.95, 0.05, 0.795, 0.035),
    "ease-out-expo": Ye(0.19, 1, 0.22, 1),
    "ease-in-out-expo": Ye(1, 0, 0, 1),
    "ease-in-circ": Ye(0.6, 0.04, 0.98, 0.335),
    "ease-out-circ": Ye(0.075, 0.82, 0.165, 1),
    "ease-in-out-circ": Ye(0.785, 0.135, 0.15, 0.86),
    spring: function(e, r, n) {
      if (n === 0) return bi.linear;
      var a = db(e, r, n);
      return function(i, s, o) {
        return i + (s - i) * a(o);
      };
    },
    "cubic-bezier": Ye
  };
  function yf(t, e, r, n, a) {
    if (n === 1 || e === r) return r;
    var i = a(e, r, n);
    return t == null || ((t.roundValue || t.color) && (i = Math.round(i)), t.min !== void 0 && (i = Math.max(i, t.min)), t.max !== void 0 && (i = Math.min(i, t.max))), i;
  }
  function bf(t, e) {
    return t.pfValue != null || t.value != null ? t.pfValue != null && (e == null || e.type.units !== "%") ? t.pfValue : t.value : t;
  }
  function Sn(t, e, r, n, a) {
    var i = a != null ? a.type : null;
    r < 0 ? r = 0 : r > 1 && (r = 1);
    var s = bf(t, a), o = bf(e, a);
    if (ae(s) && ae(o)) return yf(i, s, o, r, n);
    if (Ke(s) && Ke(o)) {
      for (var u = [], l = 0; l < o.length; l++) {
        var c = s[l], f = o[l];
        if (c != null && f != null) {
          var d = yf(i, c, f, r, n);
          u.push(d);
        } else u.push(f);
      }
      return u;
    }
  }
  function vb(t, e, r, n) {
    var a = !n, i = t._private, s = e._private, o = s.easing, u = s.startTime, l = n ? t : t.cy(), c = l.style();
    if (!s.easingImpl) if (o == null) s.easingImpl = bi.linear;
    else {
      var f;
      if (me(o)) {
        var d = c.parse("transition-timing-function", o);
        f = d.value;
      } else f = o;
      var v, h;
      me(f) ? (v = f, h = []) : (v = f[1], h = f.slice(2).map(function(z) {
        return +z;
      })), h.length > 0 ? (v === "spring" && h.push(s.duration), s.easingImpl = bi[v].apply(null, h)) : s.easingImpl = bi[v];
    }
    var y = s.easingImpl, p;
    if (s.duration === 0 ? p = 1 : p = (r - u) / s.duration, s.applying && (p = s.progress), p < 0 ? p = 0 : p > 1 && (p = 1), s.delay == null) {
      var g = s.startPosition, b = s.position;
      if (b && a && !t.locked()) {
        var m = {};
        oa(g.x, b.x) && (m.x = Sn(g.x, b.x, p, y)), oa(g.y, b.y) && (m.y = Sn(g.y, b.y, p, y)), t.position(m);
      }
      var x = s.startPan, E = s.pan, S = i.pan, w = E != null && n;
      w && (oa(x.x, E.x) && (S.x = Sn(x.x, E.x, p, y)), oa(x.y, E.y) && (S.y = Sn(x.y, E.y, p, y)), t.emit("pan"));
      var T = s.startZoom, C = s.zoom, R = C != null && n;
      R && (oa(T, C) && (i.zoom = Ta(i.minZoom, Sn(T, C, p, y), i.maxZoom)), t.emit("zoom")), (w || R) && t.emit("viewport");
      var A = s.style;
      if (A && A.length > 0 && a) {
        for (var P = 0; P < A.length; P++) {
          var k = A[P], I = k.name, M = k, D = s.startStyle[I], B = c.properties[D.name], O = Sn(D, M, p, y, B);
          c.overrideBypass(t, I, O);
        }
        t.emit("style");
      }
    }
    return s.progress = p, p;
  }
  function oa(t, e) {
    return t == null || e == null ? false : ae(t) && ae(e) ? true : !!(t && e);
  }
  function hb(t, e, r, n) {
    var a = e._private;
    a.started = true, a.startTime = r - a.progress * a.duration;
  }
  function wf(t, e) {
    var r = e._private.aniEles, n = [];
    function a(c, f) {
      var d = c._private, v = d.animation.current, h = d.animation.queue, y = false;
      if (v.length === 0) {
        var p = h.shift();
        p && v.push(p);
      }
      for (var g = function(S) {
        for (var w = S.length - 1; w >= 0; w--) {
          var T = S[w];
          T();
        }
        S.splice(0, S.length);
      }, b = v.length - 1; b >= 0; b--) {
        var m = v[b], x = m._private;
        if (x.stopped) {
          v.splice(b, 1), x.hooked = false, x.playing = false, x.started = false, g(x.frames);
          continue;
        }
        !x.playing && !x.applying || (x.playing && x.applying && (x.applying = false), x.started || hb(c, m, t), vb(c, m, t, f), x.applying && (x.applying = false), g(x.frames), x.step != null && x.step(t), m.completed() && (v.splice(b, 1), x.hooked = false, x.playing = false, x.started = false, g(x.completes)), y = true);
      }
      return !f && v.length === 0 && h.length === 0 && n.push(c), y;
    }
    for (var i = false, s = 0; s < r.length; s++) {
      var o = r[s], u = a(o);
      i = i || u;
    }
    var l = a(e, true);
    (i || l) && (r.length > 0 ? e.notify("draw", r) : e.notify("draw")), r.unmerge(n), e.emit("step");
  }
  var gb = {
    animate: Ze.animate(),
    animation: Ze.animation(),
    animated: Ze.animated(),
    clearQueue: Ze.clearQueue(),
    delay: Ze.delay(),
    delayAnimation: Ze.delayAnimation(),
    stop: Ze.stop(),
    addToAnimationPool: function(e) {
      var r = this;
      r.styleEnabled() && r._private.aniEles.merge(e);
    },
    stopAnimationLoop: function() {
      this._private.animationsRunning = false;
    },
    startAnimationLoop: function() {
      var e = this;
      if (e._private.animationsRunning = true, !e.styleEnabled()) return;
      function r() {
        e._private.animationsRunning && Ii(function(i) {
          wf(i, e), r();
        });
      }
      var n = e.renderer();
      n && n.beforeRender ? n.beforeRender(function(i, s) {
        wf(s, e);
      }, n.beforeRenderPriorities.animations) : r();
    }
  }, pb = {
    qualifierCompare: function(e, r) {
      return e == null || r == null ? e == null && r == null : e.sameText(r);
    },
    eventMatches: function(e, r, n) {
      var a = r.qualifier;
      return a != null ? e !== n.target && Da(n.target) && a.matches(n.target) : true;
    },
    addEventFields: function(e, r) {
      r.cy = e, r.target = e;
    },
    callbackContext: function(e, r, n) {
      return r.qualifier != null ? n.target : e;
    }
  }, si = function(e) {
    return me(e) ? new Fr(e) : e;
  }, Bv = {
    createEmitter: function() {
      var e = this._private;
      return e.emitter || (e.emitter = new is(pb, this)), this;
    },
    emitter: function() {
      return this._private.emitter;
    },
    on: function(e, r, n) {
      return this.emitter().on(e, si(r), n), this;
    },
    removeListener: function(e, r, n) {
      return this.emitter().removeListener(e, si(r), n), this;
    },
    removeAllListeners: function() {
      return this.emitter().removeAllListeners(), this;
    },
    one: function(e, r, n) {
      return this.emitter().one(e, si(r), n), this;
    },
    once: function(e, r, n) {
      return this.emitter().one(e, si(r), n), this;
    },
    emit: function(e, r) {
      return this.emitter().emit(e, r), this;
    },
    emitAndNotify: function(e, r) {
      return this.emit(e), this.notify(e, r), this;
    }
  };
  Ze.eventAliasesOn(Bv);
  var hu = {
    png: function(e) {
      var r = this._private.renderer;
      return e = e || {}, r.png(e);
    },
    jpg: function(e) {
      var r = this._private.renderer;
      return e = e || {}, e.bg = e.bg || "#fff", r.jpg(e);
    }
  };
  hu.jpeg = hu.jpg;
  var wi = {
    layout: function(e) {
      var r = this;
      if (e == null) {
        tt("Layout options must be specified to make a layout");
        return;
      }
      if (e.name == null) {
        tt("A `name` must be specified to make a layout");
        return;
      }
      var n = e.name, a = r.extension("layout", n);
      if (a == null) {
        tt("No such layout `" + n + "` found.  Did you forget to import it and `cytoscape.use()` it?");
        return;
      }
      var i;
      me(e.eles) ? i = r.$(e.eles) : i = e.eles != null ? e.eles : r.$();
      var s = new a(Ee({}, e, {
        cy: r,
        eles: i
      }));
      return s;
    }
  };
  wi.createLayout = wi.makeLayout = wi.layout;
  var mb = {
    notify: function(e, r) {
      var n = this._private;
      if (this.batching()) {
        n.batchNotifications = n.batchNotifications || {};
        var a = n.batchNotifications[e] = n.batchNotifications[e] || this.collection();
        r != null && a.merge(r);
        return;
      }
      if (n.notificationsEnabled) {
        var i = this.renderer();
        this.destroyed() || !i || i.notify(e, r);
      }
    },
    notifications: function(e) {
      var r = this._private;
      return e === void 0 ? r.notificationsEnabled : (r.notificationsEnabled = !!e, this);
    },
    noNotifications: function(e) {
      this.notifications(false), e(), this.notifications(true);
    },
    batching: function() {
      return this._private.batchCount > 0;
    },
    startBatch: function() {
      var e = this._private;
      return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
    },
    endBatch: function() {
      var e = this._private;
      if (e.batchCount === 0) return this;
      if (e.batchCount--, e.batchCount === 0) {
        e.batchStyleEles.updateStyle();
        var r = this.renderer();
        Object.keys(e.batchNotifications).forEach(function(n) {
          var a = e.batchNotifications[n];
          a.empty() ? r.notify(n) : r.notify(n, a);
        });
      }
      return this;
    },
    batch: function(e) {
      return this.startBatch(), e(), this.endBatch(), this;
    },
    batchData: function(e) {
      var r = this;
      return this.batch(function() {
        for (var n = Object.keys(e), a = 0; a < n.length; a++) {
          var i = n[a], s = e[i], o = r.getElementById(i);
          o.data(s);
        }
      });
    }
  }, yb = At({
    hideEdgesOnViewport: false,
    textureOnViewport: false,
    motionBlur: false,
    motionBlurOpacity: 0.05,
    pixelRatio: void 0,
    desktopTapThreshold: 4,
    touchTapThreshold: 8,
    wheelSensitivity: 1,
    debug: false,
    showFps: false,
    webgl: false,
    webglDebug: false,
    webglDebugShowAtlases: false,
    webglTexSize: 2048,
    webglTexRows: 36,
    webglTexRowsNodes: 18,
    webglBatchSize: 2048,
    webglTexPerBatch: 14,
    webglBgColor: [
      255,
      255,
      255
    ]
  }), gu = {
    renderTo: function(e, r, n, a) {
      var i = this._private.renderer;
      return i.renderTo(e, r, n, a), this;
    },
    renderer: function() {
      return this._private.renderer;
    },
    forceRender: function() {
      return this.notify("draw"), this;
    },
    resize: function() {
      return this.invalidateSize(), this.emitAndNotify("resize"), this;
    },
    initRenderer: function(e) {
      var r = this, n = r.extension("renderer", e.name);
      if (n == null) {
        tt("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
        return;
      }
      e.wheelSensitivity !== void 0 && Ge("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
      var a = yb(e);
      a.cy = r, r._private.renderer = new n(a), this.notify("init");
    },
    destroyRenderer: function() {
      var e = this;
      e.notify("destroy");
      var r = e.container();
      if (r) for (r._cyreg = null; r.childNodes.length > 0; ) r.removeChild(r.childNodes[0]);
      e._private.renderer = null, e.mutableElements().forEach(function(n) {
        var a = n._private;
        a.rscratch = {}, a.rstyle = {}, a.animation.current = [], a.animation.queue = [];
      });
    },
    onRender: function(e) {
      return this.on("render", e);
    },
    offRender: function(e) {
      return this.off("render", e);
    }
  };
  gu.invalidateDimensions = gu.resize;
  var xi = {
    collection: function(e, r) {
      return me(e) ? this.$(e) : Wt(e) ? e.collection() : Ke(e) ? (r || (r = {}), new Rt(this, e, r.unique, r.removed)) : new Rt(this);
    },
    nodes: function(e) {
      var r = this.$(function(n) {
        return n.isNode();
      });
      return e ? r.filter(e) : r;
    },
    edges: function(e) {
      var r = this.$(function(n) {
        return n.isEdge();
      });
      return e ? r.filter(e) : r;
    },
    $: function(e) {
      var r = this._private.elements;
      return e ? r.filter(e) : r.spawnSelf();
    },
    mutableElements: function() {
      return this._private.elements;
    }
  };
  xi.elements = xi.filter = xi.$;
  var Et = {}, ga = "t", bb = "f";
  Et.apply = function(t) {
    for (var e = this, r = e._private, n = r.cy, a = n.collection(), i = 0; i < t.length; i++) {
      var s = t[i], o = e.getContextMeta(s);
      if (!o.empty) {
        var u = e.getContextStyle(o), l = e.applyContextStyle(o, u, s);
        s._private.appliedInitStyle ? e.updateTransitions(s, l.diffProps) : s._private.appliedInitStyle = true;
        var c = e.updateStyleHints(s);
        c && a.push(s);
      }
    }
    return a;
  };
  Et.getPropertiesDiff = function(t, e) {
    var r = this, n = r._private.propDiffs = r._private.propDiffs || {}, a = t + "-" + e, i = n[a];
    if (i) return i;
    for (var s = [], o = {}, u = 0; u < r.length; u++) {
      var l = r[u], c = t[u] === ga, f = e[u] === ga, d = c !== f, v = l.mappedProperties.length > 0;
      if (d || f && v) {
        var h = void 0;
        d && v || d ? h = l.properties : v && (h = l.mappedProperties);
        for (var y = 0; y < h.length; y++) {
          for (var p = h[y], g = p.name, b = false, m = u + 1; m < r.length; m++) {
            var x = r[m], E = e[m] === ga;
            if (E && (b = x.properties[p.name] != null, b)) break;
          }
          !o[g] && !b && (o[g] = true, s.push(g));
        }
      }
    }
    return n[a] = s, s;
  };
  Et.getContextMeta = function(t) {
    for (var e = this, r = "", n, a = t._private.styleCxtKey || "", i = 0; i < e.length; i++) {
      var s = e[i], o = s.selector && s.selector.matches(t);
      o ? r += ga : r += bb;
    }
    return n = e.getPropertiesDiff(a, r), t._private.styleCxtKey = r, {
      key: r,
      diffPropNames: n,
      empty: n.length === 0
    };
  };
  Et.getContextStyle = function(t) {
    var e = t.key, r = this, n = this._private.contextStyles = this._private.contextStyles || {};
    if (n[e]) return n[e];
    for (var a = {
      _private: {
        key: e
      }
    }, i = 0; i < r.length; i++) {
      var s = r[i], o = e[i] === ga;
      if (o) for (var u = 0; u < s.properties.length; u++) {
        var l = s.properties[u];
        a[l.name] = l;
      }
    }
    return n[e] = a, a;
  };
  Et.applyContextStyle = function(t, e, r) {
    for (var n = this, a = t.diffPropNames, i = {}, s = n.types, o = 0; o < a.length; o++) {
      var u = a[o], l = e[u], c = r.pstyle(u);
      if (!l) if (c) c.bypass ? l = {
        name: u,
        deleteBypassed: true
      } : l = {
        name: u,
        delete: true
      };
      else continue;
      if (c !== l) {
        if (l.mapped === s.fn && c != null && c.mapping != null && c.mapping.value === l.value) {
          var f = c.mapping, d = f.fnValue = l.value(r);
          if (d === f.prevFnValue) continue;
        }
        var v = i[u] = {
          prev: c
        };
        n.applyParsedProperty(r, l), v.next = r.pstyle(u), v.next && v.next.bypass && (v.next = v.next.bypassed);
      }
    }
    return {
      diffProps: i
    };
  };
  Et.updateStyleHints = function(t) {
    var e = t._private, r = this, n = r.propertyGroupNames, a = r.propertyGroupKeys, i = function(q, X, ne) {
      return r.getPropertiesHash(q, X, ne);
    }, s = e.styleKey;
    if (t.removed()) return false;
    var o = e.group === "nodes", u = t._private.style;
    n = Object.keys(u);
    for (var l = 0; l < a.length; l++) {
      var c = a[l];
      e.styleKeys[c] = [
        nn,
        _n
      ];
    }
    for (var f = function(q, X) {
      return e.styleKeys[X][0] = wa(q, e.styleKeys[X][0]);
    }, d = function(q, X) {
      return e.styleKeys[X][1] = xa(q, e.styleKeys[X][1]);
    }, v = function(q, X) {
      f(q, X), d(q, X);
    }, h = function(q, X) {
      for (var ne = 0; ne < q.length; ne++) {
        var he = q.charCodeAt(ne);
        f(he, X), d(he, X);
      }
    }, y = 2e9, p = function(q) {
      return -128 < q && q < 128 && Math.floor(q) !== q ? y - (q * 1024 | 0) : q;
    }, g = 0; g < n.length; g++) {
      var b = n[g], m = u[b];
      if (m != null) {
        var x = this.properties[b], E = x.type, S = x.groupKey, w = void 0;
        x.hashOverride != null ? w = x.hashOverride(t, m) : m.pfValue != null && (w = m.pfValue);
        var T = x.enums == null ? m.value : null, C = w != null, R = T != null, A = C || R, P = m.units;
        if (E.number && A && !E.multiple) {
          var k = C ? w : T;
          v(p(k), S), !C && P != null && h(P, S);
        } else h(m.strValue, S);
      }
    }
    for (var I = [
      nn,
      _n
    ], M = 0; M < a.length; M++) {
      var D = a[M], B = e.styleKeys[D];
      I[0] = wa(B[0], I[0]), I[1] = xa(B[1], I[1]);
    }
    e.styleKey = Op(I[0], I[1]);
    var O = e.styleKeys;
    e.labelDimsKey = Rr(O.labelDimensions);
    var z = i(t, [
      "label"
    ], O.labelDimensions);
    if (e.labelKey = Rr(z), e.labelStyleKey = Rr(Ja(O.commonLabel, z)), !o) {
      var U = i(t, [
        "source-label"
      ], O.labelDimensions);
      e.sourceLabelKey = Rr(U), e.sourceLabelStyleKey = Rr(Ja(O.commonLabel, U));
      var N = i(t, [
        "target-label"
      ], O.labelDimensions);
      e.targetLabelKey = Rr(N), e.targetLabelStyleKey = Rr(Ja(O.commonLabel, N));
    }
    if (o) {
      var L = e.styleKeys, H = L.nodeBody, Y = L.nodeBorder, K = L.nodeOutline, Q = L.backgroundImage, re = L.compound, ie = L.pie, ee = L.stripe, F = [
        H,
        Y,
        K,
        Q,
        re,
        ie,
        ee
      ].filter(function(V) {
        return V != null;
      }).reduce(Ja, [
        nn,
        _n
      ]);
      e.nodeKey = Rr(F), e.hasPie = ie != null && ie[0] !== nn && ie[1] !== _n, e.hasStripe = ee != null && ee[0] !== nn && ee[1] !== _n;
    }
    return s !== e.styleKey;
  };
  Et.clearStyleHints = function(t) {
    var e = t._private;
    e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null, e.hasStripe = null;
  };
  Et.applyParsedProperty = function(t, e) {
    var r = this, n = e, a = t._private.style, i, s = r.types, o = r.properties[n.name].type, u = n.bypass, l = a[n.name], c = l && l.bypass, f = t._private, d = "mapping", v = function(H) {
      return H == null ? null : H.pfValue != null ? H.pfValue : H.value;
    }, h = function() {
      var H = v(l), Y = v(n);
      r.checkTriggers(t, n.name, H, Y);
    };
    if (e.name === "curve-style" && t.isEdge() && (e.value !== "bezier" && t.isLoop() || e.value === "haystack" && (t.source().isParent() || t.target().isParent())) && (n = e = this.parse(e.name, "bezier", u)), n.delete) return a[n.name] = void 0, h(), true;
    if (n.deleteBypassed) return l ? l.bypass ? (l.bypassed = void 0, h(), true) : false : (h(), true);
    if (n.deleteBypass) return l ? l.bypass ? (a[n.name] = l.bypassed, h(), true) : false : (h(), true);
    var y = function() {
      Ge("Do not assign mappings to elements without corresponding data (i.e. ele `" + t.id() + "` has no mapping for property `" + n.name + "` with data field `" + n.field + "`); try a `[" + n.field + "]` selector to limit scope to elements with `" + n.field + "` defined");
    };
    switch (n.mapped) {
      case s.mapData: {
        for (var p = n.field.split("."), g = f.data, b = 0; b < p.length && g; b++) {
          var m = p[b];
          g = g[m];
        }
        if (g == null) return y(), false;
        var x;
        if (ae(g)) {
          var E = n.fieldMax - n.fieldMin;
          E === 0 ? x = 0 : x = (g - n.fieldMin) / E;
        } else return Ge("Do not use continuous mappers without specifying numeric data (i.e. `" + n.field + ": " + g + "` for `" + t.id() + "` is non-numeric)"), false;
        if (x < 0 ? x = 0 : x > 1 && (x = 1), o.color) {
          var S = n.valueMin[0], w = n.valueMax[0], T = n.valueMin[1], C = n.valueMax[1], R = n.valueMin[2], A = n.valueMax[2], P = n.valueMin[3] == null ? 1 : n.valueMin[3], k = n.valueMax[3] == null ? 1 : n.valueMax[3], I = [
            Math.round(S + (w - S) * x),
            Math.round(T + (C - T) * x),
            Math.round(R + (A - R) * x),
            Math.round(P + (k - P) * x)
          ];
          i = {
            bypass: n.bypass,
            name: n.name,
            value: I,
            strValue: "rgb(" + I[0] + ", " + I[1] + ", " + I[2] + ")"
          };
        } else if (o.number) {
          var M = n.valueMin + (n.valueMax - n.valueMin) * x;
          i = this.parse(n.name, M, n.bypass, d);
        } else return false;
        if (!i) return y(), false;
        i.mapping = n, n = i;
        break;
      }
      case s.data: {
        for (var D = n.field.split("."), B = f.data, O = 0; O < D.length && B; O++) {
          var z = D[O];
          B = B[z];
        }
        if (B != null && (i = this.parse(n.name, B, n.bypass, d)), !i) return y(), false;
        i.mapping = n, n = i;
        break;
      }
      case s.fn: {
        var U = n.value, N = n.fnValue != null ? n.fnValue : U(t);
        if (n.prevFnValue = N, N == null) return Ge("Custom function mappers may not return null (i.e. `" + n.name + "` for ele `" + t.id() + "` is null)"), false;
        if (i = this.parse(n.name, N, n.bypass, d), !i) return Ge("Custom function mappers may not return invalid values for the property type (i.e. `" + n.name + "` for ele `" + t.id() + "` is invalid)"), false;
        i.mapping = fr(n), n = i;
        break;
      }
      case void 0:
        break;
      default:
        return false;
    }
    return u ? (c ? n.bypassed = l.bypassed : n.bypassed = l, a[n.name] = n) : c ? l.bypassed = n : a[n.name] = n, h(), true;
  };
  Et.cleanElements = function(t, e) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      if (this.clearStyleHints(n), n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), !e) n._private.style = {};
      else for (var a = n._private.style, i = Object.keys(a), s = 0; s < i.length; s++) {
        var o = i[s], u = a[o];
        u != null && (u.bypass ? u.bypassed = null : a[o] = null);
      }
    }
  };
  Et.update = function() {
    var t = this._private.cy, e = t.mutableElements();
    e.updateStyle();
  };
  Et.updateTransitions = function(t, e) {
    var r = this, n = t._private, a = t.pstyle("transition-property").value, i = t.pstyle("transition-duration").pfValue, s = t.pstyle("transition-delay").pfValue;
    if (a.length > 0 && i > 0) {
      for (var o = {}, u = false, l = 0; l < a.length; l++) {
        var c = a[l], f = t.pstyle(c), d = e[c];
        if (d) {
          var v = d.prev, h = v, y = d.next != null ? d.next : f, p = false, g = void 0, b = 1e-6;
          h && (ae(h.pfValue) && ae(y.pfValue) ? (p = y.pfValue - h.pfValue, g = h.pfValue + b * p) : ae(h.value) && ae(y.value) ? (p = y.value - h.value, g = h.value + b * p) : Ke(h.value) && Ke(y.value) && (p = h.value[0] !== y.value[0] || h.value[1] !== y.value[1] || h.value[2] !== y.value[2], g = h.strValue), p && (o[c] = y.strValue, this.applyBypass(t, c, g), u = true));
        }
      }
      if (!u) return;
      n.transitioning = true, new Yn(function(m) {
        s > 0 ? t.delayAnimation(s).play().promise().then(m) : m();
      }).then(function() {
        return t.animation({
          style: o,
          duration: i,
          easing: t.pstyle("transition-timing-function").value,
          queue: false
        }).play().promise();
      }).then(function() {
        r.removeBypasses(t, a), t.emitAndNotify("style"), n.transitioning = false;
      });
    } else n.transitioning && (this.removeBypasses(t, a), t.emitAndNotify("style"), n.transitioning = false);
  };
  Et.checkTrigger = function(t, e, r, n, a, i) {
    var s = this.properties[e], o = a(s);
    t.removed() || o != null && o(r, n, t) && i(s);
  };
  Et.checkZOrderTrigger = function(t, e, r, n) {
    var a = this;
    this.checkTrigger(t, e, r, n, function(i) {
      return i.triggersZOrder;
    }, function() {
      a._private.cy.notify("zorder", t);
    });
  };
  Et.checkBoundsTrigger = function(t, e, r, n) {
    this.checkTrigger(t, e, r, n, function(a) {
      return a.triggersBounds;
    }, function(a) {
      t.dirtyCompoundBoundsCache(), t.dirtyBoundingBoxCache();
    });
  };
  Et.checkConnectedEdgesBoundsTrigger = function(t, e, r, n) {
    this.checkTrigger(t, e, r, n, function(a) {
      return a.triggersBoundsOfConnectedEdges;
    }, function(a) {
      t.connectedEdges().forEach(function(i) {
        i.dirtyBoundingBoxCache();
      });
    });
  };
  Et.checkParallelEdgesBoundsTrigger = function(t, e, r, n) {
    this.checkTrigger(t, e, r, n, function(a) {
      return a.triggersBoundsOfParallelEdges;
    }, function(a) {
      t.parallelEdges().forEach(function(i) {
        i.dirtyBoundingBoxCache();
      });
    });
  };
  Et.checkTriggers = function(t, e, r, n) {
    t.dirtyStyleCache(), this.checkZOrderTrigger(t, e, r, n), this.checkBoundsTrigger(t, e, r, n), this.checkConnectedEdgesBoundsTrigger(t, e, r, n), this.checkParallelEdgesBoundsTrigger(t, e, r, n);
  };
  var $a = {};
  $a.applyBypass = function(t, e, r, n) {
    var a = this, i = [], s = true;
    if (e === "*" || e === "**") {
      if (r !== void 0) for (var o = 0; o < a.properties.length; o++) {
        var u = a.properties[o], l = u.name, c = this.parse(l, r, true);
        c && i.push(c);
      }
    } else if (me(e)) {
      var f = this.parse(e, r, true);
      f && i.push(f);
    } else if (ze(e)) {
      var d = e;
      n = r;
      for (var v = Object.keys(d), h = 0; h < v.length; h++) {
        var y = v[h], p = d[y];
        if (p === void 0 && (p = d[Yi(y)]), p !== void 0) {
          var g = this.parse(y, p, true);
          g && i.push(g);
        }
      }
    } else return false;
    if (i.length === 0) return false;
    for (var b = false, m = 0; m < t.length; m++) {
      for (var x = t[m], E = {}, S = void 0, w = 0; w < i.length; w++) {
        var T = i[w];
        if (n) {
          var C = x.pstyle(T.name);
          S = E[T.name] = {
            prev: C
          };
        }
        b = this.applyParsedProperty(x, fr(T)) || b, n && (S.next = x.pstyle(T.name));
      }
      b && this.updateStyleHints(x), n && this.updateTransitions(x, E, s);
    }
    return b;
  };
  $a.overrideBypass = function(t, e, r) {
    e = Mu(e);
    for (var n = 0; n < t.length; n++) {
      var a = t[n], i = a._private.style[e], s = this.properties[e].type, o = s.color, u = s.mutiple, l = i ? i.pfValue != null ? i.pfValue : i.value : null;
      !i || !i.bypass ? this.applyBypass(a, e, r) : (i.value = r, i.pfValue != null && (i.pfValue = r), o ? i.strValue = "rgb(" + r.join(",") + ")" : u ? i.strValue = r.join(" ") : i.strValue = "" + r, this.updateStyleHints(a)), this.checkTriggers(a, e, l, r);
    }
  };
  $a.removeAllBypasses = function(t, e) {
    return this.removeBypasses(t, this.propertyNames, e);
  };
  $a.removeBypasses = function(t, e, r) {
    for (var n = true, a = 0; a < t.length; a++) {
      for (var i = t[a], s = {}, o = 0; o < e.length; o++) {
        var u = e[o], l = this.properties[u], c = i.pstyle(l.name);
        if (!(!c || !c.bypass)) {
          var f = "", d = this.parse(u, f, true), v = s[l.name] = {
            prev: c
          };
          this.applyParsedProperty(i, d), v.next = i.pstyle(l.name);
        }
      }
      this.updateStyleHints(i), r && this.updateTransitions(i, s, n);
    }
  };
  var Ku = {};
  Ku.getEmSizeInPixels = function() {
    var t = this.containerCss("font-size");
    return t != null ? parseFloat(t) : 1;
  };
  Ku.containerCss = function(t) {
    var e = this._private.cy, r = e.container(), n = e.window();
    if (n && r && n.getComputedStyle) return n.getComputedStyle(r).getPropertyValue(t);
  };
  var dr = {};
  dr.getRenderedStyle = function(t, e) {
    return e ? this.getStylePropertyValue(t, e, true) : this.getRawStyle(t, true);
  };
  dr.getRawStyle = function(t, e) {
    var r = this;
    if (t = t[0], t) {
      for (var n = {}, a = 0; a < r.properties.length; a++) {
        var i = r.properties[a], s = r.getStylePropertyValue(t, i.name, e);
        s != null && (n[i.name] = s, n[Yi(i.name)] = s);
      }
      return n;
    }
  };
  dr.getIndexedStyle = function(t, e, r, n) {
    var a = t.pstyle(e)[r][n];
    return a ?? t.cy().style().getDefaultProperty(e)[r][0];
  };
  dr.getStylePropertyValue = function(t, e, r) {
    var n = this;
    if (t = t[0], t) {
      var a = n.properties[e];
      a.alias && (a = a.pointsTo);
      var i = a.type, s = t.pstyle(a.name);
      if (s) {
        var o = s.value, u = s.units, l = s.strValue;
        if (r && i.number && o != null && ae(o)) {
          var c = t.cy().zoom(), f = function(p) {
            return p * c;
          }, d = function(p, g) {
            return f(p) + g;
          }, v = Ke(o), h = v ? u.every(function(y) {
            return y != null;
          }) : u != null;
          return h ? v ? o.map(function(y, p) {
            return d(y, u[p]);
          }).join(" ") : d(o, u) : v ? o.map(function(y) {
            return me(y) ? y : "" + f(y);
          }).join(" ") : "" + f(o);
        } else if (l != null) return l;
      }
      return null;
    }
  };
  dr.getAnimationStartStyle = function(t, e) {
    for (var r = {}, n = 0; n < e.length; n++) {
      var a = e[n], i = a.name, s = t.pstyle(i);
      s !== void 0 && (ze(s) ? s = this.parse(i, s.strValue) : s = this.parse(i, s)), s && (r[i] = s);
    }
    return r;
  };
  dr.getPropsList = function(t) {
    var e = this, r = [], n = t, a = e.properties;
    if (n) for (var i = Object.keys(n), s = 0; s < i.length; s++) {
      var o = i[s], u = n[o], l = a[o] || a[Mu(o)], c = this.parse(l.name, u);
      c && r.push(c);
    }
    return r;
  };
  dr.getNonDefaultPropertiesHash = function(t, e, r) {
    var n = r.slice(), a, i, s, o, u, l;
    for (u = 0; u < e.length; u++) if (a = e[u], i = t.pstyle(a, false), i != null) if (i.pfValue != null) n[0] = wa(o, n[0]), n[1] = xa(o, n[1]);
    else for (s = i.strValue, l = 0; l < s.length; l++) o = s.charCodeAt(l), n[0] = wa(o, n[0]), n[1] = xa(o, n[1]);
    return n;
  };
  dr.getPropertiesHash = dr.getNonDefaultPropertiesHash;
  var us = {};
  us.appendFromJson = function(t) {
    for (var e = this, r = 0; r < t.length; r++) {
      var n = t[r], a = n.selector, i = n.style || n.css, s = Object.keys(i);
      e.selector(a);
      for (var o = 0; o < s.length; o++) {
        var u = s[o], l = i[u];
        e.css(u, l);
      }
    }
    return e;
  };
  us.fromJson = function(t) {
    var e = this;
    return e.resetToDefault(), e.appendFromJson(t), e;
  };
  us.json = function() {
    for (var t = [], e = this.defaultLength; e < this.length; e++) {
      for (var r = this[e], n = r.selector, a = r.properties, i = {}, s = 0; s < a.length; s++) {
        var o = a[s];
        i[o.name] = o.strValue;
      }
      t.push({
        selector: n ? n.toString() : "core",
        style: i
      });
    }
    return t;
  };
  var Yu = {};
  Yu.appendFromString = function(t) {
    var e = this, r = this, n = "" + t, a, i, s;
    n = n.replace(/[/][*](\s|.)+?[*][/]/g, "");
    function o() {
      n.length > a.length ? n = n.substr(a.length) : n = "";
    }
    function u() {
      i.length > s.length ? i = i.substr(s.length) : i = "";
    }
    for (; ; ) {
      var l = n.match(/^\s*$/);
      if (l) break;
      var c = n.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
      if (!c) {
        Ge("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + n);
        break;
      }
      a = c[0];
      var f = c[1];
      if (f !== "core") {
        var d = new Fr(f);
        if (d.invalid) {
          Ge("Skipping parsing of block: Invalid selector found in string stylesheet: " + f), o();
          continue;
        }
      }
      var v = c[2], h = false;
      i = v;
      for (var y = []; ; ) {
        var p = i.match(/^\s*$/);
        if (p) break;
        var g = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
        if (!g) {
          Ge("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + v), h = true;
          break;
        }
        s = g[0];
        var b = g[1], m = g[2], x = e.properties[b];
        if (!x) {
          Ge("Skipping property: Invalid property name in: " + s), u();
          continue;
        }
        var E = r.parse(b, m);
        if (!E) {
          Ge("Skipping property: Invalid property definition in: " + s), u();
          continue;
        }
        y.push({
          name: b,
          val: m
        }), u();
      }
      if (h) {
        o();
        break;
      }
      r.selector(f);
      for (var S = 0; S < y.length; S++) {
        var w = y[S];
        r.css(w.name, w.val);
      }
      o();
    }
    return r;
  };
  Yu.fromString = function(t) {
    var e = this;
    return e.resetToDefault(), e.appendFromString(t), e;
  };
  var ct = {};
  (function() {
    var t = pt, e = vp, r = gp, n = pp, a = mp, i = function(V) {
      return "^" + V + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
    }, s = function(V) {
      var q = t + "|\\w+|" + e + "|" + r + "|" + n + "|" + a;
      return "^" + V + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\s*,\\s*(" + q + ")\\s*\\,\\s*(" + q + ")\\)$";
    }, o = [
      `^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`,
      "^(none)$",
      "^(.+)$"
    ];
    ct.types = {
      time: {
        number: true,
        min: 0,
        units: "s|ms",
        implicitUnits: "ms"
      },
      percent: {
        number: true,
        min: 0,
        max: 100,
        units: "%",
        implicitUnits: "%"
      },
      percentages: {
        number: true,
        min: 0,
        max: 100,
        units: "%",
        implicitUnits: "%",
        multiple: true
      },
      zeroOneNumber: {
        number: true,
        min: 0,
        max: 1,
        unitless: true
      },
      zeroOneNumbers: {
        number: true,
        min: 0,
        max: 1,
        unitless: true,
        multiple: true
      },
      nOneOneNumber: {
        number: true,
        min: -1,
        max: 1,
        unitless: true
      },
      nonNegativeInt: {
        number: true,
        min: 0,
        integer: true,
        unitless: true
      },
      nonNegativeNumber: {
        number: true,
        min: 0,
        unitless: true
      },
      position: {
        enums: [
          "parent",
          "origin"
        ]
      },
      nodeSize: {
        number: true,
        min: 0,
        enums: [
          "label"
        ]
      },
      number: {
        number: true,
        unitless: true
      },
      numbers: {
        number: true,
        unitless: true,
        multiple: true
      },
      positiveNumber: {
        number: true,
        unitless: true,
        min: 0,
        strictMin: true
      },
      size: {
        number: true,
        min: 0
      },
      bidirectionalSize: {
        number: true
      },
      bidirectionalSizeMaybePercent: {
        number: true,
        allowPercent: true
      },
      bidirectionalSizes: {
        number: true,
        multiple: true
      },
      sizeMaybePercent: {
        number: true,
        min: 0,
        allowPercent: true
      },
      axisDirection: {
        enums: [
          "horizontal",
          "leftward",
          "rightward",
          "vertical",
          "upward",
          "downward",
          "auto"
        ]
      },
      axisDirectionExplicit: {
        enums: [
          "leftward",
          "rightward",
          "upward",
          "downward"
        ]
      },
      axisDirectionPrimary: {
        enums: [
          "horizontal",
          "vertical"
        ]
      },
      paddingRelativeTo: {
        enums: [
          "width",
          "height",
          "average",
          "min",
          "max"
        ]
      },
      bgWH: {
        number: true,
        min: 0,
        allowPercent: true,
        enums: [
          "auto"
        ],
        multiple: true
      },
      bgPos: {
        number: true,
        allowPercent: true,
        multiple: true
      },
      bgRelativeTo: {
        enums: [
          "inner",
          "include-padding"
        ],
        multiple: true
      },
      bgRepeat: {
        enums: [
          "repeat",
          "repeat-x",
          "repeat-y",
          "no-repeat"
        ],
        multiple: true
      },
      bgFit: {
        enums: [
          "none",
          "contain",
          "cover"
        ],
        multiple: true
      },
      bgCrossOrigin: {
        enums: [
          "anonymous",
          "use-credentials",
          "null"
        ],
        multiple: true
      },
      bgClip: {
        enums: [
          "none",
          "node"
        ],
        multiple: true
      },
      bgContainment: {
        enums: [
          "inside",
          "over"
        ],
        multiple: true
      },
      boxSelection: {
        enums: [
          "contain",
          "overlap",
          "none"
        ]
      },
      color: {
        color: true
      },
      colors: {
        color: true,
        multiple: true
      },
      fill: {
        enums: [
          "solid",
          "linear-gradient",
          "radial-gradient"
        ]
      },
      bool: {
        enums: [
          "yes",
          "no"
        ]
      },
      bools: {
        enums: [
          "yes",
          "no"
        ],
        multiple: true
      },
      lineStyle: {
        enums: [
          "solid",
          "dotted",
          "dashed"
        ]
      },
      lineCap: {
        enums: [
          "butt",
          "round",
          "square"
        ]
      },
      linePosition: {
        enums: [
          "center",
          "inside",
          "outside"
        ]
      },
      lineJoin: {
        enums: [
          "round",
          "bevel",
          "miter"
        ]
      },
      borderStyle: {
        enums: [
          "solid",
          "dotted",
          "dashed",
          "double"
        ]
      },
      curveStyle: {
        enums: [
          "bezier",
          "unbundled-bezier",
          "haystack",
          "segments",
          "straight",
          "straight-triangle",
          "taxi",
          "round-segments",
          "round-taxi"
        ]
      },
      radiusType: {
        enums: [
          "arc-radius",
          "influence-radius"
        ],
        multiple: true
      },
      fontFamily: {
        regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
      },
      fontStyle: {
        enums: [
          "italic",
          "normal",
          "oblique"
        ]
      },
      fontWeight: {
        enums: [
          "normal",
          "bold",
          "bolder",
          "lighter",
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "800",
          "900",
          100,
          200,
          300,
          400,
          500,
          600,
          700,
          800,
          900
        ]
      },
      textDecoration: {
        enums: [
          "none",
          "underline",
          "overline",
          "line-through"
        ]
      },
      textTransform: {
        enums: [
          "none",
          "uppercase",
          "lowercase"
        ]
      },
      textWrap: {
        enums: [
          "none",
          "wrap",
          "ellipsis"
        ]
      },
      textOverflowWrap: {
        enums: [
          "whitespace",
          "anywhere"
        ]
      },
      textBackgroundShape: {
        enums: [
          "rectangle",
          "roundrectangle",
          "round-rectangle",
          "circle"
        ]
      },
      nodeShape: {
        enums: [
          "rectangle",
          "roundrectangle",
          "round-rectangle",
          "cutrectangle",
          "cut-rectangle",
          "bottomroundrectangle",
          "bottom-round-rectangle",
          "barrel",
          "ellipse",
          "triangle",
          "round-triangle",
          "square",
          "pentagon",
          "round-pentagon",
          "hexagon",
          "round-hexagon",
          "concavehexagon",
          "concave-hexagon",
          "heptagon",
          "round-heptagon",
          "octagon",
          "round-octagon",
          "tag",
          "round-tag",
          "star",
          "diamond",
          "round-diamond",
          "vee",
          "rhomboid",
          "right-rhomboid",
          "polygon"
        ]
      },
      overlayShape: {
        enums: [
          "roundrectangle",
          "round-rectangle",
          "ellipse"
        ]
      },
      cornerRadius: {
        number: true,
        min: 0,
        units: "px|em",
        implicitUnits: "px",
        enums: [
          "auto"
        ]
      },
      compoundIncludeLabels: {
        enums: [
          "include",
          "exclude"
        ]
      },
      arrowShape: {
        enums: [
          "tee",
          "triangle",
          "triangle-tee",
          "circle-triangle",
          "triangle-cross",
          "triangle-backcurve",
          "vee",
          "square",
          "circle",
          "diamond",
          "chevron",
          "none"
        ]
      },
      arrowFill: {
        enums: [
          "filled",
          "hollow"
        ]
      },
      arrowWidth: {
        number: true,
        units: "%|px|em",
        implicitUnits: "px",
        enums: [
          "match-line"
        ]
      },
      display: {
        enums: [
          "element",
          "none"
        ]
      },
      visibility: {
        enums: [
          "hidden",
          "visible"
        ]
      },
      zCompoundDepth: {
        enums: [
          "bottom",
          "orphan",
          "auto",
          "top"
        ]
      },
      zIndexCompare: {
        enums: [
          "auto",
          "manual"
        ]
      },
      valign: {
        enums: [
          "top",
          "center",
          "bottom"
        ]
      },
      halign: {
        enums: [
          "left",
          "center",
          "right"
        ]
      },
      justification: {
        enums: [
          "left",
          "center",
          "right",
          "auto"
        ]
      },
      text: {
        string: true
      },
      data: {
        mapping: true,
        regex: i("data")
      },
      layoutData: {
        mapping: true,
        regex: i("layoutData")
      },
      scratch: {
        mapping: true,
        regex: i("scratch")
      },
      mapData: {
        mapping: true,
        regex: s("mapData")
      },
      mapLayoutData: {
        mapping: true,
        regex: s("mapLayoutData")
      },
      mapScratch: {
        mapping: true,
        regex: s("mapScratch")
      },
      fn: {
        mapping: true,
        fn: true
      },
      url: {
        regexes: o,
        singleRegexMatchValue: true
      },
      urls: {
        regexes: o,
        singleRegexMatchValue: true,
        multiple: true
      },
      propList: {
        propList: true
      },
      angle: {
        number: true,
        units: "deg|rad",
        implicitUnits: "rad"
      },
      textRotation: {
        number: true,
        units: "deg|rad",
        implicitUnits: "rad",
        enums: [
          "none",
          "autorotate"
        ]
      },
      polygonPointList: {
        number: true,
        multiple: true,
        evenMultiple: true,
        min: -1,
        max: 1,
        unitless: true
      },
      edgeDistances: {
        enums: [
          "intersection",
          "node-position",
          "endpoints"
        ]
      },
      edgeEndpoint: {
        number: true,
        multiple: true,
        units: "%|px|em|deg|rad",
        implicitUnits: "px",
        enums: [
          "inside-to-node",
          "outside-to-node",
          "outside-to-node-or-label",
          "outside-to-line",
          "outside-to-line-or-label"
        ],
        singleEnum: true,
        validate: function(V, q) {
          switch (V.length) {
            case 2:
              return q[0] !== "deg" && q[0] !== "rad" && q[1] !== "deg" && q[1] !== "rad";
            case 1:
              return me(V[0]) || q[0] === "deg" || q[0] === "rad";
            default:
              return false;
          }
        }
      },
      easing: {
        regexes: [
          "^(spring)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$",
          "^(cubic-bezier)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$"
        ],
        enums: [
          "linear",
          "ease",
          "ease-in",
          "ease-out",
          "ease-in-out",
          "ease-in-sine",
          "ease-out-sine",
          "ease-in-out-sine",
          "ease-in-quad",
          "ease-out-quad",
          "ease-in-out-quad",
          "ease-in-cubic",
          "ease-out-cubic",
          "ease-in-out-cubic",
          "ease-in-quart",
          "ease-out-quart",
          "ease-in-out-quart",
          "ease-in-quint",
          "ease-out-quint",
          "ease-in-out-quint",
          "ease-in-expo",
          "ease-out-expo",
          "ease-in-out-expo",
          "ease-in-circ",
          "ease-out-circ",
          "ease-in-out-circ"
        ]
      },
      gradientDirection: {
        enums: [
          "to-bottom",
          "to-top",
          "to-left",
          "to-right",
          "to-bottom-right",
          "to-bottom-left",
          "to-top-right",
          "to-top-left",
          "to-right-bottom",
          "to-left-bottom",
          "to-right-top",
          "to-left-top"
        ]
      },
      boundsExpansion: {
        number: true,
        multiple: true,
        min: 0,
        validate: function(V) {
          var q = V.length;
          return q === 1 || q === 2 || q === 4;
        }
      }
    };
    var u = {
      zeroNonZero: function(V, q) {
        return (V == null || q == null) && V !== q || V == 0 && q != 0 ? true : V != 0 && q == 0;
      },
      any: function(V, q) {
        return V != q;
      },
      emptyNonEmpty: function(V, q) {
        var X = Nr(V), ne = Nr(q);
        return X && !ne || !X && ne;
      }
    }, l = ct.types, c = [
      {
        name: "label",
        type: l.text,
        triggersBounds: u.any,
        triggersZOrder: u.emptyNonEmpty
      },
      {
        name: "text-rotation",
        type: l.textRotation,
        triggersBounds: u.any
      },
      {
        name: "text-margin-x",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      },
      {
        name: "text-margin-y",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      }
    ], f = [
      {
        name: "source-label",
        type: l.text,
        triggersBounds: u.any
      },
      {
        name: "source-text-rotation",
        type: l.textRotation,
        triggersBounds: u.any
      },
      {
        name: "source-text-margin-x",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      },
      {
        name: "source-text-margin-y",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      },
      {
        name: "source-text-offset",
        type: l.size,
        triggersBounds: u.any
      }
    ], d = [
      {
        name: "target-label",
        type: l.text,
        triggersBounds: u.any
      },
      {
        name: "target-text-rotation",
        type: l.textRotation,
        triggersBounds: u.any
      },
      {
        name: "target-text-margin-x",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      },
      {
        name: "target-text-margin-y",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      },
      {
        name: "target-text-offset",
        type: l.size,
        triggersBounds: u.any
      }
    ], v = [
      {
        name: "font-family",
        type: l.fontFamily,
        triggersBounds: u.any
      },
      {
        name: "font-style",
        type: l.fontStyle,
        triggersBounds: u.any
      },
      {
        name: "font-weight",
        type: l.fontWeight,
        triggersBounds: u.any
      },
      {
        name: "font-size",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "text-transform",
        type: l.textTransform,
        triggersBounds: u.any
      },
      {
        name: "text-wrap",
        type: l.textWrap,
        triggersBounds: u.any
      },
      {
        name: "text-overflow-wrap",
        type: l.textOverflowWrap,
        triggersBounds: u.any
      },
      {
        name: "text-max-width",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "text-outline-width",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "line-height",
        type: l.positiveNumber,
        triggersBounds: u.any
      }
    ], h = [
      {
        name: "text-valign",
        type: l.valign,
        triggersBounds: u.any
      },
      {
        name: "text-halign",
        type: l.halign,
        triggersBounds: u.any
      },
      {
        name: "color",
        type: l.color
      },
      {
        name: "text-outline-color",
        type: l.color
      },
      {
        name: "text-outline-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "text-background-color",
        type: l.color
      },
      {
        name: "text-background-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "text-background-padding",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "text-border-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "text-border-color",
        type: l.color
      },
      {
        name: "text-border-width",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "text-border-style",
        type: l.borderStyle,
        triggersBounds: u.any
      },
      {
        name: "text-background-shape",
        type: l.textBackgroundShape,
        triggersBounds: u.any
      },
      {
        name: "text-justification",
        type: l.justification
      },
      {
        name: "box-select-labels",
        type: l.bool,
        triggersBounds: u.any
      }
    ], y = [
      {
        name: "events",
        type: l.bool,
        triggersZOrder: u.any
      },
      {
        name: "text-events",
        type: l.bool,
        triggersZOrder: u.any
      },
      {
        name: "box-selection",
        type: l.boxSelection,
        triggersZOrder: u.any
      }
    ], p = [
      {
        name: "display",
        type: l.display,
        triggersZOrder: u.any,
        triggersBounds: u.any,
        triggersBoundsOfConnectedEdges: u.any,
        triggersBoundsOfParallelEdges: function(V, q, X) {
          return V === q ? false : X.pstyle("curve-style").value === "bezier";
        }
      },
      {
        name: "visibility",
        type: l.visibility,
        triggersZOrder: u.any
      },
      {
        name: "opacity",
        type: l.zeroOneNumber,
        triggersZOrder: u.zeroNonZero
      },
      {
        name: "text-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "min-zoomed-font-size",
        type: l.size
      },
      {
        name: "z-compound-depth",
        type: l.zCompoundDepth,
        triggersZOrder: u.any
      },
      {
        name: "z-index-compare",
        type: l.zIndexCompare,
        triggersZOrder: u.any
      },
      {
        name: "z-index",
        type: l.number,
        triggersZOrder: u.any
      }
    ], g = [
      {
        name: "overlay-padding",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "overlay-color",
        type: l.color
      },
      {
        name: "overlay-opacity",
        type: l.zeroOneNumber,
        triggersBounds: u.zeroNonZero
      },
      {
        name: "overlay-shape",
        type: l.overlayShape,
        triggersBounds: u.any
      },
      {
        name: "overlay-corner-radius",
        type: l.cornerRadius
      }
    ], b = [
      {
        name: "underlay-padding",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "underlay-color",
        type: l.color
      },
      {
        name: "underlay-opacity",
        type: l.zeroOneNumber,
        triggersBounds: u.zeroNonZero
      },
      {
        name: "underlay-shape",
        type: l.overlayShape,
        triggersBounds: u.any
      },
      {
        name: "underlay-corner-radius",
        type: l.cornerRadius
      }
    ], m = [
      {
        name: "transition-property",
        type: l.propList
      },
      {
        name: "transition-duration",
        type: l.time
      },
      {
        name: "transition-delay",
        type: l.time
      },
      {
        name: "transition-timing-function",
        type: l.easing
      }
    ], x = function(V, q) {
      return q.value === "label" ? -V.poolIndex() : q.pfValue;
    }, E = [
      {
        name: "height",
        type: l.nodeSize,
        triggersBounds: u.any,
        hashOverride: x
      },
      {
        name: "width",
        type: l.nodeSize,
        triggersBounds: u.any,
        hashOverride: x
      },
      {
        name: "shape",
        type: l.nodeShape,
        triggersBounds: u.any
      },
      {
        name: "shape-polygon-points",
        type: l.polygonPointList,
        triggersBounds: u.any
      },
      {
        name: "corner-radius",
        type: l.cornerRadius
      },
      {
        name: "background-color",
        type: l.color
      },
      {
        name: "background-fill",
        type: l.fill
      },
      {
        name: "background-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "background-blacken",
        type: l.nOneOneNumber
      },
      {
        name: "background-gradient-stop-colors",
        type: l.colors
      },
      {
        name: "background-gradient-stop-positions",
        type: l.percentages
      },
      {
        name: "background-gradient-direction",
        type: l.gradientDirection
      },
      {
        name: "padding",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      },
      {
        name: "padding-relative-to",
        type: l.paddingRelativeTo,
        triggersBounds: u.any
      },
      {
        name: "bounds-expansion",
        type: l.boundsExpansion,
        triggersBounds: u.any
      }
    ], S = [
      {
        name: "border-color",
        type: l.color
      },
      {
        name: "border-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "border-width",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "border-style",
        type: l.borderStyle
      },
      {
        name: "border-cap",
        type: l.lineCap
      },
      {
        name: "border-join",
        type: l.lineJoin
      },
      {
        name: "border-dash-pattern",
        type: l.numbers
      },
      {
        name: "border-dash-offset",
        type: l.number
      },
      {
        name: "border-position",
        type: l.linePosition
      }
    ], w = [
      {
        name: "outline-color",
        type: l.color
      },
      {
        name: "outline-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "outline-width",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "outline-style",
        type: l.borderStyle
      },
      {
        name: "outline-offset",
        type: l.size,
        triggersBounds: u.any
      }
    ], T = [
      {
        name: "background-image",
        type: l.urls
      },
      {
        name: "background-image-crossorigin",
        type: l.bgCrossOrigin
      },
      {
        name: "background-image-opacity",
        type: l.zeroOneNumbers
      },
      {
        name: "background-image-containment",
        type: l.bgContainment
      },
      {
        name: "background-image-smoothing",
        type: l.bools
      },
      {
        name: "background-position-x",
        type: l.bgPos
      },
      {
        name: "background-position-y",
        type: l.bgPos
      },
      {
        name: "background-width-relative-to",
        type: l.bgRelativeTo
      },
      {
        name: "background-height-relative-to",
        type: l.bgRelativeTo
      },
      {
        name: "background-repeat",
        type: l.bgRepeat
      },
      {
        name: "background-fit",
        type: l.bgFit
      },
      {
        name: "background-clip",
        type: l.bgClip
      },
      {
        name: "background-width",
        type: l.bgWH
      },
      {
        name: "background-height",
        type: l.bgWH
      },
      {
        name: "background-offset-x",
        type: l.bgPos
      },
      {
        name: "background-offset-y",
        type: l.bgPos
      }
    ], C = [
      {
        name: "position",
        type: l.position,
        triggersBounds: u.any
      },
      {
        name: "compound-sizing-wrt-labels",
        type: l.compoundIncludeLabels,
        triggersBounds: u.any
      },
      {
        name: "min-width",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "min-width-bias-left",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      },
      {
        name: "min-width-bias-right",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      },
      {
        name: "min-height",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "min-height-bias-top",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      },
      {
        name: "min-height-bias-bottom",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      }
    ], R = [
      {
        name: "line-style",
        type: l.lineStyle
      },
      {
        name: "line-color",
        type: l.color
      },
      {
        name: "line-fill",
        type: l.fill
      },
      {
        name: "line-cap",
        type: l.lineCap
      },
      {
        name: "line-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "line-dash-pattern",
        type: l.numbers
      },
      {
        name: "line-dash-offset",
        type: l.number
      },
      {
        name: "line-outline-width",
        type: l.size
      },
      {
        name: "line-outline-color",
        type: l.color
      },
      {
        name: "line-gradient-stop-colors",
        type: l.colors
      },
      {
        name: "line-gradient-stop-positions",
        type: l.percentages
      },
      {
        name: "curve-style",
        type: l.curveStyle,
        triggersBounds: u.any,
        triggersBoundsOfParallelEdges: function(V, q) {
          return V === q ? false : V === "bezier" || q === "bezier";
        }
      },
      {
        name: "haystack-radius",
        type: l.zeroOneNumber,
        triggersBounds: u.any
      },
      {
        name: "source-endpoint",
        type: l.edgeEndpoint,
        triggersBounds: u.any
      },
      {
        name: "target-endpoint",
        type: l.edgeEndpoint,
        triggersBounds: u.any
      },
      {
        name: "control-point-step-size",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "control-point-distances",
        type: l.bidirectionalSizes,
        triggersBounds: u.any
      },
      {
        name: "control-point-weights",
        type: l.numbers,
        triggersBounds: u.any
      },
      {
        name: "segment-distances",
        type: l.bidirectionalSizes,
        triggersBounds: u.any
      },
      {
        name: "segment-weights",
        type: l.numbers,
        triggersBounds: u.any
      },
      {
        name: "segment-radii",
        type: l.numbers,
        triggersBounds: u.any
      },
      {
        name: "radius-type",
        type: l.radiusType,
        triggersBounds: u.any
      },
      {
        name: "taxi-turn",
        type: l.bidirectionalSizeMaybePercent,
        triggersBounds: u.any
      },
      {
        name: "taxi-turn-min-distance",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "taxi-direction",
        type: l.axisDirection,
        triggersBounds: u.any
      },
      {
        name: "taxi-radius",
        type: l.number,
        triggersBounds: u.any
      },
      {
        name: "edge-distances",
        type: l.edgeDistances,
        triggersBounds: u.any
      },
      {
        name: "arrow-scale",
        type: l.positiveNumber,
        triggersBounds: u.any
      },
      {
        name: "loop-direction",
        type: l.angle,
        triggersBounds: u.any
      },
      {
        name: "loop-sweep",
        type: l.angle,
        triggersBounds: u.any
      },
      {
        name: "source-distance-from-node",
        type: l.size,
        triggersBounds: u.any
      },
      {
        name: "target-distance-from-node",
        type: l.size,
        triggersBounds: u.any
      }
    ], A = [
      {
        name: "ghost",
        type: l.bool,
        triggersBounds: u.any
      },
      {
        name: "ghost-offset-x",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      },
      {
        name: "ghost-offset-y",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      },
      {
        name: "ghost-opacity",
        type: l.zeroOneNumber
      }
    ], P = [
      {
        name: "selection-box-color",
        type: l.color
      },
      {
        name: "selection-box-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "selection-box-border-color",
        type: l.color
      },
      {
        name: "selection-box-border-width",
        type: l.size
      },
      {
        name: "active-bg-color",
        type: l.color
      },
      {
        name: "active-bg-opacity",
        type: l.zeroOneNumber
      },
      {
        name: "active-bg-size",
        type: l.size
      },
      {
        name: "outside-texture-bg-color",
        type: l.color
      },
      {
        name: "outside-texture-bg-opacity",
        type: l.zeroOneNumber
      }
    ], k = [];
    ct.pieBackgroundN = 16, k.push({
      name: "pie-size",
      type: l.sizeMaybePercent
    }), k.push({
      name: "pie-hole",
      type: l.sizeMaybePercent
    }), k.push({
      name: "pie-start-angle",
      type: l.angle
    });
    for (var I = 1; I <= ct.pieBackgroundN; I++) k.push({
      name: "pie-" + I + "-background-color",
      type: l.color
    }), k.push({
      name: "pie-" + I + "-background-size",
      type: l.percent
    }), k.push({
      name: "pie-" + I + "-background-opacity",
      type: l.zeroOneNumber
    });
    var M = [];
    ct.stripeBackgroundN = 16, M.push({
      name: "stripe-size",
      type: l.sizeMaybePercent
    }), M.push({
      name: "stripe-direction",
      type: l.axisDirectionPrimary
    });
    for (var D = 1; D <= ct.stripeBackgroundN; D++) M.push({
      name: "stripe-" + D + "-background-color",
      type: l.color
    }), M.push({
      name: "stripe-" + D + "-background-size",
      type: l.percent
    }), M.push({
      name: "stripe-" + D + "-background-opacity",
      type: l.zeroOneNumber
    });
    var B = [], O = ct.arrowPrefixes = [
      "source",
      "mid-source",
      "target",
      "mid-target"
    ];
    [
      {
        name: "arrow-shape",
        type: l.arrowShape,
        triggersBounds: u.any
      },
      {
        name: "arrow-color",
        type: l.color
      },
      {
        name: "arrow-fill",
        type: l.arrowFill
      },
      {
        name: "arrow-width",
        type: l.arrowWidth
      }
    ].forEach(function(F) {
      O.forEach(function(V) {
        var q = V + "-" + F.name, X = F.type, ne = F.triggersBounds;
        B.push({
          name: q,
          type: X,
          triggersBounds: ne
        });
      });
    }, {});
    var z = ct.properties = [].concat(y, m, p, g, b, A, h, v, c, f, d, E, S, w, T, k, M, C, R, B, P), U = ct.propertyGroups = {
      behavior: y,
      transition: m,
      visibility: p,
      overlay: g,
      underlay: b,
      ghost: A,
      commonLabel: h,
      labelDimensions: v,
      mainLabel: c,
      sourceLabel: f,
      targetLabel: d,
      nodeBody: E,
      nodeBorder: S,
      nodeOutline: w,
      backgroundImage: T,
      pie: k,
      stripe: M,
      compound: C,
      edgeLine: R,
      edgeArrow: B,
      core: P
    }, N = ct.propertyGroupNames = {}, L = ct.propertyGroupKeys = Object.keys(U);
    L.forEach(function(F) {
      N[F] = U[F].map(function(V) {
        return V.name;
      }), U[F].forEach(function(V) {
        return V.groupKey = F;
      });
    });
    var H = ct.aliases = [
      {
        name: "content",
        pointsTo: "label"
      },
      {
        name: "control-point-distance",
        pointsTo: "control-point-distances"
      },
      {
        name: "control-point-weight",
        pointsTo: "control-point-weights"
      },
      {
        name: "segment-distance",
        pointsTo: "segment-distances"
      },
      {
        name: "segment-weight",
        pointsTo: "segment-weights"
      },
      {
        name: "segment-radius",
        pointsTo: "segment-radii"
      },
      {
        name: "edge-text-rotation",
        pointsTo: "text-rotation"
      },
      {
        name: "padding-left",
        pointsTo: "padding"
      },
      {
        name: "padding-right",
        pointsTo: "padding"
      },
      {
        name: "padding-top",
        pointsTo: "padding"
      },
      {
        name: "padding-bottom",
        pointsTo: "padding"
      }
    ];
    ct.propertyNames = z.map(function(F) {
      return F.name;
    });
    for (var Y = 0; Y < z.length; Y++) {
      var K = z[Y];
      z[K.name] = K;
    }
    for (var Q = 0; Q < H.length; Q++) {
      var re = H[Q], ie = z[re.pointsTo], ee = {
        name: re.name,
        alias: true,
        pointsTo: ie
      };
      z.push(ee), z[re.name] = ee;
    }
  })();
  ct.getDefaultProperty = function(t) {
    return this.getDefaultProperties()[t];
  };
  ct.getDefaultProperties = function() {
    var t = this._private;
    if (t.defaultProperties != null) return t.defaultProperties;
    for (var e = Ee({
      "selection-box-color": "#ddd",
      "selection-box-opacity": 0.65,
      "selection-box-border-color": "#aaa",
      "selection-box-border-width": 1,
      "active-bg-color": "black",
      "active-bg-opacity": 0.15,
      "active-bg-size": 30,
      "outside-texture-bg-color": "#000",
      "outside-texture-bg-opacity": 0.125,
      events: "yes",
      "text-events": "no",
      "text-valign": "top",
      "text-halign": "center",
      "text-justification": "auto",
      "line-height": 1,
      color: "#000",
      "box-selection": "contain",
      "text-outline-color": "#000",
      "text-outline-width": 0,
      "text-outline-opacity": 1,
      "text-opacity": 1,
      "text-decoration": "none",
      "text-transform": "none",
      "text-wrap": "none",
      "text-overflow-wrap": "whitespace",
      "text-max-width": 9999,
      "text-background-color": "#000",
      "text-background-opacity": 0,
      "text-background-shape": "rectangle",
      "text-background-padding": 0,
      "text-border-opacity": 0,
      "text-border-width": 0,
      "text-border-style": "solid",
      "text-border-color": "#000",
      "font-family": "Helvetica Neue, Helvetica, sans-serif",
      "font-style": "normal",
      "font-weight": "normal",
      "font-size": 16,
      "min-zoomed-font-size": 0,
      "text-rotation": "none",
      "source-text-rotation": "none",
      "target-text-rotation": "none",
      visibility: "visible",
      display: "element",
      opacity: 1,
      "z-compound-depth": "auto",
      "z-index-compare": "auto",
      "z-index": 0,
      label: "",
      "text-margin-x": 0,
      "text-margin-y": 0,
      "source-label": "",
      "source-text-offset": 0,
      "source-text-margin-x": 0,
      "source-text-margin-y": 0,
      "target-label": "",
      "target-text-offset": 0,
      "target-text-margin-x": 0,
      "target-text-margin-y": 0,
      "overlay-opacity": 0,
      "overlay-color": "#000",
      "overlay-padding": 10,
      "overlay-shape": "round-rectangle",
      "overlay-corner-radius": "auto",
      "underlay-opacity": 0,
      "underlay-color": "#000",
      "underlay-padding": 10,
      "underlay-shape": "round-rectangle",
      "underlay-corner-radius": "auto",
      "transition-property": "none",
      "transition-duration": 0,
      "transition-delay": 0,
      "transition-timing-function": "linear",
      "box-select-labels": "no",
      "background-blacken": 0,
      "background-color": "#999",
      "background-fill": "solid",
      "background-opacity": 1,
      "background-image": "none",
      "background-image-crossorigin": "anonymous",
      "background-image-opacity": 1,
      "background-image-containment": "inside",
      "background-image-smoothing": "yes",
      "background-position-x": "50%",
      "background-position-y": "50%",
      "background-offset-x": 0,
      "background-offset-y": 0,
      "background-width-relative-to": "include-padding",
      "background-height-relative-to": "include-padding",
      "background-repeat": "no-repeat",
      "background-fit": "none",
      "background-clip": "node",
      "background-width": "auto",
      "background-height": "auto",
      "border-color": "#000",
      "border-opacity": 1,
      "border-width": 0,
      "border-style": "solid",
      "border-dash-pattern": [
        4,
        2
      ],
      "border-dash-offset": 0,
      "border-cap": "butt",
      "border-join": "miter",
      "border-position": "center",
      "outline-color": "#999",
      "outline-opacity": 1,
      "outline-width": 0,
      "outline-offset": 0,
      "outline-style": "solid",
      height: 30,
      width: 30,
      shape: "ellipse",
      "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
      "corner-radius": "auto",
      "bounds-expansion": 0,
      "background-gradient-direction": "to-bottom",
      "background-gradient-stop-colors": "#999",
      "background-gradient-stop-positions": "0%",
      ghost: "no",
      "ghost-offset-y": 0,
      "ghost-offset-x": 0,
      "ghost-opacity": 0,
      padding: 0,
      "padding-relative-to": "width",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      "min-width": 0,
      "min-width-bias-left": 0,
      "min-width-bias-right": 0,
      "min-height": 0,
      "min-height-bias-top": 0,
      "min-height-bias-bottom": 0
    }, {
      "pie-size": "100%",
      "pie-hole": 0,
      "pie-start-angle": "0deg"
    }, [
      {
        name: "pie-{{i}}-background-color",
        value: "black"
      },
      {
        name: "pie-{{i}}-background-size",
        value: "0%"
      },
      {
        name: "pie-{{i}}-background-opacity",
        value: 1
      }
    ].reduce(function(u, l) {
      for (var c = 1; c <= ct.pieBackgroundN; c++) {
        var f = l.name.replace("{{i}}", c), d = l.value;
        u[f] = d;
      }
      return u;
    }, {}), {
      "stripe-size": "100%",
      "stripe-direction": "horizontal"
    }, [
      {
        name: "stripe-{{i}}-background-color",
        value: "black"
      },
      {
        name: "stripe-{{i}}-background-size",
        value: "0%"
      },
      {
        name: "stripe-{{i}}-background-opacity",
        value: 1
      }
    ].reduce(function(u, l) {
      for (var c = 1; c <= ct.stripeBackgroundN; c++) {
        var f = l.name.replace("{{i}}", c), d = l.value;
        u[f] = d;
      }
      return u;
    }, {}), {
      "line-style": "solid",
      "line-color": "#999",
      "line-fill": "solid",
      "line-cap": "butt",
      "line-opacity": 1,
      "line-outline-width": 0,
      "line-outline-color": "#000",
      "line-gradient-stop-colors": "#999",
      "line-gradient-stop-positions": "0%",
      "control-point-step-size": 40,
      "control-point-weights": 0.5,
      "segment-weights": 0.5,
      "segment-distances": 20,
      "segment-radii": 15,
      "radius-type": "arc-radius",
      "taxi-turn": "50%",
      "taxi-radius": 15,
      "taxi-turn-min-distance": 10,
      "taxi-direction": "auto",
      "edge-distances": "intersection",
      "curve-style": "haystack",
      "haystack-radius": 0,
      "arrow-scale": 1,
      "loop-direction": "-45deg",
      "loop-sweep": "-90deg",
      "source-distance-from-node": 0,
      "target-distance-from-node": 0,
      "source-endpoint": "outside-to-node",
      "target-endpoint": "outside-to-node",
      "line-dash-pattern": [
        6,
        3
      ],
      "line-dash-offset": 0
    }, [
      {
        name: "arrow-shape",
        value: "none"
      },
      {
        name: "arrow-color",
        value: "#999"
      },
      {
        name: "arrow-fill",
        value: "filled"
      },
      {
        name: "arrow-width",
        value: 1
      }
    ].reduce(function(u, l) {
      return ct.arrowPrefixes.forEach(function(c) {
        var f = c + "-" + l.name, d = l.value;
        u[f] = d;
      }), u;
    }, {})), r = {}, n = 0; n < this.properties.length; n++) {
      var a = this.properties[n];
      if (!a.pointsTo) {
        var i = a.name, s = e[i], o = this.parse(i, s);
        r[i] = o;
      }
    }
    return t.defaultProperties = r, t.defaultProperties;
  };
  ct.addDefaultStylesheet = function() {
    this.selector(":parent").css({
      shape: "rectangle",
      padding: 10,
      "background-color": "#eee",
      "border-color": "#ccc",
      "border-width": 1
    }).selector("edge").css({
      width: 3
    }).selector(":loop").css({
      "curve-style": "bezier"
    }).selector("edge:compound").css({
      "curve-style": "bezier",
      "source-endpoint": "outside-to-line",
      "target-endpoint": "outside-to-line"
    }).selector(":selected").css({
      "background-color": "#0169D9",
      "line-color": "#0169D9",
      "source-arrow-color": "#0169D9",
      "target-arrow-color": "#0169D9",
      "mid-source-arrow-color": "#0169D9",
      "mid-target-arrow-color": "#0169D9"
    }).selector(":parent:selected").css({
      "background-color": "#CCE1F9",
      "border-color": "#aec8e5"
    }).selector(":active").css({
      "overlay-color": "black",
      "overlay-padding": 10,
      "overlay-opacity": 0.25
    }), this.defaultLength = this.length;
  };
  var ls = {};
  ls.parse = function(t, e, r, n) {
    var a = this;
    if (at(e)) return a.parseImplWarn(t, e, r, n);
    var i = n === "mapping" || n === true || n === false || n == null ? "dontcare" : n, s = r ? "t" : "f", o = "" + e, u = Ud(t, o, s, i), l = a.propCache = a.propCache || [], c;
    return (c = l[u]) || (c = l[u] = a.parseImplWarn(t, e, r, n)), (r || n === "mapping") && (c = fr(c), c && (c.value = fr(c.value))), c;
  };
  ls.parseImplWarn = function(t, e, r, n) {
    var a = this.parseImpl(t, e, r, n);
    return !a && e != null && Ge("The style property `".concat(t, ": ").concat(e, "` is invalid")), a && (a.name === "width" || a.name === "height") && e === "label" && Ge("The style value of `label` is deprecated for `" + a.name + "`"), a;
  };
  ls.parseImpl = function(t, e, r, n) {
    var a = this;
    t = Mu(t);
    var i = a.properties[t], s = e, o = a.types;
    if (!i || e === void 0) return null;
    i.alias && (i = i.pointsTo, t = i.name);
    var u = me(e);
    u && (e = e.trim());
    var l = i.type;
    if (!l) return null;
    if (r && (e === "" || e === null)) return {
      name: t,
      value: e,
      bypass: true,
      deleteBypass: true
    };
    if (at(e)) return {
      name: t,
      value: e,
      strValue: "fn",
      mapped: o.fn,
      bypass: r
    };
    var c, f;
    if (!(!u || n || e.length < 7 || e[1] !== "a")) {
      if (e.length >= 7 && e[0] === "d" && (c = new RegExp(o.data.regex).exec(e))) {
        if (r) return false;
        var d = o.data;
        return {
          name: t,
          value: c,
          strValue: "" + e,
          mapped: d,
          field: c[1],
          bypass: r
        };
      } else if (e.length >= 10 && e[0] === "m" && (f = new RegExp(o.mapData.regex).exec(e))) {
        if (r || l.multiple) return false;
        var v = o.mapData;
        if (!(l.color || l.number)) return false;
        var h = this.parse(t, f[4]);
        if (!h || h.mapped) return false;
        var y = this.parse(t, f[5]);
        if (!y || y.mapped) return false;
        if (h.pfValue === y.pfValue || h.strValue === y.strValue) return Ge("`" + t + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + t + ": " + h.strValue + "`"), this.parse(t, h.strValue);
        if (l.color) {
          var p = h.value, g = y.value, b = p[0] === g[0] && p[1] === g[1] && p[2] === g[2] && (p[3] === g[3] || (p[3] == null || p[3] === 1) && (g[3] == null || g[3] === 1));
          if (b) return false;
        }
        return {
          name: t,
          value: f,
          strValue: "" + e,
          mapped: v,
          field: f[1],
          fieldMin: parseFloat(f[2]),
          fieldMax: parseFloat(f[3]),
          valueMin: h.value,
          valueMax: y.value,
          bypass: r
        };
      }
    }
    if (l.multiple && n !== "multiple") {
      var m;
      if (u ? m = e.split(/\s+/) : Ke(e) ? m = e : m = [
        e
      ], l.evenMultiple && m.length % 2 !== 0) return null;
      for (var x = [], E = [], S = [], w = "", T = false, C = 0; C < m.length; C++) {
        var R = a.parse(t, m[C], r, "multiple");
        T = T || me(R.value), x.push(R.value), S.push(R.pfValue != null ? R.pfValue : R.value), E.push(R.units), w += (C > 0 ? " " : "") + R.strValue;
      }
      return l.validate && !l.validate(x, E) ? null : l.singleEnum && T ? x.length === 1 && me(x[0]) ? {
        name: t,
        value: x[0],
        strValue: x[0],
        bypass: r
      } : null : {
        name: t,
        value: x,
        pfValue: S,
        strValue: w,
        bypass: r,
        units: E
      };
    }
    var A = function() {
      for (var ee = 0; ee < l.enums.length; ee++) {
        var F = l.enums[ee];
        if (F === e) return {
          name: t,
          value: e,
          strValue: "" + e,
          bypass: r
        };
      }
      return null;
    };
    if (l.number) {
      var P, k = "px";
      if (l.units && (P = l.units), l.implicitUnits && (k = l.implicitUnits), !l.unitless) if (u) {
        var I = "px|em" + (l.allowPercent ? "|\\%" : "");
        P && (I = P);
        var M = e.match("^(" + pt + ")(" + I + ")?$");
        M && (e = M[1], P = M[2] || k);
      } else (!P || l.implicitUnits) && (P = k);
      if (e = parseFloat(e), isNaN(e) && l.enums === void 0) return null;
      if (isNaN(e) && l.enums !== void 0) return e = s, A();
      if (l.integer && !sp(e) || l.min !== void 0 && (e < l.min || l.strictMin && e === l.min) || l.max !== void 0 && (e > l.max || l.strictMax && e === l.max)) return null;
      var D = {
        name: t,
        value: e,
        strValue: "" + e + (P || ""),
        units: P,
        bypass: r
      };
      return l.unitless || P !== "px" && P !== "em" ? D.pfValue = e : D.pfValue = P === "px" || !P ? e : this.getEmSizeInPixels() * e, (P === "ms" || P === "s") && (D.pfValue = P === "ms" ? e : 1e3 * e), (P === "deg" || P === "rad") && (D.pfValue = P === "rad" ? e : pm(e)), P === "%" && (D.pfValue = e / 100), D;
    } else if (l.propList) {
      var B = [], O = "" + e;
      if (O !== "none") {
        for (var z = O.split(/\s*,\s*|\s+/), U = 0; U < z.length; U++) {
          var N = z[U].trim();
          a.properties[N] ? B.push(N) : Ge("`" + N + "` is not a valid property name");
        }
        if (B.length === 0) return null;
      }
      return {
        name: t,
        value: B,
        strValue: B.length === 0 ? "none" : B.join(" "),
        bypass: r
      };
    } else if (l.color) {
      var L = Od(e);
      return L ? {
        name: t,
        value: L,
        pfValue: L,
        strValue: "rgb(" + L[0] + "," + L[1] + "," + L[2] + ")",
        bypass: r
      } : null;
    } else if (l.regex || l.regexes) {
      if (l.enums) {
        var H = A();
        if (H) return H;
      }
      for (var Y = l.regexes ? l.regexes : [
        l.regex
      ], K = 0; K < Y.length; K++) {
        var Q = new RegExp(Y[K]), re = Q.exec(e);
        if (re) return {
          name: t,
          value: l.singleRegexMatchValue ? re[1] : re,
          strValue: "" + e,
          bypass: r
        };
      }
      return null;
    } else return l.string ? {
      name: t,
      value: "" + e,
      strValue: "" + e,
      bypass: r
    } : l.enums ? A() : null;
  };
  var xt = function(e) {
    if (!(this instanceof xt)) return new xt(e);
    if (!Bu(e)) {
      tt("A style must have a core reference");
      return;
    }
    this._private = {
      cy: e,
      coreStyle: {}
    }, this.length = 0, this.resetToDefault();
  }, It = xt.prototype;
  It.instanceString = function() {
    return "style";
  };
  It.clear = function() {
    for (var t = this._private, e = t.cy, r = e.elements(), n = 0; n < this.length; n++) this[n] = void 0;
    return this.length = 0, t.contextStyles = {}, t.propDiffs = {}, this.cleanElements(r, true), r.forEach(function(a) {
      var i = a[0]._private;
      i.styleDirty = true, i.appliedInitStyle = false;
    }), this;
  };
  It.resetToDefault = function() {
    return this.clear(), this.addDefaultStylesheet(), this;
  };
  It.core = function(t) {
    return this._private.coreStyle[t] || this.getDefaultProperty(t);
  };
  It.selector = function(t) {
    var e = t === "core" ? null : new Fr(t), r = this.length++;
    return this[r] = {
      selector: e,
      properties: [],
      mappedProperties: [],
      index: r
    }, this;
  };
  It.css = function() {
    var t = this, e = arguments;
    if (e.length === 1) for (var r = e[0], n = 0; n < t.properties.length; n++) {
      var a = t.properties[n], i = r[a.name];
      i === void 0 && (i = r[Yi(a.name)]), i !== void 0 && this.cssRule(a.name, i);
    }
    else e.length === 2 && this.cssRule(e[0], e[1]);
    return this;
  };
  It.style = It.css;
  It.cssRule = function(t, e) {
    var r = this.parse(t, e);
    if (r) {
      var n = this.length - 1;
      this[n].properties.push(r), this[n].properties[r.name] = r, r.name.match(/pie-(\d+)-background-size/) && r.value && (this._private.hasPie = true), r.name.match(/stripe-(\d+)-background-size/) && r.value && (this._private.hasStripe = true), r.mapped && this[n].mappedProperties.push(r);
      var a = !this[n].selector;
      a && (this._private.coreStyle[r.name] = r);
    }
    return this;
  };
  It.append = function(t) {
    return Bd(t) ? t.appendToStyle(this) : Ke(t) ? this.appendFromJson(t) : me(t) && this.appendFromString(t), this;
  };
  xt.fromJson = function(t, e) {
    var r = new xt(t);
    return r.fromJson(e), r;
  };
  xt.fromString = function(t, e) {
    return new xt(t).fromString(e);
  };
  [
    Et,
    $a,
    Ku,
    dr,
    us,
    Yu,
    ct,
    ls
  ].forEach(function(t) {
    Ee(It, t);
  });
  xt.types = It.types;
  xt.properties = It.properties;
  xt.propertyGroups = It.propertyGroups;
  xt.propertyGroupNames = It.propertyGroupNames;
  xt.propertyGroupKeys = It.propertyGroupKeys;
  var wb = {
    style: function(e) {
      if (e) {
        var r = this.setStyle(e);
        r.update();
      }
      return this._private.style;
    },
    setStyle: function(e) {
      var r = this._private;
      return Bd(e) ? r.style = e.generateStyle(this) : Ke(e) ? r.style = xt.fromJson(this, e) : me(e) ? r.style = xt.fromString(this, e) : r.style = xt(this), r.style;
    },
    updateStyle: function() {
      this.mutableElements().updateStyle();
    }
  }, xb = "single", gn = {
    autolock: function(e) {
      if (e !== void 0) this._private.autolock = !!e;
      else return this._private.autolock;
      return this;
    },
    autoungrabify: function(e) {
      if (e !== void 0) this._private.autoungrabify = !!e;
      else return this._private.autoungrabify;
      return this;
    },
    autounselectify: function(e) {
      if (e !== void 0) this._private.autounselectify = !!e;
      else return this._private.autounselectify;
      return this;
    },
    selectionType: function(e) {
      var r = this._private;
      if (r.selectionType == null && (r.selectionType = xb), e !== void 0) (e === "additive" || e === "single") && (r.selectionType = e);
      else return r.selectionType;
      return this;
    },
    panningEnabled: function(e) {
      if (e !== void 0) this._private.panningEnabled = !!e;
      else return this._private.panningEnabled;
      return this;
    },
    userPanningEnabled: function(e) {
      if (e !== void 0) this._private.userPanningEnabled = !!e;
      else return this._private.userPanningEnabled;
      return this;
    },
    zoomingEnabled: function(e) {
      if (e !== void 0) this._private.zoomingEnabled = !!e;
      else return this._private.zoomingEnabled;
      return this;
    },
    userZoomingEnabled: function(e) {
      if (e !== void 0) this._private.userZoomingEnabled = !!e;
      else return this._private.userZoomingEnabled;
      return this;
    },
    boxSelectionEnabled: function(e) {
      if (e !== void 0) this._private.boxSelectionEnabled = !!e;
      else return this._private.boxSelectionEnabled;
      return this;
    },
    pan: function() {
      var e = arguments, r = this._private.pan, n, a, i, s, o;
      switch (e.length) {
        case 0:
          return r;
        case 1:
          if (me(e[0])) return n = e[0], r[n];
          if (ze(e[0])) {
            if (!this._private.panningEnabled) return this;
            i = e[0], s = i.x, o = i.y, ae(s) && (r.x = s), ae(o) && (r.y = o), this.emit("pan viewport");
          }
          break;
        case 2:
          if (!this._private.panningEnabled) return this;
          n = e[0], a = e[1], (n === "x" || n === "y") && ae(a) && (r[n] = a), this.emit("pan viewport");
          break;
      }
      return this.notify("viewport"), this;
    },
    panBy: function(e, r) {
      var n = arguments, a = this._private.pan, i, s, o, u, l;
      if (!this._private.panningEnabled) return this;
      switch (n.length) {
        case 1:
          ze(e) && (o = n[0], u = o.x, l = o.y, ae(u) && (a.x += u), ae(l) && (a.y += l), this.emit("pan viewport"));
          break;
        case 2:
          i = e, s = r, (i === "x" || i === "y") && ae(s) && (a[i] += s), this.emit("pan viewport");
          break;
      }
      return this.notify("viewport"), this;
    },
    gc: function() {
      this.notify("gc");
    },
    fit: function(e, r) {
      var n = this.getFitViewport(e, r);
      if (n) {
        var a = this._private;
        a.zoom = n.zoom, a.pan = n.pan, this.emit("pan zoom viewport"), this.notify("viewport");
      }
      return this;
    },
    getFitViewport: function(e, r) {
      if (ae(e) && r === void 0 && (r = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
        var n;
        if (me(e)) {
          var a = e;
          e = this.$(a);
        } else if (lp(e)) {
          var i = e;
          n = {
            x1: i.x1,
            y1: i.y1,
            x2: i.x2,
            y2: i.y2
          }, n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
        } else Wt(e) || (e = this.mutableElements());
        if (!(Wt(e) && e.empty())) {
          n = n || e.boundingBox();
          var s = this.width(), o = this.height(), u;
          if (r = ae(r) ? r : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(n.w) && !isNaN(n.h) && n.w > 0 && n.h > 0) {
            u = Math.min((s - 2 * r) / n.w, (o - 2 * r) / n.h), u = u > this._private.maxZoom ? this._private.maxZoom : u, u = u < this._private.minZoom ? this._private.minZoom : u;
            var l = {
              x: (s - u * (n.x1 + n.x2)) / 2,
              y: (o - u * (n.y1 + n.y2)) / 2
            };
            return {
              zoom: u,
              pan: l
            };
          }
        }
      }
    },
    zoomRange: function(e, r) {
      var n = this._private;
      if (r == null) {
        var a = e;
        e = a.min, r = a.max;
      }
      return ae(e) && ae(r) && e <= r ? (n.minZoom = e, n.maxZoom = r) : ae(e) && r === void 0 && e <= n.maxZoom ? n.minZoom = e : ae(r) && e === void 0 && r >= n.minZoom && (n.maxZoom = r), this;
    },
    minZoom: function(e) {
      return e === void 0 ? this._private.minZoom : this.zoomRange({
        min: e
      });
    },
    maxZoom: function(e) {
      return e === void 0 ? this._private.maxZoom : this.zoomRange({
        max: e
      });
    },
    getZoomedViewport: function(e) {
      var r = this._private, n = r.pan, a = r.zoom, i, s, o = false;
      if (r.zoomingEnabled || (o = true), ae(e) ? s = e : ze(e) && (s = e.level, e.position != null ? i = Ji(e.position, a, n) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !r.panningEnabled && (o = true)), s = s > r.maxZoom ? r.maxZoom : s, s = s < r.minZoom ? r.minZoom : s, o || !ae(s) || s === a || i != null && (!ae(i.x) || !ae(i.y))) return null;
      if (i != null) {
        var u = n, l = a, c = s, f = {
          x: -c / l * (i.x - u.x) + i.x,
          y: -c / l * (i.y - u.y) + i.y
        };
        return {
          zoomed: true,
          panned: true,
          zoom: c,
          pan: f
        };
      } else return {
        zoomed: true,
        panned: false,
        zoom: s,
        pan: n
      };
    },
    zoom: function(e) {
      if (e === void 0) return this._private.zoom;
      var r = this.getZoomedViewport(e), n = this._private;
      return r == null || !r.zoomed ? this : (n.zoom = r.zoom, r.panned && (n.pan.x = r.pan.x, n.pan.y = r.pan.y), this.emit("zoom" + (r.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
    },
    viewport: function(e) {
      var r = this._private, n = true, a = true, i = [], s = false, o = false;
      if (!e) return this;
      if (ae(e.zoom) || (n = false), ze(e.pan) || (a = false), !n && !a) return this;
      if (n) {
        var u = e.zoom;
        u < r.minZoom || u > r.maxZoom || !r.zoomingEnabled ? s = true : (r.zoom = u, i.push("zoom"));
      }
      if (a && (!s || !e.cancelOnFailedZoom) && r.panningEnabled) {
        var l = e.pan;
        ae(l.x) && (r.pan.x = l.x, o = false), ae(l.y) && (r.pan.y = l.y, o = false), o || i.push("pan");
      }
      return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
    },
    center: function(e) {
      var r = this.getCenterPan(e);
      return r && (this._private.pan = r, this.emit("pan viewport"), this.notify("viewport")), this;
    },
    getCenterPan: function(e, r) {
      if (this._private.panningEnabled) {
        if (me(e)) {
          var n = e;
          e = this.mutableElements().filter(n);
        } else Wt(e) || (e = this.mutableElements());
        if (e.length !== 0) {
          var a = e.boundingBox(), i = this.width(), s = this.height();
          r = r === void 0 ? this._private.zoom : r;
          var o = {
            x: (i - r * (a.x1 + a.x2)) / 2,
            y: (s - r * (a.y1 + a.y2)) / 2
          };
          return o;
        }
      }
    },
    reset: function() {
      return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
        pan: {
          x: 0,
          y: 0
        },
        zoom: 1
      }), this);
    },
    invalidateSize: function() {
      this._private.sizeCache = null;
    },
    size: function() {
      var e = this._private, r = e.container, n = this;
      return e.sizeCache = e.sizeCache || (r ? (function() {
        var a = n.window().getComputedStyle(r), i = function(o) {
          return parseFloat(a.getPropertyValue(o));
        };
        return {
          width: r.clientWidth - i("padding-left") - i("padding-right"),
          height: r.clientHeight - i("padding-top") - i("padding-bottom")
        };
      })() : {
        width: 1,
        height: 1
      });
    },
    width: function() {
      return this.size().width;
    },
    height: function() {
      return this.size().height;
    },
    extent: function() {
      var e = this._private.pan, r = this._private.zoom, n = this.renderedExtent(), a = {
        x1: (n.x1 - e.x) / r,
        x2: (n.x2 - e.x) / r,
        y1: (n.y1 - e.y) / r,
        y2: (n.y2 - e.y) / r
      };
      return a.w = a.x2 - a.x1, a.h = a.y2 - a.y1, a;
    },
    renderedExtent: function() {
      var e = this.width(), r = this.height();
      return {
        x1: 0,
        y1: 0,
        x2: e,
        y2: r,
        w: e,
        h: r
      };
    },
    multiClickDebounceTime: function(e) {
      if (e) this._private.multiClickDebounceTime = e;
      else return this._private.multiClickDebounceTime;
      return this;
    }
  };
  gn.centre = gn.center;
  gn.autolockNodes = gn.autolock;
  gn.autoungrabifyNodes = gn.autoungrabify;
  var Aa = {
    data: Ze.data({
      field: "data",
      bindingEvent: "data",
      allowBinding: true,
      allowSetting: true,
      settingEvent: "data",
      settingTriggersEvent: true,
      triggerFnName: "trigger",
      allowGetting: true,
      updateStyle: true
    }),
    removeData: Ze.removeData({
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: true,
      updateStyle: true
    }),
    scratch: Ze.data({
      field: "scratch",
      bindingEvent: "scratch",
      allowBinding: true,
      allowSetting: true,
      settingEvent: "scratch",
      settingTriggersEvent: true,
      triggerFnName: "trigger",
      allowGetting: true,
      updateStyle: true
    }),
    removeScratch: Ze.removeData({
      field: "scratch",
      event: "scratch",
      triggerFnName: "trigger",
      triggerEvent: true,
      updateStyle: true
    })
  };
  Aa.attr = Aa.data;
  Aa.removeAttr = Aa.removeData;
  var ka = function(e) {
    var r = this;
    e = Ee({}, e);
    var n = e.container;
    n && !_i(n) && _i(n[0]) && (n = n[0]);
    var a = n ? n._cyreg : null;
    a = a || {}, a && a.cy && (a.cy.destroy(), a = {});
    var i = a.readies = a.readies || [];
    n && (n._cyreg = a), a.cy = r;
    var s = gt !== void 0 && n !== void 0 && !e.headless, o = e;
    o.layout = Ee({
      name: s ? "grid" : "null"
    }, o.layout), o.renderer = Ee({
      name: s ? "canvas" : "null"
    }, o.renderer);
    var u = function(h, y, p) {
      return y !== void 0 ? y : p !== void 0 ? p : h;
    }, l = this._private = {
      container: n,
      ready: false,
      options: o,
      elements: new Rt(this),
      listeners: [],
      aniEles: new Rt(this),
      data: o.data || {},
      scratch: {},
      layout: null,
      renderer: null,
      destroyed: false,
      notificationsEnabled: true,
      minZoom: 1e-50,
      maxZoom: 1e50,
      zoomingEnabled: u(true, o.zoomingEnabled),
      userZoomingEnabled: u(true, o.userZoomingEnabled),
      panningEnabled: u(true, o.panningEnabled),
      userPanningEnabled: u(true, o.userPanningEnabled),
      boxSelectionEnabled: u(true, o.boxSelectionEnabled),
      autolock: u(false, o.autolock, o.autolockNodes),
      autoungrabify: u(false, o.autoungrabify, o.autoungrabifyNodes),
      autounselectify: u(false, o.autounselectify),
      styleEnabled: o.styleEnabled === void 0 ? s : o.styleEnabled,
      zoom: ae(o.zoom) ? o.zoom : 1,
      pan: {
        x: ze(o.pan) && ae(o.pan.x) ? o.pan.x : 0,
        y: ze(o.pan) && ae(o.pan.y) ? o.pan.y : 0
      },
      animation: {
        current: [],
        queue: []
      },
      hasCompoundNodes: false,
      multiClickDebounceTime: u(250, o.multiClickDebounceTime)
    };
    this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
      min: o.minZoom,
      max: o.maxZoom
    });
    var c = function(h, y) {
      var p = h.some(cp);
      if (p) return Yn.all(h).then(y);
      y(h);
    };
    l.styleEnabled && r.setStyle([]);
    var f = Ee({}, o, o.renderer);
    r.initRenderer(f);
    var d = function(h, y, p) {
      r.notifications(false);
      var g = r.mutableElements();
      g.length > 0 && g.remove(), h != null && (ze(h) || Ke(h)) && r.add(h), r.one("layoutready", function(m) {
        r.notifications(true), r.emit(m), r.one("load", y), r.emitAndNotify("load");
      }).one("layoutstop", function() {
        r.one("done", p), r.emit("done");
      });
      var b = Ee({}, r._private.options.layout);
      b.eles = r.elements(), r.layout(b).run();
    };
    c([
      o.style,
      o.elements
    ], function(v) {
      var h = v[0], y = v[1];
      l.styleEnabled && r.style().append(h), d(y, function() {
        r.startAnimationLoop(), l.ready = true, at(o.ready) && r.on("ready", o.ready);
        for (var p = 0; p < i.length; p++) {
          var g = i[p];
          r.on("ready", g);
        }
        a && (a.readies = []), r.emit("ready");
      }, o.done);
    });
  }, zi = ka.prototype;
  Ee(zi, {
    instanceString: function() {
      return "core";
    },
    isReady: function() {
      return this._private.ready;
    },
    destroyed: function() {
      return this._private.destroyed;
    },
    ready: function(e) {
      return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
    },
    destroy: function() {
      var e = this;
      if (!e.destroyed()) return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = true, e;
    },
    hasElementWithId: function(e) {
      return this._private.elements.hasElementWithId(e);
    },
    getElementById: function(e) {
      return this._private.elements.getElementById(e);
    },
    hasCompoundNodes: function() {
      return this._private.hasCompoundNodes;
    },
    headless: function() {
      return this._private.renderer.isHeadless();
    },
    styleEnabled: function() {
      return this._private.styleEnabled;
    },
    addToPool: function(e) {
      return this._private.elements.merge(e), this;
    },
    removeFromPool: function(e) {
      return this._private.elements.unmerge(e), this;
    },
    container: function() {
      return this._private.container || null;
    },
    window: function() {
      var e = this._private.container;
      if (e == null) return gt;
      var r = this._private.container.ownerDocument;
      return r === void 0 || r == null ? gt : r.defaultView || gt;
    },
    mount: function(e) {
      if (e != null) {
        var r = this, n = r._private, a = n.options;
        return !_i(e) && _i(e[0]) && (e = e[0]), r.stopAnimationLoop(), r.destroyRenderer(), n.container = e, n.styleEnabled = true, r.invalidateSize(), r.initRenderer(Ee({}, a, a.renderer, {
          name: a.renderer.name === "null" ? "canvas" : a.renderer.name
        })), r.startAnimationLoop(), r.style(a.style), r.emit("mount"), r;
      }
    },
    unmount: function() {
      var e = this;
      return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
        name: "null"
      }), e.emit("unmount"), e;
    },
    options: function() {
      return fr(this._private.options);
    },
    json: function(e) {
      var r = this, n = r._private, a = r.mutableElements(), i = function(x) {
        return r.getElementById(x.id());
      };
      if (ze(e)) {
        if (r.startBatch(), e.elements) {
          var s = {}, o = function(x, E) {
            for (var S = [], w = [], T = 0; T < x.length; T++) {
              var C = x[T];
              if (!C.data.id) {
                Ge("cy.json() cannot handle elements without an ID attribute");
                continue;
              }
              var R = "" + C.data.id, A = r.getElementById(R);
              s[R] = true, A.length !== 0 ? w.push({
                ele: A,
                json: C
              }) : (E && (C.group = E), S.push(C));
            }
            r.add(S);
            for (var P = 0; P < w.length; P++) {
              var k = w[P], I = k.ele, M = k.json;
              I.json(M);
            }
          };
          if (Ke(e.elements)) o(e.elements);
          else for (var u = [
            "nodes",
            "edges"
          ], l = 0; l < u.length; l++) {
            var c = u[l], f = e.elements[c];
            Ke(f) && o(f, c);
          }
          var d = r.collection();
          a.filter(function(m) {
            return !s[m.id()];
          }).forEach(function(m) {
            m.isParent() ? d.merge(m) : m.remove();
          }), d.forEach(function(m) {
            return m.children().move({
              parent: null
            });
          }), d.forEach(function(m) {
            return i(m).remove();
          });
        }
        e.style && r.style(e.style), e.zoom != null && e.zoom !== n.zoom && r.zoom(e.zoom), e.pan && (e.pan.x !== n.pan.x || e.pan.y !== n.pan.y) && r.pan(e.pan), e.data && r.data(e.data);
        for (var v = [
          "minZoom",
          "maxZoom",
          "zoomingEnabled",
          "userZoomingEnabled",
          "panningEnabled",
          "userPanningEnabled",
          "boxSelectionEnabled",
          "autolock",
          "autoungrabify",
          "autounselectify",
          "multiClickDebounceTime"
        ], h = 0; h < v.length; h++) {
          var y = v[h];
          e[y] != null && r[y](e[y]);
        }
        return r.endBatch(), this;
      } else {
        var p = !!e, g = {};
        p ? g.elements = this.elements().map(function(m) {
          return m.json();
        }) : (g.elements = {}, a.forEach(function(m) {
          var x = m.group();
          g.elements[x] || (g.elements[x] = []), g.elements[x].push(m.json());
        })), this._private.styleEnabled && (g.style = r.style().json()), g.data = fr(r.data());
        var b = n.options;
        return g.zoomingEnabled = n.zoomingEnabled, g.userZoomingEnabled = n.userZoomingEnabled, g.zoom = n.zoom, g.minZoom = n.minZoom, g.maxZoom = n.maxZoom, g.panningEnabled = n.panningEnabled, g.userPanningEnabled = n.userPanningEnabled, g.pan = fr(n.pan), g.boxSelectionEnabled = n.boxSelectionEnabled, g.renderer = fr(b.renderer), g.hideEdgesOnViewport = b.hideEdgesOnViewport, g.textureOnViewport = b.textureOnViewport, g.wheelSensitivity = b.wheelSensitivity, g.motionBlur = b.motionBlur, g.multiClickDebounceTime = b.multiClickDebounceTime, g;
      }
    }
  });
  zi.$id = zi.getElementById;
  [
    cb,
    gb,
    Bv,
    hu,
    wi,
    mb,
    gu,
    xi,
    wb,
    gn,
    Aa
  ].forEach(function(t) {
    Ee(zi, t);
  });
  var Eb = {
    fit: true,
    directed: false,
    direction: "downward",
    padding: 30,
    circle: false,
    grid: false,
    spacingFactor: 1.75,
    boundingBox: void 0,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    roots: void 0,
    depthSort: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e, r) {
      return true;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e, r) {
      return r;
    }
  }, Tb = {
    maximal: false,
    acyclic: false
  }, Cn = function(e) {
    return e.scratch("breadthfirst");
  }, xf = function(e, r) {
    return e.scratch("breadthfirst", r);
  };
  function Mv(t) {
    this.options = Ee({}, Eb, Tb, t);
  }
  Mv.prototype.run = function() {
    var t = this.options, e = t.cy, r = t.eles, n = r.nodes().filter(function(we) {
      return we.isChildless();
    }), a = r, i = t.directed, s = t.acyclic || t.maximal || t.maximalAdjustments > 0, o = !!t.boundingBox, u = zt(o ? t.boundingBox : structuredClone(e.extent())), l;
    if (Wt(t.roots)) l = t.roots;
    else if (Ke(t.roots)) {
      for (var c = [], f = 0; f < t.roots.length; f++) {
        var d = t.roots[f], v = e.getElementById(d);
        c.push(v);
      }
      l = e.collection(c);
    } else if (me(t.roots)) l = e.$(t.roots);
    else if (i) l = n.roots();
    else {
      var h = r.components();
      l = e.collection();
      for (var y = function() {
        var se = h[p], ge = se.maxDegree(false), pe = se.filter(function(Ce) {
          return Ce.degree(false) === ge;
        });
        l = l.add(pe);
      }, p = 0; p < h.length; p++) y();
    }
    var g = [], b = {}, m = function(se, ge) {
      g[ge] == null && (g[ge] = []);
      var pe = g[ge].length;
      g[ge].push(se), xf(se, {
        index: pe,
        depth: ge
      });
    }, x = function(se, ge) {
      var pe = Cn(se), Ce = pe.depth, ye = pe.index;
      g[Ce][ye] = null, se.isChildless() && m(se, ge);
    };
    a.bfs({
      roots: l,
      directed: t.directed,
      visit: function(se, ge, pe, Ce, ye) {
        var Pe = se[0], Oe = Pe.id();
        Pe.isChildless() && m(Pe, ye), b[Oe] = true;
      }
    });
    for (var E = [], S = 0; S < n.length; S++) {
      var w = n[S];
      b[w.id()] || E.push(w);
    }
    var T = function(se) {
      for (var ge = g[se], pe = 0; pe < ge.length; pe++) {
        var Ce = ge[pe];
        if (Ce == null) {
          ge.splice(pe, 1), pe--;
          continue;
        }
        xf(Ce, {
          depth: se,
          index: pe
        });
      }
    }, C = function(se, ge) {
      for (var pe = Cn(se), Ce = se.incomers().filter(function(Se) {
        return Se.isNode() && r.has(Se);
      }), ye = -1, Pe = se.id(), Oe = 0; Oe < Ce.length; Oe++) {
        var $e = Ce[Oe], Ue = Cn($e);
        ye = Math.max(ye, Ue.depth);
      }
      if (pe.depth <= ye) {
        if (!t.acyclic && ge[Pe]) return null;
        var qe = ye + 1;
        return x(se, qe), ge[Pe] = qe, true;
      }
      return false;
    };
    if (i && s) {
      var R = [], A = {}, P = function(se) {
        return R.push(se);
      }, k = function() {
        return R.shift();
      };
      for (n.forEach(function(we) {
        return R.push(we);
      }); R.length > 0; ) {
        var I = k(), M = C(I, A);
        if (M) I.outgoers().filter(function(we) {
          return we.isNode() && r.has(we);
        }).forEach(P);
        else if (M === null) {
          Ge("Detected double maximal shift for node `" + I.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
          break;
        }
      }
    }
    var D = 0;
    if (t.avoidOverlap) for (var B = 0; B < n.length; B++) {
      var O = n[B], z = O.layoutDimensions(t), U = z.w, N = z.h;
      D = Math.max(D, U, N);
    }
    var L = {}, H = function(se) {
      if (L[se.id()]) return L[se.id()];
      for (var ge = Cn(se).depth, pe = se.neighborhood(), Ce = 0, ye = 0, Pe = 0; Pe < pe.length; Pe++) {
        var Oe = pe[Pe];
        if (!(Oe.isEdge() || Oe.isParent() || !n.has(Oe))) {
          var $e = Cn(Oe);
          if ($e != null) {
            var Ue = $e.index, qe = $e.depth;
            if (!(Ue == null || qe == null)) {
              var Se = g[qe].length;
              qe < ge && (Ce += Ue / Se, ye++);
            }
          }
        }
      }
      return ye = Math.max(1, ye), Ce = Ce / ye, ye === 0 && (Ce = 0), L[se.id()] = Ce, Ce;
    }, Y = function(se, ge) {
      var pe = H(se), Ce = H(ge), ye = pe - Ce;
      return ye === 0 ? Dd(se.id(), ge.id()) : ye;
    };
    t.depthSort !== void 0 && (Y = t.depthSort);
    for (var K = g.length, Q = 0; Q < K; Q++) g[Q].sort(Y), T(Q);
    for (var re = [], ie = 0; ie < E.length; ie++) re.push(E[ie]);
    var ee = function() {
      for (var se = 0; se < K; se++) T(se);
    };
    re.length && (g.unshift(re), K = g.length, ee());
    for (var F = 0, V = 0; V < K; V++) F = Math.max(g[V].length, F);
    var q = {
      x: u.x1 + u.w / 2,
      y: u.y1 + u.h / 2
    }, X = n.reduce(function(we, se) {
      return (function(ge) {
        return {
          w: we.w === -1 ? ge.w : (we.w + ge.w) / 2,
          h: we.h === -1 ? ge.h : (we.h + ge.h) / 2
        };
      })(se.boundingBox({
        includeLabels: t.nodeDimensionsIncludeLabels
      }));
    }, {
      w: -1,
      h: -1
    }), ne = Math.max(K === 1 ? 0 : o ? (u.h - t.padding * 2 - X.h) / (K - 1) : (u.h - t.padding * 2 - X.h) / (K + 1), D), he = g.reduce(function(we, se) {
      return Math.max(we, se.length);
    }, 0), De = function(se) {
      var ge = Cn(se), pe = ge.depth, Ce = ge.index;
      if (t.circle) {
        var ye = Math.min(u.w / 2 / K, u.h / 2 / K);
        ye = Math.max(ye, D);
        var Pe = ye * pe + ye - (K > 0 && g[0].length <= 3 ? ye / 2 : 0), Oe = 2 * Math.PI / g[pe].length * Ce;
        return pe === 0 && g[0].length === 1 && (Pe = 1), {
          x: q.x + Pe * Math.cos(Oe),
          y: q.y + Pe * Math.sin(Oe)
        };
      } else {
        var $e = g[pe].length, Ue = Math.max($e === 1 ? 0 : o ? (u.w - t.padding * 2 - X.w) / ((t.grid ? he : $e) - 1) : (u.w - t.padding * 2 - X.w) / ((t.grid ? he : $e) + 1), D), qe = {
          x: q.x + (Ce + 1 - ($e + 1) / 2) * Ue,
          y: q.y + (pe + 1 - (K + 1) / 2) * ne
        };
        return qe;
      }
    }, Re = {
      downward: 0,
      leftward: 90,
      upward: 180,
      rightward: -90
    };
    Object.keys(Re).indexOf(t.direction) === -1 && tt("Invalid direction '".concat(t.direction, "' specified for breadthfirst layout. Valid values are: ").concat(Object.keys(Re).join(", ")));
    var Te = function(se) {
      return Fp(De(se), u, Re[t.direction]);
    };
    return r.nodes().layoutPositions(this, t, Te), this;
  };
  var Sb = {
    fit: true,
    padding: 30,
    boundingBox: void 0,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    spacingFactor: void 0,
    radius: void 0,
    startAngle: 3 / 2 * Math.PI,
    sweep: void 0,
    clockwise: true,
    sort: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e, r) {
      return true;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e, r) {
      return r;
    }
  };
  function Dv(t) {
    this.options = Ee({}, Sb, t);
  }
  Dv.prototype.run = function() {
    var t = this.options, e = t, r = t.cy, n = e.eles, a = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = n.nodes().not(":parent");
    e.sort && (i = i.sort(e.sort));
    for (var s = zt(e.boundingBox ? e.boundingBox : {
      x1: 0,
      y1: 0,
      w: r.width(),
      h: r.height()
    }), o = {
      x: s.x1 + s.w / 2,
      y: s.y1 + s.h / 2
    }, u = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, l = u / Math.max(1, i.length - 1), c, f = 0, d = 0; d < i.length; d++) {
      var v = i[d], h = v.layoutDimensions(e), y = h.w, p = h.h;
      f = Math.max(f, y, p);
    }
    if (ae(e.radius) ? c = e.radius : i.length <= 1 ? c = 0 : c = Math.min(s.h, s.w) / 2 - f, i.length > 1 && e.avoidOverlap) {
      f *= 1.75;
      var g = Math.cos(l) - Math.cos(0), b = Math.sin(l) - Math.sin(0), m = Math.sqrt(f * f / (g * g + b * b));
      c = Math.max(m, c);
    }
    var x = function(S, w) {
      var T = e.startAngle + w * l * (a ? 1 : -1), C = c * Math.cos(T), R = c * Math.sin(T), A = {
        x: o.x + C,
        y: o.y + R
      };
      return A;
    };
    return n.nodes().layoutPositions(this, e, x), this;
  };
  var Cb = {
    fit: true,
    padding: 30,
    startAngle: 3 / 2 * Math.PI,
    sweep: void 0,
    clockwise: true,
    equidistant: false,
    minNodeSpacing: 10,
    boundingBox: void 0,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    height: void 0,
    width: void 0,
    spacingFactor: void 0,
    concentric: function(e) {
      return e.degree();
    },
    levelWidth: function(e) {
      return e.maxDegree() / 4;
    },
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e, r) {
      return true;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e, r) {
      return r;
    }
  };
  function Ov(t) {
    this.options = Ee({}, Cb, t);
  }
  Ov.prototype.run = function() {
    for (var t = this.options, e = t, r = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, n = t.cy, a = e.eles, i = a.nodes().not(":parent"), s = zt(e.boundingBox ? e.boundingBox : {
      x1: 0,
      y1: 0,
      w: n.width(),
      h: n.height()
    }), o = {
      x: s.x1 + s.w / 2,
      y: s.y1 + s.h / 2
    }, u = [], l = 0, c = 0; c < i.length; c++) {
      var f = i[c], d = void 0;
      d = e.concentric(f), u.push({
        value: d,
        node: f
      }), f._private.scratch.concentric = d;
    }
    i.updateStyle();
    for (var v = 0; v < i.length; v++) {
      var h = i[v], y = h.layoutDimensions(e);
      l = Math.max(l, y.w, y.h);
    }
    u.sort(function(ne, he) {
      return he.value - ne.value;
    });
    for (var p = e.levelWidth(i), g = [
      []
    ], b = g[0], m = 0; m < u.length; m++) {
      var x = u[m];
      if (b.length > 0) {
        var E = Math.abs(b[0].value - x.value);
        E >= p && (b = [], g.push(b));
      }
      b.push(x);
    }
    var S = l + e.minNodeSpacing;
    if (!e.avoidOverlap) {
      var w = g.length > 0 && g[0].length > 1, T = Math.min(s.w, s.h) / 2 - S, C = T / (g.length + w ? 1 : 0);
      S = Math.min(S, C);
    }
    for (var R = 0, A = 0; A < g.length; A++) {
      var P = g[A], k = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / P.length : e.sweep, I = P.dTheta = k / Math.max(1, P.length - 1);
      if (P.length > 1 && e.avoidOverlap) {
        var M = Math.cos(I) - Math.cos(0), D = Math.sin(I) - Math.sin(0), B = Math.sqrt(S * S / (M * M + D * D));
        R = Math.max(B, R);
      }
      P.r = R, R += S;
    }
    if (e.equidistant) {
      for (var O = 0, z = 0, U = 0; U < g.length; U++) {
        var N = g[U], L = N.r - z;
        O = Math.max(O, L);
      }
      z = 0;
      for (var H = 0; H < g.length; H++) {
        var Y = g[H];
        H === 0 && (z = Y.r), Y.r = z, z += O;
      }
    }
    for (var K = {}, Q = 0; Q < g.length; Q++) for (var re = g[Q], ie = re.dTheta, ee = re.r, F = 0; F < re.length; F++) {
      var V = re[F], q = e.startAngle + (r ? 1 : -1) * ie * F, X = {
        x: o.x + ee * Math.cos(q),
        y: o.y + ee * Math.sin(q)
      };
      K[V.node.id()] = X;
    }
    return a.nodes().layoutPositions(this, e, function(ne) {
      var he = ne.id();
      return K[he];
    }), this;
  };
  var Uo, Rb = {
    ready: function() {
    },
    stop: function() {
    },
    animate: true,
    animationEasing: void 0,
    animationDuration: void 0,
    animateFilter: function(e, r) {
      return true;
    },
    animationThreshold: 250,
    refresh: 20,
    fit: true,
    padding: 30,
    boundingBox: void 0,
    nodeDimensionsIncludeLabels: false,
    randomize: false,
    componentSpacing: 40,
    nodeRepulsion: function(e) {
      return 2048;
    },
    nodeOverlap: 4,
    idealEdgeLength: function(e) {
      return 32;
    },
    edgeElasticity: function(e) {
      return 32;
    },
    nestingFactor: 1.2,
    gravity: 1,
    numIter: 1e3,
    initialTemp: 1e3,
    coolingFactor: 0.99,
    minTemp: 1
  };
  function cs(t) {
    this.options = Ee({}, Rb, t), this.options.layout = this;
    var e = this.options.eles.nodes(), r = this.options.eles.edges(), n = r.filter(function(a) {
      var i = a.source().data("id"), s = a.target().data("id"), o = e.some(function(l) {
        return l.data("id") === i;
      }), u = e.some(function(l) {
        return l.data("id") === s;
      });
      return !o || !u;
    });
    this.options.eles = this.options.eles.not(n);
  }
  cs.prototype.run = function() {
    var t = this.options, e = t.cy, r = this;
    r.stopped = false, (t.animate === true || t.animate === false) && r.emit({
      type: "layoutstart",
      layout: r
    }), t.debug === true ? Uo = true : Uo = false;
    var n = Ab(e, r, t);
    Uo && Pb(n), t.randomize && _b(n);
    var a = xr(), i = function() {
      Ib(n, e, t), t.fit === true && e.fit(t.padding);
    }, s = function(d) {
      return !(r.stopped || d >= t.numIter || (Bb(n, t), n.temperature = n.temperature * t.coolingFactor, n.temperature < t.minTemp));
    }, o = function() {
      if (t.animate === true || t.animate === false) i(), r.one("layoutstop", t.stop), r.emit({
        type: "layoutstop",
        layout: r
      });
      else {
        var d = t.eles.nodes(), v = zv(n, t, d);
        d.layoutPositions(r, t, v);
      }
    }, u = 0, l = true;
    if (t.animate === true) {
      var c = function() {
        for (var d = 0; l && d < t.refresh; ) l = s(u), u++, d++;
        if (!l) Tf(n, t), o();
        else {
          var v = xr();
          v - a >= t.animationThreshold && i(), Ii(c);
        }
      };
      c();
    } else {
      for (; l; ) l = s(u), u++;
      Tf(n, t), o();
    }
    return this;
  };
  cs.prototype.stop = function() {
    return this.stopped = true, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
  };
  cs.prototype.destroy = function() {
    return this.thread && this.thread.stop(), this;
  };
  var Ab = function(e, r, n) {
    for (var a = n.eles.edges(), i = n.eles.nodes(), s = zt(n.boundingBox ? n.boundingBox : {
      x1: 0,
      y1: 0,
      w: e.width(),
      h: e.height()
    }), o = {
      isCompound: e.hasCompoundNodes(),
      layoutNodes: [],
      idToIndex: {},
      nodeSize: i.size(),
      graphSet: [],
      indexToGraph: [],
      layoutEdges: [],
      edgeSize: a.size(),
      temperature: n.initialTemp,
      clientWidth: s.w,
      clientHeight: s.h,
      boundingBox: s
    }, u = n.eles.components(), l = {}, c = 0; c < u.length; c++) for (var f = u[c], d = 0; d < f.length; d++) {
      var v = f[d];
      l[v.id()] = c;
    }
    for (var c = 0; c < o.nodeSize; c++) {
      var h = i[c], y = h.layoutDimensions(n), p = {};
      p.isLocked = h.locked(), p.id = h.data("id"), p.parentId = h.data("parent"), p.cmptId = l[h.id()], p.children = [], p.positionX = h.position("x"), p.positionY = h.position("y"), p.offsetX = 0, p.offsetY = 0, p.height = y.w, p.width = y.h, p.maxX = p.positionX + p.width / 2, p.minX = p.positionX - p.width / 2, p.maxY = p.positionY + p.height / 2, p.minY = p.positionY - p.height / 2, p.padLeft = parseFloat(h.style("padding")), p.padRight = parseFloat(h.style("padding")), p.padTop = parseFloat(h.style("padding")), p.padBottom = parseFloat(h.style("padding")), p.nodeRepulsion = at(n.nodeRepulsion) ? n.nodeRepulsion(h) : n.nodeRepulsion, o.layoutNodes.push(p), o.idToIndex[p.id] = c;
    }
    for (var g = [], b = 0, m = -1, x = [], c = 0; c < o.nodeSize; c++) {
      var h = o.layoutNodes[c], E = h.parentId;
      E != null ? o.layoutNodes[o.idToIndex[E]].children.push(h.id) : (g[++m] = h.id, x.push(h.id));
    }
    for (o.graphSet.push(x); b <= m; ) {
      var S = g[b++], w = o.idToIndex[S], v = o.layoutNodes[w], T = v.children;
      if (T.length > 0) {
        o.graphSet.push(T);
        for (var c = 0; c < T.length; c++) g[++m] = T[c];
      }
    }
    for (var c = 0; c < o.graphSet.length; c++) for (var C = o.graphSet[c], d = 0; d < C.length; d++) {
      var R = o.idToIndex[C[d]];
      o.indexToGraph[R] = c;
    }
    for (var c = 0; c < o.edgeSize; c++) {
      var A = a[c], P = {};
      P.id = A.data("id"), P.sourceId = A.data("source"), P.targetId = A.data("target");
      var k = at(n.idealEdgeLength) ? n.idealEdgeLength(A) : n.idealEdgeLength, I = at(n.edgeElasticity) ? n.edgeElasticity(A) : n.edgeElasticity, M = o.idToIndex[P.sourceId], D = o.idToIndex[P.targetId], B = o.indexToGraph[M], O = o.indexToGraph[D];
      if (B != O) {
        for (var z = kb(P.sourceId, P.targetId, o), U = o.graphSet[z], N = 0, p = o.layoutNodes[M]; U.indexOf(p.id) === -1; ) p = o.layoutNodes[o.idToIndex[p.parentId]], N++;
        for (p = o.layoutNodes[D]; U.indexOf(p.id) === -1; ) p = o.layoutNodes[o.idToIndex[p.parentId]], N++;
        k *= N * n.nestingFactor;
      }
      P.idealLength = k, P.elasticity = I, o.layoutEdges.push(P);
    }
    return o;
  }, kb = function(e, r, n) {
    var a = Nv(e, r, 0, n);
    return 2 > a.count ? 0 : a.graph;
  }, Nv = function(e, r, n, a) {
    var i = a.graphSet[n];
    if (-1 < i.indexOf(e) && -1 < i.indexOf(r)) return {
      count: 2,
      graph: n
    };
    for (var s = 0, o = 0; o < i.length; o++) {
      var u = i[o], l = a.idToIndex[u], c = a.layoutNodes[l].children;
      if (c.length !== 0) {
        var f = a.indexToGraph[a.idToIndex[c[0]]], d = Nv(e, r, f, a);
        if (d.count !== 0) if (d.count === 1) {
          if (s++, s === 2) break;
        } else return d;
      }
    }
    return {
      count: s,
      graph: n
    };
  }, Pb, _b = function(e, r) {
    for (var n = e.clientWidth, a = e.clientHeight, i = 0; i < e.nodeSize; i++) {
      var s = e.layoutNodes[i];
      s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * n, s.positionY = Math.random() * a);
    }
  }, zv = function(e, r, n) {
    var a = e.boundingBox, i = {
      x1: 1 / 0,
      x2: -1 / 0,
      y1: 1 / 0,
      y2: -1 / 0
    };
    return r.boundingBox && (n.forEach(function(s) {
      var o = e.layoutNodes[e.idToIndex[s.data("id")]];
      i.x1 = Math.min(i.x1, o.positionX), i.x2 = Math.max(i.x2, o.positionX), i.y1 = Math.min(i.y1, o.positionY), i.y2 = Math.max(i.y2, o.positionY);
    }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
      var u = e.layoutNodes[e.idToIndex[s.data("id")]];
      if (r.boundingBox) {
        var l = i.w === 0 ? 0.5 : (u.positionX - i.x1) / i.w, c = i.h === 0 ? 0.5 : (u.positionY - i.y1) / i.h;
        return {
          x: a.x1 + l * a.w,
          y: a.y1 + c * a.h
        };
      } else return {
        x: u.positionX,
        y: u.positionY
      };
    };
  }, Ib = function(e, r, n) {
    var a = n.layout, i = n.eles.nodes(), s = zv(e, n, i);
    i.positions(s), e.ready !== true && (e.ready = true, a.one("layoutready", n.ready), a.emit({
      type: "layoutready",
      layout: this
    }));
  }, Bb = function(e, r, n) {
    Mb(e, r), Nb(e), zb(e, r), Lb(e), Fb(e);
  }, Mb = function(e, r) {
    for (var n = 0; n < e.graphSet.length; n++) for (var a = e.graphSet[n], i = a.length, s = 0; s < i; s++) for (var o = e.layoutNodes[e.idToIndex[a[s]]], u = s + 1; u < i; u++) {
      var l = e.layoutNodes[e.idToIndex[a[u]]];
      Db(o, l, e, r);
    }
  }, Ef = function(e) {
    return -1 + 2 * e * Math.random();
  }, Db = function(e, r, n, a) {
    var i = e.cmptId, s = r.cmptId;
    if (!(i !== s && !n.isCompound)) {
      var o = r.positionX - e.positionX, u = r.positionY - e.positionY, l = 1;
      o === 0 && u === 0 && (o = Ef(l), u = Ef(l));
      var c = Ob(e, r, o, u);
      if (c > 0) var f = a.nodeOverlap * c, d = Math.sqrt(o * o + u * u), v = f * o / d, h = f * u / d;
      else var y = Li(e, o, u), p = Li(r, -1 * o, -1 * u), g = p.x - y.x, b = p.y - y.y, m = g * g + b * b, d = Math.sqrt(m), f = (e.nodeRepulsion + r.nodeRepulsion) / m, v = f * g / d, h = f * b / d;
      e.isLocked || (e.offsetX -= v, e.offsetY -= h), r.isLocked || (r.offsetX += v, r.offsetY += h);
    }
  }, Ob = function(e, r, n, a) {
    if (n > 0) var i = e.maxX - r.minX;
    else var i = r.maxX - e.minX;
    if (a > 0) var s = e.maxY - r.minY;
    else var s = r.maxY - e.minY;
    return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
  }, Li = function(e, r, n) {
    var a = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, u = n / r, l = s / o, c = {};
    return r === 0 && 0 < n || r === 0 && 0 > n ? (c.x = a, c.y = i + s / 2, c) : 0 < r && -1 * l <= u && u <= l ? (c.x = a + o / 2, c.y = i + o * n / 2 / r, c) : 0 > r && -1 * l <= u && u <= l ? (c.x = a - o / 2, c.y = i - o * n / 2 / r, c) : 0 < n && (u <= -1 * l || u >= l) ? (c.x = a + s * r / 2 / n, c.y = i + s / 2, c) : (0 > n && (u <= -1 * l || u >= l) && (c.x = a - s * r / 2 / n, c.y = i - s / 2), c);
  }, Nb = function(e, r) {
    for (var n = 0; n < e.edgeSize; n++) {
      var a = e.layoutEdges[n], i = e.idToIndex[a.sourceId], s = e.layoutNodes[i], o = e.idToIndex[a.targetId], u = e.layoutNodes[o], l = u.positionX - s.positionX, c = u.positionY - s.positionY;
      if (!(l === 0 && c === 0)) {
        var f = Li(s, l, c), d = Li(u, -1 * l, -1 * c), v = d.x - f.x, h = d.y - f.y, y = Math.sqrt(v * v + h * h), p = Math.pow(a.idealLength - y, 2) / a.elasticity;
        if (y !== 0) var g = p * v / y, b = p * h / y;
        else var g = 0, b = 0;
        s.isLocked || (s.offsetX += g, s.offsetY += b), u.isLocked || (u.offsetX -= g, u.offsetY -= b);
      }
    }
  }, zb = function(e, r) {
    if (r.gravity !== 0) for (var n = 1, a = 0; a < e.graphSet.length; a++) {
      var i = e.graphSet[a], s = i.length;
      if (a === 0) var o = e.clientHeight / 2, u = e.clientWidth / 2;
      else var l = e.layoutNodes[e.idToIndex[i[0]]], c = e.layoutNodes[e.idToIndex[l.parentId]], o = c.positionX, u = c.positionY;
      for (var f = 0; f < s; f++) {
        var d = e.layoutNodes[e.idToIndex[i[f]]];
        if (!d.isLocked) {
          var v = o - d.positionX, h = u - d.positionY, y = Math.sqrt(v * v + h * h);
          if (y > n) {
            var p = r.gravity * v / y, g = r.gravity * h / y;
            d.offsetX += p, d.offsetY += g;
          }
        }
      }
    }
  }, Lb = function(e, r) {
    var n = [], a = 0, i = -1;
    for (n.push.apply(n, e.graphSet[0]), i += e.graphSet[0].length; a <= i; ) {
      var s = n[a++], o = e.idToIndex[s], u = e.layoutNodes[o], l = u.children;
      if (0 < l.length && !u.isLocked) {
        for (var c = u.offsetX, f = u.offsetY, d = 0; d < l.length; d++) {
          var v = e.layoutNodes[e.idToIndex[l[d]]];
          v.offsetX += c, v.offsetY += f, n[++i] = l[d];
        }
        u.offsetX = 0, u.offsetY = 0;
      }
    }
  }, Fb = function(e, r) {
    for (var n = 0; n < e.nodeSize; n++) {
      var a = e.layoutNodes[n];
      0 < a.children.length && (a.maxX = void 0, a.minX = void 0, a.maxY = void 0, a.minY = void 0);
    }
    for (var n = 0; n < e.nodeSize; n++) {
      var a = e.layoutNodes[n];
      if (!(0 < a.children.length || a.isLocked)) {
        var i = Vb(a.offsetX, a.offsetY, e.temperature);
        a.positionX += i.x, a.positionY += i.y, a.offsetX = 0, a.offsetY = 0, a.minX = a.positionX - a.width, a.maxX = a.positionX + a.width, a.minY = a.positionY - a.height, a.maxY = a.positionY + a.height, Lv(a, e);
      }
    }
    for (var n = 0; n < e.nodeSize; n++) {
      var a = e.layoutNodes[n];
      0 < a.children.length && !a.isLocked && (a.positionX = (a.maxX + a.minX) / 2, a.positionY = (a.maxY + a.minY) / 2, a.width = a.maxX - a.minX, a.height = a.maxY - a.minY);
    }
  }, Vb = function(e, r, n) {
    var a = Math.sqrt(e * e + r * r);
    if (a > n) var i = {
      x: n * e / a,
      y: n * r / a
    };
    else var i = {
      x: e,
      y: r
    };
    return i;
  }, Lv = function(e, r) {
    var n = e.parentId;
    if (n != null) {
      var a = r.layoutNodes[r.idToIndex[n]], i = false;
      if ((a.maxX == null || e.maxX + a.padRight > a.maxX) && (a.maxX = e.maxX + a.padRight, i = true), (a.minX == null || e.minX - a.padLeft < a.minX) && (a.minX = e.minX - a.padLeft, i = true), (a.maxY == null || e.maxY + a.padBottom > a.maxY) && (a.maxY = e.maxY + a.padBottom, i = true), (a.minY == null || e.minY - a.padTop < a.minY) && (a.minY = e.minY - a.padTop, i = true), i) return Lv(a, r);
    }
  }, Tf = function(e, r) {
    for (var n = e.layoutNodes, a = [], i = 0; i < n.length; i++) {
      var s = n[i], o = s.cmptId, u = a[o] = a[o] || [];
      u.push(s);
    }
    for (var l = 0, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c) {
        c.x1 = 1 / 0, c.x2 = -1 / 0, c.y1 = 1 / 0, c.y2 = -1 / 0;
        for (var f = 0; f < c.length; f++) {
          var d = c[f];
          c.x1 = Math.min(c.x1, d.positionX - d.width / 2), c.x2 = Math.max(c.x2, d.positionX + d.width / 2), c.y1 = Math.min(c.y1, d.positionY - d.height / 2), c.y2 = Math.max(c.y2, d.positionY + d.height / 2);
        }
        c.w = c.x2 - c.x1, c.h = c.y2 - c.y1, l += c.w * c.h;
      }
    }
    a.sort(function(b, m) {
      return m.w * m.h - b.w * b.h;
    });
    for (var v = 0, h = 0, y = 0, p = 0, g = Math.sqrt(l) * e.clientWidth / e.clientHeight, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c) {
        for (var f = 0; f < c.length; f++) {
          var d = c[f];
          d.isLocked || (d.positionX += v - c.x1, d.positionY += h - c.y1);
        }
        v += c.w + r.componentSpacing, y += c.w + r.componentSpacing, p = Math.max(p, c.h), y > g && (h += p + r.componentSpacing, v = 0, y = 0, p = 0);
      }
    }
  }, $b = {
    fit: true,
    padding: 30,
    boundingBox: void 0,
    avoidOverlap: true,
    avoidOverlapPadding: 10,
    nodeDimensionsIncludeLabels: false,
    spacingFactor: void 0,
    condense: false,
    rows: void 0,
    cols: void 0,
    position: function(e) {
    },
    sort: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e, r) {
      return true;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e, r) {
      return r;
    }
  };
  function Fv(t) {
    this.options = Ee({}, $b, t);
  }
  Fv.prototype.run = function() {
    var t = this.options, e = t, r = t.cy, n = e.eles, a = n.nodes().not(":parent");
    e.sort && (a = a.sort(e.sort));
    var i = zt(e.boundingBox ? e.boundingBox : {
      x1: 0,
      y1: 0,
      w: r.width(),
      h: r.height()
    });
    if (i.h === 0 || i.w === 0) n.nodes().layoutPositions(this, e, function(H) {
      return {
        x: i.x1,
        y: i.y1
      };
    });
    else {
      var s = a.size(), o = Math.sqrt(s * i.h / i.w), u = Math.round(o), l = Math.round(i.w / i.h * o), c = function(Y) {
        if (Y == null) return Math.min(u, l);
        var K = Math.min(u, l);
        K == u ? u = Y : l = Y;
      }, f = function(Y) {
        if (Y == null) return Math.max(u, l);
        var K = Math.max(u, l);
        K == u ? u = Y : l = Y;
      }, d = e.rows, v = e.cols != null ? e.cols : e.columns;
      if (d != null && v != null) u = d, l = v;
      else if (d != null && v == null) u = d, l = Math.ceil(s / u);
      else if (d == null && v != null) l = v, u = Math.ceil(s / l);
      else if (l * u > s) {
        var h = c(), y = f();
        (h - 1) * y >= s ? c(h - 1) : (y - 1) * h >= s && f(y - 1);
      } else for (; l * u < s; ) {
        var p = c(), g = f();
        (g + 1) * p >= s ? f(g + 1) : c(p + 1);
      }
      var b = i.w / l, m = i.h / u;
      if (e.condense && (b = 0, m = 0), e.avoidOverlap) for (var x = 0; x < a.length; x++) {
        var E = a[x], S = E._private.position;
        (S.x == null || S.y == null) && (S.x = 0, S.y = 0);
        var w = E.layoutDimensions(e), T = e.avoidOverlapPadding, C = w.w + T, R = w.h + T;
        b = Math.max(b, C), m = Math.max(m, R);
      }
      for (var A = {}, P = function(Y, K) {
        return !!A["c-" + Y + "-" + K];
      }, k = function(Y, K) {
        A["c-" + Y + "-" + K] = true;
      }, I = 0, M = 0, D = function() {
        M++, M >= l && (M = 0, I++);
      }, B = {}, O = 0; O < a.length; O++) {
        var z = a[O], U = e.position(z);
        if (U && (U.row !== void 0 || U.col !== void 0)) {
          var N = {
            row: U.row,
            col: U.col
          };
          if (N.col === void 0) for (N.col = 0; P(N.row, N.col); ) N.col++;
          else if (N.row === void 0) for (N.row = 0; P(N.row, N.col); ) N.row++;
          B[z.id()] = N, k(N.row, N.col);
        }
      }
      var L = function(Y, K) {
        var Q, re;
        if (Y.locked() || Y.isParent()) return false;
        var ie = B[Y.id()];
        if (ie) Q = ie.col * b + b / 2 + i.x1, re = ie.row * m + m / 2 + i.y1;
        else {
          for (; P(I, M); ) D();
          Q = M * b + b / 2 + i.x1, re = I * m + m / 2 + i.y1, k(I, M), D();
        }
        return {
          x: Q,
          y: re
        };
      };
      a.layoutPositions(this, e, L);
    }
    return this;
  };
  var Ub = {
    ready: function() {
    },
    stop: function() {
    }
  };
  function ju(t) {
    this.options = Ee({}, Ub, t);
  }
  ju.prototype.run = function() {
    var t = this.options, e = t.eles, r = this;
    return t.cy, r.emit("layoutstart"), e.nodes().positions(function() {
      return {
        x: 0,
        y: 0
      };
    }), r.one("layoutready", t.ready), r.emit("layoutready"), r.one("layoutstop", t.stop), r.emit("layoutstop"), this;
  };
  ju.prototype.stop = function() {
    return this;
  };
  var qb = {
    positions: void 0,
    zoom: void 0,
    pan: void 0,
    fit: true,
    padding: 30,
    spacingFactor: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e, r) {
      return true;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e, r) {
      return r;
    }
  };
  function Vv(t) {
    this.options = Ee({}, qb, t);
  }
  Vv.prototype.run = function() {
    var t = this.options, e = t.eles, r = e.nodes(), n = at(t.positions);
    function a(i) {
      if (t.positions == null) return fm(i.position());
      if (n) return t.positions(i);
      var s = t.positions[i._private.data.id];
      return s ?? null;
    }
    return r.layoutPositions(this, t, function(i, s) {
      var o = a(i);
      return i.locked() || o == null ? false : o;
    }), this;
  };
  var Zb = {
    fit: true,
    padding: 30,
    boundingBox: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e, r) {
      return true;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e, r) {
      return r;
    }
  };
  function $v(t) {
    this.options = Ee({}, Zb, t);
  }
  $v.prototype.run = function() {
    var t = this.options, e = t.cy, r = t.eles, n = zt(t.boundingBox ? t.boundingBox : {
      x1: 0,
      y1: 0,
      w: e.width(),
      h: e.height()
    }), a = function(s, o) {
      return {
        x: n.x1 + Math.round(Math.random() * n.w),
        y: n.y1 + Math.round(Math.random() * n.h)
      };
    };
    return r.nodes().layoutPositions(this, t, a), this;
  };
  var Gb = [
    {
      name: "breadthfirst",
      impl: Mv
    },
    {
      name: "circle",
      impl: Dv
    },
    {
      name: "concentric",
      impl: Ov
    },
    {
      name: "cose",
      impl: cs
    },
    {
      name: "grid",
      impl: Fv
    },
    {
      name: "null",
      impl: ju
    },
    {
      name: "preset",
      impl: Vv
    },
    {
      name: "random",
      impl: $v
    }
  ];
  function Uv(t) {
    this.options = t, this.notifications = 0;
  }
  var Sf = function() {
  }, Cf = function() {
    throw new Error("A headless instance can not render images");
  };
  Uv.prototype = {
    recalculateRenderedStyle: Sf,
    notify: function() {
      this.notifications++;
    },
    init: Sf,
    isHeadless: function() {
      return true;
    },
    png: Cf,
    jpg: Cf
  };
  var Xu = {};
  Xu.arrowShapeWidth = 0.3;
  Xu.registerArrowShapes = function() {
    var t = this.arrowShapes = {}, e = this, r = function(l, c, f, d, v, h, y) {
      var p = v.x - f / 2 - y, g = v.x + f / 2 + y, b = v.y - f / 2 - y, m = v.y + f / 2 + y, x = p <= l && l <= g && b <= c && c <= m;
      return x;
    }, n = function(l, c, f, d, v) {
      var h = l * Math.cos(d) - c * Math.sin(d), y = l * Math.sin(d) + c * Math.cos(d), p = h * f, g = y * f, b = p + v.x, m = g + v.y;
      return {
        x: b,
        y: m
      };
    }, a = function(l, c, f, d) {
      for (var v = [], h = 0; h < l.length; h += 2) {
        var y = l[h], p = l[h + 1];
        v.push(n(y, p, c, f, d));
      }
      return v;
    }, i = function(l) {
      for (var c = [], f = 0; f < l.length; f++) {
        var d = l[f];
        c.push(d.x, d.y);
      }
      return c;
    }, s = function(l) {
      return l.pstyle("width").pfValue * l.pstyle("arrow-scale").pfValue * 2;
    }, o = function(l, c) {
      me(c) && (c = t[c]), t[l] = Ee({
        name: l,
        points: [
          -0.15,
          -0.3,
          0.15,
          -0.3,
          0.15,
          0.3,
          -0.15,
          0.3
        ],
        collide: function(d, v, h, y, p, g) {
          var b = i(a(this.points, h + 2 * g, y, p)), m = qt(d, v, b);
          return m;
        },
        roughCollide: r,
        draw: function(d, v, h, y) {
          var p = a(this.points, v, h, y);
          e.arrowShapeImpl("polygon")(d, p);
        },
        spacing: function(d) {
          return 0;
        },
        gap: s
      }, c);
    };
    o("none", {
      collide: Bi,
      roughCollide: Bi,
      draw: Nu,
      spacing: Ll,
      gap: Ll
    }), o("triangle", {
      points: [
        -0.15,
        -0.3,
        0,
        0,
        0.15,
        -0.3
      ]
    }), o("arrow", "triangle"), o("triangle-backcurve", {
      points: t.triangle.points,
      controlPoint: [
        0,
        -0.15
      ],
      roughCollide: r,
      draw: function(l, c, f, d, v) {
        var h = a(this.points, c, f, d), y = this.controlPoint, p = n(y[0], y[1], c, f, d);
        e.arrowShapeImpl(this.name)(l, h, p);
      },
      gap: function(l) {
        return s(l) * 0.8;
      }
    }), o("triangle-tee", {
      points: [
        0,
        0,
        0.15,
        -0.3,
        -0.15,
        -0.3,
        0,
        0
      ],
      pointsTee: [
        -0.15,
        -0.4,
        -0.15,
        -0.5,
        0.15,
        -0.5,
        0.15,
        -0.4
      ],
      collide: function(l, c, f, d, v, h, y) {
        var p = i(a(this.points, f + 2 * y, d, v)), g = i(a(this.pointsTee, f + 2 * y, d, v)), b = qt(l, c, p) || qt(l, c, g);
        return b;
      },
      draw: function(l, c, f, d, v) {
        var h = a(this.points, c, f, d), y = a(this.pointsTee, c, f, d);
        e.arrowShapeImpl(this.name)(l, h, y);
      }
    }), o("circle-triangle", {
      radius: 0.15,
      pointsTr: [
        0,
        -0.15,
        0.15,
        -0.45,
        -0.15,
        -0.45,
        0,
        -0.15
      ],
      collide: function(l, c, f, d, v, h, y) {
        var p = v, g = Math.pow(p.x - l, 2) + Math.pow(p.y - c, 2) <= Math.pow((f + 2 * y) * this.radius, 2), b = i(a(this.points, f + 2 * y, d, v));
        return qt(l, c, b) || g;
      },
      draw: function(l, c, f, d, v) {
        var h = a(this.pointsTr, c, f, d);
        e.arrowShapeImpl(this.name)(l, h, d.x, d.y, this.radius * c);
      },
      spacing: function(l) {
        return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
      }
    }), o("triangle-cross", {
      points: [
        0,
        0,
        0.15,
        -0.3,
        -0.15,
        -0.3,
        0,
        0
      ],
      baseCrossLinePts: [
        -0.15,
        -0.4,
        -0.15,
        -0.4,
        0.15,
        -0.4,
        0.15,
        -0.4
      ],
      crossLinePts: function(l, c) {
        var f = this.baseCrossLinePts.slice(), d = c / l, v = 3, h = 5;
        return f[v] = f[v] - d, f[h] = f[h] - d, f;
      },
      collide: function(l, c, f, d, v, h, y) {
        var p = i(a(this.points, f + 2 * y, d, v)), g = i(a(this.crossLinePts(f, h), f + 2 * y, d, v)), b = qt(l, c, p) || qt(l, c, g);
        return b;
      },
      draw: function(l, c, f, d, v) {
        var h = a(this.points, c, f, d), y = a(this.crossLinePts(c, v), c, f, d);
        e.arrowShapeImpl(this.name)(l, h, y);
      }
    }), o("vee", {
      points: [
        -0.15,
        -0.3,
        0,
        0,
        0.15,
        -0.3,
        0,
        -0.15
      ],
      gap: function(l) {
        return s(l) * 0.525;
      }
    }), o("circle", {
      radius: 0.15,
      collide: function(l, c, f, d, v, h, y) {
        var p = v, g = Math.pow(p.x - l, 2) + Math.pow(p.y - c, 2) <= Math.pow((f + 2 * y) * this.radius, 2);
        return g;
      },
      draw: function(l, c, f, d, v) {
        e.arrowShapeImpl(this.name)(l, d.x, d.y, this.radius * c);
      },
      spacing: function(l) {
        return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
      }
    }), o("tee", {
      points: [
        -0.15,
        0,
        -0.15,
        -0.1,
        0.15,
        -0.1,
        0.15,
        0
      ],
      spacing: function(l) {
        return 1;
      },
      gap: function(l) {
        return 1;
      }
    }), o("square", {
      points: [
        -0.15,
        0,
        0.15,
        0,
        0.15,
        -0.3,
        -0.15,
        -0.3
      ]
    }), o("diamond", {
      points: [
        -0.15,
        -0.15,
        0,
        -0.3,
        0.15,
        -0.15,
        0,
        0
      ],
      gap: function(l) {
        return l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
      }
    }), o("chevron", {
      points: [
        0,
        0,
        -0.15,
        -0.15,
        -0.1,
        -0.2,
        0,
        -0.1,
        0.1,
        -0.2,
        0.15,
        -0.15
      ],
      gap: function(l) {
        return 0.95 * l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
      }
    });
  };
  var yn = {};
  yn.projectIntoViewport = function(t, e) {
    var r = this.cy, n = this.findContainerClientCoords(), a = n[0], i = n[1], s = n[4], o = r.pan(), u = r.zoom(), l = ((t - a) / s - o.x) / u, c = ((e - i) / s - o.y) / u;
    return [
      l,
      c
    ];
  };
  yn.findContainerClientCoords = function() {
    if (this.containerBB) return this.containerBB;
    var t = this.container, e = t.getBoundingClientRect(), r = this.cy.window().getComputedStyle(t), n = function(g) {
      return parseFloat(r.getPropertyValue(g));
    }, a = {
      left: n("padding-left"),
      right: n("padding-right"),
      top: n("padding-top"),
      bottom: n("padding-bottom")
    }, i = {
      left: n("border-left-width"),
      right: n("border-right-width"),
      top: n("border-top-width"),
      bottom: n("border-bottom-width")
    }, s = t.clientWidth, o = t.clientHeight, u = a.left + a.right, l = a.top + a.bottom, c = i.left + i.right, f = e.width / (s + c), d = s - u, v = o - l, h = e.left + a.left + i.left, y = e.top + a.top + i.top;
    return this.containerBB = [
      h,
      y,
      d,
      v,
      f
    ];
  };
  yn.invalidateContainerClientCoordsCache = function() {
    this.containerBB = null;
  };
  yn.findNearestElement = function(t, e, r, n) {
    return this.findNearestElements(t, e, r, n)[0];
  };
  yn.findNearestElements = function(t, e, r, n) {
    var a = this, i = this, s = i.getCachedZSortedEles(), o = [], u = i.cy.zoom(), l = i.cy.hasCompoundNodes(), c = (n ? 24 : 8) / u, f = (n ? 8 : 2) / u, d = (n ? 8 : 2) / u, v = 1 / 0, h, y;
    r && (s = s.interactive);
    function p(w, T) {
      if (w.isNode()) {
        if (y) return;
        y = w, o.push(w);
      }
      if (w.isEdge() && (T == null || T < v)) if (h) {
        if (h.pstyle("z-compound-depth").value === w.pstyle("z-compound-depth").value && h.pstyle("z-compound-depth").value === w.pstyle("z-compound-depth").value) {
          for (var C = 0; C < o.length; C++) if (o[C].isEdge()) {
            o[C] = w, h = w, v = T ?? v;
            break;
          }
        }
      } else o.push(w), h = w, v = T ?? v;
    }
    function g(w) {
      var T = w.outerWidth() + 2 * f, C = w.outerHeight() + 2 * f, R = T / 2, A = C / 2, P = w.position(), k = w.pstyle("corner-radius").value === "auto" ? "auto" : w.pstyle("corner-radius").pfValue, I = w._private.rscratch;
      if (P.x - R <= t && t <= P.x + R && P.y - A <= e && e <= P.y + A) {
        var M = i.nodeShapes[a.getNodeShape(w)];
        if (M.checkPoint(t, e, 0, T, C, P.x, P.y, k, I)) return p(w, 0), true;
      }
    }
    function b(w) {
      var T = w._private, C = T.rscratch, R = w.pstyle("width").pfValue, A = w.pstyle("arrow-scale").value, P = R / 2 + c, k = P * P, I = P * 2, O = T.source, z = T.target, M;
      if (C.edgeType === "segments" || C.edgeType === "straight" || C.edgeType === "haystack") {
        for (var D = C.allpts, B = 0; B + 3 < D.length; B += 2) if (Cm(t, e, D[B], D[B + 1], D[B + 2], D[B + 3], I) && k > (M = _m(t, e, D[B], D[B + 1], D[B + 2], D[B + 3]))) return p(w, M), true;
      } else if (C.edgeType === "bezier" || C.edgeType === "multibezier" || C.edgeType === "self" || C.edgeType === "compound") {
        for (var D = C.allpts, B = 0; B + 5 < C.allpts.length; B += 4) if (Rm(t, e, D[B], D[B + 1], D[B + 2], D[B + 3], D[B + 4], D[B + 5], I) && k > (M = Pm(t, e, D[B], D[B + 1], D[B + 2], D[B + 3], D[B + 4], D[B + 5]))) return p(w, M), true;
      }
      for (var O = O || T.source, z = z || T.target, U = a.getArrowWidth(R, A), N = [
        {
          name: "source",
          x: C.arrowStartX,
          y: C.arrowStartY,
          angle: C.srcArrowAngle
        },
        {
          name: "target",
          x: C.arrowEndX,
          y: C.arrowEndY,
          angle: C.tgtArrowAngle
        },
        {
          name: "mid-source",
          x: C.midX,
          y: C.midY,
          angle: C.midsrcArrowAngle
        },
        {
          name: "mid-target",
          x: C.midX,
          y: C.midY,
          angle: C.midtgtArrowAngle
        }
      ], B = 0; B < N.length; B++) {
        var L = N[B], H = i.arrowShapes[w.pstyle(L.name + "-arrow-shape").value], Y = w.pstyle("width").pfValue;
        if (H.roughCollide(t, e, U, L.angle, {
          x: L.x,
          y: L.y
        }, Y, c) && H.collide(t, e, U, L.angle, {
          x: L.x,
          y: L.y
        }, Y, c)) return p(w), true;
      }
      l && o.length > 0 && (g(O), g(z));
    }
    function m(w, T, C) {
      return Ut(w, T, C);
    }
    function x(w, T) {
      var C = w._private, R = d, A;
      T ? A = T + "-" : A = "", w.boundingBox();
      var P = C.labelBounds[T || "main"], k = w.pstyle(A + "label").value, I = w.pstyle("text-events").strValue === "yes";
      if (!(!I || !k)) {
        var M = m(C.rscratch, "labelX", T), D = m(C.rscratch, "labelY", T), B = m(C.rscratch, "labelAngle", T), O = w.pstyle(A + "text-margin-x").pfValue, z = w.pstyle(A + "text-margin-y").pfValue, U = P.x1 - R - O, N = P.x2 + R - O, L = P.y1 - R - z, H = P.y2 + R - z;
        if (B) {
          var Y = Math.cos(B), K = Math.sin(B), Q = function(X, ne) {
            return X = X - M, ne = ne - D, {
              x: X * Y - ne * K + M,
              y: X * K + ne * Y + D
            };
          }, re = Q(U, L), ie = Q(U, H), ee = Q(N, L), F = Q(N, H), V = [
            re.x + O,
            re.y + z,
            ee.x + O,
            ee.y + z,
            F.x + O,
            F.y + z,
            ie.x + O,
            ie.y + z
          ];
          if (qt(t, e, V)) return p(w), true;
        } else if (Ir(P, t, e)) return p(w), true;
      }
    }
    for (var E = s.length - 1; E >= 0; E--) {
      var S = s[E];
      S.isNode() ? g(S) || x(S) : b(S) || x(S) || x(S, "source") || x(S, "target");
    }
    return o;
  };
  yn.getAllInBox = function(t, e, r, n) {
    var a = this.getCachedZSortedEles().interactive, i = this.cy.zoom(), s = 2 / i, o = [], u = Math.min(t, r), l = Math.max(t, r), c = Math.min(e, n), f = Math.max(e, n);
    t = u, r = l, e = c, n = f;
    var d = zt({
      x1: t,
      y1: e,
      x2: r,
      y2: n
    }), v = [
      {
        x: d.x1,
        y: d.y1
      },
      {
        x: d.x2,
        y: d.y1
      },
      {
        x: d.x2,
        y: d.y2
      },
      {
        x: d.x1,
        y: d.y2
      }
    ], h = [
      [
        v[0],
        v[1]
      ],
      [
        v[1],
        v[2]
      ],
      [
        v[2],
        v[3]
      ],
      [
        v[3],
        v[0]
      ]
    ];
    function y(X, ne, he) {
      return Ut(X, ne, he);
    }
    function p(X, ne) {
      var he = X._private, De = s, Re = "";
      X.boundingBox();
      var Te = he.labelBounds.main;
      if (!Te) return null;
      var we = y(he.rscratch, "labelX", ne), se = y(he.rscratch, "labelY", ne), ge = y(he.rscratch, "labelAngle", ne), pe = X.pstyle(Re + "text-margin-x").pfValue, Ce = X.pstyle(Re + "text-margin-y").pfValue, ye = Te.x1 - De - pe, Pe = Te.x2 + De - pe, Oe = Te.y1 - De - Ce, $e = Te.y2 + De - Ce;
      if (ge) {
        var Ue = Math.cos(ge), qe = Math.sin(ge), Se = function(j, _) {
          return j = j - we, _ = _ - se, {
            x: j * Ue - _ * qe + we,
            y: j * qe + _ * Ue + se
          };
        };
        return [
          Se(ye, Oe),
          Se(Pe, Oe),
          Se(Pe, $e),
          Se(ye, $e)
        ];
      } else return [
        {
          x: ye,
          y: Oe
        },
        {
          x: Pe,
          y: Oe
        },
        {
          x: Pe,
          y: $e
        },
        {
          x: ye,
          y: $e
        }
      ];
    }
    function g(X, ne, he, De) {
      function Re(Te, we, se) {
        return (se.y - Te.y) * (we.x - Te.x) > (we.y - Te.y) * (se.x - Te.x);
      }
      return Re(X, he, De) !== Re(ne, he, De) && Re(X, ne, he) !== Re(X, ne, De);
    }
    for (var b = 0; b < a.length; b++) {
      var m = a[b];
      if (m.isNode()) {
        var x = m, E = x.pstyle("text-events").strValue === "yes", S = x.pstyle("box-selection").strValue, w = x.pstyle("box-select-labels").strValue === "yes";
        if (S === "none") continue;
        var T = (S === "overlap" || w) && E, C = x.boundingBox({
          includeNodes: true,
          includeEdges: false,
          includeLabels: T
        });
        if (S === "contain") {
          var R = false;
          if (w && E) {
            var A = p(x);
            A && Fs(A, v) && (o.push(x), R = true);
          }
          !R && Yd(d, C) && o.push(x);
        } else if (S === "overlap" && Vu(d, C)) {
          var P = x.boundingBox({
            includeNodes: true,
            includeEdges: true,
            includeLabels: false,
            includeMainLabels: false,
            includeSourceLabels: false,
            includeTargetLabels: false
          }), k = [
            {
              x: P.x1,
              y: P.y1
            },
            {
              x: P.x2,
              y: P.y1
            },
            {
              x: P.x2,
              y: P.y2
            },
            {
              x: P.x1,
              y: P.y2
            }
          ];
          if (Fs(k, v)) o.push(x);
          else {
            var I = p(x);
            I && Fs(I, v) && o.push(x);
          }
        }
      } else {
        var M = m, D = M._private, B = D.rscratch, O = M.pstyle("box-selection").strValue;
        if (O === "none") continue;
        if (O === "contain") {
          if (B.startX != null && B.startY != null && !Ir(d, B.startX, B.startY) || B.endX != null && B.endY != null && !Ir(d, B.endX, B.endY)) continue;
          if (B.edgeType === "bezier" || B.edgeType === "multibezier" || B.edgeType === "self" || B.edgeType === "compound" || B.edgeType === "segments" || B.edgeType === "haystack") {
            for (var z = D.rstyle.bezierPts || D.rstyle.linePts || D.rstyle.haystackPts, U = true, N = 0; N < z.length; N++) if (!ql(d, z[N])) {
              U = false;
              break;
            }
            U && o.push(M);
          } else B.edgeType === "straight" && o.push(M);
        } else if (O === "overlap") {
          var L = false;
          if (B.startX != null && B.startY != null && B.endX != null && B.endY != null && (Ir(d, B.startX, B.startY) || Ir(d, B.endX, B.endY))) o.push(M), L = true;
          else if (!L && B.edgeType === "haystack") {
            for (var H = D.rstyle.haystackPts, Y = 0; Y < H.length; Y++) if (ql(d, H[Y])) {
              o.push(M), L = true;
              break;
            }
          }
          if (!L) {
            var K = D.rstyle.bezierPts || D.rstyle.linePts || D.rstyle.haystackPts;
            if ((!K || K.length < 2) && B.edgeType === "straight" && B.startX != null && B.startY != null && B.endX != null && B.endY != null && (K = [
              {
                x: B.startX,
                y: B.startY
              },
              {
                x: B.endX,
                y: B.endY
              }
            ]), !K || K.length < 2) continue;
            for (var Q = 0; Q < K.length - 1; Q++) {
              for (var re = K[Q], ie = K[Q + 1], ee = 0; ee < h.length; ee++) {
                var F = ft(h[ee], 2), V = F[0], q = F[1];
                if (g(re, ie, V, q)) {
                  o.push(M), L = true;
                  break;
                }
              }
              if (L) break;
            }
          }
        }
      }
    }
    return o;
  };
  var Fi = {};
  Fi.calculateArrowAngles = function(t) {
    var e = t._private.rscratch, r = e.edgeType === "haystack", n = e.edgeType === "bezier", a = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", u, l, c, f, d, v, g, b;
    if (r ? (c = e.haystackPts[0], f = e.haystackPts[1], d = e.haystackPts[2], v = e.haystackPts[3]) : (c = e.arrowStartX, f = e.arrowStartY, d = e.arrowEndX, v = e.arrowEndY), g = e.midX, b = e.midY, i) u = c - e.segpts[0], l = f - e.segpts[1];
    else if (a || s || o || n) {
      var h = e.allpts, y = wt(h[0], h[2], h[4], 0.1), p = wt(h[1], h[3], h[5], 0.1);
      u = c - y, l = f - p;
    } else u = c - g, l = f - b;
    e.srcArrowAngle = Qa(u, l);
    var g = e.midX, b = e.midY;
    if (r && (g = (c + d) / 2, b = (f + v) / 2), u = d - c, l = v - f, i) {
      var h = e.allpts;
      if (h.length / 2 % 2 === 0) {
        var m = h.length / 2, x = m - 2;
        u = h[m] - h[x], l = h[m + 1] - h[x + 1];
      } else if (e.isRound) u = e.midVector[1], l = -e.midVector[0];
      else {
        var m = h.length / 2 - 1, x = m - 2;
        u = h[m] - h[x], l = h[m + 1] - h[x + 1];
      }
    } else if (a || s || o) {
      var h = e.allpts, E = e.ctrlpts, S, w, T, C;
      if (E.length / 2 % 2 === 0) {
        var R = h.length / 2 - 1, A = R + 2, P = A + 2;
        S = wt(h[R], h[A], h[P], 0), w = wt(h[R + 1], h[A + 1], h[P + 1], 0), T = wt(h[R], h[A], h[P], 1e-4), C = wt(h[R + 1], h[A + 1], h[P + 1], 1e-4);
      } else {
        var A = h.length / 2 - 1, R = A - 2, P = A + 2;
        S = wt(h[R], h[A], h[P], 0.4999), w = wt(h[R + 1], h[A + 1], h[P + 1], 0.4999), T = wt(h[R], h[A], h[P], 0.5), C = wt(h[R + 1], h[A + 1], h[P + 1], 0.5);
      }
      u = T - S, l = C - w;
    }
    if (e.midtgtArrowAngle = Qa(u, l), e.midDispX = u, e.midDispY = l, u *= -1, l *= -1, i) {
      var h = e.allpts;
      if (h.length / 2 % 2 !== 0) {
        if (!e.isRound) {
          var m = h.length / 2 - 1, k = m + 2;
          u = -(h[k] - h[m]), l = -(h[k + 1] - h[m + 1]);
        }
      }
    }
    if (e.midsrcArrowAngle = Qa(u, l), i) u = d - e.segpts[e.segpts.length - 2], l = v - e.segpts[e.segpts.length - 1];
    else if (a || s || o || n) {
      var h = e.allpts, I = h.length, y = wt(h[I - 6], h[I - 4], h[I - 2], 0.9), p = wt(h[I - 5], h[I - 3], h[I - 1], 0.9);
      u = d - y, l = v - p;
    } else u = d - g, l = v - b;
    e.tgtArrowAngle = Qa(u, l);
  };
  Fi.getArrowWidth = Fi.getArrowHeight = function(t, e) {
    var r = this.arrowWidthCache = this.arrowWidthCache || {}, n = r[t + ", " + e];
    return n || (n = Math.max(Math.pow(t * 13.37, 0.9), 29) * e, r[t + ", " + e] = n, n);
  };
  var pu, mu, lr = {}, Yt = {}, Rf, Af, an, Ei, mr, Jr, tn, or, Rn, oi, qv, Zv, yu, bu, kf, Pf = function(e, r, n) {
    n.x = r.x - e.x, n.y = r.y - e.y, n.len = Math.sqrt(n.x * n.x + n.y * n.y), n.nx = n.x / n.len, n.ny = n.y / n.len, n.ang = Math.atan2(n.ny, n.nx);
  }, Wb = function(e, r) {
    r.x = e.x * -1, r.y = e.y * -1, r.nx = e.nx * -1, r.ny = e.ny * -1, r.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
  }, Hb = function(e, r, n, a, i) {
    if (e !== kf ? Pf(r, e, lr) : Wb(Yt, lr), Pf(r, n, Yt), Rf = lr.nx * Yt.ny - lr.ny * Yt.nx, Af = lr.nx * Yt.nx - lr.ny * -Yt.ny, mr = Math.asin(Math.max(-1, Math.min(1, Rf))), Math.abs(mr) < 1e-6) {
      pu = r.x, mu = r.y, tn = Rn = 0;
      return;
    }
    an = 1, Ei = false, Af < 0 ? mr < 0 ? mr = Math.PI + mr : (mr = Math.PI - mr, an = -1, Ei = true) : mr > 0 && (an = -1, Ei = true), r.radius !== void 0 ? Rn = r.radius : Rn = a, Jr = mr / 2, oi = Math.min(lr.len / 2, Yt.len / 2), i ? (or = Math.abs(Math.cos(Jr) * Rn / Math.sin(Jr)), or > oi ? (or = oi, tn = Math.abs(or * Math.sin(Jr) / Math.cos(Jr))) : tn = Rn) : (or = Math.min(oi, Rn), tn = Math.abs(or * Math.sin(Jr) / Math.cos(Jr))), yu = r.x + Yt.nx * or, bu = r.y + Yt.ny * or, pu = yu - Yt.ny * tn * an, mu = bu + Yt.nx * tn * an, qv = r.x + lr.nx * or, Zv = r.y + lr.ny * or, kf = r;
  };
  function Gv(t, e) {
    e.radius === 0 ? t.lineTo(e.cx, e.cy) : t.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
  }
  function Ju(t, e, r, n) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    return n === 0 || e.radius === 0 ? {
      cx: e.x,
      cy: e.y,
      radius: 0,
      startX: e.x,
      startY: e.y,
      stopX: e.x,
      stopY: e.y,
      startAngle: void 0,
      endAngle: void 0,
      counterClockwise: void 0
    } : (Hb(t, e, r, n, a), {
      cx: pu,
      cy: mu,
      radius: tn,
      startX: qv,
      startY: Zv,
      stopX: yu,
      stopY: bu,
      startAngle: lr.ang + Math.PI / 2 * an,
      endAngle: Yt.ang - Math.PI / 2 * an,
      counterClockwise: Ei
    });
  }
  var Pa = 0.01, Kb = Math.sqrt(2 * Pa), Bt = {};
  Bt.findMidptPtsEtc = function(t, e) {
    var r = e.posPts, n = e.intersectionPts, a = e.vectorNormInverse, i, s = t.pstyle("source-endpoint"), o = t.pstyle("target-endpoint"), u = s.units != null && o.units != null, l = function(E, S, w, T) {
      var C = T - S, R = w - E, A = Math.sqrt(R * R + C * C);
      return {
        x: -C / A,
        y: R / A
      };
    }, c = t.pstyle("edge-distances").value;
    switch (c) {
      case "node-position":
        i = r;
        break;
      case "intersection":
        i = n;
        break;
      case "endpoints": {
        if (u) {
          var f = this.manualEndptToPx(t.source()[0], s), d = ft(f, 2), v = d[0], h = d[1], y = this.manualEndptToPx(t.target()[0], o), p = ft(y, 2), g = p[0], b = p[1], m = {
            x1: v,
            y1: h,
            x2: g,
            y2: b
          };
          a = l(v, h, g, b), i = m;
        } else Ge("Edge ".concat(t.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = n;
        break;
      }
    }
    return {
      midptPts: i,
      vectorNormInverse: a
    };
  };
  Bt.findHaystackPoints = function(t) {
    for (var e = 0; e < t.length; e++) {
      var r = t[e], n = r._private, a = n.rscratch;
      if (!a.haystack) {
        var i = Math.random() * 2 * Math.PI;
        a.source = {
          x: Math.cos(i),
          y: Math.sin(i)
        }, i = Math.random() * 2 * Math.PI, a.target = {
          x: Math.cos(i),
          y: Math.sin(i)
        };
      }
      var s = n.source, o = n.target, u = s.position(), l = o.position(), c = s.width(), f = o.width(), d = s.height(), v = o.height(), h = r.pstyle("haystack-radius").value, y = h / 2;
      a.haystackPts = a.allpts = [
        a.source.x * c * y + u.x,
        a.source.y * d * y + u.y,
        a.target.x * f * y + l.x,
        a.target.y * v * y + l.y
      ], a.midX = (a.allpts[0] + a.allpts[2]) / 2, a.midY = (a.allpts[1] + a.allpts[3]) / 2, a.edgeType = "haystack", a.haystack = true, this.storeEdgeProjections(r), this.calculateArrowAngles(r), this.recalculateEdgeLabelProjections(r), this.calculateLabelAngles(r);
    }
  };
  Bt.findSegmentsPoints = function(t, e) {
    var r = t._private.rscratch, n = t.pstyle("segment-weights"), a = t.pstyle("segment-distances"), i = t.pstyle("segment-radii"), s = t.pstyle("radius-type"), o = Math.min(n.pfValue.length, a.pfValue.length), u = i.pfValue[i.pfValue.length - 1], l = s.pfValue[s.pfValue.length - 1];
    r.edgeType = "segments", r.segpts = [], r.radii = [], r.isArcRadius = [];
    for (var c = 0; c < o; c++) {
      var f = n.pfValue[c], d = a.pfValue[c], v = 1 - f, h = f, y = this.findMidptPtsEtc(t, e), p = y.midptPts, g = y.vectorNormInverse, b = {
        x: p.x1 * v + p.x2 * h,
        y: p.y1 * v + p.y2 * h
      };
      r.segpts.push(b.x + g.x * d, b.y + g.y * d), r.radii.push(i.pfValue[c] !== void 0 ? i.pfValue[c] : u), r.isArcRadius.push((s.pfValue[c] !== void 0 ? s.pfValue[c] : l) === "arc-radius");
    }
  };
  Bt.findLoopPoints = function(t, e, r, n) {
    var a = t._private.rscratch, i = e.dirCounts, s = e.srcPos, o = t.pstyle("control-point-distances"), u = o ? o.pfValue[0] : void 0, l = t.pstyle("loop-direction").pfValue, c = t.pstyle("loop-sweep").pfValue, f = t.pstyle("control-point-step-size").pfValue;
    a.edgeType = "self";
    var d = r, v = f;
    n && (d = 0, v = u);
    var h = l - Math.PI / 2, y = h - c / 2, p = h + c / 2, g = l + "_" + c;
    d = i[g] === void 0 ? i[g] = 0 : ++i[g], a.ctrlpts = [
      s.x + Math.cos(y) * 1.4 * v * (d / 3 + 1),
      s.y + Math.sin(y) * 1.4 * v * (d / 3 + 1),
      s.x + Math.cos(p) * 1.4 * v * (d / 3 + 1),
      s.y + Math.sin(p) * 1.4 * v * (d / 3 + 1)
    ];
  };
  Bt.findCompoundLoopPoints = function(t, e, r, n) {
    var a = t._private.rscratch;
    a.edgeType = "compound";
    var i = e.srcPos, s = e.tgtPos, o = e.srcW, u = e.srcH, l = e.tgtW, c = e.tgtH, f = t.pstyle("control-point-step-size").pfValue, d = t.pstyle("control-point-distances"), v = d ? d.pfValue[0] : void 0, h = r, y = f;
    n && (h = 0, y = v);
    var p = 50, g = {
      x: i.x - o / 2,
      y: i.y - u / 2
    }, b = {
      x: s.x - l / 2,
      y: s.y - c / 2
    }, m = {
      x: Math.min(g.x, b.x),
      y: Math.min(g.y, b.y)
    }, x = 0.5, E = Math.max(x, Math.log(o * Pa)), S = Math.max(x, Math.log(l * Pa));
    a.ctrlpts = [
      m.x,
      m.y - (1 + Math.pow(p, 1.12) / 100) * y * (h / 3 + 1) * E,
      m.x - (1 + Math.pow(p, 1.12) / 100) * y * (h / 3 + 1) * S,
      m.y
    ];
  };
  Bt.findStraightEdgePoints = function(t) {
    t._private.rscratch.edgeType = "straight";
  };
  Bt.findBezierPoints = function(t, e, r, n, a) {
    var i = t._private.rscratch, s = t.pstyle("control-point-step-size").pfValue, o = t.pstyle("control-point-distances"), u = t.pstyle("control-point-weights"), l = o && u ? Math.min(o.value.length, u.value.length) : 1, c = o ? o.pfValue[0] : void 0, f = u.value[0], d = n;
    i.edgeType = d ? "multibezier" : "bezier", i.ctrlpts = [];
    for (var v = 0; v < l; v++) {
      var h = (0.5 - e.eles.length / 2 + r) * s * (a ? -1 : 1), y = void 0, p = Fu(h);
      d && (c = o ? o.pfValue[v] : s, f = u.value[v]), n ? y = c : y = c !== void 0 ? p * c : void 0;
      var g = y !== void 0 ? y : h, b = 1 - f, m = f, x = this.findMidptPtsEtc(t, e), E = x.midptPts, S = x.vectorNormInverse, w = {
        x: E.x1 * b + E.x2 * m,
        y: E.y1 * b + E.y2 * m
      };
      i.ctrlpts.push(w.x + S.x * g, w.y + S.y * g);
    }
  };
  Bt.findTaxiPoints = function(t, e) {
    var r = t._private.rscratch;
    r.edgeType = "segments";
    var n = "vertical", a = "horizontal", i = "leftward", s = "rightward", o = "downward", u = "upward", l = "auto", c = e.posPts, f = e.srcW, d = e.srcH, v = e.tgtW, h = e.tgtH, y = t.pstyle("edge-distances").value, p = y !== "node-position", g = t.pstyle("taxi-direction").value, b = g, m = t.pstyle("taxi-turn"), x = m.units === "%", E = m.pfValue, S = E < 0, w = t.pstyle("taxi-turn-min-distance").pfValue, T = p ? (f + v) / 2 : 0, C = p ? (d + h) / 2 : 0, R = c.x2 - c.x1, A = c.y2 - c.y1, P = function(_, $) {
      return _ > 0 ? Math.max(_ - $, 0) : Math.min(_ + $, 0);
    }, k = P(R, T), I = P(A, C), M = false;
    b === l ? g = Math.abs(k) > Math.abs(I) ? a : n : b === u || b === o ? (g = n, M = true) : (b === i || b === s) && (g = a, M = true);
    var D = g === n, B = D ? I : k, O = D ? A : R, z = Fu(O), U = false;
    !(M && (x || S)) && (b === o && O < 0 || b === u && O > 0 || b === i && O > 0 || b === s && O < 0) && (z *= -1, B = z * Math.abs(B), U = true);
    var N;
    if (x) {
      var L = E < 0 ? 1 + E : E;
      N = L * B;
    } else {
      var H = E < 0 ? B : 0;
      N = H + E * z;
    }
    var Y = function(_) {
      return Math.abs(_) < w || Math.abs(_) >= Math.abs(B);
    }, K = Y(N), Q = Y(Math.abs(B) - Math.abs(N)), re = K || Q;
    if (re && !U) if (D) {
      var ie = Math.abs(O) <= d / 2, ee = Math.abs(R) <= v / 2;
      if (ie) {
        var F = (c.x1 + c.x2) / 2, V = c.y1, q = c.y2;
        r.segpts = [
          F,
          V,
          F,
          q
        ];
      } else if (ee) {
        var X = (c.y1 + c.y2) / 2, ne = c.x1, he = c.x2;
        r.segpts = [
          ne,
          X,
          he,
          X
        ];
      } else r.segpts = [
        c.x1,
        c.y2
      ];
    } else {
      var De = Math.abs(O) <= f / 2, Re = Math.abs(A) <= h / 2;
      if (De) {
        var Te = (c.y1 + c.y2) / 2, we = c.x1, se = c.x2;
        r.segpts = [
          we,
          Te,
          se,
          Te
        ];
      } else if (Re) {
        var ge = (c.x1 + c.x2) / 2, pe = c.y1, Ce = c.y2;
        r.segpts = [
          ge,
          pe,
          ge,
          Ce
        ];
      } else r.segpts = [
        c.x2,
        c.y1
      ];
    }
    else if (D) {
      var ye = c.y1 + N + (p ? d / 2 * z : 0), Pe = c.x1, Oe = c.x2;
      r.segpts = [
        Pe,
        ye,
        Oe,
        ye
      ];
    } else {
      var $e = c.x1 + N + (p ? f / 2 * z : 0), Ue = c.y1, qe = c.y2;
      r.segpts = [
        $e,
        Ue,
        $e,
        qe
      ];
    }
    if (r.isRound) {
      var Se = t.pstyle("taxi-radius").value, le = t.pstyle("radius-type").value[0] === "arc-radius";
      r.radii = new Array(r.segpts.length / 2).fill(Se), r.isArcRadius = new Array(r.segpts.length / 2).fill(le);
    }
  };
  Bt.tryToCorrectInvalidPoints = function(t, e) {
    var r = t._private.rscratch;
    if (r.edgeType === "bezier") {
      var n = e.srcPos, a = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, u = e.tgtH, l = e.srcShape, c = e.tgtShape, f = e.srcCornerRadius, d = e.tgtCornerRadius, v = e.srcRs, h = e.tgtRs, y = !ae(r.startX) || !ae(r.startY), p = !ae(r.arrowStartX) || !ae(r.arrowStartY), g = !ae(r.endX) || !ae(r.endY), b = !ae(r.arrowEndX) || !ae(r.arrowEndY), m = 3, x = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth, E = m * x, S = vn({
        x: r.ctrlpts[0],
        y: r.ctrlpts[1]
      }, {
        x: r.startX,
        y: r.startY
      }), w = S < E, T = vn({
        x: r.ctrlpts[0],
        y: r.ctrlpts[1]
      }, {
        x: r.endX,
        y: r.endY
      }), C = T < E, R = false;
      if (y || p || w) {
        R = true;
        var A = {
          x: r.ctrlpts[0] - n.x,
          y: r.ctrlpts[1] - n.y
        }, P = Math.sqrt(A.x * A.x + A.y * A.y), k = {
          x: A.x / P,
          y: A.y / P
        }, I = Math.max(i, s), M = {
          x: r.ctrlpts[0] + k.x * 2 * I,
          y: r.ctrlpts[1] + k.y * 2 * I
        }, D = l.intersectLine(n.x, n.y, i, s, M.x, M.y, 0, f, v);
        w ? (r.ctrlpts[0] = r.ctrlpts[0] + k.x * (E - S), r.ctrlpts[1] = r.ctrlpts[1] + k.y * (E - S)) : (r.ctrlpts[0] = D[0] + k.x * E, r.ctrlpts[1] = D[1] + k.y * E);
      }
      if (g || b || C) {
        R = true;
        var B = {
          x: r.ctrlpts[0] - a.x,
          y: r.ctrlpts[1] - a.y
        }, O = Math.sqrt(B.x * B.x + B.y * B.y), z = {
          x: B.x / O,
          y: B.y / O
        }, U = Math.max(i, s), N = {
          x: r.ctrlpts[0] + z.x * 2 * U,
          y: r.ctrlpts[1] + z.y * 2 * U
        }, L = c.intersectLine(a.x, a.y, o, u, N.x, N.y, 0, d, h);
        C ? (r.ctrlpts[0] = r.ctrlpts[0] + z.x * (E - T), r.ctrlpts[1] = r.ctrlpts[1] + z.y * (E - T)) : (r.ctrlpts[0] = L[0] + z.x * E, r.ctrlpts[1] = L[1] + z.y * E);
      }
      R && this.findEndpoints(t);
    }
  };
  Bt.storeAllpts = function(t) {
    var e = t._private.rscratch;
    if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
      e.allpts = [], e.allpts.push(e.startX, e.startY);
      for (var r = 0; r + 1 < e.ctrlpts.length; r += 2) e.allpts.push(e.ctrlpts[r], e.ctrlpts[r + 1]), r + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[r] + e.ctrlpts[r + 2]) / 2, (e.ctrlpts[r + 1] + e.ctrlpts[r + 3]) / 2);
      e.allpts.push(e.endX, e.endY);
      var n, a;
      e.ctrlpts.length / 2 % 2 === 0 ? (n = e.allpts.length / 2 - 1, e.midX = e.allpts[n], e.midY = e.allpts[n + 1]) : (n = e.allpts.length / 2 - 3, a = 0.5, e.midX = wt(e.allpts[n], e.allpts[n + 2], e.allpts[n + 4], a), e.midY = wt(e.allpts[n + 1], e.allpts[n + 3], e.allpts[n + 5], a));
    } else if (e.edgeType === "straight") e.allpts = [
      e.startX,
      e.startY,
      e.endX,
      e.endY
    ], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
    else if (e.edgeType === "segments") {
      if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.isRound) {
        e.roundCorners = [];
        for (var i = 2; i + 3 < e.allpts.length; i += 2) {
          var s = e.radii[i / 2 - 1], o = e.isArcRadius[i / 2 - 1];
          e.roundCorners.push(Ju({
            x: e.allpts[i - 2],
            y: e.allpts[i - 1]
          }, {
            x: e.allpts[i],
            y: e.allpts[i + 1],
            radius: s
          }, {
            x: e.allpts[i + 2],
            y: e.allpts[i + 3]
          }, s, o));
        }
      }
      if (e.segpts.length % 4 === 0) {
        var u = e.segpts.length / 2, l = u - 2;
        e.midX = (e.segpts[l] + e.segpts[u]) / 2, e.midY = (e.segpts[l + 1] + e.segpts[u + 1]) / 2;
      } else {
        var c = e.segpts.length / 2 - 1;
        if (!e.isRound) e.midX = e.segpts[c], e.midY = e.segpts[c + 1];
        else {
          var f = {
            x: e.segpts[c],
            y: e.segpts[c + 1]
          }, d = e.roundCorners[c / 2];
          if (d.radius === 0) {
            var v = {
              x: e.segpts[c + 2],
              y: e.segpts[c + 3]
            };
            e.midX = f.x, e.midY = f.y, e.midVector = [
              f.y - v.y,
              v.x - f.x
            ];
          } else {
            var h = [
              f.x - d.cx,
              f.y - d.cy
            ], y = d.radius / Math.sqrt(Math.pow(h[0], 2) + Math.pow(h[1], 2));
            h = h.map(function(p) {
              return p * y;
            }), e.midX = d.cx + h[0], e.midY = d.cy + h[1], e.midVector = h;
          }
        }
      }
    }
  };
  Bt.checkForInvalidEdgeWarning = function(t) {
    var e = t[0]._private.rscratch;
    e.nodesOverlap || ae(e.startX) && ae(e.startY) && ae(e.endX) && ae(e.endY) ? e.loggedErr = false : e.loggedErr || (e.loggedErr = true, Ge("Edge `" + t.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
  };
  Bt.findEdgeControlPoints = function(t) {
    var e = this;
    if (!(!t || t.length === 0)) {
      for (var r = this, n = r.cy, a = n.hasCompoundNodes(), i = new br(), s = function(C, R) {
        return [].concat(Pi(C), [
          R ? 1 : 0
        ]).join("-");
      }, o = [], u = [], l = 0; l < t.length; l++) {
        var c = t[l], f = c._private, d = c.pstyle("curve-style").value;
        if (!(c.removed() || !c.takesUpSpace())) {
          if (d === "haystack") {
            u.push(c);
            continue;
          }
          var v = d === "unbundled-bezier" || _r(d, "segments") || d === "straight" || d === "straight-triangle" || _r(d, "taxi"), h = d === "unbundled-bezier" || d === "bezier", y = f.source, p = f.target, g = y.poolIndex(), b = p.poolIndex(), m = [
            g,
            b
          ].sort(), x = s(m, v), E = i.get(x);
          E == null && (E = {
            eles: []
          }, o.push({
            pairId: m,
            edgeIsUnbundled: v
          }), i.set(x, E)), E.eles.push(c), v && (E.hasUnbundled = true), h && (E.hasBezier = true);
        }
      }
      for (var S = function() {
        var C = o[w], R = C.pairId, A = C.edgeIsUnbundled, P = s(R, A), k = i.get(P), I;
        if (!k.hasUnbundled) {
          var M = k.eles[0].parallelEdges().filter(function(le) {
            return le.isBundledBezier();
          });
          zu(k.eles), M.forEach(function(le) {
            return k.eles.push(le);
          }), k.eles.sort(function(le, j) {
            return le.poolIndex() - j.poolIndex();
          });
        }
        var D = k.eles[0], B = D.source(), O = D.target();
        if (B.poolIndex() > O.poolIndex()) {
          var z = B;
          B = O, O = z;
        }
        var U = k.srcPos = B.position(), N = k.tgtPos = O.position(), L = k.srcW = B.outerWidth(), H = k.srcH = B.outerHeight(), Y = k.tgtW = O.outerWidth(), K = k.tgtH = O.outerHeight(), Q = k.srcShape = r.nodeShapes[e.getNodeShape(B)], re = k.tgtShape = r.nodeShapes[e.getNodeShape(O)], ie = k.srcCornerRadius = B.pstyle("corner-radius").value === "auto" ? "auto" : B.pstyle("corner-radius").pfValue, ee = k.tgtCornerRadius = O.pstyle("corner-radius").value === "auto" ? "auto" : O.pstyle("corner-radius").pfValue, F = k.tgtRs = O._private.rscratch, V = k.srcRs = B._private.rscratch;
        k.dirCounts = {
          north: 0,
          west: 0,
          south: 0,
          east: 0,
          northwest: 0,
          southwest: 0,
          northeast: 0,
          southeast: 0
        };
        for (var q = 0; q < k.eles.length; q++) {
          var X = k.eles[q], ne = X[0]._private.rscratch, he = X.pstyle("curve-style").value, De = he === "unbundled-bezier" || _r(he, "segments") || _r(he, "taxi"), Re = !B.same(X.source());
          if (!k.calculatedIntersection && B !== O && (k.hasBezier || k.hasUnbundled)) {
            k.calculatedIntersection = true;
            var Te = Q.intersectLine(U.x, U.y, L, H, N.x, N.y, 0, ie, V), we = k.srcIntn = Te, se = re.intersectLine(N.x, N.y, Y, K, U.x, U.y, 0, ee, F), ge = k.tgtIntn = se, pe = k.intersectionPts = {
              x1: Te[0],
              x2: se[0],
              y1: Te[1],
              y2: se[1]
            }, Ce = k.posPts = {
              x1: U.x,
              x2: N.x,
              y1: U.y,
              y2: N.y
            }, ye = se[1] - Te[1], Pe = se[0] - Te[0], Oe = Math.sqrt(Pe * Pe + ye * ye);
            ae(Oe) && Oe >= Kb || (Oe = Math.sqrt(Math.max(Pe * Pe, Pa) + Math.max(ye * ye, Pa)));
            var $e = k.vector = {
              x: Pe,
              y: ye
            }, Ue = k.vectorNorm = {
              x: $e.x / Oe,
              y: $e.y / Oe
            }, qe = {
              x: -Ue.y,
              y: Ue.x
            };
            k.nodesOverlap = !ae(Oe) || re.checkPoint(Te[0], Te[1], 0, Y, K, N.x, N.y, ee, F) || Q.checkPoint(se[0], se[1], 0, L, H, U.x, U.y, ie, V), k.vectorNormInverse = qe, I = {
              nodesOverlap: k.nodesOverlap,
              dirCounts: k.dirCounts,
              calculatedIntersection: true,
              hasBezier: k.hasBezier,
              hasUnbundled: k.hasUnbundled,
              eles: k.eles,
              srcPos: N,
              srcRs: F,
              tgtPos: U,
              tgtRs: V,
              srcW: Y,
              srcH: K,
              tgtW: L,
              tgtH: H,
              srcIntn: ge,
              tgtIntn: we,
              srcShape: re,
              tgtShape: Q,
              posPts: {
                x1: Ce.x2,
                y1: Ce.y2,
                x2: Ce.x1,
                y2: Ce.y1
              },
              intersectionPts: {
                x1: pe.x2,
                y1: pe.y2,
                x2: pe.x1,
                y2: pe.y1
              },
              vector: {
                x: -$e.x,
                y: -$e.y
              },
              vectorNorm: {
                x: -Ue.x,
                y: -Ue.y
              },
              vectorNormInverse: {
                x: -qe.x,
                y: -qe.y
              }
            };
          }
          var Se = Re ? I : k;
          ne.nodesOverlap = Se.nodesOverlap, ne.srcIntn = Se.srcIntn, ne.tgtIntn = Se.tgtIntn, ne.isRound = he.startsWith("round"), a && (B.isParent() || B.isChild() || O.isParent() || O.isChild()) && (B.parents().anySame(O) || O.parents().anySame(B) || B.same(O) && B.isParent()) ? e.findCompoundLoopPoints(X, Se, q, De) : B === O ? e.findLoopPoints(X, Se, q, De) : he.endsWith("segments") ? e.findSegmentsPoints(X, Se) : he.endsWith("taxi") ? e.findTaxiPoints(X, Se) : he === "straight" || !De && k.eles.length % 2 === 1 && q === Math.floor(k.eles.length / 2) ? e.findStraightEdgePoints(X) : e.findBezierPoints(X, Se, q, De, Re), e.findEndpoints(X), e.tryToCorrectInvalidPoints(X, Se), e.checkForInvalidEdgeWarning(X), e.storeAllpts(X), e.storeEdgeProjections(X), e.calculateArrowAngles(X), e.recalculateEdgeLabelProjections(X), e.calculateLabelAngles(X);
        }
      }, w = 0; w < o.length; w++) S();
      this.findHaystackPoints(u);
    }
  };
  function Wv(t) {
    var e = [];
    if (t != null) {
      for (var r = 0; r < t.length; r += 2) {
        var n = t[r], a = t[r + 1];
        e.push({
          x: n,
          y: a
        });
      }
      return e;
    }
  }
  Bt.getSegmentPoints = function(t) {
    var e = t[0]._private.rscratch;
    this.recalculateRenderedStyle(t);
    var r = e.edgeType;
    if (r === "segments") return Wv(e.segpts);
  };
  Bt.getControlPoints = function(t) {
    var e = t[0]._private.rscratch;
    this.recalculateRenderedStyle(t);
    var r = e.edgeType;
    if (r === "bezier" || r === "multibezier" || r === "self" || r === "compound") return Wv(e.ctrlpts);
  };
  Bt.getEdgeMidpoint = function(t) {
    var e = t[0]._private.rscratch;
    return this.recalculateRenderedStyle(t), {
      x: e.midX,
      y: e.midY
    };
  };
  var Ua = {};
  Ua.manualEndptToPx = function(t, e) {
    var r = this, n = t.position(), a = t.outerWidth(), i = t.outerHeight(), s = t._private.rscratch;
    if (e.value.length === 2) {
      var o = [
        e.pfValue[0],
        e.pfValue[1]
      ];
      return e.units[0] === "%" && (o[0] = o[0] * a), e.units[1] === "%" && (o[1] = o[1] * i), o[0] += n.x, o[1] += n.y, o;
    } else {
      var u = e.pfValue[0];
      u = -Math.PI / 2 + u;
      var l = 2 * Math.max(a, i), c = [
        n.x + Math.cos(u) * l,
        n.y + Math.sin(u) * l
      ];
      return r.nodeShapes[this.getNodeShape(t)].intersectLine(n.x, n.y, a, i, c[0], c[1], 0, t.pstyle("corner-radius").value === "auto" ? "auto" : t.pstyle("corner-radius").pfValue, s);
    }
  };
  Ua.findEndpoints = function(t) {
    var e, r, n, a, i = this, s, o = t.source()[0], u = t.target()[0], l = o.position(), c = u.position(), f = t.pstyle("target-arrow-shape").value, d = t.pstyle("source-arrow-shape").value, v = t.pstyle("target-distance-from-node").pfValue, h = t.pstyle("source-distance-from-node").pfValue, y = o._private.rscratch, p = u._private.rscratch, g = t.pstyle("curve-style").value, b = t._private.rscratch, m = b.edgeType, x = _r(g, "taxi"), E = m === "self" || m === "compound", S = m === "bezier" || m === "multibezier" || E, w = m !== "bezier", T = m === "straight" || m === "segments", C = m === "segments", R = S || w || T, A = E || x, P = t.pstyle("source-endpoint"), k = A ? "outside-to-node" : P.value, I = o.pstyle("corner-radius").value === "auto" ? "auto" : o.pstyle("corner-radius").pfValue, M = t.pstyle("target-endpoint"), D = A ? "outside-to-node" : M.value, B = u.pstyle("corner-radius").value === "auto" ? "auto" : u.pstyle("corner-radius").pfValue;
    b.srcManEndpt = P, b.tgtManEndpt = M;
    var O, z, U, N, L = (e = (M == null || (r = M.pfValue) === null || r === void 0 ? void 0 : r.length) === 2 ? M.pfValue : null) !== null && e !== void 0 ? e : [
      0,
      0
    ], H = (n = (P == null || (a = P.pfValue) === null || a === void 0 ? void 0 : a.length) === 2 ? P.pfValue : null) !== null && n !== void 0 ? n : [
      0,
      0
    ];
    if (S) {
      var Y = [
        b.ctrlpts[0],
        b.ctrlpts[1]
      ], K = w ? [
        b.ctrlpts[b.ctrlpts.length - 2],
        b.ctrlpts[b.ctrlpts.length - 1]
      ] : Y;
      O = K, z = Y;
    } else if (T) {
      var Q = C ? b.segpts.slice(0, 2) : [
        c.x + L[0],
        c.y + L[1]
      ], re = C ? b.segpts.slice(b.segpts.length - 2) : [
        l.x + H[0],
        l.y + H[1]
      ];
      O = re, z = Q;
    }
    if (D === "inside-to-node") s = [
      c.x,
      c.y
    ];
    else if (M.units) s = this.manualEndptToPx(u, M);
    else if (D === "outside-to-line") s = b.tgtIntn;
    else if (D === "outside-to-node" || D === "outside-to-node-or-label" ? U = O : (D === "outside-to-line" || D === "outside-to-line-or-label") && (U = [
      l.x,
      l.y
    ]), s = i.nodeShapes[this.getNodeShape(u)].intersectLine(c.x, c.y, u.outerWidth(), u.outerHeight(), U[0], U[1], 0, B, p), D === "outside-to-node-or-label" || D === "outside-to-line-or-label") {
      var ie = u._private.rscratch, ee = ie.labelWidth, F = ie.labelHeight, V = ie.labelX, q = ie.labelY, X = ee / 2, ne = F / 2, he = u.pstyle("text-valign").value;
      he === "top" ? q -= ne : he === "bottom" && (q += ne);
      var De = u.pstyle("text-halign").value;
      De === "left" ? V -= X : De === "right" && (V += X);
      var Re = Sa(U[0], U[1], [
        V - X,
        q - ne,
        V + X,
        q - ne,
        V + X,
        q + ne,
        V - X,
        q + ne
      ], c.x, c.y);
      if (Re.length > 0) {
        var Te = l, we = en(Te, Bn(s)), se = en(Te, Bn(Re)), ge = we;
        if (se < we && (s = Re, ge = se), Re.length > 2) {
          var pe = en(Te, {
            x: Re[2],
            y: Re[3]
          });
          pe < ge && (s = [
            Re[2],
            Re[3]
          ]);
        }
      }
    }
    var Ce = ei(s, O, i.arrowShapes[f].spacing(t) + v), ye = ei(s, O, i.arrowShapes[f].gap(t) + v);
    if (b.endX = ye[0], b.endY = ye[1], b.arrowEndX = Ce[0], b.arrowEndY = Ce[1], k === "inside-to-node") s = [
      l.x,
      l.y
    ];
    else if (P.units) s = this.manualEndptToPx(o, P);
    else if (k === "outside-to-line") s = b.srcIntn;
    else if (k === "outside-to-node" || k === "outside-to-node-or-label" ? N = z : (k === "outside-to-line" || k === "outside-to-line-or-label") && (N = [
      c.x,
      c.y
    ]), s = i.nodeShapes[this.getNodeShape(o)].intersectLine(l.x, l.y, o.outerWidth(), o.outerHeight(), N[0], N[1], 0, I, y), k === "outside-to-node-or-label" || k === "outside-to-line-or-label") {
      var Pe = o._private.rscratch, Oe = Pe.labelWidth, $e = Pe.labelHeight, Ue = Pe.labelX, qe = Pe.labelY, Se = Oe / 2, le = $e / 2, j = o.pstyle("text-valign").value;
      j === "top" ? qe -= le : j === "bottom" && (qe += le);
      var _ = o.pstyle("text-halign").value;
      _ === "left" ? Ue -= Se : _ === "right" && (Ue += Se);
      var $ = Sa(N[0], N[1], [
        Ue - Se,
        qe - le,
        Ue + Se,
        qe - le,
        Ue + Se,
        qe + le,
        Ue - Se,
        qe + le
      ], l.x, l.y);
      if ($.length > 0) {
        var Z = c, G = en(Z, Bn(s)), J = en(Z, Bn($)), ue = G;
        if (J < G && (s = [
          $[0],
          $[1]
        ], ue = J), $.length > 2) {
          var te = en(Z, {
            x: $[2],
            y: $[3]
          });
          te < ue && (s = [
            $[2],
            $[3]
          ]);
        }
      }
    }
    var de = ei(s, z, i.arrowShapes[d].spacing(t) + h), ce = ei(s, z, i.arrowShapes[d].gap(t) + h);
    b.startX = ce[0], b.startY = ce[1], b.arrowStartX = de[0], b.arrowStartY = de[1], R && (!ae(b.startX) || !ae(b.startY) || !ae(b.endX) || !ae(b.endY) ? b.badLine = true : b.badLine = false);
  };
  Ua.getSourceEndpoint = function(t) {
    var e = t[0]._private.rscratch;
    return this.recalculateRenderedStyle(t), e.edgeType === "haystack" ? {
      x: e.haystackPts[0],
      y: e.haystackPts[1]
    } : {
      x: e.arrowStartX,
      y: e.arrowStartY
    };
  };
  Ua.getTargetEndpoint = function(t) {
    var e = t[0]._private.rscratch;
    return this.recalculateRenderedStyle(t), e.edgeType === "haystack" ? {
      x: e.haystackPts[2],
      y: e.haystackPts[3]
    } : {
      x: e.arrowEndX,
      y: e.arrowEndY
    };
  };
  var Qu = {};
  function Yb(t, e, r) {
    for (var n = function(l, c, f, d) {
      return wt(l, c, f, d);
    }, a = e._private, i = a.rstyle.bezierPts, s = 0; s < t.bezierProjPcts.length; s++) {
      var o = t.bezierProjPcts[s];
      i.push({
        x: n(r[0], r[2], r[4], o),
        y: n(r[1], r[3], r[5], o)
      });
    }
  }
  Qu.storeEdgeProjections = function(t) {
    var e = t._private, r = e.rscratch, n = r.edgeType;
    if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, n === "multibezier" || n === "bezier" || n === "self" || n === "compound") {
      e.rstyle.bezierPts = [];
      for (var a = 0; a + 5 < r.allpts.length; a += 4) Yb(this, t, r.allpts.slice(a, a + 6));
    } else if (n === "segments") for (var i = e.rstyle.linePts = [], a = 0; a + 1 < r.allpts.length; a += 2) i.push({
      x: r.allpts[a],
      y: r.allpts[a + 1]
    });
    else if (n === "haystack") {
      var s = r.haystackPts;
      e.rstyle.haystackPts = [
        {
          x: s[0],
          y: s[1]
        },
        {
          x: s[2],
          y: s[3]
        }
      ];
    }
    e.rstyle.arrowWidth = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth;
  };
  Qu.recalculateEdgeProjections = function(t) {
    this.findEdgeControlPoints(t);
  };
  var vr = {};
  vr.recalculateNodeLabelProjection = function(t) {
    var e = t.pstyle("label").strValue;
    if (!Nr(e)) {
      var r, n, a = t._private, i = t.width(), s = t.height(), o = t.padding(), u = t.position(), l = t.pstyle("text-halign").strValue, c = t.pstyle("text-valign").strValue, f = a.rscratch, d = a.rstyle;
      switch (l) {
        case "left":
          r = u.x - i / 2 - o;
          break;
        case "right":
          r = u.x + i / 2 + o;
          break;
        default:
          r = u.x;
      }
      switch (c) {
        case "top":
          n = u.y - s / 2 - o;
          break;
        case "bottom":
          n = u.y + s / 2 + o;
          break;
        default:
          n = u.y;
      }
      f.labelX = r, f.labelY = n, d.labelX = r, d.labelY = n, this.calculateLabelAngles(t), this.applyLabelDimensions(t);
    }
  };
  var Hv = function(e, r) {
    var n = Math.atan(r / e);
    return e === 0 && n < 0 && (n = n * -1), n;
  }, Kv = function(e, r) {
    var n = r.x - e.x, a = r.y - e.y;
    return Hv(n, a);
  }, jb = function(e, r, n, a) {
    var i = Ta(0, a - 1e-3, 1), s = Ta(0, a + 1e-3, 1), o = zn(e, r, n, i), u = zn(e, r, n, s);
    return Kv(o, u);
  };
  vr.recalculateEdgeLabelProjections = function(t) {
    var e, r = t._private, n = r.rscratch, a = this, i = {
      mid: t.pstyle("label").strValue,
      source: t.pstyle("source-label").strValue,
      target: t.pstyle("target-label").strValue
    };
    if (i.mid || i.source || i.target) {
      e = {
        x: n.midX,
        y: n.midY
      };
      var s = function(f, d, v) {
        yr(r.rscratch, f, d, v), yr(r.rstyle, f, d, v);
      };
      s("labelX", null, e.x), s("labelY", null, e.y);
      var o = Hv(n.midDispX, n.midDispY);
      s("labelAutoAngle", null, o);
      var u = function() {
        if (u.cache) return u.cache;
        for (var f = [], d = 0; d + 5 < n.allpts.length; d += 4) {
          var v = {
            x: n.allpts[d],
            y: n.allpts[d + 1]
          }, h = {
            x: n.allpts[d + 2],
            y: n.allpts[d + 3]
          }, y = {
            x: n.allpts[d + 4],
            y: n.allpts[d + 5]
          };
          f.push({
            p0: v,
            p1: h,
            p2: y,
            startDist: 0,
            length: 0,
            segments: []
          });
        }
        var p = r.rstyle.bezierPts, g = a.bezierProjPcts.length;
        function b(w, T, C, R, A) {
          var P = vn(T, C), k = w.segments[w.segments.length - 1], I = {
            p0: T,
            p1: C,
            t0: R,
            t1: A,
            startDist: k ? k.startDist + k.length : 0,
            length: P
          };
          w.segments.push(I), w.length += P;
        }
        for (var m = 0; m < f.length; m++) {
          var x = f[m], E = f[m - 1];
          E && (x.startDist = E.startDist + E.length), b(x, x.p0, p[m * g], 0, a.bezierProjPcts[0]);
          for (var S = 0; S < g - 1; S++) b(x, p[m * g + S], p[m * g + S + 1], a.bezierProjPcts[S], a.bezierProjPcts[S + 1]);
          b(x, p[m * g + g - 1], x.p2, a.bezierProjPcts[g - 1], 1);
        }
        return u.cache = f;
      }, l = function(f) {
        var d, v = f === "source";
        if (i[f]) {
          var h = t.pstyle(f + "-text-offset").pfValue;
          switch (n.edgeType) {
            case "self":
            case "compound":
            case "bezier":
            case "multibezier": {
              for (var y = u(), p, g = 0, b = 0, m = 0; m < y.length; m++) {
                for (var x = y[v ? m : y.length - 1 - m], E = 0; E < x.segments.length; E++) {
                  var S = x.segments[v ? E : x.segments.length - 1 - E], w = m === y.length - 1 && E === x.segments.length - 1;
                  if (g = b, b += S.length, b >= h || w) {
                    p = {
                      cp: x,
                      segment: S
                    };
                    break;
                  }
                }
                if (p) break;
              }
              var T = p.cp, C = p.segment, R = (h - g) / C.length, A = C.t1 - C.t0, P = v ? C.t0 + A * R : C.t1 - A * R;
              P = Ta(0, P, 1), e = zn(T.p0, T.p1, T.p2, P), d = jb(T.p0, T.p1, T.p2, P);
              break;
            }
            case "straight":
            case "segments":
            case "haystack": {
              for (var k = 0, I, M, D, B, O = n.allpts.length, z = 0; z + 3 < O && (v ? (D = {
                x: n.allpts[z],
                y: n.allpts[z + 1]
              }, B = {
                x: n.allpts[z + 2],
                y: n.allpts[z + 3]
              }) : (D = {
                x: n.allpts[O - 2 - z],
                y: n.allpts[O - 1 - z]
              }, B = {
                x: n.allpts[O - 4 - z],
                y: n.allpts[O - 3 - z]
              }), I = vn(D, B), M = k, k += I, !(k >= h)); z += 2) ;
              var U = h - M, N = U / I;
              N = Ta(0, N, 1), e = ym(D, B, N), d = Kv(D, B);
              break;
            }
          }
          s("labelX", f, e.x), s("labelY", f, e.y), s("labelAutoAngle", f, d);
        }
      };
      l("source"), l("target"), this.applyLabelDimensions(t);
    }
  };
  vr.applyLabelDimensions = function(t) {
    this.applyPrefixedLabelDimensions(t), t.isEdge() && (this.applyPrefixedLabelDimensions(t, "source"), this.applyPrefixedLabelDimensions(t, "target"));
  };
  vr.applyPrefixedLabelDimensions = function(t, e) {
    var r = t._private, n = this.getLabelText(t, e), a = dn(n, t._private.labelDimsKey);
    if (Ut(r.rscratch, "prefixedLabelDimsKey", e) !== a) {
      yr(r.rscratch, "prefixedLabelDimsKey", e, a);
      var i = this.calculateLabelDimensions(t, n), s = t.pstyle("line-height").pfValue, o = t.pstyle("text-wrap").strValue, u = Ut(r.rscratch, "labelWrapCachedLines", e) || [], l = o !== "wrap" ? 1 : Math.max(u.length, 1), c = i.height / l, f = c * s, d = i.width, v = i.height + (l - 1) * (s - 1) * c;
      yr(r.rstyle, "labelWidth", e, d), yr(r.rscratch, "labelWidth", e, d), yr(r.rstyle, "labelHeight", e, v), yr(r.rscratch, "labelHeight", e, v), yr(r.rscratch, "labelLineHeight", e, f);
    }
  };
  vr.getLabelText = function(t, e) {
    var r = t._private, n = e ? e + "-" : "", a = t.pstyle(n + "label").strValue, i = t.pstyle("text-transform").value, s = function(H, Y) {
      return Y ? (yr(r.rscratch, H, e, Y), Y) : Ut(r.rscratch, H, e);
    };
    if (!a) return "";
    i == "none" || (i == "uppercase" ? a = a.toUpperCase() : i == "lowercase" && (a = a.toLowerCase()));
    var o = t.pstyle("text-wrap").value;
    if (o === "wrap") {
      var u = s("labelKey");
      if (u != null && s("labelWrapKey") === u) return s("labelWrapCachedText");
      for (var l = "\u200B", c = a.split(`
`), f = t.pstyle("text-max-width").pfValue, d = t.pstyle("text-overflow-wrap").value, v = d === "anywhere", h = [], y = /[\s\u200b]+|$/g, p = 0; p < c.length; p++) {
        var g = c[p], b = this.calculateLabelDimensions(t, g), m = b.width;
        if (v) {
          var x = g.split("").join(l);
          g = x;
        }
        if (m > f) {
          var E = g.matchAll(y), S = "", w = 0, T = Zt(E), C;
          try {
            for (T.s(); !(C = T.n()).done; ) {
              var R = C.value, A = R[0], P = g.substring(w, R.index);
              w = R.index + A.length;
              var k = S.length === 0 ? P : S + P + A, I = this.calculateLabelDimensions(t, k), M = I.width;
              M <= f ? S += P + A : (S && h.push(S), S = P + A);
            }
          } catch (L) {
            T.e(L);
          } finally {
            T.f();
          }
          S.match(/^[\s\u200b]+$/) || h.push(S);
        } else h.push(g);
      }
      s("labelWrapCachedLines", h), a = s("labelWrapCachedText", h.join(`
`)), s("labelWrapKey", u);
    } else if (o === "ellipsis") {
      var D = t.pstyle("text-max-width").pfValue, B = "", O = "\u2026", z = false;
      if (this.calculateLabelDimensions(t, a).width < D) return a;
      for (var U = 0; U < a.length; U++) {
        var N = this.calculateLabelDimensions(t, B + a[U] + O).width;
        if (N > D) break;
        B += a[U], U === a.length - 1 && (z = true);
      }
      return z || (B += O), B;
    }
    return a;
  };
  vr.getLabelJustification = function(t) {
    var e = t.pstyle("text-justification").strValue, r = t.pstyle("text-halign").strValue;
    if (e === "auto") if (t.isNode()) switch (r) {
      case "left":
        return "right";
      case "right":
        return "left";
      default:
        return "center";
    }
    else return "center";
    else return e;
  };
  vr.calculateLabelDimensions = function(t, e) {
    var r = this, n = r.cy.window(), a = n.document, i = 0, s = t.pstyle("font-style").strValue, o = t.pstyle("font-size").pfValue, u = t.pstyle("font-family").strValue, l = t.pstyle("font-weight").strValue, c = this.labelCalcCanvas, f = this.labelCalcCanvasContext;
    if (!c) {
      c = this.labelCalcCanvas = a.createElement("canvas"), f = this.labelCalcCanvasContext = c.getContext("2d");
      var d = c.style;
      d.position = "absolute", d.left = "-9999px", d.top = "-9999px", d.zIndex = "-1", d.visibility = "hidden", d.pointerEvents = "none";
    }
    f.font = "".concat(s, " ").concat(l, " ").concat(o, "px ").concat(u);
    for (var v = 0, h = 0, y = e.split(`
`), p = 0; p < y.length; p++) {
      var g = y[p], b = f.measureText(g), m = Math.ceil(b.width), x = o;
      v = Math.max(m, v), h += x;
    }
    return v += i, h += i, {
      width: v,
      height: h
    };
  };
  vr.calculateLabelAngle = function(t, e) {
    var r = t._private, n = r.rscratch, a = t.isEdge(), i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation"), o = s.strValue;
    return o === "none" ? 0 : a && o === "autorotate" ? n.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
  };
  vr.calculateLabelAngles = function(t) {
    var e = this, r = t.isEdge(), n = t._private, a = n.rscratch;
    a.labelAngle = e.calculateLabelAngle(t), r && (a.sourceLabelAngle = e.calculateLabelAngle(t, "source"), a.targetLabelAngle = e.calculateLabelAngle(t, "target"));
  };
  var Yv = {}, _f = 28, If = false;
  Yv.getNodeShape = function(t) {
    var e = this, r = t.pstyle("shape").value;
    if (r === "cutrectangle" && (t.width() < _f || t.height() < _f)) return If || (Ge("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), If = true), "rectangle";
    if (t.isParent()) return r === "rectangle" || r === "roundrectangle" || r === "round-rectangle" || r === "cutrectangle" || r === "cut-rectangle" || r === "barrel" ? r : "rectangle";
    if (r === "polygon") {
      var n = t.pstyle("shape-polygon-points").value;
      return e.nodeShapes.makePolygon(n).name;
    }
    return r;
  };
  var fs = {};
  fs.registerCalculationListeners = function() {
    var t = this.cy, e = t.collection(), r = this, n = function(s) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (e.merge(s), o) for (var u = 0; u < s.length; u++) {
        var l = s[u], c = l._private, f = c.rstyle;
        f.clean = false, f.cleanConnected = false;
      }
    };
    r.binder(t).on("bounds.* dirty.*", function(s) {
      var o = s.target;
      n(o);
    }).on("style.* background.*", function(s) {
      var o = s.target;
      n(o, false);
    });
    var a = function(s) {
      if (s) {
        var o = r.onUpdateEleCalcsFns;
        e.cleanStyle();
        for (var u = 0; u < e.length; u++) {
          var l = e[u], c = l._private.rstyle;
          l.isNode() && !c.cleanConnected && (n(l.connectedEdges()), c.cleanConnected = true);
        }
        if (o) for (var f = 0; f < o.length; f++) {
          var d = o[f];
          d(s, e);
        }
        r.recalculateRenderedStyle(e), e = t.collection();
      }
    };
    r.flushRenderedStyleQueue = function() {
      a(true);
    }, r.beforeRender(a, r.beforeRenderPriorities.eleCalcs);
  };
  fs.onUpdateEleCalcs = function(t) {
    var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
    e.push(t);
  };
  fs.recalculateRenderedStyle = function(t, e) {
    var r = function(x) {
      return x._private.rstyle.cleanConnected;
    };
    if (t.length !== 0) {
      var n = [], a = [];
      if (!this.destroyed) {
        e === void 0 && (e = true);
        for (var i = 0; i < t.length; i++) {
          var s = t[i], o = s._private, u = o.rstyle;
          s.isEdge() && (!r(s.source()) || !r(s.target())) && (u.clean = false), s.isEdge() && s.isBundledBezier() && s.parallelEdges().some(function(m) {
            return !m._private.rstyle.clean && m.isBundledBezier();
          }) && (u.clean = false), !(e && u.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? a.push(s) : n.push(s), u.clean = true);
        }
        for (var l = 0; l < a.length; l++) {
          var c = a[l], f = c._private, d = f.rstyle, v = c.position();
          this.recalculateNodeLabelProjection(c), d.nodeX = v.x, d.nodeY = v.y, d.nodeW = c.pstyle("width").pfValue, d.nodeH = c.pstyle("height").pfValue;
        }
        this.recalculateEdgeProjections(n);
        for (var h = 0; h < n.length; h++) {
          var y = n[h], p = y._private, g = p.rstyle, b = p.rscratch;
          g.srcX = b.arrowStartX, g.srcY = b.arrowStartY, g.tgtX = b.arrowEndX, g.tgtY = b.arrowEndY, g.midX = b.midX, g.midY = b.midY, g.labelAngle = b.labelAngle, g.sourceLabelAngle = b.sourceLabelAngle, g.targetLabelAngle = b.targetLabelAngle;
        }
      }
    }
  };
  var ds = {};
  ds.updateCachedGrabbedEles = function() {
    var t = this.cachedZSortedEles;
    if (t) {
      t.drag = [], t.nondrag = [];
      for (var e = [], r = 0; r < t.length; r++) {
        var n = t[r], a = n._private.rscratch;
        n.grabbed() && !n.isParent() ? e.push(n) : a.inDragLayer ? t.drag.push(n) : t.nondrag.push(n);
      }
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        t.drag.push(n);
      }
    }
  };
  ds.invalidateCachedZSortedEles = function() {
    this.cachedZSortedEles = null;
  };
  ds.getCachedZSortedEles = function(t) {
    if (t || !this.cachedZSortedEles) {
      var e = this.cy.mutableElements().toArray();
      e.sort(_v), e.interactive = e.filter(function(r) {
        return r.interactive();
      }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
    } else e = this.cachedZSortedEles;
    return e;
  };
  var jv = {};
  [
    yn,
    Fi,
    Bt,
    Ua,
    Qu,
    vr,
    Yv,
    fs,
    ds
  ].forEach(function(t) {
    Ee(jv, t);
  });
  var Xv = {};
  Xv.getCachedImage = function(t, e, r) {
    var n = this, a = n.imageCache = n.imageCache || {}, i = a[t];
    if (i) return i.image.complete || i.image.addEventListener("load", r), i.image;
    i = a[t] = a[t] || {};
    var s = i.image = new Image();
    s.addEventListener("load", r), s.addEventListener("error", function() {
      s.error = true;
    });
    var o = "data:", u = t.substring(0, o.length).toLowerCase() === o;
    return u || (e = e === "null" ? null : e, s.crossOrigin = e), s.src = t, s;
  };
  var Jn = {};
  Jn.registerBinding = function(t, e, r, n) {
    var a = Array.prototype.slice.apply(arguments, [
      1
    ]);
    if (Array.isArray(t)) {
      for (var i = [], s = 0; s < t.length; s++) {
        var o = t[s];
        if (o !== void 0) {
          var u = this.binder(o);
          i.push(u.on.apply(u, a));
        }
      }
      return i;
    }
    var u = this.binder(t);
    return u.on.apply(u, a);
  };
  Jn.binder = function(t) {
    var e = this, r = e.cy.window(), n = t === r || t === r.document || t === r.document.body || up(t);
    if (e.supportsPassiveEvents == null) {
      var a = false;
      try {
        var i = Object.defineProperty({}, "passive", {
          get: function() {
            return a = true, true;
          }
        });
        r.addEventListener("test", null, i);
      } catch {
      }
      e.supportsPassiveEvents = a;
    }
    var s = function(u, l, c) {
      var f = Array.prototype.slice.call(arguments);
      return n && e.supportsPassiveEvents && (f[2] = {
        capture: c ?? false,
        passive: false,
        once: false
      }), e.bindings.push({
        target: t,
        args: f
      }), (t.addEventListener || t.on).apply(t, f), this;
    };
    return {
      on: s,
      addEventListener: s,
      addListener: s,
      bind: s
    };
  };
  Jn.nodeIsDraggable = function(t) {
    return t && t.isNode() && !t.locked() && t.grabbable();
  };
  Jn.nodeIsGrabbable = function(t) {
    return this.nodeIsDraggable(t) && t.interactive();
  };
  Jn.load = function() {
    var t = this, e = t.cy.window(), r = function(_) {
      return _.selected();
    }, n = function(_) {
      var $ = _.getRootNode();
      if ($ && $.nodeType === 11 && $.host !== void 0) return $;
    }, a = function(_, $, Z, G) {
      _ == null && (_ = t.cy);
      for (var J = 0; J < $.length; J++) {
        var ue = $[J];
        _.emit({
          originalEvent: Z,
          type: ue,
          position: G
        });
      }
    }, i = function(_) {
      return _.shiftKey || _.metaKey || _.ctrlKey;
    }, s = function(_, $) {
      var Z = true;
      if (t.cy.hasCompoundNodes() && _ && _.pannable()) for (var G = 0; $ && G < $.length; G++) {
        var _ = $[G];
        if (_.isNode() && _.isParent() && !_.pannable()) {
          Z = false;
          break;
        }
      }
      else Z = true;
      return Z;
    }, o = function(_) {
      _[0]._private.grabbed = true;
    }, u = function(_) {
      _[0]._private.grabbed = false;
    }, l = function(_) {
      _[0]._private.rscratch.inDragLayer = true;
    }, c = function(_) {
      _[0]._private.rscratch.inDragLayer = false;
    }, f = function(_) {
      _[0]._private.rscratch.isGrabTarget = true;
    }, d = function(_) {
      _[0]._private.rscratch.isGrabTarget = false;
    }, v = function(_, $) {
      var Z = $.addToList, G = Z.has(_);
      !G && _.grabbable() && !_.locked() && (Z.merge(_), o(_));
    }, h = function(_, $) {
      if (_.cy().hasCompoundNodes() && !($.inDragLayer == null && $.addToList == null)) {
        var Z = _.descendants();
        $.inDragLayer && (Z.forEach(l), Z.connectedEdges().forEach(l)), $.addToList && v(Z, $);
      }
    }, y = function(_, $) {
      $ = $ || {};
      var Z = _.cy().hasCompoundNodes();
      $.inDragLayer && (_.forEach(l), _.neighborhood().stdFilter(function(G) {
        return !Z || G.isEdge();
      }).forEach(l)), $.addToList && _.forEach(function(G) {
        v(G, $);
      }), h(_, $), b(_, {
        inDragLayer: $.inDragLayer
      }), t.updateCachedGrabbedEles();
    }, p = y, g = function(_) {
      _ && (t.getCachedZSortedEles().forEach(function($) {
        u($), c($), d($);
      }), t.updateCachedGrabbedEles());
    }, b = function(_, $) {
      if (!($.inDragLayer == null && $.addToList == null) && _.cy().hasCompoundNodes()) {
        var Z = _.ancestors().orphans();
        if (!Z.same(_)) {
          var G = Z.descendants().spawnSelf().merge(Z).unmerge(_).unmerge(_.descendants()), J = G.connectedEdges();
          $.inDragLayer && (J.forEach(l), G.forEach(l)), $.addToList && G.forEach(function(ue) {
            v(ue, $);
          });
        }
      }
    }, m = function() {
      document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
    }, x = typeof MutationObserver < "u", E = typeof ResizeObserver < "u";
    x ? (t.removeObserver = new MutationObserver(function(j) {
      for (var _ = 0; _ < j.length; _++) {
        var $ = j[_], Z = $.removedNodes;
        if (Z) for (var G = 0; G < Z.length; G++) {
          var J = Z[G];
          if (J === t.container) {
            t.destroy();
            break;
          }
        }
      }
    }), t.container.parentNode && t.removeObserver.observe(t.container.parentNode, {
      childList: true
    })) : t.registerBinding(t.container, "DOMNodeRemoved", function(j) {
      t.destroy();
    });
    var S = La(function() {
      t.cy.resize();
    }, 100);
    x && (t.styleObserver = new MutationObserver(S), t.styleObserver.observe(t.container, {
      attributes: true
    })), t.registerBinding(e, "resize", S), E && (t.resizeObserver = new ResizeObserver(S), t.resizeObserver.observe(t.container));
    var w = function(_, $) {
      for (; _ != null; ) $(_), _ = _.parentNode;
    }, T = function() {
      t.invalidateContainerClientCoordsCache();
    };
    w(t.container, function(j) {
      t.registerBinding(j, "transitionend", T), t.registerBinding(j, "animationend", T), t.registerBinding(j, "scroll", T);
    }), t.registerBinding(t.container, "contextmenu", function(j) {
      j.preventDefault();
    });
    var C = function() {
      return t.selection[4] !== 0;
    }, R = function(_) {
      for (var $ = t.findContainerClientCoords(), Z = $[0], G = $[1], J = $[2], ue = $[3], te = _.touches ? _.touches : [
        _
      ], de = false, ce = 0; ce < te.length; ce++) {
        var xe = te[ce];
        if (Z <= xe.clientX && xe.clientX <= Z + J && G <= xe.clientY && xe.clientY <= G + ue) {
          de = true;
          break;
        }
      }
      if (!de) return false;
      for (var Ie = t.container, ke = _.target, ve = ke.parentNode, Me = false; ve; ) {
        if (ve === Ie) {
          Me = true;
          break;
        }
        ve = ve.parentNode;
      }
      return !!Me;
    };
    t.registerBinding(t.container, "mousedown", function(_) {
      if (R(_) && !(t.hoverData.which === 1 && _.which !== 1)) {
        _.preventDefault(), m(), t.hoverData.capture = true, t.hoverData.which = _.which;
        var $ = t.cy, Z = [
          _.clientX,
          _.clientY
        ], G = t.projectIntoViewport(Z[0], Z[1]), J = t.selection, ue = t.findNearestElements(G[0], G[1], true, false), te = ue[0], de = t.dragData.possibleDragElements;
        t.hoverData.mdownPos = G, t.hoverData.mdownGPos = Z;
        var ce = function(Be) {
          return {
            originalEvent: _,
            type: Be,
            position: {
              x: G[0],
              y: G[1]
            }
          };
        }, xe = function() {
          t.hoverData.tapholdCancelled = false, clearTimeout(t.hoverData.tapholdTimeout), t.hoverData.tapholdTimeout = setTimeout(function() {
            if (!t.hoverData.tapholdCancelled) {
              var Be = t.hoverData.down;
              Be ? Be.emit(ce("taphold")) : $.emit(ce("taphold"));
            }
          }, t.tapholdDuration);
        };
        if (_.which == 3) {
          t.hoverData.cxtStarted = true;
          var Ie = {
            originalEvent: _,
            type: "cxttapstart",
            position: {
              x: G[0],
              y: G[1]
            }
          };
          te ? (te.activate(), te.emit(Ie), t.hoverData.down = te) : $.emit(Ie), t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), t.hoverData.cxtDragged = false;
        } else if (_.which == 1) {
          te && te.activate();
          {
            if (te != null && t.nodeIsGrabbable(te)) {
              var ke = function(Be) {
                Be.emit(ce("grab"));
              };
              if (f(te), !te.selected()) de = t.dragData.possibleDragElements = $.collection(), p(te, {
                addToList: de
              }), te.emit(ce("grabon")).emit(ce("grab"));
              else {
                de = t.dragData.possibleDragElements = $.collection();
                var ve = $.$(function(Me) {
                  return Me.isNode() && Me.selected() && t.nodeIsGrabbable(Me);
                });
                y(ve, {
                  addToList: de
                }), te.emit(ce("grabon")), ve.forEach(ke);
              }
              t.redrawHint("eles", true), t.redrawHint("drag", true);
            }
            t.hoverData.down = te, t.hoverData.downs = ue, t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
          }
          a(te, [
            "mousedown",
            "tapstart",
            "vmousedown"
          ], _, {
            x: G[0],
            y: G[1]
          }), te == null ? (J[4] = 1, t.data.bgActivePosistion = {
            x: G[0],
            y: G[1]
          }, t.redrawHint("select", true), t.redraw()) : te.pannable() && (J[4] = 1), xe();
        }
        J[0] = J[2] = G[0], J[1] = J[3] = G[1];
      }
    }, false);
    var A = n(t.container);
    t.registerBinding([
      e,
      A
    ], "mousemove", function(_) {
      var $ = t.hoverData.capture;
      if (!(!$ && !R(_))) {
        var Z = false, G = t.cy, J = G.zoom(), ue = [
          _.clientX,
          _.clientY
        ], te = t.projectIntoViewport(ue[0], ue[1]), de = t.hoverData.mdownPos, ce = t.hoverData.mdownGPos, xe = t.selection, Ie = null;
        !t.hoverData.draggingEles && !t.hoverData.dragging && !t.hoverData.selecting && (Ie = t.findNearestElement(te[0], te[1], true, false));
        var ke = t.hoverData.last, ve = t.hoverData.down, Me = [
          te[0] - xe[2],
          te[1] - xe[3]
        ], Be = t.dragData.possibleDragElements, vt;
        if (ce) {
          var st = ue[0] - ce[0], Mt = st * st, ut = ue[1] - ce[1], bt = ut * ut, ht = Mt + bt;
          t.hoverData.isOverThresholdDrag = vt = ht >= t.desktopTapThreshold2;
        }
        var Tt = i(_);
        vt && (t.hoverData.tapholdCancelled = true);
        var Cr = function() {
          var Kt = t.hoverData.dragDelta = t.hoverData.dragDelta || [];
          Kt.length === 0 ? (Kt.push(Me[0]), Kt.push(Me[1])) : (Kt[0] += Me[0], Kt[1] += Me[1]);
        };
        Z = true, a(Ie, [
          "mousemove",
          "vmousemove",
          "tapdrag"
        ], _, {
          x: te[0],
          y: te[1]
        });
        var lt = function(Kt) {
          return {
            originalEvent: _,
            type: Kt,
            position: {
              x: te[0],
              y: te[1]
            }
          };
        }, gr = function() {
          t.data.bgActivePosistion = void 0, t.hoverData.selecting || G.emit(lt("boxstart")), xe[4] = 1, t.hoverData.selecting = true, t.redrawHint("select", true), t.redraw();
        };
        if (t.hoverData.which === 3) {
          if (vt) {
            var pr = lt("cxtdrag");
            ve ? ve.emit(pr) : G.emit(pr), t.hoverData.cxtDragged = true, (!t.hoverData.cxtOver || Ie !== t.hoverData.cxtOver) && (t.hoverData.cxtOver && t.hoverData.cxtOver.emit(lt("cxtdragout")), t.hoverData.cxtOver = Ie, Ie && Ie.emit(lt("cxtdragover")));
          }
        } else if (t.hoverData.dragging) {
          if (Z = true, G.panningEnabled() && G.userPanningEnabled()) {
            var xn;
            if (t.hoverData.justStartedPan) {
              var Ga = t.hoverData.mdownPos;
              xn = {
                x: (te[0] - Ga[0]) * J,
                y: (te[1] - Ga[1]) * J
              }, t.hoverData.justStartedPan = false;
            } else xn = {
              x: Me[0] * J,
              y: Me[1] * J
            };
            G.panBy(xn), G.emit(lt("dragpan")), t.hoverData.dragged = true;
          }
          te = t.projectIntoViewport(_.clientX, _.clientY);
        } else if (xe[4] == 1 && (ve == null || ve.pannable())) {
          if (vt) {
            if (!t.hoverData.dragging && G.boxSelectionEnabled() && (Tt || !G.panningEnabled() || !G.userPanningEnabled())) gr();
            else if (!t.hoverData.selecting && G.panningEnabled() && G.userPanningEnabled()) {
              var Xr = s(ve, t.hoverData.downs);
              Xr && (t.hoverData.dragging = true, t.hoverData.justStartedPan = true, xe[4] = 0, t.data.bgActivePosistion = Bn(de), t.redrawHint("select", true), t.redraw());
            }
            ve && ve.pannable() && ve.active() && ve.unactivate();
          }
        } else {
          if (ve && ve.pannable() && ve.active() && ve.unactivate(), (!ve || !ve.grabbed()) && Ie != ke && (ke && a(ke, [
            "mouseout",
            "tapdragout"
          ], _, {
            x: te[0],
            y: te[1]
          }), Ie && a(Ie, [
            "mouseover",
            "tapdragover"
          ], _, {
            x: te[0],
            y: te[1]
          }), t.hoverData.last = Ie), ve) if (vt) {
            if (G.boxSelectionEnabled() && Tt) ve && ve.grabbed() && (g(Be), ve.emit(lt("freeon")), Be.emit(lt("free")), t.dragData.didDrag && (ve.emit(lt("dragfreeon")), Be.emit(lt("dragfree")))), gr();
            else if (ve && ve.grabbed() && t.nodeIsDraggable(ve)) {
              var Vt = !t.dragData.didDrag;
              Vt && t.redrawHint("eles", true), t.dragData.didDrag = true, t.hoverData.draggingEles || y(Be, {
                inDragLayer: true
              });
              var Pt = {
                x: 0,
                y: 0
              };
              if (ae(Me[0]) && ae(Me[1]) && (Pt.x += Me[0], Pt.y += Me[1], Vt)) {
                var $t = t.hoverData.dragDelta;
                $t && ae($t[0]) && ae($t[1]) && (Pt.x += $t[0], Pt.y += $t[1]);
              }
              t.hoverData.draggingEles = true, Be.silentShift(Pt).emit(lt("position")).emit(lt("drag")), t.redrawHint("drag", true), t.redraw();
            }
          } else Cr();
          Z = true;
        }
        if (xe[2] = te[0], xe[3] = te[1], Z) return _.stopPropagation && _.stopPropagation(), _.preventDefault && _.preventDefault(), false;
      }
    }, false);
    var P, k, I;
    t.registerBinding(e, "mouseup", function(_) {
      if (!(t.hoverData.which === 1 && _.which !== 1 && t.hoverData.capture)) {
        var $ = t.hoverData.capture;
        if ($) {
          t.hoverData.capture = false;
          var Z = t.cy, G = t.projectIntoViewport(_.clientX, _.clientY), J = t.selection, ue = t.findNearestElement(G[0], G[1], true, false), te = t.dragData.possibleDragElements, de = t.hoverData.down, ce = i(_);
          t.data.bgActivePosistion && (t.redrawHint("select", true), t.redraw()), t.hoverData.tapholdCancelled = true, t.data.bgActivePosistion = void 0, de && de.unactivate();
          var xe = function(st) {
            return {
              originalEvent: _,
              type: st,
              position: {
                x: G[0],
                y: G[1]
              }
            };
          };
          if (t.hoverData.which === 3) {
            var Ie = xe("cxttapend");
            if (de ? de.emit(Ie) : Z.emit(Ie), !t.hoverData.cxtDragged) {
              var ke = xe("cxttap");
              de ? de.emit(ke) : Z.emit(ke);
            }
            t.hoverData.cxtDragged = false, t.hoverData.which = null;
          } else if (t.hoverData.which === 1) {
            if (a(ue, [
              "mouseup",
              "tapend",
              "vmouseup"
            ], _, {
              x: G[0],
              y: G[1]
            }), !t.dragData.didDrag && !t.hoverData.dragged && !t.hoverData.selecting && !t.hoverData.isOverThresholdDrag && (a(de, [
              "click",
              "tap",
              "vclick"
            ], _, {
              x: G[0],
              y: G[1]
            }), k = false, _.timeStamp - I <= Z.multiClickDebounceTime() ? (P && clearTimeout(P), k = true, I = null, a(de, [
              "dblclick",
              "dbltap",
              "vdblclick"
            ], _, {
              x: G[0],
              y: G[1]
            })) : (P = setTimeout(function() {
              k || a(de, [
                "oneclick",
                "onetap",
                "voneclick"
              ], _, {
                x: G[0],
                y: G[1]
              });
            }, Z.multiClickDebounceTime()), I = _.timeStamp)), de == null && !t.dragData.didDrag && !t.hoverData.selecting && !t.hoverData.dragged && !i(_) && (Z.$(r).unselect([
              "tapunselect"
            ]), te.length > 0 && t.redrawHint("eles", true), t.dragData.possibleDragElements = te = Z.collection()), ue == de && !t.dragData.didDrag && !t.hoverData.selecting && ue != null && ue._private.selectable && (t.hoverData.dragging || (Z.selectionType() === "additive" || ce ? ue.selected() ? ue.unselect([
              "tapunselect"
            ]) : ue.select([
              "tapselect"
            ]) : ce || (Z.$(r).unmerge(ue).unselect([
              "tapunselect"
            ]), ue.select([
              "tapselect"
            ]))), t.redrawHint("eles", true)), t.hoverData.selecting) {
              var ve = Z.collection(t.getAllInBox(J[0], J[1], J[2], J[3]));
              t.redrawHint("select", true), ve.length > 0 && t.redrawHint("eles", true), Z.emit(xe("boxend"));
              var Me = function(st) {
                return st.selectable() && !st.selected();
              };
              Z.selectionType() === "additive" || ce || Z.$(r).unmerge(ve).unselect(), ve.emit(xe("box")).stdFilter(Me).select().emit(xe("boxselect")), t.redraw();
            }
            if (t.hoverData.dragging && (t.hoverData.dragging = false, t.redrawHint("select", true), t.redrawHint("eles", true), t.redraw()), !J[4]) {
              t.redrawHint("drag", true), t.redrawHint("eles", true);
              var Be = de && de.grabbed();
              g(te), Be && (de.emit(xe("freeon")), te.emit(xe("free")), t.dragData.didDrag && (de.emit(xe("dragfreeon")), te.emit(xe("dragfree"))));
            }
          }
          J[4] = 0, t.hoverData.down = null, t.hoverData.cxtStarted = false, t.hoverData.draggingEles = false, t.hoverData.selecting = false, t.hoverData.isOverThresholdDrag = false, t.dragData.didDrag = false, t.hoverData.dragged = false, t.hoverData.dragDelta = [], t.hoverData.mdownPos = null, t.hoverData.mdownGPos = null, t.hoverData.which = null;
        }
      }
    }, false);
    var M = [], D = 4, B, O = 1e5, z = function(_, $) {
      for (var Z = 0; Z < _.length; Z++) if (_[Z] % $ !== 0) return false;
      return true;
    }, U = function(_) {
      for (var $ = Math.abs(_[0]), Z = 1; Z < _.length; Z++) if (Math.abs(_[Z]) !== $) return false;
      return true;
    }, N = function(_) {
      var $ = false, Z = _.deltaY;
      if (Z == null && (_.wheelDeltaY != null ? Z = _.wheelDeltaY / 4 : _.wheelDelta != null && (Z = _.wheelDelta / 4)), Z !== 0) {
        if (B == null) if (M.length >= D) {
          var G = M;
          if (B = z(G, 5), !B) {
            var J = Math.abs(G[0]);
            B = U(G) && J > 5;
          }
          if (B) for (var ue = 0; ue < G.length; ue++) O = Math.min(Math.abs(G[ue]), O);
        } else M.push(Z), $ = true;
        else B && (O = Math.min(Math.abs(Z), O));
        if (!t.scrollingPage) {
          var te = t.cy, de = te.zoom(), ce = te.pan(), xe = t.projectIntoViewport(_.clientX, _.clientY), Ie = [
            xe[0] * de + ce.x,
            xe[1] * de + ce.y
          ];
          if (t.hoverData.draggingEles || t.hoverData.dragging || t.hoverData.cxtStarted || C()) {
            _.preventDefault();
            return;
          }
          if (te.panningEnabled() && te.userPanningEnabled() && te.zoomingEnabled() && te.userZoomingEnabled()) {
            _.preventDefault(), t.data.wheelZooming = true, clearTimeout(t.data.wheelTimeout), t.data.wheelTimeout = setTimeout(function() {
              t.data.wheelZooming = false, t.redrawHint("eles", true), t.redraw();
            }, 150);
            var ke;
            $ && Math.abs(Z) > 5 && (Z = Fu(Z) * 5), ke = Z / -250, B && (ke /= O, ke *= 3), ke = ke * t.wheelSensitivity;
            var ve = _.deltaMode === 1;
            ve && (ke *= 33);
            var Me = te.zoom() * Math.pow(10, ke);
            _.type === "gesturechange" && (Me = t.gestureStartZoom * _.scale), te.zoom({
              level: Me,
              renderedPosition: {
                x: Ie[0],
                y: Ie[1]
              }
            }), te.emit({
              type: _.type === "gesturechange" ? "pinchzoom" : "scrollzoom",
              originalEvent: _,
              position: {
                x: xe[0],
                y: xe[1]
              }
            });
          }
        }
      }
    };
    t.registerBinding(t.container, "wheel", N, true), t.registerBinding(e, "scroll", function(_) {
      t.scrollingPage = true, clearTimeout(t.scrollingPageTimeout), t.scrollingPageTimeout = setTimeout(function() {
        t.scrollingPage = false;
      }, 250);
    }, true), t.registerBinding(t.container, "gesturestart", function(_) {
      t.gestureStartZoom = t.cy.zoom(), t.hasTouchStarted || _.preventDefault();
    }, true), t.registerBinding(t.container, "gesturechange", function(j) {
      t.hasTouchStarted || N(j);
    }, true), t.registerBinding(t.container, "mouseout", function(_) {
      var $ = t.projectIntoViewport(_.clientX, _.clientY);
      t.cy.emit({
        originalEvent: _,
        type: "mouseout",
        position: {
          x: $[0],
          y: $[1]
        }
      });
    }, false), t.registerBinding(t.container, "mouseover", function(_) {
      var $ = t.projectIntoViewport(_.clientX, _.clientY);
      t.cy.emit({
        originalEvent: _,
        type: "mouseover",
        position: {
          x: $[0],
          y: $[1]
        }
      });
    }, false);
    var L, H, Y, K, Q, re, ie, ee, F, V, q, X, ne, he = function(_, $, Z, G) {
      return Math.sqrt((Z - _) * (Z - _) + (G - $) * (G - $));
    }, De = function(_, $, Z, G) {
      return (Z - _) * (Z - _) + (G - $) * (G - $);
    }, Re;
    t.registerBinding(t.container, "touchstart", Re = function(_) {
      if (t.hasTouchStarted = true, !!R(_)) {
        m(), t.touchData.capture = true, t.data.bgActivePosistion = void 0;
        var $ = t.cy, Z = t.touchData.now, G = t.touchData.earlier;
        if (_.touches[0]) {
          var J = t.projectIntoViewport(_.touches[0].clientX, _.touches[0].clientY);
          Z[0] = J[0], Z[1] = J[1];
        }
        if (_.touches[1]) {
          var J = t.projectIntoViewport(_.touches[1].clientX, _.touches[1].clientY);
          Z[2] = J[0], Z[3] = J[1];
        }
        if (_.touches[2]) {
          var J = t.projectIntoViewport(_.touches[2].clientX, _.touches[2].clientY);
          Z[4] = J[0], Z[5] = J[1];
        }
        var ue = function(Tt) {
          return {
            originalEvent: _,
            type: Tt,
            position: {
              x: Z[0],
              y: Z[1]
            }
          };
        };
        if (_.touches[1]) {
          t.touchData.singleTouchMoved = true, g(t.dragData.touchDragEles);
          var te = t.findContainerClientCoords();
          F = te[0], V = te[1], q = te[2], X = te[3], L = _.touches[0].clientX - F, H = _.touches[0].clientY - V, Y = _.touches[1].clientX - F, K = _.touches[1].clientY - V, ne = 0 <= L && L <= q && 0 <= Y && Y <= q && 0 <= H && H <= X && 0 <= K && K <= X;
          var de = $.pan(), ce = $.zoom();
          Q = he(L, H, Y, K), re = De(L, H, Y, K), ie = [
            (L + Y) / 2,
            (H + K) / 2
          ], ee = [
            (ie[0] - de.x) / ce,
            (ie[1] - de.y) / ce
          ];
          var xe = 200, Ie = xe * xe;
          if (re < Ie && !_.touches[2]) {
            var ke = t.findNearestElement(Z[0], Z[1], true, true), ve = t.findNearestElement(Z[2], Z[3], true, true);
            ke && ke.isNode() ? (ke.activate().emit(ue("cxttapstart")), t.touchData.start = ke) : ve && ve.isNode() ? (ve.activate().emit(ue("cxttapstart")), t.touchData.start = ve) : $.emit(ue("cxttapstart")), t.touchData.start && (t.touchData.start._private.grabbed = false), t.touchData.cxt = true, t.touchData.cxtDragged = false, t.data.bgActivePosistion = void 0, t.redraw();
            return;
          }
        }
        if (_.touches[2]) $.boxSelectionEnabled() && _.preventDefault();
        else if (!_.touches[1]) {
          if (_.touches[0]) {
            var Me = t.findNearestElements(Z[0], Z[1], true, true), Be = Me[0];
            if (Be != null && (Be.activate(), t.touchData.start = Be, t.touchData.starts = Me, t.nodeIsGrabbable(Be))) {
              var vt = t.dragData.touchDragEles = $.collection(), st = null;
              t.redrawHint("eles", true), t.redrawHint("drag", true), Be.selected() ? (st = $.$(function(ht) {
                return ht.selected() && t.nodeIsGrabbable(ht);
              }), y(st, {
                addToList: vt
              })) : p(Be, {
                addToList: vt
              }), f(Be), Be.emit(ue("grabon")), st ? st.forEach(function(ht) {
                ht.emit(ue("grab"));
              }) : Be.emit(ue("grab"));
            }
            a(Be, [
              "touchstart",
              "tapstart",
              "vmousedown"
            ], _, {
              x: Z[0],
              y: Z[1]
            }), Be == null && (t.data.bgActivePosistion = {
              x: J[0],
              y: J[1]
            }, t.redrawHint("select", true), t.redraw()), t.touchData.singleTouchMoved = false, t.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(t.touchData.tapholdTimeout), t.touchData.tapholdTimeout = setTimeout(function() {
              t.touchData.singleTouchMoved === false && !t.pinching && !t.touchData.selecting && a(t.touchData.start, [
                "taphold"
              ], _, {
                x: Z[0],
                y: Z[1]
              });
            }, t.tapholdDuration);
          }
        }
        if (_.touches.length >= 1) {
          for (var Mt = t.touchData.startPosition = [
            null,
            null,
            null,
            null,
            null,
            null
          ], ut = 0; ut < Z.length; ut++) Mt[ut] = G[ut] = Z[ut];
          var bt = _.touches[0];
          t.touchData.startGPosition = [
            bt.clientX,
            bt.clientY
          ];
        }
      }
    }, false);
    var Te;
    t.registerBinding(e, "touchmove", Te = function(_) {
      var $ = t.touchData.capture;
      if (!(!$ && !R(_))) {
        var Z = t.selection, G = t.cy, J = t.touchData.now, ue = t.touchData.earlier, te = G.zoom();
        if (_.touches[0]) {
          var de = t.projectIntoViewport(_.touches[0].clientX, _.touches[0].clientY);
          J[0] = de[0], J[1] = de[1];
        }
        if (_.touches[1]) {
          var de = t.projectIntoViewport(_.touches[1].clientX, _.touches[1].clientY);
          J[2] = de[0], J[3] = de[1];
        }
        if (_.touches[2]) {
          var de = t.projectIntoViewport(_.touches[2].clientX, _.touches[2].clientY);
          J[4] = de[0], J[5] = de[1];
        }
        var ce = function(lg) {
          return {
            originalEvent: _,
            type: lg,
            position: {
              x: J[0],
              y: J[1]
            }
          };
        }, xe = t.touchData.startGPosition, Ie;
        if ($ && _.touches[0] && xe) {
          for (var ke = [], ve = 0; ve < J.length; ve++) ke[ve] = J[ve] - ue[ve];
          var Me = _.touches[0].clientX - xe[0], Be = Me * Me, vt = _.touches[0].clientY - xe[1], st = vt * vt, Mt = Be + st;
          Ie = Mt >= t.touchTapThreshold2;
        }
        if ($ && t.touchData.cxt) {
          _.preventDefault();
          var ut = _.touches[0].clientX - F, bt = _.touches[0].clientY - V, ht = _.touches[1].clientX - F, Tt = _.touches[1].clientY - V, Cr = De(ut, bt, ht, Tt), lt = Cr / re, gr = 150, pr = gr * gr, xn = 1.5, Ga = xn * xn;
          if (lt >= Ga || Cr >= pr) {
            t.touchData.cxt = false, t.data.bgActivePosistion = void 0, t.redrawHint("select", true);
            var Xr = ce("cxttapend");
            t.touchData.start ? (t.touchData.start.unactivate().emit(Xr), t.touchData.start = null) : G.emit(Xr);
          }
        }
        if ($ && t.touchData.cxt) {
          var Xr = ce("cxtdrag");
          t.data.bgActivePosistion = void 0, t.redrawHint("select", true), t.touchData.start ? t.touchData.start.emit(Xr) : G.emit(Xr), t.touchData.start && (t.touchData.start._private.grabbed = false), t.touchData.cxtDragged = true;
          var Vt = t.findNearestElement(J[0], J[1], true, true);
          (!t.touchData.cxtOver || Vt !== t.touchData.cxtOver) && (t.touchData.cxtOver && t.touchData.cxtOver.emit(ce("cxtdragout")), t.touchData.cxtOver = Vt, Vt && Vt.emit(ce("cxtdragover")));
        } else if ($ && _.touches[2] && G.boxSelectionEnabled()) _.preventDefault(), t.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), t.touchData.selecting || G.emit(ce("boxstart")), t.touchData.selecting = true, t.touchData.didSelect = true, Z[4] = 1, !Z || Z.length === 0 || Z[0] === void 0 ? (Z[0] = (J[0] + J[2] + J[4]) / 3, Z[1] = (J[1] + J[3] + J[5]) / 3, Z[2] = (J[0] + J[2] + J[4]) / 3 + 1, Z[3] = (J[1] + J[3] + J[5]) / 3 + 1) : (Z[2] = (J[0] + J[2] + J[4]) / 3, Z[3] = (J[1] + J[3] + J[5]) / 3), t.redrawHint("select", true), t.redraw();
        else if ($ && _.touches[1] && !t.touchData.didSelect && G.zoomingEnabled() && G.panningEnabled() && G.userZoomingEnabled() && G.userPanningEnabled()) {
          _.preventDefault(), t.data.bgActivePosistion = void 0, t.redrawHint("select", true);
          var Pt = t.dragData.touchDragEles;
          if (Pt) {
            t.redrawHint("drag", true);
            for (var $t = 0; $t < Pt.length; $t++) {
              var ta = Pt[$t]._private;
              ta.grabbed = false, ta.rscratch.inDragLayer = false;
            }
          }
          var Kt = t.touchData.start, ut = _.touches[0].clientX - F, bt = _.touches[0].clientY - V, ht = _.touches[1].clientX - F, Tt = _.touches[1].clientY - V, ul = he(ut, bt, ht, Tt), eg = ul / Q;
          if (ne) {
            var tg = ut - L, rg = bt - H, ng = ht - Y, ag = Tt - K, ig = (tg + ng) / 2, sg = (rg + ag) / 2, ra = G.zoom(), ms = ra * eg, Wa = G.pan(), ll = ee[0] * ra + Wa.x, cl = ee[1] * ra + Wa.y, og = {
              x: -ms / ra * (ll - Wa.x - ig) + ll,
              y: -ms / ra * (cl - Wa.y - sg) + cl
            };
            if (Kt && Kt.active()) {
              var Pt = t.dragData.touchDragEles;
              g(Pt), t.redrawHint("drag", true), t.redrawHint("eles", true), Kt.unactivate().emit(ce("freeon")), Pt.emit(ce("free")), t.dragData.didDrag && (Kt.emit(ce("dragfreeon")), Pt.emit(ce("dragfree")));
            }
            G.viewport({
              zoom: ms,
              pan: og,
              cancelOnFailedZoom: true
            }), G.emit(ce("pinchzoom")), Q = ul, L = ut, H = bt, Y = ht, K = Tt, t.pinching = true;
          }
          if (_.touches[0]) {
            var de = t.projectIntoViewport(_.touches[0].clientX, _.touches[0].clientY);
            J[0] = de[0], J[1] = de[1];
          }
          if (_.touches[1]) {
            var de = t.projectIntoViewport(_.touches[1].clientX, _.touches[1].clientY);
            J[2] = de[0], J[3] = de[1];
          }
          if (_.touches[2]) {
            var de = t.projectIntoViewport(_.touches[2].clientX, _.touches[2].clientY);
            J[4] = de[0], J[5] = de[1];
          }
        } else if (_.touches[0] && !t.touchData.didSelect) {
          var er = t.touchData.start, ys = t.touchData.last, Vt;
          if (!t.hoverData.draggingEles && !t.swipePanning && (Vt = t.findNearestElement(J[0], J[1], true, true)), $ && er != null && _.preventDefault(), $ && er != null && t.nodeIsDraggable(er)) if (Ie) {
            var Pt = t.dragData.touchDragEles, fl = !t.dragData.didDrag;
            fl && y(Pt, {
              inDragLayer: true
            }), t.dragData.didDrag = true;
            var na = {
              x: 0,
              y: 0
            };
            if (ae(ke[0]) && ae(ke[1]) && (na.x += ke[0], na.y += ke[1], fl)) {
              t.redrawHint("eles", true);
              var tr = t.touchData.dragDelta;
              tr && ae(tr[0]) && ae(tr[1]) && (na.x += tr[0], na.y += tr[1]);
            }
            t.hoverData.draggingEles = true, Pt.silentShift(na).emit(ce("position")).emit(ce("drag")), t.redrawHint("drag", true), t.touchData.startPosition[0] == ue[0] && t.touchData.startPosition[1] == ue[1] && t.redrawHint("eles", true), t.redraw();
          } else {
            var tr = t.touchData.dragDelta = t.touchData.dragDelta || [];
            tr.length === 0 ? (tr.push(ke[0]), tr.push(ke[1])) : (tr[0] += ke[0], tr[1] += ke[1]);
          }
          if (a(er || Vt, [
            "touchmove",
            "tapdrag",
            "vmousemove"
          ], _, {
            x: J[0],
            y: J[1]
          }), (!er || !er.grabbed()) && Vt != ys && (ys && ys.emit(ce("tapdragout")), Vt && Vt.emit(ce("tapdragover"))), t.touchData.last = Vt, $) for (var $t = 0; $t < J.length; $t++) J[$t] && t.touchData.startPosition[$t] && Ie && (t.touchData.singleTouchMoved = true);
          if ($ && (er == null || er.pannable()) && G.panningEnabled() && G.userPanningEnabled()) {
            var ug = s(er, t.touchData.starts);
            ug && (_.preventDefault(), t.data.bgActivePosistion || (t.data.bgActivePosistion = Bn(t.touchData.startPosition)), t.swipePanning ? (G.panBy({
              x: ke[0] * te,
              y: ke[1] * te
            }), G.emit(ce("dragpan"))) : Ie && (t.swipePanning = true, G.panBy({
              x: Me * te,
              y: vt * te
            }), G.emit(ce("dragpan")), er && (er.unactivate(), t.redrawHint("select", true), t.touchData.start = null)));
            var de = t.projectIntoViewport(_.touches[0].clientX, _.touches[0].clientY);
            J[0] = de[0], J[1] = de[1];
          }
        }
        for (var ve = 0; ve < J.length; ve++) ue[ve] = J[ve];
        $ && _.touches.length > 0 && !t.hoverData.draggingEles && !t.swipePanning && t.data.bgActivePosistion != null && (t.data.bgActivePosistion = void 0, t.redrawHint("select", true), t.redraw());
      }
    }, false);
    var we;
    t.registerBinding(e, "touchcancel", we = function(_) {
      var $ = t.touchData.start;
      t.touchData.capture = false, $ && $.unactivate();
    });
    var se, ge, pe, Ce;
    if (t.registerBinding(e, "touchend", se = function(_) {
      var $ = t.touchData.start, Z = t.touchData.capture;
      if (Z) _.touches.length === 0 && (t.touchData.capture = false), _.preventDefault();
      else return;
      var G = t.selection;
      t.swipePanning = false, t.hoverData.draggingEles = false;
      var J = t.cy, ue = J.zoom(), te = t.touchData.now, de = t.touchData.earlier;
      if (_.touches[0]) {
        var ce = t.projectIntoViewport(_.touches[0].clientX, _.touches[0].clientY);
        te[0] = ce[0], te[1] = ce[1];
      }
      if (_.touches[1]) {
        var ce = t.projectIntoViewport(_.touches[1].clientX, _.touches[1].clientY);
        te[2] = ce[0], te[3] = ce[1];
      }
      if (_.touches[2]) {
        var ce = t.projectIntoViewport(_.touches[2].clientX, _.touches[2].clientY);
        te[4] = ce[0], te[5] = ce[1];
      }
      var xe = function(pr) {
        return {
          originalEvent: _,
          type: pr,
          position: {
            x: te[0],
            y: te[1]
          }
        };
      };
      $ && $.unactivate();
      var Ie;
      if (t.touchData.cxt) {
        if (Ie = xe("cxttapend"), $ ? $.emit(Ie) : J.emit(Ie), !t.touchData.cxtDragged) {
          var ke = xe("cxttap");
          $ ? $.emit(ke) : J.emit(ke);
        }
        t.touchData.start && (t.touchData.start._private.grabbed = false), t.touchData.cxt = false, t.touchData.start = null, t.redraw();
        return;
      }
      if (!_.touches[2] && J.boxSelectionEnabled() && t.touchData.selecting) {
        t.touchData.selecting = false;
        var ve = J.collection(t.getAllInBox(G[0], G[1], G[2], G[3]));
        G[0] = void 0, G[1] = void 0, G[2] = void 0, G[3] = void 0, G[4] = 0, t.redrawHint("select", true), J.emit(xe("boxend"));
        var Me = function(pr) {
          return pr.selectable() && !pr.selected();
        };
        ve.emit(xe("box")).stdFilter(Me).select().emit(xe("boxselect")), ve.nonempty() && t.redrawHint("eles", true), t.redraw();
      }
      if ($ == null ? void 0 : $.unactivate(), _.touches[2]) t.data.bgActivePosistion = void 0, t.redrawHint("select", true);
      else if (!_.touches[1]) {
        if (!_.touches[0]) {
          if (!_.touches[0]) {
            t.data.bgActivePosistion = void 0, t.redrawHint("select", true);
            var Be = t.dragData.touchDragEles;
            if ($ != null) {
              var vt = $._private.grabbed;
              g(Be), t.redrawHint("drag", true), t.redrawHint("eles", true), vt && ($.emit(xe("freeon")), Be.emit(xe("free")), t.dragData.didDrag && ($.emit(xe("dragfreeon")), Be.emit(xe("dragfree")))), a($, [
                "touchend",
                "tapend",
                "vmouseup",
                "tapdragout"
              ], _, {
                x: te[0],
                y: te[1]
              }), $.unactivate(), t.touchData.start = null;
            } else {
              var st = t.findNearestElement(te[0], te[1], true, true);
              a(st, [
                "touchend",
                "tapend",
                "vmouseup",
                "tapdragout"
              ], _, {
                x: te[0],
                y: te[1]
              });
            }
            var Mt = t.touchData.startPosition[0] - te[0], ut = Mt * Mt, bt = t.touchData.startPosition[1] - te[1], ht = bt * bt, Tt = ut + ht, Cr = Tt * ue * ue;
            t.touchData.singleTouchMoved || ($ || J.$(":selected").unselect([
              "tapunselect"
            ]), a($, [
              "tap",
              "vclick"
            ], _, {
              x: te[0],
              y: te[1]
            }), ge = false, _.timeStamp - Ce <= J.multiClickDebounceTime() ? (pe && clearTimeout(pe), ge = true, Ce = null, a($, [
              "dbltap",
              "vdblclick"
            ], _, {
              x: te[0],
              y: te[1]
            })) : (pe = setTimeout(function() {
              ge || a($, [
                "onetap",
                "voneclick"
              ], _, {
                x: te[0],
                y: te[1]
              });
            }, J.multiClickDebounceTime()), Ce = _.timeStamp)), $ != null && !t.dragData.didDrag && $._private.selectable && Cr < t.touchTapThreshold2 && !t.pinching && (J.selectionType() === "single" ? (J.$(r).unmerge($).unselect([
              "tapunselect"
            ]), $.select([
              "tapselect"
            ])) : $.selected() ? $.unselect([
              "tapunselect"
            ]) : $.select([
              "tapselect"
            ]), t.redrawHint("eles", true)), t.touchData.singleTouchMoved = true;
          }
        }
      }
      for (var lt = 0; lt < te.length; lt++) de[lt] = te[lt];
      t.dragData.didDrag = false, _.touches.length === 0 && (t.touchData.dragDelta = [], t.touchData.startPosition = [
        null,
        null,
        null,
        null,
        null,
        null
      ], t.touchData.startGPosition = null, t.touchData.didSelect = false), _.touches.length < 2 && (_.touches.length === 1 && (t.touchData.startGPosition = [
        _.touches[0].clientX,
        _.touches[0].clientY
      ]), t.pinching = false, t.redrawHint("eles", true), t.redraw());
    }, false), typeof TouchEvent > "u") {
      var ye = [], Pe = function(_) {
        return {
          clientX: _.clientX,
          clientY: _.clientY,
          force: 1,
          identifier: _.pointerId,
          pageX: _.pageX,
          pageY: _.pageY,
          radiusX: _.width / 2,
          radiusY: _.height / 2,
          screenX: _.screenX,
          screenY: _.screenY,
          target: _.target
        };
      }, Oe = function(_) {
        return {
          event: _,
          touch: Pe(_)
        };
      }, $e = function(_) {
        ye.push(Oe(_));
      }, Ue = function(_) {
        for (var $ = 0; $ < ye.length; $++) {
          var Z = ye[$];
          if (Z.event.pointerId === _.pointerId) {
            ye.splice($, 1);
            return;
          }
        }
      }, qe = function(_) {
        var $ = ye.filter(function(Z) {
          return Z.event.pointerId === _.pointerId;
        })[0];
        $.event = _, $.touch = Pe(_);
      }, Se = function(_) {
        _.touches = ye.map(function($) {
          return $.touch;
        });
      }, le = function(_) {
        return _.pointerType === "mouse" || _.pointerType === 4;
      };
      t.registerBinding(t.container, "pointerdown", function(j) {
        le(j) || (j.preventDefault(), $e(j), Se(j), Re(j));
      }), t.registerBinding(t.container, "pointerup", function(j) {
        le(j) || (Ue(j), Se(j), se(j));
      }), t.registerBinding(t.container, "pointercancel", function(j) {
        le(j) || (Ue(j), Se(j), we(j));
      }), t.registerBinding(t.container, "pointermove", function(j) {
        le(j) || (j.preventDefault(), qe(j), Se(j), Te(j));
      });
    }
  };
  var Tr = {};
  Tr.generatePolygon = function(t, e) {
    return this.nodeShapes[t] = {
      renderer: this,
      name: t,
      points: e,
      draw: function(n, a, i, s, o, u) {
        this.renderer.nodeShapeImpl("polygon", n, a, i, s, o, this.points);
      },
      intersectLine: function(n, a, i, s, o, u, l, c) {
        return Sa(o, u, this.points, n, a, i / 2, s / 2, l);
      },
      checkPoint: function(n, a, i, s, o, u, l, c) {
        return Er(n, a, this.points, u, l, s, o, [
          0,
          -1
        ], i);
      },
      hasMiterBounds: t !== "rectangle",
      miterBounds: function(n, a, i, s, o, u) {
        return Sm(this.points, n, a, i, s, o);
      }
    };
  };
  Tr.generateEllipse = function() {
    return this.nodeShapes.ellipse = {
      renderer: this,
      name: "ellipse",
      draw: function(e, r, n, a, i, s) {
        this.renderer.nodeShapeImpl(this.name, e, r, n, a, i);
      },
      intersectLine: function(e, r, n, a, i, s, o, u) {
        return Bm(i, s, e, r, n / 2 + o, a / 2 + o);
      },
      checkPoint: function(e, r, n, a, i, s, o, u) {
        return on(e, r, a, i, s, o, n);
      }
    };
  };
  Tr.generateRoundPolygon = function(t, e) {
    return this.nodeShapes[t] = {
      renderer: this,
      name: t,
      points: e,
      getOrCreateCorners: function(n, a, i, s, o, u, l) {
        if (u[l] !== void 0 && u[l + "-cx"] === n && u[l + "-cy"] === a) return u[l];
        u[l] = new Array(e.length / 2), u[l + "-cx"] = n, u[l + "-cy"] = a;
        var c = i / 2, f = s / 2;
        o = o === "auto" ? Jd(i, s) : o;
        for (var d = new Array(e.length / 2), v = 0; v < e.length / 2; v++) d[v] = {
          x: n + c * e[v * 2],
          y: a + f * e[v * 2 + 1]
        };
        var h, y, p, g, b = d.length;
        for (y = d[b - 1], h = 0; h < b; h++) p = d[h % b], g = d[(h + 1) % b], u[l][h] = Ju(y, p, g, o), y = p, p = g;
        return u[l];
      },
      draw: function(n, a, i, s, o, u, l) {
        this.renderer.nodeShapeImpl("round-polygon", n, a, i, s, o, this.points, this.getOrCreateCorners(a, i, s, o, u, l, "drawCorners"));
      },
      intersectLine: function(n, a, i, s, o, u, l, c, f) {
        return Dm(o, u, this.points, n, a, i, s, l, this.getOrCreateCorners(n, a, i, s, c, f, "corners"));
      },
      checkPoint: function(n, a, i, s, o, u, l, c, f) {
        return Im(n, a, this.points, u, l, s, o, this.getOrCreateCorners(u, l, s, o, c, f, "corners"));
      }
    };
  };
  Tr.generateRoundRectangle = function() {
    return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
      renderer: this,
      name: "round-rectangle",
      points: Ot(4, 0),
      draw: function(e, r, n, a, i, s) {
        this.renderer.nodeShapeImpl(this.name, e, r, n, a, i, this.points, s);
      },
      intersectLine: function(e, r, n, a, i, s, o, u) {
        return jd(i, s, e, r, n, a, o, u);
      },
      checkPoint: function(e, r, n, a, i, s, o, u) {
        var l = a / 2, c = i / 2;
        u = u === "auto" ? Lr(a, i) : u, u = Math.min(l, c, u);
        var f = u * 2;
        return !!(Er(e, r, this.points, s, o, a, i - f, [
          0,
          -1
        ], n) || Er(e, r, this.points, s, o, a - f, i, [
          0,
          -1
        ], n) || on(e, r, f, f, s - l + u, o - c + u, n) || on(e, r, f, f, s + l - u, o - c + u, n) || on(e, r, f, f, s + l - u, o + c - u, n) || on(e, r, f, f, s - l + u, o + c - u, n));
      }
    };
  };
  Tr.generateCutRectangle = function() {
    return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
      renderer: this,
      name: "cut-rectangle",
      cornerLength: $u(),
      points: Ot(4, 0),
      draw: function(e, r, n, a, i, s) {
        this.renderer.nodeShapeImpl(this.name, e, r, n, a, i, null, s);
      },
      generateCutTrianglePts: function(e, r, n, a, i) {
        var s = i === "auto" ? this.cornerLength : i, o = r / 2, u = e / 2, l = n - u, c = n + u, f = a - o, d = a + o;
        return {
          topLeft: [
            l,
            f + s,
            l + s,
            f,
            l + s,
            f + s
          ],
          topRight: [
            c - s,
            f,
            c,
            f + s,
            c - s,
            f + s
          ],
          bottomRight: [
            c,
            d - s,
            c - s,
            d,
            c - s,
            d - s
          ],
          bottomLeft: [
            l + s,
            d,
            l,
            d - s,
            l + s,
            d - s
          ]
        };
      },
      intersectLine: function(e, r, n, a, i, s, o, u) {
        var l = this.generateCutTrianglePts(n + 2 * o, a + 2 * o, e, r, u), c = [].concat.apply([], [
          l.topLeft.splice(0, 4),
          l.topRight.splice(0, 4),
          l.bottomRight.splice(0, 4),
          l.bottomLeft.splice(0, 4)
        ]);
        return Sa(i, s, c, e, r);
      },
      checkPoint: function(e, r, n, a, i, s, o, u) {
        var l = u === "auto" ? this.cornerLength : u;
        if (Er(e, r, this.points, s, o, a, i - 2 * l, [
          0,
          -1
        ], n) || Er(e, r, this.points, s, o, a - 2 * l, i, [
          0,
          -1
        ], n)) return true;
        var c = this.generateCutTrianglePts(a, i, s, o);
        return qt(e, r, c.topLeft) || qt(e, r, c.topRight) || qt(e, r, c.bottomRight) || qt(e, r, c.bottomLeft);
      }
    };
  };
  Tr.generateBarrel = function() {
    return this.nodeShapes.barrel = {
      renderer: this,
      name: "barrel",
      points: Ot(4, 0),
      draw: function(e, r, n, a, i, s) {
        this.renderer.nodeShapeImpl(this.name, e, r, n, a, i);
      },
      intersectLine: function(e, r, n, a, i, s, o, u) {
        var l = 0.15, c = 0.5, f = 0.85, d = this.generateBarrelBezierPts(n + 2 * o, a + 2 * o, e, r), v = function(p) {
          var g = zn({
            x: p[0],
            y: p[1]
          }, {
            x: p[2],
            y: p[3]
          }, {
            x: p[4],
            y: p[5]
          }, l), b = zn({
            x: p[0],
            y: p[1]
          }, {
            x: p[2],
            y: p[3]
          }, {
            x: p[4],
            y: p[5]
          }, c), m = zn({
            x: p[0],
            y: p[1]
          }, {
            x: p[2],
            y: p[3]
          }, {
            x: p[4],
            y: p[5]
          }, f);
          return [
            p[0],
            p[1],
            g.x,
            g.y,
            b.x,
            b.y,
            m.x,
            m.y,
            p[4],
            p[5]
          ];
        }, h = [].concat(v(d.topLeft), v(d.topRight), v(d.bottomRight), v(d.bottomLeft));
        return Sa(i, s, h, e, r);
      },
      generateBarrelBezierPts: function(e, r, n, a) {
        var i = r / 2, s = e / 2, o = n - s, u = n + s, l = a - i, c = a + i, f = ou(e, r), d = f.heightOffset, v = f.widthOffset, h = f.ctrlPtOffsetPct * e, y = {
          topLeft: [
            o,
            l + d,
            o + h,
            l,
            o + v,
            l
          ],
          topRight: [
            u - v,
            l,
            u - h,
            l,
            u,
            l + d
          ],
          bottomRight: [
            u,
            c - d,
            u - h,
            c,
            u - v,
            c
          ],
          bottomLeft: [
            o + v,
            c,
            o + h,
            c,
            o,
            c - d
          ]
        };
        return y.topLeft.isTop = true, y.topRight.isTop = true, y.bottomLeft.isBottom = true, y.bottomRight.isBottom = true, y;
      },
      checkPoint: function(e, r, n, a, i, s, o, u) {
        var l = ou(a, i), c = l.heightOffset, f = l.widthOffset;
        if (Er(e, r, this.points, s, o, a, i - 2 * c, [
          0,
          -1
        ], n) || Er(e, r, this.points, s, o, a - 2 * f, i, [
          0,
          -1
        ], n)) return true;
        for (var d = this.generateBarrelBezierPts(a, i, s, o), v = function(T, C, R) {
          var A = R[4], P = R[2], k = R[0], I = R[5], M = R[1], D = Math.min(A, k), B = Math.max(A, k), O = Math.min(I, M), z = Math.max(I, M);
          if (D <= T && T <= B && O <= C && C <= z) {
            var U = Om(A, P, k), N = Am(U[0], U[1], U[2], T), L = N.filter(function(H) {
              return 0 <= H && H <= 1;
            });
            if (L.length > 0) return L[0];
          }
          return null;
        }, h = Object.keys(d), y = 0; y < h.length; y++) {
          var p = h[y], g = d[p], b = v(e, r, g);
          if (b != null) {
            var m = g[5], x = g[3], E = g[1], S = wt(m, x, E, b);
            if (g.isTop && S <= r || g.isBottom && r <= S) return true;
          }
        }
        return false;
      }
    };
  };
  Tr.generateBottomRoundrectangle = function() {
    return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
      renderer: this,
      name: "bottom-round-rectangle",
      points: Ot(4, 0),
      draw: function(e, r, n, a, i, s) {
        this.renderer.nodeShapeImpl(this.name, e, r, n, a, i, this.points, s);
      },
      intersectLine: function(e, r, n, a, i, s, o, u) {
        var l = e - (n / 2 + o), c = r - (a / 2 + o), f = c, d = e + (n / 2 + o), v = Br(i, s, e, r, l, c, d, f, false);
        return v.length > 0 ? v : jd(i, s, e, r, n, a, o, u);
      },
      checkPoint: function(e, r, n, a, i, s, o, u) {
        u = u === "auto" ? Lr(a, i) : u;
        var l = 2 * u;
        if (Er(e, r, this.points, s, o, a, i - l, [
          0,
          -1
        ], n) || Er(e, r, this.points, s, o, a - l, i, [
          0,
          -1
        ], n)) return true;
        var c = a / 2 + 2 * n, f = i / 2 + 2 * n, d = [
          s - c,
          o - f,
          s - c,
          o,
          s + c,
          o,
          s + c,
          o - f
        ];
        return !!(qt(e, r, d) || on(e, r, l, l, s + a / 2 - u, o + i / 2 - u, n) || on(e, r, l, l, s - a / 2 + u, o + i / 2 - u, n));
      }
    };
  };
  Tr.registerNodeShapes = function() {
    var t = this.nodeShapes = {}, e = this;
    this.generateEllipse(), this.generatePolygon("triangle", Ot(3, 0)), this.generateRoundPolygon("round-triangle", Ot(3, 0)), this.generatePolygon("rectangle", Ot(4, 0)), t.square = t.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
    {
      var r = [
        0,
        1,
        1,
        0,
        0,
        -1,
        -1,
        0
      ];
      this.generatePolygon("diamond", r), this.generateRoundPolygon("round-diamond", r);
    }
    this.generatePolygon("pentagon", Ot(5, 0)), this.generateRoundPolygon("round-pentagon", Ot(5, 0)), this.generatePolygon("hexagon", Ot(6, 0)), this.generateRoundPolygon("round-hexagon", Ot(6, 0)), this.generatePolygon("heptagon", Ot(7, 0)), this.generateRoundPolygon("round-heptagon", Ot(7, 0)), this.generatePolygon("octagon", Ot(8, 0)), this.generateRoundPolygon("round-octagon", Ot(8, 0));
    var n = new Array(20);
    {
      var a = su(5, 0), i = su(5, Math.PI / 5), s = 0.5 * (3 - Math.sqrt(5));
      s *= 1.57;
      for (var o = 0; o < i.length / 2; o++) i[o * 2] *= s, i[o * 2 + 1] *= s;
      for (var o = 0; o < 20 / 4; o++) n[o * 4] = a[o * 2], n[o * 4 + 1] = a[o * 2 + 1], n[o * 4 + 2] = i[o * 2], n[o * 4 + 3] = i[o * 2 + 1];
    }
    n = Xd(n), this.generatePolygon("star", n), this.generatePolygon("vee", [
      -1,
      -1,
      0,
      -0.333,
      1,
      -1,
      0,
      1
    ]), this.generatePolygon("rhomboid", [
      -1,
      -1,
      0.333,
      -1,
      1,
      1,
      -0.333,
      1
    ]), this.generatePolygon("right-rhomboid", [
      -0.333,
      -1,
      1,
      -1,
      0.333,
      1,
      -1,
      1
    ]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [
      -1,
      -0.95,
      -0.75,
      0,
      -1,
      0.95,
      1,
      0.95,
      0.75,
      0,
      1,
      -0.95
    ]);
    {
      var u = [
        -1,
        -1,
        0.25,
        -1,
        1,
        0,
        0.25,
        1,
        -1,
        1
      ];
      this.generatePolygon("tag", u), this.generateRoundPolygon("round-tag", u);
    }
    t.makePolygon = function(l) {
      var c = l.join("$"), f = "polygon-" + c, d;
      return (d = this[f]) ? d : e.generatePolygon(f, l);
    };
  };
  var qa = {};
  qa.timeToRender = function() {
    return this.redrawTotalTime / this.redrawCount;
  };
  qa.redraw = function(t) {
    t = t || Wd();
    var e = this;
    e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = true, e.renderOptions = t;
  };
  qa.beforeRender = function(t, e) {
    if (!this.destroyed) {
      e == null && tt("Priority is not optional for beforeRender");
      var r = this.beforeRenderCallbacks;
      r.push({
        fn: t,
        priority: e
      }), r.sort(function(n, a) {
        return a.priority - n.priority;
      });
    }
  };
  var Bf = function(e, r, n) {
    for (var a = e.beforeRenderCallbacks, i = 0; i < a.length; i++) a[i].fn(r, n);
  };
  qa.startRenderLoop = function() {
    var t = this, e = t.cy;
    if (!t.renderLoopStarted) {
      t.renderLoopStarted = true;
      var r = function(a) {
        if (!t.destroyed) {
          if (!e.batching()) if (t.requestedFrame && !t.skipFrame) {
            Bf(t, true, a);
            var i = xr();
            t.render(t.renderOptions);
            var s = t.lastDrawTime = xr();
            t.averageRedrawTime === void 0 && (t.averageRedrawTime = s - i), t.redrawCount === void 0 && (t.redrawCount = 0), t.redrawCount++, t.redrawTotalTime === void 0 && (t.redrawTotalTime = 0);
            var o = s - i;
            t.redrawTotalTime += o, t.lastRedrawTime = o, t.averageRedrawTime = t.averageRedrawTime / 2 + o / 2, t.requestedFrame = false;
          } else Bf(t, false, a);
          t.skipFrame = false, Ii(r);
        }
      };
      Ii(r);
    }
  };
  var Xb = function(e) {
    this.init(e);
  }, Jv = Xb, Qn = Jv.prototype;
  Qn.clientFunctions = [
    "redrawHint",
    "render",
    "renderTo",
    "matchCanvasSize",
    "nodeShapeImpl",
    "arrowShapeImpl"
  ];
  Qn.init = function(t) {
    var e = this;
    e.options = t, e.cy = t.cy;
    var r = e.container = t.cy.container(), n = e.cy.window();
    if (n) {
      var a = n.document, i = a.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", u = a.getElementById(s) != null;
      if (r.className.indexOf(o) < 0 && (r.className = (r.className || "") + " " + o), !u) {
        var l = a.createElement("style");
        l.id = s, l.textContent = "." + o + " { position: relative; }", i.insertBefore(l, i.children[0]);
      }
      var c = n.getComputedStyle(r), f = c.getPropertyValue("position");
      f === "static" && Ge("A Cytoscape container has style position:static and so can not use UI extensions properly");
    }
    e.selection = [
      void 0,
      void 0,
      void 0,
      void 0,
      0
    ], e.bezierProjPcts = [
      0.05,
      0.225,
      0.4,
      0.5,
      0.6,
      0.775,
      0.95
    ], e.hoverData = {
      down: null,
      last: null,
      downTime: null,
      triggerMode: null,
      dragging: false,
      initialPan: [
        null,
        null
      ],
      capture: false
    }, e.dragData = {
      possibleDragElements: []
    }, e.touchData = {
      start: null,
      capture: false,
      startPosition: [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      singleTouchStartTime: null,
      singleTouchMoved: true,
      now: [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      earlier: [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }, e.redraws = 0, e.showFps = t.showFps, e.debug = t.debug, e.webgl = t.webgl, e.hideEdgesOnViewport = t.hideEdgesOnViewport, e.textureOnViewport = t.textureOnViewport, e.wheelSensitivity = t.wheelSensitivity, e.motionBlurEnabled = t.motionBlur, e.forcedPixelRatio = ae(t.pixelRatio) ? t.pixelRatio : null, e.motionBlur = t.motionBlur, e.motionBlurOpacity = t.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = false, e.clearedForMotionBlur = [], e.desktopTapThreshold = t.desktopTapThreshold, e.desktopTapThreshold2 = t.desktopTapThreshold * t.desktopTapThreshold, e.touchTapThreshold = t.touchTapThreshold, e.touchTapThreshold2 = t.touchTapThreshold * t.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
      animations: 400,
      eleCalcs: 300,
      eleTxrDeq: 200,
      lyrTxrDeq: 150,
      lyrTxrSkip: 100
    }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
  };
  Qn.notify = function(t, e) {
    var r = this, n = r.cy;
    if (!this.destroyed) {
      if (t === "init") {
        r.load();
        return;
      }
      if (t === "destroy") {
        r.destroy();
        return;
      }
      (t === "add" || t === "remove" || t === "move" && n.hasCompoundNodes() || t === "load" || t === "zorder" || t === "mount") && r.invalidateCachedZSortedEles(), t === "viewport" && r.redrawHint("select", true), t === "gc" && r.redrawHint("gc", true), (t === "load" || t === "resize" || t === "mount") && (r.invalidateContainerClientCoordsCache(), r.matchCanvasSize(r.container)), r.redrawHint("eles", true), r.redrawHint("drag", true), this.startRenderLoop(), this.redraw();
    }
  };
  Qn.destroy = function() {
    var t = this;
    t.destroyed = true, t.cy.stopAnimationLoop();
    for (var e = 0; e < t.bindings.length; e++) {
      var r = t.bindings[e], n = r, a = n.target;
      (a.off || a.removeEventListener).apply(a, n.args);
    }
    if (t.bindings = [], t.beforeRenderCallbacks = [], t.onUpdateEleCalcsFns = [], t.removeObserver && t.removeObserver.disconnect(), t.styleObserver && t.styleObserver.disconnect(), t.resizeObserver && t.resizeObserver.disconnect(), t.labelCalcDiv) try {
      document.body.removeChild(t.labelCalcDiv);
    } catch {
    }
  };
  Qn.isHeadless = function() {
    return false;
  };
  [
    Xu,
    jv,
    Xv,
    Jn,
    Tr,
    qa
  ].forEach(function(t) {
    Ee(Qn, t);
  });
  var qo = 1e3 / 60, Qv = {
    setupDequeueing: function(e) {
      return function() {
        var n = this, a = this.renderer;
        if (!n.dequeueingSetup) {
          n.dequeueingSetup = true;
          var i = La(function() {
            a.redrawHint("eles", true), a.redrawHint("drag", true), a.redraw();
          }, e.deqRedrawThreshold), s = function(l, c) {
            var f = xr(), d = a.averageRedrawTime, v = a.lastRedrawTime, h = [], y = a.cy.extent(), p = a.getPixelRatio();
            for (l || a.flushRenderedStyleQueue(); ; ) {
              var g = xr(), b = g - f, m = g - c;
              if (v < qo) {
                var x = qo - (l ? d : 0);
                if (m >= e.deqFastCost * x) break;
              } else if (l) {
                if (b >= e.deqCost * v || b >= e.deqAvgCost * d) break;
              } else if (m >= e.deqNoDrawCost * qo) break;
              var E = e.deq(n, p, y);
              if (E.length > 0) for (var S = 0; S < E.length; S++) h.push(E[S]);
              else break;
            }
            h.length > 0 && (e.onDeqd(n, h), !l && e.shouldRedraw(n, h, p, y) && i());
          }, o = e.priority || Nu;
          a.beforeRender(s, o(n));
        }
      };
    }
  }, Jb = (function() {
    function t(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Bi;
      Zr(this, t), this.idsByKey = new br(), this.keyForId = new br(), this.cachesByLvl = new br(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = r;
    }
    return Gr(t, [
      {
        key: "getIdsFor",
        value: function(r) {
          r == null && tt("Can not get id list for null key");
          var n = this.idsByKey, a = this.idsByKey.get(r);
          return a || (a = new Kn(), n.set(r, a)), a;
        }
      },
      {
        key: "addIdForKey",
        value: function(r, n) {
          r != null && this.getIdsFor(r).add(n);
        }
      },
      {
        key: "deleteIdForKey",
        value: function(r, n) {
          r != null && this.getIdsFor(r).delete(n);
        }
      },
      {
        key: "getNumberOfIdsForKey",
        value: function(r) {
          return r == null ? 0 : this.getIdsFor(r).size;
        }
      },
      {
        key: "updateKeyMappingFor",
        value: function(r) {
          var n = r.id(), a = this.keyForId.get(n), i = this.getKey(r);
          this.deleteIdForKey(a, n), this.addIdForKey(i, n), this.keyForId.set(n, i);
        }
      },
      {
        key: "deleteKeyMappingFor",
        value: function(r) {
          var n = r.id(), a = this.keyForId.get(n);
          this.deleteIdForKey(a, n), this.keyForId.delete(n);
        }
      },
      {
        key: "keyHasChangedFor",
        value: function(r) {
          var n = r.id(), a = this.keyForId.get(n), i = this.getKey(r);
          return a !== i;
        }
      },
      {
        key: "isInvalid",
        value: function(r) {
          return this.keyHasChangedFor(r) || this.doesEleInvalidateKey(r);
        }
      },
      {
        key: "getCachesAt",
        value: function(r) {
          var n = this.cachesByLvl, a = this.lvls, i = n.get(r);
          return i || (i = new br(), n.set(r, i), a.push(r)), i;
        }
      },
      {
        key: "getCache",
        value: function(r, n) {
          return this.getCachesAt(n).get(r);
        }
      },
      {
        key: "get",
        value: function(r, n) {
          var a = this.getKey(r), i = this.getCache(a, n);
          return i != null && this.updateKeyMappingFor(r), i;
        }
      },
      {
        key: "getForCachedKey",
        value: function(r, n) {
          var a = this.keyForId.get(r.id()), i = this.getCache(a, n);
          return i;
        }
      },
      {
        key: "hasCache",
        value: function(r, n) {
          return this.getCachesAt(n).has(r);
        }
      },
      {
        key: "has",
        value: function(r, n) {
          var a = this.getKey(r);
          return this.hasCache(a, n);
        }
      },
      {
        key: "setCache",
        value: function(r, n, a) {
          a.key = r, this.getCachesAt(n).set(r, a);
        }
      },
      {
        key: "set",
        value: function(r, n, a) {
          var i = this.getKey(r);
          this.setCache(i, n, a), this.updateKeyMappingFor(r);
        }
      },
      {
        key: "deleteCache",
        value: function(r, n) {
          this.getCachesAt(n).delete(r);
        }
      },
      {
        key: "delete",
        value: function(r, n) {
          var a = this.getKey(r);
          this.deleteCache(a, n);
        }
      },
      {
        key: "invalidateKey",
        value: function(r) {
          var n = this;
          this.lvls.forEach(function(a) {
            return n.deleteCache(r, a);
          });
        }
      },
      {
        key: "invalidate",
        value: function(r) {
          var n = r.id(), a = this.keyForId.get(n);
          this.deleteKeyMappingFor(r);
          var i = this.doesEleInvalidateKey(r);
          return i && this.invalidateKey(a), i || this.getNumberOfIdsForKey(a) === 0;
        }
      }
    ]);
  })(), Mf = 25, ui = 50, Ti = -4, wu = 3, eh = 7.99, Qb = 8, ew = 1024, tw = 1024, rw = 1024, nw = 0.2, aw = 0.8, iw = 10, sw = 0.15, ow = 0.1, uw = 0.9, lw = 0.9, cw = 100, fw = 1, Dn = {
    dequeue: "dequeue",
    downscale: "downscale",
    highQuality: "highQuality"
  }, dw = At({
    getKey: null,
    doesEleInvalidateKey: Bi,
    drawElement: null,
    getBoundingBox: null,
    getRotationPoint: null,
    getRotationOffset: null,
    isVisible: qd,
    allowEdgeTxrCaching: true,
    allowParentTxrCaching: true
  }), va = function(e, r) {
    var n = this;
    n.renderer = e, n.onDequeues = [];
    var a = dw(r);
    Ee(n, a), n.lookup = new Jb(a.getKey, a.doesEleInvalidateKey), n.setupDequeueing();
  }, yt = va.prototype;
  yt.reasons = Dn;
  yt.getTextureQueue = function(t) {
    var e = this;
    return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[t] = e.eleImgCaches[t] || [];
  };
  yt.getRetiredTextureQueue = function(t) {
    var e = this, r = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, n = r[t] = r[t] || [];
    return n;
  };
  yt.getElementQueue = function() {
    var t = this, e = t.eleCacheQueue = t.eleCacheQueue || new Fa(function(r, n) {
      return n.reqs - r.reqs;
    });
    return e;
  };
  yt.getElementKeyToQueue = function() {
    var t = this, e = t.eleKeyToCacheQueue = t.eleKeyToCacheQueue || {};
    return e;
  };
  yt.getElement = function(t, e, r, n, a) {
    var i = this, s = this.renderer, o = s.cy.zoom(), u = this.lookup;
    if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !t.visible() || t.removed() || !i.allowEdgeTxrCaching && t.isEdge() || !i.allowParentTxrCaching && t.isParent()) return null;
    if (n == null && (n = Math.ceil(Lu(o * r))), n < Ti) n = Ti;
    else if (o >= eh || n > wu) return null;
    var l = Math.pow(2, n), c = e.h * l, f = e.w * l, d = s.eleTextBiggerThanMin(t, l);
    if (!this.isVisible(t, d)) return null;
    var v = u.get(t, n);
    if (v && v.invalidated && (v.invalidated = false, v.texture.invalidatedWidth -= v.width), v) return v;
    var h;
    if (c <= Mf ? h = Mf : c <= ui ? h = ui : h = Math.ceil(c / ui) * ui, c > rw || f > tw) return null;
    var y = i.getTextureQueue(h), p = y[y.length - 2], g = function() {
      return i.recycleTexture(h, f) || i.addTexture(h, f);
    };
    p || (p = y[y.length - 1]), p || (p = g()), p.width - p.usedWidth < f && (p = g());
    for (var b = function(D) {
      return D && D.scaledLabelShown === d;
    }, m = a && a === Dn.dequeue, x = a && a === Dn.highQuality, E = a && a === Dn.downscale, S, w = n + 1; w <= wu; w++) {
      var T = u.get(t, w);
      if (T) {
        S = T;
        break;
      }
    }
    var C = S && S.level === n + 1 ? S : null, R = function() {
      p.context.drawImage(C.texture.canvas, C.x, 0, C.width, C.height, p.usedWidth, 0, f, c);
    };
    if (p.context.setTransform(1, 0, 0, 1, 0, 0), p.context.clearRect(p.usedWidth, 0, f, h), b(C)) R();
    else if (b(S)) if (x) {
      for (var A = S.level; A > n; A--) C = i.getElement(t, e, r, A, Dn.downscale);
      R();
    } else return i.queueElement(t, S.level - 1), S;
    else {
      var P;
      if (!m && !x && !E) for (var k = n - 1; k >= Ti; k--) {
        var I = u.get(t, k);
        if (I) {
          P = I;
          break;
        }
      }
      if (b(P)) return i.queueElement(t, n), P;
      p.context.translate(p.usedWidth, 0), p.context.scale(l, l), this.drawElement(p.context, t, e, d, false), p.context.scale(1 / l, 1 / l), p.context.translate(-p.usedWidth, 0);
    }
    return v = {
      x: p.usedWidth,
      texture: p,
      level: n,
      scale: l,
      width: f,
      height: c,
      scaledLabelShown: d
    }, p.usedWidth += Math.ceil(f + Qb), p.eleCaches.push(v), u.set(t, n, v), i.checkTextureFullness(p), v;
  };
  yt.invalidateElements = function(t) {
    for (var e = 0; e < t.length; e++) this.invalidateElement(t[e]);
  };
  yt.invalidateElement = function(t) {
    var e = this, r = e.lookup, n = [], a = r.isInvalid(t);
    if (a) {
      for (var i = Ti; i <= wu; i++) {
        var s = r.getForCachedKey(t, i);
        s && n.push(s);
      }
      var o = r.invalidate(t);
      if (o) for (var u = 0; u < n.length; u++) {
        var l = n[u], c = l.texture;
        c.invalidatedWidth += l.width, l.invalidated = true, e.checkTextureUtility(c);
      }
      e.removeFromQueue(t);
    }
  };
  yt.checkTextureUtility = function(t) {
    t.invalidatedWidth >= nw * t.width && this.retireTexture(t);
  };
  yt.checkTextureFullness = function(t) {
    var e = this, r = e.getTextureQueue(t.height);
    t.usedWidth / t.width > aw && t.fullnessChecks >= iw ? zr(r, t) : t.fullnessChecks++;
  };
  yt.retireTexture = function(t) {
    var e = this, r = t.height, n = e.getTextureQueue(r), a = this.lookup;
    zr(n, t), t.retired = true;
    for (var i = t.eleCaches, s = 0; s < i.length; s++) {
      var o = i[s];
      a.deleteCache(o.key, o.level);
    }
    zu(i);
    var u = e.getRetiredTextureQueue(r);
    u.push(t);
  };
  yt.addTexture = function(t, e) {
    var r = this, n = r.getTextureQueue(t), a = {};
    return n.push(a), a.eleCaches = [], a.height = t, a.width = Math.max(ew, e), a.usedWidth = 0, a.invalidatedWidth = 0, a.fullnessChecks = 0, a.canvas = r.renderer.makeOffscreenCanvas(a.width, a.height), a.context = a.canvas.getContext("2d"), a;
  };
  yt.recycleTexture = function(t, e) {
    for (var r = this, n = r.getTextureQueue(t), a = r.getRetiredTextureQueue(t), i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.width >= e) return s.retired = false, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, zu(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), zr(a, s), n.push(s), s;
    }
  };
  yt.queueElement = function(t, e) {
    var r = this, n = r.getElementQueue(), a = r.getElementKeyToQueue(), i = this.getKey(t), s = a[i];
    if (s) s.level = Math.max(s.level, e), s.eles.merge(t), s.reqs++, n.updateItem(s);
    else {
      var o = {
        eles: t.spawn().merge(t),
        level: e,
        reqs: 1,
        key: i
      };
      n.push(o), a[i] = o;
    }
  };
  yt.dequeue = function(t) {
    for (var e = this, r = e.getElementQueue(), n = e.getElementKeyToQueue(), a = [], i = e.lookup, s = 0; s < fw && r.size() > 0; s++) {
      var o = r.pop(), u = o.key, l = o.eles[0], c = i.hasCache(l, o.level);
      if (n[u] = null, c) continue;
      a.push(o);
      var f = e.getBoundingBox(l);
      e.getElement(l, f, t, o.level, Dn.dequeue);
    }
    return a;
  };
  yt.removeFromQueue = function(t) {
    var e = this, r = e.getElementQueue(), n = e.getElementKeyToQueue(), a = this.getKey(t), i = n[a];
    i != null && (i.eles.length === 1 ? (i.reqs = Ou, r.updateItem(i), r.pop(), n[a] = null) : i.eles.unmerge(t));
  };
  yt.onDequeue = function(t) {
    this.onDequeues.push(t);
  };
  yt.offDequeue = function(t) {
    zr(this.onDequeues, t);
  };
  yt.setupDequeueing = Qv.setupDequeueing({
    deqRedrawThreshold: cw,
    deqCost: sw,
    deqAvgCost: ow,
    deqNoDrawCost: uw,
    deqFastCost: lw,
    deq: function(e, r, n) {
      return e.dequeue(r, n);
    },
    onDeqd: function(e, r) {
      for (var n = 0; n < e.onDequeues.length; n++) {
        var a = e.onDequeues[n];
        a(r);
      }
    },
    shouldRedraw: function(e, r, n, a) {
      for (var i = 0; i < r.length; i++) for (var s = r[i].eles, o = 0; o < s.length; o++) {
        var u = s[o].boundingBox();
        if (Vu(u, a)) return true;
      }
      return false;
    },
    priority: function(e) {
      return e.renderer.beforeRenderPriorities.eleTxrDeq;
    }
  });
  var vw = 1, pa = -4, Vi = 2, hw = 3.99, gw = 50, pw = 50, mw = 0.15, yw = 0.1, bw = 0.9, ww = 0.9, xw = 1, Df = 250, Ew = 4e3 * 4e3, Of = 32767, Tw = true, th = function(e) {
    var r = this, n = r.renderer = e, a = n.cy;
    r.layersByLevel = {}, r.firstGet = true, r.lastInvalidationTime = xr() - 2 * Df, r.skipping = false, r.eleTxrDeqs = a.collection(), r.scheduleElementRefinement = La(function() {
      r.refineElementTextures(r.eleTxrDeqs), r.eleTxrDeqs.unmerge(r.eleTxrDeqs);
    }, pw), n.beforeRender(function(s, o) {
      o - r.lastInvalidationTime <= Df ? r.skipping = true : r.skipping = false;
    }, n.beforeRenderPriorities.lyrTxrSkip);
    var i = function(o, u) {
      return u.reqs - o.reqs;
    };
    r.layersQueue = new Fa(i), r.setupDequeueing();
  }, kt = th.prototype, Nf = 0, Sw = Math.pow(2, 53) - 1;
  kt.makeLayer = function(t, e) {
    var r = Math.pow(2, e), n = Math.ceil(t.w * r), a = Math.ceil(t.h * r), i = this.renderer.makeOffscreenCanvas(n, a), s = {
      id: Nf = ++Nf % Sw,
      bb: t,
      level: e,
      width: n,
      height: a,
      canvas: i,
      context: i.getContext("2d"),
      eles: [],
      elesQueue: [],
      reqs: 0
    }, o = s.context, u = -s.bb.x1, l = -s.bb.y1;
    return o.scale(r, r), o.translate(u, l), s;
  };
  kt.getLayers = function(t, e, r) {
    var n = this, a = n.renderer, i = a.cy, s = i.zoom(), o = n.firstGet;
    if (n.firstGet = false, r == null) {
      if (r = Math.ceil(Lu(s * e)), r < pa) r = pa;
      else if (s >= hw || r > Vi) return null;
    }
    n.validateLayersElesOrdering(r, t);
    var u = n.layersByLevel, l = Math.pow(2, r), c = u[r] = u[r] || [], f, d = n.levelIsComplete(r, t), v, h = function() {
      var R = function(M) {
        if (n.validateLayersElesOrdering(M, t), n.levelIsComplete(M, t)) return v = u[M], true;
      }, A = function(M) {
        if (!v) for (var D = r + M; pa <= D && D <= Vi && !R(D); D += M) ;
      };
      A(1), A(-1);
      for (var P = c.length - 1; P >= 0; P--) {
        var k = c[P];
        k.invalid && zr(c, k);
      }
    };
    if (!d) h();
    else return c;
    var y = function() {
      if (!f) {
        f = zt();
        for (var R = 0; R < t.length; R++) xm(f, t[R].boundingBox());
      }
      return f;
    }, p = function(R) {
      R = R || {};
      var A = R.after;
      y();
      var P = Math.ceil(f.w * l), k = Math.ceil(f.h * l);
      if (P > Of || k > Of) return null;
      var I = P * k;
      if (I > Ew) return null;
      var M = n.makeLayer(f, r);
      if (A != null) {
        var D = c.indexOf(A) + 1;
        c.splice(D, 0, M);
      } else (R.insert === void 0 || R.insert) && c.unshift(M);
      return M;
    };
    if (n.skipping && !o) return null;
    for (var g = null, b = t.length / vw, m = !o, x = 0; x < t.length; x++) {
      var E = t[x], S = E._private.rscratch, w = S.imgLayerCaches = S.imgLayerCaches || {}, T = w[r];
      if (T) {
        g = T;
        continue;
      }
      if ((!g || g.eles.length >= b || !Yd(g.bb, E.boundingBox())) && (g = p({
        insert: true,
        after: g
      }), !g)) return null;
      v || m ? n.queueLayer(g, E) : n.drawEleInLayer(g, E, r, e), g.eles.push(E), w[r] = g;
    }
    return v || (m ? null : c);
  };
  kt.getEleLevelForLayerLevel = function(t, e) {
    return t;
  };
  kt.drawEleInLayer = function(t, e, r, n) {
    var a = this, i = this.renderer, s = t.context, o = e.boundingBox();
    o.w === 0 || o.h === 0 || !e.visible() || (r = a.getEleLevelForLayerLevel(r, n), i.setImgSmoothing(s, false), i.drawCachedElement(s, e, null, null, r, Tw), i.setImgSmoothing(s, true));
  };
  kt.levelIsComplete = function(t, e) {
    var r = this, n = r.layersByLevel[t];
    if (!n || n.length === 0) return false;
    for (var a = 0, i = 0; i < n.length; i++) {
      var s = n[i];
      if (s.reqs > 0 || s.invalid) return false;
      a += s.eles.length;
    }
    return a === e.length;
  };
  kt.validateLayersElesOrdering = function(t, e) {
    var r = this.layersByLevel[t];
    if (r) for (var n = 0; n < r.length; n++) {
      for (var a = r[n], i = -1, s = 0; s < e.length; s++) if (a.eles[0] === e[s]) {
        i = s;
        break;
      }
      if (i < 0) {
        this.invalidateLayer(a);
        continue;
      }
      for (var o = i, s = 0; s < a.eles.length; s++) if (a.eles[s] !== e[o + s]) {
        this.invalidateLayer(a);
        break;
      }
    }
  };
  kt.updateElementsInLayers = function(t, e) {
    for (var r = this, n = Da(t[0]), a = 0; a < t.length; a++) for (var i = n ? null : t[a], s = n ? t[a] : t[a].ele, o = s._private.rscratch, u = o.imgLayerCaches = o.imgLayerCaches || {}, l = pa; l <= Vi; l++) {
      var c = u[l];
      c && (i && r.getEleLevelForLayerLevel(c.level) !== i.level || e(c, s, i));
    }
  };
  kt.haveLayers = function() {
    for (var t = this, e = false, r = pa; r <= Vi; r++) {
      var n = t.layersByLevel[r];
      if (n && n.length > 0) {
        e = true;
        break;
      }
    }
    return e;
  };
  kt.invalidateElements = function(t) {
    var e = this;
    t.length !== 0 && (e.lastInvalidationTime = xr(), !(t.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(t, function(n, a, i) {
      e.invalidateLayer(n);
    }));
  };
  kt.invalidateLayer = function(t) {
    if (this.lastInvalidationTime = xr(), !t.invalid) {
      var e = t.level, r = t.eles, n = this.layersByLevel[e];
      zr(n, t), t.elesQueue = [], t.invalid = true, t.replacement && (t.replacement.invalid = true);
      for (var a = 0; a < r.length; a++) {
        var i = r[a]._private.rscratch.imgLayerCaches;
        i && (i[e] = null);
      }
    }
  };
  kt.refineElementTextures = function(t) {
    var e = this;
    e.updateElementsInLayers(t, function(n, a, i) {
      var s = n.replacement;
      if (s || (s = n.replacement = e.makeLayer(n.bb, n.level), s.replaces = n, s.eles = n.eles), !s.reqs) for (var o = 0; o < s.eles.length; o++) e.queueLayer(s, s.eles[o]);
    });
  };
  kt.enqueueElementRefinement = function(t) {
    this.eleTxrDeqs.merge(t), this.scheduleElementRefinement();
  };
  kt.queueLayer = function(t, e) {
    var r = this, n = r.layersQueue, a = t.elesQueue, i = a.hasId = a.hasId || {};
    if (!t.replacement) {
      if (e) {
        if (i[e.id()]) return;
        a.push(e), i[e.id()] = true;
      }
      t.reqs ? (t.reqs++, n.updateItem(t)) : (t.reqs = 1, n.push(t));
    }
  };
  kt.dequeue = function(t) {
    for (var e = this, r = e.layersQueue, n = [], a = 0; a < xw && r.size() !== 0; ) {
      var i = r.peek();
      if (i.replacement) {
        r.pop();
        continue;
      }
      if (i.replaces && i !== i.replaces.replacement) {
        r.pop();
        continue;
      }
      if (i.invalid) {
        r.pop();
        continue;
      }
      var s = i.elesQueue.shift();
      s && (e.drawEleInLayer(i, s, i.level, t), a++), n.length === 0 && n.push(true), i.elesQueue.length === 0 && (r.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
    }
    return n;
  };
  kt.applyLayerReplacement = function(t) {
    var e = this, r = e.layersByLevel[t.level], n = t.replaces, a = r.indexOf(n);
    if (!(a < 0 || n.invalid)) {
      r[a] = t;
      for (var i = 0; i < t.eles.length; i++) {
        var s = t.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
        o && (o[t.level] = t);
      }
      e.requestRedraw();
    }
  };
  kt.requestRedraw = La(function() {
    var t = this.renderer;
    t.redrawHint("eles", true), t.redrawHint("drag", true), t.redraw();
  }, 100);
  kt.setupDequeueing = Qv.setupDequeueing({
    deqRedrawThreshold: gw,
    deqCost: mw,
    deqAvgCost: yw,
    deqNoDrawCost: bw,
    deqFastCost: ww,
    deq: function(e, r) {
      return e.dequeue(r);
    },
    onDeqd: Nu,
    shouldRedraw: qd,
    priority: function(e) {
      return e.renderer.beforeRenderPriorities.lyrTxrDeq;
    }
  });
  var rh = {}, zf;
  function Cw(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      t.lineTo(n.x, n.y);
    }
  }
  function Rw(t, e, r) {
    for (var n, a = 0; a < e.length; a++) {
      var i = e[a];
      a === 0 && (n = i), t.lineTo(i.x, i.y);
    }
    t.quadraticCurveTo(r.x, r.y, n.x, n.y);
  }
  function Lf(t, e, r) {
    t.beginPath && t.beginPath();
    for (var n = e, a = 0; a < n.length; a++) {
      var i = n[a];
      t.lineTo(i.x, i.y);
    }
    var s = r, o = r[0];
    t.moveTo(o.x, o.y);
    for (var a = 1; a < s.length; a++) {
      var i = s[a];
      t.lineTo(i.x, i.y);
    }
    t.closePath && t.closePath();
  }
  function Aw(t, e, r, n, a) {
    t.beginPath && t.beginPath(), t.arc(r, n, a, 0, Math.PI * 2, false);
    var i = e, s = i[0];
    t.moveTo(s.x, s.y);
    for (var o = 0; o < i.length; o++) {
      var u = i[o];
      t.lineTo(u.x, u.y);
    }
    t.closePath && t.closePath();
  }
  function kw(t, e, r, n) {
    t.arc(e, r, n, 0, Math.PI * 2, false);
  }
  rh.arrowShapeImpl = function(t) {
    return (zf || (zf = {
      polygon: Cw,
      "triangle-backcurve": Rw,
      "triangle-tee": Lf,
      "circle-triangle": Aw,
      "triangle-cross": Lf,
      circle: kw
    }))[t];
  };
  var hr = {};
  hr.drawElement = function(t, e, r, n, a, i) {
    var s = this;
    e.isNode() ? s.drawNode(t, e, r, n, a, i) : s.drawEdge(t, e, r, n, a, i);
  };
  hr.drawElementOverlay = function(t, e) {
    var r = this;
    e.isNode() ? r.drawNodeOverlay(t, e) : r.drawEdgeOverlay(t, e);
  };
  hr.drawElementUnderlay = function(t, e) {
    var r = this;
    e.isNode() ? r.drawNodeUnderlay(t, e) : r.drawEdgeUnderlay(t, e);
  };
  hr.drawCachedElementPortion = function(t, e, r, n, a, i, s, o) {
    var u = this, l = r.getBoundingBox(e);
    if (!(l.w === 0 || l.h === 0)) {
      var c = r.getElement(e, l, n, a, i);
      if (c != null) {
        var f = o(u, e);
        if (f === 0) return;
        var d = s(u, e), v = l.x1, h = l.y1, y = l.w, p = l.h, g, b, m, x, E;
        if (d !== 0) {
          var S = r.getRotationPoint(e);
          m = S.x, x = S.y, t.translate(m, x), t.rotate(d), E = u.getImgSmoothing(t), E || u.setImgSmoothing(t, true);
          var w = r.getRotationOffset(e);
          g = w.x, b = w.y;
        } else g = v, b = h;
        var T;
        f !== 1 && (T = t.globalAlpha, t.globalAlpha = T * f), t.drawImage(c.texture.canvas, c.x, 0, c.width, c.height, g, b, y, p), f !== 1 && (t.globalAlpha = T), d !== 0 && (t.rotate(-d), t.translate(-m, -x), E || u.setImgSmoothing(t, false));
      } else r.drawElement(t, e);
    }
  };
  var Pw = function() {
    return 0;
  }, _w = function(e, r) {
    return e.getTextAngle(r, null);
  }, Iw = function(e, r) {
    return e.getTextAngle(r, "source");
  }, Bw = function(e, r) {
    return e.getTextAngle(r, "target");
  }, Mw = function(e, r) {
    return r.effectiveOpacity();
  }, Zo = function(e, r) {
    return r.pstyle("text-opacity").pfValue * r.effectiveOpacity();
  };
  hr.drawCachedElement = function(t, e, r, n, a, i) {
    var s = this, o = s.data, u = o.eleTxrCache, l = o.lblTxrCache, c = o.slbTxrCache, f = o.tlbTxrCache, d = e.boundingBox(), v = i === true ? u.reasons.highQuality : null;
    if (!(d.w === 0 || d.h === 0 || !e.visible()) && (!n || Vu(d, n))) {
      var h = e.isEdge(), y = e.element()._private.rscratch.badLine;
      s.drawElementUnderlay(t, e), s.drawCachedElementPortion(t, e, u, r, a, v, Pw, Mw), (!h || !y) && s.drawCachedElementPortion(t, e, l, r, a, v, _w, Zo), h && !y && (s.drawCachedElementPortion(t, e, c, r, a, v, Iw, Zo), s.drawCachedElementPortion(t, e, f, r, a, v, Bw, Zo)), s.drawElementOverlay(t, e);
    }
  };
  hr.drawElements = function(t, e) {
    for (var r = this, n = 0; n < e.length; n++) {
      var a = e[n];
      r.drawElement(t, a);
    }
  };
  hr.drawCachedElements = function(t, e, r, n) {
    for (var a = this, i = 0; i < e.length; i++) {
      var s = e[i];
      a.drawCachedElement(t, s, r, n);
    }
  };
  hr.drawCachedNodes = function(t, e, r, n) {
    for (var a = this, i = 0; i < e.length; i++) {
      var s = e[i];
      s.isNode() && a.drawCachedElement(t, s, r, n);
    }
  };
  hr.drawLayeredElements = function(t, e, r, n) {
    var a = this, i = a.data.lyrTxrCache.getLayers(e, r);
    if (i) for (var s = 0; s < i.length; s++) {
      var o = i[s], u = o.bb;
      u.w === 0 || u.h === 0 || t.drawImage(o.canvas, u.x1, u.y1, u.w, u.h);
    }
    else a.drawCachedElements(t, e, r, n);
  };
  var Sr = {};
  Sr.drawEdge = function(t, e, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o = e._private.rscratch;
    if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
      var u;
      r && (u = r, t.translate(-u.x1, -u.y1));
      var l = i ? e.pstyle("opacity").value : 1, c = i ? e.pstyle("line-opacity").value : 1, f = e.pstyle("curve-style").value, d = e.pstyle("line-style").value, v = e.pstyle("width").pfValue, h = e.pstyle("line-cap").value, y = e.pstyle("line-outline-width").value, p = e.pstyle("line-outline-color").value, g = l * c, b = l * c, m = function() {
        var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g;
        f === "straight-triangle" ? (s.eleStrokeStyle(t, e, M), s.drawEdgeTrianglePath(e, t, o.allpts)) : (t.lineWidth = v, t.lineCap = h, s.eleStrokeStyle(t, e, M), s.drawEdgePath(e, t, o.allpts, d), t.lineCap = "butt");
      }, x = function() {
        var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g;
        if (t.lineWidth = v + y, t.lineCap = h, y > 0) s.colorStrokeStyle(t, p[0], p[1], p[2], M);
        else {
          t.lineCap = "butt";
          return;
        }
        f === "straight-triangle" ? s.drawEdgeTrianglePath(e, t, o.allpts) : (s.drawEdgePath(e, t, o.allpts, d), t.lineCap = "butt");
      }, E = function() {
        a && s.drawEdgeOverlay(t, e);
      }, S = function() {
        a && s.drawEdgeUnderlay(t, e);
      }, w = function() {
        var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b;
        s.drawArrowheads(t, e, M);
      }, T = function() {
        s.drawElementText(t, e, null, n);
      };
      t.lineJoin = "round";
      var C = e.pstyle("ghost").value === "yes";
      if (C) {
        var R = e.pstyle("ghost-offset-x").pfValue, A = e.pstyle("ghost-offset-y").pfValue, P = e.pstyle("ghost-opacity").value, k = g * P;
        t.translate(R, A), m(k), w(k), t.translate(-R, -A);
      } else x();
      S(), m(), w(), E(), T(), r && t.translate(u.x1, u.y1);
    }
  };
  var nh = function(e) {
    if (![
      "overlay",
      "underlay"
    ].includes(e)) throw new Error("Invalid state");
    return function(r, n) {
      if (n.visible()) {
        var a = n.pstyle("".concat(e, "-opacity")).value;
        if (a !== 0) {
          var i = this, s = i.usePaths(), o = n._private.rscratch, u = n.pstyle("".concat(e, "-padding")).pfValue, l = 2 * u, c = n.pstyle("".concat(e, "-color")).value;
          r.lineWidth = l, o.edgeType === "self" && !s ? r.lineCap = "butt" : r.lineCap = "round", i.colorStrokeStyle(r, c[0], c[1], c[2], a), i.drawEdgePath(n, r, o.allpts, "solid");
        }
      }
    };
  };
  Sr.drawEdgeOverlay = nh("overlay");
  Sr.drawEdgeUnderlay = nh("underlay");
  Sr.drawEdgePath = function(t, e, r, n) {
    var a = t._private.rscratch, i = e, s, o = false, u = this.usePaths(), l = t.pstyle("line-dash-pattern").pfValue, c = t.pstyle("line-dash-offset").pfValue;
    if (u) {
      var f = r.join("$"), d = a.pathCacheKey && a.pathCacheKey === f;
      d ? (s = e = a.pathCache, o = true) : (s = e = new Path2D(), a.pathCacheKey = f, a.pathCache = s);
    }
    if (i.setLineDash) switch (n) {
      case "dotted":
        i.setLineDash([
          1,
          1
        ]);
        break;
      case "dashed":
        i.setLineDash(l), i.lineDashOffset = c;
        break;
      case "solid":
        i.setLineDash([]);
        break;
    }
    if (!o && !a.badLine) switch (e.beginPath && e.beginPath(), e.moveTo(r[0], r[1]), a.edgeType) {
      case "bezier":
      case "self":
      case "compound":
      case "multibezier":
        for (var v = 2; v + 3 < r.length; v += 4) e.quadraticCurveTo(r[v], r[v + 1], r[v + 2], r[v + 3]);
        break;
      case "straight":
      case "haystack":
        for (var h = 2; h + 1 < r.length; h += 2) e.lineTo(r[h], r[h + 1]);
        break;
      case "segments":
        if (a.isRound) {
          var y = Zt(a.roundCorners), p;
          try {
            for (y.s(); !(p = y.n()).done; ) {
              var g = p.value;
              Gv(e, g);
            }
          } catch (m) {
            y.e(m);
          } finally {
            y.f();
          }
          e.lineTo(r[r.length - 2], r[r.length - 1]);
        } else for (var b = 2; b + 1 < r.length; b += 2) e.lineTo(r[b], r[b + 1]);
        break;
    }
    e = i, u ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
  };
  Sr.drawEdgeTrianglePath = function(t, e, r) {
    e.fillStyle = e.strokeStyle;
    for (var n = t.pstyle("width").pfValue, a = 0; a + 1 < r.length; a += 2) {
      var i = [
        r[a + 2] - r[a],
        r[a + 3] - r[a + 1]
      ], s = Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [
        i[1] / s,
        -i[0] / s
      ], u = [
        o[0] * n / 2,
        o[1] * n / 2
      ];
      e.beginPath(), e.moveTo(r[a] - u[0], r[a + 1] - u[1]), e.lineTo(r[a] + u[0], r[a + 1] + u[1]), e.lineTo(r[a + 2], r[a + 3]), e.closePath(), e.fill();
    }
  };
  Sr.drawArrowheads = function(t, e, r) {
    var n = e._private.rscratch, a = n.edgeType === "haystack";
    a || this.drawArrowhead(t, e, "source", n.arrowStartX, n.arrowStartY, n.srcArrowAngle, r), this.drawArrowhead(t, e, "mid-target", n.midX, n.midY, n.midtgtArrowAngle, r), this.drawArrowhead(t, e, "mid-source", n.midX, n.midY, n.midsrcArrowAngle, r), a || this.drawArrowhead(t, e, "target", n.arrowEndX, n.arrowEndY, n.tgtArrowAngle, r);
  };
  Sr.drawArrowhead = function(t, e, r, n, a, i, s) {
    if (!(isNaN(n) || n == null || isNaN(a) || a == null || isNaN(i) || i == null)) {
      var o = this, u = e.pstyle(r + "-arrow-shape").value;
      if (u !== "none") {
        var l = e.pstyle(r + "-arrow-fill").value === "hollow" ? "both" : "filled", c = e.pstyle(r + "-arrow-fill").value, f = e.pstyle("width").pfValue, d = e.pstyle(r + "-arrow-width"), v = d.value === "match-line" ? f : d.pfValue;
        d.units === "%" && (v *= f);
        var h = e.pstyle("opacity").value;
        s === void 0 && (s = h);
        var y = t.globalCompositeOperation;
        (s !== 1 || c === "hollow") && (t.globalCompositeOperation = "destination-out", o.colorFillStyle(t, 255, 255, 255, 1), o.colorStrokeStyle(t, 255, 255, 255, 1), o.drawArrowShape(e, t, l, f, u, v, n, a, i), t.globalCompositeOperation = y);
        var p = e.pstyle(r + "-arrow-color").value;
        o.colorFillStyle(t, p[0], p[1], p[2], s), o.colorStrokeStyle(t, p[0], p[1], p[2], s), o.drawArrowShape(e, t, c, f, u, v, n, a, i);
      }
    }
  };
  Sr.drawArrowShape = function(t, e, r, n, a, i, s, o, u) {
    var l = this, c = this.usePaths() && a !== "triangle-cross", f = false, d, v = e, h = {
      x: s,
      y: o
    }, y = t.pstyle("arrow-scale").value, p = this.getArrowWidth(n, y), g = l.arrowShapes[a];
    if (c) {
      var b = l.arrowPathCache = l.arrowPathCache || [], m = dn(a), x = b[m];
      x != null ? (d = e = x, f = true) : (d = e = new Path2D(), b[m] = d);
    }
    f || (e.beginPath && e.beginPath(), c ? g.draw(e, 1, 0, {
      x: 0,
      y: 0
    }, 1) : g.draw(e, p, u, h, n), e.closePath && e.closePath()), e = v, c && (e.translate(s, o), e.rotate(u), e.scale(p, p)), (r === "filled" || r === "both") && (c ? e.fill(d) : e.fill()), (r === "hollow" || r === "both") && (e.lineWidth = i / (c ? p : 1), e.lineJoin = "miter", c ? e.stroke(d) : e.stroke()), c && (e.scale(1 / p, 1 / p), e.rotate(-u), e.translate(-s, -o));
  };
  var el = {};
  el.safeDrawImage = function(t, e, r, n, a, i, s, o, u, l) {
    if (!(a <= 0 || i <= 0 || u <= 0 || l <= 0)) try {
      t.drawImage(e, r, n, a, i, s, o, u, l);
    } catch (c) {
      Ge(c);
    }
  };
  el.drawInscribedImage = function(t, e, r, n, a) {
    var i = this, s = r.position(), o = s.x, u = s.y, l = r.cy().style(), c = l.getIndexedStyle.bind(l), f = c(r, "background-fit", "value", n), d = c(r, "background-repeat", "value", n), v = r.width(), h = r.height(), y = r.padding() * 2, p = v + (c(r, "background-width-relative-to", "value", n) === "inner" ? 0 : y), g = h + (c(r, "background-height-relative-to", "value", n) === "inner" ? 0 : y), b = r._private.rscratch, m = c(r, "background-clip", "value", n), x = m === "node", E = c(r, "background-image-opacity", "value", n) * a, S = c(r, "background-image-smoothing", "value", n), w = r.pstyle("corner-radius").value;
    w !== "auto" && (w = r.pstyle("corner-radius").pfValue);
    var T = e.width || e.cachedW, C = e.height || e.cachedH;
    (T == null || C == null) && (document.body.appendChild(e), T = e.cachedW = e.width || e.offsetWidth, C = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
    var R = T, A = C;
    if (c(r, "background-width", "value", n) !== "auto" && (c(r, "background-width", "units", n) === "%" ? R = c(r, "background-width", "pfValue", n) * p : R = c(r, "background-width", "pfValue", n)), c(r, "background-height", "value", n) !== "auto" && (c(r, "background-height", "units", n) === "%" ? A = c(r, "background-height", "pfValue", n) * g : A = c(r, "background-height", "pfValue", n)), !(R === 0 || A === 0)) {
      if (f === "contain") {
        var P = Math.min(p / R, g / A);
        R *= P, A *= P;
      } else if (f === "cover") {
        var P = Math.max(p / R, g / A);
        R *= P, A *= P;
      }
      var k = o - p / 2, I = c(r, "background-position-x", "units", n), M = c(r, "background-position-x", "pfValue", n);
      I === "%" ? k += (p - R) * M : k += M;
      var D = c(r, "background-offset-x", "units", n), B = c(r, "background-offset-x", "pfValue", n);
      D === "%" ? k += (p - R) * B : k += B;
      var O = u - g / 2, z = c(r, "background-position-y", "units", n), U = c(r, "background-position-y", "pfValue", n);
      z === "%" ? O += (g - A) * U : O += U;
      var N = c(r, "background-offset-y", "units", n), L = c(r, "background-offset-y", "pfValue", n);
      N === "%" ? O += (g - A) * L : O += L, b.pathCache && (k -= o, O -= u, o = 0, u = 0);
      var H = t.globalAlpha;
      t.globalAlpha = E;
      var Y = i.getImgSmoothing(t), K = false;
      if (S === "no" && Y ? (i.setImgSmoothing(t, false), K = true) : S === "yes" && !Y && (i.setImgSmoothing(t, true), K = true), d === "no-repeat") x && (t.save(), b.pathCache ? t.clip(b.pathCache) : (i.nodeShapes[i.getNodeShape(r)].draw(t, o, u, p, g, w, b), t.clip())), i.safeDrawImage(t, e, 0, 0, T, C, k, O, R, A), x && t.restore();
      else {
        var Q = t.createPattern(e, d);
        t.fillStyle = Q, i.nodeShapes[i.getNodeShape(r)].draw(t, o, u, p, g, w, b), t.translate(k, O), t.fill(), t.translate(-k, -O);
      }
      t.globalAlpha = H, K && i.setImgSmoothing(t, Y);
    }
  };
  var bn = {};
  bn.eleTextBiggerThanMin = function(t, e) {
    if (!e) {
      var r = t.cy().zoom(), n = this.getPixelRatio(), a = Math.ceil(Lu(r * n));
      e = Math.pow(2, a);
    }
    var i = t.pstyle("font-size").pfValue * e, s = t.pstyle("min-zoomed-font-size").pfValue;
    return !(i < s);
  };
  bn.drawElementText = function(t, e, r, n, a) {
    var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this;
    if (n == null) {
      if (i && !s.eleTextBiggerThanMin(e)) return;
    } else if (n === false) return;
    if (e.isNode()) {
      var o = e.pstyle("label");
      if (!o || !o.value) return;
      var u = s.getLabelJustification(e);
      t.textAlign = u, t.textBaseline = "bottom";
    } else {
      var l = e.element()._private.rscratch.badLine, c = e.pstyle("label"), f = e.pstyle("source-label"), d = e.pstyle("target-label");
      if (l || (!c || !c.value) && (!f || !f.value) && (!d || !d.value)) return;
      t.textAlign = "center", t.textBaseline = "bottom";
    }
    var v = !r, h;
    r && (h = r, t.translate(-h.x1, -h.y1)), a == null ? (s.drawText(t, e, null, v, i), e.isEdge() && (s.drawText(t, e, "source", v, i), s.drawText(t, e, "target", v, i))) : s.drawText(t, e, a, v, i), r && t.translate(h.x1, h.y1);
  };
  bn.getFontCache = function(t) {
    var e;
    this.fontCaches = this.fontCaches || [];
    for (var r = 0; r < this.fontCaches.length; r++) if (e = this.fontCaches[r], e.context === t) return e;
    return e = {
      context: t
    }, this.fontCaches.push(e), e;
  };
  bn.setupTextStyle = function(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, n = e.pstyle("font-style").strValue, a = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = r ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, u = e.pstyle("text-outline-opacity").value * o, l = e.pstyle("color").value, c = e.pstyle("text-outline-color").value;
    t.font = n + " " + s + " " + a + " " + i, t.lineJoin = "round", this.colorFillStyle(t, l[0], l[1], l[2], o), this.colorStrokeStyle(t, c[0], c[1], c[2], u);
  };
  function Dw(t, e, r, n, a) {
    var i = Math.min(n, a), s = i / 2, o = e + n / 2, u = r + a / 2;
    t.beginPath(), t.arc(o, u, s, 0, Math.PI * 2), t.closePath();
  }
  function Ff(t, e, r, n, a) {
    var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = Math.min(i, n / 2, a / 2);
    t.beginPath(), t.moveTo(e + s, r), t.lineTo(e + n - s, r), t.quadraticCurveTo(e + n, r, e + n, r + s), t.lineTo(e + n, r + a - s), t.quadraticCurveTo(e + n, r + a, e + n - s, r + a), t.lineTo(e + s, r + a), t.quadraticCurveTo(e, r + a, e, r + a - s), t.lineTo(e, r + s), t.quadraticCurveTo(e, r, e + s, r), t.closePath();
  }
  bn.getTextAngle = function(t, e) {
    var r, n = t._private, a = n.rscratch, i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation");
    if (s.strValue === "autorotate") {
      var o = Ut(a, "labelAngle", e);
      r = t.isEdge() ? o : 0;
    } else s.strValue === "none" ? r = 0 : r = s.pfValue;
    return r;
  };
  bn.drawText = function(t, e, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = e._private, s = i.rscratch, o = a ? e.effectiveOpacity() : 1;
    if (!(a && (o === 0 || e.pstyle("text-opacity").value === 0))) {
      r === "main" && (r = null);
      var u = Ut(s, "labelX", r), l = Ut(s, "labelY", r), c, f, d = this.getLabelText(e, r);
      if (d != null && d !== "" && !isNaN(u) && !isNaN(l)) {
        this.setupTextStyle(t, e, a);
        var v = r ? r + "-" : "", h = Ut(s, "labelWidth", r), y = Ut(s, "labelHeight", r), p = e.pstyle(v + "text-margin-x").pfValue, g = e.pstyle(v + "text-margin-y").pfValue, b = e.isEdge(), m = e.pstyle("text-halign").value, x = e.pstyle("text-valign").value;
        b && (m = "center", x = "center"), u += p, l += g;
        var E;
        switch (n ? E = this.getTextAngle(e, r) : E = 0, E !== 0 && (c = u, f = l, t.translate(c, f), t.rotate(E), u = 0, l = 0), x) {
          case "top":
            break;
          case "center":
            l += y / 2;
            break;
          case "bottom":
            l += y;
            break;
        }
        var S = e.pstyle("text-background-opacity").value, w = e.pstyle("text-border-opacity").value, T = e.pstyle("text-border-width").pfValue, C = e.pstyle("text-background-padding").pfValue, R = e.pstyle("text-background-shape").strValue, A = R === "round-rectangle" || R === "roundrectangle", P = R === "circle", k = 2;
        if (S > 0 || T > 0 && w > 0) {
          var I = t.fillStyle, M = t.strokeStyle, D = t.lineWidth, B = e.pstyle("text-background-color").value, O = e.pstyle("text-border-color").value, z = e.pstyle("text-border-style").value, U = S > 0, N = T > 0 && w > 0, L = u - C;
          switch (m) {
            case "left":
              L -= h;
              break;
            case "center":
              L -= h / 2;
              break;
          }
          var H = l - y - C, Y = h + 2 * C, K = y + 2 * C;
          if (U && (t.fillStyle = "rgba(".concat(B[0], ",").concat(B[1], ",").concat(B[2], ",").concat(S * o, ")")), N && (t.strokeStyle = "rgba(".concat(O[0], ",").concat(O[1], ",").concat(O[2], ",").concat(w * o, ")"), t.lineWidth = T, t.setLineDash)) switch (z) {
            case "dotted":
              t.setLineDash([
                1,
                1
              ]);
              break;
            case "dashed":
              t.setLineDash([
                4,
                2
              ]);
              break;
            case "double":
              t.lineWidth = T / 4, t.setLineDash([]);
              break;
            default:
              t.setLineDash([]);
              break;
          }
          if (A ? (t.beginPath(), Ff(t, L, H, Y, K, k)) : P ? (t.beginPath(), Dw(t, L, H, Y, K)) : (t.beginPath(), t.rect(L, H, Y, K)), U && t.fill(), N && t.stroke(), N && z === "double") {
            var Q = T / 2;
            t.beginPath(), A ? Ff(t, L + Q, H + Q, Y - 2 * Q, K - 2 * Q, k) : t.rect(L + Q, H + Q, Y - 2 * Q, K - 2 * Q), t.stroke();
          }
          t.fillStyle = I, t.strokeStyle = M, t.lineWidth = D, t.setLineDash && t.setLineDash([]);
        }
        var re = 2 * e.pstyle("text-outline-width").pfValue;
        if (re > 0 && (t.lineWidth = re), e.pstyle("text-wrap").value === "wrap") {
          var ie = Ut(s, "labelWrapCachedLines", r), ee = Ut(s, "labelLineHeight", r), F = h / 2, V = this.getLabelJustification(e);
          switch (V === "auto" || (m === "left" ? V === "left" ? u += -h : V === "center" && (u += -F) : m === "center" ? V === "left" ? u += -F : V === "right" && (u += F) : m === "right" && (V === "center" ? u += F : V === "right" && (u += h))), x) {
            case "top":
              l -= (ie.length - 1) * ee;
              break;
            case "center":
            case "bottom":
              l -= (ie.length - 1) * ee;
              break;
          }
          for (var q = 0; q < ie.length; q++) re > 0 && t.strokeText(ie[q], u, l), t.fillText(ie[q], u, l), l += ee;
        } else re > 0 && t.strokeText(d, u, l), t.fillText(d, u, l);
        E !== 0 && (t.rotate(-E), t.translate(-c, -f));
      }
    }
  };
  var Hr = {};
  Hr.drawNode = function(t, e, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o, u, l = e._private, c = l.rscratch, f = e.position();
    if (!(!ae(f.x) || !ae(f.y)) && !(i && !e.visible())) {
      var d = i ? e.effectiveOpacity() : 1, v = s.usePaths(), h, y = false, p = e.padding();
      o = e.width() + 2 * p, u = e.height() + 2 * p;
      var g;
      r && (g = r, t.translate(-g.x1, -g.y1));
      for (var b = e.pstyle("background-image"), m = b.value, x = new Array(m.length), E = new Array(m.length), S = 0, w = 0; w < m.length; w++) {
        var T = m[w], C = x[w] = T != null && T !== "none";
        if (C) {
          var R = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", w);
          S++, E[w] = s.getCachedImage(T, R, function() {
            l.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
          });
        }
      }
      var A = e.pstyle("background-blacken").value, P = e.pstyle("border-width").pfValue, k = e.pstyle("background-opacity").value * d, I = e.pstyle("border-color").value, M = e.pstyle("border-style").value, D = e.pstyle("border-join").value, B = e.pstyle("border-cap").value, O = e.pstyle("border-position").value, z = e.pstyle("border-dash-pattern").pfValue, U = e.pstyle("border-dash-offset").pfValue, N = e.pstyle("border-opacity").value * d, L = e.pstyle("outline-width").pfValue, H = e.pstyle("outline-color").value, Y = e.pstyle("outline-style").value, K = e.pstyle("outline-opacity").value * d, Q = e.pstyle("outline-offset").value, re = e.pstyle("corner-radius").value;
      re !== "auto" && (re = e.pstyle("corner-radius").pfValue);
      var ie = function() {
        var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k;
        s.eleFillStyle(t, e, le);
      }, ee = function() {
        var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N;
        s.colorStrokeStyle(t, I[0], I[1], I[2], le);
      }, F = function() {
        var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K;
        s.colorStrokeStyle(t, H[0], H[1], H[2], le);
      }, V = function(le, j, _, $) {
        var Z = s.nodePathCache = s.nodePathCache || [], G = Ud(_ === "polygon" ? _ + "," + $.join(",") : _, "" + j, "" + le, "" + re), J = Z[G], ue, te = false;
        return J != null ? (ue = J, te = true, c.pathCache = ue) : (ue = new Path2D(), Z[G] = c.pathCache = ue), {
          path: ue,
          cacheHit: te
        };
      }, q = e.pstyle("shape").strValue, X = e.pstyle("shape-polygon-points").pfValue;
      if (v) {
        t.translate(f.x, f.y);
        var ne = V(o, u, q, X);
        h = ne.path, y = ne.cacheHit;
      }
      var he = function() {
        if (!y) {
          var le = f;
          v && (le = {
            x: 0,
            y: 0
          }), s.nodeShapes[s.getNodeShape(e)].draw(h || t, le.x, le.y, o, u, re, c);
        }
        v ? t.fill(h) : t.fill();
      }, De = function() {
        for (var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, _ = l.backgrounding, $ = 0, Z = 0; Z < E.length; Z++) {
          var G = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", Z);
          if (j && G === "over" || !j && G === "inside") {
            $++;
            continue;
          }
          x[Z] && E[Z].complete && !E[Z].error && ($++, s.drawInscribedImage(t, E[Z], e, Z, le));
        }
        l.backgrounding = $ !== S, _ !== l.backgrounding && e.updateStyle(false);
      }, Re = function() {
        var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
        s.hasPie(e) && (s.drawPie(t, e, j), le && (v || s.nodeShapes[s.getNodeShape(e)].draw(t, f.x, f.y, o, u, re, c)));
      }, Te = function() {
        var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
        s.hasStripe(e) && (t.save(), v ? t.clip(c.pathCache) : (s.nodeShapes[s.getNodeShape(e)].draw(t, f.x, f.y, o, u, re, c), t.clip()), s.drawStripe(t, e, j), t.restore(), le && (v || s.nodeShapes[s.getNodeShape(e)].draw(t, f.x, f.y, o, u, re, c)));
      }, we = function() {
        var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, j = (A > 0 ? A : -A) * le, _ = A > 0 ? 0 : 255;
        A !== 0 && (s.colorFillStyle(t, _, _, _, j), v ? t.fill(h) : t.fill());
      }, se = function() {
        if (P > 0) {
          if (t.lineWidth = P, t.lineCap = B, t.lineJoin = D, t.setLineDash) switch (M) {
            case "dotted":
              t.setLineDash([
                1,
                1
              ]);
              break;
            case "dashed":
              t.setLineDash(z), t.lineDashOffset = U;
              break;
            case "solid":
            case "double":
              t.setLineDash([]);
              break;
          }
          if (O !== "center") {
            if (t.save(), t.lineWidth *= 2, O === "inside") v ? t.clip(h) : t.clip();
            else {
              var le = new Path2D();
              le.rect(-o / 2 - P, -u / 2 - P, o + 2 * P, u + 2 * P), le.addPath(h), t.clip(le, "evenodd");
            }
            v ? t.stroke(h) : t.stroke(), t.restore();
          } else v ? t.stroke(h) : t.stroke();
          if (M === "double") {
            t.lineWidth = P / 3;
            var j = t.globalCompositeOperation;
            t.globalCompositeOperation = "destination-out", v ? t.stroke(h) : t.stroke(), t.globalCompositeOperation = j;
          }
          t.setLineDash && t.setLineDash([]);
        }
      }, ge = function() {
        if (L > 0) {
          if (t.lineWidth = L, t.lineCap = "butt", t.setLineDash) switch (Y) {
            case "dotted":
              t.setLineDash([
                1,
                1
              ]);
              break;
            case "dashed":
              t.setLineDash([
                4,
                2
              ]);
              break;
            case "solid":
            case "double":
              t.setLineDash([]);
              break;
          }
          var le = f;
          v && (le = {
            x: 0,
            y: 0
          });
          var j = s.getNodeShape(e), _ = P;
          O === "inside" && (_ = 0), O === "outside" && (_ *= 2);
          var $ = (o + _ + (L + Q)) / o, Z = (u + _ + (L + Q)) / u, G = o * $, J = u * Z, ue = s.nodeShapes[j].points, te;
          if (v) {
            var de = V(G, J, j, ue);
            te = de.path;
          }
          if (j === "ellipse") s.drawEllipsePath(te || t, le.x, le.y, G, J);
          else if ([
            "round-diamond",
            "round-heptagon",
            "round-hexagon",
            "round-octagon",
            "round-pentagon",
            "round-polygon",
            "round-triangle",
            "round-tag"
          ].includes(j)) {
            var ce = 0, xe = 0, Ie = 0;
            j === "round-diamond" ? ce = (_ + Q + L) * 1.4 : j === "round-heptagon" ? (ce = (_ + Q + L) * 1.075, Ie = -(_ / 2 + Q + L) / 35) : j === "round-hexagon" ? ce = (_ + Q + L) * 1.12 : j === "round-pentagon" ? (ce = (_ + Q + L) * 1.13, Ie = -(_ / 2 + Q + L) / 15) : j === "round-tag" ? (ce = (_ + Q + L) * 1.12, xe = (_ / 2 + L + Q) * 0.07) : j === "round-triangle" && (ce = (_ + Q + L) * (Math.PI / 2), Ie = -(_ + Q / 2 + L) / Math.PI), ce !== 0 && ($ = (o + ce) / o, G = o * $, [
              "round-hexagon",
              "round-tag"
            ].includes(j) || (Z = (u + ce) / u, J = u * Z)), re = re === "auto" ? Jd(G, J) : re;
            for (var ke = G / 2, ve = J / 2, Me = re + (_ + L + Q) / 2, Be = new Array(ue.length / 2), vt = new Array(ue.length / 2), st = 0; st < ue.length / 2; st++) Be[st] = {
              x: le.x + xe + ke * ue[st * 2],
              y: le.y + Ie + ve * ue[st * 2 + 1]
            };
            var Mt, ut, bt, ht, Tt = Be.length;
            for (ut = Be[Tt - 1], Mt = 0; Mt < Tt; Mt++) bt = Be[Mt % Tt], ht = Be[(Mt + 1) % Tt], vt[Mt] = Ju(ut, bt, ht, Me), ut = bt, bt = ht;
            s.drawRoundPolygonPath(te || t, le.x + xe, le.y + Ie, o * $, u * Z, ue, vt);
          } else if ([
            "roundrectangle",
            "round-rectangle"
          ].includes(j)) re = re === "auto" ? Lr(G, J) : re, s.drawRoundRectanglePath(te || t, le.x, le.y, G, J, re + (_ + L + Q) / 2);
          else if ([
            "cutrectangle",
            "cut-rectangle"
          ].includes(j)) re = re === "auto" ? $u() : re, s.drawCutRectanglePath(te || t, le.x, le.y, G, J, null, re + (_ + L + Q) / 4);
          else if ([
            "bottomroundrectangle",
            "bottom-round-rectangle"
          ].includes(j)) re = re === "auto" ? Lr(G, J) : re, s.drawBottomRoundRectanglePath(te || t, le.x, le.y, G, J, re + (_ + L + Q) / 2);
          else if (j === "barrel") s.drawBarrelPath(te || t, le.x, le.y, G, J);
          else if (j.startsWith("polygon") || [
            "rhomboid",
            "right-rhomboid",
            "round-tag",
            "tag",
            "vee"
          ].includes(j)) {
            var Cr = (_ + L + Q) / o;
            ue = Mi(Di(ue, Cr)), s.drawPolygonPath(te || t, le.x, le.y, o, u, ue);
          } else {
            var lt = (_ + L + Q) / o;
            ue = Mi(Di(ue, -lt)), s.drawPolygonPath(te || t, le.x, le.y, o, u, ue);
          }
          if (v ? t.stroke(te) : t.stroke(), Y === "double") {
            t.lineWidth = _ / 3;
            var gr = t.globalCompositeOperation;
            t.globalCompositeOperation = "destination-out", v ? t.stroke(te) : t.stroke(), t.globalCompositeOperation = gr;
          }
          t.setLineDash && t.setLineDash([]);
        }
      }, pe = function() {
        a && s.drawNodeOverlay(t, e, f, o, u);
      }, Ce = function() {
        a && s.drawNodeUnderlay(t, e, f, o, u);
      }, ye = function() {
        s.drawElementText(t, e, null, n);
      }, Pe = e.pstyle("ghost").value === "yes";
      if (Pe) {
        var Oe = e.pstyle("ghost-offset-x").pfValue, $e = e.pstyle("ghost-offset-y").pfValue, Ue = e.pstyle("ghost-opacity").value, qe = Ue * d;
        t.translate(Oe, $e), F(), ge(), ie(Ue * k), he(), De(qe, true), ee(Ue * N), se(), Re(A !== 0 || P !== 0), Te(A !== 0 || P !== 0), De(qe, false), we(qe), t.translate(-Oe, -$e);
      }
      v && t.translate(-f.x, -f.y), Ce(), v && t.translate(f.x, f.y), F(), ge(), ie(), he(), De(d, true), ee(), se(), Re(A !== 0 || P !== 0), Te(A !== 0 || P !== 0), De(d, false), we(), v && t.translate(-f.x, -f.y), ye(), pe(), r && t.translate(g.x1, g.y1);
    }
  };
  var ah = function(e) {
    if (![
      "overlay",
      "underlay"
    ].includes(e)) throw new Error("Invalid state");
    return function(r, n, a, i, s) {
      var o = this;
      if (n.visible()) {
        var u = n.pstyle("".concat(e, "-padding")).pfValue, l = n.pstyle("".concat(e, "-opacity")).value, c = n.pstyle("".concat(e, "-color")).value, f = n.pstyle("".concat(e, "-shape")).value, d = n.pstyle("".concat(e, "-corner-radius")).value;
        if (l > 0) {
          if (a = a || n.position(), i == null || s == null) {
            var v = n.padding();
            i = n.width() + 2 * v, s = n.height() + 2 * v;
          }
          o.colorFillStyle(r, c[0], c[1], c[2], l), o.nodeShapes[f].draw(r, a.x, a.y, i + u * 2, s + u * 2, d), r.fill();
        }
      }
    };
  };
  Hr.drawNodeOverlay = ah("overlay");
  Hr.drawNodeUnderlay = ah("underlay");
  Hr.hasPie = function(t) {
    return t = t[0], t._private.hasPie;
  };
  Hr.hasStripe = function(t) {
    return t = t[0], t._private.hasStripe;
  };
  Hr.drawPie = function(t, e, r, n) {
    e = e[0], n = n || e.position();
    var a = e.cy().style(), i = e.pstyle("pie-size"), s = e.pstyle("pie-hole"), o = e.pstyle("pie-start-angle").pfValue, u = n.x, l = n.y, c = e.width(), f = e.height(), d = Math.min(c, f) / 2, v, h = 0, y = this.usePaths();
    if (y && (u = 0, l = 0), i.units === "%" ? d = d * i.pfValue : i.pfValue !== void 0 && (d = i.pfValue / 2), s.units === "%" ? v = d * s.pfValue : s.pfValue !== void 0 && (v = s.pfValue / 2), !(v >= d)) for (var p = 1; p <= a.pieBackgroundN; p++) {
      var g = e.pstyle("pie-" + p + "-background-size").value, b = e.pstyle("pie-" + p + "-background-color").value, m = e.pstyle("pie-" + p + "-background-opacity").value * r, x = g / 100;
      x + h > 1 && (x = 1 - h);
      var E = 1.5 * Math.PI + 2 * Math.PI * h;
      E += o;
      var S = 2 * Math.PI * x, w = E + S;
      g === 0 || h >= 1 || h + x > 1 || (v === 0 ? (t.beginPath(), t.moveTo(u, l), t.arc(u, l, d, E, w), t.closePath()) : (t.beginPath(), t.arc(u, l, d, E, w), t.arc(u, l, v, w, E, true), t.closePath()), this.colorFillStyle(t, b[0], b[1], b[2], m), t.fill(), h += x);
    }
  };
  Hr.drawStripe = function(t, e, r, n) {
    e = e[0], n = n || e.position();
    var a = e.cy().style(), i = n.x, s = n.y, o = e.width(), u = e.height(), l = 0, c = this.usePaths();
    t.save();
    var f = e.pstyle("stripe-direction").value, d = e.pstyle("stripe-size");
    switch (f) {
      case "vertical":
        break;
      case "righward":
        t.rotate(-Math.PI / 2);
        break;
    }
    var v = o, h = u;
    d.units === "%" ? (v = v * d.pfValue, h = h * d.pfValue) : d.pfValue !== void 0 && (v = d.pfValue, h = d.pfValue), c && (i = 0, s = 0), s -= v / 2, i -= h / 2;
    for (var y = 1; y <= a.stripeBackgroundN; y++) {
      var p = e.pstyle("stripe-" + y + "-background-size").value, g = e.pstyle("stripe-" + y + "-background-color").value, b = e.pstyle("stripe-" + y + "-background-opacity").value * r, m = p / 100;
      m + l > 1 && (m = 1 - l), !(p === 0 || l >= 1 || l + m > 1) && (t.beginPath(), t.rect(i, s + h * l, v, h * m), t.closePath(), this.colorFillStyle(t, g[0], g[1], g[2], b), t.fill(), l += m);
    }
    t.restore();
  };
  var Ft = {}, Ow = 100;
  Ft.getPixelRatio = function() {
    var t = this.data.contexts[0];
    if (this.forcedPixelRatio != null) return this.forcedPixelRatio;
    var e = this.cy.window(), r = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
    return (e.devicePixelRatio || 1) / r;
  };
  Ft.paintCache = function(t) {
    for (var e = this.paintCaches = this.paintCaches || [], r = true, n, a = 0; a < e.length; a++) if (n = e[a], n.context === t) {
      r = false;
      break;
    }
    return r && (n = {
      context: t
    }, e.push(n)), n;
  };
  Ft.createGradientStyleFor = function(t, e, r, n, a) {
    var i, s = this.usePaths(), o = r.pstyle(e + "-gradient-stop-colors").value, u = r.pstyle(e + "-gradient-stop-positions").pfValue;
    if (n === "radial-gradient") if (r.isEdge()) {
      var l = r.sourceEndpoint(), c = r.targetEndpoint(), f = r.midpoint(), d = vn(l, f), v = vn(c, f);
      i = t.createRadialGradient(f.x, f.y, 0, f.x, f.y, Math.max(d, v));
    } else {
      var h = s ? {
        x: 0,
        y: 0
      } : r.position(), y = r.paddedWidth(), p = r.paddedHeight();
      i = t.createRadialGradient(h.x, h.y, 0, h.x, h.y, Math.max(y, p));
    }
    else if (r.isEdge()) {
      var g = r.sourceEndpoint(), b = r.targetEndpoint();
      i = t.createLinearGradient(g.x, g.y, b.x, b.y);
    } else {
      var m = s ? {
        x: 0,
        y: 0
      } : r.position(), x = r.paddedWidth(), E = r.paddedHeight(), S = x / 2, w = E / 2, T = r.pstyle("background-gradient-direction").value;
      switch (T) {
        case "to-bottom":
          i = t.createLinearGradient(m.x, m.y - w, m.x, m.y + w);
          break;
        case "to-top":
          i = t.createLinearGradient(m.x, m.y + w, m.x, m.y - w);
          break;
        case "to-left":
          i = t.createLinearGradient(m.x + S, m.y, m.x - S, m.y);
          break;
        case "to-right":
          i = t.createLinearGradient(m.x - S, m.y, m.x + S, m.y);
          break;
        case "to-bottom-right":
        case "to-right-bottom":
          i = t.createLinearGradient(m.x - S, m.y - w, m.x + S, m.y + w);
          break;
        case "to-top-right":
        case "to-right-top":
          i = t.createLinearGradient(m.x - S, m.y + w, m.x + S, m.y - w);
          break;
        case "to-bottom-left":
        case "to-left-bottom":
          i = t.createLinearGradient(m.x + S, m.y - w, m.x - S, m.y + w);
          break;
        case "to-top-left":
        case "to-left-top":
          i = t.createLinearGradient(m.x + S, m.y + w, m.x - S, m.y - w);
          break;
      }
    }
    if (!i) return null;
    for (var C = u.length === o.length, R = o.length, A = 0; A < R; A++) i.addColorStop(C ? u[A] : A / (R - 1), "rgba(" + o[A][0] + "," + o[A][1] + "," + o[A][2] + "," + a + ")");
    return i;
  };
  Ft.gradientFillStyle = function(t, e, r, n) {
    var a = this.createGradientStyleFor(t, "background", e, r, n);
    if (!a) return null;
    t.fillStyle = a;
  };
  Ft.colorFillStyle = function(t, e, r, n, a) {
    t.fillStyle = "rgba(" + e + "," + r + "," + n + "," + a + ")";
  };
  Ft.eleFillStyle = function(t, e, r) {
    var n = e.pstyle("background-fill").value;
    if (n === "linear-gradient" || n === "radial-gradient") this.gradientFillStyle(t, e, n, r);
    else {
      var a = e.pstyle("background-color").value;
      this.colorFillStyle(t, a[0], a[1], a[2], r);
    }
  };
  Ft.gradientStrokeStyle = function(t, e, r, n) {
    var a = this.createGradientStyleFor(t, "line", e, r, n);
    if (!a) return null;
    t.strokeStyle = a;
  };
  Ft.colorStrokeStyle = function(t, e, r, n, a) {
    t.strokeStyle = "rgba(" + e + "," + r + "," + n + "," + a + ")";
  };
  Ft.eleStrokeStyle = function(t, e, r) {
    var n = e.pstyle("line-fill").value;
    if (n === "linear-gradient" || n === "radial-gradient") this.gradientStrokeStyle(t, e, n, r);
    else {
      var a = e.pstyle("line-color").value;
      this.colorStrokeStyle(t, a[0], a[1], a[2], r);
    }
  };
  Ft.matchCanvasSize = function(t) {
    var e = this, r = e.data, n = e.findContainerClientCoords(), a = n[2], i = n[3], s = e.getPixelRatio(), o = e.motionBlurPxRatio;
    (t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
    var u = a * s, l = i * s, c;
    if (!(u === e.canvasWidth && l === e.canvasHeight)) {
      e.fontCaches = null;
      var f = r.canvasContainer;
      f.style.width = a + "px", f.style.height = i + "px";
      for (var d = 0; d < e.CANVAS_LAYERS; d++) c = r.canvases[d], c.width = u, c.height = l, c.style.width = a + "px", c.style.height = i + "px";
      for (var d = 0; d < e.BUFFER_COUNT; d++) c = r.bufferCanvases[d], c.width = u, c.height = l, c.style.width = a + "px", c.style.height = i + "px";
      e.textureMult = 1, s <= 1 && (c = r.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, c.width = u * e.textureMult, c.height = l * e.textureMult), e.canvasWidth = u, e.canvasHeight = l, e.pixelRatio = s;
    }
  };
  Ft.renderTo = function(t, e, r, n) {
    this.render({
      forcedContext: t,
      forcedZoom: e,
      forcedPan: r,
      drawAllLayers: true,
      forcedPxRatio: n
    });
  };
  Ft.clearCanvas = function() {
    var t = this, e = t.data;
    function r(n) {
      n.clearRect(0, 0, t.canvasWidth, t.canvasHeight);
    }
    r(e.contexts[t.NODE]), r(e.contexts[t.DRAG]);
  };
  Ft.render = function(t) {
    var e = this;
    t = t || Wd();
    var r = e.cy, n = t.forcedContext, a = t.drawAllLayers, i = t.drawOnlyNodeLayer, s = t.forcedZoom, o = t.forcedPan, u = t.forcedPxRatio === void 0 ? this.getPixelRatio() : t.forcedPxRatio, l = e.data, c = l.canvasNeedsRedraw, f = e.textureOnViewport && !n && (e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming), d = t.motionBlur !== void 0 ? t.motionBlur : e.motionBlur, v = e.motionBlurPxRatio, h = r.hasCompoundNodes(), y = e.hoverData.draggingEles, p = !!(e.hoverData.selecting || e.touchData.selecting);
    d = d && !n && e.motionBlurEnabled && !p;
    var g = d;
    n || (e.prevPxRatio !== u && (e.invalidateContainerClientCoordsCache(), e.matchCanvasSize(e.container), e.redrawHint("eles", true), e.redrawHint("drag", true)), e.prevPxRatio = u), !n && e.motionBlurTimeout && clearTimeout(e.motionBlurTimeout), d && (e.mbFrames == null && (e.mbFrames = 0), e.mbFrames++, e.mbFrames < 3 && (g = false), e.mbFrames > e.minMbLowQualFrames && (e.motionBlurPxRatio = e.mbPxRBlurry)), e.clearingMotionBlur && (e.motionBlurPxRatio = 1), e.textureDrawLastFrame && !f && (c[e.NODE] = true, c[e.SELECT_BOX] = true);
    var b = r.style(), m = r.zoom(), x = s !== void 0 ? s : m, E = r.pan(), S = {
      x: E.x,
      y: E.y
    }, w = {
      zoom: m,
      pan: {
        x: E.x,
        y: E.y
      }
    }, T = e.prevViewport, C = T === void 0 || w.zoom !== T.zoom || w.pan.x !== T.pan.x || w.pan.y !== T.pan.y;
    !C && !(y && !h) && (e.motionBlurPxRatio = 1), o && (S = o), x *= u, S.x *= u, S.y *= u;
    var R = e.getCachedZSortedEles();
    function A(ee, F, V, q, X) {
      var ne = ee.globalCompositeOperation;
      ee.globalCompositeOperation = "destination-out", e.colorFillStyle(ee, 255, 255, 255, e.motionBlurTransparency), ee.fillRect(F, V, q, X), ee.globalCompositeOperation = ne;
    }
    function P(ee, F) {
      var V, q, X, ne;
      !e.clearingMotionBlur && (ee === l.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] || ee === l.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG]) ? (V = {
        x: E.x * v,
        y: E.y * v
      }, q = m * v, X = e.canvasWidth * v, ne = e.canvasHeight * v) : (V = S, q = x, X = e.canvasWidth, ne = e.canvasHeight), ee.setTransform(1, 0, 0, 1, 0, 0), F === "motionBlur" ? A(ee, 0, 0, X, ne) : !n && (F === void 0 || F) && ee.clearRect(0, 0, X, ne), a || (ee.translate(V.x, V.y), ee.scale(q, q)), o && ee.translate(o.x, o.y), s && ee.scale(s, s);
    }
    if (f || (e.textureDrawLastFrame = false), f) {
      if (e.textureDrawLastFrame = true, !e.textureCache) {
        e.textureCache = {}, e.textureCache.bb = r.mutableElements().boundingBox(), e.textureCache.texture = e.data.bufferCanvases[e.TEXTURE_BUFFER];
        var k = e.data.bufferContexts[e.TEXTURE_BUFFER];
        k.setTransform(1, 0, 0, 1, 0, 0), k.clearRect(0, 0, e.canvasWidth * e.textureMult, e.canvasHeight * e.textureMult), e.render({
          forcedContext: k,
          drawOnlyNodeLayer: true,
          forcedPxRatio: u * e.textureMult
        });
        var w = e.textureCache.viewport = {
          zoom: r.zoom(),
          pan: r.pan(),
          width: e.canvasWidth,
          height: e.canvasHeight
        };
        w.mpan = {
          x: (0 - w.pan.x) / w.zoom,
          y: (0 - w.pan.y) / w.zoom
        };
      }
      c[e.DRAG] = false, c[e.NODE] = false;
      var I = l.contexts[e.NODE], M = e.textureCache.texture, w = e.textureCache.viewport;
      I.setTransform(1, 0, 0, 1, 0, 0), d ? A(I, 0, 0, w.width, w.height) : I.clearRect(0, 0, w.width, w.height);
      var D = b.core("outside-texture-bg-color").value, B = b.core("outside-texture-bg-opacity").value;
      e.colorFillStyle(I, D[0], D[1], D[2], B), I.fillRect(0, 0, w.width, w.height);
      var m = r.zoom();
      P(I, false), I.clearRect(w.mpan.x, w.mpan.y, w.width / w.zoom / u, w.height / w.zoom / u), I.drawImage(M, w.mpan.x, w.mpan.y, w.width / w.zoom / u, w.height / w.zoom / u);
    } else e.textureOnViewport && !n && (e.textureCache = null);
    var O = r.extent(), z = e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming || e.hoverData.draggingEles || e.cy.animated(), U = e.hideEdgesOnViewport && z, N = [];
    if (N[e.NODE] = !c[e.NODE] && d && !e.clearedForMotionBlur[e.NODE] || e.clearingMotionBlur, N[e.NODE] && (e.clearedForMotionBlur[e.NODE] = true), N[e.DRAG] = !c[e.DRAG] && d && !e.clearedForMotionBlur[e.DRAG] || e.clearingMotionBlur, N[e.DRAG] && (e.clearedForMotionBlur[e.DRAG] = true), c[e.NODE] || a || i || N[e.NODE]) {
      var L = d && !N[e.NODE] && v !== 1, I = n || (L ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] : l.contexts[e.NODE]), H = d && !L ? "motionBlur" : void 0;
      P(I, H), U ? e.drawCachedNodes(I, R.nondrag, u, O) : e.drawLayeredElements(I, R.nondrag, u, O), e.debug && e.drawDebugPoints(I, R.nondrag), !a && !d && (c[e.NODE] = false);
    }
    if (!i && (c[e.DRAG] || a || N[e.DRAG])) {
      var L = d && !N[e.DRAG] && v !== 1, I = n || (L ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG] : l.contexts[e.DRAG]);
      P(I, d && !L ? "motionBlur" : void 0), U ? e.drawCachedNodes(I, R.drag, u, O) : e.drawCachedElements(I, R.drag, u, O), e.debug && e.drawDebugPoints(I, R.drag), !a && !d && (c[e.DRAG] = false);
    }
    if (this.drawSelectionRectangle(t, P), d && v !== 1) {
      var Y = l.contexts[e.NODE], K = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE], Q = l.contexts[e.DRAG], re = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG], ie = function(F, V, q) {
        F.setTransform(1, 0, 0, 1, 0, 0), q || !g ? F.clearRect(0, 0, e.canvasWidth, e.canvasHeight) : A(F, 0, 0, e.canvasWidth, e.canvasHeight);
        var X = v;
        F.drawImage(V, 0, 0, e.canvasWidth * X, e.canvasHeight * X, 0, 0, e.canvasWidth, e.canvasHeight);
      };
      (c[e.NODE] || N[e.NODE]) && (ie(Y, K, N[e.NODE]), c[e.NODE] = false), (c[e.DRAG] || N[e.DRAG]) && (ie(Q, re, N[e.DRAG]), c[e.DRAG] = false);
    }
    e.prevViewport = w, e.clearingMotionBlur && (e.clearingMotionBlur = false, e.motionBlurCleared = true, e.motionBlur = true), d && (e.motionBlurTimeout = setTimeout(function() {
      e.motionBlurTimeout = null, e.clearedForMotionBlur[e.NODE] = false, e.clearedForMotionBlur[e.DRAG] = false, e.motionBlur = false, e.clearingMotionBlur = !f, e.mbFrames = 0, c[e.NODE] = true, c[e.DRAG] = true, e.redraw();
    }, Ow)), n || r.emit("render");
  };
  var ua;
  Ft.drawSelectionRectangle = function(t, e) {
    var r = this, n = r.cy, a = r.data, i = n.style(), s = t.drawOnlyNodeLayer, o = t.drawAllLayers, u = a.canvasNeedsRedraw, l = t.forcedContext;
    if (r.showFps || !s && u[r.SELECT_BOX] && !o) {
      var c = l || a.contexts[r.SELECT_BOX];
      if (e(c), r.selection[4] == 1 && (r.hoverData.selecting || r.touchData.selecting)) {
        var f = r.cy.zoom(), d = i.core("selection-box-border-width").value / f;
        c.lineWidth = d, c.fillStyle = "rgba(" + i.core("selection-box-color").value[0] + "," + i.core("selection-box-color").value[1] + "," + i.core("selection-box-color").value[2] + "," + i.core("selection-box-opacity").value + ")", c.fillRect(r.selection[0], r.selection[1], r.selection[2] - r.selection[0], r.selection[3] - r.selection[1]), d > 0 && (c.strokeStyle = "rgba(" + i.core("selection-box-border-color").value[0] + "," + i.core("selection-box-border-color").value[1] + "," + i.core("selection-box-border-color").value[2] + "," + i.core("selection-box-opacity").value + ")", c.strokeRect(r.selection[0], r.selection[1], r.selection[2] - r.selection[0], r.selection[3] - r.selection[1]));
      }
      if (a.bgActivePosistion && !r.hoverData.selecting) {
        var f = r.cy.zoom(), v = a.bgActivePosistion;
        c.fillStyle = "rgba(" + i.core("active-bg-color").value[0] + "," + i.core("active-bg-color").value[1] + "," + i.core("active-bg-color").value[2] + "," + i.core("active-bg-opacity").value + ")", c.beginPath(), c.arc(v.x, v.y, i.core("active-bg-size").pfValue / f, 0, 2 * Math.PI), c.fill();
      }
      var h = r.lastRedrawTime;
      if (r.showFps && h) {
        h = Math.round(h);
        var y = Math.round(1e3 / h), p = "1 frame = " + h + " ms = " + y + " fps";
        if (c.setTransform(1, 0, 0, 1, 0, 0), c.fillStyle = "rgba(255, 0, 0, 0.75)", c.strokeStyle = "rgba(255, 0, 0, 0.75)", c.font = "30px Arial", !ua) {
          var g = c.measureText(p);
          ua = g.actualBoundingBoxAscent;
        }
        c.fillText(p, 0, ua);
        var b = 60;
        c.strokeRect(0, ua + 10, 250, 20), c.fillRect(0, ua + 10, 250 * Math.min(y / b, 1), 20);
      }
      o || (u[r.SELECT_BOX] = false);
    }
  };
  function Vf(t, e, r) {
    var n = t.createShader(e);
    if (t.shaderSource(n, r), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) throw new Error(t.getShaderInfoLog(n));
    return n;
  }
  function Nw(t, e, r) {
    var n = Vf(t, t.VERTEX_SHADER, e), a = Vf(t, t.FRAGMENT_SHADER, r), i = t.createProgram();
    if (t.attachShader(i, n), t.attachShader(i, a), t.linkProgram(i), !t.getProgramParameter(i, t.LINK_STATUS)) throw new Error("Could not initialize shaders");
    return i;
  }
  function zw(t, e, r) {
    r === void 0 && (r = e);
    var n = t.makeOffscreenCanvas(e, r), a = n.context = n.getContext("2d");
    return n.clear = function() {
      return a.clearRect(0, 0, n.width, n.height);
    }, n.clear(), n;
  }
  function tl(t) {
    var e = t.pixelRatio, r = t.cy.zoom(), n = t.cy.pan();
    return {
      zoom: r * e,
      pan: {
        x: n.x * e,
        y: n.y * e
      }
    };
  }
  function Lw(t) {
    var e = t.pixelRatio, r = t.cy.zoom();
    return r * e;
  }
  function Fw(t, e, r, n, a) {
    var i = n * r + e.x, s = a * r + e.y;
    return s = Math.round(t.canvasHeight - s), [
      i,
      s
    ];
  }
  function Vw(t) {
    return t.pstyle("background-fill").value !== "solid" || t.pstyle("background-image").strValue !== "none" ? false : t.pstyle("border-width").value === 0 || t.pstyle("border-opacity").value === 0 ? true : t.pstyle("border-style").value === "solid";
  }
  function $w(t, e) {
    if (t.length !== e.length) return false;
    for (var r = 0; r < t.length; r++) if (t[r] !== e[r]) return false;
    return true;
  }
  function Qr(t, e, r) {
    var n = t[0] / 255, a = t[1] / 255, i = t[2] / 255, s = e, o = r || new Array(4);
    return o[0] = n * s, o[1] = a * s, o[2] = i * s, o[3] = s, o;
  }
  function An(t, e) {
    var r = e || new Array(4);
    return r[0] = (t >> 0 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (t >> 16 & 255) / 255, r[3] = (t >> 24 & 255) / 255, r;
  }
  function Uw(t) {
    return t[0] + (t[1] << 8) + (t[2] << 16) + (t[3] << 24);
  }
  function qw(t, e) {
    var r = t.createTexture();
    return r.buffer = function(n) {
      t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_NEAREST), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n), t.generateMipmap(t.TEXTURE_2D), t.bindTexture(t.TEXTURE_2D, null);
    }, r.deleteTexture = function() {
      t.deleteTexture(r);
    }, r;
  }
  function ih(t, e) {
    switch (e) {
      case "float":
        return [
          1,
          t.FLOAT,
          4
        ];
      case "vec2":
        return [
          2,
          t.FLOAT,
          4
        ];
      case "vec3":
        return [
          3,
          t.FLOAT,
          4
        ];
      case "vec4":
        return [
          4,
          t.FLOAT,
          4
        ];
      case "int":
        return [
          1,
          t.INT,
          4
        ];
      case "ivec2":
        return [
          2,
          t.INT,
          4
        ];
    }
  }
  function sh(t, e, r) {
    switch (e) {
      case t.FLOAT:
        return new Float32Array(r);
      case t.INT:
        return new Int32Array(r);
    }
  }
  function Zw(t, e, r, n, a, i) {
    switch (e) {
      case t.FLOAT:
        return new Float32Array(r.buffer, i * n, a);
      case t.INT:
        return new Int32Array(r.buffer, i * n, a);
    }
  }
  function Gw(t, e, r, n) {
    var a = ih(t, e), i = ft(a, 2), s = i[0], o = i[1], u = sh(t, o, n), l = t.createBuffer();
    return t.bindBuffer(t.ARRAY_BUFFER, l), t.bufferData(t.ARRAY_BUFFER, u, t.STATIC_DRAW), o === t.FLOAT ? t.vertexAttribPointer(r, s, o, false, 0, 0) : o === t.INT && t.vertexAttribIPointer(r, s, o, 0, 0), t.enableVertexAttribArray(r), t.bindBuffer(t.ARRAY_BUFFER, null), l;
  }
  function ur(t, e, r, n) {
    var a = ih(t, r), i = ft(a, 3), s = i[0], o = i[1], u = i[2], l = sh(t, o, e * s), c = s * u, f = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, f), t.bufferData(t.ARRAY_BUFFER, e * c, t.DYNAMIC_DRAW), t.enableVertexAttribArray(n), o === t.FLOAT ? t.vertexAttribPointer(n, s, o, false, c, 0) : o === t.INT && t.vertexAttribIPointer(n, s, o, c, 0), t.vertexAttribDivisor(n, 1), t.bindBuffer(t.ARRAY_BUFFER, null);
    for (var d = new Array(e), v = 0; v < e; v++) d[v] = Zw(t, o, l, c, s, v);
    return f.dataArray = l, f.stride = c, f.size = s, f.getView = function(h) {
      return d[h];
    }, f.setPoint = function(h, y, p) {
      var g = d[h];
      g[0] = y, g[1] = p;
    }, f.bufferSubData = function(h) {
      t.bindBuffer(t.ARRAY_BUFFER, f), h ? t.bufferSubData(t.ARRAY_BUFFER, 0, l, 0, h * s) : t.bufferSubData(t.ARRAY_BUFFER, 0, l);
    }, f;
  }
  function Ww(t, e, r) {
    for (var n = 9, a = new Float32Array(e * n), i = new Array(e), s = 0; s < e; s++) {
      var o = s * n * 4;
      i[s] = new Float32Array(a.buffer, o, n);
    }
    var u = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, u), t.bufferData(t.ARRAY_BUFFER, a.byteLength, t.DYNAMIC_DRAW);
    for (var l = 0; l < 3; l++) {
      var c = r + l;
      t.enableVertexAttribArray(c), t.vertexAttribPointer(c, 3, t.FLOAT, false, 36, l * 12), t.vertexAttribDivisor(c, 1);
    }
    return t.bindBuffer(t.ARRAY_BUFFER, null), u.getMatrixView = function(f) {
      return i[f];
    }, u.setData = function(f, d) {
      i[d].set(f, 0);
    }, u.bufferSubData = function() {
      t.bindBuffer(t.ARRAY_BUFFER, u), t.bufferSubData(t.ARRAY_BUFFER, 0, a);
    }, u;
  }
  function Hw(t) {
    var e = t.createFramebuffer();
    t.bindFramebuffer(t.FRAMEBUFFER, e);
    var r = t.createTexture();
    return t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0), t.bindFramebuffer(t.FRAMEBUFFER, null), e.setFramebufferAttachmentSizes = function(n, a) {
      t.bindTexture(t.TEXTURE_2D, r), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, n, a, 0, t.RGBA, t.UNSIGNED_BYTE, null);
    }, e;
  }
  var $f = typeof Float32Array < "u" ? Float32Array : Array;
  Math.hypot || (Math.hypot = function() {
    for (var t = 0, e = arguments.length; e--; ) t += arguments[e] * arguments[e];
    return Math.sqrt(t);
  });
  function Go() {
    var t = new $f(9);
    return $f != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t;
  }
  function Uf(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
  }
  function Kw(t, e, r) {
    var n = e[0], a = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], f = e[8], d = r[0], v = r[1], h = r[2], y = r[3], p = r[4], g = r[5], b = r[6], m = r[7], x = r[8];
    return t[0] = d * n + v * s + h * l, t[1] = d * a + v * o + h * c, t[2] = d * i + v * u + h * f, t[3] = y * n + p * s + g * l, t[4] = y * a + p * o + g * c, t[5] = y * i + p * u + g * f, t[6] = b * n + m * s + x * l, t[7] = b * a + m * o + x * c, t[8] = b * i + m * u + x * f, t;
  }
  function Si(t, e, r) {
    var n = e[0], a = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], f = e[8], d = r[0], v = r[1];
    return t[0] = n, t[1] = a, t[2] = i, t[3] = s, t[4] = o, t[5] = u, t[6] = d * n + v * s + l, t[7] = d * a + v * o + c, t[8] = d * i + v * u + f, t;
  }
  function qf(t, e, r) {
    var n = e[0], a = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], f = e[8], d = Math.sin(r), v = Math.cos(r);
    return t[0] = v * n + d * s, t[1] = v * a + d * o, t[2] = v * i + d * u, t[3] = v * s - d * n, t[4] = v * o - d * a, t[5] = v * u - d * i, t[6] = l, t[7] = c, t[8] = f, t;
  }
  function xu(t, e, r) {
    var n = r[0], a = r[1];
    return t[0] = n * e[0], t[1] = n * e[1], t[2] = n * e[2], t[3] = a * e[3], t[4] = a * e[4], t[5] = a * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
  }
  function Yw(t, e, r) {
    return t[0] = 2 / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / r, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t;
  }
  var jw = (function() {
    function t(e, r, n, a) {
      Zr(this, t), this.debugID = Math.floor(Math.random() * 1e4), this.r = e, this.texSize = r, this.texRows = n, this.texHeight = Math.floor(r / n), this.enableWrapping = true, this.locked = false, this.texture = null, this.needsBuffer = true, this.freePointer = {
        x: 0,
        row: 0
      }, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = a(e, r, r), this.scratch = a(e, r, this.texHeight, "scratch");
    }
    return Gr(t, [
      {
        key: "lock",
        value: function() {
          this.locked = true;
        }
      },
      {
        key: "getKeys",
        value: function() {
          return new Set(this.keyToLocation.keys());
        }
      },
      {
        key: "getScale",
        value: function(r) {
          var n = r.w, a = r.h, i = this.texHeight, s = this.texSize, o = i / a, u = n * o, l = a * o;
          return u > s && (o = s / n, u = n * o, l = a * o), {
            scale: o,
            texW: u,
            texH: l
          };
        }
      },
      {
        key: "draw",
        value: function(r, n, a) {
          var i = this;
          if (this.locked) throw new Error("can't draw, atlas is locked");
          var s = this.texSize, o = this.texRows, u = this.texHeight, l = this.getScale(n), c = l.scale, f = l.texW, d = l.texH, v = function(m, x) {
            if (a && x) {
              var E = x.context, S = m.x, w = m.row, T = S, C = u * w;
              E.save(), E.translate(T, C), E.scale(c, c), a(E, n), E.restore();
            }
          }, h = [
            null,
            null
          ], y = function() {
            v(i.freePointer, i.canvas), h[0] = {
              x: i.freePointer.x,
              y: i.freePointer.row * u,
              w: f,
              h: d
            }, h[1] = {
              x: i.freePointer.x + f,
              y: i.freePointer.row * u,
              w: 0,
              h: d
            }, i.freePointer.x += f, i.freePointer.x == s && (i.freePointer.x = 0, i.freePointer.row++);
          }, p = function() {
            var m = i.scratch, x = i.canvas;
            m.clear(), v({
              x: 0,
              row: 0
            }, m);
            var E = s - i.freePointer.x, S = f - E, w = u;
            {
              var T = i.freePointer.x, C = i.freePointer.row * u, R = E;
              x.context.drawImage(m, 0, 0, R, w, T, C, R, w), h[0] = {
                x: T,
                y: C,
                w: R,
                h: d
              };
            }
            {
              var A = E, P = (i.freePointer.row + 1) * u, k = S;
              x && x.context.drawImage(m, A, 0, k, w, 0, P, k, w), h[1] = {
                x: 0,
                y: P,
                w: k,
                h: d
              };
            }
            i.freePointer.x = S, i.freePointer.row++;
          }, g = function() {
            i.freePointer.x = 0, i.freePointer.row++;
          };
          if (this.freePointer.x + f <= s) y();
          else {
            if (this.freePointer.row >= o - 1) return false;
            this.freePointer.x === s ? (g(), y()) : this.enableWrapping ? p() : (g(), y());
          }
          return this.keyToLocation.set(r, h), this.needsBuffer = true, h;
        }
      },
      {
        key: "getOffsets",
        value: function(r) {
          return this.keyToLocation.get(r);
        }
      },
      {
        key: "isEmpty",
        value: function() {
          return this.freePointer.x === 0 && this.freePointer.row === 0;
        }
      },
      {
        key: "canFit",
        value: function(r) {
          if (this.locked) return false;
          var n = this.texSize, a = this.texRows, i = this.getScale(r), s = i.texW;
          return this.freePointer.x + s > n ? this.freePointer.row < a - 1 : true;
        }
      },
      {
        key: "bufferIfNeeded",
        value: function(r) {
          this.texture || (this.texture = qw(r, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = false, this.locked && (this.canvas = null, this.scratch = null));
        }
      },
      {
        key: "dispose",
        value: function() {
          this.texture && (this.texture.deleteTexture(), this.texture = null), this.canvas = null, this.scratch = null, this.locked = true;
        }
      }
    ]);
  })(), Xw = (function() {
    function t(e, r, n, a) {
      Zr(this, t), this.r = e, this.texSize = r, this.texRows = n, this.createTextureCanvas = a, this.atlases = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
    }
    return Gr(t, [
      {
        key: "getKeys",
        value: function() {
          return new Set(this.styleKeyToAtlas.keys());
        }
      },
      {
        key: "_createAtlas",
        value: function() {
          var r = this.r, n = this.texSize, a = this.texRows, i = this.createTextureCanvas;
          return new jw(r, n, a, i);
        }
      },
      {
        key: "_getScratchCanvas",
        value: function() {
          if (!this.scratch) {
            var r = this.r, n = this.texSize, a = this.texRows, i = this.createTextureCanvas, s = Math.floor(n / a);
            this.scratch = i(r, n, s, "scratch");
          }
          return this.scratch;
        }
      },
      {
        key: "draw",
        value: function(r, n, a) {
          var i = this.styleKeyToAtlas.get(r);
          return i || (i = this.atlases[this.atlases.length - 1], (!i || !i.canFit(n)) && (i && i.lock(), i = this._createAtlas(), this.atlases.push(i)), i.draw(r, n, a), this.styleKeyToAtlas.set(r, i)), i;
        }
      },
      {
        key: "getAtlas",
        value: function(r) {
          return this.styleKeyToAtlas.get(r);
        }
      },
      {
        key: "hasAtlas",
        value: function(r) {
          return this.styleKeyToAtlas.has(r);
        }
      },
      {
        key: "markKeyForGC",
        value: function(r) {
          this.markedKeys.add(r);
        }
      },
      {
        key: "gc",
        value: function() {
          var r = this, n = this.markedKeys;
          if (n.size === 0) {
            console.log("nothing to garbage collect");
            return;
          }
          var a = [], i = /* @__PURE__ */ new Map(), s = null, o = Zt(this.atlases), u;
          try {
            var l = function() {
              var f = u.value, d = f.getKeys(), v = Jw(n, d);
              if (v.size === 0) return a.push(f), d.forEach(function(E) {
                return i.set(E, f);
              }), 1;
              s || (s = r._createAtlas(), a.push(s));
              var h = Zt(d), y;
              try {
                for (h.s(); !(y = h.n()).done; ) {
                  var p = y.value;
                  if (!v.has(p)) {
                    var g = f.getOffsets(p), b = ft(g, 2), m = b[0], x = b[1];
                    s.canFit({
                      w: m.w + x.w,
                      h: m.h
                    }) || (s.lock(), s = r._createAtlas(), a.push(s)), f.canvas && (r._copyTextureToNewAtlas(p, f, s), i.set(p, s));
                  }
                }
              } catch (E) {
                h.e(E);
              } finally {
                h.f();
              }
              f.dispose();
            };
            for (o.s(); !(u = o.n()).done; ) l();
          } catch (c) {
            o.e(c);
          } finally {
            o.f();
          }
          this.atlases = a, this.styleKeyToAtlas = i, this.markedKeys = /* @__PURE__ */ new Set();
        }
      },
      {
        key: "_copyTextureToNewAtlas",
        value: function(r, n, a) {
          var i = n.getOffsets(r), s = ft(i, 2), o = s[0], u = s[1];
          if (u.w === 0) a.draw(r, o, function(d) {
            d.drawImage(n.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h);
          });
          else {
            var l = this._getScratchCanvas();
            l.clear(), l.context.drawImage(n.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h), l.context.drawImage(n.canvas, u.x, u.y, u.w, u.h, o.w, 0, u.w, u.h);
            var c = o.w + u.w, f = o.h;
            a.draw(r, {
              w: c,
              h: f
            }, function(d) {
              d.drawImage(l, 0, 0, c, f, 0, 0, c, f);
            });
          }
        }
      },
      {
        key: "getCounts",
        value: function() {
          return {
            keyCount: this.styleKeyToAtlas.size,
            atlasCount: new Set(this.styleKeyToAtlas.values()).size
          };
        }
      }
    ]);
  })();
  function Jw(t, e) {
    return t.intersection ? t.intersection(e) : new Set(Pi(t).filter(function(r) {
      return e.has(r);
    }));
  }
  var Qw = (function() {
    function t(e, r) {
      Zr(this, t), this.r = e, this.globalOptions = r, this.atlasSize = r.webglTexSize, this.maxAtlasesPerBatch = r.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this.collections = /* @__PURE__ */ new Map(), this.typeAndIdToKey = /* @__PURE__ */ new Map();
    }
    return Gr(t, [
      {
        key: "getAtlasSize",
        value: function() {
          return this.atlasSize;
        }
      },
      {
        key: "addAtlasCollection",
        value: function(r, n) {
          var a = this.globalOptions, i = a.webglTexSize, s = a.createTextureCanvas, o = n.texRows, u = this._cacheScratchCanvas(s), l = new Xw(this.r, i, o, u);
          this.collections.set(r, l);
        }
      },
      {
        key: "addRenderType",
        value: function(r, n) {
          var a = n.collection;
          if (!this.collections.has(a)) throw new Error("invalid atlas collection name '".concat(a, "'"));
          var i = this.collections.get(a), s = Ee({
            type: r,
            atlasCollection: i
          }, n);
          this.renderTypes.set(r, s);
        }
      },
      {
        key: "getRenderTypeOpts",
        value: function(r) {
          return this.renderTypes.get(r);
        }
      },
      {
        key: "getAtlasCollection",
        value: function(r) {
          return this.collections.get(r);
        }
      },
      {
        key: "_cacheScratchCanvas",
        value: function(r) {
          var n = -1, a = -1, i = null;
          return function(s, o, u, l) {
            return l ? ((!i || o != n || u != a) && (n = o, a = u, i = r(s, o, u)), i) : r(s, o, u);
          };
        }
      },
      {
        key: "_key",
        value: function(r, n) {
          return "".concat(r, "-").concat(n);
        }
      },
      {
        key: "invalidate",
        value: function(r) {
          var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = a.forceRedraw, s = i === void 0 ? false : i, o = a.filterEle, u = o === void 0 ? function() {
            return true;
          } : o, l = a.filterType, c = l === void 0 ? function() {
            return true;
          } : l, f = false, d = false, v = Zt(r), h;
          try {
            for (v.s(); !(h = v.n()).done; ) {
              var y = h.value;
              if (u(y)) {
                var p = Zt(this.renderTypes.values()), g;
                try {
                  var b = function() {
                    var x = g.value, E = x.type;
                    if (c(E)) {
                      var S = n.collections.get(x.collection), w = x.getKey(y), T = Array.isArray(w) ? w : [
                        w
                      ];
                      if (s) T.forEach(function(P) {
                        return S.markKeyForGC(P);
                      }), d = true;
                      else {
                        var C = x.getID ? x.getID(y) : y.id(), R = n._key(E, C), A = n.typeAndIdToKey.get(R);
                        A !== void 0 && !$w(T, A) && (f = true, n.typeAndIdToKey.delete(R), A.forEach(function(P) {
                          return S.markKeyForGC(P);
                        }));
                      }
                    }
                  };
                  for (p.s(); !(g = p.n()).done; ) b();
                } catch (m) {
                  p.e(m);
                } finally {
                  p.f();
                }
              }
            }
          } catch (m) {
            v.e(m);
          } finally {
            v.f();
          }
          return d && (this.gc(), f = false), f;
        }
      },
      {
        key: "gc",
        value: function() {
          var r = Zt(this.collections.values()), n;
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var a = n.value;
              a.gc();
            }
          } catch (i) {
            r.e(i);
          } finally {
            r.f();
          }
        }
      },
      {
        key: "getOrCreateAtlas",
        value: function(r, n, a, i) {
          var s = this.renderTypes.get(n), o = this.collections.get(s.collection), u = false, l = o.draw(i, a, function(d) {
            s.drawClipped ? (d.save(), d.beginPath(), d.rect(0, 0, a.w, a.h), d.clip(), s.drawElement(d, r, a, true, true), d.restore()) : s.drawElement(d, r, a, true, true), u = true;
          });
          if (u) {
            var c = s.getID ? s.getID(r) : r.id(), f = this._key(n, c);
            this.typeAndIdToKey.has(f) ? this.typeAndIdToKey.get(f).push(i) : this.typeAndIdToKey.set(f, [
              i
            ]);
          }
          return l;
        }
      },
      {
        key: "getAtlasInfo",
        value: function(r, n) {
          var a = this, i = this.renderTypes.get(n), s = i.getKey(r), o = Array.isArray(s) ? s : [
            s
          ];
          return o.map(function(u) {
            var l = i.getBoundingBox(r, u), c = a.getOrCreateAtlas(r, n, l, u), f = c.getOffsets(u), d = ft(f, 2), v = d[0], h = d[1];
            return {
              atlas: c,
              tex: v,
              tex1: v,
              tex2: h,
              bb: l
            };
          });
        }
      },
      {
        key: "getDebugInfo",
        value: function() {
          var r = [], n = Zt(this.collections), a;
          try {
            for (n.s(); !(a = n.n()).done; ) {
              var i = ft(a.value, 2), s = i[0], o = i[1], u = o.getCounts(), l = u.keyCount, c = u.atlasCount;
              r.push({
                type: s,
                keyCount: l,
                atlasCount: c
              });
            }
          } catch (f) {
            n.e(f);
          } finally {
            n.f();
          }
          return r;
        }
      }
    ]);
  })(), e1 = (function() {
    function t(e) {
      Zr(this, t), this.globalOptions = e, this.atlasSize = e.webglTexSize, this.maxAtlasesPerBatch = e.webglTexPerBatch, this.batchAtlases = [];
    }
    return Gr(t, [
      {
        key: "getMaxAtlasesPerBatch",
        value: function() {
          return this.maxAtlasesPerBatch;
        }
      },
      {
        key: "getAtlasSize",
        value: function() {
          return this.atlasSize;
        }
      },
      {
        key: "getIndexArray",
        value: function() {
          return Array.from({
            length: this.maxAtlasesPerBatch
          }, function(r, n) {
            return n;
          });
        }
      },
      {
        key: "startBatch",
        value: function() {
          this.batchAtlases = [];
        }
      },
      {
        key: "getAtlasCount",
        value: function() {
          return this.batchAtlases.length;
        }
      },
      {
        key: "getAtlases",
        value: function() {
          return this.batchAtlases;
        }
      },
      {
        key: "canAddToCurrentBatch",
        value: function(r) {
          return this.batchAtlases.length === this.maxAtlasesPerBatch ? this.batchAtlases.includes(r) : true;
        }
      },
      {
        key: "getAtlasIndexForBatch",
        value: function(r) {
          var n = this.batchAtlases.indexOf(r);
          if (n < 0) {
            if (this.batchAtlases.length === this.maxAtlasesPerBatch) throw new Error("cannot add more atlases to batch");
            this.batchAtlases.push(r), n = this.batchAtlases.length - 1;
          }
          return n;
        }
      }
    ]);
  })(), t1 = `
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`, r1 = `
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`, n1 = `
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`, a1 = `
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`, ma = {
    SCREEN: {
      name: "screen",
      screen: true
    },
    PICKING: {
      name: "picking",
      picking: true
    }
  }, $i = {
    IGNORE: 1,
    USE_BB: 2
  }, Wo = 0, Zf = 1, Gf = 2, Ho = 3, kn = 4, li = 5, la = 6, ca = 7, i1 = (function() {
    function t(e, r, n) {
      Zr(this, t), this.r = e, this.gl = r, this.maxInstances = n.webglBatchSize, this.atlasSize = n.webglTexSize, this.bgColor = n.bgColor, this.debug = n.webglDebug, this.batchDebugInfo = [], n.enableWrapping = true, n.createTextureCanvas = zw, this.atlasManager = new Qw(e, n), this.batchManager = new e1(n), this.simpleShapeOptions = /* @__PURE__ */ new Map(), this.program = this._createShaderProgram(ma.SCREEN), this.pickingProgram = this._createShaderProgram(ma.PICKING), this.vao = this._createVAO();
    }
    return Gr(t, [
      {
        key: "addAtlasCollection",
        value: function(r, n) {
          this.atlasManager.addAtlasCollection(r, n);
        }
      },
      {
        key: "addTextureAtlasRenderType",
        value: function(r, n) {
          this.atlasManager.addRenderType(r, n);
        }
      },
      {
        key: "addSimpleShapeRenderType",
        value: function(r, n) {
          this.simpleShapeOptions.set(r, n);
        }
      },
      {
        key: "invalidate",
        value: function(r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.type, i = this.atlasManager;
          return a ? i.invalidate(r, {
            filterType: function(o) {
              return o === a;
            },
            forceRedraw: true
          }) : i.invalidate(r);
        }
      },
      {
        key: "gc",
        value: function() {
          this.atlasManager.gc();
        }
      },
      {
        key: "_createShaderProgram",
        value: function(r) {
          var n = this.gl, a = `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == `.concat(Wo, `) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(kn, " || aVertType == ").concat(ca, ` 
             || aVertType == `).concat(li, " || aVertType == ").concat(la, `) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(Zf, `) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == `).concat(Gf, `) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == `).concat(Ho, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `), i = this.batchManager.getIndexArray(), s = `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      `.concat(i.map(function(l) {
            return "uniform sampler2D uTexture".concat(l, ";");
          }).join(`
	`), `

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      `).concat(t1, `
      `).concat(r1, `
      `).concat(n1, `
      `).concat(a1, `

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == `).concat(Wo, `) {
          // look up the texel from the texture unit
          `).concat(i.map(function(l) {
            return "if(vAtlasId == ".concat(l, ") outColor = texture(uTexture").concat(l, ", vTexCoord);");
          }).join(`
	else `), `
        } 
        else if(vVertType == `).concat(Ho, `) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == `).concat(kn, ` && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == `).concat(kn, " || vVertType == ").concat(ca, ` 
          || vVertType == `).concat(li, " || vVertType == ").concat(la, `) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == `).concat(kn, `) {
            d = rectangleSD(p, b);
          } else if(vVertType == `).concat(ca, ` && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == `).concat(ca, `) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        `).concat(r.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : "", `
      }
    `), o = Nw(n, a, s);
          o.aPosition = n.getAttribLocation(o, "aPosition"), o.aIndex = n.getAttribLocation(o, "aIndex"), o.aVertType = n.getAttribLocation(o, "aVertType"), o.aTransform = n.getAttribLocation(o, "aTransform"), o.aAtlasId = n.getAttribLocation(o, "aAtlasId"), o.aTex = n.getAttribLocation(o, "aTex"), o.aPointAPointB = n.getAttribLocation(o, "aPointAPointB"), o.aPointCPointD = n.getAttribLocation(o, "aPointCPointD"), o.aLineWidth = n.getAttribLocation(o, "aLineWidth"), o.aColor = n.getAttribLocation(o, "aColor"), o.aCornerRadius = n.getAttribLocation(o, "aCornerRadius"), o.aBorderColor = n.getAttribLocation(o, "aBorderColor"), o.uPanZoomMatrix = n.getUniformLocation(o, "uPanZoomMatrix"), o.uAtlasSize = n.getUniformLocation(o, "uAtlasSize"), o.uBGColor = n.getUniformLocation(o, "uBGColor"), o.uZoom = n.getUniformLocation(o, "uZoom"), o.uTextures = [];
          for (var u = 0; u < this.batchManager.getMaxAtlasesPerBatch(); u++) o.uTextures.push(n.getUniformLocation(o, "uTexture".concat(u)));
          return o;
        }
      },
      {
        key: "_createVAO",
        value: function() {
          var r = [
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            0,
            1,
            1,
            0,
            1
          ];
          this.vertexCount = r.length / 2;
          var n = this.maxInstances, a = this.gl, i = this.program, s = a.createVertexArray();
          return a.bindVertexArray(s), Gw(a, "vec2", i.aPosition, r), this.transformBuffer = Ww(a, n, i.aTransform), this.indexBuffer = ur(a, n, "vec4", i.aIndex), this.vertTypeBuffer = ur(a, n, "int", i.aVertType), this.atlasIdBuffer = ur(a, n, "int", i.aAtlasId), this.texBuffer = ur(a, n, "vec4", i.aTex), this.pointAPointBBuffer = ur(a, n, "vec4", i.aPointAPointB), this.pointCPointDBuffer = ur(a, n, "vec4", i.aPointCPointD), this.lineWidthBuffer = ur(a, n, "vec2", i.aLineWidth), this.colorBuffer = ur(a, n, "vec4", i.aColor), this.cornerRadiusBuffer = ur(a, n, "vec4", i.aCornerRadius), this.borderColorBuffer = ur(a, n, "vec4", i.aBorderColor), a.bindVertexArray(null), s;
        }
      },
      {
        key: "buffers",
        get: function() {
          var r = this;
          return this._buffers || (this._buffers = Object.keys(this).filter(function(n) {
            return _r(n, "Buffer");
          }).map(function(n) {
            return r[n];
          })), this._buffers;
        }
      },
      {
        key: "startFrame",
        value: function(r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ma.SCREEN;
          this.panZoomMatrix = r, this.renderTarget = n, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
        }
      },
      {
        key: "startBatch",
        value: function() {
          this.instanceCount = 0, this.batchManager.startBatch();
        }
      },
      {
        key: "endFrame",
        value: function() {
          this.endBatch();
        }
      },
      {
        key: "_isVisible",
        value: function(r, n) {
          return r.visible() ? n && n.isVisible ? n.isVisible(r) : true : false;
        }
      },
      {
        key: "drawTexture",
        value: function(r, n, a) {
          var i = this.atlasManager, s = this.batchManager, o = i.getRenderTypeOpts(a);
          if (this._isVisible(r, o) && !(r.isEdge() && !this._isValidEdge(r))) {
            if (this.renderTarget.picking && o.getTexPickingMode) {
              var u = o.getTexPickingMode(r);
              if (u === $i.IGNORE) return;
              if (u == $i.USE_BB) {
                this.drawPickingRectangle(r, n, a);
                return;
              }
            }
            var l = i.getAtlasInfo(r, a), c = Zt(l), f;
            try {
              for (c.s(); !(f = c.n()).done; ) {
                var d = f.value, v = d.atlas, h = d.tex1, y = d.tex2;
                s.canAddToCurrentBatch(v) || this.endBatch();
                for (var p = s.getAtlasIndexForBatch(v), g = 0, b = [
                  [
                    h,
                    true
                  ],
                  [
                    y,
                    false
                  ]
                ]; g < b.length; g++) {
                  var m = ft(b[g], 2), x = m[0], E = m[1];
                  if (x.w != 0) {
                    var S = this.instanceCount;
                    this.vertTypeBuffer.getView(S)[0] = Wo;
                    var w = this.indexBuffer.getView(S);
                    An(n, w);
                    var T = this.atlasIdBuffer.getView(S);
                    T[0] = p;
                    var C = this.texBuffer.getView(S);
                    C[0] = x.x, C[1] = x.y, C[2] = x.w, C[3] = x.h;
                    var R = this.transformBuffer.getMatrixView(S);
                    this.setTransformMatrix(r, R, o, d, E), this.instanceCount++, E || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                  }
                }
              }
            } catch (A) {
              c.e(A);
            } finally {
              c.f();
            }
          }
        }
      },
      {
        key: "setTransformMatrix",
        value: function(r, n, a, i) {
          var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, o = 0;
          if (a.shapeProps && a.shapeProps.padding && (o = r.pstyle(a.shapeProps.padding).pfValue), i) {
            var u = i.bb, l = i.tex1, c = i.tex2, f = l.w / (l.w + c.w);
            s || (f = 1 - f);
            var d = this._getAdjustedBB(u, o, s, f);
            this._applyTransformMatrix(n, d, a, r);
          } else {
            var v = a.getBoundingBox(r), h = this._getAdjustedBB(v, o, true, 1);
            this._applyTransformMatrix(n, h, a, r);
          }
        }
      },
      {
        key: "_applyTransformMatrix",
        value: function(r, n, a, i) {
          var s, o;
          Uf(r);
          var u = a.getRotation ? a.getRotation(i) : 0;
          if (u !== 0) {
            var l = a.getRotationPoint(i), c = l.x, f = l.y;
            Si(r, r, [
              c,
              f
            ]), qf(r, r, u);
            var d = a.getRotationOffset(i);
            s = d.x + (n.xOffset || 0), o = d.y + (n.yOffset || 0);
          } else s = n.x1, o = n.y1;
          Si(r, r, [
            s,
            o
          ]), xu(r, r, [
            n.w,
            n.h
          ]);
        }
      },
      {
        key: "_getAdjustedBB",
        value: function(r, n, a, i) {
          var s = r.x1, o = r.y1, u = r.w, l = r.h, c = r.yOffset;
          n && (s -= n, o -= n, u += 2 * n, l += 2 * n);
          var f = 0, d = u * i;
          return a && i < 1 ? u = d : !a && i < 1 && (f = u - d, s += f, u = d), {
            x1: s,
            y1: o,
            w: u,
            h: l,
            xOffset: f,
            yOffset: c
          };
        }
      },
      {
        key: "drawPickingRectangle",
        value: function(r, n, a) {
          var i = this.atlasManager.getRenderTypeOpts(a), s = this.instanceCount;
          this.vertTypeBuffer.getView(s)[0] = kn;
          var o = this.indexBuffer.getView(s);
          An(n, o);
          var u = this.colorBuffer.getView(s);
          Qr([
            0,
            0,
            0
          ], 1, u);
          var l = this.transformBuffer.getMatrixView(s);
          this.setTransformMatrix(r, l, i), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
        }
      },
      {
        key: "drawNode",
        value: function(r, n, a) {
          var i = this.simpleShapeOptions.get(a);
          if (this._isVisible(r, i)) {
            var s = i.shapeProps, o = this._getVertTypeForShape(r, s.shape);
            if (o === void 0 || i.isSimple && !i.isSimple(r)) {
              this.drawTexture(r, n, a);
              return;
            }
            var u = this.instanceCount;
            if (this.vertTypeBuffer.getView(u)[0] = o, o === li || o === la) {
              var l = i.getBoundingBox(r), c = this._getCornerRadius(r, s.radius, l), f = this.cornerRadiusBuffer.getView(u);
              f[0] = c, f[1] = c, f[2] = c, f[3] = c, o === la && (f[0] = 0, f[2] = 0);
            }
            var d = this.indexBuffer.getView(u);
            An(n, d);
            var v = r.pstyle(s.color).value, h = r.pstyle(s.opacity).value, y = this.colorBuffer.getView(u);
            Qr(v, h, y);
            var p = this.lineWidthBuffer.getView(u);
            if (p[0] = 0, p[1] = 0, s.border) {
              var g = r.pstyle("border-width").value;
              if (g > 0) {
                var b = r.pstyle("border-color").value, m = r.pstyle("border-opacity").value, x = this.borderColorBuffer.getView(u);
                Qr(b, m, x);
                var E = r.pstyle("border-position").value;
                if (E === "inside") p[0] = 0, p[1] = -g;
                else if (E === "outside") p[0] = g, p[1] = 0;
                else {
                  var S = g / 2;
                  p[0] = S, p[1] = -S;
                }
              }
            }
            var w = this.transformBuffer.getMatrixView(u);
            this.setTransformMatrix(r, w, i), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          }
        }
      },
      {
        key: "_getVertTypeForShape",
        value: function(r, n) {
          var a = r.pstyle(n).value;
          switch (a) {
            case "rectangle":
              return kn;
            case "ellipse":
              return ca;
            case "roundrectangle":
            case "round-rectangle":
              return li;
            case "bottom-round-rectangle":
              return la;
            default:
              return;
          }
        }
      },
      {
        key: "_getCornerRadius",
        value: function(r, n, a) {
          var i = a.w, s = a.h;
          if (r.pstyle(n).value === "auto") return Lr(i, s);
          var o = r.pstyle(n).pfValue, u = i / 2, l = s / 2;
          return Math.min(o, l, u);
        }
      },
      {
        key: "drawEdgeArrow",
        value: function(r, n, a) {
          if (r.visible()) {
            var i = r._private.rscratch, s, o, u;
            if (a === "source" ? (s = i.arrowStartX, o = i.arrowStartY, u = i.srcArrowAngle) : (s = i.arrowEndX, o = i.arrowEndY, u = i.tgtArrowAngle), !(isNaN(s) || s == null || isNaN(o) || o == null || isNaN(u) || u == null)) {
              var l = r.pstyle(a + "-arrow-shape").value;
              if (l !== "none") {
                var c = r.pstyle(a + "-arrow-color").value, f = r.pstyle("opacity").value, d = r.pstyle("line-opacity").value, v = f * d, h = r.pstyle("width").pfValue, y = r.pstyle("arrow-scale").value, p = this.r.getArrowWidth(h, y), g = this.instanceCount, b = this.transformBuffer.getMatrixView(g);
                Uf(b), Si(b, b, [
                  s,
                  o
                ]), xu(b, b, [
                  p,
                  p
                ]), qf(b, b, u), this.vertTypeBuffer.getView(g)[0] = Ho;
                var m = this.indexBuffer.getView(g);
                An(n, m);
                var x = this.colorBuffer.getView(g);
                Qr(c, v, x), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
              }
            }
          }
        }
      },
      {
        key: "drawEdgeLine",
        value: function(r, n) {
          if (r.visible()) {
            var a = this._getEdgePoints(r);
            if (a) {
              var i = r.pstyle("opacity").value, s = r.pstyle("line-opacity").value, o = r.pstyle("width").pfValue, u = r.pstyle("line-color").value, l = i * s;
              if (a.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), a.length == 4) {
                var c = this.instanceCount;
                this.vertTypeBuffer.getView(c)[0] = Zf;
                var f = this.indexBuffer.getView(c);
                An(n, f);
                var d = this.colorBuffer.getView(c);
                Qr(u, l, d);
                var v = this.lineWidthBuffer.getView(c);
                v[0] = o;
                var h = this.pointAPointBBuffer.getView(c);
                h[0] = a[0], h[1] = a[1], h[2] = a[2], h[3] = a[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
              } else for (var y = 0; y < a.length - 2; y += 2) {
                var p = this.instanceCount;
                this.vertTypeBuffer.getView(p)[0] = Gf;
                var g = this.indexBuffer.getView(p);
                An(n, g);
                var b = this.colorBuffer.getView(p);
                Qr(u, l, b);
                var m = this.lineWidthBuffer.getView(p);
                m[0] = o;
                var x = a[y - 2], E = a[y - 1], S = a[y], w = a[y + 1], T = a[y + 2], C = a[y + 3], R = a[y + 4], A = a[y + 5];
                y == 0 && (x = 2 * S - T + 1e-3, E = 2 * w - C + 1e-3), y == a.length - 4 && (R = 2 * T - S + 1e-3, A = 2 * C - w + 1e-3);
                var P = this.pointAPointBBuffer.getView(p);
                P[0] = x, P[1] = E, P[2] = S, P[3] = w;
                var k = this.pointCPointDBuffer.getView(p);
                k[0] = T, k[1] = C, k[2] = R, k[3] = A, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
              }
            }
          }
        }
      },
      {
        key: "_isValidEdge",
        value: function(r) {
          var n = r._private.rscratch;
          return !(n.badLine || n.allpts == null || isNaN(n.allpts[0]));
        }
      },
      {
        key: "_getEdgePoints",
        value: function(r) {
          var n = r._private.rscratch;
          if (this._isValidEdge(r)) {
            var a = n.allpts;
            if (a.length == 4) return a;
            var i = this._getNumSegments(r);
            return this._getCurveSegmentPoints(a, i);
          }
        }
      },
      {
        key: "_getNumSegments",
        value: function(r) {
          var n = 15;
          return Math.min(Math.max(n, 5), this.maxInstances);
        }
      },
      {
        key: "_getCurveSegmentPoints",
        value: function(r, n) {
          if (r.length == 4) return r;
          for (var a = Array((n + 1) * 2), i = 0; i <= n; i++) if (i == 0) a[0] = r[0], a[1] = r[1];
          else if (i == n) a[i * 2] = r[r.length - 2], a[i * 2 + 1] = r[r.length - 1];
          else {
            var s = i / n;
            this._setCurvePoint(r, s, a, i * 2);
          }
          return a;
        }
      },
      {
        key: "_setCurvePoint",
        value: function(r, n, a, i) {
          if (r.length <= 2) a[i] = r[0], a[i + 1] = r[1];
          else {
            for (var s = Array(r.length - 2), o = 0; o < s.length; o += 2) {
              var u = (1 - n) * r[o] + n * r[o + 2], l = (1 - n) * r[o + 1] + n * r[o + 3];
              s[o] = u, s[o + 1] = l;
            }
            return this._setCurvePoint(s, n, a, i);
          }
        }
      },
      {
        key: "endBatch",
        value: function() {
          var r = this.gl, n = this.vao, a = this.vertexCount, i = this.instanceCount;
          if (i !== 0) {
            var s = this.renderTarget.picking ? this.pickingProgram : this.program;
            r.useProgram(s), r.bindVertexArray(n);
            var o = Zt(this.buffers), u;
            try {
              for (o.s(); !(u = o.n()).done; ) {
                var l = u.value;
                l.bufferSubData(i);
              }
            } catch (h) {
              o.e(h);
            } finally {
              o.f();
            }
            for (var c = this.batchManager.getAtlases(), f = 0; f < c.length; f++) c[f].bufferIfNeeded(r);
            for (var d = 0; d < c.length; d++) r.activeTexture(r.TEXTURE0 + d), r.bindTexture(r.TEXTURE_2D, c[d].texture), r.uniform1i(s.uTextures[d], d);
            r.uniform1f(s.uZoom, Lw(this.r)), r.uniformMatrix3fv(s.uPanZoomMatrix, false, this.panZoomMatrix), r.uniform1i(s.uAtlasSize, this.batchManager.getAtlasSize());
            var v = Qr(this.bgColor, 1);
            r.uniform4fv(s.uBGColor, v), r.drawArraysInstanced(r.TRIANGLES, 0, a, i), r.bindVertexArray(null), r.bindTexture(r.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({
              count: i,
              atlasCount: c.length
            }), this.startBatch();
          }
        }
      },
      {
        key: "getDebugInfo",
        value: function() {
          var r = this.atlasManager.getDebugInfo(), n = r.reduce(function(s, o) {
            return s + o.atlasCount;
          }, 0), a = this.batchDebugInfo, i = a.reduce(function(s, o) {
            return s + o.count;
          }, 0);
          return {
            atlasInfo: r,
            totalAtlases: n,
            wrappedCount: this.wrappedCount,
            simpleCount: this.simpleCount,
            batchCount: a.length,
            batchInfo: a,
            totalInstances: i
          };
        }
      }
    ]);
  })(), oh = {};
  oh.initWebgl = function(t, e) {
    var r = this, n = r.data.contexts[r.WEBGL];
    t.bgColor = s1(r), t.webglTexSize = Math.min(t.webglTexSize, n.getParameter(n.MAX_TEXTURE_SIZE)), t.webglTexRows = Math.min(t.webglTexRows, 54), t.webglTexRowsNodes = Math.min(t.webglTexRowsNodes, 54), t.webglBatchSize = Math.min(t.webglBatchSize, 16384), t.webglTexPerBatch = Math.min(t.webglTexPerBatch, n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)), r.webglDebug = t.webglDebug, r.webglDebugShowAtlases = t.webglDebugShowAtlases, r.pickingFrameBuffer = Hw(n), r.pickingFrameBuffer.needsDraw = true, r.drawing = new i1(r, n, t);
    var a = function(f) {
      return function(d) {
        return r.getTextAngle(d, f);
      };
    }, i = function(f) {
      return function(d) {
        var v = d.pstyle(f);
        return v && v.value;
      };
    }, s = function(f) {
      return function(d) {
        return d.pstyle("".concat(f, "-opacity")).value > 0;
      };
    }, o = function(f) {
      var d = f.pstyle("text-events").strValue === "yes";
      return d ? $i.USE_BB : $i.IGNORE;
    }, u = function(f) {
      var d = f.position(), v = d.x, h = d.y, y = f.outerWidth(), p = f.outerHeight();
      return {
        w: y,
        h: p,
        x1: v - y / 2,
        y1: h - p / 2
      };
    };
    r.drawing.addAtlasCollection("node", {
      texRows: t.webglTexRowsNodes
    }), r.drawing.addAtlasCollection("label", {
      texRows: t.webglTexRows
    }), r.drawing.addTextureAtlasRenderType("node-body", {
      collection: "node",
      getKey: e.getStyleKey,
      getBoundingBox: e.getElementBox,
      drawElement: e.drawElement
    }), r.drawing.addSimpleShapeRenderType("node-body", {
      getBoundingBox: u,
      isSimple: Vw,
      shapeProps: {
        shape: "shape",
        color: "background-color",
        opacity: "background-opacity",
        radius: "corner-radius",
        border: true
      }
    }), r.drawing.addSimpleShapeRenderType("node-overlay", {
      getBoundingBox: u,
      isVisible: s("overlay"),
      shapeProps: {
        shape: "overlay-shape",
        color: "overlay-color",
        opacity: "overlay-opacity",
        padding: "overlay-padding",
        radius: "overlay-corner-radius"
      }
    }), r.drawing.addSimpleShapeRenderType("node-underlay", {
      getBoundingBox: u,
      isVisible: s("underlay"),
      shapeProps: {
        shape: "underlay-shape",
        color: "underlay-color",
        opacity: "underlay-opacity",
        padding: "underlay-padding",
        radius: "underlay-corner-radius"
      }
    }), r.drawing.addTextureAtlasRenderType("label", {
      collection: "label",
      getTexPickingMode: o,
      getKey: Ko(e.getLabelKey, null),
      getBoundingBox: Yo(e.getLabelBox, null),
      drawClipped: true,
      drawElement: e.drawLabel,
      getRotation: a(null),
      getRotationPoint: e.getLabelRotationPoint,
      getRotationOffset: e.getLabelRotationOffset,
      isVisible: i("label")
    }), r.drawing.addTextureAtlasRenderType("edge-source-label", {
      collection: "label",
      getTexPickingMode: o,
      getKey: Ko(e.getSourceLabelKey, "source"),
      getBoundingBox: Yo(e.getSourceLabelBox, "source"),
      drawClipped: true,
      drawElement: e.drawSourceLabel,
      getRotation: a("source"),
      getRotationPoint: e.getSourceLabelRotationPoint,
      getRotationOffset: e.getSourceLabelRotationOffset,
      isVisible: i("source-label")
    }), r.drawing.addTextureAtlasRenderType("edge-target-label", {
      collection: "label",
      getTexPickingMode: o,
      getKey: Ko(e.getTargetLabelKey, "target"),
      getBoundingBox: Yo(e.getTargetLabelBox, "target"),
      drawClipped: true,
      drawElement: e.drawTargetLabel,
      getRotation: a("target"),
      getRotationPoint: e.getTargetLabelRotationPoint,
      getRotationOffset: e.getTargetLabelRotationOffset,
      isVisible: i("target-label")
    });
    var l = La(function() {
      console.log("garbage collect flag set"), r.data.gc = true;
    }, 1e4);
    r.onUpdateEleCalcs(function(c, f) {
      var d = false;
      f && f.length > 0 && (d |= r.drawing.invalidate(f)), d && l();
    }), o1(r);
  };
  function s1(t) {
    var e = t.cy.container(), r = e && e.style && e.style.backgroundColor || "white";
    return Od(r);
  }
  function uh(t, e) {
    var r = t._private.rscratch;
    return Ut(r, "labelWrapCachedLines", e) || [];
  }
  var Ko = function(e, r) {
    return function(n) {
      var a = e(n), i = uh(n, r);
      return i.length > 1 ? i.map(function(s, o) {
        return "".concat(a, "_").concat(o);
      }) : a;
    };
  }, Yo = function(e, r) {
    return function(n, a) {
      var i = e(n);
      if (typeof a == "string") {
        var s = a.indexOf("_");
        if (s > 0) {
          var o = Number(a.substring(s + 1)), u = uh(n, r), l = i.h / u.length, c = l * o, f = i.y1 + c;
          return {
            x1: i.x1,
            w: i.w,
            y1: f,
            h: l,
            yOffset: c
          };
        }
      }
      return i;
    };
  };
  function o1(t) {
    {
      var e = t.render;
      t.render = function(i) {
        i = i || {};
        var s = t.cy;
        t.webgl && (s.zoom() > eh ? (u1(t), e.call(t, i)) : (l1(t), ch(t, i, ma.SCREEN)));
      };
    }
    {
      var r = t.matchCanvasSize;
      t.matchCanvasSize = function(i) {
        r.call(t, i), t.pickingFrameBuffer.setFramebufferAttachmentSizes(t.canvasWidth, t.canvasHeight), t.pickingFrameBuffer.needsDraw = true;
      };
    }
    t.findNearestElements = function(i, s, o, u) {
      return g1(t, i, s);
    };
    {
      var n = t.invalidateCachedZSortedEles;
      t.invalidateCachedZSortedEles = function() {
        n.call(t), t.pickingFrameBuffer.needsDraw = true;
      };
    }
    {
      var a = t.notify;
      t.notify = function(i, s) {
        a.call(t, i, s), i === "viewport" || i === "bounds" ? t.pickingFrameBuffer.needsDraw = true : i === "background" && t.drawing.invalidate(s, {
          type: "node-body"
        });
      };
    }
  }
  function u1(t) {
    var e = t.data.contexts[t.WEBGL];
    e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
  }
  function l1(t) {
    var e = function(n) {
      n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, t.canvasWidth, t.canvasHeight), n.restore();
    };
    e(t.data.contexts[t.NODE]), e(t.data.contexts[t.DRAG]);
  }
  function c1(t) {
    var e = t.canvasWidth, r = t.canvasHeight, n = tl(t), a = n.pan, i = n.zoom, s = Go();
    Si(s, s, [
      a.x,
      a.y
    ]), xu(s, s, [
      i,
      i
    ]);
    var o = Go();
    Yw(o, e, r);
    var u = Go();
    return Kw(u, o, s), u;
  }
  function lh(t, e) {
    var r = t.canvasWidth, n = t.canvasHeight, a = tl(t), i = a.pan, s = a.zoom;
    e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, r, n), e.translate(i.x, i.y), e.scale(s, s);
  }
  function f1(t, e) {
    t.drawSelectionRectangle(e, function(r) {
      return lh(t, r);
    });
  }
  function d1(t) {
    var e = t.data.contexts[t.NODE];
    e.save(), lh(t, e), e.strokeStyle = "rgba(0, 0, 0, 0.3)", e.beginPath(), e.moveTo(-1e3, 0), e.lineTo(1e3, 0), e.stroke(), e.beginPath(), e.moveTo(0, -1e3), e.lineTo(0, 1e3), e.stroke(), e.restore();
  }
  function v1(t) {
    var e = function(a, i, s) {
      for (var o = a.atlasManager.getAtlasCollection(i), u = t.data.contexts[t.NODE], l = o.atlases, c = 0; c < l.length; c++) {
        var f = l[c], d = f.canvas;
        if (d) {
          var v = d.width, h = d.height, y = v * c, p = d.height * s, g = 0.4;
          u.save(), u.scale(g, g), u.drawImage(d, y, p), u.strokeStyle = "black", u.rect(y, p, v, h), u.stroke(), u.restore();
        }
      }
    }, r = 0;
    e(t.drawing, "node", r++), e(t.drawing, "label", r++);
  }
  function h1(t, e, r, n, a) {
    var i, s, o, u, l = tl(t), c = l.pan, f = l.zoom;
    {
      var d = Fw(t, c, f, e, r), v = ft(d, 2), h = v[0], y = v[1], p = 6;
      i = h - p / 2, s = y - p / 2, o = p, u = p;
    }
    if (o === 0 || u === 0) return [];
    var g = t.data.contexts[t.WEBGL];
    g.bindFramebuffer(g.FRAMEBUFFER, t.pickingFrameBuffer), t.pickingFrameBuffer.needsDraw && (g.viewport(0, 0, g.canvas.width, g.canvas.height), ch(t, null, ma.PICKING), t.pickingFrameBuffer.needsDraw = false);
    var b = o * u, m = new Uint8Array(b * 4);
    g.readPixels(i, s, o, u, g.RGBA, g.UNSIGNED_BYTE, m), g.bindFramebuffer(g.FRAMEBUFFER, null);
    for (var x = /* @__PURE__ */ new Set(), E = 0; E < b; E++) {
      var S = m.slice(E * 4, E * 4 + 4), w = Uw(S) - 1;
      w >= 0 && x.add(w);
    }
    return x;
  }
  function g1(t, e, r) {
    var n = h1(t, e, r), a = t.getCachedZSortedEles(), i, s, o = Zt(n), u;
    try {
      for (o.s(); !(u = o.n()).done; ) {
        var l = u.value, c = a[l];
        if (!i && c.isNode() && (i = c), !s && c.isEdge() && (s = c), i && s) break;
      }
    } catch (f) {
      o.e(f);
    } finally {
      o.f();
    }
    return [
      i,
      s
    ].filter(Boolean);
  }
  function jo(t, e, r) {
    var n = t.drawing;
    e += 1, r.isNode() ? (n.drawNode(r, e, "node-underlay"), n.drawNode(r, e, "node-body"), n.drawTexture(r, e, "label"), n.drawNode(r, e, "node-overlay")) : (n.drawEdgeLine(r, e), n.drawEdgeArrow(r, e, "source"), n.drawEdgeArrow(r, e, "target"), n.drawTexture(r, e, "label"), n.drawTexture(r, e, "edge-source-label"), n.drawTexture(r, e, "edge-target-label"));
  }
  function ch(t, e, r) {
    var n;
    t.webglDebug && (n = performance.now());
    var a = t.drawing, i = 0;
    if (r.screen && t.data.canvasNeedsRedraw[t.SELECT_BOX] && f1(t, e), t.data.canvasNeedsRedraw[t.NODE] || r.picking) {
      var s = t.data.contexts[t.WEBGL];
      r.screen ? (s.clearColor(0, 0, 0, 0), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA)) : s.disable(s.BLEND), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.viewport(0, 0, s.canvas.width, s.canvas.height);
      var o = c1(t), u = t.getCachedZSortedEles();
      if (i = u.length, a.startFrame(o, r), r.screen) {
        for (var l = 0; l < u.nondrag.length; l++) jo(t, l, u.nondrag[l]);
        for (var c = 0; c < u.drag.length; c++) jo(t, c, u.drag[c]);
      } else if (r.picking) for (var f = 0; f < u.length; f++) jo(t, f, u[f]);
      a.endFrame(), r.screen && t.webglDebugShowAtlases && (d1(t), v1(t)), t.data.canvasNeedsRedraw[t.NODE] = false, t.data.canvasNeedsRedraw[t.DRAG] = false;
    }
    if (t.webglDebug) {
      var d = performance.now(), v = false, h = Math.ceil(d - n), y = a.getDebugInfo(), p = [
        "".concat(i, " elements"),
        "".concat(y.totalInstances, " instances"),
        "".concat(y.batchCount, " batches"),
        "".concat(y.totalAtlases, " atlases"),
        "".concat(y.wrappedCount, " wrapped textures"),
        "".concat(y.simpleCount, " simple shapes")
      ].join(", ");
      if (v) console.log("WebGL (".concat(r.name, ") - time ").concat(h, "ms, ").concat(p));
      else {
        console.log("WebGL (".concat(r.name, ") - frame time ").concat(h, "ms")), console.log("Totals:"), console.log("  ".concat(p)), console.log("Texture Atlases Used:");
        var g = y.atlasInfo, b = Zt(g), m;
        try {
          for (b.s(); !(m = b.n()).done; ) {
            var x = m.value;
            console.log("  ".concat(x.type, ": ").concat(x.keyCount, " keys, ").concat(x.atlasCount, " atlases"));
          }
        } catch (E) {
          b.e(E);
        } finally {
          b.f();
        }
        console.log("");
      }
    }
    t.data.gc && (console.log("Garbage Collect!"), t.data.gc = false, a.gc());
  }
  var Kr = {};
  Kr.drawPolygonPath = function(t, e, r, n, a, i) {
    var s = n / 2, o = a / 2;
    t.beginPath && t.beginPath(), t.moveTo(e + s * i[0], r + o * i[1]);
    for (var u = 1; u < i.length / 2; u++) t.lineTo(e + s * i[u * 2], r + o * i[u * 2 + 1]);
    t.closePath();
  };
  Kr.drawRoundPolygonPath = function(t, e, r, n, a, i, s) {
    s.forEach(function(o) {
      return Gv(t, o);
    }), t.closePath();
  };
  Kr.drawRoundRectanglePath = function(t, e, r, n, a, i) {
    var s = n / 2, o = a / 2, u = i === "auto" ? Lr(n, a) : Math.min(i, o, s);
    t.beginPath && t.beginPath(), t.moveTo(e, r - o), t.arcTo(e + s, r - o, e + s, r, u), t.arcTo(e + s, r + o, e, r + o, u), t.arcTo(e - s, r + o, e - s, r, u), t.arcTo(e - s, r - o, e, r - o, u), t.lineTo(e, r - o), t.closePath();
  };
  Kr.drawBottomRoundRectanglePath = function(t, e, r, n, a, i) {
    var s = n / 2, o = a / 2, u = i === "auto" ? Lr(n, a) : i;
    t.beginPath && t.beginPath(), t.moveTo(e, r - o), t.lineTo(e + s, r - o), t.lineTo(e + s, r), t.arcTo(e + s, r + o, e, r + o, u), t.arcTo(e - s, r + o, e - s, r, u), t.lineTo(e - s, r - o), t.lineTo(e, r - o), t.closePath();
  };
  Kr.drawCutRectanglePath = function(t, e, r, n, a, i, s) {
    var o = n / 2, u = a / 2, l = s === "auto" ? $u() : s;
    t.beginPath && t.beginPath(), t.moveTo(e - o + l, r - u), t.lineTo(e + o - l, r - u), t.lineTo(e + o, r - u + l), t.lineTo(e + o, r + u - l), t.lineTo(e + o - l, r + u), t.lineTo(e - o + l, r + u), t.lineTo(e - o, r + u - l), t.lineTo(e - o, r - u + l), t.closePath();
  };
  Kr.drawBarrelPath = function(t, e, r, n, a) {
    var i = n / 2, s = a / 2, o = e - i, u = e + i, l = r - s, c = r + s, f = ou(n, a), d = f.widthOffset, v = f.heightOffset, h = f.ctrlPtOffsetPct * d;
    t.beginPath && t.beginPath(), t.moveTo(o, l + v), t.lineTo(o, c - v), t.quadraticCurveTo(o + h, c, o + d, c), t.lineTo(u - d, c), t.quadraticCurveTo(u - h, c, u, c - v), t.lineTo(u, l + v), t.quadraticCurveTo(u - h, l, u - d, l), t.lineTo(o + d, l), t.quadraticCurveTo(o + h, l, o, l + v), t.closePath();
  };
  var Wf = Math.sin(0), Hf = Math.cos(0), Eu = {}, Tu = {}, fh = Math.PI / 40;
  for (var Pn = 0 * Math.PI; Pn < 2 * Math.PI; Pn += fh) Eu[Pn] = Math.sin(Pn), Tu[Pn] = Math.cos(Pn);
  Kr.drawEllipsePath = function(t, e, r, n, a) {
    if (t.beginPath && t.beginPath(), t.ellipse) t.ellipse(e, r, n / 2, a / 2, 0, 0, 2 * Math.PI);
    else for (var i, s, o = n / 2, u = a / 2, l = 0 * Math.PI; l < 2 * Math.PI; l += fh) i = e - o * Eu[l] * Wf + o * Tu[l] * Hf, s = r + u * Tu[l] * Wf + u * Eu[l] * Hf, l === 0 ? t.moveTo(i, s) : t.lineTo(i, s);
    t.closePath();
  };
  var Za = {};
  Za.createBuffer = function(t, e) {
    var r = document.createElement("canvas");
    return r.width = t, r.height = e, [
      r,
      r.getContext("2d")
    ];
  };
  Za.bufferCanvasImage = function(t) {
    var e = this.cy, r = e.mutableElements(), n = r.boundingBox(), a = this.findContainerClientCoords(), i = t.full ? Math.ceil(n.w) : a[2], s = t.full ? Math.ceil(n.h) : a[3], o = ae(t.maxWidth) || ae(t.maxHeight), u = this.getPixelRatio(), l = 1;
    if (t.scale !== void 0) i *= t.scale, s *= t.scale, l = t.scale;
    else if (o) {
      var c = 1 / 0, f = 1 / 0;
      ae(t.maxWidth) && (c = l * t.maxWidth / i), ae(t.maxHeight) && (f = l * t.maxHeight / s), l = Math.min(c, f), i *= l, s *= l;
    }
    o || (i *= u, s *= u, l *= u);
    var d = document.createElement("canvas");
    d.width = i, d.height = s, d.style.width = i + "px", d.style.height = s + "px";
    var v = d.getContext("2d");
    if (i > 0 && s > 0) {
      v.clearRect(0, 0, i, s), v.globalCompositeOperation = "source-over";
      var h = this.getCachedZSortedEles();
      if (t.full) v.translate(-n.x1 * l, -n.y1 * l), v.scale(l, l), this.drawElements(v, h), v.scale(1 / l, 1 / l), v.translate(n.x1 * l, n.y1 * l);
      else {
        var y = e.pan(), p = {
          x: y.x * l,
          y: y.y * l
        };
        l *= e.zoom(), v.translate(p.x, p.y), v.scale(l, l), this.drawElements(v, h), v.scale(1 / l, 1 / l), v.translate(-p.x, -p.y);
      }
      t.bg && (v.globalCompositeOperation = "destination-over", v.fillStyle = t.bg, v.rect(0, 0, i, s), v.fill());
    }
    return d;
  };
  function p1(t, e) {
    for (var r = atob(t), n = new ArrayBuffer(r.length), a = new Uint8Array(n), i = 0; i < r.length; i++) a[i] = r.charCodeAt(i);
    return new Blob([
      n
    ], {
      type: e
    });
  }
  function Kf(t) {
    var e = t.indexOf(",");
    return t.substr(e + 1);
  }
  function dh(t, e, r) {
    var n = function() {
      return e.toDataURL(r, t.quality);
    };
    switch (t.output) {
      case "blob-promise":
        return new Yn(function(a, i) {
          try {
            e.toBlob(function(s) {
              s != null ? a(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
            }, r, t.quality);
          } catch (s) {
            i(s);
          }
        });
      case "blob":
        return p1(Kf(n()), r);
      case "base64":
        return Kf(n());
      default:
        return n();
    }
  }
  Za.png = function(t) {
    return dh(t, this.bufferCanvasImage(t), "image/png");
  };
  Za.jpg = function(t) {
    return dh(t, this.bufferCanvasImage(t), "image/jpeg");
  };
  var vh = {};
  vh.nodeShapeImpl = function(t, e, r, n, a, i, s, o) {
    switch (t) {
      case "ellipse":
        return this.drawEllipsePath(e, r, n, a, i);
      case "polygon":
        return this.drawPolygonPath(e, r, n, a, i, s);
      case "round-polygon":
        return this.drawRoundPolygonPath(e, r, n, a, i, s, o);
      case "roundrectangle":
      case "round-rectangle":
        return this.drawRoundRectanglePath(e, r, n, a, i, o);
      case "cutrectangle":
      case "cut-rectangle":
        return this.drawCutRectanglePath(e, r, n, a, i, s, o);
      case "bottomroundrectangle":
      case "bottom-round-rectangle":
        return this.drawBottomRoundRectanglePath(e, r, n, a, i, o);
      case "barrel":
        return this.drawBarrelPath(e, r, n, a, i);
    }
  };
  var m1 = hh, _e = hh.prototype;
  _e.CANVAS_LAYERS = 3;
  _e.SELECT_BOX = 0;
  _e.DRAG = 1;
  _e.NODE = 2;
  _e.WEBGL = 3;
  _e.CANVAS_TYPES = [
    "2d",
    "2d",
    "2d",
    "webgl2"
  ];
  _e.BUFFER_COUNT = 3;
  _e.TEXTURE_BUFFER = 0;
  _e.MOTIONBLUR_BUFFER_NODE = 1;
  _e.MOTIONBLUR_BUFFER_DRAG = 2;
  function hh(t) {
    var e = this, r = e.cy.window(), n = r.document;
    t.webgl && (_e.CANVAS_LAYERS = e.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), e.data = {
      canvases: new Array(_e.CANVAS_LAYERS),
      contexts: new Array(_e.CANVAS_LAYERS),
      canvasNeedsRedraw: new Array(_e.CANVAS_LAYERS),
      bufferCanvases: new Array(_e.BUFFER_COUNT),
      bufferContexts: new Array(_e.CANVAS_LAYERS)
    };
    var a = "-webkit-tap-highlight-color", i = "rgba(0,0,0,0)";
    e.data.canvasContainer = n.createElement("div");
    var s = e.data.canvasContainer.style;
    e.data.canvasContainer.style[a] = i, s.position = "relative", s.zIndex = "0", s.overflow = "hidden";
    var o = t.cy.container();
    o.appendChild(e.data.canvasContainer), o.style[a] = i;
    var u = {
      "-webkit-user-select": "none",
      "-moz-user-select": "-moz-none",
      "user-select": "none",
      "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
      "outline-style": "none"
    };
    fp() && (u["-ms-touch-action"] = "none", u["touch-action"] = "none");
    for (var l = 0; l < _e.CANVAS_LAYERS; l++) {
      var c = e.data.canvases[l] = n.createElement("canvas"), f = _e.CANVAS_TYPES[l];
      e.data.contexts[l] = c.getContext(f), e.data.contexts[l] || tt("Could not create canvas of type " + f), Object.keys(u).forEach(function(ee) {
        c.style[ee] = u[ee];
      }), c.style.position = "absolute", c.setAttribute("data-id", "layer" + l), c.style.zIndex = String(_e.CANVAS_LAYERS - l), e.data.canvasContainer.appendChild(c), e.data.canvasNeedsRedraw[l] = false;
    }
    e.data.topCanvas = e.data.canvases[0], e.data.canvases[_e.NODE].setAttribute("data-id", "layer" + _e.NODE + "-node"), e.data.canvases[_e.SELECT_BOX].setAttribute("data-id", "layer" + _e.SELECT_BOX + "-selectbox"), e.data.canvases[_e.DRAG].setAttribute("data-id", "layer" + _e.DRAG + "-drag"), e.data.canvases[_e.WEBGL] && e.data.canvases[_e.WEBGL].setAttribute("data-id", "layer" + _e.WEBGL + "-webgl");
    for (var l = 0; l < _e.BUFFER_COUNT; l++) e.data.bufferCanvases[l] = n.createElement("canvas"), e.data.bufferContexts[l] = e.data.bufferCanvases[l].getContext("2d"), e.data.bufferCanvases[l].style.position = "absolute", e.data.bufferCanvases[l].setAttribute("data-id", "buffer" + l), e.data.bufferCanvases[l].style.zIndex = String(-l - 1), e.data.bufferCanvases[l].style.visibility = "hidden";
    e.pathsEnabled = true;
    var d = zt(), v = function(F) {
      return {
        x: (F.x1 + F.x2) / 2,
        y: (F.y1 + F.y2) / 2
      };
    }, h = function(F) {
      return {
        x: -F.w / 2,
        y: -F.h / 2
      };
    }, y = function(F) {
      var V = F[0]._private, q = V.oldBackgroundTimestamp === V.backgroundTimestamp;
      return !q;
    }, p = function(F) {
      return F[0]._private.nodeKey;
    }, g = function(F) {
      return F[0]._private.labelStyleKey;
    }, b = function(F) {
      return F[0]._private.sourceLabelStyleKey;
    }, m = function(F) {
      return F[0]._private.targetLabelStyleKey;
    }, x = function(F, V, q, X, ne) {
      return e.drawElement(F, V, q, false, false, ne);
    }, E = function(F, V, q, X, ne) {
      return e.drawElementText(F, V, q, X, "main", ne);
    }, S = function(F, V, q, X, ne) {
      return e.drawElementText(F, V, q, X, "source", ne);
    }, w = function(F, V, q, X, ne) {
      return e.drawElementText(F, V, q, X, "target", ne);
    }, T = function(F) {
      return F.boundingBox(), F[0]._private.bodyBounds;
    }, C = function(F) {
      return F.boundingBox(), F[0]._private.labelBounds.main || d;
    }, R = function(F) {
      return F.boundingBox(), F[0]._private.labelBounds.source || d;
    }, A = function(F) {
      return F.boundingBox(), F[0]._private.labelBounds.target || d;
    }, P = function(F, V) {
      return V;
    }, k = function(F) {
      return v(T(F));
    }, I = function(F, V, q) {
      var X = F ? F + "-" : "";
      return {
        x: V.x + q.pstyle(X + "text-margin-x").pfValue,
        y: V.y + q.pstyle(X + "text-margin-y").pfValue
      };
    }, M = function(F, V, q) {
      var X = F[0]._private.rscratch;
      return {
        x: X[V],
        y: X[q]
      };
    }, D = function(F) {
      return I("", M(F, "labelX", "labelY"), F);
    }, B = function(F) {
      return I("source", M(F, "sourceLabelX", "sourceLabelY"), F);
    }, O = function(F) {
      return I("target", M(F, "targetLabelX", "targetLabelY"), F);
    }, z = function(F) {
      return h(T(F));
    }, U = function(F) {
      return h(R(F));
    }, N = function(F) {
      return h(A(F));
    }, L = function(F) {
      var V = C(F), q = h(C(F));
      if (F.isNode()) {
        switch (F.pstyle("text-halign").value) {
          case "left":
            q.x = -V.w - (V.leftPad || 0);
            break;
          case "right":
            q.x = -(V.rightPad || 0);
            break;
        }
        switch (F.pstyle("text-valign").value) {
          case "top":
            q.y = -V.h - (V.topPad || 0);
            break;
          case "bottom":
            q.y = -(V.botPad || 0);
            break;
        }
      }
      return q;
    }, H = e.data.eleTxrCache = new va(e, {
      getKey: p,
      doesEleInvalidateKey: y,
      drawElement: x,
      getBoundingBox: T,
      getRotationPoint: k,
      getRotationOffset: z,
      allowEdgeTxrCaching: false,
      allowParentTxrCaching: false
    }), Y = e.data.lblTxrCache = new va(e, {
      getKey: g,
      drawElement: E,
      getBoundingBox: C,
      getRotationPoint: D,
      getRotationOffset: L,
      isVisible: P
    }), K = e.data.slbTxrCache = new va(e, {
      getKey: b,
      drawElement: S,
      getBoundingBox: R,
      getRotationPoint: B,
      getRotationOffset: U,
      isVisible: P
    }), Q = e.data.tlbTxrCache = new va(e, {
      getKey: m,
      drawElement: w,
      getBoundingBox: A,
      getRotationPoint: O,
      getRotationOffset: N,
      isVisible: P
    }), re = e.data.lyrTxrCache = new th(e);
    e.onUpdateEleCalcs(function(F, V) {
      H.invalidateElements(V), Y.invalidateElements(V), K.invalidateElements(V), Q.invalidateElements(V), re.invalidateElements(V);
      for (var q = 0; q < V.length; q++) {
        var X = V[q]._private;
        X.oldBackgroundTimestamp = X.backgroundTimestamp;
      }
    });
    var ie = function(F) {
      for (var V = 0; V < F.length; V++) re.enqueueElementRefinement(F[V].ele);
    };
    H.onDequeue(ie), Y.onDequeue(ie), K.onDequeue(ie), Q.onDequeue(ie), t.webgl && e.initWebgl(t, {
      getStyleKey: p,
      getLabelKey: g,
      getSourceLabelKey: b,
      getTargetLabelKey: m,
      drawElement: x,
      drawLabel: E,
      drawSourceLabel: S,
      drawTargetLabel: w,
      getElementBox: T,
      getLabelBox: C,
      getSourceLabelBox: R,
      getTargetLabelBox: A,
      getElementRotationPoint: k,
      getElementRotationOffset: z,
      getLabelRotationPoint: D,
      getSourceLabelRotationPoint: B,
      getTargetLabelRotationPoint: O,
      getLabelRotationOffset: L,
      getSourceLabelRotationOffset: U,
      getTargetLabelRotationOffset: N
    });
  }
  _e.redrawHint = function(t, e) {
    var r = this;
    switch (t) {
      case "eles":
        r.data.canvasNeedsRedraw[_e.NODE] = e;
        break;
      case "drag":
        r.data.canvasNeedsRedraw[_e.DRAG] = e;
        break;
      case "select":
        r.data.canvasNeedsRedraw[_e.SELECT_BOX] = e;
        break;
      case "gc":
        r.data.gc = true;
        break;
    }
  };
  var y1 = typeof Path2D < "u";
  _e.path2dEnabled = function(t) {
    if (t === void 0) return this.pathsEnabled;
    this.pathsEnabled = !!t;
  };
  _e.usePaths = function() {
    return y1 && this.pathsEnabled;
  };
  _e.setImgSmoothing = function(t, e) {
    t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e);
  };
  _e.getImgSmoothing = function(t) {
    return t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled : t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled;
  };
  _e.makeOffscreenCanvas = function(t, e) {
    var r;
    if ((typeof OffscreenCanvas > "u" ? "undefined" : mt(OffscreenCanvas)) !== "undefined") r = new OffscreenCanvas(t, e);
    else {
      var n = this.cy.window(), a = n.document;
      r = a.createElement("canvas"), r.width = t, r.height = e;
    }
    return r;
  };
  [
    rh,
    hr,
    Sr,
    el,
    bn,
    Hr,
    Ft,
    oh,
    Kr,
    Za,
    vh
  ].forEach(function(t) {
    Ee(_e, t);
  });
  var b1 = [
    {
      name: "null",
      impl: Uv
    },
    {
      name: "base",
      impl: Jv
    },
    {
      name: "canvas",
      impl: m1
    }
  ], w1 = [
    {
      type: "layout",
      extensions: Gb
    },
    {
      type: "renderer",
      extensions: b1
    }
  ], gh = {}, ph = {};
  function mh(t, e, r) {
    var n = r, a = function(T) {
      Ge("Can not register `" + e + "` for `" + t + "` since `" + T + "` already exists in the prototype and can not be overridden");
    };
    if (t === "core") {
      if (ka.prototype[e]) return a(e);
      ka.prototype[e] = r;
    } else if (t === "collection") {
      if (Rt.prototype[e]) return a(e);
      Rt.prototype[e] = r;
    } else if (t === "layout") {
      for (var i = function(T) {
        this.options = T, r.call(this, T), ze(this._private) || (this._private = {}), this._private.cy = T.cy, this._private.listeners = [], this.createEmitter();
      }, s = i.prototype = Object.create(r.prototype), o = [], u = 0; u < o.length; u++) {
        var l = o[u];
        s[l] = s[l] || function() {
          return this;
        };
      }
      s.start && !s.run ? s.run = function() {
        return this.start(), this;
      } : !s.start && s.run && (s.start = function() {
        return this.run(), this;
      });
      var c = r.prototype.stop;
      s.stop = function() {
        var w = this.options;
        if (w && w.animate) {
          var T = this.animations;
          if (T) for (var C = 0; C < T.length; C++) T[C].stop();
        }
        return c ? c.call(this) : this.emit("layoutstop"), this;
      }, s.destroy || (s.destroy = function() {
        return this;
      }), s.cy = function() {
        return this._private.cy;
      };
      var f = function(T) {
        return T._private.cy;
      }, d = {
        addEventFields: function(T, C) {
          C.layout = T, C.cy = f(T), C.target = T;
        },
        bubble: function() {
          return true;
        },
        parent: function(T) {
          return f(T);
        }
      };
      Ee(s, {
        createEmitter: function() {
          return this._private.emitter = new is(d, this), this;
        },
        emitter: function() {
          return this._private.emitter;
        },
        on: function(T, C) {
          return this.emitter().on(T, C), this;
        },
        one: function(T, C) {
          return this.emitter().one(T, C), this;
        },
        once: function(T, C) {
          return this.emitter().one(T, C), this;
        },
        removeListener: function(T, C) {
          return this.emitter().removeListener(T, C), this;
        },
        removeAllListeners: function() {
          return this.emitter().removeAllListeners(), this;
        },
        emit: function(T, C) {
          return this.emitter().emit(T, C), this;
        }
      }), Ze.eventAliasesOn(s), n = i;
    } else if (t === "renderer" && e !== "null" && e !== "base") {
      var v = yh("renderer", "base"), h = v.prototype, y = r, p = r.prototype, g = function() {
        v.apply(this, arguments), y.apply(this, arguments);
      }, b = g.prototype;
      for (var m in h) {
        var x = h[m], E = p[m] != null;
        if (E) return a(m);
        b[m] = x;
      }
      for (var S in p) b[S] = p[S];
      h.clientFunctions.forEach(function(w) {
        b[w] = b[w] || function() {
          tt("Renderer does not implement `renderer." + w + "()` on its prototype");
        };
      }), n = g;
    } else if (t === "__proto__" || t === "constructor" || t === "prototype") return tt(t + " is an illegal type to be registered, possibly lead to prototype pollutions");
    return Nd({
      map: gh,
      keys: [
        t,
        e
      ],
      value: n
    });
  }
  function yh(t, e) {
    return zd({
      map: gh,
      keys: [
        t,
        e
      ]
    });
  }
  function x1(t, e, r, n, a) {
    return Nd({
      map: ph,
      keys: [
        t,
        e,
        r,
        n
      ],
      value: a
    });
  }
  function E1(t, e, r, n) {
    return zd({
      map: ph,
      keys: [
        t,
        e,
        r,
        n
      ]
    });
  }
  var Su = function() {
    if (arguments.length === 2) return yh.apply(null, arguments);
    if (arguments.length === 3) return mh.apply(null, arguments);
    if (arguments.length === 4) return E1.apply(null, arguments);
    if (arguments.length === 5) return x1.apply(null, arguments);
    tt("Invalid extension access syntax");
  };
  ka.prototype.extension = Su;
  w1.forEach(function(t) {
    t.extensions.forEach(function(e) {
      mh(t.type, e.name, e.impl);
    });
  });
  var Ui = function() {
    if (!(this instanceof Ui)) return new Ui();
    this.length = 0;
  }, pn = Ui.prototype;
  pn.instanceString = function() {
    return "stylesheet";
  };
  pn.selector = function(t) {
    var e = this.length++;
    return this[e] = {
      selector: t,
      properties: []
    }, this;
  };
  pn.css = function(t, e) {
    var r = this.length - 1;
    if (me(t)) this[r].properties.push({
      name: t,
      value: e
    });
    else if (ze(t)) for (var n = t, a = Object.keys(n), i = 0; i < a.length; i++) {
      var s = a[i], o = n[s];
      if (o != null) {
        var u = xt.properties[s] || xt.properties[Yi(s)];
        if (u != null) {
          var l = u.name, c = o;
          this[r].properties.push({
            name: l,
            value: c
          });
        }
      }
    }
    return this;
  };
  pn.style = pn.css;
  pn.generateStyle = function(t) {
    var e = new xt(t);
    return this.appendToStyle(e);
  };
  pn.appendToStyle = function(t) {
    for (var e = 0; e < this.length; e++) {
      var r = this[e], n = r.selector, a = r.properties;
      t.selector(n);
      for (var i = 0; i < a.length; i++) {
        var s = a[i];
        t.css(s.name, s.value);
      }
    }
    return t;
  };
  let T1;
  T1 = "3.33.1";
  Gn = function(e) {
    if (e === void 0 && (e = {}), ze(e)) return new ka(e);
    if (me(e)) return Su.apply(Su, arguments);
  };
  Gn.use = function(t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return e.unshift(Gn), t.apply(null, e), this;
  };
  Gn.warnings = function(t) {
    return Zd(t);
  };
  Gn.version = T1;
  Gn.stylesheet = Gn.Stylesheet = Ui;
  const St = [];
  for (let t = 0; t < 256; ++t) St.push((t + 256).toString(16).slice(1));
  function S1(t, e = 0) {
    return (St[t[e + 0]] + St[t[e + 1]] + St[t[e + 2]] + St[t[e + 3]] + "-" + St[t[e + 4]] + St[t[e + 5]] + "-" + St[t[e + 6]] + St[t[e + 7]] + "-" + St[t[e + 8]] + St[t[e + 9]] + "-" + St[t[e + 10]] + St[t[e + 11]] + St[t[e + 12]] + St[t[e + 13]] + St[t[e + 14]] + St[t[e + 15]]).toLowerCase();
  }
  let Xo;
  const C1 = new Uint8Array(16);
  function R1() {
    if (!Xo) {
      if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      Xo = crypto.getRandomValues.bind(crypto);
    }
    return Xo(C1);
  }
  const Jo = {};
  FC = function(t, e, r) {
    let n;
    {
      const a = Date.now(), i = R1();
      A1(Jo, a, i), n = k1(i, Jo.msecs, Jo.seq, e, r);
    }
    return e ?? S1(n);
  };
  function A1(t, e, r) {
    return t.msecs ?? (t.msecs = -1 / 0), t.seq ?? (t.seq = 0), e > t.msecs ? (t.seq = r[6] << 23 | r[7] << 16 | r[8] << 8 | r[9], t.msecs = e) : (t.seq = t.seq + 1 | 0, t.seq === 0 && t.msecs++), t;
  }
  function k1(t, e, r, n, a = 0) {
    if (t.length < 16) throw new Error("Random bytes length must be >= 16");
    if (!n) n = new Uint8Array(16), a = 0;
    else if (a < 0 || a + 16 > n.length) throw new RangeError(`UUID byte range ${a}:${a + 15} is out of buffer bounds`);
    return e ?? (e = Date.now()), r ?? (r = t[6] * 127 << 24 | t[7] << 16 | t[8] << 8 | t[9]), n[a++] = e / 1099511627776 & 255, n[a++] = e / 4294967296 & 255, n[a++] = e / 16777216 & 255, n[a++] = e / 65536 & 255, n[a++] = e / 256 & 255, n[a++] = e & 255, n[a++] = 112 | r >>> 28 & 15, n[a++] = r >>> 20 & 255, n[a++] = 128 | r >>> 14 & 63, n[a++] = r >>> 6 & 255, n[a++] = r << 2 & 255 | t[10] & 3, n[a++] = t[11], n[a++] = t[12], n[a++] = t[13], n[a++] = t[14], n[a++] = t[15], n;
  }
  function W(t, e, r) {
    function n(o, u) {
      if (o._zod || Object.defineProperty(o, "_zod", {
        value: {
          def: u,
          constr: s,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      }), o._zod.traits.has(t)) return;
      o._zod.traits.add(t), e(o, u);
      const l = s.prototype, c = Object.keys(l);
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        d in o || (o[d] = l[d].bind(o));
      }
    }
    const a = (r == null ? void 0 : r.Parent) ?? Object;
    class i extends a {
    }
    Object.defineProperty(i, "name", {
      value: t
    });
    function s(o) {
      var u;
      const l = (r == null ? void 0 : r.Parent) ? new i() : this;
      n(l, o), (u = l._zod).deferred ?? (u.deferred = []);
      for (const c of l._zod.deferred) c();
      return l;
    }
    return Object.defineProperty(s, "init", {
      value: n
    }), Object.defineProperty(s, Symbol.hasInstance, {
      value: (o) => {
        var _a3, _b3;
        return (r == null ? void 0 : r.Parent) && o instanceof r.Parent ? true : (_b3 = (_a3 = o == null ? void 0 : o._zod) == null ? void 0 : _a3.traits) == null ? void 0 : _b3.has(t);
      }
    }), Object.defineProperty(s, "name", {
      value: t
    }), s;
  }
  class $n extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }
  class bh extends Error {
    constructor(e) {
      super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
    }
  }
  const wh = {};
  function Ur(t) {
    return wh;
  }
  function xh(t) {
    const e = Object.values(t).filter((n) => typeof n == "number");
    return Object.entries(t).filter(([n, a]) => e.indexOf(+n) === -1).map(([n, a]) => a);
  }
  function Cu(t, e) {
    return typeof e == "bigint" ? e.toString() : e;
  }
  function vs(t) {
    return {
      get value() {
        {
          const e = t();
          return Object.defineProperty(this, "value", {
            value: e
          }), e;
        }
      }
    };
  }
  function rl(t) {
    return t == null;
  }
  function nl(t) {
    const e = t.startsWith("^") ? 1 : 0, r = t.endsWith("$") ? t.length - 1 : t.length;
    return t.slice(e, r);
  }
  function P1(t, e) {
    const r = (t.toString().split(".")[1] || "").length, n = e.toString();
    let a = (n.split(".")[1] || "").length;
    if (a === 0 && /\d?e-\d?/.test(n)) {
      const u = n.match(/\d?e-(\d?)/);
      (u == null ? void 0 : u[1]) && (a = Number.parseInt(u[1]));
    }
    const i = r > a ? r : a, s = Number.parseInt(t.toFixed(i).replace(".", "")), o = Number.parseInt(e.toFixed(i).replace(".", ""));
    return s % o / 10 ** i;
  }
  const Yf = /* @__PURE__ */ Symbol("evaluating");
  function We(t, e, r) {
    let n;
    Object.defineProperty(t, e, {
      get() {
        if (n !== Yf) return n === void 0 && (n = Yf, n = r()), n;
      },
      set(a) {
        Object.defineProperty(t, e, {
          value: a
        });
      },
      configurable: true
    });
  }
  function wn(t, e, r) {
    Object.defineProperty(t, e, {
      value: r,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  function Yr(...t) {
    const e = {};
    for (const r of t) {
      const n = Object.getOwnPropertyDescriptors(r);
      Object.assign(e, n);
    }
    return Object.defineProperties({}, e);
  }
  function jf(t) {
    return JSON.stringify(t);
  }
  function _1(t) {
    return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  const Eh = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
  };
  function _a(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
  const I1 = vs(() => {
    var _a3;
    if (typeof navigator < "u" && ((_a3 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a3.includes("Cloudflare"))) return false;
    try {
      const t = Function;
      return new t(""), true;
    } catch {
      return false;
    }
  });
  function Wn(t) {
    if (_a(t) === false) return false;
    const e = t.constructor;
    if (e === void 0 || typeof e != "function") return true;
    const r = e.prototype;
    return !(_a(r) === false || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === false);
  }
  function Th(t) {
    return Wn(t) ? {
      ...t
    } : Array.isArray(t) ? [
      ...t
    ] : t;
  }
  const B1 = /* @__PURE__ */ new Set([
    "string",
    "number",
    "symbol"
  ]);
  function Hn(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function jr(t, e, r) {
    const n = new t._zod.constr(e ?? t._zod.def);
    return (!e || (r == null ? void 0 : r.parent)) && (n._zod.parent = t), n;
  }
  function fe(t) {
    const e = t;
    if (!e) return {};
    if (typeof e == "string") return {
      error: () => e
    };
    if ((e == null ? void 0 : e.message) !== void 0) {
      if ((e == null ? void 0 : e.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
      e.error = e.message;
    }
    return delete e.message, typeof e.error == "string" ? {
      ...e,
      error: () => e.error
    } : e;
  }
  function M1(t) {
    return Object.keys(t).filter((e) => t[e]._zod.optin === "optional" && t[e]._zod.optout === "optional");
  }
  const D1 = {
    safeint: [
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    ],
    int32: [
      -2147483648,
      2147483647
    ],
    uint32: [
      0,
      4294967295
    ],
    float32: [
      -34028234663852886e22,
      34028234663852886e22
    ],
    float64: [
      -Number.MAX_VALUE,
      Number.MAX_VALUE
    ]
  };
  function O1(t, e) {
    const r = t._zod.def, n = r.checks;
    if (n && n.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
    const i = Yr(t._zod.def, {
      get shape() {
        const s = {};
        for (const o in e) {
          if (!(o in r.shape)) throw new Error(`Unrecognized key: "${o}"`);
          e[o] && (s[o] = r.shape[o]);
        }
        return wn(this, "shape", s), s;
      },
      checks: []
    });
    return jr(t, i);
  }
  function N1(t, e) {
    const r = t._zod.def, n = r.checks;
    if (n && n.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
    const i = Yr(t._zod.def, {
      get shape() {
        const s = {
          ...t._zod.def.shape
        };
        for (const o in e) {
          if (!(o in r.shape)) throw new Error(`Unrecognized key: "${o}"`);
          e[o] && delete s[o];
        }
        return wn(this, "shape", s), s;
      },
      checks: []
    });
    return jr(t, i);
  }
  function z1(t, e) {
    if (!Wn(e)) throw new Error("Invalid input to extend: expected a plain object");
    const r = t._zod.def.checks;
    if (r && r.length > 0) {
      const i = t._zod.def.shape;
      for (const s in e) if (Object.getOwnPropertyDescriptor(i, s) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    const a = Yr(t._zod.def, {
      get shape() {
        const i = {
          ...t._zod.def.shape,
          ...e
        };
        return wn(this, "shape", i), i;
      }
    });
    return jr(t, a);
  }
  function L1(t, e) {
    if (!Wn(e)) throw new Error("Invalid input to safeExtend: expected a plain object");
    const r = Yr(t._zod.def, {
      get shape() {
        const n = {
          ...t._zod.def.shape,
          ...e
        };
        return wn(this, "shape", n), n;
      }
    });
    return jr(t, r);
  }
  function F1(t, e) {
    const r = Yr(t._zod.def, {
      get shape() {
        const n = {
          ...t._zod.def.shape,
          ...e._zod.def.shape
        };
        return wn(this, "shape", n), n;
      },
      get catchall() {
        return e._zod.def.catchall;
      },
      checks: []
    });
    return jr(t, r);
  }
  function V1(t, e, r) {
    const a = e._zod.def.checks;
    if (a && a.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
    const s = Yr(e._zod.def, {
      get shape() {
        const o = e._zod.def.shape, u = {
          ...o
        };
        if (r) for (const l in r) {
          if (!(l in o)) throw new Error(`Unrecognized key: "${l}"`);
          r[l] && (u[l] = t ? new t({
            type: "optional",
            innerType: o[l]
          }) : o[l]);
        }
        else for (const l in o) u[l] = t ? new t({
          type: "optional",
          innerType: o[l]
        }) : o[l];
        return wn(this, "shape", u), u;
      },
      checks: []
    });
    return jr(e, s);
  }
  function $1(t, e, r) {
    const n = Yr(e._zod.def, {
      get shape() {
        const a = e._zod.def.shape, i = {
          ...a
        };
        if (r) for (const s in r) {
          if (!(s in i)) throw new Error(`Unrecognized key: "${s}"`);
          r[s] && (i[s] = new t({
            type: "nonoptional",
            innerType: a[s]
          }));
        }
        else for (const s in a) i[s] = new t({
          type: "nonoptional",
          innerType: a[s]
        });
        return wn(this, "shape", i), i;
      }
    });
    return jr(e, n);
  }
  function On(t, e = 0) {
    var _a3;
    if (t.aborted === true) return true;
    for (let r = e; r < t.issues.length; r++) if (((_a3 = t.issues[r]) == null ? void 0 : _a3.continue) !== true) return true;
    return false;
  }
  function Nn(t, e) {
    return e.map((r) => {
      var n;
      return (n = r).path ?? (n.path = []), r.path.unshift(t), r;
    });
  }
  function ci(t) {
    return typeof t == "string" ? t : t == null ? void 0 : t.message;
  }
  function qr(t, e, r) {
    var _a3, _b3, _c3, _d2, _e2, _f2;
    const n = {
      ...t,
      path: t.path ?? []
    };
    if (!t.message) {
      const a = ci((_c3 = (_b3 = (_a3 = t.inst) == null ? void 0 : _a3._zod.def) == null ? void 0 : _b3.error) == null ? void 0 : _c3.call(_b3, t)) ?? ci((_d2 = e == null ? void 0 : e.error) == null ? void 0 : _d2.call(e, t)) ?? ci((_e2 = r.customError) == null ? void 0 : _e2.call(r, t)) ?? ci((_f2 = r.localeError) == null ? void 0 : _f2.call(r, t)) ?? "Invalid input";
      n.message = a;
    }
    return delete n.inst, delete n.continue, (e == null ? void 0 : e.reportInput) || delete n.input, n;
  }
  function al(t) {
    return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
  }
  function Ia(...t) {
    const [e, r, n] = t;
    return typeof e == "string" ? {
      message: e,
      code: "custom",
      input: r,
      inst: n
    } : {
      ...e
    };
  }
  const Sh = (t, e) => {
    t.name = "$ZodError", Object.defineProperty(t, "_zod", {
      value: t._zod,
      enumerable: false
    }), Object.defineProperty(t, "issues", {
      value: e,
      enumerable: false
    }), t.message = JSON.stringify(e, Cu, 2), Object.defineProperty(t, "toString", {
      value: () => t.message,
      enumerable: false
    });
  }, Ch = W("$ZodError", Sh), Rh = W("$ZodError", Sh, {
    Parent: Error
  });
  function U1(t, e = (r) => r.message) {
    const r = {}, n = [];
    for (const a of t.issues) a.path.length > 0 ? (r[a.path[0]] = r[a.path[0]] || [], r[a.path[0]].push(e(a))) : n.push(e(a));
    return {
      formErrors: n,
      fieldErrors: r
    };
  }
  function q1(t, e = (r) => r.message) {
    const r = {
      _errors: []
    }, n = (a) => {
      for (const i of a.issues) if (i.code === "invalid_union" && i.errors.length) i.errors.map((s) => n({
        issues: s
      }));
      else if (i.code === "invalid_key") n({
        issues: i.issues
      });
      else if (i.code === "invalid_element") n({
        issues: i.issues
      });
      else if (i.path.length === 0) r._errors.push(e(i));
      else {
        let s = r, o = 0;
        for (; o < i.path.length; ) {
          const u = i.path[o];
          o === i.path.length - 1 ? (s[u] = s[u] || {
            _errors: []
          }, s[u]._errors.push(e(i))) : s[u] = s[u] || {
            _errors: []
          }, s = s[u], o++;
        }
      }
    };
    return n(t), r;
  }
  const il = (t) => (e, r, n, a) => {
    const i = n ? Object.assign(n, {
      async: false
    }) : {
      async: false
    }, s = e._zod.run({
      value: r,
      issues: []
    }, i);
    if (s instanceof Promise) throw new $n();
    if (s.issues.length) {
      const o = new ((a == null ? void 0 : a.Err) ?? t)(s.issues.map((u) => qr(u, i, Ur())));
      throw Eh(o, a == null ? void 0 : a.callee), o;
    }
    return s.value;
  }, sl = (t) => async (e, r, n, a) => {
    const i = n ? Object.assign(n, {
      async: true
    }) : {
      async: true
    };
    let s = e._zod.run({
      value: r,
      issues: []
    }, i);
    if (s instanceof Promise && (s = await s), s.issues.length) {
      const o = new ((a == null ? void 0 : a.Err) ?? t)(s.issues.map((u) => qr(u, i, Ur())));
      throw Eh(o, a == null ? void 0 : a.callee), o;
    }
    return s.value;
  }, hs = (t) => (e, r, n) => {
    const a = n ? {
      ...n,
      async: false
    } : {
      async: false
    }, i = e._zod.run({
      value: r,
      issues: []
    }, a);
    if (i instanceof Promise) throw new $n();
    return i.issues.length ? {
      success: false,
      error: new (t ?? Ch)(i.issues.map((s) => qr(s, a, Ur())))
    } : {
      success: true,
      data: i.value
    };
  }, Z1 = hs(Rh), gs = (t) => async (e, r, n) => {
    const a = n ? Object.assign(n, {
      async: true
    }) : {
      async: true
    };
    let i = e._zod.run({
      value: r,
      issues: []
    }, a);
    return i instanceof Promise && (i = await i), i.issues.length ? {
      success: false,
      error: new t(i.issues.map((s) => qr(s, a, Ur())))
    } : {
      success: true,
      data: i.value
    };
  }, G1 = gs(Rh), W1 = (t) => (e, r, n) => {
    const a = n ? Object.assign(n, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return il(t)(e, r, a);
  }, H1 = (t) => (e, r, n) => il(t)(e, r, n), K1 = (t) => async (e, r, n) => {
    const a = n ? Object.assign(n, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return sl(t)(e, r, a);
  }, Y1 = (t) => async (e, r, n) => sl(t)(e, r, n), j1 = (t) => (e, r, n) => {
    const a = n ? Object.assign(n, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return hs(t)(e, r, a);
  }, X1 = (t) => (e, r, n) => hs(t)(e, r, n), J1 = (t) => async (e, r, n) => {
    const a = n ? Object.assign(n, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return gs(t)(e, r, a);
  }, Q1 = (t) => async (e, r, n) => gs(t)(e, r, n), ex = /^[cC][^\s-]{8,}$/, tx = /^[0-9a-z]+$/, rx = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, nx = /^[0-9a-vA-V]{20}$/, ax = /^[A-Za-z0-9]{27}$/, ix = /^[a-zA-Z0-9_-]{21}$/, sx = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, ox = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Xf = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ux = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, lx = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
  function cx() {
    return new RegExp(lx, "u");
  }
  const fx = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, dx = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, vx = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, hx = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, gx = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ah = /^[A-Za-z0-9_-]*$/, px = /^\+[1-9]\d{6,14}$/, kh = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", mx = new RegExp(`^${kh}$`);
  function Ph(t) {
    const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof t.precision == "number" ? t.precision === -1 ? `${e}` : t.precision === 0 ? `${e}:[0-5]\\d` : `${e}:[0-5]\\d\\.\\d{${t.precision}}` : `${e}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  }
  function yx(t) {
    return new RegExp(`^${Ph(t)}$`);
  }
  function bx(t) {
    const e = Ph({
      precision: t.precision
    }), r = [
      "Z"
    ];
    t.local && r.push(""), t.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const n = `${e}(?:${r.join("|")})`;
    return new RegExp(`^${kh}T(?:${n})$`);
  }
  const wx = (t) => {
    const e = t ? `[\\s\\S]{${(t == null ? void 0 : t.minimum) ?? 0},${(t == null ? void 0 : t.maximum) ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${e}$`);
  }, xx = /^-?\d+$/, _h = /^-?\d+(?:\.\d+)?$/, Ex = /^(?:true|false)$/i, Tx = /^null$/i, Sx = /^undefined$/i, Cx = /^[^A-Z]*$/, Rx = /^[^a-z]*$/, Gt = W("$ZodCheck", (t, e) => {
    var r;
    t._zod ?? (t._zod = {}), t._zod.def = e, (r = t._zod).onattach ?? (r.onattach = []);
  }), Ih = {
    number: "number",
    bigint: "bigint",
    object: "date"
  }, Bh = W("$ZodCheckLessThan", (t, e) => {
    Gt.init(t, e);
    const r = Ih[typeof e.value];
    t._zod.onattach.push((n) => {
      const a = n._zod.bag, i = (e.inclusive ? a.maximum : a.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      e.value < i && (e.inclusive ? a.maximum = e.value : a.exclusiveMaximum = e.value);
    }), t._zod.check = (n) => {
      (e.inclusive ? n.value <= e.value : n.value < e.value) || n.issues.push({
        origin: r,
        code: "too_big",
        maximum: typeof e.value == "object" ? e.value.getTime() : e.value,
        input: n.value,
        inclusive: e.inclusive,
        inst: t,
        continue: !e.abort
      });
    };
  }), Mh = W("$ZodCheckGreaterThan", (t, e) => {
    Gt.init(t, e);
    const r = Ih[typeof e.value];
    t._zod.onattach.push((n) => {
      const a = n._zod.bag, i = (e.inclusive ? a.minimum : a.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      e.value > i && (e.inclusive ? a.minimum = e.value : a.exclusiveMinimum = e.value);
    }), t._zod.check = (n) => {
      (e.inclusive ? n.value >= e.value : n.value > e.value) || n.issues.push({
        origin: r,
        code: "too_small",
        minimum: typeof e.value == "object" ? e.value.getTime() : e.value,
        input: n.value,
        inclusive: e.inclusive,
        inst: t,
        continue: !e.abort
      });
    };
  }), Ax = W("$ZodCheckMultipleOf", (t, e) => {
    Gt.init(t, e), t._zod.onattach.push((r) => {
      var n;
      (n = r._zod.bag).multipleOf ?? (n.multipleOf = e.value);
    }), t._zod.check = (r) => {
      if (typeof r.value != typeof e.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
      (typeof r.value == "bigint" ? r.value % e.value === BigInt(0) : P1(r.value, e.value) === 0) || r.issues.push({
        origin: typeof r.value,
        code: "not_multiple_of",
        divisor: e.value,
        input: r.value,
        inst: t,
        continue: !e.abort
      });
    };
  }), kx = W("$ZodCheckNumberFormat", (t, e) => {
    var _a3;
    Gt.init(t, e), e.format = e.format || "float64";
    const r = (_a3 = e.format) == null ? void 0 : _a3.includes("int"), n = r ? "int" : "number", [a, i] = D1[e.format];
    t._zod.onattach.push((s) => {
      const o = s._zod.bag;
      o.format = e.format, o.minimum = a, o.maximum = i, r && (o.pattern = xx);
    }), t._zod.check = (s) => {
      const o = s.value;
      if (r) {
        if (!Number.isInteger(o)) {
          s.issues.push({
            expected: n,
            format: e.format,
            code: "invalid_type",
            continue: false,
            input: o,
            inst: t
          });
          return;
        }
        if (!Number.isSafeInteger(o)) {
          o > 0 ? s.issues.push({
            input: o,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: t,
            origin: n,
            inclusive: true,
            continue: !e.abort
          }) : s.issues.push({
            input: o,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: t,
            origin: n,
            inclusive: true,
            continue: !e.abort
          });
          return;
        }
      }
      o < a && s.issues.push({
        origin: "number",
        input: o,
        code: "too_small",
        minimum: a,
        inclusive: true,
        inst: t,
        continue: !e.abort
      }), o > i && s.issues.push({
        origin: "number",
        input: o,
        code: "too_big",
        maximum: i,
        inclusive: true,
        inst: t,
        continue: !e.abort
      });
    };
  }), Px = W("$ZodCheckMaxLength", (t, e) => {
    var r;
    Gt.init(t, e), (r = t._zod.def).when ?? (r.when = (n) => {
      const a = n.value;
      return !rl(a) && a.length !== void 0;
    }), t._zod.onattach.push((n) => {
      const a = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      e.maximum < a && (n._zod.bag.maximum = e.maximum);
    }), t._zod.check = (n) => {
      const a = n.value;
      if (a.length <= e.maximum) return;
      const s = al(a);
      n.issues.push({
        origin: s,
        code: "too_big",
        maximum: e.maximum,
        inclusive: true,
        input: a,
        inst: t,
        continue: !e.abort
      });
    };
  }), _x = W("$ZodCheckMinLength", (t, e) => {
    var r;
    Gt.init(t, e), (r = t._zod.def).when ?? (r.when = (n) => {
      const a = n.value;
      return !rl(a) && a.length !== void 0;
    }), t._zod.onattach.push((n) => {
      const a = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      e.minimum > a && (n._zod.bag.minimum = e.minimum);
    }), t._zod.check = (n) => {
      const a = n.value;
      if (a.length >= e.minimum) return;
      const s = al(a);
      n.issues.push({
        origin: s,
        code: "too_small",
        minimum: e.minimum,
        inclusive: true,
        input: a,
        inst: t,
        continue: !e.abort
      });
    };
  }), Ix = W("$ZodCheckLengthEquals", (t, e) => {
    var r;
    Gt.init(t, e), (r = t._zod.def).when ?? (r.when = (n) => {
      const a = n.value;
      return !rl(a) && a.length !== void 0;
    }), t._zod.onattach.push((n) => {
      const a = n._zod.bag;
      a.minimum = e.length, a.maximum = e.length, a.length = e.length;
    }), t._zod.check = (n) => {
      const a = n.value, i = a.length;
      if (i === e.length) return;
      const s = al(a), o = i > e.length;
      n.issues.push({
        origin: s,
        ...o ? {
          code: "too_big",
          maximum: e.length
        } : {
          code: "too_small",
          minimum: e.length
        },
        inclusive: true,
        exact: true,
        input: n.value,
        inst: t,
        continue: !e.abort
      });
    };
  }), ps = W("$ZodCheckStringFormat", (t, e) => {
    var r, n;
    Gt.init(t, e), t._zod.onattach.push((a) => {
      const i = a._zod.bag;
      i.format = e.format, e.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(e.pattern));
    }), e.pattern ? (r = t._zod).check ?? (r.check = (a) => {
      e.pattern.lastIndex = 0, !e.pattern.test(a.value) && a.issues.push({
        origin: "string",
        code: "invalid_format",
        format: e.format,
        input: a.value,
        ...e.pattern ? {
          pattern: e.pattern.toString()
        } : {},
        inst: t,
        continue: !e.abort
      });
    }) : (n = t._zod).check ?? (n.check = () => {
    });
  }), Bx = W("$ZodCheckRegex", (t, e) => {
    ps.init(t, e), t._zod.check = (r) => {
      e.pattern.lastIndex = 0, !e.pattern.test(r.value) && r.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: r.value,
        pattern: e.pattern.toString(),
        inst: t,
        continue: !e.abort
      });
    };
  }), Mx = W("$ZodCheckLowerCase", (t, e) => {
    e.pattern ?? (e.pattern = Cx), ps.init(t, e);
  }), Dx = W("$ZodCheckUpperCase", (t, e) => {
    e.pattern ?? (e.pattern = Rx), ps.init(t, e);
  }), Ox = W("$ZodCheckIncludes", (t, e) => {
    Gt.init(t, e);
    const r = Hn(e.includes), n = new RegExp(typeof e.position == "number" ? `^.{${e.position}}${r}` : r);
    e.pattern = n, t._zod.onattach.push((a) => {
      const i = a._zod.bag;
      i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(n);
    }), t._zod.check = (a) => {
      a.value.includes(e.includes, e.position) || a.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: e.includes,
        input: a.value,
        inst: t,
        continue: !e.abort
      });
    };
  }), Nx = W("$ZodCheckStartsWith", (t, e) => {
    Gt.init(t, e);
    const r = new RegExp(`^${Hn(e.prefix)}.*`);
    e.pattern ?? (e.pattern = r), t._zod.onattach.push((n) => {
      const a = n._zod.bag;
      a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(r);
    }), t._zod.check = (n) => {
      n.value.startsWith(e.prefix) || n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: e.prefix,
        input: n.value,
        inst: t,
        continue: !e.abort
      });
    };
  }), zx = W("$ZodCheckEndsWith", (t, e) => {
    Gt.init(t, e);
    const r = new RegExp(`.*${Hn(e.suffix)}$`);
    e.pattern ?? (e.pattern = r), t._zod.onattach.push((n) => {
      const a = n._zod.bag;
      a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(r);
    }), t._zod.check = (n) => {
      n.value.endsWith(e.suffix) || n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: e.suffix,
        input: n.value,
        inst: t,
        continue: !e.abort
      });
    };
  }), Lx = W("$ZodCheckOverwrite", (t, e) => {
    Gt.init(t, e), t._zod.check = (r) => {
      r.value = e.tx(r.value);
    };
  });
  class Fx {
    constructor(e = []) {
      this.content = [], this.indent = 0, this && (this.args = e);
    }
    indented(e) {
      this.indent += 1, e(this), this.indent -= 1;
    }
    write(e) {
      if (typeof e == "function") {
        e(this, {
          execution: "sync"
        }), e(this, {
          execution: "async"
        });
        return;
      }
      const n = e.split(`
`).filter((s) => s), a = Math.min(...n.map((s) => s.length - s.trimStart().length)), i = n.map((s) => s.slice(a)).map((s) => " ".repeat(this.indent * 2) + s);
      for (const s of i) this.content.push(s);
    }
    compile() {
      const e = Function, r = this == null ? void 0 : this.args, a = [
        ...((this == null ? void 0 : this.content) ?? [
          ""
        ]).map((i) => `  ${i}`)
      ];
      return new e(...r, a.join(`
`));
    }
  }
  const Vx = {
    major: 4,
    minor: 3,
    patch: 5
  }, Je = W("$ZodType", (t, e) => {
    var _a3;
    var r;
    t ?? (t = {}), t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = Vx;
    const n = [
      ...t._zod.def.checks ?? []
    ];
    t._zod.traits.has("$ZodCheck") && n.unshift(t);
    for (const a of n) for (const i of a._zod.onattach) i(t);
    if (n.length === 0) (r = t._zod).deferred ?? (r.deferred = []), (_a3 = t._zod.deferred) == null ? void 0 : _a3.push(() => {
      t._zod.run = t._zod.parse;
    });
    else {
      const a = (s, o, u) => {
        let l = On(s), c;
        for (const f of o) {
          if (f._zod.def.when) {
            if (!f._zod.def.when(s)) continue;
          } else if (l) continue;
          const d = s.issues.length, v = f._zod.check(s);
          if (v instanceof Promise && (u == null ? void 0 : u.async) === false) throw new $n();
          if (c || v instanceof Promise) c = (c ?? Promise.resolve()).then(async () => {
            await v, s.issues.length !== d && (l || (l = On(s, d)));
          });
          else {
            if (s.issues.length === d) continue;
            l || (l = On(s, d));
          }
        }
        return c ? c.then(() => s) : s;
      }, i = (s, o, u) => {
        if (On(s)) return s.aborted = true, s;
        const l = a(o, n, u);
        if (l instanceof Promise) {
          if (u.async === false) throw new $n();
          return l.then((c) => t._zod.parse(c, u));
        }
        return t._zod.parse(l, u);
      };
      t._zod.run = (s, o) => {
        if (o.skipChecks) return t._zod.parse(s, o);
        if (o.direction === "backward") {
          const l = t._zod.parse({
            value: s.value,
            issues: []
          }, {
            ...o,
            skipChecks: true
          });
          return l instanceof Promise ? l.then((c) => i(c, s, o)) : i(l, s, o);
        }
        const u = t._zod.parse(s, o);
        if (u instanceof Promise) {
          if (o.async === false) throw new $n();
          return u.then((l) => a(l, n, o));
        }
        return a(u, n, o);
      };
    }
    We(t, "~standard", () => ({
      validate: (a) => {
        var _a4;
        try {
          const i = Z1(t, a);
          return i.success ? {
            value: i.data
          } : {
            issues: (_a4 = i.error) == null ? void 0 : _a4.issues
          };
        } catch {
          return G1(t, a).then((s) => {
            var _a5;
            return s.success ? {
              value: s.data
            } : {
              issues: (_a5 = s.error) == null ? void 0 : _a5.issues
            };
          });
        }
      },
      vendor: "zod",
      version: 1
    }));
  }), ol = W("$ZodString", (t, e) => {
    var _a3;
    Je.init(t, e), t._zod.pattern = [
      ...((_a3 = t == null ? void 0 : t._zod.bag) == null ? void 0 : _a3.patterns) ?? []
    ].pop() ?? wx(t._zod.bag), t._zod.parse = (r, n) => {
      if (e.coerce) try {
        r.value = String(r.value);
      } catch {
      }
      return typeof r.value == "string" || r.issues.push({
        expected: "string",
        code: "invalid_type",
        input: r.value,
        inst: t
      }), r;
    };
  }), rt = W("$ZodStringFormat", (t, e) => {
    ps.init(t, e), ol.init(t, e);
  }), $x = W("$ZodGUID", (t, e) => {
    e.pattern ?? (e.pattern = ox), rt.init(t, e);
  }), Ux = W("$ZodUUID", (t, e) => {
    if (e.version) {
      const n = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      }[e.version];
      if (n === void 0) throw new Error(`Invalid UUID version: "${e.version}"`);
      e.pattern ?? (e.pattern = Xf(n));
    } else e.pattern ?? (e.pattern = Xf());
    rt.init(t, e);
  }), qx = W("$ZodEmail", (t, e) => {
    e.pattern ?? (e.pattern = ux), rt.init(t, e);
  }), Zx = W("$ZodURL", (t, e) => {
    rt.init(t, e), t._zod.check = (r) => {
      try {
        const n = r.value.trim(), a = new URL(n);
        e.hostname && (e.hostname.lastIndex = 0, e.hostname.test(a.hostname) || r.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: e.hostname.source,
          input: r.value,
          inst: t,
          continue: !e.abort
        })), e.protocol && (e.protocol.lastIndex = 0, e.protocol.test(a.protocol.endsWith(":") ? a.protocol.slice(0, -1) : a.protocol) || r.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: e.protocol.source,
          input: r.value,
          inst: t,
          continue: !e.abort
        })), e.normalize ? r.value = a.href : r.value = n;
        return;
      } catch {
        r.issues.push({
          code: "invalid_format",
          format: "url",
          input: r.value,
          inst: t,
          continue: !e.abort
        });
      }
    };
  }), Gx = W("$ZodEmoji", (t, e) => {
    e.pattern ?? (e.pattern = cx()), rt.init(t, e);
  }), Wx = W("$ZodNanoID", (t, e) => {
    e.pattern ?? (e.pattern = ix), rt.init(t, e);
  }), Hx = W("$ZodCUID", (t, e) => {
    e.pattern ?? (e.pattern = ex), rt.init(t, e);
  }), Kx = W("$ZodCUID2", (t, e) => {
    e.pattern ?? (e.pattern = tx), rt.init(t, e);
  }), Yx = W("$ZodULID", (t, e) => {
    e.pattern ?? (e.pattern = rx), rt.init(t, e);
  }), jx = W("$ZodXID", (t, e) => {
    e.pattern ?? (e.pattern = nx), rt.init(t, e);
  }), Xx = W("$ZodKSUID", (t, e) => {
    e.pattern ?? (e.pattern = ax), rt.init(t, e);
  }), Jx = W("$ZodISODateTime", (t, e) => {
    e.pattern ?? (e.pattern = bx(e)), rt.init(t, e);
  }), Qx = W("$ZodISODate", (t, e) => {
    e.pattern ?? (e.pattern = mx), rt.init(t, e);
  }), eE = W("$ZodISOTime", (t, e) => {
    e.pattern ?? (e.pattern = yx(e)), rt.init(t, e);
  }), tE = W("$ZodISODuration", (t, e) => {
    e.pattern ?? (e.pattern = sx), rt.init(t, e);
  }), rE = W("$ZodIPv4", (t, e) => {
    e.pattern ?? (e.pattern = fx), rt.init(t, e), t._zod.bag.format = "ipv4";
  }), nE = W("$ZodIPv6", (t, e) => {
    e.pattern ?? (e.pattern = dx), rt.init(t, e), t._zod.bag.format = "ipv6", t._zod.check = (r) => {
      try {
        new URL(`http://[${r.value}]`);
      } catch {
        r.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: r.value,
          inst: t,
          continue: !e.abort
        });
      }
    };
  }), aE = W("$ZodCIDRv4", (t, e) => {
    e.pattern ?? (e.pattern = vx), rt.init(t, e);
  }), iE = W("$ZodCIDRv6", (t, e) => {
    e.pattern ?? (e.pattern = hx), rt.init(t, e), t._zod.check = (r) => {
      const n = r.value.split("/");
      try {
        if (n.length !== 2) throw new Error();
        const [a, i] = n;
        if (!i) throw new Error();
        const s = Number(i);
        if (`${s}` !== i) throw new Error();
        if (s < 0 || s > 128) throw new Error();
        new URL(`http://[${a}]`);
      } catch {
        r.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: r.value,
          inst: t,
          continue: !e.abort
        });
      }
    };
  });
  function Dh(t) {
    if (t === "") return true;
    if (t.length % 4 !== 0) return false;
    try {
      return atob(t), true;
    } catch {
      return false;
    }
  }
  const sE = W("$ZodBase64", (t, e) => {
    e.pattern ?? (e.pattern = gx), rt.init(t, e), t._zod.bag.contentEncoding = "base64", t._zod.check = (r) => {
      Dh(r.value) || r.issues.push({
        code: "invalid_format",
        format: "base64",
        input: r.value,
        inst: t,
        continue: !e.abort
      });
    };
  });
  function oE(t) {
    if (!Ah.test(t)) return false;
    const e = t.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
    return Dh(r);
  }
  const uE = W("$ZodBase64URL", (t, e) => {
    e.pattern ?? (e.pattern = Ah), rt.init(t, e), t._zod.bag.contentEncoding = "base64url", t._zod.check = (r) => {
      oE(r.value) || r.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: r.value,
        inst: t,
        continue: !e.abort
      });
    };
  }), lE = W("$ZodE164", (t, e) => {
    e.pattern ?? (e.pattern = px), rt.init(t, e);
  });
  function cE(t, e = null) {
    try {
      const r = t.split(".");
      if (r.length !== 3) return false;
      const [n] = r;
      if (!n) return false;
      const a = JSON.parse(atob(n));
      return !("typ" in a && (a == null ? void 0 : a.typ) !== "JWT" || !a.alg || e && (!("alg" in a) || a.alg !== e));
    } catch {
      return false;
    }
  }
  const fE = W("$ZodJWT", (t, e) => {
    rt.init(t, e), t._zod.check = (r) => {
      cE(r.value, e.alg) || r.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: r.value,
        inst: t,
        continue: !e.abort
      });
    };
  }), Oh = W("$ZodNumber", (t, e) => {
    Je.init(t, e), t._zod.pattern = t._zod.bag.pattern ?? _h, t._zod.parse = (r, n) => {
      if (e.coerce) try {
        r.value = Number(r.value);
      } catch {
      }
      const a = r.value;
      if (typeof a == "number" && !Number.isNaN(a) && Number.isFinite(a)) return r;
      const i = typeof a == "number" ? Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : "Infinity" : void 0;
      return r.issues.push({
        expected: "number",
        code: "invalid_type",
        input: a,
        inst: t,
        ...i ? {
          received: i
        } : {}
      }), r;
    };
  }), dE = W("$ZodNumberFormat", (t, e) => {
    kx.init(t, e), Oh.init(t, e);
  }), vE = W("$ZodBoolean", (t, e) => {
    Je.init(t, e), t._zod.pattern = Ex, t._zod.parse = (r, n) => {
      if (e.coerce) try {
        r.value = !!r.value;
      } catch {
      }
      const a = r.value;
      return typeof a == "boolean" || r.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: a,
        inst: t
      }), r;
    };
  }), hE = W("$ZodUndefined", (t, e) => {
    Je.init(t, e), t._zod.pattern = Sx, t._zod.values = /* @__PURE__ */ new Set([
      void 0
    ]), t._zod.optin = "optional", t._zod.optout = "optional", t._zod.parse = (r, n) => {
      const a = r.value;
      return typeof a > "u" || r.issues.push({
        expected: "undefined",
        code: "invalid_type",
        input: a,
        inst: t
      }), r;
    };
  }), gE = W("$ZodNull", (t, e) => {
    Je.init(t, e), t._zod.pattern = Tx, t._zod.values = /* @__PURE__ */ new Set([
      null
    ]), t._zod.parse = (r, n) => {
      const a = r.value;
      return a === null || r.issues.push({
        expected: "null",
        code: "invalid_type",
        input: a,
        inst: t
      }), r;
    };
  }), pE = W("$ZodUnknown", (t, e) => {
    Je.init(t, e), t._zod.parse = (r) => r;
  }), mE = W("$ZodNever", (t, e) => {
    Je.init(t, e), t._zod.parse = (r, n) => (r.issues.push({
      expected: "never",
      code: "invalid_type",
      input: r.value,
      inst: t
    }), r);
  });
  function Jf(t, e, r) {
    t.issues.length && e.issues.push(...Nn(r, t.issues)), e.value[r] = t.value;
  }
  const yE = W("$ZodArray", (t, e) => {
    Je.init(t, e), t._zod.parse = (r, n) => {
      const a = r.value;
      if (!Array.isArray(a)) return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: a,
        inst: t
      }), r;
      r.value = Array(a.length);
      const i = [];
      for (let s = 0; s < a.length; s++) {
        const o = a[s], u = e.element._zod.run({
          value: o,
          issues: []
        }, n);
        u instanceof Promise ? i.push(u.then((l) => Jf(l, r, s))) : Jf(u, r, s);
      }
      return i.length ? Promise.all(i).then(() => r) : r;
    };
  });
  function qi(t, e, r, n, a) {
    if (t.issues.length) {
      if (a && !(r in n)) return;
      e.issues.push(...Nn(r, t.issues));
    }
    t.value === void 0 ? r in n && (e.value[r] = void 0) : e.value[r] = t.value;
  }
  function Nh(t) {
    var _a3, _b3, _c3, _d2;
    const e = Object.keys(t.shape);
    for (const n of e) if (!((_d2 = (_c3 = (_b3 = (_a3 = t.shape) == null ? void 0 : _a3[n]) == null ? void 0 : _b3._zod) == null ? void 0 : _c3.traits) == null ? void 0 : _d2.has("$ZodType"))) throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
    const r = M1(t.shape);
    return {
      ...t,
      keys: e,
      keySet: new Set(e),
      numKeys: e.length,
      optionalKeys: new Set(r)
    };
  }
  function zh(t, e, r, n, a, i) {
    const s = [], o = a.keySet, u = a.catchall._zod, l = u.def.type, c = u.optout === "optional";
    for (const f in e) {
      if (o.has(f)) continue;
      if (l === "never") {
        s.push(f);
        continue;
      }
      const d = u.run({
        value: e[f],
        issues: []
      }, n);
      d instanceof Promise ? t.push(d.then((v) => qi(v, r, f, e, c))) : qi(d, r, f, e, c);
    }
    return s.length && r.issues.push({
      code: "unrecognized_keys",
      keys: s,
      input: e,
      inst: i
    }), t.length ? Promise.all(t).then(() => r) : r;
  }
  const bE = W("$ZodObject", (t, e) => {
    var _a3;
    if (Je.init(t, e), !((_a3 = Object.getOwnPropertyDescriptor(e, "shape")) == null ? void 0 : _a3.get)) {
      const o = e.shape;
      Object.defineProperty(e, "shape", {
        get: () => {
          const u = {
            ...o
          };
          return Object.defineProperty(e, "shape", {
            value: u
          }), u;
        }
      });
    }
    const n = vs(() => Nh(e));
    We(t._zod, "propValues", () => {
      const o = e.shape, u = {};
      for (const l in o) {
        const c = o[l]._zod;
        if (c.values) {
          u[l] ?? (u[l] = /* @__PURE__ */ new Set());
          for (const f of c.values) u[l].add(f);
        }
      }
      return u;
    });
    const a = _a, i = e.catchall;
    let s;
    t._zod.parse = (o, u) => {
      s ?? (s = n.value);
      const l = o.value;
      if (!a(l)) return o.issues.push({
        expected: "object",
        code: "invalid_type",
        input: l,
        inst: t
      }), o;
      o.value = {};
      const c = [], f = s.shape;
      for (const d of s.keys) {
        const v = f[d], h = v._zod.optout === "optional", y = v._zod.run({
          value: l[d],
          issues: []
        }, u);
        y instanceof Promise ? c.push(y.then((p) => qi(p, o, d, l, h))) : qi(y, o, d, l, h);
      }
      return i ? zh(c, l, o, u, n.value, t) : c.length ? Promise.all(c).then(() => o) : o;
    };
  }), wE = W("$ZodObjectJIT", (t, e) => {
    bE.init(t, e);
    const r = t._zod.parse, n = vs(() => Nh(e)), a = (d) => {
      var _a3, _b3;
      const v = new Fx([
        "shape",
        "payload",
        "ctx"
      ]), h = n.value, y = (m) => {
        const x = jf(m);
        return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
      };
      v.write("const input = payload.value;");
      const p = /* @__PURE__ */ Object.create(null);
      let g = 0;
      for (const m of h.keys) p[m] = `key_${g++}`;
      v.write("const newResult = {};");
      for (const m of h.keys) {
        const x = p[m], E = jf(m), w = ((_b3 = (_a3 = d[m]) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout) === "optional";
        v.write(`const ${x} = ${y(m)};`), w ? v.write(`
        if (${x}.issues.length) {
          if (${E} in input) {
            payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${E}, ...iss.path] : [${E}]
            })));
          }
        }
        
        if (${x}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${x}.value;
        }
        
      `) : v.write(`
        if (${x}.issues.length) {
          payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${E}, ...iss.path] : [${E}]
          })));
        }
        
        if (${x}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${x}.value;
        }
        
      `);
      }
      v.write("payload.value = newResult;"), v.write("return payload;");
      const b = v.compile();
      return (m, x) => b(d, m, x);
    };
    let i;
    const s = _a, o = !wh.jitless, l = o && I1.value, c = e.catchall;
    let f;
    t._zod.parse = (d, v) => {
      f ?? (f = n.value);
      const h = d.value;
      return s(h) ? o && l && (v == null ? void 0 : v.async) === false && v.jitless !== true ? (i || (i = a(e.shape)), d = i(d, v), c ? zh([], h, d, v, f, t) : d) : r(d, v) : (d.issues.push({
        expected: "object",
        code: "invalid_type",
        input: h,
        inst: t
      }), d);
    };
  });
  function Qf(t, e, r, n) {
    for (const i of t) if (i.issues.length === 0) return e.value = i.value, e;
    const a = t.filter((i) => !On(i));
    return a.length === 1 ? (e.value = a[0].value, a[0]) : (e.issues.push({
      code: "invalid_union",
      input: e.value,
      inst: r,
      errors: t.map((i) => i.issues.map((s) => qr(s, n, Ur())))
    }), e);
  }
  const Lh = W("$ZodUnion", (t, e) => {
    Je.init(t, e), We(t._zod, "optin", () => e.options.some((a) => a._zod.optin === "optional") ? "optional" : void 0), We(t._zod, "optout", () => e.options.some((a) => a._zod.optout === "optional") ? "optional" : void 0), We(t._zod, "values", () => {
      if (e.options.every((a) => a._zod.values)) return new Set(e.options.flatMap((a) => Array.from(a._zod.values)));
    }), We(t._zod, "pattern", () => {
      if (e.options.every((a) => a._zod.pattern)) {
        const a = e.options.map((i) => i._zod.pattern);
        return new RegExp(`^(${a.map((i) => nl(i.source)).join("|")})$`);
      }
    });
    const r = e.options.length === 1, n = e.options[0]._zod.run;
    t._zod.parse = (a, i) => {
      if (r) return n(a, i);
      let s = false;
      const o = [];
      for (const u of e.options) {
        const l = u._zod.run({
          value: a.value,
          issues: []
        }, i);
        if (l instanceof Promise) o.push(l), s = true;
        else {
          if (l.issues.length === 0) return l;
          o.push(l);
        }
      }
      return s ? Promise.all(o).then((u) => Qf(u, a, t, i)) : Qf(o, a, t, i);
    };
  }), xE = W("$ZodDiscriminatedUnion", (t, e) => {
    e.inclusive = false, Lh.init(t, e);
    const r = t._zod.parse;
    We(t._zod, "propValues", () => {
      const a = {};
      for (const i of e.options) {
        const s = i._zod.propValues;
        if (!s || Object.keys(s).length === 0) throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(i)}"`);
        for (const [o, u] of Object.entries(s)) {
          a[o] || (a[o] = /* @__PURE__ */ new Set());
          for (const l of u) a[o].add(l);
        }
      }
      return a;
    });
    const n = vs(() => {
      var _a3;
      const a = e.options, i = /* @__PURE__ */ new Map();
      for (const s of a) {
        const o = (_a3 = s._zod.propValues) == null ? void 0 : _a3[e.discriminator];
        if (!o || o.size === 0) throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(s)}"`);
        for (const u of o) {
          if (i.has(u)) throw new Error(`Duplicate discriminator value "${String(u)}"`);
          i.set(u, s);
        }
      }
      return i;
    });
    t._zod.parse = (a, i) => {
      const s = a.value;
      if (!_a(s)) return a.issues.push({
        code: "invalid_type",
        expected: "object",
        input: s,
        inst: t
      }), a;
      const o = n.value.get(s == null ? void 0 : s[e.discriminator]);
      return o ? o._zod.run(a, i) : e.unionFallback ? r(a, i) : (a.issues.push({
        code: "invalid_union",
        errors: [],
        note: "No matching discriminator",
        discriminator: e.discriminator,
        input: s,
        path: [
          e.discriminator
        ],
        inst: t
      }), a);
    };
  }), EE = W("$ZodIntersection", (t, e) => {
    Je.init(t, e), t._zod.parse = (r, n) => {
      const a = r.value, i = e.left._zod.run({
        value: a,
        issues: []
      }, n), s = e.right._zod.run({
        value: a,
        issues: []
      }, n);
      return i instanceof Promise || s instanceof Promise ? Promise.all([
        i,
        s
      ]).then(([u, l]) => ed(r, u, l)) : ed(r, i, s);
    };
  });
  function Ru(t, e) {
    if (t === e) return {
      valid: true,
      data: t
    };
    if (t instanceof Date && e instanceof Date && +t == +e) return {
      valid: true,
      data: t
    };
    if (Wn(t) && Wn(e)) {
      const r = Object.keys(e), n = Object.keys(t).filter((i) => r.indexOf(i) !== -1), a = {
        ...t,
        ...e
      };
      for (const i of n) {
        const s = Ru(t[i], e[i]);
        if (!s.valid) return {
          valid: false,
          mergeErrorPath: [
            i,
            ...s.mergeErrorPath
          ]
        };
        a[i] = s.data;
      }
      return {
        valid: true,
        data: a
      };
    }
    if (Array.isArray(t) && Array.isArray(e)) {
      if (t.length !== e.length) return {
        valid: false,
        mergeErrorPath: []
      };
      const r = [];
      for (let n = 0; n < t.length; n++) {
        const a = t[n], i = e[n], s = Ru(a, i);
        if (!s.valid) return {
          valid: false,
          mergeErrorPath: [
            n,
            ...s.mergeErrorPath
          ]
        };
        r.push(s.data);
      }
      return {
        valid: true,
        data: r
      };
    }
    return {
      valid: false,
      mergeErrorPath: []
    };
  }
  function ed(t, e, r) {
    const n = /* @__PURE__ */ new Map();
    let a;
    for (const o of e.issues) if (o.code === "unrecognized_keys") {
      a ?? (a = o);
      for (const u of o.keys) n.has(u) || n.set(u, {}), n.get(u).l = true;
    } else t.issues.push(o);
    for (const o of r.issues) if (o.code === "unrecognized_keys") for (const u of o.keys) n.has(u) || n.set(u, {}), n.get(u).r = true;
    else t.issues.push(o);
    const i = [
      ...n
    ].filter(([, o]) => o.l && o.r).map(([o]) => o);
    if (i.length && a && t.issues.push({
      ...a,
      keys: i
    }), On(t)) return t;
    const s = Ru(e.value, r.value);
    if (!s.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
    return t.value = s.data, t;
  }
  const TE = W("$ZodRecord", (t, e) => {
    Je.init(t, e), t._zod.parse = (r, n) => {
      const a = r.value;
      if (!Wn(a)) return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: a,
        inst: t
      }), r;
      const i = [], s = e.keyType._zod.values;
      if (s) {
        r.value = {};
        const o = /* @__PURE__ */ new Set();
        for (const l of s) if (typeof l == "string" || typeof l == "number" || typeof l == "symbol") {
          o.add(typeof l == "number" ? l.toString() : l);
          const c = e.valueType._zod.run({
            value: a[l],
            issues: []
          }, n);
          c instanceof Promise ? i.push(c.then((f) => {
            f.issues.length && r.issues.push(...Nn(l, f.issues)), r.value[l] = f.value;
          })) : (c.issues.length && r.issues.push(...Nn(l, c.issues)), r.value[l] = c.value);
        }
        let u;
        for (const l in a) o.has(l) || (u = u ?? [], u.push(l));
        u && u.length > 0 && r.issues.push({
          code: "unrecognized_keys",
          input: a,
          inst: t,
          keys: u
        });
      } else {
        r.value = {};
        for (const o of Reflect.ownKeys(a)) {
          if (o === "__proto__") continue;
          let u = e.keyType._zod.run({
            value: o,
            issues: []
          }, n);
          if (u instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (typeof o == "string" && _h.test(o) && u.issues.length && u.issues.some((f) => f.code === "invalid_type" && f.expected === "number")) {
            const f = e.keyType._zod.run({
              value: Number(o),
              issues: []
            }, n);
            if (f instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            f.issues.length === 0 && (u = f);
          }
          if (u.issues.length) {
            e.mode === "loose" ? r.value[o] = a[o] : r.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: u.issues.map((f) => qr(f, n, Ur())),
              input: o,
              path: [
                o
              ],
              inst: t
            });
            continue;
          }
          const c = e.valueType._zod.run({
            value: a[o],
            issues: []
          }, n);
          c instanceof Promise ? i.push(c.then((f) => {
            f.issues.length && r.issues.push(...Nn(o, f.issues)), r.value[u.value] = f.value;
          })) : (c.issues.length && r.issues.push(...Nn(o, c.issues)), r.value[u.value] = c.value);
        }
      }
      return i.length ? Promise.all(i).then(() => r) : r;
    };
  }), SE = W("$ZodEnum", (t, e) => {
    Je.init(t, e);
    const r = xh(e.entries), n = new Set(r);
    t._zod.values = n, t._zod.pattern = new RegExp(`^(${r.filter((a) => B1.has(typeof a)).map((a) => typeof a == "string" ? Hn(a) : a.toString()).join("|")})$`), t._zod.parse = (a, i) => {
      const s = a.value;
      return n.has(s) || a.issues.push({
        code: "invalid_value",
        values: r,
        input: s,
        inst: t
      }), a;
    };
  }), CE = W("$ZodLiteral", (t, e) => {
    if (Je.init(t, e), e.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
    const r = new Set(e.values);
    t._zod.values = r, t._zod.pattern = new RegExp(`^(${e.values.map((n) => typeof n == "string" ? Hn(n) : n ? Hn(n.toString()) : String(n)).join("|")})$`), t._zod.parse = (n, a) => {
      const i = n.value;
      return r.has(i) || n.issues.push({
        code: "invalid_value",
        values: e.values,
        input: i,
        inst: t
      }), n;
    };
  }), RE = W("$ZodTransform", (t, e) => {
    Je.init(t, e), t._zod.parse = (r, n) => {
      if (n.direction === "backward") throw new bh(t.constructor.name);
      const a = e.transform(r.value, r);
      if (n.async) return (a instanceof Promise ? a : Promise.resolve(a)).then((s) => (r.value = s, r));
      if (a instanceof Promise) throw new $n();
      return r.value = a, r;
    };
  });
  function td(t, e) {
    return t.issues.length && e === void 0 ? {
      issues: [],
      value: void 0
    } : t;
  }
  const Fh = W("$ZodOptional", (t, e) => {
    Je.init(t, e), t._zod.optin = "optional", t._zod.optout = "optional", We(t._zod, "values", () => e.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...e.innerType._zod.values,
      void 0
    ]) : void 0), We(t._zod, "pattern", () => {
      const r = e.innerType._zod.pattern;
      return r ? new RegExp(`^(${nl(r.source)})?$`) : void 0;
    }), t._zod.parse = (r, n) => {
      if (e.innerType._zod.optin === "optional") {
        const a = e.innerType._zod.run(r, n);
        return a instanceof Promise ? a.then((i) => td(i, r.value)) : td(a, r.value);
      }
      return r.value === void 0 ? r : e.innerType._zod.run(r, n);
    };
  }), AE = W("$ZodExactOptional", (t, e) => {
    Fh.init(t, e), We(t._zod, "values", () => e.innerType._zod.values), We(t._zod, "pattern", () => e.innerType._zod.pattern), t._zod.parse = (r, n) => e.innerType._zod.run(r, n);
  }), kE = W("$ZodNullable", (t, e) => {
    Je.init(t, e), We(t._zod, "optin", () => e.innerType._zod.optin), We(t._zod, "optout", () => e.innerType._zod.optout), We(t._zod, "pattern", () => {
      const r = e.innerType._zod.pattern;
      return r ? new RegExp(`^(${nl(r.source)}|null)$`) : void 0;
    }), We(t._zod, "values", () => e.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...e.innerType._zod.values,
      null
    ]) : void 0), t._zod.parse = (r, n) => r.value === null ? r : e.innerType._zod.run(r, n);
  }), PE = W("$ZodDefault", (t, e) => {
    Je.init(t, e), t._zod.optin = "optional", We(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (r, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(r, n);
      if (r.value === void 0) return r.value = e.defaultValue, r;
      const a = e.innerType._zod.run(r, n);
      return a instanceof Promise ? a.then((i) => rd(i, e)) : rd(a, e);
    };
  });
  function rd(t, e) {
    return t.value === void 0 && (t.value = e.defaultValue), t;
  }
  const _E = W("$ZodPrefault", (t, e) => {
    Je.init(t, e), t._zod.optin = "optional", We(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = e.defaultValue), e.innerType._zod.run(r, n));
  }), IE = W("$ZodNonOptional", (t, e) => {
    Je.init(t, e), We(t._zod, "values", () => {
      const r = e.innerType._zod.values;
      return r ? new Set([
        ...r
      ].filter((n) => n !== void 0)) : void 0;
    }), t._zod.parse = (r, n) => {
      const a = e.innerType._zod.run(r, n);
      return a instanceof Promise ? a.then((i) => nd(i, t)) : nd(a, t);
    };
  });
  function nd(t, e) {
    return !t.issues.length && t.value === void 0 && t.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: t.value,
      inst: e
    }), t;
  }
  const BE = W("$ZodCatch", (t, e) => {
    Je.init(t, e), We(t._zod, "optin", () => e.innerType._zod.optin), We(t._zod, "optout", () => e.innerType._zod.optout), We(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (r, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(r, n);
      const a = e.innerType._zod.run(r, n);
      return a instanceof Promise ? a.then((i) => (r.value = i.value, i.issues.length && (r.value = e.catchValue({
        ...r,
        error: {
          issues: i.issues.map((s) => qr(s, n, Ur()))
        },
        input: r.value
      }), r.issues = []), r)) : (r.value = a.value, a.issues.length && (r.value = e.catchValue({
        ...r,
        error: {
          issues: a.issues.map((i) => qr(i, n, Ur()))
        },
        input: r.value
      }), r.issues = []), r);
    };
  }), ME = W("$ZodPipe", (t, e) => {
    Je.init(t, e), We(t._zod, "values", () => e.in._zod.values), We(t._zod, "optin", () => e.in._zod.optin), We(t._zod, "optout", () => e.out._zod.optout), We(t._zod, "propValues", () => e.in._zod.propValues), t._zod.parse = (r, n) => {
      if (n.direction === "backward") {
        const i = e.out._zod.run(r, n);
        return i instanceof Promise ? i.then((s) => fi(s, e.in, n)) : fi(i, e.in, n);
      }
      const a = e.in._zod.run(r, n);
      return a instanceof Promise ? a.then((i) => fi(i, e.out, n)) : fi(a, e.out, n);
    };
  });
  function fi(t, e, r) {
    return t.issues.length ? (t.aborted = true, t) : e._zod.run({
      value: t.value,
      issues: t.issues
    }, r);
  }
  const DE = W("$ZodReadonly", (t, e) => {
    Je.init(t, e), We(t._zod, "propValues", () => e.innerType._zod.propValues), We(t._zod, "values", () => e.innerType._zod.values), We(t._zod, "optin", () => {
      var _a3, _b3;
      return (_b3 = (_a3 = e.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optin;
    }), We(t._zod, "optout", () => {
      var _a3, _b3;
      return (_b3 = (_a3 = e.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout;
    }), t._zod.parse = (r, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(r, n);
      const a = e.innerType._zod.run(r, n);
      return a instanceof Promise ? a.then(ad) : ad(a);
    };
  });
  function ad(t) {
    return t.value = Object.freeze(t.value), t;
  }
  const OE = W("$ZodCustom", (t, e) => {
    Gt.init(t, e), Je.init(t, e), t._zod.parse = (r, n) => r, t._zod.check = (r) => {
      const n = r.value, a = e.fn(n);
      if (a instanceof Promise) return a.then((i) => id(i, r, n, t));
      id(a, r, n, t);
    };
  });
  function id(t, e, r, n) {
    if (!t) {
      const a = {
        code: "custom",
        input: r,
        inst: n,
        path: [
          ...n._zod.def.path ?? []
        ],
        continue: !n._zod.def.abort
      };
      n._zod.def.params && (a.params = n._zod.def.params), e.issues.push(Ia(a));
    }
  }
  var sd;
  class NE {
    constructor() {
      this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
    }
    add(e, ...r) {
      const n = r[0];
      return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
    }
    clear() {
      return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
    }
    remove(e) {
      const r = this._map.get(e);
      return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(e), this;
    }
    get(e) {
      const r = e._zod.parent;
      if (r) {
        const n = {
          ...this.get(r) ?? {}
        };
        delete n.id;
        const a = {
          ...n,
          ...this._map.get(e)
        };
        return Object.keys(a).length ? a : void 0;
      }
      return this._map.get(e);
    }
    has(e) {
      return this._map.has(e);
    }
  }
  function zE() {
    return new NE();
  }
  (sd = globalThis).__zod_globalRegistry ?? (sd.__zod_globalRegistry = zE());
  const ha = globalThis.__zod_globalRegistry;
  function LE(t, e) {
    return new t({
      type: "string",
      ...fe(e)
    });
  }
  function FE(t, e) {
    return new t({
      type: "string",
      format: "email",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function od(t, e) {
    return new t({
      type: "string",
      format: "guid",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function VE(t, e) {
    return new t({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function $E(t, e) {
    return new t({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v4",
      ...fe(e)
    });
  }
  function UE(t, e) {
    return new t({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v6",
      ...fe(e)
    });
  }
  function qE(t, e) {
    return new t({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v7",
      ...fe(e)
    });
  }
  function ZE(t, e) {
    return new t({
      type: "string",
      format: "url",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function GE(t, e) {
    return new t({
      type: "string",
      format: "emoji",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function WE(t, e) {
    return new t({
      type: "string",
      format: "nanoid",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function HE(t, e) {
    return new t({
      type: "string",
      format: "cuid",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function KE(t, e) {
    return new t({
      type: "string",
      format: "cuid2",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function YE(t, e) {
    return new t({
      type: "string",
      format: "ulid",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function jE(t, e) {
    return new t({
      type: "string",
      format: "xid",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function XE(t, e) {
    return new t({
      type: "string",
      format: "ksuid",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function JE(t, e) {
    return new t({
      type: "string",
      format: "ipv4",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function QE(t, e) {
    return new t({
      type: "string",
      format: "ipv6",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function eT(t, e) {
    return new t({
      type: "string",
      format: "cidrv4",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function tT(t, e) {
    return new t({
      type: "string",
      format: "cidrv6",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function rT(t, e) {
    return new t({
      type: "string",
      format: "base64",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function nT(t, e) {
    return new t({
      type: "string",
      format: "base64url",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function aT(t, e) {
    return new t({
      type: "string",
      format: "e164",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function iT(t, e) {
    return new t({
      type: "string",
      format: "jwt",
      check: "string_format",
      abort: false,
      ...fe(e)
    });
  }
  function sT(t, e) {
    return new t({
      type: "string",
      format: "datetime",
      check: "string_format",
      offset: false,
      local: false,
      precision: null,
      ...fe(e)
    });
  }
  function oT(t, e) {
    return new t({
      type: "string",
      format: "date",
      check: "string_format",
      ...fe(e)
    });
  }
  function uT(t, e) {
    return new t({
      type: "string",
      format: "time",
      check: "string_format",
      precision: null,
      ...fe(e)
    });
  }
  function lT(t, e) {
    return new t({
      type: "string",
      format: "duration",
      check: "string_format",
      ...fe(e)
    });
  }
  function cT(t, e) {
    return new t({
      type: "number",
      checks: [],
      ...fe(e)
    });
  }
  function fT(t, e) {
    return new t({
      type: "number",
      check: "number_format",
      abort: false,
      format: "safeint",
      ...fe(e)
    });
  }
  function dT(t, e) {
    return new t({
      type: "boolean",
      ...fe(e)
    });
  }
  function vT(t, e) {
    return new t({
      type: "undefined",
      ...fe(e)
    });
  }
  function hT(t, e) {
    return new t({
      type: "null",
      ...fe(e)
    });
  }
  function gT(t) {
    return new t({
      type: "unknown"
    });
  }
  function pT(t, e) {
    return new t({
      type: "never",
      ...fe(e)
    });
  }
  function ud(t, e) {
    return new Bh({
      check: "less_than",
      ...fe(e),
      value: t,
      inclusive: false
    });
  }
  function Qo(t, e) {
    return new Bh({
      check: "less_than",
      ...fe(e),
      value: t,
      inclusive: true
    });
  }
  function ld(t, e) {
    return new Mh({
      check: "greater_than",
      ...fe(e),
      value: t,
      inclusive: false
    });
  }
  function eu(t, e) {
    return new Mh({
      check: "greater_than",
      ...fe(e),
      value: t,
      inclusive: true
    });
  }
  function cd(t, e) {
    return new Ax({
      check: "multiple_of",
      ...fe(e),
      value: t
    });
  }
  function Vh(t, e) {
    return new Px({
      check: "max_length",
      ...fe(e),
      maximum: t
    });
  }
  function Zi(t, e) {
    return new _x({
      check: "min_length",
      ...fe(e),
      minimum: t
    });
  }
  function $h(t, e) {
    return new Ix({
      check: "length_equals",
      ...fe(e),
      length: t
    });
  }
  function mT(t, e) {
    return new Bx({
      check: "string_format",
      format: "regex",
      ...fe(e),
      pattern: t
    });
  }
  function yT(t) {
    return new Mx({
      check: "string_format",
      format: "lowercase",
      ...fe(t)
    });
  }
  function bT(t) {
    return new Dx({
      check: "string_format",
      format: "uppercase",
      ...fe(t)
    });
  }
  function wT(t, e) {
    return new Ox({
      check: "string_format",
      format: "includes",
      ...fe(e),
      includes: t
    });
  }
  function xT(t, e) {
    return new Nx({
      check: "string_format",
      format: "starts_with",
      ...fe(e),
      prefix: t
    });
  }
  function ET(t, e) {
    return new zx({
      check: "string_format",
      format: "ends_with",
      ...fe(e),
      suffix: t
    });
  }
  function ea(t) {
    return new Lx({
      check: "overwrite",
      tx: t
    });
  }
  function TT(t) {
    return ea((e) => e.normalize(t));
  }
  function ST() {
    return ea((t) => t.trim());
  }
  function CT() {
    return ea((t) => t.toLowerCase());
  }
  function RT() {
    return ea((t) => t.toUpperCase());
  }
  function AT() {
    return ea((t) => _1(t));
  }
  function kT(t, e, r) {
    return new t({
      type: "array",
      element: e,
      ...fe(r)
    });
  }
  function PT(t, e, r) {
    const n = fe(r);
    return n.abort ?? (n.abort = true), new t({
      type: "custom",
      check: "custom",
      fn: e,
      ...n
    });
  }
  function _T(t, e, r) {
    return new t({
      type: "custom",
      check: "custom",
      fn: e,
      ...fe(r)
    });
  }
  function IT(t) {
    const e = BT((r) => (r.addIssue = (n) => {
      if (typeof n == "string") r.issues.push(Ia(n, r.value, e._zod.def));
      else {
        const a = n;
        a.fatal && (a.continue = false), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), a.continue ?? (a.continue = !e._zod.def.abort), r.issues.push(Ia(a));
      }
    }, t(r.value, r)));
    return e;
  }
  function BT(t, e) {
    const r = new Gt({
      check: "custom",
      ...fe(e)
    });
    return r._zod.check = t, r;
  }
  function Uh(t) {
    let e = (t == null ? void 0 : t.target) ?? "draft-2020-12";
    return e === "draft-4" && (e = "draft-04"), e === "draft-7" && (e = "draft-07"), {
      processors: t.processors ?? {},
      metadataRegistry: (t == null ? void 0 : t.metadata) ?? ha,
      target: e,
      unrepresentable: (t == null ? void 0 : t.unrepresentable) ?? "throw",
      override: (t == null ? void 0 : t.override) ?? (() => {
      }),
      io: (t == null ? void 0 : t.io) ?? "output",
      counter: 0,
      seen: /* @__PURE__ */ new Map(),
      cycles: (t == null ? void 0 : t.cycles) ?? "ref",
      reused: (t == null ? void 0 : t.reused) ?? "inline",
      external: (t == null ? void 0 : t.external) ?? void 0
    };
  }
  function dt(t, e, r = {
    path: [],
    schemaPath: []
  }) {
    var _a3, _b3;
    var n;
    const a = t._zod.def, i = e.seen.get(t);
    if (i) return i.count++, r.schemaPath.includes(t) && (i.cycle = r.path), i.schema;
    const s = {
      schema: {},
      count: 1,
      cycle: void 0,
      path: r.path
    };
    e.seen.set(t, s);
    const o = (_b3 = (_a3 = t._zod).toJSONSchema) == null ? void 0 : _b3.call(_a3);
    if (o) s.schema = o;
    else {
      const c = {
        ...r,
        schemaPath: [
          ...r.schemaPath,
          t
        ],
        path: r.path
      };
      if (t._zod.processJSONSchema) t._zod.processJSONSchema(e, s.schema, c);
      else {
        const d = s.schema, v = e.processors[a.type];
        if (!v) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${a.type}`);
        v(t, e, d, c);
      }
      const f = t._zod.parent;
      f && (s.ref || (s.ref = f), dt(f, e, c), e.seen.get(f).isParent = true);
    }
    const u = e.metadataRegistry.get(t);
    return u && Object.assign(s.schema, u), e.io === "input" && Dt(t) && (delete s.schema.examples, delete s.schema.default), e.io === "input" && s.schema._prefault && ((n = s.schema).default ?? (n.default = s.schema._prefault)), delete s.schema._prefault, e.seen.get(t).schema;
  }
  function qh(t, e) {
    var _a3, _b3, _c3, _d2;
    const r = t.seen.get(e);
    if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const n = /* @__PURE__ */ new Map();
    for (const s of t.seen.entries()) {
      const o = (_a3 = t.metadataRegistry.get(s[0])) == null ? void 0 : _a3.id;
      if (o) {
        const u = n.get(o);
        if (u && u !== s[0]) throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
        n.set(o, s[0]);
      }
    }
    const a = (s) => {
      var _a4;
      const o = t.target === "draft-2020-12" ? "$defs" : "definitions";
      if (t.external) {
        const f = (_a4 = t.external.registry.get(s[0])) == null ? void 0 : _a4.id, d = t.external.uri ?? ((h) => h);
        if (f) return {
          ref: d(f)
        };
        const v = s[1].defId ?? s[1].schema.id ?? `schema${t.counter++}`;
        return s[1].defId = v, {
          defId: v,
          ref: `${d("__shared")}#/${o}/${v}`
        };
      }
      if (s[1] === r) return {
        ref: "#"
      };
      const l = `#/${o}/`, c = s[1].schema.id ?? `__schema${t.counter++}`;
      return {
        defId: c,
        ref: l + c
      };
    }, i = (s) => {
      if (s[1].schema.$ref) return;
      const o = s[1], { ref: u, defId: l } = a(s);
      o.def = {
        ...o.schema
      }, l && (o.defId = l);
      const c = o.schema;
      for (const f in c) delete c[f];
      c.$ref = u;
    };
    if (t.cycles === "throw") for (const s of t.seen.entries()) {
      const o = s[1];
      if (o.cycle) throw new Error(`Cycle detected: #/${(_b3 = o.cycle) == null ? void 0 : _b3.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
    for (const s of t.seen.entries()) {
      const o = s[1];
      if (e === s[0]) {
        i(s);
        continue;
      }
      if (t.external) {
        const l = (_c3 = t.external.registry.get(s[0])) == null ? void 0 : _c3.id;
        if (e !== s[0] && l) {
          i(s);
          continue;
        }
      }
      if ((_d2 = t.metadataRegistry.get(s[0])) == null ? void 0 : _d2.id) {
        i(s);
        continue;
      }
      if (o.cycle) {
        i(s);
        continue;
      }
      if (o.count > 1 && t.reused === "ref") {
        i(s);
        continue;
      }
    }
  }
  function Zh(t, e) {
    var _a3, _b3, _c3;
    const r = t.seen.get(e);
    if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const n = (s) => {
      const o = t.seen.get(s);
      if (o.ref === null) return;
      const u = o.def ?? o.schema, l = {
        ...u
      }, c = o.ref;
      if (o.ref = null, c) {
        n(c);
        const d = t.seen.get(c), v = d.schema;
        if (v.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (u.allOf = u.allOf ?? [], u.allOf.push(v)) : Object.assign(u, v), Object.assign(u, l), s._zod.parent === c) for (const y in u) y === "$ref" || y === "allOf" || y in l || delete u[y];
        if (v.$ref) for (const y in u) y === "$ref" || y === "allOf" || y in d.def && JSON.stringify(u[y]) === JSON.stringify(d.def[y]) && delete u[y];
      }
      const f = s._zod.parent;
      if (f && f !== c) {
        n(f);
        const d = t.seen.get(f);
        if ((d == null ? void 0 : d.schema.$ref) && (u.$ref = d.schema.$ref, d.def)) for (const v in u) v === "$ref" || v === "allOf" || v in d.def && JSON.stringify(u[v]) === JSON.stringify(d.def[v]) && delete u[v];
      }
      t.override({
        zodSchema: s,
        jsonSchema: u,
        path: o.path ?? []
      });
    };
    for (const s of [
      ...t.seen.entries()
    ].reverse()) n(s[0]);
    const a = {};
    if (t.target === "draft-2020-12" ? a.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? a.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? a.$schema = "http://json-schema.org/draft-04/schema#" : t.target, (_a3 = t.external) == null ? void 0 : _a3.uri) {
      const s = (_b3 = t.external.registry.get(e)) == null ? void 0 : _b3.id;
      if (!s) throw new Error("Schema is missing an `id` property");
      a.$id = t.external.uri(s);
    }
    Object.assign(a, r.def ?? r.schema);
    const i = ((_c3 = t.external) == null ? void 0 : _c3.defs) ?? {};
    for (const s of t.seen.entries()) {
      const o = s[1];
      o.def && o.defId && (i[o.defId] = o.def);
    }
    t.external || Object.keys(i).length > 0 && (t.target === "draft-2020-12" ? a.$defs = i : a.definitions = i);
    try {
      const s = JSON.parse(JSON.stringify(a));
      return Object.defineProperty(s, "~standard", {
        value: {
          ...e["~standard"],
          jsonSchema: {
            input: Gi(e, "input", t.processors),
            output: Gi(e, "output", t.processors)
          }
        },
        enumerable: false,
        writable: false
      }), s;
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
  function Dt(t, e) {
    const r = e ?? {
      seen: /* @__PURE__ */ new Set()
    };
    if (r.seen.has(t)) return false;
    r.seen.add(t);
    const n = t._zod.def;
    if (n.type === "transform") return true;
    if (n.type === "array") return Dt(n.element, r);
    if (n.type === "set") return Dt(n.valueType, r);
    if (n.type === "lazy") return Dt(n.getter(), r);
    if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault") return Dt(n.innerType, r);
    if (n.type === "intersection") return Dt(n.left, r) || Dt(n.right, r);
    if (n.type === "record" || n.type === "map") return Dt(n.keyType, r) || Dt(n.valueType, r);
    if (n.type === "pipe") return Dt(n.in, r) || Dt(n.out, r);
    if (n.type === "object") {
      for (const a in n.shape) if (Dt(n.shape[a], r)) return true;
      return false;
    }
    if (n.type === "union") {
      for (const a of n.options) if (Dt(a, r)) return true;
      return false;
    }
    if (n.type === "tuple") {
      for (const a of n.items) if (Dt(a, r)) return true;
      return !!(n.rest && Dt(n.rest, r));
    }
    return false;
  }
  const MT = (t, e = {}) => (r) => {
    const n = Uh({
      ...r,
      processors: e
    });
    return dt(t, n), qh(n, t), Zh(n, t);
  }, Gi = (t, e, r = {}) => (n) => {
    const { libraryOptions: a, target: i } = n ?? {}, s = Uh({
      ...a ?? {},
      target: i,
      io: e,
      processors: r
    });
    return dt(t, s), qh(s, t), Zh(s, t);
  }, DT = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
  }, OT = (t, e, r, n) => {
    const a = r;
    a.type = "string";
    const { minimum: i, maximum: s, format: o, patterns: u, contentEncoding: l } = t._zod.bag;
    if (typeof i == "number" && (a.minLength = i), typeof s == "number" && (a.maxLength = s), o && (a.format = DT[o] ?? o, a.format === "" && delete a.format, o === "time" && delete a.format), l && (a.contentEncoding = l), u && u.size > 0) {
      const c = [
        ...u
      ];
      c.length === 1 ? a.pattern = c[0].source : c.length > 1 && (a.allOf = [
        ...c.map((f) => ({
          ...e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0" ? {
            type: "string"
          } : {},
          pattern: f.source
        }))
      ]);
    }
  }, NT = (t, e, r, n) => {
    const a = r, { minimum: i, maximum: s, format: o, multipleOf: u, exclusiveMaximum: l, exclusiveMinimum: c } = t._zod.bag;
    typeof o == "string" && o.includes("int") ? a.type = "integer" : a.type = "number", typeof c == "number" && (e.target === "draft-04" || e.target === "openapi-3.0" ? (a.minimum = c, a.exclusiveMinimum = true) : a.exclusiveMinimum = c), typeof i == "number" && (a.minimum = i, typeof c == "number" && e.target !== "draft-04" && (c >= i ? delete a.minimum : delete a.exclusiveMinimum)), typeof l == "number" && (e.target === "draft-04" || e.target === "openapi-3.0" ? (a.maximum = l, a.exclusiveMaximum = true) : a.exclusiveMaximum = l), typeof s == "number" && (a.maximum = s, typeof l == "number" && e.target !== "draft-04" && (l <= s ? delete a.maximum : delete a.exclusiveMaximum)), typeof u == "number" && (a.multipleOf = u);
  }, zT = (t, e, r, n) => {
    r.type = "boolean";
  }, LT = (t, e, r, n) => {
    e.target === "openapi-3.0" ? (r.type = "string", r.nullable = true, r.enum = [
      null
    ]) : r.type = "null";
  }, FT = (t, e, r, n) => {
    if (e.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
  }, VT = (t, e, r, n) => {
    r.not = {};
  }, $T = (t, e, r, n) => {
  }, UT = (t, e, r, n) => {
    const a = t._zod.def, i = xh(a.entries);
    i.every((s) => typeof s == "number") && (r.type = "number"), i.every((s) => typeof s == "string") && (r.type = "string"), r.enum = i;
  }, qT = (t, e, r, n) => {
    const a = t._zod.def, i = [];
    for (const s of a.values) if (s === void 0) {
      if (e.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof s == "bigint") {
      if (e.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
      i.push(Number(s));
    } else i.push(s);
    if (i.length !== 0) if (i.length === 1) {
      const s = i[0];
      r.type = s === null ? "null" : typeof s, e.target === "draft-04" || e.target === "openapi-3.0" ? r.enum = [
        s
      ] : r.const = s;
    } else i.every((s) => typeof s == "number") && (r.type = "number"), i.every((s) => typeof s == "string") && (r.type = "string"), i.every((s) => typeof s == "boolean") && (r.type = "boolean"), i.every((s) => s === null) && (r.type = "null"), r.enum = i;
  }, ZT = (t, e, r, n) => {
    if (e.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
  }, GT = (t, e, r, n) => {
    if (e.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
  }, WT = (t, e, r, n) => {
    const a = r, i = t._zod.def, { minimum: s, maximum: o } = t._zod.bag;
    typeof s == "number" && (a.minItems = s), typeof o == "number" && (a.maxItems = o), a.type = "array", a.items = dt(i.element, e, {
      ...n,
      path: [
        ...n.path,
        "items"
      ]
    });
  }, HT = (t, e, r, n) => {
    var _a3;
    const a = r, i = t._zod.def;
    a.type = "object", a.properties = {};
    const s = i.shape;
    for (const l in s) a.properties[l] = dt(s[l], e, {
      ...n,
      path: [
        ...n.path,
        "properties",
        l
      ]
    });
    const o = new Set(Object.keys(s)), u = new Set([
      ...o
    ].filter((l) => {
      const c = i.shape[l]._zod;
      return e.io === "input" ? c.optin === void 0 : c.optout === void 0;
    }));
    u.size > 0 && (a.required = Array.from(u)), ((_a3 = i.catchall) == null ? void 0 : _a3._zod.def.type) === "never" ? a.additionalProperties = false : i.catchall ? i.catchall && (a.additionalProperties = dt(i.catchall, e, {
      ...n,
      path: [
        ...n.path,
        "additionalProperties"
      ]
    })) : e.io === "output" && (a.additionalProperties = false);
  }, KT = (t, e, r, n) => {
    const a = t._zod.def, i = a.inclusive === false, s = a.options.map((o, u) => dt(o, e, {
      ...n,
      path: [
        ...n.path,
        i ? "oneOf" : "anyOf",
        u
      ]
    }));
    i ? r.oneOf = s : r.anyOf = s;
  }, YT = (t, e, r, n) => {
    const a = t._zod.def, i = dt(a.left, e, {
      ...n,
      path: [
        ...n.path,
        "allOf",
        0
      ]
    }), s = dt(a.right, e, {
      ...n,
      path: [
        ...n.path,
        "allOf",
        1
      ]
    }), o = (l) => "allOf" in l && Object.keys(l).length === 1, u = [
      ...o(i) ? i.allOf : [
        i
      ],
      ...o(s) ? s.allOf : [
        s
      ]
    ];
    r.allOf = u;
  }, jT = (t, e, r, n) => {
    var _a3;
    const a = r, i = t._zod.def;
    a.type = "object";
    const s = i.keyType, u = (_a3 = s._zod.bag) == null ? void 0 : _a3.patterns;
    if (i.mode === "loose" && u && u.size > 0) {
      const c = dt(i.valueType, e, {
        ...n,
        path: [
          ...n.path,
          "patternProperties",
          "*"
        ]
      });
      a.patternProperties = {};
      for (const f of u) a.patternProperties[f.source] = c;
    } else (e.target === "draft-07" || e.target === "draft-2020-12") && (a.propertyNames = dt(i.keyType, e, {
      ...n,
      path: [
        ...n.path,
        "propertyNames"
      ]
    })), a.additionalProperties = dt(i.valueType, e, {
      ...n,
      path: [
        ...n.path,
        "additionalProperties"
      ]
    });
    const l = s._zod.values;
    if (l) {
      const c = [
        ...l
      ].filter((f) => typeof f == "string" || typeof f == "number");
      c.length > 0 && (a.required = c);
    }
  }, XT = (t, e, r, n) => {
    const a = t._zod.def, i = dt(a.innerType, e, n), s = e.seen.get(t);
    e.target === "openapi-3.0" ? (s.ref = a.innerType, r.nullable = true) : r.anyOf = [
      i,
      {
        type: "null"
      }
    ];
  }, JT = (t, e, r, n) => {
    const a = t._zod.def;
    dt(a.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = a.innerType;
  }, QT = (t, e, r, n) => {
    const a = t._zod.def;
    dt(a.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = a.innerType, r.default = JSON.parse(JSON.stringify(a.defaultValue));
  }, eS = (t, e, r, n) => {
    const a = t._zod.def;
    dt(a.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = a.innerType, e.io === "input" && (r._prefault = JSON.parse(JSON.stringify(a.defaultValue)));
  }, tS = (t, e, r, n) => {
    const a = t._zod.def;
    dt(a.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = a.innerType;
    let s;
    try {
      s = a.catchValue(void 0);
    } catch {
      throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    r.default = s;
  }, rS = (t, e, r, n) => {
    const a = t._zod.def, i = e.io === "input" ? a.in._zod.def.type === "transform" ? a.out : a.in : a.out;
    dt(i, e, n);
    const s = e.seen.get(t);
    s.ref = i;
  }, nS = (t, e, r, n) => {
    const a = t._zod.def;
    dt(a.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = a.innerType, r.readOnly = true;
  }, Gh = (t, e, r, n) => {
    const a = t._zod.def;
    dt(a.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = a.innerType;
  }, aS = W("ZodISODateTime", (t, e) => {
    Jx.init(t, e), it.init(t, e);
  });
  iS = function(t) {
    return sT(aS, t);
  };
  const sS = W("ZodISODate", (t, e) => {
    Qx.init(t, e), it.init(t, e);
  });
  function oS(t) {
    return oT(sS, t);
  }
  const uS = W("ZodISOTime", (t, e) => {
    eE.init(t, e), it.init(t, e);
  });
  function lS(t) {
    return uT(uS, t);
  }
  const cS = W("ZodISODuration", (t, e) => {
    tE.init(t, e), it.init(t, e);
  });
  function fS(t) {
    return lT(cS, t);
  }
  const dS = (t, e) => {
    Ch.init(t, e), t.name = "ZodError", Object.defineProperties(t, {
      format: {
        value: (r) => q1(t, r)
      },
      flatten: {
        value: (r) => U1(t, r)
      },
      addIssue: {
        value: (r) => {
          t.issues.push(r), t.message = JSON.stringify(t.issues, Cu, 2);
        }
      },
      addIssues: {
        value: (r) => {
          t.issues.push(...r), t.message = JSON.stringify(t.issues, Cu, 2);
        }
      },
      isEmpty: {
        get() {
          return t.issues.length === 0;
        }
      }
    });
  }, Qt = W("ZodError", dS, {
    Parent: Error
  }), vS = il(Qt), hS = sl(Qt), gS = hs(Qt), pS = gs(Qt), mS = W1(Qt), yS = H1(Qt), bS = K1(Qt), wS = Y1(Qt), xS = j1(Qt), ES = X1(Qt), TS = J1(Qt), SS = Q1(Qt), Qe = W("ZodType", (t, e) => (Je.init(t, e), Object.assign(t["~standard"], {
    jsonSchema: {
      input: Gi(t, "input"),
      output: Gi(t, "output")
    }
  }), t.toJSONSchema = MT(t, {}), t.def = e, t.type = e.type, Object.defineProperty(t, "_def", {
    value: e
  }), t.check = (...r) => t.clone(Yr(e, {
    checks: [
      ...e.checks ?? [],
      ...r.map((n) => typeof n == "function" ? {
        _zod: {
          check: n,
          def: {
            check: "custom"
          },
          onattach: []
        }
      } : n)
    ]
  }), {
    parent: true
  }), t.with = t.check, t.clone = (r, n) => jr(t, r, n), t.brand = () => t, t.register = ((r, n) => (r.add(t, n), t)), t.parse = (r, n) => vS(t, r, n, {
    callee: t.parse
  }), t.safeParse = (r, n) => gS(t, r, n), t.parseAsync = async (r, n) => hS(t, r, n, {
    callee: t.parseAsync
  }), t.safeParseAsync = async (r, n) => pS(t, r, n), t.spa = t.safeParseAsync, t.encode = (r, n) => mS(t, r, n), t.decode = (r, n) => yS(t, r, n), t.encodeAsync = async (r, n) => bS(t, r, n), t.decodeAsync = async (r, n) => wS(t, r, n), t.safeEncode = (r, n) => xS(t, r, n), t.safeDecode = (r, n) => ES(t, r, n), t.safeEncodeAsync = async (r, n) => TS(t, r, n), t.safeDecodeAsync = async (r, n) => SS(t, r, n), t.refine = (r, n) => t.check(bC(r, n)), t.superRefine = (r) => t.check(wC(r)), t.overwrite = (r) => t.check(ea(r)), t.optional = () => vd(t), t.exactOptional = () => oC(t), t.nullable = () => hd(t), t.nullish = () => vd(hd(t)), t.nonoptional = (r) => vC(t, r), t.array = () => XS(t), t.or = (r) => JS([
    t,
    r
  ]), t.and = (r) => tC(t, r), t.transform = (r) => Pu(t, jh(r)), t.default = (r) => cC(t, r), t.prefault = (r) => dC(t, r), t.catch = (r) => gC(t, r), t.pipe = (r) => Pu(t, r), t.readonly = () => yC(t), t.describe = (r) => {
    const n = t.clone();
    return ha.add(n, {
      description: r
    }), n;
  }, Object.defineProperty(t, "description", {
    get() {
      var _a3;
      return (_a3 = ha.get(t)) == null ? void 0 : _a3.description;
    },
    configurable: true
  }), t.meta = (...r) => {
    if (r.length === 0) return ha.get(t);
    const n = t.clone();
    return ha.add(n, r[0]), n;
  }, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t.apply = (r) => r(t), t)), Wh = W("_ZodString", (t, e) => {
    ol.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (n, a, i) => OT(t, n, a);
    const r = t._zod.bag;
    t.format = r.format ?? null, t.minLength = r.minimum ?? null, t.maxLength = r.maximum ?? null, t.regex = (...n) => t.check(mT(...n)), t.includes = (...n) => t.check(wT(...n)), t.startsWith = (...n) => t.check(xT(...n)), t.endsWith = (...n) => t.check(ET(...n)), t.min = (...n) => t.check(Zi(...n)), t.max = (...n) => t.check(Vh(...n)), t.length = (...n) => t.check($h(...n)), t.nonempty = (...n) => t.check(Zi(1, ...n)), t.lowercase = (n) => t.check(yT(n)), t.uppercase = (n) => t.check(bT(n)), t.trim = () => t.check(ST()), t.normalize = (...n) => t.check(TT(...n)), t.toLowerCase = () => t.check(CT()), t.toUpperCase = () => t.check(RT()), t.slugify = () => t.check(AT());
  }), CS = W("ZodString", (t, e) => {
    ol.init(t, e), Wh.init(t, e), t.email = (r) => t.check(FE(RS, r)), t.url = (r) => t.check(ZE(AS, r)), t.jwt = (r) => t.check(iT(US, r)), t.emoji = (r) => t.check(GE(kS, r)), t.guid = (r) => t.check(od(fd, r)), t.uuid = (r) => t.check(VE(di, r)), t.uuidv4 = (r) => t.check($E(di, r)), t.uuidv6 = (r) => t.check(UE(di, r)), t.uuidv7 = (r) => t.check(qE(di, r)), t.nanoid = (r) => t.check(WE(PS, r)), t.guid = (r) => t.check(od(fd, r)), t.cuid = (r) => t.check(HE(_S, r)), t.cuid2 = (r) => t.check(KE(IS, r)), t.ulid = (r) => t.check(YE(BS, r)), t.base64 = (r) => t.check(rT(FS, r)), t.base64url = (r) => t.check(nT(VS, r)), t.xid = (r) => t.check(jE(MS, r)), t.ksuid = (r) => t.check(XE(DS, r)), t.ipv4 = (r) => t.check(JE(OS, r)), t.ipv6 = (r) => t.check(QE(NS, r)), t.cidrv4 = (r) => t.check(eT(zS, r)), t.cidrv6 = (r) => t.check(tT(LS, r)), t.e164 = (r) => t.check(aT($S, r)), t.datetime = (r) => t.check(iS(r)), t.date = (r) => t.check(oS(r)), t.time = (r) => t.check(lS(r)), t.duration = (r) => t.check(fS(r));
  });
  VC = function(t) {
    return LE(CS, t);
  };
  const it = W("ZodStringFormat", (t, e) => {
    rt.init(t, e), Wh.init(t, e);
  }), RS = W("ZodEmail", (t, e) => {
    qx.init(t, e), it.init(t, e);
  }), fd = W("ZodGUID", (t, e) => {
    $x.init(t, e), it.init(t, e);
  }), di = W("ZodUUID", (t, e) => {
    Ux.init(t, e), it.init(t, e);
  }), AS = W("ZodURL", (t, e) => {
    Zx.init(t, e), it.init(t, e);
  }), kS = W("ZodEmoji", (t, e) => {
    Gx.init(t, e), it.init(t, e);
  }), PS = W("ZodNanoID", (t, e) => {
    Wx.init(t, e), it.init(t, e);
  }), _S = W("ZodCUID", (t, e) => {
    Hx.init(t, e), it.init(t, e);
  }), IS = W("ZodCUID2", (t, e) => {
    Kx.init(t, e), it.init(t, e);
  }), BS = W("ZodULID", (t, e) => {
    Yx.init(t, e), it.init(t, e);
  }), MS = W("ZodXID", (t, e) => {
    jx.init(t, e), it.init(t, e);
  }), DS = W("ZodKSUID", (t, e) => {
    Xx.init(t, e), it.init(t, e);
  }), OS = W("ZodIPv4", (t, e) => {
    rE.init(t, e), it.init(t, e);
  }), NS = W("ZodIPv6", (t, e) => {
    nE.init(t, e), it.init(t, e);
  }), zS = W("ZodCIDRv4", (t, e) => {
    aE.init(t, e), it.init(t, e);
  }), LS = W("ZodCIDRv6", (t, e) => {
    iE.init(t, e), it.init(t, e);
  }), FS = W("ZodBase64", (t, e) => {
    sE.init(t, e), it.init(t, e);
  }), VS = W("ZodBase64URL", (t, e) => {
    uE.init(t, e), it.init(t, e);
  }), $S = W("ZodE164", (t, e) => {
    lE.init(t, e), it.init(t, e);
  }), US = W("ZodJWT", (t, e) => {
    fE.init(t, e), it.init(t, e);
  }), Hh = W("ZodNumber", (t, e) => {
    Oh.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (n, a, i) => NT(t, n, a), t.gt = (n, a) => t.check(ld(n, a)), t.gte = (n, a) => t.check(eu(n, a)), t.min = (n, a) => t.check(eu(n, a)), t.lt = (n, a) => t.check(ud(n, a)), t.lte = (n, a) => t.check(Qo(n, a)), t.max = (n, a) => t.check(Qo(n, a)), t.int = (n) => t.check(dd(n)), t.safe = (n) => t.check(dd(n)), t.positive = (n) => t.check(ld(0, n)), t.nonnegative = (n) => t.check(eu(0, n)), t.negative = (n) => t.check(ud(0, n)), t.nonpositive = (n) => t.check(Qo(0, n)), t.multipleOf = (n, a) => t.check(cd(n, a)), t.step = (n, a) => t.check(cd(n, a)), t.finite = () => t;
    const r = t._zod.bag;
    t.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), t.isFinite = true, t.format = r.format ?? null;
  });
  $C = function(t) {
    return cT(Hh, t);
  };
  const qS = W("ZodNumberFormat", (t, e) => {
    dE.init(t, e), Hh.init(t, e);
  });
  function dd(t) {
    return fT(qS, t);
  }
  const ZS = W("ZodBoolean", (t, e) => {
    vE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => zT(t, r, n);
  });
  UC = function(t) {
    return dT(ZS, t);
  };
  const GS = W("ZodUndefined", (t, e) => {
    hE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => FT(t, r);
  });
  qC = function(t) {
    return vT(GS, t);
  };
  const WS = W("ZodNull", (t, e) => {
    gE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => LT(t, r, n);
  });
  ZC = function(t) {
    return hT(WS, t);
  };
  const HS = W("ZodUnknown", (t, e) => {
    pE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => $T();
  });
  Au = function() {
    return gT(HS);
  };
  const KS = W("ZodNever", (t, e) => {
    mE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => VT(t, r, n);
  });
  function YS(t) {
    return pT(KS, t);
  }
  const jS = W("ZodArray", (t, e) => {
    yE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => WT(t, r, n, a), t.element = e.element, t.min = (r, n) => t.check(Zi(r, n)), t.nonempty = (r) => t.check(Zi(1, r)), t.max = (r, n) => t.check(Vh(r, n)), t.length = (r, n) => t.check($h(r, n)), t.unwrap = () => t.element;
  });
  XS = function(t, e) {
    return kT(jS, t, e);
  };
  const Kh = W("ZodObject", (t, e) => {
    wE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => HT(t, r, n, a), We(t, "shape", () => e.shape), t.keyof = () => nC(Object.keys(t._zod.def.shape)), t.catchall = (r) => t.clone({
      ...t._zod.def,
      catchall: r
    }), t.passthrough = () => t.clone({
      ...t._zod.def,
      catchall: Au()
    }), t.loose = () => t.clone({
      ...t._zod.def,
      catchall: Au()
    }), t.strict = () => t.clone({
      ...t._zod.def,
      catchall: YS()
    }), t.strip = () => t.clone({
      ...t._zod.def,
      catchall: void 0
    }), t.extend = (r) => z1(t, r), t.safeExtend = (r) => L1(t, r), t.merge = (r) => F1(t, r), t.pick = (r) => O1(t, r), t.omit = (r) => N1(t, r), t.partial = (...r) => V1(Xh, t, r[0]), t.required = (...r) => $1(Jh, t, r[0]);
  });
  GC = function(t, e) {
    const r = {
      type: "object",
      shape: t ?? {},
      ...fe(e)
    };
    return new Kh(r);
  };
  WC = function(t, e) {
    return new Kh({
      type: "object",
      shape: t,
      catchall: Au(),
      ...fe(e)
    });
  };
  const Yh = W("ZodUnion", (t, e) => {
    Lh.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => KT(t, r, n, a), t.options = e.options;
  });
  JS = function(t, e) {
    return new Yh({
      type: "union",
      options: t,
      ...fe(e)
    });
  };
  const QS = W("ZodDiscriminatedUnion", (t, e) => {
    Yh.init(t, e), xE.init(t, e);
  });
  HC = function(t, e, r) {
    return new QS({
      type: "union",
      options: e,
      discriminator: t,
      ...fe(r)
    });
  };
  const eC = W("ZodIntersection", (t, e) => {
    EE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => YT(t, r, n, a);
  });
  tC = function(t, e) {
    return new eC({
      type: "intersection",
      left: t,
      right: e
    });
  };
  const rC = W("ZodRecord", (t, e) => {
    TE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => jT(t, r, n, a), t.keyType = e.keyType, t.valueType = e.valueType;
  });
  KC = function(t, e, r) {
    return new rC({
      type: "record",
      keyType: t,
      valueType: e,
      ...fe(r)
    });
  };
  const ku = W("ZodEnum", (t, e) => {
    SE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (n, a, i) => UT(t, n, a), t.enum = e.entries, t.options = Object.values(e.entries);
    const r = new Set(Object.keys(e.entries));
    t.extract = (n, a) => {
      const i = {};
      for (const s of n) if (r.has(s)) i[s] = e.entries[s];
      else throw new Error(`Key ${s} not found in enum`);
      return new ku({
        ...e,
        checks: [],
        ...fe(a),
        entries: i
      });
    }, t.exclude = (n, a) => {
      const i = {
        ...e.entries
      };
      for (const s of n) if (r.has(s)) delete i[s];
      else throw new Error(`Key ${s} not found in enum`);
      return new ku({
        ...e,
        checks: [],
        ...fe(a),
        entries: i
      });
    };
  });
  nC = function(t, e) {
    const r = Array.isArray(t) ? Object.fromEntries(t.map((n) => [
      n,
      n
    ])) : t;
    return new ku({
      type: "enum",
      entries: r,
      ...fe(e)
    });
  };
  const aC = W("ZodLiteral", (t, e) => {
    CE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => qT(t, r, n), t.values = new Set(e.values), Object.defineProperty(t, "value", {
      get() {
        if (e.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return e.values[0];
      }
    });
  });
  YC = function(t, e) {
    return new aC({
      type: "literal",
      values: Array.isArray(t) ? t : [
        t
      ],
      ...fe(e)
    });
  };
  const iC = W("ZodTransform", (t, e) => {
    RE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => GT(t, r), t._zod.parse = (r, n) => {
      if (n.direction === "backward") throw new bh(t.constructor.name);
      r.addIssue = (i) => {
        if (typeof i == "string") r.issues.push(Ia(i, r.value, e));
        else {
          const s = i;
          s.fatal && (s.continue = false), s.code ?? (s.code = "custom"), s.input ?? (s.input = r.value), s.inst ?? (s.inst = t), r.issues.push(Ia(s));
        }
      };
      const a = e.transform(r.value, r);
      return a instanceof Promise ? a.then((i) => (r.value = i, r)) : (r.value = a, r);
    };
  });
  function jh(t) {
    return new iC({
      type: "transform",
      transform: t
    });
  }
  const Xh = W("ZodOptional", (t, e) => {
    Fh.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => Gh(t, r, n, a), t.unwrap = () => t._zod.def.innerType;
  });
  vd = function(t) {
    return new Xh({
      type: "optional",
      innerType: t
    });
  };
  const sC = W("ZodExactOptional", (t, e) => {
    AE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => Gh(t, r, n, a), t.unwrap = () => t._zod.def.innerType;
  });
  function oC(t) {
    return new sC({
      type: "optional",
      innerType: t
    });
  }
  const uC = W("ZodNullable", (t, e) => {
    kE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => XT(t, r, n, a), t.unwrap = () => t._zod.def.innerType;
  });
  function hd(t) {
    return new uC({
      type: "nullable",
      innerType: t
    });
  }
  const lC = W("ZodDefault", (t, e) => {
    PE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => QT(t, r, n, a), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
  });
  function cC(t, e) {
    return new lC({
      type: "default",
      innerType: t,
      get defaultValue() {
        return typeof e == "function" ? e() : Th(e);
      }
    });
  }
  const fC = W("ZodPrefault", (t, e) => {
    _E.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => eS(t, r, n, a), t.unwrap = () => t._zod.def.innerType;
  });
  function dC(t, e) {
    return new fC({
      type: "prefault",
      innerType: t,
      get defaultValue() {
        return typeof e == "function" ? e() : Th(e);
      }
    });
  }
  const Jh = W("ZodNonOptional", (t, e) => {
    IE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => JT(t, r, n, a), t.unwrap = () => t._zod.def.innerType;
  });
  function vC(t, e) {
    return new Jh({
      type: "nonoptional",
      innerType: t,
      ...fe(e)
    });
  }
  const hC = W("ZodCatch", (t, e) => {
    BE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => tS(t, r, n, a), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
  });
  function gC(t, e) {
    return new hC({
      type: "catch",
      innerType: t,
      catchValue: typeof e == "function" ? e : () => e
    });
  }
  const pC = W("ZodPipe", (t, e) => {
    ME.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => rS(t, r, n, a), t.in = e.in, t.out = e.out;
  });
  function Pu(t, e) {
    return new pC({
      type: "pipe",
      in: t,
      out: e
    });
  }
  const mC = W("ZodReadonly", (t, e) => {
    DE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => nS(t, r, n, a), t.unwrap = () => t._zod.def.innerType;
  });
  function yC(t) {
    return new mC({
      type: "readonly",
      innerType: t
    });
  }
  const Qh = W("ZodCustom", (t, e) => {
    OE.init(t, e), Qe.init(t, e), t._zod.processJSONSchema = (r, n, a) => ZT(t, r);
  });
  jC = function(t, e) {
    return PT(Qh, t ?? (() => true), e);
  };
  function bC(t, e = {}) {
    return _T(Qh, t, e);
  }
  function wC(t) {
    return IT(t);
  }
  XC = function(t, e) {
    return Pu(jh(t), e);
  };
})();
export {
  Ae as A,
  KC as B,
  XC as C,
  ya as D,
  vd as E,
  iS as F,
  HC as G,
  jC as H,
  ZC as I,
  qC as J,
  LC as N,
  nC as _,
  __tla,
  XS as a,
  UC as b,
  NC as c,
  OC as d,
  DC as e,
  MC as f,
  BC as g,
  IC as h,
  _C as i,
  PC as j,
  kC as k,
  AC as l,
  RC as m,
  $C as n,
  GC as o,
  CC as p,
  SC as q,
  TC as r,
  VC as s,
  Gn as t,
  JS as u,
  FC as v,
  WC as w,
  YC as x,
  Au as y,
  tC as z
};
