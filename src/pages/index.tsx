import TopBar from '../components/TopBar';
import ListMessages from '../components/ListMessages';
import MessageContent from '../components/MessageContent';
import ForceAuthentication from '../components/auth/ForceAuth';

export default function index() {
  return (
    <ForceAuthentication>
      <TopBar />
      <div>
        <ListMessages />
        <MessageContent />
      </div>
    </ForceAuthentication>
  );
}
