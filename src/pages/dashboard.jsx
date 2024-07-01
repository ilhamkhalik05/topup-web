import RootLayout from "../root-layout"
import { useSession } from "../hooks/useSession"
export default function Dashboard() {
   const { data: session } = useSession()
   console.log({ session })
   return (
      <RootLayout>
         <button
            className="btn btn-sm bg-red-500 text-white">
            Logout Ges Disini
         </button>
      </RootLayout>
   )
}