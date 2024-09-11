import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

const Whatssap = () => {
    return (
        <div>
          <FloatingWhatsApp
            phoneNumber='5514991203571' // Required
            accountName='Marcos Diego' 
            avatar='/images/avatar.webp' // Optional
            initialMessageByServer='Olá! Como posso ajudar?' // Optional
            statusMessage='Available' // Optional
            placeholder='Write here...' // Optional
            allowEsc={true} // Optional
            // Explore all available props below
          />
        </div>
      );
    };

export default Whatssap;