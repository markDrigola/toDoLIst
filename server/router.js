function router(app, express, mongoose) {

    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + '/../public'));

    var todoModel = require("../schemas/taskSchemas.js")(mongoose);

    // var testTasks = new todoModel({
    //     task : "test text1",
    //     time : 12312312,
    //     status : true
    // });
    // testTasks.save();

    app.get('/', function (req, res) {
        todoModel.find(function (err, tasks) {
            res.render('template', { data: tasks });
        });
    });

    app.get('/remove', function (req, res) {
        var requestRemove = req.query;
        todoModel.find(function (err, tasks) {
            for(var i = 0; i < tasks.length; i ++) {
                if(tasks[i]._id == requestRemove.remove) {
                    tasks[i].remove();
                }
            }
        });
    });

    app.get('/refact', function (req, res) {
        var requestRemove = req.query;
        console.log(requestRemove.refact);
        console.log(requestRemove.thisId);
        todoModel.find(function (err, tasks) {
            for(var i = 0; i < tasks.length; i++) {
                if(tasks[i]._id == requestRemove.thisId) {
                    tasks[i].task = requestRemove.refact;
                    tasks[i].save();
                }
            }
        })
    });

    app.get('/added', function (req, res) {
        var requestData = req.query;

        var testTasks = new todoModel({
            task : requestData.added,
            time : 12312312,
            status : true
        });

        testTasks.save();

            // todoSchema.find("text", function (err,task) {
            //     todoSchema.remove("text", function () {
            //         console.log(task)
            //     });
            //     res.render('partials/todo',{data: task});
            // });

            // task.save(function (err, task) {
            //     if(err) {
            //         return console.error(err);
            //     }
            //     var tmpTasks = [];
            //     todoSchema.find("text", function (err,task) {
            //         for(var i = 0; i < task.length; i++) {
            //             if(task[i].text !== "" && task[i].text !== undefined) {
            //                 tmpTasks.push(task[i].text);
            //             }
            //         }
            //         res.render('partials/todo',{ data: tmpTasks });
            //     });
            //
            // });



            // todoSchema.find("text", function (err,task) {
            //     task.remove();
            //     res.render('partials/todo',{data: task});
            // });
    });
}

module.exports = router;