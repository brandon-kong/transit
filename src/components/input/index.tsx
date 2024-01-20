import cn from "@/util/cn";

const shared = "py-2 outline-none px-4 w-full rounded border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-200";

const variants = {
    'primary': "bg-secondary hover:bg-secondary/70 focus:border-primary",
    'unstyled': 'px-0 bg-transparent hover:bg-transparent',
}

type Variant = keyof typeof variants;

type InputProps = {
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    name?: string;
    variant?: Variant;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({ className, type = "text", variant="primary", placeholder="Text", ...rest}: InputProps) => {
    return (
        <input
            className={cn(shared, variants[variant], className)}
            type={type}
            placeholder={placeholder}
            
            {...rest}
        />
    );
};

export default Input;