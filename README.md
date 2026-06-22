# Pablo Werlang Portfolio

Website pessoal para apresentar o perfil de desenvolvedor e o curriculo academico de Pablo Werlang, professor no IFSul Campus Charqueadas.

O projeto foi criado a partir de `project-template`, mas agora roda como uma aplicacao web enxuta em `web/`: Express renderiza a pagina Mustache, Webpack compila CSS/JS e o build tambem gera `web/public/index.html` para publicacao estatica.

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

Por padrao o Express escuta em `0.0.0.0:3000`. Para escolher outra porta:

```bash
PORT=4173 npm run production
```

Para desenvolvimento com reload do servidor e Webpack Dev Server:

```bash
cd web
npm run development
```

## Docker local

```bash
cp .env.example .env
docker compose -f compose.dev.yaml up -d --build
```

Abra `http://localhost`.

O stack local sobe somente o servico `web`, exposto em `127.0.0.1:80`.

## Build estatico e deploy

O comando de build gera os bundles e renderiza a home estatica em `web/public/index.html`:

```bash
cd web
npm run build
```

O deploy Cloudflare usa o projeto em `wrangler/`. O compose de deploy monta `web/public` como `/app/public` dentro do container, que e o diretorio configurado em `wrangler/wrangler.jsonc`.

```bash
docker compose -f compose.dev.yaml run --rm web npm run build
docker compose -f compose.deploy.yaml run --rm --service-ports wrangler
```

## Validacao

```bash
cd web
npm run build
npm test
```

Atualmente `npm test` executa o test runner nativo do Node (`node --test`). Nao ha suite automatizada em `web/tests/` neste checkout, entao alteracoes visuais devem ser validadas em navegador real nos tamanhos desktop e mobile.

Para validar via Docker:

```bash
docker compose -f compose.dev.yaml up -d --build
docker exec pablo-werlang-web-1 npm run build
```

Depois de alterar `web/src/js/` ou `web/src/css/`, confirme que os arquivos gerados em `web/public/` foram atualizados.
