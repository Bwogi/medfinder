import * as React from "react";

import { cn } from "@/lib/cn";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Section({ className, ...props }: DivProps) {
  return <div className={cn("mx-auto w-full max-w-5xl px-6", className)} {...props} />;
}
