FROM node:18.12.0-alpine3.16 as build

WORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm i

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]

RUN npm run build

# FROM: 어떤 베이스 이미지에서 실행될지를 결정한다.
# 베이스 이미지: 이 이미지를 실행하는데 필요한 이미지.
# node:18.12.0 : Node.js 18.12.0 버전이 설치되어 있는 이미지를 의미.
# alpine3.16: 해당 이미지가 해당 버전의 운영체제 위에서 실행되는 이미지.
# alpine: 알파인 리눅스를 의미/ 일반 리눅스보다 가볍고 깔끔한 리눅스.
# WORKDIR: 작업 디렉토리 설정
# COPY: 호스트 파일 시스템에서 파일이나 디렉토리를 이미지 내부로 복사.
# RUN: 컨테이너 내에서 실행할 명령어 정의, 패키지 설치, 파일 복사, 응용프로그램 빌드 등.