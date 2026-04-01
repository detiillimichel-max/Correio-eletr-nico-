import { useState, useEffect } from 'react';
import { ProfileDrawer } from './components/ProfileDrawer';
import { getUserLocation } from './services/locationService';

function App() {
  // Estado para controlar se a gaveta de perfil está aberta
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Dados do usuário (Estilo Orkut/Gemini)
  const [userData, setUserData] = useState({
    name: 'Michel (OIO ONE)',
    photo: '', // Inicia vazio para usar o padrão
    location: 'Carregando...',
    bio: 'Desenvolvendo o futuro do OIO ONE pelo celular! 📱🚀',
    game: 'Vibe-app / Retro-gaming'
  });

  // Busca a localização assim que o app inicia
  useEffect(() => {
    getUserLocation().then((loc: any) => {
      setUserData(prev => ({ ...prev, location: loc }));
    });
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      
      {/* CABEÇALHO SIMPLES */}
      <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>OIO ONE</h2>
        {/* Clique aqui para abrir o perfil estilo Orkut */}
        <div 
          onClick={() => setIsProfileOpen(true)}
          style={{ 
            width: '45px', height: '45px', borderRadius: '50%', 
            background: '#007bff', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', fontWeight: 'bold', cursor: 'pointer' 
          }}
        >
          MI
        </div>
      </header>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#666' }}>Toque no seu avatar para ver seu perfil completo.</p>
      </main>

      {/* COMPONENTE DA GAVETA QUE VOCÊ CRIOU */}
      <ProfileDrawer 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        userData={userData} 
      />

    </div>
  );
}

export default App;
