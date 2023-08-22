import{_ as p,r as l,o as i,c as d,a as s,b as n,d as e,w as o,e as t}from"./app-95e21c4a.js";const u={},r=s("br",null,null,-1),k=s("br",null,null,-1),m=s("em",null,"연결",-1),v=s("em",null,"검색",-1),b=s("strong",null,"참고",-1),_=s("br",null,null,-1),h=s("br",null,null,-1),y=s("code",null,"--project-name",-1),f=s("code",null,"COMPOSE_PROJECT_NAME",-1),g=t(`<p>예로들어, <code>myapp</code>이라는 디렉터리에 어플리케이션이 있고, <code>docker-compose.yml</code>은 다음과 같습니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8000:8000&quot;</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8001:5432&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose up</code> 명령을 실행하면 아래와 같이 처리됩니다.</p><ol><li><code>myapp_default</code>라는 이름의 네트워크가 생성됩니다.</li><li><code>web</code> 구성을 사용하여 컨테이너가 생성됩니다. <code>web</code>이라는 이름으로 <code>myapp_default</code> 네트워크에 참여합니다.</li><li><code>db</code> 구성을 사용하여 컨테이너가 생성됩니다. <code>db</code>라는 이름으로 <code>myapp_default</code> 네트워크에 참여합니다.</li></ol><blockquote><p><strong>v2.1 이상에서, 오버레이 네트워크는 항상 <code>attachable</code>입니다.</strong></p><p>Compose 파일 형식 2.1로 시작하면, 오버레이 네트워크는 항상 <code>attachable</code> 상태로 생성됩니다.<br> 이것은 설정불가능합니다.<br> 이 의미는 단독 컨테이너도 오버레이 네트워크에 접속할 수 있다는 것 입니다.</p><p>Compose 파일 형식 3.x 에서는 <code>attachable</code> 속성을 <code>false</code>로 설정할 수 있습니다.</p></blockquote><p>각각의 컨테이너는 호스트명 <code>web</code>과 <code>db</code>로 검색가능하며, 적절한 컨테이너 IP 주소를 얻게 됩니다.<br> 예로들어, <code>web</code> 어플리케이션 코드는 <code>postgres://db:5432</code>라는 주소를 접속하여 Postgres 데이터베이스의 사용이 가능합니다.</p><p><code>HOST_PORT</code>와 <code>CONTAINER_PORT</code>간의 구분이 중요합니다.<br> 위 예제에서, <code>db</code>의 <code>HOST_PORT</code>는 <code>8001</code>이며 컨테이너 포트는 <code>5432</code> (Postgres 기본값) 입니다.<br> 네트워크 연결이 가능한 서비스간 통신은 <code>CONTAINER_PORT</code>를 사용합니다.<br><code>HOST_PORT</code>가 정의되면, 서비스는 스웜 밖에서도 접근 가능합니다.</p><p><code>web</code> 컨테이너에서 <code>db</code> 접근주소는 <code>postgres://db:5432</code>와 같습니다.<br> 호스트 머신에서는 접근 주소는 <code>postgres://{DOCKER_IP}:8001</code>와 같습니다.</p><h2 id="컨테이너-업데이트" tabindex="-1"><a class="header-anchor" href="#컨테이너-업데이트" aria-hidden="true">#</a> 컨테이너 업데이트</h2><p>서비스의 구성을 변경하고 갱신하기 위해 <code>docker-compose up</code>을 실행하면 오래된 컨테이너는 삭제되며 새로운 컨테이너가 동일한 이름이지만 다른 IP로 네트워크에 참여합니다.<br> 실행중인 컨테이너는 이름으로 찾고 새로운 주소로 접속합니다.</p><p>컨테이너가 오래된 컨테이너에 접속하고 있는 경우에는 연결이 끊키게 됩니다.<br> 이 상태를 감지하고 다시 이름을 검색한 뒤 재접속하는 것은 컨테이너의 책임입니다.</p><h2 id="링크" tabindex="-1"><a class="header-anchor" href="#링크" aria-hidden="true">#</a> 링크</h2><p>링크는 서비스가 다른 서비스로부터 접근가능하도록 하는 추가적인 별칭을 정의할 수 있게 합니다.<br> 기본적으로 통신하기 위해 서비스를 활성화 할 필요는 없습니다.<br> 기본적으로 다른 서비스는 또 다른 서비스에 서비스 이름을 가지고 접근이 가능합니다.<br> 아래의 예제는 <code>db</code> 서비스가 <code>web</code> 서비스에 <code>db</code>와 <code>database</code>라는 호스트명으로 접근가능한 것 입니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
    <span class="token key atrule">services</span><span class="token punctuation">:</span>

      <span class="token key atrule">web</span><span class="token punctuation">:</span>
        <span class="token key atrule">build</span><span class="token punctuation">:</span> .
        <span class="token key atrule">links</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;db:database&quot;</span>
      <span class="token key atrule">db</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),w=s("h2",{id:"다중-호스트-네트워크",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#다중-호스트-네트워크","aria-hidden":"true"},"#"),n(" 다중 호스트 네트워크")],-1),q=s("code",null,"overlay",-1),x=s("h2",{id:"특정-사용자정의-네트워크",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#특정-사용자정의-네트워크","aria-hidden":"true"},"#"),n(" 특정 사용자정의 네트워크")],-1),C=s("code",null,"networks",-1),O=s("br",null,null,-1),P=s("br",null,null,-1),T=t(`<p>각각의 서비스는 <em>서비스-레벨</em>의 <code>networks</code> 키로 접속할 네트워크를 정의할 수 있으며, 내용은 <em>상위-레벨</em>의 <code>networks</code> 키 아래 정의된 엔트리 이름을 참조하는 목록입니다.</p><p>아래 예제는 Compose 파일에 2개의 사용자정의 네트워크를 정의합니다.<br><code>proxy</code> 서비스는 공통의 네트워크를 공유하고 있지 않기 때문에 <code>db</code> 서비스와는 독립되어 집니다.<br><code>app</code> 서비스만이 나머지 두개 서비스와의 통신이 가능합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>   <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
    <span class="token key atrule">services</span><span class="token punctuation">:</span>

      <span class="token key atrule">proxy</span><span class="token punctuation">:</span>
        <span class="token key atrule">build</span><span class="token punctuation">:</span> ./proxy
        <span class="token key atrule">networks</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> frontend
      <span class="token key atrule">app</span><span class="token punctuation">:</span>
        <span class="token key atrule">build</span><span class="token punctuation">:</span> ./app
        <span class="token key atrule">networks</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> frontend
          <span class="token punctuation">-</span> backend
      <span class="token key atrule">db</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
        <span class="token key atrule">networks</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> backend

    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">frontend</span><span class="token punctuation">:</span>
        <span class="token comment"># Use a custom driver</span>
        <span class="token key atrule">driver</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>driver<span class="token punctuation">-</span><span class="token number">1</span>
      <span class="token key atrule">backend</span><span class="token punctuation">:</span>
        <span class="token comment"># Use a custom driver which takes special options</span>
        <span class="token key atrule">driver</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>driver<span class="token punctuation">-</span><span class="token number">2</span>
        <span class="token key atrule">driver_opts</span><span class="token punctuation">:</span>
          <span class="token key atrule">foo</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
          <span class="token key atrule">bar</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),R=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.5&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">frontend</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> custom_frontend
        <span class="token key atrule">driver</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>driver<span class="token punctuation">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>네트워크 구성에 사용가능한 전체 옵션의 상세내용은 아래 참조를 보시기 바랍니다.</p>`,2),N=s("code",null,"networks",-1),E=s("code",null,"networks",-1),I=t(`<h2 id="기본-네트워크-설정" tabindex="-1"><a class="header-anchor" href="#기본-네트워크-설정" aria-hidden="true">#</a> 기본 네트워크 설정</h2><p>특정 네트워크를 정의하는 대신, <code>network</code> 엔트리의 <code>default</code> 이름을 활용하여 어플리케이션의 기본 네트워크 설정을 변경할 수 있습니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
    <span class="token key atrule">services</span><span class="token punctuation">:</span>

      <span class="token key atrule">web</span><span class="token punctuation">:</span>
        <span class="token key atrule">build</span><span class="token punctuation">:</span> .
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;8000:8000&quot;</span>
      <span class="token key atrule">db</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres

    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span>
        <span class="token comment"># Use a custom driver</span>
        <span class="token key atrule">driver</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>driver<span class="token punctuation">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="기존-네트워크-사용하기" tabindex="-1"><a class="header-anchor" href="#기존-네트워크-사용하기" aria-hidden="true">#</a> 기존 네트워크 사용하기</h2>`,4),A=s("code",null,"external",-1),B=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span>
        <span class="token key atrule">external</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>pre<span class="token punctuation">-</span>existing<span class="token punctuation">-</span>network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>[projectname]_default</code>이름의 네트워크를 생성하는 대신, Compose는 <code>my-pre-existing-network</code>라는 네트워크를 찾고 어플리케이션 컨테이너를 해당 네트워크에 참여시킵니다.</p>`,2);function S(V,j){const a=l("RouterLink"),c=l("AdsenseB");return i(),d("div",null,[s("blockquote",null,[s("p",null,[n("이 페이지는 Compose 파일 형식 "),e(a,{to:"/docker/compose/compose-file/compose-file-v2.html"},{default:o(()=>[n("버전 2")]),_:1}),n(" 또는 "),e(a,{to:"/docker/compose/compose-file/"},{default:o(()=>[n("이상")]),_:1}),n("을 다루고 있습니다."),r,n(" 네트워크 기능은 Compose 파일 형식 "),e(a,{to:"/docker/compose/compose-file/compose-file-v1.html"},{default:o(()=>[n("버전 1(레거시)")]),_:1}),n("에서는 지원하지 않습니다.")])]),s("p",null,[n("기본적으로 Compose는 어플리케이션에 대한 단일 "),e(a,{to:"/docker/engine/reference/commandline/network_create.html"},{default:o(()=>[n("네트워크")]),_:1}),n("를 생성합니다."),k,n(" 서비스의 각각 컨테이너는 기본 네트워크에 연결되며 이 네트워크를 통하여 서로 "),m,n("되고 컨테이너 이름과 동일한 호스트명으로 서로를 "),v,n("할 수 있습니다.")]),s("blockquote",null,[s("p",null,[b,_,n(' 어플리케이션 네트워크의 이름은 "프로젝트 이름(어플리케이션 디렉터리 이름)"을 기반으로 생성됩니다.'),h,n(" 프로젝트 이름을 "),e(a,{to:"/docker/compose/reference/overview.html"},{default:o(()=>[y,n(" 플래그")]),_:1}),n("나 "),e(a,{to:"/docker/compose/reference/envvars.html#compose_project_name"},{default:o(()=>[f,n(" 환경변수")]),_:1}),n("로 덮어쓸 수 있습니다.")])]),g,s("p",null,[n("추가적인 것은 "),e(a,{to:"/docker/compose/compose-file/compose-file-v2.html#links"},{default:o(()=>[n("링크 참조")]),_:1}),n("를 확인하시기 바랍니다.")]),w,s("p",null,[n("Compose 어플리케이션을 "),e(a,{to:"/docker/engine/swarm/"},{default:o(()=>[n("스웜 모드가 활성화")]),_:1}),n("된 도커엔진에 배포할 경우, 다중 호스트 통신을 활성화하기 위하여 내장된 "),q,n(" 드라이버를 사용하도록 해야합니다.")]),s("p",null,[e(a,{to:"/docker/engine/swarm/"},{default:o(()=>[n("스웜 모드 섹션")]),_:1}),n("을 참조하여 스웜 클러스터를 구성하고 "),e(a,{to:"/docker/network/network-tutorial-overlay.html"},{default:o(()=>[n("다중 호스트 네트워크로 시작")]),_:1}),n("하는 방법으로 다중 호스트 오버레이 네트워크에 관하여 배우시기 바랍니다.")]),x,s("p",null,[n("기본 어플리케이션 네트워크를 사용하는 대신, "),C,n(" 상위 키를 활용하여 네트워크를 정의할 수 있습니다."),O,n(" 이것은 좀더 복잡한 토폴로지와 특정 "),e(a,{to:"/docker/engine/extend/plugins_network/"},{default:o(()=>[n("사용자정의 네트워크 드라이버")]),_:1}),n(" 및 옵션으로 생성할 수 있게 합니다."),P,n(" 또한 Compose에서 관리되지 않는 외부에서 생성된 네트워크로 서비스에 접속하도록 사용할 수 있습니다.")]),T,s("p",null,[n("네트워크는 연결된 각각의 네트워크에 대해 "),e(a,{to:"/docker/compose/compose-file/compose-file-v2.html#ipv4_address-ipv6_address"},{default:o(()=>[n("ipv4 주소 또는 ipv6 주소")]),_:1}),n("를 설정하여 고정 IP 주소를 구성할 수 있습니다.")]),s("p",null,[n("네트워크는 또한 "),e(a,{to:"/docker/compose/compose-file/compose-file-v3.html#network-configuration-reference"},{default:o(()=>[n("사용자정의 이름")]),_:1}),n("을 줄 수 있습니다. (버전 3.5 이후)")]),R,s("ul",null,[s("li",null,[e(a,{to:"/docker/compose/compose-file/compose-file-v2.html#network-configuration-reference"},{default:o(()=>[n("상위-레벨 "),N,n(" 키")]),_:1})]),s("li",null,[e(a,{to:"/docker/compose/compose-file/compose-file-v2.html#networks"},{default:o(()=>[n("서비스-레벨 "),E,n(" 키")]),_:1})])]),I,s("p",null,[n("컨테이너가 기존 네트워크에 참여하고자 할 경우, "),e(a,{to:"/docker/compose/compose-file/compose-file-v2.html#network-configuration-reference"},{default:o(()=>[A,n(" 옵션")]),_:1}),n("을 사용하면 됩니다.")]),B,e(c)])}const U=p(u,[["render",S],["__file","networking.html.vue"]]);export{U as default};
