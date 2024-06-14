export interface ProjectDataWrapper {
    getImagePath(id: number): string;
    getGifPath(id: number): string;
    getProjectDescription(id: number): string;
    numberOfProjects(): number;
}