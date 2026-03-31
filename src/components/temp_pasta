import React from 'react'
import { MessageBubble } from './components/MessageBubble'
import { ChatInput } from './components/Chat/ChatInput'
import { useMessages } from './hooks/useMessages'
import { useSound } from './hooks/useSound'
import { usePush } from './hooks/usePush'

export default function App() {
  useSound() // Ativa os sons
  usePush()  // Ativa notificações
  
  const { messages, sendMessage, sendFile, sendLocation } = useMessages('Michel', 'Destino')

  return (
    <div className="flex flex-col h-screen bg-gemini-dark text-gemini-text overflow-hidden">
      <header className="p-4 border-b border-gemini-border bg-gemini-card flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gemini-purple flex items-center justify-center font-bold">M</div>
          <div>
            <h1 className="font-bold">Correio Eletrônico</h1>
            <p className="text-xs text-green-400">online</p>
          </div>
        </div>
        <i className="fa-solid fa-video text-gemini-blue text-lg mr-4" />
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-fixed opacity-90">
        {messages.map(m => (
          <MessageBubble key={m.id} message={m} isMine={m.sender_id === 'Michel'} />
        ))}
      </main>

      <ChatInput 
        onSend={sendMessage} 
        onFile={sendFile}
        onLocation={sendLocation}
        onPoll={() => {}} 
        onEvent={() => {}} 
        onContact={() => {}} 
      />
    </div>
  )
}
