import Logo from "../assets/img/logo-teal.svg";
const Header = ({ data }) => {
  return (
    <header className="header">
      <div className="line">
        <div className="container">
          <div className="logo">
            <img alt="le logo" src={Logo} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="restoinfos">
          <div className="section-1">
            <div className="restoinfos-text">
              <h1>{data.restaurant.name}</h1>
              <p>
                Profitez de chaque plaisir de la vie quotidienne. Le Pain
                Quotidien propose des ingrédients simples et sains, du bon pain,
                des fruits et des légumes frais et de saison issus de
                l’agriculture biologique.
              </p>
            </div>
            <img
              alt="les photo"
              className="restoinfos-image"
              src={data.restaurant.picture}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
