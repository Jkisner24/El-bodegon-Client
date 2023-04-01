import { Formik, Field, Form, ErrorMessage } from "formik"
import style from './CreateDishesForm.module.css'
import { createDish } from "../../redux/actions/actions"
import { useDispatch } from "react-redux"
import * as Yup from 'yup'
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const CreateDishesForm = () => {
    const dispatch = useDispatch()
    

    return (
    <div className={style.mainContainer}>
        <h2 className={style.title}>Crear un nuevo plato</h2>
        <Formik
        initialValues={{
            name: "",
            description: "",
            image:null,
            price: null,
            category: ""
        }}
        onChange={(values) =>{
            console.log(values);
        }}
        onSubmit={(values, actions) => {
            dispatch(createDish(values))
            // console.log(values);
            // window.alert("Plato creado correctamente");
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Plato creado correctamente',
                showConfirmButton: false,
                timer: 5000
              })
              


        }}
        validationSchema = {Yup.object({
            name: Yup.string().required("Name is required"),
            description: Yup.string().required("Description is required"),
            price: Yup.number().required("Price is required"),
            category: Yup.string().required("Category is required")
        })}
        >

        {({handleSubmit, setFieldValue}) => (
            <Form onSubmit={handleSubmit} onChange={()=>{}} className={style.formContainer}>
                <label htmlFor="">Name:</label>
                <Field name="name" className={style.controls} placeholder="Name" />
                <div className={style.errors}>
                <ErrorMessage name="name"  />
                </div>

                <label htmlFor="" >Description:</label>
                <Field name="description" className={style.controls} placeholder="Description"/>
                <div className={style.errors}>
                <ErrorMessage name="description"/>
                </div>
                
                <label htmlFor="">Price:</label>
                <Field name="price" className={style.controls} placeholder="Price" type="number"/>
                <div className={style.errors}>
                <ErrorMessage name="price"/>
                </div>

                <label htmlFor="">Category: </label>
                <Field name="category" className={style.controls} placeholder="Category"/>
                <div className={style.errors}>
                <ErrorMessage name="category"/>
                </div>

                <label htmlFor="">Image:</label>
                <input type="file" name="image" onChange={(e)=>setFieldValue('Image', e.target.files[0])}/>
                <div className={style.errors}>
                <ErrorMessage name="image"/>
                </div>

                <button type="submit" className={style.button}>Crear!</button>
            <Link to="/dashboard">
                <button className={style.volver}>Volver</button>
            </Link>
            </Form>
        )}
        </Formik>
    </div>
    )
}

export default CreateDishesForm