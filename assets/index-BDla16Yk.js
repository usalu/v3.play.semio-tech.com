import { u as i, j as e } from "./index-CPYBuwmV.js";
import { __tla as __tla_0 } from "./index-f_CjIyol.js";
import { bx as s, bw as r, __tla as __tla_1 } from "./index-BOTK57Qr.js";
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
let M, w;
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
  w = {
    title: "Welcome to Semio",
    description: "Design Information Modeling for Architecture",
    concepts: [
      "introduction",
      "overview",
      "getting-started"
    ]
  };
  function n(o) {
    const t = {
      a: "a",
      p: "p",
      ...i(),
      ...o.components
    };
    return e.jsxs(e.Fragment, {
      children: [
        `
`,
        `
`,
        e.jsxs(s, {
          children: [
            e.jsxs(r, {
              title: "\u270F\uFE0F Just want to toy around?",
              children: [
                "You can try out sketchpad free and without login ",
                e.jsx(t.a, {
                  href: "https://play.semio-tech.com",
                  children: "online"
                }),
                " \u{1F39B}\uFE0F"
              ]
            }),
            e.jsx(r, {
              title: "\u{1F4D6} More into research?",
              children: e.jsxs(t.p, {
                children: [
                  "Here is the ",
                  e.jsx(t.a, {
                    href: "https://eg-ice-25.semio-tech.com",
                    children: "presentation"
                  }),
                  " of our ",
                  e.jsx(t.a, {
                    href: "https://doi.org/10.17868/strath.00093288",
                    children: "latest paper"
                  }),
                  " on LLMs \u{1F916} Or ",
                  e.jsx(t.a, {
                    href: "https://eg-ice-23.semio-tech.com",
                    children: "another one"
                  }),
                  " about formalizing architecture \u{1F3DB}\uFE0F"
                ]
              })
            }),
            e.jsxs(r, {
              title: "\u{1F4DA} Are you a web-dev?",
              children: [
                "All shared UI elements for sketchpad can be found in our ",
                e.jsx(t.a, {
                  href: "https://js.semio-tech.com",
                  children: "elements Storybook"
                }),
                "."
              ]
            }),
            e.jsxs(r, {
              title: "\u{1F4BB} Ever wanted to combine Wasp, Monoceros, Ladybug and Rhino?",
              children: [
                "See how semio enables the ",
                e.jsx(t.a, {
                  href: "https://docs.semio.tech/integrations",
                  children: "integration"
                }),
                " of all of these platforms through a Grasshopper plugin \u{1F997}"
              ]
            })
          ]
        })
      ]
    });
  }
  M = function(o = {}) {
    const { wrapper: t } = {
      ...i(),
      ...o.components
    };
    return t ? e.jsx(t, {
      ...o,
      children: e.jsx(n, {
        ...o
      })
    }) : n(o);
  };
});
export {
  __tla,
  M as default,
  w as frontmatter
};
