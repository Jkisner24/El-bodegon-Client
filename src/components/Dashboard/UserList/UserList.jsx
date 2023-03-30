import UserItem from "../UserItem/UserItem";

const UserList = ({users}) => {
    return(
        <tbody>
            {users?.map(user =>{
                return <UserItem
                    id={user._id}
                    name={user.name}
                    email={user.email}
                    pedidos={"5"}
                    isActive={user.is_Active} 
            
                />
            })}
        </tbody>
    )
}
 
export default UserList;