import{_ as p,r as c,o as d,c as u,a as s,d as e,w as l,b as n,e as o}from"./app-95e21c4a.js";const r={},m=s("p",null,"Compose는 공통 속성을 공유하는 두가지 방법을 제공합니다.",-1),v=s("code",null,"extends",-1),k=o('<h2 id="다중-compose-파일" tabindex="-1"><a class="header-anchor" href="#다중-compose-파일" aria-hidden="true">#</a> 다중 Compose 파일</h2><p>다중 Compose 파일을 사용하는 것은 Compose 어플리케이션을 다른 환경 또는 워크플로우로 커스터마이징할 수 있게 합니다.</p><h3 id="다중-compose-파일-이해하기" tabindex="-1"><a class="header-anchor" href="#다중-compose-파일-이해하기" aria-hidden="true">#</a> 다중 Compose 파일 이해하기</h3><p>기본적으로, Compose는 <code>docker-compose.yml</code>과 선택적으로 <code>docker-compose.override.yml</code>파일을 읽습니다.<br> 관례상 <code>docker-compose.yml</code>은 기본 구성을 포함합니다.<br> 이름에서 알 수 있듯, 대체파일은 기존 서비스 또는 전체 새로운 서비스로 덮어쓰는 구성을 포함합니다.</p>',4),b=s("code",null,"-f",-1),y=s("br",null,null,-1),h=s("br",null,null,-1),g=s("code",null,"-f",-1),_=s("code",null,"docker-compose",-1),f=o(`<p>다중 구성 파일을 사용할 때, 파일의 모든 경로가 기본 Compose 파일(<code>-f</code> 옵션에 최초 선언된 Compose 파일)에 상대경로여야 합니다.<br> 이것은 재작성 파일들이 유효한 Compose 파일이 아니어도 되기 때문에 필요합니다.<br> 재작성 파일은 구성의 작은 부분을 포함하게 됩니다.<br> 서비스의 구성이 어느 경로를 참조하는지 추적하는 것은 어렵고 혼란스럽습니다.<br> 따라서 쉽게 이해하기 위해서 모든 경로는 기본 파일의 상대 경로로 작성되어야 합니다.</p><h3 id="사용예제" tabindex="-1"><a class="header-anchor" href="#사용예제" aria-hidden="true">#</a> 사용예제</h3><p>이번 장에서는 다중 Compose 파일의 두가지 일반 사용예제를 소개합니다.</p><ul><li>다른 환경으로 Compose 어플리케이션 변경하기</li><li>Compose 어플리케이션에서 관리적 행동 수행하기</li></ul><h4 id="다른-환경" tabindex="-1"><a class="header-anchor" href="#다른-환경" aria-hidden="true">#</a> 다른 환경</h4><p>다중 파일의 일반적 사용예제는 개발 Compose 어플리케이션을 운영과 유사한 환경(운영 또는 스테이징, CI)으로 변경하는 것 입니다.<br> 이 차이점을 지원하기 위해 Compose 구성을 몇가지 다른 파일로 나눠야 합니다.</p><p>기본 파일을 서비스의 정식 구성으로 정의합니다.</p><p><strong>docker-compose.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> example/my_web_app<span class="token punctuation">:</span>latest
      <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> db
        <span class="token punctuation">-</span> cache

    <span class="token key atrule">db</span><span class="token punctuation">:</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>latest

    <span class="token key atrule">cache</span><span class="token punctuation">:</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이번 예제의 개발 구성에서는 호스트에 포트를 노출하고 코드를 볼륨으로 마운트하고 web 이미지를 빌드합니다.</p><p><strong>docker-compose.override.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">build</span><span class="token punctuation">:</span> .
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&#39;.:/code&#39;</span>
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 8883<span class="token punctuation">:</span><span class="token number">80</span>
      <span class="token key atrule">environment</span><span class="token punctuation">:</span>
        <span class="token key atrule">DEBUG</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>

    <span class="token key atrule">db</span><span class="token punctuation">:</span>
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">&#39;-d&#39;</span>
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 5432<span class="token punctuation">:</span><span class="token number">5432</span>

    <span class="token key atrule">cache</span><span class="token punctuation">:</span>
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 6379<span class="token punctuation">:</span><span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose up</code> 명령을 수행하면 재작성된 내용을 자동으로 읽게 됩니다.</p><p>이젠, 이 Compose 어플리케이션을 운영환경에 사용해보겠습니다.<br> 따라서 (다른 git 레포지토리에 저장되거나 다른 팀에 관리되는) 다른 재작성 파일을 생성합니다.</p><p><strong>docker-compose.prod.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>
      <span class="token key atrule">environment</span><span class="token punctuation">:</span>
        <span class="token key atrule">PRODUCTION</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>

    <span class="token key atrule">cache</span><span class="token punctuation">:</span>
      <span class="token key atrule">environment</span><span class="token punctuation">:</span>
        <span class="token key atrule">TTL</span><span class="token punctuation">:</span> <span class="token string">&#39;500&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>운영의 Compose 파일을 배포하려면 다음 명령을 수행합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose.yml <span class="token parameter variable">-f</span> docker-compose.prod.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>docker-compose.yml</code>과 <code>docker-compose.prod.yml</code> 파일의 구성을 사용하여 세개의 서비스를 배포하게 됩니다.<br> 개발 구성인 <code>docker-compose.override.yml</code>는 사용되지 않습니다.</p>`,19),x=o(`<h4 id="관리업무" tabindex="-1"><a class="header-anchor" href="#관리업무" aria-hidden="true">#</a> 관리업무</h4><p>다른 일반적인 사용예제는 Compose 어플리케이션에서 하나 이상의 서비스에 대한 임시 또는 관리성 업무를 수행하는 것 입니다.<br> 아래 예제는 데이터베이스 백업에 관련된 것 입니다.</p><p><strong>docker-compose.yml</strong> 로 시작하겠습니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> example/my_web_app<span class="token punctuation">:</span>latest
      <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> db

    <span class="token key atrule">db</span><span class="token punctuation">:</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker-compose.admin.yml</strong>에는 데이터베이스의 내보내기 또는 백업을 실행할 새로운 서비스를 추가합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">dbadmin</span><span class="token punctuation">:</span>
      <span class="token key atrule">build</span><span class="token punctuation">:</span> database_admin/
      <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>일반적인 환경은 <code>docker-compose up -d</code> 명령으로 시작합니다.<br> 데이터베이스 백업을 실행할 경우 <code>docker-compose.admin.yml</code>을 아래와 같이 포함시킵니다.</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>    docker-compose -f docker-compose.yml -f docker-compose.admin.yml \\
        run dbadmin db-backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="서비스-확장" tabindex="-1"><a class="header-anchor" href="#서비스-확장" aria-hidden="true">#</a> 서비스 확장</h2>`,9),C=s("p",null,[s("strong",null,"참고")],-1),w=s("code",null,"extends",-1),B=s("br",null,null,-1),E=s("br",null,null,-1),q=s("br",null,null,-1),A=s("br",null,null,-1),D={href:"https://github.com/moby/moby/issues/31101",target:"_blank",rel:"noopener noreferrer"},I=s("code",null,"extends",-1),O=o(`<p>Docker Compose는 <code>extends</code> 키워드로 다른 파일 똔느 다른 프로젝트 전체에 공통 구성을 공유할 수 있도록 합니다.<br> 서비스 확장은 다양한 서비스를 가지고 있을 때 공통 구성옵션 집합을 재사용할 수 있게하여 유용합니다.<br><code>extends</code>를 사용하면 서비스 옵션의 공통 집합을 한곳에 정의하고 어디든 참조할 수 있습니다.</p><p>Keep in mind that <code>volumes_from</code> and <code>depends_on</code> are never shared between<br> services using <code>extends</code>. These exceptions exist to avoid implicit<br> dependencies; you always define <code>volumes_from</code> locally. This ensures<br> dependencies between services are clearly visible when reading the current file.<br> Defining these locally also ensures that changes to the referenced file don&#39;t<br> break anything.</p><h3 id="확장구성-이해하기" tabindex="-1"><a class="header-anchor" href="#확장구성-이해하기" aria-hidden="true">#</a> 확장구성 이해하기</h3><p><code>docker-compose.yml</code>에 서비스를 정의할 때, 다음과 같이 확장된 다른 서비스를 정의할 수 있습니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">extends</span><span class="token punctuation">:</span>
        <span class="token key atrule">file</span><span class="token punctuation">:</span> common<span class="token punctuation">-</span>services.yml
        <span class="token key atrule">service</span><span class="token punctuation">:</span> webapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 <code>common-services.yml</code> 파일에 정의된 <code>webapp</code>서비스에 대한 구성을 재사용한다는 것 입니다.<br><code>common-services.yml</code>에 다음과 같이 정의되어있다고 하겠습니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">webapp</span><span class="token punctuation">:</span>
      <span class="token key atrule">build</span><span class="token punctuation">:</span> .
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;8000:8000&quot;</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;/data&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 경우, <code>docker-compose.yml</code>에 동일한 <code>build</code>, <code>ports</code>와 <code>volumes</code> 구성값을 <code>web</code> 하위에 정의한 것과 같은 결과를 가지게 됩니다.</p><p>또한 <code>docker-compose.yml</code> 파일 내에 구성을 정의 (또는 재정의)가 가능합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">extends</span><span class="token punctuation">:</span>
        <span class="token key atrule">file</span><span class="token punctuation">:</span> common<span class="token punctuation">-</span>services.yml
        <span class="token key atrule">service</span><span class="token punctuation">:</span> webapp
      <span class="token key atrule">environment</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> DEBUG=1
      <span class="token key atrule">cpu_shares</span><span class="token punctuation">:</span> <span class="token number">5</span>

    <span class="token key atrule">important_web</span><span class="token punctuation">:</span>
      <span class="token key atrule">extends</span><span class="token punctuation">:</span> web
      <span class="token key atrule">cpu_shares</span><span class="token punctuation">:</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다른 서비스를 작성해도 되며, <code>web</code>서비스에 연결해도 됩니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">extends</span><span class="token punctuation">:</span>
        <span class="token key atrule">file</span><span class="token punctuation">:</span> common<span class="token punctuation">-</span>services.yml
        <span class="token key atrule">service</span><span class="token punctuation">:</span> webapp
      <span class="token key atrule">environment</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> DEBUG=1
      <span class="token key atrule">cpu_shares</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> db
    <span class="token key atrule">db</span><span class="token punctuation">:</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="사용예제-1" tabindex="-1"><a class="header-anchor" href="#사용예제-1" aria-hidden="true">#</a> 사용예제</h3><p>개별 서비스를 확장하는 것은 공통 설정을 가지고 있는 다수의 서비스를 가지고 있을 때 유용합니다.<br> 아래 예제는 두개의 서비스를 가진 Compose 어플리케이션 입니다. 웹 어플리케이션, 큐 워커.<br> 두 서비스는 동일한 코드기반을 사용하고 많은 공통옵션을 가지고 있습니다.</p><p><strong>common.yaml</strong>에 공통 구성을 정의합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">app</span><span class="token punctuation">:</span>
      <span class="token key atrule">build</span><span class="token punctuation">:</span> .
      <span class="token key atrule">environment</span><span class="token punctuation">:</span>
        <span class="token key atrule">CONFIG_FILE_PATH</span><span class="token punctuation">:</span> /code/config
        <span class="token key atrule">API_KEY</span><span class="token punctuation">:</span> xxxyyy
      <span class="token key atrule">cpu_shares</span><span class="token punctuation">:</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker-compose.yml</strong>에 공통 설정을 사용하는 구체적인 서비스를 정의합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">webapp</span><span class="token punctuation">:</span>
      <span class="token key atrule">extends</span><span class="token punctuation">:</span>
        <span class="token key atrule">file</span><span class="token punctuation">:</span> common.yml
        <span class="token key atrule">service</span><span class="token punctuation">:</span> app
      <span class="token key atrule">command</span><span class="token punctuation">:</span> /code/run_web_app
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> queue
        <span class="token punctuation">-</span> db

    <span class="token key atrule">queue_worker</span><span class="token punctuation">:</span>
      <span class="token key atrule">extends</span><span class="token punctuation">:</span>
        <span class="token key atrule">file</span><span class="token punctuation">:</span> common.yml
        <span class="token key atrule">service</span><span class="token punctuation">:</span> app
      <span class="token key atrule">command</span><span class="token punctuation">:</span> /code/run_worker
      <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> queue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="구성의-추가-및-덮어쓰기" tabindex="-1"><a class="header-anchor" href="#구성의-추가-및-덮어쓰기" aria-hidden="true">#</a> 구성의 추가 및 덮어쓰기</h2><p>Compose는 원본 서비스에서 로컬로 구성을 복사할 수 있습니다.<br> 만약 고성 옵션이 원본 서비스와 로컬 서비스에 함께 정의되어있으면, 로컬 값이 원본 값을 <em>대체</em>하거나 <em>확장</em>합니다.</p><p><code>image</code>나 <code>command</code>, <code>mem_limit</code>과 같은 단일값 옵션의 경우 새로운 값이 기존 값을 대체합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token comment"># original service</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> python app.py

    <span class="token comment"># local service</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> python otherapp.py

    <span class="token comment"># result</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> python otherapp.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),T=s("p",null,[n("Compose 파일 버전 1의 "),s("code",null,"build"),n("와 "),s("code",null,"image")],-1),L=s("code",null,"build",-1),N=s("code",null,"image",-1),R=s("br",null,null,-1),F=o("<p>예로, 원본 서비스에 <code>image: webapp</code>이 정의되어있고, 로컬 서비스에 <code>build: .</code>로 되어있다고 하면 결과적으로 <code>image</code>옵션은 없고 <code>build: .</code>를 가지게 됩니다.</p><p>이것은 버전 1 파일에서 <code>build</code>와 <code>image</code>가 동시에 사용불가능하기 때문입니다.</p>",2),G=o(`<p><code>ports</code>나 <code>expose</code>, <code>external_links</code>, <code>dns</code>, <code>dns_search</code>, <code>tmpfs</code>와 같은 <strong>다중값 옵션</strong>의 경우 Compose는 두 값을 병합합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token comment"># original service</span>
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000&quot;</span>

    <span class="token comment"># local service</span>
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;4000&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5000&quot;</span>

    <span class="token comment"># result</span>
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;4000&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5000&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>environment</code>와 <code>labels</code>, <code>volumes</code>, <code>devices</code>의 경우, Compose는 로컬에 정의한 값을 우선으로 두가지를 병합합니다.<br><code>environment</code>와 <code>labels</code>는 환경변수 또는 라벨 이름으로 사용할 값을 결정합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token comment"># original service</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> FOO=original
      <span class="token punctuation">-</span> BAR=original

    <span class="token comment"># local service</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> BAR=local
      <span class="token punctuation">-</span> BAZ=local

    <span class="token comment"># result</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> FOO=original
      <span class="token punctuation">-</span> BAR=local
      <span class="token punctuation">-</span> BAZ=local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>volumes</code>와 <code>devices</code>의 항목은 컨테이너의 마운트 경로 기준으로 병합됩니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token comment"># original service</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./original<span class="token punctuation">:</span>/foo
      <span class="token punctuation">-</span> ./original<span class="token punctuation">:</span>/bar

    <span class="token comment"># local service</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./local<span class="token punctuation">:</span>/bar
      <span class="token punctuation">-</span> ./local<span class="token punctuation">:</span>/baz

    <span class="token comment"># result</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./original<span class="token punctuation">:</span>/foo
      <span class="token punctuation">-</span> ./local<span class="token punctuation">:</span>/bar
      <span class="token punctuation">-</span> ./local<span class="token punctuation">:</span>/baz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compose-문서" tabindex="-1"><a class="header-anchor" href="#compose-문서" aria-hidden="true">#</a> Compose 문서</h2>`,7);function U(V,P){const a=c("RouterLink"),t=c("ExternalLinkIcon"),i=c("AdsenseB");return d(),u("div",null,[m,s("ol",null,[s("li",null,[e(a,{to:"/docker/compose/extends.html#%EB%8B%A4%EC%A4%91-Compose-%ED%8C%8C%EC%9D%BC"},{default:l(()=>[n("다중 Compose 파일 사용")]),_:1}),n("으로 Compose 파일 전체를 확장하기")]),s("li",null,[e(a,{to:"/docker/compose/extends.html#%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%99%95%EC%9E%A5"},{default:l(()=>[v,n(" 항목")]),_:1}),n("으로 개별 서비스 확장하기 (Compose 파일 버전 2.1 이상)")])]),k,s("p",null,[n("서비스가 두개의 파일 모두 정의되어있으면, Compose는 "),e(a,{to:"/docker/compose/extends.html#%EA%B5%AC%EC%84%B1%EC%9D%98-%EC%B6%94%EA%B0%80-%EB%B0%8F-%EB%8D%AE%EC%96%B4%EC%93%B0%EA%B8%B0"},{default:l(()=>[n("구성의 추가 및 덮어쓰기")]),_:1}),n("에서 설명한 규칙을 사용하여 구성을 병합합니다.")]),s("p",null,[n("다중 재작성 파일들 또는 다른 이름의 재작성 파일을 사용할 경우 파일의 목록을 선언하기 위하여 "),b,n(" 옵션을 사용하면 됩니다."),y,n(" Compose는 명령어에 선언된 순서대로 파일들을 병합하게 됩니다."),h,g,n(" 사용법에 대한 자세한 내용은 "),e(a,{to:"/docker/compose/reference/overview.html"},{default:l(()=>[_,n(" 명령어 참조")]),_:1}),n("를 확인해보시기 바랍니다.")]),f,s("p",null,[n("Compose의 운영환경 사용법은 "),e(a,{to:"/docker/compose/production.html"},{default:l(()=>[n("운영환경")]),_:1}),n(" 에서 확인해보시기 바랍니다.")]),x,s("blockquote",null,[C,s("p",null,[w,n(" 키워드는 Compose 파일 버전 2.1까지 지원되고 있습니다."),B,n(" ("),e(a,{to:"/docker/compose/compose-file/compose-file-v1.html#extends"},{default:l(()=>[n("v1의 extends")]),_:1}),n("와 "),e(a,{to:"/docker/compose/compose-file/compose-file-v2.html#extends"},{default:l(()=>[n("v2의 extends")]),_:1}),n(" 참고)"),E,n(" 하지만, Compose 버전 3.x부터 지원되지 않습니다."),q,e(a,{to:"/docker/compose/compose-file/compose-versioning.html#version-3"},{default:l(()=>[n("버전 3 요약")]),_:1}),n("에서 추가 삭제된 키워드를 볼 수 있으며 "),e(a,{to:"/docker/compose/compose-file/compose-versioning.html#upgrading"},{default:l(()=>[n("어떻게 업그레이드해야되는지")]),_:1}),n(" 정보를 제공하고 있습니다."),A,s("a",D,[n("moby/moby#31101"),e(t)]),n("에 보시면 차후 버전에 일부형태로 "),I,n("를 추가지원할 가능성에 대하여 논의하는 쓰레드를 볼 수 있습니다.")])]),O,s("blockquote",null,[T,s("p",null,[L,n("와 "),N,n("의 경우, "),e(a,{to:"/docker/compose/compose-file/compose-file-v1.html"},{default:l(()=>[n("Compose 파일 버전 1 형식")]),_:1}),n("을 사용할 경우,"),R,n(" Compose는 로컬 서비스의 옵션을 사용하고 원본 서비스에 정의되어있는 다른 옵션은 포기하게 됩니다.")]),F]),G,s("ul",null,[s("li",null,[e(a,{to:"/docker/compose/"},{default:l(()=>[n("사용자가이드")]),_:1})]),s("li",null,[e(a,{to:"/docker/compose/install.html"},{default:l(()=>[n("Compose 설치하기")]),_:1})]),s("li",null,[e(a,{to:"/docker/compose/gettingstarted.html"},{default:l(()=>[n("시작하기")]),_:1})]),s("li",null,[e(a,{to:"/docker/compose/reference/"},{default:l(()=>[n("명령어 레퍼런스")]),_:1})]),s("li",null,[e(a,{to:"/docker/compose/compose-file/"},{default:l(()=>[n("Compose 파일 레퍼런스")]),_:1})]),s("li",null,[e(a,{to:"/docker/compose/samples-for-compose.html"},{default:l(()=>[n("Compose를 활용한 샘플 어플리케이션")]),_:1})])]),e(i)])}const K=p(r,[["render",U],["__file","extends.html.vue"]]);export{K as default};
