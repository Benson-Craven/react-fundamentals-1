import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

// const names = ['john', 'peter', 'susan']
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
// })

// console.log(newNames)

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className='bookList'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
