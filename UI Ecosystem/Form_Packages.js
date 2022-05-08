//to implement react forms without any external library:
    // Initialize a state
    // On every change, call a custom common handle change function
    // On submit, fecth all value from state
    // onchange also validate againsta common fucntion

// formik : 

<Formik
initialValues={{ email: "", password: "" }}
onSubmit={({ setSubmitting }) => {
  alert("Form is validated! Submitting the form...");
  setSubmitting(false);
}}
>
{() => (
  <Form>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <Field
        type="email"
        name="email"
        className="form-control"
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <Field
        type="password"
        name="password"
        className="form-control"
      />
    </div>
  </Form>
)}
</Formik>





// react hook form  : 
      // use of uncontrolled inputs using ref instead of depending on the state to control the inputs
      // Avoid re renders on change
      // npm install react-hook-form
      // Validations like, rewired, min, max, pattern etc

            import { useForm } from "react-hook-form";
            const { register, handleSubmit } = useForm();
            <input type="text" name="firstName" {...register('firstName')} />
            // old: <input type="text" name="firstName" ref={register} />
            // *** Note that the input component must have a name prop, and its value should be unique. ***
            
            import React from "react";
            import { useForm } from "react-hook-form";

            const RegisterForm = () => {
            const { register, handleSubmit } = useForm();
            const handleRegistration = (data) => console.log(data);

            return (
                <form onSubmit={handleSubmit(handleRegistration)}>
                <div>
                    <label>Name</label>
                    <input name="name" {...register('name')} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" {...register('email')} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" {...register('password')} />
                </div>
                <button>Submit</button>
                </form>
            );
            };
            export default RegisterForm;
