import { cookies, headers } from 'next/headers'

export async function User() {
  const userCookies = cookies()
  const userHeaders = headers()

  await new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <div>
      <h1>User</h1>
      {JSON.stringify(userCookies.getAll())}
    </div>
  )
}

