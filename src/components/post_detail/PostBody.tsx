import { Post } from "@/config/types";
import { P } from "../common/ui/p";
import { MDXRemote } from "next-mdx-remote/rsc";

export const PostBody = (post: Post) => {
  return <MDXRemote source={post.content} />;
};
