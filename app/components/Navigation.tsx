import React from 'react'
import { Link } from '@tanstack/react-router'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/tanstack-start'
import { ModeToggle } from './ThemeToggle'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const { isSignedIn, isLoaded } = useUser()

  return (
    <nav>
      <div className="container max-w-7xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="space-x-2 flex items-center text-xl font-semibold text-black dark:text-white"
            >
              <img
                src="/images/tanstack.png"
                alt="Tanstack Logo"
                className="w-7 h-7 rounded-full outline-2 p-0.5"
              />

              <span className="tracking-widest !text-black dark:!text-white uppercase">
                LOGO
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 ml-auto mr-8">
            <NavLink to="/" exact>
              Main
            </NavLink>
            <NavLink to="/posts">Posts</NavLink>
            {isSignedIn && <NavLink to="/dashboard">Dashboard</NavLink>}
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            {isSignedIn && (
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
                <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>
              </div>
            )}
            {isLoaded && (
              <>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: 'w-6 h-6',
                      },
                    }}
                  />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      className="text-sm font-medium bg-transparent hover:bg-gradient/10 border-0 backdrop-blur-none"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({
  to,
  children,
  exact = false,
}: {
  to: string
  children: React.ReactNode
  exact?: boolean
}) {
  return (
    <Link
      to={to}
      activeProps={{
        className: 'text-primary',
      }}
      inactiveProps={{
        className:
          'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white',
      }}
      activeOptions={{ exact }}
      className="text-sm font-medium transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  )
}
