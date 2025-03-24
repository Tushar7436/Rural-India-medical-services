"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function EmergencyManagement() {
  const [onCall, setOnCall] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emergency/On-Call Management</CardTitle>
        <CardDescription>Manage your availability for emergency services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="on-call" checked={onCall} onCheckedChange={setOnCall} />
            <Label htmlFor="on-call">Available for Emergency Calls</Label>
          </div>
          <p className="text-sm text-gray-500">
            {onCall
              ? "You are currently available for emergency calls. You will be notified of any urgent requests."
              : "You are not available for emergency calls. Toggle the switch to make yourself available."}
          </p>
          <Button variant={onCall ? "destructive" : "default"}>
            {onCall ? "End On-Call Shift" : "Start On-Call Shift"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

