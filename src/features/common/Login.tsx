import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PublicLayout } from '@/components/Layouts';

const loginSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Invalid email'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login Success:', data);
  };

  return (
    <PublicLayout>
      <div className="flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm border border-gray-200"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Login
          </h2>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register('email')}
              className={`w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300border-2 border-teal-600 focus:ring-teal-45'
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register('password')}
              className={`w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 ${
                errors.password
                  ? 'border-red-500 focus:ring-red-200'
                  :  'border-gray-300border-2 border-teal-600 focus:ring-teal-45'
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 rounded-xl transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Logging in...' : 'Submit'}
          </button>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Login;
