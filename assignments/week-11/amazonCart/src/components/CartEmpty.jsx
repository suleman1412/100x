import emptyCart from '../assets/empty-cart.png'  

const CartEmpty = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent: 'space-between', 
    alignItems:"center", fontFamily:'Montserrat', fontSize:'1rem', fontWeight:'600'}}>
        Cart Empty, Please head to Browse Page.
        <img src={emptyCart} alt='empty cart' style={{width:'9em'}}/>
    </div>
  )
}

export default CartEmpty
