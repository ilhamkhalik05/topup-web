import { cards } from "../Lib/PlaceholderData"
import Image from "./UI/Image"

export default function CardList() {
   return (
      <div className="grid grid-cols-4 gap-3">
         {cards.map(card => {
            return <Card title={card.title} image={card.image} key={card.id} />
         })}
      </div>
   )
}

const Card = ({ title, image }) => {
   return (
      <div className="card glass bg-zinc-700 text-white shadow-lg rounded-lg p-3">
         <div className="container flex items-center gap-3">
            <Image className="rounded-md" src={image} alt={title} width={80} height={80} />
            <h1 className="text-lg font-light">{title}</h1>
         </div>
      </div>
   )
}