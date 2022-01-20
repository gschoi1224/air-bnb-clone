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
