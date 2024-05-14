import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covidSlice";

export default configureStore({ reducer: { covidSlice } })