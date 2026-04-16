import { u as d, j as e } from "./index-CPYBuwmV.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
const g = void 0;
function a(n) {
  const s = { a: "a", blockquote: "blockquote", br: "br", code: "code", em: "em", h2: "h2", h3: "h3", h4: "h4", h5: "h5", hr: "hr", img: "img", li: "li", ol: "ol", p: "p", span: "span", strong: "strong", ul: "ul", ...d(), ...n.components }, { Aside: o, Tabs: l, TabsContent: i, TabsList: c, TabsTrigger: r } = s;
  return o || t("Aside"), l || t("Tabs"), i || t("TabsContent"), c || t("TabsList"), r || t("TabsTrigger"), e.jsxs(e.Fragment, { children: [`
`, e.jsxs(s.p, { children: ["As mentioned earlier in ", e.jsx(s.strong, { children: e.jsx(s.a, { href: "/think-in-semio/", children: "Thinking in Semio" }) }), ",", e.jsx(s.br, {}), `
`, "A ", e.jsx(s.strong, { children: "Type" }), " is your brick mold \u{1F9F1} The Blueprint behind each Brick", e.jsx(s.br, {}), `
`, "It defines not just the shape, but also the design meaning and connection logic \u{1F527}"] }), `
`, e.jsx(s.hr, {}), `
`, e.jsxs(s.h5, { id: "-what-are-the-molds-in-this-example", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-what-are-the-molds-in-this-example", children: e.jsx(s.span, { className: "icon icon-link" }) }), '\u{1F9E9} What Are the "Molds" in This Example?'] }), `
`, e.jsxs(s.p, { children: ["Take a look at your sketch \u{1F440}", e.jsx(s.br, {}), `
`, "You'll see five elements that follow the ", e.jsx(s.strong, { children: "same basic shape" }), ", just stretched to different lengths \u{1F4CF}"] }), `
`, e.jsxs(s.p, { children: ["Even though the final Design includes five Pieces, they're made from only ", e.jsx(s.strong, { children: "three distinct shapes" }), e.jsx(s.br, {}), `
`, "with two of them used twice \u2014 giving us ", e.jsx(s.strong, { children: "three Variants of one Type" }), " \u{1F522}"] }), `
`, e.jsxs(s.p, { children: ["\u{1F9F1} Think of it like a LEGO brick that comes in 2-stud, 4-stud, and 5-stud versions \u2014", e.jsx(s.br, {}), `
`, "same shape logic, just scaled \u{1F4D0}"] }), `
`, e.jsxs(s.p, { children: ["If the shape were completely different \u2014 like a triangle, window, or roof \u26F0\uFE0F\u{1FA9F}\u{1F3E0}", e.jsx(s.br, {}), `
`, "That would count as a ", e.jsx(s.strong, { children: "new Type" }), " altogether"] }), `
`, e.jsx(s.hr, {}), `
`, e.jsxs(s.h5, { id: "-modeling-with-meaning", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-modeling-with-meaning", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F9E0} Modeling with Meaning"] }), `
`, e.jsxs(s.p, { children: ["When you think of a mold, the first thing that comes to mind is usually its ", e.jsx(s.strong, { children: "shape" }), " \u2014 the geometry \u{1F9F1}\u270F\uFE0F", e.jsx(s.br, {}), `
`, "But in Semio, the ", e.jsx(s.strong, { children: "mold" }), " is what combines ", e.jsx(s.strong, { children: "shape" }), " with ", e.jsx(s.strong, { children: "meaningful design information" }), " \u{1F4A1}"] }), `
`, e.jsxs(s.p, { children: ["In traditional Grasshopper workflows, you\u2019re modeling with ", e.jsx(s.strong, { children: "raw data" }), " \u2014 points, curves, and surfaces without embedding ", e.jsx(s.strong, { children: "design intent" }), " \u{1F9EC}", e.jsx(s.br, {}), `
`, "You build logic around it, but that logic stays detached \u2014 abstract, custom, and often fragile."] }), `
`, e.jsxs(s.blockquote, { children: [`
`, e.jsxs(s.p, { children: ["In ", e.jsx(s.strong, { children: "Semio" }), ", the mold connects geometry with design intent directly \u{1F9E0}", e.jsx(s.br, {}), `
`, "You're not referencing arbitrary geometry \u2014 you're referencing ", e.jsx(s.strong, { children: "relationships" }), ", ", e.jsx(s.strong, { children: "roles" }), ", and ", e.jsx(s.strong, { children: "rules" }), " \u{1F9E9}"] }), `
`] }), `
`, e.jsxs(s.p, { children: ["For example:", e.jsx(s.br, {}), `
`, '\u{1F449} Instead of saying "connect point (x, y, z) to Brep edge 23"', e.jsx(s.br, {}), `
`, '\u{1F449} You say "connect the ', e.jsx(s.strong, { children: "door" }), " to the ", e.jsx(s.strong, { children: "living room" }), '" \u{1F6CB}\uFE0F\u{1F6AA}', e.jsx(s.br, {}), `
`, '\u{1F449} Or in LEGO terms: "\u{1FA9F} ', e.jsx(s.strong, { children: "snap the window brick onto the top of the wall" }), '" \u{1F9F1}'] }), `
`, e.jsxs(s.p, { children: ["This is what gives semio its strength \u2014 you\u2019re not just building shapes,", e.jsx(s.br, {}), `
`, "you\u2019re building a ", e.jsx(s.strong, { children: "semantic system" }), " that adapts, scales, and speaks your design language \u{1F3AF}\u{1F5E3}\uFE0F"] }), `
`, e.jsx(s.hr, {}), `
`, e.jsxs(s.h2, { id: "-create-a-brick-mold-type--ty", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-create-a-brick-mold-type--ty", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F9F0} Create a Brick Mold (", e.jsx(s.a, { href: "/think-in-semio/#type", children: "Type" }), " \u2013 Ty)"] }), `
`, e.jsxs(s.p, { children: ["Let\u2019s begin by modeling the mold shown in the sketch", e.jsx(s.br, {}), `
`, "This will serve as the base for generating its ", e.jsx(s.strong, { children: "Variants" }), " \u{1F9E9}"] }), `
`, e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/sketch-drawing-mold.png", alt: "\u{1F4E4} sketch drawing" }) }), `
`, e.jsxs(s.p, { children: ["Before we start building, let\u2019s go over the essential elements that define a ", e.jsx(s.strong, { children: "Type" }), " \u{1F9F1}:"] }), `
`, e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F3F7}\uFE0F ", e.jsx(s.strong, { children: "Name" }), " \u2192 A unique name to identify your Type and reuse it in different designs"] }), `
`, e.jsxs(s.li, { children: ["\u{1F9F1} ", e.jsx(s.strong, { children: "Geometry (Model)" }), " \u2192 The 3D shape attached to the Type \u2014 it gives the piece its visual form \u2728"] }), `
`, e.jsxs(s.li, { children: ["\u{1F9F2} ", e.jsx(s.strong, { children: "Connection Points (Connectors)" }), " \u2192 The snap points where the piece connects to others in the system \u{1F517}"] }), `
`] }), `
`, e.jsxs(s.p, { children: ["Now let's take a closer look at how these elements come together \u2014 and start modeling our first ", e.jsx(s.strong, { children: "brick mold" }), " \u{1F6E0}\uFE0F"] }), `
`, e.jsxs("ol", { children: [e.jsxs("li", { children: [e.jsxs(s.h3, { id: "\uFE0F-name-your-mold-type-name---na", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-name-your-mold-type-name---na", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F3F7}\uFE0F Name Your Mold (", e.jsx(s.a, { href: "/think-in-semio/#type", children: "Type" }), " Name - Na)"] }), e.jsxs(s.p, { children: ["Clear, consistent names in semio make everything easier down the line \u2705", e.jsx(s.br, {}), `
`, "Especially when your project grows and you're working with many ", e.jsx(s.strong, { children: "Types" }), ", ", e.jsx(s.strong, { children: "Variants" }), ", and ", e.jsx(s.strong, { children: "Pieces" }), " \u{1F504}"] }), e.jsx(s.p, { children: "Good names help you:" }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F9ED} ", e.jsx(s.strong, { children: "Navigate" }), " your system"] }), `
`, e.jsxs(s.li, { children: ["\u{1F50D} ", e.jsx(s.strong, { children: "Understand" }), " relationships"] }), `
`, e.jsxs(s.li, { children: ["\u{1F517} ", e.jsx(s.strong, { children: "Make connections" }), " that are easy to track"] }), `
`] }), e.jsx(o, { type: "note", children: "Use names you'd use in a real project \u2014 specific, descriptive, and purposeful \u{1F4DD}" }), e.jsxs(s.p, { children: ["\u{1F449} In our example, we\u2019ll name our Type ", e.jsx(s.strong, { children: '"Profile"' }), e.jsx(s.br, {}), `
`, "because the shape we're modeling is based on a ", e.jsx(s.strong, { children: "standard manufactured wood profile" }), " \u{1FAB5}"] }), e.jsx(s.hr, {})] }), e.jsxs("li", { children: [e.jsxs(s.h3, { id: "-attach-geometry-model--rp", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-attach-geometry-model--rp", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F9CA} Attach Geometry (Model \u2013 Rp)"] }), e.jsxs(s.p, { children: ["In Semio, the process of adding geometry to a Type is called ", e.jsx(s.strong, { children: "modeling its Model" }), ` \u{1F6E0}\uFE0F
A `, e.jsx(s.strong, { children: "Model" }), " is anything that visually or symbolically ", e.jsx(s.strong, { children: "represents a Type" }), ` \u{1F9F1}
It helps you `, e.jsx(s.strong, { children: "see or recognize" }), " the Type \u2014 without defining its logic or behavior \u{1F9E0}"] }), e.jsxs(s.p, { children: ["In most cases, this will be a ", e.jsx(s.strong, { children: "3D geometry" }), `, like in our example
But it can also be:`] }), e.jsxs(s.ul, { children: [`
`, e.jsx(s.li, { children: "A 2D drawing or diagram \u270F\uFE0F" }), `
`, e.jsx(s.li, { children: "A symbolic icon or block \u{1F533}" }), `
`, e.jsx(s.li, { children: "A label, file, or reference \u{1F516}" }), `
`] }), e.jsx(s.p, { children: "\u{1F4A1} Because Models are separate from the logic of the system, they\u2019re fully flexible:" }), e.jsxs(s.ul, { children: [`
`, e.jsx(s.li, { children: "You can start modeling your system without one \u{1F6A7}" }), `
`, e.jsx(s.li, { children: "You can add or update it later \u{1F6E0}\uFE0F" }), `
`, e.jsx(s.li, { children: "You can switch between levels of detail depending on the design phase \u{1F50D}" }), `
`] }), e.jsxs(s.p, { children: ["In this example, we\u2019ll use a ", e.jsx(s.strong, { children: "simple 3D shape" }), " to represent our brick molds we need to create \u{1F9E9}"] }), e.jsx(s.hr, {}), e.jsxs(s.h5, { id: "-modeling-model", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-modeling-model", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F527} Modeling Model"] }), e.jsxs(s.p, { children: ["There are two simple steps to create a ", e.jsx(s.strong, { children: "Model" }), ":"] }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F6E0}\uFE0F ", e.jsx(s.strong, { children: "Build the Geometry" }), e.jsx(s.br, {}), `
`, "Model the physical form of your brick \u2014 the shape that will appear in your design"] }), `
`] }), `
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F4CE} ", e.jsx(s.strong, { children: "Link it to the Type" }), e.jsx(s.br, {}), `
`, "Connect the geometry to a specific Type, so semio knows how to display and use it in your design space"] }), `
`] }), `
`] }), e.jsxs(s.p, { children: ["Let\u2019s take a closer look at the ", e.jsx(s.strong, { children: "brick mold" }), " in our example \u{1F440}", e.jsx(s.br, {}), `
`, "It always follows the ", e.jsx(s.strong, { children: "same basic shape" }), " \u{1F9F1}", e.jsx(s.br, {}), `
`, "A ", e.jsx(s.strong, { children: "rectangle that\u2019s cut at an angle" }), " \u2702\uFE0F \u2014 just repeated in different lengths \u{1F4CF}"] }), e.jsxs(s.p, { children: ["As we saw in the sketch, its size is described using ", e.jsx(s.strong, { children: "two parameters" }), ":"] }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: [e.jsx(s.code, { children: "W" }), " \u2192 the width of one brick unit"] }), `
`, e.jsxs(s.li, { children: [e.jsx(s.code, { children: "n" }), " \u2192 the number of units in length"] }), `
`] }), e.jsx(s.hr, {}), e.jsxs(s.p, { children: ["In ", e.jsx(s.strong, { children: "Semio" }), ", you can attach geometry to a Type in different ways \u{1F504}", e.jsx(s.br, {}), `
`, "You can pick the method that best fits your ", e.jsx(s.strong, { children: "workflow or tool" }), "."] }), e.jsx(s.p, { children: "Let's take a look at how that works in practice \u{1F447}" }), e.jsxs(l, { defaultValue: "file", children: [e.jsxs(c, { children: [e.jsx(r, { value: "file", children: "File-Based Reference (\u{1F501} Recommended)" }), e.jsx(r, { value: "direct", children: "Direct Reference" })] }), e.jsxs(i, { value: "file", children: [e.jsxs(s.p, { children: ["In ", e.jsx(s.strong, { children: "Semio" }), ", Models are typically referenced through ", e.jsx(s.strong, { children: "external geometry files" }), " \u{1F5C2}\uFE0F", e.jsx(s.br, {}), `
`, "\u2014 even when those files are generated inside ", e.jsx(s.strong, { children: "Grasshopper" })] }), e.jsxs(s.p, { children: ["This approach keeps your workflow ", e.jsx(s.strong, { children: "clean" }), ", ", e.jsx(s.strong, { children: "modular" }), ", and ", e.jsx(s.strong, { children: "easy to update" }), " \u{1F9FC}", e.jsx(s.br, {}), `
`, "It also makes your design system more ", e.jsx(s.strong, { children: "reusable" }), " and ", e.jsx(s.strong, { children: "scalable" }), " \u{1F501}"] }), e.jsxs(s.p, { children: ["While the modeling process itself isn\u2019t the focus of this tutorial,", e.jsx(s.br, {}), `
`, "here\u2019s the key takeaway:", e.jsx(s.br, {}), `
`, "You\u2019ll need to follow ", e.jsx(s.strong, { children: "three simple steps" }), " to attach your geometry as a ", e.jsx(s.strong, { children: "Model" }), " \u{1F9F1}"] }), e.jsx(s.hr, {}), e.jsxs(s.h4, { id: "\uFE0F-geometry-modeling", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-geometry-modeling", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F6E0}\uFE0F Geometry Modeling"] }), e.jsxs(s.p, { children: ["Since our shape follows a clear logic \u{1F9E0}", e.jsx(s.br, {}), `
`, "we use a ", e.jsx(s.strong, { children: "parametric Grasshopper definition" }), " to generate the geometry of the brick mold \u{1F9F1}"] }), e.jsxs(s.p, { children: ["This is useful because it lets us generate ", e.jsx(s.strong, { children: "all the different Variants" }), " of this brick seen in the sketch", e.jsx(s.br, {}), `
`, "using a single logic controlled by the parameters ", e.jsx(s.code, { children: "n" }), " and ", e.jsx(s.code, { children: "W" }), e.jsx(s.br, {}), `
`, "which define the brick\u2019s length and width \u{1F4CF}"] }), e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/attach-geometry-crop.gif", alt: "\u{1F4C1} Geometry Generation" }) }), e.jsx(s.hr, {}), e.jsxs(s.h4, { id: "-geometry-export", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-geometry-export", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F4BE} Geometry Export"] }), e.jsxs(s.p, { children: ["After generating the geometry,", e.jsx(s.br, {}), `
`, "we need to ", e.jsxs(s.strong, { children: ["export it as a ", e.jsx(s.code, { children: ".glb" }), " file"] }), " so it can be attached as a ", e.jsx(s.strong, { children: "Model" }), " \u{1F4BE}"] }), e.jsxs(s.p, { children: ["We\u2019ll use a ", e.jsx(s.strong, { children: "simple workflow" }), " that automates this export \u{1F9BE}", e.jsx(s.br, {}), `
`, "You can place it ", e.jsx(s.strong, { children: "directly after" }), " your geometry generation step in Grasshopper \u{1F997}"] }), e.jsx(s.hr, {}), e.jsx(s.p, { children: "\u{1F501} The Export Workflow Looks Like This:" }), e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/export-geometry.png", alt: "\u{1F4E4} Export Geometry" }) }), e.jsx(s.hr, {}), e.jsxs(s.h5, { id: "\uFE0F-set-the-export-location", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-set-the-export-location", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F5C2}\uFE0F Set the Export Location"] }), e.jsxs(s.p, { children: ["Use the ", e.jsx(s.code, { children: "Dir" }), " and ", e.jsx(s.code, { children: "Path" }), " components to define the directory path", e.jsx(s.br, {}), `
`, "This determines where the exported file will be saved"] }), e.jsxs(s.h5, { id: "-build-the-file-name", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-build-the-file-name", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F4DD} Build the File Name"] }), e.jsxs(s.p, { children: ["Use ", e.jsx(s.code, { children: "Concat" }), " to generate the file name dynamically", e.jsx(s.br, {}), `
`, "Combine the Type name and Variant (e.g. ", e.jsx(s.code, { children: "profile" }), " + ", e.jsx(s.code, { children: "2" }), ") \u2192 ", e.jsx(s.code, { children: "profile_2.glb" })] }), e.jsxs(s.h5, { id: "-assemble-the-full-file-path", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-assemble-the-full-file-path", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F9E9} Assemble the Full File Path"] }), e.jsxs(s.p, { children: ["Another ", e.jsx(s.code, { children: "Concat" }), " merges directory + file name:", e.jsx(s.br, {}), `
`, e.jsx(s.code, { children: "C:\\Users\\Users\\Downloads\\profile_2.glb" })] }), e.jsxs(s.h5, { id: "-prepare-the-geometry", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-prepare-the-geometry", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F4D0} Prepare the Geometry"] }), e.jsxs(s.blockquote, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F6E0}\uFE0F You've already modeled the geometry earlier in your Grasshopper definition.", e.jsx(s.br, {}), `
`, "Now it's time to ", e.jsx(s.strong, { children: "export" }), " it \u2014 so semio can use it as a ", e.jsx(s.strong, { children: "referenced Model" }), " \u{1F4BE}"] }), `
`] }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u2705 Convert the geometry into the required format (e.g. ", e.jsx(s.strong, { children: "Mesh" }), " for ", e.jsx(s.code, { children: ".glb" }), ")"] }), `
`, e.jsxs(s.li, { children: ["\u{1F4E4} Pass it into the ", e.jsx(s.code, { children: "iGeo" }), " component to export it as a ", e.jsx(s.code, { children: ".glb" }), " file"] }), `
`] }), e.jsx(s.p, { children: "Your file directory should now look like this:" }), e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/file-export-Profile-2-.png", alt: "\u{1F4E4} Exported file" }) }), e.jsx(s.hr, {}), e.jsxs(o, { type: "note", children: ["\u2699\uFE0F This method combines the ", e.jsx(s.strong, { children: "parametric power of Grasshopper" }), " with the ", e.jsx(s.strong, { children: "modular logic of Semio" }), " \u{1F4E4} Every time a parameter changes, the file can be ", e.jsx(s.strong, { children: "re-exported automatically" }), " \u2014 ready to be referenced in the next step"] }), e.jsx(s.hr, {}), e.jsxs(s.h4, { id: "-referencing-the-exported-file", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-referencing-the-exported-file", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F517} Referencing the Exported File"] }), e.jsxs(s.p, { children: ["The exported file (e.g. ", e.jsx(s.code, { children: "profile_2.glb" }), ") is linked to the ", e.jsxs(s.strong, { children: [e.jsx(s.code, { children: "Ur" }), " input"] }), " of the ", e.jsx(s.strong, { children: "Model Model" }), " component (", e.jsx(s.code, { children: "~Rep" }), ")", e.jsx(s.br, {}), `
`, "This tells semio ", e.jsx(s.strong, { children: "where to find the geometry" }), " that represents your Type."] }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F9E9} The ", e.jsxs(s.strong, { children: [e.jsx(s.code, { children: "~Rep" }), " (Model Model)"] }), " component takes the ", e.jsx(s.code, { children: "Ur" }), " file path and creates a Model:", e.jsx(s.br, {}), `
`, "\u2192 ", e.jsx(s.code, { children: "Rep(model/gltf-binary)" })] }), `
`] }), `
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F517} This Model is later connected to the ", e.jsxs(s.strong, { children: [e.jsx(s.code, { children: "Typ" }), " (Model Type)"] }), " component \u2014", e.jsx(s.br, {}), `
`, "so that your Type is linked to its visual form"] }), `
`] }), `
`] }), e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/reference-geometry.png", alt: "\u{1F4C1} Reference Geometry" }) }), e.jsx(s.hr, {}), e.jsxs(s.h3, { id: "-why-use-file-based-referencing", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-why-use-file-based-referencing", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F501} Why Use File-Based Referencing?"] }), e.jsxs(s.p, { children: ["Even inside Grasshopper, semio requires a ", e.jsx(s.strong, { children: "file-based snapshot" }), " of your geometry \u2014", e.jsx(s.br, {}), `
`, "a static file that captures what your brick mold looks like at a specific moment."] }), e.jsx(s.p, { children: "Here\u2019s why that matters:" }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u2699\uFE0F If your geometry is dynamic or parametric, it still needs to be ", e.jsx(s.strong, { children: "exported to a file" })] }), `
`, e.jsx(s.li, { children: "\u{1F517} semio connects to that file \u2014 not the live Grasshopper preview" }), `
`] }), e.jsxs(s.blockquote, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F4A1} This keeps geometry ", e.jsx(s.strong, { children: "modular" }), ", ", e.jsx(s.strong, { children: "connectorable" }), ", and easy to reuse", e.jsx(s.br, {}), `
`, "\u{1F9F1} It also supports ", e.jsx(s.strong, { children: "chunking" }), " \u2014 breaking down large designs into smaller, manageable parts", e.jsx(s.br, {}), `
`, "\u{1F310} And it allows smooth transition between ", e.jsx(s.strong, { children: "Grasshopper" }), " and ", e.jsx(s.strong, { children: "semio Sketchpad" })] }), `
`] })] }), e.jsxs(i, { value: "direct", children: [e.jsx(s.p, { children: `You don't always need to embed geometry directly into a Type \u{1F9F1}
In some cases, you can skip integration and reference the geometry directly in Grasshopper instead \u{1F39B}\uFE0F` }), e.jsx(s.p, { children: `Just pass the geometry \u2014 either as a Geometry \u{1F9CA} or Object \u{1F9E9} \u2014 straight into the Preview Design component \u{1F440}
This lets you visualize your Design using custom shapes without embedding them into the Type\u2019s definition \u{1F50D}` }), e.jsx(s.p, { children: `\u{1F449} We'll explore this option in a later step.
\u26A0\uFE0F Just note: this method is for visualization only \u2014 the geometry won't be part of the mold itself` })] })] }), e.jsx(s.hr, {}), e.jsxs(s.h4, { id: "-switching-the-model", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-switching-the-model", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F9EA} Switching the Model"] }), e.jsxs(s.p, { children: ["As introduced earlier, when you give a ", e.jsx(s.strong, { children: "Type" }), " its shape in Semio, you're attaching a ", e.jsx(s.strong, { children: "Model" }), " \u2014", e.jsx(s.br, {}), `
`, "a piece of geometry that shows what the brick looks like visually \u{1F441}\uFE0F"] }), e.jsxs(s.p, { children: ["But this geometry isn\u2019t fixed \u2014 it acts more like a ", e.jsx(s.strong, { children: "placeholder" }), " \u{1F9E0}", e.jsx(s.br, {}), `
`, "That means you can ", e.jsx(s.strong, { children: "change or swap" }), " the Model at any time ", e.jsx(s.strong, { children: "without breaking your design logic" }), " \u{1F501}"] }), e.jsxs(s.p, { children: ["You can think of it like a ", e.jsx(s.strong, { children: "costume" }), " for your Type \u{1F3AD}", e.jsx(s.br, {}), `
`, "The name, role, and connections stay the same \u2014 you're just changing how it looks on stage \u{1F3AC}"] }), e.jsxs(s.p, { children: ["This flexibility is especially useful when working across ", e.jsx(s.strong, { children: "different levels of detail" }), " in a project \u{1F9E9}"] }), e.jsxs(s.p, { children: ["Just like architects might use ", e.jsx(s.strong, { children: "blocky volumes" }), " for urban massing \u{1F3D9}\uFE0F", e.jsx(s.br, {}), `
`, "and ", e.jsx(s.strong, { children: "detailed profiles" }), " for close-ups or fabrication \u{1FA9F}", e.jsx(s.br, {}), `
`, "semio lets you swap the ", e.jsx(s.strong, { children: "look" }), " without changing the ", e.jsx(s.strong, { children: "logic" }), " \u{1F504}", e.jsx(s.br, {}), `
`, "Same brick \u2014 different shell \u{1F4A1}"] }), e.jsxs(s.h5, { id: "-one-brick-various-models", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-one-brick-various-models", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F3AC} One Brick, various Models"] }), e.jsxs(s.p, { children: ["To illustrate this concept, we created ", e.jsx(s.strong, { children: "two geometry files" }), " for the ", e.jsx(s.strong, { children: "same brick mold Type" }), ":"] }), e.jsx(s.hr, {}), e.jsxs(l, { defaultValue: "detailed", children: [e.jsxs(c, { children: [e.jsx(r, { value: "detailed", children: "\u{1F50D} Detailed Version" }), e.jsx(r, { value: "sheet", children: "\uFFFD Sheet Version" }), e.jsx(r, { value: "block", children: "\u{1F4E6} Block Version" })] }), e.jsxs(i, { value: "detailed", children: [e.jsxs(s.p, { children: ["This version uses the ", e.jsx(s.strong, { children: "fully detailed geometry" }), " of the piece \u{1FAB5}", e.jsx(s.br, {}), `
`, "A rectangle cut at an angle and extruded into a realistic wooden profile \u270F\uFE0F", e.jsx(s.br, {}), `
`, "It includes every visible detail in 3D: full depth, edges, and joinery-ready shapes \u{1F50D}"] }), e.jsxs(s.p, { children: [e.jsx(s.img, { src: "/assets/images/Switch-Model.png", alt: "\u{1F4C1} Switch Model" }), e.jsx(s.br, {}), `
`, e.jsx(s.img, { src: "/assets/images/Profile-2-detailed.png", alt: "\u{1F4C1} Filename" })] }), e.jsx(s.p, { children: "Best for:" }), e.jsxs(s.ul, { children: [`
`, e.jsx(s.li, { children: "\u{1FA9A} Joinery and production planning" }), `
`, e.jsx(s.li, { children: "\u{1F4D0} Material-specific outputs" }), `
`, e.jsx(s.li, { children: "\u{1F5BC}\uFE0F Detailed documentation and renders" }), `
`] })] }), e.jsxs(i, { value: "sheet", children: [e.jsxs(s.p, { children: ["This version is a ", e.jsx(s.strong, { children: "flat sheet simplification" }), " \u{1F4C4}", e.jsx(s.br, {}), `
`, "A single-surface geometry that represents the general size of the piece \u{1F4D0}", e.jsx(s.br, {}), `
`, "It captures only ", e.jsx(s.strong, { children: "one dimension" }), " and skips all 3D detail \u{1F6AB}"] }), e.jsxs(s.p, { children: [e.jsx(s.img, { src: "/assets/images/switch-model-sheet.png", alt: "\u{1F4C1} Switch Model" }), e.jsx(s.br, {}), `
`, e.jsx(s.img, { src: "/assets/images/Profile-2-simplified.png", alt: "\u{1F4C1} Filename" })] }), e.jsx(s.p, { children: "Use this when:" }), e.jsxs(s.ul, { children: [`
`, e.jsx(s.li, { children: "\u{1F4D0} Only the 2D footprint is known" }), `
`, e.jsx(s.li, { children: "\u270F\uFE0F The full shape is not finalized yet" }), `
`, e.jsx(s.li, { children: "\u26A1 You need fast previews or early-stage coordination" }), `
`] })] }), e.jsxs(i, { value: "block", children: [e.jsxs(s.p, { children: ["This version is a ", e.jsx(s.strong, { children: "bounding box simplification" }), " \u{1F4E6}", e.jsx(s.br, {}), `
`, "A simple block that approximates the piece's volume \u2795", e.jsx(s.br, {}), `
`, "It includes ", e.jsx(s.strong, { children: "two dimensions" }), " but omits exact geometry \u{1F9CA}"] }), e.jsxs(s.p, { children: [e.jsx(s.img, { src: "/assets/images/switch-model-Block.png", alt: "\u{1F4C1} Switch Model" }), e.jsx(s.br, {}), `
`, e.jsx(s.img, { src: "/assets/images/Profile-2-simplified.png", alt: "\u{1F4C1} Filename" })] }), e.jsx(s.p, { children: "Best for:" }), e.jsxs(s.ul, { children: [`
`, e.jsx(s.li, { children: "\u{1F9EA} Early-stage layouts and feasibility checks" }), `
`, e.jsx(s.li, { children: "\u2699\uFE0F Quick iterations and high-speed previews" }), `
`, e.jsx(s.li, { children: "\u{1F9CA} Placeholder geometry before final detailing" }), `
`] })] })] }), e.jsx(s.hr, {}), e.jsxs(s.p, { children: ["Even though these two Models ", e.jsx(s.strong, { children: "look very different" }), e.jsx(s.br, {}), `
`, "They both belong to the ", e.jsx(s.strong, { children: "same Type" }), " \u2705"] }), e.jsxs(s.p, { children: ["The ", e.jsx(s.strong, { children: "Name" }), ", ", e.jsx(s.strong, { children: "Variant" }), ", ", e.jsx(s.strong, { children: "Connectors" }), ", and ", e.jsx(s.strong, { children: "logic" }), " stay exactly the same", e.jsx(s.br, {}), `
`, "Only the appearance changes \u{1F3AD}"] }), e.jsxs(s.p, { children: ["This means you can ", e.jsx(s.strong, { children: "design and assemble" }), " everything using lightweight placeholders \u{1F9E9}", e.jsx(s.br, {}), `
`, "Then ", e.jsx(s.strong, { children: "swap in the detailed version" }), " when you're ready for presentation, communication, or fabrication \u{1F9F0}"] }), e.jsxs(s.p, { children: ["This separation of ", e.jsx(s.strong, { children: "logic and form" }), " is what makes semio workflows flexible, scalable, and robust \u{1F504}", e.jsx(s.br, {}), `
`, "From early concept to detailed design to collaborative development \u{1F91D}"] })] }), e.jsxs("li", { children: [e.jsxs(s.h3, { id: "-add-snapping-points-connectors---po", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-add-snapping-points-connectors---po", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u2693 Add Snapping Points (", e.jsx(s.a, { href: "/think-in-semio/#connector", children: "Connectors" }), " - Po)"] }), e.jsxs(s.p, { children: ["Once your brick mold has a visual shape \u2014 its ", e.jsx(s.strong, { children: "Model" }), " \u2014", e.jsx(s.br, {}), `
`, "the next step is to define ", e.jsx(s.strong, { children: "how it connects to other bricks" })] }), e.jsxs(s.p, { children: ["That\u2019s what ", e.jsx(s.strong, { children: "Connectors" }), " are for \u{1F9F2}", e.jsx(s.br, {}), `
`, "They act as snap points that tell semio where and how a brick can attach to others"] }), e.jsx(s.hr, {}), e.jsxs(s.h5, { id: "-what-do-you-need-to-define-a-connector", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-what-do-you-need-to-define-a-connector", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F9E9} What Do You Need to Define a Connector?"] }), e.jsx(s.p, { children: "In the semio Grasshopper plugin, each Connector is defined with three main inputs:" }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F3F7}\uFE0F ", e.jsx(s.strong, { children: "Connector ID" }), " ( ", e.jsx(s.code, { children: "Id" }), " )", e.jsx(s.br, {}), `
`, "A unique name for the Connector \u2014 like a tag or label used to connect it later", e.jsx(s.br, {}), `
`, "Examples: ", e.jsx(s.code, { children: '"n"' }), ", ", e.jsx(s.code, { children: '"bottom"' }), ", ", e.jsx(s.code, { children: '"hingePoint"' })] }), `
`] }), `
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F4CD} ", e.jsx(s.strong, { children: "Point" }), " ( ", e.jsx(s.code, { children: "Pt" }), " )", e.jsx(s.br, {}), `
`, "The exact spot where the connection happens \u2014 like placing a stud on a LEGO brick \u{1F9F1}", e.jsx(s.br, {}), `
`, "You place this carefully on your geometry, right where the snapping should occur"] }), `
`] }), `
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u27A1\uFE0F ", e.jsx(s.strong, { children: "Vector" }), " ( ", e.jsx(s.code, { children: "Dr" }), " )", e.jsx(s.br, {}), `
`, "The direction the Connector faces \u2014 telling semio which way the brick will connect \u{1F501}", e.jsx(s.br, {}), `
`, "It\u2019s what lets semio rotate and align the bricks correctly when snapping them together"] }), `
`] }), `
`] }), e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/model-port-alpha.png", alt: "\u{1F4C1} Connectors" }) }), e.jsx(s.hr, {}), e.jsxs(s.h4, { id: "-connector-location-pt", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-connector-location-pt", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F4CD} Connector Location (", e.jsx(s.code, { children: "Pt" }), ")"] }), e.jsxs(s.p, { children: ["When modeling Connectors, it\u2019s not just about ", e.jsx(s.strong, { children: "where" }), " pieces touch \u2014", e.jsx(s.br, {}), `
`, "it\u2019s about building a ", e.jsx(s.strong, { children: "clear and reusable logic" }), " that works across all Variants \u{1F9E0}\u{1F501}"] }), e.jsx(s.hr, {}), e.jsx(s.p, { children: "Here\u2019s how to define your Connectors effectively:" }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F9F1} ", e.jsx(s.strong, { children: "Choose stable, meaningful locations" }), e.jsx(s.br, {}), `
`, "Choose positions that are geometrically logical \u2014 like the ", e.jsx(s.strong, { children: "center of a face" }), ", an ", e.jsx(s.strong, { children: "edge midpoint" }), ", or a ", e.jsx(s.strong, { children: "corner" }), " \u{1F9E9}", e.jsx(s.br, {}), `
`, "Avoid placing them randomly \u2014 symmetry and regular patterns help your logic stay clean \u267B\uFE0F"] }), `
`] }), `
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F4D0} ", e.jsx(s.strong, { children: "Keep positions consistent across Variants" }), e.jsx(s.br, {}), `
`, "Even if your bricks differ in size or shape, place Connectors in the ", e.jsx(s.strong, { children: "same relative location" }), " \u{1F504}", e.jsx(s.br, {}), `
`, "This way, your connection rules stay valid across all versions of a Type \u{1F9F0}"] }), `
`] }), `
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F3AF} ", e.jsx(s.strong, { children: "Don\u2019t worry about perfect alignment" }), e.jsx(s.br, {}), `
`, "Connectors don\u2019t need to be ", e.jsx(s.em, { children: "exactly" }), " placed.", e.jsx(s.br, {}), `
`, "semio lets you adjust each Piece\u2019s ", e.jsx(s.strong, { children: "position and rotation" }), " ", e.jsx(s.em, { children: "after" }), " snapping \u{1F6E0}\uFE0F", e.jsx(s.br, {}), `
`, "So prioritize clear logic over micrometer precision \u{1F60C}"] }), `
`] }), `
`] }), e.jsx(s.hr, {}), e.jsx(s.p, { children: "There\u2019s no strict policy for how many Connectors to add \u2014 it depends on how much flexibility your system requires:" }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F512} ", e.jsx(s.strong, { children: "Fewer Connectors" }), " \u2192 simpler, more controlled snapping"] }), `
`, e.jsxs(s.li, { children: ["\u{1F513} ", e.jsx(s.strong, { children: "More Connectors" }), " \u2192 more layout options and greater orientation flexibility"] }), `
`, e.jsxs(s.li, { children: ["\u{1F9E0} ", e.jsx(s.strong, { children: "Plan ahead" }), " \u2192 add Connectors you might need later, even if they\u2019re not used right away"] }), `
`] }), e.jsxs(s.p, { children: ["\u{1F449} ", e.jsx(s.em, { children: "In our example, we place four Connectors \u2014 one at the center of each edge of a four-sided profile" }), " \u{1F9F1}"] }), e.jsx(s.hr, {}), e.jsxs(s.h4, { id: "-connector-direction-dr", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-connector-direction-dr", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F4A1} Connector Direction (Dr)"] }), e.jsxs(s.p, { children: ["Every Connector needs a ", e.jsx(s.strong, { children: "direction" }), " \u2014 a vector that tells semio which way the connection should face \u{1F9ED}", e.jsx(s.br, {}), `
`, "This is how semio knows how to align and snap your Pieces together correctly \u{1F9F2}"] }), e.jsx(s.p, { children: "Here\u2019s how to define Connector directions clearly:" }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u{1F4CF} ", e.jsx(s.strong, { children: "Use clean, simple vectors" }), e.jsx(s.br, {}), `
`, "Stick to basic axes like ", e.jsx(s.strong, { children: "X, Y, or Z" }), " relative to the face the Connector sits on. It makes snapping easier and logic more readable \u{1F9E0}", e.jsx(s.br, {}), `
`, "Avoid random or diagonal directions unless needed"] }), `
`] }), `
`, e.jsxs(s.li, { children: [`
`, e.jsxs(s.p, { children: ["\u267B\uFE0F ", e.jsx(s.strong, { children: "Be consistent across Variants" }), e.jsx(s.br, {}), `
`, "Connectors don\u2019t need to be perfectly precise \u2014 but they ", e.jsx(s.strong, { children: "must stay consistent" }), e.jsx(s.br, {}), `
`, "This ensures all your bricks connect correctly no matter the shape or version \u{1F527}"] }), `
`] }), `
`] }), e.jsxs(s.p, { children: ["\u{1F449} ", e.jsx(s.em, { children: "In our example, each Connector faces straight out \u2014 perpendicular to the edge it\u2019s placed on" }), " \u{1F680}"] }), e.jsx(s.hr, {}), e.jsxs(s.h4, { id: "\uFE0F-connector-id-id", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-connector-id-id", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F3F7}\uFE0F Connector ID (Id)"] }), e.jsxs(s.p, { children: ["A ", e.jsx(s.strong, { children: "Connector ID" }), " is the name you give to each Connector \u{1F3F7}\uFE0F", e.jsx(s.br, {}), `
`, "This name is how semio knows ", e.jsx(s.strong, { children: "which Connector to connect" }), " when snapping Pieces together"] }), e.jsx(s.p, { children: "For example, you might say:" }), e.jsxs(s.blockquote, { children: [`
`, e.jsxs(s.p, { children: ['"Connect the ', e.jsx(s.code, { children: "top" }), " Connector of Piece A to the ", e.jsx(s.code, { children: "bottom" }), ' Connector of Piece B"'] }), `
`] }), e.jsxs(s.p, { children: ["You can use ", e.jsx(s.strong, { children: "any naming system" }), " \u2014 as long as it\u2019s clear and consistent:"] }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["Common examples: ", e.jsx(s.code, { children: "n" }), ", ", e.jsx(s.code, { children: "s" }), ", ", e.jsx(s.code, { children: "e" }), ", ", e.jsx(s.code, { children: "w" }), " \u2014 for north, south, east, and west \u{1F9ED}"] }), `
`, e.jsxs(s.li, { children: ["Custom names: ", e.jsx(s.code, { children: "top" }), ", ", e.jsx(s.code, { children: "bottom" }), ", ", e.jsx(s.code, { children: "hinge" }), ", ", e.jsx(s.code, { children: "plug" }), ", ", e.jsx(s.code, { children: "windowDock" }), ", etc. \u{1F9F2}"] }), `
`] }), e.jsxs(s.p, { children: ["\u{1F4A1} ", e.jsx(s.strong, { children: "Tip:" }), " Pick a naming system that\u2019s easy to understand and stick to it", e.jsx(s.br, {}), `
`, "It helps you stay organized and makes teamwork or AI assistance much easier \u{1F91D}"] }), e.jsx(s.hr, {}), e.jsxs(s.p, { children: ["Together with the ", e.jsx(s.strong, { children: "Pt" }), " (position) and ", e.jsx(s.strong, { children: "Dr" }), " (direction), the ", e.jsx(s.strong, { children: "Id" }), " completes each Connector definition:", e.jsx(s.br, {}), `
`, "Each row in the three lists defines one Connector \u2014 so all lists must be the ", e.jsx(s.strong, { children: "same length" }), " to stay in sync \u{1F9E9}"] }), e.jsx(s.hr, {}), e.jsx(s.p, { children: `Now you can see how the three inputs \u2014 Id, Pt, and Dr \u2014 work together to create Connectors.
Each Connector is defined by one entry from each list, so the lists must be the same length.
This ensures that every snapping point has a matching ID, position, and direction` })] }), e.jsxs("li", { children: [e.jsxs(s.h3, { id: "-assemble-the-mold-model-type", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-assemble-the-mold-model-type", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F9F1} Assemble the Mold (Model ", e.jsx(s.a, { href: "/think-in-semio/#type", children: "Type" }), ")"] }), e.jsxs(s.p, { children: ["Once you\u2019ve defined all parts of your brick mold", e.jsx(s.br, {}), `
`, "the ", e.jsx(s.strong, { children: "Name" }), ", ", e.jsx(s.strong, { children: "Variant" }), ", ", e.jsx(s.strong, { children: "Connectors" }), ", and ", e.jsx(s.strong, { children: "Model" }), e.jsx(s.br, {}), `
`, "you can assemble them using the ", e.jsx(s.code, { children: "Model Type" }), " component (", e.jsx(s.code, { children: "Typ" }), ") \u{1F9F0}"] }), e.jsx(s.p, { children: "Here's what you plug in:" }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F3F7}\uFE0F ", e.jsx(s.strong, { children: "Name" }), " \u2014 the shared identity of the mold (e.g. ", e.jsx(s.code, { children: '"Profile"' }), ")"] }), `
`, e.jsxs(s.li, { children: ["\u{1F522} ", e.jsx(s.strong, { children: "Variant" }), " \u2014 the specific version number (e.g. ", e.jsx(s.code, { children: '"2"' }), ")"] }), `
`, e.jsxs(s.li, { children: ["\u{1F9F2} ", e.jsx(s.strong, { children: "Connectors" }), " \u2014 the snapping points and directions (e.g. ", e.jsx(s.code, { children: "n" }), ", ", e.jsx(s.code, { children: "s" }), ", ", e.jsx(s.code, { children: "e" }), ", ", e.jsx(s.code, { children: "w" }), ")"] }), `
`, e.jsxs(s.li, { children: ["\u{1F9CA} ", e.jsx(s.strong, { children: "Model" }), " \u2014 the geometry that defines the brick's shape"] }), `
`] }), e.jsxs(s.p, { children: [e.jsx(s.img, { src: "/assets/images/model-type.png", alt: "\u{1F4C1} Model Type" }), e.jsx(s.br, {}), `
`, e.jsx(s.img, { src: "/assets/images/model-type-geo.png", alt: "\u{1F4C1} Model Type" })] }), e.jsx(s.hr, {}), e.jsxs(s.p, { children: ["\u{1F3AF} The result is a complete ", e.jsx(s.strong, { children: "Type" }), e.jsx(s.br, {}), `
`, "A reusable brick mold that carries both shape and connection logic"] }), e.jsxs(s.p, { children: ["For example, ", e.jsx(s.code, { children: 'Typ("Profile", 2)' }), e.jsx(s.br, {}), `
`, "creates Variant ", e.jsx(s.code, { children: "2" }), " of the ", e.jsx(s.code, { children: '"Profile"' }), " mold", e.jsx(s.br, {}), `
`, "a 2-unit-long brick ready to be placed in your Design \u{1F9F1}"] }), e.jsx(s.hr, {})] })] }), `
`, e.jsxs(s.h2, { id: "-create-mold-versions-variants-of-type", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-create-mold-versions-variants-of-type", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F9EC} Create Mold Versions (Variants of ", e.jsx(s.a, { href: "/think-in-semio/#type", children: "Type" }), ")"] }), `
`, e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/sketch-drawing-variant.png", alt: "\u{1F4E4} sketch drawing" }) }), `
`, e.jsxs(s.p, { children: ["Now that you've created your base ", e.jsx(s.strong, { children: "Type" }), ", it's time to generate ", e.jsx(s.strong, { children: "Variants" }), " \u2014 based on the ", e.jsxs(s.strong, { children: ["unit count ", e.jsx(s.code, { children: "n" })] }), " shown in the sketch \u{1F522}"] }), `
`, e.jsxs(s.p, { children: ["Each Variant is built from the ", e.jsx(s.strong, { children: "same mold" }), ", just stretched or scaled to a different length \u{1F4CF}", e.jsx(s.br, {}), `
`, "Think of it like longer or shorter LEGO bricks of the same kind \u{1F9F1}", e.jsx(s.br, {}), `
`, "Since they follow the same logic and structure, we treat them as ", e.jsx(s.strong, { children: "Variants" }), " of one ", e.jsx(s.strong, { children: "Type" }), " \u2014 not separate Types \u267B\uFE0F"] }), `
`, e.jsx(s.p, { children: "Examples from our sketch:" }), `
`, e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: [e.jsx(s.code, { children: "Variant 2" }), " \u2192 2 units long \u{1F7E9}\u{1F7E9}"] }), `
`, e.jsxs(s.li, { children: [e.jsx(s.code, { children: "Variant 4" }), " \u2192 4 units long \u{1F7E9}\u{1F7E9}\u{1F7E9}\u{1F7E9}"] }), `
`, e.jsxs(s.li, { children: [e.jsx(s.code, { children: "Variant 5" }), " \u2192 5 units long \u{1F7E9}\u{1F7E9}\u{1F7E9}\u{1F7E9}\u{1F7E9}"] }), `
`] }), `
`, e.jsx(s.hr, {}), `
`, e.jsxs(s.h4, { id: "-modeling-a-variant", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-modeling-a-variant", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F501} Modeling a Variant"] }), `
`, e.jsx(s.hr, {}), `
`, e.jsxs(s.h5, { id: "-what-stays-the-same", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-what-stays-the-same", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u2705 What Stays the Same"] }), `
`, e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F3F7}\uFE0F ", e.jsx(s.strong, { children: "Type name" }), " \u2014 you\u2019re still using the same underlying mold"] }), `
`] }), `
`, e.jsxs(s.h5, { id: "-what-changes", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-what-changes", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F504} What Changes?"] }), `
`, e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F522} ", e.jsx(s.strong, { children: "Variant name" }), " \u2014 a unique label like ", e.jsx(s.code, { children: "2" }), ", ", e.jsx(s.code, { children: "4" }), ", or ", e.jsx(s.code, { children: "5" }), " to distinguish the version"] }), `
`, e.jsxs(s.li, { children: ["\u{1F9CA} ", e.jsx(s.strong, { children: "Model" }), " \u2014 new geometry that reflects the Variant\u2019s shape or size"] }), `
`, e.jsxs(s.li, { children: ["\u{1F9F2} ", e.jsx(s.strong, { children: "Connectors" }), " \u2014 same logic, but positioned relative to the new shape"] }), `
`] }), `
`, e.jsx(s.hr, {}), `
`, e.jsxs(s.h5, { id: "\uFE0F-modeling-steps", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#\uFE0F-modeling-steps", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F6E0}\uFE0F Modeling Steps"] }), `
`, e.jsxs(s.ol, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F3F7}\uFE0F Set the ", e.jsx(s.strong, { children: "Type name" }), " (same as the original mold)"] }), `
`, e.jsxs(s.li, { children: ["\u{1F522} Assign a new ", e.jsx(s.strong, { children: "Variant name" })] }), `
`, e.jsxs(s.li, { children: ["\u{1F9CA} Attach the ", e.jsx(s.strong, { children: "Model" }), " \u2014 the geometry for this Variant"] }), `
`, e.jsxs(s.li, { children: ["\u{1F9F2} Add the ", e.jsx(s.strong, { children: "Connectors" }), " \u2014 positioned consistently"] }), `
`, e.jsxs(s.li, { children: ["\u{1F9F1} Use the ", e.jsx(s.code, { children: "Model Type" }), " component to combine everything into a complete Variant"] }), `
`] }), `
`, e.jsx(s.hr, {}), `
`, e.jsx(o, { type: "note", children: "Keep Connector positions consistent across all Variants \u2014 it ensures easier snapping and logic reuse" }), `
`, e.jsx(s.p, { children: "\u2705 That\u2019s it \u2014 same mold, new shape, fully ready for modular design" }), `
`, e.jsx(s.hr, {}), `
`, e.jsxs(s.h5, { id: "-advanced-tip-use-clusters-to-generate-variants", children: [e.jsx(s.a, { "aria-hidden": "true", tabIndex: "-1", href: "#-advanced-tip-use-clusters-to-generate-variants", children: e.jsx(s.span, { className: "icon icon-link" }) }), "\u{1F4A1} Advanced Tip: Use Clusters to Generate Variants"] }), `
`, e.jsxs(s.p, { children: ["In Grasshopper, a great way to handle multiple Variants is with a ", e.jsx(s.strong, { children: "Cluster" })] }), `
`, e.jsx(s.p, { children: "Since most Variants share the same logic and differ by only one or two parameters, a Cluster helps you:" }), `
`, e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F501} Model the logic ", e.jsx(s.strong, { children: "once" })] }), `
`, e.jsxs(s.li, { children: ["\u26A1 Generate all Variants ", e.jsx(s.strong, { children: "efficiently" })] }), `
`, e.jsxs(s.li, { children: ["\u{1F9FC} Keep your script ", e.jsx(s.strong, { children: "clean and modular" })] }), `
`] }), `
`, e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/Type-1-to-5-crop.gif", alt: "\u{1F4C1} Variant GIF" }) }), `
`, e.jsxs(l, { defaultValue: "file", children: [e.jsxs(c, { children: [e.jsx(r, { value: "file", children: "\u{1F4C2} File-Based Geometry Reference" }), e.jsx(r, { value: "direct", children: "\u{1F9F1} Direct Geometry Reference" })] }), e.jsxs(i, { value: "file", children: [e.jsx(s.p, { children: e.jsx(s.strong, { children: "Inside the Cluster:" }) }), e.jsx(s.p, { children: "You define the full logic:" }), e.jsxs(s.ul, { children: [`
`, e.jsx(s.li, { children: "\u{1F9CA} Generate and export geometry" }), `
`, e.jsxs(s.li, { children: ["\u{1F4CE} Link the exported file via ", e.jsx(s.code, { children: "Model Model" })] }), `
`, e.jsxs(s.li, { children: ["\u{1F9F2} Place Connectors using ", e.jsx(s.code, { children: "Model Connector" })] }), `
`, e.jsxs(s.li, { children: ["\u{1F9F1} Create the Variant using ", e.jsx(s.code, { children: "Model Type" })] }), `
`] }), e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/cluster-type-inside-ALpha.png", alt: "\u{1F4C1} Cluster" }) }), e.jsx(s.p, { children: e.jsx(s.strong, { children: "Outside the Cluster:" }) }), e.jsx(s.p, { children: "You only feed in the changing inputs:" }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F4CF} ", e.jsx(s.code, { children: "n" }), " \u2192 the unit count (e.g. 2, 4, 5)"] }), `
`, e.jsxs(s.li, { children: ["\u{1F3F7}\uFE0F Variant name \u2192 often also ", e.jsx(s.code, { children: "n" })] }), `
`, e.jsx(s.li, { children: "\u{1F4C1} Directory of the GH file" }), `
`, e.jsx(s.li, { children: "\u{1F518} Export toggle" }), `
`] }), e.jsxs(s.p, { children: [e.jsx(s.img, { src: "/assets/images/type-cluster-file-reference-Alpha.png", alt: "\u{1F4C1} Cluster" }), e.jsx(s.br, {}), `
`, e.jsx(s.img, { src: "/assets/images/file-export.png", alt: "\u{1F4C1} Cluster" })] })] }), e.jsxs(i, { value: "direct", children: [e.jsx(s.p, { children: e.jsx(s.strong, { children: "Inside the Cluster:" }) }), e.jsx(s.p, { children: "You define the full modeling logic directly, without saving external files:" }), e.jsxs(s.ul, { children: [`
`, e.jsx(s.li, { children: "\u{1F9CA} Generate geometry" }), `
`, e.jsxs(s.li, { children: ["\u{1F9F2} Place Connectors using ", e.jsx(s.code, { children: "Model Connector" })] }), `
`, e.jsxs(s.li, { children: ["\u{1F9F1} Create the Variant using ", e.jsx(s.code, { children: "Model Type" })] }), `
`] }), e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/cluster-type-inside-direct.rfrc.png", alt: "\u{1F4C1} Cluster" }) }), e.jsx(s.p, { children: e.jsx(s.strong, { children: "Outside the Cluster:" }) }), e.jsx(s.p, { children: "Only the changing parameters are connected:" }), e.jsxs(s.ul, { children: [`
`, e.jsxs(s.li, { children: ["\u{1F4CF} ", e.jsx(s.code, { children: "n" }), " \u2192 the unit count (e.g. 2, 4, 5)"] }), `
`, e.jsxs(s.li, { children: ["\u{1F3F7}\uFE0F Variant name \u2192 often also ", e.jsx(s.code, { children: "n" })] }), `
`] }), e.jsx(s.p, { children: e.jsx(s.img, { src: "/assets/images/type-cluster-direct-reference-Alpha.png", alt: "\u{1F4C1} Cluster" }) })] })] }), `
`, e.jsx(s.hr, {}), `
`, e.jsxs(s.p, { children: ["\u2705 ", e.jsx(s.strong, { children: "Bonus:" }), " This workflow keeps your file organized, scalable, and easy to expand \u2014 perfect for growing your Kit later on \u{1F9E9}"] })] });
}
function m(n = {}) {
  const { wrapper: s } = { ...d(), ...n.components };
  return s ? e.jsx(s, { ...n, children: e.jsx(a, { ...n }) }) : a(n);
}
function t(n, s) {
  throw new Error("Expected component `" + n + "` to be defined: you likely forgot to import, pass, or provide it.");
}
export {
  m as default,
  g as frontmatter
};
