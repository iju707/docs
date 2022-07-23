---
description: Compose의 GPU 지원(GPU support in Compose)
keywords: documentation, docs, docker, compose, GPU access, NVIDIA, samples
title: GPU 지원
---

Compose 서비스는 Docker 호스트에 GPU를 가지고 있고 Docker 데몬에 맞게 설정되어있으면 GPU 장치 예약을 정의할 수 있습니다.
이것을 위해, 아직 설정되어있지 않다면 [사전요구사항](../config/containers/resource_constraints.md#gpu)을 설치해야합니다.

아래 섹션의 예제에서는 Docker Compose로 서비스 컨테이너에 GPU 장치 접근을 제공하는 것을 다루겠습니다. `docker-compose` 또는 `docker compose` 명령어를 사용하겠습니다.

### Compose v2.3 형식에서 서비스 `runtime` 속성 사용 (구형)

Docker Compose v1.27.0+에서 2.x과 3.x 버전의 모든 속성에 대한 조합을 가진 Compose 명세 스키마를 사용할 수 있도록 전환되었습니다.
이것은 컨테이너에 GPU 접근을 제공할 수 있도록 [runtime](/compose-file/compose-file-v2.md#runtime)이라는 서비스 속성의 사용을 다시 가능하게 합니다.
하지만, GPU 장치의 특정 속성을 제어할 수는 없습니다.

```yaml
services:
  test:
    image: nvidia/cuda:10.2-base
    command: nvidia-smi
    runtime: nvidia
```

### 서비스 컨테이너에 GPU 접근 활성화

Docker Compose v1.28.0+ 부터 Compose 명세에 [device](https://github.com/compose-spec/compose-spec/blob/master/deploy.md#devices) 구조 정의를 사용하여 GPU 예약을 정의할 수 있도록 합니다.
이것은 아래의 창치 속성을 사용하여 GPU 예약에 사용자정의 값을 활용한 제어를 제공합니다. 

- [capabilities](https://github.com/compose-spec/compose-spec/blob/master/deploy.md#capabilities) - 문자열 목록의 값 정의 (예. `capabilities: [gpu]`). Compose 파일에 필히 설정해야합니다. 그렇지 않으면 서비스 배포시 오류가 발생합니다.
- [count](https://github.com/compose-spec/compose-spec/blob/master/deploy.md#count) - 예약할 GPU 장치의 번호를 가리키는 숫자 또는 `all` 값 정의 ( 호스트에서 연결할 GPU의 번호 제공 ).
- [device_ids](https://github.com/compose-spec/compose-spec/blob/master/deploy.md#device_ids) - 호스트의 GPU 장치 ID를 표현하는 문자열 목록의 값 정의. 호스트에서 `nvidia-smi` 명령의 출력으로 장치 ID를 찾을 수 있습니다.
- [driver](https://github.com/compose-spec/compose-spec/blob/master/deploy.md#driver) - 문자열의 값 정의 (예. `driver: 'nvidia'`)
- [options](https://github.com/compose-spec/compose-spec/blob/master/deploy.md#options) - 드라이버의 특정 옵션을 표현하는 키-값 쌍


> **노트**
>
> `capabilities` 항목을 무조건 설정해야합니다. 그렇지 않으면 서비스 배포시 오류가 발생합니다.
>
> `count`와 `device_ids`는 한번에 사용할 수 없습니다. 둘중 하나만 정의해야합니다.

이 속성에 대한 더 많은 정보는 [Compose 명세](https://github.com/compose-spec/compose-spec/blob/master/deploy.md#devices)의 `deploy` 섹션을 보시기 바랍니다.

1 GPU 장치를 접근하여 서비스를 실행하는 Compose 파일 예제입니다.

```yaml
services:
  test:
    image: nvidia/cuda:10.2-base
    command: nvidia-smi
    deploy:
      resources:
        reservations:
          devices:
          - driver: nvidia
            count: 1
            capabilities: [gpu, utility]
```

Docker Compose로 실행하겠습니다.

```sh
$ docker-compose up
Creating network "gpu_default" with the default driver
Creating gpu_test_1 ... done
Attaching to gpu_test_1    
test_1  | +-----------------------------------------------------------------------------+
test_1  | | NVIDIA-SMI 450.80.02    Driver Version: 450.80.02    CUDA Version: 11.1     |
test_1  | |-------------------------------+----------------------+----------------------+
test_1  | | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
test_1  | | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
test_1  | |                               |                      |               MIG M. |
test_1  | |===============================+======================+======================|
test_1  | |   0  Tesla T4            On   | 00000000:00:1E.0 Off |                    0 |
test_1  | | N/A   23C    P8     9W /  70W |      0MiB / 15109MiB |      0%      Default |
test_1  | |                               |                      |                  N/A |
test_1  | +-------------------------------+----------------------+----------------------+
test_1  |                                                                                
test_1  | +-----------------------------------------------------------------------------+
test_1  | | Processes:                                                                  |
test_1  | |  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
test_1  | |        ID   ID                                                   Usage      |
test_1  | |=============================================================================|
test_1  | |  No running processes found                                                 |
test_1  | +-----------------------------------------------------------------------------+
gpu_test_1 exited with code 0

```

만약 `count`나 `device_ids`가 설정되지 않으면 호스트의 모든 GPU에 접근하도록 기본설정됩니다.

```yaml
services:
  test:
    image: tensorflow/tensorflow:latest-gpu
    command: python -c "import tensorflow as tf;tf.test.gpu_device_name()"
    deploy:
      resources:
        reservations:
          devices:
          - capabilities: [gpu]
```

```sh
$ docker-compose up
Creating network "gpu_default" with the default driver
Creating gpu_test_1 ... done
Attaching to gpu_test_1
test_1  | I tensorflow/stream_executor/platform/default/dso_loader.cc:48] Successfully opened dynamic library libcudart.so.10.1
.....
test_1  | I tensorflow/core/common_runtime/gpu/gpu_device.cc:1402]
Created TensorFlow device (/device:GPU:0 with 13970 MB memory) -> physical GPU (device: 0, name: Tesla T4, pci bus id: 0000:00:1e.0, compute capability: 7.5)
test_1  | /device:GPU:0
gpu_test_1 exited with code 0
```

만약 호스트가 다수의 GPU를 가지고 있으면, `device_ids` 항목은 특정 GPU 장치로 설정하고 `count`는 서비스 컨테이너에 접근한정할 GPU 장치 수를 사용하게 됩니다.
만약 `count`가 호스트의 가능한 GPU 수를 초과하게 되면, 배포에서 오류가 발생됩니다.

```
$ nvidia-smi   
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 450.80.02    Driver Version: 450.80.02    CUDA Version: 11.0     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  Tesla T4            On   | 00000000:00:1B.0 Off |                    0 |
| N/A   72C    P8    12W /  70W |      0MiB / 15109MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
|   1  Tesla T4            On   | 00000000:00:1C.0 Off |                    0 |
| N/A   67C    P8    11W /  70W |      0MiB / 15109MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
|   2  Tesla T4            On   | 00000000:00:1D.0 Off |                    0 |
| N/A   74C    P8    12W /  70W |      0MiB / 15109MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
|   3  Tesla T4            On   | 00000000:00:1E.0 Off |                    0 |
| N/A   62C    P8    11W /  70W |      0MiB / 15109MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
```

만약 GPU-0과 GPU-3 장치에만 접근활성화 하려면 다음과 같이 합니다.

```yaml
services:
  test:
    image: tensorflow/tensorflow:latest-gpu
    command: python -c "import tensorflow as tf;tf.test.gpu_device_name()"
    deploy:
      resources:
        reservations:
          devices:
          - driver: nvidia
            device_ids: ['0', '3']
            capabilities: [gpu]

```

```sh
$ docker-compose up
...
Created TensorFlow device (/device:GPU:0 with 13970 MB memory -> physical GPU (device: 0, name: Tesla T4, pci bus id: 0000:00:1b.0, compute capability: 7.5)
...
Created TensorFlow device (/device:GPU:1 with 13970 MB memory) -> physical GPU (device: 1, name: Tesla T4, pci bus id: 0000:00:1e.0, compute capability: 7.5)
...
gpu_test_1 exited with code 0
```