import { Dimensions, Platform, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// 屏幕宽高
const { width, height } = Dimensions.get('window');
export const windowW = width;
export const windowH = height;
// 状态栏高度
const statusHeight = StatusBar.currentHeight || 0;
// 是否为Ios
export const isIos = Platform.OS === 'ios';
// 是否为IphoneX
export const isIphoneX = isIos && height >= 812;
// 设计稿宽高
export const [baseWidth, baseHeight] = [375, 667];
// 屏幕与设计稿的宽高比
export const [wRatio, hRatio] = [width / baseWidth, height / baseHeight];
// 宽度适配
export const pixelX = w => Math.round(w * wRatio);
// 高度适配
export const pixelY = h => Math.round(h * hRatio);
// 状态栏高度
export const statusBarHeight = isIos ? (height >= 812 ? 44 : 20) : statusHeight;
// 设置本地存储
export const setStorage = async ({ key, value }) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return Promise.reject(e);
  }
};
// 获取本地存储数据
export const getStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    return Promise.reject(e);
  }
};
// 删除本地存储数据
export const removeStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    return Promise.reject(e);
  }
};
// 清除所有Storage
export const clearStorage = () => {
  return AsyncStorage.clear();
};
// 延迟
export const wait = (timeout, isSuccess = true) => {
  return new Promise((resolve, reject) => {
    if (isSuccess) {
      setTimeout(resolve, timeout);
    } else {
      setTimeout(reject, timeout);
    }
  });
};
// 防抖函数
export const debounce = (fn, waitTime) => {
  let timer;
  function func(...args) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(async function () {
      try {
        await fn(...args);
        clearTimeout(timer);
        timer = null;
      } catch (error) {
        clearTimeout(timer);
        timer = null;
      }
    }, waitTime);
  }
  func.cancel = function () {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  };
  return func;
};
/**
 * 进制转换
 * @param {String} str 需要转换的值
 * @param {Number} prevRadix 转换前的进制
 * @param {Number} nowRadix 转换后的进制
 * @param {Number} len 前面补0的长度
 * 例子1：16转10进制
 * convertRadix('12', 16, 10) => 返回 '18'
 * 例子2：前面补0
 * convertRadix('12', 16, 10, 4) => 返回 '0018';
 */
export const convertRadix = (str = '', prevRadix = 10, nowRadix = 10, len) => {
  if (len) {
    return parseInt(`${str}`, prevRadix)
      .toString(nowRadix)
      .padStart(len, '0');
  }
  return parseInt(`${str}`, prevRadix).toString(nowRadix);
};
