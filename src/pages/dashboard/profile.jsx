import DashboardLayout from "../../layout/dashboard-layout";
import RootLayout from "../../layout/root-layout";

export default function Profile() {
   return (
      <RootLayout>
         <DashboardLayout>
            <h1 className="text-3xl text-white font-semibold">Halaman User Profile</h1>
         </DashboardLayout>
      </RootLayout>
   )
}