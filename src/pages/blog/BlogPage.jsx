import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllPublicPosts } from "../../services/index/posts";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";

let isFirstRun = true;

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsValue = Object.fromEntries([...searchParams]);

  const currentPage = parseInt(searchParamsValue?.page) || 1;
  const searchKeyword = searchParamsValue?.search || "";
  const categoryKeyword = searchParamsValue?.category || "";

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryFn: () =>
      getAllPublicPosts(searchKeyword, currentPage, 12, categoryKeyword),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [currentPage, searchKeyword, categoryKeyword, refetch]);

  const handlePageChange = (page) => {
    setSearchParams({ page, search: searchKeyword, category: categoryKeyword });
  };

  const handleSearch = ({ searchKeyword, category }) => {
    setSearchParams({ page: 1, search: searchKeyword, category: category });
  };

  return (
    <MainLayout>
      <section className="container mx-auto flex flex-col px-5 py-10">
        <Search
          className="mb-10 w-full max-w-xl"
          onSearchKeyword={handleSearch}
        />
        <div className=" flex flex-wrap gap-y-5 pb-10 md:gap-x-5">
          {isLoading || isFetching ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Couldn't fetch the posts data" />
          ) : data?.data.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full">
              <img
                src={"/images/NotFound.png"}
                alt="not-found"
                className="w-1/2 max-w-xs mb-4"
              />
              <p className="text-lg text-orange-500 font-semibold">
                Không có kết quả nào!
              </p>
            </div>
          ) : (
            data?.data.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        {!isLoading && (
          <Pagination
            onPageChange={(page) => handlePageChange(page)}
            currentPage={currentPage}
            totalPageCount={
              data?.headers?.["x-totalpagecount"]
                ? JSON.parse(data?.headers?.["x-totalpagecount"])
                : 1
            }
          />
        )}
      </section>
    </MainLayout>
  );
};

export default BlogPage;
