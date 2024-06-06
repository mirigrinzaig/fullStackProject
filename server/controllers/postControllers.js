const Posts = require("../models/Posts")

//create
//require admin!
const createNewPost = async (req, res) => {
    // const image = (req.file?.filename ? req.file.filename : "")
    const { header, body } = req.body
    //validation of the requiered fields
    if (!header || !body) {
        return res.status(400).json({ error: "חסרים נתונים" });
    }
    const likes = 80
    const post = await Posts.create({ header,body,likes})
    return res.json(post)
}
//read
//for every one!
const getAllPosts = async (req, res) => {
    const posts = await Posts.find({}, { header: 1, body: 1, image: 1 }).lean()
    if (!posts?.length) {
        return res.status(400).json({ massage: 'שגיאה בקבלת נתונים' })
    }
    res.json(posts)
}

//read
//for Admin! more details for every post.
const getAllPostsForAdmin = async (req, res) => {
    const posts = await Posts.find().lean()
    if (!posts?.length) {
        return res.status(400).json({ massage: 'שגיאה בקבלת נתונים' })
    }
    res.json(posts)
}

//update
//for admin!
const updatePost = async (req, res) => {
    const image = (req.file?.filename ? req.file.filename : "")
    const { header, body } = req.body

    //validation of the requiered fields
    if (!header || !body) {
        return res.status(400).json({ error: "Missing header or body" });
    }
    const post = await Posts.findOne({ header: header }).exec()
    if (!post) {
        return res.status(400).json({ message: "post not found" })
    }
    post.header = header
    post.body = body
    if (image) {
        post.image = image
    }

    const updatePost = await post.save()
    res.json(`post: ${updatePost.header} updated`)

}

//delete
//for admin!
const deleatePost = async (req, res) => {
    const { header } = req.body
    console.log(header);
    if (!header) {
        return res.status(400).json({ error: "Missing header" });
    }
    const post = await Posts.findOne({ header: header }).exec()

    if (!post) {
        return res.json({ message: 'post not found' })
    }
    else {
        const result = await post.deleteOne()
        const replay = `Post ${result.header}, header ${result.header} deleted`
        return res.json(replay)
    }

}
//for every one- less datails
const getPostById = async (req, res) => {
    const { header } = req.params
    const post = await Posts.findOne({ header: header }).lean()
    if (!post) {
        return res.json({ message: `no post with header: ${header}` })
    }
    let newPost = {
        header: post.header,
        body: post.body,
        image: post.image
    }

    return res.json(newPost)

}
//for admin- all datails.
const getPostByIdForAdmin = async (req, res) => {
    const { header } = req.params
    const post = await Posts.findOne({ header: header }).lean()
    if (!post) {
        return res.json({ message: 'Post not found' })
    }
    return res.json(post)
}

module.exports = { createNewPost, getAllPosts, getAllPostsForAdmin, updatePost, deleatePost, getPostById, getPostByIdForAdmin }

