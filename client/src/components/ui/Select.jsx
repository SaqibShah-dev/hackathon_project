import { forwardRef } from "react";
import clsx from "clsx";

const Select = forwardRef(function Select(
  { label, error, options = [], placeholder = "Select an option", className, ...props },
  ref
) {
  return (
    <label className="block text-sm">
      {label && <span className="mb-1 block font-medium">{label}</span>}

      <select
        ref={ref}
        className={clsx(
          "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20",
          className
        )}
        {...props}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      )}
    </label>
  );
});

export default Select;