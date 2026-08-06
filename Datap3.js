// ==================================================================
// P3 — Lista 3: Equações Diferenciais Ordinárias (Partes A e B)
// ==================================================================
window.DATA_P3 = {
  examLabel: 'P3',
  examTitle: 'Equações Diferenciais Ordinárias',
  listaLabel: '3ª Lista de Exercícios (2º sem. 2026)',
  topics: [

  // ================= PARTE A =================
  {
    id: 'p3-t1', number: '01',
    title: 'Equações Separáveis e Problemas de Valor Inicial',
    subtitle: '— existência, unicidade e o método de Cauchy',
    intro: String.raw`
      <p>Uma EDO de 1ª ordem $y'=f(x,y)$ é <strong>separável</strong> quando $f(x,y)=g(x)h(y)$: basta escrever $\dfrac{dy}{h(y)}=g(x)\,dx$ e integrar os dois lados.</p>
      <p>O <strong>Teorema de Existência e Unicidade</strong> garante: se $f$ e $\partial f/\partial y$ são contínuas perto de $(x_0,y_0)$, existe uma única solução do PVI (problema de Cauchy) $y'=f(x,y)$, $y(x_0)=y_0$ — em particular, gráficos de duas soluções <strong>não podem se cruzar</strong> nesse regime. Quando $\partial f/\partial y$ deixa de existir ou explode (tipicamente com expoentes fracionários $&lt;1$ em $y$), a unicidade pode falhar, e é aí que aparecem "soluções extras" pelo mesmo ponto inicial.</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte A · Item 1',
        statement: String.raw`<p>Os gráficos de duas soluções de $y'=x+y^2$ podem se cruzar num ponto $(x_0,y_0)$?</p>`,
        resolution: String.raw`
          <span class="step-label">Aplicando o Teorema de Existência e Unicidade</span>
          <p>Aqui $f(x,y)=x+y^2$ e $\dfrac{\partial f}{\partial y}=2y$ são polinômios, logo contínuos em todo $\mathbb R^2$. Pelo teorema, por <em>cada</em> ponto $(x_0,y_0)$ passa exatamente <strong>uma</strong> solução do PVI $y'=x+y^2$, $y(x_0)=y_0$.</p>
          <span class="step-label">Consequência</span>
          <p>Se dois gráficos de soluções se cruzassem em $(x_0,y_0)$, ambas seriam soluções do mesmo PVI nesse ponto — mas a unicidade garante que só existe uma. Logo as duas curvas seriam, na verdade, a <em>mesma</em> solução.</p>
          <div class="final">Não: gráficos de soluções distintas de $y'=x+y^2$ nunca se cruzam. $\blacksquare$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 2',
        statement: String.raw`
          <p>Dê as soluções das equações diferenciais de 1ª ordem abaixo, com seus domínios (máximos). Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`$y'=y^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar a equação</span>
              <p>A equação $y'=y^2$ tem lado direito $f(y)=y^2$, que depende só de $y$: é <strong>separável</strong> (e autônoma).</p>
              <span class="step-label">Passo 2 — solução constante</span>
              <p>$y\equiv0$ anula o lado direito ($0^2=0$) e $y'\equiv0$: é solução, válida em todo $\mathbb R$.</p>
              <span class="step-label">Passo 3 — separar variáveis para $y\ne0$</span>
              <p>$$\frac{dy}{y^2}=dx.$$</p>
              <span class="step-label">Passo 4 — integrar</span>
              <p>$$-\frac1y=x+C \;\Longrightarrow\; y=\frac1{a-x},$$ renomeando a constante ($a=-C$).</p>
              <div class="final">$y\equiv0$, $x\in\mathbb R$; &nbsp; $y=\dfrac1{a-x}$, para $x&lt;a$ ou $x&gt;a$ ($a\in\mathbb R$).</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`$xy'=y$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Reescrevendo $y'=y/x$ (para $x\ne0$), o lado direito é produto de função de $x$ por função de $y$: equação <strong>separável</strong>.</p>
              <span class="step-label">Passo 2 — separar variáveis</span>
              <p>$$\frac{dy}{y}=\frac{dx}{x}.$$</p>
              <span class="step-label">Passo 3 — integrar</span>
              <p>$$\ln|y|=\ln|x|+C \;\Longrightarrow\; y=ax,$$ com $a=\pm e^C$ (e $y\equiv0$ também satisfaz, correspondendo a $a=0$).</p>
              <div class="final">$y=ax$, $x\in\mathbb R$ ($a\in\mathbb R$).</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`$yy'=x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>$yy'=x$ já está na forma $h(y)y'=g(x)$: <strong>separável</strong>.</p>
              <span class="step-label">Passo 2 — separar e integrar</span>
              <p>$$y\,dy=x\,dx \;\Longrightarrow\; \frac{y^2}2=\frac{x^2}2+C' \;\Longrightarrow\; y^2=x^2+k.$$</p>
              <span class="step-label">Passo 3 — isolar $y$ e achar o domínio</span>
              <p>$y=\pm\sqrt{x^2+k}$. Para $k\ge0$ a raiz existe para todo $x\in\mathbb R$; para $k&lt;0$ precisa-se $x^2&gt;-k$, isto é $|x|&gt;\sqrt{-k}$.</p>
              <div class="final">$y=\sqrt{x^2+k}$ e $y=-\sqrt{x^2+k}$; domínio $x^2&gt;-k$ se $k&lt;0$ (todo $x\in\mathbb R$ se $k\ge0$).</div>
            `
          },
          {
            label: 'd',
            statement: String.raw`$y'=(1-y)(2-y)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar e achar soluções constantes</span>
              <p>Autônoma, $y'=f(y)$ com $f(y)=(1-y)(2-y)$. As raízes $y\equiv1$ e $y\equiv2$ anulam $f$, logo são soluções.</p>
              <span class="step-label">Passo 2 — separar variáveis para $y\ne1,2$</span>
              <p>Frações parciais: $$\frac1{(1-y)(2-y)}=\frac1{1-y}-\frac1{2-y}.$$ Logo $$\left[\frac1{1-y}-\frac1{2-y}\right]dy=dx.$$</p>
              <span class="step-label">Passo 3 — integrar</span>
              <p>$$-\ln|1-y|+\ln|2-y|=x+C \;\Longrightarrow\; \ln\left|\frac{2-y}{1-y}\right|=x+C \;\Longrightarrow\; \frac{2-y}{1-y}=ke^x.$$</p>
              <span class="step-label">Passo 4 — isolar $y$</span>
              <p>$2-y=ke^x(1-y) \Rightarrow 2-y=ke^x-ke^xy \Rightarrow y(ke^x-1)=ke^x-2 \Rightarrow y=\dfrac{ke^x-2}{ke^x-1}$.</p>
              <div class="final">$y\equiv1$; $y\equiv2$; $y=\dfrac{ke^x-2}{ke^x-1}$, $x\in\mathbb R$ se $k\le0$, ou $x&lt;-\ln k$ ou $x&gt;-\ln k$ se $k&gt;0$.</div>
            `
          },
          {
            label: 'e',
            statement: String.raw`$(x+3y)-x\dfrac{dy}{dx}=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Reescrevendo: $xy'-3y=x \Rightarrow y'-\dfrac3xy=1$ (para $x\ne0$): equação <strong>linear</strong> de 1ª ordem.</p>
              <span class="step-label">Passo 2 — fator integrante</span>
              <p>$p(x)=-3/x$, então $\mu=e^{\int p\,dx}=e^{-3\ln|x|}=x^{-3}$.</p>
              <span class="step-label">Passo 3 — multiplicar e integrar</span>
              <p>$$\left(yx^{-3}\right)'=x^{-3} \;\Longrightarrow\; yx^{-3}=-\frac1{2x^2}+C \;\Longrightarrow\; y=Cx^3-\frac x2.$$</p>
              <span class="step-label">Passo 4 — domínio</span>
              <p>A equação original é singular em $x=0$ (o coeficiente de $y'$ se anula ali), então a solução vale separadamente para $x&gt;0$ e para $x&lt;0$ (com constantes possivelmente distintas).</p>
              <div class="final">$y=ax^3-\dfrac x2$, para $x&gt;0$ ou para $x&lt;0$ (constante $a$ independente em cada ramo).</div>
            `
          },
          {
            label: 'f',
            statement: String.raw`$y'=2y+e^x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>$y'-2y=e^x$: equação <strong>linear</strong> de 1ª ordem, coeficientes constantes.</p>
              <span class="step-label">Passo 2 — fator integrante</span>
              <p>$p=-2$, $\mu=e^{\int(-2)dx}=e^{-2x}$.</p>
              <span class="step-label">Passo 3 — multiplicar e integrar</span>
              <p>$$\left(ye^{-2x}\right)'=e^{-2x}e^x=e^{-x} \;\Longrightarrow\; ye^{-2x}=-e^{-x}+C.$$</p>
              <span class="step-label">Passo 4 — isolar $y$</span>
              <p>$$y=Ce^{2x}-e^x.$$</p>
              <div class="final">$y=ae^{2x}-e^x$, $x\in\mathbb R$ ($a\in\mathbb R$).</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte A · Item 4',
        statement: String.raw`
          <p>Dê duas soluções para cada uma das equações abaixo, com a condição inicial dada — em ambos os casos a hipótese de unicidade do Teorema de Existência e Unicidade falha, permitindo mais de uma solução pelo mesmo ponto inicial. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`$y'=5y^{4/5}$, $y(0)=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — por que a unicidade pode falhar</span>
              <p>Aqui $f(x,y)=5y^{4/5}$ e $\dfrac{\partial f}{\partial y}=4y^{-1/5}$, que não é contínua em $y=0$ (explode). A hipótese do Teorema de Existência e Unicidade falha exatamente no ponto inicial $(0,0)$, abrindo espaço para mais de uma solução.</p>
              <span class="step-label">Passo 2 — solução trivial</span>
              <p>$y\equiv0$ satisfaz a equação ($5\cdot0^{4/5}=0=y'$) e a condição $y(0)=0$.</p>
              <span class="step-label">Passo 3 — separar variáveis e achar outra solução</span>
              <p>Para $y\ne0$: $$\frac{dy}{y^{4/5}}=5\,dx \;\Longrightarrow\; 5y^{1/5}=5x+C \;\Longrightarrow\; y^{1/5}=x+C' \;\Longrightarrow\; y=(x+C')^5.$$ Impondo $y(0)=0$: $C'=0$, logo $y=x^5$.</p>
              <span class="step-label">Passo 4 — verificar</span>
              <p>$y'=5x^4$ e $5y^{4/5}=5(x^5)^{4/5}=5x^4$: coincide.</p>
              <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y=x^5$ são ambas soluções do mesmo PVI.</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`$y'=3\sqrt[3]{y^2}\,(3x^2+1)$, $y(0)=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — por que a unicidade pode falhar</span>
              <p>Aqui $f(x,y)=3y^{2/3}(3x^2+1)$ e $\dfrac{\partial f}{\partial y}=2y^{-1/3}(3x^2+1)$, que explode em $y=0$: novamente a continuidade de $\partial f/\partial y$ falha no ponto inicial.</p>
              <span class="step-label">Passo 2 — solução trivial</span>
              <p>$y\equiv0$ satisfaz a equação e $y(0)=0$.</p>
              <span class="step-label">Passo 3 — separar variáveis e achar outra solução</span>
              <p>Para $y\ne0$: $$\frac{dy}{y^{2/3}}=3(3x^2+1)\,dx \;\Longrightarrow\; 3y^{1/3}=3x^3+3x+C \;\Longrightarrow\; y^{1/3}=x^3+x+C' \;\Longrightarrow\; y=(x^3+x+C')^3.$$ Impondo $y(0)=0$: $C'=0$, logo $y=(x^3+x)^3$.</p>
              <span class="step-label">Passo 4 — verificar</span>
              <p>$y'=3(x^3+x)^2(3x^2+1)$ e $3\sqrt[3]{y^2}(3x^2+1)=3\sqrt[3]{(x^3+x)^6}(3x^2+1)=3(x^3+x)^2(3x^2+1)$ (a raiz cúbica da sexta potência dá o quadrado): coincide.</p>
              <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y=(x^3+x)^3$ são ambas soluções do mesmo PVI.</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte A · Item 3', examStyle: true,
        statement: String.raw`
          <p>Determine a solução de cada um dos problemas de Cauchy (ou do valor inicial). Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`$y'=x+y$, $y(0)=1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Reescrevendo $y'-y=x$: equação <strong>linear</strong> de 1ª ordem, $p(x)=-1$, $q(x)=x$.</p>
              <span class="step-label">Passo 2 — fator integrante e integração</span>
              <p>$\mu=e^{\int(-1)dx}=e^{-x}$. Logo $(ye^{-x})'=xe^{-x}$. Integrando por partes ($u=x$, $dv=e^{-x}dx$): $$\int xe^{-x}dx=-(x+1)e^{-x}+C.$$</p>
              <span class="step-label">Passo 3 — isolar $y$</span>
              <p>$ye^{-x}=-(x+1)e^{-x}+C \;\Longrightarrow\; y=-(x+1)+Ce^x.$</p>
              <span class="step-label">Passo 4 — aplicar a condição inicial</span>
              <p>$y(0)=1$: $1=-(0+1)+Ce^0=-1+C \;\Longrightarrow\; C=2.$</p>
              <div class="final">$y=2e^x-x-1$</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`$(\cos t)x'-(\sin t)x=1$, $x(2\pi)=\pi$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Dividindo por $\cos t$ (válido perto de $t=2\pi$, onde $\cos t\ne0$): $$x'-\tan(t)\,x=\sec t,$$ equação <strong>linear</strong> em $x(t)$.</p>
              <span class="step-label">Passo 2 — fator integrante e integração</span>
              <p>$\mu=e^{-\int\tan t\,dt}=e^{\ln|\cos t|}=\cos t$. Logo $(x\cos t)'=\cos t\sec t=1$. Integrando: $$x\cos t=t+C.$$</p>
              <span class="step-label">Passo 3 — aplicar a condição inicial</span>
              <p>$x(2\pi)=\pi$: $\pi\cos(2\pi)=2\pi+C \;\Longrightarrow\; \pi\cdot1=2\pi+C \;\Longrightarrow\; C=-\pi.$</p>
              <div class="final">$x=\dfrac{t-\pi}{\cos t}$</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`$y'=x(1+y)$, $y(0)=-1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar e testar a solução constante</span>
              <p>Equação separável (e linear). Observe que $y\equiv-1$ satisfaz a equação trivialmente: $y'=0$ e $x(1+(-1))=x\cdot0=0$. Além disso, essa constante já cumpre $y(0)=-1$.</p>
              <span class="step-label">Passo 2 — verificar unicidade</span>
              <p>$f(x,y)=x(1+y)$ e $\dfrac{\partial f}{\partial y}=x$ são contínuas em todo $\mathbb R^2$, logo o Teorema de Existência e Unicidade garante <strong>uma única</strong> solução para o PVI $y'=x(1+y)$, $y(0)=-1$.</p>
              <span class="step-label">Passo 3 — concluir</span>
              <p>Como $y\equiv-1$ já satisfaz a equação e a condição inicial, e a solução é única, essa é a resposta.</p>
              <div class="final">$y\equiv-1$</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t2', number: '02',
    title: 'Equações Lineares, Exatas e Fatores Integrantes',
    subtitle: '',
    intro: String.raw`
      <p>Uma EDO $M(x,y)dx+N(x,y)dy=0$ é <strong>exata</strong> quando $\partial M/\partial y=\partial N/\partial x$: existe $F(x,y)$ com $F_x=M$, $F_y=N$, e a solução é $F(x,y)=C$. Quando a equação não é exata, procuramos um <strong>fator integrante</strong> $\mu$ que a torne exata; um bom primeiro teste é ver se $(M_y-N_x)/N$ depende só de $x$ (dá $\mu(x)$) ou $(N_x-M_y)/M$ só de $y$ (dá $\mu(y)$).</p>
      <p>Equações <strong>lineares</strong> $y'+p(x)y=q(x)$ têm fator integrante $\mu=e^{\int p(x)dx}$, transformando o lado esquerdo em $(\mu y)'$.</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte A · Item 5',
        statement: String.raw`
          <p>Resolva as equações abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`$y'=e^{x-2y}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>$e^{x-2y}=e^x\cdot e^{-2y}$: produto de função de $x$ por função de $y$, logo <strong>separável</strong>.</p>
              <span class="step-label">Passo 2 — separar variáveis</span>
              <p>$$e^{2y}\,dy=e^x\,dx.$$</p>
              <span class="step-label">Passo 3 — integrar</span>
              <p>$$\tfrac12 e^{2y}=e^x+C'.$$</p>
              <div class="final">$y=\dfrac12\ln(2e^x+C)$</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`$x^2y^2\dfrac{dy}{dx}=1+x^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Dividindo por $x^2$ (com $x\ne0$): $y^2y'=\dfrac1{x^2}+1$: <strong>separável</strong>.</p>
              <span class="step-label">Passo 2 — separar variáveis</span>
              <p>$$y^2\,dy=\left(\frac1{x^2}+1\right)dx.$$</p>
              <span class="step-label">Passo 3 — integrar e isolar $y$</span>
              <p>$$\frac{y^3}3=-\frac1x+x+C \;\Longrightarrow\; y=\sqrt[3]{3x-\frac3x+C}.$$</p>
              <div class="final">$y=\sqrt[3]{3x-\dfrac3x+C}=\sqrt[3]{\dfrac{3x^2-3+Cx}{x}}$</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`$y'\sin x+y\cos x=1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>É <strong>linear</strong>, mas o lado esquerdo já é uma derivada exata: pela regra do produto, $(y\sin x)'=y'\sin x+y\cos x$. Isso equivale a usar o fator integrante $\sin x$ diretamente.</p>
              <span class="step-label">Passo 2 — reescrever e integrar</span>
              <p>$$(y\sin x)'=1 \;\Longrightarrow\; y\sin x=x+C.$$</p>
              <span class="step-label">Passo 3 — isolar $y$</span>
              <p>$$y=\frac{x+C}{\sin x}.$$</p>
              <div class="final">$y=\dfrac{x+C}{\sin x}$</div>
            `
          },
          {
            label: 'd',
            statement: String.raw`$y'=x^3-2xy$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Reescrevendo $y'+2xy=x^3$: equação <strong>linear</strong>, $p(x)=2x$, $q(x)=x^3$.</p>
              <span class="step-label">Passo 2 — fator integrante</span>
              <p>$\mu=e^{\int2x\,dx}=e^{x^2}$, logo $(ye^{x^2})'=x^3e^{x^2}$.</p>
              <span class="step-label">Passo 3 — integrar</span>
              <p>Com $u=x^2$ (então $x^3\,dx=u\cdot\tfrac{du}2$): $$\int x^3e^{x^2}dx=\int u e^u\,\frac{du}2=\tfrac12(u-1)e^u+C=\tfrac12(x^2-1)e^{x^2}+C.$$</p>
              <span class="step-label">Passo 4 — isolar $y$</span>
              <p>$$ye^{x^2}=\tfrac12(x^2-1)e^{x^2}+C \;\Longrightarrow\; y=\tfrac12(x^2-1)+Ce^{-x^2}.$$</p>
              <div class="final">$y=\tfrac12(x^2-1)+Ce^{-x^2}$</div>
            `
          },
          {
            label: 'e',
            statement: String.raw`$3x^2\tan y-\dfrac{2y^3}{x^3}+\left(x^3\sec^2y+4y^3+\dfrac{3y^2}{x^2}\right)y'=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $M$, $N$ e testar exatidão</span>
              <p>$M=3x^2\tan y-\dfrac{2y^3}{x^3}$, $N=x^3\sec^2y+4y^3+\dfrac{3y^2}{x^2}$. Calculando: $$M_y=3x^2\sec^2y-\frac{6y^2}{x^3}, \qquad N_x=3x^2\sec^2y-\frac{6y^2}{x^3}.$$ Como $M_y=N_x$, a equação é <strong>exata</strong>.</p>
              <span class="step-label">Passo 2 — integrar $M$ em $x$</span>
              <p>$$F=\int M\,dx=x^3\tan y+\frac{y^3}{x^2}+g(y).$$</p>
              <span class="step-label">Passo 3 — usar $F_y=N$ para achar $g$</span>
              <p>$F_y=x^3\sec^2y+\dfrac{3y^2}{x^2}+g'(y)=N \;\Longrightarrow\; g'(y)=4y^3 \;\Longrightarrow\; g(y)=y^4.$</p>
              <div class="final">$x^3\tan y+\dfrac{y^3}{x^2}+y^4=C$</div>
            `
          },
          {
            label: 'f',
            statement: String.raw`$(1-xy)+(xy-x^2)\dfrac{dy}{dx}=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — testar exatidão</span>
              <p>$M=1-xy$, $N=xy-x^2$. $M_y=-x$ e $N_x=y-2x$: como $M_y\ne N_x$, a equação <strong>não é exata</strong>.</p>
              <span class="step-label">Passo 2 — achar o fator integrante</span>
              <p>$$\frac{M_y-N_x}{N}=\frac{-x-(y-2x)}{xy-x^2}=\frac{x-y}{x(y-x)}=-\frac1x,$$ que depende só de $x$: existe $\mu=\mu(x)$ com $\dfrac{d\ln\mu}{dx}=-\dfrac1x \;\Longrightarrow\; \mu=\dfrac1x.$</p>
              <span class="step-label">Passo 3 — multiplicar e verificar exatidão</span>
              <p>$M\mu=\dfrac1x-y$, $N\mu=y-x$. Agora $\partial_y(M\mu)=-1=\partial_x(N\mu)$: exata.</p>
              <span class="step-label">Passo 4 — integrar</span>
              <p>$F=\displaystyle\int\left(\frac1x-y\right)dx=\ln|x|-xy+h(y)$; $F_y=-x+h'(y)=N\mu=y-x \Rightarrow h'(y)=y \Rightarrow h(y)=\dfrac{y^2}2$. Logo $F=\ln|x|-xy+\dfrac{y^2}2=C'$; multiplicando por $2$ e usando $2\ln|x|=\ln x^2$:</p>
              <div class="final">$y^2-2xy+\ln x^2=C$</div>
            `
          },
          {
            label: 'g',
            statement: String.raw`$xy'=y+\sqrt{x^2+y^2}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Dividindo por $x$ ($x&gt;0$): $y'=\dfrac yx+\sqrt{1+\left(\dfrac yx\right)^2}$: o lado direito só depende de $y/x$, equação <strong>homogênea</strong>. Substituição $v=y/x$, $y'=v+xv'$.</p>
              <span class="step-label">Passo 2 — substituir e separar</span>
              <p>$v+xv'=v+\sqrt{1+v^2} \;\Longrightarrow\; xv'=\sqrt{1+v^2} \;\Longrightarrow\; \dfrac{dv}{\sqrt{1+v^2}}=\dfrac{dx}x.$</p>
              <span class="step-label">Passo 3 — integrar</span>
              <p>Usando a primitiva do arco-seno hiperbólico: $$\ln\!\left(v+\sqrt{1+v^2}\right)=\ln|x|+C \;\Longrightarrow\; v+\sqrt{1+v^2}=Cx.$$</p>
              <span class="step-label">Passo 4 — voltar a $y$</span>
              <p>Com $v=y/x$: $\dfrac yx+\sqrt{1+\dfrac{y^2}{x^2}}=Cx \;\Longrightarrow\; y+\sqrt{x^2+y^2}=Cx^2.$</p>
              <div class="final">$y+\sqrt{x^2+y^2}=Cx^2$ ($x&gt;0$); análogo com sinal trocado para $x&lt;0$</div>
            `
          },
          {
            label: 'h',
            statement: String.raw`$(1+t^2)y'+ty+(1+t^2)^{5/2}=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Dividindo por $1+t^2$: $$y'+\frac t{1+t^2}y=-(1+t^2)^{3/2}:$$ equação <strong>linear</strong>.</p>
              <span class="step-label">Passo 2 — fator integrante</span>
              <p>$\mu=e^{\int \frac{t}{1+t^2}dt}=e^{\frac12\ln(1+t^2)}=\sqrt{1+t^2}$.</p>
              <span class="step-label">Passo 3 — multiplicar e integrar</span>
              <p>$\left(y\sqrt{1+t^2}\right)'=-(1+t^2)^{3/2}\sqrt{1+t^2}=-(1+t^2)^2=-(1+2t^2+t^4)$. Integrando: $$y\sqrt{1+t^2}=C-t-\tfrac23t^3-\tfrac15t^5.$$</p>
              <span class="step-label">Passo 4 — isolar $y$</span>
              <p>Multiplicando por $15$ e dividindo por $15\sqrt{1+t^2}$:</p>
              <div class="final">$y=\dfrac{C-15t-10t^3-3t^5}{15\sqrt{1+t^2}}$</div>
            `
          },
          {
            label: 'i',
            statement: String.raw`$\dfrac{dy}{dx}=\dfrac yx+\cos^2\!\left(\dfrac yx\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>O lado direito depende só de $y/x$: equação <strong>homogênea</strong>. Substituição $v=y/x$, $y'=v+xv'$.</p>
              <span class="step-label">Passo 2 — substituir e separar</span>
              <p>$v+xv'=v+\cos^2v \;\Longrightarrow\; xv'=\cos^2v \;\Longrightarrow\; \sec^2v\,dv=\dfrac{dx}x.$</p>
              <span class="step-label">Passo 3 — integrar</span>
              <p>$$\tan v=\ln|x|+C.$$</p>
              <div class="final">$\tan\!\left(\dfrac yx\right)=\ln|x|+C$</div>
            `
          },
          {
            label: 'j',
            statement: String.raw`$(1-xy)y'=y^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Em $y$ isolado a equação não é linear nem separável direto; mas tratando $x$ como função de $y$: $(1-xy)\,dy=y^2\,dx \Rightarrow \dfrac{dx}{dy}=\dfrac{1-xy}{y^2}=\dfrac1{y^2}-\dfrac xy$, isto é $\dfrac{dx}{dy}+\dfrac xy=\dfrac1{y^2}$: <strong>linear</strong> em $x(y)$.</p>
              <span class="step-label">Passo 2 — fator integrante</span>
              <p>$\mu=e^{\int dy/y}=y$.</p>
              <span class="step-label">Passo 3 — multiplicar e integrar</span>
              <p>$(xy)'=y\cdot\dfrac1{y^2}=\dfrac1y \;\Longrightarrow\; xy=\ln|y|+C.$</p>
              <span class="step-label">Passo 4 — solução singular</span>
              <p>$y\equiv0$ também satisfaz a equação original trivialmente ($0=0$).</p>
              <div class="final">$xy-\ln|y|=C$, ou $y\equiv0$</div>
            `
          },
          {
            label: 'k',
            statement: String.raw`$xy'=\sqrt{x^2+y^2}$, $x&gt;0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — classificar</span>
              <p>Dividindo por $x$: $y'=\sqrt{1+(y/x)^2}$: <strong>homogênea</strong>. Substituição $v=y/x$, $y'=v+xv'$.</p>
              <span class="step-label">Passo 2 — substituir e separar</span>
              <p>$v+xv'=\sqrt{1+v^2} \;\Longrightarrow\; xv'=\sqrt{1+v^2}-v \;\Longrightarrow\; \dfrac{dv}{\sqrt{1+v^2}-v}=\dfrac{dx}x.$ Racionalizando (multiplicando por $\sqrt{1+v^2}+v$, que faz o denominador virar $(1+v^2)-v^2=1$): $$\left(\sqrt{1+v^2}+v\right)dv=\frac{dx}x.$$</p>
              <span class="step-label">Passo 3 — integrar</span>
              <p>Usando $\int\sqrt{1+v^2}\,dv=\tfrac12\left(v\sqrt{1+v^2}+\ln|v+\sqrt{1+v^2}|\right)$: $$\tfrac12v\sqrt{1+v^2}+\tfrac12\ln\left|v+\sqrt{1+v^2}\right|+\tfrac{v^2}2=\ln|x|+C.$$</p>
              <span class="step-label">Passo 4 — voltar a $y=vx$</span>
              <p>Substituindo $v=y/x$ e multiplicando por $2$:</p>
              <div class="final">$\dfrac{y\sqrt{x^2+y^2}}{x^2}+\dfrac{y^2}{x^2}+\ln\left|\dfrac{y+\sqrt{x^2+y^2}}x\right|=2\ln|x|+C$</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte A · Item 12', examStyle: true,
        statement: String.raw`
          <p>Exercícios sobre equações diferenciais exatas e fatores integrantes. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`Determine todas as funções $f$ que tornam exata a equação $y^2\sin x\,dx+yf(x)\,dy=0$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $M$, $N$ e a condição de exatidão</span>
              <p>$M=y^2\sin x$, $N=yf(x)$. A equação é exata se, e só se, $M_y=N_x$.</p>
              <span class="step-label">Passo 2 — calcular as derivadas parciais</span>
              <p>$$M_y=2y\sin x, \qquad N_x=yf'(x).$$</p>
              <span class="step-label">Passo 3 — resolver a EDO resultante para $f$</span>
              <p>Igualando (para $y\ne0$): $f'(x)=2\sin x$. Integrando: $$f(x)=-2\cos x+C.$$</p>
              <div class="final">$f(x)=C-2\cos x,\ C\in\mathbb R$</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`A equação $g(x)\,dy+(y+x)\,dx=0$ tem $h(x)=x$ como fator integrante. Determine todas as possíveis funções $g$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $M$, $N$ e multiplicar pelo fator integrante</span>
              <p>Na forma $M\,dx+N\,dy=0$: $M=y+x$, $N=g(x)$. Multiplicando por $\mu=x$: $$M\mu=x(y+x)=xy+x^2, \qquad N\mu=xg(x).$$</p>
              <span class="step-label">Passo 2 — impor exatidão da nova equação</span>
              <p>$\partial_y(M\mu)=x$ e $\partial_x(N\mu)=g(x)+xg'(x)=(xg)'$. Para ser exata: $$(xg)'=x.$$</p>
              <span class="step-label">Passo 3 — integrar</span>
              <p>$$xg=\frac{x^2}2+C \;\Longrightarrow\; g(x)=\frac x2+\frac Cx.$$</p>
              <div class="final">$g(x)=\dfrac x2+\dfrac Cx,\ C\in\mathbb R$</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`A equação $e^x\sec y-\tan y+y'=0$ tem um fator integrante da forma $f(x,y)=e^{ax}\cos y$. Determine $a$ e resolva a equação.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $M$, $N$ e multiplicar pelo fator integrante</span>
              <p>Na forma $M\,dx+N\,dy=0$ (com $y'=dy/dx$): $M=e^x\sec y-\tan y$, $N=1$. Multiplicando por $f=e^{ax}\cos y$ (usando $\cos y\sec y=1$ e $\cos y\tan y=\sin y$): $$Mf=e^{(a+1)x}-e^{ax}\sin y, \qquad Nf=e^{ax}\cos y.$$</p>
              <span class="step-label">Passo 2 — impor exatidão e achar $a$</span>
              <p>$\partial_y(Mf)=-e^{ax}\cos y$ e $\partial_x(Nf)=ae^{ax}\cos y$. Igualando: $-e^{ax}\cos y=ae^{ax}\cos y \Rightarrow a=-1$.</p>
              <span class="step-label">Passo 3 — integrar com $a=-1$</span>
              <p>$Mf=1-e^{-x}\sin y$, $Nf=e^{-x}\cos y$. $F=\displaystyle\int Mf\,dx=x+e^{-x}\sin y+h(y)$; $F_y=e^{-x}\cos y+h'(y)=Nf \Rightarrow h'(y)=0$.</p>
              <div class="final">$a=-1$; &nbsp; $x+e^{-x}\sin y=C$</div>
            `
          },
          {
            label: 'd',
            statement: String.raw`Ache um fator integrante da forma $h(x,y)=x^ny^m$ para $y(y^2+1)dx+x(y^2-1)\ln x\,dy=0$ e resolva-a.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — multiplicar por $\mu=x^ny^m$ e impor exatidão</span>
              <p>$M=y^3+y$, $N=x(y^2-1)\ln x$. Com $\mu=x^ny^m$: $M\mu=x^n(y^{m+3}+y^{m+1})$ e $N\mu=x^{n+1}\ln x\,(y^{m+2}-y^m)$. Derivando: $$\partial_y(M\mu)=x^n\!\left[(m+3)y^{m+2}+(m+1)y^m\right],$$ $$\partial_x(N\mu)=x^n\!\left[(n+1)\ln x+1\right](y^{m+2}-y^m).$$</p>
              <span class="step-label">Passo 2 — eliminar o termo em $\ln x$ e comparar coeficientes</span>
              <p>Para a igualdade valer para todo $x$, o coeficiente de $\ln x$ deve se anular: $n+1=0 \Rightarrow n=-1$. Sobra $\partial_x(N\mu)=x^n(y^{m+2}-y^m)$. Comparando com $\partial_y(M\mu)$: $m+3=1$ e $m+1=-1$, ambas dão $m=-2$.</p>
              <span class="step-label">Passo 3 — integrar com $\mu=x^{-1}y^{-2}$</span>
              <p>$M\mu=\dfrac{y^2+1}{xy}$, $N\mu=\dfrac{(y^2-1)\ln x}{y^2}$. $F=\displaystyle\int M\mu\,dx=\left(y+\dfrac1y\right)\ln|x|+g(y)$; $F_y=\left(1-\dfrac1{y^2}\right)\ln|x|+g'(y)=N\mu \Rightarrow g'(y)=0$.</p>
              <span class="step-label">Passo 4 — solução singular</span>
              <p>$y\equiv0$ também satisfaz a equação original trivialmente.</p>
              <div class="final">$n=-1,\ m=-2$; &nbsp; $(y^2+1)\ln|x|=Cy$ (multiplicando $F=C'$ por $y$), ou $y\equiv0$</div>
            `
          },
          {
            label: 'e',
            statement: String.raw`Ache um fator integrante da forma $\mu=\mu(x+y^2)$ para $(3x+2y+y^2)dx+(x+4xy+5y^2)dy=0$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — testar exatidão</span>
              <p>$M=3x+2y+y^2$, $N=x+4xy+5y^2$. $M_y=2+2y$, $N_x=1+4y$: como são diferentes, a equação <strong>não é exata</strong>.</p>
              <span class="step-label">Passo 2 — condição para $\mu=\mu(s)$ com $s=x+y^2$</span>
              <p>Com $s_x=1$, $s_y=2y$, um fator integrante $\mu(s)$ existe se $\dfrac{M_y-N_x}{Ns_x-Ms_y}$ depender só de $s$, valendo $\dfrac{d\ln\mu}{ds}$.</p>
              <span class="step-label">Passo 3 — calcular a razão</span>
              <p>$M_y-N_x=(2+2y)-(1+4y)=1-2y$. $$Ns_x-Ms_y=(x+4xy+5y^2)-2y(3x+2y+y^2)=x-2xy+y^2-2y^3=(1-2y)(x+y^2)=(1-2y)s.$$ Logo a razão vale $\dfrac{1-2y}{(1-2y)s}=\dfrac1s$, que depende só de $s$.</p>
              <span class="step-label">Passo 4 — resolver para $\mu$</span>
              <p>$\dfrac{d\ln\mu}{ds}=\dfrac1s \;\Longrightarrow\; \ln\mu=\ln s \;\Longrightarrow\; \mu=s.$</p>
              <div class="final">$\mu(x+y^2)=x+y^2$</div>
            `
          },
          {
            label: 'f',
            statement: String.raw`Ache um fator integrante da forma $\mu=\mu(x^2+y^2)$ para $x\,dx+y\,dy+x(x\,dy-y\,dx)=0$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reorganizar em $M\,dx+N\,dy$ e testar exatidão</span>
              <p>Expandindo: $x\,dx+y\,dy+x^2\,dy-xy\,dx=(x-xy)dx+(y+x^2)dy=0$. Assim $M=x-xy$, $N=y+x^2$; $M_y=-x$, $N_x=2x$: <strong>não é exata</strong>.</p>
              <span class="step-label">Passo 2 — condição para $\mu=\mu(s)$ com $s=x^2+y^2$</span>
              <p>Com $s_x=2x$, $s_y=2y$: $$M_y-N_x=-x-2x=-3x.$$ $$Ns_x-Ms_y=2x(y+x^2)-2y(x-xy)=2xy+2x^3-2xy+2xy^2=2x(x^2+y^2)=2xs.$$</p>
              <span class="step-label">Passo 3 — calcular a razão e resolver para $\mu$</span>
              <p>A razão é $\dfrac{-3x}{2xs}=-\dfrac3{2s}$, que depende só de $s$: $$\frac{d\ln\mu}{ds}=-\frac3{2s} \;\Longrightarrow\; \ln\mu=-\frac32\ln s \;\Longrightarrow\; \mu=s^{-3/2}.$$</p>
              <div class="final">$\mu(x^2+y^2)=(x^2+y^2)^{-3/2}$</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t3', number: '03',
    title: 'Mudança de Variáveis',
    subtitle: '— substituições engenhosas',
    intro: String.raw`
      <p>Quando uma equação não é separável, exata, nem linear, procure um <strong>padrão que sugira uma substituição</strong>: uma combinação linear $ax+by$ que se repete (substitua $v=ax+by$), um termo do tipo $y/x$ (substitua $v=y/x$, equação homogênea), ou uma expressão $f(ax+by+c)$ isolando $y'$ (substitua $z=ax+by+c$). Em todos os casos, a ideia é reduzir a nova equação a uma <strong>separável</strong>.</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte A · Item 6',
        statement: String.raw`
          <p>Resolva as equações abaixo usando uma conveniente mudança de coordenadas (nos itens (a)–(d) o enunciado original ainda pede as soluções de (a), (b) e (d) que passam pelo ponto $(1,1)$). Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`$(x+y)dx+x\,dy=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar o tipo de equação</span>
              <p>Com $M=x+y$ e $N=x$, temos $M_y=1$ e $N_x=1$. Como $M_y=N_x$, a equação já é exata — nenhuma mudança de variável é necessária.</p>
              <span class="step-label">Passo 2 — construir a função potencial</span>
              <p>Buscamos $F(x,y)$ com $F_x=M$ e $F_y=N$. Integrando $F_x=x+y$ em $x$:</p>
              $$F(x,y)=\frac{x^2}2+xy+g(y).$$
              <p>Derivando em $y$: $F_y=x+g'(y)$, que deve igualar $N=x$; logo $g'(y)=0$ e $g$ é constante.</p>
              <span class="step-label">Passo 3 — solução implícita e condição inicial</span>
              <p>A família de soluções é $x^2+2xy=C$. Impondo $y(1)=1$: $1+2=C$, logo $C=3$.</p>
              <div class="final">$x^2+2xy=3$</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`$(xe^y+y-x^2)dy=(2xy-e^y-x)dx$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escrever na forma $Mdx+Ndy=0$ e testar exatidão</span>
              <p>$M=2xy-e^y-x$ e $N=-(xe^y+y-x^2)$. Como $M_y=2x-e^y=N_x$, a equação é exata.</p>
              <span class="step-label">Passo 2 — construir a função potencial</span>
              <p>Integrando $F_x=M$ em $x$:</p>
              $$F(x,y)=x^2y-xe^y-\frac{x^2}2+g(y).$$
              <p>Derivando em $y$: $F_y=x^2-xe^y+g'(y)$, que deve igualar $N$; logo $g'(y)=-y$, ou seja $g(y)=-\dfrac{y^2}2$.</p>
              <span class="step-label">Passo 3 — solução implícita e condição inicial</span>
              <p>A família de soluções é $x^2+y^2+2xe^y-2x^2y=C$. Em $(1,1)$: $1+1+2e-2=C\Rightarrow C=2e$.</p>
              <div class="final">$x^2+y^2+2xe^y-2x^2y=C$; passando por $(1,1)$: $C=2e$</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`$\cos x\,dy=(1-y-\sin x)dx$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a equação linear</span>
              <p>Dividindo por $\cos x$: $$\frac{dy}{dx}=\frac{1-\sin x}{\cos x}-\frac{y}{\cos x}=(\sec x-\tan x)-y\sec x,$$ isto é, $y'+y\sec x=\sec x-\tan x$: uma equação linear em $y$.</p>
              <span class="step-label">Passo 2 — fator integrante</span>
              <p>$$\mu(x)=e^{\int \sec x\,dx}=\sec x+\tan x.$$</p>
              <span class="step-label">Passo 3 — multiplicar e integrar</span>
              <p>Multiplicando a equação por $\mu$: $$\big[y(\sec x+\tan x)\big]'=(\sec x-\tan x)(\sec x+\tan x)=\sec^2x-\tan^2x=1.$$ Integrando: $y(\sec x+\tan x)=x+C$.</p>
              <div class="final">$y=\dfrac{x+C}{\sec x+\tan x}$</div>
            `
          },
          {
            label: 'd',
            statement: String.raw`$y(x^2+y^2)dx+x(3x^2-5y^2)dy=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a equação homogênea e escolher $v=y/x$</span>
              <p>$M=y(x^2+y^2)$ e $N=x(3x^2-5y^2)$ são homogêneos de grau $3$: nenhuma delas é exata nem linear, mas a razão sugere a substituição $y=vx$, $dy=v\,dx+x\,dv$.</p>
              <span class="step-label">Passo 2 — substituir e simplificar</span>
              <p>Com $y=vx$: $M=vx^3(1+v^2)$ e $N=x^3(3-5v^2)$. A equação $M\,dx+N\,dy=0$ fica $$x^3\big[v(1+v^2)+v(3-5v^2)\big]dx+x^4(3-5v^2)\,dv=0.$$ Como $v(1+v^2)+v(3-5v^2)=4v(1-v^2)$, dividindo por $x^3$:</p>
              $$4v(1-v^2)\,dx+x(3-5v^2)\,dv=0 \;\Longrightarrow\; \frac{dx}x=\frac{5v^2-3}{4v(1-v^2)}\,dv.$$
              <span class="step-label">Passo 3 — frações parciais e integração</span>
              <p>Decompondo $\dfrac{5v^2-3}{v(1-v^2)}=-\dfrac3v+\dfrac1{1-v}-\dfrac1{1+v}$ e integrando:</p>
              $$\ln|x|=\frac14\Big[-3\ln|v|-\ln|1-v^2|\Big]+C' \;\Longrightarrow\; x^4v^3(1-v^2)=C.$$
              <span class="step-label">Passo 4 — voltar a $y$ e usar a condição inicial</span>
              <p>Com $v=y/x$: $x^4v^3(1-v^2)=x^4\cdot\dfrac{y^3}{x^3}\cdot\dfrac{x^2-y^2}{x^2}=\dfrac{y^3(x^2-y^2)}x$. Logo $y^3(x^2-y^2)=Cx$. Em $(1,1)$: $1\cdot(1-1)=C\Rightarrow C=0$.</p>
              <div class="final">$y^3(x^2-y^2)=Cx$; passando por $(1,1)$: $C=0$, ou seja, a reta $y=x$</div>
            `
          },
          {
            label: 'e',
            statement: String.raw`$e^x\sin y\,dx+e^x\cos y\,dy=y\sin(xy)\,dx+x\sin(xy)\,dy$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reorganizar e testar exatidão</span>
              <p>Reescrevendo como $M\,dx+N\,dy=0$: $M=e^x\sin y-y\sin(xy)$, $N=e^x\cos y-x\sin(xy)$. Ambas as derivadas cruzadas dão $M_y=N_x=e^x\cos y-\sin(xy)-xy\cos(xy)$, logo a equação é exata — nenhuma substituição é necessária.</p>
              <span class="step-label">Passo 2 — construir a função potencial</span>
              <p>Integrando $F_x=M$ em $x$:</p>
              $$F(x,y)=e^x\sin y+\cos(xy)+g(y).$$
              <p>Derivando em $y$: $F_y=e^x\cos y-x\sin(xy)+g'(y)$, que deve igualar $N$; logo $g'(y)=0$.</p>
              <span class="step-label">Passo 3 — solução implícita</span>
              <p>A família de soluções é obtida igualando $F$ a uma constante.</p>
              <div class="final">$e^x\sin y+\cos(xy)=C$</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte A · Item 7',
        statement: String.raw`
          <p>(Exemplo do enunciado.) Para resolver $(x+2y-1)dx+3(x+2y)dy=0$, fazemos $x+2y=v$: $dx=dv-2dy$, o que dá $(v-1)dv+(v+2)dy=0$, i.e. $\dfrac{v-1}{v+2}dv+dy=0$, cuja solução é $v-3\ln|v+2|+y+c=0$, ou seja $x+3y+C=3\ln|x+2y+2|$.</p>
          <p>Resolva as equações abaixo, usando uma conveniente mudança de coordenadas. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`$(1+3x\sin y)dx-x^2\cos y\,dy=0$ &nbsp; (sugestão: $\sin y=w$)`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — motivar a substituição $w=\sin y$</span>
              <p>O termo $\cos y\,dy$ é exatamente a diferencial de $\sin y$. Fazendo $w=\sin y$, temos $dw=\cos y\,dy$, o que elimina $y$ da equação.</p>
              <span class="step-label">Passo 2 — transformar a equação</span>
              <p>Substituindo: $(1+3xw)dx-x^2dw=0 \Rightarrow \dfrac{dw}{dx}=\dfrac1{x^2}+\dfrac{3w}x$, isto é, a equação linear $w'-\dfrac3xw=\dfrac1{x^2}$.</p>
              <span class="step-label">Passo 3 — resolver a linear (fator integrante)</span>
              <p>Fator integrante $e^{-\int(3/x)dx}=x^{-3}$: $$\left(wx^{-3}\right)'=x^{-3}\cdot\frac1{x^2}=x^{-5} \Rightarrow wx^{-3}=-\frac1{4x^4}+C.$$</p>
              <span class="step-label">Passo 4 — voltar a $y$</span>
              <p>Assim $w=Cx^3-\dfrac1{4x}$; como $w=\sin y$:</p>
              <div class="final">$\sin y=Cx^3-\dfrac1{4x}$, ou seja $4x\sin y+1=4Cx^4$</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`$(3x-2y+1)dx-(3x-2y+3)dy=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — motivar a substituição $v=3x-2y$</span>
              <p>A combinação $3x-2y$ aparece repetida em ambos os coeficientes; escolhemos $v=3x-2y$, logo $dv=3dx-2dy$, ou seja $dy=\dfrac{3dx-dv}2$.</p>
              <span class="step-label">Passo 2 — substituir na equação</span>
              <p>A equação fica $(v+1)dx-(v+3)dy=0$. Substituindo $dy$: $$(v+1)dx-(v+3)\frac{3dx-dv}2=0.$$</p>
              <span class="step-label">Passo 3 — simplificar até obter uma equação separável</span>
              <p>Multiplicando por $2$ e agrupando os termos em $dx$: $$2(v+1)dx-3(v+3)dx+(v+3)dv=0 \Rightarrow -(v+7)dx+(v+3)dv=0,$$ isto é, $$dx=\frac{v+3}{v+7}dv=\left[1-\frac4{v+7}\right]dv.$$</p>
              <span class="step-label">Passo 4 — integrar e voltar a $x,y$</span>
              <p>Integrando: $x=v-4\ln|v+7|+C$. Substituindo $v=3x-2y$: $$x=(3x-2y)-4\ln|3x-2y+7|+C \Rightarrow -2x+2y=-4\ln|3x-2y+7|+C.$$ Dividindo por $-2$ e renomeando a constante:</p>
              <div class="final">$x-y-2\ln|3x-2y+7|=C$</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`$\cos(x+y)dx=x\sin(x+y)dx+x\sin(x+y)dy$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — motivar a substituição $u=x+y$</span>
              <p>O argumento $x+y$ se repete nos três termos; fazemos $u=x+y$, logo $du=dx+dy$, ou seja $dy=du-dx$.</p>
              <span class="step-label">Passo 2 — substituir na equação</span>
              <p>A equação $\cos(x+y)dx=x\sin(x+y)dx+x\sin(x+y)dy$ fica $$\cos u\,dx=x\sin u\,dx+x\sin u\,(du-dx).$$</p>
              <span class="step-label">Passo 3 — cancelar termos e separar variáveis</span>
              <p>Os termos $x\sin u\,dx$ se cancelam: $$\cos u\,dx=x\sin u\,du \Rightarrow \frac{dx}x=\tan u\,du.$$</p>
              <span class="step-label">Passo 4 — integrar e voltar a $x,y$</span>
              <p>Integrando: $\ln|x|=-\ln|\cos u|+C' \Rightarrow \ln|x\cos u|=C'$. Voltando a $u=x+y$:</p>
              <div class="final">$x\cos(x+y)=C$</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte A · Item 8', examStyle: true,
        statement: String.raw`
          <p>Mostre que a substituição $z=ax+by+c$ transforma a equação $y'=f(ax+by+c)$ numa equação separável em $z(x)$: como $z'=a+by'$, temos (supondo $b\ne0$) $y'=\dfrac{z'-a}b$, logo a equação original vira $\dfrac{z'-a}b=f(z)$, isto é $z'=a+bf(z)$, cujas variáveis se separam como $\dfrac{dz}{a+bf(z)}=dx$. Aplique esse método para resolver as equações abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`$y'=(x+y)^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher $z=x+y$</span>
              <p>Aqui $a=b=1$ e $f(z)=z^2$. Como $z=x+y$, $z'=1+y'\Rightarrow y'=z'-1$.</p>
              <span class="step-label">Passo 2 — obter a equação separável em $z$</span>
              <p>Substituindo em $y'=(x+y)^2=z^2$: $$z'-1=z^2 \Rightarrow z'=1+z^2 \Rightarrow \frac{dz}{1+z^2}=dx.$$</p>
              <span class="step-label">Passo 3 — integrar</span>
              <p>$\arctan z=x+C \Rightarrow z=\tan(x+C)$.</p>
              <span class="step-label">Passo 4 — voltar a $y$</span>
              <p>Como $z=x+y$:</p>
              <div class="final">$y=\tan(x+C)-x$</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`$y'=\sin^2(x-y+1)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher $z=x-y+1$</span>
              <p>Aqui $a=1$, $b=-1$ e $f(z)=\sin^2z$. Como $z=x-y+1$, $z'=1-y'\Rightarrow y'=1-z'$.</p>
              <span class="step-label">Passo 2 — obter a equação separável em $z$</span>
              <p>Substituindo em $y'=\sin^2(x-y+1)=\sin^2z$: $$1-z'=\sin^2z \Rightarrow z'=1-\sin^2z=\cos^2z \Rightarrow \sec^2z\,dz=dx.$$</p>
              <span class="step-label">Passo 3 — integrar e voltar a $y$</span>
              <p>Integrando: $\tan z=x+C$. Como $z=x-y+1$:</p>
              <div class="final">$\tan(x-y+1)=x+C$</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`$(x+2y-1)dx+3(x+2y)dy=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — escolher $z=x+2y$ (combinação repetida)</span>
              <p>Os coeficientes só dependem de $x+2y$; fazemos $z=x+2y$, logo $dz=dx+2dy \Rightarrow dx=dz-2dy$.</p>
              <span class="step-label">Passo 2 — substituir e simplificar</span>
              <p>A equação $(z-1)dx+3z\,dy=0$ fica, com $dx=dz-2dy$: $$(z-1)(dz-2dy)+3z\,dy=0 \Rightarrow (z-1)dz+(z+2)dy=0,$$ pois $-2(z-1)+3z=z+2$.</p>
              <span class="step-label">Passo 3 — separar variáveis</span>
              <p>$$dy=-\frac{z-1}{z+2}dz=\left[-1+\frac3{z+2}\right]dz.$$</p>
              <span class="step-label">Passo 4 — integrar e voltar a $x,y$</span>
              <p>Integrando: $y=-z+3\ln|z+2|+C_1 \Rightarrow z-3\ln|z+2|+y+c=0$ (com $c=-C_1$). Substituindo $z=x+2y$: $$x+2y-3\ln|x+2y+2|+y+c=0 \Rightarrow x+3y+C=3\ln|x+2y+2|.$$</p>
              <div class="final">$x+3y+C=3\ln|x+2y+2|$</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t4', number: '04',
    title: 'Equação de Bernoulli',
    subtitle: '',
    intro: String.raw`
      <p>A equação de Bernoulli $y'+p(x)y=q(x)y^n$ ($n\ne0,1$) tem $y\equiv0$ como solução trivial. Para as demais, a substituição $z=y^{1-n}$ a transforma na equação <strong>linear</strong> $z'+(1-n)p(x)z=(1-n)q(x)$ — dividindo a equação original por $y^n$ e reconhecendo $z'=(1-n)y^{-n}y'$.</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte A · Item 9', examStyle: true,
        statement: String.raw`
          <p>Use o método de Bernoulli para resolver as seguintes equações: divide-se por $y^n$ e substitui-se $z=y^{1-n}$, o que transforma a equação $y'+p(x)y=q(x)y^n$ na equação linear $z'+(1-n)p(x)z=(1-n)q(x)$. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`$y(6x^2y^2-x+1)+2xy'=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reescrever na forma padrão de Bernoulli</span>
              <p>Isolando $y'$: $2xy'=-6x^2y^3+xy-y \Rightarrow y'-\dfrac{x-1}{2x}y=-3xy^3$. É uma equação de Bernoulli com $n=3$.</p>
              <span class="step-label">Passo 2 — dividir por $y^3$ e substituir $z=y^{-2}$</span>
              <p>Com $z=y^{-2}$ ($z'=-2y^{-3}y'$), dividindo a equação por $y^3$: $$\frac{y'}{y^3}-\frac{x-1}{2x}y^{-2}=-3x \;\Longrightarrow\; -\frac{z'}2-\frac{x-1}{2x}z=-3x.$$ Multiplicando por $-2$:</p>
              $$z'+\left(1-\frac1x\right)z=6x.$$
              <span class="step-label">Passo 3 — resolver a linear (fator integrante $e^x/x$)</span>
              <p>$$\left(z\frac{e^x}x\right)'=6e^x \Rightarrow z\frac{e^x}x=6e^x+C \Rightarrow z=6x+Cxe^{-x}.$$</p>
              <span class="step-label">Passo 4 — voltar a $y$</span>
              <p>Como $z=y^{-2}$, $y^2=1/z$. Além da solução trivial $y\equiv0$ (perdida ao dividir por $y^3$):</p>
              <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y^2=\dfrac1{6x+Cxe^{-x}}$</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`$y'=y+e^{-3x}y^4$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $n=4$ e substituir $z=y^{-3}$</span>
              <p>É uma equação de Bernoulli com $p(x)=-1$, $q(x)=e^{-3x}$, $n=4$. Dividindo por $y^4$: $$\frac{y'}{y^4}-y^{-3}=e^{-3x}.$$ Com $z=y^{-3}$ ($z'=-3y^{-4}y'$, logo $y'/y^4=-z'/3$):</p>
              $$-\frac{z'}3-z=e^{-3x}.$$
              <span class="step-label">Passo 2 — equação linear resultante</span>
              <p>Multiplicando por $-3$: $z'+3z=-3e^{-3x}$.</p>
              <span class="step-label">Passo 3 — resolver com fator integrante $e^{3x}$</span>
              <p>$$\left(ze^{3x}\right)'=-3 \Rightarrow ze^{3x}=-3x+C \Rightarrow z=(C-3x)e^{-3x}.$$</p>
              <span class="step-label">Passo 4 — voltar a $y$</span>
              <p>Como $z=y^{-3}$, $y^3=e^{3x}/(C-3x)$. Além da solução trivial $y\equiv0$:</p>
              <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y=\dfrac{e^x}{\sqrt[3]{C-3x}}$</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`$2x^3y'=y(y^2+3x^2)$ (que também é homogênea!)`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reescrever na forma padrão</span>
              <p>$$y'=\frac{y^3}{2x^3}+\frac{3y}{2x} \;\Longrightarrow\; y'-\frac3{2x}y=\frac1{2x^3}y^3,$$ uma equação de Bernoulli com $n=3$ (e, alternativamente, também homogênea, pois $M,N$ são homogêneos do mesmo grau).</p>
              <span class="step-label">Passo 2 — dividir por $y^3$ e substituir $z=y^{-2}$</span>
              <p>Com $z=y^{-2}$ ($z'=-2y^{-3}y'$): $$\frac{y'}{y^3}-\frac3{2x}z=\frac1{2x^3} \;\Longrightarrow\; -\frac{z'}2-\frac3{2x}z=\frac1{2x^3}.$$ Multiplicando por $-2$:</p>
              $$z'+\frac3xz=-\frac1{x^3}.$$
              <span class="step-label">Passo 3 — resolver com fator integrante $x^3$</span>
              <p>$$\left(zx^3\right)'=-1 \Rightarrow zx^3=C-x \Rightarrow z=\frac{C-x}{x^3}.$$</p>
              <span class="step-label">Passo 4 — voltar a $y$</span>
              <p>Como $z=y^{-2}$, além da solução trivial $y\equiv0$:</p>
              <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y^2=\dfrac{x^3}{C-x}$</div>
            `
          },
          {
            label: 'd',
            statement: String.raw`$x^3y'=2y\left(\sqrt[3]{y}+3x^2\right)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reescrever na forma padrão</span>
              <p>$$y'=\frac2{x^3}y^{4/3}+\frac6xy \;\Longrightarrow\; y'-\frac6xy=\frac2{x^3}y^{4/3},$$ Bernoulli com $n=4/3$.</p>
              <span class="step-label">Passo 2 — dividir por $y^{4/3}$ e substituir $z=y^{-1/3}$</span>
              <p>Com $z=y^{-1/3}$ ($z'=-\tfrac13y^{-4/3}y'$, logo $y'/y^{4/3}=-3z'$): $$-3z'-\frac6xz=\frac2{x^3}.$$ Multiplicando por $-\tfrac13$:</p>
              $$z'+\frac2xz=-\frac2{3x^3}.$$
              <span class="step-label">Passo 3 — resolver com fator integrante $x^2$</span>
              <p>$$\left(zx^2\right)'=-\frac2{3x} \Rightarrow zx^2=C-\frac23\ln|x|.$$</p>
              <span class="step-label">Passo 4 — voltar a $y$ e simplificar a constante</span>
              <p>Como $z=y^{-1/3}$: $$y=z^{-3}=\frac{x^6}{\left(C-\tfrac23\ln|x|\right)^3}.$$ Renomeando a constante (usando $\ln x^2=2\ln|x|$ e ajustando por um fator $27$) obtém-se a forma equivalente:</p>
              <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y=\dfrac{27x^6}{\left(C-\ln x^2\right)^3}$</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t5', number: '05',
    title: 'Equação de Riccati',
    subtitle: '',
    intro: String.raw`
      <p>A equação de Riccati $y'=q_1(t)+q_2(t)y+q_3(t)y^2$ é quadrática em $y$. Conhecendo <strong>uma</strong> solução particular $y_1$, a substituição $y=y_1+\dfrac1v$ produz uma equação <strong>linear</strong> em $v(t)$ — o "salto" de grau (quadrático → linear) é a mágica dessa técnica.</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte A · Item 10',
        statement: String.raw`<p>Suponha conhecida uma solução particular $y_1$ da equação de Riccati $y'=q_1(t)+q_2(t)y+q_3(t)y^2$. Mostre que a substituição $y=y_1(t)+\dfrac1{v(t)}$ transforma essa equação na equação linear de 1ª ordem $v'=-(q_2+2q_3y_1)v-q_3$.</p>`,
        resolution: String.raw`
          <span class="step-label">Derivando a substituição</span>
          <p>$y=y_1+\dfrac1v \Rightarrow y'=y_1'-\dfrac{v'}{v^2}$.</p>
          <span class="step-label">Expandindo o lado direito da Riccati</span>
          <p>$$q_1+q_2y+q_3y^2=q_1+q_2\left(y_1+\frac1v\right)+q_3\left(y_1+\frac1v\right)^2=\underbrace{\big[q_1+q_2y_1+q_3y_1^2\big]}_{=\,y_1'\text{, pois }y_1\text{ é solução}}+\frac{q_2+2q_3y_1}v+\frac{q_3}{v^2}.$$</p>
          <span class="step-label">Igualando e simplificando</span>
          <p>$$y_1'-\frac{v'}{v^2}=y_1'+\frac{q_2+2q_3y_1}v+\frac{q_3}{v^2}\;\Longrightarrow\;-\frac{v'}{v^2}=\frac{q_2+2q_3y_1}v+\frac{q_3}{v^2}.$$
          Multiplicando por $-v^2$:</p>
          <div class="final">$v'=-(q_2+2q_3y_1)\,v-q_3$ $\blacksquare$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 11', examStyle: true,
        statement: String.raw`
          <p>Usando o método do exercício anterior — a substituição $y=y_1(t)+\dfrac1{v(t)}$, que transforma a equação de Riccati $y'=q_1(t)+q_2(t)y+q_3(t)y^2$ na equação linear $v'=-(q_2+2q_3y_1)v-q_3$ — e a solução particular $y_1$ dada, resolva cada uma das equações de Riccati abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: 'a',
            statement: String.raw`$y'=1+t^2-2ty+y^2$, $y_1(t)=t$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $q_1,q_2,q_3$</span>
              <p>Aqui $q_1=1+t^2$, $q_2=-2t$, $q_3=1$ e $y_1=t$ (confere-se que $y_1'=1$ e $q_1+q_2y_1+q_3y_1^2=1+t^2-2t^2+t^2=1=y_1'$, logo $y_1$ é de fato solução).</p>
              <span class="step-label">Passo 2 — calcular o coeficiente da equação linear</span>
              <p>$q_2+2q_3y_1=-2t+2t=0$, então $v'=-(q_2+2q_3y_1)v-q_3$ fica simplesmente $v'=-1$.</p>
              <span class="step-label">Passo 3 — resolver a linear</span>
              <p>Integrando diretamente: $v=C-t$.</p>
              <span class="step-label">Passo 4 — voltar a $y$</span>
              <p>Como $y=y_1+1/v$:</p>
              <div class="final">$y=t+\dfrac1{C-t}$</div>
            `
          },
          {
            label: 'b',
            statement: String.raw`$y'=-\dfrac1{t^2}-\dfrac yt+y^2$, $y_1(t)=\dfrac1t$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $q_1,q_2,q_3$</span>
              <p>$q_1=-1/t^2$, $q_2=-1/t$, $q_3=1$, $y_1=1/t$.</p>
              <span class="step-label">Passo 2 — calcular o coeficiente e montar a linear</span>
              <p>$q_2+2q_3y_1=-\dfrac1t+\dfrac2t=\dfrac1t$. A equação $v'=-(q_2+2q_3y_1)v-q_3$ vira $v'=-\dfrac vt-1$, isto é $v'+\dfrac vt=-1$.</p>
              <span class="step-label">Passo 3 — resolver com fator integrante $t$</span>
              <p>$$(vt)'=-t \Rightarrow vt=-\frac{t^2}2+C \Rightarrow v=\frac{2C-t^2}{2t}.$$</p>
              <span class="step-label">Passo 4 — voltar a $y$</span>
              <p>Como $y=y_1+1/v=\dfrac1t+\dfrac{2t}{2C-t^2}$; renomeando a constante ($2C\to C$):</p>
              <div class="final">$y=\dfrac1t+\dfrac{2t}{C-t^2}$</div>
            `
          },
          {
            label: 'c',
            statement: String.raw`$y'=\dfrac{2\cos^2t-\sin^2t+y^2}{2\cos t}$, $y_1(t)=\sin t$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $q_1,q_2,q_3$</span>
              <p>Dividindo o numerador por $2\cos t$: $q_1=\dfrac{2\cos^2t-\sin^2t}{2\cos t}$, $q_2=0$, $q_3=\dfrac1{2\cos t}$, $y_1=\sin t$.</p>
              <span class="step-label">Passo 2 — calcular o coeficiente e montar a linear</span>
              <p>$q_2+2q_3y_1=0+2\cdot\dfrac1{2\cos t}\cdot\sin t=\tan t$. A equação $v'=-(q_2+2q_3y_1)v-q_3$ vira $v'=-\tan(t)v-\dfrac1{2\cos t}$.</p>
              <span class="step-label">Passo 3 — resolver com fator integrante $\sec t$</span>
              <p>$$(v\sec t)'=-\frac12\sec^2t \Rightarrow v\sec t=-\frac12\tan t+C \Rightarrow v=C\cos t-\frac12\sin t.$$</p>
              <span class="step-label">Passo 4 — voltar a $y$</span>
              <p>Como $y=y_1+1/v=\sin t+\dfrac1{C\cos t-\tfrac12\sin t}$, multiplicando numerador e denominador por $2$:</p>
              <div class="final">$y=\sin t+\dfrac2{2C\cos t-\sin t}$</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t6', number: '06',
    title: 'Aplicações de EDOs de 1ª Ordem',
    subtitle: '— curvas, misturas, população e resfriamento',
    intro: String.raw`
      <p>Modelar um fenômeno com EDOs segue sempre o mesmo roteiro: (1) identificar a taxa de variação instantânea da grandeza de interesse; (2) escrevê-la em termos da própria grandeza (e de $t$ ou $x$), montando a equação diferencial; (3) resolver com as técnicas já vistas; (4) usar a condição inicial (ou um dado extra) para fixar a constante.</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte A · Item 13',
        statement: String.raw`<p>Determine uma função $y=f(x)$, com gráfico passando por $(0,5/4)$, tal que, para todo $t&gt;0$, o comprimento do gráfico de $y=f(x)$ em $0\le x\le t$ seja igual à área da região $0\le x\le t$, $0\le y\le f(x)$.</p>`,
        resolution: String.raw`
          <span class="step-label">Montando a equação</span>
          <p>Comprimento: $L(t)=\displaystyle\int_0^t\sqrt{1+y'(x)^2}\,dx$. Área: $A(t)=\displaystyle\int_0^ty(x)\,dx$. A condição $L(t)=A(t)$ para todo $t&gt;0$, derivando ambos os lados em $t$ (Teorema Fundamental do Cálculo):
          $$\sqrt{1+y'(t)^2}=y(t).$$</p>
          <span class="step-label">Resolvendo</span>
          <p>Isso dá $y'=\pm\sqrt{y^2-1}$ (precisa $y\ge1$; como $y(0)=5/4&gt;1$, ok). Separável: $\dfrac{dy}{\sqrt{y^2-1}}=dx\Rightarrow\operatorname{arccosh}(y)=x+C\Rightarrow y=\cosh(x+C)$.</p>
          <span class="step-label">Usando a condição inicial</span>
          <p>$y(0)=\cosh(C)=5/4$. Como $\cosh^2C-\sinh^2C=1$, $\sinh C=\pm3/4$; tomando $e^C=\cosh C+\sinh C=5/4+3/4=2$: $C=\ln2$.
          $$y=\cosh(x+\ln2)=\frac{e^{x+\ln2}+e^{-(x+\ln2)}}2=\frac{2e^x+\tfrac12e^{-x}}2=e^x+\frac{e^{-x}}4.$$</p>
          <div class="final">$y=\dfrac{4e^x+e^{-x}}4$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 14',
        statement: String.raw`<p>Determine uma função $y=f(x)$ cujo gráfico passe por $(1,1)$ e tal que, para todo $p$ em seu domínio, a área do triângulo com vértices $(p,0)$, $(p,f(p))$ e $M$ seja $1$, onde $M$ é o ponto de interseção da reta tangente ao gráfico em $(p,f(p))$ com o eixo $x$.</p>`,
        resolution: String.raw`
          <span class="step-label">Achando $M$</span>
          <p>A reta tangente em $(p,f(p))$ é $y-f(p)=f'(p)(x-p)$. Fazendo $y=0$: $x=p-\dfrac{f(p)}{f'(p)}$, logo $M=\left(p-\dfrac{f(p)}{f'(p)},0\right)$.</p>
          <span class="step-label">Área do triângulo retângulo</span>
          <p>Os catetos têm comprimentos $|f(p)|$ (vertical) e $\left|\dfrac{f(p)}{f'(p)}\right|$ (horizontal). Área $=\dfrac12\cdot\left|\dfrac{f(p)}{f'(p)}\right|\cdot|f(p)|=\dfrac{f(p)^2}{2|f'(p)|}=1\Rightarrow f'(p)=\pm\dfrac{f(p)^2}2$.</p>
          <span class="step-label">Resolvendo cada ramo</span>
          <p><em>Ramo $f'=f^2/2$:</em> $-1/f=x/2+C\Rightarrow f=\dfrac{-2}{x+2C}$. Com $(1,1)$: $C=-3/2\Rightarrow f=\dfrac2{3-x}$.</p>
          <p><em>Ramo $f'=-f^2/2$:</em> $1/f=x/2+C\Rightarrow f=\dfrac2{x+2C}$. Com $(1,1)$: $C=1/2\Rightarrow f=\dfrac2{x+1}$.</p>
          <div class="final">$y=\dfrac2{x+1}$ &nbsp; ou &nbsp; $y=\dfrac2{3-x}$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 15',
        statement: String.raw`<p>Um tanque contém 200 litros de solução de tinta a 1 g/l. Água fresca entra a 2 L/min, a solução bem misturada sai à mesma taxa. Encontre o tempo necessário para que a concentração de tinta atinja 1% do valor original.</p>`,
        resolution: String.raw`
          <span class="step-label">Montando a EDO</span>
          <p>Volume constante ($200$ L, entra e sai à mesma taxa). Seja $A(t)$ a massa de tinta (g). Concentração instantânea: $A(t)/200$ g/L. Saída de tinta: $2\cdot A/200=A/100$ g/min (entrada é água pura, sem tinta). Logo:
          $$\frac{dA}{dt}=-\frac A{100},\qquad A(0)=200\cdot1=200\text{ g}.$$</p>
          <span class="step-label">Resolvendo</span>
          <p>$A(t)=200e^{-t/100}$. Queremos concentração $=1\%$ da original, i.e., $A(t)=200\cdot0{,}01=2$ g:
          $$200e^{-t/100}=2\;\Longrightarrow\;e^{-t/100}=\frac1{100}\;\Longrightarrow\;t=100\ln100.$$</p>
          <div class="final">$t=100\ln100$ minutos ($\approx461{,}5$ min)</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 16',
        statement: String.raw`<p>A população de mosquitos cresce a uma taxa proporcional a seu tamanho e dobra a cada semana. Há inicialmente 200.000 mosquitos, e predadores comem 20.000 mosquitos/dia. Determine a população em qualquer instante $t$ (em semanas).</p>`,
        resolution: String.raw`
          <span class="step-label">Taxa de crescimento $k$</span>
          <p>Sem predação, $P(t)=P_0e^{kt}$ dobra em $1$ semana: $e^{k}=2\Rightarrow k=\ln2$ (unidade: semanas).</p>
          <span class="step-label">Incluindo a predação</span>
          <p>$20\,000$ mosquitos/dia $=140\,000$/semana. $\dfrac{dP}{dt}=(\ln2)P-140\,000$, $P(0)=200\,000$.</p>
          <span class="step-label">Resolvendo (linear)</span>
          <p>Fator integrante $e^{-(\ln2)t}$: $\left(Pe^{-(\ln2)t}\right)'=-140\,000\,e^{-(\ln2)t}$. Integrando: $Pe^{-(\ln2)t}=\dfrac{140\,000}{\ln2}+C\Rightarrow P(t)=\dfrac{140\,000}{\ln2}+Ce^{(\ln2)t}$. Com $P(0)=200\,000$: $C=200\,000-\dfrac{140\,000}{\ln2}\approx-1977{,}31$, e $\dfrac{140\,000}{\ln2}\approx201\,977{,}31$.</p>
          <div class="final">$P(t)\approx201\,977{,}31-1977{,}31\,e^{(\ln2)t}$ até $P$ atingir $0$ (o modelo prevê extinção em $t\approx6{,}67$ semanas, quando a predação supera o crescimento)</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 17', examStyle: true,
        statement: String.raw`<p>Lei do resfriamento de Newton: a temperatura de um objeto muda a uma taxa proporcional à diferença entre sua temperatura e a do ambiente. Um café a 200°F, colocado numa sala a 70°F, esfria para 190°F em 1 minuto. Determine quando o café atinge 150°F.</p>`,
        resolution: String.raw`
          <span class="step-label">Montando o modelo</span>
          <p>$T(t)=T_{amb}+(T_0-T_{amb})e^{-kt}=70+130e^{-kt}$.</p>
          <span class="step-label">Achando $k$ com o dado extra</span>
          <p>$T(1)=190\Rightarrow120=130e^{-k}\Rightarrow e^{-k}=\dfrac{12}{13}\Rightarrow k=\ln\dfrac{13}{12}$.</p>
          <span class="step-label">Resolvendo para $T=150$</span>
          <p>$150=70+130e^{-kt}\Rightarrow e^{-kt}=\dfrac{80}{130}=\dfrac8{13}\Rightarrow t=\dfrac{\ln(13/8)}{k}=\dfrac{\ln(13/8)}{\ln(13/12)}$.</p>
          <div class="final">$t=\dfrac{\ln(13/8)}{\ln(13/12)}\approx6{,}07$ minutos</div>
        `
      }
    ]
  },

  // ================= PARTE B =================
  {
    id: 'p3-t7', number: '07',
    title: 'Redução de Ordem',
    subtitle: '— variável dependente ou independente ausente',
    intro: String.raw`
      <p>Duas famílias de equações de 2ª ordem se reduzem a 1ª ordem por um truque de substituição:</p>
      <p><strong>Variável dependente $y$ ausente</strong> (só aparecem $y',y''$): faça $z=y'$, obtendo uma EDO de 1ª ordem em $z(x)$. Depois integre $y'=z(x)$ para achar $y$.</p>
      <p><strong>Variável independente $x$ ausente</strong> (só aparecem $y,y',y''$): faça $u=y'=\dfrac{dy}{dx}$ e troque a variável de derivação para $y$: $y''=\dfrac{du}{dx}=\dfrac{du}{dy}\cdot\dfrac{dy}{dx}=u\dfrac{du}{dy}$. Isso dá uma EDO de 1ª ordem em $u(y)$; depois resolve-se $\dfrac{dy}{dx}=u(y)$.</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte B · Item 1',
        statement: String.raw`
          <p>(Variável dependente ausente.) Por exemplo, $z=y'$ reduz $xy''-y'=3x^2$ à equação linear $xz'-z=3x^2$. Resolva por esse método as equações abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$xy''-y'=3x^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituição $z=y'$</span>
              <p>Como $y$ não aparece explicitamente (só $y',y''$), fazemos $z=y'$, logo $z'=y''$. A equação $xy''-y'=3x^2$ se torna a equação linear de 1ª ordem $xz'-z=3x^2$.</p>
              <span class="step-label">Passo 2 — resolver a linear em $z$</span>
              <p>Forma padrão: $z'-\dfrac zx=3x$. Fator integrante $\mu(x)=e^{-\int dx/x}=\dfrac1x$. Multiplicando: $\left(\dfrac zx\right)'=3\Rightarrow \dfrac zx=3x+C_1\Rightarrow z=3x^2+C_1x$.</p>
              <span class="step-label">Passo 3 — integrar $y'=z$ para achar $y$</span>
              <p>$$y=\int(3x^2+C_1x)\,dx=x^3+\frac{C_1}2x^2+C_2.$$ Como $C_1$ é uma constante arbitrária, renomeamos $C_1/2\to C_1$.</p>
              <div class="final">$y(x)=x^3+C_1x^2+C_2$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$xy''=y'+(y')^3$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituição $z=y'$</span>
              <p>$z=y'$ dá $xz'=z+z^3$, isto é, $z'-\dfrac zx=\dfrac{z^3}x$ — uma equação de Bernoulli em $z$ com $n=3$.</p>
              <span class="step-label">Passo 2 — linearizar com $w=z^{-2}$</span>
              <p>Como $1-n=-2$, pomos $w=z^{-2}$, logo $w'=-2z^{-3}z'$. Multiplicando a equação por $-2z^{-3}$: $w'+\dfrac{2w}x=-\dfrac2x$.</p>
              <span class="step-label">Passo 3 — resolver a linear em $w$</span>
              <p>Fator integrante $x^2$: $(wx^2)'=-2x\Rightarrow wx^2=C_1-x^2\Rightarrow z^2=\dfrac1w=\dfrac{x^2}{C_1-x^2}$.</p>
              <span class="step-label">Passo 4 — voltar a $z$ e integrar $y'=z$</span>
              <p>Escrevendo $A=1/\sqrt{C_1}$ vem $z=\pm\dfrac{Ax}{\sqrt{1-A^2x^2}}$; integrando, $y=\mp\dfrac1A\sqrt{1-A^2x^2}+C_2$. A solução trivial $z\equiv0$ (isto é, $y\equiv$ const.) também satisfaz a equação original.</p>
              <div class="final">$y(x)=-\dfrac1{C_1}\sqrt{1-C_1^2x^2}+C_2$, ou $y\equiv$ const.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$x^2y''=2xy'+(y')^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituição $z=y'$</span>
              <p>$z=y'$ dá $x^2z'=2xz+z^2$, isto é, $z'-\dfrac{2z}x=\dfrac{z^2}{x^2}$ — Bernoulli em $z$ com $n=2$.</p>
              <span class="step-label">Passo 2 — linearizar com $w=z^{-1}$</span>
              <p>$w'=-z^{-2}z'$. Multiplicando a equação por $-z^{-2}$: $w'+\dfrac{2w}x=-\dfrac1{x^2}$.</p>
              <span class="step-label">Passo 3 — resolver a linear em $w$</span>
              <p>Fator integrante $x^2$: $(wx^2)'=-1\Rightarrow wx^2=C_1-x\Rightarrow z=\dfrac1w=\dfrac{x^2}{C_1-x}$.</p>
              <span class="step-label">Passo 4 — dividir e integrar $y'=z$</span>
              <p>Divisão de polinômios: $\dfrac{x^2}{C_1-x}=-x-C_1+\dfrac{C_1^2}{C_1-x}$. Integrando: $y=-\dfrac{x^2}2-C_1x-C_1^2\ln|x-C_1|+C_2$. Novamente $z\equiv0$ (isto é, $y\equiv$ const.) é solução trivial.</p>
              <div class="final">$y(x)=-\dfrac{x^2}2-C_1x-C_1^2\ln|x-C_1|+C_2$, ou $y\equiv$ const.</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$x^2y''+xy'=1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituição $z=y'$</span>
              <p>$z=y'$ dá $x^2z'+xz=1$, isto é, $z'+\dfrac zx=\dfrac1{x^2}$ — linear em $z$.</p>
              <span class="step-label">Passo 2 — resolver a linear em $z$</span>
              <p>Fator integrante $\mu=e^{\int dx/x}=x$: $(zx)'=\dfrac1x\Rightarrow zx=\ln|x|+C_1\Rightarrow z=\dfrac{\ln|x|}x+\dfrac{C_1}x$.</p>
              <span class="step-label">Passo 3 — integrar $y'=z$</span>
              <p>Usando $\int\frac{\ln|x|}x\,dx=\frac12\ln^2|x|$ (substituição $u=\ln|x|$): $$y=\frac12\ln^2|x|+C_1\ln|x|+C_2.$$</p>
              <div class="final">$y(x)=\dfrac{\ln^2|x|}2+C_1\ln|x|+C_2$</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte B · Item 2',
        statement: String.raw`
          <p>(Variável independente ausente.) Por exemplo, $y''+y=0$ vira $u\,du/dy+y=0$ com $u=y'$. Resolva por esse método as equações abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$y''+4y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituição $u=y'$, $y''=u\,du/dy$</span>
              <p>Como $x$ não aparece explicitamente, trocamos a variável de derivação para $y$: a equação $y''+4y=0$ vira $u\dfrac{du}{dy}+4y=0$.</p>
              <span class="step-label">Passo 2 — separar e integrar em $y$</span>
              <p>$u\,du=-4y\,dy\Rightarrow \dfrac{u^2}2=-2y^2+\dfrac A2\Rightarrow u^2=A-4y^2$.</p>
              <span class="step-label">Passo 3 — voltar a $dy/dx$ e integrar</span>
              <p>$\dfrac{dy}{dx}=\pm\sqrt{A-4y^2}$, separável: $\dfrac{dy}{\sqrt{A-4y^2}}=\pm dx$. Integrando (arco-seno) e recombinando as constantes de integração chega-se à forma geral já conhecida.</p>
              <div class="final">$y(x)=C_1\sin2x+C_2\cos2x$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$y''-9y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituição $u=y'$, $y''=u\,du/dy$</span>
              <p>$y''-9y=0$ vira $u\dfrac{du}{dy}-9y=0$, isto é, $u\,du/dy=9y$.</p>
              <span class="step-label">Passo 2 — separar e integrar em $y$</span>
              <p>$u\,du=9y\,dy\Rightarrow \dfrac{u^2}2=\dfrac92y^2+\dfrac A2\Rightarrow u^2=9y^2+A$.</p>
              <span class="step-label">Passo 3 — voltar a $dy/dx$ e integrar</span>
              <p>$\dfrac{dy}{dx}=\pm\sqrt{9y^2+A}$; integrando (agora com seno/cosseno hiperbólicos, pois o radicando cresce com $y^2$) e recombinando as constantes chega-se à forma exponencial usual.</p>
              <div class="final">$y(x)=C_1e^{3x}+C_2e^{-3x}$</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$yy''+(y')^2=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer uma derivada exata</span>
              <p>Note que $(yy')'=y'y'+yy''=(y')^2+yy''$ — exatamente o lado esquerdo da equação dada! Logo a equação equivale a $(yy')'=0$.</p>
              <span class="step-label">Passo 2 — primeira integração</span>
              <p>$(yy')'=0\Rightarrow yy'=C_1$.</p>
              <span class="step-label">Passo 3 — separar e integrar de novo</span>
              <p>$y\,dy=C_1\,dx\Rightarrow \dfrac{y^2}2=C_1x+C_2'$.</p>
              <div class="final">$y^2=C_1x+C_2$</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$yy''=y^2y'+(y')^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituição $u=y'$, $y''=u\,du/dy$</span>
              <p>A equação vira $yu\dfrac{du}{dy}=y^2u+u^2$.</p>
              <span class="step-label">Passo 2 — dividir por $u$ (caso $u\ne0$) e obter uma linear em $u(y)$</span>
              <p>$y\dfrac{du}{dy}=y^2+u\Rightarrow \dfrac{du}{dy}-\dfrac uy=y$, linear em $u(y)$.</p>
              <span class="step-label">Passo 3 — resolver a linear em $u$</span>
              <p>Fator integrante $1/y$: $\left(\dfrac uy\right)'=1\Rightarrow \dfrac uy=y+C_1\Rightarrow u=y^2+C_1y$.</p>
              <span class="step-label">Passo 4 — voltar a $u=dy/dx$ e separar</span>
              <p>$\dfrac{dy}{y(y+C_1)}=dx$. Frações parciais: $\dfrac1{y(y+C_1)}=\dfrac1{C_1}\left(\dfrac1y-\dfrac1{y+C_1}\right)$. Integrando: $\dfrac1{C_1}\ln\left|\dfrac y{y+C_1}\right|=x+C_2'\Rightarrow \dfrac y{y+C_1}=Ke^{C_1x}$.</p>
              <span class="step-label">Passo 5 — isolar $y$</span>
              <p>$y=Ke^{C_1x}(y+C_1)$. Renomeando $K\to C_2$ e observando que $u\equiv0$ (isto é, $y\equiv$ const.) também satisfaz a equação original (caso excluído no Passo 2):</p>
              <div class="final">$y=C_2(C_1+y)e^{C_1x}$, ou $y\equiv$ const.</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte B · Item 3', examStyle: true,
        statement: String.raw`
          <p>Resolva os problemas de valor inicial abaixo usando redução de ordem. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$(x^2+2y')y''+2xy'=0$; $y'(1)=0$, $y(1)=1$. O que acontece com a solução se as condições iniciais forem $y'(0)=0$, $y(0)=1$?`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituição $z=y'$ (variável dependente ausente)</span>
              <p>A equação vira $(x^2+2z)z'+2xz=0$.</p>
              <span class="step-label">Passo 2 — reconhecer uma soma de derivadas exatas</span>
              <p>Observe que $x^2z'+2xz=(x^2z)'$ e $2zz'=(z^2)'$. Logo a equação é $\dfrac d{dx}\big[x^2z+z^2\big]=0\Rightarrow x^2z+z^2=\text{const}$.</p>
              <span class="step-label">Passo 3 — caso $x_0=1$: usando $z(1)=y'(1)=0$</span>
              <p>A constante vale $1^2\cdot0+0^2=0$, logo $x^2z+z^2=0\Rightarrow z(x^2+z)=0$ para todo $x$: ou $z\equiv0$ ou $z=-x^2$. Como $z$ é contínua e vale $0$ em $x=1$ (onde $-x^2=-1\ne0$), por continuidade $z\equiv0$ na vizinhança de $x=1$ (os dois ramos algébricos só coincidem em $x=0$). Logo $y'\equiv0\Rightarrow y\equiv1$.</p>
              <div class="final">$y\equiv1$ (única solução, pois em $x=1$ o coeficiente $x^2+2y'=1\ne0$: a equação está bem-posta ali)</div>
              <span class="step-label">Passo 4 — caso $x_0=0$: o que muda</span>
              <p>Usando $z(0)=y'(0)=0$: a mesma conta dá constante $=0$, logo novamente $x^2z+z^2=0$. Mas agora, em $x=0$, os dois ramos algébricos $z=0$ e $z=-x^2$ <strong>coincidem</strong> (ambos valem $0$). A continuidade não escolhe mais um único ramo: tanto $z\equiv0$ (dando $y\equiv1$) quanto $z=-x^2$ (dando $y=1-x^3/3$) são soluções contínuas válidas passando por $(0,1)$ com derivada $0$ ali.</p>
              <div class="final">Em $x=0$ a <strong>unicidade falha</strong>: há (ao menos) duas soluções, $y\equiv1$ e $y=1-\dfrac{x^3}3$ — coerente com o fato de que o coeficiente de $y''$, $x^2+2y'$, se anula em $(0,0)$, degenerando a equação (ela deixa de estar na forma normal ali).</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$yy''=y^2y'+(y')^2$; $y(0)=-1$, $y'(0)=1$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — variável independente ausente, $u=y'$, $y''=u\,du/dy$</span>
              <p>Esta é a mesma equação do item B.2(4), cuja solução geral já foi obtida: $u=y^2+C_1y$, com $u=y'$.</p>
              <span class="step-label">Passo 2 — usar as condições iniciais para achar $C_1$</span>
              <p>Em $x=0$: $y=-1$, $u=y'(0)=1$. Substituindo em $u=y^2+C_1y$: $1=(-1)^2+C_1(-1)=1-C_1\Rightarrow C_1=0$.</p>
              <span class="step-label">Passo 3 — com $C_1=0$, resolver a equação separável em $y$</span>
              <p>$u=y^2\Rightarrow y'=y^2$. Separando: $-\dfrac1y=x+C_2\Rightarrow y=-\dfrac1{x+C_2}$.</p>
              <span class="step-label">Passo 4 — usar $y(0)=-1$ para achar $C_2$</span>
              <p>$-1=-\dfrac1{C_2}\Rightarrow C_2=1$.</p>
              <div class="final">$y=-\dfrac1{x+1}$ &nbsp;<span style="color:var(--gray)">(verificado diretamente na equação original)</span></div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t8', number: '08',
    title: 'Independência Linear e Soluções Fundamentais',
    subtitle: '',
    intro: String.raw`
      <p>Dada <em>uma</em> solução $y_1$ de $y''+P(x)y'+Q(x)y=0$, a fórmula de <strong>redução de ordem de D'Alembert</strong> produz uma segunda solução linearmente independente:
      $$y_2=y_1\int\frac{e^{-\int P(x)\,dx}}{y_1^2}\,dx.$$
      O par $\{y_1,y_2\}$ é LI sempre que o Wronskiano $W=y_1y_2'-y_1'y_2\ne0$ — o que a própria fórmula acima já garante (ela é construída para isso).</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte B · Item 4',
        statement: String.raw`
          <p>Verifique que $y_1$ é solução da equação dada e encontre, a partir dela, uma solução $y_2$ tal que $\{y_1,y_2\}$ seja LI. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$x^2y''+xy'-4y=0$, $y_1=x^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a equação de Euler e verificar $y_1$</span>
              <p>Tentando $y=x^r$: $x^2\cdot r(r-1)x^{r-2}+x\cdot rx^{r-1}-4x^r=x^r\big[r(r-1)+r-4\big]=x^r(r^2-4)=0$. As raízes são $r=\pm2$; em particular $r=2$ dá exatamente $y_1=x^2$, confirmando que é solução.</p>
              <span class="step-label">Passo 2 — a segunda raiz já fornece $y_2$</span>
              <p>Como a equação é de Euler com raízes reais distintas $r=2,-2$, a segunda solução é diretamente $y_2=x^{-2}$ (aqui nem é preciso recorrer à fórmula de D'Alembert).</p>
              <span class="step-label">Passo 3 — cálculo do Wronskiano</span>
              <p>$y_1'=2x$, $y_2'=-2x^{-3}$. $$W=y_1y_2'-y_1'y_2=x^2(-2x^{-3})-2x\cdot x^{-2}=-\frac2x-\frac2x=-\frac4x.$$ Como $W\ne0$ para todo $x\ne0$, o par $\{y_1,y_2\}$ é LI.</p>
              <div class="final">$y_2=x^{-2}$; $W=-4/x\ne0\Rightarrow\{y_1,y_2\}$ LI</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$(1-x^2)y''+2xy'-2y=0$, $y_1=x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — verificar $y_1=x$</span>
              <p>$y=x\Rightarrow y'=1,\ y''=0$. Substituindo: $(1-x^2)\cdot0+2x\cdot1-2x=0$. Confirmado.</p>
              <span class="step-label">Passo 2 — identificar $P(x)$ e aplicar D'Alembert</span>
              <p>Forma padrão: $y''+\dfrac{2x}{1-x^2}y'-\dfrac2{1-x^2}y=0$, logo $P(x)=\dfrac{2x}{1-x^2}$. Com $u=1-x^2$, $du=-2x\,dx$: $\int P\,dx=-\ln|1-x^2|\Rightarrow e^{-\int P}=1-x^2$.</p>
              <span class="step-label">Passo 3 — construir $y_2$</span>
              <p>$y_2=y_1\displaystyle\int\frac{e^{-\int P}}{y_1^2}\,dx=x\int\frac{1-x^2}{x^2}\,dx=x\left[-\frac1x-x\right]=-(1+x^2)$; a menos do sinal, $y_2=1+x^2$.</p>
              <span class="step-label">Passo 4 — cálculo do Wronskiano</span>
              <p>$y_1'=1$, $y_2'=2x$. $$W=y_1y_2'-y_1'y_2=x(2x)-1(1+x^2)=x^2-1.$$ $W\ne0$ exceto em $x=\pm1$ — exatamente os pontos onde o coeficiente líder $1-x^2$ se anula (equação perde a forma normal ali). Fora desses pontos, $\{y_1,y_2\}$ é LI.</p>
              <div class="final">$y_2=1+x^2$; $W=x^2-1\ne0$ (para $x\ne\pm1$) $\Rightarrow\{y_1,y_2\}$ LI</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$y''-\dfrac{x}{x-1}y'+\dfrac1{x-1}y=0$, $y_1=x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — verificar $y_1=x$ diretamente</span>
              <p>$y=x\Rightarrow y'=1,\ y''=0$. Substituindo: $0-\dfrac x{x-1}\cdot1+\dfrac1{x-1}\cdot x=-\dfrac x{x-1}+\dfrac x{x-1}=0$. Confirmado.</p>
              <span class="step-label">Passo 2 — tentar diretamente $y_2=e^x$</span>
              <p>Substituindo $y=e^x$ ($y'=y''=e^x$): $$e^x-\frac x{x-1}e^x+\frac1{x-1}e^x=e^x\left[1-\frac x{x-1}+\frac1{x-1}\right]=e^x\left[1+\frac{1-x}{x-1}\right]=e^x[1-1]=0.$$ Funciona, então $y_2=e^x$ é uma segunda solução.</p>
              <span class="step-label">Passo 3 — cálculo do Wronskiano</span>
              <p>$y_1'=1$, $y_2'=e^x$. $$W=y_1y_2'-y_1'y_2=xe^x-e^x=(x-1)e^x.$$ $W\ne0$ para $x\ne1$ — justamente o ponto singular de $P(x)=-x/(x-1)$. Fora dele, $\{y_1,y_2\}$ é LI.</p>
              <div class="final">$y_2=e^x$; $W=(x-1)e^x\ne0$ (para $x\ne1$) $\Rightarrow\{y_1,y_2\}$ LI</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$x^2y''+2xy'-2y=0$, $y_1=x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — reconhecer a equação de Euler e verificar $y_1$</span>
              <p>Tentando $y=x^r$: $r(r-1)+2r-2=r^2+r-2=(r+2)(r-1)=0\Rightarrow r=1,-2$. A raiz $r=1$ confirma $y_1=x$.</p>
              <span class="step-label">Passo 2 — a segunda raiz fornece $y_2$</span>
              <p>A raiz $r=-2$ dá diretamente a segunda solução, $y_2=x^{-2}$.</p>
              <span class="step-label">Passo 3 — cálculo do Wronskiano</span>
              <p>$y_1'=1$, $y_2'=-2x^{-3}$. $$W=y_1y_2'-y_1'y_2=x(-2x^{-3})-1(x^{-2})=-2x^{-2}-x^{-2}=-3x^{-2}.$$ $W\ne0$ para todo $x\ne0$, logo $\{y_1,y_2\}$ é LI.</p>
              <div class="final">$y_2=x^{-2}$; $W=-3/x^2\ne0\Rightarrow\{y_1,y_2\}$ LI</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$xy''+3y'=0$, $y_1=1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — verificar $y_1=1$</span>
              <p>$y=1\Rightarrow y'=y''=0$. Substituindo: $x\cdot0+3\cdot0=0$. Satisfeita trivialmente.</p>
              <span class="step-label">Passo 2 — identificar $P(x)$ e aplicar D'Alembert</span>
              <p>Forma padrão: $y''+\dfrac3xy'=0$, logo $P(x)=3/x$ e $e^{-\int P}=e^{-3\ln|x|}=x^{-3}$.</p>
              <span class="step-label">Passo 3 — construir $y_2$</span>
              <p>$y_2=y_1\displaystyle\int\frac{e^{-\int P}}{y_1^2}\,dx=1\cdot\int x^{-3}\,dx=-\dfrac1{2x^2}$; a menos de constante multiplicativa, $y_2=x^{-2}$.</p>
              <span class="step-label">Passo 4 — cálculo do Wronskiano</span>
              <p>$y_1'=0$, $y_2'=-2x^{-3}$. $$W=y_1y_2'-y_1'y_2=1\cdot(-2x^{-3})-0=-2x^{-3}.$$ $W\ne0$ para todo $x\ne0$, logo $\{y_1,y_2\}$ é LI.</p>
              <div class="final">$y_2=x^{-2}$; $W=-2/x^3\ne0\Rightarrow\{y_1,y_2\}$ LI</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$x^2y''+xy'+\left(x^2-\tfrac14\right)y=0$, $y_1=x^{-1/2}\sin x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — forma padrão e identificação de $P(x)$</span>
              <p>Dividindo por $x^2$: $y''+\dfrac1xy'+\left(1-\dfrac1{4x^2}\right)y=0$ (equação de Bessel de ordem $1/2$), logo $P(x)=1/x$ e $e^{-\int P}=1/x$.</p>
              <span class="step-label">Passo 2 — construir $y_2$ por D'Alembert</span>
              <p>$$y_2=y_1\int\frac{e^{-\int P}}{y_1^2}\,dx=x^{-1/2}\sin x\int\frac{1/x}{x^{-1}\sin^2x}\,dx=x^{-1/2}\sin x\int\csc^2x\,dx=x^{-1/2}\sin x\cdot(-\cot x)=-x^{-1/2}\cos x.$$ A menos de sinal, $y_2=x^{-1/2}\cos x$.</p>
              <span class="step-label">Passo 3 — cálculo do Wronskiano</span>
              <p>Com $y_1'=-\tfrac12x^{-3/2}\sin x+x^{-1/2}\cos x$ e $y_2'=-\tfrac12x^{-3/2}\cos x-x^{-1/2}\sin x$, o produto cruzado se simplifica usando $\sin^2x+\cos^2x=1$: $$W=y_1y_2'-y_1'y_2=-\frac1x.$$ $W\ne0$ para todo $x\ne0$, logo $\{y_1,y_2\}$ é LI.</p>
              <div class="final">$y_2=x^{-1/2}\cos x$; $W=-1/x\ne0\Rightarrow\{y_1,y_2\}$ LI</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$xy''-(2x+1)y'+(x+1)y=0$, $y_1=e^x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — verificar $y_1=e^x$</span>
              <p>$y=e^x\Rightarrow y'=y''=e^x$. Substituindo: $xe^x-(2x+1)e^x+(x+1)e^x=e^x[x-2x-1+x+1]=e^x\cdot0=0$. Confirmado.</p>
              <span class="step-label">Passo 2 — forma padrão e identificação de $P(x)$</span>
              <p>Dividindo por $x$: $y''-\dfrac{2x+1}xy'+\dfrac{x+1}xy=0$, logo $P(x)=-\dfrac{2x+1}x=-2-\dfrac1x$. $$e^{-\int P\,dx}=e^{\int(2+1/x)\,dx}=xe^{2x}.$$</p>
              <span class="step-label">Passo 3 — construir $y_2$</span>
              <p>$$y_2=y_1\int\frac{e^{-\int P}}{y_1^2}\,dx=e^x\int\frac{xe^{2x}}{e^{2x}}\,dx=e^x\int x\,dx=\frac{x^2}2e^x.$$</p>
              <span class="step-label">Passo 4 — cálculo do Wronskiano</span>
              <p>$y_1'=e^x$, $y_2'=xe^x+\dfrac{x^2}2e^x$. $$W=y_1y_2'-y_1'y_2=e^x\left[xe^x+\frac{x^2}2e^x\right]-e^x\cdot\frac{x^2}2e^x=xe^{2x}.$$ $W\ne0$ para $x\ne0$, logo $\{y_1,y_2\}$ é LI.</p>
              <div class="final">$y_2=\dfrac{x^2}2e^x$; $W=xe^{2x}\ne0$ (para $x\ne0$) $\Rightarrow\{y_1,y_2\}$ LI</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte B · Item 5', examStyle: true,
        statement: String.raw`
          <p>Determine a solução geral das equações abaixo. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$y''-xf(x)y'+f(x)y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — chute inspirado $y_1=x$ (funciona para qualquer $f$)</span>
              <p>Com $y_1=x$: $y_1'=1$, $y_1''=0$. Substituindo: $0-xf(x)\cdot1+f(x)\cdot x=0$. A equação é satisfeita para <em>qualquer</em> função $f$ contínua, logo $y_1=x$ é sempre solução.</p>
              <span class="step-label">Passo 2 — identificar $P(x)$ e aplicar D'Alembert</span>
              <p>Na forma padrão, $P(x)=-xf(x)$, logo $e^{-\int P\,dx}=e^{\int xf(x)\,dx}$.</p>
              <span class="step-label">Passo 3 — construir $y_2$</span>
              <p>$$y_2=y_1\int\frac{e^{-\int P\,dx}}{y_1^2}\,dx=x\int\frac{e^{\int xf(x)\,dx}}{x^2}\,dx.$$</p>
              <span class="step-label">Passo 4 — Wronskiano e conclusão</span>
              <p>Pela própria construção da fórmula de D'Alembert, $W(y_1,y_2)=e^{-\int P\,dx}=e^{\int xf(x)\,dx}$, que é uma exponencial e portanto <strong>nunca se anula</strong>, qualquer que seja $f$. Logo $\{y_1,y_2\}$ é sempre LI.</p>
              <div class="final">$y(x)=C_1x+C_2x\displaystyle\int\frac{e^{\int xf(x)dx}}{x^2}\,dx$, com $\{y_1,y_2\}$ sempre LI ($W=e^{\int xf(x)dx}\ne0$)</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$y''-f(x)y'+(f(x)-1)y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — chute inspirado $y_1=e^x$ (funciona para qualquer $f$)</span>
              <p>Com $y_1=e^x$: $y_1'=y_1''=e^x$. Substituindo: $e^x-f(x)e^x+(f(x)-1)e^x=e^x[1-f(x)+f(x)-1]=0$. Vale para <em>qualquer</em> $f$ contínua.</p>
              <span class="step-label">Passo 2 — identificar $P(x)$ e aplicar D'Alembert</span>
              <p>Aqui $P(x)=-f(x)$, logo $e^{-\int P\,dx}=e^{\int f(x)\,dx}$.</p>
              <span class="step-label">Passo 3 — construir $y_2$</span>
              <p>$$y_2=y_1\int\frac{e^{-\int P\,dx}}{y_1^2}\,dx=e^x\int\frac{e^{\int f(x)\,dx}}{e^{2x}}\,dx=e^x\int e^{-2x+\int f(x)\,dx}\,dx.$$</p>
              <span class="step-label">Passo 4 — Wronskiano e conclusão</span>
              <p>Novamente, $W(y_1,y_2)=e^{-\int P\,dx}=e^{\int f(x)\,dx}\ne0$ para toda $f$ contínua, garantindo que $\{y_1,y_2\}$ é sempre LI.</p>
              <div class="final">$y(x)=C_1e^x+C_2e^x\displaystyle\int e^{-2x+\int f(x)dx}\,dx$, com $\{y_1,y_2\}$ sempre LI ($W=e^{\int f(x)dx}\ne0$)</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t9', number: '09',
    title: 'Lineares Homogêneas com Coeficientes Constantes',
    subtitle: '',
    intro: String.raw`
      <p>Para $ay''+by'+cy=0$ (ou ordem superior), o chute $y=e^{rx}$ transforma a EDO na <strong>equação característica</strong> polinomial em $r$. Raízes reais distintas dão $e^{r_1x},e^{r_2x},\dots$; raízes complexas $\alpha\pm i\beta$ dão $e^{\alpha x}\cos\beta x,\,e^{\alpha x}\sin\beta x$; e uma raiz $r_0$ de multiplicidade $m$ contribui com $e^{r_0x},xe^{r_0x},\dots,x^{m-1}e^{r_0x}$.</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte B · Item 6',
        statement: String.raw`
          <p>Determine todas as soluções das equações lineares homogêneas com coeficientes constantes abaixo. Em cada caso, monte a equação característica, ache as raízes e escreva a solução geral. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$y''+2y'+y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — montar a equação característica</span>
              <p>Trata-se de uma equação linear homogênea de 2ª ordem com coeficientes constantes. O chute $y=e^{rx}$ dá $y'=re^{rx}$ e $y''=r^2e^{rx}$; substituindo e cancelando $e^{rx}\ne0$:</p>
              $$r^2+2r+1=0.$$
              <span class="step-label">Passo 2 — resolver em $r$</span>
              <p>O discriminante é $\Delta=2^2-4\cdot1\cdot1=0$, ou seja, estamos no <strong>caso de raiz real repetida</strong>. De fato o polinômio é um quadrado perfeito:</p>
              $$r^2+2r+1=(r+1)^2=0\;\Longrightarrow\; r=-1\ \text{(multiplicidade 2)}.$$
              <span class="step-label">Passo 3 — montar a solução geral</span>
              <p>Uma raiz $r_0$ de multiplicidade $2$ contribui com as duas soluções independentes $e^{r_0x}$ e $xe^{r_0x}$ (a segunda aparece justamente porque $e^{r_0x}$ sozinha não gera um espaço de dimensão 2).</p>
              $$y=C_1e^{-x}+C_2xe^{-x}.$$
              <div class="final">$y=C_1e^{-x}+C_2xe^{-x}=(C_1+C_2x)e^{-x}$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$y''-4y'+4y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação característica</span>
              <p>Com $y=e^{rx}$:</p>
              $$r^2-4r+4=0.$$
              <span class="step-label">Passo 2 — raízes</span>
              <p>$\Delta=(-4)^2-4\cdot1\cdot4=16-16=0$: raiz real dupla. Fatorando,</p>
              $$r^2-4r+4=(r-2)^2=0\;\Longrightarrow\; r=2\ \text{(dupla)}.$$
              <span class="step-label">Passo 3 — solução geral (raiz repetida)</span>
              <p>Base de soluções: $e^{2x}$ e $xe^{2x}$.</p>
              <div class="final">$y=C_1e^{2x}+C_2xe^{2x}=(C_1+C_2x)e^{2x}$</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$y'''-y''+y'-y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação característica (3ª ordem)</span>
              <p>Substituindo $y=e^{rx}$ na equação de terceira ordem obtemos o polinômio cúbico</p>
              $$r^3-r^2+r-1=0.$$
              <span class="step-label">Passo 2 — fatorar por agrupamento</span>
              <p>Agrupando os termos dois a dois:</p>
              $$r^3-r^2+r-1=r^2(r-1)+1\cdot(r-1)=(r-1)(r^2+1)=0.$$
              <p>Logo $r=1$ (real simples) e $r^2=-1$, isto é, $r=\pm i$ (par complexo conjugado com $\alpha=0$, $\beta=1$).</p>
              <span class="step-label">Passo 3 — solução geral</span>
              <p>A raiz real $r=1$ dá $e^{x}$; o par $\alpha\pm i\beta=0\pm i$ dá $e^{0\cdot x}\cos x=\cos x$ e $\sin x$. São três soluções independentes, o que basta para a ordem 3.</p>
              <div class="final">$y=C_1e^{x}+C_2\cos x+C_3\sin x$</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$2y''-4y'+8y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — normalizar e montar a característica</span>
              <p>Dividindo tudo por $2$: $y''-2y'+4y=0$. Com $y=e^{rx}$,</p>
              $$r^2-2r+4=0.$$
              <span class="step-label">Passo 2 — raízes complexas</span>
              <p>$\Delta=(-2)^2-4\cdot1\cdot4=4-16=-12&lt;0$, então caímos no <strong>caso complexo conjugado</strong>:</p>
              $$r=\frac{2\pm\sqrt{-12}}{2}=\frac{2\pm 2i\sqrt3}{2}=1\pm i\sqrt3.$$
              <p>Ou seja, $\alpha=1$ e $\beta=\sqrt3$.</p>
              <span class="step-label">Passo 3 — passar para forma real</span>
              <p>De $e^{(\alpha\pm i\beta)x}$ e da fórmula de Euler $e^{i\theta}=\cos\theta+i\sin\theta$, extraem-se as duas soluções reais $e^{\alpha x}\cos\beta x$ e $e^{\alpha x}\sin\beta x$.</p>
              <div class="final">$y=e^{x}\big(C_1\cos\sqrt3\,x+C_2\sin\sqrt3\,x\big)$</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$y''-9y'+20y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação característica</span>
              $$r^2-9r+20=0.$$
              <span class="step-label">Passo 2 — raízes reais distintas</span>
              <p>$\Delta=81-80=1&gt;0$, logo há duas raízes reais diferentes:</p>
              $$r=\frac{9\pm\sqrt1}{2}=\frac{9\pm1}{2}\;\Longrightarrow\; r_1=5,\quad r_2=4.$$
              <p>(Equivalente a fatorar $r^2-9r+20=(r-4)(r-5)$.)</p>
              <span class="step-label">Passo 3 — solução geral</span>
              <p>Raízes reais distintas dão exponenciais independentes $e^{r_1x}$ e $e^{r_2x}$.</p>
              <div class="final">$y=C_1e^{5x}+C_2e^{4x}$</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$2y''+2y'+3y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — normalizar</span>
              <p>Dividindo por $2$: $y''+y'+\tfrac32y=0$, cuja equação característica é</p>
              $$r^2+r+\frac32=0.$$
              <span class="step-label">Passo 2 — raízes complexas</span>
              <p>$\Delta=1^2-4\cdot1\cdot\tfrac32=1-6=-5&lt;0$. Então</p>
              $$r=\frac{-1\pm\sqrt{-5}}{2}=-\frac12\pm i\frac{\sqrt5}{2},$$
              <p>isto é, $\alpha=-\tfrac12$ e $\beta=\tfrac{\sqrt5}{2}$.</p>
              <span class="step-label">Passo 3 — solução geral</span>
              <p>O fator $e^{-x/2}$ vem da parte real $\alpha$ e produz o amortecimento; a parte imaginária $\beta$ fixa a frequência das oscilações.</p>
              <div class="final">$y=e^{-x/2}\left(C_1\cos\dfrac{\sqrt5}{2}x+C_2\sin\dfrac{\sqrt5}{2}x\right)$</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$y'''-3y''+3y'-y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação característica</span>
              $$r^3-3r^2+3r-1=0.$$
              <span class="step-label">Passo 2 — reconhecer o cubo perfeito</span>
              <p>Os coeficientes $1,-3,3,-1$ são os do binômio de Newton com sinais alternados:</p>
              $$r^3-3r^2+3r-1=(r-1)^3=0\;\Longrightarrow\; r=1\ \text{com multiplicidade }3.$$
              <p>(Confere-se pela regra de Ruffini: $r=1$ anula o polinômio, e o quociente $r^2-2r+1=(r-1)^2$ ainda tem $r=1$ como raiz dupla.)</p>
              <span class="step-label">Passo 3 — solução geral (raiz tripla)</span>
              <p>Uma raiz $r_0$ de multiplicidade $m$ contribui com $e^{r_0x},\,xe^{r_0x},\dots,x^{m-1}e^{r_0x}$. Aqui $m=3$.</p>
              <div class="final">$y=C_1e^{x}+C_2xe^{x}+C_3x^2e^{x}=(C_1+C_2x+C_3x^2)e^{x}$</div>
            `
          },
          {
            label: '8',
            statement: String.raw`$\dfrac{d^4y}{dx^4}+y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação característica</span>
              <p>Com $y=e^{rx}$ temos $y^{(4)}=r^4e^{rx}$, logo</p>
              $$r^4+1=0\;\Longleftrightarrow\; r^4=-1.$$
              <span class="step-label">Passo 2 — as quatro raízes de $-1$</span>
              <p>Escrevendo $-1=e^{i\pi}$ e usando as raízes $n$-ésimas de um complexo, $r_k=e^{i(\pi+2k\pi)/4}$ para $k=0,1,2,3$, ou seja, os ângulos $\tfrac{\pi}{4},\tfrac{3\pi}{4},\tfrac{5\pi}{4},\tfrac{7\pi}{4}$:</p>
              $$r=\frac{\sqrt2}{2}\left(\pm1\pm i\right).$$
              <p>Alternativamente, por fatoração real: $r^4+1=(r^2+1)^2-2r^2=\big(r^2-\sqrt2\,r+1\big)\big(r^2+\sqrt2\,r+1\big)$, e cada fator quadrático dá $r=\pm\tfrac{\sqrt2}{2}\pm i\tfrac{\sqrt2}{2}$.</p>
              <span class="step-label">Passo 3 — dois pares conjugados</span>
              <p>Temos o par $\alpha=\tfrac{\sqrt2}{2},\ \beta=\tfrac{\sqrt2}{2}$ e o par $\alpha=-\tfrac{\sqrt2}{2},\ \beta=\tfrac{\sqrt2}{2}$. Cada par gera $e^{\alpha x}\cos\beta x$ e $e^{\alpha x}\sin\beta x$, totalizando as quatro soluções independentes exigidas pela ordem 4.</p>
              <div class="final">$y=e^{\frac{\sqrt2}{2}x}\left(C_1\cos\dfrac{\sqrt2}{2}x+C_2\sin\dfrac{\sqrt2}{2}x\right)+e^{-\frac{\sqrt2}{2}x}\left(C_3\cos\dfrac{\sqrt2}{2}x+C_4\sin\dfrac{\sqrt2}{2}x\right)$</div>
            `
          },
          {
            label: '9',
            statement: String.raw`$\dfrac{d^5y}{dx^5}+2\dfrac{d^3y}{dx^3}+\dfrac{dy}{dx}=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação característica</span>
              $$r^5+2r^3+r=0.$$
              <span class="step-label">Passo 2 — fatorar</span>
              <p>Colocando $r$ em evidência e reconhecendo um quadrado perfeito em $r^2$:</p>
              $$r\big(r^4+2r^2+1\big)=r\big(r^2+1\big)^2=0.$$
              <p>Logo $r=0$ (simples) e $r=\pm i$, cada um com <strong>multiplicidade 2</strong> — são cinco raízes contadas com multiplicidade, como manda a ordem 5.</p>
              <span class="step-label">Passo 3 — solução geral com raízes complexas repetidas</span>
              <p>A raiz $r=0$ dá $e^{0x}=1$. O par $\pm i$ de multiplicidade $2$ dá $\cos x,\ \sin x$ e também $x\cos x,\ x\sin x$ (multiplica-se por potências de $x$ exatamente como no caso real repetido).</p>
              <div class="final">$y=C_1+(C_2+C_3x)\cos x+(C_4+C_5x)\sin x$</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t10', number: '10',
    title: 'Equação de Euler',
    subtitle: '',
    intro: String.raw`
      <p>A equação de Euler $x^2y''+\alpha xy'+\beta y=0$ tem coeficientes variáveis, mas a mudança $x=e^z$ ($x&gt;0$) a transforma numa equação linear de <strong>coeficientes constantes</strong> em $z$:
      $$\frac{d^2y}{dz^2}+(\alpha-1)\frac{dy}{dz}+\beta y=0,$$
      que se resolve pela equação característica de sempre. No final, troca-se de volta $z=\ln x$ (e $e^{rz}=x^r$).</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte B · Item 7', examStyle: true,
        statement: String.raw`
          <p>Aplique a técnica $x=e^z$ para determinar a solução geral das equações de Euler abaixo (considere $x&gt;0$). Abra a resolução de cada item separadamente.</p>
          <p>Lembre: em $x^2y''+\alpha xy'+\beta y=0$, a troca $x=e^z$ (isto é, $z=\ln x$) leva a $\dfrac{d^2y}{dz^2}+(\alpha-1)\dfrac{dy}{dz}+\beta y=0$, cuja equação característica (ou <em>indicial</em>) é $r^2+(\alpha-1)r+\beta=0$ — a mesma que se obtém testando $y=x^r$.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$x^2y''+xy'+y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $\alpha$ e $\beta$</span>
              <p>Comparando com $x^2y''+\alpha xy'+\beta y=0$: $\alpha=1$, $\beta=1$.</p>
              <span class="step-label">Passo 2 — mudar para $x=e^z$</span>
              <p>Com $z=\ln x$ valem $x\dfrac{dy}{dx}=\dfrac{dy}{dz}$ e $x^2\dfrac{d^2y}{dx^2}=\dfrac{d^2y}{dz^2}-\dfrac{dy}{dz}$. Substituindo:</p>
              $$\frac{d^2y}{dz^2}-\frac{dy}{dz}+\frac{dy}{dz}+y=0\;\Longrightarrow\;\frac{d^2y}{dz^2}+y=0.$$
              <span class="step-label">Passo 3 — equação indicial e raízes</span>
              <p>A característica em $z$ é $r^2+1=0$, com $\Delta=-4&lt;0$: <strong>raízes complexas conjugadas</strong> $r=\pm i$, ou seja, $\alpha_{\text{r}}=0$ e $\beta_{\text{r}}=1$. Em $z$: $y=C_1\cos z+C_2\sin z$.</p>
              <span class="step-label">Passo 4 — voltar para $x$</span>
              <p>Basta trocar $z=\ln x$ (no caso complexo, $e^{\alpha_{\text{r}}z}=x^{\alpha_{\text{r}}}$ e $\cos\beta_{\text{r}}z=\cos(\beta_{\text{r}}\ln x)$).</p>
              <div class="final">$y=C_1\cos(\ln x)+C_2\sin(\ln x)$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$x^2y''-3xy'+4y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $\alpha$ e $\beta$</span>
              <p>$\alpha=-3$ e $\beta=4$.</p>
              <span class="step-label">Passo 2 — equação em $z$ e indicial</span>
              <p>De $r^2+(\alpha-1)r+\beta=0$:</p>
              $$r^2-4r+4=0.$$
              <p>Equivalentemente, testando $y=x^r$: $x^2\,r(r-1)x^{r-2}-3x\,rx^{r-1}+4x^r=\big[r(r-1)-3r+4\big]x^r=\big[r^2-4r+4\big]x^r$.</p>
              <span class="step-label">Passo 3 — raiz real repetida</span>
              <p>$\Delta=16-16=0$, logo $(r-2)^2=0$ e $r=2$ é <strong>raiz dupla</strong>. Em $z$ isso dá $y=C_1e^{2z}+C_2ze^{2z}$.</p>
              <span class="step-label">Passo 4 — voltar para $x$</span>
              <p>Como $e^{2z}=x^2$ e $z=\ln x$, a segunda solução vira $x^2\ln x$ — é o análogo do fator extra $x$ do caso de coeficientes constantes.</p>
              <div class="final">$y=C_1x^{2}+C_2x^{2}\ln x$</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$x^2y''+3xy'+10y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $\alpha$ e $\beta$</span>
              <p>$\alpha=3$ e $\beta=10$.</p>
              <span class="step-label">Passo 2 — equação indicial</span>
              $$r^2+(3-1)r+10=r^2+2r+10=0.$$
              <span class="step-label">Passo 3 — raízes complexas</span>
              <p>$\Delta=4-40=-36&lt;0$, portanto</p>
              $$r=\frac{-2\pm\sqrt{-36}}{2}=\frac{-2\pm6i}{2}=-1\pm3i.$$
              <p>Em $z$: $y=e^{-z}\big(C_1\cos 3z+C_2\sin 3z\big)$.</p>
              <span class="step-label">Passo 4 — voltar para $x$</span>
              <p>Com $z=\ln x$ temos $e^{-z}=x^{-1}$ e $3z=3\ln x$.</p>
              <div class="final">$y=x^{-1}\big[C_1\cos(3\ln x)+C_2\sin(3\ln x)\big]$</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$2x^2y''+10xy'+3y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — normalizar para a forma padrão</span>
              <p>Dividindo tudo por $2$: $x^2y''+5xy'+\tfrac32y=0$, logo $\alpha=5$ e $\beta=\tfrac32$.</p>
              <span class="step-label">Passo 2 — equação indicial</span>
              $$r^2+(5-1)r+\frac32=r^2+4r+\frac32=0.$$
              <span class="step-label">Passo 3 — raízes reais distintas</span>
              <p>$\Delta=16-4\cdot\tfrac32=16-6=10&gt;0$, então</p>
              $$r=\frac{-4\pm\sqrt{10}}{2}=-2\pm\frac{\sqrt{10}}{2}.$$
              <p>Em $z$: $y=C_1e^{r_1z}+C_2e^{r_2z}$ com $r_{1,2}=-2\pm\tfrac{\sqrt{10}}2$.</p>
              <span class="step-label">Passo 4 — voltar para $x$</span>
              <p>Como $e^{rz}=x^{r}$, cada exponencial vira uma potência de $x$.</p>
              <div class="final">$y=C_1x^{-2+\frac{\sqrt{10}}{2}}+C_2x^{-2-\frac{\sqrt{10}}{2}}$</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$x^2y''+2xy'-12y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — identificar $\alpha$ e $\beta$</span>
              <p>$\alpha=2$ e $\beta=-12$.</p>
              <span class="step-label">Passo 2 — equação indicial</span>
              $$r^2+(2-1)r-12=r^2+r-12=0.$$
              <span class="step-label">Passo 3 — raízes reais distintas</span>
              <p>$\Delta=1+48=49$, e $\sqrt{49}=7$:</p>
              $$r=\frac{-1\pm7}{2}\;\Longrightarrow\; r_1=3,\quad r_2=-4,$$
              <p>o que corresponde à fatoração $(r-3)(r+4)=0$. Em $z$: $y=C_1e^{3z}+C_2e^{-4z}$.</p>
              <span class="step-label">Passo 4 — voltar para $x$</span>
              <p>Usando $e^{rz}=x^r$ com $z=\ln x$.</p>
              <div class="final">$y=C_1x^{3}+C_2x^{-4}$</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t11', number: '11',
    title: 'Superposição, Coeficientes a Determinar e Variação de Parâmetros',
    subtitle: '',
    intro: String.raw`
      <p><strong>Princípio de superposição:</strong> se $y_1$ resolve $y''+Py'+Qy=R_1$ e $y_2$ resolve $y''+Py'+Qy=R_2$, então $y_1+y_2$ resolve $y''+Py'+Qy=R_1+R_2$ — permitindo tratar cada "pedaço" do lado direito separadamente.</p>
      <p><strong>Coeficientes a determinar:</strong> para $R(x)$ polinomial, exponencial, seno/cosseno (ou produtos), chute uma solução particular da mesma "família"; se ela já é solução da homogênea (<em>ressonância</em>), multiplique o chute por $x$ (ou $x^2$ se necessário) até deixar de ser.</p>
      <p><strong>Variação de parâmetros:</strong> funciona para qualquer $R(x)$, escrevendo $y_p=u_1(x)y_1+u_2(x)y_2$ com $u_1',u_2'$ determinados via o Wronskiano — mais trabalhoso, mas universal (essencial quando $R$ é algo como $\sec x$ ou $\ln x$).</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte B · Item 8',
        statement: String.raw`
          <p>Usando o princípio de superposição, resolva as equações a seguir. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$y''+3y'+2y=e^x+e^{2x}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — solução homogênea</span>
              <p>Equação característica: $r^2+3r+2=(r+1)(r+2)=0\Rightarrow r=-1,-2$. Logo $y_h=C_1e^{-x}+C_2e^{-2x}$. Nem $e^x$ (base $1$) nem $e^{2x}$ (base $2$) coincidem com as raízes $-1,-2$: <strong>nenhuma ressonância</strong>.</p>
              <span class="step-label">Passo 2 — separar por superposição</span>
              <p>Pelo princípio de superposição, resolve-se separadamente $y''+3y'+2y=e^x$ (dando $y_{p1}$) e $y''+3y'+2y=e^{2x}$ (dando $y_{p2}$), e a resposta final soma as duas.</p>
              <span class="step-label">Passo 3 — palpite e substituição para cada termo</span>
              <p>Para $e^x$: $y_{p1}=Ae^x$. Substituindo: $Ae^x+3Ae^x+2Ae^x=6Ae^x=e^x\Rightarrow A=\dfrac16$.</p>
              <p>Para $e^{2x}$: $y_{p2}=Be^{2x}$. Substituindo: $4Be^{2x}+6Be^{2x}+2Be^{2x}=12Be^{2x}=e^{2x}\Rightarrow B=\dfrac1{12}$.</p>
              <div class="final">$y=\dfrac{e^x}6+\dfrac{e^{2x}}{12}+C_1e^{-x}+C_2e^{-2x}$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$y''+y'-6y=\sin x+xe^{2x}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — solução homogênea e verificação de ressonância</span>
              <p>$r^2+r-6=(r+3)(r-2)=0\Rightarrow r=2,-3$, logo $y_h=C_1e^{2x}+C_2e^{-3x}$. O termo $\sin x$ não é ressonante (raízes reais). Já o termo $xe^{2x}$ tem base $e^{2x}$, e $r=2$ <strong>é raiz</strong> da homogênea: há ressonância, e o palpite usual $(Ax+B)e^{2x}$ deve ser multiplicado por $x$, virando $(Ax^2+Bx)e^{2x}$.</p>
              <span class="step-label">Passo 2 — substituição para o termo $\sin x$</span>
              <p>$y_{p1}=A\sin x+B\cos x$. Substituindo em $y''+y'-6y$: $\sin x(-7A-B)+\cos x(A-7B)=\sin x$, o que dá o sistema $-7A-B=1,\ A-7B=0$, cuja solução é $A=-\dfrac7{50},\ B=-\dfrac1{50}$.</p>
              <span class="step-label">Passo 3 — palpite ajustado por ressonância e substituição para $xe^{2x}$</span>
              <p>$y_{p2}=(Ax^2+Bx)e^{2x}$. Substituindo e agrupando por potências de $x$ multiplicadas por $e^{2x}$, os termos em $x^2$ se cancelam automaticamente (confirmando a ressonância) e sobra o sistema $10A=1,\ 2A+5B=0$, dando $A=\dfrac1{10},\ B=-\dfrac1{25}$.</p>
              <span class="step-label">Passo 4 — solução final</span>
              <p>Somando $y_h+y_{p1}+y_{p2}$ e agrupando a constante $C_1$ com o termo em $e^{2x}$:</p>
              <div class="final">$y=-\dfrac1{50}\cos x-\dfrac7{50}\sin x+\left(\dfrac{x^2}{10}-\dfrac x{25}+C_1\right)e^{2x}+C_2e^{-3x}$</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$y''+2y'=1+x^2+e^{-2x}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — solução homogênea e verificação de ressonância</span>
              <p>$r^2+2r=r(r+2)=0\Rightarrow r=0,-2$, logo $y_h=C_1+C_2e^{-2x}$. Como $r=0$ é raiz, o termo polinomial $1+x^2$ é ressonante (o palpite deve ganhar um fator $x$). Como $r=-2$ também é raiz, o termo $e^{-2x}$ também é ressonante.</p>
              <span class="step-label">Passo 2 — palpite ajustado e substituição para o polinômio</span>
              <p>$y_{p1}=x(Ax^2+Bx+C)=Ax^3+Bx^2+Cx$. Substituindo em $y''+2y'$: $6Ax^2+(6A+4B)x+(2B+2C)=x^2+1$, dando o sistema $6A=1,\ 6A+4B=0,\ 2B+2C=1$, cuja solução é $A=\dfrac16,\ B=-\dfrac14,\ C=\dfrac34$.</p>
              <span class="step-label">Passo 3 — palpite ajustado e substituição para o exponencial</span>
              <p>$y_{p2}=Dxe^{-2x}$. Substituindo em $y''+2y'$, os termos em $x$ se cancelam (como esperado da ressonância) e sobra $-2D=1\Rightarrow D=-\dfrac12$.</p>
              <span class="step-label">Passo 4 — solução final</span>
              <p>Somando $y_h+y_{p1}+y_{p2}$ e agrupando $C_2$ com o termo em $e^{-2x}$:</p>
              <div class="final">$y=\dfrac{x^3}6-\dfrac{x^2}4+\dfrac{3x}4+\left(C_1-\dfrac x2\right)e^{-2x}+C_2$</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$y''+y'-2y=6e^{-x}+4$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — solução homogênea e verificação de ressonância</span>
              <p>$r^2+r-2=(r+2)(r-1)=0\Rightarrow r=1,-2$, logo $y_h=C_1e^x+C_2e^{-2x}$. Nem $e^{-x}$ (base $-1$) nem a constante $4$ (base $0$) coincidem com as raízes: <strong>nenhuma ressonância</strong>.</p>
              <span class="step-label">Passo 2 — substituição para o termo constante</span>
              <p>$y_{p1}=A$. Substituindo: $-2A=4\Rightarrow A=-2$.</p>
              <span class="step-label">Passo 3 — substituição para o termo exponencial</span>
              <p>$y_{p2}=Be^{-x}$. Substituindo: $Be^{-x}-Be^{-x}-2Be^{-x}=-2Be^{-x}=6e^{-x}\Rightarrow B=-3$.</p>
              <span class="step-label">Passo 4 — solução final</span>
              <p>Somando $y_h+y_{p1}+y_{p2}$:</p>
              <div class="final">$y=-3e^{-x}-2+C_1e^x+C_2e^{-2x}$</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$y''+y=\cos x+8x^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — solução homogênea e verificação de ressonância</span>
              <p>$r^2+1=0\Rightarrow r=\pm i$, logo $y_h=C_1\cos x+C_2\sin x$. O termo $\cos x$ tem exatamente a frequência natural da homogênea: <strong>é ressonante</strong>, e o palpite deve ganhar um fator $x$. Já $8x^2$ não é ressonante ($r=0$ não é raiz).</p>
              <span class="step-label">Passo 2 — palpite ajustado e substituição para $\cos x$</span>
              <p>$y_{p1}=x(A\sin x+B\cos x)$. Calculando $y_{p1}''+y_{p1}$, os termos com fator $x$ se cancelam entre si (confirmando a ressonância) e sobra $2A\cos x-2B\sin x=\cos x$, dando $A=\dfrac12,\ B=0$.</p>
              <span class="step-label">Passo 3 — substituição para o polinômio</span>
              <p>$y_{p2}=Cx^2+Dx+E$. Substituindo em $y''+y$: $Cx^2+Dx+(2C+E)=8x^2$, dando $C=8,\ D=0,\ 2C+E=0\Rightarrow E=-16$.</p>
              <span class="step-label">Passo 4 — solução final</span>
              <p>Somando $y_h+y_{p1}+y_{p2}$ e agrupando $C_2$ com o termo em $\sin x$:</p>
              <div class="final">$y=\left(\dfrac x2+C_1\right)\sin x+C_2\cos x+8x^2-16$</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte B · Item 9', examStyle: true,
        statement: String.raw`
          <p>Resolva as equações a seguir. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$xy''-y'=3x^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — variável dependente ausente: $z=y'$</span>
              <p>Como $y$ não aparece explicitamente, a substituição $z=y'$ (logo $z'=y''$) transforma a equação na linear de 1ª ordem $xz'-z=3x^2$.</p>
              <span class="step-label">Passo 2 — resolver a linear em $z$</span>
              <p>Forma padrão: $z'-\dfrac zx=3x$. Fator integrante $\mu=e^{-\int dx/x}=\dfrac1x$: $\left(\dfrac zx\right)'=3\Rightarrow \dfrac zx=3x+C_1\Rightarrow z=3x^2+C_1x$.</p>
              <span class="step-label">Passo 3 — integrar $y'=z$</span>
              <p>$$y=\int(3x^2+C_1x)\,dx=x^3+\frac{C_1}2x^2+C_2.$$ Renomeando as constantes livres ($C_1/2\to A$, $C_2\to B$):</p>
              <div class="final">$y=A+Bx^2+x^3$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$x^2y''+xy'-y=x^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — solução homogênea (equação de Euler)</span>
              <p>Testando $y=x^r$: $r(r-1)+r-1=r^2-1=0\Rightarrow r=\pm1$. Logo $y_h=C_1x+\dfrac{C_2}x$.</p>
              <span class="step-label">Passo 2 — verificar ressonância e montar o palpite</span>
              <p>Para Euler não-homogênea, o palpite natural para o lado direito $x^2$ é $y_p=Ax^2$ (potência $x^m$ com $m=2$). Como $m=2$ não é raiz da indicial ($\pm1$), não há ressonância.</p>
              <span class="step-label">Passo 3 — substituição e sistema</span>
              <p>Com $y_p=Ax^2$: $y_p'=2Ax$, $y_p''=2A$. Substituindo: $x^2(2A)+x(2Ax)-Ax^2=(2A+2A-A)x^2=3Ax^2=x^2\Rightarrow A=\dfrac13$.</p>
              <div class="final">$y=\dfrac{x^2}3+Ax+\dfrac Bx$</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$y'''+y'=\sec x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — solução homogênea</span>
              <p>Equação característica: $r^3+r=r(r^2+1)=0\Rightarrow r=0,\pm i$. Base de soluções: $y_1=1,\ y_2=\sin x,\ y_3=\cos x$.</p>
              <span class="step-label">Passo 2 — por que variação de parâmetros</span>
              <p>$\sec x$ não é polinômio, exponencial nem seno/cosseno (nem produto desses), logo não se aplica o método de coeficientes a determinar. Variação de parâmetros funciona para qualquer lado direito contínuo.</p>
              <span class="step-label">Passo 3 — sistema de variação de parâmetros e Wronskiano</span>
              <p>Com $y_p=u_1+u_2\sin x+u_3\cos x$, o sistema padrão de 3ª ordem é $u_1'y_1+u_2'y_2+u_3'y_3=0$, $u_1'y_1'+u_2'y_2'+u_3'y_3'=0$, $u_1'y_1''+u_2'y_2''+u_3'y_3''=\sec x$. O Wronskiano de $\{1,\sin x,\cos x\}$ é constante: $W=-1$.</p>
              <span class="step-label">Passo 4 — resolver o sistema (Cramer) e integrar</span>
              <p>Isolando cada $u_i'$ via Cramer obtém-se $u_1'=\sec x,\ u_2'=-\tan x,\ u_3'=-1$. Integrando ($\int\sec x\,dx=\ln|\sec x+\tan x|$, $\int\tan x\,dx=-\ln|\cos x|$):</p>
              <p>$$u_1=\ln|\sec x+\tan x|,\qquad u_2=\ln|\cos x|,\qquad u_3=-x.$$</p>
              <div class="final">$y=A+B\sin x+C\cos x+\ln|\sec x+\tan x|+\sin x\,\ln|\cos x|-x\cos x$</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte B · Item 10',
        statement: String.raw`
          <p>Determine a solução geral das equações abaixo. Em cada caso resolvemos primeiro a homogênea associada (equação característica), depois escolhemos o palpite do método dos coeficientes a determinar de acordo com a forma do termo forçante — multiplicando por $x^s$ quando houver ressonância com a homogênea — e, quando esse método não se aplica, usamos variação de parâmetros. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$y''+2y'+y=e^{-x}\ln x$ (para $x&gt;0$)`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              <p>A equação característica é</p>
              $$r^2+2r+1=(r+1)^2=0\quad\Longrightarrow\quad r=-1\ \text{(raiz dupla)}.$$
              <p>Logo $y_h=C_1e^{-x}+C_2xe^{-x}$, com base $y_1=e^{-x}$, $y_2=xe^{-x}$.</p>
              <span class="step-label">Passo 2 — por que coeficientes a determinar não serve aqui</span>
              <p>O termo forçante $e^{-x}\ln x$ contém $\ln x$, cuja família de derivadas ($\tfrac1x,-\tfrac1{x^2},\dots$) é infinita: não existe palpite com um número finito de coeficientes. Usamos <strong>variação de parâmetros</strong>: procuramos $y_p=u_1y_1+u_2y_2$ com $u_1'y_1+u_2'y_2=0$ e $u_1'y_1'+u_2'y_2'=g$, onde $g(x)=e^{-x}\ln x$ (a equação já está na forma normalizada, coeficiente $1$ em $y''$).</p>
              <span class="step-label">Passo 3 — Wronskiano</span>
              $$W=\begin{vmatrix} e^{-x} & xe^{-x}\\ -e^{-x} & (1-x)e^{-x}\end{vmatrix}=e^{-x}(1-x)e^{-x}+e^{-x}\cdot xe^{-x}=e^{-2x}\ne0.$$
              <span class="step-label">Passo 4 — integrar $u_1'$ e $u_2'$</span>
              $$u_1'=-\frac{y_2g}{W}=-\frac{xe^{-x}\cdot e^{-x}\ln x}{e^{-2x}}=-x\ln x,\qquad u_2'=\frac{y_1g}{W}=\frac{e^{-x}\cdot e^{-x}\ln x}{e^{-2x}}=\ln x.$$
              <p>Por partes, $\int x\ln x\,dx=\dfrac{x^2}2\ln x-\dfrac{x^2}4$ e $\int\ln x\,dx=x\ln x-x$. Portanto</p>
              $$u_1=-\frac{x^2}2\ln x+\frac{x^2}4,\qquad u_2=x\ln x-x.$$
              <span class="step-label">Passo 5 — montar a solução particular</span>
              $$y_p=e^{-x}\left(-\frac{x^2}2\ln x+\frac{x^2}4\right)+xe^{-x}\left(x\ln x-x\right)=e^{-x}\left(\frac{x^2}2\ln x-\frac{3x^2}4\right).$$
              <div class="final">$y=\dfrac{x^2}2e^{-x}\ln x-\dfrac{3x^2}4e^{-x}+C_1e^{-x}+C_2xe^{-x}$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$y''-2y'-3y=64xe^{-x}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2-2r-3=(r-3)(r+1)=0\quad\Longrightarrow\quad r_1=3,\ r_2=-1,$$
              <p>de modo que $y_h=C_1e^{3x}+C_2e^{-x}$.</p>
              <span class="step-label">Passo 2 — palpite com ressonância</span>
              <p>O forçante é $(\text{polinômio de grau }1)\cdot e^{-x}$. Como $r=-1$ é raiz <em>simples</em> da característica, há ressonância de ordem $s=1$: multiplicamos o palpite natural $(Ax+B)e^{-x}$ por $x$:</p>
              $$y_p=(Ax^2+Bx)e^{-x}.$$
              <span class="step-label">Passo 3 — substituir</span>
              <p>Escrevendo $y=u e^{-x}$ com $u=Ax^2+Bx$, temos $y'=(u'-u)e^{-x}$ e $y''=(u''-2u'+u)e^{-x}$, logo</p>
              $$y''-2y'-3y=\big[(u''-2u'+u)-2(u'-u)-3u\big]e^{-x}=(u''-4u')e^{-x}.$$
              <p>Com $u'=2Ax+B$ e $u''=2A$:</p>
              $$2A-4(2Ax+B)=-8Ax+(2A-4B)=64x.$$
              <p>Comparando coeficientes: $-8A=64\Rightarrow A=-8$; e $2A-4B=0\Rightarrow-16=4B\Rightarrow B=-4$.</p>
              <span class="step-label">Passo 4 — solução geral</span>
              <p>$y_p=(-8x^2-4x)e^{-x}=-e^{-x}(8x^2+4x)$.</p>
              <div class="final">$y=-e^{-x}(8x^2+4x)+C_1e^{-x}+C_2e^{3x}$</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$y''+2y'+5y=e^{-x}\sec2x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2+2r+5=0\quad\Longrightarrow\quad r=\frac{-2\pm\sqrt{4-20}}2=-1\pm2i.$$
              <p>Base real: $y_1=e^{-x}\cos2x$, $y_2=e^{-x}\sin2x$.</p>
              <span class="step-label">Passo 2 — método adequado</span>
              <p>$\sec2x=1/\cos2x$ não é polinômio, exponencial nem seno/cosseno puro: coeficientes a determinar não se aplica. Usamos variação de parâmetros com $g(x)=e^{-x}\sec2x$.</p>
              <span class="step-label">Passo 3 — Wronskiano</span>
              <p>Para $y_1=e^{ax}\cos bx$ e $y_2=e^{ax}\sin bx$ vale $W=b\,e^{2ax}$; aqui $a=-1$, $b=2$:</p>
              $$W=2e^{-2x}.$$
              <span class="step-label">Passo 4 — integrar</span>
              $$u_1'=-\frac{y_2g}{W}=-\frac{e^{-x}\sin2x\cdot e^{-x}\sec2x}{2e^{-2x}}=-\frac12\tan2x \quad\Longrightarrow\quad u_1=\frac14\ln|\cos2x|,$$
              $$u_2'=\frac{y_1g}{W}=\frac{e^{-x}\cos2x\cdot e^{-x}\sec2x}{2e^{-2x}}=\frac12 \quad\Longrightarrow\quad u_2=\frac x2.$$
              <span class="step-label">Passo 5 — montar $y_p$</span>
              $$y_p=\frac14e^{-x}\cos2x\,\ln|\cos2x|+\frac x2e^{-x}\sin2x.$$
              <div class="final">$y=\dfrac12xe^{-x}\sin2x+\dfrac14e^{-x}\cos2x\,\ln|\cos2x|+C_1e^{-x}\cos2x+C_2e^{-x}\sin2x$</div>
            `
          },
          {
            label: '4',
            statement: String.raw`$y''-2y'=12x-10$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2-2r=r(r-2)=0\quad\Longrightarrow\quad r_1=0,\ r_2=2,\qquad y_h=C_1+C_2e^{2x}.$$
              <span class="step-label">Passo 2 — palpite com ressonância</span>
              <p>O forçante é polinômio de grau $1$, ou seja, do tipo $P(x)e^{0\cdot x}$. Como $r=0$ é raiz simples, há ressonância ($s=1$) e o palpite $Ax+B$ deve ser multiplicado por $x$:</p>
              $$y_p=Ax^2+Bx.$$
              <span class="step-label">Passo 3 — substituir e resolver</span>
              <p>$y_p'=2Ax+B$, $y_p''=2A$, logo</p>
              $$y_p''-2y_p'=2A-2(2Ax+B)=-4Ax+(2A-2B)=12x-10.$$
              <p>Daí $-4A=12\Rightarrow A=-3$; e $2(-3)-2B=-10\Rightarrow-2B=-4\Rightarrow B=2$.</p>
              <span class="step-label">Passo 4 — solução geral</span>
              <div class="final">$y=-3x^2+2x+C_1+C_2e^{2x}$</div>
            `
          },
          {
            label: '5',
            statement: String.raw`$y''+y=2\cos x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2+1=0\quad\Longrightarrow\quad r=\pm i,\qquad y_h=C_1\cos x+C_2\sin x.$$
              <span class="step-label">Passo 2 — detectar a ressonância</span>
              <p>O forçante $2\cos x$ corresponde a $r=\pm i$, que <em>são</em> raízes da característica. Logo o palpite $A\cos x+B\sin x$ resolveria a homogênea; multiplicamos por $x$:</p>
              $$y_p=Ax\cos x+Bx\sin x.$$
              <span class="step-label">Passo 3 — substituir</span>
              <p>Derivando duas vezes:</p>
              $$y_p''=-2A\sin x-Ax\cos x+2B\cos x-Bx\sin x,$$
              $$y_p''+y_p=-2A\sin x+2B\cos x=2\cos x.$$
              <p>Comparando: $-2A=0\Rightarrow A=0$ e $2B=2\Rightarrow B=1$. Portanto $y_p=x\sin x$.</p>
              <span class="step-label">Passo 4 — solução geral</span>
              <p>Note a amplitude crescente $x\sin x$: é a assinatura da ressonância pura (oscilador sem atrito forçado na frequência natural).</p>
              <div class="final">$y=x\sin x+C_1\sin x+C_2\cos x$</div>
            `
          },
          {
            label: '6',
            statement: String.raw`$(x^2-1)y''-2xy'+2y=(x^2-1)^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação de coeficientes variáveis: achar a base da homogênea</span>
              <p>Não há equação característica aqui. Testando $y=x$: $y''=0$, $y'=1$, e $-2x\cdot1+2x=0$. Logo $y_1=x$ é solução da homogênea.</p>
              <span class="step-label">Passo 2 — redução de ordem para $y_2$</span>
              <p>Na forma normalizada, $y''-\dfrac{2x}{x^2-1}y'+\dfrac2{x^2-1}y=x^2-1$, isto é $p(x)=-\dfrac{2x}{x^2-1}$ e $\int p\,dx=-\ln|x^2-1|$. A fórmula de d'Alembert dá</p>
              $$y_2=y_1\int\frac{e^{-\int p\,dx}}{y_1^2}dx=x\int\frac{x^2-1}{x^2}dx=x\int\left(1-\frac1{x^2}\right)dx=x\left(x+\frac1x\right)=x^2+1.$$
              <p>Confere: $y=x^2+1$ dá $(x^2-1)(2)-2x(2x)+2(x^2+1)=0$. Assim $y_h=C_1x+C_2(x^2+1)$.</p>
              <span class="step-label">Passo 3 — variação de parâmetros</span>
              <p>Wronskiano: $W=x\cdot2x-1\cdot(x^2+1)=x^2-1$. Com $g(x)=x^2-1$ (lado direito da forma normalizada):</p>
              $$u_1'=-\frac{y_2g}{W}=-\frac{(x^2+1)(x^2-1)}{x^2-1}=-(x^2+1)\ \Longrightarrow\ u_1=-\frac{x^3}3-x,$$
              $$u_2'=\frac{y_1g}{W}=\frac{x(x^2-1)}{x^2-1}=x\ \Longrightarrow\ u_2=\frac{x^2}2.$$
              <span class="step-label">Passo 4 — montar $y_p$ e concluir</span>
              $$y_p=x\left(-\frac{x^3}3-x\right)+(x^2+1)\frac{x^2}2=-\frac{x^4}3-x^2+\frac{x^4}2+\frac{x^2}2=\frac{x^4}6-\frac{x^2}2.$$
              <div class="final">$y=C_1x+C_2(x^2+1)+\dfrac{x^4}6-\dfrac{x^2}2$</div>
            `
          },
          {
            label: '7',
            statement: String.raw`$(x^2+x)y''+(2-x^2)y'-(2+x)y=x(x+1)^2$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — primeira solução da homogênea</span>
              <p>Coeficientes variáveis novamente. Testando $y=e^x$ (todos os termos ficam proporcionais a $e^x$):</p>
              $$(x^2+x)e^x+(2-x^2)e^x-(2+x)e^x=e^x\big(x^2+x+2-x^2-2-x\big)=0,$$
              <p>logo $y_1=e^x$ é solução.</p>
              <span class="step-label">Passo 2 — redução de ordem para $y_2$</span>
              <p>Normalizando (dividindo por $x(x+1)$), $p(x)=\dfrac{2-x^2}{x^2+x}=-1+\dfrac2x-\dfrac1{x+1}$, portanto $\int p\,dx=-x+2\ln|x|-\ln|x+1|$ e $e^{-\int p\,dx}=\dfrac{e^{x}(x+1)}{x^{2}}$. Então</p>
              $$y_2=e^x\int\frac{e^x(x+1)/x^2}{e^{2x}}dx=e^x\int e^{-x}\frac{x+1}{x^2}dx.$$
              <p>Como $\dfrac{d}{dx}\left(-\dfrac{e^{-x}}x\right)=e^{-x}\left(\dfrac1x+\dfrac1{x^2}\right)=e^{-x}\dfrac{x+1}{x^2}$, a integral vale $-\dfrac{e^{-x}}x$ e</p>
              $$y_2=e^x\cdot\left(-\frac{e^{-x}}x\right)=-\frac1x\ \sim\ \frac1x.$$
              <span class="step-label">Passo 3 — Wronskiano e variação de parâmetros</span>
              <p>Com $y_1=e^x$, $y_2=x^{-1}$:</p>
              $$W=e^x\left(-\frac1{x^2}\right)-e^x\cdot\frac1x=-\frac{e^x(x+1)}{x^2}.$$
              <p>O lado direito normalizado é $g(x)=\dfrac{x(x+1)^2}{x(x+1)}=x+1$. Assim</p>
              $$u_1'=-\frac{y_2g}{W}=-\frac{(1/x)(x+1)}{-e^x(x+1)/x^2}=xe^{-x}\ \Longrightarrow\ u_1=-(x+1)e^{-x},$$
              $$u_2'=\frac{y_1g}{W}=\frac{e^x(x+1)}{-e^x(x+1)/x^2}=-x^2\ \Longrightarrow\ u_2=-\frac{x^3}3.$$
              <span class="step-label">Passo 4 — montar $y_p$</span>
              $$y_p=-(x+1)e^{-x}\cdot e^x-\frac{x^3}3\cdot\frac1x=-(x+1)-\frac{x^2}3=-1-x-\frac{x^2}3.$$
              <div class="final">$y=C_1e^x+C_2x^{-1}-1-x-\dfrac{x^2}3$</div>
            `
          },
          {
            label: '8',
            statement: String.raw`$y''+4y=3\sin x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2+4=0\quad\Longrightarrow\quad r=\pm2i,\qquad y_h=C_1\cos2x+C_2\sin2x.$$
              <span class="step-label">Passo 2 — palpite (sem ressonância)</span>
              <p>O forçante tem frequência $1$, enquanto a frequência natural é $2$; como $\pm i$ não são raízes, <em>não</em> há ressonância e basta</p>
              $$y_p=A\cos x+B\sin x.$$
              <span class="step-label">Passo 3 — substituir e resolver</span>
              <p>$y_p''=-A\cos x-B\sin x$, então</p>
              $$y_p''+4y_p=3A\cos x+3B\sin x=3\sin x\ \Longrightarrow\ A=0,\ B=1.$$
              <span class="step-label">Passo 4 — solução geral</span>
              <div class="final">$y=C_1\cos2x+C_2\sin2x+\sin x$</div>
            `
          },
          {
            label: '9',
            statement: String.raw`$y''+10y'+25y=14e^{-5x}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2+10r+25=(r+5)^2=0\quad\Longrightarrow\quad r=-5\ \text{(dupla)},\qquad y_h=(C_1+C_2x)e^{-5x}.$$
              <span class="step-label">Passo 2 — ressonância de ordem 2</span>
              <p>O forçante $14e^{-5x}$ usa exatamente $r=-5$, que é raiz <strong>dupla</strong>. Logo $s=2$ e o palpite $Ae^{-5x}$ vira</p>
              $$y_p=Ax^2e^{-5x}.$$
              <span class="step-label">Passo 3 — substituir</span>
              <p>A equação é $(D+5)^2y=14e^{-5x}$. Com $y=v(x)e^{-5x}$ vale a identidade $(D+5)^2\big[v e^{-5x}\big]=v''e^{-5x}$. Para $v=Ax^2$, $v''=2A$, então</p>
              $$2Ae^{-5x}=14e^{-5x}\ \Longrightarrow\ A=7.$$
              <span class="step-label">Passo 4 — solução geral</span>
              <div class="final">$y=e^{-5x}(7x^2+C_1x+C_2)$</div>
            `
          },
          {
            label: '10',
            statement: String.raw`$y''-4y=x^2e^{2x}$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2-4=0\quad\Longrightarrow\quad r=\pm2,\qquad y_h=C_1e^{2x}+C_2e^{-2x}.$$
              <span class="step-label">Passo 2 — palpite com ressonância simples</span>
              <p>Forçante $=$ (polinômio de grau $2$) $\times\,e^{2x}$, e $r=2$ é raiz simples: multiplica-se por $x^1$.</p>
              $$y_p=(ax^3+bx^2+cx)e^{2x}.$$
              <span class="step-label">Passo 3 — substituir e resolver o sistema</span>
              <p>Com $y=ue^{2x}$ temos $y''=(u''+4u'+4u)e^{2x}$, logo $y''-4y=(u''+4u')e^{2x}$. Para $u=ax^3+bx^2+cx$:</p>
              $$u'=3ax^2+2bx+c,\qquad u''=6ax+2b,$$
              $$u''+4u'=12ax^2+(6a+8b)x+(2b+4c)=x^2.$$
              <p>Daí $12a=1\Rightarrow a=\tfrac1{12}$; $6a+8b=0\Rightarrow\tfrac12+8b=0\Rightarrow b=-\tfrac1{16}$; $2b+4c=0\Rightarrow-\tfrac18+4c=0\Rightarrow c=\tfrac1{32}$.</p>
              <span class="step-label">Passo 4 — solução geral</span>
              <div class="final">$y=e^{2x}\left(\dfrac{x^3}{12}-\dfrac{x^2}{16}+\dfrac x{32}+C_1\right)+C_2e^{-2x}$</div>
            `
          },
          {
            label: '11',
            statement: String.raw`$y''+y'-2y=8\sin x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2+r-2=(r-1)(r+2)=0\quad\Longrightarrow\quad r_1=1,\ r_2=-2,\qquad y_h=C_1e^x+C_2e^{-2x}.$$
              <span class="step-label">Passo 2 — palpite</span>
              <p>Como $\pm i$ não são raízes, não há ressonância. Mesmo com apenas $\sin x$ no lado direito, é preciso incluir o cosseno (a derivada primeira mistura os dois):</p>
              $$y_p=A\cos x+B\sin x.$$
              <span class="step-label">Passo 3 — substituir e resolver o sistema</span>
              <p>$y_p'=-A\sin x+B\cos x$ e $y_p''=-A\cos x-B\sin x$, logo</p>
              $$y_p''+y_p'-2y_p=(-3A+B)\cos x+(-A-3B)\sin x=8\sin x.$$
              <p>Sistema: $-3A+B=0$ e $-A-3B=8$. Da primeira, $B=3A$; substituindo, $-A-9A=8\Rightarrow A=-\tfrac45$ e $B=-\tfrac{12}5$.</p>
              <span class="step-label">Passo 4 — solução geral</span>
              <p>$y_p=-\tfrac45\cos x-\tfrac{12}5\sin x=-\tfrac45(\cos x+3\sin x)$.</p>
              <div class="final">$y=C_1e^x+C_2e^{-2x}-\dfrac45(3\sin x+\cos x)$</div>
            `
          },
          {
            label: '12',
            statement: String.raw`$y''-3y'=x+\cos x$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2-3r=r(r-3)=0\quad\Longrightarrow\quad r_1=0,\ r_2=3,\qquad y_h=C_1+C_2e^{3x}.$$
              <span class="step-label">Passo 2 — separar o forçante (superposição)</span>
              <p>Resolvemos $y''-3y'=x$ e $y''-3y'=\cos x$ separadamente e somamos.</p>
              <p><strong>Parte polinomial:</strong> $r=0$ é raiz simples, então há ressonância e o palpite $Ax+B$ vira $y_{p1}=Ax^2+Bx$. Substituindo:</p>
              $$2A-3(2Ax+B)=-6Ax+(2A-3B)=x\ \Longrightarrow\ A=-\tfrac16,\quad 2\left(-\tfrac16\right)-3B=0\Rightarrow B=-\tfrac19.$$
              <span class="step-label">Passo 3 — parte trigonométrica</span>
              <p>Sem ressonância ($\pm i$ não são raízes): $y_{p2}=C\cos x+D\sin x$. Então</p>
              $$y_{p2}''-3y_{p2}'=(-C-3D)\cos x+(3C-D)\sin x=\cos x.$$
              <p>Sistema: $-C-3D=1$ e $3C-D=0\Rightarrow D=3C$; daí $-C-9C=1\Rightarrow C=-\tfrac1{10}$ e $D=-\tfrac3{10}$.</p>
              <span class="step-label">Passo 4 — solução geral</span>
              <div class="final">$y=C_1+C_2e^{3x}-\dfrac1{10}(\cos x+3\sin x)-\dfrac{x^2}6-\dfrac x9$</div>
            `
          },
          {
            label: '13',
            statement: String.raw`$\dfrac{d^4y}{dx^4}-2\dfrac{d^3y}{dx^3}+\dfrac{d^2y}{dx^2}=x^3$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^4-2r^3+r^2=r^2(r-1)^2=0\quad\Longrightarrow\quad r=0\ \text{(dupla)},\ r=1\ \text{(dupla)},$$
              $$y_h=C_1+C_2x+(C_3+C_4x)e^x.$$
              <span class="step-label">Passo 2 — reduzir a ordem com $u=y''$</span>
              <p>Como só aparecem derivadas de ordem $\ge2$, ponha $u=y''$. A equação vira $u''-2u'+u=x^3$, cuja homogênea tem $r=1$ dupla — logo <em>não</em> há ressonância com o polinômio e o palpite é completo de grau $3$:</p>
              $$u_p=ax^3+bx^2+cx+d.$$
              <span class="step-label">Passo 3 — resolver o sistema de coeficientes</span>
              $$u_p''-2u_p'+u_p=ax^3+(b-6a)x^2+(6a-4b+c)x+(2b-2c+d)=x^3.$$
              <p>Logo $a=1$; $b-6=0\Rightarrow b=6$; $6-24+c=0\Rightarrow c=18$; $12-36+d=0\Rightarrow d=24$. Assim $u_p=x^3+6x^2+18x+24$.</p>
              <span class="step-label">Passo 4 — integrar duas vezes</span>
              $$\int u_p\,dx=\frac{x^4}4+2x^3+9x^2+24x,\qquad y_p=\iint u_p=\frac{x^5}{20}+\frac{x^4}2+3x^3+12x^2$$
              <p>(as constantes de integração já estão contempladas em $C_1+C_2x$).</p>
              <p><em>Observação: a tabela de gabarito registra $12x^2+3x^3+\tfrac1{20}x^4$, mas a integração dupla de $u_p$ (e a substituição direta) mostram que o termo de grau $5$ é $\tfrac{x^5}{20}$ e o de grau $4$ é $\tfrac{x^4}2$ — provável troca de expoente no gabarito.</em></p>
              <div class="final">$y=\dfrac{x^5}{20}+\dfrac{x^4}2+3x^3+12x^2+C_1+C_2x+(C_3+C_4x)e^x$</div>
            `
          },
          {
            label: '14',
            statement: String.raw`$y'''-y=x^3-1$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^3-1=(r-1)(r^2+r+1)=0\quad\Longrightarrow\quad r=1,\quad r=-\frac12\pm\frac{\sqrt3}2i.$$
              $$y_h=C_1e^x+e^{-x/2}\left(C_2\cos\tfrac{\sqrt3}2x+C_3\sin\tfrac{\sqrt3}2x\right).$$
              <span class="step-label">Passo 2 — palpite polinomial (sem ressonância)</span>
              <p>Como $r=0$ <em>não</em> é raiz (o termo constante do polinômio característico é $-1\ne0$), não há ressonância e basta um polinômio de grau $3$:</p>
              $$y_p=ax^3+bx^2+cx+d.$$
              <span class="step-label">Passo 3 — substituir e resolver</span>
              <p>$y_p'''=6a$, logo</p>
              $$6a-(ax^3+bx^2+cx+d)=-ax^3-bx^2-cx+(6a-d)=x^3-1.$$
              <p>Comparando: $-a=1\Rightarrow a=-1$; $b=0$; $c=0$; $6a-d=-1\Rightarrow-6-d=-1\Rightarrow d=-5$.</p>
              <span class="step-label">Passo 4 — solução geral</span>
              <div class="final">$y=C_1e^x+e^{-x/2}\big(C_2\cos\tfrac{\sqrt3}2x+C_3\sin\tfrac{\sqrt3}2x\big)-x^3-5$</div>
            `
          },
          {
            label: '15',
            statement: String.raw`$y''-2y=2e^x(\cos x-\sin x)$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — homogênea associada</span>
              $$r^2-2=0\quad\Longrightarrow\quad r=\pm\sqrt2,\qquad y_h=C_1e^{x\sqrt2}+C_2e^{-x\sqrt2}.$$
              <span class="step-label">Passo 2 — palpite</span>
              <p>O forçante é do tipo $e^{\alpha x}(\,\cdot\cos\beta x+\cdot\sin\beta x)$ com $\alpha=1$, $\beta=1$, ou seja associado a $r=1\pm i$. Esses números não são raízes de $r^2-2$, então não há ressonância:</p>
              $$y_p=e^x(A\cos x+B\sin x).$$
              <span class="step-label">Passo 3 — substituir e resolver o sistema</span>
              <p>Derivando, $y_p'=e^x\big[(A+B)\cos x+(B-A)\sin x\big]$ e</p>
              $$y_p''=e^x\big[2B\cos x-2A\sin x\big].$$
              <p>Logo</p>
              $$y_p''-2y_p=e^x\big[(2B-2A)\cos x+(-2A-2B)\sin x\big]=2e^x(\cos x-\sin x).$$
              <p>Sistema: $2B-2A=2$ e $-2A-2B=-2$, isto é $B-A=1$ e $A+B=1$. Somando, $2B=2\Rightarrow B=1$ e $A=0$.</p>
              <span class="step-label">Passo 4 — solução geral</span>
              <div class="final">$y=C_1e^{x\sqrt2}+C_2e^{-x\sqrt2}+e^x\sin x$</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t12', number: '12',
    title: 'Aplicações — Sistema Massa-Mola',
    subtitle: '',
    intro: String.raw`
      <p>A equação $x''+2\mu x'+\alpha^2x=\beta\sin(\omega t)$ modela um sistema massa-mola com atrito ($\mu$) sujeito a uma força externa periódica. É o protótipo de <strong>oscilador harmônico amortecido e forçado</strong>, presente em circuitos RLC, suspensões de veículos, e vibrações estruturais.</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte B · Item 11', examStyle: true,
        statement: String.raw`
          <p>Discuta o comportamento das soluções e sua interpretação física. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`Mola homogênea: $x''+2\mu x'+\alpha^2x=0$ ($\mu\ge0$).`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação característica e os três regimes</span>
              <p>Testando $x=e^{rt}$: $r^2+2\mu r+\alpha^2=0\Rightarrow r=-\mu\pm\sqrt{\mu^2-\alpha^2}$. O sinal de $\mu^2-\alpha^2$ separa três regimes de amortecimento.</p>
              <span class="step-label">Passo 2 — sub-amortecido ($0\le\mu&lt;\alpha$)</span>
              <p>$\mu^2-\alpha^2&lt;0\Rightarrow r=-\mu\pm i\omega_d$ com $\omega_d=\sqrt{\alpha^2-\mu^2}$. Logo $x=e^{-\mu t}\big[C_1\cos\omega_dt+C_2\sin\omega_dt\big]$: oscilação com amplitude decaindo exponencialmente (ou constante, se $\mu=0$, o caso ideal sem atrito).</p>
              <span class="step-label">Passo 3 — criticamente amortecido ($\mu=\alpha$)</span>
              <p>$\mu^2-\alpha^2=0\Rightarrow r=-\mu$ (raiz dupla). Logo $x=(C_1+C_2t)e^{-\mu t}$: retorno ao equilíbrio o mais rápido possível, <em>sem</em> oscilar.</p>
              <span class="step-label">Passo 4 — super-amortecido ($\mu&gt;\alpha$)</span>
              <p>$\mu^2-\alpha^2&gt;0\Rightarrow$ duas raízes reais distintas e negativas $r_1,r_2$. Logo $x=C_1e^{r_1t}+C_2e^{r_2t}$: decaimento lento, sem oscilação.</p>
              <div class="final">Fisicamente, $\mu$ mede o atrito relativo à rigidez da mola ($\alpha$): pouco atrito oscila e decai devagar; atrito crítico amortece o mais rápido sem oscilar; muito atrito ("melado") volta devagar e sem balançar.</div>
            `
          },
          {
            label: '2',
            statement: String.raw`Mola com segundo membro periódico, sem atrito: $x''+\alpha^2x=\beta\sin(\omega t)$.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — solução homogênea</span>
              <p>$r^2+\alpha^2=0\Rightarrow r=\pm i\alpha$: $x_h=C_1\cos\alpha t+C_2\sin\alpha t$, oscilação natural de frequência $\alpha$.</p>
              <span class="step-label">Passo 2 — caso não ressonante ($\omega\ne\alpha$)</span>
              <p>Palpite $x_p=A\sin\omega t$ (sem cosseno, pois não há termo $x'$). Substituindo: $-A\omega^2+\alpha^2A=\beta\Rightarrow A=\dfrac\beta{\alpha^2-\omega^2}$. Assim $x_p=\dfrac\beta{\alpha^2-\omega^2}\sin\omega t$ — oscilação limitada, soma de duas frequências (fenômeno de <em>batimento</em> quando $\omega\approx\alpha$, pois o denominador fica pequeno).</p>
              <span class="step-label">Passo 3 — caso ressonante ($\omega=\alpha$)</span>
              <p>Como $\sin\alpha t$ já resolve a homogênea, o palpite precisa do fator $t$: $x_p=t(A\cos\alpha t+B\sin\alpha t)$. Substituindo, os termos com $t$ multiplicando se cancelam entre si (confirmando a ressonância) e sobra $-2A\alpha\sin\alpha t+2B\alpha\cos\alpha t=\beta\sin\alpha t$, dando $A=-\dfrac\beta{2\alpha},\ B=0$. Logo $x_p=-\dfrac\beta{2\alpha}t\cos\alpha t$.</p>
              <div class="final">Se $\omega\ne\alpha$, a resposta é limitada (com batimento perto da ressonância). Se $\omega=\alpha$, $x_p=-\dfrac\beta{2\alpha}t\cos\alpha t$ e <strong>a amplitude cresce sem limite</strong> quando $t\to\infty$: forçar um sistema sem atrito exatamente na sua frequência natural bombeia energia indefinidamente — a "catástrofe de ressonância" do modelo idealizado sem dissipação.</div>
            `
          },
          {
            label: '3',
            statement: String.raw`Mola com segundo membro periódico, com atrito: $x''+2\mu x'+\alpha^2x=\beta\sin(\omega t)$ ($\mu\ge0$).`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — o transiente sempre desaparece</span>
              <p>Se $\mu&gt;0$, a parte homogênea (item 1) tem sempre raízes com parte real negativa, logo $x_h\to0$ quando $t\to\infty$: sobra apenas a <strong>solução estacionária</strong> $x_p$ no longo prazo.</p>
              <span class="step-label">Passo 2 — palpite estacionário e substituição</span>
              <p>Com $x_p=A\sin\omega t+B\cos\omega t$, substituindo em $x''+2\mu x'+\alpha^2x$ e agrupando $\sin\omega t,\cos\omega t$ obtém-se o sistema
              $$A(\alpha^2-\omega^2)-2\mu B\omega=\beta,\qquad B(\alpha^2-\omega^2)+2\mu A\omega=0.$$
              Resolvendo (eliminando $B$ na primeira equação): $A=\dfrac{\beta(\alpha^2-\omega^2)}{(\alpha^2-\omega^2)^2+4\mu^2\omega^2}$, $B=\dfrac{-2\mu\omega\beta}{(\alpha^2-\omega^2)^2+4\mu^2\omega^2}$.</p>
              <span class="step-label">Passo 3 — amplitude e fase (forma $A\sin(\omega t-\delta)$)</span>
              <p>Escrevendo $x_p=A\sin\omega t+B\cos\omega t=R\sin(\omega t-\delta)$ e calculando $R=\sqrt{A^2+B^2}$ e $\tan\delta=-B/A$, chega-se a
              $$R=\frac\beta{\sqrt{(\alpha^2-\omega^2)^2+4\mu^2\omega^2}},\qquad \tan\delta=\frac{2\mu\omega}{\alpha^2-\omega^2}.$$</p>
              <div class="final">Diferente do item 2, a amplitude $R$ permanece <strong>finita</strong> mesmo perto da ressonância ($\omega\approx\alpha$), graças ao atrito que dissipa a energia bombeada pela força externa — o comportamento realista de uma suspensão de carro respondendo a solavancos periódicos da estrada.</div>
            `
          }
        ]
      },
    ]
  },

  // ---------------------------------------------------------------
  {
    id: 'p3-t13', number: '13',
    title: 'Séries de Potências e Equação de Bessel',
    subtitle: '',
    intro: String.raw`
      <p>Perto de um <strong>ponto ordinário</strong> $x_0$ (onde os coeficientes da EDO são analíticos), buscamos solução em série $y=\sum a_kx^k$: substituindo na equação, reindexando as somas para a mesma potência de $x$, obtemos uma <strong>relação de recorrência</strong> entre os coeficientes — tipicamente ligando $a_{k+2}$ a $a_k$ (ou $a_{k-4}$, dependendo da equação), gerando duas famílias de soluções (a partir de $a_0$ e $a_1$ livres).</p>
      <p>A <strong>equação de Bessel</strong> $x^2y''+xy'+(x^2-p^2)y=0$ tem $x=0$ como ponto singular regular; para $p$ inteiro, o método de Frobenius frequentemente produz uma segunda solução com um termo logarítmico $y_1\ln x+\cdots$ (devido à raiz repetida ou de diferença inteira na equação indicial).</p>
    `,
    exercises: [
      {
        ref: 'Lista 3 · Parte B · Item 12',
        statement: String.raw`
          <p>Ache a solução geral da equação diferencial dada, em série de potências centradas em $0$. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`$y''-xy'-y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituir a série e achar a recorrência</span>
              <p>Com $y=\sum_{k=0}^\infty a_kx^k$: $y''=\sum_{k=0}^\infty(k+2)(k+1)a_{k+2}x^k$, $xy'=\sum_{k=0}^\infty ka_kx^k$. Substituindo em $y''-xy'-y=0$ e igualando o coeficiente de $x^k$ a zero:
              $$(k+2)(k+1)a_{k+2}-ka_k-a_k=0\;\Longrightarrow\;a_{k+2}=\frac{a_k}{k+2}.$$</p>
              <span class="step-label">Passo 2 — série par ($a_0$ livre)</span>
              <p>$a_2=\dfrac{a_0}2,\ a_4=\dfrac{a_2}4=\dfrac{a_0}{2\cdot4},\ a_6=\dfrac{a_0}{2\cdot4\cdot6},\dots$, ou seja $a_{2n}=\dfrac{a_0}{2\cdot4\cdots2n}=\dfrac{a_0}{2^nn!}$.</p>
              <span class="step-label">Passo 3 — série ímpar ($a_1$ livre)</span>
              <p>$a_{2n+1}=\dfrac{a_1}{3\cdot5\cdots(2n+1)}$. Multiplicando e dividindo pelos fatores pares $2,4,\dots,2n$: como $(2n+1)!=\big[2\cdot4\cdots2n\big]\cdot\big[1\cdot3\cdots(2n+1)\big]=2^nn!\cdot\big[1\cdot3\cdots(2n+1)\big]$, segue $1\cdot3\cdots(2n+1)=\dfrac{(2n+1)!}{2^nn!}$, logo $a_{2n+1}=\dfrac{a_1\,2^nn!}{(2n+1)!}$.</p>
              <div class="final">$y=C_0\displaystyle\sum_{n=0}^\infty\frac{x^{2n}}{2^nn!}+C_1\sum_{n=0}^\infty\frac{n!\,2^n}{(2n+1)!}x^{2n+1}$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`$y''-x^2y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituir a série e achar a recorrência</span>
              <p>Com $y=\sum_{k=0}^\infty a_kx^k$: $y''=\sum_{k\ge0}(k+2)(k+1)a_{k+2}x^k$ e $x^2y=\sum_{k\ge2}a_{k-2}x^k$. Igualando coeficientes: para $k=0,1$ não há termo correspondente em $x^2y$, forçando $2\cdot1\cdot a_2=0$ e $3\cdot2\cdot a_3=0$, ou seja $a_2=a_3=0$; para $k\ge2$,
              $$(k+2)(k+1)a_{k+2}=a_{k-2}\;\Longrightarrow\;a_{k+2}=\frac{a_{k-2}}{(k+2)(k+1)}.$$
              Como o passo é $4$ (liga $a_{k+2}$ a $a_{k-2}$) e $a_2=a_3=0$, todas as classes residuais $2,3\pmod4$ são identicamente nulas; restam apenas as séries geradas por $a_0$ (índices múltiplos de $4$) e $a_1$ (índices da forma $4n+1$).</p>
              <span class="step-label">Passo 2 — série gerada por $a_0$</span>
              <p>Escrevendo $k+2=4n$ (isto é, $k=4n-2$): $a_{4n}=\dfrac{a_{4(n-1)}}{4n(4n-1)}$. Iterando desde $a_0$:
              $$a_{4n}=\frac{a_0}{\displaystyle\prod_{m=1}^n(4m-1)(4m)}.$$</p>
              <span class="step-label">Passo 3 — série gerada por $a_1$</span>
              <p>Analogamente, com $k+2=4n+1$: $a_{4n+1}=\dfrac{a_{4(n-1)+1}}{4n(4n+1)}$. Iterando desde $a_1$:
              $$a_{4n+1}=\frac{a_1}{\displaystyle\prod_{m=1}^n(4m)(4m+1)}.$$</p>
              <div class="final">$y=C_0\left[1+\displaystyle\sum_{n=1}^\infty\frac{x^{4n}}{\prod_{m=1}^n(4m-1)(4m)}\right]+C_1\left[x+\sum_{n=1}^\infty\frac{x^{4n+1}}{\prod_{m=1}^n(4m)(4m+1)}\right]$</div>
            `
          },
          {
            label: '3',
            statement: String.raw`$y''+2xy'+4y=0$`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — substituir a série e achar a recorrência</span>
              <p>Com $y=\sum_{k=0}^\infty a_kx^k$: $y''=\sum_{k\ge0}(k+2)(k+1)a_{k+2}x^k$, $2xy'=\sum_{k\ge0}2ka_kx^k$, $4y=\sum_{k\ge0}4a_kx^k$. Igualando coeficientes de $x^k$:
              $$(k+2)(k+1)a_{k+2}+(2k+4)a_k=0\;\Longrightarrow\;a_{k+2}=-\frac{2a_k}{k+1}$$
              (usando $2k+4=2(k+2)$ e cancelando o fator $(k+2)$ comum).</p>
              <span class="step-label">Passo 2 — série par ($a_0$ livre)</span>
              <p>$a_2=-2a_0,\ a_4=-\dfrac{2a_2}3=\dfrac{(-2)^2a_0}{1\cdot3},\ a_6=-\dfrac{2a_4}5=\dfrac{(-2)^3a_0}{1\cdot3\cdot5},\dots$, ou seja $a_{2n}=\dfrac{(-2)^na_0}{1\cdot3\cdot5\cdots(2n-1)}$.</p>
              <span class="step-label">Passo 3 — série ímpar ($a_1$ livre)</span>
              <p>Com $b_n=a_{2n+1}$: $b_{n+1}=-\dfrac{b_n}{n+1}$ (substituindo $k=2n+1$ na recorrência), com $b_0=a_1$. Iterando: $b_1=-a_1,\ b_2=\dfrac{a_1}2,\ b_3=-\dfrac{a_1}6,\dots$, ou seja $a_{2n+1}=\dfrac{(-1)^na_1}{n!}$.</p>
              <div class="final">$y=C_0\displaystyle\sum_{n=0}^\infty\frac{(-2)^nx^{2n}}{(2n-1)(2n-3)\cdots3\cdot1}+C_1\sum_{n=0}^\infty\frac{(-1)^n}{n!}x^{2n+1}$</div>
            `
          }
        ]
      },
      {
        ref: 'Lista 3 · Parte B · Item 13', examStyle: true,
        statement: String.raw`
          <p>A equação $x^2y''+xy'+(x^2-p^2)y=0$ é a equação de Bessel de ordem $p$. Abra a resolução de cada item separadamente.</p>
        `,
        parts: [
          {
            label: '1',
            statement: String.raw`Se $p=0$, mostre que $y_1=\displaystyle\sum_{n=0}^\infty\frac{(-1)^n}{2^{2n}(n!)^2}x^{2n}$ e $y_2=y_1\ln x+\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}{2^{2n}(n!)^2}\left(1+\tfrac12+\cdots+\tfrac1n\right)x^{2n}$ são soluções LI da equação de Bessel.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação indicial com raiz dupla $r=0$</span>
              <p>Para $p=0$: $x^2y''+xy'+x^2y=0$. Tentando $y=\sum_{k\ge0}a_kx^{k+r}$ com $a_0\ne0$, o coeficiente da menor potência $x^r$ dá a equação indicial $r(r-1)+r=r^2=0$: uma <strong>raiz dupla</strong> $r=0$.</p>
              <span class="step-label">Passo 2 — construção de $y_1$ (série de potências pura)</span>
              <p>Com $r=0$ e $y_1=\sum_{n\ge0}c_nx^{2n}$ (só potências pares, por simetria da equação), substituindo em $x^2y_1''+xy_1'+x^2y_1=0$ obtém-se, para o coeficiente de $x^{2n}$ com $n\ge1$: $4n^2c_n+c_{n-1}=0\Rightarrow c_n=-\dfrac{c_{n-1}}{4n^2}$. Com $c_0=1$: $c_1=-\dfrac14$, $c_2=-\dfrac{c_1}{16}=\dfrac1{64}$, e em geral $c_n=\dfrac{(-1)^n}{2^{2n}(n!)^2}$ — exatamente os coeficientes de $y_1$ dados.</p>
              <span class="step-label">Passo 3 — construção de $y_2$ (raiz dupla exige termo logarítmico)</span>
              <p>Pela teoria de Frobenius, raiz indicial repetida obriga a segunda solução a ter a forma $y_2=y_1\ln x+\sum_{n\ge1}b_nx^{2n}$. Substituindo essa forma na equação, e usando que $y_1$ já resolve a homogênea, os termos com $\ln x$ se cancelam automaticamente, restando (após simplificar $2xy_1'$ que sobra da regra do produto) a equação $x^2z''+xz'+x^2z=-2xy_1'$ para $z=\sum b_nx^{2n}$. Resolvendo essa recorrência termo a termo aparece naturalmente a soma harmônica $H_n=1+\tfrac12+\cdots+\tfrac1n$, reproduzindo exatamente os coeficientes de $y_2$ dados.</p>
              <span class="step-label">Passo 4 — independência linear</span>
              <p>Como $x\to0^+$, $y_1\to c_0=1$ (finito), enquanto $y_2\sim y_1\ln x\to-\infty$ por causa do fator $\ln x$. Nenhuma combinação linear de $y_1$ (série pura, sem log) pode reproduzir esse comportamento logarítmico, logo $\{y_1,y_2\}$ é LI.</p>
              <div class="final">Ambas satisfazem a equação de Bessel de ordem $0$ (verificado por substituição termo a termo) e são linearmente independentes, pois $y_2$ contém o termo $\ln x$ que $y_1$ não tem. $\blacksquare$</div>
            `
          },
          {
            label: '2',
            statement: String.raw`Se $p=1$, mostre que $y=x\left(1-\dfrac{x^2}{2^2\cdot2!}+\dfrac{x^4}{2^4\cdot2!\cdot3!}-\cdots\right)$ é solução.`,
            resolution: String.raw`
              <span class="step-label">Passo 1 — equação indicial com raízes diferindo por inteiro</span>
              <p>Para $p=1$: $x^2y''+xy'+(x^2-1)y=0$. A equação indicial é $r^2-1=0\Rightarrow r=\pm1$ (raízes diferem por $2$, um inteiro). Pela teoria de Frobenius, a raiz maior $r=1$ sempre admite uma solução em série de potências pura, sem termo logarítmico.</p>
              <span class="step-label">Passo 2 — montar a série e achar a recorrência</span>
              <p>Com $r=1$, escreva $y=\sum_{n\ge0}d_nx^{2n+1}$ (só potências ímpares totais, por simetria). Substituindo na equação e igualando o coeficiente de $x^{2n+1}$ (para $n\ge1$), os termos se agrupam como $\big[(2n+1)^2-1\big]d_n+d_{n-1}=0$, isto é $4n(n+1)d_n+d_{n-1}=0$, logo
              $$d_n=-\frac{d_{n-1}}{2^2n(n+1)}.$$
              Com $d_0=1$: $d_1=-\dfrac1{4\cdot1\cdot2}=-\dfrac1{2^2\cdot2!}$, $d_2=-\dfrac{d_1}{4\cdot2\cdot3}=\dfrac1{2^4\cdot2!\cdot3!}$, e em geral $d_n=\dfrac{(-1)^n}{2^{2n}n!(n+1)!}$ — exatamente os coeficientes do enunciado.</p>
              <span class="step-label">Passo 3 — verificação e solução final</span>
              <p>Como cada $d_n$ satisfaz a recorrência obtida diretamente da substituição na equação de Bessel de ordem $1$, a série $y=x\sum_{n\ge0}d_nx^{2n}$ a satisfaz termo a termo.</p>
              <div class="final">$y=x\displaystyle\sum_{n\ge0}\dfrac{(-1)^n}{2^{2n}\,n!\,(n+1)!}x^{2n}=x\left(1-\dfrac{x^2}{2^2\cdot1!\cdot2!}+\dfrac{x^4}{2^4\cdot2!\cdot3!}-\dfrac{x^6}{2^6\cdot3!\cdot4!}+\cdots\right)$ satisfaz a equação de Bessel de ordem $1$. $\blacksquare$</div>
            `
          }
        ]
      },
    ]
  }

  ]
};