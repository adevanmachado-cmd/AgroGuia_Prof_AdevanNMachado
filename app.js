const stages = [
  {
    title: 'Escolha e delimite o tema', short: 'Tema', question: 'Em qual área do agronegócio vocês vão trabalhar?', tag: 'Começo do projeto',
    intro: 'Escolha uma área que faça sentido para a equipe. Depois, reduza o foco até caber em uma situação, público ou processo específico.',
    why: 'Um tema bem delimitado evita que a pesquisa fique ampla demais. Vocês precisam saber onde olhar e quem escutar.',
    actions: ['Escolher uma área do agronegócio.', 'Definir a cultura, atividade, local ou público do projeto.', 'Escrever o tema em uma frase curta.'],
    example: 'Tema amplo: irrigação. Tema delimitado: desperdício de água na irrigação de hortaliças em pequenas propriedades.',
    fields: [{ key: 'tema', label: 'Nosso tema delimitado', placeholder: 'Ex.: desperdício de água na irrigação de hortaliças' }],
    checks: ['A área do agronegócio está definida.', 'O público ou contexto está definido.', 'O tema cabe em uma frase.']
  },
  {
    title: 'Encontre o problema real', short: 'Problema', question: 'Qual dificuldade precisa ser compreendida e resolvida?', tag: 'Investigue antes de inventar',
    intro: 'Descrevam uma dificuldade que acontece de verdade. Informem quem é afetado e quais consequências aparecem no campo.',
    why: 'O projeto não começa pelo aplicativo, pela máquina ou pela marca. Começa por uma dor real, observável e relevante.',
    actions: ['Descrever a dificuldade.', 'Identificar quem é afetado.', 'Registrar prejuízos, perdas, custos ou riscos causados pelo problema.', 'Transformar o problema em uma pergunta de pesquisa.'],
    example: 'Em pequenas propriedades produtoras de hortaliças, o uso inadequado da irrigação provoca desperdício de água, aumento dos custos e risco de queda na produtividade.',
    fields: [{ key: 'problema', label: 'Nosso problema', placeholder: 'Em [contexto], [público] enfrenta [dificuldade], causando [consequências].', area: true }, { key: 'pergunta', label: 'Nossa pergunta de pesquisa', placeholder: 'Como reduzir ou melhorar...?', area: true }],
    checks: ['O problema é específico.', 'O problema afeta um público definido.', 'As consequências foram registradas.', 'A pergunta pode ser investigada.']
  },
  {
    title: 'Formule hipótese e justificativa', short: 'Hipótese', question: 'O que vocês acreditam que pode resolver o problema e por quê?', tag: 'Primeira explicação',
    intro: 'A hipótese é uma resposta provisória. A justificativa mostra por que vale a pena estudar o problema.',
    why: 'A hipótese orienta a investigação, mas pode ser confirmada, ajustada ou rejeitada depois da pesquisa.',
    actions: ['Propor uma resposta provisória.', 'Explicar por que essa resposta pode funcionar.', 'Mostrar a importância produtiva, econômica, social ou ambiental do tema.'],
    example: 'Acreditamos que um sistema de monitoramento da umidade do solo poderá reduzir o desperdício de água porque a irrigação será feita somente quando a plantação precisar.',
    fields: [{ key: 'hipotese', label: 'Nossa hipótese', placeholder: 'Acreditamos que... porque...', area: true }, { key: 'justificativa', label: 'Por que pesquisar isso?', placeholder: 'Este projeto é importante porque...', area: true }],
    checks: ['A hipótese responde ao problema.', 'A justificativa explica a importância.', 'Há um benefício esperado.', 'A equipe reconhece que a hipótese será testada.']
  },
  {
    title: 'Defina os objetivos', short: 'Objetivos', question: 'O que a equipe pretende investigar e alcançar?', tag: 'Direção',
    intro: 'O objetivo geral mostra o resultado principal. Os objetivos específicos são as ações que levam até ele.',
    why: 'Objetivos claros ajudam a equipe a decidir o que pesquisar e evitam tarefas que não contribuem para o projeto.',
    actions: ['Começar o objetivo geral com um verbo: investigar, analisar, propor, desenvolver, testar ou avaliar.', 'Listar de três a cinco objetivos específicos.', 'Ordenar as ações do diagnóstico até a validação.'],
    example: 'Objetivo geral: investigar as causas do desperdício de água para propor um sistema de monitoramento de baixo custo.',
    fields: [{ key: 'objetivoGeral', label: 'Objetivo geral', placeholder: 'Investigar... para propor...', area: true }, { key: 'objetivosEspecificos', label: 'Objetivos específicos', placeholder: '1. Pesquisar...\n2. Identificar...\n3. Comparar...', area: true }],
    checks: ['O objetivo geral é único e claro.', 'Os verbos estão no infinitivo.', 'Os objetivos específicos são ações.', 'As ações ajudam a responder à pergunta.']
  },
  {
    title: 'Pesquise e registre referências', short: 'Pesquisa', question: 'Que informações já existem sobre o problema?', tag: 'Fontes confiáveis',
    intro: 'Busquem informações antes de tomar decisões. Usem pelo menos cinco fontes confiáveis e anotem o que cada uma ajudou a entender.',
    why: 'Pesquisa bibliográfica, documental e de campo dá base para o projeto e evita decisões apoiadas apenas em opinião.',
    actions: ['Consultar livros, artigos, universidades, Embrapa, órgãos públicos e relatórios técnicos.', 'Registrar autor, título, instituição, ano e link.', 'Comparar o que as fontes dizem com o que ocorre no campo.', 'Anotar entrevistas, questionários ou observações.'],
    example: 'Uma fonte pode explicar as causas do desperdício; uma entrevista pode mostrar como o produtor enfrenta o problema; uma cotação pode revelar o custo da solução.',
    fields: [{ key: 'referencias', label: 'Referências iniciais', placeholder: '1. Autor/instituição — título — ano — link\n2. ...', area: true }],
    checks: ['Há pelo menos cinco referências.', 'As fontes têm autoria ou instituição.', 'As informações foram conferidas.', 'A equipe escreveu com as próprias palavras.']
  },
  {
    title: 'Escolha a metodologia', short: 'Metodologia', question: 'Como vocês vão investigar e validar o problema?', tag: 'Plano de pesquisa',
    intro: 'Explique quem será pesquisado, onde, com qual instrumento e como os dados serão organizados.',
    why: 'A metodologia mostra que a pesquisa pode ser realizada e que as conclusões terão uma base clara.',
    actions: ['Escolher pesquisa bibliográfica, documental, de campo, exploratória ou descritiva.', 'Definir abordagem qualitativa, quantitativa ou combinada.', 'Preparar entrevista, questionário, observação ou medição.', 'Definir como os dados serão analisados.'],
    example: 'Pesquisa bibliográfica sobre irrigação + entrevistas com produtores + questionário sobre frequência de irrigação e custos.',
    fields: [{ key: 'metodologia', label: 'Como vamos pesquisar?', placeholder: 'Quem será pesquisado? Onde? Qual instrumento? Como os dados serão analisados?', area: true }],
    checks: ['O tipo de pesquisa foi escolhido.', 'O público da pesquisa está definido.', 'O instrumento foi escolhido.', 'A forma de análise foi explicada.']
  },
  {
    title: 'Organize o trabalho com método ágil', short: 'Método ágil', question: 'Quais tarefas serão feitas agora, depois e ao final?', tag: 'Ritmo da equipe',
    intro: 'Use um quadro simples para visualizar o trabalho: A fazer, Em andamento e Concluído. Trabalhem em ciclos curtos e revisem o plano semanalmente.',
    why: 'Métodos ágeis ajudam a equipe a dividir responsabilidades, perceber atrasos e melhorar a proposta sem esperar o final.',
    actions: ['Listar tarefas pequenas.', 'Definir responsável e prazo.', 'Mover cada tarefa no quadro Kanban.', 'Fazer uma reunião rápida: feito, próximo passo e impedimento.'],
    example: 'A fazer: cotar sensor. Em andamento: entrevistar produtor. Concluído: definir tema.',
    fields: [{ key: 'kanban', label: 'Nosso quadro inicial', placeholder: 'A fazer:...\nEm andamento:...\nConcluído:...', area: true }],
    checks: ['As tarefas são pequenas e claras.', 'Cada tarefa tem responsável.', 'Há prazo para as próximas ações.', 'A equipe combinou uma rotina de revisão.']
  },
  {
    title: 'Desenhe o Canvas e os stakeholders', short: 'Canvas', question: 'Como a solução funcionará e quem precisa participar?', tag: 'Modelo do projeto',
    intro: 'Organize a proposta de valor, o público, os recursos, os parceiros, os custos e os canais. Liste também quem pode influenciar ou ser afetado.',
    why: 'Uma boa solução precisa fazer sentido para alguém, caber na realidade do campo e contar com parceiros ou usuários envolvidos.',
    actions: ['Definir cliente e usuário.', 'Escrever o benefício principal.', 'Listar recursos, atividades, parceiros e custos.', 'Mapear stakeholders por interesse e poder de influência.'],
    example: 'Produtor: alto interesse e alto poder. Cooperativa: alto interesse e médio poder. Fornecedor: médio interesse e médio poder.',
    fields: [{ key: 'canvas', label: 'Canvas resumido', placeholder: 'Cliente:...\nProposta de valor:...\nRecursos:...\nParceiros:...\nCustos:...', area: true }, { key: 'stakeholders', label: 'Stakeholders principais', placeholder: 'Quem influencia ou é afetado? Como será envolvido?', area: true }],
    checks: ['O cliente ou usuário está definido.', 'O benefício principal está claro.', 'Os recursos e parceiros foram listados.', 'Os stakeholders foram classificados.']
  },
  {
    title: 'Antecipe riscos e desenhe o fluxo', short: 'Riscos e layout', question: 'O que pode atrapalhar e como a solução será produzida ou operada?', tag: 'Planejamento da execução',
    intro: 'Registre riscos de prazo, custo, qualidade e adesão. Em seguida, desenhe o fluxo de materiais, pessoas, informações ou produtos.',
    why: 'Projetos viáveis consideram imprevistos e organizam o caminho da operação antes de construir.',
    actions: ['Listar pelo menos três riscos.', 'Classificar probabilidade e impacto.', 'Criar uma resposta ou prevenção.', 'Desenhar entrada, etapas, controle e saída do processo.'],
    example: 'Risco: o protótipo não funcionar. Prevenção: testar uma versão simples antes de comprar todos os componentes.',
    fields: [{ key: 'riscos', label: 'Riscos e respostas', placeholder: 'Risco — probabilidade/impacto — prevenção ou resposta', area: true }, { key: 'layout', label: 'Layout ou fluxo preliminar', placeholder: 'Entrada → etapa 1 → etapa 2 → controle de qualidade → entrega', area: true }],
    checks: ['Há pelo menos três riscos.', 'Cada risco tem uma resposta.', 'O fluxo tem começo, meio e fim.', 'A equipe indicou onde acontece o controle de qualidade.']
  },
  {
    title: 'Crie o protótipo', short: 'Protótipo', question: 'Como a ideia pode ser vista, simulada ou testada?', tag: 'Torne a ideia visível',
    intro: 'O protótipo não precisa ser perfeito. Pode ser desenho, maquete, tela, fluxograma, modelo físico ou roteiro do serviço.',
    why: 'Quando a solução fica visível, fica mais fácil receber críticas, corrigir erros e explicar o funcionamento.',
    actions: ['Escolher o formato mais simples para demonstrar a ideia.', 'Mostrar as principais funções ou etapas.', 'Registrar o que mudou entre uma versão e outra.', 'Preparar a demonstração para um usuário.'],
    example: 'Para um aplicativo, um conjunto de telas desenhadas já pode demonstrar o cadastro, o alerta de umidade e o histórico de irrigação.',
    fields: [{ key: 'prototipo', label: 'Como será nosso protótipo?', placeholder: 'Descreva ou cole o link/imagem do protótipo...', area: true }],
    checks: ['O protótipo mostra a solução funcionando.', 'O usuário consegue entender a proposta.', 'A equipe registrou limitações.', 'Há uma próxima melhoria definida.']
  },
  {
    title: 'Valide com usuários', short: 'Validação', question: 'A solução atende ao problema e pode gerar resultado?', tag: 'Teste-piloto',
    intro: 'Apresente a proposta a produtores, técnicos, colegas ou outros usuários. Colete comentários e compare a hipótese com as evidências.',
    why: 'A validação verifica se a solução é útil, compreensível e possível de adotar na realidade.',
    actions: ['Definir quem participará do teste.', 'Escolher o que será observado ou medido.', 'Coletar comentários e resultados.', 'Ajustar a solução a partir das evidências.'],
    example: 'Indicador: reduzir em 20% o consumo de água. Como medir: comparar o consumo antes e depois do teste-piloto.',
    fields: [{ key: 'validacao', label: 'Como vamos validar?', placeholder: 'Quem participará? O que será medido? Qual meta? Qual prazo?', area: true }],
    checks: ['O usuário do teste está definido.', 'Há pelo menos um indicador mensurável.', 'A equipe sabe como coletar feedback.', 'A proposta será ajustada com base no teste.']
  },
  {
    title: 'Prepare o pitch e entregue o portfólio', short: 'Pitch e entrega', question: 'Por que a banca deve acreditar e investir na proposta?', tag: 'Defesa do projeto',
    intro: 'Apresentem problema, evidências, solução, diferencial, custo, prazo, retorno e impacto. Depois, reúnam no portfólio as decisões, versões, registros e reflexões do processo.',
    why: 'O poder de convencimento vem da combinação entre clareza, pesquisa e viabilidade — e o portfólio prova que a equipe aprendeu durante o caminho.',
    actions: ['Abrir com uma pergunta ou dado.', 'Explicar o problema e como ele foi comprovado.', 'Mostrar solução, custo, prazo e benefício.', 'Terminar com um pedido: teste-piloto, parceria ou investimento.', 'Ensaiar respostas para a banca.', 'Conferir referências, indicadores e autoavaliação individual.'],
    example: '“Nosso pedido é uma parceria para testar o sistema em três propriedades durante três meses e medir a economia de água.” Entrega final: portfólio + projeto escrito + protótipo ou demonstração + apresentação.',
    fields: [{ key: 'pitch', label: 'Roteiro do nosso pitch', placeholder: '1. Problema\n2. Evidências\n3. Solução\n4. Viabilidade\n5. Pedido final', area: true }, { key: 'proximaAcao', label: 'Nosso próximo passo depois da entrega', placeholder: 'Se tivéssemos mais tempo, testaríamos ou melhoraríamos...', area: true }],
    checks: ['Todos os integrantes têm uma fala.', 'O pitch mostra custo e prazo.', 'Há um benefício mensurável.', 'A equipe ensaiou as perguntas da banca.', 'O portfólio mostra evolução e referências.', 'Todos fizeram a reflexão individual.']
  }
];

const storageKey = 'agroguia-progress-v1';
let state = loadState();
let currentStage = Number.isInteger(state.currentStage) ? state.currentStage : null;

function loadState() {
  try { return JSON.parse(localStorage.getItem(storageKey)) || { fields: {}, checks: {}, currentStage: null }; }
  catch { return { fields: {}, checks: {}, currentStage: null }; }
}
function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); updateSaveStatus(); updateProgress(); }
function updateSaveStatus() { const el = document.querySelector('#save-status'); if (el) { el.textContent = 'Salvo neste dispositivo'; el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); } }
function stageDone(index) { const checks = state.checks[index] || []; return checks.length === stages[index].checks.length && checks.every(Boolean); }
function completedCount() { return stages.filter((_, index) => stageDone(index)).length; }
function updateProgress() { const done = completedCount(); const percent = Math.round(done / stages.length * 100); document.querySelector('#progress-label').textContent = `${done} de ${stages.length} etapas`; document.querySelector('#progress-percent').textContent = `${percent}%`; document.querySelector('#progress-bar').style.width = `${percent}%`; }
function renderOverview() { document.querySelector('#overview-grid').innerHTML = stages.map((stage, i) => `<button class="overview-card ${currentStage === i ? 'active' : ''}" type="button" data-stage="${i}"><span class="card-number">${String(i + 1).padStart(2, '0')}</span><span><h3>${stage.short}</h3><p>${stage.question}</p></span></button>`).join(''); document.querySelectorAll('.overview-card').forEach(btn => btn.addEventListener('click', () => openStage(Number(btn.dataset.stage)))); }
function renderNav() { document.querySelector('#step-nav').innerHTML = stages.map((stage, i) => `<button class="step-nav-item ${currentStage === i ? 'active' : ''} ${stageDone(i) ? 'done' : ''}" type="button" data-stage="${i}"><span class="nav-number">${stageDone(i) ? '✓' : String(i + 1).padStart(2, '0')}</span><span class="nav-title">${stage.short}</span></button>`).join(''); document.querySelectorAll('.step-nav-item').forEach(btn => btn.addEventListener('click', () => openStage(Number(btn.dataset.stage)))); updateProgress(); }
function valueFor(key) { return state.fields[key] || ''; }
function renderField(field) { const tag = field.area ? 'textarea' : 'input'; return `<label for="field-${field.key}">${field.label}</label><${tag} id="field-${field.key}" data-field="${field.key}" placeholder="${field.placeholder}" ${field.area ? 'rows="4"' : ''}>${field.area ? escapeHTML(valueFor(field.key)) : ''}</${tag}>`; }
function escapeHTML(value) { return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])); }
function renderStage(index) { const stage = stages[index]; const checks = state.checks[index] || []; const checked = checks.filter(Boolean).length; document.querySelector('#step-content').innerHTML = `<div class="step-header"><div><span class="step-kicker">Etapa ${String(index + 1).padStart(2, '0')}</span><h2>${stage.title}</h2><p class="step-question">${stage.question}</p></div><span class="step-badge">${stage.tag}</span></div><div class="step-body"><div class="step-columns"><div><div class="content-block"><h3>O que fazer</h3><p>${stage.intro}</p><ul>${stage.actions.map(action => `<li>${action}</li>`).join('')}</ul></div><div class="content-block"><h3>Por que importa</h3><p>${stage.why}</p></div><div class="example-card"><p>${stage.example}</p></div></div><div class="action-card"><h3>Registre aqui</h3><p class="field-hint">Escreva com as palavras da equipe. As respostas ficam salvas neste navegador.</p>${stage.fields.map(renderField).join('')}<div class="checklist"><div class="checklist-title"><span>Checklist da etapa</span><span class="check-count">${checked}/${stage.checks.length}</span></div>${stage.checks.map((item, i) => `<label class="check-item ${checks[i] ? 'checked' : ''}"><input type="checkbox" data-check="${i}" ${checks[i] ? 'checked' : ''}><span>${item}</span></label>`).join('')}</div></div></div><div class="step-footer"><button class="outline-button" type="button" data-prev ${index === 0 ? 'disabled' : ''}>← Etapa anterior</button><button class="primary-button" type="button" data-next>${index === stages.length - 1 ? 'Revisar projeto' : 'Próxima etapa'} <span aria-hidden="true">→</span></button></div></div>`;
  document.querySelectorAll('[data-field]').forEach(field => field.addEventListener('input', event => { state.fields[event.target.dataset.field] = event.target.value; saveState(); }));
  document.querySelectorAll('[data-check]').forEach(box => box.addEventListener('change', event => { if (!state.checks[index]) state.checks[index] = []; state.checks[index][Number(event.target.dataset.check)] = event.target.checked; saveState(); renderNav(); renderOverview(); renderStage(index); }));
  document.querySelector('[data-prev]').addEventListener('click', () => { if (index > 0) openStage(index - 1); });
  document.querySelector('[data-next]').addEventListener('click', () => index === stages.length - 1 ? renderReview() : openStage(index + 1));
}
function openStage(index) { currentStage = index; state.currentStage = index; saveState(); renderNav(); renderOverview(); renderStage(index); document.querySelector('#trilha').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function renderReview() { currentStage = null; state.currentStage = null; saveState(); renderNav(); renderOverview(); const done = completedCount(); const filled = Object.values(state.fields).filter(value => value && value.trim()).length; document.querySelector('#step-content').innerHTML = `<div class="step-header"><div><span class="step-kicker">Revisão final</span><h2>Seu projeto está pronto para ser defendido?</h2><p class="step-question">Use esta visão geral para encontrar o que ainda falta antes da entrega e da apresentação.</p></div><span class="step-badge">${done === stages.length ? 'Tudo conferido' : 'Última revisão'}</span></div><div class="step-body review-mode"><div class="review-summary"><div class="summary-tile"><strong>${done}/${stages.length}</strong><span>etapas concluídas</span></div><div class="summary-tile"><strong>${filled}</strong><span>respostas registradas</span></div><div class="summary-tile"><strong>${Math.round(done / stages.length * 100)}%</strong><span>progresso da trilha</span></div></div><div class="content-block"><h3>Checklist para a banca</h3><ul class="review-list">${['O problema foi comprovado com dados, fontes ou escuta.', 'A hipótese está ligada ao problema.', 'A solução explica como gera benefício.', 'Cronograma, custo e riscos foram considerados.', 'Há indicadores para medir o resultado.', 'Todos sabem explicar o projeto e responder perguntas.'].map((item, i) => `<li class="${done < stages.length && i > 2 ? 'pending' : ''}">${item}</li>`).join('')}</ul></div><div class="example-card"><p>Apresentação final: problema → evidências → solução → diferencial → custo e prazo → impacto → pedido à banca.</p></div><div class="step-footer"><button class="outline-button" type="button" id="back-to-last">← Voltar à última etapa</button><button class="primary-button" type="button" id="go-home">Voltar ao início <span aria-hidden="true">↗</span></button></div></div>`; document.querySelector('#back-to-last').addEventListener('click', () => openStage(stages.length - 1)); document.querySelector('#go-home').addEventListener('click', () => document.querySelector('#inicio').scrollIntoView({ behavior: 'smooth' })); document.querySelector('#trilha').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function resetAll() { if (!confirm('Limpar todas as respostas e checklists deste dispositivo?')) return; state = { fields: {}, checks: {}, currentStage: null }; currentStage = null; saveState(); renderNav(); renderOverview(); document.querySelector('#step-content').innerHTML = `<div class="empty-state"><span class="empty-number">01</span><p class="eyebrow">Tudo pronto para recomeçar?</p><h2>Escolha uma etapa da trilha.</h2><p>Você pode começar pelo passo 1 ou abrir diretamente o ponto em que sua equipe está.</p><button class="primary-button" id="empty-start" type="button">Abrir etapa 1 <span aria-hidden="true">→</span></button></div>`; document.querySelector('#empty-start').addEventListener('click', () => openStage(0)); }

document.addEventListener('DOMContentLoaded', () => { renderNav(); renderOverview(); if (currentStage !== null) renderStage(currentStage); document.querySelector('#start-button').addEventListener('click', () => openStage(0)); document.querySelector('#empty-start').addEventListener('click', () => openStage(0)); document.querySelector('#review-button').addEventListener('click', renderReview); document.querySelector('#reset-button').addEventListener('click', resetAll); });
