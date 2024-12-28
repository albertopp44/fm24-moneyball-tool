import { Home, Users, DollarSign, BarChart2 } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Players', icon: Users, href: '/players' },
  { name: 'Finances', icon: DollarSign, href: '/finances' },
  { name: 'Analytics', icon: BarChart2, href: '/analytics' },
]

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            <item.icon className="inline-block mr-2 h-6 w-6" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

