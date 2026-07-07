"use client";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoCloudUploadOutline } from "react-icons/io5";
import * as Yup from 'yup';
import { Theme } from "@/components/Theme";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '@/config/firebase';


export default function PostClient({session}) {

  const iv = {
    title: "",
    endpoint: "",
    docs: ""
  };

  const formValidation = Yup.object({
    title: Yup.string().required("This is a required field"),
    endpoint: Yup.string().required("Supply endpoint").max(100, "Maximum of 100 characters"),
    docs: Yup.string().required("This is a required field")
  });

  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-200 max-md:p-4 p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background radial glow matching the landing/signin flow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-5" 
        style={{ backgroundColor: Theme.lightGreen }}
      ></div>

      <div className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-md p-6 md:p-10 relative z-10 shadow-2xl">
        
        {/* Form Header */}
        <header className="mb-8 space-y-2">
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Publish a New <span style={{ color: Theme.lightGreen }} className="italic">API Endpoint</span>
          </h1>
          <p className="text-xs md:text-sm font-light text-neutral-400">
            Fill out the configuration below to deploy your infrastructure parameters instantly to our public index ecosystem.
          </p>
        </header>

        <Formik
          initialValues={iv}
          validationSchema={formValidation}
          onSubmit={async (values)=> {
            const docRef = await addDoc(collection(db, "apis"), {
              ...values,
              developer: session?.user?.name,
              image: session?.user?.image,
              uid: session?.user?.id,
              timestamp: new Date().toLocaleDateString()
            })
            // console.log("Document written with ID: ", docRef);
          }}
        >
          <Form className="space-y-6">
            
            {/* Title Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                API Title
              </label>
              <Field 
                name="title" 
                placeholder="e.g. Dummy Products API"
                className="w-full bg-neutral-950 text-white placeholder-neutral-700 border border-neutral-800 focus:border-neutral-600 outline-none rounded-sm py-2.5 px-4 text-sm transition-colors font-light"
              />
              <ErrorMessage name="title" component="p" className="text-xs text-red-400 font-light pt-0.5" />
            </div>

            {/* Endpoint Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                Target Endpoint URL
              </label>
              <Field 
                name="endpoint" 
                placeholder="e.g. https://api.example.com/v1/products"
                className="w-full bg-neutral-950 text-white placeholder-neutral-700 border border-neutral-800 focus:border-neutral-600 outline-none rounded-sm py-2.5 px-4 text-sm transition-colors font-light"
              />
              <ErrorMessage name="endpoint" component="p" className="text-xs text-red-400 font-light pt-0.5" />
            </div>

            {/* Documentation Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                API Documentation Structure
              </label>
              <Field 
                name="docs" 
                as="textarea" 
                rows={6}
                placeholder="Enter markdown or text descriptions of schema expectations, response examples, headers, and request methods..."
                className="w-full bg-neutral-950 text-white placeholder-neutral-700 border border-neutral-800 focus:border-neutral-600 outline-none rounded-sm py-2.5 px-4 text-sm transition-colors font-light resize-none leading-relaxed"
              />
              <ErrorMessage name="docs" component="p" className="text-xs text-red-400 font-light pt-0.5" />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end">
              <button 
                type="submit"
                style={{ backgroundColor: Theme.darkGreen }}
                className="text-white flex items-center justify-center gap-2 rounded-sm px-6 py-2.5 text-sm font-medium hover:brightness-110 transition-all duration-200 shadow-lg cursor-pointer max-sm:w-full group"
              >
                Upload Endpoints
                <IoCloudUploadOutline className="text-base group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>

          </Form>
        </Formik>
      </div>
    </main>
  );
}