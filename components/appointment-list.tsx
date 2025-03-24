import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const appointments = [
  { id: 1, doctor: "Dr. Rajesh Kumar", date: "2025-03-01", time: "10:00 AM", status: "Upcoming" },
  { id: 2, doctor: "Dr. Priya Sharma", date: "2025-02-15", time: "2:30 PM", status: "Completed" },
  { id: 3, doctor: "Dr. Amit Patel", date: "2025-03-10", time: "11:15 AM", status: "Upcoming" },
]

export default function AppointmentList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">{appointment.doctor}</h3>
                <p className="text-sm text-gray-500">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
              <Badge variant={appointment.status === "Upcoming" ? "default" : "secondary"}>{appointment.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

