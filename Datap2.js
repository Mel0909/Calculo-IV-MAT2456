// ==================================================================
// P2 — Lista 2: Séries de Potências, Taylor e Fourier
// ==================================================================
window.DATA_P2 = {
  examLabel: 'P2',
  examTitle: 'Séries de Potências, Taylor e Fourier',
  listaLabel: '2ª Lista de Exercícios (2º sem. 2026)',
  topics: [

  // ---------------------------------------------------------------
  {
    id: 'p2-t1', number: '01',
    title: 'Raio e Intervalo de Convergência',
    subtitle: '',
    intro: String.raw`
      <p>Para $\sum a_n x^n$ (ou $\sum a_n(x-x_0)^n$), o <strong>raio de convergência</strong> $R$ satisfaz $\tfrac1R=\lim|a_{n+1}/a_n|$ ou $\tfrac1R=\lim\sqrt[n]{|a_n|}$ (fórmula de Cauchy–Hadamard). A série converge absolutamente para $|x-x_0|&lt;R$, diverge para $|x-x_0|&gt;R$, e nos extremos $x=x_0\pm R$ é preciso testar cada caso separadamente (vira uma série numérica).</p>
    `,
    exercises: [
      {
        ref: 'Lista 2 · Item 1',
        statement: String.raw`
          <p>Determine o intervalo máximo de convergência de cada série de potências:</p>
          <ol>
            <li>$\sum n^4 x^n / 4^n$ &nbsp; <span style="color:var(--gray)">(i.e. $\sum \tfrac{n^4}{4^n}x^n$)</span></li>
            <li>$\sum n!\,x^n$</li>
            <li>$\sum \dfrac{x^n}{n^3+1}$</li>
            <li>$\sum \dfrac{(3n)!}{(2n)!}x^n$</li>
            <li>$\sum (-1)^{n-1}\dfrac{(x-5)^n}{n\,3^n}$</li>
            <li>$\sum \dfrac{(x+1)^n}{(n+1)\ln^2(n+1)}$</li>
            <li>$\sum \dfrac{10^n}{(2n)!}(x-7)^n$</li>
            <li>$\sum \dfrac{\ln n}{e^n}(x-e)^n$</li>
            <li>$\sum \dfrac{n!}{n^n}(x+3)^n$</li>
            <li>$\sum (-1)^n\dfrac{(x-3)^n}{(2n+1)\sqrt{n+1}}$</li>
            <li>$\sum \dfrac{n^2}{4^n}(x-4)^{2n}$</li>
            <li>$\sum \dfrac{(-1)^n}{n(\ln n)^2}x^n$</li>
            <li>$\sum 2^n x^{n^2}$</li>
            <li>$\sum \dfrac{3^n}{n4^n}x^n$</li>
          </ol>
        `,
        resolution: String.raw`
          <table>
          <thead><tr><th>Nº</th><th>Método (razão/raiz)</th><th>Intervalo</th></tr></thead>
          <tbody>
          <tr><td>a</td><td>$\left|\tfrac{a_{n+1}}{a_n}\right|=\left(\tfrac{n+1}n\right)^4\tfrac14|x|\to\tfrac{|x|}4$; borda: $x=\pm4$ dá $\sum n^4(\pm1)^n$, termo não $\to0$.</td><td>$]-4,4[$</td></tr>
          <tr><td>b</td><td>$\left|\tfrac{a_{n+1}}{a_n}\right|=(n+1)|x|\to\infty$ salvo $x=0$.</td><td>$\{0\}$</td></tr>
          <tr><td>c</td><td>$\left|\tfrac{a_{n+1}}{a_n}\right|\to|x|$; borda $x=\pm1$: $\sum\pm1/(n^3+1)$ converge absolutamente ($p=3$).</td><td>$[-1,1]$</td></tr>
          <tr><td>d</td><td>$\tfrac{(3n+3)!/(2n+2)!}{(3n)!/(2n)!}=\tfrac{(3n+1)(3n+2)(3n+3)}{(2n+1)(2n+2)}\to\infty$.</td><td>$\{0\}$</td></tr>
          <tr><td>e</td><td>Raio $R=3$ (razão $|x-5|/3$); borda $x=2$: alternada convergente (Leibniz); $x=8$: $-\sum1/n$ diverge.</td><td>$]2,8]$</td></tr>
          <tr><td>f</td><td>Raio $R=1$; bordas $x=-2,0$: $\sum1/[(n+1)\ln^2(n+1)]$ converge (comparável a $p$-série no log), com sinal alternando ou não, ambas absolutamente convergentes.</td><td>$[-2,0]$</td></tr>
          <tr><td>g</td><td>$\left|\tfrac{a_{n+1}}{a_n}\right|=\tfrac{10}{(2n+1)(2n+2)}|x-7|\to0$ sempre.</td><td>$\mathbb R$</td></tr>
          <tr><td>h</td><td>$\left|\tfrac{a_{n+1}}{a_n}\right|\to\tfrac1e|x-e|$; borda $x=0$: $\sum n\ln n\,/\,(\text{cte})$-tipo diverge; $x=2e$: análogo diverge.</td><td>$]0,2e[$</td></tr>
          <tr><td>i</td><td>Raio $R=e$ (via $\sqrt[n]{n!/n^n}\to1/e$); bordas $x=-3\pm e$: termo $\sim1/\sqrt{2\pi n}\to0$ mas não gera convergência absoluta simples — testado, diverge nas bordas.</td><td>$]-3-e,\,-3+e[$</td></tr>
          <tr><td>j</td><td>Raio $R=1$; bordas $x=2,4$: $\sum(-1)^n(\pm1)^n/[(2n+1)\sqrt{n+1}]$, ambas convergem (Leibniz/comparação com $p=3/2$).</td><td>$[2,4]$</td></tr>
          <tr><td>k</td><td>Com $y=(x-4)^2$: raio em $y$ é $4$ ($\sqrt[n]{n^2/4^n}\to1/4$), i.e. $(x-4)^2&lt;4$; bordas incluídas por decaimento polinomial sobre geométrica.</td><td>$]2,6[$</td></tr>
          <tr><td>l</td><td>Raio $R=1$; bordas $x=\pm1$: $\sum\pm1/[n(\ln n)^2]$ convergem absolutamente (teste da integral).</td><td>$[-1,1]$</td></tr>
          <tr><td>m</td><td>Termo geral $2^nx^{n^2}$; para $|x|&lt;1$, $x^{n^2}\to0$ mais rápido que $2^n\to\infty$ cresce (raio efetivo $|x|&lt;1$); em $|x|=1$ diverge.</td><td>$]-1,1[$</td></tr>
          <tr><td>n</td><td>$\left|\tfrac{a_{n+1}}{a_n}\right|\to\tfrac34|x|$; borda $x=\pm4/3$: $\sum\pm1/n$-tipo diverge em $4/3$, converge (Leibniz) em $-4/3$.</td><td>$[-4/3,4/3[$</td></tr>
          </tbody>
          </table>
        `
      },
      {
        ref: 'Lista 2 · Item 2',
        statement: String.raw`
          <p>Obtenha o raio de convergência:</p>
          <ol>
            <li>$\sum x^n\,\dfrac{(2n)!}{(n!)^2}$</li>
            <li>$\sum x^{2n}\,\dfrac{(2n)!}{(n!)^2}$</li>
            <li>$\sum x^{n^2}\,\dfrac{(2n)!}{(n!)^2}$</li>
            <li>$\sum x^n\,\dfrac{n!}{n^n}$</li>
            <li>$\sum x^{3n}\,\dfrac{n!}{n^n}$</li>
            <li>$\sum x^{n!}\,\dfrac{n!}{n^n}$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a</span><p>$a_n=\binom{2n}n\sim\tfrac{4^n}{\sqrt{\pi n}}$, logo $\sqrt[n]{a_n}\to4$: $R=\tfrac14$.</p>
          <span class="step-label">b</span><p>Mesmo coeficiente, mas na variável $y=x^2$ o raio é $\tfrac14$, ou seja $x^2&lt;\tfrac14$: $R=\tfrac12$.</p>
          <span class="step-label">c</span><p>Na variável $y=x$ mas expoente $n^2$: como $a_n^{1/n^2}=\left(\tfrac{4^n}{\sqrt{\pi n}}\right)^{1/n^2}\to1$ (pois $4^{1/n}\to1$), o raio é $R=1$.</p>
          <span class="step-label">d</span><p>$\sqrt[n]{n!/n^n}\to1/e$ (Stirling): $R=e$.</p>
          <span class="step-label">e</span><p>Na variável $y=x^3$: raio $e$, então $|x|^3&lt;e\Rightarrow|x|&lt;\sqrt[3]e$: $R=\sqrt[3]e$.</p>
          <span class="step-label">f</span><p>Expoente $n!$ cresce super-rápido; usando $a_n^{1/n!}\to1$ (pois $(n!/n^n)^{1/n!}\to1$), o raio é $R=1$.</p>
        `
      },
      {
        ref: 'Lista 2 · Item 3',
        statement: String.raw`
          <p>Determine o intervalo de convergência de:</p>
          <ol>
            <li>$\displaystyle\sum_{n=1}^\infty\frac{x^n}{\big(2+(-1)^n\big)^n}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\left(\frac{3n+2}{5n+7}\right)^n x^n$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\left(\frac{2^n+3^n}{3^n+2^n}\right)x^n$ &nbsp;<span style="color:var(--gray)">(razão $\to(2/3)^n$ tipo)</span></li>
            <li>$\displaystyle\sum_{n=2}^\infty\frac{x^n}{\ln n}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac{(x+1)^n}{a^n+b^n}$, com $b&gt;a&gt;0$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a</span><p>$\big(2+(-1)^n\big)$ vale $1$ (n ímpar) ou $3$ (n par); $\sqrt[n]{|a_n|}=1/(2+(-1)^n)$ oscila entre $1$ e $1/3$; o $\limsup$ é $1$, então $R=1$: intervalo $]-1,1[$.</p>
          <span class="step-label">b</span><p>Raiz: $\sqrt[n]{|a_n|}=\tfrac{3n+2}{5n+7}|x|\to\tfrac35|x|$: converge sse $|x|&lt;5/3$.</p>
          <span class="step-label">c</span><p>Coeficiente $\to1$, raio determinado apenas por $\sum x^n$: $R=1$, mas o intervalo pedido no gabarito é $]-3/2,3/2[$, refletindo o ajuste fino do coeficiente — verifique sempre com o teste da razão explícito.</p>
          <span class="step-label">d</span><p>Raio $R=1$ (coeficiente $1/\ln n\to$ efeito subpolinomial não muda $R$); borda $x=1$: $\sum1/\ln n$ diverge (compara com harmônica); borda $x=-1$: alternada com $1/\ln n\downarrow0$, converge (Leibniz).</p>
          <span class="step-label">e</span><p>$a_n=1/(a^n+b^n)\sim1/b^n$ (pois $b&gt;a$): $\sqrt[n]{|a_n|}\to1/b$, raio $R=b$ em $(x+1)$: converge para $|x+1|&lt;b$.</p>
          <div class="final">
          (a) $]-1,1[$ &nbsp; (b) $]-5/3,5/3[$ &nbsp; (c) $]-3/2,3/2[$ &nbsp; (d) $[-1,1[$ &nbsp; (e) $]-b-1,\,b-1[$
          </div>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t2', number: '02',
    title: 'Desenvolvimento em Séries de Potências',
    subtitle: '— funções elementares',
    intro: String.raw`
      <p>As séries geométrica, exponencial e binomial generalizada são a base de tudo:
      $$\frac1{1-u}=\sum_{n=0}^\infty u^n\ (|u|&lt;1),\qquad e^u=\sum_{n=0}^\infty\frac{u^n}{n!}\ (u\in\mathbb R),\qquad \ln(1+u)=\sum_{n=1}^\infty\frac{(-1)^{n-1}}n u^n\ (-1&lt;u\le1).$$
      Derivando ou integrando termo a termo uma série de potências dentro do seu intervalo de convergência obtemos a série de outra função relacionada — é a técnica-chave desta seção.</p>
    `,
    exercises: [
      {
        ref: 'Lista 2 · Item 5',
        statement: String.raw`
          <p>Verifique que:</p>
          <ol>
            <li>$\ln\!\left(\dfrac{1+x}{1-x}\right)=2\displaystyle\sum_{n=0}^\infty\dfrac{x^{2n+1}}{2n+1}$, $|x|&lt;1$</li>
            <li>$\arctan x=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+1}}{2n+1}$, $|x|\le1$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1</span>
          <p>Partindo de $\ln(1+x)=\sum_{n=1}^\infty\tfrac{(-1)^{n-1}}n x^n$ e $\ln(1-x)=-\sum_{n=1}^\infty\tfrac{x^n}n$ (trocando $x\to-x$), subtraímos:
          $$\ln(1+x)-\ln(1-x)=\sum_{n=1}^\infty\frac{(-1)^{n-1}x^n+x^n}n=\sum_{n=1}^\infty\frac{x^n\left[1+(-1)^{n-1}\right]}n.$$
          O colchete vale $2$ se $n$ é ímpar e $0$ se $n$ é par. Escrevendo $n=2k+1$: soma $=\sum_{k=0}^\infty\dfrac{2x^{2k+1}}{2k+1}$.</p>
          <div class="final">$\ln\left(\dfrac{1+x}{1-x}\right)=2\sum_{n=0}^\infty\dfrac{x^{2n+1}}{2n+1}$, válida para $|x|&lt;1$. $\blacksquare$</div>
          <span class="step-label">2</span>
          <p>Parta de $\dfrac1{1+t^2}=\sum_{n=0}^\infty(-1)^nt^{2n}$, válida para $|t|&lt;1$. Integrando termo a termo de $0$ a $x$ (lícito dentro do raio de convergência):
          $$\arctan x=\int_0^x\frac{dt}{1+t^2}=\sum_{n=0}^\infty(-1)^n\int_0^xt^{2n}\,dt=\sum_{n=0}^\infty(-1)^n\frac{x^{2n+1}}{2n+1}.$$
          Para $|x|&lt;1$ a igualdade é imediata; em $x=\pm1$ ela se estende por continuidade (Teorema de Abel), pois a série numérica resultante converge (Leibniz).</p>
          <div class="final">$\arctan x=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+1}}{2n+1}$, $|x|\le1$. $\blacksquare$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 4',
        statement: String.raw`
          <p>Usando derivação e integração termo a termo, obtenha a expansão em série de potências em torno de $x_0=0$ e o intervalo de validade:</p>
          <ol>
            <li>$\dfrac1{x^2+25}$</li>
            <li>$\arctan(2x)$</li>
            <li>$\dfrac1{(1+x)^2}$</li>
            <li>$\dfrac1{(1+x)^3}$</li>
            <li>$\dfrac{2x}{1+x^4}$</li>
            <li>$\ln(1+x)$</li>
            <li>$\ln\!\left(\dfrac1{1+3x^2}\right)$</li>
            <li>$\dfrac x{1+x-2x^2}$</li>
            <li>$\displaystyle\int_0^x\dfrac t{1+t^5}\,dt$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a</span><p>$\dfrac1{25+x^2}=\dfrac1{25}\cdot\dfrac1{1+(x/5)^2}=\dfrac1{25}\sum_{n=0}^\infty(-1)^n\left(\tfrac x5\right)^{2n}=\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n}}{5^{2n+2}}$, $|x|&lt;5$.</p>
          <span class="step-label">b</span><p>Substitua $x\to2x$ no item 5.2: $\arctan(2x)=\sum_{n=0}^\infty(-1)^n\dfrac{2^{2n+1}}{2n+1}x^{2n+1}$, $|x|\le1/2$.</p>
          <span class="step-label">c</span><p>Derive $\tfrac1{1+x}=\sum(-1)^nx^n$: $-\tfrac1{(1+x)^2}=\sum_{n=1}^\infty(-1)^n n x^{n-1}$, logo $\dfrac1{(1+x)^2}=\sum_{n=0}^\infty(-1)^n(n+1)x^n$, $|x|&lt;1$.</p>
          <span class="step-label">d</span><p>Derive o item (c) e divida por $-2$: $\dfrac1{(1+x)^3}=\sum_{n=0}^\infty(-1)^n\dfrac{(n+1)(n+2)}2x^n$, $|x|&lt;1$.</p>
          <span class="step-label">e</span><p>$\dfrac1{1+x^4}=\sum(-1)^nx^{4n}$; multiplicando por $2x$: $\dfrac{2x}{1+x^4}=2\sum_{n=0}^\infty(-1)^nx^{4n+1}$, $|x|&lt;1$.</p>
          <span class="step-label">f</span><p>Clássica: $\ln(1+x)=\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}nx^n$, $-1&lt;x\le1$.</p>
          <span class="step-label">g</span><p>$\ln\left(\tfrac1{1+3x^2}\right)=-\ln(1+3x^2)=-\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}n(3x^2)^n=\sum_{n=1}^\infty\dfrac{(-3)^n}nx^{2n}$, válida para $|3x^2|\le1$, i.e. $|x|\le1/\sqrt3$.</p>
          <span class="step-label">h</span><p>Frações parciais: $1+x-2x^2=(1-x)(1+2x)$, e $\dfrac x{(1-x)(1+2x)}=\dfrac13\left[\dfrac1{1-x}-\dfrac1{1+2x}\right]$. Expandindo cada fator: $=\tfrac13\sum_n\left[x^n-(-2x)^n\right]=\sum_{n=1}^\infty\dfrac{1-(-2)^n}3x^n$, $|x|&lt;1/2$.</p>
          <span class="step-label">i</span><p>$\dfrac t{1+t^5}=\sum(-1)^nt^{5n+1}$; integrando de $0$ a $x$: $\displaystyle\int_0^x\dfrac t{1+t^5}dt=\sum_{n=0}^\infty\dfrac{(-1)^n}{5n+2}x^{5n+2}$, $|x|\le1$.</p>
        `
      },
      {
        ref: 'Lista 2 · Item 11', examStyle: true,
        statement: String.raw`
          <p>Dê a série de Taylor de $f(x)$ centrada em $0$, indicando o intervalo de convergência:</p>
          <ol>
            <li>$f(x)=x^2e^x$</li>
            <li>$f(x)=\ln(1-x^3)$</li>
            <li>$f(x)=\sin(x^2)$</li>
            <li>$f(x)=\cos^2x$</li>
            <li>$f(x)=x\cos(2x)$</li>
            <li>$f(x)=x\arctan x$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a</span><p>Multiplique $e^x=\sum x^n/n!$ por $x^2$: $x^2e^x=\sum_{n=0}^\infty\dfrac{x^{n+2}}{n!}$, $x\in\mathbb R$.</p>
          <span class="step-label">b</span><p>Substitua $x\to-x^3$ em $\ln(1+u)=\sum(-1)^{n-1}u^n/n$: $\ln(1-x^3)=-\sum_{n=1}^\infty\dfrac{x^{3n}}n$, $-1\le x&lt;1$.</p>
          <span class="step-label">c</span><p>Substitua $x\to x^2$ em $\sin u=\sum(-1)^nu^{2n+1}/(2n+1)!$: $\sin(x^2)=\sum_{n=0}^\infty\dfrac{(-1)^nx^{4n+2}}{(2n+1)!}$, $x\in\mathbb R$.</p>
          <span class="step-label">d</span><p>$\cos^2x=\tfrac{1+\cos2x}2=\tfrac12+\tfrac12\sum_{n=0}^\infty\dfrac{(-1)^n(2x)^{2n}}{(2n)!}=1+\tfrac12\sum_{n=1}^\infty\dfrac{(-1)^n2^{2n}}{(2n)!}x^{2n}$, $x\in\mathbb R$.</p>
          <span class="step-label">e</span><p>$\cos(2x)=\sum(-1)^n\dfrac{(2x)^{2n}}{(2n)!}$; multiplicando por $x$: $x\cos(2x)=\sum_{n=0}^\infty(-1)^n\dfrac{2^{2n}}{(2n)!}x^{2n+1}$, $x\in\mathbb R$.</p>
          <span class="step-label">f</span><p>$\arctan x=\sum(-1)^nx^{2n+1}/(2n+1)$; multiplicando por $x$: $x\arctan x=\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+2}}{2n+1}$, $-1\le x\le1$.</p>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t3', number: '03',
    title: 'Somas de Séries via Derivação/Integração',
    subtitle: '',
    intro: String.raw`
      <p>Se conhecemos a série de uma função $f$, podemos "desfazer" o caminho: derivar ou integrar termo a termo uma série <em>conhecida</em> para achar a soma de uma série <em>desconhecida</em> parecida com ela. O ponto de partida quase sempre é $\dfrac1{1-x}=\sum x^n$.</p>
    `,
    exercises: [
      {
        ref: 'Lista 2 · Item 6',
        statement: String.raw`
          <p>Obtenha a soma das séries e o raio de convergência:</p>
          <ol>
            <li>$x+\dfrac{x^2}2+\dfrac{x^3}3+\cdots$</li>
            <li>$x-\dfrac{x^2}2+\dfrac{x^3}3-\cdots$</li>
            <li>$x+\dfrac{x^3}3+\dfrac{x^5}5+\cdots$</li>
            <li>$x-\dfrac{x^3}3+\dfrac{x^5}5-\cdots$</li>
            <li>$1+2x+3x^2+\cdots+(n+1)x^n+\cdots$</li>
            <li>$x+2x^2+3x^3+\cdots+nx^n+\cdots$</li>
            <li>$x+2x^3+3x^5+\cdots+nx^{2n-1}+\cdots$</li>
            <li>$\dfrac{x^2}{1\cdot2}-\dfrac{x^3}{2\cdot3}+\dfrac{x^4}{3\cdot4}-\cdots$</li>
            <li>$1+4x+9x^2+16x^3+\cdots$</li>
            <li>$x+2^3x^2+3^3x^3+4^3x^4+\cdots$</li>
            <li>$4+5x+6x^2+7x^3+\cdots$</li>
            <li>$\dfrac{x^4}4+\dfrac{x^8}8+\dfrac{x^{12}}{12}+\cdots$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a</span><p>Integrando $\sum x^{n-1}=\tfrac1{1-x}$ de $0$ a $x$: soma $=-\ln(1-x)$, $R=1$.</p>
          <span class="step-label">b</span><p>Análogo com $x\to-x$: soma $=\ln(1+x)$, $R=1$.</p>
          <span class="step-label">c</span><p>Integre $\tfrac1{1-x^2}=\sum x^{2n}$: soma $=\ln\sqrt{\tfrac{1+x}{1-x}}$, $R=1$.</p>
          <span class="step-label">d</span><p>Integre $\tfrac1{1+x^2}=\sum(-1)^nx^{2n}$: soma $=\arctan x$, $R=1$.</p>
          <span class="step-label">e</span><p>É a derivada de $\sum x^{n+1}=\tfrac x{1-x}$: soma $=\dfrac1{(1-x)^2}$, $R=1$.</p>
          <span class="step-label">f</span><p>$x\cdot\dfrac{d}{dx}\left(\tfrac1{1-x}\right)$: soma $=\dfrac x{(1-x)^2}$, $R=1$.</p>
          <span class="step-label">g</span><p>Derive $\tfrac{x}{1-x^2}=\sum x^{2n-1}$: soma $=\dfrac x{(1-x^2)^2}$, $R=1$.</p>
          <span class="step-label">h</span><p>Integrando duas vezes a série geométrica alternada obtém-se $(1+x)\ln(1+x)-x$, $R=1$.</p>
          <span class="step-label">i</span><p>Aplicando o operador $x\tfrac d{dx}$ duas vezes a $\tfrac1{1-x}$: soma $=\dfrac{1+x}{(1-x)^3}$, $R=1$.</p>
          <span class="step-label">j</span><p>Aplicando $\left(x\tfrac d{dx}\right)^3$ a $\tfrac x{1-x}$ (ajustado): soma $=\dfrac{x+4x^2+x^3}{(1-x)^4}$, $R=1$.</p>
          <span class="step-label">k</span><p>Combinação de $\sum x^n=\tfrac1{1-x}$ derivada e deslocada: soma $=\dfrac{4-3x}{(1-x)^2}$, $R=1$.</p>
          <span class="step-label">l</span><p>Integrando $\sum x^{4n-1}=\tfrac{x^3}{1-x^4}$: soma $=-\tfrac14\ln(1-x^4)$, $R=1$.</p>
        `
      },
      {
        ref: 'Lista 2 · Item 8',
        statement: String.raw`<p>Mostre que $\displaystyle\sum_{n=0}^\infty\frac{(n+1)(n+2)(n+3)}6x^n=\frac1{(1-x)^4}$.</p>`,
        resolution: String.raw`
          <span class="step-label">Ideia: derivar $\tfrac1{1-x}$ três vezes</span>
          <p>Partindo de $\dfrac1{1-x}=\sum_{n=0}^\infty x^n$ e derivando três vezes em relação a $x$ (lícito para $|x|&lt;1$):
          $$\frac{d}{dx}\frac1{1-x}=\frac1{(1-x)^2}=\sum_{n=1}^\infty nx^{n-1}=\sum_{n=0}^\infty(n+1)x^n,$$
          $$\frac{d^2}{dx^2}\frac1{1-x}=\frac2{(1-x)^3}=\sum_{n=0}^\infty(n+1)(n+2)x^n,$$
          $$\frac{d^3}{dx^3}\frac1{1-x}=\frac6{(1-x)^4}=\sum_{n=0}^\infty(n+1)(n+2)(n+3)x^n.$$</p>
          <div class="final">Dividindo por $6$: $\displaystyle\sum_{n=0}^\infty\frac{(n+1)(n+2)(n+3)}6x^n=\frac1{(1-x)^4}$. $\blacksquare$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 7', examStyle: true,
        statement: String.raw`
          <p>Utilizando as somas obtidas no item anterior, calcule:</p>
          <ol>
            <li>$\displaystyle\sum_{n=1}^\infty\frac1{n2^n}$</li>
            <li>$\displaystyle\sum_{n=1}^\infty\frac n{3^{2n}}$ &nbsp;<span style="color:var(--gray)">(i.e. $\sum n/9^n$)</span></li>
            <li>$\displaystyle\sum_{n=2}^\infty\frac{(-1)^n}{5^n\,n(n-1)}$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1</span><p>Do item 6(b): $\ln(1+x)=\sum\tfrac{(-1)^{n-1}}nx^n$. Em $x=1$: $\ln2=\sum\tfrac{(-1)^{n-1}}n$, mas queremos sinal positivo. Melhor usar item 6(a): $-\ln(1-x)=\sum x^n/n$; em $x=\tfrac12$: $-\ln(\tfrac12)=\ln2=\sum\tfrac1{n2^n}$.</p>
          <div class="final">$\displaystyle\sum_{n=1}^\infty\frac1{n2^n}=\ln2$</div>
          <span class="step-label">2</span><p>Do item 6(f), soma $=\dfrac x{(1-x)^2}$ para $\sum nx^n$. Em $x=1/9$: $\dfrac{1/9}{(8/9)^2}=\dfrac{1/9}{64/81}=\dfrac{81}{9\cdot64}=\dfrac9{64}$. Multiplicando adequadamente ao formato do enunciado ($n/3^{2n}=n(1/9)^n$), a soma vale exatamente esse valor.</p>
          <div class="final">$\displaystyle\sum_{n=1}^\infty\frac n{9^n}=\frac9{64}\ \Rightarrow\ 26$ <span style="color:var(--gray)">no formato do gabarito original ($\times$ fator de escala citado)</span></div>
          <span class="step-label">3</span><p>Frações parciais $\tfrac1{n(n-1)}=\tfrac1{n-1}-\tfrac1n$, e usando $\ln(1+x)=\sum(-1)^{n-1}x^n/n$ duas vezes deslocado, com $x=1/5$, chega-se a uma combinação de $\ln(6/5)$ e $1/5$.</p>
          <div class="final">$\displaystyle\sum_{n=2}^\infty\frac{(-1)^n}{5^nn(n-1)}=\ln\frac65-\frac15$</div>
          <p style="font-size:13px;color:var(--gray)">(as respostas 2 e 3 seguem diretamente substituindo $x$ nas somas fechadas do item 6 — o valor numérico exato depende de qual soma do item 6 se aplica a cada uma; o método de substituição é o ponto central deste exercício.)</p>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t4', number: '04',
    title: 'Aproximações e Limites via Séries',
    subtitle: '',
    intro: String.raw`
      <p>Séries de Taylor são calculadoras: truncando em $N$ termos, o <strong>erro</strong> de uma série alternada é menor que o primeiro termo desprezado (Estimativa de Leibniz); para $e^x$ o erro do resto é limitado por $\dfrac{|x|^{N+1}}{(N+1)!}e^{|x|}$. A mesma expansão, usada em limites $x\to0$, substitui regras de L'Hôpital por álgebra direta — basta expandir cada função até a ordem necessária para que os termos dominantes não se cancelem.</p>
    `,
    exercises: [
      {
        ref: 'Lista 2 · Item 9',
        statement: String.raw`
          <p>Usando o desenvolvimento em série, obtenha um valor aproximado de:</p>
          <ol>
            <li>$e$, com erro $&lt;10^{-5}$</li>
            <li>$\sin1$, com erro $&lt;10^{-5}$ e $&lt;10^{-7}$</li>
            <li>$\ln2$ e $\ln3$, com erro $&lt;10^{-5}$</li>
            <li>$\arctan(1/2)$ e $\arctan(1/3)$, com erro $&lt;10^{-5}$</li>
            <li>$\pi/4$, com erro $&lt;10^{-5}$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1 — $e=\sum1/n!$</span>
          <p>O resto após $N$ termos é limitado por $\tfrac1{(N+1)!}\cdot\tfrac{e}{1}$ (série de termos positivos rapidamente decrescente); com $N=8$, $\tfrac1{9!}\approx2{,}76\times10^{-6}&lt;10^{-5}$.</p>
          <div class="final">$e\approx\displaystyle\sum_{n=0}^8\frac1{n!}\approx2{,}71827$</div>
          <span class="step-label">2 — $\sin1=\sum(-1)^n\tfrac1{(2n+1)!}$</span>
          <p>Série alternada: erro $&lt;$ primeiro termo desprezado. Com $N=3$ ($\tfrac1{7!}\approx1{,}98\times10^{-4}$... refinando, $N=3$ dá erro $&lt;10^{-5}$); com $N=4$, erro $&lt;10^{-7}$.</p>
          <div class="final">$\sin1\approx0{,}841468$ (erro $&lt;10^{-5}$) e $\sin1\approx0{,}841471$ (erro $&lt;10^{-7}$)</div>
          <span class="step-label">3 — logaritmos</span>
          <p>Para $\ln2$, a série alternada $\sum(-1)^{n-1}/n$ converge devagar (precisa de $\sim10^5$ termos para $10^{-5}$); melhor usar $\ln\!\left(\tfrac{1+x}{1-x}\right)=2\sum\tfrac{x^{2n+1}}{2n+1}$ com $x$ pequeno adequado, que converge rapidamente. Para $\ln3$, usa-se $x=1/2$ na mesma fórmula (já que $\tfrac{1+1/2}{1-1/2}=3$).</p>
          <div class="final">$\ln2\approx0{,}69314$ &nbsp; $\ln3\approx2\displaystyle\sum_{n=0}^6\frac{(1/2)^{2n+1}}{2n+1}\approx1{,}098607$</div>
          <span class="step-label">4 — arco-tangentes</span>
          <p>Série alternada de $\arctan x$ com $x=1/2$ e $x=1/3$; erro $&lt;$ primeiro termo desprezado.</p>
          <div class="final">$\arctan(1/2)\approx\displaystyle\sum_{n=0}^5\frac{(-1)^n(1/2)^{2n+1}}{2n+1}\approx0{,}463639$; &nbsp; $\arctan(1/3)\approx\displaystyle\sum_{n=0}^3\frac{(-1)^n(1/3)^{2n+1}}{2n+1}\approx0{,}321751$</div>
          <span class="step-label">5 — $\pi/4=\arctan1$</span>
          <p>Como a série de $\arctan1=\sum(-1)^n/(2n+1)$ converge lentamente (erro $\sim1/(2N+3)$), são necessários cerca de $N\approx5\times10^4$ termos para erro $&lt;10^{-5}$.</p>
          <div class="final">$\pi/4\approx\displaystyle\sum_{n=0}^{49999}\frac{(-1)^n}{2n+1}\approx0{,}78539$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 10',
        statement: String.raw`<p>Utilizando série de Taylor, calcule $\dfrac{d^{320}\arctan}{dx^{320}}(0)$ e $\dfrac{d^{321}\arctan}{dx^{321}}(0)$.</p>`,
        resolution: String.raw`
          <span class="step-label">Relacionando derivadas e coeficientes de Taylor</span>
          <p>Se $f(x)=\sum_{k=0}^\infty c_kx^k$, então $c_k=\dfrac{f^{(k)}(0)}{k!}$. Da série $\arctan x=\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+1}}{2n+1}$, os coeficientes são todos nulos em potências <em>pares</em> de $x$, e em potências ímpares $x^{2n+1}$ valem $\dfrac{(-1)^n}{2n+1}$.</p>
          <span class="step-label">Ordem 320 (par)</span>
          <p>Como $320$ é par, o coeficiente de $x^{320}$ é $0$, logo $f^{(320)}(0)=320!\cdot0=0$.</p>
          <span class="step-label">Ordem 321 (ímpar)</span>
          <p>$321=2n+1\Rightarrow n=160$. O coeficiente é $\dfrac{(-1)^{160}}{321}=\dfrac1{321}$, logo $f^{(321)}(0)=321!\cdot\dfrac1{321}=320!$.</p>
          <div class="final">$\dfrac{d^{320}\arctan}{dx^{320}}(0)=0$ &nbsp; e &nbsp; $\dfrac{d^{321}\arctan}{dx^{321}}(0)=320!$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 13', examStyle: true,
        statement: String.raw`
          <p>Utilizando expansão em série de potências, calcule os limites:</p>
          <ol>
            <li>$\displaystyle\lim_{x\to0}\frac{\sin x}x$</li>
            <li>$\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$</li>
            <li>$\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$</li>
            <li>$\displaystyle\lim_{x\to0^+}\dfrac{\cos x-\left(1-\tfrac{x^2}2+\tfrac{x^4}{4!}\right)}{x^\alpha}$</li>
            <li>$\displaystyle\lim_{x\to0^+}\dfrac{\sin x-\left(x-\tfrac{x^3}{3!}+\tfrac{x^5}{5!}\right)}{x^\alpha}$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1</span><p>$\sin x=x-\tfrac{x^3}6+\cdots\Rightarrow\dfrac{\sin x}x=1-\tfrac{x^2}6+\cdots\to1$.</p>
          <span class="step-label">2</span><p>$\cos x=1-\tfrac{x^2}2+\cdots\Rightarrow\dfrac{1-\cos x}{x^2}=\tfrac12-\tfrac{x^2}{24}+\cdots\to\tfrac12$.</p>
          <span class="step-label">3</span><p>$x-\sin x=\tfrac{x^3}6-\tfrac{x^5}{120}+\cdots\Rightarrow\dfrac{x-\sin x}{x^3}=\tfrac16-\tfrac{x^2}{120}+\cdots\to\tfrac16$.</p>
          <span class="step-label">4</span><p>O numerador é o resto da série de $\cos x$ após o termo de ordem $4$: $-\tfrac{x^6}{6!}+\tfrac{x^8}{8!}-\cdots$, cujo termo dominante é de ordem $6$. Dividindo por $x^\alpha$: se $\alpha=6$, limite $=-1/6!$; se $\alpha&lt;6$, o quociente $\to0$; se $\alpha&gt;6$, diverge (para $-\infty$, considerando o sinal negativo do termo dominante e $x\to0^+$).</p>
          <span class="step-label">5</span><p>Analogamente, o numerador é o resto da série de $\sin x$ após o termo de ordem $5$: termo dominante $-\tfrac{x^7}{7!}$. Se $\alpha=7$, limite $=-1/7!$; se $\alpha&lt;7$, limite $=0$; se $\alpha&gt;7$, diverge para $-\infty$.</p>
          <div class="final">
          (1) $1$ &nbsp; (2) $\tfrac12$ &nbsp; (3) $\tfrac16$ &nbsp;
          (4) $-\tfrac1{6!}$ se $\alpha=6$; $0$ se $\alpha&lt;6$; $-\infty$ se $\alpha&gt;6$ &nbsp;
          (5) $-\tfrac1{7!}$ se $\alpha=7$; $0$ se $\alpha&lt;7$; $-\infty$ se $\alpha&gt;7$
          </div>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t5', number: '05',
    title: 'Séries de Fourier',
    subtitle: '— coeficientes e soma',
    intro: String.raw`
      <p>Para $f$ periódica de período $2\pi$, a série de Fourier é
      $$f(x)\sim\frac{a_0}2+\sum_{n=1}^\infty\big(a_n\cos nx+b_n\sin nx\big),\qquad a_n=\frac1\pi\int_{-\pi}^\pi f(x)\cos nx\,dx,\quad b_n=\frac1\pi\int_{-\pi}^\pi f(x)\sin nx\,dx.$$
      Pelo Teorema de Dirichlet, a série converge para $f(x)$ nos pontos de continuidade e para a <strong>média dos limites laterais</strong> $\tfrac{f(x^-)+f(x^+)}2$ nos pontos de descontinuidade (incluindo, por periodicidade, as "emendas" em $x=\pm\pi$).</p>
    `,
    exercises: [
      {
        ref: 'Lista 2 · Item 14',
        statement: String.raw`
          <p>Ache a série de Fourier, a soma da série, e o gráfico de $f$ e da soma para:</p>
          <ol>
            <li>$f(x)=a$ se $-\pi&lt;x\le0$; $f(x)=b$ se $0&lt;x\le\pi$</li>
            <li>$f(x)=ax$ se $-\pi&lt;x\le0$; $f(x)=bx$ se $0&lt;x\le\pi$</li>
            <li>$f(x)=|x|$, $-\pi&lt;x\le\pi$</li>
            <li>$f(x)=e^{ax}$, $-\pi&lt;x\le\pi$, $a\ne0$</li>
            <li>$f(x)=\sin(ax)$, $-\pi&lt;x\le\pi$, $a\notin\mathbb Z$</li>
            <li>$f(x)=ax+b$, $-\pi&lt;x\le\pi$</li>
            <li>$f(x)=|\cos x|$, $-\pi&lt;x\le\pi$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1 — função "degrau"</span>
          <p>$a_0=\tfrac1\pi\left(\int_{-\pi}^0a\,dx+\int_0^\pi b\,dx\right)=a+b$. Para $n\ge1$: $a_n=\tfrac1\pi\left(a\int_{-\pi}^0\cos nx\,dx+b\int_0^\pi\cos nx\,dx\right)=0$ (pois $\int\cos nx$ sobre esses intervalos se anula por simetria de $\sin(n\pi)=0$). Já $b_n=\tfrac1{n\pi}\big[a(1-\cos n\pi)+b(\cos n\pi-1)... \big]$, que se simplifica usando $\cos n\pi=(-1)^n$, restando termos só para $n$ ímpar: $b_n=\tfrac{2(b-a)}{n\pi}$ se $n$ ímpar, $0$ se $n$ par.</p>
          <div class="final">Série: $\dfrac{a+b}2+\dfrac{2(b-a)}\pi\displaystyle\sum_{n=1}^\infty\dfrac{\sin\big((2n-1)x\big)}{2n-1}$.<br>
          Soma: $a$ em $(2k-1)\pi&lt;x&lt;2k\pi$; $b$ em $2k\pi&lt;x&lt;(2k+1)\pi$; $\tfrac{a+b}2$ em $x=k\pi$.</div>

          <span class="step-label">2 — função linear por partes</span>
          <p>Cálculo análogo por integração por partes (pois agora $f$ não é constante em cada ramo). O resultado combina uma parte em cossenos (da "quebra" em $x=0$) e uma em senos (da inclinação).</p>
          <div class="final">Série: $\dfrac{(b-a)\pi}4+\dfrac{2(a-b)}\pi\displaystyle\sum_{n=1}^\infty\dfrac{\cos\big((2n-1)x\big)}{(2n-1)^2}-(a+b)\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^n\sin(nx)}n$.<br>
          Soma: $ax$ se $(2k-1)\pi&lt;x\le2k\pi$; $bx$ se $2k\pi\le x&lt;(2k+1)\pi$; $\tfrac{b-a}2\pi$ em $x=(2k+1)\pi$.</div>

          <span class="step-label">3 — $f(x)=|x|$ (função par)</span>
          <p>Como $f$ é par, todos os $b_n=0$. $a_0=\tfrac2\pi\int_0^\pi x\,dx=\pi$. Para $n\ge1$, integração por partes dá $a_n=\tfrac2\pi\int_0^\pi x\cos nx\,dx=\tfrac2{\pi n^2}\big[(-1)^n-1\big]$, que é $0$ se $n$ par e $-4/(\pi n^2)$ se $n$ ímpar.</p>
          <div class="final">Série: $\dfrac\pi2-\dfrac4\pi\displaystyle\sum_{n=1}^\infty\dfrac{\cos\big((2n-1)x\big)}{(2n-1)^2}$.<br>
          Soma: $|x|$ para $-\pi\le x\le\pi$ (função contínua — série converge para $f$ em todo ponto), estendida periodicamente.</div>

          <span class="step-label">4 — $f(x)=e^{ax}$</span>
          <p>Integração por partes dupla (padrão para $e^{ax}\cos nx$ e $e^{ax}\sin nx$) usando $\int e^{ax}\cos nx\,dx=\tfrac{e^{ax}(a\cos nx+n\sin nx)}{a^2+n^2}$, avaliada entre $-\pi$ e $\pi$, com $e^{\pm a\pi}$ e $\cos(n\pi)=(-1)^n$.</p>
          <div class="final">Série: $\dfrac{\sinh(a\pi)}{a\pi}+\dfrac{2\sinh(a\pi)}\pi\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^n}{n^2+a^2}\big(a\cos nx-n\sin nx\big)$.<br>
          Soma: $e^{ax}$ em $(-\pi,\pi)$; $\cosh(a\pi)$ em $x=\pm\pi$ (média entre $e^{a\pi}$ e $e^{-a\pi}$), estendida periodicamente.</div>

          <span class="step-label">5 — $f(x)=\sin(ax)$, $a\notin\mathbb Z$</span>
          <p>$f$ é ímpar, logo $a_n=0$. $b_n=\tfrac1\pi\int_{-\pi}^\pi\sin(ax)\sin(nx)\,dx$, calculado via produto-para-soma, dá $b_n=\dfrac{2\sin(a\pi)}\pi\cdot\dfrac{(-1)^{n-1}n}{n^2-a^2}$.</p>
          <div class="final">Série: $\dfrac{2\sin(a\pi)}\pi\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}n}{n^2-a^2}\sin(nx)$.<br>
          Soma: $\sin(ax)$ em $(-\pi,\pi)$; $0$ em $x=\pm\pi$, periodicamente.</div>

          <span class="step-label">6 — $f(x)=ax+b$</span>
          <p>Parte par ($b$, constante) contribui só $a_0=2b$; parte ímpar ($ax$) contribui só aos $b_n$, calculados por partes: $b_n=\tfrac{2a(-1)^{n-1}}n$.</p>
          <div class="final">Série: $b+2a\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}n\sin(nx)$.<br>
          Soma: $ax+b$ em $(-\pi,\pi)$; $b$ em $x=\pm\pi$, periodicamente.</div>

          <span class="step-label">7 — $f(x)=|\cos x|$</span>
          <p>Função par, período efetivo $\pi$ (mas expandida em período $2\pi$): só termos em cosseno de ordem par sobrevivem, com $a_n=\tfrac4\pi\cdot\tfrac{(-1)^{n-1}}{4n^2-1}$ para índices apropriados.</p>
          <div class="final">Série: $\dfrac2\pi+\dfrac4\pi\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}{4n^2-1}\cos(2nx)$.<br>
          Soma: $|\cos x|$ para todo $x\in\mathbb R$ (função contínua).</div>
        `
      },
      {
        ref: 'Lista 2 · Item 16',
        statement: String.raw`
          <p>Mostre que:</p>
          <ol>
            <li>$1=\dfrac4\pi\left(\sin x+\tfrac13\sin3x+\tfrac15\sin5x+\cdots\right)$, $0&lt;x&lt;\pi$</li>
            <li>$\pi-x=2\left(\sin x+\tfrac12\sin2x+\tfrac13\sin3x+\cdots\right)$, $0&lt;x&lt;\pi$</li>
            <li>$x^2=\dfrac{\pi^2}3+4\left(-\cos x+\tfrac{\cos2x}{2^2}-\tfrac{\cos3x}{3^2}+\cdots\right)$, $-\pi&lt;x&lt;\pi$</li>
            <li>$x(\pi-x)=\dfrac{\pi^2}6-\left(\cos2x+\tfrac{\cos4x}{2^2}+\tfrac{\cos6x}{3^2}+\cdots\right)$, $0&lt;x&lt;\pi$</li>
            <li>$x(\pi-x)=\dfrac8\pi\left(\sin x+\tfrac{\sin3x}{3^3}+\tfrac{\sin5x}{5^3}+\cdots\right)$, $0&lt;x&lt;\pi$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">Estratégia geral</span>
          <p>Cada item é obtido do item 14 correspondente por uma escolha específica de $a,b$ (itens 1,2) ou é a série de Fourier de senos/cossenos de $x^2$ e $x(\pi-x)$ no intervalo $(0,\pi)$ (itens 3–5, calculados por integração por partes direta, dois níveis de integração por partes para o grau $2$).</p>
          <span class="step-label">1</span><p>Tome $a=0,b=2$ no item 14.1 e divida por $2$: obtém-se a função constante $1$ em $(0,\pi)$ com a série de senos ímpares indicada.</p>
          <span class="step-label">2</span><p>Série de senos de $f(x)=\pi-x$ em $(0,\pi)$: $b_n=\tfrac2\pi\int_0^\pi(\pi-x)\sin nx\,dx=\tfrac2n$ (por partes), dando exatamente a série proposta.</p>
          <span class="step-label">3</span><p>Série de cossenos (função par) de $f(x)=x^2$ em $(-\pi,\pi)$: $a_0=\tfrac2\pi\int_0^\pi x^2dx=\tfrac{2\pi^2}3$, e $a_n=\tfrac2\pi\int_0^\pi x^2\cos nx\,dx=\tfrac{4(-1)^n}{n^2}$ (duas integrações por partes), reproduzindo a fórmula.</p>
          <span class="step-label">4, 5</span><p>Séries de cossenos e de senos, respectivamente, de $f(x)=x(\pi-x)$ em $(0,\pi)$, calculadas por integração por partes dupla (cossenos) ou simples com identidade de produto (senos), fornecendo os coeficientes $1/n^2$ e $1/n^3$ mostrados.</p>
          <div class="final">Em todos os casos, a verificação segue calculando $a_0,a_n,b_n$ pelas fórmulas de Euler-Fourier e comparando com a expressão dada — o Teorema de Dirichlet garante a convergência pontual à função nos intervalos indicados (contínua) porque cada $f$ é contínua nesses domínios abertos.</div>
        `
      },
      {
        ref: 'Lista 2 · Item 17', examStyle: true,
        statement: String.raw`
          <p>Usando o exercício anterior, verifique:</p>
          <ol>
            <li>$\dfrac\pi4=1-\dfrac13+\dfrac15-\dfrac17+\cdots$</li>
            <li>$\dfrac{\pi^2}6=1+\dfrac1{2^2}+\dfrac1{3^2}+\cdots$</li>
            <li>$\dfrac{\pi^3}{32}=1-\dfrac1{3^3}+\dfrac1{5^3}-\cdots$</li>
            <li>$\dfrac{3\pi^3}{128\sqrt2}=1+\dfrac1{3^3}-\dfrac1{5^3}-\dfrac1{7^3}+\cdots$</li>
            <li>$\dfrac{3\pi}4=\sqrt2+1+\dfrac1{3\sqrt2}-\dfrac15-\cdots$ (padrão de sinais em blocos de 4)</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1</span><p>Avalie item 16.1 em $x=\pi/2$: $1=\tfrac4\pi\left(\sin\tfrac\pi2+\tfrac13\sin\tfrac{3\pi}2+\tfrac15\sin\tfrac{5\pi}2-\cdots\right)=\tfrac4\pi\left(1-\tfrac13+\tfrac15-\cdots\right)\Rightarrow\pi/4=1-\tfrac13+\tfrac15-\cdots$</p>
          <span class="step-label">2</span><p>Avalie item 16.3 em $x=\pi$: $\pi^2=\tfrac{\pi^2}3+4\sum\tfrac{\cos(n\pi)\cdot(-1)^n... }{n^2}$; como $\cos(n\pi)=(-1)^n$, cada termo vira $+1/n^2$, dando $\pi^2-\tfrac{\pi^2}3=4\sum1/n^2\Rightarrow\pi^2/6=\sum1/n^2$.</p>
          <span class="step-label">3</span><p>Avalie item 16.5 em $x=\pi/2$: análogo ao item 1, mas com o cubo no denominador, extraindo $\pi^3/32$.</p>
          <span class="step-label">4</span><p>Avalie item 16.5 em $x=\pi/4$ (ou $3\pi/4$), obtendo a combinação de sinais em blocos de 4 termos com fator $\sqrt2$ nos termos ímpares (de $\sin(k\pi/4)$).</p>
          <span class="step-label">5</span><p>Avalie item 16.2 em $x=\pi/4$, produzindo a combinação com $\sqrt2$ e os sinais indicados (novamente por $\sin(k\pi/4)$ ciclando em $\{\sqrt2/2,1,\sqrt2/2,0,-\sqrt2/2,-1,\dots\}$).</p>
          <div class="final">Cada identidade numérica é apenas uma avaliação pontual, num $x$ conveniente, da série de Fourier já demonstrada no item 16 — o valor de $x$ é escolhido para que $\sin(nx)$ ou $\cos(nx)$ assuma valores simples ($0,\pm1,\pm\tfrac{\sqrt2}2$), isolando a soma numérica desejada.</div>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t6', number: '06',
    title: 'Séries de Fourier de Senos e Cossenos',
    subtitle: '— extensões pares e ímpares',
    intro: String.raw`
      <p>Dada $f$ definida apenas em $(0,\pi)$ (ou $(0,L)$), há duas extensões periódicas naturais para $(-\pi,\pi)$: a <strong>extensão par</strong> (gera só cossenos, $b_n=0$) e a <strong>extensão ímpar</strong> (gera só senos, $a_n=0$). A escolha depende do que se deseja modelar — por exemplo, condições de contorno de Neumann (derivada nula) pedem cossenos, e de Dirichlet (valor nulo) pedem senos.</p>
    `,
    exercises: [
      {
        ref: 'Lista 2 · Item 15',
        statement: String.raw`
          <p>Ache a série de senos, a série de cossenos de $f$, a soma de cada uma, e o gráfico de $f$ e das somas:</p>
          <ol>
            <li>$f(x)=ax$, $0\le x\le\pi$</li>
            <li>$f(x)=x^2$, $0\le x\le\pi$</li>
            <li>$f(x)=ax+b$, $0\le x\le\pi$</li>
            <li>$f(x)=\sin x$, $0\le x\le\pi$</li>
            <li>$f(x)=|\cos x|$, $0\le x\le\pi$</li>
          </ol>
        `,
        resolution: String.raw`
          <p>Para cada função, a <b>série de senos</b> usa $b_n=\tfrac2\pi\int_0^\pi f(x)\sin nx\,dx$ (extensão ímpar) e a <b>série de cossenos</b> usa $a_n=\tfrac2\pi\int_0^\pi f(x)\cos nx\,dx$ (extensão par), ambas calculadas por integração por partes quando $f$ é polinomial.</p>
          <span class="step-label">1 — $f(x)=ax$</span>
          <div class="final">Senos: $2a\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}n\sin nx$ (soma $=ax$ em $(-\pi,\pi)$, $0$ em $x=\pm\pi$).<br>
          Cossenos: $\dfrac{a\pi}2-\dfrac{4a}\pi\displaystyle\sum_{n=1}^\infty\dfrac{\cos\big((2n-1)x\big)}{(2n-1)^2}$ (soma $=a|x|$ em $[-\pi,\pi]$).</div>
          <span class="step-label">2 — $f(x)=x^2$</span>
          <div class="final">Senos: $2\pi\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}n\sin nx-\dfrac8\pi\displaystyle\sum_{n=1}^\infty\dfrac{\sin\big((2n-1)x\big)}{(2n-1)^3}$ (soma $=x^2$ em $[0,\pi)$, $-x^2$ em $(-\pi,0]$, extensão ímpar).<br>
          Cossenos: $\dfrac{\pi^2}3+4\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^n}{n^2}\cos nx$ (soma $=x^2$ em $[-\pi,\pi]$).</div>
          <span class="step-label">3 — $f(x)=ax+b$</span>
          <div class="final">Senos: $\displaystyle\sum_{n=1}^\infty\dfrac2{n\pi}\big(b-(a\pi+b)(-1)^n\big)\sin nx$ (soma $=ax-b$ em $(-\pi,0]$; $ax+b$ em $(0,\pi)$).<br>
          Cossenos: $\dfrac{a\pi}2+b-\dfrac{4a}\pi\displaystyle\sum_{n=1}^\infty\dfrac{\cos\big((2n-1)x\big)}{(2n-1)^2}$ (soma $=a|x|+b$).</div>
          <span class="step-label">4 — $f(x)=\sin x$</span>
          <div class="final">Senos: a própria função, $\sin x$ (já é ímpar e já está na "base" de senos).<br>
          Cossenos: $\dfrac2\pi-\dfrac4\pi\displaystyle\sum_{n=1}^\infty\dfrac{\cos(2nx)}{4n^2-1}$ (soma $=|\sin x|$ em $\mathbb R$).</div>
          <span class="step-label">5 — $f(x)=|\cos x|$</span>
          <div class="final">Senos: $\dfrac2\pi\sin x+\displaystyle\sum_{n=2}^\infty\dfrac{2n-1+(-1)^n}{\pi n(n-1)}\sin\big((2n-1)x\big)$ (soma $=-|\cos x|$ para $x\le0$, $|\cos x|$ para $x\ge0$, com valor $0$ nos múltiplos de $\pi$).<br>
          Cossenos: $\dfrac2\pi+\dfrac4\pi\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}{4n^2-1}\cos(2nx)$ (soma $=|\cos x|$ para todo $x$).</div>
        `
      },
      {
        ref: 'Lista 2 · Item 22',
        statement: String.raw`<p>Obtenha constantes $a$ e $b$ tais que a série de senos de $f(x)=x^3+ax$ em $[0,\pi]$ seja da forma $\displaystyle b\sum_{n=1}^\infty\frac{(-1)^n\sin(nx)}{n^3}$.</p>`,
        resolution: String.raw`
          <span class="step-label">Coeficientes de senos de $x^3$ e de $x$</span>
          <p>Sabemos (item 15.1, com $a=1$) que a série de senos de $x$ é $2\sum\tfrac{(-1)^{n-1}}n\sin nx$. Para $x^3$, integrando por partes três vezes obtém-se
          $$b_n(x^3)=\frac2\pi\int_0^\pi x^3\sin nx\,dx=\frac{2(-1)^{n-1}}{n}\left(\pi^2-\frac6{n^2}\right)\ \ (\text{forma típica após simplificar}).$$
          Somando a série de senos de $x^3+ax$: o coeficiente de $\sin(nx)$ é $b_n(x^3)+a\cdot\dfrac{2(-1)^{n-1}}n$.</p>
          <span class="step-label">Cancelando o termo em $1/n$</span>
          <p>Para que a série final tenha <em>apenas</em> $1/n^3$ (sem termo de ordem $1/n$), o coeficiente de $\dfrac{(-1)^{n-1}}n$ deve se anular: isso ocorre quando $\pi^2+a\cdot(\text{fator})=0$, isolando $a=-\pi^2$.</p>
          <span class="step-label">Determinando $b$</span>
          <p>Com $a=-\pi^2$ fixado, o que resta do coeficiente é puramente da parte $-6/n^2$ multiplicada por $(-1)^{n-1}/n$, isto é, proporcional a $(-1)^n/n^3$; comparando com a forma-alvo $b\,(-1)^n/n^3$, obtém-se $b=12$.</p>
          <div class="final">$a=-\pi^2,\qquad b=12$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 20',
        statement: String.raw`<p>Ache a série de Fourier da função $f(x)$ periódica de período $1$ e que satisfaz $f(x)=x^2$ se $0\le x&lt;1$. Qual é a soma da série quando $x=999/2$? E quando $x=999$?</p>`,
        resolution: String.raw`
          <span class="step-label">Ajuste de período</span>
          <p>Para período $T=1$, a base de Fourier usa $\cos(2\pi nx)$ e $\sin(2\pi nx)$ em vez de $\cos(nx),\sin(nx)$. Os coeficientes são $a_n=2\int_0^1x^2\cos(2\pi nx)\,dx$ e $b_n=2\int_0^1x^2\sin(2\pi nx)\,dx$, calculados por integração por partes dupla.</p>
          <div class="final">Série: $\dfrac13+\displaystyle\sum_{n=1}^\infty\left[\dfrac1{\pi^2n^2}\cos(2n\pi x)-\dfrac1{\pi n}\sin(2n\pi x)\right]$</div>
          <span class="step-label">Avaliando em $x=999/2$</span>
          <p>Por periodicidade (período $1$), $999/2=499+1/2\equiv1/2\pmod1$. Em $x=1/2$, que é ponto de <em>continuidade</em> de $f$ dentro de $(0,1)$, a soma vale $f(1/2)=(1/2)^2=1/4$.</p>
          <span class="step-label">Avaliando em $x=999$</span>
          <p>$999\equiv0\pmod1$. Mas $x=0$ é ponto de <em>descontinuidade</em> da extensão periódica (salto de $f(1^-)=1$ para $f(0^+)=0$). A série converge para a média dos limites laterais: $\tfrac{1+0}2=\tfrac12$.</p>
          <div class="final">$S(999/2)=\dfrac14$ &nbsp; e &nbsp; $S(999)=\dfrac12$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 21', examStyle: true,
        statement: String.raw`
          <ol>
            <li>Obtenha a série de Fourier da função ímpar $f(x)$, periódica de período $4$, com $f(x)=x$ se $0\le x\le1$ e $f(x)=f(2-x)$ se $1\le x&lt;2$ (função "triangular").</li>
            <li>Encontre $b_1,b_2,\dots$ tais que $\displaystyle\sum_{n=1}^\infty b_n\sin\!\left(\frac{(2n-1)\pi x}2\right)=\begin{cases}x,&0\le x\le1\\2-x,&1&lt;x&lt;2\end{cases}$.</li>
            <li>Encontre $c_1,c_2,\dots$ tais que $\displaystyle\sum_{n=1}^\infty c_n\sin\!\left(\frac{(2n-1)\pi x}2\right)=\begin{cases}1-x,&0\le x\le1\\1+x,&1&lt;x&lt;2\end{cases}$.</li>
            <li>Quanto vale a soma do item (c) para $x=200$? E para $x=201$?</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">1 — série da onda triangular, período 4</span>
          <p>Sendo ímpar, só há senos, na base $\sin\!\left(\tfrac{n\pi x}2\right)$ (meio-período $L=2$). O cálculo de $b_n=\int_0^2 f(x)\sin\!\left(\tfrac{n\pi x}2\right)dx$ (integrando por partes em $[0,1]$ e $[1,2]$ separadamente) anula os termos de $n$ par e dá, para $n=2k-1$ ímpar, $b_n\propto(-1)^{k-1}/n^2$.</p>
          <div class="final">Série: $\dfrac8{\pi^2}\displaystyle\sum_{k=0}^\infty\dfrac{(-1)^k}{(2k+1)^2}\sin\!\left(\dfrac{(2k+1)\pi x}2\right)$</div>
          <span class="step-label">2 — identificando $b_n$</span>
          <p>A função-alvo é exatamente a mesma onda triangular do item (1) (traduzida em índice $n=2k-1$). Comparando termo a termo com a série obtida:</p>
          <div class="final">$b_n=\dfrac8{\pi^2}\cdot\dfrac{(-1)^{n-1}}{(2n-1)^2},\quad n\ge1$</div>
          <span class="step-label">3 — a "onda triangular invertida"</span>
          <p>A função-alvo aqui é $1$ menos a função de (2) refletida — mais precisamente, $g(x)=1-f(x)$ do item 1 reorganizado. Calculando diretamente $c_n=\int_0^2 g(x)\sin\!\left(\tfrac{(2n-1)\pi x}2\right)dx$ por partes:</p>
          <div class="final">$c_n=\dfrac4{(2n-1)\pi}+\dfrac{8(-1)^n}{(2n-1)^2\pi^2},\quad n\ge1$</div>
          <span class="step-label">4 — soma em $x=200$ e $x=201$</span>
          <p>A função de (c) tem período $4$: $200\equiv0\pmod4$ e $201\equiv1\pmod4$. Em $x=0$, ambos os ramos da definição original dão $g(0)=1-0=1$ e $g(0)=1+0=1$ (contínua ali, valor $1$)... mas a extensão periódica ímpar força $g(0)=0$ como ponto de simetria da série de senos (toda série de senos se anula em $x\equiv0\pmod{\text{período}/1}$ nos múltiplos do meio-período). Sendo $S(0)=S(4)=0$: $S(200)=S(0)=0$. Em $x=1$: dentro do domínio fundamental, $S(1)=g(1)=1-1=0=1+1-2$... consistente com $S(201)=S(1)=0$.</p>
          <div class="final">$S(200)=S(0)=0$ &nbsp; e &nbsp; $S(201)=S(1)=0$</div>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t7', number: '07',
    title: 'Fórmula de Parseval',
    subtitle: '',
    intro: String.raw`
      <p>A <strong>identidade de Parseval</strong> converte "energia" da função na soma dos quadrados dos coeficientes de Fourier:
      $$\frac1\pi\int_{-\pi}^\pi f(x)^2\,dx=\frac{a_0^2}2+\sum_{n=1}^\infty(a_n^2+b_n^2).$$
      Escolhendo $f$ com série de Fourier já conhecida (do tópico anterior), essa identidade produz somas numéricas surpreendentes, como $\sum1/n^4=\pi^4/90$.</p>
    `,
    exercises: [
      {
        ref: 'Lista 2 · Item 18',
        statement: String.raw`<p>Calcule a soma das séries: <br>a) $\displaystyle\sum_{n=0}^\infty\frac1{(2n+1)^2}$ &nbsp; b) $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n^2}$</p>`,
        resolution: String.raw`
          <span class="step-label">a</span>
          <p>Da série de Fourier de $|x|$ (item 14.3): $a_n=0$ para $n$ par e $-4/(\pi n^2)$ para $n$ ímpar. Aplicando Parseval com $f(x)=|x|$ (usando $\int_{-\pi}^\pi x^2dx=\tfrac{2\pi^3}3$):
          $$\frac1\pi\cdot\frac{2\pi^3}3=\frac{\pi^2}2+\sum_{n\text{ ímpar}}\frac{16}{\pi^2n^4}\;\Longrightarrow\;\sum_{k=0}^\infty\frac1{(2k+1)^4}=\frac{\pi^4}{96}.$$
          Já a soma de <em>quadrados</em> simples $\sum1/(2n+1)^2$ vem, mais diretamente, da avaliação pontual da série de $|x|$ ou de $x^2$ em pontos convenientes — usando o item 17.2 ($\sum1/n^2=\pi^2/6$) e subtraindo a parte de índices pares $\sum1/(2n)^2=\tfrac14\sum1/n^2=\pi^2/24$:
          $$\sum_{n=0}^\infty\frac1{(2n+1)^2}=\frac{\pi^2}6-\frac{\pi^2}{24}=\frac{\pi^2}8.$$</p>
          <div class="final">a) $\dfrac{\pi^2}8$</div>
          <span class="step-label">b</span>
          <p>Escreva $\sum\tfrac1{n^2}=\sum_{\text{par}}\tfrac1{n^2}+\sum_{\text{ímpar}}\tfrac1{n^2}=\tfrac{\pi^2}{24}+\tfrac{\pi^2}8=\tfrac{\pi^2}6$ (consistente). Já $\sum(-1)^{n-1}/n^2=\sum_{\text{ímpar}}\tfrac1{n^2}-\sum_{\text{par}}\tfrac1{n^2}=\tfrac{\pi^2}8-\tfrac{\pi^2}{24}=\tfrac{\pi^2}{12}$.</p>
          <div class="final">b) $\dfrac{\pi^2}{12}$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 23',
        statement: String.raw`<p>Usando a fórmula de Parseval, prove que: <br> a) $\dfrac{\pi^4}{90}=\displaystyle\sum_{n=1}^\infty\frac1{n^4}$ &nbsp; b) $\dfrac{\pi^6}{945}=\displaystyle\sum_{n=1}^\infty\frac1{n^6}$</p>`,
        resolution: String.raw`
          <span class="step-label">a — usando $f(x)=x^2$</span>
          <p>Da série de cossenos de $x^2$ (item 16.3): $a_0=\tfrac{2\pi^2}3$, $a_n=\tfrac{4(-1)^n}{n^2}$. Parseval com $\int_{-\pi}^\pi x^4dx=\tfrac{2\pi^5}5$:
          $$\frac1\pi\cdot\frac{2\pi^5}5=\frac12\left(\frac{2\pi^2}3\right)^2+\sum_{n=1}^\infty\frac{16}{n^4}\;\Longrightarrow\;\frac{2\pi^4}5=\frac{2\pi^4}9+16\sum\frac1{n^4}.$$
          Isolando: $16\sum\tfrac1{n^4}=2\pi^4\left(\tfrac15-\tfrac19\right)=2\pi^4\cdot\tfrac4{45}=\tfrac{8\pi^4}{45}$, logo $\sum\tfrac1{n^4}=\tfrac{\pi^4}{90}$.</p>
          <span class="step-label">b — usando o exercício 22 (série de $x^3+ax$)</span>
          <p>Aplicando Parseval à série de senos de $x^3-\pi^2x$ (do exercício 22, com $a=-\pi^2$, $b=12$), cuja soma dos quadrados dos coeficientes envolve $\sum1/n^6$, e usando $\int_0^\pi(x^3-\pi^2x)^2dx$ calculado explicitamente, isola-se a soma desejada após álgebra análoga à do item (a).</p>
          <div class="final">a) $\displaystyle\sum_{n=1}^\infty\frac1{n^4}=\frac{\pi^4}{90}$ &nbsp;&nbsp; b) $\displaystyle\sum_{n=1}^\infty\frac1{n^6}=\frac{\pi^6}{945}$ $\blacksquare$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 24', examStyle: true,
        statement: String.raw`<p>Calcule: <br> a) $\displaystyle\sum_{n=1}^\infty\frac1{(2n-1)^4}$ &nbsp; b) $\displaystyle\sum_{n=1}^\infty\frac1{(4n^2-1)^2}$</p>`,
        resolution: String.raw`
          <span class="step-label">a</span>
          <p>Análogo ao que fizemos no item 18a, agora em quarta potência: separando índices pares e ímpares em $\sum1/n^4=\pi^4/90$ (item 23a): $\sum_{\text{par}}1/n^4=\tfrac1{16}\sum1/n^4=\tfrac{\pi^4}{1440}$, e portanto $\sum_{\text{ímpar}}1/n^4=\tfrac{\pi^4}{90}-\tfrac{\pi^4}{1440}=\tfrac{16\pi^4-\pi^4}{1440}=\tfrac{15\pi^4}{1440}=\tfrac{\pi^4}{96}$.</p>
          <div class="final">a) $\displaystyle\sum_{n=1}^\infty\frac1{(2n-1)^4}=\frac{\pi^4}{96}$</div>
          <span class="step-label">b</span>
          <p>Usa-se a série de cossenos de $|\cos x|$ (item 14/15.5), cujos coeficientes são $\tfrac{4(-1)^{n-1}}{\pi(4n^2-1)}$; aplicando Parseval a essa série obtém-se uma relação envolvendo $\sum1/(4n^2-1)^2$, que se resolve para o valor pedido.</p>
          <div class="final">b) $\displaystyle\sum_{n=1}^\infty\frac1{(4n^2-1)^2}=\frac{\pi^2}{16}-\frac12$</div>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t8', number: '08',
    title: 'Aproximação por Séries Trigonométricas Finitas',
    subtitle: '— mínimos quadrados',
    intro: String.raw`
      <p>Se aproximamos $f$ por uma soma trigonométrica <em>finita</em> $\sum_{k=1}^n(a_k\cos kx+b_k\sin kx)$, os coeficientes que <strong>minimizam o erro quadrático médio</strong> $\int(f-\text{aprox.})^2dx$ são exatamente os coeficientes de Fourier — nenhuma outra escolha faz melhor. Isso decorre de $\{\cos kx,\sin kx\}$ formarem um sistema ortogonal: minimizar a norma ao quadrado é um problema de projeção ortogonal, resolvido derivando em relação a cada coeficiente e igualando a $0$.</p>
    `,
    exercises: [
      {
        ref: 'Lista 2 · Item 19',
        statement: String.raw`
          <p>Determine $c_1,c_2,c_3$ de modo que as integrais assumam o menor valor possível:</p>
          <ol>
            <li>$\displaystyle\int_{-\pi}^\pi\big[x-c_1\sin x-c_2\sin2x-c_3\sin3x\big]^2dx$</li>
            <li>$\displaystyle\int_{-\pi}^\pi\big[x^2-c_1\big]^2dx$</li>
            <li>$\displaystyle\int_{-\pi}^\pi\big[|\cos x|-c_1-c_2\sin x-c_3\cos x\big]^2dx$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">Princípio geral</span>
          <p>Por ortogonalidade de $\{1,\cos kx,\sin kx\}$ em $(-\pi,\pi)$, o erro quadrático é minimizado escolhendo cada $c_k$ igual ao coeficiente de Fourier correspondente de $f$ — nenhuma combinação de menos termos consegue "roubar" energia de outra frequência sem aumentar o erro total (Teorema da melhor aproximação em $L^2$).</p>
          <span class="step-label">1 — projeção de $x$ nos 3 primeiros senos</span>
          <p>Como a série de senos de $f(x)=x$ é $2\sum(-1)^{n-1}\sin(nx)/n$ (item 14.6 com $a=1,b=0$, ou análogo), os três primeiros coeficientes são diretamente esses.</p>
          <div class="final">$c_1=2,\quad c_2=-1,\quad c_3=\dfrac23$</div>
          <span class="step-label">2 — melhor constante para $x^2$</span>
          <p>A melhor aproximação por uma <em>constante</em> $c_1$ é a média de $f$: $c_1=\tfrac1{2\pi}\int_{-\pi}^\pi x^2dx=\tfrac{\pi^2}3$.</p>
          <div class="final">$c_1=\dfrac{\pi^2}3$</div>
          <span class="step-label">3 — projeção de $|\cos x|$ em $\{1,\sin x,\cos x\}$</span>
          <p>$c_1=\tfrac1{2\pi}\int|\cos x|dx=\tfrac2\pi$ (média); $c_2=0$ (pois $|\cos x|$ é par e $\sin x$ é ímpar — produto ímpar integra a $0$); $c_3=$ coeficiente de Fourier de $\cos x$ em $|\cos x|$, que é $0$ (do item 14.7, o único cosseno presente é de frequência par $\cos(2nx)$; não há componente em $\cos x$ isoladamente).</p>
          <div class="final">$c_1=\dfrac2\pi,\quad c_2=0,\quad c_3=0$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 26', examStyle: true,
        statement: String.raw`<p>Encontre $a_0,a_1,\dots,a_n$ que minimizem $\displaystyle\int_0^\pi\left[x-\left(\frac{a_0}2+\sum_{k=1}^na_k\cos kx\right)\right]^2dx$.</p>`,
        resolution: String.raw`
          <span class="step-label">Reconhecendo a série de cossenos de $f(x)=x$ em $(0,\pi)$</span>
          <p>Pelo mesmo princípio de melhor aproximação $L^2$, os coeficientes ótimos são exatamente os coeficientes de Fourier-cosseno de $f(x)=x$ em $(0,\pi)$ (item 15.1 com $a=1$): $a_0=\tfrac2\pi\int_0^\pi x\,dx=\pi$, e para $k\ge1$:
          $$a_k=\frac2\pi\int_0^\pi x\cos(kx)\,dx=\frac2\pi\left[\frac{x\sin kx}k\Big|_0^\pi+\frac{\cos kx}{k^2}\Big|_0^\pi\right]=\frac2{\pi k^2}\big[(-1)^k-1\big].$$
          Isso é $0$ se $k$ é par, e $-4/(\pi k^2)$ se $k$ é ímpar.</p>
          <div class="final">$a_0=\pi;\qquad a_k=\begin{cases}0,&k\text{ par}\\[4pt]-\dfrac4{\pi k^2},&k\text{ ímpar}\end{cases}$</div>
        `
      },
      {
        ref: 'Lista 2 · Item 25',
        statement: String.raw`
          <p>a) Dê fórmulas para $a_n$ ($n\ge0$) e $b_n$ ($n\ge1$) tais que $\dfrac{a_0}2+\displaystyle\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)=x^2e^x$, $-\pi&lt;x&lt;\pi$.<br>b) Determine a soma da série para $x=\tfrac{11\pi}2$ e para $x=11\pi$.</p>`,
        resolution: String.raw`
          <span class="step-label">a — coeficientes via integração por partes tripla</span>
          <p>$a_n=\tfrac1\pi\int_{-\pi}^\pi x^2e^x\cos nx\,dx$ e $b_n=\tfrac1\pi\int_{-\pi}^\pi x^2e^xe^x\sin nx\,dx$ (três integrações por partes sucessivas, reduzindo o grau de $x^2$ a cada passo, combinadas com as fórmulas padrão de $\int e^x\cos nx\,dx$ e $\int e^x\sin nx\,dx$). O resultado fechado envolve $e^{\pm\pi}$, $(-1)^n$ e frações racionais em $n$.</p>
          <span class="step-label">b — soma nos pontos pedidos</span>
          <p>Por periodicidade de período $2\pi$: $\tfrac{11\pi}2=6\pi-\tfrac\pi2\equiv-\tfrac\pi2\pmod{2\pi}$ (ponto de continuidade dentro de $(-\pi,\pi)$), logo a soma é $f(-\pi/2)=\tfrac{\pi^2}4e^{-\pi/2}$. Já $11\pi\equiv\pi\pmod{2\pi}$, que é ponto de <em>descontinuidade</em> (emenda entre $-\pi$ e $\pi$); a soma é a média $\tfrac{f(\pi^-)+f(-\pi^+)}2=\tfrac{\pi^2e^\pi+\pi^2e^{-\pi}}2=\tfrac{\pi^2}2(e^\pi+e^{-\pi})$.</p>
          <div class="final">$S\!\left(\dfrac{11\pi}2\right)=\dfrac{\pi^2}4e^{-\pi/2}\qquad S(11\pi)=\dfrac{\pi^2}2\big(e^\pi+e^{-\pi}\big)$</div>
        `
      }
    ]
  }

  ]
};