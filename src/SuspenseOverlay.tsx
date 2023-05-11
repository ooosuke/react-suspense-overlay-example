import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

export function SuspenseOverlay({ children, fallback }: Props) {
  return (
    <Suspense
      fallback={
        <>
          {children}
          {fallback}
        </>
      }
    >
      {children}
    </Suspense>
  );
}
