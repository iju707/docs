import{_ as i,r,o as c,c as m,a as t,b as e,d as a,w as n,e as p}from"./app-95e21c4a.js";const h="/assets/overview-smv-8953770c.jpg",d="/assets/overview-forecast-f18818af.jpg",_={},u={href:"https://www.elastic.co/guide/en/machine-learning/7.13/ml-overview.html",target:"_blank",rel:"noopener noreferrer"},f=p('<h2 id="ml-analyzing" tabindex="-1"><a class="header-anchor" href="#ml-analyzing" aria-hidden="true">#</a> 과거와 현재 분석하기</h2><p>머신러닝 기능은 시계열 데이터 분석을 자동화하여 데이터에 대한 일반 행동의 정확한 기준점을 생성하고 이상 패턴을 식별합니다.<br> 분석을 위한 데이터는 배치나 실시간 데이터피드로 연속해서 제공할 수 있습니다.</p><p><a href="#anomaly-algorithms">독점적인 머신러닝 알고리즘</a>을 사용하여 데이터에서 아래의 상황을 감지하고, 점수를 산정하고, 통계적으로 영향이 있는 인플루언서를 연결하게 됩니다.</p><ul><li>값, 개수 또는 빈도의 시간적 편차와 관련된 이상치</li><li>통계적 희소성</li><li>모집단 구성원의 비정상적인 행동들</li></ul><p>자동화된 주기적 검출과 데이터 변화에 대한 빠른 적응은 머신러닝의 이점을 얻기위해 알고리즘, 모델, 기타 데이터의 과학관련 구성 등을 지정할 필요하가 없음을 확실하게 해줍니다.</p><p>예로, 키바나를 통해 머신러닝의 결과를 볼 수 있으며, 차트는 실제 데이터, 예상값의 범위, 이 범위밖에 발생한 이상치들을 표현하고 있습니다.</p><p><img src="'+h+'" alt="overview-smv.jpg" loading="lazy"></p><h2 id="ml-forecasting" tabindex="-1"><a class="header-anchor" href="#ml-forecasting" aria-hidden="true">#</a> 미래 예측하기</h2><p>머신러닝 기능을 가지고 데이터의 일반적인 행동에 대한 기준점을 생성한 뒤, 이 정보를 활용해서 미래 행동을 추정할 수 있습니다.</p><p>특정 미래 일자의 시계열 값을 추정하기 위해 예측을 사용할 수 있습니다.<br> 예로 들어, 다음 일요일 9시에 웹사이트에 얼마나 많은 사용자가 방문할 예정인지 결정할 수 있습니다.</p><p>또한 미래 일자에 발샐할 시계열 값에 대한 확률을 계산하기 위해 사용할 수 있습니다.<br> 예로 들어, 다음 주말까지 디스크 사용률이 100%에 도달할 가능성을 확인하려고 할 수 있습니다.</p><p>각 예측에는 고유한 ID가 있어 다른 시간에 생성한 예측을 구별하는 데 사용할 수 있습니다.<br> 예측 이상감지 잡 API나 키바나를 사용해서 예측을 생성할 수 있습니다.<br> 예로 들면,</p><p><img src="'+d+'" alt="overview-forecast.jpg" loading="lazy"></p><p>차트의 노란색 선은 예측된 데이터 값을 나타냅니다.<br> 음영 처리된 노란색 영역은 예측된 값의 경계를 나타내며 예측의 신뢰도를 나타냅니다.</p><p>예측을 생성할 때 예측이 처리된 마지막 레코드를 넘어 확장되는 정도를 나타내는 기간을 지정합니다.<br> 기본적으로 기간은 1일 입니다.<br> 일반적으로 예측하는 미래가 멀수록 신뢰 수준이 점점 낮아집니다. (즉, 범위가 증가함)<br> 결국 신뢰 수준이 너무 낮으면 예측이 중지됩니다.<br> 예측 생성 기능에 영향을 미치는 제한 사항에 대한 자세한 내용은 <a href="./ml-limitations#ml-forecast-config-limitations">지원되지 않는 예측 구성</a>을 참고하세요.</p><h2 id="anomaly-algorithms" tabindex="-1"><a class="header-anchor" href="#anomaly-algorithms" aria-hidden="true">#</a> 이상탐지 알고리즘</h2><p>이상탐지 머신러닝 기능은 클러스터링, 다양한 유형의 시계열 분해, 베이지안 분포 모델링 및 상관 분석 등과 같은 다양한 기술의 맞춤형 융합을 사용합니다.<br> 이 분석들은 시계열 데이터에 대해 정교한 실시간 자동화된 이상탐지를 제공합니다.</p><p>머신러닝은 과거 동작을 관찰하고 새로운 데이터에 적응하여 데이터의 시간기반 특성을 통계적으로 모델분석합니다.<br> 모델은 정상적인 행동의 기준선을 나타내므로 새로운 이벤트가 얼마나 변칙적인지를 결정하는 데 사용할 수 있습니다.</p>',18),b=t("br",null,null,-1),g=t("br",null,null,-1);function v(w,k){const o=r("ExternalLinkIcon"),l=r("RouterLink"),s=r("AdsenseB");return c(),m("div",null,[t("p",null,[e("원문 : "),t("a",u,[e("https://www.elastic.co/guide/en/machine-learning/7.13/ml-overview.html"),a(o)])]),f,t("p",null,[e("각 "),a(l,{to:"/elastic/ml/ml-buckets.html"},{default:n(()=>[e("버킷 범위")]),_:1}),e("별 이상탐지 결과가 기록됩니다."),b,e(" 이러한 결과에는 노이즈를 줄이기 위해 집계된 점수와 수학적으로 가장 중요한 이상치에 순위를 매기기 위한 정규화된 점수가 포함됩니다."),g,e(" 더 자세한 내용은 "),a(l,{to:"/elastic/ml/ml-buckets.html#ml-bucket-results"},{default:n(()=>[e("버킷 결과")]),_:1}),e("와 "),a(l,{to:"/elastic/ml/ml-influencers.html#ml-influencer-results"},{default:n(()=>[e("인플루언서 결과")]),_:1}),e("를 참고하세요.")]),a(s)])}const y=i(_,[["render",v],["__file","ml-overview.html.vue"]]);export{y as default};
