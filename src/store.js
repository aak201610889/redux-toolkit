import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./reducres/counterReducer";
import themeReducer from "./reducres/themeReducer";
import dataReducer from "./reducres/dataReducer";
import ApiReducer from './reducres/ApiReducer'
export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    data: dataReducer,
    user: ApiReducer,
  },
});
