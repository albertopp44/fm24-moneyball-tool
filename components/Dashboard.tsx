import Header from './Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <MainContent />
      </div>
    </>
  )
}

