import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class ListMenu extends Component {
  render() {
    const { items, iconMenuColor } = this.props

    return (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon color={iconMenuColor !== undefined ? iconMenuColor : undefined} />
          </IconButton>
        }>
        {items.map((item, i) =>
          <MenuItem
            key={i}
            disabled={item.disabled}
            primaryText={item.text}
            onClick={item.onClick}
          />
        )}
      </IconMenu>
    )
  }
};

ListMenu.propTypes = {
  items: PropTypes.array.isRequired,
  iconMenuColor: PropTypes.string
}

export default (ListMenu)
