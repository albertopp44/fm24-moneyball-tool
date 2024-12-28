export default function PlayerList() {
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="text-left w-full border-collapse">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Position</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Value</th>
          </tr>
        </thead>
        <tbody>
          {/* Add player rows here */}
        </tbody>
      </table>
    </div>
  )
}

