export interface ProjectData {
    projectPrefix: string;
    projectSuffix: string;
    imageType: string;
    animType: string;
    projects: {
        [id: number]: string;
    };
}
