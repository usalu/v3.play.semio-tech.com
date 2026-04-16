import { u as e, j as t } from "./index-CPYBuwmV.js";
import { __tla as __tla_0 } from "./index-f_CjIyol.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
import { __tla as __tla_1 } from "./index-BOTK57Qr.js";
import "./preload-helper-PPVm8Dsz.js";
import "./server.browser-CwBZcUlj.js";
import "./_commonjs-dynamic-modules-TDtrdbi3.js";
import "./three.core-CmKuqlS6.js";
import "./x-DzqR2N4o.js";
import { __tla as __tla_2 } from "./index-B1_si-pl.js";
import { __tla as __tla_3 } from "./schemas-BHthlJat.js";
let M, b;
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
  b = {
    title: "Kit-of-Parts Architecture",
    description: "An introduction to kit-of-parts architecture and how semio relates to it",
    icon: "\u{1F3D8}\uFE0F"
  };
  function r(n) {
    const o = {
      a: "a",
      h2: "h2",
      span: "span",
      ...e(),
      ...n.components
    };
    return t.jsxs(t.Fragment, {
      children: [
        `
`,
        `
`,
        t.jsxs(o.h2, {
          id: "\uFE0F-its-more-than-prefab",
          children: [
            t.jsx(o.a, {
              "aria-hidden": "true",
              tabIndex: "-1",
              href: "#\uFE0F-its-more-than-prefab",
              children: t.jsx(o.span, {
                className: "icon icon-link"
              })
            }),
            "\u{1F504}\uFE0F It's more than prefab"
          ]
        })
      ]
    });
  }
  M = function(n = {}) {
    const { wrapper: o } = {
      ...e(),
      ...n.components
    };
    return o ? t.jsx(o, {
      ...n,
      children: t.jsx(r, {
        ...n
      })
    }) : r(n);
  };
});
export {
  __tla,
  M as default,
  b as frontmatter
};
