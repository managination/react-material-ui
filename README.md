### `meteor add mgn:material-ui`
### Version 0.2.4 google material icons https://www.google.com/design/icons/
```
    let Colors = MUI.Styles.Colors;
    <FontIcon className="material-icons" color={Colors.white}>menu</FontIcon>
```

### Version 0.2.X, MUI imported SvgIcons
```
	let {SvgIcons} = MUI.Libs;
	...
	render() {
			let RightIcon = <SvgIcons.NavigationClose />
            return (
                <AppCanvas>
                    <AppBar title="izziLab" iconElementRight={RightIcon} />
                </AppCanvas>
            );
        }
```

### From version 0.1.9, we upgrade to MUI 0.13.1 and react to 0.14.X it have breaking changes
#### [Change log MUI 0.13.1](https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0131)
#### [Change log React and ReactDOM 0.14.x](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)



## Introduction

This package ported from [Material-UI](http://material-ui.com) (a React Component) using [the official Meteor React package](http://react-in-meteor.readthedocs.org/).


## Install

1. Install the official React package `meteor add react`
2. Install this package `meteor add izzilab:material-ui`

## Using

Some clicks (like DatePicker) only work when you have run `injectTapEventPlugin()` first. It is the [official temporary fix](http://react-components.com/component/material-ui), will be removed with React v1.0.

Here's some example code to get you started:

```
//app.jsx
injectTapEventPlugin();

var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

var App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

    render: function () {
        return (
            <AppCanvas>
                <AppBar title="izziLab"/>

                <div style={{padding: '80px',}}>
                    <RaisedButton primary={true} label="Tap"/>
                    <br/>
                    <DatePicker hintText="Portrait Dialog"/>
                    <br/>
                    <DatePicker
                        hintText="Landscape Dialog"
                        mode="landscape"/>
                </div>
            </AppCanvas>
        );
    }
});

if (Meteor.isClient) {
    Meteor.startup(() => {
        ReactDOM.render(<App/>, document.getElementById('react-root'));
    });
}

```

## CHANGELOG
- 2015-11-09 : fixed SSR with MUI 0.13.1
- 2015-11-01 : upgrade MUI to 0.13.1 and react to 0.14.1 [Change log 0.13.1](https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0131)
- 2015-09-30 : upgrade MUI to 0.12.1 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0120)
- 2015-09-08 : upgrade MUI to 0.11.0 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0110)
- 2015-08-23 : Fixed bugs Menu, MenuItem, MenuDivider And Supported SSR.
- 2015-08-11 : upgrade MUI to 0.10.4 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0104)
- 2015-08-02 : upgrade MUI to 0.10.2 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0102)

*Note: This is an old demo with bugs and performance problems. The code is also not updated to use the official react package yet. A new version will follow soon.*
