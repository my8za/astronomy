import axios from 'axios'
import { API_KEY } from '@/utils/constants'

export const API_URL = axios.create({
  baseURL: `https://api.nasa.gov`,
  headers: {"Content-Type": "application/json"}
})

API_URL.interceptors.request.use((config) => {
  return config;
}, (error) => {
  console.log("request error", error)
  return Promise.reject(error);
})

API_URL.interceptors.response.use((resp) => {
  return resp;
}, (error) => {
  console.log("response error", error)
  return Promise.reject(error);
})


// 오늘의 천문 사진
export const getAPOD = async () => {
  const resp = await API_URL.get(`/planetary/apod?api_key=${API_KEY}`)
  return resp
}

// 지구 다색 이미징 카메라
export const getEPIC = async () => {
  const resp = await API_URL.get(`/EPIC/api/natural/images?api_key=${API_KEY}`)
  return resp
}


// 화성 날씨
export const getInSight = async () => {
  const resp = await API_URL.get(`/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`)
  return resp
}

// 화성 탐사선 사진
export const getMarsRoverPhotos = async () => {
  const resp = await API_URL.get(`/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`)
  return resp
}

// 나사 이미지 / 비디오
export  const getNASAImagesAndVideo = async () => {
  const resp = await axios.get(`https://images-api.nasa.gov`)
  return resp
}