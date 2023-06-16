import { PayloadAction } from "@reduxjs/toolkit"
import { PostDetailSliceType } from "../../../types/slice-types/PostDetailSliceType"
import { DetailedCommentType } from "../../../types/primitive-types/DetailedCommentType"

export const setPostDetailReducer = (
  state: PostDetailSliceType,
  action: PayloadAction<PostDetailSliceType[]>
) => {
  return { ...state, ...action.payload }
}

export const createCommentReducer = (
  state: PostDetailSliceType,
  action: PayloadAction<{ comment: DetailedCommentType }>
) => {
  state.comments.push(action.payload.comment)
}
