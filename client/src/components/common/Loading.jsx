import clsx from "clsx";

export default function Loading({ className, message = "Loading..." }) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-3 py-10 text-slate-500",
        className
      )}
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-brand" />
      <p className="text-sm">{message}</p>
    </div>
  );
}