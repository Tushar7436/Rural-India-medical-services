import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import SearchResultCard from "@/components/search-result-card"
import GetListForm from "@/components/get-list-form"

const mockResults = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    rating: 4.8,
    reviews: 125,
    verified: true,
    quickResponse: true,
    location: "NH, Nagpur Hyd Nagpur, Hyderabad",
    image: "/placeholder.svg",
    categories: ["General Physician", "Family Doctor"],
    phone: "0123456789",
    recentlyActive: true,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    rating: 4.9,
    reviews: 98,
    verified: true,
    trending: true,
    location: "Shivam Nagar Colony Shamshabad, Hyderabad",
    image: "/placeholder.svg",
    categories: ["General Physician", "Pediatrician"],
    phone: "0123456798",
    recentlyActive: true,
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    rating: 4.7,
    reviews: 156,
    verified: true,
    trending: true,
    location: "Jubilee Hills, Hyderabad",
    image: "/placeholder.svg",
    categories: ["General Physician", "Diabetologist"],
    phone: "0123456797",
    recentlyActive: true,
  },
  {
    id: 4,
    name: "Dr. Sarah Khan",
    rating: 4.6,
    reviews: 89,
    verified: true,
    quickResponse: true,
    location: "Banjara Hills, Hyderabad",
    image: "/placeholder.svg",
    categories: ["General Physician", "Cardiologist"],
    phone: "0123456796",
    recentlyActive: true,
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    rating: 4.8,
    reviews: 112,
    verified: true,
    trending: true,
    location: "Gachibowli, Hyderabad",
    image: "/placeholder.svg",
    categories: ["General Physician", "Internal Medicine"],
    phone: "0123456795",
    recentlyActive: true,
  },
]

export default function SearchResults() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container py-3">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <Button variant="outline" size="sm" className="text-sm">
                Top Rated
              </Button>
              <Button variant="outline" size="sm" className="text-sm">
                Quick Response
              </Button>
              <Button variant="outline" size="sm" className="text-sm">
                JD Verified
              </Button>
            </div>
            <Button variant="outline" size="sm" className="text-sm">
              Ratings <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Checkbox id="deals" />
              <label htmlFor="deals" className="text-sm">
                Deals
              </label>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              All Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">Search Results</h1>
            <p className="text-gray-600">Showing results for doctors in Hyderabad</p>
            {mockResults.map((result) => (
              <SearchResultCard key={result.id} result={result} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <GetListForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

