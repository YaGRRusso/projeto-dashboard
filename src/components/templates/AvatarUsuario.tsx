/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import useAuth from '../../data/hook/UseAuth'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()
    return (
        <Link href="/perfil" passHref>
            <img
                src={usuario?.imagemUrl ?? '/images/avatar.png'}
                alt="Avatar"
                className={`
                    h-12 w-12 rounded-full cursor-pointer ml-3 border
                    border-blue-700
                    dark:border-yellow-400
                    ${props.className}
                `}
            />
        </Link>
    )
}