export interface User {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  imageUrl: string;
  interests: string[];
  isFollowing?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  duration: string;
  popular?: boolean;
}

export interface AuthResponse {
  user: User;
  message?: string;
}
