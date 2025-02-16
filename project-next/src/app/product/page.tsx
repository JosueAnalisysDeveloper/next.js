import { Metadata } from "next"

export const metadata: Metadata = {

    title: 'produtos',

    description: 'site de produtos variados'

}


export default function products () {
    return (
        <div>
            <h1>bem vindo ao site de produtos</h1>
        </div>


    )

}