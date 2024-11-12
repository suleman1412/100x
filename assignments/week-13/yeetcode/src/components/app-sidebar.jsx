import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter
} from "@/components/ui/sidebar"
import { useState } from "react"

export function AppSidebar({ ...props }) {
    const [options, setOptions] = useState(
      {
        title: "Favorites",
        items: [{
          title: "Sule's Favs",
          url: "#"
        }]
      }
    )

    const addItem = (newItem) => {
      setOptions(prevOptions => ({
        ...prevOptions,
        items: [...prevOptions.items, newItem] // Add new item to the items array
      }));
    };
    const removeItem = (itemTitle) => {
      setOptions(prevOptions => ({
        ...prevOptions,
        items: prevOptions.items.filter(item => item.title !== itemTitle) // Remove item by title
      }));
    };
    const updateItem = (itemTitle, updatedItem) => {
      setOptions(prevOptions => ({
        ...prevOptions,
        items: prevOptions.items.map(item => 
          item.title === itemTitle ? updatedItem : item // Update item if title matches
        )
      }));
    };
    const handleClick = () => {
      // Example of adding a new item
      addItem({ title: "New Favorite", url: "#" });
    };
    return (
      <div className="bg-[var(--background)]">
        <Sidebar {...props}>
          <SidebarHeader>
            My Lists
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>{options.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {options.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                    <SidebarMenuButton onClick={handleClick}>
                      Add More
                    </SidebarMenuButton>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <p className="text-xl font-montserrat ">
              Suleman Karigar
            </p>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
      </div>

  )
}
