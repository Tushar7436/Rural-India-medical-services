import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Bihar",
    quote:
      "MedSeva helped me find a specialist for my father when we couldn't travel to the city. The telemedicine service was a lifesaver!",
  },
  {
    name: "Priya Sharma",
    location: "Uttar Pradesh",
    quote:
      "The mobile health camp in our village provided free check-ups and vaccinations for our children. It's a great initiative!",
  },
  {
    name: "Anita Patel",
    location: "Gujarat",
    quote: "I used the emergency services, and the ambulance arrived quickly. The staff was professional and caring.",
  },
]

export default function TestimonialSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-dark-gray mb-8">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{testimonial.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            </CardHeader>
            <CardContent>
              <p className="italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

