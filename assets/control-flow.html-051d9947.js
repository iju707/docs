import{_ as i,r as c,o as u,c as d,a as s,b as n,d as a,w as o,e as t}from"./app-95e21c4a.js";const r={},k={href:"https://dart.dev/language/control-flow",target:"_blank",rel:"noopener noreferrer"},v=t("<p>Dart 코드에서 아래와 같은 상태흐름 제어를 사용할 수 있습니다.</p><ul><li><code>if</code>와 <code>else</code></li><li><code>for</code> 반복구</li><li><code>while</code>와 <code>do-while</code> 반복구</li><li><code>break</code>와 <code>continue</code></li><li><code>switch</code>와 <code>case</code></li><li><code>assert</code></li></ul>",2),m=s("code",null,"try-catch",-1),b=s("code",null,"throw",-1),h=s("h2",{id:"if-and-else",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#if-and-else","aria-hidden":"true"},"#"),n(" if와 else")],-1),g=s("code",null,"if",-1),_=s("code",null,"else",-1),f=s("br",null,null,-1),w=t(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    you<span class="token punctuation">.</span><span class="token function">bringRainCoat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSnowing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    you<span class="token punctuation">.</span><span class="token function">wearJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    car<span class="token punctuation">.</span><span class="token function">putTopDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y=s("br",null,null,-1),x=t(`<h2 id="for-loops" tabindex="-1"><a class="header-anchor" href="#for-loops" aria-hidden="true">#</a> for 반복구</h2><p>표준 <code>for</code> 반복구를 활용하여 반복할 수 있습니다.<br> 예로 들면,</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Dart is fun&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;!&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dart <code>for</code> 반복구 내부의 클로저는 인덱스의 값을 캡쳐하여 JavaScript에서 발견되는 일반적인 함정을 회피할 수 있습니다.<br> 예로 들면 다음과 같은 상황입니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    callbacks<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">final</span> c <span class="token keyword">in</span> callbacks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예상한대로, 출력은 <code>0</code>과 <code>1</code> 입니다.<br> 대조적으로 JavaScript에서는 <code>2</code>와 <code>2</code> 입니다.</p>`,6),E=s("code",null,"for-in",-1),D={href:"https://dart.dev/guides/libraries/library-tour#iteration",target:"_blank",rel:"noopener noreferrer"},O=t(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">final</span> candidate <span class="token keyword">in</span> candidates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    candidate<span class="token punctuation">.</span><span class="token function">interview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C={class:"hint-container tip"},S=s("p",{class:"hint-container-title"},"Tips",-1),L=s("code",null,"for-in",-1),N={href:"https://dart.dev/codelabs/iterables",target:"_blank",rel:"noopener noreferrer"},P={href:"https://api.dart.dev/stable/dart-core/Iterable/forEach.html",target:"_blank",rel:"noopener noreferrer"},R=s("code",null,"forEach()",-1),I=t(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> collection <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
collection<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>print<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 2 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while-and-do-while" tabindex="-1"><a class="header-anchor" href="#while-and-do-while" aria-hidden="true">#</a> while과 do-while</h2><p><code>while</code> 반복은 반복전 조건식을 계산합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>do-while</code> 반복구는 반복 후 조건식을 계산합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token function">printLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">atEndOfPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="break-and-continue" tabindex="-1"><a class="header-anchor" href="#break-and-continue" aria-hidden="true">#</a> break와 continue</h2><p><code>break</code>로 반복을 중단할 수 있습니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shutDownRequested</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token function">processIncomingRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>continue</code>로 생략하고 다음 반복으로 이동합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> candidates<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> candidate <span class="token operator">=</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>candidate<span class="token punctuation">.</span>yearsExperience <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    candidate<span class="token punctuation">.</span><span class="token function">interview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),A={href:"https://api.dart.dev/stable/dart-core/Iterable-class.html",target:"_blank",rel:"noopener noreferrer"},B=t(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>candidates
    <span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> c<span class="token punctuation">.</span>yearsExperience <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> c<span class="token punctuation">.</span><span class="token function">interview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch-and-case" tabindex="-1"><a class="header-anchor" href="#switch-and-case" aria-hidden="true">#</a> Swtich와 case</h2>`,2),W=s("code",null,"==",-1),V=s("br",null,null,-1),q=s("code",null,"==",-1),J=s("br",null,null,-1),T=s("code",null,"switch",-1),U=t(`<p>각각의 공백이 아닌 <code>case</code> 조건은 규칙처럼 <code>break</code> 명령문으로 끝납니다.<br> 또다른 공백이 아닌 <code>case</code> 조검에 대한 유효한 종료방법은 <code>continue</code>, <code>throw</code>, <code>return</code> 명령문이 있습니다.</p><p><code>case</code> 조건에 일치하지 않는 코드를 실행할때는 <code>default</code> 조건을 사용합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> command <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;OPEN&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;CLOSED&#39;</span></span><span class="token punctuation">:</span>
        <span class="token function">executeClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;PENDING&#39;</span></span><span class="token punctuation">:</span>
        <span class="token function">executePending</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;APPROVED&#39;</span></span><span class="token punctuation">:</span>
        <span class="token function">executeApproved</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;DENIED&#39;</span></span><span class="token punctuation">:</span>
        <span class="token function">executeDenied</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;OPEN&#39;</span></span><span class="token punctuation">:</span>
        <span class="token function">executeOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token function">executeUnknown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 예제는 <code>case</code> 조건에 <code>break</code> 명령문을 생략했기때문에 에러가 발생하게 됩니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> command <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;OPEN&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;OPEN&#39;</span></span><span class="token punctuation">:</span>
        <span class="token function">executeOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 에러 : break 누락</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;CLOSED&#39;</span></span><span class="token punctuation">:</span>
        <span class="token function">executeClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나, Dart에서 공백 <code>case</code> 조건을 지원하기 때문에 이후 코드를 실행하는 형태(fall-through)가 가능합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> command <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;CLOSED&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;CLOSED&#39;</span></span><span class="token punctuation">:</span> <span class="token comment">// 공백 case는 이후 코드 처리</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;NOW_CLOSED&#39;</span></span><span class="token punctuation">:</span>
        <span class="token comment">// CLOSED와 NOW_CLOSED 둘다 실행됨</span>
        <span class="token function">executeNowClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이후 코드를 실행하는 형태를 원할 경우 <code>continue</code> 명령문과 라벨을 사용하면 됩니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> command <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;CLOSED&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;CLOSED&#39;</span></span><span class="token punctuation">:</span>
        <span class="token function">executeClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">continue</span> nowClosed<span class="token punctuation">;</span>
        <span class="token comment">// nowClosed 라벨로 이동하여 실행을 계속 합니다.</span>

        <span class="token comment">//... </span>
    nowClosed<span class="token punctuation">:</span>
    <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">&#39;NOW_CLOSED&#39;</span></span><span class="token punctuation">:</span>
        <span class="token comment">// CLOSED와 NOW_CLOSED 둘다 실행됨</span>
        <span class="token function">executeNowClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>case</code> 조건은 로컬 변수를 가질 수 있으며 해당 조건 범주 내에서만 사용할 수 있습니다.</p><h2 id="assert" tabindex="-1"><a class="header-anchor" href="#assert" aria-hidden="true">#</a> assert</h2><p>개발중에 assert 명령문 - <code>assert(조건, 선택메시지)</code>를 사용해서 부울 조건이 false이면 정상 동작을 방해할 수 있습니다.<br> 이 문서 전반적으로 assert 명령문의 예제가 있으며, 여기 더 보여드리겠습니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 변수가 null이 아닌 값을 확인합니다.</span>
<span class="token keyword">assert</span><span class="token punctuation">(</span>text <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 값이 100 미만임을 확인합니다.</span>
<span class="token keyword">assert</span><span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// https URL임을 확인합니다.</span>
<span class="token keyword">assert</span><span class="token punctuation">(</span>urlString<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;https&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),j=s("code",null,"assert",-1),F=t(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">assert</span><span class="token punctuation">(</span>urlString<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;https&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">&#39;URL (</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">urlString</span></span><span class="token string">) should start with &quot;https&quot;.&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),G=s("code",null,"assert",-1),$=s("br",null,null,-1),z=s("br",null,null,-1),H={href:"https://api.dart.dev/stable/dart-core/AssertionError-class.html",target:"_blank",rel:"noopener noreferrer"},K=s("p",null,[n("어서션을 정확히 언제 동작할까요?"),s("br"),n(" 이것은 사용하는 도구와 프레임워크에 따라 다릅니다.")],-1),M={href:"https://docs.flutter.dev/testing/debugging#debug-mode-assertions",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://dart.dev/tools/webdev#serve",target:"_blank",rel:"noopener noreferrer"},X=s("code",null,"webdev serve",-1),Y={href:"https://dart.dev/tools/dart-run",target:"_blank",rel:"noopener noreferrer"},Z=s("code",null,"dart run",-1),nn={href:"https://dart.dev/tools/dart-compile#js",target:"_blank",rel:"noopener noreferrer"},sn=s("code",null,"dart compile js",-1),an=s("code",null,"--enable-asserts",-1),en=s("p",null,[n("운영 모드에서는 어서션을 생략되며 "),s("code",null,"assert"),n("의 인자는 계산되지 않습니다.")],-1);function tn(pn,on){const e=c("ExternalLinkIcon"),p=c("RouterLink"),l=c("AdsenseB");return u(),d("div",null,[s("p",null,[n("원문 : "),s("a",k,[n("https://dart.dev/language/control-flow"),a(e)])]),v,s("p",null,[n("또한 "),a(p,{to:"/dart/language/error-handling.html#exceptions"},{default:o(()=>[n("예외처리")]),_:1}),n("에서 설명할 "),m,n("와 "),b,n("를 사용한 상태흐름 제어도 가능합니다.")]),h,s("p",null,[n("Dart는 다음 예제에서 보여줄 "),g,n(" 명령문과 선택적 "),_,n(" 명령문을 지원합니다."),f,n(" 또한 "),a(p,{to:"/dart/language/operators.html#conditional-expressions"},{default:o(()=>[n("조건 표현식")]),_:1}),n("을 참고하세요.")]),w,s("p",null,[n("명령문 조건은 부울 값으로 계산이 되는 표현식이어야 합니다."),y,n(" 더 많은 정보는 "),a(p,{to:"/dart/language/built-in-types.html#booleans"},{default:o(()=>[n("부울")]),_:1}),n("을 참고하세요.")]),x,s("p",null,[n("반복할 객체가 반복가능(리스트와 셋 등)이면서 현재 반복의 수를 알 필요가 없을 경우, "),E,n(" 형식의 "),s("a",D,[n("반복구"),a(e)]),n("를 사용하면 됩니다.")]),O,s("div",C,[S,s("p",null,[L,n("을 연습하려면 "),s("a",N,[n("반복가능한 콜렉션 코드랩"),a(e)]),n("을 참고하세요.")])]),s("p",null,[n("반복가능한 클래스는 다른 옵션으로 "),s("a",P,[R,a(e)]),n("를 가지고 있습니다.")]),I,s("p",null,[n("리스트나 셋처럼 "),s("a",A,[n("반복가능"),a(e)]),n("을 사용할 경우 다른방식으로 예제를 작성할 수 있습니다.")]),B,s("p",null,[n("Dart의 Switch 명령문은 정수, 문자열 또는 컴파일타임 상수를 "),W,n("를 사용하여 비교합니다."),V,n(" 비교된 객체는 동일한 클래스(하위 타입이 아닌)의 인스턴스이어야 하며, 클래스는 "),q,n("를 오버라이드하면 안됩니다."),J,a(p,{to:"/dart/language/enum.html"},{default:o(()=>[n("열거형")]),_:1}),n("은 "),T,n(" 명령문에 잘 동작합니다.")]),U,s("p",null,[n("어서션에 메세지를 붙이기 위해 "),j,n("의 두번째 인자로 문자열을 추가합니다. (선택적으로 "),a(p,{to:"/dart/language/collections.html#lists"},{default:o(()=>[n("마지막 콤마")]),_:1}),n(" 포함)")]),F,s("p",null,[G,n("의 첫번째 인자는 부울값으로 반환되는 표현식이어야 합니다."),$,n(" 만약 표현식이 true이면 어서션은 성공하고 계속 실행됩니다."),z,n(" false일 경우, 어서션은 실패하고 예외("),s("a",H,[n("AssertionError"),a(e)]),n(")이 발생합니다.")]),K,s("ul",null,[s("li",null,[n("Flutter는 "),s("a",M,[n("디버그 모드"),a(e)]),n("에서 활성화 합니다.")]),s("li",null,[s("a",Q,[X,a(e)]),n("와 같은 개발전용 도구 일 경우에는 기본적으로 어서션을 활성화 합니다.")]),s("li",null,[s("a",Y,[Z,a(e)]),n("이나 "),s("a",nn,[sn,a(e)]),n("와 같은 일부 도구는 명령 플래그인 "),an,n("를 통해 어서션을 지원합니다.")])]),en,a(l)])}const ln=i(r,[["render",tn],["__file","control-flow.html.vue"]]);export{ln as default};
