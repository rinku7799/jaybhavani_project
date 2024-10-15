import React from 'react'
import Header from '../../componant/Header'
import { OrderAdress } from '../../componant/OrderAdress'
import Order from '../../componant/Order'
import FoodContainer from '../../componant/Food-container'
import { Footer } from '../../componant/footer'



export const HomePage = () => {
  return (

    <>
      <Header />
        <FoodContainer />
      {/* <Order /> */}
      <Footer />
 </>
  )
}
