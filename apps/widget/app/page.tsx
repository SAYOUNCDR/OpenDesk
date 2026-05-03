"use client"
import { useQuery, useMutation} from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex flex-col min-h-svh p-6 justify-center items-center">
      <p>Widget App</p>
      {users?.map((user) => (
        <pre key={user._id}>{user.name}</pre>
      ))}

      <Button onClick={() => addUser({})}>
        Add user
      </Button>
    </div>
  )
}
