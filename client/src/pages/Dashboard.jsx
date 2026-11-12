import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Trash2 } from 'lucide-react';
import { useItemStore } from '../store/itemStore.js';
import { useAuthStore } from '../store/authStore.js';
import Card from '../components/ui/Card.jsx';
import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';

const NEXT = { todo: 'doing', doing: 'done', done: 'todo' };

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);
  const { items, loading, fetchAll, create, update, remove } = useItemStore();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const onSubmit = async (values) => {
    if (await create(values)) reset();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>

      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1"><Input label="Title" {...register('title', { required: true })} /></div>
          <div className="flex-1"><Input label="Description" {...register('description')} /></div>
          <Button type="submit" loading={isSubmitting}>Add</Button>
        </form>
      </Card>

      {loading ? <p>Loading...</p> : (
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <Card key={item._id} className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
                <button
                  onClick={() => update(item._id, { status: NEXT[item.status] })}
                  className="mt-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium hover:bg-slate-200"
                >
                  {item.status}
                </button>
              </div>
              <button onClick={() => remove(item._id)} className="text-red-600 hover:text-red-800" aria-label="Delete">
                <Trash2 size={18} />
              </button>
            </Card>
          ))}
          {!items.length && <p className="text-slate-500">No items yet. Add one above.</p>}
        </div>
      )}
    </div>
  );
}
