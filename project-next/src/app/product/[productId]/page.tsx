import { Metadata } from "next"
import { notFound } from 'next/navigation'



export const metadata: Metadata ={
    title: {
        absolute: 'produtos com NUM'
    }
}


interface productparams{
    params: {
    productId: string
    } 
    
}

export default function infoprod ({params}: productparams){

    if(parseInt(params.productId) > 5){
        notFound ()
    }
    
    return(

        <div>
            <p>informacao do produto {params.productId} </p>
        </div>
    )
}