import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
//#region src/data/random_curiosities.json
var random_curiosities_default = [
	"Personalmente me gusta más el backend.",
	"Me encantan los videojuegos, gracias a ellos aprendí y me metí en este mundo de la programación.",
	"Mi primer contacto con la programación fue intentando hacer un mod para minecraft en el 2012 más o menos pero el intel pentium y los 2 GB de RAM sufrian 🤣",
	"Estoy como freelancer... ojalá esto cambie pronto 😬",
	"Manejo varios lenguajes como Java, JavaScript, TypeScript, Terraform, Rust, Go y muy poco Python pero puedo aprender facil.",
	"Las tecnologias y frameworks en los que destaco son React, Angular, Next.js, Astro, Spring Boot y Node.js, eso no quita que no sepa más!",
	"Me gusta mucho Rust, pero estoy resentido con el por que me dañó un disco duro mecanico de 1TB 😭",
	"La base de datos que más me gusta usar es PostgreSQL pero tambien he usado MySQL, MongoDB, DynamoDB y SQL Server"
];
//#endregion
//#region src/pages/curiosity.ts
var curiosity_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = () => {
	const response = { text: random_curiosities_default[Math.floor(Math.random() * random_curiosities_default.length)] };
	return new Response(JSON.stringify(response), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/curiosity@_@ts
var page = () => curiosity_exports;
//#endregion
export { page };
