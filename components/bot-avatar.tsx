import { Avatar, AvatarImage } from './ui/avatar';

export const BotAvatar = () => {
  return (
    <Avatar className="h-24 w-24">
      <AvatarImage src="/logo.png" className="p-1" />
    </Avatar>
  );
};
