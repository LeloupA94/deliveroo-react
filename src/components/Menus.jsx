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
            {category.meals.map((meal, mealIndex) => (
              <div className="plats" key={mealIndex}>
                <div className="platsCard">
                  <h3>{meal.title}</h3>
                  <p>{meal.description}</p>
                  {meal.picture && (
                    <div className="imageitem">
                      <img key={meal.picture} src={meal.picture} />
                    </div>
                  )}
                  <div className="infosplats">
                    <span className="prixplat">{meal.price} €</span>
                    <span className={meal.popular ? "pop" : "hidden"}>
                      ⭐ Populaire
                    </span>
                  </div>
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
