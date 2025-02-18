import Link from 'next/link'

export default function home () {
  return (
      <div style={{
        color: 'red'
      }}>
         <Link href="./product/1"> produto 1</Link>
         <Link href="./product/2"> produto 2</Link>
         <Link href="./product/3"> produto 3</Link>
      </div>
  )
}