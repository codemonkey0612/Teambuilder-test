export default function FooterLists({
  header,
  list,
}: {
  header: string;
  list: string[];
}) {
  <>
    <h1> {header} </h1>
    <ul>
      {list.map((list, i) => (
        <li key={i}> {list} </li>
      ))}
    </ul>
  </>;
}
