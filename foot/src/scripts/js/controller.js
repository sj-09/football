angular.module('myapp')
    .controller('loginCtrl', function ($scope) {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }
        })
    })
    .controller('homeCtrl', function ($scope,$http) {
        var swiper = new Swiper('.swiper-container', {
            onSlideChangeStart: function (swiper) {
                var idx = swiper.activeIndex;
                $('.Snav').children().eq(idx).addClass('active').siblings().removeClass('active')
            }
        });
        $('.Snav a').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            swiper.slideTo($(this).index());
        });

        $http.get("./livelist.json")
            .then(function (data) {
                $scope.data=data.data.data
            })
    })
