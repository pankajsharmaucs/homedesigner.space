// src/components/blog/BlogList.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../../redux/slices/blogSlice';
import { fetchBlogs } from '../../utils/api';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state: any) => state.blogs.blogs);

    const getBlogs = async () => {
        try {
            const data = await fetchBlogs();
            dispatch(setBlogs(data));
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };
    useEffect(() => {

        getBlogs();
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center py-md-3 p-2"><h1>Latest  Projects & Portfolio</h1></div>
            </div>
            <div className="row">
                {blogs.map((blog: any) => (
                    <div key={blog._id} className="col-md-4 my-2">
                        <ProjectCard blog={blog} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
