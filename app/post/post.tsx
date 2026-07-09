"use client"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FaCloudUploadAlt } from "react-icons/fa";
import * as Yup from 'yup';
import { Theme } from "@/components/Theme";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '@/config/firebase';


export default function PostClient({session}:{session:any}) {
    const iv = {
        title: "",
        endpoint: "",
        docs: "",
    }

    const formvalidation = Yup.object({
        title: Yup.string().required("This is a required field"),
        endpoint: Yup.string().required("supply endpoint").max(100, "Maximun of 100 characters"),
        docs: Yup.string().required("This is a required field"),
    })

    return (
        <main className='min-h-dvh bg-[#0B0F17] flex items-center justify-center p-4 relative overflow-hidden'>
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Centered Form Card */}
            <div className="w-full max-w-2xl bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-2xl relative z-10">
                
                {/* Header text to give the form context */}
                <div className="mb-10 text-center space-y-2">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Publish Endpoint</h1>
                    <p className="text-gray-400 text-sm font-light">
                        Upload your API documentation and endpoint to the global registry.
                    </p>
                </div>

                <Formik
                    initialValues={iv}
                    validationSchema={formvalidation}
                    onSubmit={async(values)=>{
                        const docRef = await addDoc(collection(db,"apis"),{
                            ...values,
                            developer: session?.user?.name,
                            image: session?.user?.image,
                            uid: session?.user?.id,
                            timestamp: new Date().toLocaleDateString()
                        })
                        console.log("Document written with ID: ", docRef.id);
                    }}
                >
                    <Form className="space-y-6">
                        
                        {/* Title Field */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
                                Title
                            </label>
                            <Field 
                                name="title" 
                                placeholder="e.g Dummy products API"
                                className="bg-black/50 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-emerald-500/50 focus:bg-black/80 transition-all placeholder:text-gray-600"
                            />
                            <ErrorMessage 
                                name='title' 
                                component={"p"} 
                                className="text-red-400 text-xs mt-1" 
                            />
                        </div>

                        {/* Endpoint Field */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
                                Endpoint
                            </label>
                            <Field 
                                name="endpoint" 
                                placeholder="e.g dummyproduct@example.com"
                                className="bg-black/50 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-emerald-500/50 focus:bg-black/80 transition-all placeholder:text-gray-600"
                            />
                            <ErrorMessage 
                                name='endpoint' 
                                component={"p"} 
                                className="text-red-400 text-xs mt-1" 
                            />
                        </div>

                        {/* Documentation Field */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
                                Documentation
                            </label>
                            <Field 
                                as="textarea" 
                                name="docs" 
                                placeholder="Enter your docs...."
                                className="bg-black/50 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-emerald-500/50 focus:bg-black/80 transition-all placeholder:text-gray-600 min-h-[160px] resize-y"
                            />
                            <ErrorMessage 
                                name='docs' 
                                component={"p"} 
                                className="text-red-400 text-xs mt-1" 
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button 
                                type='submit'
                                style={{ backgroundColor: Theme.darkGreen }}
                                className="w-full flex items-center justify-center gap-2 text-white font-medium py-3.5 px-4 rounded-lg hover:opacity-90 active:scale-[0.99] transition-all"
                            >
                                Upload
                                <FaCloudUploadAlt className="text-lg" />
                            </button>
                        </div>

                    </Form>
                </Formik>
            </div>
        </main>
    )
}