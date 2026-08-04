// ==================================================================
// P1 — Lista 1: Sequências e Séries Numéricas
// ==================================================================
window.DATA_P1 = {
  examLabel: 'P1',
  examTitle: 'Sequências e Séries Numéricas',
  listaLabel: '1ª Lista de Exercícios (2º sem. 2026)',
  topics: [

  // ---------------------------------------------------------------
  {
    id: 'p1-t1', number: '01',
    title: 'Sequências Numéricas',
    subtitle: '— definição, limites e convergência',
    intro: String.raw`
      <p>Uma <strong>sequência</strong> é uma função $a:\mathbb{N}\to\mathbb{R}$, escrita $(a_n)_{n\in\mathbb{N}}$. Dizemos que $(a_n)$ <strong>converge</strong> para $L\in\mathbb{R}$ quando, para todo $\varepsilon&gt;0$, existe $N\in\mathbb{N}$ tal que $n\ge N \Rightarrow |a_n-L|&lt;\varepsilon$. Se não existe tal $L$, a sequência <strong>diverge</strong>.</p>
      <p>Duas ferramentas resolvem quase todos os limites desta lista: as <strong>propriedades algébricas do limite</strong> (soma, produto, quociente de sequências convergentes) e o <strong>Teorema do Confronto</strong> — se $a_n\le c_n\le b_n$ a partir de algum $N$ e $a_n,b_n\to L$, então $c_n\to L$.</p>
      <p>Vale lembrar também: (i) toda sequência <strong>monótona e limitada</strong> converge; (ii) se duas subsequências de $(a_n)$ têm limites diferentes, a sequência diverge; (iii) limites notáveis como $\sqrt[n]{n}\to1$, $\sqrt[n]{a}\to1$ ($a&gt;0$), $\dfrac{n^\alpha}{e^n}\to0$ e $\left(1+\tfrac{c}{n}\right)^n\to e^c$ aparecem o tempo todo.</p>
    `,
    exercises: [
      {
        ref: 'Lista 1 · Item II',
        statement: String.raw`<p>(Teorema do Confronto) Sejam $(a_n)_{n\in\mathbb N}$ e $(b_n)_{n\in\mathbb N}$ sequências convergentes para $a\in\mathbb R$. Seja $(c_n)_{n\in\mathbb N}$ outra sequência para a qual existe $N\in\mathbb N$ tal que $a_n\le c_n\le b_n$ para todo $n\ge N$. Prove que $(c_n)_{n\in\mathbb N}$ converge para $a$.</p>`,
        resolution: String.raw`
          <span class="step-label">Passo 1 — o alvo</span>
          <p>Dado $\varepsilon&gt;0$ qualquer, queremos $N_0$ tal que $n\ge N_0\Rightarrow|c_n-a|&lt;\varepsilon$.</p>
          <span class="step-label">Passo 2 — usando as duas convergências</span>
          <p>Como $a_n\to a$: existe $N_1$ com $n\ge N_1\Rightarrow a-\varepsilon&lt;a_n&lt;a+\varepsilon$. Como $b_n\to a$: existe $N_2$ com $n\ge N_2\Rightarrow a-\varepsilon&lt;b_n&lt;a+\varepsilon$.</p>
          <span class="step-label">Passo 3 — encaixando $c_n$</span>
          <p>Tome $N_0=\max\{N,N_1,N_2\}$. Para todo $n\ge N_0$ valem, simultaneamente, $a_n\le c_n\le b_n$, $a_n&gt;a-\varepsilon$ e $b_n&lt;a+\varepsilon$. Logo:</p>
          $$a-\varepsilon&lt;a_n\le c_n\le b_n&lt;a+\varepsilon \;\Longrightarrow\; |c_n-a|&lt;\varepsilon.$$
          <div class="final">Como $\varepsilon&gt;0$ era arbitrário, concluímos $c_n\to a$. $\blacksquare$</div>
        `
      },
      {
        ref: 'Lista 1 · Item III',
        statement: String.raw`
          <p>Decida se cada sequência abaixo converge ou diverge; se convergir, calcule o limite.</p>
          <ol>
            <li>$0,\ \tfrac12,\ \tfrac23,\ \tfrac34,\ \tfrac45,\dots$</li>
            <li>$1,\ \tfrac12,\ 1,\ \tfrac14,\ 1,\ \tfrac18,\dots$</li>
            <li>$\tfrac12,\ -\tfrac12,\ \tfrac14,\ -\tfrac34,\ \tfrac18,\ -\tfrac78,\dots$</li>
            <li>$a_n=\left(4+\tfrac1n\right)^{1/2}$</li>
            <li>$c_k=\dfrac{\sqrt{k+1}}{k-1},\ k\ge2$</li>
            <li>$a_n=\dfrac{n^3+3n+1}{4n^3+2}$</li>
            <li>$a_n=\sqrt{n+1}-\sqrt n$</li>
            <li>$a_n=\dfrac{n+(-1)^n}{n-(-1)^n}$</li>
            <li>$a_n=\dfrac{2n}{n+1}-\dfrac{n+1}{2n}$</li>
            <li>$a_n=n\left(\sqrt{n^2+1}-n\right)$</li>
            <li>$a_n=\dfrac{\sin n}{n}$</li>
            <li>$a_n=\sin n;\quad b_n=\sin(n\pi);\quad c_n=\sin\!\left(\dfrac{n\pi}{2}\right)$</li>
            <li>$a_n=\dfrac{2n+\sin n}{5n+1}$</li>
            <li>$a_n=\dfrac{(n+3)!-n!}{(n+4)!}$</li>
            <li>$a_n=\sqrt[n]{n^2+n}$</li>
            <li>$a_n=\dfrac{n\sin(n!)}{n^2+1}$</li>
            <li>$a_n=\dfrac{3^n}{2^n+10^n}$</li>
            <li>$a_n=\left(\dfrac{n+2}{n+1}\right)^n$</li>
            <li>$a_n=\dfrac{(n+1)^n}{n^{n+1}}$</li>
            <li>$a_n=n\,a^n,\ a\in\mathbb R$</li>
            <li>$a_n=\dfrac{n!}{n^n}$</li>
            <li>$a_n=n-n^2\sin\dfrac1n$</li>
            <li>$a_n=(-1)^n+\dfrac{(-1)^n}{n}$</li>
            <li>$a_n=\sqrt[n]{a^n+b^n},\ 0&lt;a&lt;b$</li>
            <li>$a_n=\left(1-\tfrac12\right)\left(1-\tfrac13\right)\cdots\left(1-\tfrac1n\right)$</li>
            <li>$a_n=\left(1-\tfrac1{2^2}\right)\left(1-\tfrac1{3^2}\right)\cdots\left(1-\tfrac1{n^2}\right)$</li>
            <li>$a_n=\dfrac1n\cdot\dfrac{1\cdot3\cdot5\cdots(2n-1)}{2\cdot4\cdot6\cdots(2n)}$</li>
            <li>$a_n=\sqrt[n]{n}$</li>
            <li>$a_n=\dfrac{n^\alpha}{e^n},\ \alpha\in\mathbb R$</li>
            <li>$a_n=\dfrac{\ln n}{n^a},\ a&gt;0$</li>
            <li>$a_n=\sqrt[n]{n!}$</li>
            <li>$a_n=\sqrt[n]{a},\ a&gt;0$</li>
            <li>$a_n=\left(\dfrac{n-1}{n}\right)^n$</li>
            <li>$a_n=\left(\dfrac{n+1}{n}\right)^{n^2}$</li>
            <li>$a_n=\left(\dfrac{n+1}{n}\right)^{\sqrt n}$</li>
            <li>$a_n=\left(\dfrac{3n+5}{5n+11}\right)^n$</li>
            <li>$a_n=\left(\dfrac{3n+5}{5n+1}\right)^n\left(\dfrac53\right)^n$</li>
            <li>$a_n=\left(1+\dfrac1{n^2}\right)^n$</li>
          </ol>
        `,
        resolution: String.raw`
          <p>A técnica muda pouco: divida pelo maior termo, racionalize, use o confronto para termos oscilantes limitados, ou reconheça a forma $(1+c/n)^n\to e^c$.</p>
          <table>
          <thead><tr><th>Nº</th><th>Ideia-chave</th><th>Resultado</th></tr></thead>
          <tbody>
          <tr><td>1</td><td>$a_n=1-\tfrac1n$; direto.</td><td>Converge para $1$</td></tr>
          <tr><td>2</td><td>Subsequência ímpar $\equiv1$, par $\to0$: limites distintos.</td><td>Diverge</td></tr>
          <tr><td>3</td><td>Termos ímpares $\to0$, pares $\to-1$: limites distintos.</td><td>Diverge</td></tr>
          <tr><td>4</td><td>$4+\tfrac1n\to4$; raiz é contínua.</td><td>Converge para $2$</td></tr>
          <tr><td>5</td><td>$\sqrt{k+1}\sim\sqrt k$ e $k-1\sim k$: quociente $\sim k^{-1/2}$.</td><td>Converge para $0$</td></tr>
          <tr><td>6</td><td>Divide por $n^3$: $\dfrac{1+3/n^2+1/n^3}{4+2/n^3}$.</td><td>Converge para $\tfrac14$</td></tr>
          <tr><td>7</td><td>Racionaliza: $a_n=\dfrac1{\sqrt{n+1}+\sqrt n}$.</td><td>Converge para $0$</td></tr>
          <tr><td>8</td><td>Divide por $n$: $\dfrac{1+(-1)^n/n}{1-(-1)^n/n}\to1$.</td><td>Converge para $1$</td></tr>
          <tr><td>9</td><td>Cada parcela converge à parte: $2-\tfrac12$.</td><td>Converge para $\tfrac32$</td></tr>
          <tr><td>10</td><td>Racionaliza: $a_n=\dfrac{n}{\sqrt{n^2+1}+n}$.</td><td>Converge para $\tfrac12$</td></tr>
          <tr><td>11</td><td>$|\sin n|\le1\Rightarrow|a_n|\le\tfrac1n$; confronto.</td><td>Converge para $0$</td></tr>
          <tr><td>12</td><td>$a_n=\sin n$ não tem limite; $b_n\equiv0$; $c_n$ cicla $1,0,-1,0,\dots$</td><td>$a_n,c_n$ divergem; $b_n\to0$</td></tr>
          <tr><td>13</td><td>Divide por $n$: $\dfrac{2+\sin n/n}{5+1/n}\to\tfrac25$.</td><td>Converge para $\tfrac25$</td></tr>
          <tr><td>14</td><td>Fatora $n!$: grau do numerador $3$ menor que o do denominador.</td><td>Converge para $0$</td></tr>
          <tr><td>15</td><td>Todo polinômio elevado a $1/n$ tende a $1$.</td><td>Converge para $1$</td></tr>
          <tr><td>16</td><td>$|\sin(n!)|\le1\Rightarrow|a_n|\le\tfrac n{n^2+1}\to0$; confronto.</td><td>Converge para $0$</td></tr>
          <tr><td>17</td><td>Divide por $10^n$: $\dfrac{(0{,}3)^n}{(0{,}2)^n+1}\to0$.</td><td>Converge para $0$</td></tr>
          <tr><td>18</td><td>$a_n=\left[(1+\tfrac1{n+1})^{n+1}\right]^{n/(n+1)}\to e^1$.</td><td>Converge para $e$</td></tr>
          <tr><td>19</td><td>$a_n=\tfrac1n(1+\tfrac1n)^n\to0\cdot e$.</td><td>Converge para $0$</td></tr>
          <tr><td>20</td><td>Se $|a|&lt;1$, $na^n\to0$ (razão $\to|a|&lt;1$); se $|a|\ge1$ diverge.</td><td>Converge para $0$ se $|a|&lt;1$</td></tr>
          <tr><td>21</td><td>Razão $a_{n+1}/a_n=(n/(n+1))^n\to e^{-1}&lt;1$.</td><td>Converge para $0$</td></tr>
          <tr><td>22</td><td>Expande $\sin(1/n)=\tfrac1n-\tfrac1{6n^3}+\cdots$: sobra $\tfrac1{6n}$.</td><td>Converge para $0$</td></tr>
          <tr><td>23</td><td>Subsequência par $\to1$, ímpar $\to-1$.</td><td>Diverge</td></tr>
          <tr><td>24</td><td>Fatora $b^n$: $a_n=b\left(1+(a/b)^n\right)^{1/n}\to b$.</td><td>Converge para $b$</td></tr>
          <tr><td>25</td><td>Produto telescópico: $\prod_{k=2}^n\tfrac{k-1}{k}=\tfrac1n$.</td><td>Converge para $0$</td></tr>
          <tr><td>26</td><td>Telescópico: $\prod\tfrac{(k-1)(k+1)}{k^2}=\tfrac12\cdot\tfrac{n+1}{n}$.</td><td>Converge para $\tfrac12$</td></tr>
          <tr><td>27</td><td>Produto de Wallis $\sim\tfrac1{\sqrt{\pi n}}$, vezes $\tfrac1n\to0$.</td><td>Converge para $0$</td></tr>
          <tr><td>28</td><td>Limite clássico $\sqrt[n]{n}\to1$.</td><td>Converge para $1$</td></tr>
          <tr><td>29</td><td>Exponencial domina qualquer potência de $n$.</td><td>Converge para $0$, $\forall\alpha$</td></tr>
          <tr><td>30</td><td>Logaritmo cresce mais devagar que qualquer potência positiva.</td><td>Converge para $0$</td></tr>
          <tr><td>31</td><td>Stirling: $\sqrt[n]{n!}\sim n/e\to\infty$.</td><td>Diverge</td></tr>
          <tr><td>32</td><td>Limite clássico $\sqrt[n]{a}\to1$.</td><td>Converge para $1$</td></tr>
          <tr><td>33</td><td>Forma $e^c$: $(1-\tfrac1n)^n\to e^{-1}$.</td><td>Converge para $\tfrac1e$</td></tr>
          <tr><td>34</td><td>$\ln a_n=n^2\ln(1+\tfrac1n)\sim n\to\infty$.</td><td>Diverge</td></tr>
          <tr><td>35</td><td>$\ln a_n=\sqrt n\ln(1+\tfrac1n)\sim\tfrac1{\sqrt n}\to0$.</td><td>Converge para $1$</td></tr>
          <tr><td>36</td><td>Base $\to\tfrac35&lt;1$ elevada a $n$.</td><td>Converge para $0$</td></tr>
          <tr><td>37</td><td>Reescreve como $\left[1+\dfrac{22/15}{n+1/5}\right]^n\to e^{22/15}$.</td><td>Converge para $e^{22/15}$</td></tr>
          <tr><td>38</td><td>$\ln a_n=n\ln(1+\tfrac1{n^2})\sim\tfrac1n\to0$.</td><td>Converge para $1$</td></tr>
          </tbody>
          </table>
        `
      },
      {
        ref: 'Lista 1 · Item IV', examStyle: true,
        statement: String.raw`
          <p>Sejam $(a_n)_{n\in\mathbb N}$ e $(b_n)_{n\in\mathbb N}$ sequências. Decida se cada afirmação é verdadeira ou falsa, justificando (com prova ou contraexemplo):</p>
          <ol>
            <li>Se $a_n\to a$ então $|a_n|\to|a|$.</li>
            <li>Se $|a_n|\to|a|$ então $a_n\to a$.</li>
            <li>Se $a_n\to a$ e $a_n\le0$ então $a\le0$.</li>
            <li>Se $a_n\to a$ e $a_n&gt;0$ então $a&gt;0$.</li>
            <li>Se $a_n\to a$ e $(b_n)$ não converge então $(a_n+b_n)$ não converge.</li>
            <li>Se $(a_n)$ e $(b_n)$ não convergem então $(a_n+b_n)$ não converge.</li>
            <li>Se $a_n\cdot b_n\to d$ então $(a_n)$ e $(b_n)$ convergem.</li>
            <li>Se $a_n\cdot b_n\to0$ então $a_n\to0$ ou $b_n\to0$.</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1 — Verdadeira</span>
          <p>Pela desigualdade triangular reversa, $\big||a_n|-|a|\big|\le|a_n-a|\to0$, logo $|a_n|\to|a|$.</p>
          <span class="step-label">2 — Falsa</span>
          <p>Contraexemplo: $a_n=(-1)^n$. Temos $|a_n|=1\to1=|a|$, mas $a_n$ oscila entre $1$ e $-1$ e não converge.</p>
          <span class="step-label">3 — Verdadeira</span>
          <p>Suponha, por absurdo, $a&gt;0$. Tomando $\varepsilon=a/2&gt;0$, existe $N$ com $a_n&gt;a-\varepsilon=a/2&gt;0$ para $n\ge N$, contradizendo $a_n\le0$. Logo $a\le0$.</p>
          <span class="step-label">4 — Falsa</span>
          <p>Contraexemplo: $a_n=\tfrac1n&gt;0$ para todo $n$, mas $a=0$, não $a&gt;0$.</p>
          <span class="step-label">5 — Verdadeira</span>
          <p>Se $(a_n+b_n)$ convergisse para $L$, então $b_n=(a_n+b_n)-a_n$ seria diferença de duas sequências convergentes, logo convergeria (para $L-a$) — contradição.</p>
          <span class="step-label">6 — Falsa</span>
          <p>Contraexemplo: $a_n=(-1)^n$, $b_n=-(-1)^n$. Ambas divergem, mas $a_n+b_n\equiv0$ converge.</p>
          <span class="step-label">7 — Falsa</span>
          <p>Contraexemplo: $a_n=n$, $b_n=\tfrac1n$. O produto $a_nb_n\equiv1\to1$, mas $(a_n)$ diverge.</p>
          <span class="step-label">8 — Falsa</span>
          <p>Contraexemplo: $a_n=1,0,1,0,\dots$ e $b_n=0,1,0,1,\dots$ (alternando). O produto $a_nb_n\equiv0\to0$, mas nem $(a_n)$ nem $(b_n)$ converge (muito menos para $0$).</p>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p1-t2', number: '02',
    title: 'O Número $e$ e Sequências Recursivas',
    subtitle: '',
    intro: String.raw`
      <p>Muitas sequências definidas por recorrência ($a_{n+1}=f(a_n)$) são resolvidas com a mesma receita: (1) mostrar que a sequência é <strong>monótona</strong>; (2) mostrar que é <strong>limitada</strong>; (3) concluir convergência pelo Teorema da Sequência Monótona; (4) tomar o limite dos dois lados da recorrência para achar o valor exato, resolvendo $L=f(L)$.</p>
      <p>Se $f$ é contínua e $a_n\to a$, então $f(a_n)\to f(a)$; como $f(a_n)=a_{n+1}\to a$ também, concluímos $f(a)=a$ — o limite é sempre um <strong>ponto fixo</strong> de $f$.</p>
    `,
    exercises: [
      {
        ref: 'Lista 1 · Item I',
        statement: String.raw`
          <p>Para cada $n\in\mathbb N$, seja $a_n=\left(1+\dfrac1n\right)^n$.</p>
          <ol>
            <li>Mostre que se $a,b\in\mathbb R$ e $0\le a&lt;b$, então $\dfrac{b^{n+1}-a^{n+1}}{b-a}&lt;(n+1)b^n$.</li>
            <li>Deduza que $b^n\big[(n+1)a-nb\big]&lt;a^{n+1}$, para todos $n\in\mathbb N$ e $a,b\in\mathbb R$ com $0\le a&lt;b$.</li>
            <li>Use $a=1+\tfrac1{n+1}$ e $b=1+\tfrac1n$ na parte (b) para mostrar que $(a_n)$ é crescente.</li>
            <li>Use $a=1$ e $b=1+\tfrac1{2n}$ na parte (b) para mostrar que $a_{2n}&lt;4$, para todo $n$.</li>
            <li>Conclua que $a_n&lt;4$ para todo $n$ e que $\lim_{n\to\infty}\left(1+\tfrac1n\right)^n$ existe.</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">(a) A desigualdade de partida</span>
          <p>Fatorando a diferença de potências:
          $$b^{n+1}-a^{n+1}=(b-a)\big(b^n+b^{n-1}a+\cdots+ba^{n-1}+a^n\big),$$
          soma de $n+1$ parcelas. Como $0\le a&lt;b$, cada parcela $b^k a^{n-k}\le b^k b^{n-k}=b^n$, e a parcela com $k&lt;n$ (que contém pelo menos um fator $a$) satisfaz a desigualdade estrita, pois $a^{n-k}&lt;b^{n-k}$ quando $n-k\ge1$. Logo a soma é estritamente menor que $(n+1)b^n$:
          $$b^{n+1}-a^{n+1}&lt;(n+1)b^n(b-a) \;\Longrightarrow\; \frac{b^{n+1}-a^{n+1}}{b-a}&lt;(n+1)b^n.$$</p>
          <span class="step-label">(b) Rearranjando</span>
          <p>Multiplicando (a) por $(b-a)&gt;0$: $b^{n+1}-a^{n+1}&lt;(n+1)b^n(b-a)$, ou seja
          $$b^{n+1}-(n+1)b^n(b-a)&lt;a^{n+1} \;\Longrightarrow\; b^n\big[b-(n+1)(b-a)\big]&lt;a^{n+1}\;\Longrightarrow\; b^n\big[(n+1)a-nb\big]&lt;a^{n+1}.$$</p>
          <span class="step-label">(c) $(a_n)$ é crescente</span>
          <p>Com $a=1+\tfrac1{n+1}$, $b=1+\tfrac1n$: $(n+1)a=(n+1)+1=n+2$ e $nb=n+1$, logo $(n+1)a-nb=1$. A desigualdade (b) vira
          $$b^n\cdot1&lt;a^{n+1} \;\Longrightarrow\; \left(1+\tfrac1n\right)^n&lt;\left(1+\tfrac1{n+1}\right)^{n+1},$$
          isto é, $a_n&lt;a_{n+1}$: a sequência é estritamente crescente.</p>
          <span class="step-label">(d) $a_{2n}&lt;4$</span>
          <p>Com $a=1$, $b=1+\tfrac1{2n}$ (usando $n$ como o índice livre da parte (b)): $(n+1)\cdot1-n\left(1+\tfrac1{2n}\right)=n+1-n-\tfrac12=\tfrac12$. A desigualdade (b) vira $b^n\cdot\tfrac12&lt;1$, ou seja $\left(1+\tfrac1{2n}\right)^n&lt;2$. Elevando ao quadrado:
          $$a_{2n}=\left(1+\tfrac1{2n}\right)^{2n}=\left[\left(1+\tfrac1{2n}\right)^n\right]^2&lt;2^2=4.$$</p>
          <span class="step-label">(e) Conclusão: convergência</span>
          <p>Como $(a_n)$ é crescente (item c), $a_n\le a_{2n}$ para todo $n$ (pois $2n\ge n$ e a sequência cresce). Logo $a_n\le a_{2n}&lt;4$ para todo $n$: a sequência é limitada superiormente por $4$.</p>
          <div class="final">$(a_n)$ é crescente e limitada por $4$ ⟹ pelo Teorema da Sequência Monótona, $\lim_{n\to\infty}\left(1+\tfrac1n\right)^n$ existe (e é, de fato, o número $e\approx2{,}71828$). $\blacksquare$</div>
        `
      },
      {
        ref: 'Lista 1 · Item V', examStyle: true,
        statement: String.raw`
          <ol>
            <li>Sejam $A\subset\mathbb R$, $f:A\to A$ contínua em $A$, e $a\in A$. Seja $(a_n)$ definida por $a_0\in A$, $a_{n+1}=f(a_n)$, e suponha $a_n\to a$. Prove que $f(a)=a$.</li>
            <li>Considere $a_1=\sqrt2$, $a_2=\sqrt{2\sqrt2}$, $a_3=\sqrt{2\sqrt{2\sqrt2}},\dots$ Verifique que a sequência é crescente e limitada superiormente por $2$, e calcule seu limite.</li>
            <li>Seja $x_1=\sqrt2$ e $x_{n+1}=\sqrt{2+x_n}$. Mostre que a sequência é limitada e crescente. Obtenha seu limite.</li>
            <li>(i) Um ponto $B$ de um segmento $OA$ divide-o na <strong>razão áurea</strong> se $\tfrac{OA}{OB}=\tfrac{OB}{BA}$; denota-se $\varphi=\tfrac{OA}{OB}$. Mostre que $\varphi$ é a raiz positiva de $x^2-x-1=0$.<br>(ii) (Fibonacci) $f_0=f_1=1$, $f_n=f_{n-2}+f_{n-1}$ para $n\ge2$. Prove que $x_n=\dfrac{f_{n+1}}{f_n}$ converge e que seu limite é $\varphi$.</li>
            <li>A sequência $\left(\dfrac{p_n}{q_n}\right)$ satisfaz $p_1=q_1=1$ e, para $n\ge2$, $p_n=p_{n-1}+2q_{n-1}$, $q_n=p_{n-1}+q_{n-1}$. Prove que a sequência converge e que $\lim_{n\to\infty}\dfrac{p_n}{q_n}=\sqrt2$.</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1 — Ponto fixo do limite</span>
          <p>Como $f$ é contínua em $a$ e $a_n\to a$, temos $f(a_n)\to f(a)$. Mas $f(a_n)=a_{n+1}$, e $(a_{n+1})$ é apenas $(a_n)$ deslocada em um índice, logo também converge para $a$. Por unicidade do limite, $f(a)=\lim f(a_n)=\lim a_{n+1}=a$. $\blacksquare$</p>

          <span class="step-label">2 — Radicais aninhados: $a_{n+1}=\sqrt{2a_n}$, $a_1=\sqrt2$</span>
          <p><em>Limitada por 2 (indução):</em> $a_1=\sqrt2&lt;2$. Se $a_n&lt;2$, então $a_{n+1}=\sqrt{2a_n}&lt;\sqrt4=2$.</p>
          <p><em>Crescente:</em> como $a_n&gt;0$, $a_{n+1}&gt;a_n \iff a_{n+1}^2&gt;a_n^2 \iff 2a_n&gt;a_n^2 \iff 2&gt;a_n$, o que vale por hipótese. Logo $(a_n)$ é crescente e limitada por $2$ ⟹ converge para algum $L\le2$.</p>
          <p><em>Valor do limite:</em> tomando limite em $a_{n+1}^2=2a_n$: $L^2=2L\Rightarrow L(L-2)=0\Rightarrow L=0$ ou $L=2$. Como $a_1=\sqrt2$ e a sequência é crescente, $L\ge\sqrt2&gt;0$, logo $L=2$.</p>
          <div class="final">$\displaystyle\lim_{n\to\infty}a_n=2$</div>

          <span class="step-label">3 — $x_{n+1}=\sqrt{2+x_n}$, $x_1=\sqrt2$</span>
          <p><em>Limitada por 2:</em> $x_1=\sqrt2&lt;2$; se $x_n&lt;2$, $x_{n+1}=\sqrt{2+x_n}&lt;\sqrt4=2$.</p>
          <p><em>Crescente:</em> $x_{n+1}^2-x_n^2=2+x_n-x_n^2=-(x_n-2)(x_n+1)=(2-x_n)(x_n+1)&gt;0$ pois $x_n&lt;2$ e $x_n+1&gt;0$. Logo $x_{n+1}&gt;x_n$: crescente e limitada ⟹ converge a $L\le2$.</p>
          <p><em>Valor do limite:</em> $L^2=2+L\Rightarrow L^2-L-2=0\Rightarrow(L-2)(L+1)=0\Rightarrow L=2$ (rejeitando $L=-1&lt;0$).</p>
          <div class="final">$\displaystyle\lim_{n\to\infty}x_n=2$</div>

          <span class="step-label">4(i) — Razão áurea satisfaz $x^2-x-1=0$</span>
          <p>Sem perda de generalidade $OA=1$ e $OB=x$, logo $BA=1-x$. A condição $\tfrac{OA}{OB}=\tfrac{OB}{BA}$ vira $\tfrac1x=\tfrac{x}{1-x}\Rightarrow1-x=x^2\Rightarrow x^2+x-1=0$, com raiz positiva $x=\tfrac{\sqrt5-1}2$. Então $\varphi=\tfrac{OA}{OB}=\tfrac1x=\tfrac2{\sqrt5-1}=\tfrac{2(\sqrt5+1)}4=\tfrac{1+\sqrt5}2$. Verificação direta: $\varphi^2=\tfrac{6+2\sqrt5}4=\tfrac{3+\sqrt5}2$, e $\varphi^2-\varphi-1=\tfrac{3+\sqrt5}2-\tfrac{1+\sqrt5}2-1=1-1=0$. $\blacksquare$</p>

          <span class="step-label">4(ii) — $x_n=f_{n+1}/f_n\to\varphi$</span>
          <p>A recorrência $f_n=f_{n-1}+f_{n-2}$ tem equação característica $r^2=r+1$, com raízes $\varphi=\tfrac{1+\sqrt5}2$ e $\psi=\tfrac{1-\sqrt5}2$ (note $|\psi|\approx0{,}618&lt;1$). A solução geral é $f_n=A\varphi^n+B\psi^n$; usando $f_0=f_1=1$ obtém-se $A=\varphi/\sqrt5$, $B=-\psi/\sqrt5$ (fórmula de Binet):
          $$f_n=\frac{\varphi^{n+1}-\psi^{n+1}}{\sqrt5}.$$
          Logo
          $$x_n=\frac{f_{n+1}}{f_n}=\frac{\varphi^{n+2}-\psi^{n+2}}{\varphi^{n+1}-\psi^{n+1}}=\varphi\cdot\frac{1-(\psi/\varphi)^{n+2}}{1-(\psi/\varphi)^{n+1}}.$$
          Como $|\psi/\varphi|&lt;1$, $(\psi/\varphi)^n\to0$, e portanto $x_n\to\varphi\cdot\tfrac{1-0}{1-0}=\varphi$. $\blacksquare$</p>

          <span class="step-label">5 — $p_n/q_n\to\sqrt2$</span>
          <p>Seja $r_n=p_n/q_n$. Dividindo as recorrências: $r_n=\dfrac{p_{n-1}+2q_{n-1}}{p_{n-1}+q_{n-1}}=\dfrac{r_{n-1}+2}{r_{n-1}+1}$, com $r_1=1$ e $r_n&gt;0$ para todo $n$ (indução imediata, já que $p_n,q_n&gt;0$).</p>
          <p>O ponto fixo $L=\tfrac{L+2}{L+1}$ dá $L^2=2\Rightarrow L=\sqrt2$. Para mostrar convergência, estimamos a distância ao ponto fixo:
          $$r_n-\sqrt2=\frac{r_{n-1}+2-\sqrt2(r_{n-1}+1)}{r_{n-1}+1}=\frac{(1-\sqrt2)(r_{n-1}-\sqrt2)}{r_{n-1}+1}$$
          (após simplificar algebricamente o numerador). Como $r_{n-1}+1&gt;1$ e $|1-\sqrt2|=\sqrt2-1&lt;1$:
          $$|r_n-\sqrt2|&lt;(\sqrt2-1)\,|r_{n-1}-\sqrt2|.$$
          Iterando, $|r_n-\sqrt2|&lt;(\sqrt2-1)^{n-1}|r_1-\sqrt2|\to0$, pois $0&lt;\sqrt2-1&lt;1$.</p>
          <div class="final">$\displaystyle\lim_{n\to\infty}\frac{p_n}{q_n}=\sqrt2$ $\blacksquare$</div>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p1-t3', number: '03',
    title: 'Séries Numéricas',
    subtitle: '— convergência básica, telescópicas e somas notáveis',
    intro: String.raw`
      <p>Uma série $\sum a_n$ converge quando a sequência de somas parciais $S_N=\sum_{n=1}^N a_n$ converge. Se $\sum a_n$ converge, então necessariamente $a_n\to0$ (condição necessária, não suficiente — a harmônica $\sum1/n$ diverge mesmo com $a_n\to0$).</p>
      <p>Séries <strong>telescópicas</strong> ($a_n=f(n)-f(n+1)$) são as mais fáceis de somar: a soma parcial colapsa e sobra apenas o início e o limite de $f$. Séries <strong>geométricas</strong> $\sum r^n$ convergem sse $|r|&lt;1$, com soma $\tfrac{\text{1º termo}}{1-r}$.</p>
    `,
    exercises: [
      {
        ref: 'Lista 1 · Item VI',
        statement: String.raw`
          <p>Verifique a convergência ou divergência das sequências (somas parciais) abaixo:</p>
          <ol>
            <li>$s_n=\displaystyle\sum_{r=1}^n\frac1{r^3}$</li>
            <li>$s_n=\displaystyle\sum_{r=1}^n\frac1{e^r}$</li>
            <li>$s_n=\displaystyle\sum_{r=3}^n\frac1{\ln r}$</li>
            <li>$a_n=\dfrac{2\cdot4\cdot6\cdots(2n)}{1\cdot3\cdot5\cdots(2n-1)}$</li>
            <li>$a_n=\dfrac{1\cdot3\cdot5\cdots(2n-1)}{2\cdot4\cdot6\cdots(2n)}$</li>
            <li>$a_n=\dfrac1n\cdot\dfrac{2\cdot4\cdot6\cdots(2n)}{1\cdot3\cdot5\cdots(2n-1)}$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1</span><p>$p$-série com $p=3&gt;1$ ⟹ <b>converge</b> (a soma exata é $\zeta(3)$, sem forma fechada elementar).</p>
          <span class="step-label">2</span><p>Série geométrica de razão $1/e&lt;1$: $\displaystyle\sum_{r=1}^\infty\left(\frac1e\right)^r=\frac{1/e}{1-1/e}=\frac1{e-1}$. <b>Converge para $\tfrac1{e-1}$</b>.</p>
          <span class="step-label">3</span><p>Para $r\ge3$, $\ln r&lt;r$, logo $\tfrac1{\ln r}&gt;\tfrac1r$. Como $\sum\tfrac1r$ (harmônica) diverge, por comparação <b>diverge</b>.</p>
          <span class="step-label">4, 5, 6 — via $\ln a_n$ (dica do enunciado)</span>
          <p>Escreva $R_n=\dfrac{2\cdot4\cdots(2n)}{1\cdot3\cdots(2n-1)}=\prod_{k=1}^n\dfrac{2k}{2k-1}$. Então
          $$\ln R_n=\sum_{k=1}^n\ln\!\left(1+\frac1{2k-1}\right)\sim\sum_{k=1}^n\frac1{2k-1},$$
          uma cauda de série harmônica, que diverge para $+\infty$. Logo $\ln R_n\to\infty\Rightarrow R_n\to\infty$: <b>item 4 diverge</b>.</p>
          <p>Item 5 é $1/R_n$, logo $\ln(1/R_n)=-\ln R_n\to-\infty\Rightarrow 1/R_n\to0$: <b>item 5 converge para $0$</b>.</p>
          <p>Para o item 6, usando Stirling ($n!\sim\sqrt{2\pi n}(n/e)^n$) obtém-se a estimativa mais fina $R_n=\dfrac{(2^n n!)^2}{(2n)!}\sim\sqrt{\pi n}$ (produto de Wallis). Logo $a_n=R_n/n\sim\sqrt{\pi n}/n=\sqrt{\pi/n}\to0$: <b>item 6 converge para $0$</b>.</p>
        `
      },
      {
        ref: 'Lista 1 · Item VII',
        statement: String.raw`<p>Expresse as seguintes dízimas periódicas como quociente de dois inteiros:</p><ol><li>$1{,}2\overline{9}$</li><li>$0{,}3\overline{117}$</li></ol>
        <p style="font-size:13px;color:var(--gray)">(a formatação da barra de periodicidade se perdeu no PDF original; assumimos aqui que "9" e "117" são as partes que se repetem — o método é o que importa.)</p>`,
        resolution: String.raw`
          <span class="step-label">1 — $x=1{,}2999\ldots$</span>
          <p>$10x=12{,}999\ldots$ e $100x=129{,}999\ldots$ Subtraindo $100x-10x=90x$: $90x=129{,}999\ldots-12{,}999\ldots=117$. Logo $x=\dfrac{117}{90}=\dfrac{13}{10}=1{,}3$ — de fato, $1{,}2\overline9=1{,}3$, um clássico exemplo de que dízima em $9$ "fecha" a casa anterior.</p>
          <div class="final">$1{,}2\overline9=\dfrac{13}{10}$</div>
          <span class="step-label">2 — $x=0{,}3117117117\ldots$</span>
          <p>Isole a parte não-periódica multiplicando por $10$: $10x=3{,}\overline{117}=3+0{,}\overline{117}$. Como $0{,}\overline{117}=\dfrac{117}{999}=\dfrac{13}{111}$ (dividindo por $\gcd(117,999)=9$):
          $$10x=3+\frac{13}{111}=\frac{333+13}{111}=\frac{346}{111}\;\Longrightarrow\;x=\frac{346}{1110}=\frac{173}{555}.$$</p>
          <div class="final">$0{,}3\overline{117}=\dfrac{173}{555}$</div>
        `
      },
      {
        ref: 'Lista 1 · Item VIII',
        statement: String.raw`<p>Seja $(a_i)$ uma sequência qualquer de dígitos $0,1,2,\dots,9$. Mostre que a série $\displaystyle\frac{a_1}{10}+\frac{a_2}{100}+\cdots+\frac{a_n}{10^n}+\cdots$ é convergente.</p>`,
        resolution: String.raw`
          <span class="step-label">Comparação com geométrica</span>
          <p>Como $0\le a_i\le9$ para todo $i$, temos $0\le\dfrac{a_i}{10^i}\le\dfrac9{10^i}$. As somas parciais $S_N=\sum_{i=1}^N\tfrac{a_i}{10^i}$ satisfazem
          $$0\le S_N\le9\sum_{i=1}^N\left(\frac1{10}\right)^i&lt;9\sum_{i=1}^\infty\left(\frac1{10}\right)^i=9\cdot\frac{1/10}{1-1/10}=9\cdot\frac19=1.$$</p>
          <div class="final">$(S_N)$ é crescente (termos $a_i/10^i\ge0$) e limitada por $1$ ⟹ pelo Teorema da Sequência Monótona, a série converge. $\blacksquare$</div>
        `
      },
      {
        ref: 'Lista 1 · Item IX',
        statement: String.raw`<p>Seja $(a_n)$ uma sequência de números positivos tal que $\sum a_n$ diverge. Mostre que $\displaystyle\sum\frac{a_n}{1+a_n}$ também diverge.</p>`,
        resolution: String.raw`
          <span class="step-label">Passo 1 — por absurdo</span>
          <p>Suponha que $\sum\tfrac{a_n}{1+a_n}$ convirja. Então seus termos tendem a $0$: $\tfrac{a_n}{1+a_n}\to0$. Como $x\mapsto\tfrac{x}{1+x}$ é contínua, crescente e só se anula em $x=0$, isso força $a_n\to0$.</p>
          <span class="step-label">Passo 2 — comparação a partir de certo ponto</span>
          <p>Como $a_n\to0$, existe $N$ tal que $a_n&lt;1$ para $n\ge N$, logo $1+a_n&lt;2$ e portanto
          $$\frac{a_n}{1+a_n}&gt;\frac{a_n}2,\qquad n\ge N.$$</p>
          <span class="step-label">Passo 3 — contradição</span>
          <p>Como $\sum a_n$ diverge (termos positivos ⟹ diverge para $+\infty$), $\sum\tfrac{a_n}2$ também diverge para $+\infty$. Pela desigualdade acima, $\sum\tfrac{a_n}{1+a_n}\ge\sum\tfrac{a_n}2$ termo a termo (para $n\ge N$), então $\sum\tfrac{a_n}{1+a_n}$ também diverge — contradizendo a suposição inicial.</p>
          <div class="final">Logo $\displaystyle\sum\frac{a_n}{1+a_n}$ diverge. $\blacksquare$</div>
        `
      },
      {
        ref: 'Lista 1 · Item X',
        statement: String.raw`<p>Se $\displaystyle\sum_{n=1}^\infty a_n=s$, calcule $\displaystyle\sum_{n=1}^\infty(a_n+a_{n+1})$.</p>`,
        resolution: String.raw`
          <span class="step-label">Somas parciais</span>
          <p>Seja $S_N=\sum_{n=1}^N a_n$, com $S_N\to s$. Note também que $S_{N+1}\to s$ (é a mesma sequência, deslocada). Escrevendo a soma parcial pedida:
          $$T_N=\sum_{n=1}^N(a_n+a_{n+1})=\sum_{n=1}^N a_n+\sum_{n=1}^N a_{n+1}=S_N+(S_{N+1}-a_1).$$</p>
          <span class="step-label">Limite</span>
          <p>Fazendo $N\to\infty$: $T_N\to s+(s-a_1)=2s-a_1$.</p>
          <div class="final">$\displaystyle\sum_{n=1}^\infty(a_n+a_{n+1})=2s-a_1$</div>
        `
      },
      {
        ref: 'Lista 1 · Item XIV',
        statement: String.raw`
          <p>Verifique as relações abaixo e use-as para calcular as somas (3)–(7):</p>
          <ol>
            <li>$\sum_{n=1}^\infty[f(n+1)-f(n)]=\lim_{n\to\infty}f(n)-f(1)$, se o limite existir.</li>
            <li>$\sum_{n=1}^\infty[f(n+1)-f(n-1)]=\lim_{n\to\infty}[f(n)+f(n+1)]-f(0)-f(1)$, se o limite existir.</li>
            <li>$\displaystyle\sum_{n=1}^\infty\left(\frac1n-\frac1{n+1}\right)$</li>
            <li>$\displaystyle\sum_{n=1}^\infty(-1)^n\ln\!\left(\frac n{n+2}\right)$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\left[\sin\frac1n-\sin\frac1{n+1}\right]$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac n{(n+1)!}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac1{(n+1)(n+2)\cdots(n+k)}$, $(k\ge2)$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">Relação (1)</span>
          <p>Soma parcial: $\sum_{n=1}^N[f(n+1)-f(n)]=f(N+1)-f(1)$ (telescópica). Tomando $N\to\infty$ dá a fórmula.</p>
          <span class="step-label">Relação (2)</span>
          <p>Reindexando: $\sum_{n=1}^N f(n+1)=\sum_{k=2}^{N+1}f(k)$ e $\sum_{n=1}^N f(n-1)=\sum_{k=0}^{N-1}f(k)$. Subtraindo, os termos $f(2),\dots,f(N-1)$ cancelam, sobrando $[f(N)+f(N+1)]-[f(0)+f(1)]$. Tomando $N\to\infty$ dá a fórmula.</p>
          <span class="step-label">3 — usando (1) com $g(n)=1/n$</span>
          <p>$\tfrac1n-\tfrac1{n+1}=-[g(n+1)-g(n)]$. Soma $=-\left[\lim g(n)-g(1)\right]=-[0-1]=1$.</p>
          <div class="final">Soma $=1$</div>
          <span class="step-label">4 — usando (2) com um truque de sinal</span>
          <p>Escreva $\ln\frac n{n+2}=\ln n-\ln(n+2)$ e defina $b_n=(-1)^n\ln n$. Como $(-1)^{n+2}=(-1)^n$, temos $(-1)^n\ln(n+2)=b_{n+2}$, logo o termo geral é $b_n-b_{n+2}$ — telescópico "de passo 2". A soma parcial é $(b_1+b_2)-(b_{N+1}+b_{N+2})$. Como $b_{N+1}+b_{N+2}=(-1)^{N+1}\big[\ln(N+1)-\ln(N+2)\big]\to0$ (pois $\ln\frac{N+1}{N+2}\to0$), a soma é
          $$b_1+b_2=(-1)\ln1+\ln2=\ln2.$$</p>
          <div class="final">Soma $=\ln2$</div>
          <span class="step-label">5 — usando (1) com $f(n)=\sin(1/n)$, sinal trocado</span>
          <p>$\sin\tfrac1n-\sin\tfrac1{n+1}=-[f(n+1)-f(n)]$. Soma $=-[\lim f(n)-f(1)]=-[0-\sin1]=\sin1$.</p>
          <div class="final">Soma $=\sin(1)$</div>
          <span class="step-label">6 — usando (1) com $g(n)=1/n!$</span>
          <p>$\dfrac n{(n+1)!}=\dfrac{(n+1)-1}{(n+1)!}=\dfrac1{n!}-\dfrac1{(n+1)!}=g(n)-g(n+1)$. Soma $=\lim g(n)... $ na forma da relação (1) invertida: soma $=g(1)-\lim g(n+1)=1-0=1$.</p>
          <div class="final">Soma $=1$</div>
          <span class="step-label">7 — frações parciais telescópicas</span>
          <p>Vale a identidade
          $$\frac1{(n+1)\cdots(n+k)}=\frac1{k-1}\left[\frac1{(n+1)\cdots(n+k-1)}-\frac1{(n+2)\cdots(n+k)}\right].$$
          Definindo $h(n)=\dfrac1{(n+1)\cdots(n+k-1)}$ (produto de $k-1$ fatores), o termo geral é $\tfrac1{k-1}[h(n)-h(n+1)]$, que telescopa para $\tfrac1{k-1}\big[h(1)-\lim h(n)\big]=\tfrac1{k-1}\left[\dfrac1{2\cdot3\cdots k}-0\right]=\dfrac1{k-1}\cdot\dfrac1{k!}$.</p>
          <div class="final">Soma $=\dfrac1{k!\,(k-1)}$</div>
        `
      },
      {
        ref: 'Lista 1 · Item XI', examStyle: true,
        statement: String.raw`
          <p>Decida se cada série abaixo converge; se possível, calcule a soma:</p>
          <ol>
            <li>$\displaystyle\sum_{n=0}^\infty\left(\frac1{10^n}+2^n\right)$</li>
            <li>$\displaystyle\sum_{k=0}^\infty(-1)^k t^{k/2}$, para $0&lt;t&lt;1$</li>
            <li>$\displaystyle\sum_{n=0}^\infty u^n(1+u^n)$, para $|u|&lt;1$</li>
            <li>$\displaystyle\sum_{n=0}^\infty x^n\cos\!\left(\frac{n\pi}2\right)$, para $|x|&lt;1$</li>
            <li>$\displaystyle\sum_{n=0}^\infty\sin^{2n}x$, para $|x|&lt;\pi/2$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\sum_{j=1}^n\binom nj$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\cos\!\left(\frac{n\pi}2\right)$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac1{\sqrt{n+1}+\sqrt n}$</li>
            <li>$\displaystyle\sum_{k=1}^\infty k\sin k$</li>
            <li>$\displaystyle\sum_{s=1}^\infty\cos\frac1s$</li>
            <li>$\displaystyle\sum_{k=1}^\infty\frac{2+\cos k}{k}$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1</span><p>$2^n\to\infty$: termo geral não tende a $0$. <b>Diverge.</b></p>
          <span class="step-label">2</span><p>Geométrica de razão $r=-\sqrt t$, $|r|&lt;1$: soma $=\dfrac1{1-r}=\dfrac1{1+\sqrt t}$.</p>
          <span class="step-label">3</span><p>$\sum u^n(1+u^n)=\sum u^n+\sum u^{2n}=\dfrac1{1-u}+\dfrac1{1-u^2}=\dfrac{(1+u)+1}{1-u^2}=\dfrac{2+u}{1-u^2}$.</p>
          <span class="step-label">4</span><p>$\cos(n\pi/2)$ só é não-nulo para $n$ par, $n=2m$, onde vale $(-1)^m$. Soma $=\sum_m(-x^2)^m=\dfrac1{1+x^2}$.</p>
          <span class="step-label">5</span><p>Geométrica de razão $\sin^2x&lt;1$: soma $=\dfrac1{1-\sin^2x}=\dfrac1{\cos^2x}=\sec^2x$.</p>
          <span class="step-label">6</span><p>$\sum_{j=1}^n\binom nj=2^n-1\to\infty$: termo geral não tende a $0$. <b>Diverge.</b></p>
          <span class="step-label">7</span><p>Os termos ciclam $0,-1,0,1,\dots$: não tendem a $0$. <b>Diverge.</b></p>
          <span class="step-label">8</span><p>Racionalizando, o termo é $\sqrt{n+1}-\sqrt n$; soma parcial $=\sqrt{N+1}-1\to\infty$. <b>Diverge.</b></p>
          <span class="step-label">9</span><p>$k\sin k$ não tende a $0$ (não há decaimento; $\sin k$ não se acumula em $0$). <b>Diverge.</b></p>
          <span class="step-label">10</span><p>$\cos(1/s)\to\cos0=1\ne0$: termo geral não tende a $0$. <b>Diverge.</b></p>
          <span class="step-label">11</span><p>Como $2+\cos k\ge1$, temos $\dfrac{2+\cos k}k\ge\dfrac1k$; por comparação com a harmônica, <b>diverge</b>.</p>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p1-t4', number: '04',
    title: 'Critérios de Convergência de Séries',
    subtitle: '— comparação, razão, raiz e integral',
    intro: String.raw`
      <p>Quando o termo geral não é telescópico nem geométrico, usamos critérios que comparam a série com algo conhecido: <strong>comparação</strong> (direta ou por limite), <strong>razão</strong> ($\lim|a_{n+1}/a_n|$), <strong>raiz</strong> ($\lim\sqrt[n]{|a_n|}$) e <strong>integral</strong> (quando $a_n=f(n)$ com $f$ positiva, decrescente e contínua).</p>
      <p>Estimativas assintóticas ajudam muito: $\ln(1+x)\sim x$, $1-\cos x\sim x^2/2$, e a fórmula de Stirling $n!\sim\sqrt{2\pi n}\,(n/e)^n$ resolvem boa parte dos casos abaixo.</p>
    `,
    exercises: [
      {
        ref: 'Lista 1 · Item XII',
        statement: String.raw`
          <p>É convergente ou divergente? Justifique.</p>
          <ol>
            <li>$\displaystyle\sum_{n=3}^\infty\frac1{\sqrt{n^2-4}}$</li>
            <li>$\displaystyle\sum_{n=2}^\infty\frac{\arctan n}{n^2}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac{e^{1/n}}{n^2}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac{2^n}{(n!)^\lambda}$, $\lambda&gt;0$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac{(2n)!}{(n!)^2}$</li>
            <li>$\displaystyle\sum_{n=2}^\infty\frac{\ln n}n$</li>
            <li>$\displaystyle\sum_{n=2}^\infty\frac1{n^{\ln n}}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac{\sqrt[3]{n+2}}{\sqrt[4]{n^3+3}\,\sqrt[5]{n^3+5}}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\left(1-\cos\frac1n\right)$</li>
            <li>$\displaystyle\sum_{n=2}^\infty\frac1{(\ln n)^n}$</li>
            <li>$\displaystyle\sum_{n=2}^\infty\frac{\ln n}{n^2}$</li>
            <li>$\displaystyle\sum_{n=2}^\infty\frac{\ln n}{n^p}$, $p&gt;0$</li>
            <li>$\displaystyle\sum_{n=2}^\infty\ln\!\left(1+\frac1{n^p}\right)$, $p&gt;0$</li>
            <li>$\displaystyle\sum_{n=2}^\infty\sqrt n\,\ln\!\left(\frac{n+1}n\right)$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac{n!\,3^n}{n^n}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac{n!\,e^n}{n^n}$</li>
            <li>$\displaystyle\sum_{k=1}^\infty\frac{e^{1/k}}{k^k}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty3^n\left(\frac n{n+1}\right)^{n^2}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac{n^3}{(\ln2)^n}$</li>
          </ol>
        `,
        resolution: String.raw`
          <table>
          <thead><tr><th>Nº</th><th>Critério e ideia</th><th>Conclusão</th></tr></thead>
          <tbody>
          <tr><td>1</td><td>$\sqrt{n^2-4}\sim n$: comparação no limite com $\sum1/n$ (harmônica).</td><td>Diverge</td></tr>
          <tr><td>2</td><td>$\arctan n&lt;\pi/2$ (limitado): comparação direta com $\sum1/n^2$.</td><td>Converge</td></tr>
          <tr><td>3</td><td>$e^{1/n}\le e$ (limitado): comparação direta com $\sum1/n^2$.</td><td>Converge</td></tr>
          <tr><td>4</td><td>Razão: $a_{n+1}/a_n=2/(n+1)^\lambda\to0&lt;1$, para qualquer $\lambda&gt;0$.</td><td>Converge</td></tr>
          <tr><td>5</td><td>$\binom{2n}n\sim4^n/\sqrt{\pi n}\to\infty$: termo não $\to0$.</td><td>Diverge</td></tr>
          <tr><td>6</td><td>$\ln n&gt;1$ eventualmente: comparação com harmônica (ou teste da integral).</td><td>Diverge</td></tr>
          <tr><td>7</td><td>$n^{\ln n}=e^{(\ln n)^2}$ cresce mais rápido que $n^c$ p/ qualquer $c$: comparação c/ $p$-série $p&gt;1$.</td><td>Converge</td></tr>
          <tr><td>8</td><td>Ordem: num. $\sim n^{1/3}$, denom. $\sim n^{3/4+3/5}=n^{27/20}$; termo $\sim n^{-61/60}$, $p&gt;1$.</td><td>Converge</td></tr>
          <tr><td>9</td><td>$1-\cos(1/n)\sim\tfrac1{2n^2}$: comparação c/ $\sum1/n^2$.</td><td>Converge</td></tr>
          <tr><td>10</td><td>Raiz: $\sqrt[n]{a_n}=1/\ln n\to0&lt;1$.</td><td>Converge</td></tr>
          <tr><td>11</td><td>Teste da integral: $\int\ln x/x^2\,dx$ converge.</td><td>Converge</td></tr>
          <tr><td>12</td><td>Generaliza o item 11: comparação com $p$-série.</td><td>Converge se $p&gt;1$; diverge se $p\le1$</td></tr>
          <tr><td>13</td><td>$\ln(1+x)\sim x$: termo $\sim1/n^p$, comportamento de $p$-série.</td><td>Converge se $p&gt;1$; diverge se $p\le1$</td></tr>
          <tr><td>14</td><td>$\ln(1+1/n)\sim1/n$: termo $\sim1/\sqrt n$, $p=1/2\le1$.</td><td>Diverge</td></tr>
          <tr><td>15</td><td>Razão: $a_{n+1}/a_n=3\left(\tfrac n{n+1}\right)^n\to3/e\approx1{,}10&gt;1$.</td><td>Diverge</td></tr>
          <tr><td>16</td><td>Stirling: $a_n=\dfrac{n!e^n}{n^n}\sim\sqrt{2\pi n}\to\infty$: termo não $\to0$.</td><td>Diverge</td></tr>
          <tr><td>17</td><td>Raiz: $\sqrt[k]{a_k}=e^{1/k^2}/k\to0&lt;1$.</td><td>Converge</td></tr>
          <tr><td>18</td><td>Raiz: $\sqrt[n]{a_n}=3\left(\tfrac n{n+1}\right)^n\to3/e\approx1{,}10&gt;1$.</td><td>Diverge</td></tr>
          <tr><td>19</td><td>Razão: $a_{n+1}/a_n=\left(\tfrac{n+1}n\right)^3\cdot\tfrac1{\ln2}\to\tfrac1{\ln2}\approx1{,}44&gt;1$.</td><td>Diverge</td></tr>
          </tbody>
          </table>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p1-t5', number: '05',
    title: 'Séries Alternadas',
    subtitle: '— convergência absoluta e condicional',
    intro: String.raw`
      <p>Uma série $\sum(-1)^n b_n$ com $b_n\ge0$ converge (Critério de Leibniz) se $b_n\to0$ e $(b_n)$ é eventualmente decrescente. Ela é <strong>absolutamente convergente</strong> se $\sum|a_n|$ converge; caso contrário, mas com $\sum a_n$ convergente, é <strong>condicionalmente convergente</strong>. Cuidado com dois tipos de "pegadinha": expressões que parecem alternadas mas na verdade têm sinal constante (ex.: $(-1)^{2n+1}$), e séries de sinal constante que são automaticamente absolutamente convergentes quando convergem.</p>
    `,
    exercises: [
      {
        ref: 'Lista 1 · Item XIII', examStyle: true,
        statement: String.raw`
          <p>Decida se a série converge absolutamente, condicionalmente, ou diverge:</p>
          <ol>
            <li>$\displaystyle\sum_{n=1}^\infty(-1)^n\frac1{\sqrt n}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac1{n^{3/2}}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty(-1)^n\frac{2n^2+1}{n^3+3}$</li>
            <li>$\displaystyle\sum_{n=2}^\infty(-1)^n\frac1{\ln n}$</li>
            <li>$\displaystyle\sum_{n=2}^\infty(-1)^n\frac{\ln n}n$</li>
            <li>$\displaystyle\sum_{n=2}^\infty(-1)^n\frac1{n(\ln n)^2}$</li>
            <li>$\displaystyle\sum_{n=2}^\infty(-1)^n\frac{\sqrt n}{\ln n}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty(-1)^{2n+1}\frac1{\sqrt n}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty(-1)^n\sin\frac1{n^p}$, $p&gt;0$</li>
            <li>$\displaystyle\sum_{n=2}^\infty\frac{\ln n}{n^2}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty(-1)^n\frac{\ln n}{\sqrt n}$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1</span><p>Leibniz converge ($1/\sqrt n\downarrow0$); absoluta é $p$-série $p=\tfrac12\le1$, diverge. <b>Condicionalmente convergente.</b></p>
          <span class="step-label">2</span><p>Absoluta é $p$-série $p=\tfrac32&gt;1$: converge. <b>Absolutamente convergente.</b></p>
          <span class="step-label">3</span><p>Termo $\sim\tfrac2n\downarrow0$: Leibniz converge; absoluta compara com harmônica, diverge. <b>Condicionalmente convergente.</b></p>
          <span class="step-label">4</span><p>$1/\ln n\downarrow0$: Leibniz converge; absoluta diverge ($1/\ln n&gt;1/n$, comparação). <b>Condicionalmente convergente.</b></p>
          <span class="step-label">5</span><p>$\ln n/n\downarrow0$ eventualmente: Leibniz converge; absoluta diverge (item XII.6). <b>Condicionalmente convergente.</b></p>
          <span class="step-label">6</span><p>Absoluta $\sum1/(n(\ln n)^2)$ converge (teste da integral: $\int dx/(x(\ln x)^2)=-1/\ln x$, finito). <b>Absolutamente convergente.</b></p>
          <span class="step-label">7</span><p>$\sqrt n/\ln n\to\infty$: termo geral não tende a $0$. <b>Diverge.</b></p>
          <span class="step-label">8</span><p>Cuidado: $(-1)^{2n+1}=(-1)^{2n}\cdot(-1)=-1$ para <em>todo</em> $n$ — não é alternada! É $-\sum1/\sqrt n$, $p$-série $p=\tfrac12\le1$. <b>Diverge.</b></p>
          <span class="step-label">9</span><p>$\sin(1/n^p)\sim1/n^p\downarrow0$: Leibniz sempre converge, $\forall p&gt;0$. Absoluta é $p$-série. <b>Absolutamente convergente se $p&gt;1$; condicionalmente se $0&lt;p\le1$.</b></p>
          <span class="step-label">10</span><p>Sem sinal alternado — série de termos positivos que converge (item XII.11) é, por definição, absolutamente convergente. <b>Absolutamente convergente.</b></p>
          <span class="step-label">11</span><p>$\ln n/\sqrt n\downarrow0$ eventualmente: Leibniz converge; absoluta diverge ($\ln n/\sqrt n&gt;1/\sqrt n$, comparação). <b>Condicionalmente convergente.</b></p>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p1-t6', number: '06',
    title: 'Séries de Potências',
    subtitle: '— intervalo de convergência (introdução)',
    intro: String.raw`
      <p>Uma série de potências $\sum a_n(x-x_0)^n$ converge num intervalo simétrico em torno de $x_0$. O <strong>raio de convergência</strong> $R$ é obtido, em geral, pelo teste da razão ou da raiz aplicado a $|a_n|$; nos extremos $x=x_0\pm R$ é preciso testar caso a caso (frequentemente vira uma série numérica alternada ou uma $p$-série). Este tópico introduz a técnica que será aprofundada na P2.</p>
    `,
    exercises: [
      {
        ref: 'Lista 1 · Item XV',
        statement: String.raw`
          <p>Determine os valores de $x\in\mathbb R$ para os quais as séries convergem:</p>
          <ol>
            <li>$\displaystyle\sum_{n=1}^\infty x^n(1+x^n)$</li>
            <li>$\displaystyle\sum_{n=1}^\infty x^n\cos\!\left(\frac{n\pi}2\right)$</li>
            <li>$\displaystyle\sum_{n=2}^\infty(-1)^{n+1}\frac1{n^{\ln x}}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty n!\,x^n$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\left(x^n+\frac1{2^nx^n}\right)$</li>
            <li>$\displaystyle\sum_{n=0}^\infty(-1)^{n+1}e^{-n\sin x}$</li>
            <li>$\displaystyle\sum_{n=0}^\infty\frac{2n+1}{(n+1)^5}x^{2n}$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1</span><p>Precisamos de $\sum x^n$ e $\sum x^{2n}$ convergindo simultaneamente: ambas exigem $|x|&lt;1$ (a segunda condição é redundante).</p>
          <div class="final">$\{x:|x|&lt;1\}$</div>
          <span class="step-label">2</span><p>Como no item XI.4, os termos não-nulos correspondem a $n$ par, reduzindo a uma série geométrica de razão $-x^2$: converge sse $|x^2|&lt;1$.</p>
          <div class="final">$\{x:|x|&lt;1\}$</div>
          <span class="step-label">3</span><p>É uma "$p$-série alternada" com $p=\ln x$. Para o critério de Leibniz funcionar (termos $\to0$ decrescendo), precisamos $\ln x&gt;0$, i.e. $x&gt;1$; se $x\le1$, $\ln x\le0$ e os termos não tendem a $0$.</p>
          <div class="final">$\{x\in\mathbb R:x&gt;1\}$</div>
          <span class="step-label">4</span><p>Razão: $|a_{n+1}/a_n|=(n+1)|x|\to\infty$ para qualquer $x\ne0$.</p>
          <div class="final">$\{x=0\}$</div>
          <span class="step-label">5</span><p>Precisamos $\sum x^n$ convergir ($|x|&lt;1$, $x\ne0$) <em>e</em> $\sum(2x)^{-n}$ convergir ($|1/(2x)|&lt;1\Leftrightarrow|x|&gt;1/2$). Interseção:</p>
          <div class="final">$\left\{x:\tfrac12&lt;|x|&lt;1\right\}$</div>
          <span class="step-label">6</span><p>É geométrica de razão $r=-e^{-\sin x}$. Converge sse $|r|&lt;1\Leftrightarrow e^{-\sin x}&lt;1\Leftrightarrow\sin x&gt;0$.</p>
          <div class="final">$\{x:2k\pi&lt;x&lt;(2k+1)\pi,\ k\in\mathbb Z\}$</div>
          <span class="step-label">7</span><p>Com $y=x^2$, razão dos termos $\to y$ (teste da razão): converge para $y&lt;1$. No extremo $y=1$ (isto é $|x|=1$), o termo vira $\dfrac{2n+1}{(n+1)^5}\sim\dfrac2{n^4}$, uma $p$-série com $p=4&gt;1$: converge também na borda.</p>
          <div class="final">$\{x:|x|\le1\}$</div>
        `
      }
    ]
  }

  ]
};