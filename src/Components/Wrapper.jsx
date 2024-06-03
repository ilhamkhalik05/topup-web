export default function Wrapper({ theme, classname = '', children }) {
   return (
      <div className={`app ${theme === 'light' ? 'bg-zinc-100' : 'bg-zinc-900'} transition-all duration-150`}>
         {children}
      </div>
   )
}