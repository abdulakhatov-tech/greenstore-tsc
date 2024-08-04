export type InitialStateT = {
    authModalVisibility: {
        open: boolean;
        authQuery: string | null;
    },
    sideMenuModalVisibility: {
        open: boolean;
    },
    categoriesModalVisibility: boolean;
    categoryModalVisibility: boolean;
}
