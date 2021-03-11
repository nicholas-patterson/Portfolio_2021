import React from 'react'
import MainContentCSS from "../styles/main-content.module.css";

interface Props {
    children: React.ReactNode;
}

export default function MainContent({ children }: Props) {
    return (
        <main className={MainContentCSS.container}>
            {children}
        </main>
    )
}
