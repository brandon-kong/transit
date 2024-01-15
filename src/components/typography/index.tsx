import cn from "@/util/cn";

type TypographyProps = {
    className?: string;
    children?: React.ReactNode;
};

const LandingHeading = ({ className, children }: TypographyProps) => {
    return (
        <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-loose lg:leading-10 lg:text-6xl", className)}>
            {children}
        </h1>
    );
};

const H1 = ({ className, children }: TypographyProps) => {
    return (
        <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
            {children}
        </h1>
    );
};

const H2 = ({ className, children }: TypographyProps) => {
    return (
        <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0", className)}>
            {children}
        </h2>
    );
};

const H3 = ({ className, children }: TypographyProps) => {
    return (
        <h3 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight", className)}>
            {children}
        </h3>
    );
};

const H4 = ({ className, children }: TypographyProps) => {
    return (
        <h4 className={cn("font-semibold text-2xl", className)}>
            {children}
        </h4>
    );
};

const H5 = ({ className, children }: TypographyProps) => {
    return (
        <h5 className={cn("font-semibold text-xl", className)}>
            {children}
        </h5>
    );
};

const H6 = ({ className, children }: TypographyProps) => {
    return (
        <h6 className={cn("font-semibold text-lg", className)}>
            {children}
        </h6>
    );
};

const P = ({ className, children }: TypographyProps) => {
    return (
        <p className={cn("font-normal text-base", className)}>
            {children}
        </p>
    );
};

const Typography = {
    LandingHeading,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
};

export default Typography;

export {
    LandingHeading,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
}