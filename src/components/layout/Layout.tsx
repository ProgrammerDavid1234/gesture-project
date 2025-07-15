import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onToggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        <main className="flex-1 lg:ml-0">
          {children}
        </main>
      </div>
    </div>
  );
};