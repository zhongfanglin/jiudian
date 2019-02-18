//精选页面的请求数据
import API from '@/api';
import {
  FetchGet,
  FetchPost
} from "@/common/fetch";
//请求轮播图的数据
export function getCarefullyFocusList() {
  return new Promise((resolve, reject) => {
    FetchGet(API.FOCUSLIST_URL).then(data => {
      resolve(data);
    });
  });
}
//请求团建的数据
export function getCarefullyTuanJian() {
  return new Promise((resolve, reject) => {
    FetchGet(API.TUANJIAN_URL).then(data => {
      resolve(data);
    });
  });
}
//请求亲子的数据
export function getCarefullyQingZi() {
  return new Promise((resolve, reject) => {
    FetchGet(API.QINGZI_URL).then(data => {
      resolve(data);
    });
  });
}
//请求发现的数据
export function getCarefullyFaXian() {
  return new Promise((resolve, reject) => {
    FetchGet(API.FAXIAN_URL).then(data => {
      resolve(data);
    });
  });
}