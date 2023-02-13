import { Suspense } from 'react'
import { Repo } from "./app/components/Repo";
import { User } from './app/components/User';


export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <Suspense fallback={<p>Loading Repos</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>
      
      <Suspense fallback={<p>Loading Users</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
      
    </div>
  )
}

