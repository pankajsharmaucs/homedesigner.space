interface ProductProps {
    product: {
        id: number;
        name: string;
        price: string;
        image: string;
        detail: string;
    };
}

function ProductCard({ product }: ProductProps) {
    return (
        <div className="productCard shadow p-2">
            <div className="cont">
                <div className="product-card">
                    <div className="product-card__image">
                        <img
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    <div className="product-card__info my-4">
                        <h2 className="product-card__title mx-3 mt-3">{product.name}</h2>
                        <p className="product-card__description">{product.name}</p>
                        <div className=" mx-3">
                            <h6 className="product-card__price">₹{product.price} </h6>
                            <h6 className="">No Extra Charges</h6>
                            <button className="btn btn-outline-primary w-100">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard