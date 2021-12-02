import MenuLateral from "./MenuLateral";

interface PropsConteudo {
  children?: any
}

export default function Conteudo( props: PropsConteudo ) {
  return (
    <div>
      <h1 className={`
        flex flex-col mt-7
        text-gray-800
        dark:text-gray-300
      `}>
        {props.children}
      </h1>
    </div>
  )
}