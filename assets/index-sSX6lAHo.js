import { u as r, j as e } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const u = { title: "Hello Semio", description: "Your first semio tutorial", order: 1 };
function o(t) {
  const n = { p: "p", ...r(), ...t.components };
  return e.jsxs(e.Fragment, { children: [`
`, e.jsx(n.p, { children: "Learn the basics of semio by building your first design step by step." })] });
}
function a(t = {}) {
  const { wrapper: n } = { ...r(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(o, { ...t }) }) : o(t);
}
export {
  a as default,
  u as frontmatter
};
