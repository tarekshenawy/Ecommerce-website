import React, { createContext, useState } from "react";
import all_product from "../Components/Images/all_product";



let cart={};
function getCart(){
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0;
    
    }
    return(
        cart
    )

}


export const shopcontext = createContext(null);


const Shopcontextprobider=(props)=>{
    let[cartitem,setCartitem] = useState(getCart());
    



    function Addtocart(id){
    
        setCartitem((prev)=>({...prev,[id]:prev[id]+1}))
        
}   
    function removetocart(id){
        setCartitem((prev)=>({...prev,[id]:prev[id]-1}))
     
    }

    function gettotal(){
        let totalmount=0;
        for(let item in cart){
            if(cartitem[item]>0){
                
                let product = all_product.find((el)=>el.id===Number(item))
           
                totalmount+=cartitem[item]*product.new_price;
             
            }

        }
        return(
            totalmount
        )
    }
 

    function getcartcount(){
        let count = 0;
        for(let item in cart){
          
            if(cartitem[item]>0){
                count+=cartitem[item];
             
            }

        }
        return(
            count
        )

    }
  
 



    
    

   

    const contextvalue ={all_product,Addtocart,removetocart,cartitem,gettotal,getcartcount};
    return(

        <shopcontext.Provider value={contextvalue}>
            {props.children}

        </shopcontext.Provider>

    )
}
export default Shopcontextprobider;