const db = require('../dbConfig/init');

class Post {
    constructor(data) {
        this.id = data.id
        this.author = data.author
        this.datetime = data.datetime
        this.title = data.title
        this.content = data.content
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(d => new Post(d))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }

    static findById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE posts.id = $1;`, [id]);
                let post = new Post(postData.rows[0]);
                resolve(post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

    // static findByOwner(id) {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             let postsData = await db.query(`SELECT * FROM posts WHERE ownerId = $1;`, [id]);
    //             const posts = postsData.rows.map(d => new Post(d))
    //             resolve(posts);
    //         } catch (err) {
    //             reject('Error retrieving owner\'s posts');
    //         }
    //     });
    // }

    // static create(name, age) {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             let postData = await db.query(`INSERT INTO posts (name, age) VALUES ($1, $2) RETURNING *;`, [name, age]);
    //             let newPost = new Post(postData.rows[0]);
    //             resolve(newPost);
    //         } catch (err) {
    //             reject('Error creating post');
    //         }
    //     });
    // }

    // destroy() {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             await db.query(`DELETE FROM posts WHERE id = $1;`, [this.id]);
    //             resolve('Post was deleted')
    //         } catch (err) {
    //             reject('Post could not be deleted')
    //         }
    //     })
    // }

}

module.exports = Post;
