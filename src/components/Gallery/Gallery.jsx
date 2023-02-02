import "./Gallery.scss";

export default function Gallery({ list }) {
  return (
    <div className="c-gallery">
      {list.map((item, index) => (
        <figure
          key={index}
          className={
            "c-gallery__item" +
            (item.characterDirection === "Left" ? " c-gallery__item--left" : "")
          }
        >
          <div>
            <div className="c-gallery__text">
              <figcaption>{item.character}</figcaption>
              <p>{item.quote}</p>
            </div>
          </div>
          <img className="c-gallery__img" src={item.image} alt="" />
        </figure>
      ))}
    </div>
  );
}
