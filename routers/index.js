const homeRouter = require('./home')
const blogRouter = require('./blog')

function router(app) {
    app.use('/blogs', blogRouter)
    app.use('/', homeRouter)
}

module.exports = router