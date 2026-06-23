import * as mobiInfos from 'react-device-detect';

let mobileCheck = mobiInfos;
let os = "browser";
if (typeof window.APP_INFOS != "undefined" && typeof window.APP_INFOS.os != "undefined") {
    os = window.APP_INFOS.os;
}
mobileCheck.os = os;
export default mobileCheck;