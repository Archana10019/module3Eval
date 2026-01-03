
import { useEffect,useState } from "react";
import AddRestaurantForm from'./AddRestaurantForm';
import RestaurantCard from'./RestaurantCard';

const AdminDashboard=()=>{
 const[restaurants,setRestaurants]=useState([]);




 useEffect(()=>{
    const data=
    JSON.parse(localStorage.getItem("restaurants"))||[];
    setRestaurants(data);

 },[])



 const deleteRestaurant=(id)=>{
    const update= restaurants.filter((r)=>r.restaurantID!==id);
    setRestaurants(update);
    localStorage.setItem("restaurants",
        JSON.stringify(update)
    )
 };


 return(
    <div style={{display:"flex"}}>
        {/*sidebar*/}
        <AddRestauranForm
        setRestaurants={setRestaurants}/>


     <div style={{padding:"20px",width:"70%"}}>
        {/*card*/}
    <h2> welcom to RestaurantCard</h2>
    
       {restaurants.map((item)=>(
        <RestaurantCard
        key={item.restaurantID}
        data={item}
      deleteRestaurant={deleteRestaurant}
      />
        
       ))}

    </div>


    </div>

 )

}
 export default AdminDashboard;