import cn from "@/util/cn";

type InputProps = {
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({ className, type = "text", placeholder="Text", value, onChange, onBlur, onFocus, onKeyDown }: InputProps) => {
    return (
        <input
            className={cn("bg-secondary hover:bg-secondary/70 py-2 outline-none px-4 rounded border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-200", className)}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
        />
    );
};

export default Input;