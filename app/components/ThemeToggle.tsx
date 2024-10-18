import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useThemeStore } from '@/store/themeStore'

export function ModeToggle() {
  const { theme, setTheme } = useThemeStore()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="p-0 hover:bg-transparent"
      onClick={toggleTheme}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-900 dark:text-white" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-900 dark:text-white" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
