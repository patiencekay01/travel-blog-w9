import connection from "../../utils/db"
import Link from "next/link"

export default async function PostsPage () {

    const db = connection()

    const response = await db.query('SELECT * FROM blog_posts')
    const posts = response.rows

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                <div className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                </Link>
    ))}
        </div>
    )
}