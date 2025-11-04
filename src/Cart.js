import sdkStyles, { setSize } from './styles';

export function getCartLayout(layoutWidth, isDesktop = true) {
    const basePadding = setSize(15);
    let totalItem = 1;
    if (layoutWidth > sdkStyles.base_desktop) {
        totalItem = 2;
    }
    let itemWidth = (layoutWidth - (2 * (totalItem + 1) * basePadding)) / totalItem;
    let view = {};
    view.basePadding = basePadding;
    view.itemWidth = itemWidth;
    view.totalItem = totalItem;
    return view;
}