import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import Image from 'next/image'

export default function Autenticacao( props ) {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function submeter() {
    if (modo === 'login') {
      console.log('log')
    } else {
      console.log('cad')
    }
  }

  return (
    <div className={`
      flex h-screen items-center justify-center
    `}>

      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <Image 
          src='https://source.unsplash.com/random'
          alt='Imagem' width='10' height='10' layout='responsive'
        />
      </div>

      <div className={`w-1/2`}>

        <h1 className={`
          text-xl font-bold mb-5
        `}>
          {modo === 'login' ? 'Entre com a sua conta!' : 'Cadastre-se agora!'}
        </h1>
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

        <button onClick={submeter} className={`
          w-full rounded-lg p-3
          bg-red-500 hover:bg-red-400 text-white
        `}>
          Entrar com Google
        </button>
        
      </div>
    </div>
  )
}