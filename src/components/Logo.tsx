import logo from "@/assets/bitdecentro-logo.png";

export function Logo({ className = "h-9" }: { className?: string }) {
  return <img src={logo} alt="bitdecentro" className={className} />;
}
