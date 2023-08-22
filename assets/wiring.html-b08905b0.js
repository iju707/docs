import{_ as i,r as o,o as c,c as l,a as n,b as s,d as a,e as t}from"./app-95e21c4a.js";const u={},r={href:"https://python-dependency-injector.ets-labs.org/wiring.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>Wiring 기능은 컨테이너 Provider를 함수나 메소드에 주입시키는 방법을 제공합니다.</p><p>Wiring을 사용할 때 필요한 것:</p><ul><li><strong><code>@inject</code> 데코레이터를 사용</strong> : 데코레이터 <code>@inject</code>가 의존성을 주입합니다.</li><li><strong>마커를 사용</strong> : Wiring 마커는 어떤 의존성(예, <code>Provide[Container.bar]</code>)을 주입할지 지정합니다. 이것은 컨테이너가 주입을 찾는데 도움을 줍니다.</li><li><strong>코드의 마커로 컨테이너를 연결</strong> : 연결하고자 하는 특정 모듈과 패키지로 <code>container.wire()</code>를 호출합니다.</li><li><strong>평소처럼 함수와 클래스를 사용</strong> : 프레임워크가 지정된 주입을 제공합니다.</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector <span class="token keyword">import</span> containers<span class="token punctuation">,</span> providers
<span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>wiring <span class="token keyword">import</span> Provide<span class="token punctuation">,</span> inject

dd
<span class="token keyword">class</span> <span class="token class-name">Service</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    service <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span>Service<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span>service<span class="token punctuation">:</span> Service <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>service<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>
    container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>modules<span class="token operator">=</span><span class="token punctuation">[</span>__name__<span class="token punctuation">]</span><span class="token punctuation">)</span>

    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="decorator-inject" tabindex="-1"><a class="header-anchor" href="#decorator-inject" aria-hidden="true">#</a> 데코레이터 <code>@inject</code></h2><p>데코레이터 <code>@inject</code>는 의존성을 주입합니다.<br> 주입하기위해 모든 함수와 메소드에 데코레이트할 수 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>wiring <span class="token keyword">import</span> inject<span class="token punctuation">,</span> Provide


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>bar<span class="token punctuation">:</span> Bar <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>bar<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>데코레이터 <code>@inject</code>는 적절한 연결동작이 확실하도록 함수의 가장 첫번째 데코레이터로 지정되어야 합니다.<br> 또한 연결 프로세스의 성능에 기여합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>wiring <span class="token keyword">import</span> inject<span class="token punctuation">,</span> Provide


<span class="token decorator annotation punctuation">@decorator_etc</span>
<span class="token decorator annotation punctuation">@decorator_2</span>
<span class="token decorator annotation punctuation">@decorator_1</span>
<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>bar<span class="token punctuation">:</span> Bar <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>bar<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 FastAPI나 유사하게 데코레이터를 사용하는 다른 프레임워크, 클로저, 주입이 있는 사용자 지정의 데코레이터 유형에 <code>@inject</code>를 첫번째 데코레이터로 지정하는게 중요합니다.</p><p>FastAPI 예제는 다음과 같습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>api_route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>service<span class="token punctuation">:</span> Service <span class="token operator">=</span> Depends<span class="token punctuation">(</span>Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>service<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    value <span class="token operator">=</span> <span class="token keyword">await</span> service<span class="token punctuation">.</span>process<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">:</span> value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>데코레이터 예제는 다음과 같습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">decorator1</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@inject</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>value1<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>config<span class="token punctuation">.</span>value1<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result <span class="token operator">+</span> value1
    <span class="token keyword">return</span> wrapper


<span class="token keyword">def</span> <span class="token function">decorator2</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@inject</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>value2<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>config<span class="token punctuation">.</span>value2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result <span class="token operator">+</span> value2
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@decorator1</span>
<span class="token decorator annotation punctuation">@decorator2</span>
<span class="token keyword">def</span> <span class="token function">sample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),k={class:"hint-container note"},v=n("p",{class:"hint-container-title"},"함께보기",-1),m={href:"https://github.com/ets-labs/python-dependency-injector/issues/404#issuecomment-785216978",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"@inject",-1),g=t(`<h2 id="markers" tabindex="-1"><a class="header-anchor" href="#markers" aria-hidden="true">#</a> 마커</h2><p>Wiring 기능은 주입을 만들기 위해 마커를 사용합니다.<br> 주입 마커는 함수나 메소드 인자의 값으로 명시됩니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>wiring <span class="token keyword">import</span> inject<span class="token punctuation">,</span> Provide


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>bar<span class="token punctuation">:</span> Bar <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>bar<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>어노테이션 명시는 선택적입니다.</p><p>Provider 자체를 주입하려면 <code>Provide[foo.provider]</code>를 사용합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>providers <span class="token keyword">import</span> Factory
<span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>wiring <span class="token keyword">import</span> inject<span class="token punctuation">,</span> Provide


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>bar_provider<span class="token punctuation">:</span> Factory<span class="token punctuation">[</span>Bar<span class="token punctuation">]</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>provider<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    bar <span class="token operator">=</span> bar_provider<span class="token punctuation">(</span>argument<span class="token operator">=</span><span class="token string">&quot;baz&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 <code>Provide[foo]</code> 를 사용하여 Provider 자체를 주입할 수 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>providers <span class="token keyword">import</span> Factory
<span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>wiring <span class="token keyword">import</span> inject<span class="token punctuation">,</span> Provider


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>bar_provider<span class="token punctuation">:</span> Factory<span class="token punctuation">[</span>Bar<span class="token punctuation">]</span> <span class="token operator">=</span> Provider<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>bar<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    bar <span class="token operator">=</span> bar_provider<span class="token punctuation">(</span>argument<span class="token operator">=</span><span class="token string">&quot;baz&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>평소하는 것 처럼 구성, 제공되는 인스턴스, 하위 컨테이너 Provider를 사용하면 됩니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>token<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>config<span class="token punctuation">.</span>api_token<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>timeout<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>config<span class="token punctuation">.</span>timeout<span class="token punctuation">.</span>as_<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>baz<span class="token punctuation">:</span> Baz <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>provided<span class="token punctuation">.</span>baz<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>bar<span class="token punctuation">:</span> Bar <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>subcontainer<span class="token punctuation">.</span>bar<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),y=n("code",null,"Resource",-1),h=n("br",null,null,-1),_={href:"https://python-dependency-injector.ets-labs.org/providers/resource.html#resource-provider-wiring-closing",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"Resource",-1),w=n("p",null,[s("또한 컨테이너를 주입하기 위해 "),n("code",null,"Provide"),s("를 사용할 수 있습니다.")],-1),q=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(` providers
`),n("span",{class:"token keyword"},"from"),s(" dependency_injector"),n("span",{class:"token punctuation"},"."),s("wiring "),n("span",{class:"token keyword"},"import"),s(" Provide"),n("span",{class:"token punctuation"},","),s(` inject


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Service"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    service `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("Service"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token decorator annotation punctuation"},"@inject"),s(`
`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),s("container"),n("span",{class:"token punctuation"},":"),s(" Container "),n("span",{class:"token operator"},"="),s(" Provide"),n("span",{class:"token punctuation"},"["),s("Container"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    service `),n("span",{class:"token operator"},"="),s(" container"),n("span",{class:"token punctuation"},"."),s("service"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"__main__"'),n("span",{class:"token punctuation"},":"),s(`
    container `),n("span",{class:"token operator"},"="),s(" Container"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    container`),n("span",{class:"token punctuation"},"."),s("wire"),n("span",{class:"token punctuation"},"("),s("modules"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s("__name__"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    main`),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h2",{id:"string-identifiers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#string-identifiers","aria-hidden":"true"},"#"),s(" 문자열 식별자")],-1),P=n("p",null,[s("문자열 식별자를 사용해서 연결할 수 있습니다."),n("br"),s(" 문자열 식별자는 컨테이너에 Provider 이름과 일치해야합니다.")],-1),C=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(` providers
`),n("span",{class:"token keyword"},"from"),s(" dependency_injector"),n("span",{class:"token punctuation"},"."),s("wiring "),n("span",{class:"token keyword"},"import"),s(" Provide"),n("span",{class:"token punctuation"},","),s(` inject


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Service"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    service `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("Service"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token decorator annotation punctuation"},"@inject"),s(`
`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),s("service"),n("span",{class:"token punctuation"},":"),s(" Service "),n("span",{class:"token operator"},"="),s(" Provide"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"service"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"__main__"'),n("span",{class:"token punctuation"},":"),s(`
    container `),n("span",{class:"token operator"},"="),s(" Container"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    container`),n("span",{class:"token punctuation"},"."),s("wire"),n("span",{class:"token punctuation"},"("),s("modules"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s("__name__"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    main`),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=t(`<p>문자열 식별자를 사용하면 주입을 지정하기 위해 컨테이너를 사용할 필요가 없습니다.</p><p>중첩된 컨테이너에서 주입을 지정하려면 점 <code>.</code>을 구분자로 사용합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>service<span class="token punctuation">:</span> UserService <span class="token operator">=</span> Provide<span class="token punctuation">[</span><span class="token string">&quot;services.user&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 주입 수정자를 사용할 수 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>wiring <span class="token keyword">import</span> <span class="token punctuation">(</span>
    inject<span class="token punctuation">,</span>
    Provide<span class="token punctuation">,</span>
    as_int<span class="token punctuation">,</span>
    as_float<span class="token punctuation">,</span>
    as_<span class="token punctuation">,</span>
    required<span class="token punctuation">,</span>
    invariant<span class="token punctuation">,</span>
    provided<span class="token punctuation">,</span>
<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span><span class="token string">&quot;config.option&quot;</span><span class="token punctuation">,</span> as_int<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token builtin">float</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span><span class="token string">&quot;config.option&quot;</span><span class="token punctuation">,</span> as_float<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> Decimal <span class="token operator">=</span> Provide<span class="token punctuation">[</span><span class="token string">&quot;config.option&quot;</span><span class="token punctuation">,</span> as_<span class="token punctuation">(</span>Decimal<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span><span class="token string">&quot;config.option&quot;</span><span class="token punctuation">,</span> required<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span><span class="token string">&quot;config.option&quot;</span><span class="token punctuation">,</span> required<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>as_int<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span><span class="token string">&quot;config.option&quot;</span><span class="token punctuation">,</span> invariant<span class="token punctuation">(</span><span class="token string">&quot;config.switch&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> Provide<span class="token punctuation">[</span><span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span> provided<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>foo<span class="token punctuation">[</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컨테이너를 주입할 때는 특수 식별자인 <code>&lt;container&gt;</code>를 사용합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>container<span class="token punctuation">:</span> Container <span class="token operator">=</span> Provide<span class="token punctuation">[</span><span class="token string">&quot;&lt;container&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="모듈과-클래스-속성으로-주입-만들기" tabindex="-1"><a class="header-anchor" href="#모듈과-클래스-속성으로-주입-만들기" aria-hidden="true">#</a> 모듈과 클래스 속성으로 주입 만들기</h2><p>모듈과 클래스 속성으로 주입을 만들기 위해 Wiring을 사용할 수 있습니다.</p>`,9),S=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(` providers
`),n("span",{class:"token keyword"},"from"),s(" dependency_injector"),n("span",{class:"token punctuation"},"."),s("wiring "),n("span",{class:"token keyword"},"import"),s(` Provide


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Service"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    service `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("Service"),n("span",{class:"token punctuation"},")"),s(`


service`),n("span",{class:"token punctuation"},":"),s(" Service "),n("span",{class:"token operator"},"="),s(" Provide"),n("span",{class:"token punctuation"},"["),s("Container"),n("span",{class:"token punctuation"},"."),s("service"),n("span",{class:"token punctuation"},"]"),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Main"),n("span",{class:"token punctuation"},":"),s(`

    service`),n("span",{class:"token punctuation"},":"),s(" Service "),n("span",{class:"token operator"},"="),s(" Provide"),n("span",{class:"token punctuation"},"["),s("Container"),n("span",{class:"token punctuation"},"."),s("service"),n("span",{class:"token punctuation"},"]"),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"__main__"'),n("span",{class:"token punctuation"},":"),s(`
    container `),n("span",{class:"token operator"},"="),s(" Container"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    container`),n("span",{class:"token punctuation"},"."),s("wire"),n("span",{class:"token punctuation"},"("),s("modules"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s("__name__"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"assert"),s(),n("span",{class:"token builtin"},"isinstance"),n("span",{class:"token punctuation"},"("),s("service"),n("span",{class:"token punctuation"},","),s(" Service"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"assert"),s(),n("span",{class:"token builtin"},"isinstance"),n("span",{class:"token punctuation"},"("),s("Main"),n("span",{class:"token punctuation"},"."),s("service"),n("span",{class:"token punctuation"},","),s(" Service"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("p",null,"또한 Container에 대한 의존성을 피하기 위해 문자열 식별자를 사용할 수 있습니다.",-1),N=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[s("service"),n("span",{class:"token punctuation"},":"),s(" Service "),n("span",{class:"token operator"},"="),s(" Provide"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"service"'),n("span",{class:"token punctuation"},"]"),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Main"),n("span",{class:"token punctuation"},":"),s(`

    service`),n("span",{class:"token punctuation"},":"),s(" Service "),n("span",{class:"token operator"},"="),s(" Provide"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"service"'),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," ")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=t(`<h2 id="모듈과-패키지-wiring" tabindex="-1"><a class="header-anchor" href="#모듈과-패키지-wiring" aria-hidden="true">#</a> 모듈과 패키지 Wiring</h2><p>모듈에 컨테이너를 연결하려면 <code>container.wire()</code> 메소드를 호출해야 합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>
    modules<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">&quot;yourapp.module1&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;yourapp.module2&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>container.wire()</code> 메소드는 상대경로도 가능합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># In module &quot;yourapp.main&quot;:</span>

container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>
    modules<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">&quot;.module1&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># Resolved to: &quot;yourapp.module1&quot;</span>
        <span class="token string">&quot;.module2&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># Resolved to: &quot;yourapp.module2&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 <code>from_package</code> 인자를 사용하여 상대경로를 해석할 기본 패키지를 수동으로 식별할 수 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># In module &quot;yourapp.main&quot;:</span>

container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>
    modules<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">&quot;.module1&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># Resolved to: &quot;anotherapp.module1&quot;</span>
        <span class="token string">&quot;.module2&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># Resolved to: &quot;anotherapp.module2&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    from_package<span class="token operator">=</span><span class="token string">&quot;anotherapp&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 <code>modules</code> 인자는 가져오기한 모듈을 사용할 수 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> yourapp <span class="token keyword">import</span> module1<span class="token punctuation">,</span> module2


container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>
container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>modules<span class="token operator">=</span><span class="token punctuation">[</span>module1<span class="token punctuation">,</span> module2<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>패키지를 사용하여 컨테이너와 연결시킬 수 있습니다.<br> 컨테이너는 패키지에 있는 모듈을 재귀적으로 탐색합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>
    packages<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">&quot;yourapp.package1&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;yourapp.package2&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>modules</code>와 <code>packages</code> 인자는 함께 사용될 수 있습니다.</p><p>Wiring이 완료되면 함수와 메소드는 호출이 될 때 주입이 제공됩니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>bar<span class="token punctuation">:</span> Bar <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>bar<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>
container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>modules<span class="token operator">=</span><span class="token punctuation">[</span>__name__<span class="token punctuation">]</span><span class="token punctuation">)</span>

foo<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;--- 인자 &quot;bar&quot;가 주입됩니다.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>주입은 키워드 인자로 처리됩니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>foo<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 아래로 동일합니다</span>
foo<span class="token punctuation">(</span>bar<span class="token operator">=</span>container<span class="token punctuation">.</span>bar<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>컨텍스트 키워드 인자는 주입보다 우선됩니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>foo<span class="token punctuation">(</span>bar<span class="token operator">=</span>Bar<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Bar() is injected</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>주입된 함수나 메소드를 이전으로 되돌릴려면 <code>container.unwire()</code> 메소드를 호출합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>container<span class="token punctuation">.</span>unwire<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>테스트할 때 각 테스트전 재생성, 재연결을 위하여 사용할 수 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> unittest


<span class="token keyword">class</span> <span class="token class-name">SomeTest</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>modules<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;yourapp.module1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yourapp.module2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addCleanup<span class="token punctuation">(</span>self<span class="token punctuation">.</span>container<span class="token punctuation">.</span>unwire<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span>
<span class="token keyword">def</span> <span class="token function">container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>
    container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>modules<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;yourapp.module1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yourapp.module2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> container
    container<span class="token punctuation">.</span>unwire<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>많은 코드를 가지고 있으면 Wiring에 대한 소요시간이 오래 걸릴 수 있습니다.<br> 컨테이너 인스턴스를 유지하고 테스트간에 재연결을 피하는걸 고려하세요.</p></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>파이썬은 개별적으로 가져온 함수에 대한 패치에 제약이 있습니다.<br> 에러를 방지하기 위해서 개별 함수를 가져오기 위해 모듈을 가져오거나 Wiring 후 가져오기를 하도록 합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Potential error:</span>

<span class="token keyword">from</span> <span class="token punctuation">.</span>module <span class="token keyword">import</span> fn

fn<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>대신 다음을 사용하세요.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Always works:</span>

<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> module

module<span class="token punctuation">.</span>fn<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="wiring-configuration" tabindex="-1"><a class="header-anchor" href="#wiring-configuration" aria-hidden="true">#</a> Wiring 구성</h2><p>컨테이너에 Wiring 구성을 정의할 수 있습니다.<br> Wiring 구성이 정의되면 컨테이너는 자동으로 인스턴스를 생성할 때 <code>.wire()</code> 메소드를 호출합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    wiring_config <span class="token operator">=</span> containers<span class="token punctuation">.</span>WiringConfiguration<span class="token punctuation">(</span>
        modules<span class="token operator">=</span><span class="token punctuation">[</span>
            <span class="token string">&quot;yourapp.module1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;yourapp.module2&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        packages<span class="token operator">=</span><span class="token punctuation">[</span>
            <span class="token string">&quot;yourapp.package1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;yourapp.package2&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># container.wire()가 자동으로 호출됩니다.</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 상대적 가져오기를 사용할 수 있습니다.<br> 컨테이너는 컨테이너 클래스의 모듈 기준으로 해석하게 됩니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># In module &quot;yourapp.container&quot;:</span>

<span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    wiring_config <span class="token operator">=</span> containers<span class="token punctuation">.</span>WiringConfiguration<span class="token punctuation">(</span>
        modules<span class="token operator">=</span><span class="token punctuation">[</span>
           <span class="token string">&quot;.module1&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 다음으로 해석 : &quot;yourapp.module1&quot;</span>
           <span class="token string">&quot;.module2&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 다음으로 해석 : &quot;yourapp.module2&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span>


<span class="token comment"># In module &quot;yourapp.foo.bar.main&quot;:</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># wire to &quot;yourapp.module1&quot; and &quot;yourapp.module2&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Wiring 구성을 사용하고 수동으로 <code>.wire()</code>를 호출하려면, <code>auto_wire=False</code> 플래그를 설정합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    wiring_config <span class="token operator">=</span> containers<span class="token punctuation">.</span>WiringConfiguration<span class="token punctuation">(</span>
        modules<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;yourapp.module1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        auto_wire<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># container.wire() 가 자동으로 호출되지 않습니다.</span>
    container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># wire to &quot;yourapp.module1&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function F(D,I){const e=o("ExternalLinkIcon"),p=o("AdsenseB");return c(),l("div",null,[n("p",null,[s("원문 : "),n("a",r,[s("https://python-dependency-injector.ets-labs.org/wiring.html"),a(e)])]),d,n("div",k,[v,n("p",null,[n("a",m,[s("이슈 #404"),a(e)]),s("에서 "),b,s(" 데코레이터에 대해 좀더 자세하게 설명합니다.")])]),g,n("p",null,[s("함수단위 실행범위를 구현하기 위해 Wiring과 "),y,s(" Provider를 조합할 수 있습니다."),h,s(" 상세한 내용은 "),n("a",_,[f,s("와 Wiring, 함수단위 실행 범위"),a(e)]),s("에서 볼 수 있습니다.")]),w,q,j,P,C,x,S,W,N,B,a(p)])}const R=i(u,[["render",F],["__file","wiring.html.vue"]]);export{R as default};
