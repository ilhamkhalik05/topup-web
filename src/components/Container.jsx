export default function Container({ className = "", children }) {
   return (
      <div className={`container w-[93%] mt-10 ${className}`}>
         {children}
      </div>
   )
}