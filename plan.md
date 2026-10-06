# Plano do AgroGuia

## Produto
Site educacional estático, em português brasileiro, para orientar estudantes do ensino técnico em agronegócio na elaboração de um projeto de pesquisa e inovação.

## Direção visual
- **Movimento:** editorial de caderno de campo contemporâneo.
- **Princípios:** clareza, ritmo de trilha, acolhimento e ação prática.
- **Paleta:** verde profundo para confiança e campo; creme para sensação de papel; laranja-ouro para ação e destaque; azul petróleo para dados e contraste.
- **Layout:** composição em duas colunas no desktop, com navegação lateral fixa e conteúdo em cartões de leitura; no mobile, a trilha vira navegação horizontal/empilhada.
- **Elementos de assinatura:** linha de progresso vertical, marcador circular numerado e cartões “faça agora” com borda laranja.
- **Interação:** cada etapa mostra objetivo, instruções, exemplo, campo de resposta e checklist; o progresso é salvo localmente no navegador.
- **Animação:** transições curtas de entrada e preenchimento de progresso sem movimentos decorativos excessivos.
- **Tipografia:** Fraunces para títulos e DM Sans para interface e corpo, com fallbacks Georgia/Arial.
- **Essência da marca:** um guia de bolso para transformar uma ideia do campo em projeto defendível. Personalidade: prático, atento, encorajador.
- **Voz:** direta, simples e orientadora. Exemplos: “Comece pelo problema, não pelo produto.” / “Mostre como sua ideia pode funcionar na vida real.”
- **Marca:** wordmark AgroGuia acompanhado por um pequeno símbolo de folha sobre linha de caderno.
- **Cor proprietária:** verde “folha de caderno” `#1B5E4B`.

## Estrutura do projeto
- `index.html`: shell semântico da aplicação e metadados.
- `styles.css`: sistema visual responsivo e estados de interação.
- `app.js`: dados das etapas, navegação, formulários, checklists e persistência local.
- `public/manus-routes.json`: manifesto da rota principal.
- `server.js`: servidor estático para Preview em `0.0.0.0:3000`.
- `app.config.ts`: metadata de logo do projeto.

## Comportamento
- A página inicial apresenta propósito, regra central, visão geral e botão para começar.
- A trilha contém 12 etapas, com acesso anterior/próxima e navegação direta.
- Os campos e checklists funcionam no navegador e são persistidos no `localStorage`.
- A seção final resume a entrega e oferece revisão do projeto.
- O site não usa login, banco ou chamadas externas para funcionar.
