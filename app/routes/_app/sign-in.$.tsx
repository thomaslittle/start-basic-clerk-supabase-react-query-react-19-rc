import { SignIn } from '@clerk/tanstack-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/sign-in/$')({
  component: SignInPage,
})

function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-auto relative">
        <div>
          <SignIn routing="path" path="/sign-in" />
        </div>
      </div>
    </div>
  )
}
