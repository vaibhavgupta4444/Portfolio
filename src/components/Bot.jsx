import { Suspense } from "react";
import Spline from "@splinetool/react-spline";

export default function Bot() {
  const handleLoad = (spline) => {
    console.log("Spline model loaded:", spline);
  };

  const handleError = (error) => {
    console.error("Error loading Spline model:", error);
  };

  return (
    <div className="h-full w-full bot">
      <Suspense fallback={<p className="text-white text-lg">Loading 3D Model...</p>}>
        <Spline
          scene="https://prod.spline.design/g39g8PWV3LkcOiE3/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
        />
      </Suspense>
    </div>
  );
}
