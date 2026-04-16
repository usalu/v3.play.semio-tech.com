import { u as t, j as n } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const h = { title: "semio.gh", description: "The semio Grasshopper manual", icon: "\uFFFD", order: 2 };
function o(s) {
  const e = { a: "a", h2: "h2", h3: "h3", p: "p", span: "span", ...t(), ...s.components };
  return n.jsxs(n.Fragment, { children: [`
`, `
`, `
`, n.jsxs(e.h2, { id: "components", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#components", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Components"] }), `
`, n.jsx(e.p, { children: "Most components are Grasshopper clusters \u{1F4E6}" }), `
`, n.jsxs(e.h3, { id: "passthrough-components", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#passthrough-components", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Passthrough components"] }), `
`, n.jsxs(e.h3, { id: "filter-components", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#filter-components", children: n.jsx(e.span, { className: "icon icon-link" }) }), "Filter components"] }), `
`, n.jsxs(e.h2, { id: "api", children: [n.jsx(e.a, { "aria-hidden": "true", tabIndex: "-1", href: "#api", children: n.jsx(e.span, { className: "icon icon-link" }) }), "API"] }), `
`, `
`] });
}
function p(s = {}) {
  const { wrapper: e } = { ...t(), ...s.components };
  return e ? n.jsx(e, { ...s, children: n.jsx(o, { ...s }) }) : o(s);
}
export {
  p as default,
  h as frontmatter
};
