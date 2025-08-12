// Pega todos os pôsteres da pasta /films
const posters = import.meta.glob("./films/*.jpg", { eager: true, import: "default" });

// Cria um objeto { "1.jpg": "/assets/films/1.jpg", ... }
const postersMap = {};
for (const path in posters) {
  const fileName = path.split("/").pop();
  postersMap[fileName] = posters[path];
}

export default postersMap;
