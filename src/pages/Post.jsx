import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { setSinglePost, clearSinglePost, setLoading, setError } from "../store/postSlice";

export default function Post() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { singlePost: post, loading, error } = useSelector((state) => state.post);
    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            dispatch(setLoading(true));
            service.getPost(slug)
                .then((fetchedPost) => {
                    if (fetchedPost) {
                        dispatch(setSinglePost({ post: fetchedPost }));
                    } else {
                        navigate("/");
                    }
                })
                .catch((err) => {
                    dispatch(setError(err.message));
                })
                .finally(() => {
                    dispatch(setLoading(false));
                });

            return () => dispatch(clearSinglePost());
        } else {
            navigate("/");
        }
    }, [slug, navigate, dispatch]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                dispatch(clearSinglePost());
                navigate("/");
            }
        });
    };

    if (loading) {
        return <p className="min-h-[60vh] text-2xl flex items-center justify-center text-center mt-4">Loading post...</p>;
    }

    if (error) {
        return <p className="text-center min-h-[60vh] text-red-500 mt-10">{error}</p>;
    }

    return post ? (
        <div className="py-8 min-h-[60vh]">
            <Container>
                <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 mx-auto">
                    
                    {/* Image & Controls */}
                    <div className="w-full md:w-3/4 lg:w-2/3 flex justify-center mb-4 relative border rounded-xl p-2">
                        <img
                            src={service.getFilePreview(post.FeaturedImage)}
                            alt={post.Title}
                            className="rounded-xl w-full h-auto object-cover"
                        />
                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex flex-wrap gap-2">
                                <span
                                    className={`px-2 py-1 rounded-lg text-sm font-bold ${
                                        post.status === "active"
                                            ? "bg-green-500 text-white"
                                            : "bg-yellow-500 text-white"
                                    }`}
                                >
                                    {post.status === "active" ? "Active" : "Inactive"}
                                </span>
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <div className="w-full mb-6 px-4">
                        <h1 className="text-2xl md:text-3xl text-center font-serif font-bold break-words">
                            {post.Title}
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="browser-css w-full px-4 md:px-8">
                        {parse(post.Content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
