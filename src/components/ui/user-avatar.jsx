export default function UserAvatar({ onClick }) {
   return (
      <div className="avatar cursor-pointer ml-2" onClick={onClick}>
         <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
         </div>
      </div>
   )
}