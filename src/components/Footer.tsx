function Footer() {
  return (
    <footer className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <span className="text-3xl font-bold tracking-tight text-white">
          MernEats.com
        </span>

        <span className="flex gap-4 font-bold tracking-tight text-white">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
