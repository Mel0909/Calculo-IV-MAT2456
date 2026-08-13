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
  }

  ]
};