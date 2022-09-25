<template>
    <div class='canvas_app'>
        <form @submit.prevent="on_submit">
            <div>
                <h1>画布设置</h1>
                宽<input v-model='canvas.width' type="text">
                高<input v-model='canvas.height' type="text">
                <div class='showBgcolor'>
                        背景色
                    红<input @change='paint_bg' type="range" max='255' min='0' v-model='canvas.red' value='0'>
                    绿<input @change='paint_bg' type="range" max='255' min='0' v-model='canvas.green' value='0'>
                    蓝<input @change='paint_bg' type="range" max='255' min='0' v-model='canvas.blue' value='0'>
                </div>
            </div>
            <div>
                <h1>文字设置</h1>
                <div>
                    <table class='table table-bordered table-hover canvas_table'>
                        <thead>
                            <th>方式</th>
                            <th>内容</th>
                            <th>大小</th>
                            <th>颜色</th>
                            <th>位置</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    填充<input v-model='font.fillORstroke' value='fill' type="radio">
                                    描边<input v-model='font.fillORstroke' value='stroke' type="radio">
                                </td>
                                <td>
                                    <input v-model='font.text' type="text">
                                </td>
                                <td>
                                    <input v-model='font.size' type="text">
                                </td>
                                <td>
                                    <input v-model='font.color' type="color">
                                </td>
                                <td>
                                    <input v-model='font.x' placeholder='x' type="text">
                                    <input v-model='font.y' placeholder='y' type="text">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </form>
        <div>
            <canvas id="tony" :width='canvas.width' :height='canvas.height'>
                canvas英文：画布。浏览器不支持显示，行内块默认300*150的矩形，不能使用css指定宽高，
                js获得其width和height得到的是整数不是字符串，同img和table
            </canvas>
        </div>
    </div>
</template>
<script>
export default {
    name: 'canvastpl',
    data: function(){
            return{
            canvas: {
                el: null,
                width: null,
                height: null,
                bgcolor: 'rgba(0,0,0,0.2)',
                red: '0',
                green: '0',
                blue: '0',
                opacity: '0.3',
                // font: false,
            },
            font: {
                fillORstroke: 'fill',
                text: null,
                x: 0,
                y: 0,
                // textBaseline: 'alph'
                size: '18px',
                color: '#000'

            },
            ctx: {
                x: null,
                y: null,
            }
        }
    },
    mounted: function(){
        this.canvas.el = document.getElementById('tony');
        this.canvas.el.style.background = this.canvas.bgcolor;
    },
    methods: {
        on_submit: function(){

        },
        on_focus: function(){
        },
        paint_bg: function(){
            this.canvas.el.style.background = 
                "rgba(" + this.canvas.red +","+ this.canvas.green +","+ this.canvas.blue +","+ this.canvas.opacity;
        },
        init_font: function(){
            var ctx = this.canvas.el.getContext('2d');
            ctx.textBaseline = 'top';
            ctx.font = this.font.size + " sans-serif";
            if(this.font.fillORstroke == 'fill'){
                ctx.fillStyle = this.font.color;
                ctx.fillText(this.font.text,this.font.x,this.font.y);
            }else{
                ctx.strokeStyle = this.font.color;
                ctx.strokeText(this.font.text,this.font.x,this.font.y);
            }
        }
    },
    watch: {
        canvas: {
            deep: true,
            handler: function(){
            }
        },
        font: {
            deep: true,
            handler: function(){
                this.init_font();
            }
        }
    }
}
</script>
<style>
    .canvas_app{background:#fff;}
    @media screen and (max-width:812px){
        .canvas_table{
            table-layout:fixed;
        }
        .canvas_table input[type="text"]{
            width: 100%;
        }
    } 
</style>