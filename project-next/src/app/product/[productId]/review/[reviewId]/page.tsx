import { notFound } from 'next/navigation'

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
    if(parseInt(params.productId) > 5){
        notFound ()
    }

    return(
        <div>
            <p>produto {params.productId} </p>
            <p>review {params.reviewId}</p>
        </div>
    )
}