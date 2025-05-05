import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toastReducer from "../reducers/Toast";
import StepperReducer from "../reducers/Stepper";
import userReducer from "../reducers/User";
import ModalReducer from "../reducers/Modal";
import createIndexedDBStorage from "redux-persist-indexeddb-storage";
// const storage = createIndexedDB
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
const storage = createIndexedDBStorage("stepperDB");

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["StepSlice"],
};

const rootReducer = combineReducers({
  toast: toastReducer,
  StepSlice: StepperReducer,
  user: userReducer,
  modal: ModalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
