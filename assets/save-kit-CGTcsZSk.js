import { u as r, j as e } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const d = { title: "Save As a Kit", description: "Export and reuse your modular setup as a Kit", icon: "\u{1F4E6}", order: 5 };
function i(s) {
  const n = { a: "a", br: "br", code: "code", h2: "h2", h3: "h3", hr: "hr", img: "img", li: "li", p: "p", span: "span", strong: "strong", ul: "ul", ...r(), ...s.components };
  return e.jsxs(e.Fragment, { children: [`
`, e.jsxs(n.p, { children: ["Once you\u2019ve created your custom bricks (Types), built your structure (Design), and everything fits together nicely \u2014 it\u2019s time to pack it all up into a ", e.jsx(n.strong, { children: "Kit" }), "! \u{1F381}", e.jsx(n.br, {}), `
`, "Think of this as boxing up your LEGO set so you (or others) can build it again later."] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h2, { id: "-why-save-a-kit", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-why-save-a-kit", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F3AF} Why Save a Kit?"] }), `
`, e.jsx(n.p, { children: "Saving a Kit allows you to:" }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: ["\u{1F9F0} ", e.jsx(n.strong, { children: "Reuse" }), " it across different projects"] }), `
`, e.jsxs(n.li, { children: ["\u{1F91D} ", e.jsx(n.strong, { children: "Share" }), " it with your team or students"] }), `
`, e.jsxs(n.li, { children: ["\u{1F9EA} ", e.jsx(n.strong, { children: "Test" }), " and version it as your system evolves"] }), `
`, e.jsxs(n.li, { children: ["\u{1F310} ", e.jsx(n.strong, { children: "Import" }), " it into semio Studio or back into Grasshopper anytime"] }), `
`] }), `
`, e.jsxs(n.p, { children: ["This makes your modular logic ", e.jsx(n.strong, { children: "connectorable" }), ", ", e.jsx(n.strong, { children: "editable" }), ", and ", e.jsx(n.strong, { children: "collaborative" }), "."] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h2, { id: "-whats-inside-the-kit", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-whats-inside-the-kit", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9E9} What\u2019s Inside the Kit?"] }), `
`, e.jsxs(n.p, { children: ["A Kit in semio is a complete bundle \u2014 not just geometry, but structure, meaning, and logic.", e.jsx(n.br, {}), `
`, "Here\u2019s what\u2019s inside:"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: ["\u{1F9F1} ", e.jsx(n.strong, { children: "Types" }), " \u2013 the molds for your bricks", e.jsx(n.br, {}), `
`, "Each Type includes:"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: ["\u{1F9CA} ", e.jsx(n.strong, { children: "Model" }), " (geometry)"] }), `
`, e.jsxs(n.li, { children: ["\u{1F9F2} ", e.jsx(n.strong, { children: "Connectors" }), " (snap points)"] }), `
`, e.jsxs(n.li, { children: ["\u{1F3F7}\uFE0F ", e.jsx(n.strong, { children: "Metadata" }), " (semantic info)"] }), `
`] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: ["\u{1F9E9} ", e.jsx(n.strong, { children: "Pieces" }), " \u2013 the actual bricks used in your Design", e.jsx(n.br, {}), `
`, "These are the placed instances of your Types, each with its own ID (e.g., ", e.jsx(n.code, { children: "Red-T" }), ", ", e.jsx(n.code, { children: "Blu-B" }), ", ", e.jsx(n.code, { children: "Yel" }), ")."] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: ["\u{1F517} ", e.jsx(n.strong, { children: "Connections" }), " \u2013 all the snapping instructions", e.jsx(n.br, {}), `
`, "This includes every single connection between all Pieces:"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsx(n.li, { children: "Which Connector connects to which" }), `
`, e.jsx(n.li, { children: "Any transformations (shift, rotate, tilt, etc.)" }), `
`] }), `
`] }), `
`] }), `
`, e.jsx(n.p, { children: "Together, these elements define a fully functional modular system \u2014 ready to assemble, remix, or expand in any future design. \u{1F9F1}\u{1F6E0}\uFE0F" }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h2, { id: "\uFE0F-build-your-kit-in-grasshopper", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-build-your-kit-in-grasshopper", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F6E0}\uFE0F Build Your Kit in Grasshopper"] }), `
`, e.jsxs(n.p, { children: ["To assemble your Kit in Grasshopper, plug your modular setup into the ", e.jsx(n.code, { children: "~Kit" }), " component."] }), `
`, e.jsxs(n.h3, { id: "youll-need-to-connect", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#youll-need-to-connect", children: e.jsx(n.span, { className: "icon icon-link" }) }), "You'll need to connect:"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: ["\u{1F3F7}\uFE0F ", e.jsx(n.strong, { children: "Name" }), " \u2013 the name of your Kit (e.g. ", e.jsx(n.code, { children: '"hello semio"' }), ")"] }), `
`, e.jsxs(n.li, { children: ["\u{1F4DD} ", e.jsx(n.strong, { children: "Description" }), " \u2013 a short summary (e.g. ", e.jsx(n.code, { children: '"The most simple semio kit."' }), ")"] }), `
`, e.jsxs(n.li, { children: ["\u{1F9F1} ", e.jsx(n.strong, { children: "Types" }), " \u2013 all your defined ", e.jsx(n.code, { children: "Typ(...)" }), " bricks"] }), `
`, e.jsxs(n.li, { children: ["\u{1F9E9} ", e.jsx(n.strong, { children: "Designs" }), " \u2013 any ", e.jsx(n.code, { children: "Dsn(...)" }), " layouts you want to include"] }), `
`] }), `
`, e.jsxs(n.p, { children: ["When connected correctly, you\u2019ll see an output like:", e.jsx(n.br, {}), `
`, e.jsx(n.code, { children: "Kit(hello semio)" }), " \u2014 your boxed-up building system, ready to go! \u{1F9E9}\u{1F4E6}"] }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/model-kit.png", alt: "Save Kit" }) }), `
`, e.jsx(n.p, { children: "\u{1F4C1} A Kit is simply a folder that holds all your semio data \u2014 Types, geometry, and design logic \u2014 bundled into one reusable package." }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/kit-folder.png", alt: "Save Kit" }) })] });
}
function a(s = {}) {
  const { wrapper: n } = { ...r(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(i, { ...s }) }) : i(s);
}
export {
  a as default,
  d as frontmatter
};
