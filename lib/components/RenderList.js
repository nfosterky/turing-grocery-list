import React from 'react'

const RenderList = ({ itemColletion }) => {
  if(!itemColletion.length) {
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
      you added something. great job!
    </div>
  )
}

export default RenderList
