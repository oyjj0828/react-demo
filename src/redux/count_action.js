// 异步 action 示例
const asyncIncrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'increment' }); // 延迟 1 秒后分发 action
    }, 200);
  };
};

const asyncDecrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'decrement' }); // 延迟 1 秒后分发 action
    }, 200);
  };
};

export { 
  asyncIncrement,
  asyncDecrement 
};

