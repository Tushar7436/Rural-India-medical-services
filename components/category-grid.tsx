import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Ayurvedic Doctors", icon: "/icons/ayurvedic.svg" },
  { name: "Chest Specialists", icon: "/icons/chest.svg" },
  { name: "Dentists", icon: "/icons/dental.svg" },
  { name: "Dieticians", icon: "/icons/diet.svg" },
  { name: "Gastroenterologists", icon: "/icons/gastro.svg" },
  { name: "Homeopathic Doctors", icon: "/icons/homeopathy.svg" },
  { name: "Neurosurgeons", icon: "/icons/neuro.svg" },
  { name: "Ophthalmologists", icon: "/icons/eye.svg" },
  { name: "Physiotherapists", icon: "/icons/physio.svg" },
  { name: "Bone & Joints Doctors", icon: "/icons/ortho.svg" },
  { name: "General Physicians", icon: "/icons/general.svg" },
  { name: "Neonatologists", icon: "/icons/baby.svg" },
  { name: "Oncologists", icon: "/icons/cancer.svg" },
  { name: "Orthopedic Doctors", icon: "/icons/bone.svg" },
  { name: "Cardiologists", icon: "/icons/heart.svg" },
  { name: "Cosmetic Surgeons", icon: "/icons/cosmetic.svg" },
  { name: "Diabetologists", icon: "/icons/diabetes.svg" },
  { name: "Eye Specialists", icon: "/icons/eye.svg" },
  { name: "Gynecologists & Obstetricians", icon: "/icons/gynec.svg" },
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/search?category=${encodeURIComponent(category.name)}`}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <Image
            src={category.icon || "/placeholder.svg"}
            alt={category.name}
            width={48}
            height={48}
            className="mb-2"
          />
          <span className="text-center text-sm font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

