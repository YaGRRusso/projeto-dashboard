import Layout from "../components/templates/Layout";
import useAppData from "../data/hooks/UseAppData";

export default function Notificacoes(  ) {
  const {alternarTema} = useAppData()

  return (
    <div>
      <Layout titulo='Not' subtitulo='Sub'>
        <button onClick={alternarTema}>Alternar</button>
      </Layout>
    </div>
  )
}