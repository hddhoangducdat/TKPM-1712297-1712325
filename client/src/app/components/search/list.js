import React, { useState } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts"; // import SendIcon from "@material-ui/icons/Send";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

// Action

import { getChatDialog } from "../../store/actions";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    width: "100%",
    maxHeight: 290,
    maxWidth: 400,
    backgroundColor: "#d3d4d5",
    position: "relative",
  },
  inline: {
    display: "inline",
  },
}));

const SearchList = ({
  searchList,
  setProfile,
  setShowSearch,
  getChatDialog,
  userId,
  chatBox,
}) => {
  const classes = useStyles();

  const onSelectSearch = (user) => {
    setProfile(user);
    setShowSearch(false);
    // let ok = false;
    // chatBox.forEach((c) => {
    //   if (c.member.includes(userId) && c.member.includes(user._id)) {
    //     ok = true;
    //     getChatDialog(c, "", "");
    //   }
    // });
    // if (!ok) getChatDialog("", userId, user._id);
  };

  const onRenderSearch = () => {
    return searchList.map((user) => {
      return (
        <ListItem
          button
          alignItems="flex-start"
          key={user._id}
          onClick={() => onSelectSearch(user)}
          // onBlur={() => setShowSearch(false)}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={user.data.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={user.data.fullName}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {user.data.email}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      );
    });
  };

  return (
    <div
      className={classes.root}
      // onFocus={() => setShowSearch(false)}
      onBlur={() => setShowSearch(false)}
    >
      {onRenderSearch()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    chatBox: state.auth.user.data.chatBox,
  };
};

export default connect(mapStateToProps, { getChatDialog })(SearchList);
