import glamorous from 'glamorous';
import { omit } from 'lodash';

/*
 * This is just a dummy wrapper component
 * For any css, just pass css={{}} to the element for inline styles
 */

const Dummy = glamorous.div(props =>
  omit(props, [
    'children',
    'theme',
    'css',
    'className',
    'key',
    'onMouseUp',
    'onMouseDown',
    'onClick',
    'data-test',
    'alt',
    'onTouchStart',
    'onTouchEnd',
    'onMouseOver',
    'onMouseLeave',
    'onFocus',
    'onBlur'
  ])
);

export default Dummy;
