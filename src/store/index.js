import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./theme"

const store = configureStore({
  reducer: {
    themModule: themeReducer, // 主题
  }
})

export default store