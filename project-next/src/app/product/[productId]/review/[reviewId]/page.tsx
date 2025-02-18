import { Metadata } from 'next'
import { notFound } from 'next/navigation'


export const metadata: Metadata ={
    title: 'review',
    
    description: 'paginas de analises'

}


interface reviewparams{
    params: {
    productId: string
    reviewId: string
    }
}

export default function review({params}: reviewparams){

    if (parseInt(params.reviewId) > 5){
        notFound ()

    }
   

    return(
        <div>
            <p>produto {params.productId} </p>  
            <p>review {params.reviewId}</p>
        </div>
    )


    
}