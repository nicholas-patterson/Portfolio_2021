import React from 'react'
import "../styles/layout.scss";

interface Props {
    children: React.ReactNode;
    toggleDark: boolean;
}

export default function Layout({ children, toggleDark }: Props) {
    return (
        <div className={`main-container ${toggleDark ? "dark-bg" : "light-bg" }`}>
            {children}
        </div>
    )
}
