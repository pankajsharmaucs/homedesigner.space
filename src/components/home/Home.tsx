import { SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
// import Card from '../card/Card';
import { Swiper as SwiperClass } from 'swiper'; // Import the class itself
import { Swiper } from 'swiper/react'; // Import Swiper for usage in the component
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const slider = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row p-0">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.2} // Show 80% of the current slide and part of the next one
            centeredSlides={true} // Keep the current slide in the center
            loop={true} // Enable looping
            autoplay={{
              delay: 3000, // Auto slide every 3 seconds
              disableOnInteraction: false, // Keep autoplay running even after user interaction
            }}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="mySwiper2"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update activeIndex when slide changes
          >


            {slider.map((image, index) => (
              <SwiperSlide key={index} >
                <img
                  src={`/images/slider1/${image}`}
                  style={{ maxHeight: '500px', width: '100%' }}
                  alt={`Thumbnail ${index + 1}`}
                />
              </SwiperSlide>
            ))}

          </Swiper>

          <Swiper
            onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
            spaceBetween={1}
            freeMode={true}
            watchSlidesProgress={true}
            centeredSlides={true} // Keeps the active thumbnail in the center
            slideToClickedSlide={true} // Moves clicked thumbnail to center
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper m-2"
            breakpoints={{
              0: { slidesPerView: 3 }, // Show 3 slides for small screens
              768: { slidesPerView: 4 }, // Show 4 slides for medium screens
              992: { slidesPerView: 8 }, // Show 8 slides for large screens
            }}
          >
            {slider.map((image, index) => (
              <SwiperSlide key={index} className={index === activeIndex ? 'mySwiperactive' : ''}>
                <img
                  src={`/images/slider1/${image}`}
                  style={{ maxHeight: '70px' }}
                  alt={`Thumbnail ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination element */}
        </div>
      </div>

      {/* about section start */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h1 className="about_text">About Us</h1>
              <h5 className=" text-justify" ><strong>Home Designer</strong> is a company built on a legacy of passion, craftsmanship, and innovation. Founded by
                <strong>Shri Rishi Raj Sharma</strong>, we have over three decades of experience in the furniture and home décor industry.
                Shri Sharma has dedicated his life to creating exquisite, high-quality wooden and acrylic pieces that reflect timeless elegance.
                His vision for combining artistry with functionality has been the driving force behind the company’s
                success, ensuring every product is crafted with precision, creativity, and integrity. Under his leadership,
                <strong>Home Designer</strong> continues to inspire the team to push boundaries and uphold the values
                of excellence and trust in everything we do.</h5>
              <div className="row justify-content-md-start justify-content-center">
                <div className="read_bt1">
                  <Link to="/about">Know More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-md-start text-center">
              <div className="image_1">
                {/* <img src="/images/home/about.png" /> */}
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* about section end */}


      {/* who section start */}
      <div className="who_section layout_padding">
        <div className="container">
          <h1 className="who_taital">who we are ?</h1>
          <h4 className="designer_text">DESIGNERS &amp; INNOVATORS</h4>
          <p className="text-white">
            We are a team of passionate designers and innovators with over 30 years of experience in the
            furniture and home décor industry. Specializing in high-quality wooden and acrylic furniture,
            including sofas, beds, and intricately carved wooden items, we are committed to delivering
            products that combine both style and durability. With a focus on creativity and craftsmanship,
            we take pride in offering beautifully designed pieces that enhance any living space. Our
            dedication to quality, honesty, and timely delivery has earned us a reputation as a
            trusted name in the industry, ensuring that every product we create is not only
            aesthetically pleasing but also crafted to last.
          </p>
        </div>
        <div className="get_bt_main">
          <div className="">
            <Link to="/contact" className="btn btn-outline-light">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
      {/* who section end */}



      {/* projects section start */}
      <div className="projects_section layout_padding">
        <div className="container">
          <h1 className="our_text">Our projects</h1>
          <p className="ipsum_text">
            Discover Our Expertise in Home Decor and Furniture Sofas
          </p>
          <div className="container">
            <div className="slider1">
              <Swiper
                spaceBetween={10}
                slidesPerView={1.2} // Show 80% of the current slide and part of the next one
                centeredSlides={true} // Keep the current slide in the center
                loop={true} // Enable looping
                autoplay={{
                  delay: 3000, // Auto slide every 3 seconds
                  disableOnInteraction: false, // Keep autoplay running even after user interaction
                }}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src="/images/slider1/image1.jpg" alt="Quote Icon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/slider1/image2.jpg" alt="Quote Icon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/slider1/image3.jpg" alt="Quote Icon" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/slider1/image4.jpg" alt="Quote Icon" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/slider1/image5.jpg" alt="Quote Icon" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/slider1/image6.jpg" alt="Quote Icon" />
                </SwiperSlide>
              </Swiper>

              {/* Pagination element */}
              <div className="swiper-pagination"></div>
            </div>

            <div className="row  my-3 justify-content-center">
              <div className="read_bt1">
                <Link to="/projects">All Projects</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* projects section end */}

      {/* client section start */}
      <div className="clients_section layout_padding">
        <h1 className="our_text">Our Clients</h1>
        <p className="ipsum_text">
          Success Stories from Our Valued Clients
        </p>
        <div className="container">
          <div className="slider1">
            <Swiper
              loop={true}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              breakpoints={{
                // When the screen is 0px or larger (for small devices)
                0: {
                  slidesPerView: 1, // Show 1 slide
                  coverflowEffect: {
                    rotate: 30,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: false,
                  },
                },
                // When the screen is 768px or larger (for medium devices)
                768: {
                  slidesPerView: 2, // Show 2 slides
                  coverflowEffect: {
                    rotate: 40,
                    stretch: 0,
                    depth: 70,
                    modifier: 1,
                    slideShadows: true,
                  },
                },
                // When the screen is 992px or larger (for large devices)
                992: {
                  slidesPerView: 3, // Show 3 slides
                  coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  },
                },
              }}
            >
              <SwiperSlide>
                <img src="/images/slider1/image1.jpg" alt="Quote Icon" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slider1/image2.jpg" alt="Quote Icon" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slider1/image3.jpg" alt="Quote Icon" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/images/slider1/image4.jpg" alt="Quote Icon" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/images/slider1/image5.jpg" alt="Quote Icon" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/images/slider1/image6.jpg" alt="Quote Icon" />
              </SwiperSlide>
            </Swiper>

            {/* Pagination element */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
      {/* client section end */}

      {/* contact section start */}
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="our_text">CONTACT US</h1>
              <div className="mail_sectin">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Name"
                />
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Name"
                />
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Phone Number"
                  name="Name"
                />
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows={5}
                  id="comment"
                  name="Massage"
                  defaultValue={""}
                />
                <div className="send_bt">
                  <a href="#">SEND</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_main">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width={600}
                    height={500}
                    style={{ border: 0, width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact section end */}
    </>
  )
}

export default Home