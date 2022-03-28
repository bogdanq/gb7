# Chat

1. Единственный источник истины // const store = {} store....
2. Состояние только для чтения // store {store.name}, store.name = 121
3. Изменения состояния делаются чистыми функциями // reducer()
4. однонаправленный поток даных

flux

Хранилище (Store/s)
Действие (action)
Диспетчер (Dispatcher)
reducer
Представление (View (react components))

//store

```js
const store = {
  session: {},
  basket: {},
};
```

//Действие

```js
const action1 = { type: "INCREMENT", payload: {} / [] / false / 12 / "" };
const action2 = { type: "DECREMENT" };

const actionCreator = (message) => {
  return { type: "SEND_MESSAGE", payload: message };
}; // actionCreator("hello")
```

//Диспетчер (Dispatcher)

```js
dispatch(actionCreator("Hello"));
// actionCreator("Hello") - не работает
dispatch({ type: "SEND_MESSAGE", payload: "Hello" });

// - запускает редюсер
// - запускает подсчиков (react components)
```

// reducer

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
```
