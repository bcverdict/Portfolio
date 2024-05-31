import {NavbarDataWrapper} from "./NavbarDataWrapper";
import NullDataWrapperError from "../../Errors/NullDataWrapperError";

const NullNavbarDataWrapper: NavbarDataWrapper = {
    getLink(id: number): string {
        throw new NullDataWrapperError();
    },
    getName(id: number): string {
        throw new NullDataWrapperError();
    },
    numberOfLinks(): number {
        throw new NullDataWrapperError();
    }
}
export default NullNavbarDataWrapper;