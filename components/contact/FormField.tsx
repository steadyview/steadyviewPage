/** 라벨 + 에러 메시지 래퍼. PRD §4.5 / Task 8.1 */
export default function FormField({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-text">
        {label}
        {required && <span className="ml-0.5 text-aureum-600"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
