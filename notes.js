//function onInitialized(state, reason) {
//console.log('guncelleme', state, reason);
// if (state === ViroConstants.TRACKING_NORMAL) {
//setText('Hello World!');
// } else if (state === ViroConstants.TRACKING_NONE) {
// Handle loss of tracking
// }
//}
// Displays a Text on camera
// <ViroARScene onTrackingUpdated={onInitialized}>
//   <ViroText
//     text={text}
//     scale={[0.5, 0.5, 0.5]}
//     position={[0, 0, -1]}
//     style={styles.helloWorldTextStyle}
//   />
// </ViroARScene>

// displays a 360 image envolving around the camera
// <ViroARScene style={styles.container}>
//   <Viro360Image source={jake} />
// </ViroARScene>

// dovrebbe fare un cubo che ti circonda con diverse immagini o texture
// <ViroARScene style={styles.container}>
//   <ViroSkyBox color={'red'} />
// </ViroARScene>

// una specie di position absolute in base al genitore che è viroarscene
// <ViroARScene>
//   <ViroNode position={[5, -2, -9]} scale={[2, 2, 2]}>
//     <ViroText text="Text A" position={[0, -0.1, -1]} />
//     <ViroNode position={[1, 0, 0]} scale={[6, 6, 6]}>
//       <ViroText text="Text B" />
//     </ViroNode>
//   </ViroNode>
// </ViroARScene>

// cubo
// <ViroARScene>
//   <ViroBox
//     height={2}
//     length={2}
//     width={2}
//     scale={[0.2, 0.2, 0.2]}
//     position={[0, -1, -1]}
//     materials={["jake"]}
//   />
// </ViroARScene>

// display flex
// <ViroFlexView
//     style={{flex: 1, flexDirection: 'row', padding: 0.1}}
//     // width={1}
//     // height={1}
//     position={[0, 0.0, -3.0]}
//     rotation={[0, 0, 0]}>

//   </ViroFlexView>
{
  /* <ViroARImageMarker
        target={'targetOne'}
        onAnchorFound={() => console.log('jake')}>
        <ViroNode position={[0, -1, 0]} scale={[1, 1, 1]} onDrag={handleDrag}>
          <Viro3DObject
            source={cointreau}
            scale={[0.2, 0.2, 0.2]}
            position={[0, 0, 0]}
            // rotation={[0, 180, 180]}
            type={'GLB'}
            style={{flex: 0.3}}
            onClick={handleClick}
          />
          {state.wine && (
            <ViroNode position={[1, 6, 0]} scale={[2, 2, 2]}>
              <ViroText
                text={'cviaoooo'}
                scale={[0.5, 0.5, 0.5]}
                // position={[1.3, 2, -10]}
                style={{fontSize: 30, color: 'white'}}
              />
            </ViroNode>
          )}
        </ViroNode>
      </ViroARImageMarker> */
}

{
  /* <Viro3DObject
        source={wine}
        scale={[0.2, 0.2, 0.2]}
        position={[1.3, 0, -10]}
        rotation={[90, 180, 180]}
        materials={['wineMaterial']}
        type={'OBJ'}
        style={{flex: 0.3}}
        onClick={handleClick}
      />
      <Viro3DObject
        source={wine}
        scale={[0.2, 0.2, 0.2]}
        position={[-1.3, 0, -10]}
        rotation={[90, 180, 180]}
        materials={['wineMaterial']}
        type={'OBJ'}
        style={{flex: 0.3}}
        onClick={handleClick}
      /> */
}
{
  /* <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[1.3, 6, -10]}
        style={{fontSize: 70, color: 'white'}}></ViroText> */
}

// var styles = StyleSheet.create({
//   f1: {flex: 1},
//   helloWorldTextStyle: {
//     fontFamily: 'Arial',
//     fontSize: 30,
//     color: '#ffffff',
//     textAlignVertical: 'center',
//     textAlign: 'center',
//   },
// });

// const HelloWorldSceneAR = () => {
//

//   return (
//     <>
//       <ViroARScene>
//         <Viro360Image source={skatepark} />
//         <ViroAmbientLight color="#ffffff" intensity={200} />
//         <ViroARImageMarker target={'targetOne'}>
//           <Viro3DObject
//             source={cointreau}
//             scale={[5, 5, 5]}
//             position={[0, 0, -2]}
//             rotation={[270, 0, 0]}
//             type="GLB"
//             onClick={handleClick}
//           />
//         </ViroARImageMarker>
//       </ViroARScene>
//     </>
//   );
// };

// export default () => {
//   return (
//     <>
//       <ViroARSceneNavigator
//         autofocus={true}
//         initialScene={{
//           scene: HelloWorldSceneAR,
//         }}
//         style={styles.f1}
//       />
//     </>
//   );
// };

// const Home = props => {
//   const [state, setState] = useState({wine: false});

//   // const handleClick = () => {
//   //   setState({
//   //     wine: !state.wine,
//   //   });
//   // };
//   const handleClick = () => {
//     console.log('navigando');
//     props.sceneNavigator.push({scene: Skatepark});
//   };
//   ViroARTrackingTargets.createTargets({
//     targetOne: {
//       source: Jake,
//       orientation: 'Up',
//       physicalWidth: 1,
//     },
//   });

//   ViroMaterials.createMaterials({
//     wineMaterial: {
//       diffuseTexture: wineTexture,
//     },
//   });

//   return (
//     <ViroARScene>
//       <ViroAmbientLight color="#ffffff" intensity={600} />
//       {/* <ViroARImageMarker target={'targetOne'}> */}
//       <ViroText
//         position={[0, 0, -2]}
//         onClick={handleClick}
//         text="ciaone"
//         style={{fontSize: 50, color: 'yellow'}}></ViroText>
//       {/* <Viro3DObject
//         source={cointreau}
//         scale={[5, 5, 5]}
//         position={[0, 0, -2]}
//         rotation={[270, 0, 0]}
//         type="GLB"
//       /> */}
//       {/* </ViroARImageMarker> */}
//     </ViroARScene>
//   );
// };
