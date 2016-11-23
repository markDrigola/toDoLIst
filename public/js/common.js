(function () {
   'use strict';

    $(document).on('ready', function () {
        $.ajax({
            url:"/todo",
            async:true
        }).done( function(data){
            $('p').html(data);
        });

        $('.addedTascs').on('click', function (event) {
            $.ajax({
                url:"/todo",
                async:true
            }).done( function(data){
                $('p').html(data);
            });
        });
        $("form").submit( function(event){
            event.preventDefault();
        })
    });
})();