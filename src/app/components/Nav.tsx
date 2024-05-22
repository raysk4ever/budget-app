import { SETTINGS } from "@/config/settings";

export default function Nav() {
  return (
    <nav className="navbar">
      <h1>{SETTINGS.TITLE}</h1>
    </nav>
  )
}