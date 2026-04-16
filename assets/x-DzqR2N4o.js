import { r } from "./index-gBZ811w6.js";
const m = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _ = (a) => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, o, c) => c ? c.toUpperCase() : o.toLowerCase()), i = (a) => {
  const t = _(a);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, d = (...a) => a.filter((t, o, c) => !!t && t.trim() !== "" && c.indexOf(t) === o).join(" ").trim(), u = (a) => {
  for (const t in a) if (t.startsWith("aria-") || t === "role" || t === "title") return true;
};
var v = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const M = r.forwardRef(({ color: a = "currentColor", size: t = 24, strokeWidth: o = 2, absoluteStrokeWidth: c, className: s = "", children: n, iconNode: y, ...h }, p) => r.createElement("svg", { ref: p, ...v, width: t, height: t, stroke: a, strokeWidth: c ? Number(o) * 24 / Number(t) : o, className: d("lucide", s), ...!n && !u(h) && { "aria-hidden": "true" }, ...h }, [...y.map(([k, l]) => r.createElement(k, l)), ...Array.isArray(n) ? n : [n]]));
const e = (a, t) => {
  const o = r.forwardRef(({ className: c, ...s }, n) => r.createElement(M, { ref: n, iconNode: t, className: d(`lucide-${m(i(a))}`, `lucide-${a}`, c), ...s }));
  return o.displayName = i(a), o;
};
const f = [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]], O = e("arrow-left", f);
const x = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]], S = e("arrow-right", x);
const g = [["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }], ["path", { d: "M12 19V5", key: "x0mq9r" }]], W = e("arrow-up", g);
const w = [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]], K = e("book-open", w);
const $ = [["path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z", key: "1tc9qg" }], ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]], X = e("camera", $);
const N = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], J = e("check", N);
const C = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Q = e("chevron-down", C);
const j = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Y = e("chevron-left", j);
const b = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ee = e("chevron-right", b);
const A = [["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }], ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]], te = e("chevrons-up-down", A);
const L = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]], ae = e("circle-alert", L);
const q = [["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "M10 14 21 3", key: "gplh6r" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]], oe = e("external-link", q);
const z = [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]], ce = e("file-text", z);
const H = [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }]], ne = e("folder", H);
const V = [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", key: "j76jl0" }], ["path", { d: "M22 10v6", key: "1lu8f3" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]], re = e("graduation-cap", V);
const E = [["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }], ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }], ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }], ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }], ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }], ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]], se = e("grip-vertical", E);
const B = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]], he = e("info", B);
const I = [["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5", key: "1gvzjb" }], ["path", { d: "M9 18h6", key: "x1upvd" }], ["path", { d: "M10 22h4", key: "ceow96" }]], ie = e("lightbulb", I);
const P = [["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "m21 3-7 7", key: "1l2asr" }], ["path", { d: "m3 21 7-7", key: "tjx5ai" }], ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]], de = e("maximize-2", P);
const R = [["path", { d: "m14 10 7-7", key: "oa77jy" }], ["path", { d: "M20 10h-6V4", key: "mjg0md" }], ["path", { d: "m3 21 7-7", key: "tjx5ai" }], ["path", { d: "M4 14h6v6", key: "rmj7iw" }]], ye = e("minimize-2", R);
const U = [["path", { d: "M5 12h14", key: "1ays0h" }]], pe = e("minus", U);
const Z = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]], ke = e("plus", Z);
const F = [["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]], le = e("search", F);
const G = [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], me = e("triangle-alert", G);
const T = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], _e = e("x", T);
export {
  W as A,
  K as B,
  J as C,
  oe as E,
  ce as F,
  re as G,
  he as I,
  ie as L,
  pe as M,
  ke as P,
  le as S,
  me as T,
  _e as X,
  ne as a,
  Q as b,
  ee as c,
  ae as d,
  O as e,
  S as f,
  ye as g,
  de as h,
  Y as i,
  te as j,
  se as k,
  X as l,
  e as m
};
