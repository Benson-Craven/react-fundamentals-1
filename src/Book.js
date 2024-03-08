const Book = (props) => {
  const { img, title, author, number } = props
  // const displayTitle = () => {
  //   console.log(title)
  // }
  console.log(number)

  // console.log(props)

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4
        style={{
          color: '#617d98',
          fontSize: '0.75rem',
          marginTop: '0.5rem',
          letterSpacing: '2px',
        }}
      >
        {author}
      </h4>
      <span className='number'>{`#${number + 1}`}</span>
      {/* <button type='button' onClick={() => getBook(id)}>
        {/* reference and call the function to gather the ID */}
      {/* Click Me */}
      {/* </button> */}
    </article>
  )
}

export default Book
