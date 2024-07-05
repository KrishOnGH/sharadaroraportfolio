// Content.js (or any appropriate filename)

import React, { useState } from 'react';

const Content = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData['name'] && formData['email'] && formData['message']) {
            setFormData({ name: '', email: '', message: '' });
            try {
                const response = await fetch('http://localhost:3002/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    console.log('Email sent successfully!');
                } else {
                    console.error('Failed to send email.');
                }
            } catch (error) {
                console.error('Error occurred:', error);
            }
        } else {
            console.log("All fields are not filled.")
        }
    };

    return (
        <main>
            <div>
                <section id='contact' className="text-gray-600 body-font relative bg-white border-t-2 border-black">
                    <div className="container px-5 py-24 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You can fill out this form or use my email below.</p>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button
                                            type="submit"
                                            className={`bg-purple-500  hover:bg-purple-600 flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-lg`}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a href="mailto:hi.sharad.arora@gmail.com" className="text-purple-500">hi.sharad.arora@gmail.com</a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Content;
