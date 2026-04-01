import { useState, useEffect } from 'react';
import { ProfileDrawer } from './components/ProfileDrawer';
import { FriendList } from './components/FriendList';
import { ImportButton } from './components/ImportButton'; // O botão "="
import { getFriends } from './services/friendService';

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [friends, setFriends] = useState<any[]>([]);
  
  const [userData] = useState({
    name: 'Michel (OIO ONE)',
    location: 'Bom Jesus dos Perdões, SP',
    bio: 'Desenvolvendo o futuro do OIO ONE pelo celular! 📱🚀'
  });

  // Carrega os amigos iniciais
  useEffect(() => {
    getFriends().then((data: any) => setFriends(data));
  }, []);

  // Função que recebe o contacto importado da agenda do telemóvel
  const handleImportedContact = (contact: any) => {
    const newFriend = {
      id: Date.now(), // Gera um ID único baseado no tempo
      name: contact.name,
      status: `Contacto: ${contact.phone}`,
      photo: '',
      initial: contact.name.charAt(0).toUpperCase()
    };
    // Adiciona o novo amigo ao topo da lista
    setFriends([newFriend, ...friends]);
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', position: 'relative' }}>
      
      <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontWeight: '300', letterSpacing: '1px' }}>OIO ONE</h2>
        <div 
          onClick={() => setIsProfileOpen(true)} 
          style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#007bff', display: 'flex', alignItems: 'center', justify-content: 'center', cursor: 'pointer', fontWeight: 'bold' }}
        >
          MI
        </div>
      </header>

      <main style={{ paddingBottom: '80px' }}>
        <FriendList 
          friends={friends} 
          onFriendClick={(f: any) => alert(`Abrir chat com: ${f.name}`)} 
        />
      </main>

      {/* BOTÃO "=" FLUTUANTE NO CANTO INFERIOR DIREITO */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100 }}>
        <ImportButton onImport={handleImportedContact} />
      </div>

      {/* GAVETA DE PERFIL (ORKUT STYLE) */}
      <ProfileDrawer 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        userData={userData} 
      />

    </div>
  );
}

export default App;
