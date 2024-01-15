import cn from "@/util/cn";

const variants = {
    "primary": "bg-primary-50 border-primary-500",
    "secondary": "bg-secondary-50 border-secondary-500",
    "success": "bg-success-50 border-success-500",
    "warning": "bg-warning-50 border-warning-500",
    "danger": "bg-danger-50 border-danger-500",
    "info": "bg-info-50 border-info-500",
}

type VariantKey = keyof typeof variants

export type CardProps = {
    className?: string
    variant?: VariantKey
}

const shared  = "border border-opacity-50 border-solid rounded-lg px-5 py-2 transition-all duration-300"

const Card = ({ className, children, variant='primary' }: React.PropsWithChildren<CardProps>) => {
    return (
        <div className={cn(shared, variants[variant], className)}>
            {children}
        </div>
    );
};

export default Card;