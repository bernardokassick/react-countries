import Item from './Item';
export default function Country({
  children: country = [],
  onCountryClick = null,
  isVisited = false,
}) {
  if (!country) {
    return <div>Impossível renderizar países</div>;
  }

  const { name, capital, flag, region, population, area, id } = country;
  const demographicDensity =
    area >= 1 ? population / area : 'Área não informada';

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(id);
    }
  }
  const isVisitedClassName = isVisited ? 'bg-green-200' : '';
  return (
    <div
      onClick={handleCountryClick}
      className={`border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer ${isVisitedClassName}`}
    >
      <img className="w-48  " src={flag} alt={name} />
      <ul className="p-3">
        <li>
          <Item label="País: ">{name}</Item>
        </li>
        <li>
          <Item label="Capital: ">{capital}</Item>{' '}
        </li>
        <li>
          <Item label="Região: ">{region}</Item>{' '}
        </li>
        <li>
          <Item label="População: ">{population.toLocaleString('PT-BR')}</Item>
        </li>
        <li>
          <Item label="Densidade Dem.: ">
            {demographicDensity.toLocaleString('PT-BR')}
          </Item>
        </li>
      </ul>
    </div>
  );
}
