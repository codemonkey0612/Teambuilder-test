interface ModalProps {
  isOpen: boolean;
  setOpen: (arg1: boolean) => void;
}
export default function Modal({ isOpen, setOpen }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className=" h-[100vh] w-[100vw] fixed bg-zinc-800 opacity-10">
      <div> </div>
    </div>
  );
}
