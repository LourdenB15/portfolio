type TagToggleProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
};

export default function TagToggle({
  label,
  selected,
  onClick,
  icon,
}: TagToggleProps) {
  return (
    <span
      onClick={onClick}
      className={`flex items-center gap-2 border border-border rounded-full px-4 py-1 text-sm cursor-pointer duration-200 ${
        selected ? "bg-muted text-foreground" : "hover:bg-muted/50"
      }`}
    >
      {icon}
      {label}
    </span>
  );
}
