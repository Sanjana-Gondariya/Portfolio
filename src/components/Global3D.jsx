import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Sphere, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SceneObjects({ isMobile }) {
  const group = useRef();
  const sphereRef = useRef();
  const geo1Ref = useRef();
  const geo2Ref = useRef();
  const { viewport } = useThree();
  
  // Track continuous target rotation/position based on scroll
  const scrollData = useRef({
    targetY: 0,
    currentY: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      // Normalize scroll between 0 and 1
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      scrollData.current.targetY = window.scrollY / (totalScroll || 1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    // Lerp scroll position for smooth transition
    scrollData.current.currentY = THREE.MathUtils.lerp(
      scrollData.current.currentY, 
      scrollData.current.targetY, 
      0.05
    );
    const s = scrollData.current.currentY;

    // Time-based idle animation
    const t = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = t * 0.1 + s * Math.PI * 2;
      group.current.position.y = -s * 5; // Move down as we scroll down
    }

    if (sphereRef.current) {
      // Warp sphere to the right as we scroll
      sphereRef.current.position.x = THREE.MathUtils.lerp(-3, viewport.width * 0.4, s);
      // Change color dynamically? (Requires color interpolation, skipping for perf, using fixed colors for now, but position changes)
    }

    if (geo1Ref.current) {
      geo1Ref.current.position.x = THREE.MathUtils.lerp(3, -viewport.width * 0.3, s);
      geo1Ref.current.rotation.x = t * 0.2 + s * 4;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron ref={geo1Ref} args={[isMobile ? 0.6 : 1, 0]} position={[3, 1, 0]}>
          <meshStandardMaterial color="#7E22CE" wireframe />
        </Icosahedron>
      </Float>

      {!isMobile && (
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
          <Sphere ref={sphereRef} args={[0.8, 64, 64]} position={[-3, -1, -2]}>
            <MeshDistortMaterial
              color="#0EA5E9"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>
      )}

      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron ref={geo2Ref} args={[isMobile ? 0.3 : 0.5, 0]} position={[2, -10, 1]}>
          <meshStandardMaterial color="#3b82f6" wireframe />
        </Icosahedron>
      </Float>
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    // Subtle mouse sway
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.pointer.x * 0.5), 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.pointer.y * 0.5), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Global3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={isMobile ? 1 : [1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Adaptive Star Field */}
        <Stars 
          radius={100} 
          depth={50} 
          count={isMobile ? 1500 : 4000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={2} 
        />
        
        <SceneObjects isMobile={isMobile} />
        
        {/* Only enable CameraRig on Desktop so mobile scroll isn't jittery */}
        {!isMobile && <CameraRig />}
      </Canvas>
    </div>
  );
}
