const PublishButton = (props) => {
  return (
    <div>
      <button
        onClick={() => {props.onClick()}}
      >
        ε¬ιηΆζ: {props.isPublished.toString()}
      </button>
    </div>
  )
}

export default PublishButton
