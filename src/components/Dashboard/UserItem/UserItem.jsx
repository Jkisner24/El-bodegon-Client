const UserItem = ({id, name,email,pedidos,isActive}) => {
    return (
        <tr style={{width:"80%"}}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{pedidos}</td>
            <td>{isActive? "Activo"  : "Inactivo"}</td>
            {isActive ? <button>desactivar usuario</button> : <button>activar usuario</button>}
        </tr>
    );
}
 
export default UserItem;