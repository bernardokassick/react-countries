export default function Header({ children, size }) {
  let fontSize = size === 'large' ? 'text-2xl' : 'text-xl';

  return (
    <header>
      <div className="bg-green-100 mx-auto p-4">
        <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
      </div>
    </header>
  );
}
