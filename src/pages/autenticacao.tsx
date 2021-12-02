import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarn } from "../components/icons";
import useAuth from "../data/hooks/UseAuth";

export default function Autenticacao( props ) {
  const { usuario, loginGoogle } = useAuth()

  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function submeter() {
    if (modo === 'login') {
      console.log('log')
      exibirErro('Erro no Login!', 3)
    } else {
      console.log('cad')
      exibirErro('Erro no Cadastro!', 3)
    }
  }

  function exibirErro(msg: string, tempo: number) {
    setErro(msg)
    setTimeout(() => setErro(null), tempo * 1000)
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>

      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='https://source.unsplash.com/random' alt= 'Imagem' className={`h-screen w-full object-cover`}/>
      </div>

      <div className={`mx-10 px-5 w-full md:w-1/2 lg:w-1/3`}>

        <h1 className={`
          text-3xl font-bold mb-5
        `}>
          {modo === 'login' ? 'Entre com a sua conta!' : 'Cadastre-se agora!'}
        </h1>

        {erro ? (
          <div className={`flex flex-row p-1 my-3 items-center px-3
          bg-red-400 text-white border border-red-700 rounded-full`}>
            {IconWarn(5)}
            <span className={`mx-3 mb-1`}>{erro}</span>
          </div>
        ) : (
          null
        )}

        <AuthInput
          label='Email'
          tipo= 'email'
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label='Senha'
          tipo= 'password'
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />

        <button onClick={submeter} className={`
          w-full rounded-lg p-3 mt-32
          bg-indigo-500 hover:bg-indigo-400 text-white
        `}>
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className='my-5 border-gray-300 w-100'/>

        <button onClick={loginGoogle} className={`
          w-full rounded-lg p-3
          bg-red-500 hover:bg-red-400 text-white
        `}>
          Entrar com Google
        </button>

        {modo == 'login' ? (
          <p className={`mt-7`}>
            Não possui uma conta?
            <a onClick={() => setModo('cadastro')} className={`
            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}> Criar uma conta</a>
          </p>
        ) : (
          <p className={`mt-7`}>
            Já possui uma conta?
            <a onClick={() => setModo('login')} className={`
            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}> Efetuar login</a>
          </p>
        )}
        
      </div>
    </div>
  )
}