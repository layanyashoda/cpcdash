"use client";

import Image from "next/image";
import * as React from "react";
import Link from "next/link"; // Import the Link component
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";

import {
  IconPlaneDeparture,
  IconChartBar,
  IconDropletStar,
  IconDroplets,
  IconCheckupList,
  IconCropLandscape,
  IconSettings,
  IconDots,
} from "@tabler/icons-react";

// Update the data with descriptive URLs
const data = {
  user: {
    name: "Nadeera Rodrigo",
    email: "nadeerar@ceypetco.gov.lk",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Jet A-1 Sales", url: "/jet-a-1-sales", icon: IconPlaneDeparture },
    { title: "Landed Cost", url: "/landed-cost", icon: IconChartBar },
    { title: "Platts", url: "/platts", icon: IconDropletStar },
    { title: "Oil balance Summary", url: "/oil-balance-summary", icon: IconDroplets },
    { title: "Finished Products", url: "/finished-products", icon: IconCheckupList },
    { title: "SAP", url: "/sap", icon: IconCropLandscape },
    { title: "Power Plants", url: "/report-7", icon: IconPlaneDeparture },
    { title: "Report 8", url: "/report-8", icon: IconChartBar },
    { title: "Report 9", url: "/report-9", icon: IconDropletStar },
    { title: "Report 10", url: "/report-10", icon: IconDroplets },
    { title: "Report 11", url: "/report-11", icon: IconCheckupList },
    { title: "Report 12", url: "/report-12", icon: IconCropLandscape },
    { title: "Report 13", url: "/report-13", icon: IconCropLandscape },
  ],
  navSecondary: [{ title: "Settings", url: "/settings", icon: IconSettings }],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const mainReports = data.navMain.slice(0, 6);
  const otherReports = data.navMain.slice(6);
  const [showAllOtherReports, setShowAllOtherReports] = React.useState(false);

  const visibleOtherReports = showAllOtherReports
    ? otherReports
    : otherReports.slice(0, 2);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/" className="flex items-center gap-2"> {/* Use Link for the home page */}
                <Image src="/cpclogo.png" alt="Logo" width={30} height={30} />
                <span className="text-base font-semibold">Ceypetco Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainReports} />

        <SidebarMenu className="mt-6">
          <SidebarMenuItem>
            {state === "expanded" && (
              <div className="px-4 py-2 text-xs font-semibold uppercase text-muted-foreground">
                Other Reports
              </div>
            )}
          </SidebarMenuItem>

          {visibleOtherReports.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className="flex items-center gap-2"> {/* Use Link here */}
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          {otherReports.length > 2 && (
            <SidebarMenuItem>
              <SidebarMenuButton
                className="w-full text-left"
                onClick={() => setShowAllOtherReports((v) => !v)}
                tooltip={showAllOtherReports ? "Show Less" : "Show More"}
              >
                {state === "expanded" ? (
                  <span>
                    {showAllOtherReports ? "Show Less" : "Show More"}
                  </span>
                ) : (
                  <IconDots className="size-4" />
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>

        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}