interface AuthInputProps {
  label: string
  valor: any
  obrigatorio?: boolean
  naoRender?: boolean
  tipo?: 'text' | 'email' | 'password'
  valorMudou: (novoValor: any) => void
}

export default function AuthInput( props: AuthInputProps ) {
  return (
    props.naoRender ? null :
    <div className={`flex flex-col mt-3`}>
      <label>{props.label}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={e => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio ?? false}
        className={`
          px-3 py-3 rounded-lg border focus:outline-none
          bg-gray-200 focus:border-blue-500 focus:bg-white
        `}
      />
    </div>
  )
}