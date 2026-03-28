const projetos = [
  { nome: "Página de Login", descricao: "Interface de login com HTML e CSS." },
  { nome: "Calculadora", descricao: "Aplicação básica feita em JavaScript." },
  { nome: "Sistema de Estoque", descricao: "Protótipo de controle de produtos." }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.innerHTML = `
    <h3>🚀 ${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <button onclick="alert('Projeto acadêmico')">Ver mais</button>
  `;

  lista.appendChild(div);
});
