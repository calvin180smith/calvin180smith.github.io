import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Contact() {
  return (
    <section id="contact" className="">
      <div className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center px-4 sm:px-6">
        <div className="text-center mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-200 font-semibold reveal">
            Contact Me
          </h1>
          <div className="mt-5 text-slate-200 text-base sm:text-lg md:text-xl font-bold reveal px-4">
            Feel free to reach out if you want to connect!
          </div>
          <ul className="flex flex-col mx-auto mt-5 space-y-4">
            <li className="text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl font-bold reveal flex items-center justify-center gap-2 break-all px-4">
              <EmailIcon className="flex-shrink-0" />{" "}
              <span className="break-all">calvin.smith.math@gmail.com</span>
            </li>
            <li className="text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl font-bold reveal flex items-center justify-center gap-2">
              <LocalPhoneIcon className="flex-shrink-0" /> +46 735 308 775
            </li>
            <li className="text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl font-bold reveal flex items-center justify-center gap-2">
              <LinkedInIcon className="flex-shrink-0" />{" "}
              <a
                className="underline hover:text-blue-400"
                href="https://www.linkedin.com/in/calvin-smith-85936b162/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
