import { defineComponent,toRefs } from "vue";
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
    name:"WXButton",
    props:buttonProps,
    setup(props:ButtonProps,{ slots }){
        const { type,size,disabled,block } = toRefs(props)

        return ()=>{
            const defaultSlots = slots.default?slots.default():'按钮' 
            const blockCls = block.value ? 's-btn--block' : ''
            return (
                <button
                    disabled = { disabled.value }
                    class={ `s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}` }
                >
                    { defaultSlots }
                </button>
            )
        }
    }
})