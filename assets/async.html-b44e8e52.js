import{_ as p,r as o,o as i,c as l,a as n,b as s,d as a,e as t}from"./app-95e21c4a.js";const d={},r={href:"https://dart.dev/language/async",target:"_blank",rel:"noopener noreferrer"},u={href:"https://api.dart.dev/stable/dart-async/Future-class.html",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"Future",-1),v={href:"https://api.dart.dev/stable/dart-async/Stream-class.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"Stream",-1),_=n("br",null,null,-1),m=n("br",null,null,-1),b=n("p",null,[n("code",null,"async"),s("와 "),n("code",null,"await"),s(" 키워드는 동기적 코드와 비슷하게 비동기 코드를 작성할 수 있도록 비동기 프로그래밍을 지원해줍니다.")],-1),g=n("h2",{id:"handling-futures",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#handling-futures","aria-hidden":"true"},"#"),s(" Future 다루기")],-1),y=n("p",null,"완성된 Future에 대한 결과가 필요하면 두가지 선택지가 있습니다.",-1),f={href:"https://dart.dev/codelabs/async-await",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"async",-1),x=n("code",null,"await",-1),F={href:"https://dart.dev/guides/libraries/library-tour#future",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"Future",-1),I=t(`<p><code>async</code>와 <code>await</code>를 사용하는 코드는 비동기 이지만, 동기식 코드와 매우 유사하게 보입니다.<br> 예로 들어, 비동기 함수의 결과를 기다리기 위해 <code>await</code>를 사용한 코드 입니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">await</span> <span class="token function">lookUpVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>await</code>를 사용하기 위해 코드는 <code>async</code>가 마킹된 함수여야 합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">checkVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> version <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">lookUpVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 버전을 가지고 무언가를 처리</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Note</p><p><code>async</code> 함수가 시간을 소비하는 연산을 수행하더라도 그 연산을 기다리지 않습니다.<br> 대신, <code>async</code> 함수는 첫번째 <code>await</code> 표현식에 마주칠때까지 실행합니다.<br> 그리고 나서 <code>Future</code> 객체가 반환되면 <code>await</code> 표현식이 완료된 이후부터 실행을 계속합니다.</p></div><p><code>await</code>가 사용된 코드에서 에러를 처리하고 정리하기 위해 <code>try</code>와 <code>catch</code>, <code>fianlly</code>를 사용할 수 있습니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  version <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">lookUpVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// version을 찾울 수 없을 때 후처리</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>async</code> 함수에서 <code>await</code>를 여러번 사용할 수 있습니다.<br> 예로 들어, 다음 코드는 함수의 결과를 3번 기다리는 것 입니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> entrypoint <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findEntryPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> exitCode <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">runExecutable</span><span class="token punctuation">(</span>entrypoint<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> <span class="token function">flushThenExit</span><span class="token punctuation">(</span>exitCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>await expression</code>에서 <code>expression</code>의 값은 항상 <code>Future</code> 입니다.<br> 만약 그렇지 않다면 자동으로 <code>Future</code>로 감싸여집니다.<br> 이 <code>Future</code> 객체는 객체의 반환 보장을 가리킵니다.<br><code>await expression</code>의 값은 반환된 객체가 됩니다.<br><code>await expression</code>은 객체가 가능할때 까지 실행을 보류하게 됩니다.</p><p><strong><code>await</code> 사용할 때 컴파일타임 에러가 발생하면 <code>await</code>가 <code>async</code> 함수안에 있는지 확인해보세요.</strong><br> 예로 들어, 어플리케이션의 <code>main()</code>함수에 <code>await</code>를 사용하면 <code>main()</code>의 본문은 <code>async</code>로 마킹되어야 합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token function">checkVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;In main: version is </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">await</span> <span class="token function">lookUpVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),U={class:"hint-container note"},N=n("p",{class:"hint-container-title"},"Note",-1),S=n("code",null,"async",-1),E=n("code",null,"checkVersion()",-1),A=n("br",null,null,-1),B=n("br",null,null,-1),q={href:"https://dart.dev/tools/linter-rules#unawaited_futures",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"unwaited_futures",-1),C=n("code",null,"async",-1),T=n("code",null,"await",-1),D={href:"https://dart.dev/codelabs/async-await",target:"_blank",rel:"noopener noreferrer"},L=t(`<h2 id="declaring-async-functions" tabindex="-1"><a class="header-anchor" href="#declaring-async-functions" aria-hidden="true">#</a> 비동기 함수 선언하기</h2><p><code>async</code> 함수는 본문이 <code>async</code> 수식어를 마킹한 함수입니다.</p><p>함수에 <code>async</code> 키워드를 추가하는 것은 Future로 반환하게 만듭니다.<br> 예로 들어, 동기적 함수를 고려할 때 문자열을 반환하면 다음과 같습니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">String</span> <span class="token function">lookUpVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string-literal"><span class="token string">&#39;1.0.0&#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>향후 구현된 내용이 시간소요가 많이되어 <code>async</code> 함수로 변경하고자 할 경우 반환값은 <code>Future</code>가 됩니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">lookUpVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string-literal"><span class="token string">&#39;1.0.0&#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>참고할 것으로 함수의 본문이 Future API를 사용하지 않아도 됩니다.<br> Dart는 필요시 Future 객체를 생성합니다.<br> 반환할만한 값이 없는 경우에는 <code>Future&lt;void&gt;</code>로 반환타입을 만들면 됩니다.</p>`,7),O=n("code",null,"async",-1),R=n("code",null,"await",-1),$={href:"https://dart.dev/codelabs/async-await",target:"_blank",rel:"noopener noreferrer"},j=n("h2",{id:"handling-streams",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#handling-streams","aria-hidden":"true"},"#"),s(" 스트림 다루기")],-1),z=n("p",null,"스트림에서 값을 가져오려면 두가지 방법이 있습니다.",-1),G=n("li",null,[n("code",null,"async"),s("와 비동기 반복구 ("),n("code",null,"await for"),s(")를 사용")],-1),H={href:"https://dart.dev/guides/libraries/library-tour#stream",target:"_blank",rel:"noopener noreferrer"},J=t(`<div class="hint-container note"><p class="hint-container-title">Note</p><p><code>await for</code>를 사용하기 전에 코드가 명확한지, 스트림의 결과 모두를 기다리고자하는지 명확해야합니다.<br> 예로 들어, UI 프레임워크는 끊임없는 이벤트 스트림을 전달하기 때문에 <code>await for</code>를 UI 이벤트 수신자에서 사용하면 안됩니다.</p></div><p>비동기 반복구는 아래와 같은 유형입니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span>varOrType identifier <span class="token keyword">in</span> expression<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 스트림이 값을 내보낼 때마다 실행됩니다.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>expression</code>의 값은 Stream 타입을 가져야 합니다.<br> 아래와 같이 실행됩니다.</p><ol><li>스트림이 값을 내보낼 때까지 대기합니다.</li><li>내보내진 값을 변수에 설정하고 반복구의 본문을 실행합니다.</li><li>스트림이 종료될 때까지 1과 2를 반복합니다.</li></ol><p>스트림에서의 수신을 중단하려면 <code>break</code>나 <code>return</code> 상태문을 사용하여 반복구를 빠져나와서 스트림을 구독해지하는 것 입니다.</p><p><strong>만약 비동기 반복구를 구현했을 때 컴파일타임 오류가 발생했다면, <code>await for</code>가 <code>async</code> 함수내 있는지 확인해보세요.</strong><br> 예로 들어, 비동기 반복구를 앱의 <code>main()</code> 함수에서 사용하려면 <code>main()</code>의 본문은 <code>async</code>로 표시되어야 합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">final</span> request <span class="token keyword">in</span> requestServer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),K={href:"https://dart.dev/guides/libraries/library-tour#dartasync---asynchronous-programming",target:"_blank",rel:"noopener noreferrer"};function M(Q,W){const e=o("ExternalLinkIcon"),c=o("AdsenseB");return i(),l("div",null,[n("p",null,[s("원문 : "),n("a",r,[s("https://dart.dev/language/async"),a(e)])]),n("p",null,[s("Dart 라이브러리는 "),n("a",u,[k,a(e)]),s("나 "),n("a",v,[h,a(e)]),s("을 반환하는 함수들로 가득차있습니다."),_,s(" 이 함수들은 비동기라고 부릅니다."),m,s(" 아마 시간이 많이 소요되는 기능(예로 I/O)을 구성한 뒤 이 동작이 끝날때까지 기다리지 않고 반환합니다.")]),b,g,y,n("ul",null,[n("li",null,[s("이번 장과 "),n("a",f,[s("비동기 프로그래밍 코드랩"),a(e)]),s("에서 소개할 "),w,s("와 "),x,s(" 사용하기")]),n("li",null,[n("a",F,[s("라이브러리 투어"),a(e)]),s("에서 소개할 "),V,s(" API 사용하기")])]),I,n("div",U,[N,n("p",null,[s("이전 예제에서 "),S,s(" 함수("),E,s(")를 결과를 기다리지 않고 사용하고 있습니다."),A,s(" 이부분은 코드에서 함수의 실행이 종료되었다고 가정하는 경우 문제가 발생할 수 있는 방법입니다."),B,s(" 문제를 회피하기 위하여, "),n("a",q,[P,s(" 린터 규칙"),a(e)]),s("을 사용하세요.")])]),n("p",null,[s("Future, "),C,s(", "),T,s("에 대한 상세한 소개는 "),n("a",D,[s("비동기 프로그래밍 코드랩"),a(e)]),s("을 살펴보세요.")]),L,n("p",null,[s("Future, "),O,s("와 "),R,s("를 사용한 실습형 소개는 "),n("a",$,[s("비동기 프로그래밍 코드랩"),a(e)]),s("을 참고사헤요.")]),j,z,n("ul",null,[G,n("li",null,[n("a",H,[s("라이브러리 투어"),a(e)]),s("에서 소개하는 스트림 API 사용")])]),J,n("p",null,[s("비동기 프로그래밍에 더 자세한 정보는 라이브러리 투어의 "),n("a",K,[s("dart:async"),a(e)]),s(" 절을 참고하세요.")]),a(c)])}const Y=p(d,[["render",M],["__file","async.html.vue"]]);export{Y as default};