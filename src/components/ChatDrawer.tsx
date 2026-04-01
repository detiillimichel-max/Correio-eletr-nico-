import { ChatInput } from './ChatInput';

export const ChatDrawer = ({ isOpen, onClose, friend }: any) => {
  return (
    <div id="glass-drawer" className={isOpen ? 'active' : ''}>
      <div className="drawer-handle" onClick={onClose}></div>
      
      <div style={{ textAlign: 'center', padding: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ color: '#007bff', fontWeight: 'bold' }}>{friend?.name || 'Conversa'}</span>
      </div>

      <div className="chat-content">
        <div style={{ textAlign: 'center', color: '#444', marginTop: '20px' }}>
          Início da conversa segura com {friend?.name}
        </div>
      </div>

      {/* A Barra estilo Gemini que você já tem */}
      <ChatInput />
    </div>
  );
};
