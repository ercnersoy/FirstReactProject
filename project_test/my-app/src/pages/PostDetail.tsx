import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPosts, getPostById, type Post } from "../services/postService";
import { getPostComments, type Comment } from "../services/postService";

import { Link } from "react-router";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PostDetail() {
    const { id } = useParams()
    const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        if (!id) return;

        getPostComments(id)
            .then((data) => {
                setComments(data);
            })
            .catch((err) => {
                setError(err.message);
            })
    }, [id]);

    useEffect(() => {
        if (!id) return;

        getPosts()
            .then((data) => {
                const randomRelatedPosts = data
                    .filter((post) => post.id !== Number(id))
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 9);

                setRelatedPosts(randomRelatedPosts);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [id]);

    useEffect(() => {
        if (!id) return;

        getPostById(id)
            .then((data) => setPost(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);



    if (loading) return <div className="container my-5"><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner></div>;
    if (error) return <div className="container my-5"><p>{error}</p></div>;
    if (!post) return <div className="container my-5"><p>Post bulunamadı.</p></div>;


    return (
        <>
            <div className="container my-5">
                <h2 className="mb-4 text-capitalize">{post.title}</h2>
                <p>{post.body}</p>

                <h2 className="my-4">Comments</h2>

                {comments.map((post) => (
                    <div className="comment_card" key={post.id}>
                        <div className="testimonial_card__top">
                            <div>
                                <p>{post.email}</p>
                                <h4>{post.name}</h4>
                            </div>
                        </div>
                        <p className="testimonial_card__text">
                            “{post.body}”
                        </p>
                    </div>
                ))}
            </div>




            <section className="customer_section" id="testimonial">

                <Container>
                    <div className="mb-4 text-start">
                        <h2>Realted Posts</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="testimonial_slider"

                    >
                        {relatedPosts.map((post) => (
                            <SwiperSlide key={post.title}>
                                <div className="testimonial_card">
                                    <div className="testimonial_card__top">
                                        <div>
                                            <h4>{post.title}</h4>
                                        </div>


                                    </div>

                                    <p className="testimonial_card__text mb-4">
                                        “{post.body}”
                                    </p>
                                    <Link to={`/posts/${post.id}`} className="button-type--1 small">
                                        Detaya Git
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>

            </section>





        </>

    );
}