"use client"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoCloudUploadOutline } from 'react-icons/io5';
import * as Yup from 'yup';
import { Theme } from "@/components/Theme"; // Adjust path if needed
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebase';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { FiLoader } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PostClient({ session }: { session: any }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sending, setSending] = useState (false)

  
  const iv = {
    title: "",
    endpoint: "",
    docs: ""
  };
  
  const formValidation = Yup.object({
    title: Yup.string().required("This is a required field"),
    endpoint: Yup.string().required("Supply Endpoint").max(100, "Maximum of 100 characters"),
    docs: Yup.string().required("This is a required field")
  });

  return (
    <main className="min-h-screen bg-[#070a0e] text-white flex flex-col items-center py-12 px-4 md:px-10 selection:bg-blue-600/30">
      
      {/* Page Header */}
      <div className="w-full max-w-2xl mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
          ENDPOINT SUBMISSION
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Post an API
        </h1>
        <p className="text-sm text-gray-400 font-light">
          Share your endpoint details and documentation with the developer community.
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-[#0d1117] border border-gray-900 rounded-xl p-6 md:p-8 shadow-xl">
        <Formik
          initialValues={iv}
          validationSchema={formValidation}
          onSubmit={async (values,{resetForm}) => {
       try {
        setSending(true)
        const docRef = await addDoc(collection(db, "apis"),{
          ...values,
          developer: session?.user?.name,
          image: session?.user?.image,
          uid: session?.user?.id,
          timestamp: new Date().toLocaleDateString()
        });

        resetForm()
        handleOpen()
        
       } catch (error) {
        console.error("ERROR>>>>", error)
        alert("An error occurred")
       }finally{
        setSending(false)
       }
         
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              
              {/* Title Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="title" className="text-sm font-medium text-gray-300">
                  Title
                </label>
                <Field 
                  name="title" 
                  id="title"
                  placeholder="e.g Dummy Product API"
                  className="w-full bg-[#070a0e] border border-gray-800 rounded-md px-4 py-3 text-sm text-gray-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-gray-600"
                />
                <ErrorMessage 
                  name="title" 
                  component="p" 
                  className="text-red-400 text-xs mt-1 font-medium"
                />
              </div>

              {/* Endpoint Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="endpoint" className="text-sm font-medium text-gray-300">
                  Endpoint URL
                </label>
                <Field 
                  name="endpoint" 
                  id="endpoint"
                  placeholder="e.g https://api.example.com/v1/products"
                  className="w-full bg-[#070a0e] border border-gray-800 rounded-md px-4 py-3 text-sm text-gray-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-gray-600 font-mono"
                />
                <ErrorMessage 
                  name="endpoint" 
                  component="p" 
                  className="text-red-400 text-xs mt-1 font-medium"
                />
              </div>

              {/* Documentation Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="docs" className="text-sm font-medium text-gray-300">
                  Documentation
                </label>
                <Field 
                  name="docs" 
                  id="docs"
                  as="textarea" 
                  placeholder="Describe the methods, parameters, and return objects..."
                  className="w-full min-h-[160px] bg-[#070a0e] border border-gray-800 rounded-md px-4 py-3 text-sm text-gray-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-gray-600 resize-y"
                />
                <ErrorMessage 
                  name="docs" 
                  component="p" 
                  className="text-red-400 text-xs mt-1 font-medium"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-4">
                <button 
                  type='submit'
                  disabled={sending}
                  style={{ backgroundColor: Theme.darkGreen || '#059669' }}
                  className={`w-full flex justify-center items-center gap-2 text-white py-3 rounded-md font-medium transition-all duration-200 active:scale-[0.98] hover:brightness-110 shadow-md shadow-emerald-950/20 ${sending ? "grayscale cursor-not-allowed" : "cursor-pointer"}`}
                >
                  Upload Endpoint
                  {sending ?(
                    <FiLoader className='text-base animate-spin' />
                  ):(
                    <IoCloudUploadOutline className="text-lg group-hover:-translate-y-0.5 transition-transform duration-200" />
                  )}
                  
                  
                </button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
      <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="span">
          <div className='flex items-center justify-center'>
          <FaCheckCircle className='text-8xl text-green-500'/>
          </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <p className='text-center'>Submission Successful. Thank you for your contribution to the community</p>
          </Typography>
        </Box>
      </Modal>
    </div>
    </main>
  );
}