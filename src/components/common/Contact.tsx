import './contact.css'

function Contact() {
  return (
    <div>
      <>
        <section className="contact_us">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="contact_form_inner">
                        <div className="contact_field">
                          <h3>Contatc Us</h3>
                          <p>
                            Feel Free to contact us any time. We will get back to you
                            as soon as we can!.
                          </p>
                          <input
                            type="text"
                            className="form-control form-group"
                            placeholder="Name"
                          />
                          <input
                            type="text"
                            className="form-control form-group"
                            placeholder="Email"
                          />
                          <textarea
                            className="form-control form-group"
                            placeholder="Message"
                            defaultValue={""}
                          />
                          <button className="contact_form_submit">Send</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="right_conatct_social_icon d-flex align-items-end">
                        <div className="socil_item_inner d-flex">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_info_sec">
                    <h4 className='text-white'>Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-headset" />
                      <span className='text-white'>+91 8800637982 054294</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-envelope-open-text" />
                      <span className='text-white'>ask@homedesigner.space</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-map-marked-alt" />
                      <span className='text-white'>
                        Badarpur, New Delhi  110044 &amp; India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="map_inner text-center">
                  <h2>Find Us on Google Map</h2>
                  <p>
                    Visit Us: Explore Our Location on Google Maps
                  </p>
                  <div className="map_bind">
                    <iframe
                      // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5375628181064!2d77.30035737585092!3d28.493470125741005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce72750764457%3A0x1f2cb38f04a4dd7b!2sBadarpur%20Border!5e0!3m2!1sen!2sin!4v1741158818207!5m2!1sen!2sin"
                      width="100%"
                      height={450}
                      style={{ border: 0 }}
                      aria-hidden="false"
                      tabIndex={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

    </div>
  )
}

export default Contact