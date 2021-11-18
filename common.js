(() => {

        /************************************************************
         * 탭
         ************************************************************/
        if ($('.tab_list')) {
            $('.tab_btns a').on('click', function (e) {
                e.preventDefault();
                var clickMenu = $(this).attr('href');
                $(this).addClass('active');
                $(this).parent().siblings('li').find("a.active").removeClass('active');
                // $('.tab_btns a').not($(this)).removeClass('on');

                $(clickMenu).addClass('on');
                $(clickMenu).siblings('.tab_box.on').removeClass('on');
                // $('.tab_box').not($(clickMenu)).removeClass('on');
            })
        }

        $(".depth1_title").bind("click", function () {
            $(this).toggleClass("showing");
        });


        // $(".menu_open").bind("click", function () {
        //     $(".depth1_title").addClass("showing");
        // });

        // $(".menu_close").bind("click", function () {
        //     $(".depth1_title").removeClass("showing");
        // });


})();