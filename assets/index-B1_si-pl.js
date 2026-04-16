const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sql-wasm-CuhM0oT5.js","./_commonjsHelpers-CE1G-McA.js","./__vite-browser-external-D7Ct-6yo.js","./jszip.min-Cd8if0Hs.js","./_commonjs-dynamic-modules-TDtrdbi3.js","./index-BdKIhndk.js","./preload-helper-PPVm8Dsz.js","./index-gBZ811w6.js","./index-Dyrx3GQH.js","./server.browser-CwBZcUlj.js","./index-BOTK57Qr.js","./index-CPYBuwmV.js","./three.core-CmKuqlS6.js","./x-DzqR2N4o.js","./index-BZV40eAE.css","./index-DqQ9HAJ-.js","./metabolism.kit.semio-BwiFUvRf.js","./invalid.kit.semio-DcJFMgjA.js","./metabolism.kit.diff.inverted.semio-CY5cGjPv.js","./metabolism.kit.diff.semio-CGN0weIc.js","./wrench-B2gSME21.js","./index-DwjF_IIt.js","./globals-CJXHW4cF.js","./globals-CEXgmFgx.css","./index-f_CjIyol.js","./schemas-BHthlJat.js","./client-CET3z3r2.js","./renderer-D5bBzhCW.js","./renderer-DzcH0aHq.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as we } from "./preload-helper-PPVm8Dsz.js";
import { _ as Do, o as X, s as K, a as H, n as Ae, b as Xe, c as Is, d as Us, e as Gs, f as zs, g as Ks, h as Hs, i as Vs, j as qs, k as $s, l as Js, m as js, p as Ws, q as Ys, r as Zs, t as Xs, N as On, D as Wn, v as Qs, A as er, __tla as __tla_0 } from "./schemas-BHthlJat.js";
import { b as Ge, B as tr, a as be, Q as ii, i as an, M as Yn } from "./three.core-CmKuqlS6.js";
let Gt, vr, Xn, Zt, ze, je, xr, si, Uo, Ki, Go, Dr, Qn, Mn, Ur, yr, ca, ci, Xo, ji, ga, Va, no, cs, Qi, Ja, xa, Ni, es, Ft, Aa, Mo, ec, Li, tn, pi, us, ic, or, Ro, br, un, zo, Hi, Br, Rr, Bi, Vo, Vi, Pr, Ga, io, as, Xi, Ha, Zn, mt, Od, xc, so, zt, nn, Nt, on, Ra, ln, ns, Zi, Oa, Pn, _r, ha, to, Qo, Wi, Sa, fc, Pa, Mt, ss, gi, Fa, fr, mn, Dn, zi, jr, ri, $o, jt, Wr, Qr, eo, Xt, It, $i, Jr, Hr, Ri, qo, qi, wn, uo, Di, Wa, oo, ds, en, Qa, Ci, ea, gn, Zo, Ji, oa, Ta, ai, Yi, li, is, Ba, ur, di, Jt, Er, We, kr, Mr, la, ma, Kn, vn, it, Cr, Or, rs, ht, os, wa, zn, hr, Io, hn, Xr, Un, $r, po, Xa, na, aa, ba, fn, iu, _i, Bd, ei, Xd, Qd, dr, cr, Rd, yt, ou, fd, nu, wi, oc, rr, ar, co, ro, sr, ao, Le, Os, nc, Ht, hc, vc, fo, Ct, Bo, rc, dn, Co, ki, Et, _a, xi, Tt, Ea, Fs, Ua, ja, cc, tu, wt, nd, Ia, at, qd, kc, kt, wr, Ar, Fr, eu, da, pa, qa, yn, tc, Ko, Nr, Kd, za, ac, sd, pt, Na, ya, Da, mr, Fo, Ai, Yr, xo, Fn, Vr, lo, Vt, Ya, ta, sa, ka, pn, gt, Yt, pd, et, Tn, st, ws, bc, Ls, _s, Lc, Oc, ks, zc, Kc, Fi, Cn, Qc, Mi, qc, $c, ys, _o, $n, id, Bn, Ss, Cc, Bc, Es, Rc, Nc, Rs, Yc, Zc, Qt, Dt, Cs, jc, Wc, bs, Hc, Vc, Ii, ed, td, _n, An, vs, Ns, As, Mc, Fc, fi, Ic, sn, Dc, xs, Pc, Eo, Ui, Bs, bn, Xc, Ts, Uc, Gc, qn, Jc, kn, En, xn, qt, oi, Ti, Nn, Sr, ot, Tr, Ir, ua, fa, $a, ts, Hn, Ho, Lr, Ka, $t, La, va, Ma, lr, Jo, Zr, In, qr, go, Za, ia, ra, Ca, gr, nr, bi, Ue, Pi, vo, ms, Rn, ui, xt, lt, Oi, sc, _t, Gn, Ad, vd, bd, _d, xd, hd, kd, St, Td, wd, Ed, Sd, yd, Kt, mc, yc, Ln, Hd, Ec, _c, wo, So, Zd, Yd, wc, Sc, ko, ni, Ao, vt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a2;
  var ir = {};
  Zn = 50;
  Ci = 1e-5;
  Yt = () => Qs();
  _t = (t) => Math.round(t / Ci) * Ci;
  nr = (t, e) => {
    if (t === void 0 && e === void 0 || (t == null ? void 0 : t.length) === 0 && (e == null ? void 0 : e.length) === 0) return 1;
    if (t === void 0 || e === void 0) return 0;
    const i = new Set(t), n = new Set(e), o = Array.from(i).filter((l) => n.has(l)).length, r = i.size + n.size - o;
    return r === 0 ? 0 : o / r;
  };
  Le = (t, e) => {
    if (t === e || t == null && e == null) return true;
    if (t == null || e == null || typeof t != typeof e) return false;
    if (Array.isArray(t)) return !Array.isArray(e) || t.length !== e.length ? false : t.every((i, n) => Le(i, e[n]));
    if (typeof t == "object") {
      const i = Object.keys(t), n = Object.keys(e);
      return i.length !== n.length ? false : i.every((o) => n.includes(o) && Le(t[o], e[o]));
    }
    return false;
  };
  yt = (t, e) => t === e ? true : !t || !e ? false : t.length === e.length && t.every((i, n) => Le(i, e[n]));
  kt = (t, e, i = " ") => {
    if (!e.includes(t)) return t;
    let n = 2;
    for (; e.includes(`${t}${i}${n}`); ) n++;
    return `${t}${i}${n}`;
  };
  Do([
    "unchanged",
    "added",
    "removed",
    "modified"
  ]);
  or = ((t) => (t.Unchanged = "unchanged", t.Added = "added", t.Removed = "removed", t.Modified = "modified", t))(or || {});
  Yd = () => new Ge(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
  Zd = () => new Ge(1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1);
  vt = (t) => new be(t.x, t.y, t.z);
  Xn = X({
    guid: K()
  });
  Pn = X({
    guid: K()
  });
  si = X({
    guid: K()
  });
  un = X({
    guid: K()
  });
  Bi = X({
    guid: K()
  });
  Qn = X({
    guid: K()
  });
  Ri = X({
    guid: K()
  });
  ri = X({
    guid: K()
  });
  eo = X({
    guid: K()
  });
  to = X({
    guid: K()
  });
  Ni = X({
    guid: K()
  });
  ai = X({
    guid: K()
  });
  ln = X({
    guid: K()
  });
  Mt = X({
    guid: K()
  });
  io = X({
    guid: K()
  });
  no = X({
    guid: K()
  });
  oo = X({
    guid: K()
  });
  Li = X({
    guid: K()
  });
  so = X({
    guid: K()
  });
  gn = X({
    guid: K()
  });
  ci = X({
    guid: K()
  });
  sr = (t) => ({
    guid: t
  });
  ro = (t) => ({
    guid: t
  });
  rr = (t) => ({
    guid: t
  });
  ao = (t) => ({
    guid: t
  });
  co = (t) => ({
    guid: t
  });
  ar = (t) => ({
    guid: t
  });
  cr = (t, e) => t.guid === e.guid;
  dr = (t, e) => t.guid === e.guid;
  Mo = X({
    u: Ae(),
    v: Ae()
  });
  Mo.partial();
  ur = X({
    u: Ae(),
    v: Ae()
  });
  ur.partial();
  let pr;
  zi = X({
    x: Ae(),
    y: Ae(),
    z: Ae()
  });
  Dn = zi.partial();
  Fo = (t, e) => ({
    x: e.x - t.x,
    y: e.y - t.y,
    z: e.z - t.z
  });
  lr = (t, e) => {
    const i = e.x ?? 0, n = e.y ?? 0, o = e.z ?? 0;
    return {
      x: -i,
      y: -n,
      z: -o
    };
  };
  Io = (t, e) => {
    const i = e.x ?? 0, n = e.y ?? 0, o = e.z ?? 0;
    return {
      x: t.x + i,
      y: t.y + n,
      z: t.z + o
    };
  };
  Jt = X({
    x: Ae(),
    y: Ae(),
    z: Ae()
  });
  di = Jt.partial();
  pn = (t, e) => ({
    x: e.x - t.x,
    y: e.y - t.y,
    z: e.z - t.z
  });
  gr = (t, e) => {
    const i = e.x ?? 0, n = e.y ?? 0, o = e.z ?? 0;
    return {
      x: -i,
      y: -n,
      z: -o
    };
  };
  fn = (t, e) => {
    const i = e.x ?? 0, n = e.y ?? 0, o = e.z ?? 0;
    return {
      x: t.x + i,
      y: t.y + n,
      z: t.z + o
    };
  };
  mn = X({
    origin: zi,
    xAxis: Jt,
    yAxis: Jt
  });
  Oi = (t) => {
    const e = new be(t.origin.x, t.origin.y, t.origin.z), i = new be(t.xAxis.x, t.xAxis.y, t.xAxis.z), n = new be(t.yAxis.x, t.yAxis.y, t.yAxis.z), o = new be().crossVectors(i, n).normalize(), r = new be().crossVectors(o, i).normalize();
    return new Ge().makeBasis(i.normalize(), r, o).setPosition(e);
  };
  Pi = (t) => {
    const e = new be(), i = new be(), n = new be(), o = new be();
    return t.decompose(e, new ii(), new be()), t.extractBasis(i, n, o), {
      origin: {
        x: e.x,
        y: e.y,
        z: e.z
      },
      xAxis: {
        x: i.x,
        y: i.y,
        z: i.z
      },
      yAxis: {
        x: n.x,
        y: n.y,
        z: n.z
      }
    };
  };
  pr = (t) => ({
    origin: {
      x: _t(t.origin.x),
      y: _t(t.origin.y),
      z: _t(t.origin.z)
    },
    xAxis: {
      x: _t(t.xAxis.x),
      y: _t(t.xAxis.y),
      z: _t(t.xAxis.z)
    },
    yAxis: {
      x: _t(t.yAxis.x),
      y: _t(t.yAxis.y),
      z: _t(t.yAxis.z)
    }
  });
  fr = mn.omit({
    origin: true,
    xAxis: true,
    yAxis: true
  }).extend({
    origin: Dn,
    xAxis: di,
    yAxis: di
  }).partial();
  mr = (t, e) => ({
    origin: Fo(t.origin, e.origin),
    xAxis: pn(t.xAxis, e.xAxis),
    yAxis: pn(t.yAxis, e.yAxis)
  });
  hr = (t, e) => ({
    origin: e.origin ? Io(t.origin, e.origin) : t.origin,
    xAxis: e.xAxis ? fn(t.xAxis, e.xAxis) : t.xAxis,
    yAxis: e.yAxis ? fn(t.yAxis, e.yAxis) : t.yAxis
  });
  yr = X({
    position: zi,
    forward: Jt,
    up: Jt
  });
  yr.omit({
    position: true,
    forward: true,
    up: true
  }).extend({
    position: Dn,
    forward: di,
    up: di
  }).partial();
  let At, qe;
  At = () => K().optional();
  ze = X({
    guid: K(),
    key: K(),
    value: K().optional(),
    definition: K().optional()
  });
  Zt = ze;
  vr = ze.partial();
  wr = (t, e) => {
    const i = {};
    return t.key !== e.key && (i.key = e.key), t.value !== e.value && (i.value = e.value), t.definition !== e.definition && (i.definition = e.definition), i;
  };
  Sr = (t, e) => ({
    key: e.key ? t.key : "",
    value: e.value ? t.value : "",
    definition: e.definition ? t.definition : ""
  });
  Er = (t, e) => ({
    ...t,
    ...e
  });
  je = X({
    removed: H(Xn).optional(),
    updated: H(X({
      attribute: Xn,
      diff: vr
    })).optional(),
    added: H(ze).optional()
  });
  qe = (t, e) => {
    const i = new Set(t.map((u) => u.guid)), n = new Set(e.map((u) => u.guid)), o = t.filter((u) => !n.has(u.guid)).map((u) => ({
      guid: u.guid
    })), r = e.filter((u) => !i.has(u.guid)), l = e.filter((u) => i.has(u.guid)).map((u) => ({
      attribute: {
        guid: u.guid
      },
      diff: wr(t.find((v) => v.guid === u.guid), u)
    })).filter((u) => Object.keys(u.diff).length > 0), p = {};
    return o.length > 0 && (p.removed = o), l.length > 0 && (p.updated = l), r.length > 0 && (p.added = r), p;
  };
  ot = (t, e) => {
    var _a3, _b, _c2;
    const i = ((_a3 = e.removed) == null ? void 0 : _a3.map((r) => r.guid)) ?? [], n = ((_b = e.updated) == null ? void 0 : _b.map((r) => r.attribute.guid)) ?? [];
    return {
      removed: (((_c2 = e.added) == null ? void 0 : _c2.map((r) => r.guid)) ?? []).map((r) => ({
        guid: r
      })),
      updated: n.map((r) => {
        var _a4;
        const l = t.find((u) => u.guid === r), p = (_a4 = e.updated) == null ? void 0 : _a4.find((u) => u.attribute.guid === r);
        return !l || !p ? null : {
          attribute: {
            guid: r
          },
          diff: Sr(l, p.diff)
        };
      }).filter((r) => r !== null),
      added: i.map((r) => t.find((l) => l.guid === r)).filter((r) => r !== void 0)
    };
  };
  We = (t, e) => {
    let i = [
      ...t
    ];
    if (e.removed) {
      const n = new Set(e.removed.map((o) => o.guid));
      i = i.filter((o) => !n.has(o.guid));
    }
    if (e.updated) for (const n of e.updated) {
      const o = i.findIndex((r) => r.guid === n.attribute.guid);
      o !== -1 && (i[o] = Er(i[o], n.diff));
    }
    return e.added && i.push(...e.added), i;
  };
  _r = X({
    guid: K(),
    longitude: Ae(),
    latitude: Ae(),
    altitude: Ae().optional(),
    attributes: H(ze).optional()
  });
  _r.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional()
  });
  let Gr, zr, Kr, jo, Wo, Yo;
  Ki = X({
    guid: K(),
    name: K(),
    email: K(),
    attributes: H(ze).optional()
  });
  Uo = Ki.omit({
    attributes: true
  });
  xr = Ki.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional()
  });
  Ar = (t, e) => {
    const i = {};
    return t.name !== e.name && (i.name = e.name), t.email !== e.email && (i.email = e.email), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  Tr = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.email !== void 0 && (i.email = t.email), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  kr = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      name: e.name ?? t.name,
      email: e.email ?? t.email
    };
    return i && i.length > 0 && (n.attributes = i), n;
  };
  Go = X({
    removed: H(si).optional(),
    updated: H(X({
      author: si,
      diff: xr
    })).optional(),
    added: H(Ki).optional()
  });
  Hi = X({
    guid: K(),
    name: K(),
    description: K().optional(),
    remote: K().optional(),
    folder: Bi.optional(),
    size: Ae().optional(),
    hash: K().optional(),
    blob: K().optional(),
    createdAt: At(),
    createdBy: K().optional(),
    updatedAt: At(),
    updatedBy: K().optional()
  });
  zo = Hi.omit({
    blob: true
  });
  br = Hi.partial();
  Ko = (t, e) => {
    var _a3, _b;
    const i = {};
    return t.name !== e.name && (i.name = e.name), t.description !== e.description && (i.description = e.description), t.remote !== e.remote && (i.remote = e.remote), t.size !== e.size && (i.size = e.size), t.hash !== e.hash && (i.hash = e.hash), t.blob !== e.blob && (i.blob = e.blob), t.createdAt !== e.createdAt && (i.createdAt = e.createdAt), t.createdBy !== e.createdBy && (i.createdBy = e.createdBy), t.updatedAt !== e.updatedAt && (i.updatedAt = e.updatedAt), t.updatedBy !== e.updatedBy && (i.updatedBy = e.updatedBy), ((_a3 = t.folder) == null ? void 0 : _a3.guid) !== ((_b = e.folder) == null ? void 0 : _b.guid) && (i.folder = e.folder), i;
  };
  Ho = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.description !== void 0 && (i.description = t.description), e.remote !== void 0 && (i.remote = t.remote), e.size !== void 0 && (i.size = t.size), e.hash !== void 0 && (i.hash = t.hash), e.blob !== void 0 && (i.blob = t.blob), e.createdAt !== void 0 && (i.createdAt = t.createdAt), e.createdBy !== void 0 && (i.createdBy = t.createdBy), e.updatedAt !== void 0 && (i.updatedAt = t.updatedAt), e.updatedBy !== void 0 && (i.updatedBy = t.updatedBy), e.folder !== void 0 && (i.folder = t.folder), i;
  };
  Cr = (t, e) => {
    const i = {
      guid: t.guid,
      name: e.name ?? t.name
    };
    return (e.description !== void 0 || t.description !== void 0) && (i.description = e.description ?? t.description), (e.remote !== void 0 || t.remote !== void 0) && (i.remote = e.remote ?? t.remote), (e.size !== void 0 || t.size !== void 0) && (i.size = e.size ?? t.size), (e.hash !== void 0 || t.hash !== void 0) && (i.hash = e.hash ?? t.hash), (e.createdAt !== void 0 || t.createdAt !== void 0) && (i.createdAt = e.createdAt ?? t.createdAt), (e.createdBy !== void 0 || t.createdBy !== void 0) && (i.createdBy = e.createdBy ?? t.createdBy), (e.updatedAt !== void 0 || t.updatedAt !== void 0) && (i.updatedAt = e.updatedAt ?? t.updatedAt), (e.updatedBy !== void 0 || t.updatedBy !== void 0) && (i.updatedBy = e.updatedBy ?? t.updatedBy), (e.folder !== void 0 || t.folder !== void 0) && (i.folder = e.folder ?? t.folder), (e.blob !== void 0 || t.blob !== void 0) && (i.blob = e.blob ?? t.blob), i;
  };
  Br = X({
    removed: H(un).optional(),
    updated: H(X({
      file: un,
      diff: br
    })).optional(),
    added: H(Hi).optional()
  });
  Vi = X({
    guid: K(),
    name: K(),
    parent: Bi.optional(),
    description: K().optional(),
    attributes: H(ze).optional(),
    createdAt: At(),
    createdBy: K().optional(),
    updatedAt: At(),
    updatedBy: K().optional()
  });
  Vo = Vi.omit({
    attributes: true
  });
  Rr = Vi.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional()
  });
  Nr = (t, e) => {
    var _a3, _b;
    const i = {};
    return t.name !== e.name && (i.name = e.name), ((_a3 = t.parent) == null ? void 0 : _a3.guid) !== ((_b = e.parent) == null ? void 0 : _b.guid) && (i.parent = e.parent), t.description !== e.description && (i.description = e.description), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), t.createdAt !== e.createdAt && (i.createdAt = e.createdAt), t.createdBy !== e.createdBy && (i.createdBy = e.createdBy), t.updatedAt !== e.updatedAt && (i.updatedAt = e.updatedAt), t.updatedBy !== e.updatedBy && (i.updatedBy = e.updatedBy), i;
  };
  Lr = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.parent !== void 0 && (i.parent = t.parent), e.description !== void 0 && (i.description = t.description), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), e.createdAt !== void 0 && (i.createdAt = t.createdAt), e.createdBy !== void 0 && (i.createdBy = t.createdBy), e.updatedAt !== void 0 && (i.updatedAt = t.updatedAt), e.updatedBy !== void 0 && (i.updatedBy = t.updatedBy), i;
  };
  Or = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      name: e.name ?? t.name
    };
    return (e.parent !== void 0 || t.parent !== void 0) && (n.parent = e.parent ?? t.parent), (e.description !== void 0 || t.description !== void 0) && (n.description = e.description ?? t.description), i && i.length > 0 && (n.attributes = i), (e.createdAt !== void 0 || t.createdAt !== void 0) && (n.createdAt = e.createdAt ?? t.createdAt), (e.createdBy !== void 0 || t.createdBy !== void 0) && (n.createdBy = e.createdBy ?? t.createdBy), (e.updatedAt !== void 0 || t.updatedAt !== void 0) && (n.updatedAt = e.updatedAt ?? t.updatedAt), (e.updatedBy !== void 0 || t.updatedBy !== void 0) && (n.updatedBy = e.updatedBy ?? t.updatedBy), n;
  };
  Pr = X({
    removed: H(Bi).optional(),
    updated: H(X({
      folder: Bi,
      diff: Rr
    })).optional(),
    added: H(Vi).optional()
  });
  Mn = X({
    guid: K(),
    name: K(),
    icon: K().optional(),
    min: Ae().optional(),
    minExcluded: Xe().optional(),
    max: Ae().optional(),
    maxExcluded: Xe().optional(),
    attributes: H(ze).optional()
  });
  Dr = Mn.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional()
  });
  Mr = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      name: e.name ?? t.name
    };
    return (e.icon !== void 0 || t.icon !== void 0) && (n.icon = e.icon ?? t.icon), (e.min !== void 0 || t.min !== void 0) && (n.min = e.min ?? t.min), (e.minExcluded !== void 0 || t.minExcluded !== void 0) && (n.minExcluded = e.minExcluded ?? t.minExcluded), (e.maxExcluded !== void 0 || t.maxExcluded !== void 0) && (n.maxExcluded = e.maxExcluded ?? t.maxExcluded), i && i.length > 0 && (n.attributes = i), n;
  };
  Fr = (t, e) => {
    const i = {};
    return t.name !== e.name && (i.name = e.name), t.icon !== e.icon && (i.icon = e.icon), t.min !== e.min && (i.min = e.min !== void 0 && t.min !== void 0 ? e.min - t.min : e.min), t.minExcluded !== e.minExcluded && (i.minExcluded = e.minExcluded), t.max !== e.max && (i.max = e.max !== void 0 && t.max !== void 0 ? e.max - t.max : e.max), t.maxExcluded !== e.maxExcluded && (i.maxExcluded = e.maxExcluded), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  Ir = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.icon !== void 0 && (i.icon = t.icon), e.min !== void 0 && (i.min = t.min), e.minExcluded !== void 0 && (i.minExcluded = t.minExcluded), e.max !== void 0 && (i.max = t.max), e.maxExcluded !== void 0 && (i.maxExcluded = t.maxExcluded), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  Ur = X({
    removed: H(Qn).optional(),
    updated: H(X({
      benchmark: Qn,
      diff: Dr
    })).optional(),
    added: H(Mn).optional()
  });
  Gr = (t, e) => {
    const i = new Set(t.map((u) => u.guid)), n = new Set(e.map((u) => u.guid)), o = t.filter((u) => !n.has(u.guid)).map((u) => ({
      guid: u.guid
    })), r = e.filter((u) => !i.has(u.guid)), l = e.filter((u) => i.has(u.guid)).map((u) => {
      const v = t.find((w) => w.guid === u.guid), _ = Fr(v, u);
      return {
        benchmark: {
          guid: u.guid
        },
        diff: _
      };
    }).filter((u) => Object.keys(u.diff).length > 0), p = {};
    return o.length > 0 && (p.removed = o), l.length > 0 && (p.updated = l), r.length > 0 && (p.added = r), p;
  };
  zr = (t, e) => {
    var _a3, _b, _c2;
    const i = ((_a3 = e.added) == null ? void 0 : _a3.map((r) => r.guid)) ?? [], n = ((_b = e.removed) == null ? void 0 : _b.map((r) => r.guid)) ?? [], o = ((_c2 = e.updated) == null ? void 0 : _c2.map((r) => r.benchmark.guid)) ?? [];
    return {
      removed: i.map((r) => ({
        guid: r
      })),
      added: t.filter((r) => n.includes(r.guid)),
      updated: o.map((r) => {
        var _a4;
        const l = t.find((u) => u.guid === r), p = (_a4 = e.updated) == null ? void 0 : _a4.find((u) => u.benchmark.guid === r);
        return {
          benchmark: {
            guid: r
          },
          diff: Ir(l, p.diff)
        };
      })
    };
  };
  Kr = (t, e) => {
    let i = [
      ...t
    ];
    if (e.removed) {
      const n = new Set(e.removed.map((o) => o.guid));
      i = i.filter((o) => !n.has(o.guid));
    }
    if (e.updated) for (const n of e.updated) {
      const o = i.findIndex((r) => r.guid === n.benchmark.guid);
      o !== -1 && (i[o] = Mr(i[o], n.diff));
    }
    return e.added && i.push(...e.added), i;
  };
  qi = X({
    guid: K(),
    key: K(),
    name: K(),
    description: K().optional(),
    uri: K().optional(),
    kind: Ae().optional(),
    folder: K().optional(),
    canScale: Xe().optional(),
    defaultSiUnit: K().optional(),
    defaultImperialUnit: K().optional(),
    min: Ae().optional(),
    isMinExcluded: Xe().optional(),
    max: Ae().optional(),
    isMaxExcluded: Xe().optional(),
    defaultValue: Ae().optional(),
    formula: K().optional(),
    icon: K().optional(),
    image: K().optional(),
    unit: K().optional(),
    benchmarks: H(Mn).optional(),
    attributes: H(ze).optional()
  });
  qo = qi.omit({
    benchmarks: true,
    attributes: true
  });
  Hr = qi.partial().omit({
    benchmarks: true,
    attributes: true
  }).extend({
    benchmarks: Ur.optional(),
    attributes: je.optional()
  });
  Vr = (t, e) => {
    const i = {};
    return t.key !== e.key && (i.key = e.key), t.name !== e.name && (i.name = e.name), t.description !== e.description && (i.description = e.description), t.uri !== e.uri && (i.uri = e.uri), t.kind !== e.kind && (i.kind = e.kind !== void 0 && t.kind !== void 0 ? e.kind - t.kind : e.kind), t.canScale !== e.canScale && (i.canScale = e.canScale), t.defaultSiUnit !== e.defaultSiUnit && (i.defaultSiUnit = e.defaultSiUnit), t.defaultImperialUnit !== e.defaultImperialUnit && (i.defaultImperialUnit = e.defaultImperialUnit), t.min !== e.min && (i.min = e.min !== void 0 && t.min !== void 0 ? e.min - t.min : e.min), t.isMinExcluded !== e.isMinExcluded && (i.isMinExcluded = e.isMinExcluded), t.max !== e.max && (i.max = e.max !== void 0 && t.max !== void 0 ? e.max - t.max : e.max), t.isMaxExcluded !== e.isMaxExcluded && (i.isMaxExcluded = e.isMaxExcluded), t.defaultValue !== e.defaultValue && (i.defaultValue = e.defaultValue !== void 0 && t.defaultValue !== void 0 ? e.defaultValue - t.defaultValue : e.defaultValue), t.formula !== e.formula && (i.formula = e.formula), t.icon !== e.icon && (i.icon = e.icon), t.image !== e.image && (i.image = e.image), t.unit !== e.unit && (i.unit = e.unit), Le(t.benchmarks, e.benchmarks) || (i.benchmarks = Gr(t.benchmarks ?? [], e.benchmarks ?? [])), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  qr = (t, e) => {
    const i = {};
    return e.key !== void 0 && (i.key = t.key), e.name !== void 0 && (i.name = t.name), e.description !== void 0 && (i.description = t.description), e.uri !== void 0 && (i.uri = t.uri), e.kind !== void 0 && (i.kind = t.kind), e.canScale !== void 0 && (i.canScale = t.canScale), e.defaultSiUnit !== void 0 && (i.defaultSiUnit = t.defaultSiUnit), e.defaultImperialUnit !== void 0 && (i.defaultImperialUnit = t.defaultImperialUnit), e.min !== void 0 && (i.min = t.min), e.isMinExcluded !== void 0 && (i.isMinExcluded = t.isMinExcluded), e.max !== void 0 && (i.max = t.max), e.isMaxExcluded !== void 0 && (i.isMaxExcluded = t.isMaxExcluded), e.defaultValue !== void 0 && (i.defaultValue = t.defaultValue), e.formula !== void 0 && (i.formula = t.formula), e.icon !== void 0 && (i.icon = t.icon), e.image !== void 0 && (i.image = t.image), e.unit !== void 0 && (i.unit = t.unit), e.benchmarks !== void 0 && (i.benchmarks = zr(t.benchmarks ?? [], e.benchmarks)), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  $r = (t, e) => {
    const i = e.benchmarks ? Kr(t.benchmarks ?? [], e.benchmarks) : t.benchmarks, n = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, o = {
      guid: t.guid,
      key: e.key ?? t.key,
      name: e.name ?? t.name
    };
    return (e.description !== void 0 || t.description !== void 0) && (o.description = e.description ?? t.description), (e.uri !== void 0 || t.uri !== void 0) && (o.uri = e.uri ?? t.uri), (e.kind !== void 0 || t.kind !== void 0) && (o.kind = e.kind ?? t.kind), (e.folder !== void 0 || t.folder !== void 0) && (o.folder = e.folder ?? t.folder), (e.canScale !== void 0 || t.canScale !== void 0) && (o.canScale = e.canScale ?? t.canScale), (e.defaultSiUnit !== void 0 || t.defaultSiUnit !== void 0) && (o.defaultSiUnit = e.defaultSiUnit ?? t.defaultSiUnit), (e.defaultImperialUnit !== void 0 || t.defaultImperialUnit !== void 0) && (o.defaultImperialUnit = e.defaultImperialUnit ?? t.defaultImperialUnit), (e.min !== void 0 || t.min !== void 0) && (o.min = e.min ?? t.min), (e.isMinExcluded !== void 0 || t.isMinExcluded !== void 0) && (o.isMinExcluded = e.isMinExcluded ?? t.isMinExcluded), (e.max !== void 0 || t.max !== void 0) && (o.max = e.max ?? t.max), (e.isMaxExcluded !== void 0 || t.isMaxExcluded !== void 0) && (o.isMaxExcluded = e.isMaxExcluded ?? t.isMaxExcluded), (e.defaultValue !== void 0 || t.defaultValue !== void 0) && (o.defaultValue = e.defaultValue ?? t.defaultValue), (e.formula !== void 0 || t.formula !== void 0) && (o.formula = e.formula ?? t.formula), (e.icon !== void 0 || t.icon !== void 0) && (o.icon = e.icon ?? t.icon), (e.image !== void 0 || t.image !== void 0) && (o.image = e.image ?? t.image), (e.unit !== void 0 || t.unit !== void 0) && (o.unit = e.unit ?? t.unit), i && i.length > 0 && (o.benchmarks = i), n && n.length > 0 && (o.attributes = n), o;
  };
  Jr = X({
    removed: H(Ri).optional(),
    updated: H(X({
      quality: Ri,
      diff: Hr
    })).optional(),
    added: H(qi).optional()
  });
  jt = X({
    guid: K(),
    name: K(),
    description: K().optional(),
    icon: K().optional(),
    maxChildren: Ae().int().optional(),
    compatiblePorts: H(ri).optional(),
    attributes: H(ze).optional()
  });
  $o = jt.omit({
    compatiblePorts: true,
    attributes: true
  });
  jr = jt.partial().omit({
    compatiblePorts: true,
    attributes: true
  }).extend({
    compatiblePorts: H(ri).optional(),
    attributes: je.optional(),
    description: K().nullable().optional(),
    icon: K().nullable().optional(),
    maxChildren: Ae().int().nullable().optional()
  });
  Ai = (t, e) => {
    const i = {};
    return t.name !== e.name && (i.name = e.name), t.description !== e.description && (i.description = e.description ?? null), t.icon !== e.icon && (i.icon = e.icon ?? null), t.maxChildren !== e.maxChildren && (i.maxChildren = e.maxChildren ?? null), JSON.stringify(t.compatiblePorts) !== JSON.stringify(e.compatiblePorts) && (i.compatiblePorts = e.compatiblePorts), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  Jo = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.description !== void 0 && (i.description = t.description ?? null), e.icon !== void 0 && (i.icon = t.icon ?? null), e.maxChildren !== void 0 && (i.maxChildren = t.maxChildren ?? null), e.compatiblePorts !== void 0 && (i.compatiblePorts = t.compatiblePorts), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  hn = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      name: e.name ?? t.name
    };
    return "description" in e ? e.description !== null && (n.description = e.description) : t.description !== void 0 && (n.description = t.description), "icon" in e ? e.icon !== null && (n.icon = e.icon) : t.icon !== void 0 && (n.icon = t.icon), "maxChildren" in e ? e.maxChildren !== null && (n.maxChildren = e.maxChildren) : t.maxChildren !== void 0 && (n.maxChildren = t.maxChildren), (e.compatiblePorts !== void 0 || t.compatiblePorts !== void 0) && (n.compatiblePorts = e.compatiblePorts ?? t.compatiblePorts), i && i.length > 0 && (n.attributes = i), n;
  };
  Wr = X({
    removed: H(ri).optional(),
    updated: H(X({
      port: ri,
      diff: jr
    })).optional(),
    added: H(jt).optional()
  });
  Yr = (t, e) => {
    const i = {}, n = new Set(t.map((u) => u.guid)), o = new Set(e.map((u) => u.guid)), r = t.filter((u) => !o.has(u.guid)).map((u) => ({
      guid: u.guid
    }));
    r.length > 0 && (i.removed = r);
    const l = t.filter((u) => o.has(u.guid)).map((u) => {
      const v = e.find((w) => w.guid === u.guid), _ = Ai(u, v);
      return {
        port: {
          guid: u.guid
        },
        diff: _
      };
    }).filter((u) => Object.keys(u.diff).length > 0);
    l.length > 0 && (i.updated = l);
    const p = e.filter((u) => !n.has(u.guid));
    return p.length > 0 && (i.added = p), i;
  };
  Zr = (t, e) => {
    var _a3;
    const i = {}, n = ((_a3 = e.removed) == null ? void 0 : _a3.map((o) => o.guid)) ?? [];
    return e.removed && (i.added = t.filter((o) => n.includes(o.guid))), e.added && (i.removed = e.added.map((o) => ({
      guid: o.guid
    }))), e.updated && (i.updated = e.updated.map((o) => {
      const r = t.find((l) => l.guid === o.port.guid);
      return {
        port: {
          guid: o.port.guid
        },
        diff: Jo(r, o.diff)
      };
    })), i;
  };
  Xr = (t, e) => {
    let i = [
      ...t
    ];
    if (e.removed) {
      const n = new Set(e.removed.map((o) => o.guid));
      i = i.filter((o) => !n.has(o.guid));
    }
    if (e.updated) for (const n of e.updated) {
      const o = i.findIndex((r) => r.guid === n.port.guid);
      o !== -1 && (i[o] = hn(i[o], n.diff));
    }
    return e.added && i.push(...e.added), i;
  };
  Xd = (t, e, i) => {
    if (!t || !e || t.guid === e.guid) return true;
    const n = t.compatiblePorts ?? [], o = e.compatiblePorts ?? [];
    return n.length === 0 && o.length === 0 ? true : n.length === 0 ? o.some((r) => r.guid === t.guid) : o.length === 0 ? n.some((r) => r.guid === e.guid) : n.some((r) => r.guid === e.guid) || o.some((r) => r.guid === t.guid);
  };
  It = X({
    guid: K(),
    quality: Ri,
    value: K(),
    unit: K().optional(),
    attributes: H(ze).optional()
  });
  Xt = It.omit({
    attributes: true
  });
  Qr = It.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional()
  });
  Fn = (t, e) => {
    var _a3, _b;
    const i = {};
    return ((_a3 = t.quality) == null ? void 0 : _a3.guid) !== ((_b = e.quality) == null ? void 0 : _b.guid) && (i.quality = e.quality), t.value !== e.value && (i.value = e.value), t.unit !== e.unit && (i.unit = e.unit), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  In = (t, e) => {
    const i = {};
    return e.quality !== void 0 && (i.quality = t.quality), e.value !== void 0 && (i.value = t.value), e.unit !== void 0 && (i.unit = t.unit), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  Un = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      quality: e.quality ?? t.quality,
      value: e.value ?? t.value
    };
    return (e.unit !== void 0 || t.unit !== void 0) && (n.unit = e.unit ?? t.unit), i && i.length > 0 && (n.attributes = i), n;
  };
  $i = X({
    removed: H(eo).optional(),
    updated: H(X({
      prop: eo,
      diff: Qr
    })).optional(),
    added: H(It).optional()
  });
  jo = (t, e) => {
    const i = new Set(t.map((u) => u.guid)), n = new Set(e.map((u) => u.guid)), o = t.filter((u) => !n.has(u.guid)).map((u) => ({
      guid: u.guid
    })), r = e.filter((u) => !i.has(u.guid)), l = e.filter((u) => i.has(u.guid)).map((u) => {
      const v = t.find((w) => w.guid === u.guid), _ = Fn(v, u);
      return {
        prop: {
          guid: u.guid
        },
        diff: _
      };
    }).filter((u) => Object.keys(u.diff).length > 0), p = {};
    return o.length > 0 && (p.removed = o), l.length > 0 && (p.updated = l), r.length > 0 && (p.added = r), p;
  };
  Wo = (t, e) => {
    var _a3, _b, _c2;
    const i = ((_a3 = e.added) == null ? void 0 : _a3.map((r) => r.guid)) ?? [], n = ((_b = e.removed) == null ? void 0 : _b.map((r) => r.guid)) ?? [], o = ((_c2 = e.updated) == null ? void 0 : _c2.map((r) => r.prop.guid)) ?? [];
    return {
      removed: i.map((r) => ({
        guid: r
      })),
      added: t.filter((r) => n.includes(r.guid)),
      updated: o.map((r) => {
        var _a4;
        const l = t.find((u) => u.guid === r), p = (_a4 = e.updated) == null ? void 0 : _a4.find((u) => u.prop.guid === r);
        return {
          prop: {
            guid: r
          },
          diff: In(l, p.diff)
        };
      })
    };
  };
  Yo = (t, e) => {
    let i = [
      ...t
    ];
    if (e.removed) {
      const n = new Set(e.removed.map((o) => o.guid));
      i = i.filter((o) => !n.has(o.guid));
    }
    if (e.updated) for (const n of e.updated) {
      const o = i.findIndex((r) => r.guid === n.prop.guid);
      o !== -1 && (i[o] = Un(i[o], n.diff));
    }
    return e.added && i.push(...e.added), i;
  };
  Ji = X({
    guid: K(),
    name: K(),
    description: K().optional(),
    icon: K().optional(),
    attributes: H(ze).optional()
  });
  Zo = Ji.omit({
    attributes: true
  });
  ea = Ji.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional(),
    description: K().nullable().optional(),
    icon: K().nullable().optional()
  });
  ta = (t, e) => {
    const i = {};
    return t.name !== e.name && (i.name = e.name), t.description !== e.description && (i.description = e.description ?? null), t.icon !== e.icon && (i.icon = e.icon ?? null), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  ia = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.description !== void 0 && (i.description = t.description ?? null), e.icon !== void 0 && (i.icon = t.icon ?? null), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  na = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      name: "name" in e && e.name !== void 0 ? e.name : t.name
    };
    if ("description" in e) {
      const o = e.description ?? void 0;
      o !== void 0 && (n.description = o);
    } else t.description !== void 0 && (n.description = t.description);
    if ("icon" in e) {
      const o = e.icon ?? void 0;
      o !== void 0 && (n.icon = o);
    } else t.icon !== void 0 && (n.icon = t.icon);
    return i && i.length > 0 && (n.attributes = i), n;
  };
  oa = X({
    removed: H(gn).optional(),
    updated: H(X({
      tag: gn,
      diff: ea
    })).optional(),
    added: H(Ji).optional()
  });
  sa = (t, e) => {
    const i = {}, n = new Set(t.map((u) => u.guid)), o = new Set(e.map((u) => u.guid)), r = t.filter((u) => !o.has(u.guid)).map((u) => ({
      guid: u.guid
    }));
    r.length > 0 && (i.removed = r);
    const l = t.filter((u) => o.has(u.guid)).map((u) => {
      const v = e.find((w) => w.guid === u.guid), _ = ta(u, v);
      return {
        tag: {
          guid: u.guid
        },
        diff: _
      };
    }).filter((u) => Object.keys(u.diff).length > 0);
    l.length > 0 && (i.updated = l);
    const p = e.filter((u) => !n.has(u.guid));
    return p.length > 0 && (i.added = p), i;
  };
  ra = (t, e) => {
    var _a3;
    const i = {}, n = ((_a3 = e.removed) == null ? void 0 : _a3.map((o) => o.guid)) ?? [];
    return e.removed && (i.added = t.filter((o) => n.includes(o.guid))), e.added && (i.removed = e.added.map((o) => ({
      guid: o.guid
    }))), e.updated && (i.updated = e.updated.map((o) => {
      const r = t.find((l) => l.guid === o.tag.guid);
      return {
        tag: {
          guid: o.tag.guid
        },
        diff: ia(r, o.diff)
      };
    })), i;
  };
  aa = (t, e) => {
    let i = [
      ...t
    ];
    if (e.removed) {
      const n = new Set(e.removed.map((o) => o.guid));
      i = i.filter((o) => !n.has(o.guid));
    }
    if (e.updated) for (const n of e.updated) {
      const o = i.findIndex((r) => r.guid === n.tag.guid);
      o !== -1 && (i[o] = na(i[o], n.diff));
    }
    return e.added && i.push(...e.added), i;
  };
  ji = X({
    guid: K(),
    name: K(),
    description: K().optional(),
    icon: K().optional(),
    attributes: H(ze).optional()
  });
  Xo = ji.omit({
    attributes: true
  });
  ca = ji.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional(),
    description: K().nullable().optional(),
    icon: K().nullable().optional()
  });
  da = (t, e) => {
    const i = {};
    return t.name !== e.name && (i.name = e.name), t.description !== e.description && (i.description = e.description ?? null), t.icon !== e.icon && (i.icon = e.icon ?? null), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  ua = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.description !== void 0 && (i.description = t.description ?? null), e.icon !== void 0 && (i.icon = t.icon ?? null), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  la = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      name: "name" in e && e.name !== void 0 ? e.name : t.name
    };
    if ("description" in e) {
      const o = e.description ?? void 0;
      o !== void 0 && (n.description = o);
    } else t.description !== void 0 && (n.description = t.description);
    if ("icon" in e) {
      const o = e.icon ?? void 0;
      o !== void 0 && (n.icon = o);
    } else t.icon !== void 0 && (n.icon = t.icon);
    return i && i.length > 0 && (n.attributes = i), n;
  };
  ga = X({
    removed: H(ci).optional(),
    updated: H(X({
      concept: ci,
      diff: ca
    })).optional(),
    added: H(ji).optional()
  });
  pa = (t, e) => {
    const i = {}, n = new Set(t.map((u) => u.guid)), o = new Set(e.map((u) => u.guid)), r = t.filter((u) => !o.has(u.guid)).map((u) => ({
      guid: u.guid
    }));
    r.length > 0 && (i.removed = r);
    const l = t.filter((u) => o.has(u.guid)).map((u) => {
      const v = e.find((w) => w.guid === u.guid), _ = da(u, v);
      return {
        concept: {
          guid: u.guid
        },
        diff: _
      };
    }).filter((u) => Object.keys(u.diff).length > 0);
    l.length > 0 && (i.updated = l);
    const p = e.filter((u) => !n.has(u.guid));
    return p.length > 0 && (i.added = p), i;
  };
  fa = (t, e) => {
    var _a3;
    const i = {}, n = ((_a3 = e.removed) == null ? void 0 : _a3.map((o) => o.guid)) ?? [];
    return e.removed && (i.added = t.filter((o) => n.includes(o.guid))), e.added && (i.removed = e.added.map((o) => ({
      guid: o.guid
    }))), e.updated && (i.updated = e.updated.map((o) => {
      const r = t.find((l) => l.guid === o.concept.guid);
      return {
        concept: {
          guid: o.concept.guid
        },
        diff: ua(r, o.diff)
      };
    })), i;
  };
  ma = (t, e) => {
    let i = [
      ...t
    ];
    if (e.removed) {
      const n = new Set(e.removed.map((o) => o.guid));
      i = i.filter((o) => !n.has(o.guid));
    }
    if (e.updated) for (const n of e.updated) {
      const o = i.findIndex((r) => r.guid === n.concept.guid);
      o !== -1 && (i[o] = la(i[o], n.diff));
    }
    return e.added && i.push(...e.added), i;
  };
  Wi = X({
    guid: K(),
    name: K().optional(),
    tags: H(gn).optional(),
    file: un,
    description: K().optional(),
    attributes: H(ze).optional()
  });
  Qo = Wi.omit({
    tags: true,
    attributes: true
  });
  ha = Wi.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional()
  });
  ya = (t, e) => {
    const i = {};
    return t.name !== e.name && (i.name = e.name), JSON.stringify(t.tags) !== JSON.stringify(e.tags) && (i.tags = e.tags), t.file.guid !== e.file.guid && (i.file = e.file), t.description !== e.description && (i.description = e.description), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  va = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.tags !== void 0 && (i.tags = t.tags), e.file !== void 0 && (i.file = t.file), e.description !== void 0 && (i.description = t.description), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  wa = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      file: e.file ?? t.file
    };
    return (e.name !== void 0 || t.name !== void 0) && (n.name = e.name ?? t.name), (e.tags !== void 0 || t.tags !== void 0) && (n.tags = e.tags ?? t.tags), (e.description !== void 0 || t.description !== void 0) && (n.description = e.description ?? t.description), i && i.length > 0 && (n.attributes = i), n;
  };
  Sa = X({
    removed: H(to).optional(),
    updated: H(X({
      model: to,
      diff: ha
    })).optional(),
    added: H(Wi).optional()
  });
  Ea = (t, e) => {
    const i = t.map((r) => {
      var _a3;
      return nr((_a3 = r.tags) == null ? void 0 : _a3.map((l) => l.guid), e);
    }), n = Math.max(...i), o = i.indexOf(n);
    return t[o];
  };
  _a = (t, e) => !e || e.length === 0 ? t : t.filter((i) => {
    if (!i.tags || i.tags.length === 0) return false;
    const n = i.tags.map((o) => o.guid);
    return e.every((o) => n.includes(o));
  });
  Gn = (t, e) => {
    if (t.length === 0) return;
    if (e.length === 0) return t.find((o) => !o.tags || o.tags.length === 0) ?? t[0];
    const i = _a(t, e);
    if (i.length !== 0) return Ea(i, e);
  };
  Ft = X({
    guid: K(),
    name: K().optional(),
    t: Ae(),
    point: zi,
    direction: Jt,
    description: K().optional(),
    port: ri.optional(),
    mandatory: Xe().optional(),
    maxChildren: Ae().int().optional(),
    props: H(It).optional(),
    attributes: H(ze).optional()
  });
  es = Ft.omit({
    props: true,
    attributes: true
  });
  Ft.omit({
    props: true
  }).extend({
    props: H(Xt).optional()
  });
  xa = Ft.partial().omit({
    point: true,
    direction: true,
    props: true,
    attributes: true
  }).extend({
    point: Dn.optional(),
    direction: di.optional(),
    props: $i.optional(),
    attributes: je.optional(),
    maxChildren: Ae().int().nullable().optional()
  });
  yn = (t, e) => {
    var _a3, _b;
    const i = {};
    return t.name !== e.name && (i.name = e.name), t.description !== e.description && (i.description = e.description), ((_a3 = t.port) == null ? void 0 : _a3.guid) !== ((_b = e.port) == null ? void 0 : _b.guid) && (i.port = e.port), t.mandatory !== e.mandatory && (i.mandatory = e.mandatory), t.maxChildren !== e.maxChildren && (i.maxChildren = e.maxChildren ?? null), t.t !== e.t && (i.t = e.t), Le(t.point, e.point) || (i.point = Fo(t.point, e.point)), Le(t.direction, e.direction) || (i.direction = pn(t.direction, e.direction)), Le(t.props, e.props) || (i.props = jo(t.props ?? [], e.props ?? [])), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  ts = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.description !== void 0 && (i.description = t.description), e.port !== void 0 && (i.port = t.port), e.mandatory !== void 0 && (i.mandatory = t.mandatory), e.maxChildren !== void 0 && (i.maxChildren = t.maxChildren ?? null), e.t !== void 0 && (i.t = t.t), e.point !== void 0 && (i.point = lr(t.point, e.point)), e.direction !== void 0 && (i.direction = gr(t.direction, e.direction)), e.props !== void 0 && (i.props = Wo(t.props ?? [], e.props)), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  vn = (t, e) => {
    const i = e.props ? Yo(t.props ?? [], e.props) : t.props, n = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, o = {
      guid: t.guid,
      t: e.t ?? t.t,
      point: e.point ? Io(t.point, e.point) : t.point,
      direction: e.direction ? fn(t.direction, e.direction) : t.direction
    };
    return (e.name !== void 0 || t.name !== void 0) && (o.name = e.name ?? t.name), (e.description !== void 0 || t.description !== void 0) && (o.description = e.description ?? t.description), (e.port !== void 0 || t.port !== void 0) && (o.port = e.port ?? t.port), (e.mandatory !== void 0 || t.mandatory !== void 0) && (o.mandatory = e.mandatory ?? t.mandatory), "maxChildren" in e ? e.maxChildren !== null && (o.maxChildren = e.maxChildren) : t.maxChildren !== void 0 && (o.maxChildren = t.maxChildren), i && i.length > 0 && (o.props = i), n && n.length > 0 && (o.attributes = n), o;
  };
  Aa = X({
    removed: H(Ni).optional(),
    updated: H(X({
      connector: Ni,
      diff: xa
    })).optional(),
    added: H(Ft).optional()
  });
  li = X({
    guid: K(),
    name: K(),
    parent: ai.optional(),
    isAbstract: Xe().optional(),
    folder: K().optional(),
    models: H(Wi).optional(),
    connectors: H(Ft).optional(),
    props: H(It).optional(),
    stock: Ae().optional(),
    virtual: Xe().optional(),
    unit: K().optional(),
    createdAt: At(),
    updatedAt: At(),
    location: Pn.optional(),
    authors: H(si).optional(),
    concepts: H(ci).optional(),
    icon: K().optional(),
    image: K().optional(),
    description: K().optional(),
    attributes: H(ze).optional()
  });
  Yi = li.omit({
    models: true,
    connectors: true,
    props: true,
    attributes: true,
    authors: true,
    concepts: true
  });
  is = li.omit({
    models: true,
    connectors: true,
    props: true,
    attributes: true
  }).extend({
    models: H(Qo).optional(),
    connectors: H(es).optional(),
    props: H(Xt).optional(),
    attributes: H(Zt).optional()
  });
  Ta = li.partial().omit({
    models: true,
    connectors: true,
    props: true,
    attributes: true
  }).extend({
    models: Sa.optional(),
    connectors: Aa.optional(),
    props: $i.optional(),
    attributes: je.optional(),
    description: K().nullable().optional(),
    icon: K().nullable().optional(),
    image: K().nullable().optional(),
    location: Pn.nullable().optional(),
    folder: K().nullable().optional(),
    concepts: H(ci).nullable().optional(),
    authors: H(si).nullable().optional(),
    parent: ai.nullable().optional()
  });
  ka = (t, e) => {
    var _a3, _b, _c2, _d2;
    const i = {};
    t.name !== e.name && (i.name = e.name), ((_a3 = t.parent) == null ? void 0 : _a3.guid) !== ((_b = e.parent) == null ? void 0 : _b.guid) && (i.parent = e.parent), t.isAbstract !== e.isAbstract && (i.isAbstract = e.isAbstract), t.folder !== e.folder && (i.folder = e.folder), t.stock !== e.stock && (i.stock = e.stock), t.virtual !== e.virtual && (i.virtual = e.virtual), t.unit !== e.unit && (i.unit = e.unit), ((_c2 = t.location) == null ? void 0 : _c2.guid) !== ((_d2 = e.location) == null ? void 0 : _d2.guid) && (i.location = e.location), t.icon !== e.icon && (i.icon = e.icon), t.image !== e.image && (i.image = e.image), t.description !== e.description && (i.description = e.description), yt(t.authors, e.authors) || (i.authors = e.authors), yt(t.concepts, e.concepts) || (i.concepts = e.concepts);
    const n = ct("model", t.models ?? [], e.models ?? [], ya);
    Object.keys(n).length > 0 && (i.models = n);
    const o = ct("connector", t.connectors ?? [], e.connectors ?? [], yn);
    Object.keys(o).length > 0 && (i.connectors = o);
    const r = ct("prop", t.props ?? [], e.props ?? [], Fn);
    Object.keys(r).length > 0 && (i.props = r);
    const l = qe(t.attributes ?? [], e.attributes ?? []);
    return Object.keys(l).length > 0 && (i.attributes = l), i;
  };
  ba = (t, e) => {
    const i = e.models || t.models ? Ze("model", t.models ?? [], e.models, wa) : void 0, n = e.connectors || t.connectors ? Ze("connector", t.connectors ?? [], e.connectors, vn) : void 0, o = e.props || t.props ? Ze("prop", t.props ?? [], e.props, Un) : void 0, r = e.attributes || t.attributes ? We(t.attributes ?? [], e.attributes ?? {}) : void 0, l = {
      guid: t.guid,
      name: e.name ?? t.name,
      isAbstract: e.isAbstract ?? t.isAbstract,
      createdAt: e.createdAt ?? t.createdAt,
      updatedAt: e.updatedAt ?? t.updatedAt
    };
    return (e.parent !== void 0 ? e.parent ?? void 0 : t.parent) && (l.parent = e.parent !== void 0 ? e.parent ?? void 0 : t.parent), (e.folder !== void 0 ? e.folder ?? void 0 : t.folder) && (l.folder = e.folder !== void 0 ? e.folder ?? void 0 : t.folder), (e.stock !== void 0 ? e.stock : t.stock) && (l.stock = e.stock !== void 0 ? e.stock : t.stock), (e.virtual ?? t.virtual) && (l.virtual = e.virtual ?? t.virtual), (e.unit !== void 0 ? e.unit : t.unit) && (l.unit = e.unit !== void 0 ? e.unit : t.unit), (e.location !== void 0 ? e.location ?? void 0 : t.location) && (l.location = e.location !== void 0 ? e.location ?? void 0 : t.location), (e.icon !== void 0 ? e.icon ?? void 0 : t.icon) && (l.icon = e.icon !== void 0 ? e.icon ?? void 0 : t.icon), (e.image !== void 0 ? e.image ?? void 0 : t.image) && (l.image = e.image !== void 0 ? e.image ?? void 0 : t.image), (e.description !== void 0 ? e.description ?? void 0 : t.description) && (l.description = e.description !== void 0 ? e.description ?? void 0 : t.description), (e.authors !== void 0 ? e.authors ?? void 0 : t.authors) && (l.authors = e.authors !== void 0 ? e.authors ?? void 0 : t.authors), (e.concepts !== void 0 ? e.concepts ?? void 0 : t.concepts) && (l.concepts = e.concepts !== void 0 ? e.concepts ?? void 0 : t.concepts), i && i.length > 0 && (l.models = i), n && n.length > 0 && (l.connectors = n), o && o.length > 0 && (l.props = o), r && r.length > 0 && (l.attributes = r), l;
  };
  Ca = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.parent !== void 0 && (i.parent = t.parent ?? null), e.isAbstract !== void 0 && (i.isAbstract = t.isAbstract), e.folder !== void 0 && (i.folder = t.folder ?? null), e.stock !== void 0 && (i.stock = t.stock), e.virtual !== void 0 && (i.virtual = t.virtual), e.unit !== void 0 && (i.unit = t.unit), e.location !== void 0 && (i.location = t.location ?? null), e.icon !== void 0 && (i.icon = t.icon ?? null), e.image !== void 0 && (i.image = t.image ?? null), e.description !== void 0 && (i.description = t.description ?? null), e.authors !== void 0 && (i.authors = t.authors ?? null), e.concepts !== void 0 && (i.concepts = t.concepts ?? null), e.models && (i.models = dt("model", t.models ?? [], e.models, va)), e.connectors && (i.connectors = dt("connector", t.connectors ?? [], e.connectors, ts)), e.props && (i.props = dt("prop", t.props ?? [], e.props, In)), e.attributes && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  Ba = X({
    removed: H(ai).optional(),
    updated: H(X({
      type: ai,
      diff: Ta
    })).optional(),
    added: H(li).optional()
  });
  Zi = X({
    guid: K(),
    path: K(),
    isHidden: Xe().optional(),
    isLocked: Xe().optional(),
    color: K().optional(),
    description: K().optional(),
    attributes: H(ze).optional()
  });
  ns = Zi.omit({
    attributes: true
  });
  Ra = Zi.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional()
  });
  Na = (t, e) => {
    const i = {};
    return t.path !== e.path && (i.path = e.path), t.isHidden !== e.isHidden && (i.isHidden = e.isHidden), t.isLocked !== e.isLocked && (i.isLocked = e.isLocked), t.color !== e.color && (i.color = e.color), t.description !== e.description && (i.description = e.description), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  La = (t, e) => {
    const i = {};
    return e.path !== void 0 && (i.path = t.path), e.isHidden !== void 0 && (i.isHidden = t.isHidden), e.isLocked !== void 0 && (i.isLocked = t.isLocked), e.color !== void 0 && (i.color = t.color), e.description !== void 0 && (i.description = t.description), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  os = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      path: e.path ?? t.path
    };
    return (e.isHidden !== void 0 || t.isHidden !== void 0) && (n.isHidden = e.isHidden ?? t.isHidden), (e.isLocked !== void 0 || t.isLocked !== void 0) && (n.isLocked = e.isLocked ?? t.isLocked), (e.color !== void 0 || t.color !== void 0) && (n.color = e.color ?? t.color), (e.description !== void 0 || t.description !== void 0) && (n.description = e.description ?? t.description), i && i.length > 0 && (n.attributes = i), n;
  };
  Oa = X({
    removed: H(ln).optional(),
    updated: H(X({
      layer: ln,
      diff: Ra
    })).optional(),
    added: H(Zi).optional()
  });
  gi = X({
    guid: K(),
    name: K().optional(),
    type: ai.optional(),
    design: Li.optional(),
    plane: mn.optional(),
    center: Mo.optional(),
    scale: Ae().optional(),
    mirrorPlane: mn.optional(),
    isHidden: Xe().optional(),
    isLocked: Xe().optional(),
    color: K().optional(),
    description: K().optional(),
    props: H(It).optional(),
    attributes: H(ze).optional()
  });
  ss = gi.omit({
    props: true,
    attributes: true
  });
  gi.omit({
    props: true
  }).extend({
    props: H(Xt).optional()
  });
  Pa = gi.partial().omit({
    plane: true,
    props: true,
    attributes: true
  }).extend({
    plane: fr.optional(),
    props: $i.optional(),
    attributes: je.optional()
  });
  Da = (t, e) => {
    var _a3, _b, _c2, _d2;
    const i = {};
    return t.name !== e.name && (i.name = e.name), ((_a3 = t.type) == null ? void 0 : _a3.guid) !== ((_b = e.type) == null ? void 0 : _b.guid) && (i.type = e.type), ((_c2 = t.design) == null ? void 0 : _c2.guid) !== ((_d2 = e.design) == null ? void 0 : _d2.guid) && (i.design = e.design), Le(t.plane, e.plane) || (i.plane = e.plane ? mr(t.plane ?? {
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
    }, e.plane) : void 0), Le(t.center, e.center) || (i.center = e.center), t.scale !== e.scale && (i.scale = e.scale), Le(t.mirrorPlane, e.mirrorPlane) || (i.mirrorPlane = e.mirrorPlane), t.isHidden !== e.isHidden && (i.isHidden = e.isHidden), t.isLocked !== e.isLocked && (i.isLocked = e.isLocked), t.color !== e.color && (i.color = e.color), t.description !== e.description && (i.description = e.description), Le(t.props, e.props) || (i.props = jo(t.props ?? [], e.props ?? [])), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  Ma = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.type !== void 0 && (i.type = t.type), e.design !== void 0 && (i.design = t.design), e.plane !== void 0 && (i.plane = t.plane), e.center !== void 0 && (i.center = t.center), e.scale !== void 0 && (i.scale = t.scale), e.mirrorPlane !== void 0 && (i.mirrorPlane = t.mirrorPlane), e.isHidden !== void 0 && (i.isHidden = t.isHidden), e.isLocked !== void 0 && (i.isLocked = t.isLocked), e.color !== void 0 && (i.color = t.color), e.description !== void 0 && (i.description = t.description), e.props !== void 0 && (i.props = Wo(t.props ?? [], e.props)), e.attributes !== void 0 && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  zn = (t, e) => {
    let i = t.plane;
    if (e.plane) {
      const l = e.plane;
      l.origin && l.xAxis && l.yAxis ? i = l : i = hr(t.plane ?? {
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
      }, e.plane);
    }
    const n = e.props ? Yo(t.props ?? [], e.props) : t.props, o = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, r = {
      guid: t.guid,
      name: e.name ?? t.name,
      type: e.type ?? t.type
    };
    return (e.design !== void 0 || t.design !== void 0) && (r.design = e.design ?? t.design), i && (r.plane = i), (e.center !== void 0 || t.center !== void 0) && (r.center = e.center ?? t.center), (e.scale !== void 0 || t.scale !== void 0) && (r.scale = e.scale ?? t.scale), (e.mirrorPlane !== void 0 || t.mirrorPlane !== void 0) && (r.mirrorPlane = e.mirrorPlane ?? t.mirrorPlane), (e.isHidden !== void 0 || t.isHidden !== void 0) && (r.isHidden = e.isHidden ?? t.isHidden), (e.isLocked !== void 0 || t.isLocked !== void 0) && (r.isLocked = e.isLocked ?? t.isLocked), (e.color !== void 0 || t.color !== void 0) && (r.color = e.color ?? t.color), (e.description !== void 0 || t.description !== void 0) && (r.description = e.description ?? t.description), n && n.length > 0 && (r.props = n), o && o.length > 0 && (r.attributes = o), r;
  };
  Fa = X({
    removed: H(Mt).optional(),
    updated: H(X({
      piece: Mt,
      diff: Pa
    })).optional(),
    added: H(gi).optional()
  });
  Ia = (t, e, i) => ({
    connections: {
      removed: [
        {
          guid: Fs(t, e, i).guid
        }
      ]
    }
  });
  Ua = (t, e) => {
    const i = t.find((n) => n.guid === e);
    if (!i) throw new Error(`Piece ${e} not found in pieces`);
    return i;
  };
  Xi = X({
    guid: K(),
    pieces: H(Mt),
    color: K().optional(),
    name: K().optional(),
    description: K().optional(),
    attributes: H(ze).optional()
  });
  Ga = Xi.partial().omit({
    attributes: true
  }).extend({
    attributes: je.optional()
  });
  za = (t, e) => {
    const i = {};
    yt(t.pieces, e.pieces) || (i.pieces = e.pieces), t.color !== e.color && (i.color = e.color), t.name !== e.name && (i.name = e.name), t.description !== e.description && (i.description = e.description);
    const n = qe(t.attributes ?? [], e.attributes ?? []);
    return Object.keys(n).length > 0 && (i.attributes = n), i;
  };
  Ka = (t, e) => {
    const i = {};
    return e.pieces !== void 0 && (i.pieces = t.pieces), e.color !== void 0 && (i.color = t.color), e.name !== void 0 && (i.name = t.name), e.description !== void 0 && (i.description = t.description), e.attributes && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  rs = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      pieces: e.pieces ?? t.pieces
    };
    return (e.color !== void 0 || t.color !== void 0) && (n.color = e.color ?? t.color), (e.name !== void 0 || t.name !== void 0) && (n.name = e.name ?? t.name), (e.description !== void 0 || t.description !== void 0) && (n.description = e.description ?? t.description), i && i.length > 0 && (n.attributes = i), n;
  };
  Ha = X({
    removed: H(io).optional(),
    updated: H(X({
      group: io,
      diff: Ga
    })).optional(),
    added: H(Xi).optional()
  });
  as = Xi.omit({
    pieces: true,
    attributes: true
  });
  Di = X({
    piece: Mt,
    designPiece: Mt.optional(),
    connector: Ni.optional()
  });
  wn = Di.partial();
  uo = X({
    piece: Mt,
    designPiece: Mt.optional(),
    connector: Ni.optional()
  });
  X({
    removed: H(uo).optional(),
    updated: H(X({
      side: uo,
      diff: wn
    })).optional(),
    added: H(Di).optional()
  });
  let ls, gs, Vn, ps, fs, hs, mo, dc, ho, uc, lc, gc, yo, pc, ct, dt, Ze, Ac, Tc, Sn;
  lo = (t, e) => {
    var _a3, _b, _c2, _d2, _e, _f;
    const i = {};
    return ((_a3 = t.piece) == null ? void 0 : _a3.guid) !== ((_b = e.piece) == null ? void 0 : _b.guid) && (i.piece = e.piece), ((_c2 = t.designPiece) == null ? void 0 : _c2.guid) !== ((_d2 = e.designPiece) == null ? void 0 : _d2.guid) && (i.designPiece = e.designPiece), ((_e = t.connector) == null ? void 0 : _e.guid) !== ((_f = e.connector) == null ? void 0 : _f.guid) && (i.connector = e.connector), i;
  };
  go = (t, e) => {
    const i = {};
    return e.piece !== void 0 && (i.piece = t.piece), e.designPiece !== void 0 && (i.designPiece = t.designPiece), e.connector !== void 0 && (i.connector = t.connector), i;
  };
  po = (t, e) => {
    const i = {
      piece: e.piece ?? t.piece
    };
    return (e.designPiece !== void 0 || t.designPiece !== void 0) && (i.designPiece = e.designPiece ?? t.designPiece), (e.connector !== void 0 || t.connector !== void 0) && (i.connector = e.connector ?? t.connector), i;
  };
  Qi = X({
    guid: K(),
    connected: Di,
    connecting: Di,
    gap: Ae().optional(),
    shift: Ae().optional(),
    rise: Ae().optional(),
    rotation: Ae().optional(),
    turn: Ae().optional(),
    tilt: Ae().optional(),
    u: Ae().optional(),
    v: Ae().optional(),
    description: K().optional(),
    attributes: H(ze).optional()
  });
  Va = Qi.partial().omit({
    guid: true,
    connected: true,
    connecting: true,
    attributes: true
  }).extend({
    connected: wn.optional(),
    connecting: wn.optional(),
    attributes: je.optional()
  });
  qa = (t, e) => {
    const i = {};
    return Le(t.connected, e.connected) || (i.connected = lo(t.connected, e.connected)), Le(t.connecting, e.connecting) || (i.connecting = lo(t.connecting, e.connecting)), t.gap !== e.gap && (i.gap = e.gap !== void 0 && t.gap !== void 0 ? e.gap - t.gap : e.gap), t.shift !== e.shift && (i.shift = e.shift !== void 0 && t.shift !== void 0 ? e.shift - t.shift : e.shift), t.rise !== e.rise && (i.rise = e.rise !== void 0 && t.rise !== void 0 ? e.rise - t.rise : e.rise), t.rotation !== e.rotation && (i.rotation = e.rotation !== void 0 && t.rotation !== void 0 ? e.rotation - t.rotation : e.rotation), t.turn !== e.turn && (i.turn = e.turn !== void 0 && t.turn !== void 0 ? e.turn - t.turn : e.turn), t.tilt !== e.tilt && (i.tilt = e.tilt !== void 0 && t.tilt !== void 0 ? e.tilt - t.tilt : e.tilt), t.u !== e.u && (i.u = e.u !== void 0 && t.u !== void 0 ? e.u - t.u : e.u), t.v !== e.v && (i.v = e.v !== void 0 && t.v !== void 0 ? e.v - t.v : e.v), t.description !== e.description && (i.description = e.description), Le(t.attributes, e.attributes) || (i.attributes = qe(t.attributes ?? [], e.attributes ?? [])), i;
  };
  Kn = (t, e) => {
    const i = e.attributes ? We(t.attributes ?? [], e.attributes) : t.attributes, n = {
      guid: t.guid,
      connected: e.connected ? po(t.connected, e.connected) : t.connected,
      connecting: e.connecting ? po(t.connecting, e.connecting) : t.connecting
    };
    return (e.gap !== void 0 || t.gap !== void 0) && (n.gap = e.gap !== void 0 && t.gap !== void 0 ? t.gap + e.gap : e.gap ?? t.gap), (e.shift !== void 0 || t.shift !== void 0) && (n.shift = e.shift !== void 0 && t.shift !== void 0 ? t.shift + e.shift : e.shift ?? t.shift), (e.rise !== void 0 || t.rise !== void 0) && (n.rise = e.rise !== void 0 && t.rise !== void 0 ? t.rise + e.rise : e.rise ?? t.rise), (e.rotation !== void 0 || t.rotation !== void 0) && (n.rotation = e.rotation !== void 0 && t.rotation !== void 0 ? t.rotation + e.rotation : e.rotation ?? t.rotation), (e.turn !== void 0 || t.turn !== void 0) && (n.turn = e.turn !== void 0 && t.turn !== void 0 ? t.turn + e.turn : e.turn ?? t.turn), (e.tilt !== void 0 || t.tilt !== void 0) && (n.tilt = e.tilt !== void 0 && t.tilt !== void 0 ? t.tilt + e.tilt : e.tilt ?? t.tilt), (e.u !== void 0 || t.u !== void 0) && (n.u = e.u !== void 0 && t.u !== void 0 ? t.u + e.u : e.u ?? t.u), (e.v !== void 0 || t.v !== void 0) && (n.v = e.v !== void 0 && t.v !== void 0 ? t.v + e.v : e.v ?? t.v), (e.description !== void 0 || t.description !== void 0) && (n.description = e.description ?? t.description), i && i.length > 0 && (n.attributes = i), n;
  };
  $a = (t, e) => {
    const i = {};
    return e.connected !== void 0 && (i.connected = go(t.connected, e.connected)), e.connecting !== void 0 && (i.connecting = go(t.connecting, e.connecting)), e.gap !== void 0 && (i.gap = t.gap !== void 0 && e.gap !== void 0 ? -e.gap : t.gap), e.shift !== void 0 && (i.shift = t.shift !== void 0 && e.shift !== void 0 ? -e.shift : t.shift), e.rise !== void 0 && (i.rise = t.rise !== void 0 && e.rise !== void 0 ? -e.rise : t.rise), e.rotation !== void 0 && (i.rotation = t.rotation !== void 0 && e.rotation !== void 0 ? -e.rotation : t.rotation), e.turn !== void 0 && (i.turn = t.turn !== void 0 && e.turn !== void 0 ? -e.turn : t.turn), e.tilt !== void 0 && (i.tilt = t.tilt !== void 0 && e.tilt !== void 0 ? -e.tilt : t.tilt), e.u !== void 0 && (i.u = t.u !== void 0 && e.u !== void 0 ? -e.u : t.u), e.v !== void 0 && (i.v = t.v !== void 0 && e.v !== void 0 ? -e.v : t.v), e.description !== void 0 && (i.description = t.description), e.attributes !== void 0 && (i.attributes = qe(e.attributes ? We([], e.attributes) : [], t.attributes ?? [])), i;
  };
  Ja = X({
    removed: H(no).optional(),
    updated: H(X({
      connection: no,
      diff: Va
    })).optional(),
    added: H(Qi).optional()
  });
  cs = Qi.omit({
    attributes: true
  });
  Qd = (t, e, i = false) => {
    const n = (w) => {
      var _a3;
      return "connected" in w && w.connected && "piece" in w.connected ? typeof w.connected.piece == "string" ? w.connected.piece : ((_a3 = w.connected.piece) == null ? void 0 : _a3.guid) ?? "" : "";
    }, o = (w) => {
      var _a3;
      return "connecting" in w && w.connecting && "piece" in w.connecting ? typeof w.connecting.piece == "string" ? w.connecting.piece : ((_a3 = w.connecting.piece) == null ? void 0 : _a3.guid) ?? "" : "";
    }, r = n(t), l = o(t), p = n(e), u = o(e), v = l === u && r === p;
    return i ? v : v || l === p && r === u;
  };
  ja = (t, e) => t.filter((i) => i.connected.piece.guid === e || i.connecting.piece.guid === e);
  en = X({
    guid: K(),
    quality: Ri,
    unit: K().optional(),
    min: Ae().optional(),
    minExcluded: Xe().optional(),
    max: Ae().optional(),
    maxExcluded: Xe().optional()
  });
  Wa = en.partial();
  Ya = (t, e) => {
    var _a3, _b;
    const i = {};
    return ((_a3 = t.quality) == null ? void 0 : _a3.guid) !== ((_b = e.quality) == null ? void 0 : _b.guid) && (i.quality = e.quality), t.unit !== e.unit && (i.unit = e.unit), t.min !== e.min && (i.min = e.min), t.minExcluded !== e.minExcluded && (i.minExcluded = e.minExcluded), t.max !== e.max && (i.max = e.max), t.maxExcluded !== e.maxExcluded && (i.maxExcluded = e.maxExcluded), i;
  };
  Za = (t, e) => {
    const i = {};
    return e.quality !== void 0 && (i.quality = t.quality), e.unit !== void 0 && (i.unit = t.unit), e.min !== void 0 && (i.min = t.min), e.minExcluded !== void 0 && (i.minExcluded = t.minExcluded), e.max !== void 0 && (i.max = t.max), e.maxExcluded !== void 0 && (i.maxExcluded = t.maxExcluded), i;
  };
  Xa = (t, e) => {
    const i = {
      guid: t.guid,
      quality: e.quality ?? t.quality
    };
    return (e.unit !== void 0 || t.unit !== void 0) && (i.unit = e.unit ?? t.unit), (e.min !== void 0 || t.min !== void 0) && (i.min = e.min ?? t.min), (e.minExcluded !== void 0 || t.minExcluded !== void 0) && (i.minExcluded = e.minExcluded ?? t.minExcluded), (e.max !== void 0 || t.max !== void 0) && (i.max = e.max ?? t.max), (e.maxExcluded !== void 0 || t.maxExcluded !== void 0) && (i.maxExcluded = e.maxExcluded ?? t.maxExcluded), i;
  };
  Qa = X({
    removed: H(oo).optional(),
    updated: H(X({
      stat: oo,
      diff: Wa
    })).optional(),
    added: H(en).optional()
  });
  ds = en;
  pi = X({
    guid: K(),
    name: K(),
    parent: Li.optional(),
    isAbstract: Xe().optional(),
    folder: K().optional(),
    pieces: H(gi).optional(),
    connections: H(Qi).optional(),
    stats: H(en).optional(),
    props: H(It).optional(),
    layers: H(Zi).optional(),
    activeLayer: ln.optional(),
    groups: H(Xi).optional(),
    canScale: Xe().optional(),
    canMirror: Xe().optional(),
    unit: K().optional(),
    location: Pn.optional(),
    authors: H(si).optional(),
    concepts: H(ci).optional(),
    icon: K().optional(),
    image: K().optional(),
    description: K().optional(),
    attributes: H(ze).optional(),
    createdAt: At(),
    updatedAt: At()
  });
  tn = pi.omit({
    pieces: true,
    connections: true,
    stats: true,
    props: true,
    layers: true,
    groups: true,
    attributes: true,
    authors: true,
    concepts: true
  });
  us = pi.omit({
    pieces: true,
    connections: true,
    stats: true,
    props: true,
    layers: true,
    groups: true,
    attributes: true
  }).extend({
    pieces: H(ss).optional(),
    connections: H(cs).optional(),
    stats: H(ds).optional(),
    props: H(Xt).optional(),
    layers: H(ns).optional(),
    groups: H(as).optional(),
    attributes: H(Zt).optional()
  });
  ec = pi.omit({
    pieces: true,
    connections: true,
    stats: true,
    props: true,
    layers: true,
    groups: true,
    authors: true,
    attributes: true
  }).partial().extend({
    pieces: Fa.optional(),
    connections: Ja.optional(),
    stats: Qa.optional(),
    props: $i.optional(),
    layers: Oa.optional(),
    groups: Ha.optional(),
    authors: Go.optional(),
    attributes: je.optional()
  });
  tc = (t, e) => {
    var _a3, _b, _c2, _d2, _e, _f;
    const i = {};
    t.name !== e.name && (i.name = e.name), ((_a3 = t.parent) == null ? void 0 : _a3.guid) !== ((_b = e.parent) == null ? void 0 : _b.guid) && (i.parent = e.parent), t.isAbstract !== e.isAbstract && (i.isAbstract = e.isAbstract), t.folder !== e.folder && (i.folder = e.folder), t.canScale !== e.canScale && (i.canScale = e.canScale), t.canMirror !== e.canMirror && (i.canMirror = e.canMirror), t.unit !== e.unit && (i.unit = e.unit), ((_c2 = t.activeLayer) == null ? void 0 : _c2.guid) !== ((_d2 = e.activeLayer) == null ? void 0 : _d2.guid) && (i.activeLayer = e.activeLayer), ((_e = t.location) == null ? void 0 : _e.guid) !== ((_f = e.location) == null ? void 0 : _f.guid) && (i.location = e.location), t.icon !== e.icon && (i.icon = e.icon), t.image !== e.image && (i.image = e.image), t.description !== e.description && (i.description = e.description), yt(t.authors, e.authors) || (i.authors = e.authors), yt(t.concepts, e.concepts) || (i.concepts = e.concepts);
    const n = ct("piece", t.pieces ?? [], e.pieces ?? [], Da);
    Object.keys(n).length > 0 && (i.pieces = n);
    const o = ct("connection", t.connections ?? [], e.connections ?? [], qa);
    Object.keys(o).length > 0 && (i.connections = o);
    const r = ct("stat", t.stats ?? [], e.stats ?? [], Ya);
    Object.keys(r).length > 0 && (i.stats = r);
    const l = ct("prop", t.props ?? [], e.props ?? [], Fn);
    Object.keys(l).length > 0 && (i.props = l);
    const p = ct("layer", t.layers ?? [], e.layers ?? [], Na);
    Object.keys(p).length > 0 && (i.layers = p);
    const u = ct("group", t.groups ?? [], e.groups ?? [], za);
    Object.keys(u).length > 0 && (i.groups = u);
    const v = qe(t.attributes ?? [], e.attributes ?? []);
    return Object.keys(v).length > 0 && (i.attributes = v), i;
  };
  Hn = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.parent !== void 0 && (i.parent = t.parent), e.isAbstract !== void 0 && (i.isAbstract = t.isAbstract), e.folder !== void 0 && (i.folder = t.folder), e.canScale !== void 0 && (i.canScale = t.canScale), e.canMirror !== void 0 && (i.canMirror = t.canMirror), e.unit !== void 0 && (i.unit = t.unit), e.activeLayer !== void 0 && (i.activeLayer = t.activeLayer), e.location !== void 0 && (i.location = t.location), e.icon !== void 0 && (i.icon = t.icon), e.image !== void 0 && (i.image = t.image), e.description !== void 0 && (i.description = t.description), e.authors !== void 0 && (i.authors = t.authors), e.concepts !== void 0 && (i.concepts = t.concepts), e.pieces && (i.pieces = dt("piece", t.pieces ?? [], e.pieces, Ma)), e.connections && (i.connections = dt("connection", t.connections ?? [], e.connections, $a)), e.stats && (i.stats = dt("stat", t.stats ?? [], e.stats, Za)), e.props && (i.props = dt("prop", t.props ?? [], e.props, In)), e.layers && (i.layers = dt("layer", t.layers ?? [], e.layers, La)), e.groups && (i.groups = dt("group", t.groups ?? [], e.groups, Ka)), e.attributes && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  it = (t, e) => {
    const i = e.pieces || t.pieces ? Ze("piece", t.pieces ?? [], e.pieces, zn) : void 0, n = e.connections || t.connections ? Ze("connection", t.connections ?? [], e.connections, Kn) : void 0, o = e.stats || t.stats ? Ze("stat", t.stats ?? [], e.stats, Xa) : void 0, r = e.props || t.props ? Ze("prop", t.props ?? [], e.props, Un) : void 0, l = e.layers || t.layers ? Ze("layer", t.layers ?? [], e.layers, os) : void 0, p = e.groups || t.groups ? Ze("group", t.groups ?? [], e.groups, rs) : void 0, u = e.attributes || t.attributes ? We(t.attributes ?? [], e.attributes ?? {}) : void 0, v = {
      guid: t.guid,
      name: e.name ?? t.name,
      isAbstract: e.isAbstract ?? t.isAbstract,
      createdAt: e.createdAt ?? t.createdAt,
      updatedAt: e.updatedAt ?? t.updatedAt
    };
    return (e.parent !== void 0 ? e.parent : t.parent) && (v.parent = e.parent !== void 0 ? e.parent : t.parent), (e.folder ?? t.folder) && (v.folder = e.folder ?? t.folder), (e.canScale ?? t.canScale) && (v.canScale = e.canScale ?? t.canScale), (e.canMirror ?? t.canMirror) && (v.canMirror = e.canMirror ?? t.canMirror), (e.unit !== void 0 ? e.unit : t.unit) && (v.unit = e.unit !== void 0 ? e.unit : t.unit), (e.activeLayer !== void 0 ? e.activeLayer : t.activeLayer) && (v.activeLayer = e.activeLayer !== void 0 ? e.activeLayer : t.activeLayer), (e.location !== void 0 ? e.location : t.location) && (v.location = e.location !== void 0 ? e.location : t.location), (e.icon !== void 0 ? e.icon : t.icon) && (v.icon = e.icon !== void 0 ? e.icon : t.icon), (e.image !== void 0 ? e.image : t.image) && (v.image = e.image !== void 0 ? e.image : t.image), (e.description !== void 0 ? e.description : t.description) && (v.description = e.description !== void 0 ? e.description : t.description), (e.authors !== void 0 ? e.authors : t.authors) && (v.authors = e.authors !== void 0 ? e.authors : t.authors), (e.concepts !== void 0 ? e.concepts : t.concepts) && (v.concepts = e.concepts !== void 0 ? e.concepts : t.concepts), i && i.length > 0 && (v.pieces = i), n && n.length > 0 && (v.connections = n), o && o.length > 0 && (v.stats = o), r && r.length > 0 && (v.props = r), l && l.length > 0 && (v.layers = l), p && p.length > 0 && (v.groups = p), u && u.length > 0 && (v.attributes = u), v;
  };
  fo = (t, e) => {
    var _a3, _b, _c2, _d2, _e, _f;
    const i = "semio.diffStatus", n = (w, b) => {
      const N = [
        ...w ?? []
      ];
      return N.push({
        guid: `${i}.${b}`,
        key: i,
        value: b
      }), N;
    }, o = new Set((((_a3 = e.pieces) == null ? void 0 : _a3.removed) ?? []).map((w) => w.guid)), r = new Map((((_b = e.pieces) == null ? void 0 : _b.updated) ?? []).map((w) => [
      w.piece.guid,
      w.diff
    ])), l = new Set((((_c2 = e.connections) == null ? void 0 : _c2.removed) ?? []).map((w) => w.guid)), p = new Map((((_d2 = e.connections) == null ? void 0 : _d2.updated) ?? []).map((w) => [
      w.connection.guid,
      w.diff
    ])), u = (t.pieces ?? []).map((w) => {
      if (o.has(w.guid)) return {
        ...w,
        attributes: n(w.attributes, "removed")
      };
      if (r.has(w.guid)) {
        const N = {
          ...zn(w, r.get(w.guid))
        };
        return w.plane !== void 0 ? N.plane = w.plane : delete N.plane, w.center !== void 0 ? N.center = w.center : delete N.center, {
          ...N,
          attributes: n(N.attributes, "modified")
        };
      }
      return {
        ...w,
        attributes: n(w.attributes, "unchanged")
      };
    });
    for (const w of ((_e = e.pieces) == null ? void 0 : _e.added) ?? []) u.push({
      ...w,
      attributes: n(w.attributes, "added")
    });
    const v = (t.connections ?? []).map((w) => {
      if (l.has(w.guid)) return {
        ...w,
        attributes: n(w.attributes, "removed")
      };
      if (p.has(w.guid)) {
        const b = Kn(w, p.get(w.guid));
        return {
          ...b,
          attributes: n(b.attributes, "modified")
        };
      }
      return {
        ...w,
        attributes: n(w.attributes, "unchanged")
      };
    });
    for (const w of ((_f = e.connections) == null ? void 0 : _f.added) ?? []) v.push({
      ...w,
      attributes: n(w.attributes, "added")
    });
    const _ = {
      ...t
    };
    return _.pieces = u, _.connections = v, _;
  };
  ic = X({
    removed: H(Li).optional(),
    updated: H(X({
      design: Li,
      diff: ec
    })).optional(),
    added: H(pi).optional()
  });
  nc = (t, e, i, n) => {
    var _a3;
    const o = new Set(i), r = e.connections ?? [], l = /* @__PURE__ */ new Set();
    for (const R of r) (o.has(R.connected.piece.guid) || o.has(R.connecting.piece.guid)) && l.add(R.guid);
    const p = /* @__PURE__ */ new Set([
      ...n,
      ...l
    ]), u = [];
    for (const R of p) {
      const I = r.find((D) => D.guid === R);
      if (!I) continue;
      const te = I.connecting.piece.guid;
      if (o.has(te)) continue;
      !r.some((D) => D.connecting.piece.guid === te && !p.has(D.guid)) && !u.includes(te) && u.push(te);
    }
    const v = at(t, e.guid);
    if (!v.ok) return {
      ok: false,
      errors: v.errors
    };
    const _ = v.change, w = {};
    for (const R of e.pieces ?? []) R.plane && (w[R.guid] = {
      plane: R.plane,
      center: R.center
    });
    for (const R of ((_a3 = _.forward.pieces) == null ? void 0 : _a3.updated) ?? []) {
      const I = w[R.piece.guid] ?? {};
      R.diff.plane && (I.plane = R.diff.plane), R.diff.center && (I.center = R.diff.center), w[R.piece.guid] = I;
    }
    const b = {
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
    }, N = {
      u: 0,
      v: 0
    }, L = {}, U = i.map((R) => ({
      guid: R
    })), j = u.map((R) => {
      const I = w[R];
      return {
        piece: {
          guid: R
        },
        diff: {
          plane: (I == null ? void 0 : I.plane) ?? b,
          center: (I == null ? void 0 : I.center) ?? N
        }
      };
    });
    (U.length > 0 || j.length > 0) && (L.pieces = {}, U.length > 0 && (L.pieces.removed = U), j.length > 0 && (L.pieces.updated = j));
    const $ = [
      ...p
    ].sort().map((R) => ({
      guid: R
    }));
    return $.length > 0 && (L.connections = {
      removed: $
    }), ui(L, v.warnings, v.infos);
  };
  ls = (t) => {
    const e = {};
    (t.types ?? []).forEach((o) => {
      e[o.guid] = o;
    });
    const i = (o) => e[o], n = (o, r) => {
      var _a3, _b;
      if (o) {
        if (!r) {
          if (o.connectors && o.connectors.length > 0) return o.connectors[0];
          if ((_a3 = o.parent) == null ? void 0 : _a3.guid) {
            const l = i(o.parent.guid);
            return n(l, r);
          }
          return;
        }
        if (o.connectors && o.connectors.length > 0) {
          const l = o.connectors.find((p) => p.guid === r);
          if (l) return l;
        }
        if ((_b = o.parent) == null ? void 0 : _b.guid) {
          const l = i(o.parent.guid), p = n(l, r);
          if (p) return p;
        }
        if (o.connectors && o.connectors.length > 0) return o.connectors[0];
      }
    };
    return {
      getType: i,
      getConnector: n
    };
  };
  gs = (t) => {
    const e = vt(t.direction).normalize(), i = new be(0, 1, 0), n = new ii().setFromUnitVectors(i, e), o = new Ge().makeRotationFromQuaternion(n), r = new be(0, 1, 0).applyMatrix4(o).normalize(), l = new be(1, 0, 0).applyMatrix4(o).normalize(), p = new be(0, 0, 1).applyMatrix4(o).normalize();
    return {
      gap: r,
      shift: l,
      raise: p,
      parentRotationT: o
    };
  };
  Vn = (t, e, i, n) => {
    const o = Oi(t), r = vt(e.point), l = vt(e.direction).normalize(), p = vt(i.point), u = vt(i.direction).normalize(), { gap: v, shift: _, rise: w, rotation: b, turn: N, tilt: L } = n, U = an.degToRad(b ?? 0), j = an.degToRad(N ?? 0), $ = an.degToRad(L ?? 0), R = u.clone().negate();
    let I;
    if (new be().crossVectors(l, R).length() < 0.01) if (Math.abs(l.z) < Ci) I = new ii().setFromAxisAngle(new be(0, 0, 1), Math.PI);
    else {
      const ie = new be(0, 0, 1).cross(l).normalize();
      I = new ii().setFromAxisAngle(ie, Math.PI);
    }
    else I = new ii().setFromUnitVectors(R, l);
    const te = new Ge().makeRotationFromQuaternion(I), { gap: m, shift: D, raise: z, parentRotationT: P } = gs(e), x = new be(0, 0, 1).applyMatrix4(P), A = new be(1, 0, 0).applyMatrix4(P);
    let C = te.clone();
    const G = new Ge().makeRotationAxis(l, -U);
    C.premultiply(G), x.applyMatrix4(G), A.applyMatrix4(G);
    const ee = new Ge().makeRotationAxis(x, j);
    C.premultiply(ee);
    const ge = new Ge().makeRotationAxis(A, $);
    C.premultiply(ge);
    const ue = new Ge().makeTranslation(-p.x, -p.y, -p.z);
    let V = new Ge().multiplyMatrices(C, ue);
    const he = new Ge().makeTranslation(m.x * (v ?? 0), m.y * (v ?? 0), m.z * (v ?? 0)), pe = new Ge().makeTranslation(D.x * (_ ?? 0), D.y * (_ ?? 0), D.z * (_ ?? 0)), _e = new Ge().makeTranslation(z.x * (w ?? 0), z.y * (w ?? 0), z.z * (w ?? 0)).clone().multiply(pe).multiply(he);
    V.premultiply(_e);
    const y = new Ge().makeTranslation(r.x, r.y, r.z);
    V.premultiply(y);
    const E = new Ge().multiplyMatrices(o, V);
    return Pi(E);
  };
  at = (t, e) => {
    var _a3, _b, _c2, _d2;
    const i = Tt(t, e);
    if (!i) return Rn([
      {
        code: "flatten.design-not-found",
        message: `Design ${e} not found in kit ${t.name}`
      }
    ]);
    if (!i.pieces || i.pieces.length === 0) return ui({
      forward: {},
      backward: {}
    }, [], [
      {
        code: "flatten.empty-pieces",
        message: "No pieces to flatten; returning empty forward and backward diffs."
      }
    ]);
    const n = [], o = [], r = [], { getType: l, getConnector: p } = ls(t), u = JSON.parse(JSON.stringify(i));
    u.pieces || (u.pieces = []);
    const v = {}, _ = {};
    u.pieces.forEach((m) => {
      m.guid && (_[m.guid] = m);
    });
    const w = ((_a3 = u.connections) == null ? void 0 : _a3.filter((m) => {
      const D = m.connected.piece.guid, z = m.connecting.piece.guid, P = _[D], x = _[z];
      return P ? x ? true : (n.push({
        code: "flatten.connection-skipped-missing-endpoint",
        message: `Skipping connection ${m.guid}: target piece ${z} not found in design.`
      }), false) : (n.push({
        code: "flatten.connection-skipped-missing-endpoint",
        message: `Skipping connection ${m.guid}: source piece ${D} not found in design.`
      }), false);
    })) || [], N = Xs({
      elements: {
        nodes: u.pieces.map((m) => ({
          data: {
            id: m.guid,
            label: m.guid
          }
        })),
        edges: w.map((m, D) => {
          const z = m.connected.piece.guid, P = m.connecting.piece.guid;
          return {
            data: {
              id: m.guid,
              source: z,
              target: P,
              connectionData: m
            }
          };
        })
      },
      headless: true
    }).elements().components(), L = (m, D) => {
      const P = [
        ...m.attributes || []
      ];
      return D.forEach((x) => {
        const A = P.findIndex((C) => C.key === x.key);
        A >= 0 ? P[A] = {
          ...P[A],
          ...x,
          guid: P[A].guid
        } : P.push({
          guid: Yt(),
          ...x
        });
      }), {
        ...m,
        attributes: P
      };
    };
    N.forEach((m) => {
      const D = m.nodes().filter((G) => {
        const ee = _[G.id()];
        return (ee == null ? void 0 : ee.plane) !== void 0 && (ee == null ? void 0 : ee.center) !== void 0;
      });
      let z = D.length > 0 ? D[0] : m.nodes().length > 0 ? m.nodes()[0] : void 0;
      if (!z) return;
      D.length === 0 ? n.push({
        code: "flatten.no-fixed-piece-in-clump",
        message: `Connected pieces have no fixed root (no piece with both plane and center). Using piece ${z.id()} as breadth-first root. Each connected set of pieces (clump) should include at least one fixed piece for stable, recommended layout.`
      }) : D.length > 1 && o.push({
        code: "flatten.multiple-fixed-roots",
        message: `This clump has ${D.length} fixed pieces; using the first (${z.id()}) as breadth-first root.`
      });
      const P = _[z.id()];
      if (!P || !P.guid) return;
      const x = L(P, [
        {
          key: "semio.fixedPieceId",
          value: P.guid
        },
        {
          key: "semio.depth",
          value: "0"
        },
        {
          key: "semio.path",
          value: P.guid
        }
      ]);
      _[z.id()] = x;
      let A;
      if (P.plane) A = P.plane;
      else {
        const G = new Ge().identity();
        A = Pi(G);
      }
      v[P.guid] = A;
      const C = u.pieces.findIndex((G) => G.guid === P.guid);
      C !== -1 && (u.pieces[C].plane = A, u.pieces[C].center || (u.pieces[C].center = {
        u: 0,
        v: 0
      }), _[z.id()] = {
        ..._[z.id()] ?? x,
        plane: A,
        center: u.pieces[C].center
      }), m.bfs({
        roots: `#${z.id()}`,
        visit: (G, ee, ge, ue, V) => {
          var _a4, _b2, _c3, _d3, _e2, _f, _g;
          if (!ee) return;
          const pe = ee.data().connectionData;
          if (!pe) return;
          const ye = ge, _e = G, y = ye.id(), E = _e.id(), ie = _[y], ne = _[E];
          if (!ie || !ne || !ie.guid || !ne.guid || v[ne.guid]) return;
          const W = v[ie.guid];
          if (!W) {
            r.push({
              code: "flatten.parent-plane-missing",
              message: `Parent piece ${ie.guid} has no plane while flattening edge to child ${ne.guid}.`
            });
            return;
          }
          const oe = pe.connected.piece.guid === y ? pe.connected : pe.connecting, J = pe.connecting.piece.guid === E ? pe.connecting : pe.connected, Y = ie.type ? l(ie.type.guid) : void 0, ae = ne.type ? l(ne.type.guid) : void 0, ut = (_a4 = oe.connector) == null ? void 0 : _a4.guid, Ve = (_b2 = J.connector) == null ? void 0 : _b2.guid, tt = p(Y, ut), Ke = p(ae, Ve);
          if (!tt || !Ke) {
            r.push({
              code: "flatten.connectors-not-found",
              message: `Connectors not found for connection between ${y} and ${E}. Parent connector: ${ut ?? "(default)"}, child connector: ${Ve ?? "(default)"}.`
            });
            return;
          }
          const mi = pr(Vn(W, tt, Ke, pe));
          v[ne.guid] = mi;
          const hi = 2.697, Ut = 1, yi = 3.0633, Rt = ie.center || {
            u: 0,
            v: 0
          }, Ie = pe.u ?? 0, Re = pe.v ?? 0;
          let Fe, Lt;
          if (Rt.u === 0 && Rt.v === 0) {
            const ke = 2 * Math.PI * tt.t;
            Fe = hi * Math.sin(ke), Lt = hi * Math.cos(ke);
          } else Math.abs(((_c3 = tt.direction) == null ? void 0 : _c3.z) ?? 0) > 0.5 ? (Fe = Rt.u + Ie, Lt = Rt.v + Re + Ut) : (Fe = Rt.u + Ie * yi, Lt = Rt.v + Re * yi);
          const Ne = {
            u: _t(Fe),
            v: _t(Lt)
          }, rt = ne.center ?? Ne, bt = L({
            ...ne,
            plane: mi,
            center: rt
          }, [
            {
              key: "semio.fixedPieceId",
              value: ((_e2 = (_d3 = ie.attributes) == null ? void 0 : _d3.find((ke) => ke.key === "semio.fixedPieceId")) == null ? void 0 : _e2.value) ?? ""
            },
            {
              key: "semio.parentPieceId",
              value: ie.guid
            },
            {
              key: "semio.depth",
              value: V.toString()
            },
            {
              key: "semio.path",
              value: (((_g = (_f = ie.attributes) == null ? void 0 : _f.find((ke) => ke.key === "semio.path")) == null ? void 0 : _g.value) ?? "") + "," + ne.guid
            }
          ]);
          _[E] = bt;
        },
        directed: false
      });
    }), u.pieces = (_b = u.pieces) == null ? void 0 : _b.map((m) => _[m.guid ?? ""]), u.connections = [];
    let U = 0, j = 0;
    const $ = (_c2 = u.pieces) == null ? void 0 : _c2.map((m) => {
      var _a4;
      m.plane ? U++ : j++;
      const D = (_a4 = i.pieces) == null ? void 0 : _a4.find((P) => P.guid === m.guid);
      if (!D) return null;
      const z = {};
      return m.plane && JSON.stringify(m.plane) !== JSON.stringify(D.plane) && (z.plane = m.plane), m.center && JSON.stringify(m.center) !== JSON.stringify(D.center) && (z.center = m.center), JSON.stringify(m.attributes) !== JSON.stringify(D.attributes) && (z.attributes = qe(D.attributes ?? [], m.attributes ?? [])), Object.keys(z).length === 0 ? null : {
        piece: {
          guid: m.guid
        },
        diff: z
      };
    }).filter((m) => m !== null), R = ((_d2 = i.connections) == null ? void 0 : _d2.map((m) => ({
      guid: m.guid
    }))) || [], I = {
      pieces: $.length > 0 ? {
        updated: $
      } : void 0,
      connections: R.length > 0 ? {
        removed: R
      } : void 0
    };
    if (j > 0 && r.push({
      code: "flatten.piece-missing-plane",
      message: `After flatten, ${j} piece(s) still have no plane (see prior placement messages).`
    }), r.length > 0) return Rn(r);
    o.push({
      code: "flatten.summary",
      message: `Flatten removed ${R.length} connection(s); updated ${$.length} piece record(s); ${U} piece(s) with planes.`
    });
    const te = Hn(i, I);
    return ui({
      forward: I,
      backward: te
    }, n, o);
  };
  oc = (t, e, i) => {
    if (!t.pieces || t.pieces.length === 0) throw new Error("Original design has no pieces to cluster");
    if (!e || e.length === 0) throw new Error("No piece IDs provided for clustering");
    const n = (t.pieces || []).filter((p) => e.includes(p.guid));
    if (n.length === 0) throw new Error("No pieces found matching the provided IDs");
    const o = (t.connections || []).filter((p) => e.includes(p.connected.piece.guid) && e.includes(p.connecting.piece.guid)), r = (t.connections || []).filter((p) => {
      const u = e.includes(p.connected.piece.guid), v = e.includes(p.connecting.piece.guid);
      return u !== v;
    });
    return {
      clusteredDesign: {
        guid: Yt(),
        name: i,
        unit: t.unit,
        description: `Clustered design with ${n.length} pieces`,
        pieces: n,
        connections: o,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      externalConnections: r
    };
  };
  sc = (t, e, i, n) => {
    const o = e.map((v) => ({
      guid: v
    })), r = (t.connections || []).filter((v) => {
      const _ = e.includes(v.connected.piece.guid), w = e.includes(v.connecting.piece.guid);
      return _ || w;
    }).map((v) => ({
      guid: v.guid
    })), l = n.map((v) => {
      const _ = e.includes(v.connected.piece.guid), w = e.includes(v.connecting.piece.guid);
      return _ ? {
        ...v,
        connected: {
          ...v.connected,
          designPiece: {
            guid: i.guid
          }
        }
      } : w ? {
        ...v,
        connecting: {
          ...v.connecting,
          designPiece: {
            guid: i.guid
          }
        }
      } : v;
    }), p = {
      pieces: {
        removed: o
      },
      connections: {
        removed: r,
        added: l
      }
    }, u = Hn(t, p);
    return {
      forward: p,
      backward: u
    };
  };
  eu = (t, e) => {
    if (e.length < 2) return [];
    const i = /* @__PURE__ */ new Map();
    (t.connections || []).forEach((_) => {
      const w = _.connecting.piece.guid, b = _.connected.piece.guid;
      i.has(w) || i.set(w, /* @__PURE__ */ new Set()), i.has(b) || i.set(b, /* @__PURE__ */ new Set()), i.get(w).add(b), i.get(b).add(w);
    });
    const n = /* @__PURE__ */ new Set(), o = [], r = (_, w) => {
      if (n.has(_)) return;
      n.add(_), w.push(_);
      const b = i.get(_) || /* @__PURE__ */ new Set();
      for (const N of Array.from(b)) e.includes(N) && !n.has(N) && r(N, w);
    };
    for (const _ of e) if (!n.has(_)) {
      const w = [];
      r(_, w), o.push(w);
    }
    const l = new Set((t.pieces || []).map((_) => _.guid)), p = e.some((_) => !l.has(_)), u = o.length > 1, v = o.some((_) => _.length > 1);
    return p || u || v ? [
      e
    ] : [];
  };
  rc = (t, e) => {
    var _a3;
    if (!((_a3 = t.connections) == null ? void 0 : _a3.some((r) => r.connected.designPiece || r.connecting.designPiece))) return t;
    let n = {
      ...t
    };
    const o = /* @__PURE__ */ new Set();
    if (Q(t.connections).forEach((r) => {
      r.connected.designPiece && o.add(r.connected.designPiece.guid), r.connecting.designPiece && o.add(r.connecting.designPiece.guid);
    }), o.size === 0) return n;
    for (const r of Array.from(o)) {
      const l = Tt(e, r);
      if (!l) continue;
      const p = rc(l, e), u = (p.pieces || []).map((w) => ({
        ...w,
        center: w.center || {
          u: 0,
          v: 0
        }
      })), v = p.connections || [], _ = (n.connections || []).map((w) => {
        var _a4, _b;
        return ((_a4 = w.connected.designPiece) == null ? void 0 : _a4.guid) === r ? {
          ...w,
          connected: {
            ...w.connected,
            designPiece: void 0
          }
        } : ((_b = w.connecting.designPiece) == null ? void 0 : _b.guid) === r ? {
          ...w,
          connecting: {
            ...w.connecting,
            designPiece: void 0
          }
        } : w;
      });
      n = {
        ...n,
        pieces: [
          ...n.pieces || [],
          ...u
        ],
        connections: [
          ..._,
          ...v
        ]
      };
    }
    return n;
  };
  ac = (t) => {
    const e = [], i = /* @__PURE__ */ new Set();
    return Q(t.connections).forEach((n) => {
      n.connected.designPiece && i.add(n.connected.designPiece.guid), n.connecting.designPiece && i.add(n.connecting.designPiece.guid);
    }), Array.from(i).forEach((n) => {
      var _a3;
      const o = ((_a3 = t.connections) == null ? void 0 : _a3.filter((r) => {
        var _a4, _b;
        const l = ((_a4 = r.connected.designPiece) == null ? void 0 : _a4.guid) === n, p = ((_b = r.connecting.designPiece) == null ? void 0 : _b.guid) === n;
        return l || p;
      })) ?? [];
      e.push({
        guid: n,
        designGuid: n,
        type: "connected",
        externalConnections: o
      });
    }), e;
  };
  tu = (t, e) => Ua(t.pieces ?? [], e);
  cc = (t, e) => ja(t.connections ?? [], e);
  ps = (t, e) => {
    const i = new Set((e.pieces ?? []).map((l) => l.guid)), n = /* @__PURE__ */ new Map();
    for (const l of t.connections ?? []) n.set(l.connecting.piece.guid, {
      connectionGuid: l.guid,
      parentGuid: l.connected.piece.guid
    });
    const o = /* @__PURE__ */ new Map();
    for (const l of t.pieces ?? []) o.set(l.guid, l);
    const r = /* @__PURE__ */ new Set();
    for (const l of i) n.has(l) || r.add(l);
    return {
      selectedGuids: i,
      parentMap: n,
      pieceMap: o,
      fixedGuids: r
    };
  };
  fs = (t, e, i) => {
    let n = t;
    for (; i.has(n); ) {
      const o = i.get(n).parentGuid;
      if (e.has(o)) return true;
      n = o;
    }
    return false;
  };
  ms = (t, e) => {
    const i = vt(t.xAxis).normalize(), n = vt(t.yAxis).normalize(), o = new be().crossVectors(i, n);
    if (o.lengthSq() < 1e-12) return {
      x: 0,
      y: 0,
      z: 0
    };
    o.normalize();
    const r = new be().addScaledVector(n, e.gap).addScaledVector(i, e.shift).addScaledVector(o, e.rise);
    return {
      x: r.x,
      y: r.y,
      z: r.z
    };
  };
  hs = () => ({
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
  });
  mo = [
    "gap",
    "shift",
    "rise",
    "rotation",
    "turn",
    "tilt"
  ];
  dc = {
    gap: 1e-6,
    shift: 1e-6,
    rise: 1e-6,
    rotation: 1e-4,
    turn: 1e-4,
    tilt: 1e-4
  };
  ho = (t, e, i, n) => {
    const o = Vn(t, e, i, n);
    return vt(o.origin);
  };
  uc = (t, e) => {
    if (t.length === 0) return;
    const i = new Yn();
    for (let r = 0; r < 3; r++) for (let l = 0; l < 3; l++) {
      let p = 0;
      for (const u of t) p += u.getComponent(l) * u.getComponent(r);
      i.elements[l + r * 3] = p;
    }
    if (i.elements[0] += 1e-14, i.elements[4] += 1e-14, i.elements[8] += 1e-14, Math.abs(i.determinant()) < 1e-22) return;
    const n = new Yn().copy(i).invert();
    if (!Number.isFinite(n.elements[0])) return;
    const o = e.clone().applyMatrix3(n);
    return t.map((r) => r.dot(o));
  };
  lc = (t, e) => {
    const i = t[e];
    return i ?? 0;
  };
  gc = (t, e, i) => ({
    ...t,
    [e]: lc(t, e) + i
  });
  yo = (t, e, i) => {
    const { gap: n, shift: o, raise: r } = gs(e), l = i.dot(n), p = i.dot(o), u = i.dot(r), v = i.clone().addScaledVector(n, -l).addScaledVector(o, -p).addScaledVector(r, -u), _ = vt(t.xAxis), w = vt(t.yAxis), b = {}, N = 1e-9;
    if (Math.abs(l) > N && (b.gap = l), Math.abs(p) > N && (b.shift = p), Math.abs(u) > N && (b.rise = u), _.lengthSq() > 1e-24 && w.lengthSq() > 1e-24) {
      const L = _.clone().normalize(), U = w.clone().normalize(), j = v.dot(L), $ = v.dot(U);
      Math.abs(j) > N && (b.u = j), Math.abs($) > N && (b.v = $);
    }
    return b;
  };
  pc = (t, e, i, n, o, r) => {
    const l = o ?? hs(), p = ms(l, r), u = vt(p);
    if (u.lengthSq() < 1e-24) return {};
    if (!i) return yo(t, e, u);
    const v = ho(t, e, i, n), _ = [];
    for (const L of mo) {
      const U = dc[L], j = gc(n, L, U), $ = ho(t, e, i, j);
      _.push($.clone().sub(v).divideScalar(U));
    }
    const w = uc(_, u), b = {}, N = 1e-9;
    if (w) {
      mo.forEach((R, I) => {
        Math.abs(w[I]) > N && (b[R] = w[I]);
      });
      const L = new be();
      _.forEach((R, I) => L.addScaledVector(R, w[I]));
      const U = u.clone().sub(L), j = vt(t.xAxis), $ = vt(t.yAxis);
      if (j.lengthSq() > 1e-24 && $.lengthSq() > 1e-24) {
        const R = j.clone().normalize(), I = $.clone().normalize(), te = U.dot(R), m = U.dot(I);
        Math.abs(te) > N && (b.u = te), Math.abs(m) > N && (b.v = m);
      }
      return b;
    }
    return yo(t, e, u);
  };
  vo = (t, e, i, n) => {
    var _a3, _b, _c2, _d2, _e, _f;
    const { getType: o, getConnector: r } = ls(t), { selectedGuids: l, parentMap: p, pieceMap: u, fixedGuids: v } = ps(e, i), _ = [];
    for (const N of v) {
      const L = (_a3 = u.get(N)) == null ? void 0 : _a3.plane;
      if (L === void 0) continue;
      const U = ms(L, n), j = {
        origin: {
          x: L.origin.x + U.x,
          y: L.origin.y + U.y,
          z: L.origin.z + U.z
        },
        xAxis: {
          ...L.xAxis
        },
        yAxis: {
          ...L.yAxis
        }
      };
      _.push({
        piece: {
          guid: N
        },
        diff: {
          plane: j
        }
      });
    }
    const w = [];
    for (const N of l) {
      if (v.has(N) || fs(N, l, p)) continue;
      const L = p.get(N);
      if (!L) continue;
      const U = (_b = e.connections) == null ? void 0 : _b.find((P) => P.guid === L.connectionGuid);
      if (!U) continue;
      const j = u.get(L.parentGuid), $ = u.get(N);
      if (!((_c2 = j == null ? void 0 : j.type) == null ? void 0 : _c2.guid) || !((_d2 = $ == null ? void 0 : $.type) == null ? void 0 : _d2.guid)) continue;
      const R = o(j.type.guid), I = o($.type.guid), te = r(R, (_e = U.connected.connector) == null ? void 0 : _e.guid), m = r(I, (_f = U.connecting.connector) == null ? void 0 : _f.guid);
      if (!te) continue;
      const D = j.plane ?? hs(), z = pc(D, te, m, U, $.plane, n);
      Object.keys(z).length !== 0 && w.push({
        connection: {
          guid: L.connectionGuid
        },
        diff: z
      });
    }
    const b = {};
    return _.length > 0 && (b.pieces = {
      updated: _
    }), w.length > 0 && (b.connections = {
      updated: w
    }), b;
  };
  Ct = (t, e, i) => {
    var _a3;
    const { selectedGuids: n, parentMap: o, pieceMap: r, fixedGuids: l } = ps(t, e), p = [];
    for (const _ of l) {
      const w = (_a3 = r.get(_)) == null ? void 0 : _a3.center;
      w !== void 0 && p.push({
        piece: {
          guid: _
        },
        diff: {
          center: {
            u: w.u + i.u,
            v: w.v + i.v
          }
        }
      });
    }
    const u = [];
    for (const _ of n) {
      if (l.has(_) || fs(_, n, o)) continue;
      const w = o.get(_);
      w && u.push({
        connection: {
          guid: w.connectionGuid
        },
        diff: {
          u: i.u,
          v: i.v
        }
      });
    }
    const v = {};
    return p.length > 0 && (v.pieces = {
      updated: p
    }), u.length > 0 && (v.connections = {
      updated: u
    }), v;
  };
  wi = (t, e, i, n) => {
    const o = new Set(i), r = new Set(n), l = e.guid ? Tt(t, e.guid) : void 0, p = e.connections && e.connections.length > 0 ? e.connections : (l == null ? void 0 : l.connections) ?? [], u = e.pieces ?? [], v = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
    for (const R of p) {
      v.set(R.connecting.piece.guid, {
        parentGuid: R.connected.piece.guid,
        connection: R
      });
      const I = R.connected.piece.guid;
      _.has(I) || _.set(I, []), _.get(I).push({
        childGuid: R.connecting.piece.guid,
        connection: R
      });
    }
    const w = at(t, e.guid);
    if (!w.ok) return {
      ok: false,
      errors: w.errors
    };
    const b = w.change, N = it(JSON.parse(JSON.stringify(e)), b.forward), L = /* @__PURE__ */ new Map();
    for (const R of N.pieces ?? []) L.set(R.guid, R);
    const U = [], j = /* @__PURE__ */ new Set(), $ = [];
    for (const R of i) {
      const I = u.find((A) => A.guid === R);
      if (!I) continue;
      const te = I.plane !== void 0, m = v.get(R), D = m !== void 0;
      let z = false;
      const P = te && o.has(R);
      let x = false;
      if (D && m) {
        const A = o.has(m.parentGuid), C = r.has(m.connection.guid);
        z = A && C, x = !A && C;
      }
      if (P || z) U.push(JSON.parse(JSON.stringify(I))), j.add(R);
      else if (x) {
        const A = JSON.parse(JSON.stringify(I)), C = L.get(R);
        if (C) {
          const G = C.center ? JSON.stringify(C.center) : JSON.stringify({
            u: 0,
            v: 0
          }), ee = C.plane ? JSON.stringify(C.plane) : JSON.stringify({
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
          });
          A.attributes = [
            ...A.attributes ?? [],
            {
              guid: "",
              key: "semio.center",
              value: G
            },
            {
              guid: "",
              key: "semio.plane",
              value: ee
            }
          ];
        }
        U.push(A), j.add(R);
      } else {
        const A = JSON.parse(JSON.stringify(I)), C = L.get(R);
        if (C) {
          C.center && (A.center = {
            u: C.center.u,
            v: C.center.v
          }), C.plane && (A.plane = JSON.parse(JSON.stringify(C.plane)));
          const ue = C.center ? JSON.stringify(C.center) : JSON.stringify({
            u: 0,
            v: 0
          }), V = C.plane ? JSON.stringify(C.plane) : JSON.stringify({
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
          });
          A.attributes = [
            ...A.attributes ?? [],
            {
              guid: "",
              key: "semio.center",
              value: ue
            },
            {
              guid: "",
              key: "semio.plane",
              value: V
            }
          ];
        }
        U.push(A), j.add(R);
        const G = [
          R
        ], ee = /* @__PURE__ */ new Set([
          R
        ]), ge = new Set($.map((ue) => ue.guid));
        for (; G.length > 0; ) {
          const ue = G.shift(), V = _.get(ue) ?? [];
          for (const { childGuid: he, connection: pe } of V) if (!ee.has(he)) {
            if (ee.add(he), !j.has(he)) {
              const ye = u.find((_e) => _e.guid === he);
              ye && (U.push(JSON.parse(JSON.stringify(ye))), j.add(he));
            }
            ge.has(pe.guid) || ($.push(JSON.parse(JSON.stringify(pe))), ge.add(pe.guid)), G.push(he);
          }
        }
      }
    }
    for (const R of n) {
      const I = p.find((x) => x.guid === R);
      if (!I) continue;
      const te = I.connected.piece.guid, m = I.connecting.piece.guid, D = o.has(te), z = o.has(m);
      if (D && z) $.push(JSON.parse(JSON.stringify(I)));
      else {
        $.push(JSON.parse(JSON.stringify(I)));
        const x = [];
        D || x.push(te), z || x.push(m);
        for (const A of x) if (!j.has(A)) {
          const C = u.find((G) => G.guid === A);
          if (C) {
            const G = JSON.parse(JSON.stringify(C)), ee = [
              ...G.attributes ?? [],
              {
                guid: "",
                key: "semio.piece.origin",
                value: "external"
              }
            ], ge = L.get(A);
            if (ge) {
              const ue = ge.center ? JSON.stringify(ge.center) : JSON.stringify({
                u: 0,
                v: 0
              });
              ee.push({
                guid: "",
                key: "semio.center",
                value: ue
              });
            }
            G.attributes = ee, U.push(G), j.add(A);
          }
        }
      }
    }
    return ui({
      guid: "",
      name: "",
      pieces: U,
      connections: $
    }, w.warnings, [
      ...w.infos,
      {
        code: "copy.summary",
        message: `Copied ${U.length} piece(s) and ${$.length} connection(s) to clipboard design.`
      }
    ]);
  };
  fc = [
    "original",
    "middle",
    "centroid",
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topRight"
  ];
  xt = (t, e, i, n = "bottomLeft", o) => {
    var _a3, _b, _c2, _d2;
    const r = /* @__PURE__ */ new Map();
    for (const C of t.types ?? []) r.set(C.guid, C);
    const l = /* @__PURE__ */ new Map();
    for (const C of t.ports ?? []) l.set(C.guid, C);
    const p = e.pieces ?? [], u = e.connections ?? [], v = i.pieces ?? [], _ = /* @__PURE__ */ new Set();
    for (const C of p) (C.attributes ?? []).some((G) => G.key === "semio.piece.origin" && G.value === "external") && _.add(C.guid);
    const w = /* @__PURE__ */ new Map();
    for (const C of p) w.set(C.guid, C);
    const b = /* @__PURE__ */ new Map();
    for (const C of u) {
      const G = C.connecting.piece.guid, ee = C.connected.piece.guid, ge = b.get(G);
      if (!ge) {
        b.set(G, {
          parentGuid: ee,
          connection: C
        });
        continue;
      }
      const ue = _.has(ge.parentGuid), V = _.has(ee);
      ue !== V && V && b.set(G, {
        parentGuid: ee,
        connection: C
      });
    }
    const N = [];
    for (const C of p) {
      if (_.has(C.guid)) continue;
      let G = C.center;
      if (!G) {
        const ee = (C.attributes ?? []).find((ge) => ge.key === "semio.center");
        (ee == null ? void 0 : ee.value) && (G = JSON.parse(ee.value));
      }
      G && N.push(G);
    }
    N.length === 0 && N.push({
      u: 0,
      v: 0
    });
    const L = Math.min(...N.map((C) => C.u)), U = Math.max(...N.map((C) => C.u)), j = Math.min(...N.map((C) => C.v)), $ = Math.max(...N.map((C) => C.v));
    let R;
    switch (n) {
      case "original":
        R = {
          u: 0,
          v: 0
        };
        break;
      case "middle":
        R = {
          u: (L + U) / 2,
          v: (j + $) / 2
        };
        break;
      case "centroid":
        R = {
          u: N.reduce((C, G) => C + G.u, 0) / N.length,
          v: N.reduce((C, G) => C + G.v, 0) / N.length
        };
        break;
      case "bottomLeft":
        R = {
          u: L,
          v: j
        };
        break;
      case "bottomRight":
        R = {
          u: U,
          v: j
        };
        break;
      case "topLeft":
        R = {
          u: L,
          v: $
        };
        break;
      case "topRight":
        R = {
          u: U,
          v: $
        };
        break;
      default:
        R = {
          u: 0,
          v: 0
        };
        break;
    }
    const I = /* @__PURE__ */ new Map();
    for (const C of v) C.name && (I.has(C.name) || I.set(C.name, []), I.get(C.name).push(C));
    const te = (C, G) => {
      if (!C || !G) return false;
      if (C === G) return true;
      const ee = l.get(C), ge = l.get(G);
      return !ee || !ge ? false : (ee.compatiblePorts ?? []).some((ue) => ue.guid === G) || (ge.compatiblePorts ?? []).some((ue) => ue.guid === C);
    }, m = (C, G) => {
      const ee = r.get(C);
      if (ee) return (ee.connectors ?? []).find((ge) => {
        var _a4, _b2;
        const ue = (G.name ?? "") !== "" && ge.name === G.name, V = ge.guid === G.guid;
        return !ue && !V ? false : te((_a4 = ge.port) == null ? void 0 : _a4.guid, (_b2 = G.port) == null ? void 0 : _b2.guid);
      });
    }, D = (C, G) => {
      var _a4, _b2, _c3, _d3, _e;
      if (!_.has(G.parentGuid)) return false;
      const ee = w.get(G.parentGuid);
      if (!ee) return false;
      const ge = ee.name ?? "";
      if (!ge || !I.has(ge)) return false;
      const ue = G.connection, he = ue.connected.piece.guid === G.parentGuid ? (_a4 = ue.connected.connector) == null ? void 0 : _a4.guid : (_b2 = ue.connecting.connector) == null ? void 0 : _b2.guid;
      if (!he || !((_c3 = ee.type) == null ? void 0 : _c3.guid)) return false;
      const ye = (_e = (_d3 = r.get(ee.type.guid)) == null ? void 0 : _d3.connectors) == null ? void 0 : _e.find((y) => y.guid === he);
      return ye ? I.get(ge).some((y) => {
        var _a5;
        return ((_a5 = y.type) == null ? void 0 : _a5.guid) ? m(y.type.guid, ye) !== void 0 : false;
      }) : false;
    }, z = [], P = [];
    for (const C of p) {
      if (_.has(C.guid)) continue;
      const G = C.plane !== void 0, ee = b.get(C.guid), ge = ee !== void 0;
      if (ge && ee && _.has(ee.parentGuid)) {
        const ue = w.get(ee.parentGuid);
        let V = false;
        if (D(C, ee)) {
          const he = ue.name ?? "", pe = I.get(he), ye = ee.connection, _e = ye.connected.piece.guid === ee.parentGuid, y = _e ? (_a3 = ye.connected.connector) == null ? void 0 : _a3.guid : (_b = ye.connecting.connector) == null ? void 0 : _b.guid;
          let E;
          if ((_c2 = ue.type) == null ? void 0 : _c2.guid) {
            const ie = r.get(ue.type.guid);
            ie && (E = (ie.connectors ?? []).find((ne) => ne.guid === y));
          }
          if (E) for (const ie of pe) {
            if (!((_d2 = ie.type) == null ? void 0 : _d2.guid)) continue;
            const ne = m(ie.type.guid, E);
            if (ne) {
              V = true, z.push(JSON.parse(JSON.stringify(C)));
              const W = JSON.parse(JSON.stringify(ye));
              if (_e ? W.connected = {
                piece: {
                  guid: ie.guid
                },
                connector: {
                  guid: ne.guid
                }
              } : W.connecting = {
                piece: {
                  guid: ie.guid
                },
                connector: {
                  guid: ne.guid
                }
              }, o) {
                const oe = _.has(ye.connected.piece.guid), J = _.has(ye.connecting.piece.guid);
                if ((ye.connecting.piece.guid === C.guid && ye.connected.piece.guid === ee.parentGuid || ye.connected.piece.guid === C.guid && ye.connecting.piece.guid === ee.parentGuid) && oe !== J) {
                  let ae;
                  if (ie.center) ae = {
                    u: ie.center.u,
                    v: ie.center.v
                  };
                  else {
                    const tt = (ie.attributes ?? []).find((Ke) => Ke.key === "semio.center");
                    (tt == null ? void 0 : tt.value) && (ae = JSON.parse(tt.value));
                  }
                  if (!ae) {
                    const tt = (ue.attributes ?? []).find((Ke) => Ke.key === "semio.center");
                    (tt == null ? void 0 : tt.value) ? ae = JSON.parse(tt.value) : ue.center && (ae = ue.center);
                  }
                  let ut;
                  const Ve = (C.attributes ?? []).find((tt) => tt.key === "semio.center");
                  (Ve == null ? void 0 : Ve.value) ? ut = JSON.parse(Ve.value) : C.center && (ut = C.center), ae && ut && (W.u = ae.u - (o.u + (R.u - ut.u)), W.v = ae.v - (o.v + (R.v - ut.v)));
                }
              }
              P.push(W);
              break;
            }
          }
        }
        if (!V) {
          const he = JSON.parse(JSON.stringify(C)), pe = C.attributes ?? [], ye = pe.find((E) => E.key === "semio.center"), _e = pe.find((E) => E.key === "semio.plane");
          (ye == null ? void 0 : ye.value) && (he.center = JSON.parse(ye.value)), (_e == null ? void 0 : _e.value) && (he.plane = JSON.parse(_e.value));
          const y = he.center ?? {
            u: 0,
            v: 0
          };
          he.center = {
            u: y.u - R.u + ((o == null ? void 0 : o.u) ?? 0),
            v: y.v - R.v + ((o == null ? void 0 : o.v) ?? 0)
          }, z.push(he);
        }
      } else if (G) {
        const ue = JSON.parse(JSON.stringify(C));
        let V = 0, he = 0;
        if (ue.center) V = ue.center.u, he = ue.center.v;
        else {
          const pe = (ue.attributes ?? []).find((ye) => ye.key === "semio.center");
          if (pe == null ? void 0 : pe.value) {
            const ye = JSON.parse(pe.value);
            V = ye.u, he = ye.v;
          }
        }
        ue.center = {
          u: V - R.u + ((o == null ? void 0 : o.u) ?? 0),
          v: he - R.v + ((o == null ? void 0 : o.v) ?? 0)
        }, z.push(ue);
      } else ge && ee && z.push(JSON.parse(JSON.stringify(C)));
    }
    const x = new Set(z.map((C) => C.guid));
    for (const C of u) _.has(C.connected.piece.guid) || _.has(C.connecting.piece.guid) || !x.has(C.connected.piece.guid) || !x.has(C.connecting.piece.guid) || P.push(JSON.parse(JSON.stringify(C)));
    const A = {};
    return z.length > 0 && (A.pieces = {
      added: z
    }), P.length > 0 && (A.connections = {
      added: P
    }), A;
  };
  wt = (t, e, i, n, o) => {
    const r = new Set(o.pieces), l = t.pieces ?? [], p = t.connections ?? [], u = /* @__PURE__ */ new Map();
    for (const m of l) u.set(m.guid, m);
    const v = /* @__PURE__ */ new Map();
    for (const m of n) v.set(m.guid, m);
    const _ = /* @__PURE__ */ new Map();
    for (const m of i) _.set(m.guid, m);
    const w = (m, D) => {
      if (!m || !D) return false;
      if (m === D) return true;
      const z = v.get(m), P = v.get(D);
      return !z || !P ? false : (z.compatiblePorts ?? []).some((x) => x.guid === D) || (P.compatiblePorts ?? []).some((x) => x.guid === m);
    }, b = (m, D) => {
      var _a3, _b, _c2, _d2;
      return !m || !D ? "" : ((_d2 = (_c2 = (_b = (_a3 = _.get(m)) == null ? void 0 : _a3.connectors) == null ? void 0 : _b.find((x) => x.guid === D)) == null ? void 0 : _c2.port) == null ? void 0 : _d2.guid) ?? "";
    }, N = (m) => {
      var _a3, _b;
      const D = u.get(m);
      return (((_b = ((_a3 = D == null ? void 0 : D.type) == null ? void 0 : _a3.guid) ? _.get(D.type.guid) : void 0) == null ? void 0 : _b.connectors) ?? []).map((P) => {
        var _a4;
        return ((_a4 = P.port) == null ? void 0 : _a4.guid) ?? "";
      });
    }, L = () => {
      var _a3, _b;
      const m = [];
      for (const D of p) {
        const z = r.has(D.connected.piece.guid), P = r.has(D.connecting.piece.guid);
        if (z === P) continue;
        const x = z ? D.connecting : D.connected, A = u.get(x.piece.guid);
        m.push(b((_a3 = A == null ? void 0 : A.type) == null ? void 0 : _a3.guid, (_b = x.connector) == null ? void 0 : _b.guid));
      }
      return m;
    }, U = () => o.pieces.flatMap((m) => N(m)), j = (m, D) => {
      if (m.length === 0) return true;
      if (D.length < m.length) return false;
      const z = m.map((A) => ({
        connectorIndexes: D.flatMap((C, G) => w(C, A) ? [
          G
        ] : [])
      })).sort((A, C) => A.connectorIndexes.length - C.connectorIndexes.length);
      if (z.some((A) => A.connectorIndexes.length === 0)) return false;
      const P = new Array(D.length).fill(false), x = (A) => {
        if (A >= z.length) return true;
        for (const C of z[A].connectorIndexes) if (!P[C]) {
          if (P[C] = true, x(A + 1)) return true;
          P[C] = false;
        }
        return false;
      };
      return x(0);
    }, $ = (m) => (m.connectors ?? []).map((D) => {
      var _a3;
      return ((_a3 = D.port) == null ? void 0 : _a3.guid) ?? "";
    }), R = (m) => {
      var _a3, _b, _c2;
      const D = /* @__PURE__ */ new Set();
      for (const P of m.connections ?? []) for (const x of [
        P.connected,
        P.connecting
      ]) x.piece.guid && ((_a3 = x.connector) == null ? void 0 : _a3.guid) && D.add(`${x.piece.guid}::${x.connector.guid}`);
      const z = [];
      for (const P of m.pieces ?? []) {
        const x = ((_b = P.type) == null ? void 0 : _b.guid) ? _.get(P.type.guid) : void 0;
        for (const A of (x == null ? void 0 : x.connectors) ?? []) D.has(`${P.guid}::${A.guid}`) || z.push(((_c2 = A.port) == null ? void 0 : _c2.guid) ?? "");
      }
      return z;
    };
    if (o.pieces.length === 0) return {
      types: i.filter((m) => $(m).length === 0).map((m) => m.guid),
      designs: e.filter((m) => R(m).length === 0).map((m) => m.guid)
    };
    const I = (() => {
      const m = L();
      return m.length > 0 ? m : U();
    })(), te = (m) => j(I, m);
    return {
      types: i.filter((m) => te($(m))).map((m) => m.guid),
      designs: e.filter((m) => te(R(m))).map((m) => m.guid)
    };
  };
  zt = Do([
    "file",
    "folder",
    "archive",
    "remote",
    "temporary"
  ]);
  Gt = zt.options;
  Nt = X({
    guid: K(),
    name: K(),
    version: K().optional(),
    types: H(li).optional(),
    designs: H(pi).optional(),
    tags: H(Ji).optional(),
    concepts: H(ji).optional(),
    ports: H(jt).optional(),
    qualities: H(qi).optional(),
    files: H(Hi).optional(),
    folders: H(Vi).optional(),
    authors: H(Ki).optional(),
    remote: K().optional(),
    homepage: K().optional(),
    license: K().optional(),
    preview: K().optional(),
    icon: K().optional(),
    image: K().optional(),
    description: K().optional(),
    attributes: H(ze).optional(),
    createdAt: At(),
    updatedAt: At()
  });
  Kt = (t) => JSON.stringify(Nt.parse(t));
  Ht = (t) => Nt.parse(JSON.parse(t, (e, i) => i === null ? void 0 : i));
  nn = Nt.omit({
    types: true,
    designs: true,
    tags: true,
    concepts: true,
    ports: true,
    qualities: true,
    files: true,
    folders: true,
    authors: true,
    attributes: true
  });
  mc = (t) => JSON.stringify(nn.parse(t));
  hc = (t) => nn.parse(JSON.parse(t));
  on = Nt.omit({
    types: true,
    designs: true,
    tags: true,
    concepts: true,
    ports: true,
    qualities: true,
    files: true,
    folders: true,
    authors: true,
    attributes: true
  }).extend({
    types: H(Yi).optional(),
    designs: H(tn).optional(),
    tags: H(Zo).optional(),
    concepts: H(Xo).optional(),
    ports: H($o).optional(),
    qualities: H(qo).optional(),
    files: H(zo).optional(),
    folders: H(Vo).optional(),
    authors: H(Uo).optional(),
    attributes: H(Zt).optional()
  });
  yc = (t) => JSON.stringify(on.parse(t));
  vc = (t) => on.parse(JSON.parse(t));
  wc = (t) => Yi.parse(t);
  Sc = (t) => {
    const e = {
      ...t
    };
    return e.models && (e.models = e.models.map((i) => Qo.parse(i))), e.connectors && (e.connectors = e.connectors.map((i) => es.parse(i))), e.props && (e.props = e.props.map((i) => Xt.parse(i))), e.attributes && (e.attributes = e.attributes.map((i) => Zt.parse(i))), is.parse(e);
  };
  Ec = (t) => tn.parse(t);
  _c = (t) => {
    const e = {
      ...t
    };
    return e.pieces && (e.pieces = e.pieces.map((i) => ss.parse(i))), e.connections && (e.connections = e.connections.map((i) => cs.parse(i))), e.stats && (e.stats = e.stats.map((i) => ds.parse(i))), e.props && (e.props = e.props.map((i) => Xt.parse(i))), e.layers && (e.layers = e.layers.map((i) => ns.parse(i))), e.groups && (e.groups = e.groups.map((i) => as.parse(i))), e.attributes && (e.attributes = e.attributes.map((i) => Zt.parse(i))), us.parse(e);
  };
  wo = (t) => nn.parse(t);
  So = (t) => {
    const e = {
      ...t
    };
    return e.types && (e.types = e.types.map((i) => Yi.parse(i))), e.designs && (e.designs = e.designs.map((i) => tn.parse(i))), e.tags && (e.tags = e.tags.map((i) => Zo.parse(i))), e.concepts && (e.concepts = e.concepts.map((i) => Xo.parse(i))), e.ports && (e.ports = e.ports.map((i) => $o.parse(i))), e.qualities && (e.qualities = e.qualities.map((i) => qo.parse(i))), e.files && (e.files = e.files.map((i) => zo.parse(i))), e.folders && (e.folders = e.folders.map((i) => Vo.parse(i))), e.authors && (e.authors = e.authors.map((i) => Uo.parse(i))), e.attributes && (e.attributes = e.attributes.map((i) => Zt.parse(i))), on.parse(e);
  };
  xc = Nt.partial().omit({
    types: true,
    designs: true,
    tags: true,
    concepts: true,
    ports: true,
    qualities: true,
    authors: true,
    files: true,
    folders: true,
    attributes: true
  }).extend({
    types: Ba.optional(),
    designs: ic.optional(),
    tags: oa.optional(),
    concepts: ga.optional(),
    ports: Wr.optional(),
    qualities: Jr.optional(),
    authors: Go.optional(),
    files: Br.optional(),
    folders: Pr.optional(),
    attributes: je.optional(),
    description: K().nullable().optional(),
    icon: K().nullable().optional(),
    image: K().nullable().optional(),
    remote: K().nullable().optional(),
    homepage: K().nullable().optional(),
    license: K().nullable().optional(),
    preview: K().nullable().optional()
  });
  ct = (t, e, i, n) => {
    const o = {}, r = new Set(e.map((_) => _.guid)), l = new Set(i.map((_) => _.guid)), p = e.filter((_) => !l.has(_.guid)).map((_) => ({
      guid: _.guid
    }));
    p.length > 0 && (o.removed = p);
    const u = e.filter((_) => l.has(_.guid)).map((_) => {
      const w = i.find((N) => N.guid === _.guid), b = n(_, w);
      return {
        [t]: {
          guid: _.guid
        },
        diff: b
      };
    }).filter((_) => Object.keys(_.diff).length > 0);
    u.length > 0 && (o.updated = u);
    const v = i.filter((_) => !r.has(_.guid));
    return v.length > 0 && (o.added = v), o;
  };
  dt = (t, e, i, n) => {
    var _a3;
    const o = {}, r = ((_a3 = i.removed) == null ? void 0 : _a3.map((l) => l.guid)) ?? [];
    return i.removed && (o.added = e.filter((l) => r.includes(l.guid))), i.added && (o.removed = i.added.map((l) => ({
      guid: l.guid
    }))), i.updated && (o.updated = i.updated.filter((l) => {
      const p = l[t];
      return e.some((u) => u.guid === p.guid);
    }).map((l) => {
      const p = l[t], u = e.find((v) => v.guid === p.guid);
      return {
        [t]: p,
        diff: n(u, l.diff)
      };
    })), o;
  };
  Ze = (t, e, i, n) => {
    if (!i) return e;
    let o = [
      ...e
    ];
    if (i.removed) {
      const r = new Set(i.removed.map((l) => l.guid));
      o = o.filter((l) => !r.has(l.guid));
    }
    if (i.updated) for (const r of i.updated) {
      const l = r[t], p = o.findIndex((u) => u.guid === l.guid);
      p !== -1 && (o[p] = n(o[p], r.diff));
    }
    return i.added && o.push(...i.added), o;
  };
  pt = (t, e) => {
    const i = {};
    t.name !== e.name && (i.name = e.name), t.version !== e.version && (i.version = e.version), t.description !== e.description && (i.description = e.description), t.icon !== e.icon && (i.icon = e.icon), t.image !== e.image && (i.image = e.image), t.remote !== e.remote && (i.remote = e.remote), t.homepage !== e.homepage && (i.homepage = e.homepage), t.license !== e.license && (i.license = e.license), t.preview !== e.preview && (i.preview = e.preview);
    const n = ct("type", t.types ?? [], e.types ?? [], ka);
    Object.keys(n).length > 0 && (i.types = n);
    const o = ct("design", t.designs ?? [], e.designs ?? [], tc);
    Object.keys(o).length > 0 && (i.designs = o);
    const r = sa(t.tags ?? [], e.tags ?? []);
    Object.keys(r).length > 0 && (i.tags = r);
    const l = pa(t.concepts ?? [], e.concepts ?? []);
    Object.keys(l).length > 0 && (i.concepts = l);
    const p = Yr(t.ports ?? [], e.ports ?? []);
    Object.keys(p).length > 0 && (i.ports = p);
    const u = ct("quality", t.qualities ?? [], e.qualities ?? [], Vr);
    Object.keys(u).length > 0 && (i.qualities = u);
    const v = ct("file", t.files ?? [], e.files ?? [], Ko);
    Object.keys(v).length > 0 && (i.files = v);
    const _ = ct("folder", t.folders ?? [], e.folders ?? [], Nr);
    Object.keys(_).length > 0 && (i.folders = _);
    const w = ct("author", t.authors ?? [], e.authors ?? [], Ar);
    Object.keys(w).length > 0 && (i.authors = w);
    const b = qe(t.attributes ?? [], e.attributes ?? []);
    return Object.keys(b).length > 0 && (i.attributes = b), i;
  };
  $t = (t, e) => {
    const i = {};
    return e.name !== void 0 && (i.name = t.name), e.version !== void 0 && (i.version = t.version), e.description !== void 0 && (i.description = t.description ?? null), e.icon !== void 0 && (i.icon = t.icon ?? null), e.image !== void 0 && (i.image = t.image ?? null), e.remote !== void 0 && (i.remote = t.remote ?? null), e.homepage !== void 0 && (i.homepage = t.homepage ?? null), e.license !== void 0 && (i.license = t.license ?? null), e.preview !== void 0 && (i.preview = t.preview ?? null), e.types && (i.types = dt("type", t.types ?? [], e.types, Ca)), e.designs && (i.designs = dt("design", t.designs ?? [], e.designs, Hn)), e.tags && (i.tags = ra(t.tags ?? [], e.tags)), e.concepts && (i.concepts = fa(t.concepts ?? [], e.concepts)), e.ports && (i.ports = Zr(t.ports ?? [], e.ports)), e.qualities && (i.qualities = dt("quality", t.qualities ?? [], e.qualities, qr)), e.files && (i.files = dt("file", t.files ?? [], e.files, Ho)), e.folders && (i.folders = dt("folder", t.folders ?? [], e.folders, Lr)), e.authors && (i.authors = dt("author", t.authors ?? [], e.authors, Tr)), e.attributes && (i.attributes = ot(t.attributes ?? [], e.attributes)), i;
  };
  ht = (t, e) => {
    const i = {
      guid: t.guid,
      name: "name" in e ? e.name : t.name,
      version: "version" in e ? e.version : t.version,
      createdAt: t.createdAt,
      updatedAt: e.updatedAt ?? t.updatedAt
    }, n = [
      "description",
      "icon",
      "image",
      "remote",
      "homepage",
      "license",
      "preview"
    ];
    for (const o of n) if (o in e) {
      const r = e[o] ?? void 0;
      r !== void 0 && (i[o] = r);
    } else o in t && t[o] !== void 0 && (i[o] = t[o]);
    if (e.types || t.types) {
      const o = Ze("type", t.types ?? [], e.types, ba);
      o.length > 0 && (i.types = o);
    }
    if (e.designs || t.designs) {
      const o = Ze("design", t.designs ?? [], e.designs, it);
      o.length > 0 && (i.designs = o);
    }
    if (e.tags || t.tags) {
      const o = aa(t.tags ?? [], e.tags ?? {});
      o.length > 0 && (i.tags = o);
    }
    if (e.concepts || t.concepts) {
      const o = ma(t.concepts ?? [], e.concepts ?? {});
      o.length > 0 && (i.concepts = o);
    }
    if (e.ports || t.ports) {
      const o = Xr(t.ports ?? [], e.ports ?? {});
      o.length > 0 && (i.ports = o);
    }
    if (e.qualities || t.qualities) {
      const o = Ze("quality", t.qualities ?? [], e.qualities, $r);
      o.length > 0 && (i.qualities = o);
    }
    if (e.files || t.files) {
      const o = Ze("file", t.files ?? [], e.files, Cr);
      o.length > 0 && (i.files = o);
    }
    if (e.folders || t.folders) {
      const o = Ze("folder", t.folders ?? [], e.folders, Or);
      o.length > 0 && (i.folders = o);
    }
    if (e.authors || t.authors) {
      const o = Ze("author", t.authors ?? [], e.authors, kr);
      o.length > 0 && (i.authors = o);
    }
    if (e.attributes || t.attributes) {
      const o = We(t.attributes ?? [], e.attributes ?? {});
      o.length > 0 && (i.attributes = o);
    }
    return i;
  };
  Ac = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  Tc = new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  Sn = (t) => {
    const e = (u, v) => u >>> v | u << 32 - v, i = t.length * 8, n = t.length + 1 + ((55 - t.length) % 64 + 64) % 64 + 8, o = new Uint8Array(n);
    o.set(t), o[t.length] = 128;
    const r = new DataView(o.buffer);
    r.setUint32(n - 4, i, false), i > 4294967295 && r.setUint32(n - 8, Math.floor(i / 4294967296), false);
    const l = new Uint32Array(Tc), p = new Uint32Array(64);
    for (let u = 0; u < n; u += 64) {
      for (let $ = 0; $ < 16; $++) p[$] = r.getUint32(u + $ * 4, false);
      for (let $ = 16; $ < 64; $++) {
        const R = e(p[$ - 15], 7) ^ e(p[$ - 15], 18) ^ p[$ - 15] >>> 3, I = e(p[$ - 2], 17) ^ e(p[$ - 2], 19) ^ p[$ - 2] >>> 10;
        p[$] = p[$ - 16] + R + p[$ - 7] + I | 0;
      }
      let [v, _, w, b, N, L, U, j] = l;
      for (let $ = 0; $ < 64; $++) {
        const R = e(N, 6) ^ e(N, 11) ^ e(N, 25), I = N & L ^ ~N & U, te = j + R + I + Ac[$] + p[$] | 0, m = e(v, 2) ^ e(v, 13) ^ e(v, 22), D = v & _ ^ v & w ^ _ & w, z = m + D | 0;
        j = U, U = L, L = N, N = b + te | 0, b = w, w = _, _ = v, v = te + z | 0;
      }
      l[0] = l[0] + v | 0, l[1] = l[1] + _ | 0, l[2] = l[2] + w | 0, l[3] = l[3] + b | 0, l[4] = l[4] + N | 0, l[5] = l[5] + L | 0, l[6] = l[6] + U | 0, l[7] = l[7] + j | 0;
    }
    return Array.from(l).map((u) => (u >>> 0).toString(16).padStart(8, "0")).join("");
  };
  class me {
    constructor() {
      __publicField(this, "parts", []);
      __publicField(this, "len", 0);
    }
    push(e) {
      this.parts.push(e), this.len += e.length;
    }
    writeString(e) {
      const i = new TextEncoder().encode(e), n = new Uint8Array(4);
      new DataView(n.buffer).setUint32(0, i.length, false), this.push(n), this.push(i);
    }
    writeNumber(e) {
      this.writeString(kc(e));
    }
    writeBool(e) {
      this.push(new Uint8Array([
        e ? 1 : 0
      ]));
    }
    writeHash(e) {
      this.writeString(e);
    }
    writeHashList(e) {
      const i = [
        ...e
      ].sort(), n = new Uint8Array(4);
      new DataView(n.buffer).setUint32(0, i.length, false), this.push(n);
      for (const o of i) this.writeString(o);
    }
    writeGuidList(e) {
      const i = [
        ...e
      ].sort(), n = new Uint8Array(4);
      new DataView(n.buffer).setUint32(0, i.length, false), this.push(n);
      for (const o of i) this.writeString(o);
    }
    digest() {
      const e = new Uint8Array(this.len);
      let i = 0;
      for (const n of this.parts) e.set(n, i), i += n.length;
      return Sn(e);
    }
  }
  let re, Be, Qe, nt, Wt, Ee, $e;
  kc = (t) => (Number.isInteger(t), t.toString());
  ys = (t) => {
    const e = new me();
    return e.writeString("Coord"), e.writeString("u"), e.writeNumber(t.u), e.writeString("v"), e.writeNumber(t.v), e.digest();
  };
  vs = (t) => {
    const e = new me();
    return e.writeString("Point"), e.writeString("x"), e.writeNumber(t.x), e.writeString("y"), e.writeNumber(t.y), e.writeString("z"), e.writeNumber(t.z), e.digest();
  };
  En = (t) => {
    const e = new me();
    return e.writeString("Vector"), e.writeString("x"), e.writeNumber(t.x), e.writeString("y"), e.writeNumber(t.y), e.writeString("z"), e.writeNumber(t.z), e.digest();
  };
  _n = (t) => {
    const e = new me();
    return e.writeString("Plane"), e.writeString("origin"), e.writeHash(vs(t.origin)), e.writeString("xAxis"), e.writeHash(En(t.xAxis)), e.writeString("yAxis"), e.writeHash(En(t.yAxis)), e.digest();
  };
  et = (t) => {
    const e = new me();
    return e.writeString("Attribute"), t.definition != null && (e.writeString("definition"), e.writeString(t.definition)), e.writeString("guid"), e.writeString(t.guid), e.writeString("key"), e.writeString(t.key), t.value != null && (e.writeString("value"), e.writeString(t.value)), e.digest();
  };
  ws = (t) => {
    const e = new me();
    return e.writeString("Author"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.email != null && t.email !== "" && (e.writeString("email"), e.writeString(t.email)), e.writeString("guid"), e.writeString(t.guid), e.writeString("name"), e.writeString(t.name), e.digest();
  };
  Ss = (t) => {
    const e = new me();
    return e.writeString("File"), t.blob != null && (e.writeString("blob"), e.writeString(t.blob)), t.folder != null && (e.writeString("folder"), e.writeString(t.folder.guid)), e.writeString("guid"), e.writeString(t.guid), t.hash != null && (e.writeString("hash"), e.writeString(t.hash)), e.writeString("name"), e.writeString(t.name), t.remote != null && (e.writeString("remote"), e.writeString(t.remote)), t.size != null && (e.writeString("size"), e.writeNumber(t.size)), e.digest();
  };
  Es = (t) => {
    const e = new me();
    return e.writeString("Folder"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.description != null && (e.writeString("description"), e.writeString(t.description)), e.writeString("guid"), e.writeString(t.guid), e.writeString("name"), e.writeString(t.name), t.parent != null && (e.writeString("parent"), e.writeString(t.parent.guid)), e.digest();
  };
  _s = (t) => {
    const e = new me();
    return e.writeString("Benchmark"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), e.writeString("guid"), e.writeString(t.guid), t.icon != null && (e.writeString("icon"), e.writeString(t.icon)), t.max != null && (e.writeString("max"), e.writeNumber(t.max)), t.maxExcluded != null && (e.writeString("maxExcluded"), e.writeBool(t.maxExcluded)), t.min != null && (e.writeString("min"), e.writeNumber(t.min)), t.minExcluded != null && (e.writeString("minExcluded"), e.writeBool(t.minExcluded)), e.writeString("name"), e.writeString(t.name), e.digest();
  };
  xs = (t) => {
    const e = new me();
    return e.writeString("Quality"), t.benchmarks && t.benchmarks.length > 0 && (e.writeString("benchmarks"), e.writeHashList(t.benchmarks.map(_s))), t.canScale != null && (e.writeString("canScale"), e.writeBool(t.canScale)), t.defaultImperialUnit != null && (e.writeString("defaultImperialUnit"), e.writeString(t.defaultImperialUnit)), t.defaultSiUnit != null && (e.writeString("defaultSiUnit"), e.writeString(t.defaultSiUnit)), t.defaultValue != null && (e.writeString("defaultValue"), e.writeNumber(t.defaultValue)), t.description != null && (e.writeString("description"), e.writeString(t.description)), t.formula != null && (e.writeString("formula"), e.writeString(t.formula)), e.writeString("guid"), e.writeString(t.guid), t.icon != null && (e.writeString("icon"), e.writeString(t.icon)), t.image != null && (e.writeString("image"), e.writeString(t.image)), t.isMaxExcluded != null && (e.writeString("isMaxExcluded"), e.writeBool(t.isMaxExcluded)), t.isMinExcluded != null && (e.writeString("isMinExcluded"), e.writeBool(t.isMinExcluded)), e.writeString("key"), e.writeString(t.key), t.kind != null && (e.writeString("kind"), e.writeNumber(t.kind)), t.max != null && (e.writeString("max"), e.writeNumber(t.max)), t.min != null && (e.writeString("min"), e.writeNumber(t.min)), e.writeString("name"), e.writeString(t.name), t.unit != null && (e.writeString("unit"), e.writeString(t.unit)), t.uri != null && (e.writeString("uri"), e.writeString(t.uri)), e.digest();
  };
  As = (t) => {
    const e = new me();
    return e.writeString("Port"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.compatiblePorts && t.compatiblePorts.length > 0 && (e.writeString("compatiblePorts"), e.writeGuidList(t.compatiblePorts.map((i) => i.guid))), t.description != null && (e.writeString("description"), e.writeString(t.description)), e.writeString("guid"), e.writeString(t.guid), t.icon != null && (e.writeString("icon"), e.writeString(t.icon)), e.writeString("name"), e.writeString(t.name), e.digest();
  };
  fi = (t) => {
    const e = new me();
    return e.writeString("Prop"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), e.writeString("guid"), e.writeString(t.guid), e.writeString("quality"), e.writeString(t.quality.guid), t.unit != null && (e.writeString("unit"), e.writeString(t.unit)), e.writeString("value"), e.writeString(t.value), e.digest();
  };
  Ts = (t) => {
    const e = new me();
    return e.writeString("Tag"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.description != null && (e.writeString("description"), e.writeString(t.description)), e.writeString("guid"), e.writeString(t.guid), t.icon != null && (e.writeString("icon"), e.writeString(t.icon)), e.writeString("name"), e.writeString(t.name), e.digest();
  };
  ks = (t) => {
    const e = new me();
    return e.writeString("Concept"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.description != null && (e.writeString("description"), e.writeString(t.description)), e.writeString("guid"), e.writeString(t.guid), t.icon != null && (e.writeString("icon"), e.writeString(t.icon)), e.writeString("name"), e.writeString(t.name), e.digest();
  };
  bs = (t) => {
    const e = new me();
    return e.writeString("Model"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.description != null && (e.writeString("description"), e.writeString(t.description)), e.writeString("file"), e.writeString(t.file.guid), e.writeString("guid"), e.writeString(t.guid), t.name != null && (e.writeString("name"), e.writeString(t.name)), t.tags && t.tags.length > 0 && (e.writeString("tags"), e.writeGuidList(t.tags.map((i) => i.guid))), e.digest();
  };
  Mi = (t) => {
    const e = new me();
    return e.writeString("Connector"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.description != null && (e.writeString("description"), e.writeString(t.description)), e.writeString("direction"), e.writeHash(En(t.direction)), e.writeString("guid"), e.writeString(t.guid), t.mandatory != null && (e.writeString("mandatory"), e.writeBool(t.mandatory)), t.name != null && (e.writeString("name"), e.writeString(t.name)), e.writeString("point"), e.writeHash(vs(t.point)), t.port != null && (e.writeString("port"), e.writeString(t.port.guid)), t.props && t.props.length > 0 && (e.writeString("props"), e.writeHashList(t.props.map(fi))), e.writeString("t"), e.writeNumber(t.t), e.digest();
  };
  qn = (t) => {
    const e = new me();
    return e.writeString("Type"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.authors && t.authors.length > 0 && (e.writeString("authors"), e.writeGuidList(t.authors.map((i) => i.guid))), t.concepts && t.concepts.length > 0 && (e.writeString("concepts"), e.writeGuidList(t.concepts.map((i) => i.guid))), t.connectors && t.connectors.length > 0 && (e.writeString("connectors"), e.writeHashList(t.connectors.map(Mi))), t.description != null && (e.writeString("description"), e.writeString(t.description)), t.folder != null && (e.writeString("folder"), e.writeString(t.folder)), e.writeString("guid"), e.writeString(t.guid), t.icon != null && (e.writeString("icon"), e.writeString(t.icon)), t.image != null && (e.writeString("image"), e.writeString(t.image)), t.isAbstract != null && (e.writeString("isAbstract"), e.writeBool(t.isAbstract)), t.location != null && (e.writeString("location"), e.writeString(t.location.guid)), t.models && t.models.length > 0 && (e.writeString("models"), e.writeHashList(t.models.map(bs))), e.writeString("name"), e.writeString(t.name), t.parent != null && (e.writeString("parent"), e.writeString(t.parent.guid)), t.props && t.props.length > 0 && (e.writeString("props"), e.writeHashList(t.props.map(fi))), t.stock != null && (e.writeString("stock"), e.writeNumber(t.stock)), t.unit != null && (e.writeString("unit"), e.writeString(t.unit)), t.virtual != null && (e.writeString("virtual"), e.writeBool(t.virtual)), e.digest();
  };
  Cs = (t) => {
    const e = new me();
    return e.writeString("Layer"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.color != null && (e.writeString("color"), e.writeString(t.color)), t.description != null && (e.writeString("description"), e.writeString(t.description)), e.writeString("guid"), e.writeString(t.guid), t.isHidden != null && (e.writeString("isHidden"), e.writeBool(t.isHidden)), t.isLocked != null && (e.writeString("isLocked"), e.writeBool(t.isLocked)), e.writeString("path"), e.writeString(t.path), e.digest();
  };
  Bs = (t) => {
    const e = new me();
    return e.writeString("Stat"), e.writeString("guid"), e.writeString(t.guid), t.max != null && (e.writeString("max"), e.writeNumber(t.max)), t.maxExcluded != null && (e.writeString("maxExcluded"), e.writeBool(t.maxExcluded)), t.min != null && (e.writeString("min"), e.writeNumber(t.min)), t.minExcluded != null && (e.writeString("minExcluded"), e.writeBool(t.minExcluded)), e.writeString("quality"), e.writeString(t.quality.guid), t.unit != null && (e.writeString("unit"), e.writeString(t.unit)), e.digest();
  };
  Rs = (t) => {
    const e = new me();
    return e.writeString("Group"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.color != null && (e.writeString("color"), e.writeString(t.color)), t.description != null && (e.writeString("description"), e.writeString(t.description)), e.writeString("guid"), e.writeString(t.guid), t.name != null && (e.writeString("name"), e.writeString(t.name)), e.writeString("pieces"), e.writeGuidList(t.pieces.map((i) => i.guid)), e.digest();
  };
  Eo = (t) => {
    const e = new me();
    return e.writeString("Side"), t.connector != null && (e.writeString("connector"), e.writeString(t.connector.guid)), t.designPiece != null && (e.writeString("designPiece"), e.writeString(t.designPiece.guid)), e.writeString("piece"), e.writeString(t.piece.guid), e.digest();
  };
  Fi = (t) => {
    const e = new me();
    return e.writeString("Connection"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), e.writeString("connected"), e.writeHash(Eo(t.connected)), e.writeString("connecting"), e.writeHash(Eo(t.connecting)), t.description != null && (e.writeString("description"), e.writeString(t.description)), t.gap != null && (e.writeString("gap"), e.writeNumber(t.gap)), e.writeString("guid"), e.writeString(t.guid), t.rise != null && (e.writeString("rise"), e.writeNumber(t.rise)), t.rotation != null && (e.writeString("rotation"), e.writeNumber(t.rotation)), t.shift != null && (e.writeString("shift"), e.writeNumber(t.shift)), t.tilt != null && (e.writeString("tilt"), e.writeNumber(t.tilt)), t.turn != null && (e.writeString("turn"), e.writeNumber(t.turn)), t.u != null && (e.writeString("u"), e.writeNumber(t.u)), t.v != null && (e.writeString("v"), e.writeNumber(t.v)), e.digest();
  };
  Ii = (t) => {
    const e = new me();
    return e.writeString("Piece"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.center != null && (e.writeString("center"), e.writeHash(ys(t.center))), t.color != null && (e.writeString("color"), e.writeString(t.color)), t.description != null && (e.writeString("description"), e.writeString(t.description)), t.design != null && (e.writeString("design"), e.writeString(t.design.guid)), e.writeString("guid"), e.writeString(t.guid), t.isHidden != null && (e.writeString("isHidden"), e.writeBool(t.isHidden)), t.isLocked != null && (e.writeString("isLocked"), e.writeBool(t.isLocked)), t.mirrorPlane != null && (e.writeString("mirrorPlane"), e.writeHash(_n(t.mirrorPlane))), t.name != null && (e.writeString("name"), e.writeString(t.name)), t.plane != null && (e.writeString("plane"), e.writeHash(_n(t.plane))), t.props && t.props.length > 0 && (e.writeString("props"), e.writeHashList(t.props.map(fi))), t.scale != null && (e.writeString("scale"), e.writeNumber(t.scale)), t.type != null && (e.writeString("type"), e.writeString(t.type.guid)), e.digest();
  };
  $n = (t) => {
    const e = new me();
    return e.writeString("Design"), t.activeLayer != null && (e.writeString("activeLayer"), e.writeString(t.activeLayer.guid)), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.authors && t.authors.length > 0 && (e.writeString("authors"), e.writeGuidList(t.authors.map((i) => i.guid))), t.canMirror != null && (e.writeString("canMirror"), e.writeBool(t.canMirror)), t.canScale != null && (e.writeString("canScale"), e.writeBool(t.canScale)), t.concepts && t.concepts.length > 0 && (e.writeString("concepts"), e.writeGuidList(t.concepts.map((i) => i.guid))), t.connections && t.connections.length > 0 && (e.writeString("connections"), e.writeHashList(t.connections.map(Fi))), t.description != null && (e.writeString("description"), e.writeString(t.description)), t.folder != null && (e.writeString("folder"), e.writeString(t.folder)), t.groups && t.groups.length > 0 && (e.writeString("groups"), e.writeHashList(t.groups.map(Rs))), e.writeString("guid"), e.writeString(t.guid), t.icon != null && (e.writeString("icon"), e.writeString(t.icon)), t.image != null && (e.writeString("image"), e.writeString(t.image)), t.isAbstract != null && (e.writeString("isAbstract"), e.writeBool(t.isAbstract)), t.layers && t.layers.length > 0 && (e.writeString("layers"), e.writeHashList(t.layers.map(Cs))), t.location != null && (e.writeString("location"), e.writeString(t.location.guid)), e.writeString("name"), e.writeString(t.name), t.parent != null && (e.writeString("parent"), e.writeString(t.parent.guid)), t.pieces && t.pieces.length > 0 && (e.writeString("pieces"), e.writeHashList(t.pieces.map(Ii))), t.props && t.props.length > 0 && (e.writeString("props"), e.writeHashList(t.props.map(fi))), t.stats && t.stats.length > 0 && (e.writeString("stats"), e.writeHashList(t.stats.map(Bs))), t.unit != null && (e.writeString("unit"), e.writeString(t.unit)), e.digest();
  };
  Qt = (t) => {
    const e = new me();
    return e.writeString("Kit"), t.attributes && t.attributes.length > 0 && (e.writeString("attributes"), e.writeHashList(t.attributes.map(et))), t.authors && t.authors.length > 0 && (e.writeString("authors"), e.writeHashList(t.authors.map(ws))), t.concepts && t.concepts.length > 0 && (e.writeString("concepts"), e.writeHashList(t.concepts.map(ks))), t.description != null && (e.writeString("description"), e.writeString(t.description)), t.designs && t.designs.length > 0 && (e.writeString("designs"), e.writeHashList(t.designs.map($n))), t.files && t.files.length > 0 && (e.writeString("files"), e.writeHashList(t.files.map(Ss))), t.folders && t.folders.length > 0 && (e.writeString("folders"), e.writeHashList(t.folders.map(Es))), e.writeString("guid"), e.writeString(t.guid), t.homepage != null && (e.writeString("homepage"), e.writeString(t.homepage)), t.icon != null && (e.writeString("icon"), e.writeString(t.icon)), t.image != null && (e.writeString("image"), e.writeString(t.image)), t.license != null && (e.writeString("license"), e.writeString(t.license)), e.writeString("name"), e.writeString(t.name), t.ports && t.ports.length > 0 && (e.writeString("ports"), e.writeHashList(t.ports.map(As))), t.preview != null && (e.writeString("preview"), e.writeString(t.preview)), t.qualities && t.qualities.length > 0 && (e.writeString("qualities"), e.writeHashList(t.qualities.map(xs))), t.remote != null && (e.writeString("remote"), e.writeString(t.remote)), t.tags && t.tags.length > 0 && (e.writeString("tags"), e.writeHashList(t.tags.map(Ts))), t.types && t.types.length > 0 && (e.writeString("types"), e.writeHashList(t.types.map(qn))), t.version != null && (e.writeString("version"), e.writeString(t.version)), e.digest();
  };
  re = (t, e, i) => {
    i !== void 0 && (t.writeString(e), i === null ? t.writeBool(false) : t.writeString(i));
  };
  Be = (t, e, i) => {
    i !== void 0 && (t.writeString(e), i === null ? t.writeBool(false) : t.writeNumber(i));
  };
  Qe = (t, e, i) => {
    i !== void 0 && (t.writeString(e), i === null ? t.writeBool(false) : t.writeBool(i));
  };
  nt = (t, e, i) => {
    i !== void 0 && (t.writeString(e), i === null ? t.writeBool(false) : t.writeString(i.guid));
  };
  Wt = (t, e, i) => {
    i !== void 0 && (t.writeString(e), i === null ? t.writeBool(false) : t.writeGuidList(i.map((n) => n.guid)));
  };
  Ee = (t, e, i, n) => {
    i !== void 0 && (t.writeString(e), i === null ? t.writeBool(false) : t.writeHash(n(i)));
  };
  $e = (t, e, i, n, o, r) => {
    const l = new me();
    if (l.writeString(t), r.added && r.added.length > 0 && (l.writeString("added"), l.writeHashList(r.added.map(n))), r.removed && r.removed.length > 0 && (l.writeString("removed"), l.writeGuidList(r.removed.map((p) => p.guid))), r.updated && r.updated.length > 0) {
      l.writeString("updated");
      const p = [
        i,
        "diff"
      ].sort(), u = r.updated.map((v) => {
        const _ = new me();
        _.writeString(e);
        for (const w of p) w === "diff" ? (_.writeString("diff"), _.writeHash(o(v.diff))) : (_.writeString(w), _.writeString(v[w].guid));
        return _.digest();
      });
      l.writeHashList(u);
    }
    return l.digest();
  };
  _o = (t) => {
    const e = new me();
    return e.writeString("CoordDiff"), Be(e, "u", t.u), Be(e, "v", t.v), e.digest();
  };
  Ns = (t) => {
    const e = new me();
    return e.writeString("PointDiff"), Be(e, "x", t.x), Be(e, "y", t.y), Be(e, "z", t.z), e.digest();
  };
  xn = (t) => {
    const e = new me();
    return e.writeString("VectorDiff"), Be(e, "x", t.x), Be(e, "y", t.y), Be(e, "z", t.z), e.digest();
  };
  An = (t) => {
    const e = new me();
    return e.writeString("PlaneDiff"), Ee(e, "origin", t.origin, Ns), Ee(e, "xAxis", t.xAxis, xn), Ee(e, "yAxis", t.yAxis, xn), e.digest();
  };
  Tn = (t) => {
    const e = new me();
    return e.writeString("AttributeDiff"), re(e, "definition", t.definition), re(e, "key", t.key), re(e, "value", t.value), e.digest();
  };
  st = (t) => $e("AttributesDiff", "AttributeDiffUpdate", "attribute", et, Tn, t);
  bc = (t) => {
    const e = new me();
    return e.writeString("AuthorDiff"), Ee(e, "attributes", t.attributes, st), re(e, "email", t.email), re(e, "name", t.name), e.digest();
  };
  Ls = (t) => $e("AuthorsDiff", "AuthorDiffUpdate", "author", ws, bc, t);
  Cc = (t) => {
    const e = new me();
    return e.writeString("FileDiff"), re(e, "blob", t.blob), nt(e, "folder", t.folder), re(e, "hash", t.hash), re(e, "name", t.name), re(e, "remote", t.remote), Be(e, "size", t.size), e.digest();
  };
  Bc = (t) => $e("FilesDiff", "FileDiffUpdate", "file", Ss, Cc, t);
  Rc = (t) => {
    const e = new me();
    return e.writeString("FolderDiff"), Ee(e, "attributes", t.attributes, st), re(e, "description", t.description), re(e, "name", t.name), nt(e, "parent", t.parent), e.digest();
  };
  Nc = (t) => $e("FoldersDiff", "FolderDiffUpdate", "folder", Es, Rc, t);
  Lc = (t) => {
    const e = new me();
    return e.writeString("BenchmarkDiff"), Ee(e, "attributes", t.attributes, st), re(e, "icon", t.icon), Be(e, "max", t.max), Qe(e, "maxExcluded", t.maxExcluded), Be(e, "min", t.min), Qe(e, "minExcluded", t.minExcluded), re(e, "name", t.name), e.digest();
  };
  Oc = (t) => $e("BenchmarksDiff", "BenchmarkDiffUpdate", "benchmark", _s, Lc, t);
  Pc = (t) => {
    const e = new me();
    return e.writeString("QualityDiff"), Ee(e, "benchmarks", t.benchmarks, Oc), Qe(e, "canScale", t.canScale), re(e, "defaultImperialUnit", t.defaultImperialUnit), re(e, "defaultSiUnit", t.defaultSiUnit), Be(e, "defaultValue", t.defaultValue), re(e, "description", t.description), re(e, "folder", t.folder), re(e, "formula", t.formula), re(e, "icon", t.icon), re(e, "image", t.image), Qe(e, "isMaxExcluded", t.isMaxExcluded), Qe(e, "isMinExcluded", t.isMinExcluded), re(e, "key", t.key), Be(e, "kind", t.kind), Be(e, "max", t.max), Be(e, "min", t.min), re(e, "name", t.name), re(e, "unit", t.unit), re(e, "uri", t.uri), e.digest();
  };
  Dc = (t) => $e("QualitiesDiff", "QualityDiffUpdate", "quality", xs, Pc, t);
  Mc = (t) => {
    const e = new me();
    return e.writeString("PortDiff"), Ee(e, "attributes", t.attributes, st), Wt(e, "compatiblePorts", t.compatiblePorts), re(e, "description", t.description), re(e, "icon", t.icon), re(e, "name", t.name), e.digest();
  };
  Fc = (t) => $e("PortsDiff", "PortDiffUpdate", "port", As, Mc, t);
  Ic = (t) => {
    const e = new me();
    return e.writeString("PropDiff"), Ee(e, "attributes", t.attributes, st), nt(e, "quality", t.quality), re(e, "unit", t.unit), re(e, "value", t.value), e.digest();
  };
  sn = (t) => $e("PropsDiff", "PropDiffUpdate", "prop", fi, Ic, t);
  Uc = (t) => {
    const e = new me();
    return e.writeString("TagDiff"), Ee(e, "attributes", t.attributes, st), re(e, "description", t.description), re(e, "icon", t.icon), re(e, "name", t.name), e.digest();
  };
  Gc = (t) => $e("TagsDiff", "TagDiffUpdate", "tag", Ts, Uc, t);
  zc = (t) => {
    const e = new me();
    return e.writeString("ConceptDiff"), Ee(e, "attributes", t.attributes, st), re(e, "description", t.description), re(e, "icon", t.icon), re(e, "name", t.name), e.digest();
  };
  Kc = (t) => $e("ConceptsDiff", "ConceptDiffUpdate", "concept", ks, zc, t);
  Hc = (t) => {
    const e = new me();
    return e.writeString("ModelDiff"), Ee(e, "attributes", t.attributes, st), re(e, "description", t.description), nt(e, "file", t.file), re(e, "name", t.name), Wt(e, "tags", t.tags), e.digest();
  };
  Vc = (t) => $e("ModelsDiff", "ModelDiffUpdate", "model", bs, Hc, t);
  qc = (t) => {
    const e = new me();
    return e.writeString("ConnectorDiff"), Ee(e, "attributes", t.attributes, st), re(e, "description", t.description), Ee(e, "direction", t.direction, xn), Qe(e, "mandatory", t.mandatory), re(e, "name", t.name), Ee(e, "point", t.point, Ns), nt(e, "port", t.port), Ee(e, "props", t.props, sn), Be(e, "t", t.t), e.digest();
  };
  $c = (t) => $e("ConnectorsDiff", "ConnectorDiffUpdate", "connector", Mi, qc, t);
  Jc = (t) => {
    const e = new me();
    return e.writeString("TypeDiff"), Ee(e, "attributes", t.attributes, st), Wt(e, "authors", t.authors), Wt(e, "concepts", t.concepts), Ee(e, "connectors", t.connectors, $c), re(e, "description", t.description), re(e, "folder", t.folder), re(e, "icon", t.icon), re(e, "image", t.image), Qe(e, "isAbstract", t.isAbstract), nt(e, "location", t.location), Ee(e, "models", t.models, Vc), re(e, "name", t.name), nt(e, "parent", t.parent), Ee(e, "props", t.props, sn), Be(e, "stock", t.stock), re(e, "unit", t.unit), Qe(e, "virtual", t.virtual), e.digest();
  };
  kn = (t) => $e("TypesDiff", "TypeDiffUpdate", "type", qn, Jc, t);
  Ui = (t) => {
    const e = new me();
    return e.writeString("SideDiff"), nt(e, "connector", t.connector), nt(e, "designPiece", t.designPiece), nt(e, "piece", t.piece), e.digest();
  };
  jc = (t) => {
    const e = new me();
    return e.writeString("LayerDiff"), Ee(e, "attributes", t.attributes, st), re(e, "color", t.color), re(e, "description", t.description), Qe(e, "isHidden", t.isHidden), Qe(e, "isLocked", t.isLocked), re(e, "path", t.path), e.digest();
  };
  Wc = (t) => $e("LayersDiff", "LayerDiffUpdate", "layer", Cs, jc, t);
  Yc = (t) => {
    const e = new me();
    return e.writeString("GroupDiff"), Ee(e, "attributes", t.attributes, st), re(e, "color", t.color), re(e, "description", t.description), re(e, "name", t.name), Wt(e, "pieces", t.pieces), e.digest();
  };
  Zc = (t) => $e("GroupsDiff", "GroupDiffUpdate", "group", Rs, Yc, t);
  bn = (t) => {
    const e = new me();
    return e.writeString("StatDiff"), Be(e, "max", t.max), Qe(e, "maxExcluded", t.maxExcluded), Be(e, "min", t.min), Qe(e, "minExcluded", t.minExcluded), nt(e, "quality", t.quality), re(e, "unit", t.unit), e.digest();
  };
  Xc = (t) => $e("StatsDiff", "StatDiffUpdate", "stat", Bs, bn, t);
  Cn = (t) => {
    const e = new me();
    return e.writeString("ConnectionDiff"), Ee(e, "attributes", t.attributes, st), Ee(e, "connected", t.connected, Ui), Ee(e, "connecting", t.connecting, Ui), re(e, "description", t.description), Be(e, "gap", t.gap), Be(e, "rise", t.rise), Be(e, "rotation", t.rotation), Be(e, "shift", t.shift), Be(e, "tilt", t.tilt), Be(e, "turn", t.turn), Be(e, "u", t.u), Be(e, "v", t.v), e.digest();
  };
  Qc = (t) => $e("ConnectionsDiff", "ConnectionDiffUpdate", "connection", Fi, Cn, t);
  ed = (t) => {
    const e = new me();
    return e.writeString("PieceDiff"), Ee(e, "attributes", t.attributes, st), Ee(e, "center", t.center, ys), re(e, "color", t.color), re(e, "description", t.description), nt(e, "design", t.design), Qe(e, "isHidden", t.isHidden), Qe(e, "isLocked", t.isLocked), Ee(e, "mirrorPlane", t.mirrorPlane, _n), re(e, "name", t.name), Ee(e, "plane", t.plane, An), Ee(e, "props", t.props, sn), Be(e, "scale", t.scale), nt(e, "type", t.type), e.digest();
  };
  td = (t) => $e("PiecesDiff", "PieceDiffUpdate", "piece", Ii, ed, t);
  id = (t) => {
    const e = new me();
    return e.writeString("DesignDiff"), nt(e, "activeLayer", t.activeLayer), Ee(e, "attributes", t.attributes, st), Ee(e, "authors", t.authors, Ls), Qe(e, "canMirror", t.canMirror), Qe(e, "canScale", t.canScale), Wt(e, "concepts", t.concepts), Ee(e, "connections", t.connections, Qc), re(e, "description", t.description), re(e, "folder", t.folder), Ee(e, "groups", t.groups, Zc), re(e, "icon", t.icon), re(e, "image", t.image), Qe(e, "isAbstract", t.isAbstract), Ee(e, "layers", t.layers, Wc), nt(e, "location", t.location), re(e, "name", t.name), nt(e, "parent", t.parent), Ee(e, "pieces", t.pieces, td), Ee(e, "props", t.props, sn), Ee(e, "stats", t.stats, Xc), re(e, "unit", t.unit), e.digest();
  };
  Bn = (t) => $e("DesignsDiff", "DesignDiffUpdate", "design", $n, id, t);
  Dt = (t) => {
    const e = new me();
    return e.writeString("KitDiff"), Ee(e, "attributes", t.attributes, st), Ee(e, "authors", t.authors, Ls), Ee(e, "concepts", t.concepts, Kc), re(e, "description", t.description), Ee(e, "designs", t.designs, Bn), Ee(e, "files", t.files, Bc), Ee(e, "folders", t.folders, Nc), re(e, "homepage", t.homepage), re(e, "icon", t.icon), re(e, "image", t.image), re(e, "license", t.license), re(e, "name", t.name), Ee(e, "ports", t.ports, Fc), re(e, "preview", t.preview), Ee(e, "qualities", t.qualities, Dc), re(e, "remote", t.remote), Ee(e, "tags", t.tags, Gc), Ee(e, "types", t.types, kn), re(e, "version", t.version), e.digest();
  };
  X({
    removed: H(so).optional(),
    updated: H(X({
      kit: so,
      diff: xc
    })).optional(),
    added: H(Nt).optional()
  });
  let od, Oe, Si, He, ft, Gi, rd, ad, cd, dd, ud, ld, gd;
  nd = (t, e) => {
    var _a3;
    const i = (_a3 = t.types) == null ? void 0 : _a3.find((n) => n.guid === e);
    if (!i) throw new Error(`Type ${e} not found in kit ${t.name}`);
    return i;
  };
  Tt = (t, e) => {
    var _a3;
    const i = (_a3 = t.designs) == null ? void 0 : _a3.find((n) => n.guid === e);
    if (!i) throw new Error(`Design ${e} not found in kit ${t.name}`);
    return i;
  };
  gt = (t, e) => {
    let i = "^";
    for (const n of e) n === "*" ? i += ".*" : n === "?" ? i += "." : i += n.replace(/[-/\\^$+.()|[\]{}]/g, "\\$&");
    return i += "$", new RegExp(i, "i").test(t);
  };
  Ue = (t, e) => {
    if (!e) return true;
    const { include: i, exclude: n } = e;
    return !(i && i.length > 0 && !i.some((o) => gt(t, o)) || n && n.length > 0 && n.some((o) => gt(t, o)));
  };
  od = (t, e, i) => {
    var _a3, _b, _c2, _d2;
    const n = Tt(t, e), o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set([
      e
    ]);
    for (const I of n.pieces ?? []) ((_a3 = I.type) == null ? void 0 : _a3.guid) && o.add(I.type.guid), ((_b = I.design) == null ? void 0 : _b.guid) && r.add(I.design.guid);
    const l = new Map((t.types ?? []).map((I) => [
      I.guid,
      I
    ])), p = (I) => {
      var _a4;
      const te = l.get(I);
      !((_a4 = te == null ? void 0 : te.parent) == null ? void 0 : _a4.guid) || o.has(te.parent.guid) || (o.add(te.parent.guid), p(te.parent.guid));
    };
    for (const I of [
      ...o
    ]) p(I);
    const v = (i ?? []).flatMap((I) => {
      const te = (t.tags ?? []).find((m) => m.guid === I);
      return te ? [
        te.guid
      ] : (t.tags ?? []).filter((m) => m.name === I).map((m) => m.guid);
    }), _ = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Map(), R = (I) => {
      var _a4;
      for (const te of I ?? []) ((_a4 = te.quality) == null ? void 0 : _a4.guid) && L.add(te.quality.guid);
    };
    for (const I of o) {
      const te = l.get(I);
      if (!te) continue;
      te.folder && j.add(te.folder);
      for (const D of te.connectors ?? []) ((_c2 = D.port) == null ? void 0 : _c2.guid) && _.add(D.port.guid), R(D.props);
      R(te.props);
      for (const D of te.authors ?? []) D.guid && U.add(D.guid);
      for (const D of te.concepts ?? []) D.guid && N.add(D.guid);
      const m = Gn(te.models ?? [], v);
      if (m) {
        $.set(I, m), ((_d2 = m.file) == null ? void 0 : _d2.guid) && w.add(m.file.guid);
        for (const D of m.tags ?? []) D.guid && b.add(D.guid);
      }
    }
    for (const I of n.pieces ?? []) R(I.props);
    for (const I of n.concepts ?? []) I.guid && N.add(I.guid);
    for (const I of n.authors ?? []) I.guid && U.add(I.guid);
    for (const I of [
      ..._
    ]) {
      const te = (t.ports ?? []).find((m) => m.guid === I);
      for (const m of (te == null ? void 0 : te.compatiblePorts) ?? []) m.guid && _.add(m.guid);
    }
    for (const I of v) b.add(I);
    return {
      guid: t.guid,
      name: t.name,
      version: t.version,
      description: t.description,
      icon: t.icon,
      image: t.image,
      preview: t.preview,
      remote: t.remote,
      homepage: t.homepage,
      license: t.license,
      types: (t.types ?? []).filter((I) => o.has(I.guid)).map((I) => ({
        ...I,
        models: $.has(I.guid) ? [
          $.get(I.guid)
        ] : []
      })),
      designs: (t.designs ?? []).filter((I) => r.has(I.guid)),
      ports: (t.ports ?? []).filter((I) => _.has(I.guid)),
      files: (t.files ?? []).filter((I) => w.has(I.guid)),
      tags: (t.tags ?? []).filter((I) => b.has(I.guid)),
      concepts: (t.concepts ?? []).filter((I) => N.has(I.guid)),
      qualities: (t.qualities ?? []).filter((I) => L.has(I.guid)),
      folders: (t.folders ?? []).filter((I) => j.has(I.name)),
      authors: (t.authors ?? []).filter((I) => U.has(I.guid)),
      attributes: t.attributes,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt
    };
  };
  Et = (t, e) => {
    const i = e.designGuid ? od(t, e.designGuid, e.modelTags) : t;
    return e.designs || e.types || e.ports || e.files || e.tags || e.concepts || e.qualities || e.authors || e.folders ? {
      ...i,
      types: (i.types ?? []).filter((o) => Ue(o.name, e.types)),
      designs: (i.designs ?? []).filter((o) => Ue(o.name, e.designs)),
      ports: (i.ports ?? []).filter((o) => Ue(o.name, e.ports)),
      files: (i.files ?? []).filter((o) => Ue(o.name, e.files)),
      tags: (i.tags ?? []).filter((o) => Ue(o.name, e.tags)),
      concepts: (i.concepts ?? []).filter((o) => Ue(o.name, e.concepts)),
      qualities: (i.qualities ?? []).filter((o) => Ue(o.name, e.qualities)),
      authors: (i.authors ?? []).filter((o) => Ue(o.name, e.authors)),
      folders: (i.folders ?? []).filter((o) => Ue(o.name, e.folders))
    } : i;
  };
  xo = (t, e) => {
    var _a3;
    let i = Tt(t, e);
    for (; (_a3 = i.parent) == null ? void 0 : _a3.guid; ) i = Tt(t, i.parent.guid);
    return i;
  };
  iu = (t, e, i) => {
    const n = xo(t, e), o = xo(t, i);
    return n.guid === o.guid;
  };
  ui = (t, e = [], i = []) => ({
    ok: true,
    change: t,
    warnings: e,
    infos: i
  });
  Rn = (t) => ({
    ok: false,
    errors: t
  });
  sd = (t, e) => {
    const i = pt(t, e), n = $t(t, i);
    return {
      forward: i,
      backward: n
    };
  };
  Oe = (t, e, i, n) => {
    t[e].push({
      code: i,
      message: n
    });
  };
  Si = (t, e) => {
    var _a3;
    return ((_a3 = t == null ? void 0 : t[e]) == null ? void 0 : _a3.guid) ?? "";
  };
  He = (t, e, i, n, o, r) => {
    if (!o) return;
    const l = new Map(n.map((U) => [
      U.guid,
      U
    ])), p = new Set((o.removed ?? []).map((U) => U.guid));
    let u = o.removed ? [
      ...o.removed
    ] : void 0, v = o.updated ? [
      ...o.updated
    ] : void 0, _ = o.added ? [
      ...o.added
    ] : void 0;
    const w = new Set(n.filter((U) => !p.has(U.guid)).map((U) => U.guid));
    for (const U of o.removed ?? []) l.has(U.guid) || (Oe(t, "warnings", "kitdiff.remove.missing-target", `${e}: remove references missing ${i} ${U.guid}`), t.heal && u && (u = u.filter((j) => j.guid !== U.guid)));
    const b = /* @__PURE__ */ new Map();
    for (const U of o.added ?? []) b.set(U.guid, U);
    for (const U of o.removed ?? []) {
      const j = l.get(U.guid), $ = b.get(U.guid);
      j && $ && Le(j, $) && (Oe(t, "warnings", "kitdiff.cycle.noop-restore", `${e}: removed and re-added ${i} ${U.guid} are deeply equal (no effective change)`), t.heal && (u && (u = u.filter((R) => R.guid !== U.guid)), _ && (_ = _.filter((R) => R.guid !== U.guid))));
    }
    const N = /* @__PURE__ */ new Set();
    for (const U of o.added ?? []) {
      if (N.has(U.guid) && (Oe(t, "errors", "kitdiff.add.duplicate-in-diff", `${e}: duplicate added ${i} guid ${U.guid}`), t.heal && _)) {
        const j = _.findIndex(($) => $.guid === U.guid);
        _ = _.filter(($, R) => $.guid !== U.guid || R === j);
      }
      N.add(U.guid), w.has(U.guid) && (Oe(t, "errors", "kitdiff.add.duplicate-guid", `${e}: cannot add ${i} ${U.guid} that still exists after removes`), t.heal && _ && (_ = _.filter((j) => j.guid !== U.guid)));
    }
    for (const U of o.updated ?? []) {
      const j = Si(U, i), $ = `${e}.${i}[${j}]`;
      if (!j) {
        Oe(t, "errors", "kitdiff.update.bad-id", `${$}: missing ${i} id`), t.heal && v && (v = v.filter((I) => Si(I, i) !== j));
        continue;
      }
      if (!w.has(j)) {
        Oe(t, "errors", "kitdiff.update.missing-target", `${$}: update targets ${i} not present after removes`), t.heal && v && (v = v.filter((I) => Si(I, i) !== j));
        continue;
      }
      const R = l.get(j);
      if (!R) {
        Oe(t, "errors", "kitdiff.update.missing-base", `${$}: ${i} not found in base kit`), t.heal && v && (v = v.filter((I) => Si(I, i) !== j));
        continue;
      }
      r(R, U.diff, $);
    }
    if (!t.heal) return o;
    const L = {};
    return u && u.length > 0 && (L.removed = u), v && v.length > 0 && (L.updated = v), _ && _.length > 0 && (L.added = _), Object.keys(L).length > 0 ? L : void 0;
  };
  ft = (t, e, i, n) => {
    He(t, e, "attribute", i, n, (o, r, l) => {
    });
  };
  Gi = (t, e, i, n, o) => {
    He(t, e, "prop", i, o, (r, l, p) => {
      var _a3, _b;
      const u = ((_a3 = l.quality) == null ? void 0 : _a3.guid) ?? ((_b = r.quality) == null ? void 0 : _b.guid);
      u && !n.has(u) && Oe(t, "errors", "kitdiff.ref.quality-missing", `${p}: quality ${u} not in kit`), l.attributes && ft(t, `${p}.attributes`, r.attributes ?? [], l.attributes);
    });
  };
  rd = (t, e, i, n, o) => {
    He(t, e, "model", i, o, (r, l, p) => {
      var _a3, _b;
      const u = ((_a3 = l.file) == null ? void 0 : _a3.guid) ?? ((_b = r.file) == null ? void 0 : _b.guid);
      u && !n.has(u) && Oe(t, "errors", "kitdiff.ref.file-missing", `${p}: model file ${u} not in kit`), l.attributes && ft(t, `${p}.attributes`, r.attributes ?? [], l.attributes);
    });
  };
  ad = (t, e, i, n, o, r) => {
    He(t, e, "connector", i, r, (l, p, u) => {
      var _a3, _b;
      const v = ((_a3 = p.port) == null ? void 0 : _a3.guid) ?? ((_b = l.port) == null ? void 0 : _b.guid);
      v && !n.has(v) && Oe(t, "errors", "kitdiff.ref.port-missing", `${u}: connector port ${v} not in kit`), p.props && Gi(t, `${u}.props`, l.props ?? [], o, p.props), p.attributes && ft(t, `${u}.attributes`, l.attributes ?? [], p.attributes);
    });
  };
  cd = (t, e, i, n, o) => {
    var _a3;
    if (((_a3 = n.parent) == null ? void 0 : _a3.guid) && (o.typeGuids.has(n.parent.guid) || Oe(t, "errors", "kitdiff.ref.type-parent-missing", `${e}: parent type ${n.parent.guid} not in kit`), n.parent.guid === i.guid && Oe(t, "errors", "kitdiff.ref.type-parent-self", `${e}: type cannot be its own parent`)), n.models && rd(t, `${e}.models`, i.models ?? [], o.fileGuids, n.models), n.connectors && ad(t, `${e}.connectors`, i.connectors ?? [], o.portGuids, o.qualityGuids, n.connectors), n.props && Gi(t, `${e}.props`, i.props ?? [], o.qualityGuids, n.props), n.attributes && ft(t, `${e}.attributes`, i.attributes ?? [], n.attributes), n.concepts) for (const r of n.concepts ?? []) (r == null ? void 0 : r.guid) && !o.conceptGuids.has(r.guid) && Oe(t, "errors", "kitdiff.ref.concept-missing", `${e}: concept ${r.guid} not in kit`);
    if (n.authors) for (const r of n.authors ?? []) (r == null ? void 0 : r.guid) && !o.authorGuids.has(r.guid) && Oe(t, "errors", "kitdiff.ref.author-missing", `${e}: author ${r.guid} not in kit`);
  };
  dd = (t, e, i, n) => {
    He(t, e, "benchmark", i, n, (o, r, l) => {
      r.attributes && ft(t, `${l}.attributes`, o.attributes ?? [], r.attributes);
    });
  };
  ud = (t, e, i, n) => {
    n.benchmarks && dd(t, `${e}.benchmarks`, i.benchmarks ?? [], n.benchmarks), n.attributes && ft(t, `${e}.attributes`, i.attributes ?? [], n.attributes);
  };
  ld = (t, e) => e ? Ze("piece", t.pieces ?? [], e, zn) : t.pieces ?? [];
  gd = (t, e, i, n, o, r) => {
    var _a3, _b, _c2, _d2, _e;
    if (((_a3 = o.parent) == null ? void 0 : _a3.guid) && (r.designGuids.has(o.parent.guid) || Oe(t, "errors", "kitdiff.ref.design-parent-missing", `${i}: parent design ${o.parent.guid} not in kit`), o.parent.guid === n.guid && Oe(t, "errors", "kitdiff.ref.design-parent-self", `${i}: design cannot be its own parent`)), o.concepts) for (const w of o.concepts ?? []) (w == null ? void 0 : w.guid) && !r.conceptGuids.has(w.guid) && Oe(t, "errors", "kitdiff.ref.concept-missing", `${i}: concept ${w.guid} not in kit`);
    if (o.authors !== void 0) {
      const w = o.authors;
      if (Array.isArray(w)) for (const b of w) (b == null ? void 0 : b.guid) && !r.authorGuids.has(b.guid) && Oe(t, "errors", "kitdiff.ref.author-missing", `${i}: author ${b.guid} not in kit`);
      else w !== null && typeof w == "object" && He(t, `${i}.authors`, "author", e.authors ?? [], w, (b, N, L) => {
        N.attributes && ft(t, `${L}.attributes`, b.attributes ?? [], N.attributes);
      });
    }
    if (o.pieces) {
      He(t, `${i}.pieces`, "piece", n.pieces ?? [], o.pieces, (w, b, N) => {
        b.attributes && ft(t, `${N}.attributes`, w.attributes ?? [], b.attributes), b.props && Gi(t, `${N}.props`, w.props ?? [], r.qualityGuids, b.props);
      });
      for (const w of o.pieces.added ?? []) {
        const b = (_b = w.type) == null ? void 0 : _b.guid;
        b && !r.typeGuids.has(b) && Oe(t, "errors", "kitdiff.ref.piece-type-missing", `${i}.pieces.added: type ${b} not in kit`);
        const N = (_c2 = w.design) == null ? void 0 : _c2.guid;
        N && !r.designGuids.has(N) && Oe(t, "errors", "kitdiff.ref.piece-design-missing", `${i}.pieces.added: subdesign ${N} not in kit`);
      }
    }
    const l = ld(n, o.pieces), p = new Set(l.map((w) => w.guid));
    if (o.connections) {
      He(t, `${i}.connections`, "connection", n.connections ?? [], o.connections, (b, N, L) => {
        N.attributes && ft(t, `${L}.attributes`, b.attributes ?? [], N.attributes);
      });
      const w = (b, N, L) => {
        var _a4;
        p.has(b.piece.guid) || Oe(t, "errors", "kitdiff.ref.connection-piece-missing", `${L}: ${N} piece ${b.piece.guid} not in design after piece diff`), ((_a4 = b.designPiece) == null ? void 0 : _a4.guid) && !p.has(b.designPiece.guid) && Oe(t, "errors", "kitdiff.ref.connection-designpiece-missing", `${L}: ${N} designPiece ${b.designPiece.guid} not in design after piece diff`);
      };
      for (const b of o.connections.added ?? []) {
        const N = `${i}.connections.added[${b.guid}]`;
        w(b.connected, "connected", N), w(b.connecting, "connecting", N);
      }
      for (const b of o.connections.updated ?? []) {
        const N = (_d2 = n.connections) == null ? void 0 : _d2.find((j) => j.guid === b.connection.guid), L = N ? Kn(N, b.diff) : void 0, U = `${i}.connections.updated[${b.connection.guid}]`;
        L && (w(L.connected, "connected", U), w(L.connecting, "connecting", U));
      }
    }
    o.stats && He(t, `${i}.stats`, "stat", n.stats ?? [], o.stats, (w, b, N) => {
      var _a4, _b2;
      const L = ((_a4 = b.quality) == null ? void 0 : _a4.guid) ?? ((_b2 = w.quality) == null ? void 0 : _b2.guid);
      L && !r.qualityGuids.has(L) && Oe(t, "errors", "kitdiff.ref.quality-missing", `${N}: stat quality ${L} not in kit`);
    }), o.props && Gi(t, `${i}.props`, n.props ?? [], r.qualityGuids, o.props);
    let u = n.layers ?? [];
    o.layers && (He(t, `${i}.layers`, "layer", n.layers ?? [], o.layers, (w, b, N) => {
      b.attributes && ft(t, `${N}.attributes`, w.attributes ?? [], b.attributes);
    }), u = Ze("layer", n.layers ?? [], o.layers, os));
    const v = new Set(u.map((w) => w.guid)), _ = o.activeLayer ?? n.activeLayer;
    if ((_ == null ? void 0 : _.guid) && !v.has(_.guid) && Oe(t, "errors", "kitdiff.ref.active-layer-missing", `${i}: activeLayer ${_.guid} not in layers after diff`), o.groups) {
      He(t, `${i}.groups`, "group", n.groups ?? [], o.groups, (b, N, L) => {
        N.attributes && ft(t, `${L}.attributes`, b.attributes ?? [], N.attributes);
      });
      const w = (b, N) => {
        for (const L of b.pieces ?? []) p.has(L.guid) || Oe(t, "errors", "kitdiff.ref.group-piece-missing", `${N}: piece ${L.guid} not in design`);
      };
      for (const b of o.groups.added ?? []) w(b, `${i}.groups.added[${b.guid}]`);
      for (const b of o.groups.updated ?? []) {
        const N = (_e = n.groups) == null ? void 0 : _e.find((L) => L.guid === b.group.guid);
        if (N) {
          const L = rs(N, b.diff);
          w(L, `${i}.groups.updated[${b.group.guid}]`);
        }
      }
    }
    o.attributes && ft(t, `${i}.attributes`, n.attributes ?? [], o.attributes);
  };
  Ao = (t, e, i) => {
    const n = i ? JSON.parse(JSON.stringify(e)) : e, o = {
      errors: [],
      warnings: [],
      heal: i,
      diff: n
    }, r = new Set((t.types ?? []).map((L) => L.guid)), l = new Set((t.designs ?? []).map((L) => L.guid)), p = new Set((t.qualities ?? []).map((L) => L.guid)), u = new Set((t.files ?? []).map((L) => L.guid)), v = new Set((t.ports ?? []).map((L) => L.guid)), _ = new Set((t.concepts ?? []).map((L) => L.guid)), w = new Set((t.authors ?? []).map((L) => L.guid)), b = {
      typeGuids: r,
      designGuids: l,
      qualityGuids: p,
      fileGuids: u,
      portGuids: v,
      conceptGuids: _,
      authorGuids: w
    };
    o.diff.types && (o.diff.types = He(o, "types", "type", t.types ?? [], o.diff.types, (L, U, j) => cd(o, j, L, U, b))), o.diff.designs && (o.diff.designs = He(o, "designs", "design", t.designs ?? [], o.diff.designs, (L, U, j) => gd(o, t, j, L, U, b))), o.diff.tags && (o.diff.tags = He(o, "tags", "tag", t.tags ?? [], o.diff.tags, () => {
    })), o.diff.concepts && (o.diff.concepts = He(o, "concepts", "concept", t.concepts ?? [], o.diff.concepts, () => {
    })), o.diff.ports && (o.diff.ports = He(o, "ports", "port", t.ports ?? [], o.diff.ports, () => {
    })), o.diff.qualities && (o.diff.qualities = He(o, "qualities", "quality", t.qualities ?? [], o.diff.qualities, (L, U, j) => ud(o, j, L, U))), o.diff.files && (o.diff.files = He(o, "files", "file", t.files ?? [], o.diff.files, () => {
    })), o.diff.folders && (o.diff.folders = He(o, "folders", "folder", t.folders ?? [], o.diff.folders, (L, U, j) => {
      var _a3, _b;
      const $ = ((_a3 = U.parent) == null ? void 0 : _a3.guid) ?? ((_b = L.parent) == null ? void 0 : _b.guid);
      $ && !(t.folders ?? []).some((R) => R.guid === $) && Oe(o, "errors", "kitdiff.ref.folder-parent-missing", `${j}: parent folder ${$} not in kit`), U.attributes && ft(o, `${j}.attributes`, L.attributes ?? [], U.attributes);
    })), o.diff.authors && (o.diff.authors = He(o, "authors", "author", t.authors ?? [], o.diff.authors, () => {
    })), o.diff.attributes && ft(o, "kit.attributes", t.attributes ?? [], o.diff.attributes);
    const N = o.errors.length === 0;
    return i ? {
      ok: N,
      errors: o.errors,
      warnings: o.warnings,
      diff: o.diff
    } : {
      ok: N,
      errors: o.errors,
      warnings: o.warnings
    };
  };
  pd = (t) => t.problems.length > 0;
  fd = (t) => {
    const e = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    return Q(t.types).forEach((l) => {
      e.set(l.guid, l), o.set(l.guid, Q(l.connectors)), r.set(l.guid, Q(l.models));
    }), Q(t.designs).forEach((l) => {
      i.set(l.guid, l), Q(l.pieces).forEach((p) => n.set(p.guid, {
        designGuid: l.guid,
        piece: p
      }));
    }), {
      kit: t,
      typesByGuid: e,
      designsByGuid: i,
      piecesByGuid: n,
      connectorsByTypeGuid: o,
      modelsByTypeGuid: r
    };
  };
  Os = [];
  let md, To;
  ni = (t, e = {}) => {
    const i = fd(t);
    return {
      problems: (e.constraints ?? Os).flatMap((o) => o(i))
    };
  };
  St = (t, e, i) => {
    const n = JSON.parse(Kt(t.kit));
    i(n);
    const o = pt(t.kit, n);
    return {
      title: e,
      diff: o
    };
  };
  md = (t, e, i) => {
    const n = (o) => {
      var _a3, _b, _c2, _d2, _e, _f, _g;
      if (!(!o || typeof o != "object")) {
        o.guid === e && (o.guid = i), ((_a3 = o.parent) == null ? void 0 : _a3.guid) === e && (o.parent = ao(i)), ((_b = o.type) == null ? void 0 : _b.guid) === e && (o.type = ao(i)), ((_c2 = o.design) == null ? void 0 : _c2.guid) === e && (o.design = ar(i)), ((_d2 = o.port) == null ? void 0 : _d2.guid) === e && (o.port = ro(i)), ((_e = o.quality) == null ? void 0 : _e.guid) === e && (o.quality = sr(i)), ((_f = o.piece) == null ? void 0 : _f.guid) === e && (o.piece = co(i)), ((_g = o.connector) == null ? void 0 : _g.guid) === e && (o.connector = rr(i)), Array.isArray(o.compatiblePorts) && (o.compatiblePorts = o.compatiblePorts.map((r) => r.guid === e ? ro(i) : r)), Array.isArray(o.pieces) && (o.pieces = o.pieces.map((r) => r.guid === e ? co(i) : r));
        for (const r in o) Array.isArray(o[r]) ? o[r].forEach(n) : typeof o[r] == "object" && n(o[r]);
      }
    };
    n(t);
  };
  hd = (t) => {
    const e = [], i = /* @__PURE__ */ new Map(), n = (o, r) => {
      if (!i.get(r)) {
        i.set(r, o);
        return;
      }
      const p = {
        constraintId: "guid-unique",
        message: `Duplicate GUID "${r}". First occurrence kept.`,
        location: {
          entityKind: o,
          entityGuid: r,
          field: "guid"
        },
        relatedGuids: [
          r
        ],
        fixes: [
          St(t, "Regenerate GUID", (u) => {
            const v = Yt();
            md(u, r, v);
          })
        ]
      };
      e.push(p);
    };
    return n("Kit", t.kit.guid), Q(t.kit.types).forEach((o) => n("Type", o.guid)), Q(t.kit.designs).forEach((o) => {
      n("Design", o.guid), Q(o.pieces).forEach((r) => n("Piece", r.guid)), Q(o.connections).forEach((r) => n("Connection", r.guid)), Q(o.stats).forEach((r) => n("Stat", r.guid));
    }), Q(t.kit.qualities).forEach((o) => n("Quality", o.guid)), Q(t.kit.ports).forEach((o) => n("Port", o.guid)), Q(t.kit.files).forEach((o) => n("File", o.guid)), Q(t.kit.folders).forEach((o) => n("Folder", o.guid)), e;
  };
  yd = (t) => {
    const e = [], i = /* @__PURE__ */ new Map();
    Q(t.kit.types).forEach((n) => {
      var _a3;
      const o = (_a3 = n.parent) == null ? void 0 : _a3.guid;
      i.has(o) || i.set(o, []), i.get(o).push(n);
    });
    for (const [n, o] of i) {
      const r = /* @__PURE__ */ new Map();
      o.forEach((l) => {
        const p = l.name ?? "";
        r.has(p) || r.set(p, []), r.get(p).push(l);
      });
      for (const [l, p] of r) {
        if (p.length <= 1) continue;
        const [u, ...v] = p, _ = o.map((w) => w.name ?? "");
        v.forEach((w) => {
          const b = St(t, `Rename "${l}"`, (N) => {
            const L = Q(N.types).find((j) => j.guid === w.guid);
            if (!L) return;
            const U = kt(l, _);
            L.name = U;
          });
          e.push({
            constraintId: "type-name-unique",
            message: `Duplicate type name "${l}" among siblings.`,
            location: {
              entityKind: "Type",
              entityGuid: w.guid,
              field: "name"
            },
            relatedGuids: p.map((N) => N.guid),
            fixes: [
              b
            ]
          });
        });
      }
    }
    return e;
  };
  vd = (t) => {
    const e = [], i = /* @__PURE__ */ new Map();
    Q(t.kit.designs).forEach((n) => {
      var _a3;
      const o = (_a3 = n.parent) == null ? void 0 : _a3.guid;
      i.has(o) || i.set(o, []), i.get(o).push(n);
    });
    for (const [n, o] of i) {
      const r = /* @__PURE__ */ new Map();
      o.forEach((l) => {
        const p = l.name ?? "";
        r.has(p) || r.set(p, []), r.get(p).push(l);
      });
      for (const [l, p] of r) {
        if (p.length <= 1) continue;
        const [u, ...v] = p, _ = o.map((w) => w.name ?? "");
        v.forEach((w) => {
          const b = St(t, `Rename "${l}"`, (N) => {
            const L = Q(N.designs).find((j) => j.guid === w.guid);
            if (!L) return;
            const U = kt(l, _);
            L.name = U;
          });
          e.push({
            constraintId: "design-name-unique",
            message: `Duplicate design name "${l}" among siblings.`,
            location: {
              entityKind: "Design",
              entityGuid: w.guid,
              field: "name"
            },
            relatedGuids: p.map((N) => N.guid),
            fixes: [
              b
            ]
          });
        });
      }
    }
    return e;
  };
  wd = (t) => {
    const e = [];
    return Q(t.kit.designs).forEach((i) => {
      const n = Q(i.pieces);
      if (n.length === 0) return;
      const o = /* @__PURE__ */ new Map();
      n.forEach((r) => {
        const l = r.name ?? "";
        o.has(l) || o.set(l, []), o.get(l).push(r);
      });
      for (const [r, l] of o) {
        if (l.length <= 1) continue;
        const [p, ...u] = l, v = n.map((_) => _.name ?? "");
        u.forEach((_) => {
          const w = St(t, `Rename piece "${r}"`, (b) => {
            const N = Q(b.designs).find((j) => j.guid === i.guid);
            if (!N) return;
            const U = Q(N.pieces).find((j) => j.guid === _.guid);
            U && (U.name = kt(r, v));
          });
          e.push({
            constraintId: "piece-name-unique",
            message: `Duplicate piece name "${r}" inside design "${i.name}".`,
            location: {
              entityKind: "Piece",
              entityGuid: _.guid,
              field: "name"
            },
            relatedGuids: l.map((b) => b.guid),
            fixes: [
              w
            ]
          });
        });
      }
    }), e;
  };
  Sd = (t) => {
    const e = [], i = Q(t.kit.qualities), n = /* @__PURE__ */ new Map();
    i.forEach((o) => {
      const r = o.name ?? "";
      n.has(r) || n.set(r, []), n.get(r).push(o);
    });
    for (const [o, r] of n) {
      if (r.length <= 1) continue;
      const [l, ...p] = r, u = i.map((v) => v.name ?? "");
      p.forEach((v) => {
        const _ = St(t, `Rename quality "${o}"`, (w) => {
          const b = Q(w.qualities).find((N) => N.guid === v.guid);
          b && (b.name = kt(o, u));
        });
        e.push({
          constraintId: "quality-name-unique",
          message: `Duplicate quality name "${o}".`,
          location: {
            entityKind: "Quality",
            entityGuid: v.guid,
            field: "name"
          },
          relatedGuids: r.map((w) => w.guid),
          fixes: [
            _
          ]
        });
      });
    }
    return e;
  };
  Ed = (t) => {
    const e = [], i = Q(t.kit.ports), n = /* @__PURE__ */ new Map();
    i.forEach((o) => {
      const r = o.name ?? "";
      n.has(r) || n.set(r, []), n.get(r).push(o);
    });
    for (const [o, r] of n) {
      if (r.length <= 1) continue;
      const [l, ...p] = r, u = i.map((v) => v.name ?? "");
      p.forEach((v) => {
        const _ = St(t, `Rename port "${o}"`, (w) => {
          const b = Q(w.ports).find((N) => N.guid === v.guid);
          b && (b.name = kt(o, u));
        });
        e.push({
          constraintId: "port-name-unique",
          message: `Duplicate port name "${o}".`,
          location: {
            entityKind: "Port",
            entityGuid: v.guid,
            field: "name"
          },
          relatedGuids: r.map((w) => w.guid),
          fixes: [
            _
          ]
        });
      });
    }
    return e;
  };
  _d = (t) => {
    const e = [], i = Q(t.kit.files), n = /* @__PURE__ */ new Map();
    i.forEach((o) => {
      const r = o.name ?? "";
      n.has(r) || n.set(r, []), n.get(r).push(o);
    });
    for (const [o, r] of n) {
      if (r.length <= 1) continue;
      const [l, ...p] = r, u = i.map((v) => v.name ?? "");
      p.forEach((v) => {
        const _ = St(t, `Rename file "${o}"`, (w) => {
          const b = Q(w.files).find((N) => N.guid === v.guid);
          b && (b.name = kt(o, u));
        });
        e.push({
          constraintId: "file-name-unique",
          message: `Duplicate file name "${o}".`,
          location: {
            entityKind: "File",
            entityGuid: v.guid,
            field: "name"
          },
          relatedGuids: r.map((w) => w.guid),
          fixes: [
            _
          ]
        });
      });
    }
    return e;
  };
  xd = (t) => {
    const e = [], i = /* @__PURE__ */ new Map();
    Q(t.kit.folders).forEach((o) => {
      var _a3;
      const r = (_a3 = o.parent) == null ? void 0 : _a3.guid;
      i.has(r) || i.set(r, []), i.get(r).push(o);
    });
    for (const [o, r] of i) {
      const l = /* @__PURE__ */ new Map();
      r.forEach((p) => {
        const u = p.name ?? "";
        l.has(u) || l.set(u, []), l.get(u).push(p);
      });
      for (const [p, u] of l) {
        if (u.length <= 1) continue;
        const [v, ..._] = u, w = r.map((b) => b.name ?? "");
        _.forEach((b) => {
          const N = St(t, `Rename folder "${p}"`, (L) => {
            const U = Q(L.folders).find((j) => j.guid === b.guid);
            U && (U.name = kt(p, w));
          });
          e.push({
            constraintId: "folder-name-unique",
            message: `Duplicate folder name "${p}" among siblings.`,
            location: {
              entityKind: "Folder",
              entityGuid: b.guid,
              field: "name"
            },
            relatedGuids: u.map((L) => L.guid),
            fixes: [
              N
            ]
          });
        });
      }
    }
    return e;
  };
  Ad = (t) => {
    const e = [];
    for (const [i, n] of t.connectorsByTypeGuid) {
      if (n.length === 0) continue;
      const o = /* @__PURE__ */ new Map();
      n.forEach((r) => {
        const l = r.name ?? "";
        o.has(l) || o.set(l, []), o.get(l).push(r);
      });
      for (const [r, l] of o) {
        if (l.length <= 1) continue;
        const [p, ...u] = l, v = n.map((w) => w.name ?? ""), _ = t.typesByGuid.get(i);
        u.forEach((w) => {
          const b = St(t, `Rename connector "${r}"`, (N) => {
            const L = Q(N.types).find(($) => $.guid === i);
            if (!L) return;
            const j = Q(L.connectors).find(($) => $.guid === w.guid);
            j && (j.name = kt(r, v));
          });
          e.push({
            constraintId: "connector-name-unique",
            message: `Duplicate connector name "${r}" inside type "${_ == null ? void 0 : _.name}".`,
            location: {
              entityKind: "Connector",
              entityGuid: w.guid,
              field: "name"
            },
            relatedGuids: l.map((N) => N.guid),
            fixes: [
              b
            ]
          });
        });
      }
    }
    return e;
  };
  Td = (t) => {
    const e = [];
    for (const [i, n] of t.modelsByTypeGuid) {
      if (n.length === 0) continue;
      const o = /* @__PURE__ */ new Map();
      n.forEach((r) => {
        const l = r.name ?? "";
        o.has(l) || o.set(l, []), o.get(l).push(r);
      });
      for (const [r, l] of o) {
        if (l.length <= 1) continue;
        const [p, ...u] = l, v = n.map((w) => w.name ?? ""), _ = t.typesByGuid.get(i);
        u.forEach((w) => {
          const b = St(t, `Rename model "${r}"`, (N) => {
            const L = Q(N.types).find(($) => $.guid === i);
            if (!L) return;
            const j = Q(L.models).find(($) => $.guid === w.guid);
            j && (j.name = kt(r, v));
          });
          e.push({
            constraintId: "model-name-unique",
            message: `Duplicate model name "${r}" inside type "${_ == null ? void 0 : _.name}".`,
            location: {
              entityKind: "Model",
              entityGuid: w.guid,
              field: "name"
            },
            relatedGuids: l.map((N) => N.guid),
            fixes: [
              b
            ]
          });
        });
      }
    }
    return e;
  };
  kd = (t) => {
    const e = [];
    return Q(t.kit.designs).forEach((i) => {
      const n = Q(i.layers);
      if (n.length === 0) return;
      const o = /* @__PURE__ */ new Map();
      n.forEach((r) => {
        const l = r.path ?? "";
        o.has(l) || o.set(l, []), o.get(l).push(r);
      });
      for (const [r, l] of o) {
        if (l.length <= 1) continue;
        const [p, ...u] = l, v = n.map((_) => _.path ?? "");
        u.forEach((_) => {
          const w = St(t, `Rename layer "${r}"`, (b) => {
            const N = Q(b.designs).find((j) => j.guid === i.guid);
            if (!N) return;
            const U = Q(N.layers).find((j) => j.path === _.path);
            U && (U.path = kt(r, v));
          });
          e.push({
            constraintId: "layer-path-unique",
            message: `Duplicate layer path "${r}" inside design "${i.name}".`,
            location: {
              entityKind: "Layer",
              entityGuid: _.guid,
              field: "path"
            },
            fixes: [
              w
            ]
          });
        });
      }
    }), e;
  };
  bd = (t) => {
    const e = [];
    return Q(t.kit.designs).forEach((i) => {
      Q(i.pieces).forEach((o) => {
        var _a3;
        if ((_a3 = o.design) == null ? void 0 : _a3.guid) try {
          const r = t.designsByGuid.get(o.design.guid);
          if (!r) return;
          const l = To(t, i.guid), p = To(t, o.design.guid);
          if (l === p) {
            const u = St(t, `Remove design piece "${o.name || o.guid}"`, (v) => {
              const _ = Q(v.designs).find((w) => w.guid === i.guid);
              _ && (_.pieces = Q(_.pieces).filter((w) => w.guid !== o.guid), _.connections = Q(_.connections).filter((w) => w.connected.piece.guid !== o.guid && w.connecting.piece.guid !== o.guid));
            });
            e.push({
              constraintId: "design-piece-same-family",
              message: `Design piece "${o.name || o.guid}" references design "${r.name}" which is in the same design family as container design "${i.name}". A design cannot contain design pieces from the same family.`,
              location: {
                entityKind: "Piece",
                entityGuid: o.guid,
                field: "design"
              },
              relatedGuids: [
                o.guid,
                i.guid,
                r.guid
              ],
              fixes: [
                u
              ]
            });
          }
        } catch {
        }
      });
    }), e;
  };
  To = (t, e) => {
    var _a3;
    let i = e, n = 0;
    const o = 1e3;
    for (; n < o; ) {
      const r = t.designsByGuid.get(i);
      if (!r || !((_a3 = r.parent) == null ? void 0 : _a3.guid)) return i;
      i = r.parent.guid, n++;
    }
    return i;
  };
  Os = [
    hd,
    yd,
    vd,
    wd,
    Sd,
    Ed,
    _d,
    xd,
    Ad,
    Td,
    kd,
    bd
  ];
  let Cd;
  ko = (t) => ({
    problems: t.problems.map((e) => {
      var _a3, _b;
      return {
        constraintId: e.constraintId,
        message: e.message,
        entityKind: ((_a3 = e.location) == null ? void 0 : _a3.entityKind) ?? e.entityKind,
        entityGuid: ((_b = e.location) == null ? void 0 : _b.entityGuid) ?? e.entityGuid ?? "",
        fixes: e.fixes.map((i) => ({
          title: i.title,
          diff: i.diff
        }))
      };
    })
  });
  Cd = (t) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t);
  Bd = (t, e) => {
    const i = (n) => {
      if (n == null) return n;
      if (typeof n == "string" && Cd(n)) return "<GUID>";
      if (Array.isArray(n)) return n.map(i);
      if (typeof n == "object") {
        const o = {};
        for (const [r, l] of Object.entries(n)) o[r] = i(l);
        return o;
      }
      return n;
    };
    return JSON.stringify(i(t)) === JSON.stringify(i(e));
  };
  Rd = (t, e) => {
    const i = ko(t), n = ko(e);
    if (i.problems.length !== n.problems.length) return false;
    const o = (p) => [
      ...p
    ].sort((u, v) => {
      const _ = u.constraintId.localeCompare(v.constraintId);
      return _ !== 0 ? _ : u.entityGuid.localeCompare(v.entityGuid);
    }), r = o(i.problems), l = o(n.problems);
    return r.every((p, u) => {
      const v = l[u];
      return p.constraintId !== v.constraintId || p.message !== v.message || p.entityKind !== v.entityKind || p.entityGuid !== v.entityGuid || p.fixes.length !== v.fixes.length ? false : p.fixes.every((_, w) => {
        const b = v.fixes[w];
        return _.title === b.title && Bd(_.diff ?? {}, b.diff ?? {});
      });
    });
  };
  let Ei = null;
  let Nd, Ps, bo, cn, Ld, Q, Ds, Pd, Ms, Dd, Md, Fd, No, Id, ti, Ud, Gd;
  Vt = async () => {
    var _a3;
    if (!Ei) {
      const t = (await we(async () => {
        const { default: e } = await import("./sql-wasm-CuhM0oT5.js").then((i) => i.s);
        return {
          default: e
        };
      }, __vite__mapDeps([0,1,2]), import.meta.url)).default;
      try {
        if (typeof process < "u" && ((_a3 = process.versions) == null ? void 0 : _a3.node)) {
          const i = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((u) => u._), [], import.meta.url), n = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((u) => u._), [], import.meta.url), o = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((u) => u._), [], import.meta.url), r = n.dirname(o.fileURLToPath(import.meta.url)), l = [
            n.join(r, "public", "sql-wasm.wasm"),
            n.join(r, "..", "sketchpad", "public", "sql-wasm.wasm")
          ], p = l.find((u) => i.existsSync(u)) ?? l[0];
          Ei = await t({
            locateFile: () => p
          });
        } else Ei = await t({
          locateFile: (i) => new URL(Object.assign({
            "../../node_modules/sql.js/dist/sql-asm-debug.js": Zs,
            "../../node_modules/sql.js/dist/sql-asm-memory-growth.js": Ys,
            "../../node_modules/sql.js/dist/sql-asm.js": Ws,
            "../../node_modules/sql.js/dist/sql-wasm-debug.js": js,
            "../../node_modules/sql.js/dist/sql-wasm-debug.wasm": Js,
            "../../node_modules/sql.js/dist/sql-wasm.js": $s,
            "../../node_modules/sql.js/dist/sql-wasm.wasm": qs,
            "../../node_modules/sql.js/dist/sqljs-all.zip": Vs,
            "../../node_modules/sql.js/dist/sqljs-wasm.zip": Hs,
            "../../node_modules/sql.js/dist/sqljs-worker-wasm.zip": Ks,
            "../../node_modules/sql.js/dist/worker.sql-asm-debug.js": zs,
            "../../node_modules/sql.js/dist/worker.sql-asm.js": Gs,
            "../../node_modules/sql.js/dist/worker.sql-wasm-debug.js": Us,
            "../../node_modules/sql.js/dist/worker.sql-wasm.js": Is
          })[`../../node_modules/sql.js/dist/${i}`], import.meta.url).href
        });
      } catch (e) {
        throw console.error("Failed to initialize sql.js:", e), new Error("Failed to load SQLite database library.");
      }
    }
    return Ei;
  };
  Nd = (t, e) => {
    var _a3;
    const i = (r) => (t.folders || []).find((l) => l.guid === r), n = [];
    let o = i(e);
    for (; o; ) n.unshift(o.name), o = ((_a3 = o.parent) == null ? void 0 : _a3.guid) ? i(o.parent.guid) : void 0;
    return n.join("/");
  };
  Ps = (t, e) => {
    var _a3;
    if ((_a3 = e.folder) == null ? void 0 : _a3.guid) {
      const i = Nd(t, e.folder.guid);
      if (i) return `${i}/${e.name}`;
    }
    return e.name;
  };
  bo = (t) => new TextDecoder().decode(t);
  cn = (t) => t.length >= 4 && t[0] === 80 && t[1] === 75 && t[2] === 3 && t[3] === 4;
  Ld = (t) => {
    const e = {};
    for (const i of t.files || []) {
      if (!i.blob) continue;
      const n = i.blob.startsWith("data:") ? i.blob.slice(i.blob.indexOf(",") + 1) : i.blob, o = atob(n), r = new Uint8Array(o.length);
      for (let l = 0; l < o.length; l++) r[l] = o.charCodeAt(l);
      e[Ps(t, i)] = r;
    }
    return e;
  };
  oi = async (t) => {
    let e;
    if (t instanceof Blob) e = await t.text();
    else if (typeof t == "string") {
      const i = t.trim();
      if (i.startsWith("{")) e = i;
      else {
        const n = await fetch(t);
        if (!n.ok) throw new Error(`Failed to fetch file kit from ${t}: ${n.statusText}`);
        e = await n.text();
      }
    } else typeof Buffer < "u" && t instanceof Buffer ? e = bo(new Uint8Array(t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength))) : e = bo(new Uint8Array(t));
    return {
      kind: "file",
      kit: Ht(e),
      files: {}
    };
  };
  Co = (t) => Kt(t);
  qt = async (t) => {
    var _a3;
    const e = (await we(async () => {
      const { default: u } = await import("./jszip.min-Cd8if0Hs.js").then((v) => v.j);
      return {
        default: u
      };
    }, __vite__mapDeps([3,1,4]), import.meta.url)).default;
    let i;
    if (t instanceof Blob) i = await t.arrayBuffer();
    else if (typeof t == "string") {
      const u = await fetch(t);
      if (!u.ok) throw new Error(`Failed to fetch archive kit from ${t}: ${u.statusText}`);
      i = await u.arrayBuffer();
    } else typeof Buffer < "u" && t instanceof Buffer ? i = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength) : i = t;
    const n = await e.loadAsync(i), o = n.file(".semio/kit.db");
    let r;
    if (o) {
      const u = await o.async("arraybuffer"), v = await Vt(), _ = new v.Database(new Uint8Array(u));
      r = await Ln(_), _.close();
    } else {
      const u = n.file("kit.json");
      if (!u) throw new Error("Invalid kit archive: missing .semio/kit.db or kit.json");
      const v = await u.async("string");
      r = Ht(v);
    }
    const l = {}, p = /* @__PURE__ */ new Map();
    for (const [u, v] of Object.entries(n.files)) !v.dir && !u.startsWith(".semio/") && u !== "kit.json" && p.set(u, v);
    if (r.files) for (const u of r.files) {
      const v = Ps(r, u), _ = p.get(v);
      if (_) {
        const w = await _.async("arraybuffer"), b = new Uint8Array(w);
        l[v] = b;
        let N = "";
        for (let $ = 0; $ < b.length; $++) N += String.fromCharCode(b[$]);
        const L = ((_a3 = u.name.split(".").pop()) == null ? void 0 : _a3.toLowerCase()) || "", j = {
          stl: "model/stl",
          obj: "model/obj",
          glb: "model/gltf-binary",
          gltf: "model/gltf+json",
          "3dm": "model/vnd.3dm",
          png: "image/png",
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          svg: "image/svg+xml",
          pdf: "application/pdf",
          zip: "application/zip",
          json: "application/json",
          csv: "text/csv",
          txt: "text/plain"
        }[L] || "application/octet-stream";
        u.blob = `data:${j};base64,${btoa(N)}`;
      }
    }
    return {
      kind: "archive",
      kit: r,
      files: l
    };
  };
  Nn = async (t) => {
    var _a3;
    const e = await fetch(t);
    if (!e.ok) throw new Error(`Failed to fetch remote kit from ${t}: ${e.statusText}`);
    const i = ((_a3 = e.headers.get("content-type")) == null ? void 0 : _a3.toLowerCase()) || "";
    if (t.endsWith(".zip") || i.includes("zip") || i.includes("octet-stream")) return {
      ...await qt(await e.blob()),
      kind: "remote"
    };
    const n = await e.text();
    return n.trim().startsWith("{") ? {
      ...await oi(n),
      kind: "remote"
    } : {
      ...await qt(new Blob([
        n
      ])),
      kind: "remote"
    };
  };
  Bo = (t, e) => ht(t, e);
  Ti = async (t) => {
    if (typeof t == "string") {
      const e = t.trim();
      if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("blob:")) return Nn(t);
      if (e.startsWith("{")) return oi(t);
    }
    if (t instanceof Blob) {
      const e = new Uint8Array(await t.slice(0, 4).arrayBuffer());
      return cn(e) ? qt(t) : oi(t);
    }
    if (typeof Buffer < "u" && t instanceof Buffer) {
      const e = new Uint8Array(t.buffer.slice(t.byteOffset, t.byteOffset + Math.min(t.byteLength, 4)));
      if (cn(e)) return qt(t);
    } else if (t instanceof ArrayBuffer) {
      const e = new Uint8Array(t.slice(0, 4));
      if (cn(e)) return qt(t);
    }
    try {
      return await qt(t);
    } catch (e) {
      if (typeof t != "string") throw e;
      return oi(t);
    }
  };
  ki = async (t) => {
    const e = (await we(async () => {
      const { default: l } = await import("./jszip.min-Cd8if0Hs.js").then((p) => p.j);
      return {
        default: l
      };
    }, __vite__mapDeps([3,1,4]), import.meta.url)).default, i = await Vt(), n = new i.Database();
    await bi(t, n);
    const o = n.export();
    n.close();
    const r = new e();
    r.file(".semio/kit.db", o);
    for (const [l, p] of Object.entries(Ld(t))) r.file(l, p);
    return await r.generateAsync({
      type: "blob"
    });
  };
  ei = (t, e) => {
    const i = (m) => m ? Array.isArray(m) ? m : [
      m
    ] : [], n = (m) => m === null || m === "" || m === void 0 ? void 0 : m, o = (m) => m ? true : void 0, r = (m, D) => m === void 0 && D === void 0 ? true : m === void 0 || D === void 0 ? false : Math.abs(m - D) < Ci, l = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.key !== A.key || n(x.value) !== n(A.value) || n(x.definition) !== n(A.definition)) return false;
      }
      return true;
    }, p = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.quality.guid !== A.quality.guid || x.value !== A.value || n(x.unit) !== n(A.unit) || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, u = (m, D) => {
      var _a3, _b;
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || n(x.name) !== n(A.name) || !r(x.point.x, A.point.x) || !r(x.point.y, A.point.y) || !r(x.point.z, A.point.z) || !r(x.direction.x, A.direction.x) || !r(x.direction.y, A.direction.y) || !r(x.direction.z, A.direction.z) || !r(x.t, A.t) || o(x.mandatory) !== o(A.mandatory) || n((_a3 = x.port) == null ? void 0 : _a3.guid) !== n((_b = A.port) == null ? void 0 : _b.guid) || !p(x.props, A.props) || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, v = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((ee) => ee.guid === x.guid);
        if (!A || n(x.name) !== n(A.name) || x.file.guid !== A.file.guid) return false;
        const C = i(x.tags).map((ee) => typeof ee == "object" ? ee.guid : ee), G = i(A.tags).map((ee) => typeof ee == "object" ? ee.guid : ee);
        if (C.length !== G.length || !C.every((ee) => G.includes(ee)) || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, _ = (m, D) => {
      var _a3, _b, _c2, _d2;
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid !== x.guid ? false : !C.parent && !x.parent ? true : !C.parent || !x.parent ? false : cr(C.parent, x.parent));
        if (!A || x.name !== A.name || n(x.description) !== n(A.description) || n(x.icon) !== n(A.icon) || n(x.image) !== n(A.image) || n(x.folder) !== n(A.folder) || n(x.unit) !== n(A.unit) || x.stock !== A.stock || o(x.isAbstract) !== o(A.isAbstract) || o(x.virtual) !== o(A.virtual) || n((_a3 = x.location) == null ? void 0 : _a3.guid) !== n((_b = A.location) == null ? void 0 : _b.guid) || !yt(i(x.concepts), i(A.concepts)) || !yt(i((_c2 = x.authors) == null ? void 0 : _c2.map((C) => C.guid)), i((_d2 = A.authors) == null ? void 0 : _d2.map((C) => C.guid))) || !p(x.props, A.props) || !v(x.models, A.models) || !u(x.connectors, A.connectors) || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, w = (m, D) => {
      var _a3, _b, _c2, _d2;
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || n(x.name) !== n(A.name) || ((_a3 = x.type) == null ? void 0 : _a3.guid) !== ((_b = A.type) == null ? void 0 : _b.guid) || ((_c2 = x.design) == null ? void 0 : _c2.guid) !== ((_d2 = A.design) == null ? void 0 : _d2.guid)) return false;
        if (x.plane && A.plane) {
          if (!r(x.plane.origin.x, A.plane.origin.x) || !r(x.plane.origin.y, A.plane.origin.y) || !r(x.plane.origin.z, A.plane.origin.z) || !r(x.plane.xAxis.x, A.plane.xAxis.x) || !r(x.plane.xAxis.y, A.plane.xAxis.y) || !r(x.plane.xAxis.z, A.plane.xAxis.z) || !r(x.plane.yAxis.x, A.plane.yAxis.x) || !r(x.plane.yAxis.y, A.plane.yAxis.y) || !r(x.plane.yAxis.z, A.plane.yAxis.z)) return false;
        } else if (x.plane || A.plane) return false;
        if (x.center && A.center) {
          if (!r(x.center.u, A.center.u) || !r(x.center.v, A.center.v)) return false;
        } else if (x.center || A.center) return false;
        if (!r(x.scale, A.scale)) return false;
        if (x.mirrorPlane && A.mirrorPlane) {
          if (!r(x.mirrorPlane.origin.x, A.mirrorPlane.origin.x) || !r(x.mirrorPlane.origin.y, A.mirrorPlane.origin.y) || !r(x.mirrorPlane.origin.z, A.mirrorPlane.origin.z) || !r(x.mirrorPlane.xAxis.x, A.mirrorPlane.xAxis.x) || !r(x.mirrorPlane.xAxis.y, A.mirrorPlane.xAxis.y) || !r(x.mirrorPlane.xAxis.z, A.mirrorPlane.xAxis.z) || !r(x.mirrorPlane.yAxis.x, A.mirrorPlane.yAxis.x) || !r(x.mirrorPlane.yAxis.y, A.mirrorPlane.yAxis.y) || !r(x.mirrorPlane.yAxis.z, A.mirrorPlane.yAxis.z)) return false;
        } else if (x.mirrorPlane || A.mirrorPlane) return false;
        if (o(x.isHidden) !== o(A.isHidden) || o(x.isLocked) !== o(A.isLocked) || n(x.color) !== n(A.color) || n(x.description) !== n(A.description) || !p(x.props, A.props) || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, b = (m, D) => {
      var _a3, _b, _c2, _d2, _e, _f, _g, _h;
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.connected.piece.guid !== A.connected.piece.guid || n((_a3 = x.connected.designPiece) == null ? void 0 : _a3.guid) !== n((_b = A.connected.designPiece) == null ? void 0 : _b.guid) || n((_c2 = x.connected.connector) == null ? void 0 : _c2.guid) !== n((_d2 = A.connected.connector) == null ? void 0 : _d2.guid) || x.connecting.piece.guid !== A.connecting.piece.guid || n((_e = x.connecting.designPiece) == null ? void 0 : _e.guid) !== n((_f = A.connecting.designPiece) == null ? void 0 : _f.guid) || n((_g = x.connecting.connector) == null ? void 0 : _g.guid) !== n((_h = A.connecting.connector) == null ? void 0 : _h.guid) || !r(x.gap, A.gap) || !r(x.shift, A.shift) || !r(x.rise, A.rise) || !r(x.rotation, A.rotation) || !r(x.turn, A.turn) || !r(x.tilt, A.tilt) || !r(x.u, A.u) || !r(x.v, A.v) || n(x.description) !== n(A.description) || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, N = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid !== x.guid ? false : !C.parent && !x.parent ? true : !C.parent || !x.parent ? false : dr(C.parent, x.parent));
        if (!A || x.name !== A.name || n(x.description) !== n(A.description) || n(x.icon) !== n(A.icon) || n(x.image) !== n(A.image) || !yt(i(x.concepts), i(A.concepts)) || !w(x.pieces, A.pieces) || !b(x.connections, A.connections) || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, L = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.name !== A.name || n(x.description) !== n(A.description) || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, U = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.key !== A.key || x.name !== A.name || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, j = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.name !== A.name) return false;
      }
      return true;
    }, $ = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.name !== A.name || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, R = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.name !== A.name || n(x.email) !== n(A.email) || !l(x.attributes, A.attributes)) return false;
      }
      return true;
    }, I = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.name !== A.name || n(x.description) !== n(A.description) || n(x.icon) !== n(A.icon)) return false;
      }
      return true;
    }, te = (m, D) => {
      const z = i(m), P = i(D);
      if (z.length !== P.length) return false;
      for (const x of z) {
        const A = P.find((C) => C.guid === x.guid);
        if (!A || x.name !== A.name || n(x.description) !== n(A.description) || n(x.icon) !== n(A.icon)) return false;
      }
      return true;
    };
    return !(t.guid !== e.guid || t.name !== e.name || n(t.version) !== n(e.version) || n(t.description) !== n(e.description) || n(t.icon) !== n(e.icon) || n(t.image) !== n(e.image) || n(t.preview) !== n(e.preview) || n(t.remote) !== n(e.remote) || n(t.homepage) !== n(e.homepage) || n(t.license) !== n(e.license) || !I(t.concepts, e.concepts) || !te(t.tags, e.tags) || !_(t.types, e.types) || !N(t.designs, e.designs) || !L(t.ports, e.ports) || !U(t.qualities, e.qualities) || !j(t.files, e.files) || !$(t.folders, e.folders) || !R(t.authors, e.authors) || !l(t.attributes, e.attributes));
  };
  _i = (t, e) => {
    const i = (y) => y ? Array.isArray(y) ? y : [
      y
    ] : [], n = (y) => y === null || y === "" || y === void 0 ? void 0 : y, o = (y) => y ?? 0, r = (y) => y ? true : void 0, l = /* @__PURE__ */ new Set([
      "x",
      "y",
      "z",
      "u",
      "v",
      "gap",
      "shift",
      "rise",
      "rotation",
      "turn",
      "tilt",
      "t"
    ]), p = /* @__PURE__ */ new Set([
      "mandatory",
      "isHidden",
      "isLocked",
      "isAbstract",
      "virtual"
    ]), u = (y) => {
      var _a3, _b, _c2, _d2, _e2, _f, _g, _h, _i2;
      if (!y || typeof y != "object") return;
      const E = y;
      return E.guid ?? ((_a3 = E.type) == null ? void 0 : _a3.guid) ?? ((_b = E.design) == null ? void 0 : _b.guid) ?? ((_c2 = E.piece) == null ? void 0 : _c2.guid) ?? ((_d2 = E.connection) == null ? void 0 : _d2.guid) ?? ((_e2 = E.model) == null ? void 0 : _e2.guid) ?? ((_f = E.port) == null ? void 0 : _f.guid) ?? ((_g = E.connector) == null ? void 0 : _g.guid) ?? ((_h = E.prop) == null ? void 0 : _h.guid) ?? ((_i2 = E.attribute) == null ? void 0 : _i2.guid);
    }, v = (y, E = "") => {
      if (!(y == null || y === "")) {
        if (typeof y == "number") return l.has(E) && y === 0 ? void 0 : y;
        if (typeof y == "boolean") return p.has(E) && y === false ? void 0 : y;
        if (Array.isArray(y)) {
          const ie = y.map((ne) => v(ne, E)).filter((ne) => ne !== void 0).sort((ne, W) => {
            const oe = u(ne), J = u(W);
            return String(oe ?? JSON.stringify(ne)).localeCompare(String(J ?? JSON.stringify(W)));
          });
          return ie.length > 0 ? ie : void 0;
        }
        if (typeof y == "object") {
          const ie = Object.entries(y).map(([ne, W]) => [
            ne,
            v(W, ne)
          ]).filter(([, ne]) => ne !== void 0).sort(([ne], [W]) => ne.localeCompare(W));
          return ie.length > 0 ? Object.fromEntries(ie) : void 0;
        }
        return y;
      }
    };
    if (JSON.stringify(v(t) ?? {}) === JSON.stringify(v(e) ?? {})) return true;
    const _ = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || y.length !== E.length) return false;
      const ie = new Set(y.map((W) => W.guid)), ne = new Set(E.map((W) => W.guid));
      for (const W of ie) if (!ne.has(W)) return false;
      return true;
    }, w = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.attribute.guid === J.attribute.guid);
        if (!Y || !b(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.key !== Y.key || n(J.value) !== n(Y.value) || n(J.definition) !== n(Y.definition)) return false;
      }
      return true;
    }, b = (y, E) => !y && !E ? true : !(!y || !E || n(y.key) !== n(E.key) || n(y.value) !== n(E.value) || n(y.definition) !== n(E.definition)), N = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.prop.guid === J.prop.guid);
        if (!Y || !L(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.quality.guid !== Y.quality.guid || J.value !== Y.value || n(J.unit) !== n(Y.unit)) return false;
      }
      return true;
    }, L = (y, E) => !y && !E ? true : !(!y || !E || n(y.value) !== n(E.value) || n(y.unit) !== n(E.unit) || !w(y.attributes, E.attributes)), U = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.connector.guid === J.connector.guid);
        if (!Y || !j(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || n(J.name) !== n(Y.name) || n(J.description) !== n(Y.description) || o(J.point.x) !== o(Y.point.x) || o(J.point.y) !== o(Y.point.y) || o(J.point.z) !== o(Y.point.z) || o(J.direction.x) !== o(Y.direction.x) || o(J.direction.y) !== o(Y.direction.y) || o(J.direction.z) !== o(Y.direction.z) || o(J.t) !== o(Y.t) || r(J.mandatory) !== r(Y.mandatory)) return false;
      }
      return true;
    }, j = (y, E) => {
      var _a3, _b;
      if (!y && !E) return true;
      if (!y || !E || n(y.name) !== n(E.name) || n(y.description) !== n(E.description)) return false;
      if (y.point && E.point) {
        if (o(y.point.x) !== o(E.point.x) || o(y.point.y) !== o(E.point.y) || o(y.point.z) !== o(E.point.z)) return false;
      } else if (y.point || E.point) return false;
      if (y.direction && E.direction) {
        if (o(y.direction.x) !== o(E.direction.x) || o(y.direction.y) !== o(E.direction.y) || o(y.direction.z) !== o(E.direction.z)) return false;
      } else if (y.direction || E.direction) return false;
      return !(o(y.t) !== o(E.t) || r(y.mandatory) !== r(E.mandatory) || n((_a3 = y.port) == null ? void 0 : _a3.guid) !== n((_b = E.port) == null ? void 0 : _b.guid) || !N(y.props, E.props) || !w(y.attributes, E.attributes));
    }, $ = (y, E) => {
      var _a3, _b;
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.model.guid === J.model.guid);
        if (!Y || !R(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || n(J.name) !== n(Y.name) || n((_a3 = J.file) == null ? void 0 : _a3.guid) !== n((_b = Y.file) == null ? void 0 : _b.guid) || !yt(i(J.tags), i(Y.tags))) return false;
      }
      return true;
    }, R = (y, E) => {
      var _a3, _b;
      if (!y && !E) return true;
      if (!y || !E || n(y.name) !== n(E.name) || n((_a3 = y.file) == null ? void 0 : _a3.guid) !== n((_b = E.file) == null ? void 0 : _b.guid) || n(y.description) !== n(E.description)) return false;
      if (y.tags && E.tags) {
        if (!yt(i(y.tags), i(E.tags))) return false;
      } else if (y.tags || E.tags) return false;
      return !!w(y.attributes, E.attributes);
    }, I = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.type.guid === J.type.guid);
        if (!Y || !te(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.name !== Y.name) return false;
      }
      return true;
    }, te = (y, E) => {
      var _a3, _b;
      if (!y && !E) return true;
      if (!y || !E || n(y.name) !== n(E.name) || n(y.description) !== n(E.description) || n(y.icon) !== n(E.icon) || n(y.image) !== n(E.image) || n(y.folder) !== n(E.folder) || n(y.unit) !== n(E.unit) || n(y.stock) !== n(E.stock) || r(y.isAbstract) !== r(E.isAbstract) || r(y.virtual) !== r(E.virtual) || n((_a3 = y.location) == null ? void 0 : _a3.guid) !== n((_b = E.location) == null ? void 0 : _b.guid)) return false;
      if (y.concepts && E.concepts) {
        if (!yt(i(y.concepts), i(E.concepts))) return false;
      } else if (y.concepts || E.concepts) return false;
      return !(!$(y.models, E.models) || !U(y.connectors, E.connectors) || !N(y.props, E.props) || !w(y.attributes, E.attributes));
    }, m = (y, E) => {
      var _a3, _b, _c2, _d2;
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.piece.guid === J.piece.guid);
        if (!Y || !D(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || n(J.name) !== n(Y.name) || ((_a3 = J.type) == null ? void 0 : _a3.guid) !== ((_b = Y.type) == null ? void 0 : _b.guid) || ((_c2 = J.design) == null ? void 0 : _c2.guid) !== ((_d2 = Y.design) == null ? void 0 : _d2.guid)) return false;
      }
      return true;
    }, D = (y, E) => {
      var _a3, _b, _c2, _d2;
      if (!y && !E) return true;
      if (!y || !E || n(y.name) !== n(E.name) || n((_a3 = y.type) == null ? void 0 : _a3.guid) !== n((_b = E.type) == null ? void 0 : _b.guid) || n((_c2 = y.design) == null ? void 0 : _c2.guid) !== n((_d2 = E.design) == null ? void 0 : _d2.guid)) return false;
      if (y.plane && E.plane) {
        if (y.plane.origin && E.plane.origin) {
          if (o(y.plane.origin.x) !== o(E.plane.origin.x) || o(y.plane.origin.y) !== o(E.plane.origin.y) || o(y.plane.origin.z) !== o(E.plane.origin.z)) return false;
        } else if (y.plane.origin || E.plane.origin) return false;
        if (y.plane.xAxis && E.plane.xAxis) {
          if (o(y.plane.xAxis.x) !== o(E.plane.xAxis.x) || o(y.plane.xAxis.y) !== o(E.plane.xAxis.y) || o(y.plane.xAxis.z) !== o(E.plane.xAxis.z)) return false;
        } else if (y.plane.xAxis || E.plane.xAxis) return false;
        if (y.plane.yAxis && E.plane.yAxis) {
          if (o(y.plane.yAxis.x) !== o(E.plane.yAxis.x) || o(y.plane.yAxis.y) !== o(E.plane.yAxis.y) || o(y.plane.yAxis.z) !== o(E.plane.yAxis.z)) return false;
        } else if (y.plane.yAxis || E.plane.yAxis) return false;
      } else if (y.plane || E.plane) return false;
      return !(n(y.scale) !== n(E.scale) || r(y.isHidden) !== r(E.isHidden) || r(y.isLocked) !== r(E.isLocked) || n(y.color) !== n(E.color) || n(y.description) !== n(E.description) || !N(y.props, E.props) || !w(y.attributes, E.attributes));
    }, z = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.connection.guid === J.connection.guid);
        if (!Y || !P(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.connected.piece.guid !== Y.connected.piece.guid || J.connecting.piece.guid !== Y.connecting.piece.guid) return false;
      }
      return true;
    }, P = (y, E) => !y && !E ? true : !(!y || !E || o(y.gap) !== o(E.gap) || o(y.shift) !== o(E.shift) || o(y.rise) !== o(E.rise) || o(y.rotation) !== o(E.rotation) || o(y.turn) !== o(E.turn) || o(y.tilt) !== o(E.tilt) || o(y.u) !== o(E.u) || o(y.v) !== o(E.v) || n(y.description) !== n(E.description) || !w(y.attributes, E.attributes)), x = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.design.guid === J.design.guid);
        if (!Y || !A(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.name !== Y.name) return false;
      }
      return true;
    }, A = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || n(y.name) !== n(E.name) || n(y.description) !== n(E.description) || n(y.icon) !== n(E.icon) || n(y.image) !== n(E.image)) return false;
      if (y.concepts && E.concepts) {
        if (!yt(i(y.concepts), i(E.concepts))) return false;
      } else if (y.concepts || E.concepts) return false;
      return !(!m(y.pieces, E.pieces) || !z(y.connections, E.connections) || !w(y.attributes, E.attributes));
    }, C = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.port.guid === J.port.guid);
        if (!Y || !G(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.name !== Y.name) return false;
      }
      return true;
    }, G = (y, E) => !y && !E ? true : !(!y || !E || n(y.name) !== n(E.name) || n(y.description) !== n(E.description) || !w(y.attributes, E.attributes)), ee = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.quality.guid === J.quality.guid);
        if (!Y || !ge(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.key !== Y.key || J.name !== Y.name) return false;
      }
      return true;
    }, ge = (y, E) => !y && !E ? true : !(!y || !E || n(y.key) !== n(E.key) || n(y.name) !== n(E.name) || !w(y.attributes, E.attributes)), ue = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.file.guid === J.file.guid);
        if (!Y || !V(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.name !== Y.name) return false;
      }
      return true;
    }, V = (y, E) => !y && !E ? true : !(!y || !E || n(y.name) !== n(E.name)), he = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.folder.guid === J.folder.guid);
        if (!Y || !pe(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.name !== Y.name) return false;
      }
      return true;
    }, pe = (y, E) => !y && !E ? true : !(!y || !E || n(y.name) !== n(E.name) || !w(y.attributes, E.attributes)), ye = (y, E) => {
      if (!y && !E) return true;
      if (!y || !E || !_(y.removed, E.removed)) return false;
      const ie = i(y.updated), ne = i(E.updated);
      if (ie.length !== ne.length) return false;
      for (const J of ie) {
        const Y = ne.find((ae) => ae.author.guid === J.author.guid);
        if (!Y || !_e(J.diff, Y.diff)) return false;
      }
      const W = i(y.added), oe = i(E.added);
      if (W.length !== oe.length) return false;
      for (const J of W) {
        const Y = oe.find((ae) => ae.guid === J.guid);
        if (!Y || J.name !== Y.name) return false;
      }
      return true;
    }, _e = (y, E) => !y && !E ? true : !(!y || !E || n(y.name) !== n(E.name) || n(y.email) !== n(E.email) || !w(y.attributes, E.attributes));
    if (n(t.name) !== n(e.name) || n(t.version) !== n(e.version) || n(t.description) !== n(e.description) || n(t.icon) !== n(e.icon) || n(t.image) !== n(e.image) || n(t.preview) !== n(e.preview) || n(t.remote) !== n(e.remote) || n(t.homepage) !== n(e.homepage) || n(t.license) !== n(e.license)) return false;
    if (t.concepts && e.concepts) {
      if (!yt(i(t.concepts), i(e.concepts))) return false;
    } else if (t.concepts || e.concepts) return false;
    return !(!I(t.types, e.types) || !x(t.designs, e.designs) || !C(t.ports, e.ports) || !ee(t.qualities, e.qualities) || !ue(t.files, e.files) || !he(t.folders, e.folders) || !ye(t.authors, e.authors) || !w(t.attributes, e.attributes));
  };
  Ln = async (t) => {
    const e = /* @__PURE__ */ new Set(), i = t.prepare("SELECT name FROM sqlite_master WHERE type='table'");
    for (; i.step(); ) e.add(i.getAsObject().name);
    i.free();
    const n = (m, D) => {
      const z = t.prepare(m);
      D && z.bind(D);
      const P = [];
      for (; z.step(); ) {
        const x = z.getAsObject();
        P.push(x);
      }
      return z.free(), P;
    }, o = (m, D, z) => e.has(m) ? n(D, z) : [], r = n("SELECT * FROM kit LIMIT 1");
    if (r.length === 0) throw new Error("No kit found in database");
    const l = r[0], p = (m) => m === null || m === "" ? void 0 : m, u = (m) => {
      const D = {
        guid: m.guid,
        key: m.key
      }, z = p(m.value), P = p(m.definition);
      return z !== void 0 && (D.value = z), P !== void 0 && (D.definition = P), D;
    }, v = (m, D) => m.length > 0 ? m.map(D) : void 0, _ = {
      guid: l.guid || l.uri || Yt(),
      name: l.name || "Unnamed Kit",
      version: l.version || "0.0.0",
      description: p(l.description),
      icon: p(l.icon),
      image: p(l.image),
      preview: p(l.preview),
      remote: p(l.remote),
      homepage: p(l.homepage),
      license: p(l.license),
      createdAt: l.created,
      updatedAt: l.updated
    }, w = n("SELECT * FROM type WHERE kit_guid = ?", [
      _.guid
    ]);
    _.types = v(w, (m) => {
      const D = m.guid || String(m.id), z = n("SELECT * FROM model WHERE type_guid = ?", [
        D
      ]), P = n("SELECT * FROM connector WHERE type_guid = ?", [
        D
      ]), x = n("SELECT * FROM attribute WHERE type_guid = ?", [
        D
      ]), A = n("SELECT * FROM type_concept WHERE type_guid = ?", [
        D
      ]), C = n("SELECT * FROM type_author WHERE type_guid = ? ORDER BY rank", [
        D
      ]), G = {
        guid: D,
        name: m.name,
        createdAt: m.created,
        updatedAt: m.updated
      };
      m.is_abstract && (G.isAbstract = true);
      const ee = p(m.folder);
      ee !== void 0 && (G.folder = ee);
      const ge = p(m.description);
      ge !== void 0 && (G.description = ge);
      const ue = p(m.icon);
      ue !== void 0 && (G.icon = ue);
      const V = p(m.image);
      V !== void 0 && (G.image = V), (m.parent_guid || m.parent_id) && (G.parent = {
        guid: m.parent_guid || String(m.parent_id)
      }), m.virtual && (G.virtual = true);
      const he = p(m.unit);
      he !== void 0 && (G.unit = he), m.stock !== null && m.stock !== void 0 && (G.stock = m.stock), m.location_guid && (G.location = {
        guid: m.location_guid
      });
      const pe = v(A, (W) => W.concept);
      pe && (G.concepts = pe);
      const ye = v(C, (W) => ({
        guid: W.author_guid
      }));
      ye && (G.authors = ye);
      const _e = v(z, (W) => {
        const oe = n("SELECT tag_guid FROM model_tag WHERE model_guid = ?", [
          W.guid
        ]), J = n("SELECT * FROM attribute WHERE model_guid = ?", [
          W.guid
        ]);
        return {
          guid: W.guid,
          file: {
            guid: W.file_guid
          },
          name: p(W.name),
          description: p(W.description),
          tags: oe.map((Y) => ({
            guid: Y.tag_guid
          })),
          attributes: v(J, u)
        };
      });
      _e && (G.models = _e);
      const y = v(P, (W) => {
        const oe = n("SELECT * FROM prop WHERE connector_guid = ?", [
          W.guid
        ]), J = n("SELECT * FROM attribute WHERE connector_guid = ?", [
          W.guid
        ]), Y = {
          guid: W.guid,
          point: {
            x: W.point_x,
            y: W.point_y,
            z: W.point_z
          },
          direction: {
            x: W.direction_x,
            y: W.direction_y,
            z: W.direction_z
          },
          t: W.t
        };
        W.name && (Y.name = W.name), W.mandatory && (Y.mandatory = true), W.port_guid && (Y.port = {
          guid: W.port_guid
        }), W.description && (Y.description = W.description);
        const ae = oe.map((Ve) => {
          const tt = n("SELECT * FROM attribute WHERE prop_guid = ?", [
            Ve.guid
          ]);
          return Ve.quality_guid ? {
            guid: Ve.guid,
            value: String(Ve.value),
            unit: p(Ve.unit),
            quality: {
              guid: Ve.quality_guid
            },
            attributes: v(tt, u)
          } : null;
        }).filter((Ve) => Ve !== null);
        ae && ae.length > 0 && (Y.props = ae);
        const ut = v(J, u);
        return ut && (Y.attributes = ut), Y;
      });
      y && (G.connectors = y);
      const E = o("type_prop", "SELECT prop.* FROM prop JOIN type_prop ON prop.guid = type_prop.prop_guid WHERE type_prop.type_guid = ?", [
        D
      ]), ie = (() => {
        const W = E.map((oe) => {
          const J = n("SELECT * FROM attribute WHERE prop_guid = ?", [
            oe.guid
          ]);
          return oe.quality_guid ? {
            guid: oe.guid,
            value: String(oe.value),
            unit: p(oe.unit),
            quality: {
              guid: oe.quality_guid
            },
            attributes: v(J, u)
          } : null;
        }).filter((oe) => oe !== null);
        return W.length > 0 ? W : void 0;
      })();
      ie && (G.props = ie);
      const ne = v(x, u);
      return ne && (G.attributes = ne), G;
    });
    const b = n("SELECT * FROM design WHERE kit_guid = ?", [
      _.guid
    ]);
    _.designs = v(b, (m) => {
      const D = m.guid || String(m.id), z = n("SELECT * FROM piece WHERE design_guid = ?", [
        D
      ]), P = n("SELECT * FROM connection WHERE design_guid = ?", [
        D
      ]), x = n("SELECT * FROM layer WHERE design_guid = ?", [
        D
      ]), A = n('SELECT * FROM "group" WHERE design_guid = ?', [
        D
      ]), C = n("SELECT * FROM stat WHERE design_guid = ?", [
        D
      ]), G = n("SELECT * FROM attribute WHERE design_guid = ?", [
        D
      ]), ee = n("SELECT * FROM design_concept WHERE design_guid = ?", [
        D
      ]), ge = n("SELECT * FROM design_prop WHERE design_guid = ?", [
        D
      ]), ue = n("SELECT * FROM design_author WHERE design_guid = ? ORDER BY rank ASC", [
        D
      ]);
      return {
        guid: D,
        name: m.name,
        description: p(m.description),
        icon: p(m.icon),
        image: p(m.image),
        parent: m.parent_guid ? {
          guid: m.parent_guid
        } : m.parent_id ? {
          guid: String(m.parent_id)
        } : void 0,
        unit: p(m.unit),
        isAbstract: m.is_abstract ? true : void 0,
        folder: p(m.folder),
        canScale: m.can_scale ? true : void 0,
        canMirror: m.can_mirror ? true : void 0,
        createdAt: m.created,
        updatedAt: m.updated,
        activeLayer: m.active_layer_guid ? {
          guid: m.active_layer_guid
        } : void 0,
        props: v(ge, (V) => ({
          guid: V.guid,
          quality: {
            guid: V.quality_guid
          },
          value: String(V.value),
          unit: p(V.unit)
        })),
        authors: v(ue, (V) => ({
          guid: V.author_guid
        })),
        pieces: z.map((V) => {
          const he = n("SELECT prop.* FROM prop JOIN piece_prop ON prop.guid = piece_prop.prop_guid WHERE piece_prop.piece_guid = ?", [
            V.guid
          ]), pe = n("SELECT * FROM attribute WHERE piece_guid = ?", [
            V.guid
          ]);
          return {
            guid: V.guid,
            name: p(V.name),
            type: V.type_guid ? {
              guid: V.type_guid
            } : void 0,
            design: V.design_guid_ref ? {
              guid: V.design_guid_ref
            } : void 0,
            plane: V.plane_origin_x !== null ? {
              origin: {
                x: V.plane_origin_x,
                y: V.plane_origin_y,
                z: V.plane_origin_z
              },
              xAxis: {
                x: V.plane_x_axis_x,
                y: V.plane_x_axis_y,
                z: V.plane_x_axis_z
              },
              yAxis: {
                x: V.plane_y_axis_x,
                y: V.plane_y_axis_y,
                z: V.plane_y_axis_z
              }
            } : void 0,
            center: V.center_u !== null || V.center_v !== null ? {
              u: V.center_u,
              v: V.center_v
            } : void 0,
            scale: V.scale !== null ? V.scale : void 0,
            mirrorPlane: V.mirror_plane_origin_x !== null ? {
              origin: {
                x: V.mirror_plane_origin_x,
                y: V.mirror_plane_origin_y,
                z: V.mirror_plane_origin_z
              },
              xAxis: {
                x: V.mirror_plane_x_axis_x,
                y: V.mirror_plane_x_axis_y,
                z: V.mirror_plane_x_axis_z
              },
              yAxis: {
                x: V.mirror_plane_y_axis_x,
                y: V.mirror_plane_y_axis_y,
                z: V.mirror_plane_y_axis_z
              }
            } : void 0,
            isHidden: V.is_hidden ? true : void 0,
            isLocked: V.is_locked ? true : void 0,
            color: p(V.color),
            description: p(V.description),
            props: (() => {
              const ye = he.map((_e) => {
                const y = n("SELECT * FROM attribute WHERE prop_guid = ?", [
                  _e.guid
                ]);
                return _e.quality_guid ? {
                  guid: _e.guid,
                  value: String(_e.value),
                  unit: p(_e.unit),
                  quality: {
                    guid: _e.quality_guid
                  },
                  attributes: v(y, u)
                } : null;
              }).filter((_e) => _e !== null);
              return ye.length > 0 ? ye : void 0;
            })(),
            attributes: v(pe, u)
          };
        }),
        connections: P.map((V) => {
          const he = n("SELECT * FROM attribute WHERE connection_guid = ?", [
            V.guid
          ]);
          return {
            guid: V.guid,
            connected: {
              piece: {
                guid: V.connected_piece_guid
              },
              designPiece: V.connected_design_piece_guid ? {
                guid: V.connected_design_piece_guid
              } : void 0,
              connector: {
                guid: V.connected_connector_guid
              }
            },
            connecting: {
              piece: {
                guid: V.connecting_piece_guid
              },
              designPiece: V.connecting_design_piece_guid ? {
                guid: V.connecting_design_piece_guid
              } : void 0,
              connector: {
                guid: V.connecting_connector_guid
              }
            },
            gap: V.gap || 0,
            shift: V.shift || 0,
            rise: V.rise || 0,
            rotation: V.rotation || 0,
            turn: V.turn || 0,
            tilt: V.tilt || 0,
            u: V.u !== null ? V.u : void 0,
            v: V.v !== null ? V.v : void 0,
            description: p(V.description),
            attributes: v(he, u)
          };
        }),
        layers: x.map((V) => {
          const he = n("SELECT * FROM attribute WHERE layer_guid = ?", [
            V.guid
          ]);
          return {
            guid: V.guid,
            path: V.path,
            isHidden: V.is_hidden ? true : void 0,
            isLocked: V.is_locked ? true : void 0,
            color: p(V.color),
            description: p(V.description),
            attributes: v(he, u)
          };
        }),
        groups: A.map((V) => {
          const he = n("SELECT piece_guid FROM group_piece WHERE group_guid = ?", [
            V.guid
          ]), pe = n("SELECT * FROM attribute WHERE group_guid = ?", [
            V.guid
          ]);
          return {
            guid: V.guid,
            name: p(V.name),
            color: p(V.color),
            description: p(V.description),
            pieces: he.map((ye) => ({
              guid: ye.piece_guid
            })),
            attributes: v(pe, u)
          };
        }),
        stats: C.map((V) => ({
          guid: V.guid,
          quality: {
            guid: V.quality_guid
          },
          min: V.min_value ?? void 0,
          minExcluded: V.min_excluded ? true : void 0,
          max: V.max_value ?? void 0,
          maxExcluded: V.max_excluded ? true : void 0,
          unit: p(V.unit)
        })),
        attributes: v(G, u),
        concepts: ee.length > 0 ? ee.map((V) => V.concept) : void 0
      };
    });
    const N = n("SELECT * FROM port WHERE kit_guid = ?", [
      _.guid
    ]);
    _.ports = v(N, (m) => {
      const D = n("SELECT compatible_port_guid FROM port_compatibility WHERE port_guid = ?", [
        m.guid
      ]), z = n("SELECT * FROM attribute WHERE port_guid = ?", [
        m.guid
      ]);
      return {
        guid: m.guid,
        name: m.name,
        description: p(m.description),
        icon: p(m.icon),
        compatiblePorts: D.length > 0 ? D.map((P) => ({
          guid: P.compatible_port_guid
        })) : void 0,
        attributes: v(z, u)
      };
    });
    const L = o("tag", "SELECT * FROM tag WHERE kit_guid = ?", [
      _.guid
    ]);
    _.tags = v(L, (m) => ({
      guid: m.guid,
      name: m.name,
      description: p(m.description),
      icon: p(m.icon)
    }));
    const U = n("SELECT * FROM quality WHERE kit_guid = ?", [
      _.guid
    ]);
    _.qualities = U.length > 0 ? U.map((m) => {
      const D = n("SELECT * FROM benchmark WHERE quality_guid = ?", [
        m.guid
      ]), z = n("SELECT * FROM attribute WHERE quality_guid = ?", [
        m.guid
      ]);
      return {
        guid: m.guid,
        key: m.key,
        name: m.name,
        kind: m.kind || void 0,
        defaultValue: m.default_value ?? void 0,
        formula: p(m.formula),
        defaultSiUnit: p(m.default_si_unit),
        defaultImperialUnit: p(m.default_imperial_unit),
        min: m.min_value ?? void 0,
        minExcluded: m.min_excluded ? true : void 0,
        max: m.max_value ?? void 0,
        maxExcluded: m.max_excluded ? true : void 0,
        canScale: m.can_scale ? true : void 0,
        uri: p(m.definition),
        benchmarks: D.map((P) => {
          const x = n("SELECT * FROM attribute WHERE benchmark_guid = ?", [
            P.guid
          ]);
          return {
            guid: P.guid,
            name: P.name,
            icon: p(P.icon),
            min: P.min_value ?? void 0,
            minExcluded: P.min_excluded ? true : void 0,
            max: P.max_value ?? void 0,
            maxExcluded: P.max_excluded ? true : void 0,
            attributes: v(x, u)
          };
        }),
        attributes: v(z, u)
      };
    }) : void 0;
    const j = n("SELECT * FROM file WHERE kit_guid = ?", [
      _.guid
    ]);
    _.files = j.length > 0 ? j.map((m) => ({
      guid: m.guid,
      name: m.name,
      remote: p(m.remote_url),
      folder: m.folder_guid ? {
        guid: m.folder_guid
      } : void 0,
      size: m.size ?? void 0,
      hash: p(m.hash),
      createdAt: m.created,
      updatedAt: m.updated
    })) : void 0;
    const $ = n("SELECT * FROM folder WHERE kit_guid = ?", [
      _.guid
    ]);
    _.folders = v($, (m) => ({
      guid: m.guid,
      name: m.name,
      parent: m.parent_guid ? {
        guid: m.parent_guid
      } : void 0,
      createdAt: m.created,
      updatedAt: m.updated
    }));
    const R = n("SELECT * FROM author WHERE kit_guid = ?", [
      _.guid
    ]);
    _.authors = R.length > 0 ? R.map((m) => ({
      guid: m.guid,
      name: m.name,
      email: p(m.email)
    })) : void 0;
    const I = n("SELECT * FROM concept WHERE kit_guid = ?", [
      _.guid
    ]);
    _.concepts = v(I, (m) => ({
      guid: m.guid,
      name: m.name,
      description: p(m.description),
      icon: p(m.icon)
    }));
    const te = n("SELECT * FROM attribute WHERE kit_guid = ?", [
      _.guid
    ]);
    return _.attributes = v(te, u), _;
  };
  Q = (t) => t ? Array.isArray(t) ? t : [
    t
  ] : [];
  Od = `
CREATE TABLE semio (
	release VARCHAR NOT NULL,
	engine VARCHAR NOT NULL,
	created DATETIME NOT NULL,
	PRIMARY KEY (release)
);

CREATE TABLE kit (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	version VARCHAR(64),
	description TEXT,
	icon TEXT,
	image TEXT,
	preview TEXT,
	remote TEXT,
	homepage TEXT,
	license TEXT,
	created DATETIME NOT NULL,
	updated DATETIME NOT NULL,
	PRIMARY KEY (guid)
);

CREATE TABLE quality (
	guid VARCHAR(36) NOT NULL,
	key VARCHAR(128) NOT NULL,
	name VARCHAR(256) NOT NULL,
	kind INTEGER NOT NULL,
	default_value FLOAT,
	formula TEXT,
	default_si_unit VARCHAR(64),
	default_imperial_unit VARCHAR(64),
	min_value FLOAT,
	min_excluded BOOLEAN,
	max_value FLOAT,
	max_excluded BOOLEAN,
	can_scale BOOLEAN NOT NULL DEFAULT 0,
	definition TEXT,
	kit_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);

CREATE TABLE benchmark (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	icon TEXT,
	min_value FLOAT,
	min_excluded BOOLEAN,
	max_value FLOAT,
	max_excluded BOOLEAN,
	definition TEXT,
	quality_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(quality_guid) REFERENCES quality (guid)
);

CREATE TABLE port (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	description TEXT,
	icon TEXT,
	kit_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);

CREATE TABLE port_compatibility (
	port_guid VARCHAR(36) NOT NULL,
	compatible_port_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (port_guid, compatible_port_guid),
	FOREIGN KEY(port_guid) REFERENCES port (guid),
	FOREIGN KEY(compatible_port_guid) REFERENCES port (guid)
);

CREATE TABLE folder (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	parent_guid VARCHAR(36),
	created DATETIME NOT NULL,
	updated DATETIME NOT NULL,
	kit_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(parent_guid) REFERENCES folder (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);

CREATE TABLE file (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	folder_guid VARCHAR(36),
	size INTEGER,
	hash VARCHAR(128),
	remote_url TEXT,
	created DATETIME NOT NULL,
	updated DATETIME NOT NULL,
	kit_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(folder_guid) REFERENCES folder (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);

CREATE TABLE author (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	email VARCHAR(256),
	kit_guid VARCHAR(36),
	type_guid VARCHAR(36),
	design_guid VARCHAR(36),
	PRIMARY KEY (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);

CREATE TABLE tag (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	description TEXT,
	icon TEXT,
	kit_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);

CREATE TABLE type (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	parent_guid VARCHAR(36),
	is_abstract BOOLEAN NOT NULL DEFAULT 0,
	folder VARCHAR(256),
	stock INTEGER,
	virtual BOOLEAN NOT NULL DEFAULT 0,
	unit VARCHAR(64),
	location_guid VARCHAR(36),
	description TEXT,
	icon TEXT,
	image TEXT,
	created DATETIME NOT NULL,
	updated DATETIME NOT NULL,
	kit_guid VARCHAR(36) NOT NULL,
	row_id INTEGER PRIMARY KEY AUTOINCREMENT,
	UNIQUE (guid, kit_guid, parent_guid),
	FOREIGN KEY(parent_guid) REFERENCES type (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);

CREATE TABLE model (
	guid VARCHAR(36) NOT NULL,
	file_guid VARCHAR(36) NOT NULL,
	name VARCHAR(256),
	description TEXT,
	type_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(file_guid) REFERENCES file (guid),
	FOREIGN KEY(type_guid) REFERENCES type (guid)
);

CREATE TABLE model_tag (
	model_guid VARCHAR(36) NOT NULL,
	tag_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (model_guid, tag_guid),
	FOREIGN KEY(model_guid) REFERENCES model (guid),
	FOREIGN KEY(tag_guid) REFERENCES tag (guid)
);

CREATE TABLE prop (
	guid VARCHAR(36) NOT NULL,
	key VARCHAR(128) NOT NULL,
	value FLOAT NOT NULL,
	unit VARCHAR(64),
	quality_guid VARCHAR(36),
	connector_guid VARCHAR(36),
	PRIMARY KEY (guid),
	FOREIGN KEY(quality_guid) REFERENCES quality (guid)
);

CREATE TABLE type_prop (
	type_guid VARCHAR(36) NOT NULL,
	prop_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (type_guid, prop_guid),
	FOREIGN KEY(type_guid) REFERENCES type (guid),
	FOREIGN KEY(prop_guid) REFERENCES prop (guid)
);

CREATE TABLE connector (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256),
	point_x FLOAT NOT NULL,
	point_y FLOAT NOT NULL,
	point_z FLOAT NOT NULL,
	direction_x FLOAT NOT NULL,
	direction_y FLOAT NOT NULL,
	direction_z FLOAT NOT NULL,
	t FLOAT NOT NULL,
	mandatory BOOLEAN NOT NULL DEFAULT 0,
	port_guid VARCHAR(36),
	description TEXT,
	type_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	UNIQUE (guid, type_guid),
	FOREIGN KEY(port_guid) REFERENCES port (guid),
	FOREIGN KEY(type_guid) REFERENCES type (guid)
);

CREATE TABLE design (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	parent_guid VARCHAR(36),
	variant VARCHAR(256),
	view_center_u FLOAT,
	view_center_v FLOAT,
	view_zoom FLOAT,
	unit VARCHAR(64),
	location_guid VARCHAR(36),
	active_layer_guid VARCHAR(36),
	is_abstract BOOLEAN,
	folder VARCHAR(256),
	can_scale BOOLEAN,
	can_mirror BOOLEAN,
	description TEXT,
	icon TEXT,
	image TEXT,
	created DATETIME NOT NULL,
	updated DATETIME NOT NULL,
	kit_guid VARCHAR(36) NOT NULL,
	row_id INTEGER PRIMARY KEY AUTOINCREMENT,
	UNIQUE (guid, kit_guid, parent_guid),
	FOREIGN KEY(parent_guid) REFERENCES design (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);

CREATE TABLE design_prop (
	guid VARCHAR(36) NOT NULL,
	design_guid VARCHAR(36) NOT NULL,
	quality_guid VARCHAR(36) NOT NULL,
	value FLOAT NOT NULL,
	unit VARCHAR(64),
	PRIMARY KEY (guid),
	FOREIGN KEY(design_guid) REFERENCES design (guid),
	FOREIGN KEY(quality_guid) REFERENCES quality (guid)
);

CREATE TABLE design_author (
	design_guid VARCHAR(36) NOT NULL,
	author_guid VARCHAR(36) NOT NULL,
	rank INTEGER NOT NULL,
	PRIMARY KEY (design_guid, author_guid),
	FOREIGN KEY(design_guid) REFERENCES design (guid),
	FOREIGN KEY(author_guid) REFERENCES author (guid)
);

CREATE TABLE layer (
	guid VARCHAR(36) NOT NULL,
	path VARCHAR(512) NOT NULL,
	is_hidden BOOLEAN NOT NULL DEFAULT 0,
	is_locked BOOLEAN NOT NULL DEFAULT 0,
	color VARCHAR(32),
	description TEXT,
	design_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(design_guid) REFERENCES design (guid)
);

CREATE TABLE piece (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256),
	type_guid VARCHAR(36),
	design_guid_ref VARCHAR(36),
	plane_origin_x FLOAT,
	plane_origin_y FLOAT,
	plane_origin_z FLOAT,
	plane_x_axis_x FLOAT,
	plane_x_axis_y FLOAT,
	plane_x_axis_z FLOAT,
	plane_y_axis_x FLOAT,
	plane_y_axis_y FLOAT,
	plane_y_axis_z FLOAT,
	center_u FLOAT,
	center_v FLOAT,
	scale FLOAT,
	mirror_plane_origin_x FLOAT,
	mirror_plane_origin_y FLOAT,
	mirror_plane_origin_z FLOAT,
	mirror_plane_x_axis_x FLOAT,
	mirror_plane_x_axis_y FLOAT,
	mirror_plane_x_axis_z FLOAT,
	mirror_plane_y_axis_x FLOAT,
	mirror_plane_y_axis_y FLOAT,
	mirror_plane_y_axis_z FLOAT,
	is_hidden BOOLEAN NOT NULL DEFAULT 0,
	is_locked BOOLEAN NOT NULL DEFAULT 0,
	color VARCHAR(32),
	description TEXT,
	design_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(type_guid) REFERENCES type (guid),
	FOREIGN KEY(design_guid_ref) REFERENCES design (guid),
	FOREIGN KEY(design_guid) REFERENCES design (guid)
);

CREATE TABLE piece_prop (
	piece_guid VARCHAR(36) NOT NULL,
	prop_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (piece_guid, prop_guid),
	FOREIGN KEY(piece_guid) REFERENCES piece (guid),
	FOREIGN KEY(prop_guid) REFERENCES prop (guid)
);

CREATE TABLE "group" (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256),
	color VARCHAR(32),
	description TEXT,
	design_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(design_guid) REFERENCES design (guid)
);

CREATE TABLE group_piece (
	group_guid VARCHAR(36) NOT NULL,
	piece_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (group_guid, piece_guid),
	FOREIGN KEY(group_guid) REFERENCES "group" (guid),
	FOREIGN KEY(piece_guid) REFERENCES piece (guid)
);

CREATE TABLE connection (
	guid VARCHAR(36) NOT NULL,
	connected_piece_guid VARCHAR(36) NOT NULL,
	connected_design_piece_guid VARCHAR(36),
	connected_connector_guid VARCHAR(36) NOT NULL,
	connecting_piece_guid VARCHAR(36) NOT NULL,
	connecting_design_piece_guid VARCHAR(36),
	connecting_connector_guid VARCHAR(36) NOT NULL,
	gap FLOAT NOT NULL DEFAULT 0,
	shift FLOAT NOT NULL DEFAULT 0,
	rise FLOAT NOT NULL DEFAULT 0,
	rotation FLOAT NOT NULL DEFAULT 0,
	turn FLOAT NOT NULL DEFAULT 0,
	tilt FLOAT NOT NULL DEFAULT 0,
	u FLOAT,
	v FLOAT,
	description TEXT,
	design_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	CHECK (connecting_piece_guid != connected_piece_guid),
	FOREIGN KEY(connected_piece_guid) REFERENCES piece (guid),
	FOREIGN KEY(connected_connector_guid) REFERENCES connector (guid),
	FOREIGN KEY(connecting_piece_guid) REFERENCES piece (guid),
	FOREIGN KEY(connecting_connector_guid) REFERENCES connector (guid),
	FOREIGN KEY(design_guid) REFERENCES design (guid)
);

CREATE TABLE stat (
	guid VARCHAR(36) NOT NULL,
	quality_guid VARCHAR(36) NOT NULL,
	min_value FLOAT,
	min_excluded BOOLEAN,
	max_value FLOAT,
	max_excluded BOOLEAN,
	unit VARCHAR(64),
	design_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(quality_guid) REFERENCES quality (guid),
	FOREIGN KEY(design_guid) REFERENCES design (guid)
);

CREATE TABLE concept (
	guid VARCHAR(36) NOT NULL,
	name VARCHAR(256) NOT NULL,
	description TEXT,
	icon TEXT,
	kit_guid VARCHAR(36) NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);

CREATE TABLE type_concept (
	type_guid VARCHAR(36) NOT NULL,
	concept VARCHAR(256) NOT NULL,
	PRIMARY KEY (type_guid, concept)
);

CREATE TABLE type_author (
	type_guid VARCHAR(36) NOT NULL,
	author_guid VARCHAR(36) NOT NULL,
	rank INTEGER NOT NULL,
	PRIMARY KEY (type_guid, author_guid),
	FOREIGN KEY(type_guid) REFERENCES type (guid),
	FOREIGN KEY(author_guid) REFERENCES author (guid)
);

CREATE TABLE design_concept (
	design_guid VARCHAR(36) NOT NULL,
	concept VARCHAR(256) NOT NULL,
	PRIMARY KEY (design_guid, concept)
);

CREATE TABLE attribute (
	guid VARCHAR(36) NOT NULL,
	key VARCHAR(256) NOT NULL,
	value TEXT,
	definition TEXT,
	quality_guid VARCHAR(36),
	benchmark_guid VARCHAR(36),
	port_guid VARCHAR(36),
	folder_guid VARCHAR(36),
	file_guid VARCHAR(36),
	author_guid VARCHAR(36),
	model_guid VARCHAR(36),
	prop_guid VARCHAR(36),
	connector_guid VARCHAR(36),
	type_guid VARCHAR(36),
	layer_guid VARCHAR(36),
	piece_guid VARCHAR(36),
	group_guid VARCHAR(36),
	connection_guid VARCHAR(36),
	stat_guid VARCHAR(36),
	design_guid VARCHAR(36),
	kit_guid VARCHAR(36),
	PRIMARY KEY (guid),
	FOREIGN KEY(quality_guid) REFERENCES quality (guid),
	FOREIGN KEY(benchmark_guid) REFERENCES benchmark (guid),
	FOREIGN KEY(port_guid) REFERENCES port (guid),
	FOREIGN KEY(folder_guid) REFERENCES folder (guid),
	FOREIGN KEY(file_guid) REFERENCES file (guid),
	FOREIGN KEY(author_guid) REFERENCES author (guid),
	FOREIGN KEY(model_guid) REFERENCES model (guid),
	FOREIGN KEY(prop_guid) REFERENCES prop (guid),
	FOREIGN KEY(connector_guid) REFERENCES connector (guid),
	FOREIGN KEY(type_guid) REFERENCES type (guid),
	FOREIGN KEY(layer_guid) REFERENCES layer (guid),
	FOREIGN KEY(piece_guid) REFERENCES piece (guid),
	FOREIGN KEY(group_guid) REFERENCES "group" (guid),
	FOREIGN KEY(connection_guid) REFERENCES connection (guid),
	FOREIGN KEY(stat_guid) REFERENCES stat (guid),
	FOREIGN KEY(design_guid) REFERENCES design (guid),
	FOREIGN KEY(kit_guid) REFERENCES kit (guid)
);
`;
  bi = async (t, e) => {
    e.exec(Od);
    const i = (n) => n ? typeof n == "string" ? n : n.toISOString() : (/* @__PURE__ */ new Date()).toISOString();
    e.run("INSERT INTO semio (release, engine, created) VALUES (?, ?, ?)", [
      "1.0.0",
      "js",
      (/* @__PURE__ */ new Date()).toISOString()
    ]), e.run("INSERT INTO kit (guid, name, version, description, icon, image, preview, remote, homepage, license, created, updated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
      t.guid,
      t.name,
      t.version || null,
      t.description || null,
      t.icon || null,
      t.image || null,
      t.preview || null,
      t.remote || null,
      t.homepage || null,
      t.license || null,
      i(t.createdAt),
      i(t.updatedAt)
    ]), Q(t.concepts).forEach((n) => {
      typeof n == "object" ? e.run("INSERT INTO concept (guid, name, description, icon, kit_guid) VALUES (?, ?, ?, ?, ?)", [
        n.guid,
        n.name,
        n.description || null,
        n.icon || null,
        t.guid
      ]) : e.run("INSERT INTO concept (guid, name, kit_guid) VALUES (?, ?, ?)", [
        Yt(),
        n,
        t.guid
      ]);
    }), Q(t.attributes).forEach((n) => {
      e.run("INSERT INTO attribute (guid, key, value, definition, kit_guid) VALUES (?, ?, ?, ?, ?)", [
        n.guid,
        n.key,
        n.value || null,
        n.definition || null,
        t.guid
      ]);
    }), Q(t.ports).forEach((n) => {
      e.run("INSERT INTO port (guid, name, description, icon, kit_guid) VALUES (?, ?, ?, ?, ?)", [
        n.guid,
        n.name,
        n.description || null,
        n.icon || null,
        t.guid
      ]), Q(n.compatiblePorts).forEach((o) => {
        e.run("INSERT INTO port_compatibility (port_guid, compatible_port_guid) VALUES (?, ?)", [
          n.guid,
          o.guid
        ]);
      }), Q(n.attributes).forEach((o) => {
        e.run("INSERT INTO attribute (guid, key, value, definition, port_guid) VALUES (?, ?, ?, ?, ?)", [
          o.guid,
          o.key,
          o.value || null,
          o.definition || null,
          n.guid
        ]);
      });
    }), Q(t.qualities).forEach((n) => {
      e.run("INSERT INTO quality (guid, key, name, kind, default_value, formula, default_si_unit, default_imperial_unit, min_value, min_excluded, max_value, max_excluded, can_scale, definition, kit_guid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
        n.guid,
        n.key,
        n.name,
        n.kind ?? 0,
        n.defaultValue || null,
        n.formula || null,
        n.defaultSiUnit || null,
        n.defaultImperialUnit || null,
        n.min || null,
        n.isMinExcluded ? 1 : null,
        n.max || null,
        n.isMaxExcluded ? 1 : null,
        n.canScale ? 1 : 0,
        n.uri || null,
        t.guid
      ]), Q(n.benchmarks).forEach((o) => {
        e.run("INSERT INTO benchmark (guid, name, icon, min_value, min_excluded, max_value, max_excluded, quality_guid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
          o.guid,
          o.name,
          o.icon || null,
          o.min || null,
          o.minExcluded ? 1 : null,
          o.max || null,
          o.maxExcluded ? 1 : null,
          n.guid
        ]), Q(o.attributes).forEach((r) => {
          e.run("INSERT INTO attribute (guid, key, value, definition, benchmark_guid) VALUES (?, ?, ?, ?, ?)", [
            r.guid,
            r.key,
            r.value || null,
            r.definition || null,
            o.guid
          ]);
        });
      }), Q(n.attributes).forEach((o) => {
        e.run("INSERT INTO attribute (guid, key, value, definition, quality_guid) VALUES (?, ?, ?, ?, ?)", [
          o.guid,
          o.key,
          o.value || null,
          o.definition || null,
          n.guid
        ]);
      });
    }), Q(t.folders).forEach((n) => {
      var _a3;
      e.run("INSERT INTO folder (guid, name, parent_guid, created, updated, kit_guid) VALUES (?, ?, ?, ?, ?, ?)", [
        n.guid,
        n.name,
        ((_a3 = n.parent) == null ? void 0 : _a3.guid) || null,
        i(n.createdAt),
        i(n.updatedAt),
        t.guid
      ]);
    }), Q(t.files).forEach((n) => {
      var _a3;
      e.run("INSERT INTO file (guid, name, folder_guid, size, hash, remote_url, created, updated, kit_guid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [
        n.guid,
        n.name,
        ((_a3 = n.folder) == null ? void 0 : _a3.guid) || null,
        n.size || null,
        n.hash || null,
        n.remote || null,
        i(n.createdAt),
        i(n.updatedAt),
        t.guid
      ]);
    }), Q(t.authors).forEach((n) => {
      e.run("INSERT INTO author (guid, name, email, kit_guid) VALUES (?, ?, ?, ?)", [
        n.guid,
        n.name,
        n.email || null,
        t.guid
      ]);
    }), Q(t.tags).forEach((n) => {
      e.run("INSERT INTO tag (guid, name, description, icon, kit_guid) VALUES (?, ?, ?, ?, ?)", [
        n.guid,
        n.name,
        n.description || null,
        n.icon || null,
        t.guid
      ]);
    }), Q(t.types).forEach((n) => {
      var _a3;
      e.run("INSERT INTO type (guid, name, parent_guid, is_abstract, folder, stock, virtual, unit, description, icon, image, created, updated, kit_guid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
        n.guid,
        n.name,
        ((_a3 = n.parent) == null ? void 0 : _a3.guid) || null,
        n.isAbstract ? 1 : 0,
        n.folder || null,
        n.stock || null,
        n.virtual ? 1 : 0,
        n.unit || null,
        n.description || null,
        n.icon || null,
        n.image || null,
        i(n.createdAt),
        i(n.updatedAt),
        t.guid
      ]), Q(n.concepts).forEach((o) => {
        e.run("INSERT INTO type_concept (type_guid, concept) VALUES (?, ?)", [
          n.guid,
          o
        ]);
      }), Q(n.authors).forEach((o, r) => {
        e.run("INSERT INTO type_author (type_guid, author_guid, rank) VALUES (?, ?, ?)", [
          n.guid,
          typeof o == "object" ? o.guid : o,
          r
        ]);
      }), Q(n.models).forEach((o) => {
        e.run("INSERT INTO model (guid, file_guid, name, description, type_guid) VALUES (?, ?, ?, ?, ?)", [
          o.guid,
          o.file.guid,
          o.name || null,
          o.description || null,
          n.guid
        ]), Q(o.tags).forEach((r) => {
          e.run("INSERT INTO model_tag (model_guid, tag_guid) VALUES (?, ?)", [
            o.guid,
            typeof r == "object" ? r.guid : r
          ]);
        }), Q(o.attributes).forEach((r) => {
          e.run("INSERT INTO attribute (guid, key, value, definition, model_guid) VALUES (?, ?, ?, ?, ?)", [
            r.guid,
            r.key,
            r.value || null,
            r.definition || null,
            o.guid
          ]);
        });
      }), Q(n.connectors).forEach((o) => {
        var _a4;
        e.run("INSERT INTO connector (guid, name, point_x, point_y, point_z, direction_x, direction_y, direction_z, t, mandatory, port_guid, description, type_guid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
          o.guid,
          o.name || null,
          o.point.x,
          o.point.y,
          o.point.z,
          o.direction.x,
          o.direction.y,
          o.direction.z,
          o.t,
          o.mandatory ? 1 : 0,
          ((_a4 = o.port) == null ? void 0 : _a4.guid) || null,
          o.description || null,
          n.guid
        ]), Q(o.props).forEach((r) => {
          var _a5;
          const p = ((_a5 = Q(t.qualities).find((u) => u.guid === r.quality.guid)) == null ? void 0 : _a5.key) || "";
          e.run("INSERT INTO prop (guid, key, value, unit, quality_guid, connector_guid) VALUES (?, ?, ?, ?, ?, ?)", [
            r.guid,
            p,
            r.value,
            r.unit || null,
            r.quality.guid,
            o.guid
          ]), Q(r.attributes).forEach((u) => {
            e.run("INSERT INTO attribute (guid, key, value, definition, prop_guid) VALUES (?, ?, ?, ?, ?)", [
              u.guid,
              u.key,
              u.value || null,
              u.definition || null,
              r.guid
            ]);
          });
        }), Q(o.attributes).forEach((r) => {
          e.run("INSERT INTO attribute (guid, key, value, definition, connector_guid) VALUES (?, ?, ?, ?, ?)", [
            r.guid,
            r.key,
            r.value || null,
            r.definition || null,
            o.guid
          ]);
        });
      }), Q(n.props).forEach((o) => {
        var _a4;
        const l = ((_a4 = Q(t.qualities).find((p) => p.guid === o.quality.guid)) == null ? void 0 : _a4.key) || "";
        e.run("INSERT INTO prop (guid, key, value, unit, quality_guid) VALUES (?, ?, ?, ?, ?)", [
          o.guid,
          l,
          o.value,
          o.unit || null,
          o.quality.guid
        ]), e.run("INSERT INTO type_prop (type_guid, prop_guid) VALUES (?, ?)", [
          n.guid,
          o.guid
        ]), Q(o.attributes).forEach((p) => {
          e.run("INSERT INTO attribute (guid, key, value, definition, prop_guid) VALUES (?, ?, ?, ?, ?)", [
            p.guid,
            p.key,
            p.value || null,
            p.definition || null,
            o.guid
          ]);
        });
      }), Q(n.attributes).forEach((o) => {
        e.run("INSERT INTO attribute (guid, key, value, definition, type_guid) VALUES (?, ?, ?, ?, ?)", [
          o.guid,
          o.key,
          o.value || null,
          o.definition || null,
          n.guid
        ]);
      });
    }), Q(t.designs).forEach((n) => {
      var _a3;
      e.run("INSERT INTO design (guid, name, parent_guid, unit, is_abstract, folder, can_scale, can_mirror, description, icon, image, created, updated, kit_guid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
        n.guid,
        n.name,
        ((_a3 = n.parent) == null ? void 0 : _a3.guid) || null,
        n.unit || null,
        n.isAbstract ? 1 : null,
        n.folder || null,
        n.canScale ? 1 : null,
        n.canMirror ? 1 : null,
        n.description || null,
        n.icon || null,
        n.image || null,
        i(n.createdAt),
        i(n.updatedAt),
        t.guid
      ]), Q(n.concepts).forEach((o) => {
        e.run("INSERT INTO design_concept (design_guid, concept) VALUES (?, ?)", [
          n.guid,
          o
        ]);
      }), Q(n.props).forEach((o) => {
        e.run("INSERT INTO design_prop (guid, design_guid, quality_guid, value, unit) VALUES (?, ?, ?, ?, ?)", [
          o.guid,
          n.guid,
          o.quality.guid,
          parseFloat(o.value),
          o.unit || null
        ]);
      }), Q(n.authors).forEach((o, r) => {
        e.run("INSERT INTO design_author (design_guid, author_guid, rank) VALUES (?, ?, ?)", [
          n.guid,
          typeof o == "object" ? o.guid : o,
          r
        ]);
      }), Q(n.layers).forEach((o) => {
        e.run("INSERT INTO layer (guid, path, is_hidden, is_locked, color, description, design_guid) VALUES (?, ?, ?, ?, ?, ?, ?)", [
          o.guid,
          o.path,
          o.isHidden ? 1 : 0,
          o.isLocked ? 1 : 0,
          o.color || null,
          o.description || null,
          n.guid
        ]), Q(o.attributes).forEach((r) => {
          e.run("INSERT INTO attribute (guid, key, value, definition, layer_guid) VALUES (?, ?, ?, ?, ?)", [
            r.guid,
            r.key,
            r.value || null,
            r.definition || null,
            o.guid
          ]);
        });
      }), Q(n.pieces).forEach((o) => {
        var _a4, _b, _c2, _d2, _e, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2, _p, _q, _r2, _s2, _t2, _u, _v;
        e.run("INSERT INTO piece (guid, name, type_guid, design_guid_ref, plane_origin_x, plane_origin_y, plane_origin_z, plane_x_axis_x, plane_x_axis_y, plane_x_axis_z, plane_y_axis_x, plane_y_axis_y, plane_y_axis_z, center_u, center_v, scale, mirror_plane_origin_x, mirror_plane_origin_y, mirror_plane_origin_z, mirror_plane_x_axis_x, mirror_plane_x_axis_y, mirror_plane_x_axis_z, mirror_plane_y_axis_x, mirror_plane_y_axis_y, mirror_plane_y_axis_z, is_hidden, is_locked, color, description, design_guid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
          o.guid,
          o.name || null,
          ((_a4 = o.type) == null ? void 0 : _a4.guid) || null,
          ((_b = o.design) == null ? void 0 : _b.guid) || null,
          ((_c2 = o.plane) == null ? void 0 : _c2.origin.x) !== void 0 ? o.plane.origin.x : null,
          ((_d2 = o.plane) == null ? void 0 : _d2.origin.y) !== void 0 ? o.plane.origin.y : null,
          ((_e = o.plane) == null ? void 0 : _e.origin.z) !== void 0 ? o.plane.origin.z : null,
          ((_f = o.plane) == null ? void 0 : _f.xAxis.x) !== void 0 ? o.plane.xAxis.x : null,
          ((_g = o.plane) == null ? void 0 : _g.xAxis.y) !== void 0 ? o.plane.xAxis.y : null,
          ((_h = o.plane) == null ? void 0 : _h.xAxis.z) !== void 0 ? o.plane.xAxis.z : null,
          ((_i2 = o.plane) == null ? void 0 : _i2.yAxis.x) !== void 0 ? o.plane.yAxis.x : null,
          ((_j = o.plane) == null ? void 0 : _j.yAxis.y) !== void 0 ? o.plane.yAxis.y : null,
          ((_k = o.plane) == null ? void 0 : _k.yAxis.z) !== void 0 ? o.plane.yAxis.z : null,
          ((_l = o.center) == null ? void 0 : _l.u) !== void 0 ? o.center.u : null,
          ((_m = o.center) == null ? void 0 : _m.v) !== void 0 ? o.center.v : null,
          o.scale !== void 0 ? o.scale : null,
          ((_n2 = o.mirrorPlane) == null ? void 0 : _n2.origin.x) !== void 0 ? o.mirrorPlane.origin.x : null,
          ((_o2 = o.mirrorPlane) == null ? void 0 : _o2.origin.y) !== void 0 ? o.mirrorPlane.origin.y : null,
          ((_p = o.mirrorPlane) == null ? void 0 : _p.origin.z) !== void 0 ? o.mirrorPlane.origin.z : null,
          ((_q = o.mirrorPlane) == null ? void 0 : _q.xAxis.x) !== void 0 ? o.mirrorPlane.xAxis.x : null,
          ((_r2 = o.mirrorPlane) == null ? void 0 : _r2.xAxis.y) !== void 0 ? o.mirrorPlane.xAxis.y : null,
          ((_s2 = o.mirrorPlane) == null ? void 0 : _s2.xAxis.z) !== void 0 ? o.mirrorPlane.xAxis.z : null,
          ((_t2 = o.mirrorPlane) == null ? void 0 : _t2.yAxis.x) !== void 0 ? o.mirrorPlane.yAxis.x : null,
          ((_u = o.mirrorPlane) == null ? void 0 : _u.yAxis.y) !== void 0 ? o.mirrorPlane.yAxis.y : null,
          ((_v = o.mirrorPlane) == null ? void 0 : _v.yAxis.z) !== void 0 ? o.mirrorPlane.yAxis.z : null,
          o.isHidden ? 1 : 0,
          o.isLocked ? 1 : 0,
          o.color || null,
          o.description || null,
          n.guid
        ]), Q(o.props).forEach((r) => {
          var _a5;
          const p = ((_a5 = Q(t.qualities).find((u) => u.guid === r.quality.guid)) == null ? void 0 : _a5.key) || "";
          e.run("INSERT INTO prop (guid, key, value, unit, quality_guid) VALUES (?, ?, ?, ?, ?)", [
            r.guid,
            p,
            r.value,
            r.unit || null,
            r.quality.guid
          ]), e.run("INSERT INTO piece_prop (piece_guid, prop_guid) VALUES (?, ?)", [
            o.guid,
            r.guid
          ]), Q(r.attributes).forEach((u) => {
            e.run("INSERT INTO attribute (guid, key, value, definition, prop_guid) VALUES (?, ?, ?, ?, ?)", [
              u.guid,
              u.key,
              u.value || null,
              u.definition || null,
              r.guid
            ]);
          });
        }), Q(o.attributes).forEach((r) => {
          e.run("INSERT INTO attribute (guid, key, value, definition, piece_guid) VALUES (?, ?, ?, ?, ?)", [
            r.guid,
            r.key,
            r.value || null,
            r.definition || null,
            o.guid
          ]);
        });
      }), Q(n.groups).forEach((o) => {
        e.run('INSERT INTO "group" (guid, name, color, description, design_guid) VALUES (?, ?, ?, ?, ?)', [
          o.guid,
          o.name || null,
          o.color || null,
          o.description || null,
          n.guid
        ]), Q(o.pieces).forEach((r) => {
          e.run("INSERT INTO group_piece (group_guid, piece_guid) VALUES (?, ?)", [
            o.guid,
            r.guid
          ]);
        }), Q(o.attributes).forEach((r) => {
          e.run("INSERT INTO attribute (guid, key, value, definition, group_guid) VALUES (?, ?, ?, ?, ?)", [
            r.guid,
            r.key,
            r.value || null,
            r.definition || null,
            o.guid
          ]);
        });
      }), Q(n.connections).forEach((o) => {
        var _a4, _b, _c2, _d2, _e, _f, _g, _h, _i2, _j;
        !o.guid || !((_b = (_a4 = o.connected) == null ? void 0 : _a4.piece) == null ? void 0 : _b.guid) || !((_d2 = (_c2 = o.connecting) == null ? void 0 : _c2.piece) == null ? void 0 : _d2.guid) || !((_f = (_e = o.connected) == null ? void 0 : _e.connector) == null ? void 0 : _f.guid) || !((_h = (_g = o.connecting) == null ? void 0 : _g.connector) == null ? void 0 : _h.guid) || (e.run("INSERT INTO connection (guid, connected_piece_guid, connected_design_piece_guid, connected_connector_guid, connecting_piece_guid, connecting_design_piece_guid, connecting_connector_guid, gap, shift, rise, rotation, turn, tilt, u, v, description, design_guid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
          o.guid,
          o.connected.piece.guid,
          ((_i2 = o.connected.designPiece) == null ? void 0 : _i2.guid) || null,
          o.connected.connector.guid,
          o.connecting.piece.guid,
          ((_j = o.connecting.designPiece) == null ? void 0 : _j.guid) || null,
          o.connecting.connector.guid,
          o.gap || 0,
          o.shift || 0,
          o.rise || 0,
          o.rotation || 0,
          o.turn || 0,
          o.tilt || 0,
          o.u !== void 0 ? o.u : null,
          o.v !== void 0 ? o.v : null,
          o.description || null,
          n.guid
        ]), Q(o.attributes).forEach((r) => {
          e.run("INSERT INTO attribute (guid, key, value, definition, connection_guid) VALUES (?, ?, ?, ?, ?)", [
            r.guid,
            r.key,
            r.value || null,
            r.definition || null,
            o.guid
          ]);
        }));
      }), Q(n.stats).forEach((o) => {
        e.run("INSERT INTO stat (guid, quality_guid, min_value, min_excluded, max_value, max_excluded, unit, design_guid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
          o.guid,
          o.quality.guid,
          o.min || null,
          o.minExcluded ? 1 : null,
          o.max || null,
          o.maxExcluded ? 1 : null,
          o.unit || null,
          n.guid
        ]);
      }), Q(n.attributes).forEach((o) => {
        e.run("INSERT INTO attribute (guid, key, value, definition, design_guid) VALUES (?, ?, ?, ?, ?)", [
          o.guid,
          o.key,
          o.value || null,
          o.definition || null,
          n.guid
        ]);
      });
    });
  };
  Ro = {
    ".glb": "model/gltf-binary",
    ".gltf": "model/gltf+json"
  };
  Ds = new Ge().set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
  Pd = Ds.clone().invert();
  Ms = (t) => new Ge().multiplyMatrices(Ds, t).multiply(Pd).elements.slice();
  Dd = (t) => Ms(Oi(t));
  Md = (t, e, i) => {
    if (!e.models || e.models.length === 0) return;
    const n = t.tags ?? [], o = i.flatMap((r) => {
      const l = n.find((p) => p.guid === r);
      return l ? [
        l.guid
      ] : n.filter((p) => p.name === r).map((p) => p.guid);
    });
    return Gn(e.models, o);
  };
  Fd = (t) => {
    const e = t.startsWith("data:") ? t.slice(t.indexOf(",") + 1) : t, i = atob(e), n = new Uint8Array(i.length);
    for (let o = 0; o < i.length; o++) n[o] = i.charCodeAt(o);
    return n;
  };
  No = (t, e) => {
    const i = Buffer.from(t).toString("base64");
    return `data:${e};base64,${i}`;
  };
  Id = (t) => {
    const e = t.resources ?? {};
    for (const i of t.json.buffers ?? []) {
      if (!i.uri) continue;
      const n = e[i.uri];
      if (!n) continue;
      const o = typeof n == "string" ? new TextEncoder().encode(n) : n;
      i.uri = No(o, "application/octet-stream");
    }
    for (const i of t.json.images ?? []) {
      if (!i.uri) continue;
      const n = e[i.uri];
      if (!n) continue;
      const o = typeof n == "string" ? new TextEncoder().encode(n) : n;
      i.uri = No(o, i.mimeType ?? "application/octet-stream");
    }
    return t.json;
  };
  ti = (t, e, i) => {
    const n = i.get(t);
    if (n) return n;
    const o = e.createTexture(t.getName()), r = t.getImage();
    return r && o.setImage(new Uint8Array(r)), o.setMimeType(t.getMimeType()), o.setURI(t.getURI()), i.set(t, o), o;
  };
  Ud = (t, e, i) => {
    const n = e.createMaterial(t.getName());
    n.setBaseColorFactor(t.getBaseColorFactor()), n.setMetallicFactor(t.getMetallicFactor()), n.setRoughnessFactor(t.getRoughnessFactor()), n.setEmissiveFactor(t.getEmissiveFactor()), n.setAlphaMode(t.getAlphaMode()), n.setAlphaCutoff(t.getAlphaCutoff()), n.setDoubleSided(t.getDoubleSided());
    const o = t.getBaseColorTexture();
    o && n.setBaseColorTexture(ti(o, e, i));
    const r = t.getMetallicRoughnessTexture();
    r && n.setMetallicRoughnessTexture(ti(r, e, i));
    const l = t.getNormalTexture();
    l && n.setNormalTexture(ti(l, e, i));
    const p = t.getOcclusionTexture();
    p && n.setOcclusionTexture(ti(p, e, i));
    const u = t.getEmissiveTexture();
    return u && n.setEmissiveTexture(ti(u, e, i)), n;
  };
  Gd = (t, e, i, n) => {
    const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), l = e.createMesh(n);
    for (const p of t.getRoot().listMeshes()) for (const u of p.listPrimitives()) {
      const v = e.createPrimitive();
      for (const b of u.listSemantics()) {
        const N = u.getAttribute(b);
        if (!N) continue;
        const L = N.getArray();
        if (!L) continue;
        const U = e.createAccessor(b).setArray(L.slice()).setType(N.getType()).setBuffer(i);
        N.getNormalized() && U.setNormalized(true), v.setAttribute(b, U);
      }
      const _ = u.getIndices();
      if (_) {
        const b = _.getArray();
        if (b) {
          const N = e.createAccessor("indices").setArray(b.slice()).setType(er.Type.SCALAR).setBuffer(i);
          v.setIndices(N);
        }
      }
      const w = u.getMaterial();
      if (w) {
        let b = o.get(w);
        b || (b = Ud(w, e, r), o.set(w, b)), v.setMaterial(b);
      }
      l.addPrimitive(v);
    }
    return l.listPrimitives().length > 0 ? [
      l
    ] : [];
  };
  dn = async (t, e, i = ".glb", n = [], o = {}) => {
    var _a3, _b, _c2, _d2, _e;
    const r = new On(), l = Tt(t, e), p = l.pieces ?? [], u = l.connections ?? [], v = t.types ?? [];
    if (p.length === 0) {
      const G = new Wn();
      return G.createBuffer("main"), G.createScene("empty"), (await r.writeBinary(G)).buffer;
    }
    const _ = {};
    for (const G of v) _[G.guid] = G;
    const w = {};
    for (const G of p) w[G.guid] = G;
    const b = {};
    for (const G of p) b[G.guid] = [];
    for (const G of u) {
      const ee = G.connected.piece.guid, ge = G.connecting.piece.guid;
      b[ee] && b[ee].push({
        connection: G,
        neighborGuid: ge
      }), b[ge] && b[ge].push({
        connection: G,
        neighborGuid: ee
      });
    }
    const N = {}, L = {}, U = {};
    for (const G of p) U[G.guid] = [];
    const j = /* @__PURE__ */ new Set(), $ = [], R = (G) => _[G], I = (G, ee) => {
      var _a4, _b2;
      if (G) return ee ? (_a4 = G.connectors) == null ? void 0 : _a4.find((ge) => ge.guid === ee) : (_b2 = G.connectors) == null ? void 0 : _b2[0];
    }, te = [];
    for (const G of p) G.plane && (N[G.guid] = G.plane, j.add(G.guid), te.push(G.guid), $.push(G.guid));
    if (te.length === 0 && p.length > 0) {
      const G = p[0], ee = Pi(new Ge().identity());
      N[G.guid] = ee, j.add(G.guid), te.push(G.guid), $.push(G.guid);
    }
    for (; te.length > 0; ) {
      const G = te.shift(), ee = N[G];
      for (const ge of b[G] ?? []) {
        if (j.has(ge.neighborGuid)) continue;
        const ue = ge.connection;
        if (!(ue.connected.piece.guid === G)) continue;
        const he = G, pe = ge.neighborGuid, ye = w[he], _e2 = w[pe], y = ye.type ? R(ye.type.guid) : void 0, E = _e2.type ? R(_e2.type.guid) : void 0, ie = I(y, (_a3 = ue.connected.connector) == null ? void 0 : _a3.guid), ne = I(E, (_b = ue.connecting.connector) == null ? void 0 : _b.guid);
        if (ie && ne) {
          const W = Vn(ee, ie, ne, ue);
          N[pe] = W;
        } else N[pe] = ee;
        L[pe] = he, U[he].push(pe), j.add(pe), te.push(pe);
      }
    }
    for (const G of p) j.has(G.guid) || (N[G.guid] = Pi(new Ge().identity()), $.push(G.guid));
    const m = new Wn(), D = m.createBuffer("main"), z = m.createScene(l.name ?? "design"), P = {};
    for (const G of p) {
      const ee = (_c2 = G.type) == null ? void 0 : _c2.guid;
      if (!ee || P[ee] !== void 0) continue;
      const ge = _[ee];
      if (!ge) continue;
      const ue = Md(t, ge, n);
      if (!ue) continue;
      const V = (_d2 = t.files) == null ? void 0 : _d2.find((ye) => ye.guid === ue.file.guid);
      if (!(V == null ? void 0 : V.blob)) continue;
      const he = Fd(V.blob);
      if (((_e = V.name.split(".").pop()) == null ? void 0 : _e.toLowerCase()) === "glb") try {
        const ye = await r.readBinary(he), _e2 = Gd(ye, m, D, V.name);
        _e2.length > 0 && (P[ee] = _e2[0]);
      } catch {
      }
    }
    const x = {}, A = (G) => {
      var _a4;
      if (x[G]) return x[G];
      const ee = w[G], ge = N[G], ue = L[G], V = U[G] ?? [];
      let he;
      if (ue && N[ue]) {
        const _e2 = Oi(N[ue]), y = Oi(ge), E = _e2.clone().invert(), ie = new Ge().multiplyMatrices(E, y);
        he = Ms(ie);
      } else he = Dd(ge);
      const pe = m.createNode(ee.name ?? ee.guid);
      pe.setMatrix(he);
      const ye = (_a4 = ee.type) == null ? void 0 : _a4.guid;
      ye && P[ye] && pe.setMesh(P[ye]);
      for (const _e2 of V) pe.addChild(A(_e2));
      return x[G] = pe, pe;
    };
    for (const G of $) z.addChild(A(G));
    if (i === ".gltf") {
      const G = await r.writeJSON(m);
      return new TextEncoder().encode(JSON.stringify(Id(G))).buffer;
    }
    return (await r.writeBinary(m)).buffer;
  };
  function zd(t, e, i) {
    return {
      x: t,
      y: -t,
      z: e
    };
  }
  function Lo(t, e, i) {
    return 0.5 * new be().crossVectors(new be(e.x - t.x, e.y - t.y, e.z - t.z), new be(i.x - t.x, i.y - t.y, i.z - t.z)).length();
  }
  function Oo(t, e, i, n) {
    return 1 / 6 * new be().crossVectors(new be(e.x - t.x, e.y - t.y, e.z - t.z), new be(i.x - t.x, i.y - t.y, i.z - t.z)).dot(new be(n.x - t.x, n.y - t.y, n.z - t.z));
  }
  Kd = async (t) => {
    var _a3, _b, _c2;
    const e = new On();
    let i;
    if (typeof t == "string") if (t.startsWith("data:")) {
      const $ = t.slice(t.indexOf(",") + 1), R = Uint8Array.from(atob($), (I) => I.charCodeAt(0));
      i = await e.readBinary(R);
    } else {
      let $;
      const R = !t.startsWith("http://") && !t.startsWith("https://") && (t.endsWith(".glb") || t.endsWith(".gltf") || t.includes("/") || t.includes("\\"));
      if (typeof globalThis < "u" && "process" in globalThis && typeof ((_b = (_a3 = globalThis.process) == null ? void 0 : _a3.versions) == null ? void 0 : _b.node) == "string" && R) {
        const { readFileSync: I } = await we(async () => {
          const { readFileSync: z } = await import("./__vite-browser-external-D7Ct-6yo.js").then((P) => P._);
          return {
            readFileSync: z
          };
        }, [], import.meta.url), { dirname: te, join: m } = await we(async () => {
          const { dirname: z, join: P } = await import("./__vite-browser-external-D7Ct-6yo.js").then((x) => x._);
          return {
            dirname: z,
            join: P
          };
        }, [], import.meta.url), D = te(t);
        if (t.endsWith(".gltf")) {
          const z = I(t, "utf8"), P = JSON.parse(z), x = {}, A = (C) => {
            if (C) {
              if (C.startsWith("data:")) {
                const G = C.slice(C.indexOf(",") + 1);
                x[C] = new Uint8Array(Buffer.from(G, "base64"));
                return;
              }
              try {
                const G = m(D, C);
                x[C] = new Uint8Array(I(G));
              } catch {
              }
            }
          };
          for (const C of P.buffers ?? []) A(C.uri);
          for (const C of P.images ?? []) A(C.uri);
          i = await e.readJSON({
            json: P,
            resources: x
          });
        } else {
          const z = I(t);
          $ = z.buffer.slice(z.byteOffset, z.byteOffset + z.byteLength), i = await e.readBinary(new Uint8Array($));
        }
      } else {
        const I = await fetch(t);
        if (!I.ok) throw new Error(`Failed to load model: ${I.statusText}`);
        $ = await I.arrayBuffer();
        const te = new Uint8Array($), m = t.endsWith(".glb") || te.length >= 4 && new TextDecoder().decode(te.slice(0, 4)) === "glTF";
        t.replace(/\/[^/]*$/, ""), i = m ? await e.readBinary(new Uint8Array($)) : await e.readJSON({
          json: JSON.parse(new TextDecoder().decode(new Uint8Array($))),
          resources: {}
        });
      }
    }
    else {
      const $ = t instanceof Uint8Array ? t : new Uint8Array(t);
      i = ($.length >= 4 ? new TextDecoder().decode($.slice(0, 4)) : "") === "glTF" ? await e.readBinary($) : await e.readJSON({
        json: JSON.parse(new TextDecoder().decode($)),
        resources: {}
      });
    }
    const n = {}, o = new tr();
    let r = 0, l = 0, p = 0, u = 0;
    const v = {
      x: 0,
      y: 0,
      z: 0
    }, _ = new be(0, 0, 0);
    for (const $ of i.getRoot().listMeshes()) for (const R of $.listPrimitives()) {
      const I = R.getAttribute("POSITION");
      if (!I) continue;
      const te = I.getArray();
      if (!te || te.length < 3) continue;
      const m = te.length / 3;
      for (let P = 0; P < m; P++) {
        const x = te[P * 3], A = te[P * 3 + 1];
        te[P * 3 + 2];
        const C = zd(x, A);
        o.expandByPoint(new be(C.x, C.y, C.z)), v.x += C.x, v.y += C.y, v.z += C.z;
      }
      p += m;
      const D = (_c2 = R.getIndices()) == null ? void 0 : _c2.getArray(), z = (P) => new be(te[P * 3], te[P * 3 + 1], te[P * 3 + 2]);
      if (D) for (let P = 0; P + 2 < D.length; P += 3) {
        const x = z(D[P]), A = z(D[P + 1]), C = z(D[P + 2]);
        r += Lo(x, A, C), l += Oo(_, x, A, C), u += 1;
      }
      else for (let P = 0; P + 2 < m; P += 3) {
        const x = z(P), A = z(P + 1), C = z(P + 2);
        r += Lo(x, A, C), l += Oo(_, x, A, C), u += 1;
      }
    }
    if (p === 0) return n;
    const w = o.min, b = o.max;
    n.boundingBoxMin = {
      x: w.x,
      y: w.y,
      z: w.z
    }, n.boundingBoxMax = {
      x: b.x,
      y: b.y,
      z: b.z
    }, n.dimensionX = b.x - w.x, n.dimensionY = b.y - w.y, n.dimensionZ = b.z - w.z;
    const N = n.dimensionX ?? 0, L = n.dimensionY ?? 0, U = n.dimensionZ ?? 0;
    if (n.characteristicLength = Math.cbrt(N * L * U) || 0, n.footprintArea = N * U, n.totalSurfaceArea = r, n.vertexCount = p, n.faceCount = u, n.centroid = {
      x: v.x / p,
      y: v.y / p,
      z: v.z / p
    }, l = Math.abs(l), l > 1e-20 && (n.enclosedVolume = l, r > 0 && (n.surfaceToVolumeRatio = r / l), r > 0)) {
      const $ = Math.PI ** 0.3333333333333333 * (6 * l) ** 0.6666666666666666 / r;
      n.sphericity = Math.min(1, Math.max(0, $));
    }
    L > 1e-10 && N > 1e-10 && (n.aspectRatioXy = N / L), U > 1e-10 && N > 1e-10 && (n.aspectRatioXz = N / U), U > 1e-10 && L > 1e-10 && (n.aspectRatioYz = L / U);
    const j = Math.max(N, L, U);
    return j > 1e-10 && r > 0 && (n.slenderness = j / Math.cbrt(r * j)), n.eulerCharacteristic = Math.round(p - 3 * u / 2 + u), n;
  };
  mt = class {
    constructor(e) {
      __publicField(this, "kit");
      __publicField(this, "listeners", /* @__PURE__ */ new Set());
      __publicField(this, "undoStack", []);
      __publicField(this, "redoStack", []);
      __publicField(this, "dirty", false);
      __publicField(this, "disposed", false);
      __publicField(this, "status", "ready");
      __publicField(this, "transacting", false);
      __publicField(this, "transactionDiffs", []);
      this.kit = e;
    }
    getSnapshot() {
      return {
        kit: this.kit,
        sync: {
          status: this.status,
          dirty: this.dirty,
          readonly: false
        }
      };
    }
    subscribe(e) {
      return this.listeners.add(e), () => {
        this.listeners.delete(e);
      };
    }
    transact(e, i) {
      const n = this.kit;
      this.transacting = true, this.transactionDiffs = [];
      try {
        const o = i(), r = this.kit;
        if (n !== r) {
          const l = pt(n, r), p = $t(n, l);
          this.undoStack.push({
            forward: l,
            backward: p
          }), this.redoStack = [];
        }
        return o;
      } finally {
        this.transacting = false, this.transactionDiffs = [];
      }
    }
    apply(e, i) {
      const n = this.kit;
      if (this.kit = ht(this.kit, e), this.dirty = true, !this.transacting && !this.disposed) {
        const o = pt(n, this.kit), r = $t(n, o);
        this.undoStack.push({
          forward: o,
          backward: r
        }), this.redoStack = [];
      }
      this.notify();
    }
    replace(e, i) {
      const n = this.kit;
      if (this.kit = e, this.dirty = true, !this.transacting && !this.disposed) {
        const o = pt(n, e), r = $t(n, o);
        this.undoStack.push({
          forward: o,
          backward: r
        }), this.redoStack = [];
      }
      this.notify();
    }
    async save() {
      this.dirty = false, this.notify();
    }
    async reload() {
      this.notify();
    }
    dispose() {
      this.disposed = true, this.listeners.clear(), this.undoStack = [], this.redoStack = [];
    }
    canUndo() {
      return this.undoStack.length > 0;
    }
    canRedo() {
      return this.redoStack.length > 0;
    }
    undo() {
      const e = this.undoStack.pop();
      e && (this.kit = ht(this.kit, e.backward), this.redoStack.push(e), this.dirty = true, this.notify());
    }
    redo() {
      const e = this.redoStack.pop();
      e && (this.kit = ht(this.kit, e.forward), this.undoStack.push(e), this.dirty = true, this.notify());
    }
    notify() {
      for (const e of this.listeners) e();
    }
  };
  let Vd;
  Fs = (t, e, i) => {
    var _a3;
    const n = lt(t, e);
    if (!n.ok) throw new Error(n.errors.map((u) => u.message).join("; "));
    const o = (_a3 = n.change.get(i)) == null ? void 0 : _a3.parentPieceId;
    if (!o) throw new Error(`Piece ${i} has no parent piece and connection`);
    const r = Tt(t, e), p = cc(r, i).find((u) => (u.connected.piece.guid === i ? u.connecting.piece.guid : u.connected.piece.guid) === o);
    if (!p) throw new Error(`No connection found from piece ${i} to parent piece ${o}`);
    return p;
  };
  Hd = (t, e, i) => {
    var _a3, _b, _c2;
    const n = Tt(t, e);
    let o = 0;
    for (const r of n.pieces ?? []) {
      const l = (_a3 = r.props) == null ? void 0 : _a3.find((p) => {
        var _a4;
        return ((_a4 = p.quality) == null ? void 0 : _a4.guid) === i;
      });
      if (l) {
        const p = parseFloat(l.value);
        isNaN(p) || (o += p);
        continue;
      }
      if (r.type) {
        const p = (_b = t.types) == null ? void 0 : _b.find((u) => u.guid === r.type.guid);
        if (p) {
          const u = (_c2 = p.props) == null ? void 0 : _c2.find((v) => {
            var _a4;
            return ((_a4 = v.quality) == null ? void 0 : _a4.guid) === i;
          });
          if (u) {
            const v = parseFloat(u.value);
            isNaN(v) || (o += v);
          }
        }
      }
    }
    return o;
  };
  lt = (t, e) => {
    var _a3, _b, _c2, _d2, _e;
    const i = Tt(t, e);
    if (!i) return Rn([
      {
        code: "pieces-metadata.design-not-found",
        message: `Design ${e} not found in kit ${t.name}`
      }
    ]);
    const n = at(t, e);
    if (!n.ok) return {
      ok: false,
      errors: n.errors
    };
    const o = it(i, n.change.forward), r = (_a3 = o.pieces) == null ? void 0 : _a3.map((v) => xi(v, "semio.fixedPieceId", v.guid) || v.guid), l = (_b = o.pieces) == null ? void 0 : _b.map((v) => xi(v, "semio.parentPieceId", null)), p = (_c2 = o.pieces) == null ? void 0 : _c2.map((v) => parseInt(xi(v, "semio.depth", "0"))), u = (_d2 = o.pieces) == null ? void 0 : _d2.map((v) => {
      const _ = xi(v, "semio.path", v.guid);
      return _ ? _.split(",").filter(Boolean) : [
        v.guid
      ];
    });
    return ui(new Map((_e = o.pieces) == null ? void 0 : _e.map((v, _) => [
      v.guid,
      {
        plane: v.plane,
        center: v.center,
        fixedPieceId: r[_],
        parentPieceId: l[_],
        depth: p[_],
        path: u[_]
      }
    ])), n.warnings, n.infos);
  };
  xi = (t, e, i) => {
    var _a3;
    const n = (_a3 = t.attributes) == null ? void 0 : _a3.find((o) => o.key === e);
    if (!n && i === void 0) throw new Error(`Attribute ${e} not found in ${t}`);
    return (n == null ? void 0 : n.value) === void 0 && i === null ? null : (n == null ? void 0 : n.value) ?? i ?? "";
  };
  Vd = (t) => {
    if (!t || t === "") return "var(--foreground)";
    let e = 0;
    for (let r = 0; r < t.length; r++) {
      const l = t.charCodeAt(r);
      e = (e << 5) - e + l, e = e & e;
    }
    const i = [
      {
        base: "var(--accent)",
        variations: [
          "color-mix(in srgb, var(--accent) 85%, var(--base) 15%)",
          "color-mix(in srgb, var(--accent) 70%, var(--base) 30%)",
          "color-mix(in srgb, var(--accent) 60%, var(--foreground) 40%)",
          "color-mix(in srgb, var(--accent) 45%, var(--foreground) 55%)"
        ]
      },
      {
        base: "var(--accent-secondary)",
        variations: [
          "color-mix(in srgb, var(--accent-secondary) 85%, var(--base) 15%)",
          "color-mix(in srgb, var(--accent-secondary) 70%, var(--base) 30%)",
          "color-mix(in srgb, var(--accent-secondary) 60%, var(--foreground) 40%)",
          "color-mix(in srgb, var(--accent-secondary) 45%, var(--foreground) 55%)"
        ]
      },
      {
        base: "var(--accent-tertiary)",
        variations: [
          "color-mix(in srgb, var(--accent-tertiary) 85%, var(--base) 15%)",
          "color-mix(in srgb, var(--accent-tertiary) 70%, var(--base) 30%)",
          "color-mix(in srgb, var(--accent-tertiary) 60%, var(--foreground) 40%)",
          "color-mix(in srgb, var(--accent-tertiary) 45%, var(--foreground) 55%)"
        ]
      },
      {
        base: "var(--status-success)",
        variations: [
          "color-mix(in srgb, var(--status-success) 85%, var(--base) 15%)",
          "color-mix(in srgb, var(--status-success) 70%, var(--base) 30%)",
          "color-mix(in srgb, var(--status-success) 60%, var(--foreground) 40%)",
          "color-mix(in srgb, var(--status-success) 45%, var(--foreground) 55%)"
        ]
      },
      {
        base: "var(--status-warning)",
        variations: [
          "color-mix(in srgb, var(--status-warning) 85%, var(--base) 15%)",
          "color-mix(in srgb, var(--status-warning) 70%, var(--base) 30%)",
          "color-mix(in srgb, var(--status-warning) 60%, var(--foreground) 40%)",
          "color-mix(in srgb, var(--status-warning) 45%, var(--foreground) 55%)"
        ]
      },
      {
        base: "var(--status-info)",
        variations: [
          "color-mix(in srgb, var(--status-info) 85%, var(--base) 15%)",
          "color-mix(in srgb, var(--status-info) 70%, var(--base) 30%)",
          "color-mix(in srgb, var(--status-info) 60%, var(--foreground) 40%)",
          "color-mix(in srgb, var(--status-info) 45%, var(--foreground) 55%)"
        ]
      }
    ], n = Math.abs(e) % i.length, o = Math.abs(Math.floor(e / i.length)) % i[n].variations.length;
    return i[n].variations[o];
  };
  nu = (t) => {
    const e = [];
    for (const i of t) {
      const n = (i.connectors || []).map((o) => {
        var _a3;
        return {
          ...o,
          attributes: [
            ...o.attributes || [],
            {
              guid: Yt(),
              key: "semio.color",
              value: Vd((_a3 = o.port) == null ? void 0 : _a3.guid)
            }
          ]
        };
      });
      e.push({
        type: {
          guid: i.guid
        },
        diff: {
          connectors: {
            added: n
          }
        }
      });
    }
    return {
      updated: e
    };
  };
  ou = (t, e) => {
    const i = /* @__PURE__ */ new Map();
    t.forEach((p) => {
      var _a3;
      const u = (_a3 = p.parent) == null ? void 0 : _a3.guid;
      i.has(u) || i.set(u, []), i.get(u).push(p);
    });
    const n = /* @__PURE__ */ new Map();
    e.forEach((p) => {
      var _a3;
      const u = (_a3 = p.folder) == null ? void 0 : _a3.guid;
      n.has(u) || n.set(u, []), n.get(u).push(p);
    });
    const o = (p) => (p || []).slice().sort((u, v) => u.name.localeCompare(v.name)), r = (p) => (p || []).slice().sort((u, v) => u.name.localeCompare(v.name)), l = (p, u) => {
      const v = [];
      return o(i.get(p)).forEach((b) => {
        const N = b.guid;
        v.push({
          name: b.name,
          path: N,
          parentPath: u,
          isDirectory: true,
          folderGuid: b.guid,
          children: l(b.guid, N)
        });
      }), r(n.get(p)).forEach((b) => {
        v.push({
          name: b.name,
          path: b.guid,
          parentPath: u,
          isDirectory: false,
          children: [],
          file: b
        });
      }), v;
    };
    return l(void 0, void 0);
  };
  qd = (t, e = 0, i = /* @__PURE__ */ new Set()) => {
    const n = [];
    return t.forEach((o) => {
      const r = i.has(`file-${o.path}`);
      n.push({
        ...o,
        level: e,
        isExpanded: r
      }), o.isDirectory && r && o.children.length > 0 && n.push(...qd(o.children, e + 1, i));
    }), n;
  };
  if (typeof globalThis.__vitest_worker__ < "u" && typeof process < "u" && ir.SEMIO_JS_RUN_EMBEDDED_TESTS === "1") {
    const { beforeAll: t, describe: e, expect: i, it: n, vi: o } = await we(async () => {
      const { beforeAll: s, describe: c, expect: a, it: d, vi: g } = await import("./index-BdKIhndk.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      });
      return {
        beforeAll: s,
        describe: c,
        expect: a,
        it: d,
        vi: g
      };
    }, __vite__mapDeps([5,6]), import.meta.url), { createElement: r } = await we(async () => {
      const { createElement: s } = await import("./index-gBZ811w6.js").then((c) => c.R);
      return {
        createElement: s
      };
    }, __vite__mapDeps([7,1,8]), import.meta.url), { renderToStaticMarkup: l } = await we(async () => {
      const { renderToStaticMarkup: s } = await import("./server.browser-CwBZcUlj.js").then((c) => c.s);
      return {
        renderToStaticMarkup: s
      };
    }, __vite__mapDeps([9,8]), import.meta.url), p = await we(() => import("./index-BOTK57Qr.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((s) => s.bL), __vite__mapDeps([10,6,11,7,1,8,9,4,12,13,14]), import.meta.url), { buildControlTree: u, Action: v } = p, { DragDesign: _, DragDiffDesign: w, DragOffset: b, DragPieces: N, MoveDiffDesign: L, MoveVector: U, InvalidKit: j, InvalidKitValidation: $, MetabolismKit: R, MetabolismKitDiff: I, MetabolismKitDiffed: te, MetabolismKitDiffInverted: m, MetabolismKitFilteredNakaginCapsuleTower: D, ModelSelectionCases: z, NakaginCapsuleTowerFilteredKit: P, MetabolismMetaKit: x, MetabolismShallowKit: A, TambourMetaType: C, TambourShallowType: G, NakaginCapsuleTowerMetaDesign: ee, NakaginCapsuleTowerShallowDesign: ge, NakaginCapsuleTowerDeletedDesignDiff: ue, NakaginCapsuleTowerDeletedSelection: V, NakaginCapsuleTowerCopySelection: he, NakaginCapsuleTowerCopyDesign: pe, NakaginCapsuleTowerPasteDesignDiff: ye, NakaginCapsuleTowerPasteDesign: _e, NakaginCapsuleTowerPasteWithCoordDesignDiff: y, NakaginCapsuleTowerDiffDesign: E, NakaginCapsuleTowerWithDiffDesign: ie, ValidateKitDiffCases: ne } = await we(async () => {
      const { DragDesign: s, DragDiffDesign: c, DragOffset: a, DragPieces: d, MoveDiffDesign: g, MoveVector: f, InvalidKit: h, InvalidKitValidation: T, MetabolismKit: k, MetabolismKitDiff: S, MetabolismKitDiffed: B, MetabolismKitDiffInverted: M, MetabolismKitFilteredNakaginCapsuleTower: O, ModelSelectionCases: q, NakaginCapsuleTowerFilteredKit: F, MetabolismMetaKit: Z, MetabolismShallowKit: se, TambourMetaType: Se, TambourShallowType: ve, NakaginCapsuleTowerMetaDesign: de, NakaginCapsuleTowerShallowDesign: ce, NakaginCapsuleTowerDeletedDesignDiff: fe, NakaginCapsuleTowerDeletedSelection: xe, NakaginCapsuleTowerCopySelection: Pe, NakaginCapsuleTowerCopyDesign: Ce, NakaginCapsuleTowerPasteDesignDiff: De, NakaginCapsuleTowerPasteDesign: Me, NakaginCapsuleTowerPasteWithCoordDesignDiff: Te, NakaginCapsuleTowerDiffDesign: Je, NakaginCapsuleTowerWithDiffDesign: Ye, ValidateKitDiffCases: Ot } = await import("./index-DqQ9HAJ-.js");
      return {
        DragDesign: s,
        DragDiffDesign: c,
        DragOffset: a,
        DragPieces: d,
        MoveDiffDesign: g,
        MoveVector: f,
        InvalidKit: h,
        InvalidKitValidation: T,
        MetabolismKit: k,
        MetabolismKitDiff: S,
        MetabolismKitDiffed: B,
        MetabolismKitDiffInverted: M,
        MetabolismKitFilteredNakaginCapsuleTower: O,
        ModelSelectionCases: q,
        NakaginCapsuleTowerFilteredKit: F,
        MetabolismMetaKit: Z,
        MetabolismShallowKit: se,
        TambourMetaType: Se,
        TambourShallowType: ve,
        NakaginCapsuleTowerMetaDesign: de,
        NakaginCapsuleTowerShallowDesign: ce,
        NakaginCapsuleTowerDeletedDesignDiff: fe,
        NakaginCapsuleTowerDeletedSelection: xe,
        NakaginCapsuleTowerCopySelection: Pe,
        NakaginCapsuleTowerCopyDesign: Ce,
        NakaginCapsuleTowerPasteDesignDiff: De,
        NakaginCapsuleTowerPasteDesign: Me,
        NakaginCapsuleTowerPasteWithCoordDesignDiff: Te,
        NakaginCapsuleTowerDiffDesign: Je,
        NakaginCapsuleTowerWithDiffDesign: Ye,
        ValidateKitDiffCases: Ot
      };
    }, __vite__mapDeps([15,16,17,18,19,13,7,1,8,20]), import.meta.url), { createFolderKitStore: W, createJsonFileKitStore: oe } = await we(async () => {
      const { createFolderKitStore: s, createJsonFileKitStore: c } = await import("./index-DwjF_IIt.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      });
      return {
        createFolderKitStore: s,
        createJsonFileKitStore: c
      };
    }, __vite__mapDeps([21,6,22,23,11,7,1,8,24,10,9,4,12,13,14,25,26,20]), import.meta.url), J = 1e-3, Y = (s, c) => !s || !c || !s.origin || !c.origin || !s.xAxis || !c.xAxis || !s.yAxis || !c.yAxis ? false : Math.abs(s.origin.x - c.origin.x) < J && Math.abs(s.origin.y - c.origin.y) < J && Math.abs(s.origin.z - c.origin.z) < J && Math.abs(s.xAxis.x - c.xAxis.x) < J && Math.abs(s.xAxis.y - c.xAxis.y) < J && Math.abs(s.xAxis.z - c.xAxis.z) < J && Math.abs(s.yAxis.x - c.yAxis.x) < J && Math.abs(s.yAxis.y - c.yAxis.y) < J && Math.abs(s.yAxis.z - c.yAxis.z) < J, ae = (s, c) => !s || !c ? s === c : Math.abs(s.u - c.u) < J && Math.abs(s.v - c.v) < J, ut = (s, c, a) => {
      var _a3, _b;
      let d;
      if (a) {
        const f = (_a3 = s.designs) == null ? void 0 : _a3.find((h) => h.name === a);
        if (!f) throw new Error(`Parent ${a} not found`);
        d = f.guid;
      }
      const g = (_b = s.designs) == null ? void 0 : _b.find((f) => {
        var _a4;
        return f.name === c && (d ? ((_a4 = f.parent) == null ? void 0 : _a4.guid) === d : !f.parent);
      });
      if (!g) throw new Error(`Design ${c} not found`);
      return g;
    }, Ve = async () => {
      const { dirname: s, resolve: c } = await we(async () => {
        const { dirname: h, resolve: T } = await import("./__vite-browser-external-D7Ct-6yo.js").then((k) => k._);
        return {
          dirname: h,
          resolve: T
        };
      }, [], import.meta.url), { fileURLToPath: a } = await we(async () => {
        const { fileURLToPath: h } = await import("./__vite-browser-external-D7Ct-6yo.js").then((T) => T._);
        return {
          fileURLToPath: h
        };
      }, [], import.meta.url), d = a(import.meta.url), g = s(d), f = c(g, "../../reports/export-design-model");
      return {
        __filename: d,
        __dirname: g,
        EXPORT_REPORTS_DIR: f,
        dirname: s,
        resolve: c
      };
    }, tt = async (s, c) => {
      const { mkdirSync: a, writeFileSync: d } = await we(async () => {
        const { mkdirSync: T, writeFileSync: k } = await import("./__vite-browser-external-D7Ct-6yo.js").then((S) => S._);
        return {
          mkdirSync: T,
          writeFileSync: k
        };
      }, [], import.meta.url), { EXPORT_REPORTS_DIR: g, resolve: f } = await Ve();
      a(g, {
        recursive: true
      });
      const h = f(g, `${s}.gltf`);
      return d(h, c), h;
    }, Ke = (s) => {
      const c = Math.round(s * 1e4) / 1e4;
      return Object.is(c, -0) ? 0 : c;
    }, mi = (s) => {
      if (s.matrix) return s.matrix.map((Pe) => Ke(Pe));
      const c = s.translation ?? [
        0,
        0,
        0
      ], a = s.rotation ?? [
        0,
        0,
        0,
        1
      ], d = s.scale ?? [
        1,
        1,
        1
      ], [g, f, h, T] = a, k = g + g, S = f + f, B = h + h, M = g * k, O = g * S, q = g * B, F = f * S, Z = f * B, se = h * B, Se = T * k, ve = T * S, de = T * B, ce = d[0], fe = d[1], xe = d[2];
      return [
        Ke((1 - (F + se)) * ce),
        Ke((O + de) * ce),
        Ke((q - ve) * ce),
        0,
        Ke((O - de) * fe),
        Ke((1 - (M + se)) * fe),
        Ke((Z + Se) * fe),
        0,
        Ke((q + ve) * xe),
        Ke((Z - Se) * xe),
        Ke((1 - (M + F)) * xe),
        0,
        Ke(c[0]),
        Ke(c[1]),
        Ke(c[2]),
        1
      ];
    }, hi = (s) => {
      var _a3;
      const c = JSON.parse(s), a = c.nodes ?? [], d = ((_a3 = c.scenes) == null ? void 0 : _a3[c.scene ?? 0]) ?? {
        nodes: []
      }, g = a.map((S, B) => S.name ?? `__node_${B}`), f = /* @__PURE__ */ new Map();
      for (const S of g) f.set(S, null);
      for (let S = 0; S < a.length; S += 1) for (const B of a[S].children ?? []) f.set(g[B], g[S]);
      let h = [
        ...d.nodes ?? []
      ].map((S) => g[S]).sort(), T = a.map((S, B) => ({
        name: g[B],
        parent: f.get(g[B]) ?? null,
        children: [
          ...S.children ?? []
        ].map((M) => g[M]).sort(),
        hasMesh: S.mesh !== void 0,
        matrix: mi(S)
      })).sort((S, B) => S.name.localeCompare(B.name));
      const k = T.find((S) => S.name === "world");
      if (k && !k.hasMesh && k.parent === null && k.children.length === 1 && h.length === 1 && h[0] === "world" && k.matrix.every((S, B) => S === [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ][B])) {
        const S = k.children[0];
        h = [
          S
        ], T = T.filter((B) => B.name !== "world").map((B) => B.name === S ? {
          ...B,
          parent: null
        } : B);
      }
      return {
        roots: h,
        nodes: T
      };
    }, Ut = async (s, c, a) => {
      const { execFileSync: d } = await we(async () => {
        const { execFileSync: f } = await import("./__vite-browser-external-D7Ct-6yo.js").then((h) => h._);
        return {
          execFileSync: f
        };
      }, [], import.meta.url);
      let g;
      for (let f = 1; f <= 2; f++) try {
        d(s, c, {
          cwd: a,
          stdio: "pipe"
        });
        return;
      } catch (h) {
        if (g = h, f === 2) break;
      }
      throw g;
    }, yi = async (s) => {
      const c = JSON.parse(s), a = {}, d = (f) => {
        if (!(f == null ? void 0 : f.startsWith("data:"))) return;
        const h = f.slice(f.indexOf(",") + 1);
        a[f] = new Uint8Array(Buffer.from(h, "base64"));
      };
      for (const f of c.buffers ?? []) d(f.uri);
      for (const f of c.images ?? []) d(f.uri);
      return new On().readJSON({
        json: c,
        resources: a
      });
    }, Rt = (s) => (JSON.parse(s).meshes ?? []).map((a) => a.name).filter((a) => !!a);
    e("KitDiffValidation", () => {
      const s = ne, c = Nt.parse(s.tinyKit);
      for (const a of s.cases) n(`asset case ${a.id}`, () => {
        const d = Ao(c, a.diff, false);
        i(d.ok).toBe(a.expectOk);
        const g = d.errors.map((h) => h.code).filter(Boolean), f = d.warnings.map((h) => h.code).filter(Boolean);
        for (const h of a.errorCodes) i(g).toContain(h);
        for (const h of a.warningCodes) i(f).toContain(h);
      });
      n("heal drops invalid design update", () => {
        var _a3, _b;
        const d = Ao(c, {
          designs: {
            updated: [
              {
                design: {
                  guid: "99999999-9999-9999-9999-999999999999"
                },
                diff: {
                  name: "X"
                }
              }
            ]
          }
        }, true);
        i(((_b = (_a3 = d.diff) == null ? void 0 : _a3.designs) == null ? void 0 : _b.updated) ?? []).toHaveLength(0);
      });
    }), e("Change", () => {
      e("Metabolism", () => {
        var _a3;
        const s = {
          ...R,
          designs: (_a3 = R.designs) == null ? void 0 : _a3.filter((g) => !g.parent)
        }, c = I, a = m, d = te;
        n("Kit + Change.Forward = DiffedKit & DiffedKit + Change.Backward = Kit", () => {
          const g = sd(s, d), f = pt(s, d);
          i(_i(f, c)).toBe(true);
          const h = $t(s, g.forward);
          i(_i(h, a)).toBe(true), i(_i(g.forward, c)).toBe(true), i(_i(g.backward, a)).toBe(true);
          const T = ht(s, g.forward);
          i(ei(T, d)).toBe(true);
          const k = ht(d, g.backward);
          i(ei(k, s)).toBe(true);
        }), e("Design/Model", () => {
          n("selectBestModel uses tag filtering + modified jaccard and matches shared semio asset cases", () => {
            z.cases.forEach((f) => {
              const h = f.models.map((k) => ({
                guid: k.guid,
                file: {
                  guid: k.fileGuid
                },
                tags: k.tagGuids.map((S) => ({
                  guid: S
                }))
              })), T = Gn(h, f.selectedTagGuids);
              i((T == null ? void 0 : T.guid) ?? null).toBe(f.expectedGuid);
            });
          });
        });
      });
    }), e("Kit/Filter/Design", () => {
      var _a3;
      const s = R, c = P, a = (_a3 = s.designs) == null ? void 0 : _a3.find((d) => d.name === "Nakagin Capsule Tower" && !d.parent);
      n("filters kit to only contain entities related to Nakagin Capsule Tower design", () => {
        var _a4, _b, _c2, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2, _p, _q;
        i(a).toBeDefined();
        const d = Et(s, {
          designGuid: a.guid
        });
        i((_a4 = d.designs) == null ? void 0 : _a4.length).toBe(c.designs.length), i((_b = d.types) == null ? void 0 : _b.length).toBe(c.types.length), i((_c2 = d.files) == null ? void 0 : _c2.length).toBe(c.files.length), i((_d2 = d.ports) == null ? void 0 : _d2.length).toBe(c.ports.length), i((_e2 = d.qualities) == null ? void 0 : _e2.length).toBe(c.qualities.length), i((_f = d.authors) == null ? void 0 : _f.length).toBe(c.authors.length);
        const g = (_g = d.designs) == null ? void 0 : _g.find((f) => f.guid === a.guid);
        i(g).toBeDefined(), i((_h = g.pieces) == null ? void 0 : _h.length).toBe((_i2 = a.pieces) == null ? void 0 : _i2.length);
        for (const f of c.types) {
          const h = (_j = d.types) == null ? void 0 : _j.find((T) => T.guid === f.guid);
          i(h).toBeDefined(), i(((_k = h.models) == null ? void 0 : _k.length) ?? 0).toBe(((_l = f.models) == null ? void 0 : _l.length) ?? 0);
        }
        for (const f of g.pieces ?? []) ((_m = f.type) == null ? void 0 : _m.guid) && i((_n2 = d.types) == null ? void 0 : _n2.some((h) => h.guid === f.type.guid)).toBe(true);
        for (const f of d.types ?? []) {
          i((f.models ?? []).length).toBeLessThanOrEqual(1);
          for (const h of f.models ?? []) i((_o2 = d.files) == null ? void 0 : _o2.some((T) => T.guid === h.file.guid)).toBe(true);
          for (const h of f.connectors ?? []) ((_p = h.port) == null ? void 0 : _p.guid) && i((_q = d.ports) == null ? void 0 : _q.some((T) => T.guid === h.port.guid)).toBe(true);
        }
      }), n("preserves kit metadata", () => {
        const d = Et(s, {
          designGuid: a.guid
        });
        i(d.guid).toBe(s.guid), i(d.name).toBe(s.name), i(d.version).toBe(s.version);
      });
    }), e("Kit/Filter/Glob", () => {
      n("globMatch matches wildcard patterns", () => {
        i(gt("Nakagin Capsule Tower", "Nakagin*")).toBe(true), i(gt("Nakagin Capsule Tower", "*Tower")).toBe(true), i(gt("Nakagin Capsule Tower", "*Capsule*")).toBe(true), i(gt("Nakagin Capsule Tower", "Nakagin Capsule Tower")).toBe(true), i(gt("Nakagin Capsule Tower", "Other*")).toBe(false), i(gt("Wall", "W?ll")).toBe(true), i(gt("Wall", "W??l")).toBe(true), i(gt("Wall", "W????")).toBe(false);
      }), n("globMatch is case-insensitive", () => {
        i(gt("Wall", "wall")).toBe(true), i(gt("wall", "WALL")).toBe(true), i(gt("Nakagin Capsule Tower", "nakagin*")).toBe(true);
      }), n("matchesGlobFilter with include only", () => {
        i(Ue("Wall", {
          include: [
            "Wall"
          ]
        })).toBe(true), i(Ue("Column", {
          include: [
            "Wall"
          ]
        })).toBe(false), i(Ue("Wall", {
          include: [
            "W*",
            "C*"
          ]
        })).toBe(true), i(Ue("Column", {
          include: [
            "W*",
            "C*"
          ]
        })).toBe(true), i(Ue("Beam", {
          include: [
            "W*",
            "C*"
          ]
        })).toBe(false);
      }), n("matchesGlobFilter with exclude only", () => {
        i(Ue("Wall", {
          exclude: [
            "Wall"
          ]
        })).toBe(false), i(Ue("Column", {
          exclude: [
            "Wall"
          ]
        })).toBe(true), i(Ue("Wall", {
          exclude: [
            "*all"
          ]
        })).toBe(false);
      }), n("matchesGlobFilter with include and exclude", () => {
        i(Ue("Wall", {
          include: [
            "W*"
          ],
          exclude: [
            "Wall"
          ]
        })).toBe(false), i(Ue("Window", {
          include: [
            "W*"
          ],
          exclude: [
            "Wall"
          ]
        })).toBe(true);
      }), n("matchesGlobFilter with no filter returns true", () => {
        i(Ue("anything")).toBe(true), i(Ue("anything", void 0)).toBe(true);
      }), n("filterKit with type glob include filters types by name", () => {
        var _a3, _b, _c2;
        const s = R, c = ((_a3 = s.types) == null ? void 0 : _a3.length) ?? 0;
        i(c).toBeGreaterThan(0);
        const a = Et(s, {
          types: {
            include: [
              "Capsule*"
            ]
          }
        });
        i(((_b = a.types) == null ? void 0 : _b.length) ?? 0).toBeGreaterThan(0), i(((_c2 = a.types) == null ? void 0 : _c2.length) ?? 0).toBeLessThan(c);
        for (const d of a.types ?? []) i(d.name.toLowerCase().startsWith("capsule")).toBe(true);
      }), n("filterKit with type glob exclude filters out matching types", () => {
        var _a3, _b;
        const s = R, c = ((_a3 = s.types) == null ? void 0 : _a3.length) ?? 0, a = Et(s, {
          types: {
            exclude: [
              "Capsule*"
            ]
          }
        });
        i(((_b = a.types) == null ? void 0 : _b.length) ?? 0).toBeLessThan(c);
        for (const d of a.types ?? []) i(d.name.toLowerCase().startsWith("capsule")).toBe(false);
      }), n("filterKit with design glob include filters designs by name", () => {
        var _a3;
        const c = Et(R, {
          designs: {
            include: [
              "Nakagin*"
            ]
          }
        });
        i(((_a3 = c.designs) == null ? void 0 : _a3.length) ?? 0).toBeGreaterThan(0);
        for (const a of c.designs ?? []) i(gt(a.name, "Nakagin*")).toBe(true);
      }), n("filterKit with no filter returns kit unchanged", () => {
        var _a3, _b, _c2, _d2, _e2, _f;
        const s = R, c = Et(s, {});
        i((_a3 = c.types) == null ? void 0 : _a3.length).toBe((_b = s.types) == null ? void 0 : _b.length), i((_c2 = c.designs) == null ? void 0 : _c2.length).toBe((_d2 = s.designs) == null ? void 0 : _d2.length), i((_e2 = c.ports) == null ? void 0 : _e2.length).toBe((_f = s.ports) == null ? void 0 : _f.length);
      }), n("filterKit combines designGuid with glob filters", () => {
        var _a3, _b, _c2;
        const s = R, c = (_a3 = s.designs) == null ? void 0 : _a3.find((g) => g.name === "Nakagin Capsule Tower" && !g.parent);
        i(c).toBeDefined();
        const a = Et(s, {
          designGuid: c.guid
        }), d = Et(s, {
          designGuid: c.guid,
          types: {
            exclude: [
              "Capsule*"
            ]
          }
        });
        i(((_b = d.types) == null ? void 0 : _b.length) ?? 0).toBeLessThan(((_c2 = a.types) == null ? void 0 : _c2.length) ?? 0);
        for (const g of d.types ?? []) i(g.name.toLowerCase().startsWith("capsule")).toBe(false);
      });
    }), e("KitKind", () => {
      n("KitKindSchema accepts all five valid kinds", () => {
        const s = [
          "file",
          "folder",
          "archive",
          "remote",
          "temporary"
        ];
        for (const c of s) i(zt.parse(c)).toBe(c);
      }), n("KitKindSchema rejects invalid values", () => {
        i(() => zt.parse("invalid")).toThrow(), i(() => zt.parse("")).toThrow(), i(() => zt.parse("json")).toThrow(), i(() => zt.parse("sqlite")).toThrow();
      }), n("ALL_KIT_KINDS contains exactly five entries", () => {
        i(Gt).toHaveLength(5), i(Gt).toContain("file"), i(Gt).toContain("folder"), i(Gt).toContain("archive"), i(Gt).toContain("remote"), i(Gt).toContain("temporary");
      }), n("KitKind type is assignable from literal strings", () => {
        i([
          "file",
          "folder",
          "archive",
          "remote",
          "temporary"
        ]).toEqual([
          "file",
          "folder",
          "archive",
          "remote",
          "temporary"
        ]);
      }), n("Kit/File: roundtrips through JSON serialize/deserialize", () => {
        const s = {
          guid: "file-kit-guid",
          name: "FileKit Test",
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, c = Kt(s), a = Ht(c);
        i(a.guid).toBe(s.guid), i(a.name).toBe(s.name);
      }), n("Kit/File: imports, exports and edits with file kit helpers", async () => {
        const s = {
          guid: "file-kit-helper-guid",
          name: "FileKit Helper Test",
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, c = Co(s), a = await oi(c);
        i(a.kind).toBe("file"), i(a.kit.guid).toBe(s.guid);
        const d = Bo(a.kit, {
          name: "FileKit Helper Edited"
        });
        i(d.name).toBe("FileKit Helper Edited"), i(a.kit.name).toBe("FileKit Helper Test");
      }), n("Kit/Folder: roundtrips through SQLite via FolderKitStore adapter", async () => {
        const s = {
          guid: "folder-kit-guid",
          name: "FolderKit Test",
          createdAt: "2026-01-01T00:00:00.000Z",
          updatedAt: "2026-01-01T00:00:00.000Z",
          types: [
            {
              guid: "t1",
              name: "Wall",
              createdAt: "2026-01-01T00:00:00.000Z",
              updatedAt: "2026-01-01T00:00:00.000Z"
            }
          ]
        }, c = await Vt(), a = new c.Database();
        await bi(s, a);
        const d = a.export();
        a.close();
        const g = new c.Database(new Uint8Array(d)), f = await Ln(g);
        g.close(), i(f.guid).toBe(s.guid), i(f.name).toBe(s.name), i(f.types).toHaveLength(1), i(f.types[0].name).toBe("Wall");
      }), n("Kit/Archive: roundtrips through zip export/import", async () => {
        const s = {
          guid: "archive-kit-guid",
          name: "ArchiveKit Test",
          createdAt: "2026-01-01T00:00:00.000Z",
          updatedAt: "2026-01-01T00:00:00.000Z",
          types: [
            {
              guid: "at1",
              name: "Beam",
              createdAt: "2026-01-01T00:00:00.000Z",
              updatedAt: "2026-01-01T00:00:00.000Z"
            }
          ]
        }, c = await ki(s), a = await Ti(c);
        i(a.kit.guid).toBe(s.guid), i(a.kit.name).toBe(s.name), i(a.kit.types).toHaveLength(1), i(a.kit.types[0].name).toBe("Beam");
      }), n("Kit/Remote: validates remote URL field on kit", () => {
        const s = {
          guid: "remote-kit-guid",
          name: "RemoteKit Test",
          remote: "https://example.com/metabolism.kit.json",
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, c = Nt.parse(s);
        i(c.remote).toBe("https://example.com/metabolism.kit.json");
        const a = Kt(s), d = Ht(a);
        i(d.remote).toBe(s.remote);
      }), n("Kit/Remote: imports remote JSON and archive sources", async () => {
        const s = {
          guid: "remote-json-kit-guid",
          name: "Remote JSON Kit",
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, c = {
          guid: "remote-archive-kit-guid",
          name: "Remote Archive Kit",
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, a = await ki(c), d = globalThis.fetch;
        globalThis.fetch = o.fn(async (g) => String(g).endsWith(".kit.json") ? new Response(Co(s), {
          status: 200,
          headers: {
            "content-type": "application/json"
          }
        }) : new Response(await a.arrayBuffer(), {
          status: 200,
          headers: {
            "content-type": "application/zip"
          }
        }));
        try {
          const g = await Nn("https://example.com/remote.kit.json");
          i(g.kind).toBe("remote"), i(g.kit.guid).toBe(s.guid);
          const f = await Nn("https://example.com/remote.kit.zip");
          i(f.kind).toBe("remote"), i(f.kit.guid).toBe(c.guid);
        } finally {
          globalThis.fetch = d;
        }
      }), n("Kit/Temporary: InMemoryKitStore roundtrip without persistence", () => {
        const s = {
          guid: "temp-kit-guid",
          name: "TemporaryKit Test",
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, c = new mt(s);
        i(c.getSnapshot().kit.guid).toBe("temp-kit-guid"), c.apply({
          name: "Modified Temporary"
        }), i(c.getSnapshot().kit.name).toBe("Modified Temporary"), c.undo(), i(c.getSnapshot().kit.name).toBe("TemporaryKit Test");
      }), n("Kit/Temporary: editTemporaryKit applies a diff without mutating the source", () => {
        const s = {
          guid: "temp-edit-kit-guid",
          name: "Temporary Editable Kit",
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, c = Bo(s, {
          name: "Temporary Editable Kit Edited"
        });
        i(c.name).toBe("Temporary Editable Kit Edited"), i(s.name).toBe("Temporary Editable Kit");
      });
    }), e("Kit/Filter/Design", () => {
      var _a3;
      const s = R, c = D, a = (_a3 = s.designs) == null ? void 0 : _a3.find((d) => d.name === "Nakagin Capsule Tower" && !d.parent);
      n("filters kit to only contain entities related to Nakagin Capsule Tower design", () => {
        var _a4, _b, _c2, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2, _p, _q;
        i(a).toBeDefined();
        const d = Et(s, {
          designGuid: a.guid
        });
        i((_a4 = d.designs) == null ? void 0 : _a4.length).toBe(c.designs.length), i((_b = d.types) == null ? void 0 : _b.length).toBe(c.types.length), i((_c2 = d.files) == null ? void 0 : _c2.length).toBe(c.files.length), i((_d2 = d.ports) == null ? void 0 : _d2.length).toBe(c.ports.length), i((_e2 = d.qualities) == null ? void 0 : _e2.length).toBe(c.qualities.length), i((_f = d.authors) == null ? void 0 : _f.length).toBe(c.authors.length);
        const g = (_g = d.designs) == null ? void 0 : _g.find((f) => f.guid === a.guid);
        i(g).toBeDefined(), i((_h = g.pieces) == null ? void 0 : _h.length).toBe((_i2 = a.pieces) == null ? void 0 : _i2.length);
        for (const f of c.types) {
          const h = (_j = d.types) == null ? void 0 : _j.find((T) => T.guid === f.guid);
          i(h).toBeDefined(), i(((_k = h.models) == null ? void 0 : _k.length) ?? 0).toBe(((_l = f.models) == null ? void 0 : _l.length) ?? 0);
        }
        for (const f of g.pieces ?? []) ((_m = f.type) == null ? void 0 : _m.guid) && i((_n2 = d.types) == null ? void 0 : _n2.some((h) => h.guid === f.type.guid)).toBe(true);
        for (const f of d.types ?? []) {
          for (const h of f.models ?? []) i((_o2 = d.files) == null ? void 0 : _o2.some((T) => T.guid === h.file.guid)).toBe(true);
          for (const h of f.connectors ?? []) ((_p = h.port) == null ? void 0 : _p.guid) && i((_q = d.ports) == null ? void 0 : _q.some((T) => T.guid === h.port.guid)).toBe(true);
        }
      }), n("preserves kit metadata", () => {
        const d = Et(s, {
          designGuid: a.guid
        });
        i(d.guid).toBe(s.guid), i(d.name).toBe(s.name), i(d.version).toBe(s.version);
      }), n("each type has at most one model", () => {
        const d = Et(s, {
          designGuid: a.guid
        });
        for (const g of d.types ?? []) i((g.models ?? []).length).toBeLessThanOrEqual(1);
      });
    }), e("Flatten", () => {
      const s = R, c = (a, d) => {
        var _a3, _b;
        const g = ut(s, a, d), f = (_a3 = s.designs) == null ? void 0 : _a3.find((k) => {
          var _a4;
          return k.name === "Flat" && ((_a4 = k.parent) == null ? void 0 : _a4.guid) === g.guid;
        });
        i(f).toBeDefined();
        const h = at(s, g.guid);
        if (i(h.ok).toBe(true), !h.ok) return;
        (_b = it(g, h.change.forward).pieces) == null ? void 0 : _b.forEach((k) => {
          var _a4;
          const S = (_a4 = f.pieces) == null ? void 0 : _a4.find((B) => B.name === k.name);
          i(S).toBeDefined(), i(k.plane).toBeDefined(), i(k.center).toBeDefined(), i(Y(k.plane, S.plane)).toBe(true), i(ae(k.center, S.center)).toBe(true);
        });
      };
      e("Nakagin Capsule Tower", () => {
        n("Kit -> Flatten -> Diff -> Apply = Flat", () => {
          c("Nakagin Capsule Tower");
        }), e("Slanted", () => {
          n("Kit -> Flatten -> Diff -> Apply = Flat", () => {
            c("Slanted", "Nakagin Capsule Tower");
          });
        }), e("Twisted", () => {
          n("Kit -> Flatten -> Diff -> Apply = Flat", () => {
            c("Twisted", "Nakagin Capsule Tower");
          });
        }), e("Dancing", () => {
          n("Kit -> Flatten -> Diff -> Apply = Flat", () => {
            c("Dancing", "Nakagin Capsule Tower");
          });
        });
      }), e("Capsule Dream", () => {
        n("Kit -> Flatten -> Diff -> Apply = Flat", () => {
          c("Capsule Dream");
        });
      }), n("forward diff lists every connection removal by guid and apply clears connections", () => {
        var _a3, _b, _c2;
        const a = ut(s, "Nakagin Capsule Tower"), d = ((_a3 = a.connections) == null ? void 0 : _a3.length) ?? 0;
        i(d).toBeGreaterThan(0);
        const g = at(s, a.guid);
        if (i(g.ok).toBe(true), !g.ok) return;
        const f = ((_b = g.change.forward.connections) == null ? void 0 : _b.removed) ?? [];
        i(f.length).toBe(d);
        const h = new Set(f.map((k) => k.guid));
        for (const k of a.connections ?? []) i(h.has(k.guid)).toBe(true);
        const T = it(JSON.parse(JSON.stringify(a)), g.change.forward);
        i(((_c2 = T.connections) == null ? void 0 : _c2.length) ?? 0).toBe(0);
      }), n("warns when a connected clump has no fixed piece and still flattens", () => {
        const g = {
          guid: "design-float",
          name: "Float",
          unit: "mm",
          pieces: [
            {
              guid: "floating-a",
              name: "A",
              type: {
                guid: "t1"
              }
            },
            {
              guid: "floating-b",
              name: "B",
              type: {
                guid: "t1"
              }
            }
          ],
          connections: [
            {
              guid: "c-ab",
              connected: {
                piece: {
                  guid: "floating-a"
                },
                connector: {
                  guid: "c1"
                }
              },
              connecting: {
                piece: {
                  guid: "floating-b"
                },
                connector: {
                  guid: "c2"
                }
              }
            }
          ],
          createdAt: "2025-01-01T00:00:00.000Z",
          updatedAt: "2025-01-01T00:00:00.000Z"
        }, h = at({
          name: "k",
          designs: [
            g
          ],
          types: [
            {
              guid: "t1",
              name: "T",
              unit: "mm",
              connectors: [
                {
                  guid: "c1",
                  point: {
                    x: 0,
                    y: 0,
                    z: 0
                  },
                  direction: {
                    x: 0,
                    y: 1,
                    z: 0
                  },
                  t: 0
                },
                {
                  guid: "c2",
                  point: {
                    x: 0,
                    y: 0,
                    z: 0
                  },
                  direction: {
                    x: 0,
                    y: 1,
                    z: 0
                  },
                  t: 0.5
                }
              ],
              createdAt: "2025-01-01T00:00:00.000Z",
              updatedAt: "2025-01-01T00:00:00.000Z"
            }
          ]
        }, g.guid);
        i(h.ok).toBe(true), h.ok && i(h.warnings.some((T) => T.code === "flatten.no-fixed-piece-in-clump")).toBe(true);
      });
    }), e("Roundtrip", () => {
      e("Metabolism", () => {
        n("Json -> Memory -> Json, Json -> Zip, Zip -> Json", async () => {
          const s = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((M) => M._), [], import.meta.url), c = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((M) => M._), [], import.meta.url), { __dirname: a } = await Ve(), d = R, g = Kt(d), f = Ht(g);
          i(ei(d, f)).toBe(true);
          const h = c.join(a, "../assets/semio/metabolism.zip"), T = s.readFileSync(h), { kit: k } = await Ti(T);
          i(ei(d, k)).toBe(true);
          const S = await ki(d), { kit: B } = await Ti(S);
          i(ei(d, B)).toBe(true);
        }, 6e4);
      });
    }), e("Validation", () => {
      e("Metabolism", () => {
        n("Metabolism Kit -> Validate = Empty report", () => {
          i(pd(ni(R))).toBe(false);
        });
      }), e("Invalid", () => {
        n("Invalid Kit -> Validate = Invalid Report", () => {
          const c = ni(j);
          i(Rd(c, $)).toBe(true);
        }), n("Plain descriptions do not create emoji validation problems", () => {
          const s = structuredClone(R);
          s.description = "Plain kit summary", s.types = (s.types ?? []).map((d, g) => ({
            ...d,
            description: `Repeated plain description ${g % 2}`
          }));
          const a = ni(s).problems.filter((d) => [
            "description-missing-emoji",
            "description-emoji-unique"
          ].includes(d.constraintId));
          i(a).toEqual([]);
        });
      });
    }), e("Cluster", () => {
      n("Cluster replacement uses design-guid designPiece and yields included design entry", () => {
        var _a3, _b, _c2;
        const s = {
          guid: "design-root",
          name: "Root",
          pieces: [
            {
              guid: "piece-a",
              type: {
                guid: "type-a"
              }
            },
            {
              guid: "piece-b",
              type: {
                guid: "type-b"
              }
            },
            {
              guid: "piece-c",
              type: {
                guid: "type-c"
              }
            }
          ],
          connections: [
            {
              guid: "conn-ab",
              connecting: {
                piece: {
                  guid: "piece-a"
                }
              },
              connected: {
                piece: {
                  guid: "piece-b"
                }
              }
            },
            {
              guid: "conn-bc",
              connecting: {
                piece: {
                  guid: "piece-b"
                }
              },
              connected: {
                piece: {
                  guid: "piece-c"
                }
              }
            }
          ],
          createdAt: "2025-01-01T00:00:00.000Z",
          updatedAt: "2025-01-01T00:00:00.000Z"
        }, { clusteredDesign: c, externalConnections: a } = oc(s, [
          "piece-a",
          "piece-b"
        ], "Cluster"), d = sc(s, [
          "piece-a",
          "piece-b"
        ], c, a), g = it(s, d.forward), f = (_a3 = g.connections) == null ? void 0 : _a3.find((T) => T.guid === "conn-bc");
        i((_b = f == null ? void 0 : f.connecting.designPiece) == null ? void 0 : _b.guid).toBe(c.guid), i((_c2 = f == null ? void 0 : f.connected.designPiece) == null ? void 0 : _c2.guid).toBeUndefined();
        const h = ac(g);
        i(h.length).toBe(1), i(h[0].guid).toBe(c.guid), i(h[0].designGuid).toBe(c.guid);
      });
    }), e("Drag", () => {
      n("Design + Pieces + Offset = DiffDesign", () => {
        var _a3, _b, _c2, _d2, _e2, _f;
        const s = _, c = N, a = b, d = w, g = Ct(s, c, a), f = (((_a3 = g.pieces) == null ? void 0 : _a3.updated) ?? []).sort((S, B) => S.piece.guid.localeCompare(B.piece.guid)), h = (((_b = d.pieces) == null ? void 0 : _b.updated) ?? []).sort((S, B) => S.piece.guid.localeCompare(B.piece.guid));
        i(f.length).toBe(h.length);
        for (let S = 0; S < f.length; S++) i(f[S].piece.guid).toBe(h[S].piece.guid), i((_c2 = f[S].diff.center) == null ? void 0 : _c2.u).toBe(h[S].diff.center.u), i((_d2 = f[S].diff.center) == null ? void 0 : _d2.v).toBe(h[S].diff.center.v);
        const T = (((_e2 = g.connections) == null ? void 0 : _e2.updated) ?? []).sort((S, B) => S.connection.guid.localeCompare(B.connection.guid)), k = (((_f = d.connections) == null ? void 0 : _f.updated) ?? []).sort((S, B) => S.connection.guid.localeCompare(B.connection.guid));
        i(T.length).toBe(k.length);
        for (let S = 0; S < T.length; S++) i(T[S].connection.guid).toBe(k[S].connection.guid), i(T[S].diff.u).toBe(k[S].diff.u), i(T[S].diff.v).toBe(k[S].diff.v);
      }), n("Nakagin Capsule Tower flattened piece drag uses piece center diff (flat design has no connections)", () => {
        var _a3, _b, _c2, _d2, _e2, _f;
        const s = R, c = s.designs.find((M) => M.name === "Nakagin Capsule Tower" && !M.parent), a = at(s, c.guid);
        if (i(a.ok).toBe(true), !a.ok) return;
        const d = it(JSON.parse(JSON.stringify(c)), a.change.forward);
        i((d.connections ?? []).length).toBe(0);
        const g = "9d18882e-d90b-40de-a171-47cb4564ffa6", f = d.pieces.find((M) => M.guid === g), h = {
          ...d,
          pieces: [
            f
          ]
        }, T = {
          u: 3,
          v: -1
        }, k = Ct(d, h, T);
        i(k.connections).toBeUndefined(), i((_b = (_a3 = k.pieces) == null ? void 0 : _a3.updated) == null ? void 0 : _b.length).toBe(1), i(k.pieces.updated[0].piece.guid).toBe(g);
        const S = ((_c2 = f.center) == null ? void 0 : _c2.u) ?? 0, B = ((_d2 = f.center) == null ? void 0 : _d2.v) ?? 0;
        i((_e2 = k.pieces.updated[0].diff.center) == null ? void 0 : _e2.u).toBeCloseTo(S + T.u, 6), i((_f = k.pieces.updated[0].diff.center) == null ? void 0 : _f.v).toBeCloseTo(B + T.v, 6);
      }), n("Nakagin sketchpad flow: drag root piece with connections preserved moves all descendants", () => {
        var _a3, _b, _c2, _d2, _e2, _f;
        const s = R, c = s.designs.find((de) => de.name === "Nakagin Capsule Tower" && !de.parent);
        i((c.connections ?? []).length).toBeGreaterThan(0);
        const a = lt(s, c.guid);
        if (i(a.ok).toBe(true), !a.ok) return;
        const d = a.change;
        i(d.size).toBeGreaterThan(0);
        let g;
        const f = /* @__PURE__ */ new Map();
        for (const [de, ce] of d) if (!ce.parentPieceId && !g && (g = de), ce.parentPieceId) {
          const fe = f.get(ce.parentPieceId);
          fe ? fe.push(de) : f.set(ce.parentPieceId, [
            de
          ]);
        }
        i(g).toBeDefined();
        const h = /* @__PURE__ */ new Set(), T = [
          g
        ];
        for (; T.length > 0; ) {
          const de = T.pop(), ce = f.get(de);
          if (ce) for (const fe of ce) fe !== g && !h.has(fe) && (h.add(fe), T.push(fe));
        }
        i(h.size).toBeGreaterThan(0);
        const k = /* @__PURE__ */ new Map();
        k.set(g, {
          u: d.get(g).center.u,
          v: d.get(g).center.v
        });
        for (const de of h) {
          const ce = d.get(de).center;
          k.set(de, {
            u: ce.u,
            v: ce.v
          });
        }
        const S = {
          ...c,
          pieces: (c.pieces ?? []).map((de) => {
            var _a4;
            return {
              ...de,
              center: ((_a4 = d.get(de.guid)) == null ? void 0 : _a4.center) ?? de.center
            };
          })
        }, B = {
          u: 5,
          v: -3
        }, O = Ct(S, {
          pieces: [
            {
              guid: g
            }
          ]
        }, B);
        i((_b = (_a3 = O.pieces) == null ? void 0 : _a3.updated) == null ? void 0 : _b.length).toBe(1), i(O.pieces.updated[0].piece.guid).toBe(g);
        const q = d.get(g).center;
        i((_c2 = O.pieces.updated[0].diff.center) == null ? void 0 : _c2.u).toBeCloseTo(q.u + B.u, 6), i((_d2 = O.pieces.updated[0].diff.center) == null ? void 0 : _d2.v).toBeCloseTo(q.v + B.v, 6), i(((_f = (_e2 = O.connections) == null ? void 0 : _e2.updated) == null ? void 0 : _f.length) ?? 0).toBe(0);
        const F = it(JSON.parse(JSON.stringify(c)), O), Z = {
          ...s,
          designs: (s.designs ?? []).map((de) => de.guid === c.guid ? F : de)
        }, se = lt(Z, c.guid);
        if (i(se.ok).toBe(true), !se.ok) return;
        const Se = se.change, ve = Se.get(g).center;
        i(ve.u).toBeCloseTo(k.get(g).u + B.u, 3), i(ve.v).toBeCloseTo(k.get(g).v + B.v, 3);
        for (const de of h) {
          const ce = k.get(de), fe = Se.get(de).center, xe = Math.abs(fe.u - ce.u) > 1e-3 || Math.abs(fe.v - ce.v) > 1e-3;
          i(xe).toBe(true);
        }
      }), n("Nakagin store chain: updatePieces-only diff (no full dragDiff) still moves descendants via re-flatten", () => {
        var _a3, _b;
        const s = R, c = s.designs.find((Ce) => Ce.name === "Nakagin Capsule Tower" && !Ce.parent);
        i((c.connections ?? []).length).toBeGreaterThan(0);
        const a = lt(s, c.guid);
        if (i(a.ok).toBe(true), !a.ok) return;
        const d = a.change;
        let g;
        const f = /* @__PURE__ */ new Map();
        for (const [Ce, De] of d) if (!De.parentPieceId && !g && (g = Ce), De.parentPieceId) {
          const Me = f.get(De.parentPieceId);
          Me ? Me.push(Ce) : f.set(De.parentPieceId, [
            Ce
          ]);
        }
        i(g).toBeDefined();
        const h = /* @__PURE__ */ new Set(), T = [
          g
        ];
        for (; T.length > 0; ) {
          const Ce = T.pop(), De = f.get(Ce);
          if (De) for (const Me of De) Me !== g && !h.has(Me) && (h.add(Me), T.push(Me));
        }
        i(h.size).toBeGreaterThan(0);
        const k = /* @__PURE__ */ new Map();
        k.set(g, {
          u: d.get(g).center.u,
          v: d.get(g).center.v
        });
        for (const Ce of h) {
          const De = d.get(Ce).center;
          k.set(Ce, {
            u: De.u,
            v: De.v
          });
        }
        const S = {
          ...c,
          pieces: (c.pieces ?? []).map((Ce) => {
            var _a4;
            return {
              ...Ce,
              center: ((_a4 = d.get(Ce.guid)) == null ? void 0 : _a4.center) ?? Ce.center
            };
          })
        }, B = {
          u: 5,
          v: -3
        }, O = Ct(S, {
          pieces: [
            {
              guid: g
            }
          ]
        }, B), q = ((_a3 = O.pieces) == null ? void 0 : _a3.updated) ?? [], F = ((_b = O.connections) == null ? void 0 : _b.updated) ?? [], Z = {};
        q.length > 0 && (Z.designs = {
          updated: [
            {
              design: {
                guid: c.guid
              },
              diff: {
                pieces: {
                  updated: q
                }
              }
            }
          ]
        }), F.length > 0 && (Z.designs || (Z.designs = {
          updated: [
            {
              design: {
                guid: c.guid
              },
              diff: {}
            }
          ]
        }), Z.designs.updated[0].diff.connections = {
          updated: F
        });
        const se = ht(s, Z), Se = lt(se, c.guid);
        if (i(Se.ok).toBe(true), !Se.ok) {
          console.error("piecesMetadata failed:", Se.errors);
          return;
        }
        const ve = Se.change, de = ve.get(g).center;
        i(de.u).toBeCloseTo(k.get(g).u + B.u, 3), i(de.v).toBeCloseTo(k.get(g).v + B.v, 3);
        for (const Ce of h) {
          const De = k.get(Ce), Me = ve.get(Ce).center, Te = Math.abs(Me.u - De.u) > 1e-3 || Math.abs(Me.v - De.v) > 1e-3;
          i(Te).toBe(true);
        }
        const ce = it(JSON.parse(JSON.stringify(c)), O), fe = {
          ...s,
          designs: (s.designs ?? []).map((Ce) => Ce.guid === c.guid ? ce : Ce)
        }, xe = lt(fe, c.guid);
        if (i(xe.ok).toBe(true), !xe.ok) return;
        const Pe = xe.change;
        for (const [Ce, De] of Pe) {
          const Me = ve.get(Ce);
          i(Me).toBeDefined(), i(De.center.u).toBeCloseTo(Me.center.u, 6), i(De.center.v).toBeCloseTo(Me.center.v, 6);
        }
      }), n("Nakagin leaf drag: dragging a leaf node (parent, no children) offsets through parent connection and matches nativeDragPieces", () => {
        var _a3, _b, _c2, _d2, _e2, _f, _g, _h, _i2;
        const s = R, c = s.designs.find((Te) => Te.name === "Nakagin Capsule Tower" && !Te.parent);
        i((c.connections ?? []).length).toBeGreaterThan(0);
        const a = lt(s, c.guid);
        if (i(a.ok).toBe(true), !a.ok) return;
        const d = a.change, g = /* @__PURE__ */ new Map();
        for (const [Te, Je] of d) if (Je.parentPieceId) {
          const Ye = g.get(Je.parentPieceId);
          Ye ? Ye.push(Te) : g.set(Je.parentPieceId, [
            Te
          ]);
        }
        let f;
        for (const [Te, Je] of d) if (Je.parentPieceId && !g.has(Te)) {
          f = Te;
          break;
        }
        i(f).toBeDefined();
        const h = d.get(f);
        i(h.parentPieceId).toBeDefined(), i(g.has(f)).toBe(false);
        const T = {
          u: h.center.u,
          v: h.center.v
        }, k = {
          u: 2,
          v: -1.5
        }, S = {
          ...c,
          pieces: (c.pieces ?? []).map((Te) => {
            var _a4;
            return {
              ...Te,
              center: ((_a4 = d.get(Te.guid)) == null ? void 0 : _a4.center) ?? Te.center
            };
          })
        }, M = Ct(S, {
          pieces: [
            {
              guid: f
            }
          ]
        }, k);
        i(((_b = (_a3 = M.pieces) == null ? void 0 : _a3.updated) == null ? void 0 : _b.length) ?? 0).toBe(0), i((_d2 = (_c2 = M.connections) == null ? void 0 : _c2.updated) == null ? void 0 : _d2.length).toBe(1);
        const O = at(s, c.guid);
        if (i(O.ok).toBe(true), !O.ok) return;
        const q = it(JSON.parse(JSON.stringify(c)), {
          pieces: O.change.forward.pieces
        }), F = {
          guid: q.guid,
          name: q.name,
          pieces: (q.pieces ?? []).filter((Te) => Te.guid === f)
        }, Z = Ct(q, F, k);
        i(((_f = (_e2 = Z.pieces) == null ? void 0 : _e2.updated) == null ? void 0 : _f.length) ?? 0).toBe(0), i((_h = (_g = Z.connections) == null ? void 0 : _g.updated) == null ? void 0 : _h.length).toBe(1), i(M.connections.updated[0].connection.guid).toBe(Z.connections.updated[0].connection.guid), i(M.connections.updated[0].diff.u).toBeCloseTo(Z.connections.updated[0].diff.u, 6), i(M.connections.updated[0].diff.v).toBeCloseTo(Z.connections.updated[0].diff.v, 6);
        const se = it(JSON.parse(JSON.stringify(c)), M), Se = {
          ...s,
          designs: (s.designs ?? []).map((Te) => Te.guid === c.guid ? se : Te)
        }, ve = lt(Se, c.guid);
        if (i(ve.ok).toBe(true), !ve.ok) return;
        const de = it(JSON.parse(JSON.stringify(c)), Z), ce = {
          ...s,
          designs: (s.designs ?? []).map((Te) => Te.guid === c.guid ? de : Te)
        }, fe = lt(ce, c.guid);
        if (i(fe.ok).toBe(true), !fe.ok) return;
        const xe = ve.change.get(f);
        fe.change.get(f), i(Math.abs(xe.center.u - T.u) > 1e-3 || Math.abs(xe.center.v - T.v) > 1e-3).toBe(true);
        for (const [Te, Je] of ve.change) {
          const Ye = fe.change.get(Te);
          i(Ye).toBeDefined(), i(Je.center.u).toBeCloseTo(Ye.center.u, 6), i(Je.center.v).toBeCloseTo(Ye.center.v, 6);
        }
        const Pe = ((_i2 = M.connections) == null ? void 0 : _i2.updated) ?? [];
        i(Pe.length).toBe(1);
        const Ce = {
          designs: {
            updated: [
              {
                design: {
                  guid: c.guid
                },
                diff: {
                  connections: {
                    updated: Pe
                  }
                }
              }
            ]
          }
        }, De = ht(s, Ce), Me = lt(De, c.guid);
        if (i(Me.ok).toBe(true), !!Me.ok) for (const [Te, Je] of Me.change) {
          const Ye = ve.change.get(Te);
          i(Ye).toBeDefined(), i(Je.center.u).toBeCloseTo(Ye.center.u, 6), i(Je.center.v).toBeCloseTo(Ye.center.v, 6);
        }
      }), n("Nakagin center-space to connection-space scaling: pixel offset scales by horizontalScale for horizontal connections", () => {
        var _a3, _b, _c2;
        const s = R, c = s.designs.find((le) => le.name === "Nakagin Capsule Tower" && !le.parent), a = lt(s, c.guid);
        if (i(a.ok).toBe(true), !a.ok) return;
        const d = a.change, g = /* @__PURE__ */ new Map();
        for (const [le, Pt] of d) if (Pt.parentPieceId) {
          const vi = g.get(Pt.parentPieceId);
          vi ? vi.push(le) : g.set(Pt.parentPieceId, [
            le
          ]);
        }
        let f;
        for (const [le, Pt] of d) if (Pt.parentPieceId && !g.has(le)) {
          f = le;
          break;
        }
        i(f).toBeDefined();
        const h = d.get(f), T = {
          u: h.center.u,
          v: h.center.v
        }, S = 100 / Zn, B = 50 / Zn, M = {
          ...c,
          pieces: (c.pieces ?? []).map((le) => {
            var _a4;
            return {
              ...le,
              center: ((_a4 = d.get(le.guid)) == null ? void 0 : _a4.center) ?? le.center
            };
          })
        }, q = Ct(M, {
          pieces: [
            {
              guid: f
            }
          ]
        }, {
          u: S,
          v: B
        });
        i((_b = (_a3 = q.connections) == null ? void 0 : _a3.updated) == null ? void 0 : _b.length).toBe(1);
        const F = q.connections.updated[0].diff;
        i(F.u).toBeCloseTo(S, 6), i(F.v).toBeCloseTo(B, 6);
        const Z = (c.connections ?? []).find((le) => le.guid === q.connections.updated[0].connection.guid);
        i(Z).toBeDefined();
        const se = Z.connected.piece.guid;
        d.get(se);
        const Se = (c.pieces ?? []).find((le) => le.guid === se), de = nd(s, Se.type.guid).connectors.find((le) => {
          var _a4;
          return le.guid === ((_a4 = Z.connected.connector) == null ? void 0 : _a4.guid);
        }), ce = Math.abs(((_c2 = de == null ? void 0 : de.direction) == null ? void 0 : _c2.z) ?? 0) > 0.5, fe = 3.0633, xe = ce ? 1 : fe, Pe = {
          u: F.u / xe,
          v: F.v / xe
        }, Ce = {
          connections: {
            updated: [
              {
                connection: {
                  guid: Z.guid
                },
                diff: Pe
              }
            ]
          }
        }, De = it(JSON.parse(JSON.stringify(c)), Ce), Me = {
          ...s,
          designs: (s.designs ?? []).map((le) => le.guid === c.guid ? De : le)
        }, Te = lt(Me, c.guid);
        if (i(Te.ok).toBe(true), !Te.ok) return;
        const Je = Te.change.get(f), Ye = T.u + S, Ot = T.v + B;
        if (i(Je.center.u).toBeCloseTo(Ye, 2), i(Je.center.v).toBeCloseTo(Ot, 2), !ce) {
          const le = {
            connections: {
              updated: [
                {
                  connection: {
                    guid: Z.guid
                  },
                  diff: {
                    u: S,
                    v: B
                  }
                }
              ]
            }
          }, Pt = it(JSON.parse(JSON.stringify(c)), le), vi = {
            ...s,
            designs: (s.designs ?? []).map((jn) => jn.guid === c.guid ? Pt : jn)
          }, rn = lt(vi, c.guid);
          if (i(rn.ok).toBe(true), !rn.ok) return;
          const Jn = rn.change.get(f);
          i(Jn.center.u).toBeCloseTo(T.u + S * fe, 2), i(Jn.center.v).toBeCloseTo(T.v + B * fe, 2);
        }
      }), n("findParentConnectionForPieceInDesign and fixPieceInDesign use the connection to the parent piece, not the parent piece id as connection id", () => {
        var _a3, _b;
        const s = R, c = s.designs.find((S) => S.name === "Nakagin Capsule Tower" && !S.parent), a = lt(s, c.guid);
        if (i(a.ok).toBe(true), !a.ok) return;
        const d = a.change;
        let g, f;
        for (const [S, B] of d) if (B.parentPieceId) {
          g = S, f = B.parentPieceId;
          break;
        }
        i(g).toBeDefined(), i(f).toBeDefined();
        const h = Fs(s, c.guid, g);
        i(h.guid).not.toBe(f);
        const T = h.connected.piece.guid === g ? h.connecting.piece.guid : h.connected.piece.guid;
        i(T).toBe(f);
        const k = Ia(s, c.guid, g);
        i((_b = (_a3 = k.connections) == null ? void 0 : _a3.removed) == null ? void 0 : _b.length).toBe(1), i(k.connections.removed[0].guid).toBe(h.guid);
      });
    }), e("Move", () => {
      n("same drag fixture: roots get plane translation; connected mover gets connector-frame split (gap/shift/rise + residual u/v)", () => {
        var _a3, _b, _c2, _d2, _e2, _f, _g;
        const s = R, c = _, a = N, d = U, g = L, f = vo(s, c, a, d), h = (((_a3 = f.pieces) == null ? void 0 : _a3.updated) ?? []).sort((q, F) => q.piece.guid.localeCompare(F.piece.guid)), T = (((_b = g.pieces) == null ? void 0 : _b.updated) ?? []).sort((q, F) => q.piece.guid.localeCompare(F.piece.guid));
        i(h.length).toBe(T.length);
        for (let q = 0; q < h.length; q++) {
          i(h[q].piece.guid).toBe(T[q].piece.guid);
          const F = (_c2 = h[q].diff.plane) == null ? void 0 : _c2.origin, Z = T[q].diff.plane.origin;
          i(F == null ? void 0 : F.x).toBeCloseTo(Z.x, 5), i(F == null ? void 0 : F.y).toBeCloseTo(Z.y, 5), i(F == null ? void 0 : F.z).toBeCloseTo(Z.z, 5);
        }
        const k = (((_d2 = f.connections) == null ? void 0 : _d2.updated) ?? []).sort((q, F) => q.connection.guid.localeCompare(F.connection.guid)), S = (((_e2 = g.connections) == null ? void 0 : _e2.updated) ?? []).sort((q, F) => q.connection.guid.localeCompare(F.connection.guid));
        i(k.length).toBe(S.length);
        for (let q = 0; q < k.length; q++) {
          i(k[q].connection.guid).toBe(S[q].connection.guid);
          const F = S[q].diff, Z = k[q].diff;
          for (const se of [
            "gap",
            "shift",
            "rise",
            "rotation",
            "turn",
            "tilt",
            "u",
            "v"
          ]) F[se] !== void 0 && i(Z[se]).toBeCloseTo(F[se], 8);
        }
        const B = Ct(c, a, {
          u: d.shift,
          v: d.gap
        }), M = (((_f = B.connections) == null ? void 0 : _f.updated) ?? []).sort((q, F) => q.connection.guid.localeCompare(F.connection.guid));
        i(k.map((q) => q.connection.guid)).toEqual(M.map((q) => q.connection.guid));
        const O = (((_g = B.pieces) == null ? void 0 : _g.updated) ?? []).sort((q, F) => q.piece.guid.localeCompare(F.piece.guid));
        i(h.map((q) => q.piece.guid)).toEqual(O.map((q) => q.piece.guid));
      }), n("vertical parent connector: world move decomposes into shift, gap, rise on connection (not diagram u/v only)", () => {
        var _a3, _b;
        const s = R, c = _, a = N, d = {
          gap: 2,
          shift: -1,
          rise: 0.5
        }, g = vo(s, c, a, d), f = Ct(c, a, {
          u: d.shift,
          v: d.gap
        }), h = (((_a3 = g.connections) == null ? void 0 : _a3.updated) ?? []).sort((k, S) => k.connection.guid.localeCompare(S.connection.guid)), T = (((_b = f.connections) == null ? void 0 : _b.updated) ?? []).sort((k, S) => k.connection.guid.localeCompare(S.connection.guid));
        i(h.length).toBe(T.length);
        for (let k = 0; k < h.length; k++) {
          i(h[k].connection.guid).toBe(T[k].connection.guid), i(h[k].diff.gap).toBeCloseTo(0.5, 5), i(h[k].diff.shift).toBeCloseTo(-1, 5), i(h[k].diff.rise).toBeCloseTo(-2, 5);
          for (const S of [
            "rotation",
            "turn",
            "tilt"
          ]) {
            const B = h[k].diff[S];
            B !== void 0 && i(B).toBeCloseTo(0, 3);
          }
        }
      });
    }), e("Delete", () => {
      n("Nakagin Capsule Tower delete third tambour and first small tower connection", () => {
        var _a3, _b, _c2, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2;
        const s = R, c = s.designs.find((F) => F.name === "Nakagin Capsule Tower" && !F.parent), a = V, d = ue, g = (a.pieces ?? []).map((F) => F.guid), f = (a.connections ?? []).map((F) => F.guid), h = nc(s, c, g, f);
        if (i(h.ok).toBe(true), !h.ok) return;
        const T = h.change, k = (((_a3 = T.pieces) == null ? void 0 : _a3.removed) ?? []).sort((F, Z) => F.guid.localeCompare(Z.guid)), S = (((_b = d.pieces) == null ? void 0 : _b.removed) ?? []).sort((F, Z) => F.guid.localeCompare(Z.guid));
        i(k.length).toBe(S.length);
        for (let F = 0; F < k.length; F++) i(k[F].guid).toBe(S[F].guid);
        const B = (((_c2 = T.pieces) == null ? void 0 : _c2.updated) ?? []).sort((F, Z) => F.piece.guid.localeCompare(Z.piece.guid)), M = (((_d2 = d.pieces) == null ? void 0 : _d2.updated) ?? []).sort((F, Z) => F.piece.guid.localeCompare(Z.piece.guid));
        i(B.length).toBe(M.length);
        for (let F = 0; F < B.length; F++) i(B[F].piece.guid).toBe(M[F].piece.guid), i((_f = (_e2 = B[F].diff.plane) == null ? void 0 : _e2.origin) == null ? void 0 : _f.x).toBeCloseTo(M[F].diff.plane.origin.x, 3), i((_h = (_g = B[F].diff.plane) == null ? void 0 : _g.origin) == null ? void 0 : _h.y).toBeCloseTo(M[F].diff.plane.origin.y, 3), i((_j = (_i2 = B[F].diff.plane) == null ? void 0 : _i2.origin) == null ? void 0 : _j.z).toBeCloseTo(M[F].diff.plane.origin.z, 3), i((_k = B[F].diff.center) == null ? void 0 : _k.u).toBeCloseTo(M[F].diff.center.u, 3), i((_l = B[F].diff.center) == null ? void 0 : _l.v).toBeCloseTo(M[F].diff.center.v, 3);
        const O = (((_m = T.connections) == null ? void 0 : _m.removed) ?? []).sort((F, Z) => F.guid.localeCompare(Z.guid)), q = (((_n2 = d.connections) == null ? void 0 : _n2.removed) ?? []).sort((F, Z) => F.guid.localeCompare(Z.guid));
        i(O.length).toBe(q.length);
        for (let F = 0; F < O.length; F++) i(O[F].guid).toBe(q[F].guid);
      });
    }), e("CopyAndPaste", () => {
      n("Nakagin Capsule Tower copy selected pieces and connections", () => {
        const s = R, c = s.designs.find((M) => M.name === "Nakagin Capsule Tower" && !M.parent), a = he, d = pe, g = (a.pieces ?? []).map((M) => M.guid), f = (a.connections ?? []).map((M) => M.guid), h = wi(s, c, g, f);
        if (i(h.ok).toBe(true), !h.ok) return;
        const T = h.change;
        i((T.pieces ?? []).length).toBe((d.pieces ?? []).length), i((T.connections ?? []).length).toBe((d.connections ?? []).length);
        const k = (T.pieces ?? []).filter((M) => (M.attributes ?? []).some((O) => O.key === "semio.piece.origin" && O.value === "external")), S = (d.pieces ?? []).filter((M) => (M.attributes ?? []).some((O) => O.key === "semio.piece.origin" && O.value === "external"));
        i(k.length).toBe(S.length);
        for (const M of k) i((M.attributes ?? []).some((O) => O.key === "semio.center")).toBe(true);
        const B = (T.pieces ?? []).filter((M) => (M.attributes ?? []).some((O) => O.key === "semio.center") && !(M.attributes ?? []).some((O) => O.key === "semio.piece.origin"));
        i(B.length).toBe(1);
        for (const M of B) i((M.attributes ?? []).some((O) => O.key === "semio.plane")).toBe(true);
      }), n("Nakagin Capsule Tower paste without coord", () => {
        var _a3, _b, _c2, _d2;
        const s = R, c = _e, a = pe, d = ye, g = xt(s, a, c, "original"), f = (((_a3 = g.pieces) == null ? void 0 : _a3.added) ?? []).sort((S, B) => S.guid.localeCompare(B.guid)), h = (((_b = d.pieces) == null ? void 0 : _b.added) ?? []).sort((S, B) => S.guid.localeCompare(B.guid));
        i(f.length).toBe(h.length);
        const T = (((_c2 = g.connections) == null ? void 0 : _c2.added) ?? []).sort((S, B) => S.guid.localeCompare(B.guid)), k = (((_d2 = d.connections) == null ? void 0 : _d2.added) ?? []).sort((S, B) => S.guid.localeCompare(B.guid));
        i(T.length).toBe(k.length);
        for (const S of f) i((S.attributes ?? []).some((B) => B.key === "semio.piece.origin" && B.value === "external")).toBe(false);
        for (let S = 0; S < T.length; S++) i(T[S].u).toBeCloseTo(k[S].u, 3), i(T[S].v).toBeCloseTo(k[S].v, 3);
      }), n("Nakagin Capsule Tower paste with coord", () => {
        var _a3, _b, _c2, _d2;
        const s = R, c = _e, a = pe, d = y, g = xt(s, a, c, "original", {
          u: 10,
          v: 10
        }), f = (((_a3 = g.pieces) == null ? void 0 : _a3.added) ?? []).sort((S, B) => S.guid.localeCompare(B.guid)), h = (((_b = d.pieces) == null ? void 0 : _b.added) ?? []).sort((S, B) => S.guid.localeCompare(B.guid));
        i(f.length).toBe(h.length);
        const T = (((_c2 = g.connections) == null ? void 0 : _c2.added) ?? []).sort((S, B) => S.guid.localeCompare(B.guid)), k = (((_d2 = d.connections) == null ? void 0 : _d2.added) ?? []).sort((S, B) => S.guid.localeCompare(B.guid));
        i(T.length).toBe(k.length);
        for (let S = 0; S < f.length; S++) f[S].center && h[S].center && (i(f[S].center.u).toBeCloseTo(h[S].center.u, 3), i(f[S].center.v).toBeCloseTo(h[S].center.v, 3));
        for (let S = 0; S < T.length; S++) i(T[S].u).toBeCloseTo(k[S].u, 3), i(T[S].v).toBeCloseTo(k[S].v, 3);
      }), n("pasteDesign accepts every built-in anchoring string for Nakagin clipboard", () => {
        var _a3, _b, _c2;
        const s = R, c = _e, a = pe;
        for (const d of fc) {
          const g = xt(s, a, c, d);
          i((((_a3 = g.pieces) == null ? void 0 : _a3.added) ?? []).length).toBeGreaterThan(0);
          const f = xt(s, a, c, d, {
            u: 10,
            v: 10
          });
          i((((_b = f.pieces) == null ? void 0 : _b.added) ?? []).length).toBe((((_c2 = g.pieces) == null ? void 0 : _c2.added) ?? []).length);
        }
      }), n("Nakagin t_f5 and br_sl0 internal connection stays identical to clipboard when pasting with coord", () => {
        var _a3, _b, _c2, _d2;
        const s = R, c = s.designs.find((se) => se.name === "Nakagin Capsule Tower" && !se.parent), a = at(s, c.guid);
        if (i(a.ok).toBe(true), !a.ok) return;
        const d = it(JSON.parse(JSON.stringify(c)), a.change.forward), g = "9c1ec7a2-13c2-4d23-b7bd-1efe2663d0a9", f = "5feebbf8-33d9-41ad-a13a-24c271a1860b", h = "eb8ce9ce-091c-4495-a651-fa703748dfef", k = wi(s, d, [
          g,
          f
        ], [
          h,
          "4d5ff333-d70a-43e1-8b7a-8849c8c91405"
        ]);
        if (i(k.ok).toBe(true), !k.ok) return;
        const S = k.change, B = S.connections.find((se) => se.guid === h), M = _e, O = xt(s, S, M, "original"), q = xt(s, S, M, "original", {
          u: 10,
          v: 5
        }), F = (_b = (_a3 = O.connections) == null ? void 0 : _a3.added) == null ? void 0 : _b.find((se) => se.guid === h), Z = (_d2 = (_c2 = q.connections) == null ? void 0 : _c2.added) == null ? void 0 : _d2.find((se) => se.guid === h);
        i(F).toBeDefined(), i(Z).toBeDefined(), i(Z.u).toBeCloseTo(B.u ?? 0, 6), i(Z.v).toBeCloseTo(B.v ?? 0, 6), i(Z.u).toBeCloseTo(F.u ?? 0, 6), i(Z.v).toBeCloseTo(F.v ?? 0, 6);
      }), n("Nakagin paste remaps t_f2\u2013t_f1 onto target t_f1 when t_f1 is external stub only", () => {
        var _a3, _b, _c2, _d2, _e2, _f, _g, _h, _i2, _j;
        const s = R, c = s.designs.find((le) => le.name === "Nakagin Capsule Tower" && !le.parent), a = at(s, c.guid);
        if (i(a.ok).toBe(true), !a.ok) return;
        const d = it(JSON.parse(JSON.stringify(c)), a.change.forward), g = he, f = "31be08e1-e75c-4024-86b4-c3c6d3939fbb", h = "ddf9e0e4-40e1-4079-aa40-c86cf699788b", T = "b1ecc6c5-722a-4814-9047-a87222bbaa4d", k = g.pieces.map((le) => le.guid).filter((le) => le !== f), S = g.connections.map((le) => le.guid).filter((le) => le !== T);
        i(S).toContain(h);
        const B = wi(s, d, k, S);
        if (i(B.ok).toBe(true), !B.ok) return;
        const M = B.change, O = M.pieces.find((le) => le.guid === f);
        i(O && (O.attributes ?? []).some((le) => le.key === "semio.piece.origin" && le.value === "external")).toBe(true);
        const q = _e, F = xt(s, M, q, "original"), Z = q.pieces.find((le) => le.name === "t_f1_b_c1");
        i(Z).toBeDefined();
        const se = (_b = (_a3 = F.connections) == null ? void 0 : _a3.added) == null ? void 0 : _b.find((le) => le.guid === h);
        i(se).toBeDefined(), i(se.connecting.piece.guid).toBe("9d18882e-d90b-40de-a171-47cb4564ffa6"), i(se.connected.piece.guid).toBe(Z.guid);
        const Se = "9d18882e-d90b-40de-a171-47cb4564ffa6", ve = "bb5449be-247b-498e-b8c8-309697ddea7b", de = M.connections.find((le) => le.guid === ve);
        i(de).toBeDefined();
        const ce = {
          u: 10,
          v: -3.25
        }, fe = xt(s, M, q, "original", ce), xe = (_d2 = (_c2 = fe.connections) == null ? void 0 : _c2.added) == null ? void 0 : _d2.find((le) => le.guid === h);
        i(xe).toBeDefined();
        const Pe = M.pieces.find((le) => le.guid === Se);
        let Ce = ((_e2 = Pe.center) == null ? void 0 : _e2.u) ?? 0, De = ((_f = Pe.center) == null ? void 0 : _f.v) ?? 0;
        const Me = (Pe.attributes ?? []).find((le) => le.key === "semio.center");
        if (Me == null ? void 0 : Me.value) {
          const le = JSON.parse(Me.value);
          Ce = le.u, De = le.v;
        }
        const Te = ((_g = Z.center) == null ? void 0 : _g.u) ?? 0, Je = ((_h = Z.center) == null ? void 0 : _h.v) ?? 0, Ye = {
          u: 0,
          v: 0
        };
        i(xe.u).toBeCloseTo(Te - (ce.u + (Ye.u - Ce)), 6), i(xe.v).toBeCloseTo(Je - (ce.v + (Ye.v - De)), 6);
        const Ot = (_j = (_i2 = fe.connections) == null ? void 0 : _i2.added) == null ? void 0 : _j.find((le) => le.guid === ve);
        i(Ot).toBeDefined(), i(Ot.u).toBeCloseTo(de.u ?? 0, 6), i(Ot.v).toBeCloseTo(de.v ?? 0, 6);
      }), n("copyDesign single connected piece selected alone becomes free fixed root and auto-pulls source descendants", () => {
        var _a3, _b, _c2, _d2;
        const s = R, c = s.designs.find((ce) => ce.name === "Nakagin Capsule Tower" && !ce.parent), a = "5f0266bc-856b-4ef2-9eb0-16ef5e1fb952", d = c.connections ?? [], g = c.pieces ?? [], f = /* @__PURE__ */ new Map();
        for (const ce of d) {
          const fe = ce.connected.piece.guid;
          f.has(fe) || f.set(fe, []), f.get(fe).push({
            childGuid: ce.connecting.piece.guid,
            connectionGuid: ce.guid
          });
        }
        const h = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set(), k = [
          a
        ];
        for (; k.length > 0; ) {
          const ce = k.shift();
          for (const { childGuid: fe, connectionGuid: xe } of f.get(ce) ?? []) h.has(fe) || (h.add(fe), T.add(xe), k.push(fe));
        }
        i(h.size).toBeGreaterThan(0);
        const S = wi(s, c, [
          a
        ], []);
        if (i(S.ok).toBe(true), !S.ok) return;
        const B = S.change;
        i((B.pieces ?? []).length).toBe(1 + h.size), i((B.connections ?? []).length).toBe(T.size);
        const M = B.pieces.find((ce) => ce.guid === a);
        i(M.plane).toBeDefined(), i(M.center).toBeDefined(), i((M.attributes ?? []).some((ce) => ce.key === "semio.center")).toBe(true), i((M.attributes ?? []).some((ce) => ce.key === "semio.plane")).toBe(true), i((M.attributes ?? []).some((ce) => ce.key === "semio.piece.origin" && ce.value === "external")).toBe(false);
        for (const ce of h) {
          const fe = B.pieces.find((Pe) => Pe.guid === ce);
          i(fe).toBeDefined();
          const xe = g.find((Pe) => Pe.guid === ce);
          i(JSON.stringify(fe.center ?? null)).toBe(JSON.stringify(xe.center ?? null)), i(JSON.stringify(fe.plane ?? null)).toBe(JSON.stringify(xe.plane ?? null)), i((fe.attributes ?? []).some((Pe) => Pe.key === "semio.piece.origin" && Pe.value === "external")).toBe(false);
        }
        for (const ce of T) {
          const fe = B.connections.find((xe) => xe.guid === ce);
          i(fe).toBeDefined();
        }
        const O = _e, q = xt(s, B, O, "original"), F = ((_a3 = q.pieces) == null ? void 0 : _a3.added) ?? [];
        i(F.length).toBe(1 + h.size);
        const Z = F.find((ce) => ce.guid === a);
        i(Z.plane).toBeDefined(), i(Z.center).toBeDefined(), i((((_b = q.connections) == null ? void 0 : _b.added) ?? []).length).toBe(T.size);
        const se = xt(s, B, O, "original", {
          u: 7,
          v: -3
        }), ve = (((_c2 = se.pieces) == null ? void 0 : _c2.added) ?? []).find((ce) => ce.guid === a);
        i(ve.center.u).toBeCloseTo(M.center.u + 7, 6), i(ve.center.v).toBeCloseTo(M.center.v - 3, 6);
        const de = ((_d2 = se.connections) == null ? void 0 : _d2.added) ?? [];
        for (const ce of T) {
          const fe = B.connections.find((Pe) => Pe.guid === ce), xe = de.find((Pe) => Pe.guid === ce);
          i(xe).toBeDefined(), i(xe.u ?? 0).toBeCloseTo(fe.u ?? 0, 6), i(xe.v ?? 0).toBeCloseTo(fe.v ?? 0, 6);
        }
      });
    }), e("FindReplaceableTypesInDesigns", () => {
      n("Synthetic selection enforces distinct compatible connectors and ignores consumed design connectors", () => {
        const s = (O, q) => ({
          guid: O,
          t: 0,
          point: {
            x: 0,
            y: 0,
            z: 0
          },
          direction: {
            x: 1,
            y: 0,
            z: 0
          },
          port: {
            guid: q
          }
        }), c = (O, q) => ({
          guid: O,
          name: O,
          connectors: q.map((F, Z) => s(`${O}-connector-${Z}`, F))
        }), a = (O, q) => ({
          guid: O,
          type: {
            guid: q
          }
        }), d = (O, q, F, Z, se) => ({
          guid: O,
          connected: {
            piece: {
              guid: q
            },
            connector: {
              guid: F
            }
          },
          connecting: {
            piece: {
              guid: Z
            },
            connector: {
              guid: se
            }
          }
        }), g = [
          {
            guid: "port-L",
            compatiblePorts: [
              {
                guid: "port-L-compatible"
              }
            ]
          },
          {
            guid: "port-L-compatible",
            compatiblePorts: [
              {
                guid: "port-L"
              }
            ]
          },
          {
            guid: "port-G"
          }
        ], f = [
          c("selected-external-lg", []),
          c("selected-isolated-lg", [
            "port-L",
            "port-G"
          ]),
          c("selected-external-ll", []),
          c("neighbor-l", [
            "port-L"
          ]),
          c("neighbor-g", [
            "port-G"
          ]),
          c("candidate-l", [
            "port-L"
          ]),
          c("candidate-lg", [
            "port-L-compatible",
            "port-G"
          ]),
          c("candidate-lg-lg", [
            "port-L-compatible",
            "port-G",
            "port-L",
            "port-G"
          ]),
          c("candidate-ll", [
            "port-L",
            "port-L-compatible"
          ]),
          c("candidate-g", [
            "port-G"
          ])
        ], h = [
          {
            guid: "candidate-design-free-lg",
            name: "candidate-design-free-lg",
            pieces: [
              a("candidate-design-free-piece", "candidate-lg")
            ]
          },
          {
            guid: "candidate-design-consumed-lg",
            name: "candidate-design-consumed-lg",
            pieces: [
              a("candidate-design-consumed-a", "candidate-lg"),
              a("candidate-design-consumed-b", "candidate-l")
            ],
            connections: [
              d("candidate-design-consumed-link", "candidate-design-consumed-a", "candidate-lg-connector-0", "candidate-design-consumed-b", "candidate-l-connector-0")
            ]
          }
        ], T = {
          pieces: [
            a("piece-external-lg", "selected-external-lg"),
            a("piece-isolated-lg", "selected-isolated-lg"),
            a("piece-external-ll", "selected-external-ll"),
            a("neighbor-piece-l", "neighbor-l"),
            a("neighbor-piece-g", "neighbor-g"),
            a("neighbor-piece-l-a", "neighbor-l"),
            a("neighbor-piece-l-b", "neighbor-l")
          ],
          connections: [
            d("external-lg-l", "piece-external-lg", "selected-external-lg-connector-0", "neighbor-piece-l", "neighbor-l-connector-0"),
            d("external-lg-g", "piece-external-lg", "selected-external-lg-connector-1", "neighbor-piece-g", "neighbor-g-connector-0"),
            d("external-ll-a", "piece-external-ll", "selected-external-ll-connector-0", "neighbor-piece-l-a", "neighbor-l-connector-0"),
            d("external-ll-b", "piece-external-ll", "selected-external-ll-connector-1", "neighbor-piece-l-b", "neighbor-l-connector-0")
          ]
        }, k = wt(T, h, f, g, {
          pieces: [
            "piece-external-ll"
          ]
        });
        i(k.types).toContain("candidate-ll"), i(k.types).not.toContain("candidate-l"), i(k.types).not.toContain("candidate-g");
        const S = wt(T, h, f, g, {
          pieces: [
            "piece-external-lg"
          ]
        });
        i(S.types).toContain("candidate-lg"), i(S.types).not.toContain("candidate-l"), i(S.designs).toContain("candidate-design-free-lg"), i(S.designs).not.toContain("candidate-design-consumed-lg");
        const B = wt(T, h, f, g, {
          pieces: [
            "piece-isolated-lg"
          ]
        });
        i(B.types).toContain("candidate-lg"), i(B.types).not.toContain("candidate-l");
        const M = wt(T, h, f, g, {
          pieces: [
            "piece-external-lg",
            "piece-isolated-lg"
          ]
        });
        i(M.types).toContain("candidate-lg"), i(M.types).not.toContain("candidate-l");
      }), n("Nakagin Capsule Tower: connector-level boundary matching shrinks candidates as demand grows", () => {
        const s = R, c = s.designs.find((Z) => Z.name === "Nakagin Capsule Tower" && !Z.parent), a = s.types ?? [], d = s.ports ?? [], g = s.designs ?? [], f = new Map((c.pieces ?? []).map((Z) => [
          Z.name,
          Z.guid
        ])), h = /* @__PURE__ */ new Set([
          "\\",
          "/",
          "q",
          "p",
          "J",
          "L",
          "s",
          "z"
        ]), T = (Z) => {
          const se = Z.map((ve) => f.get(ve) ?? ""), Se = wt(c, g, a, d, {
            pieces: se
          });
          return a.filter((ve) => Se.types.includes(ve.guid)).map((ve) => ve.name);
        }, k = (Z) => [
          ...new Set(T(Z))
        ].sort((se, Se) => se.localeCompare(Se)), S = T([
          "cs_sl2_d0_t_f9_b_c1"
        ]), B = T([
          "cs_sl2_d0_t_f8_b_c1",
          "cs_sl2_d0_t_f9_b_c1"
        ]), M = T([
          "cs_sl1_d0_t_f9_b_c1",
          "cs_sl1_d1_t_f9_b_c1",
          "cs_sl2_d0_t_f9_b_c1",
          "cs_sl2_d1_t_f9_b_c1"
        ]), O = T([
          "cs_sl0_d0_t_f0_b_c0",
          "cs_sl0_d1_t_f0_b_c0",
          "cs_sl0_d2_t_f0_b_c0",
          "cs_sl0_d3_t_f0_b_c0",
          "cs_sl1_d0_t_f0_b_c0",
          "cs_sl1_d1_t_f0_b_c0",
          "cs_sl2_d0_t_f0_b_c0",
          "cs_sl2_d1_t_f0_b_c0"
        ]), q = f.get("t_f9_b_c1"), F = wt(c, g, a, d, {
          pieces: [
            q
          ]
        });
        i(S.length).toBeGreaterThan(B.length), i(B.length).toBeGreaterThanOrEqual(M.length), i(M.length).toBeGreaterThanOrEqual(O.length);
        for (const Z of h) i(B).not.toContain(Z), i(M).not.toContain(Z), i(O).not.toContain(Z);
        i(M).not.toContain("Bridge"), i(O).not.toContain("Bridge"), i(k([
          "cs_sl2_d0_t_f8_b_c1",
          "cs_sl2_d0_t_f9_b_c1"
        ])).toEqual([
          "Bridge",
          "Cylindric Tambour",
          "First Storey",
          "Last Storey",
          "Single Storey",
          "Tambour"
        ]), i(k([
          "cs_sl1_d0_t_f9_b_c1",
          "cs_sl1_d1_t_f9_b_c1",
          "cs_sl2_d0_t_f9_b_c1",
          "cs_sl2_d1_t_f9_b_c1"
        ])).toEqual([
          "Cylindric Tambour",
          "First Storey",
          "Last Storey",
          "Single Storey",
          "Tambour"
        ]), i(k([
          "cs_sl0_d0_t_f0_b_c0",
          "cs_sl0_d1_t_f0_b_c0",
          "cs_sl0_d2_t_f0_b_c0",
          "cs_sl0_d3_t_f0_b_c0",
          "cs_sl1_d0_t_f0_b_c0",
          "cs_sl1_d1_t_f0_b_c0",
          "cs_sl2_d0_t_f0_b_c0",
          "cs_sl2_d1_t_f0_b_c0"
        ])).toEqual([
          "Cylindric Tambour",
          "First Storey",
          "Last Storey",
          "Single Storey",
          "Tambour"
        ]), i(F.types).toEqual([]), i(F.designs.length).toBe(3);
      }), n("Nakagin Capsule Tower: selection asset yields only exact design matches", () => {
        const s = R, c = s.designs.find((k) => k.name === "Nakagin Capsule Tower" && !k.parent), a = s.types ?? [], d = s.ports ?? [], g = s.designs ?? [], h = (he.pieces ?? []).map((k) => k.guid);
        i(h.length).toBeGreaterThan(0);
        const T = wt(c, g, a, d, {
          pieces: h
        });
        i(T.types).toEqual([]), i(T.designs).toEqual([
          "d7e12638-9749-471b-937e-a6e5523778ff",
          "019ab4e0-7295-7e1e-bb5f-9dfae8c0c4cf",
          "019ab4e0-8da8-7217-946f-5b5a83aca0e3"
        ]);
      }), n("Nakagin Capsule Tower: connected piece yields only exact design matches", () => {
        const s = R, c = s.designs.find((T) => T.name === "Nakagin Capsule Tower" && !T.parent), a = s.types ?? [], d = s.ports ?? [], g = s.designs ?? [], f = c.pieces.find((T) => T.name === "t_f1_b_c0"), h = wt(c, g, a, d, {
          pieces: [
            f.guid
          ]
        });
        i(h.types).toEqual([]), i(h.designs).toEqual([
          "d7e12638-9749-471b-937e-a6e5523778ff",
          "019ab4e0-7295-7e1e-bb5f-9dfae8c0c4cf",
          "019ab4e0-8da8-7217-946f-5b5a83aca0e3"
        ]);
      }), n("Nakagin Capsule Tower: isolated piece with no connections suggests types with compatible ports", () => {
        var _a3;
        const s = R, c = s.designs.find((T) => {
          var _a4;
          return T.name === "Flat" && ((_a4 = T.parent) == null ? void 0 : _a4.guid) === "9a890dd4-0a9c-48ac-920a-9e62666465ef";
        }), a = s.types ?? [], d = s.ports ?? [], g = s.designs ?? [], f = c.pieces[0], h = wt(c, g, a, d, {
          pieces: [
            f.guid
          ]
        });
        i(h.types.length).toBeGreaterThan(0), ((_a3 = f.type) == null ? void 0 : _a3.guid) && i(h.types).toContain(f.type.guid);
      }), n("Nakagin Capsule Tower: Capital piece with single connection", () => {
        const s = R, c = s.designs.find((S) => S.name === "Nakagin Capsule Tower" && !S.parent), a = s.types ?? [], d = s.ports ?? [], g = s.designs ?? [], f = a.find((S) => S.name === "Capital"), h = c.pieces.find((S) => {
          var _a3;
          return ((_a3 = S.type) == null ? void 0 : _a3.guid) === f.guid;
        }), T = wt(c, g, a, d, {
          pieces: [
            h.guid
          ]
        });
        i(T.types.length).toBeGreaterThan(0), i(T.types).not.toContain(f.guid);
        const k = a.find((S) => S.name === "Capsule");
        i(T.types).not.toContain(k.guid);
      }), n("Nakagin Capsule Tower: multiple selected pieces yield only exact design matches", () => {
        const s = R, c = s.designs.find((k) => k.name === "Nakagin Capsule Tower" && !k.parent), a = s.types ?? [], d = s.ports ?? [], g = s.designs ?? [], f = c.pieces.find((k) => k.name === "t_f1_b_c0"), h = c.pieces.find((k) => k.name === "t_f2_b_c0"), T = wt(c, g, a, d, {
          pieces: [
            f.guid,
            h.guid
          ]
        });
        i(T.types).toEqual([]), i(T.designs).toEqual([
          "d7e12638-9749-471b-937e-a6e5523778ff",
          "019ab4e0-7295-7e1e-bb5f-9dfae8c0c4cf",
          "019ab4e0-8da8-7217-946f-5b5a83aca0e3"
        ]);
      }), n("Returns empty when no pieces selected", () => {
        const s = R, c = s.designs.find((T) => T.name === "Nakagin Capsule Tower" && !T.parent), a = s.types ?? [], d = s.ports ?? [], g = s.designs ?? [], f = wt(c, g, a, d, {
          pieces: []
        }), h = a.filter((T) => (T.connectors ?? []).length === 0);
        i(f.types.length).toBe(h.length);
      });
    }), e("Design/WithDiff", () => {
      n("Nakagin Capsule Tower with-diff preserves old entities and annotates status", () => {
        var _a3;
        const c = R.designs.find((S) => S.name === "Nakagin Capsule Tower" && !S.parent), a = E, d = ie, g = fo(c, a);
        i(g.pieces.length).toBe(d.pieces.length), i(g.connections.length).toBe(d.connections.length);
        const f = (S) => {
          var _a4;
          return (_a4 = (S ?? []).find((B) => B.key === "semio.diffStatus")) == null ? void 0 : _a4.value;
        }, h = g.pieces.map((S) => f(S.attributes));
        i(h.filter((S) => S === "unchanged").length).toBe(163), i(h.filter((S) => S === "modified").length).toBe(7), i(h.filter((S) => S === "removed").length).toBe(10), i(h.filter((S) => S === "added").length).toBe(5);
        const T = g.connections.map((S) => f(S.attributes));
        i(T.filter((S) => S === "unchanged").length).toBe(168), i(T.filter((S) => S === "modified").length).toBe(1), i(T.filter((S) => S === "removed").length).toBe(10), i(T.filter((S) => S === "added").length).toBe(4);
        for (const S of g.pieces) if (f(S.attributes) === "removed" || f(S.attributes) === "unchanged") {
          const B = c.pieces.find((M) => M.guid === S.guid);
          i(B).toBeDefined(), i(S.name).toBe(B.name), i(S.description).toBe(B.description);
        }
        const k = new Map((((_a3 = a.pieces) == null ? void 0 : _a3.updated) ?? []).map((S) => [
          S.piece.guid,
          S.diff
        ]));
        for (const S of g.pieces) if (f(S.attributes) === "modified") {
          const B = k.get(S.guid), M = c.pieces.find((O) => O.guid === S.guid);
          i(M).toBeDefined(), (B == null ? void 0 : B.name) ? i(S.name).toBe(B.name) : i(S.name).toBe(M.name), (B == null ? void 0 : B.description) !== void 0 ? i(S.description).toBe(B.description) : i(S.description).toBe(M.description), i(S.plane).toEqual(M.plane), i(S.center).toEqual(M.center);
        }
      }), n("modified pieces keep base plane and center even when diff specifies new geometry", () => {
        var _a3;
        const s = {
          guid: "p1",
          name: "Base",
          type: {
            guid: "K"
          },
          plane: {
            origin: {
              x: 1,
              y: 2,
              z: 3
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
            u: 4,
            v: 5
          }
        }, f = fo({
          guid: "d1",
          name: "D",
          pieces: [
            s
          ]
        }, {
          pieces: {
            updated: [
              {
                piece: {
                  guid: "p1"
                },
                diff: {
                  name: "Renamed",
                  plane: {
                    origin: {
                      x: 9,
                      y: 9,
                      z: 9
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
                    u: 99,
                    v: 99
                  }
                }
              }
            ]
          }
        }).pieces.find((T) => T.guid === "p1"), h = (_a3 = (f.attributes ?? []).find((T) => T.key === "semio.diffStatus")) == null ? void 0 : _a3.value;
        i(h).toBe("modified"), i(f.name).toBe("Renamed"), i(f.plane).toEqual(s.plane), i(f.center).toEqual(s.center);
      });
    }), e("Sketchpad ControlTree", () => {
      n("builds nested folders from paths and applies case-insensitive filter on leaf keys", () => {
        var _a3, _b, _c2, _d2, _e2, _f, _g, _h;
        const s = [
          {
            path: "Transform/Position/X",
            controlKind: "number",
            value: 1,
            onChange: () => {
            }
          },
          {
            path: "Transform/Position/Y",
            controlKind: "number",
            value: 2,
            onChange: () => {
            }
          },
          {
            path: "Appearance/Material/roughness",
            controlKind: "slider",
            value: 0.5,
            onChange: () => {
            }
          }
        ], c = {
          Transform: {
            path: "Transform",
            order: 2
          },
          "Appearance/Material": {
            path: "Appearance/Material",
            order: 1,
            collapsed: true
          }
        }, a = u(s, "", c);
        i(Object.keys(a)).toEqual([
          "Transform",
          "Appearance"
        ]), i(a.Transform.kind).toBe("folder"), i(a.Transform.order).toBe(2), i((_a3 = a.Transform.children) == null ? void 0 : _a3.Position.kind).toBe("folder"), i((_c2 = (_b = a.Transform.children) == null ? void 0 : _b.Position.children) == null ? void 0 : _c2.X.kind).toBe("control"), i((_d2 = a.Appearance.children) == null ? void 0 : _d2.Material.order).toBe(1);
        const d = u(s, "rouGH", c);
        i(Object.keys(d)).toEqual([
          "Appearance"
        ]), i((_f = (_e2 = d.Appearance.children) == null ? void 0 : _e2.Material.children) == null ? void 0 : _f.roughness.kind).toBe("control"), i((_h = (_g = d.Appearance.children) == null ? void 0 : _g.Material.children) == null ? void 0 : _h.roughness.path).toBe("Appearance/Material/roughness");
      });
    }), e("Elements Bundle", () => {
      n("sources shared element primitives directly from elements ui", () => {
        i(v).toBe(p.Action), i(u).toBe(p.buildControlTree), i(p.LevelProvider).toBeDefined(), i(p.SectionSpecificity).toBeDefined();
      }), n("renders an explicit TreeItem label even when an id is present", () => {
        const s = l(r(p.Tree, {
          sections: [
            {
              id: "test-section",
              items: [
                {
                  id: "storybook.missing.translation.key",
                  label: r("span", {
                    className: "tree-explicit-label"
                  }, "Explicit Tree Label"),
                  icon: r("span", null, "\u2227")
                }
              ]
            }
          ]
        }));
        i(s).toContain("Explicit Tree Label"), i(s).toContain("tree-explicit-label");
      });
    }), e("Coda Tree Descriptors", () => {
      let s, c;
      t(async () => {
        const a = await we(() => import("./renderer-D5bBzhCW.js"), __vite__mapDeps([27,11,7,1,8,26,10,6,9,4,12,13,14,28]), import.meta.url);
        s = a.getOntologyNodeDescriptor, c = a.getValidationNodeDescriptor;
      }), n("keeps ontology fragments and validation witness/count semantics stable", () => {
        const d = s({
          id: "ontology-1",
          kind: "ExactCardinality",
          label: "EXACTLY 2 verbindet",
          fragment: "verbindet exactly 2 (...)",
          children: []
        });
        i(d.icon).toBe("=n"), i(d.primaryText).toBe("EXACTLY 2 verbindet"), i(d.secondaryText).toBe("verbindet exactly 2 (...)");
        const f = c({
          id: "validation-1",
          kind: "Witness",
          label: "Geschoss_EG",
          individual: "Geschoss_EG",
          truth: "true",
          counted: true,
          summary: "counted filler 1 of 2",
          children: []
        });
        i(f.primaryText).toBe("Geschoss_EG"), i(f.chips).toContain("counted"), i(f.dimmed).toBe(false);
        const T = c({
          id: "validation-2",
          kind: "Witness",
          label: "Technikraum_Dach",
          individual: "Technikraum_Dach",
          truth: "unknown",
          counted: false,
          summary: "additional filler that does not satisfy the restriction",
          children: []
        });
        i(T.chips).toContain("not matching"), i(T.dimmed).toBe(true);
        const S = c({
          id: "validation-3",
          kind: "ExactCardinality",
          label: "EXACTLY 1 in",
          fragment: "in exactly 1 (...)",
          truth: "true",
          expectedCardinality: 1,
          matchingCount: 1,
          children: []
        });
        i(S.icon).toBe("=n"), i(S.chips).toContain("1/1"), i(S.secondaryText).toBe("in exactly 1 (...)");
        const M = c({
          id: "validation-4",
          kind: "DataValue",
          label: "180.0",
          value: "180.0",
          datatype: "xsd:float",
          truth: "true",
          children: []
        });
        i(M.primaryText).toBe("180.0"), i(M.chips).toContain("xsd:float");
      });
    }), e("Design/Quality/Sum", () => {
      const s = R;
      e("Nakagin Capsule Tower", () => {
        n("sums effective floor area to ~2349.53", () => {
          var _a3, _b;
          const c = (_a3 = s.designs) == null ? void 0 : _a3.find((g) => g.name === "Nakagin Capsule Tower" && !g.parent);
          i(c).toBeDefined();
          const a = (_b = s.qualities) == null ? void 0 : _b.find((g) => g.name === "effective floor area");
          i(a).toBeDefined();
          const d = Hd(s, c.guid, a.guid);
          i(Math.abs(d - 2349.53)).toBeLessThan(0.01);
        });
      });
    }), e("ExportDesignModel", () => {
      var _a3;
      const s = R, c = (_a3 = s.designs) == null ? void 0 : _a3.find((a) => a.name === "Nakagin Capsule Tower" && !a.parent);
      n("exports .glb format with valid GLB header", async () => {
        const a = await dn(s, c.guid, ".glb");
        i(a.byteLength).toBeGreaterThan(0);
        const d = new DataView(a), g = d.getUint32(0, true);
        i(g).toBe(1179937895);
        const f = d.getUint32(4, true);
        i(f).toBe(2);
        const h = d.getUint32(8, true);
        i(h).toBe(a.byteLength);
      }), n("exports .gltf format as valid JSON string", async () => {
        const a = await dn(s, c.guid, ".gltf"), g = new TextDecoder().decode(a);
        i(() => JSON.parse(g)).not.toThrow();
        const f = JSON.parse(g);
        i(f).toBeDefined(), i(typeof f).toBe("object");
      }), n("EXPORT_MODEL_FORMATS includes .glb and .gltf", () => {
        i(Ro[".glb"]).toBeDefined(), i(Ro[".gltf"]).toBeDefined();
      }), n("exports identical Nakagin scene graph across implementations and writes reports", async () => {
        var _a4, _b;
        const { mkdirSync: a, readFileSync: d, writeFileSync: g } = await we(async () => {
          const { mkdirSync: q, readFileSync: F, writeFileSync: Z } = await import("./__vite-browser-external-D7Ct-6yo.js").then((se) => se._);
          return {
            mkdirSync: q,
            readFileSync: F,
            writeFileSync: Z
          };
        }, [], import.meta.url), { EXPORT_REPORTS_DIR: f, resolve: h, __dirname: T } = await Ve();
        a(f, {
          recursive: true
        });
        const k = new Uint8Array(await dn(s, c.guid, ".gltf"));
        await tt("js", k), await Ut("uv", [
          "run",
          "pytest",
          "main.py",
          "-k",
          "export_scene_graph_report",
          "-q"
        ], h(T, "../py"));
        let S = false;
        try {
          await Ut("go", [
            "test",
            "./...",
            "-run",
            "TestExportDesignModelSceneGraphReport$",
            "-count=1"
          ], h(T, "../go"));
        } catch (q) {
          const F = String((q == null ? void 0 : q.message) ?? q);
          if (F.includes("requires go >= 1.25.0") && F.includes("go.work lists go 1.24.0")) console.warn(`[DEBUG] skipping go ExportDesignModelSceneGraphReport due to Go toolchain mismatch: ${F}`), S = true;
          else throw q;
        }
        await Ut("cargo", [
          "test",
          "export_scene_graph_report",
          "--",
          "--nocapture"
        ], h(T, "../rs")), await Ut("dotnet", [
          "test",
          "Semio.Tests.csproj",
          "-f",
          "net8.0",
          "--filter",
          "FullyQualifiedName=Semio.Tests.Tests+ExportDesignModel.Nakagin_Capsule_Tower_Export_Scene_Graph_Report"
        ], h(T, "../net/Semio.Tests"));
        const B = S ? [
          "js",
          "py",
          "rs",
          "net"
        ] : [
          "js",
          "py",
          "go",
          "rs",
          "net"
        ], M = Object.fromEntries(B.map((q) => {
          const F = h(f, `${q}.gltf`), Z = d(F, "utf8");
          return [
            q,
            hi(Z)
          ];
        }));
        g(h(f, "scene-graphs.json"), JSON.stringify(M, null, 2));
        const O = M.js;
        for (const q of B) i(M[q]).toEqual(O);
        for (const q of B) {
          const F = h(f, `${q}.gltf`), Z = d(F, "utf8"), se = JSON.parse(Z);
          for (const de of se.buffers ?? []) i((_a4 = de.uri) == null ? void 0 : _a4.startsWith("data:")).toBe(true);
          for (const de of se.images ?? []) i(((_b = de.uri) == null ? void 0 : _b.startsWith("data:")) ?? de.bufferView !== void 0).toBe(true);
          const Se = await yi(Z);
          i(Se.getRoot().listMeshes().length).toBeGreaterThan(0);
          const ve = Rt(Z);
          i(ve.some((de) => de === "base.glb")).toBe(true), i(ve.some((de) => /^capsule_.*\.glb$/i.test(de))).toBe(true);
        }
      }, 3e5);
    }), e("Model/KPI", () => {
      n("getGeometricInsightsForModel(nakagin-capsule-tower.gltf) returns canonical insights and writes report", async () => {
        const s = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((O) => O._), [], import.meta.url), { resolve: c, __dirname: a } = await Ve(), d = c(a, "../assets/semio/nakagin-capsule-tower.gltf"), g = await Kd(d), f = (O) => Math.round(O * 1e6) / 1e6, h = (O) => O ? {
          x: f(O.x),
          y: f(O.y),
          z: f(O.z)
        } : void 0, T = c(a, "../reports/model-kpi");
        await s.mkdir(T, {
          recursive: true
        });
        const k = {
          aspect_ratio_xy: g.aspectRatioXy != null ? f(g.aspectRatioXy) : void 0,
          aspect_ratio_xz: g.aspectRatioXz != null ? f(g.aspectRatioXz) : void 0,
          aspect_ratio_yz: g.aspectRatioYz != null ? f(g.aspectRatioYz) : void 0,
          bounding_box_max: h(g.boundingBoxMax),
          bounding_box_min: h(g.boundingBoxMin),
          centroid: h(g.centroid),
          characteristic_length: g.characteristicLength != null ? f(g.characteristicLength) : void 0,
          dimension_x: g.dimensionX != null ? f(g.dimensionX) : void 0,
          dimension_y: g.dimensionY != null ? f(g.dimensionY) : void 0,
          dimension_z: g.dimensionZ != null ? f(g.dimensionZ) : void 0,
          face_count: g.faceCount,
          footprint_area: g.footprintArea != null ? f(g.footprintArea) : void 0,
          is_watertight: g.isWatertight ?? false,
          slenderness: g.slenderness != null ? f(g.slenderness) : void 0,
          total_surface_area: g.totalSurfaceArea != null ? f(g.totalSurfaceArea) : void 0,
          vertex_count: g.vertexCount
        };
        await s.writeFile(c(T, "js.json"), JSON.stringify(k, null, 2), "utf8");
        const S = c(a, "../assets/semio/nakagin.kpi.model.semio.json"), B = JSON.parse(await s.readFile(S, "utf8")), M = /* @__PURE__ */ new Set([
          "centroid",
          "total_surface_area"
        ]);
        for (const O of Object.keys(B)) M.has(O) || (i(k[O]).toBeDefined(), i(k[O]).toEqual(B[O]));
      });
    }), e("InMemoryKitStore", () => {
      const s = (c) => ({
        guid: "test-kit-guid",
        name: "Test Kit",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        ...c
      });
      n("getSnapshot returns the initial kit and ready status", () => {
        const c = s(), d = new mt(c).getSnapshot();
        i(d.kit.guid).toBe("test-kit-guid"), i(d.kit.name).toBe("Test Kit"), i(d.sync.status).toBe("ready"), i(d.sync.dirty).toBe(false), i(d.sync.readonly).toBe(false);
      }), n("apply merges a diff and notifies subscribers", () => {
        const c = s(), a = new mt(c);
        let d = 0;
        a.subscribe(() => d++);
        const g = {
          name: "Updated Kit"
        };
        a.apply(g), i(a.getSnapshot().kit.name).toBe("Updated Kit"), i(a.getSnapshot().sync.dirty).toBe(true), i(d).toBe(1);
      }), n("replace swaps the entire kit and notifies subscribers", () => {
        const c = s(), a = new mt(c);
        let d = 0;
        a.subscribe(() => d++);
        const g = s({
          guid: "new-guid",
          name: "Replaced Kit"
        });
        a.replace(g), i(a.getSnapshot().kit.guid).toBe("new-guid"), i(a.getSnapshot().kit.name).toBe("Replaced Kit"), i(a.getSnapshot().sync.dirty).toBe(true), i(d).toBe(1);
      }), n("subscribe returns an unsubscribe function", () => {
        const c = s(), a = new mt(c);
        let d = 0;
        const g = a.subscribe(() => d++);
        a.apply({
          name: "First"
        }), i(d).toBe(1), g(), a.apply({
          name: "Second"
        }), i(d).toBe(1);
      }), n("transact groups mutations into one undo entry", () => {
        const c = s({
          types: []
        }), a = new mt(c);
        a.transact("add type and rename", () => {
          a.apply({
            name: "Renamed"
          }), a.apply({
            types: {
              added: [
                {
                  guid: "t1",
                  name: "Wall",
                  createdAt: (/* @__PURE__ */ new Date()).toISOString(),
                  updatedAt: (/* @__PURE__ */ new Date()).toISOString()
                }
              ]
            }
          });
        });
        const d = a.getSnapshot();
        i(d.kit.name).toBe("Renamed"), i(d.kit.types).toHaveLength(1), i(a.canUndo()).toBe(true), a.undo();
        const g = a.getSnapshot();
        i(g.kit.name).toBe("Test Kit"), i(g.kit.types ?? []).toHaveLength(0);
      }), n("undo reverses the last mutation", () => {
        const c = s(), a = new mt(c);
        a.apply({
          name: "Changed"
        }), i(a.getSnapshot().kit.name).toBe("Changed"), i(a.canUndo()).toBe(true), i(a.canRedo()).toBe(false), a.undo(), i(a.getSnapshot().kit.name).toBe("Test Kit"), i(a.canUndo()).toBe(false), i(a.canRedo()).toBe(true);
      }), n("redo re-applies the last undone mutation", () => {
        const c = s(), a = new mt(c);
        a.apply({
          name: "Changed"
        }), a.undo(), i(a.getSnapshot().kit.name).toBe("Test Kit"), a.redo(), i(a.getSnapshot().kit.name).toBe("Changed"), i(a.canUndo()).toBe(true), i(a.canRedo()).toBe(false);
      }), n("apply after undo clears the redo stack", () => {
        const c = s(), a = new mt(c);
        a.apply({
          name: "First"
        }), a.apply({
          name: "Second"
        }), a.undo(), i(a.canRedo()).toBe(true), a.apply({
          name: "Third"
        }), i(a.canRedo()).toBe(false), i(a.getSnapshot().kit.name).toBe("Third");
      }), n("save clears dirty flag", async () => {
        const c = s(), a = new mt(c);
        a.apply({
          name: "Changed"
        }), i(a.getSnapshot().sync.dirty).toBe(true), await a.save(), i(a.getSnapshot().sync.dirty).toBe(false);
      }), n("dispose clears all listeners and stacks", () => {
        const c = s(), a = new mt(c);
        let d = 0;
        a.subscribe(() => d++), a.apply({
          name: "Before dispose"
        }), i(d).toBe(1), a.dispose(), a.apply({
          name: "After dispose"
        }), i(d).toBe(1), i(a.canUndo()).toBe(false);
      }), n("multiple subscribers are all notified", () => {
        const c = s(), a = new mt(c);
        let d = 0, g = 0;
        a.subscribe(() => d++), a.subscribe(() => g++), a.apply({
          name: "Changed"
        }), i(d).toBe(1), i(g).toBe(1);
      }), n("undo and redo with no stack are no-ops", () => {
        const c = s(), a = new mt(c);
        a.undo(), i(a.getSnapshot().kit.name).toBe("Test Kit"), a.redo(), i(a.getSnapshot().kit.name).toBe("Test Kit");
      });
    }), e("JsonFileKitStore", () => {
      const s = (a) => ({
        guid: "file-kit-guid",
        name: "File Kit",
        createdAt: "2026-01-01T00:00:00.000Z",
        updatedAt: "2026-01-01T00:00:00.000Z",
        ...a
      }), c = (a) => {
        const d = {
          stored: a ? JSON.stringify(a) : null,
          async read() {
            return d.stored;
          },
          async write(g) {
            d.stored = g;
          }
        };
        return d;
      };
      n("loads kit from adapter and reports ready status", async () => {
        const a = s(), d = c(a), f = (await oe(d)).getSnapshot();
        i(f.kit.guid).toBe("file-kit-guid"), i(f.kit.name).toBe("File Kit"), i(f.sync.status).toBe("ready"), i(f.sync.dirty).toBe(false), i(f.sync.lastSyncedAt).toBeDefined();
      }), n("creates empty kit when adapter returns null", async () => {
        const a = c(), g = (await oe(a)).getSnapshot();
        i(g.kit.guid).toBeDefined(), i(g.kit.name).toBe("New Kit"), i(g.sync.status).toBe("ready");
      }), n("reports error status for invalid JSON", async () => {
        const a = {
          stored: "not valid json {{{",
          async read() {
            return a.stored;
          },
          async write(g) {
            a.stored = g;
          }
        }, d = await oe(a);
        i(d.getSnapshot().sync.status).toBe("error"), i(d.getSnapshot().sync.error).toBeDefined();
      }), n("apply merges a diff and notifies subscribers", async () => {
        const a = s(), d = await oe(c(a));
        let g = 0;
        d.subscribe(() => g++), d.apply({
          name: "Updated"
        }), i(d.getSnapshot().kit.name).toBe("Updated"), i(d.getSnapshot().sync.dirty).toBe(true), i(g).toBe(1);
      }), n("replace swaps the entire kit", async () => {
        const a = s(), d = await oe(c(a));
        let g = 0;
        d.subscribe(() => g++);
        const f = s({
          guid: "new-guid",
          name: "Replaced"
        });
        d.replace(f), i(d.getSnapshot().kit.guid).toBe("new-guid"), i(d.getSnapshot().kit.name).toBe("Replaced"), i(g).toBe(1);
      }), n("save writes kit JSON to adapter and clears dirty", async () => {
        const a = s(), d = c(a), g = await oe(d);
        g.apply({
          name: "Saved Kit"
        }), i(g.getSnapshot().sync.dirty).toBe(true), await g.save(), i(g.getSnapshot().sync.dirty).toBe(false), i(g.getSnapshot().sync.status).toBe("ready");
        const f = JSON.parse(d.stored);
        i(f.name).toBe("Saved Kit");
      }), n("reload re-reads kit from adapter and resets state", async () => {
        const a = s(), d = c(a), g = await oe(d);
        g.apply({
          name: "Local Change"
        }), i(g.getSnapshot().kit.name).toBe("Local Change"), d.stored = JSON.stringify(s({
          name: "External Change"
        })), await g.reload(), i(g.getSnapshot().kit.name).toBe("External Change"), i(g.getSnapshot().sync.dirty).toBe(false), i(g.canUndo()).toBe(false);
      }), n("undo reverses the last mutation", async () => {
        const a = s(), d = await oe(c(a));
        d.apply({
          name: "Changed"
        }), i(d.canUndo()).toBe(true), d.undo(), i(d.getSnapshot().kit.name).toBe("File Kit"), i(d.canRedo()).toBe(true);
      }), n("redo re-applies the last undone mutation", async () => {
        const a = s(), d = await oe(c(a));
        d.apply({
          name: "Changed"
        }), d.undo(), d.redo(), i(d.getSnapshot().kit.name).toBe("Changed"), i(d.canUndo()).toBe(true), i(d.canRedo()).toBe(false);
      }), n("transact groups mutations into one undo entry", async () => {
        const a = s({
          types: []
        }), d = await oe(c(a));
        d.transact("batch", () => {
          d.apply({
            name: "Renamed"
          }), d.apply({
            types: {
              added: [
                {
                  guid: "t1",
                  name: "Wall",
                  createdAt: "2026-01-01T00:00:00.000Z",
                  updatedAt: "2026-01-01T00:00:00.000Z"
                }
              ]
            }
          });
        }), i(d.getSnapshot().kit.name).toBe("Renamed"), i(d.getSnapshot().kit.types).toHaveLength(1), d.undo(), i(d.getSnapshot().kit.name).toBe("File Kit"), i(d.getSnapshot().kit.types ?? []).toHaveLength(0);
      }), n("subscribe returns unsubscribe function", async () => {
        const a = s(), d = await oe(c(a));
        let g = 0;
        const f = d.subscribe(() => g++);
        d.apply({
          name: "First"
        }), i(g).toBe(1), f(), d.apply({
          name: "Second"
        }), i(g).toBe(1);
      }), n("dispose clears listeners and stacks", async () => {
        const a = s(), d = await oe(c(a));
        let g = 0;
        d.subscribe(() => g++), d.apply({
          name: "Before"
        }), i(g).toBe(1), d.dispose(), d.apply({
          name: "After"
        }), i(g).toBe(1), i(d.canUndo()).toBe(false);
      }), n("applyExternalUpdate resets state without undo entry", async () => {
        const a = s(), d = await oe(c(a));
        d.apply({
          name: "Local"
        }), i(d.canUndo()).toBe(true), d.applyExternalUpdate(s({
          name: "External"
        })), i(d.getSnapshot().kit.name).toBe("External"), i(d.getSnapshot().sync.dirty).toBe(false), i(d.canUndo()).toBe(false);
      }), n("save transitions through saving status", async () => {
        const a = s(), d = [], g = await oe(c(a));
        g.subscribe(() => d.push(g.getSnapshot().sync.status)), g.apply({
          name: "Changed"
        }), await g.save(), i(d).toContain("saving"), i(g.getSnapshot().sync.status).toBe("ready");
      }), n("embedFileBlob inlines dropped file as data URL persisted in kit JSON", async () => {
        var _a3, _b;
        const a = "file-1", d = s({
          files: [
            {
              guid: a,
              name: "cube.txt",
              size: 5,
              createdAt: "2026-01-01T00:00:00.000Z",
              updatedAt: "2026-01-01T00:00:00.000Z"
            }
          ]
        }), g = c(d), f = await oe(g), h = new Blob([
          "HELLO"
        ], {
          type: "text/plain"
        });
        await f.embedFileBlob(a, h);
        const T = (_a3 = f.getSnapshot().kit.files) == null ? void 0 : _a3.find((O) => O.guid === a);
        i(T == null ? void 0 : T.blob).toBeDefined(), i(T.blob.startsWith("data:text/plain")).toBe(true), i(T.blob).toContain("base64,"), await f.save();
        const S = JSON.parse(g.stored).files.find((O) => O.guid === a);
        i(S.blob).toBe(T.blob);
        const M = (_b = (await oe(g)).getSnapshot().kit.files) == null ? void 0 : _b.find((O) => O.guid === a);
        i(M == null ? void 0 : M.blob).toBe(T.blob);
      }), n("addFile diff followed by embedFileBlob embeds the blob on the newly added file", async () => {
        var _a3, _b;
        const a = c(s()), d = await oe(a), g = "dropped-file-guid", f = {
          guid: g,
          name: "drop.txt",
          size: 3,
          createdAt: "2026-01-01T00:00:00.000Z",
          updatedAt: "2026-01-01T00:00:00.000Z"
        };
        d.apply({
          files: {
            added: [
              f
            ]
          }
        });
        const h = (_a3 = d.getSnapshot().kit.files) == null ? void 0 : _a3.find((M) => M.guid === g);
        i(h).toBeDefined(), i(h == null ? void 0 : h.blob).toBeUndefined();
        const T = new Blob([
          "HEY"
        ], {
          type: "text/plain"
        });
        await d.embedFileBlob(g, T);
        const k = (_b = d.getSnapshot().kit.files) == null ? void 0 : _b.find((M) => M.guid === g);
        i(k == null ? void 0 : k.blob).toBeDefined(), i(k.blob.startsWith("data:text/plain")).toBe(true), i(k == null ? void 0 : k.name).toBe("drop.txt"), await d.save();
        const B = JSON.parse(a.stored).files.find((M) => M.guid === g);
        i(B.blob).toBe(k.blob), i(B.name).toBe("drop.txt");
      }), n("save preserves dirty flag when an apply interleaves with an in-flight adapter.write", async () => {
        var _a3;
        let a = null, d = 0;
        const g = {
          stored: null,
          async read() {
            return g.stored;
          },
          async write(O) {
            d++, d === 1 ? (g.stored = O, await new Promise((q) => {
              a = q;
            })) : g.stored = O;
          }
        }, f = "file-race";
        g.stored = JSON.stringify({
          guid: "race-kit",
          name: "Race",
          createdAt: "2026-01-01T00:00:00.000Z",
          updatedAt: "2026-01-01T00:00:00.000Z",
          files: [
            {
              guid: f,
              name: "race.txt",
              size: 2,
              createdAt: "2026-01-01T00:00:00.000Z",
              updatedAt: "2026-01-01T00:00:00.000Z"
            }
          ]
        });
        const h = await oe(g), T = h.save();
        await Promise.resolve();
        const k = new Blob([
          "HI"
        ], {
          type: "text/plain"
        });
        await h.embedFileBlob(f, k), a(), await T, i(h.getSnapshot().sync.dirty).toBe(true);
        const S = (_a3 = h.getSnapshot().kit.files) == null ? void 0 : _a3.find((O) => O.guid === f);
        i(S == null ? void 0 : S.blob).toBeDefined(), i(S.blob.startsWith("data:text/plain")).toBe(true), await h.save();
        const M = JSON.parse(g.stored).files.find((O) => O.guid === f);
        i(M.blob).toBe(S.blob);
      }), n("embedFileBlob is a no-op when the target file is missing from the kit", async () => {
        const a = await oe(c(s())), d = new Blob([
          "X"
        ], {
          type: "application/octet-stream"
        });
        await a.embedFileBlob("nonexistent", d), i(a.getSnapshot().kit.files ?? []).toHaveLength(0), i(a.getSnapshot().sync.dirty).toBe(false);
      }), n("getFileDiff and inverseFileDiff include blob for kit change metadata", () => {
        const a = {
          guid: "f1",
          name: "a.bin",
          createdAt: "2026-01-01T00:00:00.000Z",
          updatedAt: "2026-01-01T00:00:00.000Z"
        }, d = {
          ...a,
          blob: "data:application/octet-stream;base64,QUI="
        }, g = Ko(a, d);
        i(g.blob).toBe(d.blob);
        const f = Ho(a, g);
        i(f.blob).toBeUndefined();
      });
    }), e("FolderKitStore", () => {
      const s = (g) => ({
        guid: "folder-kit-guid",
        name: "Folder Kit",
        createdAt: "2026-01-01T00:00:00.000Z",
        updatedAt: "2026-01-01T00:00:00.000Z",
        ...g
      }), c = async (g) => {
        const f = await Vt(), h = new f.Database();
        await bi(g, h);
        const T = h.export();
        return h.close(), T;
      }, a = async (g) => {
        const f = await Vt(), h = new f.Database(new Uint8Array(g)), T = await Ln(h);
        return h.close(), T;
      }, d = (g) => {
        const f = {
          stored: null,
          files: /* @__PURE__ */ new Map(),
          initPromise: Promise.resolve(),
          async readKit() {
            return f.stored;
          },
          async writeKit(h) {
            f.stored = h;
          },
          async readFile(h) {
            return f.files.get(h) ?? null;
          },
          async writeFile(h, T) {
            f.files.set(h, T);
          },
          async deleteFile(h) {
            f.files.delete(h);
          },
          async listFiles() {
            return Array.from(f.files.keys());
          }
        };
        return g && (f.initPromise = c(g).then((h) => {
          f.stored = h;
        })), f;
      };
      n("loads kit from adapter and reports ready status", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const T = (await W(f)).getSnapshot();
        i(T.kit.guid).toBe("folder-kit-guid"), i(T.kit.name).toBe("Folder Kit"), i(T.sync.status).toBe("ready"), i(T.sync.dirty).toBe(false);
      }), n("creates empty kit when adapter returns null", async () => {
        const f = (await W(d())).getSnapshot();
        i(f.kit.guid).toBeDefined(), i(f.kit.name).toBe("New Kit"), i(f.sync.status).toBe("ready");
      }), n("reports error status for invalid SQLite data", async () => {
        const g = d();
        g.stored = new Uint8Array([
          0,
          1,
          2,
          3
        ]);
        const f = await W(g);
        i(f.getSnapshot().sync.status).toBe("error"), i(f.getSnapshot().sync.error).toBeDefined();
      }), n("apply merges a diff and notifies subscribers", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        let T = 0;
        h.subscribe(() => T++), h.apply({
          name: "Updated"
        }), i(h.getSnapshot().kit.name).toBe("Updated"), i(h.getSnapshot().sync.dirty).toBe(true), i(T).toBe(1);
      }), n("replace swaps the entire kit", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        let T = 0;
        h.subscribe(() => T++);
        const k = s({
          guid: "new-guid",
          name: "Replaced"
        });
        h.replace(k), i(h.getSnapshot().kit.guid).toBe("new-guid"), i(h.getSnapshot().kit.name).toBe("Replaced"), i(T).toBe(1);
      }), n("save writes kit SQLite to adapter and clears dirty", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        h.apply({
          name: "Saved Kit"
        }), i(h.getSnapshot().sync.dirty).toBe(true), await h.save(), i(h.getSnapshot().sync.dirty).toBe(false), i(h.getSnapshot().sync.status).toBe("ready");
        const T = await a(f.stored);
        i(T.name).toBe("Saved Kit");
      }), n("reload re-reads kit from adapter and resets state", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        h.apply({
          name: "Local Change"
        }), i(h.getSnapshot().kit.name).toBe("Local Change"), f.stored = await c(s({
          name: "External Change"
        })), await h.reload(), i(h.getSnapshot().kit.name).toBe("External Change"), i(h.getSnapshot().sync.dirty).toBe(false), i(h.canUndo()).toBe(false);
      }), n("undo reverses the last mutation", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        h.apply({
          name: "Changed"
        }), i(h.canUndo()).toBe(true), h.undo(), i(h.getSnapshot().kit.name).toBe("Folder Kit"), i(h.canRedo()).toBe(true);
      }), n("redo re-applies the last undone mutation", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        h.apply({
          name: "Changed"
        }), h.undo(), h.redo(), i(h.getSnapshot().kit.name).toBe("Changed"), i(h.canUndo()).toBe(true), i(h.canRedo()).toBe(false);
      }), n("transact groups mutations into one undo entry", async () => {
        const g = s({
          types: []
        }), f = d(g);
        await f.initPromise;
        const h = await W(f);
        h.transact("batch", () => {
          h.apply({
            name: "Renamed"
          }), h.apply({
            types: {
              added: [
                {
                  guid: "t1",
                  name: "Wall",
                  createdAt: "2026-01-01T00:00:00.000Z",
                  updatedAt: "2026-01-01T00:00:00.000Z"
                }
              ]
            }
          });
        }), i(h.getSnapshot().kit.name).toBe("Renamed"), i(h.getSnapshot().kit.types).toHaveLength(1), h.undo(), i(h.getSnapshot().kit.name).toBe("Folder Kit"), i(h.getSnapshot().kit.types ?? []).toHaveLength(0);
      }), n("subscribe returns unsubscribe function", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        let T = 0;
        const k = h.subscribe(() => T++);
        h.apply({
          name: "First"
        }), i(T).toBe(1), k(), h.apply({
          name: "Second"
        }), i(T).toBe(1);
      }), n("dispose clears listeners and stacks", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        let T = 0;
        h.subscribe(() => T++), h.apply({
          name: "Before"
        }), i(T).toBe(1), h.dispose(), h.apply({
          name: "After"
        }), i(T).toBe(1), i(h.canUndo()).toBe(false);
      }), n("applyExternalUpdate resets state without undo entry", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        h.apply({
          name: "Local"
        }), i(h.canUndo()).toBe(true), h.applyExternalUpdate(s({
          name: "External"
        })), i(h.getSnapshot().kit.name).toBe("External"), i(h.getSnapshot().sync.dirty).toBe(false), i(h.canUndo()).toBe(false);
      }), n("writeFile and readFile roundtrip via adapter", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f), T = new Blob([
          "hello world"
        ], {
          type: "text/plain"
        });
        await h.writeFile("test.txt", T);
        const k = await h.readFile("test.txt");
        i(k).not.toBeNull();
        const S = await k.text();
        i(S).toBe("hello world");
      }), n("deleteFile removes a stored file", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        await h.writeFile("to-delete.txt", new Blob([
          "data"
        ])), i(await h.readFile("to-delete.txt")).not.toBeNull(), await h.deleteFile("to-delete.txt"), i(await h.readFile("to-delete.txt")).toBeNull();
      }), n("listFiles returns all file paths", async () => {
        const g = s(), f = d(g);
        await f.initPromise;
        const h = await W(f);
        await h.writeFile("a.txt", new Blob([
          "a"
        ])), await h.writeFile("b.txt", new Blob([
          "b"
        ]));
        const T = await h.listFiles();
        i(T).toContain("a.txt"), i(T).toContain("b.txt"), i(T).toHaveLength(2);
      }), n("save transitions through saving status", async () => {
        const g = s(), f = [], h = d(g);
        await h.initPromise;
        const T = await W(h);
        T.subscribe(() => f.push(T.getSnapshot().sync.status)), T.apply({
          name: "Changed"
        }), await T.save(), i(f).toContain("saving"), i(T.getSnapshot().sync.status).toBe("ready");
      });
    }), e("Open Synchronized Kit E2E", () => {
      const { createJsonFileKitStore: s, createFolderKitStore: c, createSessionKitStore: a } = (async () => await we(() => import("./index-DwjF_IIt.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), __vite__mapDeps([21,6,22,23,11,7,1,8,24,10,9,4,12,13,14,25,26,20]), import.meta.url))(), d = async () => await we(() => import("./index-DwjF_IIt.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), __vite__mapDeps([21,6,22,23,11,7,1,8,24,10,9,4,12,13,14,25,26,20]), import.meta.url), g = async () => {
        const { resolve: k, dirname: S } = await we(async () => {
          const { resolve: O, dirname: q } = await import("./__vite-browser-external-D7Ct-6yo.js").then((F) => F._);
          return {
            resolve: O,
            dirname: q
          };
        }, [], import.meta.url), { fileURLToPath: B } = await we(async () => {
          const { fileURLToPath: O } = await import("./__vite-browser-external-D7Ct-6yo.js").then((q) => q._);
          return {
            fileURLToPath: O
          };
        }, [], import.meta.url), M = S(B(import.meta.url));
        return k(M, "../assets/semio/metabolism.kit.semio.json");
      }, f = async () => {
        const { resolve: k, dirname: S } = await we(async () => {
          const { resolve: O, dirname: q } = await import("./__vite-browser-external-D7Ct-6yo.js").then((F) => F._);
          return {
            resolve: O,
            dirname: q
          };
        }, [], import.meta.url), { fileURLToPath: B } = await we(async () => {
          const { fileURLToPath: O } = await import("./__vite-browser-external-D7Ct-6yo.js").then((q) => q._);
          return {
            fileURLToPath: O
          };
        }, [], import.meta.url), M = S(B(import.meta.url));
        return k(M, "../assets/semio/metabolism");
      }, h = async (k) => {
        const S = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((B) => B._), [], import.meta.url);
        return {
          async read() {
            try {
              return await S.readFile(k, "utf-8");
            } catch {
              return null;
            }
          },
          async write(B) {
            await S.writeFile(k, B, "utf-8");
          }
        };
      }, T = async (k) => {
        const S = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((M) => M._), [], import.meta.url), B = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((M) => M._), [], import.meta.url);
        return {
          async readKit() {
            try {
              const M = await S.readFile(B.join(k, ".semio", "kit.db"));
              return new Uint8Array(M.buffer, M.byteOffset, M.byteLength);
            } catch {
              return null;
            }
          },
          async writeKit(M) {
            const O = B.join(k, ".semio");
            await S.mkdir(O, {
              recursive: true
            }), await S.writeFile(B.join(O, "kit.db"), Buffer.from(M));
          },
          async readFile(M) {
            try {
              const O = await S.readFile(B.join(k, M));
              return new Blob([
                new Uint8Array(O)
              ]);
            } catch {
              return null;
            }
          },
          async writeFile(M, O) {
            const q = B.join(k, M);
            await S.mkdir(B.dirname(q), {
              recursive: true
            });
            const F = await O.arrayBuffer();
            await S.writeFile(q, Buffer.from(F));
          },
          async deleteFile(M) {
            try {
              await S.unlink(B.join(k, M));
            } catch {
            }
          },
          async createDirectory(M) {
            await S.mkdir(B.join(k, M), {
              recursive: true
            });
          },
          async moveEntry(M, O) {
            const q = B.join(k, M), F = B.join(k, O);
            await S.mkdir(B.dirname(F), {
              recursive: true
            }), await S.rename(q, F);
          },
          async listFiles() {
            const M = [], O = async (q, F) => {
              const Z = await S.readdir(q, {
                withFileTypes: true
              });
              for (const se of Z) {
                if (se.name === ".semio" || se.name === "node_modules") continue;
                const Se = F ? `${F}/${se.name}` : se.name;
                se.isDirectory() ? await O(B.join(q, se.name), Se) : M.push(Se);
              }
            };
            try {
              await O(k, "");
            } catch {
            }
            return M;
          }
        };
      };
      e("File Kit (JsonFileKitStore)", () => {
        n("opens metabolism.kit.semio.json with embedded blob files preserved", async () => {
          const k = await d(), S = await g(), B = await h(S), O = (await k.createJsonFileKitStore(B)).getSnapshot();
          i(O.sync.status).toBe("ready"), i(O.kit.name).toBe("Metabolism"), i((O.kit.types ?? []).length).toBeGreaterThan(0), i((O.kit.designs ?? []).length).toBeGreaterThan(0), i((O.kit.files ?? []).length).toBeGreaterThan(0);
          const q = (O.kit.files ?? []).filter((Z) => typeof Z.blob == "string" && Z.blob.length > 0);
          i(q.length).toBeGreaterThan(0);
          const F = q.find((Z) => Z.name.endsWith(".glb"));
          i(F).toBeDefined(), i(F.blob.startsWith("data:")).toBe(true);
        }), n("synchronizes apply() \u2192 save() back to the JSON file on disk", async () => {
          const k = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((F) => F._), [], import.meta.url), S = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((F) => F._), [], import.meta.url), B = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((F) => F._), [], import.meta.url), M = await g(), O = await k.mkdtemp(B.join(S.tmpdir(), "semio-file-kit-")), q = B.join(O, "metabolism.kit.semio.json");
          await k.copyFile(M, q);
          try {
            const F = await d(), Z = await h(q), se = await F.createJsonFileKitStore(Z);
            se.apply({
              description: "Edited via JsonFileKitStore E2E"
            }), i(se.getSnapshot().sync.dirty).toBe(true), await se.save(), i(se.getSnapshot().sync.dirty).toBe(false);
            const Se = JSON.parse(await k.readFile(q, "utf-8"));
            i(Se.description).toBe("Edited via JsonFileKitStore E2E"), i(Se.name).toBe("Metabolism"), i(Array.isArray(Se.files)).toBe(true), i(Se.files.length).toBeGreaterThan(0);
          } finally {
            await k.rm(O, {
              recursive: true,
              force: true
            });
          }
        }), n("synchronizes type and piece edits round-trip through the JSON file", async () => {
          var _a3, _b;
          const k = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((F) => F._), [], import.meta.url), S = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((F) => F._), [], import.meta.url), B = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((F) => F._), [], import.meta.url), M = await k.mkdtemp(B.join(S.tmpdir(), "semio-file-kit-edit-")), O = B.join(M, "mini.kit.semio.json"), q = {
            guid: "mini-kit-guid",
            name: "Mini Kit",
            createdAt: "2026-01-01T00:00:00.000Z",
            updatedAt: "2026-01-01T00:00:00.000Z",
            types: []
          };
          await k.writeFile(O, JSON.stringify(q, null, 2));
          try {
            const F = await d(), Z = await h(O), se = await F.createJsonFileKitStore(Z);
            se.apply({
              types: {
                added: [
                  {
                    guid: "t1",
                    name: "Column",
                    createdAt: "2026-01-01T00:00:00.000Z",
                    updatedAt: "2026-01-01T00:00:00.000Z"
                  }
                ]
              }
            }), await se.save();
            const Se = JSON.parse(await k.readFile(O, "utf-8"));
            i(Se.types).toHaveLength(1), i(Se.types[0].name).toBe("Column");
            const ve = await F.createJsonFileKitStore(await h(O));
            i((_b = (_a3 = ve.getSnapshot().kit.types) == null ? void 0 : _a3[0]) == null ? void 0 : _b.name).toBe("Column");
          } finally {
            await k.rm(M, {
              recursive: true,
              force: true
            });
          }
        });
      }), e("Folder Kit (FolderKitStore)", () => {
        t(async () => {
          const k = await g(), S = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((ve) => ve._), [], import.meta.url), B = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((ve) => ve._), [], import.meta.url), M = await S.readFile(k, "utf-8"), O = JSON.parse(M), q = await Vt(), F = new q.Database();
          await bi(O, F);
          const Z = F.export();
          F.close();
          const se = await f(), Se = B.join(se, ".semio", "kit.db");
          await S.mkdir(B.dirname(Se), {
            recursive: true
          }), await S.writeFile(Se, Buffer.from(Z));
        }), n("opens existing metabolism folder via .semio/kit.db without creating a new kit", async () => {
          const k = await d(), S = await f(), B = await T(S), O = (await k.createFolderKitStore(B)).getSnapshot();
          i(O.sync.status).toBe("ready"), i(O.kit.guid).not.toBe(""), i(O.kit.name).toBe("Metabolism"), i((O.kit.types ?? []).length).toBeGreaterThan(0);
        }), n("reads real binary files (e.g. representations/base.glb) via the folder adapter", async () => {
          const k = await d(), S = await f(), B = await T(S), M = await k.createFolderKitStore(B), O = await M.readFile("representations/base.glb");
          i(O).not.toBeNull(), i(O.size).toBeGreaterThan(0);
          const q = await M.listFiles();
          i(q.some((F) => F === "representations/base.glb")).toBe(true);
        }), n("loads types with models pointing at kit files so 3D meshes resolve", async () => {
          var _a3, _b;
          const k = await d(), S = await f(), B = await T(S), M = await k.createFolderKitStore(B), O = M.getSnapshot().kit, q = (O.types ?? []).filter((de) => (de.models ?? []).length > 0);
          i(q.length).toBeGreaterThan(0);
          const F = new Set((O.files ?? []).map((de) => de.guid));
          for (const de of q) for (const ce of de.models ?? []) i((_a3 = ce.file) == null ? void 0 : _a3.guid).toBeDefined(), i(F.has(ce.file.guid)).toBe(true);
          const Z = (_b = q[0].models) == null ? void 0 : _b[0], se = (O.files ?? []).find((de) => {
            var _a4;
            return de.guid === ((_a4 = Z == null ? void 0 : Z.file) == null ? void 0 : _a4.guid);
          });
          i(se).toBeDefined();
          const Se = (() => {
            var _a4, _b2;
            const de = new Map((O.folders ?? []).map((xe) => [
              xe.guid,
              xe
            ])), ce = [
              se.name
            ];
            let fe = (_a4 = se.folder) == null ? void 0 : _a4.guid;
            for (; fe; ) {
              const xe = de.get(fe);
              if (!xe) break;
              ce.unshift(xe.name), fe = (_b2 = xe.parent) == null ? void 0 : _b2.guid;
            }
            return ce.join("/");
          })(), ve = await M.readFile(Se);
          i(ve).not.toBeNull(), i(ve.size).toBeGreaterThan(0);
        }), n("synchronizes apply() \u2192 save() back to .semio/kit.db on disk", async () => {
          const k = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((O) => O._), [], import.meta.url), S = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((O) => O._), [], import.meta.url), B = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((O) => O._), [], import.meta.url), M = await k.mkdtemp(B.join(S.tmpdir(), "semio-folder-kit-"));
          try {
            const O = await d(), q = await T(M), F = await O.createFolderKitStore(q);
            F.replace({
              guid: "seeded-folder-kit",
              name: "Seeded Folder Kit",
              createdAt: "2026-01-01T00:00:00.000Z",
              updatedAt: "2026-01-01T00:00:00.000Z",
              types: [
                {
                  guid: "seed-type",
                  name: "Seed",
                  createdAt: "2026-01-01T00:00:00.000Z",
                  updatedAt: "2026-01-01T00:00:00.000Z"
                }
              ]
            }), await F.save();
            const Z = B.join(M, ".semio", "kit.db"), se = await k.stat(Z);
            i(se.size).toBeGreaterThan(0), F.apply({
              types: {
                added: [
                  {
                    guid: "added-type",
                    name: "Added",
                    createdAt: "2026-01-01T00:00:00.000Z",
                    updatedAt: "2026-01-01T00:00:00.000Z"
                  }
                ]
              }
            }), await F.save();
            const ve = (await O.createFolderKitStore(await T(M))).getSnapshot();
            i(ve.kit.name).toBe("Seeded Folder Kit"), i((ve.kit.types ?? []).map((de) => de.name).sort()).toEqual([
              "Added",
              "Seed"
            ]);
          } finally {
            await k.rm(M, {
              recursive: true,
              force: true
            });
          }
        });
      }), e("Remote Kit (SessionKitStore)", () => {
        const k = () => {
          const S = [];
          class B {
            constructor(O) {
              __publicField(this, "onopen", null);
              __publicField(this, "onmessage", null);
              __publicField(this, "onclose", null);
              __publicField(this, "onerror", null);
              __publicField(this, "readyState", 1);
              __publicField(this, "sent", []);
              __publicField(this, "url");
              this.url = O, S.push(this), setTimeout(() => {
                var _a3;
                return (_a3 = this.onopen) == null ? void 0 : _a3.call(this);
              }, 0);
            }
            send(O) {
              this.sent.push(O);
            }
            close() {
              var _a3;
              this.readyState = 3, (_a3 = this.onclose) == null ? void 0 : _a3.call(this);
            }
            emit(O) {
              var _a3;
              (_a3 = this.onmessage) == null ? void 0 : _a3.call(this, {
                data: JSON.stringify(O)
              });
            }
          }
          return {
            MockWebSocket: B,
            instances: S
          };
        };
        n("creates a remote session, loads snapshot, and handles server events", async () => {
          var _a3;
          const S = await d(), { MockWebSocket: B, instances: M } = k(), O = globalThis.fetch, q = globalThis.WebSocket;
          globalThis.WebSocket = B;
          const F = {
            guid: "remote-session-kit",
            name: "Remote Session Kit",
            types: [],
            designs: [],
            createdAt: "2026-01-01T00:00:00.000Z",
            updatedAt: "2026-01-01T00:00:00.000Z"
          };
          globalThis.fetch = (async (Z, se) => {
            const Se = String(Z);
            return Se.endsWith("/sessions") && (se == null ? void 0 : se.method) === "POST" ? new Response(JSON.stringify({
              session_id: "session-42"
            }), {
              status: 200,
              headers: {
                "content-type": "application/json"
              }
            }) : Se.endsWith("/sessions/session-42/snapshot") ? new Response(JSON.stringify({
              kit: F,
              domain_version: 1,
              semio_version: 0
            }), {
              status: 200,
              headers: {
                "content-type": "application/json"
              }
            }) : Se.endsWith("/sessions/session-42/commands") && (se == null ? void 0 : se.method) === "POST" ? new Response("{}", {
              status: 200,
              headers: {
                "content-type": "application/json"
              }
            }) : new Response("{}", {
              status: 200
            });
          });
          try {
            const Z = await S.createSessionKitStore({
              serverUrl: "http://localhost:12345",
              kitName: "Remote Session Kit"
            });
            i(Z.sessionId).toBe("session-42"), i(Z.getSnapshot().kit.name).toBe("Remote Session Kit"), i(Z.getSnapshot().sync.status).toBe("ready"), await new Promise((ve) => setTimeout(ve, 5));
            const se = M[0];
            i(se).toBeDefined(), se.emit({
              event: "DomainCommandAccepted",
              domain_version: 2,
              changes: [
                {
                  op: "Created",
                  entity_kind: "type",
                  entity_id: "remote-type-1",
                  snapshot: {
                    name: "Remote Type",
                    createdAt: "2026-01-01T00:00:00.000Z",
                    updatedAt: "2026-01-01T00:00:00.000Z"
                  }
                }
              ]
            });
            const Se = Z.getSnapshot().kit.types ?? [];
            i(Se.some((ve) => ve.guid === "remote-type-1" && ve.name === "Remote Type")).toBe(true), (_a3 = Z.dispose) == null ? void 0 : _a3.call(Z);
          } finally {
            globalThis.fetch = O, globalThis.WebSocket = q;
          }
        });
      });
    }), e("Meta/Shallow", () => {
      e("Kit/Meta", () => {
        n("parses metabolism.meta.kit.semio.json with KitMetaSchema", () => {
          const s = nn.parse(x);
          i(s.name).toBe("Metabolism"), i(s.guid).toBe("f042c2a4-3ba5-44b0-b22c-0ae8f568aacc"), i(s.types).toBeUndefined(), i(s.designs).toBeUndefined(), i(s.files).toBeUndefined();
        }), n("toKitMeta strips collections from full kit", () => {
          const c = wo(R);
          i(c.name).toBe("Metabolism"), i(c.types).toBeUndefined(), i(c.designs).toBeUndefined(), i(c.files).toBeUndefined();
        }), n("roundtrips KitMeta through serialize/deserialize", () => {
          const c = wo(R), a = mc(c), d = hc(a);
          i(d.name).toBe(c.name), i(d.guid).toBe(c.guid);
        });
      }), e("Kit/Shallow", () => {
        n("parses metabolism.shallow.kit.semio.json with KitShallowSchema", () => {
          const s = on.parse(A);
          i(s.name).toBe("Metabolism"), i(s.types).toBeDefined(), i(s.types.length).toBeGreaterThan(0);
          const c = s.types[0];
          i(c.models).toBeUndefined(), i(c.connectors).toBeUndefined();
        }), n("toKitShallow converts full kit to shallow with meta children", () => {
          const c = So(R);
          i(c.name).toBe("Metabolism"), i(c.types).toBeDefined(), i(c.types.length).toBeGreaterThan(0);
          const a = c.types[0];
          i(a.models).toBeUndefined(), i(a.connectors).toBeUndefined();
        }), n("roundtrips KitShallow through serialize/deserialize", () => {
          const c = So(R), a = yc(c), d = vc(a);
          i(d.name).toBe(c.name), i(d.types.length).toBe(c.types.length);
        });
      }), e("Type/Meta", () => {
        n("parses tambour.meta.type.semio.json with TypeMetaSchema", () => {
          const s = Yi.parse(C);
          i(s.name).toBe("Tambour"), i(s.guid).toBe("2a6bb3e8-4adb-44a3-bc87-3314b77b40f7"), i(s.models).toBeUndefined(), i(s.connectors).toBeUndefined(), i(s.props).toBeUndefined();
        }), n("toTypeMeta strips collections from full type", () => {
          const c = R.types.find((d) => d.name === "Tambour"), a = wc(c);
          i(a.name).toBe("Tambour"), i(a.models).toBeUndefined(), i(a.connectors).toBeUndefined();
        });
      }), e("Type/Shallow", () => {
        n("parses tambour.shallow.type.semio.json with TypeShallowSchema", () => {
          const s = is.parse(G);
          if (i(s.name).toBe("Tambour"), s.models) {
            const c = s.models[0];
            i(c.tags).toBeUndefined();
          }
        }), n("toTypeShallow converts full type to shallow with meta children", () => {
          const c = R.types.find((d) => d.name === "Tambour"), a = Sc(c);
          if (i(a.name).toBe("Tambour"), a.models) {
            const d = a.models[0];
            i(d.tags).toBeUndefined();
          }
        });
      }), e("Design/Meta", () => {
        n("parses nakagin-capsule-tower.meta.design.semio.json with DesignMetaSchema", () => {
          const s = tn.parse(ee);
          i(s.name).toBe("Nakagin Capsule Tower"), i(s.guid).toBe("9a890dd4-0a9c-48ac-920a-9e62666465ef"), i(s.pieces).toBeUndefined(), i(s.connections).toBeUndefined();
        }), n("toDesignMeta strips collections from full design", () => {
          const c = R.designs.find((d) => d.name === "Nakagin Capsule Tower" && !d.parent), a = Ec(c);
          i(a.name).toBe("Nakagin Capsule Tower"), i(a.pieces).toBeUndefined(), i(a.connections).toBeUndefined();
        });
      }), e("Design/Shallow", () => {
        n("parses nakagin-capsule-tower.shallow.design.semio.json with DesignShallowSchema", () => {
          const s = us.parse(ge);
          if (i(s.name).toBe("Nakagin Capsule Tower"), s.pieces) {
            const c = s.pieces[0];
            i(c.attributes).toBeUndefined();
          }
        }), n("toDesignShallow converts full design to shallow with meta children", () => {
          const c = R.designs.find((d) => d.name === "Nakagin Capsule Tower" && !d.parent), a = _c(c);
          if (i(a.name).toBe("Nakagin Capsule Tower"), a.pieces) {
            const d = a.pieces[0];
            i(d.attributes).toBeUndefined();
          }
        });
      });
    }), e("Kit/Hash", () => {
      n("hashKit produces a 64-char lowercase hex string", () => {
        const c = Qt(R);
        i(c).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashKit is deterministic (same input produces same output)", () => {
        const s = JSON.parse(JSON.stringify(R)), c = JSON.parse(JSON.stringify(R));
        i(Qt(s)).toBe(Qt(c));
      }), n("hashDesign produces a 64-char lowercase hex string", () => {
        const c = R.designs.find((d) => d.name === "Nakagin Capsule Tower" && !d.parent), a = $n(c);
        i(a).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashType produces a 64-char lowercase hex string", () => {
        const c = R.types[0], a = qn(c);
        i(a).toMatch(/^[0-9a-f]{64}$/);
      }), n("different kits produce different hashes", () => {
        const s = R, c = {
          ...s,
          name: "Different Name"
        };
        i(Qt(s)).not.toBe(Qt(c));
      }), n("sha256 of empty input matches known value", () => {
        const s = Sn(new Uint8Array(0));
        i(s).toBe("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
      }), n("sha256 of 'abc' matches known value", () => {
        const s = Sn(new TextEncoder().encode("abc"));
        i(s).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
      }), n("hashPiece is deterministic", () => {
        const a = R.designs.find((f) => f.name === "Nakagin Capsule Tower" && !f.parent).pieces[0], d = Ii(a), g = Ii(a);
        i(d).toBe(g), i(d).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashConnection is deterministic", () => {
        const a = R.designs.find((f) => f.name === "Nakagin Capsule Tower" && !f.parent).connections[0], d = Fi(a), g = Fi(a);
        i(d).toBe(g), i(d).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashConnector is deterministic", () => {
        const a = R.types.find((f) => f.connectors && f.connectors.length > 0).connectors[0], d = Mi(a), g = Mi(a);
        i(d).toBe(g), i(d).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashKitDiff is deterministic and produces valid hash", () => {
        const s = R, c = {
          ...s,
          name: "Modified Kit",
          description: "New description"
        }, a = pt(s, c), d = Dt(a), g = Dt(a);
        i(d).toBe(g), i(d).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashKitDiff produces different hashes for different diffs", () => {
        const s = R, c = {
          ...s,
          name: "Modified1"
        }, a = {
          ...s,
          name: "Modified2"
        }, d = pt(s, c), g = pt(s, a);
        i(Dt(d)).not.toBe(Dt(g));
      }), n("hashKitDiff empty diff produces a consistent hash", () => {
        const s = R, c = pt(s, s), a = Dt(c);
        i(a).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashAttributeDiff is deterministic", () => {
        const s = {
          key: "newKey",
          value: "newValue"
        }, c = Tn(s), a = Tn(s);
        i(c).toBe(a), i(c).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashCoordDiff is deterministic", () => {
        const s = {
          u: 1,
          v: 2
        }, c = _o(s), a = _o(s);
        i(c).toBe(a), i(c).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashTypeDiff with collection diffs is deterministic", () => {
        const s = R;
        if (s.types && s.types.length >= 2) {
          const c = {
            ...s,
            types: s.types.map((d, g) => g === 0 ? {
              ...d,
              description: "Updated type description"
            } : d)
          }, a = pt(s, c);
          if (a.types) {
            const d = kn(a.types), g = kn(a.types);
            i(d).toBe(g), i(d).toMatch(/^[0-9a-f]{64}$/);
          }
        }
      }), n("hashDesignDiff is deterministic", () => {
        const s = R;
        if (s.designs && s.designs.length >= 1) {
          const c = {
            ...s,
            designs: s.designs.map((d, g) => g === 0 ? {
              ...d,
              description: "Updated design"
            } : d)
          }, a = pt(s, c);
          if (a.designs) {
            const d = Bn(a.designs), g = Bn(a.designs);
            i(d).toBe(g), i(d).toMatch(/^[0-9a-f]{64}$/);
          }
        }
      }), n("hashPlaneDiff is deterministic", () => {
        const s = {
          origin: {
            x: 1,
            y: 2
          },
          xAxis: {
            x: 1
          }
        }, c = An(s), a = An(s);
        i(c).toBe(a), i(c).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashSideDiff is deterministic", () => {
        const s = {
          piece: {
            guid: "p1"
          }
        }, c = Ui(s), a = Ui(s);
        i(c).toBe(a), i(c).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashConnectionDiff is deterministic", () => {
        const s = {
          gap: 0.5,
          rotation: 90
        }, c = Cn(s), a = Cn(s);
        i(c).toBe(a), i(c).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashStatDiff is deterministic", () => {
        const s = {
          min: 0,
          max: 100,
          unit: "mm"
        }, c = bn(s), a = bn(s);
        i(c).toBe(a), i(c).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashKitDiff with type addition produces valid hash", () => {
        const s = R, c = {
          guid: "new-type-guid",
          name: "NewType"
        }, a = {
          ...s,
          types: [
            ...s.types ?? [],
            c
          ]
        }, d = pt(s, a), g = Dt(d);
        i(g).toMatch(/^[0-9a-f]{64}$/);
      }), n("hashKitDiff matches expected canonical value", () => {
        const c = Dt({
          name: "updated",
          description: null
        });
        i(c).toBe("d9ee3052111fec2e0fe08119eee6b8d5b6f5578a940f6d5c6bb1806e6e0f36a5");
      });
    }), e("MaxChildren", () => {
      e("Port", () => {
        n("Port schema accepts maxChildren", () => {
          const s = {
            guid: "p1",
            name: "TestPort",
            maxChildren: 3
          }, c = jt.parse(s);
          i(c.maxChildren).toBe(3);
        }), n("Port schema allows omitting maxChildren", () => {
          const s = {
            guid: "p1",
            name: "TestPort"
          }, c = jt.parse(s);
          i(c.maxChildren).toBeUndefined();
        }), n("Port diff detects maxChildren change", () => {
          const a = Ai({
            name: "TestPort",
            maxChildren: 1
          }, {
            name: "TestPort",
            maxChildren: 5
          });
          i(a.maxChildren).toBe(5);
        }), n("Port diff detects maxChildren removal", () => {
          const a = Ai({
            name: "TestPort",
            maxChildren: 3
          }, {
            name: "TestPort"
          });
          i(a.maxChildren).toBeNull();
        }), n("Port diff ignores unchanged maxChildren", () => {
          const a = Ai({
            name: "TestPort",
            maxChildren: 2
          }, {
            name: "TestPort",
            maxChildren: 2
          });
          i(a.maxChildren).toBeUndefined();
        }), n("Port apply diff sets maxChildren", () => {
          const a = hn({
            guid: "p1",
            name: "TestPort"
          }, {
            maxChildren: 4
          });
          i(a.maxChildren).toBe(4);
        }), n("Port apply diff removes maxChildren with null", () => {
          const a = hn({
            guid: "p1",
            name: "TestPort",
            maxChildren: 3
          }, {
            maxChildren: null
          });
          i(a.maxChildren).toBeUndefined();
        }), n("Port inverse diff restores maxChildren", () => {
          const a = Jo({
            name: "TestPort",
            maxChildren: 2
          }, {
            maxChildren: 5
          });
          i(a.maxChildren).toBe(2);
        });
      }), e("Connector", () => {
        n("Connector schema accepts maxChildren", () => {
          const s = {
            guid: "c1",
            t: 0,
            point: {
              x: 0,
              y: 0,
              z: 0
            },
            direction: {
              x: 0,
              y: 0,
              z: 1
            },
            maxChildren: 3
          }, c = Ft.parse(s);
          i(c.maxChildren).toBe(3);
        }), n("Connector schema allows omitting maxChildren", () => {
          const s = {
            guid: "c1",
            t: 0,
            point: {
              x: 0,
              y: 0,
              z: 0
            },
            direction: {
              x: 0,
              y: 0,
              z: 1
            }
          }, c = Ft.parse(s);
          i(c.maxChildren).toBeUndefined();
        }), n("Connector diff detects maxChildren change", () => {
          const a = yn({
            t: 0,
            point: {
              x: 0,
              y: 0,
              z: 0
            },
            direction: {
              x: 0,
              y: 0,
              z: 1
            },
            maxChildren: 1
          }, {
            t: 0,
            point: {
              x: 0,
              y: 0,
              z: 0
            },
            direction: {
              x: 0,
              y: 0,
              z: 1
            },
            maxChildren: 5
          });
          i(a.maxChildren).toBe(5);
        }), n("Connector diff detects maxChildren removal", () => {
          const a = yn({
            t: 0,
            point: {
              x: 0,
              y: 0,
              z: 0
            },
            direction: {
              x: 0,
              y: 0,
              z: 1
            },
            maxChildren: 3
          }, {
            t: 0,
            point: {
              x: 0,
              y: 0,
              z: 0
            },
            direction: {
              x: 0,
              y: 0,
              z: 1
            }
          });
          i(a.maxChildren).toBeNull();
        }), n("Connector apply diff sets maxChildren", () => {
          const a = vn({
            guid: "c1",
            t: 0,
            point: {
              x: 0,
              y: 0,
              z: 0
            },
            direction: {
              x: 0,
              y: 0,
              z: 1
            }
          }, {
            maxChildren: 4
          });
          i(a.maxChildren).toBe(4);
        }), n("Connector apply diff removes maxChildren with null", () => {
          const a = vn({
            guid: "c1",
            t: 0,
            point: {
              x: 0,
              y: 0,
              z: 0
            },
            direction: {
              x: 0,
              y: 0,
              z: 1
            },
            maxChildren: 3
          }, {
            maxChildren: null
          });
          i(a.maxChildren).toBeUndefined();
        }), n("Connector inverse diff restores maxChildren", () => {
          const a = ts({
            t: 0,
            point: {},
            direction: {},
            maxChildren: 2
          }, {
            maxChildren: 5
          });
          i(a.maxChildren).toBe(2);
        });
      }), e("Kit Roundtrip", () => {
        n("Kit with maxChildren roundtrips through JSON", () => {
          const c = Kt({
            guid: "kit-1",
            name: "TestKit",
            ports: [
              {
                guid: "p1",
                name: "Port1",
                maxChildren: 3
              }
            ],
            types: [
              {
                guid: "t1",
                name: "Type1",
                connectors: [
                  {
                    guid: "c1",
                    t: 0,
                    point: {
                      x: 0,
                      y: 0,
                      z: 0
                    },
                    direction: {
                      x: 0,
                      y: 0,
                      z: 1
                    },
                    maxChildren: 5
                  }
                ]
              }
            ]
          }), a = Ht(c);
          i(a.ports[0].maxChildren).toBe(3), i(a.types[0].connectors[0].maxChildren).toBe(5);
        }), n("Kit diff captures maxChildren changes on both port and connector", () => {
          var _a3, _b, _c2, _d2, _e2, _f, _g, _h, _i2;
          const s = {
            guid: "kit-1",
            name: "TestKit",
            ports: [
              {
                guid: "p1",
                name: "Port1",
                maxChildren: 1
              }
            ],
            types: [
              {
                guid: "t1",
                name: "Type1",
                connectors: [
                  {
                    guid: "c1",
                    t: 0,
                    point: {
                      x: 0,
                      y: 0,
                      z: 0
                    },
                    direction: {
                      x: 0,
                      y: 0,
                      z: 1
                    },
                    maxChildren: 1
                  }
                ]
              }
            ]
          }, a = pt(s, {
            name: "TestKit",
            ports: [
              {
                guid: "p1",
                name: "Port1",
                maxChildren: 10
              }
            ],
            types: [
              {
                guid: "t1",
                name: "Type1",
                connectors: [
                  {
                    guid: "c1",
                    t: 0,
                    point: {
                      x: 0,
                      y: 0,
                      z: 0
                    },
                    direction: {
                      x: 0,
                      y: 0,
                      z: 1
                    },
                    maxChildren: 20
                  }
                ]
              }
            ]
          });
          i((_c2 = (_b = (_a3 = a.ports) == null ? void 0 : _a3.updated) == null ? void 0 : _b[0]) == null ? void 0 : _c2.diff.maxChildren).toBe(10), i((_i2 = (_h = (_g = (_f = (_e2 = (_d2 = a.types) == null ? void 0 : _d2.updated) == null ? void 0 : _e2[0]) == null ? void 0 : _f.diff.connectors) == null ? void 0 : _g.updated) == null ? void 0 : _h[0]) == null ? void 0 : _i2.diff.maxChildren).toBe(20);
          const d = ht(s, a);
          i(d.ports[0].maxChildren).toBe(10), i(d.types[0].connectors[0].maxChildren).toBe(20);
        });
      });
    });
    const Ie = () => ({
      isTransactionActive: false,
      currentTransactionStack: [],
      pastTransactionStack: [],
      redoStack: []
    }), Re = (s) => s.isTransactionActive ? {
      ...Fe(s),
      isTransactionActive: true,
      currentTransactionStack: []
    } : {
      ...s,
      isTransactionActive: true,
      currentTransactionStack: []
    }, Fe = (s) => {
      if (!s.isTransactionActive) return s;
      const c = [
        ...s.pastTransactionStack
      ];
      if (s.currentTransactionStack.length > 0) {
        const a = s.currentTransactionStack, d = a.length === 1 ? a[0] : {
          do: a[a.length - 1].do,
          undo: a[0].undo
        };
        c.push(d);
      }
      return {
        isTransactionActive: false,
        currentTransactionStack: [],
        pastTransactionStack: c,
        redoStack: []
      };
    }, Lt = (s) => s.isTransactionActive ? {
      ...s,
      isTransactionActive: false,
      currentTransactionStack: []
    } : s, Ne = (s, c) => s.isTransactionActive ? {
      ...s,
      currentTransactionStack: [
        ...s.currentTransactionStack,
        c
      ],
      redoStack: []
    } : s, rt = (s) => {
      if (s.isTransactionActive) {
        if (s.currentTransactionStack.length === 0) return s;
        const d = [
          ...s.currentTransactionStack
        ];
        return d.pop(), {
          ...s,
          currentTransactionStack: d
        };
      }
      if (s.pastTransactionStack.length === 0) return s;
      const c = [
        ...s.pastTransactionStack
      ], a = c.pop();
      return {
        ...s,
        pastTransactionStack: c,
        redoStack: [
          ...s.redoStack,
          a
        ]
      };
    }, bt = (s) => {
      if (s.isTransactionActive || s.redoStack.length === 0) return s;
      const c = [
        ...s.redoStack
      ], a = c.pop();
      return {
        ...s,
        pastTransactionStack: [
          ...s.pastTransactionStack,
          a
        ],
        redoStack: c
      };
    }, ke = (s, c) => ({
      do: {
        value: s
      },
      undo: {
        value: c
      }
    });
    e("Transaction Undo/Redo", () => {
      n("single commit places edit in past stack", () => {
        let s = Ie();
        s = Re(s);
        const c = ke("d1", "u1");
        s = Ne(s, c), s = Fe(s), i(s.isTransactionActive).toBe(false), i(s.pastTransactionStack).toHaveLength(1), i(s.pastTransactionStack[0]).toEqual(c), i(s.currentTransactionStack).toHaveLength(0), i(s.redoStack).toHaveLength(0);
      }), n("multi-step transaction merges first.undo + last.do", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("dA", "uA")), s = Ne(s, ke("dB", "uB")), s = Ne(s, ke("dC", "uC")), s = Fe(s), i(s.pastTransactionStack).toHaveLength(1);
        const c = s.pastTransactionStack[0];
        i(c.do).toEqual({
          value: "dC"
        }), i(c.undo).toEqual({
          value: "uA"
        });
      }), n("empty transaction is ignored on commit", () => {
        let s = Ie();
        s = Re(s), s = Fe(s), i(s.pastTransactionStack).toHaveLength(0), i(s.isTransactionActive).toBe(false);
      }), n("abort discards current transaction stack", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("d1", "u1")), s = Ne(s, ke("d2", "u2")), s = Lt(s), i(s.isTransactionActive).toBe(false), i(s.currentTransactionStack).toHaveLength(0), i(s.pastTransactionStack).toHaveLength(0);
      }), n("abort does not affect committed past stack", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("d1", "u1")), s = Fe(s), s = Re(s), s = Ne(s, ke("d2", "u2")), s = Lt(s), i(s.pastTransactionStack).toHaveLength(1), i(s.pastTransactionStack[0].do).toEqual({
          value: "d1"
        });
      }), n("undo moves last committed transaction to redo stack", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("d1", "u1")), s = Fe(s), s = rt(s), i(s.pastTransactionStack).toHaveLength(0), i(s.redoStack).toHaveLength(1), i(s.redoStack[0].do).toEqual({
          value: "d1"
        });
      }), n("redo moves last undone transaction back to past stack", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("d1", "u1")), s = Fe(s), s = rt(s), s = bt(s), i(s.pastTransactionStack).toHaveLength(1), i(s.redoStack).toHaveLength(0), i(s.pastTransactionStack[0].do).toEqual({
          value: "d1"
        });
      }), n("redo invalidation: new commit clears redo stack", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("dA", "uA")), s = Fe(s), s = rt(s), i(s.redoStack).toHaveLength(1), s = Re(s), s = Ne(s, ke("dB", "uB")), s = Fe(s), i(s.redoStack).toHaveLength(0), i(s.pastTransactionStack).toHaveLength(1), i(s.pastTransactionStack[0].do).toEqual({
          value: "dB"
        });
      }), n("redo invalidation: recording edit clears redo stack", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("dA", "uA")), s = Fe(s), s = rt(s), i(s.redoStack).toHaveLength(1), s = Re(s), s = Ne(s, ke("dB", "uB")), i(s.redoStack).toHaveLength(0);
      }), n("undo boundary: undo with empty past stack is no-op", () => {
        let s = Ie();
        const c = {
          ...s
        };
        s = rt(s), i(s).toEqual(c);
      }), n("redo boundary: redo with empty redo stack is no-op", () => {
        let s = Ie();
        const c = {
          ...s
        };
        s = bt(s), i(s).toEqual(c);
      }), n("redo is blocked during active transaction", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("dA", "uA")), s = Fe(s), s = rt(s), i(s.redoStack).toHaveLength(1), s = Re(s);
        const c = {
          ...s,
          redoStack: [
            ...s.redoStack
          ]
        };
        s = bt(s), i(s.redoStack).toEqual(c.redoStack);
      }), n("undo inside active transaction pops from current stack", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("d1", "u1")), s = Ne(s, ke("d2", "u2")), i(s.currentTransactionStack).toHaveLength(2), s = rt(s), i(s.currentTransactionStack).toHaveLength(1), i(s.currentTransactionStack[0].do).toEqual({
          value: "d1"
        }), s = rt(s), i(s.currentTransactionStack).toHaveLength(0);
      }), n("fresh start preserves redo stack", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("dA", "uA")), s = Fe(s), s = rt(s), i(s.redoStack).toHaveLength(1), s = Re(s), i(s.redoStack).toHaveLength(1), i(s.isTransactionActive).toBe(true);
      }), n("nested start auto-finalizes previous transaction", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("dA", "uA")), s = Re(s), i(s.pastTransactionStack).toHaveLength(1), i(s.pastTransactionStack[0].do).toEqual({
          value: "dA"
        }), i(s.isTransactionActive).toBe(true), i(s.currentTransactionStack).toHaveLength(0);
      }), n("multiple undo/redo cycles are symmetric", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("d1", "u1")), s = Fe(s), s = Re(s), s = Ne(s, ke("d2", "u2")), s = Fe(s), s = Re(s), s = Ne(s, ke("d3", "u3")), s = Fe(s), i(s.pastTransactionStack).toHaveLength(3), s = rt(s), s = rt(s), i(s.pastTransactionStack).toHaveLength(1), i(s.redoStack).toHaveLength(2), s = bt(s), i(s.pastTransactionStack).toHaveLength(2), i(s.redoStack).toHaveLength(1), s = bt(s), i(s.pastTransactionStack).toHaveLength(3), i(s.redoStack).toHaveLength(0);
      }), n("undo all then redo all restores original stack", () => {
        let s = Ie();
        s = Re(s), s = Ne(s, ke("d1", "u1")), s = Fe(s), s = Re(s), s = Ne(s, ke("d2", "u2")), s = Fe(s);
        const c = s.pastTransactionStack.map((a) => ({
          ...a
        }));
        s = rt(s), s = rt(s), i(s.pastTransactionStack).toHaveLength(0), s = bt(s), s = bt(s), i(s.pastTransactionStack).toHaveLength(2), i(s.pastTransactionStack[0]).toEqual(c[0]), i(s.pastTransactionStack[1]).toEqual(c[1]);
      }), n("recordEdit outside active transaction is no-op", () => {
        let s = Ie();
        const c = ke("d1", "u1");
        s = Ne(s, c), i(s.currentTransactionStack).toHaveLength(0), i(s.pastTransactionStack).toHaveLength(0);
      }), n("kit diff roundtrip: apply then inverse restores original state", () => {
        const s = {
          guid: "undo-kit-1",
          name: "UndoKit",
          types: [
            {
              guid: "t1",
              name: "Wall",
              description: "A wall segment",
              icon: ""
            }
          ],
          designs: []
        }, c = {
          types: {
            added: [
              {
                guid: "t2",
                name: "Column",
                description: "A column",
                icon: ""
              }
            ],
            updated: [
              {
                type: {
                  guid: "t1"
                },
                diff: {
                  description: "Modified wall"
                }
              }
            ]
          }
        }, a = ht(s, c);
        i(a.types).toHaveLength(2), i(a.types[0].description).toBe("Modified wall");
        const d = $t(s, c), g = ht(a, d);
        i(g.types).toHaveLength(1), i(g.types[0].description).toBe("A wall segment"), i(g.types[0].guid).toBe("t1");
      });
    });
  }
  const Po = 3;
  async function Bt(t, e) {
    const i = performance.now();
    for (let r = 0; r < Po; r++) await e();
    const o = (performance.now() - i) / 1e3 / Po;
    console.log(`${t},${o.toFixed(6)}`);
  }
  async function $d() {
    const t = (await we(async () => {
      const { default: L } = await import("./metabolism.kit.diff.semio-CGN0weIc.js");
      return {
        default: L
      };
    }, [], import.meta.url)).default, e = (await we(async () => {
      const { default: L } = await import("./metabolism.kit.diff.inverted.semio-CY5cGjPv.js");
      return {
        default: L
      };
    }, [], import.meta.url)).default, i = (await we(async () => {
      const { default: L } = await import("./metabolism.kit.semio-BwiFUvRf.js");
      return {
        default: L
      };
    }, [], import.meta.url)).default, n = (await we(async () => {
      const { default: L } = await import("./invalid.kit.semio-DcJFMgjA.js");
      return {
        default: L
      };
    }, [], import.meta.url)).default, o = i, r = n, l = t, p = e, u = (L, U, j) => {
      var _a3, _b;
      let $;
      if (j) {
        const I = (_a3 = L.designs) == null ? void 0 : _a3.find((te) => te.name === j);
        if (!I) throw new Error(`Parent ${j} not found`);
        $ = I.guid;
      }
      const R = (_b = L.designs) == null ? void 0 : _b.find((I) => {
        var _a4;
        return I.name === U && ($ ? ((_a4 = I.parent) == null ? void 0 : _a4.guid) === $ : !I.parent);
      });
      if (!R) throw new Error(`Design ${U} not found`);
      return R;
    };
    await Bt("Roundtrip/Metabolism", async () => {
      const L = await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((I) => I._), [], import.meta.url), j = (await we(() => import("./__vite-browser-external-D7Ct-6yo.js").then((I) => I._), [], import.meta.url)).resolve("../assets/semio/metabolism.zip"), $ = L.readFileSync(j), { kit: R } = await Ti($);
      await ki(R);
    }), await Bt("Diff/Metabolism", () => {
      const L = ht(o, l);
      ht(L, p);
    });
    const v = u(o, "Nakagin Capsule Tower");
    await Bt("Flatten Design/Nakagin Capsule Tower", () => {
      const L = at(o, v.guid);
      if (!L.ok) throw new Error(L.errors.map((U) => U.message).join("; "));
    });
    const _ = u(o, "Slanted", "Nakagin Capsule Tower");
    await Bt("Flatten Design/Nakagin Capsule Tower/Slanted", () => {
      const L = at(o, _.guid);
      if (!L.ok) throw new Error(L.errors.map((U) => U.message).join("; "));
    });
    const w = u(o, "Twisted", "Nakagin Capsule Tower");
    await Bt("Flatten Design/Nakagin Capsule Tower/Twisted", () => {
      const L = at(o, w.guid);
      if (!L.ok) throw new Error(L.errors.map((U) => U.message).join("; "));
    });
    const b = u(o, "Dancing", "Nakagin Capsule Tower");
    await Bt("Flatten Design/Nakagin Capsule Tower/Dancing", () => {
      const L = at(o, b.guid);
      if (!L.ok) throw new Error(L.errors.map((U) => U.message).join("; "));
    });
    const N = u(o, "Capsule Dream");
    await Bt("Flatten Design/Capsule Dream", () => {
      const L = at(o, N.guid);
      if (!L.ok) throw new Error(L.errors.map((U) => U.message).join("; "));
    }), await Bt("Validation/Invalid Kit", () => {
      ni(r);
    }), await Bt("Validation/Metabolism", () => {
      ni(o);
    });
  }
  typeof process < "u" && ((_a2 = process.argv) == null ? void 0 : _a2.includes("--bench")) && $d();
});
export {
  Gt as ALL_KIT_KINDS,
  vr as AttributeDiffSchema,
  Xn as AttributeIdSchema,
  Zt as AttributeMetaSchema,
  ze as AttributeSchema,
  je as AttributesDiffSchema,
  xr as AuthorDiffSchema,
  si as AuthorIdSchema,
  Uo as AuthorMetaSchema,
  Ki as AuthorSchema,
  Go as AuthorsDiffSchema,
  Dr as BenchmarkDiffSchema,
  Qn as BenchmarkIdSchema,
  Mn as BenchmarkSchema,
  Ur as BenchmarksDiffSchema,
  yr as CameraSchema,
  ca as ConceptDiffSchema,
  ci as ConceptIdSchema,
  Xo as ConceptMetaSchema,
  ji as ConceptSchema,
  ga as ConceptsDiffSchema,
  Va as ConnectionDiffSchema,
  no as ConnectionIdSchema,
  cs as ConnectionMetaSchema,
  Qi as ConnectionSchema,
  Ja as ConnectionsDiffSchema,
  xa as ConnectorDiffSchema,
  Ni as ConnectorIdSchema,
  es as ConnectorMetaSchema,
  Ft as ConnectorSchema,
  Aa as ConnectorsDiffSchema,
  Mo as CoordSchema,
  ec as DesignDiffSchema,
  Li as DesignIdSchema,
  tn as DesignMetaSchema,
  pi as DesignSchema,
  us as DesignShallowSchema,
  ic as DesignsDiffSchema,
  or as DiffStatus,
  Ro as EXPORT_MODEL_FORMATS,
  br as FileDiffSchema,
  un as FileIdSchema,
  zo as FileMetaSchema,
  Hi as FileSchema,
  Br as FilesDiffSchema,
  Rr as FolderDiffSchema,
  Bi as FolderIdSchema,
  Vo as FolderMetaSchema,
  Vi as FolderSchema,
  Pr as FoldersDiffSchema,
  Ga as GroupDiffSchema,
  io as GroupIdSchema,
  as as GroupMetaSchema,
  Xi as GroupSchema,
  Ha as GroupsDiffSchema,
  Zn as ICON_WIDTH,
  mt as InMemoryKitStore,
  Od as KIT_SQLITE_SCHEMA,
  xc as KitDiffSchema,
  so as KitIdSchema,
  zt as KitKindSchema,
  nn as KitMetaSchema,
  Nt as KitSchema,
  on as KitShallowSchema,
  Ra as LayerDiffSchema,
  ln as LayerIdSchema,
  ns as LayerMetaSchema,
  Zi as LayerSchema,
  Oa as LayersDiffSchema,
  Pn as LocationIdSchema,
  _r as LocationSchema,
  ha as ModelDiffSchema,
  to as ModelIdSchema,
  Qo as ModelMetaSchema,
  Wi as ModelSchema,
  Sa as ModelsDiffSchema,
  fc as PASTE_DESIGN_ANCHORING_KINDS,
  Pa as PieceDiffSchema,
  Mt as PieceIdSchema,
  ss as PieceMetaSchema,
  gi as PieceSchema,
  Fa as PiecesDiffSchema,
  fr as PlaneDiffSchema,
  mn as PlaneSchema,
  Dn as PointDiffSchema,
  zi as PointSchema,
  jr as PortDiffSchema,
  ri as PortIdSchema,
  $o as PortMetaSchema,
  jt as PortSchema,
  Wr as PortsDiffSchema,
  Qr as PropDiffSchema,
  eo as PropIdSchema,
  Xt as PropMetaSchema,
  It as PropSchema,
  $i as PropsDiffSchema,
  Jr as QualitiesDiffSchema,
  Hr as QualityDiffSchema,
  Ri as QualityIdSchema,
  qo as QualityMetaSchema,
  qi as QualitySchema,
  wn as SideDiffSchema,
  uo as SideIdSchema,
  Di as SideSchema,
  Wa as StatDiffSchema,
  oo as StatIdSchema,
  ds as StatMetaSchema,
  en as StatSchema,
  Qa as StatsDiffSchema,
  Ci as TOLERANCE,
  ea as TagDiffSchema,
  gn as TagIdSchema,
  Zo as TagMetaSchema,
  Ji as TagSchema,
  oa as TagsDiffSchema,
  Ta as TypeDiffSchema,
  ai as TypeIdSchema,
  Yi as TypeMetaSchema,
  li as TypeSchema,
  is as TypeShallowSchema,
  Ba as TypesDiffSchema,
  ur as VecSchema,
  di as VectorDiffSchema,
  Jt as VectorSchema,
  __tla,
  Er as applyAttributeDiff,
  We as applyAttributesDiff,
  kr as applyAuthorDiff,
  Mr as applyBenchmarkDiff,
  la as applyConceptDiff,
  ma as applyConceptsDiff,
  Kn as applyConnectionDiff,
  vn as applyConnectorDiff,
  it as applyDesignDiff,
  Cr as applyFileDiff,
  Or as applyFolderDiff,
  rs as applyGroupDiff,
  ht as applyKitDiff,
  os as applyLayerDiff,
  wa as applyModelDiff,
  zn as applyPieceDiff,
  hr as applyPlaneDiff,
  Io as applyPointDiff,
  hn as applyPortDiff,
  Xr as applyPortsDiff,
  Un as applyPropDiff,
  $r as applyQualityDiff,
  po as applySideDiff,
  Xa as applyStatDiff,
  na as applyTagDiff,
  aa as applyTagsDiff,
  ba as applyTypeDiff,
  fn as applyVectorDiff,
  iu as areDesignsInSameFamily,
  _i as areKitDiffsEqual,
  Bd as areKitDiffsEqualIgnoringNewGuids,
  ei as areKitsEqual,
  Xd as arePortsCompatible,
  Qd as areSameConnection,
  dr as areSameDesignId,
  cr as areSameTypeId,
  Rd as areValidationResultsEqual,
  yt as arraysEqual,
  ou as buildFileTree,
  fd as buildValidationContext,
  nu as colorPortsForTypes,
  wi as copyDesign,
  oc as createClusteredDesign,
  rr as createConnectorId,
  ar as createDesignId,
  co as createPieceId,
  ro as createPortId,
  sr as createQualityId,
  ao as createTypeId,
  Le as deepEqual,
  Os as defaultConstraints,
  nc as deletePiecesAndConnectionsInDesign,
  Ht as deserializeKit,
  hc as deserializeKitMeta,
  vc as deserializeKitShallow,
  fo as designWithDiff,
  Ct as dragPiecesInDesign,
  Bo as editTemporaryKit,
  rc as expandDesignPieces,
  dn as exportDesignModel,
  Co as exportFileKit,
  ki as exportKit,
  Et as filterKit,
  _a as filterModelsByTagGuids,
  xi as findAttributeValue,
  Tt as findDesignInKit,
  Ea as findModel,
  Fs as findParentConnectionForPieceInDesign,
  Ua as findPiece,
  ja as findPieceConnections,
  cc as findPieceConnectionsInDesign,
  tu as findPieceInDesign,
  wt as findReplaceableTypesInDesignsForPiecesInDesign,
  nd as findTypeInKit,
  Ia as fixPieceInDesign,
  at as flattenDesign,
  qd as flattenFileTree,
  kc as formatNumberForHash,
  kt as generateUniqueName,
  wr as getAttributeDiff,
  Ar as getAuthorDiff,
  Fr as getBenchmarkDiff,
  eu as getClusterableGroups,
  da as getConceptDiff,
  pa as getConceptsDiff,
  qa as getConnectionDiff,
  yn as getConnectorDiff,
  tc as getDesignDiff,
  Ko as getFileDiff,
  Nr as getFolderDiff,
  Kd as getGeometricInsightsForModel,
  za as getGroupDiff,
  ac as getIncludedDesigns,
  sd as getKitChange,
  pt as getKitDiff,
  Na as getLayerDiff,
  ya as getModelDiff,
  Da as getPieceDiff,
  mr as getPlaneDiff,
  Fo as getPointDiff,
  Ai as getPortDiff,
  Yr as getPortsDiff,
  xo as getPrimitiveDesign,
  Fn as getPropDiff,
  Vr as getQualityDiff,
  lo as getSideDiff,
  Vt as getSqlJs,
  Ya as getStatDiff,
  ta as getTagDiff,
  sa as getTagsDiff,
  ka as getTypeDiff,
  pn as getVectorDiff,
  gt as globMatch,
  Yt as guid,
  pd as hasErrors,
  et as hashAttribute,
  Tn as hashAttributeDiff,
  st as hashAttributesDiff,
  ws as hashAuthor,
  bc as hashAuthorDiff,
  Ls as hashAuthorsDiff,
  _s as hashBenchmark,
  Lc as hashBenchmarkDiff,
  Oc as hashBenchmarksDiff,
  ks as hashConcept,
  zc as hashConceptDiff,
  Kc as hashConceptsDiff,
  Fi as hashConnection,
  Cn as hashConnectionDiff,
  Qc as hashConnectionsDiff,
  Mi as hashConnector,
  qc as hashConnectorDiff,
  $c as hashConnectorsDiff,
  ys as hashCoord,
  _o as hashCoordDiff,
  $n as hashDesign,
  id as hashDesignDiff,
  Bn as hashDesignsDiff,
  Ss as hashFile,
  Cc as hashFileDiff,
  Bc as hashFilesDiff,
  Es as hashFolder,
  Rc as hashFolderDiff,
  Nc as hashFoldersDiff,
  Rs as hashGroup,
  Yc as hashGroupDiff,
  Zc as hashGroupsDiff,
  Qt as hashKit,
  Dt as hashKitDiff,
  Cs as hashLayer,
  jc as hashLayerDiff,
  Wc as hashLayersDiff,
  bs as hashModel,
  Hc as hashModelDiff,
  Vc as hashModelsDiff,
  Ii as hashPiece,
  ed as hashPieceDiff,
  td as hashPiecesDiff,
  _n as hashPlane,
  An as hashPlaneDiff,
  vs as hashPoint,
  Ns as hashPointDiff,
  As as hashPort,
  Mc as hashPortDiff,
  Fc as hashPortsDiff,
  fi as hashProp,
  Ic as hashPropDiff,
  sn as hashPropsDiff,
  Dc as hashQualitiesDiff,
  xs as hashQuality,
  Pc as hashQualityDiff,
  Eo as hashSide,
  Ui as hashSideDiff,
  Bs as hashStat,
  bn as hashStatDiff,
  Xc as hashStatsDiff,
  Ts as hashTag,
  Uc as hashTagDiff,
  Gc as hashTagsDiff,
  qn as hashType,
  Jc as hashTypeDiff,
  kn as hashTypesDiff,
  En as hashVector,
  xn as hashVectorDiff,
  qt as importArchiveKit,
  oi as importFileKit,
  Ti as importKit,
  Nn as importRemoteKit,
  Sr as inverseAttributeDiff,
  ot as inverseAttributesDiff,
  Tr as inverseAuthorDiff,
  Ir as inverseBenchmarkDiff,
  ua as inverseConceptDiff,
  fa as inverseConceptsDiff,
  $a as inverseConnectionDiff,
  ts as inverseConnectorDiff,
  Hn as inverseDesignDiff,
  Ho as inverseFileDiff,
  Lr as inverseFolderDiff,
  Ka as inverseGroupDiff,
  $t as inverseKitDiff,
  La as inverseLayerDiff,
  va as inverseModelDiff,
  Ma as inversePieceDiff,
  lr as inversePointDiff,
  Jo as inversePortDiff,
  Zr as inversePortsDiff,
  In as inversePropDiff,
  qr as inverseQualityDiff,
  go as inverseSideDiff,
  Za as inverseStatDiff,
  ia as inverseTagDiff,
  ra as inverseTagsDiff,
  Ca as inverseTypeDiff,
  gr as inverseVectorDiff,
  nr as jaccard,
  bi as kitToSqlite,
  Ue as matchesGlobFilter,
  Pi as matrixToPlane,
  vo as movePiecesInDesign,
  ms as moveTranslationWorldFromPiecePlane,
  Rn as operationErr,
  ui as operationOk,
  xt as pasteDesign,
  lt as piecesMetadata,
  Oi as planeToMatrix,
  sc as replaceClusterWithDesign,
  _t as round,
  Gn as selectBestModel,
  Ad as semioConnectorNameUniquenessConstraint,
  vd as semioDesignNameUniquenessConstraint,
  bd as semioDesignPieceSameFamilyConstraint,
  _d as semioFileNameUniquenessConstraint,
  xd as semioFolderNameUniquenessConstraint,
  hd as semioGuidUniquenessConstraint,
  kd as semioLayerPathUniquenessConstraint,
  St as semioMakeFix,
  Td as semioModelNameUniquenessConstraint,
  wd as semioPieceNameUniquenessConstraint,
  Ed as semioPortNameUniquenessConstraint,
  Sd as semioQualityNameUniquenessConstraint,
  yd as semioTypeNameUniquenessConstraint,
  Kt as serializeKit,
  mc as serializeKitMeta,
  yc as serializeKitShallow,
  Ln as sqliteToKit,
  Hd as sumQualityInDesign,
  Ec as toDesignMeta,
  _c as toDesignShallow,
  wo as toKitMeta,
  So as toKitShallow,
  Zd as toSemioRotation,
  Yd as toThreeRotation,
  wc as toTypeMeta,
  Sc as toTypeShallow,
  ko as toValidationResult,
  ni as validateKit,
  Ao as validateKitDiff,
  vt as vectorToThree
};
