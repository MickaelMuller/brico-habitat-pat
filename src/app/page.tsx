import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Brico Habitat Pat
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#accueil"
                className="text-gray-700 hover:text-slate-600 transition-colors"
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-slate-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#apropos"
                className="text-gray-700 hover:text-slate-600 transition-colors"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-slate-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <a
              href="tel:0698415713"
              className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              06 98 41 57 13
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="accueil"
        className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Votre artisan de confiance{" "}
                <span className="text-orange-400">dans l&apos;Yonne</span>
              </h2>
              <p className="text-xl mb-8 text-slate-100">
                Patrick Potier, artisan spécialisé plaquiste pouvant aussi vous
                accompagner sur vos travaux de peinture, agencement, électricité
                et plomberie. Un savoir-faire artisanal au service de vos
                projets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0698415713"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg inline-flex items-center justify-center"
                >
                  📞 Demander un devis
                </a>
                <a
                  href="#services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-700 transition-colors font-medium text-lg inline-flex items-center justify-center"
                >
                  Découvrir mes services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="rounded-lg overflow-hidden aspect-square">
                  <Image
                    src="/images/pat1.jpeg"
                    alt="Brico Habitat Pat au travail - Artisan plaquiste dans l'Yonne"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des prestations complètes pour tous vos travaux d&apos;aménagement
              et de rénovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plaquiste */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Plaquiste
              </h3>
              <p className="text-gray-600 mb-4">
                Spécialité principale : pose et finition de cloisons, doublages,
                plafonds suspendus. Travail soigné et finitions impeccables.
              </p>
              <div className="text-sm text-slate-600 font-medium">
                ✓ Mon expertise principale
              </div>
            </div>

            {/* Peinture */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Peinture</h3>
              <p className="text-gray-600 mb-4">
                Peinture intérieure et extérieure, préparation des supports,
                choix des couleurs et finitions adaptées à vos goûts.
              </p>
              <div className="text-sm text-gray-500">
                ✓ Conseils personnalisés
              </div>
            </div>

            {/* Agencement */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Agencement
              </h3>
              <p className="text-gray-600 mb-4">
                Optimisation de vos espaces, pose de rangements, aménagements
                sur mesure pour votre confort.
              </p>
              <div className="text-sm text-gray-500">
                ✓ Solutions sur mesure
              </div>
            </div>

            {/* Électricité */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Électricité
              </h3>
              <p className="text-gray-600 mb-4">
                Petits travaux électriques, ajout de prises, éclairages,
                dépannages courants.
              </p>
              <div className="text-sm text-gray-500">
                ✓ Interventions rapides
              </div>
            </div>

            {/* Plomberie */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-3xl">🚿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Plomberie
              </h3>
              <p className="text-gray-600 mb-4">
                Petite plomberie, réparations, installations sanitaires simples.
              </p>
              <div className="text-sm text-gray-500">
                ✓ Dépannages d&apos;urgence
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl p-8 text-white">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Besoin d&apos;un devis ?
              </h3>
              <p className="mb-6 text-slate-100">
                Contactez-moi directement pour discuter de votre projet et
                obtenir un devis gratuit.
              </p>
              <a
                href="tel:0698415713"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium inline-block"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Brico Habitat Pat */}
      <section id="apropos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Un artisan proche de vous, pour des travaux de qualité
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-slate-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Expertise
              </h3>
              <p className="text-gray-600">
                Artisan plaquiste avec des compétences multiples pour tous vos
                besoins
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Proximité
              </h3>
              <p className="text-gray-600">
                Basé dans l&apos;Yonne, interventions rapides dans un rayon de
                30km
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Qualité</h3>
              <p className="text-gray-600">
                Travail soigné, matériaux de qualité, finitions impeccables
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Réactivité
              </h3>
              <p className="text-gray-600">
                Devis rapide, planning flexible, respect des délais
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Zone d&apos;intervention
                </h3>
                <p className="text-gray-600 mb-6">
                  Basé <strong>à Chassy dans l&apos;Yonne</strong>,
                  j&apos;interviens dans un rayon de 30km pour vos travaux de
                  rénovation et d&apos;aménagement.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-slate-100 rounded-full p-3">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Brico Habitat Pat
                    </div>
                    <div className="text-gray-600">
                      24 rue aux Ânes, Chassy, Yonne
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <div className="rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/pat2.jpeg"
                    alt="Brico Habitat Pat - Artisan du bâtiment professionnel"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <p className="text-gray-600 font-medium">
                  Intervention dans tout l&apos;Yonne
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-moi
            </h2>
            <p className="text-xl text-slate-100">
              Parlons de votre projet ensemble
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <a
                href="tel:0698415713"
                className="text-orange-200 hover:text-orange-100 transition-colors text-lg font-medium"
              >
                06 98 41 57 13
              </a>
              <p className="text-slate-100 mt-2">
                Appelez pour un devis gratuit
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Adresse</h3>
              <p className="text-slate-100">
                24 rue aux Ânes
                <br />
                Chassy, Yonne
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🕒</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Disponibilité</h3>
              <p className="text-slate-100">
                Lundi - Vendredi
                <br />
                8h00 - 18h00
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:0698415713"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg inline-flex items-center"
            >
              📞 Appelez-moi maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Brico Habitat Pat</h3>
            <p className="text-gray-400 mb-4">
              Artisan du Bâtiment dans l&apos;Yonne
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Brico Habitat Pat. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
