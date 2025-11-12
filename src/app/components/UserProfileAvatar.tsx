'use client';

import Image from 'next/image';
import clsx from 'clsx';

interface UserProfileAvatarProps {
  name: string;
  avatarUrl: string;
  size?: 'small' | 'medium' | 'large';
  isPulsing?: boolean;
}

export default function UserProfileAvatar({
  name,
  avatarUrl,
  size = 'medium',
  isPulsing = false,
}: UserProfileAvatarProps) {
  const sizeClasses = {
    small: 'w-10 h-10',
    medium: 'w-16 h-16',
    large: 'w-24 h-24',
  }[size];

  return (
    <div className="flex flex-col items-center space-y-1 cursor-pointer">
      <div
        className={clsx(
          'relative rounded-full border-4 border-white bg-blue-200 flex items-center justify-center overflow-hidden',
          sizeClasses,
          isPulsing && 'animate-ping-slow'
        )}
      >
        <Image
          src={avatarUrl}
          alt={name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <span className="text-sm text-gray-700 font-medium">{name}</span>
    </div>
  );
}
