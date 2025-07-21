const TextField = ({
    label,
    onChange,
    id,
    name,
    value,
    placeholder,
    required = false,
    type = "text",
}) => {
    return (
        <div className={"flex flex-col gap-3"}>
            <label htmlFor={id}>{label}</label>
            <input
                className="border border-gray-600 rounded p-2"
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                required={required}
                onChange={onChange}
            />
        </div>
    );
};

export default TextField;