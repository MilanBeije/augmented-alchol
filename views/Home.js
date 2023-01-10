import React, {useState, useRef} from 'react';
import {
  ViroARScene,
  ViroAmbientLight,
  ViroText,
  Viro3DObject,
  ViroARTrackingTargets,
} from '@viro-community/react-viro';

import {SkatePark} from './SkatePark';

import Jake from '../assets/images/JakeBacon.png';

export const Home = props => {
  const [state, setState] = useState({wine: false});

  // const ref = useRef('Home');

  const handleClick = () => {
    console.log('navigando');
    // props.sceneNavigator.replace('SkatePark', {scene: SkatePark});
  };
  ViroARTrackingTargets.createTargets({
    targetOne: {
      source: Jake,
      orientation: 'Up',
      physicalWidth: 1,
    },
  });

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={600} />
      {/* <ViroARImageMarker target={'targetOne'}> */}
      <ViroText
        position={[0, 0, -2]}
        onClick={handleClick}
        text="ciaone"
        style={{fontSize: 50, color: 'yellow'}}></ViroText>
      {/* <Viro3DObject
          source={cointreau}
          scale={[5, 5, 5]}
          position={[0, 0, -2]}
          rotation={[270, 0, 0]}
          type="GLB"
        /> */}
      {/* </ViroARImageMarker> */}
    </ViroARScene>
  );
};
