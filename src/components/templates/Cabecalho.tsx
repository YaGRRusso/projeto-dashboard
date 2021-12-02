import useAppData from "../../data/hook/UseAppData";
import AvatarUsuario from "./AvatarUsuario";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

interface PropsCabecalho {
  titulo: string
  subtitulo: string
}

export default function Cabecalho( props: PropsCabecalho ) {
  const { tema, alternarTema } = useAppData()

  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
      <div className={`flex flex-grow justify-end items-center`}>
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
        <AvatarUsuario className={''}/>
      </div>
    </div>
  )
}