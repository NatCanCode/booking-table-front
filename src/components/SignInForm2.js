// Using formik & yup

import React from "react";
import { useFormik} from "formik";
import * as Yup from "yup";

const SignInForm2 = () => {

    const formik = useFormik({
        initialValues: { 
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Requested email")
                .email("Unvalid email"),
            password: Yup.string()
            .required("Requested password")
            .min(4, "Your password must have at least 4 characters")
            .max(15, "Your password is too long my friend!"),
    }),
        onSubmit: (values) => {
            console.log("Form is ok")
            console.log(values)
            handleAuthentification(values)
        }
    })

    const handleAuthentification = async (values) => {
        console.log(values)
        try {
            const response = await fetch("http://localhost:3000/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            console.log(response)

            // if (response.jwt) {
            if (response) {
                const { token } = await response.json()

                localStorage.setItem("jwt", token)
                console.log("Authentification succeeded. Token found in localStorage: ", token)
            }
        } catch (error) {
            console.log("Authentification error: ", error)
        }
    } 

	return (
		<div className='signinform'>
			<h3>Sign In Form 2</h3>
            <form onSubmit={formik.handleSubmit}>
                <div>
					<label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                    <div style={styles.red}>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
					/>
				</div>
                {formik.touched.password && formik.errors.password ? (
                    <div style={styles.red}>{formik.errors.password}</div>
                    ) : null}
				<button type='submit'>Sign In</button>
            </form>
        </div>
    )
}

const styles = {
    red: {
        color: "red",
    }
}

export default SignInForm2;
