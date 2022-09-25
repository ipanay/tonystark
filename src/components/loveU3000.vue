<template>
    <div class='tony_bg'>
        <h1>tonystark , love you three thousand</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        yiqing () {
            alert('疫情即将控制，地震终将平静！')
        },
        change () {
            this.show = !this.show
        },
        get () {
            this.http
        }
    }
}
</script>
<style>
.tony_bg{
    height:100vh;
    background-image:url('../../public/tony-1.jpg')
}
</style>