import { combineReducers } from 'redux-immutable'
import { reducer as headRedcer} from '../common/header/store/index'
import { reducer as homeRedcer} from '../pages/home/store/index'

const reducer =  combineReducers({
  header: headRedcer,
  home: homeRedcer,
})

export default reducer;