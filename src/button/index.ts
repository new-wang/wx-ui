/*
 * @Author: new-wang
 * @Date: 2023-12-29 15:51:54
 * @LastEditors: new-wang
 * @LastEditTime: 2023-12-29 17:52:59
 * @Description: 
 */
import { App } from 'vue';
import WXButton from './src/button';

// 具名导出
export { WXButton };

// 导出
export default{
    install(app:App){
        app.component(WXButton.name,WXButton)
    }
}