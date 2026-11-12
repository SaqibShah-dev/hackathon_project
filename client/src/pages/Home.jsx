import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button.jsx';

export default function Home() {
  return (
    <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="py-16 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">Build fast. Demo well.</h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-600">
        Vite + React + Tailwind + Node + MongoDB starter, ready for your hackathon idea.
      </p>
      <Link to="/register"><Button className="mt-8">Create account</Button></Link>
    </motion.section>
  );
}
