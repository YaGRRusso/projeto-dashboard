import MenuLateral from "./MenuLateral";

interface PropsConteudo {
  children?: any
}

export default function Conteudo( props: PropsConteudo ) {
  return (
    <div>
      <h1 className={`
        flex flex-col mt-7
      `}>
        {props.children}
      </h1>
    </div>
  )
}