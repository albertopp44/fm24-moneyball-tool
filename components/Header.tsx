import { Bell, Settings } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Moneyball FM24 Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell className="h-6 w-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Settings className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

