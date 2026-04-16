import { j as c } from "./index-CPYBuwmV.js";
import { appRegistry as o, designConfig as f, docsConfig as a, feedbackConfig as l, homeConfig as d, kitConfig as u, qualityConfig as g, typeConfig as y, Sketchpad as h, __tla as __tla_0 } from "./index-DwjF_IIt.js";
import { InMemoryKitStore as _, __tla as __tla_1 } from "./index-B1_si-pl.js";
import { c as R } from "./client-CET3z3r2.js";
import "./index-gBZ811w6.js";
import "./_commonjsHelpers-CE1G-McA.js";
import "./index-Dyrx3GQH.js";
import "./preload-helper-PPVm8Dsz.js";
import "./globals-CJXHW4cF.js";
import { __tla as __tla_2 } from "./index-f_CjIyol.js";
import { __tla as __tla_3 } from "./index-BOTK57Qr.js";
import "./server.browser-CwBZcUlj.js";
import "./_commonjs-dynamic-modules-TDtrdbi3.js";
import "./three.core-CmKuqlS6.js";
import "./x-DzqR2N4o.js";
import { __tla as __tla_4 } from "./schemas-BHthlJat.js";
import "./wrench-B2gSME21.js";
Promise.all([
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
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })()
]).then(async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
    new MutationObserver((e) => {
      for (const t of e) if (t.type === "childList") for (const s of t.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function p(e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
    }
    function n(e) {
      if (e.ep) return;
      e.ep = true;
      const t = p(e);
      fetch(e.href, t);
    }
  })();
  o.register(f);
  o.register(a);
  o.register(l);
  o.register(d);
  o.register(u);
  o.register(g);
  o.register(y);
  const C = (i) => new _(i), O = (i) => {
    const r = i;
    return r.__semioReactRoot__ || (r.__semioReactRoot__ = R.createRoot(i)), r.__semioReactRoot__;
  }, m = document.getElementById("root");
  if (!m) throw new Error('Play root element "#root" was not found.');
  O(m).render(c.jsx("div", {
    className: "h-screen w-screen",
    children: c.jsx(h, {
      temporaryKitStoreFactory: C,
      importKitUrls: [
        "/metabolism.zip"
      ]
    })
  }));
});
