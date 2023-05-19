import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // const { id, productName, description, productPrice, category, expireDate } =
  //   router.query;

  return (
    <div>
      <h1>Halaman Produk: {id}</h1>
      {/* <p>Product Name: {productName}</p>
      <p>Description: {description}</p>
      <p>productPrice: {productPrice}</p>
      <p>category: {category}</p>
      <p>expireDate: {expireDate}</p> */}
      {/* Tampilkan informasi produk lainnya */}
    </div>
  );
};

export default ProductPage;
