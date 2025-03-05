// src/components/admin/AddBlog.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../../utils/api';

const AddProjects = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      // Call the createBlog function from the API file
      await createBlog(formData); // Pass the FormData object
      alert('Blog post added successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error adding blog post:', error);
      alert('Failed to add blog post');
    }
  };

  return (
    <div className="container">
      <h2>Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            className="form-control"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image (Optional)
          </label>
          <input
            type="file"
            id="image"
            className="form-control"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Blog Post
        </button>
      </form>
    </div>
  );
};

export default AddProjects;
