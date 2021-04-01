import { useSelector } from 'react-redux';

export default function useIsLoggedIn() {
  // const token = useSelector(selectAuth);
  const token = useSelector();
  return token !== null;
}
