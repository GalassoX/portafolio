import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { C as createAstro } from "./server_6-UYs28T.mjs";
import { t as createComponent } from "./compiler_DXT1tvBP.mjs";
import "./page-ssr_DQznCb4m.mjs";
//#region src/pages/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Component = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	return Astro.redirect("/", 301);
}, "E:/Proyectos/portafolio/src/pages/[...slug].astro", void 0);
var $$file = "E:/Proyectos/portafolio/src/pages/[...slug].astro";
var $$url = "/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
