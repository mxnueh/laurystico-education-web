'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  title: string;
  imageSrc?: string;
  description: string;
};

export default function InstructorCard({ name, title, imageSrc, description }: Props) {
  const [showImage, setShowImage] = useState(true);

  return (
    <section className="card grid grid-cols-[auto,1fr] gap-4 items-center">
      <div className="w-20 h-20 rounded-action border border-border overflow-hidden grid place-items-center text-muted">
        {imageSrc && showImage ? (
          <Image
            src={imageSrc}
            alt={`Foto de ${name}`}
            width={80}
            height={80}
            className="w-full h-full object-cover"
            onError={() => setShowImage(false)}
          />
        ) : (
          <span>Foto</span>
        )}
      </div>
      <div>
        <h3 className="font-semibold">{title} — {name}</h3>
        <p className="text-sm text-muted m-0">{description}</p>
      </div>
    </section>
  );
}









