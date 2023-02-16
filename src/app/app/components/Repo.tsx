export async function Repo() {
    const response = await fetch('http://api.github.com/users/jonascsantos/repos', {
      cache: 'no-store'
    })  
    const repos = await response.json()
  
    return (
      <div>
        <h1>Repos</h1>
        <pre>
          {JSON.stringify(repos, null, 2)}
        </pre>
      </div>
    )
  }
  
  