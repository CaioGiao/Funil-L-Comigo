# Lê Comigo · Funil pós-compra

Versão completa pronta para GitHub + Vercel.

## O que subir para o GitHub

Suba TODO o conteúdo desta pasta diretamente na raiz do repositório:

- index.html
- app.js
- config.js
- vercel.json
- README.md
- upsell-1/
- upsell-2/
- downsell/
- oferta-final/

Não crie uma pasta extra envolvendo tudo.

## URLs

Depois do deploy:

- /upsell-1/
- /upsell-2/
- /downsell/
- /oferta-final/

A raiz / redireciona para /upsell-1/.

## Fluxo

Front -> Upsell 1

Se aceitar:
Upsell 1 -> Upsell 2 -> Oferta Final -> Obrigado

Se recusar:
Upsell 1 -> Downsell -> Oferta Final -> Obrigado

## Preços

- Upsell 1 · Compreender o que Lê · 4,90 €
- Upsell 2 · Agora Eu Escrevo · 5,90 €
- Downsell · Reconta Comigo · 3,90 €
- Oferta Final · Termómetro da Leitura · 3,90 €

## Antes de colocar tráfego

Abra config.js e preencha:

- upsell1.acceptUrl
- upsell2.acceptUrl
- downsell.acceptUrl
- finalOffer.acceptUrl
- thankYouUrl

Os links de recusa entre as páginas já estão configurados.

## Importante

As páginas têm o CSS embutido no próprio HTML.
Isso reduz o risco de uma página abrir sem o visual por falta de styles.css.

Não há framework nem build.
A Vercel pode publicar como projeto estático.
