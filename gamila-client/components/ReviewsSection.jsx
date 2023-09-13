"use client";

import Icon from "./Icons";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

function ReviewsSection() {
  const [puntuationList, setPuntuationList] = useState(0);
  const [reviews, setReviews] = useState([
    {
      id: "1",
      name: "Fernando Sallent",
      puntuation: 5,
      description:
        "Increible servicio excelente calidad humana, buena predisposicion y buena onda",
      date: "24/05/2023",
    },
    {
      id: "2",
      name: "Emilia Luque",
      puntuation: 4,
      description:
        "Gran calidez humana y excelentes personas, mis recomendaciones 10/10",
      date: "06/07/2023",
    },
    {
      id: "3",
      name: "Willian Johnson",
      puntuation: 5,
      description:
        "Buena predisposición de los choferes desde un primer momento, sin dudas los super recomendamos",
      date: "27/08/2023",
    },
  ]);

  useEffect(() => {
    reviews.length &&
      reviews.map((review) =>
        setPuntuationList((prev) => (prev += review.puntuation))
      );
  }, [reviews]);

  return (
    <div className="reviews-section-container">
      <h2>Opiniones de nuestros clientes</h2>

      {puntuationList !== 0 && reviews.length > 0 && (
        <div className="average-info">
          <div className="average-stars">
            <Icon
              name="star"
              fill={
                puntuationList !== 0 &&
                Math.ceil(puntuationList / reviews.length) >= 1 &&
                "#fdb61d"
              }
              viewBox="0 0 256 256"
            />
            <Icon
              name="star"
              fill={
                puntuationList !== 0 &&
                Math.ceil(puntuationList / reviews.length) >= 2
                  ? "#fdb61d"
                  : "#b0b0b0"
              }
              viewBox="0 0 256 256"
            />
            <Icon
              name="star"
              fill={
                puntuationList !== 0 &&
                Math.ceil(puntuationList / reviews.length) >= 3
                  ? "#fdb61d"
                  : "#b0b0b0"
              }
              viewBox="0 0 256 256"
            />
            <Icon
              name="star"
              fill={
                puntuationList !== 0 &&
                Math.ceil(puntuationList / reviews.length) >= 4
                  ? "#fdb61d"
                  : "#b0b0b0"
              }
              viewBox="0 0 256 256"
            />
            <Icon
              name="star"
              fill={
                puntuationList !== 0 &&
                Math.ceil(puntuationList / reviews.length) === 5
                  ? "#fdb61d"
                  : "#b0b0b0"
              }
              viewBox="0 0 256 256"
            />
          </div>

          <h3>{(puntuationList / reviews.length).toFixed(1)}</h3>
        </div>
      )}

      <div className="reviews">
        {reviews?.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            puntuation={review.puntuation}
            description={review.description}
            date={review.date}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewsSection;
