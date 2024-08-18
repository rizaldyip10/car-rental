"use client"

import { Button } from '@/components/ui/button';
import { Form, Formik, FormikValues } from 'formik'
import FormikInput from '@/components/formik-input';
import axios from 'axios';
import * as yup from "yup"
import { useRouter } from 'next/navigation';
import { whiteSpaceRegex } from '@/constants/whitespace-regex';
import toast from 'react-hot-toast';

const SignupForm = () => {
    const router = useRouter();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    const signupSchema = yup.object().shape({
        firstName: yup.string().required("First name is required").matches(whiteSpaceRegex, "Invalid input"),
        lastName: yup.string().required("Last name is required").matches(whiteSpaceRegex, "Invalid input"),
        email: yup.string().email("Please enter a valid email").required("Please enter your email").matches(whiteSpaceRegex, "Invalid input"),
        password: yup.string().min(6, "Please enter a valid password").required("Please enter your password").matches(whiteSpaceRegex, "Invalid input")
    });

    const handleLogin = async (value: FormikValues) => {
        const loadingToast = toast.loading("Loading...")
        try {
            const response = await axios.post(`${process.env.NEXT_APP_URL!}/api/auth/sign-up`, value);
            toast.dismiss(loadingToast);
            toast.success("Register success!");
            router.push("/sign-in");
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast);
            toast.error("Something went wrong, please try again")
        }
    }
    return (
        <div className="w-full">
            <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={(value) => {
                    handleLogin(value);
                }}
            >
                {({ isValid, dirty, isSubmitting }) => (
                    <Form className="w-full flex flex-col gap-4">
                        <div className='w-full flex items-center gap-2'>
                            <FormikInput 
                                as='input'
                                name='firstName'
                                className="w-full border py-1 px-2 rounded-md focus-visible:ring-0"
                                label="First Name"
                            />
                            <FormikInput 
                                as='input'
                                name='lastName'
                                className="w-full border py-1 px-2 rounded-md focus-visible:ring-0"
                                label="Last Name"
                            />
                        </div>
                        <FormikInput
                            as="input"
                            name="email"
                            className="w-full border py-1 px-2 rounded-md focus-visible:ring-0"
                            label="Email"
                        />
                        <FormikInput
                            as="input"
                            name="password"
                            className="w-full border py-1 px-2 rounded-md focus-visible:ring-0"
                            label="Password"
                            type="password"
                        />
                        <Button
                            type="submit"
                            disabled={(!(isValid && dirty) || isSubmitting)}
                        >
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignupForm