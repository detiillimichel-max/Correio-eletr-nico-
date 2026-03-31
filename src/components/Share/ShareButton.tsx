import React, { useState } from 'react'

interface Props {
  titulo?: string
  texto?: string
  url?: string
}

export function ShareButton({ titulo = 'OIO Chat', texto = 'Venha conversar comigo no OIO!', url }: Props) {
  const [copied, setCopied] = useState(false)

  const shareUrl = url || window.location.href

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: titulo, text: texto, url: shareUrl })
      } catch (e) {}
    } else {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gemini-card border border-gemini-border hover:border-gemini-blue transition-colors text-sm text-gemini-text"
    >
      <i className={`fa-solid ${copied ? 'fa-check text-green-400' : 'fa-share-nodes text-gemini-blue'}`} />
      <span>{copied ? 'Link copiado!' : 'Compartilhar'}</span>
    </button>
  )
}
