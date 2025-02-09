interface reviewParams{
    params: {
    productId: number
    reviewId: number
    }
}

export default function review({params}: reviewParams){
    return(
        <div>
            <p>produto {params.productId} </p>
            <p>review {params.reviewId}</p>
        </div>
    )
}