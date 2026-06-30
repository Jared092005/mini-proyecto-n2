export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-blue-600 animate-spin"></div>
        </div>

        <p className="text-white font-semibold text-lg">Cargando...</p>
      </div>
    </div>
  );
}
