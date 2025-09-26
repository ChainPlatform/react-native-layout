import sdkStyles, { setSize } from "./styles";

export function getScreenSize(layoutWidth, isDesktop, side_bar_width) {
    const viewPadding = setSize(15);
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
    if (isDesktop && layoutWidth > sdkStyles.base_desktop) {
        sideBarWidth = side_bar_width;
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
    let padding = setSize(30);
    if (layoutWidth > 460 && layoutWidth < sdkStyles.base_desktop) {
        numberChart = 2;
        padding = setSize(45);
    }
    if (layoutWidth >= sdkStyles.base_desktop && layoutWidth < sdkStyles.split_desktop) {
        numberChart = 3;
        padding = setSize(60);
    }
    if (layoutWidth >= sdkStyles.split_desktop) {
        numberChart = 5;
        padding = setSize(90);
    }
    let packageWidth = (layoutWidth - padding - sideBarWidth) / numberChart;
    if (packageWidth < setSize(232)) {
        packageWidth = setSize(232);
    }
    if (packageWidth > setSize(280)) {
        packageWidth = setSize(280);
    }

    let numberwebinarChart = 1;
    let webinarPadding = setSize(0);
    if (layoutWidth - sideBarWidth - 2 * viewPadding >= 500) {
        numberwebinarChart = 2;
        webinarPadding = setSize(15);
    }
    if (layoutWidth >= sdkStyles.split_desktop && side_bar_width == 0) {
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
    return view;
}

export function getCartLayout(layoutWidth, isDesktop, side_bar_width) {
    let viewPadding = 0;
    let viewSplit = sdkStyles.w100pc;
    let borderRadius = 0;
    let marginBottom = setSize(1);
    let sideBarWidth = 0;
    if (isDesktop && layoutWidth > sdkStyles.base_desktop) {
        sideBarWidth = side_bar_width;
        borderRadius = setSize(4);
        marginBottom = setSize(10);
    }
    if (layoutWidth >= sdkStyles.wide_split_desktop) {
        viewSplit = sdkStyles.w50pc;
    }
    if (layoutWidth >= 767) {
        viewPadding = setSize(15);
    }
    let view = {};
    view.viewPadding = viewPadding;
    view.viewSplit = viewSplit;
    view.sideBarWidth = sideBarWidth;
    view.itemBorderRadius = borderRadius;
    view.itemMarginBottom = marginBottom;
    return view;
}

export function getTransactionLayout(layoutWidth, isDesktop) {
    let viewSplit = sdkStyles.w100pc;
    if (isDesktop && layoutWidth >= 767) {
        viewSplit = sdkStyles.w50pc;
    }
    let view = {};
    view.viewSplit = viewSplit;
    return view;
}

export function getCourseLayout(layoutWidth, isDesktop) {
    let viewSplit = sdkStyles.w100pc;
    let viewPadding = 0;
    let color = 0;
    let showButton = 1;
    let childViewPadding = setSize(15);
    if (isDesktop && layoutWidth >= 767) {
        viewSplit = sdkStyles.w50pc;
        viewPadding = setSize(15);
        childViewPadding = 0;
        color = 1;
        showButton = 0;
    }
    if (isDesktop && layoutWidth > 767 && layoutWidth < 991) {
        showButton = 1;
    }
    let view = {};
    view.color = color;
    view.viewSplit = viewSplit;
    view.viewPadding = viewPadding;
    view.childViewPadding = childViewPadding;
    view.showButton = showButton;
    return view;
}

export function getUserCourseLayout(layoutWidth, isDesktop) {
    let viewPadding = setSize(7.5);
    let numberCol = 2;
    if (isDesktop && layoutWidth >= 500) {
        numberCol = 3;
    }
    if (isDesktop && layoutWidth > 767 && layoutWidth < 991) {
        numberCol = 4;
    }
    if (isDesktop && layoutWidth >= 991) {
        numberCol = 5;
    }
    const areaSpace = numberCol * setSize(15);
    const courseWidth = (layoutWidth - areaSpace - 2 * viewPadding) / numberCol;
    let view = {};
    view.viewPadding = viewPadding;
    view.numberCol = numberCol;
    view.courseWidth = courseWidth;
    return view;
}

export function getUserOrderLayout(layoutWidth, isDesktop) {
    let viewPadding = setSize(7.5);
    let numberCol = 1;
    let space = setSize(15);
    if (isDesktop && layoutWidth >= 600) {
        numberCol = 2;
        space = setSize(30);
    }
    if (isDesktop && layoutWidth >= 991) {
        numberCol = 3;
        space = setSize(45);
    }
    const itemWidth = (layoutWidth - space - 2 * viewPadding) / numberCol;
    let view = {};
    view.viewPadding = viewPadding;
    view.numberCol = numberCol;
    view.itemWidth = itemWidth;
    return view;
}

export function getCourseLearingLayout(layoutWidth, isDesktop) {
    let sidebarWidth = setSize(0);
    let viewPadding = setSize(0);
    if (layoutWidth >= 992) {
        sidebarWidth = setSize(345);
    }
    let view = {};
    view.sidebarWidth = sidebarWidth;
    view.viewPadding = viewPadding;
    return view;
}

export function getScreenWebinarSize(layoutWidth) {
    let numberChart = 1;
    let padding = setSize(30);
    if (layoutWidth >= 500) {
        numberChart = 2;
        padding = setSize(45);
    }
    let tmpViewWidth = layoutWidth - padding;
    let viewWidth = tmpViewWidth / numberChart;
    let view = {};
    view.viewWidth = viewWidth;
    view.viewPadding = setSize(15);
    return view;
}