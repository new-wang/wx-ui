/*
 * @Author: new-wang
 * @Date: 2023-12-29 14:05:54
 * @LastEditors: new-wang
 * @LastEditTime: 2023-12-29 18:01:34
 * @Description: 
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import './index.scss'
import WXButton from './button';

createApp(App)
.use(WXButton)
.mount('#app')
