import React, { useState, useRef } from 'react'
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
  const [recording, setRecording] = useState(false)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const handleSend = () => {
    if (!text.trim()) return
    onSend(text)
    setText('')
  }

  const startRecord = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const recorder = new MediaRecorder(stream)
    chunksRef.current = []
    recorder.ondataavailable = e => chunksRef.current.push(e.data)
    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
      const file = new File([blob], `audio_${Date.now()}.webm`, { type: 'audio/webm' })
      onFile(file, 'audio')
      stream.getTracks().forEach(t => t.stop())
    }
    recorder.start()
    recorderRef.current = recorder
    setRecording(true)
    if (navigator.vibrate) navigator.vibrate(100)
  }

  const stopRecord = () => {
    recorderRef.current?.stop()
    setRecording(false)
  }

  return (
    <div className="relative">
      <AttachmentMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onFile={onFile}
        onLocation={onLocation}
        onPoll={onPoll}
        onEvent={onEvent}
        onContact={onContact}
      />

      <div className="flex items-center gap-2 bg-gemini-card border-t border-gemini-border px-3 py-2">

        {/* Anexo */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            menuOpen ? 'bg-gemini-blue text-white' : 'text-gemini-muted hover:text-gemini-blue'
          }`}
        >
          <i className="fa-solid fa-paperclip text-xl" />
        </button>

        {/* Input */}
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSend()}
          placeholder="Digite uma mensagem..."
          className="flex-1 bg-gemini-dark border border-gemini-border rounded-full px-4 py-2 text-gemini-text text-sm outline-none focus:border-gemini-blue transition-colors"
        />

        {/* Microfone / Enviar */}
        {text.trim() ? (
          <button
            onClick={handleSend}
            className="w-10 h-10 rounded-full bg-gemini-blue flex items-center justify-center hover:opacity-90 active:scale-95 transition-all"
          >
            <i className="fa-solid fa-paper-plane text-white" />
          </button>
        ) : (
          <button
            onTouchStart={startRecord}
            onTouchEnd={stopRecord}
            onMouseDown={startRecord}
            onMouseUp={stopRecord}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              recording
                ? 'bg-red-500 scale-110 animate-pulse'
                : 'bg-gemini-purple hover:opacity-90'
            }`}
          >
            <i className={`fa-solid ${recording ? 'fa-stop' : 'fa-microphone'} text-white`} />
          </button>
        )}
      </div>
    </div>
  )
}
