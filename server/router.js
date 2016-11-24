function router(app, express) {

    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + '/../public'));

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/toDoList');

    var db = mongoose.connection;

    db.on('open', function () {

    });
    var Schema = mongoose.Schema;

    var todoSchema = new Schema({
        text:  String
    });


    var todoSchema = mongoose.model('text', todoSchema);

    app.get('/', function (req, res) {
        res.render('template');
    });

    app.get('/todo', function (req, res) {
        var requestData = req.query;

        var task = new todoSchema({
            text:  requestData.text
        });

            // todoSchema.find("text", function (err,task) {
            //     todoSchema.remove("text", function () {
            //         console.log(task)
            //     });
            //     res.render('partials/todo',{data: task});
            // });

            task.save(function (err, task) {
                if(err) {
                    return console.error(err);
                }
                var tmpTasks = [];
                todoSchema.find("text", function (err,task) {
                    for(var i = 0; i < task.length; i++) {
                        if(task[i].text !== "" && task[i].text !== undefined) {
                            tmpTasks.push(task[i].text);
                        }
                    }
                    res.render('partials/todo',{ data: tmpTasks });
                });

            });



            // todoSchema.find("text", function (err,task) {
            //     task.remove();
            //     res.render('partials/todo',{data: task});
            // });
    });
}

module.exports = router;