import { u as i, j as n } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const d = { title: "semio", icon: "\u{1F9E9}", description: "\u{1F4D6} Fundamental concepts and how semio works \u{1F4A1}", order: 1 };
function a(s) {
  const e = { a: "a", h1: "h1", h2: "h2", span: "span", ...i(), ...s.components };
  return n.jsxs(n.Fragment, { children: [`
`, n.jsxs(e.h1, { id: "kinds", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#kinds", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Kinds"] }), `
`, n.jsxs(e.h2, { id: "temporary", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#temporary", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Temporary"] }), `
`, n.jsxs(e.h2, { id: "local", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#local", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Local"] }), `
`, n.jsxs(e.h2, { id: "remote", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#remote", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Remote"] })] });
}
function h(s = {}) {
  const { wrapper: e } = { ...i(), ...s.components };
  return e ? n.jsx(e, { ...s, children: n.jsx(a, { ...s }) }) : a(s);
}
export {
  h as default,
  d as frontmatter
};
