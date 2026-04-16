import { u as r, j as n } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const p = { title: "Intro", description: "Introduction to semio concepts", order: 1, concepts: ["introduction", "beginner", "concepts"] };
function e(t) {
  const o = { p: "p", ...r(), ...t.components };
  return n.jsxs(n.Fragment, { children: [`
`, n.jsx(o.p, { children: "Learn the fundamental concepts of Semio." })] });
}
function a(t = {}) {
  const { wrapper: o } = { ...r(), ...t.components };
  return o ? n.jsx(o, { ...t, children: n.jsx(e, { ...t }) }) : e(t);
}
export {
  a as default,
  p as frontmatter
};
