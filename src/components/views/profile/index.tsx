import React from "react";
import { RiMenuUnfold2Fill, RiMenuUnfoldFill } from "react-icons/ri";

import Container from "@layout/container";
import { Dashboard, Header } from "./customs";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { toggleDashboardSidebarModalVisibility } from "@redux/slices/modal";

const ProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { dashboardSidebarModalVisibility } = useAppSelector(
    (state) => state.modal
  );

  return (
    <section className='py-10'>
      <Container>
        <div className='flex items-center gap-4'>
          <div className='block lg:hidden'>
            {!dashboardSidebarModalVisibility ? (
              <RiMenuUnfold2Fill
                className='text-[22px]'
                onClick={() =>
                  dispatch(toggleDashboardSidebarModalVisibility(true))
                }
              />
            ) : (
              <RiMenuUnfoldFill
                className='text-[22px]'
                onClick={() =>
                  dispatch(toggleDashboardSidebarModalVisibility(true))
                }
              />
            )}
          </div>

          <Header />
        </div>

        <Dashboard />
      </Container>
    </section>
  );
};

export default ProfileComponent;
