# Layout — Landing Page Fernanda G. Menezes Ferreira

> Especificação técnica completa de todas as seções para `/desenvolver`. Construída sobre o design aprovado em `index.html` + `style.css` (Hero + Para quem é).

---

## Sumário das Seções

| # | Seção | Arquétipo | Constraints |
|---|-------|-----------|-------------|
| 0 | Header | Utility (sticky) | Glassmorphism on scroll, Hover Underline |
| 1 | Hero | **Editorial** | Mixed Type, Asymmetric Padding, Selective Color, Stagger Fade Up + Clip Reveal |
| 2 | Para quem é | **Bento Box** | Color Blocking, Hover Lift, Number Display |
| 3 | Problema (dor) | **Sticky Element + Scroll Storytelling** | Headline >150px, Counter Animation, Stagger reveal |
| 4 | Solução (serviços) | **Tabs Verticais (Estrutura Especial)** | Reveal on Demand, Sticky Tabs, Color Blocking |
| 5 | Diferenciais | **Asymmetric Grid (Rule of Thirds)** | Number Display, Mixed Weights, Selective Color |
| 6 | Como funciona | **Timeline Horizontal** | Draw SVG, Counter Animation, Scroll Triggered |
| 7 | Depoimentos | **Editorial / Type as Image** | Headline >150px (aspa decorativa), Layered, Hover Reveal |
| 8 | Sobre — Fernanda | **Documentary + Timeline Vertical** | Sticky Element, Draw SVG, Image Duotone |
| 9 | FAQ | **Editorial Two-Column** | Mixed Weights, Hover Reveal, Asymmetric Padding |
| 10 | CTA Final | **Type Hero** | Headline >150px, Selective Color, Noise Texture |
| 11 | Footer | **Modular Editorial** | Asymmetric Grid, Hover Underline |

---

## Linguagem Visual Global

### Paleta (hex exatos — já definida no design aprovado)

```
--ink:        #0E1B33   /* navy premium principal */
--ink-2:      #14233F   /* navy 2º nível */
--ink-3:      #1B2C4F   /* navy aberto (italic/sub) */
--bone:       #F2EEE6   /* base off-white quente */
--paper:      #F8F5EF   /* superfície clara */
--paper-2:    #FAF7F1   /* card superfície */
--gold:       #B89968   /* dourado terroso pontual */
--gold-soft:  #D7BE8B   /* dourado claro (italic dossiê) */
--graphite:   #4A4F5A   /* texto secundário */
--slate:      #6B7280   /* meta/labels */
--line:       #E2DCD0   /* bordas e divisores */
--line-dark:  rgba(255,255,255,.12)
```

### Tipografia

```
--font-display: "Plus Jakarta Sans", system-ui, sans-serif
--font-sans:    "Inter", system-ui, sans-serif
--font-mono:    "JetBrains Mono", ui-monospace, monospace
```

**Pesos canônicos:**
- Display headlines: 600 (regular) / 400 italic
- Body/sub: Inter 400, line-height 1.55
- Kicker/meta: Mono 400/500, uppercase, letter-spacing 0.18em

**Escala fluida (clamp):**
- Kicker: `clamp(11px, .82vw, 13px)`
- Body: `clamp(15px, 1.05vw, 17px)`
- Sub: `clamp(17px, 1.3vw, 21px)`
- H2 seção: `clamp(36px, 5vw, 72px)`
- H1 hero: `clamp(46px, 7.6vw, 124px)`
- Display giant: `clamp(110px, 14vw, 220px)`

### Espaçamento

```
--pad-x:     clamp(20px, 4vw, 64px)
--section-y: clamp(80px, 10vw, 160px)
--radius:    6px
--radius-lg: 18px
```

### Easing & timing

```
--ease-out: cubic-bezier(.2, .7, .2, 1)
--ease-cinematic: cubic-bezier(.16, 1, .3, 1)
```

- Stagger pós-load: 120ms incremento entre items
- Hover transition: 350-500ms
- Scroll-driven: `animation-timeline: view()` com `animation-range: entry 0% cover 28%`

---

## Seção 0 — Header (Utility)

### Conteúdo (já existente)
- Brand: ícone escudo SVG + "Fernanda G. Menezes Ferreira" + "Arquiteta · Eng. de Segurança do Trabalho · CAU A309488-0"
- Nav: Serviços · Sobre · FAQ · Solicitar proposta (CTA pílula navy)

### Layout
- `display: flex; justify-content: space-between; align-items: center;`
- Padding `24px var(--pad-x)`
- Z-index 10

### Comportamento on scroll
- A partir de scrollY > 80px: `position: sticky; top: 0;`
- Background passa de transparente → `rgba(242,238,230,.85)` com `backdrop-filter: blur(14px)`
- Border-bottom 1px `var(--line)` aparece com transição 300ms
- Brand role (linha técnica) some em mobile (já implementado)

### Tipografia
- `.brand__name`: Plus Jakarta Sans 600, 18px, letter-spacing -0.018em
- `.brand__role`: Mono 10.5px, uppercase, letter-spacing 0.08em, color `--slate`
- Nav links: Inter 14.5px, weight 400, color `--graphite`
- `.nav-cta`: Inter 500, 14.5px, padding 10px 18px, radius 999px, bg `--ink`, color `--bone`

### Interatividade
- Nav links: underline animado (scaleX 0→1 origem-right→origem-left), 350ms ease-out
- `.nav-cta:hover`: bg `--ink-3`, translateY(-1px)

### Responsividade
- < 820px: brand role oculto; nav links ocultos exceto CTA; menu mobile burger (a especificar em /desenvolver — usar drawer lateral)

---

## Seção 1 — Hero (Editorial / Split Assimétrico)

### Arquétipo e Constraints
- **Arquétipo:** Editorial (revista premium, hierarquia tipográfica dramática)
- **Constraints:** Mixed Type (display + sans + mono), Asymmetric Padding 1.55fr/1fr, Selective Color (gold pontual), Stagger Fade Up + Clip Reveal (dossiê)
- **Justificativa:** abre com autoridade técnica + estatuto editorial — afasta do "site SST genérico". Já implementado.

### Conteúdo (texto exato)
- Kicker: "Engenharia de Seg. do Trab. · MG · Desde 2011"
- Headline: "Toda a *Segurança do Trabalho* da sua empresa, em conformidade **e no prazo.**"
- Sub: "Consultoria técnica em SST: elaboração de PGR, LTCAT, OS, APR e demais documentos legais, gestão de SESMT e CIPA, treinamentos e eventos do eSocial — com responsável técnica que assina. Atendimento remoto em todo o Brasil e presencial em MG."
- CTA primário: "Solicitar proposta técnica" → ancora `#contato`
- CTA ghost: "Ver como funciona" → ancora `#como-funciona`
- Pilares: "15+ anos em SST industrial e mineração" / "Arquiteta + Eng. Seg. assinando os documentos" / "Atendimento remoto no Brasil + presencial em MG"
- Dossiê: eyebrow "Responsável Técnica", selo CAU SVG, "Fernanda G. / *Menezes Ferreira*", "Arquiteta e Urbanista · Engenheira de Segurança do Trabalho / **CAU A309488-0**", stat "15+", label "anos em SST industrial e mineração", lista de setores
- Régua: "N.R. 1 · N.R. 4 · N.R. 5 · N.R. 6 · N.R. 18 · LTCAT · PGR · APR · CIPA · eSocial"

### Layout
- Grid: `1.55fr 1fr`, gap `clamp(40px, 5vw, 90px)`, padding superior `clamp(40px, 6vw, 88px)`, inferior `clamp(60px, 7vw, 110px)`, mín-height `calc(100vh - 90px)`, align-items center
- Lado esquerdo max-width 940px
- Lado direito (dossiê): card `--ink` com radius `--radius-lg`, padding interno `clamp(28px, 3vw, 44px)`, sombra `0 30px 60px -28px rgba(14,27,51,.55)`
- Régua: grid-column 1/-1, border-top 1px `--line`, mt clamp 40-80px

### Tipografia
- Kicker: Mono 13px, letter-spacing 0.18em, uppercase + bullet gold 7px
- Headline: Plus Jakarta Sans 600, clamp(46px, 7.6vw, 124px), line-height 0.98, letter-spacing -0.035em, max-width 13ch. `em` italic 400 ink-3 (-0.038em)
- `.headline-accent`: linear-gradient(180deg, gold 0%, #9C8054 100%) clipped no texto, italic
- Sub: Inter 350 (light), clamp(17px, 1.3vw, 21px), line-height 1.5, color graphite, max-width 56ch
- Pilares strong: Plus Jakarta 600, 16px, -0.02em
- Dossiê name: Plus Jakarta 600, clamp(34px, 3.8vw, 56px), -0.034em. `em` italic 400, color gold-soft
- Dossiê title: Inter 400, 13.5px, line-height 1.5
- `.dossier__credential`: Mono 11px, letter-spacing 0.14em, uppercase, color gold-soft
- Dossiê num: Plus Jakarta 500, clamp(80px, 9vw, 130px), line-height 0.85, letter-spacing -0.055em
- `dossier__sectors li`: Mono 11.5px, uppercase, letter-spacing 0.06em, com tracejado `border-bottom: 1px dashed rgba(255,255,255,.18)` no span flex preenchedor

### Animações
- Pós-load: `data-stagger-item` recebem opacity 0→1 + translateY 18px→0, 900ms ease-out, delays 0/120/220/320/420ms (incremento 100-120ms)
- Dossiê: `clip-path: inset(0 0 100% 0)` → `inset(0 0 0 0)`, 1200ms ease-out, delay 200ms (revela top→bottom)
- Régua: opacity 0→1, 1000ms, delay 800ms
- Selo CAU: `animation: seal-spin 24s linear infinite` (rotação suave constante)

### Interatividade
- Botões: já especificados (translateY(-2px) no primary; border `--ink` + bg `rgba(14,27,51,.04)` no ghost)
- SVG arrow: translateX(4px) on hover do CTA primário, 350ms

### Responsividade
- < 980px: grid 1 coluna, dossiê vai para `order: -1` (topo), gap 48px, dossiê max-width 520px centrado
- < 720px: pilares passam a 1 coluna, régua diminui font 9.5px, kicker mantém

---

## Seção 2 — Para quem é (Bento Box)

### Arquétipo e Constraints
- **Arquétipo:** Bento Box (12 colunas assimétrico)
- **Constraints:** Color Blocking (1 card navy), Hover Lift, Number Display (numeração grande)
- **Justificativa:** evita o clichê "3 cards iguais", cria hierarquia visual clara entre o público mais comum (PME) e a vertical especializada (mobilização). Já implementado.

### Conteúdo
- Intro: kicker "Para quem é", headline "Para qualquer empresa que precisa estar *em ordem* com a Segurança do Trabalho.", sub "Se você tem funcionários registrados, a sua empresa precisa de documentação de SST. A pergunta não é 'se' — é se ela está atualizada conforme as NRs e o eSocial."
- 4 cards: 01 PME (lead, mais comum), 02 Indústrias (médio), 03 Construtoras (médio), 04 Mobilização (tall, navy, "Vertical especializada")
- Card 01 chips: PGR + Inventário · CIPA · Ficha de EPI · eSocial SST
- Card 04 quote: "Quando o prazo é o serviço, o serviço é o prazo." + chips "Vale · Anglo · Petrobras · Aura"

### Layout
- Section padding `--section-y` `--pad-x`, bg `--paper`
- Intro: grid 1fr/1.1fr, gap clamp 32-88px, align-items end, mb clamp 48-80px
- Bento: 12 cols, grid-auto-rows minmax(180px, auto), gap clamp 14-22px
- Posicionamento: lead 1/8 row1; tall 8/13 row1-2; nth(3) 1/5 row2; nth(4) 5/8 row2

### Tipografia
- Section headline: Plus Jakarta 600, clamp(36px, 5vw, 72px), -0.034em
- Card h3: Plus Jakarta 600, clamp(22px, 2.2vw, 32px), -0.028em
- Card p: Inter 350, 15.5px, line-height 1.55
- Bento num: Mono 12px, letter-spacing 0.1em, color slate
- Bento tag: Mono 10.5px, uppercase, padding 5x10, radius pill, bg `rgba(14,27,51,.06)`. Variante gold: bg `rgba(184,153,104,.18)`, color gold
- Chips: Mono 11px, uppercase, padding 6x11, border 1px `--line`, bg paper

### Animações
- @supports `animation-timeline: view()`: cada card recebe `reveal-up` (opacity 0→1, translateY 28px→0), animation-range `entry 0% cover 22%`

### Interatividade
- Hover card: `translateY(-4px) + box-shadow 0 24px 48px -28px rgba(14,27,51,.25)`, border passa a `rgba(14,27,51,.28)`, 500ms ease-out
- Card dark hover: shadow mais profunda `0 30px 56px -28px rgba(14,27,51,.6)`

### Responsividade
- < 980px: bento vira 6 cols. Lead 1/7 row1, médios 1/4 + 4/7 row2, tall 1/7 row3
- < 600px: bento 1 coluna, todos cards full

---

## Seção 3 — Problema (Sticky Element + Scroll Storytelling)

### Arquétipo e Constraints
- **Arquétipo:** Sticky Element + Scroll Storytelling (uma coluna fixa enquanto outra rola)
- **Constraints:** Headline >150px (numerais), Counter Animation, Stagger Reveal por scroll, Color Blocking (fundo bone com card escuro fechando)
- **Justificativa:** quebra o ritmo das duas seções anteriores (estáticas) com narrativa que se desenrola no scroll. Imobiliza a "pergunta provocativa" enquanto o leitor confronta cada dor.

### Conteúdo (texto exato)
- Kicker: "Sintomas que você já viu"
- Headline (sticky esquerda): "A maioria das empresas só percebe o problema **quando o fiscal chega.**"
- Sub-sticky: "Documentação de SST não dá sintoma — até dar. Confira se algum desses cenários combina com a sua realidade:"
- Lista (rolável, 7 itens com numeração 01-07):
  - 01. O PGR está vencido, foi feito por modelo ou simplesmente não existe.
  - 02. A NR-1 mudou (riscos psicossociais incluídos) e a sua documentação não foi revisada.
  - 03. A CIPA precisa ser eleita, treinada e formalizada — e ninguém conduziu o processo.
  - 04. O EPI é entregue, mas não há ficha de controle nem assinatura comprobatória.
  - 05. O eSocial cobra eventos S-2210, S-2220 e S-2240 e ninguém sabe quem envia.
  - 06. O contratante exige PGR, LTCAT e APR para liberar acesso — e o prazo era ontem.
  - 07. O auditor fiscal do Trabalho marcou inspeção e a empresa está descoberta.
- Card de fechamento (após a lista, full width, navy): "Cada item dessa lista é uma multa **por funcionário exposto.** O custo de adequar é, quase sempre, menor que o custo de uma única autuação." + CTA inline "Quero diagnóstico gratuito →"

### Layout
- Section bg `--bone`, padding `--section-y` `--pad-x`
- Grid 2 colunas: `0.9fr 1.1fr`, gap clamp 60-120px
- Coluna esquerda: `position: sticky; top: 120px;`, max-width 480px, com kicker, headline e sub
- Coluna direita: lista com items grandes (espaçamento 64px entre items)
- Card fechamento: full width, mt clamp 80-120px, bg `--ink`, color `--bone`, padding clamp 48-80px, radius `--radius-lg`

### Tipografia
- Headline sticky: Plus Jakarta 600, clamp(40px, 5.4vw, 80px), -0.034em, line-height 1.0
- "quando o fiscal chega.": italic 400, color `--ink-3` com underline ondulado decorativo SVG embaixo (1px wave gold)
- Item numeral: Plus Jakarta 500, clamp(72px, 9vw, 140px), line-height 0.85, letter-spacing -0.05em, color `var(--ink)` com `text-stroke: 1px --ink; -webkit-text-fill-color: transparent;` (numeral OUTLINE)
- Item texto: Inter 400, clamp(18px, 1.5vw, 24px), line-height 1.4, color `--ink`
- Card fechamento headline: Plus Jakarta 600, clamp(28px, 3vw, 44px), color `--bone`. "por funcionário exposto" italic 400 gold-soft
- CTA inline: Inter 500, 16px, gold-soft com seta SVG

### Cores
- Section bg: `--bone`
- Card fechamento: `--ink` com gradient overlay radial gold no canto sup-direito (rgba 184,153,104,.18)
- Numerais outline: stroke `--ink` 60% opacity até hover/scroll-trigger → fill sólido

### Animações
- Sticky natural via CSS
- Cada item da lista: scroll-driven reveal, `animation-timeline: view()`, range `entry 5% cover 35%`. Animação: numeral muda de outline → fill `--ink` em 600ms cubic-bezier(.16,1,.3,1) + texto fade-up 28px→0
- Counter para o numeral inicial: ao entrar no viewport, contar de 0 → número final em 800ms (Counter Animation)
- Underline wave da headline: `stroke-dasharray` animado (Draw SVG), 1.2s ease-out, delay quando seção entra em view 30%
- Card fechamento: clip-path inset(100% 0 0 0) → inset(0), 1s

### Interatividade
- Hover no item: numeral muda de fill `--ink` para fill `--gold` em 250ms
- CTA inline: seta translateX(4px) on hover

### Responsividade
- < 880px: grid 1 coluna, sticky desligado (sticky desativa quando coluna passa a ter altura natural)
- Numerais: clamp(56px, 14vw, 100px) em mobile

---

## Seção 4 — Solução / Serviços (Tabs Verticais)

### Arquétipo e Constraints
- **Arquétipo:** Tabs Verticais (Estrutura Especial)
- **Constraints:** Reveal on Demand (conteúdo aparece com seleção), Sticky Tabs, Color Blocking (fundo navy)
- **Justificativa:** 4 blocos com muitos serviços cada — em cards isso virava lista feia. Tabs vertical permite scan rápido + foco profundo. Inverter para fundo navy cria contraste forte com seções anteriores claras.

### Conteúdo
- Kicker: "Serviços"
- Headline: "Uma única consultoria técnica para resolver toda a sua **SST.**"
- Sub: "Documentação interna obrigatória, gestão de SESMT e CIPA, treinamentos e — quando for o caso — mobilização para contratos. Você contrata só o que precisa."
- 4 abas (label esquerda + conteúdo direita):
  - **01 / Consultoria e gestão**
    - Dimensionamento de SESMT — Análise do grau de risco e quadro funcional para definir a composição obrigatória do SESMT conforme a NR-4.
    - Implantação e gestão da CIPA — Processo eleitoral conduzido do edital à posse, treinamento dos eleitos e adequação completa à NR-5.
    - Mobilização para contratos (terceirizadas) — Organização documental para empresas que precisam liberar acesso em obras, indústrias e mineração.
    - Propostas técnicas para licitações e contratos — Elaboração do escopo de SST e adequação normativa para concorrências.
  - **02 / Documentos legais**
    - PGR (NR-1)
    - LTCAT
    - Inventário de Riscos
    - Ordem de Serviço (OS)
    - APR — Análise Preliminar de Risco
    - Ficha de EPI e controle de entrega (NR-6)
    - Procedimentos operacionais
    - Plano de Emergência
  - **03 / Treinamentos**
    - Integração de Segurança (customizada por contratante)
    - DDS mensal (com calendário temático)
    - Treinamento obrigatório de CIPA (NR-5)
  - **04 / Inspeções e gestão contínua**
    - Checklist e inspeções de campo (com registro fotográfico)
    - Acompanhamento de eventos eSocial SST (S-2210, S-2220, S-2240)

### Layout
- Section bg `--ink`, color `--bone`, padding `--section-y` `--pad-x`
- Grid 0.6fr / 1.4fr, gap clamp(40px, 6vw, 100px)
- Coluna esquerda (tabs): `position: sticky; top: 120px;`, list de 4 buttons-tab vertical, separados por border-bottom `--line-dark`
- Coluna direita (painel): conteúdo da aba ativa, com título grande + lista de serviços com ícones SVG line à esquerda

### Tipografia
- Section headline: Plus Jakarta 600, clamp(36px, 5vw, 72px), `--bone`. "SST." em italic 400 gold-soft
- Tab label: Plus Jakarta 500, 22px, `rgba(242,238,230,.55)` (inativa) → `--bone` (ativa). Numeração à esquerda em Mono 13px gold
- Tab descrição (aparece on hover/active): Inter 400, 13.5px, color `rgba(242,238,230,.6)`
- Painel título: Plus Jakarta 600, clamp(32px, 3.6vw, 56px), -0.03em
- Item serviço: Plus Jakarta 500, 18px (nome) + Inter 400, 15px (descrição), line-height 1.5 color `rgba(242,238,230,.7)`

### Cores
- Tab inativa: text 55% opacity bone; hover: 80%; ativa: 100% bone com bullet gold 8px à esquerda
- Border-bottom tab: `--line-dark`
- Ícones SVG: stroke `--gold-soft` 1.4px, 24x24

### Animações
- Troca de aba: conteúdo fade-out 250ms + fade-in 350ms com translateY 12px (Reveal on Demand)
- Bullet gold: scaleX 0→1, 400ms ease-out (origin left)
- Indicador de aba ativa (linha vertical 2px gold à esquerda da tab): height 0→100% animado em 350ms cubic-bezier(.16,1,.3,1) ao trocar
- Itens da lista no painel: stagger 80ms entre items quando aba muda

### Interatividade
- Click no tab: muda aba ativa
- Hover tab inativa: text 80% bone + bullet pequeno 4px gold opacity .5
- Item serviço hover: ícone gira 8deg + cor gold (de gold-soft) em 300ms
- Auto-cycle (opcional, easter egg): se usuário ficar 8s sem interagir, próxima aba avança automaticamente uma vez (depois para)

### Responsividade
- < 880px: grid vira 1 coluna, tabs viram horizontais com scroll lateral, sticky desligado
- Tabs em mobile: padding 14px 22px, separadas por border-right

---

## Seção 5 — Diferenciais (Asymmetric Grid + Number Display)

### Arquétipo e Constraints
- **Arquétipo:** Asymmetric Grid (Rule of Thirds aplicado)
- **Constraints:** Number Display (numerais gigantes), Mixed Weights (extreme), Selective Color (gold pontual)
- **Justificativa:** sai do "4 boxes iguais" típico de páginas de benefício. Cria hierarquia: 1º pilar é o maior visualmente, demais menores ao redor.

### Conteúdo
- Kicker: "Diferenciais"
- Headline: "Por que empresas confiam a SST nas *nossas* mãos."
- 4 pilares:
  - **01 — Atendimento completo em um só lugar** — Do dimensionamento do SESMT ao DDS mensal, sem orquestrar três fornecedores diferentes.
  - **02 — Agilidade real na entrega** — Prazo combinado é prazo cumprido. Documentos em dias úteis, não em "quando for possível".
  - **03 — Domínio normativo atualizado** — Acompanhamos as revisões das NRs (NR-1, NR-4, NR-5, NR-6, NR-18) e ajustamos os documentos conforme a regra atual.
  - **04 — Documento sob medida, não template** — Cada PGR, LTCAT e Inventário é elaborado a partir dos riscos reais da sua empresa.

### Layout
- Section bg `--paper`, padding `--section-y` `--pad-x`
- Intro mb clamp 60-100px
- Grid 12 cols, auto-rows
- Pilar 01: cols 1/9 (8 cols, dominante)
- Pilar 02: cols 9/13 (4 cols à direita do 01, alinhado bottom)
- Pilar 03: cols 1/6 (5 cols)
- Pilar 04: cols 6/13 (7 cols)
- Gap clamp 24-40px

### Tipografia
- Numeral pilar: Plus Jakarta 300 (light extreme), clamp(120px, 16vw, 240px), line-height 0.8, letter-spacing -0.06em, color `--ink` com opacity .12 (background watermark) ou `--gold` com opacity .25 nas variantes
- Título pilar: Plus Jakarta 600, clamp(28px, 3vw, 48px), -0.03em
- Texto pilar: Inter 350, clamp(16px, 1.2vw, 19px), line-height 1.55, color `--graphite`, max-width 38ch

### Cores
- Pilar 01 (dominante): bg `--paper-2`, numeral gold opacity .25, border `--line`
- Pilar 02, 03, 04: bg transparente sobre paper, numeral ink opacity .08
- Pilar 04 (selo de "sob medida"): card com leve gradient diagonal `--paper` → `--paper-2`

### Elementos visuais
- Numerais como watermark: `position: absolute`, top -20px right -20px, z-index 0, atrás do conteúdo
- Linhas decorativas: 1px `--line` separando os 4 quadrantes (não obrigatório, sutileza)

### Animações
- Cada pilar: scroll-driven reveal, range `entry 0% cover 30%`. Numeral entra translateX (do lado oposto, ex: pilar 01 numeral vem da direita +60px), 1s ease-out. Texto fade-up.
- Stagger entre pilares: 0/120/240/360ms

### Interatividade
- Hover no card pilar: numeral muda opacity de .12 → .35 (Selective Color reveal) + scaleY(1.04) sutil em 600ms cubic-bezier(.16,1,.3,1)

### Responsividade
- < 980px: grid vira 6 cols, pilar 01 ocupa 1/7 row1, demais 1/4 e 4/7 nas rows seguintes
- < 600px: 1 coluna, numerais menores clamp(80px, 22vw, 120px)

---

## Seção 6 — Como funciona (Timeline Horizontal)

### Arquétipo e Constraints
- **Arquétipo:** Timeline Horizontal (Estrutura Especial)
- **Constraints:** Draw SVG (linha conectora), Counter Animation, Scroll Triggered
- **Justificativa:** processo de 3 passos — timeline horizontal cria narrativa de movimento e clareza, com a linha sendo "desenhada" conforme o usuário avança.

### Conteúdo
- Kicker: "Como funciona"
- Headline: "Três passos do contato à documentação **assinada.**"
- Etapas:
  - **01 / Diagnóstico técnico** (sem custo) — Conversa de 30 minutos para entender o porte, atividade, grau de risco e o que a sua empresa precisa: adequar a documentação interna, atender uma fiscalização, liberar um contrato ou tudo junto.
  - **02 / Proposta com escopo, prazo e responsável técnico** — Você recebe um documento claro com o que será entregue, em quanto tempo e quem assina.
  - **03 / Execução com acompanhamento** — Coleta remota de dados, visita presencial quando o escopo exigir, entrega revisada e suporte para perguntas do cliente final ou da fiscalização.

### Layout
- Section bg `--bone`, padding `--section-y` `--pad-x`, id `como-funciona`
- Intro centralizada, max-width 720px
- Timeline: 3 colunas iguais com gap clamp 32-64px
- Cada step: dot grande + linha conectando à próxima + título + texto
- SVG linha horizontal: posicionada absoluta atrás dos dots, height 1px, bg `--ink` opacity .15, com sobre-camada `--gold` que se desenha

### Tipografia
- Step num: Mono 12px, letter-spacing 0.16em, gold uppercase
- Step título: Plus Jakarta 600, clamp(22px, 2.4vw, 30px), -0.025em, mt 24px
- Step descrição: Inter 400, 16px, line-height 1.55, color `--graphite`, max-width 40ch
- Dot: 16px circle, bg `--ink`, com ring 2px `--bone` + 1px `--ink` outer

### Cores
- Linha base: `--ink` 15% opacity
- Linha desenhada (progress): `--gold`
- Dot ativo (quando em viewport): bg `--gold`, ring `--bone`

### Animações
- Linha gold: `stroke-dasharray` total length, `stroke-dashoffset: total → 0`, animação CSS scroll-driven ligada ao progresso da seção (animation-timeline view)
- Cada step: entrada stagger ao scroll (range entry 10% cover 40%), 0/180/360ms
- Dot: ao entrar em viewport, scale 0 → 1.2 → 1 (bounce) em 600ms cubic-bezier(.34,1.56,.64,1)
- Counter: número 01 → 03 incrementa em label "passos completados" (opcional) ao final da timeline

### Interatividade
- Hover no step: dot scale 1 → 1.3 + glow `box-shadow: 0 0 24px var(--gold)`, 350ms

### Responsividade
- < 880px: timeline vira vertical. Linha vira vertical à esquerda, dots à esquerda, conteúdo à direita
- Em vertical, mantém Draw SVG mas em axis Y

---

## Seção 7 — Depoimentos (Editorial / Type as Image)

### Arquétipo e Constraints
- **Arquétipo:** Editorial / Type as Image (aspa serif gigante decorativa)
- **Constraints:** Headline >150px (aspa "), Layered (depoimentos sobrepostos sutilmente), Hover Reveal (cargo aparece)
- **Justificativa:** evita carrossel padrão e o "foto circular + texto" proibido. Aspa gigante vira elemento gráfico icônico.

### Conteúdo
- Kicker: "Quem trabalhou comigo"
- Headline: "Depoimentos."
- 3 depoimentos (placeholder até preenchimento):
  - 01. "Estávamos com PGR e Inventário de Riscos vencidos e o eSocial cobrando eventos atrasados. Em [X semanas] a documentação foi refeita do zero, dentro da NR-1 atualizada, e os eventos passaram a sair no prazo." — [Nome do cliente], [Cargo, Empresa, Segmento]
  - 02. "Tínhamos a CIPA pendente há dois anos e medo de fiscalização. Em [X semanas] o processo eleitoral foi conduzido e os eleitos treinados — sem ruído com o RH." — [Nome], [Cargo, Empresa]
  - 03. "O eSocial estava com eventos SST atrasados e ninguém da equipe sabia mexer. Hoje os S-2210, S-2220 e S-2240 saem no prazo todo mês." — [Nome], [Cargo, Empresa]

### Layout
- Section bg `--paper`, padding `--section-y` `--pad-x`
- Intro mb clamp 48-80px
- Grid asymmetric: 3 cards em 12 cols
  - Card 01: cols 1/8 (largo), row 1
  - Card 02: cols 8/13, row 1, slightly translated down 40px (offset visual)
  - Card 03: cols 3/11, row 2, mt -32px (overlap leve com row 1)
- Cada card: padding 36-56px clamp, bg `--paper-2`, border 1px `--line`, radius `--radius-lg`
- Aspa gigante decorativa: `position: absolute`, top -40px left -20px, font Plus Jakarta italic 280px, color `--gold` opacity .12, pointer-events none

### Tipografia
- Texto depoimento: Plus Jakarta 400 italic, clamp(20px, 2vw, 28px), line-height 1.4, letter-spacing -0.018em, color `--ink`
- Atribuição nome: Inter 600, 16px, color `--ink`
- Atribuição cargo: Inter 400, 14px, color `--graphite`, mt 4px
- Numeração card: Mono 11px, uppercase, letter-spacing 0.16em, color `--gold`

### Animações
- Cada card: scroll-driven reveal, fade-up 32px, range entry 5% cover 30%, stagger 0/200/400ms
- Aspa decorativa: fade-in lento 1.2s + scale 0.9 → 1 ao entrar no viewport

### Interatividade
- Hover card: translateY(-6px) + shadow `0 30px 60px -28px rgba(14,27,51,.25)` + aspa decorativa muda opacity .12 → .25, 500ms

### Responsividade
- < 880px: 1 coluna, sem offsets, sem overlap, todos cards padrão
- < 600px: aspa decorativa reduz para 160px

---

## Seção 8 — Sobre Fernanda (Documentary + Timeline Vertical)

### Arquétipo e Constraints
- **Arquétipo:** Documentary (legendas + contexto jornalístico) + Timeline Vertical
- **Constraints:** Sticky Element (bio à esquerda fica fixa), Draw SVG (linha do tempo desenhada), Image Duotone (placeholder para foto futura)
- **Justificativa:** seção de mais peso narrativo da página. Documentary porque trata de trajetória profissional real, com empresas de referência (Vallourec, Aura). Timeline vertical permite ler 7 cargos sem cansar.

### Conteúdo
- Kicker: "Sobre"
- Headline: "Quem assina o seu *documento.*"
- Sub: "Arquiteta e Urbanista e Engenheira de Segurança do Trabalho com mais de 15 anos atuando em operações industriais, mineração, manutenção pesada e construção — exatamente os setores em que a documentação de SST não pode falhar."
- Bio (parágrafo):
  - "Sou Fernanda G. Menezes Ferreira, Arquiteta e Urbanista e Engenheira de Segurança do Trabalho (CAU A309488-0). Atuo em SST desde 2011, dentro de operações reais de risco — não atrás de um manual. Minha trajetória passa por siderurgia, mineração, manutenção industrial e construção pesada, em empresas como Vallourec, VSB (Vallourec & Sumitomo) e Aura Minerals, antes de assumir como Engenheira de Segurança na Trimak Engenharia."
  - "Hoje, em paralelo, ofereço consultoria autônoma a empresas de diversos segmentos. O diferencial é simples: você fala diretamente com quem elabora e assina o seu documento, sem camadas de atendimento. A dupla formação me dá uma vantagem prática: leio um canteiro, um layout industrial e um plano de emergência com olhos de quem projetou o espaço, não só de quem auditou depois."
- Citação destaque: "Documentação de SST que funciona não é a que cumpre o papel. É a que reflete a operação real e protege a empresa quando o problema chega — porque o problema chega." — Fernanda Menezes
- Timeline (cronológica reversa):
  - **Trimak Engenharia** — Engenheira de Segurança do Trabalho — set/2024 — atual · Belo Horizonte/MG
  - **Aura Minerals Inc.** — Analista de Gestão de Riscos Sênior — jan/2024 — set/2024 · Mato Grosso
  - **Aura Minerals Inc.** — Técnica de Segurança do Trabalho Sênior — jun/2023 — jan/2024 · Pontes e Lacerda/MT (SSMA)
  - **Vallourec** — Técnica em Segurança do Trabalho — set/2019 — mai/2023 · Brumadinho/MG (3a 9m)
  - **Tradimaq** — Técnica em Segurança do Trabalho — jan/2018 — set/2019 · Belo Horizonte/MG
  - **Construtora Contorno** (contrato Vallourec Tubos do Brasil) — TST — set/2013 — set/2017 · Belo Horizonte/MG (4a)
  - **VSB — Vallourec & Sumitomo Tubes** — Estagiária de Segurança do Trabalho — fev/2010 — jul/2013 · Belo Horizonte/MG
- Setores grid (chips):
  - Mineração — Aura Minerals
  - Siderurgia & Tubos — Vallourec / VSB
  - Manutenção Industrial — Tradimaq
  - Construção & Obras — Construtora Contorno
  - Engenharia Consultiva — Trimak Engenharia
- Métricas:
  - 15+ anos em SST
  - [X+] empresas atendidas
  - [X+] documentos legais elaborados
  - 100% assinados por responsável técnica habilitada

### Layout
- Section bg `--ink`, color `--bone`, padding `--section-y` `--pad-x`, id `sobre`
- Grid 0.85fr / 1.15fr, gap clamp 60-120px
- Coluna esquerda (sticky): kicker, headline, sub, bio, citação destaque, métricas. `position: sticky; top: 100px;`, max-width 480px
- Coluna direita: timeline vertical com linha gold à esquerda (1px, 100% height) + dots + cards de empresa
- Setores grid no final da coluna direita: 5 chips em flex wrap

### Tipografia
- Section headline: Plus Jakarta 600, clamp(36px, 5vw, 72px), `--bone`. "documento." em italic 400 gold-soft
- Bio: Inter 400, clamp(16px, 1.2vw, 19px), line-height 1.65, color `rgba(242,238,230,.78)`
- Citação destaque: Plus Jakarta 400 italic, clamp(20px, 2.2vw, 28px), line-height 1.35, color `--gold-soft`, padding-left 24px, border-left 2px `--gold`
- Timeline empresa: Plus Jakarta 600, 22px, `--bone`
- Cargo: Inter 500, 15px, `rgba(242,238,230,.7)`
- Período + local: Mono 11.5px, uppercase, letter-spacing 0.08em, color `--gold-soft`
- Métricas num: Plus Jakarta 500, clamp(40px, 5vw, 64px), `--bone`
- Métricas label: Mono 10.5px, uppercase, letter-spacing 0.16em, color `rgba(242,238,230,.55)`
- Setor chip: Mono 11px, uppercase, padding 8x14, border 1px `rgba(255,255,255,.16)`, radius 999px, bg `rgba(255,255,255,.04)`

### Elementos visuais
- Linha do tempo: SVG vertical 1px, height 100%, color `--gold` 60% opacity, com dots `8px circle gold` em cada empresa
- Selo dourado da Fernanda (decoração canto superior direito da bio): SVG decorativo grande, opacity .08
- Espaço para foto duotone (futura): card 280x360 com placeholder `linear-gradient(135deg, --ink-3, --ink)` + label "FOTO" em Mono 11px gold, mix-blend-mode multiply quando preenchido (Image Duotone)

### Animações
- Bio + citação + métricas: stagger reveal ao entrar na seção, 0/120/240/360ms
- Métricas number: counter animation (0 → valor) ao entrar viewport, 1.2s cubic-bezier(.16,1,.3,1)
- Timeline linha gold: stroke-dasharray length total, dashoffset → 0, animação ligada ao scroll progress (animation-timeline)
- Cada empresa da timeline: dot scale 0 → 1 + card slide-in (translateX 24px → 0), stagger 100ms
- Selo decorativo: rotate-loop 60s linear infinite

### Interatividade
- Hover empresa: cargo+período sai e descrição expandida aparece (Reveal on Demand). Card lift translateY(-4px) + bg `rgba(255,255,255,.04)`
- Hover setor chip: bg `rgba(184,153,104,.18)`, color gold-soft, 250ms

### Responsividade
- < 980px: grid 1 coluna, sticky desligado
- Timeline vertical mantém em mobile
- Métricas: 4 → 2 colunas
- < 600px: empresas timeline vira lista simples sem dots elaborados

---

## Seção 9 — FAQ (Editorial Two-Column)

### Arquétipo e Constraints
- **Arquétipo:** Editorial Two-Column (perguntas vs respostas em colunas alternadas)
- **Constraints:** Mixed Weights (extreme entre pergunta e resposta), Hover Reveal (resposta aparece), Asymmetric Padding
- **Justificativa:** evita accordion básico (proibido). Layout editorial onde a pergunta é o protagonista visual e a resposta vive como nota lateral, alternando lado a cada item para criar ritmo.

### Conteúdo (8 perguntas exatas da copy)
1. Quanto custa elaborar PGR, LTCAT e os demais documentos?
2. Em quanto tempo o documento fica pronto?
3. Posso esperar a fiscalização chegar para resolver?
4. Vocês entregam documento genérico ou modelo pronto?
5. Mudou alguma NR, meu documento ainda vale?
6. Quem envia os eventos de SST no eSocial?
7. Funciona mesmo no modelo remoto?
8. Atendem todo o Brasil?

(respostas conforme copy.md exatas)

### Layout
- Section bg `--bone`, padding `--section-y` `--pad-x`, id `faq`
- Intro: kicker "Perguntas frequentes" + headline "Respostas para o que sempre nos perguntam." (Plus Jakarta 600, clamp 36-72)
- Cada Q&A em row 12-col grid:
  - Items ímpares (1, 3, 5, 7): pergunta cols 1/7, resposta cols 7/12
  - Items pares (2, 4, 6, 8): pergunta cols 6/12, resposta cols 1/6 (espelho)
- Items separados por border-top 1px `--line`, padding 48px 0
- Numeração `01` em Mono 11px gold à esquerda fora do grid principal (cols 0/1)

### Tipografia
- Pergunta: Plus Jakarta 600, clamp(22px, 2.6vw, 36px), -0.028em, line-height 1.15
- Resposta: Inter 400, clamp(15px, 1.2vw, 18px), line-height 1.6, color `--graphite`, max-width 50ch
- Numeração: Mono 13px, uppercase, letter-spacing 0.18em, color `--gold`

### Animações
- Cada FAQ row: scroll-driven reveal, opacity 0→1, range entry 5% cover 25%
- Pergunta translateY(20px) → 0, resposta translateY(28px) → 0, stagger 80ms

### Interatividade
- Hover na pergunta: pergunta passa a italic 400 (transição peso 600→400 + italic), color `--ink-3`, 350ms (Mixed Weights/Reveal demonstration)
- Cursor sobre numeração: gold opacity 1 → glow text-shadow

### Responsividade
- < 880px: grid vira 1 coluna, todos itens left-aligned, espelhamento desligado
- Numeração some inline com pergunta

---

## Seção 10 — CTA Final (Type Hero)

### Arquétipo e Constraints
- **Arquétipo:** Type Hero (tipografia gigante como protagonista)
- **Constraints:** Headline >150px, Selective Color (gold pontual), Noise Texture (background)
- **Justificativa:** fechamento dramático. Type Hero garante que a página termina com peso e foco em uma única ação.

### Conteúdo
- Eyebrow: "Diagnóstico técnico inicial sem custo"
- Headline gigante: "Coloque a SST da sua empresa **em ordem** *antes* que o problema apareça."
- Sub: "Em 30 minutos identificamos o que está em risco, o que precisa ser entregue primeiro e quanto vai custar para deixar a sua empresa em conformidade."
- CTA primário: "Solicitar proposta técnica" (botão grande)
- CTA secundário: "Falar no WhatsApp"
- Linha de confiança: "Fernanda G. Menezes Ferreira — Arquiteta e Urbanista · Engenheira de Segurança do Trabalho — CAU A309488-0 — [WHATSAPP] — [EMAIL]"

### Layout
- Section bg `--ink`, color `--bone`, padding clamp(120px, 14vw, 200px) `--pad-x`, id `contato`
- Container narrow centralizado max-width 1280px
- Eyebrow + headline alinhados à esquerda
- Sub max-width 56ch
- CTAs flex gap 16px
- Linha de confiança em Mono pequeno absoluta no rodapé da seção (border-top `--line-dark` 1px, padding-top 32px)

### Tipografia
- Eyebrow: Mono 12px, uppercase, letter-spacing 0.2em, color gold-soft
- Headline: Plus Jakarta 600, clamp(56px, 9vw, 160px), line-height 0.96, letter-spacing -0.04em, color `--bone`. "em ordem" italic 400 gold-soft. "antes" outline (text-stroke 1px gold + transparent fill)
- Sub: Inter 350, clamp(18px, 1.4vw, 22px), line-height 1.5, color `rgba(242,238,230,.7)`, max-width 56ch
- CTA primário (large): Inter 500, 17px, padding 18px 32px, bg `--gold`, color `--ink`, radius 999px
- CTA secundário: Inter 500, 17px, ghost border `rgba(255,255,255,.2)`, color `--bone`
- Linha confiança: Mono 11px, color `rgba(242,238,230,.5)`, letter-spacing 0.08em

### Cores
- Section bg: `--ink` com noise SVG overlay opacity .04
- Headline: bone 100%
- Word "antes" outline gold (text-stroke 1px gold, color transparent)
- CTA primário hover: bg `--gold-soft`, translateY(-2px), shadow `0 24px 48px -20px rgba(184,153,104,.5)`

### Elementos visuais
- Background: `--ink` + SVG noise (turbulence filter) overlay com `mix-blend-mode: overlay` opacity .35
- Linhas decorativas verticais nas laterais: 1px gold opacity .25, 30vh height, top centralizado (recurso editorial)

### Animações
- Headline: scroll-driven, palavras entram em sequência (Stagger). "antes" outline desenha (Draw SVG-like via text-stroke animation) ao virar visível
- CTA primário: pulse-loop sutil (scale 1 → 1.02 → 1, 4s) chamando atenção sem ser irritante

### Interatividade
- CTA primário hover: descrito acima
- CTA secundário hover: bg `rgba(255,255,255,.05)`, border `--bone`

### Responsividade
- < 880px: headline clamp(48px, 12vw, 80px), CTAs full-width stacked
- Linhas decorativas laterais somem em mobile

---

## Seção 11 — Footer (Modular Editorial)

### Arquétipo e Constraints
- **Arquétipo:** Modular (módulos repetidos com variações)
- **Constraints:** Asymmetric Grid 5/3/2/2, Hover Underline
- **Justificativa:** footer técnico com identificação completa, contato, redes e legal. Editorial mantém coerência com o resto da página.

### Conteúdo
- Coluna 1 (5 cols): Brand wordmark "Fernanda G. Menezes Ferreira" (Plus Jakarta 600, 22px) + tagline "Arquiteta e Urbanista · Engenheira de Segurança do Trabalho — CAU A309488-0" + frase "Atendimento remoto em todo o Brasil e presencial em Minas Gerais."
- Coluna 2 (3 cols) — Navegar: Serviços · Sobre · FAQ · Solicitar proposta
- Coluna 3 (2 cols) — Contato: WhatsApp, Email, LinkedIn
- Coluna 4 (2 cols) — Legal: Política de Privacidade, Termos de uso, CNPJ [INSERIR]
- Linha inferior: © 2026 Fernanda G. Menezes Ferreira — Belo Horizonte/MG · Brasil + selo "Built with care"

### Layout
- Section bg `--ink`, color `rgba(242,238,230,.7)`, padding clamp(80px, 8vw, 120px) `--pad-x` 32px
- Grid 12 cols: col1 1/6, col2 6/9, col3 9/11, col4 11/13, gap 32px
- Linha inferior: border-top 1px `--line-dark`, mt 64px, padding-top 28px, flex space-between

### Tipografia
- Wordmark footer: Plus Jakarta 600, 22px, `--bone`
- Tagline: Mono 11px, uppercase, letter-spacing 0.12em, gold-soft
- Frase descrição: Inter 400, 14px, line-height 1.55, `rgba(242,238,230,.6)`
- Coluna headers: Mono 10.5px, uppercase, letter-spacing 0.18em, gold-soft
- Links lista: Inter 400, 14.5px, color `rgba(242,238,230,.7)` → `--bone` no hover
- Copyright: Mono 11px, `rgba(242,238,230,.4)`

### Animações
- Footer entra com fade-in simples ao chegar (range entry 0% cover 20%)

### Interatividade
- Links: underline animado (scaleX) + color `--bone`, 300ms ease-out

### Responsividade
- < 880px: grid 1 coluna, todos blocos empilhados, separados por border-bottom `--line-dark` (paddings 24px)

---

## Elementos Globais (transversais)

### Cursor Custom (opcional, easter egg em desktop ≥1024px)
- Substitui cursor padrão por dot 8px gold com ring 24px translucent que segue suavemente (lerp 0.15)
- Em CTAs: cursor expande para 56px com texto "→ Avançar"
- Em links: cursor expande para 40px com underline

### Noise Texture global
- SVG `<filter feTurbulence>` aplicado em `body::before` com opacity .03, mix-blend-mode multiply, position fixed
- Cria sensação de papel/textura editorial premium

### Smooth Scroll
- `html { scroll-behavior: smooth }` para links âncora
- Considerar Lenis (Locomotive-like) opcional via CDN para inertia premium em desktop

### Scroll Progress Bar (top of page)
- 2px height, top fixed, gradient `--gold` → `--gold-soft`, animado por JS `(scrollY / scrollHeight) * 100%`

### Reduced Motion
- `@media (prefers-reduced-motion: reduce)` desliga todas animações ≤1ms (já implementado no design)

---

## Variedade Verificada

| Seção | Arquétipo único? |
|-------|------------------|
| Hero | Editorial ✓ |
| Para quem é | Bento Box ✓ |
| Problema | Sticky+Storytelling ✓ |
| Solução | Tabs Verticais ✓ |
| Diferenciais | Asymmetric Grid ✓ |
| Como funciona | Timeline Horizontal ✓ |
| Depoimentos | Type as Image ✓ |
| Sobre | Documentary+Timeline Vertical ✓ |
| FAQ | Editorial Two-Column ✓ |
| CTA Final | Type Hero ✓ |
| Footer | Modular Editorial ✓ |

11 arquétipos distintos. Nenhum repetido em sequência.

---

## Elementos Surpresa Planejados

1. **Selo CAU rotativo** no hero (já implementado)
2. **Linha do tempo gold sendo desenhada conforme scroll** (Sobre + Como funciona)
3. **Numerais em outline → fill** quando entram em viewport (Problema)
4. **Auto-cycle de tabs após 8s de inatividade** (Solução)
5. **Aspa decorativa gigante 280px gold opacity .12** (Depoimentos)
6. **Cursor custom expandindo em CTAs** (desktop)
7. **Word "antes" em outline animado** (CTA Final)
8. **Counter animation nas métricas** (Sobre)
9. **Noise texture global** (papel premium)
10. **Scroll progress bar dourada no topo**

---

## Conteúdo a Preencher (placeholders)

| Placeholder | Onde aparece |
|-------------|--------------|
| `[X anos]` | Bio (Sobre) |
| `[X+ empresas atendidas]` | Métricas (Sobre) |
| `[X+ documentos legais elaborados]` | Métricas (Sobre) |
| `[X estados]` | Métricas (Sobre) |
| `[CIDADE/UF]` | Footer |
| `[WHATSAPP]` | CTA final, Footer |
| `[EMAIL]` | CTA final, Footer |
| `[CNPJ]` | Footer |
| Depoimentos reais | Seção 7 (3 cards com cliente/cargo/resultado) |
