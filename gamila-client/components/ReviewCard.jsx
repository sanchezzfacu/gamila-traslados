import Avatar from "./Avatar";
import Icon from "./Icons";
import { renderStarColor } from "@/utils/renderStarColor";

function ReviewCard({ name, puntuation, description, date }) {
  return (
    <div className="review-card-container">
      <Avatar className="avatar-xl" text={name && name.slice(0, 1)} />

      <span className="review-name">{name}</span>

      <span className="review-date">{date}</span>

      <div className="review-stars">
        <Icon
          name="star"
          fill={renderStarColor(puntuation, 1)}
          viewBox="0 0 256 256"
        />
        <Icon
          name="star"
          fill={renderStarColor(puntuation, 2)}
          viewBox="0 0 256 256"
        />
        <Icon
          name="star"
          fill={renderStarColor(puntuation, 3)}
          viewBox="0 0 256 256"
        />
        <Icon
          name="star"
          fill={renderStarColor(puntuation, 4)}
          viewBox="0 0 256 256"
        />
        <Icon
          name="star"
          fill={renderStarColor(puntuation, 5)}
          viewBox="0 0 256 256"
        />
      </div>

      <p className="review-text">{description}</p>
    </div>
  );
}

//  #fdb61d

export default ReviewCard;
