import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../api/axios.js';
import { useAuthStore } from '../store/authStore.js';
import { getError } from '../utils/getError.js';
import Card from '../components/ui/Card.jsx';
import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';

export default function Register() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const setAuth = useAuthStore((s) => s.setAuth);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { data } = await api.post('/auth/register', values);
      setAuth(data);
      navigate('/dashboard');
    } catch (e) {
      toast.error(getError(e));
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <h2 className="mb-4 text-xl font-bold">Create account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Name" error={errors.name?.message} {...register('name', { required: 'Name is required' })} />
        <Input label="Email" type="email" error={errors.email?.message} {...register('email', { required: 'Email is required' })} />
        <Input label="Password" type="password" error={errors.password?.message} {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })} />
        <Button type="submit" loading={isSubmitting} className="w-full">Register</Button>
      </form>
      <p className="mt-4 text-center text-sm">Have an account? <Link to="/login" className="text-brand">Login</Link></p>
    </Card>
  );
}
