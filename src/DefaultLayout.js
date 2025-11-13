import sdkStyles, { setSize } from "./styles";

export function getDefaultLayout(layoutWidth, isDesktop) {
    const basePadding = setSize(15);
    let baseItem = 1;
    if (layoutWidth > sdkStyles.base_mobile) {
        baseItem = 2;
    }
    if (layoutWidth > sdkStyles.base_desktop) {
        baseItem = 3;
    }
    if (layoutWidth > sdkStyles.split_desktop) {
        baseItem = 4;
    }
    const baseWidth = layoutWidth - (2 * (baseItem + 1) * basePadding);
    const viewWidth = baseWidth / baseItem;
    let view = {};
    view.basePadding = basePadding;
    view.baseItem = baseItem;
    view.baseWidth = viewWidth;
    view.layout = layoutWidth;
    return view;
}