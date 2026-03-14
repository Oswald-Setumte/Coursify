import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, XCircle, Info, X } from "lucide-react";

// Define the shape of our "Dummy Data" or State
export type StatusState = {
  type: "success" | "error" | "warning" | "info";
  message: string;
} | null;

interface StatusProps {
  status: StatusState;
  onClose: () => void;
  autoClose?: number;
}

const statusStyles = {
  success: {
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: CheckCircle2,
  },
  error: {
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
    icon: XCircle,
  },
  warning: {
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: AlertCircle,
  },
  info: {
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: Info,
  },
};

export const StatusMessage: React.FC<StatusProps> = ({
  status,
  onClose,
  autoClose = 5000,
}) => {
  // Only render if there is a message
  useEffect(() => {
    if (status) {
      const timer = setTimeout(onClose, autoClose);
      return () => clearTimeout(timer);
    }
  }, [status, onClose, autoClose]);

  if (!status) return null;

  const style = statusStyles[status.type];
  const Icon = style.icon;

  return (
    <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-right-full duration-300">
      <div
        className={`flex items-start gap-4 p-4 rounded-xl border shadow-lg max-w-sm ${style.bg} ${style.border}`}
      >
        {/* Icon */}
        <div className={`mt-0.5 ${style.color}`}>
          <Icon size={20} strokeWidth={2.5} />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <p className={`text-sm font-semibold capitalize ${style.color}`}>
            {status.type}
          </p>
          <p className={`text-sm opacity-90 leading-relaxed ${style.color}`}>
            {status.message}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`p-1 rounded-md transition-colors hover:bg-black/5 ${style.color}`}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
