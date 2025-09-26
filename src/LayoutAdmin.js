import sdkStyles, { setSize } from "./styles";

export function getLayoutAdmin(layoutWidth, isDesktop, side_bar_width) {
    let numberChart = 1;
    let padding = setSize(30);
    let sideBarWidth = side_bar_width;
    let sideBarOpen = false;
    let sideBarMiniWidth = setSize(70);
    let sideBarSecondWidth = side_bar_width - setSize(70);
    if (isDesktop && layoutWidth > sdkStyles.base_desktop) {
        sideBarWidth = side_bar_width;
    }
    if (layoutWidth > 600 && layoutWidth < sdkStyles.base_desktop) {
        numberChart = 2;
        padding = setSize(45);
    }
    if (layoutWidth >= sdkStyles.base_desktop && layoutWidth < sdkStyles.split_desktop) {
        numberChart = 3;
        padding = setSize(60);
    }
    if (layoutWidth >= sdkStyles.split_desktop) {
        numberChart = 4;
        padding = setSize(75);
    }
    const chartWidth = (layoutWidth - sideBarMiniWidth - padding) / numberChart;
    const chartWidthPC = 100 / numberChart;
    let view = {};
    view.sideBarWidth = sideBarWidth;
    view.sideBarMiniWidth = sideBarMiniWidth;
    view.sideBarSecondWidth = sideBarSecondWidth;
    view.sideBarOpen = sideBarOpen;
    view.chartWidth = chartWidth;
    view.chartWidthPC = chartWidthPC + "%";
    return view;
}

export function getScreenSizeAdmin(layoutWidth) {
    let numberChart = 1;
    let padding = 0;
    if (layoutWidth > 767) {
        numberChart = 2;
        padding = setSize(2);
    }
    const chartWidth = (layoutWidth - padding) / numberChart;
    const chartWidthPC = 100 / numberChart;
    let view = {};
    view.padding = padding;
    view.width = chartWidth;
    view.widthPC = chartWidthPC + "%";
    return view;
}