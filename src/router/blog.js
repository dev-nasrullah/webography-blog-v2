const exppress = require('express');
const Blog = require('../models/blog'); // blog model
const router = new exppress.Router();

// for more info over httpstatus code visit https://httpstatuses.com/
// handling get requests
router.get('/blogs', async (req, res) => {

    try {
        
        const blogs = await Blog.find();

        if ( ! blogs) {
            return res.status(404).send();
        }

        res.send(blogs); // send data here.

    } catch (e) {

        res.status(500).send(); // send response when something goes wrong

    }
});


//handling get request for single request
router.get('/blogs/:id', async (req, res) => {
    try {
        
        const _id = req.params.id;

        const blog = await Blog.findById({ _id });

        if ( ! blog) {
            return res.status(404).send();
        }

        res.send(blog);
    } catch (e) {
        
        res.status(500).send();

    }
});


//handling post requests
router.post('/blogs', async (req, res) => {

    //parsing request body.
    const blog = new Blog(req.body);

    try {
        
        await blog.save();
        res.status(201).send();

    } catch (e) {

        res.status(400).send();
        
    }
});


//handling patch requests
router.patch('/blogs/:id', async (req, res) => {
    // you can validate your data based on your needs.

    try {
        
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true} );

        if ( ! blog) {

            return res.status(404).send();

        }

        res.send(blog);
    } catch (e) {
    
        res.status(400).send();

    }
});


//handling delete requests
router.delete('/blogs/:id', async (req, res) => {
    try {
        
        const _id = req.params.id;
        
        const blog = await Blog.findByIdAndRemove( _id );

        if ( ! blog) {
            return res.status(404).send();
        }
        
        return res.send(blog);
    } catch (e) {
        
        res.status(400).send();

    }
});

module.exports = router;