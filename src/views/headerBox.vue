<template>
    <div class="headerBox">
        <div class="header">
            <div class="visible-xs-block visible-sm-block">红色</div>
            <div class="visible-md-block visible-lg-block">
                <div class="fl">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="fl menu">
                    <span>{{ $t('lang.header.home') }}</span>
                    <span>{{$t('lang.header.aboutUs')}}</span>
                    <span>产品和服务</span>
                    <span>联系我们</span>
                </div>
                <div class="fr">
                    <span @click="changeLang('zh-CN')">中</span>
                    <span @click="changeLang('en-US')">EN</span>
                    <!--<span>AR</span>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerBox",
        methods: {
            changeLang(lang) {
                this.$i18n.locale = lang;
            }
        },
    }
</script>

<style>
    .headerBox{
        height: 80px;
        background: #000;
    }
    .headerBox .header{
        /*width: 80%;*/
        padding: 0 20px;
        margin: 0 auto;
        color: #fff;
        font-size: 18px;
    }
    .headerBox .header .menu{
        padding: 20px 0;
    }
    .headerBox .header .menu span{
        margin-right: 50px;
    }
</style>