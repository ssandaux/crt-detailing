import Image from "next/image";

const links = {
  Services: ["Paint Correction", "Ceramic Coating", "Interior Detailing", "Engine Detail", "Vinyl Wrap"],
  Company: ["About Us", "Gallery", "Process", "Contact"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-gray-700">
      <div className="editorial-container pt-8 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <Image src="/images/logi.png" alt="Redline" width={90} height={30} className="object-contain" />
            </a>
            <p className="font-body text-xs text-brand-gray-300 leading-relaxed">
              Premium auto detailing studio in Warsaw.
            </p>
          </div>

          {/* Contact info */}
          <div className="col-span-1 md:col-span-1">
            <p className="label-text text-brand-white mb-3 md:mb-5">Contact</p>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="tel:+48501234567" className="label-text hover:text-brand-white transition-colors duration-200">+48 501 234 567</a></li>
              <li><a href="mailto:kontakt@redlinedetailing.pl" className="label-text hover:text-brand-white transition-colors duration-200 break-all">kontakt@redline.pl</a></li>
              <li><span className="label-text">ul. Puławska 180</span></li>
              <li><span className="label-text">Mon–Sat: 8–19</span></li>
            </ul>
          </div>

          {/* Services links */}
          <div className="col-span-1 md:col-span-1">
            <p className="label-text text-brand-white mb-3 md:mb-5">Services</p>
            <ul className="space-y-2 md:space-y-3">
              {links.Services.map((l) => (
                <li key={l}>
                  <a href="#services" className="label-text hover:text-brand-white transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="col-span-1 md:col-span-1">
            <p className="label-text text-brand-white mb-3 md:mb-5">Company</p>
            <ul className="space-y-2 md:space-y-3">
              {links.Company.map((l) => (
                <li key={l}>
                  <a href="#" className="label-text hover:text-brand-white transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="editorial-container py-5 flex items-center justify-center md:justify-between">
          <p className="label-text">&copy; {year} Redline Detailing Warsaw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
