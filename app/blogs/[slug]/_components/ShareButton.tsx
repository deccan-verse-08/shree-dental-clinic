"use client";

import { useState, useEffect } from 'react';
import { FiShare2, FiX, FiFacebook, FiTwitter, FiLinkedin, FiLink2 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const shareData = {
    title: title,
    url: url,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareSocial = (platform: string) => {
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-all"
      >
        <FiShare2 className="w-4 h-4" />
        <span className="text-sm font-medium">Share</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 p-4 min-w-[280px] z-50"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-slate-700">Share this article</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => shareSocial('facebook')}
                  className="flex items-center space-x-3 w-full p-2 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <FiFacebook className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-slate-600">Share on Facebook</span>
                </button>
                
                <button
                  onClick={() => shareSocial('twitter')}
                  className="flex items-center space-x-3 w-full p-2 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <FiTwitter className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-slate-600">Share on Twitter</span>
                </button>
                
                <button
                  onClick={() => shareSocial('linkedin')}
                  className="flex items-center space-x-3 w-full p-2 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <FiLinkedin className="w-5 h-5 text-blue-700" />
                  <span className="text-sm text-slate-600">Share on LinkedIn</span>
                </button>
                
                <div className="border-t border-slate-200 my-2" />
                
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-3 w-full p-2 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <FiLink2 className="w-5 h-5 text-slate-600" />
                  <span className="text-sm text-slate-600">
                    {copied ? "Copied!" : "Copy link"}
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}