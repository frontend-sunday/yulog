"use client";

import { ReactNode } from "react";

export function P({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[16px] font-naverNormal my-5 
    [blockquote_&]:font-naverSemi 
    [blockquote_&]:my-2 
    [blockquote_&]:text-[16px] 
    [div_&]:font-naverSemi 
    [div_&]:text-[16px]"
    >
      {children}
    </p>
  );
}
