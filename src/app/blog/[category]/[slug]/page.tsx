import { PostBody } from "@/components/post_detail/PostBody";
import { getPostDetail } from "@/lib/post";

interface IProps {
  params: {
    category: string;
    slug: string;
  };
}

const PostDetail = async ({ params: { category, slug } }: IProps) => {
  const post = await getPostDetail(category, slug);
  console.log(post);
  return (
    <>
      <PostBody {...post} />
    </>
  );
};

export default PostDetail;
