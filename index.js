import { getLayoutAdmin, getScreenSizeAdmin } from "./src/LayoutAdmin";
import {
    getScreenSize,
    getCartLayout,
    getTransactionLayout,
    getCourseLayout,
    getUserCourseLayout,
    getUserOrderLayout,
    getCourseLearingLayout,
    getScreenWebinarSize
} from "./src/Layout";
import sdkStyles, { setSize } from "./src/styles";
import sdkColors from "./src/colors";
import mobileCheck from "./src/DeviceDetect";

export default sdkStyles;
export {
    setSize,
    getLayoutAdmin,
    getScreenSizeAdmin,
    getScreenSize,
    getCartLayout,
    getTransactionLayout,
    getCourseLayout,
    getUserCourseLayout,
    getUserOrderLayout,
    getCourseLearingLayout,
    getScreenWebinarSize,
    sdkColors,
    mobileCheck
};