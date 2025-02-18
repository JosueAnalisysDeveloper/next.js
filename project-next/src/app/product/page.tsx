import { Metadata } from "next"
import Link from 'next/link'


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

            <Link href="./review"> CONFIRA A REVIEWS DO PRODUTO ACIMA </Link>
        </div>
        
    )

}


