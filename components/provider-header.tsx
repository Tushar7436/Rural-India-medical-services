import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, LogOut } from "lucide-react"

export default function ProviderHeader() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          MedSeva Provider
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <LogOut className="w-5 h-5" />
            <span className="ml-2">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

