import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroup,
} from "@/components/ui/sidebar"
import '../index.css'
import { Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"


export function AppSidebar() {

    return (
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              Created by me
            </SidebarGroupLabel>
            <SidebarMenu >
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Star fill="white"/>
                  Favorite
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
}
