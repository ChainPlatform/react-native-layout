import sdkStyles, { setSize } from './styles';

export function getDoExamLayout(layoutWidth) {
    let totalItem = 1;
    let subSize = 1;
    let mainSize = 1;
    const basePadding = setSize(15);
    let mainViewWidth = layoutWidth;
    let subViewWitdh = mainViewWidth;
    if (layoutWidth > sdkStyles.base_desktop) {
        totalItem = 2;
        subSize = 0.3;
        mainSize = 0.7;
    }
    const baseWidth = layoutWidth - (2 * (totalItem + 1) * basePadding);
    mainViewWidth = baseWidth * mainSize;
    subViewWitdh = baseWidth * subSize;

    return {
        totalItem,
        mainViewWidth,
        subViewWitdh,
        basePadding
    };
}