'use client'
import { primaryColor } from "@/colors/colors.constant"
import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()
    return (
        <div className="p-3 flex flex-row shadow-sm shadow-slate-100 py-4 bg-gray-900">
            <button type="button" onClick={()=>router.push('/')} className="font-bold text-[32px] tracking-tighter text-gray-200">
                PaleyDai
            </button>
            <div className="flex flex-row ml-auto space-x-4">
                <button type="button" onClick={() => router.push('/login')} className={`bg-[${primaryColor}] text-white px-7 rounded-xl hover:bg-purple-900`}>
                    Login
                </button>
                <button type="button" onClick={() => router.push('/signup')} className="px-6 font-bold text-white">
                    Signup
                </button>
            </div>
        </div>
    )
}