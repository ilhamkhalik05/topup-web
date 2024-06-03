export default function Button({ classname = '', children, onClick = null }) {
   return <button className={classname} onClick={onClick}>{children}</button>
}