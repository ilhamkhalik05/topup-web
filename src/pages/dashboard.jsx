import RootLayout from "../root-layout"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { logout } from "../app/features/auth/auth-slice"

export default function Dashboard() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { status } = useSelector((state) => state.auth)

   console.log(status)

   useEffect(() => {
      if (status === 'unauthenticated') {
         navigate('/signin')
      }
   })

   return (
      <RootLayout>
         <button
            onClick={() => dispatch(logout())}
            className="btn btn-sm bg-red-500 text-white">
            Logout Ges Disini
         </button>
      </RootLayout>
   )
}