const blogs = require("../models/Data")
const { formatDistanceToNow, format } = require('date-fns')

class HomeController {
    home(req, res) {
        res.render('home', {
            blogs: blogs
        })
    }
}

module.exports = new HomeController