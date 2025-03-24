"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mockPatients = [
  { id: 1, name: "Rahul Sharma", age: 35, lastVisit: "2025-02-15" },
  { id: 2, name: "Priya Patel", age: 28, lastVisit: "2025-02-10" },
  { id: 3, name: "Amit Kumar", age: 42, lastVisit: "2025-02-05" },
]

export default function PatientManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPatients = mockPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Management</CardTitle>
        <CardDescription>View and manage patient information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input placeholder="Search patients..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <Tabs defaultValue="list" className="space-y-4">
          <TabsList>
            <TabsTrigger value="list">Patient List</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <div className="space-y-4">
              {filteredPatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{patient.name}</h3>
                    <p className="text-sm text-gray-500">
                      Age: {patient.age} | Last Visit: {patient.lastVisit}
                    </p>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="chat">
            <div className="border rounded-lg p-4">
              <p className="text-center text-gray-500">Select a patient to start a chat</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

