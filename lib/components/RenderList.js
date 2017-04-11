import React from 'react'

const RenderList = ({ itemCollection, remove}) => {
  if (!itemCollection.length) {
    return (
      <div>
        Please add some yung-items
      </div>
    )
  }

  return(
    <div>
        { itemCollection.map((item) => {
          return (
            <section key= {item.id}>
              <p>{item.item}</p>
              <button onClick={() => remove(item.id)}> delete</button>
            </section>
          )
        })}
    </div>
  )
}

export default RenderList
