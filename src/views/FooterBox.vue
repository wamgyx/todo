<template>
    <div class="footerBox">
        <div class="con visible-md-block visible-lg-block">
            <ul class="cl">
                <li class="fl">
                    <div class="title">热门游戏</div>
                    <div class="desc">使命召唤</div>
                    <div class="desc">崩溃班迪科特</div>
                    <div class="desc">实郎</div>
                    <div class="desc">斯派罗</div>
                    <div class="desc">Skylanders</div>
                </li>
                <li class="fl">
                    <div class="title">公司</div>
                    <div class="desc">新闻中心</div>
                    <div class="desc">研究</div>
                    <div class="desc">动视暴雪</div>
                    <div class="desc">联系我们 </div>
                </li>
                <li class="fl">
                    <div class="title">法律</div>
                    <div class="desc">使用条款</div>
                    <div class="desc">隐私政策</div>
                    <div class="desc">Cookie政策</div>
                    <div class="desc">Cookies设置</div>
                    <div class="desc">在线安全</div>
                    <div class="desc"> 申请人隐私政策</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterBox"
    }
</script>

<style>
    .footerBox{
        background: #000;
    }
    .footerBox .con{
        width: 80%;
        margin: 0 auto;
        padding-top: 60px;
        height: 340px;
    }
    .footerBox .con ul li{
        width: 33.3%;
        color: #fff;
    }
    .footerBox .con ul li .title{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .footerBox .con ul li .desc{
        font-size: 12px;
        line-height: 20px;
    }

</style>