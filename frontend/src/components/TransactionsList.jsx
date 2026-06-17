export default function TransactionsList({ transactions, loadMore }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          Transactions
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Description
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {transactions?.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 text-sm text-gray-700">
                  {transaction.type}
                </td>

                <td
                  className={`px-4 py-3 text-sm font-medium ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {transaction.amount}€
                </td>

                <td className="px-4 py-3 text-sm text-gray-700">
                  {transaction.category}
                </td>

                <td className="px-4 py-3 text-sm text-gray-500">
                  {transaction.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}