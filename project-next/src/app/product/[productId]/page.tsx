import { notFound } from 'next/navigation'

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