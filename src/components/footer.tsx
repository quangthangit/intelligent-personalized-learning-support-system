const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600">
                <span className="text-sm font-bold text-white">E</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                EDUMENTUM
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering learners worldwide with quality education.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["Courses", "Programs", "Certificates", "Pricing"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog", "Contact"],
            },
            {
              title: "Resources",
              links: ["Help Center", "Community", "Partners", "Terms"],
            },
          ].map((column, i) => (
            <div key={i} className="space-y-4">
              <h3 className="font-semibold text-teal-700">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-teal-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-teal-200 text-center text-sm text-muted-foreground">
          <p>© 2025 Edumentum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
