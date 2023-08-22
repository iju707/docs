import{_ as i}from"./application-410a9fb2.js";import{_ as c,r as t,o as l,c as u,a as s,b as n,d as a,w as r,e as d}from"./app-95e21c4a.js";const k={},v={href:"https://python-dependency-injector.ets-labs.org/examples/application-single-container.html",target:"_blank",rel:"noopener noreferrer"},m=s("br",null,null,-1),b=s("br",null,null,-1),_=s("p",null,[n("아래의 의존성 주입 원칙을 따르는 작은 어플리케이션 예제를 만들어보겠습니다."),s("br"),n(" 도메인 로직을 가지는 다수의 서비스로 구성되어있습니다."),s("br"),n(" 서비스는 데이터베이스와 AWS S3에 의존성을 가지고 있습니다.")],-1),g=s("p",null,[s("img",{src:i,alt:"Application",loading:"lazy"})],-1),h={href:"https://github.com/ets-labs/python-dependency-injector/tree/master/examples/miniapps/application-single-container",target:"_blank",rel:"noopener noreferrer"},y=d(`<h2 id="어플리케이션-구조" tabindex="-1"><a class="header-anchor" href="#어플리케이션-구조" aria-hidden="true">#</a> 어플리케이션 구조</h2><p>어플리케이션은 <code>example</code> 패키지와 다수의 설정 파일, <code>requirements.txt</code> 파일로 이뤄져 있습니다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./
├── example/
│   ├── __init__.py
│   ├── __main__.py
│   ├── containers.py
│   └── services.py
├── config.ini
├── logging.ini
└── requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="컨테이너" tabindex="-1"><a class="header-anchor" href="#컨테이너" aria-hidden="true">#</a> 컨테이너</h2><p><code>example/containers.py</code>의 내용입니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;Containers module.&quot;&quot;&quot;</span>

<span class="token keyword">import</span> logging<span class="token punctuation">.</span>config
<span class="token keyword">import</span> sqlite3

<span class="token keyword">import</span> boto3
<span class="token keyword">from</span> dependency_injector <span class="token keyword">import</span> containers<span class="token punctuation">,</span> providers

<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> services


<span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>containers<span class="token punctuation">.</span>DeclarativeContainer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 구성정보 로딩</span>
    config <span class="token operator">=</span> providers<span class="token punctuation">.</span>Configuration<span class="token punctuation">(</span>ini_files<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;config.ini&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment"># 로깅정보 설정</span>
    logging <span class="token operator">=</span> providers<span class="token punctuation">.</span>Resource<span class="token punctuation">(</span>
        logging<span class="token punctuation">.</span>config<span class="token punctuation">.</span>fileConfig<span class="token punctuation">,</span>
        fname<span class="token operator">=</span><span class="token string">&quot;logging.ini&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token comment"># 데이터베이스 클라이언트를 싱글톤으로 구성</span>
    database_client <span class="token operator">=</span> providers<span class="token punctuation">.</span>Singleton<span class="token punctuation">(</span>
        sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">,</span>
        config<span class="token punctuation">.</span>database<span class="token punctuation">.</span>dsn<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token comment"># S3 클라이언트를 싱글톤으로 구성</span>
    s3_client <span class="token operator">=</span> providers<span class="token punctuation">.</span>Singleton<span class="token punctuation">(</span>
        boto3<span class="token punctuation">.</span>client<span class="token punctuation">,</span>
        service_name<span class="token operator">=</span><span class="token string">&quot;s3&quot;</span><span class="token punctuation">,</span>
        aws_access_key_id<span class="token operator">=</span>config<span class="token punctuation">.</span>aws<span class="token punctuation">.</span>access_key_id<span class="token punctuation">,</span>
        aws_secret_access_key<span class="token operator">=</span>config<span class="token punctuation">.</span>aws<span class="token punctuation">.</span>secret_access_key<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token comment"># 각 서비스에 대한 의존성, 속성을 주입하고, Factory(요청시 객체생성)으로 구성</span>
    user_service <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span>
        services<span class="token punctuation">.</span>UserService<span class="token punctuation">,</span>
        db<span class="token operator">=</span>database_client<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    auth_service <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span>
        services<span class="token punctuation">.</span>AuthService<span class="token punctuation">,</span>
        db<span class="token operator">=</span>database_client<span class="token punctuation">,</span>
        token_ttl<span class="token operator">=</span>config<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>token_ttl<span class="token punctuation">.</span>as_int<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    photo_service <span class="token operator">=</span> providers<span class="token punctuation">.</span>Factory<span class="token punctuation">(</span>
        services<span class="token punctuation">.</span>PhotoService<span class="token punctuation">,</span>
        db<span class="token operator">=</span>database_client<span class="token punctuation">,</span>
        s3<span class="token operator">=</span>s3_client<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="메인-모듈" tabindex="-1"><a class="header-anchor" href="#메인-모듈" aria-hidden="true">#</a> 메인 모듈</h2><p><code>example/__main__.py</code>의 내용입니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;Main module.&quot;&quot;&quot;</span>

<span class="token keyword">import</span> sys

<span class="token keyword">from</span> dependency_injector<span class="token punctuation">.</span>wiring <span class="token keyword">import</span> Provide<span class="token punctuation">,</span> inject

<span class="token keyword">from</span> <span class="token punctuation">.</span>services <span class="token keyword">import</span> UserService<span class="token punctuation">,</span> AuthService<span class="token punctuation">,</span> PhotoService
<span class="token keyword">from</span> <span class="token punctuation">.</span>containers <span class="token keyword">import</span> Container

<span class="token comment"># 의존성을 주입</span>
<span class="token decorator annotation punctuation">@inject</span>
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span>
        email<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
        password<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
        photo<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
        user_service<span class="token punctuation">:</span> UserService <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>user_service<span class="token punctuation">]</span><span class="token punctuation">,</span>
        auth_service<span class="token punctuation">:</span> AuthService <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>auth_service<span class="token punctuation">]</span><span class="token punctuation">,</span>
        photo_service<span class="token punctuation">:</span> PhotoService <span class="token operator">=</span> Provide<span class="token punctuation">[</span>Container<span class="token punctuation">.</span>photo_service<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> user_service<span class="token punctuation">.</span>get_user<span class="token punctuation">(</span>email<span class="token punctuation">)</span>
    auth_service<span class="token punctuation">.</span>authenticate<span class="token punctuation">(</span>user<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
    photo_service<span class="token punctuation">.</span>upload_photo<span class="token punctuation">(</span>user<span class="token punctuation">,</span> photo<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># 컨테이너를 생성</span>
    container <span class="token operator">=</span> Container<span class="token punctuation">(</span><span class="token punctuation">)</span>
    container<span class="token punctuation">.</span>init_resources<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 현재 파일을 컨테이너에 연결</span>
    container<span class="token punctuation">.</span>wire<span class="token punctuation">(</span>modules<span class="token operator">=</span><span class="token punctuation">[</span>__name__<span class="token punctuation">]</span><span class="token punctuation">)</span>

    main<span class="token punctuation">(</span><span class="token operator">*</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="서비스" tabindex="-1"><a class="header-anchor" href="#서비스" aria-hidden="true">#</a> 서비스</h2><p><code>example/services.py</code>의 내용입니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;Services module.&quot;&quot;&quot;</span>

<span class="token keyword">import</span> logging
<span class="token keyword">import</span> sqlite3
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Dict

<span class="token keyword">from</span> mypy_boto3_s3 <span class="token keyword">import</span> S3Client


<span class="token keyword">class</span> <span class="token class-name">BaseService</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>logger <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span>
            <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>__name__<span class="token punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>__name__<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span>BaseService<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># db에 Container에서 정의한 의존성이 주입됨</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> db<span class="token punctuation">:</span> sqlite3<span class="token punctuation">.</span>Connection<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>db <span class="token operator">=</span> db
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">get_user</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> email<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&quot;User %s has been found in database&quot;</span><span class="token punctuation">,</span> email<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> email<span class="token punctuation">,</span> <span class="token string">&quot;password_hash&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">AuthService</span><span class="token punctuation">(</span>BaseService<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># db, token_ttl에 Container에서 정의한 의존성, 설정이 주입됨</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> db<span class="token punctuation">:</span> sqlite3<span class="token punctuation">.</span>Connection<span class="token punctuation">,</span> token_ttl<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>db <span class="token operator">=</span> db
        self<span class="token punctuation">.</span>token_ttl <span class="token operator">=</span> token_ttl
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">authenticate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> user<span class="token punctuation">:</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">,</span> password<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">assert</span> password <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span>
        self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span>
            <span class="token string">&quot;User %s has been successfully authenticated&quot;</span><span class="token punctuation">,</span>
            user<span class="token punctuation">[</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">PhotoService</span><span class="token punctuation">(</span>BaseService<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># db, s3에 Container에서 정의한 의존성이 주입됨</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> db<span class="token punctuation">:</span> sqlite3<span class="token punctuation">.</span>Connection<span class="token punctuation">,</span> s3<span class="token punctuation">:</span> S3Client<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>db <span class="token operator">=</span> db
        self<span class="token punctuation">.</span>s3 <span class="token operator">=</span> s3
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">upload_photo</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> user<span class="token punctuation">:</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">,</span> photo_path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span>
            <span class="token string">&quot;Photo %s has been successfully uploaded by user %s&quot;</span><span class="token punctuation">,</span>
            photo_path<span class="token punctuation">,</span>
            user<span class="token punctuation">[</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="구성" tabindex="-1"><a class="header-anchor" href="#구성" aria-hidden="true">#</a> 구성</h2><p><code>config.ini</code>의 내용입니다.</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">database</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">dsn</span><span class="token punctuation">=</span><span class="token value attr-value">:memory:</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">aws</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">access_key_id</span><span class="token punctuation">=</span><span class="token value attr-value">KEY</span>
<span class="token key attr-name">secret_access_key</span><span class="token punctuation">=</span><span class="token value attr-value">SECRET</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">auth</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">token_ttl</span><span class="token punctuation">=</span><span class="token value attr-value">3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>logging.ini</code>의 내용입니다.</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">loggers</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">keys</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">handlers</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">keys</span><span class="token punctuation">=</span><span class="token value attr-value">stream_handler</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">formatters</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">keys</span><span class="token punctuation">=</span><span class="token value attr-value">formatter</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">logger_root</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">level</span><span class="token punctuation">=</span><span class="token value attr-value">DEBUG</span>
<span class="token key attr-name">handlers</span><span class="token punctuation">=</span><span class="token value attr-value">stream_handler</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">handler_stream_handler</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">class</span><span class="token punctuation">=</span><span class="token value attr-value">StreamHandler</span>
<span class="token key attr-name">level</span><span class="token punctuation">=</span><span class="token value attr-value">DEBUG</span>
<span class="token key attr-name">formatter</span><span class="token punctuation">=</span><span class="token value attr-value">formatter</span>
<span class="token key attr-name">args</span><span class="token punctuation">=</span><span class="token value attr-value">(sys.stderr,)</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">formatter_formatter</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">format</span><span class="token punctuation">=</span><span class="token value attr-value">[%(asctime)s] [%(levelname)s] [%(name)s]: %(message)s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="어플리케이션-실행하기" tabindex="-1"><a class="header-anchor" href="#어플리케이션-실행하기" aria-hidden="true">#</a> 어플리케이션 실행하기</h2>`,18),f={href:"https://github.com/ets-labs/python-dependency-injector/tree/master/examples/miniapps/application-single-container",target:"_blank",rel:"noopener noreferrer"};function q(w,x){const e=t("ExternalLinkIcon"),p=t("RouterLink"),o=t("AdsenseB");return l(),u("div",null,[s("p",null,[n("원문 : "),s("a",v,[n("https://python-dependency-injector.ets-labs.org/examples/application-single-container.html"),a(e)])]),s("p",null,[n("이 예제는 단일 선언적 컨테이너를 사용한 어플리케이션을 어떻게 생성하는지 보여줍니다."),m,n(" 단일 선언적 컨테이너를 사용하는 것은 작거나 보통의 규모 어플리케이션에 좋은 선택입니다."),b,n(" 대규모의 어플리케이션 구성을 위하면 "),a(p,{to:"/python/dependency-injector/example/multi_containers.html"},{default:r(()=>[n("어플리케이션 예제 (다중 컨테이너)")]),_:1}),n("를 참고하세요.")]),_,g,s("p",null,[n("소스코드와 실행방법은 "),s("a",h,[n("깃허브"),a(e)]),n("에서 찾을 수 있습니다.")]),y,s("p",null,[n("소스코드와 실행방법은 "),s("a",f,[n("깃허브"),a(e)]),n("에서 찾을 수 있습니다.")]),a(o)])}const N=c(k,[["render",q],["__file","single_container.html.vue"]]);export{N as default};
