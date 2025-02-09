interface productparams{
    params: {
    productId: number
    } 
    
}

export default function infoprod ({params}: productparams){
    return(
        <div>
            <p>informacao do produto {params.productId} </p>
        </div>
    )
}