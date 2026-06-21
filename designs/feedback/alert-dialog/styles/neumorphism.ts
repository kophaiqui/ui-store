import type { AlertDialogStyleConfig } from "./default";
export type { AlertDialogStyleConfig };

export const neumorphismStyle: AlertDialogStyleConfig = {
  backdrop: "fixed inset-0 bg-[#e8ecf1]/70 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-3xl bg-[#e8ecf1] shadow-[12px_12px_24px_rgba(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.8)] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  },
  title: "text-base font-semibold text-slate-800",
  description: "mt-2 mb-5 text-sm text-slate-600 leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn: "rounded-2xl bg-[#e8ecf1] px-4 py-2 text-sm font-medium text-slate-600 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all duration-150 hover:shadow-[1px_1px_3px_rgba(163,177,198,0.4),-1px_-1px_3px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] focus-visible:outline-none",
  confirmBtn: "rounded-2xl bg-[#e8ecf1] px-4 py-2 text-sm font-semibold text-blue-600 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all duration-150 hover:shadow-[1px_1px_3px_rgba(163,177,198,0.4),-1px_-1px_3px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] focus-visible:outline-none disabled:opacity-60",
  confirmBtnDestructive: "rounded-2xl bg-[#e8ecf1] px-4 py-2 text-sm font-semibold text-red-500 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all duration-150 active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] focus-visible:outline-none disabled:opacity-60",
  trigger: "rounded-2xl bg-[#e8ecf1] px-4 py-2 text-sm font-semibold text-slate-700 shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] transition-all duration-150 hover:shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] focus-visible:outline-none",
};
