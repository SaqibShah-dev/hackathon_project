import { forwardRef } from "react";
import clsx from "clsx";

const Textarea = forwardRef(function Textarea(
  { label, error, className, ...props },
  ref
) {
  return (
    <label className="block text-sm">
      {label && <span className="mb-1 block font-medium">{label}</span>}

      <textarea
        ref={ref}
        rows={4}
        className={clsx(
          "w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20",
          className
        )}
        {...props}
      />

      {error && (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      )}
    </label>
  );
});

export default Textarea;