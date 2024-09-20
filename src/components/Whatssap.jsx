import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';
import profilePic from "../assets/kevinRushProfile.png"

const Whatssap = () => {
    return (
        <div>
          <FloatingWhatsApp
            phoneNumber='5514991203571' // Required
            accountName='Marcos Diego' 
            avatar={profilePic} // Optional
            initialMessageByServer='Olá, tudo bem? Precisa de um Orçamento ou tem alguma dúvuda?' // Optional
            statusMessage='Whatssap' // Optional
            placeholder='Digite aqui...' // Optional
            allowEsc={true} // Optional
            // Explore all available props below
          />
        </div>
      );
    };

export default Whatssap;