import React, {useState, useEffect} from "react"
import { useMemo } from "react"

const Context = React.createContext()
function ContextProvider({ children }) {
    
    const [cartItems,setCartItems]=useState([])
    const [allPhotos, setAllPhotos] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    let size = allPhotos.length
    
    // const newPrice = genrateRandom()
    const toggleFavorite= (id) =>{
        const updatedArr = allPhotos.map((photo) => {
            if (photo.id === id) {
                return {...photo, isFavorite:!photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr);
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromtheCart(id) {
        setCartItems(prevItems=> prevItems.filter(item=>item.id !== id ))
    }

    function delAllCart() {
        setCartItems([])
    }
    
    const genrateRandom = useMemo(()=> {
        for (let i = 0; i < size; i++)
        {
            if (size > 0) {
                allPhotos[i].price = Math.floor(Math.random()* (400 - 100 ) + 100)
            } else {
                setTimeout(()=>{},1000)
            }  
        }
    },[size])
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, [])
    
    return (
        <Context.Provider value={{allPhotos,toggleFavorite,addToCart,cartItems,removeFromtheCart,genrateRandom,delAllCart}}>
            {children}
        </Context.Provider> 
    )
}

export {ContextProvider, Context}