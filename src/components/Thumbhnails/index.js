import './index.css'

const Thumbnails = props => {
  const {thumb, onClickThumb} = props
  const {id, thumbnailUrl} = thumb

  const onClickThumbnail = () => {
    onClickThumb(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbanil-image" />
      </button>
    </li>
  )
}

export default Thumbnails
