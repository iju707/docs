import{_ as t,r as a,o as n,c as h,a as d,b as e,d as r,w as l,e as c}from"./app-95e21c4a.js";const s={},u=c('<h2 id="시스템-요구사항" tabindex="-1"><a class="header-anchor" href="#시스템-요구사항" aria-hidden="true">#</a> 시스템 요구사항</h2><p>플루터를 설치 및 실행하려면 개발환경은 아래의 최소요구사항을 갖춰야 합니다.</p><ul><li><strong>운영체제</strong> : 리눅스(64bit)</li><li><strong>디스크 공간</strong> : 600 MB (IDE/도구를 포함하지 않습니다)</li><li><strong>도구</strong> : 플루터는 환경에서 다음의 명령줄 도구가 가능해야합니다. <ul><li><code>bash</code></li><li><code>curl</code></li><li><code>file</code></li><li><code>git</code> 2.x</li><li><code>mkdir</code></li><li><code>rm</code></li><li><code>unzip</code></li><li><code>which</code></li><li><code>xz-utils</code></li><li><code>zip</code></li></ul></li><li><strong>공유 라이브러리</strong> : 플루터의 <code>test</code> 명령은 환경에서 다음 라이브러리를 필요로 합니다. <ul><li><code>libGLU.so.1</code> : 우분투/데비안 에서 <code>libglu1-mesa</code>, 페도라에서 <code>mesa-libGLU</code>와 같은 메사 패키지를 제공합니다.</li></ul></li></ul><h2 id="flutter-sdk-가져오기" tabindex="-1"><a class="header-anchor" href="#flutter-sdk-가져오기" aria-hidden="true">#</a> Flutter SDK 가져오기</h2><h3 id="snapd를-활용한-플루터-설치하기" tabindex="-1"><a class="header-anchor" href="#snapd를-활용한-플루터-설치하기" aria-hidden="true">#</a> snapd를 활용한 플루터 설치하기</h3><h3 id="수동으로-플루터-설치하기" tabindex="-1"><a class="header-anchor" href="#수동으로-플루터-설치하기" aria-hidden="true">#</a> 수동으로 플루터 설치하기</h3><h3 id="flutter-doctor-실행하기" tabindex="-1"><a class="header-anchor" href="#flutter-doctor-실행하기" aria-hidden="true">#</a> <code>flutter doctor</code> 실행하기</h3><h3 id="환경경로-갱신하기" tabindex="-1"><a class="header-anchor" href="#환경경로-갱신하기" aria-hidden="true">#</a> 환경경로 갱신하기</h3><h3 id="환경경로-직접-갱신하기" tabindex="-1"><a class="header-anchor" href="#환경경로-직접-갱신하기" aria-hidden="true">#</a> 환경경로 직접 갱신하기</h3><h2 id="android-설정" tabindex="-1"><a class="header-anchor" href="#android-설정" aria-hidden="true">#</a> Android 설정</h2><h3 id="android-studio-설치하기" tabindex="-1"><a class="header-anchor" href="#android-studio-설치하기" aria-hidden="true">#</a> Android Studio 설치하기</h3><h3 id="android-장치-설정하기" tabindex="-1"><a class="header-anchor" href="#android-장치-설정하기" aria-hidden="true">#</a> Android 장치 설정하기</h3><h3 id="android-에뮬레이터-설정하기" tabindex="-1"><a class="header-anchor" href="#android-에뮬레이터-설정하기" aria-hidden="true">#</a> Android 에뮬레이터 설정하기</h3><h3 id="android-라이선스-동의하기" tabindex="-1"><a class="header-anchor" href="#android-라이선스-동의하기" aria-hidden="true">#</a> Android 라이선스 동의하기</h3><h2 id="리눅스-설정" tabindex="-1"><a class="header-anchor" href="#리눅스-설정" aria-hidden="true">#</a> 리눅스 설정</h2><h3 id="추가적인-리눅스-요구사항" tabindex="-1"><a class="header-anchor" href="#추가적인-리눅스-요구사항" aria-hidden="true">#</a> 추가적인 리눅스 요구사항</h3><h2 id="웹-설정" tabindex="-1"><a class="header-anchor" href="#웹-설정" aria-hidden="true">#</a> 웹 설정</h2>',17),f=d("code",null,"stable",-1),_=d("br",null,null,-1),b=d("br",null,null,-1),x=d("h2",{id:"다음단계",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#다음단계","aria-hidden":"true"},"#"),e(" 다음단계")],-1),p=d("p",null,"선호하는 에디터를 구성하시면 됩니다.",-1);function m(g,k){const i=a("RouterLink"),o=a("AdsenseB");return n(),h("div",null,[u,d("p",null,[e("Flutter는 "),f,e("채널에서 웹 어플리케이션 빌드를 지원합니다."),_,e(" Flutter 2에서 다른 어플리케이션을 만들면 자동으로 웹으로 빌드가 됩니다."),b,e(" 웹이 안정화되기 전에 생성된 어플리케이션에서 웹을 지원하도록 하려면 위에 설정을 모두 마친 뒤 "),r(i,{to:"/flutter/get-started/web.html"},{default:l(()=>[e("Flutter에서 웹 어플리케이션 빌드하기")]),_:1}),e(" 지침을 따라하시면 됩니다.")]),x,p,r(o)])}const B=t(s,[["render",m],["__file","linux.html.vue"]]);export{B as default};