import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    return (

        <div class="flex items-center justify-center min-h-screen bg-gray-100">

            <div class="bg-white shadow-lg rounded-lg overflow-hidden w-auto max-w-fit mx-auto flex flex-col md:flex-row shadow-violet-500">

                <div class="w-full md:w-1/2 h-48 md:h-auto">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/174/193/non_2x/online-job-searching-vector.jpg" alt="Job search illustration" class="object-cover w-full h-full" />
                </div>

                <div class="w-full md:w-1/2 p-8">
                    <div class="text-2xl font-bold text-black mb-6 text-center md:text-left">Sign in to continue</div>

                    <form action="#">
                        <div class="mb-4">
                            <label for="email" class="block text-gray-900 text-sm font-bold mb-2">Email address</label>
                            <input type="email" id="email" placeholder="Enter your email"
                                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 hover:drop-shadow-lg" />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block text-gray-900 text-sm font-bold mb-2">Password</label>
                            <input type="password" id="password" placeholder="Enter your password"
                                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 hover:drop-shadow-lg" />
                            <a href="#" class="text-sm text-violet-500 hover:underline hover:text-violet-800 mt-2 inline-block">Forgot password?</a>
                        </div>
                        <div class="mb-6">
                            <button type="submit"
                                class="w-full bg-violet-500 text-white py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-violet-600 hover:drop-shadow-lg shadow-violet-950">Sign in</button>
                        </div>
                    </form>

                    <p class="text-center text-gray-600">Not a member?
                        <Link to="/signup" class="text-violet-500 hover:underline hover:text-violet-800">Sign up now</Link></p>
                        
                </div>

            </div>

        </div>

    )
}


export default Signin;