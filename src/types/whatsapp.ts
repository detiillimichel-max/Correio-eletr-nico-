export type AttachmentType =
  | 'gallery'
  | 'camera'
  | 'location'
  | 'contact'
  | 'document'
  | 'audio'
  | 'poll'
  | 'event'

export interface Attachment {
  type: AttachmentType
  label: string
  icon: string
  color: string
  accept?: string
}

export const ATTACHMENTS: Attachment[] = [
  { type: 'gallery',   label: 'Galeria',    icon: 'fa-images',          color: '#7c3aed', accept: 'image/*,video/*' },
  { type: 'camera',    label: 'Câmera',     icon: 'fa-camera',          color: '#1a73e8', accept: 'image/*' },
  { type: 'location',  label: 'Localização',icon: 'fa-location-dot',    color: '#16a34a' },
  { type: 'contact',   label: 'Contato',    icon: 'fa-user-plus',       color: '#0891b2' },
  { type: 'document',  label: 'Documento',  icon: 'fa-file-lines',      color: '#ea580c', accept: '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt' },
  { type: 'audio',     label: 'Áudio',      icon: 'fa-headphones',      color: '#d97706', accept: 'audio/*' },
  { type: 'poll',      label: 'Enquete',    icon: 'fa-chart-bar',       color: '#059669' },
  { type: 'event',     label: 'Evento',     icon: 'fa-calendar-plus',   color: '#7c3aed' },
]
