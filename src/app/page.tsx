import Link from 'next/link';
import { Suspense } from 'react'
import { Repo } from "./app/components/Repo";
import { User } from './app/components/User';

export const metadata = {
  title: 'Home 1'
}

export default function Home() {

  return (
    <div>
      <h1>home</h1>
      
      <Link href="/app">Repo</Link>
            
      <User />
    
    </div>
  )
}

