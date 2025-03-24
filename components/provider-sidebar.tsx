import { Button } from "@/components/ui/button"
import { Calendar, FileText, User, CreditCard, BarChart2, PhoneCall } from "lucide-react"

interface ProviderSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function ProviderSidebar({ activeTab, setActiveTab }: ProviderSidebarProps) {
  const menuItems = [
    { id: "profile", label: "Profile & Listings", icon: User },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "patients", label: "Patient Management", icon: FileText },
    { id: "billing", label: "Billing & Payments", icon: CreditCard },
    { id: "analytics", label: "Analytics & Reporting", icon: BarChart2 },
    { id: "emergency", label: "Emergency Management", icon: PhoneCall },
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

