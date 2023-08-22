import{_ as r,r as t,o as l,c as d,a as n,b as e,d as a,w as i,f as _,g as u}from"./app-95e21c4a.js";const p={},h={href:"https://dart.dev/language/callable-classes",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[e("Dart 클래스의 인스턴스를 함수처럼 호출하고자 한다면 "),n("code",null,"call()"),e(" 메소드를 구현하면 됩니다.")],-1),m=n("code",null,"call()",-1),f=n("br",null,null,-1),b=n("p",null,[e("아래의 예제에서 "),n("code",null,"WannabeFunction"),e(" 클래스는 "),n("code",null,"call()"),e(" 함수를 선언했으며, 3개의 문자열을 받아 스페이스로 구분하여 연결한 뒤 느낌표를 붙입니다."),n("br"),n("strong",null,"Run"),e("을 클릭하여 코드를 실행할 수 있습니다.")],-1),v=n("pre",null,[e("    "),n("code",{class:"language-run-dartpad:theme-light:mode-dart:ga_id-example1:width-100%:height-400px"},`
class WannabeFunction {
  String call(String a, String b, String c) => '$a $b $c!';
}

var wf = WannabeFunction();
var out = wf('Hi', 'there,', 'gang');

void main() => print(out);
    `),e(`
`)],-1);function x(k,B){const o=t("ExternalLinkIcon"),s=t("RouterLink"),c=t("AdsenseB");return l(),d("div",null,[n("p",null,[e("원문 : "),n("a",h,[e("https://dart.dev/language/callable-classes"),a(o)])]),g,n("p",null,[m,e(" 메소드는 어떤 클래스든 함수를 흉내낼 수 있도록 합니다."),f,e(" 이 메소드는 매개변수와 반환 타입과 같은 일반적인 "),a(s,{to:"/dart/language/functions.html"},{default:i(()=>[e("함수")]),_:1}),e("가 제공하는 기능을 동일하게 지원합니다.")]),b,(l(),_(u("script"),{type:"text/javascript",src:"https://dartpad.dev/inject_embed.dart.js",defer:""})),v,a(c)])}const C=r(p,[["render",x],["__file","callable-classes.html.vue"]]);export{C as default};
