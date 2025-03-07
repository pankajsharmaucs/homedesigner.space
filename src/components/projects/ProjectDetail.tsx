import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProjects } from '../../utils/api';
import { BASE_API_URL } from '../../utils/constants';

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<any>(null);
    const [mainImage, setmainImage] = useState<any>(null);
    const [youtubeEmbed, setyoutubeEmbed] = useState<any>(null);

    const getYoutubeVideoId = (url: string) => {
        const urlObj = new URL(url);
        return urlObj.searchParams.get("v"); // Extract the 'v' parameter
    };


    useEffect(() => {
        const getProjects = async () => {
            try {
                const blogs = await fetchProjects();
                const foundProduct = blogs.find((b: any) => b._id === id);
                // console.log(foundProduct);
                setProduct(foundProduct);
                setmainImage(foundProduct.image1)
                setyoutubeEmbed(getYoutubeVideoId(foundProduct.youtubeLink));
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };


        getProjects();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid pt-4" style={{ paddingBottom: '30%' }}>
            <div className="col-12 text-danger mt-1">
                <h6><Link className="text-danger" to="/">Home</Link> / <Link className="text-danger" to="/projects">Projects</Link> / {product.title} </h6>
            </div>

            <div className="row">

                <div className="col-md-12 my-2">
                    <div className="row p-md-4 p-2">

                        {/* Image Section */}
                        {
                            mainImage != null ?
                                <div className="col-md-7 p-0 border border-dark-2" >
                                    <img src={`${BASE_API_URL}${mainImage}`} alt={product.title} className="img-fluid " />
                                </div>
                                : ""
                        }

                        <div className="col-md-5 my-2">
                            <div className="row">
                                {
                                    product.image1 ?
                                        <div className="col-md-6 col-3 border p-md-2 p-1 d-flex justify-center align-items-center  "
                                            onClick={() => setmainImage(product.image1)}>
                                            <img src={`${BASE_API_URL}${product.image1}`} alt={product.title} className="img-fluid cursor-pointer " />
                                        </div>
                                        : ""
                                }

                                {
                                    product.image2 ?
                                        <div className="col-md-6 col-3 border p-md-2 p-1 d-flex justify-center align-items-center  "
                                            onClick={() => setmainImage(product.image2)}>
                                            <img src={`${BASE_API_URL}${product.image2}`} alt={product.title} className="img-fluid cursor-pointer " />
                                        </div>
                                        : ""
                                }

                                {
                                    product.image3 ?
                                        <div className="col-md-6 col-3 border p-md-2 p-1 d-flex justify-center align-items-center  "
                                            onClick={() => setmainImage(product.image3)}>
                                            <img src={`${BASE_API_URL}${product.image3}`} alt={product.title} className="img-fluid cursor-pointer " />
                                        </div>
                                        : ""
                                }

                                {
                                    product.image4 ?
                                        <div className="col-md-6 col-3 border p-md-2 p-1 d-flex justify-center align-items-center  "
                                            onClick={() => setmainImage(product.image4)}>
                                            <img src={`${BASE_API_URL}${product.image4}`} alt={product.title} className="img-fluid cursor-pointer " />
                                        </div>
                                        : ""
                                }
                            </div>
                        </div>

                    </div>
                </div>

                {/* Product Details Section */}
                <div className="col-md-12">
                    <div className="row  p-md-4 p-2">
                        <h1 className="fw-bold">{product.title}</h1>
                        <h5 className="text-muted ">{product.description}</h5>

                        {
                            youtubeEmbed != null
                                ?
                                <div className="col-12 p-md-2 my-5 border">
                                    <h1>Project Video</h1>
                                    <div className="col-12  p-3">
                                        <iframe
                                            className='border-dark-3 border'
                                            width="100%"
                                            height="400"
                                            src={`https://www.youtube.com/embed/${youtubeEmbed}`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                                : ""
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetail;
