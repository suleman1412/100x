import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import FavoriteCard from "./FavoriteCard"
import QuestionsCard from "./QuestionsCard"

export default function Layout() {
  return (
    <SidebarProvider >
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="flex w-[70vw]  h-[70vh] justify-evenly">
            <FavoriteCard  />
            <QuestionsCard />
        </div>
      </main>
    </SidebarProvider>
  )
}
