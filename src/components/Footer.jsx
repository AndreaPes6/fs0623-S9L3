import Pagination from 'react-bootstrap/Pagination';

function Footer() {
  return (
    <footer className=''>
        <Pagination className='justify-content-center'>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item> 
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Item>{6}</Pagination.Item>
          <Pagination.Item>{7}</Pagination.Item>
          <Pagination.Item>{8}</Pagination.Item> 
          <Pagination.Item>{9}</Pagination.Item>
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
    </footer>
  );
}

export default Footer;