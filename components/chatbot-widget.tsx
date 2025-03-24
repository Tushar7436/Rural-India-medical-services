"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open Chatbot</span>
        </Button>
      )}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">MedSeva Assistant</h3>
            <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon" className="h-6 w-6">
              <X className="h-4 w-4" />
              <span className="sr-only">Close Chatbot</span>
            </Button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Chatbot messages will go here */}
            <p className="text-center text-muted-foreground">Welcome to MedSeva! How can I assist you today?</p>
          </div>
          <div className="p-4 border-t">
            <Input type="text" placeholder="Type your message..." className="w-full" />
          </div>
        </div>
      )}
    </>
  )
}

