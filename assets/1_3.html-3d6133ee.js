import{_ as d,r as p,o as k,c as m,a as n,b as a,d as t,w as s,e as o}from"./app-95e21c4a.js";const v={},b={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-definition",target:"_blank",rel:"noopener noreferrer"},h=o("<p>스프링 IoC 컨테이너는 한개 이상의 빈을 관리합니다.<br> 이 빈들은 컨테이너에 적용한 구성 메타데이터로 생성되어집니다. (예로들어, XML의 <code>&lt;bean/&gt;</code> 정의형식)</p><p>컨테이너 자체에서 이러한 빈 정의들은 (다른 정보 중에서) 아래의 메타데이터를 가지고 있는 <code>BeanDefinition</code> 객체로 표현됩니다.</p><ul><li>패키지포함 클래스 이름 : 일반적으로, 정의된 빈의 실제 구현 클래스</li><li>빈의 행위적 구성 요소 : 컨테이너에서 빈이 어떻게 동작하는지에 대한 상태 (범위, 라이프사이클 콜백 등등)</li><li>빈의 동작을 위한 참조되는 다른 빈 : 이 참조를 협력자 또는 의존성으로 부름</li><li>새로 생성되는 객체에 설정되는 다른 구성 설정 : 예로, 커넥션 풀을 관리하기 위해 빈에서 사용되는 풀의 크기제한 또는 커넥션 숫자</li></ul><p>이러한 메타데이터는 각각 빈 정의를 구성하는 속성의 집합으로 해석됩니다.<br> 아래 표는 이러한 속성을 보여주고 있습니다.</p>",4),E=n("thead",null,[n("tr",null,[n("th",null,"속성"),n("th",null,"설명")])],-1),_=n("tr",null,[n("td",null,"클래스"),n("td",null,[n("a",{href:"#_1-3-2-%EB%B9%88%EC%9D%98-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%ED%99%94"},"빈의 인스턴스화")])],-1),g=n("tr",null,[n("td",null,"이름"),n("td",null,[n("a",{href:"#_1-3-1-%EB%B9%88%EC%9D%98-%EC%9D%B4%EB%A6%84"},"빈의 이름")])],-1),B=n("td",null,"범위",-1),C=n("td",null,"생성자 인자",-1),A=n("td",null,"속성",-1),y=n("td",null,"자동연결 모드",-1),f=n("td",null,"지연 초기화 모드",-1),q=n("td",null,"초기화 함수",-1),S=n("td",null,"소멸자 함수",-1),x=o('<p>특정 빈이 어떻게 생성되는지에 대한 정보를 포함한 빈 정의에 추가로, <code>ApplicationContext</code> 구현체는 또한 컨테이너 밖(사용자에의해)에서 생성된 기존 객체에 대한 등록도 허용합니다.<br> 이것은 BeanFactory의 <code>DefaultListableBeanFactory</code> 구현체를 반환하는 <code>getBeanFactory()</code> 함수를 통해 ApplicationContext의 BeanFactory에 접근해서 할 수 있습니다.<br><code>DefaultListableBeanFactory</code> 는 <code>registerSingleton(..)</code> 이나 <code>registerBeanDefinition(..)</code> 함수를 통해 등록기능을 지원합니다.<br> 그러나 일반적인 어플리케이션은 일반적인 빈 정의 메타데이터를 통해 정의된 빈들로만 작동합니다.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>빈 메타데이터와 수동으로 제공되는 싱글턴 인스턴스는 가급적 빨리 등록되어야 컨테이너가 자동연결 및 기타 자체검사 단계에서 이에 대해 적절하게 추론할 수 있습니다.<br> 기존 메타데이터와 싱글턴 인스턴스에 대하여 재정의하는 것은 어느정도 지원되지만, 런타임중에 새로운 빈을 등록하는것(동시에 Factory를 실시간으로 접근)에 은 공식적으로 지원하지 않습니다.<br> 이것은 동시접근에 대한 예외나 빈 컨테이너의 잘못된 상태 또는 둘다를 유발하게 됩니다.</p></div><h2 id="_1-3-1-빈의-명명" tabindex="-1"><a class="header-anchor" href="#_1-3-1-빈의-명명" aria-hidden="true">#</a> 1.3.1 빈의 명명</h2><p>모든 빈은 하나 이상의 식별자를 가지고 있습니다.<br> 이 식별자들은 빈이 호스팅되는 컨테이너 내에서는 유일해야 합니다.<br> 빈은 일반적으로 한개의 식별자만 가지고 있습니다.<br> 그러나, 하나 이상이 필요할 경우 별칭으로 간주하여 추가할 수 있습니다.</p><p>XML 기반 구성 메타데이터에서 <code>id</code> 속성과 <code>name</code> 속성 또는 둘다를 빈의 식별자로 지정하는데 사용할 수 있습니다.<br><code>id</code> 속성은 정확히 딱 한개의 id만 지정할 수 있습니다.<br> 전통적으로 이 이름은 영숫자를 사용합니다. (예, myBean, someService 등)<br> 그러나 특수문자를 포함해도 상관은 없습니다.<br> 빈에 대하여 다른 별칭으로 소개하고 싶으면 <code>name</code> 속성에 쉼표(<code>,</code>), 세미콜론(<code>;</code>) 또는 공백으로 구분하여 별칭을 지정할 수 있습니다.<br> 연혁에 따르면 스프링 3.1 버전 이전의 <code>id</code> 속성은 <code>xsd:ID</code> 유형으로 정의되어 제한된 가능한 문자로만 될 수 있습니다.<br> 3.1 부터는 <code>xsd:string</code> 유형으로 정의되며 빈 <code>id</code> 의 유일성은 XML 파서가 아닌 컨테이너에 의하여 강제됩니다.</p>',5),w=n("code",null,"name",-1),D=n("code",null,"id",-1),I=n("br",null,null,-1),L=n("code",null,"name",-1),j=n("code",null,"id",-1),T=n("br",null,null,-1),F=n("code",null,"ref",-1),M=n("br",null,null,-1),N=o(`<div class="hint-container tip"><p class="hint-container-title">빈의 명명 규칙</p><p>규칙은 빈의 이름을 지정할 때 인스턴스 필드 이름에 대한 표준 자바 규칙을 사용하는 것입니다.<br> 즉, 빈의 이름은 소문자로 시작하고 카멜케이스를 따릅니다.<br> 이러한 이름은 예로 <code>accountManager</code>, <code>accountService</code>, <code>userDao</code>, <code>loginController</code> 등과 같습니다.</p><p>일관된 빈의 명명은 구성을 쉽게 읽고 이해할 수 있게 만듭니다.<br> 또한 스프링 AOP를 사용하면 advice를 적용할 때 이름 관련으로 빈의 집합을 적용할 수 있어 도움이 됩니다.</p></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>클래스패스에서 컴포넌트 스캐닝을 하면 스프링은 앞에서 설명한 규칙에 따라 이름없는 컴포넌트에 대한 빈이름을 생성합니다.<br> 본질적으로, 단순 클래스명을 가져와서 가장 앞글자를 소문자로 바꿉니다.<br> 그러나, 한글자 이상이고 첫번째 두번째 글자 모두 대문자인 (비정상적) 특수한 경우에는 원래 대소문자가 유지됩니다.<br> 동일한 규칙이 <code>java.beans.Introspector.decapitalize</code> 에도 정의되어있습니다. (스프링도 이것을 사용)</p></div><h3 id="빈-정의-밖에서-빈에대한-별칭지정" tabindex="-1"><a class="header-anchor" href="#빈-정의-밖에서-빈에대한-별칭지정" aria-hidden="true">#</a> 빈 정의 밖에서 빈에대한 별칭지정</h3><p>빈 정의 자체에서 <code>id</code> 속성에 정의된 한개의 이름과 <code>name</code> 속성의 여러개 다른 이름을 조합하여 빈에 대한 한개 이상의 이름을 적용할 수 있습니다.<br> 이름들은 동일한 빈으로 동등한 별칭이 되며 어플리케이션의 컴포넌트 각각이 컴포넌트 자체에 정의된 빈 이름을 사용하여 공통 의존성을 참조하는 것과 같은 몇몇 상황에서 유용합니다.</p><p>그러나, 실제 정의된 빈에 대하여 모든 별칭을 정의하는 것이 항상 적절하지는 않습니다.<br> 때떄로 다른 곳에서 정의된 빈에 대한 별칭을 도입하는 것이 적절합니다.<br> 각각의 서브시스템이 자체적 객체 정의를 가지며 서브시스템 별로 구성이 분리된 큰 시스템의 경우가 일반적입니다.<br> XML기반 구성 메타데이터에서 <code>&lt;alias/&gt;</code> 요소를 사용하여 이것을 이룰 수 있습니다.<br> 다음 예제는 어떻게 하는지 보여줍니다.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>alias</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fromName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alias</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 경우, 빈(동일 컨테이너)이 <code>fromName</code> 으로 불리며 이 별칭정의를 사용한 후 <code>toName</code> 으로 참조될 수 있습니다.</p><p>예로 들어, 서브시스템 A의 구성 메타데이터에서 <code>subsystemA-dataSource</code> 의 이름으로 데이터소스를 참조할 수 있습니다.<br> 서브시스템 B의 구성 메타데이터에서 <code>subsystemB-dataSource</code> 의 이름으로 데이터소스를 참조할 수 있습니다.<br> 이 서브시스템을 사용하는 메인 어플리케이션을 작성할 때, 메인 어플리케이션은 <code>myApp-dataSource</code> 의 이름으로 데이터소스를 참조합니다.<br> 세가지 이름일 동일한 객체를 참조하게 만드려면 구성 메타데이터에 다음 별칭 정의를 추가하면 됩니다.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>alias</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myApp-dataSource<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alias</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subsystemA-dataSource<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>alias</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myApp-dataSource<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alias</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subsystemB-dataSource<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 각각 컴포넌트와 메인 어플리케이션은 유일하고 다른 정의에 충돌되지 않음(효과적으로 네임스페이스 생성)을 보장하면서 동일한 빈을 참조하는 이름으로 데이터소스를 참조할 수 있습니다.</p>`,10),X={class:"hint-container tip"},O=n("p",{class:"hint-container-title"},"자바-구성",-1),V=n("code",null,"@Bean",-1),P=n("br",null,null,-1),R=n("code",null,"@Bean",-1),z=n("h2",{id:"_1-3-2-빈-인스턴스화",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-3-2-빈-인스턴스화","aria-hidden":"true"},"#"),a(" 1.3.2 빈 인스턴스화")],-1),G=n("p",null,[a("빈 정의는 본질적으로 한개 이상의 객체를 생성하기 위한 레시피입니다."),n("br"),a(" 컨테이너는 요청될 때 명명된 빈의 레시피를 살펴보고 빈 정의에 의해 캡슐화된 구성 메타데이터를 실제 객체를 생성하기 위해 사용합니다.")],-1),H=n("code",null,"<bean/>",-1),J=n("code",null,"class",-1),K=n("br",null,null,-1),Q=n("code",null,"class",-1),U=n("code",null,"BeanDefinition",-1),W=n("code",null,"class",-1),Y=n("br",null,null,-1),Z=n("a",{href:"#%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B3-%E1%84%91%E1%85%A2%E1%86%A8%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5-%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%B3%E1%86%AF-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%8B%E1%85%A7-%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B3%E1%84%92%E1%85%AA"},"인스턴스 팩토리 함수를 사용하여 인스턴스화",-1),$=n("br",null,null,-1),nn=n("code",null,"class",-1),an=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"중첩 클래스 이름"),n("p",null,[a("중첩 클래스를 위한 빈 정의를 구성하고 싶을 때 중첩 클래스의 바이너리 이름이나 소스 이름을 사용할 수 있습니다."),n("br"),a(" 예로 들어, "),n("code",null,"com.example"),a(" 패키지 안에 "),n("code",null,"SomeThing"),a(" 라는 클래스를 가지고 있을 때, "),n("code",null,"SomeThing"),a(" 클래스에 "),n("code",null,"static"),a(" 으로 "),n("code",null,"OtherThing"),a(" 이라는 중첩 클래스를 가지고 있습니다."),n("br"),a(" 그럼 이것을 달러("),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},")"),n("mtext",null,"나마침표"),n("mo",{stretchy:"false"},"("),n("mi",{mathvariant:"normal"},"."),n("mo",{stretchy:"false"},")"),n("mtext",null,"으로구분할수있습니다"),n("mi",{mathvariant:"normal"},"."),n("mtext",null,"빈정의의"),n("mi",{mathvariant:"normal"},"‘"),n("mi",{mathvariant:"normal"},"‘"),n("mi",{mathvariant:"normal"},"‘"),n("mi",null,"c"),n("mi",null,"l"),n("mi",null,"a"),n("mi",null,"s"),n("mi",null,"s"),n("mi",{mathvariant:"normal"},"‘"),n("mi",{mathvariant:"normal"},"‘"),n("mi",{mathvariant:"normal"},"‘"),n("mtext",null,"속성의값은"),n("mi",{mathvariant:"normal"},"‘"),n("mi",{mathvariant:"normal"},"‘"),n("mi",{mathvariant:"normal"},"‘"),n("mi",null,"c"),n("mi",null,"o"),n("mi",null,"m"),n("mi",{mathvariant:"normal"},"."),n("mi",null,"e"),n("mi",null,"x"),n("mi",null,"a"),n("mi",null,"m"),n("mi",null,"p"),n("mi",null,"l"),n("mi",null,"e"),n("mi",{mathvariant:"normal"},"."),n("mi",null,"S"),n("mi",null,"o"),n("mi",null,"m"),n("mi",null,"e"),n("mi",null,"T"),n("mi",null,"h"),n("mi",null,"i"),n("mi",null,"n"),n("mi",null,"g")]),n("annotation",{encoding:"application/x-tex"},")나 마침표(.)으로 구분할 수 있습니다. 빈 정의의 ```class``` 속성의 값은 ```com.example.SomeThing")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mclose"},")"),n("span",{class:"mord hangul_fallback"},"나마침표"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"."),n("span",{class:"mclose"},")"),n("span",{class:"mord hangul_fallback"},"으로구분할수있습니다"),n("span",{class:"mord"},"."),n("span",{class:"mord hangul_fallback"},"빈정의의"),n("span",{class:"mord"},"‘‘‘"),n("span",{class:"mord mathnormal"},"c"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord mathnormal"},"ss"),n("span",{class:"mord"},"‘‘‘"),n("span",{class:"mord hangul_fallback"},"속성의값은"),n("span",{class:"mord"},"‘‘‘"),n("span",{class:"mord mathnormal"},"co"),n("span",{class:"mord mathnormal"},"m"),n("span",{class:"mord"},"."),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal"},"x"),n("span",{class:"mord mathnormal"},"am"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"pl"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord"},"."),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal"},"m"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),n("span",{class:"mord mathnormal"},"hin"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")])])]),a("OtherThing"),n("code",null,"또는"),a("com.example.SomeThing.OtherThing``` 이 될 수 있습니다.")])],-1),sn=o(`<h3 id="생성자로-인스턴스화" tabindex="-1"><a class="header-anchor" href="#생성자로-인스턴스화" aria-hidden="true">#</a> 생성자로 인스턴스화</h3><p>빈을 생성자로 접근해서 생성할 때 모든 일반적인 클래스를 사용할 수 있고 스프링과 호환됩니다.<br> 즉, 개발된 클래스를 어느 특정 인터페이스를 구현하거나 특정 방식으로 코딩할 필요가 없습니다.<br> 단순히 빈 클래스를 지정하는 것으로 충분합니다.<br> 그러나, 특정 빈에 사용할 IoC의 유형에 따라 기본 생성자가 필요할 수 있습니다.</p><p>스프링 IoC 컨테이너는 사실상 관리하고자 하는 모든 클래스를 관리할 수 있습니다.<br> 진정한 자바빈 관리에만 제한되지 않습니다.<br> 대부분 스프링 사용자는 컨테이너의 속성을 모델로한 기본 생성자와 적정한 setter와 getter를 가진 실제 자바빈을 선호합니다.<br> 또한 컨테이너에 더 이국적인 빈스타일이 아닌 클래스를 가질수도 있습니다.<br> 예로 들어, 물론 자바빈 사양을 준수하지 않는 레거시 접속풀을 사용해야할 경우라도 스프링은 적절하게 관리할 수 있습니다.</p><p>XML기반 구성 메타데이터에서 빈 클래스를 아래와 같이 정의할 수 있습니다.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleBean<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>examples.ExampleBean<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anotherExample<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>examples.ExampleBeanTwo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),tn=o(`<h3 id="정적-팩토리-함수로-인스턴스화" tabindex="-1"><a class="header-anchor" href="#정적-팩토리-함수로-인스턴스화" aria-hidden="true">#</a> 정적 팩토리 함수로 인스턴스화</h3><p>스태틱 팩토리 함수를 통해 생성하는 빈을 정의할 때, <code>static</code> 팩토리 함수를 포함하고 있는 클래스를 <code>class</code> 속성에 정의하고 <code>factory-method</code> 속성에 클래스내 팩토리 함수에 대한 이름을 정의하면 됩니다.<br> 이 함수를 호출할 수 있어야 되며(나중에 언급하겠지만 파라미터는 옵션) 이후 생성자를 통해 생성된 것처럼 실존 객체를 반환받아야 합니다.<br> 이러한 빈 정의를 사용하는 것은 레거시 코드에서 <code>static</code> 팩토리를 호출하는 경우입니다.</p><p>아래 빈 정의는 팩토리 함수를 호출하여 빈을 생성하는 것을 지정합니다.<br> 정의에서 반환될 객체의 유형(클래스)를 지정하지는 않습니다.<br> 팩토리 함수가 포함된 클래스만 정의하면 됩니다.<br> 이 예제에서 <code>createInstance()</code> 함수는 정적 함수여야 합니다.<br> 아래 예제는 팩토리 함수를 정의하는 방법을 보여줍니다.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clientService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>examples.ClientService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>createInstance<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래 예제는 앞의 빈 정의에 동작하는 클래스를 보여줍니다.</p>`,5),en=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"ClientService"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token class-name"},"ClientService"),a(" clientService "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"ClientService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token class-name"},"ClientService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token class-name"},"ClientService"),a(),n("span",{class:"token function"},"createInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" clientService"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cn=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"class"),a(" ClientService "),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token keyword"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"companion"),a(),n("span",{class:"token keyword"},"object"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token keyword"},"val"),a(" clientService "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ClientService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token keyword"},"fun"),a(),n("span",{class:"token function"},"createInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"="),a(` clientService
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ln=o(`<h3 id="인스턴스-팩토리-함수를-사용하여-인스턴스화" tabindex="-1"><a class="header-anchor" href="#인스턴스-팩토리-함수를-사용하여-인스턴스화" aria-hidden="true">#</a> 인스턴스 팩토리 함수를 사용하여 인스턴스화</h3><p><a href="#%EC%A0%95%EC%A0%81-%ED%8C%A9%ED%86%A0%EB%A6%AC-%ED%95%A8%EC%88%98%EB%A1%9C-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%ED%99%94">정적 팩토리 함수를 통해 인스턴스화</a> 하는것과 유사하게 인스턴스 팩토리 함수로 인스턴스화 하는 것은 새로운 빈을 생성하기 위해 컨테이너로부터 기존 빈의 정적이 아닌 함수를 실행하는 것 입니다.<br> 이 메커니즘을 사용하려면 <code>class</code> 속성은 공백이어야 하고 <code>factory-bean</code> 속성에 객체를 생성하기 위해 실행되어지는 인스턴스 함수를 포함하고 있는 현재 컨테이너의 빈에 대한 이름을 정의합니다.<br><code>factory-method</code> 속성에 팩토리함수 자체의 이름을 설정합니다. 아래 예제에서 이런 빈을 구성하는 방법을 보여줍니다.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- createInstance() 함수를 포함하고 있는 팩토리 빈 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serviceLocator<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>examples.DefaultServiceLocator<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 이 설정자 빈 에 필요로하는 의존성 주입 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 팩토리 빈에 의해 생성되는 빈--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clientService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">factory-bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serviceLocator<span class="token punctuation">&quot;</span></span> <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>createClientServiceInstance<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 예제는 해당하는 클래스를 보여줍니다.</p>`,4),on=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"DefaultServiceLocator"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token class-name"},"ClientService"),a(" clientService "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"ClientService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token class-name"},"ClientService"),a(),n("span",{class:"token function"},"createClientServiceInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" clientService"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"class"),a(" DefaultServiceLocator "),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"companion"),a(),n("span",{class:"token keyword"},"object"),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token keyword"},"val"),a(" clientService "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ClientService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"fun"),a(),n("span",{class:"token function"},"createClientServiceInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(" ClientService "),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"clientService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un=o(`<p>아래 예가 보여주듯, 한개의 팩토리 클래스가 한개 이상의 팩토리 함수를 가질 수 있습니다.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serviceLocator<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>examples.DefaultServiceLocator<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 이 설정자 빈 에 필요로하는 의존성 주입 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clientService<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">factory-bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serviceLocator<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>createClientServiceInstance<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accountService<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">factory-bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serviceLocator<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>createAccountServiceInstance<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 예제는 해당하는 클래스를 보여줍니다.</p>`,3),rn=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"DefaultServiceLocator"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token class-name"},"ClientService"),a(" clientService "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"ClientServiceImpl"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token class-name"},"AccountService"),a(" accountService "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"AccountServiceImpl"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token class-name"},"ClientService"),a(),n("span",{class:"token function"},"createClientServiceInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" clientService"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token class-name"},"AccountService"),a(),n("span",{class:"token function"},"createAccountServiceInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" accountService"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"class"),a(" DefaultServiceLocator "),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"companion"),a(),n("span",{class:"token keyword"},"object"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token keyword"},"val"),a(" clientService "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ClientServiceImpl"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token keyword"},"private"),a(),n("span",{class:"token keyword"},"val"),a(" accountService "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"AccountServiceImpl"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"fun"),a(),n("span",{class:"token function"},"createClientServiceInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(" ClientService "),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(` clientService
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"fun"),a(),n("span",{class:"token function"},"createAccountServiceInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(" AccountService "),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(` accountService
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("br",null,null,-1),mn=o('<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>스프링 문서에서 &quot;팩토리 빈&quot;은 스프링 컨테이너에서 구성되어지고 <a href="#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%ED%8C%A9%ED%86%A0%EB%A6%AC-%ED%95%A8%EC%88%98%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%ED%99%94">인스턴스</a>나 <a href="#%EC%A0%95%EC%A0%81-%ED%8C%A9%ED%86%A0%EB%A6%AC-%ED%95%A8%EC%88%98%EB%A1%9C-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%ED%99%94">정적 팩토리 함수</a>를 통해 객체를 생성하는 빈을 가리킵니다.<br> 대조적으로 <code>FactoryBean(대소문자에 주의)</code>는 스프링 특화 <code>FactoryBean</code> 구현 클래스를 가리킵니다.</p></div><h3 id="빈의-런타임-유형-결정하기" tabindex="-1"><a class="header-anchor" href="#빈의-런타임-유형-결정하기" aria-hidden="true">#</a> 빈의 런타임 유형 결정하기</h3><p>특정 빈의 런타임 유형은 결정하기 쉽지 않습니다.<br> 빈 메타데이터 정의의 특정 클래스는 선언된 팩토리 함수 또는 빈의 다른 런타임 유형으로 이어질 수 있는 <code>FactoryBean</code> 클래스, 인스턴스 수준의 팩토리 함수의 경우 전혀 설정되지 않은 것과 조합된 초기 클래스 참조입니다.<br> 추가적으로 AOP 프록시는 대상 빈의 실제 타입의 제한된 노출을 가지는 인터페이스 기반 프록시(구현된 인터페이스)로 빈 인스턴스를 감쌉니다.</p><p>특정 빈의 실제 런타임 유형을 찾을 때 추천하는 방법은 <code>BeanFactory.getType</code> 을 특정 빈 이름으로 호출하는 것 입니다.<br> 위의 모든 경우를 고려하여 동일 빈 이름으로 <code>BeanFactory.getBean</code> 에서 반환되는 객체의 유형을 반환합니다.</p>',4);function vn(bn,hn){const u=p("ExternalLinkIcon"),e=p("RouterLink"),i=p("CodeTabs"),r=p("AdsenseB");return k(),m("div",null,[n("p",null,[a("원문 : "),n("a",b,[a("https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-definition"),t(u)])]),h,n("table",null,[E,n("tbody",null,[_,g,n("tr",null,[B,n("td",null,[t(e,{to:"/spring/core/ioc/1_5.html"},{default:s(()=>[a("빈의 범위")]),_:1})])]),n("tr",null,[C,n("td",null,[t(e,{to:"/spring/core/ioc/1_4.html#_1-4-1-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%A3%BC%EC%9E%85"},{default:s(()=>[a("의존성 주입")]),_:1})])]),n("tr",null,[A,n("td",null,[t(e,{to:"/spring/core/ioc/1_4.html#_1-4-1-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%A3%BC%EC%9E%85"},{default:s(()=>[a("의존성 주입")]),_:1})])]),n("tr",null,[y,n("td",null,[t(e,{to:"/spring/core/ioc/1_4.html#_1-4-5-%EC%9E%90%EB%8F%99%EC%97%B0%EA%B2%B0-%ED%98%91%EB%A0%A5%EC%9E%90"},{default:s(()=>[a("자동연결 협력자")]),_:1})])]),n("tr",null,[f,n("td",null,[t(e,{to:"/spring/core/ioc/1_4.html#_1-4-4-%EC%A7%80%EC%97%B0%EC%B4%88%EA%B8%B0%ED%99%94-%EB%B9%88"},{default:s(()=>[a("지연초기화 빈")]),_:1})])]),n("tr",null,[q,n("td",null,[t(e,{to:"/spring/core/ioc/1_6.html#%EC%B4%88%EA%B8%B0%ED%99%94-%EC%BD%9C%EB%B0%B1"},{default:s(()=>[a("초기화 콜백")]),_:1})])]),n("tr",null,[S,n("td",null,[t(e,{to:"/spring/core/ioc/1_6.html#%EC%86%8C%EB%A9%B8%EC%9E%90-%EC%BD%9C%EB%B0%B1"},{default:s(()=>[a("소멸자 콜백")]),_:1})])])])]),x,n("p",null,[a("빈의 "),w,a(" 이나 "),D,a(" 를 정의하는 것은 필수가 아닙니다."),I,a(" 만약 "),L,a(" 이나 "),j,a(" 가 명시적으로 정의되어있지 않으면 컨테이너가 빈에대한 유일한 이름을 생성합니다."),T,a(" 그러나, "),F,a(" 속성을 사용하거나 Service Locator 스타일 탐색을 통한 이름으로 빈을 참조하고자 하는 경우에는 name 을 제공해야 합니다."),M,a(" 이름을 제공하지 않는 경우는 "),t(e,{to:"/spring/core/ioc/1_4.html#%EB%82%B4%EB%B6%80-%EB%B9%88"},{default:s(()=>[a("내부 빈")]),_:1}),a("과 "),t(e,{to:"/spring/core/ioc/1_4.html#_1-4-5-%EC%9E%90%EB%8F%99%EC%97%B0%EA%B2%B0-%ED%98%91%EB%A0%A5%EC%9E%90"},{default:s(()=>[a("자동연결 협력자")]),_:1}),a("를 사용하는 것에 관련되어있습니다.")]),N,n("div",X,[O,n("p",null,[a("자바 구성을 사용한다면 "),V,a(" 어노테이션이 별칭을 제공하는데 사용됩니다."),P,a(" 상세한 정보는 "),t(e,{to:"/spring/core/ioc/1_12.html#_1-12-3-@Bean-%EC%96%B4%EB%85%B8%ED%85%8C%EC%9D%B4%EC%85%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0"},{default:s(()=>[R,a(" 어노테이션 사용하기")]),_:1}),a(" 에서 볼 수 있습니다.")])]),z,G,n("p",null,[a("XML기반 구성 메타데이터를 사용하면 "),H,a(" 요소의 "),J,a(" 속성에서 초기화되어지는 객체의 유형(또는 클래스)를 정의합니다."),K,Q,a(" 속성(내부적으로 "),U,a(" 인스턴스의 "),W,a(" 속성)은 항상 필수적입니다."),Y,a(" (예외의 경우, "),Z,a("와 "),t(e,{to:"/spring/core/ioc/1_7.html"},{default:s(()=>[a("빈 정의 상속")]),_:1}),a("을 참고하세요)"),$,nn,a(" 속성을 두가지중 한가지 방법으로 사용할 수 있습니다.")]),an,sn,n("p",null,[a("생성자(필요하다면)에 매개변수를 지원하거나 객체가 생성된 뒤 객체 인스턴스의 속성을 설정하는 메커니즘에 관련된 자세한 정보는 "),t(e,{to:"/spring/core/ioc/1_4.html#_1-4-1-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%A3%BC%EC%9E%85"},{default:s(()=>[a("의존성 주입")]),_:1}),a("을 참고하세요.")]),tn,t(i,{id:"221",data:[{id:"java"},{id:"kotlin"}]},{title0:s(({value:c,isActive:l})=>[a("java")]),title1:s(({value:c,isActive:l})=>[a("kotlin")]),tab0:s(({value:c,isActive:l})=>[en]),tab1:s(({value:c,isActive:l})=>[cn]),_:1}),n("p",null,[a("팩토리 함수에 매개변수를 제공하고(선택적) 팩토리에서 객체가 반환된 후 객체 인스턴스 속성을 설정한느 것에 대한 자세한 메커니즘은 "),t(e,{to:"/spring/core/ioc/1_4.html#_1-4-2-%EC%84%B8%EB%B6%80%EC%A0%81%EC%9D%B8-%EC%9D%98%EC%A1%B4%EC%84%B1%EA%B3%BC-%EA%B5%AC%EC%84%B1"},{default:s(()=>[a("세부적인 종속성과 구성")]),_:1}),a("을 참고하세요.")]),ln,t(i,{id:"242",data:[{id:"java"},{id:"kotlin"}]},{title0:s(({value:c,isActive:l})=>[a("java")]),title1:s(({value:c,isActive:l})=>[a("kotlin")]),tab0:s(({value:c,isActive:l})=>[on]),tab1:s(({value:c,isActive:l})=>[pn]),_:1}),un,t(i,{id:"257",data:[{id:"java"},{id:"kotlin"}]},{title0:s(({value:c,isActive:l})=>[a("java")]),title1:s(({value:c,isActive:l})=>[a("kotlin")]),tab0:s(({value:c,isActive:l})=>[rn]),tab1:s(({value:c,isActive:l})=>[dn]),_:1}),n("p",null,[a("이 접근 방식은 팩토리 빈 자체가 의존성 주입(DI)를 통해 관리 및 구성될 수 있음을 보여줍니다."),kn,t(e,{to:"/spring/core/ioc/1_4.html#_1-4-2-%EC%84%B8%EB%B6%80%EC%A0%81%EC%9D%B8-%EC%9D%98%EC%A1%B4%EC%84%B1%EA%B3%BC-%EA%B5%AC%EC%84%B1"},{default:s(()=>[a("세부적인 종속성과 구성")]),_:1}),a("을 참고하세요.")]),mn,t(r)])}const _n=d(v,[["render",vn],["__file","1_3.html.vue"]]);export{_n as default};
