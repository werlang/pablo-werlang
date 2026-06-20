# Pablo Werlang Portfolio

Website pessoal para apresentar o perfil de desenvolvedor e o curriculo academico de Pablo Werlang, professor no IFSul Campus Charqueadas.

O projeto foi criado a partir de `project-template`, mas agora roda como uma aplicacao web enxuta em `web/`: Express renderiza a pagina Mustache, Webpack compila os assets e Playwright faz o smoke test da home.

## Conteudo

- Destaque principal para o perfil dev.
- Projetos atuais: GladCode, AutoJudge, Owlracle, MOCITEC e TrocaAula.
- Cards de projetos em andamento com links públicos de repositório quando disponíveis e indicação explícita para repositórios privados.
- Seção acadêmica em formato visual, com marcos da trajetória docente no IFSul, áreas de atuação e participação em iniciativas como CharCode, GladCode, AutoJudge e MOCITEC.
- Links públicos para GitHub, Lattes, AutoJudge e Owlracle.

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

O stack local sobe somente o servico `web`.

## Validacao

```bash
cd web
npm run build
npm test
```

O teste Playwright valida o render da home, a remocao das variaveis de template do DOM, os projetos principais e links publicos.

Para validar via Docker:

```bash
docker compose -f compose.dev.yaml up -d --build
docker exec pablo-werlang-web-1 npm run build
docker compose -f compose.dev.yaml -f compose.playwright.yaml up -d playwright
docker exec pablo-werlang-playwright-1 npx playwright test
```
