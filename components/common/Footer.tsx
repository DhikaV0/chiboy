export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Chiboy. All rights reserved.
      </div>
    </footer>
  );
}
