# Pablo Werlang Portfolio

Website pessoal para apresentar o perfil de desenvolvedor e o curriculo academico de Pablo Werlang, professor no IFSul Campus Charqueadas.

O projeto foi criado a partir de `project-template`. A pagina publica principal e o portfolio em `web/`, com Express, Mustache, Webpack, CSS modular e testes Playwright. O baseline completo do template (`api/` + MySQL) tambem fica sincronizado no repositorio para preservar a estrutura base e permitir evolucao futura para conteudo dinamico.

## Conteudo

- Destaque principal para o perfil dev.
- Projetos atuais: GladCode, AutoJudge, Owlracle, MOCITEC e TrocaAula.
- Secao academica para Programacao Web I.
- Links publicos para GitHub, Lattes, AutoJudge e Owlracle.

## Fontes consultadas

- Workspace local: READMEs e `package.json` dos projetos `gladcode3`, `autojudge`, `owlracle`, `mocitec`, `ifsul/trocaaula` e `ifsul/pw1`.
- GitHub publico: `https://github.com/werlang/`.
- Lattes oficial: `http://lattes.cnpq.br/6490709711099792`.

## Desenvolvimento

```bash
cd web
npm install
npm run build
npm run production
```

Por padrao o Express roda na porta `3000`. Para escolher outra porta:

```bash
PORT=4173 npm run production
```

## Docker local

```bash
cp .env.example .env
docker compose -f compose.dev.yaml up -d --build
```

Abra `http://localhost`.

Servicos disponiveis no stack de desenvolvimento:

- Web: `http://localhost`
- API readiness: `http://localhost:3000/ready`
- MySQL: `127.0.0.1:3306`

## Validacao

```bash
cd web
npm run build
npm test
```

O teste Playwright valida o render da home, a remocao das variaveis de template do DOM, os projetos principais e links publicos.

Para validar tambem a base sincronizada do template:

```bash
docker compose -f compose.dev.yaml up -d --build
docker exec pablo-werlang-api-1 sh -c "NODE_ENV=test npm run test:unit"
docker exec pablo-werlang-api-1 sh -c "NODE_ENV=test npm run test:integration"
docker exec pablo-werlang-web-1 npm run build
docker compose -f compose.dev.yaml -f compose.playwright.yaml up -d playwright
docker exec pablo-werlang-playwright-1 npx playwright test
```
