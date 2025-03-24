import Image from "next/image"
import { Star, Phone, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchResult {
  id: number
  name: string
  rating: number
  reviews: number
  verified: boolean
  quickResponse?: boolean
  trending?: boolean
  location: string
  image: string
  categories: string[]
  phone: string
  recentlyActive: boolean
}

interface SearchResultCardProps {
  result: SearchResult
}

export default function SearchResultCard({ result }: SearchResultCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="w-32 h-32 relative rounded-lg overflow-hidden flex-shrink-0">
          <Image src={result.image || "/placeholder.svg"} alt={result.name} layout="fill" objectFit="cover" />
        </div>
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2">
                {result.name}
                {result.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{result.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({result.reviews} reviews)</span>
                {result.quickResponse && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Quick Response</span>
                )}
                {result.trending && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Trending</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">{result.location}</p>
              <div className="flex gap-2 mt-2">
                {result.categories.map((category) => (
                  <span key={category} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Phone className="h-4 w-4 mr-1" />
              {result.phone}
            </Button>
            <Button size="sm" variant="outline" className="border-green-600 text-green-600">
              <MessageSquare className="h-4 w-4 mr-1" />
              WhatsApp
            </Button>
            <Button size="sm" variant="outline" className="border-blue-600 text-blue-600">
              Send Enquiry
            </Button>
          </div>
          {result.recentlyActive && <p className="text-xs text-gray-500 mt-2">✓ Recently actively engaged</p>}
        </div>
      </div>
    </div>
  )
}

