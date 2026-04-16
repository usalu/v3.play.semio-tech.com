import { u as r, j as t } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const i = { title: "Manuals", description: "Reference manuals", icon: "\u{1F4D6}", order: 4 };
function o(n) {
  const e = { p: "p", ...r(), ...n.components };
  return t.jsxs(t.Fragment, { children: [`
`, t.jsx(e.p, { children: "Comprehensive manuals for all semio components." })] });
}
function p(n = {}) {
  const { wrapper: e } = { ...r(), ...n.components };
  return e ? t.jsx(e, { ...n, children: t.jsx(o, { ...n }) }) : o(n);
}
export {
  p as default,
  i as frontmatter
};
