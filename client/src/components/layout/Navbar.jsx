import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Rocket } from 'lucide-react';
import { useAuthStore } from '../../store/authStore.js';
import Button from '../ui/Button.jsx';

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-brand">
          <Rocket size={20} /> HackApp
        </Link>
        <div className="flex items-center gap-3 text-sm">
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Button variant="outline" onClick={() => { logout(); navigate('/'); }}>
                <LogOut size={14} className="mr-1 inline" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register"><Button>Get started</Button></Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
