import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { ViewPropTypes } from "deprecated-react-native-prop-types"

export default {
  buttonsTextStyle: PropTypes.oneOfType([
    Text.propTypes,
    PropTypes.arrayOf(Text.propTypes)
  ]),
  buttonsViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  cancelKeyText: PropTypes.string,
  onCancelPress: PropTypes.func.isRequired,
  onSubmitPress: PropTypes.func.isRequired,
  submitKeyText: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.element
}
