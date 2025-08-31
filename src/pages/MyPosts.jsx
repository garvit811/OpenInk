import React, { useEffect } from 'react';
import { Container, PostCard } from '../components/index';
import service from "../appwrite/config";
import { useSelector, useDispatch } from 'react-redux';
import { setPosts, setLoading, setError } from '../store/postSlice';
import { Query, ID } from 'appwrite';

function MyPosts() {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.post);
    const userdata = useSelector((state) => state.auth.userData);
    const UserId = userdata ? userdata.$id : null;
    useEffect(() => {
        const fetchPosts = async () => {
            dispatch(setLoading(true));
            try {
                const res = await service.getPosts([Query.equal('userId', UserId)]);
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
    }, [dispatch]);

    if (loading) return <p className=" min-h-[60vh] text-2xl flex items-center justify-center mt-4 text-center">Loading...</p>;
    if (error) return <p className=" min-h-[60vh] text-center text-red-500">{error}</p>;

    return (
        <div className="w-full min-h-[60vh] mt-4 py-8">
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

export default MyPosts;
