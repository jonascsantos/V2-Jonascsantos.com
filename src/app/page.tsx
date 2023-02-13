import Link from "next/link";

export default async function Home() {
  const response = await fetch('https://api.github.com/users/jonascsantos')  
  const user = await response.json()
  return (
    <div>
      <h1>home</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <Link href="/dashboard">
        Dashboard
      </Link>
    </div>
  )
}

