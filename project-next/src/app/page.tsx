import Link from 'next/link'

export default function home () {
  return (
      <div style={{
        color: 'red'
      }}>
         <Link href="./product"> LINK PARA A PAGINA DE PRODUTOS </Link>
      </div>
  )
}