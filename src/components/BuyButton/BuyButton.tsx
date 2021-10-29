import Styles from "./BuyButton.module.css";
import Check from "../../icons/check";

interface IBuyButton {
  isFavourite: boolean;
  id: string;
  toggleFavourite: (id: string) => void;
}

export default function BuyButton({
  isFavourite = false,
  id,
  toggleFavourite,
}: IBuyButton) {
  return (
    <button
      className={[
        Styles.favourite_buttom,
        isFavourite ? Styles.ativo : "",
      ].join(" ")}
      style={{ color: isFavourite ? "black" : "white" }}
      onClick={() => toggleFavourite(id)}
    >
      {isFavourite ? (
        <>
          <Check />
          <span style={{ paddingLeft: "15px" }}>{"Adicionado"}</span>
        </>
      ) : (
        "Adicionar"
      )}
    </button>
  );
}
