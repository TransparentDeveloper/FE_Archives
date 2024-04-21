- _이미 구현이 완료된 원본 저장소 에서 복제한 것입니다._

# BEAUTIFUL-SEARCH
_(*back-end server 가 있다는 것을 가정하고 구현하였습니다.)_

## 🎞️ 시연영상

https://github.com/mobi-community/mobi-3rd-begginer-4/assets/50646145/39fd7838-4f67-4a65-80ce-d16d8ee85476

## ✋ 이런 것을 목표로 구현했습니다.!

### 핵심기능
- 검색창 에 keyword 를 입력할 경우, 그에 대한 "검색 결과 (건) 수" 를 출력합니다.

### React-Suspense 실습
- 요청 - 응답 간의 delay(지연) 를 의도적으로 만들었습니다. 
- 해당 시간동안 promise 를 throw 하고, 이를 react-suspense 기능으로 감지하여 데이터 로딩 중 대체 컴포넌트 `LoadingFallback` 를  출력합니다.

### Error-Boundary 실습
- delay 값이 증가할 경우, 서버는 error-code 와 error-message 를 반환 (했다고 가정 😒) 합니다. - 해당 error 에 대한 객체를 throw 하고, error-boundary 기능을 통해 대체 컴포넌트 `ErrorFallback` 를 출력합니다.

## 🛠 환경 구성
- 핵심 라이브러리: React
- 언어: JavaScript
- 패키지관리: Yarn
- 빌드 도구: Vite

## 📚 설치/추가 라이브러리 목록
 - 스타일 라이브러리: tailwind-css
 - 코드 분석: eslint
 - 코드 포멧팅: prettier
 - etc: react-suspense
