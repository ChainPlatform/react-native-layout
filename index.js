import { getLayoutAdmin, getScreenSizeAdmin } from "./src/LayoutAdmin";
import {
    getScreenSize,
    getTransactionLayout,
    getCourseLayout,
    getUserCourseLayout,
    getUserOrderLayout,
    getCourseLearingLayout,
    getCartConfirmLayout,
    getScreenWebinarSize
} from "./src/Layout";
import { getCartLayout } from "./src/Cart";
import { getScreenLanding } from "./src/Landing";
import sdkStyles, { setSize } from "./src/styles";
import sdkColors from "./src/colors";
import mobileCheck from "./src/DeviceDetect";
import { getDoExamLayout } from "./src/Exam";
import { getDefaultLayout } from "./src/DefaultLayout";

export default sdkStyles;
export {
    getLayoutAdmin,
    getScreenSizeAdmin,
    getScreenSize,
    getCartLayout,
    getCartConfirmLayout,
    getTransactionLayout,
    getCourseLayout,
    getUserCourseLayout,
    getUserOrderLayout,
    getCourseLearingLayout,
    getScreenWebinarSize,
    getScreenLanding,
    getDoExamLayout,
    getDefaultLayout,
    sdkColors,
    setSize,
    mobileCheck
};