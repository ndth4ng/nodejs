const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                // Chuyển model từ db thành object do bảo mật của handlebars
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);

        //res.render('news');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
