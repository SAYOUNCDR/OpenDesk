import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6  justify-center items-center">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Hello Widget!</h1>
          <Button className="mt-2">Button</Button>
          <p className="mt-4">
            1 + 2 = {add(1, 2)}
          </p>
        </div>
        <div className="text-muted-foreground font-mono text-xs">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
