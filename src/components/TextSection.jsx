import React, { useRef } from "react";
import { usePlay } from "../contexts/Play";
import { Text, Html } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
import { useThree } from "@react-three/fiber";

export const TextSection = ({ sceneOpacity, title, subtitle, btnTitle, link, btnPosition_lg, btnPosition_sm, ...props }) => {
  const meshRef = useRef();
  const { size } = useThree();

  const { play } = usePlay();

  const handleButtonClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <group {...props}>
      {!!title && (
        <Text
          color="#091975"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.62}
          maxWidth={5}
          lineHeight={1}
          strokeWidth={"30"}
          font={"./fonts/Lalezar-Regular.ttf"}
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
        font={"./fonts/Oswald-VariableFont_wght.ttf"}
      >
        {subtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
      {play && <mesh
        ref={meshRef}
        position={size.width > 800 ? btnPosition_lg:btnPosition_sm}
        onClick={handleButtonClick}
        scale={size.width > 800 ? [1, 1, 1] : [1.2, 1.2, 0.5]} // Scale the button based on screen size
      >
        <planeGeometry args={[1.5, 0.5]} />
        <meshStandardMaterial color="#1fbfb8" />
        <mesh position={[0, 0.02, 0.11]}>
          <Text
            cursor={"pointer"}
            color="white"
            anchorX="center"
            anchorY="middle"
            fontSize={0.2}
            font="./fonts/Oswald-VariableFont_wght.ttf"
          >
            {btnTitle}
          </Text>
          <meshBasicMaterial />
        </mesh>
      </mesh>}
    </group>
  );
};
