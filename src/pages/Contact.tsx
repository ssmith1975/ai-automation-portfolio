"client-side";
import Navigation from "@/components/Navigation";
import React from "react";
import emailIcon from "@/assets/icons/email-circle-fill-svgrepo-com.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon-circle.svg";
import whatsAppIcon from "@/assets/icons/whatsapp-icon-32x32.svg";

const Contact = () => {
  const WEBHOOK_URL = "https://n8n.ssmith-ai.tech/webhook/portfolio-contact"; // Replace with your webhook URL
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "Portfolio Inquiry",
    comment: "",
    formName: "Portfolio Contact",
  });
  const [status, setStatus] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          comment: "",
          subject: "Portfolio Inquiry",
          formName: "Portfolio Contact",
        });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="">
              <div className="width-full">
                <h1 className="text-minimal text-muted-foreground mb-4">
                  GET IN TOUCH
                </h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Get Started
                  <br /> <em>Now!</em>
                </h2>
                <div className="md:space-y-0 space-y-6 grid grid-cols-1 lg:grid-cols-2 width-full gap-10">
                  {/* Contact Box */}
                  <div
                    className="contactbox p-6 drop-shadow-lg 
                  bg-shadow-lg rounded-lg dark:border-none h-min"
                  >
                    <div className="bg-white drop-shadow-lg">
                      <div className="p-8">
                        <h3 className="text-minimal text-black mb-2">
                          <a
                            href="mailto:hello@archstudio.com"
                            aria-label="Send an email"
                            className="text-xl block hover:text-sky-800 hover:cursor-pointer"
                          >
                            <span className="inline-block align-middle mr-2">
                              <img
                                src={emailIcon}
                                alt="Email"
                                width="32"
                                height="32"
                              />
                            </span>
                            <span className="inline-block  align-middle">
                              EMAIL
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div className="p-8">
                        <h3 className="text-minimal text-black  mb-2">
                          <a
                            href="https://www.linkedin.com/in/ssmith-ai/"
                            aria-label="Visit LinkedIn profile"
                            className="text-xl block hover:text-sky-800 hover:cursor-pointer after:content-['_↗']"
                          >
                            <span className="inline-block align-middle mr-2">
                              <img
                                src={linkedinIcon}
                                alt="LinkedIn"
                                width="32"
                                height="32"
                              />
                            </span>
                            <span className="inline-block">LINKEDIN</span>
                          </a>
                        </h3>
                      </div>

                      <div className="p-8">
                        <h3 className="text-minimal text-black mb-2">
                          <a
                            href="https://wa.me/13146812177"
                            aria-label="Chat on WhatsApp"
                            className="text-xl block hover:text-sky-800 hover:cursor-pointer after:content-['_↗']"
                          >
                            <span className="inline-block align-middle mr-2">
                              <img
                                src={whatsAppIcon}
                                alt="WhatsApp icon"
                                width="32"
                                height="32"
                              />
                            </span>
                            <span className="inline-block">WHATSAPP</span>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}

                  <div className="h-min rounded-lg order-first lg:order-last">
                    <form
                      className="space-y-6  p-8 rounded-lg dark:bg-sky-800 border border-border border-sky-800"
                      onSubmit={handleSubmit}
                    >
                      <div className="grid lg:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-2xl font-bold mb-1"
                          >
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                            className="w-full border border-border border-sky-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-2xl font-bold mb-1"
                          >
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                            className="w-full border border-border border-sky-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-2xl font-bold mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-border border-sky-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-2xl font-bold mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-border border-sky-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="comment"
                          className="block text-2xl font-bold mb-1"
                        >
                          Comment *
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          value={form.comment}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full border border-border border-sky-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                          type="hidden"
                          name="formName"
                          value="Portfolio Contact"
                        />
                        <input
                          type="hidden"
                          name="subject"
                          value="Portfolio Inquiry"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold text-2xl p-6 rounded hover:bg-primary-dark transition-colors duration-300"
                      >
                        Send Message
                      </button>
                      {status && (
                        <p className="text-lg mt-2 text-center text-muted-foreground ">
                          {status}
                        </p>
                      )}
                    </form>
                    <div className="mt-12 text-center">
                      <p className="text-lg italic text-muted-foreground">
                        * Required fields
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
