export default function Pagination({ page, setPage, totalPages }) {
  const safeTotal = Number.isFinite(totalPages) ? totalPages : 1;

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(safeTotal - 1, p + 1));

  return (
    <div className="flex items-center justify-center gap-3 mt-6">

      <button
        onClick={goPrev}
        disabled={page === 0}
        className="px-3 py-1.5 rounded-lg border border-gray-300 bg-white text-gray-700
                   hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      <div className="px-4 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-sm">
        Page <span className="font-semibold">{page + 1}</span> / {safeTotal}
      </div>

      <button
        onClick={goNext}
        disabled={page >= safeTotal - 1}
        className="px-3 py-1.5 rounded-lg border border-gray-300 bg-white text-gray-700
                   hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>

    </div>
  );
}