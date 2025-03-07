import { useEffect, useState } from 'react';
import { fetchProjects } from '../../utils/api';
import ProjectRow from './ProjectRow';

const ListProjects = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [visibleCount, setVisibleCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const getProjects = async () => {
        try {
            const data = await fetchProjects();
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setLoading(false);
        }
    };


    const deleteProject = (id: string) => {
        console.log(id);
    }


    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        if (!loading && visibleCount < projects.length) {
            const timer = setTimeout(() => {
                setVisibleCount((prev) => prev + 1);
            }, 300); // Adjust delay for smoother row loading
            return () => clearTimeout(timer);
        }
    }, [visibleCount, loading, projects.length]);

    return (
        <div className="container" style={{ paddingBottom: '30%' }}>
            <div className="row">
                <div className="col-12 text-center py-md-3 p-2">
                    <h1>All Projects</h1>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-12">
                    {loading ? (
                        <div className="text-center py-3">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Sno.</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Image1</th>
                                    <th scope="col">Image2</th>
                                    <th scope="col">Image3</th>
                                    <th scope="col">Image4</th>
                                    <th scope="col">Youtube Link</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.slice(0, visibleCount).map((project, index) => (
                                    <ProjectRow project={project} key={project._id} deleteProject={deleteProject} index={index + 1} />
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListProjects;
