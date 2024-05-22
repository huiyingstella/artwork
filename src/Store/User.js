import { createSlice } from '@reduxjs/toolkit'
import { removeToken } from '../Utils/Utils'
import { setToken as _setToken, getToken } from '../Utils/Utils'
import { loginAPI, getProfileAPI } from '../Apis/User'

const userStore = createSlice({
    name: "user",
    initialState: {
        token: getToken() || '',
        userInfo: {},
        isLoggedIn: false,
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        loginSuccess(state) {
            state.isLoggedIn = true;
        },
        clearUserInfo(state){
            state.token = ''
            state.userInfo = {}
            state.isLoggedIn = false;
            removeToken()
        }
    }
})


const { setToken, setUserInfo, loginSuccess, clearUserInfo } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await loginAPI(loginForm)
        dispatch(setToken(res.data.token));
        dispatch(loginSuccess());
    }
}

const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}


export { fetchLogin, setToken, fetchUserInfo, loginSuccess, clearUserInfo }

export default userReducer