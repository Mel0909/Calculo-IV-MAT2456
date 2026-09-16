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
          <p>Decida se cada sequência abaixo converge ou diverge; se convergir, calcule o limite. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$0,\ \tfrac12,\ \tfrac23,\ \tfrac34,\ \tfrac45,\dots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — achar a fórmula do termo geral</span>
              <p>Numerador e denominador diferem sempre de $1$: $\tfrac01,\tfrac12,\tfrac23,\tfrac34,\dots$ Logo $a_n=\dfrac{n-1}{n}$, com $n\ge1$.</p>
              <span class="step-label">Passo 2 — separar a fração</span>
              <p>$$a_n=\frac{n-1}{n}=\frac{n}{n}-\frac1n=1-\frac1n.$$</p>
              <span class="step-label">Passo 3 — tomar o limite</span>
              <p>Como $\tfrac1n\to0$, a propriedade da soma dá $a_n\to1-0$.</p>
              <div class="final">Converge para $1$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$1,\ \tfrac12,\ 1,\ \tfrac14,\ 1,\ \tfrac18,\dots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — separar em duas subsequências</span>
              <p>Os termos de posição ímpar são todos iguais a $1$: $a_{2k-1}=1$. Os de posição par formam a progressão geométrica $a_{2k}=\dfrac1{2^k}$.</p>
              <span class="step-label">Passo 2 — limite de cada uma</span>
              <p>$$a_{2k-1}\to1,\qquad a_{2k}=2^{-k}\to0.$$</p>
              <span class="step-label">Passo 3 — critério da divergência</span>
              <p>Se $(a_n)$ convergisse para $L$, <em>toda</em> subsequência convergiria para o mesmo $L$. Aqui obtivemos $1\ne0$.</p>
              <div class="final">Diverge (por oscilação entre $1$ e $0$).</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\tfrac12,\ -\tfrac12,\ \tfrac14,\ -\tfrac34,\ \tfrac18,\ -\tfrac78,\dots$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar os dois padrões</span>
              <p>Posições ímpares: $\tfrac12,\tfrac14,\tfrac18,\dots$, ou seja $a_{2k-1}=\dfrac1{2^k}$. Posições pares: $-\tfrac12,-\tfrac34,-\tfrac78,\dots$, ou seja $a_{2k}=-\dfrac{2^k-1}{2^k}=-\left(1-\dfrac1{2^k}\right)$.</p>
              <span class="step-label">Passo 2 — limites das subsequências</span>
              <p>$$a_{2k-1}=2^{-k}\to0,\qquad a_{2k}=-(1-2^{-k})\to-1.$$</p>
              <span class="step-label">Passo 3 — conclusão</span>
              <p>Duas subsequências com limites distintos ($0$ e $-1$) impedem a convergência.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$a_n=\left(4+\tfrac1n\right)^{1/2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — limite de dentro da raiz</span>
              <p>$$4+\frac1n\longrightarrow 4+0=4.$$</p>
              <span class="step-label">Passo 2 — usar continuidade</span>
              <p>A função $x\mapsto\sqrt x$ é contínua em $x=4$. Se $x_n\to x_0$ e $f$ é contínua em $x_0$, então $f(x_n)\to f(x_0)$. Logo $a_n=\sqrt{4+\tfrac1n}\to\sqrt4$.</p>
              <div class="final">Converge para $2$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$c_k=\dfrac{\sqrt{k+1}}{k-1},\ k\ge2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — comparar as ordens de grandeza</span>
              <p>O numerador cresce como $k^{1/2}$ e o denominador como $k^1$. Espera-se $c_k\sim k^{-1/2}\to0$; vamos formalizar.</p>
              <span class="step-label">Passo 2 — dividir por $k$ em cima e embaixo</span>
              <p>$$c_k=\frac{\sqrt{k+1}}{k-1}=\frac{\sqrt{k}\sqrt{1+\tfrac1k}}{k\left(1-\tfrac1k\right)}=\frac{1}{\sqrt k}\cdot\frac{\sqrt{1+\tfrac1k}}{1-\tfrac1k}.$$</p>
              <span class="step-label">Passo 3 — limite do produto</span>
              <p>O segundo fator tende a $\dfrac{\sqrt1}{1}=1$ e o primeiro, $\tfrac1{\sqrt k}$, tende a $0$.</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$a_n=\dfrac{n^3+3n+1}{4n^3+2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — dividir tudo pela maior potência</span>
              <p>A maior potência presente é $n^3$. Dividindo numerador e denominador por $n^3$:</p>
              $$a_n=\frac{1+\dfrac{3}{n^2}+\dfrac1{n^3}}{4+\dfrac{2}{n^3}}.$$
              <span class="step-label">Passo 2 — cada parcela isoladamente</span>
              <p>$\dfrac3{n^2}\to0$, $\dfrac1{n^3}\to0$ e $\dfrac2{n^3}\to0$.</p>
              <span class="step-label">Passo 3 — quociente de limites</span>
              <p>O denominador tende a $4\ne0$, então vale a regra do quociente: $a_n\to\dfrac{1+0+0}{4+0}$.</p>
              <div class="final">Converge para $\tfrac14$.</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$a_n=\sqrt{n+1}-\sqrt n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a indeterminação</span>
              <p>É do tipo $\infty-\infty$; não dá para separar os limites.</p>
              <span class="step-label">Passo 2 — racionalizar (multiplicar pelo conjugado)</span>
              $$a_n=\left(\sqrt{n+1}-\sqrt n\right)\cdot\frac{\sqrt{n+1}+\sqrt n}{\sqrt{n+1}+\sqrt n}=\frac{(n+1)-n}{\sqrt{n+1}+\sqrt n}=\frac{1}{\sqrt{n+1}+\sqrt n}.$$
              <span class="step-label">Passo 3 — limite</span>
              <p>O denominador tende a $+\infty$, logo a fração tende a $0$. (Confronto explícito: $0&lt;a_n\le\tfrac1{2\sqrt n}\to0$.)</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '8',
            statement: String.raw`$a_n=\dfrac{n+(-1)^n}{n-(-1)^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — dividir por $n$</span>
              $$a_n=\frac{1+\dfrac{(-1)^n}{n}}{1-\dfrac{(-1)^n}{n}}.$$
              <span class="step-label">Passo 2 — tratar o termo oscilante</span>
              <p>$\left|\dfrac{(-1)^n}{n}\right|=\dfrac1n\to0$, então $\dfrac{(-1)^n}{n}\to0$ pelo Teorema do Confronto (limitado $\times$ infinitésimo).</p>
              <span class="step-label">Passo 3 — quociente</span>
              <p>$a_n\to\dfrac{1+0}{1-0}$. Observe que o denominador tende a $1\ne0$, o que legitima a passagem.</p>
              <div class="final">Converge para $1$.</div>
            `
          },
          {
            label: '9',
            statement: String.raw`$a_n=\dfrac{2n}{n+1}-\dfrac{n+1}{2n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — tratar cada parcela</span>
              <p>Ambas convergem, então podemos usar a propriedade da diferença.</p>
              $$\frac{2n}{n+1}=\frac{2}{1+\tfrac1n}\longrightarrow 2,\qquad \frac{n+1}{2n}=\frac12+\frac1{2n}\longrightarrow\frac12.$$
              <span class="step-label">Passo 2 — subtrair os limites</span>
              <p>$$a_n\longrightarrow 2-\frac12=\frac32.$$</p>
              <div class="final">Converge para $\tfrac32$.</div>
            `
          },
          {
            label: '10',
            statement: String.raw`$a_n=n\left(\sqrt{n^2+1}-n\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — indeterminação $\infty\cdot0$</span>
              <p>O parêntese tende a $0$ e o fator externo a $\infty$: precisamos racionalizar.</p>
              <span class="step-label">Passo 2 — conjugado</span>
              $$\sqrt{n^2+1}-n=\frac{(n^2+1)-n^2}{\sqrt{n^2+1}+n}=\frac{1}{\sqrt{n^2+1}+n}.$$
              <span class="step-label">Passo 3 — multiplicar por $n$ e dividir por $n$</span>
              $$a_n=\frac{n}{\sqrt{n^2+1}+n}=\frac{1}{\sqrt{1+\tfrac1{n^2}}+1}\longrightarrow\frac{1}{1+1}.$$
              <div class="final">Converge para $\tfrac12$.</div>
            `
          },
          {
            label: '11',
            statement: String.raw`$a_n=\dfrac{\sin n}{n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — limitar o numerador</span>
              <p>Para todo $n$, $-1\le\sin n\le1$.</p>
              <span class="step-label">Passo 2 — montar o confronto</span>
              <p>Dividindo por $n&gt;0$:</p>
              $$-\frac1n\le\frac{\sin n}{n}\le\frac1n.$$
              <span class="step-label">Passo 3 — aplicar o Teorema do Confronto</span>
              <p>As duas cotas tendem a $0$, logo $a_n\to0$. (Regra geral: <em>limitada $\times$ infinitésimo $=$ infinitésimo</em>.)</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '12',
            statement: String.raw`$a_n=\sin n;\quad b_n=\sin(n\pi);\quad c_n=\sin\!\left(\dfrac{n\pi}{2}\right)$`,
            resolution: String.raw`
              <span class="step-label">$b_n$ — o caso fácil</span>
              <p>$\sin(n\pi)=0$ para todo $n\in\mathbb N$, pois $n\pi$ é múltiplo inteiro de $\pi$. A sequência é constante igual a $0$.</p>
              <span class="step-label">$c_n$ — periódica de período 4</span>
              <p>Os valores ciclam $1,0,-1,0,1,0,-1,0,\dots$ Subsequência $c_{4k+1}\equiv1$ e $c_{4k+3}\equiv-1$: limites distintos.</p>
              <span class="step-label">$a_n$ — argumento com identidade trigonométrica</span>
              <p>Suponha, por absurdo, $\sin n\to L$. De $\sin(n+1)+\sin(n-1)=2\sin n\cos 1$, passando ao limite: $2L=2L\cos1$, e como $\cos1\ne1$, segue $L=0$. Fazendo o mesmo com $\cos(n+1)+\cos(n-1)=2\cos n\cos1$ obtém-se $\cos n\to0$. Mas então $\sin^2n+\cos^2n\to0$, contradizendo $\sin^2n+\cos^2n=1$.</p>
              <div class="final">$b_n$ converge para $0$; $a_n$ e $c_n$ divergem.</div>
            `
          },
          {
            label: '13',
            statement: String.raw`$a_n=\dfrac{2n+\sin n}{5n+1}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — dividir por $n$</span>
              $$a_n=\frac{2+\dfrac{\sin n}{n}}{5+\dfrac1n}.$$
              <span class="step-label">Passo 2 — o termo oscilante some</span>
              <p>Pelo item 11, $\dfrac{\sin n}{n}\to0$. O $\sin n$ é irrelevante frente a $2n$.</p>
              <span class="step-label">Passo 3 — quociente</span>
              <p>$a_n\to\dfrac{2+0}{5+0}$.</p>
              <div class="final">Converge para $\tfrac25$.</div>
            `
          },
          {
            label: '14',
            statement: String.raw`$a_n=\dfrac{(n+3)!-n!}{(n+4)!}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escrever tudo em função de $n!$</span>
              <p>$(n+3)!=n!\,(n+1)(n+2)(n+3)$ e $(n+4)!=n!\,(n+1)(n+2)(n+3)(n+4)$.</p>
              <span class="step-label">Passo 2 — cancelar $n!$</span>
              $$a_n=\frac{n!\big[(n+1)(n+2)(n+3)-1\big]}{n!\,(n+1)(n+2)(n+3)(n+4)}=\frac{(n+1)(n+2)(n+3)-1}{(n+1)(n+2)(n+3)(n+4)}.$$
              <span class="step-label">Passo 3 — comparar graus</span>
              <p>Numerador de grau $3$, denominador de grau $4$. Simplificando ainda mais:</p>
              $$a_n=\frac{1}{n+4}-\frac{1}{(n+1)(n+2)(n+3)(n+4)}\longrightarrow 0-0.$$
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '15',
            statement: String.raw`$a_n=\sqrt[n]{n^2+n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — limitar a expressão de dentro</span>
              <p>Para $n\ge1$: $n^2\le n^2+n\le 2n^2$.</p>
              <span class="step-label">Passo 2 — extrair a raiz $n$-ésima (função crescente)</span>
              $$\left(n^{2}\right)^{1/n}\le a_n\le\left(2n^{2}\right)^{1/n}=2^{1/n}\left(n^{1/n}\right)^{2}.$$
              <span class="step-label">Passo 3 — usar os limites notáveis</span>
              <p>Como $\sqrt[n]{n}\to1$ e $\sqrt[n]{2}\to1$, ambas as cotas tendem a $1^2=1$.</p>
              <div class="final">Converge para $1$.</div>
            `
          },
          {
            label: '16',
            statement: String.raw`$a_n=\dfrac{n\sin(n!)}{n^2+1}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — isolar a parte limitada</span>
              <p>$|\sin(n!)|\le1$, seja qual for o valor de $n!$.</p>
              <span class="step-label">Passo 2 — cotar o módulo</span>
              $$|a_n|=\frac{n\,|\sin(n!)|}{n^2+1}\le\frac{n}{n^2+1}\le\frac{n}{n^2}=\frac1n.$$
              <span class="step-label">Passo 3 — confronto</span>
              <p>De $0\le|a_n|\le\tfrac1n\to0$ segue $|a_n|\to0$, portanto $a_n\to0$.</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '17',
            statement: String.raw`$a_n=\dfrac{3^n}{2^n+10^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar a base dominante</span>
              <p>Entre $2^n$, $3^n$ e $10^n$, a maior é $10^n$. Dividimos tudo por ela.</p>
              <span class="step-label">Passo 2 — dividir por $10^n$</span>
              $$a_n=\frac{(3/10)^n}{(2/10)^n+1}=\frac{(0{,}3)^n}{(0{,}2)^n+1}.$$
              <span class="step-label">Passo 3 — geométricas de razão $&lt;1$</span>
              <p>$(0{,}3)^n\to0$ e $(0{,}2)^n\to0$, logo $a_n\to\dfrac{0}{0+1}$.</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '18',
            statement: String.raw`$a_n=\left(\dfrac{n+2}{n+1}\right)^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — forçar a forma $\left(1+\tfrac1m\right)^m$</span>
              <p>$\dfrac{n+2}{n+1}=1+\dfrac{1}{n+1}$, então $a_n=\left(1+\dfrac1{n+1}\right)^n$.</p>
              <span class="step-label">Passo 2 — ajustar o expoente</span>
              $$a_n=\left[\left(1+\frac1{n+1}\right)^{n+1}\right]^{\frac{n}{n+1}}.$$
              <span class="step-label">Passo 3 — limites</span>
              <p>A base entre colchetes tende a $e$ e o expoente $\tfrac{n}{n+1}$ tende a $1$. Como $x\mapsto x^{y}$ é contínua aí, $a_n\to e^1$.</p>
              <div class="final">Converge para $e$.</div>
            `
          },
          {
            label: '19',
            statement: String.raw`$a_n=\dfrac{(n+1)^n}{n^{n+1}}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — separar uma potência de $n$</span>
              <p>Escreva $n^{n+1}=n^n\cdot n$:</p>
              $$a_n=\frac{(n+1)^n}{n^n\cdot n}=\frac1n\left(\frac{n+1}{n}\right)^n=\frac1n\left(1+\frac1n\right)^n.$$
              <span class="step-label">Passo 2 — reconhecer os dois fatores</span>
              <p>$\left(1+\tfrac1n\right)^n\to e$ (portanto é uma sequência limitada) e $\tfrac1n\to0$.</p>
              <span class="step-label">Passo 3 — produto</span>
              <p>$a_n\to 0\cdot e=0$.</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '20',
            statement: String.raw`$a_n=n\,a^n,\ a\in\mathbb R$`,
            resolution: String.raw`
              <span class="step-label">Caso 1 — $|a|&lt;1$</span>
              <p>Aplique o teste da razão a $|a_n|$:</p>
              $$\frac{|a_{n+1}|}{|a_n|}=\frac{(n+1)|a|^{n+1}}{n|a|^{n}}=\frac{n+1}{n}\,|a|\longrightarrow|a|&lt;1,$$
              <p>logo $|a_n|\to0$ e portanto $a_n\to0$. (Inclui $a=0$, trivialmente.)</p>
              <span class="step-label">Caso 2 — $a=1$</span>
              <p>$a_n=n\to+\infty$: diverge.</p>
              <span class="step-label">Caso 3 — $a=-1$</span>
              <p>$a_n=(-1)^n n$ oscila com módulo $\to\infty$: diverge.</p>
              <span class="step-label">Caso 4 — $|a|&gt;1$</span>
              <p>$|a_n|=n|a|^n\to+\infty$ (exponencial domina): diverge.</p>
              <div class="final">Converge para $0$ se $|a|&lt;1$; diverge se $|a|\ge1$.</div>
            `
          },
          {
            label: '21',
            statement: String.raw`$a_n=\dfrac{n!}{n^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escrever como produto de frações</span>
              $$a_n=\frac{1\cdot2\cdot3\cdots n}{n\cdot n\cdot n\cdots n}=\frac1n\cdot\frac2n\cdot\frac3n\cdots\frac nn.$$
              <span class="step-label">Passo 2 — cotar</span>
              <p>Cada fator a partir do segundo satisfaz $\dfrac kn\le1$. Logo</p>
              $$0&lt;a_n\le\frac1n\cdot 1\cdot 1\cdots 1=\frac1n.$$
              <span class="step-label">Passo 3 — confronto</span>
              <p>$0&lt;a_n\le\tfrac1n\to0$.</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '22',
            statement: String.raw`$a_n=n-n^2\sin\dfrac1n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — indeterminação $\infty-\infty$</span>
              <p>Ambas as parcelas explodem; precisamos do comportamento fino de $\sin(1/n)$.</p>
              <span class="step-label">Passo 2 — série de Taylor com $x=\tfrac1n\to0$</span>
              $$\sin x=x-\frac{x^3}{6}+O(x^5)\ \Longrightarrow\ \sin\frac1n=\frac1n-\frac{1}{6n^3}+O\!\left(\frac1{n^5}\right).$$
              <span class="step-label">Passo 3 — multiplicar por $n^2$ e subtrair</span>
              $$n^2\sin\frac1n=n-\frac{1}{6n}+O\!\left(\frac1{n^3}\right)\ \Longrightarrow\ a_n=\frac{1}{6n}+O\!\left(\frac1{n^3}\right).$$
              <span class="step-label">Passo 4 — limite</span>
              <p>O termo dominante $\tfrac1{6n}$ tende a $0$.</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '23',
            statement: String.raw`$a_n=(-1)^n+\dfrac{(-1)^n}{n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — fatorar o sinal</span>
              $$a_n=(-1)^n\left(1+\frac1n\right).$$
              <span class="step-label">Passo 2 — subsequências</span>
              <p>$n$ par: $a_n=1+\tfrac1n\to1$. &nbsp; $n$ ímpar: $a_n=-\left(1+\tfrac1n\right)\to-1$.</p>
              <span class="step-label">Passo 3 — conclusão</span>
              <p>Limites distintos ao longo de duas subsequências.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '24',
            statement: String.raw`$a_n=\sqrt[n]{a^n+b^n},\ 0&lt;a&lt;b$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — cotar por baixo e por cima</span>
              <p>Como $0&lt;a&lt;b$: $\ b^n\le a^n+b^n\le 2b^n$.</p>
              <span class="step-label">Passo 2 — extrair a raiz</span>
              $$b\le a_n\le b\cdot\sqrt[n]{2}.$$
              <span class="step-label">Passo 3 — confronto</span>
              <p>$\sqrt[n]{2}\to1$, então a cota superior tende a $b$ e a inferior é constante $=b$.</p>
              <p><em>Alternativa:</em> fatore $b^n$: $a_n=b\left(1+(a/b)^n\right)^{1/n}$, com $(a/b)^n\to0$.</p>
              <div class="final">Converge para $b=\max\{a,b\}$.</div>
            `
          },
          {
            label: '25',
            statement: String.raw`$a_n=\left(1-\tfrac12\right)\left(1-\tfrac13\right)\cdots\left(1-\tfrac1n\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — simplificar cada fator</span>
              <p>$1-\dfrac1k=\dfrac{k-1}{k}$, logo</p>
              $$a_n=\prod_{k=2}^{n}\frac{k-1}{k}=\frac12\cdot\frac23\cdot\frac34\cdots\frac{n-1}{n}.$$
              <span class="step-label">Passo 2 — telescopar</span>
              <p>O numerador de cada fator cancela com o denominador do anterior; sobram o primeiro numerador ($1$) e o último denominador ($n$):</p>
              $$a_n=\frac1n.$$
              <span class="step-label">Passo 3 — limite</span>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '26',
            statement: String.raw`$a_n=\left(1-\tfrac1{2^2}\right)\left(1-\tfrac1{3^2}\right)\cdots\left(1-\tfrac1{n^2}\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — diferença de quadrados</span>
              $$1-\frac1{k^2}=\frac{k^2-1}{k^2}=\frac{(k-1)(k+1)}{k\cdot k}.$$
              <span class="step-label">Passo 2 — separar em dois produtos telescópicos</span>
              $$a_n=\left(\prod_{k=2}^{n}\frac{k-1}{k}\right)\left(\prod_{k=2}^{n}\frac{k+1}{k}\right)=\frac1n\cdot\frac{n+1}{2}.$$
              <p>(O primeiro é o item 25; o segundo telescopa deixando $\tfrac{n+1}{2}$.)</p>
              <span class="step-label">Passo 3 — limite</span>
              $$a_n=\frac{n+1}{2n}=\frac12+\frac1{2n}\longrightarrow\frac12.$$
              <div class="final">Converge para $\tfrac12$.</div>
            `
          },
          {
            label: '27',
            statement: String.raw`$a_n=\dfrac1n\cdot\dfrac{1\cdot3\cdot5\cdots(2n-1)}{2\cdot4\cdot6\cdots(2n)}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — chamar o produto de $P_n$</span>
              $$P_n=\prod_{k=1}^{n}\frac{2k-1}{2k},\qquad a_n=\frac{P_n}{n}.$$
              <span class="step-label">Passo 2 — mostrar que $0&lt;P_n\le\tfrac12$</span>
              <p>Cada fator $\dfrac{2k-1}{2k}\in(0,1)$, e o primeiro deles vale $\tfrac12$. Logo $0&lt;P_n\le\tfrac12$ para todo $n\ge1$: $(P_n)$ é limitada.</p>
              <span class="step-label">Passo 3 — confronto</span>
              $$0&lt;a_n=\frac{P_n}{n}\le\frac{1}{2n}\longrightarrow0.$$
              <p>(De fato $P_n\sim\tfrac1{\sqrt{\pi n}}$ pela fórmula de Wallis, mas a limitação simples já basta.)</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '28',
            statement: String.raw`$a_n=\sqrt[n]{n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — passar ao logaritmo</span>
              <p>Como $a_n&gt;0$, estude $\ln a_n=\dfrac{\ln n}{n}$.</p>
              <span class="step-label">Passo 2 — limite do logaritmo</span>
              <p>Pela regra de L'Hôpital na versão contínua $\dfrac{\ln x}{x}$: $\dfrac{1/x}{1}\to0$. Logo $\ln a_n\to0$.</p>
              <span class="step-label">Passo 3 — voltar pela exponencial</span>
              <p>$a_n=e^{\ln a_n}\to e^0=1$ pela continuidade de $\exp$.</p>
              <div class="final">Converge para $1$ — limite notável $\sqrt[n]{n}\to1$.</div>
            `
          },
          {
            label: '29',
            statement: String.raw`$a_n=\dfrac{n^\alpha}{e^n},\ \alpha\in\mathbb R$`,
            resolution: String.raw`
              <span class="step-label">Caso trivial — $\alpha\le0$</span>
              <p>Então $n^\alpha\le1$ e $0&lt;a_n\le e^{-n}\to0$.</p>
              <span class="step-label">Passo 1 ($\alpha&gt;0$) — logaritmo</span>
              $$\ln a_n=\alpha\ln n-n=n\left(\alpha\,\frac{\ln n}{n}-1\right).$$
              <span class="step-label">Passo 2 — analisar o parêntese</span>
              <p>Pelo item 28, $\dfrac{\ln n}{n}\to0$, então o parêntese tende a $-1$, enquanto $n\to+\infty$.</p>
              <span class="step-label">Passo 3 — conclusão</span>
              <p>$\ln a_n\to-\infty$, logo $a_n=e^{\ln a_n}\to0$: a exponencial domina qualquer potência.</p>
              <div class="final">Converge para $0$, para todo $\alpha\in\mathbb R$.</div>
            `
          },
          {
            label: '30',
            statement: String.raw`$a_n=\dfrac{\ln n}{n^a},\ a&gt;0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — versão contínua</span>
              <p>Basta estudar $f(x)=\dfrac{\ln x}{x^a}$ quando $x\to+\infty$ (indeterminação $\tfrac\infty\infty$).</p>
              <span class="step-label">Passo 2 — L'Hôpital</span>
              $$\lim_{x\to\infty}\frac{\ln x}{x^{a}}=\lim_{x\to\infty}\frac{1/x}{a\,x^{a-1}}=\lim_{x\to\infty}\frac{1}{a\,x^{a}}=0,$$
              <p>pois $a&gt;0$ garante $x^a\to+\infty$.</p>
              <span class="step-label">Passo 3 — transferir para a sequência</span>
              <p>Se $f(x)\to L$ com $x\to\infty$, então $f(n)\to L$.</p>
              <div class="final">Converge para $0$ — o logaritmo cresce mais devagar que qualquer potência positiva.</div>
            `
          },
          {
            label: '31',
            statement: String.raw`$a_n=\sqrt[n]{n!}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — cotar $n!$ por baixo</span>
              <p>Dos $n$ fatores de $n!$, pelo menos os $\lceil n/2\rceil$ últimos são $\ge\dfrac n2$. Logo</p>
              $$n!\ \ge\ \left(\frac n2\right)^{n/2}.$$
              <span class="step-label">Passo 2 — extrair a raiz $n$-ésima</span>
              $$a_n=\sqrt[n]{n!}\ \ge\ \left(\frac n2\right)^{1/2}=\sqrt{\frac n2}.$$
              <span class="step-label">Passo 3 — conclusão</span>
              <p>$\sqrt{n/2}\to+\infty$, então $a_n\to+\infty$. (Stirling refina: $\sqrt[n]{n!}\sim n/e$.)</p>
              <div class="final">Diverge (para $+\infty$).</div>
            `
          },
          {
            label: '32',
            statement: String.raw`$a_n=\sqrt[n]{a},\ a&gt;0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — logaritmo</span>
              $$\ln a_n=\frac{\ln a}{n}.$$
              <span class="step-label">Passo 2 — limite</span>
              <p>$\ln a$ é uma constante fixa, então $\dfrac{\ln a}{n}\to0$ qualquer que seja $a&gt;0$.</p>
              <span class="step-label">Passo 3 — exponenciar</span>
              <p>$a_n=e^{(\ln a)/n}\to e^0=1$.</p>
              <div class="final">Converge para $1$ — limite notável $\sqrt[n]{a}\to1$.</div>
            `
          },
          {
            label: '33',
            statement: String.raw`$a_n=\left(\dfrac{n-1}{n}\right)^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a forma</span>
              <p>$\dfrac{n-1}{n}=1-\dfrac1n$, então $a_n=\left(1+\dfrac{-1}{n}\right)^n$: é exatamente $\left(1+\tfrac cn\right)^n$ com $c=-1$.</p>
              <span class="step-label">Passo 2 — aplicar o limite notável</span>
              <p>$\left(1+\tfrac cn\right)^n\to e^{c}$. Verificando pelo logaritmo: $\ln a_n=n\ln\!\left(1-\tfrac1n\right)\sim n\cdot\left(-\tfrac1n\right)=-1$.</p>
              <div class="final">Converge para $e^{-1}=\tfrac1e$.</div>
            `
          },
          {
            label: '34',
            statement: String.raw`$a_n=\left(\dfrac{n+1}{n}\right)^{n^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — logaritmo</span>
              $$\ln a_n=n^2\ln\!\left(1+\frac1n\right).$$
              <span class="step-label">Passo 2 — cotar o logaritmo por baixo</span>
              <p>Para $x&gt;0$ vale $\ln(1+x)\ge x-\dfrac{x^2}{2}$. Com $x=\tfrac1n$:</p>
              $$\ln a_n\ \ge\ n^2\left(\frac1n-\frac1{2n^2}\right)=n-\frac12.$$
              <span class="step-label">Passo 3 — conclusão</span>
              <p>$n-\tfrac12\to+\infty$, logo $\ln a_n\to+\infty$ e $a_n=e^{\ln a_n}\to+\infty$.</p>
              <div class="final">Diverge (para $+\infty$).</div>
            `
          },
          {
            label: '35',
            statement: String.raw`$a_n=\left(\dfrac{n+1}{n}\right)^{\sqrt n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — logaritmo</span>
              $$\ln a_n=\sqrt n\,\ln\!\left(1+\frac1n\right).$$
              <span class="step-label">Passo 2 — estimar $\ln(1+1/n)$</span>
              <p>Como $\ln(1+x)\le x$ para $x&gt;0$: $\ 0&lt;\ln a_n\le\dfrac{\sqrt n}{n}=\dfrac1{\sqrt n}$.</p>
              <span class="step-label">Passo 3 — confronto e exponencial</span>
              <p>$\dfrac1{\sqrt n}\to0$, então $\ln a_n\to0$ e $a_n\to e^0=1$.</p>
              <div class="final">Converge para $1$.</div>
            `
          },
          {
            label: '36',
            statement: String.raw`$a_n=\left(\dfrac{3n+5}{5n+11}\right)^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — limite da base</span>
              $$\frac{3n+5}{5n+11}=\frac{3+\tfrac5n}{5+\tfrac{11}{n}}\longrightarrow\frac35=0{,}6&lt;1.$$
              <span class="step-label">Passo 2 — fixar uma cota $&lt;1$</span>
              <p>Como a base tende a $0{,}6$, existe $N$ tal que para $n\ge N$ a base é menor que $q=0{,}7&lt;1$.</p>
              <span class="step-label">Passo 3 — comparar com uma geométrica</span>
              <p>Para $n\ge N$: $\ 0&lt;a_n&lt;q^{\,n}\to0$ (geométrica de razão $&lt;1$). Confronto.</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '37',
            statement: String.raw`$a_n=\left(\dfrac{3n+5}{5n+1}\right)^n\left(\dfrac53\right)^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — juntar tudo numa potência só</span>
              $$a_n=\left(\frac53\cdot\frac{3n+5}{5n+1}\right)^{n}=\left(\frac{15n+25}{15n+3}\right)^{n}.$$
              <span class="step-label">Passo 2 — escrever como $1+\text{algo pequeno}$</span>
              $$\frac{15n+25}{15n+3}=1+\frac{22}{15n+3}\ \Longrightarrow\ a_n=\left(1+\frac{22}{15n+3}\right)^{n}.$$
              <span class="step-label">Passo 3 — logaritmo</span>
              <p>Usando $\ln(1+x)=x+O(x^2)$ com $x=\dfrac{22}{15n+3}\to0$:</p>
              $$\ln a_n=n\ln\!\left(1+\frac{22}{15n+3}\right)=\frac{22n}{15n+3}+O\!\left(\frac1n\right)\longrightarrow\frac{22}{15}.$$
              <span class="step-label">Passo 4 — exponenciar</span>
              <span class="step-label">Observação — não zere os termos antes do expoente</span>
              <p>Zerar $\tfrac5n$ e $\tfrac1n$ de cara dá base $\tfrac35\cdot\tfrac53=1$ e o limite $1$ — errado. Esses pedacinhos são minúsculos, mas estão dentro de um parêntese elevado a $n$: acumulados $n$ vezes, eles viram justamente o $e$. Daí a receita de reescrever a base como $1+\text{algo}$ e deixar o expoente agir.</p>
              <div class="final">Converge para $e^{22/15}$.</div>
            `
          },
          {
            label: '38',
            statement: String.raw`$a_n=\left(1+\dfrac1{n^2}\right)^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — cuidado com a forma</span>
              <p>Não é $\left(1+\tfrac1n\right)^n$: o expoente ($n$) é muito menor que o "tamanho" do denominador ($n^2$). Vá pelo logaritmo.</p>
              <span class="step-label">Passo 2 — logaritmo e cota</span>
              <p>Como $0&lt;\ln(1+x)\le x$ para $x&gt;0$, com $x=\tfrac1{n^2}$:</p>
              $$0&lt;\ln a_n=n\ln\!\left(1+\frac1{n^2}\right)\le\frac{n}{n^2}=\frac1n.$$
              <span class="step-label">Passo 3 — confronto e exponencial</span>
              <p>$\ln a_n\to0$, logo $a_n\to e^0=1$.</p>
              <div class="final">Converge para $1$.</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 1 · Item IV', examStyle: true,
        statement: String.raw`
          <p>Sejam $(a_n)_{n\in\mathbb N}$ e $(b_n)_{n\in\mathbb N}$ sequências. Decida se cada afirmação é verdadeira ou falsa, justificando (com prova ou contraexemplo). Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`Se $a_n\to a$ então $|a_n|\to|a|$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — desigualdade triangular reversa</span>
              <p>Para quaisquer reais $x,y$: $\big||x|-|y|\big|\le|x-y|$.</p>
              <span class="step-label">Passo 2 — aplicar com $x=a_n$, $y=a$</span>
              <p>$$\big||a_n|-|a|\big|\le|a_n-a|.$$</p>
              <span class="step-label">Passo 3 — tomar o limite</span>
              <p>Como $a_n\to a$, o lado direito tende a $0$; pelo Teorema do Confronto, o lado esquerdo também tende a $0$.</p>
              <div class="final">Verdadeira: $a_n\to a\ \Rightarrow\ |a_n|\to|a|$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`Se $|a_n|\to|a|$ então $a_n\to a$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — testar um contraexemplo</span>
              <p>Considere $a_n=(-1)^n$.</p>
              <span class="step-label">Passo 2 — verificar a hipótese</span>
              <p>$|a_n|=1$ para todo $n$, logo $|a_n|\to1$. Tomando $a=1$, a hipótese "$|a_n|\to|a|$" está satisfeita.</p>
              <span class="step-label">Passo 3 — verificar a tese</span>
              <p>Porém $a_n=(-1)^n$ oscila entre $1$ e $-1$: as subsequências de índice par e ímpar têm limites distintos ($1$ e $-1$), logo $(a_n)$ não converge — em particular não converge para $1$.</p>
              <div class="final">Falsa: contraexemplo $a_n=(-1)^n$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`Se $a_n\to a$ e $a_n\le0$ então $a\le0$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — supor o contrário</span>
              <p>Suponha, por absurdo, que $a&gt;0$.</p>
              <span class="step-label">Passo 2 — usar a definição de limite com $\varepsilon=a/2$</span>
              <p>Como $a_n\to a$ e $\varepsilon=a/2&gt;0$, existe $N$ tal que $n\ge N\Rightarrow|a_n-a|&lt;a/2$, em particular $a_n&gt;a-a/2=a/2&gt;0$.</p>
              <span class="step-label">Passo 3 — contradição</span>
              <p>Isso contradiz a hipótese $a_n\le0$ para todo $n$.</p>
              <div class="final">Verdadeira: $a\le0$.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`Se $a_n\to a$ e $a_n&gt;0$ então $a&gt;0$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — contraexemplo</span>
              <p>Considere $a_n=\dfrac1n&gt;0$ para todo $n\in\mathbb N$.</p>
              <span class="step-label">Passo 2 — limite</span>
              <p>$a_n=\dfrac1n\to0=a$.</p>
              <span class="step-label">Passo 3 — comparar com a tese</span>
              <p>Aqui $a=0$, que não satisfaz $a&gt;0$: a hipótese estrita nos termos não força limite estrito.</p>
              <div class="final">Falsa: contraexemplo $a_n=1/n$, com $a=0$.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`Se $a_n\to a$ e $(b_n)$ não converge então $(a_n+b_n)$ não converge.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — supor por absurdo que $(a_n+b_n)$ converge</span>
              <p>Suponha $a_n+b_n\to L$ para algum $L\in\mathbb R$.</p>
              <span class="step-label">Passo 2 — isolar $b_n$</span>
              <p>$$b_n=(a_n+b_n)-a_n.$$ Como $(a_n+b_n)$ e $(a_n)$ convergem (para $L$ e $a$, respectivamente), a diferença de sequências convergentes converge, para $L-a$.</p>
              <span class="step-label">Passo 3 — contradição</span>
              <p>Isso contradiz a hipótese de que $(b_n)$ não converge.</p>
              <div class="final">Verdadeira: $(a_n+b_n)$ não converge.</div>
            `
          },
          {
            label: '6',
            statement: String.raw`Se $(a_n)$ e $(b_n)$ não convergem então $(a_n+b_n)$ não converge.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — contraexemplo</span>
              <p>Considere $a_n=(-1)^n$ e $b_n=-(-1)^n$.</p>
              <span class="step-label">Passo 2 — verificar que ambas divergem</span>
              <p>Cada uma oscila entre $1$ e $-1$ (subsequências pares e ímpares com limites distintos): nenhuma converge.</p>
              <span class="step-label">Passo 3 — somar</span>
              <p>$$a_n+b_n=(-1)^n-(-1)^n=0\quad\text{para todo }n,$$ sequência constante, que converge trivialmente para $0$.</p>
              <div class="final">Falsa: o contraexemplo do Passo 1 mostra $(a_n+b_n)\equiv0$, que converge.</div>
            `
          },
          {
            label: '7',
            statement: String.raw`Se $a_n\cdot b_n\to d$ então $(a_n)$ e $(b_n)$ convergem.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — contraexemplo</span>
              <p>Considere $a_n=n$ e $b_n=\dfrac1n$.</p>
              <span class="step-label">Passo 2 — o produto converge</span>
              <p>$a_nb_n=n\cdot\dfrac1n=1$ para todo $n$, logo $a_nb_n\to1=d$.</p>
              <span class="step-label">Passo 3 — mas um dos fatores diverge</span>
              <p>$(a_n)=(n)$ diverge (tende a $+\infty$), embora $(b_n)=(1/n)$ convirja.</p>
              <div class="final">Falsa: contraexemplo $a_n=n,\ b_n=1/n$; o produto converge sem que $(a_n)$ convirja.</div>
            `
          },
          {
            label: '8',
            statement: String.raw`Se $a_n\cdot b_n\to0$ então $a_n\to0$ ou $b_n\to0$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — contraexemplo</span>
              <p>Considere as sequências alternadas $a_n=1,0,1,0,\dots$ e $b_n=0,1,0,1,\dots$ (isto é, $a_n=1$ se $n$ é ímpar e $0$ se $n$ é par, e $b_n$ o complemento).</p>
              <span class="step-label">Passo 2 — o produto é identicamente nulo</span>
              <p>Em cada posição, um dos dois fatores é $0$, logo $a_nb_n=0$ para todo $n$, e portanto $a_nb_n\to0$.</p>
              <span class="step-label">Passo 3 — nenhuma das duas converge</span>
              <p>Tanto $(a_n)$ quanto $(b_n)$ oscilam entre $0$ e $1$ (subsequências com limites distintos $0$ e $1$): nenhuma converge, muito menos para $0$.</p>
              <div class="final">Falsa: no contraexemplo do Passo 1 o produto tende a $0$ sem que $a_n\to0$ ou $b_n\to0$.</div>
            `
          }
        ]
      },
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
          <p>Para cada $n\in\mathbb N$, seja $a_n=\left(1+\dfrac1n\right)^n$. Vamos provar, em cinco passos encadeados, que $(a_n)$ é crescente e limitada, logo convergente (o limite é o número $e$). Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`Mostre que se $a,b\in\mathbb R$ e $0\le a&lt;b$, então $\dfrac{b^{n+1}-a^{n+1}}{b-a}&lt;(n+1)b^n$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — fatorar a diferença de potências</span>
              <p>$$b^{n+1}-a^{n+1}=(b-a)\big(b^n+b^{n-1}a+\cdots+ba^{n-1}+a^n\big),$$
              soma de $n+1$ parcelas do tipo $b^{k}a^{n-k}$, $k=0,1,\dots,n$.</p>
              <span class="step-label">Passo 2 — cotar cada parcela</span>
              <p>Como $0\le a&lt;b$, toda parcela satisfaz $b^{k}a^{n-k}\le b^{k}b^{n-k}=b^n$. Além disso, quando $k&lt;n$ (isto é, $n-k\ge1$) a parcela contém ao menos um fator $a&lt;b$, logo a desigualdade é estrita: $b^{k}a^{n-k}&lt;b^n$.</p>
              <span class="step-label">Passo 3 — somar e concluir</span>
              <p>Das $n+1$ parcelas, a última ($k=n$) vale exatamente $b^n$ e todas as outras são estritamente menores que $b^n$. Logo a soma é estritamente menor que $(n+1)b^n$:
              $$b^{n+1}-a^{n+1}&lt;(n+1)b^n(b-a).$$
              Dividindo por $b-a&gt;0$, obtemos a desigualdade pedida.</p>
              <div class="final">$\dfrac{b^{n+1}-a^{n+1}}{b-a}&lt;(n+1)b^n$, para todos $n\in\mathbb N$ e $0\le a&lt;b$.</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`Deduza que $b^n\big[(n+1)a-nb\big]&lt;a^{n+1}$, para todos $n\in\mathbb N$ e $a,b\in\mathbb R$ com $0\le a&lt;b$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — multiplicar pelo denominador</span>
              <p>Pelo item (a), $\dfrac{b^{n+1}-a^{n+1}}{b-a}&lt;(n+1)b^n$. Como $b-a&gt;0$, multiplicar os dois lados por $b-a$ preserva a desigualdade:
              $$b^{n+1}-a^{n+1}&lt;(n+1)b^n(b-a).$$</p>
              <span class="step-label">Passo 2 — isolar $a^{n+1}$</span>
              <p>$$b^{n+1}-(n+1)b^n(b-a)&lt;a^{n+1}\ \Longrightarrow\ b^n\big[b-(n+1)(b-a)\big]&lt;a^{n+1}.$$</p>
              <span class="step-label">Passo 3 — simplificar o parêntese</span>
              <p>$$b-(n+1)(b-a)=b-(n+1)b+(n+1)a=(n+1)a-nb.$$</p>
              <div class="final">$b^n\big[(n+1)a-nb\big]&lt;a^{n+1}$, para todos $n\in\mathbb N$ e $0\le a&lt;b$.</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`Use $a=1+\tfrac1{n+1}$ e $b=1+\tfrac1n$ na parte (b) para mostrar que $(a_n)$ é crescente.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — calcular $(n+1)a-nb$</span>
              <p>Com $a=1+\dfrac1{n+1}$: $(n+1)a=(n+1)+1=n+2$. Com $b=1+\dfrac1n$: $nb=n+1$. Logo
              $$(n+1)a-nb=(n+2)-(n+1)=1.$$</p>
              <span class="step-label">Passo 2 — substituir na desigualdade do item (b)</span>
              <p>A desigualdade $b^n\big[(n+1)a-nb\big]&lt;a^{n+1}$ vira $b^n\cdot1&lt;a^{n+1}$, isto é
              $$\left(1+\frac1n\right)^n&lt;\left(1+\frac1{n+1}\right)^{n+1}.$$</p>
              <span class="step-label">Passo 3 — identificar com $a_n$</span>
              <p>O lado esquerdo é exatamente $a_n$ e o lado direito é $a_{n+1}$.</p>
              <div class="final">$a_n&lt;a_{n+1}$ para todo $n\in\mathbb N$: $(a_n)$ é estritamente crescente.</div>
            `
          },
          {
            label: 'd',
            statement: String.raw`Use $a=1$ e $b=1+\tfrac1{2n}$ na parte (b) para mostrar que $a_{2n}&lt;4$, para todo $n$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — calcular $(n+1)a-nb$</span>
              <p>Com $a=1$ e $b=1+\dfrac1{2n}$: $(n+1)a=n+1$ e $nb=n+\dfrac12$. Logo
              $$(n+1)a-nb=(n+1)-\left(n+\frac12\right)=\frac12.$$</p>
              <span class="step-label">Passo 2 — substituir na desigualdade do item (b)</span>
              <p>A desigualdade $b^n\big[(n+1)a-nb\big]&lt;a^{n+1}$ vira $b^n\cdot\dfrac12&lt;1^{n+1}=1$, ou seja
              $$\left(1+\frac1{2n}\right)^n&lt;2.$$</p>
              <span class="step-label">Passo 3 — elevar ao quadrado</span>
              <p>Como ambos os lados são positivos, elevar ao quadrado preserva a desigualdade:
              $$a_{2n}=\left(1+\frac1{2n}\right)^{2n}=\left[\left(1+\frac1{2n}\right)^n\right]^2&lt;2^2=4.$$</p>
              <div class="final">$a_{2n}&lt;4$ para todo $n\in\mathbb N$.</div>
            `
          },
          {
            label: 'e',
            statement: String.raw`Conclua que $a_n&lt;4$ para todo $n$ e que $\lim_{n\to\infty}\left(1+\tfrac1n\right)^n$ existe.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — usar o crescimento (item c)</span>
              <p>Pelo item (c), $(a_n)$ é crescente. Como $2n\ge n$ para todo $n\in\mathbb N$, segue $a_n\le a_{2n}$.</p>
              <span class="step-label">Passo 2 — combinar com o item (d)</span>
              <p>Pelo item (d), $a_{2n}&lt;4$. Logo $a_n\le a_{2n}&lt;4$ para todo $n$: a sequência é limitada superiormente por $4$.</p>
              <span class="step-label">Passo 3 — Teorema da Sequência Monótona</span>
              <p>Toda sequência monótona e limitada converge. Como $(a_n)$ é crescente (item c) e limitada por $4$ (passo anterior), ela converge.</p>
              <div class="final">$a_n&lt;4$ para todo $n$ e $\displaystyle\lim_{n\to\infty}\left(1+\tfrac1n\right)^n$ existe (esse limite define o número $e\approx2{,}71828$). $\blacksquare$</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 1 · Item V', examStyle: true,
        statement: String.raw`
          <p>Cinco exercícios sobre sequências recursivas definidas por $a_{n+1}=f(a_n)$: convergência via monotonicidade e limitação (Teorema da Sequência Monótona) e cálculo do limite via ponto fixo de $f$. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`Sejam $A\subset\mathbb R$, $f:A\to A$ contínua em $A$, e $a\in A$. Seja $(a_n)$ definida por $a_0\in A$, $a_{n+1}=f(a_n)$, e suponha $a_n\to a$. Prove que $f(a)=a$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — usar a continuidade de $f$</span>
              <p>Como $f$ é contínua em $a$ e $a_n\to a$, a definição de continuidade sequencial dá $f(a_n)\to f(a)$.</p>
              <span class="step-label">Passo 2 — identificar $f(a_n)$ com a sequência deslocada</span>
              <p>Pela recorrência, $f(a_n)=a_{n+1}$. A sequência $(a_{n+1})_n$ é apenas $(a_n)_n$ com os índices deslocados em $1$, logo tem o mesmo limite: $a_{n+1}\to a$.</p>
              <span class="step-label">Passo 3 — unicidade do limite</span>
              <p>Temos $f(a_n)\to f(a)$ e $f(a_n)=a_{n+1}\to a$. Como o limite de uma sequência convergente é único, $f(a)=a$.</p>
              <div class="final">$f(a)=a$: o limite de uma sequência recursiva contínua é sempre ponto fixo de $f$. $\blacksquare$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`Considere $a_1=\sqrt2$, $a_2=\sqrt{2\sqrt2}$, $a_3=\sqrt{2\sqrt{2\sqrt2}},\dots$ Verifique que a sequência é crescente e limitada superiormente por $2$, e calcule seu limite.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar a recorrência</span>
              <p>Os termos satisfazem $a_{n+1}=\sqrt{2a_n}$, com $a_1=\sqrt2$.</p>
              <span class="step-label">Passo 2 — limitada por $2$ (indução)</span>
              <p>$a_1=\sqrt2&lt;2$. Se $a_n&lt;2$, então $a_{n+1}=\sqrt{2a_n}&lt;\sqrt{2\cdot2}=2$. Por indução, $a_n&lt;2$ para todo $n$.</p>
              <span class="step-label">Passo 3 — crescente</span>
              <p>Como $a_n&gt;0$: $a_{n+1}&gt;a_n \iff a_{n+1}^2&gt;a_n^2 \iff 2a_n&gt;a_n^2 \iff 2&gt;a_n$, o que vale pelo passo anterior. Logo $(a_n)$ é crescente.</p>
              <span class="step-label">Passo 4 — convergência e valor do limite</span>
              <p>Crescente e limitada ⟹ converge, digamos a $L\le2$. Tomando limite em $a_{n+1}^2=2a_n$: $L^2=2L\Rightarrow L(L-2)=0\Rightarrow L\in\{0,2\}$. Como $(a_n)$ é crescente com $a_1=\sqrt2&gt;0$, temos $L\ge\sqrt2&gt;0$, logo $L=2$.</p>
              <div class="final">$(a_n)$ é crescente e limitada por $2$; $\displaystyle\lim_{n\to\infty}a_n=2$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`Seja $x_1=\sqrt2$ e $x_{n+1}=\sqrt{2+x_n}$. Mostre que a sequência é limitada e crescente. Obtenha seu limite.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — limitada por $2$ (indução)</span>
              <p>$x_1=\sqrt2&lt;2$. Se $x_n&lt;2$, então $x_{n+1}=\sqrt{2+x_n}&lt;\sqrt{2+2}=2$. Logo $x_n&lt;2$ para todo $n$.</p>
              <span class="step-label">Passo 2 — crescente</span>
              <p>$$x_{n+1}^2-x_n^2=(2+x_n)-x_n^2=-(x_n^2-x_n-2)=-(x_n-2)(x_n+1)=(2-x_n)(x_n+1).$$
              Como $x_n&lt;2$ e $x_n+1&gt;0$, o produto é positivo: $x_{n+1}^2&gt;x_n^2$, e sendo ambos positivos, $x_{n+1}&gt;x_n$.</p>
              <span class="step-label">Passo 3 — convergência e valor do limite</span>
              <p>Crescente e limitada ⟹ converge a algum $L\le2$. Tomando limite em $x_{n+1}^2=2+x_n$: $L^2=2+L\Rightarrow L^2-L-2=0\Rightarrow(L-2)(L+1)=0$. Como $L\ge x_1=\sqrt2&gt;0$, rejeitamos $L=-1$.</p>
              <div class="final">$(x_n)$ é crescente e limitada por $2$; $\displaystyle\lim_{n\to\infty}x_n=2$.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`(i) Um ponto $B$ de um segmento $OA$ divide-o na <strong>razão áurea</strong> se $\tfrac{OA}{OB}=\tfrac{OB}{BA}$; denota-se $\varphi=\tfrac{OA}{OB}$. Mostre que $\varphi$ é a raiz positiva de $x^2-x-1=0$.<br>(ii) (Fibonacci) $f_0=f_1=1$, $f_n=f_{n-2}+f_{n-1}$ para $n\ge2$. Prove que $x_n=\dfrac{f_{n+1}}{f_n}$ converge e que seu limite é $\varphi$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 (i) — montar a equação da razão áurea</span>
              <p>Sem perda de generalidade, $OA=1$ e $OB=x$ (com $0&lt;x&lt;1$), logo $BA=OA-OB=1-x$. A condição $\dfrac{OA}{OB}=\dfrac{OB}{BA}$ vira $\dfrac1x=\dfrac{x}{1-x}$.</p>
              <span class="step-label">Passo 2 (i) — resolver a equação</span>
              <p>$$\frac1x=\frac{x}{1-x}\ \Longrightarrow\ 1-x=x^2\ \Longrightarrow\ x^2+x-1=0\ \Longrightarrow\ x=\frac{-1+\sqrt5}{2}\ (\text{raiz positiva}).$$</p>
              <span class="step-label">Passo 3 (i) — obter $\varphi$ e verificar</span>
              <p>$$\varphi=\frac{OA}{OB}=\frac1x=\frac{2}{\sqrt5-1}=\frac{2(\sqrt5+1)}{4}=\frac{1+\sqrt5}{2}.$$
              Verificação: $\varphi^2=\dfrac{6+2\sqrt5}{4}=\dfrac{3+\sqrt5}{2}$, e $\varphi^2-\varphi-1=\dfrac{3+\sqrt5}{2}-\dfrac{1+\sqrt5}{2}-1=1-1=0$. Logo $\varphi$ é raiz positiva de $x^2-x-1=0$.</p>
              <span class="step-label">Passo 4 (ii) — fórmula de Binet para $f_n$</span>
              <p>A recorrência $f_n=f_{n-1}+f_{n-2}$ tem equação característica $r^2=r+1$, com raízes $\varphi=\tfrac{1+\sqrt5}2$ e $\psi=\tfrac{1-\sqrt5}2$ (note $|\psi|\approx0{,}618&lt;1$). A solução geral é $f_n=A\varphi^n+B\psi^n$; usando $f_0=f_1=1$ obtém-se
              $$f_n=\frac{\varphi^{n+1}-\psi^{n+1}}{\sqrt5}.$$</p>
              <span class="step-label">Passo 5 (ii) — limite de $x_n=f_{n+1}/f_n$</span>
              <p>$$x_n=\frac{f_{n+1}}{f_n}=\frac{\varphi^{n+2}-\psi^{n+2}}{\varphi^{n+1}-\psi^{n+1}}=\varphi\cdot\frac{1-(\psi/\varphi)^{n+2}}{1-(\psi/\varphi)^{n+1}}.$$
              Como $|\psi/\varphi|&lt;1$, temos $(\psi/\varphi)^n\to0$, logo $x_n\to\varphi\cdot\dfrac{1-0}{1-0}=\varphi$.</p>
              <div class="final">$\varphi=\dfrac{1+\sqrt5}2$ é a raiz positiva de $x^2-x-1=0$, e $\displaystyle\lim_{n\to\infty}\frac{f_{n+1}}{f_n}=\varphi$. $\blacksquare$</div>
            `
          },
          {
            label: '5',
            statement: String.raw`A sequência $\left(\dfrac{p_n}{q_n}\right)$ satisfaz $p_1=q_1=1$ e, para $n\ge2$, $p_n=p_{n-1}+2q_{n-1}$, $q_n=p_{n-1}+q_{n-1}$. Prove que a sequência converge e que $\lim_{n\to\infty}\dfrac{p_n}{q_n}=\sqrt2$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — recorrência para $r_n=p_n/q_n$</span>
              <p>Dividindo as duas recorrências por $q_{n-1}$:
              $$r_n=\frac{p_n}{q_n}=\frac{p_{n-1}+2q_{n-1}}{p_{n-1}+q_{n-1}}=\frac{r_{n-1}+2}{r_{n-1}+1},\qquad r_1=1,$$
              com $r_n&gt;0$ para todo $n$ (indução imediata, pois $p_n,q_n&gt;0$).</p>
              <span class="step-label">Passo 2 — ponto fixo</span>
              <p>Se $r_n\to L$, tomando limite na recorrência: $L=\dfrac{L+2}{L+1}\Rightarrow L^2+L=L+2\Rightarrow L^2=2\Rightarrow L=\sqrt2$ (descartando $-\sqrt2&lt;0$, pois $r_n&gt;0$).</p>
              <span class="step-label">Passo 3 — estimar a distância ao ponto fixo</span>
              <p>$$r_n-\sqrt2=\frac{r_{n-1}+2}{r_{n-1}+1}-\sqrt2=\frac{(r_{n-1}+2)-\sqrt2(r_{n-1}+1)}{r_{n-1}+1}=\frac{(1-\sqrt2)(r_{n-1}-\sqrt2)}{r_{n-1}+1}.$$
              Como $r_{n-1}+1&gt;1$ e $|1-\sqrt2|=\sqrt2-1&lt;1$:
              $$|r_n-\sqrt2|&lt;(\sqrt2-1)\,|r_{n-1}-\sqrt2|.$$</p>
              <span class="step-label">Passo 4 — iterar e concluir</span>
              <p>Aplicando a desigualdade repetidamente: $|r_n-\sqrt2|&lt;(\sqrt2-1)^{n-1}|r_1-\sqrt2|$. Como $0&lt;\sqrt2-1&lt;1$, $(\sqrt2-1)^{n-1}\to0$, logo $|r_n-\sqrt2|\to0$.</p>
              <div class="final">$\displaystyle\lim_{n\to\infty}\frac{p_n}{q_n}=\sqrt2$. $\blacksquare$</div>
            `
          }
        ]
      },
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
          <p>Verifique a convergência ou divergência das sequências (somas parciais) abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$s_n=\displaystyle\sum_{r=1}^n\frac1{r^3}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar o tipo de série</span>
              <p>$s_n$ é a soma parcial da série $\displaystyle\sum_{r=1}^\infty\frac1{r^p}$ com $p=3$: uma <em>$p$-série</em>.</p>
              <span class="step-label">Passo 2 — critério de convergência da $p$-série</span>
              <p>A $p$-série $\sum1/r^p$ converge se e somente se $p&gt;1$ (comparação com a integral $\int_1^\infty x^{-p}\,dx$, que converge exatamente quando $p&gt;1$).</p>
              <span class="step-label">Passo 3 — aplicar com $p=3$</span>
              <p>Como $p=3&gt;1$, a série converge.</p>
              <div class="final">Converge (a soma exata é $\zeta(3)$, sem forma fechada elementar conhecida).</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$s_n=\displaystyle\sum_{r=1}^n\frac1{e^r}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar a série geométrica</span>
              <p>$s_n$ é soma parcial de $\displaystyle\sum_{r=1}^\infty\left(\frac1e\right)^r$, geométrica de razão $q=1/e$.</p>
              <span class="step-label">Passo 2 — critério de convergência</span>
              <p>Como $0&lt;1/e&lt;1$, temos $|q|&lt;1$: a série geométrica converge.</p>
              <span class="step-label">Passo 3 — somar</span>
              <p>$$\sum_{r=1}^\infty\left(\frac1e\right)^r=\frac{1/e}{1-1/e}=\frac1{e-1}.$$</p>
              <div class="final">Converge para $\dfrac1{e-1}$.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$s_n=\displaystyle\sum_{r=3}^n\frac1{\ln r}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — comparar $\ln r$ com $r$</span>
              <p>Para todo $r\ge3$ (na verdade, para todo $r&gt;0$), vale $\ln r&lt;r$.</p>
              <span class="step-label">Passo 2 — inverter a desigualdade</span>
              <p>Como ambos os lados são positivos para $r\ge3$: $\dfrac1{\ln r}&gt;\dfrac1r$.</p>
              <span class="step-label">Passo 3 — comparar com a série harmônica</span>
              <p>A série harmônica $\displaystyle\sum_{r\ge3}\frac1r$ diverge (é uma cauda da série harmônica, que diverge). Pelo critério da comparação, como $\dfrac1{\ln r}&gt;\dfrac1r\ge0$ termo a termo, a série $\displaystyle\sum\dfrac1{\ln r}$ também diverge.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$a_n=\dfrac{2\cdot4\cdot6\cdots(2n)}{1\cdot3\cdot5\cdots(2n-1)}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escrever como produto e tomar o logaritmo</span>
              <p>$$R_n=\prod_{k=1}^n\frac{2k}{2k-1},\qquad \ln R_n=\sum_{k=1}^n\ln\!\left(1+\frac1{2k-1}\right).$$</p>
              <span class="step-label">Passo 2 — comparar com a série harmônica</span>
              <p>Para $x&gt;0$ vale $\ln(1+x)\ge\dfrac{x}{1+x}$. Com $x=\dfrac1{2k-1}$:
              $$\ln\!\left(1+\frac1{2k-1}\right)\ \ge\ \frac{1/(2k-1)}{1+1/(2k-1)}=\frac1{2k}.$$
              Logo $\displaystyle\ln R_n\ge\sum_{k=1}^n\frac1{2k}=\frac12\sum_{k=1}^n\frac1k$.</p>
              <span class="step-label">Passo 3 — a soma harmônica diverge</span>
              <p>$\displaystyle\sum_{k=1}^n\frac1k\to+\infty$ (harmônica), logo $\ln R_n\to+\infty$, e portanto $R_n=e^{\ln R_n}\to+\infty$.</p>
              <div class="final">Diverge (para $+\infty$).</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$a_n=\dfrac{1\cdot3\cdot5\cdots(2n-1)}{2\cdot4\cdot6\cdots(2n)}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — relacionar com o item anterior</span>
              <p>Esta sequência é exatamente o inverso da do item 4: $a_n=1/R_n$, com $R_n=\dfrac{2\cdot4\cdots(2n)}{1\cdot3\cdots(2n-1)}$.</p>
              <span class="step-label">Passo 2 — usar o limite de $R_n$</span>
              <p>Pelo item 4, $R_n\to+\infty$. Como $a_n=1/R_n$ e $R_n&gt;0$, temos $a_n\to0$.</p>
              <div class="final">Converge para $0$.</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$a_n=\dfrac1n\cdot\dfrac{2\cdot4\cdot6\cdots(2n)}{1\cdot3\cdot5\cdots(2n-1)}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $a_n$ em termos de $R_n$</span>
              <p>Com $R_n=\dfrac{2\cdot4\cdots(2n)}{1\cdot3\cdots(2n-1)}$ do item 4, temos $a_n=R_n/n$.</p>
              <span class="step-label">Passo 2 — estimativa fina de $R_n$ (produto de Wallis / Stirling)</span>
              <p>Usando a fórmula de Stirling $n!\sim\sqrt{2\pi n}\,(n/e)^n$ pode-se mostrar que
              $$R_n=\frac{(2^n n!)^2}{(2n)!}\sim\sqrt{\pi n}\qquad(n\to\infty)$$
              (produto de Wallis).</p>
              <span class="step-label">Passo 3 — limite de $a_n$</span>
              <p>$$a_n=\frac{R_n}{n}\sim\frac{\sqrt{\pi n}}{n}=\sqrt{\frac{\pi}{n}}\longrightarrow0.$$</p>
              <div class="final">Converge para $0$.</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 1 · Item VII',
        statement: String.raw`
          <p>Expresse as seguintes dízimas periódicas como quociente de dois inteiros. (A formatação da barra de periodicidade se perdeu no PDF original; assumimos aqui que "9" e "117" são as partes que se repetem — o método é o que importa.) Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$1{,}2\overline{9}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — multiplicar pela potência de $10$ adequada</span>
              <p>Seja $x=1{,}2999\ldots$ A parte periódica (o dígito $9$) começa na segunda casa decimal, então multiplicamos por $10$ e por $100$:
              $$10x=12{,}999\ldots,\qquad 100x=129{,}999\ldots$$</p>
              <span class="step-label">Passo 2 — subtrair para cancelar a cauda periódica</span>
              <p>$$100x-10x=129{,}999\ldots-12{,}999\ldots=117\ \Longrightarrow\ 90x=117.$$</p>
              <span class="step-label">Passo 3 — simplificar a fração</span>
              <p>$$x=\frac{117}{90}=\frac{13}{10}=1{,}3.$$
              De fato, $1{,}2\overline9=1{,}3$ é um exemplo clássico de que uma dízima terminada em $9$ "fecha" a casa decimal anterior.</p>
              <div class="final">$1{,}2\overline9=\dfrac{13}{10}$.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$0{,}3\overline{117}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — isolar a parte não periódica</span>
              <p>Seja $x=0{,}3117117117\ldots$ Multiplicando por $10$ para deslocar o dígito não periódico "$3$":
              $$10x=3{,}\overline{117}=3+0{,}\overline{117}.$$</p>
              <span class="step-label">Passo 2 — converter a dízima puramente periódica</span>
              <p>Para uma dízima puramente periódica de período $3$: $0{,}\overline{117}=\dfrac{117}{999}$. Simplificando por $\gcd(117,999)=9$:
              $$0{,}\overline{117}=\frac{117/9}{999/9}=\frac{13}{111}.$$</p>
              <span class="step-label">Passo 3 — voltar e resolver para $x$</span>
              <p>$$10x=3+\frac{13}{111}=\frac{333+13}{111}=\frac{346}{111}\ \Longrightarrow\ x=\frac{346}{1110}.$$</p>
              <span class="step-label">Passo 4 — simplificar a fração final</span>
              <p>Como $\gcd(346,1110)=2$:
              $$x=\frac{173}{555}.$$</p>
              <div class="final">$0{,}3\overline{117}=\dfrac{173}{555}$.</div>
            `
          }
        ]
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
          <p>Verifique as relações abaixo e use-as para calcular as somas (3)–(7). Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\sum_{n=1}^\infty[f(n+1)-f(n)]=\lim_{n\to\infty}f(n)-f(1)$, se o limite existir.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — soma parcial telescópica</span>
              <p>Escrevendo a soma parcial e cancelando os termos intermediários dois a dois:</p>
              $$S_N=\sum_{n=1}^N[f(n+1)-f(n)]=[f(2)-f(1)]+[f(3)-f(2)]+\cdots+[f(N+1)-f(N)]=f(N+1)-f(1).$$
              <span class="step-label">Passo 2 — passar ao limite</span>
              <p>Se $\displaystyle\lim_{n\to\infty}f(n)=L$ existe, então $f(N+1)\to L$ quando $N\to\infty$; logo $S_N\to L-f(1)$.</p>
              <div class="final">$\displaystyle\sum_{n=1}^\infty[f(n+1)-f(n)]=\lim_{n\to\infty}f(n)-f(1)$, sempre que esse limite existir.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\sum_{n=1}^\infty[f(n+1)-f(n-1)]=\lim_{n\to\infty}[f(n)+f(n+1)]-f(0)-f(1)$, se o limite existir.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reindexar cada soma separadamente</span>
              <p>$$\sum_{n=1}^N f(n+1)=\sum_{k=2}^{N+1}f(k), \qquad \sum_{n=1}^N f(n-1)=\sum_{k=0}^{N-1}f(k).$$</p>
              <span class="step-label">Passo 2 — subtrair e cancelar os termos comuns</span>
              <p>As duas somas compartilham os termos $f(2),f(3),\dots,f(N-1)$, que se cancelam na diferença, restando:</p>
              $$S_N=\sum_{n=1}^N[f(n+1)-f(n-1)]=\big[f(N)+f(N+1)\big]-\big[f(0)+f(1)\big].$$
              <span class="step-label">Passo 3 — passar ao limite</span>
              <p>Fazendo $N\to\infty$: se $\displaystyle\lim_{n\to\infty}[f(n)+f(n+1)]$ existir, então $S_N$ converge para esse limite menos $f(0)+f(1)$ (não é necessário que $f(n)$ tenha limite isoladamente).</p>
              <div class="final">$\displaystyle\sum_{n=1}^\infty[f(n+1)-f(n-1)]=\lim_{n\to\infty}[f(n)+f(n+1)]-f(0)-f(1)$, sempre que esse limite existir.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\left(\frac1n-\frac1{n+1}\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar a relação (1)</span>
              <p>Tome $g(n)=\dfrac1n$. Então $g(n+1)-g(n)=\dfrac1{n+1}-\dfrac1n$, ou seja, o termo geral é $\dfrac1n-\dfrac1{n+1}=-[g(n+1)-g(n)]$.</p>
              <span class="step-label">Passo 2 — aplicar a relação (1) com sinal trocado</span>
              <p>Como $\lim_{n\to\infty}g(n)=0$ e $g(1)=1$, a relação (1) dá:</p>
              $$\sum_{n=1}^\infty\left(\frac1n-\frac1{n+1}\right)=-\left[\lim_{n\to\infty}g(n)-g(1)\right]=-[0-1]=1.$$
              <div class="final">Soma $=1$</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty(-1)^n\ln\!\left(\frac n{n+2}\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — separar o logaritmo e definir $b_n$</span>
              <p>Escreva $\ln\dfrac n{n+2}=\ln n-\ln(n+2)$ e defina $b_n=(-1)^n\ln n$. Como $(-1)^{n+2}=(-1)^n$, tem-se $(-1)^n\ln(n+2)=b_{n+2}$, logo o termo geral é $b_n-b_{n+2}$ — telescópico "de passo $2$".</p>
              <span class="step-label">Passo 2 — soma parcial e limite</span>
              <p>A soma parcial vale $S_N=(b_1+b_2)-(b_{N+1}+b_{N+2})$, com $b_{N+1}+b_{N+2}=(-1)^{N+1}\big[\ln(N+1)-\ln(N+2)\big]\to0$, pois $\ln\dfrac{N+1}{N+2}\to\ln1=0$.</p>
              <span class="step-label">Passo 3 — calcular $b_1+b_2$</span>
              <p>$$b_1+b_2=(-1)\ln1+\ln2=0+\ln2=\ln2.$$</p>
              <div class="final">Soma $=\ln2$</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\left[\sin\frac1n-\sin\frac1{n+1}\right]$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar a relação (1) com sinal trocado</span>
              <p>Tome $f(n)=\sin\dfrac1n$. O termo geral é $\sin\dfrac1n-\sin\dfrac1{n+1}=-[f(n+1)-f(n)]$.</p>
              <span class="step-label">Passo 2 — aplicar a relação (1)</span>
              <p>Como $\displaystyle\lim_{n\to\infty}f(n)=\sin0=0$ e $f(1)=\sin1$, a relação (1) dá:</p>
              $$\sum_{n=1}^\infty\left[\sin\frac1n-\sin\frac1{n+1}\right]=-\left[\lim_{n\to\infty}f(n)-f(1)\right]=-[0-\sin1]=\sin1.$$
              <div class="final">Soma $=\sin(1)$</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac n{(n+1)!}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reescrever o termo geral</span>
              <p>Como $n=(n+1)-1$:</p>
              $$\frac n{(n+1)!}=\frac{(n+1)-1}{(n+1)!}=\frac1{n!}-\frac1{(n+1)!}.$$
              <span class="step-label">Passo 2 — reconhecer a telescopagem</span>
              <p>Definindo $g(n)=\dfrac1{n!}$, o termo geral é $g(n)-g(n+1)$, que é a relação (1) já com o sinal certo (soma $=g(1)-\lim g(n+1)$).</p>
              <span class="step-label">Passo 3 — tomar o limite</span>
              <p>Como $g(1)=1$ e $\displaystyle\lim_{n\to\infty}g(n+1)=0$:</p>
              $$\sum_{n=1}^\infty\left[g(n)-g(n+1)\right]=g(1)-\lim_{n\to\infty}g(n+1)=1-0=1.$$
              <div class="final">Soma $=1$</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac1{(n+1)(n+2)\cdots(n+k)}$, $(k\ge2)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identidade de frações parciais</span>
              <p>Vale a identidade</p>
              $$\frac1{(n+1)\cdots(n+k)}=\frac1{k-1}\left[\frac1{(n+1)\cdots(n+k-1)}-\frac1{(n+2)\cdots(n+k)}\right].$$
              <span class="step-label">Passo 2 — reconhecer a telescopagem</span>
              <p>Definindo $h(n)=\dfrac1{(n+1)\cdots(n+k-1)}$ (produto de $k-1$ fatores), o termo geral é $\dfrac1{k-1}[h(n)-h(n+1)]$.</p>
              <span class="step-label">Passo 3 — aplicar a relação (1) e concluir</span>
              <p>A soma telescopa para $\dfrac1{k-1}\big[h(1)-\lim_{n\to\infty}h(n)\big]=\dfrac1{k-1}\left[\dfrac1{2\cdot3\cdots k}-0\right]=\dfrac1{k-1}\cdot\dfrac1{k!}$.</p>
              <div class="final">Soma $=\dfrac1{k!\,(k-1)}$</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 1 · Item XI', examStyle: true,
        statement: String.raw`
          <p>Decida se cada série abaixo converge; se possível, calcule a soma. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\displaystyle\sum_{n=0}^\infty\left(\frac1{10^n}+2^n\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — analisar cada parcela</span>
              <p>A parcela $1/10^n$ é o termo geral de uma série geométrica convergente ($|r|=1/10&lt;1$), mas $2^n\to\infty$.</p>
              <span class="step-label">Passo 2 — termo geral da série completa</span>
              <p>O termo geral é $a_n=\dfrac1{10^n}+2^n$; como $2^n\to\infty$ domina, $a_n\to\infty$.</p>
              <span class="step-label">Passo 3 — condição necessária de convergência</span>
              <p>Uma série só converge se $a_n\to0$. Como $a_n\to\infty\ne0$ (e não podemos separar em duas somas quando uma delas diverge), a série diverge.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\displaystyle\sum_{k=0}^\infty(-1)^k t^{k/2}$, para $0&lt;t&lt;1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a série geométrica</span>
              <p>Escreva $(-1)^k t^{k/2}=(-\sqrt t)^k$: é geométrica de razão $r=-\sqrt t$.</p>
              <span class="step-label">Passo 2 — verificar a convergência</span>
              <p>Como $0&lt;t&lt;1$, temos $0&lt;\sqrt t&lt;1$, logo $|r|=\sqrt t&lt;1$: a série converge.</p>
              <span class="step-label">Passo 3 — aplicar a fórmula da soma geométrica</span>
              <p>$$\sum_{k=0}^\infty r^k=\frac1{1-r}=\frac1{1-(-\sqrt t)}=\frac1{1+\sqrt t}.$$</p>
              <div class="final">Soma $=\dfrac1{1+\sqrt t}$</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\sum_{n=0}^\infty u^n(1+u^n)$, para $|u|&lt;1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — separar em duas geométricas</span>
              <p>Como $\sum u^n$ (razão $u$) e $\sum(u^2)^n$ (razão $u^2$) convergem absolutamente para $|u|&lt;1$, podemos separar: $\sum u^n(1+u^n)=\sum u^n+\sum(u^2)^n$.</p>
              <span class="step-label">Passo 2 — somar cada geométrica</span>
              <p>$$\sum_{n=0}^\infty u^n=\frac1{1-u}, \qquad \sum_{n=0}^\infty (u^2)^n=\frac1{1-u^2}.$$</p>
              <span class="step-label">Passo 3 — combinar as frações</span>
              <p>Usando $1-u^2=(1-u)(1+u)$ como denominador comum:</p>
              $$\frac1{1-u}+\frac1{1-u^2}=\frac{(1+u)+1}{1-u^2}=\frac{2+u}{1-u^2}.$$
              <div class="final">Soma $=\dfrac{2+u}{1-u^2}$</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\displaystyle\sum_{n=0}^\infty x^n\cos\!\left(\frac{n\pi}2\right)$, para $|x|&lt;1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — valores de $\cos(n\pi/2)$</span>
              <p>Para $n=0,1,2,3,4,\dots$, $\cos(n\pi/2)=1,0,-1,0,1,\dots$: é nulo para $n$ ímpar e igual a $(-1)^m$ quando $n=2m$ é par.</p>
              <span class="step-label">Passo 2 — reindexar pelos termos não nulos</span>
              <p>$$\sum_{n=0}^\infty x^n\cos\left(\frac{n\pi}2\right)=\sum_{m=0}^\infty x^{2m}(-1)^m=\sum_{m=0}^\infty(-x^2)^m.$$</p>
              <span class="step-label">Passo 3 — série geométrica de razão $-x^2$</span>
              <p>Como $|x|&lt;1$, $|-x^2|=x^2&lt;1$: a série converge e vale $\dfrac1{1-(-x^2)}=\dfrac1{1+x^2}$.</p>
              <div class="final">Soma $=\dfrac1{1+x^2}$</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\displaystyle\sum_{n=0}^\infty\sin^{2n}x$, para $|x|&lt;\pi/2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a geométrica</span>
              <p>$\sin^{2n}x=(\sin^2x)^n$: série geométrica de razão $r=\sin^2x$.</p>
              <span class="step-label">Passo 2 — verificar a condição de convergência</span>
              <p>Para $|x|&lt;\pi/2$ tem-se $0\le\sin^2x&lt;1$, logo $r&lt;1$: a série converge.</p>
              <span class="step-label">Passo 3 — somar e simplificar com identidade trigonométrica</span>
              <p>$$\sum_{n=0}^\infty(\sin^2x)^n=\frac1{1-\sin^2x}=\frac1{\cos^2x}=\sec^2x.$$</p>
              <div class="final">Soma $=\sec^2x$</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\sum_{j=1}^n\binom nj$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — calcular a soma interna (binômio de Newton)</span>
              <p>$\displaystyle\sum_{j=0}^n\binom nj=2^n$; retirando o termo $j=0$ (que vale $1$):</p>
              $$\sum_{j=1}^n\binom nj=2^n-1.$$
              <span class="step-label">Passo 2 — termo geral da série externa</span>
              <p>A série pedida é $\displaystyle\sum_{n=1}^\infty(2^n-1)$, com termo geral $a_n=2^n-1\to\infty$.</p>
              <span class="step-label">Passo 3 — condição necessária</span>
              <p>Como $a_n\to\infty\ne0$, a série diverge.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\cos\!\left(\frac{n\pi}2\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — listar os valores do termo geral</span>
              <p>Para $n=1,2,3,4,5,6,\dots$: $\cos(n\pi/2)=0,-1,0,1,0,-1,\dots$ — os termos ciclam entre $0,1,-1$.</p>
              <span class="step-label">Passo 2 — não existe limite do termo geral</span>
              <p>A sequência $\cos(n\pi/2)$ oscila permanentemente entre três valores distintos: não converge e, em particular, não tende a $0$.</p>
              <span class="step-label">Passo 3 — condição necessária de convergência</span>
              <p>Pelo critério do termo geral, a série diverge.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '8',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac1{\sqrt{n+1}+\sqrt n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — racionalizar o termo geral</span>
              <p>Multiplicando por $\dfrac{\sqrt{n+1}-\sqrt n}{\sqrt{n+1}-\sqrt n}$:</p>
              $$\frac1{\sqrt{n+1}+\sqrt n}=\frac{\sqrt{n+1}-\sqrt n}{(n+1)-n}=\sqrt{n+1}-\sqrt n.$$
              <span class="step-label">Passo 2 — soma parcial telescópica</span>
              <p>$$S_N=\sum_{n=1}^N(\sqrt{n+1}-\sqrt n)=\sqrt{N+1}-\sqrt1=\sqrt{N+1}-1.$$</p>
              <span class="step-label">Passo 3 — limite</span>
              <p>Quando $N\to\infty$, $S_N=\sqrt{N+1}-1\to\infty$.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '9',
            statement: String.raw`$\displaystyle\sum_{k=1}^\infty k\sin k$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — condição necessária</span>
              <p>Para convergir, precisaríamos $a_k=k\sin k\to0$.</p>
              <span class="step-label">Passo 2 — comportamento de $\sin k$</span>
              <p>Como $\pi$ é irracional, os valores de $k\ (\mathrm{mod}\ 2\pi)$ se distribuem densamente no círculo; em particular existe uma subsequência $k_j\to\infty$ com $|\sin k_j|\ge\tfrac12$.</p>
              <span class="step-label">Passo 3 — concluir a divergência</span>
              <p>Nessa subsequência, $|a_{k_j}|=k_j|\sin k_j|\ge k_j/2\to\infty$; logo $a_k$ não tende a $0$.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '10',
            statement: String.raw`$\displaystyle\sum_{s=1}^\infty\cos\frac1s$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — calcular o limite do termo geral</span>
              <p>Quando $s\to\infty$, $\dfrac1s\to0$, e pela continuidade do cosseno, $\cos\dfrac1s\to\cos0=1$.</p>
              <span class="step-label">Passo 2 — condição necessária</span>
              <p>Como o termo geral tende a $1\ne0$, a condição necessária de convergência falha.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '11',
            statement: String.raw`$\displaystyle\sum_{k=1}^\infty\frac{2+\cos k}{k}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — cota inferior para o numerador</span>
              <p>Como $\cos k\ge-1$ para todo $k$, temos $2+\cos k\ge1$.</p>
              <span class="step-label">Passo 2 — comparação direta</span>
              <p>Logo $\dfrac{2+\cos k}k\ge\dfrac1k$ para todo $k\ge1$.</p>
              <span class="step-label">Passo 3 — aplicar o critério da comparação</span>
              <p>Como $\sum\dfrac1k$ (harmônica) diverge e o termo geral da série dada é sempre $\ge$ o da harmônica, pelo critério da comparação a série dada também diverge.</p>
              <div class="final">Diverge.</div>
            `
          }
        ]
      },
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
          <p>Para cada série abaixo, decida se ela é convergente ou divergente, justificando com um critério explícito (termo geral, comparação, comparação no limite, razão, raiz, integral ou $p$-série). Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\displaystyle\sum_{n=3}^\infty\frac1{\sqrt{n^2-4}}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a ordem de grandeza</span>
              <p>Para $n\ge3$ os termos são positivos. Dentro da raiz, $n^2-4$ é essencialmente $n^2$, então esperamos $a_n$ parecido com $1/n$. Isso sugere <strong>comparação no limite</strong> com a série harmônica $\sum 1/n$.</p>
              <span class="step-label">Passo 2 — calcular o limite do quociente</span>
              <p>Com $b_n=\dfrac1n$:</p>
              $$\lim_{n\to\infty}\frac{a_n}{b_n}=\lim_{n\to\infty}\frac{n}{\sqrt{n^2-4}}=\lim_{n\to\infty}\frac{n}{n\sqrt{1-\dfrac4{n^2}}}=\lim_{n\to\infty}\frac1{\sqrt{1-\dfrac4{n^2}}}=1.$$
              <span class="step-label">Passo 3 — aplicar o critério</span>
              <p>O limite é finito e diferente de zero ($L=1$), logo as duas séries têm o <em>mesmo</em> comportamento. Como $\sum 1/n$ (harmônica, $p$-série com $p=1$) diverge, a nossa também diverge.</p>
              <p>Alternativa direta: $\sqrt{n^2-4}&lt;\sqrt{n^2}=n$, portanto $\dfrac1{\sqrt{n^2-4}}&gt;\dfrac1n$, e a comparação direta com a harmônica já basta.</p>
              <div class="final">Diverge (comparação no limite com a série harmônica).</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\frac{\arctan n}{n^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — limitar o numerador</span>
              <p>A função $\arctan$ é crescente e tem assíntota horizontal: para todo $n\ge2$,</p>
              $$0&lt;\arctan n&lt;\frac\pi2 .$$
              <p>Ou seja, o numerador é apenas um fator <em>limitado</em>; quem manda no tamanho do termo é o $n^2$.</p>
              <span class="step-label">Passo 2 — comparação direta</span>
              <p>Dividindo a desigualdade acima por $n^2&gt;0$:</p>
              $$0&lt;\frac{\arctan n}{n^2}&lt;\frac\pi2\cdot\frac1{n^2}.$$
              <span class="step-label">Passo 3 — concluir pela $p$-série</span>
              <p>$\sum 1/n^2$ é $p$-série com $p=2&gt;1$, logo converge; multiplicar por $\pi/2$ não altera isso. Uma série de termos positivos dominada por uma série convergente converge.</p>
              <div class="final">Converge (comparação direta com $\tfrac\pi2\sum 1/n^2$).</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{e^{1/n}}{n^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — limitar o numerador</span>
              <p>Para $n\ge1$ temos $0&lt;\dfrac1n\le1$, e como $x\mapsto e^x$ é crescente:</p>
              $$1&lt;e^{1/n}\le e^{1}=e.$$
              <p>De novo o numerador é só um fator limitado (e ainda tende a $e^0=1$).</p>
              <span class="step-label">Passo 2 — comparação direta</span>
              $$0&lt;\frac{e^{1/n}}{n^2}\le\frac{e}{n^2}.$$
              <span class="step-label">Passo 3 — concluir</span>
              <p>$\sum e/n^2=e\sum 1/n^2$ converge ($p=2&gt;1$). Pelo critério da comparação, a série dada converge.</p>
              <div class="final">Converge (comparação direta com $e\sum 1/n^2$).</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{2^n}{(n!)^\lambda}$, com $\lambda&gt;0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher o critério</span>
              <p>Aparecem fatorial e exponencial: é o cenário clássico do <strong>critério da razão</strong> (D'Alembert), porque a razão simplifica muito.</p>
              <span class="step-label">Passo 2 — calcular a razão</span>
              $$\frac{a_{n+1}}{a_n}=\frac{2^{n+1}}{\bigl((n+1)!\bigr)^\lambda}\cdot\frac{(n!)^\lambda}{2^n}=2\left(\frac{n!}{(n+1)!}\right)^{\lambda}=\frac{2}{(n+1)^{\lambda}}.$$
              <span class="step-label">Passo 3 — tomar o limite</span>
              <p>Como $\lambda&gt;0$, temos $(n+1)^\lambda\to+\infty$, logo</p>
              $$L=\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=\lim_{n\to\infty}\frac{2}{(n+1)^\lambda}=0&lt;1.$$
              <span class="step-label">Passo 4 — conclusão</span>
              <p>Razão com limite $L=0&lt;1$ garante convergência (absoluta), e isso vale para <em>qualquer</em> $\lambda&gt;0$ — o expoente só muda a velocidade com que a razão vai a zero.</p>
              <div class="final">Converge para todo $\lambda&gt;0$ (critério da razão, $L=0$).</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{(2n)!}{(n!)^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar o termo geral</span>
              <p>$a_n=\dfrac{(2n)!}{(n!)^2}=\dbinom{2n}{n}$, o coeficiente binomial central. Ele é um número inteiro que cresce rapidamente — já é um sinal de alerta.</p>
              <span class="step-label">Passo 2 — testar o termo geral</span>
              <p>Na expansão $4^n=(1+1)^{2n}=\sum_{k=0}^{2n}\binom{2n}{k}$ há $2n+1$ parcelas e a maior delas é justamente $\binom{2n}{n}$. Logo</p>
              $$a_n=\binom{2n}{n}\ge\frac{4^n}{2n+1}\longrightarrow+\infty,$$
              <p>pois a exponencial $4^n$ domina qualquer polinômio.</p>
              <span class="step-label">Passo 3 — conclusão pelo critério do termo geral</span>
              <p>Como $a_n\not\to0$ (de fato $a_n\to+\infty$), a condição necessária de convergência falha.</p>
              <p>Confirmação pela razão: $\dfrac{a_{n+1}}{a_n}=\dfrac{(2n+2)!}{\bigl((n+1)!\bigr)^2}\cdot\dfrac{(n!)^2}{(2n)!}=\dfrac{(2n+1)(2n+2)}{(n+1)^2}=\dfrac{2(2n+1)}{n+1}\to4&gt;1$.</p>
              <div class="final">Diverge (o termo geral não tende a zero; a razão tende a $4&gt;1$).</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\frac{\ln n}n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — comparar com a harmônica</span>
              <p>Para $n\ge3$ vale $\ln n\ge\ln3&gt;1$. Logo, a partir de $n=3$,</p>
              $$\frac{\ln n}{n}&gt;\frac1n&gt;0 .$$
              <span class="step-label">Passo 2 — aplicar a comparação</span>
              <p>A série harmônica $\sum 1/n$ diverge. Uma série de termos positivos que <em>majora</em> uma série divergente também diverge (mudar finitos termos iniciais não altera a natureza).</p>
              <span class="step-label">Passo 3 — verificação pelo teste da integral</span>
              <p>$f(x)=\dfrac{\ln x}{x}$ é positiva e decrescente para $x&gt;e$, e</p>
              $$\int_2^{\infty}\frac{\ln x}{x}\,dx=\left[\frac{(\ln x)^2}{2}\right]_2^{\infty}=+\infty,$$
              <p>o que confirma a divergência.</p>
              <div class="final">Diverge (comparação com a harmônica; confirmada pelo teste da integral).</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\frac1{n^{\ln n}}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reescrever a potência de expoente variável</span>
              <p>Usando $n=e^{\ln n}$:</p>
              $$n^{\ln n}=\left(e^{\ln n}\right)^{\ln n}=e^{(\ln n)^2}.$$
              <p>Repare que o expoente $(\ln n)^2$ cresce mais rápido que $c\ln n$ para <em>qualquer</em> constante $c$; ou seja, $n^{\ln n}$ acaba superando toda potência $n^c$.</p>
              <span class="step-label">Passo 2 — obter uma comparação concreta</span>
              <p>Se $n\ge e^{3}$ (isto é, $n\ge21$), então $\ln n\ge3$ e portanto $(\ln n)^2\ge3\ln n$. Assim</p>
              $$n^{\ln n}=e^{(\ln n)^2}\ge e^{3\ln n}=n^{3}\quad\Longrightarrow\quad 0&lt;\frac1{n^{\ln n}}\le\frac1{n^{3}}.$$
              <span class="step-label">Passo 3 — concluir pela $p$-série</span>
              <p>$\sum 1/n^3$ converge ($p=3&gt;1$). Pela comparação direta (válida de $n\ge21$ em diante, e os termos anteriores são em número finito), a série dada converge.</p>
              <div class="final">Converge (comparação com a $p$-série $\sum 1/n^3$).</div>
            `
          },
          {
            label: '8',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{\sqrt[3]{n+2}}{\sqrt[4]{n^3+3}\,\sqrt[5]{n^3+5}}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — extrair a potência dominante de cada fator</span>
              $$\sqrt[3]{n+2}=n^{1/3}\left(1+\tfrac2n\right)^{1/3},\quad \sqrt[4]{n^3+3}=n^{3/4}\left(1+\tfrac3{n^3}\right)^{1/4},\quad \sqrt[5]{n^3+5}=n^{3/5}\left(1+\tfrac5{n^3}\right)^{1/5}.$$
              <span class="step-label">Passo 2 — somar os expoentes</span>
              <p>O expoente de $n$ no termo geral é</p>
              $$\frac13-\frac34-\frac35=\frac{20-45-36}{60}=-\frac{61}{60}.$$
              <p>Logo o candidato natural para comparação é $b_n=n^{-61/60}$.</p>
              <span class="step-label">Passo 3 — comparação no limite</span>
              <p>Todos os fatores entre parênteses tendem a $1$, portanto</p>
              $$\lim_{n\to\infty}\frac{a_n}{b_n}=\lim_{n\to\infty}\frac{\left(1+\tfrac2n\right)^{1/3}}{\left(1+\tfrac3{n^3}\right)^{1/4}\left(1+\tfrac5{n^3}\right)^{1/5}}=1,$$
              <p>limite finito e não nulo: as duas séries têm o mesmo comportamento.</p>
              <span class="step-label">Passo 4 — conclusão</span>
              <p>$\sum n^{-61/60}$ é $p$-série com $p=\dfrac{61}{60}\approx1{,}0167&gt;1$, logo converge. (Convergência bem "apertada": bastaria $p\le1$ para divergir.)</p>
              <div class="final">Converge (comparação no limite com a $p$-série de $p=61/60&gt;1$).</div>
            `
          },
          {
            label: '9',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\left(1-\cos\frac1n\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — estimar $1-\cos x$ perto de $0$</span>
              <p>Como $x=\dfrac1n\to0$, usamos a identidade $1-\cos x=2\sin^2\!\dfrac x2$ (ou o desenvolvimento de Taylor $\cos x=1-\tfrac{x^2}2+O(x^4)$), que dá</p>
              $$1-\cos x\sim\frac{x^2}{2}\quad (x\to0)\qquad\Longrightarrow\qquad 1-\cos\frac1n\sim\frac1{2n^2}.$$
              <span class="step-label">Passo 2 — comparação no limite com $\sum 1/n^2$</span>
              <p>Tomando $b_n=\dfrac1{n^2}$ e usando $\lim_{x\to0}\dfrac{1-\cos x}{x^2}=\dfrac12$ (L'Hôpital duas vezes, ou a identidade acima):</p>
              $$\lim_{n\to\infty}\frac{1-\cos\frac1n}{\frac1{n^2}}=\lim_{x\to0^+}\frac{1-\cos x}{x^2}=\frac12 .$$
              <span class="step-label">Passo 3 — conclusão</span>
              <p>O limite $L=\tfrac12$ é finito e positivo; os termos são positivos (pois $0&lt;\tfrac1n\le1&lt;\pi$, logo $\cos\tfrac1n&lt;1$). Como $\sum 1/n^2$ converge ($p=2&gt;1$), a série dada converge.</p>
              <div class="final">Converge (comparação no limite com $\sum 1/n^2$, razão $1/2$).</div>
            `
          },
          {
            label: '10',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\frac1{(\ln n)^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher o critério</span>
              <p>O termo geral é uma potência de expoente $n$ inteiro: $a_n=\left(\dfrac1{\ln n}\right)^{n}$. Isso pede o <strong>critério da raiz</strong> (Cauchy), que cancela o expoente.</p>
              <span class="step-label">Passo 2 — extrair a raiz $n$-ésima</span>
              $$\sqrt[n]{a_n}=\sqrt[n]{\frac1{(\ln n)^n}}=\frac1{\ln n}.$$
              <span class="step-label">Passo 3 — tomar o limite e concluir</span>
              <p>Como $\ln n\to+\infty$,</p>
              $$L=\lim_{n\to\infty}\sqrt[n]{a_n}=\lim_{n\to\infty}\frac1{\ln n}=0&lt;1 .$$
              <p>Raiz com $L&lt;1$ implica convergência. (Concretamente: para $n\ge e^2$ temos $\ln n\ge2$, logo $a_n\le 2^{-n}$, e a geométrica de razão $1/2$ converge.)</p>
              <div class="final">Converge (critério da raiz, $L=0&lt;1$).</div>
            `
          },
          {
            label: '11',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\frac{\ln n}{n^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — verificar as hipóteses do teste da integral</span>
              <p>Seja $f(x)=\dfrac{\ln x}{x^2}$ em $[2,\infty)$. Ela é contínua e positiva; além disso</p>
              $$f'(x)=\frac{\tfrac1x\cdot x^2-\ln x\cdot 2x}{x^4}=\frac{1-2\ln x}{x^3}&lt;0\quad\text{para }x&gt;e^{1/2}\approx1{,}65,$$
              <p>ou seja, $f$ é decrescente em todo o intervalo $[2,\infty)$.</p>
              <span class="step-label">Passo 2 — calcular a integral imprópria</span>
              <p>Integração por partes com $u=\ln x$, $dv=x^{-2}dx$, $v=-\dfrac1x$:</p>
              $$\int\frac{\ln x}{x^2}\,dx=-\frac{\ln x}{x}+\int\frac{dx}{x^2}=-\frac{\ln x}{x}-\frac1x+C.$$
              <p>Como $\dfrac{\ln x}{x}\to0$ e $\dfrac1x\to0$ quando $x\to\infty$,</p>
              $$\int_2^{\infty}\frac{\ln x}{x^2}\,dx=0-\left(-\frac{\ln2}{2}-\frac12\right)=\frac{1+\ln2}{2}\approx0{,}847 .$$
              <span class="step-label">Passo 3 — conclusão</span>
              <p>A integral é finita, logo a série converge. (Comparação alternativa: $\ln n\le C\,n^{1/4}$ para $n$ grande, de modo que $a_n\le C\,n^{-7/4}$ com $7/4&gt;1$.)</p>
              <div class="final">Converge (teste da integral: $\int_2^\infty \ln x/x^2\,dx=(1+\ln2)/2&lt;\infty$).</div>
            `
          },
          {
            label: '12',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\frac{\ln n}{n^p}$, com $p&gt;0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — enquadrar o problema</span>
              <p>Este item generaliza os itens 6 ($p=1$) e 11 ($p=2$). O fator $\ln n$ cresce, mas <em>mais devagar que qualquer potência</em> $n^\varepsilon$ com $\varepsilon&gt;0$; por isso ele só é decisivo no caso limítrofe $p=1$.</p>
              <span class="step-label">Caso 1 — $p&gt;1$: converge</span>
              <p>Escolha $\varepsilon&gt;0$ pequeno o bastante para que $p-\varepsilon&gt;1$ (por exemplo $\varepsilon=\tfrac{p-1}2$). Como $\dfrac{\ln n}{n^{\varepsilon}}\to0$, existe $C&gt;0$ com $\ln n\le C\,n^{\varepsilon}$ para todo $n\ge2$. Então</p>
              $$0&lt;\frac{\ln n}{n^{p}}\le\frac{C}{n^{\,p-\varepsilon}},$$
              <p>e $\sum n^{-(p-\varepsilon)}$ converge, pois $p-\varepsilon&gt;1$. Comparação direta encerra o caso.</p>
              <span class="step-label">Caso 2 — $0&lt;p\le1$: diverge</span>
              <p>Para $n\ge3$ vale $\ln n&gt;1$ e $n^{p}\le n$, logo</p>
              $$\frac{\ln n}{n^{p}}&gt;\frac1{n^{p}}\ge\frac1n .$$
              <p>Como $\sum 1/n$ diverge, a comparação direta dá divergência.</p>
              <span class="step-label">Passo 3 — verificação pelo teste da integral</span>
              <p>Para $p\ne1$, $\displaystyle\int_2^{\infty}\frac{\ln x}{x^{p}}dx$ converge exatamente quando $p&gt;1$ (o cálculo por partes produz $\dfrac{x^{1-p}}{1-p}\left(\ln x-\dfrac1{1-p}\right)$, finito no infinito só se $1-p&lt;0$); para $p=1$ a integral vale $(\ln x)^2/2\to\infty$.</p>
              <div class="final">Converge se $p&gt;1$; diverge se $0&lt;p\le1$.</div>
            `
          },
          {
            label: '13',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\ln\!\left(1+\frac1{n^p}\right)$, com $p&gt;0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — usar a estimativa $\ln(1+x)\sim x$</span>
              <p>Como $p&gt;0$, temos $x_n=\dfrac1{n^p}\to0^+$, e vale o limite fundamental</p>
              $$\lim_{x\to0}\frac{\ln(1+x)}{x}=1 .$$
              <p>Os termos são positivos, pois $\ln(1+x)&gt;0$ para $x&gt;0$.</p>
              <span class="step-label">Passo 2 — comparação no limite com a $p$-série</span>
              <p>Tomando $b_n=\dfrac1{n^p}$:</p>
              $$\lim_{n\to\infty}\frac{\ln\!\left(1+\dfrac1{n^p}\right)}{\dfrac1{n^p}}=\lim_{x\to0^+}\frac{\ln(1+x)}{x}=1 ,$$
              <p>limite finito e não nulo, logo as duas séries convergem ou divergem juntas.</p>
              <span class="step-label">Passo 3 — conclusão pela $p$-série</span>
              <p>$\sum 1/n^{p}$ converge se $p&gt;1$ e diverge se $0&lt;p\le1$; o mesmo vale para a série dada.</p>
              <p>Observação útil: para $p\le1$ dá para ver a divergência "à mão" no caso $p=1$, já que $\ln\!\left(1+\tfrac1n\right)=\ln(n+1)-\ln n$ é telescópica e a soma parcial vale $\ln(N+1)\to\infty$.</p>
              <div class="final">Converge se $p&gt;1$; diverge se $0&lt;p\le1$.</div>
            `
          },
          {
            label: '14',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\sqrt n\,\ln\!\left(\frac{n+1}n\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reescrever o logaritmo</span>
              $$a_n=\sqrt n\,\ln\!\left(\frac{n+1}{n}\right)=\sqrt n\,\ln\!\left(1+\frac1n\right)&gt;0 .$$
              <span class="step-label">Passo 2 — estimar a ordem do termo</span>
              <p>Como $\ln(1+x)\sim x$ para $x\to0$, temos $\ln\!\left(1+\tfrac1n\right)\sim\tfrac1n$, logo</p>
              $$a_n\sim\sqrt n\cdot\frac1n=\frac1{\sqrt n}=n^{-1/2}.$$
              <span class="step-label">Passo 3 — comparação no limite</span>
              <p>Com $b_n=n^{-1/2}$:</p>
              $$\lim_{n\to\infty}\frac{a_n}{b_n}=\lim_{n\to\infty}\sqrt n\,\ln\!\left(1+\frac1n\right)\cdot\sqrt n=\lim_{n\to\infty}n\,\ln\!\left(1+\frac1n\right)=1,$$
              <p>pois $n\ln(1+1/n)=\ln\!\left(1+\tfrac1n\right)^{n}\to\ln e=1$.</p>
              <span class="step-label">Passo 4 — conclusão</span>
              <p>$\sum n^{-1/2}$ é $p$-série com $p=\tfrac12\le1$, portanto diverge; pelo critério, a série dada também diverge. (Note que o termo geral tende a $0$ — isso nunca prova convergência.)</p>
              <div class="final">Diverge (comparação no limite com $\sum n^{-1/2}$, $p=1/2\le1$).</div>
            `
          },
          {
            label: '15',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{n!\,3^n}{n^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — aplicar o critério da razão</span>
              <p>Há fatorial, exponencial e $n^n$: a razão é o caminho mais limpo.</p>
              $$\frac{a_{n+1}}{a_n}=\frac{(n+1)!\,3^{n+1}}{(n+1)^{n+1}}\cdot\frac{n^n}{n!\,3^n}=3\,(n+1)\cdot\frac{n^n}{(n+1)^{n+1}}=3\left(\frac{n}{n+1}\right)^{n}.$$
              <span class="step-label">Passo 2 — calcular o limite</span>
              <p>Escrevendo $\left(\dfrac{n}{n+1}\right)^{n}=\dfrac1{\left(1+\tfrac1n\right)^{n}}$ e usando $\left(1+\tfrac1n\right)^{n}\to e$:</p>
              $$L=\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=\frac3e\approx1{,}104&gt;1 .$$
              <span class="step-label">Passo 3 — conclusão</span>
              <p>Razão com $L&gt;1$ implica divergência; mais do que isso, garante que $a_n\to+\infty$, de modo que o termo geral nem sequer tende a zero.</p>
              <div class="final">Diverge (critério da razão, $L=3/e\approx1{,}10&gt;1$).</div>
            `
          },
          {
            label: '16',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{n!\,e^n}{n^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — tentar a razão (e ver que ela falha)</span>
              <p>Repetindo a conta do item anterior com $3$ trocado por $e$:</p>
              $$\frac{a_{n+1}}{a_n}=e\left(\frac{n}{n+1}\right)^{n}=\frac{e}{\left(1+\tfrac1n\right)^{n}}\longrightarrow\frac ee=1 .$$
              <p>Limite igual a $1$: o critério da razão é <strong>inconclusivo</strong>. Precisamos de outra ideia.</p>
              <span class="step-label">Passo 2 — observar que a razão é sempre maior que 1</span>
              <p>Sabe-se que $\left(1+\tfrac1n\right)^{n}&lt;e$ para todo $n\ge1$ (a sequência é crescente e converge a $e$ por baixo). Logo</p>
              $$\frac{a_{n+1}}{a_n}=\frac{e}{\left(1+\tfrac1n\right)^{n}}&gt;1\quad\text{para todo }n,$$
              <p>isto é, $(a_n)$ é estritamente <em>crescente</em>.</p>
              <span class="step-label">Passo 3 — critério do termo geral</span>
              <p>Sendo crescente, $a_n\ge a_1=\dfrac{1!\,e^1}{1^1}=e&gt;0$ para todo $n$, portanto $a_n\not\to0$. A condição necessária de convergência falha.</p>
              <p>Refinamento por Stirling ($n!\sim\sqrt{2\pi n}\,(n/e)^n$): $a_n=\dfrac{n!\,e^n}{n^n}\sim\sqrt{2\pi n}\to+\infty$, confirmando o diagnóstico.</p>
              <div class="final">Diverge (o termo geral não tende a zero; de fato $a_n\sim\sqrt{2\pi n}\to\infty$).</div>
            `
          },
          {
            label: '17',
            statement: String.raw`$\displaystyle\sum_{k=1}^\infty\frac{e^{1/k}}{k^k}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher o critério da raiz</span>
              <p>O denominador é $k^k$, uma potência de expoente $k$: extrair a raiz $k$-ésima é o movimento natural.</p>
              <span class="step-label">Passo 2 — calcular a raiz $k$-ésima</span>
              $$\sqrt[k]{a_k}=\frac{\left(e^{1/k}\right)^{1/k}}{\left(k^{k}\right)^{1/k}}=\frac{e^{1/k^{2}}}{k}.$$
              <span class="step-label">Passo 3 — tomar o limite</span>
              <p>Como $\dfrac1{k^2}\to0$, o numerador tende a $e^{0}=1$, enquanto o denominador vai a $+\infty$:</p>
              $$L=\lim_{k\to\infty}\sqrt[k]{a_k}=\lim_{k\to\infty}\frac{e^{1/k^{2}}}{k}=0&lt;1 .$$
              <span class="step-label">Passo 4 — conclusão</span>
              <p>Raiz com $L=0&lt;1$: a série converge (e muito rápido — para $k\ge3$ já vale $a_k\le e/3^{k}$).</p>
              <div class="final">Converge (critério da raiz, $L=0&lt;1$).</div>
            `
          },
          {
            label: '18',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty3^n\left(\frac n{n+1}\right)^{n^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — usar o critério da raiz</span>
              <p>Os dois fatores têm expoentes múltiplos de $n$ ($n$ e $n^2$), então a raiz $n$-ésima limpa a expressão:</p>
              $$\sqrt[n]{a_n}=\sqrt[n]{3^{n}}\cdot\sqrt[n]{\left(\frac{n}{n+1}\right)^{n^{2}}}=3\left(\frac{n}{n+1}\right)^{n}.$$
              <span class="step-label">Passo 2 — calcular o limite</span>
              $$L=\lim_{n\to\infty}3\left(\frac{n}{n+1}\right)^{n}=\lim_{n\to\infty}\frac{3}{\left(1+\tfrac1n\right)^{n}}=\frac3e\approx1{,}104&gt;1 .$$
              <span class="step-label">Passo 3 — conclusão</span>
              <p>Raiz com $L&gt;1$ implica divergência; nesse caso o critério ainda informa que $|a_n|\to+\infty$, ou seja, o termo geral não tende a zero.</p>
              <div class="final">Diverge (critério da raiz, $L=3/e\approx1{,}10&gt;1$).</div>
            `
          },
          {
            label: '19',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{n^3}{(\ln2)^n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — enxergar a base do expoente</span>
              <p>Como $0&lt;\ln2\approx0{,}693&lt;1$, temos $(\ln2)^{n}\to0^{+}$. Dividir por algo que tende a zero <em>aumenta</em> o termo: escrevendo</p>
              $$a_n=n^{3}\left(\frac1{\ln2}\right)^{n},\qquad \frac1{\ln2}\approx1{,}443&gt;1,$$
              <p>vê-se que é um polinômio multiplicado por uma exponencial de base maior que $1$.</p>
              <span class="step-label">Passo 2 — critério da razão</span>
              $$\frac{a_{n+1}}{a_n}=\frac{(n+1)^{3}}{(\ln2)^{n+1}}\cdot\frac{(\ln2)^{n}}{n^{3}}=\left(\frac{n+1}{n}\right)^{3}\cdot\frac1{\ln2}\longrightarrow 1^{3}\cdot\frac1{\ln2}=\frac1{\ln2}\approx1{,}443&gt;1 .$$
              <span class="step-label">Passo 3 — conclusão</span>
              <p>Razão com $L&gt;1$: diverge. Basta, aliás, o critério do termo geral: $a_n=n^3(1/\ln2)^n\to+\infty$, pois a exponencial de base $&gt;1$ domina o polinômio.</p>
              <div class="final">Diverge (critério da razão, $L=1/\ln2\approx1{,}44&gt;1$; o termo geral tende a $+\infty$).</div>
            `
          }
        ]
      },
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
          <p>Decida se a série converge absolutamente, condicionalmente, ou diverge. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty(-1)^n\frac1{\sqrt n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — testar convergência absoluta</span>
              <p>$\sum\left|(-1)^n\tfrac1{\sqrt n}\right|=\sum\dfrac1{\sqrt n}$ é uma $p$-série com $p=\tfrac12\le1$: diverge.</p>
              <span class="step-label">Passo 2 — testar o critério de Leibniz</span>
              <p>$b_n=1/\sqrt n$ é decrescente e $b_n\to0$: a série alternada converge.</p>
              <div class="final">Condicionalmente convergente.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac1{n^{3/2}}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — testar convergência absoluta</span>
              <p>$\sum\dfrac1{n^{3/2}}$ é uma $p$-série com $p=\tfrac32&gt;1$: converge.</p>
              <span class="step-label">Passo 2 — concluir</span>
              <p>Como a série dos valores absolutos já converge, a série original converge absolutamente (não é necessário checar Leibniz).</p>
              <div class="final">Absolutamente convergente.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty(-1)^n\frac{2n^2+1}{n^3+3}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — assintótica do termo</span>
              <p>$b_n=\dfrac{2n^2+1}{n^3+3}\sim\dfrac2n$ para $n$ grande.</p>
              <span class="step-label">Passo 2 — critério de Leibniz</span>
              <p>Verifica-se que $b_n\to0$ e $(b_n)$ é decrescente (para $n$ grande): a série alternada converge.</p>
              <span class="step-label">Passo 3 — convergência absoluta</span>
              <p>Como $\lim_{n\to\infty}\dfrac{b_n}{1/n}=2\ne0$, por comparação no limite com a harmônica $\sum1/n$ (que diverge), $\sum b_n$ diverge.</p>
              <div class="final">Condicionalmente convergente.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty(-1)^n\frac1{\ln n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — critério de Leibniz</span>
              <p>$b_n=1/\ln n$ é decrescente para $n\ge2$ e $b_n\to0$: a série alternada converge.</p>
              <span class="step-label">Passo 2 — convergência absoluta</span>
              <p>Para $n\ge3$, $\ln n&lt;n\Rightarrow\dfrac1{\ln n}&gt;\dfrac1n$; por comparação com a harmônica (que diverge), $\sum\dfrac1{\ln n}$ diverge.</p>
              <div class="final">Condicionalmente convergente.</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty(-1)^n\frac{\ln n}n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — critério de Leibniz</span>
              <p>$b_n=\ln n/n\to0$. A função $f(x)=\ln x/x$ tem $f'(x)=\dfrac{1-\ln x}{x^2}&lt;0$ para $x&gt;e$, logo $(b_n)$ é decrescente a partir de $n=3$: a série alternada converge.</p>
              <span class="step-label">Passo 2 — convergência absoluta</span>
              <p>$\sum\dfrac{\ln n}n$ diverge (comparação: para $n\ge3$, $\ln n\ge1\Rightarrow\ln n/n\ge1/n$, e a harmônica diverge).</p>
              <div class="final">Condicionalmente convergente.</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty(-1)^n\frac1{n(\ln n)^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — testar convergência absoluta</span>
              <p>Considere $f(x)=\dfrac1{x(\ln x)^2}$, positiva, contínua e decrescente para $x\ge2$.</p>
              <span class="step-label">Passo 2 — teste da integral</span>
              <p>$$\int_2^\infty\frac{dx}{x(\ln x)^2}=\left[-\frac1{\ln x}\right]_2^\infty=\frac1{\ln2}&lt;\infty.$$</p>
              <span class="step-label">Passo 3 — concluir</span>
              <p>A integral converge, logo $\sum\dfrac1{n(\ln n)^2}$ converge; a série original converge absolutamente.</p>
              <div class="final">Absolutamente convergente.</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty(-1)^n\frac{\sqrt n}{\ln n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — analisar o termo geral</span>
              <p>$b_n=\sqrt n/\ln n\to\infty$, pois o crescimento polinomial de $\sqrt n$ domina o crescimento logarítmico de $\ln n$.</p>
              <span class="step-label">Passo 2 — condição necessária</span>
              <p>Como $b_n\not\to0$, o termo geral $(-1)^nb_n$ não tende a $0$.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '8',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty(-1)^{2n+1}\frac1{\sqrt n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — simplificar o sinal</span>
              <p>$(-1)^{2n+1}=\big[(-1)^2\big]^n\cdot(-1)^1=1^n\cdot(-1)=-1$ para todo $n$: a série <em>não</em> é alternada.</p>
              <span class="step-label">Passo 2 — identificar a série resultante</span>
              <p>A série é $-\displaystyle\sum_{n=1}^\infty\dfrac1{\sqrt n}$, uma $p$-série (a menos do sinal) com $p=\tfrac12\le1$.</p>
              <div class="final">Diverge.</div>
            `
          },
          {
            label: '9',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty(-1)^n\sin\frac1{n^p}$, $p&gt;0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — critério de Leibniz</span>
              <p>Para todo $p&gt;0$, $\tfrac1{n^p}\downarrow0$ e, como $\sin$ é crescente perto de $0$ e positiva em $(0,\pi)$, $\sin(1/n^p)&gt;0$ e decresce para $0$: a série alternada sempre converge.</p>
              <span class="step-label">Passo 2 — convergência absoluta</span>
              <p>Como $\sin(1/n^p)\sim1/n^p$ (equivalência assintótica), $\sum\sin(1/n^p)$ tem o mesmo comportamento que a $p$-série $\sum1/n^p$.</p>
              <span class="step-label">Passo 3 — separar os casos</span>
              <p>Se $p&gt;1$, a $p$-série converge, logo há convergência absoluta. Se $0&lt;p\le1$, ela diverge, mas a série alternada converge (Passo 1).</p>
              <div class="final">Absolutamente convergente se $p&gt;1$; condicionalmente convergente se $0&lt;p\le1$.</div>
            `
          },
          {
            label: '10',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty\frac{\ln n}{n^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — observar que não há sinal alternado</span>
              <p>Todos os termos $\ln n/n^2$ são positivos (não há fator $(-1)^n$): não é uma série alternada.</p>
              <span class="step-label">Passo 2 — verificar a convergência</span>
              <p>Pelo teste da integral, $\displaystyle\int_2^\infty\frac{\ln x}{x^2}\,dx$ converge (integração por partes dá um valor finito), logo a série converge.</p>
              <span class="step-label">Passo 3 — concluir</span>
              <p>Toda série de termos positivos que converge é, por definição, absolutamente convergente.</p>
              <div class="final">Absolutamente convergente.</div>
            `
          },
          {
            label: '11',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty(-1)^n\frac{\ln n}{\sqrt n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — critério de Leibniz</span>
              <p>$b_n=\ln n/\sqrt n\to0$. A função $f(x)=\ln x/\sqrt x$ tem $f'(x)=\dfrac{2-\ln x}{2x^{3/2}}&lt;0$ para $x&gt;e^2$, logo $(b_n)$ é decrescente eventualmente: a série alternada converge.</p>
              <span class="step-label">Passo 2 — convergência absoluta</span>
              <p>Para $n\ge3$, $\ln n&gt;1\Rightarrow\ln n/\sqrt n&gt;1/\sqrt n$; por comparação com a $p$-série $p=\tfrac12\le1$ (que diverge), $\sum\ln n/\sqrt n$ diverge.</p>
              <div class="final">Condicionalmente convergente.</div>
            `
          }
        ]
      },
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
          <p>Determine os valores de $x\in\mathbb R$ para os quais as séries convergem. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty x^n(1+x^n)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — separar em duas geométricas</span>
              <p>$a_n=x^n+x^{2n}=x^n+(x^2)^n$. Se cada parcela convergir isoladamente, podemos somar $\sum x^n$ e $\sum(x^2)^n$.</p>
              <span class="step-label">Passo 2 — condição de cada geométrica</span>
              <p>$\sum x^n$ converge para $|x|&lt;1$; $\sum(x^2)^n$ converge para $|x^2|&lt;1\Leftrightarrow|x|&lt;1$ — a mesma condição, portanto redundante.</p>
              <span class="step-label">Passo 3 — interseção</span>
              <p>A condição final é simplesmente $|x|&lt;1$.</p>
              <div class="final">$\{x\in\mathbb R:|x|&lt;1\}$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty x^n\cos\!\left(\frac{n\pi}2\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — valores de $\cos(n\pi/2)$</span>
              <p>Como no item XI.4, $\cos(n\pi/2)$ é não nulo apenas para $n$ par, $n=2m$, valendo $(-1)^m$.</p>
              <span class="step-label">Passo 2 — reindexar</span>
              <p>$$\sum_{n=1}^\infty x^n\cos\left(\frac{n\pi}2\right)=\sum_{m\ge1}x^{2m}(-1)^m=\sum_{m\ge1}(-x^2)^m,$$ geométrica de razão $-x^2$.</p>
              <span class="step-label">Passo 3 — condição de convergência</span>
              <p>Converge sse $|-x^2|&lt;1\Leftrightarrow|x|&lt;1$.</p>
              <div class="final">$\{x\in\mathbb R:|x|&lt;1\}$</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$\displaystyle\sum_{n=2}^\infty(-1)^{n+1}\frac1{n^{\ln x}}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — domínio</span>
              <p>É preciso $x&gt;0$ para que $\ln x$ esteja definido (expoente de $n^{\ln x}$).</p>
              <span class="step-label">Passo 2 — reconhecer uma "$p$-série alternada" com $p=\ln x$</span>
              <p>Se $\ln x&gt;0$ (isto é, $x&gt;1$), então $1/n^{\ln x}\downarrow0$ e o critério de Leibniz garante a convergência.</p>
              <span class="step-label">Passo 3 — descartar $0&lt;x\le1$</span>
              <p>Se $x=1$: $\ln x=0$ e o termo geral é $1/n^0=1\not\to0$. Se $0&lt;x&lt;1$: $\ln x&lt;0$ e $1/n^{\ln x}=n^{-\ln x}\to\infty$. Em ambos os casos o termo geral não tende a $0$: diverge.</p>
              <div class="final">$\{x\in\mathbb R:x&gt;1\}$</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty n!\,x^n$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — teste da razão</span>
              <p>$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{(n+1)!\,|x|^{n+1}}{n!\,|x|^n}=(n+1)|x|.$$</p>
              <span class="step-label">Passo 2 — limite para $x\ne0$</span>
              <p>Se $x\ne0$, $(n+1)|x|\to\infty&gt;1$: a série diverge para todo $x\ne0$.</p>
              <span class="step-label">Passo 3 — caso $x=0$</span>
              <p>Se $x=0$, todos os termos ($n\ge1$) são nulos e a soma é trivialmente $0$: converge.</p>
              <div class="final">$\{x=0\}$</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$\displaystyle\sum_{n=1}^\infty\left(x^n+\frac1{2^nx^n}\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — domínio</span>
              <p>É necessário $x\ne0$, pois aparece $1/x^n$.</p>
              <span class="step-label">Passo 2 — separar em duas geométricas</span>
              <p>$a_n=x^n+\left(\dfrac1{2x}\right)^n$: a primeira tem razão $x$, a segunda razão $\dfrac1{2x}$.</p>
              <span class="step-label">Passo 3 — condições de convergência de cada uma</span>
              <p>$\sum x^n$ converge sse $|x|&lt;1$. $\sum(1/(2x))^n$ converge sse $\left|\dfrac1{2x}\right|&lt;1\Leftrightarrow|x|&gt;\dfrac12$.</p>
              <span class="step-label">Passo 4 — interseção</span>
              <p>Ambas as séries precisam convergir simultaneamente.</p>
              <div class="final">$\left\{x\in\mathbb R:\tfrac12&lt;|x|&lt;1\right\}$</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$\displaystyle\sum_{n=0}^\infty(-1)^{n+1}e^{-n\sin x}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a geométrica</span>
              <p>$(-1)^{n+1}e^{-n\sin x}=-\big(-e^{-\sin x}\big)^n$: geométrica de razão $r=-e^{-\sin x}$.</p>
              <span class="step-label">Passo 2 — condição de convergência</span>
              <p>Converge sse $|r|&lt;1\Leftrightarrow e^{-\sin x}&lt;1\Leftrightarrow-\sin x&lt;0\Leftrightarrow\sin x&gt;0$.</p>
              <span class="step-label">Passo 3 — resolver a desigualdade trigonométrica</span>
              <p>$\sin x&gt;0$ exatamente nos intervalos $(2k\pi,(2k+1)\pi)$, $k\in\mathbb Z$.</p>
              <div class="final">$\{x\in\mathbb R:2k\pi&lt;x&lt;(2k+1)\pi,\ k\in\mathbb Z\}$</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$\displaystyle\sum_{n=0}^\infty\frac{2n+1}{(n+1)^5}x^{2n}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituição $y=x^2$</span>
              <p>A série só tem potências pares; escreva $a_n=\dfrac{2n+1}{(n+1)^5}y^n$, com $y=x^2\ge0$.</p>
              <span class="step-label">Passo 2 — teste da razão em $y$</span>
              <p>$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{2n+3}{2n+1}\cdot\left(\frac{n+1}{n+2}\right)^5\cdot y\ \longrightarrow\ y.$$</p>
              <span class="step-label">Passo 3 — convergência para $y&lt;1$ e divergência para $y&gt;1$</span>
              <p>Logo a série converge para $y&lt;1\Leftrightarrow|x|&lt;1$ e diverge para $y&gt;1$.</p>
              <span class="step-label">Passo 4 — testar a borda $y=1$ (isto é, $|x|=1$)</span>
              <p>Nesse caso o termo vira $\dfrac{2n+1}{(n+1)^5}\sim\dfrac2{n^4}$, comparável a uma $p$-série com $p=4&gt;1$: converge também na borda.</p>
              <div class="final">$\{x\in\mathbb R:|x|\le1\}$</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p1-t7', number: '07',
    title: 'Prova P1 — 2025',
    subtitle: '— prova antiga resolvida (Tipo 13)',
    intro: String.raw`
      <p>Esta é a <strong>P1 aplicada em 2025</strong> (Tipo 13), com as 12 questões de múltipla escolha transcritas e resolvidas passo a passo. Todo o conteúdo cobrado aqui está nos tópicos 01 a 06 — use esta prova como <strong>simulado de fechamento</strong>: tente resolver cada questão antes de abrir a resolução.</p>
      <p>Mapa rápido do que a prova cobrou: <strong>limites de sequências</strong> (Q1, Q10), <strong>séries telescópicas e dízimas</strong> (Q6, Q9), <strong>critérios de comparação, integral e razão</strong> (Q5, Q7, Q8, Q11), <strong>convergência absoluta × condicional</strong> (Q2, Q3, Q12) e <strong>séries de potências</strong> (Q4).</p>
      <p>Observação sobre estratégia de prova: em quase metade das questões o caminho mais rápido é o <strong>teste do termo geral</strong> ($a_n\not\to0\Rightarrow$ diverge) ou o reconhecimento imediato de uma <strong>$p$-série</strong>. Comece sempre por aí antes de partir para razão, raiz ou integral.</p>
    `,
    exercises: [

      {
        ref: 'P1 2025 · Questão 1', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Calcule $\displaystyle\lim_{n\to\infty}\left(\frac{3n+12}{3n+3}\right)^{n}$.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$e^3$</span></li>
            <li><span class="key">B</span><span>$1$</span></li>
            <li><span class="key">C</span><span>$+\infty$</span></li>
            <li><span class="key">D</span><span>$e$</span></li>
            <li><span class="key">E</span><span>$0$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — simplificar a base</span>
          <p>Divida numerador e denominador por $3$:</p>
          $$\frac{3n+12}{3n+3}=\frac{n+4}{n+1}.$$
          <p>A base tende a $1$ e o expoente a $+\infty$: é a indeterminação $1^{\infty}$, que pede o limite notável $\left(1+\tfrac{c}{n}\right)^n\to e^{c}$.</p>
          <span class="step-label">Passo 2 — separar em duas expressões notáveis</span>
          <p>Dividindo numerador e denominador por $n$:</p>
          $$\left(\frac{n+4}{n+1}\right)^{n}=\frac{\left(1+\dfrac{4}{n}\right)^{n}}{\left(1+\dfrac{1}{n}\right)^{n}}.$$
          <span class="step-label">Passo 3 — aplicar o limite notável</span>
          <p>O numerador tende a $e^{4}$ e o denominador a $e^{1}$. Como o denominador tem limite $e\ne0$, vale a regra do quociente:</p>
          $$\lim_{n\to\infty}\left(\frac{3n+12}{3n+3}\right)^{n}=\frac{e^{4}}{e}=e^{3}.$$
          <span class="step-label">Confira por outro caminho</span>
          <p>$\dfrac{n+4}{n+1}=1+\dfrac{3}{n+1}$, logo a expressão é $\left(1+\dfrac{3}{n+1}\right)^{n+1}\cdot\left(1+\dfrac{3}{n+1}\right)^{-1}\to e^{3}\cdot1$. Mesmo resultado.</p>
          <div class="final">Alternativa <b>A</b>: $e^{3}$.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 2', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Quais das seguintes séries são <strong>condicionalmente convergentes</strong>?</p>
          <p>I. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\sqrt{n}$ &nbsp;&nbsp; II. $\displaystyle\sum_{n=3}^{\infty}\frac{(-1)^{n+1}}{n\ln n}$ &nbsp;&nbsp; III. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}$ &nbsp;&nbsp; IV. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^{4/5}}$</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas I e III são condicionalmente convergentes.</span></li>
            <li><span class="key">B</span><span>Apenas II e IV são condicionalmente convergentes.</span></li>
            <li><span class="key">C</span><span>Todas são condicionalmente convergentes.</span></li>
            <li><span class="key">D</span><span>Nenhuma é condicionalmente convergente.</span></li>
            <li><span class="key">E</span><span>Apenas I é condicionalmente convergente.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 0 — o que é preciso verificar</span>
          <p>$\sum a_n$ converge <em>condicionalmente</em> quando <strong>(i)</strong> $\sum a_n$ converge e <strong>(ii)</strong> $\sum|a_n|$ diverge. As duas condições precisam valer.</p>
          <span class="step-label">Passo 1 — eliminar I e III pelo teste do termo geral</span>
          <p>Em I, $|a_n|=\sqrt n\to+\infty$; em III, $a_n=(-1)^{n+1}$ oscila entre $1$ e $-1$. Em nenhum dos dois casos $a_n\to0$, logo <strong>ambas divergem</strong> e falham já na condição (i).</p>
          <span class="step-label">Passo 2 — item II converge (Leibniz)</span>
          <p>Com $b_n=\dfrac{1}{n\ln n}$ para $n\ge3$: $b_n&gt;0$, $b_n$ é decrescente (o denominador $n\ln n$ cresce) e $b_n\to0$. Pelo critério de Leibniz, II converge.</p>
          <span class="step-label">Passo 3 — mas não absolutamente</span>
          <p>Pelo critério da integral, com $u=\ln x$, $du=\tfrac{dx}{x}$:</p>
          $$\int_{3}^{\infty}\frac{dx}{x\ln x}=\int_{\ln 3}^{\infty}\frac{du}{u}=\Big[\ln u\Big]_{\ln 3}^{\infty}=+\infty.$$
          <p>Logo $\sum\frac{1}{n\ln n}$ diverge e <strong>II é condicionalmente convergente</strong>.</p>
          <span class="step-label">Passo 4 — item IV</span>
          <p>$b_n=n^{-4/5}$ é positiva, decrescente e tende a $0$: por Leibniz, IV converge. Já $\sum n^{-4/5}$ é $p$-série com $p=\tfrac45\le1$, portanto diverge. <strong>IV é condicionalmente convergente</strong>.</p>
          <div class="final">Alternativa <b>B</b>: apenas II e IV.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 3', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Analise a convergência das séries:</p>
          <p>I. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\left(\frac{2n+1}{3n+2}\right)^{n}$ &nbsp;&nbsp;&nbsp; II. $\displaystyle\sum_{n=2}^{\infty}\frac{(-1)^{n}}{n(\ln n)^{2}}$</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Ambas convergem absolutamente.</span></li>
            <li><span class="key">B</span><span>I converge absolutamente, II converge condicionalmente.</span></li>
            <li><span class="key">C</span><span>Ambas divergem.</span></li>
            <li><span class="key">D</span><span>I converge condicionalmente, II converge absolutamente.</span></li>
            <li><span class="key">E</span><span>I diverge, II converge absolutamente.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — item I: a $n$-ésima potência pede o teste da raiz</span>
          <p>$$\sqrt[n]{|a_n|}=\sqrt[n]{\left(\frac{2n+1}{3n+2}\right)^{n}}=\frac{2n+1}{3n+2}\ \longrightarrow\ \frac23.$$</p>
          <p>Como $\tfrac23&lt;1$, o teste da raiz garante <strong>convergência absoluta</strong> de I.</p>
          <span class="step-label">Passo 2 — item II: critério da integral no valor absoluto</span>
          <p>$\left|\dfrac{(-1)^n}{n(\ln n)^2}\right|=\dfrac{1}{n(\ln n)^2}$. A função $f(x)=\dfrac{1}{x(\ln x)^2}$ é positiva, contínua e decrescente em $[2,\infty)$. Com $u=\ln x$:</p>
          $$\int_{2}^{\infty}\frac{dx}{x(\ln x)^{2}}=\int_{\ln 2}^{\infty}\frac{du}{u^{2}}=\left[-\frac1u\right]_{\ln 2}^{\infty}=\frac{1}{\ln 2}&lt;\infty.$$
          <span class="step-label">Passo 3 — conclusão</span>
          <p>A integral converge, logo $\sum\frac{1}{n(\ln n)^2}$ converge e II <strong>converge absolutamente</strong>.</p>
          <div class="final">Alternativa <b>A</b>: ambas convergem absolutamente.</div>
          <div class="note"><b>Cuidado com o expoente do $\ln$.</b> $\sum\frac{1}{n(\ln n)^{p}}$ converge se $p&gt;1$ e diverge se $p\le1$. Por isso a série da Questão 2 (com $\ln n$, $p=1$) diverge e esta aqui (com $(\ln n)^2$, $p=2$) converge.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 4', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Quais são <strong>todos</strong> os valores de $x$ para os quais a série $\displaystyle\sum_{n=1}^{\infty}\frac{x^{n}}{5^{n}\,n}$ converge?</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Para todo $x$ real.</span></li>
            <li><span class="key">B</span><span>Para todo $x$ com $-1&lt;x&lt;1$.</span></li>
            <li><span class="key">C</span><span>Para todo $x$ com $-5\le x&lt;5$.</span></li>
            <li><span class="key">D</span><span>Para todo $x$ com $|x|\le5$.</span></li>
            <li><span class="key">E</span><span>Apenas para $x=0$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — raio de convergência pelo teste da razão</span>
          <p>Com $a_n=\dfrac{x^n}{5^n n}$:</p>
          $$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x|^{n+1}}{5^{\,n+1}(n+1)}\cdot\frac{5^{\,n}n}{|x|^{n}}=\frac{|x|}{5}\cdot\frac{n}{n+1}\ \longrightarrow\ \frac{|x|}{5}.$$
          <p>Converge absolutamente se $\tfrac{|x|}5&lt;1$, isto é $|x|&lt;5$; diverge se $|x|&gt;5$. O raio é $R=5$ e falta testar as bordas <em>separadamente</em>.</p>
          <span class="step-label">Passo 2 — borda $x=5$</span>
          <p>$$\sum_{n=1}^{\infty}\frac{5^{n}}{5^{n}n}=\sum_{n=1}^{\infty}\frac1n,$$ a série harmônica, que <strong>diverge</strong>. Logo $x=5$ fica de fora.</p>
          <span class="step-label">Passo 3 — borda $x=-5$</span>
          <p>$$\sum_{n=1}^{\infty}\frac{(-5)^{n}}{5^{n}n}=\sum_{n=1}^{\infty}\frac{(-1)^{n}}{n},$$ a série harmônica alternada: $\tfrac1n$ decresce a $0$, então Leibniz garante que ela <strong>converge</strong> (condicionalmente). Logo $x=-5$ entra.</p>
          <div class="final">Alternativa <b>C</b>: o conjunto é $[-5,\,5)$.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 5', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Analise as afirmações sobre convergência de séries:</p>
          <p><strong>I.</strong> Aplicando o critério da integral à série $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{6/5}}$ vemos que esta converge.</p>
          <p><strong>II.</strong> Comparando a série $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{3}+n^{2}+n}$ com a série $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{2}}$ podemos verificar que esta diverge.</p>
          <p><strong>III.</strong> Comparando a série $\displaystyle\sum_{n=1}^{\infty}\frac{\sqrt{n}}{\sqrt{n^{3}+1}}$ no limite com a série $\displaystyle\sum_{n=1}^{\infty}\frac{1}{\sqrt{n}}$ podemos verificar que esta diverge.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas II é verdadeira.</span></li>
            <li><span class="key">B</span><span>Apenas I e II são verdadeiras.</span></li>
            <li><span class="key">C</span><span>Apenas I e III são verdadeiras.</span></li>
            <li><span class="key">D</span><span>Todas são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Apenas II e III são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Item I — verdadeiro</span>
          <p>$f(x)=x^{-6/5}$ é positiva, contínua e decrescente em $[1,\infty)$, então vale o critério da integral:</p>
          $$\int_{1}^{\infty}x^{-6/5}\,dx=\left[\frac{x^{-1/5}}{-1/5}\right]_{1}^{\infty}=\left[-5x^{-1/5}\right]_{1}^{\infty}=0-(-5)=5&lt;\infty.$$
          <p>A integral converge, logo a série converge. (É a $p$-série com $p=\tfrac65&gt;1$.)</p>
          <span class="step-label">Item II — falso</span>
          <p>Para todo $n\ge1$ vale $n^{3}+n^{2}+n&gt;n^{2}$, logo</p>
          $$0&lt;\frac{1}{n^{3}+n^{2}+n}&lt;\frac{1}{n^{2}}.$$
          <p>Estar <em>abaixo</em> de uma série convergente prova <strong>convergência</strong>, não divergência. A conclusão do item está invertida: essa comparação mostra que a série converge.</p>
          <span class="step-label">Item III — verdadeiro (a série de fato diverge)</span>
          <p>Escreva $a_n=\dfrac{\sqrt n}{\sqrt{n^{3}+1}}$. Colocando $n^{3}$ em evidência na raiz do denominador:</p>
          $$a_n=\frac{n^{1/2}}{n^{3/2}\sqrt{1+n^{-3}}}=\frac{1}{n}\cdot\frac{1}{\sqrt{1+n^{-3}}}.$$
          <p>Comparando no limite com $b_n=\dfrac1n$:</p>
          $$\lim_{n\to\infty}\frac{a_n}{b_n}=\lim_{n\to\infty}\frac{1}{\sqrt{1+n^{-3}}}=1\in(0,\infty).$$
          <p>Como $\sum\frac1n$ diverge, a comparação no limite garante que $\sum a_n$ <strong>diverge</strong>.</p>
          <div class="final">Alternativa <b>C</b>: apenas I e III.</div>
          <div class="note"><b>Detalhe fino do item III.</b> Se a comparação for feita literalmente com $b_n=\frac{1}{\sqrt n}$, o quociente é $\frac{a_n}{b_n}=\frac{n}{\sqrt{n^3+1}}\to0$; com limite $0$ e $\sum b_n$ divergente o critério é <em>inconclusivo</em>. A conclusão do item (a série diverge) está correta, mas a comparação que a justifica é com $\frac1n$, e não com $\frac1{\sqrt n}$.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 6', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere $\displaystyle S_n=\sum_{k=1}^{n}\left(\frac1k-\frac{1}{k+1}\right)$. Calcule $\displaystyle\lim_{n\to\infty}S_n$.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\tfrac34$</span></li>
            <li><span class="key">B</span><span>Não existe o limite (a série diverge).</span></li>
            <li><span class="key">C</span><span>$1$</span></li>
            <li><span class="key">D</span><span>$\tfrac12$</span></li>
            <li><span class="key">E</span><span>$0$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — reconhecer a soma telescópica</span>
          <p>Escreva os termos em sequência: cada parcela negativa cancela a positiva seguinte.</p>
          $$S_n=\underbrace{\left(1-\frac12\right)}_{k=1}+\underbrace{\left(\frac12-\frac13\right)}_{k=2}+\cdots+\underbrace{\left(\frac1n-\frac{1}{n+1}\right)}_{k=n}.$$
          <span class="step-label">Passo 2 — sobram só as pontas</span>
          <p>$$S_n=1-\frac{1}{n+1}.$$</p>
          <span class="step-label">Passo 3 — passar ao limite</span>
          <p>Como $\dfrac{1}{n+1}\to0$, temos $S_n\to1-0=1$.</p>
          <div class="final">Alternativa <b>C</b>: $\lim S_n=1$.</div>
          <div class="note">Em séries telescópicas nunca se calcula a soma termo a termo: obtém-se a fórmula fechada de $S_n$ e só então se toma o limite. Aqui a série $\sum_{k\ge1}\left(\frac1k-\frac1{k+1}\right)$ converge e sua soma vale exatamente $1$.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 7', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Estudando a convergência de $\displaystyle\sum_{n=1}^{\infty}a_n$ por comparação no limite com a série $\displaystyle\sum_{n=1}^{\infty}b_n$, onde $a_n=\dfrac{\sqrt n}{n+1}$ e $b_n=\dfrac{1}{\sqrt n}$ para todo $n\ge1$, podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\sum a_n$ diverge pois $\lim\frac{a_n}{b_n}=1$ e $\sum b_n$ diverge.</span></li>
            <li><span class="key">B</span><span>A comparação no limite é inconclusiva pois $\lim\frac{a_n}{b_n}=+\infty$ e $\sum b_n$ converge.</span></li>
            <li><span class="key">C</span><span>$\sum a_n$ converge pois $\lim\frac{a_n}{b_n}=0$ e $\sum b_n$ converge.</span></li>
            <li><span class="key">D</span><span>$\sum a_n$ diverge pois $\lim\frac{a_n}{b_n}=+\infty$ e $\sum b_n$ diverge.</span></li>
            <li><span class="key">E</span><span>$\sum a_n$ converge pois $\lim\frac{a_n}{b_n}=1$ e $\sum b_n$ converge.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — calcular o quociente</span>
          <p>$$\frac{a_n}{b_n}=\frac{\sqrt n}{n+1}\cdot\frac{\sqrt n}{1}=\frac{n}{n+1}=\frac{1}{1+\frac1n}\ \longrightarrow\ 1.$$</p>
          <p>O limite é $1$, um número <strong>finito e não nulo</strong> — o caso "forte" da comparação no limite, em que as duas séries têm exatamente o mesmo comportamento.</p>
          <span class="step-label">Passo 2 — classificar $\sum b_n$</span>
          <p>$\sum\dfrac{1}{\sqrt n}=\sum n^{-1/2}$ é $p$-série com $p=\tfrac12\le1$: <strong>diverge</strong>.</p>
          <span class="step-label">Passo 3 — transferir a conclusão</span>
          <p>Com $\lim\frac{a_n}{b_n}=L\in(0,\infty)$, as séries $\sum a_n$ e $\sum b_n$ convergem ou divergem juntas. Como $\sum b_n$ diverge, $\sum a_n$ também diverge.</p>
          <div class="final">Alternativa <b>A</b>.</div>
          <div class="note">Repare que $a_n=\frac{\sqrt n}{n+1}\to0$: o termo geral tender a zero <em>não</em> impede a divergência. Aqui $a_n\sim\frac{1}{\sqrt n}$, que é "grande demais" para somar.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 8', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as séries:</p>
          <p>I. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{2}+n}$ &nbsp;&nbsp;&nbsp; II. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{\frac12+\operatorname{sen}(1/n)}}$ &nbsp;&nbsp;&nbsp; III. $\displaystyle\sum_{n=2}^{\infty}\frac{1}{\ln n}$</p>
          <p>Pode-se afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Converge apenas III.</span></li>
            <li><span class="key">B</span><span>Convergem apenas II e III.</span></li>
            <li><span class="key">C</span><span>Converge apenas I.</span></li>
            <li><span class="key">D</span><span>Convergem apenas I e III.</span></li>
            <li><span class="key">E</span><span>Convergem apenas I e II.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Item I — converge</span>
          <p>$\dfrac{1}{n^{2}+n}&lt;\dfrac{1}{n^{2}}$ e $\sum\frac1{n^2}$ é $p$-série com $p=2&gt;1$: por comparação direta, I converge. (De fato $\frac{1}{n^2+n}=\frac1n-\frac1{n+1}$, é a telescópica da Questão 6 e soma $1$.)</p>
          <span class="step-label">Item II — diverge</span>
          <p>O expoente é $p_n=\tfrac12+\operatorname{sen}\!\left(\tfrac1n\right)$, que tende a $\tfrac12$ mas nunca chega lá. Como $0&lt;\operatorname{sen}\left(\tfrac1n\right)\le\tfrac1n$, para $n\ge4$ temos $p_n\le\tfrac12+\tfrac14=\tfrac34$, logo</p>
          $$\frac{1}{n^{\,p_n}}\ \ge\ \frac{1}{n^{3/4}}\qquad(n\ge4).$$
          <p>Como $\sum n^{-3/4}$ é $p$-série com $p=\tfrac34\le1$ e diverge, a comparação direta faz II <strong>divergir</strong>.</p>
          <span class="step-label">Item III — diverge</span>
          <p>Para $n\ge2$ vale $\ln n&lt;n$, portanto $\dfrac{1}{\ln n}&gt;\dfrac1n$. Estar acima da série harmônica divergente faz III divergir.</p>
          <div class="final">Alternativa <b>C</b>: converge apenas I.</div>
          <div class="note">A armadilha do item II é achar que o expoente "quase $\frac12$" poderia passar de $1$. Ele fica preso no intervalo $\left(\frac12,\frac12+\operatorname{sen}1\right]$, e o que decide é o comportamento para $n$ grande, onde $p_n$ está bem abaixo de $1$.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 9', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Expresse a representação decimal $0,\overline{34}=0,343434\dots$ como quociente de $2$ inteiros:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\tfrac{7}{20}$</span></li>
            <li><span class="key">B</span><span>$\tfrac{35}{99}$</span></li>
            <li><span class="key">C</span><span>$\tfrac13$</span></li>
            <li><span class="key">D</span><span>$\tfrac{34}{99}$</span></li>
            <li><span class="key">E</span><span>$\tfrac{34}{100}$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Caminho 1 — série geométrica (o espírito da matéria)</span>
          <p>A dízima é a soma de uma série geométrica:</p>
          $$0,\overline{34}=\frac{34}{100}+\frac{34}{100^{2}}+\frac{34}{100^{3}}+\cdots=\sum_{k=1}^{\infty}\frac{34}{100^{k}}.$$
          <p>É geométrica com primeiro termo $a=\tfrac{34}{100}$ e razão $r=\tfrac1{100}$, e $|r|&lt;1$, então a soma vale $\dfrac{a}{1-r}$:</p>
          $$0,\overline{34}=\frac{\tfrac{34}{100}}{1-\tfrac{1}{100}}=\frac{\tfrac{34}{100}}{\tfrac{99}{100}}=\frac{34}{99}.$$
          <span class="step-label">Caminho 2 — o truque algébrico</span>
          <p>Seja $x=0,343434\dots$. Multiplicando por $100$: $100x=34,343434\dots=34+x$. Logo $99x=34$ e $x=\tfrac{34}{99}$.</p>
          <span class="step-label">Passo 3 — conferir</span>
          <p>$34\div99=0,3434\dots$ ✓ (e $\gcd(34,99)=1$, a fração já está irredutível).</p>
          <div class="final">Alternativa <b>D</b>: $\tfrac{34}{99}$.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 10', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Determine os limites das seguintes sequências com $n\to\infty$:</p>
          <p>$\bullet\ a_n=\dfrac{3n^{2}+2n\operatorname{sen} n}{n^{2}+4}$ &nbsp;&nbsp;&nbsp; $\bullet\ b_n=(-1)^{n}\dfrac{\sqrt n}{n+1}$ &nbsp;&nbsp;&nbsp; $\bullet\ c_n=\dfrac{\cos(1/n)}{n}$</p>
          <p>Escolha a alternativa correta:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Sequência $a_n$ diverge, sequência $b_n$ diverge, $c_n\to0$.</span></li>
            <li><span class="key">B</span><span>$a_n\to3$, $b_n\to1$, sequência $c_n$ diverge.</span></li>
            <li><span class="key">C</span><span>$a_n\to3$, $b_n\to0$, sequência $c_n$ diverge.</span></li>
            <li><span class="key">D</span><span>Sequência $a_n$ diverge, sequência $b_n$ diverge, $c_n\to0$.</span></li>
            <li><span class="key">E</span><span>$a_n\to3$, $b_n\to0$, $c_n\to0$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Sequência $a_n$ — dividir por $n^{2}$</span>
          <p>$$a_n=\frac{3+\dfrac{2\operatorname{sen} n}{n}}{1+\dfrac{4}{n^{2}}}.$$</p>
          <p>Pelo Teorema do Confronto, $\left|\dfrac{2\operatorname{sen} n}{n}\right|\le\dfrac{2}{n}\to0$, logo esse termo tende a $0$. O denominador tende a $1\ne0$, então $a_n\to\dfrac{3+0}{1}=3$.</p>
          <span class="step-label">Sequência $b_n$ — o sinal não atrapalha</span>
          <p>O fator $(-1)^n$ só alterna sinais; o que decide é o tamanho:</p>
          $$|b_n|=\frac{\sqrt n}{n+1}&lt;\frac{\sqrt n}{n}=\frac{1}{\sqrt n}\ \longrightarrow\ 0.$$
          <p>Como $|b_n|\to0$, então $b_n\to0$. (Uma sequência alternada converge se, e só se, o módulo tende a zero.)</p>
          <span class="step-label">Sequência $c_n$ — confronto direto</span>
          <p>$|\cos(1/n)|\le1$ para todo $n$, logo $$0\le\left|\frac{\cos(1/n)}{n}\right|\le\frac1n\longrightarrow0\ \Rightarrow\ c_n\to0.$$</p>
          <p>(Alternativamente: $\cos(1/n)\to\cos0=1$ por continuidade, e $\tfrac1n\to0$, então o produto tende a $1\cdot0=0$.)</p>
          <div class="final">Alternativa <b>E</b>: $a_n\to3$, $b_n\to0$, $c_n\to0$.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 11', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Analise a convergência das séries:</p>
          <p>I. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\frac{n!\cdot3^{n}}{n^{n}}$ &nbsp;&nbsp;&nbsp; II. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}}{n}$</p>
          <ul class="alts">
            <li><span class="key">A</span><span>I converge absolutamente, II diverge.</span></li>
            <li><span class="key">B</span><span>I converge absolutamente, II converge condicionalmente.</span></li>
            <li><span class="key">C</span><span>Ambas divergem.</span></li>
            <li><span class="key">D</span><span>I diverge, II converge condicionalmente.</span></li>
            <li><span class="key">E</span><span>Ambas convergem condicionalmente.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — item I: fatorial e potência pedem o teste da razão</span>
          <p>Com $|a_n|=\dfrac{n!\,3^{n}}{n^{n}}$:</p>
          $$\frac{|a_{n+1}|}{|a_n|}=\frac{(n+1)!\,3^{\,n+1}}{(n+1)^{\,n+1}}\cdot\frac{n^{n}}{n!\,3^{n}}=3\,(n+1)\cdot\frac{n^{n}}{(n+1)^{\,n+1}}=3\cdot\frac{n^{n}}{(n+1)^{n}}.$$
          <span class="step-label">Passo 2 — reconhecer o limite notável</span>
          <p>$$3\cdot\frac{n^{n}}{(n+1)^{n}}=\frac{3}{\left(1+\dfrac1n\right)^{n}}\ \longrightarrow\ \frac3e\approx1{,}104&gt;1.$$</p>
          <span class="step-label">Passo 3 — conclusão para I</span>
          <p>Razão com limite maior que $1$: a série <strong>diverge</strong>. (Mais que isso: $|a_n|\to+\infty$, então o termo geral nem tende a zero.)</p>
          <span class="step-label">Passo 4 — item II: a harmônica alternada</span>
          <p>$b_n=\tfrac1n$ é positiva, decrescente e tende a $0$ ⟹ por Leibniz, $\sum\frac{(-1)^n}{n}$ converge. Mas $\sum\left|\frac{(-1)^n}{n}\right|=\sum\frac1n$ é a harmônica, que diverge. Logo II converge <strong>condicionalmente</strong> (sua soma é $-\ln2$).</p>
          <div class="final">Alternativa <b>D</b>: I diverge, II converge condicionalmente.</div>
        `
      },

      {
        ref: 'P1 2025 · Questão 12', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Quais das seguintes séries são <strong>absolutamente convergentes</strong>?</p>
          <p>I. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^{6/5}}$ &nbsp;&nbsp; II. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^{3/4}}$ &nbsp;&nbsp; III. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\sqrt n$ &nbsp;&nbsp; IV. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^{5}}$</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Todas são absolutamente convergentes.</span></li>
            <li><span class="key">B</span><span>Apenas III é absolutamente convergente.</span></li>
            <li><span class="key">C</span><span>Nenhuma é absolutamente convergente.</span></li>
            <li><span class="key">D</span><span>Apenas I e IV são absolutamente convergentes.</span></li>
            <li><span class="key">E</span><span>Apenas II e III são absolutamente convergentes.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — tirar o sinal e virar $p$-série</span>
          <p>Em todos os itens, $|a_n|$ é da forma $n^{-p}$. Basta então aplicar o critério da $p$-série: $\sum n^{-p}$ converge $\iff p&gt;1$.</p>
          <span class="step-label">Passo 2 — item a item</span>
          <table>
            <tr><th>Série</th><th>$|a_n|$</th><th>$p$</th><th>$p&gt;1$?</th><th>Absolutamente convergente?</th></tr>
            <tr><td>I</td><td>$n^{-6/5}$</td><td>$6/5=1{,}2$</td><td>sim</td><td><b>Sim</b></td></tr>
            <tr><td>II</td><td>$n^{-3/4}$</td><td>$3/4=0{,}75$</td><td>não</td><td>Não (só condicional, por Leibniz)</td></tr>
            <tr><td>III</td><td>$n^{1/2}$</td><td>$-1/2$</td><td>não</td><td>Não (nem converge: $\sqrt n\not\to0$)</td></tr>
            <tr><td>IV</td><td>$n^{-5}$</td><td>$5$</td><td>sim</td><td><b>Sim</b></td></tr>
          </table>
          <span class="step-label">Passo 3 — juntar</span>
          <p>Só I e IV têm expoente maior que $1$ no valor absoluto.</p>
          <div class="final">Alternativa <b>D</b>: apenas I e IV.</div>
          <div class="note">Compare com a Questão 2: lá pediam <em>condicional</em> e a resposta foi "II e IV" (expoentes $\le1$ que ainda passam por Leibniz). Aqui pedem <em>absoluta</em> e a resposta troca para os expoentes $&gt;1$. Ler qual das duas palavras aparece no enunciado é metade da questão.</div>
        `
      },

    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p1-t8', number: '08',
    title: 'Prova P1 — 2024',
    subtitle: '— prova antiga resolvida (10/09/2024, Tipo 4)',
    intro: String.raw`
      <p>P1 de <strong>10/09/2024</strong> (Tipo 4), com as 12 questões transcritas e resolvidas. Esta prova veio acompanhada do <strong>gabarito oficial</strong>, então todas as respostas abaixo estão confirmadas: <code>1C · 2C · 3B · 4E · 5A · 6A · 7A · 8D · 9A · 10C · 11D · 12A</code>.</p>
      <p>O perfil é bem diferente do da P1 de 2025: aqui há <strong>muito mais questões teóricas</strong> (verdadeiro/falso sobre teoremas, nas Q2, Q3, Q4 e Q11), e o que se cobra é saber exatamente <em>quais hipóteses</em> cada critério exige — e produzir um <strong>contraexemplo</strong> quando falta alguma.</p>
      <p>Duas armadilhas aparecem em mais de uma questão e vale fixá-las: <strong>(1)</strong> o critério de Leibniz exige que $b_n$ seja positiva, <strong>decrescente</strong> <em>e</em> tenda a zero — só "tender a zero" não basta (Q3-II); <strong>(2)</strong> nem toda série com $(-1)^{\text{algo}}$ é alternada: em $(-1)^{n(n+1)/2}$ os sinais vêm em blocos $+,-,-,+,+,-,-$, então Leibniz <em>não</em> se aplica e o caminho é a convergência absoluta (Q9-I e Q12-I).</p>
    `,
    exercises: [

      {
        ref: 'P1 2024 · Questão 1', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a seguinte série convergente: $\displaystyle\sum_{n=1}^{\infty}\frac{1}{4n^{2}-1}$. Calculando a soma desta série, obtemos:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\tfrac13$</span></li>
            <li><span class="key">B</span><span>$1$</span></li>
            <li><span class="key">C</span><span>$\tfrac12$</span></li>
            <li><span class="key">D</span><span>$\tfrac25$</span></li>
            <li><span class="key">E</span><span>$\tfrac18$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — fatorar o denominador</span>
          <p>Diferença de quadrados: $4n^{2}-1=(2n-1)(2n+1)$. Isso sinaliza <strong>frações parciais</strong> e, muito provavelmente, uma série telescópica.</p>
          <span class="step-label">Passo 2 — frações parciais</span>
          <p>Procuramos $A,B$ com $\dfrac{1}{(2n-1)(2n+1)}=\dfrac{A}{2n-1}+\dfrac{B}{2n+1}$. Multiplicando tudo por $(2n-1)(2n+1)$:</p>
          $$A(2n+1)+B(2n-1)=1\ \Longrightarrow\ 2n(A+B)+(A-B)=1.$$
          <p>Como a igualdade vale para todo $n$, os coeficientes devem bater: $A+B=0$ e $A-B=1$, ou seja $A=\tfrac12$ e $B=-\tfrac12$. Logo</p>
          $$\frac{1}{4n^{2}-1}=\frac12\left(\frac{1}{2n-1}-\frac{1}{2n+1}\right).$$
          <span class="step-label">Passo 3 — somar parcialmente (telescópica)</span>
          <p>$$S_N=\frac12\left[\left(1-\frac13\right)+\left(\frac13-\frac15\right)+\left(\frac15-\frac17\right)+\cdots+\left(\frac{1}{2N-1}-\frac{1}{2N+1}\right)\right]=\frac12\left(1-\frac{1}{2N+1}\right).$$</p>
          <span class="step-label">Passo 4 — passar ao limite</span>
          <p>$\dfrac{1}{2N+1}\to0$, então $S_N\to\dfrac12\cdot1$.</p>
          <div class="final">Alternativa <b>C</b>: a soma vale $\tfrac12$.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 2', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes afirmações:</p>
          <p><strong>(I)</strong> Se a sequência $(a_n)$ é crescente e não é limitada, então $\displaystyle\lim_{n\to\infty}a_n=+\infty$.</p>
          <p><strong>(II)</strong> Se a sequência $(a_n)$ é divergente, então $(a_n)$ não é limitada.</p>
          <p><strong>(III)</strong> Se as sequências $(a_n)$ e $(b_n)$ são divergentes e $b_n\ne0$ para todo $n$, então $\left(\dfrac{a_n}{b_n}\right)$ é divergente.</p>
          <p>Então podemos dizer que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas (I) e (III) são verdadeiras.</span></li>
            <li><span class="key">B</span><span>Apenas (I) e (II) são verdadeiras.</span></li>
            <li><span class="key">C</span><span>Apenas (I) é verdadeira.</span></li>
            <li><span class="key">D</span><span>Apenas (II) e (III) são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Todas as afirmações são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — verdadeira</span>
          <p>Crescente ($a_n\le a_{n+1}$) e ilimitada só pode significar ilimitada <em>superiormente</em> — afinal $a_1$ já é cota inferior. Então, dado $M&gt;0$ qualquer, existe $N$ com $a_N&gt;M$; pela monotonia, $a_n\ge a_N&gt;M$ para todo $n\ge N$. Isso é exatamente a definição de $a_n\to+\infty$.</p>
          <p>Vale guardar o par: <em>monótona e limitada ⟹ converge</em>; <em>monótona e ilimitada ⟹ tende a $\pm\infty$</em>. Uma sequência monótona nunca oscila.</p>
          <span class="step-label">(II) — falsa</span>
          <p>Contraexemplo clássico: $a_n=(-1)^n$. Ela <strong>diverge</strong> (as subsequências par e ímpar tendem a $1$ e $-1$) mas é perfeitamente <strong>limitada</strong>: $-1\le a_n\le1$.</p>
          <p>Divergir significa apenas "não convergir", e há duas maneiras de fazer isso: explodir ou oscilar.</p>
          <span class="step-label">(III) — falsa</span>
          <p>Contraexemplo: $a_n=e^{n}$ e $b_n=e^{\,n-1}$. As duas divergem (vão a $+\infty$) e $b_n\ne0$, mas</p>
          $$\frac{a_n}{b_n}=\frac{e^{n}}{e^{\,n-1}}=e\quad\text{para todo }n,$$
          <p>que é uma sequência constante — convergente. Mais simples ainda: $a_n=b_n=n$ dá quociente constante igual a $1$.</p>
          <div class="final">Alternativa <b>C</b>: apenas (I) é verdadeira.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 3', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes afirmações:</p>
          <p><strong>(I)</strong> Se $(a_n)$ é uma sequência de números reais e a série $\displaystyle\sum_{n=1}^{\infty}a_n$ converge, então $\displaystyle\lim_{n\to\infty}n^{2}|a_n|=0$.</p>
          <p><strong>(II)</strong> Se $(a_n)$ é uma sequência de números positivos e $a_n\to0$ com $n\to\infty$, então a série $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}a_n$ converge.</p>
          <p><strong>(III)</strong> Se $(a_n)$ é uma sequência de números positivos e a série $\displaystyle\sum_{n=1}^{\infty}a_n$ converge, então a série $\displaystyle\sum_{n=1}^{\infty}\sqrt{a_n a_{n+1}}$ também converge.</p>
          <p>Então é correto dizer que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas (II) e (III) são verdadeiras.</span></li>
            <li><span class="key">B</span><span>Apenas (III) é verdadeira.</span></li>
            <li><span class="key">C</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">D</span><span>Apenas (I) e (II) são verdadeiras.</span></li>
            <li><span class="key">E</span><span>As três afirmações são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — falsa</span>
          <p>Contraexemplo imediato: $a_n=\dfrac{1}{n^{2}}$. A série $\sum\frac1{n^2}$ converge ($p$-série com $p=2$), mas</p>
          $$n^{2}|a_n|=n^{2}\cdot\frac{1}{n^{2}}=1\ \longrightarrow\ 1\ne0.$$
          <p>A convergência de $\sum a_n$ garante apenas $a_n\to0$; não diz <em>com que velocidade</em>. Multiplicar por $n^2$ pode muito bem estabilizar o produto (ou até fazê-lo explodir, com $a_n=\frac{1}{n\ln^2 n}$).</p>
          <span class="step-label">(II) — falsa: falta a monotonia</span>
          <p>O critério de Leibniz pede <strong>três</strong> hipóteses sobre $b_n$: positiva, <strong>decrescente</strong> e $b_n\to0$. A afirmação cita só a terceira.</p>
          <p>Contraexemplo: defina $a_n$ pelos índices pares e ímpares,</p>
          $$a_{2k}=\frac1k,\qquad a_{2k-1}=\frac{1}{k^{2}}.$$
          <p>Todos são positivos e $a_n\to0$, mas a sequência não é decrescente. Agrupando os termos dois a dois:</p>
          $$\sum_{n=1}^{\infty}(-1)^{n}a_n=\sum_{k=1}^{\infty}\left(a_{2k}-a_{2k-1}\right)=\sum_{k=1}^{\infty}\left(\frac1k-\frac1{k^{2}}\right),$$
          <p>que diverge (a harmônica diverge e $\sum k^{-2}$ converge). Logo a série alternada diverge, apesar de $a_n\to0$.</p>
          <span class="step-label">(III) — verdadeira, por média aritmética–geométrica</span>
          <p>Para quaisquer $x,y\ge0$ vale $\sqrt{xy}\le\dfrac{x+y}{2}$ (é o mesmo que $(\sqrt x-\sqrt y)^2\ge0$). Aplicando com $x=a_n$, $y=a_{n+1}$:</p>
          $$0\le\sqrt{a_na_{n+1}}\le\frac{a_n+a_{n+1}}{2}.$$
          <p>A série majorante converge, pois é combinação de duas cópias de $\sum a_n$:</p>
          $$\sum_{n=1}^{\infty}\frac{a_n+a_{n+1}}{2}=\frac12\sum_{n=1}^{\infty}a_n+\frac12\sum_{n=2}^{\infty}a_n&lt;\infty.$$
          <p>Pelo critério da comparação (termos não negativos), $\sum\sqrt{a_na_{n+1}}$ converge.</p>
          <div class="final">Alternativa <b>B</b>: apenas (III) é verdadeira.</div>
          <div class="note"><b>Por que não tentar o teste da razão em (III).</b> Nada garante que $\frac{a_{n+1}}{a_n}$ tenha limite — $(a_n)$ é uma sequência qualquer com soma finita, podendo oscilar bastante. A desigualdade MA–MG dispensa qualquer hipótese extra e resolve o item em duas linhas.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 4', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a série $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n^{p}(\ln n)^{q}}$, onde $p,q&gt;0$ são números reais. Então podemos afirmar que a série:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Converge se $p=1$ e $q=1$.</span></li>
            <li><span class="key">B</span><span>Diverge se $p&gt;1$ e $q\le1$.</span></li>
            <li><span class="key">C</span><span>Diverge se $0&lt;q\le1$, para qualquer $p&gt;0$.</span></li>
            <li><span class="key">D</span><span>Diverge se $p=1$ e $q=2$.</span></li>
            <li><span class="key">E</span><span>Converge se $p&gt;1$, para qualquer $q&gt;0$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — o mapa completo desta família</span>
          <p>Vale a pena memorizar o resultado inteiro, porque ele cai com frequência:</p>
          <table>
            <tr><th>Caso</th><th>Comportamento</th><th>Por quê</th></tr>
            <tr><td>$p&gt;1$ (qualquer $q&gt;0$)</td><td><b>Converge</b></td><td>o fator $n^{-p}$ domina</td></tr>
            <tr><td>$p&lt;1$ (qualquer $q&gt;0$)</td><td>Diverge</td><td>$n^{-p}$ é grande demais; o $\ln$ não salva</td></tr>
            <tr><td>$p=1$ e $q&gt;1$</td><td>Converge</td><td>critério da integral</td></tr>
            <tr><td>$p=1$ e $q\le1$</td><td>Diverge</td><td>critério da integral</td></tr>
          </table>
          <p>A ideia por trás: o logaritmo é <em>desprezível</em> frente a qualquer potência de $n$. Ele só decide o jogo no caso de empate, $p=1$.</p>
          <span class="step-label">Passo 2 — justificar o caso $p&gt;1$ (alternativa E)</span>
          <p>Escolha um $r$ intermediário, $1&lt;r&lt;p$. Como $n^{\,p-r}\to+\infty$ e $(\ln n)^{q}\to+\infty$, para $n$ grande vale $n^{\,p-r}(\ln n)^{q}\ge1$, ou seja</p>
          $$\frac{1}{n^{p}(\ln n)^{q}}\le\frac{1}{n^{r}}.$$
          <p>Como $\sum n^{-r}$ converge ($r&gt;1$), a comparação fecha o caso: <strong>converge para todo $q&gt;0$</strong>. A alternativa E é verdadeira.</p>
          <span class="step-label">Passo 3 — por que as outras caem</span>
          <p><b>A</b> ($p=1,q=1$): é $\sum\frac{1}{n\ln n}$. Pelo critério da integral com $u=\ln x$, $\int_2^\infty\frac{dx}{x\ln x}=\big[\ln u\big]_{\ln2}^{\infty}=+\infty$ — <em>diverge</em>.</p>
          <p><b>B</b> ($p&gt;1,q\le1$) e <b>C</b> ($0&lt;q\le1$, qualquer $p$): ambas afirmam divergência em situações que incluem $p&gt;1$, onde acabamos de mostrar que converge. Basta $p=2,q=1$ como contraexemplo das duas.</p>
          <p><b>D</b> ($p=1,q=2$): com $u=\ln x$, $\int_2^\infty\frac{dx}{x(\ln x)^{2}}=\int_{\ln2}^{\infty}\frac{du}{u^{2}}=\frac{1}{\ln2}&lt;\infty$ — <em>converge</em>, então a afirmação de divergência é falsa.</p>
          <div class="final">Alternativa <b>E</b>.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 5', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Para que valores de $x\in\mathbb R$ a série $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n\,3^{n}(x-5)^{n}}$ é convergente?</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$x\ge\tfrac{16}{3}$ ou $x&lt;\tfrac{14}{3}$.</span></li>
            <li><span class="key">B</span><span>$x&gt;\tfrac{16}{3}$ ou $x&lt;\tfrac{14}{3}$.</span></li>
            <li><span class="key">C</span><span>$x\ge\tfrac{16}{3}$ ou $x\le\tfrac{14}{3}$.</span></li>
            <li><span class="key">D</span><span>$x\ge\tfrac{16}{3}$.</span></li>
            <li><span class="key">E</span><span>$x&lt;\tfrac{14}{3}$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 0 — atenção: $(x-5)$ está no denominador</span>
          <p>Esta não é uma série de potências usual em $(x-5)$: o expoente aparece <em>embaixo</em>. Na prática é uma série de potências na variável $t=\dfrac{1}{x-5}$, então o "intervalo de convergência" vai virar o <strong>exterior</strong> de um intervalo em $x$. (Note também que $x=5$ está fora de discussão.)</p>
          <span class="step-label">Passo 1 — teste da razão</span>
          <p>Com $a_n=\dfrac{(-1)^{n-1}}{n\,3^{n}(x-5)^{n}}$:</p>
          $$\left|\frac{a_{n+1}}{a_n}\right|=\frac{n}{n+1}\cdot\frac{1}{3|x-5|}\ \longrightarrow\ \frac{1}{3|x-5|}.$$
          <span class="step-label">Passo 2 — onde a razão é menor que 1</span>
          <p>$$\frac{1}{3|x-5|}&lt;1\iff|x-5|&gt;\frac13\iff x&gt;\frac{16}{3}\ \text{ ou }\ x&lt;\frac{14}{3}.$$</p>
          <p>Nesses pontos há convergência absoluta; se $|x-5|&lt;\tfrac13$ a razão passa de $1$ e a série diverge. Faltam as duas bordas, onde a razão dá exatamente $1$ e o teste nada diz.</p>
          <span class="step-label">Passo 3 — borda $x=\tfrac{16}{3}$, isto é $x-5=\tfrac13$</span>
          <p>Aí $3^{n}(x-5)^{n}=\left(3\cdot\tfrac13\right)^{n}=1$ e a série vira</p>
          $$\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n},$$
          <p>a harmônica alternada: $b_n=\tfrac1n$ é positiva, decrescente e tende a $0$ ⟹ por Leibniz, <strong>converge</strong>. Logo $x=\tfrac{16}{3}$ <em>entra</em>.</p>
          <span class="step-label">Passo 4 — borda $x=\tfrac{14}{3}$, isto é $x-5=-\tfrac13$</span>
          <p>Agora $3^{n}(x-5)^{n}=(-1)^{n}$, e os sinais se cancelam:</p>
          $$\frac{(-1)^{n-1}}{n(-1)^{n}}=\frac{(-1)^{-1}}{n}=-\frac1n\ \Longrightarrow\ \sum_{n=1}^{\infty}\left(-\frac1n\right),$$
          <p>que é $-1$ vezes a harmônica: <strong>diverge</strong>. Logo $x=\tfrac{14}{3}$ <em>fica de fora</em>.</p>
          <div class="final">Alternativa <b>A</b>: $x\ge\tfrac{16}{3}$ ou $x&lt;\tfrac{14}{3}$.</div>
          <div class="note">As cinco alternativas diferem <em>só</em> nos sinais de $\ge$ / $&gt;$ das bordas. Quando a prova faz isso, o teste da razão sozinho não decide nada — a questão inteira está nos dois extremos.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 6', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Quais das seguintes séries convergem condicionalmente?</p>
          <p><strong>(I)</strong> $\displaystyle\sum_{n=2}^{\infty}\frac{(-1)^{n}}{n\log n}$ &nbsp;&nbsp; <strong>(II)</strong> $\displaystyle\sum_{n=1}^{\infty}\frac{\operatorname{sen} n^{3}}{n^{2}}$ &nbsp;&nbsp; <strong>(III)</strong> $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}n}{n^{3}+5}$ &nbsp;&nbsp; <strong>(IV)</strong> $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}}{e^{n}+e^{-n}}$</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas (I).</span></li>
            <li><span class="key">B</span><span>Apenas (II), (III) e (IV).</span></li>
            <li><span class="key">C</span><span>Apenas (I) e (IV).</span></li>
            <li><span class="key">D</span><span>Apenas (II) e (IV).</span></li>
            <li><span class="key">E</span><span>Apenas (I) e (II).</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Estratégia — testar primeiro a convergência absoluta</span>
          <p>Convergência condicional exige que $\sum|a_n|$ <strong>divirja</strong>. Então o caminho mais rápido é olhar $\sum|a_n|$ de cada item: se ela convergir, o item já está eliminado.</p>
          <span class="step-label">(I) — condicionalmente convergente ✓</span>
          <p><em>Converge?</em> $b_n=\frac{1}{n\log n}$ é positiva, decrescente e tende a $0$: Leibniz garante que sim.</p>
          <p><em>Absolutamente?</em> $\sum\frac{1}{n\log n}$ diverge (critério da integral, $u=\log x$, leva a $\int\frac{du}{u}=\ln u\to\infty$). Portanto é <strong>condicional</strong>.</p>
          <span class="step-label">(II) — absolutamente convergente ✗</span>
          <p>$\left|\dfrac{\operatorname{sen} n^{3}}{n^{2}}\right|\le\dfrac{1}{n^{2}}$ e $\sum\frac1{n^2}$ converge. Por comparação, $\sum|a_n|$ converge — convergência <em>absoluta</em>, não condicional.</p>
          <span class="step-label">(III) — absolutamente convergente ✗</span>
          <p>$\left|\dfrac{(-1)^n n}{n^{3}+5}\right|=\dfrac{n}{n^{3}+5}\le\dfrac{n}{n^{3}}=\dfrac{1}{n^{2}}$, e novamente $\sum\frac1{n^2}$ converge. Absoluta.</p>
          <span class="step-label">(IV) — absolutamente convergente ✗</span>
          <p>Como $e^{-n}&gt;0$, temos $e^{n}+e^{-n}&gt;e^{n}$, logo</p>
          $$\left|\frac{(-1)^{n}}{e^{n}+e^{-n}}\right|&lt;\frac{1}{e^{n}}=\left(\frac1e\right)^{n}.$$
          <p>Geométrica de razão $\tfrac1e&lt;1$: converge. Absoluta.</p>
          <div class="final">Alternativa <b>A</b>: apenas (I) converge condicionalmente.</div>
          <div class="note">Três dos quatro itens são alternados e <em>todos</em> convergem — mas convergir não é o que se perguntou. O filtro é o valor absoluto: só (I) tem $\sum|a_n|$ divergente.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 7', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Calculando o limite $\displaystyle \ell=\lim_{n\to\infty}\frac{1+2+\cdots+n}{n^{2}}$, obtemos:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\ell=\tfrac12$</span></li>
            <li><span class="key">B</span><span>$\ell=0$</span></li>
            <li><span class="key">C</span><span>$\ell=\tfrac13$</span></li>
            <li><span class="key">D</span><span>$\ell=\tfrac23$</span></li>
            <li><span class="key">E</span><span>$\ell=\tfrac14$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — fechar a soma do numerador</span>
          <p>A soma dos $n$ primeiros naturais é a PA de Gauss:</p>
          $$1+2+\cdots+n=\frac{n(n+1)}{2}.$$
          <span class="step-label">Passo 2 — substituir e simplificar</span>
          <p>$$\ell=\lim_{n\to\infty}\frac{n(n+1)}{2n^{2}}=\lim_{n\to\infty}\frac{n+1}{2n}=\lim_{n\to\infty}\frac{1+\frac1n}{2}=\frac{1+0}{2}.$$</p>
          <div class="final">Alternativa <b>A</b>: $\ell=\tfrac12$.</div>
          <div class="note">Sem a fórmula fechada a questão trava: o numerador tem $n$ parcelas, então não dá para tomar o limite "parcela a parcela" (isso daria $0$, a armadilha da alternativa B). Some primeiro, passe o limite depois.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 8', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a série $\displaystyle\sum_{n=0}^{\infty}\left[\frac{5+(-1)^{n}}{2}\right]^{-n}$. Quais das seguintes afirmações sobre a série acima são verdadeiras?</p>
          <p><strong>(I)</strong> A soma da série é $\tfrac{43}{24}$. &nbsp;&nbsp; <strong>(II)</strong> A série é divergente. &nbsp;&nbsp; <strong>(III)</strong> A série é a soma de duas séries geométricas.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Nenhuma delas.</span></li>
            <li><span class="key">B</span><span>Apenas (II) e (III).</span></li>
            <li><span class="key">C</span><span>Apenas (I).</span></li>
            <li><span class="key">D</span><span>Apenas (I) e (III).</span></li>
            <li><span class="key">E</span><span>Apenas (III).</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — o termo geral só tem dois comportamentos</span>
          <p>A base depende da paridade de $n$:</p>
          $$n\ \text{par}:\ \frac{5+1}{2}=3,\qquad n\ \text{ímpar}:\ \frac{5-1}{2}=2.$$
          <p>Com o expoente $-n$, o termo é $3^{-n}$ nos pares e $2^{-n}$ nos ímpares. Como todos os termos são positivos, podemos reagrupar livremente a soma.</p>
          <span class="step-label">Passo 2 — separar em duas geométricas (item III)</span>
          <p>Escrevendo $n=2k$ (pares) e $n=2k+1$ (ímpares), com $k\ge0$:</p>
          $$S=\underbrace{\sum_{k=0}^{\infty}3^{-2k}}_{S_1}+\underbrace{\sum_{k=0}^{\infty}2^{-(2k+1)}}_{S_2}=\sum_{k=0}^{\infty}\left(\frac19\right)^{k}+\frac12\sum_{k=0}^{\infty}\left(\frac14\right)^{k}.$$
          <p>São de fato <strong>duas séries geométricas</strong>, de razões $\tfrac19$ e $\tfrac14$: o item (III) é verdadeiro.</p>
          <span class="step-label">Passo 3 — somar cada uma</span>
          <p>Usando $\sum_{k\ge0}r^{k}=\dfrac{1}{1-r}$ para $|r|&lt;1$:</p>
          $$S_1=\frac{1}{1-\frac19}=\frac{9}{8},\qquad S_2=\frac12\cdot\frac{1}{1-\frac14}=\frac12\cdot\frac43=\frac23.$$
          <span class="step-label">Passo 4 — juntar</span>
          <p>$$S=\frac98+\frac23=\frac{27}{24}+\frac{16}{24}=\frac{43}{24}.$$</p>
          <p>Logo (I) é verdadeiro e, como a soma é finita, (II) é falso.</p>
          <div class="final">Alternativa <b>D</b>: apenas (I) e (III).</div>
          <div class="note">O expoente negativo é o detalhe decisivo: $\left[\frac{5+(-1)^n}{2}\right]^{-n}$ tem bases $3$ e $2$ <em>no denominador</em>, então as razões são $&lt;1$ e tudo converge. Se o expoente fosse $+n$, os termos explodiriam e a série divergiria.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 9', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes séries:</p>
          <p><strong>(I)</strong> $\displaystyle\sum_{n=1}^{\infty}(-1)^{\frac{n^{2}+n}{2}}\frac{n}{2^{n}}$ &nbsp;&nbsp; <strong>(II)</strong> $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\frac{1}{\sqrt{n+1}-1}$ &nbsp;&nbsp; <strong>(III)</strong> $\displaystyle\sum_{n=1}^{\infty}\frac{\operatorname{sen} n\alpha}{(\ln 10)^{n}}$ &nbsp;&nbsp; <strong>(IV)</strong> $\displaystyle\sum_{n=1}^{\infty}(-1)^{n-1}\tan\frac{1}{n\sqrt n}$</p>
          <p>Assinalar a alternativa correta:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Três séries são absolutamente convergentes e uma série é condicionalmente convergente.</span></li>
            <li><span class="key">B</span><span>Duas séries são absolutamente convergentes, e duas séries são condicionalmente convergentes.</span></li>
            <li><span class="key">C</span><span>Todas as séries são absolutamente convergentes.</span></li>
            <li><span class="key">D</span><span>Apenas uma série é absolutamente convergente.</span></li>
            <li><span class="key">E</span><span>Duas séries são absolutamente convergentes, uma série é condicionalmente convergente, e uma série não é convergente.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — absolutamente convergente</span>
          <p>O expoente $\frac{n^{2}+n}{2}=\frac{n(n+1)}{2}$ é o $n$-ésimo número triangular: $1,3,6,10,15,21,\dots$ Os sinais ficam $-,-,+,+,-,-,+,+,\dots$ — a série <strong>não é alternada</strong>, então esqueça Leibniz. Vá direto no módulo:</p>
          $$\sum_{n=1}^{\infty}\left|(-1)^{\frac{n^2+n}{2}}\frac{n}{2^{n}}\right|=\sum_{n=1}^{\infty}\frac{n}{2^{n}},\qquad \frac{|a_{n+1}|}{|a_n|}=\frac{n+1}{2n}\to\frac12&lt;1.$$
          <p>Pelo teste da razão, $\sum\frac{n}{2^n}$ converge — logo a série original converge <strong>absolutamente</strong>.</p>
          <span class="step-label">(II) — condicionalmente convergente</span>
          <p><em>Converge?</em> $b_n=\dfrac{1}{\sqrt{n+1}-1}$ é positiva, decrescente (o denominador cresce) e $b_n\to0$: Leibniz dá a convergência.</p>
          <p><em>Absolutamente?</em> Racionalizando, $b_n=\dfrac{\sqrt{n+1}+1}{n}$, que se comporta como $\dfrac{1}{\sqrt n}$. De fato, comparando no limite com $\frac{1}{\sqrt n}$:</p>
          $$\frac{b_n}{1/\sqrt n}=\frac{\sqrt n\left(\sqrt{n+1}+1\right)}{n}=\frac{\sqrt{n+1}+1}{\sqrt n}\ \longrightarrow\ 1.$$
          <p>Como $\sum n^{-1/2}$ diverge, $\sum b_n$ diverge. Portanto (II) é <strong>condicional</strong>.</p>
          <span class="step-label">(III) — absolutamente convergente</span>
          <p>Como $\ln10\approx2{,}303&gt;1$, a razão $r=\dfrac{1}{\ln10}\approx0{,}434$ satisfaz $|r|&lt;1$. E $|\operatorname{sen} n\alpha|\le1$, então</p>
          $$\left|\frac{\operatorname{sen} n\alpha}{(\ln10)^{n}}\right|\le\left(\frac{1}{\ln10}\right)^{n},$$
          <p>majorada por uma geométrica convergente. Absoluta (para qualquer $\alpha$).</p>
          <span class="step-label">(IV) — absolutamente convergente</span>
          <p>Para $n\ge1$, $\frac{1}{n\sqrt n}=\frac{1}{n^{3/2}}$ é pequeno e positivo, e $\tan t\sim t$ quando $t\to0$. Comparando no limite com $\frac{1}{n^{3/2}}$:</p>
          $$\lim_{n\to\infty}\frac{\tan\left(n^{-3/2}\right)}{n^{-3/2}}=\lim_{t\to0^{+}}\frac{\tan t}{t}=1.$$
          <p>Como $\sum n^{-3/2}$ é $p$-série com $p=\tfrac32&gt;1$, converge — e a série do módulo também. Absoluta.</p>
          <span class="step-label">Contagem final</span>
          <p>Absolutamente convergentes: (I), (III) e (IV) — três. Condicionalmente convergente: (II) — uma.</p>
          <div class="final">Alternativa <b>A</b>.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 10', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Quais das seguintes séries são convergentes?</p>
          <p><strong>(I)</strong> $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n^{4/3}\ln n}$ &nbsp;&nbsp; <strong>(II)</strong> $\displaystyle\sum_{n=2}^{\infty}e^{-\sqrt n}$ &nbsp;&nbsp; <strong>(III)</strong> $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n\ln n\sqrt{\ln(\ln n)}}$</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas (I) e (III).</span></li>
            <li><span class="key">B</span><span>Nenhuma das três séries é convergente.</span></li>
            <li><span class="key">C</span><span>Apenas (I) e (II).</span></li>
            <li><span class="key">D</span><span>As três séries são convergentes.</span></li>
            <li><span class="key">E</span><span>Apenas (II) e (III).</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — converge</span>
          <p>Para $n\ge3$ vale $\ln n&gt;1$, logo</p>
          $$0&lt;\frac{1}{n^{4/3}\ln n}&lt;\frac{1}{n^{4/3}}.$$
          <p>A majorante é $p$-série com $p=\tfrac43&gt;1$: converge. Por comparação, (I) converge. (O $\ln n$ no denominador só ajuda.)</p>
          <span class="step-label">(II) — converge</span>
          <p>Critério da integral com $f(x)=e^{-\sqrt x}$, positiva, contínua e decrescente. Substituindo $u=\sqrt x$, $x=u^{2}$, $dx=2u\,du$:</p>
          $$\int_{2}^{\infty}e^{-\sqrt x}\,dx=\int_{\sqrt2}^{\infty}2u\,e^{-u}\,du=\Big[-2ue^{-u}\Big]_{\sqrt2}^{\infty}+2\int_{\sqrt2}^{\infty}e^{-u}\,du=\frac{2\sqrt2+2}{e^{\sqrt2}}&lt;\infty.$$
          <p>A integral é finita, então a série converge. (Intuição: a exponencial vence qualquer potência — $e^{\sqrt n}$ cresce mais rápido que $n^{2}$, então $e^{-\sqrt n}&lt;\frac{1}{n^2}$ para $n$ grande.)</p>
          <span class="step-label">(III) — diverge</span>
          <p>Critério da integral, em duas substituições encadeadas. Primeiro $u=\ln x$, $du=\frac{dx}{x}$:</p>
          $$\int_{16}^{\infty}\frac{dx}{x\ln x\sqrt{\ln(\ln x)}}=\int_{\ln16}^{\infty}\frac{du}{u\sqrt{\ln u}}.$$
          <p>Agora $w=\ln u$, $dw=\frac{du}{u}$:</p>
          $$=\int_{\ln\ln16}^{\infty}\frac{dw}{\sqrt w}=\Big[2\sqrt w\Big]^{\infty}=+\infty.$$
          <p>A integral diverge, então a série <strong>diverge</strong> — ainda que absurdamente devagar (as somas parciais crescem como $2\sqrt{\ln\ln n}$: somando até $n=10^{6}$ mal se passa de $1{,}2$).</p>
          <div class="final">Alternativa <b>C</b>: apenas (I) e (II).</div>
          <div class="note"><b>A família dos logaritmos encaixados.</b> $\sum\frac{1}{n\ln n(\ln\ln n)^{s}}$ converge se, e só se, $s&gt;1$. Aqui $s=\tfrac12$, daí a divergência. É o mesmo padrão de $\sum\frac{1}{n\,(\ln n)^{q}}$ um nível acima.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 11', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $(a_n)$ a sequência definida recursivamente por $a_1=\dfrac12$ e $7a_{n+1}=a_n^{3}+6$ para todo $n\ge1$. Quais das seguintes afirmações são corretas?</p>
          <p><strong>(I)</strong> A sequência $(a_n)$ é monótona crescente. &nbsp;&nbsp; <strong>(II)</strong> A sequência $(a_n)$ não é limitada. &nbsp;&nbsp; <strong>(III)</strong> A sequência $(a_n)$ tem limite, e seu limite é igual a $1$.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Nenhuma das três.</span></li>
            <li><span class="key">B</span><span>Apenas (I) e (II).</span></li>
            <li><span class="key">C</span><span>Apenas (II).</span></li>
            <li><span class="key">D</span><span>Apenas (I) e (III).</span></li>
            <li><span class="key">E</span><span>Apenas (II) e (III).</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 0 — os candidatos a limite</span>
          <p>A recorrência é $a_{n+1}=f(a_n)$ com $f(x)=\dfrac{x^{3}+6}{7}$. Se houver limite $L$, ele satisfaz $L=f(L)$:</p>
          $$7L=L^{3}+6\iff L^{3}-7L+6=0\iff(L-1)(L-2)(L+3)=0,$$
          <p>ou seja $L\in\{1,\,2,\,-3\}$. Guardamos isso: a fatoração vai servir também para a monotonia.</p>
          <span class="step-label">Passo 1 — (I) crescente</span>
          <p>Queremos $a_{n+1}\ge a_n$, isto é $\dfrac{a_n^{3}+6}{7}\ge a_n$, o que equivale a</p>
          $$a_n^{3}-7a_n+6\ge0\iff(a_n-1)(a_n-2)(a_n+3)\ge0.$$
          <p>Para $0&lt;x&lt;1$ os três fatores são, respectivamente, negativo, negativo e positivo — produto <strong>positivo</strong>. Então basta garantir que a sequência fica em $(0,1)$.</p>
          <span class="step-label">Passo 2 — a sequência fica presa em $[\tfrac12,1)$</span>
          <p>Indução: $a_1=\tfrac12\in[\tfrac12,1)$. Se $a_n\in[\tfrac12,1)$, então $a_n^{3}&lt;1$ e</p>
          $$a_{n+1}=\frac{a_n^{3}+6}{7}&lt;\frac{1+6}{7}=1,$$
          <p>e pelo Passo 1 $a_{n+1}\ge a_n\ge\tfrac12$. Logo todo $a_n$ vive em $[\tfrac12,1)$ e a sequência é <strong>crescente</strong>. (I) é verdadeira. Numericamente: $\tfrac12,\ 0{,}875,\ 0{,}9528,\ 0{,}9807,\ 0{,}9919,\dots$</p>
          <span class="step-label">Passo 3 — (II) é falsa</span>
          <p>Acabamos de mostrar que $\tfrac12\le a_n&lt;1$ para todo $n$: a sequência é <strong>limitada</strong>. A afirmação (II) é falsa.</p>
          <span class="step-label">Passo 4 — (III) o limite é 1</span>
          <p>Crescente e limitada superiormente ⟹ converge (teorema da sequência monótona). O limite $L$ tem de ser um dos três candidatos <em>e</em> pertencer a $[\tfrac12,1]$, já que $\tfrac12\le a_n&lt;1$. Isso descarta $2$ e $-3$, sobrando</p>
          $$\lim_{n\to\infty}a_n=1.$$
          <p>(III) é verdadeira.</p>
          <div class="final">Alternativa <b>D</b>: apenas (I) e (III).</div>
          <div class="note">O roteiro padrão para sequências recursivas é sempre este: <b>(1)</b> ache os pontos fixos resolvendo $L=f(L)$; <b>(2)</b> prove monotonia e limitação por indução; <b>(3)</b> use a monótona limitada para garantir que o limite existe; <b>(4)</b> escolha entre os pontos fixos aquele compatível com a região onde a sequência vive. Pular o passo (3) é erro comum: a equação $L=f(L)$ só diz qual <em>seria</em> o limite, não que ele existe.</div>
        `
      },

      {
        ref: 'P1 2024 · Questão 12', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes séries:</p>
          <p><strong>(I)</strong> $\displaystyle\sum_{n=1}^{\infty}(-1)^{\frac{n(n-1)}{2}}\left(\frac{n}{2n-1}\right)^{n}$ &nbsp;&nbsp; <strong>(II)</strong> $\displaystyle\sum_{n=1}^{\infty}\operatorname{sen}\frac{1}{\sqrt n}$ &nbsp;&nbsp; <strong>(III)</strong> $\displaystyle\sum_{n=1}^{\infty}\frac{2^{n}\cdot n!}{n^{n}}$</p>
          <p>Então podemos dizer que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>São convergentes apenas (I) e (III).</span></li>
            <li><span class="key">B</span><span>São convergentes apenas (I) e (II).</span></li>
            <li><span class="key">C</span><span>É convergente apenas (I).</span></li>
            <li><span class="key">D</span><span>Todas as séries são convergentes.</span></li>
            <li><span class="key">E</span><span>São convergentes apenas (II) e (III).</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — converge, pelo teste da raiz</span>
          <p>Assim como na Questão 9, o expoente $\frac{n(n-1)}{2}$ produz sinais em blocos $+,+,-,-,+,+,\dots$: <strong>não é série alternada</strong>, então Leibniz está fora. Como a potência é $n$-ésima, o teste da raiz é natural:</p>
          $$\sqrt[n]{|a_n|}=\sqrt[n]{\left(\frac{n}{2n-1}\right)^{n}}=\frac{n}{2n-1}=\frac{1}{2-\frac1n}\ \longrightarrow\ \frac12&lt;1.$$
          <p>Convergência <em>absoluta</em>, portanto convergência. ✓</p>
          <span class="step-label">(II) — diverge</span>
          <p>Todos os termos são positivos (para $n\ge1$, $\frac{1}{\sqrt n}\in(0,1]$ está no primeiro quadrante). Comparação no limite com $b_n=\frac{1}{\sqrt n}$:</p>
          $$\lim_{n\to\infty}\frac{\operatorname{sen}\left(n^{-1/2}\right)}{n^{-1/2}}=\lim_{t\to0^{+}}\frac{\operatorname{sen} t}{t}=1\in(0,\infty).$$
          <p>Como $\sum n^{-1/2}$ é $p$-série com $p=\tfrac12\le1$ e diverge, (II) <strong>diverge</strong> junto. ✗</p>
          <span class="step-label">(III) — converge, pelo teste da razão</span>
          <p>Fatorial com potência pede razão:</p>
          $$\frac{a_{n+1}}{a_n}=\frac{2^{\,n+1}(n+1)!}{(n+1)^{\,n+1}}\cdot\frac{n^{n}}{2^{n}n!}=2\,(n+1)\cdot\frac{n^{n}}{(n+1)^{\,n+1}}=\frac{2}{\left(1+\frac1n\right)^{n}}\ \longrightarrow\ \frac2e.$$
          <p>Como $\dfrac2e\approx0{,}736&lt;1$, a série <strong>converge</strong>. ✓</p>
          <div class="final">Alternativa <b>A</b>: convergem apenas (I) e (III).</div>
          <div class="note">Compare o item (III) com a Questão 11 da P1 de 2025, que trazia $\sum\frac{n!\,3^{n}}{n^{n}}$: lá a razão dava $\frac3e\approx1{,}10&gt;1$ e a série divergia. A fronteira exata desta família é a constante $e$ — com $\frac{c^n n!}{n^n}$, converge se $c&lt;e$ e diverge se $c&gt;e$.</div>
        `
      },

    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p1-t9', number: '09',
    title: 'Prova P1 — 2023',
    subtitle: '— prova antiga resolvida (12/09/2023, Tipo 44)',
    intro: String.raw`
      <p>P1 de <strong>12/09/2023</strong> (Tipo 44), com as 12 questões transcritas e resolvidas. Esta prova veio <strong>sem gabarito oficial</strong>, então cada questão foi resolvida do zero e conferida numericamente; o gabarito que se obtém é <code>1A · 2B · 3C · 4E · 5C · 6C · 7C · 8D · 9B · 10C · 11C · 12D</code>.</p>
      <p>É a mais "algébrica" das três provas: aqui aparecem <strong>duas telescópicas</strong> (uma de soma, Q7, e uma de <em>produto</em>, Q8 — caso raro e que pega muita gente), uma <strong>geométrica com parâmetro</strong> em que é preciso resolver uma equação trigonométrica (Q5) e outra geométrica disfarçada de trigonométrica (Q11).</p>
      <p>Repare também no par Q3 / Q6: em ambas o enunciado oferece a alternativa "converge condicionalmente" como isca. A pergunta a fazer antes de tudo é <strong>"os termos têm sinal alternado mesmo?"</strong> — na Q3 eles são todos $\ge0$, então falar em convergência condicional nem faz sentido.</p>
    `,
    exercises: [

      {
        ref: 'P1 2023 · Questão 1', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as sequências:</p>
          <p><strong>I.</strong> $a_n=\left[1+\dfrac{n}{n+1}\operatorname{sen}\left(\dfrac{n}{2}\pi\right)\right]$ &nbsp;&nbsp;&nbsp; <strong>II.</strong> $b_n=\left(\dfrac{n+1-e}{n+1}\right)^{n}$ &nbsp;&nbsp;&nbsp; <strong>III.</strong> $c_n=\dfrac{(\ln n)^{3}}{n^{2}}$</p>
          <p>Podemos afirmar sobre seus limites quando $n\to\infty$ que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$a_n$ diverge, $b_n\to e^{-e}$, $c_n\to0$.</span></li>
            <li><span class="key">B</span><span>$a_n$ converge, $b_n$ diverge, $c_n$ diverge.</span></li>
            <li><span class="key">C</span><span>$a_n$ converge, $b_n\to e^{-1}$, $c_n\to2$.</span></li>
            <li><span class="key">D</span><span>$a_n\to2$, $b_n\to e^{-e}$, $c_n\to1$.</span></li>
            <li><span class="key">E</span><span>$a_n$ diverge, $b_n\to e^{e}$, $c_n\to1$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">I — diverge (três subsequências, três limites)</span>
          <p>O fator $\operatorname{sen}\left(\frac{n}{2}\pi\right)$ é periódico de período $4$: vale $1,\,0,\,-1,\,0,\,1,\,0,\,-1,\dots$ conforme $n=1,2,3,4,\dots$ Separando por resto de $n$ na divisão por $4$:</p>
          <table>
            <tr><th>Índices</th><th>$\operatorname{sen}(n\pi/2)$</th><th>$a_n$</th><th>Limite</th></tr>
            <tr><td>$n\equiv1\ (\mathrm{mod}\ 4)$</td><td>$1$</td><td>$1+\frac{n}{n+1}$</td><td>$2$</td></tr>
            <tr><td>$n$ par</td><td>$0$</td><td>$1$</td><td>$1$</td></tr>
            <tr><td>$n\equiv3\ (\mathrm{mod}\ 4)$</td><td>$-1$</td><td>$1-\frac{n}{n+1}$</td><td>$0$</td></tr>
          </table>
          <p>Três subsequências com limites $2$, $1$ e $0$: como uma sequência convergente tem <em>todas</em> as subsequências convergindo para o mesmo valor, $(a_n)$ <strong>diverge</strong>. (Numericamente: $1{,}5;\ 1;\ 0{,}25;\ 1;\ 1{,}83;\ 1;\ 0{,}125;\dots$)</p>
          <span class="step-label">II — o limite notável, com $c=-e$</span>
          <p>Separe a fração para fazer aparecer a forma $\left(1+\frac{c}{m}\right)^{m}$:</p>
          $$b_n=\left(\frac{n+1-e}{n+1}\right)^{n}=\left(1-\frac{e}{n+1}\right)^{n}=\underbrace{\left(1-\frac{e}{n+1}\right)^{n+1}}_{\to\;e^{-e}}\cdot\underbrace{\left(1-\frac{e}{n+1}\right)^{-1}}_{\to\;1}.$$
          <p>Logo $b_n\to e^{-e}\approx0{,}0660$. (Conferindo: $n=10^{4}$ dá $0{,}065982$.)</p>
          <span class="step-label">III — potência vence logaritmo</span>
          <p>Qualquer potência positiva de $n$ cresce mais rápido que qualquer potência de $\ln n$. Formalmente, por L'Hôpital aplicado três vezes a $\dfrac{(\ln x)^{3}}{x^{2}}$ (ou usando $\ln n\le C_\varepsilon\, n^{\varepsilon}$ com $\varepsilon=\tfrac14$, que dá $c_n\le C^3 n^{3/4-2}\to0$):</p>
          $$c_n=\frac{(\ln n)^{3}}{n^{2}}\ \longrightarrow\ 0.$$
          <div class="final">Alternativa <b>A</b>: $a_n$ diverge, $b_n\to e^{-e}$, $c_n\to0$.</div>
          <div class="note">As alternativas foram montadas para punir erros de sinal: $e^{-e}$ (certo) contra $e^{e}$ e $e^{-1}$. Ao usar $\left(1+\frac{c}{n}\right)^n\to e^{c}$, identifique o $c$ com o sinal — aqui $c=-e$, porque a fração foi escrita como $1-\frac{e}{n+1}$.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 2', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja a série $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}}{\ln\left(e^{n}+e^{-n}\right)}$ e considere as seguintes afirmações:</p>
          <p><strong>I.</strong> A série é convergente. &nbsp;&nbsp; <strong>II.</strong> A série é absolutamente convergente. &nbsp;&nbsp; <strong>III.</strong> A série é divergente. &nbsp;&nbsp; <strong>IV.</strong> A série é condicionalmente convergente.</p>
          <p>Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas a afirmação I é verdadeira.</span></li>
            <li><span class="key">B</span><span>Apenas as afirmações I e IV são verdadeiras.</span></li>
            <li><span class="key">C</span><span>Apenas a afirmação II é verdadeira.</span></li>
            <li><span class="key">D</span><span>Apenas a afirmação III é verdadeira.</span></li>
            <li><span class="key">E</span><span>Apenas as afirmações I e II são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — simplificar o denominador</span>
          <p>Este é o truque da questão. Coloque $e^{n}$ em evidência dentro do logaritmo:</p>
          $$\ln\left(e^{n}+e^{-n}\right)=\ln\left[e^{n}\left(1+e^{-2n}\right)\right]=n+\underbrace{\ln\left(1+e^{-2n}\right)}_{\to\,0}.$$
          <p>Ou seja, o denominador é <strong>essencialmente $n$</strong>. A série se comporta como a harmônica alternada.</p>
          <span class="step-label">Passo 2 — converge? (Leibniz)</span>
          <p>Seja $b_n=\dfrac{1}{\ln(e^{n}+e^{-n})}$. Ela é positiva; é decrescente, porque $e^{x}+e^{-x}$ é crescente para $x\ge1$ e o $\ln$ preserva isso; e $b_n\to0$, já que o denominador $\to+\infty$. As três hipóteses de Leibniz valem: a série <strong>converge</strong>. Afirmação I verdadeira, III falsa.</p>
          <span class="step-label">Passo 3 — absolutamente? (comparação no limite)</span>
          <p>Compare $b_n$ com $\frac1n$:</p>
          $$\frac{b_n}{1/n}=\frac{n}{n+\ln\left(1+e^{-2n}\right)}=\frac{1}{1+\frac{\ln(1+e^{-2n})}{n}}\ \longrightarrow\ 1\in(0,\infty).$$
          <p>Como $\sum\frac1n$ diverge, $\sum b_n$ diverge também. Não há convergência absoluta: II é falsa.</p>
          <span class="step-label">Passo 4 — juntar</span>
          <p>Converge, mas não absolutamente ⟹ <strong>converge condicionalmente</strong>. I e IV verdadeiras.</p>
          <div class="final">Alternativa <b>B</b>: apenas I e IV.</div>
          <div class="note">Sempre que aparecer $\ln(e^{n}+\text{algo pequeno})$, fatore o $e^{n}$: o logaritmo vira $n$ mais um resto que tende a zero. Sem isso, a comparação com $\frac1n$ fica difícil de enxergar.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 3', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a série $\displaystyle\sum_{n=1}^{\infty}\frac{2^{n}\,n!\left(1-\cos(n^{2})\right)}{2\cdot5\cdot8\cdots(3n-1)}$ e as seguintes afirmações:</p>
          <p><strong>I.</strong> A série é convergente. &nbsp;&nbsp; <strong>II.</strong> A série é alternada. &nbsp;&nbsp; <strong>III.</strong> A série é divergente. &nbsp;&nbsp; <strong>IV.</strong> A série é condicionalmente convergente.</p>
          <p>Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas as afirmações III e IV são verdadeiras.</span></li>
            <li><span class="key">B</span><span>Apenas as afirmações I e II são verdadeiras.</span></li>
            <li><span class="key">C</span><span>Apenas a afirmação I é verdadeira.</span></li>
            <li><span class="key">D</span><span>Apenas as afirmações I e IV são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Apenas a afirmação III é verdadeira.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — o sinal: a série NÃO é alternada</span>
          <p>Para qualquer argumento, $-1\le\cos(n^{2})\le1$, portanto</p>
          $$0\le1-\cos(n^{2})\le2.$$
          <p>Todo o resto ($2^n$, $n!$, o produto $2\cdot5\cdots(3n-1)$) é positivo. Logo <strong>todos os termos são $\ge0$</strong>: a afirmação II é falsa — e, com ela, a IV, porque uma série de termos não negativos que converge, converge <em>absolutamente</em>; não existe convergência condicional aqui.</p>
          <span class="step-label">Passo 2 — majorar para eliminar o cosseno</span>
          <p>Usando $1-\cos(n^{2})\le2$:</p>
          $$0\le a_n\le 2\,c_n,\qquad\text{onde }c_n=\frac{2^{n}\,n!}{2\cdot5\cdot8\cdots(3n-1)}.$$
          <p>Basta mostrar que $\sum c_n$ converge — o cosseno, que é intratável isoladamente, some do problema.</p>
          <span class="step-label">Passo 3 — teste da razão em $c_n$</span>
          <p>Ao passar de $n$ para $n+1$: o $2^n$ ganha um fator $2$, o $n!$ ganha $(n+1)$ e o produto do denominador ganha o fator seguinte, $3(n+1)-1=3n+2$. Assim</p>
          $$\frac{c_{n+1}}{c_n}=\frac{2\,(n+1)}{3n+2}\ \longrightarrow\ \frac23&lt;1.$$
          <p>Pelo teste da razão, $\sum c_n$ converge; por comparação, $\sum a_n$ converge. Afirmação I verdadeira, III falsa.</p>
          <div class="final">Alternativa <b>C</b>: apenas a afirmação I é verdadeira.</div>
          <div class="note">Produtos do tipo $2\cdot5\cdot8\cdots(3n-1)$ assustam, mas no <em>quociente</em> $c_{n+1}/c_n$ tudo cancela e sobra só o fator novo. Sempre que o termo geral for um produto de $n$ fatores, o teste da razão é o caminho natural.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 4', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $b&gt;0$ e considere a série $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^{b}}$. Considere as seguintes afirmações:</p>
          <p><strong>I.</strong> A série é convergente para $b&gt;1$. &nbsp;&nbsp; <strong>II.</strong> A série é convergente para $b&lt;1$. &nbsp;&nbsp; <strong>III.</strong> A série é divergente para $b&gt;1$.</p>
          <p>Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">B</span><span>Apenas a afirmação III é verdadeira.</span></li>
            <li><span class="key">C</span><span>Apenas a afirmação II é verdadeira.</span></li>
            <li><span class="key">D</span><span>Apenas as afirmações II e III são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Apenas a afirmação I é verdadeira.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — critério da integral</span>
          <p>$f(x)=\dfrac{1}{x(\ln x)^{b}}$ é positiva, contínua e decrescente em $[2,\infty)$. Com $u=\ln x$, $du=\frac{dx}{x}$:</p>
          $$\int_{2}^{\infty}\frac{dx}{x(\ln x)^{b}}=\int_{\ln2}^{\infty}\frac{du}{u^{b}}.$$
          <span class="step-label">Passo 2 — a integral virou uma $p$-integral</span>
          <p>$\displaystyle\int_{\ln2}^{\infty}u^{-b}\,du$ converge exatamente quando $b&gt;1$:</p>
          $$b&gt;1:\ \left[\frac{u^{1-b}}{1-b}\right]_{\ln2}^{\infty}=\frac{(\ln2)^{1-b}}{b-1}&lt;\infty;\qquad b&lt;1:\ \left[\frac{u^{1-b}}{1-b}\right]_{\ln2}^{\infty}=+\infty;\qquad b=1:\ \big[\ln u\big]_{\ln2}^{\infty}=+\infty.$$
          <span class="step-label">Passo 3 — o veredito</span>
          <p>$$\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^{b}}\ \text{converge}\iff b&gt;1.$$</p>
          <p>Logo: <strong>I é verdadeira</strong>; II é falsa (para $b&lt;1$ diverge); III é falsa (para $b&gt;1$ converge, não diverge).</p>
          <div class="final">Alternativa <b>E</b>: apenas a afirmação I é verdadeira.</div>
          <div class="note">Esta é a fronteira que separa $\sum\frac1{n\ln n}$ (diverge, $b=1$) de $\sum\frac{1}{n(\ln n)^2}$ (converge, $b=2$) — as mesmas séries que aparecem nas Questões 2 e 3 da P1 de 2025 e na Questão 4 da P1 de 2024. É o resultado mais recorrente das três provas.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 5', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a série $\displaystyle\sum_{n=1}^{\infty}\left(e^{\cos\alpha}\right)^{n-1}$, com $\alpha\in(0,4\pi)$. Determine para quais valores do parâmetro $\alpha\in(0,4\pi)$ a série converge e para quais valores de $\alpha\in(0,4\pi)$ a soma é $2$.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Converge se, e somente se, $\frac{(2k-1)\pi}{2}&lt;\alpha&lt;\frac{(2k+1)\pi}{2}$ para $k=1,2$. Não existe $\alpha$ tal que a soma seja $2$.</span></li>
            <li><span class="key">B</span><span>A série diverge para todo $\alpha\in(0,4\pi)$.</span></li>
            <li><span class="key">C</span><span>Converge se, e somente se, $\frac{(4k-3)\pi}{2}&lt;\alpha&lt;\frac{(4k-1)\pi}{2}$ para $k=1,2$, e $\alpha=\arccos(-\ln2)$ é um dos valores para os quais a soma é $2$.</span></li>
            <li><span class="key">D</span><span>Converge se, e somente se, $\frac{(4k-3)\pi}{2}&lt;\alpha&lt;\frac{(4k-1)\pi}{2}$ para $k=1,2$, e $\alpha=\arccos(\ln2)$ é um dos valores para os quais a soma é $2$.</span></li>
            <li><span class="key">E</span><span>Converge se, e somente se, $\frac{(4k-3)\pi}{2}&lt;\alpha&lt;\frac{(4k-1)\pi}{2}$ para $k=1,2$. Não existe $\alpha$ tal que a soma seja $2$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — é uma geométrica de razão $r=e^{\cos\alpha}$</span>
          <p>Como o expoente é $n-1$ e $n$ começa em $1$, a série é $\sum_{n\ge1}r^{\,n-1}=1+r+r^{2}+\cdots$, geométrica de primeiro termo $1$ e razão $r=e^{\cos\alpha}$. Ela converge se, e somente se, $|r|&lt;1$.</p>
          <span class="step-label">Passo 2 — traduzir $|r|&lt;1$ em uma condição sobre $\alpha$</span>
          <p>Como a exponencial é sempre positiva, $|r|=e^{\cos\alpha}$ e</p>
          $$e^{\cos\alpha}&lt;1\iff\cos\alpha&lt;0.$$
          <span class="step-label">Passo 3 — onde $\cos\alpha&lt;0$ dentro de $(0,4\pi)$</span>
          <p>O cosseno é negativo no segundo e terceiro quadrantes, ou seja em $\left(\frac{\pi}{2},\frac{3\pi}{2}\right)$ e, uma volta adiante, em $\left(\frac{5\pi}{2},\frac{7\pi}{2}\right)$. Escrevendo esses dois intervalos em uma fórmula só:</p>
          $$\frac{(4k-3)\pi}{2}&lt;\alpha&lt;\frac{(4k-1)\pi}{2},\qquad k=1,2.$$
          <p>Confira: $k=1$ dá $\left(\frac{\pi}2,\frac{3\pi}2\right)$ e $k=2$ dá $\left(\frac{5\pi}2,\frac{7\pi}2\right)$ ✓. Isso já elimina a alternativa A, cuja fórmula $\frac{(2k-1)\pi}{2}&lt;\alpha&lt;\frac{(2k+1)\pi}{2}$ produziria também $\left(\frac{3\pi}2,\frac{5\pi}2\right)$, onde o cosseno é positivo.</p>
          <span class="step-label">Passo 4 — quando a soma vale 2</span>
          <p>Para $|r|&lt;1$, $\displaystyle\sum_{n\ge1}r^{\,n-1}=\frac{1}{1-r}$. Impondo que isso seja $2$:</p>
          $$\frac{1}{1-r}=2\iff 1-r=\frac12\iff r=\frac12.$$
          <p>Voltando à variável original: $e^{\cos\alpha}=\tfrac12\iff\cos\alpha=\ln\tfrac12=-\ln2$, ou seja</p>
          $$\alpha=\arccos(-\ln2)\approx2{,}337\ \text{rad}.$$
          <span class="step-label">Passo 5 — esse $\alpha$ é admissível?</span>
          <p>Sim: $-\ln2\approx-0{,}693&lt;0$, então $\alpha\approx2{,}337$ cai em $\left(\frac{\pi}{2},\frac{3\pi}{2}\right)\approx(1{,}571;\,4{,}712)$, dentro da região de convergência. (Há um segundo valor, na volta seguinte, daí o enunciado dizer "um dos valores".)</p>
          <div class="final">Alternativa <b>C</b>.</div>
          <div class="note">A alternativa D troca $\arccos(-\ln2)$ por $\arccos(\ln2)$. Além do sinal estar errado, esse $\alpha$ teria $\cos\alpha=+\ln2&gt;0$ — ou seja, cairia justamente fora da região onde a série converge. Vale checar sempre se a raiz encontrada pertence ao domínio de validade.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 6', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a série $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\left(1-\cos\left(\tfrac1n\right)\right)$. Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>A série não é uma série alternada.</span></li>
            <li><span class="key">B</span><span>A série converge condicionalmente.</span></li>
            <li><span class="key">C</span><span>A série converge absolutamente.</span></li>
            <li><span class="key">D</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">E</span><span>A série diverge.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — ela é alternada (A é falsa)</span>
          <p>Para $n\ge1$ temos $0&lt;\frac1n\le1&lt;\frac{\pi}{2}$, então $\cos\left(\frac1n\right)&lt;1$ e portanto $1-\cos\left(\frac1n\right)&gt;0$. O fator $(-1)^{n}$ é o único responsável pelo sinal: a série <strong>é</strong> alternada.</p>
          <span class="step-label">Passo 2 — estimar o tamanho do termo</span>
          <p>Perto de $0$ vale $1-\cos t\approx\dfrac{t^{2}}{2}$ (é o que dá a série de Taylor $\cos t=1-\frac{t^2}{2}+\frac{t^4}{24}-\cdots$). Com $t=\frac1n$, espera-se $1-\cos\frac1n\approx\dfrac{1}{2n^{2}}$. Formalizando por comparação no limite com $b_n=\frac{1}{n^{2}}$:</p>
          $$\lim_{n\to\infty}\frac{1-\cos\left(\frac1n\right)}{\frac{1}{n^{2}}}=\lim_{t\to0^{+}}\frac{1-\cos t}{t^{2}}=\frac12\in(0,\infty).$$
          <span class="step-label">Passo 3 — concluir</span>
          <p>Como $\sum\frac{1}{n^{2}}$ converge ($p=2&gt;1$), a comparação no limite garante que $\sum\left|(-1)^{n}\left(1-\cos\frac1n\right)\right|=\sum\left(1-\cos\frac1n\right)$ <strong>converge</strong>.</p>
          <p>Convergência absoluta ⟹ convergência. Logo E é falsa, B é falsa (não é <em>condicional</em>, é absoluta) e C é verdadeira.</p>
          <div class="final">Alternativa <b>C</b>: a série converge absolutamente.</div>
          <div class="note">O reflexo errado aqui é ver uma série alternada e ir direto para Leibniz — que de fato se aplica e prova a convergência, mas não distingue entre B e C. Como quase sempre, o teste que <em>decide</em> a questão é o do valor absoluto.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 7', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a série $\displaystyle\sum_{n=1}^{\infty}\frac{2}{4n^{2}+8n+3}$. Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>A série converge e tem soma igual a $1$.</span></li>
            <li><span class="key">B</span><span>A série converge e tem soma igual a $\tfrac{1}{15}$.</span></li>
            <li><span class="key">C</span><span>A série converge e tem soma igual a $\tfrac13$.</span></li>
            <li><span class="key">D</span><span>A série diverge.</span></li>
            <li><span class="key">E</span><span>A série converge e tem soma igual a $\tfrac23$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — fatorar o denominador</span>
          <p>Raízes de $4n^{2}+8n+3$: $n=\frac{-8\pm\sqrt{64-48}}{8}=\frac{-8\pm4}{8}$, ou seja $-\tfrac12$ e $-\tfrac32$. Logo</p>
          $$4n^{2}+8n+3=(2n+1)(2n+3).$$
          <span class="step-label">Passo 2 — frações parciais</span>
          <p>$\dfrac{2}{(2n+1)(2n+3)}=\dfrac{A}{2n+1}+\dfrac{B}{2n+3}$ leva a $A(2n+3)+B(2n+1)=2$, isto é $2n(A+B)+(3A+B)=2$. Então $A+B=0$ e $3A+B=2$, dando $A=1$, $B=-1$:</p>
          $$\frac{2}{4n^{2}+8n+3}=\frac{1}{2n+1}-\frac{1}{2n+3}.$$
          <span class="step-label">Passo 3 — telescopar</span>
          <p>$$S_N=\left(\frac13-\frac15\right)+\left(\frac15-\frac17\right)+\cdots+\left(\frac{1}{2N+1}-\frac{1}{2N+3}\right)=\frac13-\frac{1}{2N+3}.$$</p>
          <span class="step-label">Passo 4 — limite</span>
          <p>$\dfrac{1}{2N+3}\to0$, portanto $S_N\to\dfrac13$. (Confere com o primeiro termo: $n=1$ dá $\frac{2}{15}=\frac13-\frac15$ ✓.)</p>
          <div class="final">Alternativa <b>C</b>: a soma vale $\tfrac13$.</div>
          <div class="note">Cuidado com o índice inicial. Aqui a soma começa em $n=1$, então o termo que sobra é $\frac{1}{2\cdot1+1}=\frac13$ — e não $1$. Na Questão 1 da P1 de 2024, uma telescópica praticamente idêntica começava em $\frac{1}{2n-1}$ e sobrava $1$, resultando em $\frac12$ depois do fator $\frac12$.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 8', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a sequência $\{a_n\}$ dada pelo termo $$a_n=\left(1-\frac{1}{4^{2}}\right)\left(1-\frac{1}{5^{2}}\right)\cdots\left(1-\frac{1}{n^{2}}\right),\qquad n\ge4.$$ Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>A sequência converge para $\tfrac13$.</span></li>
            <li><span class="key">B</span><span>A sequência converge para $\tfrac14$.</span></li>
            <li><span class="key">C</span><span>A sequência diverge.</span></li>
            <li><span class="key">D</span><span>A sequência converge para $\tfrac34$.</span></li>
            <li><span class="key">E</span><span>A sequência converge para $2$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — fatorar cada fator</span>
          <p>É um <strong>produto telescópico</strong> — a versão multiplicativa da soma telescópica. A chave é a diferença de quadrados:</p>
          $$1-\frac{1}{k^{2}}=\frac{k^{2}-1}{k^{2}}=\frac{(k-1)(k+1)}{k^{2}}=\frac{k-1}{k}\cdot\frac{k+1}{k}.$$
          <span class="step-label">Passo 2 — separar em dois produtos</span>
          <p>$$a_n=\prod_{k=4}^{n}\frac{k-1}{k}\ \cdot\ \prod_{k=4}^{n}\frac{k+1}{k}.$$</p>
          <span class="step-label">Passo 3 — cada produto telescopa</span>
          <p>$$\prod_{k=4}^{n}\frac{k-1}{k}=\frac34\cdot\frac45\cdot\frac56\cdots\frac{n-1}{n}=\frac3n,$$</p>
          <p>$$\prod_{k=4}^{n}\frac{k+1}{k}=\frac54\cdot\frac65\cdot\frac76\cdots\frac{n+1}{n}=\frac{n+1}{4}.$$</p>
          <span class="step-label">Passo 4 — multiplicar e tomar o limite</span>
          <p>$$a_n=\frac3n\cdot\frac{n+1}{4}=\frac{3(n+1)}{4n}=\frac34\left(1+\frac1n\right)\ \longrightarrow\ \frac34.$$</p>
          <p>Conferindo em $n=4$: a fórmula dá $\frac{3\cdot5}{16}=\frac{15}{16}$, que é exatamente $1-\frac{1}{16}$ ✓.</p>
          <div class="final">Alternativa <b>D</b>: converge para $\tfrac34$.</div>
          <div class="note">Note que o limite é $&gt;0$ mesmo multiplicando infinitos fatores menores que $1$ — o produto infinito $\prod\left(1-\frac1{k^2}\right)$ converge porque $\sum\frac{1}{k^{2}}$ converge. Se os fatores fossem $1-\frac1k$, o produto seria $\frac{3}{n}\to0$.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 9', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja a série $\displaystyle\sum_{n=2}^{\infty}\frac{(2x)^{n}}{n\ln(n+1)}$. Considere as seguintes afirmações:</p>
          <p><strong>I.</strong> Quando $x=-\tfrac12$ a série converge pelo critério da série alternada.</p>
          <p><strong>II.</strong> Para os valores reais $x\in\left[-\tfrac12,\tfrac12\right)$ a série converge.</p>
          <p><strong>III.</strong> Quando $x=\tfrac12$ a série diverge.</p>
          <p>Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">B</span><span>Todas as afirmações são verdadeiras.</span></li>
            <li><span class="key">C</span><span>Apenas as afirmações I e II são verdadeiras.</span></li>
            <li><span class="key">D</span><span>Apenas a afirmação II é verdadeira.</span></li>
            <li><span class="key">E</span><span>Apenas as afirmações II e III são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — raio de convergência</span>
          <p>Teste da razão com $a_n=\dfrac{(2x)^{n}}{n\ln(n+1)}$:</p>
          $$\left|\frac{a_{n+1}}{a_n}\right|=|2x|\cdot\frac{n}{n+1}\cdot\frac{\ln(n+1)}{\ln(n+2)}\ \longrightarrow\ |2x|,$$
          <p>pois ambos os quocientes tendem a $1$. Há convergência absoluta se $|2x|&lt;1$, ou seja $|x|&lt;\tfrac12$, e divergência se $|x|&gt;\tfrac12$. Restam as bordas $x=\pm\tfrac12$.</p>
          <span class="step-label">Passo 2 — borda $x=\tfrac12$ (afirmação III)</span>
          <p>Aí $(2x)^{n}=1$ e a série vira $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n\ln(n+1)}$, de termos positivos. Comparando no limite com $\frac{1}{n\ln n}$ (o quociente $\frac{\ln n}{\ln(n+1)}\to1$) e lembrando da Questão 4 que $\sum\frac{1}{n\ln n}$ <strong>diverge</strong>, concluímos que ela também diverge. <strong>III é verdadeira.</strong></p>
          <span class="step-label">Passo 3 — borda $x=-\tfrac12$ (afirmação I)</span>
          <p>Aí $(2x)^{n}=(-1)^{n}$ e a série vira $\displaystyle\sum_{n=2}^{\infty}\frac{(-1)^{n}}{n\ln(n+1)}$. Com $b_n=\frac{1}{n\ln(n+1)}$: é positiva, é decrescente (o denominador $n\ln(n+1)$ é crescente) e tende a $0$. As três hipóteses de Leibniz valem, então a série converge <em>pelo critério da série alternada</em> — exatamente o que a afirmação diz. <strong>I é verdadeira.</strong></p>
          <span class="step-label">Passo 4 — o conjunto de convergência (afirmação II)</span>
          <p>Juntando: converge em $|x|&lt;\tfrac12$, converge em $x=-\tfrac12$ e diverge em $x=\tfrac12$. O conjunto é</p>
          $$\left[-\tfrac12,\ \tfrac12\right),$$
          <p>que é precisamente o que II afirma. <strong>II é verdadeira.</strong></p>
          <div class="final">Alternativa <b>B</b>: todas as afirmações são verdadeiras.</div>
          <div class="note">É o mesmo desenho da Questão 4 da P1 de 2025 ($\sum\frac{x^n}{5^n n}$, conjunto $[-5,5)$): quando o denominador é "$n$ vezes algo que cresce devagar", a borda negativa entra por Leibniz e a positiva sai por divergência. Intervalo semiaberto é a resposta típica.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 10', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $\{a_n\}_{n\ge1}$ a sequência definida por $a_1=2$ e $a_{n+1}=\sqrt{\dfrac12+a_n}$, $n\ge1$. Considere as seguintes afirmações:</p>
          <p><strong>I.</strong> A sequência é crescente e limitada superiormente por $\frac{1+\sqrt3}{2}$. &nbsp;&nbsp; <strong>II.</strong> A sequência é limitada inferiormente por $\frac{1+\sqrt3}{2}$. &nbsp;&nbsp; <strong>III.</strong> A sequência é decrescente. &nbsp;&nbsp; <strong>IV.</strong> A sequência é divergente.</p>
          <p>Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas a afirmação III é verdadeira.</span></li>
            <li><span class="key">B</span><span>Apenas a afirmação I é verdadeira.</span></li>
            <li><span class="key">C</span><span>Apenas as afirmações II e III são verdadeiras.</span></li>
            <li><span class="key">D</span><span>Todas as afirmações são falsas.</span></li>
            <li><span class="key">E</span><span>Apenas as afirmações II e IV são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 0 — o candidato a limite</span>
          <p>Se $a_n\to L$, então $L=\sqrt{\tfrac12+L}$, logo $L^{2}-L-\tfrac12=0$ e</p>
          $$L=\frac{1\pm\sqrt{1+2}}{2}=\frac{1\pm\sqrt3}{2}.$$
          <p>Como todos os termos são positivos, o único candidato viável é $L=\dfrac{1+\sqrt3}{2}\approx1{,}3660$. É esse número que aparece nas afirmações — não por acaso.</p>
          <span class="step-label">Passo 1 — cota inferior (afirmação II)</span>
          <p>Por indução. Base: $a_1=2&gt;L$. Passo: se $a_n&gt;L$, então</p>
          $$a_{n+1}=\sqrt{\tfrac12+a_n}&gt;\sqrt{\tfrac12+L}=L,$$
          <p>usando que $t\mapsto\sqrt{\frac12+t}$ é crescente e que $L=\sqrt{\frac12+L}$. Logo $a_n&gt;L$ para todo $n$: a sequência é <strong>limitada inferiormente</strong> por $\frac{1+\sqrt3}{2}$. <strong>II é verdadeira.</strong></p>
          <span class="step-label">Passo 2 — decrescente (afirmação III)</span>
          <p>Queremos $a_{n+1}&lt;a_n$, isto é $\sqrt{\tfrac12+a_n}&lt;a_n$. Elevando ao quadrado (ambos positivos), isso equivale a</p>
          $$a_n^{2}-a_n-\tfrac12&gt;0\iff\left(a_n-\frac{1+\sqrt3}{2}\right)\left(a_n-\frac{1-\sqrt3}{2}\right)&gt;0.$$
          <p>Pelo Passo 1, $a_n&gt;\frac{1+\sqrt3}{2}$, então os dois fatores são positivos e o produto também. Portanto a sequência é <strong>decrescente</strong>. <strong>III é verdadeira</strong> — e I é falsa, pois afirma o oposto.</p>
          <p>Numericamente: $2;\ 1{,}5811;\ 1{,}4426;\ 1{,}3938;\ 1{,}3761;\dots\to1{,}3660$.</p>
          <span class="step-label">Passo 3 — converge (afirmação IV é falsa)</span>
          <p>Decrescente e limitada inferiormente ⟹ converge, pelo teorema da sequência monótona. O limite é o ponto fixo $\frac{1+\sqrt3}{2}$. Logo IV é falsa.</p>
          <div class="final">Alternativa <b>C</b>: apenas as afirmações II e III são verdadeiras.</div>
          <div class="note">Compare com a Questão 11 da P1 de 2024: lá a sequência começava <em>abaixo</em> do ponto fixo e subia; aqui começa <em>acima</em> e desce. O roteiro é o mesmo (ponto fixo → monotonia e limitação por indução → teorema da monótona); o que muda é de que lado de $L$ está $a_1$.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 11', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a série $\displaystyle\sum_{n=1}^{\infty}(\tan x)^{3n}$. Quais das seguintes afirmações são verdadeiras?</p>
          <p><strong>I.</strong> A série é convergente para todo $x\in\mathbb R$.</p>
          <p><strong>II.</strong> Para os valores reais $x\in\left(-\frac{\pi}{4},\frac{\pi}{4}\right)$ a série converge.</p>
          <p><strong>III.</strong> Quando $x=\pm\frac{\pi}{4}$ a série diverge pelo critério da divergência.</p>
          <p>Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas a afirmação III é verdadeira.</span></li>
            <li><span class="key">B</span><span>Apenas a afirmação II é verdadeira.</span></li>
            <li><span class="key">C</span><span>Apenas as afirmações II e III são verdadeiras.</span></li>
            <li><span class="key">D</span><span>Nenhuma das afirmações são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Apenas as afirmações I e II são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — é uma geométrica disfarçada</span>
          <p>Escreva $(\tan x)^{3n}=\left[(\tan x)^{3}\right]^{n}$. Com $r=\tan^{3}x$, a série é $\sum_{n\ge1}r^{n}$: geométrica. Ela converge se, e somente se,</p>
          $$|r|&lt;1\iff|\tan x|^{3}&lt;1\iff|\tan x|&lt;1.$$
          <span class="step-label">Passo 2 — afirmação II</span>
          <p>Em $\left(-\frac{\pi}{4},\frac{\pi}{4}\right)$ a tangente é contínua e vai de $-1$ a $1$ sem atingir os extremos, ou seja $|\tan x|&lt;1$. A série converge nesse intervalo. <strong>II é verdadeira.</strong></p>
          <span class="step-label">Passo 3 — afirmação I é falsa</span>
          <p>Basta um contraexemplo: $x=\frac{\pi}{3}$ dá $\tan x=\sqrt3$ e $r=3\sqrt3\approx5{,}196&gt;1$ — diverge. Pior: em $x=\frac{\pi}{2}$ a tangente nem está definida. Logo a série não converge para todo $x$ real.</p>
          <span class="step-label">Passo 4 — afirmação III</span>
          <p>Em $x=\frac{\pi}{4}$: $\tan x=1$, então $r=1$ e todos os termos valem $1$. Em $x=-\frac{\pi}{4}$: $\tan x=-1$, então $r=-1$ e os termos são $(-1)^{n}$, oscilando entre $-1$ e $1$.</p>
          <p>Nos dois casos o termo geral <strong>não tende a zero</strong>, e o critério da divergência (teste do termo geral) dá divergência imediata. <strong>III é verdadeira</strong>, inclusive na justificativa que apresenta.</p>
          <div class="final">Alternativa <b>C</b>: apenas as afirmações II e III são verdadeiras.</div>
          <div class="note">A afirmação II não diz que $\left(-\frac{\pi}{4},\frac{\pi}{4}\right)$ é <em>todo</em> o conjunto de convergência — e não é, pois $|\tan x|&lt;1$ também vale em $\left(\frac{3\pi}{4},\frac{5\pi}{4}\right)$ e nas demais translações por $\pi$. Ela afirma apenas que ali há convergência, o que é verdade.</div>
        `
      },

      {
        ref: 'P1 2023 · Questão 12', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a série $\displaystyle\sum_{n=1}^{\infty}\left(\frac{7+(-1)^{n}}{2}\right)^{-n}$. Quais das seguintes afirmações são verdadeiras?</p>
          <p><strong>I.</strong> A série é convergente e sua soma é $\tfrac{53}{120}$. &nbsp;&nbsp; <strong>II.</strong> A série é a soma de duas séries geométricas. &nbsp;&nbsp; <strong>III.</strong> A série diverge.</p>
          <p>Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas a afirmação III é verdadeira.</span></li>
            <li><span class="key">B</span><span>Apenas a afirmação II é verdadeira.</span></li>
            <li><span class="key">C</span><span>Apenas as afirmações II e III são verdadeiras.</span></li>
            <li><span class="key">D</span><span>Apenas as afirmações I e II são verdadeiras.</span></li>
            <li><span class="key">E</span><span>Apenas a afirmação I é verdadeira.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — a base só assume dois valores</span>
          <p>$$n\ \text{par}:\ \frac{7+1}{2}=4,\qquad n\ \text{ímpar}:\ \frac{7-1}{2}=3.$$</p>
          <p>Com o expoente $-n$, o termo é $4^{-n}$ nos pares e $3^{-n}$ nos ímpares. Todos positivos, então pode-se reagrupar a soma livremente.</p>
          <span class="step-label">Passo 2 — separar em duas geométricas (afirmação II)</span>
          <p>Atenção ao índice inicial: aqui a soma começa em $n=1$, que é <em>ímpar</em>. Escrevendo $n=2k+1$ (ímpares, $k\ge0$) e $n=2k$ (pares, $k\ge1$):</p>
          $$S=\underbrace{\sum_{k=0}^{\infty}3^{-(2k+1)}}_{S_{\text{ímpar}}}+\underbrace{\sum_{k=1}^{\infty}4^{-2k}}_{S_{\text{par}}}=\frac13\sum_{k=0}^{\infty}\left(\frac19\right)^{k}+\sum_{k=1}^{\infty}\left(\frac{1}{16}\right)^{k}.$$
          <p>São duas geométricas, de razões $\tfrac19$ e $\tfrac1{16}$. <strong>II é verdadeira.</strong></p>
          <span class="step-label">Passo 3 — somar cada uma</span>
          <p>$$S_{\text{ímpar}}=\frac13\cdot\frac{1}{1-\frac19}=\frac13\cdot\frac98=\frac38,\qquad S_{\text{par}}=\frac{\frac{1}{16}}{1-\frac{1}{16}}=\frac{1}{15}.$$</p>
          <p>(Na segunda usei $\sum_{k\ge1}r^{k}=\frac{r}{1-r}$, já que ela começa em $k=1$ e não em $k=0$.)</p>
          <span class="step-label">Passo 4 — total</span>
          <p>$$S=\frac38+\frac{1}{15}=\frac{45}{120}+\frac{8}{120}=\frac{53}{120}\approx0{,}4417.$$</p>
          <p>Bate com a afirmação I, que é verdadeira; e como a soma é finita, III é falsa.</p>
          <div class="final">Alternativa <b>D</b>: apenas as afirmações I e II.</div>
          <div class="note">É a irmã da Questão 8 da P1 de 2024 (mesma estrutura, com $5$ no lugar do $7$ e começando em $n=0$). A diferença que muda o resultado é justamente o índice inicial: lá $n=0$ é par e a geométrica dos pares começa em $k=0$; aqui $n=1$ é ímpar e a dos pares só começa em $k=1$.</div>
        `
      },

    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p1-t10', number: '10',
    title: 'Prova P1 — 2022',
    subtitle: '— prova antiga resolvida (04/10/2022, Tipo 27)',
    intro: String.raw`
      <p>P1 de <strong>04/10/2022</strong> (Tipo 27), com as 12 questões transcritas e resolvidas. O <strong>gabarito oficial</strong> vinha anotado na capa e todas as respostas abaixo foram reconferidas contra ele: <code>1D · 2E · 3A · 4D · 5C · 6E · 7C · 8D · 9E · 10B · 11C · 12E</code>.</p>
      <p>Esta é de longe a prova mais pesada em <strong>séries de potências</strong>: metade dela (Q1, Q3, Q9, Q10 e Q11) trata de raio e intervalo de convergência, de reconhecer qual função uma série representa e de extrair derivadas $f^{(k)}(0)$ a partir dos coeficientes. Vale usá-la principalmente como treino do tópico 06.</p>
      <p>Duas distinções finas decidem várias questões: <strong>(1)</strong> raio de convergência e <em>intervalo</em> de convergência não são a mesma coisa — integrar ou derivar termo a termo preserva o raio, mas pode mudar as bordas (Q3); <strong>(2)</strong> a série $\sum\frac{u^{2n+1}}{2n+1}$, sem o $(-1)^n$, dá $\operatorname{artanh}u=\frac12\ln\frac{1+u}{1-u}$, e não $\arctan u$ (Q1 contra Q11).</p>
    `,
    exercises: [

      {
        ref: 'P1 2022 · Questão 1', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a seguinte série de potências: $$S(x)=\sum_{n=0}^{\infty}\frac{x^{2n+1}}{2^{2n}(2n+1)},\qquad|x|&lt;1.$$ Qual das seguintes funções representa a soma desta série?</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$S(x)=\arctan\frac{x}{2}$</span></li>
            <li><span class="key">B</span><span>$S(x)=\arctan 2x$</span></li>
            <li><span class="key">C</span><span>$S(x)=\cos\left(\ln\left(1+\frac{x}{2}\right)\right)$</span></li>
            <li><span class="key">D</span><span>$S(x)=\ln\left(\frac{2+x}{2-x}\right)$</span></li>
            <li><span class="key">E</span><span>$S(x)=\operatorname{sen}\frac{x}{2}$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — o sinal já elimina as trigonométricas</span>
          <p>Todos os coeficientes são <strong>positivos</strong>. As séries de $\arctan$, $\operatorname{sen}$ e $\cos$ são todas alternadas, com $(-1)^n$. Isso deixa apenas a alternativa D como candidata — mas vamos deduzi-la.</p>
          <span class="step-label">Passo 2 — arrumar a potência de 2</span>
          <p>Queremos que a base da potência seja $\frac{x}{2}$. Como $\left(\frac{x}{2}\right)^{2n+1}=\dfrac{x^{2n+1}}{2^{2n+1}}=\dfrac{x^{2n+1}}{2\cdot2^{2n}}$, temos $\dfrac{x^{2n+1}}{2^{2n}}=2\left(\dfrac{x}{2}\right)^{2n+1}$. Logo, escrevendo $u=\dfrac x2$:</p>
          $$S(x)=2\sum_{n=0}^{\infty}\frac{u^{2n+1}}{2n+1}.$$
          <span class="step-label">Passo 3 — reconhecer a série</span>
          <p>Partindo da geométrica $\dfrac{1}{1-t}=\sum_{n\ge0}t^{n}$ com $t=u^{2}$ e integrando de $0$ a $u$:</p>
          $$\sum_{n=0}^{\infty}\frac{u^{2n+1}}{2n+1}=\int_{0}^{u}\frac{dt}{1-t^{2}}=\frac12\ln\frac{1+u}{1-u}=\operatorname{artanh}u,\qquad|u|&lt;1.$$
          <span class="step-label">Passo 4 — desfazer a substituição</span>
          <p>$$S(x)=2\cdot\frac12\ln\frac{1+\frac x2}{1-\frac x2}=\ln\left(\frac{\frac{2+x}{2}}{\frac{2-x}{2}}\right)=\ln\left(\frac{2+x}{2-x}\right).$$</p>
          <p>Conferindo em $x=0{,}3$: a soma numérica da série dá $0{,}3022808719$ e $\ln\frac{2{,}3}{1{,}7}=0{,}3022808719$ ✓.</p>
          <div class="final">Alternativa <b>D</b>: $S(x)=\ln\left(\dfrac{2+x}{2-x}\right)$.</div>
          <div class="note"><b>Duas séries quase idênticas.</b> $\displaystyle\sum\frac{u^{2n+1}}{2n+1}=\frac12\ln\frac{1+u}{1-u}$ (todos os sinais $+$, vem de $\frac{1}{1-t^2}$) e $\displaystyle\sum(-1)^n\frac{u^{2n+1}}{2n+1}=\arctan u$ (alternada, vem de $\frac{1}{1+t^2}$). A presença ou ausência do $(-1)^n$ é o que decide entre logaritmo e arco-tangente — veja a Questão 11 desta mesma prova.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 2', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes afirmações:</p>
          <p><strong>(I)</strong> Toda sequência convergente de números reais é limitada.</p>
          <p><strong>(II)</strong> Toda série limitada de números reais positivos é convergente.</p>
          <p><strong>(III)</strong> Se $\sum_{n=0}^{\infty}a_n$ for uma série limitada de números reais com $a_n\ge0\ \forall n\ge0$, então $a_n\to0$.</p>
          <p><strong>(IV)</strong> Se $(b_n)_{n\ge0}$ for uma sequência de números reais positivos e $b_n\to0$, então a série $\sum_{n=0}^{\infty}(-1)^{n}b_n$ é convergente.</p>
          <p>São verdadeiras:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>apenas (I), (II) e (IV).</span></li>
            <li><span class="key">B</span><span>apenas (I), (III) e (IV).</span></li>
            <li><span class="key">C</span><span>apenas (II), (III) e (IV).</span></li>
            <li><span class="key">D</span><span>todas.</span></li>
            <li><span class="key">E</span><span>apenas (I), (II) e (III).</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — verdadeira</span>
          <p>Teorema padrão: se $a_n\to L$, tome $\varepsilon=1$; existe $N$ com $|a_n-L|&lt;1$ para $n\ge N$, ou seja $|a_n|&lt;|L|+1$. Fora disso restam finitos termos $a_1,\dots,a_{N-1}$. Então $|a_n|\le\max\{|a_1|,\dots,|a_{N-1}|,|L|+1\}$ para todo $n$.</p>
          <span class="step-label">(II) — verdadeira (atenção ao que "série limitada" significa)</span>
          <p>Dizer que a <em>série</em> é limitada é dizer que a sequência de <strong>somas parciais</strong> $(S_N)$ é limitada. Se além disso os termos são positivos, então $S_{N+1}=S_N+a_{N+1}&gt;S_N$: as somas parciais são <strong>crescentes</strong>.</p>
          <p>Crescente e limitada ⟹ convergente (teorema da sequência monótona). Logo a série converge.</p>
          <p>A armadilha aqui é pensar na harmônica $\sum\frac1n$ como contraexemplo — ela tem termos positivos e diverge, mas justamente porque suas somas parciais <em>não</em> são limitadas. Ela não satisfaz a hipótese.</p>
          <span class="step-label">(III) — verdadeira</span>
          <p>Consequência direta de (II): a série converge, e toda série convergente tem $a_n\to0$ (teste do termo geral). </p>
          <span class="step-label">(IV) — falsa: falta a monotonia</span>
          <p>De novo o critério de Leibniz exige que $b_n$ seja positiva, <strong>decrescente</strong> e tenda a zero. Só as duas primeiras condições são dadas.</p>
          <p>Contraexemplo: $b_{2k}=\dfrac1k$ e $b_{2k-1}=\dfrac{1}{k^{2}}$. Todos positivos e $b_n\to0$, mas agrupando dois a dois</p>
          $$\sum(-1)^{n}b_n=\sum_{k\ge1}\left(\frac1k-\frac1{k^{2}}\right),$$
          <p>que diverge.</p>
          <div class="final">Alternativa <b>E</b>: apenas (I), (II) e (III).</div>
          <div class="note">Vale fixar a distinção: <b>sequência limitada</b> ⇏ convergente (basta $(-1)^n$); mas <b>série de termos positivos com somas parciais limitadas</b> ⟹ convergente, porque a monotonia das somas parciais vem de graça.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 3', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere as seguintes afirmações:</p>
          <p><strong>(I)</strong> Podemos construir uma série de potências com intervalo de convergência $(-2,\infty)$.</p>
          <p><strong>(II)</strong> Se $\sum_{n=0}^{\infty}a_nx^{n}$ é uma série de potências com raio de convergência $R&gt;0$, então a série $\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}$ possui o mesmo intervalo de convergência.</p>
          <p><strong>(III)</strong> Se a série $\sum_{n=0}^{\infty}a_n3^{n}$ diverge, então o raio de convergência da série de potências $\sum_{n=0}^{\infty}a_nx^{n}$ é menor ou igual a $3$.</p>
          <p>Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>apenas a afirmação (III) é verdadeira.</span></li>
            <li><span class="key">B</span><span>apenas as afirmações (I) e (II) são verdadeiras.</span></li>
            <li><span class="key">C</span><span>todas as afirmações são verdadeiras.</span></li>
            <li><span class="key">D</span><span>apenas as afirmações (II) e (III) são verdadeiras.</span></li>
            <li><span class="key">E</span><span>apenas a afirmação (II) é verdadeira.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — falsa: o conjunto de convergência é sempre simétrico</span>
          <p>Para uma série de potências centrada em $c$, existe $R\in[0,\infty]$ tal que ela converge absolutamente em $|x-c|&lt;R$ e diverge em $|x-c|&gt;R$. O conjunto de convergência é, portanto, sempre um dos casos:</p>
          <p>$\{c\}$ &nbsp;·&nbsp; $(c-R,c+R)$ com alguma combinação de bordas incluídas &nbsp;·&nbsp; $\mathbb R$ inteiro.</p>
          <p>Um intervalo <strong>ilimitado de um lado só</strong>, como $(-2,\infty)$, é impossível: se a série converge em pontos arbitrariamente grandes, ela converge em todo $\mathbb R$ — em particular em $x=-10$.</p>
          <span class="step-label">(II) — falsa: o raio é o mesmo, o intervalo pode não ser</span>
          <p>A série $\sum\frac{a_n}{n+1}x^{n+1}$ é a integração termo a termo de $\sum a_nx^n$, e integrar (ou derivar) termo a termo <em>preserva o raio</em> $R$. Mas o enunciado fala em <strong>intervalo</strong> de convergência, e as bordas podem mudar. Contraexemplo com $a_n=1$ para todo $n$:</p>
          <table>
            <tr><th>Série</th><th>Raio</th><th>Intervalo</th></tr>
            <tr><td>$\sum_{n\ge0}x^{n}$</td><td>$1$</td><td>$(-1,1)$ — diverge em $x=\pm1$</td></tr>
            <tr><td>$\sum_{n\ge0}\frac{x^{n+1}}{n+1}$</td><td>$1$</td><td>$[-1,1)$ — em $x=-1$ vira a harmônica alternada, que converge</td></tr>
          </table>
          <p>Mesmo raio, intervalos diferentes. A afirmação é falsa.</p>
          <span class="step-label">(III) — verdadeira (contrapositiva)</span>
          <p>Suponha, por absurdo, que $R&gt;3$. Então $x=3$ estaria <em>dentro</em> do intervalo aberto de convergência, e toda série de potências converge absolutamente em todo ponto com $|x|&lt;R$. Isso contradiz a hipótese de que $\sum a_n3^{n}$ diverge. Logo $R\le3$.</p>
          <div class="final">Alternativa <b>A</b>: apenas a afirmação (III) é verdadeira.</div>
          <div class="note">O item (II) é o tipo de pegadinha que se evita lendo devagar: trocar "raio" por "intervalo" muda completamente o valor lógico. Derivar termo a termo tem o efeito oposto — pode <em>perder</em> bordas: $\sum\frac{x^{n+1}}{n+1}$ tem intervalo $[-1,1)$ e sua derivada $\sum x^n$ tem $(-1,1)$.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 4', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $p&gt;0$ um número real e considere a série $\displaystyle\sum_{n=2}^{\infty}(-1)^{n}\frac{\ln(n)}{n^{p}}$. Podemos afirmar que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>A série converge condicionalmente se $p&gt;1$ e converge absolutamente se $0&lt;p\le1$.</span></li>
            <li><span class="key">B</span><span>A série diverge se $p&gt;1$ e converge absolutamente se $0&lt;p\le1$.</span></li>
            <li><span class="key">C</span><span>A série converge absolutamente se $p&gt;1$ e diverge se $0&lt;p\le1$.</span></li>
            <li><span class="key">D</span><span>A série converge absolutamente se $p&gt;1$ e converge condicionalmente se $0&lt;p\le1$.</span></li>
            <li><span class="key">E</span><span>A série diverge se $p&gt;1$ e converge condicionalmente se $0&lt;p\le1$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — o caso $p&gt;1$: convergência absoluta</span>
          <p>Estude $\sum\frac{\ln n}{n^{p}}$. Escolha $r$ com $1&lt;r&lt;p$. Como $\dfrac{\ln n}{n^{\,p-r}}\to0$ (potência vence logaritmo), existe $N$ tal que $\ln n\le n^{\,p-r}$ para $n\ge N$, e então</p>
          $$\frac{\ln n}{n^{p}}\le\frac{n^{\,p-r}}{n^{p}}=\frac{1}{n^{r}}\qquad(n\ge N).$$
          <p>Como $\sum n^{-r}$ converge ($r&gt;1$), a série do módulo converge: <strong>convergência absoluta</strong> para todo $p&gt;1$.</p>
          <span class="step-label">Passo 2 — o caso $0&lt;p\le1$: não é absoluta</span>
          <p>Para $n\ge3$ temos $\ln n&gt;1$ e $n^{p}\le n$, logo</p>
          $$\frac{\ln n}{n^{p}}&gt;\frac{1}{n^{p}}\ge\frac1n.$$
          <p>Comparando com a harmônica, $\sum\frac{\ln n}{n^{p}}$ <strong>diverge</strong>. Não há convergência absoluta.</p>
          <span class="step-label">Passo 3 — mas a série alternada converge</span>
          <p>Seja $b_n=\dfrac{\ln n}{n^{p}}$. Duas verificações:</p>
          <p><em>Tende a zero?</em> Sim: $\dfrac{\ln n}{n^{p}}\to0$ para qualquer $p&gt;0$ (de novo, potência vence logaritmo).</p>
          <p><em>É decrescente?</em> Derivando $f(x)=\dfrac{\ln x}{x^{p}}$:</p>
          $$f'(x)=\frac{\frac{1}{x}x^{p}-p x^{p-1}\ln x}{x^{2p}}=\frac{1-p\ln x}{x^{p+1}}&lt;0\iff\ln x&gt;\frac1p.$$
          <p>Ou seja, $b_n$ é decrescente a partir de $n&gt;e^{1/p}$. Leibniz só exige monotonia <em>a partir de algum índice</em>, então o critério se aplica: a série <strong>converge</strong>.</p>
          <span class="step-label">Passo 4 — juntar</span>
          <p>Converge sem convergir absolutamente ⟹ <strong>condicionalmente convergente</strong> para $0&lt;p\le1$.</p>
          <div class="final">Alternativa <b>D</b>: absolutamente se $p&gt;1$, condicionalmente se $0&lt;p\le1$.</div>
          <div class="note">Detalhe que costuma passar batido: $b_n=\frac{\ln n}{n^p}$ <em>cresce</em> no começo (para $p$ pequeno, por bastante tempo) antes de começar a cair. Leibniz continua valendo porque só importa o comportamento a partir de algum $N$ — os primeiros termos formam uma soma finita e não afetam a convergência.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 5', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Quais das seguintes séries convergem <strong>absolutamente</strong>?</p>
          <p><strong>(I)</strong> $\displaystyle\sum_{n=2}^{\infty}\frac{(-1)^{n}}{n\ln(n)}$ &nbsp;&nbsp; <strong>(II)</strong> $\displaystyle\sum_{n=1}^{\infty}(-2)^{n}\left(\frac{n}{n+1}\right)^{n^{2}}$ &nbsp;&nbsp; <strong>(III)</strong> $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\frac{n!\,3^{n}}{(2n)^{n}}$ &nbsp;&nbsp; <strong>(IV)</strong> $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\cos\left(\frac{1}{n^{2}}\right)$</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas (I) e (IV).</span></li>
            <li><span class="key">B</span><span>Apenas (III) e (IV).</span></li>
            <li><span class="key">C</span><span>Apenas (II) e (III).</span></li>
            <li><span class="key">D</span><span>Apenas (I) e (II).</span></li>
            <li><span class="key">E</span><span>Apenas (II).</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — converge, mas só condicionalmente ✗</span>
          <p>$\sum\left|\frac{(-1)^n}{n\ln n}\right|=\sum\frac{1}{n\ln n}$ diverge (critério da integral com $u=\ln x$ leva a $\int\frac{du}{u}=+\infty$). Não é absolutamente convergente.</p>
          <span class="step-label">(II) — absolutamente convergente ✓ (teste da raiz)</span>
          <p>O expoente $n^{2}$ pede raiz $n$-ésima:</p>
          $$\sqrt[n]{|a_n|}=\sqrt[n]{2^{n}\left(\frac{n}{n+1}\right)^{n^{2}}}=2\left(\frac{n}{n+1}\right)^{n}=\frac{2}{\left(1+\frac1n\right)^{n}}\ \longrightarrow\ \frac2e\approx0{,}736&lt;1.$$
          <p>Convergência absoluta.</p>
          <span class="step-label">(III) — absolutamente convergente ✓ (teste da razão)</span>
          <p>Note que $(2n)^{n}=2^{n}n^{n}$, então $|a_n|=\dfrac{n!\,3^{n}}{2^{n}n^{n}}$. Assim</p>
          $$\frac{|a_{n+1}|}{|a_n|}=\frac{(n+1)!\,3^{\,n+1}}{2^{\,n+1}(n+1)^{\,n+1}}\cdot\frac{2^{n}n^{n}}{n!\,3^{n}}=\frac32\cdot\frac{n^{n}}{(n+1)^{n}}=\frac{3}{2\left(1+\frac1n\right)^{n}}\ \longrightarrow\ \frac{3}{2e}\approx0{,}552&lt;1.$$
          <p>Convergência absoluta.</p>
          <span class="step-label">(IV) — nem converge ✗</span>
          <p>$\cos\left(\frac{1}{n^{2}}\right)\to\cos0=1$, então $|a_n|\to1\ne0$. Pelo teste do termo geral, a série <strong>diverge</strong> — não faz sentido falar em convergência absoluta.</p>
          <div class="final">Alternativa <b>C</b>: apenas (II) e (III).</div>
          <div class="note">Item (IV) é a armadilha mais barata da prova: $\cos\left(\frac1{n^2}\right)$ parece "pequeno" por causa do $n^2$, mas o argumento é que tende a zero — e $\cos$ de algo pequeno tende a <b>1</b>, não a $0$. Compare com a Questão 6 da P1 de 2023, onde o termo era $1-\cos\frac1n$ e aí sim tendia a zero.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 6', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a sequência $x_1=\dfrac{3}{10}$, $x_2=\dfrac{33}{100}$, $x_3=\dfrac{333}{1000}$, ... (ou seja, $x_n=\dfrac{\overbrace{33\ldots3}^{n}}{10^{n}}$ para $n\ge1$). Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\lim_{n\to\infty}x_n=0$</span></li>
            <li><span class="key">B</span><span>$x_n$ diverge.</span></li>
            <li><span class="key">C</span><span>$\lim_{n\to\infty}x_n=33/100$</span></li>
            <li><span class="key">D</span><span>$\lim_{n\to\infty}x_n=3/10$</span></li>
            <li><span class="key">E</span><span>$\lim_{n\to\infty}x_n=1/3$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — enxergar o que a sequência é</span>
          <p>Em notação decimal, $x_1=0{,}3$, $x_2=0{,}33$, $x_3=0{,}333$, e assim por diante: $x_n$ é a dízima $0,\overline{3}$ <strong>truncada</strong> em $n$ casas. O limite deve ser $0,333\ldots=\tfrac13$. Vamos provar.</p>
          <span class="step-label">Passo 2 — fórmula fechada para o numerador</span>
          <p>O número formado por $n$ dígitos $3$ é</p>
          $$\underbrace{33\ldots3}_{n}=3\cdot\underbrace{11\ldots1}_{n}=3\cdot\frac{10^{n}-1}{9}=\frac{10^{n}-1}{3}.$$
          <p>(Confira: $n=2$ dá $\frac{99}{3}=33$ ✓.)</p>
          <span class="step-label">Passo 3 — simplificar e passar ao limite</span>
          <p>$$x_n=\frac{\frac{10^{n}-1}{3}}{10^{n}}=\frac13\left(1-\frac{1}{10^{n}}\right)\ \longrightarrow\ \frac13\,(1-0)=\frac13.$$</p>
          <div class="final">Alternativa <b>E</b>: $\lim x_n=\tfrac13$.</div>
          <div class="note">Caminho alternativo, na linguagem de séries: $x_n=\sum_{k=1}^{n}\frac{3}{10^{k}}$ é a soma parcial de uma geométrica de razão $\frac1{10}$, cuja soma total é $\frac{3/10}{1-1/10}=\frac13$. É a mesma conta da Questão 9 da P1 de 2025 ($0,\overline{34}=\frac{34}{99}$), só que agora vista como <em>sequência</em> de truncamentos.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 7', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a sequência $$a_n=\frac1n\cdot\frac{3\cdot6\cdot9\cdot12\cdots(3n)}{1\cdot4\cdot7\cdot10\cdots(3n-2)}.$$ Assinale a alternativa correta:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>A sequência diverge e $\lim_{n\to\infty}a_n\ne+\infty$.</span></li>
            <li><span class="key">B</span><span>A sequência é convergente e $\lim_{n\to\infty}a_n&gt;3$.</span></li>
            <li><span class="key">C</span><span>A sequência é convergente e $\lim_{n\to\infty}a_n&lt;3$.</span></li>
            <li><span class="key">D</span><span>A sequência é convergente e $\lim_{n\to\infty}a_n=3$.</span></li>
            <li><span class="key">E</span><span>A sequência diverge e $\lim_{n\to\infty}a_n=+\infty$.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — não tente calcular o limite; use monotonia</span>
          <p>As alternativas não pedem o valor exato, só comparação com $3$. O caminho barato é mostrar que $(a_n)$ é <strong>decrescente e limitada inferiormente</strong>.</p>
          <span class="step-label">Passo 2 — a razão entre termos consecutivos</span>
          <p>Ao passar de $n$ para $n+1$, o numerador ganha o fator $3(n+1)$, o denominador ganha $3(n+1)-2=3n+1$, e o $\frac1n$ vira $\frac{1}{n+1}$:</p>
          $$\frac{a_{n+1}}{a_n}=\frac{n}{n+1}\cdot\frac{3n+3}{3n+1}=\frac{3n^{2}+3n}{3n^{2}+4n+1}.$$
          <span class="step-label">Passo 3 — essa razão é menor que 1</span>
          <p>Basta comparar numerador e denominador: $3n^{2}+3n&lt;3n^{2}+4n+1$ para todo $n\ge1$. Logo</p>
          $$\frac{a_{n+1}}{a_n}&lt;1\ \Longrightarrow\ a_{n+1}&lt;a_n:$$
          <p>a sequência é <strong>estritamente decrescente</strong>. E é claramente positiva, portanto limitada inferiormente por $0$.</p>
          <span class="step-label">Passo 4 — concluir</span>
          <p>Decrescente e limitada inferiormente ⟹ <strong>converge</strong> (teorema da sequência monótona). Isso já elimina A e E.</p>
          <p>Além disso, $a_1=\dfrac11\cdot\dfrac31=3$ e a sequência é <em>estritamente</em> decrescente, então</p>
          $$L=\lim_{n\to\infty}a_n\le a_2=\frac12\cdot\frac{3\cdot6}{1\cdot4}=\frac94=2{,}25&lt;3.$$
          <div class="final">Alternativa <b>C</b>: converge e o limite é menor que $3$.</div>
          <div class="note"><b>Qual é o limite, afinal?</b> É $0$. Tomando logaritmos, $\ln a_n=\sum_{k=1}^{n}\ln\left(1+\frac{2}{3k-2}\right)-\ln n$; como $\ln(1+t)\le t$ e $\frac{2}{3k-2}\le\frac{0{,}8}{k}$ para $k\ge4$, obtém-se $a_n\le C\,n^{-0{,}2}\to0$. (Com mais precisão, $a_n\sim\Gamma\!\left(\tfrac13\right)n^{-1/3}$, e de fato $a_n\cdot n^{1/3}\to2{,}678939\ldots=\Gamma\!\left(\tfrac13\right)$.) Mas a questão não exigia nada disso.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 8', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Considere a sequência $(a_n)_{n\in\mathbb N}$ dada por $a_n=3+4n$. Quanto à série $\displaystyle\sum_{n=1}^{\infty}\frac{1}{a_n\cdot a_{n+1}}$ pode-se afirmar que a sua soma é:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$\tfrac{1}{14}$</span></li>
            <li><span class="key">B</span><span>$\tfrac18$</span></li>
            <li><span class="key">C</span><span>$\tfrac17$</span></li>
            <li><span class="key">D</span><span>$\tfrac{1}{28}$</span></li>
            <li><span class="key">E</span><span>$\tfrac{1}{35}$</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — o truque geral para $\frac{1}{a_na_{n+1}}$ em uma PA</span>
          <p>Aqui $(a_n)$ é uma progressão aritmética de razão $d=4$, isto é, $a_{n+1}-a_n=4$. Para qualquer PA vale a identidade</p>
          $$\frac{1}{a_na_{n+1}}=\frac1d\cdot\frac{a_{n+1}-a_n}{a_na_{n+1}}=\frac1d\left(\frac{1}{a_n}-\frac{1}{a_{n+1}}\right).$$
          <p>Com $d=4$: $\dfrac{1}{a_na_{n+1}}=\dfrac14\left(\dfrac{1}{a_n}-\dfrac{1}{a_{n+1}}\right)$. A série é <strong>telescópica</strong>.</p>
          <span class="step-label">Passo 2 — somar parcialmente</span>
          <p>Com $a_n=4n+3$ (logo $a_1=7$):</p>
          $$S_N=\frac14\sum_{n=1}^{N}\left(\frac{1}{4n+3}-\frac{1}{4n+7}\right)=\frac14\left(\frac17-\frac{1}{4N+7}\right).$$
          <span class="step-label">Passo 3 — limite</span>
          <p>$$S=\lim_{N\to\infty}S_N=\frac14\cdot\frac17=\frac{1}{28}.$$</p>
          <p>Conferindo o primeiro termo: $\dfrac{1}{a_1a_2}=\dfrac{1}{7\cdot11}=\dfrac{1}{77}$, e $\dfrac14\left(\dfrac17-\dfrac1{11}\right)=\dfrac14\cdot\dfrac{4}{77}=\dfrac{1}{77}$ ✓.</p>
          <div class="final">Alternativa <b>D</b>: a soma é $\tfrac{1}{28}$.</div>
          <div class="note">Guarde o resultado geral: se $a_n$ é uma PA de razão $d&gt;0$ e termos positivos, $\displaystyle\sum_{n=1}^{\infty}\frac{1}{a_na_{n+1}}=\frac{1}{d\,a_1}$. Aqui $d=4$ e $a_1=7$, dando $\frac{1}{28}$ direto.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 9', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Dadas as séries $$S_1:\ \sum_{n=1}^{\infty}n^{3}(x-5)^{n},\qquad S_2:\ \sum_{n=1}^{\infty}\frac{(4x-3)^{n}}{n\,4^{n}},$$ considere as afirmações:</p>
          <p><strong>(I)</strong> O intervalo de convergência da série $S_1$ é $(4,6)$.</p>
          <p><strong>(II)</strong> O intervalo de convergência da série $S_2$ é $\left[-\frac14,\frac74\right)$.</p>
          <p><strong>(III)</strong> A série $S_1$ converge absolutamente em $x=5$ e tem raio de convergência $R=1$.</p>
          <p><strong>(IV)</strong> A série $S_2$ converge absolutamente em $x=1$, converge condicionalmente em $x=-\frac14$ e diverge em $x=2$.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>apenas a afirmação (I) é verdadeira.</span></li>
            <li><span class="key">B</span><span>apenas as afirmações (II), (III) e (IV) são verdadeiras.</span></li>
            <li><span class="key">C</span><span>apenas a afirmação (IV) é verdadeira.</span></li>
            <li><span class="key">D</span><span>apenas as afirmações (II) e (IV) são verdadeiras.</span></li>
            <li><span class="key">E</span><span>todas as afirmações são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">$S_1$ — raio e bordas</span>
          <p>Teste da raiz: $\sqrt[n]{n^{3}|x-5|^{n}}=\left(n^{3}\right)^{1/n}|x-5|\to|x-5|$, pois $n^{3/n}\to1$. Converge se $|x-5|&lt;1$ e diverge se $|x-5|&gt;1$: centro $5$, <strong>raio $R=1$</strong>.</p>
          <p>Bordas: em $x=6$ a série é $\sum n^{3}$ e em $x=4$ é $\sum(-1)^{n}n^{3}$ — nos dois casos o termo geral não tende a zero, então ambas divergem. Intervalo $=(4,6)$. <strong>(I) é verdadeira.</strong></p>
          <span class="step-label">(III) — o ponto central</span>
          <p>Em $x=5$ todo termo vale $n^{3}\cdot0^{n}=0$: a série é identicamente nula, logo converge (absolutamente, trivialmente). Somado ao $R=1$ já obtido, <strong>(III) é verdadeira.</strong></p>
          <p>Vale notar que o centro de uma série de potências <em>sempre</em> pertence ao conjunto de convergência — ali só sobra o termo constante.</p>
          <span class="step-label">$S_2$ — reescrever antes de testar</span>
          <p>O fator $4^{n}$ no denominador combina com o $(4x-3)^{n}$:</p>
          $$\frac{(4x-3)^{n}}{n\,4^{n}}=\frac{1}{n}\left(\frac{4x-3}{4}\right)^{n}=\frac{t^{n}}{n},\qquad t=x-\frac34.$$
          <p>Ou seja, $S_2$ é a série $\sum\frac{t^n}{n}$, cujo comportamento conhecemos: converge para $|t|&lt;1$; em $t=1$ vira a harmônica (diverge); em $t=-1$ vira a harmônica alternada (converge condicionalmente).</p>
          <span class="step-label">(II) — traduzir de volta para $x$</span>
          <p>$|t|&lt;1\iff\left|x-\frac34\right|&lt;1\iff-\frac14&lt;x&lt;\frac74$. A borda $t=-1$ corresponde a $x=-\frac14$ (entra) e $t=1$ a $x=\frac74$ (sai). Intervalo $=\left[-\frac14,\frac74\right)$. <strong>(II) é verdadeira.</strong></p>
          <span class="step-label">(IV) — os três pontos</span>
          <table>
            <tr><th>$x$</th><th>$t=x-\frac34$</th><th>Série</th><th>Comportamento</th></tr>
            <tr><td>$1$</td><td>$\frac14$</td><td>$\sum\frac{(1/4)^n}{n}$</td><td>$|t|&lt;1$: converge <b>absolutamente</b> ✓</td></tr>
            <tr><td>$-\frac14$</td><td>$-1$</td><td>$\sum\frac{(-1)^n}{n}$</td><td>converge <b>condicionalmente</b> ✓</td></tr>
            <tr><td>$2$</td><td>$\frac54$</td><td>$\sum\frac{(5/4)^n}{n}$</td><td>$|t|&gt;1$: <b>diverge</b> ✓</td></tr>
          </table>
          <p><strong>(IV) é verdadeira.</strong></p>
          <div class="final">Alternativa <b>E</b>: todas as afirmações são verdadeiras.</div>
          <div class="note">O passo decisivo em $S_2$ é <em>normalizar a variável</em>: em vez de aplicar o teste da razão com $(4x-3)$ solto, escreva a série na forma $\sum\frac{t^n}{n}$. Todo o resto sai de um caso conhecido de cor.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 10', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $\sum_{n=1}^{\infty}a_nx^{n}$ uma série de potências e seja $R&gt;0$ seu raio de convergência. Considere as seguintes afirmações:</p>
          <p><strong>(I)</strong> Para todo $\rho$ tal que $\rho^{-1}&lt;R$ existe $C&gt;0$ tal que $|a_n|\le C\rho^{n}$, para todo $n$.</p>
          <p><strong>(II)</strong> Para todo $k&gt;0$, a série de potências $\sum_{n=1}^{\infty}n^{k}a_nx^{n}$ também tem raio de convergência igual a $R$.</p>
          <p><strong>(III)</strong> Se $a_n=\left(\sqrt[n]{n}-1\right)^{n}$ para todo $n$, então $R=1$.</p>
          <p>Então é correto dizer que:</p>
          <ul class="alts">
            <li><span class="key">A</span><span>as três afirmações são verdadeiras.</span></li>
            <li><span class="key">B</span><span>apenas afirmações (I) e (II) são verdadeiras.</span></li>
            <li><span class="key">C</span><span>apenas afirmações (I) e (III) são verdadeiras.</span></li>
            <li><span class="key">D</span><span>as três afirmações são falsas.</span></li>
            <li><span class="key">E</span><span>apenas afirmações (II) e (III) são verdadeiras.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — verdadeira: convergência em um ponto limita os coeficientes</span>
          <p>A hipótese $\rho^{-1}&lt;R$ diz que o ponto $x_0=\frac1\rho$ está <em>dentro</em> do intervalo de convergência. Então $\sum a_nx_0^{n}$ converge e, pelo teste do termo geral,</p>
          $$a_n\left(\frac1\rho\right)^{n}=\frac{a_n}{\rho^{n}}\ \longrightarrow\ 0.$$
          <p>Toda sequência convergente é limitada (a afirmação (I) da Questão 2!), logo existe $C&gt;0$ com $\left|\frac{a_n}{\rho^{n}}\right|\le C$, ou seja $|a_n|\le C\rho^{n}$ para todo $n$.</p>
          <span class="step-label">(II) — verdadeira: $n^{k}$ não mexe no raio</span>
          <p>Pela fórmula de Cauchy–Hadamard, $\dfrac1R=\limsup_{n}\sqrt[n]{|a_n|}$. Para os novos coeficientes $b_n=n^{k}a_n$:</p>
          $$\sqrt[n]{|b_n|}=\underbrace{\left(n^{k}\right)^{1/n}}_{=\,n^{k/n}\to\,1}\cdot\sqrt[n]{|a_n|},$$
          <p>pois $n^{k/n}=e^{k\frac{\ln n}{n}}\to e^{0}=1$. O $\limsup$ não muda, então o raio é o mesmo $R$.</p>
          <span class="step-label">(III) — falsa: o raio é infinito</span>
          <p>Aplique a raiz $n$-ésima diretamente:</p>
          $$\sqrt[n]{|a_n|}=\sqrt[n]{\left(\sqrt[n]{n}-1\right)^{n}}=\sqrt[n]{n}-1\ \longrightarrow\ 1-1=0,$$
          <p>usando o limite notável $\sqrt[n]{n}\to1$. Com $\limsup\sqrt[n]{|a_n|}=0$, a fórmula dá $R=\dfrac10=+\infty$: a série converge para <strong>todo</strong> $x$ real, e não com raio $1$.</p>
          <p>(Numericamente: $\sqrt[n]{n}-1$ vale $0{,}259$ em $n=10$, $0{,}047$ em $n=100$ e $1{,}4\times10^{-5}$ em $n=10^{6}$ — indo a zero, como esperado.)</p>
          <div class="final">Alternativa <b>B</b>: apenas (I) e (II).</div>
          <div class="note">Em (III), o reflexo de usar o teste da razão atrapalha: o quociente $\frac{a_{n+1}}{a_n}$ é horrível, enquanto a raiz $n$-ésima cancela o expoente de uma vez. Sempre que $a_n$ tiver a forma $(\text{algo})^{n}$, o teste da raiz é o caminho.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 11', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Seja $\displaystyle f(x)=\sum_{n=0}^{\infty}(-1)^{n}\frac{3^{n}x^{2n+2}}{2n+1}$. Assinale a alternativa correta.</p>
          <ul class="alts">
            <li><span class="key">A</span><span>$f(x)=\frac13\arctan(3x)$ para $|x|&lt;3$ e $f^{(19)}(0)=-\frac{3^{19}19!}{39!}$</span></li>
            <li><span class="key">B</span><span>$f(x)=\frac13\arctan(3x)$ para $|x|\le1/3$ e $f^{(20)}(0)=\frac{3^{20}20!}{41}$</span></li>
            <li><span class="key">C</span><span>$f(x)=\frac{x}{\sqrt3}\arctan(\sqrt3x)$ para $|x|\le1/\sqrt3$ e $f^{(20)}(0)=-\frac{3^{9}20!}{19}$</span></li>
            <li><span class="key">D</span><span>$f(x)=x\arctan(\sqrt3x)$ para $|x|&lt;1/\sqrt3$ e $f^{(20)}(0)=-\frac{3^{20}20!}{41}$</span></li>
            <li><span class="key">E</span><span>todas as alternativas são falsas.</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">Passo 1 — a série-modelo</span>
          <p>Desta vez <em>há</em> o fator $(-1)^n$, então o alvo é a arco-tangente:</p>
          $$\arctan u=\sum_{n=0}^{\infty}(-1)^{n}\frac{u^{2n+1}}{2n+1},\qquad|u|\le1.$$
          <span class="step-label">Passo 2 — ajustar a potência de $x$</span>
          <p>Escreva $3^{n}=\left(\sqrt3\right)^{2n}$ e destaque um $x$ para transformar $x^{2n+2}$ em $x\cdot x^{2n+1}$:</p>
          $$(-1)^{n}\frac{3^{n}x^{2n+2}}{2n+1}=x\cdot(-1)^{n}\frac{\left(\sqrt3\right)^{2n}x^{2n+1}}{2n+1}=\frac{x}{\sqrt3}\cdot(-1)^{n}\frac{\left(\sqrt3\,x\right)^{2n+1}}{2n+1},$$
          <p>onde no último passo multipliquei e dividi por $\sqrt3$ para completar a potência $2n+1$.</p>
          <span class="step-label">Passo 3 — somar</span>
          <p>Com $u=\sqrt3\,x$:</p>
          $$f(x)=\frac{x}{\sqrt3}\sum_{n=0}^{\infty}(-1)^{n}\frac{u^{2n+1}}{2n+1}=\frac{x}{\sqrt3}\arctan\left(\sqrt3\,x\right),$$
          <p>válido para $|u|\le1$, isto é $|x|\le\dfrac{1}{\sqrt3}$ (as bordas entram porque a série de $\arctan$ converge em $u=\pm1$, por Leibniz).</p>
          <span class="step-label">Passo 4 — a derivada de ordem 20 em zero</span>
          <p>Se $f(x)=\sum_k c_kx^{k}$, então $f^{(k)}(0)=k!\,c_k$. Aqui só há potências pares $x^{2n+2}$; para chegar em $x^{20}$ preciso de</p>
          $$2n+2=20\ \Longrightarrow\ n=9.$$
          <p>O coeficiente correspondente é $c_{20}=(-1)^{9}\dfrac{3^{9}}{2\cdot9+1}=-\dfrac{3^{9}}{19}$, logo</p>
          $$f^{(20)}(0)=20!\cdot c_{20}=-\frac{3^{9}\,20!}{19}.$$
          <div class="final">Alternativa <b>C</b>.</div>
          <div class="note">As alternativas A, B e D erram exatamente onde é fácil escorregar: elas escrevem $\arctan(3x)$ (esqueceram que $3^n=(\sqrt3)^{2n}$, não $3^{2n}$) ou usam $n$ errado no coeficiente — $\frac{3^{20}}{41}$ viria de $2n+1=41$, isto é $n=20$, que corresponde a $x^{42}$ e não a $x^{20}$.</div>
        `
      },

      {
        ref: 'P1 2022 · Questão 12', examStyle: true, tag: 'prova',
        statement: String.raw`
          <p>Quais das seguintes séries convergem <strong>condicionalmente</strong>?</p>
          <p><strong>(I)</strong> $\displaystyle\sum_{n=2}^{\infty}\frac{(-1)^{n}}{n\ln n}$ &nbsp;&nbsp; <strong>(II)</strong> $\displaystyle\sum_{n=1}^{\infty}\frac{\operatorname{sen}(n^{3})}{n^{2}}$ &nbsp;&nbsp; <strong>(III)</strong> $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}n}{n^{3}+5}$ &nbsp;&nbsp; <strong>(IV)</strong> $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}n^{2}\operatorname{sen}\left(\frac{1}{n^{2}}\right)$</p>
          <ul class="alts">
            <li><span class="key">A</span><span>Apenas (II), (III) e (IV).</span></li>
            <li><span class="key">B</span><span>Apenas (II) e (IV).</span></li>
            <li><span class="key">C</span><span>Apenas (I) e (IV).</span></li>
            <li><span class="key">D</span><span>Apenas (III).</span></li>
            <li><span class="key">E</span><span>Apenas (I).</span></li>
          </ul>
        `,
        resolution: String.raw`
          <span class="step-label">(I) — condicionalmente convergente ✓</span>
          <p>Leibniz: $b_n=\frac{1}{n\ln n}$ é positiva, decrescente e tende a $0$, então a série converge. Mas $\sum\frac{1}{n\ln n}$ diverge (critério da integral). Convergência <strong>condicional</strong>.</p>
          <span class="step-label">(II) — absolutamente convergente ✗</span>
          <p>$\left|\frac{\operatorname{sen}(n^{3})}{n^{2}}\right|\le\frac{1}{n^{2}}$, e $\sum\frac1{n^2}$ converge. A convergência é absoluta, não condicional.</p>
          <span class="step-label">(III) — absolutamente convergente ✗</span>
          <p>$\left|\frac{(-1)^{n}n}{n^{3}+5}\right|=\frac{n}{n^{3}+5}\le\frac{n}{n^{3}}=\frac{1}{n^{2}}$: de novo comparação com a $p$-série $p=2$. Absoluta.</p>
          <span class="step-label">(IV) — diverge ✗</span>
          <p>Aqui a armadilha: o fator $n^{2}$ está <em>multiplicando</em>. Com $t=\frac{1}{n^{2}}\to0$,</p>
          $$n^{2}\operatorname{sen}\left(\frac{1}{n^{2}}\right)=\frac{\operatorname{sen} t}{t}\ \longrightarrow\ 1.$$
          <p>Então $|a_n|\to1\ne0$ e, pelo teste do termo geral, a série <strong>diverge</strong>.</p>
          <div class="final">Alternativa <b>E</b>: apenas (I).</div>
          <div class="note">Esta questão é quase idêntica à Questão 6 da P1 de 2023 — mesmos itens (I), (II) e (III), mesma resposta "apenas (I)". Só o item (IV) mudou: lá era $\frac{(-1)^n}{e^n+e^{-n}}$ (absolutamente convergente), aqui é $(-1)^nn^2\operatorname{sen}\frac{1}{n^2}$ (divergente). Em ambos os casos, o filtro é o mesmo: testar primeiro o módulo e o termo geral.</div>
        `
      },

    ]
  }

  ]
};