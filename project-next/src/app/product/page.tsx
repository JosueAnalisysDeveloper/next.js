import { Metadata } from "next"



export const metadata: Metadata = {

    title: 'produtos',

    description: 'site de produtos variados'

}


export default function products () {
    return (
        <div>
            <h1 style={{
                color: 'red'
            }}>bem vindo ao site de produtos</h1>
            <p>produto 1</p>
            <p>produto 2</p>
            <p>produto 3</p>

        
        </div>
        
    )

}


