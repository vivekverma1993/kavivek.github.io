import { getObjectClassNames } from '../design/utils/designUtils';
import { mediaQueries } from '../design/utils/designSystem';

export const commonClasses = getObjectClassNames({
  showMoreContainer: {
    justifyContent: 'center',
    marginTop: '24px'
  },
  showMoreText: {
    fontSize: '14px',
    color: '#4a4a4a',
    fontWeight: 'bold',
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  title: {
    fontSize: '24px',
    letterSpacing: '-0.2px',
    color: '#484848',
    [mediaQueries.phone]: {
      fontSize: '18px',
      letterSpacing: '-0.1px',
      paddingLeft: '12px'
    }
  },
  appWrapper: {
    paddingTop: '60px',
    [mediaQueries.phone]: {
      paddingTop: '50px'
    }
  }
});
