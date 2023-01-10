import {useRef} from 'react';

import {
  ViroARScene,
  ViroAmbientLight,
  Viro3DObject,
} from '@viro-community/react-viro';

export const SkatePark = props => {
  const ref = useRef("SkatePark")

  return (
    <ViroARScene ref={ref}>
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <Viro3DObject
        source={cointreau}
        scale={[5, 5, 5]}
        position={[0, 0, -2]}
        rotation={[270, 0, 0]}
        type="GLB"
      />
    </ViroARScene>
  );
};
