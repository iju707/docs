---
title: 이상탐지 구성하기
tag:
    - Elasticsearch
    - Machine Learning
    - 7.13
prev: ml-model-snapshots
next: create-jobs
---

머신러닝 기능을 사용하려면 클러스터에 적어도 한개의 머신러닝 노드가 있어야 되며 모든 마스터급 노드에 머신러닝이 활성화 되어야 합니다.
기본적으로, 모든 노드는 머신러닝 노드입니다.
이 설정에 관련된 자세한 내용은 [머신러닝 노드](https://www.elastic.co/guide/en/elasticsearch/reference/7.13/modules-node.html#ml-node)를 참고하세요.

데이터 분석을 위해 머신러닝 기능을 사용하기 위해 이상탐지 잡을 생성하고 잡에 데이터를 전달해야합니다.

머신러닝 분석 결과는 엘라스틱서치에 저장되며 키바나를 활용하여 결과를 시각화 하고 탐색할 수 있습니다.

* [이상탐지 잡 만들기](create-jobs.md)
* [머신러닝 이상탐지 중단하기](stopping-ml.md)
* [실패한 이상탐지 잡 재시작하기](ml-restart-failed-jobs.md)

이상탐지 잡을 생성하고 중단하는 방법을 배운 뒤 좀더 전문가적 설정과 시나리오를 위해 [예제](anomaly-examples.md)를 확인해보세요.

대규모 이상탐지 잡의 특성에 대해 자세히 알고 싶으면 [규모에 맞는 이상탐지 작업하기](anomaly-detection-scale.md)를 참고하세요.