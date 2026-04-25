import { useQuery } from "convex/react"
import { api } from "@workspace/backend/convex/_generated/api.js"

export default function Page() {
  const users = useQuery(api.users.getMany)
  return (
    <div className="flex min-h-svh p-6  justify-center items-center">
      <p>Web App</p>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
