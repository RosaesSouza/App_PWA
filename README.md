# Geofin APP - Frontend (PWA)

Aplicação frontend em React + Vite com suporte a PWA (Progressive Web App).

## Pré-requisitos

- Node.js (versão LTS recomendada)
- npm (vem junto com o Node)

## Instalação

No diretório do projeto:

```bash
npm install
```

## Ambiente de desenvolvimento

Para rodar o projeto em modo desenvolvimento (com recarregamento automático):

```bash
npm run dev
```

Depois, acesse a URL indicada no terminal (normalmente `http://localhost:5173`).

## Build de produção

Para gerar os arquivos de build otimizados (incluindo o service worker do PWA):

```bash
npm run build
```

Os arquivos gerados ficarão na pasta `dist/`.

## Preview do build (simulando produção)

Após o build, você pode rodar um servidor de preview para testar o PWA em ambiente semelhante à produção:

```bash
npm run preview
```

Em seguida, acesse a URL mostrada no terminal.

## Comportamento PWA

O PWA é configurado via `vite-plugin-pwa` no arquivo `vite.config.js` e pelo arquivo de manifesto `public/manifest.json` (e/ou o gerado em `dist/manifest.webmanifest` no build).

Principais pontos:

- O service worker (`sw.js`) é registrado automaticamente (`registerType: "autoUpdate"`).
- Após acessar o app em modo HTTPS (ou localhost), o navegador pode:
  - Permitir uso offline do app (conteúdos em cache pelo service worker).
  - Exibir opção de "Instalar" / "Adicionar à tela inicial".
- Ícones, cores e screenshots usados na instalação estão configurados na seção `manifest` do `vite.config.js`.

## Scripts principais

- `npm run dev`  – Inicia o servidor de desenvolvimento.
- `npm run build` – Gera o build de produção (inclui assets do PWA).
- `npm run preview` – Sobe um servidor para testar o build gerado em `dist/`.

Ajuste ou adicione detalhes conforme o backend, Docker ou ambiente de deploy que você estiver usando.