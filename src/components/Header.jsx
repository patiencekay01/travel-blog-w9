import Link from "next/link";

export default function Header ({ id }) {
    return (
        <header className="header">
            <h1 className="site-title"> Travel My Way </h1>

            <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/posts/new">Create New Post</Link>
            </nav>
        </header>
    );
}