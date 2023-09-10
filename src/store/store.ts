import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import { fetchUsersThunk } from './users/usersThunks';

const rootReducer = combineReducers({
  users: usersReducer
});

const store = configureStore({
  reducer: rootReducer
});

store.dispatch(fetchUsersThunk({ limit: 10 }));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
