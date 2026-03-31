import React from 'react'
import { MessageBubble } from './components/MessageBubble'
import { ChatInput } from './components/Chat/ChatInput'
import { useMessages } from './hooks/useMessages'

export default function App() {
  // Substitua 'Michel' pelo seu nome para testar
  const { messages, sendMessage, sendFile } = useMessages('Michel', 'Destino')

  return (
    <div className="flex flex-col h-screen bg-gemini-dark text-gemini-text">
      {/* Header */}
      <header className="p-4 border-b border-gemini-border bg-gemini-card flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gemini-blue flex items-center justify-center font-bold">C</div>
        <div>
          <h1 className="font-bold text-lg">Correio Eletrônico</h1>
          <p className="text-xs text-green-400">online</p>
        </div>
      </header>

      {/* Mensagens */}
      <main className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map(m => (
          <MessageBubble key={m.id} message={m} isMine={m.sender_id === 'Michel'} />
        ))}
      </main>

      {/* Input */}
      <ChatInput 
        onSend={sendMessage} 
        onFile={sendFile}
        onLocation={() => {}} 
        onPoll={() => {}} 
        onEvent={() => {}} 
        onContact={() => {}} 
      />
    </div>
  )
}

