export interface PostProps {
  id: number;
  title: string;
}

export interface CommentProps {
  id: number;
  title: string;
  postId: number;
}

export interface AuthProps {
  name: string;
  password: string;
}
