import{_ as i,r as c,o as t,c as d,a as s,b as n,d as a,w as o,e as l}from"./app-95e21c4a.js";const u={},r=l('<p>프로필은 선택적 서비스 활성화로 Compose 어플리케이션 모델을 다양한 용도 및 환경에 사용할 수 있게 합니다.<br> 각 서비스를 0개 이상의 프로필에 매핑하면 됩니다.<br> 매핑되지 않은 경우, 서비스는 <em>항상</em> 시작하며, 매핑되면 해당 프로필이 활성화 된 경우에만 시작됩니다.</p><p>이것은 하나의 <code>docker-compose.yml</code>에 추가적인 서비스를 정의할 수 있게 합니다.<br> 디버깅이나 개발환경과 같은 특수한 시나리오를 시작가능하게 합니다.</p><h2 id="서비스에-프로필-매핑" tabindex="-1"><a class="header-anchor" href="#서비스에-프로필-매핑" aria-hidden="true">#</a> 서비스에 프로필 매핑</h2>',3),m=s("code",null,"profiles",-1),k=l(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> frontend
    <span class="token key atrule">profiles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;frontend&quot;</span><span class="token punctuation">]</span>

  <span class="token key atrule">phpmyadmin</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> phpmyadmin
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
    <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> debug

  <span class="token key atrule">backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> backend

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>frontend</code>와 <code>phpmyadmin</code> 서비스는 <code>frontend</code>와 <code>debug</code> 프로필에 연결되어있으며 해당 프로필이 활성화 된 경우에만 서비스를 시작하게 됩니다.</p><p><code>profiles</code> 속성이 없는 서비스는 <em>항상</em> 활성화 됩니다. 예로, 위 상태에서 <code>docker-compose up</code>을 실행하면 <code>backend</code>와 <code>db</code>만 시작됩니다.</p><p>프로필 이름은 <code>[a-zA-Z0-9][a-zA-Z0-9_.-]+</code> 정규식 유형에 맞게 작성되어야 합니다.</p><blockquote><p><strong>정보</strong></p><p>어플리케이션의 주요 서비스는 <code>profiles</code>에 매핑되어있지 않아야 합니다. 그래야 항상 활성 및 자동적으로 시작됩니다.</p></blockquote><h2 id="프로필-활성화" tabindex="-1"><a class="header-anchor" href="#프로필-활성화" aria-hidden="true">#</a> 프로필 활성화</h2>`,6),v=s("code",null,"--profile",-1),b=s("code",null,"COMPOSE_PROFILES",-1),g=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> <span class="token parameter variable">--profile</span> debug up
$ <span class="token assign-left variable">COMPOSE_PROFILES</span><span class="token operator">=</span>debug <span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>위 명령어 둘다 <code>debug</code> 프로필을 활성화한 뒤 어플리케이션을 시작하는 것 입니다.<br> 위의 <code>docker-compose.yml</code> 파일을 사용할 경우 <code>backend</code>, <code>db</code>, <code>phpmyadmin</code>을 시작하게 됩니다.</p><p>다수의 프로필은 다수의 <code>--profile</code> 플래그를 전달하거나 <code>COMPOSE_PROFILES</code> 환경변수에 쉼표로 구분된 것을 전달하면 됩니다.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> <span class="token parameter variable">--profile</span> frontend <span class="token parameter variable">--profile</span> debug up
$ <span class="token assign-left variable">COMPOSE_PROFILES</span><span class="token operator">=</span>frontend,debug <span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="자동활성-프로필-및-종속성-해결" tabindex="-1"><a class="header-anchor" href="#자동활성-프로필-및-종속성-해결" aria-hidden="true">#</a> 자동활성 프로필 및 종속성 해결</h2><p><code>profiles</code>가 할당된 서비스를 명령어에 명시할 경우 해당 프로필을 자동으로 활성화합니다.<br> 이것은 일회성 서비스나 디버깅 도구등에 사용됩니다.<br> 예를 들어 아래의 구성을 보겠습니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> backend

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql

  <span class="token key atrule">db-migrations</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> backend
    <span class="token key atrule">command</span><span class="token punctuation">:</span> myapp migrate
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
    <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># backend와 db만 시작합니다</span>
$ <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>

<span class="token comment"># 암묵적으로 \`tools\` 프로필을 활성화 하고 db-migrations를 실행합니다.</span>
<span class="token comment"># (필요시 db를 시작합니다)</span>
$ <span class="token function">docker-compose</span> run db-migrations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나 <code>docker-compose</code>는 명령어에 있는 서비스의 프로필만 자동으로 활성화 해주는 것이며 그에 종속된 서비스의 프로필은 활성화 되지 않습니다.<br> 따라서 <code>depends_on</code>의 대상이 되는 모든 서비스는 공통 프로필을 가져서(또는 <code>profiles</code> 생략) 항상 활성화되거나 명시적으로 프로필을 활성화 해야합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> web

  <span class="token key atrule">mock-backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> backend
    <span class="token key atrule">profiles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dev&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">profiles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dev&quot;</span><span class="token punctuation">]</span>

  <span class="token key atrule">phpmyadmin</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> phpmyadmin
    <span class="token key atrule">profiles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;debug&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># &quot;web&quot;만 시작합니다</span>
$ <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>

<span class="token comment"># 암묵적으로 \`dev\` 프로필을 활성화 하고 mock-backend를 시작합니다.</span>
<span class="token comment"># (필요시 db 포함)</span>
$ <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> mock-backend

<span class="token comment"># &quot;dev&quot; 프로필이 비활성화 되어있어 실패합니다</span>
$ <span class="token function">docker-compose</span> up phpmyadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>phpmyadmin</code>을 대상으로 하는 것은 자동으로 그 프로필을 활성화 합니다. - 예. <code>debug</code><br> 하지만 종속된 <code>db</code>에 대한 프로필을 자동으로 활성화 하지는 않습니다. - 예. <code>dev</code><br> 따라서 이것을 수정하려면 <code>db</code>서비스에 <code>debug</code> 프로필을 추가합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">db</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;debug&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또는 <code>db</code>의 프로필을 명시적으로 활성화 합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># phpmyadmin을 대상으로 하였기 때문에 프로필 &quot;debug&quot;는 자동으로 활성화가 됩니다.</span>
$ <span class="token function">docker-compose</span> <span class="token parameter variable">--profile</span> dev up phpmyadmin
$ <span class="token assign-left variable">COMPOSE_PROFILES</span><span class="token operator">=</span>dev <span class="token function">docker-compose</span> up phpmyadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compose-문서-더보기" tabindex="-1"><a class="header-anchor" href="#compose-문서-더보기" aria-hidden="true">#</a> Compose 문서 더보기</h2>`,16);function h(y,f){const e=c("RouterLink"),p=c("AdsenseB");return t(),d("div",null,[r,s("p",null,[n("서비스는 프로필 이름의 배열을 받는 "),a(e,{to:"/docker/compose/compose-file/compose-file-v3.html#profiles"},{default:o(()=>[m,n(" 속성")]),_:1}),n("을 통해 프로필에 할당될 수 있습니다.")]),k,s("p",null,[n("프로필을 활성화하려면 "),v,n(),a(e,{to:"/docker/compose/reference/overview.html"},{default:o(()=>[n("명령어 옵션")]),_:1}),n(" 또는 "),a(e,{to:"/docker/compose/reference/envvars.html#compose_profiles"},{default:o(()=>[b,n(" 환경변수")]),_:1}),n("를 사용할수 있습니다.")]),g,s("ul",null,[s("li",null,[a(e,{to:"/docker/compose/"},{default:o(()=>[n("사용자 가이드")]),_:1})]),s("li",null,[a(e,{to:"/docker/compose/install.html"},{default:o(()=>[n("Compose 설치하기")]),_:1})]),s("li",null,[a(e,{to:"/docker/compose/gettingstarted.html"},{default:o(()=>[n("시작하기")]),_:1})]),s("li",null,[a(e,{to:"/docker/compose/reference/"},{default:o(()=>[n("명령어 레퍼런스")]),_:1})]),s("li",null,[a(e,{to:"/docker/compose/compose-file/"},{default:o(()=>[n("Compose 파일 레퍼런스")]),_:1})]),s("li",null,[a(e,{to:"/docker/compose/samples-for-compose.html"},{default:o(()=>[n("Compose를 활용한 샘플 어플리케이션")]),_:1})])]),a(p)])}const q=i(u,[["render",h],["__file","profiles.html.vue"]]);export{q as default};
