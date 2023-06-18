import { useState } from "react"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt"

const useLikeDislikeToggle = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setIsDisliked(false)
  }

  const handleDislike = () => {
    setIsLiked(false)
    setIsDisliked(!isDisliked)
  }

  const LikeIcon = () => {
    if (isLiked) {
      return <ThumbUpIcon onClick={handleLike} />
    } else {
      return <ThumbUpOffAltIcon onClick={handleLike} />
    }
  }

  const DislikeIcon = () => {
    if (isDisliked) {
      return <ThumbDownIcon onClick={handleDislike} />
    } else {
      return <ThumbDownOffAltIcon onClick={handleDislike} />
    }
  }

  return { LikeIcon, DislikeIcon }
}

export default useLikeDislikeToggle