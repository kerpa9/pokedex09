import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainer.slice";
import paginate from "../store/slices/paginateSilice";

const store = configureStore({
  reducer: {
    trainer,
    paginate,
  },
});

export default store;
