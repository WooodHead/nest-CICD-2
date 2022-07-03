# Elastic Beanstalk + NestJS + Github Actions CI/CD 파이프라인 구축

> nest JS 하려고 진짜 뻥안치고 총 7시간정도 삽질한듯...

## 다른건 다똑같은데 ..

EB를 생성할때 기본 app을 설치하면 안된다.
아마 express 기반으로 생성되서 그런거같은데, nest CLI로 생성한 앱이랑 node 버전이 호환되지 않는다는 에러문구가 계쏙 떳다..

결국 처음 eb를 생성할때는, 한번 압축해서 직접 올리고나서, 그다음 파이프라인을 구축하는게 맞았다

## 기억해야할 점

- main.yml 에서 `version_label` 을 매번 다르게 해주어야한다.
- 구성 > 롤링 업데이트와 배포 에서 정상 임계 값: `Warning` 으로바꾸어 줘야한다.
  - nestjs 의 경우 빌드 후에 30초 가 지나서 경고가 사라지게 되는 현상이 있어서 실제로 성공적으로 배포가 되었음에도 github actions 상에서는 실패로 뜬다.
