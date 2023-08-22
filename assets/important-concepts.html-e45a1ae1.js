import{_ as u,r,o as d,c as _,a as t,b as l,d as e,w as s,e as i}from"./app-95e21c4a.js";const a={},h={href:"https://dart.dev/guides/language/language-tour#important-concepts",target:"_blank",rel:"noopener noreferrer"},p=t("p",null,"Dart 언어에 대해 배우고자 할 경우 다음의 사실과 개념을 염두해두세요.",-1),b=t("br",null,null,-1),f=t("code",null,"null",-1),g=t("br",null,null,-1),m=t("code",null,"null",-1),v={href:"https://dart.dev/null-safety",target:"_blank",rel:"noopener noreferrer"},k={href:"https://api.dart.dev/stable/dart-core/Object-class.html",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"Object",-1),D={class:"hint-container tip"},N=t("p",{class:"hint-container-title"},"버전노트",-1),y={href:"https://dart.dev/null-safety",target:"_blank",rel:"noopener noreferrer"},B=t("br",null,null,-1),L={href:"https://dart.dev/guides/language/evolution#language-versioning",target:"_blank",rel:"noopener noreferrer"},j=t("li",null,[t("p",null,[l("Dart는 강력한 타입형이지만 Dart가 타입을 유추할 수 있으므로 타입지정은 선택적입니다."),t("br"),l(" 이전 코드에서는 "),t("code",null,"number"),l("는 "),t("code",null,"int"),l("타입으로 유추됩니다.")])],-1),O={href:"https://dart.dev/null-safety",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"null",-1),V=t("br",null,null,-1),C=t("code",null,"?",-1),E=t("br",null,null,-1),I=t("code",null,"int?",-1),A=t("code",null,"null",-1),R=t("br",null,null,-1),S=t("code",null,"null",-1),T=t("code",null,"!",-1),q=t("br",null,null,-1),z=t("code",null,"int x = nullableButNotNullInt!",-1),F=t("code",null,"Object?",-1),G={href:"https://dart.dev/null-safety#enable-null-safety",target:"_blank",rel:"noopener noreferrer"},H=t("code",null,"Object",-1),J={href:"https://dart.dev/guides/language/effective-dart/design#avoid-using-dynamic-unless-you-want-to-disable-static-checking",target:"_blank",rel:"noopener noreferrer"},K=t("code",null,"dynamic",-1),M=i("<li><p>Dart는 <code>List&lt;int&gt;</code> (정수의 목록) 또는 <code>List&lt;Object&gt;</code> (다양한 타입의 객체 목록)와 같이 제너릭 타입을 지원합니다.</p></li><li><p>Dart는 클래스나 객체에 연결된 함수(각각 정적, 인스턴스 메소드) 뿐만 아니라 최상위 함수(<code>main()</code> 와 같은)를 지원합니다.<br> 또한 함수내 함수(중첩 또는 로컬 함수)를 만들 수 있습니다.</p></li><li><p>비슷하게, Dart는 클래스나 객체에 연결된 변수(정적, 인스턴스 변수) 뿐만 아니라 최상위 변수도 지원합니다.<br> 인스턴스 변수를 필드나 속성이라고도 합니다.</p></li>",3),P=t("code",null,"public",-1),Q=t("code",null,"protected",-1),U=t("code",null,"private",-1),W=t("br",null,null,-1),X=t("code",null,"_",-1),Y=t("br",null,null,-1),Z=t("li",null,[t("p",null,[l("식별자는 문자나 밑줄("),t("code",null,"_"),l(")로 시작할 수 있으며 그 뒤에는 문자와 숫자의 조합이 가능합니다.")])],-1),$=t("br",null,null,-1),tt=t("code",null,"condition ? expr1 : expr2",-1),lt=t("code",null,"expr1",-1),et=t("code",null,"expr2",-1),nt=t("br",null,null,-1),ot=t("br",null,null,-1),st=t("br",null,null,-1),rt=t("br",null,null,-1),ct=t("br",null,null,-1),ut=t("br",null,null,-1);function dt(_t,it){const n=r("ExternalLinkIcon"),o=r("RouterLink"),c=r("AdsenseB");return d(),_("div",null,[t("p",null,[l("원문 : "),t("a",h,[l("https://dart.dev/guides/language/language-tour#important-concepts"),e(n)])]),p,t("ul",null,[t("li",null,[t("p",null,[l("변수에 위치하는 모든것은 객체이며 모든 객체는 클래스의 인스턴스입니다."),b,l(" 숫자, 함수와 "),f,l(" 조차도 객체입니다."),g,m,l("을 제외하고는("),t("a",v,[l("null 안전보장"),e(n)]),l("을 활성화한 경우) 모든 객체는 "),t("a",k,[x,e(n)]),l(" 클래스에서 상속됩니다.")]),t("div",D,[N,t("p",null,[t("a",y,[l("Null 안전"),e(n)]),l("은 Dart 2.12에서 소개되었습니다."),B,l(" Null 안전을 사용하려면 적어도 2.12 "),t("a",L,[l("언어버전"),e(n)]),l(" 이상을 사용해야 합니다.")])])]),j,t("li",null,[t("p",null,[t("a",O,[l("Null 안전"),e(n)]),l("을 활성화 하면 변수는 가능하다고 표시하기전까지 "),w,l("을 가질 수 없습니다."),V,l(" 해당 타입의 맨 끝에 물음표("),C,l(")를 추가해서 변수가 null이 가능하다고 만들 수 있습니다."),E,l(" 예로 들어, "),I,l("는 정수이거나 "),A,l("일 수 있습니다."),R,l(" Dart에서는 가능하지만 표현식자체가 절대로 "),S,l("을 가질 수 없는것을 알고 있다면, "),T,l("를 추가해서 null이 아님을 경고할 수 있습니다. (만약 null이면 예외발생)"),q,l(" 예로 들어, "),z])]),t("li",null,[t("p",null,[l("명시적으로 모든 타입이 가능하다고 하고 싶은 경우에는 "),F,l("("),t("a",G,[l("Null 안전 활성화"),e(n)]),l("한 경우), "),H,l(", "),t("a",J,[l("특수한 타입인 "),K,e(n)]),l("(런타임까지 타입확인을 지연하고자 하는 경우) 타입을 사용하면 됩니다.")])]),M,t("li",null,[t("p",null,[l("자바와 다르게 Dart는 "),P,l(", "),Q,l("나 "),U,l(" 키워드가 없습니다."),W,l(" 밑줄("),X,l(")로 식별자를 시작하면, 라이브러리내 비공개입니다."),Y,l(" 자세한 내용은 "),e(o,{to:"/flutter/dart-tour/libraries-and-visibility.html"},{default:s(()=>[l("라이브러리와 가시성")]),_:1}),l("을 참고하세요.")])]),Z,t("li",null,[t("p",null,[l("Dart는 표현식(런타임 값이 있는)과 명령문(그렇지 않음)을 가지고 있습니다."),$,l(" 예로 들어, "),e(o,{to:"/flutter/dart-tour/operators.html#conditional-expressions"},{default:s(()=>[l("조건 표현식")]),_:1}),l("인 "),tt,l("는 "),lt,l(" 또는 "),et,l(" 값을 가지고 있습니다."),nt,l(" 비교하여 "),e(o,{to:"/flutter/dart-tour/control-flow-statements.html#if-and-else"},{default:s(()=>[l("if-else 명령문")]),_:1}),l("은 값이 없습니다."),ot,l(" 명령문은 종종 한개 이상의 표현식을 포함하지만 표현식은 명령문을 직접 포함하지는 않습니다.")])]),t("li",null,[t("p",null,[l("Dart 툴은 경고와 에러 두가지 유형의 문제를 알려줍니다."),st,l(" 경고는 코드가 동작하지 않을 수 있지만 프로그램 실행을 중단시키지는 않습니다."),rt,l(" 에러는 컴파일타임 또는 런타임에 발생할 수 있습니다."),ct,l(" 컴파일타임 에러는 코드가 전혀 실행되지 않습니다."),ut,l(" 런타임 에러는 코드가 실행중에 "),e(o,{to:"/flutter/dart-tour/exceptions.html"},{default:s(()=>[l("예외")]),_:1}),l("가 발생합니다.")])])]),e(c)])}const ht=u(a,[["render",dt],["__file","important-concepts.html.vue"]]);export{ht as default};
