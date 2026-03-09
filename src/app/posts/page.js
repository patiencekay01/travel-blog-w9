import connection from "../../utils/db"
import Link from "next/link"
import DeleteButton from "@/components/DeleteButton"
import { revalidatePath } from "next/cache";

export default async function PostsPage () {

    const db = connection();
    
async function handleDelete(formData) {
    'use server';

    const id = formData.get("id");

    const db = connection();

    await db.query('DELETE FROM blog_posts WHERE id = $1', [id])

    revalidatePath("/posts");
}

    const response = await db.query('SELECT * FROM blog_posts')
    const posts = response.rows;

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post.id} className="post-card">
                <Link href={`/posts/${post.id}`}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </Link>

                <DeleteButton id={post.id} action={handleDelete} />
                </div>
    ))}
        </div>
    );
}