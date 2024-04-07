
# RosterHub
인명 등록/관리 서비스

<div align="center">


<a href="https://roster-hub.vercel.app/">
  <img src="https://github.com/TransparentDeveloper/FE_Archives/assets/50646145/80c0cb88-10ad-435e-8573-563170242f73" alt="RosterHub" width="500" height="auto">
</a>


_👆 Logo 클릭 시, 배포된 주소로 이동됩니다._

</div>

<br/>
<br/>

## 🖥️ 실행 화면

<div align="center">

#### ① 등록 & 정렬

https://github.com/TransparentDeveloper/FE_Archives/assets/50646145/231b91fa-9ce4-460f-bb85-c4a36fa8940c

-----

#### ② 페이지네이션

https://github.com/TransparentDeveloper/FE_Archives/assets/50646145/91b159a2-6d14-4203-aab2-f49a535ad4af

</div>


<br/>
<br/>

## 🔥 기능 소개

### 인명 등록 📛 
- `이름`, `전화번호`, `생년월일` 정보를 입력하면, 서비스에 해당 정보가 등록됩니다. ☺️
- 등록시간을 기준으로, 각 인명 정보에 대해 id 가 부여됩니다.
- 각 정보를 입력 시, *실시간 유효성 검사*가 진행됩니다.
- 등록된 사람의 정보는 해당 페이지 url 에 암호화하여 저장합니다.

### 페이지네이션
- 관리하는 데이터(인명 정보) 가 증가할 경우, 데이터를 조회할 수 있는 페이지 수 또한 적절히 증가합니다. 📈
- 페이지 번호가 적힌 버튼은 최대 **10** 개까지 출력됩니다.
- ❗️ 등록된 데이터가 없다면 pagination 컴포넌트는 출력되지 않습니다.
- 현재 조회 중인 페이지를 식별할 수 있습니다. 👀
- `﹤` , `﹥` 버튼 클릭 시, 현재 페이지를 기준으로 이전 혹은 다음 페이지로 이동할 수 있습니다.
- `≪`,`≫` 버튼 클릭 시, 가장 처음 혹은 마지막 페이지로 이동할 수 있습니다.

### 데이터 정렬 및 조회 방법 선택
- `이름`, `생년월일`, `id` 를 기준으로 데이터를 정렬할 수 있습니다. (기본 설정은, `이름` 순 입니다.)
- 정렬방법은 `오름차순`, `내림차순` 두 가지로 가능합니다. 👍 (기본 설정은 `오름차순` 입니다.)
- 각 페이지 당 최대 데이터 출력 갯수를  `10` 개 혹은 `20` 중, 선택할 수 있습니다. (기본값은 `10` 개씩 출력합니다.)


<br/>
<br/>

## For What? 🤔
  
### ① url 을 활용한 data 저장/조회 기능 구현
- 인명 정보 + 페이지 정보 등 을 `query-parameter` 로 관리합니다.
- 인명 정보의 경우 배열 형태로 조회되기 때문에, `lz-string` 패키지를 설치해 데이터를 압축 & string 타입으로 변화하여 저장합니다.
- 페이지 정보를 확인하여, 적절한 인명 데이터 목록을 출력합니다.
> __* 다음 자료를 보고, 동기를 얻어 해당 기능을 구현 했습니다. 😊__
> 
> [진정한 남자들은 DB를 쓰지 않습니다 - 코딩애플 | 유튜브](https://www.youtube.com/watch?v=pCOBmmJARPE)

### ② pagination 구현
- login 과 ui code 를 최대한 구별해보고자 했습니다. 
- `useSearchParam` (react-router-dom) 을 활용해, pagination 컴포넌트를 제어할 수 있는 custom-hook 을 만들었습니다. => `usePagination`

### ③ ✋ No style-libray
- 자주 사용하는 라이브러리 의존성을 줄여보고자, css 라이브러리를 활용하지 않았습니다.
- inline-styling 방법을 활용해, 컴포넌트 design 을 진행했습니다.
> __* 다음 블로그를 통해 구체적인 방법을 작성 해두었습니다. 😊__
> 
> [💅🏼 styled-components 없이 개발해보기 - sksmsdbstlsdlek | velog](https://velog.io/@sksmsdbstlsdlek/styled-components-%EC%97%86%EC%9D%B4-%EA%B0%9C%EB%B0%9C%ED%95%B4%EB%B3%B4%EA%B8%B0)

<br/>
<br/>


## ⚙️ 환경 구성

- **Core Library** : React
- **Programming Language** : TypeScript
- **Package Management** : Yarn
- **Build Tool**: Vite

<br/>
<br/>

## ➕ 추가 라이브러리 
- React Hook Form : 사용자 입력에 대한 유효성 검사
- yup : 유효성 스키마 작성
- lz-string : 데이터 압축(encode) / 해제(decode)
