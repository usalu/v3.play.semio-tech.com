import { u as i, j as e } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const m = { title: "Getting Started", description: "Get started with Semio", icon: "\u{1F680}", order: 1, concepts: ["getting-started", "beginner", "installation"] };
function o(t) {
  const n = { p: "p", ...i(), ...t.components };
  return e.jsxs(e.Fragment, { children: [`
`, e.jsx(n.p, { children: "Welcome to the Getting Started section! Here you'll learn how to install and begin using Semio." })] });
}
function l(t = {}) {
  const { wrapper: n } = { ...i(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(o, { ...t }) }) : o(t);
}
export {
  l as default,
  m as frontmatter
};
