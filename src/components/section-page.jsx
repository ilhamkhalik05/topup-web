export default function SectionPage({ id, className, children }) {
   return (
      <section className={className} id={id}>
         {children}
      </section>
   )
}