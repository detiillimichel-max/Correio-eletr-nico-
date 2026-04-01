import { selectPhoneContact } from '../services/contactIntegration';

export const ImportButton = ({ onImport }: any) => {
  const handlePress = async () => {
    const contact = await selectPhoneContact();
    if (contact) {
      onImport(contact); // Envia o contato escolhido para a lista do app
    }
  };

  return (
    <button 
      onClick={handlePress}
      style={{
        width: '50px', height: '50px', borderRadius: '50%',
        background: '#28a745', color: 'white', border: 'none',
        fontSize: '24px', fontWeight: 'bold', cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
      }}
    >
      =
    </button>
  );
};
