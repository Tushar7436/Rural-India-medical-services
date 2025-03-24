"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function GetListForm() {
  const [serviceType, setServiceType] = useState("new-furniture")

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Get the List of Top Doctors</h3>
      <p className="text-sm text-gray-600 mb-6">We'll send you relevant details & services for free</p>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label>What type of helthcare services are you looking for?</Label>
          <RadioGroup defaultValue="new-furniture" onValueChange={setServiceType} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="new-furniture" id="new-furniture" />
              <Label htmlFor="new-furniture">Ongoing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="repair" id="repair" />
              <Label htmlFor="repair">Past</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" placeholder="Enter mobile number" />
          </div>
        </div>

        <Button className="w-full">Get Best Advice</Button>
      </div>
    </div>
  )
}

