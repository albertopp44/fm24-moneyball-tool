import PlayerList from './PlayerList'
import Filters from './Filters'
import DataVisualization from './DataVisualization'

export default function MainContent() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 text-3xl font-medium">Player Analysis</h3>
        <div className="mt-8">
          <Filters />
          <div className="flex flex-wrap -mx-6">
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <PlayerList />
            </div>
            <div className="w-full px-6 sm:w-1/2 xl:w-2/3">
              <DataVisualization />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

