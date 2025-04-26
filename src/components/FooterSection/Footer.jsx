import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0B0B21] text-white px-6 py-10 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Us */}
                <div>
                    <img src="/public/assets/logo-footer.png" alt="Cricket Logo" className="w-24 mb-4" />
                    <p className="text-gray-400">
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">Services</a></li>
                        <li><a href="#" className="hover:text-white transition">About</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                    <p className="text-gray-400 mb-4">
                        Subscribe to our newsletter for the latest updates.
                    </p>

                    <form className="flex flex-col sm:flex-row items-center gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 border-2 rounded-full w-full sm:w-auto text-white focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-pink-400 to-yellow-400 px-6 py-2 rounded-full font-semibold text-black hover:scale-105 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
                ©2025 Your Company. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
