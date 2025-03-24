import { Button } from "@/components/ui/button"
import { Calendar, FileText, Search, Settings, User } from "lucide-react"

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  const menuItems = [
    { id: "search", label: "Search & Discovery", icon: Search },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "records", label: "Medical Records", icon: FileText },
    { id: "profile", label: "Personal Details", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className="w-5 h-5 mr-2" />
            {item.label}
          </Button>
        ))}
      </nav>
    </aside>
  )
}

