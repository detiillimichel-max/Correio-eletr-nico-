import { useState, useEffect } from 'react';
import { ProfileDrawer } from './components/ProfileDrawer';
import { FriendList } from './components/FriendList';
import { ImportButton } from './components/ImportButton';
import { ChatDrawer } from './components/ChatDrawer';
import { getFriends } from './services/friendService';

// Função com nome minúsculo para combinar com app.tsx
function app() {
  // Controles de interface (Gavetas)
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Dados do Usuário e Amigos
  const [selectedFriend, setSelectedFriend] = useState<any>(null);
  const [friends, setFriends] = useState<any[]>([]);
  
  const [userData] = useState({
    name: 'Michel (OIO ONE)',
    location: 'Bom Jesus dos Perdões, SP',
    bio: 'Desenvolvendo o futuro do OIO ONE pelo celular! 📱🚀',
    game: 'Vibe-app / Retro-gaming'
  });

  // Carrega a lista inicial de amigos
  useEffect(() => {
    getFriends().then((data: any) => setFriends(data));
  }, []);

  // Importar contato real da agenda
  const handleImportedContact = (contact: any) => {
    const newFriend = {
      id: Date.now(),
      name: contact.name,
      status: `📞 ${contact.phone}`,
      photo: '',
      initial: contact.name.charAt(0).toUpperCase()
    };
    setFriends([newFriend, ...friends]);
  };

  // Abrir conversa
  const openChat = (friend: any) => {
    setSelectedFriend(friend);
    setIsChatOpen(true);
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      
      {/* CABEÇALHO */}
      <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontWeight: '300', margin: 0 }}>Vibe Mensagens</h2>
        <div 
          onClick={() => setIsProfileOpen(true)} 
          style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold' }}
        >
          MI
        </div>
      </header>

      {/* LISTA DE AMIGOS */}
      <main style={{ paddingBottom: '100px', height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
        <FriendList 
          friends={friends} 
          onFriendClick={openChat} 
        />
      </main>

      {/* BOTÃO "=" (AGENDA REAL) */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100 }}>
        <ImportButton onImport={handleImportedContact} />
      </div>

      {/* GAVETA PERFIL */}
      <ProfileDrawer 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        userData={userData} 
      />

      {/* GAVETA CHAT */}
      <ChatDrawer 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        friend={selectedFriend} 
      />

    </div>
  );
}

export default app;
