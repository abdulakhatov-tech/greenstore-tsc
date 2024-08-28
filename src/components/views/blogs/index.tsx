import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { Outlet, useOutlet } from "react-router-dom";

import { Intro, PostList, SearchBar } from "./customs";
import useBlogsFeatures from "./features";
import Container from "@layout/container";
import Loading from "@generic/loading";
import Tooltip from "@tools/tooltip";
import { useAppSelector } from "@hooks/useRedux";

const BlogsComponent: React.FC = () => {
  const { t } = useTranslation();
  const hasOutlet = useOutlet();
  const { isAuthed } = useAppSelector(({ auth }) => auth);

  const { isLoading, handleCreateBlog } = useBlogsFeatures();

  return (
    <section>
      <Container>
        {hasOutlet ? (
          <Outlet />
        ) : (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {!isAuthed ? (
                  <Intro />
                ) : (
                  <>
                    <SearchBar />
                    <div
                      className='text-[44px] font-bold mt-2'
                      onClick={handleCreateBlog}
                    >
                      <Tooltip title={t("blog.new_article")}>
                        <CiCirclePlus />
                      </Tooltip>
                    </div>
                  </>
                )}

                <PostList />
              </>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default BlogsComponent;
