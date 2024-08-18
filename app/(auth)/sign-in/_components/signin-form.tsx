"use client"

import FormikInput from '@/components/formik-input';
import * as yup from "yup"
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { signIn } from "next-auth/react";
import { Form, Formik, FormikValues } from 'formik';
import { useRouter } from 'next/navigation';

const SigninForm = () => {
    const router = useRouter();

    const initialValues = {
        email: '',
        password: ''
    }

    const signinSchema = yup.object().shape({
        email: yup.string().email("Please enter a valid email").required("Please enter your email"),
        password: yup.string().min(6, "Please enter a valid password").required("Please enter your password")
    });

    const handleLogin = async (value: FormikValues) => {
        const loadingToast = toast.loading("Loading...")
        try {
            await signIn("credentials", {
                username: value.email,
                password: value.password,
                redirect: false
            });
            toast.dismiss(loadingToast);
            toast.success("Login success!");
            router.push("/")
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast);
            toast.error("Login failed, please try again");
        }
    }
    return (
        <div className="w-full">
            <Formik
                initialValues={initialValues}
                validationSchema={signinSchema}
                onSubmit={async (value) => {
                    await handleLogin(value);
                }}
            >
                {({ isValid, dirty, isSubmitting }) => (
                    <Form className="w-full flex flex-col gap-4">
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

export default SigninForm