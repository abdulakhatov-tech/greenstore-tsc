export type InitialStateT = {
    authModalVisibility: {
        open: boolean;
        authQuery: string | null;
    },
    sideMenuModalVisibility: boolean;
    categoriesModalVisibility: boolean;
    categoryModalVisibility: boolean;
    trackOrderModalVisibility: boolean;
    addProductFormModalVisibility: boolean;
    editProductFormModalVisibility: {
        open: boolean;
        product: any | null;
    };
    orderDetailsModalVisibility: {
        open: boolean;
        order: any | null;
    }; 
    dashboardSidebarModalVisibility: boolean;
}
