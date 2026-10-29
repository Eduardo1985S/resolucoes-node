# Central de Informacoes da Escola

Resolucao da Atividade Pratica da Sprint 01 de Programacao Back-End.

## Como executar

1. Abra um terminal nesta pasta.
2. Instale as dependencias:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   ```

4. Abra `http://localhost:3000` no navegador.

O servidor executa na porta `3000`.

## Rotas

| Metodo | Rota | Resposta |
| --- | --- | --- |
| GET | `/` | Mensagem de boas-vindas em texto. |
| GET | `/status` | Estado do servidor em JSON. |
| GET | `/escola` | Dados ficticios da instituicao em JSON. |
| GET | `/cursos` | Lista de cursos em JSON. |
| GET | `/professor` | Dados ficticios do professor em JSON. |
| GET | `/ajuda` | Orientacoes das rotas em texto. |
| GET | `/requisicao` | Desafio extra: metodo, caminho e confirmacao em JSON. |

## Explicacao para a apresentacao

- `app.listen(PORT, ...)` inicia o servidor e faz com que ele aguarde requisicoes na porta indicada.
- `res` e o objeto de resposta do Express. `res.send()` envia texto e `res.json()` envia dados estruturados no formato JSON.
- Quando uma rota inexistente e acessada, o Express responde com `404 Not Found`, pois nao ha uma rota registrada para aquele caminho.
