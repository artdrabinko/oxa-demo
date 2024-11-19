import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import globalReducer from "../global-slice";
import saga from "../saga";

const sagaMiddleware = createSagaMiddleware();

export const rootStore = configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(saga);
