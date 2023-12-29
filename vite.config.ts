/*
 * @Author: new-wang
 * @Date: 2023-12-29 14:05:54
 * @LastEditors: new-wang
 * @LastEditTime: 2023-12-29 14:38:55
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({})
  ],
})
