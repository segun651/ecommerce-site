

let totals = document.querySelector(".totalprice")

let items = [
    

    {
        id:1,
        quantity : 1,
         name : "NAMESAKE BODY LOTION",
          price:25,
           img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647614506-PRODUCT_068_1.jpg?crop=1.00xw:0.668xh;0,0.0908xh&resize=980:*",
          nature:{
           category:"Body",
           all : "all"
          }
        
    },
    {
        id:2,
         name : "CLINIQUE FACIAL CREAM",
          price:65,
          quantity : 1,
           img:" https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647869654-cl-sku-kww301-1200x1500-0-1647869643.png?crop=1.00xw:0.801xh;0,0.110xh&resize=980:*",
          nature:{
           category:"Facial",
           all : "all"
          }
    },
    {
        id:3,
        quantity : 1,
         name : "ULTRA REPAIR CREAM",
          price:45,
           img:" https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647539518-61aqevgpe4l-sl1500-1647539512.jpg?crop=1xw:1xh;center,top&resize=980:*",
          nature: {
    
           category:"Facial",
           all : "all"
          }
    },
    {
        id:4,
        quantity : 1,
         name : "D0VE HAIR LOTION",
          price:25,
          img:" https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1643143508-71107Ska5CL._SL1500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*",
           nature: {
          category:"Hair",
          all : "all"
           } 
        
    },
    {
        id:5,
        quantity : 1,
         name : "PANTENE HAIR CREAM",
          price:35,
          img:" https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566582779-31PunUu2BvTL.jpg?crop=1xw:1.00xh;center,top&resize=980:*", 
         nature:{
          category:"Hair" ,
          all : "all"
         }
    },
    {
        id:6,
        quantity : 1,
         name : "CUREL BODY CREAM",
          price:25,
          img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1593619399-317enYtzBkL.jpg?crop=0.667xw:1xh;center,top&resize=980:*" ,
        nature : {
          category:"Body" ,
          all : "all"
        }
    },
    {
      id:7,
      quantity : 1,
       name : "DOVE BODY CREAM",
        price:25,
        img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1593619412-41BiL-vmi-L.jpg?crop=0.667xw:1xh;center,top&resize=980:*" ,
      nature : {
        category:"Body" ,
        all : "all"
      }
  },
   
  {
    id:8,
    quantity : 1,
     name : "ORCHID Hair LOTION",
      price:45,
      img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1642102852-d8e2d76c-acf1-40da-bf68-e37c33195c0a_1.f4555acece01fcdf03b70c1a3288c7c6.jpg?crop=1xw:1.00xh;center,top&resize=980:*",
    nature : {
      category:"Hair" ,
      all : "all"
    }
  },
    {
      id:9,
      quantity : 1,
       name : "LANEIGE FACIAL LOTION",
        price:75,
        img:" https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647871699-61et2xbrvul-sl1200-1647871690.jpg?crop=1xw:1xh;center,top&resize=980:*",
      nature : {
        category:"Facial" ,
        all : "all"
      }
  },

  {
    id:10,
    quantity : 1,
     name : "DEWYSKIN FACIAL CREAM",
      price:45,
      img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647465971-dewyskincream-open-ppage-1200x1200-1647465964.jpg?crop=1xw:1xh;center,top&resize=980:*" ,
    nature : {
      category:"Facial" ,
      all : "all"
    }
},
{
  id:11,
  quantity : 1,
   name : "CERAVE BODY CREAM",
    price:55,
    img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1593613790-41mSGCUaPML.jpg?crop=0.667xw:1xh;center,top&resize=980:*" ,
  nature : {
    category:"Body" ,
    all : "all"
  }
},
{
  id:12,
  quantity : 1,
   name : "OLIVE HAIR CREAM",
    price:65,
    img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637093284-41EuH5nHVDL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*" ,
  nature : {
    category:"Hair" ,
    all : "all"
  }
},
{
  id:13,
  quantity : 1,
   name : "PEACE FACIAL LOTION",
    price:65,
    img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647527346-s2482529-main-zoom-1647527341.jpg?crop=1xw:1xh;center,top&resize=980:*" ,
  nature : {
    category:"Facial" ,
    all : "all"
  }
},
{
  id:14,
  quantity : 1,
   name : "KERASTASE HAIR LOTION",
    price:45,
    img:" https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1643142129-1566584356-kerastase-densifique-bain-densite-shampoo-1643142121.jpg?crop=1xw:1xh;center,top&resize=980:*" ,
  nature : {
    category:"Hair" ,
    all : "all"
  }
},
{
  id:15,
  quantity : 1,
   name : "OLAY BODY LOTION",
    price:45,
    img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549909658-00075609023422.jpg?crop=0.667xw:1xh;center,top&resize=980:*" ,
  nature : {
    category:"Body" ,
    all : "all"
  }
}
 ]
 let productDom = document.getElementById("product")
  let itemsfilter = items
   let filterall = document.getElementById("all")

  products(itemsfilter)
  let bars = document.getElementById("bars")
  let media = document.querySelector(".display")
  let closing = document.querySelector(".closecarts")
   let carts = document.querySelector(".cart")
      let closed =  document.querySelector(".closecart")
      let shop = document.getElementById("shop")

        closed.onclick  = ()=> {
          carts.style.transform = "translateX(100%)"
          overlay.style.visibility = "hidden"
        }
          shop.onclick = () => {
            carts.style.transform = "translateX(0%)" 
            overlay.style.visibility = "visible"
          }
         

              bars.onclick = () => {
                   
                   media.style.transform = "translateX(-0%)"
              } 
          
               closing.onclick = () => {
             
                media.style.transform = "translateX(-100%)"
               }
          
  function products(itemsfilter){
    let i = 0
    // filterall.disabled = true
       productDom.innerHTML = ""  
        let result = ''
 itemsfilter.forEach((item) => {
     result +=`
       <div class="box">
      <img src= "${item.img}"  class="products-img" alt="img">
     <h1 class="title">  ${item.name} </h1> <div class="price"><p>$${item.price}<p></div>
     <button class="boxbtns" onclick="addtocart(${i++},${item.id})" >Add to Cart</button>
      </div>`
     // console.log (`${item.id}`)
            productDom.innerHTML  = result
 })  
}
    
               let quantitys = document.querySelector(".quantity")
                     let overlay = document.querySelector(".overlay")
              let cart = []

              let leadsfromLocalstorage = JSON.parse( localStorage.getItem("cart") ) 
                         
              if(leadsfromLocalstorage) {
             
              cart =  leadsfromLocalstorage
                  displaycart()
              }

  
              // let  quantity = document.querySelector(".quantity")
              
              function addtocart(a,id)  {

                let incart = cart.find(items => items.id == id)

                if (incart) {
                  
                    alert("Product already added to Cart.")
                          a.disabled = true
                }
                else {
                  
                  cart.push({...itemsfilter[a]})
               carts.style.transform = "translateX(0%)" 
               console.log(cart)
               overlay.style.visibility = "visible"
             }
             
                         displaycart() 
                                
               }

                   

                function displaycart(a) {

                         
                   let results = ""
                  let count = 0
                   let totalprice = 0
                 
                    if(cart.length == 0) {
                      document.getElementById("cartbox").innerHTML = `<h1>  Your Cart is Empty. </h1>`
                    }
                     else {
                     
                      cart.forEach((items,key) => {
                         
                  

                          if(items != null) {
                          
                          localStorage.setItem("cart", JSON.stringify(cart))
                         count = count + items.quantity
                          totalprice += items.quantity * items.price 
                     results +=    `
                          <div class="cartcontent">
                           <img src="${items.img}">
                           <div class="detail">
                           <p class="name">${items.name} </p>
                           <p  class="price"> $ ${items.price} </p>
                           <i onclick="cancel(${key},${items.id})" class="fa fa-trash" ></i>
                            </div>
                            <div class ="btnsnum">

                            <button class="fas fa-chevron-up" onclick="changequantity(${key}, ${items.quantity + 1},${items.id})"></button>
                             <div class="icon"> ${items.quantity} </div>
                         <button onclick="changequantity(${key}, ${items.quantity - 1},${items.id})" class="fas fa-chevron-down"> </button>
                         </div>
                           
                              </div>
                         
                         
                         `
                       
                          }
                           document.getElementById("cartbox").innerHTML = results  

                        })
                       
                     }
                     localStorage.setItem("totalprice", JSON.stringify(totalprice))
                     totals.innerText = "$" + totalprice.toLocaleString()

                     quantitys.innerText = cart.length 
                   
                               
                       
                }
                let buybtn = document.getElementById("buys")
                 window.onload = ()=> {    
                buybtn.addEventListener("click", ()=> {
                 if (totals.innerHTML == `$0`)  {
  
                   alert("No Products in cart")
             
                 }
  
                 else {
               
                document.location = "form.html"
                 }
                
                })
              }
                
                        
                   function changequantity(a, quantity) {
                 
                    
                  //  let quantitys = document.querySelector(".quantity")


                    /*  if(cart[key] != null && quantity == 0 && cart[{...key}] == null){
                          delete cart[key]
                          displaycart()
                     }*/
                     
                          
                      if(quantity == 0) {
                   cart.splice(a,1)
                    }
                     else {
                      cart[a].quantity = quantity
                     }

                 
                     
                  displaycart()
                  localStorage.setItem("cart", JSON.stringify(cart))
                   }
                 
                
                   


                          function cancel(a) {
                        
                            cart.splice(a,1)
                           
                             
                            displaycart()
                            
                             localStorage.setItem("cart", JSON.stringify(cart))
                          
                        }

                           


                        function showname() {
                          let nameinput = document.getElementById("nameinput").value
                             // let productDom = document.querySelector("#product")
                             
                          itemsfilter = items.filter(item => {
                          
                           if(nameinput != '') {
                            
                              if(!item.name.includes(nameinput.toUpperCase())){
                                    
                                  return false  
                              }
                              
                           }
                            return true

                       })
                       products(itemsfilter)
                        }
               
                 
                         filterall.addEventListener("click", allclicked)
                        function allclicked(e) {
                         let valueFilter =  e.target.dataset.filter
                         
                         itemsfilter = items.filter((item ) => {
                          
                              if(valueFilter != '') {
                                 if(item.nature.all != valueFilter){
                                     
                                     return false
                                 }
                              }
                               return true
                          })
                          products(itemsfilter)
                        
                        }
               
               
                         let facefilter = document.getElementById("filter")
                  facefilter.addEventListener("click", faceclicked)
                   
                   function faceclicked(e) {
                       
                       let valueFilter =  e.target.dataset.filter
                       
                       itemsfilter = items.filter((item) => {
                      
                            if(valueFilter != '') {
                               if(item.nature.category != valueFilter){
                                   
                                   return false
                               }
                            }
                             return true
                        })
                        products(itemsfilter)
                       
                       } 
                         
                        let hair = document.getElementById("hair")
                         
                         hair.addEventListener("click",hairclicked)
               
                          function hairclicked(e) {
               
                           let valueFilter =  e.target.dataset.filter
                      
                           itemsfilter = items.filter( (item) => {
                            
                                if(valueFilter != '') {
                                   if(item.nature.category != valueFilter){
                                       
                                       return false
                                   }
                                }
                                 return true
                            })
                            products(itemsfilter)
                        
                          }
                           
                           let body = document.getElementById("body")
               
                            body.addEventListener("click", bodyclicked)
               
                             function bodyclicked(e) {
                               let valueFilter =  e.target.dataset.filter
                                  
                               itemsfilter = items.filter((item) => {
                                
                                    if(valueFilter != '') {
                                       if(item.nature.category != valueFilter){
                                           
                                           return false
                                       }
                                    }
                                     return true
                                })
                                products(itemsfilter)
                                
                             }
                             
                             