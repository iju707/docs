import{_ as o,r as t,o as i,c as l,a,b as n,d as s,e as d}from"./app-95e21c4a.js";const r={},p={href:"https://dart.dev/guides/language/language-tour#comments",target:"_blank",rel:"noopener noreferrer"},m=d(`<p>Dart는 한줄 주석, 여러줄 주석, 문서화 주석을 지원합니다.</p><h2 id="single-line-comments" tabindex="-1"><a class="header-anchor" href="#single-line-comments" aria-hidden="true">#</a> 한줄 주석</h2><p>한줄 주석은 <code>//</code>로 시작합니다.<br><code>//</code>와 해당 줄 끝까지 모든것은 Dart 컴파일러가 무시합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: AbstractLlamaGreetingFactory로 리펙터링하기?</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Welcome to my Llama farm!&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multi-line-comments" tabindex="-1"><a class="header-anchor" href="#multi-line-comments" aria-hidden="true">#</a> 여러줄 주석</h2><p>여러줄 주석은 <code>/*</code>로 시작해서 <code>*/</code>로 끝납니다.<br><code>/*</code>와 <code>*/</code> 사이의 모든것은 Dart 컴파일러가 무시합니다.<br> (주석이 문서화 주석이 아닌경우. 다음 절을 참고하세요)<br> 여러줄 주석은 중첩될 수 있습니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
     * 많은 것을 했다. 이제 치킨집할까...

     Llama larry = Llama();
     larry.feed();
     larry.exercise();
     larry.clean();
    */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documentation-comments" tabindex="-1"><a class="header-anchor" href="#documentation-comments" aria-hidden="true">#</a> 문서화 주석</h2><p>문서화 주석은 <code>///</code>나 <code>/**</code>로 시작한 여러줄 또는 한줄 주석입니다.<br> 여러줄에 <code>///</code>를 사용하면 여러줄 문서 주석과 동일한 효과를 가집니다.</p><p>문서화 주석안에는 분석기가 모든 텍스트를 무시하지만 대괄호에 만나면 다릅니다.<br> 대괄호를 사용하면 클래스, 메소드, 필드, 최상위 변수, 함수, 인자등을 참조할 수 있습니다.<br> 대괄호의 이름은 문서화된 프로그램 요소의 문법적 범위에서 처리됩니다.</p><p>다른 클래스와 인자를 참조하는 문서화 주석에 대한 예제입니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/// A domesticated South American camelid (Lama glama).</span>
<span class="token comment">///</span>
<span class="token comment">/// Andean cultures have used llamas as meat and pack</span>
<span class="token comment">/// animals since pre-Hispanic times.</span>
<span class="token comment">///</span>
<span class="token comment">/// Just like any other animal, llamas need to eat,</span>
<span class="token comment">/// so don&#39;t forget to [feed] them some [Food].</span>
<span class="token keyword">class</span> <span class="token class-name">Llama</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span><span class="token operator">?</span> name<span class="token punctuation">;</span>

  <span class="token comment">/// Feeds your llama [food].</span>
  <span class="token comment">///</span>
  <span class="token comment">/// The typical llama eats one bale of hay per week.</span>
  <span class="token keyword">void</span> <span class="token function">feed</span><span class="token punctuation">(</span><span class="token class-name">Food</span> food<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/// Exercises your llama with an [activity] for</span>
  <span class="token comment">/// [timeLimit] minutes.</span>
  <span class="token keyword">void</span> <span class="token function">exercise</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">,</span> int timeLimit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>클래스의 생성된 문서에서 <code>[feed]</code>는 <code>feed</code> 메소드의 문서로 링크가 되며, <code>[Food]</code>는 <code>Food</code> 클래스의 문서로 링크됩니다.</p>`,13),u={href:"https://dart.dev/tools/dart-doc",target:"_blank",rel:"noopener noreferrer"},v=a("code",null,"dart doc",-1),k=a("br",null,null,-1),b={href:"https://api.dart.dev/stable",target:"_blank",rel:"noopener noreferrer"},h=a("br",null,null,-1),g={href:"https://dart.dev/guides/language/effective-dart/documentation",target:"_blank",rel:"noopener noreferrer"};function f(_,y){const e=t("ExternalLinkIcon"),c=t("AdsenseB");return i(),l("div",null,[a("p",null,[n("원문 : "),a("a",p,[n("https://dart.dev/guides/language/language-tour#comments"),s(e)])]),m,a("p",null,[n("Dart 코드를 분석하고 HTML 문서를 생성하기 위해 "),a("a",u,[v,s(e)]),n("이라는 Dart의 문서 생성도구를 사용해야 합니다."),k,n(" 생성된 문서에 대한 예제는 "),a("a",b,[n("Dart API 문서"),s(e)]),n("를 참고하세요."),h,n(" 주석을 구조화하는 방법에 대한 조언은 "),a("a",g,[n("효과적인 Dart: 문서"),s(e)]),n("를 참조하세요.")]),s(c)])}const L=o(r,[["render",f],["__file","comments.html.vue"]]);export{L as default};
