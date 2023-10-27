import Image from 'next/image';

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-32 h-32 relative animate-spin">
        <Image alt="Logo" src="/logo.png" fill />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        My AI tools are thinking...
      </p>
    </div>
  );
};
