import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const mockAppointments = [
  { id: 1, patientName: "Rahul Sharma", time: "10:00 AM", status: "Confirmed" },
  { id: 2, patientName: "Priya Patel", time: "11:30 AM", status: "Pending" },
  { id: 3, patientName: "Amit Kumar", time: "2:00 PM", status: "Confirmed" },
]

export default function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>Select a date to view appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Appointments</CardTitle>
          <CardDescription>Manage your appointments for {date?.toDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{appointment.patientName}</h3>
                  <p className="text-sm text-gray-500">{appointment.time}</p>
                </div>
                <div className="space-x-2">
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                  <Button size="sm" variant="destructive">
                    Cancel
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

