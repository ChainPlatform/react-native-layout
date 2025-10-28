import sdkStyles, { setSize } from "./styles";

export function getScreenLanding(layoutWidth, isDesktop) {
    const viewPadding = setSize(0);
    let menuViewWidth = setSize(0);
    let bannerViewWidth = setSize(0);
    let splitPadding = setSize(0);
    let sideBarWidth = setSize(0);
    let courseViewWidth = setSize(0);
    let newsViewWidth = setSize(0);
    let bannerOnScreen = 1;
    //Menu
    let imageMenuSize = setSize(45);
    let fontMenuSize = setSize(9.5);
    let menuTotalItem = 5;
    let menuSpace = 4 * setSize(5);
    // Course
    let courseTotalItem = 2;
    let newsTotalItem = 2;
    let courseSpace = 0;
    let newsSpace = 0;
    // News
    let newsItem = 1;
    let newsPadding = 0;
    // New Course
    let courseItem = 1;
    let coursePadding = 0;
    if (isDesktop) {
        courseSpace = setSize(30) + setSize(15);
        newsSpace = setSize(30) + setSize(15);
    } else {
        courseSpace = setSize(15);
        newsSpace = setSize(15);
    }
    let drawerType = "back";
    if (layoutWidth > sdkStyles.base_desktop) {
        drawerType = "permanent";
    }
    if (isDesktop && layoutWidth > sdkStyles.base_desktop) {
        sideBarWidth = setSize(0);
        // Menu
        imageMenuSize = setSize(55);
        fontMenuSize = setSize(12);
        // Course
        courseTotalItem = 3;
        newsTotalItem = 3;
        courseSpace = setSize(60);
        newsSpace = setSize(60);
        // News
        newsItem = 2;
        newsPadding = setSize(15);
        // New Course
        courseItem = 3;
        coursePadding = setSize(30);
    }
    let viewWidth = setSize(345);
    let viewHeight = setSize(195);
    if (isDesktop) {
        if (layoutWidth >= sdkStyles.split_desktop) {
            bannerOnScreen = 2;
            splitPadding = setSize(15);
            // Menu
            menuTotalItem = 10;
            menuSpace = 9 * setSize(5);
            fontMenuSize = setSize(13);
            // Course
            courseTotalItem = 4;
            newsTotalItem = 4;
            courseSpace = setSize(75);
            newsSpace = setSize(75);
            // News
            newsItem = 3;
            newsPadding = setSize(30);
            // New Course
            courseItem = 4;
            coursePadding = setSize(45);
        }
        if (layoutWidth >= sdkStyles.wide_split_desktop) {
            // Course
            courseTotalItem = 5;
            courseSpace = setSize(75) + setSize(15);
            //
            courseItem = 5;
            coursePadding = setSize(60);
        }
        bannerViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - splitPadding;
        viewWidth = bannerViewWidth / bannerOnScreen;
        viewHeight = setSize(195) * (viewWidth / setSize(345));
    }
    // Menu
    menuViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - menuSpace;
    const menuWidth = menuViewWidth / menuTotalItem;
    // Course
    courseViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - courseSpace;
    const courseWidth = courseViewWidth / courseTotalItem;
    // News
    newsViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - newsSpace;
    const newsWidth = newsViewWidth / newsTotalItem;
    //
    let numberChart = 1;
    if (layoutWidth > 460 && layoutWidth <= sdkStyles.base_desktop) {
        numberChart = 2;
    }
    if (layoutWidth > sdkStyles.base_desktop && layoutWidth <= sdkStyles.split_desktop) {
        numberChart = 3;
    }
    if (layoutWidth > sdkStyles.split_desktop) {
        numberChart = 4;
    }
    const padding = (numberChart + 1) * setSize(15);
    let packageWidth = setSize(280);

    let numberwebinarChart = 1;
    let webinarPadding = setSize(0);
    if (layoutWidth - sideBarWidth - 2 * viewPadding >= 500) {
        numberwebinarChart = 2;
        webinarPadding = setSize(15);
    }
    if (layoutWidth >= sdkStyles.split_desktop) {
        numberwebinarChart = 3;
        webinarPadding = setSize(15);
    }

    let newsItemViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - newsPadding;
    const newsItemWidth = newsItemViewWidth / newsItem;

    let courseItemViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - coursePadding;
    const courseItemWidth = courseItemViewWidth / courseItem;

    let webinarViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - (numberwebinarChart - 1) * webinarPadding;
    const webinarWidth = webinarViewWidth / numberwebinarChart;

    const layout = layoutWidth - sideBarWidth - (sideBarWidth > 0 ? 2 : 2) * viewPadding;

    let view = {};
    view.courseItemWidth = courseItemWidth;
    view.courseItem = courseItem;
    view.coursePadding = coursePadding;
    view.newsItemWidth = newsItemWidth;
    view.newsItem = newsItem;
    view.newsPadding = newsPadding;
    view.webinarWidth = webinarWidth;
    view.webinarPadding = webinarPadding;
    view.numberWebinar = numberwebinarChart;
    view.viewPadding = viewPadding;
    view.sideBarWidth = sideBarWidth;
    view.layout = layout;
    view.bannerOnScreen = bannerOnScreen;
    view.imageMenuSize = imageMenuSize;
    view.fontMenuSize = fontMenuSize;
    view.viewWidth = viewWidth;
    view.viewHeight = viewHeight;
    view.menuWidth = menuWidth;
    view.courseWidth = courseWidth;
    view.newsWidth = newsWidth;
    view.splitPadding = splitPadding;
    view.packageWidth = packageWidth;
    view.packagePadding = padding;
    view.drawerType = drawerType;
    return view;
}