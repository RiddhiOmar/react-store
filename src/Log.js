import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'

export default function Log() {
    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object({
            email:yup.string().min(5,"too short").max(30,"too long").required("please enter email"),
            password:yup.string().min(5,"too short").max(10,"too long").required("please enter password"),
        }),
        onSubmit:values=>{
            alert(JSON.stringify(values));
            formik.resetForm();
        }
        
    })
    
  return (
    <div>
      <div className='container'>
          <div className='row'>
            <br></br>
            <h1 className='text-center'>Login</h1>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Email</label>
                    <input type="email" placeholder="Email" name='email' className='form-control'{...formik.getFieldProps("email")} />
                    {formik.touched && formik.errors.email?
                       <div style={{color: 'red'}}>{formik.errors.email}</div>:null}
                  </div>
                  <div className='form-group'>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name='password' className='form-control'{...formik.getFieldProps("password")}  />
                    {formik.touched && formik.errors.password?
                       <div style={{color: 'red'}}>{formik.errors.password}</div>:null}
                  </div>
                  <div class="col text-right">
                     <a href="#!">Forgot password?</a>
                   </div>
                  <br></br>
                  <button type='button' className='btn btn-success' style={{textAlign: 'center'}} >Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
