import { combineReducers } from 'redux-immutable'
import { reducer as headRedcer} from '../common/header/store/index'

const reducer =  combineReducers({
  header: headRedcer
})

export default reducer;