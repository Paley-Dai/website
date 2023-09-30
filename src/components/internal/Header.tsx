'use client'
import { primaryColor } from "@/colors/colors.constant"
import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()
    return (
        <div className="p-3 flex flex-row shadow-sm shadow-slate-100 py-4 bg-gray-900">
            <button type="button" onClick={() => router.push('/')} className="font-bold text-[24px] tracking-tighter text-gray-200 ">
                PaleyDai
            </button>
        </div>
    )
}