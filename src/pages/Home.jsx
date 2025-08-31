import React, { useEffect } from 'react';
import service from "../appwrite/config";
import { Container, PostCard } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts, setLoading, setError } from '../store/postSlice';
import { Query } from 'appwrite';

function Home() {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.post);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (authStatus) {
            const fetchPosts = async () => {
                dispatch(setLoading(true));
                try {
                    const res = await service.getPosts([Query.equal('status', 'active')]);
                    if (res) {
                        dispatch(setPosts({ posts: res.documents }));
                    }
                } catch (err) {
                    dispatch(setError(err.message));
                } finally {
                    dispatch(setLoading(false));
                }
            };
            fetchPosts();
        }
    }, [authStatus, dispatch]);

    if (!authStatus) {
        return (
            <div className="w-full min-h-[60vh] py-8 mt-4 text-center flex items-center justify-center">
                <Container>
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Login to read posts
                    </h1>
                </Container>
            </div>
        );
    }

    if (loading) return <p className=" min-h-[60vh] text-2xl flex items-center justify-center text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center min-h-[60vh] text-red-500">{error}</p>;

    if (posts.length === 0) {
        return (
            <div className="w-full min-h-[60vh] py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        No posts found
                    </h1>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full min-h-[60vh] mt-4 py-8 mx-auto">
            <Container>
                <div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
