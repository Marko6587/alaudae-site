"use client"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Contact() {
  const { language } = useLanguage()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const getContactContent = () => {
    switch (language) {
      case "uk":
        return {
          title: "Зв'яжіться з нами",
          description: "Маєте питання або готові почати проект? Зв'яжіться з нами будь-яким зручним способом.",
          form: {
            name: "Ім'я",
            email: "Електронна пошта",
            subject: "Тема",
            message: "Повідомлення",
            submit: "Надіслати",
            success: "Дякуємо за ваше повідомлення! Ми зв'яжемося з вами найближчим часом.",
          },
          contact: {
            title: "Контактна інформація",
            address: "Адреса",
            addressLine: "вул. Бізнес-центр, 123, Київ, Україна",
            phone: "Телефон",
            email: "Електронна пошта",
          },
        }
      case "en":
        return {
          title: "Contact Us",
          description: "Have questions or ready to start a project? Contact us in any convenient way.",
          form: {
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message",
            submit: "Submit",
            success: "Thank you for your message! We will contact you soon.",
          },
          contact: {
            title: "Contact Information",
            address: "Address",
            addressLine: "Business Center St., 123, Kyiv, Ukraine",
            phone: "Phone",
            email: "Email",
          },
        }
      case "pl":
        return {
          title: "Skontaktuj się z nami",
          description:
            "Masz pytania lub jesteś gotowy rozpocząć projekt? Skontaktuj się z nami w dowolny wygodny sposób.",
          form: {
            name: "Imię",
            email: "E-mail",
            subject: "Temat",
            message: "Wiadomość",
            submit: "Wyślij",
            success: "Dziękujemy za Twoją wiadomość! Skontaktujemy się z Tobą wkrótce.",
          },
          contact: {
            title: "Informacje kontaktowe",
            address: "Adres",
            addressLine: "ul. Centrum Biznesowe, 123, Kijów, Ukraina",
            phone: "Telefon",
            email: "E-mail",
          },
        }
      case "de":
        return {
          title: "Kontaktieren Sie uns",
          description:
            "Haben Sie Fragen oder sind Sie bereit, ein Projekt zu starten? Kontaktieren Sie uns auf jede bequeme Weise.",
          form: {
            name: "Name",
            email: "E-Mail",
            subject: "Betreff",
            message: "Nachricht",
            submit: "Absenden",
            success: "Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
          },
          contact: {
            title: "Kontaktinformationen",
            address: "Adresse",
            addressLine: "Geschäftszentrum Str., 123, Kiew, Ukraine",
            phone: "Telefon",
            email: "E-Mail",
          },
        }
      default:
        return {
          title: "Свяжитесь с нами",
          description: "Есть вопросы или готовы начать проект? Свяжитесь с нами любым удобным способом.",
          form: {
            name: "Имя",
            email: "Электронная почта",
            subject: "Тема",
            message: "Сообщение",
            submit: "Отправить",
            success: "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.",
          },
          contact: {
            title: "Контактная информация",
            address: "Адрес",
            addressLine: "ул. Бизнес-центр, 123, Киев, Украина",
            phone: "Телефон",
            email: "Электронная почта",
          },
        }
    }
  }

  const content = getContactContent()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setFormSubmitted(true)
  }

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl font-light mb-4">{content.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">{content.description}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {formSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-6" />
                  <p className="text-xl font-light mb-2">{content.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-500 mb-1 font-light">
                      {content.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none focus:border-gray-400 transition-all duration-200 bg-transparent font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-500 mb-1 font-light">
                      {content.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none focus:border-gray-400 transition-all duration-200 bg-transparent font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-500 mb-1 font-light">
                      {content.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none focus:border-gray-400 transition-all duration-200 bg-transparent font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-500 mb-1 font-light">
                      {content.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none focus:border-gray-400 transition-all duration-200 bg-transparent font-light"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group bg-white hover:bg-gray-50 text-black border border-gray-200 font-light py-3 px-8 transition duration-300 flex items-center"
                    >
                      {content.form.submit}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-light mb-8">{content.contact.title}</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1 font-light">{content.contact.address}</p>
                  <p className="text-gray-600 font-light">{content.contact.addressLine}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1 font-light">{content.contact.phone}</p>
                  <p className="text-gray-600 font-light">+380 44 123 4567</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1 font-light">{content.contact.email}</p>
                  <p className="text-gray-600 font-light">info@alaudae.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
