import { ButtonStyled } from "./favouriteButton.styles";

const FavouriteButton = ({ onClick, isFavourite }) => (
  <ButtonStyled
    onClick={(ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      onClick();
    }}
    isFavourite={isFavourite}
  >
    {isFavourite ? "Favourite" : "No favourite"}
  </ButtonStyled>
);

export default FavouriteButton;
