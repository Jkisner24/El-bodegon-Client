import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDishes, getAllUsers, getAuth0Users } from "../../redux/actions/actions";
import UserItem from "./UserItem/UserItem";
import UserList from "./UserList/UserList";
import { Container, Row, Col, Card, CardGroup, Table} from 'react-bootstrap';
import style from './Dashboard.module.css'
import Sidebar from "./Sidebar/Sidebar";
import GraficoLinea from "./GraficoLinea/GraficoLinea";
import GraficoBarras from "./GraficoBarras/GraficoBarras";
import GraficoTorta from "./GraficoTorta/GraficoTorta";
import { Link } from "react-router-dom";


const Dashboard = () => {
    // const users = useSelector(state => state.adminData.users)
    // const auth0Users = useSelector(state => state.adminData.auth0Users)
    // const [allUsers, setAllUsers] = useState([])
    // const [cantidadUsuarios, setCantidadUsuarios] = useState(0)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAuth0Users())
        dispatch(getAllUsers())
        dispatch(getAllDishes())
        console.log("traigousuarios");
        console.log();
    },[])
    // useEffect(()=>{
    //     const auxUsers = users.length
    //     setCantidadUsuarios(cantidadUsuarios + auxUsers)
    // },[users])
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="bg-light">
          <Sidebar/>
        </Col>
        <Col sm={10}>
          <Row className="my-3">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Ventas totales</Card.Title>
                  <Card.Text>12</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Link to ="/dashboard/foods">
              <Card>
                <Card.Body>
                  <Card.Title>Productos</Card.Title>
                  <Card.Text>112</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col md={4}>
            <Link to ="/dashboard/users">
              <Card>
                <Card.Body>
                  <Card.Title>Ver </Card.Title>
                  <Card.Text>usuarios</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>Chart</Card.Title>
                  <div style={{ height: '300px' }}> {/* Height of the chart container */}
                    {/* Chart component */}
                    {/* <GraficoBarras/> */}
                    <GraficoTorta/>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Pedidos activos</Card.Title>
                  <div style={{ height: '300px', overflowY: 'scroll' }}> {/* Height and scrollbar of the table container */}
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>N° pedido</th>
                          <th>Dirección</th>
                          <th>Monto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Data 1</td>
                          <td>Data 2</td>
                          <td>Data 3</td>
                        </tr>
                        {/* More rows */}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
