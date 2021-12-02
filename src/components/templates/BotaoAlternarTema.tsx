import { IconMoon, IconSun } from "../icons";

interface BotaoAlternarTemaProps {
  tema: string
  alternarTema: () => void
}

export default function BotaoAlternarTema( props: BotaoAlternarTemaProps ) {
  return (
    props.tema === 'dark' ? (
      <div onClick={props.alternarTema} className={`
        hidden items-center cursor-pointer justify-end sm:flex w-14 lg:w-24 h-8 p-1 rounded-full
        bg-gradient-to-r from-blue-900 to-gray-900
      `}>
        <div className={`
          hidden lg:flex items-center mr-2 pb-1
          text-gray-300
        `}>
          <span className={`font-semibold text-sm`}>Escuro</span>
        </div>
        <div className={`
          flex justify-center items-center w-6 h-6 rounded-full
          bg-black text-gray-400
        `}>
          {IconMoon(4)}
        </div>
      </div>
    ) : (
      <div onClick={props.alternarTema} className={`
        hidden items-center cursor-pointer sm:flex w-14 lg:w-24 h-8 p-1 rounded-full
        bg-gradient-to-r from-yellow-300 to-yellow-600 transi
      `}>
        <div className={`
          flex justify-center items-center w-6 h-6 rounded-full
          bg-white text-yellow-600
        `}>
          {IconSun(4)}
        </div>
        <div className={`
          hidden lg:flex items-center ml-3 pb-1
          text-white
        `}>
          <span className={`font-semibold text-sm`}>Claro</span>
        </div>
      </div>
    )
  )
}

