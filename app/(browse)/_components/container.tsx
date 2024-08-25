"use client";

import React, { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
// js way to check if the user is on mobile or pc

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

export function Container({ children }: { children: React.ReactNode }) {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  const matches = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    // if true then the user is using mobile and we will hide the sidebar functionality.
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  return (
    <div
    // if collapsed then it will be pushed by ml70(sidebar width) else for mobile same or for large screen 60
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
}
