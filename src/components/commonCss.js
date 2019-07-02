import { getObjectClassNames } from '../design/utils/designUtils';
import { ColorWithOpacity } from '../utils/commonFunctions';
import { colors } from '../design/utils/designSystem';

const subSectionFontSize = '30px';

export const classes = getObjectClassNames({
  container: {
    padding: '50px',
    backgroundColor: ColorWithOpacity(colors.SuccessGreen, 0.2)
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: subSectionFontSize,
    color: '#000',
    fontWeight: '500'
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px 120px'
  },
  description: {
    fontSize: '18px',
    marginTop: '10px'
  }
});
