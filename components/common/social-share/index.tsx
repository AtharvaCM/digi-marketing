'use client';
import { useEffect, useState } from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';

interface SocialShareProps {
  title: string;
}

export default function SocialShare({ title }: Readonly<SocialShareProps>) {
  // Get the current URL dynamically
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <div className="flex gap-3 justify-center mt-4">
      {/* Facebook */}
      <FacebookShareButton url={currentUrl} title={title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      {/* Twitter / X */}
      <TwitterShareButton url={currentUrl} title={title}>
        <XIcon size={32} round={true} />
      </TwitterShareButton>

      {/* LinkedIn */}
      <LinkedinShareButton url={currentUrl}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>

      {/* WhatsApp */}
      <WhatsappShareButton url={currentUrl} title={title} separator=":: ">
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>

      {/* Email */}
      <EmailShareButton url={currentUrl} subject={title} body={`Check out this blog: ${currentUrl}`}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  );
}
