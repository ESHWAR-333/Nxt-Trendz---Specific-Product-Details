import {withRouter} from 'react-router-dom'
import './index.css'

const SimilarProductItem = props => {
  const {data} = props
  const {
    similarImageUrl,
    similarTitle,
    similarPrice,
    similarBrand,
    similarRating,
  } = data

  return (
    <li className="similar-product-container">
      <img
        className="similar-product-image"
        src={similarImageUrl}
        alt="similar product"
      />
      <h1 className="similar-product-title">{similarTitle}</h1>
      <p className="similar-product-brand">by {similarBrand}</p>
      <div className="similar-rating-container">
        <p className="similar-product-price">Rs {similarPrice}/-</p>
        <div className="similar-product-rating">
          <p className="similar-rating">{similarRating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  )
}

export default withRouter(SimilarProductItem)
