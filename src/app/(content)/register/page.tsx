"use client";
import { useRouter } from "next/navigation";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { Suspense, useRef, useState } from "react";

function StarField(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#00bfff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ComingSoon() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Spacey background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
      {/* Three.js Star Field */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <StarField />
          </Suspense>
        </Canvas>
      </div>
      <div className="z-10 flex flex-col items-center justify-center px-6 py-12">
        <h1 className={cn("text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-center tracking-widest", orbitronFont.className)}>
          COMING SOON
        </h1>
        <p className="text-lg md:text-2xl mb-10 text-center max-w-xl text-blue-200">
         Stay tuned for updates!
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-400 text-white font-semibold text-lg shadow-lg transition-all duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
