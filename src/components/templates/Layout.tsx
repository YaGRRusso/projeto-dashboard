import useAppData from "../../data/hook/UseAppData";
import ForcarAutenticacao from "../../functions/ForcarAutenticacao";
// import ForcarAutenticacao from "../auth/ForcarAutenticacao";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface PropsLayout {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Layout( props: PropsLayout ) {
  const {tema} = useAppData()

  return ForcarAutenticacao(
    <div className={`${tema} flex h-screen w-screen`}>
      <MenuLateral/>
      <div className={`
        flex flex-col w-full p-5 pl-10
        bg-gray-300
        dark:bg-gray-800`
      }>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
        <Conteudo>
          {props.children}
        </Conteudo>
      </div>
    </div>
  )
}