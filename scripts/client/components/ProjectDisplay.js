import * as React from 'react';
import * as ReactStyle from 'react-style';
import colors from '../colors';

var containerStyle = ReactStyle({
  backgroundColor: colors[2],
  boxShadow: '5px 5px 5px black',
  paddingTop: 3,
  marginBottom: 10
});

var titleStyle = ReactStyle({
  fontFamily: 'Open Sans',
  color: colors[3]
});

var imageStyle = ReactStyle({
  position: 'relative',
  maxWidth: 250,
  maxheight: 250,
  margin: 10,
  top: -20
});

var textStyle = ReactStyle({
  marginTop: 30,
  color: colors[3],
  fontSize: '1.3em',
  textAlign: 'justify'
});

var bodyStyle = ReactStyle({
  margin: 20
});

var clearfix = ReactStyle({
  clear: 'both',
});

var ProjectDisplay = React.createClass({
  render() {
    var bgColor = ReactStyle({
      backgroundColor: this.props.side === 'even' ? colors[1] : colors[2]
    });
    var imageSide = ReactStyle({
      float: this.props.side === 'even' ? 'left' : 'right'
    });
    return (
      <div styles={[containerStyle, bgColor]}>
        <h2 styles={titleStyle}>{this.props.projectData.title}</h2>
        <div styles={bodyStyle}>
          <img styles={[imageStyle, imageSide]} src={this.props.projectData.image} />
          <p styles={textStyle}>{this.props.projectData.body}</p>
        </div>
        <div styles={clearfix} />
      </div>
    );
  }
});

export default ProjectDisplay;
