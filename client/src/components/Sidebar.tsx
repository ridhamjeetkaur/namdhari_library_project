import { useState } from "react";
import {
  Home,
  Grid,
  Book,
  Download,
  Headphones,
  Heart,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState("Discover");

  const menuItems = [
    { icon: Home, label: "Discover" },
    { icon: Grid, label: "Category" },
    { icon: Book, label: "My Library" },
    { icon: Download, label: "Download" },
    { icon: Headphones, label: "Audio Books" },
    { icon: Heart, label: "Favourite" },
  ];

  const bottomItems = [
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Support" },
    { icon: LogOut, label: "Logout" },
  ];

  return (
    <>
      {/* Mobile Overlay - only shows on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          bg-white w-64 h-full shadow-lg flex flex-col
          fixed top-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:z-auto md:shadow-none md:border-r md:border-gray-200 md:h-screen
        `}
      >
        {/* Mobile Close Button - only visible on mobile */}
        <div className="flex justify-end md:hidden p-4 border-b border-gray-100">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Logo/Brand Area (optional) */}
        <div className="hidden md:block p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Your App</h2>
        </div>

        {/* Menu Items */}
        <div className="flex-1 pt-4 overflow-y-auto">
          {menuItems.map((item) => (
            <div
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`flex items-center space-x-3 px-6 py-3 cursor-pointer transition-colors ${
                activeItem === item.label
                  ? "bg-orange-100 text-brown-300 border-r-4 border-orange-300"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Items */}
        <div className="border-t border-gray-100 py-4">
          {bottomItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center space-x-3 px-6 py-3 cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;