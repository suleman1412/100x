import { useState } from "react"
import StarRatings from "./components/StarRatings"


function App() {
  const [currentRating, setCurrentRating] = useState(0)
  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating)
    console.log("Rating modified" + newRating)
  }
  return (
    <>
      <h1>Rating Component</h1>
      <StarRatings n={5} onRatingChange={handleRatingChange}/>
      <p>Current Rating: {currentRating}</p>
    </>
  )
}

export default App
