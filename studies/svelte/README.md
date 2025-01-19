# Svelte 학습기록

<br/>

## Svelte 란 무엇인가?

- 웹 UI 구축을 위한 프레임워크
- 컴파일러 를 통해, HTML & CSS & Javascript 등으로 작성된 컴포넌트를 최적화된 (오버헤드가 없는) Javascript Module 로 변환한다.

## 주요 특징

- React 나 Vue.js 등과 다르게, **Virtual DOM** 을 사용하지 않는다.
  - V-DOM(Virtual DOM) 을 사용하는 React 는 A-DOM(Actual DOM) 과 V-DOM 을 비교하여 발견된 변경사항을 A-DOM 에 반영한다.
  - Svelte 는 **A-DOM 에 변경사항을 바로 반영**한다.
  - **DOM 업데이트가 간단하고, 더 빠른 반응성(Reactivity) 을 기대할 수 있다.**

- 런타임 시, 프레임워크 코드해석이 필요 없다.
  - React 의 경우, V-DOM 을 통한 비교 알고리즘을 실행하는 등, 런타임 시에 해석&실행해야하는 코드가 있다.
  - Svelte 는 컴파일러를 사용해, 빌드 시점서 모든 코드를 브라우저가 바로 실행할 수 있는 Vanilla Javascript 로 변환한다.
  - **상호작용이 빠르고, 번들 사이즈가 작아진다는 장점이 있다.**

<br/>
<br/>

## 언제 사용하면 좋을까?


<br/>
<br/>

## 주의사항


<br/>
<br/>

## 핵심 개념 및 문법 (vs React)

<br/>

### 룬


<br/>
<br/>

## 튜토리얼 ([Svelte 공식문서](https://svelte.dev/tutorial/svelte/welcome-to-svelte))

### 변수 선언
- (\<script>`...`\</script>) 내부에 선언할 수 있다.
- 마크업 시, 선언한 변수를 활용하려면 중괄호(`{}`) 를 활용하면 된다.

```html
<p>My name is {name}.!</p>

<script>
  let name = 'Jeff';
</script>
```

- HTML 속성(Attribute) 안에 변수를 넣어도 된다.

```html
<script>
  let src = '/image.gif'
  let name = 'jeff'
</script>

<img src={src} alt="{name} is dancing">
```

<br/>
<br/>

### CSS

- 스타일 태그 내부(\<style>`...`\</style>) 에 선언하면 된다.
- **(중요.!)** 스타일 태그 내부에서 정의한 rule 은 기본적으로 해당 컴포넌트에만 적용된다.

```html
<p>This is a paragraph.</p>

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
```

### import Component

- 다른 파일(*.svelte) 에 정의된 컴포넌트를 재사용할 수 있다.

```html
<!-- ./header.svelte -->

<div>
  <Title />
  <Description />
</div>

<script>
  import Title from './title.svelte'
  import Description from './description.svelte'
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 3px
  }
</style>
```

```html
<!-- ./title.svelte -->

<p>
  이것은 제목
</p>

<style>
  p {
    font-family: 'Comic Sans MS', cursive;
    font-size: 32px;
    font-weight: bold;
  }
</style>

```


```html
<!-- ./description.svelte -->

<p>
  이것은 부가설명
</p>

<style>
  p {
    font-family: 'Comic Sans MS', cursive;
    font-size: 15px;
    font-weight: normal;
  }
</style>
```

> [!WARNING]  
> Style Scoping 주의
> - `./header.svelte` 에 정의된 스타일이 해당 파일에 import 된 다른 컴포넌트의 요소에는 영향을 미치지 않는다. 
> - Svelte 는 기본적으로 컴포넌트 단위의 스타일 스코프를 갖는다.
