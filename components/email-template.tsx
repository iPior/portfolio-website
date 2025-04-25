import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  content: string;
}

export const DjEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, content
}) => (
  <div>
    <h1>This is an email from {name}, using the DJ Contact Form!</h1>
    <span className='strong'>Message: </span>
    <p>{content}</p>
  </div>
);