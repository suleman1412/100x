import { useEffect, useState } from "react"
import './StarRating.css'

const StarRating = ({n = 5, onRatingChange}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    useEffect(() => {
        if(onRatingChange){
            onRatingChange(rating)
        }
    }, [rating, onRatingChange])

    return <div>
        {[...Array(n)].map((_, index) => {
            const starValue = index + 1;
            return (
                <span
                    key={starValue}
                    className={`star ${starValue <= (hover || rating) ? 'filled': 'unfilled'}`}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}

                >
                    ★
                </span>
            )
        })}
    </div>
}

export default StarRating