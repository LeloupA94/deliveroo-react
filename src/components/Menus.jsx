const Menus = ({ data }) => {
  const categorieVide = data.categories.filter(
    (category) => category.meals.length > 0
  );

  return (
    <>
      {categorieVide.map((category, index) => (
        <div className="categorie" key={index}>
          <h2>{category.name}</h2>
          <div className="platligne">
            {category.meals.map((meal, id) => (
              <div className="plats" key={id}>
                <div className="platsCard">
                  <h3>{meal.title}</h3>

                  <div className="infosplats">
                    <p>{meal.description}</p>
                    <span className="prixplat">{meal.price} €</span>
                    <span className={meal.popular ? "pop" : "hidden"}>
                      <i className="fa-solid fa-star"> Populaire</i>
                    </span>
                  </div>
                  {meal.picture && (
                    <div className="imageitem">
                      <img key={meal.picture} src={meal.picture} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
export default Menus;
