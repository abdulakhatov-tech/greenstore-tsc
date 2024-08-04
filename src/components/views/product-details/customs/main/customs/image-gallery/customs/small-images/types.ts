export interface SmallImagesPropsI {
    loading: boolean;
    detailed_images: string[];
    setActiveImage: (index: number) => number;
    activeImage: number;
}