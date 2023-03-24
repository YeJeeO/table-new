
export default function THead({ columns }) {
    return <thead>
      <tr>
      {columns?.map(item => <th key={item.name}>{item.name}<input type="text"></input></th>)}
      <th>Delete</th>
      </tr>
    </thead>;
  }