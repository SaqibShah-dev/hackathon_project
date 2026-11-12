import clsx from "clsx";

export default function ErrorState({
  title = "Something went wrong",
  description = "Please try again or refresh the page.",
  onRetry,
  className
}) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 px-6 py-10 text-center",
        className
      )}
    >
      <div className="mb-3 text-3xl">⚠️</div>
      <h3 className="text-lg font-semibold text-red-700">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-red-600">{description}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Try again
        </button>
      )}
    </div>
  );
}