import { CalendarDays, Thermometer, Coffee, Plane, Activity } from "lucide-react";

export const leaveTypeConfig = {
    leave: {
        label: "Annual",
        icon: CalendarDays,
        bg: "bg-indigo-50",
        bgStrong: "bg-indigo-100",
        text: "text-indigo-700",
        border: "border-indigo-200",
        iconColor: "text-indigo-500",
        barColor: "bg-indigo-400",
        dot: "bg-indigo-400",
    }
};

export const categoryConfig = {
    sick: {
        label: "Sick",
        icon: Thermometer,
        badge: "bg-rose-50 text-rose-700 border-rose-200",
        bg: "bg-rose-50",
        text: "text-rose-700",
        dot: "bg-rose-500",
        barColor: "bg-rose-400",
    },
    casual: {
        label: "Casual",
        icon: Coffee,
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        bg: "bg-amber-50",
        text: "text-amber-700",
        dot: "bg-amber-500",
        barColor: "bg-amber-400",
    },
    personal: {
        label: "Personal",
        icon: Plane,
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        dot: "bg-emerald-500",
        barColor: "bg-emerald-400",
    },
    emergency: {
        label: "Emergency",
        icon: Activity,
        badge: "bg-red-50 text-red-700 border-red-200",
        bg: "bg-red-50",
        text: "text-red-700",
        dot: "bg-red-500",
        barColor: "bg-red-400",
    }
};

export const statusConfig = {
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
    rejected: "bg-rose-50 text-rose-700 border-rose-200",
};

export const roleColors = {
    admin: "bg-indigo-50 text-indigo-700 border-indigo-200",
    manager: "bg-sky-50 text-sky-700 border-sky-200",
    employee: "bg-slate-100 text-slate-600 border-slate-200",
};
