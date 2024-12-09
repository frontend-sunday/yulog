import type { MDXComponents } from "mdx/types";
import { P, P as p } from "@/components/common/ui/p";
import { ReactNode } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: (props) => <P children={props.children} />,
  };
}
