import {
  RECEIVE_SHIWU,

} from './mutation-types'

export default {
   [RECEIVE_SHIWU] (state, {shiwu}) {
     state.shiwu = shiwu
  }
}
