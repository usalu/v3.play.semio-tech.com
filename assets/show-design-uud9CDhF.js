import { u as r, j as e } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const d = { title: "Preview Design", description: "Visualize your model using the Preview Design component", icon: "\u{1F5BC}\uFE0F", order: 4 };
function i(s) {
  const n = { a: "a", br: "br", code: "code", h2: "h2", hr: "hr", img: "img", li: "li", p: "p", span: "span", strong: "strong", ul: "ul", ...r(), ...s.components };
  return e.jsxs(e.Fragment, { children: [`
`, e.jsxs(n.h2, { id: "-from-logic-to-look", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-from-logic-to-look", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F50D} From Logic to Look"] }), `
`, e.jsx(n.p, { children: "Once you've done the following:" }), `
`, e.jsxs(n.p, { children: ["1\uFE0F\u20E3 ", e.jsx(n.strong, { children: "Placed your Bricks" }), " \u2013 by defining ", e.jsx(n.strong, { children: "Pieces" }), " (instances of your brick molds)", e.jsx(n.br, {}), `
`, "2\uFE0F\u20E3 ", e.jsx(n.strong, { children: "Snapped them together" }), " \u2013 by setting up ", e.jsx(n.strong, { children: "Connections" }), " between their Connectors", e.jsx(n.br, {}), `
`, "3\uFE0F\u20E3 ", e.jsx(n.strong, { children: "Organized the build" }), " \u2013 by assembling them into a full ", e.jsx(n.strong, { children: "Design" })] }), `
`, e.jsxs(n.p, { children: ["\u{1F389} It\u2019s time to ", e.jsx(n.strong, { children: "see your LEGO model come to life" }), "!"] }), `
`, e.jsx(n.hr, {}), `
`, e.jsx(n.p, { children: `Up to now, we\u2019ve been working behind the scenes \u{1F6E0}\uFE0F
We\u2019ve been defining meaning, relationships, and structure \u2014 not just drawing shapes` }), `
`, e.jsx(n.p, { children: "But unlike regular Grasshopper workflows, semio doesn\u2019t preview geometry automatically \u26A0\uFE0F The visualization happens in a dedicated step \u{1F3AC} like revealing your finished LEGO model after following all the instructions" }), `
`, e.jsxs(n.h2, { id: "-visualize-the-design", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-visualize-the-design", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9E9} Visualize the Design"] }), `
`, e.jsxs(n.p, { children: ["Once your modular system is ready, it\u2019s time to see it come together!", e.jsx(n.br, {}), `
`, "To visualize the final assembly, semio uses the ", e.jsx(n.code, { children: "Preview Design" }), " component in Grasshopper"] }), `
`, e.jsxs(n.p, { children: ["\u{1F50C} ", e.jsxs(n.strong, { children: ["Connect these inputs to the ", e.jsx(n.code, { children: "Preview Design" }), " component"] }), ":"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "\u{1F9F1} Design" }), e.jsx(n.br, {}), `
`, "The complete structure \u2014 tells semio which Pieces are used and how they\u2019re connected"] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "\u{1F4E6} Types" }), e.jsx(n.br, {}), `
`, "The brick molds used in the Design \u2014 including Connectors and logic for snapping"] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "\u{1F9CA} Models" }), e.jsx(n.br, {}), `
`, "The geometry files (e.g. ", e.jsx(n.code, { children: ".glb" }), ") or ", e.jsx(n.code, { children: "Objects" }), " for each Type and Variant \u2014 the actual shape of each brick"] }), `
`] }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.p, { children: ["\u{1F50D} Once connected, the ", e.jsx(n.code, { children: "Preview Design" }), " component renders your full modular creation:", e.jsx(n.br, {}), `
`, "brick by brick, just like snapping together your final LEGO model on the table! \u{1F9E9}"] }), `
`, e.jsx(n.p, { children: "Here\u2019s what gets visualized:" }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: ["\u{1F9F1} ", e.jsx(n.strong, { children: "Brick Placement" }), e.jsx(n.br, {}), `
`, "Every Piece is shown in its final position \u2014 exactly where your Design logic places it"] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: ["\u{1F9F2} ", e.jsx(n.strong, { children: "Connector Connections" }), e.jsx(n.br, {}), `
`, "All ", e.jsx(n.strong, { children: "Connectors" }), " are displayed \u2014 including their direction \u2014 so you can clearly see how Pieces are designed to snap together, and which ones are actually connected"] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: ["\u{1F504} ", e.jsx(n.strong, { children: "Snapping Adjustments" }), e.jsx(n.br, {}), `
`, "Rotations, gaps, shifts, or tilts added during connection are shown \u2014 making alignment easy to check"] }), `
`] }), `
`] }), `
`, e.jsxs(n.p, { children: [e.jsx(n.img, { src: "/assets/images/preview-design.png", alt: "\u{1F4C1} Preview Design" }), `
`, e.jsx(n.img, { src: "/assets/images/preview-design-2-black.png", alt: "\u{1F4C1} Preview Design" })] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.p, { children: ["\u2705 That\u2019s it \u2014 you\u2019ve built and visualized your first modular kit in Semio!", e.jsx(n.br, {}), `
`, "From mold to model, every part now fits where it belongs"] })] });
}
function h(s = {}) {
  const { wrapper: n } = { ...r(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(i, { ...s }) }) : i(s);
}
export {
  h as default,
  d as frontmatter
};
