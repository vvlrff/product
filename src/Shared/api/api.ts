import axios from 'axios'
import { UserAccessTokenKey } from 'Shared/consts/AppConsts'

export const API = axios.create({
  baseURL: 'https://forum-e1q8.onrender.com/api',
  headers: {
    Authorization: localStorage.getItem(UserAccessTokenKey)
  }
})
