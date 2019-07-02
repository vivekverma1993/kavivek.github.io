import glamorous from 'glamorous';
import { omit } from 'lodash';

/*
 * This is an image component
 * For any css, just pass css={{}} to the element for inline styles
 */

const Image = glamorous.img({}, props => omit(props, ['children', 'theme']));

export default Image;
