import connection from "@/utils/db"

export default async function NewPost() {

    const db = connection()

    const newPost = await db.query('SELECT * FROM blog_posts')
    const newBlog = newPost.rows

    async function handleSubmit(formData) {
        'use server';
        const { title, content } = Object.fromEntries(formData);
        
    }

    return (
        <form action={handleSubmit} className="new-post-form">
            <input name="title" placeholder="Title" required />
            <textarea name="content" placeholder="Write your post..." required />
            <button type="submit">Submit</button>
        </form>
    )
    
}