export default function Section({ id, className, children }) {
   return (
      <section className={className} id={id}>
         {children}
      </section>
   )
}