import connection from "@/utils/db";
import { revalidatePath } from "next/cache";

export default async function AddComment({ id }) {
     async function handleComment(formData) {
        'use server';

    const db = connection()

        const { content } = Object.fromEntries(formData);

        const comment = db.query(
            'INSERT INTO comments (post_id, body) VALUES ($1, $2)',
            [content, id],
        );
        revalidatePath(`/posts/${id}`);
    }

    return (
        <>
            <form action={handleComment} className="comment-form">
                <textarea name="content" placeholder="Write a comment..." required />
                <button type="submit">Submit</button>
            </form>
        </>
    );
    
}