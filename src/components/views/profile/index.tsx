import React from "react";
import { Dashboard, Header } from "./customs";
import Container from "@layout/container";

const ProfileComponent: React.FC = () => {
  return (
    <section className='py-10'>
      <Container>
        <Header />

        <Dashboard/>
      </Container>
    </section>
  );
};

export default ProfileComponent;
