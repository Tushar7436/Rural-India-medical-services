import Link from "next/link"

const specialties = [
  "24 Hours Dentists",
  "24 Hours Veterinary Doctors",
  "Acupressure Doctors",
  "Acupressure Therapists",
  "Acupressure Therapists For Home Visit",
  "Acupuncture Doctors",
  "Acupuncture Therapists",
  "Alcohol De-Addiction",
  "Allopathic Doctors",
  "Andrologists",
  "Appendix Doctors",
  "Audiologists",
  "Ayurvedic Doctors",
  "Ayurvedic Doctors For Hair Fall Treatment",
  "Ayurvedic Doctors For Piles Treatment",
  "Ayurvedic Doctors For Skin Treatment",
  "Ayurvedic Sexologists",
  "Bariatric Surgeons",
  "Bone & Joints Doctors",
  "Breast Specialists",
  "Cardiac Surgeons",
  "Cardiologists",
  "Chest Specialists",
  "Child Specialist Doctors",
  "Chiropractors",
  "Clinical Nutritionists",
  "Clinical Psychologists",
  "Cosmetic Surgeons",
  "Cosmetologists",
  "Dental Surgeons",
  "Dentists",
  "Dermatologists",
  "Dermatosurgeons",
  "Diabetologists",
  "Dietitians",
  "Doctors Available 24 Hours On Phone",
  "Doctors For Mental Illness",
  "Doctors for Allergy",
  "Doctors for Arthritis Treatment",
  "Doctors for Asthma Treatment",
  "Doctors for Breast Cancer Treatment",
  "Doctors for Breast Enlargement",
  "Doctors for Breast Implant",
  "Doctors for Burn Surgery",
  "Doctors for Cataract Operation",
  "Doctors for Colonoscopy",
  "Doctors for Gallstone Removal",
  "Doctors for HIV Aids Treatment",
  "Doctors for Hair Loss Treatment",
  "Doctors for Hernia",
  "Doctors for Jaundice",
  "Doctors for Kidney Stone Laser Surgery",
]

export default function ExploreAtoZ() {
  return (
    <section className="py-12 bg-off-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Explore more A to Z</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {specialties.map((specialty) => (
            <Link
              key={specialty}
              href={`/search?specialty=${encodeURIComponent(specialty)}`}
              className="bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 text-sm text-gray-800 hover:text-primary"
            >
              {specialty}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

