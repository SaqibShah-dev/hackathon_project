import clsx from "clsx";

export default function EmptyState({
  title = "Nothing here yet",
  description = "Create your first item to get started.",
  actionLabel,
  onAction,
  className
}) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center",
        className
      )}
    >
      <div className="mb-3 text-3xl">📭</div>
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-4 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}