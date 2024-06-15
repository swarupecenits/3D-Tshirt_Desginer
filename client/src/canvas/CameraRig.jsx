import React, { useRef ,useState} from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useDrag } from '@use-gesture/react'

import state from '../store';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);
  
  const [dragProps, setDragProps] = useState({ rotationX: 0, rotationY: 0 });

  const bind = useDrag(({
    offset: [x, y]
  }) => {
    setDragProps({
      rotationX: y / 100,  // Adjust sensitivity
      rotationY: x / 100   // Adjust sensitivity
    });
  });

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // Set the initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // Set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Set the model rotation smoothly, including drag rotation
    easing.dampE(
      group.current.rotation,
      [
        state.pointer.y / 10 + dragProps.rotationX, 
        -state.pointer.x / 5 + dragProps.rotationY, 
        0
      ],
      0.25,
      delta
    );
  });

  return (
    <group ref={group} {...bind()}>{children}</group>
  );
}

export default CameraRig;
