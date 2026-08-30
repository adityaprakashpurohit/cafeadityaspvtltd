import React from 'react';
import { useToast } from '../context/ToastContext';
import { CheckCircle2, Info, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Toasts = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg bg-white border transform transition-all duration-300 translate-y-0 opacity-100 min-w-[280px]",
            toast.type === 'success' ? 'border-brand-green/20' : 'border-brand-beige'
          )}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-brand-green" />
          ) : (
            <Info className="w-5 h-5 text-brand-terracotta" />
          )}
          <p className="text-brand-espresso text-sm font-medium flex-grow">
            {toast.message}
          </p>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-brand-espresso/50 hover:text-brand-espresso transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toasts;
