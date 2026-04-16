import { u as r, j as n } from "./index-CPYBuwmV.js";
import { __tla as __tla_0 } from "./index-f_CjIyol.js";
import { a0 as s, __tla as __tla_1 } from "./index-BOTK57Qr.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
import "./three.core-CmKuqlS6.js";
import { __tla as __tla_2 } from "./index-B1_si-pl.js";
import "./preload-helper-PPVm8Dsz.js";
import { __tla as __tla_3 } from "./schemas-BHthlJat.js";
import "./server.browser-CwBZcUlj.js";
import "./_commonjs-dynamic-modules-TDtrdbi3.js";
import "./x-DzqR2N4o.js";
let M, y;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  y = {
    title: "Installation",
    description: "How to install semio",
    icon: "\u{1F948}"
  };
  function t(i) {
    const e = {
      a: "a",
      code: "code",
      h3: "h3",
      li: "li",
      ol: "ol",
      p: "p",
      span: "span",
      ul: "ul",
      ...r(),
      ...i.components
    };
    return n.jsxs(n.Fragment, {
      children: [
        `
`,
        `
`,
        `
`,
        `
`,
        `
`,
        `
`,
        n.jsx(s, {
          type: "note",
          title: "Are you a Mac user?",
          children: n.jsxs(e.p, {
            children: [
              "The code of semio is compatible with Windows, Mac and Linux but currently compiled for Windows only \u26A0\uFE0F ",
              n.jsx(e.a, {
                href: "https://discord.gg/m6nnf6pQRc",
                children: "Reach out to us on Discord"
              }),
              " if you want to help us extend it for Mac \u{1F450}"
            ]
          })
        }),
        `
`,
        n.jsx(e.p, {
          children: "semio has two user-interfaces:"
        }),
        `
`,
        n.jsxs(e.ul, {
          children: [
            `
`,
            n.jsx(e.li, {
              children: "Grasshopper \u{1F997}"
            }),
            `
`,
            n.jsx(e.li, {
              children: "sketchpad \u270F\uFE0F"
            }),
            `
`
          ]
        }),
        `
`,
        n.jsxs(e.h3, {
          id: "-grasshopper-rhino-8",
          children: [
            n.jsx(e.a, {
              "aria-hidden": "true",
              tabIndex: "-1",
              href: "#-grasshopper-rhino-8",
              children: n.jsx(e.span, {
                className: "icon icon-link"
              })
            }),
            "\u{1F997} Grasshopper (Rhino 8)"
          ]
        }),
        `
`,
        n.jsx(s, {
          type: "tip",
          title: "Are you interested in the latest version?",
          children: n.jsxs(e.p, {
            children: [
              "Then hit ",
              n.jsx(e.code, {
                children: "Include pre-releases"
              }),
              " and download ",
              n.jsx(e.code, {
                children: "5.3.0-beta"
              }),
              " \u2B07\uFE0F"
            ]
          })
        }),
        `
`,
        n.jsx(e.p, {
          children: "The Grasshopper plugin can be installed over the Rhino Package Manager \u{1F7E2}"
        }),
        `
`,
        `
`,
        n.jsxs(e.ol, {
          children: [
            `
`,
            n.jsx(e.li, {
              children: "Open Rhino Package Manger \u2328\uFE0F"
            }),
            `
`,
            n.jsx(e.li, {
              children: "Search for semio \u{1F50E}"
            }),
            `
`,
            n.jsx(e.li, {
              children: "Install the latest version \u2B07\uFE0F"
            }),
            `
`,
            n.jsx(e.li, {
              children: "Restart Rhino \u{1F504}"
            }),
            `
`
          ]
        }),
        `
`,
        n.jsx(e.p, {
          children: "That's it!"
        }),
        `
`,
        n.jsxs(e.h3, {
          id: "\uFE0F-sketchpad",
          children: [
            n.jsx(e.a, {
              "aria-hidden": "true",
              tabIndex: "-1",
              href: "#\uFE0F-sketchpad",
              children: n.jsx(e.span, {
                className: "icon icon-link"
              })
            }),
            "\u270F\uFE0F sketchpad"
          ]
        }),
        `
`,
        n.jsx(s, {
          type: "caution",
          title: "Still a prototype \u{1F9D1}\u200D\u{1F4BB}",
          children: n.jsx(e.p, {
            children: "It doesn't use the latest versions of the engine and Grasshopper \u26A0\uFE0F"
          })
        }),
        `
`,
        `
`,
        `
`
      ]
    });
  }
  M = function(i = {}) {
    const { wrapper: e } = {
      ...r(),
      ...i.components
    };
    return e ? n.jsx(e, {
      ...i,
      children: n.jsx(t, {
        ...i
      })
    }) : t(i);
  };
});
export {
  __tla,
  M as default,
  y as frontmatter
};
