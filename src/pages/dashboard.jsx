import { signout } from "../lib/auth/actions"
import { getLocalToken } from "../lib/auth/utils"
import { useNavigate } from "react-router"
import { useEffect } from "react"

import RootLayout from "../root-layout"
import Container from "../components/container"

export default function Dashboard() {
   const token = getLocalToken()
   const navigate = useNavigate()

   useEffect(() => {
      if (!token) {
         navigate('/')
      }
   }, [token])

   return (
      <RootLayout>
         <Container>
            <h1 className="text-3xl text-white mb-3">Dashboard Page</h1>
            <button
               onClick={signout}
               className="btn btn-sm bg-red-500 text-white">
               Logout Ges Disini
            </button>
         </Container>
      </RootLayout>
   )
}