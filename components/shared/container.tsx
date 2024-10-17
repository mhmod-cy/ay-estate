type Props = {
  className?: any;
} & React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, ...props }: Props) => {
  return (
    <div
      {...props}
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${props.className}`}
    >
      {children}
    </div>
  );
};
