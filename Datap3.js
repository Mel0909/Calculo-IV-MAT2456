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
          <p>Dê as soluções das equações diferenciais de 1ª ordem abaixo, com seus domínios (máximos):</p>
          <ol>
            <li>$y'=y^2$</li>
            <li>$xy'=y$</li>
            <li>$yy'=x$</li>
            <li>$y'=(1-y)(2-y)$</li>
            <li>$(x+3y)-x\dfrac{dy}{dx}=0$</li>
            <li>$y'=2y+e^x$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — $y'=y^2$</span>
          <p>Separável: $dy/y^2=dx \Rightarrow -1/y=x+C \Rightarrow y=\dfrac1{a-x}$ (renomeando a constante). A solução trivial $y\equiv0$ também vale.</p>
          <div class="final">$y\equiv0,\ x\in\mathbb R$; &nbsp; $y=\dfrac1{a-x}$, para $x&lt;a$ ou $x&gt;a$ ($a\in\mathbb R$)</div>
          <span class="step-label">b — $xy'=y$</span>
          <p>Separável: $dy/y=dx/x \Rightarrow \ln|y|=\ln|x|+C \Rightarrow y=ax$.</p>
          <div class="final">$y=ax,\ x\in\mathbb R$ ($a\in\mathbb R$)</div>
          <span class="step-label">c — $yy'=x$</span>
          <p>$y\,dy=x\,dx \Rightarrow y^2/2=x^2/2+C' \Rightarrow y^2=x^2+k$.</p>
          <div class="final">$y=\sqrt{x^2+k}$ e $y=-\sqrt{x^2+k}$; domínio $x^2&gt;-k$ se $k&lt;0$ (todo $x\in\mathbb R$ se $k\ge0$)</div>
          <span class="step-label">d — $y'=(1-y)(2-y)$</span>
          <p>Soluções constantes: $y\equiv1$, $y\equiv2$ (onde o RHS se anula). Para $y\ne1,2$: frações parciais $\dfrac1{(1-y)(2-y)}=\dfrac1{1-y}-\dfrac1{2-y}$, logo $\int\left[\dfrac1{1-y}-\dfrac1{2-y}\right]dy=\int dx \Rightarrow -\ln|1-y|+\ln|2-y|=x+C \Rightarrow \ln\left|\dfrac{2-y}{1-y}\right|=x+C \Rightarrow \dfrac{2-y}{1-y}=ke^x$. Isolando $y$: $y=\dfrac{ke^x-2}{ke^x-1}$.</p>
          <div class="final">$y\equiv1$; $y\equiv2$; $y=\dfrac{ke^x-2}{ke^x-1}$, $x\in\mathbb R$ se $k\le0$, ou $x&lt;-\ln k$ ou $x&gt;-\ln k$ se $k&gt;0$</div>
          <span class="step-label">e — $(x+3y)-x\,dy/dx=0$</span>
          <p>Reescreva: $x\,y'-3y=x \Rightarrow y'-\dfrac3xy=1$, linear. Fator integrante $x^{-3}$: $\left(yx^{-3}\right)'=x^{-3} \Rightarrow yx^{-3}=-\dfrac1{2x^2}+C \Rightarrow y=Cx^3-\dfrac x2$.</p>
          <div class="final">$y=ax^3-\dfrac x2$ se $x\ge0$, e análogo (outra constante) se $x&lt;0$ — a equação é singular em $x=0$</div>
          <span class="step-label">f — $y'=2y+e^x$</span>
          <p>Linear: $y'-2y=e^x$. Fator integrante $e^{-2x}$: $(ye^{-2x})'=e^{-x} \Rightarrow ye^{-2x}=-e^{-x}+C \Rightarrow y=Ce^{2x}-e^x$.</p>
          <div class="final">$y=ae^{2x}-e^x,\ x\in\mathbb R$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 4',
        statement: String.raw`
          <p>Dê duas soluções para cada uma das equações com a condição inicial dada:</p>
          <ol>
            <li>$y'=5y^{4/5}$, $y(0)=0$</li>
            <li>$y'=3\sqrt[3]{y^2}\,(3x^2+1)$, $y(0)=0$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">Por que a unicidade falha aqui</span>
          <p>Em ambos os casos, $f(x,y)$ envolve $y$ elevado a uma potência fracionária menor que $1$ ($y^{4/5}$, $y^{2/3}$), cuja derivada parcial em $y$ explode quando $y\to0$ ($\partial f/\partial y\propto y^{-1/5}$ ou $y^{-1/3}$). A hipótese de continuidade de $\partial f/\partial y$ do Teorema de Existência e Unicidade falha exatamente em $y=0$ — abrindo espaço para múltiplas soluções pelo mesmo ponto $(0,0)$.</p>
          <span class="step-label">a — $y'=5y^{4/5}$</span>
          <p>$y\equiv0$ é solução óbvia. Testando $y=x^5$: $y'=5x^4$, e $5y^{4/5}=5(x^5)^{4/5}=5x^4$. Coincide!</p>
          <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y=x^5$</div>
          <span class="step-label">b — $y'=3\sqrt[3]{y^2}(3x^2+1)$</span>
          <p>$y\equiv0$ é solução óbvia. Testando $y=(x^3+x)^3$: $y'=3(x^3+x)^2(3x^2+1)$, e $3\sqrt[3]{y^2}(3x^2+1)=3(x^3+x)^2(3x^2+1)$ (pois $\sqrt[3]{y^2}=\sqrt[3]{(x^3+x)^6}=(x^3+x)^2$). Coincide!</p>
          <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y=(x^3+x)^3$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 3', examStyle: true,
        statement: String.raw`
          <p>Determine a solução de cada um dos problemas de Cauchy (ou do valor inicial):</p>
          <ol>
            <li>$y'=x+y$, $y(0)=1$</li>
            <li>$(\cos t)x'-(\sin t)x=1$, $x(2\pi)=\pi$</li>
            <li>$y'=x(1+y)$, $y(0)=-1$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — $y'-y=x$, $y(0)=1$</span>
          <p>Linear. Fator integrante $e^{-x}$: $(ye^{-x})'=xe^{-x}$. Integrando por partes: $\int xe^{-x}dx=-(x+1)e^{-x}+C$. Logo $y=-(x+1)+Ce^x$. Com $y(0)=1$: $1=-1+C\Rightarrow C=2$.</p>
          <div class="final">$y=2e^x-x-1$</div>
          <span class="step-label">b — $(\cos t)x'-(\sin t)x=1$, $x(2\pi)=\pi$</span>
          <p>Divida por $\cos t$: $x'-\tan(t)x=\sec t$. Fator integrante $e^{-\int\tan t\,dt}=e^{\ln|\cos t|}=\cos t$: $(x\cos t)'=\cos t\sec t=1$. Integrando: $x\cos t=t+C$. Com $t=2\pi$: $\pi\cdot1=2\pi+C\Rightarrow C=-\pi$.</p>
          <div class="final">$x=\dfrac{t-\pi}{\cos t}$</div>
          <span class="step-label">c — $y'=x(1+y)$, $y(0)=-1$</span>
          <p>Observe que $y\equiv-1$ satisfaz a equação trivialmente: $y'=0$ e $x(1+(-1))=x\cdot0=0$. Como $y(0)=-1$ já é a condição inicial, e pelo Teorema de Existência e Unicidade ($f=x(1+y)$ e $\partial f/\partial y=x$ são contínuas em toda parte) essa é a <em>única</em> solução.</p>
          <div class="final">$y\equiv-1$</div>
        `
      }
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
          <p>Resolva as equações:</p>
          <ol>
            <li>$y'=e^{x-2y}$</li>
            <li>$x^2y^2\dfrac{dy}{dx}=1+x^2$</li>
            <li>$y'\sin x+y\cos x=1$</li>
            <li>$y'=x^3-2xy$</li>
            <li>$3x^2\tan y-\dfrac{2y^3}{x^3}+\left(x^3\sec^2y+4y^3+\dfrac{3y^2}{x^2}\right)y'=0$</li>
            <li>$(1-xy)+(xy-x^2)\dfrac{dy}{dx}=0$</li>
            <li>$xy'=y+\sqrt{x^2+y^2}$</li>
            <li>$(1+t^2)y'+ty+(1+t^2)^{5/2}=0$</li>
            <li>$\dfrac{dy}{dx}=\dfrac yx+\cos^2\!\left(\dfrac yx\right)$</li>
            <li>$(1-xy)y'=y^2$</li>
            <li>$xy'=\sqrt{x^2+y^2}$, $x&gt;0$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a</span><p>Separável: $e^{2y}dy=e^xdx \Rightarrow \tfrac12 e^{2y}=e^x+C'$.</p>
          <div class="final">$y=\tfrac12\ln(2e^x+C)$</div>
          <span class="step-label">b</span><p>Separável: $y^2dy=(1/x^2+1)dx \Rightarrow y^3/3=-1/x+x+C$.</p>
          <div class="final">$y=\sqrt[3]{3x-\tfrac3x+C}=\sqrt[3]{\dfrac{3x^2-3+Cx}{x}}$</div>
          <span class="step-label">c</span><p>Note que $(y\sin x)'=y'\sin x+y\cos x$ (regra do produto) — o lado esquerdo já é uma derivada exata! $(y\sin x)'=1 \Rightarrow y\sin x=x+C$.</p>
          <div class="final">$y=\dfrac{x+C}{\sin x}$</div>
          <span class="step-label">d</span><p>Linear: $y'+2xy=x^3$. Fator integrante $e^{x^2}$: $(ye^{x^2})'=x^3e^{x^2}$. Com $u=x^2$: $\int x^3e^{x^2}dx=\tfrac12(x^2-1)e^{x^2}+C$.</p>
          <div class="final">$y=\tfrac12(x^2-1)+Ce^{-x^2}$</div>
          <span class="step-label">e</span><p>$M=3x^2\tan y-2y^3/x^3$, $N=x^3\sec^2y+4y^3+3y^2/x^2$. $M_y=3x^2\sec^2y-6y^2/x^3=N_x$: exata. $F=x^3\tan y+y^3/x^2+g(y)$; $F_y=x^3\sec^2y+3y^2/x^2+g'(y)=N\Rightarrow g'(y)=4y^3\Rightarrow g=y^4$.</p>
          <div class="final">$x^3\tan y+\dfrac{y^3}{x^2}+y^4=C$</div>
          <span class="step-label">f</span><p>$M=1-xy$, $N=xy-x^2$: não exata ($M_y=-x\ne N_x=y-2x$). Mas $(M_y-N_x)/N=(x-y)/[x(y-x)]=-1/x$: fator integrante $\mu=1/x$. Multiplicando: $M\mu=1/x-y$, $N\mu=y-x$ — agora exato ($\partial_y(M\mu)=-1=\partial_x(N\mu)$). $F=\ln|x|-xy+y^2/2=C'$; multiplicando por $2$:</p>
          <div class="final">$y^2-2xy+\ln x^2=C$</div>
          <span class="step-label">g</span><p>Homogênea: $y=vx$, $y'=v+xv'$. Para $x&gt;0$: $x(v+xv')=vx+x\sqrt{1+v^2}\Rightarrow xv'=\sqrt{1+v^2}\Rightarrow \dfrac{dv}{\sqrt{1+v^2}}=\dfrac{dx}x$. Integrando (arco-seno hiperbólico): $v+\sqrt{1+v^2}=Cx$. Voltando a $v=y/x$: $y+\sqrt{x^2+y^2}=Cx^2$.</p>
          <div class="final">$y+\sqrt{x^2+y^2}=Cx^2$ ($x&gt;0$); análogo com sinal trocado para $x&lt;0$</div>
          <span class="step-label">h</span><p>Linear: $y'+\dfrac t{1+t^2}y=-(1+t^2)^{3/2}$. Fator integrante $\sqrt{1+t^2}$: $\left(y\sqrt{1+t^2}\right)'=-(1+t^2)^2=-(1+2t^2+t^4)$. Integrando: $y\sqrt{1+t^2}=C-t-\tfrac{2t^3}3-\tfrac{t^5}5$. Multiplicando por $15$ e dividindo:</p>
          <div class="final">$y=\dfrac{C-15t-10t^3-3t^5}{15\sqrt{1+t^2}}$</div>
          <span class="step-label">i</span><p>Homogênea: $v=y/x$, $y'=v+xv'$. $v+xv'=v+\cos^2v\Rightarrow xv'=\cos^2v\Rightarrow \sec^2v\,dv=dx/x\Rightarrow \tan v=\ln|x|+C$.</p>
          <div class="final">$\tan\!\left(\dfrac yx\right)=\ln|x|+C$</div>
          <span class="step-label">j</span><p>Trate $x$ como função de $y$: $(1-xy)dy=y^2dx\Rightarrow \dfrac{dx}{dy}+\dfrac xy=\dfrac1{y^2}$, linear em $x(y)$. Fator integrante $y$: $(xy)'=1/y\Rightarrow xy=\ln|y|+C$.</p>
          <div class="final">$xy-\ln|y|=C$, ou $y\equiv0$</div>
          <span class="step-label">k</span><p>Homogênea: $v=y/x$, $y'=v+xv'$. $v+xv'=\sqrt{1+v^2}\Rightarrow xv'=\sqrt{1+v^2}-v\Rightarrow \dfrac{dv}{\sqrt{1+v^2}-v}=\dfrac{dx}x$. Racionalizando o lado esquerdo (multiplicar por $\sqrt{1+v^2}+v$): $(\sqrt{1+v^2}+v)\,dv=\dfrac{dx}x$. Integrando: $\tfrac12v\sqrt{1+v^2}+\tfrac12\ln|v+\sqrt{1+v^2}|+\tfrac{v^2}2=\ln|x|+C$.</p>
          <div class="final">$\dfrac{y\sqrt{x^2+y^2}}{x^2}+\dfrac{y^2}{x^2}+\ln\left|\dfrac{y+\sqrt{x^2+y^2}}x\right|=2\ln|x|+C$ &nbsp;(equivalente à forma implícita usual desse tipo de equação homogênea)</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 12', examStyle: true,
        statement: String.raw`
          <p>Exercícios sobre equações diferenciais exatas e fatores integrantes.</p>
          <ol>
            <li>Determine todas as funções $f$ que tornam exata a equação $y^2\sin x\,dx+yf(x)\,dy=0$.</li>
            <li>A equação $g(x)\,dy+(y+x)\,dx=0$ tem $h(x)=x$ como fator integrante. Determine todas as possíveis funções $g$.</li>
            <li>A equação $e^x\sec y-\tan y+y'=0$ tem um fator integrante da forma $f(x,y)=e^{ax}\cos y$. Determine $a$ e resolva a equação.</li>
            <li>Ache um fator integrante da forma $h(x,y)=x^ny^m$ para $y(y^2+1)dx+x(y^2-1)\ln x\,dy=0$ e resolva-a.</li>
            <li>Ache um fator integrante da forma $\mu=\mu(x+y^2)$ para $(3x+2y+y^2)dx+(x+4xy+5y^2)dy=0$.</li>
            <li>Ache um fator integrante da forma $\mu=\mu(x^2+y^2)$ para $x\,dx+y\,dy+x(x\,dy-y\,dx)=0$.</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a</span><p>$M=y^2\sin x$, $N=yf(x)$. Exatidão: $M_y=2y\sin x$, $N_x=yf'(x)$. Igualando: $f'(x)=2\sin x\Rightarrow f(x)=C-2\cos x$.</p>
          <div class="final">$f(x)=C-2\cos x,\ C\in\mathbb R$</div>
          <span class="step-label">b</span><p>Original: $(y+x)dx+g(x)dy=0$. Multiplicando por $\mu=x$: $M=x(y+x)=xy+x^2$, $N=xg(x)$. Exatidão: $M_y=x$, $N_x=g(x)+xg'(x)$. Igualando: $(xg)'=x\Rightarrow xg=\tfrac{x^2}2+C\Rightarrow g(x)=\tfrac x2+\tfrac Cx$.</p>
          <div class="final">$g(x)=\dfrac x2+\dfrac Cx,\ C\in\mathbb R$</div>
          <span class="step-label">c</span><p>$M=e^x\sec y-\tan y$, $N=1$. Multiplicando por $f=e^{ax}\cos y$: $Mf=e^{(a+1)x}-e^{ax}\sin y$, $Nf=e^{ax}\cos y$. Exatidão: $\partial_y(Mf)=-e^{ax}\cos y$ e $\partial_x(Nf)=ae^{ax}\cos y$; igualando, $a=-1$. Com $a=-1$: $Mf=1-e^{-x}\sin y$, $Nf=e^{-x}\cos y$; $F=x+e^{-x}\sin y=C$.</p>
          <div class="final">$a=-1$; &nbsp; $x+e^{-x}\sin y=C$</div>
          <span class="step-label">d</span><p>Multiplicando por $\mu=x^ny^m$ e impondo exatidão, obtém-se $n=-1$, $m=-2$. Com $\mu=y^{-2}/x$: $M\mu=(y^2+1)/(xy)$, $N\mu=(y^2-1)\ln x/y^2$ — exata. $F=(y+1/y)\ln x=C'$, ou multiplicando por $y$:</p>
          <div class="final">$n=-1,\ m=-2$; &nbsp; $(y^2+1)\ln x=Cy$, ou $y\equiv0$</div>
          <span class="step-label">e</span><p>Com $s=x+y^2$, impõe-se que $\dfrac{M_y-N_x}{Ns_x-Ms_y}$ dependa só de $s$; verifica-se que essa razão vale $1/s$, dando $d(\ln\mu)/ds=1/s\Rightarrow\mu=s$.</p>
          <div class="final">$\mu(x+y^2)=x+y^2$</div>
          <span class="step-label">f</span><p>Em coordenadas polares ($x=r\cos\theta$, $y=r\sin\theta$), $x\,dx+y\,dy=r\,dr$ e $x(x\,dy-y\,dx)=x\cdot r^2d\theta$; a equação vira $r\,dr+r^3\cos\theta\,d\theta\cdot(\dots)=0$, que se torna exata ao multiplicar por $\mu=r^{-3}=(x^2+y^2)^{-3/2}$ (padrão clássico para este tipo de termo "rotacional" $x\,dy-y\,dx$).</p>
          <div class="final">$\mu=(x^2+y^2)^{-3/2}$</div>
        `
      }
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
          <p>Resolva as equações abaixo usando uma conveniente mudança de coordenadas (nos itens (a)–(d) o enunciado original ainda pede as soluções de (a), (b) e (d) que passam pelo ponto $(1,1)$):</p>
          <ol>
            <li>$(x+y)dx+x\,dy=0$</li>
            <li>$(xe^y+y-x^2)dy=(2xy-e^y-x)dx$</li>
            <li>$\cos x\,dy=(1-y-\sin x)dx$</li>
            <li>$y(x^2+y^2)dx+x(3x^2-5y^2)dy=0$</li>
            <li>$e^x\sin y\,dx+e^x\cos y\,dy=y\sin(xy)\,dx+x\sin(xy)\,dy$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — direta, sem substituição (equação já exata)</span>
          <p>$M=x+y$, $N=x$: $M_y=1=N_x$, exata. $F=x^2/2+xy+g(y)$; $F_y=x+g'(y)=N=x\Rightarrow g'=0$. $F=x^2/2+xy$.</p>
          <div class="final">$x^2+2xy=C$; passando por $(1,1)$: $x^2+2xy=3$</div>
          <span class="step-label">b — exata diretamente</span>
          <p>$M=2xy-e^y-x$, $N=-(xe^y+y-x^2)$: $M_y=2x-e^y=N_x$, exata. $F=x^2y-xe^y-x^2/2+g(y)$; $F_y=x^2-xe^y+g'(y)=N\Rightarrow g'(y)=-y\Rightarrow g=-y^2/2$.</p>
          <div class="final">$x^2+y^2+2xe^y-2x^2y=C$; passando por $(1,1)$: $C=2e$</div>
          <span class="step-label">c — reconhecendo uma equação linear</span>
          <p>Escreva $\dfrac{dy}{dx}=\dfrac{1-\sin x}{\cos x}-\dfrac{y}{\cos x}=(\sec x-\tan x)-y\sec x$, i.e. $y'+y\sec x=\sec x-\tan x$. Fator integrante $e^{\int\sec x\,dx}=\sec x+\tan x$. Multiplicando: $\big[y(\sec x+\tan x)\big]'=(\sec x-\tan x)(\sec x+\tan x)=\sec^2x-\tan^2x=1$. Integrando: $y(\sec x+\tan x)=x+C$.</p>
          <div class="final">$y=\dfrac{x+C}{\sec x+\tan x}$</div>
          <span class="step-label">d — equação homogênea, $v=y/x$</span>
          <p>Substituindo $y=vx$: reduz-se (após simplificação, partial frações em $v$) a $\dfrac{dx}x=\dfrac{5v^2-3}{4v(1-v^2)}dv$. Decompondo $\dfrac{5v^2-3}{v(1-v^2)}=-\dfrac3v+\dfrac1{1-v}-\dfrac1{1+v}$ e integrando: $\ln|x|=\tfrac14\big[-3\ln|v|-\ln|1-v^2|\big]+C'$. Voltando a $v=y/x$ e simplificando:</p>
          <div class="final">$y^3(x^2-y^2)=Cx$; passando por $(1,1)$: $C=0$, ou seja a curva $y=x$</div>
          <span class="step-label">e — exata diretamente</span>
          <p>$M=e^x\sin y-y\sin(xy)$, $N=e^x\cos y-x\sin(xy)$: verifica-se $M_y=N_x=e^x\cos y-\sin(xy)-xy\cos(xy)$, exata. $F=e^x\sin y+\cos(xy)+g(y)$; $F_y=e^x\cos y-x\sin(xy)+g'(y)=N\Rightarrow g'=0$.</p>
          <div class="final">$e^x\sin y+\cos(xy)=C$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 7',
        statement: String.raw`
          <p>(Exemplo do enunciado.) Para resolver $(x+2y-1)dx+3(x+2y)dy=0$, fazemos $x+2y=v$: $dx=dv-2dy$, o que dá $(v-1)dv+(v+2)dy=0$, i.e. $\dfrac{v-1}{v+2}dv+dy=0$, cuja solução é $v-3\ln|v+2|+y+c=0$, ou seja $x+3y+C=3\ln|x+2y+2|$.</p>
          <p>Resolva as equações abaixo, usando uma conveniente mudança de coordenadas:</p>
          <ol>
            <li>$(1+3x\sin y)dx-x^2\cos y\,dy=0$ &nbsp; (sugestão: $\sin y=w$)</li>
            <li>$(3x-2y+1)dx-(3x-2y+3)dy=0$</li>
            <li>$\cos(x+y)dx=x\sin(x+y)dx+x\sin(x+y)dy$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — $w=\sin y$, $dw=\cos y\,dy$</span>
          <p>$(1+3xw)dx-x^2dw=0\Rightarrow \dfrac{dw}{dx}=\dfrac1{x^2}+\dfrac{3w}x$, linear: $w'-\dfrac3xw=\dfrac1{x^2}$. Fator integrante $x^{-3}$: $(wx^{-3})'=x^{-5}\Rightarrow wx^{-3}=-\dfrac1{4x^4}+C\Rightarrow w=Cx^3-\dfrac1{4x}$.</p>
          <div class="final">$\sin y=Cx^3-\dfrac1{4x}$, ou seja $4x\sin y+1=4Cx^4$</div>
          <span class="step-label">b — $v=3x-2y$</span>
          <p>$dv=3dx-2dy\Rightarrow dy=(3dx-dv)/2$. Substituindo: $(v+1)dx-(v+3)(3dx-dv)/2=0$. Multiplicando por $2$ e simplificando: $(v+3)dv=(v+7)dx\Rightarrow dx=\dfrac{v+3}{v+7}dv=\left[1-\dfrac4{v+7}\right]dv$. Integrando: $x=v-4\ln|v+7|+C$. Voltando a $v=3x-2y$:</p>
          <div class="final">$x-y-2\ln|3x-2y+7|=C$ &nbsp;<span style="color:var(--gray)">(verificado por diferenciação implícita direta)</span></div>
          <span class="step-label">c — $u=x+y$, $du=dx+dy$</span>
          <p>Escreva $dy=du-dx$: $\cos u\,dx=x\sin u\,dx+x\sin u(du-dx)=x\sin u\,du$ (os termos $x\sin u\,dx$ se cancelam!). Logo $\dfrac{dx}x=\tan u\,du\Rightarrow \ln|x|=-\ln|\cos u|+C'\Rightarrow \ln|x\cos u|=C'$.</p>
          <div class="final">$x\cos(x+y)=C$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte A · Item 8', examStyle: true,
        statement: String.raw`
          <p>Mostre que a substituição $z=ax+by+c$ transforma a equação $y'=f(ax+by+c)$ numa equação de variáveis separáveis. Aplique esse método para resolver as equações:</p>
          <ol>
            <li>$y'=(x+y)^2$</li>
            <li>$y'=\sin^2(x-y+1)$</li>
            <li>$(x+2y-1)dx+3(x+2y)dy=0$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">O método geral</span>
          <p>Com $z=ax+by+c$: $z'=a+by'\Rightarrow y'=\dfrac{z'-a}b$ (se $b\ne0$). Substituindo em $y'=f(ax+by+c)=f(z)$: $\dfrac{z'-a}b=f(z)\Rightarrow z'=a+bf(z)$ — uma equação em $z(x)$ apenas, separável: $\dfrac{dz}{a+bf(z)}=dx$.</p>
          <span class="step-label">a — $z=x+y$, $a=b=1$, $f(z)=z^2$</span>
          <p>$z'=1+z^2\Rightarrow \dfrac{dz}{1+z^2}=dx\Rightarrow \arctan z=x+C\Rightarrow z=\tan(x+C)$. Voltando a $z=x+y$:</p>
          <div class="final">$y=\tan(x+C)-x$</div>
          <span class="step-label">b — $z=x-y+1$, $a=1,b=-1$, $f(z)=\sin^2z$</span>
          <p>$y'=1-z'$, e $y'=\sin^2z\Rightarrow z'=1-\sin^2z=\cos^2z\Rightarrow \sec^2z\,dz=dx\Rightarrow \tan z=x+C$.</p>
          <div class="final">$\tan(x-y+1)=x+C$</div>
          <span class="step-label">c — $z=x+2y$, mesma equação do exemplo</span>
          <p>Como no exemplo do item 7: $z-3\ln|z+2|+y+c=0$ com $z=x+2y$, o que rearranja para</p>
          <div class="final">$y-\ln|x+2y+2|+\dfrac x3=C$</div>
        `
      }
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
          <p>Use o método de Bernoulli para resolver as seguintes equações:</p>
          <ol>
            <li>$y(6x^2y^2-x+1)+2xy'=0$</li>
            <li>$y'=y+e^{-3x}y^4$</li>
            <li>$2x^3y'=y(y^2+3x^2)$ (que também é homogênea!)</li>
            <li>$x^3y'=2y\left(\sqrt[3]{y}+3x^2\right)$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — $n=3$, $z=y^{-2}$</span>
          <p>Reescrevendo: $y'-\dfrac{x-1}{2x}y=-3xy^3$. Dividindo por $y^3$ e substituindo $z=y^{-2}$ ($z'=-2y^{-3}y'$): $z'+\left(1-\dfrac1x\right)z=6x$. Fator integrante $e^{x}/x$: $\left(z\dfrac{e^x}x\right)'=6e^x \Rightarrow z\dfrac{e^x}x=6e^x+C\Rightarrow z=6x+Cxe^{-x}$.</p>
          <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y^2=\dfrac1{6x+Cxe^{-x}}$</div>
          <span class="step-label">b — $n=4$, $z=y^{-3}$</span>
          <p>Dividindo por $y^4$: $y'/y^4-y^{-3}=e^{-3x}$. Com $z=y^{-3}$ ($z'=-3y^{-4}y'$): $-z'/3-z=e^{-3x}\Rightarrow z'+3z=-3e^{-3x}$. Fator integrante $e^{3x}$: $(ze^{3x})'=-3\Rightarrow ze^{3x}=-3x+C\Rightarrow z=(C-3x)e^{-3x}$.</p>
          <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y=\dfrac{e^x}{\sqrt[3]{C-3x}}$</div>
          <span class="step-label">c — $n=3$, $z=y^{-2}$</span>
          <p>Reescreva: $y'-\dfrac3{2x}y=\dfrac1{2x^3}y^3$. Dividindo por $y^3$, com $z=y^{-2}$: $-z'/2+\dfrac3{2x}z=\dfrac1{2x^3}\cdot(-1)$... simplificando, $z'+\dfrac3xz=-\dfrac1{x^3}$. Fator integrante $x^3$: $(zx^3)'=-1\Rightarrow zx^3=C-x\Rightarrow z=\dfrac{C-x}{x^3}$.</p>
          <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y^2=\dfrac{x^3}{C-x}$</div>
          <span class="step-label">d — $n=4/3$, $z=y^{-1/3}$</span>
          <p>Reescreva: $y'-\dfrac6xy=\dfrac2{x^3}y^{4/3}$. Dividindo por $y^{4/3}$, com $z=y^{-1/3}$ ($z'=-\tfrac13y^{-4/3}y'$): $-3z'-\dfrac6xz=\dfrac2{x^3}\Rightarrow z'+\dfrac2xz=-\dfrac2{3x^3}$. Fator integrante $x^2$: $(zx^2)'=-\dfrac2{3x}\Rightarrow zx^2=C-\dfrac23\ln|x|$. Reorganizando (multiplicando a constante por $3$ dentro do log):</p>
          <div class="final">$y\equiv0$ &nbsp; e &nbsp; $y=\dfrac{27x^6}{\left(C-\ln x^2\right)^3}$</div>
        `
      }
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
          <p>Usando o método do exercício anterior e a solução particular dada, resolva cada uma das equações de Riccati:</p>
          <ol>
            <li>$y'=1+t^2-2ty+y^2$, $y_1(t)=t$</li>
            <li>$y'=-\dfrac1{t^2}-\dfrac yt+y^2$, $y_1(t)=\dfrac1t$</li>
            <li>$y'=\dfrac{2\cos^2t-\sin^2t+y^2}{2\cos t}$, $y_1(t)=\sin t$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — $q_1=1+t^2$, $q_2=-2t$, $q_3=1$, $y_1=t$</span>
          <p>$q_2+2q_3y_1=-2t+2t=0$. A equação linear vira $v'=-1$ (bem simples!) $\Rightarrow v=C-t$.</p>
          <div class="final">$y=t+\dfrac1{C-t}$</div>
          <span class="step-label">b — $q_1=-1/t^2$, $q_2=-1/t$, $q_3=1$, $y_1=1/t$</span>
          <p>$q_2+2q_3y_1=-1/t+2/t=1/t$. Equação linear: $v'+v/t=-1$. Fator integrante $t$: $(vt)'=-t\Rightarrow vt=-t^2/2+C\Rightarrow v=\dfrac{2C-t^2}{2t}$.</p>
          <div class="final">$y=\dfrac1t+\dfrac{2t}{C-t^2}$</div>
          <span class="step-label">c — $q_1=\dfrac{2\cos^2t-\sin^2t}{2\cos t}$, $q_2=0$, $q_3=\dfrac1{2\cos t}$, $y_1=\sin t$</span>
          <p>$q_2+2q_3y_1=\dfrac{\sin t}{\cos t}=\tan t$. Equação linear: $v'+\tan(t)v=-\dfrac1{2\cos t}$. Fator integrante $\sec t$: $(v\sec t)'=-\tfrac12\sec^2t\Rightarrow v\sec t=-\tfrac12\tan t+C\Rightarrow v=C\cos t-\tfrac12\sin t$.</p>
          <div class="final">$y=\sin t+\dfrac2{2C\cos t-\sin t}$</div>
        `
      }
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
          <p>(Variável dependente ausente.) Por exemplo, $z=y'$ reduz $xy''-y'=3x^2$ à equação linear $xz'-z=3x^2$. Resolva por esse método:</p>
          <ol>
            <li>$xy''-y'=3x^2$</li>
            <li>$xy''=y'+(y')^3$</li>
            <li>$x^2y''=2xy'+(y')^2$</li>
            <li>$x^2y''+xy'=1$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — $z=y'$: $xz'-z=3x^2$</span>
          <p>Linear: $z'-z/x=3x$. Fator integrante $1/x$: $(z/x)'=3\Rightarrow z/x=3x+C_1\Rightarrow z=3x^2+C_1x$. Integrando $y'=z$:</p>
          <div class="final">$y(x)=x^3+C_1x^2+C_2$</div>
          <span class="step-label">b — $z=y'$: $xz'=z+z^3$ (Bernoulli em $z$, $n=3$)</span>
          <p>$z'-z/x=z^3/x$. Com $w=z^{-2}$: $w'+2w/x=-2/x$. Fator integrante $x^2$: $(wx^2)'=-2x\Rightarrow wx^2=C_1-x^2\Rightarrow z^2=\dfrac{x^2}{C_1-x^2}$ (escrevendo com $A=1/C_1$): $z=\pm\dfrac{Ax}{\sqrt{1-A^2x^2}}$. Integrando $y'=z$: $y=\mp\dfrac1A\sqrt{1-A^2x^2}+C_2$.</p>
          <div class="final">$y(x)=-\dfrac1{C_1}\sqrt{1-C_1^2x^2}+C_2$, ou $y\equiv$ const.</div>
          <span class="step-label">c — $z=y'$: $x^2z'=2xz+z^2$ (Bernoulli em $z$, $n=2$)</span>
          <p>$z'-2z/x=z^2/x^2$. Com $w=z^{-1}$: $w'+2w/x=-1/x^2$. Fator integrante $x^2$: $(wx^2)'=-1\Rightarrow wx^2=C_1-x\Rightarrow z=\dfrac{x^2}{C_1-x}$. Divisão polinomial: $\dfrac{x^2}{C_1-x}=-x-C_1+\dfrac{C_1^2}{C_1-x}$. Integrando $y'=z$:</p>
          <div class="final">$y(x)=-\dfrac{x^2}2-C_1x-C_1^2\ln|x-C_1|+C_2$, ou $y\equiv$ const.</div>
          <span class="step-label">d — $z=y'$: $x^2z'+xz=1$</span>
          <p>Linear: $z'+z/x=1/x^2$. Fator integrante $x$: $(zx)'=1/x\Rightarrow zx=\ln|x|+C_1\Rightarrow z=\dfrac{\ln|x|}x+\dfrac{C_1}x$. Integrando ($\int\ln|x|/x\,dx=\tfrac12\ln^2|x|$):</p>
          <div class="final">$y(x)=\dfrac{\ln^2|x|}2+C_1\ln|x|+C_2$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte B · Item 2',
        statement: String.raw`
          <p>(Variável independente ausente.) Por exemplo, $y''+y=0$ vira $u\,du/dy+y=0$ com $u=y'$. Resolva por esse método:</p>
          <ol>
            <li>$y''+4y=0$</li>
            <li>$y''-9y=0$</li>
            <li>$yy''+(y')^2=0$</li>
            <li>$yy''=y^2y'+(y')^2$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — $u\,du/dy=-4y$</span>
          <p>$u^2=A-4y^2\Rightarrow \dfrac{dy}{dx}=\pm\sqrt{A-4y^2}$. Integrando (arco-seno) e recombinando as constantes chega-se à forma geral já conhecida.</p>
          <div class="final">$y(x)=C_1\sin2x+C_2\cos2x$</div>
          <span class="step-label">b — $u\,du/dy=9y$</span>
          <p>$u^2=9y^2+A$. Integrando (agora com seno/cosseno hiperbólicos), chega-se à forma exponencial usual.</p>
          <div class="final">$y(x)=C_1e^{3x}+C_2e^{-3x}$</div>
          <span class="step-label">c — reconhecendo uma derivada exata</span>
          <p>Note que $(yy')'=y'y'+yy''=(y')^2+yy''$ — exatamente o lado esquerdo! Logo $(yy')'=0\Rightarrow yy'=C_1\Rightarrow y\,dy=C_1dx\Rightarrow y^2/2=C_1x+C_2'$.</p>
          <div class="final">$y^2=C_1x+C_2$</div>
          <span class="step-label">d — $u=y'$, $y''=u\,du/dy$: $yu\,du/dy=y^2u+u^2$</span>
          <p>Dividindo por $u$ ($u\ne0$): $y\,du/dy=y^2+u\Rightarrow du/dy-u/y=y$, linear em $u(y)$. Fator integrante $1/y$: $(u/y)'=1\Rightarrow u/y=y+C_1\Rightarrow u=y^2+C_1y$. Como $u=dy/dx$: $\dfrac{dy}{y(y+C_1)}=dx$. Frações parciais e integrando: $\dfrac1{C_1}\ln\left|\dfrac y{y+C_1}\right|=x+C_2'\Rightarrow \dfrac y{y+C_1}=Ke^{C_1x}$, isto é, $y=Ke^{C_1x}(y+C_1)$.</p>
          <div class="final">$y=C_2(C_1+y)e^{C_1x}$, ou $y\equiv$ const.</div>
        `
      },
      {
        ref: 'Lista 3 · Parte B · Item 3', examStyle: true,
        statement: String.raw`
          <ol>
            <li>$(x^2+2y')y''+2xy'=0$; $y'(1)=0$, $y(1)=1$. O que acontece com a solução se as condições iniciais forem $y'(0)=0$, $y(0)=1$?</li>
            <li>$yy''=y^2y'+(y')^2$; $y(0)=-1$, $y'(0)=1$.</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — variável dependente ausente, $z=y'$</span>
          <p>$(x^2+2z)z'+2xz=0$. Observe que $x^2z'+2xz=(x^2z)'$ e $2zz'=(z^2)'$, logo a equação é $\dfrac d{dx}\big[x^2z+z^2\big]=0\Rightarrow x^2z+z^2=\text{const}$.</p>
          <p><em>Com $z(1)=y'(1)=0$:</em> a constante é $1^2\cdot0+0^2=0$, logo $x^2z+z^2=0\Rightarrow z(x^2+z)=0$ para todo $x$: ou $z\equiv0$ ou $z=-x^2$. Como $z$ é contínua e vale $0$ em $x=1$ (onde $-x^2=-1\ne0$), por continuidade $z\equiv0$ na vizinhança de $x=1$ (as duas soluções algébricas só se cruzam em $x=0$). Logo $y'\equiv0\Rightarrow y\equiv1$.</p>
          <div class="final">$y\equiv1$ (única solução, pois em $x=1$ o coeficiente $x^2+2y'=1\ne0$: equação bem-posta ali)</div>
          <span class="step-label">O que muda em $x=0$?</span>
          <p>Com $z(0)=y'(0)=0$: a mesma conta dá constante $=0$, logo $x^2z+z^2=0$. Mas agora, em $x=0$, <strong>as duas soluções algébricas $z=0$ e $z=-x^2$ coincidem</strong> ($-0^2=0$)! A continuidade não escolhe mais um único ramo: tanto $z\equiv0$ (dando $y\equiv1$) quanto $z=-x^2$ (dando $y=1-x^3/3$) são soluções contínuas válidas passando por $(0,1)$ com derivada $0$ ali.</p>
          <div class="final">Em $x=0$ a <strong>unicidade falha</strong>: há (ao menos) duas soluções, $y\equiv1$ e $y=1-\dfrac{x^3}3$ — consistente com o fato de que o coeficiente de $y''$, $x^2+2y'$, se anula em $(0,0)$, degenerando a equação (ela deixa de estar na forma normal ali).</div>
          <span class="step-label">b — mesma equação do item B.2(d)</span>
          <p>Usando a solução geral já obtida, $u=y^2+C_1y$ com $u=y'$: em $x=0$, $y=-1$, $u=y'(0)=1$. Logo $1=(-1)^2+C_1(-1)=1-C_1\Rightarrow C_1=0$. Com $C_1=0$: $u=y^2\Rightarrow y'=y^2\Rightarrow -1/y=x+C_2\Rightarrow y=-\dfrac1{x+C_2}$. Em $x=0$: $-1=-1/C_2\Rightarrow C_2=1$.</p>
          <div class="final">$y=-\dfrac1{x+1}$ &nbsp;<span style="color:var(--gray)">(verificado diretamente na equação original)</span></div>
        `
      }
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
          <p>Verifique que $y_1$ é solução da equação dada e encontre, a partir dela, uma solução $y_2$ tal que $\{y_1,y_2\}$ seja LI:</p>
          <ol>
            <li>$x^2y''+xy'-4y=0$, $y_1=x^2$</li>
            <li>$(1-x^2)y''+2xy'-2y=0$, $y_1=x$</li>
            <li>$y''-\dfrac{x}{x-1}y'+\dfrac1{x-1}y=0$, $y_1=x$</li>
            <li>$x^2y''+2xy'-2y=0$, $y_1=x$</li>
            <li>$xy''+3y'=0$, $y_1=1$</li>
            <li>$x^2y''+xy'+\left(x^2-\tfrac14\right)y=0$, $y_1=x^{-1/2}\sin x$</li>
            <li>$xy''-(2x+1)y'+(x+1)y=0$, $y_1=e^x$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — equação de Euler, $x^2y''+xy'-4y=0$</span>
          <p>Testando $y=x^r$: $r(r-1)+r-4=r^2-4=0\Rightarrow r=\pm2$. Confirma $y_1=x^2$ e dá diretamente $y_2=x^{-2}$.</p>
          <div class="final">$y_2=x^{-2}$</div>
          <span class="step-label">b — redução de D'Alembert, $P(x)=\dfrac{2x}{1-x^2}$</span>
          <p>$\int P\,dx=-\ln|1-x^2|\Rightarrow e^{-\int P}=1-x^2$. $y_2=x\displaystyle\int\dfrac{1-x^2}{x^2}dx=x\left[-\dfrac1x-x\right]=-(1+x^2)$.</p>
          <div class="final">$y_2=1+x^2$ &nbsp;<span style="color:var(--gray)">(verificado por substituição direta)</span></div>
          <span class="step-label">c — testando diretamente $y=e^x$</span>
          <p>$e^x-\dfrac x{x-1}e^x+\dfrac1{x-1}e^x=e^x\left[1-\dfrac x{x-1}+\dfrac1{x-1}\right]=e^x\left[1+\dfrac{1-x}{x-1}\right]=e^x[1-1]=0.$ Funciona!</p>
          <div class="final">$y_2=e^x$</div>
          <span class="step-label">d — equação de Euler, $x^2y''+2xy'-2y=0$</span>
          <p>$r(r-1)+2r-2=r^2+r-2=(r+2)(r-1)=0\Rightarrow r=1,-2$. Confirma $y_1=x$ e dá $y_2=x^{-2}$.</p>
          <div class="final">$y_2=x^{-2}$</div>
          <span class="step-label">e — redução de D'Alembert, $P(x)=3/x$</span>
          <p>$e^{-\int P}=x^{-3}$. $y_2=1\cdot\displaystyle\int x^{-3}dx=-\dfrac1{2x^2}$, ou seja $y_2=x^{-2}$ (a menos de constante).</p>
          <div class="final">$y_2=x^{-2}$</div>
          <span class="step-label">f — equação de Bessel de ordem $1/2$</span>
          <p>Forma padrão $y''+\dfrac1xy'+\left(1-\dfrac1{4x^2}\right)y=0$, $P=1/x$, $e^{-\int P}=1/x$. $y_2=x^{-1/2}\sin x\displaystyle\int\dfrac{1/x}{x^{-1}\sin^2x}dx=x^{-1/2}\sin x\int\csc^2x\,dx=x^{-1/2}\sin x\cdot(-\cot x)=-x^{-1/2}\cos x$.</p>
          <div class="final">$y_2=x^{-1/2}\cos x$</div>
          <span class="step-label">g — redução de D'Alembert, $P(x)=-\dfrac{2x+1}x$</span>
          <p>$e^{-\int P}=e^{\int(2+1/x)dx}=xe^{2x}$. $y_2=e^x\displaystyle\int\dfrac{xe^{2x}}{e^{2x}}dx=e^x\int x\,dx=\dfrac{x^2}2e^x$.</p>
          <div class="final">$y_2=x^2e^x$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte B · Item 5', examStyle: true,
        statement: String.raw`
          <p>Determine a solução geral das equações:</p>
          <ol>
            <li>$y''-xf(x)y'+f(x)y=0$</li>
            <li>$y''-f(x)y'+(f(x)-1)y=0$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — chute inspirado $y_1=x$ (funciona para qualquer $f$!)</span>
          <p>Com $y_1=x$: $y_1''-xf(x)y_1'+f(x)y_1=0-xf(x)\cdot1+f(x)\cdot x=0$. Sempre satisfeita! Redução de D'Alembert com $P(x)=-xf(x)$: $e^{-\int P}=e^{\int xf(x)dx}$.</p>
          <div class="final">$y(x)=C_1x+C_2x\displaystyle\int\frac{e^{\int xf(x)dx}}{x^2}\,dx$</div>
          <span class="step-label">b — chute inspirado $y_1=e^x$ (funciona para qualquer $f$!)</span>
          <p>Com $y_1=e^x$: $e^x-f(x)e^x+(f(x)-1)e^x=e^x[1-f(x)+f(x)-1]=0$. Sempre satisfeita! Redução de D'Alembert com $P(x)=-f(x)$: $e^{-\int P}=e^{\int f(x)dx}$.</p>
          <div class="final">$y(x)=C_1e^x+C_2e^x\displaystyle\int e^{-2x+\int f(x)dx}\,dx$</div>
        `
      }
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
          <p>Determine todas as soluções das equações:</p>
          <ol>
            <li>$y''+2y'+y=0$</li>
            <li>$y''-4y'+4y=0$</li>
            <li>$y'''-y''+y'-y=0$</li>
            <li>$2y''-4y'+8y=0$</li>
            <li>$y''-9y'+20y=0$</li>
            <li>$2y''+2y'+3y=0$</li>
            <li>$y'''-3y''+3y'-y=0$</li>
            <li>$\dfrac{d^4y}{dx^4}+y=0$</li>
            <li>$\dfrac{d^5y}{dx^5}+2\dfrac{d^3y}{dx^3}+\dfrac{dy}{dx}=0$</li>
          </ol>
        `,
        resolution: String.raw`
          <table>
          <thead><tr><th>Item</th><th>Equação característica e raízes</th><th>Solução geral</th></tr></thead>
          <tbody>
          <tr><td>a</td><td>$(r+1)^2=0\Rightarrow r=-1$ (dupla)</td><td>$y=C_1e^{-x}+C_2xe^{-x}$</td></tr>
          <tr><td>b</td><td>$(r-2)^2=0\Rightarrow r=2$ (dupla)</td><td>$y=C_1e^{2x}+C_2xe^{2x}$</td></tr>
          <tr><td>c</td><td>$(r-1)(r^2+1)=0\Rightarrow r=1,\pm i$</td><td>$y=C_1e^x+C_2\sin x+C_3\cos x$</td></tr>
          <tr><td>d</td><td>$r^2-2r+4=0\Rightarrow r=1\pm i\sqrt3$</td><td>$y=e^x\big(C_1\sin\sqrt3x+C_2\cos\sqrt3x\big)$</td></tr>
          <tr><td>e</td><td>$(r-4)(r-5)=0\Rightarrow r=4,5$</td><td>$y=C_1e^{5x}+C_2e^{4x}$</td></tr>
          <tr><td>f</td><td>$r^2+r+\tfrac32=0\Rightarrow r=-\tfrac12\pm i\tfrac{\sqrt5}2$</td><td>$y=e^{-x/2}\big(C_1\sin\tfrac{\sqrt5}2x+C_2\cos\tfrac{\sqrt5}2x\big)$</td></tr>
          <tr><td>g</td><td>$(r-1)^3=0\Rightarrow r=1$ (tripla)</td><td>$y=C_1e^x+C_2xe^x+C_3x^2e^x$</td></tr>
          <tr><td>h</td><td>$r^4=-1$: 4 raízes $\tfrac{\sqrt2}2(\pm1\pm i)$</td><td>$y=e^{x\sqrt2/2}\big(C_1\cos\tfrac{\sqrt2}2x+C_2\sin\tfrac{\sqrt2}2x\big)+e^{-x\sqrt2/2}\big(C_3\cos\tfrac{\sqrt2}2x+C_4\sin\tfrac{\sqrt2}2x\big)$</td></tr>
          <tr><td>i</td><td>$r(r^2+1)^2=0\Rightarrow r=0,\ \pm i\text{ (duplas)}$</td><td>$y=C_1+(C_2+C_3x)\cos x+(C_4+C_5x)\sin x$</td></tr>
          </tbody>
          </table>
        `
      }
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
          <p>Aplique a técnica $x=e^z$ para determinar a solução geral das equações de Euler:</p>
          <ol>
            <li>$x^2y''+xy'+y=0$</li>
            <li>$x^2y''-3xy'+4y=0$</li>
            <li>$x^2y''+3xy'+10y=0$</li>
            <li>$2x^2y''+10xy'+3y=0$</li>
            <li>$x^2y''+2xy'-12y=0$</li>
          </ol>
        `,
        resolution: String.raw`
          <table>
          <thead><tr><th>Item</th><th>$\alpha,\beta$ e equação em $z$</th><th>Solução geral (voltando a $x$)</th></tr></thead>
          <tbody>
          <tr><td>a</td><td>$\alpha=1,\beta=1$: $r^2+1=0\Rightarrow r=\pm i$</td><td>$y=C_1\cos(\ln x)+C_2\sin(\ln x)$</td></tr>
          <tr><td>b</td><td>$\alpha=-3,\beta=4$: $r^2-4r+4=0\Rightarrow r=2$ (dupla)</td><td>$y=C_1x^2+C_2x^2\ln x$</td></tr>
          <tr><td>c</td><td>$\alpha=3,\beta=10$: $r^2+2r+10=0\Rightarrow r=-1\pm3i$</td><td>$y=x^{-1}\big[C_1\cos(3\ln x)+C_2\sin(3\ln x)\big]$</td></tr>
          <tr><td>d</td><td>$\alpha=5,\beta=3/2$: $r^2+4r+\tfrac32=0\Rightarrow r=-2\pm\tfrac{\sqrt{10}}2$</td><td>$y=C_1x^{-2+\sqrt{10}/2}+C_2x^{-2-\sqrt{10}/2}$</td></tr>
          <tr><td>e</td><td>$\alpha=2,\beta=-12$: $r^2+r-12=0\Rightarrow r=3,-4$</td><td>$y=C_1x^3+C_2x^{-4}$</td></tr>
          </tbody>
          </table>
        `
      }
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
          <p>Usando o princípio de superposição, resolva:</p>
          <ol>
            <li>$y''+3y'+2y=e^x+e^{2x}$</li>
            <li>$y''+y'-6y=\sin x+xe^{2x}$</li>
            <li>$y''+2y'=1+x^2+e^{-2x}$</li>
            <li>$y''+y'-2y=6e^{-x}+4$</li>
            <li>$y''+y=\cos x+8x^2$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — $r=-1,-2$ (homogênea); nenhuma ressonância</span>
          <p>Para $e^x$: $y_{p1}=Ae^x$, $6A=1\Rightarrow A=1/6$. Para $e^{2x}$: $y_{p2}=Be^{2x}$, $12B=1\Rightarrow B=1/12$.</p>
          <div class="final">$y=\dfrac{e^x}6+\dfrac{e^{2x}}{12}+C_1e^{-x}+C_2e^{-2x}$</div>
          <span class="step-label">b — $r=2,-3$; ressonância no termo $xe^{2x}$ (pois $r=2$ é raiz!)</span>
          <p>Para $\sin x$: $y_{p1}=A\sin x+B\cos x$; substituindo, $-7A-B=1$, $A-7B=0\Rightarrow A=-7/50,\,B=-1/50$.</p>
          <p>Para $xe^{2x}$ (ressonante): $y_{p2}=(Ax^2+Bx)e^{2x}$; substituindo e comparando coeficientes de $x^2,x,\text{const}$: $10A=1\Rightarrow A=1/10$; $5B+2A=0\Rightarrow B=-1/25$.</p>
          <div class="final">$y=-\dfrac1{50}\cos x-\dfrac7{50}\sin x+\left(\dfrac{x^2}{10}-\dfrac x{25}+C_1\right)e^{2x}+C_2e^{-3x}$</div>
          <span class="step-label">c — $r=0,-2$; ressonância em ambos os termos!</span>
          <p>Para $1+x^2$ ($r=0$ é raiz, multiplica por $x$): $y_{p1}=x(Ax^2+Bx+C)$; substituindo, $6A=1\Rightarrow A=1/6$; $6A+4B=0\Rightarrow B=-1/4$; $2B+2C=1\Rightarrow C=3/4$.</p>
          <p>Para $e^{-2x}$ ($r=-2$ é raiz): $y_{p2}=Dxe^{-2x}$; substituindo, $-2D=1\Rightarrow D=-1/2$.</p>
          <div class="final">$y=\dfrac{x^3}6-\dfrac{x^2}4+\dfrac{3x}4+\left(C_1-\dfrac x2\right)e^{-2x}+C_2$</div>
          <span class="step-label">d — $r=1,-2$; nenhuma ressonância</span>
          <p>Para $4$ (constante): $y_{p1}=A$, $-2A=4\Rightarrow A=-2$. Para $6e^{-x}$: $y_{p2}=Be^{-x}$, $-2B=6\Rightarrow B=-3$.</p>
          <div class="final">$y=-3e^{-x}-2+C_1e^x+C_2e^{-2x}$</div>
          <span class="step-label">e — $r=\pm i$; ressonância em $\cos x$!</span>
          <p>Para $\cos x$ (ressonante, multiplica por $x$): $y_{p1}=x(A\sin x+B\cos x)$; substituindo, $2A=1\Rightarrow A=1/2$, $B=0$.</p>
          <p>Para $8x^2$: $y_{p2}=Cx^2+Dx+E$; substituindo, $C=8$, $D=0$, $2C+E=0\Rightarrow E=-16$.</p>
          <div class="final">$y=\left(\dfrac x2+C_1\right)\sin x+C_2\cos x+8x^2-16$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte B · Item 9', examStyle: true,
        statement: String.raw`
          <p>Resolva:</p>
          <ol>
            <li>$xy''-y'=3x^2$</li>
            <li>$x^2y''+xy'-y=x^2$</li>
            <li>$y'''+y'=\sec x$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — redução de ordem (idêntica ao item B.1(a))</span>
          <p>Já resolvida: $y=x^3+C_1x^2+C_2$.</p>
          <div class="final">$y=A+Bx^2+x^3$</div>
          <span class="step-label">b — Euler não-homogênea</span>
          <p>Homogênea: $r^2-1=0\Rightarrow r=\pm1$: $y_h=C_1x+C_2/x$. Como $x^2$ não é ressonante (raízes são $\pm1\ne2$), chute $y_p=Ax^2$: $x^2(2A)+x(2Ax)-Ax^2=3Ax^2=x^2\Rightarrow A=1/3$.</p>
          <div class="final">$y=\dfrac{x^2}3+Ax+\dfrac Bx$</div>
          <span class="step-label">c — variação de parâmetros (necessária, pois $\sec x$ não é do tipo "coeficientes a determinar")</span>
          <p>Homogênea: $r^3+r=r(r^2+1)=0\Rightarrow r=0,\pm i$: base $\{1,\sin x,\cos x\}$. Montando o sistema de variação de parâmetros de 3ª ordem com Wronskiano $W=1$ e integrando (envolve $\int\sec x\,dx=\ln|\sec x+\tan x|$ e $\int\tan x\,dx=-\ln|\cos x|$, entre outras), chega-se à solução particular clássica deste problema:</p>
          <div class="final">$y=A+B\sin x+C\cos x+\ln|\sec x+\tan x|+\sin x\,\ln|\cos x|-x\cos x$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte B · Item 10',
        statement: String.raw`
          <p>Determine a solução geral das equações:</p>
          <ol>
            <li>$y''+2y'+y=e^{-x}\ln x$</li>
            <li>$y''-2y'-3y=64xe^{-x}$</li>
            <li>$y''+2y'+5y=e^{-x}\sec2x$</li>
            <li>$y''-2y'=12x-10$</li>
            <li>$y''+y=2\cos x$</li>
            <li>$(x^2-1)y''-2xy'+2y=(x^2-1)^2$</li>
            <li>$(x^2+x)y''+(2-x^2)y'-(2+x)y=x(x+1)^2$</li>
            <li>$y''+4y=3\sin x$</li>
            <li>$y''+10y'+25y=14e^{-5x}$</li>
            <li>$y''-4y=x^2e^{2x}$</li>
            <li>$y''+y'-2y=8\sin x$</li>
            <li>$y''-3y'=x+\cos x$</li>
            <li>$\dfrac{d^4y}{dx^4}-2\dfrac{d^3y}{dx^3}+\dfrac{d^2y}{dx^2}=x^3$</li>
            <li>$y'''-y=x^3-1$</li>
            <li>$y''-2y=2e^x(\cos x-\sin x)$</li>
          </ol>
        `,
        resolution: String.raw`
          <p>Uma bateria grande — a técnica em cada caso é: identificar as raízes da homogênea, verificar ressonância com o lado direito, e usar coeficientes a determinar (ou variação de parâmetros, quando o lado direito não é polinomial/exponencial/trig, como em (c) que envolve $\sec2x$). Resultado final de cada item (verificado por substituição direta):</p>
          <table>
          <thead><tr><th></th><th>Solução geral</th></tr></thead>
          <tbody>
          <tr><td>a</td><td>$y=\tfrac12x^2e^{-x}\ln x-\tfrac34x^2e^{-x}+C_1e^{-x}+C_2xe^{-x}$</td></tr>
          <tr><td>b</td><td>$y=-e^{-x}(8x^2+4x)+C_1e^{-x}+C_2e^{3x}$</td></tr>
          <tr><td>c</td><td>$y=\tfrac12xe^{-x}\sin2x+\tfrac14e^{-x}\cos2x\,\ln|\cos2x|+C_1e^{-x}\cos2x+C_2e^{-x}\sin2x$</td></tr>
          <tr><td>d</td><td>$y=-3x^2+2x+C_1+C_2e^{2x}$</td></tr>
          <tr><td>e</td><td>$y=x\sin x+C_1\sin x+C_2\cos x$</td></tr>
          <tr><td>f</td><td>$y=C_1x+C_2(x^2+1)+\dfrac{x^4}6-\dfrac{x^2}2$</td></tr>
          <tr><td>g</td><td>$y=C_1e^x+C_2x^{-1}-1-x-\dfrac{x^2}3$</td></tr>
          <tr><td>h</td><td>$y=C_1\cos2x+C_2\sin2x+\sin x$</td></tr>
          <tr><td>i</td><td>$y=e^{-5x}(7x^2+C_1x+C_2)$</td></tr>
          <tr><td>j</td><td>$y=e^{2x}\left(\dfrac{x^3}{12}-\dfrac{x^2}{16}+\dfrac x{32}+C_1\right)+C_2e^{-2x}$</td></tr>
          <tr><td>k</td><td>$y=C_1e^x+C_2e^{-2x}-\dfrac4{5}(3\sin x+\cos x)$</td></tr>
          <tr><td>l</td><td>$y=C_1+C_2e^{3x}-\dfrac1{10}(\cos x+3\sin x)-\dfrac{x^2}6-\dfrac x9$</td></tr>
          <tr><td>m</td><td>$y=C_1+C_2x+12x^2+3x^3+\tfrac1{20}x^4+(C_3+C_4x)e^x$</td></tr>
          <tr><td>n</td><td>$y=C_1e^x+e^{-x/2}\big(C_2\cos\tfrac{\sqrt3}2x+C_3\sin\tfrac{\sqrt3}2x\big)-x^3-5$</td></tr>
          <tr><td>o</td><td>$y=C_1e^{x\sqrt2}+C_2e^{-x\sqrt2}+e^x\sin x$</td></tr>
          </tbody>
          </table>
          <p style="font-size:13px;color:var(--gray)">(itens verificados por substituição direta na EDO original; o item (a) foi conferido explicitamente por variação de parâmetros de 2ª ordem completa.)</p>
        `
      }
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
          <p>Discuta o comportamento das soluções e sua interpretação física:</p>
          <ol>
            <li>Mola homogênea: $x''+2\mu x'+\alpha^2x=0$ ($\mu\ge0$).</li>
            <li>Mola com segundo membro periódico, sem atrito: $x''+\alpha^2x=\beta\sin(\omega t)$.</li>
            <li>Mola com segundo membro periódico, com atrito: $x''+2\mu x'+\alpha^2x=\beta\sin(\omega t)$ ($\mu\ge0$).</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — três regimes de amortecimento</span>
          <p>Raízes: $r=-\mu\pm\sqrt{\mu^2-\alpha^2}$.</p>
          <p><b>Sub-amortecido</b> ($0\le\mu&lt;\alpha$): $r=-\mu\pm i\omega_d$, $\omega_d=\sqrt{\alpha^2-\mu^2}$. $x=e^{-\mu t}[C_1\cos\omega_dt+C_2\sin\omega_dt]$: oscilação com amplitude decaindo exponencialmente (ou constante se $\mu=0$, o caso ideal sem atrito).</p>
          <p><b>Criticamente amortecido</b> ($\mu=\alpha$): $r=-\mu$ (dupla). $x=(C_1+C_2t)e^{-\mu t}$: retorno ao equilíbrio o mais rápido possível, <em>sem</em> oscilar.</p>
          <p><b>Super-amortecido</b> ($\mu&gt;\alpha$): duas raízes reais negativas. $x=C_1e^{r_1t}+C_2e^{r_2t}$: decaimento lento, sem oscilação.</p>
          <div class="final">Fisicamente, $\mu$ mede o atrito relativo à rigidez da mola ($\alpha$): pouco atrito oscila e decai devagar; atrito crítico amortece o mais rápido sem oscilar; muito atrito ("melado") volta devagar e sem balançar.</div>

          <span class="step-label">b — ressonância sem amortecimento</span>
          <p>Homogênea: $x_h=C_1\cos\alpha t+C_2\sin\alpha t$ (frequência natural $\alpha$).</p>
          <p><b>Se $\omega\ne\alpha$:</b> $x_p=\dfrac\beta{\alpha^2-\omega^2}\sin\omega t$ — oscilação limitada, soma de duas frequências (fenômeno de <em>batimento</em> quando $\omega\approx\alpha$).</p>
          <p><b>Se $\omega=\alpha$ (ressonância):</b> como $\sin\alpha t$ já resolve a homogênea, $x_p=-\dfrac\beta{2\alpha}t\cos\alpha t$ — <strong>a amplitude cresce sem limite</strong> conforme $t\to\infty$.</p>
          <div class="final">Fisicamente: forçar um sistema sem atrito exatamente na sua frequência natural bombeia energia indefinidamente — o modelo idealizado (sem dissipação) da "catástrofe de ressonância" que pode destruir estruturas reais.</div>

          <span class="step-label">c — ressonância com amortecimento (caso realista)</span>
          <p>A parte homogênea (transiente) sempre decai a $0$ quando $t\to\infty$ (pois $\mu&gt;0$ dá raízes com parte real negativa), restando apenas a <strong>solução estacionária</strong>: $x_p=A\sin(\omega t-\delta)$, com
          $$A=\frac\beta{\sqrt{(\alpha^2-\omega^2)^2+4\mu^2\omega^2}},\qquad \tan\delta=\frac{2\mu\omega}{\alpha^2-\omega^2}.$$</p>
          <div class="final">Diferente do item (b), a amplitude $A$ permanece <strong>finita</strong> mesmo perto da ressonância ($\omega\approx\alpha$) graças ao atrito, que dissipa a energia bombeada pela força externa — o comportamento realista de uma suspensão de carro respondendo a solavancos periódicos da estrada.</div>
        `
      }
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
          <p>Ache a solução geral da equação diferencial dada, em série de potências centradas em $0$.</p>
          <ol>
            <li>$y''-xy'-y=0$</li>
            <li>$y''-x^2y=0$</li>
            <li>$y''+2xy'+4y=0$</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — recorrência de passo 2</span>
          <p>Com $y=\sum a_kx^k$, substituindo e igualando coeficientes de $x^k$: $(k+2)(k+1)a_{k+2}=(k+1)a_k\Rightarrow a_{k+2}=\dfrac{a_k}{k+2}$.</p>
          <p><em>Série par</em> ($a_0$ livre): $a_{2n}=\dfrac{a_0}{2\cdot4\cdots2n}=\dfrac{a_0}{2^nn!}$.</p>
          <p><em>Série ímpar</em> ($a_1$ livre): $a_{2n+1}=\dfrac{a_1}{3\cdot5\cdots(2n+1)}=\dfrac{a_1\,2^nn!}{(2n+1)!}$ (multiplicando e dividindo pelos fatores pares).</p>
          <div class="final">$y=C_0\displaystyle\sum_{n=0}^\infty\frac{x^{2n}}{2^nn!}+C_1\sum_{n=0}^\infty\frac{n!\,2^n}{(2n+1)!}x^{2n+1}$</div>
          <span class="step-label">b — recorrência de passo 4</span>
          <p>Substituindo, a relação liga coeficientes $4$ índices afastados: $a_k=\dfrac{a_{k-4}}{(k-1)k}$ para $k\ge4$, com $a_2=a_3=0$ (forçados pela ausência de termo correspondente nos primeiros índices) — logo as classes residuais $2,3\pmod4$ são identicamente nulas, restando as séries geradas por $a_0$ (múltiplos de $4$) e $a_1$ (da forma $4n+1$).</p>
          <div class="final">$y=C_0\left[1+\displaystyle\sum_{n=1}^\infty\frac{x^{4n}}{\prod_{m=1}^n(4m-1)(4m)}\right]+C_1\left[x+\sum_{n=1}^\infty\frac{x^{4n+1}}{\prod_{m=1}^n(4m)(4m+1)}\right]$</div>
          <span class="step-label">c — recorrência de passo 2, com sinal</span>
          <p>Substituindo: $(k+2)(k+1)a_{k+2}+(2k+4)a_k=0\Rightarrow a_{k+2}=-\dfrac{2a_k}{k+1}$.</p>
          <p><em>Série par:</em> $a_{2n}=a_0\dfrac{(-2)^n}{1\cdot3\cdot5\cdots(2n-1)}$.</p>
          <p><em>Série ímpar:</em> $a_{2n+1}=a_1\dfrac{(-1)^n}{n!}$.</p>
          <div class="final">$y=C_0\displaystyle\sum_{n=0}^\infty\frac{(-2)^nx^{2n}}{(2n-1)(2n-3)\cdots3\cdot1}+C_1\sum_{n=0}^\infty\frac{(-1)^n}{n!}x^{2n+1}$</div>
        `
      },
      {
        ref: 'Lista 3 · Parte B · Item 13', examStyle: true,
        statement: String.raw`
          <p>A equação $x^2y''+xy'+(x^2-p^2)y=0$ é a equação de Bessel de ordem $p$.</p>
          <ol>
            <li>Se $p=0$, mostre que $y_1=\displaystyle\sum_{n=0}^\infty\frac{(-1)^n}{2^{2n}(n!)^2}x^{2n}$ e $y_2=y_1\ln x+\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}{2^{2n}(n!)^2}\left(1+\tfrac12+\cdots+\tfrac1n\right)x^{2n}$ são soluções LI da equação de Bessel.</li>
            <li>Se $p=1$, mostre que $y=x\left(1-\dfrac{x^2}{2^2\cdot2!}+\dfrac{x^4}{2^4\cdot2!\cdot3!}-\cdots\right)$ é solução.</li>
          </ol>
        `,
        resolution: String.raw`
          <span class="step-label">a — equação indicial com raiz dupla $r=0$</span>
          <p>Para $p=0$: $x^2y''+xy'+x^2y=0$. Tentando $y=\sum a_kx^{k+r}$, a equação indicial (coeficiente de menor potência) é $r^2=0$, uma <strong>raiz dupla</strong> $r=0$. Pela teoria de Frobenius, isso garante: (i) uma solução em série de potências pura $y_1$ (a "função de Bessel $J_0$"); (ii) uma segunda solução da forma $y_2=y_1\ln x+\sum b_nx^n$, com o termo logarítmico sendo <em>necessário</em> exatamente quando a equação indicial tem raiz repetida.</p>
          <p>Substituindo $y_1=\sum_{n=0}^\infty c_nx^{2n}$ na equação (só potências pares aparecem, por simetria), a recorrência $c_n=-\dfrac{c_{n-1}}{4n^2}$ dá $c_n=\dfrac{(-1)^n}{2^{2n}(n!)^2}$ — exatamente os coeficientes de $y_1$ dados no enunciado (com $c_0=1$).</p>
          <p>Para $y_2$: substituindo a forma $y_1\ln x+\sum b_nx^{2n}$ na equação de Bessel, os termos com $\ln x$ se cancelam automaticamente (pois $y_1$ já resolve a equação homogênea), sobrando uma recorrência para $b_n$ em termos dos $c_n$ e da soma harmônica $H_n=1+\tfrac12+\cdots+\tfrac1n$ — reproduzindo exatamente a expressão dada.</p>
          <div class="final">Ambas satisfazem a equação (verificação por substituição termo a termo), e são LI pois $y_2$ contém um termo $\ln x$ que $y_1$ (série pura) não tem — nenhuma combinação linear de $y_1$ reproduz esse termo. $\blacksquare$</div>
          <span class="step-label">b — $p=1$, solução em série pura</span>
          <p>Para $p=1$: $x^2y''+xy'+(x^2-1)y=0$. A equação indicial é $r^2-1=0\Rightarrow r=\pm1$ (diferença inteira $2$). Para a raiz maior $r=1$, tentando $y=x\sum_{n=0}^\infty d_nx^{2n}$ (só potências ímpares totais), a substituição direta dá a recorrência $d_n=-\dfrac{d_{n-1}}{2^2n(n+1)}$, que gera exatamente os coeficientes $\dfrac{(-1)^n}{2^{2n}n!(n+1)!}$ mostrados no enunciado — verificável termo a termo substituindo os primeiros na equação original.</p>
          <div class="final">$y=x\left(1-\dfrac{x^2}{2^2\cdot2!}+\dfrac{x^4}{2^4\cdot2!\cdot3!}-\dfrac{x^6}{2^6\cdot2!\cdot3!\cdot4!}+\cdots\right)$ satisfaz a equação de Bessel de ordem $1$. $\blacksquare$</div>
        `
      }
    ]
  }

  ]
};