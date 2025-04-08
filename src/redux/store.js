import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './count_reducer'; // reducer 文件

// 初始化 store
const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== 'production', // 仅在开发环境启用 Redux DevTools
});

export default store;