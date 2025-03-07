import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { createProject } from "../../utils/api";

const AddProjects = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [image3, setImage3] = useState<File | null>(null);
  const [image4, setImage4] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  // const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("youtubeLink", youtubeLink);
    if (image1) formData.append("image1", image1);
    if (image2) formData.append("image2", image2);
    if (image3) formData.append("image3", image3);
    if (image4) formData.append("image4", image4);
    if (video) formData.append("video", video);

    try {
      await createProject(formData);
      alert("Project added successfully!");
      // navigate("/admin");
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project");
    }
  };

  return (
    <div className="container mt-4 padding_bootom" style={{ paddingBottom:"30%" }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Add New Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Project Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="p-2 w-100 border border-dark"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label fw-bold">
                  Description
                </label>
                <textarea
                  id="description"
                  className="p-2 w-100 border border-dark"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="youtubeLink" className="form-label fw-bold">
                  YouTube Link
                </label>
                <input
                  type="text"
                  id="youtubeLink"
                  className="p-2 w-100 border border-dark"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Upload Images</label>
                <input
                  type="file"
                  className="p-2 w-100 border border-dark mb-2"
                  onChange={(e) => setImage1(e.target.files ? e.target.files[0] : null)}
                />
                <input
                  type="file"
                  className="p-2 w-100 border border-dark mb-2"
                  onChange={(e) => setImage2(e.target.files ? e.target.files[0] : null)}
                />
                <input
                  type="file"
                  className="p-2 w-100 border border-dark mb-2"
                  onChange={(e) => setImage3(e.target.files ? e.target.files[0] : null)}
                />
                <input
                  type="file"
                  className="p-2 w-100 border border-dark"
                  onChange={(e) => setImage4(e.target.files ? e.target.files[0] : null)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="video" className="form-label fw-bold">
                  Upload Video
                </label>
                <input
                  type="file"
                  id="video"
                  className="p-2 w-100 border border-dark"
                  onChange={(e) => setVideo(e.target.files ? e.target.files[0] : null)}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Add Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjects;
