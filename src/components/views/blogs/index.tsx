import React from 'react';
import Container from '@layout/container';
import { PostList, SearchBar } from './customs';
import { Outlet, useOutlet } from 'react-router-dom';

const BlogsComponent: React.FC = () => {
  const hasOutlet = useOutlet();

  return (
    <section>
      <Container>
        {hasOutlet ? (
          <Outlet />
        ) : (
          <>
            <SearchBar />
            <PostList />
          </>
        )}
      </Container>
    </section>
  );
};

export default BlogsComponent;
