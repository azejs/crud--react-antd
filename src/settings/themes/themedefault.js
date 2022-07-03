const theme = {};

theme.palette = {
  primary: [
    '#22b9ff', // 0: App -- Blue --DEfault
    '#3A78F5', // 1: Darken 4%
    '#3775F2', // 2: Darken 5%
    'rgba(68, 130, 255, 0.2)', // 3: Fade 20%
    '#4C8AFF', // 4: Lighten 3%
    'rgba(68, 130, 255, 0.75)', // 5: Fade 75%
    '#6AA8FF', // 6: Lighten 15%
    '#63A1FF', // 7: Lighten 12%
    '#3F7DFA', // 8: Darken 2%
    '#3369e7', // 9: Algolia color
    '#5896FF', // 10: Lighten 8%
    '#2b69e6', // 11:
    '#236cfe', // 12: darken 10%
    '#4d88ff', // 13: Lighten 5%
    '#7ED321', // 14: Lighten 5%
    '#2b69e6', // 15:
    '#96b92b', // 16: YellowGreen
    '#fe4979', // 17: Salmon app default red
    '#8361cf', // 18: Medium purple
    '#fbf9f9', // 18: Medium purple
  ],
  primary_old: [
    '#4482FF', // 0: Default
    '#3A78F5', // 1: Darken 4%
    '#3775F2', // 2: Darken 5%
    'rgba(68, 130, 255, 0.2)', // 3: Fade 20%
    '#4C8AFF', // 4: Lighten 3%
    'rgba(68, 130, 255, 0.75)', // 5: Fade 75%
    '#6AA8FF', // 6: Lighten 15%
    '#63A1FF', // 7: Lighten 12%
    '#3F7DFA', // 8: Darken 2%
    '#3369e7', // 9: Algolia color
    '#5896FF', // 10: Lighten 8%
    '#2b69e6', // 11:
    '#236cfe', // 12: darken 10%
    '#4d88ff', // 13: Lighten 5%
  ],
  secondary: [
    '#2d3446', // 0: DarkBlue
    '#f1f3f6', // 1: LightBluish
    '#788195', // 2: LightBlue
    '#E4E6E9', // 3: LightBluish Darken 5%
    '#364d79', // 4:
    '#202739', // 5: DarkBlue Darken 5%
    '#f5f6f8', // 6: LighterBluish
    '#e9ebf1', // 7: DarkBluish
    '#F6F8FB', // 8: LighterBluish Lighten 2%
    '#E9EBEE', // 9: LighterBluish Darken 3%
    '#1a1a1a', // 10: Sidebar submenu select
    '#FFFFFF', // 11: WHITE
  ],
  color: [
    '#FEAC01', // 0: Orange
    '#42299a', // 1: Purple
    '#F75D81', // 2: Pink
    '#7ED321', // 3: LimeGreen
    '#39435f', // 4: BlueShade
    '#FFCA28', // 5: Yellow
    '#F2BD1B', // 6: Yellow Darken 5%
    '#3b5998', // 7: Facebook
    '#344e86', // 8: Facebook Darken 5%
    '#dd4b39', // 9: Google Plus
    '#d73925', // 10: Google Plus Darken 5%
    '#e14615', // 11: Auth0
    '#ca3f13', // 12: Auth0
    '#e0364c', // 13: themeColor--AlizarinCrimson
    '#22b9ff', // 14: AppColor--Blue
  ],
  warning: [
    '#ffbf00', // 0: Warning
  ],
  success: [
    '#00b16a', // 0: Success
  ],
  error: [
    '#f64744', // 0: Error
    '#EC3D3A', // 1: Darken 4%
    '#FF5B58', // 2: Lighten 8%
  ],
  grayscale: [
    '#bababa', // 0: GreyShade
    '#c1c1c1', // 1: GreyDark
    '#D8D8D8', // 2: Grey
    '#f1f1f1', // 3: GreyAlt
    '#F3F3F3', // 4: GreyLight
    '#fafafa', // 5: DarkWhite
    '#F9F9F9', // 6: DarkerWhite
    '#fcfcfc', // 7: #fff Darken 1%
    '#eeeeee', // 8:
    '#fbfbfb', // 9:
    '#f5f5f5', // 10:
    '#f7f8f9', // 11: today-highlight-bg
    '#6c808c', // 12: slategray
  ],
  text: [
    '#323332', // 0: Heading
    '#595959', // 1: HeadingLight
    '#979797', // 2: Text
    '#797979', // 3: TextDark
    '#6a6c6a', // 4: Heading Lighten 22%
    '#546a79', // 5
    '#a7a7a7', // 6
    '#7a7a7a', // 7
  ],
  border: [
    '#e9e9e9', // 0: Border
    '#d8d8d8', // 1: BorderDark
    '#ebebeb', // 2: BorderLight
    '#d3d3d3', // 3:
    'rgba(228, 228, 228, 0.65)', // 4:
  ],

  calendar: [
    '#905', // 0:
    '#690', // 1:
    '#a67f59', // 2:
    '#07a', // 3:
    '#dd4a68', // 4:
    '#e90', // 5:
  ],
};

theme.fonts = {
  primary: 'OpenSans', // 'Roboto, sans-serif',
  pre: 'OpenSans',
  quote: 'OpenSans',
};

theme.sizes = {
  xmostTiny: '9px',
  mostTiny: '10px', // '0.6vw', // '10px',
  tiny: '11px', // '0.7vw', // '11px',
  small: '12px', // '0.87vw', // '12px',
  medium: '14px', // '1vw', // '14px',
  large: '16px', // '1.1vw', // '16px',
  xlarge: '18px', // '1.3vw', // '18px',
  xxlarge: '20px', // '1.4vw', // '20px',
  xxxlarge: '24px', // '50vw', // '24px',
};

export default theme;
