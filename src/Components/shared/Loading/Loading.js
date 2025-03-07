import React from 'react';
import styled, { keyframes } from 'styled-components';

const commonStyle = {
  margin: 'auto',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

const sizeItem = {
  small: '25px',
  default: '30px',
  large: '35px'
}

const leftAnimate = keyframes`
  50%,
  100% {
    transform: translateX(95%);
  }
`

const rightAnimate = keyframes`
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
`

const LoadingContainer = styled.div`
  width: ${props => props.size === 'small' ? 150 : (props.size === 'large' ? 170 : 147.5)}px;
  height:  ${props => props.size === 'small' ? 150 : (props.size === 'large' ? 170 : 147.5)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
`;

const Item = styled.div`
   width: ${props => sizeItem[props.size] || sizeItem['default']};
  height: ${props => sizeItem[props.size] || sizeItem['default']};
  border-radius: 50%;
  background: ${props => props.color || '#6C3DFF'};
`;

const ItemLeft = styled(Item)`
  transform: translateX(-100%);
  animation: ${leftAnimate} ${props => props.speed || 1}s ease-in alternate infinite ;
`

const ItemRight = styled(Item)`
  transform: translateX(-95%);
  animation: ${rightAnimate} ${props => props.speed || 1}s ease-out alternate infinite ;
`

const Loading = ({ style = commonStyle, color, speed, size }) => {
  return (
    <LoadingContainer style={style} size={size}>
      <ItemLeft color={color} speed={speed} size={size} />
      <Item color={color} size={size} />
      <ItemRight color={color} speed={speed} size={size} />
    </LoadingContainer>
  );
};

export default Loading;