const blogs = require("../models/Data")
const slugify = require('slugify')

class BlogController {
    index(req, res) {
        res.render('blog/index.hbs', {
            blogs: blogs
        })
    }
    detail(req, res) {
        const slug = req.params.slug
        const findBlogBySlug = blogs.find(blog => slug === blog.slug)
        res.render('blog/detail', {
            blog: findBlogBySlug
        })
    }
    show_insert(req, res) {
        res.render('blog/insert')
    }
    insert(req, res) {
        const blog = {
            id: Date.now().toString(),
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            comment: [],
            author: req.body.author,
            slug: slugify(req.body.title),
            tag: req.body.tag,
            create_at: new Date(),
            update_at: new Date()
        }
        blogs.push(blog)
        res.redirect('/blogs')
    }
    show_update(req, res) {
        res.render('blog/update', {
            blog: blogs.find(b => b.id === req.params.id)
        })
    }
    update(req, res) {
        blogs.forEach(b => {
            if (b.id === req.params.id) {
                b.title = req.body.title
                b.description = req.body.description
                b.author = req.body.author
                b.tag = req.body.tag
                b.content = req.body.content
                b.slug = slugify(b.title)
            }
        })
        res.redirect('/blogs')
    }
    delete(req, res) {
        const index = blogs.findIndex(b => b.id === req.params.id)
        blogs.splice(index, 1);
        
        res.redirect('/blogs')
    }
    add_comment(req, res) {
        blogs.forEach(b => {
            if (b.slug === req.params.slug){
                b.comment.push(req.body.comment)
            }
        })
        res.redirect(`/blogs/${req.params.slug}`)
    }
}

module.exports = new BlogController