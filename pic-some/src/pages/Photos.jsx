import React, {useContext} from "react"
import { Context } from "../Context"
import { getClass } from "../util/util.js"
import Image from "../components/Image"

function Photos() {
    const {allPhotos} = useContext(Context)
    const photoElement = allPhotos.map((photo,i) => {
        return (
            
           
            <Image
                key={photo.id}
                img={photo}
                getClass={getClass(i)}
            />
        )   
  
    })
   
    return (
        <main className="image-container">
            
            {photoElement}
            
        </main>
    )
}
export default  Photos