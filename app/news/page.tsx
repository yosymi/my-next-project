import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagenation from "@/app/_components/Pagenation";
import SearchFeild from "@/app/_components/SearchFeild";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export const revalidate = 0;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchFeild />
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} />
    </>
  );
}
