import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface PropsLayout {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Layout( props: PropsLayout ) {
  return (
    <div className={`dark flex h-screen w-screen`}>
      <MenuLateral/>
      <div className={`
        flex flex-col w-full
        bg-gray-300
        dark:bg-gray-800 p-10`
      }>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
        <Conteudo>
          {props.children}
        </Conteudo>
      </div>
    </div>
  )
}