import { fromJS } from 'immutable'
import constants from './constants'

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  articlePage: 1,
})

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case constants.ADD_ARTICLE_LIST:
      return state.set('articleList', state.get('articleList').concat(action.list))
    case constants.CHANGE_PAGE:
      return state.set('articlePage', action.page)
    default:
      return state
  }
}

export default reducer