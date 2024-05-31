export interface ProjectDataWrapper {
    getGifPath: (id: number) => string;
    getImagePath: (id: number) => string;
    getProjectDescription: (id: number) => string;
    numberOfProjects: () => number;
}