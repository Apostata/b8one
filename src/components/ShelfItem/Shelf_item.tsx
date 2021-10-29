import Product from "../../models/product";
import Styles from "./Shelf_item.module.css";
import OutlineHeart from "../../icons/outline-heart";
import FilledHeart from "../../icons/filled-heart";
import BuyButton from "../BuyButton/BuyButton";

interface IShelfItem {
  toggleFavourite: (id: string) => void;
  product: Product;
}

function ShelfItem({
  toggleFavourite,
  product: { id, name, price, with_discont, installments, isFavourite, image },
}: IShelfItem) {
  return (
    <article className={Styles.shelf_item}>
      <figure className={Styles.shelf_img}>
        <span
          className={[
            Styles.shelf_heart_container,
            isFavourite ? Styles.ativo : "",
          ].join(" ")}
          onClick={() => toggleFavourite(id)}
        >
          {isFavourite ? <FilledHeart /> : <OutlineHeart />}
        </span>
        <img src={image} alt="" role="figure" />
      </figure>
      <div className={Styles.shelf_data}>
        <h3 className={Styles.shelf_desc}>{name}</h3>
        <div className="">
          <p className={Styles.shelf_from_price}>
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className={Styles.shelf_to_price}>
            {with_discont.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className={Styles.installments}>
            em até {installments}x de{" "}
            {(with_discont / installments).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}{" "}
            sem juros
          </p>
        </div>
      </div>
      <BuyButton
        isFavourite={isFavourite}
        id={id}
        toggleFavourite={toggleFavourite}
      />
    </article>
  );
}

export default ShelfItem;
