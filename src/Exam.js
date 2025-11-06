import sdkStyles from './styles';

export function getDoExamLayout(layoutWidth) {
    let totalItem = 1;
    let mainViewWidth = layoutWidth;
    let subViewWitdh = mainViewWidth;
    if (layoutWidth > sdkStyles.base_desktop) {
        totalItem = 2;
        mainViewWidth = layoutWidth * 0.7;
        subViewWitdh = layoutWidth - mainViewWidth;
    }

    return {
        totalItem,
        mainViewWidth,
        subViewWitdh
    };
}