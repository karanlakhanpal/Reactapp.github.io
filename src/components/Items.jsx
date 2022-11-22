import React from 'react'

function Items() {
  return (
    <>
    <div className="productlist">
          <div className="mobiles">
            <a href=""><img src="./images/phone.png" alt="" /></a>
            <a href="">Mobiles</a>
          </div>
          <div className="electronics">
            <a href=""><img src="./images/electronics.png" alt="" /></a>
            <a href="">Electronics</a>
          </div>
          <div className="fashion">
            <a href=""><img src="./images/fashion.png" alt="" /></a>
            <a href="">Fashion</a>
          </div>
          <div className="appliances">
            <a href=""><img src="./images/appliances.png" alt="" /></a>
            <a href="">Appliances</a>
          </div>
          <div className="grooming">
            <a href=""><img src="./images/groom.png" alt="" /></a>
            <a href="">Grooming</a>
          </div>
        </div>
    </>
  )
}

export default Items