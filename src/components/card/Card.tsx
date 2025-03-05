import './card.css'
function Card() {
    return (
        <article>
            <img src="/images/slider1/image1.jpg" alt="Sample photo" />
            <div className="col-12 p-3 text-dark text-center">
                <h3>Sofa</h3>
                <p>
                    Collaboratively administrate empowered markets via plug-and-play
                    networks.
                </p>
                <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="btn btn-primary btn-block"
                >
                    Here's why
                </a>
            </div>
        </article>
    )
}

export default Card