import { createSlice } from "@reduxjs/toolkit"
import ThemType from "styles/theme/src/types"

const loactTheme = localStorage.getItem('theme') || 'Light'
const initialState = {
  theme: loactTheme
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === ThemType.Dark ? ThemType.Light : ThemType.Dark
      localStorage.setItem('theme', state.theme)
    }
  }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer 