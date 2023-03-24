export default function TBody({ items, columns }) {
  return <tbody>
    {items?.map(item => <tr key={item.id}>
      {columns?.map(col => <td key={col.name}>{col.comp? <col.comp value={col.getEl(item)} /> : col.getEl(item)}</td>)
      }
      <td><button>x</button></td>

    </tr>)}
  </tbody>;
}
