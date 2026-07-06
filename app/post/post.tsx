"use client";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoCloudUploadOutline } from "react-icons/io5";
import * as Yup from 'yup';



export default function PostClient () {

    const iv = {
        title: "",
        endpoint: "",
        docs: ""
    }

    const formValidation = Yup.object({
        title: Yup.string().required("This is a required field"),
        endpoint: Yup.string().required("Supply endpoint").max(100, "Maximum of 100 characters"),
        docs: Yup.string().required("This is a required field")
    })

    return (
        <main className="min-h-dvh">
            <Formik
                initialValues={iv}
                validationSchema={formValidation}
                onSubmit={()=> alert("Submitted")}
            >
                <Form>
                    <div>
                        <label>Title</label>
                        <Field name="title" placeholder="e.g Dummy Products API"/>
                        <ErrorMessage name='tilte' component={"p"}/>
                    </div>
                    <div>
                        <label>EndPoint</label>
                        <Field name="endpoint" placeholder="e.g dummyproducts@example.com"/>
                        <ErrorMessage name='endpoint' component={"p"}/>
                    </div>
                    <div>
                        <label>Documentation</label>
                        <Field name="docs" as="textarea" placeholder="Enter your docs..."/>
                        <ErrorMessage name='docs' component={"p"}/>
                    </div>

                    <button type='submit'>
                        Upload
                        <IoCloudUploadOutline />
                    </button>
                </Form>
            </Formik>
        </main>
    )
}