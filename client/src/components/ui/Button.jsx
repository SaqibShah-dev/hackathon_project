import clsx from 'clsx';

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  outline: 'border border-slate-300 hover:bg-slate-100',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

export default function Button({ variant = 'primary', className, loading, children, ...props }) {
  return (
    <button
      disabled={loading || props.disabled}
      className={clsx('rounded-lg px-4 py-2 text-sm font-medium transition disabled:opacity-60', variants[variant], className)}
      {...props}
    >
      {loading ? 'Please wait...' : children}
    </button>
  );
}
