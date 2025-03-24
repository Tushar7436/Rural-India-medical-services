"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [isProvider, setIsProvider] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const mobile = formData.get("mobile") as string

    // In a real application, you would validate the input and authenticate the user here

    if (isProvider) {
      router.push("/provider-dashboard")
    } else {
      router.push("/dashboard")
    }

    // In a real application, you would perform authentication here
    // and only redirect after successful login
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to MedSeva</CardTitle>
          <CardDescription>Enter your details to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" name="mobile" type="tel" placeholder="Enter your mobile number" required />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isProvider"
                checked={isProvider}
                onCheckedChange={(checked) => setIsProvider(checked as boolean)}
              />
              <Label htmlFor="isProvider">I am a healthcare service provider</Label>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

