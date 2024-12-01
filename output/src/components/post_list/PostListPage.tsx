import { getPostList } from "@/lib/post";

const PostListPage = async ({ category }: { category?: string }) => {
  const postList = await getPostList(category);
  // const categoryList = await getCategory

  console.log(postList);

  return (
    <section>
      <ul>
        <li>dd</li>
        {/* {postList.map((post) => (
                    {post.path}
                ))} */}
      </ul>
    </section>
  );
};

export default PostListPage;
