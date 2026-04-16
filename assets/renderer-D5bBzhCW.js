import { j as e } from "./index-CPYBuwmV.js";
import { r as u, a as _ } from "./index-gBZ811w6.js";
import { c as te } from "./client-CET3z3r2.js";
import { K as F, bI as re, Q as O, v as z, bJ as ne, bK as oe } from "./index-BOTK57Qr.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
import "./server.browser-CwBZcUlj.js";
import "./preload-helper-PPVm8Dsz.js";
import "./_commonjs-dynamic-modules-TDtrdbi3.js";
import "./three.core-CmKuqlS6.js";
import "./x-DzqR2N4o.js";
console.log("[DEBUG] renderer.tsx imports resolved, module body executing");
ne.use(oe).init({ lng: "en", fallbackLng: "en", interpolation: { escapeValue: false }, resources: { en: { translation: {} } } });
function ae(s) {
  var _a;
  try {
    if (s.error) return null;
    const r = (_a = s.result) == null ? void 0 : _a.contents;
    return r && r.length > 0 && r[0].text ? JSON.parse(r[0].text) : null;
  } catch {
    return null;
  }
}
function ie(s) {
  var _a;
  try {
    if (s.error) return null;
    const r = (_a = s.result) == null ? void 0 : _a.content;
    return r && r.length > 0 && r[0].text ? JSON.parse(r[0].text) : null;
  } catch {
    return null;
  }
}
function S(s) {
  return s ? s.replace(/_/g, " ").replace(/-/g, " ") : "\u2014";
}
function de({ className: s = "w-4 h-4" }) {
  return e.jsxs("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("rect", { x: "3", y: "3", width: "7", height: "7" }), e.jsx("rect", { x: "14", y: "3", width: "7", height: "7" }), e.jsx("rect", { x: "14", y: "14", width: "7", height: "7" }), e.jsx("rect", { x: "3", y: "14", width: "7", height: "7" })] });
}
function J({ className: s = "w-4 h-4" }) {
  return e.jsxs("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("circle", { cx: "12", cy: "12", r: "3" }), e.jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })] });
}
function U({ className: s = "w-4 h-4" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) });
}
function H({ className: s = "w-4 h-4" }) {
  return e.jsxs("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), e.jsx("polyline", { points: "14 2 14 8 20 8" }), e.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }), e.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }), e.jsx("polyline", { points: "10 9 9 9 8 9" })] });
}
function G({ className: s = "w-4 h-4" }) {
  return e.jsxs("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("line", { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }), e.jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), e.jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }), e.jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })] });
}
function le({ className: s = "w-4 h-4" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) });
}
function q({ className: s = "w-3 h-3" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) });
}
function Q({ className: s = "w-3 h-3" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: e.jsx("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }) });
}
function K({ className: s = "w-3 h-3" }) {
  return e.jsxs("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] });
}
function ce({ className: s = "w-4 h-4" }) {
  return e.jsxs("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("polyline", { points: "23 4 23 10 17 10" }), e.jsx("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" })] });
}
function xe({ className: s = "w-4 h-4" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "currentColor", children: e.jsx("polygon", { points: "5 3 19 12 5 21 5 3" }) });
}
function ue({ className: s = "w-4 h-4" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("polyline", { points: "20 6 9 17 4 12" }) });
}
function me({ className: s = "w-4 h-4" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }) });
}
function X({ className: s = "w-4 h-4" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("polyline", { points: "9 18 15 12 9 6" }) });
}
function pe({ className: s = "w-4 h-4" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("polyline", { points: "6 9 12 15 18 9" }) });
}
function he({ className: s = "w-4 h-4" }) {
  return e.jsx("svg", { className: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function v({ title: s, children: r, className: t = "", action: n }) {
  return e.jsxs("div", { className: `rounded-lg border border-border-window bg-window ${t}`, children: [(s || n) && e.jsxs("div", { className: "flex items-center justify-between border-b border-border-window px-4 py-3", children: [s && e.jsx("h3", { className: "text-sm font-semibold text-foreground", children: s }), n] }), e.jsx("div", { className: "p-4", children: r })] });
}
function $({ label: s, value: r, sublabel: t }) {
  return e.jsxs("div", { className: "rounded-lg border border-border-window bg-window p-4", children: [e.jsx("div", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider", children: s }), e.jsx("div", { className: "mt-1 text-2xl font-bold text-foreground", children: r }), t && e.jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: t })] });
}
function k({ children: s, onClick: r, variant: t = "secondary", disabled: n = false, loading: a = false, className: i = "" }) {
  const o = { primary: "bg-active-base text-active-foreground hover:bg-hover-base disabled:opacity-50", secondary: "bg-window border border-border-window text-foreground hover:bg-hover-window disabled:opacity-50", danger: "bg-destructive-bg text-destructive-foreground border border-destructive-border hover:bg-hover-window disabled:opacity-50" };
  return e.jsxs("button", { onClick: r, disabled: n || a, className: `inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer disabled:cursor-not-allowed ${o[t]} ${i}`, children: [a && e.jsxs("svg", { className: "w-3.5 h-3.5 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [e.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), e.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })] }), s] });
}
function P({ label: s = "Loading..." }) {
  return e.jsxs("div", { className: "flex flex-col items-center justify-center gap-3 py-12 text-muted-foreground", children: [e.jsxs("svg", { className: "w-6 h-6 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [e.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), e.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })] }), e.jsx("span", { className: "text-sm", children: s })] });
}
function C({ message: s, action: r }) {
  return e.jsxs("div", { className: "flex flex-col items-center justify-center gap-3 py-12 text-muted-foreground", children: [e.jsx("p", { className: "text-sm", children: s }), r] });
}
function E({ title: s, children: r, defaultOpen: t = false, badge: n }) {
  const [a, i] = u.useState(t);
  return e.jsxs("div", { className: "border border-border-window rounded-md overflow-hidden", children: [e.jsxs("button", { onClick: () => i(!a), className: "flex w-full items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-hover-window transition-colors cursor-pointer", children: [a ? e.jsx(pe, { className: "w-3.5 h-3.5 text-muted-foreground" }) : e.jsx(X, { className: "w-3.5 h-3.5 text-muted-foreground" }), e.jsx("span", { className: "flex-1 text-left", children: s }), n] }), a && e.jsx("div", { className: "border-t border-border-window px-3 py-2", children: r })] });
}
function I({ data: s }) {
  const r = u.useMemo(() => {
    try {
      return JSON.stringify(s, null, 2);
    } catch {
      return String(s);
    }
  }, [s]);
  return e.jsx("pre", { className: "overflow-auto max-h-96 rounded-md bg-panel border border-border-window p-3 text-xs font-mono text-muted-foreground whitespace-pre-wrap break-all", children: r });
}
function Y(s) {
  switch (s) {
    case "Class":
      return "C";
    case "And":
      return "\u2227";
    case "Or":
      return "\u2228";
    case "Not":
      return "\xAC";
    case "SomeValuesFrom":
      return "\u2203";
    case "AllValuesFrom":
      return "\u2200";
    case "ExactCardinality":
      return "=n";
    case "MinCardinality":
      return "\u2265n";
    case "MaxCardinality":
      return "\u2264n";
    case "DataSomeValuesFrom":
      return "\u2203d";
    case "DataAllValuesFrom":
      return "\u2200d";
    case "DataHasValue":
      return "v";
    case "DatatypeRestriction":
      return "D";
    default:
      return "?";
  }
}
function ge(s) {
  return { icon: Y(s.kind), primaryText: s.label, secondaryText: s.fragment && s.fragment !== s.label ? s.fragment : void 0 };
}
function Z({ node: s, defaultExpanded: r = true }) {
  const t = ge(s);
  return e.jsx(z, { id: s.id, defaultOpen: r, label: e.jsxs("span", { className: "flex min-w-0 flex-col gap-0.5 py-0.5", children: [e.jsxs("span", { className: "flex min-w-0 items-center gap-2", children: [e.jsx("span", { className: "inline-flex items-center justify-center h-5 min-w-5 rounded bg-info-bg px-1 text-[10px] font-bold text-info-foreground shrink-0", title: s.kind, children: t.icon }), e.jsx("span", { className: "min-w-0 truncate text-sm font-medium text-foreground", children: t.primaryText })] }), t.secondaryText && e.jsx("span", { className: "pl-7 text-[11px] text-muted-foreground", children: t.secondaryText })] }), children: s.children.map((n) => e.jsx(Z, { node: n, defaultExpanded: r }, n.id)) });
}
function Ue({ root: s, title: r, defaultExpanded: t = true }) {
  return e.jsxs("div", { className: "rounded-lg border border-border-window bg-window overflow-hidden", children: [r && e.jsx("div", { className: "border-b border-border-window px-3 py-2", children: e.jsx("h3", { className: "text-sm font-semibold text-foreground", children: r }) }), e.jsx("div", { className: "p-2 overflow-x-auto", children: e.jsx(F, { className: "min-w-0", sections: [{ id: "ontology-root", label: null, content: e.jsx(Z, { node: s, defaultExpanded: t }) }] }) })] });
}
const fe = { true: { dot: "bg-success-border", text: "text-success-foreground", bg: "bg-success-bg" }, false: { dot: "bg-destructive-border", text: "text-destructive-foreground", bg: "bg-destructive-bg" }, unknown: { dot: "bg-info-border", text: "text-info-foreground", bg: "bg-info-bg" } };
function ee(s) {
  switch (s) {
    case "true":
      return "\u{1F7E2}";
    case "false":
      return "\u{1F534}";
    case "unknown":
      return "\u26AA";
  }
}
function je(s) {
  return s === "ExactCardinality" || s === "MinCardinality" || s === "MaxCardinality";
}
function be(s) {
  const r = s.kind === "Witness", t = s.kind === "DataValue", n = [];
  return je(s.kind) && s.matchingCount !== void 0 && s.expectedCardinality !== void 0 && n.push(`${s.matchingCount}/${s.expectedCardinality}`), s.counted === true && n.push("counted"), s.counted === false && n.push("not matching"), t && s.datatype && n.push(s.datatype), { icon: r || t ? void 0 : s.kind === "ClassAssertion" ? "\u2208" : Y(s.kind), primaryText: t ? String(s.value ?? s.label) : r ? s.individual ?? s.label : s.label, secondaryText: !t && s.fragment && s.fragment !== s.label ? s.fragment : void 0, chips: n, dimmed: r && s.counted === false };
}
function D({ node: s, defaultExpanded: r = true }) {
  const t = fe[s.truth], n = be(s), a = s.children.filter((l) => l.kind === "Witness"), i = s.children.filter((l) => l.kind !== "Witness"), o = a.length > 1, [c, p] = _.useState(0), h = o ? Math.min(c, a.length - 1) : 0;
  return e.jsxs(z, { id: s.id, defaultOpen: r, branchCount: o ? a.length : void 0, activeBranchIndex: o ? h : void 0, onBranchChange: o ? p : void 0, label: e.jsxs("span", { className: "flex min-w-0 flex-col gap-0.5 py-0.5", title: s.summary, children: [e.jsxs("span", { className: "flex min-w-0 items-center gap-2", children: [e.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium shrink-0 ${t.bg} ${t.text}`, children: [e.jsx("span", { children: ee(s.truth) }), e.jsx("span", { children: s.truth })] }), n.icon && e.jsx("span", { className: `inline-flex items-center justify-center h-5 min-w-5 rounded px-1 text-[10px] font-bold shrink-0 ${t.bg} ${t.text}`, title: s.kind, children: n.icon }), e.jsx("span", { className: `min-w-0 truncate text-sm font-medium ${n.dimmed ? "text-muted-foreground" : s.kind === "DataValue" ? "font-mono text-foreground" : "text-foreground"}`, children: n.primaryText }), n.chips.map((l) => e.jsx("span", { className: `inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium shrink-0 ${l === "counted" ? "bg-success-bg text-success-foreground" : l === "not matching" ? "bg-info-bg text-info-foreground" : "bg-panel text-muted-foreground border border-border-window"}`, children: l }, `${s.id}-${l}`))] }), (n.secondaryText || s.summary) && e.jsx("span", { className: "pl-10 text-[11px] text-muted-foreground", children: [n.secondaryText, s.summary].filter(Boolean).join(" \u2022 ") })] }), children: [i.map((l) => e.jsx(D, { node: l, defaultExpanded: r }, l.id)), o ? e.jsx(D, { node: a[h], defaultExpanded: r }, a[h].id) : a.map((l) => e.jsx(D, { node: l, defaultExpanded: r }, l.id))] });
}
function A({ report: s, defaultExpanded: r = true }) {
  return e.jsxs("div", { className: "rounded-lg border border-border-window bg-window overflow-hidden", children: [e.jsxs("div", { className: "border-b border-border-window px-3 py-2 space-y-1", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs("span", { className: "text-sm font-semibold text-foreground", children: ["Instance: ", s.instance] }), e.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${s.truth === "true" ? "bg-success-bg text-success-foreground border-success-border" : s.truth === "false" ? "bg-destructive-bg text-destructive-foreground border-destructive-border" : "bg-info-bg text-info-foreground border-info-border"}`, children: [ee(s.truth), " ", s.truth] })] }), e.jsx("div", { className: "text-xs text-muted-foreground font-mono break-all", children: s.expression })] }), e.jsx("div", { className: "p-2 overflow-x-auto", children: e.jsx(F, { className: "min-w-0", sections: [{ id: "validation-root", label: null, content: e.jsx(D, { node: s.tree, defaultExpanded: r }) }] }) })] });
}
function N(s, r = 0) {
  const [t, n] = u.useState(null), [a, i] = u.useState(true), [o, c] = u.useState(null), [p, h] = u.useState(0);
  u.useEffect(() => {
    let j = false;
    return i(true), c(null), window.coda.fetch(s).then((b) => {
      if (j) return;
      const d = ae(b);
      if (d !== null) {
        const x = d;
        x && typeof x == "object" && "error" in x ? (c(x.error), n(null)) : n(d);
      } else b.error ? c(b.error.message) : n(null);
      i(false);
    }).catch((b) => {
      j || (c((b == null ? void 0 : b.message) ?? "Failed to fetch"), i(false));
    }), () => {
      j = true;
    };
  }, [s, r, p]);
  const l = u.useCallback(() => h((j) => j + 1), []);
  return { data: t, loading: a, error: o, refresh: l };
}
function ve({ refreshKey: s }) {
  var _a, _b, _c;
  const { data: r, loading: t } = N("coda://project", s), { data: n, loading: a } = N("coda://current-run", s), { data: i, loading: o } = N("coda://current-iteration", s), { data: c, loading: p } = N("coda://report", s), { data: h } = N("coda://properties", s), { data: l } = N("coda://frameworks", s), j = t || a || o || p, b = ((_a = c == null ? void 0 : c.validations) == null ? void 0 : _a.length) ?? 0, d = u.useMemo(() => (c == null ? void 0 : c.validations) ? c.validations.filter((m) => m.truth === "false").length : 0, [c]), x = u.useMemo(() => (c == null ? void 0 : c.validations) ? c.validations.filter((m) => m.truth === "true").length : 0, [c]), g = u.useMemo(() => h ? T(h) : 0, [h]);
  return j ? e.jsx(P, { label: "Loading dashboard..." }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Dashboard" }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Overview of the coda compliance checking status." })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4 lg:grid-cols-4", children: [e.jsx($, { label: "Design", value: ((_b = r == null ? void 0 : r.design) == null ? void 0 : _b.id) ?? "\u2014", sublabel: r ? `${((_c = r.targets) == null ? void 0 : _c.length) ?? 0} targets` : void 0 }), e.jsx($, { label: "Current Run", value: (n == null ? void 0 : n.id) ?? (n == null ? void 0 : n.run_id) ?? "\u2014", sublabel: (n == null ? void 0 : n.started) ? `Started ${n.started}` : void 0 }), e.jsx($, { label: "Iteration", value: (i == null ? void 0 : i.index) ?? "\u2014", sublabel: (i == null ? void 0 : i.targets) ? `${i.targets.length} targets` : void 0 }), e.jsx($, { label: "Compliance", value: b > 0 ? `${x}/${b}` : "\u2014", sublabel: d > 0 ? `${d} violated` : b > 0 ? "All compliant" : void 0 })] }), (c == null ? void 0 : c.validations) && c.validations.length > 0 && e.jsx(v, { title: "Latest Validation", children: e.jsx("div", { className: "space-y-4", children: c.validations.map((m) => e.jsx(A, { report: m, defaultExpanded: false }, m.instance)) }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "General Configuration" }), e.jsx("span", { className: "text-xs bg-info-bg text-info-foreground px-1.5 py-0.5 rounded", children: "not project-scoped" })] }), e.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [h && h.length > 0 && e.jsx(v, { title: `Properties (${g})`, children: e.jsx("div", { className: "space-y-1", children: h.map((m) => e.jsxs("div", { className: "flex items-start gap-2 rounded px-2 py-1.5 text-sm hover:bg-hover-window", children: [e.jsx(J, { className: "w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-medium text-foreground", children: m.name ?? S(m.id) }), m.kind && e.jsx("span", { className: "text-xs bg-info-bg text-info-foreground px-1 py-0.5 rounded", children: m.kind })] }), m.description && e.jsx("p", { className: "text-xs text-muted-foreground", children: m.description }), m.measure_kinds && m.measure_kinds.length > 0 && e.jsx("div", { className: "mt-0.5 flex flex-wrap gap-1", children: m.measure_kinds.map((f) => e.jsx("span", { className: "text-xs bg-active-base text-active-foreground px-1 py-0.5 rounded font-mono", children: f }, f)) })] })] }, m.id)) }) }), l && l.length > 0 && e.jsx(v, { title: `Frameworks (${l.length})`, children: e.jsx("div", { className: "space-y-1", children: l.map((m) => {
    var _a2, _b2;
    return e.jsxs("div", { className: "flex items-start gap-2 rounded px-2 py-1.5 text-sm hover:bg-hover-window", children: [e.jsx(H, { className: "w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" }), e.jsxs("div", { children: [e.jsx("span", { className: "font-medium text-foreground", children: S(m.id) }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [((_a2 = m.properties) == null ? void 0 : _a2.length) ?? 0, " properties, ", ((_b2 = m.rules) == null ? void 0 : _b2.length) ?? 0, " rules"] })] })] }, m.id);
  }) }) })] })] })] });
}
function T(s) {
  var _a;
  let r = 0;
  for (const t of s) r += 1, t.properties && (r += T(t.properties)), ((_a = t.items) == null ? void 0 : _a.properties) && (r += T(t.items.properties));
  return r;
}
function W({ prop: s, depth: r = 0 }) {
  return e.jsxs("div", { className: `rounded bg-panel border border-border-window p-2 ${r > 0 ? "ml-3" : ""}`, children: [e.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [e.jsx("span", { className: "text-sm font-medium text-foreground", children: s.name ?? S(s.id) }), s.kind && e.jsx("span", { className: "text-xs bg-info-bg text-info-foreground px-1.5 py-0.5 rounded", children: s.kind }), s.measure_kinds && s.measure_kinds.length > 0 && s.measure_kinds.map((t) => e.jsx("span", { className: "text-xs bg-active-base text-active-foreground px-1.5 py-0.5 rounded font-mono", children: t }, t))] }), s.description && e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: s.description }), s.url && e.jsx("a", { className: "text-xs text-active-base hover:underline mt-1 inline-block", href: s.url, target: "_blank", rel: "noreferrer", children: "Reference" }), s.values && s.values.length > 0 && e.jsxs("div", { className: "mt-1.5 flex flex-wrap gap-1", children: [e.jsx("span", { className: "text-xs text-muted-foreground mr-1", children: "Values:" }), s.values.map((t) => {
    const n = typeof t == "object" && t !== null, a = n ? t.id : t, i = n ? t.name ?? t.id : t;
    return e.jsx("span", { className: "text-xs bg-window border border-border-window px-1 py-0.5 rounded font-mono", title: n ? t.description : void 0, children: i }, a);
  })] }), s.levels && s.levels.length > 0 && e.jsxs("div", { className: "mt-2 space-y-2", children: [e.jsxs("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: ["Levels (", s.levels.length, ")"] }), s.levels.map((t) => e.jsxs("div", { className: "rounded border border-border-window p-2 space-y-1.5", children: [e.jsxs("div", { className: "flex items-start gap-2 text-xs", children: [e.jsx("span", { className: "bg-active-base text-active-foreground px-1.5 py-0.5 rounded font-mono shrink-0", children: t.value }), e.jsxs("div", { children: [t.name && e.jsx("span", { className: "font-medium text-foreground", children: t.name }), t.description && e.jsx("p", { className: "text-muted-foreground", children: t.description })] })] }), t.measures && e.jsxs("div", { className: "space-y-1 pl-2 border-l-2 border-border-window", children: [t.measures.lower && t.measures.lower.length > 0 && e.jsxs("div", { children: [e.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: "\u2193 Lower measures:" }), e.jsx("div", { className: "mt-0.5 space-y-0.5", children: t.measures.lower.map((n) => e.jsxs("div", { className: "text-xs flex items-start gap-1", children: [e.jsx("span", { className: "bg-info-bg text-info-foreground px-1 py-0.5 rounded font-mono shrink-0", children: n.id }), n.instruction && e.jsx("span", { className: "text-muted-foreground", children: n.instruction })] }, n.id)) })] }), t.measures.raise && t.measures.raise.length > 0 && e.jsxs("div", { children: [e.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: "\u2191 Raise measures:" }), e.jsx("div", { className: "mt-0.5 space-y-0.5", children: t.measures.raise.map((n) => e.jsxs("div", { className: "text-xs flex items-start gap-1", children: [e.jsx("span", { className: "bg-info-bg text-info-foreground px-1 py-0.5 rounded font-mono shrink-0", children: n.id }), n.instruction && e.jsx("span", { className: "text-muted-foreground", children: n.instruction })] }, n.id)) })] })] }), t.instructions && t.instructions.raise && t.instructions.raise.length > 0 && e.jsxs("div", { className: "space-y-1 pl-2 border-l-2 border-border-window", children: [e.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: "\u2191 Raise instructions:" }), e.jsx("div", { className: "mt-0.5 space-y-0.5", children: t.instructions.raise.map((n) => e.jsxs("div", { className: "text-xs flex items-start gap-1", children: [e.jsx("span", { className: "bg-info-bg text-info-foreground px-1 py-0.5 rounded font-mono shrink-0", children: n.id }), n.instruction && e.jsx("span", { className: "text-muted-foreground", children: n.instruction })] }, n.id)) })] })] }, t.value))] }), s.items && e.jsxs("div", { className: "mt-2", children: [e.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Items" }), s.items.properties && s.items.properties.length > 0 && e.jsx("div", { className: "mt-1 space-y-1.5", children: s.items.properties.map((t) => e.jsx(W, { prop: t, depth: r + 1 }, t.id)) })] }), s.properties && s.properties.length > 0 && e.jsxs("div", { className: "mt-2", children: [e.jsxs("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: ["Properties (", s.properties.length, ")"] }), e.jsx("div", { className: "mt-1 space-y-1.5", children: s.properties.map((t) => e.jsx(W, { prop: t, depth: r + 1 }, t.id)) })] })] });
}
function we({ refreshKey: s }) {
  const { data: r, loading: t } = N("coda://property-kinds", s), { data: n, loading: a } = N("coda://properties", s), { data: i, loading: o } = N("coda://correlation", s), { data: c, loading: p } = N("coda://frameworks", s), { data: h, loading: l } = N("coda://platforms", s);
  if (t || a || o || p || l) return e.jsx(P, { label: "Loading configuration..." });
  const b = n ? T(n) : 0;
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Configuration" }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Property kinds, properties, correlation, frameworks, and platforms from the coda configuration." })] }), e.jsx(v, { title: `Property Kinds (${r ? Object.keys(r).length : 0})`, action: e.jsx("span", { className: "text-xs bg-info-bg text-info-foreground px-1.5 py-0.5 rounded", children: "general" }), children: r && Object.keys(r).length > 0 ? e.jsx("div", { className: "space-y-2", children: Object.entries(r).map(([d, x]) => e.jsxs("div", { className: "rounded bg-panel border border-border-window p-2", children: [e.jsx("span", { className: "text-sm font-medium text-foreground font-mono", children: d }), (x.measures ?? x.measure) && e.jsxs("div", { className: "mt-1 flex flex-wrap gap-1", children: [e.jsx("span", { className: "text-xs text-muted-foreground mr-1", children: "Measures:" }), (x.measures ?? x.measure ?? []).map((g) => e.jsx("span", { className: "text-xs bg-active-base text-active-foreground px-1.5 py-0.5 rounded font-mono", children: g }, g))] })] }, d)) }) : e.jsx(C, { message: "No property kinds configured." }) }), e.jsx(v, { title: `Properties (${b})`, action: e.jsx("span", { className: "text-xs bg-info-bg text-info-foreground px-1.5 py-0.5 rounded", children: "general" }), children: n && n.length > 0 ? e.jsx("div", { className: "space-y-2", children: n.map((d) => e.jsx(W, { prop: d }, d.id)) }) : e.jsx(C, { message: "No properties configured." }) }), i && i.properties && i.properties.length > 0 && e.jsx(v, { title: `Correlation Matrix (${i.properties.length} properties)`, action: e.jsx("span", { className: "text-xs bg-info-bg text-info-foreground px-1.5 py-0.5 rounded", children: "general" }), children: e.jsx("div", { className: "overflow-x-auto", children: e.jsxs("table", { className: "text-xs font-mono border-collapse", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { className: "p-1 text-left text-muted-foreground" }), i.properties.map((d) => e.jsx("th", { className: "p-1 text-center text-muted-foreground whitespace-nowrap", children: S(d) }, d))] }) }), e.jsx("tbody", { children: i.matrix.map((d, x) => e.jsxs("tr", { children: [e.jsx("td", { className: "p-1 text-muted-foreground whitespace-nowrap", children: S(i.properties[x]) }), d.map((g, m) => e.jsx("td", { className: `p-1 text-center ${x === m ? "text-foreground font-bold" : g > 0 ? "text-active-base" : g < 0 ? "text-destructive-foreground" : "text-muted-foreground"}`, children: g.toFixed(2) }, m))] }, i.properties[x])) })] }) }) }), e.jsx(v, { title: `Frameworks (${(c == null ? void 0 : c.length) ?? 0})`, action: e.jsx("span", { className: "text-xs bg-info-bg text-info-foreground px-1.5 py-0.5 rounded", children: "general" }), children: c && c.length > 0 ? e.jsx("div", { className: "space-y-3", children: c.map((d) => {
    var _a, _b;
    return e.jsx(E, { title: S(d.id), badge: e.jsxs("span", { className: "text-xs text-muted-foreground", children: [((_a = d.properties) == null ? void 0 : _a.length) ?? 0, " properties, ", ((_b = d.rules) == null ? void 0 : _b.length) ?? 0, " rules"] }), children: e.jsxs("div", { className: "space-y-3", children: [d.properties && d.properties.length > 0 && e.jsxs("div", { children: [e.jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Properties" }), e.jsx("div", { className: "space-y-1.5", children: d.properties.map((x) => e.jsx(W, { prop: x }, x.id)) })] }), d.rules && d.rules.length > 0 && e.jsxs("div", { children: [e.jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Rules" }), e.jsx("div", { className: "space-y-1.5", children: d.rules.map((x) => e.jsxs("div", { className: "rounded bg-panel border border-border-window p-2", children: [e.jsx("div", { className: "text-sm font-medium text-foreground", children: S(x.id) }), x.description && e.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: x.description }), x.clauses && x.clauses.length > 0 && e.jsx("div", { className: "mt-2 pl-3 border-l-2 border-border-window space-y-1", children: x.clauses.map((g) => e.jsxs("div", { className: "text-xs", children: [e.jsx("span", { className: "font-medium text-foreground", children: S(g.id) }), g.description && e.jsxs("span", { className: "text-muted-foreground", children: [" \u2014 ", g.description] }), g.properties && g.properties.length > 0 && e.jsx("div", { className: "mt-0.5 flex flex-wrap gap-1", children: g.properties.map((m, f) => e.jsxs("span", { className: "bg-window border border-border-window px-1 py-0.5 rounded font-mono text-muted-foreground", children: [m.id, "=", m.value] }, `${m.id}-${m.value}-${f}`)) })] }, g.id)) }), x.measures && x.measures.length > 0 && e.jsx("div", { className: "mt-1.5 flex flex-wrap gap-1", children: x.measures.map((g) => e.jsx("span", { className: "text-xs bg-info-bg text-info-foreground px-1.5 py-0.5 rounded font-mono", children: g }, g)) }), x.data && Object.keys(x.data).length > 0 && e.jsxs("div", { className: "mt-1.5", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "Data schema:" }), e.jsx("div", { className: "mt-0.5 flex flex-wrap gap-1", children: Object.entries(x.data).map(([g, m]) => e.jsxs("span", { className: "text-xs bg-window border border-border-window px-1 py-0.5 rounded font-mono text-muted-foreground", children: [g, ": ", String(m)] }, g)) })] })] }, x.id)) })] })] }) }, d.id);
  }) }) : e.jsx(C, { message: "No frameworks configured." }) }), e.jsx(v, { title: `Platforms (${(h == null ? void 0 : h.length) ?? 0})`, children: h && h.length > 0 ? e.jsx("div", { className: "space-y-3", children: h.map((d) => {
    var _a;
    return e.jsx(E, { title: S(d.id), badge: e.jsxs("span", { className: "text-xs text-muted-foreground", children: [((_a = d.properties) == null ? void 0 : _a.length) ?? 0, " properties"] }), children: d.properties && d.properties.length > 0 ? e.jsx("div", { className: "space-y-2", children: d.properties.map((x) => {
      const g = Object.keys(x).filter((m) => m !== "id" && typeof x[m] == "object");
      return e.jsxs("div", { className: "rounded bg-panel border border-border-window p-2", children: [e.jsx("div", { className: "text-sm font-medium text-foreground font-mono", children: x.id }), g.length > 0 && e.jsx("div", { className: "mt-1.5 space-y-2", children: g.map((m) => {
        var _a2, _b;
        const f = x[m];
        return e.jsxs("div", { className: "pl-2 border-l-2 border-active-base", children: [e.jsx("span", { className: "text-xs bg-active-base text-active-foreground px-1.5 py-0.5 rounded font-mono", children: m }), f.instructions && e.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: f.instructions }), ((_a2 = f.mcp) == null ? void 0 : _a2.resources) && f.mcp.resources.length > 0 && e.jsxs("div", { className: "mt-1", children: [e.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: "MCP Resources:" }), e.jsx("div", { className: "mt-0.5 space-y-0.5", children: f.mcp.resources.map((w) => e.jsxs("div", { className: "text-xs pl-2 border-l border-border-window", children: [e.jsx("span", { className: "font-mono text-active-base", children: w.id }), w.instruction && e.jsxs("span", { className: "text-muted-foreground", children: [" \u2014 ", w.instruction] })] }, w.id)) })] }), ((_b = f.mcp) == null ? void 0 : _b.tools) && f.mcp.tools.length > 0 && e.jsxs("div", { className: "mt-1", children: [e.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: "MCP Tools:" }), e.jsx("div", { className: "mt-0.5 space-y-0.5", children: f.mcp.tools.map((w) => e.jsxs("div", { className: "text-xs pl-2 border-l border-border-window", children: [e.jsx("span", { className: "font-mono text-active-base", children: w.id }), w.instruction && e.jsxs("span", { className: "text-muted-foreground", children: [" \u2014 ", w.instruction] }), w.parameters && w.parameters.length > 0 && e.jsx("div", { className: "mt-0.5 pl-2 space-y-0.5", children: w.parameters.map((L) => e.jsxs("div", { className: "text-xs text-muted-foreground", children: [e.jsx("span", { className: "font-mono", children: L.id }), L.instruction && e.jsxs("span", { children: [" \u2014 ", L.instruction] })] }, L.id)) })] }, w.id)) })] })] }, m);
      }) })] }, x.id);
    }) }) : e.jsx("p", { className: "text-xs text-muted-foreground", children: "No property instructions." }) }, d.id);
  }) }) : e.jsx(C, { message: "No platforms configured." }) })] });
}
function Ne({ refreshKey: s }) {
  const { data: r, loading: t, error: n } = N("coda://current-run", s), { data: a, loading: i } = N("coda://iterations", s), { data: o, loading: c } = N("coda://current-iteration", s);
  return t || i || c ? e.jsx(P, { label: "Loading runs..." }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Runs & Iterations" }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage and inspect compliance checking runs." })] }), e.jsx(v, { title: "Current Run", children: n ? e.jsx(C, { message: n }) : r ? e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider w-16", children: "ID" }), e.jsx("span", { className: "text-sm font-mono text-foreground", children: r.id ?? r.run_id ?? "\u2014" })] }), r.started && e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider w-16", children: "Started" }), e.jsx("span", { className: "text-sm text-foreground", children: r.started })] })] }) : e.jsx(C, { message: "No runs yet. Start a run from the Actions page." }) }), e.jsx(v, { title: `Iterations (${(a == null ? void 0 : a.length) ?? 0})`, children: a && a.length > 0 ? e.jsx("div", { className: "space-y-1", children: a.map((h) => e.jsxs("div", { className: `flex items-center gap-3 rounded-md border px-3 py-2 text-sm ${String(o == null ? void 0 : o.index) === h.index ? "border-active-base bg-info-bg" : "border-border-window hover:bg-hover-window"}`, children: [e.jsxs("span", { className: "font-mono font-bold text-active-base", children: ["#", h.index] }), String(o == null ? void 0 : o.index) === h.index && e.jsx("span", { className: "text-xs bg-active-base text-active-foreground px-1.5 py-0.5 rounded", children: "current" })] }, h.index)) }) : e.jsx(C, { message: "No iterations yet." }) }), o && !o.error && e.jsx(v, { title: `Current Iteration #${o.index}`, children: e.jsx("div", { className: "space-y-2", children: o.targets && o.targets.length > 0 && e.jsxs("div", { children: [e.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Targets" }), e.jsx("div", { className: "mt-1 flex flex-wrap gap-1.5", children: o.targets.map((h) => e.jsx("span", { className: "text-xs bg-panel border border-border-window px-2 py-1 rounded font-mono", children: h }, h)) })] }) }) })] });
}
function ye({ refreshKey: s }) {
  var _a, _b, _c, _d;
  const { data: r, loading: t, error: n } = N("coda://report", s);
  if (t) return e.jsx(P, { label: "Loading report..." });
  const a = ((_a = r == null ? void 0 : r.validations) == null ? void 0 : _a.length) ?? 0, i = ((_b = r == null ? void 0 : r.validations) == null ? void 0 : _b.filter((p) => p.truth === "false")) ?? [], o = ((_c = r == null ? void 0 : r.validations) == null ? void 0 : _c.filter((p) => p.truth === "true")) ?? [], c = ((_d = r == null ? void 0 : r.validations) == null ? void 0 : _d.filter((p) => p.truth === "unknown")) ?? [];
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Compliance Report" }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Results from the latest validation iteration." })] }), n ? e.jsx(v, { children: e.jsx(C, { message: n }) }) : !(r == null ? void 0 : r.validations) || r.validations.length === 0 ? e.jsx(v, { children: e.jsx(C, { message: "No report available. Run validation from the Actions page." }) }) : e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [e.jsx($, { label: "Total", value: a }), e.jsx($, { label: "Compliant", value: o.length, sublabel: a > 0 ? `${Math.round(o.length / a * 100)}%` : void 0 }), e.jsx($, { label: "Violated", value: i.length, sublabel: a > 0 ? `${Math.round(i.length / a * 100)}%` : void 0 })] }), i.length > 0 && e.jsx(v, { title: `Violations (${i.length})`, children: e.jsx("div", { className: "space-y-4", children: i.map((p) => e.jsx(A, { report: p, defaultExpanded: true }, p.instance)) }) }), c.length > 0 && e.jsx(v, { title: `Unknown (${c.length})`, children: e.jsx("div", { className: "space-y-4", children: c.map((p) => e.jsx(A, { report: p, defaultExpanded: false }, p.instance)) }) }), o.length > 0 && e.jsx(v, { title: `Compliant (${o.length})`, children: e.jsx("div", { className: "space-y-4", children: o.map((p) => e.jsx(A, { report: p, defaultExpanded: false }, p.instance)) }) })] })] });
}
function ke({ refreshKey: s }) {
  const { data: r } = N("coda://project", s), t = u.useMemo(() => {
    var _a;
    return ((_a = r == null ? void 0 : r.targets) == null ? void 0 : _a.map((n) => n.id)) ?? [];
  }, [r]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Translations" }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Translation outputs for each target in the current iteration." })] }), t.length === 0 ? e.jsx(v, { children: e.jsx(C, { message: "No project targets found." }) }) : t.map((n) => e.jsx(Ce, { targetId: n, refreshKey: s }, n))] });
}
function Ce({ targetId: s, refreshKey: r }) {
  const { data: t, loading: n, error: a } = N(`coda://translation/${s}`, r);
  return e.jsx(v, { title: S(s), children: n ? e.jsx(P, { label: `Loading ${s} translation...` }) : a ? e.jsx(C, { message: a }) : t ? e.jsx(I, { data: t }) : e.jsx(C, { message: "No translation data available." }) });
}
function Se({ refreshKey: s, onRefresh: r }) {
  const { data: t } = N("coda://project", s), n = u.useMemo(() => {
    var _a;
    return ((_a = t == null ? void 0 : t.targets) == null ? void 0 : _a.map((l) => l.id)) ?? [];
  }, [t]), [a, i] = u.useState([]), [o, c] = u.useState(null), p = u.useCallback(async (l, j, b) => {
    c(b);
    try {
      const d = await window.coda.tool(l, j), x = ie(d);
      i((g) => [{ id: Date.now(), action: b, result: x ?? d.error ?? "No response", timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(), success: !d.error }, ...g]), r();
    } catch (d) {
      const x = d instanceof Error ? d.message : "Unknown error";
      i((g) => [{ id: Date.now(), action: b, result: { error: x }, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(), success: false }, ...g]);
    } finally {
      c(null);
    }
  }, [r]), h = u.useCallback(async (l, j, b) => {
    c(b);
    try {
      const d = await window.coda.call(l, j), x = d.result ?? d.error ?? "No response";
      i((g) => [{ id: Date.now(), action: b, result: x, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(), success: !d.error }, ...g]), r();
    } catch (d) {
      const x = d instanceof Error ? d.message : "Unknown error";
      i((g) => [{ id: Date.now(), action: b, result: { error: x }, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(), success: false }, ...g]);
    } finally {
      c(null);
    }
  }, [r]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Actions" }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Invoke coda tools to run compliance checking workflows." })] }), e.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [e.jsx(v, { title: "Run Management", children: e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-start gap-3", children: [e.jsxs(k, { variant: "primary", onClick: () => p("start_run", {}, "Start Run"), loading: o === "Start Run", disabled: o !== null, children: [e.jsx(xe, { className: "w-3.5 h-3.5" }), "Start Run"] }), e.jsx("p", { className: "text-xs text-muted-foreground pt-1", children: "Create a new compliance checking run." })] }), e.jsxs("div", { className: "flex items-start gap-3", children: [e.jsxs(k, { variant: "primary", onClick: () => p("start_iteration", {}, "Start Iteration"), loading: o === "Start Iteration", disabled: o !== null, children: [e.jsx(U, { className: "w-3.5 h-3.5" }), "Start Iteration"] }), e.jsx("p", { className: "text-xs text-muted-foreground pt-1", children: "Begin a new iteration in the current run." })] })] }) }), e.jsx(v, { title: "Translation & Validation", children: e.jsx("div", { className: "space-y-3", children: n.length === 0 ? e.jsx(C, { message: "No project targets found." }) : n.map((l) => e.jsx(Le, { targetId: l, loading: o, runTool: p, runCall: h }, l)) }) })] }), e.jsx(v, { title: "Fix Design", children: e.jsx(Me, { loading: o, onFix: (l) => p("fix", { prompt: l }, `Fix: ${l.slice(0, 30)}...`), disabled: o !== null }) }), e.jsx(v, { title: "Manual Fix Result", children: e.jsx($e, { loading: o, onSubmit: (l) => h("save_report", { report_data: typeof l == "string" ? l : JSON.stringify(l) }, "Manual Save Report"), disabled: o !== null }) }), a.length > 0 && e.jsx(v, { title: "Action Log", action: e.jsx(k, { onClick: () => i([]), className: "text-xs", children: "Clear" }), children: e.jsx("div", { className: "space-y-2 max-h-96 overflow-y-auto", children: a.map((l) => e.jsx(E, { title: l.action, badge: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: l.timestamp }), e.jsx("span", { className: `w-2 h-2 rounded-full ${l.success ? "bg-success-border" : "bg-destructive-border"}` })] }), children: e.jsx(I, { data: l.result }) }, l.id)) }) })] });
}
function Le({ targetId: s, loading: r, runTool: t, runCall: n }) {
  const [a, i] = u.useState(null), [o, c] = u.useState(""), p = u.useCallback(() => {
    if (!(!o.trim() || !a)) try {
      const h = JSON.parse(o);
      a === "translate" ? n("save_translation", { target_id: s, data: typeof h == "string" ? h : JSON.stringify(h) }, `Manual Translate ${s}`) : n("save_validation", { target_id: s, data: typeof h == "string" ? h : JSON.stringify(h) }, `Manual Validate ${s}`), c(""), i(null);
    } catch {
      a === "translate" ? n("save_translation", { target_id: s, data: o.trim() }, `Manual Translate ${s}`) : n("save_validation", { target_id: s, data: o.trim() }, `Manual Validate ${s}`), c(""), i(null);
    }
  }, [o, a, s, t, n]);
  return e.jsxs("div", { className: "rounded border border-border-window p-3 space-y-2", children: [e.jsx("div", { className: "text-sm font-medium text-foreground font-mono", children: s }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(k, { onClick: () => t("translate", { target_id: s }, `Translate ${s}`), loading: r === `Translate ${s}`, disabled: r !== null, children: [e.jsx(G, { className: "w-3.5 h-3.5" }), "Translate"] }), e.jsxs(k, { onClick: () => t("validate", { target_id: s }, `Validate ${s}`), loading: r === `Validate ${s}`, disabled: r !== null, children: [e.jsx(ue, { className: "w-3.5 h-3.5" }), "Validate"] }), e.jsx(k, { onClick: () => i(a ? null : "translate"), variant: a ? "primary" : "secondary", className: "ml-auto text-xs", children: "Manual" })] }), a && e.jsxs("div", { className: "space-y-2 pt-1", children: [e.jsxs("div", { className: "flex gap-2", children: [e.jsx("button", { onClick: () => {
    i("translate"), c("");
  }, className: `text-xs px-2 py-1 rounded-full border cursor-pointer transition-colors ${a === "translate" ? "bg-active-base text-active-foreground border-active-base" : "border-border-window text-muted-foreground hover:bg-hover-window"}`, children: "Translation" }), e.jsx("button", { onClick: () => {
    i("validate"), c("");
  }, className: `text-xs px-2 py-1 rounded-full border cursor-pointer transition-colors ${a === "validate" ? "bg-active-base text-active-foreground border-active-base" : "border-border-window text-muted-foreground hover:bg-hover-window"}`, children: "Validation" })] }), e.jsx("textarea", { value: o, onChange: (h) => c(h.target.value), placeholder: `Paste ${a} result JSON here...`, rows: 5, className: "w-full rounded-md border border-border-window bg-window px-3 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-active-base focus:border-active-base resize-y" }), e.jsxs("div", { className: "flex gap-2 justify-end", children: [e.jsx(k, { onClick: () => {
    i(null), c("");
  }, variant: "secondary", className: "text-xs", children: "Cancel" }), e.jsxs(k, { onClick: p, variant: "primary", disabled: !o.trim() || r !== null, className: "text-xs", children: ["Save ", a === "translate" ? "Translation" : "Validation"] })] })] })] });
}
function $e({ loading: s, onSubmit: r, disabled: t }) {
  const [n, a] = u.useState(""), i = () => {
    if (n.trim()) {
      try {
        const o = JSON.parse(n);
        r(o);
      } catch {
        r(n.trim());
      }
      a("");
    }
  };
  return e.jsxs("div", { className: "space-y-3", children: [e.jsx("p", { className: "text-xs text-muted-foreground", children: "Paste the fix result (report JSON) from an agent to manually save it." }), e.jsx("textarea", { value: n, onChange: (o) => a(o.target.value), placeholder: "Paste fix result JSON here...", rows: 4, className: "w-full rounded-md border border-border-window bg-window px-3 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-active-base focus:border-active-base resize-y" }), e.jsx("div", { className: "flex justify-end", children: e.jsx(k, { onClick: i, variant: "primary", loading: s === "Manual Save Report", disabled: t || !n.trim(), className: "text-xs", children: "Save Report" }) })] });
}
function Me({ loading: s, onFix: r, disabled: t }) {
  const [n, a] = u.useState(""), i = () => {
    n.trim() && (r(n.trim()), a(""));
  };
  return e.jsxs("div", { className: "space-y-3", children: [e.jsx("p", { className: "text-xs text-muted-foreground", children: "Describe what should be fixed in the design to address compliance breaches." }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx("input", { type: "text", value: n, onChange: (o) => a(o.target.value), onKeyDown: (o) => o.key === "Enter" && i(), placeholder: "e.g., Increase gross floor area to meet room program requirements", className: "flex-1 rounded-md border border-border-window bg-window px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-active-base focus:border-active-base" }), e.jsxs(k, { variant: "danger", onClick: i, loading: (s == null ? void 0 : s.startsWith("Fix:")) ?? false, disabled: t || !n.trim(), children: [e.jsx(me, { className: "w-3.5 h-3.5" }), "Fix"] })] })] });
}
function Pe({ events: s, onClear: r }) {
  const [t, n] = u.useState(""), a = u.useMemo(() => {
    if (!t.trim()) return s;
    const o = t.toLowerCase();
    return s.filter((c) => c.event.toLowerCase().includes(o) || JSON.stringify(c.data).toLowerCase().includes(o));
  }, [s, t]), i = u.useMemo(() => {
    const o = new Set(s.map((c) => c.event));
    return Array.from(o).sort();
  }, [s]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Events" }), e.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: ["Real-time event stream from the coda sidecar (", s.length, " total)."] })] }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsx(k, { onClick: r, variant: "secondary", disabled: s.length === 0, children: "Clear" }) })] }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("input", { type: "text", value: t, onChange: (o) => n(o.target.value), placeholder: "Filter events by kind or content...", className: "flex-1 rounded-md border border-border-window bg-window px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-active-base focus:border-active-base" }), i.length > 0 && e.jsx("div", { className: "flex flex-wrap gap-1", children: i.map((o) => e.jsx("button", { onClick: () => n(t === o ? "" : o), className: `text-xs px-2 py-1 rounded-full border cursor-pointer transition-colors ${t === o ? "bg-active-base text-active-foreground border-active-base" : "border-border-window text-muted-foreground hover:bg-hover-window"}`, children: o }, o)) })] }), a.length === 0 ? e.jsx(v, { children: e.jsx(C, { message: s.length === 0 ? "No events received yet. Events will appear here as the sidecar processes requests." : "No events match the current filter." }) }) : e.jsx("div", { className: "space-y-2", children: a.map((o, c) => {
    const h = new Date(o.timestamp * 1e3).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit", second: "2-digit", fractionalSecondDigits: 3 });
    return e.jsx(E, { title: o.event, badge: e.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: h }), children: e.jsx(I, { data: o.data }) }, `${o.timestamp}-${c}`);
  }) })] });
}
function Re({ onProjectReady: s, onMinimize: r, onMaximize: t, onClose: n }) {
  const [a, i] = u.useState("choose"), [o, c] = u.useState(""), [p, h] = u.useState(null), [l, j] = u.useState(null), [b, d] = u.useState(false), x = u.useCallback(async () => {
    const f = await window.dialog.openFolder();
    f && (h(f), j(null));
  }, []), g = u.useCallback(async () => {
    if (!o.trim()) {
      j("Project name is required.");
      return;
    }
    if (!p) {
      j("Please select a folder.");
      return;
    }
    d(true), j(null);
    try {
      const f = await window.project.create(o.trim(), p);
      f.success ? s(p) : j(f.error ?? "Failed to create project.");
    } finally {
      d(false);
    }
  }, [o, p, s]), m = u.useCallback(async () => {
    const f = await window.dialog.openFolder();
    if (f) {
      d(true), j(null);
      try {
        const w = await window.project.open(f);
        w.success ? s(f) : (j(w.error ?? "Failed to open project."), i("open"));
      } finally {
        d(false);
      }
    }
  }, [s]);
  return e.jsxs("div", { className: "flex h-screen w-screen flex-col bg-window overflow-hidden", children: [e.jsxs("div", { className: "flex h-9 items-center border-b border-border-window bg-panel px-3 shrink-0", style: { WebkitAppRegion: "drag" }, children: [e.jsxs("div", { className: "flex items-center gap-2 flex-1", style: { WebkitAppRegion: "no-drag" }, children: [e.jsx("span", { className: "text-sm font-bold text-active-base", children: "coda" }), e.jsx("span", { className: "text-xs text-muted-foreground", children: "ACC Design Assistant" })] }), e.jsxs("div", { className: "flex items-center gap-1", style: { WebkitAppRegion: "no-drag" }, children: [e.jsx("button", { onClick: r, className: "rounded p-1.5 text-muted-foreground hover:bg-hover-window hover:text-foreground transition-colors cursor-pointer", children: e.jsx(q, {}) }), e.jsx("button", { onClick: t, className: "rounded p-1.5 text-muted-foreground hover:bg-hover-window hover:text-foreground transition-colors cursor-pointer", children: e.jsx(Q, {}) }), e.jsx("button", { onClick: n, className: "rounded p-1.5 text-muted-foreground hover:bg-destructive-bg hover:text-destructive-foreground transition-colors cursor-pointer", children: e.jsx(K, {}) })] })] }), e.jsx("div", { className: "flex flex-1 items-center justify-center p-8", children: e.jsxs("div", { className: "w-full max-w-2xl space-y-8", children: [e.jsxs("div", { className: "text-center", children: [e.jsx("h1", { className: "text-3xl font-bold text-active-base", children: "coda" }), e.jsx("p", { className: "mt-2 text-muted-foreground", children: "ACC Design Assistant" })] }), a === "choose" && e.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [e.jsxs("button", { onClick: () => {
    i("create"), j(null);
  }, className: "group flex flex-col items-center gap-4 rounded-xl border-2 border-border-window bg-window p-8 text-left transition-all hover:border-active-base hover:bg-info-bg cursor-pointer", children: [e.jsx("div", { className: "rounded-full bg-info-bg p-4 transition-colors group-hover:bg-hover-window", children: e.jsxs("svg", { className: "w-8 h-8 text-active-base", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), e.jsx("polyline", { points: "14 2 14 8 20 8" }), e.jsx("line", { x1: "12", y1: "18", x2: "12", y2: "12" }), e.jsx("line", { x1: "9", y1: "15", x2: "15", y2: "15" })] }) }), e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "text-base font-semibold text-foreground", children: "Create New Project" }), e.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Start fresh with a new coda project in a folder of your choice." })] })] }), e.jsxs("button", { onClick: m, disabled: b, className: "group flex flex-col items-center gap-4 rounded-xl border-2 border-border-window bg-window p-8 text-left transition-all hover:border-active-base hover:bg-info-bg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", children: [e.jsx("div", { className: "rounded-full bg-info-bg p-4 transition-colors group-hover:bg-hover-window", children: e.jsx("svg", { className: "w-8 h-8 text-active-base", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }) }) }), e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "text-base font-semibold text-foreground", children: "Open Existing Project" }), e.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Open a folder that already contains a coda project configuration." })] })] })] }), (a === "create" || a === "open") && e.jsxs("div", { className: "rounded-xl border border-border-window bg-window p-6 space-y-5", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("button", { onClick: () => {
    i("choose"), j(null);
  }, className: "text-muted-foreground hover:text-foreground transition-colors cursor-pointer", children: e.jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: e.jsx("polyline", { points: "15 18 9 12 15 6" }) }) }), e.jsx("h2", { className: "text-base font-semibold text-foreground", children: a === "create" ? "Create New Project" : "Open Existing Project" })] }), a === "create" && e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx("label", { className: "text-sm font-medium text-foreground", children: "Project Name" }), e.jsx("input", { type: "text", value: o, onChange: (f) => c(f.target.value), onKeyDown: (f) => f.key === "Enter" && g(), placeholder: "My Project", className: "w-full rounded-md border border-border-window bg-window px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-active-base focus:border-active-base", autoFocus: true })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx("label", { className: "text-sm font-medium text-foreground", children: "Project Folder" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx("div", { className: "flex-1 rounded-md border border-border-window bg-window px-3 py-2 text-sm text-muted-foreground truncate", children: p ?? "No folder selected" }), e.jsx(k, { onClick: x, variant: "secondary", children: "Browse\u2026" })] }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["A ", e.jsx("code", { className: "font-mono", children: ".coda/project.json" }), " will be created in this folder."] })] })] }), a === "open" && e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex gap-2", children: [e.jsx("div", { className: "flex-1 rounded-md border border-border-window bg-window px-3 py-2 text-sm text-muted-foreground truncate", children: p ?? "No folder selected" }), e.jsx(k, { onClick: x, variant: "secondary", children: "Browse\u2026" })] }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["Select a folder that contains a ", e.jsx("code", { className: "font-mono", children: ".coda/project.json" }), " file."] })] }), l && e.jsx("div", { className: "rounded-md border border-destructive-border bg-destructive-bg px-3 py-2 text-sm text-destructive-foreground", children: l }), e.jsxs("div", { className: "flex justify-end gap-2 pt-1", children: [e.jsx(k, { onClick: () => {
    i("choose"), j(null);
  }, variant: "secondary", children: "Cancel" }), a === "create" ? e.jsx(k, { onClick: g, variant: "primary", loading: b, disabled: !o.trim() || !p, children: "Create Project" }) : e.jsx(k, { onClick: m, variant: "primary", loading: b, disabled: b, children: "Open Project" })] })] }), l && a === "choose" && e.jsx("div", { className: "rounded-md border border-destructive-border bg-destructive-bg px-3 py-2 text-sm text-destructive-foreground text-center", children: l })] }) })] });
}
const Ve = [{ id: "dashboard", label: "Dashboard", icon: de }, { id: "config", label: "Config", icon: J }, { id: "runs", label: "Runs", icon: U }, { id: "report", label: "Report", icon: H }, { id: "translations", label: "Translations", icon: G }, { id: "actions", label: "Actions", icon: le }, { id: "events", label: "Events", icon: he }];
function De() {
  const [s, r] = u.useState(""), [t, n] = u.useState(void 0), [a, i] = u.useState("dashboard"), [o, c] = u.useState(0), [p, h] = u.useState(false), [l, j] = u.useState(false), [b, d] = u.useState([]), x = re("(max-width: 1100px)");
  u.useEffect(() => {
    async function y() {
      try {
        const [R, V, M] = await Promise.all([window.os.getUserId(), window.project.getPath(), window.coda.getConnectionStatus()]);
        r(R), n(V), j(M);
      } catch {
        r("anonymous-user"), n(null), j(false);
      }
    }
    y();
  }, []), u.useEffect(() => {
    const y = /* @__PURE__ */ new Set(["project_files_changed", "project_ready", "run_started", "iteration_started", "translation_saved", "report_saved", "validation_saved", "validation_completed", "translate_started"]), R = window.coda.onEvent((M) => {
      d((B) => [M, ...B]), y.has(M.event) && c((B) => B + 1);
    }), V = window.coda.onConnectionStatus((M) => {
      j(M);
    });
    return () => {
      R(), V();
    };
  }, []);
  const g = u.useCallback(() => d([]), []), m = u.useCallback(() => c((y) => y + 1), []), f = u.useCallback(() => {
    window.windowControls && window.windowControls.minimize();
  }, []), w = u.useCallback(() => {
    window.windowControls && window.windowControls.maximize();
  }, []), L = u.useCallback(() => {
    window.windowControls && window.windowControls.close();
  }, []);
  if (u.useEffect(() => {
    h(x);
  }, [x]), O("ctrl+r,meta+r", m, { preventDefault: true }, [m]), O("ctrl+b,meta+b", () => {
    h((y) => !y);
  }, { preventDefault: true }, []), t === void 0) return e.jsx("div", { className: "flex h-screen w-screen items-center justify-center bg-window", children: e.jsx(P, { label: "Loading..." }) });
  if (!t) return e.jsx(Re, { onProjectReady: (y) => n(y), onMinimize: f, onMaximize: w, onClose: L });
  const se = t.split("/").pop() ?? t;
  return e.jsxs("div", { className: "flex h-screen w-screen flex-col bg-window overflow-hidden", children: [e.jsxs("div", { className: "flex h-9 items-center border-b border-border-window bg-panel px-3 shrink-0", style: { WebkitAppRegion: "drag" }, children: [e.jsxs("div", { className: "flex items-center gap-2 flex-1", style: { WebkitAppRegion: "no-drag" }, children: [e.jsx("span", { className: "text-sm font-bold text-active-base", children: "coda" }), e.jsx("span", { className: "text-xs text-muted-foreground", children: "ACC Design Assistant" }), e.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "|" }), e.jsx("span", { className: "text-xs text-muted-foreground ml-1 font-mono", title: t, children: se }), s && e.jsxs(e.Fragment, { children: [e.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "\xB7" }), e.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: s })] }), e.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "\xB7" }), e.jsxs("span", { className: `ml-1 inline-flex items-center gap-1 text-xs ${l ? "text-success-foreground" : "text-destructive-foreground"}`, title: l ? "Sidecar connected" : "Sidecar disconnected (offline mode)", children: [e.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${l ? "bg-success-border" : "bg-destructive-border"}` }), l ? "Connected" : "Offline"] })] }), e.jsxs("div", { className: "flex items-center gap-1", style: { WebkitAppRegion: "no-drag" }, children: [e.jsx("button", { onClick: m, className: "rounded p-1.5 text-muted-foreground hover:bg-hover-window hover:text-foreground transition-colors cursor-pointer", title: "Refresh data", children: e.jsx(ce, { className: "w-3.5 h-3.5" }) }), e.jsx("button", { onClick: f, className: "rounded p-1.5 text-muted-foreground hover:bg-hover-window hover:text-foreground transition-colors cursor-pointer", children: e.jsx(q, {}) }), e.jsx("button", { onClick: w, className: "rounded p-1.5 text-muted-foreground hover:bg-hover-window hover:text-foreground transition-colors cursor-pointer", children: e.jsx(Q, {}) }), e.jsx("button", { onClick: L, className: "rounded p-1.5 text-muted-foreground hover:bg-destructive-bg hover:text-destructive-foreground transition-colors cursor-pointer", children: e.jsx(K, {}) })] })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("nav", { className: `flex flex-col border-r border-border-window bg-panel shrink-0 transition-all duration-200 ${p ? "w-12" : "w-48"}`, children: [e.jsx("div", { className: "flex-1 py-2", children: Ve.map((y) => {
    const R = y.icon, V = a === y.id;
    return e.jsxs("button", { onClick: () => i(y.id), className: `flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors cursor-pointer ${V ? "bg-info-bg text-active-base border-r-2 border-active-base" : "text-muted-foreground hover:bg-hover-window hover:text-foreground"}`, title: y.label, children: [e.jsx(R, { className: "w-4 h-4 shrink-0" }), !p && e.jsx("span", { className: "truncate", children: y.label })] }, y.id);
  }) }), e.jsx("button", { onClick: () => h(!p), className: "border-t border-border-window p-2 text-muted-foreground hover:text-foreground hover:bg-hover-window transition-colors cursor-pointer", title: p ? "Expand sidebar" : "Collapse sidebar", children: e.jsx(X, { className: `w-4 h-4 mx-auto transition-transform ${p ? "" : "rotate-180"}` }) })] }), e.jsxs("main", { className: "flex-1 overflow-y-auto p-6", children: [a === "dashboard" && e.jsx(ve, { refreshKey: o }), a === "config" && e.jsx(we, { refreshKey: o }), a === "runs" && e.jsx(Ne, { refreshKey: o }), a === "report" && e.jsx(ye, { refreshKey: o }), a === "translations" && e.jsx(ke, { refreshKey: o }), a === "actions" && e.jsx(Se, { refreshKey: o, onRefresh: m }), a === "events" && e.jsx(Pe, { events: b, onClear: g })] })] })] });
}
console.log("[DEBUG] renderer.tsx module body reached createRoot block");
if (typeof document < "u") {
  const s = document.getElementById("root");
  console.log("[DEBUG] rootElement:", s ? "found" : "null"), s && (console.log("[DEBUG] calling createRoot().render()"), te.createRoot(s).render(e.jsx(_.StrictMode, { children: e.jsx(De, {}) })));
}
export {
  Ue as OntologyTree,
  A as ValidationTree,
  De as default,
  ge as getOntologyNodeDescriptor,
  be as getValidationNodeDescriptor
};
