import React, { CSSProperties, FC } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { Props } from '../interfaces/interface'
    
const style: CSSProperties = {
        color: '#0070f3',
        textDecoration: 'underline'
    }

    interface PropsActiveLink extends Props {
        href: string 
    }

    export const ActiveLink: FC<PropsActiveLink> = ({ href, children }) => {
    const {asPath} = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>{children}</a>
        </Link>
    )
}
