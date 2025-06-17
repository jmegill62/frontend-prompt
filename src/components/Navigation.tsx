
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  FolderOpen, 
  Clock, 
  Settings 
} from "lucide-react";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Study Activities",
    href: "/study-activities",
    icon: BookOpen,
  },
  {
    name: "Words",
    href: "/words",
    icon: FileText,
  },
  {
    name: "Word Groups",
    href: "/groups",
    icon: FolderOpen,
  },
  {
    name: "Sessions",
    href: "/sessions",
    icon: Clock,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-gray-900">日本語学習</h1>
            <span className="text-sm text-gray-500">Japanese Learning</span>
          </div>
          
          <div className="flex space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href || 
                (item.href !== "/dashboard" && location.pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
