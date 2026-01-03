import{ useState}from'react'
const AddRestaurantForm=
({setRestaurants})=>{
    const[form,setForm]=useState({
        
  "restaurantID": 26,
  "restaurantName": "1135 AD",
  "address": "Jaipur, Amber Fort, Rajasthan",
  "type": "Rajasthani",
  "parkingLot": true,
  "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"


    })
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  };

  const handleAdd=(e)=>{
    e.preventDefault();

    const newRestaurant={
        restaurantID:data.now(),...form,
        parkingLot:form.parkingLot==="true"
    };

    const oldDta=JSON.parse(localStorage.getItem("restaurant"))||[];
    const update=[...onloadeddata,newRestaurant];

    localStorage.setItem("restaurants",
        JSON.stringify(update))
    setRestaurants(update);
    alert("restaurant addd")
  }
return(
    <div>
    <h3>add rrestaurnat</h3>
    <form onSubmit={handleAdd}>
        <input
        placeholder='enter restaurant'
        name="restauran name"
        onCanPlay={handleChange}
        required
        />

         <input
        placeholder='enter addres'
        name="addres"
        onCanPlay={handleChange}
        required
        />
        <select name='type'
        onCanPlay={handleChange}>
            <option value="ri"></option>
             <option value="ri"></option>
              <option value="ri"></option>
               <option value="ri"></option>
                <option value="ri"></option>
                 <option value="ri"></option>
                  <option value="ri"></option>
        </select>
        <section name="parkingLot"
        onChange={handleChange}>
            <option value="true">parkingLot aviable</option>
              <option value="false">parkingLot no   aviable</option>



        </section>
        <input name='image' value={form.image}readOnly/>
        <button type='submit'>add</button>



    </form>

    
    </div>
)


}
export default AddRestaurantForm