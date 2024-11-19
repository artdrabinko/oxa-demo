import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../root-slice";
import saga from "../saga";

const sagaMiddleware = createSagaMiddleware();

export const rootStore = configureStore({
  reducer: {
    root: rootReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(saga);
