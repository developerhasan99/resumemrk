import { Input } from "@/components/ui/input";

export default function InputWithLabel({
    id,
    label,
    onChange,
}: {
    id: string;
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
    return (
        <div>
            <label
                className="block mb-1 text-sm font-bold text-gray-500 dark:text-gray-100"
                htmlFor={id}
            >
                {label}
            </label>
            <Input onChange={onChange} id={id} />
        </div>
    );
}
