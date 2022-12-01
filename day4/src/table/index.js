import Table from 'react-bootstrap/Table';

function DarkExample({id, title, completed}) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{completed}</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default DarkExample;