_(\*해당 저장소 는 이미 구현이 완료된 원본 저장소 를 복제한 것입니다. - [🔗 원본 저장소 바로가기](https://github.com/secondflow02/InfoNavi))_

# 📷 RADIMAGE

### 랜덤 이미지 출력 서비스

<div align="center">

<h1><a href="https://radimage.vercel.app/" style="font-size: 150px;">🌠</a></h1>

_👆 Logo 클릭 시, 배포된 주소로 이동됩니다._

</div>

<br/>
<br/>

## 🖥️ Display

<div align="center">

</div>

<br/>
<br/>

## For What? 🤔

다음의 기능을 구현해보고자 설계한 프로젝트입니다.!

### 1. Infinite Scroll

- intersection-observer-api 를 활용합니다.
- scroll-event 에 대해 브라우저 뷰포트가 가장 하단의 요소에 닿을 시, 새로운 이미지 데이터를 호출합니다.

### 2. Core Web Vital 개선

- 이미지를 비롯한 resource 의 load 과정 상에서, 저하되는 웹 성능을 개선 합니다.
- 이미지의 크기를 지정하여, 불필요한 레이아웃 이동을 막습니다.
- 이미지 로드 전까지 skeleton ui 를 출력하여, lcp 와 cls 를 개선합니다.
- 스크롤을 통해 추가로 load 되는 이미지에 대해 lazy loading 을 적용합니다.
- web-font 가 완전히 load 되기 전까지 대체 font 를 먼저 노출합니다.

## 📅 프로젝트 기간

24.03.26 ~ 24.04.02
