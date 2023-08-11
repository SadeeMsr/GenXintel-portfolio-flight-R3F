import React, { useRef } from "react";

import { Text, Html } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export const TextSection = ({ title, subtitle, btnTitle, link, ...props }) => {
  const meshRef = useRef();
  const { size } = useThree();

  const handleButtonClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <group {...props}>
      {!!title && (
        <Text
          color="#031163"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.62}
          maxWidth={5}
          lineHeight={1}
          strokeWidth={"30"}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {title}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.25}
        maxWidth={5}
        font={"./fonts/Inter-Regular.ttf"}
      >
        {subtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
      <mesh
        ref={meshRef}
        position={[0.78, -1.2, 0]}
        onClick={handleButtonClick}
        scale={size.width > 800 ? [1, 1, 1] : [0.5, 0.5, 0.5]} // Scale the button based on screen size
      >
        <planeGeometry args={[1.5, 0.5]} />
        <meshStandardMaterial color="#1fbfb8" />
        <mesh  position={[0, 0, 0.11]}>
          <Text
            cursor={"pointer"}
            color="white"
            anchorX="center"
            anchorY="middle"
            fontSize={0.19}
            font="./fonts/Inter-Regular.ttf"
          >
            {btnTitle}
          </Text>
          <meshBasicMaterial color="" />
        </mesh>
      </mesh>
    </group>
  );
};
