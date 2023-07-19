//style
import './Breadcrumbs.css';

//components
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { toCapital } from '../Functions/functions';
import { Link } from 'react-router-dom';


function BreadcrumbExample({item}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item><Link to={`/productos/${item.category}`}>{toCapital(item.category)}</Link></Breadcrumb.Item>
      <Breadcrumb.Item active>{item.title}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;
