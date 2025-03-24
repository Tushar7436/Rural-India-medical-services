import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Upload } from "lucide-react"

const records = [
  { id: 1, name: "Blood Test Results", date: "2025-02-10", type: "Lab Report" },
  { id: 2, name: "X-Ray Report", date: "2025-01-25", type: "Radiology" },
  { id: 3, name: "Prescription", date: "2025-02-15", type: "Medication" },
]

export default function MedicalRecordsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Medical Records</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button className="w-full">
            <Upload className="w-5 h-5 mr-2" />
            Upload New Record
          </Button>
          {records.map((record) => (
            <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                <div>
                  <h3 className="font-semibold">{record.name}</h3>
                  <p className="text-sm text-gray-500">
                    {record.date} - {record.type}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

