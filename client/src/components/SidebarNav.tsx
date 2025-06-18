import { SidebarLink } from "@/constants/data"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { NavLink } from "react-router-dom"


const SidebarNav = () => {
  return (
    <SidebarProvider>
      <SidebarTrigger className="xl:hidden md:hidden w-14 size-20" />
      <Sidebar>
        <SidebarHeader className="gap-3 ml-10 mt-1 flex text-2xl font-extrabold tracking-tight text-white">
            Sabilillah
        </SidebarHeader>
        <hr className="border border-green-950" />
        <SidebarContent>
            <SidebarMenu className="pt-5">
                {SidebarLink.map((link) => (
                    <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton asChild>
                            <NavLink 
                                to={link.url}
                                className='px-10 py-7 gap-4'
                            >
                                <link.icon />
                                <span>{link.title}</span>
                            </NavLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarContent>
        <hr className="border border-green-950 border-b-green-950" />
        <SidebarFooter className="m-2 text-center font-sans text-gray-500 text-[10px] hover:shadow-green-500">
            All Right Reserved © Sabilillah Campus
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}

export default SidebarNav
