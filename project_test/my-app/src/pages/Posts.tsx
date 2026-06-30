import { useEffect, useState } from "react";
import { getPosts, type Post } from "../services/postService";
import { Link } from "react-router";
import Spinner from 'react-bootstrap/Spinner';

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getPosts()
            .then((data) => {
                setPosts(data.slice(0, 9));
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="container my-5"><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner></div>;
    if (error) return <p>{error}</p>;

    return (
        <section className="comment_section">
            <div className="container my-5">
                <h2 className="mb-4">Posts</h2>
                <div className="row g-4">
                    {posts.map((post, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={post.id}>
                            <div className="comment_section__card h-100">
                                <div className="comment_section__card_body">
                                    <div className="comment_section__card_body__title">{index + 1}. {post.title}</div>
                                    <div className="comment_section__card_body__desc">{post.body}</div>

                                    <Link to={`/posts/${post.id}`} className="button-type--1 small">
                                        Detail
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}