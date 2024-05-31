export interface NavbarDataWrapper {
    getLink(id: number): string;
    getName(id: number): string;
    numberOfLinks(): number;
}