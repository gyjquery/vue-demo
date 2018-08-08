import {
  RECEIVE_SHIWU
} from './mutation-types'
import {
  reqshiwu
} from '../api'

export default {
 // 异步获取头部导航信息action
  async getshiwu ({commit}) {
    let result = await reqshiwu()
    if(result.code === 0){
     const shiwu = result.data
      commit(RECEIVE_SHIWU, {shiwu})
    }
  }
}
