import Link from "next/link";
import { Suspense } from "react";
import { Repo } from "./components/Repo";

export const metadata = {
    title: 'Dashboard papai'
}

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link href="/">Home</Link>

            <Suspense fallback={<p>Loading Repos</p>}>
                {/* @ts-expect-error Async Server Component */}
                <Repo />
            </Suspense>
        </div>
    )
}