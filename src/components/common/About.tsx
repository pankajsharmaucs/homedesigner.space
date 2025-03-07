import './about.css';
import Team from './Team';

function About() {
  return (
    <div style={{marginBottom:'20%',paddingTop:"30px"}}>
      <section className="about-section">
        <div className="container">
          <div className="row clearfix">
            {/*Content Column*/}
            <div className="content-column col-md-6 col-sm-12 col-xs-12">
              <div className="">
                <div className="sec-title">
                  <div className="title">About Us</div>
                  <h2>
                    We Are The Leader In <br /> The Interiores
                  </h2>
                </div>
                <div className="text">
                  <h5 className="text-justify">
                    <strong>Home Designer</strong> is a company built on a legacy of passion, craftsmanship, and innovation. Founded by
                    <strong> Shri Rishi Raj Sharma</strong>, we have over three decades of experience in the furniture and home décor industry.
                    Shri Sharma has dedicated his life to creating exquisite, high-quality wooden and acrylic pieces that reflect timeless elegance.
                    His vision for combining artistry with functionality has been the driving force behind the company’s
                    success, ensuring every product is crafted with precision, creativity, and integrity. Under his leadership,
                    <strong> Home Designer</strong> continues to inspire the team to push boundaries and uphold the values
                    of excellence and trust in everything we do.
                  </h5>
                </div>

              </div>
            </div>
            {/*Image Column*/}
            <div className="image-column col-md-6 col-sm-12 col-xs-12">
              <div
                className="inner-column "
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img src="https://i.ibb.co/vQbkKj7/about.jpg" alt="" />
                  <div className="overlay-box">
                    <div className="year-box">
                      <span className="number">30</span>Years <br /> Experience <br />{" "}
                      Working
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietor Section */}
      <section className="proprietor-section pb-5">
        <div className="container">
            <div className='col-12 text-center  '><h1 style={{ fontSize:"34px"}}  >Our Team</h1></div>
          <div className="row justify-content-center">
              <Team detail={{name:"Mr. Rishi Raj Sharma", designation:"Founder & Proprietor", image:"/images/team/image1.png"}} />
              <Team detail={{name:"Mr. Pankaj Sharma", designation:"Marketing and Sales Head", image:"/images/team/image2.png"}} />
              {/* <Team detail={{name:"Goolu Sharma", designation:"Sales Head", image:"/images/team/image1.jpg"}} /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
