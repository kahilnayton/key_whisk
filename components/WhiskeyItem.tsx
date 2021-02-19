import Link from 'next/link'

const WhiskeyItem = ({whiskey}) => {
  return (
    <Link href="/whiskey/[id]" as={`/whiskey/${whiskey.id}`}>
      <a className="border-black" href="#">
        <h3 className="text-blue-700 border-b">{whiskey.title} &rarr;</h3>
        <p>{whiskey.description}</p>
      </a>
    </Link>
  )
}

export default WhiskeyItem
