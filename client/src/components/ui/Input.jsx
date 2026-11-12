import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, error, ...props }, ref) {
  return (
    <label className="block text-sm">
      {label && <span className="mb-1 block font-medium">{label}</span>}
      <input
        ref={ref}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        {...props}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
});
export default Input;
