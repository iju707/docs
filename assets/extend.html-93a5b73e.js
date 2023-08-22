import{_ as p,r as c,o as u,c as d,a as s,b as n,d as a,w as l,e as t}from"./app-95e21c4a.js";const r={},k={href:"https://dart.dev/language/extend",target:"_blank",rel:"noopener noreferrer"},v=t(`<p><code>extends</code>를 사용해서 하위 클래스를 생성할수 있고, <code>super</code>로 상위클래스를 참조할 수 있습니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Television</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">turnOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">_illuminateDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_activateIrSensor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SmartTelevision</span> <span class="token keyword">extends</span> <span class="token class-name">Television</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">turnOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">turnOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_bootNetworkInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_initializeMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_upgradeApps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m=s("code",null,"extends",-1),h=s("h3",{id:"overriding-members",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#overriding-members","aria-hidden":"true"},"#"),n(" 멤버 재정의")],-1),_=s("br",null,null,-1),b=s("code",null,"@override",-1),g=t(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Television</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">set</span> <span class="token function">contrast</span><span class="token punctuation">(</span>int value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SmartTelevision</span> <span class="token keyword">extends</span> <span class="token class-name">Television</span> <span class="token punctuation">{</span>
    <span class="token metadata function">@override</span>
    <span class="token keyword">set</span> <span class="token function">contrast</span><span class="token punctuation">(</span>num value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>재정의 메소드 선언은 다양한 여러가지 재정의 방법에 일치해야합니다.</p>`,2),f=t("<li>반환 유형은 재정의할 메소드의 반환 유형과 동일한 유형(또는 하위유형)이어야 합니다.</li><li>인자 유형은 재정의할 메소드의 인자 유형과 동일한 유형(또는 하위유형)이어야 합니다.<br> 이전 예제에서, <code>SmartTelevision</code>의 <code>contrast</code> setter는 인자 유형을 <code>int</code>의 하위유형인 <code>num</code>으로 변경합니다.</li><li>재정의된 메소드가 n 위치의 매개변수를 수용하면, 재정의한 메소드 또한 n 위치의 매개변수를 수용해야 합니다.</li>",3),x=s("br",null,null,-1),y=s("br",null,null,-1),w=s("br",null,null,-1),S={href:"https://dart.dev/guides/language/sound-problems#the-covariant-keyword",target:"_blank",rel:"noopener noreferrer"},M=s("code",null,"covariant",-1),N=s("br",null,null,-1),T={href:"https://dart.dev/guides/language/spec",target:"_blank",rel:"noopener noreferrer"},B={class:"hint-container warning"},I=s("p",{class:"hint-container-title"},"Note",-1),A=s("code",null,"==",-1),C=s("code",null,"hashCode",-1),E=s("br",null,null,-1),L=s("code",null,"==",-1),O=s("code",null,"hashCode",-1),V={href:"https://dart.dev/guides/libraries/library-tour#implementing-map-keys",target:"_blank",rel:"noopener noreferrer"},z=t(`<h3 id="nosuchmethod" tabindex="-1"><a class="header-anchor" href="#nosuchmethod" aria-hidden="true">#</a> noSuchMethod()</h3><p>존재하지 않는 메소드나 인스턴스 변수를 사용을 시도하는 코드를 감지하거나 반응할때는 <code>noSuchMethod()</code>를 재정의하면 됩니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token comment">// noSuchMethod를 재정의하지 않으면,</span>
    <span class="token comment">// 존재하지 않는 멤버를 사용하는 결과는 NoSuchMethodError입니다.</span>
    <span class="token metadata function">@override</span>
    <span class="token keyword">void</span> <span class="token function">noSuchMethod</span><span class="token punctuation">(</span><span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;존재하지 않는 멤버사용을 시도했습니다: </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">invocation<span class="token punctuation">.</span>memberName</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 중 <strong>하나</strong>라도 참이 아니면 구현되지않은 메소드를 <strong>실행할 수 없습니다.</strong></p><ul><li>받는 쪽이 정적유형 <code>dynamic</code>을 가집니다.</li><li>받는 쪽이 미구현된 메소드(abstract도 가능)를 정의하는 정적유형을 가지고 받는 쪽의 동적유형은 클래스 <code>Object</code>와는 다른 <code>noSuchMethod()</code>의 구현을 가집니다.</li></ul>`,5),D={href:"https://github.com/dart-lang/language/blob/master/archive/feature-specifications/nosuchmethod-forwarding.md",target:"_blank",rel:"noopener noreferrer"};function R(j,$){const e=c("ExternalLinkIcon"),o=c("RouterLink"),i=c("AdsenseB");return u(),d("div",null,[s("p",null,[n("원문 : "),s("a",k,[n("https://dart.dev/language/extend"),a(e)])]),v,s("p",null,[m,n("의 다른 사용은 제너릭 페이지의 "),a(o,{to:"/dart/language/generics.html#restricting-the-parameterized-type"},{default:l(()=>[n("매개변수화된 타입")]),_:1}),n(" 논제를 참고하세요.")]),h,s("p",null,[n("하위클래스는 인스턴스 메소드("),a(o,{to:"/dart/language/methods.html#operators"},{default:l(()=>[n("연산자")]),_:1}),n("포함), getter, setter를 재정의할 수 있습니다."),_,b,n(" 어노테이션을 사용하여 의도적으로 멤버를 재정의했다고 가리킬 수 있습니다.")]),g,s("ul",null,[f,s("li",null,[a(o,{to:"/dart/language/generics.html#using-generic-methods"},{default:l(()=>[n("제너릭 메소드")]),_:1}),n("은 제너릭이 아닌것으로 재정의할 수 없으며 반대도 불가능합니다.")])]),s("p",null,[n("때때로 메소드 매개변수나 인스턴스 변수의 유형을 축소하고 싶을 수 있습니다."),x,n(" 이것은 정상적인 규칙을 위반하고 런타임 유형 오류를 발생시킬 수 있는 다운캐스드와 비슷합니다."),y,n(" 그래도 코드에서 타입에러가 발생하지 않음을 보장하면 타입축소는 가능합니다."),w,n(" 이경우에, 매개변수 정의에서 "),s("a",S,[M,n(" 키워드"),a(e)]),n("를 사용하면 됩니다."),N,n(" 자세한 정보는 "),s("a",T,[n("Dart 언어 사양"),a(e)]),n("을 보세요.")]),s("div",B,[I,s("p",null,[A,n("를 재정의하면 객체의 "),C,n(" getter를 함께 재정의해야합니다."),E,L,n("와 "),O,n("에 대한 재정의 예제는 "),s("a",V,[n("맵키 구현"),a(e)]),n("을 보세요.")])]),z,s("p",null,[n("더 많은 정보는, 비공식 "),s("a",D,[n("noSuchMethod 전달 사양"),a(e)]),n("을 참고하세요.")]),a(i)])}const F=p(r,[["render",R],["__file","extend.html.vue"]]);export{F as default};
