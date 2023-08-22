import{_ as c,r as s,o as d,c as h,a as t,d as a,w as o,b as e,e as i}from"./app-95e21c4a.js";const p="/assets/ml-create-job-a54cbe1b.jpeg",_="/assets/ml-data-recognizer-sample-c3a13196.jpeg",m="/assets/ml-data-recognizer-apm-06972a73.jpeg",u="/assets/ml-data-recognizer-filebeat-fe4a3a25.jpeg",b="/assets/ml-data-recognizer-auditbeat-0eabd70b.jpeg",g="/assets/ml-data-recognizer-metricbeat-0032f7cf.jpeg",f={},j=t("p",null,"이상탐지 잡은 분석작업을 수행하기 위해 필요한 구성정보와 메타데이터를 포함하고 있습니다.",-1),x=t("br",null,null,-1),z=t("p",null,[t("img",{src:p,alt:"ml-create-job.jpeg",loading:"lazy"})],-1),w=t("p",null,[e("단일메트릭 잡은 단일 디텍터를 가지는 단순한 잡입니다."),t("br"),e(" 디텍터는 발생할 분석의 유형과 분석대상항목을 정의하는 것 입니다."),t("br"),e(" 디텍터의 수를 제한하는 것 외에도 단일 메트릭 잡 생성 마법사는 고급 구성옵션의 많은 부분을 생략합니다.")],-1),k=t("p",null,"다중메트릭 잡은 한개이상의 디텍터를 가질 수 있기 때문에 동일한 데이터에 대하여 다수의 잡을 효율적으로 수행할 수 있습니다.",-1),y=t("br",null,null,-1),v=t("br",null,null,-1),A=i('<p>고급 잡은 다수의 디텍터를 가질 수 있고 모든 잡 설정을 활성화 할 수 있습니다.</p><p>키바나는 데이터의 특정 유형을 인지하고 컨텍스트에 맞는 특별한 위자드를 제공할 수 있습니다.<br> 예로 들어, 샘플 웹 로그 데이터 집합을 추가하면 아래 위자드가 표시됩니다.</p><p><img src="'+_+'" alt="ml-data-recognizer-sample.jpeg" loading="lazy"></p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>대안으로 키바나 홈페이지에서 샘플 데이터 집합을 로드한 뒤, <strong>View data &gt; ML jobs</strong> 를 클릭합니다.<br> 샘플 전자상거래 주문 데이터 집합과 샘플 웹 로그 데이터 집합에 관련된 이상탐지 잡이 있습니다.</p></div><p>엘라스틱 APM을 사용하면 키바나는 이 데이터를 감지하고 이상탐지 잡을 위한 마법사를 제공합니다.<br> 예로 들면,</p><p><img src="'+m+'" alt="ml-data-recognizer-apm.jpeg" loading="lazy"></p>',6),N={href:"https://www.elastic.co/guide/en/beats/filebeat/7.13/index.html",target:"_blank",rel:"noopener noreferrer"},B={href:"http://nginx.org/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://httpd.apache.org/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.elastic.co/guide/en/ecs/1.8/ecs-reference.html",target:"_blank",rel:"noopener noreferrer"},E=t("p",null,[t("img",{src:u,alt:"ml-data-recognizer-filebeat.jpeg",loading:"lazy"})],-1),M={href:"https://www.elastic.co/guide/en/beats/auditbeat/7.13/index.html",target:"_blank",rel:"noopener noreferrer"},T=t("p",null,[t("img",{src:b,alt:"ml-data-recognizer-auditbeat.jpeg",loading:"lazy"})],-1),C={href:"https://www.elastic.co/guide/en/beats/metricbeat/7.13/metricbeat-module-system.html",target:"_blank",rel:"noopener noreferrer"},I=i('<p><img src="'+g+'" alt="ml-data-recognizer-metricbeat.jpeg" loading="lazy"></p><p>이러한 마법사는 Auditbeat, Filebeat, Metricbeat 데이터를 분석하는데 도움을 줄 수 있도록 사용자정의된 이상탐지 잡, 대시보드, 검색 및 시각화를 생성해줍니다.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>데이터가 엘라스틱서치 밖에 존재한다면 잡을 생성하는데 키바나를 사용할 수 없고 데이터피드를 사용하여 실시간으로 데이터를 검색할 수 없습니다.</p></div><h2 id="job-tips" tabindex="-1"><a class="header-anchor" href="#job-tips" aria-hidden="true">#</a> 머신러닝 잡 팁</h2><p>키바나에서 이상탐지 잡을 생성할 때 잡 생성 마법사가 데이터의 특징 기반으로 조언을 제공할 수 있습니다.<br> 이런 제안을 잘 활용하면 통찰력있는 머신러닝 결과를 생성할 가능성이 더 큰 잡을 만들 수 있습니다.</p><h3 id="bucket-span" tabindex="-1"><a class="header-anchor" href="#bucket-span" aria-hidden="true">#</a> 버킷 범위</h3><h3 id="cardinality" tabindex="-1"><a class="header-anchor" href="#cardinality" aria-hidden="true">#</a> 집합의 크기</h3><h3 id="detectors" tabindex="-1"><a class="header-anchor" href="#detectors" aria-hidden="true">#</a> 디텍터</h3><h3 id="influencers" tabindex="-1"><a class="header-anchor" href="#influencers" aria-hidden="true">#</a> 인플루언서</h3><h3 id="model-memory-limits" tabindex="-1"><a class="header-anchor" href="#model-memory-limits" aria-hidden="true">#</a> 모델 메모리 제한</h3><h3 id="dedicated-indices" tabindex="-1"><a class="header-anchor" href="#dedicated-indices" aria-hidden="true">#</a> 전용 인덱스</h3>',11);function P(F,R){const r=s("RouterLink"),n=s("ExternalLinkIcon"),l=s("AdsenseB");return d(),h("div",null,[j,t("p",null,[a(r,{to:"/elastic/ml/ml-put-job.html"},{default:o(()=>[e("이상탐지 잡 생성하기 API")]),_:1}),e("를 사용해서 이상탐지 잡을 만들 수 있습니다."),x,e(" 또한 키바나는 잡을 쉽게 생성할 수 있도록 아래의 마법사를 제공하고 있습니다.")]),z,w,k,t("p",null,[e("모집단 잡은 모집단 행동내에 비교하여 특이한 행동을 감지하는 것 입니다."),y,e(" 자세한 정보는 "),a(r,{to:"/elastic/ml/ml-configuring-populations.html"},{default:o(()=>[e("모집단 분석 수행하기")]),_:1}),e("를 참고하세요.")]),t("p",null,[e("분류 잡은 카테고리로 로그 메시지를 그룹화 하고 그안에 비정상을 감지하기 위해 "),a(r,{to:"/elastic/ml/ml-count-functions.html"},{default:o(()=>[e("count")]),_:1}),e("나 "),a(r,{to:"/elastic/ml/ml-rare-functions.html"},{default:o(()=>[e("rare")]),_:1}),e(" 함수를 사용합니다."),v,a(r,{to:"/elastic/ml/ml-configuring-categories.html"},{default:o(()=>[e("데이터의 비정상 카테고리 감지하기")]),_:1}),e("를 참고하세요.")]),A,t("p",null,[t("a",N,[e("Filebeat"),a(n)]),e("를 사용하여 "),t("a",B,[e("Nginx"),a(n)]),e("나 "),t("a",L,[e("Apache"),a(n)]),e("의 HTTP 서버에 대한 접근로그를 엘라스틱서치에 보내서 "),t("a",V,[e("엘라스틱 공통 스키마(ECS)"),a(n)]),e("의 항목과 데이터유형을 사용하여 저장하게 되면, 다음과 같은 마법사가 표시됩니다.")]),E,t("p",null,[t("a",M,[e("Auditbeat"),a(n)]),e("를 사용하여 시스템의 처리행동 감사를 할 경우 다음과 같은 마법사가 표시됩니다.")]),T,t("p",null,[e("비슷하게, "),t("a",C,[e("Metricbeat 시스템 모듈"),a(n)]),e("으로 서버를 모니터링하면 다음과 같은 마법사가 표시됩니다.")]),I,a(l)])}const H=c(f,[["render",P],["__file","create-jobs.html.vue"]]);export{H as default};