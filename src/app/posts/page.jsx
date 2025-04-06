import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data;
}

export const metadata = {
    title: "All Posts",
    description: "Loading JSON placeholder posts using Server Component",
};

export default async function Post() {
    const posts = await getPosts();
    return (
        <div>z
            <div className="grid grid-cols-4 gap-6">
                {posts.map(post =>
                    <div key={post.id} className="border mb-10 rounded-2xl p-10  space-y-3">
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                        <Link className="border rounded-2xl px-4 py-2" href={`/posts/${post.id}`}>Details</Link>
                    </div>)}
            </div>
        </div>
    )
}
