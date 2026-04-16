import { j as S } from "./index-CPYBuwmV.js";
import { bz as Pt, be as mt, bA as No, bt as E, bB as Oo, bC as kt, bu as ls, bD as us, bE as Uo, bl as _o, bF as ps, bG as ms, bH as fs, bm as gs, f as jo, __tla as __tla_0 } from "./index-BOTK57Qr.js";
import { r as h } from "./index-gBZ811w6.js";
import { A as hs, j as ys, k as bs, l as xs, a as D, b as We, Q as dt, S as vs, e as lt, B as Dt, m as vn, n as fo, g as ut, o as Sn, L as Ct, h as Fn, p as Rn, G as wn, d as zo, f as qo, E as Ss, O as ws } from "./three.core-CmKuqlS6.js";
import { toThreeRotation as Ps, applyDesignDiff as At, flattenDesign as ks, selectBestModel as Ko, planeToMatrix as Es, designWithDiff as Fo, DiffStatus as Pn, __tla as __tla_1 } from "./index-B1_si-pl.js";
import { u as O, s as m, n as I, w as ge, o as f, x as p, y as H, _ as Ce, a as T, z as Lo, B as F, b as V, C as Vo, E as Q, F as Cs, G as Ho, H as Ms, I as Wo, J as In, __tla as __tla_2 } from "./schemas-BHthlJat.js";
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  function $o(e, t, n = {}) {
    const i = new D(), r = new dt(), o = new D(), s = new We(), a = new We(), c = new We();
    n.preserveMatrix = n.preserveMatrix !== void 0 ? n.preserveMatrix : true, n.preservePosition = n.preservePosition !== void 0 ? n.preservePosition : true, n.preserveHipPosition = n.preserveHipPosition !== void 0 ? n.preserveHipPosition : false, n.useTargetMatrix = n.useTargetMatrix !== void 0 ? n.useTargetMatrix : false, n.hip = n.hip !== void 0 ? n.hip : "hip", n.names = n.names || {};
    const d = t.isObject3D ? t.skeleton.bones : Qt(t), l = e.isObject3D ? e.skeleton.bones : Qt(e);
    let b, u, y, P, x;
    if (e.isObject3D ? e.skeleton.pose() : (n.useTargetMatrix = true, n.preserveMatrix = false), n.preservePosition) {
      x = [];
      for (let k = 0; k < l.length; k++) x.push(l[k].position.clone());
    }
    if (n.preserveMatrix) {
      e.updateMatrixWorld(), e.matrixWorld.identity();
      for (let k = 0; k < e.children.length; ++k) e.children[k].updateMatrixWorld(true);
    }
    if (n.offsets) {
      b = [];
      for (let k = 0; k < l.length; ++k) u = l[k], y = n.names[u.name] || u.name, n.offsets[y] && (u.matrix.multiply(n.offsets[y]), u.matrix.decompose(u.position, u.quaternion, u.scale), u.updateMatrixWorld()), b.push(u.matrixWorld.clone());
    }
    for (let k = 0; k < l.length; ++k) {
      if (u = l[k], y = n.names[u.name] || u.name, P = Yo(y, d), c.copy(u.matrixWorld), P) {
        if (P.updateMatrixWorld(), n.useTargetMatrix ? a.copy(P.matrixWorld) : (a.copy(e.matrixWorld).invert(), a.multiply(P.matrixWorld)), o.setFromMatrixScale(a), a.scale(o.set(1 / o.x, 1 / o.y, 1 / o.z)), c.makeRotationFromQuaternion(r.setFromRotationMatrix(a)), e.isObject3D) {
          const A = l.indexOf(u), g = b ? b[A] : s.copy(e.skeleton.boneInverses[A]).invert();
          c.multiply(g);
        }
        c.copyPosition(a);
      }
      u.parent && u.parent.isBone ? (u.matrix.copy(u.parent.matrixWorld).invert(), u.matrix.multiply(c)) : u.matrix.copy(c), n.preserveHipPosition && y === n.hip && u.matrix.setPosition(i.set(0, u.position.y, 0)), u.matrix.decompose(u.position, u.quaternion, u.scale), u.updateMatrixWorld();
    }
    if (n.preservePosition) for (let k = 0; k < l.length; ++k) u = l[k], y = n.names[u.name] || u.name, y !== n.hip && u.position.copy(x[k]);
    n.preserveMatrix && e.updateMatrixWorld(true);
  }
  function As(e, t, n, i = {}) {
    i.useFirstFramePosition = i.useFirstFramePosition !== void 0 ? i.useFirstFramePosition : false, i.fps = i.fps !== void 0 ? i.fps : 30, i.names = i.names || [], t.isObject3D || (t = Bs(t));
    const r = Math.round(n.duration * (i.fps / 1e3) * 1e3), o = 1 / i.fps, s = [], a = new hs(t), c = Qt(e.skeleton), d = [];
    let l, b, u, y, P;
    a.clipAction(n).play(), a.update(0), t.updateMatrixWorld();
    for (let x = 0; x < r; ++x) {
      const k = x * o;
      $o(e, t, i);
      for (let A = 0; A < c.length; ++A) P = i.names[c[A].name] || c[A].name, u = Yo(P, t.skeleton), u && (b = c[A], y = d[A] = d[A] || {
        bone: b
      }, i.hip === P && (y.pos || (y.pos = {
        times: new Float32Array(r),
        values: new Float32Array(r * 3)
      }), i.useFirstFramePosition && (x === 0 && (l = b.position.clone()), b.position.sub(l)), y.pos.times[x] = k, b.position.toArray(y.pos.values, x * 3)), y.quat || (y.quat = {
        times: new Float32Array(r),
        values: new Float32Array(r * 4)
      }), y.quat.times[x] = k, b.quaternion.toArray(y.quat.values, x * 4));
      a.update(o), t.updateMatrixWorld();
    }
    for (let x = 0; x < d.length; ++x) y = d[x], y && (y.pos && s.push(new ys(".bones[" + y.bone.name + "].position", y.pos.times, y.pos.values)), s.push(new bs(".bones[" + y.bone.name + "].quaternion", y.quat.times, y.quat.values)));
    return a.uncacheAction(n), new xs(n.name, -1, s);
  }
  function Ts(e) {
    const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = e.clone();
    return Zo(e, i, function(r, o) {
      t.set(o, r), n.set(r, o);
    }), i.traverse(function(r) {
      if (!r.isSkinnedMesh) return;
      const o = r, s = t.get(r), a = s.skeleton.bones;
      o.skeleton = s.skeleton.clone(), o.bindMatrix.copy(s.bindMatrix), o.skeleton.bones = a.map(function(c) {
        return n.get(c);
      }), o.bind(o.skeleton, o.bindMatrix);
    }), i;
  }
  function Yo(e, t) {
    for (let n = 0, i = Qt(t); n < i.length; n++) if (e === i[n].name) return i[n];
  }
  function Qt(e) {
    return Array.isArray(e) ? e : e.bones;
  }
  function Bs(e) {
    const t = new vs(e.bones[0]);
    return t.skeleton = e, t;
  }
  function Zo(e, t, n) {
    n(e, t);
    for (let i = 0; i < e.children.length; i++) Zo(e.children[i], t.children[i], n);
  }
  const Ds = {
    retarget: $o,
    retargetClip: As,
    clone: Ts
  };
  function Rs(e, { keys: t = [
    "near",
    "far",
    "color",
    "distance",
    "decay",
    "penumbra",
    "angle",
    "intensity",
    "skeleton",
    "visible",
    "castShadow",
    "receiveShadow",
    "morphTargetDictionary",
    "morphTargetInfluences",
    "name",
    "geometry",
    "material",
    "position",
    "rotation",
    "scale",
    "up",
    "userData",
    "bindMode",
    "bindMatrix",
    "bindMatrixInverse",
    "skeleton"
  ], deep: n, inject: i, castShadow: r, receiveShadow: o }) {
    let s = {};
    for (const a of t) s[a] = e[a];
    return n && (s.geometry && n !== "materialsOnly" && (s.geometry = s.geometry.clone()), s.material && n !== "geometriesOnly" && (s.material = s.material.clone())), i && (typeof i == "function" ? s = {
      ...s,
      children: i(e)
    } : h.isValidElement(i) ? s = {
      ...s,
      children: i
    } : s = {
      ...s,
      ...i
    }), e instanceof lt && (r && (s.castShadow = true), o && (s.receiveShadow = true)), s;
  }
  const Gn = h.forwardRef(({ isChild: e = false, object: t, children: n, deep: i, castShadow: r, receiveShadow: o, inject: s, keys: a, ...c }, d) => {
    const l = {
      keys: a,
      deep: i,
      inject: s,
      castShadow: r,
      receiveShadow: o
    };
    if (t = h.useMemo(() => {
      if (e === false && !Array.isArray(t)) {
        let P = false;
        if (t.traverse((x) => {
          x.isSkinnedMesh && (P = true);
        }), P) return Ds.clone(t);
      }
      return t;
    }, [
      t,
      e
    ]), Array.isArray(t)) return h.createElement("group", Pt({}, c, {
      ref: d
    }), t.map((P) => h.createElement(Gn, Pt({
      key: P.uuid,
      object: P
    }, l))), n);
    const { children: b, ...u } = Rs(t, l), y = t.type[0].toLowerCase() + t.type.slice(1);
    return h.createElement(y, Pt({}, u, c, {
      ref: d
    }), t.children.map((P) => P.type === "Bone" ? h.createElement("primitive", Pt({
      key: P.uuid,
      object: P
    }, l)) : h.createElement(Gn, Pt({
      key: P.uuid,
      object: P
    }, l, {
      isChild: true
    }))), n, b);
  });
  var Ee = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.START = 1] = "START", e[e.ACTIVE = 2] = "ACTIVE", e;
  })(Ee || {});
  const it = (e) => e && e.isOrthographicCamera, Is = (e) => e && e.isBox3, Gs = (e) => 1 - Math.exp(-5 * e) + 7e-3 * e, Xo = h.createContext(null);
  function Ns({ children: e, maxDuration: t = 1, margin: n = 1.2, observe: i, fit: r, clip: o, interpolateFunc: s = Gs, onFit: a }) {
    const c = h.useRef(null), { camera: d, size: l, invalidate: b } = mt(), u = mt((U) => U.controls), y = h.useRef(a);
    y.current = a;
    const P = h.useRef({
      camPos: new D(),
      camRot: new dt(),
      camZoom: 1
    }), x = h.useRef({
      camPos: void 0,
      camRot: void 0,
      camZoom: void 0,
      camUp: void 0,
      target: void 0
    }), k = h.useRef(Ee.NONE), A = h.useRef(0), [g] = h.useState(() => new Dt()), v = h.useMemo(() => {
      function U() {
        const C = g.getSize(new D()), M = g.getCenter(new D()), N = Math.max(C.x, C.y, C.z), _ = it(d) ? N * 4 : N / (2 * Math.atan(Math.PI * d.fov / 360)), de = it(d) ? N * 4 : _ / d.aspect, le = n * Math.max(_, de);
        return {
          box: g,
          size: C,
          center: M,
          distance: le
        };
      }
      return {
        getSize: U,
        refresh(C) {
          if (Is(C)) g.copy(C);
          else {
            const M = C || c.current;
            if (!M) return this;
            M.updateWorldMatrix(true, true), g.setFromObject(M);
          }
          if (g.isEmpty()) {
            const M = d.position.length() || 10;
            g.setFromCenterAndSize(new D(), new D(M, M, M));
          }
          return P.current.camPos.copy(d.position), P.current.camRot.copy(d.quaternion), it(d) && (P.current.camZoom = d.zoom), x.current.camPos = void 0, x.current.camRot = void 0, x.current.camZoom = void 0, x.current.camUp = void 0, x.current.target = void 0, this;
        },
        reset() {
          const { center: C, distance: M } = U(), N = d.position.clone().sub(C).normalize();
          x.current.camPos = C.clone().addScaledVector(N, M), x.current.target = C.clone();
          const _ = new We().lookAt(x.current.camPos, x.current.target, d.up);
          return x.current.camRot = new dt().setFromRotationMatrix(_), k.current = Ee.START, A.current = 0, this;
        },
        moveTo(C) {
          return x.current.camPos = Array.isArray(C) ? new D(...C) : C.clone(), k.current = Ee.START, A.current = 0, this;
        },
        lookAt({ target: C, up: M }) {
          x.current.target = Array.isArray(C) ? new D(...C) : C.clone(), M ? x.current.camUp = Array.isArray(M) ? new D(...M) : M.clone() : x.current.camUp = d.up.clone();
          const N = new We().lookAt(x.current.camPos || d.position, x.current.target, x.current.camUp);
          return x.current.camRot = new dt().setFromRotationMatrix(N), k.current = Ee.START, A.current = 0, this;
        },
        to({ position: C, target: M }) {
          return this.moveTo(C).lookAt({
            target: M
          });
        },
        fit() {
          if (!it(d)) return this.reset();
          let C = 0, M = 0;
          const N = [
            new D(g.min.x, g.min.y, g.min.z),
            new D(g.min.x, g.max.y, g.min.z),
            new D(g.min.x, g.min.y, g.max.z),
            new D(g.min.x, g.max.y, g.max.z),
            new D(g.max.x, g.max.y, g.max.z),
            new D(g.max.x, g.max.y, g.min.z),
            new D(g.max.x, g.min.y, g.max.z),
            new D(g.max.x, g.min.y, g.min.z)
          ], _ = x.current.camPos || d.position, de = x.current.target || (u == null ? void 0 : u.target), le = x.current.camUp || d.up, ue = de ? new We().lookAt(_, de, le).setPosition(_).invert() : d.matrixWorldInverse;
          for (const Z of N) Z.applyMatrix4(ue), C = Math.max(C, Math.abs(Z.y)), M = Math.max(M, Math.abs(Z.x));
          C *= 2, M *= 2;
          const he = (d.top - d.bottom) / C, te = (d.right - d.left) / M;
          return x.current.camZoom = Math.min(he, te) / n, k.current = Ee.START, A.current = 0, y.current && y.current(this.getSize()), this;
        },
        clip() {
          const { distance: C } = U();
          return d.near = C / 100, d.far = C * 100, d.updateProjectionMatrix(), u && (u.maxDistance = C * 10, u.update()), b(), this;
        }
      };
    }, [
      g,
      d,
      u,
      n,
      b
    ]);
    h.useLayoutEffect(() => {
      if (u) {
        const U = () => {
          if (u && x.current.target && k.current !== Ee.NONE) {
            const C = new D().setFromMatrixColumn(d.matrix, 2), M = P.current.camPos.distanceTo(u.target), N = (x.current.camPos || P.current.camPos).distanceTo(x.current.target), _ = (1 - A.current) * M + A.current * N;
            u.target.copy(d.position).addScaledVector(C, -_), u.update();
          }
          k.current = Ee.NONE;
        };
        return u.addEventListener("start", U), () => u.removeEventListener("start", U);
      }
    }, [
      u
    ]);
    const G = h.useRef(0);
    return h.useLayoutEffect(() => {
      (i || G.current++ === 0) && (v.refresh(), r && v.reset().fit(), o && v.clip());
    }, [
      l,
      o,
      r,
      i,
      d,
      u
    ]), No((U, C) => {
      if (k.current === Ee.START) k.current = Ee.ACTIVE, b();
      else if (k.current === Ee.ACTIVE) {
        if (A.current += C / t, A.current >= 1) x.current.camPos && d.position.copy(x.current.camPos), x.current.camRot && d.quaternion.copy(x.current.camRot), x.current.camUp && d.up.copy(x.current.camUp), x.current.camZoom && it(d) && (d.zoom = x.current.camZoom), d.updateMatrixWorld(), d.updateProjectionMatrix(), u && x.current.target && (u.target.copy(x.current.target), u.update()), k.current = Ee.NONE;
        else {
          const M = s(A.current);
          x.current.camPos && d.position.lerpVectors(P.current.camPos, x.current.camPos, M), x.current.camRot && d.quaternion.slerpQuaternions(P.current.camRot, x.current.camRot, M), x.current.camUp && d.up.set(0, 1, 0).applyQuaternion(d.quaternion), x.current.camZoom && it(d) && (d.zoom = (1 - M) * P.current.camZoom + M * x.current.camZoom), d.updateMatrixWorld(), d.updateProjectionMatrix();
        }
        b();
      }
    }), h.createElement("group", {
      ref: c
    }, h.createElement(Xo.Provider, {
      value: v
    }, e));
  }
  function Jo() {
    return h.useContext(Xo);
  }
  function Os(e) {
    const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = e.clone();
    return Qo(e, i, function(r, o) {
      t.set(o, r), n.set(r, o);
    }), i.traverse(function(r) {
      if (!r.isSkinnedMesh) return;
      const o = r, s = t.get(r), a = s.skeleton.bones;
      o.skeleton = s.skeleton.clone(), o.bindMatrix.copy(s.bindMatrix), o.skeleton.bones = a.map(function(c) {
        return n.get(c);
      }), o.bind(o.skeleton, o.bindMatrix);
    }), i;
  }
  function Qo(e, t, n) {
    n(e, t);
    for (let i = 0; i < e.children.length; i++) Qo(e.children[i], t.children[i], n);
  }
  const Us = "io.modelcontextprotocol/related-task", cn = "2.0", re = Ms((e) => e !== null && (typeof e == "object" || typeof e == "function")), ei = O([
    m(),
    I().int()
  ]), ti = m();
  ge({
    ttl: O([
      I(),
      Wo()
    ]).optional(),
    pollInterval: I().optional()
  });
  const _s = f({
    ttl: I().optional()
  }), js = f({
    taskId: m()
  }), Ln = ge({
    progressToken: ei.optional(),
    [Us]: js.optional()
  }), ve = f({
    _meta: Ln.optional()
  }), dn = ve.extend({
    task: _s.optional()
  }), ae = f({
    method: m(),
    params: ve.loose().optional()
  }), Me = f({
    _meta: Ln.optional()
  }), Ae = f({
    method: m(),
    params: Me.loose().optional()
  }), ce = ge({
    _meta: Ln.optional()
  }), Nt = O([
    m(),
    I().int()
  ]), zs = f({
    jsonrpc: p(cn),
    id: Nt,
    ...ae.shape
  }).strict(), qs = f({
    jsonrpc: p(cn),
    ...Ae.shape
  }).strict(), ni = f({
    jsonrpc: p(cn),
    id: Nt,
    result: ce
  }).strict();
  var go;
  (function(e) {
    e[e.ConnectionClosed = -32e3] = "ConnectionClosed", e[e.RequestTimeout = -32001] = "RequestTimeout", e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
  })(go || (go = {}));
  const oi = f({
    jsonrpc: p(cn),
    id: Nt.optional(),
    error: f({
      code: I().int(),
      message: m(),
      data: H().optional()
    })
  }).strict();
  O([
    zs,
    qs,
    ni,
    oi
  ]);
  O([
    ni,
    oi
  ]);
  const ii = ce.strict(), Ks = Me.extend({
    requestId: Nt.optional(),
    reason: m().optional()
  }), si = Ae.extend({
    method: p("notifications/cancelled"),
    params: Ks
  }), Fs = f({
    src: m(),
    mimeType: m().optional(),
    sizes: T(m()).optional(),
    theme: Ce([
      "light",
      "dark"
    ]).optional()
  }), Ot = f({
    icons: T(Fs).optional()
  }), ft = f({
    name: m(),
    title: m().optional()
  }), ln = ft.extend({
    ...ft.shape,
    ...Ot.shape,
    version: m(),
    websiteUrl: m().optional(),
    description: m().optional()
  }), Ls = Lo(f({
    applyDefaults: V().optional()
  }), F(m(), H())), Vs = Vo((e) => e && typeof e == "object" && !Array.isArray(e) && Object.keys(e).length === 0 ? {
    form: {}
  } : e, Lo(f({
    form: Ls.optional(),
    url: re.optional()
  }), F(m(), H()).optional())), Hs = ge({
    list: re.optional(),
    cancel: re.optional(),
    requests: ge({
      sampling: ge({
        createMessage: re.optional()
      }).optional(),
      elicitation: ge({
        create: re.optional()
      }).optional()
    }).optional()
  }), Ws = ge({
    list: re.optional(),
    cancel: re.optional(),
    requests: ge({
      tools: ge({
        call: re.optional()
      }).optional()
    }).optional()
  }), $s = f({
    experimental: F(m(), re).optional(),
    sampling: f({
      context: re.optional(),
      tools: re.optional()
    }).optional(),
    elicitation: Vs.optional(),
    roots: f({
      listChanged: V().optional()
    }).optional(),
    tasks: Hs.optional()
  }), Ys = ve.extend({
    protocolVersion: m(),
    capabilities: $s,
    clientInfo: ln
  }), Zs = ae.extend({
    method: p("initialize"),
    params: Ys
  }), Xs = f({
    experimental: F(m(), re).optional(),
    logging: re.optional(),
    completions: re.optional(),
    prompts: f({
      listChanged: V().optional()
    }).optional(),
    resources: f({
      subscribe: V().optional(),
      listChanged: V().optional()
    }).optional(),
    tools: f({
      listChanged: V().optional()
    }).optional(),
    tasks: Ws.optional()
  }), Js = ce.extend({
    protocolVersion: m(),
    capabilities: Xs,
    serverInfo: ln,
    instructions: m().optional()
  }), Qs = Ae.extend({
    method: p("notifications/initialized"),
    params: Me.optional()
  }), ri = ae.extend({
    method: p("ping"),
    params: ve.optional()
  }), er = f({
    progress: I(),
    total: Q(I()),
    message: Q(m())
  }), tr = f({
    ...Me.shape,
    ...er.shape,
    progressToken: ei
  }), ai = Ae.extend({
    method: p("notifications/progress"),
    params: tr
  }), nr = ve.extend({
    cursor: ti.optional()
  }), Ut = ae.extend({
    params: nr.optional()
  }), _t = ce.extend({
    nextCursor: ti.optional()
  }), or = Ce([
    "working",
    "input_required",
    "completed",
    "failed",
    "cancelled"
  ]), jt = f({
    taskId: m(),
    status: or,
    ttl: O([
      I(),
      Wo()
    ]),
    createdAt: m(),
    lastUpdatedAt: m(),
    pollInterval: Q(I()),
    statusMessage: Q(m())
  }), ci = ce.extend({
    task: jt
  }), ir = Me.merge(jt), di = Ae.extend({
    method: p("notifications/tasks/status"),
    params: ir
  }), li = ae.extend({
    method: p("tasks/get"),
    params: ve.extend({
      taskId: m()
    })
  }), ui = ce.merge(jt), pi = ae.extend({
    method: p("tasks/result"),
    params: ve.extend({
      taskId: m()
    })
  });
  ce.loose();
  const mi = Ut.extend({
    method: p("tasks/list")
  }), fi = _t.extend({
    tasks: T(jt)
  }), gi = ae.extend({
    method: p("tasks/cancel"),
    params: ve.extend({
      taskId: m()
    })
  });
  ce.merge(jt);
  const hi = f({
    uri: m(),
    mimeType: Q(m()),
    _meta: F(m(), H()).optional()
  }), yi = hi.extend({
    text: m()
  }), Vn = m().refine((e) => {
    try {
      return atob(e), true;
    } catch {
      return false;
    }
  }, {
    message: "Invalid Base64 string"
  }), bi = hi.extend({
    blob: Vn
  }), zt = Ce([
    "user",
    "assistant"
  ]), gt = f({
    audience: T(zt).optional(),
    priority: I().min(0).max(1).optional(),
    lastModified: Cs({
      offset: true
    }).optional()
  }), xi = f({
    ...ft.shape,
    ...Ot.shape,
    uri: m(),
    description: Q(m()),
    mimeType: Q(m()),
    annotations: gt.optional(),
    _meta: Q(ge({}))
  }), sr = f({
    ...ft.shape,
    ...Ot.shape,
    uriTemplate: m(),
    description: Q(m()),
    mimeType: Q(m()),
    annotations: gt.optional(),
    _meta: Q(ge({}))
  }), rr = Ut.extend({
    method: p("resources/list")
  }), ar = _t.extend({
    resources: T(xi)
  }), cr = Ut.extend({
    method: p("resources/templates/list")
  }), dr = _t.extend({
    resourceTemplates: T(sr)
  }), Hn = ve.extend({
    uri: m()
  }), lr = Hn, ur = ae.extend({
    method: p("resources/read"),
    params: lr
  }), pr = ce.extend({
    contents: T(O([
      yi,
      bi
    ]))
  }), mr = Ae.extend({
    method: p("notifications/resources/list_changed"),
    params: Me.optional()
  }), fr = Hn, gr = ae.extend({
    method: p("resources/subscribe"),
    params: fr
  }), hr = Hn, yr = ae.extend({
    method: p("resources/unsubscribe"),
    params: hr
  }), br = Me.extend({
    uri: m()
  }), xr = Ae.extend({
    method: p("notifications/resources/updated"),
    params: br
  }), vr = f({
    name: m(),
    description: Q(m()),
    required: Q(V())
  }), Sr = f({
    ...ft.shape,
    ...Ot.shape,
    description: Q(m()),
    arguments: Q(T(vr)),
    _meta: Q(ge({}))
  }), wr = Ut.extend({
    method: p("prompts/list")
  }), Pr = _t.extend({
    prompts: T(Sr)
  }), kr = ve.extend({
    name: m(),
    arguments: F(m(), m()).optional()
  }), Er = ae.extend({
    method: p("prompts/get"),
    params: kr
  }), Wn = f({
    type: p("text"),
    text: m(),
    annotations: gt.optional(),
    _meta: F(m(), H()).optional()
  }), $n = f({
    type: p("image"),
    data: Vn,
    mimeType: m(),
    annotations: gt.optional(),
    _meta: F(m(), H()).optional()
  }), Yn = f({
    type: p("audio"),
    data: Vn,
    mimeType: m(),
    annotations: gt.optional(),
    _meta: F(m(), H()).optional()
  }), Cr = f({
    type: p("tool_use"),
    name: m(),
    id: m(),
    input: F(m(), H()),
    _meta: F(m(), H()).optional()
  }), vi = f({
    type: p("resource"),
    resource: O([
      yi,
      bi
    ]),
    annotations: gt.optional(),
    _meta: F(m(), H()).optional()
  }), Si = xi.extend({
    type: p("resource_link")
  }), qt = O([
    Wn,
    $n,
    Yn,
    Si,
    vi
  ]), Mr = f({
    role: zt,
    content: qt
  }), Ar = ce.extend({
    description: m().optional(),
    messages: T(Mr)
  }), Tr = Ae.extend({
    method: p("notifications/prompts/list_changed"),
    params: Me.optional()
  }), Br = f({
    title: m().optional(),
    readOnlyHint: V().optional(),
    destructiveHint: V().optional(),
    idempotentHint: V().optional(),
    openWorldHint: V().optional()
  }), Dr = f({
    taskSupport: Ce([
      "required",
      "optional",
      "forbidden"
    ]).optional()
  }), Zn = f({
    ...ft.shape,
    ...Ot.shape,
    description: m().optional(),
    inputSchema: f({
      type: p("object"),
      properties: F(m(), re).optional(),
      required: T(m()).optional()
    }).catchall(H()),
    outputSchema: f({
      type: p("object"),
      properties: F(m(), re).optional(),
      required: T(m()).optional()
    }).catchall(H()).optional(),
    annotations: Br.optional(),
    execution: Dr.optional(),
    _meta: F(m(), H()).optional()
  }), Rr = Ut.extend({
    method: p("tools/list")
  }), Ir = _t.extend({
    tools: T(Zn)
  }), Xn = ce.extend({
    content: T(qt).default([]),
    structuredContent: F(m(), H()).optional(),
    isError: V().optional()
  });
  Xn.or(ce.extend({
    toolResult: H()
  }));
  const Gr = dn.extend({
    name: m(),
    arguments: F(m(), H()).optional()
  }), Nr = ae.extend({
    method: p("tools/call"),
    params: Gr
  }), Or = Ae.extend({
    method: p("notifications/tools/list_changed"),
    params: Me.optional()
  });
  f({
    autoRefresh: V().default(true),
    debounceMs: I().int().nonnegative().default(300)
  });
  const wi = Ce([
    "debug",
    "info",
    "notice",
    "warning",
    "error",
    "critical",
    "alert",
    "emergency"
  ]), Ur = ve.extend({
    level: wi
  }), _r = ae.extend({
    method: p("logging/setLevel"),
    params: Ur
  }), jr = Me.extend({
    level: wi,
    logger: m().optional(),
    data: H()
  }), zr = Ae.extend({
    method: p("notifications/message"),
    params: jr
  }), qr = f({
    name: m().optional()
  }), Kr = f({
    hints: T(qr).optional(),
    costPriority: I().min(0).max(1).optional(),
    speedPriority: I().min(0).max(1).optional(),
    intelligencePriority: I().min(0).max(1).optional()
  }), Fr = f({
    mode: Ce([
      "auto",
      "required",
      "none"
    ]).optional()
  }), Lr = f({
    type: p("tool_result"),
    toolUseId: m().describe("The unique identifier for the corresponding tool call."),
    content: T(qt).default([]),
    structuredContent: f({}).loose().optional(),
    isError: V().optional(),
    _meta: F(m(), H()).optional()
  }), Vr = Ho("type", [
    Wn,
    $n,
    Yn
  ]), en = Ho("type", [
    Wn,
    $n,
    Yn,
    Cr,
    Lr
  ]), Hr = f({
    role: zt,
    content: O([
      en,
      T(en)
    ]),
    _meta: F(m(), H()).optional()
  }), Wr = dn.extend({
    messages: T(Hr),
    modelPreferences: Kr.optional(),
    systemPrompt: m().optional(),
    includeContext: Ce([
      "none",
      "thisServer",
      "allServers"
    ]).optional(),
    temperature: I().optional(),
    maxTokens: I().int(),
    stopSequences: T(m()).optional(),
    metadata: re.optional(),
    tools: T(Zn).optional(),
    toolChoice: Fr.optional()
  }), $r = ae.extend({
    method: p("sampling/createMessage"),
    params: Wr
  }), Yr = ce.extend({
    model: m(),
    stopReason: Q(Ce([
      "endTurn",
      "stopSequence",
      "maxTokens"
    ]).or(m())),
    role: zt,
    content: Vr
  }), Zr = ce.extend({
    model: m(),
    stopReason: Q(Ce([
      "endTurn",
      "stopSequence",
      "maxTokens",
      "toolUse"
    ]).or(m())),
    role: zt,
    content: O([
      en,
      T(en)
    ])
  }), Xr = f({
    type: p("boolean"),
    title: m().optional(),
    description: m().optional(),
    default: V().optional()
  }), Jr = f({
    type: p("string"),
    title: m().optional(),
    description: m().optional(),
    minLength: I().optional(),
    maxLength: I().optional(),
    format: Ce([
      "email",
      "uri",
      "date",
      "date-time"
    ]).optional(),
    default: m().optional()
  }), Qr = f({
    type: Ce([
      "number",
      "integer"
    ]),
    title: m().optional(),
    description: m().optional(),
    minimum: I().optional(),
    maximum: I().optional(),
    default: I().optional()
  }), ea = f({
    type: p("string"),
    title: m().optional(),
    description: m().optional(),
    enum: T(m()),
    default: m().optional()
  }), ta = f({
    type: p("string"),
    title: m().optional(),
    description: m().optional(),
    oneOf: T(f({
      const: m(),
      title: m()
    })),
    default: m().optional()
  }), na = f({
    type: p("string"),
    title: m().optional(),
    description: m().optional(),
    enum: T(m()),
    enumNames: T(m()).optional(),
    default: m().optional()
  }), oa = O([
    ea,
    ta
  ]), ia = f({
    type: p("array"),
    title: m().optional(),
    description: m().optional(),
    minItems: I().optional(),
    maxItems: I().optional(),
    items: f({
      type: p("string"),
      enum: T(m())
    }),
    default: T(m()).optional()
  }), sa = f({
    type: p("array"),
    title: m().optional(),
    description: m().optional(),
    minItems: I().optional(),
    maxItems: I().optional(),
    items: f({
      anyOf: T(f({
        const: m(),
        title: m()
      }))
    }),
    default: T(m()).optional()
  }), ra = O([
    ia,
    sa
  ]), aa = O([
    na,
    oa,
    ra
  ]), ca = O([
    aa,
    Xr,
    Jr,
    Qr
  ]), da = dn.extend({
    mode: p("form").optional(),
    message: m(),
    requestedSchema: f({
      type: p("object"),
      properties: F(m(), ca),
      required: T(m()).optional()
    })
  }), la = dn.extend({
    mode: p("url"),
    message: m(),
    elicitationId: m(),
    url: m().url()
  }), ua = O([
    da,
    la
  ]), pa = ae.extend({
    method: p("elicitation/create"),
    params: ua
  }), ma = Me.extend({
    elicitationId: m()
  }), fa = Ae.extend({
    method: p("notifications/elicitation/complete"),
    params: ma
  }), ga = ce.extend({
    action: Ce([
      "accept",
      "decline",
      "cancel"
    ]),
    content: Vo((e) => e === null ? void 0 : e, F(m(), O([
      m(),
      I(),
      V(),
      T(m())
    ])).optional())
  }), ha = f({
    type: p("ref/resource"),
    uri: m()
  }), ya = f({
    type: p("ref/prompt"),
    name: m()
  }), ba = ve.extend({
    ref: O([
      ya,
      ha
    ]),
    argument: f({
      name: m(),
      value: m()
    }),
    context: f({
      arguments: F(m(), m()).optional()
    }).optional()
  }), xa = ae.extend({
    method: p("completion/complete"),
    params: ba
  }), va = ce.extend({
    completion: ge({
      values: T(m()).max(100),
      total: Q(I().int()),
      hasMore: Q(V())
    })
  }), Sa = f({
    uri: m().startsWith("file://"),
    name: m().optional(),
    _meta: F(m(), H()).optional()
  }), wa = ae.extend({
    method: p("roots/list"),
    params: ve.optional()
  }), Pa = ce.extend({
    roots: T(Sa)
  }), ka = Ae.extend({
    method: p("notifications/roots/list_changed"),
    params: Me.optional()
  });
  O([
    ri,
    Zs,
    xa,
    _r,
    Er,
    wr,
    rr,
    cr,
    ur,
    gr,
    yr,
    Nr,
    Rr,
    li,
    pi,
    mi,
    gi
  ]);
  O([
    si,
    ai,
    Qs,
    ka,
    di
  ]);
  O([
    ii,
    Yr,
    Zr,
    ga,
    Pa,
    ui,
    fi,
    ci
  ]);
  O([
    ri,
    $r,
    pa,
    wa,
    li,
    pi,
    mi,
    gi
  ]);
  O([
    si,
    ai,
    zr,
    xr,
    mr,
    Or,
    Tr,
    di,
    fa
  ]);
  O([
    ii,
    Js,
    va,
    Ar,
    Pr,
    ar,
    dr,
    pr,
    Xn,
    Ir,
    ui,
    fi,
    ci
  ]);
  new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
  var Ea = O([
    p("light"),
    p("dark")
  ]).describe("Color theme preference for the host environment."), Rt = O([
    p("inline"),
    p("fullscreen"),
    p("pip")
  ]).describe("Display mode for UI presentation."), Ca = O([
    p("--color-background-primary"),
    p("--color-background-secondary"),
    p("--color-background-tertiary"),
    p("--color-background-inverse"),
    p("--color-background-ghost"),
    p("--color-background-info"),
    p("--color-background-danger"),
    p("--color-background-success"),
    p("--color-background-warning"),
    p("--color-background-disabled"),
    p("--color-text-primary"),
    p("--color-text-secondary"),
    p("--color-text-tertiary"),
    p("--color-text-inverse"),
    p("--color-text-ghost"),
    p("--color-text-info"),
    p("--color-text-danger"),
    p("--color-text-success"),
    p("--color-text-warning"),
    p("--color-text-disabled"),
    p("--color-border-primary"),
    p("--color-border-secondary"),
    p("--color-border-tertiary"),
    p("--color-border-inverse"),
    p("--color-border-ghost"),
    p("--color-border-info"),
    p("--color-border-danger"),
    p("--color-border-success"),
    p("--color-border-warning"),
    p("--color-border-disabled"),
    p("--color-ring-primary"),
    p("--color-ring-secondary"),
    p("--color-ring-inverse"),
    p("--color-ring-info"),
    p("--color-ring-danger"),
    p("--color-ring-success"),
    p("--color-ring-warning"),
    p("--font-sans"),
    p("--font-mono"),
    p("--font-weight-normal"),
    p("--font-weight-medium"),
    p("--font-weight-semibold"),
    p("--font-weight-bold"),
    p("--font-text-xs-size"),
    p("--font-text-sm-size"),
    p("--font-text-md-size"),
    p("--font-text-lg-size"),
    p("--font-heading-xs-size"),
    p("--font-heading-sm-size"),
    p("--font-heading-md-size"),
    p("--font-heading-lg-size"),
    p("--font-heading-xl-size"),
    p("--font-heading-2xl-size"),
    p("--font-heading-3xl-size"),
    p("--font-text-xs-line-height"),
    p("--font-text-sm-line-height"),
    p("--font-text-md-line-height"),
    p("--font-text-lg-line-height"),
    p("--font-heading-xs-line-height"),
    p("--font-heading-sm-line-height"),
    p("--font-heading-md-line-height"),
    p("--font-heading-lg-line-height"),
    p("--font-heading-xl-line-height"),
    p("--font-heading-2xl-line-height"),
    p("--font-heading-3xl-line-height"),
    p("--border-radius-xs"),
    p("--border-radius-sm"),
    p("--border-radius-md"),
    p("--border-radius-lg"),
    p("--border-radius-xl"),
    p("--border-radius-full"),
    p("--border-width-regular"),
    p("--shadow-hairline"),
    p("--shadow-sm"),
    p("--shadow-md"),
    p("--shadow-lg")
  ]).describe("CSS variable keys available to MCP apps for theming."), Ma = F(Ca.describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), O([
    m(),
    In()
  ]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`)).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`);
  f({
    method: p("ui/open-link"),
    params: f({
      url: m().describe("URL to open in the host's browser")
    })
  });
  f({
    isError: V().optional().describe("True if the host failed to open the URL (e.g., due to security policy).")
  }).passthrough();
  f({
    isError: V().optional().describe("True if the download failed (e.g., user cancelled or host denied).")
  }).passthrough();
  f({
    isError: V().optional().describe("True if the host rejected or failed to deliver the message.")
  }).passthrough();
  f({
    method: p("ui/notifications/sandbox-proxy-ready"),
    params: f({})
  });
  var Jn = f({
    connectDomains: T(m()).optional().describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted \u2192 no network connections (secure default)`),
    resourceDomains: T(m()).optional().describe("Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted \u2192 no network resources (secure default)"),
    frameDomains: T(m()).optional().describe("Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted \u2192 no nested iframes allowed (`frame-src 'none'`)"),
    baseUriDomains: T(m()).optional().describe("Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted \u2192 only same origin allowed (`base-uri 'self'`)")
  }), Qn = f({
    camera: f({}).optional().describe("Request camera access.\n\nMaps to Permission Policy `camera` feature."),
    microphone: f({}).optional().describe("Request microphone access.\n\nMaps to Permission Policy `microphone` feature."),
    geolocation: f({}).optional().describe("Request geolocation access.\n\nMaps to Permission Policy `geolocation` feature."),
    clipboardWrite: f({}).optional().describe("Request clipboard write access.\n\nMaps to Permission Policy `clipboard-write` feature.")
  });
  f({
    method: p("ui/notifications/size-changed"),
    params: f({
      width: I().optional().describe("New width in pixels."),
      height: I().optional().describe("New height in pixels.")
    })
  });
  f({
    method: p("ui/notifications/tool-input"),
    params: f({
      arguments: F(m(), H().describe("Complete tool call arguments as key-value pairs.")).optional().describe("Complete tool call arguments as key-value pairs.")
    })
  });
  f({
    method: p("ui/notifications/tool-input-partial"),
    params: f({
      arguments: F(m(), H().describe("Partial tool call arguments (incomplete, may change).")).optional().describe("Partial tool call arguments (incomplete, may change).")
    })
  });
  f({
    method: p("ui/notifications/tool-cancelled"),
    params: f({
      reason: m().optional().describe('Optional reason for the cancellation (e.g., "user action", "timeout").')
    })
  });
  var Aa = f({
    fonts: m().optional()
  }), Ta = f({
    variables: Ma.optional().describe("CSS variables for theming the app."),
    css: Aa.optional().describe("CSS blocks that apps can inject.")
  });
  f({
    method: p("ui/resource-teardown"),
    params: f({})
  });
  F(m(), H());
  var ho = f({
    text: f({}).optional().describe("Host supports text content blocks."),
    image: f({}).optional().describe("Host supports image content blocks."),
    audio: f({}).optional().describe("Host supports audio content blocks."),
    resource: f({}).optional().describe("Host supports resource content blocks."),
    resourceLink: f({}).optional().describe("Host supports resource link content blocks."),
    structuredContent: f({}).optional().describe("Host supports structured content.")
  });
  f({
    method: p("ui/notifications/request-teardown"),
    params: f({}).optional()
  });
  var Ba = f({
    experimental: f({}).optional().describe("Experimental features (structure TBD)."),
    openLinks: f({}).optional().describe("Host supports opening external URLs."),
    downloadFile: f({}).optional().describe("Host supports file downloads via ui/download-file."),
    serverTools: f({
      listChanged: V().optional().describe("Host supports tools/list_changed notifications.")
    }).optional().describe("Host can proxy tool calls to the MCP server."),
    serverResources: f({
      listChanged: V().optional().describe("Host supports resources/list_changed notifications.")
    }).optional().describe("Host can proxy resource reads to the MCP server."),
    logging: f({}).optional().describe("Host accepts log messages."),
    sandbox: f({
      permissions: Qn.optional().describe("Permissions granted by the host (camera, microphone, geolocation)."),
      csp: Jn.optional().describe("CSP domains approved by the host.")
    }).optional().describe("Sandbox configuration applied by the host."),
    updateModelContext: ho.optional().describe("Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns."),
    message: ho.optional().describe("Host supports receiving content messages (ui/message) from the view.")
  }), Da = f({
    experimental: f({}).optional().describe("Experimental features (structure TBD)."),
    tools: f({
      listChanged: V().optional().describe("App supports tools/list_changed notifications.")
    }).optional().describe("App exposes MCP-style tools that the host can call."),
    availableDisplayModes: T(Rt).optional().describe("Display modes the app supports.")
  });
  f({
    method: p("ui/notifications/initialized"),
    params: f({}).optional()
  });
  f({
    csp: Jn.optional().describe("Content Security Policy configuration for UI resources."),
    permissions: Qn.optional().describe("Sandbox permissions requested by the UI resource."),
    domain: m().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`),
    prefersBorder: V().optional().describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`)
  });
  f({
    method: p("ui/request-display-mode"),
    params: f({
      mode: Rt.describe("The display mode being requested.")
    })
  });
  f({
    mode: Rt.describe("The display mode that was actually set. May differ from requested if not supported.")
  }).passthrough();
  var Ra = O([
    p("model"),
    p("app")
  ]).describe("Tool visibility scope - who can access the tool.");
  f({
    resourceUri: m().optional(),
    visibility: T(Ra).optional().describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`)
  });
  f({
    mimeTypes: T(m()).optional().describe('Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.')
  });
  f({
    method: p("ui/download-file"),
    params: f({
      contents: T(O([
        vi,
        Si
      ])).describe("Resource contents to download \u2014 embedded (inline data) or linked (host fetches). Uses standard MCP resource types.")
    })
  });
  f({
    method: p("ui/message"),
    params: f({
      role: p("user").describe('Message role, currently only "user" is supported.'),
      content: T(qt).describe("Message content blocks (text, image, etc.).")
    })
  });
  f({
    method: p("ui/notifications/sandbox-resource-ready"),
    params: f({
      html: m().describe("HTML content to load into the inner iframe."),
      sandbox: m().optional().describe("Optional override for the inner iframe's sandbox attribute."),
      csp: Jn.optional().describe("CSP configuration from resource metadata."),
      permissions: Qn.optional().describe("Sandbox permissions from resource metadata.")
    })
  });
  f({
    method: p("ui/notifications/tool-result"),
    params: Xn.describe("Standard MCP tool execution result.")
  });
  var Pi = f({
    toolInfo: f({
      id: Nt.optional().describe("JSON-RPC id of the tools/call request."),
      tool: Zn.describe("Tool definition including name, inputSchema, etc.")
    }).optional().describe("Metadata of the tool call that instantiated this App."),
    theme: Ea.optional().describe("Current color theme preference."),
    styles: Ta.optional().describe("Style configuration for theming the app."),
    displayMode: Rt.optional().describe("How the UI is currently displayed."),
    availableDisplayModes: T(Rt).optional().describe("Display modes the host supports."),
    containerDimensions: O([
      f({
        height: I().describe("Fixed container height in pixels.")
      }),
      f({
        maxHeight: O([
          I(),
          In()
        ]).optional().describe("Maximum container height in pixels.")
      })
    ]).and(O([
      f({
        width: I().describe("Fixed container width in pixels.")
      }),
      f({
        maxWidth: O([
          I(),
          In()
        ]).optional().describe("Maximum container width in pixels.")
      })
    ])).optional().describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`),
    locale: m().optional().describe("User's language and region preference in BCP 47 format."),
    timeZone: m().optional().describe("User's timezone in IANA format."),
    userAgent: m().optional().describe("Host application identifier."),
    platform: O([
      p("web"),
      p("desktop"),
      p("mobile")
    ]).optional().describe("Platform type for responsive design decisions."),
    deviceCapabilities: f({
      touch: V().optional().describe("Whether the device supports touch input."),
      hover: V().optional().describe("Whether the device supports hover interactions.")
    }).optional().describe("Device input capabilities."),
    safeAreaInsets: f({
      top: I().describe("Top safe area inset in pixels."),
      right: I().describe("Right safe area inset in pixels."),
      bottom: I().describe("Bottom safe area inset in pixels."),
      left: I().describe("Left safe area inset in pixels.")
    }).optional().describe("Mobile safe area boundaries in pixels.")
  }).passthrough();
  f({
    method: p("ui/notifications/host-context-changed"),
    params: Pi.describe("Partial context update containing only changed fields.")
  });
  f({
    method: p("ui/update-model-context"),
    params: f({
      content: T(qt).optional().describe("Context content blocks (text, image, etc.)."),
      structuredContent: F(m(), H().describe("Structured content for machine-readable context data.")).optional().describe("Structured content for machine-readable context data.")
    })
  });
  f({
    method: p("ui/initialize"),
    params: f({
      appInfo: ln.describe("App identification (name and version)."),
      appCapabilities: Da.describe("Features and capabilities this app provides."),
      protocolVersion: m().describe("Protocol version this app supports.")
    })
  });
  f({
    protocolVersion: m().describe('Negotiated protocol version string (e.g., "2025-11-21").'),
    hostInfo: ln.describe("Host application identification and version."),
    hostCapabilities: Ba.describe("Features and capabilities provided by the host."),
    hostContext: Pi.describe("Rich context about the host environment.")
  }).passthrough();
  const ki = (e, t) => e ?? t, _e = (e, t, n) => {
    const [i, r] = h.useState(e ?? t), o = e !== void 0 && n !== void 0, s = h.useRef(e);
    h.useEffect(() => {
      o || e !== void 0 && (Object.is(s.current, e) || (s.current = e, r(e)));
    }, [
      o,
      e
    ]);
    const a = o ? e : i, c = h.useCallback((d) => {
      o || r(d), n == null ? void 0 : n(d);
    }, [
      o,
      n
    ]);
    return [
      a,
      c,
      o
    ];
  }, Ia = (e) => {
    if (typeof e == "string") return e;
    if (e && typeof e == "object" && "guid" in e && typeof e.guid == "string") return e.guid;
  }, Ga = (e) => {
    if (typeof e == "string") return e;
    if (e && typeof e == "object") {
      if ("name" in e && typeof e.name == "string" && e.name.length > 0) return e.name;
      if ("id" in e && typeof e.id == "string" && e.id.length > 0) return e.id;
      if ("guid" in e && typeof e.guid == "string" && e.guid.length > 0) return e.guid;
    }
  }, kn = (e) => {
    if (!e) return {};
    const t = (e.designs ?? []).map((o) => ({
      guid: o.guid,
      name: o.name,
      description: o.description,
      createdAt: o.createdAt,
      updatedAt: o.updatedAt,
      unit: o.unit,
      icon: o.icon,
      image: o.image,
      parent: o.parent ? {
        guid: o.parent.guid
      } : void 0
    })), n = (e.types ?? []).map((o) => ({
      guid: o.guid,
      name: o.name,
      description: o.description,
      createdAt: o.createdAt,
      updatedAt: o.updatedAt,
      icon: o.icon,
      image: o.image,
      parent: o.parent ? {
        guid: o.parent.guid
      } : void 0
    })), i = (e.ports ?? []).map((o) => ({
      guid: o.guid,
      name: o.name,
      description: o.description,
      icon: o.icon,
      maxChildren: o.maxChildren
    })), r = (e.types ?? []).flatMap((o) => (o.connectors ?? []).map((s) => ({
      guid: s.guid,
      typeGuid: o.guid,
      id: s.name,
      port: Ia(s.port),
      name: s.name || Ga(s.port) || "connector",
      description: s.description,
      mandatory: s.mandatory,
      maxChildren: s.maxChildren
    })));
    return {
      guid: e.guid,
      name: e.name,
      description: e.description,
      version: e.version,
      createdAt: e.createdAt,
      updatedAt: e.updatedAt,
      homepage: e.homepage,
      remote: e.remote,
      preview: e.preview,
      icon: e.icon,
      image: e.image,
      license: e.license,
      designs: t,
      types: n,
      ports: i,
      connectors: r
    };
  }, j = (e, t, n) => {
    typeof n != "string" || n.trim().length === 0 || e.push({
      label: t,
      value: n
    });
  }, En = (e) => e.image ?? e.icon ?? e.preview ?? e.homepage ?? e.remote, $t = (e, t) => {
    var _a2, _b, _c, _d, _e2, _f;
    const n = "scope:kit", i = "kit:root", r = "group:designs", o = "group:types", s = "group:kit-ports", a = "group:orphan-connectors", c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), l = (g) => {
      if (c.set(g.key, g), d.has(g.key) || d.set(g.key, []), !g.parentKey) return;
      const v = d.get(g.parentKey) ?? [];
      v.push(g.key), d.set(g.parentKey, v);
    }, b = String(((_a2 = e.designs) == null ? void 0 : _a2.length) ?? 0), u = String(((_b = e.types) == null ? void 0 : _b.length) ?? 0), y = String(((_c = e.ports) == null ? void 0 : _c.length) ?? 0), P = String(((_d = e.connectors) == null ? void 0 : _d.length) ?? 0);
    l({
      key: n,
      kind: "scope",
      label: "Kit",
      summary: "Kit hierarchy root.",
      metadata: [
        {
          label: "Designs",
          value: b
        },
        {
          label: "Types",
          value: u
        },
        {
          label: "Ports",
          value: y
        },
        {
          label: "Connectors",
          value: P
        }
      ]
    });
    const x = [];
    j(x, "Name", e.name), j(x, "Guid", e.guid), j(x, "Description", e.description), j(x, "Version", e.version), j(x, "License", e.license), j(x, "Homepage", e.homepage), j(x, "Remote", e.remote), j(x, "Created", e.createdAt), j(x, "Updated", e.updatedAt), l({
      key: i,
      kind: "kit",
      label: ((_e2 = e.name) == null ? void 0 : _e2.trim()) || "Unnamed Kit",
      parentKey: n,
      guid: e.guid,
      href: En(e),
      summary: e.description || "Kit metadata.",
      metadata: x
    }), t.designDataEnabled && l({
      key: r,
      kind: "group",
      label: "Designs",
      parentKey: i,
      groupKind: "design",
      summary: "Design hierarchy.",
      metadata: [
        {
          label: "Count",
          value: b
        }
      ]
    }), t.typeDataEnabled && l({
      key: o,
      kind: "group",
      label: "Types",
      parentKey: i,
      groupKind: "type",
      summary: "Type hierarchy.",
      metadata: [
        {
          label: "Count",
          value: u
        }
      ]
    }), t.portDataEnabled && (((_f = e.ports) == null ? void 0 : _f.length) ?? 0) > 0 && l({
      key: s,
      kind: "group",
      label: "Ports",
      parentKey: i,
      groupKind: "port",
      summary: "Kit-level port definitions.",
      metadata: [
        {
          label: "Count",
          value: y
        }
      ]
    });
    const k = /* @__PURE__ */ new Map();
    (e.types ?? []).forEach((g) => {
      var _a3;
      const v = [];
      j(v, "Kind", "Type"), j(v, "Name", g.name), j(v, "Guid", g.guid), j(v, "Description", g.description), j(v, "Created", g.createdAt), j(v, "Updated", g.updatedAt);
      const G = `kind:${g.guid}`;
      k.set(g.guid, G), l({
        key: G,
        kind: "kind",
        label: g.name || g.guid,
        parentKey: ((_a3 = g.parent) == null ? void 0 : _a3.guid) ? `kind:${g.parent.guid}` : o,
        guid: g.guid,
        groupKind: "type",
        href: En(g),
        summary: g.description || "Type artifact.",
        metadata: v
      });
    }), (e.designs ?? []).forEach((g) => {
      var _a3;
      const v = [];
      j(v, "Kind", "Design"), j(v, "Name", g.name), j(v, "Guid", g.guid), j(v, "Description", g.description), j(v, "Unit", g.unit), j(v, "Created", g.createdAt), j(v, "Updated", g.updatedAt), l({
        key: `design:${g.guid}`,
        kind: "design",
        label: g.name || g.guid,
        parentKey: ((_a3 = g.parent) == null ? void 0 : _a3.guid) ? `design:${g.parent.guid}` : r,
        guid: g.guid,
        groupKind: "design",
        href: En(g),
        summary: g.description || "Design artifact.",
        metadata: v
      });
    }), t.portDataEnabled && (e.ports ?? []).forEach((g) => {
      const v = [];
      j(v, "Kind", "Port"), j(v, "Name", g.name), j(v, "Guid", g.guid), j(v, "Description", g.description), l({
        key: `port:${g.guid}`,
        kind: "port",
        label: g.name || g.guid,
        parentKey: s,
        guid: g.guid,
        groupKind: "port",
        href: g.icon,
        summary: g.description || "Port definition.",
        metadata: v
      });
    });
    let A = 0;
    return t.connectorDataEnabled && (e.connectors ?? []).forEach((g) => {
      const v = [];
      j(v, "Kind", "Connector"), j(v, "Name", g.name), j(v, "Guid", g.guid), j(v, "Connector Id", g.id), j(v, "Port", g.port), j(v, "Description", g.description), j(v, "Mandatory", g.mandatory === void 0 ? void 0 : String(g.mandatory));
      const G = k.get(g.typeGuid) ?? a;
      G === a && (A += 1), l({
        key: `connector:${g.guid}`,
        kind: "connector",
        label: g.name || g.guid,
        parentKey: G,
        guid: g.guid,
        groupKind: "connector",
        summary: g.description || "Connector on a kind.",
        metadata: v
      });
    }), A > 0 && t.connectorDataEnabled && l({
      key: a,
      kind: "group",
      label: "Connectors",
      parentKey: i,
      groupKind: "connector",
      summary: "Connectors without a resolved kind parent.",
      metadata: [
        {
          label: "Count",
          value: String(A)
        }
      ]
    }), {
      rootKey: n,
      nodesByKey: c,
      childKeysByParentKey: d
    };
  }, yo = (e, t) => {
    if (!t) return [];
    const n = [];
    let i = t;
    for (; i; ) {
      const r = e.nodesByKey.get(i);
      if (!r) break;
      n.unshift(r), i = r.parentKey;
    }
    return n;
  }, bo = (e, t) => (e.childKeysByParentKey.get(t.key) ?? []).map((i) => e.nodesByKey.get(i)).filter((i) => !!i).sort((i, r) => i.kind === "group" && r.kind !== "group" ? -1 : i.kind !== "group" && r.kind === "group" ? 1 : i.label.localeCompare(r.label)), Na = (e) => e.kind === "design" ? {
    designGuids: e.guid ? [
      e.guid
    ] : [],
    typeGuids: [],
    portGuids: [],
    connectorGuids: []
  } : e.kind === "kind" ? {
    designGuids: [],
    typeGuids: e.guid ? [
      e.guid
    ] : [],
    portGuids: [],
    connectorGuids: []
  } : e.kind === "port" ? {
    designGuids: [],
    typeGuids: [],
    portGuids: e.guid ? [
      e.guid
    ] : [],
    connectorGuids: []
  } : e.kind === "connector" ? {
    designGuids: [],
    typeGuids: [],
    portGuids: [],
    connectorGuids: e.guid ? [
      e.guid
    ] : []
  } : {
    designGuids: [],
    typeGuids: [],
    portGuids: [],
    connectorGuids: []
  }, Oa = (e, t) => {
    var _a2, _b, _c, _d;
    const n = (_a2 = t.connectorGuids) == null ? void 0 : _a2[0];
    if (n && e.nodesByKey.has(`connector:${n}`)) return `connector:${n}`;
    const i = (_b = t.portGuids) == null ? void 0 : _b[0];
    if (i && e.nodesByKey.has(`port:${i}`)) return `port:${i}`;
    const r = (_c = t.typeGuids) == null ? void 0 : _c[0];
    if (r && e.nodesByKey.has(`kind:${r}`)) return `kind:${r}`;
    const o = (_d = t.designGuids) == null ? void 0 : _d[0];
    if (o && e.nodesByKey.has(`design:${o}`)) return `design:${o}`;
  }, Ua = (e) => {
    var _a2, _b;
    const t = e.childKeysByParentKey.get("kit:root") ?? [];
    for (const n of t) {
      if (((_a2 = e.nodesByKey.get(n)) == null ? void 0 : _a2.kind) !== "group") continue;
      const r = (_b = e.childKeysByParentKey.get(n)) == null ? void 0 : _b[0];
      if (r) return r;
    }
    return "kit:root";
  }, _a = 12, ja = 0.5, za = 0.06, xo = 0.12, qa = 2, vo = 1, So = 0.15, wo = 12, Ka = 15e-4, tn = 1, Ei = (e, t) => ({
    x: e(0),
    y: t(0)
  }), Ci = (e, t) => ({
    uTip: {
      x: e(1),
      y: t(0)
    },
    vTip: {
      x: e(0),
      y: t(-1)
    }
  }), Fa = "semio.diffStatus", nn = (e) => {
    const t = e == null ? void 0 : e.find((n) => n.key === Fa);
    return (t == null ? void 0 : t.value) ? t.value === Pn.Removed ? "removed" : t.value === Pn.Added ? "added" : t.value === Pn.Modified ? "modified" : "default" : "default";
  }, Kt = (e) => e === "removed" ? "var(--color-removed, #ef4444)" : e === "added" ? "var(--color-new, #22c55e)" : e === "modified" ? "var(--color-modified, #f59e0b)" : "var(--foreground, #1b1a17)", Ye = (e, t, n) => t ? e === "default" ? "var(--accent)" : "var(--color-changed-selected)" : n ? e === "default" ? "var(--accent-secondary)" : "var(--color-changed-hovered)" : Kt(e), Mi = 0.18, Ai = 0.55, Nn = (e, t, n, i, r, o, s) => {
    const a = [], c = [];
    for (const k of e.points) t.has(k.guid) && (a.push(i(k.u)), c.push(r(-k.v)));
    for (const k of e.lines) n.has(k.guid) && (a.push(i(k.source.u), i(k.target.u)), c.push(r(-k.source.v), r(-k.target.v)));
    if (a.length === 0) return null;
    const d = e.points.some((k) => t.has(k.guid)), l = e.lines.some((k) => n.has(k.guid)), b = d && l ? Math.max(o, s) : d ? o : s, u = Math.min(...a) - b, y = Math.max(...a) + b, P = Math.min(...c) - b, x = Math.max(...c) + b;
    return {
      x: u,
      y: P,
      width: Math.max(y - u, 1),
      height: Math.max(x - P, 1)
    };
  }, La = (e) => {
    var _a2, _b, _c;
    const t = /* @__PURE__ */ new Map();
    for (const n of ((_a2 = e == null ? void 0 : e.pieces) == null ? void 0 : _a2.updated) ?? []) {
      const i = (_b = n.piece) == null ? void 0 : _b.guid, r = (_c = n.diff) == null ? void 0 : _c.center;
      i && r && typeof r.u == "number" && typeof r.v == "number" && t.set(i, {
        u: r.u,
        v: r.v
      });
    }
    return t;
  }, Fe = (e, t, n, i) => {
    const r = n ? Fo(e, n) : e, o = n ? At(e, n) : e, s = La(i), a = new Map((o.pieces ?? []).filter((v) => typeof v.guid == "string" && v.guid.length > 0).map((v) => [
      v.guid,
      v.center
    ])), c = /* @__PURE__ */ new Map();
    (r.pieces ?? []).forEach((v) => {
      if (!v.guid) return;
      const G = a.get(v.guid) ?? v.center ?? s.get(v.guid);
      if (!G) return;
      const U = n ? nn(v.attributes) : "default";
      c.set(v.guid, {
        guid: v.guid,
        piece: v,
        u: G.u,
        v: G.v,
        status: U
      });
    });
    const d = new Map(Array.from(c.values()).map((v) => [
      v.guid,
      v
    ])), l = /* @__PURE__ */ new Map();
    if ((r.connections ?? []).forEach((v) => {
      if (!v.guid) return;
      const G = d.get(v.connected.piece.guid), U = d.get(v.connecting.piece.guid);
      if (!G || !U) return;
      const C = n ? nn(v.attributes) : "default";
      l.set(v.guid, {
        guid: v.guid,
        connection: v,
        source: G,
        target: U,
        status: C
      });
    }), n) {
      for (const v of l.values()) if (v.status === "default") {
        const G = c.get(v.connection.connected.piece.guid), U = c.get(v.connection.connecting.piece.guid);
        (G && G.status !== "default" || U && U.status !== "default") && (v.status = "modified");
      }
    }
    const b = Array.from(l.values()), u = Array.from(c.values()), y = u.length > 0 ? Math.min(...u.map((v) => v.u)) : -0.5, P = u.length > 0 ? Math.max(...u.map((v) => v.u)) : 0.5, x = u.length > 0 ? Math.min(...u.map((v) => -v.v)) : -0.5, k = u.length > 0 ? Math.max(...u.map((v) => -v.v)) : 0.5, A = Math.max(P - y, tn), g = Math.max(k - x, tn);
    return {
      lines: b,
      points: u,
      minU: y,
      maxU: P,
      minY: x,
      maxY: k,
      width: A,
      height: g
    };
  }, Va = (e) => {
    if (e.length === 0) return null;
    const t = Math.min(...e.map((o) => o.u)), n = Math.max(...e.map((o) => o.u)), i = Math.min(...e.map((o) => -o.v)), r = Math.max(...e.map((o) => -o.v));
    return {
      minU: t,
      maxU: n,
      minY: i,
      maxY: r,
      width: Math.max(n - t, tn),
      height: Math.max(r - i, tn)
    };
  }, Po = (e, t) => t.has(e), Ha = () => {
    const e = h.useRef(null), [t, n] = h.useState({
      width: 0,
      height: 0
    });
    return h.useLayoutEffect(() => {
      const i = e.current;
      if (!i) return;
      const r = () => {
        n({
          width: i.clientWidth,
          height: i.clientHeight
        });
      };
      r();
      const o = new ResizeObserver(r);
      return o.observe(i), () => o.disconnect();
    }, []), {
      ref: e,
      size: t
    };
  }, Ti = (e) => ({
    pieceGuids: (e == null ? void 0 : e.pieceGuids) ?? [],
    connectionGuids: (e == null ? void 0 : e.connectionGuids) ?? []
  }), on = (e) => ({
    pieceGuid: (e == null ? void 0 : e.pieceGuid) ?? null,
    connectionGuid: (e == null ? void 0 : e.connectionGuid) ?? null
  }), $e = ({ design: e, designDiff: t, defaultDesignDiff: n, diffEnabled: i, zoomTarget: r, selection: o, defaultSelection: s, selectionEnabled: a, pieceSelectionEnabled: c = true, connectionSelectionEnabled: d = true, onSelectionChange: l, hover: b, defaultHover: u, hoverEnabled: y = true, pieceHoverEnabled: P = true, connectionHoverEnabled: x = true, onHoverChange: k, pan: A, defaultPan: g, panEnabled: v = true, onPanChange: G, zoom: U, defaultZoom: C, zoomEnabled: M = true, onZoomChange: N, className: _ = "", padding: de = _a, pieceRadius: le = ja, strokeWidth: ue = qa, title: he = "Design Diagram", showOrigin: te = true, onPieceClick: Z, onPieceDoubleClick: ne, onConnectionClick: oe, layoutDiff: L }) => {
    const q = i ?? true, Y = a ?? true, X = Y && c, pe = Y && d, ze = y ?? true, Te = ze && P && (X || !!Z || !!ne), me = ze && x && (pe || !!oe), qe = ki(t, n), [ee, Se] = _e(o, Ti(s), l), [K, ye] = _e(b, on(u), k), [W, ie, Be] = _e(A, g ?? {
      x: 0,
      y: 0
    }, G), [$, Ie, R] = _e(U, C ?? vo, N), B = h.useMemo(() => Fe(e, de, q ? qe : void 0, L), [
      e,
      q,
      L,
      de,
      qe
    ]), Ze = h.useMemo(() => new Set(Y ? ee.pieceGuids ?? [] : []), [
      Y,
      ee.pieceGuids
    ]), Xe = h.useMemo(() => new Set(Y ? ee.connectionGuids ?? [] : []), [
      Y,
      ee.connectionGuids
    ]), Li = Te ? K.pieceGuid ?? null : null, Vi = me ? K.connectionGuid ?? null : null, { ref: Je, size: Ge } = Ha();
    $a(Je, e, q ? qe : void 0, ee);
    const Lt = h.useRef(null), ht = h.useRef({
      x: 0,
      y: 0,
      panX: 0,
      panY: 0
    }), yt = h.useRef(false), [Hi, to] = h.useState(false), no = de, pn = Math.max(Ge.width - no * 2, 1), mn = Math.max(Ge.height - no * 2, 1), we = Math.min(pn / B.width, mn / B.height), bt = (Ge.width - B.width * we) / 2, xt = (Ge.height - B.height * we) / 2, Pe = Ge.width / 2, ke = Ge.height / 2, Wi = (w) => bt + (w - B.minU) * we, $i = (w) => xt + (w - B.minY) * we, fn = r ?? (q && qe ? "diff" : "design"), Qe = h.useMemo(() => {
      if (fn === "none") return {
        zoom: C ?? vo,
        pan: g ?? {
          x: 0,
          y: 0
        }
      };
      const w = B.points.filter((Ne) => Ne.status !== "default"), z = B.lines.filter((Ne) => Ne.status !== "default").flatMap((Ne) => [
        Ne.source,
        Ne.target
      ]), se = w.length > 0 || z.length > 0, be = (fn === "diff" && se ? Va([
        ...w,
        ...z
      ]) : null) ?? {
        minU: B.minU,
        maxU: B.maxU,
        minY: B.minY,
        maxY: B.maxY,
        width: B.width,
        height: B.height
      }, De = (Ne) => bt + (Ne - B.minU) * we, nt = (Ne) => xt + (Ne - B.minY) * we, ot = De(be.minU), Wt = De(be.maxU), yn = nt(be.minY), bn = nt(be.maxY), Ke = Math.max(Wt - ot, 1), as = Math.max(bn - yn, 1), cs = (ot + Wt) / 2, ds = (yn + bn) / 2, xn = Math.min(wo, Math.max(So, Math.min(pn / Ke, mn / as)));
      return {
        zoom: C ?? xn,
        pan: g ?? {
          x: -xn * (cs - Pe),
          y: -xn * (ds - ke)
        }
      };
    }, [
      Pe,
      ke,
      g,
      C,
      mn,
      pn,
      fn,
      bt,
      xt,
      we,
      B
    ]), Yi = (w) => Pe + W.x + $ * (w - Pe), Zi = (w) => ke + W.y + $ * (w - ke), vt = (w) => Yi(Wi(w)), St = (w) => Zi($i(w)), gn = we * $, wt = h.useMemo(() => {
      if (!Y) return null;
      const w = we * $, z = Math.max(1, 0.1 * w), be = (le + xo) * w + z / 2 + 8, nt = (ue + 1.5) * $ / 2 + 8, ot = (Ke) => Pe + W.x + $ * (Ke - Pe), Wt = (Ke) => ke + W.y + $ * (Ke - ke);
      return Nn(B, Ze, Xe, (Ke) => ot(bt + (Ke - B.minU) * we), (Ke) => Wt(xt + (Ke - B.minY) * we), be, nt);
    }, [
      Pe,
      ke,
      Y,
      bt,
      xt,
      W.x,
      W.y,
      $,
      we,
      Xe,
      Ze,
      B,
      le,
      ue
    ]), oo = Qe.pan.x, io = Qe.pan.y, so = Qe.zoom;
    h.useEffect(() => {
      R || Ie(so), Be || ie({
        x: oo,
        y: io
      });
    }, [
      oo,
      io,
      so,
      Be,
      R,
      ie,
      Ie
    ]);
    const hn = h.useCallback((w) => {
      if (!M || (w.preventDefault(), Ge.width <= 0 || Ge.height <= 0 || !Je.current)) return;
      const z = Math.min(wo, Math.max(So, $ * Math.exp(-w.deltaY * Ka)));
      if (Math.abs(z - $) < 1e-4) return;
      const se = Je.current.getBoundingClientRect(), be = w.clientX - se.left, De = w.clientY - se.top, nt = Pe + (be - Pe - W.x) / $, ot = ke + (De - ke - W.y) / $;
      Ie(z), ie({
        x: be - Pe - z * (nt - Pe),
        y: De - ke - z * (ot - ke)
      });
    }, [
      Pe,
      ke,
      W.x,
      W.y,
      $,
      ie,
      Ie,
      Ge.height,
      Ge.width,
      M,
      Je
    ]);
    h.useEffect(() => {
      const w = Je.current;
      if (w) return w.addEventListener("wheel", hn, {
        passive: false
      }), () => w.removeEventListener("wheel", hn);
    }, [
      hn,
      Je
    ]);
    const Xi = h.useCallback(() => {
      !M && !v || (M && Ie(Qe.zoom), v && ie(Qe.pan));
    }, [
      Qe.pan,
      Qe.zoom,
      v,
      ie,
      Ie,
      M
    ]), Ji = h.useCallback((w) => {
      v && w.button === 0 && w.target === w.currentTarget && (Lt.current = w.pointerId, ht.current = {
        x: w.clientX,
        y: w.clientY,
        panX: W.x,
        panY: W.y
      }, yt.current = false, to(true), w.currentTarget.setPointerCapture(w.pointerId));
    }, [
      v,
      W.x,
      W.y
    ]), Vt = h.useCallback(() => {
      Y && Se({
        pieceGuids: [],
        connectionGuids: []
      });
    }, [
      Y,
      Se
    ]), ro = h.useCallback((w) => {
      Te && ye({
        pieceGuid: w,
        connectionGuid: K.connectionGuid ?? null
      });
    }, [
      Te,
      K.connectionGuid,
      ye
    ]), ao = h.useCallback((w) => {
      me && ye({
        pieceGuid: K.pieceGuid ?? null,
        connectionGuid: w
      });
    }, [
      me,
      K.pieceGuid,
      ye
    ]), Qi = h.useCallback((w) => {
      if (yt.current) {
        yt.current = false;
        return;
      }
      w.target === w.currentTarget && Vt();
    }, [
      Vt
    ]), es = h.useCallback((w) => {
      if (Lt.current !== w.pointerId) return;
      const z = w.clientX - ht.current.x, se = w.clientY - ht.current.y;
      (Math.abs(z) > 2 || Math.abs(se) > 2) && (yt.current = true), ie({
        x: ht.current.panX + z,
        y: ht.current.panY + se
      });
    }, [
      ie
    ]), co = h.useCallback((w) => {
      Lt.current === w.pointerId && (Lt.current = null, to(false), w.currentTarget.hasPointerCapture(w.pointerId) && w.currentTarget.releasePointerCapture(w.pointerId), yt.current || Vt());
    }, [
      Vt
    ]), ts = h.useCallback((w) => {
      if (!X) return;
      const z = new Set(ee.pieceGuids ?? []);
      z.has(w) ? z.delete(w) : z.add(w), Se({
        pieceGuids: Array.from(z),
        connectionGuids: ee.connectionGuids ?? []
      });
    }, [
      X,
      ee.connectionGuids,
      ee.pieceGuids,
      Se
    ]), ns = h.useCallback((w) => {
      if (!pe) return;
      const z = new Set(ee.connectionGuids ?? []);
      z.has(w) ? z.delete(w) : z.add(w), Se({
        pieceGuids: ee.pieceGuids ?? [],
        connectionGuids: Array.from(z)
      });
    }, [
      pe,
      ee.connectionGuids,
      ee.pieceGuids,
      Se
    ]), { x: et, y: tt } = Ei(vt, St), { uTip: Ve, vTip: He } = Ci(vt, St), lo = te ? Math.max(1, 0.85 * $) : 0, uo = te ? Math.max(10, Math.min(18, 10 + $)) : 0, Ht = te ? Math.max(3, 4 * Math.min($, 2)) : 0, po = Math.hypot(Ve.x - et, Ve.y - tt) || 1, os = (Ve.x - et) / po, is = (Ve.y - tt) / po, mo = Math.hypot(He.x - et, He.y - tt) || 1, ss = (He.x - et) / mo, rs = (He.y - tt) / mo;
    return S.jsx("div", {
      ref: Je,
      className: `h-full w-full ${_}`,
      onDoubleClick: Xi,
      tabIndex: 0,
      style: {
        outline: "none",
        position: "relative"
      },
      children: S.jsxs("svg", {
        "aria-label": he,
        className: "h-full w-full overflow-visible text-foreground",
        onPointerCancel: co,
        onPointerDown: Ji,
        onPointerMove: es,
        onPointerUp: co,
        role: "img",
        style: {
          cursor: v ? Hi ? "grabbing" : "grab" : "default",
          touchAction: v ? "none" : "auto"
        },
        onClick: Qi,
        children: [
          wt ? S.jsx("rect", {
            fill: "var(--accent)",
            fillOpacity: Mi,
            height: wt.height,
            pointerEvents: "none",
            stroke: "var(--accent)",
            strokeOpacity: Ai,
            strokeWidth: Math.max(1, 1.25 * $),
            width: wt.width,
            x: wt.x,
            y: wt.y
          }) : null,
          te ? S.jsxs("g", {
            "aria-hidden": "true",
            className: "text-muted-foreground",
            pointerEvents: "none",
            children: [
              S.jsx("circle", {
                cx: et,
                cy: tt,
                fill: "currentColor",
                fillOpacity: 0.5,
                r: Math.max(1.25, 1.75 * $)
              }),
              S.jsx("line", {
                stroke: "currentColor",
                strokeOpacity: 0.65,
                strokeWidth: lo,
                x1: et,
                x2: Ve.x,
                y1: tt,
                y2: Ve.y
              }),
              S.jsx("line", {
                stroke: "currentColor",
                strokeOpacity: 0.65,
                strokeWidth: lo,
                x1: et,
                x2: He.x,
                y1: tt,
                y2: He.y
              }),
              S.jsx("text", {
                dominantBaseline: "middle",
                fill: "currentColor",
                fillOpacity: 0.88,
                fontSize: uo,
                textAnchor: "middle",
                x: Ve.x + os * Ht,
                y: Ve.y + is * Ht,
                children: "u"
              }),
              S.jsx("text", {
                dominantBaseline: "middle",
                fill: "currentColor",
                fillOpacity: 0.88,
                fontSize: uo,
                textAnchor: "middle",
                x: He.x + ss * Ht,
                y: He.y + rs * Ht,
                children: "v"
              })
            ]
          }) : null,
          B.lines.map((w) => {
            const z = Po(w.guid, Xe), se = Vi === w.guid;
            return S.jsx("line", {
              onClick: oe || pe ? (be) => {
                be.stopPropagation(), ns(w.guid), oe == null ? void 0 : oe(w.connection);
              } : void 0,
              pointerEvents: "stroke",
              stroke: Ye(w.status, z, se),
              strokeLinecap: "round",
              strokeOpacity: z || se ? 1 : w.status === "default" ? 0.45 : 0.8,
              strokeWidth: (z ? ue + 1.5 : se ? ue + 0.75 : ue) * $,
              style: {
                cursor: oe || pe ? "pointer" : "default"
              },
              onPointerEnter: me ? () => ao(w.guid) : void 0,
              onPointerLeave: me ? () => ao((K.connectionGuid ?? null) === w.guid ? null : K.connectionGuid ?? null) : void 0,
              x1: vt(w.source.u),
              x2: vt(w.target.u),
              y1: St(-w.source.v),
              y2: St(-w.target.v)
            }, w.guid);
          }),
          B.points.map((w) => {
            const z = Po(w.guid, Ze), se = Li === w.guid, be = !!(Z || ne || X);
            return S.jsx("circle", {
              cx: vt(w.u),
              cy: St(-w.v),
              fill: Kt(w.status),
              onClick: Z || X ? (De) => {
                De.stopPropagation(), ts(w.guid), Z == null ? void 0 : Z(w.piece);
              } : void 0,
              onDoubleClick: ne ? (De) => {
                De.stopPropagation(), De.preventDefault(), ne(w.piece);
              } : void 0,
              onPointerEnter: Te ? () => ro(w.guid) : void 0,
              onPointerLeave: Te ? () => ro((K.pieceGuid ?? null) === w.guid ? null : K.pieceGuid ?? null) : void 0,
              r: (z ? le + xo : se ? le + za : le) * gn,
              stroke: z || se ? Ye(w.status, z, se) : "none",
              strokeWidth: z ? Math.max(1, 0.1 * gn) : se ? Math.max(1, 0.06 * gn) : 0,
              style: {
                cursor: be ? "pointer" : "default"
              }
            }, w.guid);
          })
        ]
      })
    });
  }, Bi = ({ selection: e, defaultSelection: t, onSelectionChange: n, ...i }) => {
    const r = e ? {
      pieceGuids: e.pieceGuids ?? [],
      connectionGuids: []
    } : void 0, o = t ? {
      pieceGuids: t.pieceGuids ?? [],
      connectionGuids: []
    } : void 0;
    return S.jsx($e, {
      ...i,
      pieceSelectionEnabled: true,
      connectionSelectionEnabled: false,
      selection: r,
      defaultSelection: o,
      onSelectionChange: n ? (s) => {
        n({
          pieceGuids: s.pieceGuids ?? []
        });
      } : void 0
    });
  }, Di = ({ selection: e, defaultSelection: t, onSelectionChange: n, ...i }) => {
    const r = e ? {
      pieceGuids: e.pieceGuids ?? [],
      connectionGuids: e.connectionGuids ?? []
    } : void 0, o = t ? {
      pieceGuids: t.pieceGuids ?? [],
      connectionGuids: t.connectionGuids ?? []
    } : void 0;
    return S.jsx($e, {
      ...i,
      pieceSelectionEnabled: true,
      connectionSelectionEnabled: true,
      selection: r,
      defaultSelection: o,
      onSelectionChange: n
    });
  }, Le = (e, t, n) => {
    const i = new Set((n == null ? void 0 : n.pieceGuids) ?? []), r = new Set((n == null ? void 0 : n.connectionGuids) ?? []), o = i.size > 0 || r.size > 0, s = t !== void 0;
    if (!s && !o) return {
      design: e
    };
    if (!s && o) {
      const c = (e.pieces ?? []).filter((l) => i.has(l.guid)), d = (e.connections ?? []).filter((l) => r.has(l.guid));
      return {
        design: {
          ...e,
          pieces: c.length > 0 ? c : void 0,
          connections: d.length > 0 ? d : void 0
        }
      };
    }
    if (s && !o) return {
      design: e,
      designDiff: t
    };
    const a = {
      ...t
    };
    return t.pieces && (a.pieces = {
      added: (t.pieces.added ?? []).filter((c) => i.has(c.guid)),
      removed: (t.pieces.removed ?? []).filter((c) => i.has(c.guid)),
      updated: (t.pieces.updated ?? []).filter((c) => i.has(c.piece.guid))
    }), t.connections && (a.connections = {
      added: (t.connections.added ?? []).filter((c) => r.has(c.guid)),
      removed: (t.connections.removed ?? []).filter((c) => r.has(c.guid)),
      updated: (t.connections.updated ?? []).filter((c) => r.has(c.connection.guid))
    }), {
      design: e,
      designDiff: a
    };
  }, Wa = (e) => JSON.stringify(e), $a = (e, t, n, i) => {
    h.useEffect(() => {
      const r = e.current;
      if (!r) return;
      const o = (s) => {
        if ((s.ctrlKey || s.metaKey) && s.key === "c") {
          const a = window.getSelection();
          if (a && a.toString().length > 0) return;
          s.preventDefault();
          const c = Le(t, n, i);
          navigator.clipboard.writeText(Wa(c));
        }
      };
      return r.addEventListener("keydown", o), () => r.removeEventListener("keydown", o);
    }, [
      e,
      t,
      n,
      i
    ]);
  }, ko = (e, t, n) => Math.min(n, Math.max(t, e)), Ri = ({ id: e, vec: t, minU: n = -1, maxU: i = 1, minV: r = -1, maxV: o = 1, showAxes: s = true, showOrigin: a = true, size: c = 120, onVecChange: d, className: l = "" }) => {
    const b = h.useRef(null), [u, y] = h.useState(false), [P, x] = h.useState(null), k = h.useRef(0), A = h.useRef(null), g = 8, v = c - g * 2, G = h.useCallback((L) => {
      if (!b.current) return {
        u: 0,
        v: 0
      };
      const q = b.current.getBoundingClientRect(), Y = L.clientX - q.left - g, X = L.clientY - q.top - g, pe = ko(n + Y / v * (i - n), n, i), ze = ko(o - X / v * (o - r), r, o);
      return {
        u: pe,
        v: ze
      };
    }, [
      v,
      n,
      i,
      r,
      o
    ]), U = (L) => g + (L - n) / (i - n) * v, C = (L) => g + (o - L) / (o - r) * v, M = h.useCallback(() => {
      A.current !== null && (d == null ? void 0 : d(A.current), A.current = null);
    }, [
      d
    ]), N = h.useCallback((L) => {
      var _a2;
      L.preventDefault(), (_a2 = b.current) == null ? void 0 : _a2.setPointerCapture(L.pointerId);
      const q = G(L);
      y(true), x(q), A.current = null, d == null ? void 0 : d(q);
    }, [
      G,
      d
    ]), _ = h.useCallback((L) => {
      if (!u) return;
      const q = G(L);
      x(q), A.current = q, k.current || (k.current = requestAnimationFrame(() => {
        k.current = 0, M();
      }));
    }, [
      u,
      G,
      M
    ]), de = h.useCallback((L) => {
      if (!u) return;
      k.current && (cancelAnimationFrame(k.current), k.current = 0);
      const q = G(L);
      x(null), y(false), d == null ? void 0 : d(q);
    }, [
      u,
      G,
      d
    ]), le = h.useCallback(() => {
      u && (k.current && (cancelAnimationFrame(k.current), k.current = 0), x(null), y(false));
    }, [
      u
    ]);
    h.useEffect(() => () => {
      k.current && cancelAnimationFrame(k.current);
    }, []);
    const ue = P ?? t, he = U(ue.u), te = C(ue.v), Z = U(0), ne = C(0), oe = n <= 0 && i >= 0 && r <= 0 && o >= 0;
    return S.jsxs("svg", {
      ref: b,
      "data-slot": "vec",
      id: e,
      width: c,
      height: c,
      viewBox: `0 0 ${c} ${c}`,
      className: `touch-none select-none ${l}`,
      onPointerDown: N,
      onPointerMove: _,
      onPointerUp: de,
      onPointerCancel: le,
      children: [
        S.jsx("rect", {
          x: g,
          y: g,
          width: v,
          height: v,
          rx: 2,
          className: "fill-muted/40 stroke-muted-foreground/20",
          strokeWidth: 0.5
        }),
        s && oe && S.jsxs(S.Fragment, {
          children: [
            S.jsx("line", {
              x1: g,
              y1: ne,
              x2: g + v,
              y2: ne,
              className: "stroke-muted-foreground/40",
              strokeWidth: 0.5,
              strokeDasharray: "2 2"
            }),
            S.jsx("line", {
              x1: Z,
              y1: g,
              x2: Z,
              y2: g + v,
              className: "stroke-muted-foreground/40",
              strokeWidth: 0.5,
              strokeDasharray: "2 2"
            })
          ]
        }),
        a && oe && S.jsx("circle", {
          cx: Z,
          cy: ne,
          r: 2,
          className: "fill-muted-foreground/60"
        }),
        oe && S.jsx("line", {
          x1: Z,
          y1: ne,
          x2: he,
          y2: te,
          className: "stroke-foreground/50",
          strokeWidth: 1
        }),
        S.jsx("circle", {
          "data-slot": "vec-handle",
          cx: he,
          cy: te,
          r: u ? 6 : 5,
          className: `fill-foreground cursor-grab active:cursor-grabbing ${u ? "" : "transition-all duration-150"}`
        })
      ]
    });
  }, Ya = (e) => ({
    x: (e == null ? void 0 : e.x) ?? 0,
    y: (e == null ? void 0 : e.y) ?? 0,
    z: (e == null ? void 0 : e.z) ?? 0
  }), Cn = (e, t, n) => Math.min(n, Math.max(t, e)), Za = ({ vector: e }) => {
    const t = h.useMemo(() => new D(e.x, e.y, e.z), [
      e.x,
      e.y,
      e.z
    ]), n = Math.max(1e-4, t.length()), i = h.useMemo(() => t.clone().normalize(), [
      t
    ]), r = h.useMemo(() => t.clone().multiplyScalar(0.5), [
      t
    ]), o = Math.max(0.03, Math.min(0.08, n * 0.1));
    return S.jsxs(Oo, {
      orthographic: true,
      camera: {
        zoom: 75,
        position: [
          2.5,
          2,
          2.5
        ],
        up: [
          0,
          0,
          1
        ],
        near: 0.1,
        far: 100
      },
      children: [
        S.jsx("ambientLight", {
          intensity: 0.8
        }),
        S.jsx("directionalLight", {
          intensity: 0.8,
          position: [
            3,
            4,
            5
          ]
        }),
        S.jsx("gridHelper", {
          args: [
            4,
            8,
            "#94a3b8",
            "#cbd5e1"
          ],
          rotation: [
            Math.PI / 2,
            0,
            0
          ]
        }),
        S.jsx("axesHelper", {
          args: [
            1.5
          ]
        }),
        S.jsxs("mesh", {
          position: [
            t.x,
            t.y,
            t.z
          ],
          children: [
            S.jsx("sphereGeometry", {
              args: [
                o,
                18,
                18
              ]
            }),
            S.jsx("meshStandardMaterial", {
              color: "#2563eb"
            })
          ]
        }),
        S.jsxs("mesh", {
          position: [
            r.x,
            r.y,
            r.z
          ],
          quaternion: new dt().setFromUnitVectors(new D(0, 1, 0), i),
          scale: [
            1,
            n,
            1
          ],
          children: [
            S.jsx("cylinderGeometry", {
              args: [
                0.02,
                0.02,
                1,
                12
              ]
            }),
            S.jsx("meshStandardMaterial", {
              color: "#334155"
            })
          ]
        }),
        S.jsx(Uo, {
          makeDefault: true
        })
      ]
    });
  }, Xa = ({ id: e, vector: t, defaultVector: n, onVectorChange: i, x: r, defaultX: o, onXChange: s, y: a, defaultY: c, onYChange: d, z: l, defaultZ: b, onZChange: u, selectionEnabled: y = true, xSelectionEnabled: P = true, ySelectionEnabled: x = true, zSelectionEnabled: k = true, displayEnabled: A = true, xDisplayEnabled: g = true, yDisplayEnabled: v = true, zDisplayEnabled: G = true, minX: U = -1, maxX: C = 1, minY: M = -1, maxY: N = 1, minZ: _ = -1, maxZ: de = 1, step: le = 0.1, axisLabels: ue, className: he = "" }) => {
    const [te, Z] = _e(t, Ya(n), i), ne = r !== void 0 || o !== void 0 || s !== void 0, oe = a !== void 0 || c !== void 0 || d !== void 0, L = l !== void 0 || b !== void 0 || u !== void 0, [q, Y] = _e(r, o ?? te.x, s), [X, pe] = _e(a, c ?? te.y, d), [ze, Te] = _e(l, b ?? te.z, u), me = {
      x: ne ? q : te.x,
      y: oe ? X : te.y,
      z: L ? ze : te.z
    }, qe = h.useCallback((K, ye) => {
      const W = Number.isFinite(ye) ? ye : 0, ie = K === "x" ? Cn(W, U, C) : K === "y" ? Cn(W, M, N) : Cn(W, _, de), Be = {
        ...me,
        [K]: ie
      };
      K === "x" && ne && Y(ie), K === "y" && oe && pe(ie), K === "z" && L && Te(ie), Z(Be);
    }, [
      me,
      ne,
      oe,
      L,
      C,
      N,
      de,
      U,
      M,
      _,
      Z,
      Y,
      pe,
      Te
    ]), ee = (K, ye, W, ie, Be, $, Ie) => {
      if (!$) return null;
      const R = y && Ie;
      return S.jsxs("div", {
        className: "grid grid-cols-[24px_1fr_88px] items-center gap-2",
        children: [
          S.jsx("label", {
            htmlFor: `${e}-${K}`,
            className: `text-xs font-semibold text-muted-foreground ${ye.length <= 1 ? "uppercase" : ""}`,
            children: ye
          }),
          R ? S.jsx("input", {
            id: `${e}-${K}`,
            type: "range",
            min: ie,
            max: Be,
            step: le,
            value: W,
            onChange: (B) => qe(K, Number(B.target.value))
          }) : S.jsx("div", {
            className: "h-2 rounded-full bg-muted/60"
          }),
          S.jsx("input", {
            type: "number",
            min: ie,
            max: Be,
            step: le,
            value: W,
            readOnly: !R,
            onChange: R ? (B) => qe(K, Number(B.target.value)) : void 0,
            className: "w-full rounded-md border border-input bg-background px-2 py-1 text-right text-sm font-mono"
          })
        ]
      }, K);
    }, Se = (K) => (ue == null ? void 0 : ue[K]) ?? K.toUpperCase();
    return A ? S.jsxs("div", {
      id: e,
      "data-slot": "vector",
      className: `flex flex-col gap-3 ${he}`,
      children: [
        S.jsx("div", {
          className: "h-40 w-full overflow-hidden rounded-md border border-border bg-background",
          children: S.jsx(Za, {
            vector: me
          })
        }),
        ee("x", Se("x"), me.x, U, C, g, P),
        ee("y", Se("y"), me.y, M, N, v, x),
        ee("z", Se("z"), me.z, _, de, G, k)
      ]
    }) : null;
  }, Ii = ({ id: e, value: t, min: n = {
    gap: -10,
    shift: -10,
    rise: -10
  }, max: i = {
    gap: 10,
    shift: 10,
    rise: 10
  }, onChange: r, className: o = "" }) => S.jsx(Xa, {
    id: e,
    vector: {
      x: t.shift,
      y: t.gap,
      z: t.rise
    },
    onVectorChange: (s) => r == null ? void 0 : r({
      shift: s.x,
      gap: s.y,
      rise: s.z
    }),
    minX: n.shift,
    maxX: i.shift,
    minY: n.gap,
    maxY: i.gap,
    minZ: n.rise,
    maxZ: i.rise,
    step: 0.1,
    axisLabels: {
      x: "shift",
      y: "gap",
      z: "rise"
    },
    className: o
  }), Mn = 1, Ja = 0.04, fe = (e) => getComputedStyle(document.documentElement).getPropertyValue(e).trim(), je = (e, t) => {
    if (e.startsWith("var(")) {
      const n = e.slice(4, -1), [i, r] = n.split(","), o = (i == null ? void 0 : i.trim()) ?? "", s = r == null ? void 0 : r.trim();
      return (o ? fe(o) : "") || s || t;
    }
    return e === "currentColor" ? t : e;
  }, Ft = Ps(), Qa = Ft.clone().invert(), An = (e) => /^(blob:|data:|https?:)/i.test(e.trim()), pt = (e) => {
    if (!e) return;
    if (typeof e.blob == "string" && e.blob.length > 0 && An(e.blob)) return e.blob.trim();
    const t = typeof e.url == "string" ? e.url.trim() : "";
    if (t.length > 0 && An(t)) return t;
    if (typeof e.remote == "string" && e.remote.length > 0 && An(e.remote)) return e.remote.trim();
  }, It = (e, t) => {
    if (!e) return false;
    if (e.startsWith("data:model/gltf")) return true;
    const n = (t == null ? void 0 : t.toLowerCase()) ?? "", i = e.split("?")[0].toLowerCase();
    return n.endsWith(".glb") || n.endsWith(".gltf") || i.endsWith(".glb") || i.endsWith(".gltf");
  }, Xt = (e) => {
    const t = (i) => Math.min(56, Math.max(26, Math.floor(i / 5))), n = (i) => Math.min(40, Math.max(18, Math.floor(i / 7)));
    return {
      alignment: "bottom-right",
      margin: [
        t(e.width),
        n(e.height)
      ]
    };
  }, rt = (e, t) => {
    const n = new Map((e.types ?? []).map((s) => [
      s.guid,
      s
    ])), i = new Map((e.files ?? []).map((s) => [
      s.guid,
      s
    ]));
    return t.filter(({ piece: s }) => s.plane && s.center).map(({ piece: s, status: a }) => {
      var _a2, _b, _c, _d, _e2, _f, _g;
      const c = (_a2 = s.type) == null ? void 0 : _a2.guid;
      let d = c ? n.get(c) : void 0;
      !d && ((_b = s.type) == null ? void 0 : _b.name) && (d = (_c = e.types) == null ? void 0 : _c.find((u) => u.name === s.type.name));
      let l, b = ((_d = d == null ? void 0 : d.models) == null ? void 0 : _d.length) ? Ko(d.models, []) : void 0;
      if (((_e2 = b == null ? void 0 : b.file) == null ? void 0 : _e2.guid) && (l = i.get(b.file.guid)), !It(pt(l), l == null ? void 0 : l.name) && ((_f = d == null ? void 0 : d.models) == null ? void 0 : _f.length)) for (const u of d.models) {
        const y = ((_g = u.file) == null ? void 0 : _g.guid) ? i.get(u.file.guid) : void 0;
        if (y && It(pt(y), y.name)) {
          b = u, l = y;
          break;
        }
      }
      return {
        piece: s,
        status: a,
        modelName: l == null ? void 0 : l.name,
        modelSource: pt(l)
      };
    });
  }, Gt = (e) => new D(e.x, e.y, e.z).applyMatrix4(Ft), Jt = (e, t) => {
    const n = t ? Fo(e, t) : e, i = /* @__PURE__ */ new Map();
    (n.pieces ?? []).forEach((s) => {
      var _a2, _b;
      if (!s.guid) return;
      const a = t ? nn(s.attributes) : "default", c = i.get(s.guid), d = s.plane && s.center ? s : ((_a2 = c == null ? void 0 : c.piece) == null ? void 0 : _a2.plane) && ((_b = c == null ? void 0 : c.piece) == null ? void 0 : _b.center) ? {
        ...s,
        plane: c.piece.plane,
        center: c.piece.center
      } : s;
      !d.plane || !d.center || i.set(s.guid, {
        piece: d,
        status: c ? a !== "default" ? a : c.status : a
      });
    });
    const r = new Map(Array.from(i.values()).map((s) => [
      s.piece.guid,
      s.piece
    ])), o = /* @__PURE__ */ new Map();
    if ((n.connections ?? []).forEach((s) => {
      if (!s.guid) return;
      const a = r.get(s.connected.piece.guid), c = r.get(s.connecting.piece.guid);
      if (!(a == null ? void 0 : a.plane) || !(c == null ? void 0 : c.plane) || !(a == null ? void 0 : a.center) || !(c == null ? void 0 : c.center)) return;
      const d = t ? nn(s.attributes) : "default";
      o.set(s.guid, {
        connection: s,
        sourcePiece: a,
        targetPiece: c,
        status: d
      });
    }), t) {
      for (const s of o.values()) if (s.status !== "default") {
        const a = s.connection.connecting.piece.guid, c = i.get(a);
        c && c.status === "default" && (c.status = "modified");
      }
    }
    return {
      pieces: Array.from(i.values()),
      connections: Array.from(o.values())
    };
  }, Gi = (e) => {
    const t = Es(e);
    return new We().multiplyMatrices(Ft, t).multiply(Qa);
  }, On = (e, t, n) => {
    const i = new Dt();
    let r = false;
    const o = (s) => {
      const a = new Dt().setFromObject(s);
      !Number.isFinite(a.min.x) || !Number.isFinite(a.max.x) || a.isEmpty() || (r ? i.union(a) : (i.copy(a), r = true));
    };
    for (const s of t) {
      const a = e.get(s);
      a && o(a);
    }
    for (const s of n) {
      const a = e.get(s);
      a && o(a);
    }
    return r ? (i.expandByScalar(Ja), i) : null;
  }, un = h.createContext(null), ec = ({ children: e }) => {
    const t = h.useRef(/* @__PURE__ */ new Map()), n = h.useMemo(() => ({
      registerBoundsRoot: (i, r) => {
        t.current.set(i, r);
      },
      unregisterBoundsRoot: (i) => {
        t.current.delete(i);
      },
      rootsRef: t
    }), []);
    return S.jsx(un.Provider, {
      value: n,
      children: e
    });
  }, tc = ({ selectedPieceGuids: e, selectedConnectionGuids: t }) => {
    const n = h.useContext(un), { invalidate: i } = mt(), r = h.useRef(null), o = h.useRef(null), [s, a] = h.useState(() => fe("--accent") || "#3b82f6");
    h.useEffect(() => {
      const l = () => a(fe("--accent") || "#3b82f6");
      l();
      const b = new MutationObserver(l);
      return b.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [
          "class"
        ]
      }), () => b.disconnect();
    }, []);
    const c = e.size > 0 || t.size > 0, d = h.useMemo(() => `${Array.from(e).sort().join(",")}|${Array.from(t).sort().join(",")}`, [
      e,
      t
    ]);
    return h.useLayoutEffect(() => {
      c && i();
    }, [
      i,
      d,
      c
    ]), No(() => {
      if (!n || !c) {
        r.current && (r.current.visible = false);
        return;
      }
      const l = On(n.rootsRef.current, e, t);
      if (!l || l.isEmpty()) {
        r.current && (r.current.visible = false);
        return;
      }
      const b = r.current, u = o.current;
      if (!b || !u) return;
      b.visible = true;
      const y = new D(), P = new D();
      l.getCenter(y), l.getSize(P), b.position.copy(y), u.scale.set(Math.max(P.x, 0.06), Math.max(P.y, 0.06), Math.max(P.z, 0.06));
    }), S.jsx("group", {
      ref: r,
      raycast: () => null,
      visible: false,
      children: S.jsxs("mesh", {
        ref: o,
        raycast: () => null,
        children: [
          S.jsx("boxGeometry", {
            args: [
              1,
              1,
              1
            ]
          }),
          S.jsx("meshStandardMaterial", {
            color: s,
            depthWrite: false,
            metalness: 0,
            opacity: Mi,
            roughness: 1,
            transparent: true
          }),
          S.jsx(_o, {
            color: s,
            opacity: Ai,
            threshold: 18,
            transparent: true
          })
        ]
      })
    });
  }, Eo = (e) => new zo({
    color: e,
    metalness: 0,
    roughness: 1
  }), Ni = (e) => new Ct({
    color: e
  }), nc = (e) => new Rn({
    color: e,
    size: 1
  }), eo = "__semioSceneMeshOutline", oc = (e, t) => {
    const n = new ut(new Ss(e), Ni(t));
    return n.name = "SemioSceneMeshOutline", n.scale.setScalar(1.001), n.userData[eo] = true, n;
  }, Un = (e, t, n) => {
    const i = Os(e);
    return i.traverse((r) => {
      if (r instanceof lt) {
        Array.isArray(r.material) ? r.material = r.material.map(() => Eo(t)) : r.material = Eo(t);
        const o = r.geometry;
        o && r.add(oc(o, n));
        return;
      }
      if (r instanceof qo || r instanceof ut) {
        if (r.userData[eo]) return;
        r.material = Ni(n);
        return;
      }
      r instanceof Fn && (r.material = nc(n));
    }), i;
  }, Oi = (e, t) => {
    e.traverse((n) => {
      if (n instanceof lt) {
        (Array.isArray(n.material) ? n.material : [
          n.material
        ]).forEach((r) => {
          if (!r || !("color" in r)) return;
          const o = r;
          o.color.set(t.meshColor), o.emissive.set(t.emissiveColor ?? "#000000"), o.emissiveIntensity = t.emissiveIntensity, o.transparent = t.opacity < 1, o.opacity = t.opacity;
        });
        return;
      }
      if (n instanceof qo || n instanceof ut || n instanceof Fn) {
        const i = n.material;
        if (!i || !("color" in i)) return;
        i.color.set(t.lineColor), i.transparent = t.opacity < 1, i.opacity = t.opacity;
      }
    });
  }, _n = (e, t, n) => {
    const i = e !== "default", r = e === "removed", o = je("var(--muted-foreground)", "#888888"), s = i ? je(Kt(e), "#888888") : o, a = t ? je(Ye(e, true, false), "#3b82f6") : null, c = n ? je(Ye(e, false, true), "#60a5fa") : null;
    return {
      meshColor: t ? a ?? s : n ? c ?? s : s,
      lineColor: t ? a ?? s : n ? c ?? s : s,
      emissiveColor: t ? a ?? s : n ? c ?? s : i ? s : void 0,
      emissiveIntensity: t ? 0.35 : n ? 0.15 : i ? 0.4 : 0,
      opacity: r ? 0.35 : 1
    };
  }, ic = ({ modelSource: e, status: t, isSelected: n, isHovered: i }) => {
    const r = gs(e, false, false), { invalidate: o } = mt(), s = Jo(), a = h.useMemo(() => Un(r.scene, "#888888", "#888888"), [
      r.scene
    ]);
    return h.useEffect(() => {
      Oi(a, _n(t, n, i)), o();
    }, [
      a,
      o,
      t,
      i,
      n
    ]), h.useLayoutEffect(() => {
      s.refresh(), s.fit(), o();
    }, [
      s,
      a,
      o
    ]), S.jsx(Gn, {
      object: a
    });
  }, sc = ({ piece: e, status: t, modelName: n, modelSource: i, isSelected: r, isHovered: o, onPointerEnter: s, onPointerLeave: a, onClick: c, onDoubleClick: d }) => {
    const l = h.useMemo(() => je(Kt(t), "#888888"), [
      t
    ]), b = h.useMemo(() => je(Ye(t, true, false), "#3b82f6"), [
      t
    ]), u = h.useMemo(() => je(Ye(t, false, true), "#60a5fa"), [
      t
    ]), y = h.useMemo(() => {
      if (!e.plane || !e.center) return null;
      const N = Gi(e.plane), _ = e.scale;
      return _ != null && _ !== 1 && Number.isFinite(_) && N.multiply(new We().makeScale(_, _, _)), N;
    }, [
      e.plane,
      e.center,
      e.scale
    ]), P = h.useContext(un), x = h.useRef(null), k = r ? b : o ? u : l, A = k, g = t === "removed";
    if (!y) return null;
    const v = It(i, n);
    h.useLayoutEffect(() => {
      if (!P || !e.guid) return;
      const N = x.current;
      return N && P.registerBoundsRoot(e.guid, N), () => P.unregisterBoundsRoot(e.guid);
    }, [
      P,
      e.guid,
      y,
      v,
      i
    ]);
    const G = c ? (N) => {
      N.stopPropagation(), c();
    } : void 0, U = d ? (N) => {
      N.stopPropagation(), d();
    } : void 0, C = s ? (N) => {
      N.stopPropagation(), s();
    } : void 0, M = a ? (N) => {
      N.stopPropagation(), a();
    } : void 0;
    return S.jsx("group", {
      ref: x,
      matrix: y,
      matrixAutoUpdate: false,
      children: v && i ? S.jsx("group", {
        onClick: G,
        onDoubleClick: U,
        onPointerEnter: C,
        onPointerLeave: M,
        children: S.jsx(h.Suspense, {
          fallback: null,
          children: S.jsx(ic, {
            modelSource: i,
            status: t,
            isSelected: r,
            isHovered: o
          })
        })
      }) : S.jsxs("mesh", {
        onClick: G,
        onDoubleClick: U,
        onPointerEnter: C,
        onPointerLeave: M,
        children: [
          S.jsx("boxGeometry", {
            args: [
              Mn,
              Mn,
              Mn
            ]
          }),
          S.jsx("meshStandardMaterial", {
            color: k,
            emissive: k,
            emissiveIntensity: r ? 0.45 : o ? 0.2 : 0.05,
            transparent: g,
            opacity: g ? 0.35 : 1
          }),
          S.jsx(_o, {
            scale: 1.001,
            color: A
          })
        ]
      })
    });
  }, rc = ({ connection: e, sourcePiece: t, targetPiece: n, status: i, isSelected: r, isHovered: o, onPointerEnter: s, onPointerLeave: a, onClick: c }) => {
    const d = h.useMemo(() => je(Kt(i), "#888888"), [
      i
    ]), l = h.useMemo(() => je(Ye(i, true, false), "#3b82f6"), [
      i
    ]), b = h.useMemo(() => je(Ye(i, false, true), "#60a5fa"), [
      i
    ]), u = h.useContext(un), y = h.useRef(null), P = h.useMemo(() => t.plane && t.center ? Gt(t.plane.origin) : null, [
      t.plane,
      t.center
    ]), x = h.useMemo(() => n.plane && n.center ? Gt(n.plane.origin) : null, [
      n.plane,
      n.center
    ]), k = h.useMemo(() => {
      if (!P || !x) return null;
      const C = x.clone().sub(P), M = C.length();
      if (M <= 1e-4) return null;
      const N = P.clone().add(x).multiplyScalar(0.5), _ = new dt().setFromUnitVectors(new D(0, 1, 0), C.normalize());
      return {
        midpoint: N,
        quaternion: _,
        length: M
      };
    }, [
      x,
      P
    ]);
    if (!k) return null;
    const A = r ? l : o ? b : d, g = r ? 0.14 : o ? 0.11 : 0.08;
    h.useLayoutEffect(() => {
      if (!u || !e.guid) return;
      const C = y.current;
      return C && u.registerBoundsRoot(e.guid, C), () => u.unregisterBoundsRoot(e.guid);
    }, [
      u,
      e.guid,
      k,
      g
    ]);
    const v = c ? (C) => {
      C.stopPropagation(), c();
    } : void 0, G = s ? (C) => {
      C.stopPropagation(), s();
    } : void 0, U = a ? (C) => {
      C.stopPropagation(), a();
    } : void 0;
    return S.jsxs("mesh", {
      ref: y,
      name: e.guid,
      position: k.midpoint,
      quaternion: k.quaternion,
      onClick: v,
      onPointerEnter: G,
      onPointerLeave: U,
      children: [
        S.jsx("cylinderGeometry", {
          args: [
            g,
            g,
            k.length,
            12
          ]
        }),
        S.jsx("meshStandardMaterial", {
          color: A,
          emissive: A,
          emissiveIntensity: r ? 0.45 : o ? 0.2 : 0.05,
          transparent: i === "removed",
          opacity: i === "removed" ? 0.35 : 1
        })
      ]
    });
  }, ac = ({ show: e, onAxisClick: t }) => {
    const { size: n } = mt(), [i, r] = h.useState(() => [
      fe("--accent") || "#ef4444",
      fe("--accent-tertiary") || "#22c55e",
      fe("--accent-secondary") || "#3b82f6"
    ]), o = h.useMemo(() => Xt(n), [
      n
    ]), s = h.useMemo(() => [
      0.88,
      0.036,
      0.036
    ], []), a = h.useMemo(() => fe("--foreground") || "#111827", []);
    return h.useEffect(() => {
      const c = () => r([
        fe("--accent") || "#ef4444",
        fe("--accent-tertiary") || "#22c55e",
        fe("--accent-secondary") || "#3b82f6"
      ]);
      c();
      const d = new MutationObserver(c);
      return d.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [
          "class"
        ]
      }), () => d.disconnect();
    }, []), e ? S.jsx(ms, {
      alignment: o.alignment,
      margin: o.margin,
      children: S.jsx(fs, {
        labels: [
          "X",
          "Z",
          "-Y"
        ],
        axisColors: i,
        axisScale: s,
        axisHeadScale: 0.92,
        hideNegativeAxes: true,
        labelColor: a,
        font: "16px Inter var, Arial, sans-serif",
        onClick: t ? (c) => (t(c.object.position.clone()), null) : void 0
      })
    }) : null;
  }, cc = ({ show: e }) => {
    const [t, n] = h.useState({
      sectionColor: fe("--foreground") || "#888888",
      cellColor: fe("--accent-foreground") || "#cccccc"
    });
    return h.useEffect(() => {
      const i = () => n({
        sectionColor: fe("--foreground") || "#888888",
        cellColor: fe("--accent-foreground") || "#cccccc"
      });
      i();
      const r = new MutationObserver(i);
      return r.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [
          "class"
        ]
      }), () => r.disconnect();
    }, []), e ? S.jsx(ps, {
      infiniteGrid: true,
      sectionColor: t.sectionColor,
      cellColor: t.cellColor
    }) : null;
  }, Ui = (e, t) => {
    if (t === "none") return null;
    const i = (t === "diff" ? e.pieces.filter((o) => o.status !== "default") : e.pieces).filter((o) => o.piece.plane && o.piece.center).map((o) => Gt(o.piece.plane.origin));
    if (i.length === 0) return t === "diff" ? Ui(e, "design") : null;
    const r = new Dt();
    return i.forEach((o) => r.expandByPoint(o)), r;
  }, dc = ({ zoomTarget: e, snapshot: t }) => {
    const n = Jo(), i = h.useRef(false), r = h.useMemo(() => `${e}|${t.pieces.map((o) => `${o.piece.guid}:${o.status}`).join(";")}|c:${t.connections.length}|p:${t.pieces.length}`, [
      t.connections.length,
      t.pieces,
      e
    ]);
    return h.useEffect(() => {
      i.current = false;
    }, [
      r
    ]), h.useEffect(() => {
      if (i.current) return;
      const o = Ui(t, e);
      o && n.refresh(o).fit(), i.current = true;
    }, [
      n,
      t,
      r,
      e
    ]), null;
  }, lc = ({ showGrid: e, showGizmo: t, zoomTarget: n, snapshot: i, camera: r, onCameraChange: o, onAxisClick: s, onOrbitEnd: a, children: c }) => {
    const { camera: d, invalidate: l } = mt(), b = h.useRef(null), u = h.useRef(false), y = h.useRef(false);
    h.useEffect(() => {
      const x = d;
      x && x instanceof ws && (x.zoom = 50, x.updateProjectionMatrix(), l());
    }, [
      l,
      d
    ]), h.useLayoutEffect(() => {
      l();
      const x = requestAnimationFrame(() => l()), k = [
        0,
        50,
        150,
        300
      ].map((A) => window.setTimeout(() => l(), A));
      return () => {
        cancelAnimationFrame(x), k.forEach((A) => window.clearTimeout(A));
      };
    }, [
      c,
      r,
      l,
      t,
      e,
      i,
      n
    ]), h.useEffect(() => {
      if (!(!d || !b.current || y.current)) {
        if (!r) {
          y.current = true;
          return;
        }
        u.current = true, requestAnimationFrame(() => {
          if (!b.current) return;
          d.position.set(r.position.x, r.position.y, r.position.z), d.up.set(r.up.x, r.up.y, r.up.z);
          const x = new D(r.position.x + r.forward.x, r.position.y + r.forward.y, r.position.z + r.forward.z);
          b.current.target.copy(x), d.updateProjectionMatrix(), b.current.update(), l(), setTimeout(() => {
            u.current = false;
          }, 300);
        }), y.current = true;
      }
    }, [
      r,
      l,
      d
    ]);
    const P = h.useCallback(() => {
      if (u.current || (a == null ? void 0 : a(), !o || !b.current)) return;
      const x = d.position, k = b.current.target, A = new D().subVectors(k, x);
      if (A.lengthSq() < 1e-3) return;
      const g = A.normalize(), v = d.up;
      o({
        position: {
          x: x.x,
          y: x.y,
          z: x.z
        },
        forward: {
          x: g.x,
          y: g.y,
          z: g.z
        },
        up: {
          x: v.x,
          y: v.y,
          z: v.z
        }
      }), l();
    }, [
      l,
      o,
      a,
      d
    ]);
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx(Uo, {
          ref: b,
          enableDamping: false,
          onEnd: P
        }),
        S.jsx("ambientLight", {
          intensity: 1
        }),
        S.jsxs(Ns, {
          maxDuration: 0.5,
          margin: 1.2,
          children: [
            c,
            !r && n !== "none" && S.jsx(dc, {
              zoomTarget: n,
              snapshot: i
            })
          ]
        }),
        S.jsx(cc, {
          show: e
        }),
        S.jsx(ac, {
          show: t,
          onAxisClick: s
        })
      ]
    });
  }, _i = ({ design: e, kit: t, designDiff: n, defaultDesignDiff: i, diffEnabled: r = true, zoomTarget: o, selection: s, defaultSelection: a, selectionEnabled: c = true, pieceSelectionEnabled: d = true, connectionSelectionEnabled: l = true, onSelectionChange: b, hover: u, defaultHover: y, hoverEnabled: P = true, pieceHoverEnabled: x = true, connectionHoverEnabled: k = true, onHoverChange: A, onPieceClick: g, onPieceDoubleClick: v, onConnectionClick: G, showGrid: U = true, showGizmo: C = true, camera: M, onCameraChange: N, onProjectionChange: _, className: de = "", title: le = "Design Scene" }) => {
    const ue = ki(n, i), he = h.useMemo(() => Jt(e, r ? ue : void 0), [
      e,
      ue,
      r
    ]), te = o ?? (r && ue ? "diff" : "design"), Z = c && d, ne = c && l, oe = P && x && (Z || !!g || !!v), L = P && k && (ne || !!G), [q, Y] = _e(s, Ti(a), b), [X, pe] = _e(u, on(y), A), ze = h.useMemo(() => new Set(q.pieceGuids ?? []), [
      q.pieceGuids
    ]), Te = h.useMemo(() => new Set(q.connectionGuids ?? []), [
      q.connectionGuids
    ]), me = oe ? X.pieceGuid ?? null : null, qe = L ? X.connectionGuid ?? null : null, ee = h.useCallback((R) => {
      if (!Z) return;
      const B = new Set(q.pieceGuids ?? []);
      B.has(R) ? B.delete(R) : B.add(R), Y({
        pieceGuids: Array.from(B),
        connectionGuids: q.connectionGuids ?? []
      });
    }, [
      Z,
      q.connectionGuids,
      q.pieceGuids,
      Y
    ]), Se = h.useCallback((R) => {
      if (!ne) return;
      const B = new Set(q.connectionGuids ?? []);
      B.has(R) ? B.delete(R) : B.add(R), Y({
        pieceGuids: q.pieceGuids ?? [],
        connectionGuids: Array.from(B)
      });
    }, [
      ne,
      q.connectionGuids,
      q.pieceGuids,
      Y
    ]), K = h.useCallback((R) => {
      oe && pe({
        pieceGuid: R,
        connectionGuid: X.connectionGuid ?? null
      });
    }, [
      oe,
      X.connectionGuid,
      pe
    ]), ye = h.useCallback((R) => {
      L && pe({
        pieceGuid: X.pieceGuid ?? null,
        connectionGuid: R
      });
    }, [
      L,
      X.pieceGuid,
      pe
    ]), W = h.useCallback(() => {
      c && Y({
        pieceGuids: [],
        connectionGuids: []
      });
    }, [
      c,
      Y
    ]), ie = h.useMemo(() => rt(t ?? {
      types: [],
      files: []
    }, he.pieces), [
      t,
      he.pieces
    ]), Be = h.useRef(false), $ = h.useCallback((R) => {
      Be.current = true, _ == null ? void 0 : _("orthographic");
    }, [
      _
    ]), Ie = h.useCallback(() => {
      Be.current && (Be.current = false, _ == null ? void 0 : _("camera"));
    }, [
      _
    ]);
    return S.jsx("div", {
      className: `h-full w-full ${de}`,
      "aria-label": le,
      children: S.jsx(Oo, {
        onPointerMissed: W,
        orthographic: true,
        frameloop: "demand",
        camera: {
          zoom: 50,
          position: [
            10,
            10,
            10
          ],
          near: -1e4,
          far: 1e4
        },
        style: {
          width: "100%",
          height: "100%"
        },
        children: S.jsx(ec, {
          children: S.jsxs(lc, {
            showGrid: U,
            showGizmo: C,
            zoomTarget: te,
            snapshot: he,
            camera: M,
            onCameraChange: N,
            onAxisClick: _ ? $ : void 0,
            onOrbitEnd: _ ? Ie : void 0,
            children: [
              S.jsx(tc, {
                selectedConnectionGuids: Te,
                selectedPieceGuids: ze
              }),
              he.connections.map(({ connection: R, sourcePiece: B, targetPiece: Ze, status: Xe }) => S.jsx(rc, {
                connection: R,
                sourcePiece: B,
                targetPiece: Ze,
                status: Xe,
                isSelected: Te.has(R.guid),
                isHovered: qe === R.guid,
                onClick: ne || G ? () => {
                  Se(R.guid), G == null ? void 0 : G(R);
                } : void 0,
                onPointerEnter: L ? () => ye(R.guid) : void 0,
                onPointerLeave: L ? () => ye((X.connectionGuid ?? null) === R.guid ? null : X.connectionGuid ?? null) : void 0
              }, R.guid)),
              ie.map(({ piece: R, status: B, modelName: Ze, modelSource: Xe }) => S.jsx(sc, {
                piece: R,
                status: B,
                modelName: Ze,
                modelSource: Xe,
                isSelected: ze.has(R.guid),
                isHovered: me === R.guid,
                onClick: Z || g ? () => {
                  ee(R.guid), g == null ? void 0 : g(R);
                } : void 0,
                onPointerEnter: oe ? () => K(R.guid) : void 0,
                onPointerLeave: oe ? () => K((X.pieceGuid ?? null) === R.guid ? null : X.pieceGuid ?? null) : void 0
              }, R.guid))
            ]
          })
        })
      })
    });
  }, ji = 0.45, Co = 1, Mo = new D(0, 0, 0), uc = 0.35, Ao = (e, t) => {
    var _a2, _b;
    const n = e.models ?? [];
    if (n.length === 0) return {};
    const i = new Map(((t == null ? void 0 : t.files) ?? []).map((s) => [
      s.guid,
      s
    ]));
    let r = Ko(n, []), o = ((_a2 = r == null ? void 0 : r.file) == null ? void 0 : _a2.guid) ? i.get(r.file.guid) : void 0;
    if (!It(pt(o), o == null ? void 0 : o.name)) for (const s of n) {
      const a = ((_b = s.file) == null ? void 0 : _b.guid) ? i.get(s.file.guid) : void 0;
      if (a && It(pt(a), a.name)) {
        r = s, o = a;
        break;
      }
    }
    return r ? {
      modelName: o == null ? void 0 : o.name,
      modelSource: pt(o)
    } : {};
  }, To = (e) => {
    const t = new Dt();
    let n = false;
    return (e.connectors ?? []).forEach((i) => {
      const r = Gt(i.point), o = new D(i.direction.x, i.direction.y, i.direction.z), s = o.lengthSq() > 1e-6 ? o.applyMatrix4(Ft).normalize() : new D(0, 0, 1), a = r.clone().add(s.multiplyScalar(ji));
      t.expandByPoint(r), t.expandByPoint(a), n = true;
    }), n ? (t.expandByScalar(uc), t) : (t.expandByPoint(Mo.clone().addScalar(-Co * 0.5)), t.expandByPoint(Mo.clone().addScalar(Co * 0.5)), t);
  };
  function Yt(e, t, n) {
    const i = Math.max(0.1, Math.min(0.9, n)) * 100, r = 100 - i;
    return e === "always" || t ? `${i}% ${r}%` : "1fr";
  }
  function Tn(e, t) {
    return e === "always" || t;
  }
  const sn = (e) => {
    if (e == null || typeof e != "object" || Array.isArray(e)) return true;
    const t = e, n = typeof t.name == "string" ? t.name.trim() : "", i = typeof t.guid == "string" ? t.guid.trim() : "", r = Array.isArray(t.designs) ? t.designs.length : 0, o = Array.isArray(t.types) ? t.types.length : 0, s = Array.isArray(t.ports) ? t.ports.length : 0, a = Array.isArray(t.connectors) ? t.connectors.length : 0;
    return n.length === 0 && i.length === 0 && r === 0 && o === 0 && s === 0 && a === 0;
  }, at = (e) => {
    const t = e.kitArtifacts, n = t != null && typeof t == "object" && !Array.isArray(t) && !sn(t), i = Array.isArray(e.points) && Array.isArray(e.lines), r = typeof e.mode == "string" ? e.mode : void 0, o = e.design, s = o != null && typeof o == "object" && !Array.isArray(o), a = e.designDiff, c = a != null && typeof a == "object" && !Array.isArray(a), d = e.kit, l = d != null && typeof d == "object" && !Array.isArray(d), b = typeof e.fetchUrl == "string" ? e.fetchUrl : void 0, u = e.surface, y = u === "design" || u === "scene" || u === "diagram" ? u : void 0;
    return !n && !i && !s && !b && !y ? null : {
      points: Array.isArray(e.points) ? e.points : [],
      lines: Array.isArray(e.lines) ? e.lines : [],
      capabilities: e.capabilities,
      kitArtifacts: n ? e.kitArtifacts : void 0,
      mode: r,
      surface: y,
      design: s ? o : void 0,
      designDiff: c ? a : void 0,
      kit: l ? d : void 0,
      fetchUrl: b
    };
  }, zi = (e) => {
    const t = e.design;
    if (!t || typeof t != "object") return 0;
    const n = t, i = Array.isArray(n.pieces) ? n.pieces.length : 0, r = Array.isArray(n.connections) ? n.connections.length : 0;
    return i * 20 + r * 10;
  }, rn = (e) => {
    const t = e.design;
    if (!t || typeof t != "object") return 0;
    const n = t.pieces;
    if (!Array.isArray(n)) return 0;
    let i = 0;
    for (const r of n) {
      if (!r || typeof r != "object") continue;
      const o = r.plane, s = r.center;
      o && s && (i += 1);
    }
    return i * 200;
  }, Bo = (e) => zi(e) + rn(e), jn = (e) => {
    var _a2, _b, _c, _d;
    let t = 0;
    Array.isArray(e.points) && Array.isArray(e.lines) && (t += 1), t += e.points.length + e.lines.length, e.surface === "design" ? t += 500 : e.surface === "scene" && (t += 200);
    const i = e.kitArtifacts;
    return i && (t += (((_a2 = i.designs) == null ? void 0 : _a2.length) ?? 0) * 10 + (((_b = i.types) == null ? void 0 : _b.length) ?? 0) * 10 + (((_c = i.ports) == null ? void 0 : _c.length) ?? 0) + (((_d = i.connectors) == null ? void 0 : _d.length) ?? 0), typeof i.name == "string" && i.name.trim().length > 0 && (t += 50), typeof i.guid == "string" && i.guid.trim().length > 0 && (t += 10)), (e.mode === "show-design" || e.mode === "show-scene") && (t += 400), e.design && (t += 300), e.kit && (t += 100), t += zi(e), t += rn(e), t;
  }, Oe = (e, t, n) => t || n ? false : e === "show-diagram" || e === "show-diagram-diff" || e === "select-pieces" || e === "select-connections" || e === "select-pieces-and-connections", pc = /* @__PURE__ */ new Set([
    "show-design",
    "show-scene",
    "show-diff",
    "show-diagram-diff"
  ]), zn = (e, t) => {
    var _a2, _b;
    if (!t) return null;
    let n = t, i = Bo(t);
    for (const l of e) {
      if (!l) continue;
      if (l.design) {
        const y = Bo({
          ...n,
          design: l.design
        });
        y > i && (i = y, n = {
          ...n,
          design: l.design
        }, l.surface && (n = {
          ...n,
          surface: l.surface
        }));
      }
      !n.fetchUrl && l.fetchUrl && (n = {
        ...n,
        fetchUrl: l.fetchUrl
      }), !n.kit && l.kit && (n = {
        ...n,
        kit: l.kit
      }), !n.mode && l.mode && (n = {
        ...n,
        mode: l.mode
      });
      const b = ((_a2 = n.points) == null ? void 0 : _a2.length) ?? 0;
      (((_b = l.points) == null ? void 0 : _b.length) ?? 0) > b && Array.isArray(l.points) && (n = {
        ...n,
        points: l.points,
        lines: Array.isArray(l.lines) ? l.lines : n.lines ?? []
      });
    }
    const r = n.design && typeof n.design == "object" ? n.design.guid : void 0;
    if (typeof r == "string" && r.length > 0) {
      const l = {
        "show-scene": 1,
        "show-design": 2,
        "show-diff": 3,
        "show-diagram-diff": 4
      };
      let b, u = 999;
      for (const y of e) {
        if (!(y == null ? void 0 : y.mode) || !y.design || typeof y.design != "object" || y.design.guid !== r || !pc.has(y.mode)) continue;
        const x = l[y.mode] ?? 99;
        (!b || x < u) && (b = y.mode, u = x);
      }
      b && (n = {
        ...n,
        mode: b
      });
    }
    const o = n.design && typeof n.design == "object" ? n.design.guid : void 0;
    if (typeof o == "string" && o.length > 0) {
      const l = {
        scene: 1,
        design: 2,
        diagram: 3
      };
      let b, u = 999;
      for (const y of e) {
        if (!(y == null ? void 0 : y.surface) || !y.design || typeof y.design != "object" || y.design.guid !== o || y.surface !== "design" && y.surface !== "scene" && y.surface !== "diagram") continue;
        const x = l[y.surface] ?? 99;
        (!b || x < u) && (b = y.surface, u = x);
      }
      b && (n = {
        ...n,
        surface: b
      });
    }
    const s = n.design && typeof n.design == "object" ? n.design.guid : void 0;
    if (typeof s == "string" && s.length > 0) {
      const l = rn({
        ...n,
        design: n.design
      });
      let b = n.design, u = l;
      for (const y of e) {
        if (!(y == null ? void 0 : y.design) || typeof y.design != "object" || y.design.guid !== s) continue;
        const P = rn({
          ...n,
          design: y.design
        });
        P > u && (u = P, b = y.design);
      }
      u > l && (n = {
        ...n,
        design: b
      });
    }
    let a = n.kitArtifacts && !sn(n.kitArtifacts) ? n.kitArtifacts : void 0, c = a !== void 0 ? jn({
      points: [],
      lines: [],
      kitArtifacts: a
    }) : -1;
    for (const l of e) {
      if (!(l == null ? void 0 : l.kitArtifacts) || sn(l.kitArtifacts)) continue;
      const b = jn({
        points: [],
        lines: [],
        kitArtifacts: l.kitArtifacts
      });
      b > c && (c = b, a = l.kitArtifacts);
    }
    a !== void 0 && (n = {
      ...n,
      kitArtifacts: a
    });
    const d = n.mode ?? "show-diagram";
    return d === "show-design" || d === "show-diff" || d === "show-diagram-diff" ? n = {
      ...n,
      surface: "design"
    } : d === "show-scene" && (n = {
      ...n,
      surface: "scene"
    }), n;
  }, mc = (e) => {
    let t = null, n = -1;
    for (const i of e) {
      if (!i) continue;
      const r = jn(i);
      r > n && (n = r, t = i);
    }
    return n >= 0 ? t : null;
  }, Do = (e) => (e == null ? void 0 : e.kitArtifacts) ? !sn(e.kitArtifacts) : false, an = (e, t = 0) => {
    if (t > 12 || e === null || typeof e != "object") return null;
    if (Array.isArray(e)) {
      for (const i of e) {
        const r = an(i, t + 1);
        if (r) return r;
      }
      return null;
    }
    const n = e;
    if (typeof n.path == "string" && n.path.trim().length > 0) return {
      path: n.path.trim()
    };
    if (typeof n.serverUrl == "string" && typeof n.kitUri == "string" && n.serverUrl.trim().length > 0 && n.kitUri.trim().length > 0) return {
      serverUrl: n.serverUrl.trim(),
      kitUri: n.kitUri.trim()
    };
    for (const i of Object.values(n)) {
      const r = an(i, t + 1);
      if (r) return r;
    }
    return null;
  }, qn = (e, t = 0) => {
    if (t > 12 || e === null || typeof e != "object") return null;
    if (Array.isArray(e)) {
      for (const r of e) {
        const o = qn(r, t + 1);
        if (o) return o;
      }
      return null;
    }
    const n = e, i = at(n);
    if (i) return i;
    for (const r of Object.values(n)) {
      const o = qn(r, t + 1);
      if (o) return o;
    }
    return null;
  }, xe = (e) => {
    if (!e || typeof e != "object") return null;
    let t = e;
    const n = t.params;
    n && typeof n == "object" && ("content" in n || "structuredContent" in n) && (t = n);
    const i = [], r = t.structuredContent;
    if (r != null) if (typeof r == "string") try {
      const s = JSON.parse(r);
      s && typeof s == "object" && i.push(at(s));
    } catch {
    }
    else typeof r == "object" && !Array.isArray(r) && i.push(at(r));
    const o = t.content;
    if (Array.isArray(o)) {
      const s = [];
      for (const c of o) {
        if (!c || typeof c != "object") continue;
        const d = c;
        d.type === "text" && typeof d.text == "string" && s.push(d.text), d.type === "resource" && d.resource && typeof d.resource.text == "string" && s.push(d.resource.text), !d.type && d.resource && typeof d.resource.text == "string" && s.push(d.resource.text);
      }
      for (const c of s) {
        const d = c.trim();
        if (d.length !== 0) try {
          const l = JSON.parse(d);
          l && typeof l == "object" && i.push(at(l));
        } catch {
        }
      }
      const a = s.join("").trim();
      if (a.length > 0) try {
        const c = JSON.parse(a);
        c && typeof c == "object" && i.push(at(c));
      } catch {
      }
    }
    return i.push(at(t)), i.push(qn(t)), zn(i, mc(i));
  };
  function ct(e) {
    if (!e) return "diagram";
    const t = e.mode ?? "show-diagram";
    return t === "show-design" || t === "show-diff" || t === "show-diagram-diff" ? "design" : t === "show-scene" ? "scene" : t === "show-diagram" ? e.surface === "design" || e.surface === "scene" ? e.surface : "diagram" : e.surface === "design" || e.surface === "scene" || e.surface === "diagram" ? e.surface : "diagram";
  }
  function Bn(e) {
    var _a2, _b;
    const t = ct(e), n = e.mode ?? "show-diagram", i = e.kit, r = e.design, o = n === "show-diff" || n === "show-diagram-diff", s = r && i ? Kn(r, i, t, o ? e.designDiff : void 0) : o && r && e.designDiff ? At(r, e.designDiff) : void 0, a = r && typeof r == "object" && "guid" in r && typeof r.guid == "string" ? r.guid : void 0, c = (((_a2 = e.points) == null ? void 0 : _a2.length) ?? 0) > 0, d = {
      guid: "__mcp__",
      pieces: e.points.map((P) => ({
        guid: P.guid,
        id: P.id,
        center: {
          u: P.u,
          v: P.v
        }
      })),
      connections: e.lines.map((P) => {
        var _a3, _b2;
        return {
          guid: P.guid,
          connected: {
            piece: {
              guid: ((_a3 = e.points.find((x) => x.u === P.sourceU && x.v === P.sourceV)) == null ? void 0 : _a3.guid) ?? ""
            }
          },
          connecting: {
            piece: {
              guid: ((_b2 = e.points.find((x) => x.u === P.targetU && x.v === P.targetV)) == null ? void 0 : _b2.guid) ?? ""
            }
          }
        };
      })
    }, l = s ?? r, u = ((_b = l == null ? void 0 : l.pieces) == null ? void 0 : _b.some((P) => P.center)) ?? false ? l : c ? d : l ?? d, y = t === "diagram" && !!(e.kitArtifacts && Oe(e.mode, c, a));
    return {
      surface: t,
      design: r,
      designFlat: s,
      kit: i,
      designDiff: e.designDiff,
      isDiff: o,
      diagramDesign: u,
      forKitFallback: y
    };
  }
  function Kn(e, t, n, i) {
    var _a2;
    if (!t) return i ? At(e, i) : e;
    const r = i ? At(e, i) : e;
    if (!(r == null ? void 0 : r.guid)) return r;
    try {
      const o = t.designs ?? [], s = {
        ...t,
        designs: [
          ...o.filter((l) => (l == null ? void 0 : l.guid) !== r.guid),
          r
        ]
      }, a = ks(s, r.guid);
      if (!a.ok) return r;
      const c = (_a2 = a.change.forward) == null ? void 0 : _a2.pieces;
      return c ? At(r, {
        pieces: c
      }) : r;
    } catch {
      return r;
    }
  }
  if (import.meta.vitest) {
    const { describe: e, expect: t, it: n } = import.meta.vitest;
    e("parseDiagramPayloadFromToolResult", () => {
      n("parses JSON from MCP text content blocks", () => {
        var _a2;
        const s = xe({
          content: [
            {
              type: "text",
              text: JSON.stringify({
                points: [],
                lines: [],
                kitArtifacts: {
                  name: "K",
                  designs: [],
                  types: [],
                  ports: [],
                  connectors: []
                }
              })
            }
          ]
        });
        t((_a2 = s == null ? void 0 : s.kitArtifacts) == null ? void 0 : _a2.name).toBe("K");
      }), n("parses structuredContent object (hosts that omit text content)", () => {
        var _a2, _b, _c;
        const s = xe({
          structuredContent: {
            points: [],
            lines: [],
            kitArtifacts: {
              name: "S",
              designs: [
                {
                  guid: "d1",
                  name: "D"
                }
              ],
              types: [],
              ports: [],
              connectors: []
            }
          }
        });
        t((_c = (_b = (_a2 = s == null ? void 0 : s.kitArtifacts) == null ? void 0 : _a2.designs) == null ? void 0 : _b[0]) == null ? void 0 : _c.guid).toBe("d1");
      }), n("parses structuredContent JSON string", () => {
        const s = xe({
          structuredContent: JSON.stringify({
            points: [],
            lines: [],
            capabilities: {},
            kitArtifacts: {
              designs: [],
              types: [],
              ports: [],
              connectors: []
            }
          })
        });
        t(s == null ? void 0 : s.points).toEqual([]);
      }), n("unwraps notification params", () => {
        var _a2;
        const s = xe({
          params: {
            content: [
              {
                type: "text",
                text: JSON.stringify({
                  points: [],
                  lines: [],
                  kitArtifacts: {
                    name: "P",
                    designs: [],
                    types: [],
                    ports: [],
                    connectors: []
                  }
                })
              }
            ]
          }
        });
        t((_a2 = s == null ? void 0 : s.kitArtifacts) == null ? void 0 : _a2.name).toBe("P");
      }), n("reads nested kit payload under arbitrary host keys", () => {
        var _a2;
        const s = xe({
          wrapper: {
            data: {
              points: [],
              lines: [],
              kitArtifacts: {
                name: "Deep",
                designs: [],
                types: [],
                ports: [],
                connectors: []
              }
            }
          }
        });
        t((_a2 = s == null ? void 0 : s.kitArtifacts) == null ? void 0 : _a2.name).toBe("Deep");
      }), n("prefers full text content JSON when structuredContent kitArtifacts is a stripped shell", () => {
        var _a2, _b, _c;
        const a = xe({
          structuredContent: {
            points: [],
            lines: [],
            capabilities: {
              pieceSelection: false,
              connectionSelection: false
            },
            kitArtifacts: {
              designs: [],
              types: [],
              ports: [],
              connectors: []
            }
          },
          content: [
            {
              type: "text",
              text: JSON.stringify({
                points: [],
                lines: [],
                capabilities: {
                  pieceSelection: false,
                  connectionSelection: false
                },
                kitArtifacts: {
                  name: "Metabolism",
                  version: "1",
                  designs: [
                    {
                      guid: "d1",
                      name: "D",
                      variant: "",
                      view: ""
                    }
                  ],
                  types: [
                    {
                      guid: "t1",
                      name: "T",
                      variant: ""
                    }
                  ],
                  ports: [],
                  connectors: []
                }
              })
            }
          ]
        });
        t((_a2 = a == null ? void 0 : a.kitArtifacts) == null ? void 0 : _a2.name).toBe("Metabolism"), t((_c = (_b = a == null ? void 0 : a.kitArtifacts) == null ? void 0 : _b.designs) == null ? void 0 : _c.length).toBe(1);
      }), n("merges show-design from text when structuredContent wins on kit score with show-diagram", () => {
        var _a2;
        const o = {
          mode: "show-diagram",
          points: [],
          lines: [],
          capabilities: {
            pieceSelection: false,
            connectionSelection: false
          },
          kitArtifacts: {
            name: "Metabolism",
            version: "1",
            designs: new Array(12).fill(null).map((c, d) => ({
              guid: `d${d}`,
              name: "",
              variant: "",
              view: ""
            })),
            types: [],
            ports: [],
            connectors: []
          }
        }, a = xe({
          structuredContent: o,
          content: [
            {
              type: "text",
              text: JSON.stringify({
                mode: "show-design",
                surface: "design",
                points: [],
                lines: [],
                capabilities: {
                  pieceSelection: false,
                  connectionSelection: false
                },
                kitArtifacts: {
                  name: "Metabolism",
                  designs: [
                    {
                      guid: "dg1",
                      name: "D",
                      variant: "",
                      view: ""
                    }
                  ],
                  types: [],
                  ports: [],
                  connectors: []
                },
                design: {
                  guid: "dg1",
                  pieces: [
                    {
                      guid: "p1"
                    }
                  ],
                  connections: []
                },
                kit: {
                  name: "Metabolism",
                  designs: [],
                  types: []
                }
              })
            }
          ]
        });
        t((_a2 = a == null ? void 0 : a.design) == null ? void 0 : _a2.guid).toBe("dg1"), t(a == null ? void 0 : a.mode).toBe("show-design"), t(a == null ? void 0 : a.surface).toBe("design");
      }), n("picks design with plane+center for scene when structuredContent has more pieces but no scene geometry", () => {
        var _a2, _b;
        const o = {
          origin: {
            x: 0,
            y: 0,
            z: 0
          },
          xAxis: {
            x: 1,
            y: 0,
            z: 0
          },
          yAxis: {
            x: 0,
            y: 1,
            z: 0
          }
        }, s = {
          mode: "show-design",
          surface: "design",
          points: [],
          lines: [],
          capabilities: {
            pieceSelection: false,
            connectionSelection: false
          },
          kitArtifacts: {
            name: "K",
            designs: [],
            types: [],
            ports: [],
            connectors: []
          },
          design: {
            guid: "dg1",
            pieces: new Array(40).fill(null).map((l, b) => ({
              guid: `s${b}`,
              center: {
                u: 0,
                v: 0
              }
            })),
            connections: []
          },
          kit: {
            name: "K",
            designs: [],
            types: []
          }
        }, a = {
          mode: "show-design",
          surface: "design",
          points: [],
          lines: [],
          capabilities: {
            pieceSelection: false,
            connectionSelection: false
          },
          kitArtifacts: {
            name: "K",
            designs: [],
            types: [],
            ports: [],
            connectors: []
          },
          design: {
            guid: "dg1",
            pieces: new Array(3).fill(null).map((l, b) => ({
              guid: `f${b}`,
              plane: o,
              center: {
                u: 0,
                v: 0
              }
            })),
            connections: []
          },
          kit: {
            name: "K",
            designs: [],
            types: []
          }
        }, d = (((_b = (_a2 = xe({
          structuredContent: s,
          content: [
            {
              type: "text",
              text: JSON.stringify(a)
            }
          ]
        })) == null ? void 0 : _a2.design) == null ? void 0 : _b.pieces) ?? []).filter((l) => l.plane && l.center).length;
        t(d).toBe(3);
      }), n("reads text from embedded resource content blocks", () => {
        var _a2;
        const s = xe({
          content: [
            {
              type: "resource",
              resource: {
                uri: "x",
                mimeType: "text/plain",
                text: JSON.stringify({
                  points: [],
                  lines: [],
                  kitArtifacts: {
                    name: "Res",
                    designs: [],
                    types: [],
                    ports: [],
                    connectors: []
                  }
                })
              }
            }
          ]
        });
        t((_a2 = s == null ? void 0 : s.kitArtifacts) == null ? void 0 : _a2.name).toBe("Res");
      }), n("preserves mode, design, and kit for McpDesignViewer (show-design / show-scene vs diagram)", () => {
        var _a2, _b;
        const s = xe({
          structuredContent: {
            points: [],
            lines: [],
            mode: "show-scene",
            capabilities: {
              pieceSelection: true,
              connectionSelection: false
            },
            kitArtifacts: {
              name: "K",
              designs: [],
              types: [],
              ports: [],
              connectors: []
            },
            design: {
              guid: "dg",
              pieces: [],
              connections: []
            },
            kit: {
              guid: "kg",
              name: "Kit",
              version: "1",
              types: [],
              designs: []
            }
          }
        });
        t(s == null ? void 0 : s.mode).toBe("show-scene"), t((_a2 = s == null ? void 0 : s.design) == null ? void 0 : _a2.guid).toBe("dg"), t((_b = s == null ? void 0 : s.kit) == null ? void 0 : _b.guid).toBe("kg");
      }), n("preserves designDiff for diff modes", () => {
        const o = {
          pieces: {
            added: [
              {
                guid: "pa"
              }
            ],
            removed: [],
            updated: []
          },
          connections: {
            added: [],
            removed: [],
            updated: []
          }
        }, a = xe({
          structuredContent: {
            points: [],
            lines: [],
            mode: "show-diff",
            design: {
              guid: "dg",
              pieces: [],
              connections: []
            },
            designDiff: o
          }
        });
        t(a == null ? void 0 : a.mode).toBe("show-diff"), t(a == null ? void 0 : a.designDiff).toEqual(o);
      }), n("merges the richest design when structuredContent truncates pieces", () => {
        var _a2, _b;
        const o = {
          points: [],
          lines: [],
          mode: "show-scene",
          capabilities: {},
          kitArtifacts: {
            name: "K",
            designs: [],
            types: [],
            ports: [],
            connectors: []
          },
          design: {
            guid: "dg",
            pieces: [
              {
                guid: "p0"
              }
            ],
            connections: []
          },
          kit: {
            guid: "kg",
            name: "Kit",
            version: "1",
            types: [],
            designs: []
          }
        }, s = {
          ...o,
          design: {
            guid: "dg",
            pieces: Array.from({
              length: 30
            }, (c, d) => ({
              guid: `p${d}`
            })),
            connections: []
          }
        }, a = xe({
          structuredContent: o,
          content: [
            {
              type: "text",
              text: JSON.stringify(s)
            }
          ]
        });
        t((_b = (_a2 = a == null ? void 0 : a.design) == null ? void 0 : _a2.pieces) == null ? void 0 : _b.length).toBe(30);
      }), n("parses each content block as JSON (text + EmbeddedResource duplicate from engine)", () => {
        var _a2, _b;
        const o = {
          points: [],
          lines: [],
          mode: "show-design",
          design: {
            guid: "dg",
            pieces: [
              {
                guid: "p0"
              }
            ],
            connections: []
          },
          kit: {
            guid: "kg",
            name: "Kit",
            version: "1",
            types: [],
            designs: []
          }
        }, s = {
          ...o,
          design: {
            guid: "dg",
            pieces: Array.from({
              length: 20
            }, (c, d) => ({
              guid: `p${d}`
            })),
            connections: []
          }
        }, a = xe({
          content: [
            {
              type: "text",
              text: JSON.stringify(o)
            },
            {
              type: "resource",
              resource: {
                uri: "semio://mcp-app/tool-payload",
                mimeType: "application/json",
                text: JSON.stringify(s)
              }
            }
          ]
        });
        t((_b = (_a2 = a == null ? void 0 : a.design) == null ? void 0 : _a2.pieces) == null ? void 0 : _b.length).toBe(20);
      });
    }), e("semioDesignGridTemplateColumns / semioDesignShowSceneColumn", () => {
      n("always keeps two columns even when no piece has plane+center (MCP cannot collapse to diagram-only)", () => {
        t(Yt("always", false, 0.5)).toBe("50% 50%"), t(Yt("always", false, 0.5)).not.toBe("1fr"), t(Tn("always", false)).toBe(true);
      }), n("auto falls back to single column when no planes", () => {
        t(Yt("auto", false, 0.5)).toBe("1fr"), t(Tn("auto", false)).toBe(false);
      }), n("auto splits when at least one piece has plane+center", () => {
        t(Yt("auto", true, 0.5)).toBe("50% 50%"), t(Tn("auto", true)).toBe(true);
      });
    }), e("mcpEffectiveSurface", () => {
      n("uses explicit surface when mode does not imply design/scene", () => {
        t(ct({
          mode: "show-diagram",
          surface: "design"
        })).toBe("design");
      }), n("mode show-design overrides stale surface diagram", () => {
        t(ct({
          mode: "show-design",
          surface: "diagram"
        })).toBe("design");
      }), n("derives design from show-design mode", () => {
        t(ct({
          mode: "show-design"
        })).toBe("design");
      }), n("derives scene from show-scene mode", () => {
        t(ct({
          mode: "show-scene"
        })).toBe("scene");
      }), n("returns diagram for null payload", () => {
        t(ct(null)).toBe("diagram");
      });
    }), e("mcpMapPayloadToDesignViewerViewModel", () => {
      n("maps split design+kit to SemioDesign surface even when surface field is diagram", () => {
        const o = Bn({
          mode: "show-design",
          surface: "diagram",
          points: [],
          lines: [],
          kitArtifacts: {
            name: "K",
            designs: [],
            types: [],
            ports: [],
            connectors: []
          },
          design: {
            guid: "dg",
            pieces: [
              {
                guid: "p0"
              }
            ],
            connections: []
          },
          kit: {
            guid: "kg",
            name: "Kit",
            version: "1",
            types: [],
            designs: []
          }
        });
        t(o.surface).toBe("design");
      }), n("falls back to points/lines when design pieces have no centers", () => {
        var _a2, _b, _c, _d;
        const o = Bn({
          mode: "show-diagram",
          points: [
            {
              guid: "p1",
              id: "p1",
              u: 0,
              v: 0,
              status: "default"
            },
            {
              guid: "p2",
              id: "p2",
              u: 3,
              v: 0,
              status: "default"
            }
          ],
          lines: [
            {
              guid: "c1",
              sourceU: 0,
              sourceV: 0,
              targetU: 3,
              targetV: 0,
              status: "default"
            }
          ],
          design: {
            guid: "dg",
            pieces: [
              {
                guid: "p1"
              },
              {
                guid: "p2"
              }
            ],
            connections: []
          }
        });
        t((_a2 = o.diagramDesign.pieces) == null ? void 0 : _a2.length).toBe(2), t((_c = (_b = o.diagramDesign.pieces) == null ? void 0 : _b[0]) == null ? void 0 : _c.center).toEqual({
          u: 0,
          v: 0
        }), t((_d = o.diagramDesign.connections) == null ? void 0 : _d.length).toBe(1);
      }), n("uses design when pieces have centers even without points/lines", () => {
        var _a2, _b;
        const o = Bn({
          mode: "show-diagram",
          points: [],
          lines: [],
          design: {
            guid: "dg",
            pieces: [
              {
                guid: "p1",
                center: {
                  u: 1,
                  v: 2
                }
              }
            ],
            connections: []
          }
        });
        t((_b = (_a2 = o.diagramDesign.pieces) == null ? void 0 : _a2[0]) == null ? void 0 : _b.center).toEqual({
          u: 1,
          v: 2
        });
      });
    }), e("mergeRichestDesignFromCandidates", () => {
      n("prefers show-scene over show-design when both refer to the same design guid", () => {
        const s = {
          guid: "dg",
          pieces: [
            {
              guid: "p0",
              plane: {
                origin: {
                  x: 0,
                  y: 0,
                  z: 0
                },
                xAxis: {
                  x: 1,
                  y: 0,
                  z: 0
                },
                yAxis: {
                  x: 0,
                  y: 1,
                  z: 0
                }
              },
              center: {
                u: 0,
                v: 0
              }
            }
          ],
          connections: []
        }, a = (y) => ({
          guid: `p${y}`,
          id: `p${y}`,
          u: y,
          v: y,
          status: "default"
        }), c = (y) => ({
          guid: `c${y}`,
          sourceU: 0,
          sourceV: 0,
          targetU: 0,
          targetV: 0,
          status: "default"
        }), d = {
          mode: "show-diagram",
          surface: "diagram",
          points: Array.from({
            length: 200
          }, (y, P) => a(P)),
          lines: Array.from({
            length: 199
          }, (y, P) => c(P)),
          capabilities: {},
          kitArtifacts: {
            name: "K",
            designs: [],
            types: [],
            ports: [],
            connectors: []
          }
        }, u = zn([
          d,
          {
            mode: "show-design",
            surface: "design",
            points: [],
            lines: [],
            capabilities: {},
            kitArtifacts: {
              name: "K",
              designs: [],
              types: [],
              ports: [],
              connectors: []
            },
            design: s,
            kit: {
              guid: "kg",
              name: "Kit",
              version: "1",
              types: [],
              designs: []
            }
          },
          {
            mode: "show-scene",
            surface: "scene",
            points: [],
            lines: [],
            capabilities: {},
            kitArtifacts: {
              name: "K",
              designs: [],
              types: [],
              ports: [],
              connectors: []
            },
            design: s,
            kit: {
              guid: "kg",
              name: "Kit",
              version: "1",
              types: [],
              designs: []
            }
          }
        ], d);
        t(u == null ? void 0 : u.mode).toBe("show-scene"), t(u == null ? void 0 : u.surface).toBe("scene");
      }), n("pulls richer kitArtifacts from another candidate when the scored-best shell omitted kit body", () => {
        var _a2, _b, _c, _d;
        const o = {
          mode: "show-diagram",
          points: [
            {
              guid: "p",
              id: "p",
              u: 0,
              v: 0,
              status: "default"
            }
          ],
          lines: [],
          capabilities: {}
        }, a = zn([
          o,
          {
            points: [],
            lines: [],
            capabilities: {},
            kitArtifacts: {
              name: "MergedKit",
              designs: [
                {
                  guid: "d1",
                  name: "D"
                }
              ],
              types: [],
              ports: [],
              connectors: []
            }
          }
        ], o);
        t((_a2 = a == null ? void 0 : a.kitArtifacts) == null ? void 0 : _a2.name).toBe("MergedKit"), t((_d = (_c = (_b = a == null ? void 0 : a.kitArtifacts) == null ? void 0 : _b.designs) == null ? void 0 : _c[0]) == null ? void 0 : _d.guid).toBe("d1");
      });
    }), e("mcpFlattenDesignForSemioSurface", () => {
      n("adds plane+center even when kit omits the design entry", () => {
        const c = (Kn({
          guid: "dg-1",
          pieces: [
            {
              guid: "p-1"
            }
          ],
          connections: []
        }, {
          name: "K",
          types: [],
          designs: []
        }).pieces ?? []).some((d) => d.plane && d.center);
        t(c).toBe(true);
      }), n("flattens the diffed design instead of flattening first and applying the diff later", () => {
        var _a2, _b, _c, _d;
        const a = Kn({
          guid: "dg-1",
          pieces: [
            {
              guid: "p-1"
            }
          ],
          connections: []
        }, {
          name: "K",
          types: [],
          designs: []
        }, "diagram", {
          pieces: {
            updated: [
              {
                piece: {
                  guid: "p-1"
                },
                diff: {
                  center: {
                    u: 12,
                    v: -4
                  }
                }
              }
            ]
          }
        });
        t((_b = (_a2 = a.pieces) == null ? void 0 : _a2[0]) == null ? void 0 : _b.center).toEqual({
          u: 12,
          v: -4
        }), t((_d = (_c = a.pieces) == null ? void 0 : _c[0]) == null ? void 0 : _d.plane).toBeTruthy();
      });
    }), e("deepFindKitToolArguments", () => {
      n("finds path in nested host-like objects", () => {
        t(an({
          a: {
            b: {
              path: "  /semio/metabolism  "
            }
          }
        })).toEqual({
          path: "/semio/metabolism"
        });
      }), n("prefers serverUrl+kitUri when present", () => {
        t(an({
          toolInfo: {
            serverUrl: "http://x",
            kitUri: "kit://y"
          }
        })).toEqual({
          serverUrl: "http://x",
          kitUri: "kit://y"
        });
      });
    }), e("isKitViewerPayloadSufficient", () => {
      n("rejects stripped shell kitArtifacts", () => {
        t(Do({
          kitArtifacts: {
            designs: [],
            types: [],
            ports: [],
            connectors: []
          }
        })).toBe(false);
      }), n("accepts kit with name or non-empty lists", () => {
        t(Do({
          kitArtifacts: {
            name: "K",
            designs: [],
            types: [],
            ports: [],
            connectors: []
          }
        })).toBe(true);
      });
    });
    const i = {
      origin: {
        x: 0,
        y: 0,
        z: 0
      },
      xAxis: {
        x: 1,
        y: 0,
        z: 0
      },
      yAxis: {
        x: 0,
        y: 1,
        z: 0
      }
    }, r = {
      u: 0,
      v: 0
    };
    e("buildKitDataFromKit", () => {
      n("normalizes connector port references into string labels instead of raw guid objects", () => {
        const o = kn({
          guid: "kit-guid",
          name: "Kit",
          version: "1",
          types: [
            {
              guid: "kind-guid",
              name: "Kind",
              connectors: [
                {
                  guid: "connector-guid",
                  name: "",
                  port: {
                    guid: "port-guid"
                  }
                },
                {
                  guid: "named-connector-guid",
                  port: {
                    guid: "named-port-guid",
                    name: "Named Port"
                  }
                }
              ]
            }
          ]
        });
        t(o.connectors).toEqual([
          {
            guid: "connector-guid",
            typeGuid: "kind-guid",
            id: "",
            port: "port-guid",
            name: "port-guid",
            description: void 0,
            mandatory: void 0
          },
          {
            guid: "named-connector-guid",
            typeGuid: "kind-guid",
            id: void 0,
            port: "named-port-guid",
            name: "Named Port",
            description: void 0,
            mandatory: void 0
          }
        ]), t(o.ports).toEqual([]);
      }), n("returns shallow kit kinds without requiring connector expansion", () => {
        const o = kn({
          guid: "kit-guid",
          name: "Kit",
          version: "1",
          types: [
            {
              guid: "kind-guid",
              name: "Kind"
            }
          ],
          designs: [
            {
              guid: "design-guid",
              name: "Design"
            }
          ]
        });
        t(o.types).toEqual([
          {
            guid: "kind-guid",
            name: "Kind"
          }
        ]), t(o.designs).toEqual([
          {
            guid: "design-guid",
            name: "Design"
          }
        ]), t(o.ports).toEqual([]), t(o.connectors).toEqual([]);
      }), n("maps kit-level ports separately from type connectors", () => {
        const o = kn({
          guid: "kit-guid",
          name: "Kit",
          version: "1",
          ports: [
            {
              guid: "port-entity",
              name: "P1",
              description: "d"
            }
          ],
          types: [
            {
              guid: "kind-guid",
              name: "Kind",
              connectors: [
                {
                  guid: "conn-1",
                  name: "C1",
                  t: 0,
                  point: {
                    x: 0,
                    y: 0,
                    z: 0
                  },
                  direction: {
                    x: 0,
                    y: 1,
                    z: 0
                  }
                }
              ]
            }
          ]
        });
        t(o.ports).toEqual([
          {
            guid: "port-entity",
            name: "P1",
            description: "d"
          }
        ]), t(o.connectors).toEqual([
          {
            guid: "conn-1",
            typeGuid: "kind-guid",
            id: "C1",
            port: void 0,
            name: "C1",
            description: void 0,
            mandatory: void 0
          }
        ]);
      });
    }), e("buildKitHierarchy", () => {
      n("builds a dynamic type breadcrumb path from nested parent kinds", () => {
        const o = $t({
          name: "Metabolism",
          types: [
            {
              guid: "capsule",
              name: "Capsule"
            },
            {
              guid: "ellipsoid",
              name: "Ellipsoid",
              parent: {
                guid: "capsule"
              }
            },
            {
              guid: "l",
              name: "L",
              parent: {
                guid: "ellipsoid"
              }
            }
          ]
        }, {
          designDataEnabled: true,
          typeDataEnabled: true,
          portDataEnabled: true,
          connectorDataEnabled: true
        });
        t(yo(o, "kind:l").map((s) => s.label)).toEqual([
          "Kit",
          "Metabolism",
          "Types",
          "Capsule",
          "Ellipsoid",
          "L"
        ]);
      }), n("exposes child nodes from each breadcrumb step instead of sibling nodes", () => {
        const o = $t({
          name: "Metabolism",
          types: [
            {
              guid: "capsule",
              name: "Capsule"
            },
            {
              guid: "ellipsoid",
              name: "Ellipsoid",
              parent: {
                guid: "capsule"
              }
            },
            {
              guid: "balcony",
              name: "Balcony",
              parent: {
                guid: "capsule"
              }
            }
          ]
        }, {
          designDataEnabled: true,
          typeDataEnabled: true,
          portDataEnabled: true,
          connectorDataEnabled: true
        });
        t(bo(o, o.nodesByKey.get("kind:capsule")).map((s) => s.label)).toEqual([
          "Balcony",
          "Ellipsoid"
        ]), t(bo(o, o.nodesByKey.get("kind:ellipsoid"))).toEqual([]);
      }), n("attaches connectors beneath their resolved kind parent and derives connector selection", () => {
        const o = $t({
          name: "Metabolism",
          types: [
            {
              guid: "l",
              name: "L"
            }
          ],
          connectors: [
            {
              guid: "entry",
              typeGuid: "l",
              name: "Entry"
            }
          ]
        }, {
          designDataEnabled: true,
          typeDataEnabled: true,
          portDataEnabled: true,
          connectorDataEnabled: true
        });
        t(yo(o, "connector:entry").map((s) => s.label)).toEqual([
          "Kit",
          "Metabolism",
          "Types",
          "L",
          "Entry"
        ]), t(Na(o.nodesByKey.get("connector:entry"))).toEqual({
          designGuids: [],
          typeGuids: [],
          portGuids: [],
          connectorGuids: [
            "entry"
          ]
        });
      }), n("falls back to the first populated group when no artifact is selected", () => {
        const o = $t({
          name: "Metabolism",
          designs: [
            {
              guid: "tower",
              name: "Tower"
            }
          ],
          types: [
            {
              guid: "capsule",
              name: "Capsule"
            }
          ]
        }, {
          designDataEnabled: true,
          typeDataEnabled: true,
          portDataEnabled: true,
          connectorDataEnabled: true
        });
        t(Ua(o)).toBe("design:tower"), t(Oa(o, {
          designGuids: [],
          typeGuids: [],
          portGuids: [],
          connectorGuids: []
        })).toBeUndefined();
      });
    }), e("buildScenePieceAssets", () => {
      n("selects the untagged default model when no tags are requested", () => {
        var _a2, _b, _c;
        const s = rt({
          types: [
            {
              guid: "kind-1",
              models: [
                {
                  guid: "model-tagged",
                  file: {
                    guid: "file-tagged"
                  },
                  tags: [
                    {
                      guid: "tag-1"
                    }
                  ]
                },
                {
                  guid: "model-default",
                  file: {
                    guid: "file-default"
                  }
                }
              ]
            }
          ],
          files: [
            {
              guid: "file-tagged",
              name: "tagged.glb",
              blob: "data:model/gltf-binary;base64,AAA"
            },
            {
              guid: "file-default",
              name: "default.glb",
              blob: "data:model/gltf-binary;base64,BBB"
            }
          ]
        }, [
          {
            piece: {
              guid: "piece-1",
              type: {
                guid: "kind-1"
              },
              plane: i,
              center: r
            },
            status: "default"
          }
        ]);
        t((_a2 = s[0]) == null ? void 0 : _a2.modelSource).toBe("data:model/gltf-binary;base64,BBB"), t((_b = s[0]) == null ? void 0 : _b.modelName).toBe("default.glb"), t((_c = s[0]) == null ? void 0 : _c.status).toBe("default");
      }), n("falls back to the first model when the kind has no untagged default model", () => {
        var _a2, _b, _c;
        const s = rt({
          types: [
            {
              guid: "kind-1",
              models: [
                {
                  guid: "model-first",
                  file: {
                    guid: "file-first"
                  },
                  tags: [
                    {
                      guid: "tag-1"
                    }
                  ]
                },
                {
                  guid: "model-second",
                  file: {
                    guid: "file-second"
                  },
                  tags: [
                    {
                      guid: "tag-2"
                    }
                  ]
                }
              ]
            }
          ],
          files: [
            {
              guid: "file-first",
              name: "first.glb",
              blob: "data:model/gltf-binary;base64,AAA"
            },
            {
              guid: "file-second",
              name: "second.glb",
              blob: "data:model/gltf-binary;base64,BBB"
            }
          ]
        }, [
          {
            piece: {
              guid: "piece-1",
              type: {
                guid: "kind-1"
              },
              plane: i,
              center: r
            },
            status: "modified"
          }
        ]);
        t((_a2 = s[0]) == null ? void 0 : _a2.modelSource).toBe("data:model/gltf-binary;base64,AAA"), t((_b = s[0]) == null ? void 0 : _b.modelName).toBe("first.glb"), t((_c = s[0]) == null ? void 0 : _c.status).toBe("modified");
      }), n("keeps pieces in the scene and falls back to placeholder geometry when no file source can be resolved", () => {
        var _a2, _b, _c;
        const s = rt({
          types: [
            {
              guid: "kind-1",
              models: [
                {
                  guid: "model-1",
                  file: {
                    guid: "file-1"
                  }
                }
              ]
            }
          ],
          files: [
            {
              guid: "file-1",
              name: "missing.glb"
            }
          ]
        }, [
          {
            piece: {
              guid: "piece-1",
              type: {
                guid: "kind-1"
              },
              plane: i,
              center: r
            },
            status: "added"
          }
        ]);
        t(s).toHaveLength(1), t((_a2 = s[0]) == null ? void 0 : _a2.modelSource).toBeUndefined(), t((_b = s[0]) == null ? void 0 : _b.piece.guid).toBe("piece-1"), t((_c = s[0]) == null ? void 0 : _c.status).toBe("added");
      }), n("uses kit file.remote as the model URL when blob is absent (sketchpad-shaped kits)", () => {
        var _a2, _b;
        const s = rt({
          types: [
            {
              guid: "kind-1",
              models: [
                {
                  guid: "model-1",
                  file: {
                    guid: "file-1"
                  }
                }
              ]
            }
          ],
          files: [
            {
              guid: "file-1",
              name: "remote-mesh.glb",
              remote: "https://example.com/assets/remote-mesh.glb"
            }
          ]
        }, [
          {
            piece: {
              guid: "piece-1",
              type: {
                guid: "kind-1"
              },
              plane: i,
              center: r
            },
            status: "default"
          }
        ]);
        t((_a2 = s[0]) == null ? void 0 : _a2.modelSource).toBe("https://example.com/assets/remote-mesh.glb"), t((_b = s[0]) == null ? void 0 : _b.modelName).toBe("remote-mesh.glb");
      }), n("resolves the kind by type name when the piece omits type guid", () => {
        var _a2;
        const s = rt({
          types: [
            {
              guid: "kind-1",
              name: "Capsule",
              models: [
                {
                  guid: "model-1",
                  file: {
                    guid: "file-1"
                  }
                }
              ]
            }
          ],
          files: [
            {
              guid: "file-1",
              name: "cap.glb",
              blob: "data:model/gltf-binary;base64,QUFB"
            }
          ]
        }, [
          {
            piece: {
              guid: "piece-1",
              type: {
                name: "Capsule"
              },
              plane: i,
              center: r
            },
            status: "default"
          }
        ]);
        t((_a2 = s[0]) == null ? void 0 : _a2.modelSource).toBe("data:model/gltf-binary;base64,QUFB");
      });
    }), e("buildTypeModelAsset", () => {
      n("selects the untagged default model for a kind when the kit provides matching files", () => {
        const o = Ao({
          models: [
            {
              guid: "model-tagged",
              file: {
                guid: "file-tagged"
              },
              tags: [
                {
                  guid: "tag-1"
                }
              ]
            },
            {
              guid: "model-default",
              file: {
                guid: "file-default"
              }
            }
          ]
        }, {
          files: [
            {
              guid: "file-tagged",
              name: "tagged.glb",
              blob: "data:model/gltf-binary;base64,AAA"
            },
            {
              guid: "file-default",
              name: "default.glb",
              blob: "data:model/gltf-binary;base64,BBB"
            }
          ]
        });
        t(o).toEqual({
          modelName: "default.glb",
          modelSource: "data:model/gltf-binary;base64,BBB"
        });
      }), n("prefers a gltf file when the default selection points at a non-gltf source", () => {
        const o = Ao({
          models: [
            {
              guid: "model-default",
              file: {
                guid: "file-default"
              }
            },
            {
              guid: "model-gltf",
              file: {
                guid: "file-gltf"
              },
              tags: [
                {
                  guid: "tag-1"
                }
              ]
            }
          ]
        }, {
          files: [
            {
              guid: "file-default",
              name: "default.obj",
              blob: "data:model/obj;base64,AAA"
            },
            {
              guid: "file-gltf",
              name: "fallback.glb",
              blob: "data:model/gltf-binary;base64,BBB"
            }
          ]
        });
        t(o).toEqual({
          modelName: "fallback.glb",
          modelSource: "data:model/gltf-binary;base64,BBB"
        });
      });
    }), e("buildTypeZoomBox", () => {
      n("covers connector roots and arrow tips in scene space", () => {
        const o = {
          guid: "connector-1",
          point: {
            x: 1,
            y: 2,
            z: 3
          },
          direction: {
            x: 0,
            y: 1,
            z: 0
          }
        }, s = To({
          connectors: [
            o
          ]
        }), a = Gt(o.point), c = a.clone().add(new D(o.direction.x, o.direction.y, o.direction.z).applyMatrix4(Ft).normalize().multiplyScalar(ji));
        t(s.containsPoint(a)).toBe(true), t(s.containsPoint(c)).toBe(true), t(s.min.x).toBeLessThan(a.x), t(s.min.y).toBeLessThan(Math.min(a.y, c.y)), t(s.min.z).toBeLessThan(Math.min(a.z, c.z)), t(s.max.x).toBeGreaterThan(a.x), t(s.max.y).toBeGreaterThan(Math.max(a.y, c.y)), t(s.max.z).toBeGreaterThan(Math.max(a.z, c.z));
      }), n("falls back to a centered placeholder box when the kind has no connectors", () => {
        const o = To({
          connectors: []
        });
        t(o.min.toArray()).toEqual([
          -0.5,
          -0.5,
          -0.5
        ]), t(o.max.toArray()).toEqual([
          0.5,
          0.5,
          0.5
        ]);
      });
    }), e("toScenePieceMatrix", () => {
      n("converts semio planes into Three coordinates without tipping GLTF local axes onto their side", () => {
        const o = Gi(i), s = new D(), a = new D(), c = new D();
        o.extractBasis(s, a, c), t(s.toArray()).toEqual([
          1,
          0,
          0
        ]), t(a.toArray()).toEqual([
          0,
          1,
          0
        ]), t(c.toArray()).toEqual([
          0,
          0,
          1
        ]);
      });
    }), e("scene model material normalization", () => {
      n("overwrites imported mesh, line, and point materials with homogeneous scene materials and adds mesh outlines", () => {
        const o = new lt(new vn(1, 1, 1), new fo({
          color: "#ff0000"
        })), s = new ut(new Sn().setFromPoints([
          new D(0, 0, 0),
          new D(1, 0, 0)
        ]), new Ct({
          color: "#00ff00"
        })), a = new Fn(new Sn().setFromPoints([
          new D(0, 0, 0)
        ]), new Rn({
          color: "#0000ff",
          size: 5
        })), c = new wn();
        c.add(o, s, a);
        const d = Un(c, "#112233", "#445566"), l = d.children[0], b = d.children[1], u = d.children[2], y = l.children[0];
        t(l.material).toBeInstanceOf(zo), t(l.material.color.getHexString()).toBe("112233"), t(y).toBeInstanceOf(ut), t(y.userData[eo]).toBe(true), t(y.material).toBeInstanceOf(Ct), t(y.material.color.getHexString()).toBe("445566"), t(b.material).toBeInstanceOf(Ct), t(b.material.color.getHexString()).toBe("445566"), t(u.material).toBeInstanceOf(Rn), t(u.material.color.getHexString()).toBe("445566");
      }), n("recolors imported mesh and line materials consistently for interaction and removed states", () => {
        const o = new wn();
        o.add(new lt(new vn(1, 1, 1), new fo({
          color: "#ff0000"
        })), new ut(new Sn().setFromPoints([
          new D(0, 0, 0),
          new D(1, 0, 0)
        ]), new Ct({
          color: "#00ff00"
        })));
        const s = Un(o, "#111111", "#222222");
        Oi(s, {
          meshColor: "#334455",
          lineColor: "#556677",
          emissiveColor: "#778899",
          emissiveIntensity: 0.35,
          opacity: 0.35
        });
        const a = s.children[0], c = s.children[1], d = a.children[0], l = a.material, b = c.material, u = d.material;
        t(l.color.getHexString()).toBe("334455"), t(l.emissive.getHexString()).toBe("778899"), t(l.emissiveIntensity).toBe(0.35), t(l.transparent).toBe(true), t(l.opacity).toBe(0.35), t(u.color.getHexString()).toBe("556677"), t(u.transparent).toBe(true), t(u.opacity).toBe(0.35), t(b.color.getHexString()).toBe("556677"), t(b.transparent).toBe(true), t(b.opacity).toBe(0.35);
      }), n("derives selected and removed imported scene colors from the shared scene tokens", () => {
        const o = globalThis.document, s = globalThis.getComputedStyle, a = {
          "--muted-foreground": "#888888",
          "--accent": "#123456",
          "--accent-secondary": "#abcdef",
          "--color-removed": "#ff0000",
          "--color-new": "#00ff00",
          "--color-modified": "#ffff00",
          "--color-changed-selected": "#654321",
          "--color-changed-hovered": "#fedcba"
        };
        Object.defineProperty(globalThis, "document", {
          value: {
            documentElement: {}
          },
          configurable: true
        }), Object.defineProperty(globalThis, "getComputedStyle", {
          value: () => ({
            getPropertyValue: (c) => a[c] ?? ""
          }),
          configurable: true
        });
        try {
          const c = _n("default", true, false), d = _n("removed", false, false);
          t(c.meshColor).toBe("#123456"), t(c.lineColor).toBe("#123456"), t(c.emissiveColor).toBe("#123456"), t(c.emissiveIntensity).toBe(0.35), t(c.opacity).toBe(1), t(d.meshColor).toBe("#ff0000"), t(d.lineColor).toBe("#ff0000"), t(d.emissiveColor).toBe("#ff0000"), t(d.emissiveIntensity).toBe(0.4), t(d.opacity).toBe(0.35);
        } finally {
          o === void 0 ? Reflect.deleteProperty(globalThis, "document") : Object.defineProperty(globalThis, "document", {
            value: o,
            configurable: true
          }), s === void 0 ? Reflect.deleteProperty(globalThis, "getComputedStyle") : Object.defineProperty(globalThis, "getComputedStyle", {
            value: s,
            configurable: true
          });
        }
      });
    }), e("normalizeHover", () => {
      n("fills missing hover fields with null", () => {
        t(on()).toEqual({
          pieceGuid: null,
          connectionGuid: null
        }), t(on({
          pieceGuid: "piece-1"
        })).toEqual({
          pieceGuid: "piece-1",
          connectionGuid: null
        });
      });
    }), e("scene helpers", () => {
      n("keeps the gizmo in the bottom-right corner with a larger inset so it stays visible", () => {
        t(Xt({
          width: 1280,
          height: 720
        })).toEqual({
          alignment: "bottom-right",
          margin: [
            56,
            40
          ]
        }), t(Xt({
          width: 120,
          height: 160
        })).toEqual({
          alignment: "bottom-right",
          margin: [
            26,
            22
          ]
        }), t(Xt({
          width: 40,
          height: 48
        })).toEqual({
          alignment: "bottom-right",
          margin: [
            26,
            18
          ]
        });
      });
    }), e("buildSceneSnapshot", () => {
      n("includes piece and connection statuses for flattened scene rendering", () => {
        const o = {
          guid: "piece-a",
          type: {
            guid: "kind-1"
          },
          plane: i,
          center: {
            u: 0,
            v: 0
          }
        }, s = {
          guid: "piece-b",
          type: {
            guid: "kind-1"
          },
          plane: {
            ...i,
            origin: {
              x: 2,
              y: 0,
              z: 0
            }
          },
          center: {
            u: 2,
            v: 0
          }
        }, a = {
          guid: "piece-c",
          type: {
            guid: "kind-1"
          },
          plane: {
            ...i,
            origin: {
              x: 4,
              y: 0,
              z: 0
            }
          },
          center: {
            u: 4,
            v: 0
          }
        }, u = Jt({
          guid: "design-1",
          pieces: [
            o,
            s
          ],
          connections: [
            {
              guid: "connection-a",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              }
            }
          ]
        }, {
          pieces: {
            added: [
              a
            ],
            updated: [
              {
                piece: {
                  guid: "piece-b"
                },
                diff: {}
              }
            ]
          },
          connections: {
            added: [
              {
                guid: "connection-b",
                connected: {
                  piece: {
                    guid: "piece-b"
                  }
                },
                connecting: {
                  piece: {
                    guid: "piece-c"
                  }
                }
              }
            ],
            updated: [
              {
                connection: {
                  guid: "connection-a"
                },
                diff: {}
              }
            ]
          }
        });
        t(u.pieces.map((y) => [
          y.piece.guid,
          y.status
        ])).toEqual([
          [
            "piece-a",
            "default"
          ],
          [
            "piece-b",
            "modified"
          ],
          [
            "piece-c",
            "added"
          ]
        ]), t(u.connections.map((y) => [
          y.connection.guid,
          y.status
        ])).toEqual([
          [
            "connection-a",
            "modified"
          ],
          [
            "connection-b",
            "added"
          ]
        ]);
      }), n("keeps existing scene pieces when the next diff version has no plane and propagates connection status to child", () => {
        var _a2;
        const o = {
          guid: "piece-a",
          type: {
            guid: "kind-1"
          },
          plane: i,
          center: {
            u: 0,
            v: 0
          }
        }, s = {
          guid: "piece-b",
          type: {
            guid: "kind-1"
          },
          plane: {
            ...i,
            origin: {
              x: 2,
              y: 0,
              z: 0
            }
          },
          center: {
            u: 2,
            v: 0
          }
        }, c = {
          guid: "design-1",
          pieces: [
            o,
            s
          ],
          connections: [
            {
              guid: "connection-a",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              }
            }
          ]
        }, d = {
          pieces: {
            removed: [
              {
                guid: "piece-b"
              }
            ],
            added: [
              {
                ...s,
                plane: void 0
              }
            ]
          },
          connections: {
            updated: [
              {
                connection: {
                  guid: "connection-a"
                },
                diff: {}
              }
            ]
          }
        }, l = Jt(c, d), b = new Map(l.pieces.map((u) => [
          u.piece.guid,
          u.status
        ]));
        t(b).toEqual(/* @__PURE__ */ new Map([
          [
            "piece-a",
            "default"
          ],
          [
            "piece-b",
            "added"
          ]
        ])), t((_a2 = l.pieces.find((u) => u.piece.guid === "piece-b")) == null ? void 0 : _a2.piece.plane).toEqual(s.plane), t(l.connections.map((u) => [
          u.connection.guid,
          u.status
        ])).toEqual([
          [
            "connection-a",
            "modified"
          ]
        ]);
      }), n("propagates modified to child endpoint of a reparented connection", () => {
        var _a2, _b;
        const o = {
          guid: "piece-a",
          type: {
            guid: "kind-1"
          },
          plane: i,
          center: {
            u: 0,
            v: 0
          }
        }, s = {
          guid: "piece-b",
          type: {
            guid: "kind-1"
          },
          plane: {
            ...i,
            origin: {
              x: 2,
              y: 0,
              z: 0
            }
          },
          center: {
            u: 2,
            v: 0
          }
        }, a = {
          guid: "piece-c",
          type: {
            guid: "kind-1"
          },
          plane: {
            ...i,
            origin: {
              x: 4,
              y: 0,
              z: 0
            }
          },
          center: {
            u: 4,
            v: 0
          }
        }, b = Jt({
          guid: "design-1",
          pieces: [
            o,
            s,
            a
          ],
          connections: [
            {
              guid: "connection-a",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              }
            }
          ]
        }, {
          connections: {
            updated: [
              {
                connection: {
                  guid: "connection-a"
                },
                diff: {
                  connected: {
                    piece: {
                      guid: "piece-c"
                    }
                  }
                }
              }
            ]
          }
        }), u = new Map(b.pieces.map((y) => [
          y.piece.guid,
          y.status
        ]));
        t(u).toEqual(/* @__PURE__ */ new Map([
          [
            "piece-a",
            "default"
          ],
          [
            "piece-b",
            "modified"
          ],
          [
            "piece-c",
            "default"
          ]
        ])), t(b.connections.map((y) => [
          y.connection.guid,
          y.status
        ])).toEqual([
          [
            "connection-a",
            "modified"
          ]
        ]), t((_a2 = b.connections[0]) == null ? void 0 : _a2.sourcePiece.guid).toBe("piece-c"), t((_b = b.connections[0]) == null ? void 0 : _b.targetPiece.guid).toBe("piece-b");
      });
    }), e("resolveSemioDiagramOriginPixels", () => {
      n("uses u=0 and diagramY=0 (piece v=0)", () => {
        t(Ei((o) => 100 + o * 2, (o) => 200 + o * 3)).toEqual({
          x: 100,
          y: 200
        });
      });
    }), e("resolveSemioDiagramUnitAxisTips", () => {
      n("maps +1 u at v=0 and +1 v as diagramY -1", () => {
        t(Ci((o) => o * 10, (o) => 100 + o * 5)).toEqual({
          uTip: {
            x: 10,
            y: 100
          },
          vTip: {
            x: 0,
            y: 95
          }
        });
      });
    }), e("buildDiagramSnapshot with diff", () => {
      n("annotates updated pieces as modified and propagates piece status to connections (one-hop)", () => {
        const a = Fe({
          guid: "d",
          pieces: [
            {
              guid: "piece-a",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 0,
                v: 0
              }
            },
            {
              guid: "piece-b",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 5,
                v: 3
              }
            },
            {
              guid: "piece-c",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 10,
                v: 0
              }
            }
          ],
          connections: [
            {
              guid: "conn-ab",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              }
            }
          ]
        }, 12, {
          pieces: {
            updated: [
              {
                piece: {
                  guid: "piece-a"
                },
                diff: {
                  center: {
                    u: 1,
                    v: 2
                  }
                }
              }
            ]
          },
          connections: {
            updated: [
              {
                connection: {
                  guid: "conn-ab"
                },
                diff: {
                  u: 1,
                  v: 2
                }
              }
            ]
          }
        }), c = new Map(a.points.map((u) => [
          u.guid,
          u.status
        ]));
        t(c.get("piece-a")).toBe("modified"), t(c.get("piece-b")).toBe("default"), t(c.get("piece-c")).toBe("default");
        const d = a.points.find((u) => u.guid === "piece-a");
        t(d.u).toBe(1), t(d.v).toBe(2);
        const l = a.points.find((u) => u.guid === "piece-b");
        t(l.u).toBe(5), t(l.v).toBe(3);
        const b = new Map(a.lines.map((u) => [
          u.guid,
          u.status
        ]));
        t(b.get("conn-ab")).toBe("modified");
      }), n("propagates piece status one-hop to adjacent connections only (no multi-hop cascade)", () => {
        const a = Fe({
          guid: "d",
          pieces: [
            {
              guid: "piece-a",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 0,
                v: 0
              }
            },
            {
              guid: "piece-b",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 5,
                v: 3
              }
            },
            {
              guid: "piece-c",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 10,
                v: 0
              }
            }
          ],
          connections: [
            {
              guid: "conn-ab",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              }
            },
            {
              guid: "conn-bc",
              connected: {
                piece: {
                  guid: "piece-b"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-c"
                }
              }
            }
          ]
        }, 12, {
          pieces: {
            updated: [
              {
                piece: {
                  guid: "piece-a"
                },
                diff: {
                  center: {
                    u: 1,
                    v: 2
                  }
                }
              }
            ]
          }
        }), c = new Map(a.points.map((l) => [
          l.guid,
          l.status
        ]));
        t(c.get("piece-a")).toBe("modified"), t(c.get("piece-b")).toBe("default"), t(c.get("piece-c")).toBe("default");
        const d = new Map(a.lines.map((l) => [
          l.guid,
          l.status
        ]));
        t(d.get("conn-ab")).toBe("modified"), t(d.get("conn-bc")).toBe("default");
      }), n("propagates status to connections when endpoint piece is added or removed", () => {
        const a = Fe({
          guid: "d",
          pieces: [
            {
              guid: "piece-a",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 0,
                v: 0
              }
            },
            {
              guid: "piece-b",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 5,
                v: 3
              }
            }
          ],
          connections: [
            {
              guid: "conn-ab",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              }
            },
            {
              guid: "conn-ac",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-c"
                }
              }
            }
          ]
        }, 12, {
          pieces: {
            removed: [
              {
                guid: "piece-b"
              }
            ],
            added: [
              {
                guid: "piece-c",
                type: {
                  guid: "k"
                },
                plane: i,
                center: {
                  u: 8,
                  v: 1
                }
              }
            ]
          }
        }), c = new Map(a.lines.map((d) => [
          d.guid,
          d.status
        ]));
        t(c.get("conn-ab")).toBe("modified"), t(c.get("conn-ac")).toBe("modified");
      }), n("does not propagate status when diff is absent", () => {
        const s = Fe({
          guid: "d",
          pieces: [
            {
              guid: "piece-a",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 0,
                v: 0
              }
            },
            {
              guid: "piece-b",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 5,
                v: 3
              }
            }
          ],
          connections: [
            {
              guid: "conn-ab",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              }
            }
          ]
        }, 12, void 0), a = new Map(s.lines.map((c) => [
          c.guid,
          c.status
        ]));
        t(a.get("conn-ab")).toBe("default");
      }), n("annotates added pieces as added and removed pieces as removed", () => {
        const a = Fe({
          guid: "d",
          pieces: [
            {
              guid: "piece-a",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 0,
                v: 0
              }
            },
            {
              guid: "piece-b",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 5,
                v: 3
              }
            }
          ],
          connections: []
        }, 12, {
          pieces: {
            removed: [
              {
                guid: "piece-b"
              }
            ],
            added: [
              {
                guid: "piece-c",
                type: {
                  guid: "k"
                },
                plane: i,
                center: {
                  u: 8,
                  v: 1
                }
              }
            ]
          }
        }), c = new Map(a.points.map((d) => [
          d.guid,
          d.status
        ]));
        t(c.get("piece-a")).toBe("default"), t(c.get("piece-b")).toBe("removed"), t(c.get("piece-c")).toBe("added");
      }), n("connection-only diff colors only the explicit connection (no cascade to pieces or child connections)", () => {
        const a = Fe({
          guid: "d",
          pieces: [
            {
              guid: "piece-a",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 0,
                v: 0
              }
            },
            {
              guid: "piece-b",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 5,
                v: 3
              }
            },
            {
              guid: "piece-c",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 10,
                v: 0
              }
            },
            {
              guid: "piece-d",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 15,
                v: 0
              }
            }
          ],
          connections: [
            {
              guid: "conn-ab",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              }
            },
            {
              guid: "conn-bc",
              connected: {
                piece: {
                  guid: "piece-b"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-c"
                }
              }
            }
          ]
        }, 12, {
          connections: {
            updated: [
              {
                connection: {
                  guid: "conn-ab"
                },
                diff: {
                  u: 2,
                  v: 1
                }
              }
            ]
          }
        }), c = new Map(a.points.map((l) => [
          l.guid,
          l.status
        ]));
        t(c.get("piece-a")).toBe("default"), t(c.get("piece-b")).toBe("default"), t(c.get("piece-c")).toBe("default"), t(c.get("piece-d")).toBe("default");
        const d = new Map(a.lines.map((l) => [
          l.guid,
          l.status
        ]));
        t(d.get("conn-ab")).toBe("modified"), t(d.get("conn-bc")).toBe("default");
      });
    }), e("computeDiagramSelectionOverlayRect", () => {
      n("returns null when no pieces or connections are selected", () => {
        const s = Fe({
          guid: "d",
          pieces: [
            {
              guid: "a",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 0,
                v: 0
              }
            }
          ],
          connections: []
        }, 12, void 0);
        t(Nn(s, /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), (a) => a, (a) => a, 2, 2)).toBeNull();
      }), n("wraps selected piece centers with padding in pixel space", () => {
        const s = Fe({
          guid: "d",
          pieces: [
            {
              guid: "a",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 0,
                v: 0
              }
            },
            {
              guid: "b",
              type: {
                guid: "k"
              },
              plane: i,
              center: {
                u: 10,
                v: 4
              }
            }
          ],
          connections: []
        }, 12, void 0), a = Nn(s, /* @__PURE__ */ new Set([
          "a",
          "b"
        ]), /* @__PURE__ */ new Set(), (c) => c * 10, (c) => c * 10, 5, 2);
        t(a).toEqual({
          x: -5,
          y: -45,
          width: 110,
          height: 50
        });
      });
    }), e("computeSceneSelectionUnionBox", () => {
      n("returns null when no roots match selected guids", () => {
        t(On(/* @__PURE__ */ new Map(), /* @__PURE__ */ new Set([
          "missing"
        ]), /* @__PURE__ */ new Set())).toBeNull();
      }), n("unions world-axis-aligned bounds from registered Object3D roots", () => {
        const o = /* @__PURE__ */ new Map(), s = new wn(), a = new lt(new vn(2, 2, 2));
        s.add(a), s.position.set(5, 0, 0), s.updateMatrixWorld(true), o.set("a", s);
        const c = On(o, /* @__PURE__ */ new Set([
          "a"
        ]), /* @__PURE__ */ new Set());
        t(c).not.toBeNull();
        const d = new D();
        c.getCenter(d), t(d.x).toBeCloseTo(5, 4);
      });
    }), e("buildDesignClipboardData", () => {
      const o = {
        guid: "design-1",
        name: "TestDesign",
        createdAt: "2026-01-01",
        updatedAt: "2026-01-01",
        pieces: [
          {
            guid: "p1",
            type: {
              guid: "t1"
            },
            center: {
              u: 0,
              v: 0
            }
          },
          {
            guid: "p2",
            type: {
              guid: "t1"
            },
            center: {
              u: 1,
              v: 0
            }
          },
          {
            guid: "p3",
            type: {
              guid: "t1"
            },
            center: {
              u: 2,
              v: 0
            }
          }
        ],
        connections: [
          {
            guid: "c1",
            connected: {
              piece: {
                guid: "p1"
              }
            },
            connecting: {
              piece: {
                guid: "p2"
              }
            }
          },
          {
            guid: "c2",
            connected: {
              piece: {
                guid: "p2"
              }
            },
            connecting: {
              piece: {
                guid: "p3"
              }
            }
          }
        ]
      }, s = {
        pieces: {
          added: [
            {
              guid: "p4",
              type: {
                guid: "t1"
              },
              center: {
                u: 3,
                v: 0
              }
            }
          ],
          removed: [
            {
              guid: "p3"
            }
          ],
          updated: [
            {
              piece: {
                guid: "p2"
              },
              diff: {
                name: "UpdatedP2"
              }
            }
          ]
        },
        connections: {
          added: [
            {
              guid: "c3",
              connected: {
                piece: {
                  guid: "p1"
                }
              },
              connecting: {
                piece: {
                  guid: "p4"
                }
              }
            }
          ],
          removed: [
            {
              guid: "c2"
            }
          ],
          updated: [
            {
              connection: {
                guid: "c1"
              },
              diff: {}
            }
          ]
        }
      };
      n("copies the full design when no diff and no selection", () => {
        const a = Le(o, void 0, void 0);
        t(a.design).toBe(o), t(a.designDiff).toBeUndefined();
      }), n("copies the full design when no diff and empty selection", () => {
        const a = Le(o, void 0, {
          pieceGuids: [],
          connectionGuids: []
        });
        t(a.design).toBe(o), t(a.designDiff).toBeUndefined();
      }), n("copies selected pieces and connections when no diff and selection present", () => {
        var _a2, _b, _c, _d;
        const a = Le(o, void 0, {
          pieceGuids: [
            "p1",
            "p2"
          ],
          connectionGuids: [
            "c1"
          ]
        });
        t((_b = (_a2 = a.design) == null ? void 0 : _a2.pieces) == null ? void 0 : _b.map((c) => c.guid)).toEqual([
          "p1",
          "p2"
        ]), t((_d = (_c = a.design) == null ? void 0 : _c.connections) == null ? void 0 : _d.map((c) => c.guid)).toEqual([
          "c1"
        ]), t(a.designDiff).toBeUndefined();
      }), n("omits pieces/connections arrays when none are selected in a no-diff selection", () => {
        var _a2, _b, _c;
        const a = Le(o, void 0, {
          pieceGuids: [
            "p1"
          ],
          connectionGuids: []
        });
        t((_b = (_a2 = a.design) == null ? void 0 : _a2.pieces) == null ? void 0 : _b.map((c) => c.guid)).toEqual([
          "p1"
        ]), t((_c = a.design) == null ? void 0 : _c.connections).toBeUndefined();
      }), n("copies the full diff when diff present and no selection", () => {
        const a = Le(o, s, void 0);
        t(a.design).toBe(o), t(a.designDiff).toBe(s);
      }), n("copies the full diff when diff present and empty selection", () => {
        const a = Le(o, s, {
          pieceGuids: [],
          connectionGuids: []
        });
        t(a.design).toBe(o), t(a.designDiff).toBe(s);
      }), n("filters diff to selected pieces and connections when both diff and selection", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2;
        const a = Le(o, s, {
          pieceGuids: [
            "p4",
            "p3"
          ],
          connectionGuids: [
            "c3"
          ]
        });
        t(a.design).toBe(o), t((_c = (_b = (_a2 = a.designDiff) == null ? void 0 : _a2.pieces) == null ? void 0 : _b.added) == null ? void 0 : _c.map((c) => c.guid)).toEqual([
          "p4"
        ]), t((_f = (_e2 = (_d = a.designDiff) == null ? void 0 : _d.pieces) == null ? void 0 : _e2.removed) == null ? void 0 : _f.map((c) => c.guid)).toEqual([
          "p3"
        ]), t((_h = (_g = a.designDiff) == null ? void 0 : _g.pieces) == null ? void 0 : _h.updated).toEqual([]), t((_k = (_j = (_i2 = a.designDiff) == null ? void 0 : _i2.connections) == null ? void 0 : _j.added) == null ? void 0 : _k.map((c) => c.guid)).toEqual([
          "c3"
        ]), t((_m = (_l = a.designDiff) == null ? void 0 : _l.connections) == null ? void 0 : _m.removed).toEqual([]), t((_o2 = (_n2 = a.designDiff) == null ? void 0 : _n2.connections) == null ? void 0 : _o2.updated).toEqual([]);
      }), n("filters diff updated entries by piece/connection guid", () => {
        var _a2, _b, _c, _d, _e2, _f;
        const a = Le(o, s, {
          pieceGuids: [
            "p2"
          ],
          connectionGuids: [
            "c1"
          ]
        });
        t((_c = (_b = (_a2 = a.designDiff) == null ? void 0 : _a2.pieces) == null ? void 0 : _b.updated) == null ? void 0 : _c.map((c) => c.piece.guid)).toEqual([
          "p2"
        ]), t((_f = (_e2 = (_d = a.designDiff) == null ? void 0 : _d.connections) == null ? void 0 : _e2.updated) == null ? void 0 : _f.map((c) => c.connection.guid)).toEqual([
          "c1"
        ]);
      });
    }), e("canDisplayKitArtifactsFallback", () => {
      n("allows kit fallback for empty diagrams in diagram modes", () => {
        t(Oe("show-diagram", false, void 0)).toBe(true), t(Oe("show-diagram-diff", false, void 0)).toBe(true), t(Oe("select-pieces", false, void 0)).toBe(true);
      }), n("disallows kit fallback for show-design/show-scene", () => {
        t(Oe("show-design", false, void 0)).toBe(false), t(Oe("show-scene", false, void 0)).toBe(false), t(Oe("show-diff", false, void 0)).toBe(false);
      }), n("disallows kit fallback when diagram exists", () => {
        t(Oe("show-diagram", true, void 0)).toBe(false), t(Oe("select-pieces", true, void 0)).toBe(false);
      }), n("disallows kit fallback when a design guid is present (stale show-diagram + merged design)", () => {
        t(Oe("show-diagram", false, "d1")).toBe(false);
      });
    });
  }
  const fc = h.createContext(null), qi = (e, t) => e && e.length > 0 ? e : t, Re = (e, t, n) => `${e}:${t}:${n}`, Tt = (e, t) => e && typeof e == "object" && "guid" in e && typeof e.guid == "string" ? qi(e.guid, `piece-${t}`) : `piece-${t}`, Bt = (e, t) => {
    if (e && typeof e == "object") {
      if ("guid" in e && typeof e.guid == "string") return qi(e.guid, `connection-${t}`);
      const n = "connected" in e && e.connected && typeof e.connected == "object" && "piece" in e.connected && e.connected.piece && typeof e.connected.piece == "object" && "guid" in e.connected.piece && typeof e.connected.piece.guid == "string" ? e.connected.piece.guid : void 0, i = "connecting" in e && e.connecting && typeof e.connecting == "object" && "piece" in e.connecting && e.connecting.piece && typeof e.connecting.piece == "object" && "guid" in e.connecting.piece && typeof e.connecting.piece.guid == "string" ? e.connecting.piece.guid : void 0;
      if (n || i) return `${n ?? "from"}-${i ?? "to"}`;
    }
    return `connection-${t}`;
  }, gc = (e, t, n) => {
    var _a2, _b;
    const i = Tt(t, n), r = (t && typeof t == "object" ? t.name : void 0) || ((_b = (_a2 = e == null ? void 0 : e.pieces) == null ? void 0 : _a2.find((o) => o.guid === i)) == null ? void 0 : _b.name);
    return r && r.length > 0 ? r : i;
  }, hc = [
    "gap",
    "shift",
    "rise",
    "rotation",
    "turn",
    "tilt",
    "u",
    "v"
  ], yc = (e, t) => {
    if (!e || typeof e != "object" || !("diff" in e)) return;
    const n = e.diff;
    if (!n || typeof n != "object") return;
    const i = n, r = [];
    for (const o of hc) {
      const s = i[o];
      typeof s == "number" && Number.isFinite(s) && r.push(S.jsx(jo, {
        id: `${t}.conn.${o}`,
        label: null,
        children: S.jsxs("div", {
          className: "flex w-full items-center justify-between gap-2 px-4 py-0.5 text-xs font-mono",
          children: [
            S.jsx("span", {
              className: "text-muted-foreground",
              children: o
            }),
            S.jsx("span", {
              className: "select-text text-foreground",
              children: s
            })
          ]
        })
      }, `${t}.conn.${o}`));
    }
    return r.length > 0 ? S.jsx(S.Fragment, {
      children: r
    }) : void 0;
  }, bc = (e, t) => {
    if (!e || typeof e != "object" || !("diff" in e)) return;
    const n = e.diff;
    if (!n || typeof n != "object") return;
    const i = n, r = [], o = (s, a) => {
      typeof a == "number" && Number.isFinite(a) && r.push(S.jsx(jo, {
        id: `${t}.piece.${s}`,
        label: null,
        children: S.jsxs("div", {
          className: "flex w-full items-center justify-between gap-2 px-4 py-0.5 text-xs font-mono",
          children: [
            S.jsx("span", {
              className: "text-muted-foreground",
              children: s
            }),
            S.jsx("span", {
              className: "select-text text-foreground",
              children: a
            })
          ]
        })
      }, `${t}.piece.${s}`));
    };
    if (i.center && typeof i.center == "object") {
      const s = i.center;
      o("center.u", s.u), o("center.v", s.v);
    }
    if (i.plane && typeof i.plane == "object") {
      const s = i.plane;
      if (s.origin && typeof s.origin == "object") {
        const a = s.origin;
        o("plane.origin.x", a.x), o("plane.origin.y", a.y), o("plane.origin.z", a.z);
      }
      if (s.xAxis && typeof s.xAxis == "object") {
        const a = s.xAxis;
        o("plane.xAxis.x", a.x), o("plane.xAxis.y", a.y), o("plane.xAxis.z", a.z);
      }
      if (s.yAxis && typeof s.yAxis == "object") {
        const a = s.yAxis;
        o("plane.yAxis.x", a.x), o("plane.yAxis.y", a.y), o("plane.yAxis.z", a.z);
      }
    }
    return r.length > 0 ? S.jsx(S.Fragment, {
      children: r
    }) : void 0;
  }, xc = (e, t, n) => {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2;
    const i = Bt(t, n), r = (_a2 = e == null ? void 0 : e.connections) == null ? void 0 : _a2.find((d) => !!(d.guid && d.guid === i)), o = (t && typeof t == "object" && "connected" in t && t.connected && typeof t.connected == "object" && "piece" in t.connected && t.connected.piece && typeof t.connected.piece == "object" && "guid" in t.connected.piece && typeof t.connected.piece.guid == "string" ? t.connected.piece.guid : void 0) ?? ((_c = (_b = r == null ? void 0 : r.connected) == null ? void 0 : _b.piece) == null ? void 0 : _c.guid), s = (t && typeof t == "object" && "connecting" in t && t.connecting && typeof t.connecting == "object" && "piece" in t.connecting && t.connecting.piece && typeof t.connecting.piece == "object" && "guid" in t.connecting.piece && typeof t.connecting.piece.guid == "string" ? t.connecting.piece.guid : void 0) ?? ((_e2 = (_d = r == null ? void 0 : r.connecting) == null ? void 0 : _d.piece) == null ? void 0 : _e2.guid), a = o ? ((_g = (_f = e == null ? void 0 : e.pieces) == null ? void 0 : _f.find((d) => d.guid === o)) == null ? void 0 : _g.name) ?? o : void 0, c = s ? ((_i2 = (_h = e == null ? void 0 : e.pieces) == null ? void 0 : _h.find((d) => d.guid === s)) == null ? void 0 : _i2.name) ?? s : void 0;
    return a || c ? `${a ?? "Unknown"} -> ${c ?? "Unknown"}` : i;
  }, st = (e, t, n, i, r) => {
    const o = i ?? [];
    if (o.length === 0) return;
    const s = o.map((c, d) => {
      const l = t === "pieces" ? Tt(n === "updated" && c && typeof c == "object" && "piece" in c ? c.piece : c, d) : Bt(n === "updated" && c && typeof c == "object" && "connection" in c ? c.connection : c, d), b = t === "pieces" ? gc(e, n === "updated" && c && typeof c == "object" && "piece" in c ? c.piece : c, d) : xc(e, n === "updated" && c && typeof c == "object" && "connection" in c ? c.connection : c, d), u = Re(t, n, l), y = n === "updated" && t === "connections" ? yc(c, u) : n === "updated" && t === "pieces" ? bc(c, u) : void 0;
      return {
        id: u,
        label: b,
        checked: !r.has(u),
        detail: y
      };
    }), a = s.filter((c) => c.checked).length;
    return {
      id: `${t}.${n}`,
      label: n,
      groupKind: t,
      changeKind: n,
      entries: s,
      totalCount: s.length,
      checkedCount: a
    };
  }, vc = (e, t, n) => {
    var _a2, _b, _c, _d, _e2, _f;
    if (!t) return [];
    const i = [], r = [
      st(e, "pieces", "added", (_a2 = t.pieces) == null ? void 0 : _a2.added, n),
      st(e, "pieces", "removed", (_b = t.pieces) == null ? void 0 : _b.removed, n),
      st(e, "pieces", "updated", (_c = t.pieces) == null ? void 0 : _c.updated, n)
    ].filter((s) => !!s);
    r.length > 0 && i.push({
      id: "pieces",
      label: "pieces",
      groups: r,
      totalCount: r.reduce((s, a) => s + a.totalCount, 0),
      checkedCount: r.reduce((s, a) => s + a.checkedCount, 0)
    });
    const o = [
      st(e, "connections", "added", (_d = t.connections) == null ? void 0 : _d.added, n),
      st(e, "connections", "removed", (_e2 = t.connections) == null ? void 0 : _e2.removed, n),
      st(e, "connections", "updated", (_f = t.connections) == null ? void 0 : _f.updated, n)
    ].filter((s) => !!s);
    return o.length > 0 && i.push({
      id: "connections",
      label: "connections",
      groups: o,
      totalCount: o.reduce((s, a) => s + a.totalCount, 0),
      checkedCount: o.reduce((s, a) => s + a.checkedCount, 0)
    }), i;
  }, Sc = (e, t) => {
    if (e) return t.size === 0 ? e : {
      ...e,
      pieces: e.pieces ? {
        ...e.pieces,
        added: (e.pieces.added ?? []).filter((n, i) => !t.has(Re("pieces", "added", Tt(n, i)))),
        removed: (e.pieces.removed ?? []).filter((n, i) => !t.has(Re("pieces", "removed", Tt(n, i)))),
        updated: (e.pieces.updated ?? []).filter((n, i) => !t.has(Re("pieces", "updated", Tt(n.piece, i))))
      } : void 0,
      connections: e.connections ? {
        ...e.connections,
        added: (e.connections.added ?? []).filter((n, i) => !t.has(Re("connections", "added", Bt(n, i)))),
        removed: (e.connections.removed ?? []).filter((n, i) => !t.has(Re("connections", "removed", Bt(n, i)))),
        updated: (e.connections.updated ?? []).filter((n, i) => !t.has(Re("connections", "updated", Bt(n.connection, i))))
      } : void 0
    };
  };
  function wc() {
    const e = h.useContext(fc);
    if (!e) throw new Error("useAlgorithm must be used within an AlgorithmApp");
    return e;
  }
  const Ro = {
    [E.PIECES_SELECTION_INPUT]: 4,
    [E.SELECTION_INPUT]: 4,
    [E.DESIGN_INPUT]: 4,
    [E.DESIGN_DIFF_OUTPUT]: 2,
    [E.DESIGN_OUTPUT]: 1
  }, Zt = (e, t, n) => {
    if (e.pan !== void 0 && e.zoom !== void 0) return {
      ...e,
      ...n
    };
    const r = e.sourceKind ? Ro[e.sourceKind] : -1, o = Ro[t];
    return e.sourceKind && o < r ? e : {
      ...e,
      ...n,
      sourceKind: t
    };
  }, Et = (e, t) => ({
    pan: t.diagramViewport.pan,
    zoom: t.diagramViewport.zoom,
    onPanChange: (n) => t.onDiagramViewportPanChange(e, n),
    onZoomChange: (n) => t.onDiagramViewportZoomChange(e, n)
  }), Mt = (e) => S.jsx("div", {
    className: "h-full w-full",
    children: e
  }), Pc = (e, t) => {
    const { vec: n, onVecChange: i } = t;
    return !n || !i ? S.jsx(S.Fragment, {}) : S.jsxs("div", {
      className: "h-full flex flex-col items-center justify-center gap-2 p-2",
      children: [
        e,
        S.jsxs("div", {
          className: "flex gap-2",
          children: [
            S.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                S.jsx("span", {
                  className: "text-xs font-mono text-muted-foreground",
                  children: "u"
                }),
                S.jsx("input", {
                  className: "w-20 rounded-md border border-element bg-background px-2 py-1 text-sm font-mono",
                  type: "number",
                  step: "0.1",
                  value: n.u,
                  onChange: (r) => i({
                    ...n,
                    u: Number(r.target.value)
                  })
                })
              ]
            }),
            S.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                S.jsx("span", {
                  className: "text-xs font-mono text-muted-foreground",
                  children: "v"
                }),
                S.jsx("input", {
                  className: "w-20 rounded-md border border-element bg-background px-2 py-1 text-sm font-mono",
                  type: "number",
                  step: "0.1",
                  value: n.v,
                  onChange: (r) => i({
                    ...n,
                    v: Number(r.target.value)
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }, kc = (e) => {
    const t = e.trim().toLowerCase();
    return t.startsWith("loading") || t.startsWith("select ") ? "muted" : "destructive";
  }, Dn = (e, t) => {
    if (t.error) {
      const n = kc(t.error);
      return S.jsx("div", {
        className: us("h-full flex items-center justify-center p-2 text-sm font-mono", n === "destructive" ? "text-destructive" : "text-muted-foreground"),
        children: t.error
      });
    }
    return Mt(e);
  }, Ki = {
    [E.VEC_INPUT]: {
      uiComponentId: "semio/ui:Vec",
      selectionEnabled: false,
      diffEnabled: false,
      usesPieceSelection: false,
      component: Ri,
      createProps: (e) => {
        var _a2, _b, _c, _d;
        return {
          id: "algorithm-vec-input",
          vec: e.vec ?? {
            u: 0,
            v: 0
          },
          onVecChange: e.onVecChange,
          minU: ((_a2 = e.vecMin) == null ? void 0 : _a2.u) ?? -10,
          maxU: ((_b = e.vecMax) == null ? void 0 : _b.u) ?? 10,
          minV: ((_c = e.vecMin) == null ? void 0 : _c.v) ?? -10,
          maxV: ((_d = e.vecMax) == null ? void 0 : _d.v) ?? 10,
          size: 160
        };
      },
      render: Pc
    },
    [E.VECTOR_INPUT]: {
      uiComponentId: "semio/ui:MoveVectorInput",
      selectionEnabled: false,
      diffEnabled: false,
      usesPieceSelection: false,
      component: Ii,
      createProps: (e) => ({
        id: "algorithm-vector-input",
        value: e.moveVector ?? {
          gap: 0,
          shift: 0,
          rise: 0
        },
        onChange: e.onMoveVectorChange,
        min: e.moveVectorMin ?? {
          gap: -10,
          shift: -10,
          rise: -10
        },
        max: e.moveVectorMax ?? {
          gap: 10,
          shift: 10,
          rise: 10
        }
      }),
      render: Mt
    },
    [E.PIECES_SELECTION_INPUT]: {
      uiComponentId: "semio/ui:PieceSelection",
      selectionEnabled: true,
      diffEnabled: false,
      usesPieceSelection: true,
      component: Bi,
      createProps: (e) => ({
        design: e.design,
        layoutDiff: e.diagramLayoutDiff,
        selection: {
          pieceGuids: e.selectedPieceGuids
        },
        onSelectionChange: (t) => {
          var _a2;
          return (_a2 = e.onSelectedPieceGuidsChange) == null ? void 0 : _a2.call(e, t.pieceGuids ?? []);
        },
        selectionEnabled: true,
        diffEnabled: false,
        zoomTarget: "design",
        panEnabled: true,
        zoomEnabled: true,
        ...Et(E.PIECES_SELECTION_INPUT, e)
      }),
      render: Mt
    },
    [E.SELECTION_INPUT]: {
      uiComponentId: "semio/ui:DiagramSelection",
      selectionEnabled: true,
      diffEnabled: false,
      usesPieceSelection: true,
      component: Di,
      createProps: (e) => ({
        design: e.design,
        layoutDiff: e.diagramLayoutDiff,
        selection: {
          pieceGuids: e.selectedPieceGuids,
          connectionGuids: e.selectedConnectionGuids ?? []
        },
        onSelectionChange: (t) => {
          var _a2, _b;
          (_a2 = e.onSelectedPieceGuidsChange) == null ? void 0 : _a2.call(e, t.pieceGuids ?? []), (_b = e.onSelectedConnectionGuidsChange) == null ? void 0 : _b.call(e, t.connectionGuids ?? []);
        },
        selectionEnabled: true,
        diffEnabled: false,
        zoomTarget: "design",
        panEnabled: true,
        zoomEnabled: true,
        ...Et(E.SELECTION_INPUT, e)
      }),
      render: Mt
    },
    [E.DESIGN_INPUT]: {
      uiComponentId: "semio/ui:Diagram",
      selectionEnabled: false,
      diffEnabled: false,
      usesPieceSelection: false,
      component: $e,
      createProps: (e) => ({
        design: e.design,
        layoutDiff: e.diagramLayoutDiff,
        diffEnabled: false,
        zoomTarget: "design",
        selectionEnabled: false,
        ...Et(E.DESIGN_INPUT, e)
      }),
      render: Mt
    },
    [E.DESIGN_DIFF_OUTPUT]: {
      uiComponentId: "semio/ui:Diagram",
      selectionEnabled: false,
      diffEnabled: true,
      usesPieceSelection: false,
      component: $e,
      createProps: (e) => ({
        design: e.diffDesign ?? e.design,
        layoutDiff: e.diffDiagramLayoutDiff ?? e.diagramLayoutDiff,
        designDiff: e.filteredDesignDiff,
        diffEnabled: true,
        zoomTarget: "design",
        selectionEnabled: false,
        ...Et(E.DESIGN_DIFF_OUTPUT, e)
      }),
      render: Dn
    },
    [E.DESIGN_OUTPUT]: {
      uiComponentId: "semio/ui:Diagram",
      selectionEnabled: false,
      diffEnabled: false,
      usesPieceSelection: false,
      component: $e,
      createProps: (e) => ({
        design: e.outputDesign,
        layoutDiff: e.outputDiagramLayoutDiff ?? e.diagramLayoutDiff,
        diffEnabled: false,
        zoomTarget: "design",
        selectionEnabled: false,
        ...Et(E.DESIGN_OUTPUT, e)
      }),
      render: Dn
    },
    [E.SCENE]: {
      uiComponentId: "semio/ui:Scene",
      selectionEnabled: false,
      diffEnabled: false,
      usesPieceSelection: false,
      component: _i,
      createProps: (e) => ({
        design: e.outputDesign,
        kit: e.kit,
        diffEnabled: false,
        zoomTarget: "design",
        selectionEnabled: false,
        pieceSelectionEnabled: false,
        connectionSelectionEnabled: false,
        selection: {
          pieceGuids: e.selectedPieceGuids
        }
      }),
      render: Dn
    }
  }, Ec = (e) => {
    const t = () => {
      const n = wc(), i = J(e);
      if (!i) return S.jsxs("div", {
        className: "p-2 text-sm text-muted-foreground",
        children: [
          "Unknown window kind: ",
          e
        ]
      });
      const r = i.component;
      return i.render(S.jsx(r, {
        ...i.createProps(n)
      }), n);
    };
    return t.displayName = `AlgorithmWindowRenderer(${e})`, t;
  };
  function Ue(e) {
    return Object.prototype.hasOwnProperty.call(Ki, e);
  }
  function J(e) {
    if (Ue(e)) return {
      kind: e,
      ...Ki[e]
    };
  }
  function Io(e) {
    return e.map((t) => {
      if (t.component) return {
        id: t.id,
        label: t.label ?? t.id,
        component: t.component
      };
      const n = J(t.kind);
      return {
        id: t.id,
        label: t.label ?? t.id,
        component: n ? Ec(t.kind) : () => S.jsxs("div", {
          className: "p-2 text-sm text-muted-foreground",
          children: [
            "Unknown window kind: ",
            t.kind
          ]
        })
      };
    });
  }
  function Fi(e) {
    const t = /* @__PURE__ */ new Set([
      E.VEC_INPUT,
      E.VECTOR_INPUT,
      E.PIECES_SELECTION_INPUT,
      E.SELECTION_INPUT,
      E.DESIGN_INPUT
    ]), n = e.filter((c) => t.has(c.kind)), i = e.find((c) => c.kind === E.DESIGN_DIFF_OUTPUT), r = e.find((c) => c.kind === E.DESIGN_OUTPUT || c.kind === E.SCENE), o = [];
    if (n.length > 1) {
      const c = n.filter((b) => b.kind === E.VEC_INPUT || b.kind === E.VECTOR_INPUT), d = n.filter((b) => b.kind !== E.VEC_INPUT && b.kind !== E.VECTOR_INPUT), l = [];
      c.length > 0 && l.push({
        kind: "stack",
        size: 20,
        children: c.map((b) => kt(b.id, b.label ?? b.id))
      }), d.length > 0 && l.push({
        kind: "stack",
        size: 80,
        children: d.map((b) => kt(b.id, b.label ?? b.id))
      }), o.push({
        kind: "column",
        children: l
      });
    } else n.length === 1 && o.push({
      kind: "stack",
      children: n.map((c) => kt(c.id, c.label ?? c.id))
    });
    i && o.push({
      kind: "stack",
      children: [
        kt(i.id, i.label ?? i.id)
      ]
    }), r && o.push({
      kind: "stack",
      children: [
        kt(r.id, r.label ?? r.id)
      ]
    });
    const s = o.length;
    if (s === 0) return ls(e.map((c) => c.id), "row", void 0, e.map((c) => c.label ?? c.id));
    const a = Math.round(100 / s * 100) / 100;
    return o.forEach((c) => {
      c.size = a;
    }), {
      root: {
        kind: "row",
        children: o
      }
    };
  }
  function Cc(e, t) {
    return t ?? Fi(e);
  }
  const Go = import.meta.vitest;
  if (Go) {
    const { describe: e, expect: t, it: n } = Go;
    e("algorithm window helpers", () => {
      n("recognizes the canonical algorithm window kinds", () => {
        t(Ue(E.VEC_INPUT)).toBe(true), t(Ue(E.VECTOR_INPUT)).toBe(true), t(Ue(E.PIECES_SELECTION_INPUT)).toBe(true), t(Ue(E.SELECTION_INPUT)).toBe(true), t(Ue(E.DESIGN_INPUT)).toBe(true), t(Ue(E.DESIGN_DIFF_OUTPUT)).toBe(true), t(Ue(E.DESIGN_OUTPUT)).toBe(true), t(Ue(E.SCENE)).toBe(true), t(Ue(E.TABLE)).toBe(false);
      }), n("encodes the intended diagram behavior for selection and diff windows", () => {
        t(J(E.PIECES_SELECTION_INPUT)).toMatchObject({
          kind: E.PIECES_SELECTION_INPUT,
          uiComponentId: "semio/ui:PieceSelection",
          selectionEnabled: true,
          diffEnabled: false,
          usesPieceSelection: true
        }), t(J(E.DESIGN_INPUT)).toMatchObject({
          kind: E.DESIGN_INPUT,
          uiComponentId: "semio/ui:Diagram",
          selectionEnabled: false,
          diffEnabled: false,
          usesPieceSelection: false
        }), t(J(E.DESIGN_DIFF_OUTPUT)).toMatchObject({
          kind: E.DESIGN_DIFF_OUTPUT,
          uiComponentId: "semio/ui:Diagram",
          selectionEnabled: false,
          diffEnabled: true,
          usesPieceSelection: false
        }), t(J(E.DESIGN_OUTPUT)).toMatchObject({
          kind: E.DESIGN_OUTPUT,
          uiComponentId: "semio/ui:Diagram",
          selectionEnabled: false,
          diffEnabled: false,
          usesPieceSelection: false
        }), t(J(E.SCENE)).toMatchObject({
          kind: E.SCENE,
          uiComponentId: "semio/ui:Scene",
          selectionEnabled: false,
          diffEnabled: false,
          usesPieceSelection: false
        });
      }), n("maps algorithm selection and output windows to shared semio/ui components", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        t((_a2 = J(E.VEC_INPUT)) == null ? void 0 : _a2.component).toBe(Ri), t((_b = J(E.VECTOR_INPUT)) == null ? void 0 : _b.component).toBe(Ii), t((_c = J(E.PIECES_SELECTION_INPUT)) == null ? void 0 : _c.component).toBe(Bi), t((_d = J(E.SELECTION_INPUT)) == null ? void 0 : _d.component).toBe(Di), t((_e2 = J(E.DESIGN_INPUT)) == null ? void 0 : _e2.component).toBe($e), t((_f = J(E.DESIGN_DIFF_OUTPUT)) == null ? void 0 : _f.component).toBe($e), t((_g = J(E.DESIGN_OUTPUT)) == null ? void 0 : _g.component).toBe($e), t((_h = J(E.SCENE)) == null ? void 0 : _h.component).toBe(_i);
      }), n("shares one synchronized viewport across all diagram-backed algorithm windows", () => {
        var _a2, _b, _c, _d, _e2;
        const i = {
          x: 24,
          y: -18
        }, r = 2.5, o = {
          kit: {
            guid: "kit",
            name: "Kit",
            version: "1",
            designs: [],
            types: []
          },
          design: {
            guid: "design",
            name: "",
            pieces: [],
            connections: []
          },
          selectedPieceGuids: [],
          selectedConnectionGuids: [],
          outputDesign: {
            guid: "output",
            name: "",
            pieces: [],
            connections: []
          },
          diagramViewport: {
            pan: i,
            zoom: r,
            sourceKind: E.DESIGN_INPUT
          },
          onDiagramViewportPanChange: () => {
          },
          onDiagramViewportZoomChange: () => {
          },
          filteredDesignDiff: void 0,
          diffTreeCategories: [],
          setDiffEntriesChecked: () => {
          }
        }, s = (_a2 = J(E.PIECES_SELECTION_INPUT)) == null ? void 0 : _a2.createProps(o), a = (_b = J(E.SELECTION_INPUT)) == null ? void 0 : _b.createProps(o), c = (_c = J(E.DESIGN_INPUT)) == null ? void 0 : _c.createProps(o), d = (_d = J(E.DESIGN_DIFF_OUTPUT)) == null ? void 0 : _d.createProps(o), l = (_e2 = J(E.DESIGN_OUTPUT)) == null ? void 0 : _e2.createProps(o);
        t(s).toMatchObject({
          pan: i,
          zoom: r
        }), t(a).toMatchObject({
          pan: i,
          zoom: r
        }), t(c).toMatchObject({
          pan: i,
          zoom: r
        }), t(d).toMatchObject({
          pan: i,
          zoom: r
        }), t(l).toMatchObject({
          pan: i,
          zoom: r
        }), t(s == null ? void 0 : s.onPanChange).toBeTypeOf("function"), t(a == null ? void 0 : a.onPanChange).toBeTypeOf("function"), t(c == null ? void 0 : c.onPanChange).toBeTypeOf("function"), t(d == null ? void 0 : d.onPanChange).toBeTypeOf("function"), t(l == null ? void 0 : l.onPanChange).toBeTypeOf("function"), t(s == null ? void 0 : s.onZoomChange).toBeTypeOf("function"), t(a == null ? void 0 : a.onZoomChange).toBeTypeOf("function"), t(c == null ? void 0 : c.onZoomChange).toBeTypeOf("function"), t(d == null ? void 0 : d.onZoomChange).toBeTypeOf("function"), t(l == null ? void 0 : l.onZoomChange).toBeTypeOf("function");
      }), n("prefers the input viewport fit until the shared algorithm viewport is initialized", () => {
        const i = Zt({}, E.DESIGN_DIFF_OUTPUT, {
          zoom: 4
        }), r = Zt(i, E.DESIGN_OUTPUT, {
          zoom: 1.2
        }), o = Zt(r, E.DESIGN_INPUT, {
          pan: {
            x: 12,
            y: -6
          }
        }), s = Zt({
          pan: {
            x: 12,
            y: -6
          },
          zoom: 4,
          sourceKind: E.DESIGN_INPUT
        }, E.DESIGN_OUTPUT, {
          pan: {
            x: -2,
            y: 9
          }
        });
        t(i).toMatchObject({
          zoom: 4,
          sourceKind: E.DESIGN_DIFF_OUTPUT
        }), t(r).toEqual(i), t(o).toMatchObject({
          pan: {
            x: 12,
            y: -6
          },
          zoom: 4,
          sourceKind: E.DESIGN_INPUT
        }), t(s).toMatchObject({
          pan: {
            x: -2,
            y: 9
          },
          zoom: 4,
          sourceKind: E.DESIGN_INPUT
        });
      }), n("builds window definitions and the default algorithm layout from the declared windows", () => {
        const i = [
          {
            id: "drag-vec",
            kind: E.VEC_INPUT,
            label: "Vec"
          },
          {
            id: "drag-input",
            kind: E.PIECES_SELECTION_INPUT,
            label: "Input"
          },
          {
            id: "drag-diff",
            kind: E.DESIGN_DIFF_OUTPUT,
            label: "Diff"
          },
          {
            id: "drag-output",
            kind: E.DESIGN_OUTPUT,
            label: "Output"
          }
        ];
        t(Io(i).map((o) => ({
          id: o.id,
          label: o.label
        }))).toEqual([
          {
            id: "drag-vec",
            label: "Vec"
          },
          {
            id: "drag-input",
            label: "Input"
          },
          {
            id: "drag-diff",
            label: "Diff"
          },
          {
            id: "drag-output",
            label: "Output"
          }
        ]), t(Io(i).every((o) => typeof o.component == "function")).toBe(true), t(Cc(i)).toEqual({
          root: {
            kind: "row",
            children: [
              {
                kind: "column",
                size: 33.33,
                children: [
                  {
                    kind: "stack",
                    size: 20,
                    children: [
                      {
                        kind: "window",
                        windowKindId: "drag-vec",
                        title: "Vec"
                      }
                    ]
                  },
                  {
                    kind: "stack",
                    size: 80,
                    children: [
                      {
                        kind: "window",
                        windowKindId: "drag-input",
                        title: "Input"
                      }
                    ]
                  }
                ]
              },
              {
                kind: "stack",
                size: 33.33,
                children: [
                  {
                    kind: "window",
                    windowKindId: "drag-diff",
                    title: "Diff"
                  }
                ]
              },
              {
                kind: "stack",
                size: 33.33,
                children: [
                  {
                    kind: "window",
                    windowKindId: "drag-output",
                    title: "Output"
                  }
                ]
              }
            ]
          }
        });
        const r = [
          {
            id: "flatten-diff",
            kind: E.DESIGN_DIFF_OUTPUT,
            label: "Diff"
          },
          {
            id: "flatten-output",
            kind: E.DESIGN_OUTPUT,
            label: "Output"
          }
        ];
        t(Fi(r)).toEqual({
          root: {
            kind: "row",
            children: [
              {
                kind: "stack",
                size: 50,
                children: [
                  {
                    kind: "window",
                    windowKindId: "flatten-diff",
                    title: "Diff"
                  }
                ]
              },
              {
                kind: "stack",
                size: 50,
                children: [
                  {
                    kind: "window",
                    windowKindId: "flatten-output",
                    title: "Output"
                  }
                ]
              }
            ]
          }
        });
      }), n("filters unchecked diff entries before wiring the diff output window", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const i = {
          pieces: [
            {
              guid: "piece-a",
              name: "Piece A",
              type: {
                guid: "type-a"
              },
              center: {
                u: 0,
                v: 0
              }
            },
            {
              guid: "piece-b",
              name: "Piece B",
              type: {
                guid: "type-a"
              },
              center: {
                u: 1,
                v: 0
              }
            }
          ],
          connections: [
            {
              guid: "connection-a",
              connected: {
                piece: {
                  guid: "piece-a"
                }
              },
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              }
            }
          ]
        }, r = {
          pieces: {
            added: [
              {
                guid: "piece-c",
                name: "Piece C",
                type: {
                  guid: "type-a"
                },
                center: {
                  u: 2,
                  v: 0
                }
              }
            ],
            removed: [
              {
                guid: "piece-b"
              }
            ],
            updated: [
              {
                piece: {
                  guid: "piece-a"
                },
                diff: {
                  name: "Renamed Piece A"
                }
              }
            ]
          },
          connections: {
            added: [
              {
                guid: "connection-b",
                connected: {
                  piece: {
                    guid: "piece-a"
                  }
                },
                connecting: {
                  piece: {
                    guid: "piece-c"
                  }
                }
              }
            ],
            removed: [
              {
                guid: "connection-a"
              }
            ],
            updated: []
          }
        }, o = Sc(r, /* @__PURE__ */ new Set([
          Re("pieces", "removed", "piece-b"),
          Re("connections", "added", "connection-b")
        ])), s = vc(i, r, /* @__PURE__ */ new Set([
          Re("pieces", "removed", "piece-b")
        ]));
        t((_a2 = o == null ? void 0 : o.pieces) == null ? void 0 : _a2.removed).toEqual([]), t((_c = (_b = o == null ? void 0 : o.pieces) == null ? void 0 : _b.added) == null ? void 0 : _c.map((a) => a.guid)).toEqual([
          "piece-c"
        ]), t((_d = o == null ? void 0 : o.connections) == null ? void 0 : _d.added).toEqual([]), t((_f = (_e2 = o == null ? void 0 : o.connections) == null ? void 0 : _e2.removed) == null ? void 0 : _f.map((a) => a.guid)).toEqual([
          "connection-a"
        ]), t(s.map((a) => ({
          id: a.id,
          checked: a.checkedCount,
          total: a.totalCount
        }))).toEqual([
          {
            id: "pieces",
            checked: 2,
            total: 3
          },
          {
            id: "connections",
            checked: 2,
            total: 2
          }
        ]), t((_h = (_g = s[0]) == null ? void 0 : _g.groups.find((a) => a.changeKind === "removed")) == null ? void 0 : _h.entries[0]).toMatchObject({
          id: Re("pieces", "removed", "piece-b"),
          label: "Piece B",
          checked: false
        });
      });
    });
  }
});
export {
  __tla
};
