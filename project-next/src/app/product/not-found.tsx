import { Metadata } from "next"

export const metadata: Metadata ={
    title: 'erro404'
}

export default function not_found (){
    return (
        <div>
            <h1>
                produto nao encontrado
            </h1>
        </div>
    )
}