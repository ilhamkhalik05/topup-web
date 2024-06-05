import logo from "../Asset/logo.webp"

export default function CardList({ items, type }) {
   // Popular List
   switch (type) {
      case 'popular':
         return (
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
               {items.map((item) => {
                  return (
                     <PopularCard
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        tipe={item.tipe} />
                  )
               })}
            </div>
         )

      // Games List
      case 'games':
         return (
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-6">
               {items.map((game) => {
                  return (
                     <Gamecard key={game.id} title={game.title} image={game.image} />
                  )
               })}
            </div>
         )

      default:
         return null
   }
}

const PopularCard = ({ title, image, tipe }) => {
   return (
      <div
         className="group card glass cursor-pointer flex flex-col lg:flex-row items-center gap-3 rounded-lg px-5 py-3 bg-yellow-600 hover:-translate-y-1 hover:bg-yellow-400 duration-500 ease-in-out"
      >
         <img
            src={image}
            alt={title}
            width={80}
            height={80}
            className="rounded-md"
         />
         <div className="flex flex-col text-yellow-100 group-hover:text-yellow-900 transition-colors duration-300 ease-in-out">
            <h1 className="font-bold">{title}</h1>
            <h2 className="text-sm">{tipe}</h2>
         </div>
      </div>
   )
}

const Gamecard = ({ title, image }) => {
   return (
      <div className="group card glass relative cursor-pointer rounded-lg h-64">
         <img
            src={image}
            alt={title}
            className="object-cover object-center w-full h-full brightness-75 rounded-md group-hover:blur-sm group-hover:brightness-50 group-hover:shadow-xl shadow-yellow-300 transition ease-in duration-300"
         />
         <div className="flex flex-col items-center justify-center gap-5 w-full text-zinc-50 absolute inset-0 py-5 px-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out">
            <img
               src={logo}
               alt="logo"
               width={140}
               className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"
            />
            <h1 className="font-bold text-md text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
               {title}
            </h1>
         </div>
      </div>
   )
}