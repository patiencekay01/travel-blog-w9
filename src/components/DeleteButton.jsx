'use client'

export default function DeleteButton({ id, action }) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <button type="submit">Delete</button>
    </form>
  );
}