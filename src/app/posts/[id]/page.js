import connection from "@/utils/db";
import AddComment from "@/components/AddComment";
import DeleteButton from "@/components/DeleteButton";

export default async function SinglePost({ params }) {
    const { id } = await params;

    const db = connection()

    const onePost = await db.query('SELECT * FROM blog_posts WHERE id = $1', [id])
    const post = onePost.rows[0]

    return (
        <div>
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
            <AddComment id={id} />
            <DeleteButton id={id} />
        </div>
    );
}