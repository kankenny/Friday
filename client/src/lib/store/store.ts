import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/auth-slice/authSlice"
import sameProfileReducer from "./slices/same-profile-slice/sameProfileSlice"
import otherProfileReducer from "./slices/other-profile-slice/otherProfileSlice"
import timelineReducer from "./slices/timeline-slice/timelineSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    sameProfile: sameProfileReducer,
    otherProfile: otherProfileReducer,
    timeline: timelineReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
