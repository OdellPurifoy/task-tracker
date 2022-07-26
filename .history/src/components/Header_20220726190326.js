import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
        <h1>Task Tracker</h1>
    </header>
  )
}

Header.propTypes = {
    title: String,
}

export default Header