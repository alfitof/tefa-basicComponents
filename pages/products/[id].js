import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Halaman Produk: {id}</h1>
      {/* Tampilkan informasi produk lainnya */}
    </div>
  );
};

export default ProductPage;
