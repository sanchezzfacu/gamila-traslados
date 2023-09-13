import Avatar from "./Avatar";
import Icon from "./Icons";

function ReviewCard({ name, puntuation, description, date }) {
  return (
    <div className="review-card-container">
      <Avatar className="avatar-xl" text={name && name.slice(0, 1)} />

      <span className="review-name">{name}</span>

      <span className="review-date">{date}</span>

      <div className="review-stars">
        <Icon
          name="star"
          fill={puntuation >= 1 && "#fdb61d"}
          viewBox="0 0 256 256"
        />
        <Icon
          name="star"
          fill={puntuation >= 2 ? "#fdb61d" : "#b0b0b0"}
          viewBox="0 0 256 256"
        />
        <Icon
          name="star"
          fill={puntuation >= 3 ? "#fdb61d" : "#b0b0b0"}
          viewBox="0 0 256 256"
        />
        <Icon
          name="star"
          fill={puntuation >= 4 ? "#fdb61d" : "#b0b0b0"}
          viewBox="0 0 256 256"
        />
        <Icon
          name="star"
          fill={puntuation === 5 ? "#fdb61d" : "#b0b0b0"}
          viewBox="0 0 256 256"
        />
      </div>

      <p className="review-text">{description}</p>
    </div>
  );
}

//  #fdb61d

export default ReviewCard;
