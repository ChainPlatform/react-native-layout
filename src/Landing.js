import sdkStyles, { setSize } from './styles';

export function getScreenLanding(layoutWidth, isDesktop) {
    let menuViewWidth = setSize(0);
    let bannerViewWidth = setSize(0);

    //Menu
    let imageMenuSize = setSize(45);
    let menuTotalItem = 5;
    let menuSpace = 4 * setSize(5);
    // Course
    let courseTotalItem = 2;
    let newsTotalItem = 2;
    let courseSpace = 0;
    let newsSpace = 0;

    const basePadding = setSize(15);
    let bannerOnScreen = 1;
    let newsItem = 1;
    let courseItem = 1;
    let webinarItem = 1;

    let drawerType = "back";
    if (layoutWidth > sdkStyles.base_desktop) {
        drawerType = "permanent";
        courseItem = 2;
        newsItem = 2;
        webinarItem = 2;
    }
    if (layoutWidth > sdkStyles.split_desktop) {
        bannerOnScreen = 2;
        courseItem = 3;
        newsItem = 3;
        webinarItem = 3;
    }
    if (layoutWidth > sdkStyles.wide_split_desktop) {
        courseItem = 4;
    }
    if (isDesktop && layoutWidth > sdkStyles.base_desktop) {
        // Menu
        imageMenuSize = setSize(55);
        fontMenuSize = setSize(12);
        // Course
        courseTotalItem = 3;
        newsTotalItem = 3;
        courseSpace = setSize(60);
        newsSpace = setSize(60);
    }
    if (layoutWidth >= sdkStyles.split_desktop) {
        // Menu
        menuTotalItem = 10;
        menuSpace = 9 * setSize(5);
        fontMenuSize = setSize(13);
        // Course
        courseTotalItem = 4;
        newsTotalItem = 4;
        courseSpace = setSize(75);
        newsSpace = setSize(75);
    }
    if (layoutWidth >= sdkStyles.wide_split_desktop) {
        courseTotalItem = 5;
        courseSpace = setSize(75) + setSize(15);
    }
    bannerViewWidth = layoutWidth - (2 * (bannerOnScreen + 1) * basePadding);

    const viewWidth = bannerViewWidth / bannerOnScreen;
    const viewHeight = setSize(195) * (viewWidth / setSize(345));

    // Menu
    menuViewWidth = layoutWidth - menuSpace;
    const menuWidth = menuViewWidth / menuTotalItem;

    let packageWidth = setSize(280);

    let newsItemViewWidth = layoutWidth - (2 * (newsItem + 1) * basePadding);
    const newsItemWidth = newsItemViewWidth / newsItem;

    let courseItemViewWidth = layoutWidth - (2 * (courseItem + 1) * basePadding);
    const courseItemWidth = courseItemViewWidth / courseItem;

    let webinarViewWidth = layoutWidth - (2 * (webinarItem + 1) * basePadding);
    const webinarItemWidth = webinarViewWidth / webinarItem;

    const layout = layoutWidth;

    let view = {};

    view.basePadding = basePadding;

    view.newsItemWidth = newsItemWidth;
    view.newsItem = newsItem;
    view.newsPadding = basePadding;

    view.courseItemWidth = courseItemWidth;
    view.courseItem = courseItem;
    view.coursePadding = basePadding;

    view.packageWidth = packageWidth;
    view.drawerType = drawerType;
    view.layout = layout;

    view.bannerOnScreen = bannerOnScreen;
    view.viewWidth = viewWidth;
    view.viewHeight = viewHeight;

    view.bannerItem = bannerOnScreen;
    view.bannerWidth = viewWidth;
    view.bannerHeight = viewHeight;

    view.imageMenuSize = imageMenuSize;
    view.menuWidth = menuWidth;

    view.webinarItemWidth = webinarItemWidth;
    view.webinarItem = webinarItem;
    view.webinarPadding = basePadding;

    view.viewPadding = basePadding;

    return view;
}