// import React, { useReducer } from 'react';

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//       case 'multiply':
//         return { count: state.count * state.count };
//         case 'devide':
//             return { count: state.count / state.count };
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       Count: {state.count}
//       <br />
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button> <br />
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button><br />
//       <button onClick={() => dispatch({ type: 'multiply' })}>*</button> <br />
//       <button onClick={() => dispatch({ type: 'devide' })}>/</button>
//     </>
//   );
// }

// export default Counter;


import React, { useRef } from 'react';

function Counter() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </>
  );
}

export default Counter