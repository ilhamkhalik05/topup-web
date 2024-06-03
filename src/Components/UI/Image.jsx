export default function Image({ className, src, alt, width, height }) {
   return (
      <img className={className} src={src} alt={alt} width={width} height={height} />
   )
}