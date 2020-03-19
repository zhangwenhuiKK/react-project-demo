import { AUTHENTICATE_THE_USER, USER_LOGIN, USER_LOGOUT } from '../types'
import { save, get, remove } from '@/utils/storage'
let initialState = {
  logged: false,
  username: '',
  role: 2,
  userId: '',
  email: '',
}
const userInfo = get('userInfo')

if (userInfo) {
  initialState = { ...initialState, ...userInfo }
}

  const UserReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
  
      case USER_LOGIN:
        var { username, logged = true, userId, role, email = null, token } = payload
        save('userInfo', { username, userId, role, email, token, logged : true })
        return {...state, logged , username, userId, role, email}

      case USER_LOGOUT:
        remove('userInfo')
        return { ...state, logged: false, username: '', userId: '', role: 2, email: null }
    
      default:
        return state
    }
  }
  export default UserReducer