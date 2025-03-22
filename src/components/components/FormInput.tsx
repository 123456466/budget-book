interface FormInputProps {
  children: string;
  type: string;
  placeholder: string;
}

const FormInput = ({ children, type, placeholder }: FormInputProps) => {
  return (
    <div className="mx-10">
      <p>{children}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="outline-1 outline-gray-300"
      />
    </div>
  );
};

export default FormInput;
