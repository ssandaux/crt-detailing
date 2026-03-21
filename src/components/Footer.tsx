import Image from "next/image";

const links = {
  Services: ["Paint Correction", "Ceramic Coating", "Interior Detailing", "Engine Detail", "Vinyl Wrap"],
  Company: ["About Us", "Gallery", "Process", "Contact"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-gray-700">
      <div className="editorial-container pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-6">
              <Image src="/images/logi.png" alt="Redline" width={110} height={36} className="object-contain" />
            </a>
            <p className="font-body text-xs text-brand-gray-300 leading-relaxed max-w-[200px]">
              Premium automotive detailing studio in Warsaw. Every detail matters.
            </p>
          </div>

          {/* Services links */}
          <div>
            <p className="label-text text-brand-white mb-5">Services</p>
            <ul className="space-y-3">
              {links.Services.map((l) => (
                <li key={l}>
                  <a href="#services" className="label-text hover:text-brand-white transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className="label-text text-brand-white mb-5">Company</p>
            <ul className="space-y-3">
              {links.Company.map((l) => (
                <li key={l}>
                  <a href="#" className="label-text hover:text-brand-white transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="label-text text-brand-white mb-5">Contact</p>
            <ul className="space-y-3">
              <li><a href="tel:+48501234567" className="label-text hover:text-brand-white transition-colors duration-200">+48 501 234 567</a></li>
              <li><a href="mailto:kontakt@redlinedetailing.pl" className="label-text hover:text-brand-white transition-colors duration-200">kontakt@redlinedetailing.pl</a></li>
              <li><span className="label-text">ul. Puławska 180, Warszawa</span></li>
              <li><span className="label-text">Mon–Sat: 8:00 – 19:00</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="editorial-container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="label-text">&copy; {year} Redline Detailing Warsaw. All rights reserved.</p>
          <p className="label-text text-brand-gray-500">Premium Auto Care Studio · Warsaw, Poland</p>
        </div>
      </div>
    </footer>
  );
}
