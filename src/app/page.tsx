import ProductCard from "@/components/ProductCard";


const dummyProducts = [
  {
    id: "1",
    title: "Correa Soporte para perros",
    mrp: 35.000,
    salePrice: 23.450,
    percentOff: 33,
    thumbnail:
    "https://i.ibb.co/0JNRBND/bark-02-dogleash-support.jpg",
  },
  {
    id: "2",
    title: "Pecera/Bowl Vidrio",
    mrp: 50.000,
    salePrice: 37.500,
    percentOff: 25,
    thumbnail:
      "https://i.ibb.co/jT92dzf/bark-05-fishbowl.jpg",
  },
  {
    id: "3",
    title: "Double Set de Bowls para Perros",
    mrp: 35.000,
    salePrice: 23.450,
    percentOff: 33,
    thumbnail:
      "https://i.ibb.co/Fx9gHyf/bark-03-dogbowls.jpg"
  },
  {
    id: "4",
    title: "Cueva Cama para gatos",
    mrp: 50.000,
    salePrice: 40.000,
    percentOff: 20,
    thumbnail:
    "https://i.ibb.co/CKZpzst/bark-23-catbed2.jpg",
  },
  {
    id: "5",
    title: "Cama para Perros peluda",
    mrp: 40.000,
    salePrice: 32.000,
    percentOff: 20,
    thumbnail:
     "https://i.ibb.co/t4s6YHh/bark-16-dogbed1.jpg"
  },
  {
    id: "6",
    title: "Silla Auto para Gatos",
    mrp: 50.000,
    salePrice: 40.000,
    percentOff: 20,
    thumbnail:
    "https://i.ibb.co/DgKGFg5/bark-25-catseat.jpg",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-9 bg-blue-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dummyProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
