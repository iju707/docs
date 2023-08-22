import{_ as l,r as o,o as i,c as p,a as n,b as s,d as a,e as t}from"./app-95e21c4a.js";const r="/assets/factory_init_injections-5b1215e2.png",u="/assets/factory_init_injections_underlying-b81e1fa3.png",d="/assets/factory_delegation-5000f78b.png",k="/assets/abstract_factory-cc5d8400.png",b="/assets/factory_aggregate-e7a2aae4.png",v={},m={href:"https://python-dependency-injector.ets-labs.org/providers/factory.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://python-dependency-injector.ets-labs.org/api/providers.html#dependency_injector.providers.Factory",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"Factory",-1),_=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector <span class="token keyword">import</span> containers<span class="token punctuation">,</span> providers


<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    user_factory <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span>User<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>

    user1 <span class="token operator">=</span> container<span class="token punctuation">.</span>user_factory<span class="token punctuation">(</span><span class="token punctuation">)</span>
    user2 <span class="token operator">=</span> container<span class="token punctuation">.</span>user_factory<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Factory</code> Provider의 첫번째 인자는 객체를 생성할 클래스, 팩토리 함수 또는 메소드입니다.</p><p>나머지 <code>Factory</code>의 위치적, 키워드 인자는 의존성들입니다.<br><code>Factory</code>는 의존성을 새로운 객체가 생성될 때마다 주입합니다.<br> 의존성들은 아래의 규칙에 따라 주입됩니다.</p><ul><li>의존성이 Provider이면 호출되고 그 결과가 주입됩니다.</li><li>Provider 자체의 주입이 필요한 경우 <code>.provider</code> 속성을 사용합니다. 자세한 것은 <a href="#passing-providers-to-the-objects">객체에 Provider 전달하기</a>를 참고하세요.</li><li>다른 모든 종속성들은 &quot;그대로&quot; 주입됩니다.</li><li>위치적 컨텍스트 인자는 <code>Factory</code> 위치적 의존성 뒤에 추가됩니다.</li><li>키워드 컨텍스트 인자는 같은 이름일 경우 <code>Factory</code> 키워드 의존성보다 우선됩니다.</li></ul><p><img src="`+r+`" alt="factory_init_injections" loading="lazy"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector <span class="token keyword">import</span> containers<span class="token punctuation">,</span> providers


<span class="token keyword">class</span> <span class="token class-name">Photo</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> uid<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> main_photo<span class="token punctuation">:</span> Photo<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>uid <span class="token operator">=</span> uid
        self<span class="token punctuation">.</span>main_photo <span class="token operator">=</span> main_photo


<span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    photo_factory <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span>Photo<span class="token punctuation">)</span>

    user_factory <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span>
        User<span class="token punctuation">,</span>
        main_photo<span class="token operator">=</span>photo_factory<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>

    user1 <span class="token operator">=</span> container<span class="token punctuation">.</span>user_factory<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment"># user1 = User(1, main_photo=Photo()) 와 같습니다.</span>

    user2 <span class="token operator">=</span> container<span class="token punctuation">.</span>user_factory<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token comment"># user2 = User(2, main_photo=Photo()) 와 같습니다.</span>

    another_photo <span class="token operator">=</span> Photo<span class="token punctuation">(</span><span class="token punctuation">)</span>
    user3 <span class="token operator">=</span> container<span class="token punctuation">.</span>user_factory<span class="token punctuation">(</span>
        uid<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span>
        main_photo<span class="token operator">=</span>another_photo<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token comment"># user3 = User(uid=3, main_photo=another_photo) 와 같습니다.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Facotry</code> Provider는 속성을 주입할 수 있습니다.<br> 속성 주입을 명시하기 위해 <code>.add_attributes()</code> 메소드를 사용합니다.</p>`,7),g=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(` providers


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Client"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Service"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"__init__"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("client "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"None"),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    client `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("Client"),n("span",{class:"token punctuation"},")"),s(`

    service `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("Service"),n("span",{class:"token punctuation"},")"),s(`
    service`),n("span",{class:"token punctuation"},"."),s("add_attributes"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token operator"},"="),s("client"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"__main__"'),n("span",{class:"token punctuation"},":"),s(`
    container `),n("span",{class:"token operator"},"="),s(" Container"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    service `),n("span",{class:"token operator"},"="),s(" container"),n("span",{class:"token punctuation"},"."),s("service"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"assert"),s(),n("span",{class:"token builtin"},"isinstance"),n("span",{class:"token punctuation"},"("),s("service"),n("span",{class:"token punctuation"},"."),s("client"),n("span",{class:"token punctuation"},","),s(" Client"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=t('<h2 id="passing-arguments-to-the-underlying-providers" tabindex="-1"><a class="header-anchor" href="#passing-arguments-to-the-underlying-providers" aria-hidden="true">#</a> 내부 Provider에 인자 전달하기</h2><p><code>Factory</code> Provider는 내부 Provider에 인자를 전달할 수 있습니다.<br> 이것은 중첩된 객체 그래프를 조립하고 내부 안쪽까지 인자를 전달하는데 도움을 줍니다.</p><p>이 예제를 고려해보겠습니다.</p><p><img src="'+u+`" alt="factory_init_injections_underlying.png" loading="lazy"></p><p><code>Algorithm</code>을 생성하려면 <code>ClassificationTask</code>, <code>Loss</code>, <code>Regularizer</code> 모든 의존성을 제공해야합니다.<br> 체인의 마지막 객체, <code>Regularizer</code>는 <code>alpha</code>값을 의존성으로 가지고 있습니다.<br><code>alpha</code>값은 알고리즘마다 상이합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Algorithm<span class="token punctuation">(</span>
    task<span class="token operator">=</span>ClassificationTask<span class="token punctuation">(</span>
        loss<span class="token operator">=</span>Loss<span class="token punctuation">(</span>
            regularizer<span class="token operator">=</span>Regularizer<span class="token punctuation">(</span>
                alpha<span class="token operator">=</span>alpha<span class="token punctuation">,</span>  <span class="token comment"># &lt;-- 의존성</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Factory</code> Provider는 이러한 구성을 다루는데 도움을 줍니다.<br> 모든 클래스에 대한 팩토리를 생성하고 <code>alpha</code> 인자를 전달하기 위해 특수 이중 언더바 <code>__</code> 문법을 사용해야합니다.</p>`,7),w=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(` providers


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Regularizer"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"__init__"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" alpha"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"float"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("alpha "),n("span",{class:"token operator"},"="),s(` alpha


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Loss"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"__init__"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" regularizer"),n("span",{class:"token punctuation"},":"),s(" Regularizer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("regularizer "),n("span",{class:"token operator"},"="),s(` regularizer


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ClassificationTask"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"__init__"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" loss"),n("span",{class:"token punctuation"},":"),s(" Loss"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("loss "),n("span",{class:"token operator"},"="),s(` loss


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Algorithm"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"__init__"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" task"),n("span",{class:"token punctuation"},":"),s(" ClassificationTask"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("task "),n("span",{class:"token operator"},"="),s(` task


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    algorithm_factory `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s(`
        Algorithm`),n("span",{class:"token punctuation"},","),s(`
        task`),n("span",{class:"token operator"},"="),s("providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s(`
            ClassificationTask`),n("span",{class:"token punctuation"},","),s(`
            loss`),n("span",{class:"token operator"},"="),s("providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s(`
                Loss`),n("span",{class:"token punctuation"},","),s(`
                regularizer`),n("span",{class:"token operator"},"="),s("providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s(`
                    Regularizer`),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"__main__"'),n("span",{class:"token punctuation"},":"),s(`
    container `),n("span",{class:"token operator"},"="),s(" Container"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    algorithm_1 `),n("span",{class:"token operator"},"="),s(" container"),n("span",{class:"token punctuation"},"."),s("algorithm_factory"),n("span",{class:"token punctuation"},"("),s(`
        task__loss__regularizer__alpha`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"assert"),s(" algorithm_1"),n("span",{class:"token punctuation"},"."),s("task"),n("span",{class:"token punctuation"},"."),s("loss"),n("span",{class:"token punctuation"},"."),s("regularizer"),n("span",{class:"token punctuation"},"."),s("alpha "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0.5"),s(`

    algorithm_2 `),n("span",{class:"token operator"},"="),s(" container"),n("span",{class:"token punctuation"},"."),s("algorithm_factory"),n("span",{class:"token punctuation"},"("),s(`
        task__loss__regularizer__alpha`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0.7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"assert"),s(" algorithm_2"),n("span",{class:"token punctuation"},"."),s("task"),n("span",{class:"token punctuation"},"."),s("loss"),n("span",{class:"token punctuation"},"."),s("regularizer"),n("span",{class:"token punctuation"},"."),s("alpha "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0.7"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=t(`<p>키워드 인자의 이름에 <code>__</code>구분자를 사용하면 <code>Factory</code>가 <code>__</code> 표현식의 우측에 동일한 이름의 의존성을 찾습니다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;__&lt;keyword for the underlying provider&gt;=&lt;value&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>만약 <code>&lt;dependency&gt;</code>가 내부 Provider에 있다면 <code>&lt;keyword for the underlying provider&gt;=&lt;value&gt;</code>를 인자로 받습니다.</p><h2 id="passing-providers-to-the-objects" tabindex="-1"><a class="header-anchor" href="#passing-providers-to-the-objects" aria-hidden="true">#</a> 객체에 Provider 전달하기</h2><p>Provider의 호출결과가 아닌 자체를 주입해야한다면 Provider의 <code>.provider</code> 속성을 사용합니다.</p><p><img src="`+d+'" alt="factory_delegation.png" loading="lazy"></p>',6),F=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" typing "),n("span",{class:"token keyword"},"import"),s(" Callable"),n("span",{class:"token punctuation"},","),s(` List

`),n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(` providers


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"User"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"__init__"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" uid"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("uid "),n("span",{class:"token operator"},"="),s(` uid


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"UserRepository"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"__init__"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" user_factory"),n("span",{class:"token punctuation"},":"),s(" Callable"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},","),s(" User"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},":"),s(`
        self`),n("span",{class:"token punctuation"},"."),s("user_factory "),n("span",{class:"token operator"},"="),s(` user_factory

    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"get_all"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(" List"),n("span",{class:"token punctuation"},"["),s("User"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),s(`
            self`),n("span",{class:"token punctuation"},"."),s("user_factory"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"**"),s("user_data"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"for"),s(" user_data "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"uid"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"uid"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    user_factory `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("User"),n("span",{class:"token punctuation"},")"),s(`

    user_repository_factory `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s(`
        UserRepository`),n("span",{class:"token punctuation"},","),s(`
        user_factory`),n("span",{class:"token operator"},"="),s("user_factory"),n("span",{class:"token punctuation"},"."),s("provider"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"__main__"'),n("span",{class:"token punctuation"},":"),s(`
    container `),n("span",{class:"token operator"},"="),s(" Container"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    user_repository `),n("span",{class:"token operator"},"="),s(" container"),n("span",{class:"token punctuation"},"."),s("user_repository_factory"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    user1`),n("span",{class:"token punctuation"},","),s(" user2 "),n("span",{class:"token operator"},"="),s(" user_repository"),n("span",{class:"token punctuation"},"."),s("get_all"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"assert"),s(" user1"),n("span",{class:"token punctuation"},"."),s("uid "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"assert"),s(" user2"),n("span",{class:"token punctuation"},"."),s("uid "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"2"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=t(`<div class="hint-container note"><p class="hint-container-title">Note</p><p>모든 Provider가 <code>.provider</code>속성을 가지고 있습니다.</p></div><h2 id="string-imports" tabindex="-1"><a class="header-anchor" href="#string-imports" aria-hidden="true">#</a> 문자열로 가져오기</h2><p><code>Factory</code> Provider는 문자열 가져오기를 처리할 수 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    service <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span><span class="token string">&quot;myapp.mypackage.mymodule.Service&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>상대적 가져오기로 만들 수 도 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># myapp/container.py 에서</span>

<span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    service <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span><span class="token string">&quot;.mypackage.mymodule.Service&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또는 현재 모듈의 멤버를 이름으로 지정하여 가져옵니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Service</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    service <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span><span class="token string">&quot;Service&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Note</p><p><code>Singleton</code>, <code>Callable</code>, <code>Resource</code>, <code>Coroutine</code> Provider들은 <code>Factory</code> Provider와 동일한 방법으로 문자열로 가져오기가 가능합니다.</p></div><h2 id="specializing-the-provided-type" tabindex="-1"><a class="header-anchor" href="#specializing-the-provided-type" aria-hidden="true">#</a> 제공되는 유형 지정하기</h2><p>특정 유형만 제공되는 특별화된 <code>Factory</code> Provider를 만들 수 있습니다.<br> 이것을 위해 <code>Factory</code> Provider의 하위 클래스를 생성하고, <code>provided_type</code> 클래스 속성을 정의해야합니다.</p>`,11),x=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(" providers"),n("span",{class:"token punctuation"},","),s(` errors


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BaseService"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SomeService"),n("span",{class:"token punctuation"},"("),s("BaseService"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ServiceProvider"),n("span",{class:"token punctuation"},"("),s("providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    provided_type `),n("span",{class:"token operator"},"="),s(` BaseService


`),n("span",{class:"token comment"},"# 알맞은 유형으로 서비스 Provider 생성하기:"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Services"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    some_service_provider `),n("span",{class:"token operator"},"="),s(" ServiceProvider"),n("span",{class:"token punctuation"},"("),s("SomeService"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token comment"},"# 잘못된 유형으로 서비스 Provider 생성시도하기"),s(`
`),n("span",{class:"token keyword"},"try"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
        some_service_provider `),n("span",{class:"token operator"},"="),s(" ServiceProvider"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"object"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"except"),s(" errors"),n("span",{class:"token punctuation"},"."),s("Error "),n("span",{class:"token keyword"},"as"),s(" exception"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("exception"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"# 출력은 아래와 같습니다:"),s(`
    `),n("span",{class:"token comment"},'# <class "__main__.ServiceProvider"> can provide only'),s(`
    `),n("span",{class:"token comment"},'# <class "__main__.BaseService"> instances'),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"abstract-factory",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#abstract-factory","aria-hidden":"true"},"#"),s(" 추상적 Factory")],-1),j={href:"https://python-dependency-injector.ets-labs.org/api/providers.html#dependency_injector.providers.AbstractFactory",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"AbstractFactory",-1),S=n("br",null,null,-1),q=n("code",null,"AbstractFactory",-1),N=n("code",null,"Factory",-1),B=n("ul",null,[n("li",null,"지정된 유형의 객체만 제공"),n("li",null,"사용전 재정의가 반드시 필요")],-1),J=n("p",null,[n("img",{src:k,alt:"abstract_factory.png",loading:"lazy"})],-1),D=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` abc
`),n("span",{class:"token keyword"},"import"),s(` dataclasses
`),n("span",{class:"token keyword"},"import"),s(` random
`),n("span",{class:"token keyword"},"from"),s(" typing "),n("span",{class:"token keyword"},"import"),s(` List

`),n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(` providers


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"AbstractCacheClient"),n("span",{class:"token punctuation"},"("),s("metaclass"),n("span",{class:"token operator"},"="),s("abc"),n("span",{class:"token punctuation"},"."),s("ABCMeta"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token decorator annotation punctuation"},[s("@dataclasses"),n("span",{class:"token punctuation"},"."),s("dataclass")]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"RedisCacheClient"),n("span",{class:"token punctuation"},"("),s("AbstractCacheClient"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    host`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"str"),s(`
    port`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"int"),s(`
    db`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"int"),s(`


`),n("span",{class:"token decorator annotation punctuation"},[s("@dataclasses"),n("span",{class:"token punctuation"},"."),s("dataclass")]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MemcachedCacheClient"),n("span",{class:"token punctuation"},"("),s("AbstractCacheClient"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    hosts`),n("span",{class:"token punctuation"},":"),s(" List"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"str"),n("span",{class:"token punctuation"},"]"),s(`
    port`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"int"),s(`
    prefix`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"str"),s(`


`),n("span",{class:"token decorator annotation punctuation"},[s("@dataclasses"),n("span",{class:"token punctuation"},"."),s("dataclass")]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Service"),n("span",{class:"token punctuation"},":"),s(`
    cache`),n("span",{class:"token punctuation"},":"),s(` AbstractCacheClient


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    cache_client_factory `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("AbstractFactory"),n("span",{class:"token punctuation"},"("),s("AbstractCacheClient"),n("span",{class:"token punctuation"},")"),s(`

    service_factory `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s(`
        Service`),n("span",{class:"token punctuation"},","),s(`
        cache`),n("span",{class:"token operator"},"="),s("cache_client_factory"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"__main__"'),n("span",{class:"token punctuation"},":"),s(`
    container `),n("span",{class:"token operator"},"="),s(" Container"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    cache_type `),n("span",{class:"token operator"},"="),s(" random"),n("span",{class:"token punctuation"},"."),s("choice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"redis"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"memcached"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" cache_type "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"redis"'),n("span",{class:"token punctuation"},":"),s(`
        container`),n("span",{class:"token punctuation"},"."),s("cache_client_factory"),n("span",{class:"token punctuation"},"."),s("override"),n("span",{class:"token punctuation"},"("),s(`
            providers`),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s(`
                RedisCacheClient`),n("span",{class:"token punctuation"},","),s(`
                host`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"localhost"'),n("span",{class:"token punctuation"},","),s(`
                port`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"6379"),n("span",{class:"token punctuation"},","),s(`
                db`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"elif"),s(" cache_type "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"memcached"'),n("span",{class:"token punctuation"},":"),s(`
        container`),n("span",{class:"token punctuation"},"."),s("cache_client_factory"),n("span",{class:"token punctuation"},"."),s("override"),n("span",{class:"token punctuation"},"("),s(`
            providers`),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s(`
                MemcachedCacheClient`),n("span",{class:"token punctuation"},","),s(`
                hosts`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"10.0.1.1"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                port`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"11211"),n("span",{class:"token punctuation"},","),s(`
                prefix`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"my_app"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},")"),s(`

    service `),n("span",{class:"token operator"},"="),s(" container"),n("span",{class:"token punctuation"},"."),s("service_factory"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("service"),n("span",{class:"token punctuation"},"."),s("cache"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"# cache_type 변수값에 따라 결과가 다릅니다."),s(`
    `),n("span",{class:"token comment"},"#"),s(`
    `),n("span",{class:"token comment"},'# 값이 "redis" 이면:'),s(`
    `),n("span",{class:"token comment"},'# RedisCacheClient(host="localhost", port=6379, db=0)'),s(`
    `),n("span",{class:"token comment"},"#"),s(`
    `),n("span",{class:"token comment"},'# 값이 "memcached" 이면:'),s(`
    `),n("span",{class:"token comment"},'# MemcachedCacheClient(hosts=["10.0.1.1"], port=11211, prefix="my_app")'),s(`
    `),n("span",{class:"token comment"},"#"),s(`
    `),n("span",{class:"token comment"},"# 값이 None 이면:"),s(`
    `),n("span",{class:"token comment"},'# Error: AbstractFactory(<class "__main__.AbstractCacheClient">) must be'),s(`
    `),n("span",{class:"token comment"},"# overridden before calling"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("h2",{id:"factory-aggregate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#factory-aggregate","aria-hidden":"true"},"#"),s(" Factory 집합")],-1),U={href:"https://python-dependency-injector.ets-labs.org/api/providers.html#dependency_injector.providers.FactoryAggregate",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"FactoryAggregate",-1),H={class:"hint-container note"},T=n("p",{class:"hint-container-title"},"함께보기",-1),E={href:"https://python-dependency-injector.ets-labs.org/providers/aggregate.html#aggregate-provider",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"Aggregate Provider",-1),M=n("code",null,"FactoryAggregate",-1),V=n("code",null,"Factory",-1),$=n("p",null,[s("집합된 Factory들은 문자열 키로 연결됩니다."),n("br"),n("code",null,"FactoryAggregate"),s("를 호출할 때 첫번째 인자로 이 키들중 하나를 제공해야 합니다."),n("br"),n("code",null,"FactoryAggregate"),s("는 키가 일치하는 Factory를 탐색하고 나머지 인자를 가지고 그것을 호출합니다.")],-1),I=n("p",null,[n("img",{src:b,alt:"factory_aggregate.png",loading:"lazy"})],-1),K=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` dataclasses
`),n("span",{class:"token keyword"},"import"),s(` sys

`),n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(` providers


`),n("span",{class:"token decorator annotation punctuation"},[s("@dataclasses"),n("span",{class:"token punctuation"},"."),s("dataclass")]),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Game"),n("span",{class:"token punctuation"},":"),s(`
    player1`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"str"),s(`
    player2`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token builtin"},"str"),s(`

    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"play"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("self"),n("span",{class:"token punctuation"},"."),s("player1"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"}," and "),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("self"),n("span",{class:"token punctuation"},"."),s("player2"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},' are "')]),s(`
            `),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"playing '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("self"),n("span",{class:"token punctuation"},"."),s("__class__"),n("span",{class:"token punctuation"},"."),s("__name__"),n("span",{class:"token punctuation"},"."),s("lower"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),s(`
        `),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Chess"),n("span",{class:"token punctuation"},"("),s("Game"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Checkers"),n("span",{class:"token punctuation"},"("),s("Game"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Ludo"),n("span",{class:"token punctuation"},"("),s("Game"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    game_factory `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("FactoryAggregate"),n("span",{class:"token punctuation"},"("),s(`
        chess`),n("span",{class:"token operator"},"="),s("providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("Chess"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        checkers`),n("span",{class:"token operator"},"="),s("providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("Checkers"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        ludo`),n("span",{class:"token operator"},"="),s("providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("Ludo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"__main__"'),n("span",{class:"token punctuation"},":"),s(`
    game_type `),n("span",{class:"token operator"},"="),s(" sys"),n("span",{class:"token punctuation"},"."),s("argv"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("lower"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    player1 `),n("span",{class:"token operator"},"="),s(" sys"),n("span",{class:"token punctuation"},"."),s("argv"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("capitalize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    player2 `),n("span",{class:"token operator"},"="),s(" sys"),n("span",{class:"token punctuation"},"."),s("argv"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("capitalize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    container `),n("span",{class:"token operator"},"="),s(" Container"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    selected_game `),n("span",{class:"token operator"},"="),s(" container"),n("span",{class:"token punctuation"},"."),s("game_factory"),n("span",{class:"token punctuation"},"("),s("game_type"),n("span",{class:"token punctuation"},","),s(" player1"),n("span",{class:"token punctuation"},","),s(" player2"),n("span",{class:"token punctuation"},")"),s(`
    selected_game`),n("span",{class:"token punctuation"},"."),s("play"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"# $ python factory_aggregate.py chess John Jane"),s(`
    `),n("span",{class:"token comment"},"# John and Jane are playing chess"),s(`
    `),n("span",{class:"token comment"},"#"),s(`
    `),n("span",{class:"token comment"},"# $ python factory_aggregate.py checkers John Jane"),s(`
    `),n("span",{class:"token comment"},"# John and Jane are playing checkers"),s(`
    `),n("span",{class:"token comment"},"#"),s(`
    `),n("span",{class:"token comment"},"# $ python factory_aggregate.py ludo John Jane"),s(`
    `),n("span",{class:"token comment"},"# John and Jane are playing ludo"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=t(`<p><code>.providers</code> 속성을 사용하면 집합된 Provider들의 딕셔너리를 가져올 수 있습니다.<br> 이전 예제에서 게임 Provider의 딕셔너리를 가져오려면 <code>game_factory.providers</code> 속성을 사용하면 됩니다.</p><p>또한 속성처럼 집합된 Provider에 접근할 수 있습니다.<br> 이전 예제에서 <code>Chess</code> 객체를 생성하는 것은 <code>chess = game_factory.chess(&quot;John&quot;, &quot;Jane&quot;)</code>로 할 수 있습니다.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p><code>FactoryAggregate</code> Provider를 재정의할 수 없습니다.</p></div><div class="hint-container note"><p class="hint-container-title">Note</p><p><code>FactoryAggregate</code> Provider를 주입할 때는 &quot;있는 그대로&quot; 전달됩니다.</p></div><p>문자열이 아니거나, <code>.</code>과 <code>-</code>를 사용한 문자열 키를 사용하려면 위치적 인자를 딕셔너리에 제공해야합니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>providers<span class="token punctuation">.</span>FactoryAggregate<span class="token punctuation">(</span><span class="token punctuation">{</span>
    SomeClass<span class="token punctuation">:</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;key.with.periods&quot;</span><span class="token punctuation">:</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;key-with-dashes&quot;</span><span class="token punctuation">:</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예로 들면,</p>`,7),Q=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{python:"",class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" dependency_injector "),n("span",{class:"token keyword"},"import"),s(" containers"),n("span",{class:"token punctuation"},","),s(` providers


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Command"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"CommandA"),n("span",{class:"token punctuation"},"("),s("Command"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"CommandB"),n("span",{class:"token punctuation"},"("),s("Command"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Handler"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"HandlerA"),n("span",{class:"token punctuation"},"("),s("Handler"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"HandlerB"),n("span",{class:"token punctuation"},"("),s("Handler"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Container"),n("span",{class:"token punctuation"},"("),s("containers"),n("span",{class:"token punctuation"},"."),s("DeclarativeContainer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    handler_factory `),n("span",{class:"token operator"},"="),s(" providers"),n("span",{class:"token punctuation"},"."),s("FactoryAggregate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        CommandA`),n("span",{class:"token punctuation"},":"),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("HandlerA"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        CommandB`),n("span",{class:"token punctuation"},":"),s(" providers"),n("span",{class:"token punctuation"},"."),s("Factory"),n("span",{class:"token punctuation"},"("),s("HandlerB"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"__main__"'),n("span",{class:"token punctuation"},":"),s(`
    container `),n("span",{class:"token operator"},"="),s(" Container"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    handler_a `),n("span",{class:"token operator"},"="),s(" container"),n("span",{class:"token punctuation"},"."),s("handler_factory"),n("span",{class:"token punctuation"},"("),s("CommandA"),n("span",{class:"token punctuation"},")"),s(`
    handler_b `),n("span",{class:"token operator"},"="),s(" container"),n("span",{class:"token punctuation"},"."),s("handler_factory"),n("span",{class:"token punctuation"},"("),s("CommandB"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"assert"),s(),n("span",{class:"token builtin"},"isinstance"),n("span",{class:"token punctuation"},"("),s("handler_a"),n("span",{class:"token punctuation"},","),s(" HandlerA"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"assert"),s(),n("span",{class:"token builtin"},"isinstance"),n("span",{class:"token punctuation"},"("),s("handler_b"),n("span",{class:"token punctuation"},","),s(" HandlerB"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function W(X,Y){const e=o("ExternalLinkIcon"),c=o("AdsenseB");return i(),p("div",null,[n("p",null,[s("원문 : "),n("a",m,[s("https://python-dependency-injector.ets-labs.org/providers/factory.html"),a(e)])]),n("p",null,[n("a",y,[h,a(e)]),s(" Provider는 새로운 객체들을 생성합니다.")]),_,g,f,w,C,F,P,x,A,n("p",null,[n("a",j,[z,a(e)]),s(" Provider는 기반이 되는 Provider 클래스를 만들고 특정 구현에 대해 아직 미정일 경우 도움이 됩니다."),S,q,s(" Provider는 2개의 특이점을 가진 "),N,s(" Provider 입니다.")]),B,J,D,L,n("p",null,[n("a",U,[R,a(e)]),s(" Provider는 다수의 Factory를 집합으로 제공합니다.")]),n("div",H,[T,n("p",null,[n("a",E,[G,a(e)]),s(" - "),M,s(" Provider의 후속으로 "),V,s(" 뿐만아니라 다른 유형의 Provider를 집합시킬 수 있습니다.")])]),$,I,K,O,Q,a(c)])}const nn=l(v,[["render",W],["__file","factory.html.vue"]]);export{nn as default};
