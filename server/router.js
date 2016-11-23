function router(app, express) {

    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + '/../public'));

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/toDoList');

    var Schema = mongoose.Schema;

    var blogSchema = new Schema({
        title:  String,
        author: String,
        body:   String
    });

    var blog = mongoose.model('blog', blogSchema);

    var blog1 = new blog({
        title:  "first",
        author: "second",
        body: "third"
    });

    app.get('/', function (req, res) {
        res.render('template');
    });

    app.get('/todo', function (req, res) {
        res.render('partials/todo',{data: blog1});
    });
}

module.exports = router;