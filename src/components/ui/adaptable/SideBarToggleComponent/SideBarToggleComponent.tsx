import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@@/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

interface Props{
  content : React.ReactNode
  trigger : React.ReactNode
  side    :"left" | "right"
}
export const SideBarToggleComponent = ({content, trigger, side}:Props) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar side={side}>
        <SidebarContent>
          {content}
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger icon={trigger}/>
    </SidebarProvider>
  )
}
