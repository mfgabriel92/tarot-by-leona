import Image from "next/image";

interface Props {
  title: string;
}

export function Title({ title }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <Image
        src="/assets/title-separator.png"
        width={267}
        height={32}
        alt=""
        className="mx-auto md:ml-0"
      />
    </>
  );
}
