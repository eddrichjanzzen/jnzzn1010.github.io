import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from '@emotion/styled';
import { ReactNode, Suspense } from 'react';

interface IThreeCanvasProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  height: 300px;
`;

const ThreeCanvas = ({ children }: IThreeCanvasProps) => {
  return (
    <Wrapper>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        {children}
        <Suspense fallback={null} />
      </Canvas>
    </Wrapper>
  );
};

export default ThreeCanvas;
