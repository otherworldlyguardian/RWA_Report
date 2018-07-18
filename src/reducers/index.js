import { combineReducers } from 'redux'
import activeDataReducer from './reducer-activeData'
import driverReducer from './reducer-drivers'
import clientReducer from './reducer-clients'
import fieldReducer from './reducer-fields'
import formReducer from './reducer-forms'

const allReducers = combineReducers({
  activeData: activeDataReducer,
  driverList: driverReducer,
  clientList: clientReducer,
  fieldList: fieldReducer,
  formList: formReducer
})

export default allReducers
