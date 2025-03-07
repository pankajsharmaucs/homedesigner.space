// src/components/blog/BlogList.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../../redux/slices/blogSlice';
import { fetchProjects } from '../../utils/api';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const dispatch = useDispatch();
    const Projects = useSelector((state: any) => state.blogs.blogs);

    const getBlogs = async () => {
        try {
            const data = await fetchProjects();
            dispatch(setBlogs(data));
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };
    useEffect(() => {

        getBlogs();
    }, [dispatch]);

    return (
        <div className="container p-4" style={{ paddingBottom: '200px' }}>
            <div className="row shadow p-2 rounded ">
                <div className="row  ">
                    <div className="col-12 text-center py-md-5 p-2">
                        <h1 className='fw-bold'>Latest  Projects & Portfolio</h1>
                    </div>
                </div>
                <div className="row pb-5">
                    {Projects.map((project: any) => (
                        <div key={project._id} className="col-md-4 my-2">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
