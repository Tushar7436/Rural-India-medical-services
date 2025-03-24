import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const featuredServices = [
  {
    title: "Telemedicine Consultations",
    description: "Connect with doctors remotely for non-emergency medical advice.",
    image: "/telemedicine.jpg",
  },
  {
    title: "Mobile Health Camps",
    description: "Regular health check-ups and vaccinations in your village.",
    image: "/health-camp.jpg",
  },
  {
    title: "Ambulance Services",
    description: "24/7 emergency transport to the nearest hospital.",
    image: "/ambulance.jpg",
  },
]

export default function FeaturedServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredServices.map((service, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <CardDescription>{service.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

