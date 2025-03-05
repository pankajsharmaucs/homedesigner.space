import ProductCard from "../card/ProductCard"

interface ProductType {
  id: number;
  name: string;
  price: string;
  image: string;
  detail: string;
}

function Products() {
  const productList: ProductType[] = [
    { id: 1, name: 'Acrylic Bed', price: "550000", image: "/images/slider1/image1.jpg", detail: "Whole Bed is made of pure acrylic and copper fitting" },
    { id: 2, name: 'Wooden Carving Sofa', price: "210000", image: "/images/slider1/image2.jpg", detail: "Wooden Carving Sofa" },
    { id: 3, name: 'Luxury Royal Chair', price: "75000", image: "/images/slider1/image3.jpg", detail: "Luxury Royal Chair" },
    { id: 4, name: 'Wooden Dining Table', price: "120000", image: "/images/slider1/image4.jpg", detail: "Wooden Dining Table" },
  ];
  return (
    <div className="conatiner-fluid p-0">
      <div className="conatiner">
      <div className='col-12 text-center '><h1 style={{ fontSize:"34px"}}  >Our Products</h1></div>

        <div className="row" style={{ overflowY: "scroll", marginTop: "3%", marginBottom: "20%" }}>

          {
            productList.length ?
              productList.map((product) => {
                return (
                  <div className="col-md-4">
                    <ProductCard product={product} key={product.id} />
                  </div>
                )
              }) : "null"
          }

        </div>
      </div>
    </div>
  )
}

export default Products