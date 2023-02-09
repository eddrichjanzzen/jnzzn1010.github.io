import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from '@emotion/styled';
import { ReactNode, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

interface IThreeCanvasProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  height: 200px;
`;

const ThreeCanvas = ({ children }: IThreeCanvasProps) => {
  return (
    <Wrapper>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense
          fallback={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="teal.500"
              size="xl"
            />
          }
        >
          {children}
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default ThreeCanvas;
