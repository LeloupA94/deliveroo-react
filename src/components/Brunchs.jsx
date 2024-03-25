const Brunchs = ({ data }) => {
  return (
    <>
      {data.categories.map((title) => {
        return <h2 key={title.name}>{title.name}</h2>;
      })}
    </>
  );
};
export default Brunchs;
