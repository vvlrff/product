import axios from 'axios'
import { UserAccessTokenKey } from 'Shared/consts/AppConsts'

export const API = axios.create({
  baseURL: 'https://localhost:7084/api',
  headers: {
    Authorization: localStorage.getItem(UserAccessTokenKey)
  }
})
