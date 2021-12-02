import Titulo from "./Titulo";

interface PropsCabecalho {
  titulo: string
  subtitulo: string
}

export default function Cabecalho( props: PropsCabecalho ) {
  return (
    <div>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
    </div>
  )
}