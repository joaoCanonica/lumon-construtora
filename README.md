# Lumon — Saphira Residence

Site completo, com o visual aprovado, logo, vídeo, imagens, fontes locais, transições, galeria, mapa e planta 3D esquemática.

## Rodar no computador

Requisitos: Node.js 22.13 ou superior e pnpm 11.

```bash
npm install -g pnpm@11.25.0
pnpm install
pnpm dev
```

Abra http://localhost:3000.

```bash
pnpm build
pnpm start
```

O pacote usa Next.js padrão para funcionar fora do ambiente de prévia. A apresentação e os componentes do site foram preservados. Não requer banco de dados, login ou variáveis de ambiente.

## Colocar no GitHub

1. Extraia este ZIP.
2. Crie um repositório no GitHub.
3. Envie o conteúdo desta pasta (incluindo app, public, package.json e pnpm-lock.yaml), não o ZIP.
4. Não envie node_modules nem .next.

## Publicar na Vercel

Importe o repositório e use o preset Next.js. A pasta raiz é aquela que contém package.json. Comando de instalação: pnpm install. Comando de build: pnpm build. Mantenha o diretório de saída padrão do Next.js. Use Node.js 22 ou superior.

## Arquivos principais

- app/page.tsx: textos, contatos, apresentação e interações.
- app/globals.css: estilos e regras responsivas.
- app/PlanExplorer.tsx: modelo esquemático interativo.
- app/layout.tsx: título, descrição e idioma.
- public/images: logo, imagens e vídeo.
- public/fonts: fontes locais.
- components/ui: componentes de interface utilizados pelo projeto.

## Revisão responsiva — 27/09/2026

Verificadas larguras de 320, 390 e 768 px no navegador, complementando a revisão desktop. Sem transbordamento horizontal da página nos tamanhos testados. Menu móvel, navegação, seleção de ambientes, planta original, vídeo e galeria verificados. Transições e mapa também conferidos na revisão anterior. Build de produção Next.js concluído com sucesso.

Esses testes não equivalem a testar fisicamente todos os modelos de celular ou todos os navegadores. O navegador de revisão não oferece WebGL; a alternativa SVG da planta foi exercitada. Em dispositivos com suporte, o site usa WebGL.

## Observações de conteúdo

A planta 3D é ilustrativa e sem escala, baseada no material fornecido. Não substitui projeto arquitetônico ou memorial descritivo. O WhatsApp preserva o link da bio fornecido: https://wa.me/554988194537. O mapa usa Rua Ari Waltrick da Silva, 277, Universitário, Lages/SC; o escritório é mostrado separadamente no rodapé.

Os materiais visuais pertencem aos respectivos titulares. O envio do pacote não transfere direitos sobre marcas ou imagens.
