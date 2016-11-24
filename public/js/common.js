(function () {
   'use strict';

    $(document).on('ready', function () {
        $.ajax({
            url:"/todo",
            async:true
        }).done( function(data) {
            $('p').html(data);
        });

        $('.addedTascs').on('click', function (event) {
            var textVals = $('.someTextTascs').val();
            $('.someTextTascs').val('');

            $.ajax({
                url:"/todo?text="+ textVals +"",
                async:true
            }).done( function(data) {
                $('p').html(data);
            });
        });
        $("form").submit( function(event){
            event.preventDefault();
        });

        // var objNe = {
        //     first: 123,
        //     second: 'test'
        // }
        //
        // for( var key in objNe) {
        //     console.log(key)
        //     console.log(objNe[key])
        // }
    });
})();