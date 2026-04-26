"use client"
import { useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getMany)
  return (
    <div className="flex flex-col min-h-svh p-6 justify-center items-center">
      <p>Web App</p>
      {users?.map((user) => (
        <pre key={user._id}>{user.name}</pre>
      ))}
    </div>
  )
}
