"use client"

import { useState } from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import ProviderHeader from "@/components/provider-header"
import ProviderSidebar from "@/components/provider-sidebar"
import ProfileForm from "@/components/profile-form"
import AppointmentCalendar from "@/components/appointment-calendar"
import PatientManagement from "@/components/patient-management"
import BillingPayments from "@/components/billing-payments"
import AnalyticsReporting from "@/components/analytics-reporting"
import EmergencyManagement from "@/components/emergency-management"

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="min-h-screen bg-gray-50">
      <ProviderHeader />
      <div className="flex">
        <ProviderSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsContent value="profile" className="space-y-4">
              <h2 className="text-2xl font-bold">Profile & Listings Management</h2>
              <ProfileForm />
            </TabsContent>

            <TabsContent value="appointments" className="space-y-4">
              <h2 className="text-2xl font-bold">Appointment Calendar</h2>
              <AppointmentCalendar />
            </TabsContent>

            <TabsContent value="patients" className="space-y-4">
              <h2 className="text-2xl font-bold">Patient Management</h2>
              <PatientManagement />
            </TabsContent>

            <TabsContent value="billing" className="space-y-4">
              <h2 className="text-2xl font-bold">Billing & Payments</h2>
              <BillingPayments />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <h2 className="text-2xl font-bold">Analytics & Reporting</h2>
              <AnalyticsReporting />
            </TabsContent>

            <TabsContent value="emergency" className="space-y-4">
              <h2 className="text-2xl font-bold">Emergency/On-Call Management</h2>
              <EmergencyManagement />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

