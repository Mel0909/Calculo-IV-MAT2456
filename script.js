// ---------------------------------------------------------------
// MAT2456 study site — navigation, rendering, KaTeX
// ---------------------------------------------------------------

const EXAMS = [
  { key: 'p1', data: window.DATA_P1 },
  { key: 'p2', data: window.DATA_P2 },
  { key: 'p3', data: window.DATA_P3 },
];

const SIGNATURES = {
  p1: `<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="30" x2="210" y2="30" stroke="#c9b98a" stroke-width="1" stroke-dasharray="3 4"/>
    <text x="212" y="26" font-family="JetBrains Mono, monospace" font-size="9" fill="#837d6c" text-anchor="end">L</text>
    ${[ [15,120],[35,105],[52,92],[68,80],[82,70],[95,62],[107,55],[118,49],[128,44],[137,40],[145,37],[153,35],[160,33],[167,32],[173,31],[179,30.6],[185,30.3],[191,30.1] ]
      .map(([x,y]) => `<circle cx="${x+8}" cy="${y+6}" r="3.2" fill="#2f5d50"/>`).join('')}
  </svg>`,
  p2: `<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="80" x2="210" y2="80" stroke="#ddd5bd" stroke-width="1"/>
    <path d="M 10 80 Q 30 20, 50 80 T 90 80 T 130 80 T 170 80 T 210 80" fill="none" stroke="#c9822e" stroke-width="1.4" stroke-dasharray="2 3" opacity="0.55"/>
    <path d="M 10 80 Q 25 40, 40 80 T 70 80 T 100 80 T 130 80 T 160 80 T 190 80 T 210 80" fill="none" stroke="#2f5d50" stroke-width="2.2"/>
  </svg>`,
  p3: `<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="80" x2="210" y2="80" stroke="#ddd5bd" stroke-width="1" stroke-dasharray="3 4"/>
    <path d="M 10 30 C 30 30, 35 130, 55 130 C 75 130, 80 45, 100 45 C 120 45, 125 105, 145 105 C 165 105, 168 65, 188 65 C 198 65, 200 75, 210 78"
      fill="none" stroke="#2f5d50" stroke-width="2.2"/>
  </svg>`
};

let currentExam = 'p1';
let currentTopicIdx = 0;

function getExam(key){ return EXAMS.find(e => e.key === key).data; }

function renderSidebar(){
  const nav = document.getElementById('sidebarNav');
  nav.innerHTML = EXAMS.map(({key, data}) => {
    const items = data.topics.map((t, i) => `
      <div class="topic-item ${key===currentExam && i===currentTopicIdx ? 'active':''}" data-exam="${key}" data-idx="${i}">
        <span class="num">${t.number}</span>
        <span class="label">${t.title}</span>
      </div>`).join('');
    return `
      <div class="exam-group">
        <div class="exam-label">${data.examLabel} · ${data.examTitle}</div>
        ${items}
      </div>`;
  }).join('');

  renderMath(nav);

  nav.querySelectorAll('.topic-item').forEach(el => {
    el.addEventListener('click', () => {
      currentExam = el.dataset.exam;
      currentTopicIdx = parseInt(el.dataset.idx, 10);
      renderAll();
      document.getElementById('sidebar').classList.remove('open');
      window.scrollTo(0,0);
    });
  });
}

function renderTopbar(exam, topic){
  const tb = document.getElementById('topbar');
  tb.innerHTML = `
    <span class="crumb-exam">${exam.examLabel}</span>
    <span class="crumb-sep">/</span>
    <span>${exam.examTitle}</span>
    <span class="crumb-sep">/</span>
    <span class="crumb-topic">${topic.title}</span>
  `;
  renderMath(tb);
}

function renderContent(exam, topic){
  const c = document.getElementById('content');

  const exercisesHTML = topic.exercises.map((ex, i) => {
    // --- exercício dividido em letras/itens independentes ---
    if (ex.parts){
      const partsHTML = ex.parts.map((p, j) => `
        <div class="part">
          <div class="part-head">
            <span class="part-label">${p.label}</span>
            <div class="part-statement">${p.statement}</div>
            <button class="res-btn small" data-target="res-${topic.id}-${i}-${j}">Resolução</button>
          </div>
          <div class="resolution" id="res-${topic.id}-${i}-${j}">${p.resolution}</div>
        </div>
      `).join('');

      return `
        <div class="exercise ${ex.examStyle ? 'exam-style' : ''}">
          <div class="ex-head">
            <span class="ex-ref">${ex.ref}${ex.examStyle ? `<span class="tag">${ex.tag || 'síntese'}</span>` : ''}</span>
            <div class="part-tools">
              <button class="ghost-btn" data-bulk="open" data-scope="parts-${topic.id}-${i}">Abrir todas</button>
              <button class="ghost-btn" data-bulk="close" data-scope="parts-${topic.id}-${i}">Fechar todas</button>
            </div>
          </div>
          <div class="ex-body">${ex.statement}</div>
          <div class="parts" id="parts-${topic.id}-${i}">${partsHTML}</div>
        </div>
      `;
    }

    // --- exercício com resolução única ---
    return `
      <div class="exercise ${ex.examStyle ? 'exam-style' : ''}">
        <div class="ex-head">
          <span class="ex-ref">${ex.ref}${ex.examStyle ? `<span class="tag">${ex.tag || 'síntese'}</span>` : ''}</span>
          <button class="res-btn" data-target="res-${topic.id}-${i}">Resolução</button>
        </div>
        <div class="ex-body">${ex.statement}</div>
        <div class="resolution" id="res-${topic.id}-${i}">${ex.resolution}</div>
      </div>
    `;
  }).join('');

  c.innerHTML = `
    <div class="hero">
      <div class="hero-text">
        <div class="eyebrow">${exam.examLabel} · TÓPICO ${topic.number}</div>
        <h1 class="headline">${topic.title}${topic.subtitle ? ` <span class="accent">${topic.subtitle}</span>` : ''}</h1>
        <div class="intro">${topic.intro}</div>
      </div>
      <div class="hero-sig">${SIGNATURES[currentExam]}</div>
    </div>

    <div class="meta-row">
      ${(topic.meta || exam.meta || [
        ['Curso.', 'MAT2456 — Cálculo IV'],
        ['Prova.', exam.examLabel],
        ['Fonte.', exam.listaLabel],
      ]).map(([k, v]) => `<span><b>${k}</b> ${v}</span>`).join('')}
    </div>

    <div class="ex-section-title">${topic.sectionTitle || 'Exercícios do tópico'}</div>
    ${exercisesHTML}
  `;

  c.querySelectorAll('.res-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const showing = target.classList.toggle('show');
      btn.classList.toggle('open', showing);
      btn.textContent = showing ? 'Ocultar' : 'Resolução';
      if (showing) renderMath(target);
    });
  });

  c.querySelectorAll('.ghost-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const open = btn.dataset.bulk === 'open';
      document.getElementById(btn.dataset.scope)
        .querySelectorAll('.res-btn').forEach(b => {
          const target = document.getElementById(b.dataset.target);
          if (target.classList.contains('show') === open) return;
          target.classList.toggle('show', open);
          b.classList.toggle('open', open);
          b.textContent = open ? 'Ocultar' : 'Resolução';
          if (open) renderMath(target);
        });
    });
  });

  renderMath(c);
}

function renderMath(el){
  if (window.renderMathInElement){
    renderMathInElement(el, {
      delimiters: [
        {left:'$$', right:'$$', display:true},
        {left:'$', right:'$', display:false}
      ],
      throwOnError:false
    });
  }
}

function renderAll(){
  const exam = getExam(currentExam);
  const topic = exam.topics[currentTopicIdx];
  renderSidebar();
  renderTopbar(exam, topic);
  renderContent(exam, topic);
}

document.getElementById('sidebarToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

renderAll();