import { Suspense, lazy } from "react";

const LazySpline = lazy(() => import("@splinetool/react-spline"));

export default function Bot() {
  return (
    <div className="h-full w-full bot">
      <Suspense fallback={<p className="text-white text-lg w-full h-full flex justify-center items-end">Loading 3D Model...</p>}>
        <LazySpline scene="https://prod.spline.design/SDn9f7GTZ3kHJ-RN/scene.splinecode" />
      </Suspense>
    </div>
  );
}