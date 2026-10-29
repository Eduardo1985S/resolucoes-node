import express from "express";

// Cria a aplicacao Express que recebera as requisicoes HTTP.
const app = express();

// Define a porta em que o servidor sera executado; o padrao da atividade e 3000.
const PORT = Number(process.env.PORT) || 3000;

// Armazena os dados ficticios da instituicao.
const escola = {
  nome: "Escola Tecnica Futuro",
  cidade: "Sao Paulo",
  tipo: "Ensino Tecnico"
};

// Armazena a lista ficticia de cursos disponiveis.
const cursos = [
  { id: 1, nome: "Desenvolvimento de Sistemas" },
  { id: 2, nome: "Redes de Computadores" },
  { id: 3, nome: "Administracao" }
];

// Armazena os dados ficticios do professor.
const professor = {
  nome: "Mariana Souza",
  disciplina: "Programacao Back-End"
};

// Rota inicial: envia uma mensagem textual de boas-vindas.
app.get("/", (req, res) => {
  res.send("Bem-vindo a Central de Informacoes da Escola!");
});

// Rota de status: retorna um objeto JSON informando que o servidor esta online.
app.get("/status", (req, res) => {
  res.json({ status: "online" });
});

// Rota da escola: retorna os dados da instituicao em JSON.
app.get("/escola", (req, res) => {
  res.json(escola);
});

// Rota dos cursos: retorna o array de cursos em JSON.
app.get("/cursos", (req, res) => {
  res.json(cursos);
});

// Rota do professor: retorna seus dados em JSON.
app.get("/professor", (req, res) => {
  res.json(professor);
});

// Rota de ajuda: envia um texto com as rotas disponiveis.
app.get("/ajuda", (req, res) => {
  res.send(
    "Rotas disponiveis: / (boas-vindas), /status (estado do servidor), /escola (dados da instituicao), /cursos (cursos disponiveis), /professor (dados do professor) e /ajuda (orientacoes)."
  );
});

// Rota extra: mostra informacoes da requisicao recebida.
app.get("/requisicao", (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: "Solicitacao recebida com sucesso."
  });
});

// Inicia o servidor na porta configurada e confirma sua URL no terminal.
app.listen(PORT, () => {
  console.log(`Servidor em execucao em http://localhost:${PORT}`);
});
