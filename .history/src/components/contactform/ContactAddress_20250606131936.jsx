function ContactAddress({ icon, title, linkaddress }) {
  return (
    <div className="flex flex-col items-center text-center gap-y-4 md:items-start md:text-left">
      {/* Icon with inner ring effect */}
      <div
        className="p-4 transition-all duration-300 bg-black border border-blue-200 rounded-full md:p-6 ring-2 ring-inset ring-blue-400 hover:ring-blue-300"
        style={{
          boxShadow: "0 0 30px rgba(56, 189, 248, 0.3)",
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-white md:text-xl">{title}</h2>
        <p className="text-blue-300 transition-colors hover:text-blue-100">
          <a href={linkaddress} target="_blank" rel="noopener noreferrer">
            {linkaddress}
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactAddress;
