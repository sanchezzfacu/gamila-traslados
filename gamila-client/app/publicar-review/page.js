"use client";

import Icon from "@/components/Icons";
import { renderStarColor } from "@/utils/renderStarColor";
import { useState } from "react";

function Page() {
  const [reviewFields, setReviewFields] = useState({
    name: "",
    mail: "",
    puntuation: 0,
    review: "",
  });

  const handleChanges = (e) => {
    setReviewFields({
      ...reviewFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="review-form-container">
      <h3>
        Muchas gracias por haber contratado nuestro servicio. Esperamos que
        hayan tenido una experiencia maravillosa y ojalá volver a tenerlos de
        clientes
      </h3>

      <form>
        <label htmlFor="name">
          Nombre completo
          <input
            onChange={(e) => handleChanges(e)}
            type="text"
            id="name"
            name="name"
          />
        </label>

        <label htmlFor="mail">
          Email
          <input
            onChange={(e) => handleChanges(e)}
            type="mail"
            id="mail"
            name="mail"
          />
        </label>

        <label className="stars-label">
          <span>Puntúa el servicio</span>

          <div className="stars-container">
            <div
            className="star"
              onClick={() =>
                setReviewFields({ ...reviewFields, puntuation: 1 })
              }
            >
              <Icon
                name="star"
                fill={renderStarColor(reviewFields.puntuation, 1)}
                viewBox="0 0 256 256"
              />
            </div>

            <div
            className="star"
              onClick={() =>
                setReviewFields({ ...reviewFields, puntuation: 2 })
              }
            >
              <Icon
                name="star"
                fill={renderStarColor(reviewFields.puntuation, 2)}
                viewBox="0 0 256 256"
              />
            </div>

            <div
            className="star"
              onClick={() =>
                setReviewFields({ ...reviewFields, puntuation: 3 })
              }
            >
              <Icon
                name="star"
                fill={renderStarColor(reviewFields.puntuation, 3)}
                viewBox="0 0 256 256"
              />
            </div>

            <div
            className="star"
              onClick={() =>
                setReviewFields({ ...reviewFields, puntuation: 4 })
              }
            >
              <Icon
                name="star"
                fill={renderStarColor(reviewFields.puntuation, 4)}
                viewBox="0 0 256 256"
              />
            </div>

            <div
            className="star"
              onClick={() =>
                setReviewFields({ ...reviewFields, puntuation: 5 })
              }
            >
              <Icon
                name="star"
                fill={renderStarColor(reviewFields.puntuation, 5)}
                viewBox="0 0 256 256"
              />
            </div>
          </div>
        </label>

        <label htmlFor="review">
          Escribe una reseña
          <textarea
            onChange={(e) => handleChanges(e)}
            id="review"
            name="review"
          />
        </label>
      </form>
    </div>
  );
}

export default Page;
