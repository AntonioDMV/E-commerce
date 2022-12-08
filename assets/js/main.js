const btnTheme = document.getElementById("theme-btn")
const body = document.body
const cartBtnOpen = document.getElementById('cart-btn')
const cartBtnClose = document.getElementById('close-cart')
const cartContainer = document.getElementById('cart-container')
const darkThemeChange = () => {
    /*if(body.classList.contains("dark")){
    body.classList.add("dark")
    }else{
        body.classList.add("dark")
    }*/

    

    if( btnTheme.classList.contains("bx-sun") ){
        btnTheme.classList.replace("bx-sun", "bx-moon")
    }else{
        btnTheme.classList.replace("bx-moon", "bx-sun")
    }

    body.classList.toggle("dark")
}

btnTheme.addEventListener( "click", e => darkThemeChange())



cartBtnOpen.addEventListener('click', e => cartContainer.classList.remove('hide'))


cartBtnClose.addEventListener('click', () => cartContainer.classList.add('hide') )



const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]



  const cartProducts = [  ]



  function addProduct( itemId ){

    let productSelected = cartProducts.find( product => product.id === itemId)

    if( productSelected){
        let index = cartProducts.indexOf(productSelected)

        cartProducts[index].quantitySelected++
    }else{

        const item = items.find(item => item.id === itemId)

        item.quantitySelected = 1
        cartProducts.push(item)
    }
    
    showProducts()
  }



function showProducts(){
    const content = document.getElementById( 'cart-content' )   

    let fragment = ''

    cartProducts.forEach(product => {
        fragment+= `
        <section>
            <h2>${product.name}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus atque similique accusamus quis est eaque voluptas, laboriosam necessitatibus obcaecati dolore corporis veritatis neque nesciunt, delectus non laborum? Magni, minus cum!
                </p>
        </section>
        `
    } )

    content.innerHTML = fragment
  }