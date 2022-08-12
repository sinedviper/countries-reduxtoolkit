import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";

import * as api from "./config";
import { controlReduce } from "./features/controls/controls-slice";
import { themeReducer } from "./features/theme/theme-slice";
import { countryReducer } from "./features/country/country-slice";
import { detailsReducer } from "./features/details/details-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countryReducer,
    controls: controlReduce,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
