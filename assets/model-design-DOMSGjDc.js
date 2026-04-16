import { u as t, j as e } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const a = void 0;
function r(s) {
  const n = { a: "a", blockquote: "blockquote", br: "br", code: "code", em: "em", h2: "h2", h3: "h3", h4: "h4", h5: "h5", hr: "hr", img: "img", li: "li", ol: "ol", p: "p", span: "span", strong: "strong", table: "table", tbody: "tbody", td: "td", th: "th", thead: "thead", tr: "tr", ul: "ul", ...t(), ...s.components }, { Aside: i } = n;
  return i || o("Aside"), e.jsxs(e.Fragment, { children: [`
`, e.jsxs(n.p, { children: ["This section shows how to ", e.jsx(n.strong, { children: "turn your brick molds" }), " - the ", e.jsx(n.strong, { children: "Types" }), " and ", e.jsx(n.strong, { children: "Variants" }), " you've defined - into real, usable building blocks \u{1F9F1}"] }), `
`, e.jsxs(n.p, { children: ["As explained in ", e.jsx(n.em, { children: "[Think in Semio]" }), ", a Type is just a ", e.jsx(n.strong, { children: "blueprint" }), ". It defines how a brick should look and behave \u2014 but it\u2019s not a brick yet \u{1F4D0}"] }), `
`, e.jsxs(n.p, { children: ["To actually build a design, you need to create ", e.jsx(n.strong, { children: "Pieces" }), " \u2014 the bricks made from your molds, ready to place, connect, and assemble \u{1F9E9}"] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h2, { id: "-place-your-bricks-model-pieces--pcs", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-place-your-bricks-model-pieces--pcs", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F516} Place Your Bricks (Model Pieces \u2013 Pcs)"] }), `
`, e.jsxs(n.p, { children: ["Now it\u2019s time to ", e.jsx(n.strong, { children: "turn your molds into actual bricks" }), " \u2014 called ", e.jsx(n.strong, { children: "Pieces" }), " \u{1F9E9}", e.jsx(n.br, {}), `
`, "These are the elements you\u2019ll place, move, and connect in your design \u{1F3AF}"] }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/sketch-drawing-piece.png", alt: "\u{1F4E4} sketch drawing" }) }), `
`, e.jsxs(n.p, { children: ["When you create a Piece, you're telling Semio:", e.jsx(n.br, {}), `
`, e.jsx(n.em, { children: '"Take this specific mold (Type + Variant) and make a real, usable brick from it."' }), " \u{1F9F1}"] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.p, { children: ["Each ", e.jsx(n.strong, { children: "Piece" }), " automatically includes everything from its mold:"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: [e.jsx(n.strong, { children: "Geometry (Model)" }), " \u2014 the shape defined by the Variant\u2019s geometry file \u{1F9F1}"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.strong, { children: "Connectors" }), " \u2014 the snap points and their directions from the Type \u2693"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.strong, { children: "Semantic Data" }), " \u2014 the Type name, Variant identity, and design role \u{1F9E0}"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.strong, { children: "Metadata" }), " \u2014 any extra info like function, material, or tags \u{1F4C4}"] }), `
`] }), `
`, e.jsx(n.p, { children: "In short: a Piece is a fully formed brick, based on the rules and shape you defined earlier \u{1F501}" }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h3, { id: "-name-the-pieces", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-name-the-pieces", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F194} Name the Pieces"] }), `
`, e.jsx(n.p, { children: `Each Piece needs a unique name \u2014 its ID \u2014 so semio can \u{1F9ED} track, \u{1F517} reference, and \u{1F9E9} connect it later on.
Think of it as giving your brick a personal label \u{1F3F7}\uFE0F` }), `
`, e.jsxs(n.p, { children: ["In this example, we name the Pieces based on the semio logo \u2014 using both ", e.jsx(n.strong, { children: "color" }), " and ", e.jsx(n.strong, { children: "position" }), " for clarity \u{1F3A8}"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: ["\u{1F7E8} ", e.jsx(n.code, { children: "Yel" }), " \u2192 yellow piece on the left"] }), `
`, e.jsxs(n.li, { children: ["\u{1F534} ", e.jsx(n.code, { children: "Red-T" }), " \u2192 red piece at the top"] }), `
`, e.jsxs(n.li, { children: ["\u{1F534} ", e.jsx(n.code, { children: "Red-R" }), " \u2192 red piece on the right"] }), `
`, e.jsxs(n.li, { children: ["\u{1F535} ", e.jsx(n.code, { children: "Blu-T" }), " \u2192 blue piece at the top"] }), `
`, e.jsxs(n.li, { children: ["\u{1F535} ", e.jsx(n.code, { children: "Blu-B" }), " \u2192 blue piece at the bottom"] }), `
`] }), `
`, e.jsxs(n.p, { children: ["As always in Semio, naming is flexible \u{1F524}", e.jsx(n.br, {}), `
`, "But a clear and consistent system makes your design easier to understand, build, and share \u{1F9E0}"] }), `
`, e.jsxs(n.blockquote, { children: [`
`, e.jsx(n.p, { children: "\u{1F4A1} It\u2019s like putting a sticker on each LEGO brick so you always know which one goes where \u{1F9F1}" }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h3, { id: "-link-to-the-mold", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-link-to-the-mold", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9EC} Link to the Mold"] }), `
`, e.jsxs(n.p, { children: ["To model a Piece, semio needs to know ", e.jsx(n.strong, { children: "which mold it\u2019s made from" }), " \u{1F517}", e.jsx(n.br, {}), `
`, "That means linking it to a specific ", e.jsx(n.strong, { children: "Type" }), " and ", e.jsx(n.strong, { children: "Variant" }), ":"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: ["\u{1F3F7}\uFE0F ", e.jsx(n.strong, { children: "Type name" }), " \u2192 e.g. ", e.jsx(n.code, { children: "'Profile'" })] }), `
`, e.jsxs(n.li, { children: ["\u{1F522} ", e.jsx(n.strong, { children: "Variant number" }), " \u2192 e.g. ", e.jsx(n.code, { children: "2" }), ", ", e.jsx(n.code, { children: "4" }), ", or ", e.jsx(n.code, { children: "5" })] }), `
`] }), `
`, e.jsx(n.p, { children: "\u{1F449} Without this reference, the Piece has no identity \u2014 it won\u2019t know what shape to take or how to connect \u26A0\uFE0F" }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h5, { id: "-example-from-the-sketch", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-example-from-the-sketch", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F4D0} Example from the Sketch"] }), `
`, e.jsxs(n.p, { children: ["In our example, the final ", e.jsx(n.strong, { children: "Design" }), " includes five Pieces, built from ", e.jsx(n.strong, { children: "three different Variants" }), ":"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: ["2\xD7 Variant ", e.jsx(n.code, { children: "2" })] }), `
`, e.jsxs(n.li, { children: ["1\xD7 Variant ", e.jsx(n.code, { children: "4" })] }), `
`, e.jsxs(n.li, { children: ["2\xD7 Variant ", e.jsx(n.code, { children: "5" })] }), `
`] }), `
`, e.jsxs(n.p, { children: ["We'll give each of these Pieces a ", e.jsx(n.strong, { children: "unique ID" }), ", like so:"] }), `
`, e.jsxs(n.table, { children: [e.jsx(n.thead, { children: e.jsxs(n.tr, { children: [e.jsx(n.th, { children: "Variant" }), e.jsx(n.th, { children: "Piece IDs" })] }) }), e.jsxs(n.tbody, { children: [e.jsxs(n.tr, { children: [e.jsx(n.td, { children: e.jsx(n.code, { children: "4" }) }), e.jsx(n.td, { children: e.jsx(n.code, { children: "Yel" }) })] }), e.jsxs(n.tr, { children: [e.jsx(n.td, { children: e.jsx(n.code, { children: "5" }) }), e.jsxs(n.td, { children: [e.jsx(n.code, { children: "Red-T" }), ", ", e.jsx(n.code, { children: "Red-R" })] })] }), e.jsxs(n.tr, { children: [e.jsx(n.td, { children: e.jsx(n.code, { children: "2" }) }), e.jsxs(n.td, { children: [e.jsx(n.code, { children: "Blu-T" }), ", ", e.jsx(n.code, { children: "Blu-B" })] })] })] })] }), `
`, e.jsxs(n.p, { children: ["These are the ", e.jsx(n.strong, { children: "actual bricks" }), " you'll be placing into your model \u{1F9F1}"] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h5, { id: "\uFE0F-in-grasshopper", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-in-grasshopper", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F6E0}\uFE0F In Grasshopper"] }), `
`, e.jsxs(n.p, { children: ["Now that you understand what a Piece is, let's learn how to ", e.jsx(n.strong, { children: "cast them" }), " using the semio plugin in ", e.jsx(n.strong, { children: "Grasshopper" }), " \u{1F997}"] }), `
`, e.jsxs(n.p, { children: ["As shown in the image, you\u2019ll use the ", e.jsxs(n.strong, { children: ["Model Piece ", e.jsx(n.code, { children: "Pce" }), " component"] }), " and provide three key inputs:"] }), `
`, e.jsxs(n.ol, { children: [`
`, e.jsxs(n.li, { children: ["\u{1F194} ", e.jsx(n.strong, { children: "Piece IDs" }), " \u2192 Unique names for each brick (e.g. ", e.jsx(n.code, { children: "Yel" }), ", ", e.jsx(n.code, { children: "Blu-B" }), ")"] }), `
`, e.jsxs(n.li, { children: ["\u{1F522} ", e.jsx(n.strong, { children: "Variant Numbers" }), " \u2192 Tell semio which Variant of the mold to use (e.g. ", e.jsx(n.code, { children: "2" }), ", ", e.jsx(n.code, { children: "5" }), ")"] }), `
`, e.jsxs(n.li, { children: ["\u{1F3F7}\uFE0F ", e.jsx(n.strong, { children: "Type Name" }), " \u2192 The shared name of the mold (e.g. ", e.jsx(n.code, { children: "'Profile'" }), ")"] }), `
`] }), `
`, e.jsxs(n.p, { children: ["Each row becomes a new ", e.jsx(n.strong, { children: "Piece" }), ", named by its ID \u2014 like ", e.jsx(n.code, { children: "Pce(Yel)" }), " or ", e.jsx(n.code, { children: "Pce(Red-R)" }), " \u2014", e.jsx(n.br, {}), `
`, "each one inherits geometry, connectors, and semantic logic from its ", e.jsx(n.strong, { children: "Type" }), " and ", e.jsx(n.strong, { children: "Variant" }), " \u{1F501}"] }), `
`, e.jsx(n.p, { children: "\u{1F9F1} Let\u2019s start by modeling the first two Pieces from the sketch" }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/model-piece-10Alpha.png", alt: "Model Piece Component" }) }), `
`, e.jsx(n.p, { children: "Once all five Pieces are created, your model will look like this:" }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/model-5pieces-10Alpha-V2.png", alt: "Model Piece Component" }) }), `
`, e.jsxs(n.blockquote, { children: [`
`, e.jsxs(n.p, { children: ["\u2705 Your bricks are now cast and ready", e.jsx(n.br, {}), `
`, "Next step: ", e.jsx(n.strong, { children: "placing and connecting them" }), " to build your final model \u{1F517}"] }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h2, { id: "-connect-the-bricks-model-connections---con", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-connect-the-bricks-model-connections---con", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F517} Connect the Bricks (Model Connections - Con)"] }), `
`, e.jsxs(n.p, { children: ["Now that you've placed your ", e.jsx(n.strong, { children: "Pieces" }), ", it's time to tell semio how they connect \u{1F517}", e.jsx(n.br, {}), `
`, "Think of this like writing the ", e.jsx(n.strong, { children: "assembly instructions" }), " for snapping bricks together \u{1F9F2}"] }), `
`, e.jsxs(n.p, { children: ["Each ", e.jsx(n.strong, { children: "Connection" }), " says:", e.jsx(n.br, {}), `
`, "\u{1F449} ", e.jsx(n.em, { children: '"Connect this Connector on one Piece to a Connector on another Piece"' })] }), `
`, e.jsx("br", {}), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/sketch-drawing-connections.png", alt: "\u{1F4E4} sketch drawing" }) }), `
`, e.jsxs(n.h3, { id: "-set-the-connection", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-set-the-connection", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9ED} Set the Connection"] }), `
`, e.jsx(n.p, { children: "To create a connection, you need to define four values:" }), `
`, e.jsxs(n.ol, { children: [`
`, e.jsxs(n.li, { children: ["\u{1F194} ", e.jsxs(n.strong, { children: ["Connected Piece ID (", e.jsx(n.code, { children: "CdPc" }), ")"] }), " \u2192 the Piece you're connecting ", e.jsx(n.em, { children: "from" })] }), `
`, e.jsxs(n.li, { children: ["\u2693 ", e.jsxs(n.strong, { children: ["Connected Piece Connector ID (", e.jsx(n.code, { children: "CdPo" }), ")"] }), " \u2192 the Connector you're connecting ", e.jsx(n.em, { children: "from" })] }), `
`, e.jsxs(n.li, { children: ["\u{1F194} ", e.jsxs(n.strong, { children: ["Connecting Piece ID (", e.jsx(n.code, { children: "CgPc" }), ")"] }), " \u2192 the Piece you're connecting ", e.jsx(n.em, { children: "to" })] }), `
`, e.jsxs(n.li, { children: ["\u2693 ", e.jsxs(n.strong, { children: ["Connecting Piece Connector ID (", e.jsx(n.code, { children: "CgPo" }), ")"] }), " \u2192 the Connector you're connecting ", e.jsx(n.em, { children: "to" })] }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.p, { children: ["Put simply:", e.jsx(n.br, {}), `
`, "\u27A1\uFE0F ", e.jsx(n.strong, { children: "Connect this Connector on this Piece \u2192 to that Connector on that Piece" })] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h5, { id: "-example-connecting-two-pieces", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-example-connecting-two-pieces", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9E9} Example: Connecting Two Pieces"] }), `
`, e.jsxs(n.p, { children: ["\u{1F9F1} Before snapping the full model together, let\u2019s start small \u2014 by connecting the ", e.jsx(n.strong, { children: "first two bricks" }), ".", e.jsx(n.br, {}), `
`, "We\u2019ll connect Piece ", e.jsx(n.code, { children: "Yel" }), " to Piece ", e.jsx(n.code, { children: "Red-T" }), ", using their ", e.jsx(n.strong, { children: "west-facing Connectors" }), "."] }), `
`, e.jsx(n.p, { children: "From the sketch, we can tell:" }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: ["Use the ", e.jsxs(n.strong, { children: [e.jsx(n.code, { children: "w" }), " (west)"] }), " Connector of ", e.jsx(n.code, { children: "Yel" })] }), `
`, e.jsxs(n.li, { children: ["Connect it to the ", e.jsxs(n.strong, { children: [e.jsx(n.code, { children: "w" }), " (west)"] }), " Connector of ", e.jsx(n.code, { children: "Red-T" })] }), `
`] }), `
`, e.jsxs(n.p, { children: [`So the connection looks like this:
`, e.jsx(n.code, { children: "Con(Yel:w \u2192 Red-T:w)" })] }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/mode-connection-grasshopper.png", alt: "Connection Example" }) }), `
`, e.jsxs(n.p, { children: ["This tells Semio:", e.jsx(n.br, {}), `
`, e.jsxs(n.strong, { children: ["Snap the west Connector of ", e.jsx(n.code, { children: "Yel" }), " to the west Connector of ", e.jsx(n.code, { children: "Red-T" })] })] }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/set-connection-2pcs-alpha.png", alt: "Set Connection" }) }), `
`, e.jsx(n.p, { children: "Once this first connection is in place, you can continue snapping all remaining bricks together using similar logic \u{1F9E9}" }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/mode-connection-5pcs-grasshopper.png", alt: "Set Connection" }) }), `
`, e.jsx(n.p, { children: "\u{1F517} This Tells Semio:" }), `
`, e.jsxs(n.ol, { children: [`
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.code, { children: "Con(Yel:w \u2192 w:Red-T)" }), e.jsx(n.br, {}), `
`, "\u{1F449} ", e.jsxs(n.strong, { children: ["Snap the west Connector of ", e.jsx(n.code, { children: "Yel" })] }), " to the ", e.jsxs(n.strong, { children: ["west Connector of ", e.jsx(n.code, { children: "Red-T" })] })] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.code, { children: "Con(Red-T:e \u2192 e:Red-R)" }), e.jsx(n.br, {}), `
`, "\u{1F449} ", e.jsxs(n.strong, { children: ["Snap the east Connector of ", e.jsx(n.code, { children: "Red-T" })] }), " to the ", e.jsxs(n.strong, { children: ["east Connector of ", e.jsx(n.code, { children: "Red-R" })] })] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.code, { children: "Con(Red-R:n \u2192 w:Blu-T)" }), e.jsx(n.br, {}), `
`, "\u{1F449} ", e.jsxs(n.strong, { children: ["Snap the north Connector of ", e.jsx(n.code, { children: "Red-R" })] }), " to the ", e.jsxs(n.strong, { children: ["west Connector of ", e.jsx(n.code, { children: "Blu-T" })] })] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.code, { children: "Con(Red-R:n \u2192 w:Blu-B)" }), e.jsx(n.br, {}), `
`, "\u{1F449} ", e.jsxs(n.strong, { children: ["Snap the north Connector of ", e.jsx(n.code, { children: "Red-R" })] }), " to the ", e.jsxs(n.strong, { children: ["west Connector of ", e.jsx(n.code, { children: "Blu-B" })] })] }), `
`] }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/set-connection-all-pcs-alpha.png", alt: "Set Connection" }) }), `
`, e.jsxs(n.h3, { id: "-adjust-snap-optional-step", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-adjust-snap-optional-step", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F3AF} Adjust Snap ", e.jsx(n.em, { children: "(Optional Step)" })] }), `
`, e.jsxs(n.p, { children: ["When two Pieces are connected through Connectors, semio gives you control over ", e.jsx(n.strong, { children: "how the attached geometry is positioned" }), " \u2014", e.jsx(n.br, {}), `
`, "without changing the Connector itself."] }), `
`, e.jsxs(n.p, { children: ["These adjustments are applied ", e.jsx(n.strong, { children: "relative to the orientation of the Connector" }), ", based on how it was defined in the mold (Type)."] }), `
`, e.jsx(n.p, { children: "\u{1F4CC} Use this when the geometry needs to be slightly offset \u2014 to float, shift, or align more precisely." }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h4, { id: "-move-translation", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-move-translation", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F501} Move (Translation)"] }), `
`, e.jsx(n.p, { children: "You can move the geometry in three local directions:" }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "Gap" }), ` \u2B05\uFE0F\u27A1\uFE0F \u2192 Creates a space between two connected elements by pushing the Piece forward or backward along the Connector's axis
Ideal for separating elements or creating breathing room between parts`] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "Shift" }), " \u2194\uFE0F \u2192 Moves the Piece side to side, across the plane of the Connector", e.jsx(n.br, {}), `
`, "\u{1F4D0} Like nudging a LEGO brick left or right to line it up with studs underneath"] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "Rise" }), " \u2B06\uFE0F\u2B07\uFE0F \u2192 Lifts or lowers the Piece vertically, perpendicular to the face it connects to", e.jsx(n.br, {}), `
`, "\u{1FA9C} Like lifting a brick slightly higher or lowering it onto the studs"] }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/translation-parameter.gif", alt: "Connection Adjustment" }) }), `
`] }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h4, { id: "-rotating-orientation", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-rotating-orientation", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F504} Rotating (Orientation)"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "Rotate" }), ` \u{1F503} \u2192 Rotates the Piece flat, around the Connector's main vector
\u{1F9ED} Like spinning a round LEGO tile in place`] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "Turn" }), ` \u{1F504} \u2192 Turns the Piece sideways, rotating it horizontally
\u{1F300} Like twisting a LEGO hinge side to side`] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "Tilt" }), ` \u{1F938} \u2192 Tilts the Piece forward or backward, around a vertical axis
\u{1F3A2} Like tilting a ramp or slope brick up or down`] }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/Rotation-parameter.gif", alt: "Connection Adjustment" }) }), `
`] }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsx(n.p, { children: "As we can see, the two Pieces we connected earlier don\u2019t align exactly as shown in the sketch \u{1F9E9}" }), `
`, e.jsx("br", {}), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/sketch-drawing-45.png", alt: "\u{1F4E4} sketch drawing" }) }), `
`, e.jsx("br", {}), `
`, e.jsx(n.p, { children: "This is where the optional step of adjusting the snap comes in \u{1F6E0}\uFE0F" }), `
`, e.jsxs(n.p, { children: ["semio lets you fine-tune the position of a connected Piece after snapping \u{1F9F2}", e.jsx(n.br, {}), `
`, "You\u2019re not changing the Connector itself \u2693", e.jsx(n.br, {}), `
`, "Instead, you're offsetting the ", e.jsx(n.strong, { children: "geometry" }), " that comes with it \u{1F4D0}"] }), `
`, e.jsx("br", {}), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/set-connection-2pcs.gif", alt: "Set Connection" }) }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h5, { id: "-connecting-the-rest-of-the-pieces", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-connecting-the-rest-of-the-pieces", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u2795 Connecting the Rest of the Pieces"] }), `
`, e.jsxs(n.p, { children: ["Once ", e.jsx(n.code, { children: "i" }), " and ", e.jsx(n.code, { children: "L1" }), " are correctly aligned \u27A1\uFE0F", e.jsx(n.br, {}), `
`, "you can continue connecting the remaining Pieces one by one \u2795"] }), `
`, e.jsxs(n.p, { children: ["\u{1F4CC} Just follow the sketch:", e.jsx(n.br, {}), `
`, "Each new Piece is snapped to the previous one using their matching ", e.jsx(n.strong, { children: "Connectors" }), " \u2693", e.jsx(n.br, {}), `
`, "\u2014 and adjusted as needed to match the layout."] }), `
`, e.jsxs(n.p, { children: ["\u{1F300} If a connected Piece isn\u2019t facing the right way,", e.jsx(n.br, {}), `
`, "you can ", e.jsx(n.strong, { children: "rotate it individually" }), " \u2014 semio allows per-piece rotation without breaking the connection logic \u{1F504}"] }), `
`, e.jsxs(n.p, { children: ["\u{1F517} And thanks to Semio\u2019s ", e.jsx(n.strong, { children: "chain behavior" }), ",", e.jsx(n.br, {}), `
`, "when you move or rotate one Piece, all the connected Pieces after it will ", e.jsx(n.strong, { children: "update automatically" }), " \u{1F4AB}"] }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/set-connection-3pcs.gif", alt: "Set Connection" }) }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/set-connection-5pcs.gif", alt: "Set Connection" }) }), `
`, e.jsx(n.hr, {}), `
`, e.jsx(i, { type: "note", children: "\u{1F4CC} You can place Connectors exactly where the geometry should land \u2014 or adjust the Piece after snapping using Gap, Shift, Rise, or Rotate. emio supports both strategies \u2014 choose what fits your design logic best \u{1F9F1}\u2728" }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h2, { id: "\uFE0F-build-the-design-model-design---dsn", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-build-the-design-model-design---dsn", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F3D7}\uFE0F Build the Design (Model Design - Dsn)"] }), `
`, e.jsxs(n.p, { children: ["Now that you've created your ", e.jsx(n.strong, { children: "Pieces" }), " and defined their ", e.jsx(n.strong, { children: "Connections" }), ", it's time to bring them all together into a final ", e.jsx(n.strong, { children: "Design" }), " \u{1F9F0}"] }), `
`, e.jsxs(n.h3, { id: "-what-is-a-design", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-what-is-a-design", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9E9} What is a Design?"] }), `
`, e.jsxs(n.p, { children: ["A ", e.jsx(n.strong, { children: "Design" }), " in semio is your full model \u2014 created by snapping together specific ", e.jsx(n.strong, { children: "Pieces" }), " \u{1F9F1} using their ", e.jsx(n.strong, { children: "Connections" }), " \u{1F517}"] }), `
`, e.jsxs(n.p, { children: ["It doesn\u2019t just describe geometry \u{1F441}\uFE0F \u2014 it defines how each part fits, aligns, and works within the system \u{1F9E0}", e.jsx(n.br, {}), `
`, "You're building not just a shape, but a ", e.jsx(n.strong, { children: "smart, modular structure" }), " \u{1F9EC}"] }), `
`, e.jsxs(n.p, { children: ["\u{1F9F1} Think of it like a finished LEGO build:", e.jsx(n.br, {}), `
`, "You\u2019re not just stacking bricks \u2014 you\u2019re creating a model where every part has a ", e.jsx(n.strong, { children: "role" }), " \u{1F3AD}, a ", e.jsx(n.strong, { children: "position" }), " \u{1F4CD}, and a ", e.jsx(n.strong, { children: "purpose" }), " \u{1F3AF}"] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h3, { id: "\uFE0F-assembling-the-design", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-assembling-the-design", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F6E0}\uFE0F Assembling the Design"] }), `
`, e.jsxs(n.p, { children: ["To build your Design in semio (e.g. in Grasshopper), you\u2019ll use the ", e.jsx(n.code, { children: "Model Design" }), " component.", e.jsx(n.br, {}), `
`, "This is where you ", e.jsx(n.strong, { children: "bring together all the Pieces and Connections" }), " to form your complete model \u{1F9E9}"] }), `
`, e.jsx(n.p, { children: "You\u2019ll provide three main inputs:" }), `
`, e.jsxs(n.ol, { children: [`
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "Design Name" }), " (", e.jsx(n.code, { children: "Dn" }), ") \u{1F3F7}\uFE0F", e.jsx(n.br, {}), `
`, "A unique name for your model \u2014 like ", e.jsx(n.code, { children: '"Logo Example"' }), " or ", e.jsx(n.code, { children: '"Spaceship"' }), "."] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "Pieces" }), " (", e.jsx(n.code, { children: "Pcs" }), ") \u{1F9F1}", e.jsx(n.br, {}), `
`, "A list of the Pieces you\u2019ve created \u2014 each one linked to a Type, Variant, and unique ID."] }), `
`] }), `
`, e.jsxs(n.li, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.strong, { children: "Connections" }), " (", e.jsx(n.code, { children: "Con" }), ") \u{1F517}", e.jsx(n.br, {}), `
`, "A list of the snapping rules \u2014 telling semio how the Pieces are connected through their Connectors."] }), `
`] }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsx(n.p, { children: e.jsx(n.strong, { children: "Example:" }) }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/model-design.png", alt: "Model Design Example" }) }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h2, { id: "\uFE0F-workflow-mechanics", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-workflow-mechanics", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u2699\uFE0F Workflow Mechanics"] }), `
`, e.jsxs(n.p, { children: ["Now that we've covered the core concepts of Semio, let's take a closer look at how the components actually work \u2014", e.jsx(n.br, {}), `
`, "and explore the key features of the semio workflow inside Grasshopper"] }), `
`, e.jsxs(n.h3, { id: "\uFE0F-grasshopper-workflow", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-grasshopper-workflow", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F6E0}\uFE0F Grasshopper Workflow"] }), `
`, e.jsxs(n.p, { children: ["semio doesn\u2019t change ", e.jsx(n.strong, { children: "how" }), " Grasshopper works \u2014 it changes ", e.jsx(n.strong, { children: "what" }), " you\u2019re working with.", e.jsx(n.br, {}), `
`, "You\u2019re no longer just wiring geometry \u2014 you\u2019re wiring ", e.jsx(n.strong, { children: "design intent" }), " \u{1F4A1}"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: [e.jsx(n.strong, { children: "Types" }), " \u{1F9F1} \u2013 Brick molds with meaning, not just shapes"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.strong, { children: "Pieces" }), " \u{1F9E9} \u2013 Placed bricks that follow system logic"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.strong, { children: "Connections" }), " \u{1F517} \u2013 Rules that control how elements relate"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.strong, { children: "Designs" }), " \u{1F9F0} \u2013 Full assemblies of smart, connected pieces"] }), `
`] }), `
`, e.jsx(n.p, { children: "This shift lets you create not just geometry \u2014 but structured, adaptable systems \u{1F9E0}" }), `
`, e.jsx(n.hr, {}), `
`, e.jsx(n.p, { children: "semio components behave just like regular Grasshopper components \u{1F9E9}" }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: ["\u{1F4CB} You still work with ", e.jsx(n.strong, { children: "lists" }), " and ", e.jsx(n.strong, { children: "data trees" })] }), `
`, e.jsxs(n.li, { children: ["\u{1F522} Items are matched by ", e.jsx(n.strong, { children: "index" }), " or ", e.jsx(n.strong, { children: "branch" })] }), `
`] }), `
`, e.jsxs(n.p, { children: ["Want to set a ", e.jsx(n.strong, { children: "gap" }), " \u2B05\uFE0F\u27A1\uFE0F or a ", e.jsx(n.strong, { children: "rotation" }), " \u{1F501}?", e.jsx(n.br, {}), `
`, "Just provide a matching list of values \u2014 each one applies to the corresponding item in your list of ", e.jsx(n.strong, { children: "Connections" }), " or ", e.jsx(n.strong, { children: "Pieces" }), "."] }), `
`, e.jsx(n.hr, {}), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h3, { id: "-contruct-deconstruct-reconstruct", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-contruct-deconstruct-reconstruct", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F504} Contruct, Deconstruct, Reconstruct"] }), `
`, e.jsxs(n.p, { children: ["In Semio, ", e.jsx(n.strong, { children: "Model components" }), " like ", e.jsx(n.code, { children: "Model Type" }), ", ", e.jsx(n.code, { children: "Model Piece" }), ", ", e.jsx(n.code, { children: "Model Connection" }), ", and ", e.jsx(n.code, { children: "Model Design" }), " follow a shared logic:", e.jsx(n.br, {}), `
`, "they\u2019re not just builders \u2014 they\u2019re also ", e.jsx(n.strong, { children: "apps" }), " and ", e.jsx(n.strong, { children: "inspectors" }), "."] }), `
`, e.jsx(n.p, { children: "Each component supports three fundamental actions:" }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h5, { id: "1--construct", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#1--construct", children: e.jsx(n.span, { className: "icon icon-link" }) }), "1. \u{1F528} Construct"] }), `
`, e.jsxs(n.p, { children: ["Each Model component can ", e.jsx(n.strong, { children: "create" }), " a structured semio object from your inputs:"] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: [e.jsx(n.code, { children: "Model Type" }), " \u2192 outputs a ", e.jsx(n.code, { children: "Ty" }), " (Type)"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.code, { children: "Model Piece" }), " \u2192 outputs a ", e.jsx(n.code, { children: "Pc" }), " (Piece)"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.code, { children: "Model Connection" }), " \u2192 outputs a ", e.jsx(n.code, { children: "Cn" }), " (Connection)"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.code, { children: "Model Design" }), " \u2192 outputs a ", e.jsx(n.code, { children: "Ds" }), " (Design)"] }), `
`] }), `
`, e.jsx(n.p, { children: "These are Semio\u2019s core data types \u2014 they carry geometry, logic, metadata, and relationships." }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h5, { id: "2--deconstruct", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#2--deconstruct", children: e.jsx(n.span, { className: "icon icon-link" }) }), "2. \u{1F50D} Deconstruct"] }), `
`, e.jsxs(n.p, { children: ["You can also use the same component to ", e.jsx(n.strong, { children: "inspect" }), " or ", e.jsx(n.strong, { children: "extract" }), " the inner structure of a semio object, and all its inputs will populate with the current values, like unpacking a brick to see how it was made."] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h5, { id: "3--reconstruct--modify", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#3--reconstruct--modify", children: e.jsx(n.span, { className: "icon icon-link" }) }), "3. \u{1F501} Reconstruct / Modify"] }), `
`, e.jsxs(n.p, { children: ["In Semio, you can update any modeled object \u2014 like a Type, Piece, Connection, or Design \u2014", e.jsx(n.br, {}), `
`, "by feeding its output back into the ", e.jsx(n.strong, { children: "first input" }), " of the same Model component."] }), `
`, e.jsxs(n.ul, { children: [`
`, e.jsxs(n.li, { children: [e.jsx(n.code, { children: "Ty" }), " \u2192 Type \u{1F9F1}"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.code, { children: "Pc" }), " \u2192 Piece \u{1F9E9}"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.code, { children: "Cn" }), " \u2192 Connection \u{1F517}"] }), `
`, e.jsxs(n.li, { children: [e.jsx(n.code, { children: "Ds" }), " \u2192 Design \u{1F9F0}"] }), `
`] }), `
`, e.jsxs(n.p, { children: ["When you do this, you can redefine any part of the object (like its name, geometry, plane, or metadata).", e.jsx(n.br, {}), `
`, "Only the inputs you change will be updated \u2014 everything else stays exactly as it was"] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h3, { id: "-example-use-case", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-example-use-case", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9EA} Example Use Case"] }), `
`, e.jsx("br", {}), `
`, e.jsxs(n.h4, { id: "-modify-a-piece", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-modify-a-piece", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9E9} Modify a Piece"] }), `
`, e.jsxs(n.p, { children: ["You can modify ", e.jsx(n.strong, { children: "any aspect" }), " of a Piece \u2014 such as its ", e.jsx(n.strong, { children: "name" }), ", ", e.jsx(n.strong, { children: "placement" }), ", or other construction parameters by feeding its ", e.jsx(n.code, { children: "Pc" }), " output back into a new ", e.jsx(n.code, { children: "Model Piece" }), " component \u{1F9E9}"] }), `
`, e.jsx(n.p, { children: "semio will only override the inputs you change \u2014 everything else stays exactly the same \u{1F3AF}" }), `
`, e.jsxs(n.blockquote, { children: [`
`, e.jsxs(n.p, { children: [e.jsx(n.em, { children: 'E.g. In the "Hello Semio" logo example, rotating the first Piece flips all connected Pieces as well \u2014 because they\u2019re linked logically' }), e.jsx(n.br, {}), `
`, "_"] }), `
`] }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/reconruct-piece-2.png", alt: "Reconstruct Piece" }) }), `
`, e.jsx(n.p, { children: e.jsx(n.img, { src: "/assets/images/reconruct-piece.png", alt: "Reconstruct Piece" }) }), `
`, e.jsxs(n.h4, { id: "-adjust-a-connection", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-adjust-a-connection", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F517} Adjust a Connection"] }), `
`, e.jsxs(n.p, { children: ["You can adjust any ", e.jsx(n.strong, { children: "transformation or rotation parameters" }), " of a Connection by", e.jsx(n.br, {}), `
`, "plugging the ", e.jsx(n.code, { children: "Cn" }), " output back into a new ", e.jsx(n.code, { children: "Model Connection" }), " component \u{1F501}"] }), `
`, e.jsxs(n.p, { children: ["semio will only update the values you change \u2014 all other settings will remain as they were \u{1F512}", e.jsx(n.br, {}), `
`, "This makes it easy to fine-tune how two Pieces are connected without rebuilding the whole logic \u{1F527}"] }), `
`, e.jsxs(n.blockquote, { children: [`
`, e.jsx(n.p, { children: e.jsx(n.em, { children: "E.g. You can change the gap, shift, or rotation of an existing Connection, and all downstream geometry will update automatically." }) }), `
`] }), `
`, e.jsxs(n.p, { children: [e.jsx(n.img, { src: "/assets/images/reconstruct-connection.png", alt: "Reconstruct Con" }), `
`, e.jsx(n.img, { src: "/assets/images/reconstruct-connection-2.png", alt: "Reconstruct Con" }), `
`, e.jsx(n.img, { src: "/assets/images/reconstruct-connection-3.png", alt: "Reconstruct Con" })] }), `
`, e.jsxs(n.h4, { id: "-update-a-type", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-update-a-type", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9F1} Update a Type"] }), `
`, e.jsxs(n.p, { children: ["You can update a ", e.jsx(n.strong, { children: "Type" }), " by feeding its ", e.jsx(n.code, { children: "Ty" }), " output back into the same ", e.jsx(n.code, { children: "Model Type" }), " component \u{1F501}", e.jsx(n.br, {}), `
`, "This lets you modify its ", e.jsx(n.strong, { children: "Model" }), ", ", e.jsx(n.strong, { children: "Connectors" }), ", or ", e.jsx(n.strong, { children: "metadata" }), " \u2014 without changing anything else."] }), `
`, e.jsxs(n.blockquote, { children: [`
`, e.jsx(n.p, { children: e.jsx(n.em, { children: "E.g. Swapping a simplified geometry file for a detailed one, or updating tags like material or category." }) }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h4, { id: "-refactor-a-design", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-refactor-a-design", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F9F0} Refactor a Design"] }), `
`, e.jsxs(n.p, { children: ["To modify a full ", e.jsx(n.strong, { children: "Design" }), ", feed its ", e.jsx(n.code, { children: "Ds" }), " output into a new ", e.jsx(n.code, { children: "Model Design" }), " component \u{1F501}", e.jsx(n.br, {}), `
`, "You can update the ", e.jsx(n.strong, { children: "Design name" }), ", reorganize the structure, or tweak how certain Pieces are connected."] }), `
`, e.jsxs(n.blockquote, { children: [`
`, e.jsx(n.p, { children: e.jsx(n.em, { children: "E.g. Renaming a layout, replacing a few bricks, or adjusting a connection \u2014 without touching the rest." }) }), `
`] }), `
`, e.jsx(n.hr, {}), `
`, e.jsxs(n.h4, { id: "\uFE0F-what-happens-next", children: [e.jsx(n.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-what-happens-next", children: e.jsx(n.span, { className: "icon icon-link" }) }), "\u{1F5BC}\uFE0F What Happens Next?"] }), `
`, e.jsxs(n.p, { children: ["To ", e.jsx(n.strong, { children: "see" }), " your model, plug everything into the ", e.jsx(n.code, { children: "Preview Design" }), " component \u{1F440}", e.jsx(n.br, {}), `
`, "It displays all your Pieces in place \u2014 fully connected, correctly oriented, and ready to go \u{1F9F1}"] }), `
`, e.jsxs(i, { type: "note", children: [e.jsx(n.p, { children: "In Semio, nothing is visualized automatically" }), e.jsxs(n.p, { children: ["This logic stays abstract until you pass it to the ", e.jsx(n.code, { children: "Show Design" }), " component \u2014", e.jsx(n.br, {}), `
`, "only then is everything ", e.jsx(n.strong, { children: "combined and visualized" }), " as a complete model"] })] })] });
}
function x(s = {}) {
  const { wrapper: n } = { ...t(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(r, { ...s }) }) : r(s);
}
function o(s, n) {
  throw new Error("Expected component `" + s + "` to be defined: you likely forgot to import, pass, or provide it.");
}
export {
  x as default,
  a as frontmatter
};
