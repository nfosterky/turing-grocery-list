import React from 'react'

const RenderList = ({ itemCollection }) => {
  if(!itemCollection.length) {
    return (
      <div>
        Please add some yung-items
      </div>
    )
  }

  // if there is length in the array
  // itterate over the array and show those yung-items

  return(
    <div>
        { itemCollection.map((item) => {
          return (
            <section key= {item.id}>
              <p>{item.item}</p>
              <button> delete</button>
            </section>
          )
        })}
    </div>
  )
}

export default RenderList
