export interface ModalVisibilityFeaturesI {
    handleAuthParam: (authParam: string | null) => void;
    handleTrackOrderParam: (trackOrderParam: string | null) => void;
    handleProductFormParam: (actionType: string | null) => void;
}