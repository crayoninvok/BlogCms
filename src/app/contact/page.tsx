export default function ContactPage() {
    return (
        <div className="hero min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <div className="text-center px-6 max-w-2xl">
                <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
                    Hubungi Kami
                </h1>
                <p className="text-lg mb-8 drop-shadow-sm">
                    Kami selalu siap mendengar dari Anda! Apapun pertanyaan, saran, atau kebutuhan yang Anda miliki, jangan ragu untuk menghubungi kami melalui saluran yang telah kami sediakan.
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="tel:+628123456789"
                        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 transform hover:scale-105"
                    >
                        Telepon
                    </a>
                    <a
                        href="mailto:info@company.com"
                        className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-500 hover:text-white transition duration-300 transform hover:scale-105"
                    >
                        Email
                    </a>
                </div>
            </div>
        </div>
    );
}
