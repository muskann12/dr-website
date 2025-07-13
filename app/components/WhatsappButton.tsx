// components/WhatsappButton.tsx

import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/923399988767?text=Assalamualaikum%20Dr.%20Yousuf%2C%20I%20want%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
    >
      <FaWhatsapp size={24} />
      Chat with Dr. Yousuf
    </a>
  );
};

export default WhatsappButton;
