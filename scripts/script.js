$(document).ready(function(){

    var width = $(document).width();
    var nav = $('.navigation');

    var toggleNav = function() {
        $('.bar1').toggleClass('change-bar1');
        $('.bar2').toggleClass('change-bar2');
        $('.bar3').toggleClass('change-bar3');
        $('.nav-list-mobile').slideToggle('expand');
        $('body').toggleClass('overflow-hidden');
    };

    $('#open-nav').on('click', function() {
        toggleNav();
    });

        
    $('.nav-item > a').on('click', function() {
        if ( width < 768 ) {
            toggleNav();
        } else {
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 1000);
        }
    });

    var switchCategories = function() {

        var stateZero = false;

        var magicShow = function() {
            $('.item').addClass('show');
        };
        var magicHide = function() {
            $('.item').removeClass('show');
            $('.btn').removeClass('active');
        };
        magicShow();
        stateZero = true;

        $('.button-section > .btn').on('click', function() {
            magicHide();
            $(this).addClass('active');
            var selectedClass = '.' + this.id;
            $(this).parent().next().find(selectedClass).closest('.item').addClass('show');
            stateZero = false;
        });

        $('#all').on('click', function() {
            if (stateZero === false) {
                magicShow();
            } 
        });

    }();

});