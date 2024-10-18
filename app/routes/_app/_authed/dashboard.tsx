import { Container } from '@/components/layout/Container'
import { createFileRoute } from '@tanstack/react-router'
import { useUser } from '@clerk/tanstack-start'
import { Spinner } from '@/components/ui/spinner'
import UserDetailsCard from '@/components/UserDetails'

export const Route = createFileRoute('/_app/_authed/dashboard')({
  component: DashboardComponent,
})

function DashboardComponent() {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) {
    return <Spinner />
  }

  if (!isSignedIn) {
    return <div>Please sign in to view the dashboard.</div>
  }

  return (
    <Container maxWidth="7xl" paddingTop="md">
      <h1 className="text-4xl md:text-7xl font-bold mb-10">Dashboard</h1>
      <UserDetailsCard />
    </Container>
  )
}
