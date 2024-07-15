import Image from "next/image";

interface Props {
  title: string;
  className?: string;
}

export function Title({ title, className }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <Image
        src="/assets/title-separator.png"
        width={167}
        height={32}
        alt=""
        className={className}
      />
    </>
  );
}
