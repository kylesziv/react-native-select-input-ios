import PropTypes from 'prop-types'
import { Text } from 'react-native'

export default {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
  textStyle: PropTypes.oneOfType([
    Text.propTypes,
    PropTypes.arrayOf(Text.propTypes)
  ])
}
