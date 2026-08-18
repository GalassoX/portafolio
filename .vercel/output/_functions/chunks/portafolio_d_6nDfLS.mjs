//#region src/assets/images/portafolio.png
var portafolio_default = new Proxy({
	"src": "/_astro/portafolio.BWqMLCjG.png",
	"width": 1536,
	"height": 650,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "E:/Proyectos/portafolio/src/assets/images/portafolio.png";
	return target[name];
} });
//#endregion
export { portafolio_default as default };
