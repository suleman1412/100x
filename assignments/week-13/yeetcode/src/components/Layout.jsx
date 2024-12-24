import { AppSidebar } from "@/components/AppSidebar";
import {
  SidebarProvider,
  SidebarTrigger, SidebarInset
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator"
import FavoriteCard from "./FavoriteCard";

export default function Layout() {
  return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
        </div>
        </SidebarInset>
      </SidebarProvider>

  );
}