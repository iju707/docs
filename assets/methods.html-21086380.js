import{_ as i,r as t,o as u,c as r,a as s,b as n,d as a,w as o,e}from"./app-95e21c4a.js";const d={},k={href:"https://dart.dev/language/methods",target:"_blank",rel:"noopener noreferrer"},v=e(`<p>메소드는 객체에 대한 행동을 제공하는 함수입니다.</p><h3 id="instance-methods" tabindex="-1"><a class="header-anchor" href="#instance-methods" aria-hidden="true">#</a> 인스턴스 메소드</h3><p>객체의 인스턴스 메소드는 인스턴스 변수와 <code>this</code>에 접근할 수 있습니다.<br> 아래 예제의 <code>distanceTo()</code> 메소드는 인스턴스 메소드의 예제입니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:math&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> double x<span class="token punctuation">;</span>
    <span class="token keyword">final</span> double y<span class="token punctuation">;</span>

    <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    double <span class="token function">distanceTo</span><span class="token punctuation">(</span><span class="token class-name">Point</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> dx <span class="token operator">=</span> x <span class="token operator">-</span> other<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
        <span class="token keyword">var</span> dy <span class="token operator">=</span> y <span class="token operator">-</span> other<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> 연산자</h3><p>연산자는 특별한 이름을 가진 인스턴스 메소드 입니다.<br> Dart는 아래의 이름 연산자를 정의할 수 있게 합니다.</p><table><thead><tr><th style="text-align:left;">&lt;</th><th style="text-align:left;">+</th><th style="text-align:left;">|</th><th style="text-align:left;">&gt;&gt;&gt;</th></tr></thead><tbody><tr><td style="text-align:left;">&gt;</td><td style="text-align:left;">/</td><td style="text-align:left;">^</td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;">&lt;=</td><td style="text-align:left;">~/</td><td style="text-align:left;">&amp;</td><td style="text-align:left;">[]=</td></tr><tr><td style="text-align:left;">&gt;=</td><td style="text-align:left;">*</td><td style="text-align:left;">&lt;&lt;</td><td style="text-align:left;">~</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">%</td><td style="text-align:left;">&gt;&gt;</td><td style="text-align:left;">==</td></tr></tbody></table>`,7),m={class:"hint-container note"},b=s("p",{class:"hint-container-title"},"Note",-1),h=s("code",null,"!=",-1),g=s("br",null,null,-1),y=s("br",null,null,-1),f=s("code",null,"e1 != e2",-1),x=s("code",null,"!(e1 == e2)",-1),w=e(`<p>연산자 선언은 내장된 식별자인 <code>operator</code>를 사용하여 정의할 수 있습니다.<br> 아래 예제는 벡터의 더하기(<code>+</code>), 빼기(<code>-</code>), 동등(<code>==</code>)을 정의한 것 입니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Vector</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>

    <span class="token class-name">Vector</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Vector</span> <span class="token keyword">operator</span> <span class="token operator">+</span><span class="token punctuation">(</span><span class="token class-name">Vector</span> v<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">Vector</span><span class="token punctuation">(</span>x <span class="token operator">+</span> v<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> v<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Vector</span> <span class="token keyword">operator</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token class-name">Vector</span> v<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">Vector</span><span class="token punctuation">(</span>x <span class="token operator">-</span> v<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y <span class="token operator">-</span> v<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token metadata function">@override</span>
    bool <span class="token keyword">operator</span> <span class="token operator">==</span><span class="token punctuation">(</span><span class="token class-name">Object</span> other<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span>
        other <span class="token operator">is</span> <span class="token class-name">Vector</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">==</span> other<span class="token punctuation">.</span>x <span class="token operator">&amp;&amp;</span> y <span class="token operator">==</span> other<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
    
    <span class="token metadata function">@override</span>
    int <span class="token keyword">get</span> hashCode <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> v <span class="token operator">=</span> <span class="token class-name">Vector</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> w <span class="token operator">=</span> <span class="token class-name">Vecotr</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">assert</span><span class="token punctuation">(</span>v <span class="token operator">+</span> w <span class="token operator">==</span> <span class="token class-name">Vector</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>v <span class="token operator">-</span> w <span class="token operator">==</span> <span class="token class-name">Vector</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getters-and-setters" tabindex="-1"><a class="header-anchor" href="#getters-and-setters" aria-hidden="true">#</a> getter와 setter</h3><p>getter와 setter는 객체의 속성을 읽고 쓸수 있는 특별한 메소드 입니다.<br> 각 인스턴스 변수는 암묵적으로 getter와 가능하면 setter까지 가지고 있다는것을 기억하세요.<br><code>get</code>과 <code>set</code> 키워드를 사용한 getter와 setter를 구현하여 추가적인 속성을 생성할 수 있습니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    double left<span class="token punctuation">,</span> top<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">;</span>

    <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>top<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 두 계산된 속성을 정의 : right, bottom</span>
    double <span class="token keyword">get</span> right <span class="token operator">=</span><span class="token operator">&gt;</span> left <span class="token operator">+</span> width<span class="token punctuation">;</span>
    <span class="token keyword">set</span> <span class="token function">right</span><span class="token punctuation">(</span>double value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> left <span class="token operator">=</span> value <span class="token operator">-</span> width<span class="token punctuation">;</span>
    double <span class="token keyword">get</span> bottom <span class="token operator">=</span><span class="token operator">&gt;</span> top <span class="token operator">+</span> height<span class="token punctuation">;</span>
    <span class="token keyword">set</span> <span class="token function">bottom</span><span class="token punctuation">(</span>double value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> top <span class="token operator">=</span> value <span class="token operator">-</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> rect <span class="token operator">=</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>rect<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rect<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>rect<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getter와 setter를 사용하면 클라이언트 코드를 변경하지 않고 인스턴스 변수로 시작하여 나중에는 메소드로 래핑할 수 있습니다.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>증분(<code>++</code>)와 같은 연산자는 getter가 명시적으로 정의되어있는지 여부와 상관없이 예상대로 동작합니다.<br> 예상치 못한 부작용을 피하기 위해 연산자는 getter를 딱 한번만 호출하고 해당 값을 임시변수에 저장합니다.</p></div><h3 id="abstract-methods" tabindex="-1"><a class="header-anchor" href="#abstract-methods" aria-hidden="true">#</a> 추상 메소드</h3>`,8),_=s("br",null,null,-1),V=e(`<p>메소드를 추상으로 만들기 위해 메소드 본문 대신 세미콜론(<code>;</code>)을 사용합니다.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Doer</span> <span class="token punctuation">{</span>
    <span class="token comment">// 인스턴스 변수와 메소드를 정의...</span>

    <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 추상 메소드를 정의</span>
<span class="token punctuation">}</span>ß

<span class="token keyword">class</span> <span class="token class-name">EffectiveDoer</span> <span class="token keyword">extends</span> <span class="token class-name">Doer</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 구현을 제공하며 메소드는 여기서 추상이 아닙니다.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function N(B,R){const c=t("ExternalLinkIcon"),p=t("RouterLink"),l=t("AdsenseB");return u(),r("div",null,[s("p",null,[n("원문 : "),s("a",k,[n("https://dart.dev/language/methods"),a(c)])]),v,s("div",m,[b,s("p",null,[h,n("와 같은 몇몇 "),a(p,{to:"/dart/language/operators.html"},{default:o(()=>[n("연산자")]),_:1}),n("가 목록에 없음을 알 수 있을 것입니다."),g,n(" 이것은 단순히 구문적 변형이기 때문입니다."),y,n(" 예로 들어, "),f,n(" 표현식은 "),x,n("의 구문적 변형입니다.")])]),w,s("p",null,[n("인스턴스, getter와 setter는 추상이 될 수 있으며 인터페이스를 정의해도 다른 클래스에서 구현할 수 있도록 남길수 있습니다."),_,n(" 추상 메소드는 "),a(p,{to:"/dart/language/classes.html#abstract-classes"},{default:o(()=>[n("추상 클래스")]),_:1}),n("에서만 존재합니다.")]),V,a(l)])}const E=i(d,[["render",N],["__file","methods.html.vue"]]);export{E as default};
