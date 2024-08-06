// 2. createStore import
import { createStore } from "redux";

// 5. reducer 생성
function reducer(currentState, action) {
  // 첫번째 인자는 초기상태, 두번째 인자는 변경할 액션

  const newState = { ...currentState }; // 새로운 상태를 생성할 때 기존 상태를 불변하게 유지하기 위해 spread연산자 사용

  if (currentState === undefined) {
    return { number: 1 }; // 초기상태를 반환
  }

  if (action.type === "INCREMENT") {
    newState.number = currentState.number + 1;
  }

  if (action.type === "DICREMENT") {
    newState.number = currentState.number - 1;
  }

  return newState; // 변경된 상태를 반환
}

// 3. redux react-redux 모듈 설치

// 4. 스토어에 저장할 상태를 export
export const store = createStore(reducer);
