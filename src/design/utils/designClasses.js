import { getClassNames } from './designUtils';

export const marginAuto = getClassNames({
  margin: 'auto'
});

export const marginNone = getClassNames({
  margin: '0px'
});

export const absolutePosition = getClassNames({
  position: 'absolute'
});

export const fullWidth = getClassNames({
  width: '100%'
});

export const noBoxShadow = getClassNames({
  boxShadow: 'none'
});

export const barBoxShadow = getClassNames({
  boxShadow: '0 2px 2px 0 rgba(155, 155, 155, 0.11)'
});

export const h2 = getClassNames({
  fontSize: '30px',
  marginTop: '20px',
  marginBottom: '10px',
  fontFamily: 'inherit',
  fontWeight: 500,
  lineHeight: '1.1',
  color: 'inherit'
});
