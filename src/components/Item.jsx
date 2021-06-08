export default function Item({
  children: value = 'Valor',
  label = 'Nome do campo ',
}) {
  return (
    <span className="sm">
      <strong>{label}</strong>
      {value}
    </span>
  );
}
