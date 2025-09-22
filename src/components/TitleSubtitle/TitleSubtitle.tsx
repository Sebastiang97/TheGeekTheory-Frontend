import "./TitleSubtitle.css"

export const TitleSubtitle = (props:any) => {
  const {title, subtitle, ...rest} = props
  return (
    <section 
      className="titleSubtitle"
      {...rest}
    >
        <h2>{title}</h2>
        <small>{subtitle}</small>
    </section>
  )
}
