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
          <p>Determine o intervalo máximo de convergência de cada série de potências. Em cada caso, aplique o teste da razão (ou da raiz) ao termo geral para achar o raio $R$ e depois analise <strong>separadamente</strong> cada extremo do intervalo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\sum n^4 x^n / 4^n$ &nbsp; <span style="color:var(--gray)">(i.e. $\sum \tfrac{n^4}{4^n}x^n$)</span>`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão no termo geral</span>
              <p>Escrevendo $u_n=\dfrac{n^4}{4^n}x^n$:</p>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{(n+1)^4}{4^{n+1}}\cdot\frac{4^n}{n^4}\,|x|=\frac{|x|}{4}\left(1+\frac1n\right)^{4}\longrightarrow\frac{|x|}{4}.$$
              <span class="step-label">Passo 2 — raio de convergência</span>
              <p>O teste da razão dá convergência absoluta quando $\dfrac{|x|}{4}&lt;1$ e divergência quando $\dfrac{|x|}{4}&gt;1$. Logo $R=4$ e a série converge em $-4&lt;x&lt;4$.</p>
              <span class="step-label">Passo 3 — extremo $x=4$</span>
              <p>A série vira $\displaystyle\sum \frac{n^4}{4^n}4^n=\sum n^4$. O termo geral $n^4\to+\infty$ não tende a zero, então o teste do termo geral (condição necessária) já garante divergência.</p>
              <span class="step-label">Passo 4 — extremo $x=-4$</span>
              <p>A série vira $\displaystyle\sum(-1)^n n^4$. De novo $|u_n|=n^4\not\to0$, logo diverge.</p>
              <div class="final">$R=4$ e o intervalo máximo de convergência é $]-4,4[$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\sum n!\,x^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão</span>
              <p>Para $x\ne0$, com $u_n=n!\,x^n$:</p>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{(n+1)!}{n!}\,|x|=(n+1)|x|\longrightarrow+\infty.$$
              <span class="step-label">Passo 2 — conclusão sobre o raio</span>
              <p>Como o limite é $+\infty&gt;1$ para todo $x\ne0$, a série diverge para qualquer $x\ne0$. Portanto $R=0$.</p>
              <span class="step-label">Passo 3 — o único ponto que sobra</span>
              <p>Em $x=0$ todos os termos com $n\ge1$ são nulos e a soma vale $0$ (converge trivialmente). Aqui não há "extremos" a testar: o intervalo degenerou num ponto.</p>
              <div class="final">$R=0$; a série só converge em $x=0$, isto é, o conjunto de convergência é $\{0\}$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\sum \dfrac{x^n}{n^3+1}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{n^3+1}{(n+1)^3+1}\,|x|\longrightarrow|x|,$$
              <p>pois o quociente dos polinômios de mesmo grau tende a $1$.</p>
              <span class="step-label">Passo 2 — raio</span>
              <p>Convergência absoluta para $|x|&lt;1$ e divergência para $|x|&gt;1$: $R=1$, centro $x_0=0$.</p>
              <span class="step-label">Passo 3 — extremo $x=1$</span>
              <p>Fica $\displaystyle\sum\frac{1}{n^3+1}$. Como $0&lt;\dfrac1{n^3+1}&lt;\dfrac1{n^3}$ e $\sum n^{-3}$ é uma $p$-série com $p=3&gt;1$, o critério da comparação dá convergência.</p>
              <span class="step-label">Passo 4 — extremo $x=-1$</span>
              <p>Fica $\displaystyle\sum\frac{(-1)^n}{n^3+1}$, que converge <em>absolutamente</em> pelo passo anterior (e convergência absoluta implica convergência).</p>
              <div class="final">$R=1$ e o intervalo máximo é $[-1,1]$ (os dois extremos entram).</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\sum \dfrac{(3n)!}{(2n)!}x^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — montar a razão dos fatoriais</span>
              <p>Com $a_n=\dfrac{(3n)!}{(2n)!}$, note que $(3n+3)!=(3n)!\,(3n+1)(3n+2)(3n+3)$ e $(2n+2)!=(2n)!\,(2n+1)(2n+2)$. Logo</p>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{(3n+1)(3n+2)(3n+3)}{(2n+1)(2n+2)}\,|x|.$$
              <span class="step-label">Passo 2 — comparar os graus</span>
              <p>O numerador é um polinômio de grau $3$ (coeficiente líder $27$) e o denominador de grau $2$ (coeficiente líder $4$), então a razão se comporta como $\dfrac{27}{4}n\,|x|\to+\infty$ para todo $x\ne0$.</p>
              <span class="step-label">Passo 3 — conclusão</span>
              <p>Divergência para todo $x\ne0$, ou seja $R=0$; em $x=0$ a série converge trivialmente.</p>
              <div class="final">$R=0$; conjunto de convergência $\{0\}$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\sum (-1)^{n-1}\dfrac{(x-5)^n}{n\,3^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão (série centrada em $x_0=5$)</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{n\,3^n}{(n+1)3^{n+1}}\,|x-5|=\frac{n}{n+1}\cdot\frac{|x-5|}{3}\longrightarrow\frac{|x-5|}{3}.$$
              <span class="step-label">Passo 2 — raio e intervalo aberto</span>
              <p>$\dfrac{|x-5|}{3}&lt;1\iff|x-5|&lt;3$, logo $R=3$ e há convergência absoluta em $2&lt;x&lt;8$.</p>
              <span class="step-label">Passo 3 — extremo $x=8$</span>
              <p>Aí $(x-5)^n=3^n$ e o termo vira $(-1)^{n-1}\dfrac{3^n}{n3^n}=\dfrac{(-1)^{n-1}}{n}$: é a série harmônica alternada. Pelo critério de Leibniz ($1/n$ decresce e tende a $0$) ela <strong>converge</strong> (condicionalmente).</p>
              <span class="step-label">Passo 4 — extremo $x=2$</span>
              <p>Aí $(x-5)^n=(-3)^n$ e o termo vira $(-1)^{n-1}\dfrac{(-3)^n}{n3^n}=(-1)^{n-1}(-1)^n\dfrac1n=-\dfrac1n$. É $-\sum\frac1n$, a harmônica com sinal trocado: <strong>diverge</strong>.</p>
              <div class="final">$R=3$ e o intervalo máximo é $]2,8]$.</div>
              <p><em>Observação: a tabela de gabarito troca os rótulos dos extremos (atribui a convergência de Leibniz a $x=2$ e a harmônica a $x=8$); o intervalo final $]2,8]$ está correto, mas quem converge é o extremo $x=8$.</em></p>
            `
          },
          {
            label: '6',
            statement: String.raw`$\sum \dfrac{(x+1)^n}{(n+1)\ln^2(n+1)}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão (centro $x_0=-1$)</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{(n+1)\ln^2(n+1)}{(n+2)\ln^2(n+2)}\,|x+1|\longrightarrow|x+1|,$$
              <p>pois $\dfrac{n+1}{n+2}\to1$ e $\dfrac{\ln(n+1)}{\ln(n+2)}\to1$.</p>
              <span class="step-label">Passo 2 — raio</span>
              <p>$R=1$, com convergência absoluta em $-2&lt;x&lt;0$.</p>
              <span class="step-label">Passo 3 — extremo $x=0$</span>
              <p>Fica $\displaystyle\sum\frac{1}{(n+1)\ln^2(n+1)}$. Pondo $m=n+1$, é $\sum_{m\ge2}\dfrac1{m\ln^2 m}$; pelo teste da integral,</p>
              $$\int_2^{\infty}\frac{dt}{t\ln^2 t}=\left[-\frac{1}{\ln t}\right]_2^{\infty}=\frac1{\ln 2}&lt;\infty,$$
              <p>logo a série <strong>converge</strong>.</p>
              <span class="step-label">Passo 4 — extremo $x=-2$</span>
              <p>Fica $\displaystyle\sum\frac{(-1)^n}{(n+1)\ln^2(n+1)}$, cujos módulos são exatamente os do passo anterior: há convergência <em>absoluta</em>, portanto convergência.</p>
              <div class="final">$R=1$ e o intervalo máximo é $[-2,0]$ (ambos os extremos entram).</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$\sum \dfrac{10^n}{(2n)!}(x-7)^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão (centro $x_0=7$)</span>
              <p>Como $(2n+2)!=(2n)!\,(2n+1)(2n+2)$:</p>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{10^{n+1}}{10^{n}}\cdot\frac{(2n)!}{(2n+2)!}\,|x-7|=\frac{10\,|x-7|}{(2n+1)(2n+2)}.$$
              <span class="step-label">Passo 2 — o limite é sempre $0$</span>
              <p>Para $x$ fixo, o numerador é constante e o denominador cresce como $4n^2\to\infty$, logo o limite é $0&lt;1$ <em>qualquer que seja</em> $x$.</p>
              <span class="step-label">Passo 3 — conclusão</span>
              <p>Convergência absoluta em toda a reta: $R=+\infty$. Não há extremos finitos a analisar.</p>
              <div class="final">$R=+\infty$; a série converge para todo $x\in\mathbb R$, isto é, o intervalo é $]-\infty,+\infty[$.</div>
            `
          },
          {
            label: '8',
            statement: String.raw`$\sum \dfrac{\ln n}{e^n}(x-e)^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão (centro $x_0=e$, $n\ge2$)</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{\ln(n+1)}{\ln n}\cdot\frac{e^{n}}{e^{n+1}}\,|x-e|=\frac{\ln(n+1)}{\ln n}\cdot\frac{|x-e|}{e}\longrightarrow\frac{|x-e|}{e},$$
              <p>já que $\dfrac{\ln(n+1)}{\ln n}=1+\dfrac{\ln(1+1/n)}{\ln n}\to1$.</p>
              <span class="step-label">Passo 2 — raio</span>
              <p>$\dfrac{|x-e|}{e}&lt;1\iff|x-e|&lt;e$, ou seja $R=e$ e convergência absoluta em $0&lt;x&lt;2e$.</p>
              <span class="step-label">Passo 3 — extremo $x=2e$</span>
              <p>Aí $(x-e)^n=e^n$ e o termo vira $\dfrac{\ln n}{e^n}e^n=\ln n\to+\infty$. O termo geral não tende a zero: <strong>diverge</strong>.</p>
              <span class="step-label">Passo 4 — extremo $x=0$</span>
              <p>Aí $(x-e)^n=(-e)^n$ e o termo vira $(-1)^n\ln n$, com $|u_n|=\ln n\to+\infty$. Novamente o termo geral não tende a zero: <strong>diverge</strong>.</p>
              <div class="final">$R=e$ e o intervalo máximo é $]0,2e[$ (nenhum extremo entra).</div>
            `
          },
          {
            label: '9',
            statement: String.raw`$\sum \dfrac{n!}{n^n}(x+3)^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão nos coeficientes (centro $x_0=-3$)</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{n!}\,|x+3|=\frac{n^n}{(n+1)^n}\,|x+3|=\frac{|x+3|}{\left(1+\frac1n\right)^{n}}.$$
              <span class="step-label">Passo 2 — usar $\left(1+\frac1n\right)^n\to e$</span>
              <p>O limite é $\dfrac{|x+3|}{e}$, que é $&lt;1$ exatamente quando $|x+3|&lt;e$. Logo $R=e$ e há convergência absoluta em $-3-e&lt;x&lt;-3+e$.</p>
              <span class="step-label">Passo 3 — extremos $x=-3\pm e$: tamanho do termo</span>
              <p>Nos dois extremos $|x+3|=e$, e o módulo do termo geral é $\dfrac{n!\,e^n}{n^n}$. Pela fórmula de Stirling $n!\sim\sqrt{2\pi n}\,\left(\dfrac{n}{e}\right)^{n}$, temos</p>
              $$\frac{n!\,e^n}{n^n}\sim\sqrt{2\pi n}\longrightarrow+\infty.$$
              <span class="step-label">Passo 4 — conclusão nos extremos</span>
              <p>Como $|u_n|\to+\infty$ (em particular não tende a $0$), a série diverge tanto em $x=-3+e$ quanto em $x=-3-e$.</p>
              <div class="final">$R=e$ e o intervalo máximo é $]-3-e,\,-3+e[$.</div>
              <p><em>Observação: a tabela de gabarito afirma que nos extremos o termo é $\sim1/\sqrt{2\pi n}\to0$; na verdade ele é $\sim\sqrt{2\pi n}\to+\infty$. A conclusão (divergência nos extremos) permanece a mesma.</em></p>
            `
          },
          {
            label: '10',
            statement: String.raw`$\sum (-1)^n\dfrac{(x-3)^n}{(2n+1)\sqrt{n+1}}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão (centro $x_0=3$)</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{(2n+1)\sqrt{n+1}}{(2n+3)\sqrt{n+2}}\,|x-3|\longrightarrow|x-3|,$$
              <p>pois $\dfrac{2n+1}{2n+3}\to1$ e $\sqrt{\dfrac{n+1}{n+2}}\to1$.</p>
              <span class="step-label">Passo 2 — raio</span>
              <p>$R=1$: convergência absoluta em $2&lt;x&lt;4$.</p>
              <span class="step-label">Passo 3 — extremo $x=4$</span>
              <p>Fica $\displaystyle\sum\frac{(-1)^n}{(2n+1)\sqrt{n+1}}$. O módulo é $\dfrac{1}{(2n+1)\sqrt{n+1}}\sim\dfrac{1}{2\,n^{3/2}}$, e $\sum n^{-3/2}$ é $p$-série com $p=\tfrac32&gt;1$: converge <strong>absolutamente</strong>.</p>
              <span class="step-label">Passo 4 — extremo $x=2$</span>
              <p>Aí $(x-3)^n=(-1)^n$, e $(-1)^n(-1)^n=1$: fica $\displaystyle\sum\frac{1}{(2n+1)\sqrt{n+1}}$, a mesma série de módulos do passo 3, que converge por comparação no limite com $p=\tfrac32$.</p>
              <div class="final">$R=1$ e o intervalo máximo é $[2,4]$ (os dois extremos entram, com convergência absoluta).</div>
            `
          },
          {
            label: '11',
            statement: String.raw`$\sum \dfrac{n^2}{4^n}(x-4)^{2n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — só há potências pares: usar o teste da raiz no termo inteiro</span>
              <p>Como a série tem lacunas (só expoentes pares), aplicamos a raiz $n$-ésima diretamente em $|u_n|=\dfrac{n^2}{4^n}|x-4|^{2n}$:</p>
              $$\sqrt[n]{|u_n|}=\frac{\left(n^{2}\right)^{1/n}}{4}\,|x-4|^{2}\longrightarrow\frac{|x-4|^{2}}{4},$$
              <p>usando $\sqrt[n]{n^2}=\left(\sqrt[n]{n}\right)^2\to1$.</p>
              <span class="step-label">Passo 2 — resolver a desigualdade</span>
              <p>$\dfrac{|x-4|^2}{4}&lt;1\iff|x-4|^2&lt;4\iff|x-4|&lt;2$, isto é $2&lt;x&lt;6$. O raio (na variável $x-4$) é $R=2$.</p>
              <span class="step-label">Passo 3 — extremos $x=2$ e $x=6$</span>
              <p>Em ambos $|x-4|=2$, logo $(x-4)^{2n}=4^{n}$ e o termo vira $\dfrac{n^2}{4^n}\cdot4^n=n^2\to+\infty$. O termo geral não tende a zero: <strong>diverge</strong> nos dois extremos.</p>
              <div class="final">$R=2$ (em torno de $x_0=4$) e o intervalo máximo é $]2,6[$.</div>
              <p><em>Observação: a tabela diz "bordas incluídas"; isso não procede, pois nos extremos o termo geral é $n^2$, que não tende a zero. O intervalo indicado $]2,6[$ já é o correto (extremos excluídos).</em></p>
            `
          },
          {
            label: '12',
            statement: String.raw`$\sum \dfrac{(-1)^n}{n(\ln n)^2}x^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão (série a partir de $n=2$)</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{n(\ln n)^2}{(n+1)\left(\ln(n+1)\right)^2}\,|x|\longrightarrow|x|.$$
              <span class="step-label">Passo 2 — raio</span>
              <p>$R=1$: convergência absoluta em $-1&lt;x&lt;1$.</p>
              <span class="step-label">Passo 3 — extremo $x=1$</span>
              <p>Fica $\displaystyle\sum_{n\ge2}\frac{(-1)^n}{n(\ln n)^2}$. Testando os módulos com o teste da integral (a função $t\mapsto\frac1{t\ln^2t}$ é positiva e decrescente em $[2,\infty[$):</p>
              $$\int_2^{\infty}\frac{dt}{t(\ln t)^2}=\frac{1}{\ln 2}&lt;\infty,$$
              <p>logo há convergência <strong>absoluta</strong>.</p>
              <span class="step-label">Passo 4 — extremo $x=-1$</span>
              <p>Fica $\displaystyle\sum_{n\ge2}\frac{(-1)^n(-1)^n}{n(\ln n)^2}=\sum_{n\ge2}\frac{1}{n(\ln n)^2}$, exatamente a série de módulos do passo anterior: converge.</p>
              <div class="final">$R=1$ e o intervalo máximo é $[-1,1]$.</div>
            `
          },
          {
            label: '13',
            statement: String.raw`$\sum 2^n x^{n^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série lacunar: teste da raiz no termo geral</span>
              <p>O expoente de $x$ é $n^2$, então não vale a razão coeficiente a coeficiente ingênua. Com $u_n=2^nx^{n^2}$:</p>
              $$\sqrt[n]{|u_n|}=\sqrt[n]{2^{n}|x|^{n^{2}}}=2\,|x|^{n}.$$
              <span class="step-label">Caso 1 — $|x|&lt;1$</span>
              <p>Então $|x|^n\to0$, logo $2|x|^n\to0&lt;1$ e a série converge absolutamente.</p>
              <span class="step-label">Caso 2 — $|x|&gt;1$</span>
              <p>Então $|x|^n\to+\infty$ e $2|x|^n\to+\infty&gt;1$: diverge.</p>
              <span class="step-label">Caso 3 — extremos $x=\pm1$</span>
              <p>Em $x=1$ a série é $\sum 2^n$ (geométrica de razão $2$, diverge). Em $x=-1$ o termo é $2^n(-1)^{n^2}$, com $|u_n|=2^n\to\infty$: diverge. Em ambos o termo geral não tende a zero.</p>
              <div class="final">$R=1$ e o intervalo máximo é $]-1,1[$.</div>
            `
          },
          {
            label: '14',
            statement: String.raw`$\sum \dfrac{3^n}{n4^n}x^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{3^{n+1}}{(n+1)4^{n+1}}\cdot\frac{n\,4^{n}}{3^{n}}\,|x|=\frac{n}{n+1}\cdot\frac{3|x|}{4}\longrightarrow\frac{3|x|}{4}.$$
              <span class="step-label">Passo 2 — raio</span>
              <p>$\dfrac{3|x|}{4}&lt;1\iff|x|&lt;\dfrac43$, logo $R=\dfrac43$ e há convergência absoluta em $-\tfrac43&lt;x&lt;\tfrac43$.</p>
              <span class="step-label">Passo 3 — extremo $x=4/3$</span>
              <p>O termo vira $\dfrac{3^n}{n4^n}\left(\dfrac43\right)^n=\dfrac1n$: é a série harmônica, que <strong>diverge</strong>.</p>
              <span class="step-label">Passo 4 — extremo $x=-4/3$</span>
              <p>O termo vira $\dfrac{(-1)^n}{n}$: a harmônica alternada. Como $\frac1n$ decresce monotonamente para $0$, o critério de Leibniz garante <strong>convergência</strong> (condicional).</p>
              <div class="final">$R=\tfrac43$ e o intervalo máximo é $\left[-\tfrac43,\ \tfrac43\right[$.</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 2 · Item 2',
        statement: String.raw`
          <p>Obtenha o raio de convergência de cada série. Atenção: em vários itens o expoente de $x$ não é $n$, e nesses casos convém aplicar o teste da razão ou da raiz ao <em>termo geral inteiro</em>, e não apenas aos coeficientes. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\sum x^n\,\dfrac{(2n)!}{(n!)^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer o coeficiente</span>
              <p>$a_n=\dfrac{(2n)!}{(n!)^2}=\dbinom{2n}{n}$ é o coeficiente binomial central. O expoente de $x$ é $n$, então basta o teste da razão usual.</p>
              <span class="step-label">Passo 2 — simplificar a razão</span>
              <p>Usando $(2n+2)!=(2n)!\,(2n+1)(2n+2)$ e $\left((n+1)!\right)^2=(n!)^2(n+1)^2$:</p>
              $$\frac{a_{n+1}}{a_n}=\frac{(2n+1)(2n+2)}{(n+1)^2}=\frac{2(2n+1)}{n+1}\longrightarrow4.$$
              <span class="step-label">Passo 3 — Cauchy–Hadamard</span>
              <p>Logo $\left|\dfrac{u_{n+1}}{u_n}\right|\to4|x|$, que é $&lt;1$ exatamente quando $|x|&lt;\tfrac14$. (Confere com a estimativa de Stirling $\dbinom{2n}{n}\sim\dfrac{4^n}{\sqrt{\pi n}}$, que dá $\sqrt[n]{a_n}\to4$.)</p>
              <div class="final">$R=\dfrac14$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\sum x^{2n}\,\dfrac{(2n)!}{(n!)^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — mudar de variável</span>
              <p>Ponha $y=x^2$. A série vira $\displaystyle\sum \dbinom{2n}{n}y^{\,n}$, exatamente a do item anterior.</p>
              <span class="step-label">Passo 2 — raio em $y$</span>
              <p>Pelo item 1, essa série converge para $|y|&lt;\tfrac14$ e diverge para $|y|&gt;\tfrac14$.</p>
              <span class="step-label">Passo 3 — voltar para $x$</span>
              <p>$|y|=x^2&lt;\tfrac14\iff|x|&lt;\tfrac12$. Portanto o raio na variável original é a raiz quadrada do raio em $y$.</p>
              <div class="final">$R=\dfrac12$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\sum x^{n^2}\,\dfrac{(2n)!}{(n!)^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série lacunar: teste da raiz no termo inteiro</span>
              <p>Com $u_n=\dbinom{2n}{n}x^{n^2}$,</p>
              $$\sqrt[n]{|u_n|}=\left(\dbinom{2n}{n}\right)^{1/n}|x|^{\,n^2/n}=\left(\dbinom{2n}{n}\right)^{1/n}|x|^{\,n}.$$
              <span class="step-label">Passo 2 — usar $\left(\binom{2n}{n}\right)^{1/n}\to4$</span>
              <p>De $\dbinom{2n}{n}\sim\dfrac{4^n}{\sqrt{\pi n}}$ segue $\left(\dbinom{2n}{n}\right)^{1/n}\to4$, pois $(\pi n)^{-1/(2n)}\to1$.</p>
              <span class="step-label">Caso 1 — $|x|&lt;1$</span>
              <p>$|x|^n\to0$, logo $\sqrt[n]{|u_n|}\to4\cdot0=0&lt;1$: converge absolutamente.</p>
              <span class="step-label">Caso 2 — $|x|\ge1$</span>
              <p>Se $|x|&gt;1$, $\sqrt[n]{|u_n|}\to+\infty$: diverge. Se $|x|=1$, $|u_n|=\dbinom{2n}{n}\to+\infty$ e o termo geral não tende a zero: diverge.</p>
              <div class="final">$R=1$ (o fator $4^n$ do coeficiente é "diluído" pelo expoente $n^2$).</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\sum x^n\,\dfrac{n!}{n^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{n!}\,|x|=\frac{n^n}{(n+1)^n}\,|x|=\frac{|x|}{\left(1+\frac1n\right)^{n}}.$$
              <span class="step-label">Passo 2 — o limite fundamental</span>
              <p>Como $\left(1+\frac1n\right)^n\to e$, a razão tende a $\dfrac{|x|}{e}$.</p>
              <span class="step-label">Passo 3 — raio</span>
              <p>$\dfrac{|x|}{e}&lt;1\iff|x|&lt;e$. (Mesmo resultado pela raiz: $\sqrt[n]{n!/n^n}\to1/e$, por Stirling.)</p>
              <div class="final">$R=e$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\sum x^{3n}\,\dfrac{n!}{n^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — mudar de variável</span>
              <p>Ponha $y=x^3$: a série vira $\displaystyle\sum\frac{n!}{n^n}y^{\,n}$, que é a do item 4.</p>
              <span class="step-label">Passo 2 — raio em $y$</span>
              <p>Converge para $|y|&lt;e$ e diverge para $|y|&gt;e$.</p>
              <span class="step-label">Passo 3 — voltar para $x$</span>
              <p>$|y|=|x|^3&lt;e\iff|x|&lt;\sqrt[3]{e}$.</p>
              <div class="final">$R=\sqrt[3]{e}=e^{1/3}$.</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$\sum x^{n!}\,\dfrac{n!}{n^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da raiz no termo inteiro</span>
              <p>Com $u_n=\dfrac{n!}{n^n}x^{n!}$ e lembrando que $\dfrac{n!}{n}=(n-1)!$:</p>
              $$\sqrt[n]{|u_n|}=\left(\frac{n!}{n^n}\right)^{1/n}|x|^{\,n!/n}=\left(\frac{n!}{n^n}\right)^{1/n}|x|^{(n-1)!}.$$
              <span class="step-label">Passo 2 — o primeiro fator</span>
              <p>Por Stirling, $\left(\dfrac{n!}{n^n}\right)^{1/n}\to\dfrac1e$, um número fixo e positivo. Quem decide o limite é o segundo fator.</p>
              <span class="step-label">Caso 1 — $|x|&lt;1$</span>
              <p>$(n-1)!\to+\infty$, então $|x|^{(n-1)!}\to0$ e $\sqrt[n]{|u_n|}\to\frac1e\cdot0=0&lt;1$: converge absolutamente.</p>
              <span class="step-label">Caso 2 — $|x|&gt;1$</span>
              <p>$|x|^{(n-1)!}\to+\infty$, logo $\sqrt[n]{|u_n|}\to+\infty&gt;1$: diverge. O raio é o valor de corte $|x|=1$.</p>
              <div class="final">$R=1$. (Curiosidade: em $|x|=1$ a série ainda converge, pois $\sum n!/n^n$ converge pelo teste da razão; mas isso não altera o raio.)</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 2 · Item 3',
        statement: String.raw`
          <p>Determine o intervalo de convergência de cada série, achando primeiro o raio $R$ (teste da razão ou da raiz) e depois testando <strong>separadamente</strong> cada extremo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{x^n}{\big(2+(-1)^n\big)^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — os coeficientes oscilam</span>
              <p>$2+(-1)^n$ vale $1$ quando $n$ é ímpar e $3$ quando $n$ é par. Assim $a_n=\dfrac{1}{\left(2+(-1)^n\right)^n}$ vale $1$ nos ímpares e $3^{-n}$ nos pares. Não existe $\lim|a_{n+1}/a_n|$, então o teste da razão não serve: usamos Cauchy–Hadamard com $\limsup$.</p>
              <span class="step-label">Passo 2 — raiz $n$-ésima e limsup</span>
              $$\sqrt[n]{|a_n|}=\frac{1}{2+(-1)^n}=\begin{cases}1,&amp;n\ \text{ímpar},\\[2pt] \tfrac13,&amp;n\ \text{par}.\end{cases}\qquad \limsup_{n\to\infty}\sqrt[n]{|a_n|}=1.$$
              <span class="step-label">Passo 3 — raio</span>
              <p>$\dfrac1R=\limsup\sqrt[n]{|a_n|}=1$, logo $R=1$: converge absolutamente para $|x|&lt;1$ e diverge para $|x|&gt;1$.</p>
              <span class="step-label">Passo 4 — extremos $x=\pm1$</span>
              <p>Para $n$ ímpar o termo é $\dfrac{x^n}{1^n}=x^n$, de módulo $1$. Logo a subsequência ímpar de $u_n$ tem módulo $1$ e o termo geral não tende a zero: diverge nos dois extremos.</p>
              <div class="final">$R=1$ e o intervalo de convergência é $]-1,1[$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\left(\frac{3n+2}{5n+7}\right)^n x^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — o coeficiente é uma potência $n$-ésima: usar o teste da raiz</span>
              $$\sqrt[n]{|u_n|}=\frac{3n+2}{5n+7}\,|x|\longrightarrow\frac35\,|x|.$$
              <span class="step-label">Passo 2 — raio</span>
              <p>$\dfrac35|x|&lt;1\iff|x|&lt;\dfrac53$, logo $R=\dfrac53$.</p>
              <span class="step-label">Passo 3 — extremos $x=\pm5/3$</span>
              <p>Aí o módulo do termo geral é</p>
              $$|u_n|=\left(\frac{3n+2}{5n+7}\cdot\frac53\right)^{n}=\left(\frac{15n+10}{15n+21}\right)^{n}=\left(1-\frac{11}{15n+21}\right)^{n}\longrightarrow e^{-11/15}\ne0,$$
              <p>pois $n\ln\left(1-\frac{11}{15n+21}\right)\to-\frac{11}{15}$.</p>
              <span class="step-label">Passo 4 — conclusão nos extremos</span>
              <p>Como $|u_n|\to e^{-11/15}\approx0{,}48\ne0$, o termo geral não tende a zero: diverge em $x=5/3$ e em $x=-5/3$.</p>
              <div class="final">$R=\tfrac53$ e o intervalo de convergência é $\left]-\tfrac53,\ \tfrac53\right[$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\left(\frac{2^n+3^n}{3^n+2^n}\right)x^n$ &nbsp;<span style="color:var(--gray)">(razão $\to(2/3)^n$ tipo)</span>`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — simplificar o coeficiente como está escrito</span>
              <p>Numerador e denominador são a mesma soma: $2^n+3^n=3^n+2^n$. Logo $a_n=1$ para todo $n$ e a série é simplesmente a geométrica $\displaystyle\sum_{n\ge1}x^n$.</p>
              <span class="step-label">Passo 2 — raio e extremos da série geométrica</span>
              <p>$\sqrt[n]{|a_n|}=1\Rightarrow R=1$. Nos extremos $x=\pm1$ o termo é $(\pm1)^n$, de módulo $1$, que não tende a zero: diverge nos dois. Intervalo: $]-1,1[$.</p>
              <span class="step-label">Passo 3 — a versão provavelmente pretendida</span>
              <p>A dica do enunciado ("razão $\to(2/3)^n$") e o gabarito $]-3/2,3/2[$ indicam que o coeficiente pretendido era $a_n=\dfrac{2^n+3^{-n}}{3^n+2^{-n}}$. Colocando as parcelas dominantes em evidência,</p>
              $$2^n+3^{-n}=2^n\left(1+6^{-n}\right),\qquad 3^n+2^{-n}=3^n\left(1+6^{-n}\right)\quad\Longrightarrow\quad a_n=\left(\frac23\right)^{n}.$$
              <p>Logo $\sqrt[n]{|a_n|}=\tfrac23$ e $R=\tfrac32$.</p>
              <span class="step-label">Passo 4 — extremos na versão pretendida</span>
              <p>Em $x=\pm\tfrac32$ o termo é $\left(\tfrac23\right)^n\left(\pm\tfrac32\right)^n=(\pm1)^n$, de módulo $1$: não tende a zero, então ambos os extremos ficam de fora e o intervalo é $\left]-\tfrac32,\tfrac32\right[$.</p>
              <div class="final">Como está escrito, o coeficiente vale $1$ e o intervalo é $]-1,1[$. Com o coeficiente pretendido (de ordem $(2/3)^n$), $R=\tfrac32$ e o intervalo é $\left]-\tfrac32,\ \tfrac32\right[$, que é a resposta do gabarito.</div>
              <p><em>Observação: há uma inconsistência no enunciado impresso — a fração $\frac{2^n+3^n}{3^n+2^n}$ é identicamente igual a $1$, e portanto não pode gerar raio $3/2$. Ambas as leituras estão resolvidas acima.</em></p>
            `
          },
          {
            label: '4',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\frac{x^n}{\ln n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão</span>
              $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{\ln n}{\ln(n+1)}\,|x|\longrightarrow|x|,$$
              <p>pois $\dfrac{\ln(n+1)}{\ln n}\to1$. Logo $R=1$ e há convergência absoluta em $-1&lt;x&lt;1$.</p>
              <span class="step-label">Passo 2 — extremo $x=1$</span>
              <p>Fica $\displaystyle\sum_{n\ge2}\frac{1}{\ln n}$. Como $\ln n&lt;n$ para $n\ge2$, vale $\dfrac1{\ln n}&gt;\dfrac1n&gt;0$. Pela comparação com a série harmônica (divergente), a série <strong>diverge</strong>.</p>
              <span class="step-label">Passo 3 — extremo $x=-1$</span>
              <p>Fica $\displaystyle\sum_{n\ge2}\frac{(-1)^n}{\ln n}$. A sequência $b_n=\dfrac1{\ln n}$ é positiva, decrescente (pois $\ln n$ cresce) e $b_n\to0$. Pelo critério de Leibniz a série <strong>converge</strong> (condicionalmente, já que os módulos divergem pelo passo 2).</p>
              <div class="final">$R=1$ e o intervalo de convergência é $[-1,1[$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{(x+1)^n}{a^n+b^n}$, com $b&gt;a&gt;0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — isolar a parcela dominante</span>
              <p>Como $b&gt;a&gt;0$, temos $a^n+b^n=b^n\left(1+\left(\tfrac ab\right)^n\right)$ com $\left(\tfrac ab\right)^n\to0$. Ou seja, $a^n+b^n\sim b^n$.</p>
              <span class="step-label">Passo 2 — teste da raiz (centro $x_0=-1$)</span>
              $$\sqrt[n]{|a_n|}=\frac{1}{b\left(1+\left(\frac ab\right)^n\right)^{1/n}}\longrightarrow\frac1b,$$
              <p>pois $\left(1+\left(\tfrac ab\right)^n\right)^{1/n}\to1$ (a base tende a $1$).</p>
              <span class="step-label">Passo 3 — raio</span>
              <p>$\dfrac1R=\dfrac1b\Rightarrow R=b$: convergência absoluta para $|x+1|&lt;b$, isto é $-1-b&lt;x&lt;-1+b$.</p>
              <span class="step-label">Passo 4 — extremos $x=-1\pm b$</span>
              <p>Nos dois casos $|x+1|=b$ e</p>
              $$|u_n|=\frac{b^n}{a^n+b^n}=\frac{1}{1+\left(\frac ab\right)^n}\longrightarrow1\ne0,$$
              <p>logo o termo geral não tende a zero e a série diverge em ambos.</p>
              <div class="final">$R=b$ e o intervalo de convergência é $]-1-b,\ -1+b[$ (equivalentemente $]-b-1,\ b-1[$).</div>
            `
          }
        ]
      },
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
          <p>Verifique que valem as duas identidades de série de potências abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\ln\!\left(\dfrac{1+x}{1-x}\right)=2\displaystyle\sum_{n=0}^\infty\dfrac{x^{2n+1}}{2n+1}$, $|x|&lt;1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — séries base de $\ln(1+x)$ e $\ln(1-x)$</span>
              <p>Partindo da geométrica $\dfrac1{1-u}=\displaystyle\sum_{n=0}^\infty u^n$, $|u|&lt;1$, e integrando termo a termo obtemos $\ln(1+x)=\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}nx^n$; trocando $x\to-x$ nessa mesma série, $\ln(1-x)=-\displaystyle\sum_{n=1}^\infty\dfrac{x^n}n$. Ambas válidas para $|x|&lt;1$.</p>
              <span class="step-label">Passo 2 — subtrair as duas séries</span>
              $$\ln(1+x)-\ln(1-x)=\sum_{n=1}^\infty\frac{(-1)^{n-1}x^n+x^n}n=\sum_{n=1}^\infty\frac{x^n\left[1+(-1)^{n-1}\right]}n.$$
              <span class="step-label">Passo 3 — só sobrevivem os índices ímpares</span>
              <p>O colchete $1+(-1)^{n-1}$ vale $2$ se $n$ é ímpar e $0$ se $n$ é par. Escrevendo os índices ímpares como $n=2k+1$, $k\ge0$:</p>
              $$\ln(1+x)-\ln(1-x)=\sum_{k=0}^\infty\frac{2x^{2k+1}}{2k+1}.$$
              <div class="final">$\ln\left(\dfrac{1+x}{1-x}\right)=2\displaystyle\sum_{n=0}^\infty\dfrac{x^{2n+1}}{2n+1}$, válida para $|x|&lt;1$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\arctan x=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+1}}{2n+1}$, $|x|\le1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série geométrica para $\frac1{1+t^2}$</span>
              <p>Substituindo $u\to-t^2$ na geométrica $\dfrac1{1-u}=\displaystyle\sum u^n$: $\dfrac1{1+t^2}=\displaystyle\sum_{n=0}^\infty(-1)^nt^{2n}$, válida para $|t|&lt;1$.</p>
              <span class="step-label">Passo 2 — integrar termo a termo de $0$ a $x$</span>
              <p>Como $\arctan x=\displaystyle\int_0^x\dfrac{dt}{1+t^2}$ e a integração termo a termo é lícita dentro do raio de convergência:</p>
              $$\arctan x=\sum_{n=0}^\infty(-1)^n\int_0^xt^{2n}\,dt=\sum_{n=0}^\infty(-1)^n\frac{x^{2n+1}}{2n+1},\qquad |x|&lt;1.$$
              <span class="step-label">Passo 3 — extremos $x=\pm1$ (Teorema de Abel)</span>
              <p>Em $x=\pm1$ a série numérica $\displaystyle\sum(-1)^n\dfrac{(\pm1)^{2n+1}}{2n+1}$ converge pelo critério de Leibniz (termos alternados, módulo decrescente a zero). Pelo Teorema de Abel, a igualdade entre a função e a série se estende por continuidade a esses pontos.</p>
              <div class="final">$\arctan x=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+1}}{2n+1}$, válida para $|x|\le1$.</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 2 · Item 4',
        statement: String.raw`
          <p>Usando derivação e integração termo a termo, obtenha a expansão em série de potências em torno de $x_0=0$ e o intervalo de validade. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\dfrac1{x^2+25}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — isolar a forma $\frac1{1+u^2}$</span>
              <p>$$\dfrac1{25+x^2}=\dfrac1{25}\cdot\dfrac1{1+\left(\frac x5\right)^2}.$$</p>
              <span class="step-label">Passo 2 — série base (geométrica com $u=-t^2$)</span>
              <p>Usando $\dfrac1{1+t^2}=\displaystyle\sum_{n=0}^\infty(-1)^nt^{2n}$, $|t|&lt;1$, com $t=x/5$:</p>
              $$\frac1{1+(x/5)^2}=\sum_{n=0}^\infty(-1)^n\left(\frac x5\right)^{2n}.$$
              <span class="step-label">Passo 3 — multiplicar por $1/25$ e fixar o intervalo</span>
              <p>$$\dfrac1{25+x^2}=\frac1{25}\sum_{n=0}^\infty(-1)^n\frac{x^{2n}}{5^{2n}}=\sum_{n=0}^\infty(-1)^n\frac{x^{2n}}{5^{2n+2}}.$$ A condição $|t|&lt;1$ com $t=x/5$ dá $|x|&lt;5$.</p>
              <div class="final">$\dfrac1{25+x^2}=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n}}{5^{2n+2}}$, válida para $|x|&lt;5$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\arctan(2x)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reaproveitar a série de $\arctan x$</span>
              <p>Sabemos (por integração de $\frac1{1+t^2}=\sum(-1)^nt^{2n}$) que $\arctan x=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+1}}{2n+1}$, $|x|\le1$.</p>
              <span class="step-label">Passo 2 — substituição $x\to2x$</span>
              $$\arctan(2x)=\sum_{n=0}^\infty(-1)^n\frac{(2x)^{2n+1}}{2n+1}=\sum_{n=0}^\infty(-1)^n\frac{2^{2n+1}}{2n+1}x^{2n+1}.$$
              <span class="step-label">Passo 3 — intervalo de validade</span>
              <p>A série original exige $|2x|\le1$, isto é $|x|\le\tfrac12$.</p>
              <div class="final">$\arctan(2x)=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{2^{2n+1}}{2n+1}x^{2n+1}$, válida para $|x|\le\dfrac12$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\dfrac1{(1+x)^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base geométrica alternada</span>
              <p>$\dfrac1{1+x}=\displaystyle\sum_{n=0}^\infty(-1)^nx^n$, $|x|&lt;1$ (geométrica com $u=-x$).</p>
              <span class="step-label">Passo 2 — derivar termo a termo</span>
              $$-\frac1{(1+x)^2}=\sum_{n=1}^\infty(-1)^nnx^{n-1}.$$
              <span class="step-label">Passo 3 — trocar sinal e reindexar</span>
              <p>Multiplicando por $-1$ e trocando $n\to n+1$ (novo índice a partir de $0$):</p>
              $$\frac1{(1+x)^2}=\sum_{n=0}^\infty(-1)^n(n+1)x^n.$$
              <div class="final">$\dfrac1{(1+x)^2}=\displaystyle\sum_{n=0}^\infty(-1)^n(n+1)x^n$, válida para $|x|&lt;1$.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\dfrac1{(1+x)^3}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — partir do item anterior</span>
              <p>$\dfrac1{(1+x)^2}=\displaystyle\sum_{n=0}^\infty(-1)^n(n+1)x^n$, $|x|&lt;1$.</p>
              <span class="step-label">Passo 2 — derivar novamente</span>
              $$-\frac2{(1+x)^3}=\sum_{n=1}^\infty(-1)^n(n+1)nx^{n-1}.$$
              <span class="step-label">Passo 3 — dividir por $-2$ e reindexar</span>
              <p>Trocando $n\to n+1$ e dividindo por $-2$:</p>
              $$\frac1{(1+x)^3}=\sum_{n=0}^\infty(-1)^n\frac{(n+1)(n+2)}2x^n.$$
              <div class="final">$\dfrac1{(1+x)^3}=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{(n+1)(n+2)}2x^n$, válida para $|x|&lt;1$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\dfrac{2x}{1+x^4}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base geométrica com $u=x^4$</span>
              <p>$\dfrac1{1+x^4}=\displaystyle\sum_{n=0}^\infty(-1)^nx^{4n}$, $|x|&lt;1$ (geométrica alternada com $u=-x^4$).</p>
              <span class="step-label">Passo 2 — multiplicar por $2x$</span>
              $$\frac{2x}{1+x^4}=2x\sum_{n=0}^\infty(-1)^nx^{4n}=2\sum_{n=0}^\infty(-1)^nx^{4n+1}.$$
              <div class="final">$\dfrac{2x}{1+x^4}=2\displaystyle\sum_{n=0}^\infty(-1)^nx^{4n+1}$, válida para $|x|&lt;1$.</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$\ln(1+x)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base geométrica</span>
              <p>$\dfrac1{1+t}=\displaystyle\sum_{n=0}^\infty(-1)^nt^n$, $|t|&lt;1$.</p>
              <span class="step-label">Passo 2 — integrar de $0$ a $x$</span>
              $$\ln(1+x)=\int_0^x\frac{dt}{1+t}=\sum_{n=0}^\infty(-1)^n\int_0^xt^n\,dt=\sum_{n=0}^\infty\frac{(-1)^n}{n+1}x^{n+1}=\sum_{n=1}^\infty\frac{(-1)^{n-1}}nx^n.$$
              <span class="step-label">Passo 3 — extremos $x=\pm1$</span>
              <p>Em $x=1$ obtém-se $\sum(-1)^{n-1}/n$, convergente por Leibniz; o Teorema de Abel estende a igualdade até esse ponto. Em $x=-1$ a série se torna $-\sum1/n$ (harmônica, divergente).</p>
              <div class="final">$\ln(1+x)=\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}nx^n$, válida para $-1&lt;x\le1$.</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$\ln\!\left(\dfrac1{1+3x^2}\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reescrever com sinal trocado</span>
              <p>$\ln\left(\dfrac1{1+3x^2}\right)=-\ln(1+3x^2)$.</p>
              <span class="step-label">Passo 2 — substituir $u=3x^2$ na série de $\ln(1+u)$</span>
              <p>Usando $\ln(1+u)=\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}nu^n$, $|u|\le1$, com $u=3x^2$:</p>
              $$\ln(1+3x^2)=\sum_{n=1}^\infty\frac{(-1)^{n-1}}n(3x^2)^n=\sum_{n=1}^\infty\frac{(-1)^{n-1}3^n}nx^{2n}.$$
              <span class="step-label">Passo 3 — negar e simplificar o sinal</span>
              $$-\ln(1+3x^2)=\sum_{n=1}^\infty\frac{(-1)^n3^n}nx^{2n}=\sum_{n=1}^\infty\frac{(-3)^n}nx^{2n}.$$
              <span class="step-label">Passo 4 — intervalo de validade</span>
              <p>A condição $|u|\le1$ vira $|3x^2|\le1$, isto é $|x|\le1/\sqrt3$.</p>
              <div class="final">$\ln\left(\dfrac1{1+3x^2}\right)=\displaystyle\sum_{n=1}^\infty\dfrac{(-3)^n}nx^{2n}$, válida para $|x|\le\dfrac1{\sqrt3}$.</div>
            `
          },
          {
            label: '8',
            statement: String.raw`$\dfrac x{1+x-2x^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — fatorar o denominador</span>
              <p>$1+x-2x^2=(1-x)(1+2x)$.</p>
              <span class="step-label">Passo 2 — frações parciais</span>
              $$\frac x{(1-x)(1+2x)}=\frac13\left[\frac1{1-x}-\frac1{1+2x}\right].$$
              <span class="step-label">Passo 3 — expandir cada fator em série geométrica</span>
              <p>$\dfrac1{1-x}=\displaystyle\sum_{n=0}^\infty x^n$ ($|x|&lt;1$) e $\dfrac1{1+2x}=\displaystyle\sum_{n=0}^\infty(-2x)^n$ ($|x|&lt;1/2$).</p>
              <span class="step-label">Passo 4 — somar e simplificar o coeficiente</span>
              <p>$$\frac x{1+x-2x^2}=\frac13\sum_{n=0}^\infty\left[x^n-(-2)^nx^n\right]=\sum_{n=1}^\infty\frac{1-(-2)^n}3x^n$$ (o termo $n=0$ vale $0$). O intervalo é a interseção dos dois raios, $|x|&lt;1/2$.</p>
              <div class="final">$\dfrac x{1+x-2x^2}=\displaystyle\sum_{n=1}^\infty\dfrac{1-(-2)^n}3x^n$, válida para $|x|&lt;\dfrac12$.</div>
            `
          },
          {
            label: '9',
            statement: String.raw`$\displaystyle\int_0^x\dfrac t{1+t^5}\,dt$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base para $\frac1{1+t^5}$</span>
              <p>$\dfrac1{1+t^5}=\displaystyle\sum_{n=0}^\infty(-1)^nt^{5n}$, $|t|&lt;1$ (geométrica alternada com $u=-t^5$).</p>
              <span class="step-label">Passo 2 — multiplicar por $t$</span>
              $$\frac t{1+t^5}=\sum_{n=0}^\infty(-1)^nt^{5n+1}.$$
              <span class="step-label">Passo 3 — integrar termo a termo de $0$ a $x$</span>
              $$\int_0^x\frac t{1+t^5}\,dt=\sum_{n=0}^\infty(-1)^n\int_0^xt^{5n+1}\,dt=\sum_{n=0}^\infty\frac{(-1)^n}{5n+2}x^{5n+2}.$$
              <span class="step-label">Passo 4 — cuidado com os extremos</span>
              <p>Em $x=1$ a série é alternada com termos decrescentes a zero: converge (e vale $\approx0{,}40690$). Em $x=-1$, porém, $(-1)^n(-1)^{5n+2}=+1$: todos os termos ficam positivos e a série vira $\sum\tfrac1{5n+2}$, que <strong>diverge</strong> — coerente com o polo de $\tfrac t{1+t^5}$ em $t=-1$.</p>
              <div class="final">$\displaystyle\int_0^x\dfrac t{1+t^5}\,dt=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^n}{5n+2}x^{5n+2}$, válida para $-1&lt;x\le1$.</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 2 · Item 11', examStyle: true,
        statement: String.raw`
          <p>Dê a série de Taylor de $f(x)$ centrada em $0$, indicando o intervalo de convergência. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$f(x)=x^2e^x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base de $e^x$</span>
              <p>$e^x=\displaystyle\sum_{n=0}^\infty\dfrac{x^n}{n!}$, válida para todo $x\in\mathbb R$.</p>
              <span class="step-label">Passo 2 — multiplicar por $x^2$</span>
              $$x^2e^x=\sum_{n=0}^\infty\frac{x^{n+2}}{n!}.$$
              <div class="final">$x^2e^x=\displaystyle\sum_{n=0}^\infty\dfrac{x^{n+2}}{n!}$, para todo $x\in\mathbb R$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$f(x)=\ln(1-x^3)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base de $\ln(1+u)$</span>
              <p>$\ln(1+u)=\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}nu^n$, $-1&lt;u\le1$.</p>
              <span class="step-label">Passo 2 — substituição $u=-x^3$</span>
              $$\ln(1-x^3)=\sum_{n=1}^\infty\frac{(-1)^{n-1}}n(-x^3)^n=\sum_{n=1}^\infty\frac{(-1)^{n-1}(-1)^n}nx^{3n}=-\sum_{n=1}^\infty\frac{x^{3n}}n.$$
              <span class="step-label">Passo 3 — intervalo de validade</span>
              <p>A condição $-1&lt;u\le1$ com $u=-x^3$ dá $-1\le x^3&lt;1$, isto é $-1\le x&lt;1$.</p>
              <div class="final">$\ln(1-x^3)=-\displaystyle\sum_{n=1}^\infty\dfrac{x^{3n}}n$, válida para $-1\le x&lt;1$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$f(x)=\sin(x^2)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base de $\sin u$</span>
              <p>$\sin u=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^nu^{2n+1}}{(2n+1)!}$, para todo $u\in\mathbb R$.</p>
              <span class="step-label">Passo 2 — substituição $u=x^2$</span>
              $$\sin(x^2)=\sum_{n=0}^\infty\frac{(-1)^n(x^2)^{2n+1}}{(2n+1)!}=\sum_{n=0}^\infty\frac{(-1)^n}{(2n+1)!}x^{4n+2}.$$
              <div class="final">$\sin(x^2)=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^n}{(2n+1)!}x^{4n+2}$, para todo $x\in\mathbb R$.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$f(x)=\cos^2x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identidade do ângulo duplo</span>
              <p>$\cos^2x=\dfrac{1+\cos(2x)}2$.</p>
              <span class="step-label">Passo 2 — série base de $\cos u$ com $u=2x$</span>
              <p>$\cos u=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^nu^{2n}}{(2n)!}$; com $u=2x$: $\cos(2x)=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^n(2x)^{2n}}{(2n)!}=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^n2^{2n}}{(2n)!}x^{2n}$.</p>
              <span class="step-label">Passo 3 — separar o termo $n=0$ e dividir por $2$</span>
              <p>O termo $n=0$ de $\cos(2x)$ vale $1$; separando-o:</p>
              $$\cos^2x=\frac12+\frac12\left[1+\sum_{n=1}^\infty\frac{(-1)^n2^{2n}}{(2n)!}x^{2n}\right]=1+\frac12\sum_{n=1}^\infty\frac{(-1)^n2^{2n}}{(2n)!}x^{2n}.$$
              <div class="final">$\cos^2x=1+\dfrac12\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^n2^{2n}}{(2n)!}x^{2n}$, para todo $x\in\mathbb R$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$f(x)=x\cos(2x)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base de $\cos u$ com $u=2x$</span>
              <p>Como no item anterior, $\cos(2x)=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^n2^{2n}}{(2n)!}x^{2n}$, para todo $x\in\mathbb R$.</p>
              <span class="step-label">Passo 2 — multiplicar por $x$</span>
              $$x\cos(2x)=\sum_{n=0}^\infty\frac{(-1)^n2^{2n}}{(2n)!}x^{2n+1}.$$
              <div class="final">$x\cos(2x)=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^n2^{2n}}{(2n)!}x^{2n+1}$, para todo $x\in\mathbb R$.</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$f(x)=x\arctan x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base de $\arctan x$</span>
              <p>$\arctan x=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+1}}{2n+1}$, $|x|\le1$.</p>
              <span class="step-label">Passo 2 — multiplicar por $x$</span>
              $$x\arctan x=\sum_{n=0}^\infty(-1)^n\frac{x^{2n+2}}{2n+1}.$$
              <span class="step-label">Passo 3 — intervalo (multiplicar por um polinômio não altera a convergência)</span>
              <p>Multiplicar a série por $x$ não muda o raio de convergência nem o comportamento nos extremos.</p>
              <div class="final">$x\arctan x=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+2}}{2n+1}$, válida para $-1\le x\le1$.</div>
            `
          }
        ]
      },
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
          <p>Obtenha a soma das séries e o raio de convergência. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$x+\dfrac{x^2}2+\dfrac{x^3}3+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base geométrica</span>
              <p>$\dfrac1{1-x}=\displaystyle\sum_{n=0}^\infty x^n$, $|x|&lt;1$.</p>
              <span class="step-label">Passo 2 — integrar termo a termo de $0$ a $x$</span>
              $$\int_0^x\frac{dt}{1-t}=\sum_{n=0}^\infty\int_0^xt^n\,dt=\sum_{n=0}^\infty\frac{x^{n+1}}{n+1}=\sum_{n=1}^\infty\frac{x^n}n=x+\frac{x^2}2+\frac{x^3}3+\cdots.$$
              <span class="step-label">Passo 3 — calcular a integral da esquerda</span>
              <p>$\displaystyle\int_0^x\dfrac{dt}{1-t}=-\ln(1-x)$.</p>
              <div class="final">Soma $=-\ln(1-x)$, com raio $R=1$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$x-\dfrac{x^2}2+\dfrac{x^3}3-\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base geométrica alternada</span>
              <p>$\dfrac1{1+x}=\displaystyle\sum_{n=0}^\infty(-1)^nx^n$, $|x|&lt;1$ (troca $x\to-x$ na geométrica).</p>
              <span class="step-label">Passo 2 — integrar de $0$ a $x$</span>
              $$\int_0^x\frac{dt}{1+t}=\sum_{n=0}^\infty(-1)^n\int_0^xt^n\,dt=\sum_{n=1}^\infty\frac{(-1)^{n-1}}nx^n=x-\frac{x^2}2+\frac{x^3}3-\cdots.$$
              <span class="step-label">Passo 3 — integral fechada</span>
              <p>$\displaystyle\int_0^x\dfrac{dt}{1+t}=\ln(1+x)$.</p>
              <div class="final">Soma $=\ln(1+x)$, com raio $R=1$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$x+\dfrac{x^3}3+\dfrac{x^5}5+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base geométrica com razão $x^2$</span>
              <p>$\dfrac1{1-x^2}=\displaystyle\sum_{n=0}^\infty x^{2n}$, $|x|&lt;1$.</p>
              <span class="step-label">Passo 2 — integrar de $0$ a $x$</span>
              $$\int_0^x\frac{dt}{1-t^2}=\sum_{n=0}^\infty\int_0^xt^{2n}\,dt=\sum_{n=0}^\infty\frac{x^{2n+1}}{2n+1}=x+\frac{x^3}3+\frac{x^5}5+\cdots.$$
              <span class="step-label">Passo 3 — integral fechada por frações parciais</span>
              <p>Com $\dfrac1{1-t^2}=\dfrac12\left[\dfrac1{1-t}+\dfrac1{1+t}\right]$:</p>
              $$\int_0^x\frac{dt}{1-t^2}=\frac12\ln\frac{1+x}{1-x}=\ln\sqrt{\frac{1+x}{1-x}}.$$
              <div class="final">Soma $=\ln\sqrt{\dfrac{1+x}{1-x}}$, com raio $R=1$.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$x-\dfrac{x^3}3+\dfrac{x^5}5-\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base geométrica alternada com razão $x^2$</span>
              <p>$\dfrac1{1+x^2}=\displaystyle\sum_{n=0}^\infty(-1)^nx^{2n}$, $|x|&lt;1$.</p>
              <span class="step-label">Passo 2 — integrar de $0$ a $x$</span>
              $$\int_0^x\frac{dt}{1+t^2}=\sum_{n=0}^\infty(-1)^n\frac{x^{2n+1}}{2n+1}=x-\frac{x^3}3+\frac{x^5}5-\cdots.$$
              <span class="step-label">Passo 3 — integral fechada</span>
              <p>$\displaystyle\int_0^x\dfrac{dt}{1+t^2}=\arctan x$.</p>
              <div class="final">Soma $=\arctan x$, com raio $R=1$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$1+2x+3x^2+\cdots+(n+1)x^n+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — derivar a série base</span>
              <p>$\dfrac1{1-x}=\displaystyle\sum_{n=0}^\infty x^n$, $|x|&lt;1$. Derivando termo a termo (lícito dentro do raio):</p>
              $$\frac1{(1-x)^2}=\sum_{n=1}^\infty nx^{n-1}.$$
              <span class="step-label">Passo 2 — reindexar a partir de $0$</span>
              <p>Trocando $n\to n+1$:</p>
              $$\frac1{(1-x)^2}=\sum_{n=0}^\infty(n+1)x^n=1+2x+3x^2+\cdots.$$
              <div class="final">Soma $=\dfrac1{(1-x)^2}$, com raio $R=1$.</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$x+2x^2+3x^3+\cdots+nx^n+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — usar o resultado do item anterior</span>
              <p>Do item anterior, $\displaystyle\sum_{n=0}^\infty(n+1)x^n=\dfrac1{(1-x)^2}$.</p>
              <span class="step-label">Passo 2 — multiplicar por $x$ e reindexar</span>
              $$x\cdot\frac1{(1-x)^2}=\sum_{n=0}^\infty(n+1)x^{n+1}=\sum_{m=1}^\infty mx^m=x+2x^2+3x^3+\cdots.$$
              <div class="final">Soma $=\dfrac x{(1-x)^2}$, com raio $R=1$.</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$x+2x^3+3x^5+\cdots+nx^{2n-1}+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — usar $\sum nt^{n-1}=\frac1{(1-t)^2}$ com $t=x^2$</span>
              <p>Do item 5, $\displaystyle\sum_{n=1}^\infty nt^{n-1}=\dfrac1{(1-t)^2}$, $|t|&lt;1$. Substituindo $t=x^2$:</p>
              $$\sum_{n=1}^\infty n(x^2)^{n-1}=\frac1{(1-x^2)^2}.$$
              <span class="step-label">Passo 2 — multiplicar por $x$</span>
              $$x\sum_{n=1}^\infty nx^{2n-2}=\sum_{n=1}^\infty nx^{2n-1}=x+2x^3+3x^5+\cdots=\frac x{(1-x^2)^2}.$$
              <div class="final">Soma $=\dfrac x{(1-x^2)^2}$, com raio $R=1$.</div>
            `
          },
          {
            label: '8',
            statement: String.raw`$\dfrac{x^2}{1\cdot2}-\dfrac{x^3}{2\cdot3}+\dfrac{x^4}{3\cdot4}-\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série de $\ln(1+x)$ por integração da geométrica alternada</span>
              <p>$\dfrac1{1+t}=\displaystyle\sum_{n=0}^\infty(-1)^nt^n$, $|t|&lt;1$; integrando de $0$ a $x$:</p>
              $$\ln(1+x)=\sum_{n=0}^\infty\frac{(-1)^n}{n+1}x^{n+1}=\sum_{k=1}^\infty\frac{(-1)^{k-1}}kx^k.$$
              <span class="step-label">Passo 2 — integrar $\ln(1+x)$ mais uma vez, termo a termo</span>
              <p>$$\int_0^x\ln(1+t)\,dt=\sum_{k=1}^\infty\frac{(-1)^{k-1}}k\int_0^xt^k\,dt=\sum_{k=1}^\infty\frac{(-1)^{k-1}}{k(k+1)}x^{k+1}.$$
              Trocando o índice $m=k+1$ (logo $(-1)^{k-1}=(-1)^m$):</p>
              $$\int_0^x\ln(1+t)\,dt=\sum_{m=2}^\infty\frac{(-1)^m}{(m-1)m}x^m=\frac{x^2}{1\cdot2}-\frac{x^3}{2\cdot3}+\frac{x^4}{3\cdot4}-\cdots.$$
              <span class="step-label">Passo 3 — calcular a integral por partes</span>
              <p>Com $u=\ln(1+t)$ e $dv=dt$: $\displaystyle\int_0^x\ln(1+t)\,dt=\big[(1+t)\ln(1+t)-t\big]_0^x=(1+x)\ln(1+x)-x$.</p>
              <div class="final">Soma $=(1+x)\ln(1+x)-x$, com raio $R=1$.</div>
            `
          },
          {
            label: '9',
            statement: String.raw`$1+4x+9x^2+16x^3+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — decompor $(n+1)^2=n(n+1)+(n+1)$</span>
              <p>Queremos $S(x)=\displaystyle\sum_{n=0}^\infty(n+1)^2x^n$. Do item 5, $S_1(x)=\displaystyle\sum_{n=0}^\infty(n+1)x^n=\dfrac1{(1-x)^2}$.</p>
              <span class="step-label">Passo 2 — obter $\sum n(n+1)x^n$ via derivada de $S_1$</span>
              <p>Derivando $S_1$: $S_1'(x)=\displaystyle\sum_{n=1}^\infty n(n+1)x^{n-1}=\dfrac2{(1-x)^3}$, logo $xS_1'(x)=\displaystyle\sum_{n=0}^\infty n(n+1)x^n=\dfrac{2x}{(1-x)^3}$.</p>
              <span class="step-label">Passo 3 — somar as duas peças</span>
              $$S(x)=xS_1'(x)+S_1(x)=\frac{2x}{(1-x)^3}+\frac1{(1-x)^2}=\frac{2x+(1-x)}{(1-x)^3}=\frac{1+x}{(1-x)^3}.$$
              <div class="final">Soma $=\dfrac{1+x}{(1-x)^3}$, com raio $R=1$.</div>
            `
          },
          {
            label: '10',
            statement: String.raw`$x+2^3x^2+3^3x^3+4^3x^4+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — operador $D=x\frac{d}{dx}$ aplicado a $\frac1{1-x}$</span>
              <p>Partindo de $T_0(x)=\dfrac1{1-x}=\displaystyle\sum_{n=0}^\infty x^n$ e aplicando $D=x\dfrac{d}{dx}$ (que multiplica cada termo $x^n$ por $n$):</p>
              $$D\,T_0=\sum_{n=0}^\infty nx^n=\frac x{(1-x)^2}.$$
              <span class="step-label">Passo 2 — segunda aplicação: $\sum n^2x^n$</span>
              $$D^2T_0=D\left(\frac x{(1-x)^2}\right)=x\cdot\frac{(1-x)^2+2x(1-x)}{(1-x)^4}=\frac{x+x^2}{(1-x)^3}=\sum_{n=0}^\infty n^2x^n.$$
              <span class="step-label">Passo 3 — terceira aplicação: $\sum n^3x^n$</span>
              <p>Derivando $f(x)=\dfrac{x+x^2}{(1-x)^3}$ obtém-se $f'(x)=\dfrac{1+4x+x^2}{(1-x)^4}$, e então:</p>
              $$D^3T_0=x\,f'(x)=\frac{x+4x^2+x^3}{(1-x)^4}=\sum_{n=0}^\infty n^3x^n=x+8x^2+27x^3+\cdots.$$
              <div class="final">Soma $=\dfrac{x+4x^2+x^3}{(1-x)^4}$, com raio $R=1$.</div>
            `
          },
          {
            label: '11',
            statement: String.raw`$4+5x+6x^2+7x^3+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — separar em duas séries conhecidas</span>
              <p>$4+5x+6x^2+7x^3+\cdots=\displaystyle\sum_{n=0}^\infty(n+4)x^n=\sum_{n=0}^\infty nx^n+4\sum_{n=0}^\infty x^n$.</p>
              <span class="step-label">Passo 2 — usar as somas já obtidas</span>
              <p>$\displaystyle\sum_{n=0}^\infty nx^n=\dfrac x{(1-x)^2}$ (item 6) e $\displaystyle\sum_{n=0}^\infty x^n=\dfrac1{1-x}$.</p>
              <span class="step-label">Passo 3 — combinar sobre denominador comum</span>
              $$\frac x{(1-x)^2}+\frac4{1-x}=\frac{x+4(1-x)}{(1-x)^2}=\frac{4-3x}{(1-x)^2}.$$
              <div class="final">Soma $=\dfrac{4-3x}{(1-x)^2}$, com raio $R=1$.</div>
            `
          },
          {
            label: '12',
            statement: String.raw`$\dfrac{x^4}4+\dfrac{x^8}8+\dfrac{x^{12}}{12}+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série base geométrica com razão $x^4$</span>
              <p>$\dfrac{t^3}{1-t^4}=\displaystyle\sum_{n=1}^\infty t^{4n-1}$, $|t|&lt;1$.</p>
              <span class="step-label">Passo 2 — integrar termo a termo de $0$ a $x$</span>
              $$\int_0^x\frac{t^3}{1-t^4}\,dt=\sum_{n=1}^\infty\int_0^xt^{4n-1}\,dt=\sum_{n=1}^\infty\frac{x^{4n}}{4n}=\frac{x^4}4+\frac{x^8}8+\frac{x^{12}}{12}+\cdots.$$
              <span class="step-label">Passo 3 — calcular a integral com $u=t^4$</span>
              <p>Com $u=t^4$, $du=4t^3dt$: $\displaystyle\int_0^x\dfrac{t^3}{1-t^4}dt=\dfrac14\displaystyle\int_0^{x^4}\dfrac{du}{1-u}=-\dfrac14\ln(1-x^4)$.</p>
              <div class="final">Soma $=-\dfrac14\ln(1-x^4)$, com raio $R=1$.</div>
            `
          }
        ]
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
          <p>Utilizando as somas obtidas no item anterior, calcule as somas das séries numéricas abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac1{n2^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — soma-base do item anterior</span>
              <p>Do item anterior (parte 1), $-\ln(1-x)=\displaystyle\sum_{n=1}^\infty\dfrac{x^n}n$, válida para $|x|&lt;1$; vamos usar $x=\tfrac12$, dentro do raio.</p>
              <span class="step-label">Passo 2 — substituir $x=1/2$</span>
              $$-\ln\left(1-\frac12\right)=\sum_{n=1}^\infty\frac{(1/2)^n}n\ \Longrightarrow\ -\ln\frac12=\sum_{n=1}^\infty\frac1{n2^n}.$$
              <span class="step-label">Passo 3 — simplificar</span>
              <p>$-\ln\tfrac12=\ln2$.</p>
              <div class="final">$\displaystyle\sum_{n=1}^\infty\frac1{n2^n}=\ln2$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac n{3^{2n}}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer $3^{2n}=9^n$</span>
              <p>$3^{2n}=9^n$, logo a série é $\displaystyle\sum_{n=1}^\infty n\left(\dfrac19\right)^n$.</p>
              <span class="step-label">Passo 2 — soma-base do item anterior</span>
              <p>Do item anterior (parte 6), $\displaystyle\sum_{n=1}^\infty nx^n=\dfrac x{(1-x)^2}$, $|x|&lt;1$.</p>
              <span class="step-label">Passo 3 — substituir $x=1/9$</span>
              $$\sum_{n=1}^\infty n\left(\frac19\right)^n=\frac{1/9}{\left(1-\frac19\right)^2}=\frac{1/9}{(8/9)^2}=\frac{1/9}{64/81}=\frac{81}{9\cdot64}=\frac9{64}.$$
              <div class="final">$\displaystyle\sum_{n=1}^\infty\frac n{3^{2n}}=\frac9{64}$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\frac{(-1)^n}{5^n\,n(n-1)}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — soma-base auxiliar por dupla integração</span>
              <p>Usando $\dfrac1{n(n-1)}=\dfrac1{n-1}-\dfrac1n$ e o mesmo tipo de dupla integração da geométrica feita no item anterior (parte 8, mas sem alternância de sinal), obtém-se, para $|y|&lt;1$:</p>
              $$\sum_{n=2}^\infty\frac{y^n}{n(n-1)}=(1-y)\ln(1-y)+y.$$
              <span class="step-label">Passo 2 — identificar $y=-1/5$</span>
              <p>Aqui $\dfrac{(-1)^n}{5^n}=\left(-\dfrac15\right)^n$, então tomamos $y=-\tfrac15$ na fórmula do Passo 1:</p>
              $$\sum_{n=2}^\infty\frac{(-1)^n}{5^nn(n-1)}=\left(1+\frac15\right)\ln\left(1+\frac15\right)-\frac15=\frac65\ln\frac65-\frac15.$$
              <span class="step-label">Passo 3 — conferência numérica</span>
              <p>Somando os primeiros termos diretamente: $n=2\colon\ \tfrac1{50}=0{,}02$; $n=3\colon\ -\tfrac1{750}\approx-0{,}00133$; $n=4\colon\ \tfrac1{7500}\approx0{,}000133$; soma parcial $\approx0{,}0188$. E $\tfrac65\ln\tfrac65-\tfrac15\approx0{,}2188-0{,}2=0{,}0188$: os valores coincidem, confirmando a fórmula fechada.</p>
              <div class="final">$\displaystyle\sum_{n=2}^\infty\frac{(-1)^n}{5^nn(n-1)}=\frac65\ln\frac65-\frac15\approx0{,}0188$.</div>
              <p><em>Observação: a resolução original (não convertida) deste item indicava o valor $\ln\tfrac65-\tfrac15\approx-0{,}0177$, que é negativo — incompatível com a série, cujo primeiro termo ($n=2$) já vale $+0{,}02$ e domina os demais em módulo. O valor correto, obtido substituindo $y=-1/5$ na soma fechada $(1-y)\ln(1-y)+y$, é $\tfrac65\ln\tfrac65-\tfrac15$, confirmado pela conferência numérica acima.</em></p>
            `
          }
        ]
      },
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
          <p>Usando o desenvolvimento em série, obtenha um valor aproximado de cada quantidade abaixo, respeitando a precisão pedida. A estratégia geral é truncar a série de Taylor da função envolvida e usar uma cota para o resto — a estimativa de Lagrange quando a série é de termos positivos, ou a estimativa de Leibniz (erro $&lt;$ primeiro termo desprezado) quando a série é alternada — para descobrir quantos termos bastam. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$e$, com erro $&lt;10^{-5}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série de Maclaurin de $e^x$ em $x=1$</span>
              <p>Como $e^x=\displaystyle\sum_{n=0}^\infty\frac{x^n}{n!}$ converge para todo $x\in\mathbb R$, em $x=1$ obtemos $e=\displaystyle\sum_{n=0}^\infty\frac1{n!}$.</p>
              <span class="step-label">Passo 2 — cota de Lagrange para o resto</span>
              <p>Truncando após o termo $n=N$, o resto de Lagrange é $R_N=\dfrac{e^{c}}{(N+1)!}$ para algum $c\in(0,1)$. Como $e^{c}&lt;e&lt;3$,</p>
              $$R_N&lt;\frac{3}{(N+1)!}.$$
              <span class="step-label">Passo 3 — escolher $N$ e somar</span>
              <p>Com $N=8$: $\dfrac{3}{9!}=\dfrac3{362880}\approx8{,}3\times10^{-6}&lt;10^{-5}$. Somando até $n=8$:</p>
              $$\sum_{n=0}^{8}\frac1{n!}=1+1+0{,}5+0{,}166667+0{,}041667+0{,}008333+0{,}001389+0{,}000198+0{,}0000248\approx2{,}71828.$$
              <div class="final">$e\approx\displaystyle\sum_{n=0}^{8}\frac1{n!}\approx2{,}71828$ (erro $&lt;10^{-5}$, bastam $9$ termos).</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\sin1$, com erro $&lt;10^{-5}$ e $&lt;10^{-7}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série de $\sin x$ em $x=1$</span>
              <p>$\sin x=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+1}}{(2n+1)!}$, série alternada. Em $x=1$: $\sin1=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^n}{(2n+1)!}$.</p>
              <span class="step-label">Passo 2 — estimativa de Leibniz</span>
              <p>Como os módulos $\tfrac1{(2n+1)!}$ decrescem estritamente a $0$, ao truncar no índice $n=N$ o erro é menor que o primeiro termo desprezado, $\tfrac1{(2N+3)!}$.</p>
              <span class="step-label">Passo 3 — precisão $10^{-5}$</span>
              <p>Com $N=2$ o próximo termo é $\tfrac1{7!}=\tfrac1{5040}\approx1{,}98\times10^{-4}&gt;10^{-5}$: não basta. Com $N=3$, o próximo termo é $\tfrac1{9!}\approx2{,}76\times10^{-6}&lt;10^{-5}$. Somando $n=0$ a $3$:</p>
              $$1-\frac1{3!}+\frac1{5!}-\frac1{7!}=1-0{,}166667+0{,}008333-0{,}000198\approx0{,}841468.$$
              <span class="step-label">Passo 4 — precisão $10^{-7}$</span>
              <p>Precisamos que o termo desprezado seja $&lt;10^{-7}$: com $N=4$ o próximo termo é $\tfrac1{11!}\approx2{,}51\times10^{-8}&lt;10^{-7}$. Somando até $n=4$ (soma anterior $+\tfrac1{9!}$):</p>
              $$0{,}841468+0{,}0000028\approx0{,}841471.$$
              <div class="final">$\sin1\approx0{,}841468$ (erro $&lt;10^{-5}$, $4$ termos) &nbsp; e &nbsp; $\sin1\approx0{,}841471$ (erro $&lt;10^{-7}$, $5$ termos).</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\ln2$ e $\ln3$, com erro $&lt;10^{-5}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher uma série de convergência rápida</span>
              <p>A série alternada $\ln(1+x)=\sum(-1)^{n-1}x^n/n$ em $x=1$ converge lentamente demais. É melhor usar $\ln\!\left(\dfrac{1+x}{1-x}\right)=2\displaystyle\sum_{n=0}^\infty\dfrac{x^{2n+1}}{2n+1}$, cuja razão entre termos consecutivos é $\approx x^2$ (geométrica, rápida para $x$ pequeno). Para $\ln2$: $\tfrac{1+x}{1-x}=2\Rightarrow x=\tfrac13$. Para $\ln3$: $\tfrac{1+x}{1-x}=3\Rightarrow x=\tfrac12$.</p>
              <span class="step-label">Passo 2 — cota do resto (termos positivos)</span>
              <p>Como todos os termos $2x^{2n+1}/(2n+1)$ são positivos e decrescem geometricamente (razão $\approx x^2$), o resto após $N$ termos é aproximadamente $\tfrac{2x^{2N+3}}{(2N+3)(1-x^2)}$, da ordem do primeiro termo desprezado.</p>
              <span class="step-label">Passo 3 — $\ln2$ com $x=1/3$</span>
              <p>Termos $2\cdot\tfrac{(1/3)^{2n+1}}{2n+1}$: $0{,}666667;\ 0{,}024691;\ 0{,}001646;\ 0{,}000131;\ 0{,}0000113;\dots$ O quinto termo já é $&lt;10^{-5}$, então somando $n=0$ a $4$:</p>
              $$\ln2\approx0{,}666667+0{,}024691+0{,}001646+0{,}000131+0{,}0000113\approx0{,}693146.$$
              <span class="step-label">Passo 4 — $\ln3$ com $x=1/2$</span>
              <p>Termos $2\cdot\tfrac{(1/2)^{2n+1}}{2n+1}$: $1;\ 0{,}083333;\ 0{,}0125;\ 0{,}002232;\ 0{,}000434;\ 0{,}0000888;\ 0{,}0000188;\dots$ Somando $n=0$ a $6$ (resto seguinte $&lt;10^{-5}$):</p>
              $$\ln3\approx2\sum_{n=0}^{6}\frac{(1/2)^{2n+1}}{2n+1}\approx1{,}098607.$$
              <div class="final">$\ln2\approx0{,}693146$ ($5$ termos) &nbsp; e &nbsp; $\ln3\approx1{,}098607$ ($7$ termos), ambos com erro $&lt;10^{-5}$.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\arctan(1/2)$ e $\arctan(1/3)$, com erro $&lt;10^{-5}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série de $\arctan x$</span>
              <p>$\arctan x=\displaystyle\sum_{n=0}^\infty(-1)^n\dfrac{x^{2n+1}}{2n+1}$, alternada para $|x|\le1$; erro $&lt;$ primeiro termo desprezado (Leibniz).</p>
              <span class="step-label">Passo 2 — $\arctan(1/2)$</span>
              <p>Termos $(-1)^n\tfrac{(1/2)^{2n+1}}{2n+1}$: $0{,}5;\ -0{,}041667;\ 0{,}00625;\ -0{,}001116;\ 0{,}000217;\ -0{,}0000444;\ 0{,}0000094;\dots$ O termo $n=6$ já é $&lt;10^{-5}$; somando $n=0$ a $5$:</p>
              $$0{,}5-0{,}041667+0{,}00625-0{,}001116+0{,}000217-0{,}0000444\approx0{,}463640.$$
              <span class="step-label">Passo 3 — $\arctan(1/3)$</span>
              <p>Termos $(-1)^n\tfrac{(1/3)^{2n+1}}{2n+1}$: $0{,}333333;\ -0{,}012346;\ 0{,}000823;\ -0{,}0000653;\ 0{,}0000056;\dots$ O termo $n=4$ já é $&lt;10^{-5}$; somando $n=0$ a $3$:</p>
              $$0{,}333333-0{,}012346+0{,}000823-0{,}0000653\approx0{,}321745.$$
              <div class="final">$\arctan(1/2)\approx0{,}463640$ ($6$ termos) &nbsp; e &nbsp; $\arctan(1/3)\approx0{,}321745$ ($4$ termos), ambos com erro $&lt;10^{-5}$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\pi/4$, com erro $&lt;10^{-5}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série de Leibniz para $\pi/4$</span>
              <p>Fazendo $x=1$ na série de $\arctan$: $\dfrac\pi4=\arctan1=\displaystyle\sum_{n=0}^\infty\dfrac{(-1)^n}{2n+1}$, alternada, mas com termos $\tfrac1{2n+1}$ que decrescem muito lentamente (como a série harmônica).</p>
              <span class="step-label">Passo 2 — cota de Leibniz</span>
              <p>Truncando no índice $N$, o erro é menor que o primeiro termo desprezado, $\tfrac1{2(N+1)+1}=\tfrac1{2N+3}$.</p>
              <span class="step-label">Passo 3 — resolver para erro $&lt;10^{-5}$</span>
              <p>$\dfrac1{2N+3}&lt;10^{-5}\iff2N+3&gt;10^{5}\iff N&gt;49998{,}5$, logo $N=49999$ (ou seja, cerca de $5\times10^4$ termos, bem mais que os poucos termos usados para $\arctan(1/2)$ e $\arctan(1/3)$).</p>
              <div class="final">$\dfrac\pi4\approx\displaystyle\sum_{n=0}^{49999}\frac{(-1)^n}{2n+1}\approx0{,}78539$ (erro $&lt;10^{-5}$, exigindo $\sim5\times10^4$ termos — essa série converge lentamente).</div>
            `
          }
        ]
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
          <p>Utilizando expansão em série de potências, calcule os limites abaixo. A ideia é substituir cada função pela sua série de Maclaurin, simplificar o quociente algebricamente e só então fazer $x\to0$ — dessa forma o limite sai direto, sem L'Hôpital. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\displaystyle\lim_{x\to0}\frac{\sin x}x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — expandir $\sin x$</span>
              <p>$\sin x=x-\dfrac{x^3}{3!}+\dfrac{x^5}{5!}-\cdots$ (série de Maclaurin, válida para todo $x$).</p>
              <span class="step-label">Passo 2 — dividir por $x$</span>
              <p>Para $x\ne0$: $\dfrac{\sin x}x=1-\dfrac{x^2}{3!}+\dfrac{x^4}{5!}-\cdots$.</p>
              <span class="step-label">Passo 3 — tomar $x\to0$</span>
              <p>Todos os termos com potências positivas de $x$ tendem a $0$, restando apenas a constante $1$.</p>
              <div class="final">$\displaystyle\lim_{x\to0}\frac{\sin x}x=1$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — expandir $\cos x$</span>
              <p>$\cos x=1-\dfrac{x^2}{2!}+\dfrac{x^4}{4!}-\cdots$.</p>
              <span class="step-label">Passo 2 — montar o numerador e dividir por $x^2$</span>
              <p>$1-\cos x=\dfrac{x^2}{2!}-\dfrac{x^4}{4!}+\cdots$, logo $\dfrac{1-\cos x}{x^2}=\dfrac12-\dfrac{x^2}{24}+\cdots$.</p>
              <span class="step-label">Passo 3 — tomar $x\to0$</span>
              <p>Os termos com $x$ desaparecem, restando $\tfrac12$.</p>
              <div class="final">$\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — expandir $\sin x$</span>
              <p>$\sin x=x-\dfrac{x^3}{3!}+\dfrac{x^5}{5!}-\cdots$.</p>
              <span class="step-label">Passo 2 — montar o numerador e dividir por $x^3$</span>
              <p>$x-\sin x=\dfrac{x^3}{3!}-\dfrac{x^5}{5!}+\cdots$, logo $\dfrac{x-\sin x}{x^3}=\dfrac16-\dfrac{x^2}{120}+\cdots$.</p>
              <span class="step-label">Passo 3 — tomar $x\to0$</span>
              <p>Os termos com $x$ desaparecem, restando $\tfrac16$.</p>
              <div class="final">$\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}=\frac16$.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\displaystyle\lim_{x\to0^+}\dfrac{\cos x-\left(1-\tfrac{x^2}2+\tfrac{x^4}{4!}\right)}{x^\alpha}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar o numerador como a "cauda" da série de $\cos x$</span>
              <p>A série completa é $\cos x=1-\dfrac{x^2}{2!}+\dfrac{x^4}{4!}-\dfrac{x^6}{6!}+\dfrac{x^8}{8!}-\cdots$. Subtraindo o polinômio $1-\tfrac{x^2}2+\tfrac{x^4}{4!}$ (que é exatamente a soma dos três primeiros termos), sobra a cauda a partir de $x^6$:</p>
              $$\cos x-\left(1-\frac{x^2}2+\frac{x^4}{4!}\right)=-\frac{x^6}{6!}+\frac{x^8}{8!}-\cdots$$
              <span class="step-label">Passo 2 — dividir por $x^\alpha$</span>
              <p>$$\frac{\cos x-\left(1-\tfrac{x^2}2+\tfrac{x^4}{4!}\right)}{x^\alpha}=-\frac{x^{6-\alpha}}{6!}+\frac{x^{8-\alpha}}{8!}-\cdots$$</p>
              <span class="step-label">Caso 1 — $\alpha=6$</span>
              <p>Sobra $-\dfrac1{6!}+\dfrac{x^2}{8!}-\cdots\to-\dfrac1{6!}$.</p>
              <span class="step-label">Caso 2 — $\alpha&lt;6$ e $\alpha&gt;6$</span>
              <p>Se $\alpha&lt;6$, o expoente $6-\alpha&gt;0$ e todo o lado direito $\to0$. Se $\alpha&gt;6$, o expoente $6-\alpha&lt;0$; como $x\to0^+$ e o termo dominante tem coeficiente $-1/6!&lt;0$, temos $x^{6-\alpha}\to+\infty$ e o limite é $-\infty$.</p>
              <div class="final">Limite $=-\dfrac1{6!}$ se $\alpha=6$; $=0$ se $\alpha&lt;6$; $=-\infty$ se $\alpha&gt;6$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\displaystyle\lim_{x\to0^+}\dfrac{\sin x-\left(x-\tfrac{x^3}{3!}+\tfrac{x^5}{5!}\right)}{x^\alpha}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar o numerador como a "cauda" da série de $\sin x$</span>
              <p>A série completa é $\sin x=x-\dfrac{x^3}{3!}+\dfrac{x^5}{5!}-\dfrac{x^7}{7!}+\dfrac{x^9}{9!}-\cdots$. Subtraindo o polinômio $x-\tfrac{x^3}{3!}+\tfrac{x^5}{5!}$, sobra a cauda a partir de $x^7$:</p>
              $$\sin x-\left(x-\frac{x^3}{3!}+\frac{x^5}{5!}\right)=-\frac{x^7}{7!}+\frac{x^9}{9!}-\cdots$$
              <span class="step-label">Passo 2 — dividir por $x^\alpha$</span>
              <p>$$\frac{\sin x-\left(x-\tfrac{x^3}{3!}+\tfrac{x^5}{5!}\right)}{x^\alpha}=-\frac{x^{7-\alpha}}{7!}+\frac{x^{9-\alpha}}{9!}-\cdots$$</p>
              <span class="step-label">Caso 1 — $\alpha=7$</span>
              <p>Sobra $-\dfrac1{7!}+\dfrac{x^2}{9!}-\cdots\to-\dfrac1{7!}$.</p>
              <span class="step-label">Caso 2 — $\alpha&lt;7$ e $\alpha&gt;7$</span>
              <p>Se $\alpha&lt;7$, o expoente $7-\alpha&gt;0$ e o lado direito $\to0$. Se $\alpha&gt;7$, o expoente $7-\alpha&lt;0$; com $x\to0^+$ e coeficiente dominante $-1/7!&lt;0$, o limite é $-\infty$.</p>
              <div class="final">Limite $=-\dfrac1{7!}$ se $\alpha=7$; $=0$ se $\alpha&lt;7$; $=-\infty$ se $\alpha&gt;7$.</div>
            `
          }
        ]
      },
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
          <p>Ache a série de Fourier, a soma da série (indicando a que valor ela converge em cada ponto, inclusive nas descontinuidades) e o gráfico de $f$ e da soma, para cada função de período $2\pi$ definida a seguir. Em todos os itens, use as fórmulas de Euler–Fourier $a_0=\tfrac1\pi\int_{-\pi}^\pi f(x)\,dx$, $a_n=\tfrac1\pi\int_{-\pi}^\pi f(x)\cos nx\,dx$, $b_n=\tfrac1\pi\int_{-\pi}^\pi f(x)\sin nx\,dx$, explore a paridade de $f$ quando ela existir, e conclua com o Teorema de Dirichlet (soma $=f(x)$ nos pontos de continuidade, e $=\tfrac{f(x^-)+f(x^+)}2$ nas descontinuidades). Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$f(x)=a$ se $-\pi&lt;x\le0$; $f(x)=b$ se $0&lt;x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — cálculo de $a_0$</span>
              <p>$$a_0=\frac1\pi\left(\int_{-\pi}^0a\,dx+\int_0^\pi b\,dx\right)=\frac1\pi\big(a\pi+b\pi\big)=a+b.$$</p>
              <span class="step-label">Passo 2 — cálculo de $a_n$ ($n\ge1$)</span>
              <p>Usando $\int\cos(nx)\,dx=\dfrac{\sin(nx)}n$:</p>
              $$\int_{-\pi}^0\cos(nx)\,dx=\left[\frac{\sin nx}n\right]_{-\pi}^0=\frac{\sin(n\pi)}n=0,\qquad \int_0^\pi\cos(nx)\,dx=\left[\frac{\sin nx}n\right]_0^\pi=\frac{\sin(n\pi)}n=0,$$
              <p>pois $\sin(n\pi)=0$ para todo inteiro $n$. Logo $a_n=0$ para todo $n\ge1$.</p>
              <span class="step-label">Passo 3 — cálculo de $b_n$ (integração direta)</span>
              <p>Usando $\int\sin(nx)\,dx=-\dfrac{\cos(nx)}n$:</p>
              $$\int_{-\pi}^0\sin(nx)\,dx=\left[-\frac{\cos nx}n\right]_{-\pi}^0=-\frac{1-\cos(n\pi)}n=-\frac{1-(-1)^n}n,$$
              $$\int_0^\pi\sin(nx)\,dx=\left[-\frac{\cos nx}n\right]_0^\pi=-\frac{\cos(n\pi)-1}n=\frac{1-(-1)^n}n.$$
              <p>Então $b_n=\dfrac1\pi\Big[-a\cdot\dfrac{1-(-1)^n}n+b\cdot\dfrac{1-(-1)^n}n\Big]=\dfrac{(b-a)\big(1-(-1)^n\big)}{n\pi}$.</p>
              <span class="step-label">Passo 4 — simplificar por paridade de $n$</span>
              <p>Se $n$ é par, $(-1)^n=1$ e $b_n=0$. Se $n$ é ímpar, $(-1)^n=-1$ e $b_n=\dfrac{2(b-a)}{n\pi}$. Escrevendo $n=2k-1$: $b_{2k-1}=\dfrac{2(b-a)}{(2k-1)\pi}$.</p>
              <span class="step-label">Passo 5 — série e convergência (Dirichlet)</span>
              <p>A série é $\dfrac{a+b}2+\dfrac{2(b-a)}\pi\displaystyle\sum_{k=1}^\infty\dfrac{\sin\big((2k-1)x\big)}{2k-1}$. Como $f$ é contínua em todo ponto exceto nos múltiplos de $\pi$ (onde salta de $a$ para $b$ ou de $b$ para $a$), pelo Teorema de Dirichlet a soma vale $f(x)$ fora desses pontos e a <em>média dos limites laterais</em> $\tfrac{a+b}2$ nos próprios múltiplos de $\pi$.</p>
              <div class="final">Série: $\dfrac{a+b}2+\dfrac{2(b-a)}\pi\displaystyle\sum_{k=1}^\infty\dfrac{\sin\big((2k-1)x\big)}{2k-1}$.<br>
              Soma: $a$ em $(2k-1)\pi&lt;x&lt;2k\pi$; $b$ em $2k\pi&lt;x&lt;(2k+1)\pi$; $\dfrac{a+b}2$ em $x=k\pi$ (todo $k\in\mathbb Z$).</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$f(x)=ax$ se $-\pi&lt;x\le0$; $f(x)=bx$ se $0&lt;x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — cálculo de $a_0$</span>
              <p>$$a_0=\frac1\pi\left(\int_{-\pi}^0ax\,dx+\int_0^\pi bx\,dx\right)=\frac1\pi\left[a\cdot\frac{x^2}2\Big|_{-\pi}^0+b\cdot\frac{x^2}2\Big|_0^\pi\right]=\frac1\pi\left(-a\frac{\pi^2}2+b\frac{\pi^2}2\right)=\frac{\pi(b-a)}2,$$</p>
              <p>logo $\dfrac{a_0}2=\dfrac{(b-a)\pi}4$.</p>
              <span class="step-label">Passo 2 — cálculo de $a_n$ (integração por partes)</span>
              <p>Com $\displaystyle\int x\cos(nx)\,dx=\frac{x\sin nx}n+\frac{\cos nx}{n^2}$ (por partes, $u=x$, $dv=\cos(nx)dx$):</p>
              $$\int_{-\pi}^0 x\cos(nx)\,dx=\frac{1-(-1)^n}{n^2},\qquad \int_0^\pi x\cos(nx)\,dx=-\frac{1-(-1)^n}{n^2}$$
              <p>(avaliando os limites e usando $\sin(n\pi)=0$, $\cos(\pm n\pi)=(-1)^n$). Logo</p>
              $$a_n=\frac1\pi\left[a\cdot\frac{1-(-1)^n}{n^2}-b\cdot\frac{1-(-1)^n}{n^2}\right]=\frac{(a-b)\big(1-(-1)^n\big)}{n^2\pi},$$
              <p>que é $0$ para $n$ par e $\dfrac{2(a-b)}{n^2\pi}$ para $n$ ímpar (isto é, $a_{2k-1}=\dfrac{2(a-b)}{(2k-1)^2\pi}$).</p>
              <span class="step-label">Passo 3 — cálculo de $b_n$ (integração por partes)</span>
              <p>Com $\displaystyle\int x\sin(nx)\,dx=-\frac{x\cos nx}n+\frac{\sin nx}{n^2}$:</p>
              $$\int_{-\pi}^0 x\sin(nx)\,dx=-\frac{\pi(-1)^n}n,\qquad \int_0^\pi x\sin(nx)\,dx=-\frac{\pi(-1)^n}n,$$
              <p>logo $b_n=\dfrac1\pi\left[-a\dfrac{\pi(-1)^n}n-b\dfrac{\pi(-1)^n}n\right]=-\dfrac{(a+b)(-1)^n}n$, isto é, $b_n=\dfrac{(a+b)(-1)^{n-1}}n$ — aqui não há simplificação por paridade, pois $b_n\ne0$ para todo $n$.</p>
              <span class="step-label">Passo 4 — série e convergência (Dirichlet)</span>
              <p>A função é contínua em $x=0$ (ambos os ramos tendem a $0$) mas tem um salto em $x=\pi$: o ramo direito dá $f(\pi)=b\pi$, enquanto a extensão periódica do ramo esquerdo dá, em $x\to\pi^+$ (equivalente a $x\to-\pi^+$ do próximo período), o valor $-a\pi$. A soma nos múltiplos ímpares de $\pi$ é a média $\tfrac{b\pi-a\pi}2=\tfrac{(b-a)\pi}2$.</p>
              <div class="final">Série: $\dfrac{(b-a)\pi}4+\dfrac{2(a-b)}\pi\displaystyle\sum_{k=1}^\infty\dfrac{\cos\big((2k-1)x\big)}{(2k-1)^2}-(a+b)\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^n\sin(nx)}n$.<br>
              Soma: é a extensão $2\pi$-periódica, isto é, $a(x-2k\pi)$ se $(2k-1)\pi&lt;x\le2k\pi$ e $b(x-2k\pi)$ se $2k\pi\le x&lt;(2k+1)\pi$; nos saltos $x=(2k+1)\pi$ vale $\dfrac{(b-a)\pi}2$.</div>
              <p><em>Observação: no período central ($k=0$) isso é literalmente $ax$ e $bx$, mas fora dele é preciso transladar. Conferência com $a=1$, $b=3$: em $x=3\pi/2$ a série soma $-\pi/2\approx-1{,}571=a(x-2\pi)$, e não $ax=3\pi/2$.</em></p>
            `
          },
          {
            label: '3',
            statement: String.raw`$f(x)=|x|$, $-\pi&lt;x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — usar a paridade</span>
              <p>$f(x)=|x|$ é <strong>par</strong> ($f(-x)=f(x)$), então $b_n=0$ para todo $n$, e as integrais de $a_0,a_n$ podem ser calculadas só em $[0,\pi]$ e dobradas: $a_0=\dfrac2\pi\displaystyle\int_0^\pi x\,dx$ e $a_n=\dfrac2\pi\displaystyle\int_0^\pi x\cos(nx)\,dx$.</p>
              <span class="step-label">Passo 2 — cálculo de $a_0$</span>
              <p>$$a_0=\frac2\pi\int_0^\pi x\,dx=\frac2\pi\cdot\frac{\pi^2}2=\pi.$$</p>
              <span class="step-label">Passo 3 — cálculo de $a_n$ (integração por partes)</span>
              <p>Usando $\displaystyle\int x\cos(nx)\,dx=\frac{x\sin nx}n+\frac{\cos nx}{n^2}$:</p>
              $$\int_0^\pi x\cos(nx)\,dx=\left[\frac{x\sin nx}n+\frac{\cos nx}{n^2}\right]_0^\pi=\frac{(-1)^n}{n^2}-\frac1{n^2}=\frac{(-1)^n-1}{n^2},$$
              $$a_n=\frac2\pi\cdot\frac{(-1)^n-1}{n^2}.$$
              <span class="step-label">Passo 4 — simplificar por paridade de $n$</span>
              <p>Se $n$ é par, $a_n=0$. Se $n$ é ímpar, $a_n=\dfrac{2(-2)}{n^2\pi}=-\dfrac4{\pi n^2}$, isto é, $a_{2k-1}=-\dfrac4{\pi(2k-1)^2}$.</p>
              <span class="step-label">Passo 5 — série e convergência (Dirichlet)</span>
              <p>$f(x)=|x|$ é contínua em todo $x\in\mathbb R$, incluindo as emendas $x=\pm\pi$ (onde $f(\pi)=f(-\pi)=\pi$ coincidem por periodicidade). Logo a série converge para $f(x)$ em <strong>todo</strong> ponto.</p>
              <div class="final">Série: $\dfrac\pi2-\dfrac4\pi\displaystyle\sum_{k=1}^\infty\dfrac{\cos\big((2k-1)x\big)}{(2k-1)^2}$.<br>
              Soma: $|x|$ para todo $x$ (incluindo $x=\pm\pi$), estendida periodicamente — a série representa $f$ em toda a reta.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$f(x)=e^{ax}$, $-\pi&lt;x\le\pi$, $a\ne0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — cálculo de $a_0$</span>
              <p>$$a_0=\frac1\pi\int_{-\pi}^\pi e^{ax}\,dx=\frac1{a\pi}\Big[e^{ax}\Big]_{-\pi}^\pi=\frac{e^{a\pi}-e^{-a\pi}}{a\pi}=\frac{2\sinh(a\pi)}{a\pi},$$</p>
              <p>logo $\dfrac{a_0}2=\dfrac{\sinh(a\pi)}{a\pi}$.</p>
              <span class="step-label">Passo 2 — cálculo de $a_n$ (integração por partes dupla)</span>
              <p>Usando a primitiva padrão $\displaystyle\int e^{ax}\cos(nx)\,dx=\frac{e^{ax}\big(a\cos nx+n\sin nx\big)}{a^2+n^2}$ (obtida integrando por partes duas vezes) e $\sin(\pm n\pi)=0$, $\cos(\pm n\pi)=(-1)^n$:</p>
              $$\int_{-\pi}^\pi e^{ax}\cos(nx)\,dx=\frac{a(-1)^n}{a^2+n^2}\Big(e^{a\pi}-e^{-a\pi}\Big)=\frac{2a(-1)^n\sinh(a\pi)}{a^2+n^2},$$
              $$a_n=\frac{2a(-1)^n\sinh(a\pi)}{\pi(a^2+n^2)}.$$
              <span class="step-label">Passo 3 — cálculo de $b_n$ (integração por partes dupla)</span>
              <p>Analogamente, com $\displaystyle\int e^{ax}\sin(nx)\,dx=\frac{e^{ax}\big(a\sin nx-n\cos nx\big)}{a^2+n^2}$:</p>
              $$\int_{-\pi}^\pi e^{ax}\sin(nx)\,dx=\frac{-n(-1)^n}{a^2+n^2}\Big(e^{a\pi}-e^{-a\pi}\Big)=\frac{-2n(-1)^n\sinh(a\pi)}{a^2+n^2},$$
              $$b_n=\frac{-2n(-1)^n\sinh(a\pi)}{\pi(a^2+n^2)}.$$
              <span class="step-label">Passo 4 — juntar $a_n\cos nx+b_n\sin nx$ e Dirichlet</span>
              <p>$a_n\cos(nx)+b_n\sin(nx)=\dfrac{2(-1)^n\sinh(a\pi)}{\pi(a^2+n^2)}\big(a\cos nx-n\sin nx\big)$. Aqui $f$ não tem simetria par nem ímpar (não há simplificação por paridade), pois $e^{ax}$ não satisfaz $f(-x)=\pm f(x)$. A função é contínua em $(-\pi,\pi)$, mas há um salto na emenda $x=\pi$: $f(\pi^-)=e^{a\pi}$ e a extensão periódica dá $f(\pi^+)=e^{-a\pi}$; a soma aí é a média $\cosh(a\pi)$.</p>
              <div class="final">Série: $\dfrac{\sinh(a\pi)}{a\pi}+\dfrac{2\sinh(a\pi)}\pi\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^n}{n^2+a^2}\big(a\cos nx-n\sin nx\big)$.<br>
              Soma: $e^{ax}$ em $(-\pi,\pi)$; $\cosh(a\pi)$ em $x=(2k+1)\pi$, estendida periodicamente.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$f(x)=\sin(ax)$, $-\pi&lt;x\le\pi$, $a\notin\mathbb Z$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — usar a paridade</span>
              <p>$f(x)=\sin(ax)$ é <strong>ímpar</strong>, logo $a_0=a_n=0$ para todo $n$, e $b_n=\dfrac2\pi\displaystyle\int_0^\pi\sin(ax)\sin(nx)\,dx$ (o produto de duas funções ímpares é par, e por isso a integral em $[-\pi,\pi]$ é o dobro da integral em $[0,\pi]$).</p>
              <span class="step-label">Passo 2 — produto-para-soma e integração</span>
              <p>$\sin(ax)\sin(nx)=\tfrac12\big[\cos((a-n)x)-\cos((a+n)x)\big]$. Como $a\notin\mathbb Z$, $a\ne n$, e</p>
              $$\int_0^\pi\cos(kx)\,dx=\frac{\sin(k\pi)}k\quad(k\ne0)\ \Longrightarrow\ b_n=\frac1\pi\left[\frac{\sin\big((a-n)\pi\big)}{a-n}-\frac{\sin\big((a+n)\pi\big)}{a+n}\right].$$
              <span class="step-label">Passo 3 — simplificar os senos</span>
              <p>Como $\sin(n\pi)=0$ e $\cos(n\pi)=(-1)^n$ para $n$ inteiro:</p>
              $$\sin\big((a\mp n)\pi\big)=\sin(a\pi)\cos(n\pi)\mp\cos(a\pi)\sin(n\pi)=(-1)^n\sin(a\pi).$$
              <p>Logo $b_n=\dfrac{(-1)^n\sin(a\pi)}\pi\left[\dfrac1{a-n}-\dfrac1{a+n}\right]=\dfrac{(-1)^n\sin(a\pi)}\pi\cdot\dfrac{2n}{a^2-n^2}$.</p>
              <span class="step-label">Passo 4 — ajustar o sinal e concluir (Dirichlet)</span>
              <p>Como $\dfrac1{a^2-n^2}=-\dfrac1{n^2-a^2}$, obtemos $b_n=\dfrac{2n\sin(a\pi)}\pi\cdot\dfrac{(-1)^{n-1}}{n^2-a^2}$. A função $\sin(ax)$ é contínua em $(-\pi,\pi)$, mas $f(\pi^-)=\sin(a\pi)$ e a extensão periódica dá $f(\pi^+)=\sin(-a\pi)=-\sin(a\pi)$ na emenda; a média é $0$.</p>
              <div class="final">Série: $\dfrac{2\sin(a\pi)}\pi\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}n}{n^2-a^2}\sin(nx)$.<br>
              Soma: $\sin(ax)$ em $(-\pi,\pi)$; $0$ em $x=(2k+1)\pi$, estendida periodicamente.</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$f(x)=ax+b$, $-\pi&lt;x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — separar em parte par e parte ímpar</span>
              <p>Escreva $f(x)=\underbrace{b}_{\text{par}}+\underbrace{ax}_{\text{ímpar}}$. Pela linearidade da integral, a parte par ($b$) só contribui para $a_0$, e a parte ímpar ($ax$) só contribui para $b_n$; ambas as partes dão $a_n=0$ (constante $\times\cos$ integrada em período completo é $0$; ímpar $\times$ par também é ímpar e integra $0$ no intervalo simétrico).</p>
              <span class="step-label">Passo 2 — cálculo de $a_0$</span>
              <p>$$a_0=\frac1\pi\int_{-\pi}^\pi b\,dx=\frac1\pi(2\pi b)=2b\quad\Longrightarrow\quad \frac{a_0}2=b.$$</p>
              <span class="step-label">Passo 3 — cálculo de $b_n$ (integração por partes)</span>
              <p>Só o termo $ax$ contribui: $b_n=\dfrac{2a}\pi\displaystyle\int_0^\pi x\sin(nx)\,dx$ (dobrando por paridade, já que $x\sin(nx)$ é par). Com $\displaystyle\int x\sin(nx)\,dx=-\frac{x\cos nx}n+\frac{\sin nx}{n^2}$:</p>
              $$\int_0^\pi x\sin(nx)\,dx=-\frac{\pi(-1)^n}n,\qquad b_n=\frac{2a}\pi\left(-\frac{\pi(-1)^n}n\right)=-\frac{2a(-1)^n}n=\frac{2a(-1)^{n-1}}n.$$
              <span class="step-label">Passo 4 — série e convergência (Dirichlet)</span>
              <p>$f(x)=ax+b$ é contínua em $(-\pi,\pi)$; na emenda $x=\pi$, $f(\pi^-)=a\pi+b$ e a extensão periódica dá $f(\pi^+)=-a\pi+b$ (valor do ramo em $x=-\pi$); a soma aí é a média $b$.</p>
              <div class="final">Série: $b+2a\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}n\sin(nx)$.<br>
              Soma: $ax+b$ em $(-\pi,\pi)$; $b$ em $x=(2k+1)\pi$, estendida periodicamente.</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$f(x)=|\cos x|$, $-\pi&lt;x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — paridade e cálculo de $a_0$</span>
              <p>$f$ é <strong>par</strong>, então $b_n=0$ e basta calcular em $[0,\pi]$, dobrando. Como $\cos x\ge0$ em $[0,\tfrac\pi2]$ e $\cos x\le0$ em $[\tfrac\pi2,\pi]$:</p>
              $$a_0=\frac2\pi\left(\int_0^{\pi/2}\cos x\,dx-\int_{\pi/2}^\pi\cos x\,dx\right)=\frac2\pi\Big[(1-0)-(0-1)\Big]=\frac4\pi,\qquad\frac{a_0}2=\frac2\pi.$$
              <span class="step-label">Passo 2 — cálculo de $a_n$ com produto-para-soma</span>
              <p>Usando $\cos x\cos(nx)=\tfrac12\big[\cos((n-1)x)+\cos((n+1)x)\big]$ (para $n\ne1$) e integrando em cada metade, os termos de fronteira em $x=\pi$ e $x=0$ envolvem $\sin\big((n\mp1)\pi/2\big)$. Verifica-se por simetria (a segunda integral, em $[\pi/2,\pi]$, é o negativo da primeira, em $[0,\pi/2]$) que</p>
              $$a_n=\frac2\pi\left[\frac{\sin\big((n-1)\pi/2\big)}{n-1}+\frac{\sin\big((n+1)\pi/2\big)}{n+1}\right].$$
              <span class="step-label">Passo 3 — simplificar por paridade de $n$</span>
              <p>Se $n$ é ímpar, $n\pm1$ são pares e $\sin\big((n\mp1)\pi/2\big)=0$ (seno de múltiplo inteiro de $\pi$): logo $a_n=0$ para todo $n$ ímpar (o caso $n=1$ se confirma calculando $a_1=\tfrac2\pi\int_0^\pi|\cos x|\cos x\,dx=0$ direto, pois as duas metades se cancelam). Se $n=2k$ é par, $n\mp1$ são ímpares e $\sin\big((2k-1)\pi/2\big)=(-1)^{k-1}$, $\sin\big((2k+1)\pi/2\big)=(-1)^{k}=-(-1)^{k-1}$, dando</p>
              $$a_{2k}=\frac2\pi(-1)^{k-1}\left[\frac1{2k-1}-\frac1{2k+1}\right]=\frac2\pi(-1)^{k-1}\cdot\frac2{4k^2-1}=\frac4{\pi}\cdot\frac{(-1)^{k-1}}{4k^2-1}.$$
              <span class="step-label">Passo 4 — série e convergência (Dirichlet)</span>
              <p>Só sobrevivem os harmônicos pares $\cos(2kx)$. Como $f(x)=|\cos x|$ é composição de funções contínuas, $f$ é contínua em <strong>todo</strong> $x\in\mathbb R$ (não há saltos nem nas emendas $x=\pm\pi$, onde $f(\pi)=f(-\pi)=1$), de modo que pelo Teorema de Dirichlet a série converge para $f(x)$ em todo ponto.</p>
              <div class="final">Série: $\dfrac2\pi+\dfrac4\pi\displaystyle\sum_{k=1}^\infty\dfrac{(-1)^{k-1}}{4k^2-1}\cos(2kx)$.<br>
              Soma: $|\cos x|$ para todo $x\in\mathbb R$ — a série representa $f$ em toda a reta.</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 2 · Item 16',
        statement: String.raw`
          <p>Cada igualdade abaixo é uma série de Fourier — de senos, de cossenos ou completa, conforme o caso — obtida diretamente das fórmulas de Euler-Fourier aplicadas a uma extensão adequada (par ou ímpar) da função indicada. Em cada item, identifique a extensão usada, calcule os coeficientes por integração (direta ou por partes) e conclua, pelo Teorema de Dirichlet, que a série converge à função no intervalo aberto apontado. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$1=\dfrac4\pi\left(\sin x+\tfrac13\sin3x+\tfrac15\sin5x+\cdots\right)$, $0&lt;x&lt;\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — extensão ímpar (onda quadrada)</span>
              <p>Para obter uma série só de senos, estenda $f(x)=1$, $0&lt;x&lt;\pi$, de forma <strong>ímpar</strong> a $(-\pi,\pi)$: $f(x)=-1$ para $-\pi&lt;x&lt;0$, e $2\pi$-periódica. Sendo $f$ ímpar, $a_n=0$ para todo $n$; restam só os $b_n$.</p>
              <span class="step-label">Passo 2 — cálculo de $b_n$</span>
              $$b_n=\frac2\pi\int_0^\pi1\cdot\sin(nx)\,dx=\frac2\pi\left[-\frac{\cos(nx)}n\right]_0^\pi=\frac2{n\pi}\big(1-\cos(n\pi)\big)=\frac2{n\pi}\big(1-(-1)^n\big).$$
              <p>Logo $b_n=0$ se $n$ é par, e $b_n=\dfrac4{n\pi}$ se $n$ é ímpar.</p>
              <span class="step-label">Passo 3 — série e conclusão por Dirichlet</span>
              <p>Somando apenas os índices ímpares $n=1,3,5,\dots$:</p>
              $$\sum_{n\text{ ímpar}}\frac4{n\pi}\sin(nx)=\frac4\pi\left(\sin x+\frac13\sin3x+\frac15\sin5x+\cdots\right).$$
              <p>Em $0&lt;x&lt;\pi$, $f$ é constante e contínua, logo pelo Teorema de Dirichlet a série converge exatamente a $f(x)=1$.</p>
              <div class="final">$1=\dfrac4\pi\displaystyle\sum_{k=0}^\infty\dfrac{\sin\big((2k+1)x\big)}{2k+1}$ para $0&lt;x&lt;\pi$: identidade confirmada.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\pi-x=2\left(\sin x+\tfrac12\sin2x+\tfrac13\sin3x+\cdots\right)$, $0&lt;x&lt;\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — extensão ímpar</span>
              <p>Estenda $f(x)=\pi-x$, $0&lt;x&lt;\pi$, de forma ímpar a $(-\pi,\pi)$ (isto é, $f(-x)=-f(x)$), $2\pi$-periódica. Sendo ímpar, $a_n=0$ e a série tem só senos.</p>
              <span class="step-label">Passo 2 — $b_n$ por integração por partes</span>
              <p>Com $u=\pi-x$, $dv=\sin(nx)\,dx$, logo $du=-dx$, $v=-\cos(nx)/n$:</p>
              $$\int_0^\pi(\pi-x)\sin(nx)\,dx=\left[-(\pi-x)\frac{\cos(nx)}n\right]_0^\pi-\frac1n\int_0^\pi\cos(nx)\,dx=\frac\pi n-0=\frac\pi n.$$
              <p>Logo $b_n=\dfrac2\pi\cdot\dfrac\pi n=\dfrac2n$, para <em>todo</em> $n\ge1$ — diferente do item 1, aqui nenhum índice se anula.</p>
              <span class="step-label">Passo 3 — série e conclusão</span>
              $$\sum_{n=1}^\infty\frac2n\sin(nx)=2\left(\sin x+\frac12\sin2x+\frac13\sin3x+\cdots\right).$$
              <p>$f(x)=\pi-x$ é contínua em $(0,\pi)$, logo pelo Teorema de Dirichlet a série converge a $\pi-x$ nesse intervalo aberto.</p>
              <div class="final">$\pi-x=2\displaystyle\sum_{n=1}^\infty\dfrac{\sin(nx)}n$ para $0&lt;x&lt;\pi$: identidade confirmada.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$x^2=\dfrac{\pi^2}3+4\left(-\cos x+\tfrac{\cos2x}{2^2}-\tfrac{\cos3x}{3^2}+\cdots\right)$, $-\pi&lt;x&lt;\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — paridade: série completa em cossenos</span>
              <p>$f(x)=x^2$ já está definida em todo $(-\pi,\pi)$ e é <strong>par</strong> ($f(-x)=f(x)$); não há extensão a fazer. Sendo par, $b_n=0$ e a série de Fourier completa se reduz a cossenos.</p>
              <span class="step-label">Passo 2 — coeficiente $a_0$</span>
              $$a_0=\frac1\pi\int_{-\pi}^\pi x^2dx=\frac2\pi\int_0^\pi x^2dx=\frac2\pi\cdot\frac{\pi^3}3=\frac{2\pi^2}3\ \Longrightarrow\ \frac{a_0}2=\frac{\pi^2}3.$$
              <span class="step-label">Passo 3 — coeficientes $a_n$ por partes duplas</span>
              <p>Usando $\displaystyle\int x^2\cos(nx)\,dx=\frac{x^2}n\sin(nx)+\frac{2x}{n^2}\cos(nx)-\frac2{n^3}\sin(nx)$ (checável por derivação) entre $0$ e $\pi$:</p>
              $$\int_0^\pi x^2\cos(nx)\,dx=\frac{2\pi}{n^2}\cos(n\pi)=\frac{2\pi(-1)^n}{n^2}\ \Longrightarrow\ a_n=\frac2\pi\cdot\frac{2\pi(-1)^n}{n^2}=\frac{4(-1)^n}{n^2}.$$
              <span class="step-label">Passo 4 — série e conclusão</span>
              $$\frac{a_0}2+\sum_{n=1}^\infty a_n\cos(nx)=\frac{\pi^2}3+4\sum_{n=1}^\infty\frac{(-1)^n}{n^2}\cos(nx)=\frac{\pi^2}3+4\left(-\cos x+\frac{\cos2x}{2^2}-\frac{\cos3x}{3^2}+\cdots\right).$$
              <p>$f(x)=x^2$ é contínua em toda a reta, logo a igualdade vale em todo $-\pi&lt;x&lt;\pi$ pelo Teorema de Dirichlet.</p>
              <div class="final">$x^2=\dfrac{\pi^2}3+4\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^n}{n^2}\cos(nx)$ para $-\pi&lt;x&lt;\pi$: identidade confirmada.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$x(\pi-x)=\dfrac{\pi^2}6-\left(\cos2x+\tfrac{\cos4x}{2^2}+\tfrac{\cos6x}{3^2}+\cdots\right)$, $0&lt;x&lt;\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — extensão par</span>
              <p>Estenda $f(x)=x(\pi-x)$, $0&lt;x&lt;\pi$, de forma <strong>par</strong> a $(-\pi,\pi)$. Sendo par, $b_n=0$; calculamos $a_0$ e $a_n=\tfrac2\pi\int_0^\pi x(\pi-x)\cos(nx)\,dx$.</p>
              <span class="step-label">Passo 2 — coeficiente $a_0$</span>
              $$a_0=\frac2\pi\int_0^\pi(\pi x-x^2)\,dx=\frac2\pi\left(\frac{\pi^3}2-\frac{\pi^3}3\right)=\frac2\pi\cdot\frac{\pi^3}6=\frac{\pi^2}3\ \Longrightarrow\ \frac{a_0}2=\frac{\pi^2}6.$$
              <span class="step-label">Passo 3 — $a_n$ reaproveitando o item 3</span>
              <p>Com $\displaystyle\int_0^\pi x\cos(nx)\,dx=\frac{(-1)^n-1}{n^2}$ e $\displaystyle\int_0^\pi x^2\cos(nx)\,dx=\frac{2\pi(-1)^n}{n^2}$ (item anterior):</p>
              $$a_n=\frac2\pi\left[\pi\cdot\frac{(-1)^n-1}{n^2}-\frac{2\pi(-1)^n}{n^2}\right]=\frac2{n^2}\Big[(-1)^n-1-2(-1)^n\Big]=-\frac2{n^2}\big[(-1)^n+1\big].$$
              <p>Se $n$ é ímpar, $(-1)^n+1=0$, logo $a_n=0$. Se $n=2k$ é par, $(-1)^n+1=2$, logo $a_{2k}=-\dfrac4{4k^2}=-\dfrac1{k^2}$: só sobrevivem harmônicos pares — coerente com a simetria de $f$ em torno de $x=\pi/2$.</p>
              <span class="step-label">Passo 4 — série e conclusão</span>
              $$\frac{a_0}2+\sum_{k=1}^\infty a_{2k}\cos(2kx)=\frac{\pi^2}6-\sum_{k=1}^\infty\frac{\cos(2kx)}{k^2}=\frac{\pi^2}6-\left(\cos2x+\frac{\cos4x}{2^2}+\frac{\cos6x}{3^2}+\cdots\right).$$
              <p>$f$ é contínua em $[0,\pi]$; pelo Teorema de Dirichlet a série converge a $x(\pi-x)$ em $0&lt;x&lt;\pi$.</p>
              <div class="final">$x(\pi-x)=\dfrac{\pi^2}6-\displaystyle\sum_{k=1}^\infty\dfrac{\cos(2kx)}{k^2}$ para $0&lt;x&lt;\pi$: identidade confirmada.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$x(\pi-x)=\dfrac8\pi\left(\sin x+\tfrac{\sin3x}{3^3}+\tfrac{\sin5x}{5^3}+\cdots\right)$, $0&lt;x&lt;\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — extensão ímpar</span>
              <p>Agora estenda a mesma $f(x)=x(\pi-x)$, $0&lt;x&lt;\pi$, de forma <strong>ímpar</strong> a $(-\pi,\pi)$. Sendo ímpar, $a_n=0$ e $b_n=\tfrac2\pi\int_0^\pi x(\pi-x)\sin(nx)\,dx$.</p>
              <span class="step-label">Passo 2 — $b_n$ por partes</span>
              <p>Usando $\int x\sin(nx)\,dx=-\tfrac xn\cos(nx)+\tfrac1{n^2}\sin(nx)$ e $\int x^2\sin(nx)\,dx=-\tfrac{x^2}n\cos(nx)+\tfrac{2x}{n^2}\sin(nx)+\tfrac2{n^3}\cos(nx)$, obtém-se</p>
              $$\int_0^\pi x(\pi-x)\sin(nx)\,dx=\pi\int_0^\pi x\sin(nx)\,dx-\int_0^\pi x^2\sin(nx)\,dx=\frac{2\big(1-(-1)^n\big)}{n^3}.$$
              <span class="step-label">Passo 3 — só harmônicos ímpares</span>
              <p>Logo $b_n=\dfrac2\pi\cdot\dfrac{2(1-(-1)^n)}{n^3}=\dfrac{4(1-(-1)^n)}{\pi n^3}$: se $n$ é par, $b_n=0$; se $n$ é ímpar, $b_n=\dfrac8{\pi n^3}$.</p>
              <span class="step-label">Passo 4 — série e conclusão</span>
              $$\sum_{n\text{ ímpar}}\frac8{\pi n^3}\sin(nx)=\frac8\pi\left(\sin x+\frac{\sin3x}{3^3}+\frac{\sin5x}{5^3}+\cdots\right).$$
              <p>Pelo Teorema de Dirichlet, como $f$ é contínua em $(0,\pi)$, a série converge a $x(\pi-x)$ nesse intervalo.</p>
              <div class="final">$x(\pi-x)=\dfrac8\pi\displaystyle\sum_{k=0}^\infty\dfrac{\sin\big((2k+1)x\big)}{(2k+1)^3}$ para $0&lt;x&lt;\pi$: identidade confirmada.</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 2 · Item 17', examStyle: true,
        statement: String.raw`
          <p>Usando as identidades do exercício anterior (Item 16), avalie cada série de Fourier em um ponto $x$ especial — onde $\sin(nx)$ ou $\cos(nx)$ assume valores simples como $0,\pm1,\pm\tfrac{\sqrt2}2$ — para obter as somas numéricas abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\dfrac\pi4=1-\dfrac13+\dfrac15-\dfrac17+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher o ponto</span>
              <p>Parta do item 16.1: $1=\dfrac4\pi\left(\sin x+\tfrac13\sin3x+\tfrac15\sin5x+\cdots\right)$, válida em $0&lt;x&lt;\pi$. Avalie em $x=\pi/2$.</p>
              <span class="step-label">Passo 2 — calcular $\sin(n\pi/2)$</span>
              <p>Para $n$ ímpar, $\sin(n\pi/2)$ cicla em $1,-1,1,-1,\dots$: $\sin(\pi/2)=1$, $\sin(3\pi/2)=-1$, $\sin(5\pi/2)=1$, $\sin(7\pi/2)=-1,\dots$</p>
              <span class="step-label">Passo 3 — substituir e isolar</span>
              $$1=\frac4\pi\left(1-\frac13+\frac15-\frac17+\cdots\right)\ \Longrightarrow\ \frac\pi4=1-\frac13+\frac15-\frac17+\cdots.$$
              <div class="final">$\dfrac\pi4=1-\dfrac13+\dfrac15-\dfrac17+\cdots$ (série de Leibniz).</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\dfrac{\pi^2}6=1+\dfrac1{2^2}+\dfrac1{3^2}+\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher o ponto</span>
              <p>Parta do item 16.3: $x^2=\dfrac{\pi^2}3+4\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^n}{n^2}\cos(nx)$, válida em $-\pi&lt;x&lt;\pi$. Avalie em $x=\pi$ (extremo, onde $x^2$ é contínua por periodicidade pois $f(-\pi)=f(\pi)=\pi^2$).</p>
              <span class="step-label">Passo 2 — usar $\cos(n\pi)=(-1)^n$</span>
              <p>Em $x=\pi$: $\cos(n\pi)=(-1)^n$, logo cada termo da soma vale $\dfrac{(-1)^n}{n^2}\cdot(-1)^n=\dfrac1{n^2}$ (o sinal desaparece):</p>
              $$\pi^2=\frac{\pi^2}3+4\sum_{n=1}^\infty\frac1{n^2}.$$
              <span class="step-label">Passo 3 — isolar a soma</span>
              $$4\sum_{n=1}^\infty\frac1{n^2}=\pi^2-\frac{\pi^2}3=\frac{2\pi^2}3\ \Longrightarrow\ \sum_{n=1}^\infty\frac1{n^2}=\frac{\pi^2}6.$$
              <div class="final">$\dfrac{\pi^2}6=1+\dfrac1{2^2}+\dfrac1{3^2}+\cdots$ (problema de Basel).</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\dfrac{\pi^3}{32}=1-\dfrac1{3^3}+\dfrac1{5^3}-\cdots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher o ponto</span>
              <p>Parta do item 16.5: $x(\pi-x)=\dfrac8\pi\left(\sin x+\tfrac{\sin3x}{3^3}+\tfrac{\sin5x}{5^3}+\cdots\right)$, válida em $0&lt;x&lt;\pi$. Avalie em $x=\pi/2$: $\dfrac\pi2\left(\pi-\dfrac\pi2\right)=\dfrac{\pi^2}4$.</p>
              <span class="step-label">Passo 2 — calcular $\sin(n\pi/2)$ para $n$ ímpar</span>
              <p>Mesma sequência do item 1: $\sin(\pi/2)=1,\ \sin(3\pi/2)=-1,\ \sin(5\pi/2)=1,\ \sin(7\pi/2)=-1,\dots$</p>
              <span class="step-label">Passo 3 — substituir e isolar</span>
              $$\frac{\pi^2}4=\frac8\pi\left(1-\frac1{3^3}+\frac1{5^3}-\cdots\right)\ \Longrightarrow\ 1-\frac1{3^3}+\frac1{5^3}-\cdots=\frac\pi8\cdot\frac{\pi^2}4=\frac{\pi^3}{32}.$$
              <div class="final">$\dfrac{\pi^3}{32}=1-\dfrac1{3^3}+\dfrac1{5^3}-\cdots$</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\dfrac{3\pi^3}{128\sqrt2}=1+\dfrac1{3^3}-\dfrac1{5^3}-\dfrac1{7^3}+\cdots$ (padrão de sinais em blocos de 4)`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher o ponto</span>
              <p>Ainda no item 16.5, avalie em $x=\pi/4$: $x(\pi-x)=\dfrac\pi4\cdot\dfrac{3\pi}4=\dfrac{3\pi^2}{16}$.</p>
              <span class="step-label">Passo 2 — calcular $\sin(n\pi/4)$ para $n$ ímpar</span>
              <p>Para $n=1,3,5,7,9,11,13,15,\dots$: $\sin(n\pi/4)=\tfrac{\sqrt2}2,\tfrac{\sqrt2}2,-\tfrac{\sqrt2}2,-\tfrac{\sqrt2}2,\tfrac{\sqrt2}2,\tfrac{\sqrt2}2,-\tfrac{\sqrt2}2,-\tfrac{\sqrt2}2,\dots$ — sinais em blocos de 4 (período 8 em $n$).</p>
              <span class="step-label">Passo 3 — substituir e isolar</span>
              <p>Fatorando $\sqrt2/2$ de cada termo:</p>
              $$\frac{3\pi^2}{16}=\frac8\pi\cdot\frac{\sqrt2}2\left(1+\frac1{3^3}-\frac1{5^3}-\frac1{7^3}+\cdots\right)=\frac{4\sqrt2}\pi\,S,\qquad S=1+\frac1{3^3}-\frac1{5^3}-\frac1{7^3}+\cdots$$
              $$S=\frac{3\pi^2}{16}\cdot\frac\pi{4\sqrt2}=\frac{3\pi^3}{64\sqrt2}=\frac{3\sqrt2\,\pi^3}{128}.$$
              <p><em>Observação:</em> o valor correto dessa soma é $\dfrac{3\pi^3}{64\sqrt2}=\dfrac{3\sqrt2\,\pi^3}{128}$, e não $\dfrac{3\pi^3}{128\sqrt2}=\dfrac{3\sqrt2\,\pi^3}{256}$ como aparece no enunciado — esse último valor é exatamente a metade do correto. Confirma-se numericamente: $S\approx1{,}0277$, enquanto $\dfrac{3\pi^3}{128\sqrt2}\approx0{,}5138$ e $\dfrac{3\pi^3}{64\sqrt2}\approx1{,}0277$.</p>
              <div class="final">$1+\dfrac1{3^3}-\dfrac1{5^3}-\dfrac1{7^3}+\cdots=\dfrac{3\pi^3}{64\sqrt2}$ (o enunciado, com $128\sqrt2$ no denominador, está com um fator $2$ de diferença).</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\dfrac{3\pi}4=\sqrt2+1+\dfrac1{3\sqrt2}-\dfrac15-\cdots$ (padrão de sinais em blocos de 4)`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher o ponto</span>
              <p>Parta do item 16.2: $\pi-x=2\displaystyle\sum_{n=1}^\infty\dfrac{\sin(nx)}n$, válida em $0&lt;x&lt;\pi$. Avalie em $x=\pi/4$: $\pi-\dfrac\pi4=\dfrac{3\pi}4$.</p>
              <span class="step-label">Passo 2 — separar por resíduo de $n$ módulo 4</span>
              <p>Como $\sin(n\pi/4)=0$ para $n\equiv0\pmod4$, os termos não nulos vêm de $n$ ímpar (valor $\pm\tfrac{\sqrt2}2$, em blocos de sinais $++--$) e de $n\equiv2\pmod4$ (valor $\pm1$). Para $n=2,6,10,14,\dots$: $\sin(n\pi/4)=1,-1,1,-1,\dots$, dando $2\sum\dfrac{\sin(n\pi/4)}n=1-\dfrac13+\dfrac15-\dfrac17+\cdots=\dfrac\pi4$ (item 1). Para $n$ ímpar, $2\sum\dfrac{\sin(n\pi/4)}n=\sqrt2\left(1+\dfrac13-\dfrac15-\dfrac17+\cdots\right)$.</p>
              <span class="step-label">Passo 3 — somar as duas partes</span>
              $$\frac{3\pi}4=\sqrt2\left(1+\frac13-\frac15-\frac17+\cdots\right)+\frac\pi4\ \Longrightarrow\ \sqrt2\left(1+\frac13-\frac15-\frac17+\cdots\right)=\frac{3\pi}4-\frac\pi4=\frac\pi2.$$
              <p>Escrevendo os termos de $2\sin(n\pi/4)/n$ na ordem natural de $n=1,2,3,4,5,\dots$ (omitindo os nulos em $n\equiv0$): $\sqrt2+1+\dfrac{\sqrt2}3-\dfrac{\sqrt2}5-\dfrac13-\dfrac{\sqrt2}7+\cdots$, que soma $\dfrac{3\pi}4$.</p>
              <p><em>Observação:</em> o terceiro termo impresso no enunciado, $\dfrac1{3\sqrt2}$, não coincide com o valor correto $\dfrac{\sqrt2}3$ (note que $\dfrac1{3\sqrt2}=\dfrac{\sqrt2}6\ne\dfrac{\sqrt2}3$); é provavelmente uma transcrição arredondada da mesma soma. A igualdade numérica $\dfrac{3\pi}4=\sqrt2+1+\dfrac{\sqrt2}3-\dfrac{\sqrt2}5-\dfrac13-\cdots$, obtida diretamente da avaliação em $x=\pi/4$, é a que se confirma.</p>
              <div class="final">$\dfrac{3\pi}4=\sqrt2+1+\dfrac{\sqrt2}3-\dfrac{\sqrt2}5-\dfrac13-\dfrac{\sqrt2}7+\cdots$, com sinais em blocos de 4 nos termos de índice ímpar.</div>
            `
          }
        ]
      },
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
          <p>Para cada $f$ dada em $[0,\pi]$, ache a série de senos (extensão ímpar a $(-\pi,\pi)$, só $b_n$) e a série de cossenos (extensão par, só $a_n$), identifique a soma de cada série pelo Teorema de Dirichlet, e compare com o gráfico de $f$. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$f(x)=ax$, $0\le x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série de senos (extensão ímpar)</span>
              <p>A extensão ímpar de $f(x)=ax$ é a própria reta $ax$ em $(-\pi,\pi)$. Como $\displaystyle\int_0^\pi x\sin(nx)\,dx=-\frac{\pi(-1)^n}n$ (por partes), tem-se</p>
              $$b_n=\frac2\pi\int_0^\pi ax\sin(nx)\,dx=a\cdot\frac2\pi\left(-\frac{\pi(-1)^n}n\right)=\frac{2a(-1)^{n-1}}n.$$
              <span class="step-label">Passo 2 — série de cossenos (extensão par)</span>
              <p>A extensão par de $f$ é $g(x)=a|x|$. Com $a_0=\tfrac2\pi\int_0^\pi ax\,dx=a\pi$ e, por partes, $\displaystyle\int_0^\pi x\cos(nx)\,dx=\frac{(-1)^n-1}{n^2}$:</p>
              $$a_n=\frac2\pi\cdot a\cdot\frac{(-1)^n-1}{n^2}=\begin{cases}0,&n\text{ par}\\-\dfrac{4a}{\pi n^2},&n\text{ ímpar}\end{cases}$$
              <span class="step-label">Passo 3 — somas por Dirichlet</span>
              <p>A série de senos converge a $ax$ em $(-\pi,\pi)$ e a $0$ em $x=\pm\pi$ (média entre $a\pi$ e $-a\pi$, pela periodicidade ímpar). A série de cossenos converge a $a|x|$ em $[-\pi,\pi]$, função par e contínua nesse intervalo.</p>
              <div class="final">Senos: $2a\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}n\sin nx$ (soma $=ax$ em $(-\pi,\pi)$, $0$ em $x=\pm\pi$).<br>
              Cossenos: $\dfrac{a\pi}2-\dfrac{4a}\pi\displaystyle\sum_{n=1}^\infty\dfrac{\cos\big((2n-1)x\big)}{(2n-1)^2}$ (soma $=a|x|$ em $[-\pi,\pi]$).</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$f(x)=x^2$, $0\le x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série de cossenos (extensão par)</span>
              <p>A extensão par de $x^2$ em $(0,\pi)$ é a própria $x^2$ em $(-\pi,\pi)$ — já é o caso do item 16.3: $a_0/2=\pi^2/3$ e $a_n=\tfrac2\pi\int_0^\pi x^2\cos(nx)dx=4(-1)^n/n^2$ (duas integrações por partes).</p>
              <span class="step-label">Passo 2 — série de senos (extensão ímpar), cálculo de $b_n$</span>
              <p>Com $b_n=\tfrac2\pi\int_0^\pi x^2\sin(nx)\,dx$ e, por partes duplas, $\displaystyle\int_0^\pi x^2\sin(nx)\,dx=-\frac{\pi^2(-1)^n}n+\frac{2\big[(-1)^n-1\big]}{n^3}$:</p>
              $$b_n=\frac2\pi\left[-\frac{\pi^2(-1)^n}n+\frac{2\big[(-1)^n-1\big]}{n^3}\right]=\underbrace{\frac{2\pi(-1)^{n-1}}n}_{\text{sempre presente}}+\underbrace{\frac4{\pi n^3}\big[(-1)^n-1\big]}_{=0\text{ se }n\text{ par},\,=-8/(\pi n^3)\text{ se }n\text{ ímpar}}.$$
              <span class="step-label">Passo 3 — somas por Dirichlet</span>
              <p>Cossenos: soma $=x^2$ em $[-\pi,\pi]$ (função contínua). Senos: soma $=x^2$ em $[0,\pi)$ e $-x^2$ em $(-\pi,0]$ (extensão ímpar), com salto em $x=\pm\pi$.</p>
              <div class="final">Senos: $2\pi\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}n\sin nx-\dfrac8\pi\displaystyle\sum_{n=1}^\infty\dfrac{\sin\big((2n-1)x\big)}{(2n-1)^3}$ (soma $=x^2$ em $[0,\pi)$, $-x^2$ em $(-\pi,0]$).<br>
              Cossenos: $\dfrac{\pi^2}3+4\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^n}{n^2}\cos nx$ (soma $=x^2$ em $[-\pi,\pi]$).</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$f(x)=ax+b$, $0\le x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — combinar linearmente os coeficientes de $ax$ e de $b$</span>
              <p>Por linearidade da integral, os coeficientes de $ax+b$ são a soma dos coeficientes de $ax$ (item 1) com os de uma constante $b$: senos de $b$ dão $\tfrac2\pi\int_0^\pi b\sin(nx)dx=\tfrac{2b}{n\pi}(1-(-1)^n)$; cossenos de $b$ dão $a_0=2b$ e $a_n=0$ para $n\ge1$.</p>
              <span class="step-label">Passo 2 — série de senos</span>
              $$b_n=\underbrace{\frac{2a(-1)^{n-1}}n}_{\text{de }ax}+\underbrace{\frac{2b\big(1-(-1)^n\big)}{n\pi}}_{\text{de }b}=\frac2{n\pi}\Big[b-(-1)^n(b+a\pi)\Big].$$
              <span class="step-label">Passo 3 — série de cossenos</span>
              $$\frac{a_0}2=\frac{a\pi}2+b,\qquad a_n=\underbrace{-\frac{4a}{\pi n^2}\ (n\text{ ímpar}),\ 0\ (n\text{ par})}_{\text{de }ax}+\underbrace{0}_{\text{de }b}.$$
              <span class="step-label">Passo 4 — somas por Dirichlet</span>
              <p>Senos: a extensão ímpar de $ax+b$ dá $ax-b$ em $(-\pi,0)$ e $ax+b$ em $(0,\pi)$. Em $x=0$ todos os senos zeram, então a soma vale $0$ ali — exatamente a média dos saltos $\tfrac{(-b)+b}2$. Cossenos: extensão par dá $a|x|+b$ em $[-\pi,\pi]$.</p>
              <div class="final">Senos: $\displaystyle\sum_{n=1}^\infty\dfrac2{n\pi}\big(b-(a\pi+b)(-1)^n\big)\sin nx$ (soma $=ax-b$ em $(-\pi,0)$; $0$ em $x=0$; $ax+b$ em $(0,\pi)$).<br>
              Cossenos: $\dfrac{a\pi}2+b-\dfrac{4a}\pi\displaystyle\sum_{n=1}^\infty\dfrac{\cos\big((2n-1)x\big)}{(2n-1)^2}$ (soma $=a|x|+b$).</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$f(x)=\sin x$, $0\le x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série de senos: a extensão ímpar é a própria $\sin x$</span>
              <p>Como $\sin x$ já é uma função ímpar, sua extensão ímpar de $[0,\pi]$ a $(-\pi,\pi)$ é ela mesma. Logo sua série de senos é trivial: $b_1=1$ e $b_n=0$ para $n\ge2$ (ela já pertence à base de senos).</p>
              <span class="step-label">Passo 2 — série de cossenos: extensão par $g(x)=|\sin x|$</span>
              <p>A extensão par de $\sin x$, $0\le x\le\pi$, é $g(x)=\sin|x|$; para $x&lt;0$, $\sin|x|=\sin(-x)=-\sin x=|\sin x|$ (pois $\sin x&lt;0$ aí), logo $g(x)=|\sin x|$ em $(-\pi,\pi)$.</p>
              <span class="step-label">Passo 3 — cálculo de $a_0$ e $a_n$ ($n\ge2$) por produto-para-soma</span>
              $$a_0=\frac2\pi\int_0^\pi\sin x\,dx=\frac2\pi\big[-\cos x\big]_0^\pi=\frac4\pi\ \Longrightarrow\ \frac{a_0}2=\frac2\pi.$$
              <p>Usando $\sin x\cos(nx)=\tfrac12\big[\sin((n+1)x)-\sin((n-1)x)\big]$ e integrando em $[0,\pi]$: para $n$ ímpar, $a_n=0$; para $n=2m$ par, $a_{2m}=-\dfrac4{\pi(4m^2-1)}$.</p>
              <span class="step-label">Passo 4 — somas por Dirichlet</span>
              <p>Senos: soma $=\sin x$ (identicamente, para todo $x$). Cossenos: soma $=|\sin x|$ para todo $x\in\mathbb R$ (contínua).</p>
              <div class="final">Senos: a própria função, $\sin x$.<br>
              Cossenos: $\dfrac2\pi-\dfrac4\pi\displaystyle\sum_{n=1}^\infty\dfrac{\cos(2nx)}{4n^2-1}$ (soma $=|\sin x|$ em $\mathbb R$).</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$f(x)=|\cos x|$, $0\le x\le\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — série de cossenos: extensão par de $|\cos x|$</span>
              <p>Como $|\cos x|$ já é par, sua extensão par a $(-\pi,\pi)$ é ela mesma. Com $a_0=\tfrac2\pi\int_0^\pi|\cos x|\,dx=\tfrac2\pi\big(\int_0^{\pi/2}\cos x\,dx-\int_{\pi/2}^\pi\cos x\,dx\big)=\tfrac2\pi(1+1)=\tfrac4\pi$, logo $a_0/2=2/\pi$. Os $a_n$ (via produto-para-soma, separando $[0,\pi/2]$ e $[\pi/2,\pi]$) se anulam para $n$ ímpar e valem $a_{2n}=\dfrac{4(-1)^{n-1}}{\pi(4n^2-1)}$ para $n$ par — mesmo cálculo do item 14.7.</p>
              <span class="step-label">Passo 2 — série de senos: extensão ímpar de $|\cos x|$</span>
              <p>Agora estenda $|\cos x|$, $0\le x\le\pi$, de forma <strong>ímpar</strong>: $g(x)=-|\cos x|$ para $-\pi\le x&lt;0$ e $g(x)=|\cos x|$ para $0&lt;x\le\pi$. Calcula-se $b_n=\tfrac2\pi\int_0^\pi|\cos x|\sin(nx)\,dx$, separando novamente $[0,\pi/2]$ e $[\pi/2,\pi]$ e usando $\cos x\sin(nx)=\tfrac12\big[\sin((n+1)x)+\sin((n-1)x)\big]$.</p>
              <span class="step-label">Passo 3 — organizando o resultado</span>
              <p>O termo $n=1$ sai em separado (pois $n-1=0$ anula um denominador na fórmula geral) e vale $b_1=\tfrac2\pi\int_0^\pi|\cos x|\sin x\,dx=\tfrac2\pi$. Para $n\ge2$, a integração dá $b_n=\dfrac{2n-1+(-1)^n}{\pi n(n-1)}$, com metade desses termos coincidindo com os índices ímpares $2n-1$ que aparecem no somatório.</p>
              <span class="step-label">Passo 4 — somas por Dirichlet</span>
              <p>Cossenos: soma $=|\cos x|$ para todo $x$ (contínua). Senos: soma $=|\cos x|$ para $x\ge0$ e $-|\cos x|$ para $x\le0$ (extensão ímpar), com valor $0$ nos múltiplos de $\pi$ (onde $|\cos x|=1\ne0$ tem salto, e a série converge à média $\tfrac{1+(-1)}2=0$).</p>
              <div class="final">Senos: $\dfrac2\pi\sin x+\displaystyle\sum_{n=2}^\infty\dfrac{2n-1+(-1)^n}{\pi n(n-1)}\sin\big((2n-1)x\big)$ (soma $=-|\cos x|$ para $x\le0$, $|\cos x|$ para $x\ge0$, valor $0$ nos múltiplos de $\pi$).<br>
              Cossenos: $\dfrac2\pi+\dfrac4\pi\displaystyle\sum_{n=1}^\infty\dfrac{(-1)^{n-1}}{4n^2-1}\cos(2nx)$ (soma $=|\cos x|$ para todo $x$).</div>
            `
          }
        ]
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
          <p>A base $\left\{\sin\!\left(\dfrac{(2n-1)\pi x}2\right)\right\}_{n\ge1}$ é ortogonal em $(0,2)$ e cada função dessa base satisfaz $\varphi(x+2)=-\varphi(x)$ (antiperiódica de antiperíodo $2$, logo periódica de período $4$) e $\varphi(-x)=-\varphi(x)$ (ímpar). Toda combinação dessa base herda as duas propriedades, o que permite calcular a soma da série fora do intervalo de definição original. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`Obtenha a série de Fourier da função ímpar $f(x)$, periódica de período $4$, com $f(x)=x$ se $0\le x\le1$ e $f(x)=f(2-x)$ se $1\le x&lt;2$ (função "triangular").`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — só senos, na base de período $4$</span>
              <p>$f$ é ímpar e $2$ vezes o meio-período, então $a_n=0$ e a base é $\sin(n\pi x/2)$, com $b_n=\int_0^2f(x)\sin(n\pi x/2)\,dx$ (norma $\int_0^2\sin^2(n\pi x/2)dx=1$). Como $f(2-x)=f(x)$ (simetria em torno de $x=1$), os harmônicos pares se anulam automaticamente.</p>
              <span class="step-label">Passo 2 — cálculo de $b_n$ por partes, $\omega_n=n\pi/2$</span>
              <p>Separando $\int_0^1x\sin(\omega_nx)dx+\int_1^2(2-x)\sin(\omega_nx)dx$ e usando $\int x\sin(\omega x)dx=-\tfrac x\omega\cos(\omega x)+\tfrac1{\omega^2}\sin(\omega x)$, chega-se, após simplificar, a</p>
              $$b_n=\frac{2\sin\omega_n-\sin(2\omega_n)}{\omega_n^2}.$$
              <span class="step-label">Passo 3 — restringir a $n$ ímpar</span>
              <p>Para $n$ par, $\sin(n\pi/2)=0$ e $\sin(n\pi)=0$, logo $b_n=0$. Para $n$ ímpar, $\sin(n\pi)=0$ e $\sin(n\pi/2)=(-1)^{(n-1)/2}$, dando $b_n=\dfrac{2(-1)^{(n-1)/2}}{\omega_n^2}=\dfrac{8(-1)^{(n-1)/2}}{n^2\pi^2}$. Reindexando $n=2k-1$ ($k\ge1$): $(n-1)/2=k-1$.</p>
              <div class="final">Série: $\dfrac8{\pi^2}\displaystyle\sum_{k=1}^\infty\dfrac{(-1)^{k-1}}{(2k-1)^2}\sin\!\left(\dfrac{(2k-1)\pi x}2\right)$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`Encontre $b_1,b_2,\dots$ tais que $\displaystyle\sum_{n=1}^\infty b_n\sin\!\left(\frac{(2n-1)\pi x}2\right)=\begin{cases}x,&0\le x\le1\\2-x,&1&lt;x&lt;2\end{cases}$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — é a mesma função do item 1, na base de harmônicos ímpares</span>
              <p>A função-alvo é exatamente a $f$ do item (1): $x$ em $[0,1]$ e $2-x=f(2-x)$ em $[1,2)$. A base $\sin\!\left(\tfrac{(2n-1)\pi x}2\right)$ com $n=1,2,3,\dots$ é apenas os harmônicos ímpares $\omega=\pi/2,3\pi/2,5\pi/2,\dots$ já usados no item 1 (lá indexados por $n=2k-1$), reetiquetados aqui com índice $n=k$.</p>
              <span class="step-label">Passo 2 — comparar termo a termo</span>
              <p>Do item 1, o coeficiente de $\sin\!\left(\tfrac{(2k-1)\pi x}2\right)$ é $\dfrac8{\pi^2}\dfrac{(-1)^{k-1}}{(2k-1)^2}$. Renomeando $k\to n$:</p>
              <div class="final">$b_n=\dfrac8{\pi^2}\cdot\dfrac{(-1)^{n-1}}{(2n-1)^2}$, $n\ge1$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`Encontre $c_1,c_2,\dots$ tais que $\displaystyle\sum_{n=1}^\infty c_n\sin\!\left(\frac{(2n-1)\pi x}2\right)=\begin{cases}1-x,&0\le x\le1\\1+x,&1&lt;x&lt;2\end{cases}$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — coeficiente via integral direta, $\omega_n=(2n-1)\pi/2$</span>
              <p>Como a base tem norma $1$ em $(0,2)$: $c_n=\displaystyle\int_0^1(1-x)\sin(\omega_nx)\,dx+\int_1^2(1+x)\sin(\omega_nx)\,dx$.</p>
              <span class="step-label">Passo 2 — as duas integrais por partes</span>
              <p>Com $\int\sin(\omega x)dx=-\cos(\omega x)/\omega$ e $\int x\sin(\omega x)dx=-x\cos(\omega x)/\omega+\sin(\omega x)/\omega^2$, obtém-se, após simplificar as duas parcelas,</p>
              $$c_n=\frac{1+2\cos\omega_n-3\cos(2\omega_n)}{\omega_n}+\frac{\sin(2\omega_n)-2\sin\omega_n}{\omega_n^2}.$$
              <span class="step-label">Passo 3 — usar $\omega_n=(2n-1)\pi/2$: $\cos\omega_n=0$, $\sin\omega_n=(-1)^{n-1}$, $\cos(2\omega_n)=-1$, $\sin(2\omega_n)=0$</span>
              <p>Substituindo:</p>
              $$c_n=\frac{1+0-3(-1)}{\omega_n}+\frac{0-2(-1)^{n-1}}{\omega_n^2}=\frac4{\omega_n}-\frac{2(-1)^{n-1}}{\omega_n^2}=\frac8{(2n-1)\pi}+\frac{8(-1)^n}{(2n-1)^2\pi^2}.$$
              <p><em>Observação:</em> conferindo numericamente para $n=1$ ($\omega_1=\pi/2$): $c_1=8/\pi+8(-1)/\pi^2=8/\pi-8/\pi^2\approx1{,}736$, valor que coincide com o cálculo direto de $\int_0^1(1-x)\sin(\pi x/2)dx+\int_1^2(1+x)\sin(\pi x/2)dx\approx0{,}231+1{,}505=1{,}736$. Isso confirma o coeficiente $8/((2n-1)\pi)$ no primeiro termo (e não $4/((2n-1)\pi)$, valor que às vezes aparece em gabaritos e não passa essa conferência numérica).</p>
              <div class="final">$c_n=\dfrac8{(2n-1)\pi}+\dfrac{8(-1)^n}{(2n-1)^2\pi^2}$, $n\ge1$.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`Quanto vale a soma do item (c) para $x=200$? E para $x=201$?`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reduzir módulo o período $4$</span>
              <p>A soma $S(x)=\sum c_n\sin\!\left(\tfrac{(2n-1)\pi x}2\right)$ satisfaz $S(x+2)=-S(x)$ e $S(-x)=-S(x)$, logo $S(x+4)=S(x)$: período $4$. Como $200=4\cdot50$ e $201=4\cdot50+1$, basta calcular $S(0)$ e $S(1)$.</p>
              <span class="step-label">Passo 2 — $S(0)$ é imediato</span>
              <p>Todo termo da série se anula em $x=0$, pois $\sin\!\left(\tfrac{(2n-1)\pi\cdot0}2\right)=0$. Não há nada a somar:</p>
              $$S(200)=S(0)=0.$$
              <span class="step-label">Passo 3 — para $S(1)$, atenção: a base não é completa</span>
              <p>Cada função da base satisfaz $\varphi(2-x)=\varphi(x)$ (simetria em torno de $x=1$), pois $\sin\!\left(\tfrac{(2n-1)\pi(2-x)}2\right)=\sin\!\big((2n-1)\pi-\omega_nx\big)=\sin(\omega_nx)$. Logo a série só consegue reproduzir a <strong>parte simétrica</strong> de $g$:</p>
              $$h(x)=\frac{g(x)+g(2-x)}2=\begin{cases}2-x,&0&lt;x&lt;1\\ x,&1&lt;x&lt;2.\end{cases}$$
              <span class="step-label">Passo 4 — avaliar em $x=1$</span>
              <p>$h$ é contínua em $x=1$ (os dois ramos valem $1$ ali), então pelo Teorema de Dirichlet a série converge ao próprio valor:</p>
              $$S(201)=S(1)=h(1)=1.$$
              <div class="final">$S(200)=0$ &nbsp; e &nbsp; $S(201)=1$.</div>
              <p><em>Observação: é tentador aplicar Dirichlet direto em $g$ e concluir $S(1)=\tfrac{g(1^-)+g(1^+)}2=\tfrac{0+2}2=1$ — dá o mesmo número aqui, mas por acaso. O objeto que a série representa é $h$, não $g$: por exemplo $S(0^+)=h(0^+)=2$, e não $g(0^+)=1$. Conferência numérica com $60\,000$ termos: $S(0{,}3)=1{,}7000=h(0{,}3)$ e $S(1{,}7)=1{,}7000=h(1{,}7)$.</em></p>
            `
          }
        ]
      },
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
          <p>Determine as constantes que minimizam cada integral quadrática abaixo. Pelo Teorema da Melhor Aproximação em $L^2$: como $\{1,\cos kx,\sin kx\}$ é um sistema ortogonal em $(-\pi,\pi)$, minimizar $\int(f-\text{polinômio trigonométrico})^2dx$ equivale a projetar $f$ ortogonalmente sobre o espaço gerado pelas funções da soma finita — e a projeção ortogonal é dada exatamente pelos coeficientes de Fourier de $f$ nessas funções, um por um, sem interferência entre frequências diferentes. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\displaystyle\int_{-\pi}^\pi\big[x-c_1\sin x-c_2\sin2x-c_3\sin3x\big]^2dx$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — por que $c_k$ = coeficiente de Fourier</span>
              <p>Derivando a integral em relação a $c_k$ e igualando a $0$: $\dfrac\partial{\partial c_k}\displaystyle\int_{-\pi}^\pi(x-\textstyle\sum c_j\sin jx)^2dx=-2\displaystyle\int_{-\pi}^\pi\sin(kx)\Big(x-\sum_jc_j\sin jx\Big)dx=0$. Pela ortogonalidade $\int_{-\pi}^\pi\sin(jx)\sin(kx)dx=0$ se $j\ne k$ e $=\pi$ se $j=k$, essa condição isola $c_k=\dfrac1\pi\displaystyle\int_{-\pi}^\pi x\sin(kx)\,dx=b_k$: o $k$-ésimo coeficiente de Fourier de $f(x)=x$.</p>
              <span class="step-label">Passo 2 — calcular $b_k$</span>
              <p>Do item 14.6 (com $a=1,b=0$) ou por partes direta: $b_k=\dfrac1\pi\displaystyle\int_{-\pi}^\pi x\sin(kx)\,dx=\dfrac{2(-1)^{k-1}}k$.</p>
              <span class="step-label">Passo 3 — avaliar $k=1,2,3$</span>
              $$c_1=\frac{2(-1)^0}1=2,\qquad c_2=\frac{2(-1)^1}2=-1,\qquad c_3=\frac{2(-1)^2}3=\frac23.$$
              <div class="final">$c_1=2,\quad c_2=-1,\quad c_3=\dfrac23$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\displaystyle\int_{-\pi}^\pi\big[x^2-c_1\big]^2dx$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — melhor constante = média</span>
              <p>Aqui o "espaço de aproximação" é gerado só pela função constante $1$. Derivando em $c_1$ e igualando a $0$: $-2\displaystyle\int_{-\pi}^\pi(x^2-c_1)\,dx=0\ \Longrightarrow\ c_1=\dfrac1{2\pi}\displaystyle\int_{-\pi}^\pi x^2\,dx$ — a melhor constante, em $L^2$, é sempre a média de $f$ no intervalo.</p>
              <span class="step-label">Passo 2 — calcular a média</span>
              $$c_1=\frac1{2\pi}\int_{-\pi}^\pi x^2dx=\frac1{2\pi}\cdot\frac{2\pi^3}3=\frac{\pi^2}3.$$
              <div class="final">$c_1=\dfrac{\pi^2}3$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\int_{-\pi}^\pi\big[|\cos x|-c_1-c_2\sin x-c_3\cos x\big]^2dx$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — $c_1$: a média de $|\cos x|$</span>
              $$c_1=\frac1{2\pi}\int_{-\pi}^\pi|\cos x|\,dx=\frac1{2\pi}\cdot4=\frac2\pi$$
              <p>(o valor $4$ vem de $\int_{-\pi}^\pi|\cos x|dx=2\int_0^\pi|\cos x|dx=2\big(\int_0^{\pi/2}\cos x\,dx-\int_{\pi/2}^\pi\cos x\,dx\big)=2(1+1)=4$).</p>
              <span class="step-label">Passo 2 — $c_2$: coeficiente de $\sin x$ é $0$ por paridade</span>
              <p>$c_2=\dfrac1\pi\displaystyle\int_{-\pi}^\pi|\cos x|\sin x\,dx$. Como $|\cos x|$ é par e $\sin x$ é ímpar, o produto é ímpar, e a integral de uma função ímpar num intervalo simétrico é $0$.</p>
              <span class="step-label">Passo 3 — $c_3$: coeficiente de $\cos x$</span>
              <p>$c_3=\dfrac1\pi\displaystyle\int_{-\pi}^\pi|\cos x|\cos x\,dx$. Separando onde $\cos x\ge0$ (isto é, $|\cos x|\cos x=\cos^2x$ em $[-\pi/2,\pi/2]$) de onde $\cos x&lt;0$ (isto é, $|\cos x|\cos x=-\cos^2x$ em $[\pi/2,\pi]\cup[-\pi,-\pi/2]$):</p>
              $$\int_{-\pi}^\pi|\cos x|\cos x\,dx=\int_{-\pi/2}^{\pi/2}\cos^2x\,dx-2\int_{\pi/2}^\pi\cos^2x\,dx=\frac\pi2-2\cdot\frac\pi4=0\ \Longrightarrow\ c_3=0.$$
              <p>(De fato, do item 14.7 / 15.5, a série de cossenos de $|\cos x|$ só tem harmônicos <em>pares</em>, $\cos(2nx)$; não há componente isolada em $\cos x$.)</p>
              <div class="final">$c_1=\dfrac2\pi,\quad c_2=0,\quad c_3=0$.</div>
            `
          }
        ]
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
          <p>$a_n=\tfrac1\pi\int_{-\pi}^\pi x^2e^x\cos nx\,dx$ e $b_n=\tfrac1\pi\int_{-\pi}^\pi x^2e^x\sin nx\,dx$ (três integrações por partes sucessivas, reduzindo o grau de $x^2$ a cada passo, combinadas com as fórmulas padrão de $\int e^x\cos nx\,dx$ e $\int e^x\sin nx\,dx$). O resultado fechado envolve $e^{\pm\pi}$, $(-1)^n$ e frações racionais em $n$.</p>
          <span class="step-label">b — soma nos pontos pedidos</span>
          <p>Por periodicidade de período $2\pi$: $\tfrac{11\pi}2=6\pi-\tfrac\pi2\equiv-\tfrac\pi2\pmod{2\pi}$ (ponto de continuidade dentro de $(-\pi,\pi)$), logo a soma é $f(-\pi/2)=\tfrac{\pi^2}4e^{-\pi/2}$. Já $11\pi\equiv\pi\pmod{2\pi}$, que é ponto de <em>descontinuidade</em> (emenda entre $-\pi$ e $\pi$); a soma é a média $\tfrac{f(\pi^-)+f(-\pi^+)}2=\tfrac{\pi^2e^\pi+\pi^2e^{-\pi}}2=\tfrac{\pi^2}2(e^\pi+e^{-\pi})$.</p>
          <div class="final">$S\!\left(\dfrac{11\pi}2\right)=\dfrac{\pi^2}4e^{-\pi/2}\qquad S(11\pi)=\dfrac{\pi^2}2\big(e^\pi+e^{-\pi}\big)$</div>
        `
      }
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t9', number: '09',
    title: 'Para Decorar',
    subtitle: '— formulário da P2',
    intro: String.raw`
      <p>Tudo o que a P2 cobra <strong>de memória</strong>, levantado das 36 questões das provas de 2023, 2024 e 2025 e da 2ª lista. As tabelas são o formulário para revisão rápida; a coluna <em>caiu em</em> diz onde cada item foi cobrado (ex.: <code>25·Q11</code> = P2 2025, questão 11) — quanto mais entradas, maior a prioridade. Os flashcards no fim testam cada item e mostram de onde ele vem.</p>

      <h3 class="form-h">1 · Séries de Taylor</h3>
      <div class="destaque">
        <p><strong>Unicidade dos coeficientes.</strong> Se $\displaystyle f(x)=\sum_{k=0}^{\infty}c_kx^k$ para $|x|&lt;R$, então</p>
        $$c_k=\frac{f^{(k)}(0)}{k!}\qquad\Longleftrightarrow\qquad f^{(k)}(0)=k!\,c_k.$$
        <p>Ou seja: <strong>toda</strong> série de potências que soma $f$ é a série de Taylor de $f$ — não importa se você chegou nela por substituição, derivação ou integração. Centrada em $a$: $f(x)=\sum c_k(x-a)^k\Rightarrow c_k=\frac{f^{(k)}(a)}{k!}$. Caiu: <code>25·Q6</code> <code>24·Q2</code> <code>23·Q4</code> <code>23·Q6</code>.</p>
      </div>
      <div class="formulario-wrap">
      <table class="formulario">
        <tr><th>Função</th><th>Série de Maclaurin</th><th>Vale em</th></tr>
        <tr class="core"><td>$\dfrac1{1-t}$</td><td>$\displaystyle\sum_{n=0}^{\infty}t^n=1+t+t^2+t^3+\cdots$</td><td>$]-1,1[$</td></tr>
        <tr class="core"><td>$e^t$</td><td>$\displaystyle\sum_{n=0}^{\infty}\frac{t^n}{n!}=1+t+\frac{t^2}{2!}+\frac{t^3}{3!}+\cdots$</td><td>$\mathbb R$</td></tr>
        <tr class="core"><td>$\operatorname{sen}t$</td><td>$\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{2n+1}}{(2n+1)!}=t-\frac{t^3}{3!}+\frac{t^5}{5!}-\cdots$</td><td>$\mathbb R$</td></tr>
        <tr class="core"><td>$\cos t$</td><td>$\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{2n}}{(2n)!}=1-\frac{t^2}{2!}+\frac{t^4}{4!}-\cdots$</td><td>$\mathbb R$</td></tr>
        <tr class="core"><td>$\ln(1+t)$</td><td>$\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}\,t^n}{n}=t-\frac{t^2}{2}+\frac{t^3}{3}-\cdots$</td><td>$]-1,1]$</td></tr>
        <tr class="core"><td>$\operatorname{arctg}t$</td><td>$\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{2n+1}}{2n+1}=t-\frac{t^3}{3}+\frac{t^5}{5}-\cdots$</td><td>$[-1,1]$</td></tr>
        <tr><td>$\dfrac1{1+t}$</td><td>$\displaystyle\sum_{n=0}^{\infty}(-1)^nt^n$</td><td>$]-1,1[$</td></tr>
        <tr><td>$\dfrac1{1+t^2}$</td><td>$\displaystyle\sum_{n=0}^{\infty}(-1)^nt^{2n}$</td><td>$]-1,1[$</td></tr>
        <tr><td>$\dfrac1{(1-t)^2}$</td><td>$\displaystyle\sum_{n=0}^{\infty}(n+1)\,t^n$</td><td>$]-1,1[$</td></tr>
        <tr><td>$\ln(1-t)$</td><td>$\displaystyle-\sum_{n=1}^{\infty}\frac{t^n}{n}$</td><td>$[-1,1[$</td></tr>
        <tr><td>$\operatorname{senh}t$</td><td>$\displaystyle\sum_{n=0}^{\infty}\frac{t^{2n+1}}{(2n+1)!}$</td><td>$\mathbb R$</td></tr>
        <tr><td>$\cosh t$</td><td>$\displaystyle\sum_{n=0}^{\infty}\frac{t^{2n}}{(2n)!}$</td><td>$\mathbb R$</td></tr>
        <tr><td>$(1+t)^\alpha$</td><td>$\displaystyle\sum_{n=0}^{\infty}\binom{\alpha}{n}t^n,\quad\binom{\alpha}{n}=\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}$</td><td>$]-1,1[$</td></tr>
      </table>
      </div>
      <p>As seis linhas destacadas são as que você <strong>precisa saber de cor</strong>; as outras saem delas em uma linha. Caíram: $\operatorname{sen}$ (<code>25·Q4</code>, <code>25·Q7</code>, <code>23·Q4</code>), $\ln$ (<code>24·Q2</code>, <code>24·Q8</code>, <code>23·Q12</code>), $e^t$ (<code>24·Q6</code>, <code>23·Q6</code>), $\operatorname{arctg}$ (<code>23·Q5</code>). Na prova: <strong>substitua</strong> $t$ ($x^2$, $-x$, $\tfrac x5$…), <strong>multiplique</strong> por $x^k$, <strong>derive ou integre</strong> termo a termo.</p>

      <h3 class="form-h">2 · Séries de potências — fatos</h3>
      <div class="formulario-wrap">
      <table class="formulario">
        <tr><th>Fato</th><th>Enunciado</th><th>Caiu em</th></tr>
        <tr class="core"><td>Raio</td><td>$\dfrac1R=\lim\left|\dfrac{a_{n+1}}{a_n}\right|$ ou $\dfrac1R=\lim\sqrt[n]{|a_n|}$; com potências "pulando" ($x^{4n}$) aplique o teste ao <em>termo geral</em></td><td><code>25·Q2</code> <code>25·Q3</code> <code>24·Q3</code> <code>24·Q10</code> <code>23·Q3</code></td></tr>
        <tr class="core"><td>Limites do teste da raiz</td><td>$\left(1+\frac an\right)^n\to e^a$, $\ \sqrt[n]{n}\to1$, $\ \sqrt[n]{\text{polinômio}}\to1$, $\ \sqrt[n]{\ln n}\to1$, $\ \sqrt[n]{n!}\to\infty$</td><td><code>25·Q2</code> <code>24·Q10</code> <code>23·Q3</code></td></tr>
        <tr class="core"><td>Forma do intervalo</td><td>$]x_0-R,x_0+R[\ \subset I\subset[x_0-R,x_0+R]$; se $R=\infty$, $I=\mathbb R$ — nunca algo como $]-10,1[$ ou $]-2,\infty[$</td><td><code>25·Q1</code> <code>23·Q2</code></td></tr>
        <tr class="core"><td>Informação de um ponto</td><td>converge em $a$ $\Rightarrow R\ge|a-x_0|$; diverge $\Rightarrow R\le|a-x_0|$; <strong>condicional</strong> em $a$ $\Rightarrow R=|a-x_0|$; $(|a_n|r^n)$ limitada $\Rightarrow r\le R$</td><td><code>25·Q1</code> <code>23·Q2</code> <code>23·Q8</code></td></tr>
        <tr class="core"><td>Derivar / integrar</td><td>termo a termo dentro do raio; <strong>mesmo $R$</strong>, mas os <strong>extremos podem mudar</strong></td><td><code>25·Q1</code> <code>25·Q7</code> <code>24·Q6</code> <code>23·Q2</code> <code>23·Q5</code> <code>23·Q8</code></td></tr>
        <tr class="core"><td>Coeficiente ↔ derivada</td><td>$f(x)=\sum c_kx^k$ para $|x|&lt;R$ $\Rightarrow c_k=\dfrac{f^{(k)}(0)}{k!}$, isto é, $f^{(k)}(0)=k!\,c_k$; potência ausente $\Rightarrow$ derivada nula</td><td><code>25·Q6</code> <code>24·Q2</code> <code>23·Q4</code> <code>23·Q6</code></td></tr>
        <tr><td>Extremos</td><td>termo geral $\to0$? $\to$ $p$-série / comparação no limite $\to$ Leibniz; se converge, a soma é o limite da função (Abel)</td><td><code>25·Q3</code> <code>24·Q3</code> <code>23·Q5</code> <code>23·Q8</code></td></tr>
        <tr><td>Erro de truncamento</td><td>alternada: $|S-S_k|&lt;b_{k+1}$; Lagrange: $|R_N|\le\dfrac{M\,|x-a|^{N+1}}{(N+1)!}$</td><td><code>24·Q5</code></td></tr>
      </table>
      </div>

      <h3 class="form-h">3 · Séries de Fourier — fórmulas e teoremas</h3>
      <div class="destaque">
        <p><strong>Série de Fourier em $]-\pi,\pi]$</strong> (período $2\pi$):</p>
        $$\frac{a_0}{2}+\sum_{n=1}^{\infty}\big[a_n\cos(nx)+b_n\operatorname{sen}(nx)\big],$$
        <p>com</p>
        $$a_0=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\,dx,$$
        $$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos(nx)\,dx,\qquad b_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\operatorname{sen}(nx)\,dx\qquad(n\ge1).$$
        <p>O termo constante da série é $\frac{a_0}{2}=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)\,dx$, a <strong>média</strong> de $f$ no período. ($a_0$ é a fórmula de $a_n$ com $n=0$, já que $\cos0=1$.)</p>
        <p><strong>Período $2L$</strong> (em $]-L,L]$): troque $nx$ por $\frac{n\pi x}{L}$ e $\frac1\pi$ por $\frac1L$,</p>
        $$a_0=\frac{1}{L}\int_{-L}^{L}f(x)\,dx,$$
        $$a_n=\frac{1}{L}\int_{-L}^{L}f(x)\cos\Big(\frac{n\pi x}{L}\Big)dx,\qquad b_n=\frac{1}{L}\int_{-L}^{L}f(x)\operatorname{sen}\Big(\frac{n\pi x}{L}\Big)dx\qquad(n\ge1).$$
        <p><strong>Paridade</strong> (corta a conta pela metade):</p>
        $$\begin{aligned}f\text{ par}&amp;:\quad b_n=0,\qquad a_0=\frac{2}{L}\int_{0}^{L}f(x)\,dx,\\[2pt] &amp;\phantom{:\quad b_n=0,\qquad}\ a_n=\frac{2}{L}\int_{0}^{L}f(x)\cos\Big(\frac{n\pi x}{L}\Big)dx,\\[6pt] f\text{ ímpar}&amp;:\quad a_n=0,\qquad b_n=\frac{2}{L}\int_{0}^{L}f(x)\operatorname{sen}\Big(\frac{n\pi x}{L}\Big)dx.\end{aligned}$$
        <p><strong>Ortogonalidade</strong> (de onde as fórmulas vêm), para $m,n\ge1$:</p>
        $$\begin{aligned}\int_{-L}^{L}\cos\Big(\frac{m\pi x}{L}\Big)\cos\Big(\frac{n\pi x}{L}\Big)dx&amp;=\int_{-L}^{L}\operatorname{sen}\Big(\frac{m\pi x}{L}\Big)\operatorname{sen}\Big(\frac{n\pi x}{L}\Big)dx=\begin{cases}0,&amp;m\ne n\\ L,&amp;m=n\end{cases}\\[4pt] \int_{-L}^{L}\cos\Big(\frac{m\pi x}{L}\Big)\operatorname{sen}\Big(\frac{n\pi x}{L}\Big)dx&amp;=0.\end{aligned}$$
        <p>Caiu: coeficientes em <code>25·Q9</code> <code>24·Q1</code> <code>23·Q1</code>; paridade em <code>24·Q1</code> <code>24·Q9</code> <code>23·Q1</code>.</p>
      </div>
      <div class="formulario-wrap">
      <table class="formulario">
        <tr><th>Item</th><th>Fórmula</th><th>Caiu em</th></tr>
        <tr class="core"><td>Séries de senos / cossenos de $f$ em $[0,L]$</td><td>cossenos = extensão <strong>par</strong>; senos = extensão <strong>ímpar</strong>; ambas com <strong>período $2L$</strong> (não $L$)</td><td><code>25·Q5</code> <code>25·Q8</code> <code>24·Q7</code> <code>24·Q11</code> <code>24·Q12</code> <code>23·Q11</code></td></tr>
        <tr class="core"><td>Convergência (Dirichlet)</td><td>$f$ de classe $C^1$ por partes $\Rightarrow S(x)=\dfrac{\tilde f(x^-)+\tilde f(x^+)}2$ (média nos saltos, inclusive nas emendas $\pm L$); reduza $x$ ao período antes</td><td><code>25·Q8</code> <code>25·Q10</code> <code>24·Q1</code> <code>24·Q9</code> <code>24·Q12</code> <code>23·Q11</code></td></tr>
        <tr class="core"><td>Quando $S$ é contínua</td><td>cossenos: $f$ contínua em $[0,L]$; senos: $f$ contínua e $f(0)=f(L)=0$; completa: $f$ contínua e $f(-L^+)=f(L^-)$. Bico na extensão par onde $f'(0^+)\ne0$ ou $f'(L^-)\ne0$</td><td><code>25·Q5</code> <code>24·Q1</code> <code>24·Q11</code></td></tr>
        <tr class="core"><td>Parseval</td><td>$\dfrac1L\displaystyle\int_{-L}^{L}f^2\,dx=\frac{a_0^2}2+\sum_{n=1}^{\infty}(a_n^2+b_n^2)$; consequência: $a_n,b_n\to0$</td><td><code>25·Q11</code> <code>24·Q4</code> <code>23·Q7</code> <code>23·Q10</code></td></tr>
        <tr class="core"><td>Mínimos quadrados</td><td>$\displaystyle\int(f-\text{polinômio trigonométrico})^2$ é mínima com os <strong>coeficientes de Fourier</strong> (o termo constante é $\frac{a_0}2$); em $[0,L]$ só com cossenos $\Rightarrow$ coeficientes da série de cossenos</td><td><code>25·Q5</code> <code>25·Q12</code> <code>24·Q11</code> <code>23·Q9</code></td></tr>
      </table>
      </div>

      <h3 class="form-h">4 · Valores e integrais que aparecem em toda conta</h3>
      <div class="formulario-wrap">
      <table class="formulario">
        <tr><th>Expressão</th><th>Valor</th></tr>
        <tr class="core"><td>$\cos n\pi$, $\ \operatorname{sen}n\pi$</td><td>$(-1)^n$, $\ 0$</td></tr>
        <tr><td>$\operatorname{sen}\frac{n\pi}2$</td><td>$0$ se $n$ par; $(-1)^k$ se $n=2k+1$</td></tr>
        <tr><td>$\cos\frac{n\pi}2$</td><td>$0$ se $n$ ímpar; $(-1)^k$ se $n=2k$</td></tr>
        <tr class="core"><td>$1-(-1)^n$</td><td>$0$ ($n$ par), $2$ ($n$ ímpar)</td></tr>
        <tr class="core"><td>$\displaystyle\int x\cos kx\,dx$</td><td>$\dfrac{x\operatorname{sen}kx}{k}+\dfrac{\cos kx}{k^2}$</td></tr>
        <tr class="core"><td>$\displaystyle\int x\operatorname{sen}kx\,dx$</td><td>$-\dfrac{x\cos kx}{k}+\dfrac{\operatorname{sen}kx}{k^2}$</td></tr>
        <tr><td>$\displaystyle\int x^2\cos kx\,dx$</td><td>$\dfrac{x^2\operatorname{sen}kx}{k}+\dfrac{2x\cos kx}{k^2}-\dfrac{2\operatorname{sen}kx}{k^3}$</td></tr>
        <tr><td>$\displaystyle\int x^2\operatorname{sen}kx\,dx$</td><td>$-\dfrac{x^2\cos kx}{k}+\dfrac{2x\operatorname{sen}kx}{k^2}+\dfrac{2\cos kx}{k^3}$</td></tr>
        <tr><td>$\displaystyle\int e^{ax}\cos bx\,dx$</td><td>$\dfrac{e^{ax}(a\cos bx+b\operatorname{sen}bx)}{a^2+b^2}$</td></tr>
        <tr><td>$\displaystyle\int e^{ax}\operatorname{sen}bx\,dx$</td><td>$\dfrac{e^{ax}(a\operatorname{sen}bx-b\cos bx)}{a^2+b^2}$</td></tr>
        <tr><td>$\displaystyle\int_{-\pi}^{\pi}\cos^2x\,dx=\int_{-\pi}^{\pi}\operatorname{sen}^2x\,dx$</td><td>$\pi$ (metade do comprimento do intervalo)</td></tr>
      </table>
      </div>

      <h3 class="form-h">5 · Séries de Fourier prontas (em $]-\pi,\pi[$)</h3>
      <div class="formulario-wrap">
      <table class="formulario">
        <tr><th>$f(x)$</th><th>Série</th><th>Caiu em</th></tr>
        <tr class="core"><td>$x$</td><td>$\displaystyle2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\operatorname{sen}nx$</td><td><code>24·Q1</code> <code>25·Q9</code> (variações)</td></tr>
        <tr class="core"><td>$x^2$</td><td>$\displaystyle\frac{\pi^2}3+4\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx$</td><td><code>25·Q10</code></td></tr>
        <tr class="core"><td>$|x|$</td><td>$\displaystyle\frac\pi2-\frac4\pi\sum_{k=0}^{\infty}\frac{\cos(2k+1)x}{(2k+1)^2}$</td><td><code>25·Q12</code> <code>24·Q7</code> <code>23·Q1</code></td></tr>
        <tr class="core"><td>$|\operatorname{sen}x|$</td><td>$\displaystyle\frac2\pi-\frac4\pi\sum_{n=1}^{\infty}\frac{\cos2nx}{4n^2-1}$</td><td><code>24·Q4</code></td></tr>
        <tr class="core"><td>$|\cos x|$</td><td>$\displaystyle\frac2\pi+\frac4\pi\sum_{n=1}^{\infty}\frac{(-1)^{n-1}\cos2nx}{4n^2-1}$</td><td><code>25·Q11</code> <code>23·Q7</code></td></tr>
        <tr><td>$\operatorname{sgn}x$ (onda quadrada)</td><td>$\displaystyle\frac4\pi\sum_{k=0}^{\infty}\frac{\operatorname{sen}(2k+1)x}{2k+1}$</td><td>lista</td></tr>
      </table>
      </div>
      <p>As provas costumam <em>dar</em> a série e cobrar o uso (Parseval, avaliar num ponto). Saber de cor serve para conferir na hora e para reconhecer a série quando ela vem disfarçada (ex.: $2\pi|\cos x|$ em <code>23·Q7</code>).</p>

      <h3 class="form-h">6 · Somas numéricas conhecidas</h3>
      <div class="formulario-wrap">
      <table class="formulario">
        <tr><th>Soma</th><th>Valor</th><th>De onde sai</th></tr>
        <tr class="core"><td>$\displaystyle\sum_{n=1}^{\infty}\frac1{n^2}$</td><td>$\dfrac{\pi^2}6$</td><td>série de $x^2$ em $x=\pi$</td></tr>
        <tr class="core"><td>$\displaystyle\sum_{k=0}^{\infty}\frac1{(2k+1)^2}$</td><td>$\dfrac{\pi^2}8$</td><td>série de $|x|$ em $x=0$ — <code>23·Q1</code></td></tr>
        <tr><td>$\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^2}$</td><td>$\dfrac{\pi^2}{12}$</td><td>série de $x^2$ em $x=0$</td></tr>
        <tr class="core"><td>$\displaystyle\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}$</td><td>$\dfrac\pi4$</td><td>$\operatorname{arctg}1$ ou série de $x$ em $\frac\pi2$ — <code>24·Q1</code></td></tr>
        <tr class="core"><td>$\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}$</td><td>$\ln2$</td><td>$\ln(1+t)$ em $t=1$</td></tr>
        <tr><td>$\displaystyle\sum_{n=0}^{\infty}\frac1{n!}$</td><td>$e$</td><td>$e^t$ em $t=1$</td></tr>
        <tr><td>$\displaystyle\sum_{n=1}^{\infty}\frac1{n^4}$</td><td>$\dfrac{\pi^4}{90}$</td><td>Parseval de $x^2$</td></tr>
        <tr><td>$\displaystyle\sum_{k=0}^{\infty}\frac1{(2k+1)^4}$</td><td>$\dfrac{\pi^4}{96}$</td><td>Parseval de $|x|$</td></tr>
        <tr class="core"><td>$\displaystyle\sum_{n=1}^{\infty}\frac1{(4n^2-1)^2}$</td><td>$\dfrac{\pi^2}{16}-\dfrac12$</td><td>Parseval de $|\operatorname{sen}x|$ ou $|\cos x|$ — <code>25·Q11</code> <code>24·Q4</code> <code>23·Q7</code></td></tr>
        <tr><td>$\displaystyle\sum_{n=1}^{\infty}\frac1{4n^2-1}$</td><td>$\dfrac12$</td><td>telescópica: $\frac1{4n^2-1}=\frac12\left(\frac1{2n-1}-\frac1{2n+1}\right)$</td></tr>
      </table>
      </div>
    `,
    meta: [
      ['Curso.', 'MAT2456 — Cálculo IV'],
      ['Prova.', 'P2'],
      ['Uso.', 'tente escrever antes de abrir o cartão'],
    ],
    sectionTitle: 'Flashcards — escreva de cabeça, depois abra',
    exercises: [


      {
        ref: 'Taylor 1 · Geométrica', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Escreva a série de $\dfrac1{1-t}$ e o conjunto onde ela vale.</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\frac1{1-t}=\sum_{n=0}^{\infty}t^n=1+t+t^2+t^3+\cdots,\qquad t\in\,]-1,1[.$$
          <div class="note"><b>Pista:</b> "um sobre um menos a razão". É a mãe de quase todas as outras: $\frac1{1+t}$, $\frac1{1+t^2}$, $\ln(1+t)$, $\operatorname{arctg}t$ saem dela.</div>
          <span class="step-label">De onde vem — soma parcial fechada</span>
          <p>Seja $S_N=1+t+t^2+\cdots+t^N$. Multiplicando por $t$ e subtraindo, todos os termos do meio cancelam:</p>
          $$S_N-tS_N=1-t^{N+1}\quad\Longrightarrow\quad S_N=\frac{1-t^{N+1}}{1-t}\qquad(t\ne1).$$
          <span class="step-label">Quando $S_N$ converge</span>
          <p>Se $|t|&lt;1$, $t^{N+1}\to0$ e $S_N\to\dfrac1{1-t}$. Se $|t|\ge1$, o termo geral $t^n$ não tende a $0$ (tem módulo $\ge1$), então a série diverge.</p>
          <div class="final">$\displaystyle\frac1{1-t}=\sum_{n=0}^{\infty}t^n$ exatamente para $|t|&lt;1$.</div>
        `
      },

      {
        ref: 'Taylor 2 · Exponencial', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Escreva a série de $e^t$ e o conjunto onde ela vale.</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$e^t=\sum_{n=0}^{\infty}\frac{t^n}{n!}=1+t+\frac{t^2}{2!}+\frac{t^3}{3!}+\cdots,\qquad t\in\mathbb R.$$
          <div class="note"><b>Pista:</b> todas as potências, todos os fatoriais, nenhum sinal. Em $t=1$: $e=\sum\frac1{n!}$.</div>
          <span class="step-label">De onde vem — coeficientes de Taylor</span>
          <p>$f(t)=e^t$ tem $f^{(n)}(t)=e^t$ para todo $n$, logo $f^{(n)}(0)=1$ e o coeficiente de $t^n$ é $\dfrac{f^{(n)}(0)}{n!}=\dfrac1{n!}$.</p>
          <span class="step-label">Raio</span>
          $$\left|\frac{t^{n+1}/(n+1)!}{t^n/n!}\right|=\frac{|t|}{n+1}\longrightarrow0&lt;1\quad\text{para todo }t\ \Longrightarrow\ R=\infty.$$
          <span class="step-label">A série soma mesmo $e^t$ (resto de Lagrange)</span>
          <p>Pelo teorema de Taylor, $e^t=\displaystyle\sum_{n=0}^{N}\frac{t^n}{n!}+\frac{e^{\xi}\,t^{N+1}}{(N+1)!}$ com $\xi$ entre $0$ e $t$. Como $e^\xi\le e^{|t|}$,</p>
          $$\left|e^t-\sum_{n=0}^{N}\frac{t^n}{n!}\right|\le e^{|t|}\,\frac{|t|^{N+1}}{(N+1)!}\longrightarrow0,$$
          <p>porque $\frac{|t|^{N+1}}{(N+1)!}$ é o termo geral de uma série convergente (a do passo anterior, em $|t|$).</p>
          <div class="final">$\displaystyle e^t=\sum_{n=0}^{\infty}\frac{t^n}{n!}$ para todo $t\in\mathbb R$.</div>
        `
      },

      {
        ref: 'Taylor 3 · Seno', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Escreva a série de $\operatorname{sen}t$ e o conjunto onde ela vale.</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\operatorname{sen}t=\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{2n+1}}{(2n+1)!}=t-\frac{t^3}{3!}+\frac{t^5}{5!}-\frac{t^7}{7!}+\cdots,\qquad t\in\mathbb R.$$
          <div class="note"><b>Pista:</b> seno é <em>ímpar</em> → só potências ímpares, com o fatorial do mesmo número; começa em $t$ (porque $\operatorname{sen}t\approx t$ perto de $0$) e os sinais alternam.</div>
          <span class="step-label">De onde vem — derivadas em $0$</span>
          <p>As derivadas de $\operatorname{sen}$ repetem em ciclo de 4: $\operatorname{sen},\ \cos,\ -\operatorname{sen},\ -\cos$. Em $t=0$ isso dá a sequência $0,\ 1,\ 0,\ -1,\ 0,\ 1,\ 0,\ -1,\dots$</p>
          <p>As de ordem par são nulas; as de ordem ímpar $2n+1$ valem $(-1)^n$. Logo o coeficiente de $t^{2n+1}$ é $\dfrac{(-1)^n}{(2n+1)!}$ e os de potência par são $0$.</p>
          <span class="step-label">Raio e igualdade</span>
          <p>Toda derivada de $\operatorname{sen}$ tem módulo $\le1$, então o resto de Lagrange satisfaz</p>
          $$\left|\operatorname{sen}t-\sum_{k=0}^{N}\frac{\operatorname{sen}^{(k)}(0)}{k!}t^k\right|\le\frac{|t|^{N+1}}{(N+1)!}\longrightarrow0\quad\text{para todo }t.$$
          <p>A série converge para $\operatorname{sen}t$ em todo $\mathbb R$ (e portanto $R=\infty$).</p>
          <div class="final">$\displaystyle\operatorname{sen}t=\sum_{n=0}^{\infty}\frac{(-1)^nt^{2n+1}}{(2n+1)!}$ para todo $t\in\mathbb R$.</div>
        `
      },

      {
        ref: 'Taylor 4 · Cosseno', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Escreva a série de $\cos t$ e o conjunto onde ela vale.</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\cos t=\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{2n}}{(2n)!}=1-\frac{t^2}{2!}+\frac{t^4}{4!}-\frac{t^6}{6!}+\cdots,\qquad t\in\mathbb R.$$
          <div class="note"><b>Pista:</b> cosseno é <em>par</em> → só potências pares; começa em $1$ (porque $\cos0=1$) e os sinais alternam.</div>
          <span class="step-label">De onde vem — derivar a série do seno</span>
          <p>Dentro do raio (aqui, $\mathbb R$) pode-se derivar termo a termo. Como $\dfrac{d}{dt}\dfrac{t^{2n+1}}{(2n+1)!}=\dfrac{(2n+1)\,t^{2n}}{(2n+1)!}=\dfrac{t^{2n}}{(2n)!}$:</p>
          $$\cos t=\frac{d}{dt}\operatorname{sen}t=\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{2n}}{(2n)!}.$$
          <p>(Também sai direto das derivadas em $0$: a sequência $1,0,-1,0,1,\dots$)</p>
          <div class="final">$\displaystyle\cos t=\sum_{n=0}^{\infty}\frac{(-1)^nt^{2n}}{(2n)!}$ para todo $t\in\mathbb R$.</div>
        `
      },

      {
        ref: 'Taylor 5 · Logaritmo', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Escreva a série de $\ln(1+t)$ e o conjunto onde ela vale.</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\ln(1+t)=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}\,t^n}{n}=t-\frac{t^2}2+\frac{t^3}3-\frac{t^4}4+\cdots,\qquad t\in\,]-1,1].$$
          <div class="note"><b>Pista:</b> começa em $n=1$ (porque $\ln1=0$), divide por $n$ e <em>não</em> por $n!$, sinais alternados começando com $+$. Em $t=1$: $\ln2=1-\frac12+\frac13-\cdots$</div>
          <span class="step-label">De onde vem — integrar a geométrica</span>
          <p>Trocando $t$ por $-s$ na geométrica: $\dfrac1{1+s}=\displaystyle\sum_{n=0}^{\infty}(-1)^ns^n$ para $|s|&lt;1$. Como $\ln(1+t)=\displaystyle\int_0^t\frac{ds}{1+s}$ e dentro do raio pode-se integrar termo a termo:</p>
          $$\ln(1+t)=\sum_{n=0}^{\infty}(-1)^n\int_0^ts^n\,ds=\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{n+1}}{n+1}=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}\,t^n}{n},\qquad|t|&lt;1.$$
          <span class="step-label">Extremos</span>
          <p>• $t=1$: $\sum\frac{(-1)^{n-1}}n$ converge por Leibniz; pelo teorema de Abel a soma é o limite da função, $\ln2$. Entra.<br>• $t=-1$: $\sum\frac{(-1)^{n-1}(-1)^n}{n}=-\sum\frac1n$, harmônica, diverge (e $\ln0$ nem existe). Não entra.</p>
          <div class="final">$\displaystyle\ln(1+t)=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}t^n}{n}$ para $-1&lt;t\le1$.</div>
        `
      },

      {
        ref: 'Taylor 6 · Arco-tangente', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Escreva a série de $\operatorname{arctg}t$ e o conjunto onde ela vale.</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\operatorname{arctg}t=\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{2n+1}}{2n+1}=t-\frac{t^3}3+\frac{t^5}5-\frac{t^7}7+\cdots,\qquad t\in[-1,1].$$
          <div class="note"><b>Pista:</b> "o seno sem fatorial": mesmas potências ímpares e sinais do seno, mas divide pelo próprio expoente. Em $t=1$: $\frac\pi4=1-\frac13+\frac15-\cdots$ (Leibniz).</div>
          <span class="step-label">De onde vem — integrar $\frac1{1+s^2}$</span>
          <p>Trocando $t$ por $-s^2$ na geométrica: $\dfrac1{1+s^2}=\displaystyle\sum_{n=0}^{\infty}(-1)^ns^{2n}$ para $|s|&lt;1$. Como $\operatorname{arctg}t=\displaystyle\int_0^t\frac{ds}{1+s^2}$:</p>
          $$\operatorname{arctg}t=\sum_{n=0}^{\infty}(-1)^n\int_0^ts^{2n}\,ds=\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{2n+1}}{2n+1},\qquad|t|&lt;1.$$
          <span class="step-label">Extremos</span>
          <p>Em $t=\pm1$ a série é $\pm\sum\frac{(-1)^n}{2n+1}$: alternada, com $\frac1{2n+1}$ decrescente a $0$, converge por Leibniz. Pelo teorema de Abel, a igualdade se estende aos dois extremos.</p>
          <div class="final">$\displaystyle\operatorname{arctg}t=\sum_{n=0}^{\infty}\frac{(-1)^nt^{2n+1}}{2n+1}$ para $-1\le t\le1$.</div>
        `
      },

      {
        ref: 'Taylor 7–10 · Saem da geométrica', examStyle: true, tag: 'consequência',
        statement: String.raw`<p>Estas quatro saem da geométrica em uma linha. Vale tê-las prontas, mas se esquecer, refaça a conta indicada.</p>`,
        parts: [
          {
            label: '7',
            statement: String.raw`$\dfrac1{1+t}$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\frac1{1+t}=\sum_{n=0}^{\infty}(-1)^nt^n=1-t+t^2-t^3+\cdots,\qquad t\in\,]-1,1[.$$
              <span class="step-label">De onde vem</span>
              <p>Troque $t$ por $-t$ em $\frac1{1-t}=\sum t^n$: $(-t)^n=(-1)^nt^n$. A condição $|-t|&lt;1$ é a mesma $|t|&lt;1$.</p>
            `
          },
          {
            label: '8',
            statement: String.raw`$\dfrac1{1+t^2}$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\frac1{1+t^2}=\sum_{n=0}^{\infty}(-1)^nt^{2n}=1-t^2+t^4-t^6+\cdots,\qquad t\in\,]-1,1[.$$
              <span class="step-label">De onde vem</span>
              <p>Troque $t$ por $-t^2$ na geométrica: $(-t^2)^n=(-1)^nt^{2n}$. A condição $|-t^2|&lt;1$ dá $|t|&lt;1$. É a derivada de $\operatorname{arctg}t$.</p>
            `
          },
          {
            label: '9',
            statement: String.raw`$\dfrac1{(1-t)^2}$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\frac1{(1-t)^2}=\sum_{n=0}^{\infty}(n+1)\,t^n=1+2t+3t^2+4t^3+\cdots,\qquad t\in\,]-1,1[.$$
              <span class="step-label">De onde vem</span>
              <p>Derive termo a termo $\frac1{1-t}=\sum_{n\ge0}t^n$ (o raio continua $1$):</p>
              $$\frac{d}{dt}\frac1{1-t}=\frac1{(1-t)^2}=\sum_{n=1}^{\infty}n\,t^{n-1}=\sum_{n=0}^{\infty}(n+1)\,t^n.$$
              <p>Nos extremos o termo geral $(n+1)t^n$ tem módulo $n+1\not\to0$: não entram. (Trocando $t\to-t$: $\frac1{(1+t)^2}=\sum(-1)^n(n+1)t^n$.)</p>
            `
          },
          {
            label: '10',
            statement: String.raw`$\ln(1-t)$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\ln(1-t)=-\sum_{n=1}^{\infty}\frac{t^n}{n}=-t-\frac{t^2}2-\frac{t^3}3-\cdots,\qquad t\in[-1,1[.$$
              <span class="step-label">De onde vem</span>
              <p>Troque $t$ por $-t$ em $\ln(1+t)=\sum\frac{(-1)^{n-1}t^n}{n}$: o coeficiente vira $\frac{(-1)^{n-1}(-1)^n}{n}=\frac{(-1)^{2n-1}}{n}=-\frac1n$. O domínio $]-1,1]$ em $-t$ vira $[-1,1[$ em $t$.</p>
            `
          }
        ]
      },

      {
        ref: 'Taylor 11–12 · Hiperbólicas', examStyle: true, tag: 'consequência',
        statement: String.raw`<p>Seno e cosseno hiperbólicos: as séries do seno e do cosseno <em>sem</em> o sinal alternado.</p>`,
        parts: [
          {
            label: '11',
            statement: String.raw`$\operatorname{senh}t=\dfrac{e^t-e^{-t}}2$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\operatorname{senh}t=\sum_{n=0}^{\infty}\frac{t^{2n+1}}{(2n+1)!}=t+\frac{t^3}{3!}+\frac{t^5}{5!}+\cdots,\qquad t\in\mathbb R.$$
              <span class="step-label">De onde vem</span>
              <p>$e^{-t}=\sum\frac{(-1)^nt^n}{n!}$, então</p>
              $$\frac{e^t-e^{-t}}2=\sum_{n=0}^{\infty}\frac{1-(-1)^n}{2}\cdot\frac{t^n}{n!}.$$
              <p>$\frac{1-(-1)^n}2$ vale $1$ para $n$ ímpar e $0$ para $n$ par: sobram só as potências ímpares, todas com sinal $+$.</p>
            `
          },
          {
            label: '12',
            statement: String.raw`$\cosh t=\dfrac{e^t+e^{-t}}2$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\cosh t=\sum_{n=0}^{\infty}\frac{t^{2n}}{(2n)!}=1+\frac{t^2}{2!}+\frac{t^4}{4!}+\cdots,\qquad t\in\mathbb R.$$
              <span class="step-label">De onde vem</span>
              $$\frac{e^t+e^{-t}}2=\sum_{n=0}^{\infty}\frac{1+(-1)^n}{2}\cdot\frac{t^n}{n!},$$
              <p>e $\frac{1+(-1)^n}2$ vale $1$ para $n$ par e $0$ para $n$ ímpar: sobram as potências pares.</p>
            `
          }
        ]
      },

      {
        ref: 'Taylor 13 · Binomial', examStyle: true, tag: 'extra',
        statement: String.raw`<p>Escreva a série de $(1+t)^\alpha$, $\alpha\in\mathbb R$, e onde ela vale. <span style="color:var(--gray)">(Não caiu nas P2 de 2023–2025, mas é a generalização da geométrica e aparece em listas.)</span></p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$(1+t)^\alpha=\sum_{n=0}^{\infty}\binom{\alpha}{n}t^n,\qquad\binom{\alpha}{n}=\frac{\alpha(\alpha-1)(\alpha-2)\cdots(\alpha-n+1)}{n!},\ \ \binom\alpha0=1,\qquad t\in\,]-1,1[.$$
          <div class="note"><b>Pista:</b> é o binômio de Newton com $\alpha$ qualquer. Se $\alpha\in\mathbb N$ a série para (vira polinômio). Ex.: $\alpha=-1$ dá $\frac1{1+t}=\sum(-1)^nt^n$; $\alpha=\frac12$ dá $\sqrt{1+t}=1+\frac t2-\frac{t^2}8+\cdots$</div>
          <span class="step-label">De onde vem — coeficientes</span>
          <p>$f(t)=(1+t)^\alpha$: $f'=\alpha(1+t)^{\alpha-1}$, $f''=\alpha(\alpha-1)(1+t)^{\alpha-2}$, … $f^{(n)}(0)=\alpha(\alpha-1)\cdots(\alpha-n+1)$. Dividindo por $n!$ obtém-se $\binom\alpha n$.</p>
          <span class="step-label">Raio (para $\alpha\notin\mathbb N$)</span>
          $$\left|\frac{\binom{\alpha}{n+1}t^{n+1}}{\binom{\alpha}{n}t^n}\right|=\frac{|\alpha-n|}{n+1}\,|t|\longrightarrow|t|\ \Longrightarrow\ R=1.$$
          <span class="step-label">A série soma mesmo $(1+t)^\alpha$</span>
          <p>Seja $g(t)=\sum\binom\alpha nt^n$ em $|t|&lt;1$. Da definição, $(n+1)\binom{\alpha}{n+1}=(\alpha-n)\binom\alpha n$. Então</p>
          $$(1+t)\,g'(t)=\sum_{n=0}^{\infty}(n+1)\binom{\alpha}{n+1}t^n+\sum_{n=0}^{\infty}n\binom\alpha nt^n=\sum_{n=0}^{\infty}\big[(\alpha-n)+n\big]\binom\alpha nt^n=\alpha\,g(t).$$
          <p>Logo $\dfrac{d}{dt}\left[\dfrac{g(t)}{(1+t)^\alpha}\right]=\dfrac{(1+t)g'(t)-\alpha g(t)}{(1+t)^{\alpha+1}}=0$: o quociente é constante, igual ao valor em $t=0$, que é $\frac{g(0)}{1}=1$. Portanto $g(t)=(1+t)^\alpha$.</p>
          <div class="final">$\displaystyle(1+t)^\alpha=\sum_{n=0}^{\infty}\binom\alpha nt^n$ para $|t|&lt;1$ (nos extremos depende de $\alpha$).</div>
        `
      },

      {
        ref: 'Potências 1 · Raio de convergência', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Como se calcula o raio $R$ de $\sum a_n(x-x_0)^n$? E o que fazer quando a série só tem potências como $x^{4n}$?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\frac1R=\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|\qquad\text{ou}\qquad\frac1R=\lim_{n\to\infty}\sqrt[n]{|a_n|}\quad(\text{com }\tfrac10=\infty,\ \tfrac1\infty=0).$$
          <p>Com potências "pulando" ($x^{4n}$, $x^{2n+1}$, $x^{n^2}$…), <strong>não</strong> use a fórmula: aplique a razão ou a raiz ao <strong>termo geral inteiro</strong> $u_n$ e resolva $\lim|u_{n+1}/u_n|&lt;1$ (ou $\lim\sqrt[n]{|u_n|}&lt;1$) em $x$.</p>
          <span class="step-label">De onde vem</span>
          <p>Aplicando o teste da razão à série dos módulos $\sum|a_n|\,|x-x_0|^n$:</p>
          $$\frac{|a_{n+1}|\,|x-x_0|^{n+1}}{|a_n|\,|x-x_0|^n}=\left|\frac{a_{n+1}}{a_n}\right||x-x_0|\longrightarrow\frac{|x-x_0|}{R}.$$
          <p>Converge absolutamente se $\frac{|x-x_0|}R&lt;1$ e diverge (termo geral não tende a $0$) se $&gt;1$. Com a raiz é idêntico: $\sqrt[n]{|a_n||x-x_0|^n}=\sqrt[n]{|a_n|}\,|x-x_0|$.</p>
          <span class="step-label">Por que o atalho falha em $x^{4n}$</span>
          <p>Em $\sum(1+\frac1n)^{2n^2}x^{4n}$ o coeficiente de $x^k$ é zero quando $4\nmid k$, então $a_{n+1}/a_n$ nem está definido. No termo geral: $\sqrt[n]{|u_n|}=(1+\frac1n)^{2n}|x|^4\to e^2|x|^4&lt;1\iff|x|&lt;e^{-1/2}$ (<code>25·Q2</code>).</p>
        `
      },

      {
        ref: 'Potências 2 · Limites do teste da raiz', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Quanto valem $\left(1+\frac an\right)^n$, $\sqrt[n]n$, $\sqrt[n]{P(n)}$ ($P$ polinômio), $\sqrt[n]{\ln n}$ e $\sqrt[n]{n!}$ quando $n\to\infty$?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\left(1+\frac an\right)^n\to e^a,\qquad\sqrt[n]n\to1,\qquad\sqrt[n]{P(n)}\to1,\qquad\sqrt[n]{\ln n}\to1,\qquad\sqrt[n]{n!}\to\infty.$$
          <div class="note"><b>Regra prática:</b> no teste da raiz, tudo que cresce como potência de $n$ (ou mais devagar) "some" e vira $1$; só fatores exponenciais $c^n$ mudam o raio, e fatoriais o derrubam a $0$.</div>
          <span class="step-label">$(1+\frac an)^n\to e^a$</span>
          <p>$\left(1+\frac an\right)^n=e^{\,n\ln(1+a/n)}$ e, com $u=\frac an\to0$, $n\ln\left(1+\frac an\right)=a\cdot\dfrac{\ln(1+u)}{u}\to a\cdot1$ (pois $\ln(1+u)=u-\frac{u^2}2+\cdots$).</p>
          <span class="step-label">$\sqrt[n]n$, $\sqrt[n]{P(n)}$, $\sqrt[n]{\ln n}$</span>
          <p>$\sqrt[n]n=e^{\ln n/n}\to e^0=1$. Para $P(n)$ de grau $d$ com coeficiente líder $c&gt;0$: $c\,n^d/2\le P(n)\le2c\,n^d$ para $n$ grande, e os dois lados, elevados a $\frac1n$, tendem a $1$. Para $n\ge3$: $1\le\ln n\le n$, logo $1\le\sqrt[n]{\ln n}\le\sqrt[n]n\to1$.</p>
          <span class="step-label">$\sqrt[n]{n!}\to\infty$</span>
          <p>Os $\lceil n/2\rceil$ maiores fatores de $n!$ são todos $\ge\frac n2$, então $n!\ge\left(\frac n2\right)^{n/2}$ e $\sqrt[n]{n!}\ge\sqrt{\frac n2}\to\infty$.</p>
          <p>Caiu: <code>25·Q2</code>, <code>24·Q10</code> ($e$), <code>23·Q3</code> ($\sqrt[n]{p_n}\to1$).</p>
        `
      },

      {
        ref: 'Potências 3 · Forma do intervalo', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Que formato pode ter o conjunto onde $\sum a_n(x-x_0)^n$ converge?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$]x_0-R,\,x_0+R[\ \subset\ I\ \subset\ [x_0-R,\,x_0+R],\qquad I=\mathbb R\text{ se }R=\infty,\qquad I=\{x_0\}\text{ se }R=0.$$
          <p>É sempre um intervalo <strong>centrado em $x_0$</strong> (simétrico), e só os dois extremos podem entrar ou não. Logo $]-10,1[$ com centro $0$ (<code>25·Q1</code>) ou $]-2,\infty[$ (<code>23·Q2</code>) são impossíveis.</p>
          <span class="step-label">De onde vem (lema de Abel)</span>
          <p>Tome $x_0=0$. Se $\sum a_nx_1^n$ converge, então $a_nx_1^n\to0$, e portanto $|a_nx_1^n|\le M$ para todo $n$. Para $|x|&lt;|x_1|$:</p>
          $$|a_nx^n|=|a_nx_1^n|\left|\frac{x}{x_1}\right|^n\le M\left|\frac x{x_1}\right|^n,$$
          <p>termo de uma geométrica de razão $&lt;1$: converge absolutamente. Ou seja, convergir num ponto obriga a convergir em todo o intervalo aberto simétrico até ele. Definindo $R$ como o supremo dos $|x|$ onde há convergência, sai a forma acima.</p>
        `
      },

      {
        ref: 'Potências 4 · O que um ponto diz sobre R', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Sabendo o comportamento de $\sum a_n(x-x_0)^n$ em um único ponto $x=a$, o que se conclui sobre $R$? E se $(|a_n|r^n)$ for limitada?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          <p>• converge em $a$ $\Rightarrow R\ge|a-x_0|$;<br>
          • diverge em $a$ $\Rightarrow R\le|a-x_0|$;<br>
          • converge <strong>condicionalmente</strong> em $a$ $\Rightarrow R=|a-x_0|$ exatamente;<br>
          • $(|a_n|r^n)_n$ limitada $\Rightarrow r\le R$.</p>
          <span class="step-label">De onde vem</span>
          <p>Para $|x-x_0|&lt;R$ a convergência é absoluta; para $|x-x_0|&gt;R$ há divergência. Então:</p>
          <p>• se converge em $a$, $a$ não está na região $|x-x_0|&gt;R$: $|a-x_0|\le R$;<br>
          • se diverge, $a$ não está na região $|x-x_0|&lt;R$: $|a-x_0|\ge R$;<br>
          • condicional = converge mas não absolutamente: pelo 1º item $|a-x_0|\le R$, e como no interior seria absoluta, $|a-x_0|\ge R$. Logo igualdade;<br>
          • se $|a_n|r^n\le M$, o argumento do lema de Abel (cartão anterior) dá convergência absoluta em $|x-x_0|&lt;r$, então $r\le R$.</p>
          <div class="note"><b>Armadilha:</b> "converge em $x=3$ $\Rightarrow R&gt;3$" é falso: $\sum\frac{x^n}{n^23^n}$ converge em $3$ e tem $R=3$ (<code>23·Q2</code>). Caiu também: <code>25·Q1</code>, <code>23·Q8</code>.</div>
        `
      },

      {
        ref: 'Potências 5 · Derivar e integrar termo a termo', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>O que acontece com o raio e com o intervalo de convergência ao derivar ou integrar uma série de potências termo a termo?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          <p>Dentro de $|x-x_0|&lt;R$ pode-se derivar e integrar termo a termo, e as novas séries têm <strong>o mesmo raio $R$</strong>. Os <strong>extremos podem mudar</strong>: integrar pode ganhar extremos, derivar pode perder.</p>
          <span class="step-label">De onde vem (raio)</span>
          <p>Pela fórmula da raiz, usando $\sqrt[n]n\to1$ e $\sqrt[n]{\frac1{n+1}}\to1$:</p>
          $$\limsup\sqrt[n]{|n\,a_n|}=\limsup\sqrt[n]{|a_n|}=\limsup\sqrt[n]{\left|\frac{a_n}{n+1}\right|}=\frac1R.$$
          <p>Deslocar o expoente ($x^{n-1}$ ou $x^{n+1}$ em vez de $x^n$) é multiplicar a série por $\frac1x$ ou $x$, o que não muda a convergência para $x\ne0$.</p>
          <span class="step-label">Exemplo de extremo que muda</span>
          <p>$\sum_{n\ge1}\frac{x^n}n$: intervalo $[-1,1[$. Derivada $\sum x^{n-1}$: intervalo $]-1,1[$ (perdeu $-1$). Integral $\sum\frac{x^{n+1}}{n(n+1)}$: intervalo $[-1,1]$ (ganhou $1$).</p>
          <p>Caiu: <code>25·Q1</code>, <code>23·Q2</code>, <code>23·Q8</code>; usado em <code>25·Q7</code>, <code>24·Q6</code>, <code>23·Q5</code>.</p>
        `
      },

      {
        ref: 'Potências 6 · Coeficiente ↔ derivada', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Se $f(x)=\sum_{k\ge0}c_kx^k$ para $|x|&lt;R$, quanto vale $c_k$ em termos de $f$?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$c_k=\frac{f^{(k)}(0)}{k!}\qquad\Longleftrightarrow\qquad f^{(k)}(0)=k!\,c_k.$$
          <p>Se a potência $x^k$ não aparece na série, $f^{(k)}(0)=0$. Centrada em $a$: $f(x)=\sum c_k(x-a)^k\Rightarrow c_k=\frac{f^{(k)}(a)}{k!}$.</p>
          <span class="step-label">De onde vem</span>
          <p>Dentro de $|x|&lt;R$ a série pode ser derivada termo a termo quantas vezes quisermos (o raio não muda). Derivando $k$ vezes, os termos com expoente $&lt;k$ somem e o de expoente $k$ vira constante:</p>
          $$f^{(k)}(x)=k!\,c_k+\frac{(k+1)!}{1!}c_{k+1}\,x+\frac{(k+2)!}{2!}c_{k+2}\,x^2+\cdots,\qquad|x|&lt;R.$$
          <p>Em $x=0$ sobra só $k!\,c_k$. Consequência: uma função tem <strong>no máximo uma</strong> série de potências em torno de $0$, e ela é a de Taylor.</p>
          <span class="step-label">Receita de prova</span>
          <p>1) escreva a série com o expoente geral (ex.: $x\operatorname{sen}(x^2)=\sum\frac{(-1)^nx^{4n+3}}{(2n+1)!}$); 2) resolva "expoente $=k$" para $n$; 3) se $n$ não for inteiro $\ge0$, a derivada é $0$; se for, $f^{(k)}(0)=k!\times$coeficiente.</p>
          <p>Caiu: <code>25·Q6</code>, <code>24·Q2</code>, <code>23·Q4</code>, <code>23·Q6</code>.</p>
        `
      },

      {
        ref: 'Potências 7 · Testando os extremos', examStyle: true, tag: 'consequência',
        statement: String.raw`<p>Em $x=x_0\pm R$ a série vira uma série numérica. Qual a ordem de testes?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta — checklist</span>
          <p>1) <strong>Termo geral</strong> $\to0$? Se não, diverge e acabou.<br>
          2) <strong>Módulo</strong> parecido com $\frac1{n^p}$? Use $p$-série ou comparação no limite: se $\lim\frac{|u_n|}{1/n^p}\in\,]0,\infty[$, $\sum|u_n|$ se comporta como $\sum\frac1{n^p}$ (converge $\iff p&gt;1$).<br>
          3) Módulo diverge mas a série é <strong>alternada</strong>? Leibniz: $b_n$ decrescente e $\to0$ $\Rightarrow$ converge (condicionalmente).<br>
          4) Se converge no extremo, a soma é o limite da função nesse ponto (<strong>teorema de Abel</strong>) — é assim que $\ln2$ e $\frac\pi4$ aparecem.</p>
          <span class="step-label">Padrão típico</span>
          <p>Quando $|u_n|$ no extremo é $\frac{1}{\sqrt{4n+1}}$ ou $\frac1n$: diverge num extremo e converge (Leibniz) no outro, dando intervalo semiaberto (<code>24·Q3</code>). Quando é $\frac1{n^{3/2}}$ ou $\frac1{(2n+1)^2}$: converge absolutamente nos dois, intervalo fechado (<code>25·Q3</code>, <code>23·Q5</code>).</p>
        `
      },

      {
        ref: 'Potências 8 · Erro ao truncar', examStyle: true, tag: 'consequência',
        statement: String.raw`<p>Quais são as duas cotas para o erro ao parar a soma de uma série no termo $k$?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          <p><strong>Série alternada</strong> $\sum(-1)^nb_n$ com $b_n$ decrescente e $\to0$:</p>
          $$|S-S_k|&lt;b_{k+1}\quad(\text{o primeiro termo desprezado}).$$
          <p><strong>Resto de Lagrange</strong> (qualquer Taylor): se $|f^{(N+1)}|\le M$ entre $a$ e $x$,</p>
          $$\left|f(x)-\sum_{k=0}^{N}\frac{f^{(k)}(a)}{k!}(x-a)^k\right|\le\frac{M\,|x-a|^{N+1}}{(N+1)!}.$$
          <span class="step-label">De onde vem (alternada)</span>
          <p>$S-S_k=(-1)^{k+1}\big(b_{k+1}-b_{k+2}+b_{k+3}-\cdots\big)$. Agrupando em pares, $(b_{k+1}-b_{k+2})+(b_{k+3}-b_{k+4})+\cdots\ge0$; agrupando de outro jeito, $b_{k+1}-(b_{k+2}-b_{k+3})-\cdots\le b_{k+1}$. Logo $0\le|S-S_k|\le b_{k+1}$.</p>
          <div class="note"><b>Cuidado:</b> a cota é suficiente, não necessária. Para mostrar que um $k$ menor <em>não</em> serve, use que o erro também é $\ge b_{k+1}-b_{k+2}$ (<code>24·Q5</code>).</div>
        `
      },

      {
        ref: 'Fourier 1 · Coeficientes (período 2L)', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Escreva a série de Fourier de $f$ de período $2L$ e as fórmulas de $a_n$ e $b_n$. Por que o termo constante é $\frac{a_0}2$?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$f(x)\sim\frac{a_0}2+\sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}L+b_n\operatorname{sen}\frac{n\pi x}L\right),$$
          $$a_n=\frac1L\int_{-L}^{L}f(x)\cos\frac{n\pi x}L\,dx\ (n\ge0),\qquad b_n=\frac1L\int_{-L}^{L}f(x)\operatorname{sen}\frac{n\pi x}L\,dx\ (n\ge1).$$
          <p>Com $L=\pi$: $a_n=\frac1\pi\int_{-\pi}^{\pi}f\cos nx\,dx$, $b_n=\frac1\pi\int_{-\pi}^{\pi}f\operatorname{sen}nx\,dx$. A integral pode ser feita em <strong>qualquer</strong> intervalo de comprimento $2L$.</p>
          <span class="step-label">De onde vem</span>
          <p>Suponha $f$ igual à série e multiplique os dois lados por $\cos\frac{m\pi x}L$, $m\ge1$. Integrando em $[-L,L]$, pela ortogonalidade (cartão seguinte) todos os termos morrem menos o de $n=m$:</p>
          $$\int_{-L}^{L}f(x)\cos\frac{m\pi x}L\,dx=a_m\int_{-L}^{L}\cos^2\frac{m\pi x}L\,dx=a_m\,L.$$
          <p>Idem com seno para $b_m$. Para o termo constante: $\int_{-L}^{L}f\,dx=\frac{a_0}2\cdot2L=a_0L$, ou seja, $a_0=\frac1L\int f$ — <strong>a mesma fórmula</strong> de $a_n$ com $n=0$. É por isso que se escreve $\frac{a_0}2$: para uma fórmula só servir para todos os $n$.</p>
          <p>Caiu: <code>25·Q9</code>, <code>24·Q1</code> ($L=1$), <code>23·Q1</code> ($L=2$).</p>
        `
      },

      {
        ref: 'Fourier 2 · Ortogonalidade', examStyle: true, tag: 'consequência',
        statement: String.raw`<p>Quanto valem $\int_{-L}^{L}\cos\frac{m\pi x}L\cos\frac{n\pi x}L\,dx$, $\int_{-L}^{L}\operatorname{sen}\frac{m\pi x}L\operatorname{sen}\frac{n\pi x}L\,dx$ e $\int_{-L}^{L}\cos\frac{m\pi x}L\operatorname{sen}\frac{n\pi x}L\,dx$? E em $[0,L]$, só com cossenos?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\int_{-L}^{L}\cos\frac{m\pi x}L\cos\frac{n\pi x}L\,dx=\int_{-L}^{L}\operatorname{sen}\frac{m\pi x}L\operatorname{sen}\frac{n\pi x}L\,dx=\begin{cases}0,&amp;m\ne n\\ L,&amp;m=n\ge1\end{cases},\qquad\int_{-L}^{L}\cos\frac{m\pi x}L\operatorname{sen}\frac{n\pi x}L\,dx=0.$$
          <p>Em $[0,L]$: $\int_0^L\cos\frac{m\pi x}L\cos\frac{n\pi x}L\,dx=0$ ($m\ne n$), $\frac L2$ ($m=n\ge1$), $L$ ($m=n=0$). <strong>Regra:</strong> o quadrado integra à <em>metade do comprimento</em> do intervalo.</p>
          <span class="step-label">De onde vem</span>
          <p>Produto em soma: $\cos A\cos B=\frac12[\cos(A-B)+\cos(A+B)]$. Para um inteiro $j\ne0$, $\int_{-L}^{L}\cos\frac{j\pi x}L\,dx=\frac{L}{j\pi}\left[\operatorname{sen}\frac{j\pi x}L\right]_{-L}^{L}=0$. Assim, com $m\ne n$ os dois cossenos integram zero; com $m=n\ge1$ sobra $\frac12\int_{-L}^{L}1\,dx=L$. O produto $\cos\cdot\operatorname{sen}$ é ímpar, logo integra zero em $[-L,L]$.</p>
        `
      },

      {
        ref: 'Fourier 3 · Paridade', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>O que muda nos coeficientes quando $f$ é par? E quando é ímpar?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          <p><strong>$f$ par:</strong> $b_n=0$ e $a_n=\dfrac2L\displaystyle\int_0^Lf(x)\cos\frac{n\pi x}L\,dx$ (série só de cossenos).<br>
          <strong>$f$ ímpar:</strong> $a_n=0$ e $b_n=\dfrac2L\displaystyle\int_0^Lf(x)\operatorname{sen}\frac{n\pi x}L\,dx$ (série só de senos).</p>
          <span class="step-label">De onde vem</span>
          <p>par × par = par, par × ímpar = ímpar. Se $f$ é par, $f\operatorname{sen}$ é ímpar ($\int_{-L}^{L}=0$) e $f\cos$ é par ($\int_{-L}^{L}=2\int_0^L$). Para $f$ ímpar, troca.</p>
          <span class="step-label">Atalho de prova (a recíproca)</span>
          <p>Se $f$ não é par nem ímpar (ex.: $xe^x$, $x+x^2$), então <em>algum</em> $a_n$ e <em>algum</em> $b_n$ são não nulos: se todos os $b_n$ fossem zero, a soma seria par, e bastaria achar um ponto de continuidade com $f(-x)\ne f(x)$ para contradizer. Resolve <code>24·Q9</code> e <code>25·Q10</code> sem conta.</p>
        `
      },

      {
        ref: 'Fourier 4 · Séries de senos e de cossenos', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>$f$ está definida só em $[0,L]$. O que são a série de senos e a série de cossenos de $f$, com que período e com quais coeficientes?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          <p><strong>Cossenos:</strong> série de Fourier da extensão <strong>par</strong> $\tilde f(x)=f(|x|)$ em $[-L,L]$, repetida com período $2L$:</p>
          $$S(x)=\frac{a_0}2+\sum_{n\ge1}a_n\cos\frac{n\pi x}L,\qquad a_n=\frac2L\int_0^Lf(x)\cos\frac{n\pi x}L\,dx.$$
          <p><strong>Senos:</strong> série da extensão <strong>ímpar</strong> ($\tilde f(-x)=-f(x)$), período $2L$:</p>
          $$S(x)=\sum_{n\ge1}b_n\operatorname{sen}\frac{n\pi x}L,\qquad b_n=\frac2L\int_0^Lf(x)\operatorname{sen}\frac{n\pi x}L\,dx.$$
          <span class="step-label">De onde vem</span>
          <p>A extensão par é uma função par em $[-L,L]$; pelo cartão de paridade, só sobram cossenos com $a_n=\frac2L\int_0^L$. Idem para a ímpar com senos.</p>
          <div class="note"><b>Armadilhas:</b> o período é $2L$, <em>não</em> $L$ (em <code>24·Q12</code>, $f$ em $]0,2[$ dá $S$ de período $4$). Para achar $S(x)$ longe da origem: reduza $x$ módulo $2L$ e, se cair em $]-L,0[$, use $\tilde f(x)=f(-x)$ (par) ou $-f(-x)$ (ímpar).</div>
          <p>Caiu: <code>25·Q5</code>, <code>25·Q8</code>, <code>24·Q7</code>, <code>24·Q11</code>, <code>24·Q12</code>, <code>23·Q11</code> — é o item mais cobrado.</p>
        `
      },

      {
        ref: 'Fourier 5 · Convergência pontual (Dirichlet)', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Para $f$ de período $2L$ e classe $C^1$ por partes, para que valor a série de Fourier converge em cada $x$? Como calcular $S(x)$ num ponto como $15\pi$?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta (teorema)</span>
          $$S(x)=\frac{\tilde f(x^-)+\tilde f(x^+)}{2}\qquad\text{para todo }x\in\mathbb R,$$
          <p>em que $\tilde f$ é a extensão $2L$-periódica. Onde $\tilde f$ é contínua, $S(x)=\tilde f(x)$; onde salta, $S$ é a <strong>média</strong> dos limites laterais — o valor de $f$ no ponto não importa.</p>
          <span class="step-label">Receita</span>
          <p>1) Reduza: $x\mapsto x-2Lk$ até cair em $]-L,L]$ (ex.: $15\pi=\pi+7\cdot2\pi\equiv\pi$).<br>
          2) Se caiu no interior e $f$ é contínua ali: $S=f$ (ou a extensão par/ímpar).<br>
          3) Se caiu num salto interno: média dos dois lados.<br>
          4) Se caiu na <strong>emenda</strong> $x=\pm L$: $S=\dfrac{f(L^-)+f(-L^+)}{2}$ — o lado esquerdo vem do fim do intervalo e o direito do começo.</p>
          <span class="step-label">Exemplo</span>
          <p>$f(x)=xe^x$ em $]-\pi,\pi[$: $S(15\pi)=S(\pi)=\dfrac{\pi e^\pi+(-\pi e^{-\pi})}{2}$ (<code>24·Q9</code>). Caiu também: <code>25·Q8</code>, <code>25·Q10</code>, <code>24·Q1</code>, <code>24·Q12</code>, <code>23·Q11</code>.</p>
          <div class="note">O teorema é demonstrado no curso via núcleo de Dirichlet; na prova ele é usado, não provado. A hipótese "$C^1$ por partes" é o que garante a convergência — continuidade sozinha não basta.</div>
        `
      },

      {
        ref: 'Fourier 6 · Quando a soma é contínua (ou derivável)', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Com $f$ contínua em $[0,L]$ (e $C^1$ por partes), quando a soma da série de cossenos é contínua em $\mathbb R$? E a de senos? E a série completa de $f$ em $]-L,L]$? Onde aparecem "bicos"?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          <p>• <strong>Cossenos:</strong> sempre contínua.<br>
          • <strong>Senos:</strong> contínua $\iff f(0)=0$ e $f(L)=0$.<br>
          • <strong>Completa:</strong> contínua $\iff f(-L^+)=f(L^-)$.<br>
          • <strong>Bico</strong> na extensão par em $x=0$ se $f'(0^+)\ne0$, e em $x=L$ se $f'(L^-)\ne0$.</p>
          <span class="step-label">De onde vem</span>
          <p>Os únicos pontos novos de possível salto são as emendas $0$ e $\pm L$ (e translados).</p>
          <p>• Par em $0$: os dois lados valem $f(0^+)$. Em $L$: pela esquerda $f(L^-)$, pela direita $\tilde f(L^+)=\tilde f(-L^+)=f(L^-)$. Nunca salta.<br>
          • Ímpar em $0$: lados $f(0^+)$ e $-f(0^+)$, iguais só se $f(0^+)=0$. Em $L$: $f(L^-)$ e $\tilde f(-L^+)=-f(L^-)$, iguais só se $f(L^-)=0$.<br>
          • Bico: a derivada de uma função par é ímpar, então em $0$ as derivadas laterais são $f'(0^+)$ e $-f'(0^+)$; idem em $L$.</p>
          <span class="step-label">Exemplos de prova</span>
          <p>$x(\pi-x)$ em $[0,\pi]$: senos contínua (zera nas pontas). $x^2$ em $[0,\pi]$: cossenos contínua mas <em>não derivável</em> em $\pi$ ($f'(\pi)=2\pi\ne0$) (<code>25·Q5</code>). $f$ estritamente crescente: senos <em>nunca</em> contínua, pois não pode zerar nas duas pontas (<code>24·Q11</code>).</p>
        `
      },

      {
        ref: 'Fourier 7 · Parseval (e Bessel)', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Escreva a identidade de Parseval para período $2L$ e para a série de cossenos em $[0,L]$. Qual a consequência sobre $a_n$ e $b_n$?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\frac1L\int_{-L}^{L}f(x)^2\,dx=\frac{a_0^2}2+\sum_{n=1}^{\infty}\left(a_n^2+b_n^2\right),\qquad\text{cossenos em }[0,L]:\ \frac2L\int_0^Lf^2\,dx=\frac{a_0^2}2+\sum_{n\ge1}a_n^2.$$
          <p>Consequência: a série da direita converge, logo $a_n\to0$ e $b_n\to0$ (Riemann–Lebesgue; <code>23·Q10</code>).</p>
          <span class="step-label">De onde vem (Bessel)</span>
          <p>Seja $S_N$ a soma parcial. Expandindo e usando ortogonalidade e as fórmulas dos coeficientes:</p>
          $$\int_{-L}^{L}fS_N\,dx=L\left[\frac{a_0^2}2+\sum_{n=1}^{N}(a_n^2+b_n^2)\right]=\int_{-L}^{L}S_N^2\,dx,$$
          $$0\le\int_{-L}^{L}(f-S_N)^2dx=\int_{-L}^{L}f^2dx-2\int_{-L}^{L}fS_N\,dx+\int_{-L}^{L}S_N^2dx=\int_{-L}^{L}f^2dx-L\left[\frac{a_0^2}2+\sum_{n=1}^{N}(a_n^2+b_n^2)\right].$$
          <p>Isso é a desigualdade de Bessel; Parseval é o teorema de que, para $f$ contínua por partes, $\int(f-S_N)^2\to0$ e vale a igualdade.</p>
          <span class="step-label">Receita de prova</span>
          <p>1) Identifique que a soma pedida tem <strong>quadrados</strong> de coeficientes; 2) $\frac{a_0^2}{2}$ com $a_0$ = <em>dobro</em> do termo constante; 3) calcule $\frac1L\int f^2$ (para $|\operatorname{sen}x|$ ou $|\cos x|$ em $]-\pi,\pi[$ dá $1$); 4) isole.</p>
          <p>Caiu: <code>25·Q11</code>, <code>24·Q4</code>, <code>23·Q7</code>, <code>23·Q10</code>.</p>
        `
      },

      {
        ref: 'Fourier 8 · Mínimos quadrados', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Quais $c_0,c_n,d_n$ minimizam $\displaystyle\int_{-L}^{L}\Big(f-\frac{c_0}2-\sum_{n=1}^{N}\big(c_n\cos\tfrac{n\pi x}L+d_n\operatorname{sen}\tfrac{n\pi x}L\big)\Big)^2dx$?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          <p>Os <strong>coeficientes de Fourier</strong> de $f$: $c_n=a_n$, $d_n=b_n$. A melhor aproximação é a soma parcial $S_N$.</p>
          <span class="step-label">De onde vem (sem derivar)</span>
          <p>Seja $T$ o polinômio trigonométrico com coeficientes $c_n,d_n$. Pela mesma conta do cartão de Parseval:</p>
          $$\int_{-L}^{L}(f-T)^2dx=\underbrace{\int_{-L}^{L}f^2dx-L\Big[\tfrac{a_0^2}2+\sum_{n\le N}(a_n^2+b_n^2)\Big]}_{\text{não depende de }c,d}+L\Big[\tfrac{(c_0-a_0)^2}2+\sum_{n\le N}\big((c_n-a_n)^2+(d_n-b_n)^2\big)\Big].$$
          <p>O último colchete é $\ge0$ e só zera com $c_n=a_n$, $d_n=b_n$. (Derivar em cada coeficiente e igualar a zero dá o mesmo.)</p>
          <span class="step-label">Armadilhas de prova</span>
          <p>• Termo constante escrito como $c_1$ sozinho: $c_1=\frac{a_0}2$ (média de $f$), não $a_0$ (<code>25·Q12</code>).<br>
          • Sinal trocado no enunciado ($f-A+B\cos\pi x$): então $B=-a_1$ (<code>23·Q9</code>).<br>
          • Integral só em $[0,L]$ com cossenos: use a <strong>série de cossenos</strong> (extensão par), não a série de $f$ em $]-L,L[$ (<code>25·Q5</code>).<br>
          • Ortogonalidade em $[0,1]$: $\int_0^1\cos^2\pi x\,dx=\frac12$.</p>
          <p>Caiu: <code>25·Q5</code>, <code>25·Q12</code>, <code>24·Q11</code>, <code>23·Q9</code>.</p>
        `
      },

      {
        ref: 'Fourier 9 · Valores trigonométricos em múltiplos de π', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Quanto valem $\cos n\pi$, $\operatorname{sen}n\pi$, $\operatorname{sen}\frac{n\pi}2$, $\cos\frac{n\pi}2$ e $1-(-1)^n$ para $n$ inteiro?</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\cos n\pi=(-1)^n,\qquad\operatorname{sen}n\pi=0,\qquad1-(-1)^n=\begin{cases}0,&amp;n\text{ par}\\2,&amp;n\text{ ímpar}\end{cases}$$
          $$\operatorname{sen}\frac{n\pi}2=\begin{cases}0,&amp;n\text{ par}\\(-1)^k,&amp;n=2k+1\end{cases}\qquad\cos\frac{n\pi}2=\begin{cases}0,&amp;n\text{ ímpar}\\(-1)^k,&amp;n=2k\end{cases}$$
          <span class="step-label">De onde vem</span>
          <p>No círculo trigonométrico, $n\pi$ cai alternadamente em $(1,0)$ e $(-1,0)$; $\frac{n\pi}2$ percorre $(1,0),(0,1),(-1,0),(0,-1)$ em ciclo de 4.</p>
          <span class="step-label">Onde isso decide a conta</span>
          <p>$1-(-1)^n$ ou $(-1)^n-1$ no coeficiente $\Rightarrow$ só sobram os ímpares $n=2k+1$ (<code>25·Q9</code>, <code>23·Q1</code>). $\operatorname{sen}\frac{n\pi}2$ ao avaliar em $x=\frac12$ ou $\frac\pi2$ $\Rightarrow$ sai a série de Leibniz $\frac\pi4$ (<code>24·Q1</code>).</p>
        `
      },

      {
        ref: 'Fourier 10 · Integrais por partes prontas', examStyle: true, tag: 'consequência',
        statement: String.raw`<p>Primitivas de $x\cos kx$, $x\operatorname{sen}kx$, $x^2\cos kx$, $x^2\operatorname{sen}kx$ e $e^{ax}\cos bx$.</p>`,
        resolution: String.raw`
          <span class="step-label">Resposta</span>
          $$\int x\cos kx\,dx=\frac{x\operatorname{sen}kx}k+\frac{\cos kx}{k^2},\qquad\int x\operatorname{sen}kx\,dx=-\frac{x\cos kx}k+\frac{\operatorname{sen}kx}{k^2},$$
          $$\int x^2\cos kx\,dx=\frac{x^2\operatorname{sen}kx}k+\frac{2x\cos kx}{k^2}-\frac{2\operatorname{sen}kx}{k^3},\qquad\int x^2\operatorname{sen}kx\,dx=-\frac{x^2\cos kx}k+\frac{2x\operatorname{sen}kx}{k^2}+\frac{2\cos kx}{k^3},$$
          $$\int e^{ax}\cos bx\,dx=\frac{e^{ax}(a\cos bx+b\operatorname{sen}bx)}{a^2+b^2},\qquad\int e^{ax}\operatorname{sen}bx\,dx=\frac{e^{ax}(a\operatorname{sen}bx-b\cos bx)}{a^2+b^2}.$$
          <span class="step-label">De onde vem — $x\cos kx$</span>
          <p>$u=x$, $dv=\cos kx\,dx$, $v=\frac{\operatorname{sen}kx}k$: $\displaystyle\int x\cos kx\,dx=\frac{x\operatorname{sen}kx}k-\int\frac{\operatorname{sen}kx}k\,dx=\frac{x\operatorname{sen}kx}k+\frac{\cos kx}{k^2}$. O de seno é análogo com $v=-\frac{\cos kx}k$.</p>
          <span class="step-label">De onde vem — $x^2\cos kx$</span>
          <p>$u=x^2$, $v=\frac{\operatorname{sen}kx}k$: $\displaystyle\int x^2\cos kx\,dx=\frac{x^2\operatorname{sen}kx}k-\frac2k\int x\operatorname{sen}kx\,dx$, e a última integral é a de cima: $-\frac2k\left(-\frac{x\cos kx}k+\frac{\operatorname{sen}kx}{k^2}\right)=\frac{2x\cos kx}{k^2}-\frac{2\operatorname{sen}kx}{k^3}$.</p>
          <span class="step-label">De onde vem — $e^{ax}\cos bx$</span>
          <p>Chame $C=\int e^{ax}\cos bx$ e $S=\int e^{ax}\operatorname{sen}bx$. Por partes com $u=e^{ax}$: $C=\frac{e^{ax}\operatorname{sen}bx}{b}-\frac ab S$ e $S=-\frac{e^{ax}\cos bx}{b}+\frac ab C$. Substituindo a segunda na primeira: $C\left(1+\frac{a^2}{b^2}\right)=\frac{e^{ax}\operatorname{sen}bx}b+\frac{a\,e^{ax}\cos bx}{b^2}$, e multiplicando por $\frac{b^2}{a^2+b^2}$ sai a fórmula.</p>
          <div class="note"><b>Conferência rápida:</b> derive a resposta e veja se volta ao integrando. Em $[0,\pi]$ com $k=n$: $\int_0^\pi x\cos nx\,dx=\frac{(-1)^n-1}{n^2}$ e $\int_0^\pi x\operatorname{sen}nx\,dx=\frac{\pi(-1)^{n+1}}{n}$ — valem a pena de cor.</div>
        `
      },

      {
        ref: 'Fourier 11 · Séries prontas em ]−π, π[', examStyle: true, tag: 'consequência',
        statement: String.raw`<p>Escreva de cabeça a série de Fourier de cada função em $]-\pi,\pi[$ e confira.</p>`,
        parts: [
          {
            label: 'x',
            statement: String.raw`$f(x)=x$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$x=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\operatorname{sen}nx,\qquad-\pi&lt;x&lt;\pi\quad(S(\pm\pi)=0).$$
              <span class="step-label">De onde vem</span>
              <p>Ímpar $\Rightarrow a_n=0$. $b_n=\frac2\pi\int_0^\pi x\operatorname{sen}nx\,dx=\frac2\pi\left[-\frac{x\cos nx}n+\frac{\operatorname{sen}nx}{n^2}\right]_0^\pi=\frac2\pi\cdot\frac{-\pi(-1)^n}{n}=\frac{2(-1)^{n+1}}n$.</p>
            `
          },
          {
            label: 'x²',
            statement: String.raw`$f(x)=x^2$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$x^2=\frac{\pi^2}3+4\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx,\qquad-\pi\le x\le\pi.$$
              <span class="step-label">De onde vem</span>
              <p>Par $\Rightarrow b_n=0$. $a_0=\frac2\pi\int_0^\pi x^2dx=\frac{2\pi^2}3$, termo constante $\frac{\pi^2}3$. Para $n\ge1$, com a primitiva de $x^2\cos nx$ (os termos com $\operatorname{sen}$ zeram em $0$ e $\pi$):</p>
              $$a_n=\frac2\pi\left[\frac{2x\cos nx}{n^2}\right]_0^\pi=\frac2\pi\cdot\frac{2\pi(-1)^n}{n^2}=\frac{4(-1)^n}{n^2}.$$
              <p>A extensão é contínua (vale $\pi^2$ dos dois lados de $\pm\pi$), então vale também em $x=\pm\pi$.</p>
            `
          },
          {
            label: '|x|',
            statement: String.raw`$f(x)=|x|$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$|x|=\frac\pi2-\frac4\pi\sum_{k=0}^{\infty}\frac{\cos(2k+1)x}{(2k+1)^2},\qquad-\pi\le x\le\pi.$$
              <span class="step-label">De onde vem</span>
              <p>Par. $a_0=\frac2\pi\int_0^\pi x\,dx=\pi$, termo constante $\frac\pi2$. $a_n=\frac2\pi\int_0^\pi x\cos nx\,dx=\frac2\pi\cdot\frac{(-1)^n-1}{n^2}$: zero para $n$ par, $-\frac{4}{\pi n^2}$ para $n$ ímpar.</p>
            `
          },
          {
            label: '|sen x|',
            statement: String.raw`$f(x)=|\operatorname{sen}x|$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$|\operatorname{sen}x|=\frac2\pi-\frac4\pi\sum_{n=1}^{\infty}\frac{\cos2nx}{4n^2-1}=\frac2\pi+\frac4\pi\sum_{n=1}^{\infty}\frac{\cos2nx}{1-4n^2}.$$
              <span class="step-label">De onde vem</span>
              <p>Par. $a_0=\frac2\pi\int_0^\pi\operatorname{sen}x\,dx=\frac4\pi$. Para $m\ge2$, com $\operatorname{sen}x\cos mx=\frac12[\operatorname{sen}(1+m)x+\operatorname{sen}(1-m)x]$ e $\cos((1\pm m)\pi)=-(-1)^m$:</p>
              $$a_m=\frac1\pi\left[\frac{1+(-1)^m}{1+m}+\frac{1+(-1)^m}{1-m}\right]=\frac{1+(-1)^m}{\pi}\cdot\frac{2}{1-m^2}.$$
              <p>Zero para $m$ ímpar ($a_1=\frac1\pi\int_0^\pi\operatorname{sen}2x\,dx=0$ também); para $m=2n$: $\frac{4}{\pi(1-4n^2)}$.</p>
            `
          },
          {
            label: '|cos x|',
            statement: String.raw`$f(x)=|\cos x|$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$|\cos x|=\frac2\pi+\frac4\pi\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{4n^2-1}\cos2nx.$$
              <span class="step-label">De onde vem</span>
              <p>$|\cos x|=|\operatorname{sen}(x+\frac\pi2)|$. Trocando $x$ por $x+\frac\pi2$ na série de $|\operatorname{sen}x|$: $\cos\big(2n(x+\frac\pi2)\big)=\cos(2nx+n\pi)=(-1)^n\cos2nx$, e $\frac{(-1)^n}{1-4n^2}=\frac{(-1)^{n-1}}{4n^2-1}$.</p>
              <p>Confere em $x=0$: $\frac2\pi+\frac4\pi\left(\frac13-\frac1{15}+\frac1{35}-\cdots\right)=1$.</p>
            `
          },
          {
            label: 'sgn',
            statement: String.raw`$f(x)=-1$ em $]-\pi,0[$, $f(x)=1$ em $]0,\pi[$ (onda quadrada)`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$f(x)=\frac4\pi\sum_{k=0}^{\infty}\frac{\operatorname{sen}(2k+1)x}{2k+1}\qquad(S=0\text{ em }0\text{ e }\pm\pi).$$
              <span class="step-label">De onde vem</span>
              <p>Ímpar. $b_n=\frac2\pi\int_0^\pi\operatorname{sen}nx\,dx=\frac2\pi\cdot\frac{1-(-1)^n}{n}$: zero para $n$ par, $\frac4{\pi n}$ para $n$ ímpar. Em $x=\frac\pi2$: $1=\frac4\pi\left(1-\frac13+\frac15-\cdots\right)$, de novo $\frac\pi4$.</p>
            `
          }
        ]
      },

      {
        ref: 'Somas · Valores numéricos conhecidos', examStyle: true, tag: 'essencial',
        statement: String.raw`<p>Quanto vale cada soma? Tente lembrar também <em>de qual série</em> ela sai.</p>`,
        parts: [
          {
            label: '1',
            statement: String.raw`$\displaystyle\sum_{n=1}^{\infty}\frac1{n^2}$ e $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^2}$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}6,\qquad\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^2}=\frac{\pi^2}{12}.$$
              <span class="step-label">De onde vem</span>
              <p>Série de $x^2$ (contínua em $[-\pi,\pi]$). Em $x=\pi$, com $\cos n\pi=(-1)^n$: $\pi^2=\frac{\pi^2}3+4\sum\frac1{n^2}\Rightarrow\sum\frac1{n^2}=\frac{\pi^2}6$. Em $x=0$: $0=\frac{\pi^2}3+4\sum\frac{(-1)^n}{n^2}\Rightarrow\sum\frac{(-1)^{n+1}}{n^2}=\frac{\pi^2}{12}$.</p>
            `
          },
          {
            label: '2',
            statement: String.raw`$\displaystyle\sum_{k=0}^{\infty}\frac1{(2k+1)^2}$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\sum_{k=0}^{\infty}\frac1{(2k+1)^2}=\frac{\pi^2}8.$$
              <span class="step-label">De onde vem</span>
              <p>Série de $|x|$ em $x=0$: $0=\frac\pi2-\frac4\pi\sum\frac1{(2k+1)^2}$. Ou: $\frac{\pi^2}6-\sum\frac1{(2n)^2}=\frac{\pi^2}6-\frac14\cdot\frac{\pi^2}6=\frac{\pi^2}8$. Caiu em <code>23·Q1</code>.</p>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}$ e $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$1-\frac13+\frac15-\cdots=\frac\pi4,\qquad1-\frac12+\frac13-\cdots=\ln2.$$
              <span class="step-label">De onde vem</span>
              <p>$\operatorname{arctg}1=\frac\pi4$ e $\ln(1+1)=\ln2$, pelas séries de Taylor nos extremos (teorema de Abel). A primeira também sai da série de $x$ (ou da onda quadrada) em $x=\frac\pi2$ — como em <code>24·Q1</code>, onde a resposta certa era $\frac\pi4$ e a alternativa falsa dizia $\frac\pi2$.</p>
            `
          },
          {
            label: '4',
            statement: String.raw`$\displaystyle\sum_{n=1}^{\infty}\frac1{n^4}$ e $\displaystyle\sum_{k=0}^{\infty}\frac1{(2k+1)^4}$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\sum_{n=1}^{\infty}\frac1{n^4}=\frac{\pi^4}{90},\qquad\sum_{k=0}^{\infty}\frac1{(2k+1)^4}=\frac{\pi^4}{96}.$$
              <span class="step-label">De onde vem</span>
              <p>Parseval de $x^2$: $\frac1\pi\int_{-\pi}^{\pi}x^4dx=\frac{2\pi^4}5=\frac12\left(\frac{2\pi^2}3\right)^2+\sum\frac{16}{n^4}=\frac{2\pi^4}9+16\sum\frac1{n^4}$, logo $\sum\frac1{n^4}=\frac{2\pi^4}{16}\left(\frac15-\frac19\right)=\frac{\pi^4}{90}$.</p>
              <p>Parseval de $|x|$: $\frac1\pi\int_{-\pi}^{\pi}x^2dx=\frac{2\pi^2}3=\frac{\pi^2}2+\frac{16}{\pi^2}\sum\frac1{(2k+1)^4}$, logo $\sum\frac1{(2k+1)^4}=\frac{\pi^2}{16}\cdot\frac{\pi^2}{6}=\frac{\pi^4}{96}$.</p>
            `
          },
          {
            label: '5',
            statement: String.raw`$\displaystyle\sum_{n=1}^{\infty}\frac1{4n^2-1}$ e $\displaystyle\sum_{n=1}^{\infty}\frac1{(4n^2-1)^2}$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\sum_{n=1}^{\infty}\frac1{4n^2-1}=\frac12,\qquad\sum_{n=1}^{\infty}\frac1{(4n^2-1)^2}=\frac{\pi^2}{16}-\frac12.$$
              <span class="step-label">De onde vem</span>
              <p>Primeira: $\frac1{4n^2-1}=\frac1{(2n-1)(2n+1)}=\frac12\left(\frac1{2n-1}-\frac1{2n+1}\right)$, telescópica: a soma parcial é $\frac12\left(1-\frac1{2N+1}\right)\to\frac12$. (Também sai da série de $|\operatorname{sen}x|$ em $x=0$.)</p>
              <p>Segunda: Parseval de $|\operatorname{sen}x|$ ou $|\cos x|$: $1=\frac8{\pi^2}+\frac{16}{\pi^2}\sum\frac1{(4n^2-1)^2}$. <strong>É a soma mais cobrada das três provas</strong> (<code>25·Q11</code>, <code>24·Q4</code>, <code>23·Q7</code> — nesta última reescrita como $\sum\frac1{(2k-1)^2(2k+1)^2}$).</p>
            `
          },
          {
            label: '6',
            statement: String.raw`$\displaystyle\sum_{n=0}^{\infty}\frac1{n!}$`,
            resolution: String.raw`
              <span class="step-label">Resposta</span>
              $$\sum_{n=0}^{\infty}\frac1{n!}=e.$$
              <span class="step-label">De onde vem</span>
              <p>Série de $e^t$ em $t=1$. Variações: $\sum\frac{(-1)^n}{n!}=e^{-1}$, $\sum\frac{2^n}{n!}=e^2$.</p>
            `
          }
        ]
      }

    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t10', number: '10',
    title: 'Prova P2 — 2025',
    subtitle: '— prova antiga resolvida (21/10/2025, Tipo 17)',
    intro: String.raw`
      <p>Esta é a <strong>P2 aplicada em 21/10/2025</strong> (Tipo 17), com as 12 questões de múltipla escolha transcritas e resolvidas passo a passo. O gabarito oficial anotado na prova foi conferido questão por questão contra a resolução. Use como <strong>simulado de fechamento</strong>: tente cada questão antes de abrir a resolução.</p>
      <p>Mapa rápido do que a prova cobrou: <strong>teoria de séries de potências</strong> (Q1), <strong>raio e intervalo de convergência</strong> (Q2, Q3), <strong>limites e derivadas via Taylor</strong> (Q4, Q6, Q7), <strong>convergência da série de Fourier, extensões par e ímpar</strong> (Q5, Q8, Q10), <strong>cálculo de coeficientes de Fourier</strong> (Q9), <strong>Parseval</strong> (Q11) e <strong>mínimos quadrados</strong> (Q5-III, Q12).</p>
      <p>Observação sobre estratégia de prova: as questões de Fourier quase sempre se resolvem com três perguntas — <em>qual extensão</em> (par, ímpar, periódica), <em>onde estão os saltos</em> (lá a soma é a média dos limites laterais) e <em>qual o período</em> (para reduzir pontos como $3\pi$ ou $15\pi$ ao intervalo-base).</p>
    `,
    exercises: [

      {
        ref: 'P2 2025 · Questão 1', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes afirmações:</p>
          <p>I) Podemos construir uma série de potências $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ com intervalo máximo de convergência $]-10,1[$.</p>
          <p>II) Se a série $\displaystyle\sum_{n=0}^{\infty}a_n8^n$ converge condicionalmente, então o raio de convergência da série de potências $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ é menor estritamente que $8$.</p>
          <p>III) Se $\displaystyle\sum_{n=1}^{\infty}na_nx^{n-1}$ é uma série de potências com raio de convergência $R&gt;0$, então a série $\displaystyle\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}$ pode ter raio de convergência diferente de $R$.</p>
          <p>Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">B</span><span>Apenas a afirmação I é verdadeira.</span></li>
            <li><span class="key">C</span><span>Apenas as afirmações I e II são verdadeiras.</span></li>
            <li><span class="key">D</span><span>Apenas as afirmações II e III são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Apenas a afirmação III é verdadeira.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 0 — o fato que decide tudo</span>
          <p>Para $\sum a_nx^n$ com raio $R$: a série converge absolutamente para $|x|&lt;R$ e diverge para $|x|&gt;R$. Logo o conjunto de convergência $I$ sempre satisfaz</p>
          $$]-R,R[\;\subset\; I\;\subset\;[-R,R],$$
          <p>isto é, é <strong>simétrico em torno do centro $0$</strong>, a menos dos dois extremos.</p>
          <span class="step-label">Passo 1 — afirmação I</span>
          <p>Suponha que o intervalo fosse $]-10,1[$. Como $x=-5$ está nele, a série converge em $-5$, e portanto $R\ge5$ (se fosse $R&lt;5$ ela divergiria em $|x|=5&gt;R$). Mas então $x=2$, com $|2|&lt;5\le R$, teria de estar no intervalo — e $2\notin\,]-10,1[$. Contradição. <strong>I é falsa.</strong></p>
          <span class="step-label">Passo 2 — afirmação II</span>
          <p>A série converge em $x=8$, então $8$ não pode estar na região $|x|&gt;R$: logo $R\ge8$. Se fosse $R&gt;8$, o ponto $x=8$ estaria no interior $|x|&lt;R$, onde a convergência é <em>absoluta</em> — contradizendo a convergência condicional. Portanto $R=8$ exatamente, e não $R&lt;8$. <strong>II é falsa.</strong></p>
          <span class="step-label">Passo 3 — afirmação III</span>
          <p>Pela fórmula de Cauchy–Hadamard, o raio de $\sum c_nx^n$ é dado por $\dfrac1R=\limsup\sqrt[n]{|c_n|}$. Como $\sqrt[n]{n}\to1$ e $\sqrt[n]{\tfrac1{n+1}}\to1$,</p>
          $$\limsup\sqrt[n]{|n\,a_n|}=\limsup\sqrt[n]{|a_n|}=\limsup\sqrt[n]{\left|\frac{a_n}{n+1}\right|}.$$
          <p>Além disso, multiplicar a série inteira por $x$ ou por $\tfrac1x$ (deslocar o expoente de $x^n$ para $x^{n\pm1}$) não muda onde ela converge para $x\ne0$. Logo $\sum na_nx^{n-1}$, $\sum a_nx^n$ e $\sum\tfrac{a_n}{n+1}x^{n+1}$ têm <strong>o mesmo raio</strong>: derivar e integrar termo a termo preserva $R$. <strong>III é falsa.</strong></p>
          <div class="note"><b>Cuidado:</b> derivar/integrar preserva o <em>raio</em>, mas pode mudar o comportamento nos <em>extremos</em> (é o que cai na Q2 da P2 2023).</div>
          <div class="final">Alternativa <b>A</b>: todas as afirmações são falsas.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 2', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a seguinte série de potências</p>
          $$S(x)=\sum_{n=1}^{\infty}\left(1+\frac1n\right)^{2n^2}x^{4n}.$$
          <p>Qual é o raio de convergência, $R$, desta série?</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$R=e^2$.</span></li>
            <li><span class="key">B</span><span>$R=\dfrac1{e^2}$.</span></li>
            <li><span class="key">C</span><span>$R=\dfrac1{e^{1/2}}$.</span></li>
            <li><span class="key">D</span><span>$R=e^{1/2}$.</span></li>
            <li><span class="key">E</span><span>$R=\dfrac1e$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — escolher o teste</span>
          <p>A série só tem potências $x^{4n}$ e o coeficiente tem expoente $2n^2$: o <strong>teste da raiz</strong> aplicado ao termo geral $u_n=\left(1+\frac1n\right)^{2n^2}x^{4n}$ elimina as duas coisas de uma vez.</p>
          <span class="step-label">Passo 2 — raiz $n$-ésima do termo geral</span>
          $$\sqrt[n]{|u_n|}=\left(1+\frac1n\right)^{2n^2/n}|x|^{4n/n}=\left[\left(1+\frac1n\right)^{n}\right]^{2}|x|^4\;\longrightarrow\;e^2|x|^4,$$
          <p>usando o limite notável $\left(1+\tfrac1n\right)^n\to e$.</p>
          <span class="step-label">Passo 3 — condição de convergência</span>
          <p>Converge (absolutamente) se $e^2|x|^4&lt;1$ e diverge se $e^2|x|^4&gt;1$:</p>
          $$e^2|x|^4&lt;1\iff|x|^4&lt;e^{-2}\iff|x|&lt;e^{-2/4}=e^{-1/2}.$$
          <div class="note"><b>Armadilha:</b> não use a fórmula $\tfrac1R=\lim\sqrt[n]{|a_n|}$ achando que o coeficiente de $x^n$ é $\left(1+\tfrac1n\right)^{2n^2}$ — a potência é $x^{4n}$, não $x^n$. Aplicar o teste ao termo geral inteiro evita o erro (daria $R=e^{-2}$, a alternativa B).</div>
          <div class="final">Alternativa <b>C</b>: $R=\dfrac{1}{e^{1/2}}$.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 3', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Dada a seguinte série</p>
          $$S(x)=\sum_{n=1}^{\infty}\left(\frac{3^n}{\sqrt{n^3}\,\sqrt{2^n}}\right)x^n,$$
          <p>o seu intervalo maximal de convergência é:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\left]-\dfrac{\sqrt2}3,\dfrac{\sqrt2}3\right[$.</span></li>
            <li><span class="key">B</span><span>$\left[-\dfrac{\sqrt2}3,\dfrac{\sqrt2}3\right]$.</span></li>
            <li><span class="key">C</span><span>$\left]-\dfrac{\sqrt2}3,\dfrac{\sqrt2}3\right]$.</span></li>
            <li><span class="key">D</span><span>$]-1,1[$.</span></li>
            <li><span class="key">E</span><span>$[-1,1]$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — reescrever o termo geral</span>
          <p>$\sqrt{n^3}=n^{3/2}$ e $\sqrt{2^n}=2^{n/2}=(\sqrt2)^n$, então</p>
          $$u_n=\frac{3^n}{n^{3/2}(\sqrt2)^n}\,x^n=\frac{1}{n^{3/2}}\left(\frac{3x}{\sqrt2}\right)^{n}.$$
          <span class="step-label">Passo 2 — teste da razão</span>
          $$\left|\frac{u_{n+1}}{u_n}\right|=\frac{n^{3/2}}{(n+1)^{3/2}}\cdot\frac{3|x|}{\sqrt2}=\left(\frac{n}{n+1}\right)^{3/2}\frac{3|x|}{\sqrt2}\longrightarrow\frac{3|x|}{\sqrt2}.$$
          <p>Converge para $\dfrac{3|x|}{\sqrt2}&lt;1$, isto é, $|x|&lt;\dfrac{\sqrt2}3$; diverge para $|x|&gt;\dfrac{\sqrt2}{3}$. Logo $R=\dfrac{\sqrt2}3$.</p>
          <span class="step-label">Passo 3 — extremo $x=\frac{\sqrt2}3$</span>
          <p>Aí $\dfrac{3x}{\sqrt2}=1$ e a série vira $\displaystyle\sum\frac1{n^{3/2}}$: $p$-série com $p=\tfrac32&gt;1$, <strong>converge</strong>.</p>
          <span class="step-label">Passo 4 — extremo $x=-\frac{\sqrt2}3$</span>
          <p>Aí $\dfrac{3x}{\sqrt2}=-1$ e a série vira $\displaystyle\sum\frac{(-1)^n}{n^{3/2}}$, cuja série dos módulos é a do passo 3: <strong>converge absolutamente</strong>.</p>
          <div class="final">Alternativa <b>B</b>: $\left[-\dfrac{\sqrt2}3,\dfrac{\sqrt2}3\right]$.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 4', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere $f(x)=\operatorname{sen}(x^3)-\left(x^3-\dfrac{x^9}{6}\right)$, e seja $L$ o limite</p>
          $$L=\lim_{x\to0}\frac{f(x)}{x^{15}}.$$
          <p>Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$L=0$</span></li>
            <li><span class="key">B</span><span>$L=\dfrac1{4!}$</span></li>
            <li><span class="key">C</span><span>$L=-\dfrac1{5!}$</span></li>
            <li><span class="key">D</span><span>$L=-\dfrac1{4!}$</span></li>
            <li><span class="key">E</span><span>$L=\dfrac1{5!}$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — série do seno</span>
          $$\operatorname{sen}t=\sum_{n=0}^{\infty}\frac{(-1)^n\,t^{2n+1}}{(2n+1)!}=t-\frac{t^3}{3!}+\frac{t^5}{5!}-\frac{t^7}{7!}+\cdots,\qquad t\in\mathbb R.$$
          <span class="step-label">Passo 2 — substituir $t=x^3$</span>
          $$\operatorname{sen}(x^3)=\sum_{n=0}^{\infty}\frac{(-1)^n\,x^{6n+3}}{(2n+1)!}=x^3-\frac{x^9}{3!}+\frac{x^{15}}{5!}-\frac{x^{21}}{7!}+\cdots$$
          <span class="step-label">Passo 3 — subtrair o polinômio dado</span>
          <p>Como $3!=6$, os dois primeiros termos cancelam exatamente com $x^3-\tfrac{x^9}6$:</p>
          $$f(x)=\frac{x^{15}}{5!}-\frac{x^{21}}{7!}+\frac{x^{27}}{9!}-\cdots=\sum_{n=2}^{\infty}\frac{(-1)^n\,x^{6n+3}}{(2n+1)!}.$$
          <span class="step-label">Passo 4 — dividir por $x^{15}$ e passar ao limite</span>
          $$\frac{f(x)}{x^{15}}=\sum_{n=2}^{\infty}\frac{(-1)^n\,x^{6n-12}}{(2n+1)!}=\frac1{5!}-\frac{x^6}{7!}+\frac{x^{12}}{9!}-\cdots$$
          <p>Esta é uma série de potências com raio infinito, logo contínua em $x=0$; seu valor em $0$ é o termo constante $\tfrac1{5!}$.</p>
          <div class="final">Alternativa <b>E</b>: $L=\dfrac1{5!}$.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 5', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes afirmações:</p>
          <p>I) Se $f(x)=x(\pi-x)$ em $[0,\pi]$, então a soma $S(x)$ de sua <strong>série de senos</strong> é contínua em todo $x\in\mathbb R$.</p>
          <p>II) Se $f(x)=x^2$ em $[0,\pi]$, então a soma $S(x)$ de sua <strong>série de cossenos</strong> é diferenciável em todo $x\in\mathbb R$.</p>
          <p>III) Os coeficientes $c_1,c_2,c_3$ que minimizam a integral $\displaystyle\int_0^\pi\big(x^3-c_1-c_2\cos(x)-c_3\cos(2x)\big)^2dx$ são dados por $c_1=\frac{a_0}2$, $c_2=a_1$ e $c_3=a_2$, onde $a_0,a_1$ e $a_2$ são os coeficientes na série de Fourier $\frac{a_0}2+\sum_{n=1}^\infty a_n\cos(nx)+b_n\operatorname{sen}(nx)$ de $f(x)=x^3$ no intervalo $]-\pi,\pi[$.</p>
          <p>Podemos afirmar que são verdadeiras:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas I e III.</span></li>
            <li><span class="key">B</span><span>Apenas I.</span></li>
            <li><span class="key">C</span><span>Apenas II.</span></li>
            <li><span class="key">D</span><span>Nenhuma.</span></li>
            <li><span class="key">E</span><span>Apenas III.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 0 — a ferramenta</span>
          <p>Para $f$ de classe $C^1$ por partes, a série de Fourier converge em cada $x$ para a <strong>média dos limites laterais</strong> da extensão periódica. Onde a extensão é contínua, $S(x)$ é o próprio valor da extensão.</p>
          <span class="step-label">Passo 1 — afirmação I (extensão ímpar)</span>
          <p>A série de senos usa a extensão ímpar $2\pi$-periódica $\tilde f$. Em $[-\pi,0]$: $\tilde f(x)=-f(-x)=-(-x)(\pi+x)=x(\pi+x)$. Os únicos pontos suspeitos são $x=0$ e $x=\pm\pi$ (emendas):</p>
          <p>• em $x=0$: $f(0^+)=0\cdot\pi=0$ e $\tilde f(0^-)=0$ — contínua;<br>• em $x=\pi$: $f(\pi^-)=\pi\cdot0=0$ e, pela periodicidade, $\tilde f(\pi^+)=\tilde f(-\pi^+)=(-\pi)(\pi-\pi)=0$ — contínua.</p>
          <p>Logo $\tilde f$ é contínua em $\mathbb R$ e $S=\tilde f$ é contínua. <strong>I é verdadeira.</strong></p>
          <span class="step-label">Passo 2 — afirmação II (extensão par)</span>
          <p>A extensão par de $x^2$ é $x^2$ em $[-\pi,\pi]$, repetida com período $2\pi$. Ela é contínua (vale $\pi^2$ dos dois lados de $\pi$), então $S=\tilde f$. Mas em $x=\pi$:</p>
          $$\tilde f'(\pi^-)=2\pi,\qquad \tilde f'(\pi^+)=\tilde f'(-\pi^+)=2(-\pi)=-2\pi.$$
          <p>As derivadas laterais diferem: há um "bico" em $x=\pi$ (e em todo $\pi+2k\pi$). <strong>II é falsa.</strong></p>
          <span class="step-label">Passo 3 — afirmação III: quem de fato minimiza</span>
          <p>A integral é uma função quadrática de $(c_1,c_2,c_3)$, convexa; o mínimo é o ponto onde as derivadas parciais se anulam. Usando $\int_0^\pi\cos x\,dx=\int_0^\pi\cos 2x\,dx=\int_0^\pi\cos x\cos 2x\,dx=0$ e $\int_0^\pi\cos^2x\,dx=\int_0^\pi\cos^22x\,dx=\tfrac\pi2$:</p>
          $$\frac{\partial}{\partial c_1}=0\iff\int_0^\pi x^3dx=c_1\pi\iff c_1=\frac1\pi\int_0^\pi x^3dx=\frac{\pi^3}{4},$$
          $$\frac{\partial}{\partial c_2}=0\iff c_2=\frac2\pi\int_0^\pi x^3\cos x\,dx,\qquad\frac{\partial}{\partial c_3}=0\iff c_3=\frac2\pi\int_0^\pi x^3\cos 2x\,dx.$$
          <p>Esses são os coeficientes da <strong>série de cossenos</strong> de $x^3$ em $[0,\pi]$ (extensão par, ou seja, de $|x|^3$ em $]-\pi,\pi[$).</p>
          <span class="step-label">Passo 4 — comparar com o que a afirmação diz</span>
          <p>A afirmação usa a série de Fourier de $x^3$ em $]-\pi,\pi[$. Como $x^3\cos nx$ é ímpar, $a_n=\frac1\pi\int_{-\pi}^{\pi}x^3\cos nx\,dx=0$ para todo $n$. Isso daria $c_1=c_2=c_3=0$, mas o passo 3 mostrou $c_1=\tfrac{\pi^3}4\neq0$. <strong>III é falsa.</strong></p>
          <div class="final">Alternativa <b>B</b>: apenas I.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 6', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f$ uma função tal que sua série de Taylor satisfaz</p>
          $$f(x)=\sum_{n=0}^{\infty}\frac{(-1)^n}{(n+1)}x^{4n+6}$$
          <p>para $|x|&lt;1$. Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$f^{(15)}(0)=0$ e $f^{(16)}(0)=0$</span></li>
            <li><span class="key">B</span><span>$f^{(15)}(0)=\dfrac{15!}{16}$ e $f^{(16)}(0)=\dfrac{16!}{17}$</span></li>
            <li><span class="key">C</span><span>$f^{(15)}(0)=0$ e $f^{(16)}(0)=\dfrac{16!}{3}$</span></li>
            <li><span class="key">D</span><span>$f^{(15)}(0)=\dfrac{15!}{3}$ e $f^{(16)}(0)=\dfrac{16!}{3}$</span></li>
            <li><span class="key">E</span><span>$f^{(15)}(0)=\dfrac{15!}{3}$ e $f^{(16)}(0)=0$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — unicidade da série de Taylor</span>
          <p>Se $f(x)=\sum_k c_kx^k$ para $|x|&lt;R$, então $c_k=\dfrac{f^{(k)}(0)}{k!}$, isto é, $f^{(k)}(0)=k!\,c_k$. Basta ler o coeficiente de $x^{15}$ e de $x^{16}$.</p>
          <span class="step-label">Passo 2 — quais potências aparecem</span>
          <p>Os expoentes são $4n+6$ com $n=0,1,2,\dots$: $6,10,14,18,22,\dots$ Todos pares e $\equiv2\pmod 4$.</p>
          <span class="step-label">Passo 3 — $k=15$</span>
          <p>$15$ é ímpar, não é da forma $4n+6$: $c_{15}=0\Rightarrow f^{(15)}(0)=0$.</p>
          <span class="step-label">Passo 4 — $k=16$</span>
          <p>$4n+6=16\iff n=\tfrac52\notin\mathbb N$: $c_{16}=0\Rightarrow f^{(16)}(0)=0$.</p>
          <div class="note"><b>Contraste:</b> se fosse $k=18$, teríamos $4n+6=18\iff n=3$, $c_{18}=\tfrac{(-1)^3}{4}$ e $f^{(18)}(0)=-\tfrac{18!}{4}$.</div>
          <div class="final">Alternativa <b>A</b>: $f^{(15)}(0)=0$ e $f^{(16)}(0)=0$.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 7', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a função $f(x)=x^3\operatorname{sen}(x^2)$, $x\in\mathbb R$, e seja $I$ dado por $I=f'(1)$. Qual das seguintes séries representa o valor de $I$?</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$I=\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n(4n+5)}{(2n+1)!}$.</span></li>
            <li><span class="key">B</span><span>$I=\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n(4n+5)}{(2n+1)!}$.</span></li>
            <li><span class="key">C</span><span>$I=\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n(2n+3)}{(2n+1)!}$.</span></li>
            <li><span class="key">D</span><span>$I=\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n(4n+4)}{(2n+1)!}$.</span></li>
            <li><span class="key">E</span><span>$I=\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n(4n+4)}{(2n+1)!}$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — série de $\operatorname{sen}(x^2)$</span>
          $$\operatorname{sen}(x^2)=\sum_{n=0}^{\infty}\frac{(-1)^n(x^2)^{2n+1}}{(2n+1)!}=\sum_{n=0}^{\infty}\frac{(-1)^n x^{4n+2}}{(2n+1)!},\qquad x\in\mathbb R.$$
          <span class="step-label">Passo 2 — multiplicar por $x^3$</span>
          $$f(x)=x^3\operatorname{sen}(x^2)=\sum_{n=0}^{\infty}\frac{(-1)^n x^{4n+5}}{(2n+1)!}.$$
          <span class="step-label">Passo 3 — derivar termo a termo</span>
          <p>O raio é infinito, então podemos derivar termo a termo em todo $\mathbb R$:</p>
          $$f'(x)=\sum_{n=0}^{\infty}\frac{(-1)^n(4n+5)\,x^{4n+4}}{(2n+1)!}.$$
          <span class="step-label">Passo 4 — avaliar em $x=1$</span>
          $$I=f'(1)=\sum_{n=0}^{\infty}\frac{(-1)^n(4n+5)}{(2n+1)!}.$$
          <p>O índice começa em $n=0$ (o termo $n=0$, que vale $5$, vem de $x^5$ e não pode ser descartado — isso elimina B).</p>
          <span class="step-label">Confira numericamente</span>
          <p>Derivando direto: $f'(x)=3x^2\operatorname{sen}(x^2)+2x^4\cos(x^2)$, logo $f'(1)=3\operatorname{sen}1+2\cos1\approx2{,}524+1{,}081=3{,}605$. A série: $5-\tfrac96+\tfrac{13}{120}-\tfrac{17}{5040}+\cdots\approx5-1{,}5+0{,}108-0{,}003=3{,}605$. ✔</p>
          <div class="final">Alternativa <b>A</b>.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 8', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere uma função $f:[0,L[\,\to\mathbb R$, com $L\in\mathbb R$ fixado. Admita que $f$ satisfaz as hipóteses de algum teorema de convergência pontual da série de Fourier, como por exemplo, que $f$ é $C^1$ por partes e $f$ e $f'$ possuem todos os limites laterais finitos em todos os pontos. O gráfico de $f$ em $[0,L[$ é dado abaixo:</p>
          <div class="figure"><svg viewBox="0 0 300 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gráfico de f em [0,L["><line x1="15.0" y1="100.0" x2="285.0" y2="100.0" stroke="#837d6c" stroke-width="1"/><line x1="45.0" y1="8" x2="45.0" y2="167" stroke="#837d6c" stroke-width="1"/><line x1="245.0" y1="100.0" x2="245.0" y2="142.8" stroke="#837d6c" stroke-dasharray="3 3"/><text x="95.0" y="94.0" font-family="JetBrains Mono,monospace" font-size="11" fill="#16223a" text-anchor="middle">a</text><text x="155.0" y="94.0" font-family="JetBrains Mono,monospace" font-size="11" fill="#16223a" text-anchor="middle">b</text><text x="245.0" y="94.0" font-family="JetBrains Mono,monospace" font-size="11" fill="#16223a" text-anchor="middle">L</text><line x1="45.0" y1="40.0" x2="95.0" y2="20.0" stroke="#2f5d50" stroke-width="2.4"/><circle cx="45.0" cy="40.0" r="3.6" fill="#2f5d50"/><circle cx="95.0" cy="20.0" r="3.6" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.6"/><line x1="95.0" y1="48.0" x2="155.0" y2="64.8" stroke="#2f5d50" stroke-width="2.4"/><circle cx="95.0" cy="48.0" r="3.6" fill="#2f5d50"/><circle cx="155.0" cy="64.8" r="3.6" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.6"/><line x1="155.0" y1="132.0" x2="245.0" y2="142.8" stroke="#2f5d50" stroke-width="2.4"/><circle cx="155.0" cy="132.0" r="3.6" fill="#2f5d50"/><circle cx="245.0" cy="142.8" r="3.6" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.6"/></svg><div class="figure-cap">Esboço com a mesma forma do gráfico da prova: $f$ sobe em $[0,a[$, salta para baixo em $a$, desce em $]a,b[$, salta para valores negativos em $b$ e desce até $L$.</div></div>
          <p>Seja $S(x)$ a soma da <strong>série de cossenos</strong> de $f$ em $x$. Se desenharmos o gráfico de $S(x)$ em um intervalo pouco maior que $[-2L,2L[$, qual dos gráficos (A–E, na prova original) melhor representa $S(x)$?</p>
          <p style="color:var(--gray)">As alternativas são cinco gráficos; a resolução mostra o gráfico correto e o que diferencia cada alternativa.</p>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — qual extensão a série de cossenos usa</span>
          <p>A série de cossenos de $f$ em $[0,L[$ é a série de Fourier da <strong>extensão par</strong> $\tilde f(x)=f(|x|)$ em $]-L,L[$, repetida com <strong>período $2L$</strong>. Então $S$ é par ($S(-x)=S(x)$) e $2L$-periódica.</p>
          <span class="step-label">Passo 2 — os pontos de emenda $x=0$ e $x=\pm L$</span>
          <p>• Em $x=0$: os dois lados vêm de $f(0^+)$, então não há salto — o gráfico forma um "V" espelhado (o ramo crescente de $f$ e o seu reflexo).<br>• Em $x=L$: pela esquerda vale $f(L^-)$; pela direita, $\tilde f(L^+)=\tilde f(-L^+)=f(L^-)$ também. Sem salto: outro "V" espelhado, agora na parte negativa.</p>
          <p>Ou seja, a extensão par <strong>nunca cria salto novo</strong> nas emendas; só herda os saltos internos de $f$.</p>
          <span class="step-label">Passo 3 — os saltos internos</span>
          <p>$f$ tem saltos em $x=a$ e $x=b$. Eles aparecem em $\pm a,\pm b$ e nos translados por $2L$: $\pm(2L-a)$, $\pm(2L-b)$. Em cada um, o teorema de convergência dá</p>
          $$S(x_0)=\frac{\tilde f(x_0^-)+\tilde f(x_0^+)}{2},$$
          <p>um ponto isolado <strong>no meio</strong> do salto, com bolinhas abertas nas pontas dos dois ramos. Em $\pm b$ o salto vai de um valor positivo para um negativo, então a média fica perto do eixo $x$.</p>
          <span class="step-label">Passo 4 — o gráfico de $S$</span>
          <div class="figure"><svg viewBox="0 0 620 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Soma S(x) da série de cossenos"><line x1="15.0" y1="100.0" x2="605.0" y2="100.0" stroke="#837d6c" stroke-width="1"/><line x1="310.0" y1="8" x2="310.0" y2="167" stroke="#837d6c" stroke-width="1"/><line x1="35.6" y1="97.0" x2="35.6" y2="103.0" stroke="#837d6c"/><text x="35.6" y="116.0" font-family="JetBrains Mono,monospace" font-size="11" fill="#16223a" text-anchor="middle">−2L</text><line x1="172.8" y1="97.0" x2="172.8" y2="103.0" stroke="#837d6c"/><text x="172.8" y="116.0" font-family="JetBrains Mono,monospace" font-size="11" fill="#16223a" text-anchor="middle">−L</text><line x1="447.2" y1="97.0" x2="447.2" y2="103.0" stroke="#837d6c"/><text x="447.2" y="116.0" font-family="JetBrains Mono,monospace" font-size="11" fill="#16223a" text-anchor="middle">L</text><line x1="584.4" y1="97.0" x2="584.4" y2="103.0" stroke="#837d6c"/><text x="584.4" y="116.0" font-family="JetBrains Mono,monospace" font-size="11" fill="#16223a" text-anchor="middle">2L</text><polyline points="15.0,28.0 15.9,28.5 16.8,29.1 17.7,29.6 18.7,30.1 19.6,30.7 20.5,31.2 21.4,31.7 22.3,32.3 23.2,32.8 24.1,33.3 25.1,33.9 26.0,34.4 26.9,34.9 27.8,35.5 28.7,36.0 29.6,36.5 30.6,37.1 31.5,37.6 32.4,38.1 33.3,38.7 34.2,39.2 35.1,39.7 36.0,39.7 37.0,39.2 37.9,38.7 38.8,38.1 39.7,37.6 40.6,37.1 41.5,36.5 42.4,36.0 43.4,35.5 44.3,34.9 45.2,34.4 46.1,33.9 47.0,33.3 47.9,32.8 48.8,32.3 49.8,31.7 50.7,31.2 51.6,30.7 52.5,30.1 53.4,29.6 54.3,29.1 55.2,28.5 56.2,28.0 57.1,27.5 58.0,26.9 58.9,26.4 59.8,25.9 60.7,25.3 61.7,24.8 62.6,24.3 63.5,23.7 64.4,23.2 65.3,22.7 66.2,22.1 67.1,21.6 68.1,21.1 69.0,20.5 69.9,20.0" fill="none" stroke="#2f5d50" stroke-width="2.2"/><polyline points="69.9,48.0 70.6,48.3 71.3,48.6 71.9,48.8 72.6,49.1 73.3,49.4 74.0,49.7 74.7,50.0 75.4,50.2 76.1,50.5 76.7,50.8 77.4,51.1 78.1,51.4 78.8,51.6 79.5,51.9 80.2,52.2 80.9,52.5 81.5,52.8 82.2,53.0 82.9,53.3 83.6,53.6 84.3,53.9 85.0,54.2 85.7,54.4 86.3,54.7 87.0,55.0 87.7,55.3 88.4,55.6 89.1,55.8 89.8,56.1 90.5,56.4 91.2,56.7 91.8,57.0 92.5,57.2 93.2,57.5 93.9,57.8 94.6,58.1 95.3,58.4 96.0,58.6 96.6,58.9 97.3,59.2 98.0,59.5 98.7,59.8 99.4,60.0 100.1,60.3 100.8,60.6 101.4,60.9 102.1,61.2 102.8,61.4 103.5,61.7 104.2,62.0 104.9,62.3 105.6,62.6 106.2,62.8 106.9,63.1 107.6,63.4 108.3,63.7 109.0,64.0 109.7,64.2 110.4,64.5 111.0,64.8" fill="none" stroke="#2f5d50" stroke-width="2.2"/><polyline points="111.0,132.0 113.1,132.4 115.2,132.7 117.2,133.1 119.3,133.4 121.3,133.8 123.4,134.2 125.5,134.5 127.5,134.9 129.6,135.2 131.6,135.6 133.7,136.0 135.7,136.3 137.8,136.7 139.9,137.0 141.9,137.4 144.0,137.8 146.0,138.1 148.1,138.5 150.2,138.8 152.2,139.2 154.3,139.6 156.3,139.9 158.4,140.3 160.4,140.6 162.5,141.0 164.6,141.4 166.6,141.7 168.7,142.1 170.7,142.4 172.8,142.8 174.8,142.4 176.9,142.1 179.0,141.7 181.0,141.4 183.1,141.0 185.1,140.6 187.2,140.3 189.3,139.9 191.3,139.6 193.4,139.2 195.4,138.8 197.5,138.5 199.5,138.1 201.6,137.8 203.7,137.4 205.7,137.0 207.8,136.7 209.8,136.3 211.9,136.0 214.0,135.6 216.0,135.2 218.1,134.9 220.1,134.5 222.2,134.2 224.2,133.8 226.3,133.4 228.4,133.1 230.4,132.7 232.5,132.4 234.5,132.0" fill="none" stroke="#2f5d50" stroke-width="2.2"/><polyline points="234.5,64.8 235.2,64.5 235.9,64.2 236.6,64.0 237.3,63.7 238.0,63.4 238.7,63.1 239.3,62.8 240.0,62.6 240.7,62.3 241.4,62.0 242.1,61.7 242.8,61.4 243.5,61.2 244.1,60.9 244.8,60.6 245.5,60.3 246.2,60.0 246.9,59.8 247.6,59.5 248.3,59.2 248.9,58.9 249.6,58.6 250.3,58.4 251.0,58.1 251.7,57.8 252.4,57.5 253.1,57.2 253.7,57.0 254.4,56.7 255.1,56.4 255.8,56.1 256.5,55.8 257.2,55.6 257.9,55.3 258.5,55.0 259.2,54.7 259.9,54.4 260.6,54.2 261.3,53.9 262.0,53.6 262.7,53.3 263.3,53.0 264.0,52.8 264.7,52.5 265.4,52.2 266.1,51.9 266.8,51.6 267.5,51.4 268.2,51.1 268.8,50.8 269.5,50.5 270.2,50.2 270.9,50.0 271.6,49.7 272.3,49.4 273.0,49.1 273.6,48.8 274.3,48.6 275.0,48.3 275.7,48.0" fill="none" stroke="#2f5d50" stroke-width="2.2"/><polyline points="275.7,20.0 276.8,20.7 278.0,21.3 279.1,22.0 280.3,22.7 281.4,23.3 282.6,24.0 283.7,24.7 284.8,25.3 286.0,26.0 287.1,26.7 288.3,27.3 289.4,28.0 290.6,28.7 291.7,29.3 292.8,30.0 294.0,30.7 295.1,31.3 296.3,32.0 297.4,32.7 298.6,33.3 299.7,34.0 300.9,34.7 302.0,35.3 303.1,36.0 304.3,36.7 305.4,37.3 306.6,38.0 307.7,38.7 308.9,39.3 310.0,40.0 311.1,39.3 312.3,38.7 313.4,38.0 314.6,37.3 315.7,36.7 316.9,36.0 318.0,35.3 319.1,34.7 320.3,34.0 321.4,33.3 322.6,32.7 323.7,32.0 324.9,31.3 326.0,30.7 327.2,30.0 328.3,29.3 329.4,28.7 330.6,28.0 331.7,27.3 332.9,26.7 334.0,26.0 335.2,25.3 336.3,24.7 337.4,24.0 338.6,23.3 339.7,22.7 340.9,22.0 342.0,21.3 343.2,20.7 344.3,20.0" fill="none" stroke="#2f5d50" stroke-width="2.2"/><polyline points="344.3,48.0 345.0,48.3 345.7,48.6 346.4,48.8 347.0,49.1 347.7,49.4 348.4,49.7 349.1,50.0 349.8,50.2 350.5,50.5 351.2,50.8 351.8,51.1 352.5,51.4 353.2,51.6 353.9,51.9 354.6,52.2 355.3,52.5 356.0,52.8 356.7,53.0 357.3,53.3 358.0,53.6 358.7,53.9 359.4,54.2 360.1,54.4 360.8,54.7 361.5,55.0 362.1,55.3 362.8,55.6 363.5,55.8 364.2,56.1 364.9,56.4 365.6,56.7 366.3,57.0 366.9,57.2 367.6,57.5 368.3,57.8 369.0,58.1 369.7,58.4 370.4,58.6 371.1,58.9 371.7,59.2 372.4,59.5 373.1,59.8 373.8,60.0 374.5,60.3 375.2,60.6 375.9,60.9 376.5,61.2 377.2,61.4 377.9,61.7 378.6,62.0 379.3,62.3 380.0,62.6 380.7,62.8 381.3,63.1 382.0,63.4 382.7,63.7 383.4,64.0 384.1,64.2 384.8,64.5 385.5,64.8" fill="none" stroke="#2f5d50" stroke-width="2.2"/><polyline points="385.5,132.0 387.5,132.4 389.6,132.7 391.6,133.1 393.7,133.4 395.8,133.8 397.8,134.2 399.9,134.5 401.9,134.9 404.0,135.2 406.0,135.6 408.1,136.0 410.2,136.3 412.2,136.7 414.3,137.0 416.3,137.4 418.4,137.8 420.5,138.1 422.5,138.5 424.6,138.8 426.6,139.2 428.7,139.6 430.7,139.9 432.8,140.3 434.9,140.6 436.9,141.0 439.0,141.4 441.0,141.7 443.1,142.1 445.2,142.4 447.2,142.8 449.3,142.4 451.3,142.1 453.4,141.7 455.4,141.4 457.5,141.0 459.6,140.6 461.6,140.3 463.7,139.9 465.7,139.6 467.8,139.2 469.8,138.8 471.9,138.5 474.0,138.1 476.0,137.8 478.1,137.4 480.1,137.0 482.2,136.7 484.3,136.3 486.3,136.0 488.4,135.6 490.4,135.2 492.5,134.9 494.5,134.5 496.6,134.2 498.7,133.8 500.7,133.4 502.8,133.1 504.8,132.7 506.9,132.4 509.0,132.0" fill="none" stroke="#2f5d50" stroke-width="2.2"/><polyline points="509.0,64.8 509.6,64.5 510.3,64.2 511.0,64.0 511.7,63.7 512.4,63.4 513.1,63.1 513.8,62.8 514.4,62.6 515.1,62.3 515.8,62.0 516.5,61.7 517.2,61.4 517.9,61.2 518.6,60.9 519.2,60.6 519.9,60.3 520.6,60.0 521.3,59.8 522.0,59.5 522.7,59.2 523.4,58.9 524.0,58.6 524.7,58.4 525.4,58.1 526.1,57.8 526.8,57.5 527.5,57.2 528.2,57.0 528.8,56.7 529.5,56.4 530.2,56.1 530.9,55.8 531.6,55.6 532.3,55.3 533.0,55.0 533.7,54.7 534.3,54.4 535.0,54.2 535.7,53.9 536.4,53.6 537.1,53.3 537.8,53.0 538.5,52.8 539.1,52.5 539.8,52.2 540.5,51.9 541.2,51.6 541.9,51.4 542.6,51.1 543.3,50.8 543.9,50.5 544.6,50.2 545.3,50.0 546.0,49.7 546.7,49.4 547.4,49.1 548.1,48.8 548.7,48.6 549.4,48.3 550.1,48.0" fill="none" stroke="#2f5d50" stroke-width="2.2"/><polyline points="550.1,20.0 551.0,20.5 551.9,21.1 552.9,21.6 553.8,22.1 554.7,22.7 555.6,23.2 556.5,23.7 557.4,24.3 558.3,24.8 559.3,25.3 560.2,25.9 561.1,26.4 562.0,26.9 562.9,27.5 563.8,28.0 564.8,28.5 565.7,29.1 566.6,29.6 567.5,30.1 568.4,30.7 569.3,31.2 570.2,31.7 571.2,32.3 572.1,32.8 573.0,33.3 573.9,33.9 574.8,34.4 575.7,34.9 576.6,35.5 577.6,36.0 578.5,36.5 579.4,37.1 580.3,37.6 581.2,38.1 582.1,38.7 583.0,39.2 584.0,39.7 584.9,39.7 585.8,39.2 586.7,38.7 587.6,38.1 588.5,37.6 589.4,37.1 590.4,36.5 591.3,36.0 592.2,35.5 593.1,34.9 594.0,34.4 594.9,33.9 595.9,33.3 596.8,32.8 597.7,32.3 598.6,31.7 599.5,31.2 600.4,30.7 601.3,30.1 602.3,29.6 603.2,29.1 604.1,28.5 605.0,28.0" fill="none" stroke="#2f5d50" stroke-width="2.2"/><circle cx="69.9" cy="20.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="69.9" cy="48.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="69.9" cy="34.0" r="3.6" fill="#c9822e"/><circle cx="111.0" cy="64.8" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="111.0" cy="132.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="111.0" cy="98.4" r="3.6" fill="#c9822e"/><circle cx="234.5" cy="132.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="234.5" cy="64.8" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="234.5" cy="98.4" r="3.6" fill="#c9822e"/><circle cx="275.7" cy="48.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="275.7" cy="20.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="275.7" cy="34.0" r="3.6" fill="#c9822e"/><circle cx="344.3" cy="20.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="344.3" cy="48.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="344.3" cy="34.0" r="3.6" fill="#c9822e"/><circle cx="385.5" cy="64.8" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="385.5" cy="132.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="385.5" cy="98.4" r="3.6" fill="#c9822e"/><circle cx="509.0" cy="132.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="509.0" cy="64.8" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="509.0" cy="98.4" r="3.6" fill="#c9822e"/><circle cx="550.1" cy="48.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="550.1" cy="20.0" r="3.3" fill="#faf8f2" stroke="#2f5d50" stroke-width="1.5"/><circle cx="550.1" cy="34.0" r="3.6" fill="#c9822e"/></svg><div class="figure-cap">Soma da série de cossenos em $[-2L,2L]$: simetria par, período $2L$, "V" contínuos em $0$ e $\pm L$, e os valores médios (pontos laranja) em cada salto.</div></div>
          <span class="step-label">Passo 5 — eliminando as alternativas</span>
          <p>Cheque três coisas em cada gráfico: <strong>(i)</strong> simetria em relação ao eixo $y$; <strong>(ii)</strong> continuidade em $0$ e $\pm L$ (formando "V"); <strong>(iii)</strong> um ponto isolado no valor médio de cada salto. Na prova, A, B e C não são simétricos em relação ao eixo $y$ (os ramos se repetem sem espelhar, ou trocam de sinal como numa extensão ímpar), e D não traz os pontos isolados com o valor médio nos saltos. Só a alternativa <b>E</b> cumpre os três critérios.</p>
          <div class="note"><b>Para lembrar:</b> série de cossenos $\Rightarrow$ extensão par $\Rightarrow$ contínua nas emendas $0$ e $\pm L$. Série de senos $\Rightarrow$ extensão ímpar $\Rightarrow$ $S(0)=S(\pm L)=0$, com salto se $f(0^+)\ne0$ ou $f(L^-)\ne0$.</div>
          <div class="final">Alternativa <b>E</b>.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 9', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f$ a função dada por $f(x)=x$ para $x\in\,]-\pi,0[$ e $f(x)=0$ para $x\in[0,\pi]$. Então, a série de Fourier de $f$ em $]-\pi,\pi]$ é dada por:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$-\dfrac\pi2+\displaystyle\sum_{n=1}^{\infty}\left[\frac{(-1)^n-1}{\pi n^2}\cos(nx)+\frac{(-1)^n}{n^2}\operatorname{sen}(nx)\right]$.</span></li>
            <li><span class="key">B</span><span>$-\dfrac\pi2+\displaystyle\sum_{n=1}^{\infty}\left[\frac{(-1)^n-1}{\pi n}\cos(nx)-\frac{(-1)^n}{n^2}\operatorname{sen}(nx)\right]$.</span></li>
            <li><span class="key">C</span><span>$-\dfrac\pi4+\displaystyle\sum_{n=1}^{\infty}\left[\frac{(-1)^n-1}{\pi n}\cos(nx)+\frac{(-1)^n}{n}\operatorname{sen}(nx)\right]$.</span></li>
            <li><span class="key">D</span><span>$-\dfrac\pi8+\displaystyle\sum_{n=1}^{\infty}\left[\frac{1-(-1)^n}{\pi n^2}\cos(nx)+\frac{(-1)^n}{n^2}\operatorname{sen}(nx)\right]$.</span></li>
            <li><span class="key">E</span><span>$-\dfrac\pi4+\displaystyle\sum_{n=1}^{\infty}\left[\frac{1-(-1)^n}{\pi n^2}\cos(nx)-\frac{(-1)^n}{n}\operatorname{sen}(nx)\right]$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 0 — fórmulas ($L=\pi$)</span>
          <p>$a_n=\dfrac1\pi\displaystyle\int_{-\pi}^{\pi}f(x)\cos nx\,dx$ e $b_n=\dfrac1\pi\displaystyle\int_{-\pi}^{\pi}f(x)\operatorname{sen}nx\,dx$. Como $f=0$ em $[0,\pi]$, só sobra a parte $]-\pi,0[$, onde $f(x)=x$.</p>
          <span class="step-label">Passo 1 — $a_0$</span>
          $$a_0=\frac1\pi\int_{-\pi}^{0}x\,dx=\frac1\pi\left[\frac{x^2}2\right]_{-\pi}^{0}=\frac1\pi\left(0-\frac{\pi^2}2\right)=-\frac\pi2\quad\Longrightarrow\quad\frac{a_0}2=-\frac\pi4.$$
          <p>Isso já elimina A, B e D.</p>
          <span class="step-label">Passo 2 — $a_n$, $n\ge1$ (por partes: $u=x$, $dv=\cos nx\,dx$, $v=\frac{\operatorname{sen}nx}{n}$)</span>
          $$\int_{-\pi}^{0}x\cos nx\,dx=\left[\frac{x\operatorname{sen}nx}{n}\right]_{-\pi}^{0}-\frac1n\int_{-\pi}^{0}\operatorname{sen}nx\,dx=0-\frac1n\left[-\frac{\cos nx}{n}\right]_{-\pi}^{0}=\frac{1}{n^2}\Big(\cos0-\cos(-n\pi)\Big)=\frac{1-(-1)^n}{n^2}.$$
          $$a_n=\frac{1-(-1)^n}{\pi n^2}.$$
          <span class="step-label">Passo 3 — $b_n$ (por partes: $u=x$, $dv=\operatorname{sen}nx\,dx$, $v=-\frac{\cos nx}{n}$)</span>
          $$\int_{-\pi}^{0}x\operatorname{sen}nx\,dx=\left[-\frac{x\cos nx}{n}\right]_{-\pi}^{0}+\frac1n\int_{-\pi}^{0}\cos nx\,dx=\left(0-\frac{\pi\cos(-n\pi)}{n}\right)+\frac1n\left[\frac{\operatorname{sen}nx}{n}\right]_{-\pi}^{0}=-\frac{\pi(-1)^n}{n}+0.$$
          <p>(No limite inferior: $-\frac{(-\pi)\cos(-n\pi)}{n}=\frac{\pi(-1)^n}{n}$, que entra com sinal $-$.) Logo</p>
          $$b_n=\frac1\pi\cdot\left(-\frac{\pi(-1)^n}{n}\right)=-\frac{(-1)^n}{n}.$$
          <span class="step-label">Passo 4 — montar a série</span>
          $$-\frac\pi4+\sum_{n=1}^{\infty}\left[\frac{1-(-1)^n}{\pi n^2}\cos(nx)-\frac{(-1)^n}{n}\operatorname{sen}(nx)\right].$$
          <div class="final">Alternativa <b>E</b>.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 10', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as constantes $a_n$, $n\ge0$, $b_n$, $n\ge1$, tais que</p>
          $$\frac{a_0}2+\sum_{n=1}^{\infty}a_n\cos(nx)+b_n\operatorname{sen}(nx)=x+x^2,$$
          <p>para todo $x\in\,]-\pi,\pi[$; e as seguintes afirmações:</p>
          <p>I) A soma da série acima $S(x)$ para $x\in\mathbb R$, periódica de período $2\pi$, satisfaz $S(3\pi)=\pi^2$.</p>
          <p>II) $a_n\ne0$ para algum $n\ge0$.</p>
          <p>III) $b_n\ne0$ para algum $n\ge1$.</p>
          <p>Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">B</span><span>Apenas as afirmações II e III são verdadeiras.</span></li>
            <li><span class="key">C</span><span>Apenas a afirmação I é verdadeira.</span></li>
            <li><span class="key">D</span><span>Todas as afirmações são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Apenas a afirmação II é verdadeira.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — afirmação I: reduzir $3\pi$ ao período</span>
          <p>$3\pi=\pi+2\pi$, então $S(3\pi)=S(\pi)$. Em $x=\pi$ a extensão periódica de $f(x)=x+x^2$ emenda o valor da direita do intervalo com o da esquerda:</p>
          $$f(\pi^-)=\pi+\pi^2,\qquad f(-\pi^+)=-\pi+\pi^2.$$
          <p>São diferentes (salto de $2\pi$), então $S$ vale a média:</p>
          $$S(3\pi)=\frac{(\pi+\pi^2)+(-\pi+\pi^2)}{2}=\frac{2\pi^2}{2}=\pi^2.$$
          <p><strong>I é verdadeira.</strong></p>
          <span class="step-label">Passo 2 — afirmação II: basta um $a_n\ne0$</span>
          $$a_0=\frac1\pi\int_{-\pi}^{\pi}(x+x^2)\,dx=\frac1\pi\left(\left[\frac{x^2}{2}\right]_{-\pi}^{\pi}+\left[\frac{x^3}{3}\right]_{-\pi}^{\pi}\right)=\frac1\pi\left(0+\frac{2\pi^3}{3}\right)=\frac{2\pi^2}{3}\ne0.$$
          <p><strong>II é verdadeira.</strong></p>
          <span class="step-label">Passo 3 — afirmação III: basta um $b_n\ne0$</span>
          <p>Em $b_1=\frac1\pi\int_{-\pi}^{\pi}(x+x^2)\operatorname{sen}x\,dx$, o pedaço $x^2\operatorname{sen}x$ é ímpar e integra zero; $x\operatorname{sen}x$ é par:</p>
          $$b_1=\frac2\pi\int_0^\pi x\operatorname{sen}x\,dx=\frac2\pi\Big[-x\cos x+\operatorname{sen}x\Big]_0^\pi=\frac2\pi\big(-\pi\cos\pi+0\big)=\frac2\pi\cdot\pi=2\ne0.$$
          <p><strong>III é verdadeira.</strong></p>
          <div class="note"><b>Atalho de paridade:</b> $x+x^2$ não é nem par nem ímpar. Se todos os $b_n$ fossem nulos, $S$ seria par; se todos os $a_n$ fossem nulos, $S$ seria ímpar. Nenhum dos dois acontece, então II e III são verdadeiras sem conta.</div>
          <div class="final">Alternativa <b>D</b>: todas as afirmações são verdadeiras.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 11', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f(x)=|\cos(x)|$ para $x\in\,]-\pi,\pi]$. Se sua série de Fourier é dada por</p>
          $$\frac2\pi+\frac4\pi\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{4n^2-1}\cos(2nx),$$
          <p>o valor de soma da série $\displaystyle\sum_{n=1}^{\infty}\frac{1}{(4n^2-1)^2}$ é:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\dfrac{\pi^2}{12}+\dfrac1{16}$.</span></li>
            <li><span class="key">B</span><span>$\dfrac{\pi}{16}+\dfrac1{16}$.</span></li>
            <li><span class="key">C</span><span>$\dfrac{\pi^2}{16}-\dfrac12$.</span></li>
            <li><span class="key">D</span><span>$\dfrac{\pi}{16}-\dfrac12$.</span></li>
            <li><span class="key">E</span><span>$\dfrac{\pi^2}{12}-\dfrac1{16}$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — reconhecer Parseval</span>
          <p>A série pedida tem os coeficientes <em>ao quadrado</em>: é a identidade de Parseval,</p>
          $$\frac1\pi\int_{-\pi}^{\pi}f(x)^2dx=\frac{a_0^2}{2}+\sum_{n=1}^{\infty}\left(a_n^2+b_n^2\right).$$
          <span class="step-label">Passo 2 — ler os coeficientes</span>
          <p>$\dfrac{a_0}2=\dfrac2\pi\Rightarrow a_0=\dfrac4\pi\Rightarrow\dfrac{a_0^2}{2}=\dfrac{16}{2\pi^2}=\dfrac8{\pi^2}$. Todos os $b_n$ são nulos. Só aparecem cossenos de frequência par $2n$, cada uma uma única vez, com coeficiente $\dfrac4\pi\cdot\dfrac{(-1)^{n-1}}{4n^2-1}$, cujo quadrado é $\dfrac{16}{\pi^2(4n^2-1)^2}$.</p>
          <span class="step-label">Passo 3 — lado esquerdo</span>
          $$\frac1\pi\int_{-\pi}^{\pi}\cos^2x\,dx=\frac1\pi\int_{-\pi}^{\pi}\frac{1+\cos2x}{2}\,dx=\frac1\pi\left[\frac x2+\frac{\operatorname{sen}2x}{4}\right]_{-\pi}^{\pi}=\frac1\pi\cdot\pi=1.$$
          <span class="step-label">Passo 4 — igualar e isolar</span>
          $$1=\frac8{\pi^2}+\frac{16}{\pi^2}\sum_{n=1}^{\infty}\frac1{(4n^2-1)^2}\iff\sum_{n=1}^{\infty}\frac1{(4n^2-1)^2}=\frac{\pi^2}{16}\left(1-\frac{8}{\pi^2}\right)=\frac{\pi^2}{16}-\frac12.$$
          <p>Conferência: $\tfrac{\pi^2}{16}-\tfrac12\approx0{,}1169$ e $\tfrac19+\tfrac1{225}+\tfrac1{1225}+\cdots\approx0{,}1111+0{,}0044+0{,}0008=0{,}1163\ldots$ ✔</p>
          <div class="final">Alternativa <b>C</b>: $\dfrac{\pi^2}{16}-\dfrac12$.</div>
        `
      },

      {
        ref: 'P2 2025 · Questão 12', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Os números reais $c_1$ e $c_2$ que minimizam o valor da integral</p>
          $$\int_{-\pi}^{\pi}\big(|x|-c_1-c_2\cos(x)\big)^2dx$$
          <p>são:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$c_1=\dfrac\pi4$ e $c_2=0$.</span></li>
            <li><span class="key">B</span><span>$c_1=\dfrac\pi4$ e $c_2=-\dfrac4\pi$.</span></li>
            <li><span class="key">C</span><span>$c_1=\dfrac\pi2$ e $c_2=-\dfrac4\pi$.</span></li>
            <li><span class="key">D</span><span>$c_1=\dfrac\pi2$ e $c_2=0$.</span></li>
            <li><span class="key">E</span><span>$c_1=\dfrac\pi4$ e $c_2=-\dfrac\pi4$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — derivadas parciais iguais a zero</span>
          <p>A integral é quadrática e convexa em $(c_1,c_2)$; o mínimo é o ponto crítico. Derivando sob o sinal de integral:</p>
          $$\frac{\partial}{\partial c_1}:\ -2\int_{-\pi}^{\pi}\big(|x|-c_1-c_2\cos x\big)dx=0,\qquad\frac{\partial}{\partial c_2}:\ -2\int_{-\pi}^{\pi}\big(|x|-c_1-c_2\cos x\big)\cos x\,dx=0.$$
          <span class="step-label">Passo 2 — primeira equação</span>
          <p>Como $\int_{-\pi}^{\pi}\cos x\,dx=0$:</p>
          $$\int_{-\pi}^{\pi}|x|\,dx=2\pi c_1\iff2\int_0^\pi x\,dx=2\pi c_1\iff\pi^2=2\pi c_1\iff c_1=\frac\pi2.$$
          <span class="step-label">Passo 3 — segunda equação</span>
          <p>Como $\int_{-\pi}^{\pi}\cos x\,dx=0$ e $\int_{-\pi}^{\pi}\cos^2x\,dx=\pi$:</p>
          $$\int_{-\pi}^{\pi}|x|\cos x\,dx=c_2\,\pi.$$
          <p>O integrando é par, e por partes ($u=x$, $dv=\cos x\,dx$):</p>
          $$\int_{-\pi}^{\pi}|x|\cos x\,dx=2\int_0^\pi x\cos x\,dx=2\Big[x\operatorname{sen}x+\cos x\Big]_0^\pi=2\big((0+\cos\pi)-(0+\cos0)\big)=2(-1-1)=-4.$$
          $$c_2=-\frac4\pi.$$
          <div class="note"><b>Leitura:</b> $c_1=\tfrac{a_0}{2}$ e $c_2=a_1$ da série de Fourier de $|x|$ — o polinômio trigonométrico de mínimos quadrados é sempre a <em>soma parcial</em> da série de Fourier.</div>
          <div class="final">Alternativa <b>C</b>: $c_1=\dfrac\pi2$ e $c_2=-\dfrac4\pi$.</div>
        `
      }

    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t11', number: '11',
    title: 'Prova P2 — 2024',
    subtitle: '— prova antiga resolvida (Tipo 53)',
    intro: String.raw`
      <p>Esta é a <strong>P2 aplicada em 2024</strong> (Tipo 53), com as 12 questões transcritas e resolvidas passo a passo. A cópia digitalizada não tem a capa nem o gabarito oficial; cada alternativa foi conferida pela própria resolução (e coincide com as marcações feitas na folha).</p>
      <p>Mapa rápido do que a prova cobrou: <strong>coeficientes de Fourier e convergência pontual</strong> (Q1, Q7, Q9, Q12), <strong>derivadas na origem via série</strong> (Q2), <strong>raio e intervalo de convergência</strong> (Q3, Q10), <strong>Parseval</strong> (Q4), <strong>erro em série alternada</strong> (Q5), <strong>integral via série</strong> (Q6), <strong>Taylor fora da origem</strong> (Q8) e <strong>extensões par/ímpar e mínimos quadrados</strong> (Q11).</p>
      <p>Repare que Q4 desta prova e Q11 da P2 2025 são a <em>mesma</em> conta de Parseval (com $|\operatorname{sen}x|$ e $|\cos x|$), e Q10 é a "irmã" da Q2 de 2025: vale a pena fazer as duas seguidas.</p>
    `,
    exercises: [

      {
        ref: 'P2 2024 · Questão 1', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $F$ a extensão <strong>ímpar</strong> de período $2$ da função $g(x)=x$ para $x\in[0,1[$. Considere as seguintes afirmações:</p>
          <p>I) A série de Fourier de $F$ é dada por $\displaystyle\sum_{n=1}^{\infty}2\frac{(-1)^{n+1}}{n\pi}\operatorname{sen}(n\pi x)$.</p>
          <p>II) A avaliação da série de Fourier de $F$ em $x=\frac12$ nos permite concluir que $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n-1}=\frac\pi2$.</p>
          <p>III) A soma da série de Fourier da $F$ representa uma função contínua sobre $\mathbb R$.</p>
          <p>Sobre estas afirmações, podemos afirmar que são verdadeiras:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Nenhuma.</span></li>
            <li><span class="key">B</span><span>Apenas III.</span></li>
            <li><span class="key">C</span><span>Apenas I.</span></li>
            <li><span class="key">D</span><span>Todas.</span></li>
            <li><span class="key">E</span><span>Apenas II e III.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — afirmação I: calcular $b_n$ ($L=1$)</span>
          <p>Período $2=2L\Rightarrow L=1$. $F$ é ímpar, então $a_n=0$ e</p>
          $$b_n=\frac1L\int_{-L}^{L}F(x)\operatorname{sen}\frac{n\pi x}{L}\,dx=\int_{-1}^{1}x\operatorname{sen}(n\pi x)\,dx=2\int_0^1x\operatorname{sen}(n\pi x)\,dx,$$
          <p>pois $x\operatorname{sen}(n\pi x)$ é par. Por partes ($u=x$, $dv=\operatorname{sen}(n\pi x)dx$, $v=-\frac{\cos(n\pi x)}{n\pi}$):</p>
          $$\int_0^1x\operatorname{sen}(n\pi x)\,dx=\left[-\frac{x\cos(n\pi x)}{n\pi}\right]_0^1+\frac1{n\pi}\int_0^1\cos(n\pi x)\,dx=-\frac{\cos n\pi}{n\pi}+\frac1{n\pi}\left[\frac{\operatorname{sen}(n\pi x)}{n\pi}\right]_0^1=\frac{(-1)^{n+1}}{n\pi}.$$
          $$b_n=\frac{2(-1)^{n+1}}{n\pi}.\qquad\textbf{I é verdadeira.}$$
          <span class="step-label">Passo 2 — afirmação II: avaliar em $x=\frac12$</span>
          <p>$F$ é contínua em $x=\tfrac12$, então a série converge para $F(\tfrac12)=\tfrac12$:</p>
          $$\frac12=\sum_{n=1}^{\infty}\frac{2(-1)^{n+1}}{n\pi}\operatorname{sen}\frac{n\pi}{2}.$$
          <p>$\operatorname{sen}\frac{n\pi}2=0$ para $n$ par. Para $n=2k-1$: $\operatorname{sen}\frac{(2k-1)\pi}{2}=(-1)^{k-1}$ e $(-1)^{n+1}=(-1)^{2k}=1$. Então</p>
          $$\frac12=\frac2\pi\sum_{k=1}^{\infty}\frac{(-1)^{k-1}}{2k-1}\iff\sum_{k=1}^{\infty}\frac{(-1)^{k-1}}{2k-1}=\frac\pi4\ne\frac\pi2.$$
          <p><strong>II é falsa</strong> (o valor correto é a série de Leibniz, $\tfrac\pi4$).</p>
          <span class="step-label">Passo 3 — afirmação III</span>
          <p>Em $x=1$: $F(1^-)=1$ e, pela periodicidade e imparidade, $F(1^+)=F(-1^+)=-1$. Há um salto de altura $2$; a série converge para a média $0$ em $x=1$ mas a soma $S$ tem limites laterais $\pm1$ ali. $S$ é descontínua em todo ímpar. <strong>III é falsa.</strong></p>
          <div class="final">Alternativa <b>C</b>: apenas I.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 2', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f(x)=\ln(1-x)=-\displaystyle\sum_{n=0}^{\infty}\frac{x^{n+1}}{n+1}$ para $|x|&lt;1$. Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$f^{(22)}(0)=(21)!$ e $f^{(21)}(0)=(20)!$</span></li>
            <li><span class="key">B</span><span>$f^{(22)}(0)=-(21)!$ e $f^{(21)}(0)=-(20)!$</span></li>
            <li><span class="key">C</span><span>$f^{(22)}(0)=-(21)!$ e $f^{(21)}(0)=(21)!$</span></li>
            <li><span class="key">D</span><span>$f^{(22)}(0)=-(20)!$ e $f^{(21)}(0)=-(21)!$</span></li>
            <li><span class="key">E</span><span>$f^{(22)}(0)=-(22)!$ e $f^{(21)}(0)=-(20)!$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — coeficiente de $x^k$</span>
          <p>Trocando $k=n+1$: $f(x)=-\displaystyle\sum_{k=1}^{\infty}\frac{x^k}{k}$. O coeficiente de $x^k$ é $c_k=-\dfrac1k$.</p>
          <span class="step-label">Passo 2 — unicidade: $f^{(k)}(0)=k!\,c_k$</span>
          $$f^{(k)}(0)=k!\left(-\frac1k\right)=-\frac{k!}{k}=-(k-1)!.$$
          <span class="step-label">Passo 3 — aplicar</span>
          <p>$f^{(22)}(0)=-21!$ e $f^{(21)}(0)=-20!$.</p>
          <span class="step-label">Confira derivando direto</span>
          <p>$f'(x)=-\dfrac{1}{1-x}$, $f''(x)=-\dfrac{1}{(1-x)^2}$, $f'''(x)=-\dfrac{2}{(1-x)^3}$, e por indução $f^{(k)}(x)=-\dfrac{(k-1)!}{(1-x)^k}$; em $x=0$, $-(k-1)!$. ✔</p>
          <div class="final">Alternativa <b>B</b>.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 3', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Dada a seguinte série</p>
          $$S(x)=\sum_{n=1}^{\infty}\frac{3^nx^n}{\sqrt{(4n+1)5^n}},$$
          <p>considere as seguintes afirmações:</p>
          <p>I) O raio de convergência da série é $\dfrac{\sqrt5}3$.</p>
          <p>II) O intervalo maximal de convergência da série é $\left]-\dfrac{\sqrt5}3,\dfrac{\sqrt5}3\right]$.</p>
          <p>III) $S\!\left(\dfrac13\right)\le\displaystyle\sum_{n=1}^{\infty}\left(\frac1{\sqrt5}\right)^n$.</p>
          <p>Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas as afirmações I e II são verdadeiras.</span></li>
            <li><span class="key">B</span><span>Apenas a afirmação II é verdadeira.</span></li>
            <li><span class="key">C</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">D</span><span>Apenas as afirmações I e III são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Todas as afirmações são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — reescrever</span>
          $$u_n=\frac{3^nx^n}{\sqrt{4n+1}\,(\sqrt5)^n}=\frac{1}{\sqrt{4n+1}}\left(\frac{3x}{\sqrt5}\right)^n.$$
          <span class="step-label">Passo 2 — afirmação I (teste da razão)</span>
          $$\left|\frac{u_{n+1}}{u_n}\right|=\sqrt{\frac{4n+1}{4n+5}}\cdot\frac{3|x|}{\sqrt5}\longrightarrow\frac{3|x|}{\sqrt5}.$$
          <p>Converge para $|x|&lt;\frac{\sqrt5}{3}$ e diverge para $|x|&gt;\frac{\sqrt5}3$: $R=\dfrac{\sqrt5}3$. <strong>I é verdadeira.</strong></p>
          <span class="step-label">Passo 3 — afirmação II (extremos)</span>
          <p>• $x=\frac{\sqrt5}3$: a série vira $\displaystyle\sum\frac1{\sqrt{4n+1}}$. Comparando no limite com $\sum\frac1{\sqrt n}$ ($p=\tfrac12\le1$, diverge): $\dfrac{1/\sqrt{4n+1}}{1/\sqrt n}=\sqrt{\dfrac{n}{4n+1}}\to\dfrac12\in\,]0,\infty[$, logo <strong>diverge</strong>.<br>
          • $x=-\frac{\sqrt5}3$: vira $\displaystyle\sum\frac{(-1)^n}{\sqrt{4n+1}}$; $\frac1{\sqrt{4n+1}}$ é positiva, decrescente e tende a $0$: <strong>converge</strong> por Leibniz.</p>
          <p>O intervalo é $\left[-\frac{\sqrt5}3,\frac{\sqrt5}3\right[$ — exatamente o oposto do afirmado. <strong>II é falsa.</strong></p>
          <span class="step-label">Passo 4 — afirmação III</span>
          <p>$x=\tfrac13$ está dentro do intervalo, e $3^n\left(\tfrac13\right)^n=1$:</p>
          $$S\!\left(\tfrac13\right)=\sum_{n=1}^{\infty}\frac{1}{\sqrt{4n+1}}\left(\frac1{\sqrt5}\right)^n.$$
          <p>Para $n\ge1$, $\sqrt{4n+1}\ge\sqrt5&gt;1$, então cada termo é $\le\left(\tfrac1{\sqrt5}\right)^n$; somando (as duas séries convergem), $S(\tfrac13)\le\sum\left(\tfrac1{\sqrt5}\right)^n$. <strong>III é verdadeira.</strong></p>
          <div class="final">Alternativa <b>D</b>: apenas I e III.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 4', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f(x)=|\operatorname{sen}x|$ para $x\in\,]-\pi,\pi[$. Se sua série de Fourier é dada por</p>
          $$\frac2\pi+\frac4\pi\sum_{n=1}^{\infty}\frac{\cos(2nx)}{1-4n^2},$$
          <p>o valor de soma da série $\displaystyle\sum_{n=1}^{\infty}\frac1{(1-4n^2)^2}$ é:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\dfrac{\pi^2}{12}+\dfrac1{16}$.</span></li>
            <li><span class="key">B</span><span>$\dfrac{\pi^2}{16}-\dfrac12$.</span></li>
            <li><span class="key">C</span><span>$\dfrac{\pi}{16}+\dfrac12$.</span></li>
            <li><span class="key">D</span><span>$\dfrac{\pi}{16}-\dfrac12$.</span></li>
            <li><span class="key">E</span><span>$\dfrac{\pi^2}{12}-\dfrac12$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — Parseval</span>
          $$\frac1\pi\int_{-\pi}^{\pi}f(x)^2dx=\frac{a_0^2}{2}+\sum_{n=1}^{\infty}(a_n^2+b_n^2).$$
          <span class="step-label">Passo 2 — coeficientes</span>
          <p>$\frac{a_0}{2}=\frac2\pi\Rightarrow a_0=\frac4\pi\Rightarrow\frac{a_0^2}2=\frac8{\pi^2}$. Os demais: coeficiente de $\cos(2nx)$ igual a $\frac4\pi\cdot\frac1{1-4n^2}$, de quadrado $\frac{16}{\pi^2(1-4n^2)^2}$; $b_n=0$.</p>
          <span class="step-label">Passo 3 — lado esquerdo</span>
          $$\frac1\pi\int_{-\pi}^{\pi}\operatorname{sen}^2x\,dx=\frac1\pi\int_{-\pi}^{\pi}\frac{1-\cos2x}{2}\,dx=\frac1\pi\left[\frac x2-\frac{\operatorname{sen}2x}{4}\right]_{-\pi}^{\pi}=\frac1\pi\cdot\pi=1.$$
          <span class="step-label">Passo 4 — isolar</span>
          $$1=\frac8{\pi^2}+\frac{16}{\pi^2}\sum_{n=1}^{\infty}\frac1{(1-4n^2)^2}\iff\sum_{n=1}^{\infty}\frac1{(1-4n^2)^2}=\frac{\pi^2}{16}\left(1-\frac8{\pi^2}\right)=\frac{\pi^2}{16}-\frac12.$$
          <p>Como $(1-4n^2)^2=(4n^2-1)^2$, é a mesma soma da Q11 da P2 2025. ✔</p>
          <div class="final">Alternativa <b>B</b>: $\dfrac{\pi^2}{16}-\dfrac12$.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 5', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja</p>
          $$f(x)=\sum_{n=0}^{\infty}\frac{(-1)^nx^{6n+2}}{(2n+1)!\,(6n+2)},$$
          <p>uma função dada em série de potências. O menor valor de $k\in\mathbb N$ tal que $S_k=\displaystyle\sum_{n=0}^{k}\frac{(-1)^n}{(2n+1)!\,(6n+2)}$ aproxima $f(1)$ com erro menor a $\frac1{1000}$, isso é, $k$ satisfaz $|f(1)-S_k|&lt;\frac1{1000}$, é:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$k=5$.</span></li>
            <li><span class="key">B</span><span>$k=1$.</span></li>
            <li><span class="key">C</span><span>$k=2$.</span></li>
            <li><span class="key">D</span><span>$k=4$.</span></li>
            <li><span class="key">E</span><span>$k=3$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — $f(1)$ é uma série alternada</span>
          $$f(1)=\sum_{n=0}^{\infty}(-1)^n\,\frac{1}{(2n+1)!\,(6n+2)}.$$
          <p>Os módulos $\frac1{(2n+1)!(6n+2)}$ são positivos, estritamente decrescentes (numerador fixo, denominador crescente) e tendem a $0$.</p>
          <span class="step-label">Passo 2 — estimativa do resto de Leibniz</span>
          <p>Para uma série alternada nessas condições, o erro ao parar no índice $k$ é menor que o primeiro termo desprezado:</p>
          $$|f(1)-S_k|&lt;\frac{1}{(2k+3)!\,(6k+8)}.$$
          <span class="step-label">Passo 3 — testar $k=0$</span>
          <p>O primeiro termo desprezado é $\frac1{3!\cdot8}=\frac1{48}\approx0{,}0208$. E o erro de fato não é pequeno: o resto é $\frac1{48}-\frac1{1680}+\cdots$, que fica entre $\frac1{48}-\frac1{1680}\approx0{,}0202$ e $\frac1{48}$. Como $0{,}0202&gt;0{,}001$, <strong>$k=0$ não serve</strong>.</p>
          <span class="step-label">Passo 4 — testar $k=1$</span>
          $$|f(1)-S_1|&lt;\frac1{5!\cdot14}=\frac1{120\cdot14}=\frac1{1680}&lt;\frac1{1000}.\quad\checkmark$$
          <div class="final">Alternativa <b>B</b>: $k=1$.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 6', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a função $f(x)=e^{x^3}$, $x\in\mathbb R$, e a integral $I=\displaystyle\int_0^1f(x)\,dx$. Qual das seguintes séries representa o valor de $I$?</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$I=\displaystyle\sum_{n=1}^{\infty}\frac{2}{n!\,(3n)}$.</span></li>
            <li><span class="key">B</span><span>$I=\displaystyle\sum_{n=0}^{\infty}\frac{2}{n!\,(3n+1)}$.</span></li>
            <li><span class="key">C</span><span>$I=\displaystyle\sum_{n=1}^{\infty}\frac{1}{n!\,(3n+1)}$.</span></li>
            <li><span class="key">D</span><span>$I=\displaystyle\sum_{n=2}^{\infty}\frac{2}{n!\,(3n)}$.</span></li>
            <li><span class="key">E</span><span>$I=\displaystyle\sum_{n=0}^{\infty}\frac{1}{n!\,(3n+1)}$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — série de $e^{x^3}$</span>
          $$e^t=\sum_{n=0}^{\infty}\frac{t^n}{n!}\ (t\in\mathbb R)\quad\Longrightarrow\quad e^{x^3}=\sum_{n=0}^{\infty}\frac{x^{3n}}{n!},\qquad x\in\mathbb R.$$
          <span class="step-label">Passo 2 — integrar termo a termo</span>
          <p>O raio é infinito, então em $[0,1]$ a integração termo a termo é permitida:</p>
          $$I=\sum_{n=0}^{\infty}\frac1{n!}\int_0^1x^{3n}\,dx=\sum_{n=0}^{\infty}\frac1{n!}\left[\frac{x^{3n+1}}{3n+1}\right]_0^1=\sum_{n=0}^{\infty}\frac{1}{n!\,(3n+1)}.$$
          <p>O índice começa em $n=0$ (o termo $1$ vem de $\int_0^1 1\,dx$), o que elimina C.</p>
          <div class="final">Alternativa <b>E</b>.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 7', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f(x)=2x$, para $x\in[0,\pi]$ e considere a série de Fourier de <strong>cossenos</strong> de $f$ dada por</p>
          $$S(x)=\pi-\frac4\pi\sum_{n=1}^{\infty}\frac{2}{(2n-1)^2}\cos\big((2n-1)x\big),\qquad x\in\mathbb R.$$
          <p>Para $x\in[3\pi,4\pi]$, podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$S(x)=-2x-8\pi$.</span></li>
            <li><span class="key">B</span><span>$S(x)=-2x+8\pi$.</span></li>
            <li><span class="key">C</span><span>$S(x)=-2x+4\pi$.</span></li>
            <li><span class="key">D</span><span>$S(x)=2x-8\pi$.</span></li>
            <li><span class="key">E</span><span>$S(x)=-2x-4\pi$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — a extensão</span>
          <p>Série de cossenos $\Rightarrow$ extensão par: $\tilde f(x)=2|x|$ em $[-\pi,\pi]$, repetida com período $2\pi$. Ela é contínua (vale $2\pi$ dos dois lados de $\pm\pi$) e $C^1$ por partes, logo $S(x)=\tilde f(x)$ para todo $x$ — um "dente de serra triangular".</p>
          <span class="step-label">Passo 2 — trazer $[3\pi,4\pi]$ para o intervalo-base</span>
          <p>Para $x\in[3\pi,4\pi]$, $x-4\pi\in[-\pi,0]$. Pela periodicidade ($4\pi=2\cdot2\pi$):</p>
          $$S(x)=\tilde f(x-4\pi)=2|x-4\pi|=2(4\pi-x)=-2x+8\pi.$$
          <span class="step-label">Confira nos extremos</span>
          <p>$S(4\pi)=S(0)=0$ e a fórmula dá $-8\pi+8\pi=0$ ✔; $S(3\pi)=S(\pi)=2\pi$ e a fórmula dá $-6\pi+8\pi=2\pi$ ✔.</p>
          <div class="final">Alternativa <b>B</b>: $S(x)=-2x+8\pi$.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 8', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>A série de Taylor de $f(x)=\ln(1+x)$ ao redor do ponto $a=2$ é dada pela expressão:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\ln(1+x)=\ln(3)+\displaystyle\sum_{n=1}^{\infty}\frac{1}{n3^n}(x-2)^n$, $\ |x-2|&lt;3$.</span></li>
            <li><span class="key">B</span><span>Nenhuma das opções são verdadeiras.</span></li>
            <li><span class="key">C</span><span>$\ln(1+x)=\ln(3)+\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n3^n}(x-2)^n$, $\ |x-2|&lt;3$.</span></li>
            <li><span class="key">D</span><span>$\ln(1+x)=\ln(3)+\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{(n+1)3^n}(x-2)^n$, $\ |x-2|&lt;3$.</span></li>
            <li><span class="key">E</span><span>$\ln(1+x)=\ln(3)+\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{3^n}(x-2)^n$, $\ |x-2|&lt;3$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — derivadas de $f$</span>
          $$f'(x)=\frac1{1+x},\quad f''(x)=-\frac{1}{(1+x)^2},\quad f'''(x)=\frac{2}{(1+x)^3},\quad f^{(4)}(x)=-\frac{3\cdot2}{(1+x)^4}.$$
          <p>Cada derivada multiplica pelo expoente com sinal trocado, então por indução $f^{(n)}(x)=\dfrac{(-1)^{n-1}(n-1)!}{(1+x)^n}$ para $n\ge1$.</p>
          <span class="step-label">Passo 2 — coeficientes de Taylor em $a=2$</span>
          $$\frac{f^{(n)}(2)}{n!}=\frac{(-1)^{n-1}(n-1)!}{n!\,3^n}=\frac{(-1)^{n-1}}{n\,3^n},\qquad f(2)=\ln3.$$
          <span class="step-label">Passo 3 — raio</span>
          <p>Teste da razão: $\left|\dfrac{u_{n+1}}{u_n}\right|=\dfrac{n}{n+1}\cdot\dfrac{|x-2|}{3}\to\dfrac{|x-2|}3$, logo $R=3$.</p>
          <span class="step-label">Passo 4 — por que a série é igual a $f$</span>
          <p>Escreva $1+x=3+(x-2)=3\left(1+\frac{x-2}3\right)$, então $\ln(1+x)=\ln3+\ln(1+u)$ com $u=\frac{x-2}3$. Integrando $\frac1{1+t}=\sum_{n\ge0}(-1)^nt^n$ ($|t|&lt;1$) de $0$ a $u$: $\ln(1+u)=\sum_{n\ge1}\frac{(-1)^{n-1}u^n}{n}$ para $|u|&lt;1$, isto é, $|x-2|&lt;3$. Substituindo $u$, obtém-se exatamente a série do passo 2.</p>
          <div class="final">Alternativa <b>C</b>.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 9', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as constantes $a_n$, $n\ge0$, $b_n$, $n\ge1$, tais que</p>
          $$\frac{a_0}2+\sum_{n=1}^{\infty}a_n\cos(nx)+b_n\operatorname{sen}(nx)=xe^x,\qquad x\in\,]-\pi,\pi[,$$
          <p>e as seguintes afirmações:</p>
          <p>I) A soma da série acima $S(x)$ para $x\in\mathbb R$, periódica de período $2\pi$, satisfaz $S(15\pi)=\dfrac{\pi(e^\pi-e^{-\pi})}{2}$.</p>
          <p>II) $a_n=0$ para todo $n\ge0$.</p>
          <p>III) $b_n=0$ para todo $n\ge1$.</p>
          <p>Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas as afirmações II e III são verdadeiras.</span></li>
            <li><span class="key">B</span><span>Apenas a afirmação II é verdadeira.</span></li>
            <li><span class="key">C</span><span>Apenas a afirmação I é verdadeira.</span></li>
            <li><span class="key">D</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">E</span><span>Apenas a afirmação III é verdadeira.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — afirmação I</span>
          <p>$15\pi=\pi+7\cdot2\pi$, então $S(15\pi)=S(\pi)$. Em $x=\pi$ a extensão emenda $f(\pi^-)=\pi e^{\pi}$ com $f(-\pi^+)=-\pi e^{-\pi}$ (diferentes), e $S$ vale a média:</p>
          $$S(15\pi)=\frac{\pi e^{\pi}+(-\pi e^{-\pi})}{2}=\frac{\pi(e^\pi-e^{-\pi})}{2}.$$
          <p><strong>I é verdadeira.</strong></p>
          <span class="step-label">Passo 2 — afirmação II (paridade)</span>
          <p>Se todos os $a_n$ fossem nulos, $S$ seria uma soma de senos, logo <em>ímpar</em>. Nos pontos de continuidade dentro de $]-\pi,\pi[$, $S=xe^x$; então teríamos $S(-1)=-S(1)$, isto é, $-e^{-1}=-e$ — falso. <strong>II é falsa.</strong> (De fato: $a_0=\frac1\pi\big[(x-1)e^x\big]_{-\pi}^{\pi}=\frac{(\pi-1)e^\pi+(\pi+1)e^{-\pi}}{\pi}&gt;0$.)</p>
          <span class="step-label">Passo 3 — afirmação III (paridade)</span>
          <p>Se todos os $b_n$ fossem nulos, $S$ seria <em>par</em> e teríamos $S(-1)=S(1)$, isto é, $-e^{-1}=e$ — falso. <strong>III é falsa.</strong></p>
          <div class="final">Alternativa <b>C</b>: apenas I.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 10', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a seguinte série de potências</p>
          $$S(x)=\sum_{n=1}^{\infty}\left(1+\frac1n\right)^{n^2}x^n.$$
          <p>Qual é o raio de convergência, $R$, desta série?</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$R=e$.</span></li>
            <li><span class="key">B</span><span>$R=\dfrac1e$.</span></li>
            <li><span class="key">C</span><span>$R=1$.</span></li>
            <li><span class="key">D</span><span>$R=\dfrac1{2e}$.</span></li>
            <li><span class="key">E</span><span>$R=\dfrac2e$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — teste da raiz</span>
          $$\sqrt[n]{\left|\left(1+\frac1n\right)^{n^2}x^n\right|}=\left(1+\frac1n\right)^{n}|x|\longrightarrow e\,|x|.$$
          <span class="step-label">Passo 2 — raio</span>
          <p>Converge se $e|x|&lt;1\iff|x|&lt;\frac1e$; diverge se $|x|&gt;\frac1e$.</p>
          <div class="note">Compare com a Q2 da P2 2025: lá o expoente era $2n^2$ e a potência $x^{4n}$, o que deu $e^2|x|^4&lt;1$ e $R=e^{-1/2}$.</div>
          <div class="final">Alternativa <b>B</b>: $R=\dfrac1e$.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 11', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes afirmações:</p>
          <p>I) Se $f(x)$ é uma função contínua e estritamente crescente em $[0,\pi]$, então a soma $S(x)$ de sua série de <strong>senos</strong> é contínua em todo $x\in\mathbb R$.</p>
          <p>II) Os números reais $c_1$ e $d_1$ que minimizam o valor da integral</p>
          $$\int_{-\pi}^{\pi}\big(x-c_1\cos x-d_1\operatorname{sen}x\big)^2dx$$
          <p>são $c_1=1$ e $d_1=1$.</p>
          <p>III) Se $f(x)$ é uma função contínua em $[0,\pi]$, então a soma $S(x)$ de sua série de <strong>cossenos</strong> é contínua em todo $x\in\mathbb R$.</p>
          <p>Sobre estas afirmações, podemos afirmar que são verdadeiras:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas I.</span></li>
            <li><span class="key">B</span><span>Apenas II.</span></li>
            <li><span class="key">C</span><span>Apenas III.</span></li>
            <li><span class="key">D</span><span>Apenas II e III.</span></li>
            <li><span class="key">E</span><span>Nenhuma.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — afirmação I (extensão ímpar)</span>
          <p>A série de senos converge para $0$ em $x=0$ e em $x=\pi$ (pontos onde a extensão ímpar troca de sinal). Para $S$ ser contínua ali, precisaríamos de $f(0)=0$ <em>e</em> $f(\pi)=0$. Mas $f$ é estritamente crescente: $f(0)&lt;f(\pi)$, então os dois não podem ser zero. Contraexemplo concreto: $f(x)=x$, cuja extensão ímpar salta de $\pi$ para $-\pi$ em $x=\pi$. <strong>I é falsa.</strong></p>
          <span class="step-label">Passo 2 — afirmação II (mínimos quadrados)</span>
          <p>Derivadas parciais nulas, usando $\int_{-\pi}^{\pi}\cos^2x=\int_{-\pi}^{\pi}\operatorname{sen}^2x=\pi$ e $\int_{-\pi}^{\pi}\cos x\operatorname{sen}x=0$:</p>
          $$\int_{-\pi}^{\pi}x\cos x\,dx=c_1\pi,\qquad\int_{-\pi}^{\pi}x\operatorname{sen}x\,dx=d_1\pi.$$
          <p>$x\cos x$ é ímpar, então $c_1=0$. $x\operatorname{sen}x$ é par:</p>
          $$\int_{-\pi}^{\pi}x\operatorname{sen}x\,dx=2\Big[-x\cos x+\operatorname{sen}x\Big]_0^{\pi}=2\big(-\pi\cos\pi\big)=2\pi\ \Longrightarrow\ d_1=2.$$
          <p>O mínimo é em $(c_1,d_1)=(0,2)$, não $(1,1)$. <strong>II é falsa.</strong></p>
          <span class="step-label">Passo 3 — afirmação III (extensão par)</span>
          <p>A extensão par $\tilde f(x)=f(|x|)$ é contínua em $0$ (os dois lados valem $f(0)$) e em $\pm\pi$ (os dois lados valem $f(\pi)$, pela periodicidade). Logo a extensão $2\pi$-periódica é contínua em $\mathbb R$, e a soma da série coincide com ela. <strong>III é verdadeira.</strong></p>
          <div class="note"><b>Rigor:</b> continuidade sozinha não garante convergência pontual da série de Fourier; a prova subentende as hipóteses do teorema de convergência do curso ($f$ de classe $C^1$ por partes). Com elas, a conclusão de III vale.</div>
          <div class="final">Alternativa <b>C</b>: apenas III.</div>
        `
      },

      {
        ref: 'P2 2024 · Questão 12', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f$ uma função tal que</p>
          $$f(x)=\begin{cases}e^{-x}, &amp; 0&lt;x&lt;1,\\ 1-x, &amp; 1&lt;x&lt;2.\end{cases}$$
          <p>Sendo $S(x)$ a função $4$-periódica que é a soma da série de <strong>senos</strong> de $f$, podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$S(x)=e^{x-4}$ para $3&lt;x&lt;4$ e $S(3)=-e$.</span></li>
            <li><span class="key">B</span><span>$S(x)=e^{x-4}$ para $3&lt;x&lt;4$ e $S(3)=-\dfrac e2$.</span></li>
            <li><span class="key">C</span><span>$S(x)=e^{x+4}$ para $3&lt;x&lt;4$ e $S(3)=-\dfrac{e^{-1}}2$.</span></li>
            <li><span class="key">D</span><span>$S(x)=-e^{x+4}$ para $3&lt;x&lt;4$ e $S(3)=-\dfrac{e^{-1}}2$.</span></li>
            <li><span class="key">E</span><span>$S(x)=-e^{x-4}$ para $3&lt;x&lt;4$ e $S(3)=-\dfrac{e^{-1}}2$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — a extensão</span>
          <p>Série de senos em $]0,2[$ $\Rightarrow$ extensão ímpar $\tilde f(x)=-f(-x)$ em $]-2,0[$, repetida com período $4$ ($L=2$).</p>
          <span class="step-label">Passo 2 — $S$ em $]3,4[$</span>
          <p>Para $3&lt;x&lt;4$: $x-4\in\,]-1,0[$, logo $S(x)=\tilde f(x-4)=-f(4-x)$, com $4-x\in\,]0,1[$, onde $f=e^{-(\cdot)}$:</p>
          $$S(x)=-e^{-(4-x)}=-e^{x-4}.$$
          <span class="step-label">Passo 3 — $S(3)$</span>
          <p>$3\equiv-1\pmod 4$, então $S(3)=S(-1)$. Por imparidade da extensão, os limites laterais em $-1$ são os de $1$ com sinal trocado. Em $x=1$:</p>
          $$f(1^-)=e^{-1},\qquad f(1^+)=1-1=0\ \Longrightarrow\ S(1)=\frac{e^{-1}+0}{2}=\frac{e^{-1}}2.$$
          $$S(3)=S(-1)=-S(1)=-\frac{e^{-1}}{2}.$$
          <div class="final">Alternativa <b>E</b>.</div>
        `
      }

    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p2-t12', number: '12',
    title: 'Prova P2 — 2023',
    subtitle: '— prova antiga resolvida (07/11/2023)',
    intro: String.raw`
      <p>Esta é a <strong>P2 aplicada em 07/11/2023</strong>, com as 12 questões transcritas e resolvidas passo a passo. O gabarito oficial anotado na capa (D-B-A-E-B-C-C-D-A-D-E-A) foi conferido questão por questão contra a resolução.</p>
      <p>Mapa rápido do que a prova cobrou: <strong>série de Fourier com período qualquer + soma numérica</strong> (Q1), <strong>teoria de séries de potências</strong> (Q2, Q8), <strong>raio via teste da raiz</strong> (Q3), <strong>derivadas na origem</strong> (Q4, Q6), <strong>série de uma integral</strong> (Q5), <strong>Parseval</strong> (Q7), <strong>mínimos quadrados em $[0,1]$</strong> (Q9), <strong>propriedades dos coeficientes</strong> (Q10), <strong>série de senos e pontos de salto</strong> (Q11) e <strong>limite via Taylor</strong> (Q12).</p>
      <p>Esta prova é a mais "teórica" das três: Q2, Q6, Q8 e Q10 são de verdadeiro/falso com afirmações gerais. Para cada afirmação, procure primeiro um <strong>contraexemplo simples</strong> ($\sum x^n/n$, $\sum x^n$, $f(x)=x$); se não achar, tente provar.</p>
    `,
    exercises: [

      {
        ref: 'P2 2023 · Questão 1', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a função: $g(x)=x-2$ se $x\in[0,2[$ e $g(x)=2-x$ se $x\in[2,4[$. A série de Fourier da extensão periódica de $g$ e o valor da soma da série $\displaystyle\sum_{n=0}^{\infty}\left(\frac1{2n+1}\right)^2$ são, respectivamente:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$-1+4\displaystyle\sum_{k=0}^{\infty}\frac{\operatorname{sen}\!\big((2k+1)\frac\pi2x\big)}{((2k+1)\pi)^2}$ e $\dfrac{\pi^2}8$.</span></li>
            <li><span class="key">B</span><span>$-2-8\displaystyle\sum_{k=0}^{\infty}\frac{\cos(k\pi x)}{(2k\pi)^2}$ e $\dfrac{\pi^2}6$.</span></li>
            <li><span class="key">C</span><span>$-8\displaystyle\sum_{k=0}^{\infty}\frac{\cos((2k+1)\pi x)}{((2k+1)\pi)^2}$ e $\dfrac{\pi^2}6$.</span></li>
            <li><span class="key">D</span><span>$-1-8\displaystyle\sum_{k=0}^{\infty}\frac{\cos\!\big((2k+1)\frac\pi2x\big)}{((2k+1)\pi)^2}$ e $\dfrac{\pi^2}8$.</span></li>
            <li><span class="key">E</span><span>$-\dfrac12-4\displaystyle\sum_{k=0}^{\infty}\frac{\cos\!\big((2k+1)\frac\pi2x\big)}{((2k+1)\pi)^2}$ e $\dfrac{\pi^2}4$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — período e paridade</span>
          <p>A extensão tem período $4=2L$, logo $L=2$. Para $x\in[-2,0[$, $x+4\in[2,4[$ e $g(x)=g(x+4)=2-(x+4)=-x-2$. Para $x\in[0,2[$, $g(x)=x-2$. Nos dois casos</p>
          $$g(x)=|x|-2,\qquad x\in[-2,2[,$$
          <p>uma função <strong>par</strong> e contínua (um "dente triangular" entre $-2$ e $0$). Logo $b_n=0$.</p>
          <span class="step-label">Passo 2 — $a_0$</span>
          $$a_0=\frac2L\int_0^L g(x)\,dx=\int_0^2(x-2)\,dx=\left[\frac{x^2}2-2x\right]_0^2=2-4=-2\quad\Longrightarrow\quad\frac{a_0}2=-1.$$
          <p>Isso já elimina B, C e E.</p>
          <span class="step-label">Passo 3 — $a_n$, $n\ge1$</span>
          $$a_n=\frac2L\int_0^L g(x)\cos\frac{n\pi x}{L}\,dx=\int_0^2(x-2)\cos\frac{n\pi x}2\,dx=\int_0^2x\cos\frac{n\pi x}2\,dx-2\int_0^2\cos\frac{n\pi x}2\,dx.$$
          <p>A segunda integral é $\left[\frac{2}{n\pi}\operatorname{sen}\frac{n\pi x}2\right]_0^2=\frac2{n\pi}\operatorname{sen}(n\pi)=0$. Na primeira, por partes ($u=x$, $v=\frac2{n\pi}\operatorname{sen}\frac{n\pi x}2$):</p>
          $$\int_0^2x\cos\frac{n\pi x}2\,dx=\left[\frac{2x}{n\pi}\operatorname{sen}\frac{n\pi x}2\right]_0^2-\frac2{n\pi}\int_0^2\operatorname{sen}\frac{n\pi x}2\,dx=0-\frac2{n\pi}\left[-\frac2{n\pi}\cos\frac{n\pi x}2\right]_0^2=\frac4{n^2\pi^2}\big(\cos n\pi-1\big).$$
          $$a_n=\frac{4\big((-1)^n-1\big)}{(n\pi)^2}=\begin{cases}0, &amp; n\text{ par},\\[2pt] -\dfrac{8}{(n\pi)^2}, &amp; n\text{ ímpar}.\end{cases}$$
          <span class="step-label">Passo 4 — a série</span>
          <p>Só sobram os ímpares $n=2k+1$, $k\ge0$:</p>
          $$g(x)=-1-8\sum_{k=0}^{\infty}\frac{\cos\!\big((2k+1)\frac{\pi}{2}x\big)}{((2k+1)\pi)^2}.$$
          <p>Como $g$ é contínua e $C^1$ por partes, a igualdade vale em todo $x$.</p>
          <span class="step-label">Passo 5 — a soma numérica: avaliar em $x=0$</span>
          <p>$g(0)=-2$ e $\cos0=1$:</p>
          $$-2=-1-\frac{8}{\pi^2}\sum_{k=0}^{\infty}\frac{1}{(2k+1)^2}\iff\sum_{k=0}^{\infty}\frac1{(2k+1)^2}=\frac{\pi^2}{8}.$$
          <div class="final">Alternativa <b>D</b>.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 2', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes afirmações:</p>
          <p>I) Podemos construir uma série de potências com intervalo máximo de convergência $]-2,\infty[$.</p>
          <p>II) Se $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ é uma série de potências com raio de convergência $R&gt;0$, então a série $\displaystyle\sum_{n=1}^{\infty}na_nx^{n-1}$ possui o mesmo intervalo máximo de convergência.</p>
          <p>III) Se a série $\displaystyle\sum_{n=0}^{\infty}a_n3^n$ converge, então o raio de convergência da série de potências $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ é estritamente maior que $3$.</p>
          <p>Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas (II) é verdadeira.</span></li>
            <li><span class="key">B</span><span>Todas são falsas.</span></li>
            <li><span class="key">C</span><span>Apenas (I) e (II) são verdadeiras.</span></li>
            <li><span class="key">D</span><span>Apenas (III) é verdadeira.</span></li>
            <li><span class="key">E</span><span>Apenas (II) e (III) são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — afirmação I</span>
          <p>Para $\sum a_n(x-x_0)^n$ com raio $R$, o conjunto de convergência fica entre $]x_0-R,x_0+R[$ e $[x_0-R,x_0+R]$. Se $R&lt;\infty$ ele é <strong>limitado</strong>; se $R=\infty$ ele é <strong>$\mathbb R$ inteiro</strong>. $]-2,\infty[$ é ilimitado mas não é $\mathbb R$. <strong>I é falsa.</strong></p>
          <span class="step-label">Passo 2 — afirmação II (contraexemplo)</span>
          <p>Derivar preserva o <em>raio</em>, mas não necessariamente os extremos. Tome $\sum_{n\ge1}\frac{x^n}{n}$ ($R=1$):</p>
          <p>• em $x=-1$: $\sum\frac{(-1)^n}{n}$ converge (Leibniz); em $x=1$: série harmônica, diverge. Intervalo: $[-1,1[$.<br>• derivada: $\sum_{n\ge1}x^{n-1}$; em $x=\pm1$ o termo geral tem módulo $1\not\to0$, diverge. Intervalo: $]-1,1[$.</p>
          <p>Intervalos diferentes. <strong>II é falsa.</strong></p>
          <span class="step-label">Passo 3 — afirmação III (contraexemplo)</span>
          <p>Convergir em $x=3$ só garante $R\ge3$. Tome $a_n=\dfrac{1}{n^2\,3^n}$ ($n\ge1$): $\sum a_n3^n=\sum\frac1{n^2}$ converge, mas</p>
          $$\left|\frac{a_{n+1}x^{n+1}}{a_nx^n}\right|=\frac{n^2}{(n+1)^2}\cdot\frac{|x|}3\to\frac{|x|}3\ \Longrightarrow\ R=3,$$
          <p>que não é estritamente maior que $3$. <strong>III é falsa.</strong></p>
          <div class="final">Alternativa <b>B</b>: todas são falsas.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 3', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $(p_n)_{n\in\mathbb N}$ a sequência de números naturais onde $p_n$ é o $n$-ésimo primo. Isto é, $p_1=2$, $p_2=3$, $p_3=5$, $p_4=7$ e assim por diante. Sabendo que $\displaystyle\lim_{n\to\infty}\frac{p_n}{n\ln n}=1$ (isso decorre do Teorema dos Números Primos), o raio de convergência $R$ da série de potências $\displaystyle\sum_{n=1}^{\infty}p_nx^n$ satisfaz:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$R=1$.</span></li>
            <li><span class="key">B</span><span>$R=0$.</span></li>
            <li><span class="key">C</span><span>$R=\infty$.</span></li>
            <li><span class="key">D</span><span>$0&lt;R&lt;1$.</span></li>
            <li><span class="key">E</span><span>$1&lt;R&lt;\infty$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — teste da raiz</span>
          <p>$\dfrac1R=\lim\sqrt[n]{p_n}$. Fatorando $p_n=\dfrac{p_n}{n\ln n}\cdot n\cdot\ln n$:</p>
          $$\sqrt[n]{p_n}=\left(\frac{p_n}{n\ln n}\right)^{1/n}\cdot n^{1/n}\cdot(\ln n)^{1/n}.$$
          <span class="step-label">Passo 2 — cada fator tende a $1$</span>
          <p>• Como $\frac{p_n}{n\ln n}\to1$, para $n$ grande ele fica em $[\tfrac12,2]$, e então $\left(\tfrac12\right)^{1/n}\le\left(\frac{p_n}{n\ln n}\right)^{1/n}\le2^{1/n}$; os dois extremos tendem a $1$ (confronto).<br>
          • $n^{1/n}=e^{\ln n/n}\to e^0=1$.<br>
          • Para $n\ge3$, $1\le\ln n\le n$, então $1\le(\ln n)^{1/n}\le n^{1/n}\to1$.</p>
          <span class="step-label">Passo 3 — conclusão</span>
          $$\lim\sqrt[n]{p_n}=1\cdot1\cdot1=1\ \Longrightarrow\ R=1.$$
          <div class="note"><b>Intuição:</b> qualquer coeficiente que cresce de forma <em>polinomial</em> (ou "quase", como $n\ln n$) dá raio $1$; só crescimento exponencial ($c^n$) ou fatorial muda o raio.</div>
          <div class="final">Alternativa <b>A</b>: $R=1$.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 4', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f(x)=x\operatorname{sen}(x^2)$. Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$f^{(2024)}(0)=\dfrac{2024!}{1012!}$ e $f^{(2025)}(0)=0$.</span></li>
            <li><span class="key">B</span><span>$f^{(2023)}(0)=-\dfrac{2023!}{1011!}$ e $f^{(2025)}(0)=-\dfrac{2025!}{1012!}$.</span></li>
            <li><span class="key">C</span><span>$f^{(2024)}(0)=0$ e $f^{(2025)}(0)=-\dfrac{2025!}{1012!}$.</span></li>
            <li><span class="key">D</span><span>$f^{(2023)}(0)=0$ e $f^{(2025)}(0)=-\dfrac{2025!}{1012!}$.</span></li>
            <li><span class="key">E</span><span>$f^{(2023)}(0)=-\dfrac{2023!}{1011!}$ e $f^{(2025)}(0)=0$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — série de $f$</span>
          $$x\operatorname{sen}(x^2)=x\sum_{n=0}^{\infty}\frac{(-1)^n(x^2)^{2n+1}}{(2n+1)!}=\sum_{n=0}^{\infty}\frac{(-1)^n x^{4n+3}}{(2n+1)!},\qquad x\in\mathbb R.$$
          <p>Só aparecem expoentes $4n+3$: $3,7,11,\dots$ (os que deixam resto $3$ na divisão por $4$).</p>
          <span class="step-label">Passo 2 — $k=2023$</span>
          <p>$2023=4\cdot505+3$, então $n=505$ e $2n+1=1011$. O coeficiente de $x^{2023}$ é $\dfrac{(-1)^{505}}{1011!}=-\dfrac1{1011!}$, logo</p>
          $$f^{(2023)}(0)=2023!\cdot\left(-\frac1{1011!}\right)=-\frac{2023!}{1011!}.$$
          <span class="step-label">Passo 3 — $k=2024$ e $k=2025$</span>
          <p>$2024=4\cdot506$ (resto $0$) e $2025=4\cdot506+1$ (resto $1$): nenhum é da forma $4n+3$. Os coeficientes são nulos, então $f^{(2024)}(0)=f^{(2025)}(0)=0$.</p>
          <div class="final">Alternativa <b>E</b>.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 5', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>A série de potências da função $f(y)=\displaystyle\int_1^y\frac{\operatorname{arctg}\big[(x-1)^2\big]}{1-x}\,dx$ e o intervalo máximo de convergência desta série de potências são, respectivamente:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\dfrac12\displaystyle\sum_{n=0}^{\infty}(-1)^{n+1}\frac{(1-y)^{2n+1}}{2n+1}$ e $[0,2]$.</span></li>
            <li><span class="key">B</span><span>$\dfrac12\displaystyle\sum_{n=0}^{\infty}(-1)^{n+1}\left(\frac{(1-y)^{2n+1}}{2n+1}\right)^2$ e $[0,2]$.</span></li>
            <li><span class="key">C</span><span>$\displaystyle\sum_{n=0}^{\infty}(-1)^{n}\left(\frac{(y-1)^{2n+1}}{2n+1}\right)^2$ e $]0,2]$.</span></li>
            <li><span class="key">D</span><span>$\displaystyle\sum_{n=0}^{\infty}(-1)^{n+1}\left(\frac{y^{2n}}{2n}\right)^2$ e $[-1,1]$.</span></li>
            <li><span class="key">E</span><span>$\dfrac12\displaystyle\sum_{n=0}^{\infty}(-1)^{n+1}\left(\frac{(y-1)^{2n+1}}{2n+1}\right)^2$ e $[-1,1]$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — série do arco-tangente</span>
          <p>Integrando $\dfrac1{1+s^2}=\sum_{n\ge0}(-1)^ns^{2n}$ ($|s|&lt;1$) de $0$ a $t$:</p>
          $$\operatorname{arctg}t=\sum_{n=0}^{\infty}\frac{(-1)^nt^{2n+1}}{2n+1},\qquad|t|\le1.$$
          <span class="step-label">Passo 2 — substituir $t=(x-1)^2$</span>
          $$\operatorname{arctg}\big[(x-1)^2\big]=\sum_{n=0}^{\infty}\frac{(-1)^n(x-1)^{4n+2}}{2n+1},\qquad|x-1|\le1.$$
          <span class="step-label">Passo 3 — dividir por $1-x=-(x-1)$</span>
          $$\frac{\operatorname{arctg}\big[(x-1)^2\big]}{1-x}=-\sum_{n=0}^{\infty}\frac{(-1)^n(x-1)^{4n+1}}{2n+1}=\sum_{n=0}^{\infty}\frac{(-1)^{n+1}(x-1)^{4n+1}}{2n+1}.$$
          <p>(Em $x=1$ o integrando se estende continuamente com valor $0$, que é o valor da série.)</p>
          <span class="step-label">Passo 4 — integrar de $1$ a $y$ termo a termo</span>
          $$f(y)=\sum_{n=0}^{\infty}\frac{(-1)^{n+1}}{2n+1}\left[\frac{(x-1)^{4n+2}}{4n+2}\right]_1^y=\sum_{n=0}^{\infty}\frac{(-1)^{n+1}(y-1)^{4n+2}}{(2n+1)\cdot2(2n+1)}=\frac12\sum_{n=0}^{\infty}(-1)^{n+1}\left(\frac{(y-1)^{2n+1}}{2n+1}\right)^2.$$
          <p>Como $(y-1)^{4n+2}=(1-y)^{4n+2}$ (expoente par), isto é a mesma expressão de B com $(1-y)$ no lugar de $(y-1)$.</p>
          <span class="step-label">Passo 5 — intervalo</span>
          <p>Teste da razão: $\left|\dfrac{u_{n+1}}{u_n}\right|=\dfrac{(2n+1)^2}{(2n+3)^2}|y-1|^4\to|y-1|^4$, logo converge para $|y-1|&lt;1$ e diverge para $|y-1|&gt;1$. Nos extremos $y=0$ e $y=2$, $|y-1|=1$ e os termos têm módulo $\dfrac1{2(2n+1)^2}$: convergência absoluta (compare com $\sum\frac1{n^2}$). Intervalo: $[0,2]$, centrado em $1$ (o que elimina D e E).</p>
          <div class="final">Alternativa <b>B</b>.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 6', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Sejam $k\in\mathbb N$, $k\ge2$ e $f:\mathbb R\to\mathbb R$ dada por $f(x)=\exp(x^k)$. Considere as seguintes afirmações:</p>
          <p>I) $f$ tem derivadas de todas as ordens no zero, sua série de Taylor centrada no zero tem raio de convergência infinito e $f$ é a soma da referida série.</p>
          <p>II) Se $p$ for primo e $p\ne k$, então $f^{(p)}(0)=0$.</p>
          <p>III) $f$ tem derivadas de todas as ordens no zero e a sequência de números reais $\{f^{(n)}(0)\}_{n\in\mathbb N}$ é limitada.</p>
          <p>Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">B</span><span>Apenas a afirmação II é verdadeira.</span></li>
            <li><span class="key">C</span><span>Apenas as afirmações I e II são verdadeiras.</span></li>
            <li><span class="key">D</span><span>Apenas as afirmações II e III são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Todas as afirmações são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — afirmação I</span>
          <p>Substituindo $t=x^k$ em $e^t=\sum\frac{t^n}{n!}$ (válida em todo $\mathbb R$):</p>
          $$e^{x^k}=\sum_{n=0}^{\infty}\frac{x^{kn}}{n!},\qquad x\in\mathbb R.$$
          <p>É uma série de potências que converge para todo $x$ (raio infinito) e soma $f$. Uma série de potências é infinitamente derivável dentro do raio e, pela unicidade, é a série de Taylor de $f$. <strong>I é verdadeira.</strong></p>
          <span class="step-label">Passo 2 — afirmação II</span>
          <p>Os únicos expoentes presentes são múltiplos de $k$. Logo $f^{(p)}(0)\ne0$ exige $k\mid p$. Como $p$ é primo, seus divisores são $1$ e $p$; com $k\ge2$, $k\mid p$ obriga $k=p$. Então, se $p\ne k$, o coeficiente de $x^p$ é $0$ e $f^{(p)}(0)=0$. <strong>II é verdadeira.</strong></p>
          <span class="step-label">Passo 3 — afirmação III</span>
          <p>Para $m=kn$: $f^{(kn)}(0)=(kn)!\cdot\dfrac1{n!}=(n+1)(n+2)\cdots(kn)$. Como $k\ge2$, esse produto tem ao menos o fator $kn\ge2n$, então $f^{(kn)}(0)\ge2n\to\infty$. A sequência é ilimitada. <strong>III é falsa.</strong></p>
          <div class="final">Alternativa <b>C</b>: apenas I e II.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 7', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>A série de Fourier da função $t(x)=2\pi|\cos(x)|$, para $x\in[-3\pi,-\pi[$ é dada por</p>
          $$4+8\sum_{k=0}^{\infty}\frac{\cos((2k+2)x)}{4k^2+8k+3}.$$
          <p>Com isso, podemos determinar o valor de $\displaystyle\sum_{k=1}^{\infty}\frac1{(2k-1)^2(2k+1)^2}$, que é:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\dfrac{\pi^2}8+\dfrac12$.</span></li>
            <li><span class="key">B</span><span>$\dfrac{\pi^2}6$.</span></li>
            <li><span class="key">C</span><span>$\dfrac{\pi^2}{16}-\dfrac12$.</span></li>
            <li><span class="key">D</span><span>$\dfrac{\pi^2}{16}-\dfrac14$.</span></li>
            <li><span class="key">E</span><span>$\dfrac{\pi^2}6-\dfrac12$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — Parseval num intervalo de comprimento $2\pi$</span>
          <p>$[-3\pi,-\pi[$ tem comprimento $2\pi$ ($L=\pi$), e Parseval vale integrando sobre qualquer período:</p>
          $$\frac1\pi\int_{-3\pi}^{-\pi}t(x)^2dx=\frac{a_0^2}{2}+\sum_{n=1}^{\infty}(a_n^2+b_n^2).$$
          <span class="step-label">Passo 2 — lado esquerdo</span>
          <p>$\cos^2x$ tem período $\pi$, então sua integral sobre qualquer intervalo de comprimento $2\pi$ é $\pi$:</p>
          $$\frac1\pi\int_{-3\pi}^{-\pi}4\pi^2\cos^2x\,dx=\frac{4\pi^2}{\pi}\int_{-3\pi}^{-\pi}\frac{1+\cos2x}2\,dx=4\pi\left[\frac x2+\frac{\operatorname{sen}2x}4\right]_{-3\pi}^{-\pi}=4\pi\cdot\pi=4\pi^2.$$
          <span class="step-label">Passo 3 — lado direito</span>
          <p>$\frac{a_0}2=4\Rightarrow a_0=8\Rightarrow\frac{a_0^2}2=32$. As frequências $2k+2$ são distintas, cada coeficiente tem módulo $\frac{8}{4k^2+8k+3}$, e $4k^2+8k+3=(2k+1)(2k+3)$:</p>
          $$\sum(a_n^2+b_n^2)=64\sum_{k=0}^{\infty}\frac{1}{(2k+1)^2(2k+3)^2}.$$
          <span class="step-label">Passo 4 — reindexar e isolar</span>
          <p>Com $j=k+1$: $(2k+1)(2k+3)=(2j-1)(2j+1)$ e $j$ começa em $1$. Então</p>
          $$4\pi^2=32+64\sum_{j=1}^{\infty}\frac1{(2j-1)^2(2j+1)^2}\iff\sum_{j=1}^{\infty}\frac1{(2j-1)^2(2j+1)^2}=\frac{4\pi^2-32}{64}=\frac{\pi^2}{16}-\frac12.$$
          <p>Conferência: $\tfrac19+\tfrac1{225}+\tfrac1{1225}+\tfrac1{3969}\approx0{,}1166$ e $\tfrac{\pi^2}{16}-\tfrac12\approx0{,}1169$. ✔</p>
          <div class="note"><b>Sobre o enunciado:</b> a série correta de $2\pi|\cos x|$ tem um sinal alternado, $4+8\sum_{k\ge0}\frac{(-1)^k\cos((2k+2)x)}{4k^2+8k+3}$ (em $x=0$ ela dá $2\pi$, enquanto a versão sem $(-1)^k$ dá $8$). Para Parseval isso não importa: os coeficientes entram ao quadrado.</div>
          <div class="final">Alternativa <b>C</b>: $\dfrac{\pi^2}{16}-\dfrac12$.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 8', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Sejam $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ uma série de potências, $R&gt;0$ o raio de convergência da série e $S$ a função dada pela soma da série no seu intervalo de convergência. Considere as seguintes afirmações:</p>
          <p>I) Se $r&gt;0$ é tal que a sequência numérica $(|a_n|r^n)_{n\in\mathbb N}$ é limitada, então $r\le R$.</p>
          <p>II) Se $a\in\mathbb R$ for um extremo do intervalo de convergência e a série for convergente em $a$, então a série converge absolutamente em $a$.</p>
          <p>III) A série de potências $\displaystyle\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}$ tem raio de convergência $R$.</p>
          <p>São verdadeiras, apenas:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>III</span></li>
            <li><span class="key">B</span><span>Todas.</span></li>
            <li><span class="key">C</span><span>II e III.</span></li>
            <li><span class="key">D</span><span>I e III.</span></li>
            <li><span class="key">E</span><span>I.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — afirmação I</span>
          <p>Seja $|a_n|r^n\le M$ para todo $n$. Para $|x|&lt;r$:</p>
          $$|a_nx^n|=|a_n|r^n\left(\frac{|x|}{r}\right)^n\le M\left(\frac{|x|}{r}\right)^n,$$
          <p>e $\sum M\left(\frac{|x|}r\right)^n$ é geométrica de razão $&lt;1$. Pela comparação, $\sum a_nx^n$ converge (absolutamente) em todo $|x|&lt;r$. Então nenhum ponto com $|x|&lt;r$ está na região de divergência $|x|&gt;R$, o que força $r\le R$. <strong>I é verdadeira.</strong></p>
          <span class="step-label">Passo 2 — afirmação II (contraexemplo)</span>
          <p>$\sum_{n\ge1}\frac{x^n}n$ tem $R=1$ e converge em $a=-1$ (série harmônica alternada, por Leibniz), mas $\sum\left|\frac{(-1)^n}{n}\right|=\sum\frac1n$ diverge: convergência só condicional. <strong>II é falsa.</strong></p>
          <span class="step-label">Passo 3 — afirmação III</span>
          <p>$\sqrt[n]{\tfrac{1}{n+1}}\to1$, então $\limsup\sqrt[n]{\left|\tfrac{a_n}{n+1}\right|}=\limsup\sqrt[n]{|a_n|}=\tfrac1R$; e o fator extra $x$ não altera a convergência para $x\ne0$. Integrar termo a termo preserva o raio. <strong>III é verdadeira.</strong></p>
          <div class="final">Alternativa <b>D</b>: I e III.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 9', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a função $f$ com domínio $[0,1]$ dada por $f(x)=x$ se $x\in[0,\frac12]$, e $f(x)=1$ se $x\in\,]\frac12,1]$. Sejam $A$ e $B$ tais que a integral $\displaystyle\int_0^1\big(f(x)-A+B\cos(\pi x)\big)^2dx$ assuma seu valor mínimo. Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$A=\dfrac58$ e $B=\dfrac{\pi+2}{\pi^2}$.</span></li>
            <li><span class="key">B</span><span>$A=-\dfrac98$ e $B=\dfrac{2\pi-1}{\pi^2}$.</span></li>
            <li><span class="key">C</span><span>$A=\dfrac58$ e $B=\dfrac{\pi+1}{\pi^2}$.</span></li>
            <li><span class="key">D</span><span>$A=\dfrac54$ e $B=\dfrac{2}{\pi^2}$.</span></li>
            <li><span class="key">E</span><span>$A=-\dfrac54$ e $B=\dfrac{1-2\pi}{\pi^2}$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 0 — atenção ao sinal</span>
          <p>O integrando é $\big(f(x)-(A-B\cos\pi x)\big)^2$: aproximamos $f$ por $A-B\cos(\pi x)$. O $B$ entra com sinal trocado.</p>
          <span class="step-label">Passo 1 — derivadas parciais nulas</span>
          <p>Usando $\int_0^1\cos(\pi x)\,dx=\left[\frac{\operatorname{sen}\pi x}{\pi}\right]_0^1=0$ e $\int_0^1\cos^2(\pi x)\,dx=\frac12$:</p>
          $$\frac{\partial}{\partial A}=0:\ \int_0^1\big(f-A+B\cos\pi x\big)dx=0\iff A=\int_0^1f(x)\,dx,$$
          $$\frac{\partial}{\partial B}=0:\ \int_0^1\big(f-A+B\cos\pi x\big)\cos\pi x\,dx=0\iff\int_0^1f(x)\cos\pi x\,dx+\frac B2=0\iff B=-2\int_0^1f(x)\cos\pi x\,dx.$$
          <span class="step-label">Passo 2 — $A$</span>
          $$A=\int_0^{1/2}x\,dx+\int_{1/2}^{1}1\,dx=\frac18+\frac12=\frac58.$$
          <span class="step-label">Passo 3 — $\int_0^1f\cos\pi x$</span>
          <p>Primeira parte, por partes ($u=x$, $v=\frac{\operatorname{sen}\pi x}{\pi}$):</p>
          $$\int_0^{1/2}x\cos\pi x\,dx=\left[\frac{x\operatorname{sen}\pi x}{\pi}+\frac{\cos\pi x}{\pi^2}\right]_0^{1/2}=\left(\frac{1}{2\pi}+0\right)-\left(0+\frac1{\pi^2}\right)=\frac1{2\pi}-\frac1{\pi^2}.$$
          <p>Segunda parte:</p>
          $$\int_{1/2}^{1}\cos\pi x\,dx=\left[\frac{\operatorname{sen}\pi x}{\pi}\right]_{1/2}^{1}=0-\frac1\pi=-\frac1\pi.$$
          <p>Soma: $\dfrac1{2\pi}-\dfrac1{\pi^2}-\dfrac1\pi=-\dfrac1{2\pi}-\dfrac1{\pi^2}$.</p>
          <span class="step-label">Passo 4 — $B$</span>
          $$B=-2\left(-\frac1{2\pi}-\frac1{\pi^2}\right)=\frac1\pi+\frac2{\pi^2}=\frac{\pi+2}{\pi^2}.$$
          <div class="final">Alternativa <b>A</b>: $A=\dfrac58$ e $B=\dfrac{\pi+2}{\pi^2}$.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 10', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f:\,]-\pi,\pi]\to\mathbb R$ uma função de classe $C^1$ por partes, cuja série de Fourier é dada por $\dfrac{a_0}2+\displaystyle\sum_{n=1}^{\infty}(a_n\cos nx+b_n\operatorname{sen}nx)$. Considere as seguintes afirmações:</p>
          <p>I) As sequências $(a_n)_{n\in\mathbb N}$ e $(b_n)_{n\in\mathbb N}$ são ambas convergentes para zero.</p>
          <p>II) Sendo $\tilde f$ a extensão $2\pi$-periódica de $f$ em $\mathbb R$, fixado $\alpha\in\mathbb R$ considere $g:\,]-\pi,\pi]\to\mathbb R$ a função definida por $g(x)=\tilde f(x+\alpha)$ com série de Fourier $\dfrac{A_0}2+\displaystyle\sum_{n=1}^{\infty}(A_n\cos nx+B_n\operatorname{sen}nx)$. Então, $A_0=a_0$ e $\displaystyle\sum_{n=1}^{\infty}\left(A_n^2+B_n^2\right)=\sum_{n=1}^{\infty}\left(a_n^2+b_n^2\right)$.</p>
          <p>III) Sendo $A_n$ e $B_n$ como no item (II), vale que $A_n^2+B_n^2=a_n^2+b_n^2$ para todo $n\ge1$.</p>
          <p>São verdadeiras:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas I e II.</span></li>
            <li><span class="key">B</span><span>Apenas II e III.</span></li>
            <li><span class="key">C</span><span>Apenas I e III.</span></li>
            <li><span class="key">D</span><span>Todas.</span></li>
            <li><span class="key">E</span><span>Apenas I.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — afirmação I</span>
          <p>$f$ é $C^1$ por partes, logo limitada e de quadrado integrável. A desigualdade de Bessel (ou Parseval) dá</p>
          $$\frac{a_0^2}2+\sum_{n=1}^{\infty}(a_n^2+b_n^2)\le\frac1\pi\int_{-\pi}^{\pi}f(x)^2dx&lt;\infty.$$
          <p>Uma série convergente tem termo geral tendendo a zero: $a_n^2+b_n^2\to0$, logo $a_n\to0$ e $b_n\to0$ (lema de Riemann–Lebesgue). <strong>I é verdadeira.</strong></p>
          <span class="step-label">Passo 2 — calcular $A_n$ e $B_n$ (base de II e III)</span>
          <p>A integral de uma função $2\pi$-periódica sobre qualquer intervalo de comprimento $2\pi$ é a mesma. Com $u=x+\alpha$:</p>
          $$A_n=\frac1\pi\int_{-\pi}^{\pi}\tilde f(x+\alpha)\cos nx\,dx=\frac1\pi\int_{-\pi+\alpha}^{\pi+\alpha}\tilde f(u)\cos\big(n(u-\alpha)\big)du=\frac1\pi\int_{-\pi}^{\pi}\tilde f(u)\big(\cos nu\cos n\alpha+\operatorname{sen}nu\operatorname{sen}n\alpha\big)du,$$
          $$A_n=a_n\cos n\alpha+b_n\operatorname{sen}n\alpha.$$
          <p>Do mesmo jeito, com $\operatorname{sen}(n(u-\alpha))=\operatorname{sen}nu\cos n\alpha-\cos nu\operatorname{sen}n\alpha$:</p>
          $$B_n=b_n\cos n\alpha-a_n\operatorname{sen}n\alpha.$$
          <p>Para $n=0$: $A_0=a_0\cos0=a_0$.</p>
          <span class="step-label">Passo 3 — afirmação III</span>
          $$A_n^2+B_n^2=a_n^2\cos^2n\alpha+2a_nb_n\cos n\alpha\operatorname{sen}n\alpha+b_n^2\operatorname{sen}^2n\alpha+b_n^2\cos^2n\alpha-2a_nb_n\cos n\alpha\operatorname{sen}n\alpha+a_n^2\operatorname{sen}^2n\alpha=a_n^2+b_n^2.$$
          <p>Os termos cruzados cancelam e $\cos^2+\operatorname{sen}^2=1$. <strong>III é verdadeira.</strong> (Geometricamente: transladar $f$ gira o vetor $(a_n,b_n)$ de um ângulo $n\alpha$, sem mudar seu comprimento.)</p>
          <span class="step-label">Passo 4 — afirmação II</span>
          <p>$A_0=a_0$ (passo 2) e, somando a igualdade do passo 3 em $n\ge1$, $\sum(A_n^2+B_n^2)=\sum(a_n^2+b_n^2)$. <strong>II é verdadeira.</strong></p>
          <div class="final">Alternativa <b>D</b>: todas.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 11', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Sejam $f:[0,2]\to\mathbb R$ dada por $f(x)=(x-1)^2$ e $S:\mathbb R\to\mathbb R$ a soma da série de <strong>senos</strong> de $f$. Considere as seguintes afirmações:</p>
          <p>I) $S(x)=0$ se, e somente se, $x\in\mathbb Z$.</p>
          <p>II) $S\!\left(\dfrac{1993}4\right)=-\dfrac9{16}$.</p>
          <p>III) $S\!\left(\dfrac{1993}4\right)=\dfrac9{16}$.</p>
          <p>São verdadeiras:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas III.</span></li>
            <li><span class="key">B</span><span>Apenas I e III.</span></li>
            <li><span class="key">C</span><span>Apenas II.</span></li>
            <li><span class="key">D</span><span>Apenas I.</span></li>
            <li><span class="key">E</span><span>Apenas I e II.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — a extensão</span>
          <p>Série de senos em $[0,2]$ $\Rightarrow$ extensão ímpar com período $4$ ($L=2$): $\tilde f(x)=(x-1)^2$ em $]0,2[$ e $\tilde f(x)=-f(-x)=-(x+1)^2$ em $]-2,0[$.</p>
          <span class="step-label">Passo 2 — onde há salto</span>
          <p>$f(0)=1$ e $f(2)=1$, ambos não nulos. Em $x=0$: limites laterais $1$ e $-1$; em $x=2$: $f(2^-)=1$ e $\tilde f(2^+)=\tilde f(-2^+)=-(-2+1)^2=-1$. Nos dois casos a média é $0$, e o mesmo vale em todo inteiro par (período $4$). Nos demais pontos $\tilde f$ é contínua e $S=\tilde f$.</p>
          <span class="step-label">Passo 3 — afirmação I</span>
          <p>Em $]0,2[$: $(x-1)^2=0\iff x=1$. Em $]-2,0[$: $-(x+1)^2=0\iff x=-1$. Junto com $S(0)=S(\pm2)=0$, os zeros em $[-2,2]$ são exatamente $\{-2,-1,0,1,2\}$, e pela periodicidade $4$ os zeros em $\mathbb R$ são exatamente os inteiros. <strong>I é verdadeira.</strong></p>
          <span class="step-label">Passo 4 — reduzir $\frac{1993}4$</span>
          <p>$\frac{1993}{4}=498{,}25=4\cdot124+2{,}25$, então $S\!\left(\frac{1993}4\right)=S(2{,}25)=S(2{,}25-4)=S(-1{,}75)$.</p>
          <span class="step-label">Passo 5 — avaliar</span>
          <p>$-1{,}75\in\,]-2,0[$, ponto de continuidade:</p>
          $$S(-1{,}75)=-f(1{,}75)=-(1{,}75-1)^2=-\left(\frac34\right)^2=-\frac9{16}.$$
          <p><strong>II é verdadeira, III é falsa.</strong></p>
          <div class="final">Alternativa <b>E</b>: apenas I e II.</div>
        `
      },

      {
        ref: 'P2 2023 · Questão 12', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $f(x)=\ln(1+x^2)-\left(x^2-\dfrac{x^4}2+\dfrac{x^6}3\right)$. Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\displaystyle\lim_{x\to0}\frac{f(x)}{x^8}=-\frac14$.</span></li>
            <li><span class="key">B</span><span>$\displaystyle\lim_{x\to0}\frac{f(x)}{x^4}=-\frac14$.</span></li>
            <li><span class="key">C</span><span>$\displaystyle\lim_{x\to0}\frac{f(x)}{x^4}=\frac18$.</span></li>
            <li><span class="key">D</span><span>$\displaystyle\lim_{x\to0}\frac{f(x)}{x^8}=0$.</span></li>
            <li><span class="key">E</span><span>$\displaystyle\lim_{x\to0}\frac{f(x)}{x^8}=-\frac18$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — série de $\ln(1+t)$</span>
          <p>Integrando $\frac1{1+s}=\sum_{n\ge0}(-1)^ns^n$ de $0$ a $t$:</p>
          $$\ln(1+t)=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}t^n}{n}=t-\frac{t^2}2+\frac{t^3}3-\frac{t^4}4+\cdots,\qquad|t|&lt;1.$$
          <span class="step-label">Passo 2 — $t=x^2$ e subtrair</span>
          $$\ln(1+x^2)=x^2-\frac{x^4}2+\frac{x^6}3-\frac{x^8}4+\frac{x^{10}}5-\cdots\quad(|x|&lt;1),$$
          $$f(x)=-\frac{x^8}4+\frac{x^{10}}5-\frac{x^{12}}{6}+\cdots$$
          <span class="step-label">Passo 3 — limite</span>
          $$\frac{f(x)}{x^8}=-\frac14+\frac{x^2}5-\frac{x^4}6+\cdots\xrightarrow[x\to0]{}-\frac14,$$
          <p>pois a série de potências à direita é contínua em $0$. (E $\frac{f(x)}{x^4}=x^4\cdot\frac{f(x)}{x^8}\to0$, o que elimina B e C.)</p>
          <div class="final">Alternativa <b>A</b>: $\displaystyle\lim_{x\to0}\frac{f(x)}{x^8}=-\frac14$.</div>
        `
      }

    ]
  }

  ]
};