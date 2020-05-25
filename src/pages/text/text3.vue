<template>
    <div>
        <canvas id="myCanvas" width="800" height="600" ref="canvas" style="border:1px solid red"></canvas>
    </div>
</template>

<script>
    export default {
        name:'text3',
        data(){
            return {
                
            }
        },
        mounted(){
            this.canvasTest()
        },
        methods:{
            canvasTest(){
                var c=document.getElementById("myCanvas");
                var ctx=c.getContext("2d");
                ctx.beginPath();
                ctx.moveTo(0,50);
                ctx.bezierCurveTo(0,100,100,100,100,50);
                ctx.bezierCurveTo(100,50,50,-50,0,50);
                ctx.stroke();
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>