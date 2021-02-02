export function TODO({ text = '' }) {
  return (
    <p
      style={{
        fontSize: 36,
        textTransform: 'uppercase',
        color: 'red',
      }}
    >
      TODO{`: ${text}`}
    </p>
  );
}
