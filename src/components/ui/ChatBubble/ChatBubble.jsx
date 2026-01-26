export default function ChatBubble({ type, message }) {
  const isAI = type === 'ai';

  return (
    <div
      className="p-3 rounded mb-2"
      style={{
        background: isAI ? 'var(--ai-blue)' : 'var(--user-gray)',
        color: isAI ? '#fff' : '#000',
        maxWidth: '70%',
        alignSelf: isAI ? 'flex-start' : 'flex-end',
      }}
    >
      {message}
    </div>
  );
}
