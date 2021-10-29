import { useProducts } from "../hooks/useProducts";
import ShelfItem from "./ShelfItem/Shelf_item";
import Styles from "./Shelf.module.css";

function Shelf() {
  const { products, toggleFavorite } = useProducts();

  return (
    <section className={Styles.shelf}>
      {products.map((product) => (
        <ShelfItem
          key={product.id}
          toggleFavourite={toggleFavorite}
          product={product}
        />
      ))}
    </section>
  );
}

export default Shelf;
