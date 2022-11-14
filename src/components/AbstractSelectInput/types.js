import PropTypes from 'prop-types'
import { Text } from 'react-native'

export default {
  enabled: PropTypes.bool,
  labelStyle: PropTypes.oneOfType([
    Text.propType,
    PropTypes.arrayOf(Text.propType)
  ]),
  onEndEditing: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any
}
