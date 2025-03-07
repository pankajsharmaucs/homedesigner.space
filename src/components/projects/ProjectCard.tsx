// src/components/blog/BlogCard.tsx
import { Link } from 'react-router-dom';
import { BASE_API_URL } from '../../utils/constants';

interface BlogCardProps {
  project: {
    _id: number; title: string, description: string;
    youtubeLink: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    video: string;
  };
}
const ProjectCard = ({ project }: BlogCardProps) => {
  return (
    <div className="card border-0 shadow rounded my-2">
      <img src={`${BASE_API_URL}${project.image1}`} className="card-img-top  " alt={project.title} />
      <div className="card-body">
        <h1 className="h2  font-bold">{project.title}</h1>
        <h5 className="">{project.description}</h5>
        <Link to={`/project/${project._id}`} className="btn btn-dark w-100 py-3">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;