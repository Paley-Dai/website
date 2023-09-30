import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface layoutProps {
    children: React.ReactNode
}
export default function Layout({
    children,
}: layoutProps) {
    return (
        <div className="flex flex-col w-full">
            <Header />

            <div className="flex flex-row flex-1">
                <Sidebar />

                {children}
            </div>
        </div>
    )
}
/*
            
            */