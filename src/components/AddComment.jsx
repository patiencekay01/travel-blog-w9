import connection from "@/utils/db";

export default async function AddComment({ id }) {

    const db = connection()

    async function handleComment(formData) {
        'use server';

        const { content } = Object.fromEntries(formData);

        const comment = db.query(
            'INSERT INTO comments (post_id, body) VALUES ($1, $2)',
            [content, id],
        );
        
    }

    return (
        <>
            <form action={handleComment}>
                <textarea name="content" placeholder="Write a comment..." required />
                <button type="submit">Submit</button>
            </form>
        </>
    );
    
}