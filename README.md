# Lê Comigo · páginas pós-compra

Projeto estático, pronto para publicar na Vercel.

## Rotas

- `/upsell-1/` · Compreender o que Lê · 4,90 €
- `/upsell-2/` · Agora Eu Escrevo · 5,90 €
- `/downsell/` · Reconta Comigo · 3,90 €
- `/oferta-final/` · Termómetro da Leitura · 3,90 €

## Antes de publicar

Abra `config.js` e preencha:

- `upsell1.acceptUrl`
- `upsell2.acceptUrl`
- `downsell.acceptUrl`
- `finalOffer.acceptUrl`
- `thankYouUrl`

Os links de recusa entre páginas já estão configurados.

### Preço de ancoragem

Os campos `anchorPrice` ficam vazios de propósito. Coloque ali apenas um preço normal real do produto. Quando o campo está vazio, a linha "De ..." é escondida automaticamente.

## Fluxo

Front → Upsell 1

- aceitou U1 → Upsell 2 → Oferta Final → acesso
- recusou U1 → Downsell → Oferta Final → acesso

## Hotmart

Os botões estão prontos para receber as URLs de compra/OTO que você configurar na Hotmart. Este pacote não inventa URLs nem tokens de one-click.

## Publicação na Vercel

Faça upload desta pasta como projeto estático. Não há dependências, build step ou framework.

## Fonte

O visual usa Poppins via Google Fonts. Se quiser eliminar a dependência externa, substitua o `<link>` da fonte por sua versão self-hosted.
