(function () {
   'use strict';

    $(document).on('ready', function () {
        // $.ajax({
        //     url:"/todo",
        //     async:true
        // }).done( function(data) {
        //     $('p').html(data);
        // });

        $('.deletedTasks').on('click', function () {
            var button_idTask = $(this).attr("data-id-tasks");
            $(this).parent().remove();

            $.ajax({
                url: "/remove?remove=" + button_idTask +"",
                async:true
            }).done( function (data) {

            })
        });

        $('.addedTascs').on('click', function (event) {
            var textVals = $('.someTextTascs').val();
            $('.someTextTascs').val('');
            var delBut = "<button class='deletedTasks buttonStyle'><i class='fa fa-pencil'  aria-hidden='true'></i></button>";
            var readBut = '<button class="deletedTasks buttonStyle" data-id-tasks="<%=data[i]._id%>">remove</button>';

            $('.todoList').append("<li>" + textVals + "" + delBut + "" + readBut + "</li>");
            $.ajax({
                url:"/added?added="+ textVals +"",
                async:true
            }).done( function(data) {

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