export default function Pagination({ page, setPage, totalPages }) {
  const safeTotal = Number.isFinite(totalPages) ? totalPages : 1;

  const goPrev = () => {
    setPage((p) => Math.max(0, p - 1));
  };

  const goNext = () => {
    setPage((p) => Math.min(safeTotal - 1, p + 1));
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">

      <button
        onClick={goPrev}
        disabled={page === 0}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {Array.from({ length: safeTotal }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`px-3 py-1 rounded ${
            page === i ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={goNext}
        disabled={page >= safeTotal - 1}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}