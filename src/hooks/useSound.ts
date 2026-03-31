import { useEffect } from 'react'

declare global {
  interface Window {
    OioSom: {
      ctx: AudioContext | null
      ativar: () => void
      tocar: (notas: [number, number][]) => void
      mensagem: () => void
      clique: () => void
      chamada: () => void
      ligando: () => void
    }
  }
}

export function useSound() {
  useEffect(() => {
    window.OioSom = {
      ctx: null,

      ativar() {
        if (!this.ctx) {
          this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
        }
      },

      tocar(notas: [number, number][]) {
        this.ativar()
        if (!this.ctx) return
        const ctx = this.ctx
        notas.forEach(([freq, delay]) => {
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.type = 'sine'
          osc.frequency.setValueAtTime(freq, ctx.currentTime + delay)
          gain.gain.setValueAtTime(0.5, ctx.currentTime + delay)
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.3)
          osc.connect(gain)
          gain.connect(ctx.destination)
          osc.start(ctx.currentTime + delay)
          osc.stop(ctx.currentTime + delay + 0.4)
        })
      },

      // Som de mensagem recebida
      mensagem() {
        this.tocar([[880, 0], [1100, 0.2], [1320, 0.4]])
      },

      // Som de clique / envio
      clique() {
        this.tocar([[660, 0], [880, 0.15]])
      },

      // Som de chamada perdida
      chamada() {
        this.tocar([[440, 0], [330, 0.3], [220, 0.6]])
      },

      // Som de ligando
      ligando() {
        this.tocar([[700, 0], [700, 0.5], [700, 1.0]])
      }
    }

    // Ativa no primeiro toque
    const ativar = () => window.OioSom.ativar()
    document.addEventListener('touchstart', ativar, { once: true })
    document.addEventListener('click', ativar, { once: true })

    return () => {
      document.removeEventListener('touchstart', ativar)
      document.removeEventListener('click', ativar)
    }
  }, [])
}
