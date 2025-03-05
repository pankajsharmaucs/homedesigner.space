// src/components/blog/BlogCard.tsx
import { Link } from 'react-router-dom';

interface BlogCardProps {
  blog: { _id: number; title	:string, content: string; };
}
const ProjectCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="card  rounded-0">
      <img src="/images/slider1/image1.jpg" className="card-img-top  " alt={blog.title} />
      <div className="card-body">
        <h1 className="h2  font-bold">{blog.title}</h1>
        <h5 className="">{blog.content}</h5>
        <Link to={`/project/${blog._id}`} className="btn btn-dark w-100 py-3">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;