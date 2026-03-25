export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Добро пожаловать в <span className="text-amber-600">WispApp</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Платформа для обмена знаниями, идеями и опытом. 
          Читайте последние посты от наших авторов.
        </p>
        <a 
          href="#posts" 
          className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
        >
          Смотреть посты
        </a>
      </div>
    </section>
  );
}
