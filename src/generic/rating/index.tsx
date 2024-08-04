import { FC, memo, useEffect, useState } from "react"; // Ensure React is imported
import "./style.css";

const starStyle = "mr-[5px]";
const editableStyle = "cursor-pointer";
const ratingStyle = "relative";
const errorMessageStyle = "absolute -bottom-[20px] left-0 text-[#fc836d]";

interface RatingPropsI {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
  error?: {
    message: string;
  };
}

const Rating: FC<RatingPropsI> = memo(
  ({ rating, isEditable = false, setRating, error, ...props }) => {
    const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));

    useEffect(() => {
      renderRating(rating);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const renderRating = (currentRating: number) => {
      const updateArray = ratingArray.map((_, index) => (
        <span
          key={index}
          className={`inline-block ${starStyle} ${
            index < currentRating && "filled"
          } ${isEditable && editableStyle}`}
          onMouseEnter={() => changeRatingDisplay(index + 1)}
          onMouseLeave={() => changeRatingDisplay(rating)}
          onClick={() => clickRatingHandler(index + 1)}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='#E2E2E2'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M19.9477 7.55686C19.816 7.13427 19.4568 6.83508 19.0335 6.79511L13.2601 6.24816L10.9784 0.673859C10.81 0.264321 10.4267 0 10 0C9.57337 0 9.18991 0.264321 9.02252 0.673859L6.74084 6.24816L0.966519 6.79511C0.543233 6.83587 0.184799 7.13507 0.0523506 7.55686C-0.0793348 7.97946 0.0422796 8.44298 0.362414 8.73596L4.72665 12.7293L3.43985 18.6434C3.34571 19.0782 3.50745 19.5279 3.85322 19.7887C4.03908 19.9296 4.25743 20 4.47655 20C4.66485 20 4.8533 19.9478 5.0216 19.8427L10 16.7364L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7293L19.6376 8.73596C19.9576 8.44298 20.0794 7.98041 19.9477 7.55686Z' />
          </svg>
        </span>
      ));

      setRatingArray(updateArray);
    };

    const changeRatingDisplay = (index: number) => {
      if (!isEditable) {
        return;
      }

      renderRating(index);
    };

    const clickRatingHandler = (index: number) => {
      if (!isEditable || !setRating) {
        return;
      }

      setRating(index);
    };

    return (
      <div className={`${ratingStyle} ${error && error}`} {...props}>
        {ratingArray.map((rating, index) => (
          <span key={index}>{rating} </span>
        ))}
        {error && <span className={errorMessageStyle}>{error.message}</span>}
      </div>
    );
  }
);

export default Rating;
