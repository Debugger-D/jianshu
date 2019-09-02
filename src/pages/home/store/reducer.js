import { fromJS } from 'immutable'
import constant from './constant'

const defaultState = fromJS({
  topicList:[],
  articleList:[]
})

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case constant.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.payload.topicList),
        articleList: fromJS(action.payload.articleList),
      })
    default:
      return state
  }
}

export default reducer