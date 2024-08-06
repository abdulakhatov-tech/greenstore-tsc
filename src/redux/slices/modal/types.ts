export type InitialStateT = {
    authModalVisibility: {
        open: boolean;
        authQuery: string | null;
    },
    sideMenuModalVisibility: boolean;
    categoriesModalVisibility: boolean;
    categoryModalVisibility: boolean;
    trackOrderModalVisibility: boolean;
}
