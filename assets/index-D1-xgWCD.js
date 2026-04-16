import { u as r, j as n } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const a = { title: "Theory", description: "Theoretical concepts", icon: "\u{1F4DA}", order: 5 };
function e(t) {
  const o = { p: "p", ...r(), ...t.components };
  return n.jsxs(n.Fragment, { children: [`
`, n.jsx(o.p, { children: "Explore the theoretical foundations of Semio." })] });
}
function p(t = {}) {
  const { wrapper: o } = { ...r(), ...t.components };
  return o ? n.jsx(o, { ...t, children: n.jsx(e, { ...t }) }) : e(t);
}
export {
  p as default,
  a as frontmatter
};
