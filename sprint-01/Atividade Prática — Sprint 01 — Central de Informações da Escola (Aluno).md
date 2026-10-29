faz  # SPRINT 01 — Situação de Aprendizagem

## Central de Informações da Escola \| Programação Back-End 1

Situação de Aprendizagem • Atividade individual • Tempo sugerido: 45 a 60 minutos 

# 1\. SITUAÇÃO-PROBLEMA

Uma escola precisa disponibilizar informações sobre a instituição, seus cursos e professores. Você foi contratado para criar a primeira versão do Back-End da Central de Informações da Escola.  
O sistema ainda não terá interface HTML, formulários ou banco de dados. A consulta acontecerá diretamente pelo navegador, através de rotas HTTP.

# 2\. SUA MISSÃO

Utilizando Node.js, Express e ES Modules, desenvolva um servidor que responda a diferentes endereços. Você pode aproveitar o servidor criado na aula, mas deverá adaptar e ampliar suas funcionalidades.  
Objetivo: demonstrar que você compreende a estrutura do projeto, a execução do servidor, a criação de rotas e a diferença entre res.send() e res.json().

# 3\. REQUISITOS OBRIGATÓRIOS

01 — O servidor deve iniciar corretamente na porta 3000\.  
02 — O projeto deve possuir package.json configurado com "type": "module" e script npm start.  
03 — O Express deve ser importado utilizando ES Modules.  
04 — Implementar as seis rotas GET descritas a seguir.  
05 — Utilizar res.send() quando a resposta for textual e res.json() para dados estruturados.  
06 — Testar todas as rotas no navegador e verificar o conteúdo apresentado.

# 4\. ROTAS QUE DEVEM SER DESENVOLVIDAS

## GET / — Página inicial

Deve apresentar uma mensagem de boas-vindas à Central de Informações da Escola, utilizando res.send().

## GET /status — Estado do servidor

Deve retornar um JSON informando que o servidor está online.

## GET /escola — Informações da instituição

Deve devolver JSON contendo nome, cidade e tipo da instituição. Utilize informações fictícias.

## GET /cursos — Cursos disponíveis

Deve devolver um array JSON com pelo menos três cursos. Cada curso deve possuir id e nome. Os dados podem ser definidos diretamente no código nesta primeira atividade.

## GET /professor — Informações do professor

Deve devolver JSON com nome e disciplina. Utilize dados fictícios.

## GET /ajuda — Orientações

Deve devolver texto explicando quais rotas o sistema disponibiliza e para que servem.

# 5\. EXEMPLOS DE RESPOSTAS ESPERADAS

Os exemplos a seguir mostram apenas o formato das respostas. Eles NÃO são a solução completa do servidor.  
●  ●  ●    GET /escola — resposta JSON  —  VS Code / Dracula  
{  
  "nome": "Escola Técnica",  
  "cidade": "São Paulo",  
  "tipo": "Ensino Técnico"  
}  
●  ●  ●    GET /cursos — resposta JSON  —  VS Code / Dracula  
\[  
  { "id": 1, "nome": "Desenvolvimento de Sistemas" },  
  { "id": 2, "nome": "Redes de Computadores" },  
  { "id": 3, "nome": "Administração" }  
\]

# 6\. COMO REALIZAR A ATIVIDADE

1\. Abra a pasta do seu projeto no VS Code.  
2\. Verifique se o package.json está configurado corretamente e se o Express está instalado.  
3\. Desenvolva as rotas solicitadas no arquivo server.js.  
4\. Salve os arquivos e execute o servidor com npm start.  
5\. Abra http\://localhost:3000 no navegador e teste cada caminho solicitado.  
6\. Corrija eventuais problemas e apresente as rotas funcionando.  
Dica: todas as rotas precisam ser registradas na aplicação. Se você criar ou alterar código enquanto o servidor estiver rodando sem reinicialização automática, interrompa com Ctrl+C e inicie novamente.

# 7\. CHECKLIST DE ENTREGA

☐ O servidor iniciou na porta 3000\.  
☐ O package.json está configurado para ES Modules.  
☐ GET / apresenta uma mensagem.  
☐ GET /status retorna JSON.  
☐ GET /escola retorna os dados solicitados.  
☐ GET /cursos retorna um array com três cursos.  
☐ GET /professor retorna os dados solicitados.  
☐ GET /ajuda apresenta orientações em texto.  
☐ Todas as rotas foram testadas e estão funcionando.

# 8\. DESAFIO EXTRA — INVESTIGANDO req

Se terminar antes, crie GET /requisicao para retornar um JSON com o método HTTP utilizado, o caminho da requisição e uma mensagem confirmando que a solicitação foi recebida.  
Dica: investigue req.method e req.path. Não é necessário utilizar Promise, async/await, POST, banco de dados ou fetch.

# 9\. CRITÉRIOS DE AVALIAÇÃO — 10 PONTOS

• Servidor inicia corretamente — 2,0 pontos.  
• Implementação das seis rotas — 3,0 pontos.  
• Utilização adequada de res.send() e res.json() — 2,0 pontos.  
• Organização de objetos e array de cursos — 1,0 ponto.  
• Testes e explicação do funcionamento — 2,0 pontos.

# 10\. APRESENTAÇÃO DA SOLUÇÃO

Ao apresentar seu sistema, esteja preparado para demonstrar as rotas e explicar: (1) qual é a função de app.listen(); (2) para que serve res; (3) o que acontece quando uma rota não existe.

# 11\. ENTREGA NO CLASSROOM

Entregue seu projeto conforme as orientações do professor na atividade do Classroom. Caso envie a pasta compactada, inclua os arquivos-fonte e o package.json; não é necessário incluir node\_modules.  
Antes de enviar, confira se o projeto inicia com npm install (quando necessário) e npm start, e se todas as rotas respondem corretamente.  
Importante: desenvolva as funcionalidades com os conhecimentos trabalhados na Sprint 01\. A avaliação considera o funcionamento e a sua compreensão do código.  
