import { SignUp } from "@clerk/tanstack-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/sign-up/$")({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-auto relative">
        <div className="relative z-20 backdrop-blur-lg rounded-lg shadow-xl">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
