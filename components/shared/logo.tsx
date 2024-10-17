import Image from "next/image";

type Props = {};

export const Logo = (props: Props) => {
  return (
    <Image
      alt="logo"
      src="/images/logo.svg"
      width={40}
      height={40}
      className="w-[40px] h-[40px] min-w-[40px] min-h-[40px]"
    />
  );
};
