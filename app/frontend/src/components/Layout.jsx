import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import {
    LayoutDashboard,
    CalendarPlus,
    FileText,
    Users,
    CalendarDays,
    ClipboardCheck,
    Menu,
    X,
    Palmtree,
} from "lucide-react";
import { Badge } from "../components/ui/badge";

const navItems = [
    { to: "/", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/apply-leave", icon: CalendarPlus, label: "Apply Leave" },
    { to: "/my-leaves", icon: FileText, label: "My Leaves" },
    { to: "/team-leaves", icon: ClipboardCheck, label: "Team Leaves", roles: ["admin", "manager"] },
    { to: "/calendar", icon: CalendarDays, label: "Calendar" },
    { to: "/employees", icon: Users, label: "Employees", roles: ["admin"] },
    { to: "/holidays", icon: Palmtree, label: "Company Holidays", roles: ["admin"] },
];

const roleColors = {
    admin: "bg-indigo-50 text-indigo-700 border-indigo-200",
    manager: "bg-sky-50 text-sky-700 border-sky-200",
    employee: "bg-slate-100 text-slate-600 border-slate-200",
};

export default function Layout({ children }) {
    const { currentUser, logout } = useUser();

    // Limit mobile bottom nav to first 5 items to fit comfortably
    const filteredNav = navItems.filter(
        (item) => !item.roles || (currentUser && item.roles.includes(currentUser.role))
    );
    const bottomNav = filteredNav.slice(0, 5);

    const SidebarContent = () => (
        <>
            {/* Logo */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-wide text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    LeaveDesk
                </h1>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Workspace</p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 flex-1">
                {filteredNav.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-200 ${isActive ? "bg-slate-800 text-white shadow-sm" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`
                        }
                        data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            {/* User Info & Logout */}
            <div className="mt-auto pt-6 border-t border-slate-700/50">
                {currentUser && (
                    <div className="mb-4 flex flex-col items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold mb-2">
                            {currentUser.name.charAt(0)}
                        </div>
                        <p className="text-sm font-semibold text-white tracking-wide">{currentUser.name}</p>
                        <p className="text-xs text-slate-400 mb-2">{currentUser.department}</p>
                        <Badge className={`text-[10px] border ${roleColors[currentUser.role]}`}>
                            {currentUser.role}
                        </Badge>
                    </div>
                )}
                <button
                    onClick={logout}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-rose-500/10 hover:border-rose-500/20 hover:text-rose-400 transition-colors shadow-sm"
                >
                    Sign out
                </button>
            </div>
        </>
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Desktop Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-[#0F172A] border-r border-[#1e293b] p-6 flex-col gap-2 z-50 hidden md:flex shadow-2xl">
                <SidebarContent />
            </aside>

            {/* Mobile Header (Hidden on Desktop) */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-[#0F172A] z-40 px-5 py-4 flex items-center justify-between shadow-md">
                <h1 className="text-lg font-bold tracking-wide text-white" style={{ fontFamily: 'Inter, sans-serif' }}>LeaveDesk</h1>
                <button onClick={logout} className="text-slate-400 hover:text-white transition-colors">
                    <X className="w-5 h-5" /> {/* Use X as a clear icon or logic to logout on mobile */}
                </button>
            </div>

            {/* Bottom Tab Navigation for Mobile */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] z-50 pb-safe">
                <div className="flex justify-around items-center px-2 py-3">
                    {bottomNav.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === "/"}
                            className={({ isActive }) =>
                                `flex flex-col items-center gap-1 min-w-[60px] transition-all duration-200 ${isActive ? "text-indigo-600 scale-105" : "text-slate-400"}`
                            }
                        >
                            <item.icon className="w-5 h-5" strokeWidth={2.5} />
                            <span className="text-[10px] font-semibold tracking-wide truncate">{item.label.split(" ")[0]}</span>
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <main className="md:ml-64 min-h-screen pt-16 md:pt-0 pb-20 md:pb-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-10">
                    {children}
                </div>
            </main>
        </div>
    );
}