'use client'

import { Share2 } from 'lucide-react'
import { FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp, FaRegShareSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

interface ShareButtonProps {
  title: string
}

const getShareUrls = (title: string) => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(title)
  return {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    whatsapp: `https://wa.me/?text=${text}%20${url}`
  }
}

export function ShareButton({ title }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: title,
          url: window.location.href
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  const shareUrls = typeof window !== 'undefined' ? getShareUrls(title) : {
    twitter: '#', linkedin: '#', facebook: '#', whatsapp: '#'
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleShare}
        className="flex items-center gap-2 group"
        title="Share via system"
      >
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#171717] border border-[#FFFFFF14] hover:bg-[#000000]/10 hover:border-[#000000]/20 transition-colors">
          <FaRegShareSquare className="w-5 h-5 text-[#FF835E]" />
        </div>
      </button>
      <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#171717] border border-[#FFFFFF14] hover:bg-[#000000]/10 hover:border-[#000000]/20 transition-colors" title="Share on X">
        <FaXTwitter className="w-5 h-5 text-[#ffffff]" />
      </a>
      <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#171717] border border-[#FFFFFF14] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/20 transition-colors" title="Share on LinkedIn">
        <FaLinkedin className="w-5 h-5 text-[#0077B5]" />
      </a>
      <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#171717] border border-[#FFFFFF14] hover:bg-[#1877F3]/10 hover:border-[#1877F3]/20 transition-colors" title="Share on Facebook">
        <FaFacebook className="w-5 h-5 text-[#1877F3]" />
      </a>
      <a href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#171717] border border-[#FFFFFF14] hover:bg-[#25D366]/10 hover:border-[#25D366]/20 transition-colors" title="Share on WhatsApp">
        <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
      </a>
    </div>
  )
} 