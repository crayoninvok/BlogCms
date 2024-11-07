import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1180px] p-4">
      {children} 
    </div>
  );
}
