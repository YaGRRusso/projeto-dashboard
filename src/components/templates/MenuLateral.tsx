import { IconBel, IconHome, IconLogout, IconSettings } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(  ) {
  return (
    <aside className={`
      flex flex-col
    dark:bg-gray-900`
    }>
      <div className={`
        flex flex-col items-center justify-center h-20 w-20
        bg-gradient-to-tr from-indigo-500 to-purple-800
      `}>
        <Logo/>
      </div>
      <ul className={`flex flex-grow flex-col`}>
        <MenuItem url='/' texto="Início" icone={IconHome}/>
        <MenuItem url='/ajustes' texto="Ajustes" icone={IconSettings}/>
        <MenuItem url='/notificacoes' texto="Notificações" icone={IconBel}/>
      </ul>
      <ul>
        <MenuItem texto="Logout" icone={IconLogout} onClick={() => console.log('oi')}
        className={`
        text-red-600 hover:bg-red-600 hover:text-white
        dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white`}/>
      </ul>
    </aside>
  )
}