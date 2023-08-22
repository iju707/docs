import{_ as c,r as t,o as p,c as l,a as n,b as s,d as e,w as r,e as u}from"./app-95e21c4a.js";const d={},k={href:"https://python-dependency-injector.ets-labs.org/",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,[n("code",null,"Dependency Injector"),s("는 파이썬의 의존성 주입 프레임워크입니다.")],-1),v=n("p",null,"의존성 주입 원칙을 구현하는데 도움을 줍니다.",-1),h=n("p",null,[n("code",null,"Dependency Injector"),s("의 주요 기능은 다음과 같습니다.")],-1),m=n("strong",null,"Provider",-1),g=n("code",null,"Factory",-1),b=n("code",null,"Singleton",-1),y=n("code",null,"Callable",-1),f=n("code",null,"Coroutine",-1),j=n("code",null,"Object",-1),w=n("code",null,"List",-1),C=n("code",null,"Dict",-1),P=n("code",null,"Configuration",-1),I=n("code",null,"Resource",-1),x=n("code",null,"Dependency",-1),A=n("code",null,"Selector",-1),D=n("strong",null,"Overriding",-1),q={href:"https://python-dependency-injector.ets-labs.org/providers/overriding.html#provider-overriding",target:"_blank",rel:"noopener noreferrer"},S=n("strong",null,"Configuration",-1),T=n("code",null,"yaml",-1),B=n("code",null,"ini",-1),E=n("code",null,"json",-1),L=n("code",null,"pydantic",-1),N={href:"https://python-dependency-injector.ets-labs.org/providers/configuration.html#configuration-provider",target:"_blank",rel:"noopener noreferrer"},R=n("strong",null,"Resources",-1),F={href:"https://python-dependency-injector.ets-labs.org/providers/resource.html#resource-provider",target:"_blank",rel:"noopener noreferrer"},V=n("strong",null,"Containers",-1),O={href:"https://python-dependency-injector.ets-labs.org/containers/index.html#containers",target:"_blank",rel:"noopener noreferrer"},W=n("strong",null,"Wiring",-1),M={href:"https://python-dependency-injector.ets-labs.org/wiring.html#wiring",target:"_blank",rel:"noopener noreferrer"},z=n("strong",null,"Asynchronous",-1),K={href:"https://python-dependency-injector.ets-labs.org/providers/async.html#async-injections",target:"_blank",rel:"noopener noreferrer"},U=n("strong",null,"Typing",-1),Y=n("code",null,"mypy",-1),G={href:"https://python-dependency-injector.ets-labs.org/providers/typing_mypy.html#provider-typing",target:"_blank",rel:"noopener noreferrer"},H=n("li",null,[n("strong",null,"성능"),s(" 빠릅니다. "),n("code",null,"Cython"),s("으로 작성되었습니다.")],-1),J=n("li",null,[n("strong",null,"성숙도"),s(" 성숙하고 운영에 준비되었습니다. 테스트와 문서화가 잘 되어있고 지원이 잘됩니다.")],-1),Q=u(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dependency_injector <span class="token keyword">import</span> containers<span class="token punctuation">,</span> providers
<span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>wiring <span class="token keyword">import</span> Provide<span class="token punctuation">,</span> inject


<span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    config <span class="token operator">=</span> providers<span class="token punctuation">.</span>Configuration<span class="token punctuation">(</span><span class="token punctuation">)</span>

    api_client <span class="token operator">=</span> providers<span class="token punctuation">.</span>Singleton<span class="token punctuation">(</span>
        ApiClient<span class="token punctuation">,</span>
        api_key<span class="token operator">=</span>config<span class="token punctuation">.</span>api_key<span class="token punctuation">,</span>
        timeout<span class="token operator">=</span>config<span class="token punctuation">.</span>timeout<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    service <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span>
        Service<span class="token punctuation">,</span>
        api_client<span class="token operator">=</span>api_client<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span>service<span class="token punctuation">:</span> Service <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>service<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>
    container<span class="token punctuation">.</span>config<span class="token punctuation">.</span>api_key<span class="token punctuation">.</span>from_env<span class="token punctuation">(</span><span class="token string">&quot;API_KEY&quot;</span><span class="token punctuation">,</span> required<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    container<span class="token punctuation">.</span>config<span class="token punctuation">.</span>timeout<span class="token punctuation">.</span>from_env<span class="token punctuation">(</span><span class="token string">&quot;TIMEOUT&quot;</span><span class="token punctuation">,</span> as_<span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>
    container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>modules<span class="token operator">=</span><span class="token punctuation">[</span>__name__<span class="token punctuation">]</span><span class="token punctuation">)</span>

    main<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;-- 의존성이 자동으로 주입됩니다.</span>

    <span class="token keyword">with</span> container<span class="token punctuation">.</span>api_client<span class="token punctuation">.</span>override<span class="token punctuation">(</span>mock<span class="token punctuation">.</span>Mock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        main<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;-- 재정의된 의존성이 자동으로 주입됩니다.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Dependency Injector</code>에서 개체 조립은 Container에 통합됩니다.<br> Dependency Injector는 명시적으로 정의됩니다.<br> 이것은 어플리케이션의 동작이 어떻게 되는지 이해하고 변경하는데 쉽게 만듭니다.</p><p><img src="https://raw.githubusercontent.com/wiki/ets-labs/python-dependency-injector/img/di-readme.svg" alt="step for dependency injector" loading="lazy"></p><p>문서를 보고 <code>Dependency Injector</code>가 어떻게 동작하는지 더 알아보세요.</p>`,4);function X(Z,$){const a=t("ExternalLinkIcon"),o=t("RouterLink"),i=t("AdsenseB");return p(),l("div",null,[n("p",null,[s("원문 : "),n("a",k,[s("https://python-dependency-injector.ets-labs.org/"),e(a)])]),_,v,h,n("ul",null,[n("li",null,[m,s(" 객체를 모으는데 도움이 되는 "),g,s(", "),b,s(", "),y,s(", "),f,s(", "),j,s(", "),w,s(", "),C,s(", "),P,s(", "),I,s(", "),x,s(", "),A,s(" Provider를 제공합니다. "),e(o,{to:"/python/dependency-injector/providers/"},{default:r(()=>[s("Provider")]),_:1}),s("를 참고하세요")]),n("li",null,[D,s(" 즉시 다른 Provider를 또다른 Provider로 재정의 가능합니다. 개발/스테이지 환경의 테스트나 구성에 API 클라이언트를 목 등으로 대체할 수 있도록 도와줍니다. "),n("a",q,[s("Provider 재정의"),e(a)]),s("를 참고하세요.")]),n("li",null,[S,s(" 설정을 "),T,s(", "),B,s(", "),E,s(" 파일, "),L,s(" 설정, 환경변수, 디렉터리에서 읽을 수 있습니다. "),n("a",N,[s("Configuration Provider"),e(a)]),s("를 참고하세요.")]),n("li",null,[R,s(" 초기화 및 로그, 이벤트 루프, 쓰레드/프로세스 풀 등의 구성을 도화줄 수 있습니다. Wiring과 함께 함수단위 실행 범위로 사용할 수 있습니다. "),n("a",F,[s("Resource Provider"),e(a)]),s("를 참고하세요.")]),n("li",null,[V,s(" 선언적, 동적 컨테이너를 제공합니다. "),n("a",O,[s("Containers"),e(a)]),s("를 참고하세요.")]),n("li",null,[W,s(" 함수와 메소드에 의존성을 주입합니다. Django, Flask, Aiohttp, Sanic, FastAPI 등과 같은 다른 프레임워크에 통합할 때 도움이 됩니다. "),n("a",M,[s("Wiring"),e(a)]),s("을 참고하세요.")]),n("li",null,[z,s(" 비동기 주입을 지원합니다. "),n("a",K,[s("Asynchronous Injections"),e(a)]),s("를 참고하세요.")]),n("li",null,[U,s(),Y,s("에 친화적인 타이핑 부분을 제공합니다. "),n("a",G,[s("Typing과 mypy"),e(a)]),s("를 참고하세요.")]),H,J]),Q,e(i)])}const sn=c(d,[["render",X],["__file","index.html.vue"]]);export{sn as default};