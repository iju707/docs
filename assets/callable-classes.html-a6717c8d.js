import{_ as o,r as a,o as t,c as r,a as e,b as n,d as l,f as d,g as i}from"./app-95e21c4a.js";const u={},_={href:"https://dart.dev/guides/language/language-tour#callable-classes",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[n("Dart 클래스의 인스턴스를 함수처럼 호출하고자 한다면 "),e("code",null,"call()"),n(" 메소드를 구현하면 됩니다.")],-1),p=e("p",null,[n("아래의 예제에서 "),e("code",null,"WannabeFunction"),n(" 클래스는 "),e("code",null,"call()"),n(" 함수를 선언했으며, 3개의 문자열을 받아 스페이스로 구분하여 연결한 뒤 느낌표를 붙입니다."),e("br"),e("strong",null,"Run"),n("을 클릭하여 코드를 실행할 수 있습니다.")],-1),h=e("pre",null,[n("    "),e("code",{class:"language-run-dartpad:theme-light:mode-dart:ga_id-example1:width-100%:height-400px"},`
class WannabeFunction {
  String call(String a, String b, String c) => '$a $b $c!';
}

var wf = WannabeFunction();
var out = wf('Hi', 'there,', 'gang');

void main() => print(out);
    `),n(`
`)],-1);function m(b,f){const s=a("ExternalLinkIcon"),c=a("AdsenseB");return t(),r("div",null,[e("p",null,[n("원문 : "),e("a",_,[n("https://dart.dev/guides/language/language-tour#callable-classes"),l(s)])]),g,p,(t(),d(i("script"),{type:"text/javascript",src:"https://dartpad.dev/inject_embed.dart.js",defer:""})),h,l(c)])}const x=o(u,[["render",m],["__file","callable-classes.html.vue"]]);export{x as default};
