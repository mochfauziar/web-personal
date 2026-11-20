// Layout khusus untuk /keystatic.
// Memakai html + body sendiri supaya tidak bentrok dengan layout utama
// (Navbar, Footer, ThemeProvider, dll).
import KeystaticApp from "./keystatic";

export default function Layout() {
  return <KeystaticApp />;
}
