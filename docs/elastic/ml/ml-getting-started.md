---
title: ELK로 머신러닝 기능 사용해보기
tag: ["Elasticsearch", "Machine Learning", "7.13"]
next: ml-gs-visualizer
---

원문 : [https://www.elastic.co/guide/en/machine-learning/7.13/ml-getting-started.html](https://www.elastic.co/guide/en/machine-learning/7.13/ml-getting-started.html)

머신러닝 기능은 데이터를 분석하고 행동에 대한 패턴을 위한 모델을 생성합니다.
선택할 분석에 대한 유형은 현재 직면해 있는 질문이나 문제와 사용가능한 데이터의 유형에 따라 선택됩니다.

## 비지도 머신러닝 {#get-started-unsupervised}

훈련이나 간섭없이 데이터의 패턴과 관계를 추론할 수 있는 두가지 유형의 분석이 있습니다. 이상탐지, 이상치 탐지

[이상탐지](https://www.elastic.co/guide/en/machine-learning/7.17/ml-overview.html)는 시계열 데이터를 요구합니다.
확률 모델을 구축하고 발생할 수 있는 비정상 이벤트를 식별하기 위해 지속적 수행을 합니다.
모델은 시간이 지남에 따라 진화하게 되며 미래 행동에 대한 예측할 수 있는 통찰지표로 사용할 수 있습니다.

[이상치 탐지](https://www.elastic.co/guide/en/machine-learning/7.17/dfa-outlier-detection.html)는 시계열 데이터를 요구하지 않습니다.
데이터 포인트가 서로간 얼마나 근접한지와 점을 기준으로 클러스터 밀도에 대해 분석하여 데이터 셋의 비정상적 지점을 식별합니다.
연속적으로 수행하지는 않습니다.
이상치 점수로 마킹된 데이터 지점이 있는 데이터 셋의 복제본을 생성합니다.
점수는 데이터 지점이 다른 데이터 지점에 비해 얼마나 이상치인지 정도를 나타냅니다.

## 지도 머신러닝 {#get-started-supervised}

학습 데이터셋이 필요한 두가지 유형의 분석이 있습니다. 분류, 회귀

두 경우 모두, 결과는 예측으로 주석이 달린 데이터셋의 복사본과 새 데이터에 대한 예측을 수행하기 위해 배포할 수 있는 훈련된 모델입니다.
더 자세한 내용은, [지도 머신러닝 소개](https://www.elastic.co/guide/en/machine-learning/7.17/ml-supervised-workflow.html)를 참고하세요.

[분류](https://www.elastic.co/guide/en/machine-learning/7.17/dfa-classification.html)는 DNS 요청이 악성 또는 양성 도메인으로부터 시작되었는지와 같은 이산 범주형 값을 예측하기 위해 데이터 지점간의 관계를 학습합니다.

[회귀](https://www.elastic.co/guide/en/machine-learning/7.17/dfa-regression.html)는 웹 요청에 대한 응답시간과 같은 연속적 수치값을 예측하기 위해 데이터 지점간의 관계를 학습합니다.

## 한번해보기 {#get-started-prereqs}

시범삼아 머신러닝을 해볼 준비가 되었나요?
아래 튜토리얼을 해봅시다.

* 데이터 시각화를 해보자
* 키바나 샘플 데이터를 활용하여 이상탐지 잡을 생성하자
* 데이터의 가능한 이상치를 식별하기 위해 결과를 사용하자

이 튜토리얼이 끝나면, 머신러닝이 무엇이며 자체적 데이터에서 이상치를 탐지하기 위해 어떻게 사용할지에 대한 좋은 영감을 얻게될 많은 아이디어를 가질 수 있습니다.

아래 비디오는 이번 튜토리얼에서 진행할 작업들을 빠르게 훑어보기를 제공합니다.

<div>
    <component :is="'script'" type="text/javascript" async src="https://play.vidyard.com/embed/v4.js"></component>
    <img
    style="width: 100%; margin: auto; display: block;"
    class="vidyard-player-embed"
    src="https://play.vidyard.com/eVQoHfHNgGxBeuAZ5rCtXq.jpg"
    data-uuid="qAiTxhZSXKQVQF5aFMp1s3"
    data-v="4"
    data-type="inline"
    />
</div>

좀더 내용이 필요하신가요?
용어를 배우고 엘라스틱서치가 어떻게 동작하는지에 대한 기본을 이해하기 위해 [엘라스틱서치 소개](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/elasticsearch-intro.html)를 참고하세요.

1. 머신러닝 기능을 사용해보기전에 엘라스틱서치와 키바나를 설치해야합니다.
  엘라스틱서치는 데이터와 분석결과를 저장합니다.
  키바나는 잡을 생성하고 보기위한 도움이 되는 사용자 인터페이스를 제공합니다.

    :::tip
    자체 하드웨어에서 엘라스틱서치와 키바나를 실행하거나 엘라스틱 클라우드의 [호스팅된 엘라스틱서치 서비스](https://www.elastic.co/cloud/elasticsearch-service)를 사용할 수 있습니다.
    엘라스틱서치 서비스는 AWS와 GCP 모두 사용가능합니다.
    [무료로 엘라스틱서치 서비스를 사용해보세요](https://www.elastic.co/cloud/elasticsearch-service/signup).
    :::

2. 머신러닝 기능을 사용하기 위해 적절하게 환경이 구성되었는지 검증합니다.
  엘라스틱서치 보안 기능이 활성화 되어있으면, 이 튜토리얼을 해보기 위해 이상탐지 잡을 관리할 수 있는 권한을 가진 사용자가 필요합니다.
  [설정 및 보안](./ml-setup.md)을 참고하세요.

3. [키바나로 올릴 예시 데이터 셋을 추가합니다](https://www.elastic.co/guide/en/kibana/7.17/get-started.html#gs-get-data-into-kibana).
  
    a. 키바나 홈페이지에서 **Add data**를 클릭하고 **Sample data**를 선택합니다.

    b. 데이터 셋을 선택합니다. 이번 튜토리얼에서는 **Sample web logs**를 사용할 것 입니다.
    여기서는 사용가능한 모든 예제 데이터셋을 자유롭게 **Add data** 클릭해도 됩니다.

데이터 셋이 이제 키바나에서 머신러닝 잡으로 분석할 준비가 되었습니다.

<AdsenseB />