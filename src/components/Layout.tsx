import React from "react";
import Header from "./Headers";

interface layoutProps {
    children: React.ReactNode
}
export default function Layout({
    children,
}: layoutProps) {
    return (
        <div className="w-full flex flex-col">
            <Header />
            {children}
        </div>
    )
}