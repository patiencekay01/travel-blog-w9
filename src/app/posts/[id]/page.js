import connection from "@/utils/db";

export default async function SinglePost({ params }) {
    const { id } = await params;

    const db = connection()

    const onePost = await db.query('SELECT * FROM blog_posts WHERE id = $1', [id])
    const post = onePost.rows[0]

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    )
}