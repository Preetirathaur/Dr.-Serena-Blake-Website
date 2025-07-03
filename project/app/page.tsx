"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from "next/image";
import FAQItem from './FAQItem';
import drHahmImage from "@/public/drserenablake.webp";
import areafocus1 from "@/public/areafocus1.jpg"
import areafocus2 from "@/public/areafocus1.jpg"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
  Heart,
  Shield,
  Users,
  Calendar,
  Menu,
  X,
  ChevronRight,
  Stethoscope,
  Activity,
  Brain
} from 'lucide-react';

export default function Home() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // Name: required & min 3 characters
    if (!form.name) {
      newErrors.name = 'Name is required';
    } else if (form.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    // Email: required & format
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Phone: required & exactly 10 digits
    if (!form.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone must be exactly 10 digits';
    }

    // Message: required & minimum 6 words
    if (!form.message) {
      newErrors.message = 'Please enter a message';
    } else if (form.message.trim().split(/\s+/).length < 6) {
      newErrors.message = 'Message must be at least 6 words';
    }

    // Preferred time
    if (!form.preferredTime) {
      newErrors.preferredTime = 'Please enter a preferred time';
    }

    // Agree checkbox
    if (!form.agree) {
      newErrors.agree = 'You must agree to be contacted';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully');
      // Add submit logic here
    }
  };

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
    <section className="relative h-screen w-full overflow-hidden px-4 sm:px-6 lg:px-12 py-8">
      
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/oceanwave.mp4" type="video/mp4" />
          {/* fallback image */}
          <img
            src="/ocean-fallback.jpg"
            alt="Ocean waves"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/5 z-20" />

          {/* Logo */}
<div className="absolute top-6 left-6 z-30">
  <div className="bg-skiyblue/60 px-4 py-2 rounded-md shadow">
    <div className="font-serif text-white font-semibold text-sm">Dr. Serena Blake,</div>
    <div className="text-white text-xs">PsyD (Clinical Psychologist)</div>
  </div>
</div>
        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Psychological Care for
          </h1>
          <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">
            Change, Insight, and Well-Being
          </h2>
          <p className="mt-6 text-white text-base md:text-lg max-w-2xl">
            Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
          </p>
          <a
      href="#contact"
      className="mt-8 bg-[#B8D9D4] hover:bg-[#A4CFC8] text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg transition"
    >
      SCHEDULE A CONSULTATION
    </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div className="p-8 rounded-md">
              <h2 className="text-4xl font-bold text-gray-800 mb-10 font-[Georgia] transition-all duration-[900ms] ease-in delay-[132ms] whitespace-pre-wrap" style={{ color: '#D2B48C' }}>
                About Dr. Serena Blake
              </h2>
              <p className="whitespace-pre-wrap transition-all duration-[900ms] ease-in delay-[144ms] text-lg leading-relaxed font-[Georgia] text-[#BDB76B]" >
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm lg:max-w-md rounded-l overflow-hidden shadow-md">
                <Image
                  src={drHahmImage}
                  alt="Dr. Jennifer Hahm"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section id="services" className="py-20 bg-[#f6f4ef] text-center border-t border-gray-300">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800 leading-relaxed mb-8">
            Therapy can be a space where you invest in yourself—<br />
            <span className="block mt-2">one of the highest forms of self-care.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss,
            self-esteem issues, or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don’t have to face it alone.
            Therapy offers you the time and space to work toward wellness and peace.
          </p>
        </div>
      </section>

      <hr className="my-0 border-t border-gray-300" />

      {/* Areas of Focus Section */}
      <section className="bg-[#f6f4ef] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-16">Areas of Focus</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div>
              <img
                src="/anixety.png"
                alt="Healthcare Providers"
                className="w-60 h-60 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-serif font-medium text-gray-800 mb-4">
                Anxiety & Stress Management
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs mx-auto">
                Dr. Blake uses evidence-based techniques such as mindfulness and cognitive-behavioral
                therapy to help clients recognize stress triggers and develop effective coping strategies.
                Her goal is to foster calm, clarity, and emotional resilience, both in everyday life and
                during high-pressure situations. Every session is tailored to meet personal needs and comfort levels.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <img
                src="/relation1.png"
                alt="Trauma and Grief"
                className="w-60 h-60 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-serif font-medium text-gray-800 mb-4">
                💑 Relationship Counseling
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs mx-auto">
                Whether it's communication breakdowns, trust issues, or navigating a
                significant life change, Dr. Blake provides a supportive environment
                to rebuild and strengthen relationships. Her sessions help individuals
                and couples deepen their understanding of each other and create healthier
                emotional bonds. Compassionate guidance and structured techniques make space
                for open dialogue and lasting connection
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <img
                src="/trauma1.png"
                alt="Second Generation"
                className="w-60 h-60 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-serif font-medium text-gray-800 mb-4">
                Trauma Recovery
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs mx-auto">
                With a trauma-informed approach, Dr. Blake walks alongside clients as they process
                difficult experiences and reclaim a sense of safety and empowerment. Her practice
                integrates gentle healing methods that foster growth, self-compassion, and renewed
                purpose. Every journey is unique—and she’s here to support yours with care and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>



   
      <section id="rates" className="bg-[#89a6a3] py-20 text-center text-gray-900">
      <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
      Services & Specialties:
    </h2>

    <div className="text-base sm:text-lg md:text-xl font-light mb-6 font-serif flex flex-wrap justify-center gap-4">
      <span>1. Anxiety & Stress Management</span>
      <span>2. Relationship Counseling</span>
      <span>3. Trauma Recovery</span>
    </div>

    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 mt-6">
      Sessions
    </h2>

    <div className="text-base sm:text-lg md:text-xl font-light mb-4 font-serif flex flex-wrap justify-center gap-6">
      <span>1. Individual session : $200</span>
      <span>2. Couples session : $240</span>
    </div>
  </div>
</section>


      {/* faq Section */}
      <section className="min-h-[60vh] bg-[#f9f6ec]  flex justify-center items-start py-20 px-4 bg-white">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl text-blue-900 font-light mb-8 text-center">
            Frequently Asked Questions
          </h1>


          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-300" />



      {/* Contact Section */}
      <section className="bg-[#f9f6ec] p-6 sm:p-12 lg:p-20" id="contact">
        <div className="max-w-xl mx-auto bg-white border border-green-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl md:text-3xl text-green-900 font-bold text-center mb-2">Get In Touch</h2>
          <p className="text-center text-gray-700 mb-6 text-sm">
            Simply fill out the brief fields below and Dr. Norman will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-green-900 mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-green-800 rounded-md px-4 py-2"
                placeholder="Name"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-green-900 mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-green-800 rounded-md px-4 py-2"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-green-900 mb-1">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-green-800 rounded-md px-4 py-2"
                placeholder="(555) 234–5678"
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-green-900 mb-1">What brings you here?</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-green-800 rounded-md px-4 py-2"
                placeholder="How can I help you?"
                rows={3}
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Preferred time */}
            <div>
              <label className="block text-green-900 mb-1">Preferred time to reach you</label>
              <input
                name="preferredTime"
                value={form.preferredTime}
                onChange={handleChange}
                className="w-full border border-green-800 rounded-md px-4 py-2"
                placeholder="e.g., Mornings, Afternoons, Evenings"
              />
              {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>}
            </div>

            {/* Agreement checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1 mr-2"
              />
              <label className="text-sm text-green-900">
                I agree to be contacted
              </label>
            </div>
            {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-green-900 text-white py-2 rounded-md hover:bg-green-800 transition"
            >
              Submit
            </button>
            <p className="text-xs text-gray-600 mt-2">
              ⓘ By clicking submit you consent to receive texts and emails from Dr. Serena Blake, PsyD (Clinical Psychologist)
            </p>
          </form>
        </div>
      </section>

      <hr className="border-t border-gray-300" />

      {/* Footer */}
      <div className="bg-[#f9f6ec] text-center text-[#2d2d2d] py-10 px-4 font-serif">
        <h2 className="text-2xl md:text-3xl font-light mb-4">
          Dr. Serena Blake, PsyD, Clinical Psychologist
        </h2>

        <div className="text-base mb-2 underline">
          <a href="mailto:serena@blakepsychology.com">serena@blakepsychology.com</a>
        </div>

        <div className="text-base mb-2">
          Phone: <span className="underline">(323) 555-0192</span>
        </div>

        <div className="text-base mb-2">
          1287 Maplewood Drive, Los Angeles, CA 90026
        </div>

        <div className="text-base mb-2">
          <strong>Office Hours:</strong> In-person: Tue & Thu, 10 AM–6 PM <br />
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
        </div>

        <div className="text-base mb-4">8 years of practice, 500+ sessions</div>

        <div className="space-x-4 text-sm underline mb-6">
          <a href="#">Home</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Sessiona</a>
        </div>

        <div className="underline text-base mb-8">
          <a href="#">Client Portal</a>
        </div>

        <div className="text-sm">
          © 2025 Dr. Serena Blake, PsyD. All rights reserved.
        </div>
      </div>
    </div>
  );
}