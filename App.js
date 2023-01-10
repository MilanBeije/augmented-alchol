import React, {useState} from 'react';
import {Dimensions, StyleSheet, SafeAreaView, View, Text} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroScene,
  Viro360Image,
  ViroSkyBox,
  ViroNode,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroFlexView,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimations,
  ViroPolygon,
} from '@viro-community/react-viro';

import {Home} from './views/Home';
import {SkatePark} from './views/SkatePark';

import wineTexture from './assets/obj/wine.jpg';
import wine from './assets/obj/wine.obj';
import cointreau from './assets/glb/Cointreau.glb';
import chivas from './assets/glb/Chivas.glb';
import skatepark from './assets/images/bgSkatePark.jpeg';
import Jake from './assets/images/JakeBacon.png';
import Grey from './assets/images/grey.jpg';

const Test = () => {
  const [state, setState] = useState({
    wine: false,
  });
  function handleDrag(draggedToPosition, source) {
    console.log(
      'Dragged to: x' +
        draggedToPosition[0] +
        ' y:' +
        draggedToPosition[1] +
        ' z: ' +
        draggedToPosition[2],
    );
  }

  function handleClick() {
    setState({
      wine: !state.wine,
    });
  }

  ViroMaterials.createMaterials({
    grid: {
      diffuseTexture: Jake,
    },
    grey: {
      diffuseTexture: Grey,
    },
  });

  ViroAnimations.registerAnimations({
    rotate: {
      properties: {
        rotateY: '+=90',
      },
      duration: 250, //.25 seconds
    },
  });

  return (
    <>
      <ViroARScene
      // onAnchorFound={() => console.log('onAnchorFound')}
      // onAnchorUpdated={() => console.log('onAnchorUpdated')}
      // onAnchorRemoved={() => console.log('onAnchorRemoved')}
      >
        {/* <ViroARPlane minHeight={0.1} minWidth={0.1} alignment={'Horizontal'}> */}
        <ViroNode position={[0, 0, -3.25]}>
          <ViroNode position={[0, 2, -1]}>
            <ViroAmbientLight color="#fff" intensity={600} />
            <Viro3DObject
              source={chivas}
              scale={[10, 10, 10]}
              position={[0.7, -3.5, 0]}
              type={'GLB'}
              onClick={handleClick}
            />
            <ViroNode position={[0, 1, -5]}>
              <ViroPolygon
                position={[0, 0, 0]}
                rotation={[0, 0, -45]}
                vertices={[
                  [4, 0],
                  [0, 4],
                  [-4, 0],
                  [0, -4],
                ]}
                materials={'grid'}
              />
              <ViroText
                width={3.5}
                position={[0, 0, 0.5]}
                style={{flex: 1, textAlignVertical: 'center'}}
                color="#414141"
                text="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque
                nobis doloremque? Sit eveniet atque, eaque dignissimos explicabo aperiam a
                accusantium voluptatum repellendus ipsam, labore consectetur dolorum.
                Voluptate, odio aut!      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque
                nobis doloremque? Sit eveniet atque, eaque dignissimos explicabo aperiam a
                accusantium voluptatum repellendus ipsam, labore consectetur dolorum.
                Voluptate, odio aut!      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque
                nobis doloremque? Sit eveniet atque, eaque dignissimos explicabo aperiam a
                accusantium voluptatum repellendus ipsam, labore consectetur dolorum.
                Voluptate, odio aut!      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque
                nobis doloremque? "
              />
            </ViroNode>
          </ViroNode>

          {/* {state.wine && (
            <ViroNode position={[1, 6, 0]} scale={[2, 2, 2]}>
              <ViroText
                text={'cviaoooo'}
                scale={[0.5, 0.5, 0.5]}
                // position={[1.3, 2, -10]}
                style={{fontSize: 30, color: 'white'}}
              />
            </ViroNode>
          )} */}
        </ViroNode>
        {/* </ViroARPlane> */}
      </ViroARScene>
    </>
  );
};

const App = () => {
  return (
    <>
      <ViroARSceneNavigator
        initialScene={{
          scene: Test,
        }}
        initialSceneKey={'Test'}></ViroARSceneNavigator>
      {/* <ViroARSceneNavigator
        initialScene={{
          scene: Home,
        }}
        initialSceneKey={'Home'}
        autofocus={true}
      />
      <View
        style={{
          backgroundColor: 'red',
          position: 'absolute',
          width: '100%',
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 99,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'white', fontSize: 30}}>skate</Text>
        <Text style={{color: 'white', fontSize: 30}}>cucina</Text>
        <Text style={{color: 'white', fontSize: 30}}>faccia</Text>
      </View> */}
    </>
  );
};
export default App;
