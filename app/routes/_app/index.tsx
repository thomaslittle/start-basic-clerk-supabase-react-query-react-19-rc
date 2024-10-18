import { Container } from '@/components/layout/Container'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
  component: Home,
})

function Home() {
  return (
    <Container maxWidth="7xl" paddingTop="md">
      <h1 className="text-7xl font-bold mb-10">Hello!</h1>
      <p>
        This is the home page. You can use this space to showcase your content.
      </p>
    </Container>
  )
}
