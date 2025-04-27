// app/contact/page.tsx
import React from 'react';

const ContactPage = (): JSX.Element => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-extrabold text-center mb-8 mt-11">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Contact Information */}
        <div className="space-y-8">
          {/* Karachi */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Karachi | کراچی</h2>
            <h3 className="text-lg font-medium mb-2">Orthopaedic and Medical Institute (OMI)</h3>
            <p className="mb-2">Depot Lines, Muhammad Ali Jinnah Rd, Saddar, Karachi</p>
            <p className="mb-2 text-right">ڈیپوٹ لائنز، محمد علی جناح روڈ، صدر، کراچی</p>
            <p className="text-gray-600">
              <strong>Timings:</strong> Mon & Thu | 2:00 PM - 4:00 PM | پیر اور جمعرات
            </p>
          </div>

          {/* Rahim Yar Khan */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Rahim Yar Khan | رحیم یار خان</h2>
            <h3 className="text-lg font-medium mb-2">Diagnostic Interventional Radiology & Cardiac Center</h3>
            <p className="mb-2">Near Govt. Technical College, Thali Road</p>
            <p className="mb-2 text-right">گورنمنٹ ٹیکنیکل کالج کے قریب، تھالی روڈ</p>
            <p className="text-gray-600">
              <strong>Timings:</strong> Sat | 12:00 PM - 5:00 PM | ہفتہ
            </p>
          </div>

          {/* Hyderabad */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Hyderabad | حیدرآباد</h2>
            <h3 className="text-lg font-medium mb-2">Isra Hospital, Cath Lab Cardiology</h3>
            <p className="mb-2 text-right">اسرا اسپتال، کیتھ لیب کارڈیالوجی</p>
            <p className="text-gray-600">
              <strong>Timings:</strong> Fri | 12:00 PM - 2:00 PM | جمعہ
            </p>
          </div>

          {/* Lahore */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Lahore | لاہور</h2>
            <h3 className="text-lg font-medium mb-2">Ihsan Mumtaz Hospital | احسان ممتاز ہسپتال</h3>
            <p className="mb-2">71-E Jauhar Town, Maulana Shaukat Ali Road, Lahore</p>
            <p className="mb-2 text-right">71-E جوہر ٹاؤن مولانا شوکت علی روڈ لاہور</p>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Call Us Now</h3>
                <p>+92 336-7889143</p>
                <p>+92 319-9246838</p>
              </div>
              <div>
                <h3 className="font-medium">Mail Us Now</h3>
                <p>info@dryousufmemon.pk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Have Any Query? Please Contact Us!</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Leave a message here</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;