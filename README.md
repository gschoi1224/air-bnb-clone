1.  npm i or yarn add
2.  yarn dev

## 리액트 포털

-   모달을 만드는 방법
-   부모 컴포넌트의 DOM 계층 외부에 있는 DOM 노드로 자식을 렌더링하는 방법
-   (https://reactjs.org/docs/portals.html)[https://reactjs.org/docs/portals.html]
-   첫 번째 인자로 리액트 컴포넌트를 받고, 두 번째 인자로 리액트 컴포넌트를 넣을 DOM을 받음

```js
ReactDOM.createPortal(child, container);
```

## 비밀번호 암호화

-   bcryptjs 라이브러리 사용
-   암호화 hashSync("문자", salt)
-   복호화 compareSync("문자", 해시된 문자)
-   salt는 암호에 추가하여 해시를 해킹하는 것을 방지하는 값

## 객체 속성 optional로 변경

-   Partial<Pick<객체, 속성>>

## redux

-   action : store로 데이터를 보내는 방법으로 view에 정의된 액션을 호출하면 액션 생성자가 어플리케이션의 상태를 변경한다
-   reducer : 어플리케이션의 상태가 어떻게 바뀌는지 특정하는 함수
-   store : action과 reducer를 저장하는 단 하나의 객체

## react-outside-click-handler

-   외부 클릭 시 원하는 이벤트를 넣을 수 있는 기능 제공
```js
<OutsideClickHandler onOutsideClick={}>
```
