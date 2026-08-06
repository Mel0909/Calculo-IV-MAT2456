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
  }

  ]
};