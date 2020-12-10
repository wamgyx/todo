<template>
    <div class="hello">
        <div style="height: 500px;;background: #d8d6d7">

            <div>
                <p>滑动效果</p>
                <div class="target" id="target-1">
                    <div>
                        <div><img src="../assets/images/t1.png"></div>
                        <div><img src="../assets/images/t2.png"></div>
                        <div><img src="../assets/images/t3.png"></div>
                        <div><img src="../assets/images/t4.png"></div>
                    </div>
                </div>

                <br>
                <br>

                <p>淡入效果</p>
                <div class="target" id="target-2">
                    <div>
                        <div><img src="../assets/images/t4.png"></div>
                        <div><img src="../assets/images/t3.png"></div>
                        <div><img src="../assets/images/t2.png"></div>
                        <div><img src="../assets/images/t1.png"></div>
                    </div>
                </div>
            </div>


            <!--<div id="slideshow_2" class="slideshow">-->



                <!--<div class="slideshow_item" style="background-color: rgb(0, 0, 0); position: absolute; top: 0px; left: 0px; display: none; z-index: 4; opacity: 0; width: 900px; height: 400px;">-->

                    <!--<div class="image"><a href="#"><img src="" alt="photo 2" width="900" height="400"></a></div>-->

                    <!--<div class="data">-->

                        <!--<h4><a href="#">Donec sollicitudin enim sit</a></h4>-->

                        <!--<p>Sed mollis tristique lectus vitae aliquet. Quisque vitae metus ut velit varius feugiat. Maecenas luctus pulvinar elit et viverra. Aenean vel est nulla. </p>-->



                    <!--</div>-->

                <!--</div>-->



                <!--<div class="slideshow_item" style="background-color: rgb(0, 0, 0); position: absolute; top: 0px; left: 0px; display: none; z-index: 4; opacity: 0; width: 900px; height: 400px;">-->

                    <!--<div class="image"><a href="#"><img src="" alt="photo 3" width="900" height="400"></a></div>-->

                    <!--<div class="data">-->

                        <!--<h4><a href="#">Pellentesque lacinia metus</a></h4>-->

                        <!--<p>Integer pretium volutpat ligula sit amet pretium. Morbi nisi dui, rutrum ut bibendum sit amet, gravida eget dui. </p>-->

                    <!--</div>-->



                <!--</div>-->



                <!--<div class="slideshow_item" style="background-color: rgb(0, 0, 0); position: absolute; top: 0px; left: 0px; display: none; z-index: 4; opacity: 0; width: 900px; height: 400px;">-->

                    <!--<div class="image"><a href="#"><img src="" alt="photo 1" width="900" height="400"></a></div>-->

                    <!--<div class="data">-->

                        <!--<h4><a href="#">Lorem ipsum dolor sit amet</a></h4>-->

                        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin enim sit amet dolor posuere dictum. Pellentesque lacinia metus non erat auctor vehicula.</p>-->

                    <!--</div>-->

                <!--</div>-->





                <!--<div class="slideshow_item" style="background-color: rgb(0, 0, 0); position: absolute; top: 0px; left: 0px; display: block; z-index: 5; opacity: 1; width: 900px; height: 400px;">-->

                    <!--<div class="image"><a href="#"><img src="" alt="photo 4" width="900" height="400"></a></div>-->

                    <!--<div class="data">-->

                        <!--<h4><a href="#">Morbi nisi dui bibendum sit amet</a></h4>-->

                        <!--<p>Aliquam feugiat lorem at massa pulvinar interdum. Ut nulla est, vulputate eget facilisis vel, cursus nec sapien. Quisque tincidunt adipiscing lorem, tincidunt sodales lorem imperdiet quis.</p>-->

                    <!--</div>-->

                <!--</div>-->

            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import '../assets/js/HappyImage.min.js'
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        mounted(){


            // $( "#target-1" ).HappyImage({
            //     effect: "slide"
            // });
            // $( "#target-2" ).HappyImage({
            //     effect: "fade"
            // });

            /* eslint-disable */
            // $('#slideshow_2').cycle({
            //
            //     fx: 'fade',
            //
            //     speed:  900,
            //
            //     timeout: 5000,
            //
            //     pager: '.ss2_wrapper .slideshow_paging',
            //
            //     prev: '.ss2_wrapper .slideshow_prev',
            //
            //     next: '.ss2_wrapper .slideshow_next',
            //
            //     before: function(currSlideElement, nextSlideElement) {
            //
            //         var data = $('.data', $(nextSlideElement)).html();
            //
            //         $('.ss2_wrapper .slideshow_box').stop(true, true).animate({ bottom:'-110px'}, 400, function(){
            //
            //             $('.ss2_wrapper .slideshow_box .data').html(data);
            //
            //         });
            //
            //         $('.ss2_wrapper .slideshow_box').delay(100).animate({ bottom:'0'}, 400);
            //
            //     }
            //
            // });
            //
            //
            //
            // $('.ss2_wrapper').mouseenter(function(){
            //
            //     $('#slideshow_2').cycle('pause');
            //
            //     $('.ss2_wrapper .slideshow_prev').stop(true, true).animate({ left:'20px'}, 200);
            //
            //     $('.ss2_wrapper .slideshow_next').stop(true, true).animate({ right:'20px'}, 200);
            //
            // }).mouseleave(function(){
            //
            //     $('#slideshow_2').cycle('resume');
            //
            //     $('.ss2_wrapper .slideshow_prev').stop(true, true).animate({ left:'-40px'}, 200);
            //
            //     $('.ss2_wrapper .slideshow_next').stop(true, true).animate({ right:'-40px'}, 200);
            //
            // });


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
