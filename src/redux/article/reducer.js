import { ARTICLE_GET_TAG_LIST, ARTICLE_GET_CATEGORY_LIST } from '../types'
/**
 * state
 */
const defaultState = {
  categoryList: [],
  tagList: []
}

/**
 * article Reducer
 */
export default function ArticleReducer(state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case  ARTICLE_GET_TAG_LIST:
      //const tagList = genertorColor(payload)
      const tagList = payload
      return { ...state, tagList }

    case  ARTICLE_GET_CATEGORY_LIST:
     // const categoryList = genertorColor(payload)
     const categoryList = payload
      return { ...state, categoryList }

    default:
      return state
  }
}