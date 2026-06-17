export default function Pagination({ page = 0, setPage, totalPages = 1 }) {
  const safeTotal = Number.isFinite(totalPages) && totalPages > 0 ? totalPages : 1;

  const currentPage = Number.isFinite(page) ? page : 0;

  const goPrev = () => {
    setPage((prev) => {
      const safePrev = Number.isFinite(prev) ? prev : 0;
      return Math.max(0, safePrev - 1);
    });
  };

  const goNext = () => {
    setPage((prev) => {
      const safePrev = Number.isFinite(prev) ? prev : 0;
      return Math.min(safeTotal - 1, safePrev + 1);
    });
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">

      <button
        onClick={goPrev}
        disabled={currentPage <= 0}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {Array.from({ length: safeTotal }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`px-3 py-1 rounded ${
            currentPage === i ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={goNext}
        disabled={currentPage >= safeTotal - 1}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}