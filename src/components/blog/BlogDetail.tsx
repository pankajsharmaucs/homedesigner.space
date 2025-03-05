import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogs } from '../../utils/api';

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<any>(null);

    useEffect(() => {
        // console.log(id);
        
        const getBlog = async () => {
            try {
                const blogs = await fetchBlogs();
                // Use ObjectId to match the ID properly
                const foundBlog = blogs.find((b: any) => b._id === id);
                setBlog(foundBlog);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        getBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogDetail;
