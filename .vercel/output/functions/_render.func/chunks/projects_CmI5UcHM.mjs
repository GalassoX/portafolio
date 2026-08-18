import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
//#region src/data/projects.json
var projects_default = [
	{
		"name": "Portafolio",
		"description": "Mi portafolio web",
		"links": {
			"github": "https://github.com/GalassoX/portafolio",
			"deploy": "https://rafaelm.vercel.app"
		},
		"image": "portafolio",
		"display": true
	},
	{
		"name": "Image Scaler Tools",
		"description": "Aplicación web para escalar imágenes de manera rápida y sencilla. (Inactiva por no tener el backend activo)",
		"links": {
			"github": "https://github.com/GalassoX/image-scaler-web",
			"deploy": "https://image-scaler-web.vercel.app/"
		},
		"image": "image-scaler-tools",
		"display": true
	},
	{
		"name": "API Master",
		"description": "Pronto...",
		"links": { "deploy": "https://as1.ftcdn.net/v2/jpg/00/99/82/88/1000_F_99828865_lW5dIHE9e4NCI8Lb5XaY4wL5CL32hiAI.jpg" },
		"display": false
	}
];
//#endregion
//#region src/pages/projects.json.ts
var projects_json_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = () => {
	const response = projects_default.filter((project) => project.display);
	return new Response(JSON.stringify(response), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/projects.json@_@ts
var page = () => projects_json_exports;
//#endregion
export { page };
