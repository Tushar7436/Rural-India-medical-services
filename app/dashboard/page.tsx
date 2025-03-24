"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import DashboardHeader from "@/components/dashboard-header"
import DashboardSidebar from "@/components/dashboard-sidebar"
import AppointmentList from "@/components/appointment-list"
import MedicalRecordsList from "@/components/medical-records-list"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("search")

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsContent value="search" className="space-y-4">
              <h2 className="text-2xl font-bold">Search & Discovery</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Find Medical Services</CardTitle>
                  <CardDescription>Search for doctors, hospitals, and pharmacies near you</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <Label htmlFor="search">Search</Label>
                        <Input id="search" placeholder="Enter doctor, hospital, or pharmacy name" />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="Enter city or district" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="specialty">Specialty</Label>
                      <Input id="specialty" placeholder="Enter medical specialty" />
                    </div>
                    <Button type="submit">Search</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appointments" className="space-y-4">
              <h2 className="text-2xl font-bold">Appointments</h2>
              <AppointmentList />
            </TabsContent>

            <TabsContent value="records" className="space-y-4">
              <h2 className="text-2xl font-bold">Medical Records</h2>
              <MedicalRecordsList />
            </TabsContent>

            <TabsContent value="profile" className="space-y-4">
              <h2 className="text-2xl font-bold">Personal Details</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Update Your Information</CardTitle>
                  <CardDescription>Please keep your personal details up to date</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <Label htmlFor="address">Full Address</Label>
                      <Textarea id="address" placeholder="Enter your full address" />
                    </div>
                    <div>
                      <Label htmlFor="medicalHistory">Previous Medical Conditions (Optional)</Label>
                      <Textarea id="medicalHistory" placeholder="List any previous medical conditions" />
                    </div>
                    <Button type="submit">Update Profile</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <h2 className="text-2xl font-bold">Account Settings</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Manage Your Account</CardTitle>
                  <CardDescription>Update your account settings and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="language">Preferred Language</Label>
                      <Input id="language" placeholder="Select your preferred language" />
                    </div>
                    <div>
                      <Label htmlFor="notifications">Notification Preferences</Label>
                      <Input id="notifications" placeholder="Set your notification preferences" />
                    </div>
                    <Button type="submit">Save Settings</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

