import React, { useState } from 'react'
import { AttachmentMenu } from '../AttachmentMenu'
import type { MessageType } from '../../types/database'

interface Props {
  onSend: (text: string) => void
  onFile: (file: File, type: MessageType) => void
  onLocation: () => void
  onPoll: () => void
  onEvent: () => void
  onContact: () => void
}

export function ChatInput({ onSend, onFile, onLocation, onPoll, onEvent, onContact }: Props) {
  const [text, setText] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSend = () => {
    if (text.trim()) {
      onSend(text)
      setText('')
    }
  }

  return (
    <footer className="p-3 bg-gemini-card border-t border-gemini-border relative">
      <AttachmentMenu 
        open={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        onFile={onFile}
        onLocation={onLocation}
        onPoll={onPoll}
        onEvent={onEvent}
        onContact={onContact}
      />
      <div className="flex items-center gap-2">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center text-gemini-muted hover:text-gemini-blue"
        >
          <i className="fa-solid fa-paperclip text-xl" />
        </button>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Mensagem"
          className="flex-1 bg-gemini-dark border border-gemini-border rounded-full px-4 py-2 focus:outline-none focus:border-gemini-blue"
        />
        <button 
          onClick={handleSend}
          className="w-10 h-10 bg-gemini-blue rounded-full flex items-center justify-center text-white"
        >
          <i className="fa-solid fa-paper-plane" />
        </button>
      </div>
    </footer>
  )
}
