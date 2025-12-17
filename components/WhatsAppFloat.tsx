export default function WhatsAppFloat() {
  const phone = "5491164412289"; // <-- CAMBIAR
  const text = encodeURIComponent("Hola! Quiero consultar por servicios de NeuralCraft.");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600"
    >
      WhatsApp <span className="opacity-90">→</span>
    </a>
  );
}
