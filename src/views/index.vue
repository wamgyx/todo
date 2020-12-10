<template>
    <div class="page">
        <headerBox></headerBox>
        <router-view></router-view>
        <FooterBox></FooterBox>
    </div>
</template>

<script>
    import FooterBox from './FooterBox'
    import headerBox from './headerBox'
    export default {
        name: "index",
        components:{
            FooterBox,
            headerBox
        },
        mounted(){
            // console.log($)
        }
    }
</script>

<style scoped>

</style>