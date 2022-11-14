import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { ViewPropTypes } from "deprecated-react-native-prop-types"

export default {
  buttonsTextStyle: PropTypes.oneOfType([
    Text.propTypes.style,
    PropTypes.arrayOf(Text.propTypes.style)
  ]),
  buttonsViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  pickerItemStyle: PropTypes.oneOfType([
    Text.propTypes.style,
    PropTypes.arrayOf(Text.propTypes.style)
  ]),
  pickerViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  cancelKeyText: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  submitKeyText: PropTypes.string,
  value: PropTypes.any
}
