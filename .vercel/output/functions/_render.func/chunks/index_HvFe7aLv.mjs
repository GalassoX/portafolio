import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { C as createAstro, g as createRenderInstruction, h as addAttribute, i as renderComponent, l as renderTemplate, m as renderHead, p as maybeRenderHead } from "./server_6-UYs28T.mjs";
import { t as createComponent } from "./compiler_DXT1tvBP.mjs";
import { r as $$Image } from "./_astro_assets_Xpe7R4bJ.mjs";
import "./page-ssr_DQznCb4m.mjs";
//#region node_modules/.pnpm/astro@7.2.2_@emnapi+core@1._dcfbc7c4decc676248880fed15f71f3d/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/main/index.astro
var $$Index$4 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-around w-screen"><div class="w-[650px]"><h2 class="text-2xl italic">Soy <span class="text-violet font-bold">Rafael Marrugo</span> y bienvenidx a mi portafolio web</h2><div class="mt-8"><p>Programador <span class="italic underline">FullStack</span> autodidacta con experiencia en programación desde el 2018 con un skillset muy amplio.</p></div></div><div class="flex gap-8 flex-col items-center"><div class="flex gap-2"><a href="https://github.com/GalassoX" target="_blank" rel="noopener noreferrer" class="border rounded-full border-violet hover:shadow-lg hover:shadow-zinc-950 p-2 w-16 hover:bg-violet hover:border-zinc-900 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg></a><a href="https://www.linkedin.com/in/rafael-marrugo/" target="_blank" rel="noopener noreferrer" class="border rounded-full border-violet hover:shadow-lg hover:shadow-zinc-950 p-[0.9rem] w-16 hover:bg-violet hover:border-zinc-900 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg></a><a href="https://twitter.com/x_galasso/" target="_blank" rel="noopener noreferrer" class="border rounded-full border-violet hover:shadow-lg hover:shadow-zinc-950 p-3 w-16 hover:bg-violet hover:border-zinc-900 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg></a><a href="mailto:rafaelmarrugo28@gmail.com" class="border rounded-full border-violet hover:shadow-lg hover:shadow-zinc-950 p-3 w-16 hover:bg-violet hover:border-zinc-900 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"></path><path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"></path></svg></a></div><div><a href="http://" class="rounded-md hover:shadow-lg hover:shadow-zinc-950 p-3 w-16 bg-violet transition-all duration-300">Ver hoja de vida / Curriculum</a></div></div></div>`;
}, "E:/Proyectos/portafolio/src/components/main/index.astro", void 0);
//#endregion
//#region src/components/curiosity/index.astro
createAstro("https://astro.build");
var $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index$3;
	const url = new URL("/curiosity", Astro.url);
	const randomCuriosity = await fetch(url).then((response) => response.json()).catch((error) => {
		console.error("Error fetching random curiosities:", error);
		return [];
	});
	return renderTemplate`${maybeRenderHead($$result)}<div class="mt-16 p-4 text-zinc-300 italic w-fit bg-zinc-800 rounded-md flex items-center gap-4"><i class="w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path></svg></i><div><p class="mb-2 flex items-center gap-2">Dato random:</p><p class="text-sm">${randomCuriosity.text}</p></div></div>`;
}, "E:/Proyectos/portafolio/src/components/curiosity/index.astro", void 0);
//#endregion
//#region \0rolldown_dynamic_import_helper.js
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
//#endregion
//#region src/components/projects/ProjectCard.astro
createAstro("https://astro.build");
var $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProjectCard;
	const { project } = Astro.props;
	const image = project.image ? _rolldown_dynamic_import_helper_default(/* #__PURE__ */ Object.assign({
		"../../assets/images/image-scaler-tools.png": () => import("./image-scaler-tools_DDMu7-bK.mjs"),
		"../../assets/images/portafolio.png": () => import("./portafolio_d_6nDfLS.mjs")
	}), `../../assets/images/${project.image}.png`, 5) : null;
	return renderTemplate`${maybeRenderHead($$result)}<div class="border rounded-md bg-neutral-900 border-zinc-700 hover:shadow-lg py-4 px-6 flex justify-between"><div class="flex flex-col"><div><h3 class="text-xl">${project.name}</h3><p class="text-sm">${project.description}</p></div><div class="my-2 w-[400px] h-[170px] relative">${image ? renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"alt": project.name,
		"class": "absolute bottom-0 rounded-md"
	})}` : renderTemplate`<div class="flex justify-center items-center h-full text-zinc-700"><i class="w-16"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"></path></svg></i><i class="w-28 absolute"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"></path></svg></i></div>`}</div></div><div class="space-y-2 flex flex-col items-end">${project.links.github ? renderTemplate`<a${addAttribute(project.links.github, "href")} target="_blank" rel="noopener noreferrer" class="w-min bg-violet py-1 px-2 rounded-md flex gap-2 items-center h-8"><i class="w-6"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg></i><p class="text-sm">Github</p></a>` : null}${project.links.deploy ? renderTemplate`<a${addAttribute(project.links.deploy, "href")} target="_blank" rel="noopener noreferrer" class="w-min bg-blue-600 p-1 px-2 rounded-md flex gap-2 items-center h-8"><p class="text-sm">Deploy</p><i class="w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path></svg></i></a>` : null}</div></div>`;
}, "E:/Proyectos/portafolio/src/components/projects/ProjectCard.astro", void 0);
//#endregion
//#region src/components/projects/index.astro
createAstro("https://astro.build");
var $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index$2;
	let errorFetchingProjects = false;
	const url = new URL("/projects.json", Astro.url);
	const projects = await fetch(url).then((response) => response.json()).catch((error) => {
		console.error("Error fetching projects:", error);
		errorFetchingProjects = true;
		return [];
	});
	return renderTemplate`${maybeRenderHead($$result)}<div class="w-screen"><h1 class="text-3xl text-center underline decoration-violet decoration-2 underline-offset-4 mt-6 mb-12">Proyectos</h1><div class="mx-12 space-y-4">${errorFetchingProjects ? renderTemplate`<p class="text-red-500 text-center text-lg col-span-2">(!) Error obteniendo los proyectos</p>` : projects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project })}`)}</div></div>`;
}, "E:/Proyectos/portafolio/src/components/projects/index.astro", void 0);
//#endregion
//#region src/components/footer/index.astro
var $$Index$1 = createComponent(($$result, $$props, $$slots) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="border-t border-zinc-700"><div class="py-4 flex justify-around items-center"><div><h4 class="text-xl">Rafael D. Marrugo Petro</h4><p class="text-xs text-zinc-400 text-center italic">${currentYear}</p></div><div class="text-sm text-zinc-400 space-y-4"><a href="http://github.com/GalassoX/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2"><i class="w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg></i>Github</a><a href="http://github.com/GalassoX/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2"><i class="w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg></i>LinkedIn</a><div class="w-fit h-fit relative flex justify-center"><p class="cursor-pointer" data-copy-mail>Click para copiar correo electronico</p><div class="min-w-fit h-fit absolute w-[20px] z-50 transition-all right-[19rem] -top-1 hidden" data-popover-mail><div class="rounded-l bg-zinc-600 p-1 shadow-[10px_30px_150px_rgba(46,38,92,0.25)] text-white">Copiado!</div><div class="w-0 h-0 border-t-[14px] border-t-transparent border-l-[15px] border-l-zinc-600 border-b-[14px] border-b-transparent"></div></div></div></div></div><a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener noreferrer" class="block text-center text-xs text-zinc-600">Gracias a Bootstrap Icons® por los iconos</a></footer>${renderScript($$result, "E:/Proyectos/portafolio/src/components/footer/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Proyectos/portafolio/src/components/footer/index.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>Rafael Marrugo - Portafolio</title>${renderHead($$result)}</head><body class="bg-zinc-900 text-zinc-50"><div class="flex items-center justify-center min-h-screen">${renderComponent($$result, "Main", $$Index$4, {})}</div><div class="flex justify-center mb-32">${renderComponent($$result, "Curiosity", $$Index$3, {})}</div><div class="flex justify-center">${renderComponent($$result, "Projects", $$Index$2, {})}</div><div class="mt-36">${renderComponent($$result, "Footer", $$Index$1, {})}</div></body></html>`;
}, "E:/Proyectos/portafolio/src/pages/index.astro", void 0);
var $$file = "E:/Proyectos/portafolio/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
