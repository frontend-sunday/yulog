import { getPostList } from "@/lib/post";
import dayjs from "dayjs";

const PostListPage = async ({ category }: { category?: string }) => {
  const postList = await getPostList(category);
  // const categoryList = await getCategory

  console.log(postList);

  return (
    <>
      <section className="mb-12">
        <strong className="block mb-10 text-lg">인기 글</strong>
        <ul className="flex gap-5">
          {postList.map((post) => (
            <li className="w-56">
              <a href={post.url}>
                <div>
                  <img
                    className="rounded-2xl"
                    src="https://tech.kakaopay.com/_astro/thumb.f048851f_ZQIv2S.png"
                  ></img>
                </div>
                <strong className="mt-3 mb-1 text-base block font-semibold tracking-wide px-1">
                  {post.title}
                </strong>
                <div className="flex px-1 text-sm text-gray-400 items-center gap-2">
                  <time>{dayjs(post.date).format("YYYY.MM.DD")}</time>
                  <div className="bg-gray-400 w-px h-4"></div>
                  <span>태그</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <strong className="block mb-10 text-lg">전체</strong>
        <ul>
          {postList.map((post) => (
            <li className="mb-5">
              <a href={post.url} className="flex gap-4 items-center">
                <div className="w-60 min-w-60">
                  <img
                    className="rounded-2xl w-full"
                    src="https://tech.kakaopay.com/_astro/thumb.f048851f_ZQIv2S.png"
                  ></img>
                </div>
                <div>
                  <strong className="mt-3 mb-2 text-xl font-semibold tracking-wide block">
                    {post.title}
                  </strong>
                  <div className="text-gray-400 text-ellipsis break-words line-clamp-2 mb-3">
                    {post.content}
                  </div>
                  <div className="flex px-1 text-sm text-gray-400 items-center gap-2">
                    <time>{dayjs(post.date).format("YYYY.MM.DD")}</time>
                    <div className="bg-gray-400 w-px h-4"></div>
                    <span>태그</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default PostListPage;
