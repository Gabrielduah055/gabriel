import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'MenPulse',
    num: '01',
    title: 'Menopause Platform',
    desc: 'A dual-purpose platform where a medical doctor publishes health blogs and sells wellness products — combining a full content management system with an e-commerce storefront in one cohesive experience.',
    tags: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Figma', 'Commerce + CMS', 'Paystack', 'Brevo', 'Angular','REST API' ],
    href: 'https://men-health-mu.vercel.app',
  },
  {
    id: 'mums-booking-system',
    num: '02',
    title: "Mum's Booking System",
    desc: 'A personal booking platform built for a service business — customers schedule appointments at home or in-shop, choose their service, and manage their bookings end to end. Built with care, for family.',
    tags: ['Next.js', 'Angular', 'Node.js', 'Express', 'MongoDB', 'Figma', 'Booking System'],
    href: 'https://magee-client.vercel.app/',
  },
];
