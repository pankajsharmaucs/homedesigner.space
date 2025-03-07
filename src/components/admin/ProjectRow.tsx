import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { BASE_API_URL } from '../../utils/constants';

interface Project {
    _id: string;
    title: string;
    description: string;
    youtubeLink: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    video: string;
}

interface ProjectRowProps {
    project: Project;
    deleteProject: (id: string) => void;
    index: number;
}

const ProjectRow = ({ project, deleteProject, index }: ProjectRowProps) => {
    const [youtubeEmbed, setYoutubeEmbed] = useState<string | null>(null);

    const getYoutubeVideoId = (url: string): string | null => {
        try {
            const regex =
                /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const match = url.match(regex);
            return match ? match[1] : null;
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        if (project.youtubeLink) {
            setYoutubeEmbed(getYoutubeVideoId(project.youtubeLink));
        }
    }, [project.youtubeLink]);

    return (
        <motion.tr
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for smooth staggered effect
        >
            <th scope="row">{index}</th>
            <td>{project.title}</td>
            <td>{project.description}</td>
            <td><img src={`${BASE_API_URL}${project.image1}`} alt={project.title} width="50" /></td>
            <td><img src={`${BASE_API_URL}${project.image2}`} alt={project.title} width="50" /></td>
            <td><img src={`${BASE_API_URL}${project.image3}`} alt={project.title} width="50" /></td>
            <td><img src={`${BASE_API_URL}${project.image4}`} alt={project.title} width="50" /></td>
            <td>
                {youtubeEmbed ? (
                    <iframe
                        width="200"
                        height="150"
                        src={`https://www.youtube.com/embed/${youtubeEmbed}`}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <span>Invalid YouTube URL</span>
                )}
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteProject(project._id)}>
                    Delete
                </button>
            </td>
            <td>
                <button className="btn btn-warning btn-sm">Update</button>
            </td>
        </motion.tr>
    );
};

export default ProjectRow;
