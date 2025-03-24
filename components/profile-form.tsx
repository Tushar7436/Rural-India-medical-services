"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfileForm() {
  const [providerType, setProviderType] = useState("individual")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Provider Profile</CardTitle>
        <CardDescription>Manage your profile and listing information</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label>Provider Type</Label>
            <RadioGroup defaultValue="individual" onValueChange={setProviderType} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="individual" />
                <Label htmlFor="individual">Individual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="organization" id="organization" />
                <Label htmlFor="organization">Organization</Label>
              </div>
            </RadioGroup>
          </div>

          {providerType === "individual" ? (
            <>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div>
                <Label htmlFor="specialization">Specialization</Label>
                <Input id="specialization" placeholder="Enter your medical specialization" />
              </div>
            </>
          ) : (
            <>
              <div>
                <Label htmlFor="orgName">Organization Name</Label>
                <Input id="orgName" placeholder="Enter organization name" />
              </div>
              <div>
                <Label htmlFor="registration">Registration/License Number</Label>
                <Input id="registration" placeholder="Enter registration or license number" />
              </div>
            </>
          )}

          <div>
            <Label htmlFor="contact">Contact Number</Label>
            <Input id="contact" type="tel" placeholder="Enter contact number" />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter email address" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" placeholder="Enter your full address" />
          </div>
          <div>
            <Label htmlFor="services">Services Offered</Label>
            <Textarea id="services" placeholder="List the services you offer" />
          </div>
          <div>
            <Label htmlFor="hours">Operating Hours</Label>
            <Textarea id="hours" placeholder="Specify your operating hours" />
          </div>
          <Button type="submit">Save Profile</Button>
        </form>
      </CardContent>
    </Card>
  )
}

